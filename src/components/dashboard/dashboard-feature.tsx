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
    "4aUbiE6tUhMEKFoM4bWUC1VAJYYY3MzapqgrCMGjA62xcA8kvF281vWs8KDbAvKh2dGbp6jWPdRrgYjkcvjrNzq3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y56JirHys4rUe7CtJF6eZHzyRjF18FqksktMsjenWydwBifEiJtKbxcFwdeaPWzy5uc8muNrcdBDaQTNCL2c3MA",
  "key1": "5dQAU1Cidat9pJy5jgpiNjo7gzinSvv42jKh5cW9gpMXcD2KnXnNWeNuRGcpEk35NdSRL9Fd34HMPe3gxRyS3yUh",
  "key2": "VKVs3UCD9XCuJzFA1x3WobvJrNyoWfuBq9KEypdgctsf9yKzakqJuqkyBSBVB1kapyukgAmspUypBsDqQDABHVF",
  "key3": "4FyMjLnodpxZiLUqBhtJCGTHuSfqkDiEEknhZ38uBYarECWzBCcfSxsHgZ1oQsHZirrnVq5pd2D9uMRx1CU6dmu9",
  "key4": "2mTJMDiqerYpXRZhbvTvW1FRA3r81V8rtKwCsddk6bvSUwvzgpYDqJ5J426xap8ZC2XsZ9vyDSyZNcZopbzmr65h",
  "key5": "2376UE8tZXu2RvgrnsJ8CnnRWcAEzycYG9t1G87HBXEUuygt8xJ7HgV7WZavHu3krEdmqiK1fiW7HbYfKvHs5QG4",
  "key6": "2yu59GQskUUsSCbjniAbBM6GmB7bbxJFVDuLgx2anyonMs7T8BfSY1oew8mDvfnKC7Vcg3DQHubKa61pRQtCipNG",
  "key7": "3xxx7DM7DLrP4MeqQMmqqqrbD9jMaaVYsCR2XDW3FNtjCbAfFcEFc6UziyRaKfCYLpDwkjz6SQR7F7di2UHVxxs8",
  "key8": "21d7GJFHiJEukuem6ddxLD7kasgxSe7NsVywBPVmbuGy1aBJdAAkv2JGTRWUtJz3XmUx1yt9QmSAK6ZGJHqSoMRT",
  "key9": "3jr6S9926Cp9eCtGcLcC1FND75wbVDURLhnqMF4KNcJkX46Jei4Aypc3Yi4e6B4mRjMwzq8cKrmJWuZ68n6UtYrV",
  "key10": "5Q3AD2CGEbBxTcAec4pR8DUDYs3GdLiqTDgDbmDLopTTvED6tFB1BQoiMxuW5yY9sAMJwkZY9azrD6XHn5YQwAH4",
  "key11": "2RMr7sLJdaL29nphokik7HuzUSkpwPRYyiAfqnkD2QKBmiRfJCHjipdefDKpFKqEW3NkWHRGvNbA1r9Hn7D7hB2Q",
  "key12": "4ZENwZdarn5qSQh9xn8MkrNNRqXLrXciP6eVBXhsPpK2JyB1THPzLp8vikXQNc3Y1VRttLga8q4cVQDFSnRWQLkJ",
  "key13": "37LJ9AjaebrYKqYn4oCgkMpwkrupNW9VPa3YD3qoj2Fw3jqwHY8qdNsLZ5AQt9cxBFo5BEwV24FVa4FXZ1ZegwpT",
  "key14": "2fNXg1tsa7b65wWr34WU3ctXbCwo2VDggTs6v1VZSsypYyAnFLTJZeh3CPBxdxHWRYitS5aXYq5gWkpj4uBzGPvR",
  "key15": "5SfJmVjcCNSA5h1dUt72dj64bKgAxkojJ9MQWvsqaUidLdFRRkDL2Bx9aAuDV14UzS8GguyuUt9or4tjEgy1Fi14",
  "key16": "3tmZKV63pmSCFNcvtRZMHPcJg9PqCHTMgrgpgwLV2fonwwwJTTmMssHkYTUwJjNYLWoPfWzaHvEqxtVXKyrrYW4N",
  "key17": "21BEPsZZoUNWxzGEMTQUBhWBbzP4pGZTAsiqJP6nwUrtB9tV6MRotWTXwcRKisDFddDL7h8ZYW6A1232qncEG34y",
  "key18": "31vVNnmzaDthfuhGd21wfkjZPoThoDdfnEy5PWYs25YjgJjQdaqjsJ4dsRQGjhxaUw26YHemrSnizWLb6qB2FP4H",
  "key19": "3vUULp35MPcWEejy8ybRBqsjrta1xC6EFpR51QXXLNVTR6aWxztr8QNi37LtQiW8kdxYeHahqdnQoTCtd9BGPQNd",
  "key20": "2xLt2HdUQNxzz86LjDWNyG4x9VWegNWi2MT5y922vWw9pH5sSje4QRd7rwt6sHYvzNrVFuWJsemYiD3DNSRP7tQY",
  "key21": "J9NbcQtgriDSWGxrNncEjUVDixb2qNh8hZGLRAafdsVVYqafNiUYpM1EVwzES8twcfC9mogWuU36WpDXfPmt1JW",
  "key22": "ZWCc1KM5AJvziuQYcg9bPo9JTWfKJ48xCyio5maH12sKanAUTzXyQLDuKPcJRArXrHruCHof97oRSo9v27vESWX",
  "key23": "4bBHgjqaWYTeQYtXenxKqGnR8gNjDHudi8ofXsvSGdduHfXwz1FSw2dZZfZMYJ8jLYFWkcJr69PG93vEyc3FGheX",
  "key24": "2Sk5QYBSSoFzGJBvhn4fx6PUsDSeQVB2f532VT3361FiTdBXqbqHN1DTf5NFLoxBDQtKzkgmAcBVg7XYVxGB1Abk",
  "key25": "2Yyky3q2gdHnXQja4cZ8vZ3updbhztLnX96QuuNSmx43FyzZiVkiahGKy4d8yWi7w4QYLnytg62WAVUETqHbCz1c",
  "key26": "42F18RJqEuAFVfJ7drxoFMWdq7rP46xWg6oR4RkHQLpSUgrsqCabC453X2GjHCHKQBGKPKwqMxNvcHbqnz14eP8P",
  "key27": "4y3Qd3a1Pz9LEUWcjknEL5wFX63f8b9ctCr2Rau1bFmpPLGmzYaGXX3NE65CYeqmHjbCJFPHMEW2fvBCqCzjZ8b2",
  "key28": "2DyLWoHSMzbUX3fX6xYKuDPWTbGougzrEMLCnNJyVej3k2HznPbSz8DFyaC1Zwq6wq26WYtMpQuZMF91Rv71gMYJ",
  "key29": "32LhX4mUCQ9vCZ4EpzXvxp8XbACPa9JEKFKivqAzZ67EkuJTus44Ajmgn4QoSMiJMrWWLsb7BLpH6CKtfMc1CkuW",
  "key30": "5QK4BGuEvaghKvQCu8rUVT28ZBViq6qeUgG7Jgyw2cTubwrTMdhGszMLqdicL1HbBzXEcd84U2miYXYxW5YJ8ctA",
  "key31": "5FVF8VHbrD2y7VWszdeWY8F8SjMG9SZW9RnDc7FZsoHzW32WE6TUMViWQDqiceLaNVbAqxvmQGRyYPkaFbogsbrK",
  "key32": "4iW1VE8D9W2bJqK3BzYvzvdeBkTYG3aj9ewxw5kRgSU9SHK1PQvHA5DuWT3K3q61rJb79oc5BqKWcf1rq55p4Lax",
  "key33": "aAnjHmq3ZtbLJqmhoj5avwcc79cYbn1zFDHP1ZAeNqCc2zwaBMHbMqLyfnEw6HLbBeETaSJoukRKTEsA7Gp3t3D",
  "key34": "4DxWonnYGTbWt2eUrTuXeYpdAUdhYDmM8wZUgLJcFtT6FGgmGCAHCgsm81SsJtyJ8y9XU4nT2Lz5UJdBBuFHABgc",
  "key35": "5wSkiQ6ehvTR2XUvMixoSwtBMJF5h3zyKbQ8xozyQ8e9BveuSobKNWKjaMKzKvqWNArFaoW2kibiNUYjrTVts7SX",
  "key36": "4deapwy3FCycgu3o79fcgh9BejZbkewKvAkraYLseVzLuJTgEvs9S7Bt7YJWFWqXCwEqBSmrUDyDhbhjg16Ci6Lt",
  "key37": "3rN7XvbbWou9zWmncKJdLVyhPGGSUL3HVafZwUwfs83ZaCStmXrN8fnjUGujQxg2txsYCa62kQyW7RFgpLKfyn1F",
  "key38": "5yW5hvzEJWiEKdYUpp1mS1FuWUwwpMq5bgCDoukt2erwRm6aJi9o4neXT2qju4Cnqcuwq2tZh3FeJ7h7ny9j55DL",
  "key39": "4xgTxnfC5KpXNnaH8aYwTzy7MYYkp2HoAJTS8kp8tYrTfNHWnmD7yiCdxcWC7RFgAsUXd4pUnFNLMUEMNsGuDP3q",
  "key40": "5mYv6eDicdQt5QoLDp1K6p2MKdzenjNoRa119MpgrEdyf21V4PhgamzzVM24N59EYde7nP56vf3G9N16oxfzHytA",
  "key41": "5Zcx9VXZ1iTgr7hYpjPU8RPH3fQu4PVKvfem4p4K2QeJ71sCNVqmD9JGXehJSVcuMR14KV5KD9ajSdawytCuMzPA"
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
