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
    "2bPtaZEqTPoT4UYjG3JadPK48ukQiC6HG5aqBfjuTDuPVN3mzrBkb4bCCtSwhUoDJAYUjZnemoM9ad7RTApXvem2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58i6HuNs9j2vBcPoePPQcCWurusMLXhNHCsvsgWR1DSP6vf2pqh5wVAsNCBmsELWRh6Cjk8cYGeTytBxKek4HcZX",
  "key1": "3PYf2mgafcEWFs9W2jLTAsAyNSFoMbo9jFkEtRJ9358ZnnFVh9BrtcaZXdSc63kuzQPFJoaXycaEPLjWRhJhY8cL",
  "key2": "v53zotc9uqMQZosAEAqMtkdxK3J8XvBvZLB4kg9fWVG6Wty5o5LL7DMy9e7AMV99a95rYRV9nmyDPwHK2WyLVhT",
  "key3": "3Tc2Gp2mbx5TfUbfv48gB8CcqsVSn77ocThszmuHpnohyD7HrLAvNzyURiFeUtWj88C2u7dbSvixQ5PZasAqeGhf",
  "key4": "4nXNezEU8W8iy8GFQtjygMXxC55rGoFdNjEBYVRt5RGwfgeEBqanjVMKmqjWo2xcYZHmDfWCs2nFJM6TVyfQCQw1",
  "key5": "52xcneQHiChXgsRmvnN9any7N5DeZ4fAaguK3nB18noySFGZMGvvjvHW1e5Le6GRbovFrWhmaGonJdpFFsrWAKQt",
  "key6": "36KvRKntsBL6qdeMt7KuFr6iSjeszVFqd9kvWPuaY562M8cSa7MgCL1sqE1CdGkoLhNhYhHFgJpb7BFjPZCKkNnG",
  "key7": "3mc4dQr9eiQVH6zVXPquMPgdZb2XweVqmL4JDeG4KrpmQk4sxsJTumjWNbjpXAf1AhJCgZXbotoG5RH1iLsc7dXv",
  "key8": "2RzewpwjMhXdEP3WwHxgbFv91LDL1vHRuqDui2ZKgr8iA4StjLVQtCpj4FSJdch2LyhAShqPp9jqPUV59S51RtQi",
  "key9": "2DPKRg5iyX9233fepdP96VV9dzqXAJoXLBopMbaQ75BN6w9ogdoqzAvH5YyBFwYjX4azRiim9DDAJbkG4jJCgezi",
  "key10": "66xLFYrA1VFGMYokskehVQFx7CmTEzBVN1dLu1LwJ1HPoAED4cpN89xkCVLatNBpa2ic5N38PCggcKTkWBaBZLux",
  "key11": "m4Qtdysdk11pyH1TGftPuAUbKfDu3gB5wnj7zkmPvgRyf1cnEQ4QwaAKSsbgkUbK11Yks1gwjiUAEdRzdu4ihpB",
  "key12": "4Dc71gAxfV5ULrabftNLyQSfPccTxr3iZJhHBsSbxoxymgoD5VW5xr3mfLdad7PXdcAGwU7jbzykHMV9U5QhsHUG",
  "key13": "39ghW94E8oJYvkYnjTbzReTUsmeVkmBpoG2ir3K1V4Sz27XCp2KsYAu65wpLR3RuuYdrKX5sJocPGEG9314udy3y",
  "key14": "2puFCtxw2uTgpdtTkVGEZ3egkoGWuzKsBc4FLuJa8XHRU6z33wJu3gnY8FNc3cqigG36AKQhYqHzJHA1y1DTyb5x",
  "key15": "4J3G2aRMerxgdufxfLtqGToeaE9fABq8MA1ZYxYkmeikbD2QiRSx37bhsFtkJtrPBiixN6YnUbz88mfdVDfdPasQ",
  "key16": "3UnSVBYRemp5jMTMsNYaHEoSVbFXA2YbiouMnWaHZtj5pAZ55S3htVHg82gd4fx92cWQ6RyejXzZBE7YzjESJBRs",
  "key17": "25KS6SLH8zZsN24M9Wvq32rzgbbcpGD2vFUgF3rxUX1idaPjtCtrEaMzZFSLqPkiVNZrZimmHAvLLhom9f9P1EYS",
  "key18": "3pPqddwKUwYTZRpqwUPBLYh83yMRrDF2zFbBepo83VvGUrXV1nAHkKe5VAi6vikP55NNtnp4R2KcfkNG5pGQT3sN",
  "key19": "4Kw3XFXQGCBUdUzvfxA6pVKQa9SiGRaEUqsR1XMTxznLTZT6VipBoecsXqppNkAcesdRbEkn7tgJLVp1AtBJuPdN",
  "key20": "4sYssdLyWk1ns8W33xJDzcQtgeym2Y7gsyp6RY8ioQ3KmvVAsGE5EPSUUQZj6i2sAp5LBVZXzyv1P1SRVezcDi8m",
  "key21": "kDQZ5KW9wQhG8qNgpqHeHeBEGN1CfsUdNTkHBC1ToUNi5fBWmS2bYqmTvxX2Jb5mdT7TNk3PyBcpSFbd84p9ygZ",
  "key22": "4mduotiwNZvmqRV7EV96N8bLKHU9LMBMqnrpSUdEJuVzpRVBnM9vYvwkN67yPCQ1rvJmMky9bP4t6FVM99VKBwTz",
  "key23": "DV9KX6eUodpS4DygBYi1NEGXCBqwPJFn8TkX2V6umomaegkEmkemkPQ3KRrGzxhFbcrKiR8kvY33r99t7yGocJu",
  "key24": "5FbpR6dzzUzbPuQm1jUX5vw2tWrpCxcgKHrz9A2fzjpzqfwhmYafaUxYhc47Mw9wwExm3xSziXuFuccqoUxRQnzA",
  "key25": "61NvypchDuqiUnQAgKZJteg342kejRRfve34cdy7K4YZpeEowRAZSCjwb1HHq25Jn22Q5Phem9ZvgL1QuJj1YWBh",
  "key26": "5nDmibs2UMdxaFfaEMuYeW9AruvQ6rG1JnAsomqwnygss75XvaAy2i7qsnfXw5ou7P287cvqcxeuigQvyHRC83SV",
  "key27": "4v8EFuUrPuudZfuvCK18s9HpsRMxL3jQt2ZauHGx2zXB4nPXfr3xNfy4gkvJSd5T6yLkepicfHgtcBdR5cPKeNLQ",
  "key28": "4Xi2gbHgsEn2ras6cY8YtznwiSmhohWfaMdVkhZajdCQxYPGbgEaiQmYdV2vkHwjqfLY9diHxP98zMKNJ7YhtNLU",
  "key29": "3KMUhaj64q4g7GMfq2yb3ksKDyzHxFuLUdieFpUvEmYwFLYj2cK2V32cU2GbdC79XuPPnDMvpunt9rXqio2vjdJP",
  "key30": "2WHXWoVBgC7bhxQG72PPYt9yFuZMGBogjVgRZjU2m9UxT6BGssJdYZ6v7Vqmnrtk8TAKribk4YSbFZH5r4TKAd38",
  "key31": "3AthWin2reaJh9EMSkFZag5sxHpb3SuEn43q3P4NQdq4YGZNZJ3LM59Tx2Gmqfwq2zdbX5pCZwyUnsgrQbAbp6aS",
  "key32": "5uvtTHwy2PYVXPh5JgeTVs9LNAFeBNmTzfDedrjSVSXLeiHQHYctoVm7aiu966uK269uNuyXoLWGHtnkWs8uxXs2",
  "key33": "f3nvPPgdQonfcHPYgRrvhHCZMmFFFL158J6yCUV6oRx7yhRELnhooEC7KYWqdJzMwZwe9efCwMsLnz9HbPmtsuw",
  "key34": "zjbNZqGRQkUPvqP9ixyDTAPdAJCWYbBBys7fkxtmL4XokNwzSA2sJL8PEpYmECjyEdh9ARKTVJJhfUc1BBGXPkJ",
  "key35": "hTaZC5oqaKyn1bsVuGqABvtrkhA4V5o99pstQpioBx7R9V3K5QLjwWdZxAbD9ohuYSzvb7USJcv6LqBqmZBzJsy",
  "key36": "4JD9jaUyEKyCYpoFRK3xHCCTyBJtPz54M9wKZziGeuLCJKTaE8gKr6YyxjmwPcqMKS5dFStBryVt1cNyKQFy28aD",
  "key37": "22JSeUFB6bt5PqF89phgSCEaNksmjBtDrq9MTUwYtmC9uHt2Lcx4VTudGwhkkb27rNWb3Ni5LowAsvJTdVjcBpAb"
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
