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
    "WNeZt9kRt6ozkA6wuRwMuA1DTR5rcJLoj5VCYJWzUeeyHS22YN4SJznbQmR6X7iNb9FsyKDpPLjZt7jt8b29QFJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dwreb4cZAzzz5FWEaGwNUWp3P7qFjE678GZUaxmwkad5gfBjhvvd9MLtbHdbfiW9LJVbC7CnCDS3z63dkyBQYSP",
  "key1": "VjKoZw7pquxojDhS4BJA83JF4fzw68gLQVGsThjViYQ5GWzATzF6hGKvG9bwDmxk3dJLfEXeQkdEfcaZunNoNQ6",
  "key2": "5UejAiwPTEyP3B4wRYUwAyYh66gWir2AGXQ1qsk7cRSXaEYwVGFE59n52wykQUkjdYxpWgwW5sBdK1jZPJRVfv6F",
  "key3": "2kZCtMtQQ5WzodmdESnoC1wXMapDzFqZgzW9aSmQ1DMGhh95CzN5aXhX9RWbwQHGw7s7z8GZxRb1ZEFU9mB3sAB6",
  "key4": "5KfXpkWFXiqoYNHxot1GYHYquTWLYjN6zHi8YKWN2bMLBc3n5J2kRnbFs2JtMKcTTeBQWJpwTLHUwP2bydkbCzhe",
  "key5": "3x8h6zkivqi2aTHULbsz9MGBqR7HwqdLrBkaWouRUho6WJoxqiFuBoVeeVkS5JbNdrd9MmMhY1mpFZu856786fH3",
  "key6": "3rYfGRPyQwDWMNvH4j4NVpR5kg62VdGWxLD4uLbs95UmW5ykmYEZBjgXtuMqvuH8sygNJt8jDBZW8tpyz5UTz2r9",
  "key7": "r2azpZgiA5QSkaMJQ6a7WLuDYaGyEKrXgwNCBbatxhGDcTGj5QUuZmWEahZeXr7Z3Dn5bRkREKJCvtemFrtkQk3",
  "key8": "5ziWVAo6n8SmnFVtm9C12Zuq8nd3NBRcZHHdfjbxtnbiyuHVRTbEzcp5QhXL2qv3G3tcafFLn8shayDFLDepJ445",
  "key9": "yTHUWFwQap5TKkwUALWshx49aSCXhQ4HSb4ztucBkD9cG5h43QjmdWLZfL9Ws82DfBgS2V93CY2ka1GE1BaAghG",
  "key10": "2QgSYLCK16w8w7kUxDxpYbzPHRCjbHhJmHEMkSXdSPiLkNB1oVUhKw4UFAZyZ4JHLJzRm4AUW1tCLoTVfmHwzdvE",
  "key11": "2jpH9M9VPzSfLxZSYzYyVtAt6XHqRjjwLwbW4RfYyE4vuvXrJj3WCg2ceYTd334ahHtKmuUHybjDXUsQZVbktqvA",
  "key12": "4eHfdyhAxeXmjBVKLQBGiB7gYjYzvN9MCo2mS9SMjxcymnnxEWGAeb1oWRoMPVZSv1ZUv9cJspHQYSVhuKN1mZPx",
  "key13": "4KVa1bQ3NBoctYpqpv57Eay9wuTUKYwwDthyoLMKh6uxQFptZpQhKhN9Lbqr29Lf6mskzxfutzJwCc2WQa5R8jM2",
  "key14": "4Y9AwsCHaYGmUnCVjkoFFeuaqCDWYq2MfpVGYc4eiPf8pgwX1P7zdCLc4VEyAvia3drFBEGMz7ktmcze16xRJTC4",
  "key15": "5jnwp4Kkqi71A63NkjhJnnw5z4eMg9NsyXy9qsvVksK8uXVDbr2q1hvoCPXF13e3NzQYHj8EP46mw3xrJaPS7K7i",
  "key16": "58ukX2wjbLGYSB7TBb6H6bhj4AVaU985wZwDN5LQSBQrNkFmhfkfREwxygNQTAA6vQ8H2WHwpnmJGQMWdoRrn5Cu",
  "key17": "2moTJeuetj5XoJqj9pGfJqCndWhAPV2sPh6AHXaMG3aZUkGZVQjzSk5CQUsR8JreN216ZEqj6vh3fVuL8HN6xLtJ",
  "key18": "2Z12gEVvJRkNruxra7VNxDJz9AmDx3ueVXmHHFqYnPE7pkXc9F5QTKz2JQgLkDx58WjzQjgypnP5VLKxTTJ23prF",
  "key19": "jNvzfJLfNP9QZT1aVZV1EhRzcKjSvbUCVuKForoxXW1RZR1AytgyPBs1UsD7E16VStmuKQmEoUw72rBTdnBwBUD",
  "key20": "4rD6NbQYwiCRFjhS3PqoAxW1UeCRS4tjwVBcnQYW1gZdHyaDs2T4MEDampiXcKf7iDLbTE8LhJD6cExL8dNyyDKg",
  "key21": "3fupaMZe11G6BEbyBWNeaqtqSKDQ1fQ2gGGkhWRDvDbTZz3haSWiU7J6K9rvqABLPBNesM4DjX9o8FCM6rtGvqQ3",
  "key22": "4R3sfd5p9WbF3Hh4QF2zaaDQzMUMGfRg8dz4vYLGB4XBAbpbeRWARCMggeUD4xGHyfYtV3DTZioS3t9pVw2Wbdhy",
  "key23": "3USDqHEEWutqpw45tHfFqfvpfru7xt7UyFXXbqLD69etcZmKagEYjxKHVYtZ8QBVJQFBV6zta5d9DDPzAT35od8K",
  "key24": "4bM5yrAaQF7qwXRA5se6RS3rZeFLhMWbXC1y237LurMX1QcdrY6SpQKD4PecGQghMN8pwFjvC3qQbft9w9aWxcA3",
  "key25": "2nmaoGLU1JVRxxhBPZKosNdBFxa1Xxdg5vtxjgFDTRxTTzWMarn9r6vigTyqwgmc1YMHPj37PiiegqXNgSfRNF5i",
  "key26": "28ZJiwGuHDjAxEYsxdeC7Mdv2Dfy8t92pVH3Azax92F5K9keA1hV12bJX41wYDFKWyAd96BBwLbyGyEzr1tsjdYR",
  "key27": "2P9gR8mVrBHLdQTCtZkjnMDeX51FYvdFVTgpZr9eSXpGWcnpboLhpYMP45M6eVedc6bGgzDcHYtDP9CC8RrN2Jr8",
  "key28": "jNAjWQKg33iJiGNMGab4w8eiGWcJ1NvXEdPxMNpyt9a2TCN9uoD733eb8Zi5Bahifr3uit7BbCRcX8TfihTGYYc",
  "key29": "BnnJqRwNS7C3tyGm6WEbuqH7PKV9ypM48snjJNxGpBTiu5sWeidXh7XxFfmgKw2CzLQ8BqAqp9t5Rr6yashGTbt",
  "key30": "4FjA6cAy3pXB5nCYqmKa3RMzSYn6bvLd2Fuwmu4BEQTxWFS6gUgDRQbmb7GBHLr6znuZYe2SPMLsNYu4eiwTDrhx",
  "key31": "59YpABPcfcmte6sWR5M4xHFKJKAbq8BpgZ1G33yP9oGc1tSw33GYJakP3mvBHE14n1xgA9MtFBaYggckmCGa2ZCN",
  "key32": "z35SwVFC9FH89Xkcu5wZe4Q9Axt3xeJNx6AS77fVHNEAJQDEUJDzyRuUwvVohx5uRbsgZ2zqeqDpxXu9KPzxcyC",
  "key33": "3cpMjEM9jV2k4njaqWkmeELS2Zd4N1EsU8w1PeuD7pZiycYuQqLmcy5Ftc7S4Rkq7kp91wd2NNZYWNnZ9VAzRn5r",
  "key34": "5q4DzXaTXL3eCzdropqL8ggRK59NX5SnZMThbRMW9p9xXPcUdMmRd1dDjyCC9SyNNg1jzJDwJvFEmBoHMieGvQWh",
  "key35": "3rQ8Qct3HBP8syRC7rZ3wnc8HdZ2qy6T1QiXxX8PVdkG6m3ZfiSKMxQBQbNns8xC4tJCAUiBnZcy92Am92gykzV7",
  "key36": "qHyxtPSCibLwSR36aEZGUe91M6f1JdyGXtnbybC8DYXL6XoPzt3gaaoxbxRoSLBafnXDK7aQrCDznVxB8aBezZR",
  "key37": "31oiSHWEas5qw74nzMCKgEoBQsHF3uamW1CH6wN5WVrsQQuoKfBVcmPYmuzBoV3KqbL1GRHFXS4zeM2dBUeWvXpA",
  "key38": "2JuXbfWmWBeWN84WniGW7mSFzZhnVR2Yz3qCjFirgxvR26ZjMsD7X9do8vYmRGWCR7cT2HTAmTFRgH6SPwtVsANy",
  "key39": "3iMDiabkKQt6UkRpcxEJLeuy5Z6E6eKcp81qSo2WSuAhR6T2KY5ZUKpezBQWfQpc8Ukaksmn1xckjaSuPyCgusFq",
  "key40": "51QVUP1Hj2XQk2w2WUuQQYgy8TRAtDeQadSNeVwr9b3uChbXrEF44tT6s5RNw6tuzWQf1go5DavQ8uk7eSrKt45b",
  "key41": "4uLVfKHQqdsqAqUjCYF6362gjfpJTifEiKUeqcKvrHriFRT88fMiN8QuoPa9hMv46gNYuRQvmRnVz8Es7HFJ6s7h"
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
