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
    "P8B31S3z5XVtFiKZrGTNJYzNxjhbiDZPX5yFBtjv5dKoPXC95az1V83gz5DHHX8X41PJ4wNWgfBSoZ4X6uQshz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dNUW5V6ZJQQMgUBpCKaQkty6nyvo8WiNdmyVKRz4ActSdPDskeqv1xmAd2W78EFhxy65pV6z4jYsUWAWzL5zjA7",
  "key1": "1Qcg7QHfYCMmFxdGhY6b9mCe3H27C2Zh7XCMyrJj4suAHMTcJLN35pvY3DJkgWziDuiGPjSgBMmgbUqpTLmRUEv",
  "key2": "5QB9CDg5jk56PyX4F4fp5arZoqqP3A2jbGjU4QbftdyiXu3sEteVWKLPRdzwYacZBpcmpZzrYTfHU63Tvw1x1pmP",
  "key3": "3pe6TAg1hcqXLpj9mFoTAmX2wFGEzqDgMxXiYatttrGab959vT5tTyh1Q1Yn21n2bBMoEt4GvbzFyxKM6FYHCatv",
  "key4": "5qqsyqvSnnnqDCTAs7PUGjY69MB3EhJuoGXE37YxeNJmVybmSHV3PaesvQP4zrGyZ3Xw1HmyFuydPszQU6gHM2fv",
  "key5": "5ZH7xVksxJwPNXBtS5ctNEaNN6wdJvyQdXifWAESbVecf7gi4C3runWvw6xXGm9PyYZ9JpHTQBH6yhsF4he2Lzf4",
  "key6": "3qeZDg1nvCpa5WeMWsNQQ3r9mcPUJXiq5LsajWirctiLVDRspJ5yGkd7wkLRxMqYtQwYuu13dcGHhkCKHPpa1FTY",
  "key7": "2Ezt5PJmZxn893Tymbxi5DK8vUiPnajbovkmtoEm3tGGqTWhf7CZfuHyYsLpKqSqUqaVJhxZp5Am94amUmS8vmKA",
  "key8": "5p7wcKDZx9s514wYxNLyHRLDNBGTHK7H3b3ucFkgAmGAD2sbAZDWcDi12kc4uBFvNDB8sp6Qd1M29qbWYK4Ks1rX",
  "key9": "28YRCEsajN5zokvra4V92XNwDzenhGrSRuXzV1BdsiMg466Cp5Z3DqFzGGB5Ea9eHwgkMMCir7iesFLuXqHikN7w",
  "key10": "2r2DGioYkvJHksG3krAo7T2fwwNXUinN9Mbp9pTsLHGrnwAE6XVZgY4bTtqf4BozGW5Tkoh2ECnQCvj5z73Jwj5R",
  "key11": "4iYEBQwAGvf9WBn2Ah3TFYB4V1Uy2sYtfbYuGthcx9oqvWAFPebtob7XUobzpsvu3bDs6S8g15UTfWpUyuSQ6Neh",
  "key12": "Eze9pnhPrDre9TUGgDR3etE3LDGqiieqbefrFyaEsjRr1USHoeo8xvzyjQsZ7HnmYrsRtcegU4LAVSSpAmMeyEY",
  "key13": "2JKzKf2vfP4R6X6z1yHXc4CCg3X5gDMf9hYhmqTsZcJBKcXtmVr73HwdZYZqzUH9fAZcEiJF1rRMV8zCHEiP3kde",
  "key14": "3VCSV6Awc7UDwFv4WYM1VgmiMd2NmmEkDAFTFCntpcc43UH8wpGQNTUgPvGMnAqVponEhV5UP5iRGJvZYYpoS62Z",
  "key15": "4tNDpWxj932EgfhPmHKzgjnQtvpLS852ArbyjpCzYVJoPEhjiidfAs9NTXv6GniubULqCkH4pNZjHnAfHiCHJpNJ",
  "key16": "3udngBL1WfAJfW6GpgRGDWRN8sKKMaCUpdyy9fNo9Ln5yHgmD4LhnV9W8DNeaZRtxbtMdnjBFwoMHPkk3DvvHcXV",
  "key17": "4em2xRDyzBcckVBeszAJZWKtKs4btnzF3Pxp6Lh9EouWsMahFFVqZKiqu3JLZ89PgCWvsFJRtXo8M5RXUEAoocVX",
  "key18": "5oLVnkVSs89AwrdiMe9JP9peH56pdP6d3MSGu2JG7VdKDeKgBKDXvxTxEn7qjRvY6187yWpRFanTB4h46Zhq2TrJ",
  "key19": "2auB9EZanG5NYs6Qa6sbfRyVWSsnKN2r5Bzs4JMXZTUnN9xuGxzCZB44myqkzUyxE9otRhA9f2ULVaLtmAg9prTz",
  "key20": "5pRbm76Yfvkt85uNjqNYq1f9mRDiPBuC4dMV1rQSWgakn26WJ8FXd1GWJuDDwPhJ1NxvqEv8xKYJCphp4hqR9z3j",
  "key21": "jxATnCTvFzGsN17e5opzeHPX2LCRMGCLHU9t6D6iCdjM2JUi1H13a1SzTkT4UyZTQLSdA8mTKYug985k9mxtkTq",
  "key22": "3eejKHXZbn9eG7AK5YEY2JCavA8x7CpxwBrSoGZiG7jpBjpwb2JTGnUTwTgER8uf9DDeqfswNj5vasA4AYCgbWrf",
  "key23": "63JxyFhSc77riTgXnC8fKAX6xKwoghH8JRrgnzTVLkUxD6TCfwWrZNkzsrEZZNfGvuA56W5qifwqy6HTyrTNtqcQ",
  "key24": "Mt8n6tZQybUf65YnyUXEK288rNN1G5VvygRosQBpwxtTRM5bixFrotHtSv8wyfcJK3cqehGedKSgWYt4NKrP8gU",
  "key25": "5SQ1mRJcNUcWeUBorQFj86d9CtAxhJWj2iQzPSE7hRrFizxNM82qEKAsuc2RFSDhqzsPsws8fbdV9UEgc4HaNzG9",
  "key26": "4JHWoUQ4DkQcnEn3nfLSS9qq9pZWkqMWXfmKg4FGukbxdLm2D7zdYkpsSxH51jX81UvfYxfru2AKgL7cjtBRf5N4",
  "key27": "5US9B578azeGqwoCJjWJbK3vRnAnUhEe3eB4hPK1S65XLcbrZT27i5GevqiTCXvTyNRSUKQMe9nPxPMZLc94EsNP",
  "key28": "37FhBGpknQ23b8X71U9VDuXKAfhYcayQE4bnoEtwLXov3cRne1MQgemUzCNYiAfVuYdhvgjaaceThBBVcCJr8kBU",
  "key29": "vcaYetZvfiayyLKctuka9dGVKKoD984ksAV9PniKHQ9UaeMffSDJHuJxhcMTRThQCCspkwXoR36KotSj81i7gni",
  "key30": "cBZSCszzp9y55AWxs9QqJpyc5sRwXmoBVKjUZdmGMX1m7wnaAHJS1Tx9LXVk1fDNeZ2zLLoSAex6HFYGR1aS6Sj",
  "key31": "5mC7XpsjpyAL4GsvhYgTJup1d9ttsSn6xKFY6R9bLh2g6tnkNz8qSSVLnh3an4yF4KGNu6UfwXmpgZebG9Ywafmr",
  "key32": "jdyKkcs6D2cxQ3gyVXuGqHyRn4cWCrtMouo5bCjUtU1APCnu73H56TNncXtrZVoRYPamnGNCurKwiotqEHhZ7HJ",
  "key33": "FTSxMgqCTXnhEZmQx6JDkFNx9YjH17qdVq8X3CPdo1dBhZ5NhFLHKuMjC8X6BUTuxKRwsV14AYZGYF5Db8RP9v4",
  "key34": "hah8JYS1TBDqig9vHA1Co9voqKqbuHcrTt9K93b3KVJHva4YXuigkjnmS4QkmHEt2V3zXHnirYwhmNCpGWjNrfE",
  "key35": "4Y6zodmuMqjfhz3Gpg6cDPQ3tkgPRnnytPnxReM2Bj5WFXbKnZ2nwH9cTLJoXApEMEfhCAZ9o4xhUg6NXzBmpCEX",
  "key36": "5HtdqfRSD1DUExjugU3oaGKRm6BvVrt5SwwoT9JF9m3MvxGdTggm9P8M6nX2uFe3o5Xgg21VTZpvLWoGVE6HfHvd"
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
