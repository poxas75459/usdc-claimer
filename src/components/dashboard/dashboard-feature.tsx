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
    "2Fw11dFNbBk8XdMzASWzN8dUyi52kjk8Zz5BBGNoRssLDH7ZeXifbfKSpr4WV1ujn2gSRRv8xVsSLwB9kNrnxrsK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bGURsthow9B4wSVJH1mAsdXuf9AsqUyjj5Pu8rN5nXr9NBV3f9cN7onE4g8HDBy6bXuA3MSDHBNCDPaGcf2sMSs",
  "key1": "343XHx4a7AJQ5gz7vux6BZyfHbmkoewAW1UKvc1GKsn79dD4S2UfLFqhqRwnWadTm13zKcSisbmJb8v1diExSyEd",
  "key2": "4nVMKXidZZG93ZkkUMFbzppZkCgYp9HfSNox3Xb7SF2jNnBFQX6mYsrMvpZunomCWpYHjrtAaCmBnx3iAhH7WH7c",
  "key3": "25m3fi4nMAcSwA32EtyHnacuCCG7F9zQ2QZC7nLav8BrMYJqFeY6XLyb94fE9owwKFemnHUNqtjVDk7VvuuFw3HQ",
  "key4": "2HxMV8TJYrQPiqetBXLrmfYYUHi96DLtjqTokuTe2oBmaACnCAoqqNEDZrdHYBcunm47bUTZAKDv7MVJ8S45eRNS",
  "key5": "3kZ1m2QDT5ouzE57SDhCAChUYzdvEftKupdZTmoAdkz8FCYeCVqTBK9K6wTQUZtLaxZddDvzEqGhzL1jAoutQ8x8",
  "key6": "3aNno4PCaUvHDaBAi4XmFKJsjJJPD8H4maZLbwKNWz3vmUsHKKoT7ZsDQvsQCrgCd31934W7iHXaxLVfZZX5vpc9",
  "key7": "4CNjRGt4Wa29tx7MM3Aih7KZSFPhQyeSqoMrFmd88q2hr8pXMzh57FQKyjbZsVS4TukcBWw4YYGy9SwMgSS8rMgu",
  "key8": "WxidktHpvEqfy5ryXcuoDtQWELo8Z6WYjLUpTBFjX2Wqc1fZrJiQZfUbFaPCtVLxjBgWK3dwBoPWJPrtK9GRjNY",
  "key9": "4sWJ6S2WyRe68DGQ3BDCN42mu86dCkXVcRzMW27G9DRe4vNmARkHPPcaqjxCy7QBoYUBSXV3bqCggX7pbwpDyeW",
  "key10": "4t5GhGzyzMUgYcopfKMS1mCKmv4deUc1QMVqx1cXcSS7tPNechbqhYwigT4Bd9UftdJoM7U3jRUsG6B3J9GhxVMz",
  "key11": "5Bw73CQtCboTu3NCYUGsLyCaqewyeVrw6bgzzHbtYkPXeu1CfczMPNq9vgfr5uZbY5dTX9dcEifrd5GQEAzVwwJX",
  "key12": "5uAL2XvR3atH5uuXgf5p1Kge5kPskDuN6pHg3zaNGzuLznzh3oXTnJY1PJ8vdkgmiHnhBP9DLq3gW9e35zXmCLaG",
  "key13": "4B2VPSDEQ8kn1YpVniDjhTdRKpsEJjkqgppV1L3rS1xtCy4kP47qvXmbus7V6NhPfN5AnMok1E1F8fPPaQFH7Hae",
  "key14": "5UXyXZVpngNq1aRjFMXaob2HCfDDPhDHbaoN1j6b8ajzJXfPEuFZ1tTQ4ZTuhRDicegZLfsgTKNdm5PWM14NJV7E",
  "key15": "ax2kerGDoxHcZycRR4KurrocMQSDn6uG6m71kAMujFzLmhpWnhU3cZ5xAXsEzopqr8hSqGnQK43Qhe5WsNSBGrv",
  "key16": "GXFpAqqTBxBFj9nSwECzbGthNGmvwhsnezp1WWohf9YqhS2PSA7ciAxc4e35iGSWSDchtjJbJUVkVYYTf4HAgB3",
  "key17": "41HzKANKAx8tGVtv1GF4mgX1xJh9sr5rj1dVPgxGX1RwA1N1GosHiDHeZE7C7JBVE22rsrPsH8TEKFy2ZhMdMWCU",
  "key18": "5iYfuaqz2UreMqjJKa63LYzDxxCejLRW4AaruEBmRfZA3fh3d95USPb8xVapoPeBouZArWmk5wCv4TxCdMTtkc3c",
  "key19": "3HqLukCXjgdyYsRWs38pjGifEqGcBhhapooKL3zVMqfZbAcXEX6ENA6FNsDEHNw47CnyCeM5Jc7uoZo4F4LMCMgc",
  "key20": "3L2ijBYGCQHTUQ2ubz5zoC9E7JGyQnFii9SK3taCWZDX4Y1CqvGGc6orADmkViutqwKEy1XTBrgpdWp5KD2tBo4X",
  "key21": "2e3LsmeMUesDymqXuw4ZzmrPJWtgjtnUf1CtsjtGJavM8rfGPP3Twxw3sx8iN6hB9CkC9e6WhMdTvWLNVv9HiYf4",
  "key22": "5Rd79SWgTfxG8MTAgsu9Y5AJpvaayhAFbdZLW9dH4zmNBv4687azzFxmwC3sqQVid8TqAnuNZKncfQdXpZ874Pjs",
  "key23": "5hHNrb1XghvSevHqT4X6KpnaEGWsgppqgi29WrS3GkL9NmJqV36PTXTJx17H5y5oyX41kynADYBgx3M5cDt7XXs6",
  "key24": "5izkTsoxzxAVwPeR2XMuYGrk3Hnm6fFUXny77d7NDQxAzAZcnKXeLpo975MpSpPXXbbwpw6n9tFiCCpXp1AczwKd",
  "key25": "UvQsefiDDR2QnW2zfCpGuiaf1AfdY5o2eJsLEPfjfLQrtCQmTv2UHRAXUVw3ZjazfRzu14cyCuPZ682nMkrdWEY",
  "key26": "VwGtLVGhUTL74nzD25wDFoko4PV212iTtoeKfcffy3n4r4YVqvyd9FD8ibtGZYfN2tDG6XBaBZh1BsaYMQ9dD6N",
  "key27": "2uNYeBqEwegVeKokyvmWffiPi5tdJHtSzto5rFa8Ph8Fz3ePmLrXdcGKjqKqgT1uuNwnJGx5ENtCuCh5dtLTXkcR",
  "key28": "3hS6RhpyyKzAEUu1ih7dBs5tBp5pgYF1RePHR1oiCWAUd3HnwLuxcggjFkFfNThNgULazezrcFR9U5N6kaM6wFKZ",
  "key29": "5LRHnz3rKX8YEsZ3ofNyx5CTsa4gieajQnn3ABzkUohj7b8DYLW1veA5TryPeJEtXQzW4pmGWb5iBQd6bRRSnYej",
  "key30": "4j61HfLVq1g2QeUCks4e5DweHwQi9fnNktmMwxNimmJcA4ZfxFv3oMHLBGYPK6S8S71V4faGcE91Mdc1jJ9kYSzX",
  "key31": "62dxaf4uMMfSn8bGgs7u5gbBbHKQqnXgrdhAJzHFhpAa6Aee3ytwQKFg1Pdxgsm1FvcJHUsz4KRAiPHNbes9pNu8",
  "key32": "5da8RdEtn2iYCFD6qdjbUbYCyy4YMdUkd8tWSr7k3sx1dcJpccYEeBDVjh4bCptq94Qvx8Xohfi9WpFfGi89EJ1G",
  "key33": "5izqBaaG8x6LmREMGPBLeAMnmAt7FVsGcHDCubx555QasEHHHTCMcRTQndpozmE8uqarsZEMuuyKquqKnNb35w5B",
  "key34": "2QKKgkmqjUpQdFL1i5V5XWRG7e4oXVzKLVSDVEFZZuZ331Y7LUxNd9ccTJ3zj6wDcmrGugY7hc67KZnfupBNhNUg",
  "key35": "65YDJYBrmdyHSxrW9w52542bseMGP1Sc9xbbycFAasAfmauaayjR18JKSFPbFhCWzXXMER7mc8JFzWCMieoc8gw6",
  "key36": "3Sj1RbZXvnVMrdar1duQrQ4nniDv5FVWkVYoYAX6S8HgaqLTRW7aDMkBcDAAtrVPhSzvLy1fqPgYQQekT8wfx4eX",
  "key37": "4G9yNhukoZvDDovbRgTL64LaqWGscx3QSMQqfoF9U6PGR4YknWzsL3rfD6GhN3uV23UF9gvfMYnAdzvz83678n1n",
  "key38": "2dTcqv354RXrde7WxDTBhYSzEiL2SZRLbb4zqqBFaX3XanNgEQMQEnEi7pMDJfpxH66uQGEL3PfobcLPbBFyG4Yd",
  "key39": "5W9bZNL4G52q6KQhDztgnbURjmmZqPjmW7cwpJQBq81fBWuPJz4ZYPJbYq4qrzov9sHQsRcJnMLia7ksA6poqfAT",
  "key40": "5uHWLcFphvKQh28n7qUe7P1aWhMHqmvFG472eDgqcAuHLQVupGJnAhDNYmmEpp5fd96PXUHk7B3ZTUBunDQxBWRd",
  "key41": "1zkKrooHaiCgcwHWmuNGKCmFBRcd3CSzNbn8PeGnpjjsQP38Ecs5J49PWUEgURhxkRD45mYAe4ZtbN6tpcG14pm",
  "key42": "4Fn6ZREnpJYr1JoZxxhFkKvkEtKqYarZTaUGnoP4uvC13Mr6ZwobJxeaKDA6WXvDP6suPKVjLReUCEWoGEb7CQzG",
  "key43": "2U2fp22Y5qy76hWvPY52WQfqnLEakEWGHG4PAGTodLggkv6UH3rraQtSs99tMXguCcFMKyeJWMvagGUEb47fgcLD",
  "key44": "5QprGULtpu2TkwbyWsgyUwkHEm6w7oV9BHRzkG3pAJGG8EQgTenYKkYHqWifek1LsnYoUPh8byUTKtsN6t6zDvwa",
  "key45": "3XL1C266Kqrp82D3BgT2cjqyMJnSeK97tW1amX2Bde7WiX1tWaMS3yAHJvnMaTTD8rvM6zyocmeaf1yq2dD8TwmA",
  "key46": "22mVhGkWNdNfVjERL4LP6hfvmccQNB6QSW8dVJZW6JbVNKgDTprLEi9La3ix27U3h2UkCeu8NQ5NgXcVnsxUEi4e"
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
