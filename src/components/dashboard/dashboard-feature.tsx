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
    "FsDZPXx9oVCjw2HgrVpwiwdqox1FYKiGScUCYQ8wyUELdvPKCvzc69dnJn2AxjLXzmUPNEtKXSBuVgtCce4oXuU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TQkbTLWVP5woJWcDecW2jEBYgoF4MyHeF3PiZKde9TzXViKTTPcMnZL4is5SGgbPjFAjXaTJuy9cLGfgBdjTiNp",
  "key1": "2GJXnBXqBwSR7kzMHyBJhWNYuXuqEUqvns8Z9HwBtmx7Fz2voXqemriyFchbG1MUkBUrXzrNdMEbTBXnWk8h4eDf",
  "key2": "2XuA9sDo1VdvGDryhSJXqddnhr65Rsr5egQ2YuqgSzQ7JqGhjNcpr5smq7eVum5ySSezjTPeL1KZL2akB2R9KYFo",
  "key3": "2DYebKjsqJgn18hCpUrpP1z4FyHZaAuNaxVpZxpu33qFUhFwUQPcmbYdm2uJEeAypkDH7Wj1ceR5oYC5VLFDPxXF",
  "key4": "5J2pdnKopmtEJzJZHRtdGFKHQoDCAyfPSSeBhBuCh7r6mhodxKgwDgWmkj1BbEb5o5CWzfyW7fHPjnSfZJDyVoYR",
  "key5": "DhbG7SbpnvLCCvxx4LtN7GCPCru4Ux4kDU6SsDJjGusR4LUfag5YezYDTbMAcBukJz294ZMdffjiBUWcyYpxT9v",
  "key6": "3BiRoHbNqiW7iDZiRvdkDz53NL47oKnDpv5RvE8HeYgUzMWZ3mxRjcCeuWyDLL7PV4XL5hEdQUyiMaRaFz9J3c3w",
  "key7": "531n3TrAVjYueF4XGFuT2nVaaaxzTm6SN5QpSr8jHHp2tewPkGUnCNVQFzYycMqWVfiNv5uXGJdqvbwtuAbyafip",
  "key8": "3bGEvxTQ47QC8fwxUAEyiS17e8f5B52cJNtozzYAPfAyP2cyTLcnYxA7mK1m9SkDHPCV5VgZx6Qnwp3mL9VAGB5y",
  "key9": "QyyyuMMMu5nwsQ2XGzp4bixSmtfPkhXSBQyyDjDW9jKwXiqRJx79qK2vregr7sXh5LEdGN3YNNMKDusqJq5y6A6",
  "key10": "wG2uYsNEipTZUVBKf2AMMVknTVijkSpTM8GjPsNs8ZngQzfctmpDK7dwSa1QvivtidRjDgHk3z1RS92wVHDznMG",
  "key11": "4oy4THQgVTU9QSsnsmPmacrYkiPWbvzaerSL58s8WmQLE5EX86c29tmRTcjKgrmC7GkEyTiNUZyyhWVMicHs5jKH",
  "key12": "3eTNQuVEfDYn87Uhh4oaYmaEQW519ezCZ1tsRghNLzSXmM4oPyP7nNwTxohq86SuYEBwByHJRPZeTwhYENAyK6E8",
  "key13": "5rCW8rqem3myPJbVnbZXc7Dd9qUuXcprdriVkUksn5jeF346aUZyrbAtaWiTKobCzTHbJVxxfNygQrPzm9XfwG3r",
  "key14": "4uAVXT5r55DrE3Yh2Eeij28t4eCsbLKnfMQbkW5fzPaHGGKAWB734J35C2GYQHFjBd2Bs6jJwaguHiEBHLCqf9ef",
  "key15": "QcVuBm91a6Sqs4tcBAEEMbBMnHPLYNJXqTmuBn4fX5WeGvYpobcVw7EweVhyR1ePpV2s53ADnFrzHc8Fbyn1Z4g",
  "key16": "4rGA6dLtj93uF89sSwhtpXJchqUKBdeKTdvhfMCR1diAZHCgRPfP8bwr1ZR6w82GPdtPR4EocFeakf2zDeLddCoP",
  "key17": "ZG9WdvAq8BvhP2WZoegxNEcHaZpKiCUUDMar17p3CwyyMmRsX5QbFjicALrrN3mvxGCrD3Ku4ng4DQMsE1daSjL",
  "key18": "TjSuRvTYiDbaP3vHJnuJyWYhT6V9fDUTsiKfrnnu8ZHz2o3aMQTK9KjZT1tURZsj3F65q4fTZEAZhXAcUhFxKCW",
  "key19": "x8KA3bV1BSNCYtJYsoMxyTazB1dxuVU4D1zfT2LCzCnMuLwdNrXWTfUyQdQaux9LBH1HxrbbaCQenLUoVzDiTiu",
  "key20": "4Xb6dou8uj3RyGsdzk3mwuDBzY3hR7LGj3957UJ6ZuNT34PJuTkRPnjmgwv7MPDa43N2NcJSUqtd6TmaEsHgxRhx",
  "key21": "3p4JH1t7WD59Zhnzv4i1jHoATKGMSC6ED5MgTZbT6vpY5yJsrJxW2bWH1p6bF71hKcHwvuAjriPKPUbPW2wkGdXx",
  "key22": "3HVVMJoNmVGTGumzCVtMiu6iMvkVCiSSzh8nAPqgyMjgLei67yDovzy7xymoraubx2sjawbGzvqLE6QQcErd7hZE",
  "key23": "4FvdN9nUrX9izLm5TdxH5BSpcwdX6Ym8Jdh1UBVJLrP3t9K6UgcwYfFcW4rr4DSJuFSPsnVxQwo16pvFgdvRJwih",
  "key24": "3sZREyHMqfmx88UguWVSm3vqnd9PmjjbRZUwQExbiB2FKaN1HN3XHzCmW7PEhkaYVsyt2hmMLQzFe8QP27qKkRy7",
  "key25": "2iVx6Es2tT1QrEL219PBDgMwWXmyXcwEkfAFf3VEuZjLGMLWKFGB9cfq9upJCevEbH8xgsUvnbxFSYBHGiF5gBBZ",
  "key26": "bTWfo97bxCUAcL17gZ8BV9vX4yEcVFN1k3vSYMBWtc1ikSPGzqFFd9nLff8qkfHYon7EZci9phGb7TdVzHf3ZpA",
  "key27": "5WaadeVnNKqwMEzHoQ4ukD9fRd9VKnfmEpw3gTcqVPtfr2WH9JwM7RGcSEaGKHYqpvy3wu7hKedgZaCZd47YvL2E",
  "key28": "3GoHC3BfGQf5nhQv7QHnrDWz16oCJjGFJ6Ma6Stke6xjD19fn3k8eRdY4viJSBwh4xnqXEuRMjptR5PTvLjKJiFH",
  "key29": "Z4B2AzAWXEKuPCMgNoqXrA1pUtTMnqFkQ7rdL27DJebnFPWsbGi4Z5GTgfymEitwfxz1VNM8d4CjFY9azsSyh4P",
  "key30": "5VWu3QCaZVUXe59sh66HCbGadZQ8MPUsqKtW3khv1AAHxZXAv71r7JMaVbrRDouAovJ8EvwWsoSMr6DiDgeYkB2K",
  "key31": "ToNDgkpTuvMonyXNoHhEebGjTxKnmvdPZdcQbzsuXP2PGq9wUUb2Cu6CP3Yv2d9jC9wcvd3q5TQdkcw2LZsgY48",
  "key32": "3TrSxwSF471NG9RjXccHeKxvLPb2XshdNuRVqUQYTkg3HKYrF8bgtwnMLU3idzM71B1oHz6kwrkbhuj1KNopgJes",
  "key33": "55yw8tAYaJS182KYgFoHR6H7X1WC9ddA43rYYdhQjESM3sNCrW16YyAc79e3qsCj5kMeenniyuyBAZ8kfyVzzegt",
  "key34": "29jjZrkUfDqdKxmu3baP8jLQjsj4TbCC3HMsssMQXLX5uWveUgA1Y9FpU9x1nsPawwTgHmGD3VTLppNDbB9e7TFm",
  "key35": "2baVieYGoKn6L1tmGFXDMrd8iYY9ZhQQY8u45cNZs8x66scGj4wi3u85MasS4upCEznJzDfmeCoHhzUeiXnRjD3H",
  "key36": "5M3SGbHa9uz2TZC8ht5a8BJ4X3wdnw73ZUg8sX5hJiDa2q4AB1ZtVLKfPzPRTKvCuiWJBmpfjepLo4BgopxaYknv",
  "key37": "57NLdbJ3qdRg49B4erhzCjDXDjwUN7a6zygAapKR68VgfJVqz6swz6TC34PbmJPyHKW5Z9UtVHpj6pYQNxPJYaD4",
  "key38": "zibcSsq48HxkWFvXoetqjSbJRZHvRyeHmPNGyNWvuevzfKzUN5WWKmToDF7LQnaENKd3QXJezQn6ew8KZSCx6KS",
  "key39": "5FaDRCwaVFf3N1Dy1AXGg9e1nJBBeiQfgpCBktXax1bP6tVkjqGcLpzGvgHWvjo9AutVpTiaQ4aDyPGP96EHnoTv",
  "key40": "wFNv9ym2D3X2F8FDv3AK2MVnvzCP22WVdUh8X84qKuJjmX4VL9qMVMdm8bAHGYgY5BG1fefZhDrU4ZjFsuoHAFL",
  "key41": "2SYtXTjLQWMfkKuCzeG1hyWvS5B5h1gUNkjhh7QKDZNdEiw8h1ucWj5aebV8tYFRnms6kk7iwLGdBQQkFZ7tASkH",
  "key42": "31xjRFey7BwqT2X7nCzny9X3TQrWbujGQAEcyUec3vizC2Jre3iWWmgobp9WG6WsoYNGC6nroy6h6fFXeqVCCSNs",
  "key43": "3FPn8XMcHxBrZhcqtPbzcpiJqEv8bjbpGmWsVnkRWayhChjfi1kLx1irADgMTaZM3XUeirjBeA8tj77wn8qwN3XQ"
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
