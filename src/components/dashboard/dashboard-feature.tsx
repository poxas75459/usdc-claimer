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
    "36E43TYAwBRq7ZSPaBD6z85Y2ZdjufToi5nZAWcQTqtewmS9adq4xGKgjFtu5uDAAy6oB1p1cJGLNQHgXjysBUAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qDS2YyyH8kKygFFdb4jjXtN5e62zq76mD9WuTxYWzp6czyKZVBoqrZDwpNXtGichHbDw4PQV3ceMYBRRZkvTwmP",
  "key1": "3iHp2AptK4XjaYneyVcfrpX5wFVh9TBzFumGdTHzCraPWuV1BTQPsu3iQHqmHvjPanGo7Mv2XJpVUSn6B2JQNG2t",
  "key2": "2H2jfkSDgTwqMZfLofR4VbpTgweiGVanqHcHKnFq7tAabWXnRJh4vNRxNJRk9cibApW5FubcApEU7qfhnJ2RmJ4v",
  "key3": "viuUdJN33a7V8EYHdRcLW7PUxV3f3ddJ4NfwL3i3BsRiaEwbdFu87tc5542p5WyoQXkVwwR1f1AnQKe1aigwac6",
  "key4": "28mxRxcDm79s1FnNGzS3fe53VARxjXMpi5cAauiw9oXCxg3mMTyF9AxxyAKxARy19otD4KpANL7bwwetrRG83e7j",
  "key5": "38USuTRM6aJE5Yn4u3r7LQS2hcC8VwWmNSnxM18cxC5nMZBfTBjaZVMK5bury9AJfmA1MfLxiCpgVwXatPQ4Fi2C",
  "key6": "4AHMPcossF4N7McfPrz8ah4kKboDFXBjUaY4wWcjkQBjGyLvefecRqEhDy7ZJ2SZsjV1S84wDc1VYAWyYnErEWn7",
  "key7": "5DnhBuZjdmg2Dzffep1V7ooujkJoRgcftiFgTuSSGNFBswzwdRG3ZQE76BEdoWbEVbhmcMgbq6r5mjEdhkt5SVAi",
  "key8": "6721LwUC5unB6KsEcELxd3MVWubuwXi48n66keKBbNhjyeqbfK7TU4yzUy6GpESiUAk7xYV4zDU71BKVChRxq4tL",
  "key9": "2GpJG73jj5ZuMUyDv6Y1B9g6dwoCJaL6yx1NSTuyZvfdJaxfAQiJSLTGaX2Xv4nxNvFTJHhUxsA6oMG6N4CNNJYK",
  "key10": "5xANntxHC3L7vwHNFioQ7R6Gz48oadVcPbxctu3kZpPr7Lfs6rFCdzeiWDXtG8NqmYaUVGLTX8VLvtBfzVBhWJgW",
  "key11": "5RzWcctqPqVpAkvZo7BTf7LKKJ2JHjUjmVH2GNkvRbEevqxdUA5Gfw9YHD3H6eU2i251gfdWoV48yVTjnT2NM5EL",
  "key12": "5TqtLN6ENYQfcvTSDpJdLiEs7PwRzA37Yu9gJezGDsYRiRBkxoftGELFJLCuRr95oapuDs7Z4S1T9PLiVmvMFhzC",
  "key13": "4kvisQG7BLUiyDkwEMD6Ro6y8ses3SrnLst731BPBnSK48ixuo2Bv7e45Q2UsjJ1P95hcHAuZdHZCA9AHHieLSZ6",
  "key14": "3nXT7fdz3z65pSB5b5KxMZn4Zx8CQzbEbxSgpnwW9XeV2x7TWZWGLxvimnhbXKYN9HUGfbujzD2HRDPjkjGXEDnY",
  "key15": "REf1LNk54x1gCz1Ljk17QAAFn1MFTg4rtaHATXJaaBi8Dq5fUaZcva47xWovafDAUFqX2y3vW6TtuHhiAb5d6fQ",
  "key16": "5YBDZ2FdxooEzRbVRG84grq1uAkDrCzX7f5Vx8vXvejVchEwNbQYNNtjA5EdsFi4GgELE4HL6DmDYCCUN9dNyruA",
  "key17": "3cavVUMNE3VShbwwfYpwwpCTLfdJ1npKnVUWujxgLxGuvdam6PpvNemkpvY4rN1C3njcGNJCmL7kj7MgGkL2Q9k8",
  "key18": "5n4ELXkNBZymWbXYRjUsXFmVPF6adAeFh8LTQQTCL4qM6HoAkoTxiP74k1yjVd9GPV897TUVNQQsaXQdTyYdLsUk",
  "key19": "41BDFMVfbZVbW1sQmSafaMWBhqH5gPu2S5xMTee9GHswwsCQD6zrpEq4wKBaZn1xP65ZrTSS41jRJNK2HGX9FgjD",
  "key20": "468FfKeqxo7EXYuCUrcZHhUA5rLRuiGb2BJgBCo1JDp2EtQ3KyavQoM9tJXvgwcHHvjtCsiCohU7bpyDJN1BB1bu",
  "key21": "58hCKT5tYAFJbT4cnyNVEE5A6Q1UQbs5ju44nHtfnRPAkqqHenVr3fWZX4bTGfj3Cu1s7h2jLN7xZ7GBVTjbfFfD",
  "key22": "5vXTq3qiRm9oKJ2oyPgqppW1nk6jx5A8q87QYmM3FcGat5JA8zxtxyM4msyeFLp7s2DSmjMqtQHTJEutzwxEeYWy",
  "key23": "3HYEZNg1oUM8Ca8qpiS6AxNtRpWT3JfHx6cGG8P6RtVzCApv3ZmNRzEMDcSt4Ee9YuyHSoTfZj7tE2oEHx8kHjAa",
  "key24": "5pVHTEtLMvUGNQUJwNXFZWyjWC3wZq8tGWdvwCsvKNPudQ4iJyP75FAd3iKzxJczCUQefkobdwg45ELHGpVrgFV2",
  "key25": "2mWG1CvPu68jnnuxaF6JPTgyJuqT6oVPRc2w1NoGuK65fc7gwMrtshGntAauZJAtfnFAQCNnUM5CgeM4qzPTxSZm",
  "key26": "5HyWBDKnKe4jBnkpHJ965hjDBn8gLbLJKCwFLeSsHKkZYUAn3afy5cExtkN1gUjwcW52twBju61HpCucNeEryvkq",
  "key27": "531EQB3xK7H9vpvkpEBHV8ymzEp6qGKn2YDVU1Wbta82FJBFUGjCvU8JRtSQvp3HZfJg4zaLUNyDmThqsqSBSCYf",
  "key28": "29R7wLqK2cswSmnRXrCyMZA8rQSx5HZX5wvbXJaGnynDyc77LnQfazrYURpaKnMzYtxSez2HX47GFJyEQT4U2QMR",
  "key29": "3zssTeHbxVu1kzcU6JvYSKHh7rZ16qGAWFj8gr3vmNtaJm3CSruZo4i1EueR6UbTahAWu9HFPMcTF4ciVh1kaMcU",
  "key30": "2HwVWZSnkScnjx98v3Jfnt9rM1yDYQVG5LihbF5rQ3bCPKsgZusCjruqitagpJEgh3em2aif1RVVZ7N9wcACYKGN",
  "key31": "5r9jq5nFzZLPbLDwVeGBPzWXCYfB8V41HQvoohuzgg5R1WTdzrfixmy49NjvYJ4yqXfZYZm2K1sYDkYSv4DrKBJa",
  "key32": "5JJBc7WwXBCM5S4WJy7zSZffv9u2MVrgxf8mQtTba4kRKHaPnynQVrBYVDWFVn9ZeioHCXnwEgGWBGfnC8PwWcd8",
  "key33": "27UXZuNy6V3ZhefNVbrtnWEi2gAagNuT67pVPcobULuc8FTTKjeZdBifTugZVakpMXiHdxHSP3EuS89C49uXE1vT",
  "key34": "3tKrEMKpmH5Z864uLAYQb893cZSgWiwze3WqZUjJgQrVnYFodLbeHTYMFouUAyYyhnmid2S6AnxS4eRNELYemDXy",
  "key35": "5k24rcNweF7arYqj6w5ui7SRvPgRvTGtP6tVk8F49ipnRqhhowrqa3dcgYEMCfzPaF4h1UYitov9UHf47zp5cxeW",
  "key36": "4BxKiLwjrxicRqBj8xqgjJWenMooGDFryjtNGNCzSDJWwMRTco4N2BFnaaT1yXzuCzdrbMuu2F7qFMbMiRPg6omi",
  "key37": "2kt4xWrPnPpkKEsmLUmGAmeiR4PwVjsycrDqAf21ipJdxvVhCpUAgzxZ8KmyvcqJXdMp7g6RHvjCzuhk5sYr61fL"
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
