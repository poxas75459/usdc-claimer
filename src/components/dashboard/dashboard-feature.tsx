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
    "he4zVnP1XvoezaU3Gjwqq7i3AhRVq89BLtfUputEeVh8pac3GJfaw62FZXzH3ZhBJ7zmR4x6KqTA9AJur3oJmSj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E2kxpuWgDTyNRD6F1uRDBvJT6xiLCSE9HupqRgGzU389LifBypUExHUty9usYwyCRPbKd8jDTxGeZy8zxRhXRZE",
  "key1": "7uMxF7w44hv7DVbVKCDjounvkFygnN8WGEhM8DPVCV2w12CP7p46Ct4c9EsDszYdyzMXnjVAkZsLAYcQQFhbnvT",
  "key2": "Ln53gvoAjGBfFh4XgCtV1WZr5YBJ7N6CvAPbjMRGkYZvvPmpgcWTooPnpvvfZaBL7Yf9mjuZCsE7qr1XphfR3TM",
  "key3": "2kcmyx8hXt6EYaBpct7auF9t7Acmxup5s13KbMCDsWf8BHnLt4rgGZc48znPW32Q6W5QgV43xGpJmm2HoEohNnuK",
  "key4": "3r79JsWH5FP5Ai3i93HvRDysfc8vCzp42Axk4xrpn4jP9v7NXUs7YY2ybAh97stgRiMugpCi74zr4KH5LxVNikw",
  "key5": "q4JfKMPbtfncuH5PXY74nTff9hidYa7yQqpMxNm6zadhBwU4s88mZnPNrGFcxzDmv1BAYz1iYGDoqHn9ubHsaB1",
  "key6": "5zBko2QMsZ9TGaDbASrKoVfEEpFYsykYRt9Wu2fgTLxSBLBYbj9YLkXiSo5AycujfWYw2hSVUK2AVSXZNcwyPwHP",
  "key7": "4h5onTmB1PjahJ6QxiYQL1sjWh26cZkpg6956ASVaM6avqrQNLU8RyUibY1Mw6JQJdJmkBN4QmKFkUeUhCNYpqq4",
  "key8": "2qFMFpbLboqMwbPtGjm9Gfs6A5WTWZn3uycyuzZVmpkSksX4LrDHHZyrFBpbibtzELuS4n1Vq2jdVHsPaxMM9PPE",
  "key9": "3JWry7iHQGEcNAwteef4SWdFUqPkwjExk9LreKZFJ2FncFdJgaCdL8SzrzUhsYnEgHPbGBdsWkM5LJLHpiLCA1K7",
  "key10": "xX515HfAugXy8JtpC4sWJ9ezENd2jVW9LdKgahBWcUAEjbVjCgAGVCZyTnF99rMbxdxrduyxcuTSDkznriKpHxg",
  "key11": "KcdsHbxTfXpvBJ718CQvUeXx4fAPxeFdnkcSqv2D2LWL3K1ZhvEDrG7szXwS5Kehg7BYueovvxffeC5wFWXnxdM",
  "key12": "3R7gbaiZnjEchuitwZQVFr6CCEMQZyxvyXyWKXrfcuDZpb1dN4M5URQqVXZaLZa8CKtZFHaW9d1L27QQnwF6oiSh",
  "key13": "jtnfPD893vEdUjBGtXJ5BsYe1tGNwvtLZDCBh6naAnaD4tGpAWMT25pG8UUFPsdu4H7MoXXRsgJ3RUBLTk1ezJk",
  "key14": "4Mpf4jDabFXvU9fkf2Mz4gfBjTvTmtJDH9dF7d6vCdD88SsBdgpr9AFSnLRfzTMjgmCoCLNmL8TjRCMFkQFsxqJz",
  "key15": "5vrHzq6Gt9LmEZFvGC9Yn7wTqmjQmqmG3kiEyX9Fb26Cgs1Tw4dyUcjxrYX1jwyWxWtq9zV4hNXgJb2XSuJK4fo2",
  "key16": "2RMe6Xj7MEyjPoLXchhDZEQbY4NrbY8PQs4Fr2DE3mo7Fi6a34Ahn32UHgwZqoA7xTsxCqGMLNY6t3CqEpNiQ28a",
  "key17": "38TYBPsR4HyUHwP3E5r8koPdJva4xqBqn62dNY7QhfWCsaAVi9vcchaV5qVbaZpaWptmyNSZmW7qyEve7jAog6sa",
  "key18": "mn377rQHWXem4fw5Z5wUq3shnm5zvgRZownGMRimdNmLBWGVA8KndJywVfoNhRXsmqoiAnBcnJMqh8MgEiQnzxP",
  "key19": "5woaHiMGMLiGzSevgBF64gQq8E9PVUctnRNvoN2Vo5wcVqYqYY3TuciUgdVv7LdAP6DS4YcApsb6FbnSfvRDjvo3",
  "key20": "3F3KAroiJPLPL88AmgaWGttG75CZudwJSoyfPh1hVvZk3pZPMjiWb6ffDeJRTZVXCLvhn3BU3zSgmyNj13muisK3",
  "key21": "2WJwtJ9qTKo9hdzNdQwCLYAehFHb1pEBPwBHa6MNGm1c1S2f9oPBZuD3EPKPfQ65MfgxmGiT6edveoJ1BxhjB2Aa",
  "key22": "5P6hpyh9XTWLATvVapoS9ac8qfnoF9TXdpBpNkqY8zgZF13y8jgceQMp9kFqr8JGYAS5NMTD7NffmHVMazhsx4oD",
  "key23": "2EQNwZTJfoGU6cAjHyiUy6m9PFmA1664GezGHqPaPdUuAwcA8FZJbToyX5GGiPmDsdjVtrXY9gJBvhPo6XdmvBTy",
  "key24": "5BvYuq58W28XFDEMrKKnwKTf4pN5rPecQvQuWJnnDFKsotVmQyZibFKVfPxMPUorQm6KBUuVrkAayeTNDHqFbrXL",
  "key25": "4A3fmX9uek7wrrNPfmG5tPvip4EG3NBMENBeDQzRrDEwB2hpVFUdcxZDANUTmZVJbrphj1Mi17X7UrRpvuFfAu1t",
  "key26": "4E4TkFWnvvJqcFb6oyr9D3FCqgdxbPtc95GU5mebREjTDKSYa6UuBdUQyzbJsprM5mTTzUWpNzJJ8yaEAbDUWwMT",
  "key27": "4MjWMTWTy4eW1GEGUG5nA4PoYjWCNfypmsFhsPP7ju1LkoawVFS1sgHLm3rQCurYFTc5uoZPEkx1Y48tuKcivhW5",
  "key28": "2QbweR5CvGVY8gY7yLheRW9tFZRbULt6EakRghtwKwKZa97UKtke1inLRmJLFkzYwnpS64DDva61GgtjXa6atSUx",
  "key29": "42PxiVrNVP4FXq2ShGf2cLMM8tvy4VPM6ZLT5Ee3rm9QTchCg5qpi9Hxw8WocpcBsCZp5kFWakEwXfnFWiE7jatJ",
  "key30": "k9zbYpoZYSsLHNJdUueeuac4eCjAeBZv8xy1A3pn1TqLFDgm2xmnXyZAuFwtzeqLnC4MtybdGQX6mCMnfgTPxYc",
  "key31": "pgs39uoMJqby5TwxkG1zw5C1SgCzFwcJSJfXah6VRZ861UdivVtH53kMteWb8hi3dAuCP1s4vAXRdmAwoHXDwwn",
  "key32": "3PBsvFUakYAL2pbEpRHDdHvxgrPoFQPsxM3xqD7mbeEfoRDjnbMqjRn6Z6rHgChRsWjjV24w39ieXRqDUQtaEwUm",
  "key33": "5sTCjQ8wkmq2Lz7kidYW1j2TDQToggz5BLdcoM3V4ZJpvVL8RLqu4XqjHwKyyez1LZ37733mffsPW9gSCmHTD6yN",
  "key34": "3iX3HMzpPHB993MfkEJZ69anwsZCzpPk9raGG8fTDEu5n3TrDvrTB2dkSXmtUNUP4pfktftFzRoXDp5noi1LJa7D",
  "key35": "65jVdXQ4VBJbtCztwmQ7y5qHLmQMCpxezLify1uoAdX45EDK7CoXAMcm8CvFbBuykMkcRd9oBihtZA5ten2tqKAy",
  "key36": "5ajDfR9EXfizBPqW2oiHP59PPrueNR2sYN6fkZdSrkZAarfTmt4DyTZPw2eGTG3djfrRRkzkzwJUkhUBQKubE16c"
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
