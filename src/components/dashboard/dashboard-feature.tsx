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
    "3b9LV7tYTceRwhY27Tj7MsFfNd84XMPwHpDWpk6iFdKUhaTAaJxyBh8hDNPpj7Hqyy5LBzMViKmB8QBaxny6B1WL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xzk7Xr4kJyBQbgUom7pnG5mN194BB4iDLDbF8XKGHPxHDG1GrtHowNzHVYKro7PRFmZsDQCEiXCey89vaMi6mva",
  "key1": "57CnneJhyS5L8DYgfEPs9c3ZWCyHZspGTqxkQcwovF2fnvYo9z9vyGZii6F8K7CR2VLPUyBPKu359qJqx69wnD8o",
  "key2": "2ih997aYL6tR8BZSEDCDFGctimG4J1Vrs6G5zVUPBETtsGy9RNYpBKxXap4T3Gn58Btm6wDmd2tWaBmYq5FLXKn5",
  "key3": "5ZnwVKMTc7hBsUMYT4xAMooWVsKU3A3yY3PAgmY7La9w3m34ob25jd7VM6jagszZiHG1KsHvgNbHm5dDYYz1Pkin",
  "key4": "3Z8UC3hZm45mvYe2keKaP4c2iuPZLmJnXhtkyu5z11Y15RxkAHpCZPmfRro5PnCArULLNCYJQh8GSdqkigWH6fgT",
  "key5": "399tpRxCikJCdnB2cLAWkCeWSt4QqDi3GeMip8jxdVups8d7kyuUwdTj8oryCSYV6cLUaVQ4tsot6gZ9axQM8igE",
  "key6": "rTZh32SWkyZprY5SU2iLPRYN8DNAWnQYFp49zypu52Cawrccn5uAHU4sB3Nk3y4b39JtvJbzcb1xPaGTAdTjRvU",
  "key7": "5325D5jrty71d1MyN5kCGpapq7zf3Fb6Uwd1sqZ6nzcvfa4fsGW48XCD2NF65Svnd3yTv1ndqfGXfyXKukFXU7uT",
  "key8": "f8LdP6UUv56RxeBi8gtCPuCWYdQYzMUrcw8xd38HUs8r7BEucpmQ8QhjDwkug7k5V38hvr9Gkz5NUt7TEo1UfAG",
  "key9": "3xFnZw2Vu5kDyGkwKB2YRAJD9Px7JqHAZRUha1G7KpQJGthe1DfhBYTAGrgyjc7m4oFuBDqzAZjBAGgJRptbxEtV",
  "key10": "5VWBFTSXAN4R76cp1LRpaQB48TNZKU8iVLRRZsUpnLHxqZmL6SGFrMwTRMCeqshyGb1KEbxwxGzCB5u4pbZ1fJoh",
  "key11": "4vUwSiduEEx6mdCSFXY57UmwuhGmPPNhWiCzwxeMaSy19VXz4nD4kMepUBK7NcpdjiV8s6GsswsBgCoDePbTh3xa",
  "key12": "4hp62dJN3EzwKh3V32WTrpXVrCh2ijbaUrDgbrxTzpi87x1m8mo6CZDw8RpxpCmu51wv2KWUAg156SSYRcTPmcVK",
  "key13": "5xKDVaySEBnrG36JdYALjpjg6Tv7vDRfo8TfLbH9JxweFLRQTpkJiVzVHgMeddW2pDndN7atA2LVHuxZomHLieR8",
  "key14": "4Wg5GvGFb9zBXi2JZSWProwYUfTPjaGaFaQQDix1AZeWLDJeyHqrPoYULAzQ6waqFNwjaw5tFBKySk7GKsAvru9P",
  "key15": "3uaek9FrhrdFaDoGqCShXajBtJAvJVLYXqpAa1UA9URhZeiReC8P1Hd4b4nJNPepGHYZpaUoZUNb9PBS81dyeWqk",
  "key16": "RWXrSnmnWT1snQNuYidpJH4cd6eRoBpJpEAZasRwzDoTTxxoqXYhHdk2CmQCDvHVvUeBpQpksJxPkd6h7RKvYnj",
  "key17": "2XkTcJgUq24J8Ad4DtE9z12kqpNgTUks4SRFnvaZUPJ4yVb6RwHp2hyzDG63MYLnGpSXu2e5MtXsgehcTc8ap4VG",
  "key18": "5duxia4gGe4hSCvxoTbhdESGQLVGtcq6cQVA2BmPxbByJArs5ssZPR5TDJXXvsb3MAfuu2bTLykj9Lyk15rHvimP",
  "key19": "4GyiJTs1ZadskiZ8SnKiANLy66coSEMS4qSYVbH2VFwzPYRNANuk8Wtt8YpuWKQNNctEnFja9eb4Wmej2KJ9tx4j",
  "key20": "4aJtU1kDW5WdH5Qb2g5d7byXJURskaGTBBEioSStGYQeJRbaPEyBqY96DaXUs3fRtQbbrUF25KGBnpBempw2Vqz6",
  "key21": "9TqGamPfDh94cFRSPya2zDikJfKAr5jZLuKPxUizufnABigVwUcpfp9qXytLVgfWA4XeQ3J6uKyNjLJajz8ET8P",
  "key22": "5csgh8cUhefsj3kSgQLMQepBcMKGqsfhkDVe9HXyHVLW3DeCTQ4e8wSMW19HrwYztgjYmXzs4hEFEbSrFofMjpRm",
  "key23": "9jvsAFcw5ob5dkYsAkZTDPTLLZ7ZaEbc9iWfTy1eAjD2NomKAtYUUmEHPNiWjg8QV5ETi3Hqid2hriCnXkVDqTd",
  "key24": "4oyUmsbP2f8sWJdppnBn428k3bnspxDgv4nizwUNqhBDuzxaQHQeh7jEJdMh68JPNBDjTEnVLSCoU7qaxD71D9kd",
  "key25": "3VDt3bSZVBTDkRmnYJSf1XFv78QREr1FtvrGxoAqWxXjqSnkG7SMoAGz6wauDbUbRjUn9PKJb1uVZQBarVmuWefv",
  "key26": "57NP3dX87R6uAnWZ3VX1sGTbPNmrxtHbw6jDFjc28iQGL3v2RMgBo1dpsRYRaia4m8DenGLrtpVLjkccV2aBqdV6",
  "key27": "232yHo1cXPzmfCyb4AzDQmMhf9evnXj7JbEn3tzDXRhKt6o7CrZS4yZjKd3bosCgBtsTrzSfaWLSCTSRAorU9584",
  "key28": "5wRDt74mm6HR56UNeXbWdMzQQqmPEH311M9Yzboue4y5SMPG8dPYvwJKzzbGqo2hFE7VGfm5QF8BXx2EaVsEYhrD",
  "key29": "HsMtcvMWGHKW39uvgrsQpQPVhwqfGbUD2DBuRUCfDoTNixpXt5cpN699K2A33o5fX7kuwVaq6CMp1FX8AFqLmmj",
  "key30": "2Ku8D29CJ7LiUdwo4suV1vz7SoSEc1NrpnwpEcnjUvvYP48ufaGbrij9LptnN9dW8o7CAmWBtENzy5KTJDfGR75P",
  "key31": "2C7sFRokzkPetyk18LEEec28NNSjuKizCBxuFHEMKFFDZfzjjhyx5foRP9Lkbd5eaEp9DVCqgj9SKoxcwmcRYGai",
  "key32": "4Xp2aR6hx8Uz9Bhj87SWKo3X2mhXhjVYqjw4T36kp2J8qrV9yjcKxwUcbUxag3wry1fqPwFThRsrg4RtMFpiDFBU",
  "key33": "3p4pBMnffpBzZwAbwN5wJaMJPjzrtN8Mh1J7oG5AHruNk4P9ToDr5kVWbgYrdVUw6yM4qDUphAkSLw7Xmh6JFKdE",
  "key34": "5XbFk3MoVxZdKiiAq9a6YTBn8vQX1dnPUZhZKXYRZ2kTyWMA3Hra9hPKg8ZJEgWyadxm21ACmYUbNBfUnJtdaU22",
  "key35": "2HPQkEMYneTyFRpBtfS6a9wzVz8FX5ZaLvmZczKygBpYuPi2aykmEVd87msFRLmPuJgXTHzF5j1APRx7t3VvwkUo",
  "key36": "2yn674Pku1LWnFrXbULEz9rU7VA4kaQre7ZU27ZZc5YoiXy8hAQg8ypKvdXcxVLWWyigEwA4wq6riVXmczaZ3VBW",
  "key37": "2JSA92xmT4Cykt5c8RWXvy2yVEvF62NLZ1YAzMJ9fHcBosxLoWMCyh8ngNGkbP2m5jijGxazav6yqR3bDXtHPSUC",
  "key38": "42jyqyWt5E9GmkZNtiz8pL8VKx5HGbeD8eSJJuo1HjyPkLaNndZ9oVZJ5D8zqDVmts86V9xkosSYbPWNarmy4pjh",
  "key39": "8TH85724jyKH1VCPCRo2ud7USMciQyxfDQUTBRN8eQFJqeVXJwnMZBSq9cqy3cgT2aKLup8q8adQBQi7GpopH63",
  "key40": "5ZtsmXsuiqVGvkU7E6QSoydfP4EMoH4M7JrNy5nmT74a1xhAc3bFvywUQg9Pm6W9YLYXR6xNWzJsA43H8DRoUXXt",
  "key41": "2Amvz2BMxPqmkQGMHt5VDe2jTiGtiDQcAk66p7S1X7vvMvGvCkiJrCMUhgtvBm6fYyG52zGwZF5XxkpsCgWvyx89",
  "key42": "397cgbfqq2zQxgMueMVXj8z5qsoQ4Eaynm36PULuMXnjB6F9ESbAotaRa3zGYVDJgGTthWZyRAyhnKzfuaJDELGB",
  "key43": "5RNiKGMZ2hbFbQs6fkimVkuUYKqmXiFvt2gNkL1bUvYM9fYybUkXq4BsPnmJJDQFc29qhf35cXJr96DU8qdMv73Q",
  "key44": "u19q8F59gfFoHtvSNNAsJiuDAwhjUtBsv3toRyjUMx9ucEqVQsmFrGdbeEdAz9rapKoGouBqpgaq3TtUrKtyPEJ",
  "key45": "3bWNx6jV5Rt4QnUmtCEPbCui4qKiAbo6VSzNgB3wSbfPSjs7W6UFc5GKmKApBdFTT9b6LxJqvXDfMPeNySKGf6ku",
  "key46": "3RDAeXx7oHL15ejyL2p1gjaY2freKeXytyXF8Df1Ldz9seSrxNzqFzhea5v1qAMBDkGpUUWanGMbT11cYWE2o3SB",
  "key47": "2WtGfVH3VUAciToTcvQKuDTJfBPrfDZKdbxc2GC9uEKtmkhDYDpTjjwPXdX4NJ2VMHbSNmUjvhe4Aqe8zooTW5Y4",
  "key48": "4sGpwvfutrYLg8wrhjnfUL7aQjDqC5yPcpB8jRVKg6R1RVWYQbGusu6APaBz3NmVLJYYYyHGHnfNXaCjxTswFjky"
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
