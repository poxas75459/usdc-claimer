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
    "QxXbst3M8UQYjCWHvwEzRSCssNsNHp7PaRgjdYFpY9JhqRZ4tZYyB7QarM4xiUz9W63Nez43MECksmJDvHW6CBG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y8JGb6wUnPUn9su6r8ZkRyNgDg58baCkizLPGVtHGdQJEyoCMYQkbxYunvKoEnoxYaoJYsDfzRes9QDM6DjdnPC",
  "key1": "2NdAMxPtKJ888ZmLKgF3u1agtvXum98t1xACVfEdTxC9AEVyNie4aHVdrF1RkkT7FHHv78mhPe8n1B6Q3LbKPYpQ",
  "key2": "51kHJyAoSs49Dmjttv8qs5LLNXAoSESTWrcboALm4hMmAgXzEK9oHaMS6cdzVCtkpbMELRQ3MZ9si1E9HzttnHvj",
  "key3": "3MPoVaPp9rX4e1jSum2dYxBPyBCJw9yAx6TRS8TT6YQVLSM9dMpuHpJxZQy497jDLCXkETB5Pz2Xk5665metC5JN",
  "key4": "365J8wATvuKzymFWP8jyDevZ3WgKb2m6LVi4wKenMAYZMEbSPT8KGYRbpcQtEAkm4SkqxAT2whTgTXn7SSbmAaMm",
  "key5": "26HouJmvBQpcRL8kgZ4tKgB8MapVFdwa5SL76jf72ckwLno1udx7RJg4BXhXii9kKExEnFRM3dsAve655zXMy2BY",
  "key6": "5eXzuKgsEXeHLm2SMUSAzPvYarohx9yuShSMYKo5b5obrQSMMnPb8iK1jPJPQNPM3dQ8spLELp465g2aELhJBPz9",
  "key7": "4xYiNQuPK6byAHvEvG7JsFL74wZN1yqAcMZzK8BuRAWspJ4yePmqLwyLRyZr6cR1QP231uVTesjbSYaN12142DA1",
  "key8": "SsijorHXGsBjRcbrwngMc7Z1jTEt4tRKF6ahahxTHmEyY6ZwZLf3yJoT9xFNHTWd2U4shpT7gsXj1DZ5PSNP1Y7",
  "key9": "54m2t9sRSLvJxjBzErFxbyJCn88s8yVARaEM9XS192U6sDUhqET3WATd2onn4QTKsxwoxPo9XfyEq4qbVL9QPnkh",
  "key10": "Wt7yAxuJ2WrP1cSd9dZ16d7hgVcyLSABcod83w9yj7UaPRJLGjcvpDWYDSBSwkt8Ggy9n3c3RHqgQCaGbf6Bnie",
  "key11": "5G3AiQEMJDs7zAv5UhsgpMhHA3ynjKqGz2XvgGLAYNvaMmLnRMbjsYX8A3ZyfvV722oU1kqpKeg9MDCRW6QjEhuA",
  "key12": "5jcdRfxnqmKPQMLj8fe7WVo23ksuPv7TtqfRE9xbyqPwuSMYgsmixBvXiTU82Na2YF5m7Beycsmz51ugCrbtj1Eb",
  "key13": "26qsTbE97LjPfq6UR7d5iLQVkdZCbKg32PDq6NYngKovyxisEbSbGP8MnrEXSbDgoxeXGuoEZPvGsTh6Qhc2FNKR",
  "key14": "MPL9WZ6UVJ8pLqMpXxW6FbxM4zW2sef7jcJsxmsKiSqzsD3eJhDLVro2pMDGZhWx3omauQbWwaeXzrShGS3TXZk",
  "key15": "4ntiePEVVUqwYTNoxWVYuBm6Gbof8kNh8BY4KntmUFRT6T7NhAwkQXgDRtRygrfCez6nAz3E3TF84WUGX2Yz4HqP",
  "key16": "5PP7YyBPCsUbKeroWrnZEcsiP1iwW1QnKMAL2jDFVyz2MQ2bt8XhnbEb4Q7tbyXVtDWR7g2KX41X9TWNbJa13rf",
  "key17": "64ns8YisyfPFFjuU6RabeqQMwx3wDDpfL7WBR1hTwoGeRNCjkDu4hJtKDfQ7u73jvi64k99iQRLGBcNJbCoLv3bV",
  "key18": "28HRTw59wYmShAHjk2a5R7cTxLcwitTwxhGFmUoYv78ttJLGW4tBe9cyWpJszdT18Fc5pCWCPU41RqKeabqp5oP5",
  "key19": "4JdtVHYmXd2UpWxQr2F3nN5m1HKamfgKtyHN7Z4TtBvoCuq5chb9SC1TSJcqvWke7mkCwioB11Arjft9YeXChYmA",
  "key20": "gpLrgFtFS9X3AtgMZxHy7vLqBnG63RxuoRLVhuBHh1zk5BBTqFrnNCZjEtMCaKCyNgPHTABdtePJCvtot2fXN22",
  "key21": "3dHm58N95Bd1CKmhfRYuergDuLpFY9DvWhKokWwcqrKZJetMRm8TJbFQubfgv8wpFWY93apzUEByn6WM4f1PjQqm",
  "key22": "5au6brpd2ssBYt1d4MKXvNgviFX2h7aUAmdbJHHhWNatJSayBpV71cMbSUv7ucFE8Lo1prYMMnxX331diYWjqJa4",
  "key23": "3rN8qv2Ta3xNS86nv4FMaiVtQWZpaABHKm3DvpZcqJBEXmoUT9ZbMpyBjK42gCCmA1P6NM7ykEdmcCV9hZrGQCy3",
  "key24": "574EAXLk8SH1JauLgmzmxKaYNpU7zsaKvSUX6coHvodmWc2LiWw1QNjpxpZkCGkR7utfikLCWKYvAcarvzNpeuM6",
  "key25": "5qHEFhyNzX9A1GxM1nWpiJ3mUCmd2N4CJwtDCtseZzMhpurSWTVwj3ciUk4Yt4Dd81e2p5feL9h3t5C9XyN9ny23",
  "key26": "3phrMMhKVu4piaw9nr1czg4y8672npQ1RZAXBiS3UxdrHPQNoZZqdbYWUcB73tJvnjxwWspCwDjBzQXYBMasB3Gi",
  "key27": "28HUdpcuA29PuLaqEGx4xx9ySfZ9gvrzxZCkoy3jsfPRtbq5nwHmrggmUSXiBLMpFm6bmB4Kvx4NwbjMnbcrgvPg",
  "key28": "5X6vTQ7fEcoFsRjsrT3J2cdN8FmDjib1kfVrfVMxUyVw6GaLJQpBPH9rrRJkf2zoEgZVAGg4LNK9SSETQEAMTt1j",
  "key29": "3oxbwSx6c4hy6nu9Yy37MNurLh6Jd2A95oe1E9eQn3fUmKBYqS3jxm3jfeQqhRADMSXVgGt1DZM1y5n4sXohX1hi",
  "key30": "4PagUR2Q9LkKBf1GQYGzgmNLmJi4ZvHcUtJufcCvN3Sufg1iZj1QdR7kPTXyG4EXWCZb3EKpHpdHuGY9SUnyASQA",
  "key31": "uu941C5tn1K94N8pj7bPyPusMdQCszVNt4CvFtuUDPRfkDAkCUc6uAkaafQ1o2XQirV6NStVT7vbjS1Y8VYwm5a",
  "key32": "3G4hat6wFwWQE2iD4yZCQtWaszj4ysoxh6iqU8kGkpfggFmgFiTPrPkGVA92UrydgaGJLjTVQqUM9Gt5s3dfZ227",
  "key33": "5RrRn81i14WCMsdVHgDQjCrV9A2pXrQJDsSwRfHimqHVN7gYpHanS6oZyLogSsesE7BRqsAFmHghcQ88EYqv2dkE",
  "key34": "2xd7FZWJSmnEoagmAuqSJ9VuX7riBainvgY57xSREecBa8UWjr9fSQN7a1UJRd9k9szJDRWEVYWNQTmHvVDTeWB7",
  "key35": "63FLNyALTJ5JAmBRh8xNXSzY1Pqfhdxyxs5CDFJwMvhTDEzRrLTmZqxQTVFP13XYnMPbUqXqR1T1MHsaTUGHAt5u"
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
