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
    "3jEuL76DYMu2GJnndZBcg65R67nvdZRQ1ShtnGFYNV5odxS7ccdTtjXWbgEqLo8229hpLktwgXdU5EqoD9b3tMhC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CUPqQuD5YpSTrXVczaCqX2eYMFbM3zGCuRnjSBoKcifCuqGAS91kEwWsn2msB34gG9jy5ssFVjb1eje846Dz533",
  "key1": "3irQAwcbEqz5tzGRVguTQhmiSssTwGNfz6mxPeUGn2WcvZ67V8VJiPaJqocgAsNc86As4EZErtm24FnRCdqixKCg",
  "key2": "5x46T6jRbqWhYQgXqTSMb3RBoyx6sGA2DdQPCq5kBsbYWoK4S7ne5D9eWsqpApv9cJ299LZwUVNWNn1V4TezKkuP",
  "key3": "38kxxehNihuYBgF1c5s7sZuMGR5oKhMp4jG5dLBSF8sq6LtgsJ2VuTvr1Ere5CKqoapsm7CoRR23nW7sNsEQMdbg",
  "key4": "DvA1BpNQeVNQyWatVx4qn6UYUtL2aie9MLYYELBSjrjym9v9p3Qga5WAQ4o3kTMpxT7EMSq3sBy5FscdTL3dev5",
  "key5": "BWLqAgC46J9GTDZ4CDdcctxDJjJwypkLbW6iXRiThWhj9eaJAyTn1o4R7Yip2DtezZe8hUJUJz2Lt8vamCrd8JF",
  "key6": "3kZ3hWE4YDBuVoUcRmzrcPwZ1Wg8c3SxJfq5xtqkdtmdUqhAaX54xPqpFgCbLiWjXsZJaymeEunQqKx7YKoafH4T",
  "key7": "3GRye7nhmzWKe5JT2V2d5d9tV84AjW74pi4FHjtHVERFv4vcDbHCMDsqDN7vpdgp1uwYn84dvzj4qsahTL4TnY8x",
  "key8": "4TARX2hVtyuXBkXAHC1VVKEQ1J2PAnK6enXnuXZUC5YJLyJ68ZoJzoS9VPWv5JSqJu12dhmi7B99HihQ4kmEsRb7",
  "key9": "4UBjYEzjupAMCMHU8C2vu8TvzhD5seAYDkkBcKrg1GY9axUVJg1N9jtHgcE1623C49Kz8dtjcEF4ADKZ7oACTjd7",
  "key10": "4joCCV3BydjcFFzoSLSjs5t1hLVEmDyMNav51JXwGkPFTNQq1ymttsmmxDfvAx8x17pZEcymKkhima9XJKwC6Kde",
  "key11": "218ZRRUNHijBGJU9jPPdepFfkbZi5b81KzzEV8G4QyzqnwcskPRnfYQScTK8AzrGqhWJCjuesWjhBNPH6wUrAkSr",
  "key12": "5muvr4b2DkYRBxxe1QE1TuBdDUsK7r3XjmHaKUqWx5Z6JLEBLrCEoiFw1k5qkwFvs4sTk2azTc7xCii7yrW1C2Ta",
  "key13": "5qKtCuksNqM5RtBhTiSuxXKfeo97Tc63LRyCQurPUZi69JD55FppoXyxTCSTavyYiJupY6VkJVWqmZBByy2Y7MNi",
  "key14": "2nM8bpDdAfQst59g7fRkKFfThninCeQKdoJTJC86dNpbKHDHSJaMUE62kCpTRVWwrYCiWuGH2K1EmDNH9ueBm6wR",
  "key15": "4sdLMUgRsEuccnxMLE8JDqhem3HKVEefkiXEtVhfUemchdnj1W8TX3FApQMvWLxXc4RhsWBLmCJpiejSXVFvdFYV",
  "key16": "5jPF69Wv5TjcFrvvNBgPCrVWmsPnHtgRosPJxfDuvhiWC3E44Z3CcqHmmYAZXxnf2AYFH9YPeFinCNfEev4E58Ry",
  "key17": "39jSLu4APinPqFPZRucrKiMGkSZietFkuRP9eitQNu5Q6dntxpXYvURhtLtzMZLhbLcXw1b7V1w6YNi4m5Qo2pUk",
  "key18": "3W58vUWMteAKifvrmzC2UyMbWJozVXUJXPYGLJcpnayHuZf8zZqbrZbihZfoUqoXfRxyZ7Ry7o8iVPaBtYPL7Gvh",
  "key19": "5SkcqgSUx1oC1LDnb9XBWsFAHJ6JKP5HCXc7omjKj6xCc8znb3NhiJ6zdmBpyaxVLq2uyepNaLDqYH4m9DVg7V7b",
  "key20": "2jtjXw1dJxumRmFNRgBzNLaYUkdrzD6Rh5V66uAeGcMnSNYQYcnDf97grerbRNXsXqYerd3BaNnpAsFgan3ZTWB6",
  "key21": "57C4rs4cmM7vKTvvkJpvp6W2eMwgmwo1Ws9HtMh1ukqcbj2JH43tgQG7RppcKWV1qTArbbvR9VznGtz3SNVLGUNP",
  "key22": "49V4RafSwm9BMEVLxVULTbZMUb4sztrqhMcMEsoQF7LNow1c7JdSwFVB8Q3t91RQ6m5ieauFKjou9zJzRtbT4ZQr",
  "key23": "24iZEDBurJYoZ18UME2R3ZPkDkCKANEsWDjSjea32tHXmtFBqVL6GvGZ8bhXqyGeftfxXkvD8ANu4m5rtTgHKk66",
  "key24": "36UWjrViufUYehVDYarWNXfHhGoBQgciJQukLBCHraALUUDHHNR8gBhR5ozcu8btxXPKuzcEswDvUeHEX2oMycjy",
  "key25": "2brwGF9F3HbLHYzq7ZaeC2FNGQNuxSbPtV9bzsADcTem6PvMWQvqEPHGK4jsiwBW5WkPPTtbjtzhs5Q77t7iX2hW",
  "key26": "5roBwdaXFXqSheHiLDRphcEBncCYa3ayfed548J6votYzM5YAFm9XXig695i2ejUD3R1r8V4WjaKQoR4hqV9Dc8V",
  "key27": "GRnsb724sp3zjFN3piVbRbFRVFMh4sR5JSMQaLoXvAvuo9bX3VxFtkB4fvU41KWuuYC1Yj41jbZ8mrzHebvijJe",
  "key28": "3GUaR6pKtHKioyvBJ8UGGf9BRWgonznnhVZh66Meokx8WurRAs4HXZKjGeDWQPXqKvjdHktFj4abfTCVEPLb74FB",
  "key29": "qjY3sQuaNiF3WbZgnCEuK6rCcBgKXCx3dXhc4apvoxwjM8G7niESkUqT3ah4LMSVvuxJbisQDfBYJBHDFXESCcW",
  "key30": "5Jh6B3Wf1VNC2BBCsCGvxurGWv3Dy8rYKyrpwMitfAwu1xQkWWaXBeS5iz7emAZnD5g6xVXsjs9VffoY4HXgWd5h"
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
