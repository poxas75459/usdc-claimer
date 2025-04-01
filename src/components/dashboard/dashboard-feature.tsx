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
    "5pyAhW5fXm3K1s5DjUDsh4XWTwywHhg7WdTWaTvtMZ8N74Z2guKoJUh36FhknsBAeq7s3DGs54kyvQTB9RYNwuCZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qEgRhdw1jQFMckLDzMfrDzdSYXswTqSgXBTcWwC7NhRWwbMX1PVKPswhXG9CpCqXNm35QxoXmw2BpqBMw1ngtXh",
  "key1": "5PXPVsqH9f65wQRo6195XT2YnVyFbfmVieHFnx4aJqdJLBufsoRXe1X5BBpWeahdVYsWKezGapHjhF97P5eYkzuz",
  "key2": "5YvtK6312R1BNPcQbTPEd9xiicKdPUQw2mQSVqfA3kf9jzgLgA3g43UyRY7RFVsHGaFFHu2zdLJf2P54gXh3mUia",
  "key3": "4SQqA9GYi4kdJkQw7qqLRtRAufAx1Zox6wZp6woH2NaCKHdqVX9DjWdyZyJYp3Dxgt3yJifsUDh8qgzmpMVEKugV",
  "key4": "5dKeQ98pFhHojGPTEZtctzzvW7hhqEpLmm1fHpsoJNTD4X6Yw47RH2bCDgmV9i1k92YpWqFJKtPGLt6KBPDN715L",
  "key5": "3QAFgkSjeE7jixGdXuqac5cePEcsh6WTzGUWsFbpPYUcRiXjT7qKitwAQBnkyTgdF99JGhHmm3FF5Vt7DUxFEixU",
  "key6": "fFTXidsVeNaGjucsXc5B5q5KopB7pS7GaSaAPw46xU8wFc67gDuAcqgULSWyCyEGUd3NgKfq2BC2nYYyYBf8WZH",
  "key7": "25pX459t8gnxrcYawgXNVQdy4nPnNYDpCipTAnfo7DoKjm32egv4dw1x3rAQw7vpmzK4PRSDXfc6djasQYGSKNWB",
  "key8": "3X7Bm46VFXzpk1GVDWSg2ZqP8bshs1z5Rumg1rJMCWLL5isXrjkrXiZcvBBGr82TT39Uyi3ziBYrZtLQpfdwS4Pm",
  "key9": "5Kxfw62DmtKAZez8oaBXd3ZZageCZGyQLRZ2bAqV1ZwcPtt58Xtyr2VCSbnWr6LygjkC1uERmeBDZuAvb32exKi3",
  "key10": "5oj4MpZFeRaxyZSYZxwskykgaZEbkK7x6zZ2v7PcXLoB2CyFi97vPKBLmQtRTwqd83Vuip3Z7sF9pcs3ANktKoHo",
  "key11": "AvHgkKnj6KFdPew6b62VmK41zfrj8JaA4QhjUG3bnTeDtH4gZQpVZYSwub95keEsr7CMT1Ayudkq6oQpaXMyhcw",
  "key12": "22U5VvmYvpbgppVwBBZtoCJWpGrzgR1zUXsR18BSxUYLSDPv5KuZfN7yBBJogr34B6irHFp67ADQynafQRGYhVYu",
  "key13": "3pUDX4Y7RpAN4nUUVQhSURRsyQYCCEzhmN32KcMJmMSJvNtCwdEUQWLBFUBMnVtxKxkhmQW3yd3h1mTUXNG6k6Bj",
  "key14": "4PbRcCgwZVXnMh2h1wMi1urDFL8NzEKF14RVedi2Lg8fidh4n4dD6f5ScrKf4XzzUUGXvk1se8KWx7oE7bK7LfSF",
  "key15": "5dJb7wgVz5P7MxbTHxq3KfhAbzJprhZVTQRhrN6DAfrRoYaj5HEuShvFB1UbEEAmi3i8hoVmpPtUwoGmpg3KgDQ1",
  "key16": "5rKKNJhRpQnUDdmrALeLZrr1xgZS4UWoAWR4wVndDNqpi9or93hDLP4ucUXQrZueuiKajosXfg2BLVvf3vA6bkU1",
  "key17": "3iPMZRYManBt5JTYBdTcXR1vr5VZhXtAcfHkRy8LDa6TunTX1oXGCQTZyzh9bYV9WVcX9YJTH2SdpsGhaqLFScxA",
  "key18": "cQ4TNW76Z44vH1Q3Z3ymyXPcZh1Z2V5Bj79iDji2sVGXUiuGoW41a1h3S3TZXQut7kiPEwXS9qCcfZQd8kmjPqn",
  "key19": "4q7mJqn7Fgj2ueYuJqnsn4bJBJy5XXk81s8wE9xQ2KUzYrsEhjMd25i2fftnc5c3QVeL6vt4Kb4Jbg8F3CunCkMN",
  "key20": "3VDKrge6LfBVZc7oBsaT4dpAvdpSfw5ApDVM6EkngwghMjrzNEG8NRtBSQj3cEQ6foZ6n5q5uifi9ETkDEfz4b4R",
  "key21": "5fRng45r5FuPiZb4hVPg4sjiKij1NzAzpK34Gb8nWnicK56xbdYX81MbuNvr7uobSJeGHbmS4jX8NmmaYNicpSB9",
  "key22": "gpoeSX4zxBSs7SreUqDrMf3L5gtwSAukU2HrK2Bvdq4DvTW9RPfQRriKNrGP553FLLEjQWFm8ZBZRs1zoMXEkSm",
  "key23": "QeskuEdehbts5jJZJAP3vh2irnFhPKatTGThvVyVYtwz3Mf1xRVfTjb156puBYn9aHuTzNb44xdyhb3p45tkNtp",
  "key24": "4tzacCRxGMEtHkX2YUWWkrcm4BwoNCk6HjNXhxvEmnost26sFMt16DxEUEx9PeJPJGbFDwa5Fq141WCwoMkf14TB",
  "key25": "29QPiLhu99ZCY8qTB8wB41XsEXWjsbZ85NfwUtV8UVc9juVpiRF9cWGQTrynW89pv7sbGPss9Bis2b5NA6rUU3V5",
  "key26": "5R9WwTSgExz3XbyKx3spHxnc7w1quLidtzu7qZRqipPw7PiqwqGCTALkWRh9iELcj3JnoCANyjvor43pNKjecTEt",
  "key27": "4f3Q5fGRnD2TGUHw95MCTX4VZHuHGRnGPs5oteKzvGWqEbvZdhMdaxQrhZGeMVckkrA63VsUVEMBYn6TzdcouTeK",
  "key28": "3eBK7R2rS6aKTTdQ8QxVsDKMUYr2ji7hZgunEH8p5mccJ8zPrTd1AXdy7N3GFG5CrccGbxDNhbRqhTvKFHCTA4i5",
  "key29": "2hYLxp28DTfhVboddkYivApc5LMUE2Nrf2pRmi9NaHgr5zHofNYKGss3hNR2sa31dYHcGjKaQNZfrjDJDuMv1vNt",
  "key30": "3KeM8BNwu6Vq9mZXdsxbMEQ5o7Tt6jwzZg34nFgxuxiByxDZngqLdTDDPJuo5H3HHk5tJFF1f1Ti15Kuv1xsXLPx",
  "key31": "4TkbfdquJyPj84WqRtqESDp7CYwZFW9N43X2Z1KJehvaNRk1v44HFAvtqqQsnct1UmxCo5zdLGgsLVyehpYAYdR",
  "key32": "PCeP2fXAf9gpAE3rFFqinBTpsAjeSgwJB1pjKEsxxggtgiBd7k9Nc58BFVpd3KAX1xRUwbSfxzYtMDpg4YNdJPG",
  "key33": "48kA1V2Vyhekfw9MKBUDD9MBqCFrDn7VyYENVvJRt85xv9AT4T6oqRjE82c55BCiUwzVYs5Xk3oKCrVYzoSsfsZ4",
  "key34": "327kfgdyfbuQEdtUhgtDdHPZnLdwf2dJYYHUsLLQJpum9pxVjHn6YtfnXBRFmcKV9ccBntbqmf58Ft3cHXY8umUu"
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
