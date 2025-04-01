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
    "47fvdrj76Fqu8ZRGNFioobygUsqS91SCAqHbDYxszu6XNg4Ej6H4zdY7MTsC8z2DytiF1msqEKjESoonnpfN4ZuC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x5UYYCnGW47BwP6D6rUJPXvMaGNWHwsRvCK5isefp1ZPief7GSd3NckdneJzKTaVREVSi7f3N8h6PDzopWSoNJE",
  "key1": "2c4Zs3YvQsH3D5K4D5fCVYsPMxDMZ6TFBLXF9hnSewp8WDRYNbEjc6HXcSLGjzdmNX7s9NEPqUKtzCBxnrk62EpA",
  "key2": "4VHKzFXbuiMTQQu6oLrHBMQK2SiJAtg9XasqpKEt2ZDY4fAm42Q5sFJU721ojZj2Q4R7fKHBBJD4qbrvU8adciC5",
  "key3": "2PBQ9ysAD7ncPH8GDeTi7yVZrXEniS8AqSJmmx9NntMdBGhvKfpzBWPPZedSwCoRj6JT5cxb6rUYpWLvp8pTvCKA",
  "key4": "5NHC9q7uhAHoRkzqK7z5gt3ndj3ZvAAWPMB2NozohVsFkFAKNf49yJmdaWXJyJBvSDAXpCVAiv1gT2HbtP7rg4qv",
  "key5": "YDjujMkWmNxLr8YixRh22vGb1DgNcUD18X5miqVMuC1odKfwfPgM3rxSJH476Fi5YZ2jXy3tkYd4o9JXFKh44eA",
  "key6": "4uwGQWnV6gRPRoZH9dYWR2BFnPFe4SZoHNqhuAr1xCjbRdHqxN6QLC8ZgDHZo9PgB8DSjfHYacmnkcbmmnETAt9T",
  "key7": "dkgiDG1qnXRJ4SYRJzYwVh7RGzNDWCTQAXBrG6j783m2KdN1bvSexJmtBVfeLjwPBRHpdADpTszvJq8uctPBGYJ",
  "key8": "3Mc6jfDqkrkrzRGaFgxuKphL1iDSfTEKCviWbRGWznC5QLaV8Bko69HQKK8HcLTE8cNwNerLiDcZ3ypzvkVYz1qp",
  "key9": "41TMrduxWj1hsXxkoLk6kju5jQghRW6iMnUroR2QdrEwvPR4d5tb3Yhryax89qtcFZvSpk6UMWupwupVny7abgBu",
  "key10": "186P4M6ehijDX4RQsK3469AcST7qbTvSHGuquMuXjk7dXPqAhCA9vBSepXPDsBQPCD4UcJRmzmZLde4eGtNpdXt",
  "key11": "54jGyVySfxpa9oLHLJDjsmpSGS5njMEfSVBNr8c4cpV4LaVrqVFp24d5ZtoxMj9DRzfRoUZWVyMiMxNv7t5Kqvbb",
  "key12": "2w5ws14L8Hs5F1LGoMft79hHYLKZWptAx3tSfWZ5ixahJWrZiFVJCTJibSMv6P3Xc2ARjLhjPizDdLNiokz9XCJk",
  "key13": "4jQ8UbFgNy5wK3NjSUap9Pr2kLyz6493XBV6Go4pGK7Z8GzRLXBjjZUaqxvuB15Gk1TbPSzRmhCRZUNU5JqN8K5W",
  "key14": "2mUSeb9GDwi1PgQUSf1xGgSkY5qnEUZmpyqMZgUvNGeXJsw64v8yvdMDLckTBpFVBjLpzsDmDFYNk3EhArnqGuAb",
  "key15": "N6LXhL5uN8aDi2mVPmRZEWiz5E5TL6hHbM7mBNTY1Gq1HNdUppf7fEj33uqFDZro7xVrJDsgqqgJAThK8mEnWAf",
  "key16": "Q3PHoedgQdBmec3HPbSuKADKNWzZDjjKrW5rapXeN6LaBoS7F8fLKZoNTgHizssYhnYi6CmvaosTe5DHPZuf1tT",
  "key17": "35H7NUBmA1aGLtv7kn1hfaEc8u4SvfQknUptoBidzJ6Z7ZDb5DpE4eZNXrrZswwCkBUDqHtWKMkwpfPY41P1JMMN",
  "key18": "3uNky2FymjPJ4NbBVYKvVGQqwgqiDcgmxNrYkirCQh64yUTYMq9SbnG7ytAdA4fuPrCmENU5RqkqrtHnrRXdCKsS",
  "key19": "2Ra4iYEWVCKdE2xQ2st9AhH3ydmLoRe4K8A2QtkcKym5LztCcmyYSsJcdDpL31qpnFUD2AfqJYfQ3VYRpwJ1ChnB",
  "key20": "5eS9fsgJKgynbNpnPnL1mkEX2Ptj86qDK8WNJfFhCS9WRyYvp6auj38uZGCCvb824C4BF2HEC1TDMNFkjhJrEtvK",
  "key21": "Knrr5KMYpGSKVTXAznRcHU2Rhw4GDDg3miQx2DoqLoUzcMpdEMa2uiYnnqzdDmdcqToAfFR4NegwkfbppDJHBwP",
  "key22": "3atzv5NXGeQAXc51NBXNtcTVaZsFJ4vWyJ39LApyMfRkFA3FG7HGWV4rrybLLpE9a8h4gtQA92pjW4rpbkLtbt2e",
  "key23": "4UkxjATXqTaW9RGX1t5ephAh1NirPYiVS6Z4Vv8h6CLudDdGCLMNeGQJ8phVWgkzAE8ZFath7DP7mtiC347SUDJ9",
  "key24": "39tbCr4BEAboNQo5mNxxXSL98H5io1JP6qHvpvURV4QWSs6cyLYxu8WFuqnN9cdgNsviqXhjKY4CWCKJ3ur3RB7t",
  "key25": "sUAt42D65jbghpM74PyddriGoUsqiWDo7BMsS9oN5RnQFaNTqDHoeCohCNsMf1nvxWu4qFaiP1rPYHVpmteRWaH",
  "key26": "4z8wfoKaHUqLDLhGziixyK11PEFaGhaCXy7AyXViRYjdfz3KQ3pApoyfbCfwHQ54XzegaVEWUKnN5jo3SGAGw6bi",
  "key27": "gpk8v85gU7DXTLtdikaAkcvjo8wtgz2LfqQv8uoTrV7fnqSdy2ctHdAYLtdXfFKzSMuUfSBrfNxwm1tttdYBV2Z",
  "key28": "4yvvDKB8GhAdJMWCMfGz6nyY6zSTFeszzSUNu5cjfgzk7HEYNMA22BwFe4Y7abnDopLzHE6dS3RB727arsHs8h1v",
  "key29": "4jxrMLYFBcs3PWShxc6X9B44vEkqCaaZWwH2aiWZPUWYSfMahXoMvUmP8DiTHEFspWj6JTiUQgucLTJZD6hQLbyr"
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
