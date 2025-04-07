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
    "nEPWakesEpCRhbRUCJqVxHrvKCVKrFo92uQNq8DLDj3b2nZHo94ZeqBQdJnzEBRhcGi8EV49paKcXGqfvc2xMYH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2om9ptNKA1AesYNykd9Y1a8sdreKvgJQGZrEpqNTy9JvEn3wof4pLEz8odzQwJiS8HfVAYwvS3uVWAktHWVyyr8Z",
  "key1": "3eQzWnTxNYCEdB6btryZniAeZNv59WHAENiXa6JsqSzsjioWTCbrEgwDh99rWYWkBLBVowZjVwWQovCueNwk9UK6",
  "key2": "3JoVcHYhnDkTKZMCJwv3hSDjcz9eH9dF5wE62tEBd5GWKgUdM1Gv47QS8pBuUHyXdrBeGfU54JQAkTrhJbPZqSvT",
  "key3": "3fGvX9g2CLGST7Z3qKVL4R6tjD6RAgYWdYSwGEprg6KULw7U6qMrKF5xfuYu5ABAF7tUvVUapE9qHiFNyQjZo4qc",
  "key4": "3fxudpCAeT6VkKgWJS9nGw1dGEN92212Q7DbSMPZZgaPMWWs2qjz2GEHxvcX3ERkyThd42LQp2ZcdeauDuHna4m9",
  "key5": "5Jun42xTJuPyQ25Ff4dcrqaNHg2DxXTFWJx81rimER1NEJoceGcE9LMdQ2USaSxVP5i6XdcHNf4W6fmnRW1tw5iS",
  "key6": "nNJHNqheUfWVBVy4jfktJjRT3L4vCUPUARHuUAUYhQG4WB8TmsoNNjnrLuGTwQmcYaUTymxJ3MZGuYBiZfLMZj5",
  "key7": "3FPZWRnAFAQ46VCRZAcQazKi2ku8oh3BXHgbQy1qUDEYvj5BTRwsDGjMj4aCG8h2AqJuVSUaqJu1r4VTCobH6duz",
  "key8": "cZg74civpXQazwnYyGJJPDb68Mv8iZ1tWdmtGQ6ummZrJzU7xhCismi2rk2a5KfuQzSuaui3i7ut264o7iZqbiX",
  "key9": "61jW8uQdAXmDp5JFpPgfynTS1kEKMAman7RyPAMRCuBAU3MB7igvWR9peZLAC7x8xYTZdDFJKg1hMLHXRvvMcvtp",
  "key10": "3SWJkM8wQuYKDKT2c2e6uGTWmiTaELRFPQb16UMD7ztDawBmHvHoSYTMB6eu62TRCqcZSjx4CN51DyzmPoqz7Man",
  "key11": "5UVwiH7Q6T5EQDwSCYvK4kU3uxCt4ebqhStQDZUBiuLK4dW1BrExz3y1ypSnRQKBLtxMJcyHgRMm6v7dsrkaDmwX",
  "key12": "4rSWmKVBZtSGA5EcC949UhX5NujUKUd21UTqWDkmzyvejuCGpSDMgyzuV3MTkbSuLscnYeCXu44CN94qV8BoUsLj",
  "key13": "3TrXgWH9sBhWVhjbx8z9RfohhAgDQ7V24mvo4aqicCp1yt8KJgczZ1FqvaSpCq56uc4LgGQaD7A8uinH6xNByz7K",
  "key14": "3CvsxKx1fC4FM22aZ9A5xtmkYbNEDmvurkjULxCtKn6cE6T7wVL6T4irVGoRWutBUqvaTgdWE5dVvM5Us2rw2Zzn",
  "key15": "6yFypFqkQZLGS3FN7aZsapHq2MTFGToAYnS9QFBBsMjCThkjXHEKwXo9Y39oDzSbaCgAoN5FDrKdKHc7MNGoziD",
  "key16": "3PBAZKjhKDnX151oonBpQwDproqXnkYhX2f5TQtGzjqngBSCoYpGcsvtuUNz4doaFBpsyVGLuYcEs7BGviK1Gs5h",
  "key17": "3DFGMGVt4wfMCEPxacQM8GxEpEFJS64EYmCJD51xEAB7vm4Vj8DqzdbsL4W5QYCkStXE3byDVqss74pQpiDTsmxZ",
  "key18": "hBqsPUoDoELmE4vU5FSW5EAeRg8Q1XmnsLLzYLJSKCyVFnBZJMjbWk9qgDi9PbFtdmtSTMbNq9dsjQCMxK7Ye1Y",
  "key19": "4dtLWprfdhsrDFPQE2hxoWxB6zDnsR975BotGoRqTp2PQv7WyPW4ZmC3TspJ6MHrezdyJAC2iUB5jFhcVe2Nyv6y",
  "key20": "2aV25bo6HHceiXXNr6q4QRZw979uBGyyF5wphZe3Dc5hL2LhuWBX2gB28bG9ksnVDzzYzWRnfJtV7FAPrrEi4pDQ",
  "key21": "128ohuHh8pEVGrUEtP7MNi7yziqKo8zeMABomqBz9E539TyAKEYbujXd41opxtntbfjyLhdCwdbNrVx8jyCwjQZz",
  "key22": "4ih9G9u2V7xLGwd28hcME1rqseNCJd6tBodnGJsxiRfT6mP7LxgnjLGDen8TbyFLD46jx1sqZo32YMTfLHsszKNX",
  "key23": "5fY2sWcCJzsWUcNUFU4iDky8k2EC6d8nLEa6YDatNopkRLuJq4Msic9XXibevqwHbXF5iFqo93KM4zHKamepGzG2",
  "key24": "23b1Rx6fHYJSUQkVKht8KUwHbi6wsnYqmMUqNzaLPx1GZyPX4hrnRtbmvqHL9z3k6SHofosVGYZmpcqo5pi1jTiv",
  "key25": "pBFrQ4GMjNFWVmqGe5v5CHBnrDq6fMh481Mf4JudyrhCD5cFpaYFYKkAvuRat74vcB5w6YCs6jgZ4KtnJEkjkPD",
  "key26": "3oF1YTmnBVgsXHr9Mevz5YAC6W3BUGvDZTjuCVLA7qSErHqF6k36rRBHTWAQpXtFZfS5ReN8Bysis7TDH1eWgXig",
  "key27": "cGKrziuFngV2rmUfKk4DkcE4EHypFgzWHESpAg3jS9H8F3kzmBPNUSmNzbWEeALQx8koFEdyY8R5CV8iuRQJKCJ",
  "key28": "3SUHRKvPKFQdyHuT1QGCm4PjrVdEi5rQn1yYx1avYnvXvntYBLXxXGRF7towZxYKmg6UdXfcsoUqL8CJdsbq7K6Q",
  "key29": "2SNGU6sqi6NsTRQuFPCT7pRTURdD86ZX5dpZtjA615kSYeHYpjAL6XaTTTHMAWWt6gcWZLq4N4DBBLhDP5PxZ2zK",
  "key30": "38UVXjp9bJqWhu3jTGE84B2Gps2r6EkSdXdxQg1MpgDXxudR2JMGDmH7cuKc2dhq6ydQCvDqJYbQ4QiYxAf6ikWC",
  "key31": "3nrXzt1d412mefaZhCpxhTpu68a7UXzbkbKW8p4kW2KHWNPa3vo22ECXbVmKjkjpCc4u1SDSmaABaRLpXcaG1sTD",
  "key32": "4pBpMmdXvC9j5e99z83CkZdyS16Br2NCyCZX4XRVww1Zs1T3UvSKHAHHG9CJ2L1Rh89YUuU8w9FzAUTT1CSooMJ7",
  "key33": "5hgXxopqGa2EkJoy6Tg5ynsrQrncTFnKu8aP6syMvD8NnEnXSR96mBEMGkScie4UbjrbAM4xZychR1kbJGhFcUD9"
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
