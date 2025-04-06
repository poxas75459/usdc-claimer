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
    "3xWNhYJ5FaP18UWtcLjjSLX4ZNVwUmT9nyLF33xUmGWEmGhXtNDoTyJnaFPo6bxFtzxipTUGkjVK8mkokUvF74Ka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VXio1LAQqdHhEqmTcXYwhNiEScR8iNurAFZYBvFM8f8yVKuPS9Q5Nz1Lh9eiFuPf4dNiEStoRS9M7hZqegS65Um",
  "key1": "662HN2F3gmQpSzkCUtKPwuFbwK1iDwdiuC2prAMhuNQPAETzRz8yAFqsYK4Bp7wZERdPwSjF2btGjE4czFBbbF7M",
  "key2": "62FEwgN3yG9jCQaWTi8JvM2BXD2Ab2bc31F5TPh6iBb5Ri8yJxC9dY7uQL2A5K6f1ao9xoWE1uWz5JTLfbAjd8A2",
  "key3": "546yrfHMTynRaaoqKdiCZya8hphNmLm7x5wqkjMjaZnw7umPB5u5PFLAokNys7T7zTHMifHo3RyqHEhDoRC6MAEh",
  "key4": "5DxApDRgXfqMXAeLTjFr567bfZg6nBq3ruXYiJTgtEQF28K51LXnxYVjqZeiiFYdYVsKeuivqG6zy2mnVgNSaZzG",
  "key5": "PFLWzMFSSrDsDoZWSAcSbu4Qr7WD1qA5epBFrqSFxMsbWqGXjgpioTGYCMMZ5YcBuzEkjUtSNDmXwe9s7J8yEmH",
  "key6": "2UqptCb8HUwNiWMP5Ret7pPvdhWT9rq682DAqL8azCTayd4ZBnWsifLKHhAMcbFojiv2tKeFocz4MaqKAWrEPgxH",
  "key7": "SYDMdRmh5bRVqtLQR1LG4zHAztkYPDekvxKXLtVpjAtsgH5moGQNvr4Uw29sUiqXM7QBjEZAGzgezu5V23kxjjn",
  "key8": "2bPXBx5jytBww13Msrw4GHNz7BnkzWfHCmD8eE4Q7YSHgkcf4imdrdCmuTu9EFcpqB5VVDMFqmEr9njpMEhgjPmh",
  "key9": "3ioNZhGEnAk3DbGwGEaFNDPzPT4XSM6xNz3QFzQZy2mLuNM7aPJHtZqA9WuJoU7S7n9HLDfY5SXCBYX669j4R7FL",
  "key10": "5hsPCDYJehnckRx7GWW1tda1E1WL7K7YcxVFUY5qA9WTMyAW8YnKXLV1Xe7WGsrgAsW9jVAZTADBnaMSkWpNenxB",
  "key11": "3bwvHdqTGyRA9aYAa6ZqPeU1e1myAwXtJiAHDhRVkf2TVAF8xRgCiDbttvoKoL9qzzqMdHCXaxE7tHzTY9YZj49W",
  "key12": "51aQLCH1N3C7z2xqGAEyrp8vAJHPmCPYMEiA2QG11YtzSGsYZ646UBnk37YfeRXF4iuLG4riTpN2dmPuTPsQquLu",
  "key13": "3pEHRWd4jgdBL1kbVs14XNQF1rWZQLx4FV22bZWWJQiEhNpye5r44fRxo8n3BhfocbHDoFCj5Mn3mUaegtQwe7yj",
  "key14": "EKqFnT6bHX73TEWeC3kbRpbTAfMg58bVuWtspXSbomtBWzp3JRzbd6sdZFWDj6knJotJTq8A91WcUyuQ4S51KXb",
  "key15": "9iDRARFaG1ZeH1ha4CXkGuHgLj3ZjdmFNvSUvRzzWxStMMoY93aMKrKXfmKGT7ZYQqNq7QtRAH7fEjvfPNeB8PR",
  "key16": "3G7d5P6ZT7WTrDRTH55ZujZHamApLajZA7cFVAKQFQUPJsjSATXCyoq3Wac7mEietVUrXKm29zh5PR3ymjdNx3Cc",
  "key17": "2KwRQzWfaLcVZcx5LDjGSjWBt7i76RRU5yxLe4zcb5Rp4rMnRA8Uu3VXoja6UwrS3gej9tR1UPkXH2pv4wQKhMhn",
  "key18": "3JssJKyeoG3JMjmU97dCfNHGqMjXXMdrK3gmE18UND1oxo8g2ewPtMLioQaMVtBoXPZsB7Jx3HPHBSb9AT26TkJP",
  "key19": "4ADncp5o16NMr95b6VdSoDQAQbcyfv3eWnJmMduHZV32iudLcaFQEASccgBmbTmqmQYuqqv35s3Vzmef5oN9MK2F",
  "key20": "43BYHmhsCasVmqPYbww5ytZL1uMznjtnJVNMmceMtrQ6rwg2wZhpTQ4ekwU5W56URzFoK9qde1isKmEvwxuZgxCi",
  "key21": "36g94X3Lgfa2UxE9V136YzEgn7VLdD6JWu8ZcWNL8xt1bw2XazZowxjkJxUBXuiLtEXF9gPW6MvhYfedapYknNhJ",
  "key22": "pea9VAeLUpqf3EawopJDQ6kQx4MqXcrpNs5QwdcBcXu6QovJmeXm5j42QGKUZQ1PADk5Lkmry5gyUKRAM5xh9PG",
  "key23": "4q8e4LVGJppQTqRzogJcMC4bM6TDWE7bL8qTBdDDKLSShXeSNDkM2tpq8A3LzAGWeSSsvgwmZcQX4Ybi53qM5SMS",
  "key24": "3iNBsGmUjXcTfvqaFQ5NGeazeZRVcjpDXARewuNErmNBCvQZ8m8y6N7zTc9KuKrbxfKvcEcHmDXMH2GsUFdPomXW",
  "key25": "tkLsHbQkU4hPJXGy6YZdwVLir6zga7cfNnMushTkogSq7dxEwdFz1sBsTuHhxFDhwJ9oNCJjkKYRV1Q3pRJoHYK",
  "key26": "qajPEMBCHGrfVBGXzdcocGf8Erfw6fbJ8SHTbhccSJYEJsG8BHus2DAAUvw4sXXzju3efsQEhpmC4v7urN663V1",
  "key27": "FTD4sxhH9hYXBgSMwXdWndrt87YdGtjHdQoTVSDXdV8dXGpG3N1yFRtfQhGyLoevoNjKz9qn5xagR46TiwN691e",
  "key28": "3XB4y26LXVpd7PWKr3CdzNbZih1qC69tiDBpp1jVR4ZxVnBHXXTXLnVxSXUJ44XAzP1zX4ewjytcCSzQ1ANtJvRa",
  "key29": "2qjsziTRquVBrfv4ZB3H8kwD4uAJvCHEzXdA7G3bX7ksrE3knbdQWFvsqcC2fiPcUP66V1i7CHD9x7mweqyZEeGe",
  "key30": "cncd2ZaQrLkoAgCKUZ99eouY4DKFNLkyWeB9s52mFNgw1uy9CH52BQQbEv4ZRZPXVFozYcN3zqYfw7bZAU1dKbS",
  "key31": "4qm5J4WJAABaoR3hVM7dnJ8DSowCuSZVQmi6xxgGTSB1Vs9Q6sWZj7V6QxwtcA5ZXfQ9tzo1orj7X46vK2Fjb9hu",
  "key32": "4yePwmmzPJ1HYbK8LC9utZrdHTN5M6cRbVn8c9YGdxDf23KHGFoYsKyjLVCtmQQgRczH6z1obhv3YJiDvB9dtz7J",
  "key33": "399MeT69w2FxjtXYMUyqqtRxWawLW5vJTXq1DXusXaDAZHAjxBNQqZLDDXmaP7hMWWuJsKKQ3fhyVCRvDzuCE9w8",
  "key34": "35PKh6ZXQSmVJj3me3hPgvMkiFQPbZJBQvQaND4UHN7WG9dfUKoqnJoMikKN9AEBrba215EG3cUMkkFY8HJY2QKP",
  "key35": "jgm7uRhSMgHE8LJMu2qpXx9HqUWDnZWo4FagE26r1yfYmQAirvAhNV5e8of7L2jHaWTV6mqnWVKvdkvQJW1C9cn",
  "key36": "55E2N4L6rH51pLA6hasKeiefd82BfumC3LSSvYrkz1cfHQBtCBoT5X858ojYhNFy7a5UbDiJxevGa3s4rkjsiBR2"
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
