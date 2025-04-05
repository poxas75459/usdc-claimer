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
    "3St1FtWn4XMDWT8tvR8Dm6Z4xVAHcJN29qHcPrcMRzExztJW6mGUQq5YBaExKyHSq67mSf9qSxqHcfxAU2uGQjg5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fLaySZN5R7SaHBNJvEAYUffSMxa1qtqDppZKd6pPuNtk9uPFWGCcJLDMYStCD3EmWD9fuiv4mCE571WhfqU7nWc",
  "key1": "45493r4me7h78DLie8PcrQtF9b1GyLSAZgFAVLqiL9xoYPFPTZUUgUdqZCGUvbHgkJ1k5eRBuNxewmDe5rCPMVvk",
  "key2": "51QDdQiKpxptrg1oSNrwkttiqGfsmocrL85yWCKhV2KJHtQCY6CpZ8MsTzaHAxeWFLKrFitgPACE8Lr4d4cdC97W",
  "key3": "ruEfNTBpDBoD71MipqtMTmkBreSMMToFqksrBAvMM3FwbLBbVSmqpW6fYAGgC1FHRvrLVkRYoMRB3sJ2ACtsTZp",
  "key4": "4xWpecDCfU6VXffGQcoQ2TcpqmgRroeWtHxxizXKLKPzLdtdJBHJauWgfNXd2RdQbXEnhfVpwPYX4FZVX3PimY9t",
  "key5": "2yfDutYQEHSGWXjiCWQuCEttxuUsxyf2RVS1FUyjSbP3cvjkpxZ3NLSci3BnaSj6HpXvjJbaYjEpqTTzEdADV6Mu",
  "key6": "5s8RsnRFqnsa8PUXtjy4GZ93URR74vo9rkwqYMdbtxyJGBtpxSaRbxVMroDc1LGLYhHDehNSoMLQkhrLhd3KmTDx",
  "key7": "SpddxphroNb2FGvxRG19XeSgHJEa8Uzm6c1VWYMg79HtxcrvCGXG9uBGFa7kwrSHBskfap8hPexRWFNSsipfqKV",
  "key8": "Wri3dPgDJvRxAyPxwE8TMhZyLP374cPertysccp4pCkWiyUAu7vViQEj2EENjSJza4ZnkQ9miuRTDozzCjHEGpf",
  "key9": "4Qze7dU646f2LZgEHiEY4Kpmd2WNGrMwMKtXjhk6CiWSYXrExH7Uv27ZSG8x22FYwNbMGWL2ZpPvpTBiQE5NEnhA",
  "key10": "5NDJtNtB7eKVPikUAs27NuVDUUB2LcoU6Jr5Qq3Paf3RVe3WWZMafwfr4TXhkxVGKiXPLNw1zYukjYBWm4TDebV5",
  "key11": "4AkSqhCPNCA5XrixpfQYETtUCqcim8AwP6hcVnYx7MRsFer5hxthMmvEyuQDeYLyRAiSjrtoFFYTqJ9BfWEQQFYE",
  "key12": "4hzHgZ6gFLwGx6vSLpf1iQoinRDY7bS5uGbQEEFsfpupuCFSGSQhybSUN8jbnHhKTH3x4iv29AY6eV83EXHnqDky",
  "key13": "5VEr1mFAh1Rt9U5TgCTTBDLWf7NKQVYV61wJfrZM6s29YmBXokNCqqxnBfvjnMqLRhs8eiMRiuZVTfJ1mNwW2QSW",
  "key14": "629hgE45pLLeh6KnA8N8Rfq3Z86ch8NizpqPGPe9ScUVeJ8N4dq8qf1E7f1qYnVhrxmLMmBBUUm313YjxN8NJVP9",
  "key15": "3GNZchh2ktY7JHQxzy5hfTgkVgCuuri7umSDL7KPmqZmmKSufXG7cc6XtE3GdRB2a8mkHJnR1vxFP5zUDm2nwHvk",
  "key16": "3BmhFpfrSATXE3RR8F4pxC9pf3cRchM8oaxhYnRWBc5722Qaj23ZH5tA9tiDooLvwQrvGD7pwkdR15LTjutUKVL2",
  "key17": "2KhLRPAxQDKYXiRkyRxk8ERraDyCpCwZzgMG9qEeWUtwnuA9EjshS6XJW6UpNagiKEcmMuTentkXUpmsXvVgFrRv",
  "key18": "4rRKaYH8QysAWgHwtyLnbkgEpnsNGgU6wRCikQJQeT3DRh5M3wFZxw7ythEfUXAJs3onMUCwbxhwcq7bxGS3EPe4",
  "key19": "47h6DTZ4QKNyd5Gf9MpKZbWgretLmgjY1nW6spMfgx5fTqV17E3XYpTzU1VN5t59ogFTz7GayaXywUbVTCv4sLdk",
  "key20": "4dQYCfB82pKyFLPTLYuYjUpfgPqRcUriYiK5D75dhi1N2YwaSqSPVnmQENA51vR3jV9BUE1kRWbe3ffHf14JSYUX",
  "key21": "2Ym5nRTCXyv9VvqqTLPmi86FqDqz8eurBhCtwJixCV7q7Gi2SHeTuJpqga5b1K1SWLgfcahMGhL8JMvgcNKwxzom",
  "key22": "2CYcMdrrT7Z9GgCDmMeKrWa6qddKxjHZXMN6EJAKvcPihARxNxcoEM1KiqSMboNzZ5NEJ7WGvJyZCuWVAgFwZ7DD",
  "key23": "DwAd3niH46ZintwTbZoUM9ZbVR64DTLyBmY3NEoJBqAfHkxnjzW7vBtGxmupiaj1DQ8CDemwF1qEx4oihzFnNyS",
  "key24": "5MvzeaEf9hQhv6VpxV8Hu2wSG69ist7HYKiah9TCZ4BrtEzkcT2bNqMW6ssoB4SCtgzv1J7tHfTXwkP3umCqFpEA",
  "key25": "5CH4wNfeVUbQv9PjLdyqBEvEgvB93Q4vxQ963LeBpywK4yUyGLK5zZZcfERYozx9hgyxfbiusAoKj3iRY2rD8h8r",
  "key26": "3GCgKBh48W5PzytnZpzvCAt85GMybQXbmdDByHDRPy3isue96JzjW9S8iHFt73sTTsrra1MY9GDiFbZnpSBGAZSv",
  "key27": "2qba61mrsrgBipHFGwNQGD1jJEZqhT9E7FQ69uNJS9CFUAe1zccQyLQRSSo7bWFSzg2YbRBaUeyJXBechs2hdUJ8",
  "key28": "3rgDF2ejmbu3WrmcQh9ehA5cYhWpTMjrKegPLkvxFNPS6Mdp1JnRh4qkAFHy3dAwMseq6maML6NVLLu4M6zqSxH5",
  "key29": "3Cse1SE4jP47rLTUyakPdLTWE8FvqvKtesoR3Zs29nHQbdWjP8TXk7WNkst6B57ud5C7bXP9s4LbgPYaW1sBPQEC",
  "key30": "63gn1iABpuG7ZKQs24uG3ou3rEh9aT9sW4y94RS3HZtKxEZ43s6EQg9HA7YjNMxLkA5EtT3vMDeHoN1ih7Pi9EzQ",
  "key31": "35uzatCXfeceLrdk4AhwKTzyCyqd3tVbBbyKkBxGiZjFFt7JHfWDZ8A8YnWYXtAtATdTCNG7bFsC1sh45c57TDzQ",
  "key32": "2ugrtX5Ex5mauBgJJWC5VdK2z9WTbY18L9PX8GZYBPfuf33LjzkLCR9tHLRJXLLTWgKeCfH7nWyiQxFoidE5PWou",
  "key33": "3Ncyf92Ysfxn7Sj3U2gFA7Q1iy75uiMWJbw7pkBgBSoqpWHnJkMEiLHKF7CZ3g4mD6JZcuUYqDWeM5uTBT55jZrh",
  "key34": "5zGetmdwaZ2RqXkhh8xXzqLTe4GnDbzqAgnM6zCs9P2UhqXGUDPxTJfdogbxL2Yz1THM5Armq1JrQZkowcx7bRnH",
  "key35": "3nUAGpDcVbPhzyxs6DZMaSmJefF9yv6KnRwLcwC56Fd2EE2SPXcyPqvcysDrX5iU9CbEr73h7jVAeXu9B91nUURC",
  "key36": "58JqTE9FJvUbgUMZEetT8Q72tFoinAvraKdsJXbPjjvC2n2Qf44QXidCL397UnY8K1FP5KnjEntGtf8AUnDCY5H3",
  "key37": "2ffRGWqgKM5Ep5SinxdiDdQp6xfm4BSKP5NpWFN9PR4iFRf92ikWQHA49WRuQxVabBncYhYKVBxUvJWMTWg4Fmfd"
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
