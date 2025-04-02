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
    "3JdU65QA44Zh7YHvY97KHSCEr6KQHdkekwu13ksvxTXQbskHiSaDmSdz4RZDsjvjvoTZui1UweAhRPcWPn2njGMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E279YwrACGuCgqFxzRkYYgsX4VYY8coZeQNLKhgYyghvVrEPrSQgxviG3L16idbVCkL7HNMTTovg3Fh3taUQHDP",
  "key1": "62TrKeSCtriZAJo6mfQ7CSJb2gchNe3fsA9zDpabCWKWBSmq2hexUpkpNsKsKv9X9ZNWPFm5r8sohMoowFvZvFCs",
  "key2": "U8XsjJTJWg3vUvRuCqQtrGRWMgW4RHZGJLSv2bAqkYvmzaTs5ErFr21hnric4NLAnSyh3NLn18j2W5BVzQRjqg2",
  "key3": "8QRSzNMcDPNYqzUMvGDQhQTknUjcQx4BDugM5QDw44DuKCyKUPMSv4UAWz3yQGDa7CeThfebHVjjeVzkJJN6TRk",
  "key4": "3v7e6QGb5PvqtnwMMTmmdbPXEjjA4i4WLj8tRyeoLgR2ypjHNJ9S2nCsYfZF2mAUNqXL1pwrj2Qmm8VzihgnNXK4",
  "key5": "4sEqNYYuky4kci5YMEUB6qhpMcUtASKSUTKQQeRw1HJcpX6YMPLcG7XffCXoWpUSp6uExNGLU6mkgLkWqQ4KqMfn",
  "key6": "2fAgHNdReNXQVdPx8ruXgVkExdbWvAGg94C4QGc6eQ14rWQ4Y5B81pisUFfis5LvfPwiYenYdDqPDvqr1NUC1uvD",
  "key7": "3sf8e2nUU2h7tK5j2oSMyhdsCaVGaE8XvcTFzttAJgzpUDo5RCRrUSBGu6B8expVJ62qkijox5vw5hxAfjcGDT2d",
  "key8": "2jbjHwAH94hSzRio5HujaaeZPF2oESikhsNNMe3nMZpyM8f7icJrFD9u6NJ98nSDRh8dGpEVSfJJfrjr6c5hag7p",
  "key9": "27mV5dFKbT4DRPJprzBddAw2EuQ6sTai6H4p5U2PdXyxDyKteEie8hJmvdiWcnnKH5ywMrEPKU3bgnr5zHnATH4Z",
  "key10": "5JzkiL9TNVK2b1WSQFnBR1ATReNk4WN448cwpApnGJh3fLxpjiRyBdaZkpusH1MvPoSnsrasQc6xiwET3tkmxDpB",
  "key11": "64jeaqT4FKyJbf9eov5PrDjcrByh6drxhmUBHuapPEumaVUz7auat7NurzzsDJrzuXBvL8iCaiPRo3rU1Je3SK1d",
  "key12": "2ipyG8i9vgkK19KDPL1uF5Tqh2dEjQAbC6JuRa4HZTa8g4kB9bU3AY1e213V2MrTqf4T6AZrJLJbvnmCPv5fJnW",
  "key13": "24ra8JwW1jCxVSPpbMb5LkDDgcbVMCxoGzYcvud6MMfeA9FN4BpTUMHLuAti5Jokf1EUd3h9SAa1jLBHE21TwVSE",
  "key14": "2Hi5csuLvGqPDz1KXmJ9HAz6MPnijajamxhsC7X5gB7QQ8wePEJ1jV5VAVhUJkTXbGF5fdxFWCqtiFg1Ypb2kUT2",
  "key15": "4zECXUZFhfhMSBTrpTCwbkEX9Y1ZqoeDSXGWqx7QBREaSpUaRGaJ9iEdCrC6ABMHDNKHdPVtpBud9Dnbo9MramWe",
  "key16": "3u2KhA9p1qeyFWmQKYJiA2qGvo3RKMbE8AGJ3RoGAyZBokHZPxMMzfyt3vXqLTpK3nX4o2Gdjq8pMD4gL912BJo1",
  "key17": "4G7tpNtDLERbBNiB8iJcmfeshPrqAf1BwtRskgNzba7EEKFBhPrBQuYfrS7rmPA3kGyqTALQ41CBMCJjM1s3wPar",
  "key18": "2SsYVkA45c9FwgqPsB5H7BX3rQ3ykhFmTwvsFUnWQoCxCdChCGyc4cRBVwW2XHEdPEWLvyobEug25io2ir1U8xJt",
  "key19": "4EGwBTUuCyS9ZBfgmCkxTJT2quRt5nUaGSzF9n8RL9uzXmN1KbpMjkJkdyYP2zN1pDgYYv8FPJYUyBunPvK9z5r4",
  "key20": "3tusdb8g7MDqV2UWh9tr2cseVqBKkikmLQyaYrNifUxumLzaPNKTNHWMdZiL6V8jdHh7ixQTV1S3RbF8tA5nTwac",
  "key21": "5LHtf2ackDkA1vB8ojysaQSCYAtwHvVoWwvTkXqaR6sc75X6pqwzNS4xroCQeFAnSEsRQo3bQ3tdF9UgACtGWWu1",
  "key22": "GBEP5WHWxSfJTAqAsf7ajVqxzAZXFjDduWVbq3XrNEkCvzBnwU2pUFvd2PsXJiHbZnF2DbHnz1kWgSsEosiKY9V",
  "key23": "7V2qgUUTyyAj6bdjPscCco2uTLBSc6ME5VWpYDF3YW14ZLgetMJmXMUSSeceFpr2HBsfm4yjuaiuwYkq6CR3PjH",
  "key24": "AyUd34hCQNwB6PRPSZyDCSkyme4QMDcLNjk5rMTCrAYCEqzSqj3d1X9iY4cfbxAUDX6wpEUVrkX6HB4L7R8mcvK",
  "key25": "2eRrHhymSMoVgHUAG1S4qaRf8rY5ipg6p68xz7K4fUUoMPPetyUNLwYJkoJpzURjs62mJHZGxmEfZXiTMG3cFrzU",
  "key26": "mrF7RrFMZBazAh4AaRx2QFHvqLb6mQL7N4kHsQ9dkWMorgGWRm5ucqkYwR4QnshwqAJhZmL6ndmgYQQS1Lr7kwb",
  "key27": "5HGjKQpZgBCYDEeGnMovGmXzbYi9bd8zbiC12xMKiuW1xtj5Pxu2rjeu9QRXShcjaf7Y9Y5nCtGkyn38jKSKESzw",
  "key28": "67nKL9E6UW131AJXh2qomS98fdijX7Wnrs7iMuuW3eroqpKNHpqN4fLeP5eobS9qchc33ALTAPQ9vX6WaWzF9rkx",
  "key29": "3zk1PwN9HUaA99fKwv3oHGzcqRufVzPmWtcdrZ62qKai2ubEgGvEvczBXNzuak7tGtBDpdZuBHNZvEfWXSwrsNSi",
  "key30": "2ZcpYdfojY4BkLu4MwzKGRKR5U4G6GeguJChCfA7X3AxT9wZQfzawBF7YDjCNjRDuLzZyWPa5zrC1FnEfzzr2qPw",
  "key31": "5jkiqU3WTcupnVUdsrPvt7fBcjGyoK7UqXyEJ7jNySqqTvD1rZ6jCyjysqr8naAZM5EdV5ZCaEBgrjrtbn3mBrLm",
  "key32": "5rVpUgFrx9F4gu4P4GaMW1C96L8UvfWP2qPLsEJcEVPD188Ni8GGGGFFUHK4BDQVH1DrEA65jisc3uTjCDh8fHp4",
  "key33": "3VEB9PT1LPwAAuDZhC4ks6mUo39Bbgv4697wjhbNgwxxA76cbqAh3skadY7pNbcpmvSD1wZw7yHEm6mK9EHeh2bN",
  "key34": "3zRbekXyAAZ5HaWGKowLxfoZbLM39XYAKdtUTbwLTGpavrR4GxamYJw8u5zxT76YA1EDXYKZkqPeKn6x1NpRfwps",
  "key35": "45Wyvi2eg96Gk3gGrCgAkKnq3iTZKEntdgE6W4wmHedL3GxaQSJxY8Bdu99AQCguuHigc73K4bVBCziG1U8PG5y8",
  "key36": "2u2KEFg5vFQnkAKom6VivdSGgXNccyPAwz2DEEFUQDBtHRYToakH5ug1vW4MEUizsN2jehHw7d2X5EfEUQBn2srg",
  "key37": "2Ee8CyPs3xa8PR4KdALMNuHUs1Jty8vwSydkL2AzeCUYDMD4NpmNHp1Xn6Ls5jsMZLCjNgfCtAX4A9rfhRVdb729",
  "key38": "62c8rxoAMjS8GL41mR1HSP9xyg7px6CB8yj4MnvL8pwyR3YU3zt1z138rmDcFpRHKfedquyBU9Usc5ght4eqNNB7",
  "key39": "zwGyz45gLfj5bMoecQvyG9oZhN19DmcSTdjVnPqFTd6sZjV8L8iADk7ea4mavmVQZ2GXDEzqSPxfwQFWhKQB1rR",
  "key40": "Gz3GqRNMg9b1QH4sU2bffFXPGWbkXh3sR5QYygk86AFaFr6oo6mWpkPJyXdEQPzRVi3Juc5nUp7tKd6VQu4WiYD"
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
