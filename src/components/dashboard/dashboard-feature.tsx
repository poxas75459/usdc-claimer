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
    "3Np8eX4vHCNS1ppJjsMiFwJ5xf8wKJgnvkMx2oCWZ9xZ5JZ9S6Wb2HnEvRJM6D1HfvHTgqjPNqoRijMtZAseSGjf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gjXpu9KH4ua6QxWsmahtWxPrYpNCmimU1jqPEhrsf9K3DwACoLSkNTnhx6U7B4M7yCWodFsXuyziC5A5XiGUv3q",
  "key1": "2LfAC6rGbjDBUvzGAHEKJ1RqPXKkyMkm7HE5F366Gwb4AqHApF8tnoK8YQsZkcyPoBJw9fUs8DQrHBit5FP7FNHp",
  "key2": "AbodWjBAhJs3gBY9voz46PSt8ixxPDAss3ARHXiiei7UmiMdu55VhYMgiMseshLYqxcJNpgkeBJaX8xFZVKXMdA",
  "key3": "4hqcEr4Pzu6HmR9MP5ZcAEKFsDgQ7a7AUz8VA1omfGHeRRwC6onpDf5ErGDqjFqV4UAv2EppovcScY65qeWVdJj3",
  "key4": "4oXjZg6voLjphfmwsdEkK8je6WHXLG7QEF5dzV2H2jvPWZxvvirJ3o9drfCd7KKbmKR5Jbgiqcmwq3uC1w4Dri5t",
  "key5": "5p4kcqPUKPMDcz24XFcwbnAKjMVcXXk63NZHG4T4HUqkzLJyaMUgccat8d7H7fGUPbTfKYEKFeEb69iFVUuS7Gqh",
  "key6": "2fntt6JGar7xu5xNEne3pvB6dL23P7QqpRfmuqhQUBtVdvNzPJ5dRe6N6DMcwBMN3TDYV2Hh94kDfpamGHc47myr",
  "key7": "idWBvxEd2hHysng1aXGmQ2JNhk5EzMisBmvsYkxnai9GaHfUrjoAVYGM6DZinkkhq7ou47xjT9DichBD7Kx5R1M",
  "key8": "2Nh48M3FVSQYbZ6XAur2USdx1B4QeUi3hAEn33KFMuiiQaY1bXFot49b6qr5daPF8SqYKgSr8xdkTcwe3YbHy7DN",
  "key9": "2Yec6ZtNpfWtfa6U7fiF1TEYMQkqJM41Zq8aBHbLwdEEMspnkdK3cSC57Bs5CKMQWFroNGK8ioJ8FDyvMxyBgtFC",
  "key10": "3kgVqm7zghD36KBefSvrSdpYqVroshjGKDc22gAhz7VBpFb6uJvntSrHPYfacSFQoWDMD2G2uZWkLmpvjNsf8nwP",
  "key11": "41mpsCGRErE4G97Servf5tZd5eviKsvZ2QoFuHqDmfhbPtECRXfF9Hg4tyJ6pfCmLhb1wHnwKC6UoimXynULSdM1",
  "key12": "4rCbufTYyvjqrTYrHqgenKh8Nys6Zkp3cQY7bFuDmhzx2ZcMtYoc9jmZMq4UJcx9yc2fRnJ4xdfx3UQfRJfP582m",
  "key13": "4s1zKW7nvCEdk9JNdiqJr1veKuDbnQe2d7JVUxZEXMcU5KDybxmV5Vwe5fFxGjoMHFkEFV1gnJ66CVytyFHCniQG",
  "key14": "52F8FKDckK1Pn4Lf7nNHjTWJKc8oVJ2hCRv2ycprSGhXKbfAr3AfYGjUnyYq7E6qq8ghmaAKrQVEsLKWmSBjva8j",
  "key15": "nd1bDNQbKsUSquL9ruBnCDuS5TsvnKYdW42qwk5VM1xtvXDu6xynRvgWr4NxGoTCpkbpQSmbbrW5W6g52wncyN4",
  "key16": "3ctn4qEy9opayYGu2uuTShL1R5wsuUC28rZBUZ7nKxoBXgW3DfZZHWrWrwuwwUG1gtUpa3YFBULBydcDHu2vJfDT",
  "key17": "41xgvvQxzGR68YHQ9xXhQ1ZhA7UdTMJYrQbDHHuKyE2ZTZeWJ3LpVEks8ujpUVmrptZkSMTVtfmoxyzsZuxNQdip",
  "key18": "3V5q45yf6t9Q2poPu1eBG23r9NN2m4jxmVLntnf1HWJzKyjBdFodiRtkzRyzj1DTsyXyJKuEnZ9qPj1jipTmrqgb",
  "key19": "ELwycNo3bdNNpqVUS9RvKDwRLuu7yNsBfHP9KFmBWwobtyC7Lk679F9X2FkyyJ3eVEoJp4mzkCzB3Y9sKxjVFhH",
  "key20": "2ofh8CCDUiiBCiLsf5xGFKA7tykJQ2z7hDqwUqxXSpPpWesmYYQUbvb5NLhY9Uukfpy94aPw8oVs4ydNedQaMEwr",
  "key21": "3W7zL4RBbHcekWCVL6oRFTrUSgnh7rCnoHLYm71HcMGNF9cTmqVKEnFR3Z9QUAhLBdgPmF6HNbh79ESoLqEmR4t7",
  "key22": "5ETeDhQqovBZLfSUBYujFDDc5PSc5HCf8VpyGzcRDpyMqbZHpP2vE1U63kqS4mpjvLrJ1q6X6shCdj6siQ5gYy4M",
  "key23": "2PLQrNj79K5QRbLTj7CqRjudNed14SjtXEKF4WRqqcDDrtKHKrUXVRxHugj4iVmDPmrgK1CFqtg4ibd5nmTYcuF5",
  "key24": "5C1EqZXarfj1YvnfDEYvKHtBp6Mzh2KfWcHLZCdkvUw93REzWM8QLT8PYQwdJ5oyhWwGajC8xiAc4wYoB2DP3PwV",
  "key25": "3w6JsYxhQXnxR95ySMnsVbmU4y61oFCWYNjXkCHnHsr4TvWGy8mFewMvD7vXhQ9pF9f1FqqQC9Yj3J8AAcRS3Cr2",
  "key26": "N8mV9xhoMTKFisuGut9ioHqpdd1bu6B9nFUsQEoATGzkbzekRwKqN55AmauwUdN9zS5FchprpmTht3GVjigCoKz",
  "key27": "5EQmqpKGhHydH36cqGn7F5G9mgkkkP3Lnk4UUV6zZVtCpGTYoc3QiZyuMqgG1ULA9iecb5fyNxNeReKVD8yaEVS8",
  "key28": "4iyiLPbAe7msGDzsao6cXre7YbDB56J3FvUw7zp93p1QRJEj7erVorNTiwHMkA61XjrrNEmfA9qBeTjR7qW5ykcq",
  "key29": "4RM3x5xq447qyd4Fy8YB6yHHQR7H5bVcHJ4y2NpxvwRhZ3zynXtJsyNrwzQdA4Qwq1s7QfZgYZuYFaJR8JMA2acK",
  "key30": "2S6Zp9Wth722so2A1iRVpUwQYQ5a7DkRRon7cj3oEPtCoLXL8FqLDALNP451rZyLZ41DbpLpm6CqvgNHVEmkVNy4",
  "key31": "49dSrZxtYMH2J3ntrxAKVFWMbPRyTrzZczFaLi46BPJJUoeLn8FJkmgtpMerbWUY5sftwYzC1qVf14KNvF7EJxqw",
  "key32": "2MpsASCz4qpLMM7GSUXaZgsDSRqCLeTUQ3FUEvTa16qx39ZDZRbte48xuvxppndU8vUKGA9ZALF5BBwLLChC47ed",
  "key33": "4ejV9y8qkaQHnkcgPoY1DdqYWoxUwaprKBo9u3YbySYEBgQBH7d7neYPyjqaKDTV8DJQK6ZHsAQgmxnjLBcANYTo",
  "key34": "2uJpekibo9hQ9YLcnZN9HTDU5UyDaaumiFSBV2o1QmQTKbJEaA8Zbu8qiPVBidJiPBUwEL911TdYyVba56QYJyjN",
  "key35": "2ihcnahthgx1FMA5XM5gkLDy38fHeb7kS3ZTwXKSamqdho4q2EtUkhYhfUuUj7LkAeRqm1W1dWX36WAsXn1DRemK",
  "key36": "2mqF7cWXepJ2pHUojqs3S8PQ4e9mRv9eHX7hgMfWVG6Mmw9qXuTNdh4fRDG14awfZBXCJJVAV4J8Q4jRmP1RJ4hj",
  "key37": "K2VSr4xjKmc9m2VTugangb5m6a2wBx8Wq4uVNsgjV8pRYr3JVpD3P8WJ8eQPyftSMQX79cLLP52AjficGrdhPEV"
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
