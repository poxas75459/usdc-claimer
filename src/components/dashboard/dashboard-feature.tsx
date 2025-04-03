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
    "5cucKT2zJT6hx5CTNPYD38pinwgXDz8tx1GPLr3EFuShaJPYfWSyxJMrXntET8bLmseWkSWjvDTkSikzp4xAVXrF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qsFdsamuyN7ksQoPdY62B1biy5zHkXFnBb8T7dSby5ErMuVnCJdMv3rXiSKFhBjcHSQKhUDee6r3FbBN2jcUgga",
  "key1": "2d5Zcbj7fpheKF22Dy1boeB6kBkjS6CYDTFSBBE5hGx7jikGPbwseeAu9BZHbJphvjR2MJF8WKcUfwxLUxkGwrjy",
  "key2": "3q9xdAyRmZdiRSMH2fp5LauUpQzSqG17GVrB7yrqNhRperCqiZhjwTj5xPiYLVBUWnzFCeXJyGyH43HaFtxpKhLv",
  "key3": "61xjw8jSngHRuEP3RheBytL1cLxQgnXDAEX97hmHymEiioBcKpp7x9djB9LLAFZUPKYmkziJLv6LSXk71hV7bpGM",
  "key4": "2EHkfpjKJwYbWPMyaWeu1zAqmuSEpV9o7vg3GPim5ZN38peS5giyHDb3NN5QT7zraxTMAZTi9tb8aY2WYGudCCSL",
  "key5": "mWPMNCjiSJhw5GTTVktQ7nApdC2eDr9aWQtUUqsznSuxqUUimyCfq9YNntQchfEBt7DbrfgXsiDXeLgcjBAwJBv",
  "key6": "5uwESRE7Lzuwde5NQNaNsZjdMmSbr3tkhg6t7CdjPPCa8DxhjvLuU95n7x4Lsj3VgXd1Su1rVHhDmQJSXhHELCg7",
  "key7": "3yzewFxazvTSv8wE6t1rVZbN7CFnMZpiz9qiS6wqG87kASauVnVviRW25jnBQK6922KjSK1dfJdH6cjQGQAPgQNq",
  "key8": "5y42Cog8n5pLd1yUCbzpdeB7ZVzEGzExo3ob4pzDXYcKq3oMznkLYW1KqECXKRSrGHS6a39Rqsn9tTntVdLC66Lv",
  "key9": "397A3LjdC3sxqc4BF8nWfJySaL5yxWbvbCHPejXHLussHBR8MbrpFyHMMGEFRYNc8Wo3AH4X4JKSRT4FRPQgFJRu",
  "key10": "3uStkPgynAs4F2jsJrBJHNbsjUwpwwM4BGEVSo5QWnsH24a7Jd1v1HQi1JeNLDVvuqHeYnUNeGDAMCKNA4d3gkan",
  "key11": "Q1pSeZ6ZCvW4BDPCktrXp6nDabcDdbLxKMxE98beBPDDLLWcuqWdZF1S3Ayf2gZd7Uot71k8r2wXUyh7Nm7WNWT",
  "key12": "4FXRqhGz9ReAMBs4fqSTpxBBmb4sVPQY8F1fnF8iNDAHp91dKRbBeXd9Uef64RihMcuvkGyYqt7gpFMJA2GKvurm",
  "key13": "ookWVZ6JHjZwz8DszfA5dimNp7KBSvfn3kuBVYtfdjUXNUfvkeYzTEQ5yyM6L6vkgVY8y2wvzaDspfpfggetzNS",
  "key14": "3Bb2s5hU7DJEFzWFsTeQAwajPJUYZy9z9XMJLQQ3yBXPusTJsD6NrpMKgfC2bqLxrpHUdtTC1xMZnmDVUo4D9ty",
  "key15": "5kYb7qKBBsWdCVwHad3YqQX5MKHnfJYKZCXk2uordAZsMHvNvb4a395za1MBW7afqDdWu3J4pTKyavLaEuPLR4oZ",
  "key16": "5M62g2bCVbU6XEQRQJZ97PWzbwYifzhSDcZU6M7ysFyQDfvAzLLYfNxhY2hEhkxNmxH4MA1yP4MUMdLt6G3UQMYr",
  "key17": "4SUjN2vdJbHasZ25YkA2uKQFRxJyfd4SdVrGimLg55oZ3A5K25woYEqCcWtBYXybANvMsXWmEbA4s5ckjqSgV8VF",
  "key18": "5xiZKaqa1raBAyin222BrGiwYZH1py8w7P3DkcTpFo5JgXpydkZtr7eQeE8RV3gJY2HB6ANy8PF4SJQvMSEcUMFi",
  "key19": "2QiqjqoRs4fWUHpmL3n7vkj7ozvagzNxen5puzwK9oRTfTE3aSR1zBN1ecbYfkkzzxhjZW3ZXnub3kW8tjyZvxfL",
  "key20": "bLeEvbyAexYy6w28ty4gyQBG7hhSLXqmvwsNVzuk6dp4YpJK4wuUQ7Ldv3jR4fDAsPWxuUJjoMcRN52XBwzgYGV",
  "key21": "5QqrHUEYCFHiy5Z5M9fZYHTQRw3mwaSYMKcVnmGyzWkEkBir17BC1BuLxDmcMzkeUE6ZB6mCUMArLNP7PoAVRqrx",
  "key22": "5xgSVW5KFwZQdmDKCdLiaAuRPkRYLx9voQabcaSWnbzzknYFYKtxs8ApPfpdZXMBuzdqR7nM5r27sjBaXwEWQWct",
  "key23": "4PGCyKETGSb4of8U3BukZhcewg6kMtDjLkSXKs64uC1ScYnRmXsSqiipndKdgWwZSmeV6izvvgzcyHvkJxZA3iZs",
  "key24": "597MBNFa1DRFXnPJBK5tEkd2jA1B9njXHUhZExH6u6RtdbByjvVphwQKKkcjt982qddaSJ18HDGC3jiZQZ2cZA3w",
  "key25": "5vd7pq3JczoeVXJm8LDDg18526ceZcx841xMo9MTnE8HX4KFPMg68ZUVRyLEPuhs4JuDjiF6CvnkVNfgsu8igKGH",
  "key26": "46Nx1U5E6aKHYk8iTs9sjhQq3tnhCdVeAmSfiF9NpScDLqwBpjkQQ34Qu1i5XSayBhDPVay8hVSkKoqWxZGrsrru",
  "key27": "4ba3BsWAUEkXEZnNX5dEdQDge8k5TQu66nZcPzNKUhSNJd99TYrioRnMNG2gUaKnAfiJidnkcbpvxbqwWVGxHzve",
  "key28": "31t9Rjjc8AnwZkFZ31NakzbP6XiZbKVBFdpsFLGsqzD4gx3zHBUHXrdrVPR7CqjyFUYrqqJ1HUJLMyJ27teouYoR",
  "key29": "4Prsenxi7k5uqrcrtg5E7SuqMkmJBgZvK75HvUULzvsFZpfbUxPDuphZ6ui385Ps3v8prD6GDXFZvwjR6LF1dA6G",
  "key30": "385uYKBeCKhGdY5XaDkpUjUL96FXyyYwZ53REckD7yV3nQecpH9GC6Jib9L5ZdBQ3sswg5aHzjeKCJZWSAPJ5Tiq",
  "key31": "2frAov8QZnxN8MKjiTGgbBLkQHZdGEFZoDt57sUmvTcRaSBuEXWqkzh95CKrJ9s82nTDtCnW1cTFtFc84HX86cGT",
  "key32": "yxpGPpVt7HsVCL2y1LCVnpjNNzHQHnwi73fbv7DPPBmHwEqmji4yk5dGgfkt2Wqvm3eDTuT1FiNAqb6wYTe4DjQ",
  "key33": "4HNmaoH272TDgNTZPJNZuQc4vaLjL9YNCN3aDneVppwi8TtaXdPjcM7jhJzWy72yZAK3f87xnNupEY9jhMu1Famv",
  "key34": "4aXT9h2mqypVfY2NMa6JSBd9APjXeUDAuX2JgC1LwShmcoNLSqkT9r6fSrAiVLNgQEmvr1YktMLnHXFgjMTdB4kq",
  "key35": "3YjdBhpeJWqHEaCR68R4TVKjzrQV1qaC7MNEGRnz3od6RDNeHxZQQFR2CVMs6mf3ywogkqGXEujUgKCoTo7Bnako",
  "key36": "PRA9WEMxjmFkoS4SkcxznQaKWc2QKZdPT7WXt6YFYEAwyduCepjGi1HBusLkSUULr6SyENZBQuc5wcvxpb1u1Zi",
  "key37": "4nmVrpLC4TCRiFhDC77RPA9SZpVYGa2qvY2fcCztTQ9u69XJvX5gRS6xYgLgoaHmsYBUnfrnUn3fhm2yizpT5BKn",
  "key38": "5e9Q44wHBEVF9kcEvin8UvJfGbqckL2MbbxWgmsj6i6Sk1WxU4Fv4dmdteo6ETjc7k4KDtCiPLvi2sxEJMaWxoLx",
  "key39": "3XVvm4FrwEEmaEBjo1EWddpKzQ76NSrELKLafkCwWm22eY2J7ve46z6pZhWhDFnKVM8dJvKUR6SvYRCcxvEnpunV",
  "key40": "5YTNYYeP9GrLbq98FJK4WrWJ323waX8UJn1NwFCmNuQY89hS6PpF1u5RXCbJMF6d71khGiDsjMQHztygjW8nt5JM"
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
