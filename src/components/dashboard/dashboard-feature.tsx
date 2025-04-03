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
    "4UPMebzozjGm1q3KjPhTYyuBRgbvmVn8P1mLNiVgmvTmBKiFTXq5LPVeBtweuFRz5Rcpr2okJHXfE3gaCQ2yXiau"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4augjuYsF718EA4Yz4d3ceTVw8sQ3ToUHMeLWX52mgcjVaNGfmKti6qGzERzYoTDpjH9NPMpVPvF11DxhWJDYgYu",
  "key1": "32NkjuXSVhojqmZ9kJEk7EpqkYixYtf1B14ekJEEBe6GC9YWtLj6wRVC5c5MoR3Mz6LEGPpJKRWtpGKxhWgH73X6",
  "key2": "sdQccmjss6h6RE4wsrLg113yUE8xdwD4ngbqDi1LSXZ9zYXi6nkUgQw9SuBe1bAxafupMd4W2Pomn4RjDrpuyW5",
  "key3": "53otKb4gq5PsQZGXR2uGv5XzagoBofpubawoxz2vJjV28BYAWo1SxgiMKigw8XjKFCU6HLhNThncv4At6M8RhvD1",
  "key4": "GmaqNGTsdUiJypzcL7i1iUuEvbUfmb2MZwm4JbmQ2HWDuEQh4HPwiqWDwR3egKEGyWmPKs1HK9thjJujPBACenV",
  "key5": "3yxoLhwHLqYgetpvjSVqEpw4DYmqN145HPyF19mep2c2C1aM3pwjohjewhdyeijuxT9zbupPLj4QkVhx8VeiPc2n",
  "key6": "3ma2DmE91KoYp6wVbHMZ1gR2zYZpE9nNMse7xvpbmmFFCU9AMJjq2nCmVe2FfW5JmPo7Py3AgLwKXws4vJmwG5Vd",
  "key7": "3cMHqc76SapwkKAuqrG24hpmmayG2sR6ebs3zi8Rks6tLktwiCWAPL5N28VMn1yUZaf5hqGcNTg1osSFC2hYCmbT",
  "key8": "4TSSRUZHyQAws2CLYrGZqgfySFhy8JHTwQis214AYiUwGC4WBVFsYtoTpaKjyJvt2zPf4DtkLEPLfWDo9RJEEbHx",
  "key9": "3VwJMuzh8c1yeZW8cW8YTwdUGK5Jhf3F85G1dLq94kFXbDyDwV3jPg9E1MmgXJnReef8AEXTfTioKNVP9bQ1pVki",
  "key10": "5rKcuGVjfLeGsHXkA31w3Lfbge4iayZriSxMwe3Vak2UKod31a59JRCwxyKbssewvFNFZSRe7TTx4eanin7UVpEQ",
  "key11": "2qPH7zfLqQhaJTY7MzDYaEXSeQyb2rqu9rGUs3FH1qN123RwfjCFE7m6VSWEFnJZuZtSZrQ7MSVJ29LsgoUbYAoP",
  "key12": "45WCj4RUKMVUDCZw8jShxaDf9qZXXf4w3QMK3XA4b2kDYsEt2aM7BC4Gz1cN8c78y6YzjrCcpfqwtC6UvZsq49UQ",
  "key13": "5aZCGxQ4xemdWxQiRbqHVz1SqCdAWskPYomSMhYf9Ry8YM4PCoD7hcq6S6vGsUHXEiA3g7djcLunSXJP7K7d8d1h",
  "key14": "65eMasv51ofgWSYSvZ9ub2rTCqURYUtVjXNc6kSnnNK7hWFqr58dB8NR4GvQCegGkniXAWqYiUw1a18pgLsqUkKc",
  "key15": "3jzXMc3WkrjzRytfiXNfE6YmejggpVBcTYKCd7vmQCf1JVxJSrwdTdX8N4VZtQnnRrQQvqyz5UsXrrhJxEW2ZMBF",
  "key16": "X1AiV1MGK9r8vpTF7Y61YoFHeYHHGUPEDiD4rPmVAzVqghCJKF4tvy37BpX2LLN3sTiuuqzurTmJNacR9HrvAXb",
  "key17": "3cP6dC8HsK5Xg7KQavjJT9z46QgiUCSzFmc2aPCR5eWa1wBXqHzF6BWY5ynnr6XSm5zCgAqKAK5gs2aGENqhpo8t",
  "key18": "KbLJ4Kqhps9JBd3ZHUjKF2fiVn715vgiFsLhJjP8ZsSwqjGu1Jhfgrs4Rz3BxXUBAZbMY5X3MqcqakHWZMW3PBX",
  "key19": "RALxdrBDgu4yMHdMuQagxzyvdEeafvLTCvHU94HVD1Wp5d714a9wKf3kn9Wy6Q6MBp86odfHUQgkCaa3nLUYVxa",
  "key20": "4c9HMd6F8JCo4Yxf3KQCaPbZvpxbWtgPygtGbpNR4CofEZNQA5sVvg4BphxeVkGrYpGtMgRPzudbof1139eTMSnf",
  "key21": "4yZDgWb5rtoonzy4DFrt9aGkSk6mJL9Cr5TNYmiACCtG7MtLpCA475mohdHAQg1FW1iHsxaVKgn958mb8LzSineB",
  "key22": "5jr6CG7i3zWqyfzDo1u3gJgRcsyW1H1qidLtp7Xj1U1ci6f1gDi7wMkUysmHs4M1qj7m1CzeC9mtLNcckCAN1NvD",
  "key23": "4h4iRahRaFNqi5cXJw6SSQcUZ6stW1pRhVkjt7b7F2BGuFeFpAJa1E4TESj9X8LjGYdts9a32VFo94X7bi4czW7o",
  "key24": "3qETHwsdQ1axAsFWinAtGsX3oBuh6FT85zJWwh5Mp6mVTMXKTHxmBf6faVXVqBYPC7jh6omZJW64ejC7trodzz4n",
  "key25": "58v9nUdbNPBViMaBQhCor3sbKfKVdzLzzxroQ9USHGSpYV75scbQKNuKZiiRnpQrMe71EvX1i8ktZHWimRQeWY5w",
  "key26": "3qYiKmAdyzcz1qyzpo74FtN53FdQEefH191pLAuYAbRgML6rCoTtcTsrRjV4qm8jBaXnRaq28ncXvc29jwUmhrNC",
  "key27": "5FX24jEGTAC3piGmtqgkLZp2Kz9FFbBPXoZ8biprXbcxNnDiDKQ7WHQBRnC92m5eG27NyrqD8PJVwtVBXwA6msPJ",
  "key28": "5bo91dkXB2X4c6CvaLQL9BPqrZk81Bz7JCiJpWeb4VChu1xzU6HZq2dxfNyEQQrdD126mxcXrGRDFTdzidcrbFY9",
  "key29": "VVmezz3i9Te2oKEsPZiQieCVbDkwahKknJuGJhg4JBvGJv4zncP4cR2RcMgPxFB4fRvBtBpYQLC4JBcGAiCuZgR",
  "key30": "3BXFK4tz2172m5JVq6ZSej2MxhMegvmNyrttw2HPQjC5XbhwE7wJocLbE9qzgG3RbxSfU6Q6hHkVq8QpnaXe469J",
  "key31": "3PiJ2STrQ93Po5fjs5wRRZ69QbqRz38N2Mtf3cDfcbCsNpQmenRqu1ZBjLfwA8M8n2jSsRYiEZ8GUXBXKXZgpQPz",
  "key32": "5uGLUYpEyUVYyg578EpZxNkE8Kmtw31Fhx4FacjBAb6ZtKWq8y4D59DYFjCk4j33LVZ2XPxMTj9EsmjzRodNPQ2R",
  "key33": "5eWWC1TWrbc1CWGgE5QNigKjkr3hSuUkh4ydpaQPrdPctjDMuE37VLXv25xMvga4DiZZ8dNn6i3E68zc2NdngdUL",
  "key34": "5WCg5YoU8Lu7jxWbM2oPQpka9rvDfrCFCQU69jVbPxHZWwGJo5LsVDBnsksedBr4HDusj9uXFT4B2azEHcAUR257",
  "key35": "3Hfev696spnAnKrkbFewQNXYQ47kK6EAYhwGL8Yk5J5VNw2f4xmnLjKm7UshbK2LXNQkzsaXyuHHN9FvA3vRJrgo",
  "key36": "5qBuAyCCa6eZqdgN3HtQt8L2PCkqZLaM3QzE5BHjn3mtFiDgmrBC1sUnovG9LTBr9i5xQRhZRNeeKHWxkP32SnHV",
  "key37": "5ab33nWmJYtVJmbSpbXMMvXCTdrwuPA2MMJsZBuWjTeS2MrTsQByintQtVkjxmGsrz6jCAxXJZpcBwvuDi6nMavL",
  "key38": "2gfR6idbb1xjgf8GgbQx7ERGVjEsFGiKMhpCJ9G8SYA6xsfKdYEazuEeYFkH4ef6kwJKFqZ33jLBSwnk3ZJKUfxZ",
  "key39": "3uJ3VVq1JXazkqWWhag9gyjb53sDfCRY5U8dbdxddqyapDrKSaaLUaEJMYZtgJ7hbjZqnEJmxc8KtYKX7f7hE7WX",
  "key40": "5UWopdWpy27CfhpZQmSRqUrJbbaF7gD5hu9p9M81tDmAv97tBQPFEErnwHioeVANfE5ZFFtbNbzGGozQBxuMce4w",
  "key41": "3bGVRjvS8MBuF9wdRrsBpCXPZ8aZPusFymjaaG288bKJb1ot6qCaRFgzQxgy2TYzg2jzm75YbMr78scMQAJVARf4",
  "key42": "4RK7xVgmjfTR95fMb2Ym4CDEvEDESyo8wEYZwmmFY61sZAgFB4CgRbnU9b6M2WBMkb4kDWe64Z7DxsuKugrtkd7Y",
  "key43": "56MjzgBmp5kdzGY7nhQaynfbg1rVxR4MiGnJpGBQs39sMMT1NYSEQjZZhyGCYi2jtMBqZoAw4bkCECACmDL9Edcx"
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
