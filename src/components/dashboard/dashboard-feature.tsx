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
    "2wHwjhMCsa5XbbNUv2Ac8pscAAGDHAxbrDy8qcqXP47h8xT57tdAr3e7wcH5A45c5fjEFC9de8JNdSQXHZs64qcs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4akBMdzgHCX1xZtZpH4twL3Q2NHvH3EozXB3w5kDogMyhAeovJphfvSHi9761HZH5ZCdKkxhdXeBv4LCExWMpR5w",
  "key1": "3PVEfKrZpCnMAjSe73sukyCs7Ja9fhcvXSBFjAdRJMZZFgdJCxqAtGLJyQksPgBBHzBZHWsY2LVud8WKHa4Q1ZXU",
  "key2": "5tYfbGfMuurV9VHZMhjST8vp9GhPFffpzeKYJNeCGwQ5GjZ2Ch722aDsV4WUjY7NbewMkN6haTM6kQs8AP9oLnM3",
  "key3": "2WTMWa6bbSfaQXgFqgNAhgwJ6ymYmhw45PupqUu3J3G35AEgdzvaKt47PuTeFFRVHUWeEDbnxxjMqLQ6dohDSKdi",
  "key4": "4MRgxdsDXDBJwxmPVyrdvG1KhSzE1fB9zjt3vM4xrbmBYtjtQzPhHtg2tHj2k6KdoGd9ra5ahzDjfikg5GTbAUHV",
  "key5": "oiuMMbzqziCeLorRXseBmsHhekcQDTaQB8BTUca6grJFuGpKniNkaRyCc1oz7gEa7fo4Hsy1vtmWwFBmFvfMj6m",
  "key6": "5niV3jsvM7YzhTG2Dp2tZmjn38wRrVRzmLbXpqhpKp7drJhkJC5mjXXAM6AX4k4s6YCQBBgEXnfsqQEnZNyKei3h",
  "key7": "336Ja7NexgetrowDNnE9otVNTPeoREKVhoczRc6PkQxLc1nrgFz6a2ZpAzfiz5oegswsuQDrTaumWFuBCFnmKsvq",
  "key8": "64nXFcHWX8fu866jYFJPRMfBKfh4JeqsSRNP7Wa2Co61ddUKNFNskTnuRbBoB5Q3znxbB46BZHrthhMMzDNxKc5n",
  "key9": "3t8bzkd6hEtkmFyTc9LaYwYEw6hW3GWh6Cp2j8bZNU7K2rahso5h6coasPPuzDqXRHpDSX1XvHfvpyAJfXECE1J4",
  "key10": "2PkXhauXKpEr7KMamF31mGEyAVjm2MpsW1fjNzaqscSU9SkZVSWTngNkhmZgwkmAjaUrQBpa9esZ36vyF7prZ7Pa",
  "key11": "5trG3KMb6Fq68GG5tcfHALuXXR8M5jz9fgsJF6fUKvKX71hRBi5WEhvXVVkkh4uPoNTuQGZZRnscjjuubTtHiYBY",
  "key12": "2tPC6XG6J1XeG32AeEzU2MDMnL3TjhD5baEiS4Qta12nm2rWGtFu1f1yQDT8iWUW4yCBGsKVoNMZhkihCPGt4zcw",
  "key13": "4eiCwUKAgyPhMY73gAUE7tmC7BAR1TENhAwtczNxnJfxbWS17SGfydYUSxN4xX5eTHMQuQRnziTQrv8ERP4TQMKL",
  "key14": "647xdRzvv5EU2DQBxAxcZw5reaWrZZuVfDdh8G2PJgc96pZgUYGeDu7QwN8T9HFLNe4YASn1KTx1d51hLoBfWVdL",
  "key15": "2rzZDNWNqhQ9ngYEibWfUH3Gs8DYUbPmckrv2xskRNX7rzyTRfPvcA6iso3b95YA8rFFN2ZD34rBA28dcs2Kqjz8",
  "key16": "3SNk1iZygRryyiXZH1mvdxeu3zeXr5sjrVdGNXEo6mrkA3KX13XCgdGbcC85jdbbCBmm4thgTQgwsaeHz4Wsf3DY",
  "key17": "52ooRnM42ZcWQCt1cgxBe3nrMnzcp6cup4xKP5Az3iWzBLjEC7eBez49smxvBvuZ1vtoe8PWv1FUoYMzNz32mCXK",
  "key18": "4yW2SqwkyDkV5AeAXFmpVhwSbY7GftubKGn7sqgjio43BBGFA1xAc3ZoNt5isrYTnivnfsZeeZU2tRw6TpvN24ea",
  "key19": "3pVwSxgDB28k51VdUBVtaNPdrQk3nky9CmsfEegJQF9fQsSbNAtzf4cy187Ra9jF6R2fpeRWitJDfZ9FLdmnjfk3",
  "key20": "4xUCaT1A7dXq4GhUsXYJTzjxYVkwv2CfgFEJyrLrD7Ei7nKHoRCE8x8PuJpFkUoA9qFJjNmLbCZEEvbPiPq1u3vs",
  "key21": "5NSwTqDkrCcEqVNWeMB6fsn8V5h8Q9s174R2SVhyg2QNfh1JaVXxJVHxGhuDaCZuNpwVGv4nUphhhEeL6GWvALxT",
  "key22": "3UuQk2gaYCrgUGJ9Q3zCtqRKizKKuacKHJ5U3EFG1ub5pNjGnHAPxNKnXddxLuuEjoumrZpW5GUxgixqJvr6reoE",
  "key23": "5nNtKG3ghPsgGbXiVACYBjjSyHYMgmgVTZXU8wgDSaXeu9VvT1BG8uqDbHfAvxFXgCyRGQ4fDdkbZFVzaWX4mQ3h",
  "key24": "4ZjR6DNDffR6LBYqAqP8T127sce3D9hWT7GjEkNr5Br2fPx8fhALVUrYhAJGtfNwRHgygPYviaN8W6uC62DMY5SY",
  "key25": "4ea5FvtBpqBA4tnkLrcYZiCL6nQ4cXEUkgWdn6Zqg4YYeBrfHiwki2ohqPEGWrpzBwpk4aAtwLCgLuaSW4nv3GfD",
  "key26": "5y9PHtGBMpYyH3PktBogJzifbhgkWydHevP6jisUwEETicqywud1AM2niF2vskvkuM7VundFtSeDzC8uA2Ut7z1E",
  "key27": "CXWCUPns1YTMyEXbRrsfjgLXMSyYXpi8bSbGPMgc8tud4zrHUknuUh6xTpnB31J1FqxYxqwSjRToFj4VsuLRr9M",
  "key28": "mP9DvVJtmeDn1LN2pkuWigJr1P4D1NPNJNZR2MB8YXETj8MgwQBbPD7wguN7vQjAkMuZj4N72FGPgH3MstnRhqN",
  "key29": "21XStxbFzJm2SqTdrLeEgSpkKbhpvTqgjhF9mocwgB53aain4tMJvjHJwfMMBL66WaHN5jWEU1donJ1qZaKUVEAn",
  "key30": "f7zCFSt1HEtquBpqvhTiQoCw7d36kbHRqLmuEFGhcdSyQasSPWUmnA7SiuMcm3sLN5dzjd5uNghkskGHsfv7iBo"
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
