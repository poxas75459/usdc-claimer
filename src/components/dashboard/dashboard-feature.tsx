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
    "56YUpmSbFuB9UWDBbU3dHJ5h1FMbfnHhFBr4NHj2TrdUyG6tPZTcdtHDbZRWY71fKmYDWcsnRaoPG4WeUpZNr9b4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UYK7a8BNwHszeuuZY4M5DEgQP3x9d8rvpupJHReQFFyLTQacVPQc7z1kJws9Mp3b7jFkLVcjyeubvYPJBdWgGp9",
  "key1": "57HscwGiyP13wceBx3tFsh4g9BG78hQc2i11eYtXCsAVK5RCEEHK1zWRn6UXWizomc9iQcnxJ6dXfYfTH8ABmdbm",
  "key2": "5oCw9PN7go5DQ2xDBy3WCRSij6RVZ1xtQxNxmPFhJokNdJ5pD45puxjNjddpZ3AY1Xzfo4mb78uLPSgwsS6GZrUW",
  "key3": "uGCrZ7JPpGh1in29TXyvd9n6bD3TdkL23SPq7BGViHoQ2HpXGEzkiChArnghV8R4x3ZegfRrirsdmr68LnGQxrP",
  "key4": "cdmraZJ27BjFKy1A3VJZZzcGD9HQxzz8FyQCW8MkzbxPDobrHiaH3DMAHfYxn2kBF8w57AoFWfJtvry8CskzLvy",
  "key5": "4nNUheyo7PXupS2bRSdco9xxLoAZPfebdaPJBtQVq6RE3ZvWTG4ERon6Uj8qEw7JtiRTEkTPfLwCFavSXYEubNZ2",
  "key6": "or2gjxv8fnHo649amkKiWV2iioWF2EgEDNyVBwhaVyeTFKa7z3t5D8tLbVxYmkyKyjSGjfLykDLNsVGohMDbVZt",
  "key7": "4xXTEMozsZdehBTSeR1Dotu8ngoJLoRRXsR2BKPZv1GCHoVobanpKhmx3GQUVVQwmCXRCq1JyPvKBpkuQ5NNYUAW",
  "key8": "2d5wB1JBjx6kiFtpjqpv7CAtL4ypT1N5M32LbowqN79yB9RcKgUXvUGLh5acaKLGVaTitsUGa6T5cyc8vQaNrx8K",
  "key9": "pLCUkS5XFSTrRk3hboCnqmv5D5qpnGyF2pfHRXBR1RW1SXoz6MtoxbPv23uuoDPFJtg8UKf3fpTwV7BtbDCUriH",
  "key10": "yBqJAeAsKnkys6wz5N62sukGPt2kLPgpEDz6uA24Sy8XoRfHqNrsjjbsHgpAifxn49hyAvRcmFX5bKNRbXEvPkZ",
  "key11": "4LZbPHhjJnHrYA4fs1VwpaLYcfWjtr1eGQWU1dYiG34PnUZqKUWjAJJxJ8uxaDGyq9t25i4JtQ8FMsWnG2ae4oD8",
  "key12": "2UJA84pdRHNRnE9WysbsTUv2HbrEfXxkYT2pJqpc87CRYfTwRaAHHSirxFicWCycoeQvDFzDDnyYtBw3zzxrAeGZ",
  "key13": "4CA2ewdm5oNAf3d9zTJq2hWRupda76sUwKjPWimjXkhi8MPmF3n6SnLS87MBS1dCwPxourKm6EwjADYGus4JbMM2",
  "key14": "46okienrDvSwFM98N3TAzDLy3QmyPqVVH2oBzhyJMRJqiDG9RAC6MqcUbDGzQGdHFocrkPcfEk5r5Df5SSFJBhyB",
  "key15": "493r7ju83y1MUBNqA8bebs5CE8nNpZ9s9PMBzpYpZ9qoheAru13nDCgsDowMUieEQ3PwRC6EMzTcQqLJ9bP5QJRJ",
  "key16": "3LfPLCZZwr25hkDRRTb26LLB7jmZ5WwRSfH81koFPgnnQRTDJbzWKyQjUKkjCzsbsR6bSX3qqamPbcbaK4tyNqva",
  "key17": "3PiUCdGXzPHirS5HvNGv6qXEjXamh9w936nWB7PNjtvKnYt3cst23TDXHQkpocUfpY7kE6jdUsxUp5o4234Uy4he",
  "key18": "5DAUxx4LakvTsDSh6iGjPdMaeF9HT64EC88eHRBdCazNJbmkgSYnmRx5XL3wXCm8zynk3h4qPi8FsjvKiPtajTSq",
  "key19": "CYNMYy6YEGfh76XCNVfAosjt3FWNPmKdrt5UxbADQhRx4QfaE187tLhwn8ervussquHPP4DQ9ves3e61WHo7c5g",
  "key20": "3TgaTbq6PUjTy3es53LMKTHWux9ehd1jtyewfzhVJ3h2ZLhyZTK5AitdHAvr3guvjyZC31kzcRCvLFaPHgbrgo7D",
  "key21": "5YJPhqrvKXqRXjmaY6gJDRnL9pfi16pSLu5PQ7t6PyZqJQa17VEMAMHYSRhpMaJwtfAmshNEF2uXPwJhKCPuPMpq",
  "key22": "3qVMGVaGhadLBkL6epq1s9zqFvGTphSy5JrgjeysktTnaA6u1e6x6t6SkjHuNCjLgi1m7DByJFfkVZAQEuscnhLz",
  "key23": "Yg2NE4g3rEWkphMaHyo6Q5evtXZoTqRCYJKruFnyGzew1TK388Ff3oakFJSCPXFNWUDT7k8qhD18EwrznAYdkQK",
  "key24": "3M4iNZhbJAXzzkCQ6zkVgrJsBb6RDhjvn8KhTudXPCmGoVLedR1nPM7Wqqe62pXZkuDPTP3QMt4STaf2E6HSz8FT",
  "key25": "4adbrZLxdadfhr81Bfd8vfGBVhDeRRo99CR9wRYbFWEfve6AyR9mCLa9tiqTH38gBgRUDBqKbq9BhYVrmgmDiB2e",
  "key26": "3p5VrB8i6VMF5cJVLw4yYPzUxtqhPa88U5Aq9QHjtScfWaABy6uFmtqA3kpa2JDFhS7tSUUnFQS5JYRpLqVWKof1",
  "key27": "44T24zjaKTk5PskdMVKxvqPygYYgHiQAWaYyM5E6hX5vfrpYHYU2hCqMnut6Azpv3YTQxDp4APHHriUBHfAZQh3X",
  "key28": "5Tuv5g1AtR6DYzjwTospZcm8xqWfSa5T5Pno4VdWRAwPGRvAyPgLofJYLUHLAYMAmwT12kNH3ERHH37gAmdhwJ3v",
  "key29": "5DjovdsyjLBGPrcbFyyzVGLWaofksrtAka1ap2zL3nBYgRizTfTyTAZ3wrF7YwtDL1k3D7H9cVDByCDH65JouM2k",
  "key30": "wLbSrof14pdR8GZui8i1xEtf3Xoyd25prUXc6FpR4k7S2pstYj57m95GaQK1iE7ALLRUhuKwvp9fx5WCuRuMmZp",
  "key31": "5zwgaGxfZgT93nZzCGwbRBxdHYX8BEUTKTHw6UwmdSAenapVx1cT2UJHKbFsxPxxoM5uq81Zu3q7hunqvk4itz6V",
  "key32": "3CQmhwhqqQ9bCKv1GaFewsLesjsaY239zJHwEj5icy9QqyATBBH4oSWkGLameSiF5BPJw3MshXdwf1VzQubXrDMC",
  "key33": "3K53jDoq41o9WZMtJ2WRoVKqkjNG335MUxvycTfJh9CdTMdyJcNvwbttHNfbn8ufxrSatPuMMRTxXEaRMrdQha6z",
  "key34": "4duzSijHoq7RaDrBPDmTnLN2uSELEsJ779SLvxn98pMvhDhSiqkNsqGz5SxoTAytG9s37HEpzoGNhchjfGtUaP1g",
  "key35": "2PWKCEXv6h9Tvw1fyYxNPdwMn8qADVUwiftroCcri6Z88CJbGCPvjjFJNigMfZN4BSTUM8jq1DsiKshYNuwgLPj3",
  "key36": "3LnLxLuirsoLTXAr5CGEwLf7eAAKXyE3Du6K4ZpjMRQcUj38TUVXUphJwnHRp4LFT35sfMM3iPpuNYqKr3mYrJNL",
  "key37": "4a32pQBJ5W3woECXHZ1AzgXGrhjACdzQgh73tsRnJzYDsUUBmUryEKX9AEmDY1NBsKG4XgTWEseUHpSmADEQdD7s",
  "key38": "431VzfxkChC7pUrMhm64zxHVka7DoKLgHiNcjB9RL7gL7QUU6pSBbZedF5UPToH48NXZheifwiLsNsoDVvFUWASG",
  "key39": "WY283NQR7162XhRen7939efPWxBNKcC2vDjoMdDcnKFfEgUVbzc6d9oA9LsxPXb9dpr1b23hy3hkyW7DpySNwtc",
  "key40": "4wRDGeehx9LJqUy6FyScTN882Z78Df5vx9pt8BWxSSrz23ztkbgkz9D3onSKAu7DQdSxL9bCAfb4oRP8PiZ8tPuv",
  "key41": "5JD2bUoKWAbdEwzVC5jyBZccxG7u92FXKUMYf2YZ18aNXeT9gVRgCYBVfcGPZLv3u4pho3BjPvWLFWUHdAyMfvQ4",
  "key42": "5PsTGYin2uLxFH4DBU6oFCbYAqJRnexbni8hXw1UmP3Wk1tUZgXTyq2Mk9b4gqhNGZpscVytEEVPa3wffsp89do5"
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
