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
    "3XqMxUrNMKv9Fa1vq2E2TFJFULNoZEyMAe38rahXe2YmhNfdRrkAKdizmGJ8v3PH7QJa3C8Ayp4CdQFJ4UdJm6LU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "icszScK95K22KHeWb23Tt4SLpj4kZG8VGUiEo91ZBq8FbE3JVbkdbKESTbZtj6nLB7m383NhKcMBrg31T7srMgh",
  "key1": "3KsxdbzVAF9xhRovWYgbKwrvvUo72NCFGfVTSZ2pckyEnAN75yq6psUSobprVSuoH7gAsMjJaVkqCUcdfB75RaKL",
  "key2": "42XQLwFUrc1Bqx7kgFUMaxhkgQ1SgkkWTAPjWuvuGoswg9xmEEtDrJ5jfN7w2ivoBWhtm9LRDgGtWBxCo7XX8geb",
  "key3": "4ULX41hxyR4Uausvo9mquKfwDZhtkd6FHnevtcPNSMG3QvqpSJG1ESEGCrrf36EV1CEYL5uGSi7xoojpdSzsKP4u",
  "key4": "svPraGndiwumExLWvUV49Xeuyh3Vqho47F4prHX6QwZDqqyMxB8FAywXf7kiZNFuWWqKbwrQJjFQj4ytQwZ9EGF",
  "key5": "yt7EzD8ptUNWjZPdqZtQLW69P8eGKiogKeHjUetnye35tNhVfaTbFE1nXq2SX37bboRBtMa5B7CMyUKbDDaUhDt",
  "key6": "4vM92drCV9HMRjNKMchb4eTQXUGT21YLgZ4XbzdrCp2NSVYEXBMpwEh5av3pnBqmT9BZFdPV9U2RohDcoAv7SZcU",
  "key7": "4me4sZABoNTYxu32WVEf8K28YVijrdxmfbhc2nye6SfdBB3WJJPhQF1uHvXoxbTaWSXwnBEGna2TudbGgC7KwtBX",
  "key8": "5aoJy2zWHZu85E8V861GApMKaUtnBNtt1vvUoZdPe9ZAX2cU3PiRdAysz6oaMQkwRXfhbGbRY1ySK26aFDnqz8rF",
  "key9": "4kDR775EafM3fRtFL5fxSed3qBFydwSNV55feLWJNf9kBfJYENZNSFKCvCH23CuvQbHTbq5RAK6rLJ2JK34qYNZi",
  "key10": "4opXj2LSyk1PiZPD75WGJWe5pbb3qjFhF6ArkKQFuLycs32ZjwJN2LxobDJ1JRR9zzW8u75hVefdHxZWdEPvgc1y",
  "key11": "5tPmwPuseczqCqEvruBX2VA9jFbTJFDrUqcr45JYW1T69gkTzLmiT4wKNJJmPkVjwTKVPjcYK1U1fFiBETbybCDt",
  "key12": "P9c97dqMngYTy3rxnVeu578q4biWsFFBRTR1dYfaPSo3ffwvY6onvE7Ku2T9cvktyc6iryXBdwDPQgzpV4wG8H2",
  "key13": "KR6MRGykU43NErnyswhz7HwK4R9qYvRXmxCsQvMcBK3tKZgh7dnLM8UF23UXkG6oAwQ8QqFHEkzqfU95kyxPttK",
  "key14": "3VkKr59aQrkPGsjPH2e8RsdyxEp28GLzUj1PV4nj4iogqPMbWhFwSomWy9VcV6xJnKvCeWL1GUgMcMjR75n9bE3a",
  "key15": "65nVQK1qc1WrsBqYva1Ze7r5SFE7AnhasgfGbrTrRgAfNyXvo2prjKjFBwchPSFS1RquYeRaijYwuJcpNLPFCwuU",
  "key16": "3Ehxr7cokYqUX4ujFPPsRSzLfi5J56ZpwKAs7dtiorARy125EQXCQfSmrmBcjPz9WrPEQi5vE1iyXCBkxRwhy9WJ",
  "key17": "4VAj3w8LBBBoUUCzWnVyZk4YSZtZtf8nDmzZLwrfU7rfs3c3buszuLZhXGcJdqTAW5BtxrjuexZXv3J7PnzxVG6R",
  "key18": "56eos9EPCRnxfJ12A6ayA8BpNdMknbkVjWYgPQzGX684ooavfdG4en49QGChdXts5Gd3fMCrN5xbUAXC5ifWKUvN",
  "key19": "5ZmmFZRNQ8Ws12M8jpbNZkaBiuritHKQ39H49KcrPs2CK7fryu5SF3xDePM6r4u3hw2aYnsLTHLF7ACCsSyfMP2o",
  "key20": "3KAVbSwMNmehAw9megenLu1CVS71f31RPkrbLnC6mSpnVUTxTXuEYwvWeQQ5mdcvY2ZfqTsjeThrGuDzSL7dwTgV",
  "key21": "5hvAthacKVNxxhp7ZGABc8zmrnLcHMVz9DRq1pXu17j9ZnZd4p88cFsDwPYYeGNw7AcFRbauFXXsZTwKJzYkjtP5",
  "key22": "3CVFWYV3Wng4a6aiEbBFJY9SDvEZ9BanAf7Edx1CrTbRuz2RCnwXtUjwftCpyA2hSFTcg7S6dgMDj5gRCdSXwTeU",
  "key23": "2cHw3y8WNoMcyYTEaiW2W8kL6JGneuKGFeiEUMKEkWhTHHetZcTh8MouKcN6f6KamBxQpUDq2PP7fYBt6Zu3qdD",
  "key24": "4YywTFi2wmZyVfV7tqxnarRt2iRQKdZ8juTDXYdZDHwujSGzZby3ZwEnbbxggFVjKiWKighVbasQWaPBRvEMhpC5",
  "key25": "1VA9FGrL4C4kGunRGpyJf4diNEwg7GEY8Vwzi7SptA6Ejg5rar5EuzXjfzpRLtKxej9DJvjhL8p87EDF8MJzVLz",
  "key26": "5P83fj5DwkihqdKUh4sJm18ZVST5c6A7T7hfEaTcR6zZzXkiS63kcozb1RifovnnwbtThyPJRTyCP7BUpvb23N9p",
  "key27": "LmRvk7zdkdxSBUv3Pbx5wAYbKMNzR24fMUFsTeZWYysPuoui9JqF4d2D5Uux5AmAgkSYqJNkWJowGUM57R5HcT4",
  "key28": "3i5XbtYeZhKwjDPNXsx169mhbA9oYcUJfNsLZ7F8d5KaNSzmFFDjkEooAw5LUB6D9L3yKGfvYd4e74DmbgqRuezE",
  "key29": "2EQ48uNzzAJzKsg63Uds3XhZDdwDL3CEBcbuTAG3Bd7De3S5a9c2v7WSVLUMUmBbeujVm67XeaGp1Ly8GaPh7gyZ",
  "key30": "41rBBadyHvn86BotDf7jy1YUwjYFgUV6RZCd7JPK8uCHMK5eoeyuAzNzhUMoJV5HPAYhrSqPU8E8VNgdpdSzZg1K",
  "key31": "3tnW9im4Rpxqdkya2pxis9nJniqdHw8dp2GNJUtLKB5YBjtrPshcVCc1jXRzi8e92o1Dba7gEWAM2mPtpvzLjJoH",
  "key32": "3Bkj2JDK13L6zVdRZvvSQsDTJMDBifTUHrHDHNzuiZ4QtgtLxAK4QEmRiXdAupJ7XGyYsSFYhjFihg5zgRtAuHXs",
  "key33": "2RmVPDzbYXGsmFJVk4LXcU2i9iKFc9iSrGnoqYaunwicYVFcPNjgX1GwPG6bq5dPqkH7ZLcNFd38dXLd3oaCKnwF",
  "key34": "Dy4L6LeW8RgRcLgaQKwyHUt6XCnNpDsnWXSn485bSSCdxnkHSW58xSm4TGgWaQVLRxRReiVhzTCrB5tUus8FFSL",
  "key35": "25SsoEePa3b5AwmNXqtZnbZCD49bZPTf5WnB6VyGTX8Kqtj3w9XtGG4sQS9gq1RdY1cVLutRLcfeTQLMdD6xMMrE",
  "key36": "4vbZNDeKWATCu4UedmSbpkyjXoD6JmwrkZpCzpY4vB9nFqDxVRbxHdYDR8PwT7xvooiCjrrxY3t5kKCX33urBVxk",
  "key37": "4C1GRrNMsvMhzBHWTdcaNt6QNZzv9F73oJSYJH8tGCLqPXGws2hKACYfe3vxNXU9VE44zY8zaFR2wqM1JgxuQn3o",
  "key38": "3j2kq6JZ8k8c7KuRq1GecJrKVBUmNQHGRWSV4m5yWjVCwTop3M11boJCKB9594Mr7dWiPniu3VX5rh7xqHwxLSGV",
  "key39": "3FZaacG6QEAo7cxCgrGRaYua5nVFm53eHVsd4uGDEGbBhXGkiyaq55JiPbaovAoJyxzeMQz8R8fqJKCAhD1yYFPn",
  "key40": "5bjXxuuWz4Ge37Zk47koVfsKCgfiLAHiApzcJ71sYzveCePbfwEUbF6WT7uJEDsJTC78aLYbabfBr5Z9mXCpiC8o",
  "key41": "2egThworJejingmKGXM1iTakZgKtFVbU46GNyA7NQYxeR8HtGDcKfiQCiP53tsjjnrPriKfaQWiUre7x3pZpEC1C",
  "key42": "Et81GQTWY9wDRcYKyJ2k6vhAbdPQMdoY6o3N8ob96fQXZ4LuNrayanG1aJQELo3bAoaYXSazVHLq2PHzdB152YK",
  "key43": "2Pr5MS3FRwozF8g3Fp7w8amGgn3YvZCvt4NTkCDebzEyu7bQPwtasArffoovr1wNcZiya7NVKxFBMpr2wyS7M3aT",
  "key44": "2ovksKrAK416nN54r2g8SRqtYeLYKCQqEKua4KAWTmb43YR72zyy2YhwCz34fwtn3DWoAStNR8TYcv96Yr2DYay8",
  "key45": "5ckgiMFWAKyj5gj2yG9xymkBjNELamQRpKAdTMENUDGeNzoREhLM4TZ1u1VTpimaQRauqVuX8912qeXugvTrhVfE"
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
