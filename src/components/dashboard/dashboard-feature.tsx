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
    "5nAU5z78UWngcwfR1tXpd9G7rTdWg8VF48s5fiBYDi3xNNpKL5qNPUcLBPNGzWaNRwP4hDCCzzXoMy9B1W6QkxiE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QxzsTZ1aPsQDSTeog5j1Ze7TwUFT4pmB4XEz4pVBu5AXJxyNSuDCXW2myW6BsJgbyyNuJVWr7qdzYGWcX9BjCAG",
  "key1": "2eQUvc6qgqHJ7XuRSVshpyyfjKyx8MNWadgZadrffx5KKdEu93DYRk5L6mzYLz6sttiXeyVR72ZLpkKqHKLNKFhj",
  "key2": "5ZLm8kMqB8f2oreCaXcsF6NCjvy1priyFikrRS1X36HDrjA7L8h4QqnH43zACyGPUpPN8tPVELayDcEtNSjxQXHQ",
  "key3": "65urUbDVYE48pHroyUtp71Tx4ZxxKCikX5djFMvRfc2MmuQPFWCXMivoA1krs2pJy6CXDwiKwoFK4G7TQHrMC6Qx",
  "key4": "rWAyZnXGJJ2x6pQe4crahM3ZW6woCWYuGueFQ5E1dPKY6eeFodBMytkZoR3U5mAHEXZMWqhdLUabTDQ48kDdf9k",
  "key5": "4EntQfEprEPXEPUg8FUiTYX8W9xywUhscjDYfb8TSRNteaF6j3TcdKzEDtRi6MaDpQdj6GrN3BusxYQzzuYkf6sL",
  "key6": "4fb5smmkEL7SQ7heR7nUTM2VjTJUWd2zXe51cT3jJc1Vt5MQiA2XcVFGEhKop1aAKMH16ZK7kmShFwgfcSRK91tV",
  "key7": "K94hf34V3q3nLDDE4vs8zsMekHM7erjKC3DWttPCyvqQBkQtEsPVDkZdeW32zZe6JZj4X74qY9yKsh8B2Db5rue",
  "key8": "GqxWYjiwLMNQBxYvC1iLEEkzh5XY57FskX6MQK5H3YeB4WTxRGksbVKtXSC2D78weQ6bQ2UzRmnnxGqFXwKGwce",
  "key9": "5C7WDEFDsDYji3LD8eYCrHP2W2AQKvZaC3FbBq9uZU4FqrH4LJMPyEgh8kZkCRGULruxp1DZzzbZ297sCA7HQgtM",
  "key10": "4DkGcSfxeVR3CFj6aGvMxxxHKpWCthLwQiDgdakfTCci9UoEqA5qEUF6BTwARkzZqsih4GiHDAyv7JHBGx87R8GH",
  "key11": "5KiTEQuaQrionx1KSPjcXHA5PsRz2Li3LPDd7eRJ2SrPjKDnQMGF9iPUpJYWJBzmVhJuAwMbcDoWfchGaG2HJLBG",
  "key12": "k8rFFziEZkq51VPuv6e3AVEeai2YBwmvB1RxbXYLfP489JiEnaLonAAb9UWLzVg78sJZ4798wihicGeZt3DezXU",
  "key13": "enqJBtFzyEKrmtZon7Zo55cHeoWnD74j5whnGnJ3EdTL48n9MWNUTBu3dGpwvSyX157E7723D6eQMP5M7wFgEJF",
  "key14": "31RWxnCfCxRwm2wKa6CTHqBugkGE5Y9YtLqgxsVJweMq22EUHYRMjPpk7mMHHdcNjxi4neQFdMEUtKBBHEUhbaJj",
  "key15": "5ZjdNFjuRGmqkE5XbusD2KmsVuqUstUGGin2nE5sWVcehmqrxSBLRSwCfr531Y43ArBEHj1VXpkJGk9k89h4YHgb",
  "key16": "2AfWAQe8wMwVYxp1mWDgEMsZhckveDBC4aK3DdbKXj6fYaTVvLT5HwxqgBNA6nfVLMehDBCqjd66kjjatRxcbwgm",
  "key17": "2nhZmA96XqnX32uMPsrBuAYSaK44jQaTrSXoYDf3oZ5KtBR4LLjeLnbfZgyxHDTRYj3fEhMxdmdG6ZzwZvt6VXpu",
  "key18": "2ff5DNUXvNXsoH6gW2zwRVLWHMe6DHd8SzkBp7pNnVU6sUQPR3qD5hFxjV7KYt42Ma2r7PNm9XdzUwqZxPb72gdn",
  "key19": "84c9Vmaz8o7Qd1h2AVEGEUh2zEwEFej2drQsdpJC9HewwP6e9N4gb2hJbaUjrVfyzTKruMTXMfbGnTr4s1JkYJj",
  "key20": "513tF4BJdXDLeLG2yoe4VG9sd8VXAuBAz2WBtei5wyWTXaLU6G5tKR9fufuwn17ymtULStjHFTY9y26dWMEFtqwK",
  "key21": "3QVmgutw1YpuJrSEvqhjEz52YvGBwFoPTBCeSBEyzhVXUHshfcN9Cfp1We3FjAPdqJEMn4s9tdbmyciEaQFUi8fH",
  "key22": "3zGv5yBxn2aiVxxuY59XnsjzGAVd39fdRMUYD1xrZqznYg1Zn8XSXPv7HsvRaqmuCkGKMwtWVvyFVFvBYsHMJUQk",
  "key23": "3UbvvNJEEAsX3jNxovWeFAcWhvRYQcB3hwtgaKxMZiAqusQV4cSbKcoYmhnLm6c7PJNtUCemvHNyoYXK3YjeNzBj",
  "key24": "2ZrShpVeVRnFJAEnLPcuiQpv5hjdRQVyoBCF7t22XbtU33NQ2Y6cquMyWRZ72r3mTQJZtrPbWAbsTb5fBcQZgUkh",
  "key25": "4RtTAAEmsq1cLrBb9QZaJWBkjed1x5EKLdfxjycdu6XpedqDEMtMvU3op89DuccytfgWu4hUzD9XFyv2JyYwzUsu",
  "key26": "1f18NpgaimPu7FeYsKTVdnvap8BDpmvPRVgQXTR8JQzp5mXzMKw4GCzC5E3tZmpFEWu1xDWGXf1qGSC98YtwNKy",
  "key27": "4NQdo5FusQzM3kfc3TK4svQUKefE3Srmmvcz7GgpLq9oiGAMKdxAo5GWYHcv3cNmk4PLDXhutB6rrjKXNY7EYGYT",
  "key28": "63mJPYifuuEe2BaqsJMxscZNBLwPUSxS3XvNt5ipi3THQTWU4gZr1Hiunayc9cVss6gbauZDwkryFPFkS7h7GnW",
  "key29": "cX4Z6JKMgPBrp86kBcEDZSRMra6NKQGyMp9KkswaXh5xZhLtNTHEuhP6C1jzN17VyRknK3AWCNfLLMD4e3zr2TS"
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
