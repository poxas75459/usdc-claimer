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
    "2mFdAZKxSKiF46YEs4oQmCcBK9xEGpLLuCCb5gyXiXKC3VmomcccMu1HfL9ksGiFN1Bm4qA6qkWSUDTPdvsSc9ya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CeUo2Nt13wZz8vuvudgyspRd3xjUkk8eFu3GWTYyHzHhYTnPxF38uQ9Euy6SevSiRhUni3yA5p8oYw5cW9xEjQt",
  "key1": "5K7vGZXaP2JC3bf44ZtLZTmUKvP2jpRmmT3SGuL3va7iZ4jeqUyTdvd2wzMi53ww5cKdcbFkr3P9rS9ma4jqvvNd",
  "key2": "3iQDZMjKyTJQZdvqGtJzEzyQG52y6A1ZrWSKveFBB6ABcaJUwVh4h2D7jorp1LYt3XFrx3vLNuooeKUoGrXimjhm",
  "key3": "5oMn6wTnLA5vP69Jx5rijYz1hCAfnnN7gvYjuhJs7WgmKJuzLk2itvwiFkXkjhgzTkPonzeqWVmmYoetPbJUFFom",
  "key4": "2qMQaTw1aVHRzNL4Fx3QPvbLECW1r9EYZJxaEaUUmHcKpiZzjxxn2A3TeAHX3FSihFwUixHHMNLqAPXeeTcW5T6z",
  "key5": "3XbhhkTRk43A7AEFtdLqn1bkpynE4t4Cj2pWqn54yUhrToCGjjd5pKDo644pqjmFeZBh4d3ZS7pvATsWzSaCnvRh",
  "key6": "5erdnx5Hqu2iS41Mmz2h2qJBie7ye58P2o4j8Z9CLTEC714AP3P6hkA2tFHMrDKczaZHasmy8WgoGayRPwYSdmCF",
  "key7": "s778GG6EZTqw5qfGnEukbc9hcHnffeJr7mMfn15nRJ5ioY5DkJjgHmEp7za45EmewU7qPCuYrz5cFD7oQfhveJE",
  "key8": "4m8jwPajVS2A1kvSS4F1Dz3AjN6DYaf6Anj72YuhdrAJxbu7KLKN8TvQbMtFn2Ua57jnAPhr6Uwfyr6e66XQQPJQ",
  "key9": "3tbER2ugpWZuda7gSZdh8Eq2tHk5dH2y2Ajfaq2apidCQ1caTSnL3XvPmLrhJuhPp8cfNKXq6rCJYJZEVnLqRFTj",
  "key10": "5N8Zjea4geQuGHGEVAiMtRQin7YG5zxuc4RZQe9Szjs2sduoJEgEUx1wMb83N9Y1PgmB41DnMuznFvwK3APyBtSo",
  "key11": "5odanY9b5LRS8KmZ9KRDb9u6F4NbJHYu9WG3Jej3jToCWbYD6TeA539GksgLRSs7Di2hHoj9gxZep3vhEg8cUZLJ",
  "key12": "nkkVFqPo8fETSRrC5Uz5jyjW2dNeiDsaoMvVeu7jHh1S6NU9DrWU6UrxcucLb3dbznCTux8Mz1ypKxeG4711gLZ",
  "key13": "4eibeXqdLpRftHsoQqrMhFuSaMWYBa9GvuZoPLQuVRt5oqAWDSobaA1Hw7tBcntp2u7eKaHM6srzMMBxje6iE23C",
  "key14": "54JszE3v56KajcquLzWvPWPPrfuyF9Rwg6f7jQFQP2bhwL5fFbhcFQJZX1qcSjPaGqYDNUw7cckjWaaJ9op8qkYh",
  "key15": "3N9jeHt1cGz4EpkXicAJavZ99HapdiMEnf7Hgbdhzf8h5fCHCyDnoTubwq7DgyQC23ahwreuRqeSHeSbwTJRYrBd",
  "key16": "3L2X2MvzsMFh7eAKd2Zt4fc8TQNYosDHzJ13Eg9zSPuEDYkmCEG8yEUbCSiKYUp5HTz7h9mJadQZsLAr4piNvzjR",
  "key17": "3FNgLGXPZzxqq2WVRqko6xG26ADqo4d5xZKCzrrcdd1HcdU5ME1eCu2YwXGKyvF5ZV3fi41X5HKTGFkRE7JfirkD",
  "key18": "2r1EnLgDhK3TLy1dYmA5gzzK67p11ESKE7Hv7iV6M5zLgavAbXaRmfXCLK7jx63yy2zJTeFwFjBQCgGtcd7VZXBG",
  "key19": "3GWbqskx24n9GHrJsrR1dLkxDM1TWzmNAHUW2Hns7TyqSLE5ofKPhKDeWLrXt4V8e6bmZS78vQLBquTkR2AvtLCN",
  "key20": "5Ek9TEk4UwB6qTNQ4QFuZQJJqoJ12JodqhicmB6sU9HpxiFxZzL2iRkoKUr7NMmfw7fsuC6KgFkhAZmPtpsVv88h",
  "key21": "5znTaeJMTxG3G99GH2vNaGi5dbqBwL9edSCPxMZaNoYjbJovTN2jHASmA7N8taXAWTzRHPay6cMZfUZaH5znALe6",
  "key22": "58hBQkTQmHXmDQNuLr1CiYeJQbnLhRZyHr4JpWLqeuCHtEzaPZsZn5SjfHiWRifikKw2eFo2MDV9vex7rHSrcJtG",
  "key23": "uFu8Dmzr6332DDJNHdPJmE5un9HJnbVVrEJmGPDG1BY6XhDdtZeELHhJtPp9dMmcf9qFj3SNnePEbaTdYNp72zH",
  "key24": "md1eruNkcrGhuU4WpARf2nMmu5cWgCchfmGFF23zr85htEe6AESd2btRLsDN545bsyuEJXKzfcgcUtwzRKJDFgM",
  "key25": "46zKpPXbxQrQxDezPxxudNKMu5bJkTp1T8aPPT3GmF5w2AXJ9XtcHmMGLZsSX5akYLMRokGixpQwbMqLhpDSvqib",
  "key26": "2dLonPoW1X5EfMjmPeJPYuJMhYnmVisx2HddZuSKjj1kiP8Z5rXnucNp8q4Mp3r7gUNRuXXCaungNbJQ3peafhiK",
  "key27": "7JyWipTTUZohdwrwqn5RoUTrZ1ecKDoc57g3oBhiVnHFt2uTghs7FLPxFQRZjoXcRjPKZj63YmbR5wGUtQCMrot",
  "key28": "2dQKaziizqeUQf4Aor1PPChowgRzJpqvqxoGwHd3NpaRmdiT7uaynbesQWus3j74YYfRqkjTE2PRZUkqFu9t49fR",
  "key29": "2EjcnfdYdJdNmk88E8UgXAG8oXAmJ2bKkaZzWnhSwgqh9UWLGUkk231YY5ZCBHovgbPwpgoevkTzLLProYVoqHgC",
  "key30": "3CXkZVDvKmxruZHwuifpqJsrtFadxEcpt1YKXkY3sQnozsQopH6f5vLok68H85vP8Di4jMHA2B5bd2SvFE3eeywf",
  "key31": "469e9xpPjfYWAc8RrZPwBwxJ3qqenyFyK3TEeY2NdPSCKACzNtZZeEoTpshKkuWqiGi2wZC7adgqQrLcvCQYtjvP",
  "key32": "4V38HN8JbVKXwFfxDLrDURP657cudwDRXZELmyUP7AbM8unUddUV9yPYmw1YKivYgXNqdVnHKGcc171Sfeh8FArB",
  "key33": "5n6B2h7uYBG5r7Un6GvnhRcA9CYwvtBthnkMkBUa3G5kRdb6JAZoRQb1dLUgQmcy5nazx8TJhcwtK6gqMjkm5rCT",
  "key34": "N25J56gqph6eSp5sKcNGZV1iYiKo9brH7yYXgMUuJkvJV3M9rMzPu6EePxqUoVqSkXF4vAbRBVsNjinJ55WXvH8",
  "key35": "3nyJ9ti9NTbwazENVFwkzuTsN1F2MzNcy65KJtM55wwBKSXKQ5a3Hzzuoo54isBaoedDztW3axwm5SjxaqiVdAyW",
  "key36": "3MLbSAzamiLKykyztdsg6NpRcEvrzAXjqiq4nq5T4cD8NjYVGyJYGk64YYXbErqbiZLbqYsfWYRPSQuoHvTAB9A",
  "key37": "2einqNxZHGwDcgVBpWm1UxvokwxQzWb16FHqNAkDi6qyC9Y4oTGuHhXdEzZwNu2hyKuq5euee5HkCLojqYamNBjZ",
  "key38": "1rjxR9gSaowvcJ8P85DhMzyUfBemd1arNSdVNYRqMxE29rvJfTi277joDEQUzJ6FrYuHywsQz5harhinPJh2ChU",
  "key39": "Nja59NZVosjFLJg63Xawwq5SCb9p4qBSK1xxpJ6X65owZp9hndJBAiY56Hbb9yu4m6rsuBzu7UWqXK2Hs5Qs8LN",
  "key40": "4MLL7wPiw4ZLoLtKcgGeN2itj2mAb9YM73AhV56T7WBRjQ7UbJrBTF2Hz4zxJ1zSJKGaLUyoWksAfUKibpWqNjXG",
  "key41": "2oTVPKdG4VbyjwikTmVDPaMSLmzWPpmvR8nSxriuFVAZASYpPU2hCzJG4P9MVqowp4z8xTyW3GcpVPmZACgezPZC",
  "key42": "3W7Zoo73bb5Q2MGf1Uq4iAoxEAgTbDTTJBCcKgKYuDmkeyKV2churL9CuC2gBhwFKBoqnXTe7LXCibJyUEZjbMoA",
  "key43": "4cGC4Kt7kkZxRfTKV2zW2JZF6PxSL7Q2kbxnrcv9D8PrimoPXT4iBqNo1DkzKxXc2v2abztwBGvdZ1dgt5sNp9qk",
  "key44": "2NRgYQsuwonQ5Qnv19RYCdkAVRRXHSXaLGSBRKA9AdAck1aJCqZ22SJQtAHRcLtxZ9xZJmKdkWEcj6en5TXFHCd5",
  "key45": "2e5sRt6dwD6Foj936gCEvm8iEmZJ2VMosM6xzfYNTkWMu4NuJKu4XaRWA5n4a1PVzWKJw6FeWQuWej4jTq9UAowG",
  "key46": "5t8FrGgSwR3gZum2dCmqKgWSncNVzXnrTkg1wq8Z5gu3H4Cbhnhdk4zbAk5iwAQQ9s4p7Lc7KsTB8XHPNWzzwrDN",
  "key47": "4DMxCRmgaAkkJY4f7oagPfhGVunCiPjMehNDgL4mkhHESNRbxP2TFnq1Zc1xcpAV4kjzuCjAcn5T4qKW8dDqCmRy",
  "key48": "KNPkACvfL1ZSLBJ6uCZvL2H2D55RH9ruG1vhJ74WNHUcJp9yoUNB5zzGkRv2Ha9HY54G3FAa5q3qp37FJu7RLxj",
  "key49": "6nk7vHtEvmpsrvhxajrxTSXwESwGgtYmvC8GQgMGQ6HouNzy4yE9A9k1rVA46x1swfRibMvdB7UQmUc5jPMzFhQ"
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
