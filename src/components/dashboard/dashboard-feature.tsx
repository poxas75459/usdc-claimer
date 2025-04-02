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
    "3hp2E4X5mmhY7QpQGJUotfajohafd9dBZneDm3e77p7GXgf9Em2orAFGv15Qj2BJJikjS1d4QVkxf2r1dyr5BU17"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "496wK65JYXh3vGudmVoVSBJxHGCvExxUzu7L4EpyL2oU3Wky3XN8RCLYMcJPEZ1wgLmupwyhVAvmwzSHDX5VWr97",
  "key1": "5CWfzypF8xfXY4tMhqoXZZRDUV2CW6cWwQAxvob95whE32N4mcgC9GheNnJPMqbgpbuaFSDSBM5HyfpRhPAL6ZrQ",
  "key2": "54fs8Mqf6HpGA6nKY9znjeoMpPWs6FjBF2qJ4s3W5iHYAmX65a74dof94eYfWY9rKdyRWRd17pWX8gua6Ua1bK2E",
  "key3": "FoBT8VLmkvG4XukPsHYr17Anw8wao4ryeGrkJSCMMXBQUZPGmSN1Vx9jLy1yUBAvUKQLPNPdMuoKuxmhsdybaU4",
  "key4": "4B4qgvpfJC6HWsQedX47q62gnW8T1Xu2c6oWVAH7ZNTDPWPJgUJzK7cMge4RcQfs6J5bu56ygNxdDx4SdsBEcp8o",
  "key5": "2BaMWFqjxAU9866xgqmiXJR18aUxBwjYC2X5bzwRZhyVVHbtaRL5hAugZ4nWSA54zX5tMZKxyzGzScPtgXGRS8Cd",
  "key6": "29H3wRX6EhNqY4BrJV4cTgaA1mSXvVgqLTZ57E1mJmHVG6TpYa6t6LWEGvFRRjECoLMjaD6F2YCgSMQXy8Z6hvkc",
  "key7": "5KMtUAfgQyDpeX8WHHS2BVd1jpqnB8A7CurpX4ntKkTUgz4piWe48UVeKyRLBqXENdYVUgx2jduQq6hRU1nMwWvE",
  "key8": "2NHWQexTgXD6JgKWtEiL6F8KdSaPn9W39nyKNnZaNkbs3P5Sf4HLLvCJAu4nNs1jwUfspTwNNgk6x2TZcLbGJ9BP",
  "key9": "om658MwYoE4Sh8nFq8Ydg9AznQK2WUM8wTVxDu2dwZQYo2HZBRvKQzdaA1RCoL7oyPxm9QfsKmuUUBwjmWbrMhM",
  "key10": "48CkneJ8r4hcMGDet8B27EbZeECspqroKCoKTEiGdisazqadk3cJGU2Ww8MgvHMmnsr4xa1QoSwobRGh4LS3KDWn",
  "key11": "4zQKwopjPvYZcSX78JH2uGBpu9HYKjqqdbLGfWrZ1yXDaYMJzRBZdDktLqjS1rmzSHuLHBEYLHw39WHTwwM8JjSd",
  "key12": "jz3Kn6uaCzHbdbvNvC43KoeeVbffu9MGbt5UgCxPU3q4bodrqj38TQY5fHd9b1nTLHo1z7KUk3nSyTtKGUmPnAB",
  "key13": "3n8CT8EkA2zSEfozgtkNnMEv2FBToT2NgYnm2ZqCsBvfbL3ZZjr2ok7VrjECkGieaqkhLS4BdqNbmXavu2Aq7Dt7",
  "key14": "5cNKHCSNyPAr9r3gsw8BJk23ssnKjMi3SpY4ZDwb8CAyPraApLUzfStuxijACoJZ9RtyVkBrH4r2a3jL2spFznbJ",
  "key15": "41FSmSBdBZqBVWFZyCtSwMsXUbNHGsfciHiXryZGxTXTX4GGWY9ueJu69oXztRLjyLBnozq97SYSgkHXJunYQNQo",
  "key16": "5wtj9XvnPffPPFAqg2HtNFnsc7g33gxmpyjk57cJra9Xd3tG9psKrj1deSRfZyKgkLfkJH9xBLtecahvoFinMfwC",
  "key17": "2rbQgHvyn2XzdPJffYCYGWNBshQNzaMFtdmCJcvNK6NYdvPLwPPVakHUunpgBi5hpi2ngqVA6GaZscnUSE7EtaTF",
  "key18": "4LK6JsDHrMR1cnQGYcCcjc8x1hZTYWFZQ5p9PqA5xFQtshYPBQamc73AuN1RcvVG94jjvmLSvBYTTxRJQASdPeka",
  "key19": "5hCmmAofFKTfj1y7eyFGQa8kFvFPC9AZfBhnH7ssGWSqvYy5hoVGaTKYR1Jy9hdQH3JmL2ac5CLgXLRTZt2kzqkS",
  "key20": "pGQGnC5gibZk6rPED5H9u3wZQBZzoQX7f6EapiyeM9ZhuQgoTj7dtompnhKHzGgSS3cVJ6cFAqBji8dDreby9t9",
  "key21": "5vhQxfozDrbuquK3YLGnqcugPcEgQj939pbZ27eKGZm6N69VEwE8XEWdbHB1HX9uKQ1JaQ83rLL5TvVbQmNdJYeW",
  "key22": "5zKA97EFnauvSLDjygzVxpei4gcYbtzbWNATN4tv43wcdPuwdh4T2nXQBEJGFBoHWnJcZ4LoEtyPEKNWEnDTnemA",
  "key23": "5jyV6GNrEGVnqncYfQ65mjzZxWQNXYeQnLeMPMehr9cK3GMqqGg1ZKpuZdZx3b67oSD7cLvNkz2LLPjUUvmZHTgd",
  "key24": "2qAQTcfz9E5VZfHe5PxJyFPcGskhKFc3yV4KyCj7MYXMLBfC9m57mPMauE9ExKaH5YBPXANT5uQzz93icKyvLHGo",
  "key25": "2UvQqxDvyQnNVSYWHNzUe9aoYPRXhh1zVwBs6ipVmvzR6dCoZcgyBFELGAfMAuSDjg6suXeCUq5oVxcn6rDDPx5n",
  "key26": "414SHMW96R3YLeFvdxSPKJGfSzvCnnB5qrd4LEenochP7e16WmwWA6TiCYW2t4fU1Hx4fsyDR87J3nYC8LYgsJCg",
  "key27": "5ucBttF3umJnTrtazqcPf5T9wo1PMviWDKbrD421qHabQTVxyXg5JhiWcUG4QMxhKfnsdaXvX3RXKYGZX5FjzxKf",
  "key28": "5zprbjtNavUqejTjwKXAcijkWveMJkuYjeoqdJ1ui6MVM8WbFVna4srcNR2jmUeAz4v8SJcam89p1Bs1uNdNFdHu",
  "key29": "3CxvE3RXLsDSxUBKA1gNEu1qkMvhsgpuV36cajMRDuPuabLvEuzdxfyi2SUSMsR5PXdyrrt46acMTqxAfHwsT8jf",
  "key30": "8Y2kZVLSVxqtXVDEsfSLhcpKYxY3vVSBQkZF7fqjZ4CPPXdVbHHe6DgPFDxqvmMjF3LvZMpMzotzUzJBqdXHVyS",
  "key31": "4gPJBHoR38wRK9SiUnC7m17iyUQMHF1S6FUsSGTd8ApnkD5fAoS1rCgGRifPCJgWdAygerhxSwXzaipN3CoASkG3"
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
