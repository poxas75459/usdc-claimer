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
    "QfVoL28HtVunLPYWC9qsTMREZtQqn8C3ZgMzZenD4UhVGhEN72CmcwkQMMWY5aFC3Y6h86hwHN1nowXQsUfJ2ih"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57eEf5x1mR8LsyUak3dAyHSUr3nka51LwVJgdkVtxLZ63FmausqGXc7wMrPFpYKKfYhQL9tVrxK7BhC9QyQfgc3Z",
  "key1": "1S5pCCwwT6HT7pU74HB8PqpzarQC2MjnJXeWw5i5K4N7S7XTgnrnMAv1LBhGr5S8QGo6zqkbuYyYJNbmAvgFM3B",
  "key2": "CjpyUDt9yv1Wp27LKCZ6rFGbHBLPT8whhM9w67QyyWZgRuuPAaUKqvsFDuWnMBVRvnEkA5rD5Jysjw1iudgyA1Q",
  "key3": "3hAARauJ2MTppgxR4r3evbkrJCbti37sNeP9mCH7MfWTPuXc24dgS5oRn3wkGNebyjEySnL8aQSp8oBb9YqCKwhA",
  "key4": "4gZfnCLaCfU9E6utrZJFXfHJZgtwVKoB9LWJspEQiSz5eD33XLtpxpDqQYBvYeTK5KWK9gfnd1zKvBbgkHfsNsSX",
  "key5": "4wegvjjQTBFqhnEq9Y1UoHaGDFMFh9FXtnTTsedqpMW1M4pbVa73fsQknjGQysnxdeb5NYoBaKEhcNhkJoSdsfux",
  "key6": "5cgEPAeWQYBbPBceu8Lbj27WCkbMVS3fj4QiTN8Zp9hVZCH1kiUX8cQa8Yoe8kKAcbrnP19RqaCxEaXaoguhnu2q",
  "key7": "4PzGHZzbK5hawVbSunrSWxTy8LvbbaH3xyESwDPtJWz1vQ373giq54o6Xz2oduFfvZg1dYQjDHzVdMXXoDgXQ9Wn",
  "key8": "3aCFnTKgRCQkA3RVm1rRyEzoUcwxCYeEnXqCpa2BqD4QNiKfKFSnRcZ8BEW5GeC9rUx6SrebBwbg7eMu4ndxMkEe",
  "key9": "57kFffdt2424GfKWfP1ZZmhCuqx4Z2nw1MfjEjWnK3KqKFRqZZ4dt2M2gaha8hYHgYxUfBkGUgtGZ6PxKtmZEmtq",
  "key10": "Tgop7hwptau5SJd9Sgv8zGDsbLkqZ7HeW64W8xdSCFBq5YiRBHvumghhx1a9z9URwjC3ugTtMb9bvFGNE4nzQzh",
  "key11": "5vrR45hZgkPqEgb2P8PuptzXoLSWnBbB7pPSiZXz2GhEpVw36b11r6TX4xNM15paQ1oKxhJPmJbJZ33KzqhC8gWG",
  "key12": "3SPAqbMdVPxeG5sjUcKEiAd3aJDxeZhWpLdonCLkm8xV4CXuNZuwQHPLSgV4pLX7mUqrSfVrwz96bKA6TQ7TbwkH",
  "key13": "2okSd2mAfP23ZfQZ9q58NCZrotMBbdcC3xcGL2TtebY9ehGwuomvpdGnch8sNe2fYAf1aDt6j6quUaQsF7a1KKoU",
  "key14": "5ULUbzjEcBQuW4VcWjczfGkoqfqeKcGUfEXQFbYCfG1duTCLAEYc1mXWaQcT2ZKKfin3Z4Q9LPtDaReCU7JaCaAh",
  "key15": "2AVCa6kmt4FLP5QXsF1bYz9VzyWVn5imh4kQbG5iCUyUCfK3o1uLF3AZjg7mTvJmRrEw2cK9z5qot4s5Qf6wEmpg",
  "key16": "3tyz2krJ8gZRnspiYqSVdYh7bUvXBYjMQTUtra5S6od511SMELscZ2pNyQUeLcvmV7nZ7EjgXYhFQZfCQ8zPCcha",
  "key17": "goEAJmd1TGmBK2U57UBG6X5xtBp63RW8dMiMFWQbuuLw3YFqgjq3Ekc6rEethSu7SUHm6cJT8EdUCpLbnTisk15",
  "key18": "51dqucJDoqJWnKQUp6fjEVGHCxGYvwufqx5ZxsXggRbodP8UcMnBPX7hprRvcwa2P6ijm2bcjtGrj6WveKndTL8t",
  "key19": "z6fRwkyf6k5WowLFpqT45C67EQCtAgomngTSWL4WV8EsRRDacDCo8qorfxqiQtZwXqecxyZrgG6SYwMf7PxZpes",
  "key20": "57cJrjkAAadx9eWxrJufS3mvfXd4nydGDp1hgJMcxKrrFPpDxusUca1jaRHjJieAHBqtVRBS6fdaRMYe5BucGPKw",
  "key21": "43dTQTTwtbLjkTBRESZVsqYBN5xJpGCednemgWKLexENM3GwprYQUcE7Qjq26UtNdz3zrgTjXuZde2JX7KWWTSPF",
  "key22": "4u28gZWwnkZkDnAZGAR4VL8tXHHv1VMsTVxyyW7BbamvWEGkkfpaJriM9dCtoJ82ssFpi4RaSsdFZa5r3531RcrY",
  "key23": "5oGuWr9CMryiF9TAr8cXwfhmKkccrnecPWZxfoJxLdkwRjcTK64XeB5P854AuCXv8gZgEQp51NQ8yUwU5kYmsoRN",
  "key24": "22HyrgA12xvk4pGtBZN7u5Rxoqph5B9YRaU2jYwAgyqiH9PuW7gxZ5AByecZwiejo9GnHDBSNhGt2hzvrrYmHYs9",
  "key25": "2UxqgayZUdKbktDiH29SR5tFRBi6fN9HfV48dCKZfkDVmJm4RfPG6nsh574Yix8AubmmxYjnMihqo1znoToEQP3D",
  "key26": "5CxHVqofxyxrriTGz55pDLTwvW2QeZSALTe1F1c2YS3qi34xvR6gEJCnJcUr9rbBbh5hBmFrpzFzh2xv99k46Cwp",
  "key27": "36enTo7MpZHjVruzdgXM2xbxv3yqSG2jkv6AR88LtjabLT9RBK4wZ8u47X6p5mecHCHzSG3yQKXsJQjFwtsnqmyU",
  "key28": "RzXR4uDcvu3WfbrYAwhXJg6Gfrk4q4dbwYkGAX3oUFpaNGLvGPGuJvQbWn3BM2Dd3vek3nviEaZmikn6DpKb6eB",
  "key29": "2t5zQiNxV1d2e7eqA3X3cS5wqGYxJNdZUemaMRqyNmCR69ZD4orPDfL2VMptFaGG4cY4HK8rXD6v543W5yuAb7t9",
  "key30": "4azoKyp6Q83PDrMZQxPt5BehPNDShDDSLHtT2fzumLuvb9y7HM6fLqWAV7o3MFJdrVf46CXTsrsxmpHPEKutezyu",
  "key31": "34LKQ1Gzi8TEZ9BCYyZb2fcaV4MivbFeMjtvhU5A3hsAuCfPB1YgxCf32t2wxTPwuruUSbf3KpMk1qVqQ7WHNPhX",
  "key32": "3wnupMdjXvH43H1WMJxor9iesFmVUa9QNSbBYaFmNMfkSi26EqqVwAiiQRWFF2fTHHwTvjxU1gqi2Ye9mLSyz6bH",
  "key33": "ZSHrX4MCvPxkmCYw2BuqonXP5yummpwTeaXjkMUzL4176GUTGtCq87gfBvVv6iafKB7qwyTJZPvpo35VN1X6bom",
  "key34": "5CtY3qj1SMdukefu9KtmgzRzYRbvzLHbQtVt8wj2XhRaGcycnPp1Rs27RLT2AbCkXJftGUxKZ7kmjhSJogbXYy5M",
  "key35": "5tcU4ZaKqSbibvQh3nM2hmhaeyYqBsKiGZFasQjNGM4cbgYiDsE7T2KNz1PFVmwNHyykzsB8jkx2e6qwPDhCUWoJ",
  "key36": "3GYmuJDhYVTAB8HZxVqE2mA62XGb3kTjWz4rsKGxs9rfaP47RCo7zVuYrJf5Gp2Psp6vdkYvG2bQ8YFE58km6Dit",
  "key37": "pCSLXYBqhMrzJX3gDVB6deRfusdwvb5eSoB5bEuDk2mVEKGBk92dEp1AoZrim2qQekkUCqbsy11ARjxhPpgWKXM",
  "key38": "41WdrtXaTcUT4gmFDtBuxG23VhCjPD1Uq1uQDWs7Bvw5GTWVCcjjdbhjJYERiz8q6wB18mPz5Z5APBnogcBJ5QEm",
  "key39": "9BGGH9ureh8Kfqg9Pq7ojU13PuZT6kFUWmdNugis5Jd98g1WoaUPTb81fE7doFYdVWpwKgoX1x8iu1RMuD6ESPg",
  "key40": "y3FUuyu3oGuM71tKjcbmustnzsCDKxffYevxyrJkqDxxxJk9P9tfFb4nTYoWJVgttGj15i4GnVJeeknvMzUDY44",
  "key41": "596zAjHZuCS3RxrgA4rjF8VYF4sRdqbDxz4n3TMf9TLKkg2vGV1fdTAXUwH858tB7f1eYTEFxeZ7AyFRJ25XfZEU",
  "key42": "2ex7NCvKVm1uj2BvzQnNUHf4bTaUuMs1tFxRo7YtgzbpvCjzwn6jCKYZrdviEZFXjoZmXArzKj5krX8u96RYWMsF",
  "key43": "3Xh9NcDqL8kW2a3hqeBefxkCAtL1JADzeskUmho6XyEAHUYgyM2vC174fyVfsV9bE1b1N6kFLfTYgunRoMbxeMTp",
  "key44": "67LuVukb3bpRsZ5pyYtjouxN1g3rWxHAi9fNS8wuxCJBHYJu7YsRSAFCSp22EDYh94VDje3WR75ziJoLbsp9hXMV",
  "key45": "3wWep8UHwtBsdiqNnRjof4mQ8yY28WfsXBnZs8mMAQMd6yCRHn3CDmbvnnHfm2wuGw9Hceq6D1LGDFVRrBDL1ttJ",
  "key46": "vCRRtw5LqLTXtUkatTFMBm2VFjWjbadC7uUSipGnU3ekEAanG39EcHGEaaCsypX3VVYB5T1rxHpRPCe2Tx32r6y",
  "key47": "s6f64j1vHorMyN46mUg81C5cTMVLoxG1GC1BerMVAAvPin2iMzH8fHhuNzChvWQKSndBfNPNZbBe4vH9CgHsFS8",
  "key48": "5E6EZZ6GBAWLcx6zQPWVAb5hDB29oqub5NnsKhdvxMFvT7JvBebVLy4d3FzwTTJ5DoAHpUQDiFt4FJg9746cfguG",
  "key49": "5ZzU3iF4XXmeqrQBWUFTi9iVrAkK8v4ATNCKF4rafuzEXpzt8BFrFn4tiXRtkjBBTUiR7fPGd1MNFDb9bSkzK4HT"
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
