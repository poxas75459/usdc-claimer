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
    "aK1Bezch945tZh4sX2dda8SmzvtsmHTsPCbxXnaaZKh9iNFfGo8DjzeNG51C39BUaVPQw1ouv2GiR9ZheVXhj5C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44KXeYS5YDu1dxpks1drCXzXP18cJfAivBeE1To5knbofMQGHNEmSSrG1UfHRzXP9jEjJkG5Lqz1rLkoFxax2J3q",
  "key1": "5B8Bt8NvgJhkBSzCJ2fjnWKR8PbhJTi5NDy13pkSkPekLrBrcCPGu6prV9jn1rHPvnWztqb1HGkLtmi4phBvr1tM",
  "key2": "2VLp5KefvyaBAGnpTuNZiYzrimN56gxTcERGA1e4HyxDhoze3DPYwcP1FiaZ5aGJgpL7tCaTYiq9KUVk6aJeVjBf",
  "key3": "GyfUB53TJpRZshkonayaSpa48zSfrSzQhyMRZpoXwT5PuALe95EDtbMtBfjcqSnW1HN6sbXvsabygiw2dz3ekw7",
  "key4": "ExApPnxE2E5BivUeEL7uSfYKdatnvWY1U8FHVpqoVFydjWM47zgRTGPtHighxBMtivWhg7EgW4BTf5ByvLsTXAJ",
  "key5": "3kKiX12eb4yZ2moNTFtUzbkWsVaCtCUkjEkURpXjzaTC4dq7pzyxXCths9ovBodANDahnfkabkF4RMFdEfVFdooV",
  "key6": "5mAm7wHfA6s7eA6nXFd4ZfWkb7oDuoqifXWN4sLfJE7XgVtPSsq2hp53LHE57P8sx1iKB2TCQnZhKEt9iAKnnF8g",
  "key7": "5XFoa61PKG7H8Eks4jJco3nWGGjZidSfpBRxcj2abYp6vHiQjbYRvR6xGDr5cpzibb7odZG9xXogxar8zZPZ93qu",
  "key8": "39F3MSgQXqQoaHZy9jm4X3hShhSUUsXoqXe2kZuRuZ13EH7bFMzQrMZ5c4yFPE44Z45TREpx1AxyABGiMqfumu9E",
  "key9": "55Y77TzzqYtY1kZTPsmZXF4FqDGgDfzLBffeUJbzfvcKFqqcME5dS8FU7xNoE29RfdDhqZxBYUBa5HWTnz98WTCU",
  "key10": "5aPXTFUA1yiiujgitZLWnXWo2CfBaqww5fWxRSu2mTr1k7LLDZof2DPvgiqpFPB4K6MyDikMmFQn1obvrW4szp9f",
  "key11": "3FKJaSjyumiAHaRmi3d5DxbdbmYfboUsqpncw4gJ3MQYPozKdDx1JDyiqmk3r8En5W9Z2rsLDZLBKU8uA3KZh84q",
  "key12": "35sxtZn6WQJRbAZH58v47H7uhbiXuJfS9aujwfYqkqz5qbXeb94KYija3xmktuhHHRt9AyJTfK2FPcgxhPQrkeoY",
  "key13": "FJBGD6DRNhpvWCKNZn11rkhAMavi1xoenpv1DQXfqC2ioybfNK8jWeyoPAetNFzKC1ygtaQXuHfkG5JkFDDkBqr",
  "key14": "4uTMnS21HYDVJGHQGdpUXhCxFZWkZJaY5KMKSwpTTuz1z9BuQcHfv2KjLX14jZvJYdmdsUVakY2WT7tygPqbGYnb",
  "key15": "5C77TUiLhzg5zAZR5gha7FQh7osZZaXYAnMdMprgqU2Nu9vg6MtfNnoGXtk4rCFeKAdjZQ4BegqHAzPNZdMFiQCo",
  "key16": "5RqfqbSHW1GjmneU6i385EGPgJ6NFKCHsPTbTMXsJ14umRkk849vfYCGD4DaHXgXo9cX6cNXFmxgBzPzMC6pF5G4",
  "key17": "21BXb9vwUfZ3qUjNXTf8oZS45ZE9LUqGGyVCxhaYNYRpVLoBAujRmwXD7PgdDAqok6dDbZfXxvi8D6Ev7cpbMGto",
  "key18": "53iKgZboWuQKfGaJELH8fke1B6QzR4mEA713ZER3GkzZdx5Et1kMbodn4Y9FWepdr4SwYHvbSuhUrCAJh6YojnQ9",
  "key19": "5hsgv2cxexYxdSYT6rZRxRnAp4F9XUsSEzU8vvwmWMRopwcootGuLSdFpnXTtuq5Nn4aBM27xFAb6jMZQ9qatQjd",
  "key20": "54RyR1k1dUi2qn49pDkYr4ARticyGf8r2EtETSmPueXgQ5NpFQLPv3D69QuPeqFaD7GnWAQDYJxnmo2PxnEBNXjk",
  "key21": "5z5cBAvS92BYJcjba4k9Sn2ZfLLA6yNHvvh5ZStTyxKGEym5UqrDeqqJDb6a8LWaVoj7qsqdT5XPPG48wUUjb7BX",
  "key22": "2jsA9rx9qvBzgBZ2AQ2gzViuzxrY5wogcPuC7obaGMw2dcBcFECi7b2staa5oGkUW6egPHzCZfMgMAqKYbNaSrhF",
  "key23": "4izyz96Wjtd3pB5pLayEge5836upbZeMNkUuaYfpWrQSsq6yXiUWwYbztNFWBZFVrwQBDXtqJ4sKxiyu13sxdrpp",
  "key24": "5Vkb3GmFcz9esY2AzhrzSVFwcr4koZxPivTsQCznkhKNZrpnmgutMxEQdcYdtjJGeBBCzpBHhxRLBQ4ikEayLgPZ",
  "key25": "qqhb7C2uaQkVNZgijzk3E8oz6wKea1MFwgwYgfCfqWiFNH34UtUdYVCBULK5oBKVhBcR4yh47UHSPJ188PVQ3KA",
  "key26": "X4YQuoMwVFKxo8GfkhZBYY3GHmEVcaqiGv3girkBWWB2uo6v5yZLZLFfDK4Amgge53yxegYrhWtAjfzFM9ac7tg",
  "key27": "3rePEMD23rxVdscrdnJCa1nWCE1sscyDX7F9d666LR4WRdgaat1NCaWY3PPn2hk3sZLtBtFYD6MuLuUGkLtBhCLh",
  "key28": "3scXeDgbExfZVwpFRAxojSevXmmibqWDBGZeDec4Hmm12P4y1452V7nokF91K7c2aNwpAa7dBmMbsN9WbT2zuov1",
  "key29": "4kZwGAfea1aNnM6dfYBqMwxfCkfri4cNaWD1WUXHsseR44qbnvaSsvHYEPbX9W2etcEsydgnXHUhYEBb1mSQbutA",
  "key30": "59Xg7UfxUcKEwNx3zQ8tFz1L6zjjN6TfDPYo5suV2FdVC26Kapg8AgSZCMwMr2zxJcnfq3skUw6hJEQRTvbqw6g5",
  "key31": "2TN3GFwFW6ttXtFXzYDjAdFFpeqaccgShb4YreKe9B7JVGiAQKMdG1akR23ZriDibMnYfiEUaeY9idX7WMNVEwX5",
  "key32": "41RP7NCFPVC3SntE5tVjt2XMzXWTnESoYb8AAN7oMERDBXff61YJ8JhKahTDMzAfqGbipZm2fin8aRR185ZZ5AbT",
  "key33": "2bh2C3qLPrhAV8BTqdFQwpC9os6W3ooij5kiWSDF2jHoF9SSQCoxUcdvfwVMmXhdJZrSvmpCusakUEYZfYz4PHSV",
  "key34": "3CKKVnLdBSXvYSSrfAgUmqVGTz7JCeymA9TPwzCZjpiFTzgPU7XJZwW1KppR6WKsEB8BgfrLndFW2waQyqxt2iqX",
  "key35": "2QNwr42hiwjtDhzFUUGbMYscthKaA5uaDPYAucPw7fqnrbmeqMKC5WkiZPmAtDeg2paqz2YH9eQcEYDinWZp1LYw",
  "key36": "66HpzHJQxVtQWeETk4r7LPBoU7c6t5xbY99Cs3Ki6hYfSjbyfA1heWYwztJKtsCZkA3BTnntQ8prk6yq6C4xMVQg",
  "key37": "3EMUCA9bhSVUa151KfCQmxukN5RqosyrHeC7BJGAfu7fSFG1QCQ8S9eqQqepQp86bvqVv1h5AQWUjF2PQxUFx1TM",
  "key38": "3mnt41DitMUoHGPmLGr2CCi8NxkgbzfqpRg9bW6zn2rJozAWvkdishPkoDc73iyoL4wQkRYk6hMmo7FbJh5T7wSr",
  "key39": "4tfCKCBwQc48AN2tWftug8kscbnAeiGGRtEDxTd1mhFjaM2MmNG79Y6yMTH3at6QerkTSBRA4HbAyNiFsZQQr11f",
  "key40": "5MULfmDuzznnhhSkYFKhtQDn6bXx41yuvMAufYEHnSKMTu5DwUBZCbm4JTvQHiPDVieJFntZcxW3nW8PwviD2VXC",
  "key41": "7pHBWLHrbmqBAvNrcw7fh2h1dMF761sBkzjw9voPSgNMWikMTf5hJhkLNhSwVV4quSpMsT7mStxEWh5ZRFitHGJ",
  "key42": "2oFd1UuUWmTgkQ8iH6XmBq55MvzuYp3Hi7exuGZVCayPQGfHpdi3MC8q4svHU6hvi6CgxQYRjTDxonp58sPaDpyL",
  "key43": "3fYCL7X1QGmSoRMw7tiwnPoVz79KS9U2xCxLuC2QLszsY8ukiqA4cs3fNYr25nxhvR6vq4fuFYeUJE2K1yPYvST9",
  "key44": "3t7g3HV1pPSgy8FWnkyKHpNJD4B56noTLG3zf8eQd35cQ5YFdzZjU1rkAgD2xwTDgYxBbKdRFmuc8jfqrVchxgxx",
  "key45": "29c9ebEqKbczmtpFGX7PKLZwR9ZL7WcP66VA9ph9rExL8SRmDQe1WiKooL9vrqHCL6Z5tybRhrjo4UyThgU9fzTy",
  "key46": "4Wo6CsN1jLowQMAdAW8mQMr5HjjrKkd4KsDMtdw5191y628XNdH8RY78ResoGiTTcKpdGijQxBYcuZp4cufqPhmU",
  "key47": "3tSh2nA6vp9kzvmiGCox3MgqCaaMHUJjzzFX7bvf8bC1RtoPuF8M6GaeKNBmZe64ygrGG2iuzMmX1r8Z9a6WqqDB"
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
