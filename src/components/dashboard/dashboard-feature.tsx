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
    "3adi9FcgCZDB1MVe87RTioQ5VKPAjYnG7ToDAMy95TG4SWkemCu1CAjcayAvDKeHWZsJFcTNfJSQisvQsJMfqjit"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PZ8F8mhU5xNhaze98yv9Wpo6C1ds9XZQpQiQE9LNoAoenUk3dsZPJL8VzsCjdLAJLP2M9xSCbAyF5q38uDceS9j",
  "key1": "8BprDdUa6Pwds7ZGGQ2Zw9zQ1mCQpN9peT5P9KSedukwMhJt7e3AnbVNhUDRAzSRj4DUyFX9Mq7KwtAtsSEaGyi",
  "key2": "2HiNkdXS2vSMb9u9SgduamygDcE7YC2VsBtYqiPRBcRs3FG1GrHwR4fxXApgpAYVEditMoAnqKGAvjzGGqxsLgkd",
  "key3": "4GpCCsG83sMXfLAU9hX4qzRh4KmbzMPvVisTuBMUmvKM1jgGtySzRxN3yuThLjQaBjB38x8qb1hRTmDP4SKxDEeS",
  "key4": "YuzNjfofwpmUE2LSg9EGpfCFv8GeMDFxszo1A1QsgWNer4i6nU7fXF2eVBqxDdp4tZvVTgcgWuPPBL7SyyUmSYP",
  "key5": "5Js6T7G69TcWYGNKa9kvV5EHsN7EN9KCL1ABY3DD6bWVKLXi8D2vbDg21b71n3nKSsZEChUdeYRL9fJjeBaPdDzS",
  "key6": "3SazNPk16MdqCnqPDUauSNbSYU4SXop9YiXnxxuBFaepNzZf3Twvfnd5QCBuKFWYGAX7sXGz3uG8M9cZbZqkgTNZ",
  "key7": "4cdn6wT38SMHfzpbqCPdBjxxuPB9KuXr9nNwCyxNCHjZknRYk1gdpM3gXeW4Mc61TbtkuDy4nUw96Ggv3MKPbafS",
  "key8": "3VgnBPoLq6s5ouYrPXTBwLmaYGU2iWoHgRwfhxrvn3StaWJC4uQSNdMuGE443HMJBscpn8t7KAMy3fXB5n3FyhGN",
  "key9": "4fB2MA6JoRnpMzS3PCip3BSwaSiwbArt1eodKQHR1gp1HJJz5RMV41815rr18CyGosdxA5cXnTXnpK8ajVBo9Cv1",
  "key10": "36UnSCvS8Q8kZ8yteZA3nWXFCWd6ErHvVTBAAvHBT2sfw36nt4wixdEYQFfJMvwv73qb6A9eZKEPxds8odTAP7dP",
  "key11": "5RdJQR3M9aS83xghaJpsUDeqPya4Bvkn8r6Lfonk42XPV8bj8gXP2v9iDefKMMS24Gatqj1uotQtDp2fGFHGiiu6",
  "key12": "5bSz9Wym48mpXcXmAYzfgMBfL9Q1Ktcp58a6bvZneeVfuctquCVuXUkWEyCzUvs6xwMUe2zkWrzWYpgqqnrfkGin",
  "key13": "2Aejz8rB47uEFWmMqwqArZrHxrmpFe2PEgHd5FoXXFsPcyPWzLFvWiuNP5FzP9e1YT8UVqvcfYhVrPwaMVs3Qzas",
  "key14": "3L8drFhUT46vhfei1HtZkmgFAhhp9B8Lmtao4gSY59R7fE7cg13pT8Yea4GPj4Z7JnbWk5oMQKeG751j178527Y6",
  "key15": "54poF4LpRekKDgZfLvgqD1HgxPzxSZtK9AcSDjnLWvJ7o1Z4eqVck8AEYSWKopudbGhTi58oZs3pZMj9ZqMpjvVz",
  "key16": "27J9J5embg7FppzZoY8Fo1q25Mkup3MYsy6ZzDeuLkVidtfdb1pP9zyBppGWWaav5mLes5xz8zA28suyAjZ5ceo1",
  "key17": "2f6tDr3AgeG1nMQuWEhztju4BYayHCzDVG4Mn79gEXnVAtSgKqBJ1Gwn3j3R7avZbbbYBf9pbkPSbtzLAExGc1gM",
  "key18": "5K9C1yesi6WnTGD9jgvFUH1wjXfJbe3veF8WPijybj1FCfdW5oeXxYry7uU7n8jX9rkWVYkTRQJaS56X1h72zWo3",
  "key19": "3Az4Z4PR6mgmVShVbuNaUmR8SCvW3BEPqLhiBwmhqr5YNyQJ2WbLCJGXmcWHMjBAPg146gstEU5gGLvUYYyoiA1c",
  "key20": "4ycGc2ycT3LQrbLRbJwdA2fKD6u4uAMXCvgLSY9u2G5uMKqWdiwimJAtWp4TPowT9y6JzireB5uq1Lk9stxpXH3Q",
  "key21": "5LyWMZZXYnniMusLUgQSmt5FXb3eUnxE6cS7V9kFWrUNg3m3oj2hzpegeReE8wkraynXsrKCm7yxGBVBPq8aqia6",
  "key22": "4aA37tHc2Hb3gvSyPwgt3vnyAeSAkhsiaEjjyaErx8Fr6fkn8e39XejVRMzswoXUc5K4NHSUV9deHvUPcDjSyc3q",
  "key23": "2F5oHoU5oanZaRY9xCBGWmZHD5ZhwAjYyVLeFXSQyu9A82SvrXZvcVmDKJkrsfT8f1ncYBJbhob2EY3pCVrXBxqE",
  "key24": "PQi8ccLzGBpvVCyRnCYELctgLhdMp4etmfdozzxeqDST3UZf1UKkMVPaSoH5jdn5TMcNfzCwFKVZ849Dsjz5Ric",
  "key25": "2xoy24Qn5S8fjynaC1M2LRxSjdyLot1VoBSqT58exuHuPFVccgYfFAZG2jpFm2c5Wf4juXTXkS6ipeeHmi2uyFa6",
  "key26": "2Q6TbUSew9EcuKaZeuzzrV87D3mDfRGoBeDssasZ86w1qKUnbhjDeV5sq5eK5af7tbpu791DnbXvNjnXiLysZH52",
  "key27": "yxY3GEqBdymHfhZfvW8YgVdhFM2JYcoFdyYN1noSjy3W4wW7oik7Rf5kcQfk35VjUqFDpWYABjXj6MbnvzeaJDQ",
  "key28": "5bWm8acRLxGXmUjZdsRWhY1B5E59Ho5iZGCS4AC8UK1Sq2vmAKc6PygKd99xvhewTRjhYs2KmF6KcT4B2fu7YT7M",
  "key29": "5GxSRQVTzRGTC9uuNRSTxSEeUBxABMLcU7aWd7c1NjedJQqa83eCbtj6vwagnzKHdvRfRCMC9pLDwmadiaMbn1Vz",
  "key30": "5WPHLb6HL7upWfisV2bXBZ5e3jj7LzQ2BuyFrVKcgmWjBHPzpBNVT2EBjqVzQ4AavTma6K1HUL9eJQD5pY9toBjk",
  "key31": "3HruNWBCUqq6rCxBAMmfVPHYfWxoXBpEWMwnrAGQMs3LCzMgcsoab78u5FaUbuoB3XuFuFVTLA9hscjyjXcnzzzQ",
  "key32": "2jNqU7PPy6HGp7jQSJ9GFhZyfj8hEStHk7WTzDxxrqm21p8am3Gd4TB91UkjvEqpNM4Sxkc4fCt9hCuUrcQY56F4",
  "key33": "3kYU4Rp5bjNJMRh32codQwpKYsm2sUAgaY7Tn48BGBwE1gKFyj2cjP8UJaHvMNHPpEhoMmg4zZJ3h8mzM29gpjU6",
  "key34": "3AHCpSgWLmyKJLPtWHMwpjycN6u4CC1SKcZ9jX5HbyfmiwG7bgH9gBxYF1bXsVbvjAGQdJHBSHA5nd73WtueRavr",
  "key35": "4XFgpPB3dwevD6UXFMLtZrnLGnEwz3PWDSSL2PF4ALvzmpbnioeR7haxp2t4qxy7wkZ58kUKfx3MfQx6prrGVR9y",
  "key36": "BZztLCvZ4vdepNTz763nrAR9kN2EJQn6aFYuvRNK339fy8TEDb9EiXuZfQMp3QzCj88geY4hQYTtBA5tc16VfW2",
  "key37": "5iGZ7CDvq3A5WWjiXGpYq6T7vSCFrpMTVXrFAALjKScjBt2G5kKownE7hFxPSwffWqjpaiNE3TepF43Ts1eTf4Xo"
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
