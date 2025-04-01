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
    "8MJrbxP4G26fppayWzu5gV6hE28UwdA8ZZT2LzuJnUJDSEWLR5bfZ1ViLxvikeEYe8F8rYkoyEbJsBrG1Xw6EFg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p1UCTi7FT2SUKQBNPadPy2G4SW2oxtVh5usUd5i1ueU6CJ5Fo4nCGBsqxtTnSn4s7f6UNSh6AUbj8GzDnagkdDb",
  "key1": "48F3dm6F1r1xLv5Mj4ouuMKmgwPQGF8LZi8czQdU7FZXgmViuywQeDuBUqR1VKQhWcga5KuWux3nSGw6EDPvE5nA",
  "key2": "Dt43wJtqJ7Kk2zz5KHpScHsiDKd7Wn3GU1oVxbft6hVrwV4djUrWyQBXuFRYGaz16wEU9qzExks8h99tW8YDTZQ",
  "key3": "3Ai6MNDhq4sBM4iAb69QTySSgEGcprEZg9s3T33BHC5uB15qwQ7YbRk7c98jLY2iow7zaafi1Ts47XShXhvfYf51",
  "key4": "29cEqenhuJUv5gmXhHdcrPRBuwpt1P7v65g9H8htNt7uwyvScJ2YoTCsBjjGo2stmmhUBJKKhrjDSnqExfQH4wZ3",
  "key5": "5ryzaUrNZgUNUqK7CY8XGWraorznBuifCuiFudHVnbrJAs88bwFeET8meGDFKwdshsFcsfiKXrp88aRnqq92rGuC",
  "key6": "4UQ1SooJKS5mVod5x9fAqEJggcsJGCq9L1gkkF5UpZZpj91BhSBp4n1oP9fdEJFRdn6NWS5ERAkALMSDzmPyo5qr",
  "key7": "5XkPAwn67oPhsvthuQciHbXgBC66g9Hi7s4y88aTd4famMWTzkkB3gkn3iC626349cqyuvYJ3xGbPUEbT1TbvSkG",
  "key8": "5mvBuwPnLdPjy2nMj6qxo3RYix9kNGZwJTMT4oM9wtRESxMcK68CME4ZMpjW6FCFNjhhd1uoRHEmnt4rxkLkJ5B9",
  "key9": "5SFh9RrUngZBoJEBvKVzTca5kdEuQZrJjW3pxhnQxo4DLMdgYRhgmtwuNUCSQBnpSwd8hxvA3CNMmZTKDNLU8Qps",
  "key10": "3L9y8CjFopMSFiBYhCFoSqDis5rMPH9eQQU4FVBBNBHH8kBBAecjHunkeDFB3qWoH2eMajdtiN5LhFzAF8RCxFUL",
  "key11": "3tKC1CLUm77r2JzwdU7bwkj9DKAeTMDJTWFEMAd9SfdrfeQnnv4N5Nx7FBRze9uL73hm4VdQyxF5NLAEMDvgn3mF",
  "key12": "5XU679ftfiJZVW2Xe9gLPqDrBDZDjzjemXy5XQWJ78chEyJRYnBsHijspTHtg2mpbjjs8qZU9B1MELbS6hLN9fkD",
  "key13": "3ZtC5MxpN8m2z8KRTUudTEq4fhmk7tPmoYqptz12YfWzTBs49pqQjztULLpFzjbEH9qRTeg6Mg4wAc8FT7jD3Hwq",
  "key14": "9cRYBYXCwLSfx9KiegdWuiNutq52vbFcrqeN3GT6EUo5pMEeQwxBbJ3fvWUgRCtU7TGzg4EdCrDpsn6d2cZUTzR",
  "key15": "3NpYhorf6FRw45SphZckTHU3Q5MCxDcpR3DjDFfJ8Mjxcz6ZDbdzoUqD5cjqt9QHiXY1HkD51aTDrydKnq4Le33k",
  "key16": "3oUrSSWrrqFW4FonLKUsrdx9iztZtUfKVH8N8scn5e7EJwdDMf3fvpr7HQWpxSThQfHWXZsX1bvJVNEvG7k6mfGy",
  "key17": "5Xsi3g5w7fiFAjDpDjBw5nUUZYnj8MhDkt5BzKbjyAMNyW7A3WNaGCkGX9w79H2TbbzndwA8W2uWRSsQgDkhzGsi",
  "key18": "3dqeHCxwytn1aKdx8GzqVbuf1o2kg5t9anzBQs1oTGXcruLn4ThD1rDysQFe4HmGWdFvKTzTidXcFgXLTZa4bq5q",
  "key19": "421H3VeSw2EWNJn4FupDVezrmYTuN2v3Kjd5XEGciUpZqPbXgcZEeTDi3s6XBobU5XBCY6SM1j31eB827V18Bhrd",
  "key20": "5G2gke4YCu8BZzVFezvWwQc81kWsnWxoY7DH4zwwsu76xUHxLNPJ4Pt7L1jpxDiDDCwdVhfTYgj3SsdAy8nptZAy",
  "key21": "Dpd1hjqAM1X9Rzni8gMAmCodPdDcQNtQe9ozfvVNUfatQK2mwpoFB1BodxQtZPuRZpKaKDXPnzYMLbjkKsnUSgM",
  "key22": "5ikqSSRkK5Uvuk4o5zgDf14mt1oDBdHSf6eWQoowkrfuaqJpbeV5riF4kko3CcrTespxFp31LirfdDkkYCWaLCtW",
  "key23": "22sGHftxjorT6qMxtZtkYi9NoDUqj4HKLynS7RxtTusY8RdQLCW6j4WMrxDwEc2NDNP8xEN4MUCmE7hdWwUaMzax",
  "key24": "M4HvCsZCW41LpxoDAJzzT22Vzecej77c1VN1w7fvo4Gar8ZZ2GtyLnF3kFxHBfp3Yh2qtmb58Mi7ZqWJd5XtMiw",
  "key25": "5hc5VzjBnpaCR2jejBjt2p5X8qCtFb1hPYU6pbCVZAoakC5Cc3gKWdJFkh5REnBkUEKwj6pF4ig3nyh7Bj96PEHb",
  "key26": "2rfXaAibyLyyYfUtwQchYCpvFqiGi3K3fCntWnR1LsGh1LdboeWGRG9Yf3aNTGohvASwRsP6xBMxo5LKjaiM7Vce",
  "key27": "5EvZNhHaNa6runoJ4ZKpxEin9dxbC1Dh8RPz2NU4jvntLgHHLWR31zZ99gMSV2gtBe4jBGPiW1Y5nUu38sknof3E",
  "key28": "y3qj5THeNpUtDE9rmjYHfVF1ZESCjxHgabDPXJDgRoNesCZZrwKkJJfzdgq2LTyi6FaUSFiava4xCfx3SReqdTJ",
  "key29": "5zmujJzwtjNzNAHL6zvh324KzAYTBW6q4PugmQHknVqDTB7vutUaimcenpSajHqNJNZq34WGC2uSjqejUp72RpdC",
  "key30": "2qf8EzU2MeT1H2XNWg7XYR88Xngbo28UPQ3iEZeHxedQYXawVsJ88i4GXZJx9FYN79YYyYnBFvD6uxcrJ9EHL7ZJ",
  "key31": "2hvmd8M3hvHRAddYJZF3PD2kGUC9pWbRGFmuuiAWb9tkFNx797XkBHHdzR9mEveKddGpqtrUhqhm5XSG9nNZ8aXK",
  "key32": "4AGCM275KaA1JxZh2qfJCGFwPGe13aTFMUU5jcm87uWwAKcknd7TJyyzcjDR2jCZvERRLEFJRGzpedMQemqLp49B",
  "key33": "iEJyF2fjU14nA1mTVUdmxuXGk284s3yJoBn6MQYcX7mvzwnhRwd3dPYbo3sAp6Wany8e5gp1Me9ChzpG5wK4tYG",
  "key34": "5HUNAoRyLdNr7jVgdXwMUB5uE3kwKSkH9i9a9Yfyp1wBqHgPhWJtjriaagVhFS5UUH7oLfnBEmrdj85CWirUd1Cz",
  "key35": "4wyhcy3ZzxYJCxJmMRTk9dM2cVhgRa2dwoiNBGbNYuaxYP9c1mBEmjRipHEbaNQhhMFXSUJN1fVBJ3YopfVWgh7e",
  "key36": "5RKLoWUisPrXdqf3wEqsVeY63JB5W1weWMMhbedb1N2bfRcbWcHkseYTjwaJ6YXKrfTi4coJANqNXBudEti8Wre4",
  "key37": "5KktJnLCWpesizrwF8UFL15LEr61x9stD7mMYJ5z1M2zNb5wfzvyiUBWavwzCXqkfZY9DNGfkd5okcVs4hQbuH7j",
  "key38": "5S5HMKmWU2aQhPTEJrqosX6CF11jV5iR7mxnRkUnVGPFAU4YLnniSwTYcJ6L4hVPm9LFnVJNXynsGdFTK8tzN83t",
  "key39": "3vVeyLFLzYmw6Agac8LvrfmXWPmjyqmNh6VLGZwMxN9A2ogje5foigKfxB7QNqzxnikn6QMpeVA1tTH8wGZZL2ux",
  "key40": "5QUuM1VTwvxTKG2geYWXvcP3umguySzaVuaXFobHsKEKegq9VEdocnv2rN2HsuuYnCge7b7Vf4zQjS5LrBNXdea4",
  "key41": "21hxXrVkfS6Cm9f1h7c7zSfcvVaUvK1gZHEXzJoomwLGo3MqBgPwZFN1QMWk5dBDqTLdg9Bbo1ium73jp5UTg6w2",
  "key42": "2CSWz8cZvBdd16egZAaPPgWSHMumzNpfmevbSpKoWnrchXLAyRfZCNhfYkbsoxBKD9DF9p3aTgVkui86Y2aByexk",
  "key43": "tM4TUhm2RLYyMZSv6yvedmuUH5jCzmtaf2D9X64AS6tSzPrNu4UwPscyJCrKyeQSiydHJZ1LC4bWTAw9w7thSnU",
  "key44": "2EvFEncRnuDdt6MQvnKM4DozNyixYoLK1zxWzxfY55hjAMgHm27LZk3T7YwpbK5mKgmGLc2d41MPsZDgkYy41Egc",
  "key45": "JrXh6LpAH2aZxVzsNsaDsm1dx4BCCajikWCDkhYcegx2iP84qTYwbZVfZdJoupsuUyCRePBXTmp1voTn8Afc8Ls",
  "key46": "3pkjpGh8MVv5zbjbShDb2qyuaR2LFSQ8PVGkh4Bq6pgQFT2v7L2prSh7d59zpw4j7j7sJ4V9ErdbWx6t7PAoQbVY"
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
