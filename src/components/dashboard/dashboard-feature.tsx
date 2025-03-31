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
    "3Annc4w1ijkVVnMQC3P9wRYh7wcbto5YSwH6XKhqwVWp6j8jUxkeAv5AivkhnkBWeszMVq8q43LaoNtciqEXtTwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7GudQvjriJ8aWi88nYRRA1mzPLsZB6HUif2DMeq7CEH94736ZMuyYsYoFmodqQB5dRGjUWwUtPT2GuKj34cm2BC",
  "key1": "5s6MUeH3jmNcoNvzZZqxRRiq76mxCeJ4zVESJeqxMuVTqpXob1QgUSriMYwTUZ9yktyhD4uQwTqQKbGvS6yf63DT",
  "key2": "WNvymmcNsacFS2wC3R47SG4NL2jtGu2rtMkpUKathoRg5ZWwpe46rhEQvEbqkTFCyExESN7T1CN5pPdKHCo3v1Q",
  "key3": "tyHQjbd8n6qFGJ5KoXkGGfRmGa9fkVewGpV4bW2mfXtYktaxEzYbazjrsfmBfRpFgesM7GGKJrp8oidSgZtzEKK",
  "key4": "7xUh9cAnpTkFiwcLnDhShi9ciLcXb8cu4LQg8r7pJUwthQ8TS6N8vG7JMqAfmL3KF3xBanFDmB8pxsbHQfBp7Ji",
  "key5": "5gidYp2JJGvbkK9sxLQMyCoVm9ufC8U96vqfTo1NSmNUuqnZJVqgwJPsarsRggB6JB4YrxsaqNAnC2qXAABgXmxH",
  "key6": "5Dc8iDcW1NRGtvXWG7jCNw4NqFnHwf1zkVPpSP2eCWV6j1MSk7eRkw2o5guYm361Y82CACf3TxNjqYmgizyYU6VB",
  "key7": "d3nmEVWUzebE8pjto8qarHNNgCCMVhRDExKQj1KZe2HdyPXxy8ukcrvkZxfBMyJqy2fzjs5oxRNZqk9jLxFK7CV",
  "key8": "2hNwb6FgVCpeMynibWP4CGg2ndBkfn4A1zGjw5ZBzoqUij1tf4LJGcQeoQTFYdkz4XLTyC2BSe49JTh4F9v5yeK",
  "key9": "3pDswDUVN5CkMLwMJHY24E7rsFueHK7ZwzLRj1XmxjXWzgih2cNpMTt41Tkhvs6QUvnwj3B1mURiz5XTxsiJQmpN",
  "key10": "2jX9AcJM7NNfddkqSGJwj1QPzT6WuzVhpYyR1yFCCV8f8FMEZycpC4yPbKRPQz7951Ku13ku9HYzzutGiRdCAS29",
  "key11": "4HbN5dHbDE4yk9gRV2ncroDjDAjuM45dboBm92v8YSvoDqtwzc4qhHUpTSPJzjxExmgu4pAiPEqrm9W3K8rbKivR",
  "key12": "3b1yrEocqkpxEipEscjo6gKQuqY1RMS3485ippoRwc4QoQAVr4rFHhzpiuQdfnp396QqQub5pBoZe5JSLdhGk4RG",
  "key13": "Hj9k3inDouBqZ7MqbFSd9tH1EhX9QSMbRBJJeV5ZyCmNCsnUcikMyoR7j699yqzdhfGkgXbMJwZuencub2dMxwE",
  "key14": "4pkijdmQBxwxayKd7keP4DuMBU9ssGD3tx9Tbi5xNjDBSxaJQYzDyfsk45JLqNi8Tmr5EvuKbTwScDfqXusCYvP7",
  "key15": "46qaVebTzUKPL2fNg6UQ5D5WXfwdNSUDMhQj6BSVwev9veqAfVMU1gDbH9nsPjHwfx6aA4Nm9p6nLLyQrxJ2nDJt",
  "key16": "5pz9RgHh2WXgZfSmM3dkjFooE7R2GmpR3Kh2zJJLo15bGPxK8dwN1tDXSW1GrY4BMHxEvRfDPtMJdMFFrFFAU8nG",
  "key17": "39fFNyTwTywPS8RCqbfVf6otvL4nYPCuQZDJK4pcYkcCv6d4hufLn5kkgRBSYar25Nb2fQvTLmyeKqS5mVUH52No",
  "key18": "2b1CWcuyHHSqdTFrpJJt8pboRHKuvTCwtYGDz8n749iSPYJS3Y6ex6vMJbdou3k4gTrN4xPgfDsz2pAYGHPidLry",
  "key19": "vtu1BL7t4tNNhWC176guYapetQp9Nizw4eiGPcLFfKXJAv8KHS66RDG1bCUaqLoncZabE5iuHX3mPvJTbFaHHDP",
  "key20": "CYCxSAd8j1FawjsMduvNi6V8KtqWsXqupjrgTgyzybxsUZNeY8q5a7GipHE3Y9VBFSEiE5GcCFHjos4aFijLFqK",
  "key21": "Cb6umVDh8X2YmY3X6ndD6Q8ai39amH6DRm3deMpuJvd6QSuZmSC67bZp67UiP5CioMZsnxBbM7BG9kWJyDY6FXL",
  "key22": "51qx1kQSmddJpsfveHqVTPLeY5RjoR2byjtKTBNW6PbP6iiWcZa3AmmrSwEupQ53jVpMBdexUbwKJwak4Xz2kwP1",
  "key23": "2Gvmroe6vfDhX3koJjRPxoYLxDJbMQrrwyKenh8jyGRETgrMs5cFv439j5L9RV9w4u6Seyz15UWMHKH74QSK7t9o",
  "key24": "8BzjTgssdj2qreKy2YULiNKEkpd1k3qamebddwLatYJaAbDtM1M59iUE96JDRmBJJ9aspt899Azf3mL3bZmWb99",
  "key25": "5mxuP5xPCMXk1buJwjoBg9N37wJmGu6jhqvqmoK6MCHKe6LpDsmXrCpCzKZQJb84ENsvzPx7WxBRJiB3q3etSYRZ",
  "key26": "4HWWwsSEXx3SuB7apHAQekMisSa53LEeAxX5MLpRhDL7A1uqCPRPDL3NKnkGzY21GxPuS114jSVgxuX57NPfw42W",
  "key27": "4WyXakiurGwj8VAg3CuaMtdeonxPkcUVvi5YJLonRwbp6aaVj9yxqD2vY8G71ukxczzuaqUtdmCuwvGsLa2YH6jy",
  "key28": "3RXQiBPXs3mFjvZkhZcxhb1eBQaLGLPjjSQR7TgMHy9JnDu7otqxtzB1YPuyzDevtadBuXnUF562TqKmKZZuESfL",
  "key29": "2J3w83Zj5tvK2d1RWrd2P662A3jPYh86DDzfkhg1jep3t5HcBiK2iyMuq1fXWDdunuVtxiiTza59kkyhkQ53JvDn",
  "key30": "2rvNR4oox8L5AmTEXG7xXymqXbxC574vmBfeH3tihE1A9JqXwpjmtWa9PRrn14kCX8AEpFBah3gAmx7JZa3Sk8aY",
  "key31": "2XyQfjeHEKuBt5Wtz1SrLjr3obpFmDyXq318FSHnm4SEZ37EbhqCZEkXQBEMs7AYuF4mRd1zWf61WzQWgXpDUjrk",
  "key32": "4FT4K3vyLXp31otnxv9qoqqotQmsfJekovL4h4rpQAGnwioxxSp6kLtWbm68pDxAVc2C6yrF6yStxmuDxWAQmEDt",
  "key33": "5LX4D1QxavXbwvQmPDjmNb2aTZgircJGiF6UkyvuEdbUPY9zJCWtCzHNfeJEfPAS2yx5mcCnwmzX8om6FYYytzRk",
  "key34": "28fWLyprkZkT1RKjz2LiFxe1VWteJXWgafYvzsfoytgwYHFKt4oeb3SzXNYiDspZUodQZz6mnitXtNYVANV32rZS",
  "key35": "TVR9RyTiZyREa6ieFvsv8ZSbUE6tJRfAKKVVRmoXPUm2Hp9bV8abWDe4a5iAAwgPnG9vKZDnqcPxULhLKvrJM2V",
  "key36": "565K4wh5S5AqXQgMBuxPFUPVZC4fALCnjfZ6FZQYh6UM58qB8vqriA4Ys6cvbsRsJz9gMEZ3i9FMx88FhHiineZf",
  "key37": "526S6iv71uHLUBAL7E12AHa5mAYG5shBbUQ18hLhgHrVFVMwKee8Gb7RVayTn3q4ExZ5YSnPmvtPCuMYCsQPFiNj",
  "key38": "24jvnUugsq7BedZKqQdVd5GE2CdGjHx7SnBrK4g7WUC6hKVhpoUBMdQe5BJVC4z979yo5x4WmCwFii6XNJMnSG5U",
  "key39": "2Ky8P9EJNT5MjVoFuNMWpwvaNWjdKowxqYtUSmkcMuhgqc5AUUmxvBAVmXTsRbuSwizRo4DSeHqycaa7P7f1p2XV",
  "key40": "3dkZGx64r7ntedSx2Nii1jvqFgSabrEBrXaCn563QNoAW42y3TTJaWrPkf6P7ut87ydJEkbCzMwZTQFXHiX9Tbbh",
  "key41": "Ek2eKqbqNSKKdxDzdwSUKtv7hHZgbmCFf3iaRVAYYQjYKqADeSFBBwcWxG8gna3ygVN7cztG1FwgSQ26X1FfF9p"
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
