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
    "2qWHdUuHauKt5xxeunZzjBoAjrbuD3tBEu2TveW3NdyhLHaYFYjqW4u7v8Wh4kVYpjzbUBnCCcP81Yes7z3gDs8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q6aRnu2NLSYqjM56yN1wpwJ9a7Biz3WNbkrKgxeMJpxUVVD11qpmCtegbaLES9ZwSfQsqdrU2HkwxWACa4GtmEs",
  "key1": "NWrRBc8fCZ3NHyC31sAKaJHpUZcDp5mcyEZTFS11NsaXCV7RTsNzMEpQyJFtVFSj7WCRhNKbh6VXegiWYTszgLC",
  "key2": "4rSVMkYa7LeEfrEyrx6zLzqYLZRWo9UTA67qrfbFZav6sgna8g9TLwHL4SoSG6MZ5A3ryCaKx5C1DaEHRuLg4Zb2",
  "key3": "3pHXURj2mFbTQhbNcasxP1RyAzmuwfrE7JRgDngLB7JPxmRt8kuKLC7jLJhhupVLqVAJXzqpogfdWQsLvkqxycAU",
  "key4": "5nhWRFfsF7ffXm69ihjgnGuGmCf9nBArjVQPXaqM9e1o54NCyGLK1ikFkS6GHcFLYSWjH2CAEgi6J98nEWbmZXNC",
  "key5": "4c4CCQnErwKMGmLnvfrNJR7GSAPgn3TieMoVS1sytQWoFQEYwE6cnjALHDUjwdwYkYTcX5M3T2vGdWTZ1VwWGRw8",
  "key6": "22p1x5FMNVZbTDGkEHjBVNaVFYcx3HV6nwbscSuDH7ZcaWzSVXsgzxQr2M3CyeTZsmTF8QFDLXBBCdjN573PxEJd",
  "key7": "3tvGWM4acPcoRGq6ZtWE86BDpD9SeAd34rQty8vd1K7XyF3kMurULzi4dzVfzWkDR95QFU3ZcJkfCGZAWs9BknD9",
  "key8": "2RWKCyeAB1LPwMQ7hFutVkYpW3Uj4SF8rSPTLVemhm5CEJ8bQA4ouoTz5MDJnrRj5zNS6NpLrLj8kr8zWfrdHm6L",
  "key9": "4RsTE9yZ88hiDiRw7tiCvk1rv8dFSggQLRarvjosMWXRDotK4VAMRNypYSSwmSXyDsAsCKDim2mU2hmQXVfwu1DN",
  "key10": "4Q1TN2AnCd1vAbTRM5thYEoeLXDnzDzDcHCRj1ffjPeByMKgqiaAuwRtLKj3h7RAKAG188BbH37a84bBGpNtnSQY",
  "key11": "67KYH2E3QxA9QVbvdYsXzHvTBfEFDhqEpNd8m42PmbHGBpEQbr1jWeSqatqfKzNuwhownbHDJ9ngGoChRwhssS8V",
  "key12": "DutwceviS8SqhDR2ri3XkBWCUgkJdcyARxRNgQjQoavs9mP9UjHUrZufKwnkB8EJnnqAfrsy5QHgv9E7EPjV93u",
  "key13": "5DDBhUgtjDXP2D1F3KTehqkNBiZdGDyKCaGb2iy5NbF7WFK6SPPos21PpKWUbKtzakK8o8f2SYcQedyEqyfGXGA9",
  "key14": "5tPAWj86omy9gXbcBZLW7Dr6TW6Mu6iKpEJGg1kXUUP95T6bE3DZhch3Rnga6NFbQ4d71ef84Pu7QqdEz7onCLYB",
  "key15": "2QzmoCzpFnfP1npUBntZFfXaLaSFytAsH2ijqooVAFY1FbTqd5pRnDqkme9PWvgXB9yJXvkmN3XWEqHnniMdWKW2",
  "key16": "3f6QetrDFvzCaaKR5kwmq3XoEZqVVJT9utHcZ4c4byD8wT41XvCMTfKc3UizHvVArpykhj4fGGgqbJzokkLdFBmd",
  "key17": "2WSQMtaphEzAq6HYK6FbMYcZYVomxKDRsaKBgVipHMGgohKCNMntAfPDb4T97n675kEqXfbyLDQXcPTkGfpoqasZ",
  "key18": "pqTnznPVc7TEocsXL4uzExQhPw6yU7JZW9Co5TfEdvXAmFy44RWajquqWQ8HSLNwXwEJJnjDr7hAjnLkJVAvU2h",
  "key19": "5hNFQjpBf1rEzKECJeFuGDoHnTRBm4H28tQusnkHaQzuU7khQQtt2bAsstKyX3kL42s3q2treBXiBDeKKZo6AtM8",
  "key20": "5CvejkjoQX8KmY7XaTtAcsGrBm5gYcxBXe18L4vF8nktATjPbRMUsa9ioS31TC4ZcgbjQeVZaMfzoTEkkit8G2Sp",
  "key21": "4BUaScso3GCpiSui4swz57FkfauVuyJZyDXJ5YhtghCs6j3mYQ5D2k9knDJVyaGQpo2meqJU8asPv5xVLmdeB9a",
  "key22": "35YrreiTfzr3UzaZ8LUMxGFv1cZPrYGQ5DjNnB11K4fUjE1pTk8tJVVVajTwMmgMBVzXCfbbts9eSKTNtr9q51Cz",
  "key23": "4fChMdV1ntUsr2B3mAzVVeEdSALNXr67Cat23Su8kaCrL7xGz6LAXXqDrXH7RX4HogYKw9ZJb52JdEv3kC5c7iGK",
  "key24": "aHutuaGmLDyKK487mReTqdvk1SJ6cDh4eftmq8wB7Qimz9LS9734qTt5V738SUP4bpCwffwnda68fb1Dt5CVbnS",
  "key25": "2f2RAfg2vdxV5RHccGJnyNJt2t6s2eAKhEGoh4PsVwfu4RJ1ue11uLtFyrxpVka12Pk31UE85S75MfTd9aJfRvzU",
  "key26": "4SGK6a3hHgYEMo9P1pmavAj2uE8nHewREJhtGYfjPAKAq1PAtZFPRPyDtUPk55KgFRquqQ2VVqGzY4xaBRHWUkbv",
  "key27": "37hFU2Aohn2AxG3aFMnmAX2EiNGDJK4efanYeCenhNQ4rTrDGMD4QvTNbvsmW5kAEk1d67W9eDNMMo2kFVAtexDs",
  "key28": "FG3iKxbZQCELrAWz3JwgCz2eakvjSPbuxM8q7m7v3cN81WkKpEREqP9YLFXXTZeEEShNAP5CXXw1mQzVnos36eo",
  "key29": "2hD7ZDcR8cRyXkPB2bkndP8xFi73yqBL2yQSt2RY2coPBDu2TkKj8ukMHL5kHawg6ySUHqJ1kUxLbfZxC7vjbvD6",
  "key30": "494pwBvTL4HL7cwuJHFk156m48YbKF5wrV7HbztqXa7btNw23nvmVCD6DtUrqH8Hpw39iHXS5ehT69NXYj3pfo9b",
  "key31": "2xDW2hq99GCELe1fozWknVrD79XRcizoRW6BB3U4w9LPP6FUwaFnhpcxsc9zBHK8ktS5XNp7e1XuAjRSDqyQZ6Fj",
  "key32": "3tqLxZRrBZhKSg6WYrgLf6hA2RMgzNjNHymcFGAv4F1ngABhshGSTUB7EFLcmW2Toy64n4VDKdGX35nhqbvSBCp3",
  "key33": "5xH31hCxN6Mwrz8am54tmDgtYsEukfoaNm4ysX3yfRJbCyuBDzJDnHWbESkNzx9X2onDuB3Q6AW7gHDYKTsUoCJ1",
  "key34": "39kq6xmCikKfXRDJ2b4qyYTs3fSmae9havwXuR2CSiwH8EuVjqmc5VadqPn343HxmVmh9jqWwR8Y13RNE6tZUTbB",
  "key35": "aUT9SxTZowRnFcxBopEPWpMoiZDJJ5BHedqaiZrV3MSodkuFhYCxgTgKaH4BTD3Hu4eVcABRLsFjzBagd6gR7W7",
  "key36": "uVjKvpjoPPTxkEpLZmY4B35xR2V1ekKqUM9EKk7KnyaWqUyEeJjNkG1PecZJLnqM3DqnDK36exF2Rc6EqcKMn3j",
  "key37": "tGZwnLQymx3HKVUrdEycYNAXwmWsiyrpAGwGwzVrx5p4N2TNtECGRRHxhtg4TxSWkPd6pSCnCfUYK7QxDCH2zcm",
  "key38": "u9fYMb2rZD8Q1mdimNsAHQDpxw8DvyWM9sXUp2zjWCCcFh83mYeZntNu37uB7mAZ3uBrtyUpzoBqhHLtvPQzgv3",
  "key39": "5x6QiFxdDUQYvizgMj1oyTtjCLRznyBCj4ip5t4ma1cdnHmdjiFpaVfokCEmvEdbAreJQ2dAXbUKe6a7uJotfdTt",
  "key40": "ndZZGDf6bJJPm736fj1WQ1y62vn2WfxtBHf8oUjQPegPDtbfnYQSL4H269i4XrFz91CDY4tLvYQbovMj8Gffn1Y",
  "key41": "4jhdAM3xfMFbMLBqFUUPUJnmNLaog7XGjpgTzKYpr8jYCM1b5TBgkQMHDUJfFKwJSxCvtULrM6YoS3R9gk43jFoe",
  "key42": "4bY3tqYpZauus4H6PfECfV1EJo8KwTzbNke6fa6djqfWGsAqpbAoGqzBBND3UChyE5dE6P8dNWK7EYNSQ8p2Rvk8",
  "key43": "5yEa6f5Ggsuy9YAsEMs4zEi9KKiZxQtPrJyRBbsH4qgDZJgvuGgD4cML4rJmKX7zXQBiBYcQtSRz4LgeS7tnDJzH",
  "key44": "2ygTfyLSeE7WBQpyFMy1Gg8LLVabqYDvvvNGbTiZ3ncUvMKBLtHjeETicTm2t38ESBhWUHvaxVoVKzacpAUoiMpY"
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
