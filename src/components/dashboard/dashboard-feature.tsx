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
    "b5UZnDyXv136V9izvSwNNHPzB8rEP2kab2EDrkrMZhCXMGEf6eodjRYPzKTcSAqWTsN28JVCAqqR6sK25majU4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AcKAqVVbRy8NxMaNARs5XKXdTei1ysas6t4Mz6DZEtXujoKkmAz26GuXff6JK29SqN8TVMGtoXBVxqCqWhb1CRx",
  "key1": "2NzLcC4EuZ4iwMdHdqptXUaF4e4EHkShoTMWrXMLnLSJN2aHyGjdY6PAqopY1qiHZ37Lt8UE5XDoTHUBEbDoxr6H",
  "key2": "4BSaLPtLGn8aTtMjPyun9W2taiZXWSaE53ZJH7hDEi6Hz1EagjFBF8QuRZJiAPjVWoWXTWNP19Qy1KS97e714gfm",
  "key3": "2d71L2GA3bL1nUG4hDpan4QfsWB7FAGPtrberkkhhrrUDRgxaHx8a7PUuFB8B9jSAgiaMK3xcbYGKCST3mUsVZY4",
  "key4": "WK29mzXywaoGoa4p2YRBiNrjswZEtqsoyGqzHP1Gh8LA81GGhSX52BiXD6v3hpYRZYW3Hv18r6TuJ7dvbYzUJ5u",
  "key5": "5pfimXgxzB96N2DbLFpTze2Uz93hZiojgpuPY1k2wn16JQjvXNRK9mMmLPv9r6ozJeNH9QLbN9tVwPNesEb8UoDt",
  "key6": "xegxCH3n5xvaU9NqpVtj8mdrJyfoPthLvDxqunS1p9kmwgnSFkVJd8DsmCK22xaSBUxPMC2haCKAinR1tdotRPu",
  "key7": "4WGbTV9jFdyCmfF4fDfzQcrw1fTE9L1BKk4jNFmU6ahFnKFuq6vv4fq8s3JufYNqPx31FmgFTeKt46YGNm1xvx5L",
  "key8": "4AmQpx7HKJpBudQBfpnwAm5a1crEHyj6pTy1JCuS2L4KnJywR7zGDvxGgDaNVXimmVeVnJMEdc2FJwpYG65FQYnP",
  "key9": "2J7o2Umebvpc45AZU5cxkGQVyn3JiD9vW284qVrdLqZMdip9mjzJKbCFSC33CogfisY47Hq6ssQamqCCq7TEQav1",
  "key10": "3SqzUbidKDCvUQtguezUUUDEuE6PYEL6RRmHBiDrxkNPHWwKds9YYEmcZTyVmKspUKWdFksmggjAKpQLkxPBp4ik",
  "key11": "27tT9aqerJ15ozPxMX6RhYymqNS1LJFkYQhZqphV86vwkKra7r25KGvn9XM459nYCbdRfFzRXxxcqYGF82dwHF4R",
  "key12": "4fts7tMToFysch7eSfVSYtdGaeC5e7cUGHB3EpyTQY42DYn6WWf5FUu3qXGgE97Dtwpv3dF3j1FPHGx9N2qBnFr7",
  "key13": "51zi8rozWmyesSH2TuzMMkHZgB8pPoA2EyHBcG2ArcxVQ77dCH8pFoEgiaqHyeLWy2d6GRLuQ2WrBEFQkP15mK8m",
  "key14": "G7uGAo1tymbbNtxVk8qqVuUN2i6RiQyC7eyDFgiu7nMssjUamRJ2KT8DKtNmJYEHeMSaf6rPzwUTGrzqFstNSeb",
  "key15": "4hBNGeyc5GY75wVH2V3sUuGW1JgXaikaJKcp3EpfKL5XWjJoDF7FCfJDEnTbtqdrfR7P7B3BWhab7PAsgtiBjaFG",
  "key16": "3HRpno5hU1yhdB5a5AcR8rsTd4Xg9sXMe2cQFPjjgUCPEVv6wUYxcZvYkm1zboEVndvWq8Ni2ZPk2HewxBdcLygK",
  "key17": "3SEhDcEYrzNngpeso3u35cyH6xu1ZV7Wgiiwrb8KDgf47M47j3kBRRoGQCn8DatkjZeHhYMnD3ZBnhUyBukMSEZW",
  "key18": "VoPyxcJu3eNheYBQTMBCkzQdSUK2X6Ki3BjGASoZQd4EsKNLNW4DXLbmeJVVy9PBex6pdBfct7R3sxE1tcQNvSK",
  "key19": "4oHjAZ5AaHJPmTeyEHqhp1xPj8fLS78UJ21qdR9Yf2HAihF92oL4EayGacYPkJss7mEc6PcQJp7SDuUpeTzeaTbg",
  "key20": "DjkrTofTTivCSnAoPnXS1gcbeHdjmbvddBr8CXD7EqYYbjwpePECyVfL9cgZCdDxg2QewoC9bgddrDYSryxzLTc",
  "key21": "UAJRVVQzk5dpEFU6Ws2NKNnyfeeEVGoGwfCnKxgsqQ9vYA7En62npeKwLvFMMTuqcyxrnbYmygQhW56TQmh9CoM",
  "key22": "4qwe29i7Gy4k9Hxx9fGvUYvHAUSzevykXbpeVgcKFZfnAKu3zKit3aGhYyFt9Xsrh2QfESusvEbpMQs96wfvVznW",
  "key23": "49TYuuymTkNeo3LzDuS7iMF6tAfVs72Y77NUgT9veVFZgh8tRfGcYqMivjLGxfBG2UvYGV5oPn2U6bjFnQvjhMGo",
  "key24": "4fS4bcaH4AR7upAyzS4YAfig1zyjsMudXrtdPHvUJRj5FJYmrnNm1rcv9G4ux8xaEFtbgDe67ej4aMfb5vpjsNXn",
  "key25": "36mAuBNe6p6kLKFkmDhNegMRvLFfYZhCodJpo8jvnqA9fM7uvavwrmEAcifeZxpU7viiQSL8NqJDvg3SjnZzEF5K",
  "key26": "2QwLF9pBb7tET3AJd4HLWVzgvVrv7gZuxYb1By2Y91WaxGxc6EMesfyn8NSiWdWKQLBdGNj2WSJ7yfrC88qa298U",
  "key27": "PtWb92qTheVxxgDRJyW4eGqANNfT56C7cfpD4PsMEqMfhvMfsyYDUhc99zCiqfMEfK66Jw8hipeFMZWkPuddpzM",
  "key28": "26i7Eu9r5vNB6uiyAzpbvuqWcHwJmiVy7wc2vtPfgNukFJzNBJwewW2uuMXMtPrUPsYmkYMseVES7Sf5kn2YuPbA",
  "key29": "2ims6Xk8dUYdBcif4afJcteoBbzp1A5TNFGzHydxDDm8VBvBQKxmvgjujzTL7dFTT2471ZA1mLqbMwUpBfhoobv6",
  "key30": "3yV9jVDvfHzv2hH2AYsUAWYG3ukRi6PnNS9BMfUUSPMgRDjYtSCBt1vZ5iF9DkDmFy6EuCkqToo1J7rMk7ovLkjf",
  "key31": "2iNkpD1NNHhNFFyyHumR4DrXo7WhFVDfFpxWkNWMnuVA6usQ2xLnVQwutBdzHZpgQMoT1u5fhH36MBdc5iCpuZa1",
  "key32": "5s5SgGLyMJeGzn2VVnH6upabcfXSq5KZmAeaSpmuusChSvLY5YdHoao2Go6nGp71Ug3R1s5q5C8VDcnqULg9TGLX",
  "key33": "AQRWdf7GQYGf2Db6RJ4YZ3JAZN9wMv97WNTRLL8bGGNKJ8wyWM9HAbSmr6ZXafCwV15Lhdpim6MTTMXrzvoLMMq",
  "key34": "4mkgtWpNc3FKcP1jjxbZXwqrkedhkLT7quscoKxM5GKCHtPwingohap1gHLCnPDBTBWARv8NRbRZTzWhhE7fE8bE",
  "key35": "5NJL177SwN1wVZnNm4Gy8LjVzhzKtzQeFrkWuB73m68LunLsxETsAwkBGzmLp9mWj9uytdLtroETokXGLnJdRbLk",
  "key36": "5xDscZLLGC6HaKdtpay8DtmVJTLC1JCKPyQfJN8dCdbnjEYNSXjVAZCaTmj45oYKdRyYopeAVqtmqqrp273ZHhYr",
  "key37": "5Kz4ninhRkhxBtXGKFwUrpxk2GwQquRXLsAHxk2qB9dyXtNjaBgj3J7Y5w6ptCyHWBgZsQVnKdZx6UEgrfJQffKR"
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
