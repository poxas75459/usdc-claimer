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
    "E8wgWfMgiDJF1HJbFSA51T6BPknaT27z4QdUq8ZccC43Gi6TFCcpaKMMQR9Us45CXXBbf9mnEx75V6sJaz4tNRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fks8D7xzBnd6wM8HoVQ2huTi1RUJeQ7MzrKwsYLFf3Xdw9PYfNeKbJS6uadecGLoenpgBf318MzvxY8yMqEicvH",
  "key1": "2nuhpv3K1snE6xtiq9GYxZ7Cr5y5RL1Wzhqsa1mjowuUhbm4nXBeWN5J8h7SSoZWHaqobZSmbhWLG43GFJyh7X6S",
  "key2": "3kTQAUhToBz4ahmssBHTAZUwkWNWrAUrEmRf32YunBJBvyRScbY1HVSYL5jAxmkjP8Hmueres5WGovnjXDBk6hAG",
  "key3": "4rxG92vfqCph7kuNgcunhXoyQHjJQLBF9ubBHcUTfAXkme88Yz9YxtsXbniNJNmBnmyQH1oQ5NSNiAPTqAEY43nn",
  "key4": "4LJtd29ev6QVyr1od4ft15jFPB5tvsFb7pmRMkdjbzn7LJMTSrpP85YGE7qEhWnif8qwETk8tnoxsD3qe5W551kG",
  "key5": "mDvXYfwdRZziPMCfdJXHdiAwY5MxjZvvj2fJitebvQrDcEK42FjdKGYg6ioo6oo4t36A2rdri4astqQS17PNjjE",
  "key6": "2iRof39uKs66YKcxWLTbTTLbdz18Z6ZD3t7vUwsZR499cBrKkGqwihMGPRMawtPstD3Hr7FuzqaiBjLjAQbgQomn",
  "key7": "tYcUNhxxTzCX7SGjJuMgZyVq8xQ3Lk77RAuReNbi3xq4b9wjVmLgris3s1hkaSnpJx3cc6Cd46uqKB722UUQZjS",
  "key8": "AFrj3tmQfwX9J4U1UDXZcRRd4jkEKjbAvmg2K37vcbjGpXHrhcYNZYNGX3HrTups3y8Fi3nckf5HQL7mLqskGFG",
  "key9": "4xvWFP5guL6mWvk2XmFrfHqQ95av4UwooBCPTBY2VwHf5VNzWrB6X5NXogt3L8RJqwV84wT3rM91rnwJwogphm1T",
  "key10": "7Tk4yosiijsYgctjBrwKuR72zk4VbMnbPC6wy549mfUD5jw6fb1gUPmdKc4svEHcruZabtwQQFcYkGBhP2kPWzy",
  "key11": "62b4SCu5ckYXeCXoM5GLVXBfKYF7NB8oQJuUjF1H7b1KFrHgGSDw1X34c8jm9NE8VGDZXrwcYhAjreHzUFULv2MR",
  "key12": "2i4Ysp1QTMwpSVrH6fxRR9ZupvuPUokSHafhFD4ZwrNHonChMQoVG9imJmZ6KaPmTeuX8ZYAK2aBiDAwj6GokCQ3",
  "key13": "4rrNyVa8qAxMmWAuaZ7jZgXCn9CkjbZ6E6hEZVeohXQ33aGEx2fHPL8RnDHiSSqTPvEZhd1e5bPVJTMjE1Emo9wx",
  "key14": "2XwZpZbwADJC92fq3KxshFBhN1DXMpKo4Xw3HF8PHGHJjXBLEfvUmkeWE4BgbGoMqDoWxR74n3PmWrysru4oNMu4",
  "key15": "45deKskygNLhcFjHqYDhu4pc4dpBZdSSJhQWbiFQpg8fUmLaQFu3KHk5fW1uRvsQK1U8rQ5w7WpqBn1GGDE2SDFd",
  "key16": "3NA7NipAWQcnPBRnh5WcnK1LJTg2CKs9rEJVP8nqoXVwBgGXUuNbkhPz6TWX8pEdxkVHvPxpLJttueBSFFRVfa2Q",
  "key17": "Vho9sqWeoBVbjwkv3ppXffuBAXNJmYHxNFHvhpALcd7YqNVokDkeDU9pFJc4cmv9nQkTGWTytUmroRWNAgDsixB",
  "key18": "2guf5z5G2x8akwxqh6wg7gdeRhLzc1Lx6fKr1NneFHVhdJVVPBQCjAEz6QL68JXDCG2aSMkTqffybeg2ttGvAhoE",
  "key19": "5kYfKtgHQL1EHqr4KkkyE4CrCNnDw1mkRbjWi5uo26qEx9d3c65JXuDrKwAaGfVtLMXjgqNhFbJUKMJsvyBDjKeQ",
  "key20": "4qW4DpzniQK8NiuZpSJH6ziE8oiRbmdhfbxKGspcmoc1uFLzq2GmXF7dYVvW53dCJGonpBJvWu96zfS6ook26tek",
  "key21": "2j5i4BDkqAGQY7A6HiVXJTkjGVeYExqZrf7mEN3TAdJEB1B1zxfCckWZJsp4WaKVU5qt4bfi9NbwikcBAXcfdCKC",
  "key22": "26nANPrCY1cWzXGEmsYhFXtWPik1dD5K8QRqfB32qqCZcxW6vFW8ZXmQUN3vwSuDTxbyajq4tzooXoGEsW1t2xhb",
  "key23": "45F2mCDkgdSySvU3UmkDMj7LxcJQuHJwYDg299TpUzk2ZhedfiedekUyRvkZAqYNrTmRQQYg4kqEgpx6b75pK9QN",
  "key24": "322XPZVy4PT8TqH86TJqSfD3idzoJVWZnauBHoqWGU6nYCJ2LwoLQ26ZPQ7CV46gTn1TkhYGxjf8V1mvUcweK66D",
  "key25": "2n4fFTnadU4T2SL15tYjNqNz8qteut2ijfrpMZg2tCCdTBoMz3AuKyqkDNmowqbFLhPFghq1aiRt52tUuPcsP8d2",
  "key26": "5vWesjKirnJZnZCGN1kt7EnqTekanXVZ7ywfdeU1gxJ23pBngvaim35e1BndF8We4W1TpYTLU9D7M9Jo9s6gjXUf",
  "key27": "4hP4MZqM8o7ywYLSuap3SXec7rgd62YFhz7jLhW6yCJR1fnMhCVPdPxq2pxVXJpNEdWvca3LQ7QnFbnNHQJfd72X",
  "key28": "5R9Ttek8s7nvbE6FZNToA1TXDcuEkueMnSmYjyKDUYHzhwRdhHVvRcrWPARvHQqcrgf1ZxnromTKqWDdMrWGXAue",
  "key29": "3cKzDMkfuwdA9Jqyr9bsmKY4MGRHuR2sqDvGFxDkQFYCeSBHnfa4m7mX2BJc9HkaKwxQQeG8JvCgJmMurfFfzie",
  "key30": "4zVjNQSg8QEZEVCVJygqsTgzymrpNJ8JhPjFKQhmYnAveRWjHHmx1kugEELMaboq7eD5StAyE1HRKC1L6yvRUUmi",
  "key31": "5GvPd6fcBhVx38X7gAjV8uH5igMcm9xQYG9enRo7BaYTotMYECCeJQrqAz5enX5aPjwpmugHmGoaSCwSmdRtBktB",
  "key32": "3tedLZqLgygqMRovuMBeRJQLyM3f4nkXaK4rmYjhiGA3Xr1fwjjrMhYir8AdUpxrGJ5LXy3nh1Q3jHAYVzPDGpbA",
  "key33": "4VWCsc5fwBBTS7SuZxCzzP1YpFCLxFqtGdkSY1yDP7FLsV94y1C2DSRrrdquRxG7UX4NWg5UxGhVzmqtNGK1Yngr",
  "key34": "648oejCSQXkLfp9zgAkKCX2g6UHBoqQqmu9jUWnimhi4NL8emaBgCisQJVxWXHXnt26dxF414iENzCdajybXraP8",
  "key35": "WvoLbSeRRwbZarGPssxVwPiNyVL79eBPYnQGswqmTuN8pwuwnXHAPyAjnzuLsLBVCdDweExLgv3DninpMiLbgCT",
  "key36": "3P3iXD8hCABTBJPepS88BSeEKCJdTAKXpvzY7PzZF1xGHjWYcaYKjJiHJdzNpsDeYsM4H759smHHeNdUWroPhT5o",
  "key37": "2hFvDFvDsrRVVrEDBJbQjpcrfb73ytTQZxwXZ6MXSFNEpEkzzCQn7R3jvZHHJjg2Kwd8ycKmPLdWGJYzGwUscwkE",
  "key38": "49VBtT1vRj9viZyVswZQRaxhLTBNuHJEZKpULKGsMJdc2ZeiJwcgKq19J6ohoTUwz234TDYsAobyxCq6aiNRwcm1",
  "key39": "2jqzhkT4UXc5VS2tAjdC34hGyFw8mbvd1MSUxvEELBCgoLQ3fTXYbnAHvPcaH9WuhP3U3BmUAg8XuvmUA41sagih",
  "key40": "24j1LehcQFE1dhkpEFbfFPpZbWnVmr2BvLjT8zeqiStfuPyc9kHfiNLWDT7qdW3RHpsoHPPGevMm9yHxHL1ZLSDk"
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
