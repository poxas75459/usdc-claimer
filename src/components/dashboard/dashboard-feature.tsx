/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "b6K3kHgitFaewKHaSWYVPQQcmC4TAq5VEa1tPb9wFKiYuiiSYL8PWUSRRS6Mbge8znrycCFZB9zytjW8krGbsjR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JSrojdom6U2WrzVE7SJHkmgUgqcvL5cpcutCaGLRzBmjdxAmCVyZcpdgdkqNQCSDFmGDfkpMniiUJJVPSxjCvPF",
  "key1": "4dvZTzjm7aLzydopxqoivaVpn2gyemNtwSRGwKUijCsrWkWAoU6xDePYw1mCHKD6oq1nNRBTsEu1d5PWyM6X93zv",
  "key2": "5X6DfmGsm9PxRj4SHNJGub5eFSU28gWcTbbmGesyTnRMMzzYosETFHCnJNp7nRyzVRbrpZSTUr625P5qmXESQm5K",
  "key3": "3hgNWHJQ3Xr7N6Gy8QnJC3fML7DCSNeMWwK73Hw4ccdru1GWmfnRX7JxHWYKs3YgxzdJuLfmGTPw4tm574xHe7jD",
  "key4": "43ccLM11NbWknoTkFW9qLjD8fUhK5iZxamDfGPKF5dNhLYD9KMBmngemsdWuq62oHyhP42BwZeMN82cJrzjv8ffd",
  "key5": "2fy5fZmBmEz3c5VtXVuYm18hvRwixGBFfi3TKuVDTGcfYdkg2MUih4pH7kKwoTa51gcZXK5Eo86KhUKbvDvzr6bg",
  "key6": "i9ERFwsjreEVGEMXFsyUDRrWbwBRAqAHq3HRKLrSEwmoNi7YBSq3FvRXYi4bGJqXw1S4jy6mQL4MzxA7D1H6ZYv",
  "key7": "rUN2o9kAYnx9Gy9Fb7onuE83EuhzjkAQDuY44zboWk4ukJNhiUvEwdWCdGEt5drLWm6aKm4M7oB8FGJEsqA1f3v",
  "key8": "2WM4R11bsL5nHg1J6FMmnMFoVB885iQBD9zTaHGJu3XEhEDCU4nKb7jtiah8vCSEZsYtmAgSpVTCPjVXTh3yBJBy",
  "key9": "46JQLKBL7agCvK2eBG5CK7pGXFvMKhQGM1PyKczQZCJSGcKXwhYRFc34knjufKLzHrqmJgSdi5hmd2NfkdNJgyPB",
  "key10": "3o9Ro6TRamKjFk7veHx7YoS9tKiqbuwmpmb3BB2sLd9Z8ntUNRobFCoezjMFF7a2wTXsDgCjMVwx9hDGbjc8s43",
  "key11": "4J98RbFmtmhxs76CuqJCGzuEbfmXJDGkNF1zbBd9WPu3nVxeD37buVc3zfbUv3sAWFGUJTyage3ttEkrRp2SLUm1",
  "key12": "TNV8e9cQRM2HFYPEA4Vk2gNb874vr1zbK3dRoMCw4WFb6eNf3am3a3jCBVLD9QWXy3xqtMP1MuHSovMaynbxsbM",
  "key13": "2VVSutfvYwe3QwD2CNXJE8PseggozZcvampuUmFRLqd5gZqCVLroeGsp1YYDBfN3hKpA55YPb1a116CMLdapM6PQ",
  "key14": "4KPopAFRXwSAk4NWpeHSpNRMEALcCgNBZU5aiTJypg4qkrzi6xDf6qZYMWned21q9Ct6nkMrCEeVrDJxcyowvzFS",
  "key15": "4GVvNcvUkZaKj2atj4fdfgXjXeyHLcw69TSopHpYFa3uy83hmWzHit2HjgxNQkn1yoR8YxyhKkMpqTDYQo928ub",
  "key16": "3D3qttWv47KEPdM4tsYrT6HB4jNira9zGfD1ziJi5KmxAshboV9PkuKY9vRRNb9amQ1CbUxLoPAmDv6z5xaZTWvV",
  "key17": "77CzCRYRUrHKGrbEGmGv86Z45zEgG9ouitCuQgT7h4UqojapPt4thCMVLtk5agdEYSaA53DTFw6K2TrDdsuW5nq",
  "key18": "Y5D4TvwSTPKaYNJMHr1qtwquna49FVTM1ZWydCeUdpM64zhWXPWqgwWaU8zdmuUKio1L3H2Gbgpjm8BY3aC3ekf",
  "key19": "4zPvtZAM3HamA5dAFASD5WpjZhRZKzZYaPVPnDz79cKWRZcBn4T5kgbGTMjMX2rFjQner4SkgcEkkCRWzuHsQW8K",
  "key20": "5kqVDtPJs2tfLH6Pdi16b8qNb1GaYqPjjCqq9nQi7fpNK5LehRBaeWARRLTLge6EAxg6BcU88yi1ocqdqrPERj1C",
  "key21": "4DngbCaH6oDVCaBUxR4jSvbX69BzPmGZStvByLgDMx6o46Bigofay1qF766VJf86J6DrT6nYTMVrG6xqYkxkx8Aq",
  "key22": "3iRppBPWPMzJhynhJ7otmoWgyQtx8N3RjRW4y8Pkk11m2p9bLyqbBSHLvUtapqtcqTaQGexXLHwGxGAaJSFHxHhM",
  "key23": "65bthhnbfvGrhvMz8ctac56y64SrBZiqrK2DztfSzCheE4fcB5uLbu7Y7wN5DcbPYPsxMZWDNBmYbrTAZXgbuY7w",
  "key24": "7ht6rhJzjMeQo6QebTsqUMZh8eG7tWax5MdFJaTgcPkBXKkwskkffUQZMGvYJGLS4f59ochimoq6mrr4AURgpDQ",
  "key25": "4G9sDnAS2C8kWW4tULmEm2bfc5aQqrYJ7cJTcExvYpVTHatuDdcwXUZYyMyG77HHHMncpU3V1yH7NWycLPtRHwHL",
  "key26": "3Z8GJRfnBAg3M23P7q6hWCgEXoBRpcHdx5rFq4C56fG2PhxW8dfeLsmETCWWcE9u4geZosodiXyB4Y9y4WbFNTyC",
  "key27": "4ZxCWxEkcLqX4vLWvkiXv2xStxME4tThgHTcymwEtdgf1bZpfvWrHewTnD2yCjS34MKQfJcmg1mCpVFZYcLNY49k",
  "key28": "x5ogyt5uRNBRqiiU94ACLbr9DuE4dT6HcAJDBsaCpE7SobKhaco9Amt9xVx7swv34fMSaeWKEaRB4JSrMLweoVs",
  "key29": "572zw778AsVG1Q6n5fgU5fuJR8mNLYSKJNWqkDMzLqEXbeRBm3AF9ty5NWRmZyteXryvrUexhXHhTCRRii453pX1",
  "key30": "2fgfhhsoV5LhFneUqw4VP9zDjZ5EjM8MbFcitvBmTn17NN1oPxuBf164hGWhYx5XcKDYEcuDyYfcAjyXQ5bDsd5i",
  "key31": "4pGBZo2AHfhoFteDbvQgzSmTxurKCcRLJjXsvcw9AzFYr47yEuffC3jxKYN5ZHhDALeRHSPCJXTSYibAtRWLPNtC",
  "key32": "3imLMEdFFetPhtaXn3TxoJ6MxwZoYn4os6fzX1DkbfS45HmVds6BREsiyHHj3qDj7cEwH9UKHMkHpzEg3vKcrZFb",
  "key33": "JvrM2m4RovBYEWfLYwwdQf9ncxiAKjUYc5ETQswe9WDFhQZns946irnjFkVTrfNiGjCVfAq8DU62ApUBtebr34f",
  "key34": "3syUZLkot59Y5EhuS5ECERiSvRZctjnecsd7VYreHpR787aWtG7EQg2LvFjASgjSHZvp7YkfpjouY2vgoGxjgwB6",
  "key35": "5EVwL2SnFBakH4JGUggF6SzQdKPY5eNqoqKhLBZ4Fufje9JaAHnzKvhC1fmHxJmGr63Jn2ugpomUU6bnfDsJJmPq",
  "key36": "4hE8sqxWxo7rRyhz53kEuqQ4KQX5VMAe567s69bcGwmN9tpjSsyYsifLFH25BbBGQ2N12mqkHMvtN8pkHnZ3dwup",
  "key37": "4zFcnKwJVCEmk9EGbQ4jXWzHHNoE7WJf1zsTTFxwtTrp8q59ABotiM56JthChhbxR7m8kXfH4mzshj1YBLFhrrFK",
  "key38": "2oUUbMuAhJMuG4jdwZZt7StoWBeXRZgg38tgDoTAhRccAApv1ybjoReWNQXSTs4FV48gSXRNGGo2yLovCkKn5yoZ",
  "key39": "3zmcWyxWs5GhZhWKtWoPPppstmt4yKWzAK57XiV6cWNm4cRZcdmMB3SRrCbuZe1eCvi6xSrAyX5cWHipzCjwTPcQ",
  "key40": "3pNEzqcNLo5Pdv5F5ym2synAyBRE4MniwSkjcNBtHdFzBd7i2rwon6eymj3JPQirm3WAxvknKbFr9c5FbvB67FDy",
  "key41": "R2583bF5Szc1YeYNWLG8ZRJ7PGgNCrAeWH27URLZhQ7p497AEN52GNsYQXP8F1s2HWCiuYiuqBysR4SPgDDZAJe",
  "key42": "2QCAvD1FzpmctwpFczfdRQcjGcUNVVRtvsrJ5u62NbE95UpfYUW1LAe5zwDKW3a1ysBW1B55iqU3mNGbxZXysBjV",
  "key43": "3TcNQgG9JGLzyWvruJRCB1R9TBNeUmUHRFrC4uBBiq9BJDP2BsnL1xSQFcAHdNMUs7MXaKfSYN731F5p7E95Q6Wh",
  "key44": "3f14rEHyDCXqefAFeHdyYbdHgMRHt82MGDXmBzAkkMvzSqEVjjhYgsfLGxe3ogEmpPLGARrVGRthSFw1obq6e5gE",
  "key45": "4Lw1WjqmMrRBdKK92swbDAJDePCEATrxS8CupGXWXqtsWTfcXBNewUTqvFzHHxQkR8aUTwfkTMm3UokZhMdNHgVB",
  "key46": "24MwXfax3JEPxByyLnwscVWAFYF8Mbv7LyKLtqbXujdPbVVEMLuZDvfaixeqvAdcf7CuBoYBsTtw7UFYidgus26y",
  "key47": "cGMA6hk4jZCogLJChrwn73ynYDkUKXQrmx7oYFRUktdVaaGYf6uzxPFaPRxX3J25DsAnPsD3M7hth1Zf3E183jS",
  "key48": "5UK6Jb28H1gDhfNa39uQQSR9Pm4NUUcTFuz1aJzNZqZT7ZjdKCntrbM8qXwN93rssEVZeeUbtrkovziVp1LZkU9n"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
