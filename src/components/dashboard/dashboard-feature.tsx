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
    "59jVVCMg9N6wSLg4ThmYBt3hvpeKHmM2TBcZR6jzbNaPaiTwaryzXB1HucoLTn774SMk1VUFsiuLHWuzMdwHSDmf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66e7SBLceYX4phn8zFatgvqmSqpMvgfbsgd9iacwVD7cdmLjRFWrjNX7v1BixGeeRg9gTm6Jds2X4zguhyF8M2xs",
  "key1": "2aLWmaXUhKa3M8VAJkyVXpjEfagbEjqwkYDT1h8w9HQN8a8huLgu8ysi9TmiDojXNr79n5HJpqcch6G2rxuDDJrA",
  "key2": "4CEEp5gzjfqnf9VamFWhCY5K1xHDk1S7GRPjgXb3K3ud3tQLbgfPYU8pyWwt9DWbdUEiwmXyQKjHgjkFKDsJDd5J",
  "key3": "3TmUNKS7oSusbVSXQJCYwbV1PtUmWpA5nMKDzYCW7U1LPSdg6Wrqk3HrxArqxptgoc9tXAgQFGwycQ55tPxzJBcU",
  "key4": "e9hicDASjmU9tnnKBsFWTMtpPjiH4q5pZfZDsJz6uHVDjtPPj1v3e3c4WzqiTNE9hqjp85WavnbBvdJyvNH1oQs",
  "key5": "3u47nhgjTzhQdnHZvjKVwyC8m94C9f5AnUYH2fzMdKz4ZH6KoS4k3ceP4ApC6g1dUF6PoZQJMXLz5kd6gpRKwa9",
  "key6": "4M6RhDXVPazfr15j9Spv2zFRczhYPni1e1FQecCEDqBFwUZFfEwLGUcnAoPZ3qBq3jeRTk9eUDTbcwkYKCz6qqw1",
  "key7": "38b1RLJYa9U7DpdwiceuLqafeCDtK278qSsq8JW4CtNrN3GeZmWaet9axCLC6sn1sdSbBheZ4CnDVye6BkmYFVnW",
  "key8": "2zdaa957pjDiGHKwiBnWc65KFTSPFJjN98qUCfYVEmGCd8jktBp3om69uofTN8xsQvtHxituAkZeZ8rEiDEkWWN9",
  "key9": "4rVibfqjcLx6wmiTHkTfL5qoqvDT8pJ2xBsevHWo9aSrztzmN8CQz6Um33TFweQY6WLj2ft5Zi8tY5bhLiwL8dWF",
  "key10": "3LyzT1wkPGkQoppPMWif1Qp37UjNn3yAZ2SAZMy4qe42XkSytSeFMfjhoBwomLy1U7sN7ojWktcEtwABr1ExTFM",
  "key11": "qPVA2yXLiiwSMCpsGTrKj7Wirs46eKDP4a6h2VNSRTVHbJZ6hrH1z7fiCcBxFtiDafDQZPdaZ1Q6dGQuJZ7cwtc",
  "key12": "5EnHC9rTsq5wbSUVuWVcCSuJqg1JRZdYS4fKWggvfCFtizjc4raznnKdphpBjpAUSNR2vtERCoJrcNEBwC7CGSJw",
  "key13": "4FnqovL9pnpJ1bXHiP7STv6na2GLbq87trdABcB2JDpAfx2Hygfhje8FsEvGZ3HzvXnJoU7sh4QoeoYRA1z6X4rz",
  "key14": "2NJES9PeaLXdNkGiSy1kBdFGKD4EPgkuTvca7GPHa14MsXfCGJz3WP1ftaMqaz9SVd2HGYpMynsZq2hVdyCRt3D",
  "key15": "2RoW4zZTXdMQhNAYqFvvKihpcdA67izDEdWpaX6dMJYutUd9Ey1YLuNnvdvdNyTuFY9QJMk2XMnzcZqfSVxAEnVm",
  "key16": "5Sbtfsb4JfMtRvGghx9p58KL4fSv9GQggG8Ra1Y4rbLayctQvV5zFuNyfqv3PrwYBTfJen9hMeRYu5aksKDcM4PN",
  "key17": "xorDPJ7y4F1WDZRFa6ujsmYmJ1n6V7D8xbHkQkWzUR4CTERm8b41Q2Uj5KLChKJ56Mg5ssgEbNYVLq6u54bB78P",
  "key18": "62SFwuL1vK6tLBpiLbUnq1P3KdRMS9DWYDEGASboCWakxBnZ9aYnnwiKdcxSqoHasUCiACqiys5XE7N7B9aPK1Uj",
  "key19": "5XtZaEKzGzGv2jU9SfEfdHRyoKuFAYTFU1LDH6dec5kC8ehuZeZVQ9k1q3aDsD6yMgK6jp7YaeV7pMmJq5WUtGjf",
  "key20": "18hRHjvhahb274GcobzZFXBWjDs47wzNU7Ct85ULz1Tg8GthZQuGyQrjLrDmeDj7kJ4ZYukiWH749S5RTSxZ7yX",
  "key21": "33KwjAJa5tNqyQmtJjvxZt3aCVLY9z6HHMxfEGwCvbcJMqnja9L1YUr9tWReNW6my1DgEws7bicWvPdm9zSDuvrs",
  "key22": "4nQZLCnSsNGubwTmnB9JwB83W9nEshktVLo4mgZi6FHr6B2HV7s35m5PHZvK8mdbFF9t333rnmYNddLxmhf6mdyS",
  "key23": "37Ci1a9Z1FGcA5sQ7fargy89sHh2xWQzSQhTv13GeUi7dc971std2YmVeHFP5fpYWQuXqzkCy1sNYhJuiUJ5Nmcb",
  "key24": "4oQEwywkC2B1Yzqo3XfQ8FsRDAxt8TDUbh9nPADZFkLergiQmKm7v68iPcHXzKYumVvhca8hbiuRPMtQnWaRzW2D",
  "key25": "2Zu5vjhwY8cE3tXwZ5zcRYS5Kt9Z8cDA3Twz9Ddbfu9ethTaB3tgFEPec32MKpWqSKh4gKfS2eY1h5TDHN9K3dio",
  "key26": "46BVxjCJSVEuur5mT9fVzBRtAgJaxum8XV3nborthojhMc5PTyySFGvuZHLFuJH1gDYciGHvX8Wg5KekLA2avcvg",
  "key27": "S8QsEK3qkyLvUkoCBzMv7y6qAZpTC43SDpkGv93Cuv1qtUM8FVUYLkaTV5iR2AtZWHvA1ZvWxeGVssq9KtBrHHd"
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
