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
    "3TC4zSYQjMuNYVUnENYxmo2HhsEB9ScV3u26BRjtLw5oYFyhEX48MVQuJ5mD2pkaBYCjaYxnHNhB9XEm2hpFHAyj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kSuTmpt6S89uZazr3VTnwxHfL35oy8xqyRuj16ZXS2i8VJp1ZqLiUgWfwhg7dWtbuc9brU6MVMZ9vYzeZqi2JHe",
  "key1": "fo6yJrff8412S9rqy45v44GCQPooWtoZsoVtGgoLzvfqzn67nfHiWaNTB8jexWHLikgVAht5ko1ktf9fC1WsF1V",
  "key2": "4WkyNZzKbtfbPq7rijtzaK2HX5adPqSKWpRyuxqcwGQuWCjmEXQrnv88jeQXafh7dgPyq45st4VnoaSPjTG7Geu4",
  "key3": "3CxfqrTEJCD4B7dTbgZiexwL9fq2ygzLUTDKV7kgWnHvfwziq3Dd8qGZ8d2vJ8QNnjaKKz1objNe4JMceXYca5Ny",
  "key4": "469hD34QssZZx68wntWAatQQ7hZ1uVBXRU7FvtXuqgSGyBXXd5JLSk6fL8dySvxu4CkZrexbke6118kq3eRc3HVj",
  "key5": "3cigvpBmqw2kvng7N6gu24CndCvxAbpVRQJyki6n2FPYJz95MqUk1a8as2THbFcYYC16Vs8eiHr5a5wJRfsh6f13",
  "key6": "5SnsC23WY4y3vo2tBgJPeuC3WP9Z8hEujpVqsbhNqpEHHAAobAouZiYUArUnYW9psdKXHjMrcrZM9P6SW7pedGVv",
  "key7": "5RdBFN8XabeVMB91toK6T2fbxTwezAY3vWbEP4dfucqeXJBwSonizkiL54FxwfBeQB2CukXr4e96J44TfcWakngm",
  "key8": "3Kjokmat8Wy3DP2DKuSAvEUEMCS4bkVpUVnWUx2ZYbpoS5oMsMZp3WRX7wAoE5uhQfMbhPeDsZBED94KFcQyjkVq",
  "key9": "Fo68DMgUtmB5XvfrG6NBr4yiTPSEyTdNTZTAKdbCYbtutLkKJgBceHRAwqpYQModzZbv34k6vvvJptUnkHSWnko",
  "key10": "4nGbQpRRdKyFEDnaXbbeCmo1hwPKW6mbnShzW6DYGrd6q9rJ8hHxFBBxJchYRaTRTxV9c5UeR93tTDJyugA9XaDT",
  "key11": "2LTMLoZvYhpU83M5v7x4tuJuqLfwqYJ6AxpVRwg2ZHM323JkKGnJJCeW2GZp58H7dqfsyHYDYTg1G6fMbuyzF68G",
  "key12": "3ynhBpsPfVFn7JaT5bmfDmWjuBo7jGeifDSZsV9CWW9bmXDAF5WiFq8orKkHwcbJsvUuGySMnRbupHofnuTk4ZfB",
  "key13": "5dmWWGn5L9sEiPbwnDTbin4ieFnxmaQ6sYdkESmBToEk6zifQvBixn1GfGjmTYsjs2MWMa7DevmLehtHKP4khcp5",
  "key14": "3fqcm2GtDdP1t2wPPMDiJpUo2rMCzWkvQbLaRgihBw8vhaR57ZJs3ee7giTQerAAfWJsZmobDns5EWYsmm28prom",
  "key15": "4Q8d4iebwAqpiZBX1sWmanuBckqRMRGhQLfSkXta5bvyza5QhRXGZ3iq5qPfTM83BJWBCj9vog7Msg2KsNYuxAE1",
  "key16": "2JCjwtLYvdWD9dWLaNaYkQBGdTJM9kascyn2uheUtKV4V9wV1iyxyE5EWSxDeNsSaD7v26Z7gCW7h8bckPPyXneD",
  "key17": "5AygqFspgrL8g5DxnmyAqNru7VLdw2aHjnCKtbn1iiJ5NbPC3gLT8zduup5WJgftU3uRCDRfeNM6QXX9UvqnvkWj",
  "key18": "5oyDYHyBRcmFamX46vNuXWzBo45xbZfKrfxYoegesmVrS97RLM3kWNqzfYPUGeMpVM2sMNhMpmXLzKb64MWBEANS",
  "key19": "2937SByECAjMz8eWnWcXqZXatEzcSnRL1cCP7VqCuk4S5SAq1UCXT6H4ziGU5ahKT4v83ArrSPf1KeCybdxxqHAj",
  "key20": "3jhDRtQsqAhN9M49JuzVmWm9praKMtwbYyzZsEtuyWtRCaA8C4ABAzhpbRuMQJkaiz3fdk1goP6SnnDgQ3h9D55s",
  "key21": "5n5uBsQqhhr9eXAaYivb7jqbBgXE84twBodEiwwdpryikvWYdUJbktEUvnBJXPmzLe5uwd9ec2mFHDY5MWfAYz5d",
  "key22": "3pzsTeth5b8ywRWwE3KFp9a9igFdBocHDH4phoSt2cbrWu9FMeaA1WMvopH2EJKqzm2MN8J4s2SdUySoMBDP3KyZ",
  "key23": "2x65fYhYeKdaZkAkjdzcWGCyqoxL3hSMgiq9XUyPntHMexaMzbPQYJ3KaKQwSKac7Gv8D1qXJPmfRZy8KyfKAUdA",
  "key24": "kVFp41hXJn2vuV1AcejakzveKme73df4eJUUiJ8vhx6a1WrPFo1dQJF2U7tq6i3vswevFJ39w7VhGmM6F4m8kfv",
  "key25": "4JWAP3NrvEsdV4HVv5n6m7y7U5ZN1EkiBiwH497CbiGVuCc6MoitV5dfU4zd5KKFboeNgGz7u1bFUkbSoNU8mWWD",
  "key26": "M6BLmnymagB8NudQdnxwYRSusne7HWjNc4HxqmqcJq8EH5RqLDo83aLj6XDazuMeyi6TxL3bVXJTSwaZ51Moapq",
  "key27": "5cELFcegwuHRCNbUzK6VUUUKooCU94TB6hFgrioT939DrkXhFYjfC4LRsWA2WcqKMvimJJavxAj8XnGGfVDHahpt",
  "key28": "3v5bWMtpivbwBKdYvm3dhTyf1yvP2cCnciDXjnQpm987gFDhiaVokwh1SgXxD27dsHEeF5S2rumozUvi7VKpJwL2",
  "key29": "3u4b8Btyu27QMiakJ1CqCZVnKCYcMavX4Z1SP2kW1QbQRV5YEvqAcKknDKuDKsN4mTJx5efjLHQ7rbJdzbwJdw56",
  "key30": "3kZH6WA4KqDaeNRWHWksFer24LdAWRzjLaBoQQPcxvxSvywKF4wWFVyzZuYxwVvsypYjLycH2xVVeTw1Gu1BQWfD",
  "key31": "2vPiJJvFrDgnuDcUweQaD56RkXMNFB6Ci5dDwd1Gt1P8CkVawyBTeRcmV4FYJAgt4cHcnq3wgGutyAWh8woC6xXp",
  "key32": "5QNAyB5AaMhND9pNJS7UKBcHrdkwBb8iT1LPmBwxiHconYcVDkM4yGfVfjdH9Hraa4VaqMRUjD7YjU81XLP63HgP",
  "key33": "2iDiUSbs1bUPzHtG8UiZTiuDp7G2wSmZubMbYBjYgYocBGpo2ZCxBDaJcfFVy4nq65xmWF8L7isoD7okWAWntvCb",
  "key34": "USajeiwqBEDW7oxHaM8bMbPp4pFcbuSxenyxCBrGtZ71f63b4vQRDJ5oYwQoGkYA4qNb2eu6dBRSD5MnF8UTv44",
  "key35": "euQBYap9CADFQkWV5ess9JiPSCsV51f8w4eiJhTmjE1K1L4qr8wS2PKkps6NChi6syARq5xCfkwG5oEQjNs1S4Z",
  "key36": "29ZoFBYoVLp7JgDUJgzT192aL7S5GAMFnWkKK1RsxjbfH4dpT63VXV2s5Kguq4uxWMwT8caXZH1xHhyj1yWG3ubr",
  "key37": "5xPKos1VaVGgvAP2tUmhQ8VWFeyHEcggomXaHbvpPJdzQwb7GVhoTDhjs8jjUTSJ8y1JQP35PfYWd8jMY3HshGRr",
  "key38": "3d297ogC4jdxYx8PtXHheiZT2vcN9bYe7bfZ6A9uQBFK5qaUWQrA8oNijfq3krS7sTneoqPjwzY6MYx32or1fs2p"
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
