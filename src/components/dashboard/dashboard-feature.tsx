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
    "5eVURxNTdaZNEffU5hEg1Y32dGYjpP6RJV2L3LdwoUerwr91K4FbsBLog381genGQ2w2ttw3BtcyBW6VBccdEneg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a7b8gRyDLTJ8mYWqZivmYuVNBqeLmn6jpk9L8cX3D7kCk5ZGZM69mHQu7fZc225vgWpfrGF3MZ8nX3tVvCG8jM6",
  "key1": "2HCgg566o6TTcd9z9zMBRRtX76Ej2FgZzwPRkT7dLx8xZFi73t9UiWrugYxKUNNJGZnaLVG4ABrFam7U5WivnGDR",
  "key2": "25SdbNzrWvf9ef1jyDFKEJzLiaESKQFggrCDoD9LvbGBMrzewz4VkJKQAdajirgEQ4qEn26VEDHxUHxfzDr3xWJS",
  "key3": "2kTnZgu9co4hdwR3P4ZHBpJH4eYmha8G7N8G8agPEh2oDNFxPJNCQwXWmjKTmTbkAEm7XnWs2eECiXkAHvYqN8Di",
  "key4": "3s7Wers4e7GD5BGfntVF7xhsY72peLWhgQE7pq5vAtMqUxUWVNEhFQvuUo9pYYy54bFcSY8e8EAUg7tSYwniTEoQ",
  "key5": "5LbaAvTCjKZQUBLsZsTU7eP5SKdr6qLWyjfESq3VKCZ6tq2MZ8w3RPJoQxpCA8kPVgHCoEU7ijizDrd7K4ikSBZn",
  "key6": "4YGRVZVWcvZFxTn1BEA1zPSTfshM7D3Dj5WYQaUijdh1U8W7R1urMPmkVavgn4AnSMuYd291D57dznjZKiTBSRpn",
  "key7": "4VgoB7ZopSmbQexctPKmLgDtrPPdrX54fVbvkHDrFEp28jEtGi44i7eLnrCHvmLAmU9pHf9S5XfP9DHEhwc6d1he",
  "key8": "332TmBRwdyzKaDjxyxiaHJbYXm49AmGczPPBTN2FayHbuhDzKtCETZ8oF68DQ99j3v95DDy86Ytrc7H151CKXJfj",
  "key9": "4VDqoWDiCUTE13jq5vcbzQPZz9CBCcd81vMw4bn1MWTaNsZofzWZDW88qoMNmf8NY33gdwxChzm3mPD22NW9oc8D",
  "key10": "3zroMreUyuZDkToSG7P15REZdspHrWqVT41X2WTwguup5QNqKtwuDwGb3aD8H6QNkhEjdmqb9mnVR7wAZoBYrh1w",
  "key11": "6gXdAq7uZR8jc3j45NiTPxb9jk7fvXp69dcUrAqoYpTVtViiX4Ve9LfK6xSxkjY3CeXqnjUgD1f5Gwwamy59A7S",
  "key12": "3khttNYdYop6L3KfechZxko6ghdkfHzjZRGKCJQL3grWBV3V667t6wz6N9qZnSnS9NmwUhGPsvQrr25LxRyrULkK",
  "key13": "2vAiJH842WbfHCwQbXLM2tdydnWnbGi3e75Pr1iYq1jrvor56TqGx7PjtrSf6wYbi4xrFC1zc7sR57dErGFPHuS1",
  "key14": "4zrVBXarwRoEs61TMWE9cyVUiAjZ8wsJRLx2WVHbQ7C2XdNeUXpTUfgbF89UPTNB2BSfAnLZQzaXLkL3DuYfQPiV",
  "key15": "vpVdhf5Vvmm2DYXJMzZHc94S4FdTq1Vd5kxDaWGtcute9HyH56uJbE81jF7RMifSTvmrUMLqCVDUkvfptkB5uXr",
  "key16": "5aSwMNW4Kjb6zRVMSnGRMLDwEVnEAY54oqMfocoFu7GTTigWjtSUKWADLPurhGcNZf2rTZkZURwcBT2TiNwXQXoq",
  "key17": "5eqhNrYZqeurws8ZwSPmzX7brwZUJD3fu6RbzNAxUoPv8bUgq6jGtnrkGjtzBEVcXnr9oknp7vzrcjZZN4ecxwZ",
  "key18": "5yuto9ya3mSavY9rH7T1C4cqqKcdx2d8ZXXV7vWdP7tSEPJ2TeSvFVtc9J2tTkSV6cqNBfCG65fuco4emoNYkvSd",
  "key19": "63QQ4ZJwM4L8tzBFxPYFN9n3AyG4w4tJdqsm4Td3MHekcWFLxzMX7HM3LrepKEDysbev4mYKRWtGPr2pu6RamvLN",
  "key20": "2zSAWLkifihN5G6sJzYLezwBnthR73Luo5LYjEKP5r3foigjMT6uEkqDXmGbeguCq3FQ4Tn7HMtnnHSohd5C5ZoZ",
  "key21": "5e1jnW5npo2F3Y4suJYbNFWCni5Xcr3uJTsXVJXkc1NrzjKjxt3sK7kB1yDZ7yiQf5iYxepd2b6ujsQSgkqEDcsR",
  "key22": "2fpzC36KKYLLLGGv7AsS7Ac2tJwzkJBpETP4PTarFzKwJ4mPjsFWyKRjoSdT16CnGQ49WJ1x7LJ6WYF6e5YPTkqp",
  "key23": "5EX2ZEpcFjwYWy8ve7VxYKKsrb2xAjcGA86PfD9qFnkA8t4CHywcC1F1skoCwkfV8AkPJKfCKzAXYwKBqWMgpCM4",
  "key24": "2dSfxzcUNQCKTBSQwEqEdUPwptenvkCuW4frDUmrv7NHBTREurbCXdmfdY9Tqs6rddrj4PovPpRL3rk5aJ3PPHPr",
  "key25": "263UoVwgmuY3j7v79HkpDuDsNMAZ9zFtXPkrBwnwnXSGg7VgLnYaEy2XHHuKZcgiuidf13gCws8zy7ApiLrDfLCH",
  "key26": "4jT3ESsLtJaxyBvM6jYmBJCsm1faj6suj2es4jYUbjvDCxUPPaByFijmW1bvAEYN6VV5qS5CrBjHiVBTge6ZgQe",
  "key27": "pbykkjRw9cLpz9cLj98jfneCGSvKcSFiWZm2Rpds4FuXpLgzhJVbnCKQyVQoLPHEnh94RBM5fK4FtbRMwxwG6AA",
  "key28": "H4MvGXxfdAJM5PhqaGbcmA74YucKLr5CSsqpECU7WvYmkUgyKiwU7pyPjCk7kS8zyfxb3P7HgNTocqJpZ8QyiTj",
  "key29": "59dAcLCaEP7yFNvjpSefBLe5UppvSWQDqttEEWmaJVrMjvRobgmV23ULo9BWB3WfYCgG5eaM6upJB7hYv6x98o61",
  "key30": "GqjrcUohaB7wYR7mQhRzgvgzU9XWGMDGkRz8GZov5kuALDCudQVD9DAz1yuZwAyPpYoQfFdSvYETpEVZZdvYS98",
  "key31": "2mVUFtz4axTTGESyUCbWdT9wqp3sV8gQLQY1Heupcx4JZ5znHeYAN2KLNScwkieJuGvqgF5CgeVffFT3viBngLCt",
  "key32": "26P9t9pSxTcuNf4DtRvpCZFoy1m5KgeGserYhvNov3urEWwq8uV95wiHAF444Smkk8tWrPojvFqmC6TqnLUb8dBS",
  "key33": "3mTiKKxHzF8362y5KdPBi1voGgDx5c2W2mePMY9UeWcwWrqu4TcMCP2adJJaiKThdZAzKVdzKTSVj8KnAYECVEip",
  "key34": "4m6StGvAxQdD6CoxZAXBNmjqPDQ2GCQy85N2wzncnBeL8xr7eGNMrit4AT6fK9JCDQ8GuA9Le14nXD2RUJkgurw",
  "key35": "WqZorby2L24oGY1u3yuWYWVWAot8Vp1zvpcoTR3LSZsKqNKBwrc8Vhsx5aNFMHjVJCifgYUetTXCFmkaysNifbW",
  "key36": "MEmfpqCo1JpYDpXXjyKwvprsrfyGzjJxUPznHdDwJWHwAsRNTB76MUp5pW9ucaNgSzD44gahounFaex1aFzUDgd",
  "key37": "3whN4xHQ2Xuucq4e47gFYJpij21Q51dTbar77TYWxzw2Hg8peKpNVsnU38C6uVT1scwLJiUaKYiUQwAZsWsjWkx9",
  "key38": "35zXR1bxNcH4PDT9QJ5kYDBBDK5e4FA9xsTDhwvEPHfCJuM2zoTyKBtTb24qysuVgAMAr456zW9Dkwd1WjtL4wox",
  "key39": "4Kjy4WvLGna92XF3yCu4EhyUPtf9wb8vN8Bn3pAcXYooyR2NSkvpX2vmM2Qyav3wr1grMUq6nbF9uvE4qU1DRqCA",
  "key40": "62nrRmYDosZq9HQwfNGGrqC9e2QQZ6dHdHMbiRhpj37bkXPcZZtM5Fv7J4ynZKisFgMBN72FuPCzFMori94EdCrx",
  "key41": "4Anvbw8szLSWb3cXgN5vt6hHRhJojpvKU6DeeA3QAAqaQjj5zcLsgn6cZ6ShkAPafS7s5PPuqF6nW87YiKZQNQ6r",
  "key42": "4fj9cHZGsXoiDD7TkxdhnpStrtHNrz6zZESi6wCv7BWzzC6SenNxx9XRg5FDUN7m4fZrw26zYRuCajf5EozjEkTg",
  "key43": "5Zc2aUU9bwCL7EwnEi4cThJLqCDX1ZY2UpWYVRKowrrrx8xYry9ASwGxZZhy1VRshVGWEUuETdJMiLeeZKQ5ijjU",
  "key44": "3rTKpuXzWSA7NgPmuY3iXr7aWR7RpjuwPjLX73duJxGDeiFnfAGze5oDAKW7oMNUUCHZAYufc1ausuYvdYwc3gmK",
  "key45": "46hFRH6GXtvMzvXRLeyNpvAGg4HEJE3stXWxZFuUPjsiew1SQwB5bWLgZrwfdtTgmgD912pXqvoGDipCYosAEZiH",
  "key46": "yHKD3vBNPswtPgZQwSKF88SdKj675mBgweV991a4BuyBiGs2tcVUyXDg9kVt6kwsMhk6epNn9xeaQoWLwS3CWtD",
  "key47": "3XsiF8TaGfSJqbfbJ6i2gBqAiwq5eL4eAmvXyjRERiSjkMBfg4sR5ZQ7t6zi3MNjhKnmddChe6H6WE7rCrDhw5Qr",
  "key48": "VyvyE7GkZpdGKa85oaLQKr1cymtusArNRawY1c6uQ8G3oBeSb3rFwZCQtnt7LkYhBwkroMLZdsEYqj42tTJfvMQ"
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
