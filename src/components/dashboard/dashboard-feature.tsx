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
    "4KAeRkGBi9ohEYeAUa5iqVxszrUkBqvGzpVtYRz2UpoM1DRaQ5AnsPbxeopUqpEivNYVaJP4q4BaYS9fKyTcxAGq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iveC73Uw41KriS2aYdZrYCuqDs2qQQBTgaaJnFK92BQC745enpw5sjo2HDc8FuA5C4eUPK1CCHiamEkSEaPq2zn",
  "key1": "2kPZF9GB7fFg8t8xvqK9R5okYirUS9gJSp6kXnE9wZRFwu49CLVTsHuNkeVjmddSkMSJH6drUgL1FcQqGSARA8Xp",
  "key2": "5kMyuWvhzuVfJ6UA1RNHoj65LYLbhDa2K1SkpHn127KQQUdZ34Gb1NianEE192jeogiiaTQwpvGdku2DG8Sws1MV",
  "key3": "CzQuujXivF7wZbTvYeaY2ccj13smYq5uccbTWLA7JEdPMQR9vock5oSoccCgSrq6LBH1e19vLLZDyg1GV5PygiZ",
  "key4": "4G4sbsJ9q2Xs9xCF5mfxHTnPR7y9Rpz1EGCNBdq2RAQ88LhD9vo7uuf5gbQ2VRddSwPj2hRQ1f6bA75djVkf8rMA",
  "key5": "2Rmf7WqqSyWnxrh39csw64zit74C7KwL5hKuB1kFq3LGbbSxecY1VZYGBmGwPNkhzVntn24uES3wpoA6ycLFjTHf",
  "key6": "2v46NNppMA5EJkaqhc59Cp795RwZRtfX52d8DvRdUtn1nTLMa4zZnc9eBwqa3ZGzfCX8rD9KPNFsDGVLL93SEnqj",
  "key7": "in5Njm3m9bwYtq5atd3FY1cKYpXEhPYik2qa88zzABfd7GfAwh6rs96r8TumsZXBZcdy5eWmNKqMYKG1DdhxdCc",
  "key8": "tsV5jtuHnyfzf3yjURMaPNNaLRUTzo2qnDSPQu1Q2SNwdXKbSRaHPcR1ExnJCAebcngCCYAFpg8gr7r7x1bJEgf",
  "key9": "53TA8d5TMABwmQndQo8sB4Ejp8DFYHXyR1xK5X6Kyj3zFkET5QvuYTLNaptmX38HnhxGhqJAGtgKBGimynmowsiX",
  "key10": "3wRkPWwPSE7kDrYrWCQQ8inn5DiSEdVV42JvgUngEHbTfepooUQWRJVCpeQ4CsxPbkTdLwp8jspPDKY4JP8BXWwb",
  "key11": "48SQzjRbekndBe8TTqq53gTqPbSUT7XVu6VtM8R3xWqedHwPNEwxRb7qC8tk96ukHPqMRfTk7twjwDnLwdyeStBw",
  "key12": "4DxfivVHPQfMnBvRB1bCaWhWRsPKXg4uKbS4EQwRPQKdd4sy1kWhXAqX4YofzLqLSA7XozoKET9MiJJFyKGLXVyg",
  "key13": "ezBVrFMiQn5W7SpmFTghVGFMV2NXFJu2MTPuPhPeMwoLkUtQokHig73cJRMABMeiZJsnwBLysa5t9zxhp8a7zBf",
  "key14": "5yDhMHcLuUoNtA2D657aLy1sudo1tKzHaSabPTTkH3h4GaTtVkhtzh1Y5mXy2Ca94ynkDN7yYiUh1HZsvC4To88q",
  "key15": "2MHH9R5NwH2K3ni2bggkPasJ1Dnpk2bJT3hWsxFtZ2zVsqjZSfzMESo73Dc3YbgcuRmekBjyrBNxm9apfxk54aqD",
  "key16": "25Svwym5sUevV7bmEhb1irSPM1hyuPtrBexvp1hwsqWSSgsBogifS4jTUdaZ6WzxFSSVJvb88XPH9pfgbBxg251P",
  "key17": "igemNDiwh9S2mWrpA91Ke95K6Y9s2NKziLHwrtArP2GMyPEMw7zz2qVS4qHBzfJzofmAcqaANafE6P1TsCQv4XG",
  "key18": "9pDR8qvPghhggLJsrKZi8q6GXc4Q4QmeJ2r6sY7pwDi3F7bV471XyTqdffSrvXK1YQ92eb5WUyLHUT2KCL41y8P",
  "key19": "5R4vamQYJyMxGSPkoesemf2jGz7d8NJoCbYmyPh5VfARpLFLb2oBnLEtrzd4cRYSsdDbZHvhj5ifQq1qiaV43AUo",
  "key20": "3akL7zDvXmSL9AxuKhZ7CnmCNcnKFSFToBjnu5KZNEWoK6SB8PVrk9gtsr7jztJ1u95az4reDiNUCqS5J8UFL1Ng",
  "key21": "2K4H2no2W7JYoE4jbqrPVYu12WyQRqWAvD8odDcfEMRPeVQgfQq3aCxZSeVnsJBwHTDijMZmpY9FB3ijw51TKwny",
  "key22": "5aTnNTjxZ1djV1ARQsmigLpK1dxemmJiJ74ETFAM3LGf3jPVn6DvrH2b7nxGt9W1CeCDLFqpyVd7HB7nvYzzk7J5",
  "key23": "5LtZ7HbJbkrPRiaHKiidf97sa3RmaRVeJMFuVNywbsRvRAVStUYUWD7ayHzXRjGyJckdqe5thZuxVbRqvXYV2r8d",
  "key24": "3wroVRQvfdFAhLypEzoq43LAXzjdMy2SerMU6Ws9ncEpTUfxQfuLnmSbZXFtt2dmYiv3TH3xhZnQ3KQpA46VZ3pn",
  "key25": "TKwxWxMSsLugHtnNe792K6Z6bYxvapSd5qDB1frcGwFQ4xzdCChcy7q7QQJm8TqTamZ6311pkRPr6hohpF37x38",
  "key26": "61sKwAu9BdynaKZ6nBYk4hndrrkJWv9FedZ8K7c29ixiCQtzDna1BhFbokNEMUhg34n6XUpprw8DdzNYPbRpMn5e",
  "key27": "5C5UWk3cKckYhe4nM4UJpCQDcRJBKCsHB8dpahWiULCnCkyw4NcGP13jrWj3UuXfuinA4bUGkye2sJT8ksi8ZLE",
  "key28": "2WrLE9kaRSh8BxQk7jRF5pjbAqTDzocGSVV1y45LEvcn37CyaCLh1o8wrooFonSG69qLcy4C9tucbe7KENAqtU7q",
  "key29": "3WtgvzbJzejU3r21ZoRc7nZeMLVeRVXJTFS5icf6bZJy2zE29WE2FaYQ9uubmtEm5LkiKoQkqE2NabenJnwFHWDK",
  "key30": "46rDr4mYiZ4u2J87Dog3TiHKoCUoYnaWmPbw1uwD1sr6G2txwQkV4AqSiX38daXkVu5fCTemMuwZSL7uh7ecNWLJ",
  "key31": "JJHv2VGGfrXfjaR4ABRJwYghZyZR1So2wPbAdwKX5WGWNeiAVUwCtuLBQnanRgyqNDFjfdaiQCSwiLCbzNxtGLh",
  "key32": "UQsLJCKbKqE13f1n9pBCk9rrZNhYVzCyCZfbgZJ9JM8SYkY7WoDZxR9iGjrnqFoCs2UKJjuFjop2X42godLSKDs",
  "key33": "5NztE67f4cFCZAYq5CkS7SovLqFZi3rDEUgofr7W25FxfLM2EgpccX2LJRFyaZuby1MyvKf7XZnk8Jcz58y2GgCU",
  "key34": "4zSQtW4sCeYbgN7jSaQhuh6mW1z1JqGLUCsQUtZfWWuw4xLqETuqLMfPDimLYpbvi8fQFtfNtAsCvBYRBstmytqB",
  "key35": "2XMNg2MH6nqsZz6Ya23Y8B3dV3o83NpV5JphvRvHfaGEAjMRGtF86XbZfTfkKpqBvKLAaunZ7GNTgpzXeaMPn2hY",
  "key36": "3LmA4HN7G4Y9xVHXYAJpeuzmNiP53mfobXgkgAQrJnEnQEAyqGyHVGoi1sdWzv1HTL9Z2RbR8YmReNNWjn1dLbnK",
  "key37": "5ochHUhfHG1ucucTzAjAfBWVfcgqJRwYzQe4448xZpBtLq7VFvr1YiQ7QfWxFQGbeQbdosrPBxZDNRNHXtJ8d124",
  "key38": "466Y3pjbB1BZh124PZKBdmA6aMsCTMhae39qeyXAGyUEtw9PSsiC9tJkxvdTGGWYQ6WdXmXvmKVji5kEEcMPpUuq",
  "key39": "62dJNQfgLVst4TUPackybJGBBCkSqosDyPQcpntRy91BfDNFfD2KkeBSNuSPiQBNinoPH4j7dXf6xUcJMoU7jWAa",
  "key40": "5N4nmXbJYuG2akfndKoGkwFtcnzBvH7NBfL6Y2q95k7P5ZcRjMNKNV5LBzKC4YBCfCWyqfELN9H7ZCpQBgHuH6E2"
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
