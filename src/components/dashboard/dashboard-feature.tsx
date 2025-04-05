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
    "3Acf9bzKruAw43zNLQJzHXfnCK6GdH8KRiYCuU76mTguBhV5qQcbq6NhGQzKMbf1LJdtsxnMY35w4S14By8nvaj4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bDzBaT7wxGpTVTj4YTiQ5ucruwqQj5TCnQGYeX7u8BVjqDDJu76rco2MJ59swEJw6ZBE9LD2cPV49k4hhmQut94",
  "key1": "2j5RaByNeqZicP3Y6kqiWt2zDEzF8oKac5TkNJzXT981srwdYWJ6LP4MYC4sxXkp3B43Cncjib1XeXYHqV8DeTCm",
  "key2": "5HDqYtN9a1HKEL2Q7ocRVBQgK92LUT3zKGFpMPvVeoyf3ZUEgRJGEJozLWN7RgzED3kmeXZrUDW6Z6HejhSzthw3",
  "key3": "654Pn66fmHKN6wRXmbPzuVfdu58EEgYRDFPpe78xXx7JH8eQ1S7S4KLKhAh9PzEvxesh13EE7F28yQ18hwwJtkkm",
  "key4": "3UmdGRw2wQvX6QuKyidL9PoTQsoLn5reVc33kLb35vyDyYU9SAS8ZEMpCW6xbucfr4pHJwcYSsU9VDbUFZh285Dy",
  "key5": "Wma6DhzrV1SLBvADwDdkiSH8E2e5dd9mSvdKmeUiAE6TrtcRzHSdYgty61GbZYS5B2wTnUu6binADFHwvACzSCz",
  "key6": "2c2tnTt2WvKkUBsDbMZu3dDgDgYNhNChcihDQaSkddvtz9zew9i2roPQm1oC8o5ZPjVHFSrWhSpW2hWT3N1cUDXy",
  "key7": "3W7Aaxd6yitHwTtUj75c1sJiFb52WpCKGfZh5XcWtkWTPwiPG1NdeYtiCnn7AEaCTuCtr8gVapex8A8ucYeZQ7j9",
  "key8": "4YTocMcXfmGp45dnzhmKTom4xBMmz7yHfJSM7zrgoca2ZwyYpWdPnbmaRwJTaP1N95pEhLrKT8JLkZdB3SNGotbc",
  "key9": "3UAqyKXU4msMMKRSHk8BW5AGucK48Pk6zxZwNem3VqCwbQjSgYEiPYrHT98AsikkCmZ9U5uThUVmyi3FZ4MWd18u",
  "key10": "4DRMrXbdwQuxLNnNvLUgxMKxRs4LvaLfAGqcceBCU2VDn3Ds848769Vxu5sGgS3LQmfKqyTkJHyLAiPVdSwbfzSj",
  "key11": "TgjwFN34V6Vtu2RTeZSGYT2ZnQapVJ5mrodweWTUQ5VLfCSaYTLKwtVocLRmm5twXeLGPVRFZkAR3V3otdZRNFo",
  "key12": "5VDYt9uDgKPU2ZqgzXTuUCik7KnzNH8mgD67stFVK3PeB9tqzrwwUveAKnYjZqGMXxQ3WQpnTeEqbUcC7TRUeMcf",
  "key13": "4DrZvjfRoxpx5LspTJk94pryzwxKCyw1dXxgWjvx3M1KDTN6psSz3H78MHoZY84h5iSfu762EtJTEZSY3sFDiwuB",
  "key14": "5QHU3r9uv5HUQmzizK3SeLTkiautcbysufo6UATD7YHmnQ5GRxwD8x3PvcyNdSAGLqwzvABj4Z88fojwaSXV3uDi",
  "key15": "4AE9ty15HmpsQVv5LL9Zhtc5ZSEwemjGno8Yco9J8cL738yrxBdMzj2u8d7CxYVm4DHKpM6J68v2qtHyEVq2oLx8",
  "key16": "5FjzCJEoTQ9xKCdmcBSq3tuzJUWWCaEZPzYJP9Q5WkAXuAGaFvtU1EwdoNNhqf7U9xReu6Z8fRBTAYHDy6WCfbru",
  "key17": "2jv9GouohPikMDa6Rsifw6aUEfygwVn7XyzkiEVXj13MogvN8CJq8oWnM5b8KAPjqHnZswnjem8g2FhXsUiRUAx5",
  "key18": "4Bu2PqGvftdncSEZ7K5kGMTHzsR6mrCEhkRw3mTgk8PpZc58c4rHc2QmBvqHqaBfFGszeZ4CEAPVjpC936V2ugTw",
  "key19": "4N9FNemT2qSHH8cXYSW3Btqf6bZyHPSudDb3tU3rqVf5sutTTYKYJC3t1afZAmKkoGzVqM9aRXVeuw7racmQVvB3",
  "key20": "5XWh8PWDeN4D96PqvKxEbVu7NGjoX2qc3A7QFcRSSu3w6HD88WVDeDVfNKaf5Tt2dM21TFkUKEqK8PABerTShoKz",
  "key21": "5aqtvHeHGT7c9FV6C3LNb75TZimR8eURQ876Ej4AN3Qj4vAurf7XNQo6py72YZV1wWERE5zde48MFCWuuvh4S1Ux",
  "key22": "3WDQqhzbH2YDAALVwWieEDjjZp9A7zC5pjuCDc1BcN9vD88u7tYYiQvCQY7JRGQHTHAs9qChSLvwjAYex58Yhh8R",
  "key23": "5EdeVw5ZXE5rUKqvdgzvcu4vcgoejwshS1tBfBULCiweNTt7uRq34Vej2rbhuCqeEbduwXVohTHBb7qiqHszWjbU",
  "key24": "4cHAX5DfyALp1xdehHE3vJMAmWjDyX2HYSTj47xYZDxCB8qRCjQBs5jwnLoSdRB8fTUBoA1qC1pQMnyPyEikTWGE",
  "key25": "5BnxRAgpDUKAfj91eY8GHNhqWgMNX53uxXDhkQ7N69HfQfvcxbaStL2BtELUW4dGwvC8RhK6jaFgxhx7esGFiGy3",
  "key26": "4k1BzVbjzqJBQcyQghMF7acuHvve4CC6R7y3ZughzaDXbm8gBMh1KyRvHwFq4X6VjrX39onyKe7n64LYMr6u1eet"
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
