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
    "5jrXqhCDGu5aBSbABFWyR9zhaAsK8VtsK7MfceYJxyNNqHgkVqk9g1Frq3an7L7k9Xc9ZaKJE6nhzn1jsBEwyFW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o2yd4hfGwGdNSynnqpUPY2cd13GBVE3dTQi8EAX6FgxACnghfyUEDeZV1tLEWLsAp5ZpLktGkN8NpeADHCHPRFJ",
  "key1": "5mwzu7p4D54PiHgr4qau4kzSHrVMkKNQftAM666A26CYTBhATH1j6hZcrYBdDWxNJo8zRQT87efb9ZFHx47ChELa",
  "key2": "3uPUvywsqyvuvt8UWjPzQTSgWf6qeJ3YGXi3eTRq5Kg3kZNifJFcUspWQK8ULS8V6byBgRQmJidKSPooL6pSsmu2",
  "key3": "Y8gGBMBPqjYZgutUck1zk57ySgHoy9EHtpwAejnH7K6zVEF3ALsVrKbTAkz9kfDyCA11mwZZhKwaQurEchmfyAv",
  "key4": "5sooEKHAW7rut96sFxi1Uyt83GVTU2RJcYdLS3Y16m9UYTyznPTeJAFu93wDBuvjqtChriyJQ1jXvEzcQiGHmH2u",
  "key5": "5XnBZL6e4Qe8nPom1hDpHGaRRKADCjRNzgMD745BDkxX7x5YGDaWHQjCufJYHRXXJBxcf4N1WLiLGEinWqFZSQeg",
  "key6": "33FnvHFFbAm2ouSNr2p12XKhPR5jngqZsUMZ2LQRbup7FHE6dZKQEoMuhwX5BpLTURynkAZpkynrFVrnkkESf3Kr",
  "key7": "5HnV6K5fSYyReC1CQsMWjrwM6cdxyDuKajkGPmWk47iLj1sxYU3ZF9wqL21WuLaKZZ3DwotiF3CFqbmo3FjFNnFm",
  "key8": "4TrZ28kA1DMxgrfYVdAroW3SzQS2eiTEurKbL6DwEakbccpxXFiGCyaqFpZKEJiq49Te25h6jYaudg6JeBwgVvei",
  "key9": "39MvfuKK46Cn1y558QuFYzeCQo2P6PxhP1KwfGUfp4A9iU1jhTrYkwjPfGj3JtvZMfAMpTMj3Q5oNNTd6kRtcnYq",
  "key10": "5Jyg3J5xcUGtEKkACohPANgtE33uBjMqJ4rC6MZTSLnLJp8hQqLGWAX92xrwdtADdxoUJEAcNXoyANj7McCzN2Nz",
  "key11": "3BfwRbfRpii5QR1YUtC5jNQQmi3NTauRWkRQQ62MXiYiVx7LyRkf3M32ZqVpLkSidb8YVGnkmZCCvqkhx9XERFMJ",
  "key12": "2R8TJdBUYL5NFH3dKqRzJC9bCBpY18YPMgNJrSrguZRQxg81wuRY6DV9MUFhubwhzcrpbb6sYMDvGXpXVcBHC5XX",
  "key13": "5rAUEaRpGS8QrXw2nvEACRMV2fmM7qBRLmcTiWLEHMMFNXGAxmWSYCgkQWRjrBpbNjXWYXhaHFYvvwU8NngiQDNo",
  "key14": "5CPBHtp2AL69c5hnut8BjAaUYomjnDawtBZi2EfPBJdheFweJTJfp5hyA9MuFwSrev2hLgCanZ5M22NuEffJgzwL",
  "key15": "2Th8K64vYRHyxgXAGe96W5LEVuczYxqFEBVugZCqqTrk8umN2tseS97Z1G17rDjuVmSP2PLMZuUeTM5CyGfYA9aR",
  "key16": "2bXi36KpMEsZqxHQXbrwGjfSZHGoVX4hLzcS9r1AQCRSfVmFuA5HDiEybX15LXXmwh83hvvbj8cmUioxrzMmmavD",
  "key17": "3Ah7fQDwQMJBQjuBLnkqQbs9LxxUd9m8EirQAJekmnLQ194Kq52kYHNJRPWXgSv9ebGbZ5ZyFkoHHGLUGPKZf7xK",
  "key18": "sHkeL3e3jYEEdSyXizGMjGi7wbVmZiYMZvgdS7UbZUGzLjSHrjAFjxQbww7QfBMkcovTqEUroDDWkWayMiXxyeT",
  "key19": "4RPqHhj5c8nSh5fkPkgqa9fdQp6j2QL9DXdyxZ8cYbn1ppeJittEyzQofdQkuE8Jyoif4aJNxVA6hMLR2UxDpTpS",
  "key20": "4CVCSnzZgU3ZC8PMatHGWFoxXFX9PcrVCwDR5y9WhdPcVuqKbtmEBrHEQBPnrtjymFiSjcR7AhDKxPtqyKw6tcdc",
  "key21": "GsGLY3J1YLsKkrydP2fUJfzSCLbRArEKWt5QgeFBxmvomCevyRkr8hGLmiZaz62MLJeXbXhdrDfhi1VeBJkmydz",
  "key22": "2GVBg6TESqDY1mKpdKsGMSUUYm4azcdRKgRKeEtaDEmTsmfZoytuFZvoiAmcGdYsvXhJoPBxaDNQ4ZjMGJzQCAMT",
  "key23": "2ccWArMJB1JDj9nj1gyxMcrtnPY83KSPa9CmEcsC8jFNStQabLWTt1jZQmwD96syZjfB1vyZNNKHnZiY6u37dSWD",
  "key24": "5dXwKdg5FP9u723wraoVLu4X9A2fKYozDU7EHBMrjmU4erBidMmEjxYCot14Nu5Dwejbp8aoTsQ2T11oG7tJLn5w",
  "key25": "rbRLUpNWoQZdakqkqWFVqJp6tdV9Sb5zi54iwZC7EqQhn5KDt7H8KV6DHFkzmkP36JQ3CaAHpBhji5WJeku6U4S",
  "key26": "2f6qHwbm2QDXACTAKm68Uaixe8RVbXJUv3pAtozpjp5GiJJ1PJFarGhfxcyqaCorCoJ4NvEbdSzqJs6ssq7VVnWz",
  "key27": "4G5DRMACq1FJgrdh1uoWUo7KiPs2Nzv4wn9bJraLtNAUWNQQ1hu4TbgDfTV9uXYGPb8A27Zr2TkeVPdzimjFXiJq",
  "key28": "KrQdd67nutHo1j6o9Ep4yv8iZQL53VextyLdmYK4d5j6LLAMqLQPPiExqnrm7XPCJYp813FNhu8YrFwJ6cvWjEi",
  "key29": "2Wv9H8THdKYFt92jBxzXwP5WR9NKQBMYcQKxEGJwXeQQ9kx7rVxfxGbnXnPpp9m3RLCPwABT4NoERqaqqbXeeuYe",
  "key30": "3uPvvkATSMyTwb4FeWYct3ZKUMkEv6Lrt4CsQm7AF2kiLqGE2ukx4ZuyM7Am8wKgk7NMn8kjUTDG2m24Ay1yYVJt",
  "key31": "ox8DzU41BrQNdvkHe1EsbSJ76cQ78FkJB41zVj9JwwkNMFaZ4sR85GWT86huTtqScGiJgFrNeC52W3nvCdCEfmV",
  "key32": "39wciZe6qgMLG2FqMcZJkZdnvk5NZT3GaaRuG8nWqkHYZ7TSKUSztxa8kDqZiwb8Uei3rtbpkdg9bR52izjuSfJq",
  "key33": "4RoGb1bm9xnY3GCTvUWHB6g7cpszuRRt5GcPFqLkRtcG3KGd9xUdfimY5gfqjtQDdqudfy1K61jZE6pBWrVLGMrp",
  "key34": "pZUeaA8GXZ117iERp2NP1VNmNacmEdE2nbfg331UVSfMFSfrh3W3VwAeuzahrurHWG7nvoC9bgEiYz8mhfMZRwh",
  "key35": "4GPsinnDhmKVnkY4xXMKGoFLQGzv1U8YzyfH66u2frymWnpMatBAytqMbu9XC5F5LSmqMBhkmimeGVZSsQvdTRri",
  "key36": "5kmHTPn3RNaygt7aLGfkE4CwtyQUNxpCzRA2urvVjukCFF3TPJARx7PAAUHTJnaDasN4SnnNxh3ZQVQpiCUBVUrz",
  "key37": "3r4QFz1uD6LF8TRqstxLLAiumetmdDunY3uXmXMbn8n4V9hJh3nfcVnGfZ6K4UkeofihNHXcfJHKL5tpStyLMXDK",
  "key38": "5HJAo2aVKKgBvb625s9D9SnzqAjY3WCoZ3GfuDEMBqxisuomCqNaAs4VFTzowWfUTwCu2UAXTgCPtMLKqA7pQcJB",
  "key39": "KijyMeZ7jnt3pVrKpHMFfno79JjNqmZggPxn4pf4kGW9vkwhFKcSrFKXhni5ic9waAqZ96rx2maMpMtqyM6Sep6"
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
