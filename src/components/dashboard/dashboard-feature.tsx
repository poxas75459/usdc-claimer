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
    "5mLqW9KXMcxjKpt19akbJM2ZHa77Db27E5kjkMLnZEcee1PwpxGgyTyxBKSvdXcSrRgJ7MQUGJyWJdbyJJQpGVzj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sbtbZJ68s1Tg58KBpN9K43pMjmGB2cMZCcrCSYP2oirJWXb1mNJRYnLzgqnZmaZpJBvk6PvtW4nQigA7viEXNem",
  "key1": "46geKM3pKN5FGUbh9QxW68hb2psumCtmW5wxL8kv9KoEbGU5ijYUjnoU16WL6VyPB5NQz2jY4MCjqCw6GDBpANUn",
  "key2": "2jdkcp4ZDvPiY2y2StEeafeADh7YkGjia2a55SoGn1bzppQTb5tXVaD8o8RV1RnziZ9magXeF9bHD8oCHbj1c9wA",
  "key3": "37AzpkRpUFikULg2QEnW43sECjQ8FMfQiNgjtVEyraxh3fuT5JoEmKHtW5Fpyv9pWCbDPdGEXVt68uJ75oeLQjKj",
  "key4": "5rHs6LEJCceJyM1C665S3KLvLLkHetuFCtthckB6RGtr6jr6g7Zidet4wPSEchWpXKrgWkbuCHaYfDtruJpbj9qa",
  "key5": "39DFyixcCvEk6JXtpEVFhgMiieNhMdAXmRRYMNZ4NLF8hHE6rxZFdZiuqEmsd93cDdfrUtgwTGtu3osKz7rCbne2",
  "key6": "3qFFNcuKmeRhX7qvEZh4YdJYWAVKZJ2bJGzzVmJKLjV6tYnEYGjpiNvX79KuWo8pD57N9GgBAdFdXi4YL4PLk52K",
  "key7": "5so4DFdg6tT1Vas7VoGKMLBszUUPdEpiiveWKE9rzgxpoome4kMXGG3DJfGgMraojMmHdR4BT5vFZs3sRDwTgNbn",
  "key8": "4ZEEZA1kDTQc96o93RChZbW3T8A8yg5THDEbaP9a3MHGaLu8TzKfCDEPqA4caeQWoKXphKwohE2ds2FrLf77nVMZ",
  "key9": "67DEJD5AV1GjUHsLoLKbY5fE5CA87VRgYPSFRcRgMcNNrNM7rM5BnCx8BXbYV8HdiHbE2dYmDpXqwNj9CisRCLm2",
  "key10": "4zy49FAaDLjg6bu78e67pn8uahgJkFjeGkTi59tgVUUBRmY9EDJ6b56NG4kqhe3RAvLc9Sdj8oC4MKDGrGsbpFRv",
  "key11": "29wMGVpHWg7oCBn4h47Y4WDRvPWwADvSWpFQ2ZLB325Zv13nXN2LquEanXnydiuitPe5otxFBe8ern3tEDnUAPSc",
  "key12": "3nBmJBcjXfDdpXLZcSM5HAxgQWjsd6VPmD6m5Lrbnbg2dkFDmcJAURvHTxo7gHwTxxKQa9SBP7rEYMmc5df5j5xk",
  "key13": "2iD4dpaF6J8fwBEy76RpKYXLEAzdYPCN3Q3s68tsRPzivLRXCTFjGMaGtrZZfycVsQ3MzU6TvPRonH2WRwSDEqSz",
  "key14": "34Enikhm4Jd2MQv583U3ZMgcpXS3oF5vRtkn5Dr668QTXdTNBhdZwn2CsBbyoELxeRJKwvRaavueR5mnZpUWEWLJ",
  "key15": "2K8ZZuCP2fUFVidGvpmz4pzADepsvpk8EjKTjy5S2jQkbXQMzypEqn3YL2mbbTpHbhsT9DdN5WmLRL14i7UteMvB",
  "key16": "NVe5YaswhjnGrUrSeS7zEnWFHkAnvtsK6Z6vBKqXQ4yjFTi6gbn7PMjSYWsxPxdHFqAnzsCXAnM1bCvPNPfC3qa",
  "key17": "2Yh5F1kgtess7ym2EwQ4g3GEQdUkW7tNn5f2Ny9hpPyAs1WCFSskhMXVgVTxDmic6ukTt8Sw3Ztk9DESwRfgFN5r",
  "key18": "4Z2oH8nS2LC5rskPACyZuzudMgcimxKYmCR7mJsWVdRq8qzw7eVM2SpAW5TjYHKZC43qRZdpJSy4MRXftXfyBpzj",
  "key19": "RtVR4sEmnTt4t2Diyqat9LTCeJi9xhhU79gMy8Kx4Y1FTCZ9Zc2HdgAps9baYhcpVV4q3paiAJLR8WDThpqEZGK",
  "key20": "2RVKr1yUtT4AEhJcneDWvukHm4GLfrDrxCK92v6Aq78GzCgkeohXNjz6QRbEXknx2tm6RyiUXRtbo4kpp5FvSEwJ",
  "key21": "4jLJpxPHjBZMJC7Tq9bC3Qywm4xFza9wbD5MnsGvAK5ydRChn5ix6CnnbfwjtbQS8hd57xyvSi4hdy2ZoTLmSYhF",
  "key22": "b5TNiggKQTR4Yk6Xeu7tiM8B9wp3HfLcvwpRa9Wekn2oQZEiPNurWyzDhKnYHou16hWKxQNKTJ3bP7Q4ZodUizP",
  "key23": "4yRiCAR3khjVY553Bw3JLGtYEExbvArwQiCuq6845AomNShoQ98deLhcVLg6iMhHBTdV9eAM21BFQA9WdHHbpWKq",
  "key24": "4U5jhDSr47vn4F8jk5EYJeQmNgCbTCCzb1q28kTCu1Nj9e9H8CNbJ6iUngiLmZYsCNhpyWHDEz5cM1DnTxf89JTw",
  "key25": "5KCeRsn36B5AcpLMPhfy83CVKAvnV8muMHUDMPW6f742wwYoLC8QbChxcxUjxDBBmEbSiax8DgmzDH7zK4BSnB7G",
  "key26": "36P1CyjixyLFsTNPp1o1WTpMby1tNFH3aCvPvWZpEhXbkiW9m7puBXqJ6LVcPcMMx6Tmwo7TXUXS9EDf6nNQYyQ",
  "key27": "pBuRrAacWpSDQURGxQGyQdLCLYg17sk1RwmJHzW7NNjUnFjc5buUQVs1c1f42n1jzqLz6wEqmNajW4hW4Svmkse",
  "key28": "5cBAFuDTPb4wt2RkeSMswyPCvtmTPoZueYwDtkXAEFs3LbGGHiCxKtJyGzSuXbNEatzZZH7ZPe9m1d9vAuZf9fYa",
  "key29": "4anfycCJidoFUNEJCCAJqgodnC38bfCDmFTSSqJvatgbbhiY1iLG9PX7DEPQ43hwyg1HkYYkNJvvHjLn2eNwu887",
  "key30": "LqZCrRKzJUxhpU7sXXvsG93PWkXA5rcwkuaeAi4n3qD3qQPSQW2ujA2p9wGnYBRrXyLmxu9dt42FEotXq3vjMSx",
  "key31": "E4w5MdGXuG558AfTZ79AFEdCm3hVvKvvhAocT7j4vgtaPdiNrBbvcTaMxDFEJsLLTiEwbL4azPaDavUtWRCHW3x",
  "key32": "4W8rejkRML3RHLVSTdtzTGkHjJe3FNRzriGWmsuV63ZUPR3QD8tMVjAQ1LXkBsBtE3UChQeqVpu39yM5p22FqSsf",
  "key33": "5herjjvLxBDucMJmB561rYDy8VTLWMUm5GZnHYfPVjKoBN4NMHC5tCG6J52QBrJtkWsJN3XxqaZ63uabnVViY7cy",
  "key34": "CLQWnapXSZsdXeJ4Dfb6yQLCB6CECoH52nABgCTqcAZpqKEP6UqCs2QiyiPCRpHwhpygPV9CPpKU4qJaz98wqsW",
  "key35": "28uG3x7kV78pMAspRoheEEZfJAjQy7q156T8DGRHP85WfuhJFZCQqFccG4c1AvxQL3oYqUyvfsNwtkhp6ckat4b7",
  "key36": "3Ex5k4kcrxuEQq3BLcHycfs4yKJkpxysVtjgKsMVDZ3txa3jjWhpaqSJKhJyRcG8z4BTdfX2es7wpkhy6vU6uxG",
  "key37": "3vYZ2vqitgEw9cPNfULAr5MjuJe1HBo7XUZbnhhJTzbuPdZJbTMjvdhN7dJ9f4awQpWzFPjXUm6XBN4CQnGLBzaz",
  "key38": "5pHj2mTw4dy6TtsBq8RPKUmtbrf8fuK4boJ6GeWKipcUajMSwgdT6MEAWzKKJf28R43JLkSrYrTTRPFz6G57TowK",
  "key39": "33fdr7d8eGovMDDYdKESuBZBKTXZwAb4iHLCAuDoNfi32C3yteNAQPBgSMb9isrAHW6bZdE2Qc6yTQhGKYUMb3Po",
  "key40": "4mAZv7ydjBfX3Rg6sTZxRC3QSHBwM1KFdP8bzR9X3SyL52vsytJK97tGvqh9N1Tyh8aYpKsjGRNSrpcoUkn5dc4Y",
  "key41": "j4PS7KCwpdYgtCwBRbCrQaE5nBF6Uc5A3yfSiwLSP3gwrsgKfuHNrv6byxRX5XYrg9HXCK9r3hm5VQgoUNj7jGb",
  "key42": "34qaxuiDM7dgBFo3eUvDT466tNkwypLbrk2USPGNg8uLktNL4yP9oFMKb62hbMwPjPtwTsWsLbxf7EpUNG7iB6BP"
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
