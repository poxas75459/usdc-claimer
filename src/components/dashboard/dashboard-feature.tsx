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
    "4F2J81pDa3JjkHBrZBizz8NvXTUw4VRqBYUSzm7VxyngTpyifmsSZoLK6V3wX5LgkKXuryMVuuU2yEmtHLZv6GbD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zgehYTrsvzwVnjiGv61YSuV6sqh3RSRuRKTWXfoK5P76sHf1WwYEku85TMMZFdzckMpPHYJpP5Yny6xvMkapbRv",
  "key1": "3b5DxWFQDuPXSXWRC2E9ssopqiMd8G7wsjLsmvTtw1MP7sK1JZUeWYHYdE28sEuv9KU9kQZKgB8H4mLCFEX7nuxK",
  "key2": "26LaHLxu2D4wxJSk41sn3QN5C47J8FK9sp8rLeKJf9He19VAA9eopBHKbmHc6ChZ4SjCfmr4f7m6txZC9e5Hez1a",
  "key3": "PHCBCQXjkgZgizZpUjppVTt7z5rwKeiV31jFncMTpgMmHKAH19RGHma1q9iDbBdQKvDJUfzinErE6viNEqbtGkX",
  "key4": "uQbxZEjDgk9Ba5M9ywFpQEi2hs569XV8imeb8jLKpQ7njYnp9jpNid3VL1JY2d9zanSviX1TjiQbSWi3pvGmJoq",
  "key5": "66LJw6fefD1dsjxf9nyn74dfqHutVSquyMPC6Eggf9eqr5rgNmT4NfjHoZLio7aVEwoWKBCfRz6CJfbTQzFw7LfP",
  "key6": "4YghP84Koxp4Nk8bkVAtGL62uMo2KfQtkb42rBL4N1SVkpsJEM1wJU9R4vPbrdcyLKosabVmJCuEUQViquQtNDFE",
  "key7": "35XkHxfQyEDdQvT4xdV4NLrfQs2Hs452KRqSv64H3dKygYVqw4Qgj5ZUL6TejSAHBTUMb5qtb1ty2PRRU8X7zMz5",
  "key8": "4WRd2gwUNA8PvvSBhJeLGQGw2iB2m2SY2gFJPREsNcN1jcLM3nW9hAPecGwqD7vpkA4Vsa4eSrAbyDUXVsatthNi",
  "key9": "21HJQCYGTEsYk6WJD6YMrYsNVGtqor3RkwDnVKe85834PaX6xqYdC4aiUPPAez6BiZP6CfAfH5UsD9RAZxknLcj7",
  "key10": "3Bc4Shp6dRXM4GxMUzkYm8BnK8ygcqb5SxTVcrDMpqxMyMqELnPXhps4tZa1tXdZUD8nGHVXSNqq48CEfKMJmmqm",
  "key11": "2W71PaKxgqJScstb3y5FUioqCDojSnQtKstWjd7yTAVEPK9kPcLdLJvsayHpuTC6EtMPXjkeRdTVT1TjWR6B4GFG",
  "key12": "2gtCbF3PPcVJFbYn4kLrFxAxm2aaNpkTQMtSXQfzXxUUADSwJrXD9AXKwkHQoh5aVzUmt2hN1GWGPyWNSQSWyNBx",
  "key13": "472BUHezv9D7y3tmhuMZL49qJJf91K7TVpVmpZ9cK7Ts8qUNZ4PSpz6khfrG9afkkjxf1DBX4HE7soydYXBPebed",
  "key14": "4M4aS6L61QHFUUcF1BJrFyvgJx3ZK9f77aqfsgHahsW9DxA6AY14Dzu8PuTLNEZFjDM9iy49RT6u8fj7TNoDnwQH",
  "key15": "6pd2xnFoKJzJYbjVbdAvkgqrRde23SYP5xtr9xWkYCkFkLcmXjaxEMtSmpaR5vFBJwoMbfVEGDQjqB5MuQ7saDT",
  "key16": "5eyCrWNjr3wjNwaFFfM8sU8wKNLnWyMqjpMrVA8rSBMWwb8X59P67NStQKPoWtXD9a5RkYrjuGivtrfwoRKuXQzA",
  "key17": "2FfNMKFJksBdQ1RR33BCf2DKrWPfKDgDNma81wFstB7UDgD8ckbKD6MJT4BKfd9T2vZ4BksWWE9XTE6dXxQGsF7C",
  "key18": "3G1tar2kJ2NFd9rKYin1NXZcBJeuncaJj9GjAd9cmrUMA4m21j2cDvmH2JxqhNiU1wqPY9fXv57UnAPX5p4Y8qhP",
  "key19": "3AuxxfUiyiRuTAdnG6oVwEEq2ATTAVQLbbHxqiFXUgo2D3fiq6qctQH42fXd4QsXstaAUxTrKxY2sbLZefXcxtux",
  "key20": "5YZao6vWoyodkaTNo9wKNSwn7XtN7t4dxxezTfDLyLUgCUdBWoyFyGR1PDWUm5jSzV85GgQNPnVCERocGVR8Rhbx",
  "key21": "2jJwNQBQzKynKWRr4eWWdqQsi4Ao2AUHP2L87n2GAsJzvEoAQdCsfJauHQiRJQZgpR1nCiWxpdasqYyAbUYuXSKM",
  "key22": "3oQPANtX5YyNPUsLAU5SQatD6DZgLJwAbdbgXHSqXH7yuABCFvXTnSE3uk2qDst3Hv9dgXC9G7WKhbNn2GUTUNSc",
  "key23": "38ggLXAeLJVqujfm7fJ8a4QQaMUEqmzp3rRjGTKcvpSZwRHrHNDDoh9Dm2pkdKrioi2JRoc5Q1wNKGzazWwhHu5g",
  "key24": "KdcrHF6TTM7ekRe7AYwx2ibEKefycEPHAajooYpxTcXi7VwtPNBTw6i8zpmAsyUafbXT1xGm1ta3ZPRCUn862ou",
  "key25": "3wEobTuJKtz9RU7K2KVxF4kwiUsz4GcrbepaPWmB9bMFHji2MYqRBS5fhgLDSkrraLhcTMkUrfrjDyQAvFY5FY9B",
  "key26": "5vg91G2CipAVBs3dDHaF4RpSQz4r4sFaQ8ZE4zChqWY5KZqmxziMRCbRSWe2K3MoDtkcAVURjPMokAbpRuhSwg7L",
  "key27": "2sZvHgx7k966FcLhCigurgPcpvuC7tNafXmZGpCi8aRotqM4K3rejPVCEAcY89x6esRVBfpu4hrms43qqaUbVdXt",
  "key28": "3au34Fb1bsszenQpbD18euRjV25nrTeSVw8BjUTxaThWBGqmYhuc2MsV9nD7fKBdHyzrnfdZYdXhBnFC2WpD6mFD",
  "key29": "2bALmavx2JWju9s2XQLmK429Bq1GudEYAp1B6yKrxhmaoR6L2mMpiW2dxggUN18hWdGKgNmAdANWgcHiBfAZaMuo",
  "key30": "4Cv9d53jFjsGHBGNza9W9nZhSLju7fkptN2jgWR1DPeCVf51r8gHG553azVXF6a9dMBn6RHhMPXbVQf9CYytu9YQ",
  "key31": "99FJ1Ssqgn4jtex12NoVsGwMDA9Pfmd8Y3p5XUQvrrBWVD7TxxDrvK5aVZSYewiqAt2TdRia3Efhvkqc5VjWvL4",
  "key32": "65SYxpyS3EkvAZih28vLLM6nWxpygMx24VCvbAp94Xwq1HNzWcjqfJ1ky2NDFRamxpVpq6EHmv5Pnd5sDBbpFTPR",
  "key33": "4wt26TpgbgbrANYquBPibnyfUDZJV288vE5MELySXBYfQpRXxmjrTnYBh79WXEt9d2tAFrVSTLBiv8cJQauT5z1c",
  "key34": "5dZaJKYqzfwKPcwrK4mCCww8DNjce352yNwLTShku8wPQY5xeC7nK9KmtUonWZ5Xdua5hJdjnSuPisJdGriBSNou",
  "key35": "5kmKXudE9d11WiPndEsoHDzrBZYJ8SEMVmJpHS3iK2jFP2ftP81pqbibzWqqsAPxgJqfaBrJNNscgXGWSWjVYazj",
  "key36": "uxCUN512Q65dX1GZ9Uu8bUnZhQTzMneuoN9GhdWfA41AvN7QNNS9wAVHJXcHnHxKmKqzPrVeQVFxjAyidy9jxyy",
  "key37": "5bxQmBr2qQLEfj7nNj5A666HWGyEkQXqhfhYy2vqnhtb7ThKMuxgWZsuzKrntAWuAdtAByZ2KnJZcnx1HBb9BKET"
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
