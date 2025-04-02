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
    "3bejpu5qhu1bjCfEbpQsdCYVdgk6t9Z2AFT6nhXQGaPVKyA4U9chLdScUy9ZhXZXH8652ZmW8mNxisbSXrDQNYvR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wx2tUhRuZEdQjrXKHxCvobPf44QkPJ97GeeWaaiZhn5q3bMAYJrXDTW12R1PAuMRj5H7pKjL3UecV4Qh4XKBQAN",
  "key1": "2fT6ZNU8HV9vZvX4XqUpwUbBWi8XJ4toAJR3zJDvMGmPKssmRQ8zkr5GYKjVebBKh3RNjqhWehXcj1fmXaX8ayFP",
  "key2": "2DFxtRJ3aJovh9JjG6N9BoDiTE8e2bHZ9YzeCrHyoKmnQvh8vvGFMXQgYSSRb6WahUK7jm7uHqKpEH5FCWyvkFjm",
  "key3": "2PEaDQpekUgUCr2oyquPMNZKj1UaHRcjAtEcdaaaAfbLGGs7qryEUCGrbekLmSH3P7dJnZ3i7AR36jfbE87BVL9R",
  "key4": "4Ej6ywPoyvxGwhJryT6xAaFtRWrUdZVpjRuK5jsw9xfqssxdj2bwDJ7M1KdcYx3xycjUKQr7FPLhorpEN67mpCt3",
  "key5": "3XiiUtv8nN6GewLd9wBjeJzUpARiZzMkFrpZkzpSQ2iTVqJ8UmbqHYDMo7tGAx1nyrz1vLr6ErEDCcdMGhdzrx4D",
  "key6": "5G7aMe3goXpce3o9YSWY7qCgPnwqjCQr5gAkRvdRfiQb55evQ2iQp6jnPuE5pJuuRF48B7PmaGVEvKvovZMgiHn2",
  "key7": "5nm1AG25qcBzMY3XUDKLVNhVta119mBBaokPyBetXvAHrUM7kHDRVUiq1qFhdtYHYm1eGZ2etUCCuZeoA2AmgyEY",
  "key8": "4hHmzNsxaKWqH5mFaSEzdz4B4WBEoHjGuVMwrNmW138Nm51evmzZUWQKPNxZTmdw655vLtTmdkx8vC6NcmqgB5XJ",
  "key9": "4BAvg1SMwvF9NfVKshZdzQfkUgNi9rQdVTiJUSDm5zzyesVnZe5fMiwT8R46gEsb5K2MrVcEKpAdqfB7kbPtKGRU",
  "key10": "4fN7MFs1ZVPU2QDEiEZesAF93YUtQg8xtYJheGpjCLKEkEhX19R316VXBob8T6AxhShpC34JYKTQZ8p8Uaz6yBJX",
  "key11": "5NffqamEgYtvuxAS7d6i6mVvUx8Cd4Li4GK959a85zRuDFxJ254q4GJfazCUVZqK51SygrarKFHj9jcaRbLnNfXo",
  "key12": "4Y2DS9AuF7G7VTHnBAF3VNtdsC5GKUAF7ndjnHSszvYjnikXnqA8gkgVRnhZ5w12RcaLuGbK8aTvmUTsCss3Qdhc",
  "key13": "2yuyLBRiZVB6Xjq7qbDaQKQx8gBkHC4s3rDhduuXtUGM4u6aZV9ZtXvFqP6y3BahrEVMYsdo8GwQ6WRKxps16Sgb",
  "key14": "3mqbCRvXzAqLzWnwYV6EajvpiCDjHZ5XWy72C3qcMUxNZXBBwbycNL8MBuBwusZbPNqUQAYYNam2g4CSzTbmY57r",
  "key15": "4d44aLAUQ9QVFGYmZi3rcb3M1L8HCCqhi8yZ5JQf6Q4iuP2Eq91xNXbwQHnQXv1driDEwuxZSaTFT5wjs3gEwRwP",
  "key16": "4rBmWW6TgowhgiQ3Y6tejBpcfFMbT1woj4kgVCKd5yVUwHs3evyZLK5RuqhXNNyqUpEqfgeGnvyTieiyEBGKTsuN",
  "key17": "4zQsZmNeNdDC9RhXR6pnNSnfjAZ5tciVAezm7e1wjZ7Nj2LoyfNW3kB8J1xWzr6wWpGTKDTS6Kms4pPYntGQfpgE",
  "key18": "2cXBgU6fYT42Yf2mtnp8KbUV9rE8N7i6ALnqKhqnYUmdJmxJdXsAXMG96ScSJ6kFFeB8B7jidJR9uTPEmeFVqGwi",
  "key19": "rh1NT3yCG1XbGrT7Jve27GUefYbQFNPbmFUCB4XZ7FnYVzP7nxqNwxahSeXPg4qtqT2sQtguYZubgjL3tLWA3V6",
  "key20": "5kYrvyhqv1Ld84ZStPxaZZAgkHbfauYLUGZ5TpxhQkwDgZqTxdqNU7pfTGgWmhc5QpwTQSh1ivXRY5A7ZTzuwrff",
  "key21": "rgQWeaqFDvUvCMwebXhz6S2Rsmf6j3gkruNGGAKRBEufNdFU8sCBwLTWBj1dF2hECexz6BUKKBQmwQZ7PedE2uo",
  "key22": "35CjewkpAg3PMJ627mYEcBphfgYf4qKEjBxTQtW1upqsUKapejCok3ffUw4jqAMMLrjkSSwggdNDRwBiKiMiAU9D",
  "key23": "kgx5FR1cq4yCEgwgWVktsELnfjNhpqSHG6ReexhwBP2hX3sKxLCFKmT13wmfsz1hgk3kus3DhnxuDoMaoJVkyq9",
  "key24": "2HQvmgYMfzgXD2JW5T2fkmmLAdaUfJBiS4V6aMQ9xFSkiWfSXgsZvAdfWRBbhd59wNDVrc4t9xnoCsQ5J6SKZjhA",
  "key25": "8iHB5YiP4iTEawMxkDKAPM9eqdaGib3z4DBhtQvQpGdE1uHop1yAiRiZRh6zrjyyaaMtxSZz1FfVEPyZnhKVCBd"
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
