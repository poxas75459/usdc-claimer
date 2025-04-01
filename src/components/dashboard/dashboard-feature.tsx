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
    "3cTxLeyJriMRNzeWczsT1M9ZqJrU8fpifVsbZSaGnSchFjKvY32MY8XSLQmwepQ4hCwtKFGcDDfSFJ81V4hjPxu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8FC9m1j9BVkepdCDnbjxdyZsdn4qMFPvMsvwv9QtezjjdXtzPtadN3P7Hpdd2HLn7VAx8VznTjQ1BDHf2mPYvuL",
  "key1": "34LdVwtDRHAZPXCk2VLTUZ8ZBsmL9QJo3GtxLijHNEvTjcjCNf6FED3yyDN2VWhaN9DiLW4hVFKR2pBXEb9EtSjY",
  "key2": "23fSXszN7edvUSvoJjMEajxZMaxKMnYKFmKPuLbUVSiKyGWELboQmQ6X3zVwTXY3XjGfKG9HeFrY9gi5QvY1fBZw",
  "key3": "mBqTgfZQGTeZdLSqvhTy8XohosPPs2uUyrewWRAnv6qrfw6vNsCw1Cm1zqyeR3tZP58fm4AFxQT8HTUCZVVGPbV",
  "key4": "XM4QQuwLoG6L4rQV2A6xwpNkun2uyNTeVghZMDM1oTKmbbCFHngmrz1ZH3BwWQF5tFT19NvSSAtwiZpPPhe3GgE",
  "key5": "2jHXgPL8ysZ9dg9abmCvwFKsfYdYtPaguVvpeNb21CA6KBaLFC9mFgs1ZwAfZBekaTxE9g6rQjfNSKfNyUQqdsKc",
  "key6": "9mS4QjPfUk8Au9qMcsD7vVk9SsgPFKoTtMhbTA9B2AAxXLqBFCmTTvk9ZHmcsRbHiKt4k4QabbGrcon1dUkLJw6",
  "key7": "5z6aFWv1JHsty6wR6m17Nxi4z94S27a6MHjozDrAQTTJ88bWuiMXJPy1AtMzpXHLRLJoCAsHvvsfnDA1cSaMkRHa",
  "key8": "5ziXgTMUgrBwDGWtB9WohVYzNJZUkxLiYRXas6Levdrbsk5b1rcZGniuhxtsqWVWMThWUxDh4hUEVQhbfqBm6xAP",
  "key9": "VNmSZG8ASprrgF32hdWcLq8ErbGVSVooD6Tx4MDoB7Aw4wVZrZRwLNqBY9ohiDiE1Yf1oDk2kzHgP5jBqfaXgqS",
  "key10": "taU4d3BDtwp8eePEXNDGcoRe4nyd9yMZguEbefuvdAQDFgFzNKGvyUF5r3xajChfQRjprr8joRhCsS5ME2X2B2K",
  "key11": "5E4FdB27rRqCbmFNQ8TV2naQB6Foa1kmhBvrkcf3J8uKnLBv84MdhVzjnKBte8cXBCwBifkyUsV7bWbfzNkH7Uy8",
  "key12": "4Rt4JHjfFiNdMcEVhDspP1zxMTMSBB3SGiGPMTs3nbL5FVXPZB5J8q8VyRYhsYvsgitY5tiD2YheEPGB8jgxfAUq",
  "key13": "5kL1bUYeggqoUEEDw5ewb2vX1ErEX5oroezmoe6czg3s4HChJZFPMGXCNrTtEgKAQQ1FP95JdAPp8UWXkRnPnG9J",
  "key14": "oP8MAAgfyH7j4XFBZQQCaHBCbAVYu1K2dUQvgRx4zwVtgTZZin7UhCekFc4HQ33usdTmsrfPEfhasYEVfE78m81",
  "key15": "ePBo6EDnJpPb7neBpQ2hBbQtSSEUMgNEV8dcjoajCZNcAggKr923qzQYhEJY3opndbb6UmkzK4HnHTTyf2F1Hho",
  "key16": "27KiStSBJX4V2ZtYvamPgWSW4jFLLkJTJLnDzpYQhLiAa9bs5Ub8aooMD1GAwW7Vs13h6ERKGumwBmzcENQRgZR2",
  "key17": "3PEfY6d6oWpZeP89r51pPrPmbHPVqUy8HyBXnMByg5cvxW9V37pJPyAeMH7qxXZV97s1dSufaYw3euLTNbUM4CvE",
  "key18": "1au8uMZtySiBHA77TxqwwFCJqJbr5o47CyGGeDKxeC5rzhKDQgoqNGqTLjfL1YyWzbXpJM4Uk4ZjtMyC9QaY8sH",
  "key19": "3GZnFoagjqUSmtNYK4vqvzAdEqfoMFaBdbAwkoF4UCsNeqKx9B17myKM4dvBffWY8GRT1mbqXCTFNtS6gPMyJNoS",
  "key20": "8ZsJcDujHpuvdCgMkPRtokvbmiRc9DTg2RstxYkV2wnQ1LV5WzsCYeHEryBt8K9vLeCTMttiiB2qgZSN811wmM1",
  "key21": "dN6Sy8qE6yTdkrnv2zTtS77agpfbTsJpqhLh4YyVsZ3TTKzT79emHETzsDV7KAh7dLf2EA5yPD5fx3iiZLKnbNC",
  "key22": "4fnevwu29c6UCEkySdxEYQ7G8YjXn5SWKR1ReCF4e8MA1PoWFH5WGReyJpcXSz7GHkHngALpeJRp1GaeJvTtugkY",
  "key23": "3n42MX1dG9oybffXbDPAPeZrssFJQ65WdxR46DfPfi8nfkEPJePCQPdJJvDjjxp7NEaGAYo7H7xf78EdGgnsYugb",
  "key24": "5hQsmbvzmucoPZEYQdWhDcbVxRmG5AMHioGJLifTJzqbVc4CuRQtnk2qFJPoJA4ao2akBmehwrQGQN61QboAMqnC"
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
