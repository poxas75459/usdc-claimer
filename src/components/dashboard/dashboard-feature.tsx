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
    "5PF1hNA1bD9FDbr6mnktYRYCsCiyQFXNocUG8XbwtYzJU8kjJTngJu1LSRXYQFhN7dXf95n32pkAZJvUo1rAzvmQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pa1NCm4BiZvuhJYRF76n1V8EjaqD5eAjKJqWEyUEWx8XSaPNgXZteuEGazXr6JX4mScC2wvHFMnaETQmML1XjeW",
  "key1": "5iT215zn2jNtXW6P6z4s5uFxTuCwoWfxPPLcvLc1JeKodLivYiWq9AtfSVPmX8g5y9n6kx7PkEGECYjDkstbAqte",
  "key2": "61u39UjoD2M9CmKRzxCuYi146v43CZbcviYuSFpX1ayzfopG9BWtVoRa1z6CMAUbb4Tivozd6CB3eNMxqCSEeurn",
  "key3": "2juLy64Qq3FC1okcehz6XZWRJgoQuUk3i4CpH5ruGpsh4gtjmgtaXpMPBUepP8rpNgiDPXGNf9iPDi4b29KLWpek",
  "key4": "28u86JcqZxDGLGaAyoRx4YMUs9UxQbgis7TPKTx4wEpjQHvqMKe9As7Cr5Ca3BbEpCvyJbRyKXvcSMLyRngdNT4b",
  "key5": "3GHmSS3Rv9BrPhjXKJ6TeAMkHMLPPu3kKDAcV927KtCPGknLEMBJquALxe3sgBoSG9mxBG1hpwhiEbFrnDpSGSz6",
  "key6": "5XNaY43EXtZXv8vwEZSwBKFnucn4z5bMjRuHUX76zvaTwNaqa7TSdLL1TXnQSAxLm6WDAoc4AsWQBjsvmmXMHMKN",
  "key7": "4i9LnL7o1rwmbBtJX2YpcoaiwuFtFE5aJJaeDAEMTFxGHdXapmaDdzvgk3LLoLoiihQBHPUBftFCHspx78oPiPQ7",
  "key8": "4LQQKw2aCoFdUa9GWJ3qt1hhsve3Z9U6441xUgm3ymFDJGHju96bEGr2m9xmHLeYPrQndGdAMWvjhNKXpsdx1Pgv",
  "key9": "3xZCdog2XnoGr9pi7yMX9DGSrizV9V9nwCJdwCZ8Mdf8Ycx5SRKw69a2VL1PkbktHjPFkSVHxip5KjN282bgyFYm",
  "key10": "4sL1ZSBN6zQHGZbetDtEMeawhBpEpeekpsMKrLSqRHTErakcnSJJHaZj4EYgdGwjhLk9NzX9EVvHXsQkHVD1WLoQ",
  "key11": "65g9p1xGvXTCNuYPSgBv47yrmzYYBaK88JeAF3XVnqZG2HtFX2NG6iSmXYpBaHD6FTMbqv9b6zXDXRK4DxwCoQwb",
  "key12": "4ySHy4ikyPwoXw4iWQNLCzsqu7TmUDCW14Vf4nknEJdSHLKYTZxCCNdwFdimK93GezQvGBnxytC48Z6DEAPv3ANB",
  "key13": "FHyohpKbYX3eLX71cKt7psofCKQLPJm2PazSbcXN5ZPseLNVg4DUXtKx3jhDrDBY31LxDCFmeeLNtThKL39ktJX",
  "key14": "4eD1x7sxoV98FrSeWAYuSsibucaon8MWXfp38TbB1HaS26fQpbPNN3JTQUNQGB3rC7V6vRyUdzNqYtjLe2msz1kb",
  "key15": "CRkYEUzjYaz6jcErg2L1u7x7DmPyqx7P4zeaBkad2qRE5QEWaDxkqMHDT529yFgwVr9mMWYQSTCHL8QJ1G2P42U",
  "key16": "3J9yHbC8W1P7NnhKrm6PsnutsWvimq99jfxAMMiXyLRfVtKqb2L5APkyyJqwxyXLjQvA11u5RRGPWLQmbbxif2TG",
  "key17": "3AZ46UhjVEP9prkt8ZF8f6Xf1Kd2Jy5xGhX5KzhYZdS4Typcnk3VzZJnD6rGrffcVvJbgYPna6jaAggnFxdogy19",
  "key18": "3D4xwXnRDJWN6JX4CN1HAiqcR6vrCCNSYo1iyi8stfgvxXXnRc7A6Yw2hBMwYC33oLD91HduTybqhtaf7yzJnQaZ",
  "key19": "5YCvCYd2rrNegd4L6TbCUxqyttyF8qoYNaGLkXRmot9JyJEnYPYduEoKndzU2i3vojUE5neaaE37FC5UP7vq3KjE",
  "key20": "TQwaiiBMTEw2z7swHQyFBp4eZNhrQjNXv7rvYduBTdxQawryMNq9gbiC6aBRf3A46EqX9AF3N1VfcmdVB6witPd",
  "key21": "4E5gfztEDrNsEpx5zKcLhTKJfi5afhTPuqNDSswiM7uCCWEWq2QFHn1hNCmbCrFm6B9s8tk2fD3SwcG4L3Y2avgD",
  "key22": "3iTm7a6JaUpfjyA7jEoJfjBYihsKizcHdFimmQ2YNrHokWyUSCSffsUFCW4Tm4NUY6YFVqDhCiyyUih918QvyUSD",
  "key23": "3qRivh3QzyWxczv35zrS2KcsosuYrzpjGHASyinf4392obeoUbghRRK86KJ84faseV2evoeAzq5fzNJzwptTCpJd",
  "key24": "3k7fYixULjrtYQjdxGRvjXdWwhUrkwV27qFxUUZGvy6QZXmpjZKkLU8MAPvo1fd7nkwMGz4r4CC8BqLcHiUT9ktv",
  "key25": "BSv7cStgX9bgMZP3eyr3KUAnkyaMEWrobwSjBEjyYaJVT4frqY2p8a33NsZkdqgtteXpVfbMsytWLjdziEVHgjY",
  "key26": "3XinzMDdtKrEEsbY3SwF2X3m4b1QKgnc9UPq51JPSLjphbbdDTz19mu5AaYKfvZvDfTWPoXsA7h584UpjCiFq9pq",
  "key27": "3h8AJTSMJxMkvAAtK2zB7RKjjTZ4f6fADEiWEy57xFH5RTcwjtBqGFk1nV8fVqk3gYTMJsUKAhSDSPW1pemD9Ae6",
  "key28": "Wew8AFy3JndBY9c3hF1V5FuFpjVnikxneqebkU9fXL3wE7rqBckaZn3pv4RHdZmJ6VAHYVBbGCs2iMb86FRJC7q",
  "key29": "bSYz4fY3NZCC8bSwhF5fxznC7SYedU8XdwrTmcm54f2Y9gdWwmKYeGSLqFcfoh7HdPyFMcRNDyFiAJhB1KnXVHR",
  "key30": "2e3UDysmPp38kVFKV7jcMq6DbdZtcQQqm6bxnYtPNrzJPh3o1ZbYpxQtMd2x3689rbZtxHxYRXeArteai3F8X4CX",
  "key31": "EUJzc3L9PnzHBrEGTgyXGuLDBdqxiZ9QZaPM3smTfoaQGTmJh5PYePok5HGab3CmakR9Y8tRznmqqqe31Z8sV7A",
  "key32": "4VdRw9Lv7f8KNZh4k2gS33XZvAxGu4JsMrXJa2h5k4u6Zhyi4D7ugJSjcsGszp6M6zTypSL8cyFSbyc6A5hzR1fw",
  "key33": "5k4xeU1hoNy2aJKXvjpFxQs7NZRmP7D1D9UawUearqnTwvCCjQwzw75BM6AkSSXRhqj8aWWMkTxZdjhzzp6zjgC9",
  "key34": "27CSyhENC6U8P2skjRckN8Ei1neMbWPEc7jZiPpfpn1aYh4jyb1Y92e2ZL4xVCBdUzz89DbF7AQqfxw278DrikNJ",
  "key35": "3ysDcSd7ZGFvZ9Fno35g6gaiBNxHLsGLP4KDzaqNCGCevLt1TXgeGwa5bDvXizpPZkXNK5f9nEGUsQzMGGSihRAc",
  "key36": "bKf16Pfz1CF2NAWhGg4gs4oJgJ65iDCTd7EmLiu1fye5W1RSf9itxD5mhUgZ2WUHk2Vvkgrps7H4eb2hemozwDo"
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
