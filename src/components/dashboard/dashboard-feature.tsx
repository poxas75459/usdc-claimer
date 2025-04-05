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
    "4MJ75WpaV2okRA6LbqYM5XHemsQGxRHPnrdgJ8KDho98uyqe7k3RrSnTMeb8aCDLm1P7uEBQUQGUtmoENUGBzfj5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "374t98sK1yQHcpwUWR1G3H5gXZ37AJqGx1NcLdgUQiRiyi4dFVX9zM4ZFPddmqf3tGUs1yMMjB2UGzkFeGcJpUji",
  "key1": "3hMV7AxyPyMfGSbwTSiB71bYR1bqp9KFCftkkcYLCnRUnAzYyedKriRSZ46h4GTaiZCkVJXntPwr78gj4TTjswh6",
  "key2": "49EAoH8bqHBc5tLNwqLANqivQo32ytwmwt4j5GKEQN3F75YuFsffQMUmcwGu2TjX6KoE7hSinHz3ewAMxed6vxta",
  "key3": "3JDwz6CW41yiNWDAaT77huQozED1fZaYZDfu7c2C4pmFTNURWMEt3nm4rR9MUw8r8hTPGjzsJQS2zYRxnrn2LfyW",
  "key4": "3B7UBccPH9QntCLzsgBYPiD3pCvjZfUvowgBBuCzRywCHyt6yCpvLBgSJDxB1R2vk5YGyvQtoAf4E46uDfb7kSFp",
  "key5": "4GyrXjds4pgnbCgM2bMNj5K7ZuFgZ8HqBeFM1vHypkBEWJBMPdbygc83apv9LNnF4pijczP6yjhW2AHeiDBPSsxK",
  "key6": "2x7dU8NeQSRk13iAx9bxSwG2eUcUTBuVNedaCH9nbfeidhgKc7oyfHrzDY8CxPWr7tuXUk5DPwGQe8bD8e66ooEB",
  "key7": "238LBvXXaQS4PXwgutF2rBiqB6tizBBVareE63HWXx9dcFUGyceyMn3Z9kqAqvhjExYADJFVS6uiEBDBEKLKz6zw",
  "key8": "5VwM2aCA31VfnyDthfYmK9wGdeGqcPHkeEmMamwBj1UZqmkdqRVGh86L6kjMch6S1gwzzcaoCXewSmoNF2zRy9P",
  "key9": "ZTXCfAp2rLuS3hnmbf9HECCZ2zv1GccTUxLyEGa6yJM61oXFGBkro26AyX4J9foCD7YpTv2eASTM4dDaJCUFLo8",
  "key10": "Hejeb3jqsfSV3ZEkGD43qKqgTJ6KztHFV4bqezrK9c3EiY44odZjTBYsoqh7WYvAMVoBkthLwZt5xXHQimNPzXX",
  "key11": "2THrpz4iRQ5aQLmnXUy4bqM25B5UJWgiamMsmWq43PRrxdWxBgFJqHb3USMXGk8D2m4r9KCAGXTHhcS5g5wYdxKi",
  "key12": "3xFf6T5VT2thGivgeDsd3zfLCLiEaRqXoseXitVT7BrqT8eonNb6z1eiDukrsn8KLJKf6XJcEbSJywafc2hLdZF6",
  "key13": "ppMaLhoAcVGbYi9xEPK8rxcKPhunytvuAszrchYj39pCqZmzCc6Vc6EAnYJpm7ENctdrwQJ5H5EgbH9RJPo4ChP",
  "key14": "5jtvLLpY9o9jLknhmUpTSStyHA3kTkQkocbBGxxzGNSpH55W9fQrCcHLbujJUtg8JUMBAymHs8ikMqr26UQCpcpY",
  "key15": "4C1saD1D8yD5doEVfRxBxpD7auuXxsoapcaB85wgtPrVMMdTpHmqsXrtcGE8V52Gp5sCx8JoMp1kuR2rC6SYbMuR",
  "key16": "2rgzTSg6pT492NQ2XpF7px5FgFXacyT66TDk7et6AfggMrWF9kjaJUMwK8GVxQkTpAzf2hNufJiNk9z7tYJbvjWS",
  "key17": "4dPN7RWLqSzZngbdBZeFXJfNuLk39tdVSGjEkkNea9RGVCq3855xsdPM5doJjxDquuaHPLpokgKZ7p8wuj3pe3xx",
  "key18": "44r5ZWETAHNxqfQgsgyUAuwd1KfCNJ9oi5rMNcDnWTs6N9kNSTrvdQ48oFmHANsBgXBeQ2vxeNXPUyvEujn9kcnU",
  "key19": "hQfFQ7BR6xQrgBFFqkose7jmPMNWzwxzee4WnZSQju57hNHs59xW8iWJstUapHHyVMcco9NND4W1mm44hrHdYZw",
  "key20": "5KSCzii7TgGV2Uiro4pSCdZtn1bkqRd9zQD4QhvVdykEKaT3N4uU2X7LJEy3xEze3dzneybFsub4ejd5CMNsFc88",
  "key21": "4MaAsEJ4JJGFTYwYfpmTFZWyJ7pz4MxnuEmgqF43KDoENa7W8zvyv9uhsyK4p6KKBNWPZhCjvY86aRGYunF3158j",
  "key22": "3iaPEoZvvRkk1HQQLpe7Qwr6oT9hWqqhoczdt7zYMR41MBYHjC8MtvuDHsskwHDEoVLzmkKY4zVf1S5xmQpmue9b",
  "key23": "2NXRDTEdfiTi7mK55n9jWY7dmKkumBYB9csRUiMpBd5WsR8Durh4XCgVLK9r1szWGRG5oMPa4CtPYurEWJx19Tga",
  "key24": "ejK1kj9tv5uHmhRvCD7Q9RSmZ5GLAGpAm7tjEXAwhJPrVfUyFE2KNj9oLB3gFGGLz6bN8UfYQmuU2KhgBoGijgp",
  "key25": "3AKksWETm2GQdmtQQD5rdTorspSfDrbnpWevMLXJDGJrns2R8UoNF2QQsefPhrQuGSMj5DVh5PWnUH5KoP1X4DGE",
  "key26": "y6XydbVaDWDnAHCFNjM4eTe5jK4mnJXt5XqoRuYiDqQBaiNsisztmyNv13ahaW94CWzyVoeJP5MrAiMTPEy9Pj8",
  "key27": "34dpLpCWXc8chrDA6Qrqr7rUGBsrMd1n2cLUD5B2R5jNeA5PNTgWxFSRbRxiCraXc1o32m4tKMAbEscArpUL9DTd",
  "key28": "4hXKhtboSh9cHWGdhQoEgf8gvZecTst6Jdu4t2ed8WNntT8UqM85oqpk5TdLuunYUggG7ZzzSzX7yvtFakhg97tg"
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
