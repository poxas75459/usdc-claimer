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
    "2hGjcxE5TujMsXtF8MbBMHVTSuDRA4LUidH4YsGWzSjXvU3zbjayAJe4kejE7zTbc9SXri2cz4ewaZsmM5mk21H5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n3BmV4QmwZgREEc7nU18yzWkM7K6UKC6PmsvwhG1XrJEuoT5CZdDUB1HFeUudu7nXp4HgZ72kcRH61tz7DDNP1H",
  "key1": "45v3Qvp5Mjxdb4sRWjW9qjXg3fAPoeiARRNLZXZm3ArXVBZekhg7ZZLoMpZ6jxthQzy3Emu3XHTM5gwQ4SSMmUso",
  "key2": "39MCo5UukLaEvBvgKeua1E6K34d3jZiRHu7A6Mosuexn5nGTVWjzs1ZVUwMke2VyBkH5XEG3empHChxQLF3sci7i",
  "key3": "4fffVKXywq9hNRSdcbiRZjbVwCmfPtiLFvHyQhpKS9k59gKVP4ngsaWbFakjUueTnGKwt1u5e7x5joi9EihGBJKU",
  "key4": "3XCp63wMYprDgSefwf5gop4FUXnyiKVgDx6jyDo9C1wHsooJsMsRhctpf311uKRR2Kks2QJ1gmN4RVLt222qBapu",
  "key5": "5SGakXhZATzoN8u8WCqJFUNpRmqSqhgKp4LYRHFit3ZG4a7LGKw9c2buiyFiv8jt7tgMEiUcfA5CB9TsHaSwnbqS",
  "key6": "5LYp5GkjC8hUmGLcE3W93X79KRNgSqecXXwbtVRFksCooEay2uLx3n4pQc89EcWBsePxts8HnL8NUYEeHx2yi2oC",
  "key7": "288fJQUu1CH7Wy3qjmVwMEeaaQnwTWMgJCqbv2Lsa1ccz5qiJb6BZ66DRBskHK5TkYY7BHMzinYUAAq32N6SKJXn",
  "key8": "4Vxb76dpM5RHEVbQhmknGYDBN3iE5uXoPEfdriLvowPVhea12gefyzXGt3h48sftZUQPxksmLgDjSNjyZ4AMKfty",
  "key9": "Y1Wb5WoerrN3bTAtcKkUPzVazjVs7YgC5VEV1P9gGYQKppE7AJ6ETxuQA5obhX4W7J6XrkHLysFUiqxLxgi4mQ3",
  "key10": "3NkKggxJGjtyC7WyXyA9Vg5GAjHHrUa8GnuLbKzHoTxhSto7mHj3dRWPfN6M9BaYSkWX5TpwzLwU48MRojxpSwkd",
  "key11": "2PxyCoT1sv8oeBD99vGarkGNXQvuV2qtYfVSBayb2URtiE9rWbJ4FYHkL8oiNSp1G3D9qCEYuhc7GZhB6QwSvhvA",
  "key12": "P37ED9YZPzoMbPQkpzj2FB9YHCc9TZPzsAnNQ9fNyBNX1Y4jVxHjqj3hGQ4nfTFCWKsABGk3SH4kx94eUXuBqjU",
  "key13": "h2vNKAYYaXNg9Ziz1E2Ka1tFadQ8zR3bCt8fzHr8v6sBWULB4wPrr3GjWTjnrinB57KqTwkGPMmRthNVdim9SWM",
  "key14": "4Hpu9Wd8x5xQ7evU5JF7z8nYKTo6LR27TQqUT1XSwV6S2gmCgfsdvH7gLoRECfdQUDtM9K1uR3bLNATu5AUX6Ji9",
  "key15": "2TTgmj7btuokfC8wXUvpDXoHzheZkohk3tNAT7FNn4m9xtb7WEeZnjHsnwp5VBeiMdX8HyJKYEZknxX2ZpLhCr23",
  "key16": "628gw4JNsZ56VKQYTaaTH888Mf775WPWBQoehnutvVtEZ1arYjevZqfEQeLUrEkcjsxov9WQoHSKqnoLgwEXX3J9",
  "key17": "3ghhtuyBTocqNobEGyLH59mc5sgv6n8cK7cs6mEuPiHhn5pra84R4FyWkRV6xdfbL9nYw1Gk7Ee3oNvhPPoTNezZ",
  "key18": "UFedWYVTPTjMpC2x6fQy2QscKWHBpkLrv28DLfuCrYbcgrwy4YdExuKryc9x5pViLKDSh4GMAcjKydXRMfqiGKR",
  "key19": "5fUhN9PNLXTcexe5rZLEhqSo5pbANLoQdZ1uyJ1aF9h6MA37RCXxaYnkEh9HoqNGKT6z1XPdFHdBqGRsgTTS2kqA",
  "key20": "RdzhF241iNrvrXdiZ6twMFkMeean2HLadAKUBvwD4YpLhzA57dQBCAfSWYaco1pqM6TQ5aj1DoTMFMig4R29QAd",
  "key21": "3ZRYMeUQ57D6ecreQa8PEPoK3UMhq3ML8xb8D2fkpwLPJxCQSbqcb3Xasx4W7LixRr1dXH56T3j29qWZeS7J3d4Q",
  "key22": "2WN7DYjezh6bpCCMPnio9bZYYseSFeN2bmdKaUeSTFaCEpZEBHrxUL8D3wS5fa7APzHQYkT7PpQaraE5ea1ZGZv3",
  "key23": "rfdBSmJKi5qPLdjbxA1QADUQwjkSAEUYhc5CQDvtPa8uS4f3KXqkbhsfTTVwuVkDhoVrDKcJYZ8QhbjDkxwmmhi",
  "key24": "Af59GHmApPAqd2dNptXPUJLddvYkaNVQ5URqNU6kXhxHbxupaeg5a2SGJUa3qjwsoMN8Kt1rWNDJpzivzjyLiFH",
  "key25": "Be2ra8dgCgcho6R6fN1K2FZK7X9DheDeF3oL5k11kFT4XVoceY98zfyktWKfBQABY7GvT1oFoP7KmWc6ibzrWmY",
  "key26": "2sgn5hMqENqCuegVstuWvK3BDzoLY14yx1fYxi7bsrU5ztGyrsvGYNgY5MkG5g1PsTL7tsp9Pf4RvbJidv8H5GpZ",
  "key27": "S1gukm2jae7hjJNhu4nJVEFyP85Ni1NXXWszy3sqp3HkFna1EF9t1qcrudxNKhTp4UeoF4eotNqRT5dcMouTiSw",
  "key28": "5URUbkaKTEm7rfCu1e4hvf4RXJ7Ug2JbgzwMGEryYBb1biGZc33pzA9w4DjCivKgiT3J7o9J668BAiEqTkhLUsSi",
  "key29": "3D1L4xEA1X7j8arLsUrDi2RB6YCkPdzqEAJ7mkBTY3B6a9pRavAQ1Fxrd2V9i17svhDHZzfzTQEGNLqWScbZwp6p",
  "key30": "5rfmEXJaCbP5XNKpGJuDvCpZw2YtJHbMdV4XBuTQkDj93AKX9s3LwPMnJzeesgbWP9z2siXjcSaSgUq2i5NWhiuc",
  "key31": "5GToKXQB72R9Vn5Cbt6dTeajeKZjtnvusCGYtanajWojRYx2DHggRiLdzLCv8SMq6Eb5gkkMUA1QmjyvDwpwq4DJ",
  "key32": "4dwRo5yRQNa7SwpkaQ2JuUQPQARREg5Q3tWxtVwxXvBsYwagdQmEGSXWroZat8Rgdq1xjkUYzYrTpdu7j6Hm6Gbs",
  "key33": "3iMWd3ZCKemc8NEA8tr1BNNQ4fgBbG68p44a1LJiUNkcpCXsgtDtJZv5323mxqmkSmUDYQe8cxyRqL4YE6DZ6SSq",
  "key34": "4SvFQEPNQTq88F888w75mv2qNsF6giGsNjNWUm6hUgm9q8tNGxcQZKf9Qp7EMfk1njvLY2YfYVVhqvfHG62kJmc5",
  "key35": "45pEAeHoETiayCKCsbcmA9au8FH2F4nhTmEUmowroHRtm4B5T5ZoRX682iRUGy6Me5eq6yhxjxSdgg48vFEo6cSG",
  "key36": "2DhuspSVovpYutAc1L9UB9SVfypYjkEVCDLyKd6fkR9EwaaaRWFMwPBCB11AxUim9Y2p6ShysTuUid9LV5ouT5iV",
  "key37": "2rvyAqErdZVAL5hnJR4Dzv9zvrLzbB72bVACG3f1DWhL4UVp78vArm5UEhw956u8j5zpHiXxqyM3MVkjGd68c2Ds",
  "key38": "51rgJTfsYhPkdyNupct4FdW2MZjH8fgz4eHATkw7UsxAEPgNNuGWBv5GryynM6quoykD5AfiWK7aNawaRizU6jcj",
  "key39": "NaXswdiymWH7uZtGdRnGZJzQsudEzimadcaNNak86RwVT7JWPqiiprGA18zXoYjAr1A7LBNCJYyk8GupXwdHTQA",
  "key40": "cND6WB7gPQ28Y7LWHFRcDnDYemwfUre9mVKEFwgDx655Ab8aBehmFjUMvupBkhtTdAGDcyiuX4YqqUTUpJYSRDH",
  "key41": "UVMAZuwn115MswotTKuQa7YaJKvgsN1UdSVe6RJuTZ4UbCYgrWzkpPbsGEPEDjaAbEVC846v7viknn8gvHWyjw3",
  "key42": "2dc6bvohsRBMuKJrLksPcX7FbEhVyUPZQu6qpuffTC5QczYCWS7Se6byjtXBCDwnx14g34aZfC5PHZnEVygSSCps",
  "key43": "5pTEGKsEYkJRvhcdRyEj4DNteSAtouAsXgnZmtqbyVfZL59G7NYTiwcuid5M96tUvW7PRqJaZqDAWfp2Qyafo6fE",
  "key44": "5RncZrFbd3g9PaTWwAx75YgAzhmoBWHhPngLz5X4DQP9uRAwsTthaDpxnwAnJLHEjy3QWuc1c6aDfJyGfCB4ez98",
  "key45": "42wUsAZojWYt9x4rpzURjRsv99vaKzyQBc8LAkJGxyxWF1EvchRhVFRLwmRye31fnoQTZtyFYMEri2wLsLvVhU4X",
  "key46": "3U6Sqrv3ANSGXo889iDfnFTMenLK8tqtDFwJnc7tddsuXyzrUsbRqRqrpS8thx1ZzEmmjK2L3VJpxSe1ub9qNMAt",
  "key47": "q6SqHMukGjes2utQJbCz2DAB2wo41QEKWKoTuhbxb71MzmWet2Hxrg8oY5SmhqpVJptY55pGPd3stLQtLVux5sp",
  "key48": "5DgwwsD2f3zJXUfC2ogerHC92ae1pWQeTVoqaYxXkzYiSPiTaR3B1oZq6RD7tzoP2kwow6UxsnG41JM3dxWz4J1g"
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
