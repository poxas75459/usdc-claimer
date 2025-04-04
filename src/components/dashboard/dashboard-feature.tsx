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
    "2KhFiyeyfQAN9kFy41JfgVEGFUqxGe8hCmVVE1HR5UnezF6tcUx7XvdMb8wHLv1JEdE8r16FENsiKv1CP8mRmPNY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GUHB3RpxQwPx5R4kwPUsYbuJqXJJ7TxgWRtJKEVZUo2wV5JMvzwt4Cfs67rStZkUeuhXyMF75BnDKxoKkDXVBhs",
  "key1": "3egcwVMdZErn2qyiqP4RcJFAuqvdUqNv1VDa9p2CU2R9GPjMXcbjMDw7y74xBv3bvxFhaToMT3yZyGsmLPhVR3XY",
  "key2": "3ypA1gSrgrmg7nycDxua74kh2E39TRL2DcGNR4NsD7fnJ5q4ikXJcJfTUCg7p1gH9RCNo7nsPPwBYB1MGj22mADZ",
  "key3": "3mr1eEthwvKU7LszQx1JyFaDhjCSUT91MBKPKrn93MqwgYUJSQNV2XkKX29Sh2MLka8kxZbwBzaiCGq71e5Mh12Z",
  "key4": "3VEmFSMHKTSdmpLYV7oqSs5YqVpmsJqVWJN6givYpahX1Q3shPCRoaJYRnNaj6d9pFyRijLEQJhR6KgcpF5rKfaK",
  "key5": "5wrjm6ajL2pf6TthsMBgigqvxgUJh8Gsq9kwCKCBGZ2JvyP37d2Ym3oH3hd4dE4ZpcZmsy5pioyPtW3aqQfe9zju",
  "key6": "56X5PE4hsyHvsvwKRTAoLkNXGnghqoWnMVCmZ8zzF3AXsDgdfje3E41W3F5NFxEayGTHj5WP3vEyQzF3b7vcHu54",
  "key7": "3arYwpBrBPCeT16S7WDZbhmBRUobGcmawwmCJ7ukuGVcnoBM2afzWXJCsqLjwGTw1ahhtcmsQDTvCkCQcbQn2eqQ",
  "key8": "25WUmG9xoHz6QChdBnYQq6pzdy8Po8bCGWYVKJfSEN6mntEWNUWToAQS8PADBTbvxGCNc3HHKTFLhwD8eJxrqKoW",
  "key9": "3ALphHHZQcpNU1zhL81fQHdBWm7W7mhohiLH8RoD81oso7qcaUB8Kbao2wDvAKH77AAegaAMfTNGdTK9Za7vSsF6",
  "key10": "2kwxqnxspZTbWxcwr862SgpeDSdV3MduAS9tsA4hmNZ49VA9f8wjvGkHrLKs3oTt1j1hoyDBroGzoyBrdjsw6Tsd",
  "key11": "4KnUwPjQaMCsQya2dfyyHYhX1BKqJ2UbisvUaxB6E1Krdci9AJQLnPviyzLAn4JBobtm5AiamGqMrSF1uYgKRk9s",
  "key12": "48Hr8XswQhkhJoFR6j2WxyAmdZgFbz3TCJxfkArcaHyL9VHtDozcXQXqYr5XCZSV8zL1vJxK4fe4LQZqY1ryKiNB",
  "key13": "2Dj7FMYDPKno4N8ZN4iJ6U5d2PeRRqesczcDEoy2PiExWAKzYKFwTk5w25vdTJ4dL4WwTievE9joym9AZgvNt1GP",
  "key14": "2vhd75Nme7jTRQig8kZxSk4xQabeHkV126gKDKLPbUY3f226e3DbtKqKPt7FvFFp4v6FHzNNRr8uYgqCNfWZBonN",
  "key15": "3Whr1v1v5n8CFyuVUt6s8XjqEcDPxvT3eJNenkg5mFRSu5frmh26CBaYBxYyd4nhc31vaDcq4v3MMaaZ3fB2g5kj",
  "key16": "3cXAdcLvsYfbS59CFLVhTB4VqxpudAu4FyUvP19dNkohxdXbGt7R5o8YzZsPm7awQif4XfYQWt6EEAVd2FaRCjeL",
  "key17": "BWtomu9M4eEv5CazLsK1Evyz4DEJoKehZAgY4m8TXxLrxAwu7KXKRHkejMqpNwTMZqJsGF8ReXV4wrMMR3VfXAm",
  "key18": "49jfkFo5ffA9VmwX979t3vXrUt7VzXzRiEKwTkEg1JnFHpeWW7JUGpKHWVcKpYNMSrW5BfEYJxipzLdyCvMmksE7",
  "key19": "3388XebL5W9aS5hrMYSSoTKpT3jMs7GAYKjcDQNdV8eELZGnSp8y1yV4fLpzw3ZL6trut5EapDmc5uNa47o5tQFb",
  "key20": "5VDoLuNd9Fps7NXGYtNittUYys9wzoqQ99vyT3vM6Qq4nhGE3Kya7YTk2CTHPtPaTWgUj9cNs8Ch9AcrWwQEgpZD",
  "key21": "3BnMqLKXdMQ9qsCGPqotsvdG2FB8teRbAjsN3Tdp3GBs93fVAYTg2ipkKxfb4sLfkADAynrhpDwg4b7Ei4bpkA9B",
  "key22": "4UmauRHA8fKAtmk9UAFrsn41tSUv96QxCtmKtyDDmRdrMXty4qyM3PrdGwDv7iszSHVQMvNn68zvWZgaYgULZRQZ",
  "key23": "4m6s7YvfFMDxs4g6MMPRVqM2mzAVx8DKA8rfaxYzBm2mVEbA9YjHBUg64Q1C8LbRjjDGiv1bQDoGvJtbR3Ao2Ytf",
  "key24": "5zSPz41J5Ne98FcoXPcVkm1aiG5dDZQvVyH3oxGQsyCB4Fh554g7yaBfa75f34vGXH2uQABMh7sanvC2hD7yCWzL",
  "key25": "fGWWVhFmCUhvq6JVC2KbKUKHrQR1LQRUdU8evVms4eVfH223bozXgGFUxYzTtu6E8j5En82RSVn1rSMx1YoTZgk",
  "key26": "5iwArvaHxfMJR4LVuA89KVpJXQrenGF6m1GAreAGCTDT9bg5WMJdUskTDX9BhMC4LHCddqWVXGDCASKpHVYrXNxW",
  "key27": "3gK9KgyN29qByuNzbbw8HKstFeGxDaf8rwSTTRXvnuxrAekVhHFZp5zm6bGa4dqyo7QvT2tmGvh3PicvJKofuLVx",
  "key28": "kGAKHYgZYc9gCBQb4PHeAj8JmWzBivu2L6Ta85Anum9fu31zLsFZixu3vDVb1fgbJxT655gU9shjkJxh9oPGAiT"
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
