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
    "3Kyu6j4faRBRaGjpbCVXdwEKE6QqYz4EmMjshJ7aLEP3FPHr3C7Xf8bcLsrwCwi2zGAQQUBqkWGWYa9XDHJqMxMa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aUssgtSgbQ7PguiqzPkK7Veva1W8CkhkkEqYBXAndLBd6bGJTbarnRsR3EJ5zHRuV9jhbvnJ9GMTFkEEFA148A5",
  "key1": "5FzmhKtiu3HJt9zW9VvF52xmPf6CqU4ZhwiZ4gUNNKetXgHACELr3Y6f2oKTLiDwdeHK5818X3z58R6f8JMEKzNq",
  "key2": "3deft8WZ9wd5Lobcn36b777HHCFLFXEmCAugWMnnRRcDNSaomYHTRs27qS8eZN25jAnDv3F2AHwiGo7GNZ7TNMqC",
  "key3": "4Ekkz846fq2ymrUkSCZHtfUyzcJCzcPYDnNQLod5Lx96BNvvoHFhKfpznSR4WpaJfBtgKAJrvjmNWxsxdGbN63q6",
  "key4": "SkJAoTdPBfNhAf4DtRig1fjV5rYJx98hwD5yfJd1keXwJeTznLPTTqF5Lenzd1sHbwbZZmACffNKSNDTtDCsqRD",
  "key5": "38L9M5zNo4SYfun2Bu5E9nXhi3pwc4bfKuPtwVXLT7yidtXQnZ3WagZ64uUCG4Zza5CYDSBobjzFumBd626mf1fV",
  "key6": "4hLYypwNNRvaGyf2facQoqcQdmS9bvAHbHyzFmmWMD5CToWqEvK4Tze4JZ6roKfQhELi2r9mtFTUdonPZdzgPbuQ",
  "key7": "4BuFu2twWt1hBBA5fuyFoBGp5ERoHg1gPSdECutcELUZRNh5gCTgyaNVYe57S3BLfTtAfZnueqgBvaUWNDxi5sGQ",
  "key8": "4WoGcyqMmt1xqc3go8wHcJGezu2tUZmGiedXXP62ZnmbXoRnJr5BXD2iL52S8GGGZs37pYHPYqjnrT1gFgSZMjJv",
  "key9": "5e6GkjZkMVxbdMCnMRvQGejeQVEZ7XiS2qEErt8gbntUBFwNMMFLTibxin8LgVjZKTBVFnz9GBSWcuHkgRcTA5G2",
  "key10": "2PVrdN8hpt2zoFEBTbNUiMSr5VgmRiuVPZuocN3MpXK47AaguTfn7FgbiEgVgYhf64YoNPwweSiGYDzxV11jMVEg",
  "key11": "3tSWQqJfJCx9RgGXtBzNHvwoJkakCpZv4vS9vqAyb5Wtjx6DMbqmnix942dsy2o5Ks7NFAJtpAzPFuSjUqhzVqot",
  "key12": "5zfdgLyFmMQiZh8D8nYXCRWzRzPrujEtQvw677YGY4WSmF46Acczh4nhQX5UEKsyeXtrGvoMwue3hqqhtcy6KYCb",
  "key13": "2QjiTAYvpRtXZJykmhA6eDkkrhV49WxpEGkKhGW9wnnWf3maWj8ob1XUdVrYxZS2F4YA2sWSEh3zuEBQZfW7ksyg",
  "key14": "5F4QBuGM4ND7Ld2ACtaDJ3vSP9u9aMKK3pm33TgxSfDMBuC4nVSW712NhahRAeqxHMerMsGBw1yyKykJnqFHAX98",
  "key15": "5zxrt9zA16YCYfPNUFjvKJjUbF3sBYB1kmq1DuiRW4r3jLCh6QXaYrf1kJe7akPUf94AZoYECJNdcG5zA1GWBwcw",
  "key16": "8aWG35iYLLapDdYEpFwGWAfHu35rk8yPqhf893tm5iFd7XxeUx864SAGmLoQNaNV837P4uPBthbfQ3eA3F6PGhL",
  "key17": "2b5TPP7HETFf8vUJJhL2siw1gTXGMNGXqVThghmfdJojEacjpvDHogoa6P672iF4nwfZkAe2pHpAV5TVSXZQLcfA",
  "key18": "45vMBRZoNdTE3nnjMPx5eUH5WtWTssapdY9oxfQddAc6VmovhGo3BFsmCZ8JMSUnNru99NA4gBAwani23hterXNV",
  "key19": "45mFVzGj76unK7YFpbiZVSeMqomGRPGdpkgXq1mtkZZ48yUFhjLXvFwUaRFQW4kNz6ME7vEsaEpaGc1e26VjyQRS",
  "key20": "4tH6E5QYHoVQgr8iMLNQQbNkwPGBE3VAypfHXaMTHNcMNUNZTmp9hev3nQesw1NvjJeBbZDu6LQFfFz4Be35UX9S",
  "key21": "2C3JEWMghwpXKch7K36fqpcWgT6bStL6ZNvpQKHucq4JpfGg2uHrP8PBRmCzn4zEd3eerCmoin1u9qdKed1QuKyL",
  "key22": "4wLjJrGwfNKXusL99s1uaWZFJZiwPJ4SjMpGToiUBppLyjTGuGpLDn55t2yAbnHbvE3oV8ps19RnHf5osKQzJLU5",
  "key23": "3SdXFV8NFSS2FJ3jKxrCv2HeXivrSuqNsSMk6XbDfApfRSFigA8n7ZatSUGq1v22hHZNMSJaNziaxnkxqQxVgyJ5",
  "key24": "2Xs2Ln2dsam6bWPHuXHbL5qhQ7su5KdCw6hNKW8qszgRZ3JHVYT4rU2wBb2fCSzEJBSqEGtgmmvuVK4uqPJqXLGQ",
  "key25": "meU6qhPt3nKM6zgU4c3YV5JExoMEp15ULoiNEea4udHBbx3VHbzgPxd51fuU5cXwswker9PXKKxBGBgx89VVBCP",
  "key26": "4waN3XCuQxdVkrzCvo1o1rryaE3e33EaMfoohu283mGzVNzeyEk4p1q5ph2vjnyad1MuasY2i8JCbV7xFHg37oBw",
  "key27": "34cY7n4vedceENXGTCFod3xcbcN3cQ3GRtfnko6Y5dr84A4QJfc87upkrQfqLVefrgkcN9n6CAN5gmKYfwvYKy7n",
  "key28": "SUZCcdW6LiXLx6opu3PCuQEa2qFbbLncGs2ydqXvg4k7mTQcqChV5Y65Qv2p3NRGCnoNHQ1a43s3hZ2U2xRnBB9",
  "key29": "2YL9i9RynKsLVYgpNxhS3u1XJPqon8ZyYmt6pzXwD8E2eVavYTmwDuH6pGmo3Q8FJc6acCwRubr2xzL327yHJfE3",
  "key30": "2w5xcieN64SVm9UgbUm18s8WGWbFZvBjzcE4Krj2XpoJF8zHQVdMgt7CzkdDZYN7r5eJxxHWaYB12XF6CAAQEVPX",
  "key31": "4p9KW2YMa9S33ddsh7j2jpxZZr8oWm7S3gPDdMHnNE37AUbeQsNB8feUXsj4uXY97NnZRdofMonCrApC8pDD7xLD",
  "key32": "3BAQ8oE4X4YQyfizibz5aV29x78Mh9yEy7ho5MYSn6hCuZeYbcqjm5eg3a8dhtYZHnq3JBTEQ6yrLXb2QJ77yuLL",
  "key33": "5NPBLRy75fKvKE7T6PdnYJjThrZyJhgTSHxb4tW2taeC1Cq9yDckd3w8ASwJa7Mqqq5NZyXkSRgDjv9dEdfdv1nb",
  "key34": "5oSoLyn8n9AXxaqaV41NTb1DdaZG9CtfiQirLKT6N21aWCVraZFnLdjUodFAinM2wdLmhraYXhri8GRP11vVHCF",
  "key35": "5TMhvCPywBpzWLGz8CKRgmxDUw7rgdm1wNBg86UbFjBhbxsXgHYVEGRCqqxeDSmmHi65P6BN8GcGTmAdB4Py4y7s",
  "key36": "TACqCHQh1PZRHrVBMCPjNiJypFUVouKrxpH7kePuoixHgaudQLkj6yTuHh6QcjHFB4fLNyxFMuzMyxMNkkhVEYD",
  "key37": "NrymHSsZmnRbJnvxKhd5x1UjQW2F7MGjfpBUkFmMe3o1Bndim17RGVoCbtA6TnY2wHsTanntqqEo8wZWwZKYMXx",
  "key38": "53YqjdPki7nB9Hxh9d3K8tG5p5FQYXakZ65dopaKTX3L5TeXouEdfTiFisQLQgC9PRu74ecMCFAFt5dEb45NCA1j",
  "key39": "47zNLYtW3bnxEmg8vuc8qPpcRuCeMVXSJC9oRmbJPWKduMZBQ49tjHt68KQajzwkbnbQBkpHGMr52YjXmVjWYEbP"
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
