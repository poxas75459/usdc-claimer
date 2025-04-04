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
    "4UArY1XLEnoSAimAnfCdwvNkXmFvWbFjgDyytKTfvpNfJNBw8SbLiMZazasXSwd3RMmGkFiLnRLYeD1V9spxiPbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44S8ALAVHf9cCzZZJUryV25UGshrB5dm3XJ1tNGLMajDMnWQJdsWV1vdW8gXT1h8WoRqSXE8SN77yTAPCXUGYVsn",
  "key1": "5UTsDcw9EtdyoLoKGPXyT14KoBokhTDvggQh41CPVvaYgBU5ackPMjc2rRAFgTEZEUj9PRAhUThYAwaYbmkaMyWb",
  "key2": "4GJmMvsnCtPfHai3pydymtNSgQRBciMGLexLZt7MeMQCgiSUHqtpLgS6ALzaQDJ7nraPmqyRmRbK4RZbr4RQUeQR",
  "key3": "XGRKtAznpcSN4xErxDJaJKCQdJzvmKGosRChUebn1UjRCHJLkMTWgjKMb6siB5sKRbz1oE4v38wECjAPsX3LquX",
  "key4": "2dkGqTKCoj65U1t22CMg5yxsBxy1QLVdErNtwvP4jrZfpbTqF6KRkqjAAaegZDpcf7fLQD1VQ4czskAUBo35Y2oj",
  "key5": "37w937GTibuQYrqzTXHDAXCBLoHELbcU2HRhnmAeZ81ibhRkxCN3TyJpvt2KHMXyzUsJNQ5Pp6hNCjbZGFyUrDru",
  "key6": "2xdo6gNUHcoxnNYENzTm1PikyYb6fReFFyAs9DHPJ6KpZCgYFbfEtD5rcaM1HMQ9sW4m5U3pqLLbiE3x49mg4jwi",
  "key7": "5txp96Wn5ryLLGPxzGxckfQwADpmRdnsNt94XU3iuBAVs7tyiBKKV6QDjkBZQZyTVGM9sQoTAWNT1Y7vh3scoD5Q",
  "key8": "52Z71RxFB4byR8K8UGvgBZk1QdFBu1qz85xVdvqi3CoB6sSzFDj8qwF2VKr5UYCVsZzYXB743dV5QQheMErCKV23",
  "key9": "5MdPR8yghaoSiT99C3YorSC2q5KcwJtBZ8KZnhJep7X58k5UkAC7ZvTYDQuetdRKzjPg16D6GhDHbQGEQTTFavEM",
  "key10": "2Tsfjy7zaroJUFjTXyaE9QL5VLus28urDfRFuoLpgwhGGXeNxpaaehNguKfLSYrpFDVrr2LQnEZpAoyYSayG1i29",
  "key11": "67RbwVcLU1nZcZZ8VMDcnUcJ5wpxAhnSUkzszisuNVie9LFEZs23VnDc3V8hotTX9rJUkf7scZ7rJVbxXqVCzkiv",
  "key12": "2NBy3Nn1hg1xfc5xi6SJdqefWZooubrRYiGkdUm1fDiDnZTGSM1E7JFKRrJP4LM5oXrJBHvfi7LAjU8nkubPXxMg",
  "key13": "5iUqCTL4BftjMH3uqLfhmPSDXkvBZFtTmWSUhHiQxUzVzQavS5ENi5z5nL6jEC8hRSWfhFiv33GN3t1aTZPRxmMp",
  "key14": "38pTJ8yD1kubnG9AA76CxWFovZdJce7gPqAHa4T612TqbYdZY4m7B3qXvKJLk9eBoHKGUM8KCxgccJZVStV833cd",
  "key15": "3bN3Lb89P3HGb7pxBHzv99NTim3ENG86ShthiZ9VLpvNYCeKfYxb9pwhgn93ABaWQKxdHDcXSpA7EDvc5cpSZR86",
  "key16": "3tfNe6SVnNFPeCbX2P1TDvQQTqFCPEXXA2J4aKHSxeJQPGfuFEyWWQJDApvbaHf6vDffjprHMxSCtBemyDVb5Y9T",
  "key17": "CmU822BYmGRtem5cJwCpvHH6x4fHp9dT8mDVYw9YQbum8y2nzFDQrWkDy4oRMNwUTTSVrBpyopfTA7haaDYcvVZ",
  "key18": "2WXE2hEGmjejqtXP8Vkdak1bXPjze9K14xvJySuWhkj86cTtM3uRnKvkJ1NSSw5Pkt7Md8QdxRqgws4TY2gEbhYG",
  "key19": "2Msyfqf2TZJ4HQXRFAyV3BBGEQCuvz2YfbLvctWmHbD8B1a59SAH5aQ9uEZxykrUL1jKrifsvgVDf6LktSvsHFBB",
  "key20": "3r3rtuSMam1RRy9ySsEjsKtmV7mW6jTa9pL3UvUVSJ5V5wrvQK6kCY3j3iJRA3Y5JQ1nZGSG5Pp3ekFTFQFavDis",
  "key21": "4CV6bsihFeaxrHU6eMvUJu4GJf7qHRPeMFudrguzXU58K81NGasPowSTS7jXSGDarLW7WPX2iAcbwAmFGjPiCsUr",
  "key22": "62twSefLZtPTozBnUuv3UHSw8tCkGyPQxhUqS6AoKaDZ2HicHDBimq7e7UGz9UZbZjmjApxnQYHTpugNdXpfpGei",
  "key23": "3B2KHkS6nMDf6o7ujWnri4KVzzovYY9B6ce7ePnZDZPQ9jC4gRR9GXnfFng9HBPqjQVbxpaeoGjWmYYT8DrwMq8F",
  "key24": "5H5JfArN69D2YuL8wHTMYo9ALhUZBA3jUz6L9FtiJX1Qijvo7RXQhsRZmPpmJ4t2QCMvaUZrBUpkQq6hEK8BtEnM",
  "key25": "2nrVUGRKga3dQzmdjGMWWEr5H5E6ixkSz5sqf1Vv1rEzM1Er29a4x2kQVJT9MseiAtbVCsQmkFGCLV7qJuyqABtU",
  "key26": "2zN4d8rvEUFziBGURM8nmkX2K6851kwwbxmun2WWFZgw2jTUehyDaAHHq4zoDTPrT9fezGFGptFrH6wNuzjnXrhj",
  "key27": "2xBn7hLC9BBeB7mdc6AUuHq5xvsUGfbvuUjWNscJirzSHoPq8vAaApXu4746PEmgobs3ePxHQmxUem3HbwUPt4JH",
  "key28": "5hz9Vp1DM7BEfrR7HSqfjWyVn9MG726APe2yKXAvTpxSbDwswALodsq7Rzmg2bS1wgR4KgCZ2cBQNELAJhGdYUzd",
  "key29": "3RbKKRVpao4AvNKJjhUicRzt8cbUL4BLzEtR7kj7c9ucq5qwwY3dR6utwH5WDYHzpveWiNBnfHZnWHvBcB6egk3g",
  "key30": "5YbqLJ8BZs4DKFe5TBChn4U8HrmXob75XqNRZSNXnZrR8jd5G69VpnqceAtA1stiCrL9SbWriG4w9YH968wRjVJ6",
  "key31": "3HkYoNPUYbiZBLT3g4TEy1Ldn4Hfxa8hcdnDBa2UkS7DCrhZxVPsF6N7ZacZM6YhqukAvzZqMrRNjGRNHdMDHvtV",
  "key32": "5HbbrA2JojbMTc3TLJG3yDxVXYYHhStzwhMi944MvdMQixrPrL88Pmvn5gHZWXzyASCeqbm9ozFLFQMEtqTX9PUN",
  "key33": "3MqduXuhG8KvwWc1CGKNjNxsUBPuN8dd4VDK68b7dRqm86UkLyHCiKUCJxgjQgAGyuqncRYv1qs2B3XCLtqqjPN2",
  "key34": "3K2AtRcroG9cKqJreySQqNbJhAfHED33RWQGf9aqSpMdmphHgRQ1wBe9GcELiYnjpTQrFRW2TQJYdvLKC8fcHCKs",
  "key35": "3ZZbQ2NopmE6jwRvzwUc4m8QDMU1FXVsEtenkiauAM2EGUZUZ8uh3WPKpcVNJoeF7z3SuTwoR5b7hxYsFFpUVCcM",
  "key36": "4tP77UphgVDWheiPFS4Y5AAjotN72D8sY2YRfBysPSBxJ8tSqqB4EzoDRaEUhrMcrLjho7db7vwRDPvHHTnuax46",
  "key37": "2RPRm73TUnCFcVgdzvHK9Btfdvqm9DM51UUjRgNfbFFPS7nHXDd85oSUyGrjijXM4Tfyp99YXu63trbbwf2yt7a2"
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
