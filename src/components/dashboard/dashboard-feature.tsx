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
    "412ghqV4wCcohBdd6G7PY4823StHrxoyK32sSBWYBNrfs61PHtKRkZoBYLhkdGtmS7LRFdxRPrFxjMQ7U7CUUQ1S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T7Ku6xHhydHLx3j6nvhuoopr6nmrTXWbSLyFgkXQmVNXnEpj4wnPAA576Rv1GF1WciLhBPVwk5k4n43aBLgcsE1",
  "key1": "5zojzpxL58QzSfAFeD5naeB58Y68TrqPHCqfaTMzNn5A6TPnYsX3wgyoYTUXCQXbkKc93D3zmGHDpuB6KbC5TrYs",
  "key2": "kBaVDwStUVNGtid224dwB4S3zTbPxQLMN1zoEFCXr33VKDcdNa46u1STBuRu1Vp8VMpGqvWgmLPVkDCXK4yuUUy",
  "key3": "4LFSeb4m7V1UqZ8qyj8oF9wTkxnMTSXjHCLjGSYPpj4aAx9c999v7JZjC6E1BTkkKntgx2Dp3WjNjCaLW2JVeDW8",
  "key4": "jMqL4NHeTWfg61ToKuUDsdSv3fX5Uo9RTMbvpN5J6ryRSHhhLccCouVyTbs542xGSJV4y8fQQgxQWZfaM9typvU",
  "key5": "4zhr8ie2DYw5iLjC3wrbXAZALcthLbNEpn7oaDCQ7TBHTARcTdXvkMEid62grsLwpMWChgNJ9V5orMxQJPCHgm6g",
  "key6": "mekEHQ9eQY1zkhXSA7CDiruUD44g1m4fydqtjTVEqXoJKtqernk5km7zUTV8jn9dZUkNE12yR7jKmzR1bm9poik",
  "key7": "418SDtqPsBmBgqUQ7R9pm4SsLPyubqNg5RZ6qsXome5GYrMUZKsvPdQvXCzH8uUSB7aXHrkT5gEaCmhanGTjkN8E",
  "key8": "3MhuPWxmXfV84fc448M4nvGS29gXotsxsUyhBN5RDKBjM3atJj33tjMnVX3Hh3Jnz2cQhamaHDPXNzzBuAC1hfXM",
  "key9": "4ZafvQ9vpWkuDNU2jDAZNfohi1VaQVM7vH6mVVa36rmFbQ9rVRJNtcL7giC8ozfW7DNYnrqiAJyKXxKyZfxnUjuS",
  "key10": "mh2MS11juhBLwCojXPCWZd55YvSD6JvarsgZsSps3eUuuZX9xNKWUUXczNMbFmxdL28fS9ybbN8Tdus5s2hNhQm",
  "key11": "CehDfjB8DfsU7btRj1P3HvHe5BWg2ju1Juvk1zAHaZow8HtE1zNvE4YPU89ohjoH11fbiEVVGCi87ENt9akjHCu",
  "key12": "QZ7CxpkScjQcsqqf6zhmc6EyXbdQHPV21FxhYUGXM5WuYpcpZrRXRDeZzDmeEnvii2HANjMeBfc2ukW3W1g8May",
  "key13": "4wCyyyxvKvUGRw74oyqgsQVscZDKa6P5f9oNG5EBpTwsHCuaaEVupPT7KroPsKSgmqswJGgU1DWaGMCtzeN4hPAZ",
  "key14": "mZvi56AMnNMK575idTjQgyEvSeTdtT1qAMD7648QrpQaPWRXUauNAcKuJoB4c9FHQBLbQE4L2tL7Y3yLaZeEZLY",
  "key15": "3dQqtBdRWgttCxg7mGHwmG7kBrGErkk2FToJcvRNPcPRBMsdJk8iP7JmZebBCdxfbjaagS14NgVcpTDXCKSBqFmW",
  "key16": "4MCjKcGLXzUQSXuMs1RZaxciZzRkGkwXw5TcBQfM8GUvAYm2ue79W1NLari21CczpyJqpGz4x6hDyPm8VuTzCB1",
  "key17": "uUezLBWb7hzNEhy4bNxE8HnXS1RmwDxu5Cr4aWcw7TiwCaMgy93mEMxdDQPsmDRFTeUs4Efz26wivNaowSyo7Az",
  "key18": "2aDRRE3bk1C9Nv26yExpyGGgZy1VbTYtZTZrU1JZLtbRDiLFV6yhHn7tG6XciL7rHfZQzA531vuUjGdGxD41K5Pr",
  "key19": "4YKZUqM9iz12wTwTNCugcD3rq7ch2fEKBSAmTibiXNDQt5yYe5UzVSD82NxgLRjtRqhjcMhYyDJNBot9Tu4bo3n2",
  "key20": "YnZwpDrFKXjGYyPq3wQt8hettkP4WynJzwAdoKeTWuFB4TFPYVJTDimsrdfB9AZwP3aVAT6wWq9z61jefr16FKy",
  "key21": "5PUaPqnLgoHjH7CQock9DiTr4VzHn9EZLW14vhuwR4QxxVP1sR4uUVkRQ6xDFFj4qvVrQPaRhAuTpmEqeeAbTSUj",
  "key22": "4hYXLosTUb43cD84WpJxC3wGoSvSJ5zGbTJNXMRa4xzMg9isjK8CGtPXfskApVX6Pr5uEQCRRjWou5nNAvNs4v9R",
  "key23": "49BqEaiBXTtCxQazUmVaDp5W4UMenFXb4A5BbCbeN6ix7hVZFcbgBeovJoh9Pw9TUhMUY16ALMXvWDwUy9PBsx9b",
  "key24": "qdRgD77CEa5P3ckxEyZt7cdHXEkpz7GSjK9AYUTGYZefWZYucM7hyDqydw2gxpWeMni3q387PDKVah9R4eSCFNZ",
  "key25": "4eVsAQJg5NQrX5sz29na8pjd7s4nnm3RZgw4bTWyAJq2rZGSVQudJu9AyiuYgnyBTC5cE4GZRTye1MQuQtJKRXhh",
  "key26": "YNzmuYeyhxDfE2X7h44u41M7jZoYm93wA6MDv5cqvR4d4ETowM2zewysxXLZsq7giZwkaadi2TsLJT5NUQAZr16",
  "key27": "W3mM3rYGSoCMhfFDkMQrnoPsFRdiBHXhHYaEeo8ryHv7kKWfCPWuZUsqyzGbUhYu8Xz9ULL5My2bSyk4rCTK78B",
  "key28": "2e7nFzFdQ4efJFpUqcsfMKawhorbAvf6E5oL9R5Qs1nzyjxoNbS7CGUocMdeUDAyzCiW7jwgnLDU3DmYEd16yqGS",
  "key29": "FjktbvNNHDhdR3CbtFboXJSTz4yStievib364MgnygP2wsForZhMmFrHcv6Tvr8t168cXqh5P3BJvbLdgoZeE58",
  "key30": "Qsv7mvwmnqccfSSKYWm5suGtqTCGK1ZUy3GBqUqNurwZD67CQENXFPUZ8LDBKPa1rA8pAPjG5hTakqNriFK3VDn",
  "key31": "3tgVfiMrAvUxQm3FcUNAmXh7w6xMCVm8dNypqM5HNzEsdLSVrcx9c9cgRkAWqbHsAEsf9AHqBK9Yh8nyEmjrRSJ9",
  "key32": "2gBFgtRqv38j7btBj29u6iZg62GHQ8TDbDKxw5Tvw79LZF42Q5jAievFEdt7bqmVdLTYoibhMjQKFA5GthBnf5r6",
  "key33": "ND7wNFqDVXj55qQDbbXDKpCPtKgpkbA4sKi938ZexuDufVfxUCNmzwPTPETcExQjCrqeehrsuY3FGWxXn7q6KQN",
  "key34": "5psA1ka6gDpiJXVEDmYCfJbFs5dhLKMTTbsxBJraEVoU4wLEevYiLJRSqK7J4STgGJs6yu529vaRC5GNyXNXx9wx"
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
