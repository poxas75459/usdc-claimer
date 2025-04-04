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
    "4Hdm9f7ZvXQvTfEXwTZhTYGY9TQymgkbJiFaKzCL9JENoxd9Zcxfv49PWZiaY76ENvCy5cs2wUGCXzyWiDBEnZtB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RS5pfNLWsc7hfmY5hhdfMP5cCFxSFTGYE17NAQMpCtvXHY5MuQq1eJQMSSACPttXZbEihsY4N7hcf4ryycgSQMk",
  "key1": "4qXpzTqvMMETVPcDZaiNQkhzFpqnZhD5QvgfseTVUMPset8irGkGKEXHQ7uG2oBvLsUF9cpeoLnxKjQoGmaxs7Gr",
  "key2": "4L6jxCdUrBL9YTJ4tKjWJ32sQYoDgoHtqe68sBV98CK3yYh3GM1B8r9ae3nnwPdgxRhH27M4cT16CVGRbxMoz7Hp",
  "key3": "2CdjR7E8uvgHaAL1AEC6YYWPE8x6bf1DmmHhvxaeRxApzGpnS7y3xgQMdztctffaVC9PRPkhydpd9EXALy97Dtcq",
  "key4": "5DL8QCqLWoDneHNcYQxQjbJgqeAhJEdGEcpnUL4kePGkN8xDWD73nWNRyiL7Jvg4jLQYEfja1kAgy1xPb9zQmQn1",
  "key5": "2HXaax8aB9ENBPmKrFAuifT7K4yGx1NjBYcrVUEyVS2BFn8UooD5NQpeaqVYModXPfyyZyD8aFYpszSpeMSLgBa4",
  "key6": "FnxDdHzVtExcvV7aqhNjYRx9h9bGAk2CquqrbBkacFfRcv7mezKx1xUnFYSDEDpw9rTn2QMZZETSwz92SoCQyty",
  "key7": "3h8amAuYY8vmEfxgX1fZH2mFuMZoWvgSQuY2C66aFyCuM4t3DBUXfiGSWRbDt3jneNjLaSPuXxaVvUcdkfM4wS78",
  "key8": "fxX811UdLTdzSHSkQdkdoVMjACu5ZXCV7znP8Y1adSC31w8hvtAgKVS2ATcVGLHh8a72pfRanpB1jEQC5eSmniV",
  "key9": "4VqTDiqExWahxftN4BUkN6aEjaUZXGMpvfcQwmGoxeph3KyFsBEscw1jpcb6TPxickKPQC1nhFvz4cHcHJ5NXPLk",
  "key10": "ZuAxoXHZAuEY1xvussPyh4KMCWV2bvR8GJy5NPtZwrVgKd4hwm5QHtFbNrc2R5jktggsotMmvi11zQZki1ZeeTJ",
  "key11": "5L9Y8k4ADHhRRwAsvciTm6e3r5VFQAixx1Trr87wtmB8c8ynTHpvvu1Ps8eWyz6nnHoLY1M8AwsC2fKtFBAZZYc3",
  "key12": "2WMRSfMB4Sc5jw95KVwnq8caou3ToEGFnmGZjQkGKkdNvLjQqBPB5ggobJhEZPFc5CR6kQLhLpG8nqQKn5dy96Cy",
  "key13": "4MzexXqh7sLDZkQuCunEG9wyHGsqUKWsYTfunZte75FCbNr6kERKWYhnyb5Y4XiuKBwZsU6aHrtb8tZ1yFCFMBqL",
  "key14": "4aiuvBgsA6rhqvKbqvkzgzLsRAWc2k3notsm33RgPYgJv2M5o1aMEE47iUApMWC18HQAhTwFUZJ365YnatMed99",
  "key15": "2hdVd4BjZEkKGLTs3xNtM1Ybru5E1LD6ZRmGEMZRMBKwbyG81Zh3LducjQQvpGLNPTdaJR16N2u3yWP88bbeE8A",
  "key16": "3ew6uhE7eXHVTAnjoyhqnerjSmK8j2BTnSETr8UmpdFxS3K2Wj6Bv8i19zTvjGoaZveHw7dFmFiPghkdNTZ7okaM",
  "key17": "2fHDznfncVf15Fq5GCUPBpCDmtUSjnjfntQwZUzNB339ri65EgaLy6FvwiUVMFQhUmZZUnKQFhoyR7taAwoxAdo2",
  "key18": "4we3AVYSwR37f4GPPNLErdYs5DN9tCXgiXWT9NhTAjKfP34kFZ6oogpP48faW6TPnLhMvmcdJuUSgRXowuLMd4q5",
  "key19": "44n5xufomzAqTwR5L4A5tffvkdEMD6R3vb6Fwme7kLDzkgz4xvpPamXnYxmaqb3mWtfpyRGHYviZXbGYAHEAscww",
  "key20": "5JHXbQHUfSqUTGR1ZKFwxwAWzNa3AgbVUnc6tLY4X32SDnXHhQCCCVgbn8KWGaBjcg4Jdwzrv3LY8q8rYsPLQta3",
  "key21": "2BPCKjqYKfWSwZFXhbzkMjbDKN7WsHn7TDw2UkVkZEWPHz5y2BagUaUbTFaHCaFMsQfCPEzu2R4GsoFpChpHM4eZ",
  "key22": "3CnaDzuBUhvw95nmmHhcg5kh7coU1BZwvdwQijzoUTvs99K2ni5cxf1SFXLKKBcoHXyqyznWb5BsDGMDKUFVvSH4",
  "key23": "2eHyTK3K9Vygyo5xXBxPEazca83hk1v5ot9cxwPQYf8Y8hdG9PVSH5E4vAD3tHChXujxiEBotmvg3whYWkb4rzUK",
  "key24": "2bYQRbqKzvTxwj1cjMbHARKs6C4zG6wJb1R5qAKtkA7XwnX1oXHDspJnfZAdC8X3td17JbJaUwiT9zun6YyKxfz3",
  "key25": "32vtNtNcZDYbK5tPA55Nk9Mk12bormPSg8AXLegz1bP2SoWMEsk8YtqYUXNgLmbXhakrgwUyvxQgjhYCgwjYiZN8",
  "key26": "3k59EXfdwBcUGYr4tewvwidhkVxF2zUTjz5NXF89UXr4b27ggKTrS46RBL5WcUem7AT3TMtrktnvEqf25Xjh3fC5",
  "key27": "3iwB44rWfnhH8PfAZKL7ZNoydtJb5H3LP4N8KzK72LZGUgiqL9v5QQRFwdsWGv5BUqS1aY8HWJoGC3ZwxmZZZiqs",
  "key28": "JSs1ArZYB6731araFqd6kPZru4NQkAsxAZTGnFQTTz3qqxZHW3fsVEu48RFcRnr8FN2PtvuWHVhWUHhpXwcHjeF",
  "key29": "21DScw2JyDwgvh1ZBhu5JBLA6FkE5jyTnDs4VKhESwWMoBk8fPqTiVEfafqWLxtnocQ2HaKpTMmCRkEGMNzYNkVz",
  "key30": "4n7NaaPYGCbCax8A3H3pdWP6LaBK7AmJKKpWPFUThWLfXSwFHZkxNwY1MdqB2uw6XK1FNbYE3SqLUvD4WuLDnV3F",
  "key31": "23nspeGbuZzG8jXuNerJxRMa6t9vLdsGNaWfXnzV5j46ZPvZA3NftxBv5tPG6BiXnYQg2vXi6ypcSXm6svRXFBRc",
  "key32": "2jKuAnUAawbXge7iyKti3m35Dkoc3PZ9kwD64hwG4KAaLPUtVbxHsAw7x5zrLpczNuQw5hSQJ5FBjYXD4vf7CQTC",
  "key33": "5GTSC9ZEesNJQVkgPgKdb7VmydtmgoBceipyCBxybkdYfurt1dSoBzD2rNY3zQb9SHVAeM1KxmyoLF2NtLXphZH4",
  "key34": "5eTa2bSBhnCJhJW3Zx79FWapkPhJqKVndMjVGQ8dKAwRKpvYd2pH3pevb4G8ZUepWtv2HbszZNo8T6P7yLeSunkK",
  "key35": "5dVUZ2GYamo47cwUthVsK3jeNzRK1qG96Hgsxb4uNzc7KKSnmKCFwHPZyjzdjFp9YwiJNb1gg8vahghPmwvSdMRr",
  "key36": "2mRHybNrVA4QXD7qdrrh2bPNzrwDbjefUs7KpjdeTGnLeY8N2YM2tJBf32HyDtgfkDk4CwXq41PSgcyN4e2MVM1b",
  "key37": "2AEiQnQRsbYnTrfHq5eHySujH7z8rKqux1DobSNAANE6anab3bF4LGpL5hsc1kNJy5toaYzViB8UeQtigNGWswWq",
  "key38": "UyRbb8i3fLXewTXNFajtxtJQLyukPRvGjBvwuCrAfvQLUBQ24nm5TGsD17MMGYU38Lod9naJ8a851GcqAvZpGGo",
  "key39": "5MVuE9DgLUZ4LoBH4YmoZGDZqUDJzuDXrbp44T6U4EBpdmkQ9YZi8m5pT8uWrcvuWSLyU7tPAo8pB6Xqyech8Fdb",
  "key40": "bXGSapjsLYxd8qPnNksJ9eBapEdf4rUCJqaTjJ3JBNNbNNfm9fzgwxaCTSKAzHCXPzAepRBkK1JaxzNdeUpLzVD",
  "key41": "F6dq19DAtT3VnD9hh87AYNFBNovC5khtnXAmZgF2JGPKSqTkKGZUF37Ngy4ZKVM6J86jv7kC1VCsFJc2CLRg3mq",
  "key42": "5XvR99hZXXqHyeGTfVKZeFXA6PxrfvUW6Jwrz4qYMwURipRhodGcegTVYk7htjzr12EbDVCmvxRaF84oCHvNrW6k",
  "key43": "6rL74kbx3Kwm1uMQgvdbwsfusRXYmJRbeAt5cCnjpcVmQqJFGZVwPxbiWuigB1Howoy5guWEWpdKUaU8YMa6pGZ",
  "key44": "38kJrVEgsoEHRzj786nzxTt3avbZu22WSmL94cTGaXghHYfxuXrsxK1FoJNY65ddRAZVWZ1mMxTjkGc2vT2mBRmb",
  "key45": "3YVLTutUXZiBhiTpL4W9kpMkAX2T6d4feaSF1hXYQZDXeJEP1qqBU76M8wSox5MdF968Z426q8KJ4Qt8UU7dqB1t",
  "key46": "3Ux9uKZKadQ5uwBpNKvukw92DmiHLEBePWLKjo1p4veWGKMfxv5f8ZkhV3JEts13y7vh9cevVH4CXqD6z6yWoUfR"
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
