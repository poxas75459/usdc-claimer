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
    "2yGRyH4GTE7bZU4zcH5RRcvrHdacRkt8QjBxJQtJBULGvhFEtTgWo9iyUiJwYRmKjPBnH6rmx6vDc2aLGbwc2obS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JRfAeNq5SPUbkJcWcqaeoxyQHzZCtbekSoFsfiSgMvNx6EstcMc6r27NXcVHUMs6iJEiechASX5AQMbVSaoCVLV",
  "key1": "5YtoSE5bv9HeATqGs9RhkFWVmQkWM7ZVovPpK8DuKptVkrBAjBf3R9iYEYtxVZSaAPsFLNwWaCxf347kUqX39JiP",
  "key2": "3qKcEG7zmVzBUrVHNBrx3crUuhzvMJrJcsxezD377rbN16PqKdNssGRsFKfJSyFnjj19b2hnowymy5ogvt8dYbnX",
  "key3": "4Uz9XD2g5Ga8bhwMxmtQ9sSGhgDtuuVfjjXy8x3y4hFgf4ccFDBjgPbeKZCHALm8LrQu9BdppRugGjvhW2Rb82Ua",
  "key4": "31ZUWn9iYA1qyjm8D1p3PRjwwqvKmmA71cSMAcqFBf7TphjYFQP1UdnSkthBtEwbhgC1ri7SKnDoyixX15doHFwK",
  "key5": "4TZMNzCpjRFtXDeCDZok9NDURKKfYSys1MxuTDG74eCoxyPDscSQikdjWu4WiTgK3MENXif3q82XhStZM1H3dw7",
  "key6": "4aPBf6JrAMsakVBLcQz1ffbBRXoBsQY3JMPTykaRDn4Po6NDqrbLQgP4zKTDaEndizRoKnxqnFm4Riw6DoSp72fW",
  "key7": "bTiiPnWjagQAyrVitvweRDhEhAQ6C8xv5g7bx8ZsQgp4GoNiGitzbkRhpQb9jDgPP8PbKNLQMyMSYAvDE1ToXqJ",
  "key8": "psCK4DpJi8ERnnRJ9Aj29qPesupiYojM732PTSVQxodKx4EAnAKbXrJe8WEsSF2VUFh7NrPmZc4BmtsQMqw9g6s",
  "key9": "4x7UJw5TQpHzLFAcAwtJHU52tPnNMLkQUxK4uukiSuTtomFfvkFziBEbLz37dhEUVUFchYViasvv4UqM6fbx4kJ3",
  "key10": "5bA2omZA7J98A5EZLFu9mqP9RFU5hxxgCw7haMe6eSgUvP1mm8d6EfYif9zBGLnjLP43vzbgau3y5vn1ASGviRcP",
  "key11": "3UwX1Y8f2anfPbqdgTwVxjnW1LNsgpKDT3QpwvAcvAERcJg9Ba9H89tzq1eaazAgGVvASKzQ1nmqnpGkV6g8YDnD",
  "key12": "3DP4v4sojFWbkNC5BU99xfuqY5gCGHSEZ5UHvJePXQEEJ6ewEaMDUsU84F9bUwdsxzenTHekdg3GQkcv43B5qFNA",
  "key13": "66hVRi4pkCDPTULmpeFBnt7CFSUv8qGiQ983LZcDPivd6MXhEMYZP19Edf8cJPqJrR8hrjYxyErogWzUi8FC1Wqo",
  "key14": "2nwvi3HKwL6Ukw6gbsmYgCEHDpCWKFJo4i8wmeUfXZPb3QCqicCXjWRRLdDjbMbjDdUYy39ShDSQSc4MjrnJfzEG",
  "key15": "3jQ7MJTTZbsAWH9nQivqTYZmnuVQnzkhLKt3tyZ8g2xQpLqH38NvNUX2Wjfzj8P6LSDjD8wq3iEzjovS1FSfN5bc",
  "key16": "61rwXeiWqHgPHtA4SLGFvmqxKXUvyiQG1DfVvSmLRPU3c4inbys1mJEfqKrJ34NB7e3E47m4Yn44cmeoVrQcgVHb",
  "key17": "2GNg7iYLRoGL4EaBqHSw5kZg9kxMstNsnj3L5of566TJnLvwiq5o95s2UufXkvBbBPdFn33zRf5VmNTSqBVDZPqt",
  "key18": "2ti8PaRHrdBCnTXb4BrFQ4FytsF35tFmSg6JkAST6AwpatvdK5pfMCPmu51W9PuL3HB5bnXf1mpRDokzpHfyRgSz",
  "key19": "2mNSLeqqBv48YX9Hyy1E2Ryzc7FEsi6NEuaUu5guYQWhou6JQBqtkB4khYyPNjadyU6nkrVYdxdkQXtwN7R21Zs9",
  "key20": "kirW38d1VWTdJcdhBqZxRU3nrncgYrzDRvhefHuUP9WsMmEXZiBXsYDNTf754J2mVPGwTdHkYmhKxv7tg15r1S1",
  "key21": "4cDnsGPKaEkFJXjr8egSAWmdyhTBYXGQRJ7Q3qSiyuLSoCX8yKe3RefNuyRFRawjvyA5WtmXVQEdBRNSknWj8iai",
  "key22": "5R7JNpqjYqgi3wCffsmLPX7YE3hvMdP8rRHtDZR5LpoqE8e5iEuARcdvcnhHAhYg3FaX21m9QnqfeUhsPHSKY9bD",
  "key23": "RrEXWZgLT56qxovJ7MbGSi5QqKRumcdQNYGqhLpyyhR4vBwhtjFD2xGdAFRuY9DsmQHVTJqsWkV9jSFx3Rpqa8C",
  "key24": "PjFxvPAxzHch3EKBqkA9zwMMxPwoiL6Ru7aAYanQbH9LaJKhkykyzXqxwdVtsvdL1P9iCZLqsKGCHwfiVsYMRD9",
  "key25": "5mAfCL1DfXi46JTradLfjAPvP2k6pN5YGySUut692PXZ1bU8oV8wDNUcmedEPYBs5CqJMaJnjspnAfSSgiyw7Uj9",
  "key26": "gEqr5xLVUCN6cawUzXrkNm5mJD65eitxCQgHFaL4hpaXwZ2JcchqzybziMKLYjM3BPzMGKhBkrPtni9B9QQDgUQ",
  "key27": "5FjQrLadojqs5o79q54Xw3j6C8eBfy8rwH6cLbYfKveQuMw2Y6bT2UfWkGHpQp3cr4retkQcygagPSLqc2pzAcaZ",
  "key28": "2QFcLUVxqkTM69wKsDqixugHGBgErLPz8reWqLdNYiYUvT8XmBcG7oS7dpW7ndWTsyVUigh5cMz8g4upkmC3bAuU",
  "key29": "2sBjFcxPztjmnv5aujQCXGEMucVEVioTtfuCm6buUrQzTtdA1n6prhjdqfZeRj9Qh8mUg1bVjQFtuAUiVy48vEmY",
  "key30": "3hWNF9DxyQPnedxYfuLn41uhryjCWfeGikPRqhrn4ZrCeSVMgkmYozP5rbxQ8bRQsM386DMB4yN1BsJRDW7uvSct",
  "key31": "3BZXcumrS7J8UWR6jRwVXYrjewZemzbQ2X7koUP9XELeKk7RH9EuYdiEVkNYoeV2C3X3ustEaw681X5BzMee3GkH",
  "key32": "pcdVATKYNbaei1kfrcwWjUXJ1FCCrr1U9J9XHHHsu5ucLDPJNGrGKKo4revb4ZsQ3tAgbM3ewnsY5kpiAaLcHgs",
  "key33": "3hjs4P9LroKNQpqpPwwTDecfNPaQKqVyG44vqTJeRacFfuRan8j2Hn6KGhdym7AtprnZ4ECo1o5pN8S99sJTjcA6",
  "key34": "5dKKR5vpeJ8mG3ZxegQ8deGUKwj6k8HNsjCdkKbUyHeN82cux521f67toD3RGJ5481VfvdhPNErpcRBGWJ4Y3MKT",
  "key35": "5JK6jdK94PQT75AynNaCshFuLhpzSUxvd8LY8VSq4VoShcP8MZr4d1afddEx3xmpfDXrbAfSx392PcPJPZ6q5aoX",
  "key36": "nqXMBR9onB59T2niLW7oP9BNNWsgcbk8prrixjMB56Ai6rjVVJiR4tnwkapuPWhEwXSN37kXPSRPwTrf6mgxEc5",
  "key37": "5z4ZyqkiFDWWTvNvp3xTbJrCCm4d2Evna8W8HecuRCM6Sz84VV8aqDFoCkFFK4A1jrPHSJP3yoU8RDGfwFgGXS4E",
  "key38": "2vJBqAyiPUcLrdR1JFm8xhMtrsEA4FfaAkgUSNMYgByqtNgrJALskB8eX3XRwU3WFupr3hDpbxvYA8xXoCWuvqrj",
  "key39": "4mLEnz9mHjMDV5duZxXHxye3PgFkhazQvL3iF5hiaTaLNoPXSg1AvPmDS6xrKk3yCynQL9tb24Rba4cmaafToE1B",
  "key40": "3Jnipn7hP4zVmVTeMPXpcb2EGV3RqGTQ3d4RuGnKFmz49chv2PFEqhYrG3oaaFqVicNQGB6pmNVGZRiHQSpSr2QP",
  "key41": "HWi6fsAPsDQ9fo396cEsNnJkneBP2CsysN1fbUUafawFcZYdWzsX6njbm4RHFVMfcnex51PEsSePqvJ5wNzxJrk",
  "key42": "2GjpbibTw2WEcsrVVwB92ogDYboAdN67RBcsGRC8LC7Wx8DyE6qGNm7tFUnZ6P23mDPYPGoTD9ErTHYv6Fm55aL3",
  "key43": "VkFZYD1jEEEhbFMiDtEcBrtsdfu4Tf69yBZ2signsSVQhWsScW4H9UR159BmP64SNES6nc4os6meyRyzBpUo3bW",
  "key44": "4nf3D9F34wpnUbNPPhp2Pr9nS5q346RM1YRSs67UA2u9kZYALoPzpAiDuTZWyuWMweTU5qny4rMGMsa9AP7fno5W"
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
