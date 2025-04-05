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
    "3Ee8VajrUmBzrTPSrGAHqpKsBpMWE5RXf4kUyTxkJDRi8aYnXrDnFepX7tygdLf39RtSPhTWdBBrUcRkyEDpSvPY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TXRmDsejaCdWwxnu9f2B6AD2BNk3Y99ksnLDHSayt7kK2ECyBG54TnH1jH2ttgsWUc8JVmkAnVrLS39JLZDT4vv",
  "key1": "4kkXsVVnFBpm4LgCrA1ctc5qZQrJDNH3gSU9g6e4PW2jHCaJCkQoe2PjK285z3KNAsHQ2MaHd3cR3GMoWBrYA392",
  "key2": "4ND5i4bvRdsaTbeJL8ow77SzG8kfDMV67uW2nD5akCPgUzX4PFCxzZXdQndNy1sb11VepgZitKDUfs1f6NSbB42b",
  "key3": "2nnqiZ3XiJeb1nPFKTBrpNr5W5CPDmd1WfrgBG8hWpxUkDma5r7Bxre6cvGVpEYKV531UQZJEG18N7T2Gn2LZNdz",
  "key4": "vCt6Udx84cUT9rB79LwLCkR7bTEgBDz9X3F2r2kWo2gMmtan5dmsV7L8MVF29PfdJBaRgeA9nUkHHYyigbMZC9d",
  "key5": "dzDe7W7JDdo2VzUeAspzCHBGvGQUpbgvUMiG4EjV3U2Nf8UMiies5VpBizZm2zGacNDo1t6yzZ2A4mPL3YshSvt",
  "key6": "kHX7yyEMRNccHojsrZHRXpJapk2Hqkn6U62cVjEkFyF72erhobjkrydWuqnX8MuG2QbSbzAaGHUvwWdVpJCq4nA",
  "key7": "4m5JUMvg9NtQKMjRD9zLEuLHM16FfPN2SuarbohDjrBaMVQ9wSZSu8NhyQ1f1UBRgAUUKKDPojr7iv8S6L7rR4uW",
  "key8": "4GG4rYGojnRLX5c1x5S4pPMi4m1o7Z7ZDiKUDPQd9TDtYcZLM3XVHCFxq2FPckPf6dcfXmLE88C3aEjwd6diQq2P",
  "key9": "4zbXYJEiStkBwwxXi3f8dEcY5xYPBmmtS9ZgcTAcav8NAJFmMRaLyZ3zDDRfvWz8vsKGbTwrssuaRXKZ8TfWDLUz",
  "key10": "4RXVATkVi2d4V4zyxTTk4EKfQtCGDMpeGwixxLDWveRJ2q45nDPmQg9njWuNAVW8LcKA6kGxSWgKThm49PqDncPn",
  "key11": "4ZGQuruxpod9ypM937HisB5TvvhVDP9XXLZxhi2iTE7wfGNDEonrronWYrNXjEzaoa1p3DWL9qeCsqLQ9JHyPyEW",
  "key12": "4kpTH8dHCASnbpSFF9129STydeVvw65Fzo3Z1t4f8raeF3mwMK6zhb674CJJzPWL89sDvqaURBvwCKakuv9cVwT2",
  "key13": "P3eCJcBv1umUTxgS7NfQjtpj9B1XoEXuDPRkV3iH12CnkHPtKJEqduoxkFmQkDsE2kxBcP5ykf8e9Vr116DuoBA",
  "key14": "2FyzzjN7qt2StZa4XjZCo8azhNHgpZF1dhUhhPGGp9Hr1A1oSQNHWV6niXPVFuqN4k2cKuvxVSa1e7DPwabHjLCz",
  "key15": "4y87d1YkXrQj4Dz8ifMg93aMttY4tPd4w6AGvorYLjAw69K9pXbs4XdJ2uRfDF4bgsRo8wwPvmEf6SdBv9TNARWr",
  "key16": "EFfpvsXGNKowj4HXb4CYFsT44nj4Jsa9A6Q9mVMcC7LA1PXiaivRoMSHVHrPdriaRomE3qGFmr3QpGpP6TR5bvt",
  "key17": "2W6sQJoH2YuPaaDyGi5veMGnYjytEp9xpsPFSJrSjwTP5Tp1e9QzgjuP2itARnLJeZrs25ZxJanrusDULtRonFMb",
  "key18": "iJkBQJr7zzEWb9fTiaLbLWH1JxvaV1NLYBjnomtwRaWAdPWJz9rFbaaBKFF3HGRi8Pk5tRyrM3PfsPmBrNWNqXQ",
  "key19": "452RbPCSsyDztRXgEZAqTArKQiiwb7zE6Ep8WWaV9yNJ941gKJ9UvizuTgiJS1JTHaFJJvPiiuCbZDZSqA5ifWaE",
  "key20": "21uWdZjTboff35jSM2pjFLrjdpMgNJSH9YwyyzxXxBQ1qjmAb7XBDBcDMN5h7tp3rX52CFrkGrnwYJynXm8hfWmA",
  "key21": "2316hJEqxiGEgLkwes2UT85z6fi63A3nfLUtdKvzpoooSDev2Dxedwz2UYQ7n5WTgM76AwmqwfxJCuVqEaNJVBDY",
  "key22": "dr9DEvdvDnWsmRjsuvP1GHz1g6hmHrJH295W9aX3hTtDKVbZ9Uim6DQNZnkn2r9Eko6GRDkFTJw27aBFBVsC7uG",
  "key23": "58iTfPjNoWdSchBSgro7UQ94cewxrzU2N15a76sSWFFB3WDV6F268bm2XC3erSGW1KmeoVVjZ9KcBZD1x3e218AE",
  "key24": "4zZcwv65UgonmkFptKftccs5whQichzeH6oyZWgJVXH4Yj7gYMdjMbXeiqhowoCxPy9oudVcSANfdYgET6KdnKzB",
  "key25": "GFpp2A8MXUpBnYaLVbXGzqsPkXRBzRo53gFAnpmdcxgWMk5JMSZESUmDixtEGMBvjHdt8ZKTVm1d5hcCzP1iENu",
  "key26": "Hpr9fZLUGdS3S4HejB6gykAH1bUR7uuxQwFusiNJ92qx4VEJRmBZdTWnVYoosfbCvfrhockBihJzFukc2WHEs2e",
  "key27": "4K78rfNLa1eiik3hEbVLGkfiggpMqCuvhqLCr79t9rWKLJ335VwgE8pGhHE2PPq4DUHcwn861qWbM2bhApoqTgNV",
  "key28": "5WXPBR4o7m1rGDVCF6PpjcrhESJt1cfTp7Jqa6nqPPaBQKANg1GQ1zXGGbjuUcYSfrvpZQzkXNqUKSriQwz7yAbz",
  "key29": "4Y839FYeNj7WYSLoRXX7aRYu7NNHicdCtGpR2nicycFUuBe1CF4H8hUsofHYyEEvjqY4hujuWCL32kmY4TUirvtR",
  "key30": "3ETskyTDuduyBtwynx9d4uRALRPaPfJGu44dvnjyrEdjJiR5cQ6D7gaSiPKmxW3BWUy2UHBNpGyZjUtZyZkTWykZ",
  "key31": "9Gpof2Cb6zk6BdKQoTtsyvNZUSgUqUdH2hUdgGUxrxinstXViZhCBXeNTJKGPnkjmJKp5X996p2L3th31kDDQmu",
  "key32": "4x7SqT52L1fhHAFqcLLQSooqS1c9MjaewisiFAgymy4QuoCd7nEkZfRsUewfKqDY7s3gGjtiYnR96NzxPhZbKQ5Y",
  "key33": "gvFpt5PCRQGmf3vZfBtpEf4cS5H61kZbrucYbAMe859P3LrVbxKLdx1TvfUCUCSZwELR1M1ie5y47engnTB4D57",
  "key34": "22XD9ZtDPq1qTMUk7Xx7sF7SMqzUqX4yMnoNXjRRopD6HK9z3hfC3dsQ6Xouiz3Bjd9edm2Dv6tX5hznNTF9oC3w",
  "key35": "3fhuWsc6ctwge5APu5f1d2Xdzj1bGy1WrQ7upKZSYwZ2g1BEcdZJKpinQw2rgBijZuVMV89Jt986YuMBJBDqq1aB",
  "key36": "3LPS4pnSGsvePKZwoG3vYhZZvKcETtvDJrr1To8jzhocZ43EZj2WhrjKM68CQtKf9VAhvM1dARH4cx5EZ6CEEz62",
  "key37": "2rCJGd2kCWQG38duTavNEPrfUEyQqfxouGKiwMkZUxYW8QV6qintpYx8FbJ5vPZWq1U1Y3apre6SsT7Y1cKf1BKA",
  "key38": "4wz96VLQVhffDFm2sqDyJa7BS2EGYkWMkXBEaJJ1HxZub4HPamXPdoJDVrxA2bVgQGg7M6MgvpziqbGviSXTWkki",
  "key39": "5EwX4pR94N5hP5NV56ErdHucye9Uivv9BqaL9U1aJGVZZorbJwu3j2t1v8UeiTBLYoRpVbcxMxBoxzbLdEHEePmw",
  "key40": "2vqY3Yo4Kt9VXvtUJJQbzuN6Yed9mUbq3s4Xq5eUTCc6ZbfAfZdeP7U3wZ9qTBVXNQpwbXZTasCYoYpZRMwMKBhv",
  "key41": "4TLR1W6Kpp3n7C5gXbWLkWFwJoZkczq8A7W2UyFnF4Pfgi8DA21sQqRFPw9H8zwXuu6Yym6ZiM9eQTmnCGbCboZJ"
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
