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
    "3xedQhEA36T7v22rGYdh7BNMVaWyBsBPeBVsXqCwLU4MX8tdH7gSy3qgU1Gc7BfLGJjoNosLZPZcMchYWs8zq4mf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oqwpsS6rhgLghNGCm9HsMiz79kqankNyfp26GKkXuZo6DmFAQW9r3PyQ2Eyy35ohKPQLnsovisYcUKDmCCNXEp8",
  "key1": "2DTeiguScbgsygJwatwSssUWjzRbMvfkGJBFMiB5k8co8J5YqoY6FuqXT4otjbm9ycCL4AR85Ei8UAtgK1mJvXe",
  "key2": "49ubvKLh8idAo8h1MceQHeoPn7Djk8vNJJ141zXLTzd13LSCZ3utDCz8mArcBEWepprJVjJYjFppHK4q62wMTXmi",
  "key3": "3Jm8XiRnmDUci2hV9FiF5oNRCiyDQWcR15uH7MqFwrbNTnBtgFxoXJUdpFsHnpmbw1TmbSGNiwy8EZ2GkPUw2EPQ",
  "key4": "pYT45c8YUaogMTKkUYr6RuPa7dcz2gQEagVZ1zpw463mYuZoHWW4PaXRv8Cu5RmMzpBT1wkp4oMRbhgfamki7e4",
  "key5": "41MyJApxSbYiedc9nyF8T1hNkYcDyuhdaeTXAggvw1b5h12iM7cJuapeTRu7JDnUTuKAoJei6H9PsNfzkMq9UJc4",
  "key6": "iDvGDgLRJRyuZSVM1zyitx4PGXa7jZcH43xD1GuJWd8NZ214Ly4xAJNnCHpd5hXvJB4SaUSRQNDmtrrmGQVRTpG",
  "key7": "4bZsinZC3pi7ZE6LMQ2cko3ukcP3LomKiXdaBwqeuxHq1PkN4Gx7snRNL7uRSU4svwvQJm1xvHPG3pHB2321RsDX",
  "key8": "4mFFHapHEWnsiMdnzAZDJY8hYcxGPNwiHWEg13WDHRabeviQEAYMoxgEVc6f6z6SkxHobmqVJwU6xEVLhVmnwA65",
  "key9": "54geLiNw6mgFZz3kK8aEfBMFTEGyrEcKoLwDK5HxxKBdPqyRcqR29A6iZHArv855JXNdoigeoF5coT2RqGgm7msD",
  "key10": "KTf6zTybEpRQX49KRrh5YZCqaqXvVeyEHnPA5HWpGAvFhvizMcBnM5mpr5t7PDGaG1dfDeZTvd37F3UTRj4jNBw",
  "key11": "63kTK3ufC5kvvoX2jAbcayJLnKCqBxCEGUKvDQesrCesEJrvJsspUUaQjQvz73Y8FWmNWu6VDyw9ZXZRQEJSpxSk",
  "key12": "5HkmYRFn79Jm4S4d7f1yLiiReqJpr1ng3khpwix4HQ3uxT8hJ4PZonrm3u2eaFBHPKb8QQEn6jUHLnu9QvHR8ygC",
  "key13": "2ZfpfQMbCWB3WHUXb2PjAJYxN7ThmPdCxmzgBNvwbDcPt4vDpfhof7wN4s73bqzveAmCz8AoVdhRvv8Q85ZYyEww",
  "key14": "4DRc3j6WVg26oTNwzxotSXV3YhRfqri8GEtkEtr8cU4u8R2UxhxqkZwtJc6c4pr77jFRYsoTWUTAJ89NErUYRAxF",
  "key15": "2jjkHYzTXkTAJeHPocg2MKxFH7LCfckHfcJDbXuFXWiZWWxaufc2AjFtRMTchGfRu2s3tvHebmCkpBbVNZkgJaXJ",
  "key16": "4y6mFp7Hho8i8o3gtH2g7BCxXh4yMMh51f59JoMmYd6SoKTxso2X8QznKvKRiGQXFJQn57KZRCJUqwUfXa6dePY7",
  "key17": "4H5CquXmCxZ4AeCNhsZLkFMU83HTPhRfH4KGnuxtPUhjvzDv25VoZ6mKPPwCZbRWpcBC1T5WgZKSUpvxQstFVQvi",
  "key18": "48YzbirZMhugUtRnUtD5qefXAmaL7qtUb7ZYkypwrjHD9nmJ4azEMHntp94QrAVsrjwzvJnpuidKDmsvWdKaSZ1",
  "key19": "5qR6SsjMGkhSRNoX4KWnxM2nuj6MnzVHfaQazP9RwaMjmsAjiBrzhFiMYACw2nBFBR7r7UzSHHVt6YvuzL4Dmn4Q",
  "key20": "5jY4aap3PVdquDXn8ZWnMN6pQ3x7Asx222qsuFQkuHjRBgQtggBobxjWAn6uziNdmZauPSN5anXGD1jso7ABuBFt",
  "key21": "2bwv3yByTY1fxrUbzqsBKrTbxnD7EM6CgL4ssJaA1eBWYtBPZLBWEMQh1JDa1uGQWc7GSvYc4VLXETPn3TVatmSh",
  "key22": "3L6NgQxE58ZtCzJkgn1pKrMTLz8zoKKfvSZZBvcavkfSiq6ikRsbe3qNxzhgyuHPu4wqRB2cz6LB9krNDanz9gRt",
  "key23": "2J9wKqWF5gqMHAdHKAytzFuZVKuwCsFjvQGWfNX8ZdbuSUs7LAsugLoykkEpCpUo5x27WUGtVAnA2iYjz9kFS22J",
  "key24": "3sMnFG9Spcr5nB3BEYwkJ4AHWQH8CR8U7tspB2pmAa3v9H3VmpfZvte5FQBdtRdWfHHK5kL6yHeehr6t6yc51yna",
  "key25": "4E9gQsPWNizuVEPfD4fmqRpC98y8AkXQXsQAWuAFWkTCcf5WXSbfgVXufKUYsBFxApKDbxUG9GN1V1gjpyE43aVo",
  "key26": "3ESwuzhRE4XtrGFqyfnzgQmH3e4QC7VXBK5vAiPiUousLXsZXpejyELJLQWya4TrZT9qGMmtoFKf1kGhgQEebkfL",
  "key27": "5iw5Pso89prCWjo4cfvssTupAjiEjKcdRdTRsEiyXiRSc16XJk1yw3F3q9RurMh2GjiitB6SMEnWT5bu3r14ZMTK",
  "key28": "3mdvLFDoZZGQSsoo893KEdroTRbqNZmKpPa7Ajac15hhP8JFpXDfBWBebzDw63mbzn49xbEJNVHZbtXvFKyBQHED",
  "key29": "3FDbySDHKb7pUQfdb29h82ye3A1bMVaAGxWYPWrc5Yx9HtMMHE5d9mdDiZa7zVXenkG8oB3mEETxaWKQ3bn6LfJG",
  "key30": "RXSU8o6fuqkjTxTJkwMebhGPyUCgACfncVdq1x9oycntuYVNgBtLar3Uv5vf1dfbpnPULsvcZiqtNqTEsYnaRua",
  "key31": "3x8DfnRN4huozMYphaE6pJisUbSpAjotoeTNfUda62Y4gXsntFNEjeBYgHuhUv4HJ3d6HJwQxnYPfe6KdAW7yhAE",
  "key32": "27ohWnATYqGpSBpEepH8n6iNeT98FJe7EcTZemDMouzWoz8QPL3JLTog7ZthVxyoVymRGNeAaRYtnwX9kVzYfx9h",
  "key33": "2UNwzuDxDbGNLvTCeKkYnRhJDC6pSvFyMBLPCZ13H9WkZD1eSDHjiY1oVD6uRRcxskiA1DfgnBWfQu4Ng4QCEmJF",
  "key34": "5oQPUQYNgn6byFb7eV2uJCAMpyfzqSYbDqNosHNVMBciu885VagbotBCUVLkPbuXbYAVz7VwLiZgUzCUVFswnnmg",
  "key35": "4582FnDyxV3LnWrefSLe2Nw2H9LHh4uMWQ1DuZHfkY44VRseUaiEdfUMEDXmoBoT7wpPP2tnC3GJugap15tE6SfB",
  "key36": "4EheEg5LkPzygLxqUR4jYZA936wjKQcWaQ7mRfq29WvRpN5K65SxBwRaeUWTMpYP3MNxEg6DFcXbam5SqfNEzA7s",
  "key37": "4QAHzwb26BWbQKe8wXQ1zCZsCZidff9f8mTknVgrtXsNXQtYvJqf4cScPb9wwHMmxnsNpTgKBVBHSM1htFL1rvjQ",
  "key38": "5rgJ8UuREEzM9Z2LX9PMxmssyqqUYrzNXWPgprcP6ZtRxiiWkvcYkwXLuFAv89q1jDabvE31YXxHt7WrPrm49QyG",
  "key39": "Z4zKCXitSFH2y6Teuovg2XtHBBEkFZKkWX3DdiepyqLnNEhSxX1KCkbd9Fzey58ForEqgKoZqfoCfjsLmiX4NCT",
  "key40": "2YE32Mf1atojCqTqHYNeMEZ3sGYj6atvJnVrFt9P9o43iBbbzSwZ1kL875RiCRLSRCfLqrbHxRxp5oiaZk8gCtqH",
  "key41": "5mPPZg2MeuMAEq3w8VcnDWXXrt1HbmEfKNKpHxtjt5pcQNDji8roTAKt8cm4zReN3e4wDvsF4iWjJ4L6ryWoLyze",
  "key42": "3tRrcmNPovwXbjKQVoWcZtPK3zMtCioz8u9hdyVJ8LKCYorYBHHXuGXnvvE4zg1Nq7pSwZUHEXrMAgftL9hrRVsg",
  "key43": "3PKKhVwW5EE9jS4wBshT69LcLB1mdgcvrLNHaH2WVKT9YLvyWFv3rCJkpzpwYdrM6n3mu84gtiXRDs7w9cbtdCPg",
  "key44": "3TdoJ3aA6b7yYbmG5UJ6TGvB8ftsgDk615aDdPJs2kB2z4CWqEEqqWDjBgzB8M3fArixStFwLfzyuVjc4QehVjYn",
  "key45": "vVPNEWWXfkYCtkTc28DoEiQymw828cHTvyCXjE9bw4QL6vne4Qu2LUhpumMW5xDLV3ysaYEuESyAHELUKDU5dji",
  "key46": "3kbjdS5fmxSTNgCa7GfTw9ZAfHMsTyw13ThoZ8YALVA2WN4dSihNYnBDqdobE83KfhsABdcYozA56kBKgy2yZxVT",
  "key47": "PguDTWPENkNrF1YDNffghPUjCuGximsTaPZYMu9WiG7PCv2RAcsqx5dJ7GjLmeKimxYDe267c8ZeFgFkKsD2pcn",
  "key48": "5N93ybqsCzc5f5uqigzS1RbaQ7dATXpyDiQ3txxoGGLgjpdNt1386fqxD9vQmakfYKbmGeRjaNmh8EnVaiWrChrC",
  "key49": "5v7SxrxrSoVPdHZePsLk5sdRVCv6wFfcrttUwgFacYtxXFbvt4ZM75LggsfHGUsDgufztk2xJf4HYwQV9A87VrdU"
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
