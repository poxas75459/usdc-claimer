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
    "5gii49ZeJ3DxRAcNAGAmhdPbm7CKooECgyfMnz9z3LyhgGhhy8ZxFzvXoZAgALpNwshqbeBdsCTPK3NG1CsVSob1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YnELXJmYXZcaVwMLxjZ7xdH748tP6hzheSD9qGmmY6q8ziyZHBq43zWsv8FjAiK8RxUEVadeAwHJKzqGeKUhQRk",
  "key1": "3xpfLizWp47Ximay8vWHu7rv2Qfnwg3UWg9AHmj61jfTc7hsuvTF2o1Gjkzyz65FJqZfCszNV7w1rX7DcEs8DeHm",
  "key2": "4ok8yGxnYTz5B1sMS84mBTtiV5dW52Py4u5J2tqdhrBcNmzBKzM5nxEgsCkdeK3xdYT6S23LXnZ2HSQWq7jJyKa",
  "key3": "23CGfZtHqrkunzXkREPGVSJ7CF7RejX3aNvuQt6xhLazeUGQbRmGrsJcH43P437aoFvqNstgNbaydcqpFXxDDQhd",
  "key4": "oaN2Pi4mcxBR8Lo7hMne7FsWj4Q91usaUd9Ppq1gygeZAMrCgjNUNUCZRQ92js8fA4swK8nU9HbHwgWnApFozwx",
  "key5": "4rwbaGALwiFSAmcFppZLu7NpG25QGLLFUEJLGK9NTKm9YGYjsvwouBXwkzzkpMD33EysVXyKdn8CXbAHSLzTWZVu",
  "key6": "3VuWo8suNWYqi5VxqnQdDCVg97kqevJQBcc1gnFs5YeBqbQbzE38JAqyajk735czLHpg2FramHcmJfXA8WoNgqoW",
  "key7": "g4akTsVw9ZhSws9DtPFGyGoAhsa1uzQFjkM23TGvD6F2d2YvyHHN3VoiwGW86tAbwQZNnWcimx5mBpAyS8WsB1T",
  "key8": "5ebexTv6rcqcsxm5J4igXGSUybcUD7N3YRihMDN6wPYWcL2jRwtNRQCYTZEt7s43g6PNgFwvP8Tbr8qwoUGyKKQB",
  "key9": "2bYqHdR8jCXoKea5XoNPVU8M2ffUiMTLF8xVkcF4TCjpXeisXHNLWVFsKczM5ZPBUX6eEgo41t3stiPG6zuSZXrc",
  "key10": "3chZTfxxtPNHmC78PdDapzjXsoNko9e6PXiKsKXJ97rjMQd1a8WiyV25iuPFaLJKzJqpWeF3AkyrjFAefHd8kXwM",
  "key11": "4SFNjtGgHCWmtkRxiVBepykiWcFopzVQCCSHyToKQKCwLquav9ebCvh7hvkz956pP54Qc3bpjJJ9w6Ht7xs3tfUx",
  "key12": "2WmPBnmeqapfPzRSyj3U5d7abNW5eec5MCTrAAbPQzWjYwVZYhH9GmqCgXNVTgzXMNziZ3NgSj4tp8af9wqGEFM",
  "key13": "PamRoSaXgVdJLNKn8pLPxT5Qa5PYkEbpSQ5kdC6FgNxLaJPc5JT4dhYXp7KBi6gUqN4yRPnYK8J61e86tovy9ey",
  "key14": "3KGUedHVDvhCM9oBKMapAncZDmgRjUyEydZK6CGNF6vqbEsLKwWC6TTCggcH9qSUuRvkB9EmA65qKqkeGQ6bqQfA",
  "key15": "5rtwpWGXpGLzEX5iX7gWHH9wDPufLnF1akK4KyKgpq2uukHmW6rDB6DFcGFd2x1D1BtK2uWiQqtzdgW6bVXDYwU9",
  "key16": "VR8Zo8RqFxZe7UAw4s4tMRLtXqD3kHX43mYvwrA73vWFq4jDu9qETbXpnfkcUzaCD8vjM3wdzFs9YR68uukhXhP",
  "key17": "3iChiLRrhNyzYtvuRCubAp9DDJeRnnNCfbyH6V8y16dd97N1EZEuahmi7Geg71f1wUq5yqeW5317vjgjh5WV3Az9",
  "key18": "5MmNGsEJ97Kh9RBrgMyWisxcQztpUXtFwLXYAqybSjrEx5Wst8E9Dm5XFBdabB5rmzaneGj88a8rjEBUNeRzkPtX",
  "key19": "2LbSXFqYBJvZPhX6qVi2H4NBUr217LvYkCZjK6yX6AZhXWg6V7cT8rk6rxBfVKLjTkrGrysZsBgfK1wabQD4Xwc2",
  "key20": "3hiL7F86WziYdd2akjivYt8xpDYdkmncENBJfXfjt3BRSjUnX8dV3xsfcFHgJwHC4JRKXVW8dvdAtSM3D4fmDMby",
  "key21": "4PxfmfvYo57oGCD3snsVokkRQvzuD3z1DJeA5NtHuDNhx8C5J5XzJ8N7jRh8vyy9hHTptCWZec9Mykgi3twSAxun",
  "key22": "2YgkttwFDouXabV1UhRdhpwJdEFNgcmuwPNFtDZSDdbHiFqB7wyAGkgEx1MdTS9zYf1HXq5GWv1QLChnXrWxdSNi",
  "key23": "56hTDaHNiPPzHqQrChu2c9KD8jmEFQzc8dkJqdaaJ9QrE1DE8z8U8aRG5d5j7XvPazkC94wLzEqurM8Jzp79P1Kq",
  "key24": "63qP8CP5ztFxme2ZqQXw2i5g4eYxzJED9sWK1MoPuzsKkpNyYEP5Ew34XHve4KYS3YHUy9oBejhht3T94W5Hp1HS",
  "key25": "2mBaur7eTNcQ9QiGUNUqxqj7EDTea8QYf3uZo8NJyVnHzYL16Q6ExLVxcupWgAbApdDebgXtKaoqYLYUdie1KGhB",
  "key26": "5CuXVvd3SxeiK3w3y6Habntv5dcMiruYKFTcanppsxa3Tnua8piMdACciCuJaa8LpZc7JSDmuYNdvxjNDDT7oRT6",
  "key27": "4eueb7wVoVqjXWgMuMMyf2kcVxGR6f5GGBuuawwmwKXBAWho9rfKXUmB6ak9FSS6L5vL2Rk4GLrNNx3crqMa6co8"
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
