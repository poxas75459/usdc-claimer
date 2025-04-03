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
    "32kuUtr63GpoMGzdRF7sJ1oCKyiMzb1hNZpXn6fNxx1MmfspzRwpgzxmJ5ferqV57cHdFeRgMYjqUwZZja5JsFun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MvG73wLPv2yaoQMcAVdgke7SSEmS6RWsDaa8sMK7vQDkfTb5yP8K76BcF1EHqZ873TXxhVvEQKxcNx157ky4tju",
  "key1": "2PY7cjvAKmUxX8d28Jgm26BVoNv8v7nnQRgdczAUNcuuqvHYseZe6V8PC4osqA24BhZtkLttPeLRbMoZcv1uqwMk",
  "key2": "4MkWz3vpXxSt8gYrYuc19T7TcJnRB6eZqPYoVZM7eXgun8Ri5Y7MNzDMz82dkQHMCJKsLf13NdL55c5yaEJSbxcL",
  "key3": "15Riy8btuXS91oEvH36amSLAUWnLgrXtcSYMcJmfK7eKX6vUFByCb7SejX1ggtZSq6pKFCeRrhrTCGYdfSGGnxQ",
  "key4": "4pzbwYP3xoVBGiopab5ihnTAWHfRK4YR9j4q9C7T7jqWCvY7X8m2uerXVx9SRtFyzhxo9GPt7QyFmC7KLpTN1BG1",
  "key5": "2VVXc5EtsUHKq3pxGpC5RsQfu3N4rXJoBBs35hoZRWWngiC4w2rFDvzb668sZbg6xyZ4nTiLTE5CXSt5GDNyqpTC",
  "key6": "xQVFBGxxW7U6KC48Qgc2CpvwGbUbDAqna88Qzbz8YX344sYSvSGSwYzgVLP4FATaczRmx7qDmDDxAqkF9WoJT1m",
  "key7": "5XSY6pKGei6e3b25HX8ZBvbkuBKooqkzB1c6x8uxmzJfzuEhkX6UGdearZHKap3jSThsPygPdKHbp5BWXBqke8vS",
  "key8": "58mc7v9mMq5LQjE63mFYwKojVAAvATWK2RAwAaRo8NGWMrs4i4ZW4oMhngvtX5FjwZ9s4L3xE1HZ89rtT21UfguW",
  "key9": "5iyG7agthay6gRsuS5jWsTrYGgX826iS96W2T2KrLuaZ6bft4iur85EHswDoNeoQRDbaDVxrRbjZkMPRYtpYRsKY",
  "key10": "36SsNzkGKCY1GwWAR1dK4K1mn56pGBdrYxJHeMHkP5iP3t5Ambc5CzH79dPXHVgVKVUdJh1N9o3u4VEgeQphjCWi",
  "key11": "3gmS8N3iqSZ9KRaAW1zSXSqdNFjNW6qRDNvKj3VUswtX3FWayb8Pwvb5UbvJNurd4zG2b6Nm7zWT8QqfEjzryHie",
  "key12": "3BWoKY1RztGVTFLmmxRyhVRnTmEZmAdFxHAhscU73QqH1SxTgTzLjkKxwe3S6nnfwGAUqfQh72qK2KonZwNVYvfv",
  "key13": "2Yzxo2KjMcWNgsusntyUi8yS6X3gRwxZwwJ3Vrs4qsVtTEZiVdQ632DayUs69NLWCeQGKTRPfHczeVCN2xja6Sa7",
  "key14": "3fz45TyBRQpF5RDJTUfTMoYYNyW9dPaQ9BvjXTuV6yAzHGP5k9KZ61poE1FDZi9r27x2aLFBBWzhYrNoAStJ5N8J",
  "key15": "2rCgsesVyqKxWh5YCXf8ZRsoBdgrA7pySKLMxwjG5UjyoKFUXmZ3mhnj2qXwDwXcsUE9J5JeZjAR6FkcqxBnRPjm",
  "key16": "bU6Sb6kv4VoLshCQqNvaTDWVYWKJSRHZpEfdmyPcvycHQBEjz5gFjmngsK86XQsGcwNxT5hQtp2LxQAqAN4AWmM",
  "key17": "5LEDJ6Ma7NZoQhzKN5dgRkneAMtxNavLJuDF885BDR3mrPqwNKR1f5BzsWYuoFEcgEnHyqb2dumF2HHBhjpsTPwb",
  "key18": "3xruV546afrWEjRQERj5138r33iBgQTwdeMsXY8tQv5a62B1mDkS8c1wVRJ8RKznoRGbyBYH6sLstHR1DgNH8GBS",
  "key19": "2vkUahheRAVenZzH3B3agvWgTo83Gmr6EFhvaAHh8h24ZzZ4wEgvwEUYHQCSQWfro55uBcJwqe5TKQpqAmjcerBp",
  "key20": "y41RUurBHEKTHc9bf4mtTL1HouoWmvUhg9VE9Yg1isJqeta1mgqJx3yDx4og3RV1ZcRimYDzmsYAjipqghtMgYM",
  "key21": "4GRq9UxqwpomsqBH1L7tpEGpXWMshR4LrYAR94Hht9nS4yFrraMXBT3XnKeXaw9HnGU7exobvgG9hAjs47V3p7UR",
  "key22": "2w1Uz4iV7c5PUqsHQgd9CbtrDJxRsUJeTrFj4AMQ2g5QTLeLAVvjUPgJ1Tdgearb7CU5dtBXUyRnTrgkhDBifUMM",
  "key23": "5P2Q2WnoCMoJtEQ45jhyiQBnyw7jmJJnHyw5VEyyeE25LXjKf2P41JUV9YPbJFurNJpbo8wFHqcvViGUNChcBrtB",
  "key24": "irADynvhqYQpo8z4PJ9FcfRTxc1PF51sKF97c8gcXj5TSjy8pnDFREmk7bKXtUjHK3yu77KJ4jrvtZH4C8TAZaS",
  "key25": "KMT3SqYPzxgD3Ldb7CAWSrp7UYP7QYnuNCsQNDGZkr8AzG7e85eA7gxAb1RPcMyXWXdgxPrcRGdCEnEbdJvj7Bw",
  "key26": "1mzrvucoLxXLJvgVZ6UJzM6uRVYdJQKriahrn1RwEuNX22C39gQQukst1spnXdSPkVBd9P2TWW9qe3X9hoegu5G",
  "key27": "56MHAupN9aGerR3qNuqfhimiDDdfkQhaH6PSWo9tDcu9LK6UWcCFom9JRXinK7sCAwZ9hWs1auneZHfWAKfLHDQx",
  "key28": "cM9KGt72Rh5EnQs33thHGYp9XDLmUxDLJgc3TWeLHxsGfmPRDXA7aRhVrP6RyMZmpefZqBEvN4rSNfpXjnx33uS",
  "key29": "3SUc7sqh9LEiRfMEa9txV2BQA24P5zFcSkRxZPVTJzycuboFZC2t7H7yp72TXraoScyRNKnaLAUXcVwepFJSJFK2",
  "key30": "2GMmfTGvimPTNf4mn6abxbWBvAdPA3bsJgtMRgxNJ3iCUZcLFNpAjRQ8CVYDgKXJDiyJ9wLh4kEnW8PiD3jxBFEM",
  "key31": "4gFAMGSGJpggcdx9xr8jFhsra3PoYq6isPnuJh6QhMRR9VYnZs2BW4Urcf1CLHMdc4VrK84gyDH4yPrTJyfiMnPb",
  "key32": "4ZnhwaigCA3bRstsHMySYRfYx3mEqcrohaBHWcZ6auqXyuMsL5uEMfczsyEPgM19upFzcHj2VEvb55cYzQXZdSzZ",
  "key33": "2XpZNZW5DSNhWgDRnkubGBWV7A8StUTzH9qMXNdetEqTGv6kn5KGm4M44NCHcDitCtzhD4LXUUuB84sGc4kz9jv8",
  "key34": "r9Ax2AF4TM1N829C2G4y4t8KRH4aRz8koXMgGmhWsvGQKJepZzbuoBvgmuXk3ACfiLVJYCt6GVfKtDbRcFBQkg7"
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
