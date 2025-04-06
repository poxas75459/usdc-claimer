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
    "5bASsWYwfiE7eKVDP5CKkhVQ7DnLCqAD21hajCTFL1AvKQATiTRsZBmL5hYgt8rEuZuJVMJ2wVfyqmpbAYBE6rVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AUQD1aiP6kpVKboT7SqJneWJSPsFmFUfjXwvESeeBEU7GrfV9K7t6xp4YwyLhLZMetnprmHGtHc8ykchSvgv73s",
  "key1": "odRPR6DCxtcnST9jE7BzvgCDsHzUeBt26bsqhvuEgKmVVH7XVWWRcdaMaNxv1hP3Egqzz2jjJ3nucK1omqSQBdK",
  "key2": "3xrZNP19qGA5DDAohbB7PsMzeo21mk31ZKawveqmW2n7Wf3ozpLrKWf2CYju4jSrJus3y3mj7LoAy73bSUHhmpMT",
  "key3": "3HQcLhQNBKqanReoWnXibgdSzt9PwSphMyE35VpoLDAeomxAihSDkGj3EWW15ztsTKCzdfBHj75m82nRVUxJEsMu",
  "key4": "5ypCqTxtCPD7sjY12jMr9nnDsjhJaPrTbAkQBSKnFyFeRo74TmKJA7RX1SLV9ocdD2iWcgQeXeFh7EQtqDxQdq3m",
  "key5": "cr6fYFQX4i81styw2BFGEpcCBuwqLKD1YrKb2XejEEQ3NANAeGzXvh4ULGukFE6QnV4NVeBG7oH2ZLLxGFMaieU",
  "key6": "5ZDR2hjRqTXgZrwA1CZo75oSt26bXQWvChzajveoeEfxZs4rj5XCY7Q1yD25QQQfYzpnBoK1BDSLzJC1yK9Gwafg",
  "key7": "2LuBWpkXMuJfXHfWoRLfo7sBtfQU3VhMwYCnGaBCWM56xf5Q4TTtDmqvmcyhVbBGAtgRQ5KzXqMcDuAAYDrgD5b",
  "key8": "2yGqEnqDRS5v37tBS2apJwFMxqLoWmTnkXNtTcYy7e1t8utzWfUxijnow2B88DzJZ1xgGCuxN9UcnE2E8FGeoCek",
  "key9": "3GFMV8w2D6NzzK6r5EemtVwT6p5nkUzJWebr1bmiQ4h6e1SSN4BqvkyTkQ3r6mwnZpL8AB2sP9L2ERkmDacEqKYH",
  "key10": "w8CFe4XmnWWknPLSuRzzKXwzZKhbru6SnBv1B5VS5Sf4wipFmd5igAUsNM748KxVdaM1GPLaHQrhcmSXdwnU5jJ",
  "key11": "3XMRUnCyWRYRA8yycRvLs4opuUg13UAYvAtuPGFvmyNV9cFPeqUtDTaZu22C8zUTc9MLpJa4p5xUJmTvtKrZU8qP",
  "key12": "55CFPGRP1ghjHnVzKvs4o171yuyBUxnWyWG36ofJWYzycBLSe34zcy3K8NqvMsYcadV5CMncuf2rZneteLAjfGV3",
  "key13": "4bKdoxGk2zc2jdQPjKnnvhy3knC8Psdr8Q3nB62Ley1uLDD6Us6GAJGhWZbHvJg9bT5T5R8v9Pbq9Cr1zr8YEjUr",
  "key14": "5kTSv9LVVGnmbwUxxdEg7ZVPcn3uoVwwtSjCN5UVpcGhvQ5M1EKbuk58kna3qgMaA2Go4RCCzfsxE5JWiBMqrxrk",
  "key15": "5e5ZotnuSzYRTHuCqXhV2Z3j3E3Sb1h6v6r1Cau4GhUwqn3N6jqpfExtx82aSPVpgVRy77ga9taFrmHPUykdBjpL",
  "key16": "5RMNHH1ikwyznudbz73zYAYiTNjaW3vogsZKmqK5N75SNejatD8qr65FFAyrjznnJ7xUUe9KqcVxvegP4pEdP8Tk",
  "key17": "2DsEptA6jm8Z5Ykz4jjf9p4QyurFm7kSWx38gG92iSevjvby9R7LG4ux53moaFnZxBzwLEC3WeQ6dKdtvtshNUVV",
  "key18": "3r4q1KQSQoi3D7XKwwGGoKPQet5YWQjAq9QjyPmdNnadA2MS5nvCt92WXCh9cb1u4ERr4uEj1SwY7x3wENR3EkzJ",
  "key19": "2ph45q1X5kruRcg8rEfGabvRPMB4Qe5m9oKL8imgzdxNyMKRYjjP9pKFaMsKRUnfHZBDcNqEeN4CGAcQp1YU9drP",
  "key20": "4rBSxbBB5MEuqd7NbyqzmQYNUHZ2US6KBmkC6UkTudY5Awet33r1GWu6ynpbou8fg7zVkzfzVJCZ2wiEQrQft6Aq",
  "key21": "3XmX7J51UAmEtr1CY11J1SdgVZkN9KbJBV4CmyFd3EAdgYd9B6ZWFAYNeEkMCdMJDzsRYdqYLV641v6YF14m1f2E",
  "key22": "3SoG6KLg4Ap8memjeuSYfcDyHZTfRQbMx7VSuBnkS2pJP6jwgEagoNdSReiAbDu3FC9WN4pyP4EUrrRqeTkgDGXh",
  "key23": "2htwNEAPx6YSuBWd7FTybHrGnu4Prp1mT7WguaQBqUwxYjnmjNRtGQhYoUzkKh7LQxw2SP8G6ZKBqJ1iuZV3FGAY",
  "key24": "27buMXF47nNySSjsSJxGTRSxbCKAY1AosYSvDEvnzqMzDP5GTQbsS6R5dShWLpSo9EnjjgSHPw1Ajkf6zCGeavi9",
  "key25": "61H6pmGegQEB4kE2U9JsiNrUawuXyReAehVbesi1VN89fEurqZfSdZ9nu7bMHPTvvMwXvE5CXo6jHDa7RzG1qZYJ",
  "key26": "2NMffKsgCWjb3YZhbQBKzqyaX1WmvHYT72Kx91yRtM1qui9oNLaqkqYyZLUVsCY26AiUEcqHTA47nPNqg7nHrc3q",
  "key27": "aEuR2ugRcjUpr68gGzULZaesyGTPQNL9ggCJcAKGHYSEsKXjALuXLGarKF9tfz4mvHiRiAzpUHug2tePhxLKXSn",
  "key28": "4nrUXrht9sktVEg9M4D9rtKMBzwLuSn4xoEjs23BCz9KNT9pcGWHTiKFauadvUarYQAiXNGRHT8JCUSoBxCqQKca",
  "key29": "3KUQw5CD5nUCh5aanAkJqwJrxE3KzwReZ4ZDM3LD5v8XqEycFqBwuCDcj61p5fKXGg6xZBTzVYtCkCWrgpExRsi3",
  "key30": "42mEYomaNKe3Za5zHQjREoQn4XS6fK5jLWgmnBZ1pwabHNiUZFL17qftfySTthyWCgd19X9ZeLraeb8MaMfzSF5d",
  "key31": "HR8oJPQwpe9SbYcwSCPGzbiYd9VLFnfnpqpuXX1WWbp2Tnc7W9wuqXJDGXGC7M1JSNHZFNPna9RES4Efg3gHEaF",
  "key32": "3LZNWLEN59qXMC54At6M4xgZVSWTsj2cUU81qdtEQdSGjp6LWBfZoSCxQAnfBUkXE9d1Z5GLxAwPN3h9pvwSusGp",
  "key33": "Pf6xuYaYqbLWQiK3TSGp4zLyxvDnVJoz4FWrof5ocoKyrUURZavE6273FMTBfpXPTENh9DGq9eMcg2sffL6GVgv",
  "key34": "5xQWLH4HkhPvzf3uH9Hb6xFBEPeURz9GJSXtQu8W6Mn7eQpGactAdEHmenWzEyme2v8sAbHgtzgoHKZNyKTUtmrj",
  "key35": "9oNF1WRqiFwUNnCnpmxjbszayeQ1mBdC7BsY82eqviqAhBptmzZT7u3Vkvv5EaJGzs5KA7fjCQq9fQ5AZEHhJPE",
  "key36": "4cdkBBywdNi8PMtCxsLAVWaAGaywd6bbE5roesgWHjbZmfjs576tpEUnyK2Zxg31qzxF78BvvvbiMkx3zS2FAo7f",
  "key37": "3kG2FQqawK8HtSy1uBnnZz9bUquwF8rt9AKKH6xmbzsQsL8EhfBfMviz6S1uMabMrFNzP4g4ABNY6Apa8z5MVEjG",
  "key38": "2An27dXKZHJYSFj3GavcVYAdXK5rqTFYy8wkYBLoJFiAJPoHsGNiFcywPU1C3t7AqcRiUacYv8fYtMifLfRa3CEx",
  "key39": "2GymmyGMmYqDPittfr5uhgiNA1UKsfWLJDRpAMY7UChHv2HVXadiNxNyMKFUVKRE7sqM341dZbsKpPrGWWN491ub",
  "key40": "4s7Xn7pB9hJHA917oemyMUe66KxiPZ1fxN14x3egRhcKLJKYyQvEvDgFDcqKu6sJ2wXpc7D4w2fPuEPxYkDFkNXN"
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
