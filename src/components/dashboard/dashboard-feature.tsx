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
    "4tr9mJjytpxBzNfNW7N4HxG9kkspBb4do7HnUmTSUL7k981gKZdW7ai4DTzjvraq8BJzEAc9eP1vcaqdRBdfBwGv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pBuxqrkZtoBCeDFCzmYVHhBCCqET7gCSNrRYx6CaSjKmY2fAfYkGEhjvVDRpBNn3v2F4uDSvAyKYtxXU1aAnTpE",
  "key1": "4ZPEazHBUQhmAiR6nrsh1mZtWmoBR61mjHFeHTU8fAUBnzzxVzhWszzCtbiHgDwrtnEHhv5mbgzrvdSf6KAADT32",
  "key2": "4KNDHzmwCpSd1rizczxa2DVDvci2Fhn3PPJ4uPbwXsJoUs8EZHWErxGDv9nsXEaTH5Su1Pg2xxPc8MyjB8qu4pW5",
  "key3": "2biX47i8QHsCTRX35NygSBsMujFjBqHzgrHDsB4xrL2ELuDSFaJiZi2MSJrsQ7iKDCG3JD9c7zZhxemx6kyFriXt",
  "key4": "2ajYw7YUdB9Hh2uS1a35i8rSanuFBAPhqhBvQfD6wvyAyvoUb6btdVQQW44svb5bE6A1Vc9kBVvLXGm2AK6z8m2Q",
  "key5": "4bCNn5FdEcjJ3z13fxJVCBNzjKDgGHqXrgtwmHxQ3i3iqwSj5tMzLEGrmZd6hrweJYgW66aLFMV8bhYq9g5TPfVK",
  "key6": "5EE3WRjM8WcP18WRLKM8aei28LtTJVD2YJuTgHENz27mKRJ92D9fVgdzBJXT3PE1mMsTQkxBAmdk2PUo6gpRLVNh",
  "key7": "4d3yGN7WpMS7vph6zPFz1VEDVi8ASSWuypTUn3GjJEBdJda8mBHKYhne5ZEKvMyKQGwr77FBkTjU8tABHhDrXASZ",
  "key8": "3LdR5Cv4hwk2RHrdosmZ7m7rd5j1chSQ9Vy36L3reG7BwB2WUWiTR985QMSF7QELNRWHUVYNpAaubtnLGpyJMaQU",
  "key9": "6ygCnY61W2X656f1twgvc3oFpuETg5T2w5cYQxv7kXV28SPmVJShjp3g7p3wsWz1keLjNjzNj6ygRPxFpC7kibv",
  "key10": "5i2mxbtV5LLxK2mDNJBtyKFDeEVYk4Bd4B98m2yU1GmgqfRzYcE8L1RvjH446RMpzfE8fzmUn85RCZZDq9cuRqf5",
  "key11": "31cyumGfoYceC1AMeYR2X4ztaEE6xHR2ZweQyVbFXKdJvy9oLSMSgYCDAegxa7ckEPd91bhvNiXSnYd3UmzcPFD4",
  "key12": "1gawH2todyTxLfydQMxmrgKpquetnSpfbNqtY6iFJZPDN7FojizABMwY7iyW5W2qkzqigJDdEhLa3iPHcYjGRYj",
  "key13": "4qkeKLNBgb7umDb5pqTi5i3FUKRQu4Kd7pHn2y3BMiKVnEDYCGP5PWb11C5fLYpF1Va5j1T7uX52ostwcsCTqxSW",
  "key14": "5CdGfWwBq5PEknrpHbPtdrehNieMgD86niAZKDqLVGmy4EnZVuMkgbg28i6nF36KhJwtr1fi2XU519UQj33hHSXy",
  "key15": "3MHp1ojFWA8UvLoJ67A1EGbb7XxziarDuCnGfE6DurJLvBhCzYVt3x3a2u5K9axzB4a7kuJY3MaNMD1uqQgq2YD9",
  "key16": "3quc6N5SNGcTHjQ6YJsL7NNFUVvK1ER4tcFPWFoJ8ET3pKbGvVgZRr5C2biVoPTHDLQNZ315xgieMhWKu9SxV242",
  "key17": "2YJkSTgjua6m92T4JctRnZQrUPFBFUR7fcvvJA79uVpQBszuzhtxzi6WseTW5Rj2MVeGezf2K6Ejo7ZjfwxJuZSy",
  "key18": "3hNbxnFNrJxzomXnGRe7yS8LgCKGeh4av1qtHDsgsXGN4gDiQwfEqzY6zbwY6D99BxFjohCCjVVE2ZgFyPDbGDi7",
  "key19": "2Fzj1i8ZeMVMAWunLLL5GqsVDTg9K8oanSyyA5H5hzUxUJgnBcmV5u9sznXhESZkFGFRs9myY7NccYAe2eAW7SdH",
  "key20": "4y3CkjiQkQKJmTJMQQCPFkbTBgPxGqEX8de7qnvNFiQAtBNfB833Mumtgg42sMtdFJ5TjmF7wZ3xpgKpLvBHru3h",
  "key21": "47nhxkucg7pBwVbXv5GxYYhGJPB6KrkcixyqVfnh1LMh2P9dEAaXg3vrbKFZvL4tjraL8zF5eLeiLWuP96GX4rBg",
  "key22": "ntuKTJNVQeUsdfWutrZ8BoB15iqV5jZr7vdhR39wgktZPiosQxv26DJwhvzYiTj4YFPuj8ouM9Jb2y5A7fJSrZv",
  "key23": "y4Amy97eKUGCh1Ptc65syF65KWC5dqinj3TSjSw36xwsLu7RgKJ2yREMffqYm8sAkrn89Vx6bDeAi3bJmdfs5nw",
  "key24": "4FZvHJ3ZhrpUCyogc7vJhEcHe63VEUtoDtdNsmoxeoeGatbxzLTBtzKBRbXveLazjpFJYmaZHJpBRa3yAF1wHdCv",
  "key25": "486nh4ad1fxmVAX5YJqFLgCy1Uqv9tgwqcSGaXkw6KS9ja2xAKBnykq8zDAgaHKoD5DFhPjdkmMjoCWGh9GGYZD5",
  "key26": "2v3HQuMjtCJL7nGjptCrFJXP3fKyfnNHsb41pD92wq6hp5RCEeo8Aiqp15fgMjkAzMDy1cw8rqkEytbRvo79uYyH",
  "key27": "48DA9DZcRpQqidtv3XLmRtcYNsJ3MNzvDCzg8KM9Gv2dqCaNbRYv6X1Qy3o6Q74eD6AUHQhUNBUgSG7UxaAaZvtp",
  "key28": "3rPG7TAsiuaBXJXk3pBNWdzqbaC6BoA6kKn49dahWssHJzsqFqpKC84hyGAzk8byG28ScAs6H7ZS4cMqYciLPJU1",
  "key29": "kF6x6FPrMMQuEdsL6v4i8TCACDQ4tQuArRzsMWjFAhQegSG8RFvRs3tMmd67u1Yd9KCxinTDDiSn6Mm7qsCtWKn",
  "key30": "37Gfw54aXV4dX53bbE5WJwwdc2TPegYMmWowYyHW7cPdyiqRdmMYMh2M85QsYpoF2Vwnxh7RP2NDkZJa8Hsp9MPX",
  "key31": "2veuCjJEQvcrhNcNZWPsZmehakFXnjCJKAVzRj1RFhvR3PMnNouC2VneHRpsUJR7be2ymiifkTv45DEb4rE2eJtg",
  "key32": "2prNUsWJH3K3SvrkCLXQpL3i1soMwkRP5BWmG2FFHK7e2TiCiXi3VrEbU9wJNNFx6ah7LpYtWoywbKFdwA9Hhyu5",
  "key33": "2rP15sBcQ8KnU9fzGwEzU1euWuQSWBEXyonbEaMaAvtJT1EEmShy8GtAUnpTsSSXwwQNCLu83V6Uz8hpFTpUP6qq",
  "key34": "5V6qEu4oS6ixerBo75L12u6tpCSRBsEVZAT7qptfXXXKvuezgmyvtTJxp2CJ25SNtqM3VRayM9PztGnyraoeVtRg",
  "key35": "KNfeBCod3z5qMrXuq4wwoscVBXamQfDbUmn279YXH4rPaQoNSPcBrDevqCFS8cC7RXzGoWm2WUZTjWDE7u847wu",
  "key36": "VgXfVv7DYsLKGPun2ttfcna4AXE6yy7AysrfQxaWmuG13izJVqdjHM6YApm9aJjZb2Cmy4idWMjhBGnEKMBcwcq",
  "key37": "4X9jP9BugGCdtRAzXZmwVqEpVB46antXqKtKFqSrwL2nXEv7sQMqtY8dm5m8wUyjm8dWm8PH4oshrd7ADhED31T8"
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
