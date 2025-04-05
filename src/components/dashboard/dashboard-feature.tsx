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
    "5x4jC3e8XgL5DUug1x85tAGgPFDVNK5WDzdKnAzKBntBSTjmMyqghCH1G5HCoUCAyE4WDWkoCApJRGjV35mLZko7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37KJTGJSCWQwqomMPT1dgBxdDcCGwbUFRgdBCUGh1kHpdnRy9rBoJbKPEaFKXwTJwpKicC13keXMswG8HN8rsx6R",
  "key1": "2t84kGrNLWL9gVr4eaoUEc9GF7FB4AjpwifjXRwS9rY17YvXHN4YDHLkeHEid1n2iR8GAmLLQNdA657Nnuw9Aqgr",
  "key2": "5xbR5C48ERpqZwqirhR5gxLEZV6ddrmaCVzwDHmWvXkKVjcQj3tG89WaTVYeguSRxf1RXEdbuPdm3BSBjnAJRaUi",
  "key3": "4n98bYGrKQTJposFE1iYnPYYEzK6vxHcpgFFddnLjcDfWrb1y5N9bVT3Rh4S1uoEbocHRo3iWJvqWvcXjoSbz7D5",
  "key4": "4CVJ7U1cpm1rpwcZ32CdZqbxbLydP5giDsnd1HAQQWkj3nVCGadbjpnH5FsHwwfVFhihz3t7TCBK7NfghKtyeTMC",
  "key5": "22b6Z2cewpEfjwCUBXhBVMTEHRaMdAYL97ZCUXnTeNdsNw771fKqgNUprdv6mxYcTXmuH9XMtPwDhhrFp3SJQGJQ",
  "key6": "4eGTg1FvZ6e6inGDdiDbj8dyZKU9PvTY9v8qq7JRr6b3HwYcqLb1FPoKuSNqsXDpbib5nrJnVskxwfmCAsNFV87q",
  "key7": "YwR4GRaTSCWZsXiZcoZkS28rFGcyBwUJjFCY9kPqsVE5P9t2TrkdYPVLeCEAQQU8gdD3W8FEkVwwXRdTcsiqfBF",
  "key8": "5QK8VpkS7ohUJDMgdnaqp1wgeQBxKCyyL2ThNsQm39T66PLPombRjmCTgEeUqjNhY3SLSNsTi8UGLr24sYPUeqFr",
  "key9": "4azGcJiEukYTh7qQ3eR6yVks5bpWqy7ZP3kXk6iytgxLQjoBsDPABUT8oKyPgm4Ery98vTBWokr48x9gaB69ebj8",
  "key10": "jaXh69JKNN4yF7uhpVDh7qARk3BCZQXZ2u5uB4awENKKbdFcjdnLPBfWNYza2Ky4Bms4KbCBm8ii4xhmtiEa4iq",
  "key11": "614WQvBT5hzAzSFevNpBVPrqQR3seAwp4XGxnuHsvmpBB5iHK17n4dESxLPVjzvrpYKsppyBXG2qHMN18GWSc8Q1",
  "key12": "a6n6r2mNTZhisS1eNYHtMzZeBhL1Qz6ckwb6XgvfM9sEEWZ5ExViGuhzRCM16D6kAYULUiKjNrjLXJ1piego7oa",
  "key13": "2mNqgn9pZ91kNyCZnvBH1QYX3Ly4DavFdQiRQDRtfBTfV9xDpm3JGzSESeWrMYqHbgcJUgBpNUGo8jm2zL9xe1pr",
  "key14": "3brr65yji2LCGwUrxH68W8m5hhar3u5zdsjtaArdPbHrLxFSLnyxgr7iF76ct71gsvd5WA5xtBfQi37mG5JqfcYf",
  "key15": "4t9bug77BUrfaSpFn57VhDsyBubydCFvUjqfmAgfe5hHnGRtQX7kwzLpVTz4A1MVqbk1YHh1MA47j2EChx16ddDZ",
  "key16": "2oPvhoYuWg59k6Y9zo5Wq86mioBRDRjZLkC65zTKhBUMkC6ubYsain5csz4GU1KmKkYFfyvgDs3xm8nzm4FfbGmy",
  "key17": "2cb5j9bRWx7yP6RrnQy58ZcVMgrvoRURabGWVrGnTRCr7ghaUZjm6z58p7eg7TfpDC9FzKCUB7k1jRockfEhX9X1",
  "key18": "rpKbxN3H97MwLDJgCVX2CSYof9YNqkqpq27RuQPFNrZH1ujLByaUtBs8JFB9eqeEUH6kywsQ91X2RW3uWGPoj3B",
  "key19": "3mukcvd9G7FJ4MRosZiGn8G9ViSNEhU7q4gsb9xgMQ738indH2g5cuXgpEUVxppDoNTEpXoeyirW1rMmsfgNFa1q",
  "key20": "gPmGiRPuAvM7yN29MYQq3j6wtARQZLJNVcJzWuqY8PjEtvDEC6bw1eSNqkLvkWmcvWqrvdCorp34kMteEzFupQh",
  "key21": "4iVMj5ZL4xuBZtJr65qyWR78sBWyYrgV3sG8p7SguqofpmdiVxVGuc8bDYckxAor82rfKVTBcbR4aLqv5R9J2PzM",
  "key22": "U1grvGBuJyaqa6gQDQZGp5JSFBYBr2RjJJdeZtpab4nCGR9qeJShGF7FSCrxvD7mUeaw3G1VEzFKvDE57uacrGb",
  "key23": "4i4MDxwER3pGzLgCiHMf9T6ghK1smb3KUqSmuoShbfULcigV4eB6M8bokVw3HfzLCnMxvn9hzGm5qgfmnxJ7oEno",
  "key24": "5KPFmy89Ze636m7Jogdfx7g7NyirP3d5SoxNkN4ERUzFcZvL34wrPbFWr4M4DBMkwge4bf8JxQUTGr2LKgBiB9ux",
  "key25": "3QsbkuzcyDYUAQomadMqxCGyJs4kANnXgukQU7SzAah9tPy1K1SwBDtez3nhTfe4DqhPEd7m9J8DNxJGdhpBsKoa",
  "key26": "2Z1MeYihoZUd46LejQaFU9DKad7L13pfdEie4xKTfcK81zxp6ybubTEodwKLxQUQWLrhTTSFAshXHWDrgr5svfXU",
  "key27": "32NzkFf9nE553hbqMGRyNykxEQwMz4AgnLrUQycNMVYPwVGCq3P1D9bBxnSQmPdV8B1HyBfmo18HSdatUCsG6GSy",
  "key28": "e1WpkvDJJUV31DaFzrp9w8j4pkqUwkGSPmyTfLMJ2aqzi8vUUvZcjDDWtmUx1gnUHSrJkeSUkCf2diVexzd1D88",
  "key29": "nUnynZTjSteid4hsZa1tkY3Q23X9EVgcSr4QQRLyTryEuHUpM7RjM3iSiFGYdJKmCZFiMLUJ1cBxRxEQg59a1yQ",
  "key30": "37D5CUakU7JYG5Rngps1aaJyfxkNRitWCT9G5VTQH6gBPXMiyXiT7wwPNsvwbnNxoQt7yTYiXA9gUa2nFsswVDTs"
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
