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
    "52Se826kbR36t2eDUZMA5iUiaXs82ezh3VkKiVMmPnaGYQJYJfT6F7ER25YbVDcJa5fCUVXBRLFgyy9wrouZqyhU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nfue72Y97Kv6759R8eLft6zkYmFFcM3gG2ZqXFprEoTNCR9JJR48j5B4mAQfYQZfpDZY6tuimi1W6eZsVNH54a5",
  "key1": "3Gi7PAPNbxKtDFWRbS2DbJ4aW2evpMEwDHmRZLkBWqTgohARteznFWaQMTRqKpDMqH5L8wznBsMtG6bxJfASoPdn",
  "key2": "cLNng6sBkVhoGS546RVZpt1EgstDfo6e7jCPxcnad59mYad2szwoQjajfuLJHtDWmgSyth5TS8YJiZoLH296nGT",
  "key3": "39oyHeqBknXsGCU89NymY1vieHykTFnSULWHpWyq5yXcLH3uk4VWuJXNYH5wXSKqWXuiC8RS3rv9WT6zHCAKdvUq",
  "key4": "2PsUyP4TGGt6heUFvo1EGPAS8Z4LDzDDHgRX9aB7PrpHX1rzFsb57jqzTE8ghePfWbJak2mKK2D45udjEDDFAc2P",
  "key5": "3ijUyHxwDfHARU3j9DiH2D3Rk4RezQE5AdQoBBCU4sqCUoJU7UwGzh6Gs4nTjHg41DtqSKtnqQdTo1ozAfcLy2Z",
  "key6": "537xfrnWTxD1QAe5DzxRCju94ivd6rccDN6Y74ekPm5jueVq2aQzQbG3tvMww19eCVLs4Hkkfha5tP3o3m1A3kEv",
  "key7": "4HZeYA1XP5F1JjsBfAuKpRAGEXgGjv78xXQmK4zziz49Wf2pyw9DriDXxshTAc4SpW539kyYQo26W8ssLweqmust",
  "key8": "eQhDDiWqQ5X9QiVBrCQcQa7jjB3LmVan3kZBJab4NFpMPjKXgXnDzBFzgT2kmyfnuepV7pVkBKiUvo3PYdJswBb",
  "key9": "NBvx3PdJfAa1HkLuB1Yi7remsXPofZy9xcajSE2kFXcDAcrm1wbLJtow9hL79qXyEJGdyk216pD1mdkwShVJCLH",
  "key10": "3J8TCp9jd1AHWFoBs3GC3tV7dLiwqRfJkLKxTSVojKnu8SdL9R4AAcUTYUXknV3grMigT7P3DGq6DiYbYhzE7ySe",
  "key11": "3roT1pYMRCncfKAgC3nWjdvvpJV4GyuD91FMcam1eKkrNQTRfMngeSh1BjXuBLNr1mED5KvPhMUVz8rCM7Pzjj1b",
  "key12": "4Ev5jFchfTqMTD3cfsaW18zumDwKwMggpQaF9W4X3oAL7fn1FvqYSjWSxL4MH3rntKDNVbYm68hMbr7ssk4iphFH",
  "key13": "3CLPEDwZvSun2jR4sbdz3j1s4CVid45fo1LS2c1NEEjNzdA6aj9cspQq6dN6Qi2cp21qqA8U9xRkgfcfoJGScTvd",
  "key14": "63VpH1QNJhUkDLgJTKVmER4quii9FQsg4Mrs1ih3u4j4uqhQGrHaSKNytsJixjiALMs2fNKxtRPsFF5F3wAd6owo",
  "key15": "28H4WZALSr7PQtsjVxoeybi7JBL9qfCLfAaLswkGB8YaKjvtpJVyGKC3A28agzh3QzAS9VdhCsLuYREkY2eMi1kZ",
  "key16": "2xSeHFvdB9ivW71NL2EN2MgorkMGgrbtteXRMNZQ92chUEucW16ycKVmxgpyzr7m1e1YV33SuMicQ6hKp3tEPXX1",
  "key17": "5GQ2zqSVsMhQPAXVQjwaxzFEVzWjydssF7i7XT7qkbV461smoByjEtZfaiw9GwnKMgZTqzvFBVkd1tM36WaubtcC",
  "key18": "AAfV7nH6GvTxym7cVbM7UCqVCz1RKxSVPk6kzrtZjS8gNBxeCEeDwHJruPRUHDfFG9fgs7G3QkKWTceU4QuwGfs",
  "key19": "3FNFyHwb9SmyoQwvFufpNQt26KRmA1c1UPJMptRjVKThehGewUfEfecLPH4cnhngfHPiQjYsNqMBkEhQXKd6M2Rc",
  "key20": "5cDu4n92gsAmEHZ7qhNSfbaULjwMYDL2pPM8A6pC9EZKR5Q7XZCmG616RvvPdetAdn7K2Y46ANenydfqs3y8pLwR",
  "key21": "5DPo1s3DoKVMZsww4DXz2tkB2B5wo9hpJscUDTbMbUBNbvVuPnN7eChVq1ufepTKgaH9WCWvwqFzT8ho85j99L1r",
  "key22": "2z21HT7RQKMFw2wdyQDCFkzhAWjUkqJrKenXTXWfDuTLC6rrYEQBMLGmw82tUGw26zRWMp9Y93vpPifrs2BvMekc",
  "key23": "5PRhMpvB7DouxJspsbbm4XMgXqCuHGMvDVkzxZNrZUTY8qrGSFHm4W3ot7eqpSEJPGQ3z67eiVPuKwx5XEKDgpXG",
  "key24": "xEoekRpv9eHuSBSdFnQ9ksL3TnC2eYX6ZskaSv2bJhmyoRFnyVXX18n9iVfiZXr2pPnAW4FfLmgiVk2ci6gXr1S",
  "key25": "4aC6fnokZ3Abt1fD4gL1JVvkYG8sYBQK1Z9m9whuPfbXFZaDxaY4omFrYjbmy33Byx2WDQVsfQtnVdraEQPfWqHK",
  "key26": "suSYPKaTwgy46fL9vQGEmFvMBvtRjqukKhBXDvD1cmEiFzyVqGCpC53eKuRN8YUP2tukTTTAsGHQDV9pxrm1riF",
  "key27": "3MEWSv4tj9utG171RinvuFPQkLMKj55ThuVhomLdDExpwZoXzwP8Go2oYWY6XHMdU8xQPMm5XKZCV7C5ehdteMzb",
  "key28": "283HoufU1TpLdFBEm8n426HGoaU2Xvr8iwn8JoqsNdjVgFtnsnYGt7uW8CsCjLEdoiBPiCoWsuhruSKJhECgULWb",
  "key29": "3nyeVifJJoqYGHm6Xwxqj6guJx89ec2K7dRHHnVSH7RrSQJR3TW1do95RbYoGXaLdgpoifWTbuFN6WqzW4uk1fuW",
  "key30": "3ahmeE4tydWF6EyckDNBfkV6rj4DtESKzcZXouTRMyLAqh9XcQWYWj4Ma2TwB11mQsKji8mRCzzMh6oQGMntiASj",
  "key31": "5KGYBdPzarYG6gYSE13At7wXc7qsZsSJ1cLXGVLgUmetTG4f6ZCuHSWSNEGP2KwxvawFMTDu6t7XyqV38XkQraWn",
  "key32": "2D4u92RsGPrFruNQC8o1N14Xeyj9BozHaikWsQf15ZMUhdHGwy1C8Na1AARAprcWyqxQMp7vpTJtxb2GaPAwXrcC",
  "key33": "5Js7v7988P5qDPUU5jXF1yVtueh1qVMXUSrVeETpuT78qhL9hx5V74Sbve4r6e42PPM5ZcWiZCqtjN1jYZ59neKU",
  "key34": "Ah9YacM3rJE7nj8evXcyKEYEpRpusvLKaDjbW3UkxFezF3na5UA3bheSnMx6PsrEXLPrBqjzf7U1JwJUQiVVCCn",
  "key35": "3Mr2Bq9TRuhkWDFfyNdK2v7nxQuaTbw4tUmM9vQnT1Wk2rFpWjqgaagf3UFd3NUBS1biV6hLF5Gqk2TF8BNN8s6c",
  "key36": "454Kf6v7bbJYNwm2dzbRxeDEz3Kuj9iBk5fyjqusx4nsN8QfoKvuaXgBa9mWuDxRyHAnFZDDuyt9hsJr4guwVjK9",
  "key37": "ThA3Wtorzm8Fmp9x53SMWt6D3SGGwWkBns2Y2YmKhwwKFiQjRhgAWrqtjCuaXk7EkL42BxZmGcWGHYJBYT5TKRn",
  "key38": "4LLXCqFazzpu8mYBhJwSRSLdnCZo9jWyeAW1RF6m4GCucLFEW5nTFisqfVzF63ueMan8y2DLJRTnk2GQbUgTysfA",
  "key39": "3JcmfhQiRYJMvhq48LAV6hUbDgsQ6ZwLZfJYsBYGdZfXSAz9MBKKzo7BUrwwNL9zDYeMhAgCnYAMfh1nMMchHrJA",
  "key40": "4yRM1wcK9kXBXn2rDtH2rqu976paTcVsDcvabzfz6ac5mRAmgvFKMu81AYrbEyCmScJYvDbFw8qtEvBiYvfhjhEr",
  "key41": "3MQntBYxAq4HRztPkADDbxtAfnwE2Grz8MV1MSE41oLuMuXbcDjvqv15xdbtTJXn6xgGp5QEt1aeo6r31kachUMM",
  "key42": "kVbVFE85teXF99SJhxHBDD3a5b4SsLSMSBVq255Twsmor4P3xfuWCH3o8wqjUXApo5VMqenYYEEc65YwgFiG3QA"
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
