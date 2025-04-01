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
    "5du3pDMYVhQZ3LtXFZd2fabKiCXoCBoRc2Rs2q5vrqnsbnB38xqAQFdkpjScTAqQuhtJCNnVGqeuE8WPDL2hzbrU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ojjTCvTvaKEivBX4NQ1nreUCnxrZbvXtF9c39oactxFHCYPP3pwpyPKFyW3nTJCgYiU7CKUzKyD1UYcbQNVE2Wg",
  "key1": "5TSZP6PopsVVWa3VRmuagG8h7JR23gLSsYUFWU2G61EPN8Yov2bQU5RyBN5U44gV9nkVzTisUcCp7wwmqxT1Bvwa",
  "key2": "5MgGqegNapiefYdJPCUyFhmN328GN7g1t49gB7rdEFQDDGpTkkKEtbz2uLXtevuS2grgjM7bqEy87AjwmdGSJR5n",
  "key3": "5FUcaPf9sA4WbL5s65SoNLkE4WNF1Fs4WvNFRYvijSRsCrU5R6qkk8vjJ8Y7opzWjQKgg5yHWYhHCyWu5bH5vyQo",
  "key4": "4yLf9KPvrdKRC3TtLEsxxXGYEwNq6X3Bz2hrA4HiEPzx5RBZk2vEHTDGFFcwJXxESQKNrHafpgjdc6T3YxjbFKT6",
  "key5": "Tc5uRyUsErqJWavs3W4bFiS7VZ7h4eBGyM6VwidMwxgaR4XVsqdsCEiym5meDCJmGsygZRpGyePqqgwUNUuzQ44",
  "key6": "31q5K2GUknFoSYsoTQcepkBracNXBoL719EHjKfgDWkxJ3YHoUTrsMW48LMhJ4uuBxPDShSBFBLoNsWU6xr3YEWD",
  "key7": "2SfpTqpkfBghSubfxSNGHEemZ5U3Kcz3jS4ahAYocXJtdC5RjciH4QTHjB2nLVkteyjFumBqY2nG9xabEeskaTVH",
  "key8": "2MZpymvGGCzTuzxmWjM18fLwrnK5PSStPbz37vUL1MgCPYHrMyFZX356AUWihKAcuJJWpri6u3pq3xJvoC9SjrAj",
  "key9": "4v3B8N6RdCXYFCBh1ZjBbWqUaEt975JMYJybGvocjfmk7QxzynMqDxUpJzPAGDFRdVsNVf1DexggLYneciMP4WW1",
  "key10": "46eEVmFpuPWMviDnsLZiP92Z8pLKaaX5Eym8cbDihFk1VEbc7toy5zjHNSWqQCW1UuaWuh1VCQeK383sDqBF7aq8",
  "key11": "4rsfbefZTf9akKW5RhykAGxsB1cxPcPU3NMJ4yjaUvTyHUgpq6NERCLut3zhdTTXh6qrk3npSW8DDb6NGDYQmq3X",
  "key12": "2MffBzTLX17MFSbuoq4rnwXwmm6DL68HaUwu45g4QrMk5BNAbEY6cPdFujCusx9oYSUYdMvoW8csPcgqkZ8FZWU7",
  "key13": "bt3mxBnRVZku14PMrtBd4NsrfWD5D6Fjgzun76wBtsyNy1HNMCtED7jdW6i88i3gmR1hW4xVjGRAVDRhyGgWs5n",
  "key14": "5yXuJmiJ9WWsaPA1GZLzNnDevoUcYcgwMLkwjW8DLZxwsAQn6NQkuPwBpRmsmi7EEDFGSvQaaP1gCucygR996wFP",
  "key15": "4piPfSFkJo5reoDCquJoYXFdBsHeQMPhSiKvfVmiE5p7ekPNEme3uz6Qu2Moi8nbfxLjZwX2LZREiAtQZhVvTo4S",
  "key16": "ZeLsju9yxaBw9bsXgHCqWHiwgS4n3J2zvxMZzMxadjLL6n53ou9kFawga2dczfJC2tnx8r8PW4hyyotdpdZULMF",
  "key17": "5V4Vc9u1PkEwtejSKmKmCkfV5Myahp68bPaPX7dbYb3Mk4dixQcRXeTbxFao1SKCy85f5Fu25o6K2Epf4TKCfYTF",
  "key18": "CpM3AVmdnnsLMTdKBb4uqJombLamAiGumiVjs6y3Wes1nLA67Xfmw4BHTs4kEgioqHMVVX6xNFT5YDF5zSrWMrZ",
  "key19": "4R8aWNTsLy6QGmu2GBfWN6Q1peX57bGeDAi5Ly6m9NRLXUGP5vQZ1Qh6LpHMr3btVqGDi5G3d8qnCmz6s7F5angE",
  "key20": "5tiivEhY9Xt81P8kNvkQpw7RsNJEcPhCmXdLm3bnkYHahMiUZxkhsaUiwkS7quSh9rv1GMgBCxCYU9eggcHxt2bT",
  "key21": "4aQQdgmfHJCBMvtP8fKTVzEjBrMAvW6hC7WbtnpVF6sya6sLMkRVsXd9g2o67QrUH3mH87i6g1TD3CRUsVzhe9fW",
  "key22": "5Jb89vW1D8NnchNoLTG4PmtG8gd3JCgDpbPNmpaDNBeCcq4yBJivhZ9ijuQ99PQsw3Z4zH4rc6D41k9RKTzGP22X",
  "key23": "2Xbif2BuCxQ2jBnofhwSBUVbUrBoc8fR5icG6TsaiXoKePHDKSD4t3nJtH4EdW5ryWfFE3BMkkrH5YkSHgW827qX",
  "key24": "3zGYvMAoeEQFKYQUF9aBcCgMfuG5N2LHP63LGtu4VJrKAv988JXP43oZMszV5gJq8Lq7oW5yxGQCsYyXV1pmUYun",
  "key25": "v7kYv9ufe6Z1i8b9AVQpvMXQqH54c4vayuGp9jCecjRVqDxvG8UEQKmsgtBKzQwR9ogFop65pkfaZDDupyqmpnv",
  "key26": "5r4XiwyvFwgtE5ECLTXnoR7dfjhpGxe46mpLJfm4wJptXtnvHZfE7292U9dApddUPbTDoM9jSMSyyjjMFiSF6wdh",
  "key27": "3BJoGFvF4brxF4dJqfoD3dGNHhnEQWfbB6mwGmb2iRawn2eHU514XrcR9k77BNEJZw5NQp6nS8AN9yoE5MuwJveV",
  "key28": "4dcy55ATcpGUvEi9X4tdzsBeKds3daJwxTQ1UEvQXi75rRjEPMoyRrHgkNmBhwqVxVVxgkypmXnrkLj4q97TyFRZ",
  "key29": "gi3KnBmaRZEDjyDHa1prbLtwVZiaJSuhEq8xqju1q6Tm16iWS9WhVtLXxBkP4tUGiE4YigHLJ1r3k6UDrnkrh31",
  "key30": "24VDdX7a5P6RrKZteX8Sci29wv3ao52zBdKQGDqfLdsNjp2VHwuUSUon8oEMERmmiYkwR8SEVfHUUoPVmw7gJnP4",
  "key31": "YPEoLxVCdQ4tfFjsfPrb4GwydvFqsbQptSGT9svQgyhCfFuHuVykDAfV239s4ng3jf2T2bR4bbgX7jRbeKacYBb",
  "key32": "5taY2nBztK4pzxQvCe5hMiiYUc5Sz4rmbtqo5VYM8fJRQ2dkEtH7jyUQP7QbJzFds3iR4tkmEncq1jDm7FEiXjHR",
  "key33": "pJHFJZadQHo6uwf1FHM6s4DmqJFArCFcsvPiAV8T8qEuMHyuu4avQLRdYUQiq6GcsYesSZxLEH8nyHWLX6XSfzS",
  "key34": "4W9hQUZzpCQcMAWXdBoaCVEXKgLugM5LVW1fsfWoSJms8H7apAPiH26EiDv9v5yRuTnsJvNLbwfpQcfcfVv9PVeJ",
  "key35": "275JccDi8FjD5o26XHRscnde3YknvhouhBN6tCUktoFambQU1sqwxcbWpSBAUp3oyWqzG7xsNEKfoaJ764GCXKRS",
  "key36": "2aSHmsUn84PiitwwDrS8fnTzMoLucjjaEda3HRovPbFocWr6BBaCJhbibBHBaFVh49UoBKaUHypMPPkfh4TYGqWn",
  "key37": "5EbGs8BvCbLgdfmr73mQ9GHF2UsjEHGUQDfqnFVfdhbYVyDVzZMymRpUW9yvxdAJoEKpGgABpxQ7Nqphf7QSSPNV",
  "key38": "36CqHeho8yQC9SPVBfgBbr4ZAqcKx1jhCS3yFvQikDKvMmvmcYxhwcJJQoCneCQbf7sUdGvtUaQmMbtS8YbuYoRP",
  "key39": "5Kvm5h4SUaTsL4dYG2FLBKctH8gVZiBh8PajZWnCLyp7ychdAkW9karWH6p9uUy7QornbeFDLfVHFoDnJrJiE28D",
  "key40": "3cjfoc5zCb7pWa83ho8TbXe489ZyP2WNg8iegJDyzgbcsvhzGo4N56nKoCfLGrUDHpcKHTEzVZDh2ZCSzA9Y1DCW"
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
