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
    "2vgcG9Q11WykicqDazBvakVkkic25xqAitEpdCmLub7y2qStSdsqskxaG8BsWvCkjR8Q78ehTc45uK3EJw78Ngde"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b3tE4LqTHticDJs4VoeYhVtxTBt5ws3VEZagaBxKP3SEciSKjgccjYY342utd2jm1cVhZ33eaZnaDc2S1hypkGC",
  "key1": "2F1nXrsg8YeYn9Q1HCpD46tMGko3gqbEEJ1ZZPAddudJMFDxn5W8KyZHaf17BimHrikciW6YpvcrxbMjhgfaNUSE",
  "key2": "2GWaZdZ5XoENev9vV1hFV7aTEyVipbvtX3hxvw5FZtQRAKbmYScgqabtMjbBEntX3sY2KjRs4wKmqPbLVrTnYteU",
  "key3": "23F2mVjyQTBrTSRayagEDEq2Dw6jFRHqkBM7WfrXEgY1u8UQJ5ENmudhNAkeXtR96nnn848knvYWA1QDxJjGk9mL",
  "key4": "5DtrafXeZLoKkqcESNo5C7MVUZ9QkG2yuJRgvF6xsozyfBHgi6orSNcwEZCCZHV6iV8Kmf9o6hiD67qKTbSWycqW",
  "key5": "4gEi1DVQqdY5diHLQ7ykuqhP8fQuS7YTmrdhAK2FYKoseykG7LJn7XLs71bUnWEG7AjrcAdGDqPHtXLBznGmhBcV",
  "key6": "36H9qNDLZEsR1B5yV1vDy5wpYo4WaXyKUfhp4whFSGjMYk7bjCRKP5UreVz4FHKvE3fqTXRU6qepw1RincKpUpBn",
  "key7": "5wYQ9evhkwkxSmUB4WVSvNMCtp9AYbNixjce6R8mFAB2tdViDUuivfAkFpk3M6cTY7u1xeJ3eVDSoMh6ao6Hf88x",
  "key8": "3xEtxYxChDNfn6osJA2Uj7GFHxAZ9AXVWr7TxzRA4KL61NmcxyX2st1aXPx6A8xjKEZmzZ62nLt67UspuzKd2z9p",
  "key9": "2SAuXLpRXkg5WGcnBdy4MreWhQ5jhSazpuGdDMFVms98uqvppG8angY3jfJcJWYLRafPqrJt4MKW5aBA21KCerPZ",
  "key10": "cbNUJGC6sAcw5dnAYh3NNu7prrc9ERWBrTww7gW3e1RwUr57g8Hn66LdDYGvxGanZmMA5jxnU4SFD4uHJTQoGjo",
  "key11": "5UEwsrymzY1EBTx1tZvgqjQDtkn3BXGZF3LQt22VEYewt82jscd32QifvT5zxCsxkPa1CETzUa4mDNkbiMgkvGNV",
  "key12": "3pNgBXvd5G7SCcFS6dT1892Dpbt9w2fCJKGX5vUABjcaz6HDR59KR1sEHhXdA9iqFkRJxjo1CHJYhR9TnybC2wZd",
  "key13": "4aoCwMvzx6JyXGESUYRB5VUs6ZHgksAt9iT31iigQaPEoMM6hyU6QAyCSzNsJdK2HdWYhZoAMdL8nnnFXVdBsU7v",
  "key14": "5wGjanp6kDEnnN4UUhy8aZCctU9N1bf6xCw8mDWcqfoXqfggnNzy62Jz2ZvFotizFLQLAHa6kE2YQ9bKBPhk4Bvc",
  "key15": "2658V2zNLogRZG4GwX2RYwXtLk2VnawuDYqejTA1GGjfLoXhGtNrfic83dTLHxCTYSjMv2nEZCsxW4Ta9FTDFcBM",
  "key16": "53uSWozUh5bSQAuvE4qpdtBowLUnA7Dd2mF3m7TcpZWGQx4WNqhgcX4VBAJAaTpiTHarJF3CDQSdoTZgUgK3JmAi",
  "key17": "4gApcsSfK7rfSyZf6ruBoga8dnh58MmHiGNQEPzBMcsG7yUJbvx4GyZKwQ47KCGWH5x2pNiqLaj8Eiwf3yciQqF7",
  "key18": "4kgYxJjp7X3JAbL9GzAct3zxNXSuRq5BLJGuykCSnLgRLMBF1bwFybQUTKfb2hSux8NhRPJqbeSrnXwERn3ukCa2",
  "key19": "4pgHSPPbNUm1FunjTbL47paHbJf2TgCkdSgYMv8Pe3Ux6qvycmWd6Ks5xhszYonDuq2YJFcCUZm4apBhK33Zd6v6",
  "key20": "3ZNTrG2V8ygtqFUsCpuzhyfsBYtzz22Nwz8GPXdsPwZdpWbtkCpXYzMhYQsdNhDyh1UKj5ZjoWMYSd9kU8NgqvF3",
  "key21": "4i4N9a8BgWv3WeBeVni63DnrrDkvuaHggY46Ckn9uXVTGzh1YbFeTNpkfVVXpPd6FMu6tiQubnBC5E46yufiYm8a",
  "key22": "5XF5zM36DXDftwFSPUThvE9QC8wWZjHrSdndoiXWrhWogCxE1ffsh3WWEQ1c2G3pCg2rJzRXvQFkFroytDhoqXaP",
  "key23": "Fk9pZKcjK2PhawhFfugZtu9B4kok21yUg8kvx9Yzm4N61YMzJqVYxQnrWBXbPDEjjC85GyUmrBV8c9nh7iqhdGL",
  "key24": "3B1KU4ijkrN1VAnSFM3PjatMkT9kD8rLzznB2gXTKosGpmCPG3V6fJMSea72A9ZEo3M5wbT8CVdPJ4iqYGWfanyZ",
  "key25": "5GeYbq49dPbEQTL3x9YNGchv92NubbLMK2QtHrmMeoWwu2c79RPUhQJ4WfSSmWrZoYPUyvdLczgS4gP1osiFyN1N",
  "key26": "3rS6JLLP9DNTqnkFKTXTxbJWBmMf9X4CFKeQHo3keBFSaB7Gfqnbke1iB8EFtW1Gd74MRtFRJ4mRbZeDbKNfGKgv",
  "key27": "tJ9VNGn8nzEk3w2ALQPkGaAHL7diB5rA6U6tzp87kBTU4XzHjm8HwWiz2fFkGtWWStmozDrfppqopDy2VrzWtud",
  "key28": "2Npm1W7TMpMqmqHkoC2Yjtc6xyAV3xhCLLzY3NpTgbhqwMGidj4vfcoi5GPxWPA5nqFifbbaqqsQUuLFzQsX1U94",
  "key29": "mA43efztHjFjV6NaenZnAmNa9Lmf8GMGmUogESefC19v9gQyYPxkMGSAmkWXUkpVXeKxGZZNmbZsg7ttkvbPVnP",
  "key30": "5G7ZaxTVPszgfRB4R6iUtnCpA9n7ERhX8oMMdF3nd76CXZjRkxDW37vhrtUZgXBf1A8JxYiijWGE1Nfx946YePu6",
  "key31": "5P3WMemoJHuEQe4xTwGCTbhkLNYfrybiuu8YJhepMBqzkCTXM46jNhkFDUCCPmednV6FfXmiazaLQUdFp8tJH8Nx",
  "key32": "5YmKjmD6hsaZZELs7rz9rcYiihBzxGhUMXGUV7Vkptg7eKdkAYZsZBRyGmoGXD6yUMP4ek9qzpuQXe51VPFUxzqW",
  "key33": "5WBrHZ12AuMbBc4AJKjhrxjYYxoZqidVY3x4QpzvsT8w49uFejp1rMiUGTN4zMYCErVJkEYXM87y1Y74QPTQWDE6",
  "key34": "2enF7qrCwuE3aVnFa5mZWC9nFg4mAbYtXh3GMAYqtvUjC1CdFDg5HwbcRUN5KFHKWniEFuVaJpyyfPhS7dukpLiA",
  "key35": "2ai95ug4Xkp6JXAEpuRsEJ4TdTzVEkHsybHGFkoWhdo8H3pBTeiHKxYN7hsRo2ffU6ui2sbFE6ggM5bEoXSFWQpQ",
  "key36": "2dsTpp9Gpy2ABAHhsxBjv8cHaiHFwkeuSxRKQSqbavNocWdCFKy2SfFp8AaMSCAm95PMQq1qhtmuFvK4ZKDYGx56"
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
