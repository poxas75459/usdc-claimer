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
    "2ZTqcBNGCKCYbqUFGjkUY63DgNHbbPqVFpvjzc1v5qmvE2CHjXzUvLaXArZHjA6XxPQLWCxZhYgNkK5Tvku8xnvN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XxGZhdpnjZxCD99aBnuV33hHSJrFgLXHcWkLv5eDQTuExkvub96yaMicCvY4SyMQ6sGegji6S8KEFqqJk857Ky2",
  "key1": "2KzhifzFhHkoyTo38q5JQLh7qqS9R3PBokPvutXcVy7sDfxnE451Px5mCAcwVSk6AxPBxLLwnBcvjHGh47eUZ1SB",
  "key2": "5i5i7pWq2REPsqeLWCtEiPzPu9dAYwM3deY5cGPJsuovcAPMDa1ioaDJ8eKSkrWqqbyDBaXBnoAsFTVyKDRug7Er",
  "key3": "5FZQN1WdKWyt9sSfnjpmDRwAuZCtrQedpGdDHEUX49FD8TbZpX8QYzHWi9d8ccCxqLvBrvxQYWcb4AwJifgABUJg",
  "key4": "4Ena5ybsV1ixgDwbaqoHHZituoXsktUTb7GcZs41HaZ9fkcGy2h6T2HAnpR4USiaxvtHSnV6nzHCbnvVZcVQM8Pg",
  "key5": "4c5hCU6QKRXEupvitVfRXSLz3CtbwTHcgrNoZocVAueDL9vG2QcS9RsqVrA9RgWktvUkdbPQ3cASSparZZJPRfDh",
  "key6": "63XcDbGWUYP2ECxrgNrRV9WNB1veDqYRj4X2DSj85Lb36iHwbgEhTaBhJ6c4fuoQiSG2fcsooX1kGjuDcCWwGzKL",
  "key7": "R6QWq2UiHxhy4UXxsTV3E97qYwqda7FnkuubGetsAPVWQgbVLbCexFMiqJkYp2z5Zj1HRH6JkYt4UpJj6Kdyndh",
  "key8": "dsiTzUTfizkdGaNQwgdz6h1odkddkzgdYhmdzKriXrmksgmLZ35dM5gkDMDkhsikLGMCQaWWE8HSVSZ5CRh7HF2",
  "key9": "5Y8YbqzFr25vfU3DCmUnHsk6AHGaTaQo33kEBtEgR7h46HwX51Kki898GmodjhyK5rRpGMFXpmQ4GCqenvEbwy7f",
  "key10": "51pd9KcLHq67PtySpJTuiYbce7Z3tCFVRVVBR39rNf2nGVcmoXRWsq1Yx5Zr7s9beeMQPoGFwZLRfKS3CsCceWSb",
  "key11": "3bBZv1ho9rVYvEDA21K84fwhHjGkdRs1wtVg8LnoYc5fEQtxMF8j65WvDc4MW3UganCk8P6bAUrnciHfj67otHRj",
  "key12": "3ApMQYvAW6oRc9yWq67TpigZnX351AYTDNHysrQRh2zL1TjtyL49ENzrekPSu4Huna97kebFJQw7T3QppskZE8hU",
  "key13": "4jUji8UQA2mPyEeYj4A46HHq3dAiyMCemVnihpCsPRPRuTqjaZY1UC9LCU1GAUUhXzMNTw82JQ3uQaVRHWJnTxV4",
  "key14": "yTs7mbUGenNeearoMY1RNX2HjawsyHA6x3VZKNANLzyWPhHpYkr6XtVeRtzDQQiGirtM95doFQMJsK8U2TiFrxM",
  "key15": "abNp7fwx45sdW7Mk6bZdW2iiLj24bHaQvD5Ct95fzCtvBcG6v7KePhnutJExgyXpey4MHX5YiYCxhxMtTh59JAg",
  "key16": "4K2CNG2BMn5gUTJAoWJi78KDtSeZ844d6DN4oSzhwNGQjfmYQUhQQ7U4qJVF1u4r6q5sY1eUYg8PGFoZZwkFMSfQ",
  "key17": "5y679JgpkcECbS3N66G48Vbchd1WgadVygUkutiMZjuKcWSmdrWp9oWavqYckum78ZxAuPNCxd2avG4JBmdnKFvb",
  "key18": "5k55KGmDnx8YFYN85JamD9XrVLQHGhcbChpiAchxVwwwXqZf8BNavkePyUwzBgrrpE24i5L6dhsihtTDZN5TGFdE",
  "key19": "587eqhRM8AGK8Y2bo8cLkJqcr7G1FkkAuyCwreF8khapdS6CV56Z6tqGfAYTGtD7aqg1EmE4QLi84Kce2arXXJDv",
  "key20": "2DMbb3C6sX134fSgEoCymbV9hboKmt1MERhKNTaKi7zvhikT5Zo8yW2PJ16XjtUdx1AgVmjpHwKjwFr6Fg6jH8be",
  "key21": "sZzEvm9onf1reYFVzXgenkkLb1Ui32Cx59hn1MJozURCzXGo3DZUjP385gaURx2YcNSvdGHVJUgnEAiQKM94To4",
  "key22": "3ayj7CnAif5s78x76NLCYVyWkF77wkg56eZuosnKHfKauDBCbH45rZMBXSWcpQsBPbWg8xHyCJHbMCyjuCMttqtj",
  "key23": "2QmUXzXAqAPyKSF1rz1hNR2EUnVb8uqXcg9EXn6KQJD7vrE7YsnFYjXb1HLrZtR8gSSogEjXqvEm9HYVAiAp5oKD",
  "key24": "2LX1S4kQ7DNRD5SbW6pNmP4JH5T5icrHQhbtxCGea5XM5Bb2D6XCJ3LCQaTd4ur5Vs74HDXUko6ZfbMRkemqds5J",
  "key25": "yRtvNmvmAhi29V34TUaKx7TppHtno1v13TbikFtkM116YZxugncJTjRCoxchYJV8TBWLWtoDTDZv77KTcbVpGRY",
  "key26": "2i7Wfvgs2mbo2GJfrZvmtsiK7Bu92p958D41LSaeYBxw8KW1iT3TrSQB99ELG6BjK7g2PeQqWUwvSddSYRLU7C4h",
  "key27": "2kmJpw8mnzACrZNUw3Z54pet6UY94WzbeyHYup7cjfHZL9NGq1oMMU6EtNKExZXr3svKDi4NKgdEGmQp46gmo4Q6",
  "key28": "3zyWXLPbqTdkn3RawQ61thZJMDyuuj9koVyDuxyb9PHU4VUNCDNuLbCt6W1iSmFCvA7hb4EcVehweCkgcmQcP4ko",
  "key29": "2jWUgXRThrKEPL29yjWYQEvk1NPLC6PvuwkpVX9tVB3EvptFu4uwnP5378K21eRWzxi52BuZW2anUzfcFCPjem5U",
  "key30": "3TojtMzuApipzggWDHPHHonXwmMrtnEmcTgJXiHkjZ1ZxTj2nb4AsrrwcU4xmu32oSQDKfUbX5jKescFkFdxfiEd",
  "key31": "2HuVA19MoqWfJqEBYhPugxEZt8K9yTkDXvSTEuhyKhD6iGGDDgDumJ5X8CRwfCAKpSCmN92fBjfQvwAJynupbWwR",
  "key32": "4qBdzTqN5jq8qfUARHj5DRHNMDpw5dPhPAhEr9NKhoKbXtMCd9n2yat1hbT7Pa1mDbRmkeJFvUNW8zK1s2xJKuuY",
  "key33": "439inQW1SZMrgiUD7NXn2kPJrmJtn6ZvKWRhJBvbN5h1RgBTnjsbwai4B2rcTVYepgYE87jVNSp32xbVbWzeGww4",
  "key34": "5dhqAzaca1H6fmbRNhs2shR5YRL2Qcu7fCf9xuWiabk2ysSRVeRutv4gun5A76pgmArayPNdqbHNMz85feuwXdX7",
  "key35": "4eHWV2YtY96vNpMdeMmcF4MpYin1xtysZMVGDP4NCxjkKQdT91EY8y3KEh6uCSXfbFWUcZwT6QC1uWr387LT2jFi",
  "key36": "4rUuRbwZHbQhVTSFtPHi3jTLWke9MdifCkGGAY4jUFe4ABF4gMkJc8xmdQsHiRBYbotVmE5DMQf6Xm6ufMgcBd3x",
  "key37": "36hjQKHV9XoS9rWv2RGzyHtsJizJNv2AYJXFcYnyqT5gTqD4BLhmb8izv4hw1ucKnx2xuY3YyHPwGpvmo9sjMNVx",
  "key38": "6EpHFw6SSYBJc6JrxsdTJNTfR7MzAqQ8Bf4JDM2nNe5cV7Ek7oCKMR8msPBaagFreemGLJ5znFHBKs3VmQUJDJ3",
  "key39": "eqBchZM7khDVygQaxmYzKy1BpaEynrm4FfAuVULSNLtAPRvqn25cthxEyPXmQuckM6ZmztnknzdADci4Sc6RtyV",
  "key40": "4ke9wrPzqNQnvBieobGwkt8CrBy8eDYibKGKoErsD6KgaBxikKj7m7zphHq45qiFDNxkomAp4TRi1xJiJPba1SJS",
  "key41": "8QqfKZHK274eDaSatXk6tmTXv4rAZJM8MNNF3XM28qwb4fgwRMW8WA9acCCpQTFxsf3uXLMiRUPB5XusveG94X5",
  "key42": "4bpWXx6jke9hJM1XjhWWFkMYjimt7X9f6VNcSKjpYo5pZSoYHCHv5175xYKftqx9v6jg8ZffYrXu6kQrrBNZMMoc",
  "key43": "37tVegnn4ePYnzJxRNf3V4VU2ChsYdnXXtj4TUZ4fPVvjGmXTw4KTHLWqQRYu9rd131ooTaU3KyqWpD2iFQ2FrwC"
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
