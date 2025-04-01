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
    "3EfXRTJtV5YEKXS8Kg8qTfqieEkogBoW9DAqW5ZJyz71dMsWBNfoudWurpirCCs2JAFVksfHX4DFDrd4baWYz9UP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cq7riPYLv7hpf4LeXWKb5Q3kBWvGxdyeMtuA5NgGtWTM4ggA18cG4nP2bzBMXnARotATn6pcVYy43X3rsm46MqU",
  "key1": "4F2MepGyWPXy5LpyZVm2AdM1L5Ae81ypksqGM9ndwDPwdNqGAjkdbDp5JEDVTxHnmMMApqmNUqbkXwAVZn9Qz3A6",
  "key2": "57HvTMY2NpJftFcRrSf9VVYomTDPZubChcyojwiR11BAcw6Bjssn5DiVMtFRhJnadenLzoBUCNaxggcyZqSNCsE4",
  "key3": "42qZ4BfraJydo352mf7kewAHGu1Lko2tS1CU5VqHzFbGdmRJGkdSoz2TizxG3pTUtbscyKAMqEWSugKV4DSgK56s",
  "key4": "3XMkEMsYd7eLCVjG92LyjJrasPwipQJMBESkbro1HQZULYVgHb5PWAHgqPjprVDnCvJdk7LNkmJHKyDzmua3PKfQ",
  "key5": "nWoj8i3VhAXczZZNVtFDiPDvy3C7N2sbmnnt3PycBp3ZZTqhHWHPb19hXMXRFx8GqRBjJYBp6XkWeUzUPQ9za3j",
  "key6": "RCU6TKE77Ca1RGaWKd3z5dMQVAZ4honkdZLj4TgaVya9kxCws1UEbyV9HrHj4f5ak1D4kqB8bLuTLRZsY5cBNiB",
  "key7": "sb51XmgCF3ipnG4BwRCssbaUsSgsosfoEpk3ofnxaWaqFUdpUQtqBhXL4fvBjuy5z4HCW6w4ffbarLasm5YKjGJ",
  "key8": "5n6ZC3LbRGJ63STj8ABpUQkJZoo44XX95Q4jzwfRpERGNn2do4VJHsuSzBFfkAo5nq9bxbiNJZ1wgLdTEQ8eN6gJ",
  "key9": "3Lbvs1YNN4x7qtRHUtEEBbFyg5YpvF9bfTGj4Fq9zn9BWhfiyA9GdBTT8a34ssWu7LFwKjV4fHHTPpsnbryE2dwS",
  "key10": "2ygVNkNpmG5YpsRqn7D4ZeEWob3qeRKN5mpLj6Zz2Px2a95CLwddcLs6UyxTWYpDL7dFMr5mSK991RxoHG18eHx1",
  "key11": "667PYoqh1Ad41cvZXVGdDnbkabkTA3Gd8B3jZh1Grnv8dALKWGVvAQGgnBpAR9ak5ENCyF5djbfgiipSW5nJFw2m",
  "key12": "4UWY7TgYDKAr6ac9p5VaNjGLGkNTzknxXtBrYTmRxnsVvxd34GPMD3XJNzJSL7Q8EMP5hUV1fRpg3pumDkcEc99f",
  "key13": "4Jhp3bSy9X6wPJfRGKmWGs8ndhV3FenX9SS9oE67LMxhxLJsqfHUQjpscMTjg1kSCJ5CKEiz4MR2eSvdAMwJYK1k",
  "key14": "4Feo1qjgK2UXF3jBKyZcgyjVYpGmMyo2GNMMr2WhmVeqHyo2RWni1694xB6v2Qtsv4iBC6xtRUf4eCbpCWnm8a3b",
  "key15": "4ourzzPHJRMbZRRx1GJQkUuAxA2pfRsdDQ3hjep65CVCXiH2fnkaUSB3ZQFrZwKvRmpx3dJNRTXPKF55DvqvPsua",
  "key16": "3vFPkkEogd3wjCqgPGGggUvqVHbNu8EAeaN3A75Zwgwq6wxHB1rUqQ1T4QuawebyqwXfsyhxFVZU7jMkntaddSGx",
  "key17": "HDeHiyTAcNxqpypKByadMHbtp6hvHYrLyYVCbJ7Z4K9rB2ZvbtqGKTTWHjpF1F5yBqgue5Hp2BXKDSyECVGU4T7",
  "key18": "WESxopLharX8UhCsFVeQNACSF3HjX8ATwH9eBqVoioVSRAjGyRo2ithCcvKoSJAGbsdU519PByxE7oxktLJkE4z",
  "key19": "ixGhcZ5A7oHmYQTtM88XH9DEf8j9wC4YAvwRkmPaCaRTbWjAXeNpyRju4jmiP5k7Zrj5aw66NLCNsz3cRS9RVkR",
  "key20": "121eAPjgzjWCVN44d8Tpm7FMzaB3vqN1TDbPhvphYLP6bnvEp6cQNTRBuo652cFUxkFpG7PeQ5FENDUrNQSk5E54",
  "key21": "3pJr7gQBnuewBdNPdhAv1Pice34hhsP5owcNq7qNyuNgfdUbx9BiA85fHqVrs5ZBXsk9gNE7gam8dD6MW9zBrNGA",
  "key22": "4HU7SxT1kFzgbWnzYpFUQ3FjFL2whwjmWi3wPoQg9XLQhHvrn9UX2cwkkuqwgQRiuiYnT2JtVrG59gGN9SR5p2yA",
  "key23": "5fgESLZNhBGkSBsLsZN6ATPGYxR18NxmEiyWtMMQdA36iaoQDQNrbswJEqp4aDPavxUUphkRT2z1r1hXvF36riXf",
  "key24": "3Nf5WTSCKeAEQo2dQuNZES944yJ31F6FVHngi6aBVTASkJnFYNd22EGcHibxH7a65rkpmqaELm2kxtpfjG9moXSd",
  "key25": "43L1G6eBrhuUCtJf3wqWzG6yCDA2bMeHZMEx98tjYkTg1faYkB2wnZE8FZAfCrdKoSbWQw46frapKebr4Mvd7mLj",
  "key26": "5v7rJr7UfYew23UBmtbJKzQ4GTuQkxpwAyzsbQG4oxhLf9dQNfetRoquK6PDmmbRadDvDaVqZ9XTL3sJKbykNZNq",
  "key27": "484H5NWfja8tGLgupmz9xVRfYD3yJ7g2F5i3YLv9z5LYGfHfyatqQkG3bGNHvQx6ZD6cpvmdburaH8qjh5UyAmCL",
  "key28": "YFpa6K72o9qmKdThRWQqM9EFkreaywmjJb5hc6xuycawWzq11mqdJxGKL6hhRjQECET3ZCuWFssg5omnmYw7dvV",
  "key29": "2YimmP96wNnzV89Joffo1gULDkXv6ArwUSetLjdxdyYaAYuuLZdhwBCD7eVqjzRvSA3zFyKp1FbcTeNwg4wFFwAu",
  "key30": "3mbRRJPxmvvCS89j6fZT5Vn2vSsb5F6ZYLvs9qAn4pMyL3XN7M27WzcVMPS74ewsHgPBLc2Q894qW4NwXXThCsZH",
  "key31": "ne39DPR6KdSGCKuMh9iHXr3aZpZLChJJKiRyEQfzerrewL48jn1JS9GPydzue1Bwt1QyZXr5csSWL24MTLeWzUU",
  "key32": "21PUeKfZG8YH74hE7sizvizMqzzrPEZx6tte5WQwRW4r2PmUUKXRx8KRK8hBPEgSgqprvhtuB8wNUfZ1svxu9bBr",
  "key33": "2vy8yxE4j6JreLMGRRgTqfy1cdSaGqokp9LXhfDrLdMPBYsXHNGv8wuQ6GPHqUPmYu2LUbLAG6TcmTcm9ou9W7fv",
  "key34": "2Jcak4oakMN6h8kmaNVPjdh1A1aPHWv3gfN2y8jdWw9jNzhhSy84n2TeFmYLAezavfnFw8GURWvizjcmdPQ9kfZv",
  "key35": "5mTm9tbMJ5ucdnZ9EKCwvaoUL6sg6jFDyTaY6Rfv9eRoLmviZHRQhzz1xNUnKvp4kkJQkfU3KDNVYNfcLM9NAnWP",
  "key36": "49HfnZvx3ZYM4xZSw5Htbd9Uy874rMVtzKivdVgsf7dD4k7JpdvwRpBdhvJU3avr8HX9qwp12h69Mqn3MpMBV4Qx",
  "key37": "2FFx7xyPtL7xeSDBhudJqTjzD2JpPuhWZru4Wsi47gKLdexuPcHxVadPgq28C8QVV52KSe8cjUvTVEczPvf7i5Sw",
  "key38": "3Cs3T4sJnnaRg5e1eQVaW9tKt8Z4xG6kvXfSP3GwXwC5XPP5P3HgGHXndr1Rk7DTeRG1XpbTGduvNzhQZwSY83UJ",
  "key39": "5AD3ekEhWo8fEtxGmU6Jpz6sXCZ6kmycJ87LeNRL2p3XNxE3Gk1AsZys3ZJDAWBjJJp2bTao1UzfzDQfE557uUVH",
  "key40": "4wBrzeFffsQ2tYR2TpEMB79RrSydRQ6TWF1eFAY8P4MRJZgS9Jdba6A4fieyyzm8MwNqzUydz42CrdZC3EPsAB9C"
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
