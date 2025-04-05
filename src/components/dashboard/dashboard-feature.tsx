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
    "5emNRGUEuSivDKtkBdHFTMerqHJQyVBMLwKVv9hb64pd4NZwdkTRLZ98rpwUUMb5hsAE8x5LejD6T6Mivo57yYWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PgYQS4XcS5Qe6UJzHQKTswBnF1kBVtnvhMALNw9V1WcazUCjnUaWxW6zFgoSvVS6XwRzYfgvhtU3MsqCjWAW6eo",
  "key1": "3cSJq1WjezNeeFeuW2QQG6c5V19hWbm5NK23nVAxda15UP8qfY9tE47TY3NeS27wsEwzjbjcugHznXtppqkZyb7k",
  "key2": "2rYUosZTbagQworYAB4yp1G3ePPfhSi4gvD9Tdawr75iFGjjwYySdeTbuq7vNfJiTjpXozJGQWHNwm14s6FyJmRX",
  "key3": "4JT7LVorj5So9Hs5J5rZZ2oecGVvHnJDVGvQ4VpCenbftZWaMwMo9HHPbiNhvvWu3h6KY1QBwNRG1FQdnDTqJ3pz",
  "key4": "5DXJeopTNnv94KaAAj8nsXD87grLyfAVQHFG9jZSSU4jUEQsDiy5HXmJr2z3nwfSr2YVteWZbkUjyhzMC5x1Djt2",
  "key5": "CCsyPC4KompGbWn1cx9YVfnMGbAewJDopuPpx7m3FTt626h7FFHyYJ7rNMNUqSGUwEFjn3KRfZVUx9d2jQ45zhD",
  "key6": "4RxeEzK6rdvqe97DjvKsjCYvdanrG3CysVAMr9MFJtSxXRVcmLEoYWV8j87DkSVB5S5XwoTr9ZaCZTJEXVDVR2NW",
  "key7": "49LcRakWrRvBPcpAf4AZguwo6tsmS4FopYggUi9k3t3NbKiQJbte6aC7MkLShLvuMXAt74NJRkaRaf8BBgzLRNjd",
  "key8": "5KpPdLEGFWa7cnceq3mK3Y7zpRouVSUaijJzzbFK3tK35kVTkxeFaZMkYVsio8mz6PCmmTg23F4F7zDz7WWZCGnM",
  "key9": "3BqVMveCbTudsf44Y8itrWMUjtKPNyPmgxSFxSGj6Ln2WSCHTfHj8Lb97xarwiHLM9w7wnNLrwHh8uAybKLo6KcP",
  "key10": "53xKWEy5WeKcJwbXo4whiUyHLX5Bt2eCKEgwxMnocs2hTeWY6GDwKbqc3dwH1HZafmCzxjLVCqTic5zbfBYaVvH9",
  "key11": "61FxKBBFfKtYpXsvZ1Rup652qL2rPR3PQrPEepPm4g32KNxvZEQAxZToCwZjQsoDY12HXZM5MVHoH4xzpMch4YJk",
  "key12": "2hWaFqitHYnwmNtfywpmxGkJApBfrzjyDjGNxSsoVBT6sR7BB57A2RfUdMAzxksEgqZ7AYjuFQ2qh9fxNZD9R73L",
  "key13": "X7VPzHaHAwNvcEYSioUZs2Utnrv5M3MgNuKYWRUnQfaLNt3zoaHi4WWDzBRBohX7RPNQUsha7u1NJEhRPCZTkiw",
  "key14": "5AMqCRZTPSaCxGjf5u4nzj5wNnnEQ2azn2FJQQNG7AKunTzLu6fWFC9GD2BqwHUGHWYNR2jqXgADFtJuGE1Qx9DU",
  "key15": "2wZHVryDJKZYsLJadSXttbhWEesTKwKcBbMZmVHZcBiSWr4NDNfQJumk4ZyKWycdpBEvjMn9iG5pwdvwLK3FY9Qk",
  "key16": "DQJwxaKhqXrNfi2adRD2GFYn5suBf8DqhRPDeVfd9peZQKnmJtZJLJagaPn1LvS1Avto1Dq34Zno5UgGYH5x4Ci",
  "key17": "2zPKmh9C5Jd9LVu1AENsbrkwhGQL95g7ihPmuVfo5i457aHKPTT3hw8ZetsgMktnoWzBQ4CehczwXM2pu83JPKS3",
  "key18": "93NHzwYz4oaz4ZzzYqXfxi7WcxDKUnu3i1VfwkxNuvzdMFLU31q2C1o5gGmsKjjcz9cSLzMdJS97Jr15YsFEt3J",
  "key19": "5YDUqWS2D1w4syorXskkgC9saDBEEkz1SYFqn1aCVMphkX1MTvwrayTvtkTPVAjAGt7g4YJq4NV2NHCLDcoPGCYh",
  "key20": "2UkWvHQZD8mA9ZEadDQCVuhgS5EkLLcHPdTY41ZPLDuPQN8mY5XGVEfwT9SNvEsNgsejB5aVmVMK8ai4ModgJjhf",
  "key21": "3jwXEGv2idJ6b6ifq2X7aBsmnCA4zD8qniVkqCEEihh8737PMftUfk4h989C6Be3AZDJmtwqiQAR4qAh6FQf7VMa",
  "key22": "3ja3ehj7jQGpLAVR2dybme2LechmVJ9sWfka8zwr2CC5EduSpYCbwv4HNGGBuJ3fQyYyupm4uVLwt3E8Ro97te7K",
  "key23": "KPD6bvdb34jjxV8AcDgWafbti4mdceUk7QgZeGzoo7pafQabX7Y6E2kZeFfbzpAygvLoyZozyvnpndiKHTbwBZc",
  "key24": "4yD4v6erUgDZu5QhvaE8Miq4NV5yoG2Ac7FJDx8FbN6okuyCTkSbht9AAASvE6m6C24aYsD3e9KRU4FRws5HwFqJ"
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
