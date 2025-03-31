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
    "5U4Gfsy84t6ZVSQTjtH8drbh7x23Vdg1NDg4LURs8p2S6489acdJ51dGo8sySDGtzxeVX82M5VFFdxVLVhu4SKov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kVGqRgpNp7qUFsVHi5a3S5VxC37gN6gzmq24dTXwfykizexMgckVeBYe5rrzoiUoyTJM1Lb6V2L2GFaKzZxN5rL",
  "key1": "29XudwN24uMJ5jZBu5u8A94hEH6dWTe7ePw255rBxEx9uZrnzertApCXPPek8ayYDAKHcwfRaCmtH9eXCfXFW5hE",
  "key2": "4BTj2C7S79AnDqXyUCa8pBPtYPvVPVZvzjDZCJwGbFdVXFDshysS7c4RnhBbYmYMEHL2K4kVvoKM49VdKoqdShAq",
  "key3": "2Hxg6tXNaHPUePBKjZVkGdSXKH8r9yRaF82mSWfRVrtUcbNQrnaEfSxjYFJDN9nr5G8TG3Lj79d5pfpe2LXUB565",
  "key4": "3tHRHTJ9vMUKXfMqmKTQ53YhBnACvFnC7frK3nau9G2PR8E5GAL6fjg7J7fQXimvPS7h55Kzx4AauCoFrfmyoety",
  "key5": "4i3cRjQ4DRx43VtEuiwPXSPrSFyRFmQqmWRg5crRij6dq7hLDZXUaCsphkRQ2z27ziPT8nnzBEdB9nt3oxSDp6wS",
  "key6": "2DtX3FZcUsLBaKmUQKPVQmqYjtPKUrrS4ZqNn593jKpCDB5wxE7Lm4K7gZqpURhCVPvZFNexnEXCE7KNWhAGzUwk",
  "key7": "Pv3xdsvJeQPnh4d2jq43SnQArZ74Q2wucw61cboQWQEZoKKNbrNF9WTVhz485vTttXhc5hqGEEXizLPqwJebmzD",
  "key8": "4LD4oBXuDxMLS9hp3sVpW9ihUgsMymi8PY23R6VtRMgVxpHDCwM8t43Rgc1c5M24L69uyCJ7c1TeErVFA7mASXj4",
  "key9": "5s86bPjLr7n5unG8F7WhJ6qXKo8ZCvrraQmEuCQjTQKLTmL9CobMGtHrhFmFr68TLsvxGeVoghVHzj7eLtPCANVC",
  "key10": "61vKC2CQEAJg52km7GzTosnpi34W9GcxbhXvuqBwQ8TioR9Y3rJqvDxQaMSo1ZSwAW6HBoTU5o822oFJvMtwFHd8",
  "key11": "4BR4nhuGqTnsJeENF6R11CzLP9BfgGv1M7oTdMfVAMkYykeY5t6dvh3Q3ZEeWhf248KwoenSQmGLz1Hqq76UyTGo",
  "key12": "NWf1nUUHFUXEQWvxBAn4b5bMw2NeeK3yYeW1P19a7yvnFtHEXu4Qb5eGk2SYEtt3Xki4jXvX1CyVRJjKJHnt2VW",
  "key13": "5fG1AKXkFCwsd21SrQycD9r5s1X7PUZPGQDAqs2bTakYw8c8UTFi9APxLyhqnj24yDeDu1LsaST9zBcwo5DGvCaD",
  "key14": "2Vv1PhErRNiBU5iThK9RakcV82ascrW8nozGf7svx56Luyyo4cuPwkBFYQxur9tmzi743iTbXzjKaEjxY2nGsW5i",
  "key15": "3gXAKT4uTVwbgSz7WsEheFLeM1gYNNJQB7ZZRWv9jaEmv9WnXrs8tqD5VD7y8f1N2QEk5XyDPZipEbyGY7dq2dEy",
  "key16": "4Re48TkkmhB4zLmDUr4iFjc2vg2XBYZbVFKK77TJLrU1qL7Bpz4eFUqrRWMxBQU4aoMVT8e4bAt8sMhtRFcGbBpJ",
  "key17": "5DUoJuwqLFHrvNQ26FBivmD7C4Gfd6j8danx5p2zpowjBs6pzDZJiHudiBuUivCTG8ww1XCg5Veix1ixjk2JRpco",
  "key18": "E7cuKrchVfpMj12ksJCRqdYjU7sBz73qz971LyJH9QB4mdYH5BgJq7PendsBCGemV8gv5o55Lg12dt6xR4JNp62",
  "key19": "4JT7g69zZXM2BVCuhoYSZ9uq4AMFCqJLQPZJAAMuC3vnquTuQo7jUnieucP1Sne24i2QDRKVwdQN726RAP5UVdvm",
  "key20": "2EabMUDgJpErFpChCRBvedBkT8h1rcxRHEhCXrEmDWw47Z5nnB9Fbo6M81GUCoRYJ672kU8xsEWLMPdXP33eWP2H",
  "key21": "ZmYronWJGExLy27YxctRQrae14AMcWVGeZwR99BRm9syWXbpaaLcdeKeSRsh17KN1cos5p4u4tu71W2iFV9H5ch",
  "key22": "5xysJ9aCG3XUpNBaL1dJv8ptkDjPN6TFpDJ9j8fTu1t1WgCkPxG2oDu3Pah2CYx662oaQEibLefdgxWYtTEBaviv",
  "key23": "4zGFx4QPSjhfGBk4NBEZWvko8ZPbc5zKcjq3xSpHZxjJSm3t9PBc4EPMb6oEzhtY5Ynsi84PH8FZwP6TSpej9RE3",
  "key24": "3omPPuBQwF2nA4kJD9roRhL7fkTjgRTak8ChnB62WMNGPdAcfjqLw9BrDvZpWmhf8uPQSdLEUaa3C9nrhsE8jxRn",
  "key25": "2MVtg7LfEqfLrW9cEx6F7YCQeWoeATjW5AKQxE5hEXjeCfT57MAMqPhY2UwKuytsRQugKSczCFBWa2crSWPQ9bz1",
  "key26": "3ovx2fnSN1edsPEmDSDg5b1pbryStD3Jzh1M8BPe5E1T4DL1cVHP2G481RSD2i69iLcSXs1DWxPxsV1BTvFQNDVM",
  "key27": "2kdstv2XbqWxRdnXcghjWyMq72HWqqTRvn6mjUMKKB3QU5hscwZiHkZk3XNgw877A2sFat4czpobnLVznU9PAt2W",
  "key28": "vpUMzoLBXmnTKHtJ15L5d4X2cPtJAoaUxybE9Q9RS9tC2jVae36yGkYpq849WMMGwzZPashv2JNLTHLUAbrWsjV",
  "key29": "33e9D9swRCViLSYZaE72Fy7YjKjKSXJmSq3RPjRN72hjzCGTyqtYdPprJQStqVQnppBBiXpRkQQiJyws5AQVt5H2",
  "key30": "48ZXJKa8vVZVLR5f1Sec43v5boSyT1KzcTMYRj8GCPY3NtknbwJKJjRcDkRxNtfDxmj8GzsNzgVKZoE1JeGEx5wA",
  "key31": "GVH4kp7pTc8QnNfA5QnXP9A7QPN4nTutbWtejvVHs95ebyTpyjDcj3crCBqQzVG5rCQZt5TYJLSxJi3XB7ZCSZA",
  "key32": "zL1sKjUecQqdUp39ZtzxkThHNpLTCejDMPGpMUutaueV21q5m9ZwZCHBx95ZtnF1BuehxyLgSdkAkNK1fg9tWJZ",
  "key33": "26A41onPjrEgdc7ea1mxevBpxyzrHa1zk4LZeHaa2QbQWwQbfYvcsT4NksQ9TwTpr7iZzBDXAGdxR5QkCeKkr33z",
  "key34": "5g8M2vk8jRV8fgbaPRB3v3jqrvDwnK84JRHxtUcCbgBc5zJbFZDHyEFvWqDu2L1fLN8fApyUWPM7972hGFg96nLs",
  "key35": "2aDAJ6kXbkU58advDkCLTZz6MtB1Cy1ZRxUWDMLGKt62mT6mE9K45djfF1T3giSN3jrwcz4nyYgrYXYAkpMPUL8W",
  "key36": "38pfvxTxUe9CuhvjFEordVdUTCPpcNrxGYVwR14kE5Eoc2ixHuhbwVmB57KsMapNDaod5NgHi8Fx65e5ioVLLgZT",
  "key37": "5YU5vSgvstRrwiCfGcHPDYeKFzJJETqxSEKcxDuXn5JBaaFnjfPQVsztfvAQyPoJNMM1xWvvshzJX1Y6qtzFHxsV"
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
