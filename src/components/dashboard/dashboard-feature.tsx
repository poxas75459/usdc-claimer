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
    "EKXXihpNL884JDN4pT4mnYmBNaWYCU3uy4SHAd8xeoAE5DnmzgkBuSmh9DFDHY1dTuZLskqsUAxxJ85BRemNzSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iT8Hk7VSRQ1eX57yYoZFcLb8LPogkRWuviaz6VLGu4qxdmqiGjgYVyqj5ArQHsezeQuij4jh8bkFe5MDuEp3Szf",
  "key1": "5EeeQL8yTFRNwTBLD6kZQWkZhS2aoAknmpvtTeF1oTj48FtBpd4eFsDmGR5UK8k2dEeuNYmPrFoxWyfa973bQosq",
  "key2": "3UMejY55pkGx9YMhi9Era2oNX7XxQ2HYk6XJqxtz4esLeh4w2XZhBGxpqiJSSNv4o5khbvWNNREJ4e8RtPVJ1t2d",
  "key3": "5W7RtQE557ZibX5rERq4ySBFH8GzyaTjomGmzAyK7NC1dJJ6DHJp6zf6C4t8e2kZm5eDDRY2KmoogaiVyA8x9Zuv",
  "key4": "3CLVSfYtNmrfZ8UngJMKsvSYupT4YmozSNPB8SUmGXVdLkPe326DuVBrQ5uCEwycBNqoU1TJan65bc6KktdnSSxv",
  "key5": "3xV2yo9kA3GdZaTKtjegS4BzxyhbkzLhRYp8Kppd3NC7ECbnFHcAGWXTNamTm53YPf3mzkVZGPzkEN1yomzcAUZ2",
  "key6": "2yqMxmiqpPfxDXWvTEyVCV9SAip61kbvoCn3EYArJ1a3awjLD1yBpbwEZp8JhcKFDtuqRhuuimGCeErwFsP7paqk",
  "key7": "FW2qbmN77XkDmSbZcVNqqbCw1PD3psb3NZ5E8YKXiXytD6gG8QmKYEJ3aRULR3dqLXQcBVsUiUFwn6yyZAHNDXG",
  "key8": "3oq877MFGtk1TDmttuut5pwrnEhVwQt2d3ivwuoPzp9MByYJEFBds2SBPXDitnj3Q5hZ93Bf3jzepxxbEzbxpE7g",
  "key9": "2vKYrzEsRBCGTcP1XK2kWqrubZYrCHgd4SygSN8uqGFEbYPc6g5tKxnfxdCjfff2JrFcXsC6sXimnth1kmzujkZ2",
  "key10": "53zf9UPpdg39bwCAwY6ZiwHH1kcpMsEvL4wXEA2ZBarqXLf9VZKiN8pnGX6bqvWU4qNBfce1qxTqRBY9isbHJbHU",
  "key11": "2eMHG151mknBfmkxtN8YxwdsbGzrVXYEKZHBFJRFRZDC9LwYJJtyrjk7KEb2Vyr3XCLfPAJcnLAz9V4jXYPvd6Gr",
  "key12": "37o43X6kt2U8kaX6Wemiz3vCN7Mi2GMSu1cXo2YdSsnfyqoNoRdgGW1zrVj6PgzP7c95BRGL4p1hYnQvRJEai1Kz",
  "key13": "4vvANNhnGSxXBrUX3WTZw5FuoTuJNTN6jAQWAAxgaMBJF5GZGaej8cV2KRD16RpWYKA3jUcUGjvc4QseiFSPn3ii",
  "key14": "3HYQycQZ9kXrTAeMDYCyXgVqXnMdfJXuZoXQJ23ytWM25MRPkJQKjxCgi4GU9knCSfbHgTEnycH3knwgH8Z5YgKD",
  "key15": "5H9exEVp8UQGcXH399xa5sVtrLJAgRsH74CLXxGnrzfP94jp1hVf1QhB1RQhsdU5qkDGQuV25e68fLhybpuf1bPv",
  "key16": "4r64khZsKKMDa6aAsBBowB4aPJJFwz5hjFjJ7jiXmenSf5GqD2TQsdJMnMqCU5skxyjqQVJTmXv2fxtVgijprjZ6",
  "key17": "2YkU4qcsZAkcG8kgWcW8deKvkaQx6XtEwzZNyGZY3PvUfAP5BzNhU8UgwNKxLM8XmE8ig8cGvoDM67yTDXFHFmpg",
  "key18": "5Ss3QHkkyCWkSGC3iGNEBFKDq4BAjrhacRGdQqkFJL6AwcsM7YebpqrnTGWsJYnbostzUwvdBkC2u2WeJTgXzSvo",
  "key19": "4F7DYbdibvtaL79gFs7SQHYxjm2VuqxXiqDVEHKEnpqaUvfsnW5y4jM9XBHLzMNZonycwNJunvBTjXufxxn4n5m1",
  "key20": "4WeLS6bx7cEWCeoP6SkdGM23zHvm47onxEZs2QAa4Q6KH4ZmmVuvwKZxxseyMBSk4wzQtXTFfuxg4z6EqXzHt1nA",
  "key21": "zVJQPy49XoByVUwRhV5jiQEmN4EmGHGD1ZLALwb1YxjWu6uABCVEoyxVRTaUFWfhKEN17HMaDdabDvvphM8mVVz",
  "key22": "2Qy9VjrgjYuKwNQRDuY8ouk2mRS7Fg1JEFpCRTmvtL8FU7wDdaRAL37o8fWd5b7dFCqMSzRoMWnU6cCLqddhKDgh",
  "key23": "2LwtWagckzhHaGM5vR2mJxB7PBNr9JrNVG2TpQtuZd2eoCwMWVL7VYBuNjbw4ALREGQKnkZk9KP8Vviyq61s6fZR",
  "key24": "5F3n1R9YSTHVHzfdmyLr9MeSPuoo1ZaCWRkcyS6cLJxxCCsz71pAWohnaMFp6th1GMfekPeWRBzuWEtfWxGTitqb",
  "key25": "64No9hVJxDdCQc1933zKEdfMZ1BSZDjj1YSdqWTeEvwvsZhuvPaDTZ4x5WRnqM98nt5tHX2x22i2cJUAMi5QM15Z",
  "key26": "3MB4Ppj8y1kwa19pd66v3tZnz2VLPJXQPSoSrzNTcwUgiEt6XpYxsfY4LbtEib2MhuDQYMzzyf3y45piVuCm9tyX",
  "key27": "3Z6t8jwZ48xCgeUAZh45jakZ3AMiMFrpVLVpcm5mzgj6odm9qFULrXtiXQ8qDTh79351R2qhCpjufRoZjALUiM9o",
  "key28": "4uQesK8iwF6qfMuRZ2DiMnaXGDV6YoW4gim9rZsHqJDNNyaCVgeGJgvGqBC9AztWwm25Z8d9BEzw2KDPervgCZaS",
  "key29": "5uvYR3rCFsAicwLMezRgLJ2ySHC29BP8LLebr79ESjYkJCrCL253NfbY9myr2JzSS6isJAYcjzC8QLfmxx4F3tAv",
  "key30": "4Lyb49o6qF38SZ6gHtpA6JEwJ185RYKK6w926F73ahuF2otoz32qo9A7zKuGakGvDjWGFAqnYkvEbTcddrjtbTjz",
  "key31": "3FmTNCCDTZ1CkaaXX4JPNdu94qVXjkJV2dDoCtV7oFX154pAUhWuFWNGY5qYM2srbQheieWBUuSPRAsfVZMfTeyj",
  "key32": "3Jc9YVgsXpqrpf6nYfHd9ywdWyKizr6Uj3iCLxcQy1JVBPiwAVrx2FtzTQKn5NzGASyo2UrmT4K8dP3AzPjfhFif",
  "key33": "24gRhoSDdUUgeMmR5CaDNQxktuM2o8yNVptiXUdxFMtFdTAG3Ukz9PeUpHDC2LxcREfZBp1dvc42WbGtXpxAmzss",
  "key34": "3MLTEsgWzCU33iaxygTxJFpFYz6WZWJBGBTsdBC7NfwHvVhtRCTEPRYENnfW3BVLWnZ8punMKYXuBTJMcZDJQwEw",
  "key35": "5AqMLxKrWfSsbqTxuXjBFguGKaKjF9hRvc1Ur15yXUS6ECbY7bdXMUZ5PTR9QMU4YdcR1MPe4TvhXrmYQbLEPXfv",
  "key36": "4cegg331VSHmyULssBs5vjC3m8ENYSEuhWTzeGiG3JScVM9FnnYn5Yek1xzGvHy5AtqXfQxF1aeg1GMm1iz3y9HM",
  "key37": "TNXe7ybdhN7xF66eDpapWjDRx2v2KcAd5KUdFYW6ahZE6n43e3z43qrGsEuggKkpdHRgmxuj5oriDDPUPPYNPPj",
  "key38": "LWihyE1ALwY1p1Rg9LkudhTHZUgAowHw7tMfM1tfW8624vamST8ePdZfdeAicxoertTw2M5sQCMsKNVmKyd8Z4K",
  "key39": "2j8kRN5AQbnQ7EMPLor189iyutfiMeDsMfASyGBwqkMxdad97oeWGWFXfV8W5BZCt1nreQUe87DxJ3ndfzRdiHWQ",
  "key40": "5DxCqVRYEYRG39inKmop8dDLVDwP4LvKfo6y3ywZ5VsvSgfZrV91b4ArwsLX3yc5zdTEUE1kd4r8XRbtWu72NEFA"
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
