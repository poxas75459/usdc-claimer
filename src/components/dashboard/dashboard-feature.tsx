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
    "5DDPyo65b3NupjCAiegfzEJ7VhJFACqWosFPpyFpgfz6JRx2BdE9wy3XiNXADNnunTe1JVsmjrMDSwT6FZiAhFV1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p9hudTL6j3C4iKiY937uRABhFtJf7oi3enyaGrZXUZvjmmzTNhSN6mbDnSPkjwSfo8naGWW8WcZnU2MbYSLGVw9",
  "key1": "vLHBrTtQsF1fd1hszqfiCfmDVCMSPMyhpvXSj5sjAa53boiBFkMHxyqRbbLBXai58PVQmcHCjG3sVW3XKMAejRV",
  "key2": "4RuG1Vd7uazfftLXNVWwgYaux1csXkueGKzrH1r7vWWyfxuJ1PSVKyfBPhGvA33jDLu4zYUtvjWvLW5ynh8yNE8z",
  "key3": "5Rudw33oSqC55BAsjbaZTBHTT6khB7t3r2tQ1J4pnz2JqJkxW4i8t26BAqeJp7gQRaeAJYF1EX1A9cu7oN2CVVnn",
  "key4": "53YkjMde93jQxMtmw849GUUUYrqhBF3DHWTvDiXGfFFnmou748e6B5cTXPZvWRQJ3Ch3x3E5wqErtXBK8WZakEMN",
  "key5": "3E5aRFuPi5hqiJ81KgjZkNvSBk1U7rvVgTrRyTZDJVkSnB12t8NRMy5V7KXbLxnq8S3BhQvax428UATSS44FsHwE",
  "key6": "5yf6bSCNwVf6jdN6CYapU9eYHyCjWJRbmTnL82PWY6KkwmpB4kt6CLnE2QHo7i78LWZJh2zZEnJdK48fQheBHqpH",
  "key7": "3VFxxD8YyYxagarX836xagjNfjREVERLdzwUZgw2zkGoUxed1e9dEJMJdrefgNHCqxqUirit9cpwxAxgmFk5HqK",
  "key8": "25Dox3TLGk5rbqpMXwfbT37dUPjFbMwiX6LP6WwAKTkGW7G1wkMwydfjypcigg7XDmzV2uPVFVTsUhPmzjxGHu3i",
  "key9": "3Fd5cQbvaL4mPS9wSJ15wLbwesjcqBGZkm3cgSzxJKoQvzUArtvQEoNSZTZ9sxmSJt24pXxzPPzxWj7HG8J7vVBH",
  "key10": "2dKEf37L8A2MVfKE2SW18ZPJNLo2FjqUqYpAaKRSoFdzCwtdFLzFgEV4pyKauFTcC1tHJqBBf3s2W9UD8hntpPbB",
  "key11": "531JWtiVwrKfcnQPHexgkXsCYAWwkyCMNrweC1jA3ZzvPgcZB9qLnu8XnXbWbNbfniiF7nPa1sYvMsyYQcDrtZTA",
  "key12": "3jARoDg7tAJNPpBGG8iDfy8WenUWWXiwRZxm6UERL41dVmMmtLNyAUq3ciBa9pRixBmCxjhLrbhB66EePP66XE3P",
  "key13": "4JaX97PfYq3VNBfFuPAYdYpNJrG2xiXiUhCkaZV1PTgWkzMjSTGWkQmE86vBsqM7oBuJ1VsHwFZzFRs57UmUSvMj",
  "key14": "3MBHdpu8TdUnXioJcXdUy6yPM5yPaTbDHg9N2A3aYjaFyLLc4Sc3KFHx1MB9LEa4Pj8fvTvrFHarxGwM98Utv6sp",
  "key15": "5URYWEFWxSBU5u89FpnGptyKRC9NXzVgNf76uU6JVC2hE69eCy6CuxtyCXhfNx55xRuH4LELHgHibSsQssMWhHG2",
  "key16": "2wdXLvqzGUwdZxMBsn9zY9B41aDJRHawXdLN22wez4TWzUhSBTaUxHxhEyrUyDvN1a4VsmPishQjS5JdNTnq2ovz",
  "key17": "3DZ4pyqFY5zdmTzphWb19cE91TUAjjLDKqDvRUhB5kSXZQWdrfoiYxwfBT4LyGufcGArXhTJVsY7tXEZNAAfVQfK",
  "key18": "5QfhgNsnqBaocUkiwMYHo7fWJwudQVbRFPjP3H1yP2wqkrKzfXWeR2FjymgZg1vndKnv9v869Cri1Zyk9ZQWu4B",
  "key19": "4q8dneVYLLtPiDTABm2HFc32scWypQwzdPLkRx4rvsLiayz7Uq6iHbnjwGuzRDdiLMkYdnbED6v9fsXWx3HeW5uE",
  "key20": "2QrkZWts4BJ3qiKQDsmi7VbSYwMcNCECcum1N7gahUK2j1qX5KqETGojYjddssyX49uQwBT9tiBJmxcyJpwE4h8t",
  "key21": "eMtHVh1diFybjQRi4pHjZoyKRZj5RPxjBZ6C3ihG5GiRuCW6pu6Knev4RrCyySrETeH1m1woagVBbS79yz8kbTD",
  "key22": "5wj77day1tF6Rx41uja4CaX6EfRJedfYiTAnaN7rHKiuqJsNVs6pqcKBqrq3mCnu7CX7c9gaVFKsz2hh94pVopsn",
  "key23": "8GqJHeA7HjU6aYSkkJMDdKSS1VVMUEFsWj6d14ggNxJVndG1c49onnUeAT2wQVFRoUDsSHEFBN1n5NXp7DwYChL",
  "key24": "5JawAVd3MfoDum9rksvFQVy4qKQmaFW1hEKby78vN5bVBzKbdWGhZH2zVV25PkFLiXeuHErVTV14gfZhqa8mmNrk",
  "key25": "4LJQ663kgisvgqeCK369YogyQEUjx5khLyiVGyBWMpFbCZdhw16qN3FKnSNfG5q8m6tkNqMEJCQKZzaQfHTNj6m",
  "key26": "1BJaqTB4ArsrXa5pttKF6MBwwbNVDarYJqKL3M5EfUUb4YQXM9gs2qZVjxAFsWSix688mHGxy7oTRqkYB2oKD3i",
  "key27": "229QGPotjAzWc9kDMggVKyfpXX9J4MziTthJFMDB6c4JVc7tjKZnsd8SZaw9qX37A3FCgrcfipeJdWdcQcdXzrb9",
  "key28": "HD9kATAM639aNRnFtggz7sorH85DXUcCeMicDztHWwewjFr41q9mvJyXuMVTV3tmj98LKKR99njTC4CWQ5qpGfa",
  "key29": "3XnBkP7vLQKKiAsrCaSD4qCe5Z5rgTxxLCTwcycgx9pYp3X37sDyEzo9ukWkcc7vSKf3pCV4C2ckg21ZBZ2Sk8ij",
  "key30": "43uhR7o2x5QP4kfNrLheTajjmEHngzZcQ8WqBgdKJuvfDdk6SJqBzcseDDFD6y8ji3cVAQJksN1SaKyes1mXsbbs",
  "key31": "3U845EMv1TDK7XmmRe74CD2tn58kgHqxuv6His9sBTijnqUYDuJDLr5XeL4fhDd5HtWqdUuzXCyDrjACee3QQcKx"
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
