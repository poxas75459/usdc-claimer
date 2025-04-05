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
    "FeFjdiV6SGvv4fs7EgoxigUTAL8476yqmXbKs3sHofGPdaaPqNBsF3hUBSNXB9LUhLov6tZFmpm7jNVjzhUG8Ex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51GvUxVCsKUNDSUJZgUBWo6rSW7hVqMi4oqu3i5dS2LYVG1bjkrNZBVZ64TLcX4iw7PpimMXsycqUALTpyiDHEzu",
  "key1": "62qaVNzLq9veUoae3HzXuUYJ518v2TZDFngY74LfwqJsDPFtkuCWFckK4mSAwNC7b3PJMBLX5J7GiN6XEoRXZJJp",
  "key2": "4FPTAWWP8ek5dAshfvic9YAqw5tQfX6M1ATe7iwVHzz2fZQx2UQAhARb7af8PbBmcPVmjjRM2ogYx8fD7PFAVx9d",
  "key3": "485aQ3RKkRquLsCt8RKs2NDcyMXvZq2AykmgDtLnEPQoBLr25yqHYVWqU23BTCYoqmp5NNg2KW213GmA1fyNnX3Q",
  "key4": "3MMXxbbEduVgAbsJvSmw5AYTUm55DTZ4J7CzhUjmDW4rFRiPprPyjKu9v175gWX2iP3Em6dP5wsN19pyBvhCoxTo",
  "key5": "v44obY9eUxYsLzBBJuqPAgtv2cJyTsWGdE3FbSEvYbFJsdZed5LLFPXT7n9bJnFnMSm2BWb8Fabc3EFHi9Jdm8c",
  "key6": "4QYZkK33zrKVyPTssZqxwAL1SQuHF6Kqg2AFfrhcUfD7DK9YNAJzfoMfpTG1AYyPkYK4w7asMb7CeLKXm2F1RGYV",
  "key7": "3D5XnLtx5xXuhDeBG94T6Jha4Q3YqB3Ckp6s2TUGPrxBWiHreqHueLsr8hCtLxKUqbLM8nCoS1bQ6TGuJ9nmCe7C",
  "key8": "5WwGdAmqzQZ19UbTAMfVqiYgFV1bKNXUkJXdHrcNF6ud8JHDF3b9PriPLDNKvomPErXDVRafFzUGP7diPsT6FYZ6",
  "key9": "4VkCGdsBPW2htCkqJCisz4yBexeAacruTEafiKNGX7VufjuURJMhWbKrXkJsxUP7ecxLGHrzjVZzVCuV6zbr3yc6",
  "key10": "3ht4TLgu78xq4v558pBdGi98bdeL4TojXbjkEFiwJFvtXFLQfuMbC96o3ZgdGyUG1aodRLnTCVUPJgnsQDS58Nbp",
  "key11": "54iPxTDuKe3cPjpVdKS1cPHFWTfdFU9VMCRuRhBfxVM4kFwrg31Qz6nHu2NzWHzuCx65TBqf9b3Q88EHBHrKMYRW",
  "key12": "5tfuZtfuJgowKhNzNRD7mAaY9zr6hzmxTBhCjRtExdbUQNz4kWdFrUKDWyTzU5Z1ZYw6EddyosVRvPTY5ufivwwc",
  "key13": "3T4GALh4Aw6f8jhjoU8SeRWzd9gcjnbSLxtA7m9gNTyi8i6kZgLeK9VkMUuGRoJENdqfSnzZ7BhBQWSm3NU262h4",
  "key14": "3XpXsrW3NJSL2zuisHH4ReW5Avo6SkABVCmz9887nh83oVz3cdB1Pnry8VZeSLons1cPj8hC3gYjr51qzrW6PvCQ",
  "key15": "2DiDPDpcf2U7TpC1AkXGQ54HoZkmTvkjnrerbsgffjWgCDqDQFKDm2fZai3uhjfJGRmJdqdVxbHejHJKJnVNNCXY",
  "key16": "3CnbXjEnE6eDZdB2w7qDSbNwhRKqkffumHgGaADA46FpwfW5QHTAyue3PKsnLG64xGrK4aaxce6WgYigMCv5tjah",
  "key17": "4y4JaZimsZuMx5Dnspdqdod4c5fFRWPs4LRswuf1zg7YJ7KVEmzp2GMXG9AJRsJrR6A6amGnL4KCDoY2mgxym1tK",
  "key18": "5z5TfrsM9Z3bYVz1Q3idKUoFR6ctqDyXsm6Mt9jYKBfmBdpnEBBgzyrfoLmUGCXADQ1QDMC1zqLi14httV1j4pGg",
  "key19": "2CXjxUM9CLJrWw5btLhdXQAMR5sC4D1T6H728oMcHTsAQyFJP8WEbxBxUWexRWCvvVQKav5nsYXi2G47a1d7CtL8",
  "key20": "35pyBJd8noM5MXgckA1ohrsEPSzfE5J1Xv7uFJWQF7Dsd3R8wGmRM2jgJv7sM4mKWopAXurYLV3kR42c9tUZXHU8",
  "key21": "3FuU9y2d7N8C7vuRgk98gYWs2AEt5AYrT729u6pJUUCBTHn1ruqrpZdriB9gDhrvcdszpWRU3JEpEh7edQerDmHS",
  "key22": "4xFjTLDvGTfsm3LqHq7KXA5W92d8ECkPUpuPmnxio9tFqztoFRhm1Vgt1TMJnYC7Chsq2MZnAiWMnYaTV7XHeBgq",
  "key23": "5ieuMbmXAtguhDgjiN3VRZSpZPPXu78TE37xFrVpBxv4yQ8EYsRJWkRHGwLRNn4NgTtWGehjKndAndZo73spCEzH",
  "key24": "4CCqwr2ryG7khDDMvsXtm5qK4ogp6J3K4jZBS4wyGfmUE5f8YCKqk2fKs3rttN4B2ueXbmZpkpt9nsY5ww4uyN47",
  "key25": "2oB5297vPVtTHSMRv7CyxsdXxpTEaBz3sHriyb5dA9sxJ7k4uNpeHadQCXWyG2x7ybQie9vAZCYAZMiYwEwLWhe6",
  "key26": "25Wc2AANA53Pz3Q2w9w7i4b39iYxtM38CmpCX2mSoFemKD3cCBWLJphUjMFJe5bAwfL8CENm3Hbx9bRzhMQpSv69",
  "key27": "5qnuAvdHb9An91M11T3Yrfk3d2PM4Vq17raHnnppnzUu5TnKhRvwnvBqyHM6ijss3MgpFXYoae7xoAYVozntLhdb",
  "key28": "2zjKf2zHiRbVewp8RKn1XGG4q41gUj4oD1SCrAzV9Hg5mT4MvMgUKkQuTWSq2hqqzaiHtR7uxqgjjDcsDnCtTLj9",
  "key29": "43kywXHthn5uWXvxrPGGgyJsxg7FvHRrcXN2CzquZFpHT5DH4ptqacHmU8tp4r7L6wUxqjGheg8mqDnf9J4QkWdt",
  "key30": "5z7vM3p1ZLsVQCRoHDCVpTQjjq1JR3TtZi56AYwQmViXZBASW7BUAPdSk93QMNu1znprGcajwUnTX1ucQTiP88rn",
  "key31": "2hoLH9dYVbrfnyDwwHxUE5YKFi7mkNyeHAP2VHKQywPPDM9hdo7M4daLhCsgJBuVFghg3jhseeze64PDoRGWTJJH",
  "key32": "3jLRsD1aEtDvXmssf1Z91hui8mWGSCmdjvrGJDSnH6dFZF6BeuhzbrxfUqSQZcHquCf2mCCnuwf8VNJAyfShWLNM",
  "key33": "4fELS9TC9ac3TCCJRC8QdQYPzizrAA7xAtejZVm5NzTSFhyv2ZxgkBLUfHzyRuKtXcWvBp3NU6jinJSKVr6aNeg7",
  "key34": "D3x6B31yvM578Y1wFKacZHTdzseQg1pUQgMSsS2PhzUr5Ku3zU2sUGWX1UGbcwjKkex6ZdyE8BjGT78sMtsbddq",
  "key35": "5DtB2sTytXk82o2xpm4n61tVwmwe6igdquU1NhgJPndpr5aP2WU4Sgm3hkGY69iz73CSmSGQGAhE3AFjfHAPAHMv",
  "key36": "4MoKyxbjEEv2DYubuVcnWJT1oWYvSYJ6EEJfyR4N2FjTh2159tuTT13UFHmSeLNKNzpzFu4fTEHCwWhQPQTw3Qjr",
  "key37": "26Abqt4JBZ3rx68CzXBEU9uCcDHDQndQPiZdN337UrLxdfSL3vAjr9iJaJLuuBS2mFLAxjUEZqexphaSL3xsjVPi",
  "key38": "4x6vHSs9wqAH6oc4c8hYssbc2QygFnyjymQqPmbBRV4DXXkZavokk1XGuTgCFofc2gTditNU3Zm8LjoiMe9z1mVi",
  "key39": "KbpobgPSi2t5fdykTZgbhUfWQEaUv1dVTEsfnpy5SsGP1PdNrdsUzVo6rH7arD46jKfZm1H4gvgvowKmBJZahZJ",
  "key40": "yyfaPCngD9wbGLa4LjENKexHVsN25YApEGeF7Tm5wf3mZqvZNpHjx9uh19isWThVUQENrRzNNcW4ekNo6bHcRbK",
  "key41": "4tANuszyw82nmSqJ3pn5E3K56yFxHZbh969iw465pLixrRYq2e91nDSMXmNbYVMfd5r7hcUsbwTM5tzYFyfXBSd3",
  "key42": "33pqQRfCd1wuNCWeUJR4LjmqD9XWAzuKdxMWXZYqfXB6MaS4gFRLm3SXD4ybczKyWwYegD4KaaEtoeEZxKCQ6xde",
  "key43": "5ErrtihHKw9ViyVsqjp47n5khLD4BekMSRsyTKbzKsJGxRybxeUQm92sq9PMfnwuUoVckpQ61Xeeng7oL7cpTa19"
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
