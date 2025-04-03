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
    "CsgYvk3Wp9ehogFXMoCUHF3aMSu2rLL9zDTJUGjtnF2ZdXTyxSFTa23WW8possHXwymRmuRCp1vHyroK271s2cc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WFS4FrjytcdS82AETDrdJJEGraPS4d22YaLLjZiWm1yt6pzjuP1QZCeGLdyCBkx4D9xronszDhtvgiRk1NLJcAg",
  "key1": "m1xcjVNz44xupZaxoHcdVh5bm6Stihq3GQgffgZM9yrLjeMDYNwX5GdEbzHoHJZh3r5psHFdQbrS2ZLwbmwtW9S",
  "key2": "4s5b61Sj1pu3nNCNLtFZhJ4vrLmcpui3WngHSqzTTrHRz25X89pdc8z8FnLy5W4Zj7mrMMXuk6cNeiFNHzaPW2ZU",
  "key3": "5XxEfgYWt8QzBrBDnvc4ZP2fXtMREePRshVjuttmh2pgxyY6qW94hpFAHCSNM8BGgh3XqRYyhiPQUbiH6kasPb7c",
  "key4": "3zG9Sy3w9rQf8tyRZKmRGJTjzKfWQzknPBETMhuU9igicEJLYBEeGXmrd4wPmp6bYuUEHkSMbV8EpjLLZxmEykLA",
  "key5": "3GDKFwpP95YPjhtpC1v9oEurxYuhtihNReQYtaggsXbyig5Y2iBZDbnKsFuqvKfGamEFLYE5gRnovop54DSMdcey",
  "key6": "3fGGpSEZf8ndKYc2dwzjWPXNUrS6veRvaKd8NRY7iTvMeUC8aSn1FgPz5Sh8xsquMfj6yKoYvE7AHCdW9AE62P4A",
  "key7": "2r13mn9BVehzfXf6mf5mBDb1XaSNVjdpHggnv8yLeTNs4q6dH9Y8YaxCE9HrWMNVNArxx7PkP3skcofCd8iXGEjK",
  "key8": "3doop9sMG1UfvL53j6s5vPtBMiRtX1oCouuiL7fXCX55TSnrnyJ7bPwe1ceaEg6oVgDXpH55FLAmUvyk3qcG5sU5",
  "key9": "2k2bWKEATcgCx5UzLHYWv5f9zB9hjGFqLn3XoKf45gy4AUXaA7V9Bq4ggH4UCRjRSArb1Bp8hoghmg4RA2ZFsSqU",
  "key10": "3PiAv6u2KSSXo8qfNNqEXFYEdLZmV3yoankMSUKPiCCFEBnKtMx3Q2myZSCMEcHDUX9agKYAyAaJTuxspDuqH4KB",
  "key11": "4dMsteLWuEL4gJiUmduKDLFsQ26GCjm6GXeiCUHa2ZrD74grHYxv5dd9u2PJFMxahK1Rz3NcnWRLwXi6qEw1sdMe",
  "key12": "4yCEvaaTGj5VCAqh2BP9QBMXyvZ5P17T6eSgDf5HKfuDCrubZZo9XDXAFvGamkwzxxgiJwNeid4kY6Aij6AqUUxL",
  "key13": "5D1Qb2BaepLuTzyi6kVci9LQvaCqUfBwikkjZw546L47RDinzidQNX6QrFrb64JzxTuZqQy67NnVJheJ8qWNtpK5",
  "key14": "5s6gsdM2v2Wfc9fbEHcUZMVzkBe527SZaeJNjLto3edTkJBus4Q7X5TwgZhoq3h2zZcWPV11iKMrfavrdc7gP8X3",
  "key15": "49xvJCcsfhZbjcqJUGcc9xwCbub7Cp5xbBjHnwudgimwkLjXLdntV4uDwwpT4MQx5hbbHABsZ4C9U1utR1yVupHF",
  "key16": "4QRihdvSVW5u2BF1AhK8TcbHy4ACuUcdDXbANQ7Br2gBrB4vChd5B2EBaisNGL377zpzkK1tLNvQBbwLqtCYkYT7",
  "key17": "3ghiAxdnP2wayhwvVZHS3CV2e8zPZ7ZpP7LrXcSgns5yNckZdn5z7oN5c2DkfgmijJ2djDm44QvSxnm9t6PUAKjh",
  "key18": "3vNnEgKeTjge4jUu1jRbRzoCAaW2HYd1St2zywgcTnC81jiGTcckXi3c4Rc5JLtS2rBSAGaVuUa7RHfbDh914fu7",
  "key19": "YR46NvqpousAAaDbeLK8LvroL3jiLdvUHJFsqrR75cYEreNewUvhXZ2tuB4mdhiCinJcSHn56sT1HmMR2PXPjbg",
  "key20": "3kFmi5pvje186zkwenKdUUtz4Zy64eJ4gmvNCNGt6M9d7az8k8ypGDnSqBs9UTc42PeGhuHMPfprne1eQowHndtB",
  "key21": "eaF9jUYbC2sfXukdkWipksiJru4gJh8DYrjPmpYexeLtyw3aUgmrmKTr3pZHufTHSDRwFZE4sVzmyyNNUUpR7sQ",
  "key22": "2B8F1yvwDXcEQDfbnXLMLe2NmKYdHmhe9xcHJzEsYu9FLJrsztv3Xs1R5zqe3tKfLdCKJL3M85j1mPnyMzTsELeJ",
  "key23": "5UorL5pKZjPNPSAuhNv8tKa5GeA7CF97UfV1PcXCAz4HhVC8bQKTrx9FJrxUpRMAvmdeuo43sKmj6tzCLYpENHZp",
  "key24": "5XSp3zxgYb8xzyLvNQzQmh4uQwo5fDH2EdXrjf1oRmhxpy7J8KjheVV7GdiXvsX5JMamGPiPDZvtBSDiY4MmUEXd",
  "key25": "4YV1qQW9GyErssuvCqGuNZnvAZxiphdERQxN99z2e8gPaXKNCyjSY7aQb2ukbNLcicYsDb63JWxNDPbJmK6fczAh",
  "key26": "ybULmwyXt6JrZn5mVrPct8TxH9r57WMQGU9YvwmXFoEbmCGKMyGqPSmXZxSwunBXMEVMocmvN6ZkPNWgDaiQcnp",
  "key27": "4P9e1zrTARPRTxtnnthVPcmjCnKfvngHycTYZooXXpixsZtS9Fs337cFvJFRJWGDFYNJTEJZfpJGBaNjprntB75p",
  "key28": "5pAFn9XUXSWDhxCx2bHUExoXJwARHyvhExuFBp72Z6GZdSRt46JjPgjmCNeDcM1rWHMnTgTAADYwemVSWfvdMTrW",
  "key29": "2sejPhtEikuQ2y8roFUYoYmBR63YYCYem29tpGFZEnYH9mb3SiKvdGBi1VqpALJnNaQkotL3tKEcaLSSD2Ne5X75",
  "key30": "5FMRtmT7M8oJmLqyDr1U3UfSzXEj7V2EVVkxgunmBmZW271RAwXt8ggLWwmXQ7QAC4pfiAvKWCaqCr7EesbYyPqr",
  "key31": "fpma1TAKuoQtdTL499bYvxfkwcG24ZzgTeJWpcQJT57UxjjBrhhZaLeZJ5hkdSEfqxVnHREP26d7yVpuPGwjq3J",
  "key32": "3jbQMy3kQ3hxtkEM2eS3dB72LVP1CVBPovUJ5bsa6ySRJaWpgTSRTRaABf2ryT8JD3L5yUCi9zeyx25yjeMc1pzy",
  "key33": "5WZbG3rrBR7td51ZiLkdDpvyJ3U3cnSnWFvyR5ZWcsKjhWbucijUHsvk5xAZTrt52xcvKH38iFM6SHCnjNrtwi34",
  "key34": "65xNgJPidUgXCix52WLwzq44GhdFt3jPwiUpBTQcvVzxtZkPupjoeKJuxJiU2ecDEuirkDqDqYVGJaW6gx5HFBa1"
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
