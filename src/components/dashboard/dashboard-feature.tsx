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
    "2UddQLyruYzNTUxtVUkTxvLVChMGbd3RV5pv2iH5P7LdyCLeyWhR7BE1WJAvQGFrfQYDiaCP8yaW34AJiY9UtXyp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d46gDJbC3VLyVpSDfMqTAMfvETKUJW631ZU2yY3RuHnih9iYcNFJTkxRuZmKfHgZ8whSPCXA5UFyjo6NGoZnSXH",
  "key1": "1dT8oE24b93wDVmkMHVbr3XttE2KAoVTPhfuPrwNHq2qMCcy6GyK2EySsN8vZSCx3iY7nCfrHFaTKRjpZHihcn7",
  "key2": "3D5rnW5CJkDT6cie5stpcPEkGX6XCo3TvD9mJS5mhY3nKN8x8crYbH87SP91mQaZpnjUVE1PwdDF9Ztdpe9kdPUn",
  "key3": "W8toyfs5N6ZYdMGyvcYkE4keZboiivRPJ1fMvtfW7eq4qFf17AVj3ewRCYS8Zhg4jwu9DgpdeGcMjxuG87KbPVa",
  "key4": "33fh6EL9CAVsAtS1a9zUXFXBNwSDH7H4vga72WQ2Lq7GyTW53iQeGCcjVhBzij8vTiet6EmKjRx2JQKUYFKGaM9D",
  "key5": "4FeJEU4jTYPrLMDKnaog6kaeCXygHVeqd9SSsXhJdFPCg4mCEx3KFUDdGpwJDr9KC7ChgEGeFyYnq5g6PZ2STzsq",
  "key6": "3BSpaysm7HWHsmVdBFZB5fMxLNjGPSLuR2hm58CCxkrJorYt2UUJ4iUPSw5GrQrinjBJyc5BzzQ4PxVUYYXGGVA6",
  "key7": "gwZ5TMPKoAcRw7Q1iDhyr2ZfBqpez2bThDWmqr5wDRWf7LxaTTfNp2BzjRC5LGuCSMRsDUmnV1pHBeVu5N6avqM",
  "key8": "3EZADtbfeNU4o35zAmSTincXPviZzkFWcnT6ndYzatfzfEh3vhZHRgxFZn2zEPvasVTdKzUyaZF5sCk4zxpvRC6V",
  "key9": "5kbNMUrqAwuwsPVXrstV4LjDDzknNeaUHNcpwVirXsRe9eYrnU8x5AmMbAtVJskGfzbrMqYxXAcvwi7geKiNkwS1",
  "key10": "3Z4sqnKdp2WcAYK1RkTgvrzmH9TS3yaSCqfLQUEHBK3NV4JYmGmtifxa61PXxPGvkLbjoQ8An7b4m6AQMvRBawiB",
  "key11": "4K4faEHP5P3wvgN7et3sUdCvuGwxp651AayiZBjQNh1GrMSkGQCVrix4ZgVvvBqE6P9gKNULMYLmSWMFS32LC5C8",
  "key12": "5AQNVVcuyK4FSWZpVEefRepprsQ1ZJrUBwLWMmqwb4JMieqzd7EBn7QYUyEgGuWxtQtMRc8ncV6eKL6ErTVHzHGH",
  "key13": "bnAVK2Ap8m58oFcpjYduCm5hVgJfdVNKJgQw2xZFKxPRP43vcjRpcDAbnXfWWddPJvxXbtNPiJegnn3MTMazMDz",
  "key14": "3g8XsEPAis35uetmGLCnHteEygCFnebKmyboogAFoP41eX9c14AmxkgpaJyJMnGLnMDZhCpgZkS1dTVRNjdFkrga",
  "key15": "65mCqqCDHPbE765CpdoG5HFkHxcYSDvykCjgVrpPhkjHdAqHPNZi1NUntj5Q82TeQrUNj4hikKXCAnJUnAaTcjvb",
  "key16": "3edfYJNVgqDmpNrcRMwK7YEwWjJq12xyhnUwCG8uYD5CnweBVKDQL8Z8Y6DeZxi7g8fYZjUQtgT2Rhp9me5Gwh4B",
  "key17": "3ukv2LGdwQaCp8uadF6cySawVF2gAk9RL3G1cqQaShVe5uCZsC8EgqEySmM85SXWFYY9TkkLBgE4GWbavBQBeuy",
  "key18": "2z8qzcotVNY6nBQ6A97C6VGdELFPwL4RtugccaVNpxF9eaBS5NNsCpaHxXbHZafi7kXNz7j35Vza1cCKnBGFAe6G",
  "key19": "5CkFym6U3yYgBAgv1gWSV5bH7Hs8mByNE8H6wvirh11XtY7SvEnL2jkvJimN2dxozCT1VoPVMftJzzao7CHijsHY",
  "key20": "4sw7TJvo2yDxmAfe5caKFDmGa8ZY9vzk3pSGNaaV3zZL83ffgGHKnyiFUzCk5sEcghQE7xc3JBm4EurUcuxSpNTB",
  "key21": "5ifDktm21Zy2hSec78uDZY2pdLgXwNaLYm81zCKFD95VEnHcA7XjdBNgX1ADNjJVuZ2BQPfvWbogPDXBQ7zQGXtu",
  "key22": "3WVpGfJzbD63L8eAmPPANuBaDC8Mp4uMrbCLyN5MDcbh9HmoJLUHdS6JUbm4DyadjCXMmNU5T1DnUR8fxV9Rs5CU",
  "key23": "4U8tng7cRHJTHZRzBeB4eh6Bi54nTPhbh8JsAg3bvuTUiJdnKwFxHwxxQ4pxqqAEkub3tzbPBgQjuNhj5L3WMB22",
  "key24": "5H2pqe4phThKsLPTvSmQGvayZfnfsh3JPmLEDbxwjdV8vnaAvgaDwnS4wRq33ZFd3wgyW16G8PkuFGj7VXMEAFPy",
  "key25": "67k9bCPZytfKxCGzoFeD4EZS1GT4PjDtYExfcnjTWqMwwgPT5yCPPEb5KcGBaEg5i41VPHkTPPJP1sJFF4WRdK2c",
  "key26": "4dfMSgiNbYYVt9ZfFFJjrmnwv1jm5YoY4C4MKwZmqVUTk2peBpSeyND5HTh2eRF1TWYC1Yw3oE1L992W7L7G5qf",
  "key27": "doh2uijGwcyGYRyP6AWr4vRp9Nkjrwj8tGcru5jHTHw3kKpYevKmpPbwqCo1Ck5D5kYenuMa1yK5gR3zbHwMQFC",
  "key28": "2JuAaD34FrzoWe6hq7VnVe46uYbyaMscG2Yej1B3yNNQRgegFgQ1XRkcXdWSyvQZyKFNoEntiGRMFvksegk3sDqK",
  "key29": "4H7eSUfnEmTb6dqU6igvK6gW6UUH2GfHTzMptRjDMwkogSTER5mHwquWgu3dNPsdeb92fZ6io9MB2y8XSYosoiuH",
  "key30": "35LXAxarrGgd11PG3SERv11YN1Pqx9MREe8YbBBuCA1SEuCevwoxXidqSdfPRSjYVEKPtEVHKjpDG1Uyq74TF6jP",
  "key31": "3prthDsvvqSnZ7VWC6EePmSgFjCpq5bNepLCBBvr9ci7BYP2ywMjuMaWyvrJ1xkAC6yxsS8urp2gW7UQMaoTmUAp",
  "key32": "4ceX8u6twKrJFASSTnuF4zWh9psYgxhE88BXJvKp1cEDQDBbh2CHh21HeNTvjTdyB2h96ngXxXhqnm8ELnnwnjSZ",
  "key33": "2xcJK81xfmnyfHviXiNWUJjcHyHWrndzJ2Nqrr3tgpBoDLdn8oSRKWjg3f331kwenAAmSafaYh6aNegBCTBWdc1P",
  "key34": "2xRnEpyG9W1A7mcR44vifCe3yGB4cTnFSMW8QoASYgAoeVQESMwNwaFxDfv72ghGzuKGn51rbkWFow4JjJdcpJGn",
  "key35": "8Jf37akpabwPVqKr7WJaAFzQ2zBTvMwKTy9jUmTkKqsHxgcwGL9Zpud8spZHhcL5Xc3yvpytNBQNJu6dgo5MoKT",
  "key36": "3X65GkSfw9MdAbnCw7XDXcKRbbnowCwVHm63P8BWbTXZEdkT1DkH45wdPVYeKPFUeVVFwbDguH9LyuoG4J7SCKkd",
  "key37": "3gh4tFYHSt85NhVvV8hVNsxSanxaH9XtDPv3gDv9Ntacox4QSEWyhjU2kdmDSwGtsDDma4BmMMajGG31cprJ7V3s",
  "key38": "3SnJHmGDf7vdmunZg7iPUGjbEvf5MYnyapnGH7aoPfBrMKfpNj48KEyCa8uJY62m7barac17BMKMuJzkYAjtmgbB",
  "key39": "293Ud5PiVMuKerV1jLD25PDieZogMT44JXVnZFpdgsDqBPdu674k3XwiQusAUoK59v3sUyTvyXuJS1x7W33c3K2R",
  "key40": "5DcZiN6z5BWxKV1GWo6roNPfZG7cTtezKAsU7zcqUm7U23GnnZitsQtf6kVXcvy3yBwQhMWrNPhj3Unrufzj8dSG"
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
