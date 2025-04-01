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
    "4qRgq33qZA9hrtNRJ9uzkskh3uVC3EoAz1ANnb7R5fhSQTfkaoAdTRScSEp1G8YvoMf37h1jWf3nHJrmK6bZzhuY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cXGdV2r4huvVKEcZWhZjsTJ7A9onKiHGAZbyhLnNFimhNUiaDYDrEXx51UAmNF2qKJWiXVe9WFhkdB83fmoH7mr",
  "key1": "5nfBLFyNKBWbf2DnhUVwhvoff9xgKDdjJ8K2162iHhFNHK7ov6odEPnsceSUHu2RNCCJTsxrHTcuw2ttxWfGVXJb",
  "key2": "3jRjAbw37toqk2bQ75S3BwUSq7hUD9byu6p4AnR71mQM5yU685qpnrJoVjnFHzZVJXD6Uiqovzfiye5xqEgVq8HE",
  "key3": "4u3cz42muwkXWQfK5KMRdq7N8Zfs7kTCALr4Ts87cF6UByH8ntZGCjAgajrVJJZNr3VM8eyJQmmvXMQbvYSCaCzq",
  "key4": "3fS22ZGAPUhpG8Qb8xtLNhDs7ZVvKrWx5TGVUXhaCGNxaWVXQXaGGa1Y26bmTm1Aj9DiDYEzM94MFyPLQGDfPmUr",
  "key5": "5vWwjAyCxvDCnAb8WSsH6ysCVYeQMg1Zk2AH8usr4LSkUuZBZvsTSPecwDHKR3t1w8YxynsKebn7zSgZ2URse1Fh",
  "key6": "2vpL8Xhk3M7U2P7DazELmJDP5aTuv7NSLW6hfoWdPgA8dDr4tsRYPP8AMNRM3Dno3YRxuGGDQxRBGFEMMjsLCwXC",
  "key7": "28HqWHVzNYj3jwVwjzzdaS72mYCBXDb3FUzVXCWCnkLWXRT7Ey2RgMtdcVUv6o7pjfahvN4S9LBmbgn4CfHam4xs",
  "key8": "55EJvSEZcihYU5ypPhoHtQ3ZLgi1rvVJF7zZHMueTfRCWbSKt97H7n8opYSArPLN7gzoygUGSfks5MczqD8dWnif",
  "key9": "53kYvUccgvPa1LGdYfGw1LjspeV945v7emDaYbtSLH6LKaXc2o5VuauUTYTKXnhpBSJqqVMbj15oS74THxFYMmPM",
  "key10": "kAf8aUSVZe9jW4hycMYU1duvXfvCAX2vEi5pdf1sf9sZBWk2xcBrzebcG8P6szvnvhM6kom6swHFkQ6uPWcrqah",
  "key11": "5F8nUWoy2a2a1U8hv3ux2dSEh8EKxFHLTe4kMvYBdoc3khzFDCPazGoq9Din25M7tdeMRNZRzmvjFtyYotWN8uy",
  "key12": "4hDYtHwTK89zs3HwN19gkgLNAitSiLAXPZ6zzE7hzj46PasiZRCoTe39tyAmaECrgi4Z4R9FVp8TRpXBSw9rtd4u",
  "key13": "387mht5toL7YyTpTnUK1Y7F2XD8pAnpyAZ1jtT21hpMZXcMmohzvFzCdH6xd61gQLsC6cwqKEfoJm8QPqQdF9oE5",
  "key14": "rKN2RRyY1aJZZcqR2P3PQYaLCukt9E2MRwmEpB1iAZ125v54ejYgEeVJhk6gwve5vstc7QAfCYxNQETst9p4c2v",
  "key15": "2TxGxTk3oXKR6jxNmSFBGErPkH95aMqEZCzcHJHtx7fFoaJYCjNQqCSFne8X3MVAQB6BADwsSUQ6HSuuVbsjXFs7",
  "key16": "3nvAMRskDg4V7UFqBaNQoGD2gmsV3NuY4kqctn2w7H58HHtfRFW3uPmaxH4ZvqWPqVasqarzrT4VFqqiAVkBj5Wq",
  "key17": "3RNuVsxBj8xqi5YRPk5VD2ARE4fHoBTuQ35bRjHUbYQPdBBxREzpt2DLojDLkukoVRRkyL3PodPtTHQEYZ5YD2xW",
  "key18": "syRqaCJqYFN2Xub1p8DpRrrgRP3VumAPvpTU6cmfCq15gPQpSsm7v3Xna4nHoKJ62fgQMf8oRvEJfdtxMCovUyv",
  "key19": "5kNhrQbgzTGrvo7jYhEgB3Ly6iQAdkPtmrXpxsweL26CMM6avu1t8N4bDEdi985LnjpNXQQaUznDYmy7upiwAgMi",
  "key20": "3wM4WexRuyEgmKFAMqvAjKx2oCcyjFHcQjvzucEJzRyZ9P4KFWKfCiqZwjiZUMv7Ezw4RgKHiTRoqzzGsvpvGEbq",
  "key21": "23kfFmtferGz2CQ4f44Xi4F5UcyHRcTeLerginX7M2TZUR5uHXDb2jBn2KYpHo7SVMmj2xEgAPaJHoypspAu6219",
  "key22": "iLveYeueJ3viwZJT1PZx8Fdsi8E5HfpYW1AHkc77Yg7nsDzPhxBwooNuofPMSYdHfttgRKWnaQKqQs6biTKDYxK",
  "key23": "9UcYRXMhiHykUQgMnw66x5Lb8R4JoR31H8o7GMWHBZg1S2dU7DHzcX3YxSZzzWPrbQQMevHV2DysopJ8pFVu79u",
  "key24": "5JTSYnkYiqzGXNVjmCn5CY4Lvimdfi5PrUyLJVbhzPYD2XzZGHyugz3xFiaYpTnJsmdQUt3ZE2MdttJbk8McNSmP",
  "key25": "u9Vt4FsDNBGr2mtb2SXsrhL2HJ2hhYgaGi91Qu5B1kEQgbYBSnE2GSHSrJYuMwYGYUq6KAgqncvhPxpBeaP2WAD",
  "key26": "4HgX6mRuQ4JaGYFxuLZXPDHCTP4RuFTdxtQrtfSVbWin9pXMzE5WDBWhwtKA14aiKomBwmGfafc7aF8tV5toXpZy",
  "key27": "57QDYS6Mo57wjA1KyX2eopoUzMqH4cRQSLQbqR2tdb6M899kF8Ygr78gxSfUnNcnN1sD1ve1u9k8cXZUkJdVPjjT",
  "key28": "p8zog12Kff31mzDtAhZ3eVRVrUdDGapVKr5EErb1vjo5mSEPnnEgUriZRdUYyPh1gA7C2bwtGMBVdCQ5zbEsRCU",
  "key29": "2TBm2PWG7EWdbzXKXZ6JKwL2fkfv6Ymce5BwPamviWCEkux47GEQfr8iwcZEKx82wU4yCTuA12NNpgBPMjWrMvup",
  "key30": "3aDo4zRXCFyRZ5WvEphCp82YnozTU9gwBhw4kJs1tHm9hxnV1dTQpVyVsKdtosCeMCKEn4W35igX7mXcCDJwhLpC",
  "key31": "5w23KGxq9DoXUkKvuHoeUTffkb96DTkYvQc8mbpLDWnvRLgMZExyudDMsnnDJvACwsCXpoCFiwzwjPGv6YYuaB3Y",
  "key32": "56JafwxkoT4LQ7W3v5RCAJXcpEMUNz3RZwmvtTZNtAfH6cagJdEmo3qiHf9hSAscat4ZhZDGZRjisQggxw2mCNf3",
  "key33": "3SyeDoBdVqGZwapjzEbnovF6UarEu5p6MnzWWqCUqFoWaEVU6HTy2H2W6YGXFyjyWu9GbEJWQZD7VDrVgwjrUanB",
  "key34": "2bLQnVF2fU9d5z5fTY5ptgZGpARQjvLXszEh1EBjtqKRDMsoGK2K4a1F1McntUgu4ZurKem47USjqWZRpdjVMM6y",
  "key35": "3yE9CPPadktB2G5nUxyrUPWBt5QwEfcCgwempvLN18wLN8G9Ln62Kiqoi6qeFvJ81WaahhPbrtgeek6jnYuS5kAD",
  "key36": "34Bu8aTRUgFE6vQ64vcwaPi3s97ok95w9rRdc1vj23hFMPQ2YfBYmrpfKuSnkwDKBQ6nSoSEVVC4zE8tPzzkEwZ1",
  "key37": "QAqB3HsCCW8QgNaC8ZLHRsUm8s11HwVRm4waTBoqT9WsBvao6DprC3PRdWRVCQxhMbeiC44bqgvkQcZ1xxys14Q",
  "key38": "4pP8kKffkVWArRZfyiQJwmmmCwuMKb54JbFaMwanwb56HQ5SFYEgcHgVK71MbFPWqC4dANYfnJSp3WgSkZu3EcYy",
  "key39": "44rqCu3Vo8yPDQ3TEPHqNG8kGoJS23CnvgptwcwH3Pv1c8FaRuf1PDu9WLFeFkKHNEuawgxzbJjj5zsLeGSXP2Kf",
  "key40": "338LJDQQAnWe923gZV8NkU6FJDxxZQke8HFPoYwrNeVMH9J3muHGv5CSrc8hiwbp2iE2sy9Do4GUmQZGDP7SbdpS",
  "key41": "3yktX4eKMjtY5bZi43WHKNNLPbjAoYksykzii5EBNaXQmcuixUgoHuvQYPkNwwqEfGnJ5aL9WDogRBRiDnt6wTkx",
  "key42": "4iMwnKh4vuQ1jmNs6rD587vsG8bq59BfuFuQr2LdEgww5hWgRVriWD3s4chBPNvMHGfo46t6tuaiC3bWBFVsHZSa",
  "key43": "5KyzTcAnSDu6P1TpnTiPQ1rDXNa47rC2rJivEncpyoU3PbvGm8Pf3rSVh8jd6UgcdVkN2c9GCeVqrHb7ycgvTDZh"
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
