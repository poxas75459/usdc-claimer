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
    "38iTMPqmaAzgcqzjXDEhgymSGoGwF2qWh3LPPWKfBtwJVuRvTzRZBHex7u9kPQMH2NuKN5QM55dJ4wxYgM8Kz91D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DG3mQAW67bsxigdCoqNDAF9dert9buDUwjRjUYcpYCsZhH8ZANkqS5NkHPjdpuppnnLo4c9NSSgx3GuBPAKL8qV",
  "key1": "2X8zZe71bXhDGTot8G7t4WpLhBbSyPbm8AQeJ8SRomjjLBkHFJZAGRMXNJ9uYkrTipsMaGudQQRMDoc1qCRreUCc",
  "key2": "3eqCSvfJTJMnT9LhfumBKUr3znhYK931KTCeoD9QEFopisuFaFGHHHksAvjiCzF4bHHLkrkFPuC8XJgQw3mV9Zwt",
  "key3": "5gVtjSvQu5mGJm6KLpUadkpDGkcUf6m9aUW3HfkMBsY8iYfH5BwBLizaZzM5pMvdEtCMBUeuvkY7FZGSqHHLZh6a",
  "key4": "54ErQ1ppeyW9aArfKu8pSTvYaKt116R75Za7vbbR16iTqMDyhDtsrSBykPN9fwPdXtYe6x2osJUyYVUj6h4ez1V8",
  "key5": "tmuwSq4qZQyeHUjLGdA3vBGZ8FjAqW85nz9BGUobyEbNdXdeS2aXaGDwnZ5jekXyiFp11KwvvNTndcz58jiVpfZ",
  "key6": "51iSABRZV9jg4uzgXWx2hRV9oV1CB7p4kcuCyUvm2RFqNLjSRJqoeaF4c7PfQkDKMs72uYwPr7vpHWYVBV5WCigL",
  "key7": "3J7G9jxHoBRmbkURKMBKkG4aWd45KsxdsVf62FJ1C11nfjz1Fka5ePNjb8KUZff3jQBcWUWPyW9xagKSaDTzCAjW",
  "key8": "34LrLCZrbDotNSyrKgWTHPv5o6tSF2ywEaNy8fjFKS5wnD3sDMkcAvL2PhJaSnbicHbdy9X5mtyQBfADKMHCYPWK",
  "key9": "4eXzpu5oG1B4pi6rWWqFywYjg6FxCPQKpjj4HrCqZYo3m3kfLLeCC5vmAs4rwxtRkMLfCGmKHFP7zTV8JWSd8WcZ",
  "key10": "4Fa1jgovA9DEtoUt1mJpt3EQEz3iNpNaByhLaTrDJXiSdxJi6MTDej267yrAfos8Hdfs2Y5uiRZn3K9DDBMJGTCY",
  "key11": "skdf8sVpaanNLYEbeZJGu3HaKGcfnnqziFkHsi1LpyVTmEVRL4hqtzVJJrQ5zweB1H5hJo4FKghdHP72EXAFYbt",
  "key12": "app8zM7fvMgyy56G6VhoB2ANoX42gtDw8gKNhMSC3UWd3Enf37EnmDQtWeA1aZPD8BjWvaAEu8qPTXQUJs6rW3p",
  "key13": "2rnBEcmz8VrSdLxSx22xZszfr1CR43Nm5cMQCQLitx9vCvo5fAjSz4aqk1o1kN1QeWNrqjvzjowa4xy1Hu93svpy",
  "key14": "4hHZEgUcbiedqpPdAEcZWXLMtZq5AN3Dpy2M2wYAWhrPKkSFStcWMnYm32eMZuXsma1VfYnptsKzw132Yrsxo1zn",
  "key15": "mBostJPtXYMFRAhrMPPKGAPPzLTB6tW2L5TibjvEXaTpJXxUMDALuuVKv24ufNxoh3SwMVD7rStDzDPia8HV7GY",
  "key16": "bvrTjcm5NZ9wVmtHkTA7JPtgFDdkSPanjb1Vt9mxs6grToiX3Zf5WufsrhKhA34W8mWhtpHwkHQT5M3ntqSEmRz",
  "key17": "C7ewjXPc9kwmX7cmzUtLAAJoT3qHbyJcAAkx2djGMdkU3d5CeC6uzoEP16SFbjKu5AxKLJPckTVGXeQjfJP1gv1",
  "key18": "3pbi81yH7JirFqopwutwj8evKL5PFqV3TVafYcpMLxxis93uaTYjNL9vncYRzxwHzn7M4kXhQhe3xRjXE7xrsxFQ",
  "key19": "5KVshajkexGgpyT2YcPr4saS9duzT66RxMs5DXLbaoZP924p2hTsiTvQEXFzZ2rvEVbjUuT863srUNx6fHM423Se",
  "key20": "4HdNektc3M5h1DXHbfAacucrQe9Zs1TX4YrcxvoFa2HsvWaVskQNfWxPSgh5u2czQyBW1PNbue9EoVGPEs54yFoF",
  "key21": "43jYYW142zDPvCn2Hwy7ZkKQe8nu348P1ai2yyfT2wMzJwPzCFEVXKSoM8Zq9eX7FKJ9WbaDssNemkAUdZzLZM18",
  "key22": "4yZHNiZ3HUeYrAfTwBuXMHuVenEMn2ZwH7wfsEv1HUTcVTTtinUhL1XEdc1T5uekmcXtvkAuX9TwTaSKFgjDrs81",
  "key23": "55TxdG6NHuQfLGJTEJkihuEqg3vtwPwqe7Cg5Z7yAPaSJiW1DdskbjkKj9hCUU1zVCTLqMqH5P4mk7e84Lhi4Nqo",
  "key24": "5hdMk9w7tYD79MYAUC5Wmwpc8YN5GzWdmBEKsCo4H4oAY5dz1eH4e4T9hJmSBCgTdrs1piRkHYyEaKzaN6YrDNRF",
  "key25": "5T5MS91gHJiRWMtupXBB2gyCXen3w17ipRCheVUJXziGoz9PyBUSoge8g2JLDb4hmLxscUNjZZm6AqkV3x8Bikkr",
  "key26": "5xQe1pkN7vAyQSCz6FTkrRd92wc7XQuDwfEDsc5y7NpAom1CWmG243y6oxiVypRH68SfeWDLixXpi32dc6Y2Fo9h",
  "key27": "3WWbTazmAA54wTarK44kbsSYgq247HxnAtaS5RZDbLnaT1caEg94kajKcEvB3ZdRu7GoaMsQWjJBLN9DMoXvT63a",
  "key28": "2sHme6arZksXHByGG5q7G6iHRZYbQVdmoR5JjNbYMyNUjSrXkLt8RsGCXt7zchjLKfAGFBRV4BXfHRDq2HkD3Jrs",
  "key29": "4YPsFnHkp27E6ch31pJDGUieR47umBxJViCFddMsZCZWp7JsyayvBXmWcFbgftREmQmY4ag9Rj6LbwizSxQaM1Kg",
  "key30": "3V1iNvJNkUJTpaoo5mKAJKtyED3Q4HnVtRvbGyowkVKayYRvMpSSpyx7BcXqT4mpJRQtyQjo6wcFhszQW3mn1aeh",
  "key31": "sQoGcoP72CjPFUWvssqhCvDpAEuUswm1gS2KKfqqDnW4uFqg1m7qtVrpsxwGzsqqzP3Rv846qRtbtqzYjXuGp5k",
  "key32": "4VkqZHn9UTKSmUG4KbupMp62jPT2Kw754Rd49r9RhXacQreYQ5wC9E7toQbiWP5Pw32Vevohymz1VtqSuJWvqPxW",
  "key33": "yLEua5SWmRzLVpjrBgbRcnjEzC4rqk1MtpVDfwi2T5cNqD16uPeBKNXjySB4wMh3DByX6nBBDy9etZp5vFu9v26",
  "key34": "5kUYjMC36vwXFjDv6hbnsf2pwr5dGr8BioVLCwvQFmtyq5uWpHLQgJbKcBDRaY5C97vWv9xQKhytcjuqdGypcoqL",
  "key35": "2QyAkVD2r1d6A1c7vdWLBccr7X3kzH6mGyDhUtbMp1UWwcn2ZQhZWdutJaDcMGnP7r1jPmvKQRhSjFrsmdTNgk8T",
  "key36": "4kKyNs3uuSQ8GD3CvYMnR1F8eNHKxTrPdfATG4qmNWxG5afJ7HVxZrQgmjKMubPbwd8UukD41naKkFJdSXwbqiiP",
  "key37": "2wWt8D3vcXojxG7NQHU7iUWdi2Uq3NsWCHgkNXs6dPHEG1Afjka3dYVrkwapNsS4MsR4suzdZSCLPfacJda4hnH7",
  "key38": "xcYRDDtce2g3eZc21A521Q7BKz9N4ePEgMJsjxNEJkxP4PMpTDeCw4Dt3F1HWVYGiS7dWGzo3zPxN1aVjxQv2Jv",
  "key39": "36CGY733Y3AYskLrm4E95PuvGozVGHS9rH9gxcRVrF5fCpELbqBSxnLxwGJGXcWKjAD3ovaAw2A9fYBzn9hSSChq",
  "key40": "25cxmswTmWtmm44NaNXSSZDXESdX9sMNJMryafXeGutEEs3qH7Z53C1CzyMZFGygREf2cp5h4wnqobynSpcFLNaK"
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
