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
    "3GVZ3pw2c9FgVuwgZo3cyoqKhoSomkTTWr53zoaBecGjxGaJxtWKmfHhA4VT4dDLVpfxPJpiQhJPjuRRUP9i7tfN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24LPC7r8SfM2ytXTa83L2ErkDLgHRrtkHxLWzPdWrZkFh6TeuxsCRrxL62EW6vxMGPAWNGvLKHhq9djPp3kUY5Ap",
  "key1": "5oXRpfWCY2bMMdvwZC8PZzcY6EerHf7L6YS5QvVeGLqfWypzDmrc1MwdK44Cm7vNwrCrMPEpUeSekvQoWZFK27xg",
  "key2": "2bPMgxntUN5kh3eC51SuLZduPyiwsEbhqcHhe19AemZX1oyRjC7FzHhmAJHtkMesRmcH11LMvB6z4PvmZim4C9uj",
  "key3": "4M5ALsFZ6Gy4iro4LGFjtgnvUpX6AT2iRxBz8G45A7nZLTym1fEH7pueZVKrVC3zSRHVvhVMirjkTnmYCAMGoWdJ",
  "key4": "5qs3xd97SUqZ7CD2HJgCHk4crSoBHUhPnrAFYXx6HFmzK23MpUM2mAz45H3hU3XKEB63BVe9aKBChXEdQnfVfmbr",
  "key5": "4sFUQYqHyXGajUecZW657QwNVb2f9wAkXufKKzAf3C2YtHfHsBqsGG7U19AQLKT3maxS4EnnhL2zEdh5UkiJ4Heh",
  "key6": "naY8GG6UkKiV8GjqvBbq4sYzLMx6qyvsdEkuD9FTr9jok3JipNoprSWRE3G7kzUBufHfSCru9sbGqviyd1mbfpK",
  "key7": "2UY9TTugzmvVYWDK2ARPQYjFF9RP4vXLN7MU2dnavMqD7z9CwP51U5GY6pn6XpTBX5TSWYZYD6u7fFSDj3hTJJ85",
  "key8": "2fQA8UDVP7R8mLaoLcaYNQpCm5g1sz9tpFhSpBNJiRseN8ovx6nmMq9BThHGY5LqEGXSGFvd69b4wJo2qYfwqU95",
  "key9": "42m16nHRau8X6CFCeaQ3jDyzXMRpjrsezwvN7AvMDJ9q5BKvZyS1F56V8vQvN6zW6a4gHWn5yhkWersFX1WhE78Q",
  "key10": "31juZWvbTAbhhtuyYBhcXzfSuuwpUN6VSbqFseBxzUGxxRMTGW7ziJVfePo64ZD9fQZnnYPrdyTvBet4eMme2tER",
  "key11": "3vTV8ytxazFdTHLgXb4sCJjn5ZrdDDXT6h2sSEL3QHt7NTi1ZnRPnHhcxURuXr6TetNxwBCVzLHPefsfqZoDVkz8",
  "key12": "2nj2kJZf2egyNCBQvGHjTcxDtCwodNH8DRKxrA4WGfXThUjZYRAdF7J97xYaWcMBYkzRVFvWu4uzP9cNqRpuDf2R",
  "key13": "2QqEUPHCvSUg9Gg1JjUB1i9AVNjRwVywkpRLkNDCoaBmwKsCi5tLizuiWePhXZNCHR1CJL8UBhZUdif1g8DNKpvE",
  "key14": "5fb4WsvJyfDyqMBP7QZJLcCgeMorR6h8AjaVDNQy1rZ9G7RX1qu2VxVRCkRS51ch5Lxu2GwSyEZBnT6Ee9QSyk5x",
  "key15": "4YrKCdYweNfqmwWZByGn8AfHpzfAQNatraQuYzFLpw7p5b4J6fdgvqhhJisP6JGBBDkrETTUZ49mz1icDt6B9TcC",
  "key16": "3iYBk2HWxSon7xR8k1QeanhTx6ZJcDdx59RKCV7h3dMz5dJYsWAtCd5XeCNDjgxj3asLg7zPZdK6Kai4wPhDTUL1",
  "key17": "32Xgojes1MjJTyyGKaWHFk6xcnZVXyh2mctJvPCtERhCnUKcXt8pYBfVbihwcoUMeKVCiENszRFRQyEQSxhLWsgj",
  "key18": "3d1Bh5SzHWSMwg3UsR5C3HMBw9aLJ74DBDMK7wTekgtoWVTg9HAXmGDrrhXYkkNa2qtQJojhi8AuHUPVRu7Us2eQ",
  "key19": "2mnUG3TKc1m9apnXxCSqGPRMBexHn5fnJWPWgpFr6bZWYFF4XuMJmqFQ4kvnZEE13e128PqeEwg2UiG9yGRvVn5V",
  "key20": "3qsM7ZfqmZNnvwP2VhrQbvi2YU8NSdTBaTpvdUzntkFa9whi5HN3J6F5Nz6YcoKxynG3cp4mJ7pFHwB3v63J9T3f",
  "key21": "2KEch3wdjWd9UvsKDvBzhQaZit3jp5HN1fbK5vyzNKxfHJK11T7yBBf74Qe1ynkrUNcBf7zEvE9izfFZs1Nq8zjx",
  "key22": "22E4ur1fnrxmwEnD6aXY21m2KrkCRL6b5mqnv7FQaWj2aKEoLbRQDL7bcN98TYG8wK5HaDVzchvpQpGvSpLEj7ZH",
  "key23": "9mu5UEn6nMENvG4nj8qRXFHZ31egKs3a6mF93CnoaAmsLdyXpHH5mtfBd61Uwth89wQJpEapX1S2AJrVf6DFjTc",
  "key24": "36bQPXrDQhBQP6KdeZvz8sAecMT7ERvywc9cvfsqsXVzgk1vMrs3jfCza18mCG1VJVLMPrCwGyNcHZyhHUwSYqXT",
  "key25": "38ddv3j6HX8MsQD1XvDRfLRqeED6zoTJHPCiYotBdmq2yUo6cfQyACtaBgdXimhx9FiAVA3CE3wtnU5e6x7DqvF7",
  "key26": "52xtXeVsyfhy95UEueo7MKiRmQTCZBjn8A8PjuuQVgewHtc1h9VaEKnZ4xU89G4qt3NZ6SaGUTjY2Ftu44GsxYRY",
  "key27": "3CBF28YBjQyeWNWGoxs4xYUinQBzyQpK93cX4st6uyLPH8FqwCKmhgjvyaAYbqeWhBA9vY7aYePSriAX2kAxsZR8",
  "key28": "2LK1WwSKc13BsUJVVw1CfQwN9fCZq5GZGs6XAkqGeJAfh8gtdRDnzHc9wWDTmfX1SXW1fJvzXfPqkU2VnJ837PjN",
  "key29": "4uix8TaYkDbdNenfGQTABBZwSa8PpR6yi7ZWaiRzeiYYPc38VpjdRYDZWj598a5rKjz5xBeGS5rbsNhYACX2nLXP",
  "key30": "1j5uKDGDQ4Tc2QmNqnC1Eo3JwHtNe2jJ9FTXrmCVBSSUCBxjTYGXX5nHtH34KjrLrs8zFn9PH59J2sswCpSp7VH",
  "key31": "2mZfvCdD7vwbGGAs7Tek7zM3Kd4s76Xhzq8c8iDNvLaDLsDvDAJQzntUicopRU6MxAq8JjpgoPRKu9iUZy2oPefH",
  "key32": "5b5Vnp6vXUZ1Te8VUGBxZduhbwwSriiyvbNFbtuRM7LzVasd7xEbRAwQLSj1Gj5ANpBJanuzz9VHqbFFFXuQygZK",
  "key33": "3tfSD4uTtcpHdfrjyU24hhKyK15N8DMUQ5kbavhhV6fYiyRdni87K3qs1kKQgcLibV1eqE5k2NL85n2JKS6hkQud",
  "key34": "WBwiCqiQxgukWbRUUQXieLz4aN6MVa2ho8TCTaGcfATbXLZGQKseREkViwwKeyfvNWRus567k6LZxiWXWs2BnQ2",
  "key35": "2mUsf9efmSQZYJfYey9qNPgHpJXjUod81BgzkeQiQWDJ9zxJdmtvSymVwepUjQTooGkAQsxMAJasTeGwfMcgyy8i",
  "key36": "5WL7mBG3wqMaYF2FeBKFGR1tQ4UerqnMfAMtgpo6gBL1kbBfZT2LrqZRM3XXXtRWXmbxGJVc6h8GmTwLmjo5jWa6",
  "key37": "5FqfrXUHMcQFQvoGAV8bNt54msUo3XG9h4JKUscfT71MCNFDkPvyr4LVFjBvYvi2wEHYwvUyc2EPZK1cLZ7ejE3e",
  "key38": "3rz36XNCDmfBXo7ZHtLaLWtNdSTY6PCQ588hLb2k8tEYwsi3Hyop7iginggv3Ltt7UN1eEbNa9csJi6ZzUsdFtzE",
  "key39": "9FTpo1cjeekzKY7q8jHp8bpuWEMZtqUFsJ2mmq5MTQmRgHqj9122yXesUVUbLgJ3Msya5WNEYr3mFr53jZafRwm",
  "key40": "63hrBe6dTfTcrYcj89Swm5ALbq5yF9VHuCXppNSaVibLDcAVaKxhqWrQmCweYTXQT3yCUMSHeUWSWXCYALb4bMhs",
  "key41": "4UDMuCG2bJh3KM3DGEQ4ewUomoXLkQyEfkJopmWqFe4UAWJBvidXESF3tfiSpbfmZALhEGEohFQJhpaJvB3oNy7v"
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
