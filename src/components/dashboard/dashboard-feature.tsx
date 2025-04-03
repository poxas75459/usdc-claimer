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
    "5bkxFVBgyFyUjzJChKCbfB8Nw83owttxj2j9F9DAPyAvKTVzXRtATVAWn93CHxmHzPGZ7c5BZdg36kbWT6mK7FYW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YnxPVmz2UgYmGakAxcV9NWgDib7KCpWb4AdXvxHbN5665gFDmuukBzkPog8VRiUc5fba4SZBvhCj8MAJwNKAgp7",
  "key1": "43BQDPpMqWBja2Nh3DQNhUdVcx7FQVa3oQbKFYSdWXqQubguCZoKaMSPrkNxVVoq12wwxAqkA94qn56sKZS1YT9T",
  "key2": "2K7i9qWEYGdKYbCrCJfnh47uagJBLqFEDJ1s5xg25J75Hj2nngDuKe2TWiKXz9ekuAHZcJyHDQV9MZRnPzp2G9dd",
  "key3": "v2DH5wDAmNTxwQAnEbt4AQ9Lb4tR2ugdsr6nNcQZEESUXt79eBSw6WGzz7SnCeAkNXLaXMsML9EZPyw9QLZu8fu",
  "key4": "2orbg5JSjwDhbrxB7Z3ibQReAjdkVCJ9K2ef9CinxiXvs9FkR1pPAh31Ek5JwCHyQhz9SdXi7rr9CcPwEeSzL827",
  "key5": "GwU3aBQSG59WgwzTiNQhA4WUx9ZCpk4EdSaC9cNeyR4Wafw2Q6b9De2zEGrcJpNqxtEy7rPcC8su3JWjL8zh2z3",
  "key6": "4YZMHZmehxLogfVWmt58iA3zgdNS4HmGxfruYJHb1KRyqgQ6J6p18PBxrSMhLzN1T4J3dh38HZEPZHSTqLj4cmwh",
  "key7": "Mr4day9fwXigVzdKZtpo1gw1W8UVxWbENFKW1DXUwp1GiKX6icq3G4BgqZ4QoKDNandJX6LrAMikiKXNySBmYT3",
  "key8": "5SXAjU5bG2Fw8FCsgxJpahG3nQHQ5wTtu53ESY2FSM9cf1zZeTJUkzKg2cY1if1Rr4icAvdhZr1sEWHWB6DUKFtK",
  "key9": "4P3eqHDy82NZB6ePuUVDgPYaaRYpQHYbbDDrCF9bVZqb9YWY2GYpEfpros2Hn7bzxBG9SJv3wg6wYEJ8XhgYiLLJ",
  "key10": "XSRaazvTU8PXF9nwhp6Lqb5wv5CyLsowzryNPdUHZUei2J8MVsHXYGwdGP12nGzzcPxLVdQTNbeRoqXHbo5Yveq",
  "key11": "3X9onGHXWq1Ha8ovb6p6eNA58FwP9kGpt9mpa1gGKYJiPUaTGUJi7e5sLJde4JoAiQrHY3P27JGgVdrDvtUV1fGy",
  "key12": "34eJL9994TijDs6PhuhchdXiqnUZgPKKXq25p6Z1wMit9TeG2KwCzEj88R1rgC1S5pXmRtLF3DRZ8J1sku6Z2FzM",
  "key13": "2cGA2CqZG9rXcXGWtAwfJ5djnF2MTR1ntgXUL5dXFBf2Nt3N4MS1sxRs2LwyKu1dUZw3doay75j6NNMcu4D7BuuB",
  "key14": "4A9M9n55JpKhFqtLmdS6YWM11ohiEkXCNy98KHSyyt54HjR8YnGkacnbd7uwfrZbTS2oJjKDBZEEJcYPEuiPunEJ",
  "key15": "3YPyCQ2tVWLzXMfP72pexPs3ffmZdpx4hmsrmTgeJSGBezrAaGcZAgxkZqvffrAqDkADaQQ7Hgn3yBZN36bfVJCw",
  "key16": "4rquJqBNDnkoyB1b1vSEzeUYY6Mb8CVfVUStFJr9ztyD4dUG62bG4MGMNXLvwZaUJVtAGjQJYbFBoYoZyQFzeLRd",
  "key17": "2mLAzqQ2PttoigHHVzZqQoTJQReMgbktyyYHHWfFZTVEbWxea3U7agqBE7dThTmpCj96kNALbpV3Pt8UiM3hzVde",
  "key18": "2XJu5ayLLAvxnoFFWyDKQRrVLjzNAmitKaaUSZx6ETrabRW6HTcPJAzFLSGhpqbdb6TTrMQXnqBsHnUAwZkzD7rv",
  "key19": "R4yjhfMkNSkE5rLfWbdvYt39mw565tdwJaek48XTJXpKz81gZ7osvDo9xVJZoCUxJ8n8j7Ptcn9YFSEdGLkHbx3",
  "key20": "2dtqTuARhMZ1PX2Udhm86Ved3mJTjYrLoxWoK8VucT5suvh6q3CEp2DwSEghkYhQdZeyfDPnmaQ3xLQX5RFoehas",
  "key21": "c5fTrtd8w5ZbagUh7xGf6rFaVq5M2ZgBKu25EAdJeauUHJa2RT8DcZrwXJJbSBid1JAqeoQfZRF39fcZrp8u6X2",
  "key22": "4VrCMcsL1Gt5zSpL6gmmW7haVf5kk3uWC3Fv8gFaUQrr13LCH7cF4gUFs6RTG1bawFdVEkpeRtqhBLarVE7q3ueZ",
  "key23": "3CPPHyVApm6P9X7wLrp78CnpJbhkAJU63xu6iEj2svg3Efu4BCEGcRkHxbfrEdfFoD6Mvv4Xhb76hCZfLYnUR7QA",
  "key24": "4qcKsTJXjCF6E5KcLugP45RgnZQZinXue6NEJ6yieHeCTTVVUtQUMG7sKzdP1XdAyZpfzbgD5jUpuTszQfGJ2fxG",
  "key25": "5E91wctpkuRReTz6vi9Zp6VnDoxzyEim6wSmPjKTs3ZxUu4aRCFbPYFrzyfFGG22FUDe7hY4Qq2F4psk8WovD5ZU",
  "key26": "5nLR6oMBteF7HSJzgd8nZHGfTX5KY5nMBTEVB9W3Y9vTHMe4X2kpWCfXRi2DJ1BnnB8ERcNEq8H1Pp6XwHNBgjTu",
  "key27": "5PP2iRLk8o7vzcUZXkXhFeAWSZZJLkFCMqzwGRHV9JgNuRsAwCCTVJkCh1ApxhA6oEKqp69ejLfri5vu1uPewsdH",
  "key28": "4Ctjz9kiEcQQeeV6uCuJ52y1Pk7K1qfLk3TKDhQjUEVEcy3qNrFMqNKFt6YaaE5ekr61tbGqGbhiVL9RWTvLXeFF",
  "key29": "5xnyS277mDJKAt7fQo1Q9JimQUXtiH2SPRPozzmnsPTjRodFsjkdSWYcTDwkzbG7kJuDyPAraA7Kwn8fTxDgk7nC",
  "key30": "5QA7ENRC1Z4fT5P64Qnin2NLYUQAeWx8W5rvWU5g8EY4DAsULJJppBhm39HWXLaDp1WLdFcGsdKMzHs49gwgNdy7",
  "key31": "5A4Hwcu5ngXQnQuewGRZBBEvn66sXcSvebT84UWAH7R9yvjgSBT1Qm65E5JtP66y6pDprYb5yqKnV6LEyj9ohvKy",
  "key32": "2TaVQZZarcgAfPcjdTjxnJzMVWRjhGsXtYiEF4yqhn38M9MEYwuHJNS9rqSuSEepEBUbqCGoX1Zz6z4skr5T7G66",
  "key33": "62jSAQoeV2GrkBjPrageuEv7Ab7gHb1yy5NUuBTgMkTnhrqAY8u17NFeEVEttdmDSF1BtTZ3avfAF9YFrhFmL8pN",
  "key34": "3Tb6dbx5iSwtMNxtkvbC2LSjEjas2WSU3yP1Louhskdse5sRSCuN51GtHMF2jMsUWbHGsQq4eqVbc4M2a9fRqPqw",
  "key35": "3ZMoLc4FdPcoFrUyBgZFp6HPqjgyqAK6TvtRCF74pQrqofU6yzHCJqEqAmCNfqDXT67q4J12ekxdD9m5UrSudwGi",
  "key36": "3NaZDB5gMo7vgQu6YURdhFZTAS53SYwc27S4ETyKPFid3GEau1h3FXobsEG3FssjDAajUcMR6rnyvLJze6FiizJM",
  "key37": "5rCUZU9YQFyS9TiQajXjaekVJ6WZ7UfJzoLXiCZg2o4HFhKHXM42Q2kLi2g2oZtp2KdqGJEaV34BiC5C6DFoQ57i",
  "key38": "56TssJd9HuwsnaKdP27tMbEKBr9SKAZSz9WbZQ8qxBLmqBoNkmdh8aVH5brwtiwtDmYhVXD5oxRQdVwmyL2rkaXf"
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
