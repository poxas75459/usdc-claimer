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
    "5xgj6NJuoRar8rSDNVGzykGc3uvTogUyvL1j6jzLRCfcc26EP1b5uF1CfAJ89cqRF3VHNLbK8ks93EVGhGebVeU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dTGNDgX2e7J1MFVxhERuBcKmckjrcYQMUWWnWDjn37xHCExkdkf4VbFjsqhETtNNhFCRJGyJ9oeAttwiMkJ3JQ7",
  "key1": "3UmSNJKJFAwVtJ5NwtghTsKVparS8sWTDgK71o3VJjExRZsrTNdxtd2qq6vrVcirm56TJJDgRzayuxT42Wodv1LH",
  "key2": "2ZXkbT1C7QbkGCRKDJvpnP6QGMc8eQhJGBK1ZuH4jM14znc6vXooZdue74UwDxUGVw6KThxKF47zLBNCygtrpf5c",
  "key3": "2E9tmk3g2ZVNxSqZaomqWG2RsF593ryXQ9GMxqneC4qRFtNVzepyj8cm69MFpTcmZADKbE7K6kCdPs8dqyLhYXeE",
  "key4": "sBumKM67FBQse1vYS28GdBaxmNo5ZkAmTuc6Ev7LTCivnGrPwKiUVmV1Rw5da6cmZaf3nk3kZKmAFLEvzJFEYj6",
  "key5": "3RzhRbogtWmbjDGRCojTP2zZP9pMiuc4eoUeHQP8UYrAouALf3TZRckspzu2EVrJefxctv2L1QEitSoPhvCxbSYx",
  "key6": "3jFSGptCzGgbiMraCxJYAyJ7od1KqPzwR7q9uzzRLxHB4WEsnQoYdrDDrWcnaoXTYu1iS1bfcV5qvRTHQSBF7Jvz",
  "key7": "2TNQsWsmuFjRiJXXdEY9ft4sJGuajD2Lb954ZpeoJc6M6uachXM9akxRCVUY3Ty5pi6qQFTUZ4puBXLYND47iAKX",
  "key8": "DrZvhAjMcaG29e98T2SFCPoaDtCVJuNbQafHDLNH3jAdWAGgEHt3u31x2q3ew51QasASyukhDmbxk5Wsena7XJC",
  "key9": "QUadLeUnrTLbcGXKitUtfQ7mEB1NyCbzda6QqXokPsHwhd88QRJM3jZDUP5YdMA44oECKpUzsMvFDWeb5ksHZFv",
  "key10": "5D94prbwnKBC39H4hv83QBdZmLb8Du9zgratfAumemwdJr2rmiYyiHpEJGRZF5mrMXtXqA7Mp2qfQ46Uj9i157ZQ",
  "key11": "2sf54CfqnK6StQ3gqbtNw8j9LAcRexqRRXiQkpesPL7B4YTCqqz4b6NzzCZGPWchufkCEmvVP6pgLucppLhe2uha",
  "key12": "HmYfqRziAtLtpi6xk8VkZkJpT3YzsTRmHgkeRVuqG4S2iDwgJimFB15ssXjkr2yVB9hvAFgsFZp6fvPM2kRutBZ",
  "key13": "uhMbRk5Qv5YH7YuqnSYLLDZFpWJp1XY4bK6URc9FgdjXUz2w5NV94yYevW9ymmqMYZ6Monjnr95v7P8QW3AE5Ad",
  "key14": "SZaK8WCmFh3WCmr8w3LYPJB1pieFLSG5t1jDpxJPwLnjhjQbFmdDahTeP8RQEDDtDzLRfcNK2ZLkkHKXE4eJJ9s",
  "key15": "2cmSgf7RouiaY3tvopKS6aGsoYHXDZNGGWVsWfCPM5cM1XLKZwHReV8MkcsEjFU7XFvWYZC1SEwqAp6BKWY5CZq",
  "key16": "621P2oyKqHTuXGzivktDDDzpBNGKJt7oPoFr7j3pdSL3n9rS3mA1ayGQ6vSNeJHyeqiH1G2V6y5v95dA5XFMyJyK",
  "key17": "pcjEiFCFYgVcrQWKKzwiwVzrdvbyEDZsVxwqSiXVw88FqjJVMg1yigM1NVAiC6b2SfSbJBq5ECbWUm4cmuxcaVB",
  "key18": "4JuGhExkzzFdn12x2nGoQgCCdyWRb7V8Q32VutoH4MSE4GmxitFzwYsUsq2tuXTzvXkAHHEqSMPE3WitBRXPo6ce",
  "key19": "4r4z6b7SeCjiajZcD49ErmgMYZm8DG1gvWj2RadUp6vUCvJSHVHdCGBxpYH1FW5adpDeDE9csUvAMcmf6M2J5mNB",
  "key20": "bpRCHKcvJ5F94b5i7YCqNCG4A5Zc6DmqrPiLCzDkuqXrmQk39e4TNxTLA1hsPgb8W64VYaNPgLcm7HEFBfxX69k",
  "key21": "KMdcM9TtdSFqRp8y4g6MiUENzhV3pJN62f9zv63A5vFd5LYkN8NuP766zkQSqbPYrJ3ZQrbjPrapqyLGPoibw73",
  "key22": "2G3jL9NkiCkHrcKjggjx6h9wamyovKmDthdSfBPY5TagzgDr2msz6r2o7sBcq7PUF4Eagu1xN5W6SobNTNPor6rs",
  "key23": "5V7RaMLGBL9wSyfnYbVY3dYHgtx6SojVwGmznEvcqijNEaFLR6MCYjVLb7eEGvBV4C7EyA1pNrHM3w8DqbCnmzXj",
  "key24": "2J3HBw2Xaan3PKQaHh5TAt34MfVzc71Py8taJ7cCHEeh9bvui1bWeL472g1Jd4ic14d67x4Hx7T9KSYJMtXDjjfn",
  "key25": "4Rap6Qp2YSVkZMo5CNby8JKq8x2k3KcAstRt3StPR8MVuFijoXSqzURwiQsAP7fbxLdHfKa99mKAZe64vqFbUrg4",
  "key26": "5JvqEhLCkFuJXeHZi9ayci5MR2ph5DPECW5ttQhsWRY4xyHD6m8khG8e9zoD2j6PazMBMP5s8LfcoRADjat4THaR",
  "key27": "672ZY28qCYPADmLF3ncXfHxrEAEC9xoThKF1PjcFB5t34SBd9Sio2zfmS7uW5NaBoDtBLLBvNmNxJf2Nvi5X6QwU",
  "key28": "vC2WtXqcaYRqv4JZ1BwBkyoxkLrptoipHLQPUJdtBQZKV3kQpBmm81PK8pkzGi1ExNa2YkeVLjm6CMt4rBLJN2j",
  "key29": "3616AcBRKkP4bR2LmAWzDECS5qHMr6yHVWiyRYZ5Kt5aouYRDDBEq3EeGE9r6nHrCTiv5eMrsdCJE27EyVBmaoB8",
  "key30": "4WY1CHAFNJkb5vrKMhwBec34qMBMMaXmWrkwpChLHiZatEFuTVpFgZNZmYksBkHc588mAYYzrwnKAiTLXwKyv6Hj",
  "key31": "29jjBXxRQj32rKC5aYs5Zc9LRdZZUikyUVFVmFUWzgP7gMjGhXtfTbkDEUGu9NVUEDAdhW9AfCMqKZ9LzNrJJzPv",
  "key32": "5JwRTxTZ4rGw19QwfBX7wuN56v8NZp3pLvtNGLuD7bfqDvPcAqwXrN6xSnKxCNz43YhaoPoDZ5kGTHiX44cnyzCu",
  "key33": "5DBys4QmgQSCqDwL4gqdhpLgi5LU5k4gTRYV45AG1v7r1WMaStQidEgyHDUiCm9Unh9w7eqPd3KMJuDHzzB1nsb7",
  "key34": "4SaR4XfkVBLm529jKPexgSLHXysHPBfc8RENUt4fHvenVdzNAZw6V3WRFKYFPMArFvr5LDNzsS4dMtGc9inYbgit",
  "key35": "4S9WaaegVMsspy6jKBfBQK1rh749rA3hcdXqc6Jiq73ivkCKFLVZZwwHQPouf7YaBD4raRP9rHxLZ8wNFwjt82tZ",
  "key36": "2qga3p6yXpnVq5Fxrs7QUZ6P1ozeUseckpUxQGrLjvk1aiG1dYi6RxTofMuMAJ3fxR8fDqF2459HhsLneNz5noaL",
  "key37": "2YNQ4C9wQFLhnEyuF9PFmXmXq9NJGQRCV2qqoSVnA3DdzUaNNhCFJMWMPWkdhqnyMGvsN4ZAC74Bmd7MVHjxWKpn",
  "key38": "459ypdrgn7HmRkS2P923rR2riHWwoqCmNSPjXJmUQTfDn48v5K1yAhqRqwUzEG4JaYoGv87YvJZQWrTdKHKFT6wm"
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
