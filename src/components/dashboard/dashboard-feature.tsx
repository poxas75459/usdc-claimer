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
    "4pECveBh8nECsDCv2riXzFBHA5HxjXR8ApKDXCXCh1JJBsmzx3C8tKr6Wq3UpjtUuEyuD9jEdgQvpHnvhdZvF2e7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZK6muWKLLU3XSjEN3nudAN6xkyh7MpZVgG4peciVDMbAdnMqBSiETAvCWRg3nydmCewTJuLrvZcEFYEGGJDTTDK",
  "key1": "59ambBsZU31UuKhw3BXwSFzeKDC9dtNwdBxGNKiB6GYAVPPsur5VcJ9rKWjbFk6vD2QLN2nZxLbqQeGGPEiBtEXD",
  "key2": "3uSUqGEQV7FonqymGF4txjCX9vQ3RHNTcHAeexpyTjntYY7Ph96abaZKzH144bomQCiwbFGyHeMMcsH1FjX4ZM6F",
  "key3": "2xVSmA8baPGarSHTT7B9kLDQN1wG6pyktKJdG3nf9izXuzgfs6A4ZwHqn6fLXLBwXzT6aemkh4HjFx6zWqbS7Aq4",
  "key4": "4JtD7JNkbz4jjtq567pHme4jD184dwKUGjVfWnHyMP9gNqfdY88d3gNR2wq8kFuEvioZ9P5aoWYcoKF4WcgBFsFD",
  "key5": "62AuaBFR7J9ATWoTp19bR2S2uA9SGhZy8W4W7485MPdGEVwSDSbgXrLrznPucxQuQGi9L5ExTMA5uHCG5ywsyV8S",
  "key6": "4He41rccK6ez5uG2JWY9GryHpuzTtUYn1iRsUPXZow7Hnz9qnfriV9vavArQw7Gp9uM4n5Gym9s45vzo28ZfejpT",
  "key7": "4EfLMC3B5Dm2aPPUQan8HstsKU7xkHyZ7Lmb9jKsZqFkDRskeNtmuz1kNATSPFETJfC2N6TKZtaU21uiUxgC5YKh",
  "key8": "5UEkS6cDeQFo6fgoqjHiA21r5FK9oi6iWeRey2QSyJZP7YXJEN75YZ7AFagmrg5SEPsY1i8jFwZeBvDZWMh4uWay",
  "key9": "5kP435qGiuFmxBBcoDnQXp83izqrqRaXhjpCrQ5PXhqnXH3boUAvYtMNcq4BETmzHcz2nnwS2mrT3wRkGmCp2vry",
  "key10": "3YNdLxmNkYuo4HbucKCkip15qYyiFqKAcvf5m9Wk4ktcqMUdac6Qt7TAjGFLQuyvz9aGd5jqmBFckd7BEe73PhiW",
  "key11": "ccmiKQBAeKPDfAjX9rHY7KRdo9mzVEfkqRHwziSTkDqezCjoCpagQaQmMcPpYkZ68Cp3eu2B7B8sKUwXGrLp3kB",
  "key12": "34J9mS9NFG6cx2MMbJzJzTVLEAtZbvs7X2hHE4kYEjKxZPfG7MV6ACQFLbyp21m7Vp9GfzyVYEMeEbowNYEsCjfY",
  "key13": "JtbAHGs4Radt3G93bwxFKypHWcf8Sn92Sw244VSsAMV9WvPQDeeL5RR28sZQEbxRFy3qak66PwKNnUasjTaJDDC",
  "key14": "2z3XHCMsc7Jc671YTaDfXa557MK5YygwpyFfZBievVeLpe8kj23DuNPxNGXc2Zi1RLTkHD4VTRbzT45B5z3ZHp44",
  "key15": "37jWmdxFarMYhU9kDxLgDCD8zpbcNe7imai52HS2ZCrr2b8qyBgUvXTuLTeDmTqJSue3jMc61ZNBCuyiTGdbun8o",
  "key16": "5T1CmzUTqw3HinnZHVeCdVHcoqu6aEzWZvYq3vaxTkJySMh4HGXzo6ddkiM7iRyyuuHReoaMdBSKYXnoZ6MFw25Z",
  "key17": "2T5eZrnUu5f9a77AyfhJkitEA4Ce6tEMwNvTPdkT1QWMxg3egiEk5GJ8dVyA7FxjC4PRUiwzaS2kqFmxKcFB5sQ3",
  "key18": "2hfv9wjnDJCjBkUr311pMDAfPCqejwkDe97SroVhvfgZxjgmVvytFPKkm4xmixbfJAusNLB72NM5pstfJVt77xVU",
  "key19": "H9YMoQGrMkXAf7ScL4FewMywUHyJcbn7oYgvk6AKgskq4SLRoNdGFk6Db1kbTCwuP3jST4sY4itS4aiRgxDMeNi",
  "key20": "3yzB2SuMvvA9BcjhmqYYzKx4cvuYL1jvgJiZ9L3dSpkzNfMAQcLEMv3gNUhPSG5CWSdBStqwwipBhZ9c3a6eemvY",
  "key21": "4mEzW21UHDYEe4GUqTvpPoCe3h8SEyMVNcjBHd1GnwukEm2xbGou1Np6xiv6MdZgCriuFRECFUevDVDqLJgJd5UA",
  "key22": "41GMDoadn7cH4v19fPswLX86HETYW9Y8uUem9vkvo7h9Abi7h8hb2HmhHu4237EEYHUwcZVzm1dnhWDhzSWHHDb3",
  "key23": "3hD5F5Z2X1xaXQhxjTRdCdYVbbgFeTZnm8vikYeEq5AT3vcDWzjYhWgYSnNWa8ofMU2C3UMUjiRoATcQ7jgtVbjX",
  "key24": "xXcqU5v8VGT4Ck3vW7CwoHEueXAhTHmh97m9eVti9uCkgh8YGqs5cY5uZdz8NwXoqNA3Cy1HerxayrBN22mxKWK",
  "key25": "4v8Ty5Z5iDow9jKsnAoziMVxqcAf2pGuSHDVe38ANdj3Bmu9Tdhb7UbE5jRT6eVTzsvJWPjWzHhm73rVLzueVej5",
  "key26": "4vuo2AGDrEQjGnFrb9Ps5CmqCw2KEqR68aco77uHf1ebhPQ6RYmehj9eFtfjAt8LtQgG2D9ZKAYYNTTVUjXWHjbB",
  "key27": "41Xtag8N1EJYSy9eHsqEJiSRmjoQB2jFL2zM9tcVT9yZMFJZjv3qtsa5H3KvKs28huZiHdWnRqktft9tMxiHT1vB",
  "key28": "j5bFuibNqsKR4abNLMev4fuwd4rfcxVCKWSq2QWRCmzfxaTqyisWfnACzJ1eGD3pJR54UMcV7qQgKz169w4UiXT",
  "key29": "4FP1h9W6TYLo2UtoqZdawLJrDbzgfhb3xJkweysDnayjbo4tNhX31tJ6dQk9esdEiapajXq4YC5GueKLH8SLkR1o",
  "key30": "3A4RJG7aYLJyJsQ1QhmoNN4614NoKRRTdDFJg7cTihUP7dhWGGGVF2d3M5YDJtkWP95Yzc1E86dwHsN9ZdQwR59j",
  "key31": "5Zy9moUtLLyzzypDsUmNX9qGPixSe9c8Qh8tbdbYjCcgt5D9GgBMcpXBYi99DPyNBR5kKGW3gXsF6aV3KuucWD4X",
  "key32": "3HcDQ18x2zrq99exhPxDoYZCzpYDYqbwd1uEKzWbcjFWKHd5N77PQQE1GAt5WnyXakW5x2ainWmgBHsCZtCtX7NV",
  "key33": "2TXnMAWSq2ZXLcGYW7qdVfW6qF7pYXyqhMbepmPaCZe8F9FHp91TsVRAqPZUvr6CU9Tvg6QRfeBAMSxjTZjCMXdT",
  "key34": "49KCnCTZ9hzqxbEPU8RRJYpqLdQtW74QeQiz5KQsu5jt828a3WjYvsb6d6qpvvXW4feHBSiJa3epbqVcCyDYGsHg",
  "key35": "3m2cYDWr97cp5C6hH4c68udMFd8nGbBxNGtReqcakKgH9Xv6SB7QrtYT5tHeA7W9Mdp47uRwR3abk7w9Nkc8zaiy",
  "key36": "GMwyFaTnRcfKaqJ22tKv2uCvy9DDDz3e6RxVg3ax8i7BCYxEJSsAc4Eo9VZcT5XJCjybUN2Ymnsg51JHRpEJYbE",
  "key37": "5TxP5vGuFQAoeaXxeyUWgatpUoe4L4VkzpHHEHxAcMhckxQda4ihWaRDCVyv3pbRQG6e3MDTFcqyTLy2ZBX2LYhN",
  "key38": "2uDrqQu8YZ7qfYd8MtAFtgdxZA96jLGmaoAw9LNyi1uQs7DA2BNR9PvPZ71VprTE8ugHjTFZtYiUuEjZQrbgh5XU",
  "key39": "4QFNAxpjw9bKVNuLsUBYhFUuNVwPCr5UC4txu1qgonJMy4wuT4t4A61Q8Nu5faThmfHWt9XeqFRhJMbMghioEUUP",
  "key40": "4kgzGhRfZvGoJwJXQKNYGgVLnZ5baAB1ygaWVEa9LghJ6jqWp98nFgh8CrYqjsRWoixvcMqLCry4tU3qMh82tyFP",
  "key41": "2PLQBnF2P4Hoe62NjYtroxva9hNqZS79MueVGWq3VmJeDQ5iouYpXh7QiXYHa7VvHfdVLRLRcPP4Rfb1XLvhQbTB",
  "key42": "2FzAPbWB99mG1iPVR4JX7dK4L5zgKGUTfrUPuHreKec59Akn2ygoAeaGsddUGYZYJEfZr7vaygpPZkjnA2M478x3",
  "key43": "oPMridKx4XMyr3Jsmwu9Pz2mMZriZkofG8dvxNZMbcV46ZJHiPNaFu7x8xseP68qhiRYpSYHe5f83TBb7LrhnSr",
  "key44": "AuNFgCMKFFYJMAUCYdMemSu3yktXGcjLZhPHU1TSRfSrao4PJ1yGbq2R7biQBnR9KkRCQXQVUBxudkUetCjTcfH",
  "key45": "5v7Hddtj1a7PqWswKbZeDLunDT6dizWEhRTAGjpxaLiXzDSV6u6QvmJWgUvnzokiu5yioB531514t4qnLtmo6Vwu",
  "key46": "5UgvcztfsdqXjvXdGW6rBKcAAPPin4RjNo15VYmryZFT1SBftmqzGUSjmXg9VnXb78Zoa5ss37rgrvAbRY7ZAM8d"
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
