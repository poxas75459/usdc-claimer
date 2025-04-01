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
    "29JWHRj4UCFGFdQ2q7LHLiriwPNpc9Ae4sbzj5oCZKy1xfZ3Ra12ryd1eHMHHgGqv6owNr4NP434riWkipAxVZnv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b3wot5UrFhSp222wZ2gHvw7pFdYXeSTtjj1N9SxRr4cLNaZhKb74bMQRk2r3AYtZuTc71C2XAcBFmKK982qyzQv",
  "key1": "3CfuH64KRwZwfrQSwsrE8XKyfYQorYyhMJZsBRJJngAEdJpTfUki69wt8EczW8pBciAcp3XjmFbkci2Cf8RiKvs6",
  "key2": "4N42T1TmdRAcxrmtp5xu4kjrdqSSomKUguABXcov8QUcqngwpzrgQPhT7iQTZahDCoQDTpxGDHMej9J7jV5SvYmc",
  "key3": "2UWpMpU5UQHqAKtxshkEC8EEizYQKP8KRn3dT6xEisznzWm68V6CBmFVECcsemc4y2twJ7Kmu7bhZ8iG8FEoxjJt",
  "key4": "3KJDbCuUM61FDxhbqvRMA9Vd47YUeh7A1uHdc6YFpt3nRNVyoxyPsCqpx2g9tMg1nNxQxyMGYuoJujWJiw4oKQEV",
  "key5": "vz5dgyNaNY6MEvm6WBQXs5XhmpuZB6nXXSkTZHSFZmZs422ftTiNMc1rYpSXcmNJNwSy9WZVKgxqBi8tZAUqZpk",
  "key6": "2EnjmoKFLVYsvEccJRkJG9u32xM3d6Q6WUaRtfPAhH5LgKrSszGeQUMhL2vymQyKyN7Wh2AMFTTZFP5f1etoTVw9",
  "key7": "4upK7Cun8kCQPZ6Z8gJjsKsFb8qmpJpkH85QMw8bF1fGf1aBeBUxrfi1rwsnD1JK6iW6obrhXQ5EExwYiuDENDzf",
  "key8": "4et9VrK9e2NVYkHftPFct7khc8M6N1ADwtERpNy4CKZpFdkr8z9WyiUr7hQ8GmT4iktaXfdXA5AANBQVGDPS2etm",
  "key9": "3jaZvg2KM3iWjH8UXjRzq7onrumm7GXCfP7uFpQSbgbhhzkTuxCu4TFG1MWThdYERZymTeVevCzefiTwBKJjtVit",
  "key10": "3gRSpQg9w5EfvtLyUTa165aRTEwqzMHUMYLgmMjbs9qfy4J1CZmsWs4mRw5pthMzeLr5wWxGGLQAfQbjx41cqaSY",
  "key11": "4ZNAMFk7BR5hT2gPyHQqYnzjAtd9t3N1DCwAAfUzonPgLD8GFQp4cwXhcMscNhawdnpFP4qkRz2i9wArvKd242Yu",
  "key12": "5FYyYf8bKGYmvAd7f8Sm5M9TkaLWKvuKXgvw9o1hPPUZKwgdLsigsy1gdZDLFNM3ELAev6MdbcpzErEAUKPb6GZQ",
  "key13": "4MwhWthtJVu6t9DMTch1HzrR5MhnRv55R8nMMAoRyvMjgEBkRc3rLC6VXwEVW4rLmoZdFBuxtFXhNEeVgYcet1iA",
  "key14": "4UVWVzwT3isRc8Z8f6qFA9QvBfnbsaXkysfKsNGCziqggKEE1povHpYDT84jKX6dBymjuVtXtUPCzp4Mz9g8g2zh",
  "key15": "33DXFWLvcxumLN1giLHaw7DUL9PswAPoGzySQgEcGq3W35ke52Y89YXX6QYYqcn4g6cdoJTSsKaD47yctRYamqWt",
  "key16": "21Vu7H1SJrYcYK2Vra8M6MJjyNeRvGA7kU9hNWW4k95vYf2fsqHCrUfLsaZ1BupkDJaiqMmiQjX2FYBezygR4x3j",
  "key17": "HRoYLzCpT4QZGr3fgZAKzSMbhG8Hx9SC2G1jmwPsDwVk3nq1UNXJmtxgbxbsni8FDVFsCwzFWduKWPRfPLhuc3m",
  "key18": "it3GZgTNKnZwGHXoYtFzMgTSvvWkN9FdgCNqcALfwXM6iq8b1T2NtNjkgzyMf7t1rhYAzxRqcT4WYz61no8EaXk",
  "key19": "2N1qYLwgRewBZ2Em3XKo5XoMbTekA3JkVdgPS3udLPVL81bGFbD897YTHwBA1Vk1FUYTvec3hQsNpPd3SWZ17VUD",
  "key20": "2NJMx3dM7Jq557o2tAF7qCpS7xZkhgEQK38kRi64wobE32DEEoQe1hyzABvgfD1h9zkwoHHJFPQpKEHEVi9T8pb3",
  "key21": "2qRW1Cgjc3eNUgUDGqSkzy4ZNim2ekMWnuFwUPAZGFsTVEm21djLK5b4PyvuLEtJfWwEbrA7FYgHuibxG1zooWDz",
  "key22": "4HEZ6y8dk82aHKukDrQjLvxjbGesysEw6GnYGos4qvp21wezAbYczdmrquL4nqRuTCqLtqZNxcMpN1e6BGq6DBJd",
  "key23": "2XhxbxyemefA6egbYxhZ8PnSjRwCjVwnf2WSoqKcLPxqXFRjimN6nkgJMAJxnx7MewoWCxa341dwUAA2T9y3o72K",
  "key24": "D7XvZAzbUSH7qu6hWUCQvwMp5EZGEuceZVeENXi4ixAyQyJk2RuJq9BEFXY3toiSmUtRSeFwgmP2joeQM9421Ym",
  "key25": "VaokKGFnfbN54UT9hkCJXT9NnCnrQhix3BQRjzcuvFSV6V82xkhQEHmQxRUyre3QttbGC4XoVMSPCgarJkiWwd4",
  "key26": "5BGoJGcV3GSny2fmPbAzpRbJ6KwfB7VqhhFXAG3FPHpYyxqT2oJH1wVgKai91XNjXJubbB7GMZzGrbbUzZ9hKD2w",
  "key27": "2wbxZSL9eEVJwqKvyBtYMAZAjXEA25PwkaCQF2wjuTccf6GQqAHYvWKhVvNwGWC38HjCL4tSz4hARLU13R6nqtTb",
  "key28": "2aEeeNcTv8Hr2HQsTE14HVzgvxnbSdB9XyM2N1rWRi2tyZ9VjfmoXQNdjq5vGwGgDVU6Dz2hebNC7qJQAsHrxFWv",
  "key29": "4ZddWq872Ejnd6VEiCvfABvoNDXDCmMW8mbJyVzxVwXYwUhDZzD8vpNvoy2zCgeUrgXkvaZNLKH3CAZDMsjoiZnu",
  "key30": "3S32YsDxEbkgZtva1srub7BxDn8c48JJmpTM4YZ9QbpZEcjmpr5t2LsmYN6ZkwjxGjs6dDYzyyCBHikX9Hf3eobf",
  "key31": "5bfhBCeNu8GU5Gv4jwdGiYz4d3X6KUyTz9qcgjLuddeaJvnC2kJRBzGWg9YCVUtUTsGAHE3UNd7fPDbyvW4NVTo9",
  "key32": "4V36xEHzvKURvzNHgWw1yY6DhXAF7dKgo6dq44t4qCLxU8gxPg5rS6baXJd7bwZFK8G5qvmfdLFRJPZMV45kLCEs",
  "key33": "3pohqcjgadn6bMNwcqWx9HCzL5rSqWqGDPFpFuXF3KRSURRe2sHDXwpLjGug3thKxR83p9d4GfzXo899CZKm4nrX",
  "key34": "4fh88uFaBp9QizbkAi5B8thMTz4qsMoapAQwCm69b9YDJyMYrbLvHcugqRzwmHYy5UFVTBvSaqve1V2CckBQcFLn",
  "key35": "5uPALXGapXskqFY4v8hoXxLy3PS5AsywpJtK2z7MhkyLttyt4WhACsJ4mBKqrZUJf8n3JKcgRNLHeo49zYnt8eir",
  "key36": "3u5mv8Ew9zbRz3V3MTXNs9Eq4MDfZGJF19vc2QMbYLRPx3mPCCSuVZohrnfWeoZwHGMHC7xHbigiCyYjqAheVhKS",
  "key37": "7gXyszKLbzCqAnrrEngGrYfYcFFpjQMzfbtvGVcAjeHwGJRtT3g5KJeePi81nozxP5Ni6QVN2e3KugN3CBCNu1s",
  "key38": "54iMhLJhyGeWFzRBtcV7LRq22TjVV9QdvuWjwNfaMKYpqQZqayYq5E23tJXc6frb4JBCQosgs9zUktJ55jfrbzFw",
  "key39": "5hHNdnHbj8h8yoPk2L74HVpLNWFNkCn6gBknBNojHjsxSGA9Z8AHE2NQ3uygUR9zttXcXFHuM94kfxL2833VChKU",
  "key40": "34tkBu4pyymbVWZz1cRjqzn8grWCBRX3MuojjYRmPfSHncMVaM6cte7NYor7sFnnQ3kCt6broYpue47LdNjwNoqV",
  "key41": "3zVe1jQ5pP71LmNs1Mv9uKgbFhare7j3rZUgeE9W26kevqfMixr84gbpQHXmQGNCgJ3eBYCoj5uQ7V9JCjNiC9T2",
  "key42": "2LXL3eysbwrPpwdTAM7iRGMWKd1Bfm5QEbmiNS9uZeQ8BRQ47MvCbUWTXQSVHoY9KATFLBtiBCkcpwQrmEnup9dR",
  "key43": "5idR7EGQaTxEj1PpcUHoF62e5Q9JsXqbZ28se6m8JfLYKPDaKEsngYkd4SwzjCwzdQi2B9BPq812k5U3QRKNrhMp",
  "key44": "5XVYfnrPuvtVcSSoTkYcUkx5QVn7BxDToGeapytB7KUv6kQDuMDAZhMSokxfX6QhZJgEWMEjPC3UudGayNyT6Xjs",
  "key45": "357r5wT8n2mP7uZD4pFtS5r4RQ9XwfW2WqczkDGwKsFNWepv9oouGzzXMEv95PPMK8696hWQkvv6TBSzfZjdv6mL",
  "key46": "2RUJt731WrepXo8tE4vfERDhm2Wxasd5NAAy25Qc3J7gS1GSAUWG9f6xPMFpwRe4f4QD1r34kGKCJYL2K6rw5ipp",
  "key47": "2JMdGiLMUPdSVQqwhStSGdPvkhiSTELw2TdbtfRzrhBYgJp7G2RfAUFWUrTosjVsds9RXhBFWoodxnff2te54mQC",
  "key48": "2iqUUURuL5fyjontAkLHW18rdS5w1YwPhqHzJrsZXkCheNYkWQc35wf6vwmp4tPYqgZg9ax9rKF66KaaH2LaD2YS"
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
