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
    "64vLo15oFXh6R8bGrRMGLmw6HiyieDLMSaPZbYit2oJZuneLrfRn4VZbcjqh4joX977zrVFaX9JMfco55vbsBwGM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g9VGDD6FFghnF2Xr9CKgSk5qMJA2qNEaYm5quvczWzJNRnDiZk3qxCVtM6vEGsQXszvnJDigX7wnzJQBb8k4ZKv",
  "key1": "4mxDETMMSBKrPDcKvekbhfLwoGoCioEPvHYW43iZ6jdqwUYS5Zeevb8ngwhJyNfNGy1pYU8J4K5EugLemHU9MjWY",
  "key2": "5s7YLfECXiK3TpWFhBosaxUSdXApJa5ncmcKMYTGMZn7ij4Q9UTGWaHM5q3xczSsGNoN5HzPRu6wdzcPzG684VhP",
  "key3": "32BubhCBBRQb29bFEXG4PTt5HsywkQdyrkKWLvV6qeQPuvnbLSVHAWosXD9BFsTgMRGpMvjS2U1qhHH5hCMByWTJ",
  "key4": "3wTs2jV6F5MDSTFtJUYaHXxMQ5hnhjcGEoBqSJsNU7jGbzKoD27K7sfNenjZrX6eM65JnpQ5N6Mi5qCngQvNR4g1",
  "key5": "2rsCL2HmXJVvtyd6sUfiv7EMUSzus4z4xvQMxCypag95rRxkADGjuG5G9ogR5UFnkq6fzfybNWCjdSVPHgK9dd3w",
  "key6": "416HAHqA1bt2dopuMPmLKPgoSyX9ZwcMmQ6Umup4juDiB6MXxhvXbSHPWuXzsfMiqpE1iFDaj4cqvYf4GvRD94wJ",
  "key7": "61RmsWFMNiyJZkX3RFpJ1C49Kmp4VrhjqnrrF7mK7fw3Pk3mB7CnkkUMUUaSn1rE3uGkhse4knHGZVwkGqQCDvNS",
  "key8": "44VSgtLauyvGZXMA41FVCt3ievFXH79dnQZWKWeBwsMPsfvUKifKw4zZNXEggzCa1ahGjA7krxKC8sagyG2PJAKq",
  "key9": "2F6gRmNZLS7x6SWzfrtR5cyH85fWpHcM5ceQxPjsXRbVN6VpPCUXh6gaQEitD18ywAa7vdBGzjVL8heLxuQ2ETJw",
  "key10": "gRzE9GtsN1hjmGUnKnoXjeZ2wPYKbt9A2jLALPCQ6B48VHzGr5RiCCQ3YbkUfSfpsAbsBwt8jArjhjrfL3XKdTv",
  "key11": "5TKpbryUBp4mcA5GbvBLLdHFBXUzRXnE5rX4CzGyB1vpLVXEzUNcKm9dG9qLQgNg6rvk8xFrPemocdzffgo3kVHE",
  "key12": "63V87r76m9rKUFWm7PrKfZzDsik1CGT6ht5qwcrmowW7b2cv86r33LaNSHPbo6wXjkuS3bTCUnPtUyqYZEK3xT41",
  "key13": "RDcKUXKi1DyrDnS3iUV4zbBmeaLip8zRnH6BmDein4m72LHCNqCHRTVjXjnfMuAeW5VTNXQYn1qwf7FYAcvN4Vg",
  "key14": "4tcvYLKFhbuRZWzLXkmTTEhknQoYtA3wX2k8xX7qkiYvmhmuv9rG9U86RgkGJdKB7iRAAkWSYQxkP87W18cJCbTe",
  "key15": "48C4hot69UD3499kMhwTQ3bLQF94oNMHvw59KnW2oCaubacezvNdCjKcYe22CrXkQnrRiCeU1ifz4FmoUnYSQWP8",
  "key16": "2CJDhHEKhGniibR2tFbzmrngANHi5fCeVSpAzFRkSYZUpWp9iwLnGbJPfRxi832sqohtsKyE7rsfUYTo2PThgFav",
  "key17": "2PcovPMmKZhkJHtZ2GqJMuaP2WGybH8g86e2JEtcTmNVmsRKprEFgFrYb2wvymtskTUDVc93evAPyaGJHFunXpy3",
  "key18": "5LvYpJJjRpeKyNqxLnG7e1wf5mkaXq2ej2HP9KMmJUGiNNKUEeGX5Zxcc87PRAFUvmhQpCxCmUDiwn4L6f8RSDyc",
  "key19": "5LE3fEP9wa9nDbN87Z4VLPQKdso8hHACGc6V9gf5HcjuRNvt7ZDaM1cBN4YfRBPKKfhpsEDwzKn9vwT4tbsyvcR6",
  "key20": "5pDxsVvtDVMBaXY3Smud17nnMzoYuUzGximxgZ1yE1Ktp9AjLgC711ymqyGoan4zqe5mbnuEtghZV2UpQkHAr45C",
  "key21": "2EHEhxKCqFQB8pb6DuJQ3S77RGyvaYhBFvUSQBTn1CDWEbecwkeyQNJ2sgvA25npDTBosjgA3QsGTbChXKa3A1G9",
  "key22": "5DcokMPUeUvBwLD9RWwMpqVs2Xcha3sxeDAJAT2kor6RvNH9jYhBX5856fgARiAiuU5DaDhh6s1HeYiSUjc4Enf3",
  "key23": "3J4ekezyK8HJWbwuPbPM99AYN7eB32RebTiYCAcsEkExhNGMAARFN4J3nwzzy3iQic6VtRp1GCKMUGvL3yw2SRzf",
  "key24": "5544qnm85ikhF8mBkuTi22GJSVomfdCSSgTaUeDSGLCwDgVbQo7N1bbFsNHJoBZXVuBKH4uTWRFH9KQVFY2TXgMQ",
  "key25": "4RiJN2VvTJxabkbEj2ZiVGpLNPG2aiwHCK5GNxVJCaPyCd9vhBosrJFtHvD6MqK8EM3WdbrZ9yDB8YjdEgpQpW5r",
  "key26": "3gtBDKubpJauDvbpvrMk4vMzKLYee9oti6XgnX8dFq5GC3VkvM56BJtxS1NLjZfCdQvpwsvFjZXKuaaTTNjaz1FF",
  "key27": "5xeTjQ6ydLQ9dVgVwz9UmsdvEZLV5yWJkLvuHrobrUtPs1xR2xGdAbTEadzVFG5JeBEYKMw9MjNSqxRhXenMc12W",
  "key28": "MeWY54SAtrXYDQbfi2mdbnPGrh2VyGH25YiPhyPcuwDoDAugEnB6nvtYQkPdvxaFQ2VKmiY9gyMAMexMSqdzSoc",
  "key29": "3vp6ZR3ZxQy9VMEiGSVxMn4r3PnNuMmZZNZRDjECRg2LDZJEaHQRfYvXyBqXy8XDq6C9VeuoEapwsynKX13ou3y6",
  "key30": "3c7UtLxvqxAP33tbcJoHm3dXyqQ9p5XARqfxWHizdaGopgZox4EKDxQB6uvxapZqCGsuy7cQKZzcf9fo2mLBcZFT",
  "key31": "LLih4dk6Rkr1V59tYseZGuHaYSzUgwVAk4mzTbcgGfVzfYTdNhDzoKWnSejtyBFLoRtkcQ75GJYUxEB68e6PsYi",
  "key32": "3mZ5gQFYTNrw5jfxkVGMPNhAfebevGaJrYfaD1uRayMqJgxNc82793g9gMgAruYqZfvEHBCyuU7RGr259o7XSJGQ",
  "key33": "5TH8RaV5C7ze4ornjoq6ChwWq9XtMNwVkx1Rg7zsbbCtRU2JXDGJokZB8X3yJhvLMyqsUH2yKFM2QWeqLTkhSChR",
  "key34": "X4og7pucbJHQ6Xw12AMQppLCZxRDbkNP4FD5r3bRit8TrHor2Bd7tJKPw8fc6cF1XYGohVTZWWaWw63nTR47TTQ",
  "key35": "Jdq5Bir5uxnZmzSuJBQvkMsqU5uxcx2VJXFw5qk6xc3td6rF7w9CMmRoUu7EwdhvE6d2PttCTSiJcQJfrk4M5PA",
  "key36": "35K5hGifKQN9TCL8iRZVQTyoDVUUKr6utG3p78LyzB4mqaEe2AFmx94vWuw3VtR8Q5LNY9L65mmC6Ahuzq3GM8dt",
  "key37": "ytGshE1rQc7Rhg7JCr4RVZBK9QfPtEKTDMd38hRhF2PZXtSs9icXaBtvzV6Edm1ar6ycSAYHgj1H9D1xu4r6Nt6"
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
