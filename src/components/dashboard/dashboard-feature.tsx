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
    "5F2kwqBV2Rq4ejGipJu8qUzJuTyHvEZR9hXgdQAswKpum6eMFejMdpfd7fJLCJr5MaAFVKEbYq7ti4ECPYhxmqrj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K6vt9tvZNVgP3RpFwPt97mhghBhwCAHNJ1qAmgiQ527NSooE9ZJsJKhMYMS54Y3Qo2TrcfYzVZg82rbeZinE57Y",
  "key1": "2uortV3VEN1YFLPHzkMh3ayFSEQTtWrfNYN9aVcgPmwbhRx4gbr7LsphpUjQ3pPorF9zLrqEEGg4sYZyzo1hfood",
  "key2": "4Q5DZEfgvPy2zzEJUHEuxr2KwqsuKegeLwNCwTVp9JsmmdSN5TRykqbE4UjZwUPPAf1MqhqHsbyfqv97HgRHRjhE",
  "key3": "2EMP1L7VsV2qumh2aMoYLFdK8QhuvaPwpfJE3gXLoy8CXm9aB2FH5qw5NZJpEcfzjCmCMrbgo7fcNWYbaKF9kBKN",
  "key4": "39UaocommUYjE4sEtrSjNWoXFCZieZah9JyHbCfifxGCMckteBsQ2KDLoi2VEnj3t7fs91mwAu4XueFanRVsrCqJ",
  "key5": "4MnjfLt9mvuxDRQJ3GPCrF4sKZGRyTV1nmormonB4sZYJHGKn25NV9mWcbaJgNdUxgVQ3ZzCgBqb6Ry7TKGv4nFc",
  "key6": "4mFNrXgcdqFk2EQahGicgE5noYUzFh395wRyW4niEgdWYuZAzXNpfKzJisWP295BzD5yEReXMnK7J9APtA5an8VU",
  "key7": "ZPUbsVsRNU4emUJjN2tCuzfdiNRSWJro8DrR7oXva717vAQme1YKJ6QgpoCvM8haLqyho2n7Z2UmDGtZ3zkqkNC",
  "key8": "3L8t7dPb1hLELT4zN7iEtwxzvJWQhrHC9A4ZQExNDvxVddus6qySV7RuXkGnymwkUwkhKJg3bcZdur2YkpSBymWh",
  "key9": "5ugdbJseTgYM9G4CuN5CsCd4Me8hfuwVFycXoM5VJ4tYGAXepXmZS1iGuHNxXqAKjauQNfCFeRLjqJSCqX8q3iPA",
  "key10": "4YPNWaRmbv1BhAj44joJKj85zAnigcKptJ3KaRkTfEU7MM8FiQdDq19NexcAJRMTGVdBQNoVAD5esYQggtjpxZKW",
  "key11": "CvbhcZgnoc2Z6uy7VNmGHoj7aUJAouYSt9qKix2cEEjizsU5pXKFaovZgWTMut4cjhzXJKXdSLi1CHjtmEY8UTN",
  "key12": "24pRLi17gQiZ6H17MusC1VdeQ2wzpyPgcRcEF6GUMVfVUvUNYyEor8RbweoxXyhYRWjziH8944gVyisSpGgzt76b",
  "key13": "4mbDZAgoWbrpGnfVCqn3GWrUN2dmYdpBdmpCdn6k6QxvpiA3ZRaHLaYbQt2xX7ayeZGvNjp9UZeVjLBMf8djeFq",
  "key14": "u1WRRMFaxCACsm9GG3yMxCPeHEZT6NMeLfLJfBR7MTDepEHTbEZvgFTKeCGWoQfnpt1F93aSJRXLCybaZMEsV92",
  "key15": "4sq44qmjhuoEvhi7wR43z7vCTLR1dGseeyb8yMFYmrMwkVp76sdFauZHV2y7B1rpFmAWiYiyTTCK6d8PSRNEWTct",
  "key16": "4Hgmv7zHgHeJhwpVYANy2oGQseDaYksGHEXpC8fQ372UQZELJTtftDDeJ3Boja6H9y7MbwBvvuV5jJRoW4tS9pZx",
  "key17": "2du1pEcKoi3uw3bc3hdiD4CE2hWYYwvEAXoZC4ny6yfzpVKn9aSXFQfNJ44BkWBTp2zDPjeUMMrHBzQNG3nbqLQT",
  "key18": "99VNN9ijWvagF5zxBRswCr9xwPHWfMNdPPA3J8YW7W8vKNbQb9x3dNRV3kKRQfLMdDQBZiuTh9LvUvoBkGQpiu6",
  "key19": "FM3r5vgRm1LS1GQXyGf17ExdyV3acWXKtPgZUQBpoAvbKDzEw67c8exLmaPmMbnL8UaJjxdUJdecAQMV5ivkboG",
  "key20": "5kqA9TDXvj4hsr1DAiXgdYom65fo9n9PvzCUAaNaWhoGQS7tWqYGEdpnnwjy4QaeJCkrPvG3rCqokU34hid1K37b",
  "key21": "4dTPUDj4X66RhonSFgmuTpwJbzAon48F7fzvGVBXCjs4VMdC2Qvu2goXLkkmnytksq2dJovEZNb8ExaQtpnVP2uz",
  "key22": "ZNq8HUTXYtafqE6Q8hfNZx5HYodP8ZmVXWN6pZMM475vdicHtTeLYENhHApsCCQ5VULnPzzNSk4Lx5gu2AWKUoK",
  "key23": "3j4Z8m1o7rBfERWoU7GbNJABZbgWpvRdYNaaGCB6XwEjsDeuSdFD2tushFx6w3hmw6ZRUpKv1B4BsL1oLivksPDE",
  "key24": "3Lq5gw4FZ5Xs1jwvbyg9xrsVkZ1Cj4tz6ePpFWUSBxJF62E8dwaqeK7UZrGJXMeQKsVZZPZ8MszK1qpDh542DqH9",
  "key25": "5M2dPy8CwZesSgyvHHs8zFXnzVqqen2KPJiRTX3m6GJMzvtaQf1DymUUAHqNHrQrC1S7qMyzeaNWgRQgPn6pAkzK",
  "key26": "2pj1qBtxdLnBgA2tzt3Dmrh7QvkjCBD4q2YMuqurf76iR31tmpwhg17czfjYKnidMjhudTk4sUQpaeBWRjmwVe2z",
  "key27": "5aesrSuw8RaA7YkKmNoBjecDT6YWUk1Jx2NAKffc7WSpgZdLSw4WbG1fmJFgvjfx848U1JV3dUpE6gpHAhanPWdj",
  "key28": "4jQYpiGZvcGrjTr6ZxZ3qdfeToHxPCrB7pU792yXPARRZMYL8PmCaGyMcxQCHzmYWvzhjCa3fnhTbNytG9aszm9N",
  "key29": "43Psppo6NxtuwRMEAVctoajPdTsPqKjLty2dxsVmoR6Ts3XjWGKJDf75GrQ5rHGXNi9Zsvb7ELKUWAA8qkbATmr6",
  "key30": "2dBGPmHss9UgspaE9hNbBDywQAZMhKwNqwaJ9zuu3anK1K64VQMb7dwJnRXbaVEizgQojkueXbzq4gkAuqYYUEGD",
  "key31": "ni5nKrnV7qDCBLDdS85sy12oBeJa3yBfGGXratBnaDjgSm1q1fu2oeFCZDQEiYSf8qX3Ejv71i6kT7hLB1UbCgP"
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
