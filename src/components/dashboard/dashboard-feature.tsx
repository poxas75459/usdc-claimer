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
    "Q62upBq1BEanAwH4v9MM2LP4b5yv3JsvWixS8GKcKwqyFHzimL2pPpLomvNZkU3HmSWkM3e47utnFqujrNgNQED"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TYN3L1tMoY8tSJRTiW9j8hghBQfYm2mkaa5gvnowGSTQJDVeqkDNCKeF6yn4h4GiBXNNrL1LBxEx3r2PGVDavRx",
  "key1": "2zeZT3BLTwjtrdE6qtnmz36MFxScABuopuVGSeV9g3q7F2UZiXBf9UzHtci6rGn6WpZ8aDaFhRAyFfCxwC751kX5",
  "key2": "2BUg278kcK5EP1aQNAMNAnLcjJu57V1AP8eird52caNzVJCh1zgPj7BSGo2v6J26fGVpawufWwfSawHMsjCpkDQT",
  "key3": "iB8FuS2uuNJVDZcfm6pPvEkB1zTYvSsnGngVkYZeBACREpp8o8wkvXQNdtaGF4AuuyVtYkxwnAcuBWeJHfY9FBx",
  "key4": "4NMyFkqLqqA1PG6c2aY4K6A4oCavwVt72rLosYNKXJYbBWQuDUEdUmbWtLoos9a61QpWTjgP2V3HVvU27XwwPCR3",
  "key5": "5W5TZjxXDjJR93kkxqcAVCGPEJn7xJJdNu9NnGR9FodTTx61Tbda5wTEDizwTb9RGnpJ7mgwpCfme6ExnViGt1Ud",
  "key6": "3n2jAtLfLEqJ8TLeJzsZDY69n7RyeWDmKzihfw4qVAwsDxvvkKX2pYZ16QZdjLiMnCrAsi3kPetogv4JjDQzowWR",
  "key7": "2S9S3Mr8Z3bCyAGdQrSbjJMmB9Lctn7pdo6hR1cE3uFb5T2eQn8ksvN4YVfo84f8K429vJHVknyThdzRjkyyZUAJ",
  "key8": "378KSnR2MN4qunK6mED2kUVjzsE2kQA6rQAZ576Bhh2quXNZa6GTSmKjMy8Ui1HyrwwXaqh5NqUbn2HpHkMeWxMz",
  "key9": "66vWF6DFic6eFjVoQZAXciMfxjvrgXpDjUovLqsnks922RCu3WfKbiSZ4WbJbbjbVV8dK9tAUQ8J8RqRzTY9Ka8X",
  "key10": "4EvK7Wa9oDQbW1B75CQpySAmENxgQ4afL3Dt2mnuF93Mc4nTEQJhcaFNcgoB4vd3VxfV846nuySc3wJu6YzjgZcZ",
  "key11": "8NJWcdmrWrcgjeZTmrADxf73axVkooEhFBKWXkxahxQ8HS2iwTjmwp1WDCLAGHmSwTE9bwcw1ayLg9fwPxd9JjL",
  "key12": "3rhmS1vfXe2K8MrJwsZRmmuWnvpXPpXttfV2WtiFdsMmpQYG3DeZjUeRSJpnssySpbkro2LSb7zNoParKiogh9JG",
  "key13": "55EtDU534bpo63kWdAAJ4jGpjkoPAhGDFkK3qBJRVdAeHGbtUh1trxxs7HxUaHh23jwzfcq3ooniseKpw55ZtZgq",
  "key14": "2gvXRJMmK2zgcxnXcczUc88svH2tVJADSwVtPKsPKbcFKnGFazMDsc1naitVFcvDJN7zWe9eXqz2LMjXuFPvNXXJ",
  "key15": "2WFTtcH688MDvHiVXNTpQU7mza3LC6F41chyEu633yMbXbq5VskioGU9hqNMKaWpbC91r2voK379BMW3bwMqrtJZ",
  "key16": "3jrL7G9XkDrk4YW3D9GgNZEZYGtb5t5CbfvJdcuC1TgudRezLMbgga12eYweb7xGtcE2zPJr5S3AZw65JM8aSHDg",
  "key17": "2HJf7Vfm5oJg82gfrTANEhmYczB9Zc5YT6R7mREhTaFfyCBHWB8KoRX5RB7R5p34cFrprrWW88xYG1F1eJhC9ME9",
  "key18": "5gdV7QyHaeH8SvT88jDfLx83pkN2KfxA7TrmZwu3SYhW4RuarAUBCt3Xj4Bq8eFoe9TDfL7QJrvPYiypEg2KHekX",
  "key19": "dqnf9dByNKPPHyRLYcjgWvRHBg5RijbgooNbu2sGd2pno3y2UVDrdiktjh5pZdfG9GhBMQrN2eHU44qfUu5QmAn",
  "key20": "2Q8uaPezHUH77ss2VTXmxmczmHjJGHQEQrFZZMBHKRwyp1svCX2UqaJ6NUxtuQLqvM4CkT4mWGD4givWVoY7t7uS",
  "key21": "3VfGwmV9TLVJJbb395QvTDYmeozF4JKaL79ABETPciBZAXuWV3EbTHwQSUfYCu5fxi1EvXqiuAjXzgo3XXE282AM",
  "key22": "2pjcUApv3A7sqAbiQPVyTnxVEHQiRSaWKUG8oTMp5nzPRQtem6JcWNdAGCE279Ayp9AE5smxXX8D8Q7E3yAhQBxU",
  "key23": "3XNLa221f5pFVUwfmJqWHDv3gJpUm4MMrQqhQj4ftAjLBXb12xd9eg8h2Sv6xsoH5HdGbuoHYgaSFiHAQeYSLMys",
  "key24": "5jW75FMFTNc96URMVNBTARg11xd2PdPXb5RU6qtadtV3cF1pWgiZ4HnJRH9zMSRG89gGUUaJbzZy5ftEPimU8wPy",
  "key25": "5JKg4DgkVps6nfg3As5UcJLqLtajowStJ8adjRabe6XST4cJ9yRJwqy4jexemytE1qxf75xyf6cieS7brTcXXJsv",
  "key26": "5vNaQiEbGC4D79Rzjv27vHvQMgCvD1f64XgFCntW3eW158sX21tPXy2CuqNaga2m2JDb1wNXUiad92ntC784jHNd",
  "key27": "T1M4bE6fwX6u8waFMdhiEmwscb3XFMpQEyYpBGjYTZYzTkX2Bd2YSJbK2wxrGPhnAr84vzuwJ7NgUvzNXaQGkqh",
  "key28": "q39YdQ5eqt82UeAQNDUs8UBry6cjnz4BULXarxTKkMZwkMKtJGW9xfUbVUvyAHEfbvDJtL4g8gCqQAcgz2TKTGM",
  "key29": "42D5Jmn47Pr9Qoak9PdthFcEZUvD5AAG1kgq1w7Fw1vssALL6FpLxZF9p6x19PiBbwGKQPxsAYHAdQfYncBAZsgK",
  "key30": "3Q3unkzgGUr6TCoVu4W1VStMQZ4aTfjo3G2HKaxHAGCcjYGyTZvPpdRkw1i5mVhnG8xAJoFuizekbvEovrHGKdsi",
  "key31": "T8CU7Nwg6kiXo8FuLNCjQ4G3eLYMCFbPrNgoHkQiE817eHwBmuC8D9SWDdYCBnWv3cEaUrkxLxDQcHWP2aN7UZK",
  "key32": "5qWp5z6aqPKWeTDmfGzUiZJXa4X3dnjzqbqeuA1CSusZKw4jaeLiyWNjtgMZiYPwBeETr5SEhQQ9Hn6sd2AjY2aj",
  "key33": "279GMKigYZ7YypKmtKWpuygiWXW8L93KxDsWSy5cDE6H2uVsZHYBL9PM92reEoyFMZGqNz3jYXJmmVb81LsFm7V3",
  "key34": "4xqgJbYyntUPTE5Fk2CNZ5xWkAB7hocsEeByLiZbHouxG8j6iTA78uSjJPoBzei3fpD5nS5p9Ykzjc9ExewPvdHC",
  "key35": "Je6W9YWW5rnbd3Eot8WGoAKgVxmCCjiSrambTywAjf5KG9Bm6saH7bk8BLehku6vg2uS9f6xQdCFZsF23NRzErq",
  "key36": "WJvEZVJ119BoY8ZG2MiPjETGo8BQXsn4unNid65o837fhzfzWvHRurGD3XWCeqmnshL1BqqjKh2cLiY9XYESHXB",
  "key37": "uWVysAKATXtzyCFqKyFSWntnK6rtyKChi1hXQfEh3KRBNSnaNEoMdVXw9WuBnGvNf7U9idskYbtQBVoHrCHVVnV",
  "key38": "2fomE19t8xNMFVVEeMcaffFszyPihHr8KXqVqxLqp9jr35tYk4VpBXQBqEFdQQ74XLMnY9CrbaSnY7ctZGr55HYa",
  "key39": "2y1U5ssap85bJFvPqTcuGxPYYdcbMu5WM1N9NMAWkbkSZAQ7qNPcSLd2bLU7cuFFPGXNAnwczfY2hVV8YEP655yU",
  "key40": "5oB2EA4TbaaoDpsg7JePPK8HZuUg78eQKpSsWvKhLPgchdfhS68YmGVP82ihBuam7vhnK1USefmyJ6eNzbpp9Bm8",
  "key41": "4e1G6dzLEBdAPXxiY4g32UsWLcoHp7ve93ZjT1rZpNe2WtxhAoPCyfFWEjTuMzFLxPHKnEPyqk7RUieYUtLqLJCG",
  "key42": "xhfbJpmngFbRaHYPb936icfw5DnBfw4wvzWvt1ndn25Xjqqueebo6NnsnduHdp5qBBTNw4X9S2KVn4iqc23npXr"
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
