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
    "3xUqekPB9GHPRoxMFM1H8rMjYzKt6LYjEE5tDyqQboEWoknkra6VcnRbTouruhLP8nTMERfn6yPGvYrW68VSApkq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AKGvMbC5xQed9RLsMpomYCUepew3uskWC4Z6vAbyU7X3ifZn7mJwWZ23sruVcrz42KH3DezVCNVcoRwJRLFjkwh",
  "key1": "3MNW4mTCqaTAFoLryHmVDeUC2guZRU59zPS2KaxB9vdhwCNXUWCLu6HMRGwgEcRTHpqpQQ8etrGqk7ic9sgXfSY2",
  "key2": "7ur8VkQXXSLnzNrqPsKjoeKp6wXiWpeUQ3SYEuNdxpAaguo7ngspXofmHpn6iuL6UHz6i8kCdbHhfQRNCWs9A9k",
  "key3": "4VxQB3b8swFwC5sQGzzXNKNPmdaT1mn9DxzoYBwZb4d9LGTp6BGStJhQqEgndhtUhpfPBfz1xSVy9eEwriB6E24R",
  "key4": "2N1jjxKXfoBznKbCvwELa1mv6t9Mtaz2ZhiWQ1JCzDYw7HLxC1xNvE9zSQEmzzeJ2cfasnMLsbtzpLeSFqUBCzwK",
  "key5": "24C8mv9CReRQQVzshNgQejqNqXDATUXR5F1qhcjgUGweeJD9hq769eSnKnj2J5TYiunbkLyzUk9Z3bWbjQyvuSBn",
  "key6": "4xcBs8WRHfYFoRX9tWiav5gsGNRXQVAtYR8Xa649s5n354XefPbV8qQfsrBoMAcw5j7RN769BEZNUWPMkUHxKHs7",
  "key7": "5brjfBxF1F5ZF3SvsoXgGMhh8D8ymcqZsovE5Qh3hegZVvrsa5bCcvzuamiXtQsZUAuEUiLP1gEf9S5BxJrYe3fo",
  "key8": "5PcP5VtvWNheEZH1LaLhACHVGNr8rRzZKrkd11SycwychQXfMdqiWcJqT9TKZ3kYDt2DXkWcbjXmXeHqXtks2nKv",
  "key9": "4BCyk28BQ7rQA9u8MvQ32d7zQknTM6xZo7ffeUhei6PYkAtiGqkFroCtFUrJpJSYQFcvfH5GvP8hNsTwPxrAfBuW",
  "key10": "4J1zbZnMigeGKi4tx3bP7iKTrguf5EXZ4SfM4gftnu3X9hdhX2kRHEF2FkbZzFaApw8SU9NaMZmpc6X9FbVMdEXc",
  "key11": "3HMp1pKZ7yM3UjHnRt9ye2YmbFtYcQKVyxrTe8Def9KqFofuFQwMShDuAHx7GBhHtEVEvZaQtE4RsbQxZVfaHhUK",
  "key12": "rhYrr2ybjNnFscqjoqoWCujhs5ReWxAYvX6pbUZcotuw5msbgMMDBMyyse3SkGCFxWtDQ2Wh6DGSEH4YeKUruxK",
  "key13": "2HQss7kaZ21GbAog6MMrGqkmCRsKLJa6vKWwY6CvYLcuJQJRVNCcBoSxNNYn4jaTBuHv6F98CYtWUd4NUBoWAgCR",
  "key14": "gn3ZtjZCDEa22LcfJBTV1KfJCi4sRyxiUDZ8aQL2B8hZvN8yv8cyigjxKgS6sgukBHYRu8S42QWCiMmXNXdnq8Y",
  "key15": "4hm7srMzx5RsXYDzfhBD1kgFG5cUeHBoDomo6YoXe3nUuorE2d74EU4wTGiDdUFJ5SXYsujysNQMA3CEWjeEmHwx",
  "key16": "5YpGzAAH6EissgqxkAv7y1BzfAYz5yhLq4LhnjX3kw6ieZqK923T4DdHv28nAzJ7bmS7Y1smcGUyuPAzB2vioZB8",
  "key17": "4ZfuvvAQpnrtaN6Vw6xZ2HC44oeZTiiwrqZotF9KFUrUfBTZPAekRxUPJoqSoe7eVgaX67EX92ouMyb23jH38u9X",
  "key18": "4egrLxcUSwWrmMBypaeSfWBavKawpbA2VcRmRtTCBCYNr52NQJGTCk9jwVM7KeJM16HpNNm8uBXXrtNZdM43wdRS",
  "key19": "3m2r31pkLhMSmWTTavHsXK4gWGVFafivZofoAwtmneNX6KGvHr7StkxRGm3kQzQFaoD3J2cVNpTiXy3GNW5ZUnSk",
  "key20": "5n97eQeYPh9aJuAzYc9t4gRE1A1Dwygda4UTHtQ3A2dcVRLLFW2Dahf93924ioCVqk7cDHhG4DLC3VZGBduZvoFa",
  "key21": "4YoPFVtWPnoyzLuSipXinW4t1rQsSFwCUaXZy579mBkYJdCCyLtuSqZSn96nEnXSh3hr5paV4Zj1teLWG4rXSyk9",
  "key22": "4BuEEmCTXGg3dccRYw3i2F4vrGRaA1WW9TARDTc8CPQiLTNx3RbU5jHPsKTArPhXrtKTA56V2nNob73eNhhtqDsc",
  "key23": "pB8DhhdZQ2gxE7J4SD3mPSeR386zqVUTAPL8JV4KuwZHYoG5diGLJjLzYAnRCixXEw2HVbhjhiMoFzDgiMkQyQo",
  "key24": "pzSaVtkdbSHgTfZiW68AVnrdBV7ckH4nmd58QWy8ugW5sqQ94Zz3G7dDxqW2CfwgFhRGnyhDPUH3dKWuFrYH22S",
  "key25": "5ADUq5RzJrLCcoapRCDqyfuTUUq5DseLvb3KBwe2aUwDoGRvsr5UMoRzpoYgNutBb6c2WC2vSqP5EfH4NHZwEx6J",
  "key26": "3KFnodoDk6DF9SJjUxLqsK3V5uo1YBmvsMtP5n729ZckvvXmhW6bo1gJTmxiTnREEHdHoXq2WPc9H4q6XjdnfMG2",
  "key27": "4vDmaVsjT8y1CUiLuHeYnPaUJLNfZYabkvPWeEN4fwnCAmvZtsH8kPDzLrHKgmskEEuLqK2FJyZ3bwRrSjyUU4eM"
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
