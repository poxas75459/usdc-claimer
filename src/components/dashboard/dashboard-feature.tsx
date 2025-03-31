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
    "3TYaVAizPsQo3SgE8zJgEE2jZiv9FKZTBGTuW5jd61GumLwwmXJ9huHqtzDK1Q59RE41bfq1GSxNxP3WKzSqn8tC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wgz4pe1Th8aDAioVcjVBzsE3T33uMAc7R9yRKQT3ZMTgXjwwS1AU9HzEtVhz9aZRsxnxXgTSmaKE6GvnfnjYVJY",
  "key1": "3jwWn9D7fK5WFPUTQobtegQQGLNUs6xEVxZXk7sttLTp47e3K28tb3XW1TJNj5neZYrCAzhoSAANa3ryaWmJQH79",
  "key2": "52XxdUXhJWwFjWskZMzCPucmekB8qCYa1UcNTi79NM3A1NA1duRgSJQyZDTe8KFbki8ZKyKbTUpprUuTNcDnmxSR",
  "key3": "3TuNSPVeBQDjHH72Z2TomVkjvR9QCFwWU4RrJVM4titxZ7ZwkmvuTLvdG4zKVawtGMkwE4mGvgtyKjMLXAXzdDPz",
  "key4": "28QdkUttKHeFSae9qs3KxtX8iGuDqwDUexQ3txzVMAV9Q4woWcg81GAv8cLycVXbkoDkAGmYg2EXx6QEJCwm3Wj1",
  "key5": "4UU7MbjDR3NCkfrUtR8v9wEVeKJ6gDZXwWop5xLNTnFgKrzVwDerZDJuGPj7Hnt8C61F9HhuiuVLa4iCa5VoS9tS",
  "key6": "4MuXDouHP795z5wvrMEVj8YqeCyHwkjfRynKanyHCFN4Waix3qbFMpLbSco3GnYHmVh1EqfNay5TC7svoQJnQrEM",
  "key7": "1bv8VdNHsf1CWAqbvRjaTYbG1xFPqVYNUpQpF1iumYCtqrwF3oAP3Bs1SrViwJpuQ93h9go4aXnVmTJkweba93S",
  "key8": "3n4RHfnvc9M4UfiuCcQiA9E7cWyVi3rPK6eHJZJfP7C12mMFTxQBXQ6vMJDXeNZydZyR4SUkmbtciWLDHyodfxPt",
  "key9": "3pSdCjNUwnPTkS3MmSgZr8nSb1P6RaLg1RsjuhCmNCWzMwLrKvipoKow6DegVw8aKMBPK1iehvCaRcPwpafmNoJN",
  "key10": "2iTK1vCvEgkUvLN4gUpP425nZp4LAqaMYWTGUpqiJZLW4NVg6UaUHdHCccQiVkKAqUxNbnYsBpXhsZ9MwV1NRZF5",
  "key11": "3tUztYuZg2pnBFY84Jrb4AiTBLG2wsSRXh91u7mT9srp43qV3VP5rtp3M6LjdBpZghcAWR83FKVJeRSMX75ABJae",
  "key12": "428ru9GhReoYNTuRB1ThP97hwbLPg92z1uvKbg9nZF1Vo9FiPsNvgp5X4q4weeAkawkngD7sZZzmE6GQz6esLxQ9",
  "key13": "5NQU529cVQA6BYJ17eVQaVxwThTRFeQQsiA7c9sMNVjzqQaMHyBahpujvBbFU8VJJGYrK71iGVfwdvmFghjeu28W",
  "key14": "3P492xhEtLcu5AEiHUgvj1mP5iWVtE3LDYkUnyi16LJvHqm8tZ4KoYbF5qGhbQSKwCfwDLCx9FCrsHwhAK98FcSp",
  "key15": "3jN6LbPkqTMJ2fkmA3refa4zGJWoDZRNbQCCNbPVif5L2MqV84fawyNE71cmsVjVXLbYB6coytP4psdThzrFeAHy",
  "key16": "CvJre3njZFLRoR3mAtJCwtT37UTAisZkuUM6Rg1fENVorFEGLfaUD2pFDD39Wdx8DtdwU2h1yuaTY8PVEVBHFsr",
  "key17": "62ZoKUFE1MkGWfY6DeUFzAa4hGZ9MAJrmgpPeCnTTFKCywHtXBdDQqhevqjvVyH8w3Xzr51X7rfZS56R33baZDNk",
  "key18": "2vmq7bdKu8s7e3oewtvAjph8iq3pYqjGMga7qgxxhdbtpatxbR1S3mXmKyn3S7DxBiLPHcn3pgvrScCywpg1jc4e",
  "key19": "5NzVLPqPxsRSBsVL7UQmnVii9KishQn1LV5SpJHamXgkc7zeSHxhvSNnX8BDShV7PLZn8PSNxgh8Vjrs8xYFEE3V",
  "key20": "2GHwEnyLEN6KiQxCd2JAMfDkAo4t9wE51vZUAvsvAPKjGYTpasXomdShcRr52A6xJ9a3itBsKYYJjbLFWcv2Qwsf",
  "key21": "2tETK2HsYJMKSkJHjeeXv7RcgnAnyauj3tDfUJdNqryuCCA12ccdufk74GbRNeNXAg77akYuJDLJPkHX9XKDmpex",
  "key22": "2dMaPdZNRWx1szsVwRPpBRawYuFs7wvVp8VWpnpypmg2UXdKhoxkACVSiec52SUPK9nePuqfLWrVquoTYSnPv8Y3",
  "key23": "5FTmRR9rDvo3mozpR7stp6YDfvmU7JWCFu3BWGxUiq6KmhmVs6vqJq8fdPd2mBqJbgAELNkkkCzGyakjtUvHqPAP",
  "key24": "5SB7gsPLvo4CgcK7JQmz6ydRXUdibhUVGy1btHMSF3PCU5Y2gLV7eiexu95Kbr6WVa9z4NnkjAv6VqWLg6W5n7bX",
  "key25": "5FAxa8AZuwmZ7DNMNeLmYJgEuQ8NHN6oiwhV8mM69KcaVUJhbsGGw6UewMNLfxMu569SxR5nBeMRo1qHYAAzwMav",
  "key26": "2CvCkN9eD6Ne6m6wMW6RkNYpwSHNz4S7nPjknAYf7CrFgRXbavsDpwY8Wuh63yjy5PogitcgJ7UJ6RFsnPGsBQkH",
  "key27": "3a6SQAQvh3zkMxTZx591JwPvbyAddc932rbtE6ZQxwXGKP9oxCR55wJxFeNJMGRPnm2VskNhhWhGGotsU7Awf4Tr",
  "key28": "2iXhEQG3s1njog9piKzttTxNXXtBV8e9mpVwVLzhrhveoEEAXCnbViLpL55mVSXLx6ksdx8J3qJfthECRnfg4Ut3",
  "key29": "5BAz22aRspH8RwgbDLkfx46qQcpX2neo7F2m7qPFFhTLSQ6DchugmaMiVZQgdLW33LHnV1Z7KGsTfCqK2sN33csh",
  "key30": "2AYSS2BLhHGhsG7nxjwgSm6LSQX6e6nFAkNAntN62onPQU8jd23p17nDNMQThRKbfBPT7tovYKFmvLFwmt34Sw3K"
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
