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
    "4DphGLeStAeZBERoDiK3hEHXVcinUjMWFhTUzwywsMCJg7F7zCAqj2qVWvXJ3oAEhtW8wYvrmnFszZHs8tE26x1G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ktuXimcaWYsSHn6yrxdGMH6YerVDUDbz2dKPvxbZiZCvkFFRX66z4cPgBkhtNAuhLCRbkxL5PfaCXSdbhuWhELV",
  "key1": "hf74paWAtXNy6EvqBbJRtf6g3wM2SXsM5ZbpSkXMSFthkvrXCL6tt5rtTe9bHGLqLyJZ2BYiEfeTR5Y5a2XrZwz",
  "key2": "591jkF9FL9wrQiWiTy6pfoM5Adh64TFAsZ1Rh6fpbEsA5GBZTo7X5aQ2mhwC4nAZN2eGkR1jwSwxcFezdbqiczx1",
  "key3": "3aLkGmF5uRk5LZYCDQJ3TENn41VEiQb4C1Qhm4X5rkZExTEz31KU3RR4zMVpJZYyuz3Hsd5DxD7te8SYFYqeUdu4",
  "key4": "2CJ4Yv5TuhkGRDHnR951KZ6hpx7e4VBywe3ivLM8F2uMD9mB5xXMU7eowduRQJPAW3D3Qt7SvkMFBryyBcAUeXAU",
  "key5": "4RJ8wqMux7DJB4BCcmDdZjJuogtgWhXnk3wgBHWNZZQvpiDUeuqncAzpXBHEx67rjAVhQtKEMdNcLhRy3EqAokLp",
  "key6": "22J2DTeYmrK3xvGcQsMcRSCXj8zywRSuJKtLoR3pc8ito8Dwadec3bUGjENdc15zAA5khZJLPGeRwXDUquQqBRjz",
  "key7": "5F6ZZLrDdMsHbme3pZLymsNFCDQ5C933xqERj35NMubW7ntiQQhyM8HaNwysA5PeQo1kLwWVKKiZ7pT5anZJWPDb",
  "key8": "32UNQpWK7ve7kc82rcY9yc5sEzU5mnMzrXjWmTpGXyWw2fVEx3msYnHJeEhekrfhhqfofgz3j5uNxFHoK7WCoiiq",
  "key9": "67fLzkVqy1TGD2XEQsiwerQxwFfejNSgcQhhXUR1kdYME7NAv63JbMpcx3uNpWieqVtmZqV58q4ftYW3Wf8bXsrf",
  "key10": "huSbZsBQ32K7NHedkxFkKvDXjFdV6dTggtXUE4je3ogrY3KDLoA1sWPebAzSKDevVggk4yrK48sdKwtqHKh3ADo",
  "key11": "unM2xrJhY1p3eXXFpdihsbRgzNQk6gJGhn7upuRJgU1QP8sA2ktyGAtBKtX5QfxhMW5QBX72Qwkjar9c8zXmex1",
  "key12": "61ffHihC1fTAvwhYAiTUwbJMjaL5v6s4GvtYv47N16D1rjtYv3ezbU1aXrbivyB6nRmyQJDfWwJEgyy1F6uaQBEt",
  "key13": "RMyEh38cuv1RVzqNkgFF61A88BCYGc39HiByW5pMwp5nFYWkBwxxpJrqFpsPepFF5ZACdQ1YjFDETmNUokG2XCb",
  "key14": "4D2TiwLrtxS39neyoiQsJfkD2CvyjwhF9cC4Mdkc4DCavrKtyjb2HpkJJjhYgJjhiEbP42feoFhiSNDyWJMwjzjz",
  "key15": "25jJMVRontndM2DMPGHniXCQNTaDWGo1mdNaMwzF9dKPPEehjMcKysgmaJAXtmghYRiXAwtKpPEqWHiDAqUEun47",
  "key16": "2pmhJsz7FvbTepgKZwTUXDJVAWFujgXHVs6voSrmf2Q4QckP5ocaPUHfESGJcHhDdfDoPaQRyYMivNnK6kRNYhJp",
  "key17": "2zF6pUvXQbHGiWbBtwoB5wtV22XjB33dHesKT3dtmAa21U7UptbCDjh2Dyonc78G5szANQkEK3psurGxWE5Ni6SN",
  "key18": "67Jp1JcBDrhoxSV5U8DbNB7SpceW6vSbQeSZ55h6Httj2r5au7yGG7hPQAmDauTCsoFGsq2NV3TRxtQdXdqjGEQs",
  "key19": "3Ywpu9ftzETH6QNfK8DSYQDKVSjQaNxHaz8zkKY8iVJqVzKmJRicZmVoGftQ7gUpiN1KWhM5dWQVDakTGAopJaXx",
  "key20": "5V48JTfBxSWw7Y8khtyvidzzy9h5bv8JB2ac7MnTncLZxpekMPTEyiZYxq5ejkJyncRdkHSb4Kh6mhTG47L4vHmg",
  "key21": "2Qv1sTSGiBwvjUtaARj8DRFYQo8frGEaE5YT9KEDk3pcmjYk6p48ATpzW3Dqoqp2LkBNHosLAknejNiTPa6EhMj7",
  "key22": "5CXJANyoVv51yUURXdNp8w61fE4VXtw383jxaDCd2a8UVWU43sk1NstH6oHzwTXAszLdSSX8A18CVUmqHMpKqQ1e",
  "key23": "4hjWAZTy32xHcrS754PzTaeH5UrEui2ZjgBFDfGrdezrKNPFw5Ws6AHHCr1WmdpXFSno355TRbAUUzeqjySkbtC3",
  "key24": "mJRNmnsyiJsdY9sme9m2ABb4UVYkkn37dBa8zcpw1BSMzbD173YwpPaTVtRT7RUnZjrjb8iiiiBvJ5FkPATJPy5",
  "key25": "8Rdo8dU1zrDDc4FdHXgmpFfV8PuUSztdMtzfPBt3rVHhNdvrJeq1QiRAbPjsg89uWHdVTrCsVtAeg7bTxebMF8D",
  "key26": "5QgL4QaCWuRPrr8QsiKvnPoLi4TDdL4zq3rb7XMkuFb7TS7iy5uyCg58xz8LAqPBTSaxwgdYJbNb939sQmdFZgVe",
  "key27": "5b1SgqV4HXCTCJA3xMBEwce76fSLkvpxfBXkn1c9o11tjbqA9jbqAnLaEfLaJ2RVSwY1AMVKAJ65SoU4CShRAv8R",
  "key28": "61J7JU2NEuHuHFN8ZevVoYeojquTFN9aNvAKx9zQPBMcwbY9c7PgMoYoe6HTvbvyQUuuj6FZE68sewMYSGjRjE3r",
  "key29": "5v7HbymwgJyteSqmFMrbs34eb4Tsthj4fm4jE5BJqF79UbLucZQNUqSqgE6ZHjWKvkK7f2pBCZ4DCpFYHDmdq4xy",
  "key30": "5KEzatHPboLNjvCck2W8cujQqerxBmJ7TGbDS3N1wjEPKyscrACmn9raWpmuEgJWaBbWAJ6BWV1UstgM9csp9ka4",
  "key31": "2ePYQ66TYCq9kyE1hB7MuVzff1qEoczHHUBy6NAcWinY84YR6ZhRQcdmEdrWwjujmyenz4EECHTmWEypHPGA6cUf",
  "key32": "63FtWtMucmqUtieY315D2gGE1V6HiSUR8VjyeXAx5uomToyaZZc4wmyfXc14NRHmhkB6whLco6BKWdaYRfbQ3TYE",
  "key33": "2p99Pa7A1k5zW545q3Wun86vuar3dePmNz3mcd8wrvCio6Nf845dXg3bRiK7T79pwecPJSBhUXSWPZSZFVfuSGrz",
  "key34": "3GBSiiU8RT99C2TJYmygvLvX9FfbDdgRjK6Hue4qUwh5ZubRhycuG78fnj28x3X19byWvu921kLUN6Abndna9iWN",
  "key35": "4dYQ3vWyoxUKskpG6N7AsF9viSPkQTHTsiW8VJSbux2fXgLjPKiHX3f5yE4MP6aY7PthpC69pyR7D5qX5Ateqvrk",
  "key36": "4wykM28c6cW8AE5cvmZtSFuNRa4kNcebe8DDtFHDvyHaHGfko4kJhPTXwVJ6ebH2qBPr7YWmbex214BbfFeBMQVp",
  "key37": "Sf9s4M7SNkzXuPXEPS4EgkSiBY5nfnicLjHoiX7KeNxRHBx7svrBTsvPBNWAx6MW8xSz6Yy71sC9rmwXnedr6V6",
  "key38": "4Bb2NwybADUTkZ2eLS4oj5M6N45C7U4BjoBZDP7pqXJjf8tGTo2Nmk2dmXT15UJ66yDAXUL2HKAU7R9zKjQwxwho",
  "key39": "3HF6wWMZD9XfLyMpg7WnN12mo7voPbEbMi5Vhk5GzZSYXnPtT2ragSeBMUyiA9JVvLkhH5kkPKTSqYxV6HunDuvo",
  "key40": "4GtnSEbve8wJ6xD3HJbzcizWPvZoSAnpY6Z89Sau7Kw4bTZ5SmdidZYxFqcu8wApf3BXCjVk3jCHTwtfUQRq7TnU",
  "key41": "3Xqoo7urhA4tXbLgxji1qs6eWATCFMffwXfyksMAMGxVXJip8TgN9vW9oWZzBJRefG4NSef2oGCRAXeKLLdPyQZr"
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
