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
    "4WbeYVuH5h2TZ8yYLLF4JvkZbyd37MckhEFfvSM9US7rb3Y4hugzwVeWGmjaFyHzyryvya9qFQiKsy92bkq6PBfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YBWYK5PuZNU8eTzzsFHRjjQx3dhGa78ggCWy4eETeWaZaBwV5mdRYaiR7MGN6qgoQ4tBLuos6o1VmvgPNU1xHEy",
  "key1": "HnuQvkvsBxyzKAmoMa4q8zBvQy41wifjr7Mty9g4MpmzZpYoQSKcG8D8cGL8kEpC1J2gZqZXDDYmHvu5Pj3ys9M",
  "key2": "5tknqfTnnKn4nycuS5XaWPZQN1Ve7WsFecjDSBxXbdwcoSQgnC4yGuvqp47oWNynHKpsSjU6VNeC3v4FwrJNXLKz",
  "key3": "4WBmw7ozFDAyNnKG6avk6rsACT8TAkZejYVsSupHUhQXBSakD8EJo12EAcexexrtva7sBXYrAGtLYMeGqDhUGf75",
  "key4": "2UbbyqdH9u856L1aFsCYMXRpaMsmnMh8mMeMZtcxKoDjBsEgBBLYFsGS3JLMXQc5TX6PkYmfZrCE2EEtUEJaL45r",
  "key5": "3HF7ctistmXEUAwrja9Kgm8PNB8faSrKSNvMUDGB63KzoVhhcoWMk14BAHqQspagfqkwgDxvbNHXxbyeGUPWutBm",
  "key6": "43N8aA4B8fTpLNAxB89etk3crS5TTNPgBqZmEoK4d4wei1tQtX35YFXaxVySVZtfGpayjfjKy8mRo9HhjiWRfvzg",
  "key7": "5FACBNdEoDyic9qut7bQN4EpBrwFgsaGTYUz1j532YsUjMbPv3V5kKbQZVqgc1g7XQLoVg7xkGwJAUSTasjdK8sy",
  "key8": "5cwRjjRCs5FA58QzTQ6aoX7XkbM595iEzQGEuAgdGS6Szwfg6D46c2vjwrVv4vJrxzBcVEH4JMxzio3cZxLpKnwi",
  "key9": "4UsUPPEwsN3Vt1dW6Nv4MfCCqQsPE2KU2trNgG56iMx5wXa4JUeBARaokz7BR3AE8xwa1k9K7KfxYy2YLF4iUyJC",
  "key10": "39gnExtCM4jZtHHS6Apq5BdmKdZiDnb3c5tfUk73b6LKPsFur2q3EJCR1iK4Q2Wm3wgDwinVSo2GnQywV1M8dM9k",
  "key11": "5N6Wx4QnaLzypFGpPcxGLwyYRSj34VjZnVSBDPjhSHDYqTfFfMC4M7AEuNgBwXwqqzEZv75CL5Xs6ycySUcW9xXR",
  "key12": "4sBWv9cHYM7zXw6QzZk9z4t7YrfXJJWLJFrN8tqC9zjyEptZgEaw1h4Gx1KAh8PCv6hPDqdQiJcoUqCXYMSjJ2cn",
  "key13": "zC9J7oZ3fj4rLwTb3Noqz6KNL4cmT2TAUq3HYPLfJS5xxfSaMukiAejNxemAAdsovpkR5ZGm1gvZev2yvPoQtu6",
  "key14": "3xZeu4R3yrrzh9asbqHGUiyE5CCmiWe6xnR3W1q7w5mvFYXBZZ6qk9VeqVcwtZmddkE9Wkupu8bvv48JEK7JGED7",
  "key15": "2R7pPpgZmB7jcfkXnjf3jnEX7B2SedtfNuqkBjc8AXzcYPvfFx8CZq92anHrDM7PXJY9FhE2N2xiM3ZGQSawsB6e",
  "key16": "2Xae8JNgwp9aKBHaGR1qSTa1K9Wnaj9AsmV2VwfDmLBLmLMq1D2QkLQb8o1b8nDrWuuSdevqv3oWm5dQLN3np3rg",
  "key17": "4MQa9fJWjaTvTnfChjsTVur2R7YRkbu1MCwdHySufZjUXdMosdfB1NHboj4RZPfK2QVn6Rzt6s9AkUNVvyH6WKJr",
  "key18": "jXy1hhzV7ajmk9vUYn4Eovy9H8jaMC2eeMW9ZwdBNZPSX3F9wu6EMuGcfRegne85NegJ3v7qFgYB6j6WMGuhyJk",
  "key19": "66AWmynCpYb5VmyzFVxxFwwWJX2yi72RU1stgR8KVx5fYhjv9Ww31o41NYWveBVXPFRX1zkSaWFHi6gvZQgjs3Am",
  "key20": "2LaZdcwPCXmdTwzcEBqhgQ7rYoUsDjEAdFvtLitQqWszzfCqGMZNMLsfibY69FfRs7Q9sUqKAo2E8snJWV6c8iBT",
  "key21": "2kM2zZVDNVonSb6vQG29LAiMp57nUMBu99B8DSoV7n9WSsHiQTDd5Vq7D4BsFERwCYXcWnymppk3mehD1PMqUzDL",
  "key22": "52EjuczUNAmduYfDMWJoUkoYU6gEDuXc22eDf1vd1LjDN1qM7VvNryechm2SAw8hhjo86yikTsu3EzWNxDurdThR",
  "key23": "5fyU6Qr25ayED4oudZLny65YiBg46NWEKSLxhh8ZgsoJ1bofZgHzjNqpHWsoF7rLyk2Go9jzZ1WT1hP6LSZNyBVQ",
  "key24": "4BVfiKu5H6xv4gJyEkmQpvBg26vwohGngwBp7vRf2avTVKQTfecmmNFi6U9eqwqbjA9PC9ZWaVW2QrLbM3rTzJoE",
  "key25": "EuZibWpR7X4CP3SyRQ4mpv7tUu71HD9t4kgEs5VRUv16FEV5wkPPASC7WLQf46hDa7SAWW2LXN5tb2obaAHfnQx",
  "key26": "5Gat7NrqGdKW15sMC69H55n3KEZ5U5EcGozbwbu78q11F5UUpjLXVgqnAvs1kfkLcznNR4cGXtSJu8xJNo7naxoX",
  "key27": "2fZYhnJ2k21BLarzgHjEwoChTNkztRSnxx4k7znrQP8H6ybhExH3PctUfBf6HFhSa5N5LNHW4Ty6MmxC59SQCpt",
  "key28": "5nfEYcgahVdPn7vSAkcE84xTniWsJC62Mv4toDzdJPsnWr1EbvyjwZs95mXxnB2Joamend1i9JxdDYtxHiC8Dkiv",
  "key29": "omNGa6wbKMggwvdjjtcdWFvub6GnmukomNshg5hyCs8wQVAJrttffRRAVodTYSd36wPdjs9Y1bHGCK1HoaDbgWP",
  "key30": "zC7ZEYmyzH1dCQRzFknW9W16mpEPNf5rECjA2bq4Poc7eJmTEp1mmr31zGiNf2kTSahTZfdfP13B2sZJBUUnzr7",
  "key31": "2161fumfaLaGYj76kPcGmsi6PiUaLgZqe23UcaGqMRAFGhvttDmCDQdq1UB1Pq52n7bipTCjG41Y5j3nHM5axRMz",
  "key32": "3geqmPnyMgbxdiko8LvGgrR7UTKZx4XnnCmqSSPfkHHVGtffGzSkb7JwHzcQxK6CjdhDEjmB1vkpE2vWgH9A443S",
  "key33": "23ExGYWznWLQ9w3apUCvv5Rg3j6xz4Qm3936WFtPaZR4PApu9StYK4TNv21Wdma8fmmRKm3wG1DK4CcvqCap5GDV",
  "key34": "Z9S5bW8q5HrN9QYU1nxeA48kxCDZyKRLLHTbfvRkDjgSDPyBeYsBNbZ4QH4duYBawL7dgRauorW5XNZWiiYZVZs",
  "key35": "2vdgVhCqRJmZoBvGu9RQEp6wnPr6PGCSjbUBF4avwGPJ4MtAXRPJBJFALwYHrZfqj6CDQXCAKCZiPxDbu5wkfatJ",
  "key36": "3RgNaUQbgz8c8vZTr6UTbTRNxrax1oFGHbDrpD7tV1Jo8vwMmi92pFKEx8eC2zrPpT6G3F2UZ3ryMH9ypjG82xpD",
  "key37": "4Ljpzaa1oY4xo8Ackz9riJsBKHJ7wZmsnWb2uXDSAQyWRUAdcfbRJjFhh8otkT3qeEz4aEHvJNoCUdtUSqBJ4ej3",
  "key38": "cLkg6hLh7ii4HyuNEt9HpfvrJcssLuZr8aCtHpoMFuxQx8bT4hnMCQqWLjMrPJXARhn3wEiJWdwvbKDxq8w3dXg"
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
