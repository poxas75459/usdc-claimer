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
    "nqQxhrz9f1BKhP2uVXAYQSJrQvGa2UNcMf14A7Cu36MQmyJTWFHhN6T7Z9rqpf75RTjerpr2DNuzarpbDVcTpbB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29JztfrLonWZyKoS5Xqizk3BKr1y5FNjmfH9DbvpHnJ8er89ujwNRam3RoPeq8xTarHu4mtroNU9gSoZrVQf7mW5",
  "key1": "3AoMR8tpRe4YssscQMUnRhsgKhqrWRyZc6U4HB7J4j6NVN8raBFrLVi6MQEw4MHQrZ5LJYbMTkjuiW4hfXkEqank",
  "key2": "2b574g3Kqi71Xobv69XYnAAPpJVDotuqU2mTZj13hNeoHCS8SYaeo3EtEGVt7LYTaKouxyoL8qGt5Vu1FmP2GJm3",
  "key3": "39vDXWc5wTeQrAYCEWndYvVRmC1AAQMvQjaceawcBQ7FckpXDgk7qk6sxHzXJXXLk1vkJiucra1NgQa1JipzuRcY",
  "key4": "gWRVZdGZfRse8UaKUoS7MSEN3AcAUaMjcLmZiLiaJ3GePR7e6m2AAPvPfc4q31e6qHoGWrdKm4vBWY2HAad6kRv",
  "key5": "BcKHNqkV6tMNqSpVtBDHhiCMBukTF4ynRFjc5V4NeiFxDiK93RCntcCCoFnyWMaM1GacX9LRcRS1JiqnoPeFFbU",
  "key6": "3UwGFo8w2Gz3D4kr3uX3NDuF8aVrxCtoqm6S2v8yM8W1ZguyoMpw8HGoXtQAwrbSRgqeGwgqn6MtMwjxTwnvNhAk",
  "key7": "3hhNNAh6g1SXDYXqdaThg7edQ3FcvaLmALxoRbBLCKF8sYWm6gK9WfReiXRUoqxXNYuNXegUYHbVoMnoyEYAZqKt",
  "key8": "2ceWirqtG85h5wrmtY1shMrB2wqETTju8mmGfJGE2vpyQZpxmPFVmhe1w1mXM58tnwy4irvDSPsH3fVizRgs757J",
  "key9": "4St9EQt4KMeXGUkDg8NtkiAQd62R23JoJMd8zkgBZjdUPxtNVsZnDxcCVbVe3WDmtpfc2JLDXbLeVhsFjBhJ2M2D",
  "key10": "27gVXhEts8B6ELX25GYQsS3ye2s5v3VqxEh8U1xxVwK58aXeznDtDGUzdYZXbHHUG23NJF4mjx59gJbzfVNiq6Dn",
  "key11": "5fGZUwzWLtW4YvUttMtKnXVU7AvZri9HFJtPRuPcAqhNNRQBgcmct3G1NxR8gcWjqc8hNtSVb4Nb3wtozbhhp1Gf",
  "key12": "4e9vrXmGKEf17mTE2dChask55vukGt3MErCYVzNobwxY4C5C8zbeVzXHFqKeVRzUpkfdtomh2Kn8BmRr4faAmQf3",
  "key13": "3Yi21PBZtwoKypNkCBCkmipn1KExtwvFX9eX2Zj1BRYP7QyF2sSK8QpZwCnGxqxzp6CxB8YBYFi4r8gMFHQ9daQG",
  "key14": "2vdhXDhViK42L76Go8HS4oPYm5JfSxNd4rewng482ybhCi1MGH7yVbGmnPcTD7bRXzKFye3Adkk7TR97Ja2oRBqr",
  "key15": "bftocRT2Ja3gRgvGAzk1AUW8tr7Nw8DdVN7P7sFoM4tT1MNkrX2xmS8qmkX8GuXeb9LeDyXBgABcofV5jC5g2zt",
  "key16": "2XKNjxWcuohEPCkxsgu4989sgxPfL3zktAb7LMEi28BMUV995G5P6GYW9LULFGYWVunXbyJxUhdphbeDTzq52MTM",
  "key17": "kNXv8LCEHEbCqGQ8MtM8jAZ3Y6z5negNXQx36sLFywtW327iNyLfXn8kxUnqKgiJ8pZ9z8bbkRXQ6UWaTykzHu2",
  "key18": "3wUGK3WNdyaL2Pk2SuhT4M5v7pvN68JdZJ9cjex9v2bWsbC7CqjMziq6wuS9jeSUzs9tagUU66i1Dx3F5mcGGHrn",
  "key19": "2M5Ndo2qGJtfYJwjmBt7HFTJMSDyaRna4BcSxvzyDEJrTfaX9ns4W9gprhxHZ98T6vEYvGXt8d9zbgvyFAiwhF7s",
  "key20": "4PRyrg8WPtGt5iq8V2JJ8rEMtr8md9Ln8eiVwBSSv9x6ijGW2H3AxYGT6VDgxiVXESP29DKgJgYWNLS5S3twvesS",
  "key21": "3AbSrNU5wt1mFTEz3yxBTgb6iCwYia5LHay18d7YdfHLrwV4JnTs6oW1whj6LvfCUbvtm16kbXBWb7KwzXYS2CXK",
  "key22": "5EjydGxHVgMsuYruK1jTYowazDap5v7CKH73dgzKeXs6xKqpKFhzSf221F9UcabbHuZrViw67VUtTzmXcQErtWgf",
  "key23": "2kpTuDsbUqCZN5jp6kScw2BZF95Q1AzstUAc7ePRcm1YWSmDssb8ZiHVJ46Qx6bDBmsEQAFxK1az3tY1QWEUqjpv",
  "key24": "yxetr6z7r61uGM9td2NTDMKLq3XHpaeM2zb8GySB8S8WqMmtMBgQgaBeCYEuikWif2AigW8qYwcv5R7yyeXxhy4",
  "key25": "4BhAzafVGJ6783jGzm7y31Cb2zziVMpFcxHMH7g9TSPzNVvJSiKK5UeXVZvYmiZBdvpgDaGx2GGtnmxeFdxoScV2",
  "key26": "49hAwvx6MUzBHrPhKUsudkYkyAxre2jRww3PRiriUGqUqWCfLMTZSZiBxfA7icLAArpLR2y343vHwctA1Hh1MMmk",
  "key27": "5WANAQGMMS5LuSMQb74TxZo3t39eAqHnrs7jPiAv1y3g67wfMiXPkuDGoFnWjfmHnJFmv6zVnYEiMEmmy6uJQePf",
  "key28": "3UTAqSvF9gsnufKbygMXA3pyT2Kx1LEFZZAS4wcUpCob2P883xMWmmcqFa1eMJotCqwdF1trbqzMjRYGipmf4E44",
  "key29": "3CCwmSVr9baDWy55jeh3CAJpdN4KeYGjfau6aWMBkrNwrJXY3FbqHALs7zuTEZLkNPGzj1jGBjosKHgc7Ks9934X",
  "key30": "66PkBN3bASDUMC7xyiYEbXLvWsrJQhjozhTBaQgvNqUmcVhoCPAm29xhE28ursvUzLQKaD667ZtLWhLB6vQZTMg3",
  "key31": "3pAX3Hc74fnuuQkqo1p2BCNHyS4gmP9jKU5ubqsHWpnxztJjjeJUUZeZunDrJwhPJMkyYqwUwUAagaVCJemhCMi",
  "key32": "bTdjrdb4Gv6zRm6RKyLu4nKJ4RgZS6DKSvbkre9d5aZ2AiBJTbE4fKBhTNBerQGPsftQap2JekhwVqRG8JjffXC",
  "key33": "65du5Drn4L81SHfxuZGYP1McugKTS3gmpBKeCTPm5TqZEs4g6vDGaxsjvHjWPBVMQB7HdnStw9fwPpXGtxshwRVA"
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
