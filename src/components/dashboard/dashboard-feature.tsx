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
    "3Rd8B5BWNrLhB3vQbcaBCKeL3wt1aR6HYALrj8pXrEzSx8mgZH2z3N4jB8JbBLUk8Tm1PqLBft6VLLFa3w2TzFDU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1nbadUMKkEfjtNHsCfrhRGc2eRNgEpCzzdnsi53U2EuthC9E5Xivvmun9QRSwUcH6S3HYEFNzB1ERcbZsaMdjrN",
  "key1": "56G2Bu4FgE81guHgdjpeaWifPnU6BhxD8MhAJAidiy44Pmx2uLdyFs8M6YFVKTuXaVrnSqpqfRguwrgNETLemAGv",
  "key2": "2ojFE4S5mAKydCXNwqE8kdKPeuVUM99SQfopbrbWKnvSQwuYm1dezj666fDFQhuqZ1TYgZLpfsqoPJyyh3rUAkdY",
  "key3": "CDrfPpjM6TfZxoBycTHrC4138kokrXK1i2oFEXaDfSj5ETNbSLJVwTaU18GTEwnRAdRhaCiFRiRWCFtk5miVVhL",
  "key4": "4LGHqpSWAmDCA41beqSswmYakoQtpJj9zQrvk8FUkAtNgXvV7xWQjwBgqMeS3QzhTpKU19hGPEVAr2QQXdNh2tT7",
  "key5": "4F1YDq9Gvc3Nm7K9PikR7ghDvCFF1mTeKuyMVgJoYkPzhXmtN3uBBryPGvB7BNdYbNUbySqFXZtRQogR2ttNDnBP",
  "key6": "2ieD2Yi4GWa9nQYTcgshKc7dpg23Q7kBsvYE96sfjWQvwJ5URcUVSotSXss6h7uE3vxdgtzrjrNuvUpTafbdkLc5",
  "key7": "4xsq5sHQhBEC5i4RR4u8yLkswJSoZPQ73sxYGp8gBhChUTD9WYZvqWQAtZSwut5t4isK9Zc3uHGiRMPHsjodxUDW",
  "key8": "62cpEMayMREJKGjxPxtCKXYisufFG8NvEjeh1DrZf4q7hY11xxPZK24CzdcmVx4dWsQXrydqnfp7XqN3jvTKwNCT",
  "key9": "5Aey97ZMu2mcgggFCWVbV3RcZTf6ycezK7TMtY5UEsBGm5w7RgkpMm9dscJBfrmPm7Vy1YYX4f7Vr6QgJ5WTPury",
  "key10": "uWMtZ8is344CBuZB4vWcBVqB9oa6FxHwR4xWWUm7TMxToqD6a3ozqHHNzAi8TDAzzdBJxGEpMJSZQawBgaVqond",
  "key11": "39NbRGdDbFkeQrmGikZ9mrhevkgZYjESwEeS13YnWtxbvo2yUobkmVvyE8HWu4zyHtK132MKJE8jyAZ3JTzKF3a2",
  "key12": "3iDUZrW6mNhGzpAVJ2iLTwAsJkuukSjVPTJivXXUtr6hEvonicxLNw1gVH2vFKEfSCo8X6xa3oXnSozKX8gX6x4q",
  "key13": "3Mv7r5E28NVZwDXzxuWSu65Wy7uxgiWNYvaD9zNC4y6rMQ98Gh8Dr2oMAGRjq7KPasebhHjHpuhy6zTXwyv8D78C",
  "key14": "5YXkLJtdygQkixPj6y5wzwhtyaL11vCTUht28kXr6wmazdNudp7hqRFNZjqjR4EmSZSTa9fb8eoEANMD5aLZXAxj",
  "key15": "5xeHqC7zHdJf5aSXjAMKrFrYtEA6UGQsBnYjLjwgTdYDpaZdDRRVLnuHWa8QmVxHuRQdWCrmNTYsvptczvmFnrHJ",
  "key16": "3tMSX7vvB7FqYEL9qNyHvSKJsMYaLc3qW2PBqwCDFLvDkRJMQzT4RpGC3jAnJwtE4H6h4hgc4LZTre3nYPxLgBUQ",
  "key17": "2Uwcof3oq29qAoqzmbJLzbtyYvTXgggib4sRVdVjYukBCkwUPkWMGgv8pkxLoB6YexAkZzTA5NBvs9Z1fH9g1wyU",
  "key18": "2jt7EVDH7o3PXk7n8JJV23hU1sk69jcjNY9zMwBhtxQ9i23cD4bCVrTDRMHYGoBxwHMMRH7PNwA1tayb93M23GmJ",
  "key19": "5iAyen7eWAoxAsTKEY2tTa5JT2LerzrRXV7Q8mvqdy2GxMCKkwvVa1kjc2mE3yYjYsrtkGtzYD4LJJAuu1M2jDZU",
  "key20": "5msSCECkp9La1HVwB6N6usXti7xM8NboAq5Nqchm4t1ZWn8Vp8yYTd8ugVz1NSCc23iN2iJ5976oxoTAeVGuzsDx",
  "key21": "2bM1fNDjpmEhuez4CHo4bqQLVt2vweAeCBJQTjNzEFgX7TqGz1MizAx86wF4BqMZaDzThuS6FRsWLARfF21qcxcA",
  "key22": "4QGQE9QMsVFvzZwDjLF5bK97AsD9hTsu5uKrpB9KGTKSdaAsSen2W2eVMvtP7i3JuXKedfe5wmmr6mwXaWRCNsYd",
  "key23": "4mBpuRBdWhBBEg7qdbUVKUAPNgw1jsVfxY2J2coNDzPDxMWT7HecBhj7rPoiKUEKet7Zae6oU8LehxpkVVfxVff6",
  "key24": "Tj76Yeyj2uPpAmXRWjzBFvBZLuFBVVx9THM25viBMQyNKo4nMdoosvxGbURGVPbRj2aaBvacUqQDqitxLXBK9AR"
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
