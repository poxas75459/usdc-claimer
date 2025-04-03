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
    "4YabF6memB9g22KSWMXozLSkTJaeUUG3h8LPBMCkXAdVrqb867doEBYEc8ydpPTMnRSTU3iekvwuyLdB1yxRHGgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54hVS8m6tWBpuYTHv1QsytAysNsgbQY16RbGZ2beBP4Qu6htjZNZqG8U6t54ZA5JaTWMNX4rfjbYz8eFYMzs3Byp",
  "key1": "5WADaWPK5jn1bBHHwWVNaP2KSVJ9CLrt5gkF3esGbKVdT7hWkxGAncUZsUrxriN6GP6ebaUfZY3557tTK1WqjqLo",
  "key2": "Lu4WBE99JhoDMBnCaf6kBVsq2nZSbKwBbHffnFxfP3upNCCVMH7gZBRD9xwfjDUe1ZqPMtaUqYXkXukdPBRc4YN",
  "key3": "FLPsPE2gvJw2NCVcZxGXaMHDbBo272fY9hdnnbgKw7yH5bQHJZEgHepWognfoD9JEfoXuL7S1XJsUsn4bP8PfBs",
  "key4": "4SvchZgxv3q5gPHRdYs6tPNzJ5k9us42PaLMpM1GsSmh4WYGYZwWfY3Nkz3rA1Ur2nJcQFGbwZAfT9Vr7RJgDWoR",
  "key5": "4XxnHXwtz9ucrZBbywXvFJGLT8P3eAghAVQ8bQr7YnyHo5T83mDgVVUePJasDZ8Gn2cHBSTxJxWgkaEjt5o5ihgj",
  "key6": "5pKwwUFYCEi9A4NFvpgGoY1B99UBAfMWQ9p7yBwh19DkBmt7cyPqbsWJRxMtyH6DYJP4TjWyMeVVum29Nds64BGq",
  "key7": "3gDhcUw9iqKzZX7pjwCrpiVdeSfkmD4FwekpCEHZsHwci91ndmh97U4rSfme7B4kN1qYPQBjByFahYVr6gMikSBf",
  "key8": "ELLoFtppqv6k87US1uCStGrKxgoKctnMjAZeYVtMdmCGcTvmvraa674LqJSM1PAgF2uKsz3avb78dc58Dwg3qND",
  "key9": "5yW56ditee1npJ9tfTztt1kK8etno9FmgYVxKUFX1oh4sFXPpaxDoKLCeuS4zANfghjnYEYdCSePoAou6ACqbf7f",
  "key10": "4ViPfeM4BJMyw3ZmSbkoMW5JFxj9i2e2vVMECB4mVYgJQ4Y3KvZWVebVG1tWn5csAWXVxpXr2AeRSMNBYPQ8rb6s",
  "key11": "41fdoXBAujv2exD3NezBESkk5DgNnR9JGuGMVAH4oqZETUuMTxAXzCLC9KfJbDDdcyMLPP4KQnb1iS3UedjuG4Ue",
  "key12": "3XiEyEMwsx8CtTbnoVFpMRQFwPthMVjWm4EAZm9TXj2ogTW7Y7hqfrtCwKkwa3emaPBiTbug3eehVFwWPJozYCYT",
  "key13": "QaV21CYkPscfCK95BF6iSj4cwrkW8Gx5n1U6Z23ZtF5Bggop9coVm3LYAtjUBHHEaKbNi3ktXVdgRPxYPs5U4Ft",
  "key14": "39dnfZ8kExHqSaioBAsFhxzKYhfoH9afupRfJbeMaZ8WbzxFuayRxosLXkoGSdVMFcyxcJ4bvBm7h62ToXTNpZjj",
  "key15": "T1Pbp6bsmqVzyznb6kSjnLWtk5Y7hKT8YkATnzQt5SSG4ZxQXcp8QcWBYSn1XqjZd5t7eTdNZ7ds9VwsGhY7EPL",
  "key16": "2UakydbKXAGbEpA5R5v8JHXWwtpqEAR5uefpHu8gssGPFDb3ZEYWfNE16H1FdFHoVQHQ4Y4HhkdKfcpRFYaSnaX2",
  "key17": "5VA44hfLhV47d3NGEpsNzjMBAC6Yj1Y5toF7T2UcGHLFr2M8NSoV8NsqZB748eqXpdW6ZBt8f7XegKnqcLJDcaLm",
  "key18": "4pwGqX4PiY1j3TGaVWdfRqbb8hiPxhedFYNbaToWEhVfothWpJj237qL6AjAPRh1UJtFZjjPgkbAWVGnsYCp1nYG",
  "key19": "YXobdxskmEhmzvX9fTxUbPmwWd8iwrddjKWzmq5LvvVKvfBk8U5MJbjz4DvCFsR6nMuMghRvQ97aRbmotaDMxW4",
  "key20": "ptwbfVNkbU5zt2RFmQFhvQgs6JfvSRWqPzjkV647nmLcyadCwZkd6f8WPSQzrDnYk1q3HwHmzEknnKYG8s6sqUf",
  "key21": "5qGb1NoLgqKBK7wJ8ujZ9Cmuaywffb9paL9dvx2N2b8Z5DL1mjvfdcjYXTpig9QJfk8Qn5QBHr7QsFCUgRWiikxf",
  "key22": "3Rfkpn7KUCp7tpgVazMX6KkiA3gUm1abH5UktxNMT69PMmtCPjZ2YBuBZiDkJRKs3unsLJQNGnNkUhPYh5sAuP7Y",
  "key23": "3smLsd2U1jgtURDpPNMDC3J75otdJccwiQZBDNokKwP5awEbVQCR9vu4Ghf24bpWDwuguKEeksV7taajj4XLzKBj",
  "key24": "62t5E1xk9qzPi7Yx6Dqz7c5y7BD6z2Sm78Bkaz2b7prpmCBRw9s1eS8iMy8wMsEmdAAh1kmyh4EnoUEWwK7jaG3F",
  "key25": "3oh6MmjjCPZX3HPPJoYN72ijiv8uG976GLYqgPtE7nb8Fixtiq5MHJ4RYtHpCYXqG8XGjAj4Hy1SrEgCJoY6ntRV",
  "key26": "2SY47gd2K1juZMuWm6CKzn1M55X8oTWxmt2WVcSkiKq1xdjYYxZ9SPYVSXJ12sYHEcAu4DxoRhvk1TYPTsUKcohR",
  "key27": "4SdhpuYm28DYrNrHe7SdCb4z4eNi3dAzM5qeiWWpE7atdMmnNVpgE1w3r3dryLyyTPFCUfoYC6RvdBTi2VLKJq39",
  "key28": "3zJPV2n6DZkGDscpCkTk37XrJkR1tK6Va6KYpuQm87fyEPgF2q9fiR2VhoAuAFG44cFfdJTJLZ1PkBSDpyhu2SYk",
  "key29": "35pS9Uzb9tUcfL2QSURvx3EXtJYHiDRuXJ249LpEE85edregC2nRW7HBX232S3UNMr9s66Khb8B4S82zJ7JPooLV",
  "key30": "2xMKQtEykAi96FGMWhPP2oxNPf5fvMqgBA1Yayjib1aXVFLGZjBM34pPzk2LuzayeuA3vXRfkNbsEwuLyCWgVyz7",
  "key31": "5PGnRsxvGh3PQ4rLDCgaHJVeNLCKFgAixTsAdvAfRVx542yUk76AWZWTW9KaUgSCVEgb1uipV8uiD9vABXKRtxV5",
  "key32": "4R6WMCfdTnoJWvQvqLZxX6r42SrsCaVA2G26oW4utCRge8CRqEvTPKe8CpvbEAgXKyZvvWXTkzMxbJnwaDHqAiJF",
  "key33": "5aZaw782fR8vVp9DTjqar9ATtzLjwr3yoR8uUGXgUQ65TdFyZafDFHhqkAmvxVEAXHwCDSSDkujKEeMLFd2Xmt7e",
  "key34": "2q4LHhy2YiGYUwR2fdzTamCVHZFZBqA61jYzx5hS9KXBniz95QpjcSSumaX454dL3KqMMJKPfnvHDJw3FGwBwFaQ"
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
