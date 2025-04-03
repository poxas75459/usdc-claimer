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
    "586vyXstY8Q5DDxCmc2VCTaA14PDSs5rtcEzbbPdyz6Lgcyg7dQ5MXogwaT4Fio3iiYbLTZyzjFiNB5fow3NQo34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eqJpfr2Ye9E2MhwnUX2ZQoiRvuVH5qfSLvKWtQzzXNjGM2nN8wgFhqDU7Xc98zbNKXCKMRUaBWCQCstTQasTDRF",
  "key1": "YkWXhc8CSmdt7qqwtBEXMX692noV4qKtRmaDVfTfjeZsarCBe7E5azTrgc8DvsTr629vezN2Tx6793V97eCR6mq",
  "key2": "4spWgBhUZsE8Dzo3UmScmv6FcqJGXTE7tmA95ZfK3tFhyQdctjJYtgjrXSvXgEMvPFj2j9v1iB7DeiEU2Q3mYJPx",
  "key3": "4xgZvHX8rAMKCzeYRsxKf3K28hKWaZy1XnKw4aTVq9Rq8s7dfDJsokvhF416gKR1NcE9dKTyKYE3xZK5q6WC8XpB",
  "key4": "5zKZmcMGMyakS6y3oECQkwoXPud9gXYxMPFJgSCz5F92MEkFjoUv7AVh1XYZyGVjpgphrDNujzww7pMq7EE96ZAX",
  "key5": "66hVHovmx1A38Ge8VQLuG4Xy7uvBSE3VXKEiJVqiR7pDQeHRNdSzg5q3nWjRVHVG5ZdPeQJr87s6dPNE4Ub5Qygm",
  "key6": "28m9Dg2UpDn9BFDh47HELtEeJUZ5pPt37g6uzutivWDgCx1C9vnxU4cg9D2iL75DpGCAwkquFzThkwM4RBC8SMpU",
  "key7": "3dS81GSzcsPMiYXv7SwFajB8fzKswAcvX9fb36DuzSVDHKtgGcukqd6UfowR5e1Ub3RsNK5rumKKGiDQjx8NhFFK",
  "key8": "Agwi5cV1soCvnuk685Wm2TG6kvDPrfYWx63Sqx9kZD8EtaaAzCKx8fTCZHrndivhba46qRXEckQSmxmgm76u4PP",
  "key9": "5vRFkzYEq59RH9WbFjVpH48uT5z7uFdA4nWLGcqC29vCVgpUPXsT5C7vAPnMVBTB72XtRTjHk2CpTnSGSafuHX3C",
  "key10": "2RACJpdd7vbdhkz113afGqqSXbn4K6bPJFa1oXVj84hsMFduwygNd2wAcap8yqev9MsThdbzQyPLWxJcj9zpWwMH",
  "key11": "28EBaTa8aVYjqcocNJFxKMG4NEgAds1GdcU6D62U56VCaf6mJkF7egMun2KgAcW2oju7ds7q1dSBL2LDYnaQWD7P",
  "key12": "38obebLCqcUeWAYYapzUgEXnDvinAxSpVT1KHLJjgkfPhHbs696ThfsKZfrDoa5skmrek5mqGJNr7RBeSUVvVTLj",
  "key13": "3sBWLsJaRwDgsQfdkdBqsQ2L4T6mSMkR42t9kD2jfcAXj87q3qBnTXmMHQjfExZuEWA5BqnxbV2MDXs7uxkp3cXu",
  "key14": "5jT9AFtKiZQNhRsrvTdFMjv3fTEhmtcobgx5EsA193rw6GkzUbmkvfQwTkxNGeyfuvJHDfHnEeq1VqHGYZBfhYgB",
  "key15": "3wSDxHTdug7K3rGQCoqKjL4YBYxKVw9rSbDcmhid86Sd15k4mz2fNaz8GsjDDfQiZQjBPCxTCbPob8nKhk9oC1NN",
  "key16": "4PbEVE8S8P3Mqz85hzRXGiDWUwbGSdTuCQnu8mg4aFftuMeJFRtobc2jeYVQcwfpdyVvLw8TotJk213SvRrFaXA9",
  "key17": "5KNS6WGguxEvTmvvHeDyQq3dJZQynuv1NyGb4JQnay1xaB6qCbrguonLVxgohTRFx1ao5fsH5kFAgLHsaCCCzoE9",
  "key18": "AeK6sYzEL8gYVBDRT1Za5qg2zK4wszGJVz62A7J3H7dZneNo6xZCoKdNs3EJySjFEhdcxzgVdNNL1pCwm585PMx",
  "key19": "26voE3Zaon2Mh4TEnQzvJpwUqi8zy8dGaksVMwxFFLTYRKdPfHjADmATTL7qVE8QZE4sjeedRSnJV8k2wb49t9mH",
  "key20": "fHubozqhqPn5tyU1LGYt3t6KZ88FDbSmgyXKcvjv2H9SVCtfAUm55xBVAHTqSPx2Q74W4UxKZmtEUPcDBi4VDBm",
  "key21": "5jAjitZ3CknT26fS9JTZhtx25U6DEE2spwrqrurizYsTFYCqZmBi6HVEmAGCGjaFSMkG8tFiDRziu58mLdvZef6s",
  "key22": "88KFf6B1ADuEK96NYRT6Ft1aozTSxwVe1VTWsK298ZeY8X56ApQKTcyrzWDjhjk2SS7qdvq6Ktg8Q7i13poL3bE",
  "key23": "33bKEdfN8av8VU9VhDTocEZtPVrMF5KupxKvk3QvkLBPjEQHFfcrLMxcBr5UMEUUE6L535bGKEUnQ8EbzqKhAdk9",
  "key24": "36ZxkLzKHS837Fvi9bvJhcPeRkhD83gUK9Zez9WrEMHvArcpL3EdQbGczrJmgAUZzXcENqBDPXhKX5urxhKyzJ7J",
  "key25": "21npErgM8sBgVfZscG72eQoNwzzrdy7mqnTtJYxMCC5A9qpke8XRRo8T68DG5kFGJc1v9jb7LdnC8EvK9PQx5q3D",
  "key26": "5bfDxhhWLvvSLz5WownfRFf12p5uyqmcYSgAgNj5PgjST1KWFq9ZfWdkdxteiiDbXfE6oD31C76JsCz2fFBTRTok",
  "key27": "288xZgsYABFnjBz5Tv9mWTvsTNA2T117qKar9jgm9hztcQL7mKwu9Da251isjQNn6drJcHFdCV6bKf2gttuhy2Ak",
  "key28": "2sKkrg1VTArbRUCAhiKfJuqwJX4o2oSSCVgvizFYFJSNZSzEKZu6nhwAqPfYNyHUE6ZXNV6T7Hzc7B5mB36oLtxr",
  "key29": "5hP1JeKe6fi5KpKD377WNja1LFwGdyVx38YH6Wdt2DdP6nRfxCUFuqyxwE3TPHdgUgDWAyKu7tWyFwdePAjDUmbz",
  "key30": "3zpL4s4Lvu3EX7FufPGXf4VLXHgJn5v1JstRxJfdZaBcBcgmSmL6QjgyRPGCjrBDxqQQs1AZ8WjvSnzHvCpKFSbD",
  "key31": "2k5evn5X2PH2MaogxtF42etzFWk1Gh94b7m7PshRBee3rxfu9n2LTL2AQkFNiyKH6VqDFDhXsJEcsDhXHLF6QfEK",
  "key32": "5ZoE429i1sswjokApUTYkVQdk7o5TcZpmbdo6jt2u4RHLAUqeBL3Jf9xBym31oKALwLpxw6ke7mKi3Vs5G1bLwtG",
  "key33": "5NckRc9BFnHnECiuUwMtcUvUbSFoG95ZmMGpTmm6otozpJ3A2woQXcmAWhe2HPSKXQmp95VDGSRAE33m1GKgrRbw",
  "key34": "2hmKgoeou247kAVKD7Sp9Z7XdwjKmWbeqoZ2sHQhzTtMfXzo8G8UCJkL4vKCKup41z5n1pUPqMUXqq8EBpetmq6s",
  "key35": "DKi6Em6EKgmcKrZmYAomJCDPoWQ4Ep3Q79GJD8ABYfRW6AQWF7RNL4FjJBGbvi53Cyh5VrhShxWJmKy7BA5vtHj",
  "key36": "JsT75AjnqNoAPLBAAytT73aj3u9od9kxN9FkQGpGvLTt2gr8R4AZFb9v9KQFABwvVkEbtFsmV9rLUv2h37oHtWK",
  "key37": "2V8h6YLCsaMqQoackQ5oYrMJG2upWkobo9XZNJ8VmqXikSCRkEkNujEHcwCHGEvFVJXWL8bc4iNF8iY4j2QwVrVu",
  "key38": "3CiafVkc9RiPakFRpytUeonnda6tfhHfeuiK8SuTPD4TMnb2KeE2tXdU1DQs5FriA6EHcmihGi2MVQrn2pDHSFif",
  "key39": "3xkwrRkKHNJMMhEUyTQP6aAYjFfw6Tp5kXSmwcXx8hmmHGxqYcNqjChjSdVjfbp8BaCcTaeAi2mHf1VkDy2wGJhg",
  "key40": "38fGXmiF9t5kgdCMtwKTndM2wowicdy6XkKUWS5Sm7P5sYPXGaHqTQz1puL1eXtCEwpWXHv6PopJptA8bCRANTWD",
  "key41": "21DE7BeWxHjo5zaBWF72rgDc5d9Dxit3uFLM1hyjnAE3fw7peAFYPgeSTtw3Xk6awhvb7HZog18mx7V66VEC8p58",
  "key42": "5JaKRqusx77vMH7kypHftS44t3an1TDydA7Z6YxfEA6KE7nr8WJnDiy3DkhuQY8e3kmCtjE8s7b9bMgvCCYCrH16",
  "key43": "4GPQUAnt4uhCQ15pLR6fUkzF8DvNeSFZmfh63qwfm5YJXAndox9eChsbvkUGgdaQVsqEHxQwrHhMn8F6hf81M3Xa",
  "key44": "43Rkj3ATKyW4E8Y1xpvMMPzc2BDD5qD6hgYh33jEztEbZKbfEAtmGzHuMQkqXZdjJxoQBhbJDBWCLLBjHbW24Ynk",
  "key45": "3ZfmAVxYVSHwaiYVPMakHZouBMijytgubQhU99a2i84namSJZsKaKcwHnpLmjR93N2jbXGiQmKNHz8A3MTePcFDs",
  "key46": "2eBCeRymTZfagYd8D8TSvNCp5ycTzZeFyYsdQhce9kprqPWUpghfJAQKy6H5x85r7KJHSGXNY9KJX19uE98hubci",
  "key47": "46Pw3suqrmKosA2hEa1m4dDnasCNLkXfoD5VFVHRQbrLEhkN7bYRx4d3s3gYUZ5oZn5TqfvhsJTqsevBpAksj9f3",
  "key48": "6694DcYkBtoaLB1YFMvrvMWy6hYdb6zSjqRK9t8sFZBoJbT1JeWkRpzPfzfsJ4R7f2mrJCCY2ny12nnUaqJjbQ1D"
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
