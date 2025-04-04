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
    "akdyPVMBP1GqQKt7onkaHEhNW5bzajEBAGhAhfRxsefP1DDTDaVEDZ2r71TXrPHTQ2ahUCKKmaxmXuaVk93N6J8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vQMy1TCTEk88jcBRMEV5WZixN8w6D1qbPhxPQmYrxTVHvExeoGKj1M1EnUKgHiQrNRRd8QvwuMGPxpq38R4hcSA",
  "key1": "5HqLArnV9LLWUanALCxVsbrhx8L365wypSsJBv31uNwrjeQc6cYbwuLT9ewXRPT8Spf3Efzhiqb3NBC5huJMhpzs",
  "key2": "4mY8yANMq3LzdVLwdgMebHw1sVUyaEnju4tDvECqMovRsR6LbAZnqvghxsT2HZTjPbyTiLUaVwzA6bbNAjxJK6Tg",
  "key3": "4aKhNpGUREWws2rfBs3Rzdcrv64srBAEVytvoEPCjkXytbDaAxSCiMYEHrciSdmRznN2WtmQnDxmUcE9uabFUvUy",
  "key4": "HtWwgH8pzVjVJ5YCZfXGiMYwA5W1UEYKz6yQMuxPEjf6rJcrsVEfeiN9D5cJfSY1FJgGy9wQSP7KYcDqNjETaiU",
  "key5": "44hASa3M5BdzJUzYqMM8wmueV14vM6yk9ymLn2CJXnaXmcbSbdQrwMScEaJ3nB12kd8eVRhdMnD6FLe89M8skDmz",
  "key6": "2fZsR1iGqmeibvt26ZHsUemxkoTDNjBaVokuwqHZcLWHia9vi53rGCVs1LHh1tjoRL3UFCzrF5iMgvuG6e2xDpkd",
  "key7": "4BALAKqS1h9eRHCjnVkG83e64hH6BdrirgyU6Nf1v4v5T6ZZhz97beGyjHDv79WGevhiuC6SMWS4UDDY3ne6gDPG",
  "key8": "2M7m1XBhPAFk4fMkUjwmvkwLLR8UJy5qwNr7Qd9fYr17kkoiqpGx2ASrikP3F18mopd8mPkySzqMv93vCNMi3UqS",
  "key9": "2Up5px6eNpqDWTPVyMrdEMRsC9pnv4pEgyaQ3v56CJ37PtycQcYCyFv9LX9M7Vh1U92UWzku5vbteXBskLuHrzbt",
  "key10": "5U6o6TEHABBtk66A5KfPmenGNF47G4coTqvhmcDfmc4rezeZnvemBWRNjiAPLujDMXwgrh3nTD3LEaJnvQsx9v6u",
  "key11": "2gxXW9iLUa6G8iqgahD3iCkkXdxWa4Rnw6FRbKw3cTRwN7EfSDDzfGQCpZ278GAqZpsQDiuyYWmqY9uJoJuQ7bk5",
  "key12": "3AdkiV4WtbhjA7vbGpCQ8Nxf1me6oYFinYXoDfFZy7GK8X3tZKGaDM1yzrUXnbHtf9Vbz8f6KaEGb583NgKeo96Y",
  "key13": "2KipQarftEsgDdoTv9uLBEdSX3iV5jY9LWmGBiWPbmnC78XEu9qbE93gikXCac6utbraaPDtmMUGgS5j8SVLxXLr",
  "key14": "8nTqACQRGM6maskxBUZSy1vUHYbKE78NDgv12oNfbG2YNMWYRiuhDaoJpM8pXQHEXSYxh1owv6kPg6RHbenVsN5",
  "key15": "2MS59cbkjaSaNYT8XFLSyBp8k8nKgn7mijPezE1nrS6ZSikJtrofxeBTex5z8uK5HPqsY5UpDxkpQ4MTDLzHEQ41",
  "key16": "JCWhR6xwbs6VL3e43QMEYvNhkCSU7ZubBvoS1yiPiJiRe8WSJCzuszVSV8EzmAQLQ4LtAP93eLYyZJg4FGuhYHr",
  "key17": "4kcLBrDkX85htKRifr7ZbzDSkZuKq6WuKFG9vdoPdWrCDSSryLvT3BqghfDAxMWffuyR8LHBkNmqePGKBVMWYifY",
  "key18": "5P2WArgs6M6Z9BRDcFdNphWHaEtxEsyopX1L937LTeExQmxRXRD2UhC3cnntvFHwqXp7Y9xb5iaDC9BRsKNyh56S",
  "key19": "2m5eCRfaNnZqypq9moCrE4cLjR618jkTF7CmLsUKjDz7KhKpdRC4NSMFL8Q9NvSmPbCmpiM8F4MUotwPNJ6jgMRk",
  "key20": "4ADhVaSTZ22AAZpxPF8vEF8yosC6XJwjeR5CTPDXWvF6iBzTygCiLWgFc1M8RCQmXfq5t3eS7duoTTLqJZgC8bEM",
  "key21": "235D3Th6pDZ6p1HTJhQjJjtoXxqiPqj1rYGzsn3Nhqz5TfBLgwUMzgAz4hNcsvp1wVSGLHWah8yMKNdtjFBCp1eP",
  "key22": "pgnPKHPgLe3UvLQJDyc5XU4anZmSdoDLeZovyBKpRsjTHQhBD56dfZYzbHNnnJXpixME3w2nGFbgakaxWXxiXoZ",
  "key23": "4EEmgAMqMsgtN9gNjAkGpreoURycrYyz23MQS4eu7zsd4Mo51G4kMGzADX18xuRTnpbz8t5R6PECBWq5mLfvFQem",
  "key24": "wRoMN1DXxjbbUnsrQ2SAeaJdKJzZu8pzpTMF78fkGPZJKZtroy1Ex9o9xy6gUtKBv9iPxAhyC6eLVmkivpuyfkJ",
  "key25": "57FgHX5YhX5APkRtWBVMuwZe98e9q1ihJ7GBYhJX2cwjmZRWLPttgKdGXXTiFemtvMK37cMuyK7Bgke2psVesHgT",
  "key26": "Vt8jDkHF1193RKYACtmKCzsV9ouPPyhLAiWsMxGkN4CagW5ay67ABKuUyZj2r3KQSBRLhkwvGs7qZfHFAoJJw68",
  "key27": "3uUMxq59BnGSJ61MKmUBwJTJzHLvzYSCE16NhuaJUdzzAzuSyBDzq3catAddLs9bCsBp4nJoodZsGHnRVJ9Ewuus",
  "key28": "4Z76R97NPSeipovSfdPRV5Ef8b5TGyhtZftAShWzSy6mCy813ZVFZuYReXPT2sv9XvxHiU3pienzyqAxTY6kkbmz",
  "key29": "3NUcFDccDwxn4iawGu9c32zcyFDe1PC3fjR7zUorFMHWgkXBkAf686DnGnHafYTXBvajH75FEBAfWSPdQix8Cw6U",
  "key30": "5NdSdCkWaKFTvjRjsocGCt9R6BPeJSrCtYkesUPKz69XPAvoViVZz3PCNXYRt9NHDp9bS8LVZLtfUvgnP4mjLMrs",
  "key31": "DGPay5ZdNFPm5Qt2WnwCfeMesKsnkEqxezoqDma48gG2dMZg12Y9WR5CdCBcvjZmDBaoqzWf51pjn5cfq9zyUYy",
  "key32": "5MuqCUm1t97AY2FE2k4qx3auzgXyrfEMfp2AEXLMaADQKB4AjcYMdJGdMJm57NvFo4hEX8oSqvoKdETva2KNXY8x",
  "key33": "2JQMW5BLMndzwiN6yvujP6psKxBUsxgT4u4DPiJYtNaT4c2KuSshW1uWEUCY8hoNU6zTRpYR2nVyyZkE79NTmznD",
  "key34": "44uYuWtLFCuV7a9ecdmuEFL7PQDEDxSnqAiwS5Jwd9Q7gZ7nLRNjxEmyb2mCgyRZE5riuDax4midotgbVEZQMUGC",
  "key35": "5RYW3LDCwXhqdCsh6cKcxU2nRDDUwDURgkG7t9XuXjABBuVoFGSbfjrTPdg5N2eR86vjdttQTJN7tKahRnqYY3Ph",
  "key36": "2ytiYobJwGWe6od373S3beAz8FhF8xvEDG2S6QPSMaNtJuCQT7mFEuPet4Q8ebHUzi39Mc2ke6Ai1kS3FUmd9ZmR",
  "key37": "49RWQPTxL9U65S7qtfsnUyfVyfYBbD22QxQrZehVXQ15o9P4CwTLfmhZ3grtMnF4Qh55eY3iaMCsoojycwmuUvVP",
  "key38": "53AWWAaE9s4fSH8U732KHsC5tc5MagqvzbNMUztsvpo7y3RzFmpwKvyPV6D7PHfJxSPCVPn6PrYsa3HdLc4wgsns",
  "key39": "7hDv6MR3FSsKYku2VnJoo8gMAu9v9WihY4kqxAd3nbjGwpDjoSfzgVWfydppXf29RDBuATTRdBWcYTU1Qs4BiW6"
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
