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
    "3caBW9UnyqEBcLoh18fwbNU3E4uMf2hp29tvCAaxRQQ2CLgTF8Xc4uEB9Q4BJLERmvYfZneUjajMDaL9ic38LdA4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ygfpmDGAqPM6qrWny6VLy77xRp5kYPgF5eUg6Ei2XVFP1rx8Su3GQUNiY7t46hjCDH6RnqY39A9fNcEA3SAUCx6",
  "key1": "5s2D1Z5Y39bgQUpe23W9zuvwff88awP93hjeLs3Cc49w2q5yn3GrQS7HwKRt7vEm6GwuYYyHFYeb9156ZFByCyqX",
  "key2": "3DCwdRVWNvHHuyvd3KSaRWaKMEtjGiwLbNqf6QpriC7sYJsi4dCHF3CoZm2bNVaujWq2puFypAKEucjZPRLu8q8B",
  "key3": "451666t1brYTRkDnuT1Hz8nKsRsTddvzQDuEUdvLxjXs5cLNBZ2MfZ6gYmMiF9Pc1qTerkvLB95QG5C8PqVBxzmg",
  "key4": "3xFCCuNWcmYEfMkJBtEk9zXzmWAV9ynWiKSTBv7uVjszdvRg1cvSAVbMmkW5Uad2odeVCnD3e2KQrtv1kE8WRWrw",
  "key5": "31mCxASMfxrx2tqVywPyo1izKt7RyhRimjgChjpU2pWcjYAy1NZMyNgShydAxUqEw59BaGqiJCcMLRbS9XmcWsLA",
  "key6": "3tR2npPxdE5qq1LYE97EDFgBBDbX1mLYAWGEPpeMXLN2y2FwbgCF1zReRx7n29Wc4jiGuPmtVW2EbxJwi595o5tg",
  "key7": "5CYrHfs7ZZGZbqM355GuEFLsLRPTe9Cd66iiVxxXVTjYbsQrNwV1CuWJtajTyY4Q1zQQXHMPxAd1GMDEw9njtLML",
  "key8": "24AF2qu51a9ymVY3Cw3GMtR7LDGkPUZ5gbDtz8AJ6kPqNe2edezhEnuuhm2W7B8Js8YbewTPaqCMbHUrbwno4Ep2",
  "key9": "2po3oQ7ew3nMKCXBBveypLkjiFftwamjUDV5bBmRKvhTtqoL4AS3nwF2WabWYDdjLD4hxNrEtwBUCgkaQUbDt8hT",
  "key10": "32juYKjG2kSwsrFiVss8Pbq5csfWtmhdAyW575bDFtsmnTUYc1SqUUNwXmXGJF1Zj95JG28NEEmkNd3D1b5Xq4nZ",
  "key11": "3eS4iRY8CyBGfXe2LPq98ZCbREfnFruPiofassgzTEA1SnRxP5Kw3jKkC8jPFg3wjoogGEXPrYTe7r6hTA5FN4zn",
  "key12": "4pKgtPm6Q9Wx1vnh8PLcNGWXSAYzuL4BP7uGAziXzEkfKw8yyoLA9sCymSKbKDjSVKCwsZ8wvVDexQKFdbdFd24v",
  "key13": "34jTjtNE73i2hu8UaNBZWXhKxdCWEK52if35uJXXGwG9eiTUdmEM1tgpgGPYmHfH9U8TX3wafuEVMTfGD1ZQGJtd",
  "key14": "2k5cf8tXBkUaGwmYqjv5NAfriohLSXBEFvJTFi71rA1j5oa9ZMPELfRPY9LXJrAPt2RddStfNBtpJyX7VvNNsJho",
  "key15": "3HXVA5Yh3U7SjfhqyeeCznAxiWfbxM7qB2ywEQ6rYsjSKUBAf7idbsrL8URARUJH5GxCRi2NBmiev5KekfMrx3nA",
  "key16": "5ov6BKrwjzC7HaiN2rMrRCNhUCN1FVkRw3GN4v49Fy4zuHDV8Ze64uSnCkJD6Rifmz7JrBcc2tSGUengsryReGWq",
  "key17": "5sx7dKpetxcbkwNjLy6QN2ec7pYYENQpPj2GbLMhHRTs7SV7txoxaNn5tW7MyaoFv6cejQPVJofV75NfkvhJHcvP",
  "key18": "5ANiZq2KszQJvmR8beaf3pWzszntGKD4A8NCaxd1MUXDAtos38bvqdxLvrEXgYCAAjHNf9YMUDaCzjKVTFtpjamr",
  "key19": "4XpkLfhcsKFaByVGjeJSxj8dqaEfqwc8j973fq7dNrtbupEtB4Y4Bbzf3TfJjZvCn99jSzbtSThC7B3M2s3x4JrS",
  "key20": "5P5k4YYaVf3DA8tUS4YJhjRet3TpHBapHj9TdjcLAXv2SkhTFuFrroKi1yxMK1FwqZRv4q3n152GLEBfYW5Tpmsd",
  "key21": "zabDuJa9RfKVwws2yW1Yc6E421xePDrzU9VKtJ95S6fVVvFA5YDEiWjJneDVLmmQdo5mtQM8YFLWcnvP16rmqYh",
  "key22": "612Bt5d2ZSU4RxQfypuPo5UvLcn1WfTJiihbJp7xTQh2Cshp3sm67WzLPm91V3tEgfp9TGGzvGJcAo3wg1paJ3py",
  "key23": "5LLpoda52pYPHxYRRCUcFuFCt9cMv392254Mg2SsHQ9F5jHL3pcANwFbt3ec9st2howhCaxTAqDxNt16X3ZhvkVu",
  "key24": "4chaF9SWMwZTURqMqhA6TzjoTzpm1MxVaEWhY9hLiUy3UDtpqJupmA4GQV36X3ZPHLi3jtvSqcGAfN2S3GYdJAsM",
  "key25": "RJzJVMJtfLAQaX46bq8Rn2wurJeUrWcN5NotDu92PsKyqRS3RkTaHbYp3fPhD4qMM23WXzKzUSYZMuYks4B2eyD",
  "key26": "5xod3Z5Pt2qsiM97uZU2RUGgZrKDTUbGryEXKuoGnRg2PcG941tDFeAHfqrhEay5q4JFaHumP3eEG9ULJq4ACLZM",
  "key27": "64qfCgbvfzjYbkJDaawkVKo7nTQUMXincfRcBHvVc6pVWfmyJm4ZzR1FSufgBVgST9axK6zB8JzXXeWjmVHaJKnH",
  "key28": "2qGQDqRutUZJstF15iEL53XE17bVucHc7pwXrcD784nNnZWc7PhRgh5FM3Gw2DiQHCjcYf1RYPaySHHejLwpJx8k",
  "key29": "6vXi9hAm8dCWSk5oX2z6fxcGg9TT1MhDP5xWzD11xUeTZwkbKibJJweVL3ZbNS5CECc8CaneReFcjqWeBf7cub1"
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
