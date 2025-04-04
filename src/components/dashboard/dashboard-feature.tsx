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
    "4CkJr9eNrSrJGYx5EqkiCnWp1eQbTLJiGUy6grKFsKf8jfQe4StGPQ1PXqgJynPFthqnJL9DBe8TeB8BhdyNCjh2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e3X2MShuD8ywLfcUtU5ofWv8RPxtdbwXYo5VYQvTGgGXhZpbJTY3bSFGaAxkH1a8yhB818XQNrYdax49VBsRmTL",
  "key1": "4S4PkAsB6YBMtazKJ4T8G6tA44eUCuGU1AJKYypDDCqsYtM8NfmD2FvdcNKbZPRP78MycRtdkvEhzCDeaYSszpNN",
  "key2": "rpJUwAVbC9VicgYRT3jRrgcY1kpxCrM1mpkX7tcyRjk9ShppsQXUtQhQeCR2ZwYNpTvDh1jeHdxYPLQ5LaVy3js",
  "key3": "5FrvwZWX7Q1v6XySV1G4FP4LsCbCUMAzsuUcEXeZWoA6s1ZtJD3B8pbf7xwZzGYrUaWoYxd889cr8v86jc1zR9Eq",
  "key4": "FxyDx9oAdpATegJEHTFtCNVd4vFL8jZDG93FsUzTMha5ph7ZCSeJeZQ9wavyPap2NPuXT5ErPcyE3nm9ii23eCv",
  "key5": "4t1GT57twfHbKe9GqiLENAfmHrqyrYordSLBt48t2kroMFLpxbTYc5NPXsReMbgBecixFzuBshpf1ch5cLydu18E",
  "key6": "4Rt9brwaFzEXTU8GDC2jkZTP6aRre7SmTPzGKUhWyTa6XGy1ZRKW57dWXkPRZq8GBSYToGJdYzdCnfDBHpDR5LRC",
  "key7": "5o7MNrjxmYi3VLiZwPrCG4SmHxF254sSueyWQBsyta5L9JGLXo63C6nAjuhQtn5qKe91f4oWFmV3JgHk14JKt9d2",
  "key8": "3GhYg37zYXFLUC8vymnMkVzwabBTy8wgphtd3b3s9S4Wa3WEydXgFzz9d5ryzAQkkHkZTqiCwFCbRE5FDoR8SmXE",
  "key9": "462mNrET7Ao9yT1FGEx3PS5AP6d55TTuLF7eCXVb9mC2E6SwC95RpfLUcFTRqAq73GGiCeQY3o8or3s5AyKa7GBN",
  "key10": "5SsU5EGsVGDp4LFdPuc8YPjzXBhhQGDRaZXwzNz4ejtMuc3oQyHwmDxcDKUUvhYqkjWGyzG9AaWLyUrdkczojCSF",
  "key11": "2oTNiSwASA2RU7zoWHnuRKN1bazujg5LNCdwEKn7SRBNMJhD6ZJpaiiUQTthoWjpMafQJCJhWJT9sMdU6yX8FcDW",
  "key12": "wq6YPYNUTc7A9tZRm53TkAcXb5nKQ1AVLCMRMGj9Bbr8fpBQFdbCiHex4n2wn1Vvv2WoRfQaUiGUuYjSAtdxJDr",
  "key13": "3bkaUgegPpS7pHtUicheZ2vkHYFxYNXk9QWEUcztNNfBX39BKvHBz1pGsh81nU5WHGK9McAmQ1PjquqEwUAFbMF4",
  "key14": "5qwVhtVFCWHS5eMfbuGNQgndyF4Sjn9zTL3G7oEDGWUxQPo2QELvwT7D81PoqSvUxCMH5BxuUMDw7CvFPTENFSEt",
  "key15": "4qhcrS4E1wGaVMVA2XT4QL4RWn66ubCF8THoc5xNEgQyFHKZKGLCgwksuEgeHdxcM5Akjyi2qArerEEHPBshrG7m",
  "key16": "5fFU7aRo47kUvkjpAZvWPq78GytTeUgi8xqRfeJUkeynP7PHyPGNuU2bcXCj6VgETM7YKMXmsriVYFbxjN1PwW3t",
  "key17": "2aCnzfEjLJF8CXXGZVsknEmHr1JpYLS5MfdwVNr84LxbrbYokLR4EnXJQ8pFewoeysxdKfJq3XdeUFwjkW7yE8P8",
  "key18": "2gz86nTdAh8giGuApsBvjP2EuANtJ5u5EZV6psTDjB2gibemfd95arNULDg87UFwZeRvjGsWXeqvMnw2YXCtQMub",
  "key19": "27iFvidDXbNJcf8vqHx5V3TkJBmqZXJ5MuwLD4tU4zVfdHA38Z59E2317CSMi5hG7fN7V8dbhyLVzk3eiVHPwikt",
  "key20": "4SY6ZEMkUxqXbrjwKuLkyKSTisF5Dz6gKuxr7Xy6c6ufgpnV5ZWaF7YCy7vkGLeaQmDpmYzJX3EQa83GGUHNeqwm",
  "key21": "2k441ugu6F3XkhwDMUkpeGjhHUj2rwPww4nACBr5YENSBvCNnHFkH4TvN5H8NkugsYVubNFdnE2nfhe3u6GoLtYs",
  "key22": "613c4RnGnyRW9A7D29GHXpQpF9hssNy663V5hsm5NAyRQofTEdsUk37TygScrD4JN3kDXNndSh7PyFRfi7mzQoi6",
  "key23": "4Y9Tqm9EDsgnv4P6pNLpLAVsSvwWmsKkXgAyuybhEDWx4jguUNweSffpJvGnFZ9h2zLbnMsjp8jkpXi4Bfr6Jttt",
  "key24": "4MDa6LGrt4vjpKQkDn7xSsRyFfxB2iUsN8W8VDUTCUJNcimUr3oeTZMEy7EDRMAW67poTcoAHdgv4H3Z4LMKKHjZ",
  "key25": "3huE5txX1yfnTzQaJZE6vfKwLCEskLWXDsSRssxbfA3Drui5DKT1QwRqaEVoAK3srCXmJzCozXWo68A217u1V1nH",
  "key26": "4xMhEPSDeUYTGqzaWq44TYruPbMygYxgaJSNQnZidabuAJEuwfzUAP4r5Q9mbFi2k31shMok1DiKU6A4jRr8efkg",
  "key27": "3fUGJmApy7fe9StrqDxKyxRvsygYUorak4NLJjqsBZnmFdpWYcBGXxVVAnGuAnnHuyuLqMQ3vbmYdXzMWizYqRqy",
  "key28": "4qgwmFabSuC3x3kVbP3bujwQP4hx7evbSnD8rhzhm5y3yY3TtWF1rZ1ovBwbfgbsb6KbJ8kgvS7PcYqgqsvVBRmu",
  "key29": "524VEKDNPTBkUUDo1HrZxU9aSwj5bMnS5ezV39YuV9rqpwwuTEVmxwrZejmVNnYhMgdkTnS38CKeHVRDvh6VZ4eU",
  "key30": "4yMaFSGC8rCMHf9FznKJ5J8mbifnBDGSAbCVYqPMUjpQwpA2H7yA7XfXTf9n5R8wrKgGyCGwRaz26hzAgxoJwdhU",
  "key31": "4j85VxWqTSka3jgo81u8GYcYKussrV2vybbWEohAqhLDnS4fvypx3vSxQVTMo8KM6qKv2ZobBn1pfXC98A6T6u6g",
  "key32": "3AAVHsgy7Mqom15xsYL9iWoYU6zXsy9SC9uf7vfiT17xwXwVPqv9n8Sftxiohmm4Zyg5hxfKR3BvVjScoYHRst5r",
  "key33": "tte2Sitg4Ennzo3mKNJgMGzKjd8BVFSgx5jzEJGwa7ndFeT3CBNpzwwp5g2DR7zrdotASxvv3ikLtqbcB7WWVra",
  "key34": "5cPfTtRhc2m7C7sSMXhNhr3hyB7ouRThtSv4CvgcxKBNA55dZ88AyAvqU24ojPUfkWuSrPWe7g2qahdkJQcGPfDc",
  "key35": "44uxesiikoAHCsyUpraGuQtrCepJ5hZLWjBLFdFcRnAJQzpMXsf8PRbcwmgKCmNE2BqDnDRUSeGXvYEK44r66e1V",
  "key36": "5m9ssMW7AxRiFJTurFdJiKrj5WGofERc6VSDgcWAUJKWDNNcR4m7wSbzSg7xbroxqvVQqfdjrn7FaX5FnVP1XAzA",
  "key37": "5wHef9oFgMj9E4QLrUEhiLRAwhEdkJncCAq7VZUgHfMSxBZvu5nX1AbizE8jeVNFirGm54bA1N8M7osxsRVi8Zs9",
  "key38": "5kxzS7hFKqrNJacHBWnsNLQTcnYu99nPu1jnHS2z5QDPX63swsLgSMXmHLNxCcRLZCzehXwtMsGsjdMwvm8M1ud5",
  "key39": "4B2pJbLTZxJBpaRhFy6ZEoiAHUUCrEzKdy7PEh84dMbnRTrTvBiUg4MqcvgWWGxbJc8UQLs6sGAnFuxXev9cgoWX",
  "key40": "5UCcfp6oYHrScEYuDZx7tfwN1rXAweUjmZiQVo7supGnoKxh9GEkN28KfDttKVDn1YV1RjLLmY6xeDfKNMHWZXLS",
  "key41": "64sBBxJmG27Sg4PHLhsiJmR4bvXRVqbDLDfw9qkromhCQf3dnAwoJrwFjLoge8zeJPeaQFLsAPJ1J4ETzqxdWw28",
  "key42": "3UqoAuh4FuBrmsfbrGUT4NZKfSpQzsQjyi57TwfFDrbnFb1qYhCJeSVDqW59uHzehHT3FBHdfj4b6BNa7MmrmhTf",
  "key43": "5vv9yPH7NPfWPXEJdgieDH9TN32vjhukMQWVwwi9oVWvfhtYUD8ZYLCm2zXiuzxxRzvk7MtStFCMhBQe7dq2ad52",
  "key44": "47Zvdb95VPUZLz617scex64RbQ8qwTZ9XBVkvrY4x3mAoCmGagYVgT7opQezGk72y1m1wvdXtTSKMHdY2bipCCVW",
  "key45": "5DR5vu17TtGeKnX8mLiKTS3JU1G5tLWWd7GzWaYZK6fEnmSCGwFfdpv6apRbcZW1fqRqSBiUC1a1QTQF23YXrPzn"
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
