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
    "46qEChXMXZ8aetwTQ9k7DriNad9Yyhjtw7MuFeNERRqJeg5hiL241j4gac86SVm9e8wETbSHi21MA8H4oa1vY5f5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hZuWRZeaZ4vehqhBSC6gfUYctEZ8yqYoC86iB8x3YrTDHwpyvzzaEdoMsEHcQGMHhd75fP3WFf3wACfQtVG66mo",
  "key1": "47382V4NtScxgaTZJjDGPfZDihEHMSjGdmEWAZEJMJ4vrkKeppnBqbDmEnw1jfu5rHS2XieabwVTJLYLUpGw9RMA",
  "key2": "48aTezrsUDPW5iqSwdCkUKutFxzyz165fnxGkrhjjcu59XLeXPmjRQUTKwGd6CH9MtRfSSvwsB3xgxjzmXPW5ib9",
  "key3": "63qRDLNBNfuRnT483Dt57ixSVMgcinznaoMTehSfWf8nsDxeFdHxcDf5AELP3atNTJGNq7xJKTqT2bqazPE3Z4Fc",
  "key4": "6JWoLnzY7jHBj3jp3RupWgSfEKaFn3eJg55a1HZhvL4CtShkLVZogejiNnh3DqrP1DfGVESFapdZnjuYguXX2ev",
  "key5": "4gEnKJNiaEYptHjeupQRroiCMaZoMAKixSEVGe2x8Q7eR2gSwV2XyK4UjKYarGwBs7XcT7kG9b9Us5iUU5SzAC5j",
  "key6": "h6C3ivpYFBfG2ukKuF43Q2NCtQ9hug4w2XSPGzUCsPAnsZnSDzBX1K4ChgWYwowMmexR7YKkRrcsqBpSKRcGDT8",
  "key7": "2jC2X6NK8DLiWERwiN9Vybtu4NQyfDc4cVSHZnxHX4X4op1WdTDCAv5qRthfJn4yVpjtctPu761MkxYRr9xqMRwS",
  "key8": "4Uk6GXsjpZVzV3cGMFdyNaqtTBVnPUuNq6ciJGu3LXcpUpTGktMgLNAUycTLDRHzreAjBAccus3RQJcBa6eiBmu2",
  "key9": "5p8R9nK8Mwt3XND2tGrpF69GQ5ppJTdRbMiaFu4Q2nRRa88bKxEkjnJFBsLgB2Z27BuyGgTnrAqYyQ7bGyydMNqh",
  "key10": "W4BEsUXiCFUzRZqawacBBbZDzoJ4jQbYMEp3LGDyC1hf9c8vk82KMeZoBzRg1jqUGUxMgbxnL8GqMPgSB2ds3ew",
  "key11": "3yGvQnF9t5pL18bVj55dKaiUYL33NFWhtoSpSBvJUhPHm7TLTSXVUDX73kM6s5U6pfuxDG4wmjkE4MsxJ5bMhKC5",
  "key12": "3ijVnzo83xifCWyLBPS27ZGhmSciFQGnFo2muYh5bRU33AGZTJM1eD8J1cNWugCiKNC2iuvgZekYAytBbfS4dFUr",
  "key13": "Q8YovKxgNgxBXxn1pqZbddnYLxDnK7AxRQurvBrHiR4G5PAfMAXFSCrUi9RNpzxyEFRHjdLyr5gQ3a2oHByTtvb",
  "key14": "4S5tXfaf1PUxBrLKuwh3JNxyAd57j3reuTtmzb9xvCnWLet1MZMi4kcUSizyPTpKZwwvjXcGdvzqn2A7791z3F4T",
  "key15": "4JLhL6XZMzNTCCT2P4xz9Za9yBhV1vgT6BurVrnrZ4xVag5r9fPx1P7RT5unz6hYBnDGLqBKZx9anQ2HeCvyL3xh",
  "key16": "3zTkFKWb58WTrFfzj7vFvjw15x7XYWkXLfw2kZrV2Ssy6XMQ1qabmDa1VioxtJXawa2Sqi7wGY1TPKZStHQS8Xxc",
  "key17": "NoSLxpdJBh5TmzSf1Gic3DFgX1sbAej6TtxU8DCsj3gWhfWZdmkPyxYiY3v3zTegirjNgeebT3LiHeYAQwkuLvU",
  "key18": "37KaRUqno2RNuzoiy3gR1WkGD3StbmXHTsmDdkwinpQSGLBQXJcgzX2MSWQMtd3bFmEuhCYd8Tzr2SWeaT2f4Cvv",
  "key19": "57g7YqWVhz3PF9XJLYW9XSirkwLYACMu5WmdnnC7A3zdj3N1sWVRnd8gpqx9j4KhzFtyLNGNnngmrcsPQcmsp8eZ",
  "key20": "2KqieuQPq7P8R4BWo9vVNPT7erGGkSxEnMb8q3xzg6RsvBFyHPr4d7GnJTv51njSzVMFwNSoBBDJkd9zzNbaSZf",
  "key21": "3cWfK2SiTDfmgrb7dVqub1qRxBUqEN2NLiHHU61wMCYp6bcCKGkebSJRCFNgRL3uoMdYR1Zb9hQP6aM7ZM6Pjv7E",
  "key22": "58pk5gCQrktQFCNotnemKRa2aN1HRL7YH1As15mkWH7C5xKcFZaToaVoLmE5o59SqLPpGfZW1bvt4SQu8i2uTRjB",
  "key23": "55v3ADg2znMnCyvJXUFLAxd6uhx9Lq9C7Q2uVmZE3q5TuPZEjzdd1n8RcVL7Ap69X4hJ2cu47gKsA7XQbddJLACb",
  "key24": "42YMen3ecauqKZvRX8tGgjEVkmALqU1j3oKVBBZ7K85PXoc8CqyFQLskyZR6HHqixjnTv9yEf5etnAQkj6g1ECGz",
  "key25": "2JHBgZV1gjJRVpppBFDFkjqBaynEi2rexEvnVSe3KBVPmSXHT2KDLmNLuWG8Q4Gx3vtjgGzYB4APYJatXviAXvPb",
  "key26": "2Kpu8D66AYC1p5EAtHmSFtKwwJGGr6eYEdmKULmHTmeXYspcsftnWmCgJUWBGuu4FWpyqJD4kN6dRQR8Ckgny7bG",
  "key27": "4g2yJ4uvJHUUWfCwW5X9iLupPC9AHQ8sYBeTj3oFWGH8t3FoHb2Xq4ChMye2kpBcMyZN23ULJDMHTiPMUsNnQ5gL",
  "key28": "3TXQ9utTrJ3Piwtnq6CMYrtQYrNLjXuryh46XqC73GnikcSGMbWEVkQFYzPAa4L2aSRkZyVadJme9Tk3bnrpB2et",
  "key29": "2QmAYuhdMx9NfsTmLTBa1k4m6XSmLyyrbyN85YHSE5Yju92cARNeg8vtbnanmFdUtEWcUegF1oacL7AqfWb7SZ6D",
  "key30": "2tdNxtEyDhHnrNSU6yhb7s19xhBaStRUNKg2Z11PXcL9rr7C41Z7c7M5xi9EVnUokny1s8PMvA47mYJTaidZvF9L",
  "key31": "4sycZHAFBMWfg9D3fz2WsYsnxpLgnoP7LPszstgwtny32wDSK91vMB3uwGCBoE6u5rHDpreE3hbMUqVdXjGJ2C92",
  "key32": "5PWoAm4aicerdxebGzgZWck6B18HdNgneu2g4qCycruvYYA6ULu6sFoLoF6j3PrkBb3CSnwrdG7ZaDJFvkrW6x3J",
  "key33": "3ahZDcg6RkZYqV3uCJ2rVWsk8k6ruL9Ep1YdZiA88BRqkiWzLUdi7uvw42U2YDau8Z4aWRX8SZzBUgu1BtNY6LDG",
  "key34": "23w2Ym1qdsdF7RrcmmX5x1WSkDob7sHrinvBV3gkP3rREJAMv8hV22Zfwk6XkHMHMQB12hgCqzLexay7qNnMkzce",
  "key35": "2aJRcPX8W2vJk6DsH5kuZyVgT3cioFbD5VppCGFaxHZAkpKP5EUbreaWUL1yhj4o6vdyNCnGuWfAy4f31bbtMqNK",
  "key36": "4KanM5ecjWq5Zh5nRf5jNFMskJA1WrGwsm3T2yXYQhfAUPBbuKqzMgRBWveupkTJXvwceDjGJkBn3SsgJi9fCvSr",
  "key37": "A3iRuRPNkqb8oJvir7pLCfhp3JsiC7tYXLHZTKCXCCAYmeWHSZeJJx1G8FiTuBH95buBRjRnyQtEG2CuEhrsW4R",
  "key38": "21eg4aDZYxvdrqRmwhtZrtgE6oBxiUorj1UZsD7DBPZfqAxQWEzJCwSL5ztuBx3Fd28rXqNnSs2229kDQfmrEFgp",
  "key39": "5VofX1BaH6SoHoxKPv6rKMiy5nT4MEkFCJRUJLzaS96y7zcJrE8Y2ViVa24Um78oRU6tV5BMeNPqg7SBRf3zC1kv",
  "key40": "3e4MXWETnc3WGVzq8M65FgmGrhS2tD1mcZjfevzuvb64ix5jPqbqU4wkxCennZmhBLBdojnMcywkHB3JaeF4aJXU",
  "key41": "46hKL9CECfth7YUsBSqQRqZendnwoh5fonJgKPcWdHWoCRGn4NoMwuKGhJokrJdj8LRajCmgUxTdufuUcYZWFxY8",
  "key42": "37HEjjiLa23KtWASFCX2NcPzUxX5jLm8t4Dz2M72ucnRuSof5smcNemky7Hgiynb5Y19ZkPcvP5fxbreA7WuhRUh",
  "key43": "RSVM4oB7sB118pW5dbEexLm3Hk5pL9MtP2JGAAY3hWKNJzRagDv7WZRypwUGBqLdte2iQsd6N2iP5rnGScEahHd",
  "key44": "5Ef2PxR8qsiWfUWjfTBXNNyMv2LVi8J4Lt5dA68GDoL1tM4fYh7vWRnUqKnhXhTbmMURLkYuyeP953ZhCoXGDJ43",
  "key45": "Q1KWUL7b6PiqaynVjbGaHFpEvNjs8kLq4fV1MtWrqXbi7HsYh8W77e3SsZQrmSQGdX3YWhgd2qaLwuz9bjShvjy",
  "key46": "2UpDRnSjazY7dXFTJnKBKt1os8gqkhb9QK1MEYgm5YG1aBXT6uLPhmYJeDj1MgefdgELrEUkZadoGaa6VVuatCdG",
  "key47": "5eNdikYkRbs2TqNwEM4TgHa9VhXmiF85YoyEEuNh8uwevPeVFoXhEaHcjFHpJWhvUyFnxVdmXx2TsFjkr11svJNB",
  "key48": "1MoCaGsUdxG8XbbLXhoKcZsJdwis2nWZ82k68iYsrifx8fYdYydoUEMDSTFDTHkNFk1UpTdcWZcsjLfSkWYS782"
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
