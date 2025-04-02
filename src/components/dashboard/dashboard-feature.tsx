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
    "2TXZYtgYQ9iBW3ngbHLFrm4Q2LdLhEtmsuhMZso9gx5fXzT4ogDucqF8wDw8PzNepi6mtevBPqugjBaRQvEaB4i9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PGbooKiG81n97HT32YjcATNb9MBC2QdEARv71VrtQcg3zZmhvbsVguwAxJxdUrWYUQPqLidou9wRyBCSF2tKfao",
  "key1": "4uEgbNHkGBnWiNvQLZfhdEoKTWZyDjp1acQ1dQpppcT7RyZ5PTza21zPN3fspus3f8LiVjf7fmqTs7zXvU2jH7A5",
  "key2": "37UnUTo7pQSTE1XgVcHWpvKB3R2YfZnhLKkGWpn6HCX6LUMsWrozLtfMurh6jKzS19Uuuck6XW1B1B2LZ2oVYmJu",
  "key3": "4nFoksJvfsZbqLofgBMbJBoE1ZVhPQZhBCC1ew99k8gou5Ac3G52Uqvy1yJMEz4NtUe7q83njWUU8gSXRRB8zSXZ",
  "key4": "P2G883WeSAjibgiZyZvBNhNTYsceJJurv26fFhgbGK73Xg1Gb6wovmHP1XinVebdKAfmJQjKcg9UmLm9VbTwhhJ",
  "key5": "8LcVzF2rSUzGDffkNA1AWMp8pgKCJTC7Zvo2fYDygFoWHFLwdcLHcjsu84AvvjN1ZEa14qts6Y8wT6AV4vdEKNz",
  "key6": "5LsdeqmqKTnG7PRDhcp2WUhSdER3Xo5jAru1M88fq3Y25TqkFLjLC5aUCqtWk5DqQ6qnC5xceAAfYK76GGR4pQSn",
  "key7": "4hqtA78EtjWbKti3yqJ1fLiR8jWeWswrn9wcDdoTFLKtgtXjBHxewa8Rg65TD15T3dVefm5qs6MqJVvafg1JSxDy",
  "key8": "2tZ7h9RWGycE7e1dtb31D3HkXoQTzu1ewq5xkBS23yPovSXbzEPHY5S1CHpWPBUGaHGpb3iVNURkTzijdcxcQ1p9",
  "key9": "2WkW76AAyfBkKb1HT2sgJGXV4KGBmbpwzs6MddxfMxWN9USHsTWSXBVBu8UwLzG3F1o77khWif6i1FM2rfFpSfA8",
  "key10": "3ngpSEk34Pv7joasdFk3GFaZnVoJTPGZSxYL5UvCe5Th3LHBpxbnNUR6jHYfzLkamKnSXTaPNWidT4ez85CQSYJg",
  "key11": "UHp3pb4rjBKvUc8bdLdxKKUuRvbXNgobbZM6MBj6SrL7W7joE2V3UkzpgigQEgsguEVsdfJrDVTa9azdEfLoMkD",
  "key12": "2aeEjsV4khiPYd7Kz1XVdGAS28T8qYcTogjZfh5W8uxUfp4t9hijyQzqpm4Y1EjcEVRZXQT1LFycJSpYK9DdLDNa",
  "key13": "4p5hf56nBGgHaoY275AMXoATnYXFZaMg4hHXhnHF9DPccjKjDxmtLBxGztXgSuPtaDmF7YcPmreV5BXnGEzBcFYL",
  "key14": "3tJHjCewQcPdohpd3P6xUAZ6mAA5dKAdUDStPGhsvx28kxkNaZB3nJRTG3t9NeiEhLHaqjEMiZT2d6qkK2VxGNVx",
  "key15": "2nTWiGJJyhvfz5EDar2bx2tihvpZHxy4PfBktSy65ymqY3scaEAw1wYim3RxF5DEZ1C4jARtCaLGg3TLL4G9tgGw",
  "key16": "2huExnzoMMrvmXPe3TNV8Ewzq82gQiUtXLRtnjaEuiyNYWdnqSVaFSTW5hC7AP92aQuThbdyYvp3xamq31ZeWEys",
  "key17": "2doSkYFnNmiNT3ZWYC8xDK3C5kyDw6uodqygfY4ZDkn5H7RAQcH9SVCkrhGDXTTD2uuXNG38VQQuLYPG8A3SjTpw",
  "key18": "5XPKRYLxo1Ny3u6eZA82FhwJe9RawTsWDNj3zfanhxqns75YuVz8kZoqC5Riiz5p846najgkwwUxJjWiG3gJh3qt",
  "key19": "5XfhwbXvGuBrmAD9F7R84wNaUsESAVERR2uttEPiW18vp5Fjkp2hMStSkhKDu4pCFmR4NDkZHpbtDMqqxwtFkVYQ",
  "key20": "9NwWKifW3pFqsPgwVi4FCo96m5Tz2ruqpP13pbvsHPBifSXYYxHKZwXv1dUDuBaFKCDzuHaGebittw6wZ8JQ1Au",
  "key21": "5GNDsdR2hLgfmogaQy3hu6hoLb9gR31W43NuDyNZsXVHw6B9FnnqVxaDmYhyCXhhUHQMcUAm35DzpqMzBeRkK6a",
  "key22": "5Cq2K2jSbaSF2KjeK5kYgZapG71ezB1ioMwvrv1k3nsgkJLNBAhSiQKzNRxk9ovNQhxKvWi9HjHcJRzcFr4cGYZV",
  "key23": "3CV6kvGXdHqJPTdNV1xpQaUitEps5aVwdLyQ8XgtoofKiHQrcjBm3cfGz7CPdxMv6WxPenRMZvqfhc98SjBoLScq",
  "key24": "4EMiW4MCjSosN1ir75gkcbHZh1cd8pJLPzXEYhCZGcUaEsUo9KgXkHN2bfqEw3i5HbBnx2M6LksF2Wb5biD1s7T3",
  "key25": "3SWPLXXUum7TeQZkhCvSRvCrYYtn5HwxLvn6ui5H9gntUWUeqYrnUfqmfaZ92LrwrP1RZydokbza45usbZJNPH2o",
  "key26": "5fn4KaX1jjtEg1Xt2LSEgFSyQJA2rVsDRCXUX57gc4nzZnjzSCfy6crVW5amnokms4s5BgBBs8nVQ2k5RBsejVNW",
  "key27": "5MqaFHoQkqtySemRQcvvEH5RQg2AHtXfjih83w7eirxzLW9CDJHajeH634tuTMVwcUHWbYRgVKL46KzgHSWQEFr9",
  "key28": "4PduQ4WgjQdJRWXLL4Hp8MreSycWMN2SWvgxtUgzja7oUyYEHXChdx4qQZQwyK3YewcFWGHa32yZTURP6WB6GB91",
  "key29": "66VsbcLpywu7K612M2zw4dxnLJimkoyQhWcfmZjxRC7STfLoDAhzdUUnSYRHtVe8VFUCw6ovfvq7bCNA2o6T4opc",
  "key30": "3hCo2s133QqW3cj1kybEv2neVgyE365BzrKvhpMyBzHe982Sgu5tM9gaNbGocmj1gpxuQQLM7ZJpPSjCwXUgqT1F",
  "key31": "4QU84WXxSoyia9HYqhfb9Xuiey9YuVHe9Mbm2Bk6gb2B3KasgY9vwQcxtrPaoisVgmx1csCXwgboJ1iysYkG56C8",
  "key32": "5HsBJwwhSrAfqsNam8kEZ9HNCzZTbV4coSWCGSaVUrHUjiribw1FGMaYbQS1YfPo5LD2ATiinLWMJoSCB6rRckLf",
  "key33": "42JYnGRTDjUU7aHCC4CwSyxeaEqcX28yroyC8LcNEFGgqsrae2FdyVTvkgQCz8ob3ZPdyWfx5xmbu8qV5jmVHihK",
  "key34": "3Q1pyZCEx595PCvZr86x6bBdWBVjfgwW5A4HRiaZUNG5FyriZvmms8otM6ZxqUsCocXrLYv6Q582GdYtRfaKP86g",
  "key35": "vBbFUUkwEfxXR3BjBMLdgFbCEdzkBN2rNvLyTVkyjAE8wE86Dvi4rMUN2hbJfwRFq5wBHW7eszVu61xkiuFgGVT",
  "key36": "5NFSxMjUzuwfyAwk1WUwJZmZ8U8MWizvWqXDmY13NsiLyDAM13aMbSo24g6UNFpMwusHckaWq7BiPEV8aKobjEtA",
  "key37": "4bETiUPtNAzU38jNAKCTRMMGwaoxuEAqFwySp7r9dT6MXNPbc4xFBVHUYXjZCXx6FoRXwhYdqmxeAG57kgFrWSjL",
  "key38": "5gSNdEDEwFS4x8ZBrpJf58FVCqsTAtrtFSWYSWLxixSPoxRo6XEmo9fxSg2hwRsWV2zHBjtgRJR6atztqUoJjmqW",
  "key39": "3wGBXtkwCRyK5Ty4PGNBoTcJaLy8ufQQqgge6xsRHEMbmdkW3kKzZKZQKpPkcmXBTeDxZGmgxRRUGB77M4L2o659",
  "key40": "2eitPzProUnUsHApsbaYFvR6BdTTzDwxFyJiaVG1ZzX8iWkHn8d17GQLrApozaHrSEARHDoBTJZE1NfUmCKMXyaL"
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
