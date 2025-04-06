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
    "5qhdeiw3g16V2hTWdVzKj9cHU2CMtefZCfvvwvSW9vZnex6GwByTV2W4QiGLLNasTh3YR35AqKn9phChqUKqhu8D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZkoTC6TTnhSAz8hNbTgA93rSgoncciGgLrdha5ogGbEkpT6Ny2SFZLtHz5e125VL8NvD5PjhyDy4uZtE4ridRjb",
  "key1": "fBNbHX6hCDh6cYF9keuqruEZiKfJd7j6Th4ReiBxVacPm6xE4GpdWg8ReadQy1TLi7sTmWT82Me6W5C8CFR1UNX",
  "key2": "44H9te5TFZK8cBTP6Szx1qLk8RNxs6hD34PvdbTcBFyNpC5erGcZvybaCrxGBTCZcytgb2szvRHzNHVDfjKMxaPv",
  "key3": "36wkNVc2VzSLpiWb8akPbcmtKxX4CLtguQkpPbBGMvYoFH37XYPWSHWcfEtY7CFdiWUeq7qwn1Wh3bwypvshMf6z",
  "key4": "67JbVmy6ijpFNwMkZfLiDcL1hMgQD7FXf4ZDJdg1WvE3KjmiWFCv9xMzyT4z8iZZDYeXYxEeG9kQ68WAinhT6hh8",
  "key5": "5amv8K4jjoARKvLAVpqGVPHQdVgBSA9SBQPQpVA2q1rWov9hdvRUZwZ9JCHH4mZsxeduHq7pa128v7AXRGBcdED8",
  "key6": "5MmTrJgmqyY174nub56GBgHpTduA5wmdRAdzNMfsg5mZnh3qGjqpF7rHmHH28Z2FyYxPdB8YmDJGudXLJ4LkqdGs",
  "key7": "4v2EKwkySyXf61pfvvp6TZoaY6UornmDMDRThcoLHPnXt8u5WXkyj9wpMRbZ6EBeY3eVi7T2kVpmqbbWVSPAnZvF",
  "key8": "5UiR43PR5trxMK6yXyqUiiQtUojVpuuQLXz8LMyGp19BH4nGsEWJ1NHcg6661DkypPSt4XoF8GBhvAQguiQdqzih",
  "key9": "4u4ffqBt17h3QhUswmTrRFgsny6cP443MsHvtP9qk4kCMB3sNG2BpoNxZYhKZ1gv7L5XZEYmw1dtBSTksi89pUo2",
  "key10": "5fP5Hgkq1TJRcgyNgixTZ42zQfR7Qa34AazzYBcUwJ4JtS4cd5g8NHy9DbVQN39ZwsUWf14fxoWQmSe5Envxww86",
  "key11": "3U6BGDDRtfnymPYF3qnAdcKT6appafuJ5e75Xa2b2My85g8ezDkGjhAVCFqXH373KVoVu3Y29HN5cHYxPUbpY74g",
  "key12": "5gRfBeNDHtfBE1NUfJyQ5zV1nAxbMkW9VjWouNrhxferKViV8ToQYk6RvJKfnsBrbqstcDCufczJRhPAhkigCZfx",
  "key13": "43YEwrYekMnzLkg8bQtR2aP2dKxB4cY1HopCBBpmet2QqZVnv1TZ7eyEteWiSdbP5rCiQDmfAjU9KMtfVnD5WbNo",
  "key14": "66TXRaC9G1Jmd3xW8x1FG3AiD3R7xzukLq1be3T2w7ShSoNF9xniSBahA1WytK1EGT1RXbceTSjeeaxYTTVoUYLH",
  "key15": "2wSRHnj5FCrJvemLHzrgHXYPwqNqPD2Hd9eEyWGxKGtKeTFQAEpxzSr9dqb8YyQKogAutMyLtnsKazZ535bwQzsX",
  "key16": "2SpQgowTZQaTk2jr1CPVuEha9hm2s3DvPuVRn656CjCmtYXGK6GPrb1zs9pfhpsdn42itWXTFB8YVvwYX3UcH2CU",
  "key17": "2fe3ekRSVKwUupYuwX8792Utmdy4r2Ra1nYc58WFUD1tQKStwRwEJ9i9iwURJZPW6Bj63eRDHsUTf9j6bCdqP3ww",
  "key18": "5zHSj7pmVLh44ss2LHbDRJHKR7GXuRX3VkGkevoKSPUyYWrMBiTxMiB39RZaq8PTS4qHJvZnarGZz3n2XAGeeG5T",
  "key19": "7JywQ42ojM9t8rLwv5eN8AE2mVBCzkMw9MTpLqYVcyzJXX9hFCVgGgFd9AzHmF89Pa3nVbHwS9ztp5cuAyM5ejx",
  "key20": "5BjPemPfDrg9c1s3BLLd7bkrHp11ZQLYzPi5CEueXANGKyeSL8cfbgHNVYGx3NSpvMPpcyZkd9WdEMeT1vsBBidq",
  "key21": "4PdN9dCTnJfEQbb7BLtSpSnw1N1kxtrV4iASQyitDGnopfk6odzi97dAsToapMkk4iaRm5aev4LXxPE6w7vG4mKG",
  "key22": "3VGqVDCozR46xdBCswxBV54pnNmp8q6AtUj5zHm7FHns2QgcGPJmtEiNuwgFuHhffv87rgCerTKJjf7c8E3wRYhX",
  "key23": "5RZgxoaNY5SZoYgAvLpVLtQN2UDCtFLbiEuJWXRbTTr6shfiszopubdrppx27AR2kLzpy6bYC3BPqtCNcqhGxjR2",
  "key24": "5bzjjTVrvXF8VrxVj5UX1xPBeVLXT2La6hb89ehGZYQ7gWvgJYSh3TpBEumo2B1h3C3SZ5ZsNMqvWAECXP9AggeL",
  "key25": "47HJknSwGBHB6Gxm2BRVrLm52km4WNu1kyfWMw4fHJrpvt8zRoVSJk3sWEPAdmKVJzDm38dMkdUCwJ2pLDf5sXup",
  "key26": "28AQDUQpgjntWPcuCXBoimSQT5iLHPQHUSd7Zp8vqXCtCxtn959fbeH5jh61MFD96pA3eGeLBquMmHSXsMtvxywx",
  "key27": "5aoM4jZStqE1R3DUCDoeK3qNuwzcCnXePNPqjRFnHPj7iyDwr4MP18ShsAyMmhSwUHpuNjZm7RkBC99Ls7kfgP7w",
  "key28": "2j1YDgeWAYswZBrBq1WJrk5ba7VpUuVEcv1ANkaUvBSPG5r51v9edco2tDCDNpEKxZPhx63LRNj1rpDcGYgG4zTk",
  "key29": "suce7YbyGwEYpvVWhfNjFf14bcjEqgyvH55amy614tSoxikqT5nUPTE8twYFVo5yTSdB25y8Y6Qi2uDbLvJp3E1",
  "key30": "2jkjrb4SDH4a9MxxngNcfL8cssp5w4AXsDhRSPE8UvNk6pR4A4saX8VusWrxgsFuUTvartyJ3XqoGbqcX6wGFcvt",
  "key31": "4iGFonSniF8uzzYz6RKXSE6qDor5aK4cBzneYRXb2v9AF2SwRZjHDKtfTidq3z78r1Fqf7Bri8F72jGoPRymGEdC",
  "key32": "4cqqJPMZVaAHQ8c3Msg3Kw2Y8dQqNwymBP7kGxyiRwt6Sg4NQaBaoZyJ1AD3SfHU3SAmH2Gk2w9FuPxkuSgJW978",
  "key33": "3pcSwrvewrbwrfj8eCFAV2D7J3ja1t4tjZXYcPsqa5V5s7aNimZ1yN7r6RJcgUDs7W1GifbcpUpei21WBW9ciULb",
  "key34": "534ZCQxhi8Ehn65QsSUBn3cDgByizvU2ZKCYsHvQLhoBDpimxGWW5piyGeJzKsZh3uPcSFEETqZyePCghy2zX1TU",
  "key35": "2qoDyx4FTBSTEHuTjKqQxszkrAZHnL6xdac5icEVjFoqMmME5oAytk5ngM8XEbgBPKBn11AhRfAkdQ7SBW2oRvpU",
  "key36": "5mRDJL87a2S4D2FuwyMZFeJAZZ3T5iG2SC64XTesrW1BxSS5KmexD4njJUAHp4he3UPnLfDbtXJPfcR34jaP78Mw",
  "key37": "wdARAa5732G14noviqziaoGd3ySCxayUjgzjE3rSyBVVidciB6beBTD7JnhAQRny5jw9MBrhUuYWMJw4dNqCVrD",
  "key38": "5NpUx88zQwpmEu4naB43eU5aAtLbqtx5QrFhJQAn148FzJX3fMvUt6pjni3yEppSVK9q33moti1XJR16hX8gEDzV",
  "key39": "2wpUpeXW5JVpH4KHHU229ZZuQSCioqurck2XzfUPhBPAJ7PDH3adZAwhayBWjr4TiG2ubhXo7Y2W4XgCKGoL2Uqu",
  "key40": "5QYYAn8kXkRFqhq6UxVbmt76KUYwjsRzKY136sQaeDQ4RiBhAXj2mGpQCFqty11kTwR2bzE8niukH8UzuUVB94yq",
  "key41": "2R8VGcKPkNe6i6MSHa48deVXiXGGDqmHATJLxyHc9XmH3oZsJsoTk4RxYp2EvqSfeG84usbayCqqL5PoXNqvTUr6",
  "key42": "5721G3upXaZvzs3tTVDdt5hkgMrSqomAZcd5DiQPXsdzXWzyszZTavjiBtSxvtasZvg1oVhS4uszGpVCJQajxkPZ"
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
