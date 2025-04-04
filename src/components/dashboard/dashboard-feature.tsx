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
    "4Ho1SBAHXw8NDoWtmvasVmfBxZuecryZYp2J2f8gZSUZ85L6nr2TjfHuyqFEtgiWSaMCzDiF6At8fb5n5c5d8Nnk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vCurQ19ftK85HBYbwPnJfcoMscVEvRjrei4WwhxxqtHqGAkhCgt4KoABAZxQj18cJj1NdkM941iZJ9hvznkuBjs",
  "key1": "5sB7FMHebCZd74nQn2Cz62M3WAV9yuUxNCcx29SjFk62sgsqYDbEmtoD6UTBCntuHocPcJVK5onU8Gn4nr8snviw",
  "key2": "5vGwwggDEaHRj6DndKZz25iP2ADKn4RTH215MLgHUvjnBKCf7mLrUDUCzk7pRzNipyW23AUwzprmLY1Wbar6X9jF",
  "key3": "2bQiW5GqWmtGZXbuwbfZXwp37adwXSpZEf9onRHk7MhfozW4D1pSrt8uCWKuiHU7bXQn3Yir2McBRznRkXswZoHe",
  "key4": "J27m5H2Pxwy48TbnbXFnx1d42icVr9BRgsXSPvPrRsUbGXE7CcMSkH4s3URLyQVENv4WpRkjUm6uh7MhzKTsCDL",
  "key5": "WLk884TXHPwTHqwVwxJHbJMDZQQc9oLvFGXXma6dGrTXdiyVUiBqGAChzbQGtTL9LMiFnEZrdqdayLVxCWnhMtW",
  "key6": "45H8TCSufxsEeHWAqFzr7aWADWKYG2ZBt41qvLdRRQW8xr1nQ6etHxpv3Gkt5jSTxTscFjctYpB5NEJbncNPUoU3",
  "key7": "33od7KEAmyXx1nEejALbQVCJXL5iHtbV86DAUT36PSw9mSHs5qvpLC4GLNk7CwYFQ5nA81YqeqRJ3XC3rzqCDVTd",
  "key8": "37mvUFKUoWfBZUi7RnxohXr5q4Ri9jSCzQBBbShko3BP7CL314YbB2G1a4VTLbu6BTAXcR1cJWAFkcr8iAAEbVJa",
  "key9": "3zDQAv1Jo1EGrNg8b5ZQSCYhGks7Zx9SuWFbY56sp9vh6ENRnEn3paQ4P6DCCsEQEecJ6oXBNNStCiZzEKJkzwKk",
  "key10": "2eJVXMZy77uTyjp8yu89o9WzXDLSscn1aAsE4m47uPmbkrR3ehcUSuuo5zAVKBachTM8rWVFF4gPzxzA3TZ2jPTW",
  "key11": "9foSzoaUZAsxnT6axtPRdYLL3ay3Bru9yECFkqBYcy2rpPULLRE7siYRcCnv2yiVL1RGDi9DKE6dfWsHjv245f5",
  "key12": "3HiwtDMSSCiSc7qQLhqiAf2BsngVmWQcn68em4nxSafA8KcsRsmcnEhZ9jyARfp7BqtL2ZfP1bWpCL5GhZgzG1yz",
  "key13": "2WAigRubzdRy9zUWrszJWJxdL2nbsFGz5KBBYyCT8bgivLgcvxQBrrnuMgzWfKsEcdZZWgvQHBQvysSjx4yQ9PMW",
  "key14": "2gPXqr5CnZM68qM9Rrc8TzrHDqvfbbfLzUQL41MTXzpkhJJJVgPyX8cvZ2iGB9VjyRssq8QaBYuu1GVgs2Pgvohs",
  "key15": "2jyg5H7L1Dtn9EZTSvwSBLetrBC1q96HSBV3AeNYQTMUJmcMWuZ5rC1yKwuJAccbxbsVkUSP9KWm2PG2WR2X2UZY",
  "key16": "5pskjJyE2jHzKLq9BFQ2rsD4D4tDWxsK2ZNuyeHMcfZYpWUhTRa2ddNMCqEYtvqZwtzagNrw6Mt4TrAXgUepbNpr",
  "key17": "5k3oPACJ8dC2zGLe898bLKvT6kKLHK9iuACBeAQHtvbbHGz641R1jmQmLCwksttBaer539ztSnGCnbLUxKuCKcT8",
  "key18": "5KP2V4kERkhV9k2jX4ifeEsgGgqU4ce3okXe9GPcxyLNztf7HuhbXwSgxkXD594VXNjSAMS2yu7R58ovPB7Tqzzs",
  "key19": "GEZv6Wte2tM8unEC8UauWXGHVJ75j1SdaAmbChw9aCVBftHQJ5ZQG3eToZLcWzRtL3YpUCqwanfd3Z7id5rumAf",
  "key20": "5ov7RFL1SJVMBQzaGCHp94ooAfA1cffhLnNh81ntk5zoU3pvz56Ed6vfnrYGypz49C5zeGe7NRJfXWRqpxXG2dLY",
  "key21": "2KsGtSR2VjKdcQYVUwRvxigtPK3n5nALmeYMWXUkK3eqTFgwzPBExEHYdSCUYUJv2TEw2WdiW3bKbvBDntaCLknG",
  "key22": "2mjNzjgm7LZjJ3UYjhjtPmUetTSN3crU8zeA1RQoP9xC59ZdyEKuXfNydesjdAxrmrqpi9XvSrDuBqetCtqfCH1W",
  "key23": "2zpWHjU7ESkEs1N9Mom8sgmDert7hAe5KN52SFRZT2xePrbu3ZXqe6BDKkLsU5Cn84DkqKTZUiHMuxZsS9SGcHTF",
  "key24": "7yMPMNp9XZV9czduW8wUz9TqhJL76RoPRw32ZKD3tQAXVN3d5bXcNuq25xSD8Dc92h2dxcqSeYD9Fdxqgf2ivo4",
  "key25": "3WZsUjagHX1ivWg5h9d3iJhspsAtXMobUDruT2ZJg8qZntvvfxqXNuUEUswtQVYRBRcChhGzkPaQ76i3V1g4k7x4",
  "key26": "4ZgNM7FxYnm4cUQ8EPZKMmVrfvy749Cv6AHdjXPjsCFAis5WRvwts1XtoQi7GCsxeTsZJUZtyvxiVwLGRzNDeuV",
  "key27": "3bEwQF37YVAWMMCKGqLgDyDUbkKzuUbnJGeNwJZpKx9tB613EjbKD2nP3wwtbnGYnT2iGZrzEWfqyWNJUre2vgtP"
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
