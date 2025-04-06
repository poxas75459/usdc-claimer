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
    "2bxBdfH4L1nGDLHroYy3D5jdvg4tr7jW8yt6XrAp5KWPEDUyUL4Z4vHZwpL84KdmKkfAX3pJ5nVcjNBd9PM817dE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T2s8aKMdPMP2mqMgF754NbVzyPxoKpqGBvhmWit2YxYU1Qbag9cgq3ibvJ2fHhAtEsD1BsKujv27qNMyDbJ6EG8",
  "key1": "31zVtLKikZsmFQ7K7J8rT3j3LeAoYJrF6H3fPY37XW39jEquEB5JNQ3QYfWmdjPMusVc7tHjrnRoSMBxb67eW8T4",
  "key2": "4zCsFsMMNcxLWroFZcx7cZ1KFP8bcRTZd9humFQxtot8qyyUycX4tuiSshz8rwJcrWH1t33NEGc3G7xUPFeW7b8g",
  "key3": "3HExW9AiKhjNU59K6gQBpHr5gbnHX4twqEaRBSbrSduPqm2qf2cz5BobKaWoJvDpzzH2N3qKnvW2Trv3M5RL5gB4",
  "key4": "5qYKzho1MJ5286XVoYvJqDfWF9EWbmX3A4ngeLSSBrJFtSLrGJ9WEwpcYfZzX55SUUGy9ZeJDmvnUsJdegax7VwL",
  "key5": "5TFFgM4JQMr4v84V5QfjY2bkZpG6xhCMDQwg6UZfWJnFAWaskobLZYfKMnkipieMcqfoXuAE8wrx9EckNAC81Jtv",
  "key6": "2X5GQpomBkFZndTTAB885HgChtKoDRxvXtCNXJiHhpntKGmmB4J7i19ymfExHG34KG25DLEDikixSxFGsy2o4Zm4",
  "key7": "5JSC5S7RQpZkSPaocHpbgigSCrAuX5aCoyE6kcAdZJk76p8Dfzhd4Mi4iqZGLYSJ1Keui8miFgTsaTmHSm85U2N1",
  "key8": "5BXuxhi4ihhN2i1nrYKsTNXqDvHVxeTnfwApjhnYk3Am1HPj6gdHHd9DrMbgtkH6kcLdqMf3of9WtFU7WyW4vJMT",
  "key9": "3Jkng8fSpjPGbLGLZ6cKS9qkuM1Hv1gmjNStr8ELXBj9pyV5jatYLgXvo84oKoKdy75EvjjeJRW8J6yiujErhg5K",
  "key10": "5uZZH5F8FJQziEKyKFUmZ8f4YYDCs5bqEwvqmSjF5AiTbqP4WwuHpVvSAwZATgbqotHvViLdQ6U8YoWsG1r3i4uo",
  "key11": "3ACTRNEwngADeEUD6JA6R8hW8mBfwEAoHJUR1oaSve5ER3598X3ACZvdxEQxakbyjLadQ9JqVmXDYiJPj2QAaWXK",
  "key12": "3STQuRuZ4LkZZARWDi5sCwe4B1teRpBdJGGY6LdmVrV359WitXuhm4PBN532cLvFdFAhutniEhEq5avgDLJcAjcu",
  "key13": "5DoKNpHWhXYacEsfm7bfjSDLLWsZGBXRjWpsBS76Q4q3XJA7QBohLuZwB6cGCBS55yEa639aZQ89SvfnapNLh7XL",
  "key14": "uGrRUWPYsSmXX2ctvMs7pT5qoWytoeojpVfD6Zhxere9hZvcaqP86K2NpPWTLhwzc1r5Fx52TQiNqX8wg4Yn2cE",
  "key15": "2tNKSq1kvmC3oJtFVszBka6GYM7yK8AV8pXLq672rGixjzxDyKhZ9ieQUq2knQmvp5dxLLUR83eWPQajBPVr7Eoz",
  "key16": "5nrjRqF7DJ3nLCmPix3tG2seNtgjaNgR2scMw55EhdfwbSfy2rDMvvyqHzBazTXB8pWD1xy6JaqmbdvCdLU2KmMs",
  "key17": "2bYQedqQNWdZpHDmJQCW32r8oSVzKf2KbqXKCoxqjACoF81xG4csAshHGpKeTGopx94aoywxRwvj86Rf89fnADL2",
  "key18": "JA83iMdmmrx6TVLBa4HfWXDo5cyTyBSuTqLsTtxeZnbaRhhdrMRRMZFx5VwivkLesxr4ddKXgk5SXWZEwW2vNNk",
  "key19": "4fntGP5AsoiqUUMaU8Zd6CqmxTvf3tCC3MLFwQkTk9oP2oZFBGqVQwyriosiy6NWBWKLDxdCqLYqbCjHgb1Z3gbM",
  "key20": "5NPz23eNWYNNDPPJMTUv4j7WQQhdtEpZzXajgMq65nwzqKFo82gbJ5ZzPjJgQVocsUr3SEVKP1UFftMKsGJKitcG",
  "key21": "4DRzsH7MWhLref5PrJmLeoUVtSADMr2uEyai5MFXRBkj8sE5kWR8poojR2zDJRKHPurmWA5Ef7QcvHLD1FFNSbTm",
  "key22": "3rdmYgUdNPLc9h6cKVMd5AEdqjiD8EQDdHRnZ6jtqHts4zmEre83f4f84PumGcirYDcFB6gvbac2VTadzJ8AWYjU",
  "key23": "3HbfmTUwT5nUfb1WX1gSZLebgt8xAaFoF6ZxDqBH9ciD3wiN1tBjjDna8RFVzS7GCgHpkuHcE1BAuWWvKRpxfo8g",
  "key24": "5NrEzDtUPbkhGyK9yVQZGRTfjv9oG9A5sMV1ysK4XdRWn33c3sn1nJUkLGLrzE585hXGPdzxLnC7y3ni6MfrRsNp",
  "key25": "5S9ueUkorpN9qy4DTUVwHxtcwSsqG2nVFYRAp4vCHRxvrSbVyfusNMf6ZysHJuVjnqyKyNCaTsq6jzuzSZsJmSVc",
  "key26": "2Tbfveg2PTEvNFPZxymRgd6NpPHHvo9MSyns1vXx94r88rnMhK5UeQLLuSeTp1wA8fxEqsWqbtqKKii6E7PLp65z",
  "key27": "2oMSdVwXNabiDSkiqEHAuQFHfs96pFjNYN3s67Xx84J9EUpFKwgqCnk2LMxYUVMvQXWWGkaWL2VEZJvTxE8cEgAF",
  "key28": "248C4gk8KakxS37LcArCJpKhimFzaV89aRhEj5KuPzt6XwBd4RYwoZAWosshN527TTEMRxmBGqDtzajxJeXZ4wqU",
  "key29": "39HhnhFTWd6aujRxFAHoKT5QCH2kLExXS92sUjqu8Z3vwoXHcgisk3vwGuMwt1z7qBQ8zoFyiaxKeEqm4EFo4Rx8",
  "key30": "3zCPbC3douvjscgNjUiGaQwhQtJ3wafEBb2XZBMvgJCehDhKwFwCsQhZmDxp3aG5rF3HgCKr8gzqgCZSbETGgJMd",
  "key31": "5oe1dNmFkUaZMRbnZkpHfzX2jJqhmhGkRfk3iRQaeFpGQSTxSct3ebCYxndZYhqCziHbMsi5vtYvyNtQeKfrGmG9",
  "key32": "5AU43B3x2vdKQGuv6uB8n98pbdmKH8YC67XLE6PaNqFprJn4qoFeLSCqmHgKonPYnwFDiVuU7XTQGRfBUXwCkVuG",
  "key33": "3VQz1d4HPcKbvgmFtFKn4KGPNVGNecxtuicQnv7q1pqFEvVj6asmavG7WpAzYfAhPsiFXxTxVaXAeoBbtg2mrNGJ",
  "key34": "3RBPNiP5PdZ6dEhpAxNqAvcAan6DieVuaj6qkFXFH4UgoWvG8oyK3ruDHMQpvwEN16b1amSJz7KqtAQdrMMvBU6V",
  "key35": "3P53L9HgyRTLdpyDSpLcd4LunJXfZPWViCV7iyyKo88N9gpSMtcQbVhha23zvMeXHyi2KNTbAFumqk6oE6zcv3Bb",
  "key36": "5GV5igXN9XK6EQUEQ9iKFzDHyNBsPHXYJEZ9uoyBr7UUdCM5Qek7xhHepTBLa9K8L6STcaXavVczUBEp3nMZfeLo"
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
