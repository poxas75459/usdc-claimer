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
    "4GcnW1vPBexTbvcYLscSJWd1hxhiV1mc6LuwMWmz2onhaYdv8qkNdfcmNYoiUxXdCkmdXDwZucg9HZW3ewQV1Qb7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kdM43pkGUTN93ejYu9Y9j8tv1urAbRSSTPMeNDuBiodLgtmmTgASqWEEdKidAcyG4Af1QJFXadtEYSHPSC1wsZm",
  "key1": "3fjB67qdNGML9ygiWNY6tyPnLN9ZYjKfQKhTwebCcuvVUinsgSEjjtcLHNCf2KiYm5Sj9hN7Q3yNNexX5ZhKDwwB",
  "key2": "4RuaNF71FqykmqfFdSj7Vh1bQGQYxtg4AqvbnxLviW4bU5BK6s1JgYURrYvMVKpjUDJrMfC884RrVrj6r8JKDhWH",
  "key3": "4VAQCZwoEkE32wr5JfiugnmaDT5tSiEdaH2VaJ1TaLPFcWXWJRj4N2DmTWsr4wFYW2TbHTRpgZi42A5EG83vJjMj",
  "key4": "5Yh748DuddEq6yAC8LFpCWmw9PxKSkzt8CJAdEXKt6Y5d5xrawnNWNPUxFHGhXYYi9Sf2CESkHak3gviKMUfVHnA",
  "key5": "C5SGYW4binyLFyPQp9v2RM6gQqoYGyeVqKRKN1MLHFNYbRYQFxaetZwStGnNRhKzT1Lb76ythoBh4x1BwRasRRd",
  "key6": "5Zbgu3vfZwNwkbBMaRaqJ4qsArvpQvCoTX8BCt5p4wU138wswbRzMsR2AJspFZcqBW5ZMv6BehMDVcALeK9cjZVb",
  "key7": "2WeC3mdxq4yerRqeynm7Pnd34C1p3pgyebyAqhR24mFGPFzBRnTNuHrShebw9S1gC465kGJyXf3QDyNPQL8krTFd",
  "key8": "2RzMoWh7D4kuanBDjb4sQuLSYzqXAbQTVrYYPs4JsfUyHj1s86HnzQCkHMFmkBHqJN9ni8BK9uurpBDAiW9KnMhR",
  "key9": "2jB86smbk4mLoZksmt7BEYBzSa44BigdackhvZNixxjmQNS7wL3qjRGjxdPqwUztZhFzf4zpdfqWtsSmN3c6FXiH",
  "key10": "1Khuh1hLrkzwABpTk6nQunqqV1ZqtWgNYggHpta64ARMWQfuL2HWmU9399eNPDB7qiPZNWdBvAE4uytr85882rm",
  "key11": "Q6SK1njRA7QPiaQvJxjiWvMmNv5wZL59BaULsAUhh5cekrA6Vq7C86ZyFh7L6sdfeEFnzZw39nCAWgmB2tAaGpx",
  "key12": "4hZzwod9BUoaU7BZhk1PF3t9AM73HpaWZS85ALMiTaBWunUwcWjmbuJAJ9TaBd5fXNGAXKdaXT3MGoFjoWED72R",
  "key13": "56Uw65iEQkFDhmqyExbmhRUYf2Ya4mzb3UXie3kWKaPf7RQMZzs51c5rEGNnpQfSFJF7rjuTW9zWB5ArTo5DqpSt",
  "key14": "2kkaRF7QbsLpwMbfMish2xZZ1jbmeypZJ3KuPzQn66Dp2FHuqXLAnp1tSftStJh3RyXa97DJgTjQHFitR6SK9FSM",
  "key15": "61hXY8Z77Dawz5k2PQh7NBfxKQfac6qksXtWQedQ2NRkGLD1yNhzTAZxyzAixV1NYQhgXbGAmSMxXzXcVupzi5yU",
  "key16": "joghvmAS9GVszLMqmF3x9fYBmTTQZTobVVDcn71YW2VDndNP376ELUJ9xQKLFz9N1kZEEcECrQs1CrdHfuxKBEk",
  "key17": "2HcRzEbBbEbAfZeZSsStJmPm148RSAPSLWcm9c2JdUDfUAmRjhrb4SE6RMnKEXChdWzw8gZuZ3z95NdK6X8pNbkS",
  "key18": "3rxiR5Z4meD9Q2teZewwPEpu578MjHkphrLecFHgbm8FbQfgRxxHqMAizQafqGbx7aQL1YApXeVDzopQrM4Gi9rk",
  "key19": "22yc4NQUfmeQy9vFR9BCdiVTEjCR985uJzHEW5tUMWWEv4ukyKJv3bvM4fjhhMECaMkK5Hzc321TdUfxY34DGYgV",
  "key20": "26GGgmuqwrPx16S42SLRc5qL6STcvZm7bQeKpLVHHK9zodxU6NgC62UVBys9qgKa96Y4KoeGeJkQHtZaSDy6taKA",
  "key21": "35u3FRBTMrgniAdYKQ3zUXeUKcq3b3Av5VdX3YmVsTjKM283fxUydYJMeBuXFbWpWPVG9M5mmnUv1SSNXHNLb8xB",
  "key22": "5yJiq3UNywoQK2EnQUpcVxqXN3BkHavZHJM9VRbRT3JGA4jEE8DKVWBRoMqXrhDR48fau5FYaifcqMZEiMBcF6wJ",
  "key23": "swwbSN54C8WQq3soM3twaJzvmzaFFgHnPztYyigorvunFPhbRD31y5VDjknjB8rTzS1r7uukwmdkGCacboFSgfj",
  "key24": "3wG67nk6W3XDEyZvjCn8aBEChqcwDKcHoCQ3nsZ1qA2Xk8zoGkpVrbWr4m5FQhrmgYVxG9RLdAwVBkK13MHJCwfa",
  "key25": "iaScL6ej56YoJkvpBhpHZgEsGF4APcNNrJRvWMh37SvQwAwFJ8vhN6Z2khqds5hLJ4bc4rUdr6ebGqYEfdWjoae",
  "key26": "4xVjkXsBaRQAhfA4J6x5bp16RS3mvzDpB6Dut9PyT5igP4EkgeVcdbjhiAKgAyt8UeXWuk4sYd78JdgVBimiiX32",
  "key27": "2qcVy1rTmvYJmpq2A3wvv1UeDsipYr5c6YW71yEXZNuCbTAZ16GifTe7pn1Q7ExKHwk3TZU8zTELFMU9uxsvsQAe",
  "key28": "4B4uu74gXW5an2coY6eKtA2ECC8i5Sczh7G5ZiX2SPA5TswREjvisWDL29U7MSotrpVgRX9LvsXZXM6J8p6AydSL",
  "key29": "2QZV8y31vt6jZZztMuVuPp6V3KHBfi41FLqnMpLfaZm1kaqo7EqcumStv2iGsqv4Z8ojh2nuidTREULUS7upPK9S",
  "key30": "5GosKBHmrxYNHbEMPkktnDP112J48r5CqW6f5sxFipjXYRVXKJkoXhhKN5UHKBE7DpubarjiQoQnnzV2F3nzJ8KB",
  "key31": "2DkqdtnthxD1fSnN8AG7VeLqdH1F3Si8hJ6Gt7oqcgau1BVURofYSSmgUPnZ3CDua8iPE7LYf3YHjc4AjgKTRx3S",
  "key32": "3LnooFZ2PrsxtomaPR9m6BDQUoxFAh7JHcvAhXoMify3YEWJJSFm5PxvEwUzNrBSAXSWRX21FaUBLNhknFQyXi2Z",
  "key33": "4QjqE6GQdVfkfjj5tcsnyyvinPJZ4GkYPmjhXhDCwpF1fGM9KiMPfVGm6Yqf8FzNFGc3qRgbNicDCWUqHZ6Fu7Pi",
  "key34": "3dKq1izdpYcxoBoE584UPejGxXdLqfYM4V6BXu1NKpec3wwvb2JVe96DLXAHE64k2baB5GwYvyuqB2GMMCQnEcRR",
  "key35": "TW9kG5F917MYTskc55UUoRY2me3eJ76A7E5g42kNro9EdZCpA1phSVvQFSnSbvMXqgnbMPhGJ58g4WqkBZLN2hC",
  "key36": "5iLZ9wPo7tEtPZkLhy7TSTq2uGytUv6faUXbN5b5j63KS3eW8iHALPB38rxnjFMsv4UMs88Y4kcTLpkGLeH4kpnD",
  "key37": "4gcXs7RUGydfGVuXnmQY38fY93oinNZcp684zq2n4PUbe2fYU33XSNDDSwPsSdicc16iFChRMUZjPsPEopPB2WWH",
  "key38": "4LjLyn2a9xtUn2GipJch3r9zkA15hbz6x7LCPD7Dfnf26fjnLRkzru8Xzs98sUivtHstV2KCbfwGTK8YqHWsUZG5",
  "key39": "2QfNvLVfQytSNUrngQt5kLivXRsMx1quwvfSzXMhK5kG9qxrj5HYk97crjKARJSXafkkpZetHkVVKrcWCRxxT6w1",
  "key40": "5LK8yv19A1TV8PXV54TvxTyXxGHa8ehrkAH4x18e5N7AYgANdzUH5dnSjqsjP2UHWhT2ZHpPNL73Wf94d5qxqWof",
  "key41": "3MMw5bQYy55vkgnDxC9asZ5Z9tv2g2k3amgTWUfxradacngprcmqsii7CvpfBBhjPi15hjp4HwNtjAzqupKW8J1L",
  "key42": "avhyH3u9wWWVPent6xoSkZ5EvSXWuugtukXRDUF5NCwJCoKVeSrwHD3wUyUPYraYrTCNLXFY4v9yYJUa62gemqk",
  "key43": "tWzcbZUfz1aqTyedoRZqGSmdNDXtX9GP3nZsebSh6nr8GPveur3rQMzCY6QhHsdZs5foDAL9QanzfmrTktTEMoE",
  "key44": "aiCdqLoDnp72EgiZYEri2oFWdjc2U4pdA2jSAsLZSXTZmrp7zDAQdDtJqZbBXbpiQWbTqWajharCgJD4XFke8gR",
  "key45": "65oTuU7WkYLfiDu8NjnLxt6RJDNZhF824RTzzW2fcrF1dtSQnhZDSUKQYcCzRtok96Ff4ZPwLnaR3sfQYM1ifZk8"
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
