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
    "ZmpUsUHkDY2wJJsL9BNJ5kcqXKT6RhcYVQnooPeay6u2S1Y1wiPFff4vLevodLgvEazc7XMFJoN3gf65quVRYi2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N3ADdWNoZjNV8ySchSkULY14jrKXSVfv6LRVxPrcfemsV4EGjwjt7HFt4rCUezmXscPeyAvBvUt8ondnFb8NDzT",
  "key1": "2X3BD3W7PJDSnKpzapAPN4fpp5mZmV8HWnpDR2V6n98eVPH75R3jKaFH68SiKm4ErSnUjKT8FqbwDeWJEwzAmWMc",
  "key2": "NhVZjwufsxcku6c6zVjDQZeZJfdiw1TiCGPfc79puHKPMUdnaGfgSRiqR5Ywxq347AHbu8fEmTnGtqbSJRhgsZa",
  "key3": "2xK7a8BhqjUrv7QHivi9zDke5X5kkD66xHvBCh3N4K8kN46QQbukziDBfBfe1fh2fVsV36M8cCJXsLMSkvahTXoB",
  "key4": "wgumhExvBx6GRGyyANco2Xd6bmBU2ZLmz3GCwwdeVw14UwyDcssTnHux3mpDDJr1XhfnRc6UW8xua3buvAao8Bp",
  "key5": "4rt8L5AXYeP8uBQCTr1tqTfysZozPGQbPmHDwbNcMQ72WGBkLvHv5gjHsDmVLbZbLnYEr6YzvP2Vzd5xzqWYz1Tp",
  "key6": "36GJnEb1SAM5B6vMax6r7z4urCoDzFVtWg4f6Gd315airFeZ5pvuDyBVfZWjkwGbRYp2RvsGMSc9bQ45Q4PRAhSn",
  "key7": "5pW51DPMTfcyknFZzCsCEEdsP3y3EUpB2KdnTs6ezqyVRoRDNF6HzA9bQtAFPjUQQ79BxuZWGSfDGCDrPWxVzGir",
  "key8": "4aNa9mx3123xPwCsScynnqAU9SUgia1Za1SMtxaHGz9cBfwmBfc4cupw5d6JcaucFCFrdtE8rvR15GZBHJR8As2B",
  "key9": "45rtpTDQEutT8xfbWCGR8Z4a1NwMoLo3B5cHE8qRswJTeCcJsjT1baxTSUSwPqpPVtDYQMpkZbacU83WTj3THbXz",
  "key10": "LLewbzjtJNiCLngWoR31f9LxZuRXghrM3sh4uvsY9kJ79vX9vFr7APzpsxXVEzedmCQc5dNu7JvLpixd19pHd4M",
  "key11": "5VePGWr5BZXZvGaaSFGxx92hpdaaphXhBKsrMthDNT69K1xPBqQ9JZ2vtghXRxDwkqhSvhA22VrnMtFVQMDkPaGu",
  "key12": "t5LwadKJ1UMP4JLt3nn12Y6eEg1awS7VBfc2uraTnwZX23jRJp7CxRsTsuAQUFhaKBLTLYYhvrYTfCPySNFA4Fj",
  "key13": "3i1k6gWrp7Ee27NeWUVYe52hSifFHo9JcBub3Nb6EysTwivGbgwcKajH9Busk4RP6Y5pooM9mwwnodtLmP8wcWYG",
  "key14": "2Fz2HDagRAtCbFuw26BeZhgaTGaVLXukFdiGwTohkKWrwa5TaC1jX6W9VZ1erc7Du8mYmw3goKavrpuAeTMbAinz",
  "key15": "M3moqRNXa7LBKU1VerxVHGMp9RQtWHQJe6Tnrx9BFJA7r3x4nmzFm3ZuYyMicEwuXLFvHbXYhbbt8dp7kbyQL9f",
  "key16": "5zbr9zSsQu4sTntrvokQLCNpdEfWd9FN2ADZLSRAiqfSqQjMqcUis9KH7XBAzmG7mWFytApyCF1357EdWTAiUtu6",
  "key17": "2EUMVjzbihegvNewgrp95tE66hN7Shmq2TPTHtJPWenadBitzeP5cJpNebHGcS4GbS23WvYGpjMGhCpgVqWVyWm2",
  "key18": "28LMQf2n7mNbtDMkhTk4v4nWCcsQCRuGXu4Azd99ZRSxjC18QTkV64cEgCafYgutgzBNHLjd59tVo75GyUYNSDzK",
  "key19": "2cFTdVkqgExLCW3y3tQjPi2QwRvUTFvUzXQWJhMjj74bdS983PYaKLVjU6YxX3ab8VuNA5SGSoRZUUrfnvCdBMG1",
  "key20": "5sZCYZDXfBLj4x7RVtz82sZTyU9rcMzmwEfXEiKzRpeCepKm5dMQfAZ6SZogwsTBvKaG8fRUSjVin9hLyS6rxCdV",
  "key21": "2Yw1etwLjjtJZz31m9LULXXFa5iabmywuGN5zkEyHBGwD7M5B3c9yqbDyiaJtZ2PAN5VNLqdYmgHQuoUxSPrJCAp",
  "key22": "MNM3a96ssxpHrkufkYChAyD61HxVeskSWj2q1KmRa4uNzD8HhWcCxakccKoksVS2v5zGg4HtXXLY3P1N2aSQek8",
  "key23": "3qAEHyjaJ1UobF6pnEgQhBHW8oaXViaQ1kN9utubDkkFVfhha2wurUUkYKCc5ro6r7jdDjSaHHFWxm23UFxQPe4",
  "key24": "YaYfY3a2QP9TzW55HEHQi8stVBPg88qJzqmNSzhVaoz9RwEH1wnD8xqRW8XzqHvtiCrVvtnd8BjdJhBaCYMcr34",
  "key25": "YYKT4sPUqmNEofwmG6f5aDd5czCtNustjTUKDVPc1KRoATtQnTMLQPtrxxepU6tfbZFs3wUbm2Ew5CHWEGbrE7k",
  "key26": "26X5rvSLBhoxPZMvofejLJYRXhTZYSBpJ7YuVTtuEGKEbzRputCEmkiirjXcaSHM4x1RqTybtqWjbfBgQJvG5QiK",
  "key27": "3NjrW6S2Y9Fy4DTCYxSJwV3GA4GtGCJ7hGhYUrnW6LEWn55C6mqxNDZEDKMDpuoNVGN9BoeoCZF4XMr2qEjnYYAA",
  "key28": "hTmF9awUd27XQyDoouXz7j5x4BWHE2VACsM31i8z3rztpPUXcz3627a9Y5WzqNUDFYZi8GLeBYLSb1AMriSoe68"
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
