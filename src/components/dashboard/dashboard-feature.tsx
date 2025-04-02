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
    "34HrnB9qNfAbNnK9XGsj1dX24iJo6mm6Sf35jaHB2wyHBC8EFx25FAdg8EDmBRfyhNmEAazUeTqLKA2c5Movj8n2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gqnefDLyiFJrHq7LRRJ3xzHajDTFFtPven2afqcBmsJRZXdbe7xMzK5nSRXJv7HbZGmwiDqLUmuokohd1VTSbJG",
  "key1": "36hrMLKMRZKooqQvsmuPCUJ47yrkPWLeTe88jDPnuQLtk4heGTEm7ZneUd1o7qMynnoWy2SyHzyCCvUad7H2cFd",
  "key2": "4HGKs68sw2DcJGeRa13SJgjCaMJURJtcytz5yr5gYRa2txmXMc3wwd56sooaH9pzieL5y5HUaDmXGQhDRMTkemJg",
  "key3": "3frpVNTSWR859R8FvmG6XPm4JWVdwRLwguR5PnxawWWJ1GM8pNhnpDtPqkZ61xGrxwGxDaf8ySRwacPBgeRwEhvm",
  "key4": "6NA6YqpKcFNAQVEQQgC2oPXDuxvsgrYL2izYfPREfkt13Sz7Cd2DeJpMd6DfT2Vc2Y2rfUuZbzihGy8VpzMUSWz",
  "key5": "29npccy8iJySAf1ep1RxfMhHtae13jAPiLBLeoyFYeTtGtsNtxfQFUgUC5S9D3sitVV7bcxR9ovXUVZ7XZgtiRQu",
  "key6": "2yb42bifX9WwMCJKdpH9jvqde25LWBypx8UurtEcAbevg99wgF448ExJ8yMzyg13gpq16PHfvts9sF7ooncZk4zP",
  "key7": "DA64RSqD8HAPDqygk4DjzNhSJL5YTsNpS3tcrF9CpymUoHedvXuqiTdRbapQs5o5BHkB7MCAyoigceUmHdcnCEK",
  "key8": "3GVS5aMGuXHoBNh7uZDswFkfekMcfqf72Tw2EAKQpCCrs3rMY7VAfcHBiawDjy4pvU3o5NRvmPc3hgdphqqDGczv",
  "key9": "4NZ9gV1Srcj77fWmce2hzveBbaqA5KqSHPqCEYLQ8vWPKRmz5yVsV6MBCiTAGDq7ULtD39d2Kim95StHrHQLnZad",
  "key10": "3SHrcSvVse7HNpDyPJeRnf7h7xVTqujaWfkmyZEm5PH5r8Y9yX9JxkYmuYUFqozRktdN7KqLS5xfq5i4VPjbVdgh",
  "key11": "47pHL8pwTJFmRkPRCwdUt8xaLDzr7eG88jbrAihtvnbYjobz2fTisEt8LCuc38mjPw6go8vzEicxAxCaixPQaJ4A",
  "key12": "4SNmKc4aHvr6nXkRxT2EEzcksarYk4pfSYjGpwnuEDB9N86jdrXnGqjcm9sjQP7VsKMR9toQxwdx6enSXG5K6xUD",
  "key13": "62FEMyLCTk3pyq5CKuwN4MgjYjoku6fyXsp6xsMdTxZuUysa3zMEsJWni3PTr4NMLhc44pTLa633wbDZnBbT4baY",
  "key14": "4LuBuAeB8NVukKN2KJZHyttDXWbf99c8orAZefKTjnLCLUztnmBkTRV8sTbZxTCkEfCzqnaXy1z5pULVtC6kbXn6",
  "key15": "3rzApqkNWMNd3sLF7xLsqUqTJ84NAEbCYtdKvZ7i4YMda4z4KKG5Pp6FaTout41sr6MpAt7oy8VGbzpLat1Lneor",
  "key16": "58rVDP6AspebyeKJEj3mYUAQQ2APNNjgwnjL5w4QZwTxwipdVZXV5WRcznDSN8nHfC6LxRxDbiTRkdVEDPhYzSfc",
  "key17": "5i8HwQABSxe4dV7WLeLy6vsu4B4ztHijNSWCjGSW2GHwdGXkyyfFAZU9UwbPufFYx7jFVoQNWAecvptoFbMM86Lu",
  "key18": "2ghgAEbubfyEB5jU9JsSbTonjgk7PoVHyrF3s2nSAxzcwmXbpwyhdrcx8nwticzYFEMxWgyCQq9KRu37pujuNHmh",
  "key19": "2k7mcKTQPeJG7ubVDtyrHCNYJkt8EG54FT8yXDQPz49wGkb7xhbJtyoJapVqdeFXFw44Xdtp1VaVxm2YR37UDeqn",
  "key20": "4rfmEpYLCvbAozmo2ootgqkRUycmT88RFzcbB8Faxts2SiyuFK3wnyqFAEEZwgHm2Wsf9RaQzqEduKdEXg3rpf73",
  "key21": "4QaxfADKY2M4bSDiieXBL3Hz8xSSfiMdDa9KUsGwCui8FYhjHKDYbNrGNGLZPQjYKd8oGRArubGn19FgjGUZieKk",
  "key22": "2UAUdyadMmZ8ajscmKE1aKxFfLLTyd1eWgz8FdK9EK9hDNWCuWx8BG5bcaCSm5WwF9nUNwfzgZoaUBoLGTjeFEkK",
  "key23": "5acTkXWCKJSQrjtbwGXC2VcK5xKNt9VQgz8r3BqxceWYyL7inowsnNuhn2T3EMzWnVdzoub6fe9GYF2rVm22Kd5M",
  "key24": "4GKfR3rQ2ZYGaCcX6CNkHEEN62Rsr8y3xDeG1gmBfnbnrWk7q8o7c8r8cS9F2h337xB4hYUnRdcakAuanbkkjXWf",
  "key25": "3kCtrSyeufZkZS8ugLQQ1EGWyXpuar1Kfe21tksGPrJqSuWQFnQUe8yAwdeQ2RqPGXsamKGg4nxQCuPDBR3RxvWa",
  "key26": "2rFscyGbcA46hXhS6VrsjVVqEE2X4mA7bcve7aZVrBP1A72p9EPUasXqyMR9W9kErfkfFm9EvPMG4gnFH9CpUgQx",
  "key27": "3yKrN2DbyTVpQUzeDHNMwShBuTyj7XNcC28iVva7Sc9NCpywz8jmRTnSc4cWuKawoP4THR9c5a2NyDHfAUGZwtdH",
  "key28": "4EiW5FJKrKDYzEeekzgiyvGH5ASR6MPQVQpTNWmMyX1M7n1T91PV6aVhneMUexxbPHshFvKPpEX7Q44RGPXWPDxs",
  "key29": "36r2s3GoG6LRRJ1WzdQy8AWzSJAvCma8Rm4BobnZaqCACwrPAArEcPPZfS8GfXPN7kMfUv6mSriUWMbQyehW9WPe",
  "key30": "4tuskMyTyL4prWpkBAkLBKGaXMqhkyjqccycWYc7FXHZ9DNiqzQ2FhFhqSz1Ha24WNbkmfCrEgagjrqJoeF6raCG",
  "key31": "LM85WKuyM4xgsxhUjTW8c4NxzQnXY9J3ucAzWzSvmVCMF25vVBvFoocimyGjk5WzKiMqPN9skWGLdUsbFpEuFc7",
  "key32": "tejS6jC9wKi5ZmXpQUqRdVhghziBkKTBurmyBXrmDyNjV5Qjea855W3NMij86NUnLGP2wE5GQUfJh43YkWB2Hg4",
  "key33": "4yfTnyp6WvsyPDuRCucskX5hgqkoUzaCrj7jH5RnnR3F68qY7gqTYZQ1cgJnGW1Yd3gs6HGMPuuCrwqQy9uFrSG3",
  "key34": "2fH8YKxe5g2XtMJEPVXB3qJumsw6BXxW7NDUPDyTQyz9EAdi1SNCLNp28X4QVkdbxN5VgoEZfZf7udCvvqfrbK8N",
  "key35": "51ddCycEFEf4GkNoJcTm3ZDVGhQ3TpwG57J2W21ApXYT4SBJd6LzARzABAV9GeTWBgb9Q5tLmzKYT96ad72QCvM2",
  "key36": "5Ha6yPqpwQFh81uMRHH9Gwz9cvswWByphKQWjamGgubq119SspbXSF4xb6AykTFHBhWdePALeRdy8tSTvCJPb8QA"
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
