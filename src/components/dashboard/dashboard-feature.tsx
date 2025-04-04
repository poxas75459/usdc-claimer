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
    "2Sv56AU1xMBXNjWfhGfzatY3M14DUNHstDPqnw53QhmPn6oj6VmwZrhjnMAw3yiHpCEn9a1hD3FgGtSfGpECriK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VkHnsc1Cmnv1cYFNFvHcK85o69EUaKqPQP2hHymKSq3ZMsPMaMGB2eYz8U4zwAKj91B32Wcocu9a5iLV5qF9vyJ",
  "key1": "3fk4iPnnhbbf5tgFhQctxyvMPgbBr7iuqbmKwKxrVGSVGdktFi5E98hEb1heAknnXwADw8LX4Gya2S2TYsaGGPqM",
  "key2": "2YLsVwEnGkMpeKfyKan5zqYhxJd2LsH65d2LHybSNZYD3vz1sgqh1dSFXFwB7dbxVEbvuAyKER1jsomWJNwoTm9q",
  "key3": "g5iDLSeQcSbHCrHy76ekwysp4AsdFGpHVxwPs2E3W6pe9ZWWAFr2Zd2H84n1cxswLaUM2XozE3qofAKV6MhjLpN",
  "key4": "4jrqSoiNCk9pQMRHP4ECP64ksrpChM1BQ4HxKtRXFkbRYLFqQxThUDkbSPBiHSxMU3UUQ96d2AXr4VPYwCkBvDea",
  "key5": "4cs5WeF7UVcSqVJLrrkqaxir7ohqDLeCzbX38NBQ2rBhxbuCaNaKQbNj1BovUApRfEKXU8mvDtm57u3snkPXTLsB",
  "key6": "24GVvJwPHMGro6cgxYcxEUogxhFQjgxTKqAEmr8g4HQ3jFyLdrtDGkYR56PM9oEUy1fM4CBpZe3DoHNip4w97ajQ",
  "key7": "bL1bssmNA4XkV5dMoPPGKSovuVPM5kfTYjJ9PgZmm39z55zfEZjjdQyfTVfo361jT8kJVERsFN4rFvF7BtFRpgn",
  "key8": "4om7cPw7TPaTyyGEbj4AjtbL3UFt5iaTwf6emf91BhyTKydFiNnkEgfhhhDiPxo8RDZNZdBYwF5mmajW1FJyRBUV",
  "key9": "RFZCTWogQg8prrR3HbdygfLNiNRLcSpgoidjQziWkjBTJTTQB3C4eKqBHdGE7QwWwX4T9SgLSzX7QDvXUVBLDrp",
  "key10": "4EqD3SwV4NSrc1HCjod7aX6AiyLSMvzRovctU14Mwb9Lz5Xie4zdmgPfcVDjFU4MGugJCp2t43838k6Cy3XJRb9E",
  "key11": "38vtbT9aF4XpfUa2LLTYotLxVLbHnhrCLUnYnPRxzCx2pBe4Yd1YdxHjC4nEbrv58ahJkRkfGEBw457kBJ8gFcgB",
  "key12": "27FdgJKqo3ANvJyS7YZzuU73vhxkP7Q1jdRn5hLjXUh7J3Xb4jM9fgNwmz1LzMbgE5yqW8wM7i4FFhwnJQmy91N4",
  "key13": "4xrG9pqQCc4GTb7Dx27eRBe4tx5qnMjBdmG4JMJba7eErueGtrwSQnLAU99EmYp697ptgt64Hj97LrCNcbqcM4Jm",
  "key14": "5kGv9Q7hQ8YB8XXYnBMreJbSGP1jhnRieDyFfYUm71ovSrEXAvAiiwB4YUx6YLEerfRyjug9gWJYNhTAtPjFz34m",
  "key15": "JKm8rbKeZoE1wXDAivpQbaAtuUa7TiYYFb2NbdVXz6TGTKCmEMHtbmFM2RpEcG7bdxHeX5fxis4PnkMBgxW9Hxs",
  "key16": "q6MFf4hcPNztH34WvZbcXtbcKHEaaPR1Aeay4v85RYeEbkB4saSEteqn5Wm8t7ETZYfX6PsCooRkrApBoox3DCx",
  "key17": "2BYR7qLPjEk81uT7HyyPd91cmcc4ghfkjPz6eEL6n7V5oKixoedU9Koz5D56gaSCBAc6AtotmAP2ySCJ23hukstE",
  "key18": "5at4SB7x5waZznjcwRHNY46K7ssN6ZVg8iwkyVGtBoPfRNeg7seedE3hiuxjsSGQBnXWTGkr7P2X3PdsB4cCYgUL",
  "key19": "2CHkxKQvsLHhj5XCgtiu6gyLziSRFViEZUaeaGV4KWhjnShdrQDRja5dXAcSqvbQvUyrFfZwHTCs2ZucBY9bFa9n",
  "key20": "5UHXoAu6X39v1nyRbWwHTYMENnb83uDuFvPwBjaU4GBde4L8usqA7FxtxmBJgZRCednmGpoLUDcxejNcV3MYnH1k",
  "key21": "YyegHBNk2vHBMBy9Vz9RiuMjY4Koh9oxDXVkJKjHW6pW9wNJcfwVnFGj8Gr4SW4TJHRXi1BjH7dQLX1bA2rqCB5",
  "key22": "3bJT4wN7pVAKRxXZB9TtcwfFpuLJ9CaYqChPd38XhrEh572rKHXRh6uKsASWDLAttZnR7ZUF9krQRmVaENwjLHJQ",
  "key23": "2DRHYsCh5cjVfCQ37MormNRCueigJYSNGndT2gsNreSKFQToi8esjwgp9B7bYjsTPQG7KNhQV1Lc7a6urpMWLE3D",
  "key24": "BnqRkAhppRzYGvygqc3wkzKiT5hdpMpnN4NRwW8Vc7YQaLqePVJTknFkivH58HoEK4YJAncgL7qStMNW9JR16MA",
  "key25": "2QehqPp992V4G68NirncZCyXbQpos1RGBcdEAwWL2CX29SNnTCxR8gQRxVcxUgEPTea4VhSp4gVq31U1F7ZfwHvn",
  "key26": "4KJAuEzLHHtj8iRpesAeL3kuQHw7U3nBxM5wWrGGoZ4T8Dnxvg8AruVBRxAVffggesSeRraesv5EUuumN8ZJSmgs",
  "key27": "2TC83NEc9EJCyYSJyMK8PF18bqH7DP9eBcoWc2iePhKQzu82yba2egj2SwxmTbErdWtJhAaU288iT17Me9Hdceu3",
  "key28": "5awx968opqUpauFYr6xBLNy7GuWcqEx85XNoFsPhSh9L42by9X867pyo8VVGrSpSFz1jbEF3K4D7o9acHvHb7xQc",
  "key29": "2qB9KSmqmv13jj9VHkovwGgmTnipHFEyhgyiNyKaMakwskCpUwq6oDux6A8CVNBRt18CWFjEyq6BWd2Nggq8ZmwL"
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
