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
    "53gNvWJUiS3dYvJcKQ7Yid7KQDcShLswWv6whKkvjwsbyvNXeh7hq2U17TgECtDe6non8uCVEEurKcSBkbJo82d3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qtPmkSBmdkEY9K89s4JsQCJpDLpHGsyQtbi8K8oS2BEhQjz7WSkoatGNnSj4ddhtqb2QxtxbxcXKZjJ3Hgh6Wdo",
  "key1": "Y6pvzeimdZ9mq8nXT9BdCeBSdRJQ1rSxE8Yvt755ajooviFhA6aY5yndEY9xdafGtyhB4EUtGYg4tu5RvbgmMaS",
  "key2": "5rGjQS7YDQnk85TXsxrMGpPTy1tQCwtJMT4shUEUjty3MTzfTaFs4HxgunjZxyimxweEsS5L9pCMJeKrxyksK9es",
  "key3": "JnV3pzVxKpPBYTKRQ7JM64Jdzc7itBrtJF1iF2BuRfYAvK6tSyY4rpubqca53VY1uDymPW321e8FffomiL2vuGF",
  "key4": "53BK944amkRqkRNYx44puV6MnLdkBeD7a1NTsrWstaLXBDrC4Za8vxN7CQBRo7WXopLwGq7w2oBQtu35Lt2nmYfJ",
  "key5": "4jVtG6jQKDBLsXq6JHmnxhtbkdLq5upQsD4evdupS8wcDtQV1XVDngqYgANiMoXtc1jawx2cSBvdRGcA2SiwpqAh",
  "key6": "5Y39JNm4az8m2jxT8X8Zjm8rExZugVKDEtZhwr71P9JoKnZa1rqEk8jzLQd4r2C9HdajqPjbdC5BD1LZKEGZh6z9",
  "key7": "23oJ6aibJvF2sLdd3Q3UNeNmek1ZQJnxcaaNxkuwEEVKStEogBfTrw5XXfb5Y7RFtGjS6H45rU84dxTP8uVvouJ6",
  "key8": "5Hq8XnndH47WFro2haDMNeVignPjiL4whn9aq2Tx2z948VC2EVZEYPz3DthnkE71zQ9tt8xpPhMCnSCtjVmDWB21",
  "key9": "3pjUiyEvBUp28WC1rRBvqmurQ2UqKLSmWAu3dttmBpF5Ah3hUd3mJYw7eWQ4tiKTVPMcSxLXKAgKJmL3e99LuDHR",
  "key10": "2GiYKyKjot5Mi8RZBXLxDX5yRZhyoyLnNGRMprgVMMyBTgNQrz131JbWbDr3FnG1W9tpkS51Mmm5B9wa4ArUqU5Y",
  "key11": "2VYMgRwJNS96YsatUkZwqHWQAsByYzhjsPKHr1ue62JwEXryBP8vhbizFJVTy5GJsCWvt9H4SNBswEZ6WYCmoGtf",
  "key12": "5ThHKHcZP1bDyjPFwpGxzQzpjwfmZEgJ1Y3B6iPWbHYnCpgmW96gPTS3kJ72aaoYikr5J3YNKmMhjAf6DtcYRfXS",
  "key13": "31cqhKUSH1NXBu4GXnXnYDUbnDBfyzDaRLbqCxrcPfcW7EKnRxH7fLSqbgT6RVMjQCebak6nHSGVi5Cgt9vqHwFh",
  "key14": "4MDHcgFcDf1YgPohMUq8rwUAWauwPScFk2CLyQ6Pdo1C1dV7yUefsLp5UHVyS3DvHJCUopSGZXv81rnw9WXdKrJW",
  "key15": "5ULYziohKv9rdQjVPDmhPG3NJBKNQSfqCrH2kDCZvykdJFy7PsEycgCEUexsJNycRSnDZgaxXGUdkvfzoB6ADPFw",
  "key16": "4KTgtuaM8yCrkquvrcKC1ZRztWfcWC8pQmn19RrJP1PMZ434sdVCgwe8Qzd3T7rktrgoYQQFQgrkpQMJsLYxKRaZ",
  "key17": "5XWiLma5MrdZQ6fTwVwSVHDKiKPHVnoK4K8sF1hKFy7sgnn3V4b8K5PXKF8MSB74QQbB6QphbwzwMgB7BGkRMvYm",
  "key18": "5yfThepXqJcsZS4jVFwGFkg1T9sbWLjeEEWFDzck4h9EyX59Brit79YVa61yzPvbcvkxKcmEQSEjMDmStvEuS61",
  "key19": "3i6MzpK5fssZFJssytRqzwCEkaqF7ixmZB9zuzQoC3m5dkzfjk2rqXm2xNebj1Boxb7LgGnTghY9EEaK9BvyCeB2",
  "key20": "2gbk16g3LTDtGWNkpVvj5Q5VpDsWWVWZs9b3NkwC6wNtmQHE7iEcuNAQoZrXw8uLzAvPqTAVCnTFCtH6YTvkjUZL",
  "key21": "UBCkq5xXrdrPqAtQbbfuvw7UchzHppmZHKfxa7pPCaHiZK49kh38byCV482rsypXQWW4Qqp6gnya1R2Th97fnBL",
  "key22": "K5BWBCaE1MEwnCXgLdjAgg5G6akgZdDtFiYDGDnpUHd3sc8vn1tgD3SghkXvrfhKorVWxE39PKju1Uofc3bNsHk",
  "key23": "3wpJjD5qQiKfYKyFzEmZCB8EdWMwq2SRxB9pwh11XSdqnZDM92r7tmiHYjCCT7jKAB7AqvvxivXAArZ1RQGaYpah",
  "key24": "5y7VbevarCqpTrJEZTVdKGjU9nN9AKaso22LDJ7HjoCBT1pUBg4jsgHapuyKWyUMx3W2c37yCqmxLPtTgWmsruRE",
  "key25": "2w3v6mnCqvYYSEFZRkMDpPJmUrWkoJRaE19MfLQxHSZDZfLfAwzWvMm1oRajCiejZ4hnZBfuB2jNBmb12XwTnxCS",
  "key26": "5Ah6xXjvmhjK5dZvyrvKyQny5nq6w5vEZ9pf4xHJQ7yECoauheqtjvCkmm9fGtNcLw4kSSh5jj5VgSEWSifJvt99",
  "key27": "4eneGQhAA4bVoc2eUCRfkzm4Kj2VD63Xf19dEFwdD4GafYRwoqndprLwaGvsZKP2zSBaUjkcNpjmp2YBbx1zuQeZ",
  "key28": "3JjPuxop1wHm5zWjAoMe6Y5hEQCdnVGSvWJYYNj4Ft9xgXmmLof6nVtbqUyHToLEVQwJFbGxCqMTdxLuqQqLePr1",
  "key29": "A1Fh8PhL84D3yXfNkf4DUpxCvzhhqFtibJgA2CjNdaigsKm1ieGvh2Mdi6gJicJ1QSKNDogttzGYbcx34Gz3v9W",
  "key30": "2ABLvbd7u7HJNcYJynPC8nvDkvnqEA9qq2ekcCnoWVzFfg2YsmZs9AuzTYGN4hfZCeQx3DFREBRpyLyJuo7iBJpT",
  "key31": "5CH789ag6yTnuXGRCeQcWuDS8Jo3xm7Cs4pq2Qe6FSjAYUuLfZTZVLGPw6qCUpsh2KNUVFVvmb3ToSTg7TAmNH2B",
  "key32": "2Lz71gGrJU2Sva25YfweDy6NJCKSHnhJa2DkvXhBVg4GsyuGWa7oSoBDiyffLqbmeTAby5t6AZLqH5kBgfKaDPho",
  "key33": "22PhDs2WbJdM5kfnLbdUc48Cye7XhPnAXKcqP1TmCe9oWxABFnox2cDuQwPK7SZ8ZXaroFhFBQ4LQTtSJD8jRJap",
  "key34": "4gfksF8za76deS1Aqwmyhb6k8axtbB84Ws3pKS32JHLj6ZY5pdxan1Pyo3w4EscPLyEEUp8HZqYWpYet8V4Trp5U",
  "key35": "4cFppHQumReJ4MASCcyqi2yAbx7gqXx6L2doaDSRZ7zPF3MCYSUx1PDpVrzBhJNhqi3zJjhtbR9BimWfP19s2YWx",
  "key36": "4v3A6xfa72prTiUJjkXdDqciPtwL77j8SkwrgjrWNLq3AkH6NcW2npaP81PXsTq2bvUMuHDd4tchQjTNyyPqdsV8"
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
