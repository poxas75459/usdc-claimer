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
    "3vN75odfBTTpVoVKFHpS7Vzxv6Vudg1RwHATmC8VV5s5hqcfybLdaFAgnP7LNuyS7F7ZTtFPDrQ5y3sWNzLUknp6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rdcz93BzcP4rCZVwGFquKvGCJsqxRXH8MnWmgmd68tkPjczpdpbnM2FiWYwcpm5LNzioxFNJ1qXxD1bkxxCJXai",
  "key1": "RB3CBedvegAufDkBNLZAZRvFprXrMd9YwegDcpKNjSsEpjSyABFzXAEc3mYFDuQyhAx1fsTfipFEDsxD9ZV4UYP",
  "key2": "5K46BSkWxqJrKAwQSQARG9ecoSckVS8nyKzq9kGirBSPderE42W33Ascb5UpoN3kUhhKQqz2nb4CNDZfsGeCqTzJ",
  "key3": "4MLhJYUKjbtBKDqqB2YSoNPeH8rURG93ZFrM94qiN9aq5GpxYNn3f8LXkjbVsH7CYNA1ctcHbdkrR1rqq15bcD7t",
  "key4": "CjhGBybtoiW3sbCDPwMrshMhKytATSnLMWNFT1NFYRuneYhsAkpjD5tYtv1gBPDboLoKLKWLfGdJ2eV21RqRPs8",
  "key5": "ZZ6eHBvzPK7cg9WvZYfPNj1wnn4gPbMxgoPgt8FMXAeUjZkBCDgUL9ChYYNyxEqXaYameJ24JMw7HdEHmRujd1h",
  "key6": "LNXPMpnzeiDt3MbV26wFy2B8FiM4ACpe9aPCvB5YcMn4RfhBT13Bb7d9Aoe85yJqF7WsfmftE4sZ3nwe8vAj1pG",
  "key7": "3mL89Hwtts2KGsc1ktTJt7xaoJdeMcp12N4LGULS2SEdUmfRZ9MK63J3FbMoizGmCzWuSHNyZJHgEqZWkRkuHSQm",
  "key8": "2ot1iwtENoXasJEYFNsxkQYDJtT17nWHKrqkWT8F1nRLLYUYkZQT3tGQx4X7z2vxjMnfSG3ZuUt8RG1xQ1xzEcw8",
  "key9": "5qfBowAnqkKRXM8VaJePs6xmK4oLyrxgFJyT47LnYq1fC38dVSL7EQhcF4QDxoJUHo2dYbpj9rXCey9RcZ8q496J",
  "key10": "3WYNgCshoS4BLuHN56PaBZhvXQKUmsrm2KmtD3dNiLF3ThgePpuVYN2yNM1fcBeFKts5uxHisC23N4eJxjcm8HWB",
  "key11": "61obixPBWN7XTyEJjfF22NYwiSoywAYtwukVSPSZpiRCBqMu6nxHHpTDEy9nDGVicwEBM7RkBegEuEde9JpndQBv",
  "key12": "2bGCdKysDXfdt9PJLEEf3CcVPY8JrqC6py98T7vgD9FqHeZMdtxn9GxHx6repxSuUAaJE6UTGxH6JSQ18988p8pm",
  "key13": "319TdKqtV2jo13D2rmEKDTdAKHBc2AUwAsfRKLFnkXxjmbxvv22ip6WWRsvSawtmfMRV25ztVYw9PJipN6fH9dUe",
  "key14": "zU4YmZ4LFfCiFHwLY6ppiAJr52tePrN9eWUYpVJmH3KKx1fuF7d15uBK7xabrsjfxLPZ7VsJVYFbMUAnwR2n4oA",
  "key15": "25J1Gm87U1s8SEfkNQpbzcHJqengKkwAk5Xsz6XhPz4PsbViERPzJzYx12yZTewZcap5mMNeuCG8666rsZfSPy6A",
  "key16": "48xCna738uCJ9CTUMSQKjDbdrymwE4qsQHcDxzEvyzVdFua9ZXkqzRX2E4bwtQxCUd1Z98WDSTVy1dBFqE863fgn",
  "key17": "2ku7zaoQEFpVaSrfuVxNsYkQqSaMy8YcTCbkGo49hnPZtqHwwatKNQayZEcYvBkRhzUBr26CABh65iQzSezmrJ8k",
  "key18": "Ffn8QvA7rW9R1WpiE4WnXTbvvYpdSS1zProeezLV68Lus8WVfCtk65ocJATfEWtJPGHSNhWWAZ4sYceAdaRhfGc",
  "key19": "5F64QZGD6SqxJ4wr45tetYXXaeCRo1nAHMfu9DAJZPfaDpyRuoRK3mbrzDjS1thM1gYLsmcrdaSo23K87oW4mQNp",
  "key20": "5xem6sV1fceY2VvETSLMyPYQcm1dZm9xebFKcdpUTrk9wSRsqvrnqBRWuHpr68ZZKZkEKCsykR4fPtBLoM25wtEA",
  "key21": "5AmmJqBE2fj6dtBRwfSYzNHVTbj7JosFKQ8x5E7wicnU4mQRREord7Y72V2bVKnaE7MQW9JyDf7t3dm7HCNR7iLq",
  "key22": "5ibRyjk72aBT5fGrt75uLWBfUZFFFbeBpaoqpDBYWtzd7nvyqFBRe8U3vcTnQKjMsoSdiEn1e12RQKNza4xxJGtd",
  "key23": "2KHjvrzq3dWiuCALufvGa3ERzkSjbZE1Nn9YxZL6rTAnUUf4mWhGaqtd4B61ub5VUTu7uDYMQRvvXZqSqx6MrZnD",
  "key24": "4f8C4vxNQmGaXAMuQ6S7iTCTXiTYauU6VP3K7QxeEL7eodwMa6StBjZt2YmhPYscopPb8AmgqgwCbhhMBqnGAto3",
  "key25": "63YvovrJk4xt1MRC68jTMmUWCmaqLwVFpDtj9VctAMCUqQJ2JXFWqtYuGWVwwUNAHVREYM3XMdCnszzJJDTYRaRV",
  "key26": "1jjfNgRZpDMRSncxr4med7vMF8B4DiSLg7qSy9H4EyKUzMPmEXhscWPssgtb3zKAszr3kGTJHqY9q94LKns1v9E",
  "key27": "v4Zcn2txjiNsFfs7iRNDsPE4Wo9r8teQMqNxa85H1uMmQMVhtzgaHBqFC8LE6Yf5ZfVvfkhVoEbZHneY7t5S847",
  "key28": "2gMTVudAiJf2r8vqRkdNKg8Yuv8KdpFfGhGRccH8VcvYv2iFquyMdpgcNytjkZgTCDE1TU4hyGuMfYz1AWBkGDT9",
  "key29": "37xa3qy4u3mkjkWW2uAEXntnv3z7Ndrn2uLjnVxH5FvgCjABVywZ1iRc8FxQGNpUcStw7b1LB5n66dZT8VFNcQuK",
  "key30": "2K2V418rrVpJF7ke5mDXVAdm9zGDAe5FUT3nhnrXTuyABea1PwH1kevCRBCL994FbwkejSGbC3jJxS5QNwvgFS7J",
  "key31": "3mwDvTLpuuakxvZByE2JoK2D6fU7XVqNsK4CKtfXNzV91scEu81dcEfT6b5K3f3zLk7CFYEXDUKCRoLUbWsrH2Q3",
  "key32": "4rvq78xgyJUqg4scoCMhcLp2bmmeHeeauDETq2fpUrvbFZ1vhvPLP1hnRuLtocHKABipE8DU48T4uhTo9jtDA2NY",
  "key33": "7xknEzijjG3mxxAH4mjTPqZ43sDsHmrvFraHjGsChF5nTzRq16GTuAKJk5UbpXh5bfxuttfH4jtrnRsjRrrE1ob",
  "key34": "3nuTSZAnS4T5MJDTyfPU42Cx12Rtz2NcSXgkkPdw9PsBfag7k7LF95ZCxduZ5pFr5jyhtvweDg9b1RwP3wNGDc3A",
  "key35": "gQGgEhsUoM6eAcTZdBFChJqnxBbA8w2Jn54VZaLDCi7tTQJQCts7A7mdz8WENPMjWWrpYPd9bfWSsojpHfYaCr5",
  "key36": "4Xi1JkpBv2x96ReefRfcke5pMAcdDNRC69TPjVHkT8Xc8gZYKp4M9KVLwX7nXxo1yaMRoAV1pZeQsaCYzLBZxTDj",
  "key37": "35pH1EXd7vMVP9WoZKUxhuKPTL2ymEwGB58GrGcHDtBaVwVhKgSeJqhzrDSh6eyUw7ZWQbUW9KZEsALYb8LDXXYV",
  "key38": "5qiYVdX4zQ51nfUgMSDF2pnHa3X7oUt8Acfb9wcA2jfZau4CcaaXfZTu82WPSKfTuQm4Bn2bLTYneur6L1x79vjt",
  "key39": "38D4RfhjsNHr7SgTXCMcBPqSHVT6a1NpByCGiD8tzynV6h2RNmkCZ3cuAYmqJ7TbT8EyUcWcS8Ro2VmQbqoCucku",
  "key40": "44SgYX61GrYZqJVback2JMxgo1tAaHqEAwQkq3znneNpyw8QQMhcPhrsavdkXShahCYAw2rrSVGP6mrQLwzgMf1r",
  "key41": "2V2QeeidTuYxN1kceM3rpDS5oZ65Ng44L1wz3Hk91hdmMFUuy9fNwMj9diDs5wyeDL2TmXAaY5y9XiXiMdhd7mPm",
  "key42": "2PZeRiFQw1pAN7T848TtK4CUW8d6RG6k9ZqgD3cLZwWpZ35bKT1fY6KT1AGqohhFk4KXCxPkcqCo3FdQqkT5bNfG",
  "key43": "iyukVhoepWxRodTjtFUxaDP4svHBkHJsJYrrUy5DDkjyhEquu7ehN3VA66YzWd7zWkQ14CPNJv6Kt2JnwsmM9QX",
  "key44": "kuS5GdGswaQiLrRX377WvJbDg3118ZxM7UikjgALCBvkgm4RpSfSYmUCm9pANry2ywNekbeoGqykRrLxYFC3SP1",
  "key45": "2L7ThvQsunBCUGEP8KNPvVJRwJZUH8Ha7VvwimqeUMB1WFNuafYFjkSVq5MrvJGErRzjqC5PLoArWYoQUhqxZPXB",
  "key46": "2AEshfTcFJ4KmLZ4FVWj4aiNbXxK4toa1hzJv2LEFJVU3LpsezMqBpXZD5omwXZR5o6x6bMwB3NQvafzCgkSxMJu",
  "key47": "2Qv358NxH8T8ULJii4JnSY5iFcouZSJZVQjTzHxyA3CRznWXtSWQmkJZ4ot54skTm6nCtcv8whmWiATC9etMwyn2",
  "key48": "BiyMaQduxiXyAmTjfUyqRbXuBCLnvjrZ1oNWKVKrUtZ76imgj49AWpt3gnCiKLE8J9AEqPLkod3E5Q4bLJXfGzq"
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
