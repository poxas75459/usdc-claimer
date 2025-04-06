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
    "4nn7gptn3TCDsGTyGRaBAEjosuXi9ytWAfBfQsjWGqCJQEwW6yud1fAQadGCDYsFZLkV8z22Vw3hw3z3TfEtpd69"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RY2bjJFMyMHjSc983tU4jxvLVdGnEszfxQDc8gsrmxNzAENX9iLoPvNPspvUHMXEyJXap7Re3ShtQ7g82yV3PDj",
  "key1": "sHEbQvnX8pQLg4jrWarB8yQnxyxxFrvQkWo8svnZpSk7TK977XxrEamktk11HjiebvyXftN9jvJX3gbSeMmvJna",
  "key2": "w2rzj7ypxiLKnzs2pYb3CVsLnkjmT1Po3guf1Ekg65aXTcqFHFSD2eu5rhBd3hhTorhgsutNtDHFYFPYQ5NysD8",
  "key3": "4AKBauVrfoMXfsQwXkMT7N4ewZBNLLLT8sGGVGtdZc79EVq9e5zJybzLMqWHnydJj25e6L6fSm9bVZUkxMzcxzCJ",
  "key4": "2h96nEm9baKc8gLWt3TDRsPwZi2EBUy6JRe6UaaLeQ5hoUF4zfoSrXYQPG1dKkhTXo6VgpKqrLnV1Ny7vVipczSF",
  "key5": "4DSWRXkwW8vV9AkzkAqRBCa3GEMsRuTeZtyYNH7VFdUBZK7isPVwWJbVqoqN6ZaF3oQNLp2rHcNrjGpWj7762tkh",
  "key6": "5VJKRfj5dGEnYyVRqpqFpxsguQrMmaMv6S7RsDzs6rYyrutS84rBKer7AybVPZXDZtN7Wi1PZYQd7kG6YRgCEaR4",
  "key7": "2jndgR73iZbNneue2wZj1HGDFRz9CyvKG7HkL848tPXwk7dkYmH5kKEmGXTeyHhirkL8vejDdPrxy4GAzdiDA5yc",
  "key8": "5XbjdBRwLeCtNMtZfMfycgH1Vy4MvLdDArn65ifuso87xx4P6EohhvtxUgDHuGvnTq3SKyBcC8TZEbcXc9k4WWvH",
  "key9": "4La1Hq7QkkMVHW8XUa6nS9JpFWUVrsZi6Cc6zbnkBuWwPFCiant5hp6EnjRkm9JLTz7qxt36XF8VtsJ25rkRXHf3",
  "key10": "2pDi8EjnowKVgMa472x6kYmAgAKoQBCAnCrrWxUxYrh1Gq8EKKgsxrhj59guaFh8L5ZiBHuKuDt28kBnszSfprvo",
  "key11": "iwptDkzokD72kKG319JYUUHMyM3PkRkYR2Pkze7pk4uHkdbu6CGUqCtPTDZQUnEzNMw8bNcTqs8k2dPwQZg66MC",
  "key12": "3AYpWuCdZEY4SBkU3E5r389cGDjvWpXyHxwhsKo6fbzL9kNCoNJKgB4xo6UFrLc2DaqumExvzvRLySVeL58w85wL",
  "key13": "3dJcmcbDLR2wovygRvAn79QrnDCNtLUeaitwS1iTd9s3ZTijiEPnoANDcNNj6oaAv6pxPjbjVxgUiHDdWFkyH279",
  "key14": "qEHXy9VWL7UkxKSAu37nhdYEBJGxHttzpmKRaQRABqNSSuyQUaz18aScmshHEWRq7yMFas2JcndxvMA3DvDWgMz",
  "key15": "8UwGrfpRFenrqf8ZoNdJWMTijh6oxyL5HCZAvPcXWefuN1vWYppsc7if2gy5DcryV3KJq6Ugzrk4Qr8RRPSPuum",
  "key16": "2r6dpbK2zC6fyGXZT6Z8v2wPhqr2uoAnbfmDFZhSjTsdqAskvHt25ZVPJWS7jccaEMzKU4PE1SkbQkui7f1oWgQZ",
  "key17": "59ChGmA6JQUuqhfFJoNWvy8jfUj1SwAmefuryZC6z8hacnkCwDgAe15sCHWyEP1edfoZF2kw49gmJK4RbhZhbud2",
  "key18": "2qQXUdu57ncLrFFjbUeFws9PAXNd2RpdHiKHToheNjygk4fm46Hdz9LscbcGmKjJzGK4SxLRTUFr8hjGUJPJUdbn",
  "key19": "5gdxx1umCtBt2qu1MY3Vwm1FXEguoh5sgkpMmymLcHSjeNcNh8RoSN7RgYok1TeiDNPtkcxokzFBxroWYrJPWaup",
  "key20": "3FC6Qn1BATbwfjNfRQWDBYDRMTdQReDSubSm9Pgm8cMuz5syipYiK7ReqNWBtLRACn9zntpw3Da87M8NRqaCcjYH",
  "key21": "41sLWJi7KbraA7iYUoz5RzqXCDsVdBKFQQmqGGnXHz3SPm9QBcvZQf7iTSz7NkTKqwkT1U1qBZVqHEadn6eSNyUm",
  "key22": "5kTvqXVfG6N91p2jUvStNBVR4DgkDedzJcUwTyomK1fcBMrQcg7aTyVGJ2Eiza4ABPuU1TjUmaj7entz2Tevpv56",
  "key23": "496bgezGa7TpFLygqxowNyhuqWgeGxyGkT6x62WnARyk6erApNkfkaQCDfPg4NhXM5Fc4fnLsvy6Ka43ggt3gzAa",
  "key24": "3j2tCGqmoggp1539uMxmLz2juAy9FQDPmTBBCvADSdA6SBe2Wbuxad83BBYhwS1Ec7SRbSVHky3dsbDfDqUyeXSY",
  "key25": "975h8NnH5xSXhxYdWkztvMwj9ZhybhiuK8wZ545BoWbP1sejfKfkzmmLiU3miVG76KKf7GiSUbtBwJt15dnTTQP",
  "key26": "3Ldtohasbeqw1fEGRqYNwyv1cyfQEiZerCFCXatMC96MVfAPpCuaUH1bo7jFUBU83BpcMi92MLSRceKFQbVpPDnu",
  "key27": "4UxQSQWy9oV2whVdKvhHSqADsRQ7PHtp8bUV7JZ7dbemr7dsTbo3S59iUjebRWLYvsmJcdZixqmCHwQsU9bLFJZR",
  "key28": "2iwkyLem64wNAAV77UDZ1nA4nbj3Jb5UpQ71yWnT2Zaf4CEnkyScD7zxNSxzCUvpwtyffxrwWo1JaubkRkLdje2i",
  "key29": "A2vYPJ8EifqnSTs2gJsdvFMPQTgQ6hY8EQZ9chTdS638GMxWdWeFD3As4ARpyBYXNHN5EnLqM1XjsHwKW6BSLEF",
  "key30": "5sopcfzraQnVuxiuM4r7r3V6wKHzNXRT5TASev95SWwuUcHtYvKkvnpLA3wqoVjpPfdL9ivtmd3xBQkcraXLKKeU",
  "key31": "3UXvEZYVRm6LP3FKnTedDvG8xRz1WhiVutM1dFi91g7o1suNybqRDsDUFqE2XQzSHmNyrFzemZ9d8iLMwt4AjEF6",
  "key32": "zRv8FzERuvC5tQrwxsSY7RFMCekw1evgTKAHAACYb9416pu8sGkzpajafGagrfL8AN44U6BPAb3Uuv9bQeHAGg1",
  "key33": "21m3hg4mBv4hrniSzoLvbuGLStQrPQobgoW7eu4vt5fXPyDmAYFmgg7ibu1puesspqT7yQKxWkXNHet56MLK94cu",
  "key34": "3XeswceGnkWSBDzh7285RpuQ5LZpmMvkiT5nXR6bLJsuy46p7nJbYwzqqeCBqDJdVWgxRqodGenuaKsAWd7JjuA2",
  "key35": "2U5LJ7VHdAW1ib4KGwA3fCQh9CGFPsGfRZtD53NfbwZRYwwFCJZky2FeDPoS7sptqwks8r3gvna3aDEVF6g1bqHz",
  "key36": "VcEtgANkiVFswu7m92L3J7P2jWfKDTQhGmq8Jbk9kSKxtCiHoaBxuU1hfLtmtqaVUNCyg5eZnsfmrq5fkqFA7qU",
  "key37": "21be639GBrsJ2r4fF7i5HH26Kh1VBCxxau2EfuA6c7Cyqku2b26jfNqLRNRmPpXSudFxbabjnyFQmk8dz9xmsRJP",
  "key38": "2hTMELYZE8LD3B2x8xZRy2TwwwjZWzngx7P8pjuax3qVTutC6YKs3xwexgifxJjVzbXbtwuF2GBFVCXrYtiGaM5z",
  "key39": "4sNpHgjzsnVgGYypVH4vSwBZDwYPeCsWLHVXGFfqWhhg85NXH3cMmuir54LiRrXYiJLrDPf5RPtbXLjGpt3kVFf9",
  "key40": "4SMB3yPHKoQgUnqWpuVQ5RfKXsSEcHWXDUYsSpMQTHS6nj5S9cbudvNm3wc1nqnTLaJkYPk2w732wpkturfcCXr",
  "key41": "5kAzY2hpuEr5C9QsuVVEwfrt9UEfpbYkMuv5TytXbvo6K9fPLMEtDfu5ujy6mjw2NL61iHAgkRjq1JKeQ5qM545W",
  "key42": "4s4NtYq1uaEgCydYrgSiQHQABisF9xpYnCqPmTdzgaXYodgYdu2xFCFgRPhFbHay9zTMQHnmDbKrt7X2JAVUijTi"
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
