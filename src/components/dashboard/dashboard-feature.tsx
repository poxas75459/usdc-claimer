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
    "3Ck1ZQY2siZe3eQPV9RxGBddTTkFbXyCgTei9JigPw7888Ux3cWsiKzx3d8bQ161cTuLtfHhmfn9RmbDykfYhJj7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Lpkrg3cK8a4toegc9rYcyVtX4YkDxNShXBURqPtFCSqnLYrUx8goLJ3hBN7wDrgXNHqfbYS7f7ehREVxGP3wRTV",
  "key1": "41SAZesk3uZLsTU6mpUYaq9hgw5UBwmDnd6dUFnEQxYX9UJEoU9UbjWk7dZBzCfPwLy9SMWkZuEfdJTVihxQBSgE",
  "key2": "2Sz6SMC2Ak2e3jyb4377mg49sXryXQJpbsDX86FdfJjebDpucam91fgkPNP692jA3i6qndhvvCqb4LhrwDuitTNW",
  "key3": "5Nzt2gFySE868WTR4FGDxKjYfqZJ3p5BVn8A2TW3XZWNdeijLkJFyYVPD48d7DgwttYeSF2fozmieS6wC2VzBLmE",
  "key4": "24gJNYaNdBMnaVdCv9VAQLszEMBRC76F3Ga6zYxNvvDhzmPR2H2bEYVSQVcN2evTnAV5dQkHWSuTgwgqnRcyXHoF",
  "key5": "2MzLiH6tVt9w4nHiR2QcPtPxjzaRX2hEdFFFK42X1EWsySfw2F91janRGAMKSD9BwM6mLL4c7T7JYhNjHRf4VLHE",
  "key6": "2cLxQU5xr2Kbc3oShEgK4cZabfiNUnzM6rASFuZaocSYR5y8iNjmDfqB2fLYwRq3ZbLGoHVHBArhF4sC2JGSxWL3",
  "key7": "5MQLFpbWt5jSWCUguvhvu8ymLegPByrcuusF4t5pqYTrWjF9xkV3iXvJRrhtBKy9fnKetrZhCyWrZtRig6HE1BZK",
  "key8": "4WZFnTQZERzSWhmZ2V3aemD8VvoPL7qsSrRX8HfNvFa7JK2n2qRMjmV8QN49jk2xeTXF2oRKNiGDg2Q1DE5MXrhh",
  "key9": "562nLZDALHoq5a2pxXpwoQs2i946WjUu5Uj2yebTKW9HL4zAV9r4nDbhcUkjRFWHoNqgHxM6ZXqtYNHZLNSR6r7D",
  "key10": "yBCyADvNkkR1DmnJCAPKTz13szdzQVQYgvP6hz6deCxVC49NTYWosVnBY9shP89phk4Krr6hvy6syfjzpSP8h6e",
  "key11": "2g9Ke7i54LGjUQYU2eAeUQkMDzPfF1rDUWRcZQLQQE9fM595eZcuCJbctkXMEfPJo2Z5wrgggiHvcwrxhBVpzmhe",
  "key12": "5FuYjeZBUNq3SiqyQZDcuY19J5qjr5ec5VibxB8HfZjs7TETpZoE8hjh4fDmCiEVDaqbGoXoEbeyt1tfGBxG86DN",
  "key13": "2dzjd2crc9fGommwZsYSVw4W387TY5LZ3CmwLGLfcYkGwLkT3pyFPV47NeoH71zNqdJLHPsAzd6jpTuCfuCG9iTm",
  "key14": "4qPJEe6irDQVZBBu1n3EZYFzdpjEpPtEBMfK4PMqTt5xWm1saj7gQhR3MBBrSonHqV4iZ9Y2tctRvTEcNZ5vnGy1",
  "key15": "3vp5qSiARgpd1fdsYne4Ke22mPMgk8P4XYvyZR94Trae5d8JXJGgViupnP1Zq3foQyxqGmU2v3XArhXkd5qpvp5J",
  "key16": "2jzcgx9zKJYSkNYJrJ8X9ahbCogawUhCs55A13ib6snPTHFmEVgwfaqCAkFWkU27PCjhZZqibrMnet5kMgFvXFv5",
  "key17": "RJYAAPyyYZHnvqTR9TgeBBHQerQKQqMMjdeEpBzGPT9oKnD6E91NS2jeCw4QAXfnMTE6UYoUi4RJ2os6vfsMqKh",
  "key18": "4kGB1eQHNXPakVM51CDHmhnsYafQwKYk4ETpL48JM6yrEQc6fSmwHoxdELguuuGaZNo6UpwUZGpiu36wBTe7ubT7",
  "key19": "5PYHYgfxkHnp1DLtmnZHpzbBdAbD788zqMmVzdSfqDNp9mvbJkzAVc1UR5kQzFwvRQVjMcx9sxJuo6ykVMWaWum6",
  "key20": "5tLRWQ44ZLQspKHszAXNWDrE8GfqatmeNqQCYUJCnEbLtG8DkB7KXof6FMsLMbPYQ3j7zfXN5WxDw8AXUxCvsc23",
  "key21": "2pMxtgUKKoRxXNrX4D9mySck5VR7tDUA614sDNQJ7KzPzt1biymK9Pik4Ekhk4T9SqRNG8crQjTjJPzSsu2X3RKh",
  "key22": "4eXZbjjswWRaT6fzKQDPtsHvcWMRQdZ85JR9UV1s7rLntbU7tKCsiQNzkfY6E83vDBUswBfrmH5u9xhRBo6mSqaY",
  "key23": "2B7eCTwZEKVKqbg5wviXqg8DJGT6sNYuuXx9AuJRKHvVxEgJRUHJxfiinDBEup1RfeGJfjbAV27CULSZiwGe3c2S",
  "key24": "4DqEpGZ75f24t7voRhRy1sRH2DHN7LZQenr4wXjpEPDwGcXajLpipodMhMYxF6Ds6YLZ6mmv1vbGyxQYWkpJkJNc",
  "key25": "3JjyWU1LfaLcwiEM2ixQjjjh8vkf5XsyznfqkVGz4iWQPrahgCPoRXA52wYjstC7fRNKzoXsdW2vDb5aS7fEbb98",
  "key26": "2ubjPTM8EvimKbFrRSYJgGAtfxornqdRnkGjHiV2sRtgHmeALt1Rrk4Uo96Pz8EpEoCPnMa5Fp28uWx11kNGoZSe",
  "key27": "3n1DsGhViibrceH2VSYY7RcKsxHgCwHscp6fXJQFSt1svW8bQHF9MjKvEUSQhoLzTeS8tDjK2ZxiJ24r8YxGVxDB",
  "key28": "jAYu1sUUyZVbiAJqWsFQ6mhwgPRXBJshXAXrdvC6WycwRF8pZR9Wqxju3FVdKmrmYnpcJdQfWhGqGH3jo7ctxQ7",
  "key29": "5qVMqzpuqYg1vu5vJwEayFQW1kgwyE18QVHAjHRycQXDxsMT4JUtwe53bKrsKa6owRjeAKfpWX9qL4efbithTmN2",
  "key30": "HYvTkDwu4a3LkijFTYDogZmACkVAmqgz17K8s7zrASEqEN5h32DfkGTRQF5ufNrZznwRCaKFNU1zG8tACX89JdA",
  "key31": "5L36NGYCcrvejtZ5QEGgm2gbquFXQRCgbtjySbW6QGRURDRmv1viMmEVGE1CrmLAkcw151N4xwH6uWkGNVNyMUcp",
  "key32": "5y8pZvAq1m3Bjit2Wg359ZcByyR7Ndef1Rm99WsvKVFq6xw7BqcfNyKmb2zoWhQbEMfcKBadxtSV13areo4xJTgD",
  "key33": "4yUG4t2yVqisW2JqcDfzn73R32kWcbZiQ1RY9mrLyMHz9MZeSyNjUBwMRJQV4iXqwwWvxycm4eouVUh4hrefGPGm",
  "key34": "5XK6DZmLkXFnGBVQPKtU68gySixpAJScggA2QM2zgoUy4sGL3W7Wm88tkACaRTqbXymtw51yLBSje7MWjfJ9W1bC",
  "key35": "4dqKyN9J7MeHBhZo3MWQoxbMEHCami5GG8yYkez3uWHtMYEVeJPQhF8bv28WjdSqmj49u2ofbuyxFXDGtjehicpa",
  "key36": "4NokXE7TTEgrCRFGsZfdJFNjs57hhC4rtuJ7VUzLdfrzCvQaMos6GitT4gqS9KUnanxVUHoZ28SaGgNMW3tRQmem",
  "key37": "3R28NvZLG24wA2wcqG8GZkWhxPP48k7hP5hHKXoeDzy9Z12QbbZ8J8PQVaAepZr9F74oJfsaxv9uB7pf1hHQG6A1",
  "key38": "3SUKpE1kwFoLx3UytdG1k6jZyrt4gnkCkDQfpL8YLgjTxQCLRq1Yf76BBehBBgWMsFHfHfJdwzfPFURihgM9HA76",
  "key39": "5X24VpiApDxJBe4haBwMQPHkxyQpd9KMacBn1mGAwZNm2ZF8q49oSd9RgQyhFVe2iRDRxE2MHQAXSQaRQga1Uqtm",
  "key40": "2yHijCZofpxJNgG4o7d3hm6A41DpkPZfC76TE6LE9U1S6wcC8Ro7v1HJwGFF8WtNSi4fi6ZmMVFeQBVfZUhJ5rfp",
  "key41": "4CBENKy4wBUfbrb4ThW83c6LpzxaDX2Dci8476ghqMHqmTWsX6ePxx4eQeaB2zSnqtGqdPJq2CcqYtPAkZzVSzNu",
  "key42": "4L7KdTCbBF5foJYjruYumYYjp2Gm1CTZ9YHRBBbx7wSA7CDXRHKVzg9NhaiUFDiphbezmccGNkXYkTrp6kEKVc6E",
  "key43": "2QQBGZ7uMUvCkieYSZHhm7cC1DLH5FRvzeVFYd37Ajc89c4gPEEKGiwDJKLzJHiYWGgjWvAMCGtA8Q9jY4og4dTN",
  "key44": "2Bx9cNCpeKQRgSF746G7wAPC7k2fWCaom3uW8sB6haVtrx1q57RRqgHUCV3v4MsM7mcBc4kavvvfC1TFseyEw2Ts",
  "key45": "CEnZGumjzYxhk4kaksKdpCw5kYgEkmSmzwhhCrVisjqiuhuyvoMSvComihvodpYULWRxZ8Mw6L82vx4muGerWMB",
  "key46": "2NFqNaqGQ6j7iWooUGc5wKbbNMzuWUzphHaCt4NhEncNjpvxnLM24K917e3kYnD3Enap7P5Bm7TpJMgi4NaAcqNV",
  "key47": "dEqVYNqg4ffPTnNeJNbsAw2EEjbUSUJSvDYr9qGLobpwKJzJNBT4kjGFTEFEZj4qLVi3Er2ZcfV3dr29WBUicWQ",
  "key48": "46sG22BWx2aRvck1zPYnSshu1gd9FQwxwd2RZ7BPDg7AuwWqNRGzVDBje32SCyKrgkXgQBabVR4Xbm89tJKbEzNF"
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
