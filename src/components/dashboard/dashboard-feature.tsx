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
    "2ZbpMJZ5TZewBHraSRPQaqgAnvGkRyWLHFaMNpPag5MfrwdnZoDPuhmk9otiki1KPbkQ2mXoGqdoKeyZsHeALi9E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XPCuPHRP9o7rRWL9qYbakshgWSvq7uYM9MkRzxXUzPLLSRSgCt78qAJb32iTc24pztcZZ9rmDaSWXRQrqhS1UMR",
  "key1": "2ZL3P1zWtCV8XK5JXsaSgExiYxFwQCSqWdLnnpmJG77f7ZdMZdiBv1zW6wCnQsYakj54gLh3TvbpTaiXhup53NVC",
  "key2": "4MeW66vNoaWdUBrLQevbF6AQUZE7ya8CA3Fvjg31fSoTHmK7rbbgieUxC4Z8nmeUkKp4FV5iFo921oNgBrkdVym6",
  "key3": "3Vkn6HTr5fhfJQpKpcq4TWe9F7Sy2Wb2CDcP4sPYHkxBMsPSbnsFZjo11gMxJvmrGd9BUPNJ7DeF4qx7Dtwpwepz",
  "key4": "3H97nJcAaLKoJhrmEVXPRApkqV2DkPmu3CxeFS25TnA6oh925zU7krJ9c9hazYTZRc8zzC6MPcjo1fuEguxEhBdq",
  "key5": "5V5FthLCtRJ4Yv7pA6m1QDpCWKeej7sW9saAB4nPxkyhdMHkHFPh6PVb8J2wZMcetdTA5pZvCZywWkWGJ3se9pEr",
  "key6": "4ekfredR3xiYtzshgTZ2RvHuywC9ze12pY6Hd5vf6pLvuax5qAkp5teSDafERtPS4Fk5G47UT9HZs8XVfT2xTMeS",
  "key7": "catM2RLqYYKfAJvRJytbESHb5GqCENbtEmC6ShUJLRnVSXwLB75GdEGr2c5YFNGU5xRmdF81QSpeWe1wyCVfXPK",
  "key8": "snmSEZau8Z66xtEN9S1hroKBuvvitQ6R9obBPZixFzsh2vNJ7n2trzrLpDLEX7v61oEQcVUvHrMN45CBBGD3mJ2",
  "key9": "2W1KPwpJzMuNSpJBnVnX5kmrnjKAeQ8AnZ2hodqu23u7tZArivHaciuZNPvRZ5M8RQAnuWGqtTtm4xU1W8cSJQXC",
  "key10": "6VADwFGWYzvJJ1RgZFd7r8T5sDpUY91nJ5u7f53FmmTBNFn62DNCTQSxf76PpKok9HdsSuoWkZdnMdF4rsTBaNY",
  "key11": "5QqXxyVRu9SmQdUcfskbrKPxty9ZkRfbitVK3bH7YqgQ9QKrA71VyDHi5eDPMgCyUVKjc49qebdJcAY8eqAez6Lo",
  "key12": "3AxhoFpaJf7n82NVkY8aweTocu5sDaUk64CYHKqMP1kN68322g1ms3vkne7bgpVah45AV8TJxXhn8foW6ivD3c5A",
  "key13": "5heG85YcwbKNkzFwLKNP5jGJswG5NPqRaBENKCWT6VgWeqRm7BBRtJM1b7XDp2paXU9KGUUwuaHFWojktC6x9Vto",
  "key14": "5FHmFaTCH9yGtSWKwQNEVNmRB4WVE9L6L2SiNTqutBdtGiX4ML5b8bd3gsny57VjdktsJHyasJyzXMJ81htaXFSV",
  "key15": "4ihTKAn8S5zZymfcXUcQX5xTRPhbTBRW2dy7hrMNxpGF26QxnuSDYnZCWNWb79bcVKajJMsNhYu7dWFkNYMPfzXR",
  "key16": "3fDbNo4KkaPZYqXThZPP4cqovhQyLN65DxTMMtXKyzbstBcCyW8CCzyq8oc42jg4hnB1RoB9aoqpuZeAMjRdzFCw",
  "key17": "4R3nKt7YQJS9sjGg7rDq3PYtrXUncdapFNhUrCj7j2YHwkUaoojmgvfL3bz2xADVZfH5AFrfYckLoxmsnSS2vqrM",
  "key18": "2DFeJGzS5hY3MJuFSsTKBRo3Rx7aoMY1skWx2V1rk7m6xZKCDVh1J96C1enR3nr8C1Bx8dXWwjmwQdJ4hppNK9u4",
  "key19": "3YM2rVKsDg5tZf7Rxh8DYEq7fwVuPYChE5QkRjXHgYE85LSQkCpHg9e3HZzshBpwut2Y6s9DF48b4pXV183KGQZp",
  "key20": "5dweDyoetHbXkeqhtZFsxiqCp4hh9V8EpwEaYcmxY8WxcyeiAbUQcHbbQmJmXFfXtqhx9fBbi32PYZX5XcEQLWdQ",
  "key21": "5SuASGEc9tfnASBGQCLSXXmFkcUxVJrGsPauB5tY4osCa6wJ6oByrmZZfcSM964ZBCcxpQMnSfMdE88mfcd1Y333",
  "key22": "2TBEX3FWjeWGFTDkdiZ2kjKL2hwmRtcjiHzwfQaDVS4iYcgiTVovhvbXr4FqWWkWoiDDofHwUr4Az1G3fvNCk1Nb",
  "key23": "K9KdU2MtVBG7JcWcvqzkNvEZE4ocqL4znwSGJaZNNKK38sQ7UJnNS5vEzvu4GjG4wLyEEvwaaiD3WjiLberScLq",
  "key24": "38zGyUD3fzi2p4ZcqwDZMWnPzJ5pbnrCkZsfiShj5WGK1LDgbg698ubQ2n6vJv1hSmqzC4hVUe3CJ5uwddGh6iW4",
  "key25": "4UwYVdbmW3AfYbYv6R5Q7KVy4fnVLcpWy1FBofUwgkm3rwXKqVAVYFhZZ5aLj9fTifK4TpW6Tncd2VAJkV4DbZNy",
  "key26": "2hfdcGgFWwu6uQLZ1pknnXsDn9cDJdaYJ4BRvkgL8zZSyGfTe2z9QKboWoE2ou5Jpjoa3JLNZPgm8qCjTrUzm5uM",
  "key27": "2gqb8YCBQMYD9Lnsj4R4Fx3weKHKJjyhKaLzMzdZdBt468sRkpTatgpYaw9B5PD6jSeerNnT6gnQxVc4oZtPyHrJ",
  "key28": "4nV4CLzUpeniV4bf5xbfRYcCBzFuuKJR5m6AsmkReBTGJjvjYVw3uQLNUmFJirXLPJVMmiw9KgsAdwyasSYtsfAb",
  "key29": "2e5XLbA7EKhWjsFyD9DdjL4zRw89a7szpKFMhsXR8rkYDoR7SztUXQdFuSgW8Um82BzuK4B7YRLLhvSSptnREk89",
  "key30": "5amah3KFJudkUtx7GrnMrfsM5utRqKKujPLVE3xoQ798BB3jErGttXz99iuYqNRD57H6C1qzmDZdTxSKb79iTBE1",
  "key31": "3iX6QGazgcSVRhhrpxYWjdgE2bRWT97cbaTamLgZGQNADXsT8RJUe6m8g6un8LCNkKGNvycna6ndiFgaj8L7deXp",
  "key32": "4cLDVj7ofKxWF1jS89joBmrMYQHMZ4MQuCCLe8VDSPNQDo8Zg3HfZnkDjW7fFx2oU8dvYLuYPV5Rr9qAbZQQvv2j",
  "key33": "4hMoCdix4RBKVZNZhn7SNjv5KRdc5G7bKvhd4RU9WVtqpCAHDF6yp7WwZe5VwQd2WMY52a1LfKNTbbURhQwBNmFk",
  "key34": "4PfWnJb3DfdcRX4Rb2a3sLZwZ5wwrXASsuMMgpYzzAVXiesBKhFcmTJdyKCjwKncpcPWXCyuY7KYN2kW9wKM6coq",
  "key35": "5shXfRVJd38kHt1FQNUhmZShZmTy6rvKgvqnC38XWS5ogscDD9wt1Au8TkBay8YGVFiChEkrcaPXB3Ta4QykrCii",
  "key36": "5Jx2HiGdAaQpizhoMoeHxjHVfVA3UddgoHCNpNPTGY7X3XJ6TnoHEaK5eBR4B8ctmpBa9HrYi4CPUXMcwZkJdwwj",
  "key37": "3pHf4MLeyTRvPqwAZ8a3ssHqcdJuSpiewiTzH8kzWUxuMEzQpaX7pM1oA51UzWsGttTJtBE2GamCLQgpMRSnoNWq",
  "key38": "4yP9AgjmVfd65oqFnRTMikCBvQrC7QQd1ZL5joYmMcBzTEwF9DG77JRHSuWTy8myYGhQv8mrJzURAoaGRCk49ifK"
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
