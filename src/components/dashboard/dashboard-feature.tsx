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
    "3Wr1UqB9AvCRAGWp97tYTt869xzCSgfzzhjZ6Q3vdG8boR6JPj9rz7SJzTzbdGFVPUmf23j4eTCXcYaBWKR2de1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eaDKJeX9REG6uyUDooiTrEdYC4CADcEzKdeXLkLMeZ2FAAKZtbm7iPCXsXEUnjvD7oaDsgXfVq2TmMfCifNyz37",
  "key1": "59pTugdRdtZ6iuy85hZTfQKSq1rDN8aKfoTU5WzUpBSuaKHcnMpdY9Bga15e38xEQHkRDFbrcT38aqVhWmBhgup8",
  "key2": "ybVWwXJjpMuq5wprWAMSN7L7obn9G1MPAdqYreQMgxf7n1ts7YppfgRwGQ2Ep93uJQuLcQrdRiuDupAcfShC1wX",
  "key3": "G1Qc8iDwE7Tu9xPTipvPHue8Ui8uz1xpbgTqqJEKST35TukDpgUxnVPvdF1iq9TFbSDb3zNUzwTzDzjoWkqeq7s",
  "key4": "5B1mbCXsz9qaz7cSfLeaSfVfbhhTDriGuN49FK6MqstwkYmHZMFA7VYt2uLZswrFMEkEdKvanJ2eYRzcMQMDvCNB",
  "key5": "2aeFnH8hkEu5i8wchDpiLQXRrooJDUpQB7DuqW1wwYFta9GwjxfRnWLwvwbAvbztiRgPA96FtZfXj5gfLxtqTZiR",
  "key6": "4txJBNNDhWG3xEWQNDrTrTPGFLkiArwdUtRGvU51faQi8r4gs6c7bQYtJ3PU6SBPKvvQrY99TUXD4qy9x93rU2Vx",
  "key7": "5SzdHNWoc2mU9Fou5XAarxdNQwyk3Xnzh2UFRVRWUPNS9Ejko4RV96SfN2dbSURzW5eTc5ABjrcRgRVWeKDVRVVG",
  "key8": "5nVBov8hVTnju7m3rRn4aTU4roqcJU1qKdMz9SqJBWhL98PhbB22FuwHTjFjABWChnGUUHzTbWqUNM45mCgz6DwJ",
  "key9": "4XPgga3idaR7mVuWWC6zM93URh9mZjb2SHEQASbsJm6mypXuqS1nmJF3cZuoaYasKcpWr2551wY4RB8U3snsfdYv",
  "key10": "2mu9PZp8jRfWiFsAR4fmWK46zoqhRfrFrnfo3RghGDWC7XMpiGyxyM9htGRFP6oMfMcUZgbqscLNaYRgUX2cKqhD",
  "key11": "5U3PCEnbXhnUNg5G36sCxuPcez46Piv3phfpGjo9FkpyBBj4DWRyQZYFmGVnS97At5dxUDsbgdXDGKFKr5N1w6Gh",
  "key12": "3q1CZNZk7ddxrSLk7mWeQuKcus65969FhMdUJFdf8uBBFuDpSSPzGWtuRBLvQBZXRpDXJ5Y59HdsUPpAVdGLjQTi",
  "key13": "2GdmpCgYebvVeJk3ozB2RegVDumdbZzCkktp4eN93fcQDPcMAhbWp8Km1Gzt4Cn4upKoiFun6kVap74wuMURiXbK",
  "key14": "3xwfVUPACodShvJe3chssmJpe8sDcSPn4nZcZ2gWWCdeFEgzAvS8TT74KNr9fDptHuZuNCqH5MitCNJjCCScK88i",
  "key15": "4uCidJDKGRbuiGNTNMVoQGdLv9u6RXCSs5tA6AgVqEfeskiSBkQJdCXehstPPo7xGPMFrbHpGQ8HHssTLYKofMnM",
  "key16": "YQHspiJSLEFVo5qMnX3KvwL62DHMTVgzFvvgMMR568dPmxqDcT7mrGZ1qMVG3y8ZjBcQpHkDrF55bFp2BDQLb3z",
  "key17": "37hgWRJ9rCAR7gR9NR5SepimgpyfYTWNUpATtuMpCeNTQMyeRgMLTksarjY9GnJCLTK1rUmq1wdo56ha2jkfkeNs",
  "key18": "5f2jdDdiwVxqrh6nttvYyfmA3oyPj9j6ZQMczmY8Yd9ZeoaYivuBuAnzhGqSM1PuxVgnbv1kDhQ9JHN34f8aaG1J",
  "key19": "2Vdh3nmvkJ9zGmbkPB4xkbDhTUTe3tL5w8JbyiqtmGRNmq6CHGqmHthtE4BS6kMWDoT2tXhTFpKEmGb54GAvt1SK",
  "key20": "3TQ71HsYvcrNC2NYqqNPcqWeCMUqbo2VnoxYtL9t2yyGBgJJwYmQRfBT6uTpsGMHcLdqkDBJGkkJwWhS3szQ5ttk",
  "key21": "29rbZNXWCw5j5KjT2j7DJ5Scc7HP6pjGxzEiWDKnsmWEeNPYB61yhzgU6eg56VrbcaywTdjv7FGwFgSfjoQ78TsE",
  "key22": "ookLNnYNcg7uz7wdJKENx8b2ns6TADEPriLiBRPCXFxZnp2aQBdYbQeQnt5SvmLCFjRkRahn6dNa75VfnqgeTJf",
  "key23": "5GZos3ATbuzDis4kr9Kgy7tyGDCmTaSiSQMAzR8QFuqDnxtbgM6hwWbLENqZhDBfRfEUXT4VAgggqn42gCMgDZ2k",
  "key24": "izZAXGJagqv5v4XAqXS5wjZgP8VLqhSx5tSMdtYcxCS7FfiEr6AJpMTDo6PU2tdN8ws1HdrDCM4w8Re4y8ETd5h",
  "key25": "2QTXWZ5yU6HTZq8ykotqZieSFBve2mHNQoWWZMEXukcckE3h3ejEHxC92MXiS2LZfqkQccsvzNMedEJMFRTj4BPu",
  "key26": "5bYJ9KjsdraW924DLrSEfvkvUZAMFvGuqTd2GFbUeH2vWJJXiHu29cLpYVcBNACmMTwQdyh5VoZMjotBwwcrGvmX",
  "key27": "F3Hajfvr8E1NHNbxrRAhE4VJ7pitbpYnZhAr9q4g7Yo6c3dd3zgyyVXvJAT6XQbxA7D7UtqhovVne6Wi4CwZdgv",
  "key28": "27ae2Q6rMpHcDJ2P5W8g8xUbvz8rBniatyNiY6BJ6hLhXE52bCWh9pu7X8ZPUxff96HSkjr1NL4ABnbX3D3r5iKU",
  "key29": "5NuyLV5E4nXM46MhYDzQjE8ewdogy2Fwy3r3gaiPQhrAHmzp1UAUuCgbZ79NNRPWekgYj99DEoBnxFHZBNmgCDbm",
  "key30": "2dviETD7MJhM4wyGUbtUEAuvkoh64nevoSqJvheoJNzz9TQbdLoifHSUs7otYDhHzkAPE2YEdxDW7UBgvVNCzcA6",
  "key31": "2RuzyYsjuPGRoASSxZKU2RfWBVCBZDL3ghuJiqXrJ7AtkfgqfK7RxStB3puGzv2iF9tW3oJJCGpdYdAy6ZV7yTwn",
  "key32": "3xf5cTvkXHgZi349LGZHNiFgLoYsQm4aRM93EZdRCB6WPSWgpC7QJFLEsp7qv26fXF4YiUDcduTacYsTJFGPjhQQ",
  "key33": "5A33mujJkaHEH9HEBMk1DVTigvGmnCawtAR8oTuQVWFp271qiJUaij5jwPWGkj2hAAZEBvHbVsMWUkd7ujDWZ7Dr",
  "key34": "44g7LrrAn6jUSEo5h1SMEeQrhPk7Gqas94LeqrENnt49WYTWQoTMxo7xg7ZbZXP9VdS8koGx9xYjb4KBJMZjK8mr",
  "key35": "4d19XYwntAANdwuLpg9V4PoDbh37TnR5rrUQvpUk8wBTkgVjZ1KzffqhbnTDis6VuedDf4x9HHcotz76WUskGNDq",
  "key36": "2JkjJK3JoN9W3zhVzY3pAo3kUcdKWEEEZJVccCvHwS4CUq6aPiQN6osPctXcaVjd67sPzAvC4TvoYCdUgQYx2eMA",
  "key37": "QHanaJW8ubNG8E3gqEtyeph1x6mCMPmsiU1N1AdGJrVgmLdyqhkHS9sEe1VvP3SrT1TkyvFKV2n4rCwWwspFcWT",
  "key38": "2C1vrsDvNBoU9sr8E5N4z7UCwrpzcEK34V4j21zXYf9XzNNntGsm6hNg99LA9YsPbSzeKhPHFDap8VnHFFBaDQ8P",
  "key39": "5W1niFz1qUE6vXtSC5ZAewQ2yehAgi6QFS94fjkCZ98csaGietYUwe2QhNuZrmu6douEg6adjTAWe9xRgsHvmYT9",
  "key40": "4DEhe7ugbFfhiNos7PWjxiCVKZ9Q7jwJg9pCQBZwSJwCdjmNPvpktLG1dtHM2AiZS9hKUyH2nvNXfNjP7mHTd44Q",
  "key41": "5UxPU9hSad5YbjcfnZHBXQnq2xpD6ZoeBxB1Dnc92Ppa8mABTQ1hWaabtLh6Jai95z9s1Lzj8XMUEqPCUkNwzQzm",
  "key42": "54QdNzqbWrP6qvEnoFoa1eQ6CoNKNA7ZDmkbFzT4deuNPvUBTLcC1zAthkau3NVQDHoVc5rhVGHTtrR9fPn9Kgn8",
  "key43": "2TLeLU4etxEnrgQVpRXC7deZMHYCrQgQDwEw6FnbwA1grwGpAScoERCsMYajx7EjvgXhghmmCCeupHgHdBhwthxM",
  "key44": "2TF5zH1rA2DjQ77gXpDuWGZx3nvFe19wSVYDoEnQdn9RXBqfgDrBWQpnSFDErcNm6iCrmeLSgBDV7SMF1CUie8cf",
  "key45": "3i4Hqt4WicaFWtbZhNpDmyHzzFF5kqhWmTF6cgoFh3GEXsHLaiL1sfHa34imCcngdJMwoGpbWfZWbtTN2uBaPdML"
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
