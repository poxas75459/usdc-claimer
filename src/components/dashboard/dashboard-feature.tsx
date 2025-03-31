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
    "37Xa1WyN8HNk2bw7zAydRtUYis9s5BxEeA9nMBiFgYjn7h5K2oTcL83gkwaBDTbnxKU8UhYYwVYJDpRCLnSGGwQF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pZ8iuu54Wpwe4X37wVG6UdfjD9n8WvGff6tke2MH2i8BKgNHZ7B8gyLHMapQSV9rocNmTEHwWXdqZaqeiBri5E3",
  "key1": "3KPr7YwfuYX9D4MqRVX7HWbr5tQtBjCnRTh1BioNq694BLHQN91eUEG74ADA1XvUyaHk9EsGJUgH596uFFWc1sQK",
  "key2": "WSu8LXuGyvvuVPRQzEoVo8hPS6nX7AromMB7SeWdcwvTcEAKkYzsd2B5G4tTrA9xk5JEHobwiiPuKQH2DjiNhWt",
  "key3": "5E8zR6rre9rwKeGtQ17whpqojjwf3JkyxmtXWKaYLVrVzFNotNVf6zsiz5dgSiy1RJ5zZkZMCCkp3kEhBZxWtpkd",
  "key4": "4BWYeMmjWeV9avs9aLAXZkehVxjbszkhunmRH2321rntd6h2fsZycNn7kCuesUkYSWJovawtGvuQdnBV65XAwSy9",
  "key5": "3Np6rEypTcNEgdTqz3vdo76qaAoF46dk2VHXt8vq9Gfi3iHG45cdnTpJkrsEDT8jV5NGgQBJXtYtyi7ZHowPvyQd",
  "key6": "496YBW2fGZBbvFQ5LLzbTtSWbjUbZKDNYi2DPbxGYpbX2QnyapVea1ef4bCZ3jDaqNB31zn2qTdCLi1YRZX4oDBD",
  "key7": "2CxEUvoGGHoW1oxEJB4yar8j1GhwbE1YaX6Vt2kEsGHiyW3pMJeHzz835r54yRdf1UEjV4o8kw2p5D69Yx2NZXrd",
  "key8": "2dCn9BZhGdi8xQ4cmCrir6q9RBq9Zjrfh5XeQWB3hcrk2TffiQhtrrdBgMmu1usjUMpWMRy4PK4Tsd5QmaPKFDq5",
  "key9": "5QQ4qaJXhwcRQM9mYLu25NVXtncqrL3TTSetHXDbAnXiD91saAq8mEBFoQrofHo51edNXUVxcR3JrQ8NtzwcjLwg",
  "key10": "2QMHYNNQZjiTWy62yCXVFhWL2uMe9RtsCp75UMmiFnuwGd6DMdJsJLkDmAVMmZ33nMCtk15FUjdC75ibfoFfvvLJ",
  "key11": "3tWzmsBmwB7MvqLekE8LK7UEZjvZ4eAL5Boo8ehzQcKZB5o8ksL6R41itxCqwR8q7EN5LJoryERzs6FCu638kzap",
  "key12": "3EDj1psgAZaCESfz8FE9oxoB3wSZsxxGMaZCTxBCa7qsjNqVDr2grfjmHpAUADWCGFZUpYUBvDQa9xDWVywsMxkU",
  "key13": "5P3jSdg9hPuh4dpJYPH6JE7EBmqmuKiKGJh49J6kTg7udhE6YGJhsRAXoDSZiGDMfkxbyQduu5aZWt25WchWhNEb",
  "key14": "5U9DgQtansom8Buo1z8t5NNgXFsxuy1ae86ctcoC62rawiQGNC8Er6bPVxAzRBfzaybozBJc3SkmYC6RnmnfyMX2",
  "key15": "3ahgzNo9rS74wBXaQSSL3dBnYi2qSB4DAmKdzMMRBBLgP2PeG1PN6ZA4xCWtAqDC6rZ7pZ8ftBfZ1MpQi5BniXa6",
  "key16": "EwfTpW6eCEsAueerzP2YzPBpoXvYMMAdTM652VR5tV5NZQwL485A65Qw4qhCiRH1WWktvFSLeNksrJM881Zgz44",
  "key17": "2uGfYJq8go2GkGM2MMazZjmmJBnrevTra51vjCSSiteY7MU6vgB87Jk8KBP7d9nGZd3iyY6sN3qKsa5CvLvqLiRA",
  "key18": "3v3dtpwNJWewfvUJYFfHCZfCVZvWy5A2GFHid7HW3sdvuXUKGDG3URbt5F2wxYoFmMxafP8CBbT61mihZ3aMDr66",
  "key19": "jEAKy7Qe3uyPzENayPAJRxrNBFQrabsXFyctHGe29PH5BcSPZEJkMd3zbCgrv2rMsRmqSymMdLuHodsbmimz367",
  "key20": "5xCNG23St8K8zWtr2i5kXieGvJyqRKV4BzW92tzTzDbBPoRG9B5LfChUpyR9LTLj5M8B5W6S1yWVFG5hzG3BSsyg",
  "key21": "59pt3J8DKj3iccvGssKXvwJ44bRyKfaL4v3XbKvDj4S4uwDxx49QtSYZbP1JyJNeTKfkGFCz9w5KjpKcSpU3KEx5",
  "key22": "3NBuB3wPQNeH9tUHxW2AugN9oDcG5VsqyMTbbDVze8JQQFo83YST6tXmFHpD7KESvDEYgJV3AvSA6QARe114nucj",
  "key23": "2HDKUfAPYUXrZxDYm5QZ9FZazAqNcC7JXZF7xkmqdmqxvkN8UiryxvkDbfc5WsQqiusbZUx7pA7F8nYge69w4juR",
  "key24": "t6wqv8jHjoZf5W5LbwV71AveBrHy9nN5sMBsrVtHkWK59dWq852wehSgNpjeMcc64zA4cnqGK2P4gKQkAsqAxF4",
  "key25": "6Wb88NhLU9KEjM97F2oj46CgASHxgerNd9VZsMSLW4xvfp7DDitQ5QkDqntUNb8E77XDtyPpjAcWChz5Whtco7v",
  "key26": "YGD3MBJ4SjQ7Kk8AULd2mZVPMt1gsWvQS8SjFR6gZXMqom8rXYDd2Cqte4tVjq4pt2wZkjNYURg1qujgPpaPHA8",
  "key27": "5gvdSWJsuBrFtVvadEVbj1UYWYbTABAVGdswKzuMXAyJYEVQsFCPM2bFiLZS1CYtVNdAPJhrRwuuKyHsoahXUvpH",
  "key28": "5ahaapaCJccSpvDipM2czcGE4ofyLdUfivgJ4DCUvYRF2fpwFD5fJfp9knjxYJAyXUMzy5W8owBkf9r2nMFyaA5b",
  "key29": "4YJ9iiLtxd9Xc8s9uP1MKDnyss14WdBfw47z3EvX3JQoMSDMow8inBDQanhJoMaNVgq8cDuHGEtxmHcZyCk3p7xf",
  "key30": "4c1uawY21k3LYLJkoNz5qETyXn5jZJkLx2bb724i9HVzqqLyD7pzSyqhQZqaJhhqTy7xDpT6fJSUPE3CU81yfFW7",
  "key31": "5PNMgd8er59ZC56oJGbcarc4qkJHyNiW4jXgXG9HfZzC7DCVLKymveAwnSX3oEnt4z512ZcMf71vboofE5297N9A",
  "key32": "dcc5HaNbG6TznJnhEDKr5VSqBWkVnbTe8ao2fiCymfek27ssYUfXbsvq2Zomx4zgeLBXYDPBdcJZ8EHAEEsN8Ap",
  "key33": "5TCopYXESGCm4qRYG9ntVGg8waBjeAHHSP6jCAZNK5ud7hA4kC7fiHKEtyXGtcsFAiuswYXo2mn7a4nj4jaAwAyU",
  "key34": "2ARXXeGkFjSEyWZKcZwzeKELGFzJEVzPvojVJPtdip4DRMqExguiteaGD8stCRKGhJrTaL2vLQeEsjTo1mDmWMSg",
  "key35": "4JU6DxuRRpLCsE3CZUp5sDyzkgvX9x1KquVGoQm9TuMUsheNNYXpZWseAY446rviSAYvAxLFcHUAGfM3v3rD2775",
  "key36": "4m9HoUFZcvZM8WpKV4EauKDpuKXwJmMFWUEgUY9ADnVJXmhR9ZMxoHF1hqJUxPvKL72tekQbdNGpQhtGRe2dJoUz",
  "key37": "2g1iRJwzwexwZS2mTzKHo8VkjFYBp6zmRbqwdh9QrCSFV5GR7y16PAeEbEjTUsu9aFuaUFofPZibTtWZ3Huc59Vy",
  "key38": "4DURqQ1nWHBWeK5tMFhNzbGbv3xPPmg6fPYcvwpxHxTM4iTQHxowYJaghE7yp5p29eFUeURa7SSaKo1CotGch9Rs",
  "key39": "3szZ3FxHPdyHcxA6mxqZZEt5j79nPQ1tSpcxGKSMQavmz3Lo78BiFZjmHyJLvDcauWUUG3S98At9LjGTWGobNRt",
  "key40": "4xj27xh2fTFbEwxJzTPHL8mVusfdDTPYzv3b2WEqiPMdq1PECGZHQibp4FkeGARG596iqmw8LqACkLe9gqrLSY4N",
  "key41": "5EMsJfXhNugasXqcVJjg3ZM84b9oZbhHPj73XVn7h6v1EHmEDTbzrbo8NfJdbfQ8keKhBaUNTtDhFMi7uWAkRo3b",
  "key42": "2ETJuZ39jfjqoisLX8nbMqCQkgRoAJ1YXjboFuZAiarubFtsRNHni7xtn3C7gUJvkqogkHRmtbFR1GALZ5AFRS2k"
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
