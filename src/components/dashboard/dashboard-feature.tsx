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
    "4CMTdHXrGawpoRmFJN5d8vfL4vDUmDdb7f7aCjrz9LDobuemmVpg972kXAnDW5tiX2kKjvWmAdtBTHuQ5VrkQNeZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sy5qFHX175KuGsMpnjVmckvAKWMxLsz8qnWibfJa8Zq5JcJkVjP58anziLq2G5dPm3bv7ayDMELD3UTrRySXGi8",
  "key1": "3FZKy5CwnCd3sYkTtyXqHJeNAXnhpK84sHccoQDk6RGcLbFxxBthrue5vG2QG1AoViKZCmHKfFmoCfGaBVJUpki7",
  "key2": "3ggzc7k6NBS8C7G47tF7Qxcv8dAueKytmFcrXcKeucmSXYMeuL6SzJoqFYwSWcc7fhPLLBswFig3X45Sv8abUnSc",
  "key3": "4MfqRdUm49KXQQdPK66BfamcdH2cMnh7bVTUWgVEsLJwndvoui2r7UZKj9ik7uRGN5as6FZKy4wzAurzjhCdBkH8",
  "key4": "63G9nhaaL35s4BQ72tNYfSdXzuzXHQuVY1DBw1igiUcdcPkwx4ks3R8DRaLpsCXCLCRUsrsR27LJRTax2CUSveuz",
  "key5": "bXZczAuydZdLWQ2wj3JDLhxjQ1SZK6noum5Zg8qCoeoBi2JJFcX7YPBattF81uBdD9rfiH4XnkK24e7ebH9V2e4",
  "key6": "kqkKoAs29r6n4DMbwLLNbXptnq26Tyo2R7u7wjL4N6ySFgG4Y9XcsirfQ8a83DuUndRVk6EttrXn7ZCJjKPRZiS",
  "key7": "3GgYnQQ58CnkDAcdJXV87DHYJCrrRcsZit75NTiGnCYXJ9w9oFDS1NmSCv1FDAx7TSnY7cmT3HXmXNDJqB5dZBHr",
  "key8": "4kSLpZjPsU5xy81vEnKUNFXQxZ8T3MsxyhuvRW75aWryKng6mjHeeqNxqSM49Cj4D4U3Zs7RB5MsSKvePQ7eL3QT",
  "key9": "4ti4HnZGLQPV7DLx6MaUbbnX4a52MqCLxykTko3Wtj9ygsQYLKBuRR5Q7gbpopYQBBDYZSBbzQ1m3q2X2ANa7PQ1",
  "key10": "4BvtddxKssEzqJWGGwpgEbtZiqHYQhvZJzZQ7cLjLtnXSfgrbdd3Vh7rRDemAJ8vHt1VoveUz68op8HPVh3eG7T9",
  "key11": "srzVtRzkhxHChF13YQaih7Q3P6aVP6knp2dsGmXkaFNYSUbdu3Xd3MRCiztnhT7cK8X5RumzdaUFky67Xt9viPG",
  "key12": "3rUV68jEsUWHokvKD6hSQe7o3CPro5wVAMC6YcW6Je36PZhPBhC6mric35BeZv5gYrrS394duiiv5NpSKnYV8gHF",
  "key13": "4FvHfXX3Wb45ZNXxvRVj5Z9Nb6TqFNMcQJEnQsBj1K44dWLxjoGtEWqegrJVE4HBVzGPPUdELAoabFo9ZE5WAHqY",
  "key14": "39BCmqQUqcz8gVEWPTkyMXz8yyyyB7fBUNqrkvTwemFNEC1iga7QjApq2YdcojM5XxhPDzZjvKi9oqPn3bEFtpPj",
  "key15": "5FUm2SzEZDp4DGSuUfA6mxwPv2SmQRbip5UTvmKA2Yyd9pmb3cdshSWrN3skSBp7wVF3S7DKLhu6wRPPZZXusKDk",
  "key16": "3N6i3H5m73cXESmayvP5NRH51Sag4u9yAyLkdhok9CWm18bdtPVfPpxy7jDXHmvPvfJERv1ZGmZNht1VoUrZuwi3",
  "key17": "5zuBsMfw9bT1peLP6tjo88chtyzFx9aNWPrzfVoEo52pfmsZF1pbtFHn1LPbCVp4dr8gY5JpkZrAwjXhUue1Qp8B",
  "key18": "5Zevt6juoYf9RXXyASTWQnhX6R7bzX3v7yguc21rxvkCkeZ1Ng2f1dT69XFSXEoRGc8xqZw3z5ZMLPEhKnWrFp8p",
  "key19": "5DWRfDf1Yo7dD9xP8Ky3wocu5AzTgFHNpQywajTB2tbZbpEbMey8spDwUzyCmfhArSjPmFqu5op1ZU5v9zJpE8fQ",
  "key20": "4nxUPuNPWjvycAhy86BEpMEVYh41CFamURPNueMHmmjKs9ZijFke3VzEQsFrpcE9CVdLYY5XTYhZeboCAPBPXm6v",
  "key21": "5K974VdGHQcpYqAWndA86ZRL8CNduZGtNEUzztLc6oqqoKQMzhhQBphByN8i2nzZiNnBtm1HsjvSGne6v9R7TLox",
  "key22": "3E54e43nLXHejwCRipYH1U9earPSGdp22xwMH3YAtk9CCWZJzWEb9ThvxCnRnGLCp1GW8vUq64pveWsoMHmdAuvk",
  "key23": "2mZC73v1B8M2EaZ3nFreYF67iZotnETBvytQx6h5ye1uNDFmsWTfTFP7TgZj8Xh3AJMrfwnmzEUN8QQqiLnortca",
  "key24": "A6HrMvtQLFrsasykvu1PBGa3tLZWfubZ48i5ocnfF4oXPzeJa69t7azEPuVkxdjTKJBu6zDMhpz82HY3vKqBtge",
  "key25": "3T78SPM5mYkhKnYYUPzhE5NdyDYNWSCPD1JJvgF6hnXo32xBTaWtrBowZctuxpgkUcFCzE5PBL1zc2uU6gsHVsVz",
  "key26": "3RRxSrqtyVd73MCtNypqNFJmx62AUeWnXoKgMNHQ87rhigsSzxRdapTacYVZecXnt9NCbgW3JtTcXJGewiK9pwd8",
  "key27": "3o9y9G3Xc6ySBxuzozDW6TFNferA4eENxz78e5JQnX4qnHk2eqYFftgKxRvddHHK3r8WkHxDsoUft8nzACCfSvXm",
  "key28": "3C1LZcZfYjhq6JfUVRCLj7czKfyaqxuauMh6dQ2R5ueCVBjdM3KxDWKUWE3bJePSqryW3w9k3JAQN4ejBNpM3KRy",
  "key29": "52Aa8pqjkWvnWt3bDTxmGyJN2tbzd6RNcqCfRekW6ht19mdmap8A6a3EYjLrhWiUkyXX9iDAXgcxmNQywmUo11Rh",
  "key30": "5vR4JJgVzEmNpSLPAknU9PyPZUmz7XUdZdYjLd8xea3vdqHqLyfrtPqk9Vwo89FNsJURAvhnDww1DXBrBGAGcG1W"
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
