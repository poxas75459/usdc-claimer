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
    "4m1rppBaLV5Zmrh2QoPKLk14beTx2dvTbMbkASysNRNYyrJXfHTRRoUXVaWSU75dXhJ9hupqqrAHeZMZ8seKcT2N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48gD1KQqUFWQpKypPKsDKk7gR8JUXcXwF7xECaAZfpTCyxdg4qb5vhtCHzRKTvYPvLwHBeNdfTCcPoQc48HCFLY9",
  "key1": "5uEWQM6Pe8NpH4hQT3FtmbLJ2NYs7zMhrYEFFpUKcJPZhQnhD8u161q4znSSiFbgbX8TSyqDUsVPF3uDrLNz3PNm",
  "key2": "VzoroiMpx5rqdNLyJa62QsDEtFz5ki6wo2dMAbSaaVzZJfYDnUNouZawQrVXi1UewpqQaHbjqdhRFMDj4AbiVzx",
  "key3": "5tiGgjQ9c5aN8TEMCpN4egAeJf2vcmTZzSGNdo2vjZjsxRhjem5sPSDD9Ke5G6Za3L262aonB6py3QWKQfBCWZ9E",
  "key4": "34YGR38mnFsVRa5FWCgf7PZnNf1cgJMTiL5XtXitTR8n363b81HcufNaZjRRHLFZhTpieN7gZahLCn9mdMU89jKA",
  "key5": "3iYrntJVCaGUtC7wkL4MgpGHPEjaNLRgztjCm14VNNMjVsqNUoiJBNK8zAY58bEhFpYiaUhUGUxKDm36PsRNWz73",
  "key6": "2RY4MmgfRbVmwQeCFKNk68Km1b2MdraZBiBnvpLf44DSfzoH46MH48QQRkCrd8Yoa8yPaGgtnm3wxY3DPefTjYXY",
  "key7": "4TX98qM1ZtDitgpC6LUpi899JcSQYUzQiEK61gdfm7n21aE8ANJWHYVZkhaS3iGqhswX76TseAgcVSqSsSTLxnNJ",
  "key8": "34WN4uapYntKvhgfCdwzpP7DQ7uJHMn34f34DL4YLZPi8QQsd6DrttAwHiwBzZ6Ao7PS7YYjFm5G9bqVTJA8EUWz",
  "key9": "2jPT82whBkqvNZSy6xqbVesT4uak6nvyWYGYBBJxrfGyYZdzmaGBcnRKXFSKUFzmJWuMrRytnhB6SbVnDsnUdcWB",
  "key10": "AEMYMtf7Dqpgjybqv7USxnVQnZ6aXhRMMHbzjLD9ftErXm3QxzJxbHi9xXT69465hyHFWhoUYRz5MnFLiErRh2k",
  "key11": "w62qViTdW19WCcLnWqvXzJiFymp58HZameo6mytG8ks53doyasu8nDU4mrFHVHKKhfr7CvVAGqcRu68hKK7SA6t",
  "key12": "4YrwJ4gjeXjuaGGRKJeQY5BCa62TE6eJCjMgY39QZ5FLgTZupwDtWwHdALfLFzFyrYJNpTCuRX9NJyAedw6F8Bpi",
  "key13": "5T7SLnqqw3Qq3fmN1EgJdM6yDxK3c9qe7Yixfo1m1NnW3PZRKR2yXLRX8sJW713fCuvpUFLBPtgPF56Mrjfquj9b",
  "key14": "52ZY7kXt2s6X1c9CXdKTdkj5fzJbN6jKU3jTxSXrUy74bjcD2WLtWAvN3fTEBEQG4n6eHe5p3ynCjHpj5jGXREDY",
  "key15": "2ji2e8SsD8nB3Ja1avH3ScXmb1yYtTyF36mnG7iWHAiNdQpBfMLV4uaAQKxoKAZZcjmayJya6u3K5rAEAcb4uyDW",
  "key16": "2CXMdUTZuBF5TZRAEwpngcTGVsQJMK8FTaQvMQqFomHUtCKHfoH13d9noxJ1bnhKXEu7G8jsR3CZdKnp5A6EWBJ3",
  "key17": "4d6G8KxrpWfuXxxcRgnu74wnVdi3jr28irvUGkhsHdm6REU3YSnbFUeyHeXR4n7z5aomdp4Je5Tx8AsWcF5HQ54j",
  "key18": "3YJpXnTPQrWJ5aucSJ4tpCnUaPUFvauSkWXq6MhQWQcgFKG5ypmzHNmkmbtc9UK68ChGkPmtLnLWHp2U1P2qqLar",
  "key19": "dvEZN99HkHk3eDwcXms9ELXcCXk6CU5MhqrW8mzv29BMk5SHhPP2JDXJmKGBqBTXUb45KDDQWvmpgR9hTjq3q21",
  "key20": "2QomPsAWvHW23nkvMJ8Lnxj3KVGHeBHwWKy6qUWmxTtfpDpRdGkKJAiddiboJWpzTa8pxUHdQdjAaxMJa7jJRN2Q",
  "key21": "5V4jkyzFVZLvRi85gByeizBN6WbPMVTto1ucKfZYL5JsXHnvC6io5tkvJDfDFHWj4KNqWthYMtMNaZVFwjRnRNLS",
  "key22": "2TKmZ3RfzUsun8mEpTyMd2mjJobNXQb7ozKWGXxwUXYVtSzvz8nLoCbTSgBCxxGqreNHAhfuKMkoiQ9FusTi46mq",
  "key23": "3KeVpcvokf828jAREnHeaLmWT5YNCcABzhdPdVNvMTzHwrP7TunWR9jsRJq7iKCJGVU68Cm4ziCMs9zQ2iwrMRms",
  "key24": "dzb88GdaK4n9nBgM92vSE9477X4cY91sAGzEzD4J1gcYuBcUw2bi5TJ4GesHkD2uTq9U7f6xGVjimrHqqtRueWR",
  "key25": "gsAq3iV5q4S8LFf5jktcZC4DLdBVyDwbf2PXyaQEPiw8LtNTs8jZB7ZfWseFHp1Hm4zVHD1XTvdAKzEJhmwtjBc",
  "key26": "3TjMf5XAsHXaHS854QNEopf5ewPLxRDaiVYL6UPNys1S6V5nXyZ3fwzV28uHbBFwEFe5jB5BX5pKauhdX9ffzCMn",
  "key27": "2XXPNQgvTJaiZMe4PFmkBQzHp81j4j9c5qEaGSYjGXWLa6ivRpVtSowieUvcsSoBWZonC7FrTt6YGxDvcWcuVE2M",
  "key28": "3dBAiLbLpQzzUtxNP2S72FeFAD9gWkSGUUiWAFn1SkcxZkvXHZo6uCppUTEmqxB7y9YaWRF9361ojqYpjMyAkL6o",
  "key29": "51ojzZHLNqcFfgZ8A1RwH1R9ZK35AEpTMG8sztSkSvtLRCaTkNAPZvrcyyCAZZEbn2oqsbNSfYpA9oWhZ8JuZNtH",
  "key30": "3btzsFPVTah9ogwhjwTJXnvKCAQhDbGGZLjReDWJoSboR4HkxV8nNUzTKQneWs72pbiSirvBztjsw9C5xh6FbmWa",
  "key31": "2otAHrUnG5TstZZbYkvPXS6qMnU3iTS8qEDaXh9FQLGV1n5w4go2etrrdvBi9bVUN4HBHXxjVFUx8aZQeioiYBnx",
  "key32": "6fWLX6uCitr1WbKZAYn8xSbD3TnAfqXBS6Lrfu5JmNFotgGF8FChmqKvvXkuCfKjz3EAWZRYSwvPBnnfBz3WTR2",
  "key33": "5uZ2UimFC75P3v2Rb527gyfqq8vN7dxG6H1nfpSJ8xeft7A4eNjwHgTui5BQAm42A92xkEFDyvcjGraSC4VSECbD",
  "key34": "43Xtz7PRzbCYP5P5kwnaPT5r2ftqv59Ep6RGFxn6WfapwjtYQYA3MQdHYqFmWn4kZdiuawFXpBuirCMifHkutjvT",
  "key35": "4Qa7ZFnTzNuQEpLZQaLLtr6L3PrH6rfFFzMAg6nEJvdQ5XDamiHZwx6YrEUjMuqV3Ub2wDbgzdzFdAJp4BVn11qP",
  "key36": "aDpqdCUarxwBaU8t2yvFTmZmUBk1DoAZhixZtvXzhRotxV4iZCwvN6qEsN1MgGb7ZLWUzKQoZNUuEvLpDpBWUXh",
  "key37": "4VKa1bcf1dpkX2V7VnC6LPkAzqJhdMTJ92cdGGo543y9zd1UvPy3MYC4f3XeBb1x2yv5L8PK6aPoXeF3QoUU2tLv",
  "key38": "2NhdEmA9Lp8XsF8z9mZ9RZeDGhnijxL2V1jFjS1s45pYnNt4TCqzYPyYgV7qJwrcEKXkyKZmf4CfPuJCgai4MmSG",
  "key39": "4UE8D1esC7nHmqgYNa7CcmebDXcD5P6en2KKdS8jZMxRMDZ135FG36pRY8UEAf5eUZEXfXFnSuL2snhUgRCRz3w3",
  "key40": "4Dksb5h7gexzLoVFuqGzsneANFUrdDT67quR2eKEzGxSVTsViq8CBhzrSPoR5v5Q6C4gXXJRFgMvu9hhdmnDvXky",
  "key41": "5HYMtw7pbheHEsJC47RhazZMX62Qjuj9P5vaeimTz8JWbmRn1yrxWhQZEmCpgBeewNVb1F29VxFNd2jPpxSGDTVr",
  "key42": "5iM9Cgk7bTpECquXtpJNdDZFG1v5SCAJujB2AxvzusKLBLqdhrmHRhNjdGQvL8gGFdee8q24Pxmp9L9wMg236Lym"
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
