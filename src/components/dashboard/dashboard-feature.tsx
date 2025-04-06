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
    "kFzqE1r4fgfKhodk3ay9KALGcWoYMK4YJWjJZEiMc8eT9TXD2fhJVLnGoCRCivDtRyzTdtjQqzjbqYqvCfpLVXx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cWcjnreCeHpAJC1Pw1TuVUvcKCMn6T796imWXP4qpDpi77BV1XMCemRj3FjummP4xLhm7uooFYy7267uMvyV1Ti",
  "key1": "3eQqMe937ABDLqUGFVmAKcmzoi69fUsWYAvKngnQQ6W4TjWQxoJDRyzj8Sp7PMBwpwcWDsfDqa2WQNnjFfimZpgT",
  "key2": "kUXAy4BC4WCC8QDAGFN8YhmBvbSdAtYjXe1k8qDaX8cAt5aPZARVMNWge6fVVpiFDpgL1JSGV6XCP96HbUkxSP8",
  "key3": "TEUX4pkDuKEt7ntLR6SNNmhoW3ciA21N1RYA6YPWaPzX57JszXoDytLMrSB5iH4kNHyXvA89S6Qhi9GFQk8ULWS",
  "key4": "2Gcu6aagKhgYqAQmTb5qTXkoQapZ6biaLts6wHkFu494FJ5ywZ9jbEjBuu368kcEKiaUirPiGi5J6FCUyDYQFJ3a",
  "key5": "2FmXuefCbvbk9ZfgM2m9KhNg3FW5pHHrpyj8jm2L24T4JkfjVpNntBW7EEAshpabzpuwWxC6kmtcE47F92WvAu6x",
  "key6": "2Dc3WB1QJhqpgPKbadVkvbZ3V5ZqWhYiEFqc4Kh6SkQ2VFgpNG4RqhbbRRKCDprixHNNerct29tSarPKqLq1WdVY",
  "key7": "3zuwNh3qKkjs9geexUJXKqetWYg6mFkfvkUtu2NLXeMyBzW2ALx7v8Ubm8JEoHToEGwAVEFLG7oASEgtz5PNaY1F",
  "key8": "4JCGPqwDJSzgeYphqr2sbc2WwktGobCxHo5BJuWtWKGtvwDA4T1RkPfihohY3cW1Zk442FTVUaRY5VedARNMyJaF",
  "key9": "1Ua8qWsHfgGgJEfi5xFHWsgZeuLG4npg2MMEPGaSGgUtScXDc1cRHW6N8pkKnRBphhezNFWNNhmiBGLJzULpvhk",
  "key10": "2zR5NasoPmz9vheYq7652FRbr6HEyfk8PVJtMKcjADYxgTKnBP2nae3TghRWc5NyQnhq3vdt4M7BKeR956PHMqdB",
  "key11": "5hC7q1oPsXuQtj8yNF8CSDAnKZmZ2C7trdYnYoCmbT3BYjbGbaA1VJWPR1L71x9dwpwupFFosnWrJ8gcJ9PnrqE6",
  "key12": "58mWC5NME2Z2zki2WyGrnY69LztYjiS1smm69cuLToKKTRA5YrgU8dKuFXzRR7XgrxS1WF2M1aDGHSQoBd4DsaN2",
  "key13": "4XQacnekeD6bdRU4mSoMzWZtyMYbsmK2ndVLxHsbYCi5dAwKc6N5bEja56V3q9iB3HwPj9mfd6Aapj8stAHGmJh2",
  "key14": "3857wX7Yks7x2VMbejvgRf5VVLz7umA5ihVxpuLomHxERZUDcrkMGowbwWiCNQ6vLreGwZaed5WmzQqHEgyLLkBY",
  "key15": "4MsDv1cdv8VmKBYKaJpzGmCYTTZ6196Mg4HudxAnyUBX4PEvTSQUfQhCXVR1FWpaMjGebvaXY3oMJra6y1Ythark",
  "key16": "2GYexMkgwz635yrhw4msJc8jWPwA2oFU28y1RGF4uH28Xb9CoddJvUm7rSAP4oAR8TXevWJVsuP6iT6RG9u3VZpL",
  "key17": "5BZrdaw59uZwQs129tQWkhtSNvZzEGmyhWGuMimHoRg5ZZvsWbkgJc3pvKD1AGcUtQWKL7hPbTHnj5k7FkVYF98Z",
  "key18": "32UnA6dAYcabyHhzCchUura1dMxuu7ewQqK5H58cLUzYbNJ5YkFNLzjihbEe3Lhpt2LG8jcaARWPCWm3kQxkCbBa",
  "key19": "sFAyb7uEgQuzNwVHm7jgMn6PfCtSN95U48gtD5wRrSaLF65gfiKaJuhuDDbVrWS1U1dYXwaZ6zXZALfYYsRFxUr",
  "key20": "63T2GcasoXirA7PB1dhgYvWs1JEkmveBVoKdQKC74hX94Q8or78NrD8YHPhnQzo8Lxm2fUmP5rbF2ni96gQ1dJHr",
  "key21": "4CAggvadCjSuVK26aM2uSCusQgw7iKYbHiJkMijQAF2xELnmo5zms1evxBDmXyUa7PxBSr8o6xXxuHh4AP4KE4zX",
  "key22": "e3sGe6B3nEGFgkyx4BvUrbRaRWmYCBEoGZ9FzRiE1GyGdQrvbbbvV6JFuzbVku5xG1gQfqHbApDTwkFFsANyCnp",
  "key23": "4jgu3yT2HMZvVT7baUPFaV79QWSZ8ZL9f8rDGBpeCAP6VHP7fGJFQwT8rGoku2rSS2TzprV3eVnyWvB7bcsbN7xs",
  "key24": "5nUpxGccM5iYLDCHsKStBrTqiK6ryCV3cstmzvAGfvGwUtqvondxjybkgb4eBYxBbs3xVXM5SE6zFzA2jivJq6E2",
  "key25": "4GP2KJevKHfACEUC1DbpdVYDrz18qnc4qBrP355hBGMDrr2qsN3Tn3NhpYViBGfEHpLbDmKs4DdWLC6qHaDKwBQV",
  "key26": "QUhM1pba6Mr6rimTop3jrvgziy9gMsxd6DzhMRDzh2wFaPo2cgmzFTizHyLkfxwAmFE6WgmahcHRCJa2aFUGWcQ",
  "key27": "2LSbPW7kg5xERScKnEpaDv9TMjBGLZqHR1oXhwLa4TDE9DFv4x9g1jmjP96s4PtfmCKDd2G7i36oumYcLkxXeZLx",
  "key28": "5pUS8mNGfFZS5KY5e3h4wfZmU36DoUnejUSejwfYA4pCps1BXkuXCXbZCANo63GPzSR5o4B777K24EBpaM9zHP9U",
  "key29": "3FGrMMT8oGB6RcX5ny7934wbrPGCtuJ1vKngexMW4JB8wf1ayTTgBJpDRttzWgdtDbEpcsaqoYwn1Nubsw4pZGNZ",
  "key30": "3LtZib8bobL718ytRgwMGAddam7X8JT3ygaawTaDznfycWd7QkyWKn8zJzqNSJU28PAoK6r2TqLFaVRcLUBFPuE2",
  "key31": "4Dp8n6xBgMT1vfifiV7gg5AJLVP2oh5duApjAjgYVgHBkujWXS8kBC3xeArCYnmc7uM1ixQGLov76j4aYbJbM6P3",
  "key32": "5bXVSwrDHVwG4C57MvHANXn5UGYiPb1AeBxdqGpJND5DZPNayVQJGJQKghvK3w4eHnjLQeK1yVSMwEq5vzoGdSZY",
  "key33": "4hdsLG2yLqyiMtKWKkvy7J6p2FM7RBJxpR7Vg1hTLmqJRNJQ4J1PBvH5iw4WWoocky4t37h8EuBeRfFyP9SDb7kk",
  "key34": "3CAuk8eEiM7bw1CSVghG97csR4VWT1uy14DeAa12JkpgDRj43jkJ697NggrdWGkU1CairXKHyWgz6pwYzKxBb3Cw"
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
