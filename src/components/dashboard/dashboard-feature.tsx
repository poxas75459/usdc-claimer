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
    "5r4JVApMeH8bZgpKf7R6NCAPH9ipLn9SUmzbBAomfganAtg7Z7cWQfpb2ZrAny4dop6dZsRMhLE7gXQpiB3QHtSj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QRnZ9NhMGsUUn9AXQuV1uNuzpQocUB5A7bQmYAgcjqW5uAWgWHiZj2Vwu1JR35TprKMRnbHfpfdcM4XtjyG19Wr",
  "key1": "3MjkU8JnhXDmHhE5uwPJA3Rdst9i7tchRedPcU5QJPDUibpDirGQ7scVxpZn8fNYwyCG5xp9uro3Tsr5k4DZcDpR",
  "key2": "3uxcFDF1E3vcfejc25VyhZ4eDJT5eonuird8TN4gukWLqXWjJEFSMDJ5GK5evU6ywbvsUbXYzdnahXqgMqwnjbeG",
  "key3": "3N5RrkyQjRUkhRTfnmVAvu35NDgYEJNv95gZzUKTmt26BLp8WyJrMuzVHXh36a5cAS6s3TUST2ncTRQgwao7i549",
  "key4": "2NEDHGdXHfWbWDXbLss8LMUfxBBsUbJe8beHLvhURF69yzpq11QPKJCXyqK2xMABPyHADAskofg7BUsj4naH84X4",
  "key5": "2Vhbb7LN7E5knAGxgrn2JQ3ozmLS2HY7Avc3Snfhkt3KM2E5e7eoEYNGHXo8vLsY7TMHCjKDbJSKPmc9opqQRfCb",
  "key6": "49EEdKJX1onZ1Za97nKzukGsxtJFNR5UjKGAPNfpxcEmT5xjjs8dyvShnxcBm78LiDxATD39ZiyzRd7UAGi8evfx",
  "key7": "5RNC9aj1JifTsjUdPtNcFGuE8rgVEPeFuK4HFSWcaPKxHTJwUdX8669egdpVihA13TgYu75qnGX8bES8SQuVoqKU",
  "key8": "3GaY9JagwifAzzWzn2av4NGDJ9bxn9gWbWhrN3HVQ6F5rbVbTEVde85E3gZ4u77W4uPSpW9Tvwuj2nurWNF4xUX5",
  "key9": "59uVkGj88KxUbTTAgpt91vBNgE5qLQmsKnXX9HGpJDdAd6UKXwuFrbr2CWdasZwMtfXgK4Ab3n4v5eYbnXvV5mFo",
  "key10": "45s62vbHa2p94HoDfCXEXNkZBUMrFJhQAezHrvPJ1atiYpGyJtUYutRKeHKfqgoW8C2kFm7HNRTY3WShv9Zmyp5T",
  "key11": "2HziKHabZfoTueK1XLAq8enszD36gTmZi1Ytbg9em8dW9rdXuq5ShEsE8ZyG8AMC9wXuHcsKfoAXCjJ7eFarkmkZ",
  "key12": "4fRsNh6h8yFYmvXMReQGFnuMgojRQvkuwkpLNGUmjToJTNn4q1rHoPu1vhWQE5mSfWzSQS7dFFqiDAsAWaaDrYSa",
  "key13": "eSP5Hn5wDupPu5KWbsSDgswBVVKeu4zxbbfhtDNnbLMhZDbwjPCJuACiAE7bagZrNhBAsTceJw997Tm4qHf7u12",
  "key14": "3uehpwms5YtJWWvssy3phtowHiwPwTTMFthYMD4DiqmpczUB62Ph7qHk5wJy2QSmsRSXFmwsuwh4APDET4B5pjEw",
  "key15": "2989PTPwvvvkhBTWCar9Bp9ozU34yrkhPKP1w9MH4WLqAvVjicu2u7vsa8oJQZNH1kaFZ2x1GTiEwEimxSeCsiuB",
  "key16": "QS8jequzMCS2NW3ZHMEHWG4PXa6YAerrWbe9JxgnQnF4mXph7ekvB4bBJLfwg5Qr1a2UEayk6pff6NEdAUnzo56",
  "key17": "2vBg132gQEFxochoMwNZGXS4S9AzmKNxHdGxEJitCjzzN2cUB1uMEmTi8DaQYQ8J758EL3Cbe5LiMF59Yyr7mDp9",
  "key18": "2KCDakcNLN57qqEGD1R3xm424ZESWTPHKjZia98URMg8vzwBVX4P82qCH62kCqvkWtvKjQTYw7ek4qa5pheq7k4H",
  "key19": "5ipjXaQe6FMC5tLBYADaMMjnFgXA3SdrooQcSvMT6jzdgo8gCj4Sowk4DfdTke3HP9s5VWa7nuYzFSSPKbvmCNkk",
  "key20": "22niKDJGNBoqWCSDhzkyXfQ9ZzGU4boSZpcLrvkFnDn6NLCxBJLbt4TgrUMPuGeoAqLnEF2nJTGAAdiqTEnJop3h",
  "key21": "3A6q9sDqswrmPqqTGYdjpmyPohfrxjAQZi2QeWrPP6K1SbPc9aQgFT81MH6YhwieDGQWGiwKp7Sn665Lxdr9oHUL",
  "key22": "2xVE2Q14PGR47paamyzXHiiRvFcMfZPQaAZ6nD7DzeKVkJc2AMM3UH897TyzqxqYBPyfHaMTonuqwZmP44tQYrf4",
  "key23": "2u78ySDihazYK7eB2FfxBxTRFTQVxHaQSFarpa1J1DQDTxYD4TeKsU9WpRJTeBN9nBEcY81B5cmfHfhte25ur874",
  "key24": "5HHLt7s7CuTBvfc9hJNB9B24kkb1qCGQXNqbYKAmNRRSzU4e5XY87LHB77KqxB2GPKoFDEFMHQLaiHAbmAjkaAWR",
  "key25": "4BekhiWaiTaQ8sAyM5xzdU7taDqunFoCsiDjc8ByU6izdt32Ew5ubCUNL7fwoeZxojYb4pT2DYdH6ZKUfabSgeq5",
  "key26": "2iTnaf7Guckkm6shFx8bxB547UELDxemDEMY2unRmi5h6CjmDs2vXxaPgTkM3whhFipTEWLPMp1vecRujGCPpurR",
  "key27": "2wfUsum8vXLDT4839t4R49dnaNHTYzrSd5mX9Fgr5HVfnm15zdJyzfuNHdnfYQwWmRWsZQQrRxDZ2k5XsyKjwbQe",
  "key28": "4792r7jo1DiDB2Z52osoD4GDZd8NnxLkNKkzkSHp4R1nXxzTPHiHJXByNjvHDMV5iQeaFh7rYErsYbU7cb3c6sv7",
  "key29": "JDoSFLZpJFMQm7GRXcFvgGxSC7Z9NPCg7UNLYCiAbxXTx2FhBQafSRsR8se5j6ySbuaD2DsrDddeqXGqRhF2gqC",
  "key30": "4x5yNEk746EYv4EmJBrU4hKtqR74wQQVK47Ku8w2iwNwuVFjbAvEbR9WhxAxAQEWbBwQABmJhZygyXxngY7fLGxH",
  "key31": "nu5aLz7n4pfc7yXPwnZ2K4vHmb4FdMtPYG6ky5zaXf9tk2LJn4WtkJPq8jGbWS7mff2qfdQNRWiqMTTgSxgzzCq",
  "key32": "2DN1nM5NrFDNw5se3gTdsiALG67sxMtk7WJ9wJCa2Jdkq2YrKBmkf3MjerCd3XYE2GLuMUsMpd71J2Z8rBFwhZXP"
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
