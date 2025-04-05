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
    "2ik4ckzrqS1wc185Sm24kJ6wLWDh1MJp3ZE6F89Jrih24zyhhn5NwoQDUJNPFAFajxEXnGGNpuv8iiRYmZu52zE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g9rq7vzLSf4RW8NFpHybT1PNZWGqtkXf4VCM9ACozFrkhDLMKMCH8CpNuUx6SbUUdgXmcEGSatnqGBWfDqowQip",
  "key1": "5cRLfpEbhnG3VBS4VA9WDAL38Bqbye9kMWuBF9WrCSqiK4xEcggKkmDfkcfT9FZWizqgApYhaEjLw4T7JrbsJma2",
  "key2": "4PQvqhqyNybLjyqPSLu21ESBhHeegNzFe6DqMG8BU99dgaoED6YEUy19RT6rbpaWqrbxGRAi4ewStaph32a3E127",
  "key3": "43Zd7pUQPxLkAEdYsJyMeVUyLdWB1FJvsb8t6p4cyQcKhTajWJFkgbHP8tZFsCg2PBXuP25X7pN5THAUrgiuAGKa",
  "key4": "5AuwEzRT44tV5QNaGubF71qV3S5npksv7hoXJPyjcZTqoTx4jChXQ5bDw527zcBKTZRPCFcsTfuv99KpLjqQdKem",
  "key5": "5WXh9vCB2TTiwcH3U8Y6jQkuT9AGhH6AEYr9bedAZg4YdW4YnFk4SEaUre2seciRw2sm9XF2azuyJsw2AMSdgS89",
  "key6": "2o7CRtKAbmmnSini5hsaz3RCfyr3ZaDcqxtNHGQJHTTYUo4pJ8wZzSnDLyxrbutqfczyBhQ4dyi3oTLL6u8CzGhF",
  "key7": "8MBqhPDeqrJYCAR4a8CfoJSLJNF9S3e5dHguFs9KrZ6gFqYNuTaPCfrd6K1ABWNyhhcn8kVkHb1xeUfXeF8h4tS",
  "key8": "F3c5ivJ9hFSuaSuar4eJnVHC9UJJdhnvR8oNKs6bKqGp9ew6gaHgLhfAfKrV4YsSSSu9ABq3HrxdubtzwMDbQtx",
  "key9": "2qaT3JNoMM9jv86WwkfnAjZYyoPS4HtWxSL1qcCgSrKqy7V8pQTqzpyt4syg4kfZNUzRcDf2seV9yjxbM4R3kgag",
  "key10": "5Rp5dYjNgmd1CW3Rjss7ETwQP1pz2yEpWfsf1qkEJvKeiSNwaXpGJYLAVbztmiPAavtNosbKTJgR8f62eRkyvpwY",
  "key11": "4W2R32jSbSpyV3ZEQ7xQgZyE5oyZRGJ3HnwxeBLbfQVRzRp1dq4VdqEWNKqSTUwuFSpYcATZyJGMxuGtB9QV5pYu",
  "key12": "3LY2ouqEDqbNeM5SrtW12tgk6U8irkTWM6BFq6dbmTLKjtfHvixwTVUJXB4DjFjqsG3knhPspibuXmyqt456ttpe",
  "key13": "2q3fhndyn83nAgzaEUqV7UyeZFcP6rwuwVH35GKb1kgXmJRvSvtqDqjYcyKhmfVpEzR3DC4ZTMX8xSaxuS5w8DC1",
  "key14": "3X3CM3JzLhxs3bWrchJURUbhByeGN7VZhebzsTWUvjBno8jV94nCPE7eb28rgkMybA36GSGpzTpETszFDbJKzuAq",
  "key15": "34jZoqzMzc1Mc1pLEjxrGao6qTjvJdf8ZNkN3uYdvy8BDHhvMFTEg9kpVvW8ayxa63LcbBbgNuXwfnJouki85jLh",
  "key16": "2iZoHkXec8sRqXKgDvnEYpNetH3hn4Tqrbv3ZyFynjcsBfrXV7YJAXpJ2G1bsvx4ScBe9vKKir1NqTDBKoQzGcz8",
  "key17": "4RCGrJwPpWohqG5SmhPCgLLc9stCJMoZkytpXE3f1yTGVj373bZfMpVNe2MtuiACE7ea1WCHFiramgoE3WZ2ZvW1",
  "key18": "2RYWZfh8jiMXAEonME9XMm892AQMrazNN24XDzrLzQ8xkXRaH1FnnezNubBJPCYzi9xrPT7pUtA5UCQ5LsDgKFjC",
  "key19": "3JjgQ1RiWeLxa4vfXwCgg37NxXpSvM4GitYZaSQEUFFHsJcuf2ZZ88SfvQcGz51LymEmjki6T5ojC1QiWxAJbD13",
  "key20": "3Yqg2pzdtxUDbbhdt6AJPeupz1v5pvrhwQo3NfUXZCBPoC4BZvZoNzVcsxJC8rJFWHtDP3SQaQUr15HbkEKQTG4b",
  "key21": "3KESsYkf9uf84uf1bFBTztDKXjGxaoB9VKeG6RSAsQZuaFBoA4srFf4zha3nbJpzZ5BN43DjrkZRhF1kiwmo5B3b",
  "key22": "4EdqDSKVGCgVfQ86FaqWBBPV23PANJ2nfMPT7NekkYMVThjFQTPTCqyxsx5etHeS7SLMgKREdN9pJKRX4XJMPpc4",
  "key23": "WHMPei94EnnEAW5tvAyXJ1Kh1XkBUsAgix361DLKeAdGxgkU7Byx4Z7t43y7exjpsSfUAZhNwm4J3VDqWvxfbca",
  "key24": "1cNovNDHyKZ9rEh52o83cWdeNizUUeGJ2sWfCpQWh1BsAT4ytSfQ7gkicjzuVEXwUr1NqwQLMqZyw12Ldei91Ua",
  "key25": "4L9vnVPUqKbPiYjp4o3cRP2tU4Merzf9eiCeUfuzJf9dhqsZRFd1W6XBjtNXmdB3yST6wp4dEwYL3C14UcmC4of1",
  "key26": "4CzbC8ATAKCHpSFLBK29rFBUZagz2QitwxqeUBHqJ8PUnByGQ1G44rqyZh4LRuqmjc217XcrnVihxENYokijoaWJ",
  "key27": "4KMRe7hMjMQJZEyqDVQuGfL9JGwNSvPEtVUx4c4ker4BvCQ8PD2FFtEzPu98wNaRSgEZxyoLLaWmmv3vEYUnEynP",
  "key28": "k5kHnJjMTmmm3DVwfUvpdyxtiLB6VDS4jNFaYLyCnyxF6YMffWke4fKHy8Zy1dD6X69idwzW88RTSJuNP8Ku6Lb",
  "key29": "3nWPyqBpWayuhnxX1p6qeQcNbBSrvbo47EVFzApkxRWna54DEu5cdjRmBUycDckmfNpt8GeBRHDDCgcAFD6hKDqh",
  "key30": "5dX7x2yz383cTBReAJL6qVUpWtGneNHgm5bhq8atfo34xvtkbcdrxyJif3FvQ2FAfn5RoQrjUY7BPpvXi199KuTt",
  "key31": "4YtyS26YXH8yLLUvSvngbNApnU3xbbekUrFTdXDzqYg5fPopredTzMwvPWwfJSMb8P9jcNj2gSH9UJfTNGhYD72B",
  "key32": "4QB2ynq1Xsn7EVo388kp91DrDfYJnFR8b3jjrVusRZW382jKfTj9HvwmPVmdKsoS1xsPU9hhzXtVsC8XZRbKAAL2",
  "key33": "62ZbeSy8j8arGWX4oLhscF3AymKkuUvKdN6pPP72kCeKJoXUCMTaRGVSmrgc3DpG5fv6SmyhGDCiTN8QKLag2ZZy",
  "key34": "qbjDv6jxEwN59DjqXfWNuNzHazngQJ98DyQAHuUcDHHpRUKGP99WKVFtbSM2DsArRAaqCDC5pvoWLBc93u8x56z",
  "key35": "6KGazs8JNB4MjRynv7jYPP6FvMDnuRCJE3xFzJMgQrrYRSgkJKcV4YERJedFGQvvpm5XgbH6dyfXYCNcTaz1dVy",
  "key36": "5cMPeWYf9Mg75H5jkHbscQfyh5oqCYGn16AYy6u6KVAQpMjkyPs5qbdJKhgRpTcmRRD4BUgSxmNM3kwsWZcYaK6H",
  "key37": "2isGdGez9wLSFPK9w48gJXgZGhbvSQJyS68KyUjLwTkYgMKxXtbFaC9jVf3YWgiesHEsyDpoxUxXFXwxhqpvpivC",
  "key38": "vYryDsyGqhbEiMZAv1NMVERR6bxMQJPoWPYrSDG2z5kXGQcvD4UPZPH66UmcrFutmaZ37axQz4riPyZmwqjZjny",
  "key39": "5LeChc5gNRLjHdFPFU91mZxy5ih2W87o4NU4fA24DfBH5PQai8nAHURvcxe3KJTsN19nVDq4TNdwkASQiBYRDdnA",
  "key40": "yNNJAWm3BPhGcq93DwpDvPcVvzt87b9sG4NXAQBuChzXjSGKJUtDXQfk8B4XkX9VcyNqi8dyGLLDsgZ6xbBxmhT",
  "key41": "5iRgxmnTc9xsjh7AcjGFu2WBE2oMQY5g53cbxEkcdDSR9g1RQtsJLS9mTGZuWzrLdztVszvFtbDvfsfSwyUBjcCh",
  "key42": "4uEojh3PCuLPBHvhHXPYaNSzieCdoZS2F3HKNstA2ErPoozZuvR5uLuM35hrn92kDG9WzhTRwaMs7iUb1LKASSQN",
  "key43": "35fc8ixrb1MNSVmdCftQDiZ4brFyXo2Nrapuwhiqu1mJC9WVTn2Q6Qz9VF9s7yi1oZViK1rwRFKuW4xgzG5X6a74",
  "key44": "2JspVpQQ8PXUyokKuhbHzRQifZ21WdnX2cNDVvM5EXDefWL261N6yM95nPGBL1jBAtPf5B4bXZnfzft7biVcYQ4o",
  "key45": "xCr3iBUYicxTjHSZ1cjeuk3ePwMrZf4QdZxjXiqwJw7F9DTcY3jF429wMFgCKRSwZXTea6s91o1UZZsTisWkKy6",
  "key46": "4R4jHRVYbxZMvypBbEMyukDNLeEeqopnSXiuWZdmNhENagoSKVNPXRmjrTBXGA6S7sNLHSeZ54dUkfXDuqCrgATs",
  "key47": "25DoMfhT2XC95DwCK9ZP54cRxG6xqFFsE3BSewNM8WdsxkLPF6U9QmNne9yDHtxfyuVcobPk8vtg3wA67tjz6zDW"
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
