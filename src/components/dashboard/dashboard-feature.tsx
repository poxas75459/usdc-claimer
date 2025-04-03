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
    "3UctuS8How1BUHfZiWvThUAfWKmfZ9gErht5KfURe1C2pHW45mWhbBhapnvFRi8tMEhGpdToZodJx3gRYQXymFGZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aiVFyRScWj7M18W7gQaoAesSFrReCu3QrDAoJAa4agnj7ti6QrvWiDS2F72kepbEkVKaAaTAHBoEoiyBajbeCmY",
  "key1": "4LWt2YBqJBKb48HwN56tGBFATz11MXW7uXbPvj4pdbFveDBmR1Lp9nDnvcCcBCrEcRqzAnTVto8gXexoAMPhnF7h",
  "key2": "45JGNyVLAmAfDN1W5uY9giwDBW1pKDMPwKEh4G2kvMmG2HpL42g2TTnEfU83szuWUKWnEKBnj5CzXAartQUjPazE",
  "key3": "hR1ezTpCKC1H7Fa1EW2rH8QbaD9McpsDrjY7JHb58r2DkqYkUNmcLQsWx9iRurfnuYpzqV5zMbBULYY81ii7PMg",
  "key4": "4q6Yr3McPzxGLrVCw2myxkjYCE6fiyg8TTRvnxfyB1LaTQs3qQhWweq2sEe5kStHN72C88v8DayznCkaNsXfYwUU",
  "key5": "3zse8kh9eLUYnM7VLHZYNmb69rSZcoGCKjfqoee9ewHsoTzG3pt3KoVXNCWLKxVG2xtxhqjWi9owAitRWLntTbAM",
  "key6": "4R1TkBzEw938DReRLTqEgHXBjjCjFDWQsWUJ6MmaH1UteKZfZbzL3zKWqYGhDCviopLfVavfPV9bD3Rpzo7nK4FD",
  "key7": "2sGT2DFJjgu3CpGNLxZ4HqKR6yjFgyBxdEdnHsQ33szSVXZR2r8q6hA4ha1949TZftHR1mVbU2GHjUHTcKXoW5h9",
  "key8": "4jDPqekewEpZJa76Qbzr7BQ6XvL6XFZa3b6UaLkQkXa4mee4UwK3bkq2wawgfhApDQFUqWaPQjHWrHpszefejSU1",
  "key9": "2QdHGB4tQXTzTdfbzXndyTghFXG2MLfbZ9cGht8FAxz69XE8XRQB49d1wBNAMP42gSgzAWT2DJQ2htzi773zXYtr",
  "key10": "3YECC3nsBYaHfDjfmJBMw9kkr4AhLqL99tqR4XFMvguNwpgwxt6MKmqzEZYVz8vVrrZg9KEmW5mApcYK819Sfny7",
  "key11": "4C4Nw96M4X2dLQovCMWS7KFXcK8anycHn1f4q9HERVxmzA81rtF3c9QdjvFqFHwzBcq7sUzi5zH8faBa5EECxjcb",
  "key12": "2NcCbCWtdy8QM1oZo5RsyznuvxVZQPjCbSh7hftEZ2KvYZnWVLKgooPs2c9UzfcAGRVjU5sstzb2vNZGwN4yNzPM",
  "key13": "4AtYcf6q5sJyduzsmshS8jJnKhqMbE9JNstSxsWFRENk6TGtDQY7vAchPBpe1zJgxzujPKnyBdUdyZ6yfvj7qBYN",
  "key14": "3hwNwUX3D6Cx6GMyqVHCbGni99hPLmNsqByrhj2SPeychVjYz7bRWPooWFViEE17CsjvftrDVt1LbivK7u6ovGJW",
  "key15": "5dXEzWWZbaXWeuvWjiuv1f1VhRPhfHM6uVrjpw7nhpxwBoFYpWYsoaD53AKYrBmmpBCCTXEUwJ2oDQAzimvoxdny",
  "key16": "45sPyvXwbBq8nogxw3f1cjPetNf2zZ9DqHZvjZ4v1A5RTB1Tosbo4buoEK2trxqKxHbdmSVyxrED5viSYN11LMWa",
  "key17": "36kiFJjY58TCbMWEt2iFfKe6BPAuwWYRMa6weC7jp8KJydbD1QvwAxPtz39Sw2HNmeR2ngE7RpW6VcFdk3EcBwLh",
  "key18": "568KzanHcQYb4A1gBykPfk9FdfveUZ77ktXo43YW6a8RY9g9pJgDQ8CMXe3XzNcLfmJjhgy6Ps1s6CaH3zHpC5bN",
  "key19": "48Pi75Cj5kSmgJmhGh6sN5XLdsyH6qW2LdX7vj8Ha586HSJZp2m7qqHYhJpNCWqrVPeXSKbtEDoTLj2cARnHouem",
  "key20": "39Sk2mfmb2NskntxiDQE7uRkh5UMFgaMRMRHJkRhvedCKeFBS6Cj7eQQw2dTcSfLdnszseGVWTw3qGjEBaMFxWPa",
  "key21": "5zSyKittANH7u4PfqANjEsZmQRzZY4wFhDmt1JBoMBUysrZaVGxdxzjntNnFmrPpqHy5ZyhnnymP3HefUc1wnCou",
  "key22": "2CnEAgHq9z4WEwzYT4naGd1oN1tkyGyLLzwfxhAYEtt8mKSfC3ibNppUjunSBWodBBkq8BGwMXBXh1shXf5vAYXH",
  "key23": "4KNdg4NfbgAu9GhKEDkpdi59i3V3vDLhMPU2kza7qZjYWomdBo9W6BYWBUvhUGiwfXEkj3gZyyxWfuCGuTTaaDhj",
  "key24": "4puc4FSmT4jr6XVLJDypUHRfHyrKVsfYc9ygd7LwcZ5ph8TNrX82t2ehydNW8DHFap785bu6aMy5yj8qwcnmpJkw",
  "key25": "4ozTRrPerWQSj86wcX5iD2DkjYNRt7f8zEdq8EwDgHgsAMGHgyHfJNAwgCD7DSsjgqPdRJwLB2RQw9FFK6pnrch7",
  "key26": "2nF5oLqjATHnRUimZWJv1xSFhwhjt8MDGZWuGDz8AeiSiBHDJUaZif9LA1mdfiZE8kiRN8jpUc6bXbpb3RYWKAtk"
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
