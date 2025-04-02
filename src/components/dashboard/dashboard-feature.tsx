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
    "5Avd47zYqBqQJeKAH3uHmttFva5uQbKjvTvPxSXTzf5rWZTd7p8vQRyyyVdnAZfwXUGaGPwheC55M6rQ7Js7Bojf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CsxiK8mZPcYdhT3xCWfHEs9mJPLQdWwTpnNL8uca3XnMU1oiAQHzBfd3wV2k5TBd5sDyyMt9exV9b4SokDaTCwF",
  "key1": "3frmVYCk2MDXJAKV8azA9bXcdfB5P5oaqg9s9szXKVbRZo6iAWnNqNjpGCBYKApAH1PhFoWhEKrg78QWhizTgAdx",
  "key2": "LTJiFDpXjwovtLqyNWJauzQbKfEarRbbh4E7acZnejsXWbuKDuRfAPC3594854pauYYYprS9mRZJD3akTshVy8x",
  "key3": "27qzEToRwCoTXdNoGEhvW9XKRvzkoYNXpq4qcESpqfF1RYBjxafKXR8VqHxzQXjrCZhAucfgTmMKBVoFmxTdtDdB",
  "key4": "5spqTqMZFM9ao9P3N7VBfYrPbZ9axd3KVoPNHb4Y1t2LyfwwUA4X2UCTkqVpbMqDL7R79pmrJ6UpNGhNiiXSvpH7",
  "key5": "3XmHM5eEKum8yNt1RPwCq3skg5wPLjrNKgvfR5BQc9c5hBuPQ2pKcztme5yTm9CFoqyVC1PwmHMbRhphPPkE6Jmk",
  "key6": "2PGkACfTKQMDkyRxfb21oMQLwX2wgasmBZFafrbqnuHUvVSuNj3NNK3S11QnXbSuWpvhoRxokdPATsR7GrAyVVdK",
  "key7": "5Y53K1kpdQbKevwrdAM8nnU6g4BJnXpkiWTKYf2Xhe8FnHXSxvvSopU9fgAyDSh5UtXf7zBtHxAXhBTDMdpH41zw",
  "key8": "3KYo9cRAVfhThCsrLP8tou2oVC58cYe768PEtexzZP1XDpD8hmcz2NHuMrRMeWVZfboMwjLZafoYMAKxeNPer3TA",
  "key9": "2kxQFeEQHobtijFp4GwyrQmxitr9ArJoPdperVZ1TpNat8S4S8njQjJcRTUQajSgs2fAdb6bGooXU4wJ2uoavsAo",
  "key10": "5HEKcUemgN4CbWymWRgNwpaMcTwD427c6b3n1SAsf6F711hp4ir3wCQAjaVeJVuquT2mMkvrzBWDzAKD7auJWXSc",
  "key11": "38p9suvrv5yubtuJBrQbFqfuXFGX2Lb25tLoQWoZyVpPphAdik44vYZdjjYaeMh3UevvWMg6sv8T4ZSKwcsRkt6L",
  "key12": "vtGj3co2uZf7wM2N2gSbkzrG6snHbuSTiAHvGoL1BvoR9m4fvc9HhZuNFvDhe2a8qScrGchaSuCHifAekKAdEP5",
  "key13": "4youg2gVSo8MBAmG8aTbf7QWUeCEsyVWwZEGaj5SskojoVJiFUi8RXoYua4MwZcsbEzUhGUNE7NKbeiv2r9p2nft",
  "key14": "3pHepL37SSSq4AN9v4UrahLoPo9dbWnXFkfWeMALPydwqEoHKtzhzWY3imZS8M4ZujfWEuNo5PM7CZRK9DRx4X6H",
  "key15": "5m42R4B7AxY2VyyP3cUrVQBBp1JamyGtW6X3xTATDrgQQizDWzevTh8WfrXujo2bEU5jXLWW7E3kWseBtxrJ8ep9",
  "key16": "4B9L1jTozusY47Pa8zJ5bX35xsakigfwLjtcsSCHoDMinirNjCZKFPaH8im7KPpMNoNbXzq2HGyQJcpDmaBjazaY",
  "key17": "3wQMV3ckPtTJCXV9VMEWWGwdrD8w4EbhqTY5H4gVzhkUANWKKifwqnZ3wFSqEoYrCSTnSRLBgPS87HUcKSxRYGBd",
  "key18": "61Drt6SDz9nhDMEzSj26j2cBJnsXALTsp1s1dpTiMqMpZ7HRP94ZJTgkNLcsAMbxU7k1HER2biajLBDbfAZVWsrf",
  "key19": "5rUZ3WbzvLQLbNfsX2MkSu5x7pKdj9VJTMp8fqqVQWWs6NT6PcU7uFMKWaWGkuYayxBT44YRRbEjjc9UC3XWgCs",
  "key20": "3fn8XjH9uwsXkd7mXYUN95NM1aMJv5SGN1efBVwCVE7Zaf16krgqfCjsc8LXKgCvzj36gsdgedP69mfdYdgzDhXW",
  "key21": "4CKDUNgG4QczZyCWV6Mwz9QY1ZpP8TYhLZoM96He4BwhbAf5HhYkeHQsHdziGKCyEQRLaUM7TTxK9zqLgDJUuDvn",
  "key22": "654pPWhuPJMiGfS72zmghHkcu7KYZemPSjkN8XkK7X2mZKGt77RxbERJzuUC3bK8xzdak19ZD4uomXXJLAyg5DX1",
  "key23": "1ijRSHxaHnXJfMwmVakuPLTp9fNdcsrTs9aBktnxW8vZXtoufHM8S7eo1PBQLLqW9bjQT2v9gg8tm2P8rKEyFFg",
  "key24": "LJyXNzDD8vzQgiKtau2UzM3ZYfvQspFG3q3Uzq2vLmhEXDv4Q82JzgdkQHTLLEsrQrCWf89cAFHZXEhwGZo56Ws",
  "key25": "2yMAnbaZXyQnXwvstEP48JBCystL3ws2E8Bch8tgUrp2MKrnbsABgQf3j6L9Hr9qYNWwGpXXyKSC59SWBoSwWWaW",
  "key26": "4HJfwtQyZBjsUMb2BG2sV9L9wpRQKdWPJyd8EmW7zQFd4XvkwmFSJLxfxvbPLAiFMs56ZbkHjrpXfxaVH8CPKVMJ",
  "key27": "BvmfG7PwToGzYie19hiAGwxe4bbsBEDjBE1STNEA5iDTmjfYcqScGXFRcPZidiQqqRm4x6H887jDTrzgy7SMfYi",
  "key28": "4Qu9AcdYW3BdgeubtuPYv8cgX5SYcmwjaKu7zseWxQC2Uc96EdqW9J8nT5FwPCCLx2oPnCZWYdNUcFxoku97KHpf",
  "key29": "2zC3qkgSz7gofjzX8fTHEN7NXcw5ZE956GuCxuz3T8ghpH8y2btjtBLrG96isK98vEHaLnk7oQUGhEM5vBpSN1wW",
  "key30": "nqfFN5M9bjiUdWhStU7kq6i19XqrgeH4C9UqBj7YXXyXDZmphajYzeEVnyvzHhWm85noGKVN1m843Qnh7MBNtkt",
  "key31": "54VLs5uMwxrdgot4SfwWcEtyhKn1QxywZUgXDv3Qn3ffrAdgJFo7WeJ7PCmi4DgG3zZAFbCQPAjPhX8TRcRpZ1jx",
  "key32": "32WX7zboJzjzpMAaYBm6nWKsr2q1adCdYwkNHCAdtXCaimC1o1n6hjEGJatcw6GZYsy2J1VNBBxsv7RPHVWFnXus",
  "key33": "4ubLmDYTSAoSrSh8ijFk3mqKbQe1jB8Lz4aGqfmh1XpktEfUX2YsN7WniKyyL96qNKj3V2BGH1ir563K8Bs5pFU",
  "key34": "3ycA5azpKEgVKWStCSjHbqeit9MRfLmPaawX6D2erz12dnse8rqXZ58KAX53K3Nu6SpEW2BdDGYHvAg1htotb84f",
  "key35": "29RTKY3VtX6pHxwDmyuW5QC4eQWsBGpoTcbmGYn96FwMFtSVdzykLXSpCuw8vGjEhWoC9P27qwvFtc2t9dt4RW7R",
  "key36": "2VUmhoYkpSwRbhWpfMjXByfny6L1xEevPfjiqoLgQToqm3ppQtTKEzXZWTxSxjx3QDPH7yWjRHBuHnQTzh8Q7KXR",
  "key37": "5jfKvdviExJFXeoELGriF3csnJaoXGsJJZJ47aD6LihBseqoiDRBNZyS8xMGu5y8grhosU8gPuuMELic2JsPrSA9",
  "key38": "4p35zxmEBS8TvLZPxkypLdVpnX1Hws9Z4GinDs4zEMDXbWkmhz6GHt6jaVB947EszbKYnsNtzzABSZNNprqEp6F3",
  "key39": "5cKDRyMYZASn9d6v8iqYUmA41ociKV8AjgHZYzDYJqFKDKuvukwox3nZEr2GS9qkmFEpVxFxxYNFuiekifS6oNpq",
  "key40": "2odrCh2zBEJ6tiUTbsvx8tBHw52ExpZKY4Rs7RaK7wJm6uj8wughJaU6scNhQPKfrRW4KXtkqp5kQvsX5xjRDNQ7",
  "key41": "4Em5BxdigkJQf4do4LUdNCaq4gTH1oqExrGZGRMESBiMra9TuQw6V9CCeqLQLKEaRt369xmy9TWpqWYKebtcJgMA",
  "key42": "62yFvzPBALX26y7fae88f56dKQbfPAPiG2sAWhhpCuh6D1rGJAG4YyWr12UkcowKdZP5cTCVhtharEWgDRgzpGpT",
  "key43": "3tLqAsTNuGjzEpDhwfqGareZ1GzAGc7H6b42tYaE5TiEo3xuUTXqVUwYKrFYXS1R9oDmZG5Dsf6SpV5YX1MWoFLV",
  "key44": "28vxzderxCVZxbWhCWmUx7KyZ7Bcx5u2qncWdTRzzv8PdK1UKdBKnpmq7HYi7LEE5RbYikXMh6VmnHZRs8d5dQyB",
  "key45": "64uXCaScCvsMSkFjm34WNyBux67QFULyWrxTrfpc4PbJr5nBbvmGJKwm9kZyPmtV3GVRPa5of24ZxfAFMEvUYPwq",
  "key46": "1X45oYqbXKomKx3cVkWDiygRrBou97mjnmeGTrHWvexvoiRDEx9699vtYNQqn9qTxpnYdxTNXsuxjHhHdLTEAMG",
  "key47": "4YgUSvMcmVrjT1WPSSA9nskqQSuQUAMUy2JFeP2wuFND8BGPxXCSvU8WrCeMbEn9RmFJi9L2zx8vMmt5pVjtkSjA",
  "key48": "BCA2xbPNbpkd22UGZGpETU44ECSS3PtUVXJuvxD9YfySY69FaqsXJjzZEbtfy2A6uN34DztqEK6ykeGzro7gSYC"
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
