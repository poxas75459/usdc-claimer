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
    "2p8KB8kLgo2uya8ZbM2CDUUtaxcM8AXKtK14wrJ7xwVyytL8ZY2SkvNutBidLkRi3x3orHiC4JmgXPG1P1W6bNPi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67hXPR9dCezfoEUJfhLrHH8uDqazE29WtUB8vJxopzHC5k1keGFQDyVV7fxzma3XJL5Wy63W9okuSzVRdQHa5Qns",
  "key1": "54gMjh9mAWGTdJ9ceTiDewENMqEEkPCa6v7CiS8jBrSksyhck9wt3NFaTqaHGXpWvdT3cDzUHar3m9btguVHW6SP",
  "key2": "DdLykDYpQYvEpt7pnSWFEuxqmcDo2HjeiUmbhnpuKsGTfYKusgHzP2gtisBcZ6bYAU9qzKh9opGBM92y93ytujv",
  "key3": "2fWuMd8drUp49osrwkxCpGAgeo1frmiSPBcvXzJRT99MSczwxeS7QUZfxtXjwCaQfGWkPTsgpWs53vJKQw2qfc9g",
  "key4": "5VX6BJRDPDbQ3NQELmcW8vXpy1mDbSKfKiV3SrDQam9DVKWH67jNgyQ3sAc6NqAFzBawFFesXnj5KweZVxUPMGyk",
  "key5": "5wuGgz6yekAoU1hpqvXHeskvXZWJ4vmsEWKhKy4wpMfNBk3QqRLfJFsmap89sniFXS53Bz35Vj4CNghQGj3mxXgQ",
  "key6": "3AoRPc2LYXtCiX1D35f5GTKxQ9Hvr5ZNTP5YUMfD2zeJ8tF4Scrj9tQavKBeGUjGXRQEx7E6dexqp2mGaxXjnyym",
  "key7": "4avPGyhpMp2ozFN57UfVpmzb7mE4qDr7hR5eR9uTcjyHcbURMKeqJeyVoKpmeJnJbgu1zP2p1izVdUoxAcFchcwF",
  "key8": "5a4bkT6S2r6CjP4a3fBgoXSjpwHxjeZdmmrkptw4Snta2LJ1uswnPdTJShsmNBKSwa1fpA2a7Mu4teTmwKx3FGVn",
  "key9": "2bj9KND7G4BUTvPNp8kW3w86QWpkEtUtpe5HX85fSGWrEqajfR6BLrTJ3xaK7uYYVWZaGvvvR4HqEkfoC1cLKBxD",
  "key10": "5ZjKhqKRso3rBt9vecEPaT4UQWAPzyEJC8KLcDTyehBeBA8HRFWpxwezqkQgXnqvPBQAwYNj6dd4Y2JPQFVD7S29",
  "key11": "5L7DLHW6UXVdxYuSgdvX2rwriPfwGwqL1RNTyjTswxNKbi1SpnEvMbqmVDomG7NXsQRJBGhqJEZ8H1ydcvSgwrCW",
  "key12": "4fWYkmkWPvDkWuec8E2mroxtoFjjTUgTQAZ7mxeaTZf8dXdgUP8rNvb35TWYd8LxagF1HQRp5SFQKkq8GgYX6NBG",
  "key13": "26U99cD38gpoJbN2roaGkevj7TFW2Q7cPtSPCD5Z1c1by8XKhJbMv2Q8pFnmv71zWXMMw4Z6vNE9SpVNnNifCwyr",
  "key14": "4n7RzaN255Wyx1G7YUMMi9u6onmiHcSheu2BABJsbiYLpNWnR7j7XdFx2JJrExQH1s7axTbizBbddhC78vGvshxc",
  "key15": "5e5JTbW7FFqb5MkEtix7GRJpQtYVCPwU5jsiX9MaqHaxWyRZ1yL1up58UMRXdzes82QSMwQ875o21cuiL94weywe",
  "key16": "13RXJeP9Jfqf6tQNhfnjcPRTGo99hMBTB9dtVAGVX8NhgqD2vRi6JhmmvhQzdJTn9V7URqbHwekSqpfUKJfpNTP",
  "key17": "5MEtQM2mnnt3CgX83i52AhXHqbc9HHfwvzjRFp5TaSyEoYxWfXRRAW89hPqP95CipBBXiXzN7cFmPykEtdpqoV7C",
  "key18": "36BKdZFhdP1foxWmb1icsA8ho7GccyCv3hpsdJQbJhuBRw7AZ5V7Q7rmbXhjHSgeb9vFYhQGaJ5bkQrzWu4wJ8d6",
  "key19": "3xfnV1xHxQK1tfLebrAAAeNbb6xpzNTZ5SW5XdNLoUN4C6bBHan5R1BBz3XRyy72dQBZasSJwBbvuqZTJu8VHqcc",
  "key20": "5svnD76GmGD4zKcxNLMQ3oK2oQBqjUabAb6KekWaxNqTQFA9hGBJvhEWejpPb2D8cgopdTyFK4VRcE24SqgsLbcU",
  "key21": "2vXy4wN5uztWYjyiKzMbDz3t7SgqB8akPoAw8fQhf4XEsLahNkYxNMs7F6GuqFHb5bCiANJWrdJYEDfWTQdDuCc5",
  "key22": "51zux5JhWoW8ZgJtSSvEQbt1HfQZXgvTxzj1biLWzFm23rKnT9Viv2Z6UMWXe5hV812y9YCAKET2hAvmYgSZEsBa",
  "key23": "36rDNj2M1ev8TpeACp6u5eQ472zrPdx42C6oqq8C48XyGro5ygFUombc2zkhwxZ75aB5XJsgND62dHjQPepqQBPv",
  "key24": "5iWMQGU5ECAJr524ZsB9Dzy9DFFsw3MTn119Xbsjn6dJD1rdPm238CTNBotpTxw19MJVHmHGTL7hE6iwPsrX9rn1",
  "key25": "5iJSCymhJz7KASZ6ffUHchyV9ZhgN2cyoJwyKzuvQ7rqdg7bqxqVoKhCNeZKCzPnUKG8Y4wGVYCkXiUXnTdHFw8k",
  "key26": "4dz8SXTCTirzvbYd8UoFMzqsTa3Yxu38u8qd8uk6Jt4aHLHiBjiurN3qGDrywpeP4NWkue5uSbrWtSMiQcDcvYKC",
  "key27": "36JZ1YfbaJkLVY168ZWv3iZeB8MRABXoxVvZAvzcspG3LWwf3wwiBz85sEELxaM1mtWybQjm3dTFTGFDtCDDtcPh"
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
