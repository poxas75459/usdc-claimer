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
    "3nQaR4VCQmqnfJhmH5TmxznKrn11WW3xtkz4mr9Hwq7GfGLbqasLZMvk6MbHhHbxdM65JH2CzsupMG693cHvhhyw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CHu77QSyjBsEqaCZEwze8tv6XBwc3oKcyTNW2L38gbNKPGSJMeEWbJvkHBPNrodGCcoVjpnydbPibonWntdtaie",
  "key1": "4pDLja17czWv7pQ9B5hsteY7PGD4heCWAD9Zm5PDZhSGv49pyuL58PHcoKXf4dLjS4jhzuTQ8PABB8hJJyfWcjwG",
  "key2": "28VhMFYXpTptyqj8pYjHzPjzbSccu9mdRcHP1vMZ4FesVvMPU8XNnuwjjTpYvQJMFAxjy8vr7gsRpcSWTixxPSiL",
  "key3": "5DufEiPY5BrX5AL5n4HMGKHS9dowtxA5YoPdMtejNmLvyQ2qzWyK29emGThCEueM1eedAQzvLm6hnPx8L7hfkGy3",
  "key4": "3wiecAgztcmo9Lhp5D9snizcBRTBZxwFsWaW7TPzWPC5Q1MkcfmLVECdeoBgpbh5Yv9szZX4kJWPYgyaoN9EHX2Z",
  "key5": "4fpZMK6jJTLAL2NWNLvkhPYb4XV949w2KACNnWf58EZTey3LfXt6T2rTkDLc9hsb3bbZ59F8wefPkehKjqADyEtw",
  "key6": "4hXbbV5fQYjH82q3qEHNBBswZzYTmE5ur8DmLdy1RPXngwP2Ey7rJVyMzzF5NnNNefKZ1MmG3bYc3Ac5cQARyLDA",
  "key7": "2d94jr6dgddRNfLcQNVRcF3Pteqn7qVUjVpz2AbEdRDEpLCYhNJP5jMbYMQpeqWJrHmVnnvFhmhvD2Fr4Sj18rUC",
  "key8": "2MVRppGPot1ccxxosS9jZb5Dbn7hJa8e7T67KcJph8g2PCGtGgq7qyiYoiR8VB7oyi8QsFFEjDsMEG9wCgME71m7",
  "key9": "3FCX6ZsUZ4YqVcmx7TNsy6SCyxtNtKvvPUgjh4DDEVG5f8EKVLoV7hatdkVkzPwFwGpqSjJoHU2NC8fNGacWw53b",
  "key10": "NU2KnumrWfKmaqsucDJYbM1ptSdUdh1tTwTHA6zkqSRb26RCoedx4hC4vuPJQQgPdpktwRNdctCctKTcEmtnmfw",
  "key11": "4tmxtT8iuBjzr7ScywiEdNg8woercF8F2Bg3VfMdm9w6BzBKP2gMxWCUp9D9jxPU1xdza8dKacXG7k8VkxQhvJrW",
  "key12": "3ukBBeT5sbMz4FXm9iHBbv4zgTxFJuRKpaZa7q12FJya5iLQGM32mkSABqai5Bvwic39mfF7RrnCCCneKXLrNuTj",
  "key13": "3JgiNt8ChZLk9v9U8zKt4FcMp2Z9eDEXfb9AEuKK2ikZFHtRRPP5HMA1qkoGZpmruCFXfgM1s4fYtUUJiPMovwdn",
  "key14": "4cCMsGPw3vnD2eeyPsRErMbsZGGc8iVe3Xdi1sc8XHnGNy2UEFGam6awuq6616GgGjcxWm7izPfjvAdbQdxfCro",
  "key15": "3GrnKUnA84aTh6B96BzcD4vXS5kFk8Qs5wHkwHaqXTDGn1rjrrES2cnTrsRQUW1C5NUPDV9EvTk1sr8RKyqjaNiJ",
  "key16": "qRNCcsQJArvkQzb2dx8Ej2u6bL2szcXLgGp2JDdAjgvfGxnwiMoyfvPEjQna9RM72BqvQE5Dw1jhySx8VRs1DkP",
  "key17": "2uGTT8jsE9eLgbSGS2ctxkdgyx9Gqu1QhEordrsF6qpXD7WLJkFTTh31VUEGfqz248mKVb8Ja9j39rmL1nnUQBG3",
  "key18": "pRHb7DhgmqB4n8S265m1oqFb7DBApZPTah24bNEcJLQsyzCy4qjnUwXxdHFqu4vELoSA7zdjkGYaGarAoazLJQo",
  "key19": "3LNVXPnjJtUZwonKGoN4oCSpYChEYvc2ybsj2pUFN5QW7o1i1oZ4f5U1Drb2W2feqQoLTGt67G8iFSTTZzW59KvV",
  "key20": "5JcjXGMz9SkDQ6eopEUdJdcADLMFWpr7TaKMSeQycyBEFiztdfcpWReGrJVCwzsCcNQThqszQbqnGih5XSk7sGGB",
  "key21": "33KKn1MXjdWcSWd753M7vWZj7a4tJS3Z6QbpEUoMXupNSLjguCwETABwD3JynfBAkKHQB8TSd9ATehGkqrx3fGFd",
  "key22": "2BXqjc2BPsCccuuN6WDK42pUqvr34ZCSnC7ECzSu7WC5EHB4DeMvTb3ca5g1QaCspsPupupjWLMWvLaQ1koyoi7E",
  "key23": "q9mUKkJmcjxM7N8TN2UetodrpKDpPyt2P8PFfR9h9SbLS7Ju3jMtTYE9kZUbU9jQEBUvq4foRATX1kBCHLL6E4X",
  "key24": "3QA93rLX7dqtEm9a9QSkeXXtoXriV2bAraTzHRjqFJE5pirbGRTvHUeAWFqjJ3brMg2JvCAi5wCAxwKnBJReyzYp",
  "key25": "4ySYJmjfSqT9Ti1X3Fa12PX6fsxmaTc89Av6Jnqd9ZvFfqBzmFGUCZDA8HuQw1W49t8cgWkHUCYBLqgbttk4h9zg",
  "key26": "4uG4De5XyU7ssZnSSV7EsRZNUM8HfXBJBggfzd4XF4rtYmr1Z66jHrNKwnkprYor3Q4qFvGNdvFePgRN55Drixoi",
  "key27": "B57AnD3iXv1NN5P6Bm5azPPnTkmqtEijv8iXjZuvUZw8MP6Jazmaoj47fy3NzUJ8UZq2qVrWZ3gy8HKAbt1fWnT",
  "key28": "5trXYGjsJHKwjXwEMy6qR3SjMpV2VuktMFyHJRQEaVseg93AR5wrb6UU9tDqvVrtSD6UYixB2Qax9vZZshNqs28j",
  "key29": "F7XmbpUZo2tVJU61ggVbzYrGGxfkpAPEsyvd8Lz3jSftvfJ8xjNtEdq2BaDDRDwhQcAtAfgwuV33esKReDU6dQd",
  "key30": "4ovqM3KLP5p7tjRcy4A4ZLmMkZGq6NNVRctwMU7UGkuLRDdKAFgXjdnetYJ8De941zW2JsDZfNWGWyvRr8B44xph",
  "key31": "3SacJ6noRKBMCx3XEkZrKcAVvMWcV7P8jfbc2HoBLCB6jt1scnS15HAUDxZt7Z99bJ6qwtJTsmP4Pg1kqeAEvqLR",
  "key32": "5dsjfXY7b5qPKWBbPnSzqwYf9hCGVj5Scxe5zxLfMPgGkHt1TXiQGTUWzV6t7Lc9ZLjb29EnKAX82fiH6oRPtffM",
  "key33": "NjxPHEv8fVvU6dpnUhMdM8oUHWXNppwt8BtqzULjWS4K7HXxfUECC1hEn57u4X3SVT3eywPZDn8t78fG4Jt6e5n",
  "key34": "2pmwAqyBALQmKgLFd5m6gca6LQCwCs7Deg4hmtwXTNqnCEHsbJ8qvxd1WB7VFiNA9Ar1i7E5KjuZDq6z8rPzaC1h",
  "key35": "4W5KGHv8ZKqZyUuLKHsyUov3uSucNKnWwSHEDiXooDuZ1sSgxY9DisL7moGXpCUtXaZtocgwaGzQ7LGqEtRJPUxL",
  "key36": "4V44zywjh2RpbfTG5hku9soPLqsQnH2rWXX2ywEHVVhNiSqPs1SNbPHSs7EwLXPaMBymNq3J1e5hh6tifzp1CyLr",
  "key37": "46JWVS3XJ8AGmLaxNDwJJRCeBdtdMRHhM1zC4Cn7EP4PCyR98u7whu3cbp2NqYSQkVnbcpsAYv8CsAHxEsmWNSrZ",
  "key38": "2VW3rbYRB7zsQHmP131jHxZacqDCTFmXjZc7Vxn3KJWo8U1Uuop4xfHrFzkECF7j4fHXkFnpFWoJqyStLgc8J9LU",
  "key39": "28prm2q2AxfPnAGQjUDt8nuUZ2KnSF5e3AtwqGKDFhmt5dEzCooGWca9Jusz127MPweiAP9fyLbLX86bwQtjj9a3",
  "key40": "tNJi5wVxPBrGvvUpkqidnMWPyj5oPgkAhYgVQvuKZxDNf2b4aPfMLJURnd4Jy1zvULyFHc8CKaQaxMfs5Pk9Asy",
  "key41": "G676a7jp6ZAj2BR23EjhCrM382YRqAjCQh1v6DahwnkViMZML9QBRrSKy6XX16CgvsvV82vSzVMd1rGh4FeKozF",
  "key42": "3jYK8qTpwydgYZzPc3LBEHAb77voSYRHNWABKfiRD1H7vnHv4oTnWTtc8YCM7XHhqF8znn3NkS2bjgnuywfDJMPQ",
  "key43": "2kT18yTUWft26iqiyGEAhK4SPQA5ZZLEddyBVsc8zgiJe9wV59HZsyAqUmnKjxoVsFjwBgMqcuvbi2Bfc4z7nfWc",
  "key44": "2AdteLWQRcHXXmW3enKTCrfVLazYqyaK4NJ3uGpagcnCFLCUkD629HmBbo8MAt9ZJfVUwt13ccZfog4u2Y5TpkW6",
  "key45": "rJeRRZq1W9QmJ5a6GXM5cbdtjDphgH9XjuCfgzSQkzaqU3rdnVs76mFSHC16EaNmtmF3pv63dgFXLMm5UBnoJ5q",
  "key46": "4RTNK5ZF7w2KGFqLe8UCm5kXJ3sgHZau96fQaYPf6ZCdXsVjhJQb7UDUEYEJ7dCkC3xkEozbuStSfREZ4SRqFTnf",
  "key47": "5iUn4TV92yS8uoS7xJjgLk8LpaWqVgp92S6RRqs2Tq1QxUYLvWtQ4tiec6gkyLTkidA9zg68JJiYk1RhUPUaMuwK"
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
