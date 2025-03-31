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
    "5D5oWXKDieL15uQqtC1xMawhUg8UiqaxztTgqheT5WvFjyJaTR34X9mcTfDi4WBemPvL7rZvy9tszKUrkNSZkrG3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tGazB2pBDvyqKZyTKByAHeJrrWCCNoM24V9B6TnYzMP83shDAwVVQ2XaqGCACymAK8nqBWyDmoRcMaLwhpyL3RR",
  "key1": "5UXrSZKvYuJhUE73HKyS6sL4q2etVBd65H77Vx1Jn751vB12M5r7Uky9PGXRkVP53QxRTYW2jv57gaRnV2YbHVbb",
  "key2": "4uYkPxJFEkY8ehjci4Rmw7nqD6qPa6vH3GJCiYGR8vQ6CtLyE5j8mYKZeweHEJGnu21NRA8KJwgpCxeR4xRrN7QH",
  "key3": "41GyJUS9fqTcPCivH4QfhXYBETcdpPHn7fH3Apv8qkuB9ra9xzh7a5hcrfNRusn9qEautPSjtHixiaTxo6CckuV1",
  "key4": "3rUfM8N9ScRWHxbALGnnRMSEPM1VoLEMuFbXy65x2CHfwXnj4xdTPSCXC6qfTEnK9aFXzTKkuT4f52jTu8AMPfpw",
  "key5": "24P1dkV7cPZQ2y2LoAV93dSd6ZWagS4bXUfxLmpbFeXngwSLmCYA612aD2yeT8n9JS9s63uTnPJqJWBr3BsSfGUY",
  "key6": "3uL8ga3HNb3Lvp4qBJzp4WFM8NrJt3mtZ5mLwgsn3s91UMcsQi12zD9n2c6UUqgUhJ6nN8VqWoc5CH8ccd59BAjJ",
  "key7": "EwkQaz2Pm9CYuErnD1PqVLH4Ngu1tV5Le354KyR69ibYqpKqbtunz7PD2d6xk93iwUvkMyev1qKk292Xn8iHD22",
  "key8": "4rJfA1VFyhXfqyJcvMjK8tMWnGkfxeyVqGG6qduWRcx8qELvd767kFH1M8p6aRsfPbR1cJ8YgHQ2t29NW3vTYPT7",
  "key9": "4LkebXKcA7xSFsWejNZFxsZXsaf5J1dNs69xqjrLht13MY5McADRxbuKQd2bhyXqKgUUKyZoLzse5QLDDtiy7sMf",
  "key10": "4m4DuvdamYW6mphDbqPXMyL3SnfsNSMmtuCK8xiZDKDWkefm4gog473Lj6Fpn52viegf1pbQ2rHYBZ3oiicutHn9",
  "key11": "2mLzb1ywvrMv1uf2i3gNgNmQo9uckL2qE7GfT8LzZdmu18qCxGNTjHWm6XYnChggrvEG9R7uu9ahRQzFbaDyVLeM",
  "key12": "4TxdRUBqvykHiFYf18YtJAHA8xZLC8QXHbCrWDgeAUK6PP7YcKvMkvDfgMJRTfz55kUfuSuj9dyhoK9J26L5CH9a",
  "key13": "5CVrQ4AhzaXyEx23Hd3aASb4yMFZhMXKGA5w25hG53c3D5b1EHTevhaRGVkv1PdZpFXcXJAGnBFKn1dVUwnwFWa6",
  "key14": "3KPUeHqFM1PzdckdH2jC1qmLJHE9x5tgZBk8cgSNcegBv2xbXseLUVFyHYYrE481H9sxEbom44viuYnBYajqcT8t",
  "key15": "44Xc64dTnBVzwrfh1UK8GftieSKhxBkfpCqTYV7QMA9CcDJzj6poX17SN6paB535MyQ9jASQeVMeZNw3tDcwQVYD",
  "key16": "2QGgMzDgUW3SwV2xfaYZFS73v1ao1iwQAf9VYhaeSx94DazXYAYiGBwHsDzTbkkj15GPUBFYdd1HvyxFrXi17nft",
  "key17": "2i5jAu1dEe9QRQMqnYmTTGT5DJYhFpyHPrSp59J8N1jKj6VcajwE3c68hBv55hVyPg61EzVd9HFo65iZWiat718m",
  "key18": "rx5GWxFcCeXTHhhqVSauWY3Kh8FC27surXngFXQtvyiig1TeMBCm3bBQfCCvowxRBLr92aVgYW54f5HmksrptyT",
  "key19": "B9hYnmLbywmyEegCLSU8BKbeyJ1Sy7B3Tx2LgwACmhRuuQFovTNgkDcxbNjXvPBahDTvKAzH1mJSVg4JTGAiE1E",
  "key20": "3k5uBEonSVeFpHusb32upHgjrnFrdFWvpgVaLvqk4sVecMsWx9YFHEVBMKGbbcpiK1EPjkih91ez3Aq11mNUZ3Dt",
  "key21": "3Sf1VD4M1SWqpmZJ2RUkHuKxCYkrmxkFtivTGbW5EXiL6bbdfCdXZKvAtxVAaHbWU2q8ZACJovedVdrvqDfSQfEs",
  "key22": "2a4Ru2W2XmAbEacQZpCZWHabdVGwkbr8MLAT1882hAYjrWBwJPaskaHZK6rvvSmN5rYvssUtxxadnA41BGspduH2",
  "key23": "5LfgMBZ76JgqpJzmDYiYjDqc3vDaADeoGDm5sywKh3Qn9nWXJceG7Ncv8g7uZ9YrHMWcGTUpLxiqsNwJNzt2zTmt",
  "key24": "GZHwUdi1EpMgMa4arp2ok13oxTBaaEpVg8ZBe1CodV3PxMnkRRSt2A1rHKZdAALJGmzYL8SGhbEA8D1rP3HYfov",
  "key25": "4DNYRtPSybB4d8eakRyuRG2XTDsm9qpnFJfsAuDQWneorCgVQ3gkPfG2JZnfmGjwqUa9iy9UUHvH29ECRxxbvtSz",
  "key26": "54EQenTHgKeV727oQCWKEuNu1QvuAxg78NJX4eMDyrtYY4JhsAmjKw9edhTYp5djiMyUWvxcKT2mALYgS16nsj6u",
  "key27": "2hsfVJ9ht888FdBtZ7WUWEoDbnUq7dZcW9w9RUJheK9tZUHo6pcv8LzwzBwHz1KLVqKdwAVvD7iAhVZHccERLEpQ",
  "key28": "2W7nenUSsRJt7fR3hvYtA6oJmeW6ySZq2hKBUzJ6QeLpTpnysEdUDvmM5AMBBP8x8jvCcxDYM3yMwJMRuhV3RpUH",
  "key29": "4xBBZ6oDGuMrPmWBC3NREWZveRqWvSTgi1iKJzmJjmxmU5iWyCMnUat2XCGuF66RWfUFcEUUFoxThBdhw6JqV734",
  "key30": "3X3jrDRF7ogRubGHWLEB4FRpfjdt9ezKqrZ2oChfS9czJLjPGRrYzvykjMVfPZdsZJnRdeELeN3T86JpAcM619bk",
  "key31": "4fQzE82r5XwKgM3Lo4TZHHieVh4Aka6N7kLz8jUJATvezD32VxvGdvUW8FhBDkg1qQbLCPFLptMSuY7WZoXhniyA",
  "key32": "YjnJcxGm61TUTFEy98riXC1a8eRmQvtTPw8XiaiARgS8VS1ub7ujnG5ZuqTgQpjMP2hwMrS2W8oufJhACz4h7yf",
  "key33": "2MzDh4FkHWr2cGVHbH7p3pcnQFzrUG1GhuXAvUPwk2PWenkjq9DSYRPAX2tC4J7neTscNXgLqEbuRTa7PCHjjySp",
  "key34": "d1HdiXW8iHAiuJSDEUyna7fkA1nrurZdvTBj4n2UhAwdbJNg258EvoP2EC8Um8DuXhGnWXodSaqjvZnF3vYUMVL",
  "key35": "2n7Axk1j9iAgQ3x4vQeseu4WQFKFUmaWxKFLTdboDPtLovpM4ePQfJ4WtqzhdSaVeqzEXt1G7mrgAeNPRb9ESbZ9",
  "key36": "3npEuurVuEpkGGBYzkUGfmr7sBRk8kJmtGoSdyrPzQAUMWVqq1mUBLucnLkGFuzHkan4FcEoYi3UN5fdUotmjv3L",
  "key37": "7Lic3hy9nCZ6nfipUdhfbgH4dw2Tc3mh4tPZsTzsHvrL2JvWW8Vw4D4AGYNxR5qmCMaSEPj5KRGrgNv4k1rhNX3",
  "key38": "26mDNxhjz8feN5366eDmRmm5VPBoX5my8cTGTMB4D3eGEYEVBBw36nBpaDoKJ3sb9do2sm4vvSqJHNuAFJgbgZWM",
  "key39": "4pDRRyRoTSQ7z2GpPRhjGuUk3TXMcQXtE1sNFw4LwDzMmcqcYA1tAjsZ8CpsqLUyMYTfqw1rHsNjjiP1K6i2SvWr",
  "key40": "28ocoUYYH3t1suWjhCBks5qdgWnHq42CyysHTRR6EP11uuLM4AkEMEm5bPpqCE1zm2pAPFGAS7gAMBHiieK1SyEw",
  "key41": "5ZwCj6M9kubnBfHVrczgem9UmestnZBF5s3yFuxzg877Ak19oBKguVn5DapNtvL4GPwQRS7fwYVse8NxENK35iVT",
  "key42": "2VurJsG8dZqDQWQHUj8o7QeA6yBetUGKYWAsybuHcHsjQx4B9NAKpTvG852FdCDa3V82U9cr59QNJHZYWgzjr869",
  "key43": "2sJwfwNL3CcxwLzPhJp5c3SAdDypcxC7GawwszDsnDnWGenoLqExdKj1DTDEYwm9twdCvHcv5nZKKhGY4cTuUSrr",
  "key44": "3pDzsu6nJ5c1UmNQceeddbvxHDPCZsdaKHBEVNyoehCCM4nipypXo57c6XQwkQ9Mjmmc8fNUqiyNRYBL5V8gwpbn",
  "key45": "3vGHXokDGku3oXdtnnWnnE23rxaT7AbSEoGMsTpqiizaQitoh7yNWeFCzSv4kkx9Sy8u4Z4ezbQjnfAgPGLwUmA7"
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
