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
    "51vmrW5725FL4n6qQMGrPVMScxVFYoz2gLtubsuAEx9ojG2a41bfNutiYjTKDum3xpyryqhm7UHzwSZmQh2FyGga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uGvnCgai9V4pkk4VCuewokvkozzneA1aD11iNDcK9613PCf4oPBzFUcXEnis52aq3Q4woCE4ALbFtM8md7zQocz",
  "key1": "4hRm4t39y2WRuegw64dV9i4BKXEVwce898R1vCM17NcFtgnvE4bkuLXB6YrotWosL5vdpwPpZ4wWrnQN4jZvwhKu",
  "key2": "3tMXbW2dgrkECUnQHLCdWnx46svuHeH2mJac2R3b3LM7DJUHt2ta3rnnoVB7ueo8Wou2xvywTRCkagMiAtv2d2n2",
  "key3": "43QSs9nFNn65PLXzY4y7kAgGMmTEJXoUDnu4kcjDin599QBvLncWsNkMnm1z3D9C4x9nNQVD4ZH9tXkgoRqN5NrL",
  "key4": "3d9DF3KMRdD7uWrLrLKRmPkC6hTdcC6F43JjNkWxqKF8jnTATjkmXircxggoojZ4s66ycsY3fQTsS3iYM6yrZyTD",
  "key5": "AR7rMd6yF5yaLDRaCgZjZ9VUU3sKgnwzmvnCNzuormvQ5DiEvBcDDp3grto5NXAakGmVp5kZdKw1o41ukF3r2hw",
  "key6": "3C4LUytSNQRQD68Crji45XGaW3KGx9c1HT1kUU3KzrNmpSZCTLUkHz8e6dmNbCDswdVx4bq8V1bjBZtzGHi2gaC5",
  "key7": "5M15Zr8iK11Ywd4hCEcf56dYX78o6ikGAzJKM68Xk6tjf6Csra2Cf2hMPYAn9SP29rbGio2bvVL6ugT6HpmFeCzt",
  "key8": "5EjzxpgnzUc1wPezNHKY1Bk3EuczEdez54ChmoMhx1AJFX2EXMMqkuNpU81RSqHJXBr5Efc4WJhyWoCT1FaRZU8w",
  "key9": "5Yn2oJgx4bGAmAHAfstKuCXF4zepXQWv3byvyDZViYpYFNXFCPqUMt5jwVhrAtaYHiNa6veumtt2ziHLu3ofDyZh",
  "key10": "2qaZSYf2ZGpeV3gLrCD8PxKwBTxFVd1VWGt6N5po1i2DfWgKmvDu2HQabBahMPkCAoCewwwtPQcJsawLFSaGu2jx",
  "key11": "2HWkSLEacWPJfBtmYtewwi3kLggKYimhpXRU3JPZfAQR8fp2QmvQ5j8tAyjF7wdFbncVk1KHd1b7ggvPr5aTS8Y3",
  "key12": "iY33wSJrAr9Uo6aWX8mG3Mwz7TuPGzQMnvY5iTEVKbp4c8mHhYZnyLYWwQadgTN9pQwLPavxyByBu3JRSeK3WF9",
  "key13": "xMZqz1UQekLVPJVTCsrXGEYYepcZFxuJUgEoYpieNReD5vQzxiHMiWo5HBoRD4XCxfKfmwhZ5jvxhN8WLCT6gnz",
  "key14": "51P3CvWAyqSRnXbujc68N7DqQGqVtdzFHUtPhx7krBDDvViW2MvoBAfBVyGMVxH4NbrzcbzFdyxUm9oBeA47CNVY",
  "key15": "3KeAFgW1vEKt9aVpyBnC1itbqpPLVVpC8FrwamD2fqzAdszrUxGfrD1rvxh7LvrnR4UztadLgjZm9Nn6rWowVA4Z",
  "key16": "2puSWviGJ89Q5giLqt1N15QdpHgCPHmuu2qa2jNed9mQ5LqkZSaGDSD54LPrtyrF8GaXFpJtxJCMuui36hnTpyHr",
  "key17": "4hpjMoc5pNyud19EQpedMHEqQ2BHXpoVfXDoUBQuZJgUX3UBUiiQLjGQT7X1X57WQcUBSXzRUQAXsFLkubUGEMU",
  "key18": "3K6tSrQ2YMfiRReu6zQaqmJ4tKxJQ4YkcRKDDFXrBHJnMU5FYD1MX8WNAnXiCUZF1NFp8Ff4tbvFYXXzmm2PDNNo",
  "key19": "64wbS7qxYNcYHkyG6MiAc96GFv9KrfwdBi7Zc7jZqUPpnRxSa2k9fCptS1nW4YsHSQaaThyf2SLRDZxWiVBSRTEh",
  "key20": "3GWezt9mgjBm1vobgL3LEbHSvu75c8SaTdCLzdAWUTtSbWrUsrgY4M9etcDtq7BC9FhtgSKqMai91ESnF2zYhHGg",
  "key21": "2SppKcjo83ivHQhncc9XSRWVqH8VC4MCZRucWXBCzu6TmLxim3EnLLG87oGpSwJWjHYqYAJDyeWKMTe9ntEPP646",
  "key22": "38rEvKxvmNrRCLQdcFGXZ9zi2NWMHsyb6QCmDPyGJEoHHV8pBXLB7fQJGvHBPzk9oNVWWpMTbmTFBSqXPpV1mzJo",
  "key23": "zKGnSqNF55Zzk5NiSsPpGpzewU3cujGxzgJP6iBV9NBLfm3rd8JoerCRp58RYxUhkyD7kKvms4uU5bt3wyQQpqY",
  "key24": "5mxBVdScYJ33eciRWevTVc63pPndMDVVH8Dn9kpMq7EGzr45ytDLgfAspRQJ2z3es472xZ5a9BQPmxAewSP3a2Cc",
  "key25": "3y4kiUTTbcGGZL4X5V3mL17tpwv8npyGYAd572pW96ebnLfNNbFpKbxewKz2SqA5E6e3FY7uS8WxiU9HfdVoFhpN",
  "key26": "3uZMd4snX7KSZwGfFQsyXLZEYc1rQVddLfkt26f2qBb27kcDqfNX4H9DAVQsYiNRZkpMj1nRSFaJsSqmjgVHPxJx",
  "key27": "39kbdv19ukWFAPgng2DkYpXERvYVKiyjYPqZ63Y5exGYkEcFdtkAA3WKnbUGyBg8ZaVSQX1cFx3kneMeZjzJJ3L6",
  "key28": "33NXVpTjVbLScrHzwsAGpTjjpgSBvsVhw3ixpfNeEJ3v49gtq2w7XnREuFJvBonx8gGenY1X5hR8fcHcehB5aJ7c",
  "key29": "7KfKV2Q6feSeDJy2HQ5WmLmcbfUBx7yg7YqtL3bnr4D1SycXcQWZqKGH6C1i3su9AePPEuRQXkmc3MBi5ysbqYR",
  "key30": "4kzRCcEESqTU242Rn8HHkqxozaQZB3mx7xhsPuaTbztWYJmycnF2Y6FyGwkMZm9At6xvn3E5XwGQs54CLXsgsDSL",
  "key31": "5F2aUKwoHch1aCL6pBSeA1GB9FaZjcqsW3dtMsDpzMC9ADD4RZh23TA8vjxa8oYCc8F5Gqesb6dLfjxjP3ATRETq",
  "key32": "5F8LT6noBFRVAsjSJvpx4gVMTHDRJMQw8EEhXEKyjEs3c8H8Bw2VvK6ZspsHsNL31cU6VXv7R5viLsrVYpDFcAqh",
  "key33": "4KQPyEkroYsuPogTaiXovYsgFKjm2rorN22Ak83aMEqsn5q38JvkvnuWrSrZHy5Ku2kp69CjMUN8NCZWBNsy5aSz",
  "key34": "4WatA6gCAGvXZtVLPdPM4H9GZf7ZCgE48VicaNYPv7DLDN4nv5Zp48LPomYNTLBY4ag1zR9gg2sJd9ZhcHC8ob7j",
  "key35": "24wWfrZF1r7LcUMKaDkJVsQDxyGqXGZEomc94AKKw3VkQiWRntW9GLWV8fkMxBDRoGAj24C3Msgbef4AjdWoPxSu",
  "key36": "4F92UqL5bn6GzqePkJYpygk9fFkpoKeo8mUfoLU73GeeXcnW8Xh3WSK8LVZ5cU4cpMG8DkgZSihamLeGybDngNEZ",
  "key37": "Qh5rh8SkcWuevFUKqHA4UFwxiWKTqU2jQSUAdCHAw8s2TjqHuaZ3MeN5XCXauC2ZPiX3AaShF1ZSrfZ7QZWEbeJ"
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
