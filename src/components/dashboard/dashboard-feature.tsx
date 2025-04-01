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
    "3sQBQKakQYcDj4AbCW3kPaUur36MXEg9B3PgauBhD6jRHnaJ2YYWBvRhzwCyPgZNFXbbA2vPaiSK8GXdrz6467pZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rt82XiBcS122cDkPdLEsTPPmpXbUSRKgcjzoAJJqQDKeLEHrbFwkfHZZ7NF24Vif1fsyxXv9BPiw8hZJYhLHG3X",
  "key1": "2YPLcUyZwv9LG8tfsz5d5HV3ae8bbDdtTysJ3HD6FokbjcZH2TemnQMpGRjGdCQafFQeTdgaXL9XK4PpgrXrpqwq",
  "key2": "34EvyzX14kZE4XDBQFPtHoyKCCusKYnodNJgjYf3CghuMid8Md8Jy5KRP6SrVeN3VwLqiofY1dRaX948gfReXW2n",
  "key3": "2cUqTn7vx6ZtzwpYk1CEP2h45j749ZAjT1baSb41f2Vv53TQd1qLvFPH862SK1da8nPnXuLXaWyJ6Uw74NRj8kxw",
  "key4": "3cwTz4CjyVGcKZQU97z2Jp5QmnRmo4sdGhFXfUoCiT8FPqr8LGSUz287di5rEg3t13kD97BUU3qmFLALpTUs4rfD",
  "key5": "3FqRFkhAXPXr8Y8tQ4bckL7iJhhTxeZWm2XwGGfJfafRneWAB1RCEs337Ynvyt5YqAMUQbU2PzmCWfZCVo4Va6hY",
  "key6": "4NYVxgvLfQF74r31LTDKYgYzDwf9cn58FWX242TdPSQH7JaiidcLacKM6LdbJb73E4nmfDhthPwudjTAY63c4GZB",
  "key7": "2AxDkAyioGseRwEpEx4EYqbRpXKmopEHMoAoZewqx6q1cuV1Sa72atMdp1HEbLLu3yoPv2fxjD2jTv4JmqtJGAXW",
  "key8": "3LcxP89TCszovA1rvHm3ndHjhEN53AMuvEFuWhzfmuWrX5PP5Mp37H4N8f8mdmixAbSH8tAPVSphw7QsdJeQUbEM",
  "key9": "9ZiVY674nQ8omgyoxZsTDgJxwptecuN8CFzVqL9jXcHQyf8H6meVPShLus5zjPx3HvYTzgURvq1zBnLPjvJhxVB",
  "key10": "4wXHhhrjs3gFJ7YRfwyCkb7f2jXksGPLqfEkDgXHGg9s5SfMwg4VXADAfFsGpvZA8mFv8odutvHgKAjhYbx9BgRG",
  "key11": "2UjgyBg5qvyWqVNBc3jUVA7Ah1ySqYjof8G1acC8Jwmb4VCRWhnprhpZqhVJ1dcMaAg2Mvw2dYgaQxte7rK6dbKo",
  "key12": "3jnC429mRkBykuZkQfmjtaaG88KzfE8pqkNEnsw3FHMEySPdSaBCFx8jkTTPTkbVnBHxw1nfTRHCCo1nWDSrLJsg",
  "key13": "QDA5tSuqSHYyaRSgHD42Xy3fBfhRtWqbFCJPGG3wtsBnA6DzP83NYYgosJ5TZZz9P1HAGLdnh2CKNEsZd3knLsc",
  "key14": "2gNCJMygrjSSKo9Aaz2j8MvxSdnMyFzhDSFRtmb3vZYJRNJzSVzxb3GvAvB6jn9QxcM8f63o7bcTmqkX8ba62yJc",
  "key15": "MAS5UHAdAdeN6DNDz1HcSyfUyaQgh1Khjc9GbuXZ381VDR11QZPW8wZgsz8WnMm3ycNP5c3mEU8xMGZj2Khd22J",
  "key16": "9NqwMK5tXQ5thyy9FY3WmknrjRWtwdGBBmKDLtTSPxEayMxGT7iwfJtuXHaPHtYdgoxUTcpLtV96PCwd3JVM3bZ",
  "key17": "3CgMahM9nW32xGqXX98Ln5nfqjsbZZQbo514dRhoWr363YaW885ZWbdirso9Gu3VWQ2ZwqGYv7N9FCrDy1aBsYrF",
  "key18": "2dj8z5S6aH12WCPsvZN4EmzTDpB7J1C8fqX7zmHM4HWv3DuYr3gzPVF6WN442eyFbCZKpD1zkBs7BBi1rCNhrdU3",
  "key19": "4XAbvmhS9NbhMxVWNVXQV5uKfyb8PLSEUG2WtdHDmwRDBjWkfjanAVxVp4qgx7W5Dzsf87DNh6xHHJhsEFYFSdaG",
  "key20": "5xfSWY2Kcao4BZjQKJzawZByfUjvi1E6tzXN3Sq5FKR96tXWfP8n9NZHBfgvk7rUBqVEti9TZhBMHRkxCHpdbUDZ",
  "key21": "2te8xDq6ge7xhorCeSTqnY3m5aQT2y4uCPowGqGhHN5wKCWBPwREyHJZ1AWsCKkzFgHv9WncqdTV1wuWLw8AnvUb",
  "key22": "3gbQFUvzNNFmhcPJuxcHX6Bgp8n4y8uDBw1fGsbqjPe4T7ro4u5C1NcMCrYrUEtZTgveFJiNYMvdZgJDf8xYTLb3",
  "key23": "u7FgdsCKhJvsxTPxowrFMeHa2zmrs7zCbsAW771ZphmcSGCZ8p89TKYDt77UtCmNatcVf7RnrsRMhvQCYuBzUsg",
  "key24": "CEdCDNAvGDEbwQBrgBnnLKPHercsxRTRXR8AHHMf5syYf4deJktV58ajnzzJZPRZpXWsFpbNCrFwsJXtyLUoPgC",
  "key25": "4kdQX782b8gdQBMNbrXvhXvb5ruvpAz8BzfvEGk2gAFmASDPAh2gWQwtWL73UuYpa4kn4Ekn2sgsPPQCcuqK3eUJ",
  "key26": "3RRLFdPmHMbvn3rXnYXaD4VgnHKUy7WnmdJksSeYRrnNrRwQzfszE5AKPjt8Tx6DsqR8wrXje1xLCBFgBEuoYTNm",
  "key27": "5CwFCD2BVsjRwbdT62dkKoQnfeBUA5AtYox5Csr4E8rPRLu5Nf6KkBSaKdWCBeeUVAAGrqmkyMVEkxEj8ctFHVLy",
  "key28": "2xbiA6XQzbzEvh1fm52ovuSowPAsEAAqnDeGGUJh1HSVwcW26TExsoVD7ry3psRDMB5ixPmZfL4rNjjaQjrspL6u",
  "key29": "3ZbiWZDvmHuerfnWBESjD7uCQUr3o7ufc9SysAcNwY8pSR5XK7QaZzFrQe291wo1JeYqntzz79qcYs38wUpRGuhw",
  "key30": "64zJEdXeWkEDVXrBk23dFHBSoShu2pe9suVUjboSiyU76UaJ6uSSYsybRQ3zGPquAuYwS7RHgN2uJUwXaGTgnwcY",
  "key31": "2Ji1To5ZkJRxCTEx1VU8ziwHfHgWYNkZHzw1h45An1wq8QnNe8kjtJiGVY33KamD6x8hDMd12CbCd41TrHu4ADVc",
  "key32": "Eb6PPFGMoYnuUboe6PrdncuNz43YW1aBnYHsQaqh7vVtK2dqhCvEiLWVXiNyFmrX2zn36hQ299u17qRSeeTVmEw",
  "key33": "4rHTBSSzaHkJXPrf33V7CdPANWPTDgWLzP56k6NtKMitKroE9uoxMcFJDomL2qk2nLDfz88CZAqD9yMuwRQR1meb",
  "key34": "TYZjTPzSTCz4GqzwVA4SAH1NWVwTfuW4hpvQPnQGu6nMTisHnp6ht1hfRhEaya3XtTimNbVS19B3bKEicfwExZ1",
  "key35": "59GAyFxiCpyB9cnWE3CngqY5Tf3CFiU4TRX3msvugoRTsrQWKwYrWZ1cK4Mcw7Zva8dMJo1McZnr6jL74DNUfFj9",
  "key36": "2Gyhhp1CAzhE3Qow4UMqqppAWY94GMEvyyqbHEULKAUKCLFGVroZCayoUmLQszDhUaNqhiVmfzpk4gMHJotXLaRy",
  "key37": "2bDGmyw3RKaq4btVQsGCX2abMeitxhtdRG6j1hc6vchvD6AyBLxEd9xA2eLBLhet3DB3gTfAHHDYRWmCukf3dfcC",
  "key38": "3A7nT7cgndLMDXbVsHeXwqosYx94PQz6uTvGCX1k1nVq42LXj5QvBUzdoVy4ZQYWUBXS8DHNHKGW5EDHcBR9ijhD"
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
