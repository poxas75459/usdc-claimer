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
    "3aeTRbEUDqfp2wc3pYDJfKyJ3ctcTxN5HbiwftavUwBVo9ebuNAwDxbAfGEm53wfWgTdBxQf6RFgUhUu8SVdhfgN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AZzULidR6aCZ2rEZhnDzWb1kN2x2HrKt9HKFJnGHgmSjZqDi1jkvqrPs8CJ4aqjYdL2VznrAe9GM4KzT1HhpcVZ",
  "key1": "5NELhQup48K2wX5zFwnkdirH7SpaAVgQivN5LAX2b5o7Qy4j358385jRT8Mn1zGwGWcxmFsYZLPUR76KKFv4kSia",
  "key2": "hCVcCAz11dmLe5vsnKHhdsur3GqQ8UK4WkfdfnvcvfAz6yd5U7WjxmBokDtrFBFrj1rGCfwKFfEo8uXJwTbspwr",
  "key3": "5UWSD25onekprcSQSmaapZu1N48Gty33PuKTR5SZobpUzbocdj8MGk75BhCKWFiK7n8u9u2ddXzhURThvG9wjvpq",
  "key4": "5RfdNyFw9y9NthHkQDchTor7fhpRZXJnZ71L2tKkWYp2hTBDiJ6yAHN9kuXdRXXeE5RBfPkNwEMiXszc9a5P8MNZ",
  "key5": "4SVFbWRVTZUHYDAzfEgmpa4XBC3Lk4seSqXJSVxkirFQbwQU4GvegoVKpzz4QQpTjtbyf5WyD2gXYtDjsqmNaXe8",
  "key6": "49fTNgS32FyYPuqroDbn2mLQbPQZAsysi9m7MThgUWRStygECPQQkK1BX1eQrXLgaM3vTUVAK9ptwgZbGbT9uAsm",
  "key7": "4xUD2fK3aBMifkvLc3wVeMNUrsYU9Bg7PZH9AUreUzDm7eC4oKkm7JV5Lox9VH7Vd7Fx4AP5ZQEpUzX3oo1oW3UD",
  "key8": "38rF5WFeLXF5F95peobmuYSCiDiEf6NGadWvCXwTH7KaN1BPU76Sr1Xeo8wovqWch5c27MSmFhesMoE8zZHMs7Qb",
  "key9": "3hZqQoQUBXhJAj2ji1UJfJGD81mB6tHTS66bwyAUeaY7WDRhHdcJurkUUN1SfyohDSnRqojy7j7Ph5ZcK6n9yZTD",
  "key10": "54X8xzqE3AJs6THbTSkHcMnicbCNuM2DHc4dTsUfCmmTE71AzSy15zf1ZJKQLZiW6hr9RLhUDzbdNhVptkQ4aaUo",
  "key11": "5ShThMPDjr2DpYQQFZwcpzAuCFo454hzwtk57rGm3ohnHc6CqATjwKMJq8pTSUtfQjmBsk7BrgU1CJjzZpMqWKVj",
  "key12": "4zypJDctKT2o3a1F1ngFEooXifTpdfM3sQsmTc1MeUNBpX2WkX9qCrifhhHsijwQBgKi2w7CdBuFGU8pZ9YEe8UN",
  "key13": "5ZrnZWdWt9uY3XNfex8Z6rKKgDkv7hGwBQk4KyVN2PvYpVwHhbxQDQkF11SQFLPX7P2iLUMuoUypkWfKEJJe3eXD",
  "key14": "3ifuLLAmnhn7T8Pj1HuiEWzdDgb8SV6LMUCbTfxKnPRbxFKqMJqL73Se2Y3yvWrV3d9gnCEU6U5xW9N3TKqT4iwH",
  "key15": "3Nfdj3zjG9zNAxGNhexrrFwLH8BXjigR2LMXBTnDRqcQ3b4H8cFVrd3epY7GzLa96GnAZ4gXD7SweDbWATUufdpz",
  "key16": "2fNh5gSP4ktmwYNdWjWE7Yrmu3KfQUEJTU2K5oaACRBgGzxVqLRXjwYq58kTkKyywaUZMg4ZSYMt8ds5VmmMkD6J",
  "key17": "5p8kEhNKcG4oueVNQxeV31rR56iJBSQFffQ5MF9nt4U22KsBGPfeinarhUF7SKk9cNE4TWGtxpqkCUrkBvjVY4ou",
  "key18": "KjXwD7zqQMETkPf7vLn3cy52Pgwvh4jtwVmsF32fVFPQEZqC56p8wkaMTD7sAiHJS5Mr4yAkGVgK5eYGv11mKM8",
  "key19": "5zWES2YTfDYpM71EvsWY4rBmpAgbXeeC7HsYULqaVWU7Q96ppUsVoY3PTB4mq2iLHhy1cokbnCAj57GtBGq1LYkQ",
  "key20": "33u7gdQq8dTYK362BiZFFJDHJgW7eyGr2xrQo3jVdLbpeDC459aipZNqwcCHfiBQoMVW8jzQxo9xqwSRb79M4o73",
  "key21": "2bRVcrxAPDX6YDxa934z5qJy4M2yRQ1o2Tjfg6pSJo3decyZhLz4D2msSFZiEQKvWZgAp9Q7D3zvEWDNvHsqRTx1",
  "key22": "1jf4kPZcJJcb4LNUVWS9xUUwEAM3x1grNP4ytCfESseTso6Uf999TC49NvNWwFoc1JHrhMkRbjzynEqukj44HPy",
  "key23": "3xko9odAvHjnGnoNfgjjJmPrg6uDAiQ81CtrBf74tmqHd5CAb63CgHJF1L1UThMmb2brkFLM2EtV7zZ1dLLHXZvT",
  "key24": "34YjXDEes1wyJTK2sYpWUYVzLnEzQMzXsuvxUujDLMMKwQE4xwCxr1dm9kdVjbY5BHzuYSEmeLNrUHbjTiibXMAL",
  "key25": "446EGT37p6X6pcXpg2723cNAgWqoTvqJXkZycqijEnJBzxyzP1MeMnw26o7VpGJeyFmjQvCEF2HhNYE95TnpV6BF",
  "key26": "24SYyT8PXCBGvD8fTSD158DWJpcuszj1gNgbgbbiTAEoByLJCiHGz1jm1vrBNFZvaUSft7M19Dgh5YinivNmBRe4",
  "key27": "2LdyQVcoAsaKmY5jb8PdnZyjnaHpWa8nVDbU5znszQN2MctJ23i1n6qP8nJCbaNyUxowrooDa7Xvwo3rXaUSKeTa",
  "key28": "5X7GPEn45mLEoo4LuzvCYSeFdEYuq4BJNHPKfh237RfMngdR82JviZWZe4uKLHgH3qoDvixUrxcAZRduYdkDtVPZ",
  "key29": "2Ysm3fWHTxB6wYwLS4sJqfm7zWPbWPYMYm8X87ZuiiKoyTeYK3nxddb1vYiSPETyrCfP55szYhPChgDYJdJQYoYx",
  "key30": "5oZLD27UzLx5kGJ3SK1jdFPVZkcXKb2Ay59uTxNVhcuRn9sQYL6q9UApJKSvafjByoN8JxFhPhorJ83Tctqr9KEe",
  "key31": "4VW6wEvPrjfkZFU66c57AcYiS3hXpDpxQ1vVtb7hPJpYetWfweaXBcXYYCn8PwzhJUi7GxHDkkR2vSuARYwwbmHe",
  "key32": "3Xcd6JuQEtuCtVYTw9jkaRcbQzPCivWrmYkac82myTxBevPLxrbqfbxeiBYTEBZY6WN843UsuVdbwFypNLYjsWDY",
  "key33": "PWUzNAfTwFCLh9M2sWLV25UjN67US6LbYb48WAQbdC68p5yW12tnz5inpWvfCkznMxuzeEjkWRmgDA1awPkQVN6",
  "key34": "6jbPSKRzx1mdmtFkRBhznZa1e9L7mqQAQJHFKeMpZ4byR5vEfNGB4hAe9t8zxREFEnw9owQyYjh5WPLeMKwndGW",
  "key35": "3EWV88SBcJk8K63MgzbRheozm2WMgnBSe73NoBmrakLMi5zyod1n17ZysN8tCCWpB7fhd2gtvXUMjnydJbuHa5hG",
  "key36": "3zi7rUqoQ5W6KwbzaKVcqRsWtViLXoAXwnZBRRESDpifjJ62nCo9gfCEc3qr2JvyUaT6Ns6yCtsNpcyV3VfhqfQh",
  "key37": "34XwVozm32LntijzeHBiPaSXEP2uhNYwEbNqp3rKj6CMfwpqAVPAArrQCpDZX9pxa9MTTfqhwPoaMdd9FLzNzgXn",
  "key38": "31k5z4zpj5nbN132wM4b2SJYT69T9q4D9ySjtwDNQYy3NanMsDPfi4A4wxbeQjeTCuBCrbvZ1PMZ6HaJmX8Ga8ie"
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
