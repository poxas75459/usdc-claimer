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
    "VCypo2u7QzNvSmhx19cByuMRFs38Cr5oszEonpe3c5zciKgDmBCPFu67yZGkeF9ndazkXuEfvJA7XcuPxw6iFgi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bBGaADwtQREgCu5eS3ZmpomSdiVcALU7jrzpPuLNJLaXjANzdgAyVbstEmUXzMDYZbfLCGvR4wQFaoXXcCzXA3U",
  "key1": "5rCXoc9tfdBmpUy66tbXMWhyTzR1cADjorLbasUkDdkUxz69x2t59YF6o8KRJdKbwd43mMLnLVYAu85MuCrCZsFv",
  "key2": "3umgKEF7m8x2iYYsJ9obbPUWypSPawYtATu8jZF6VGyn8Lx4oPT7YHs6xB3zJ16rEbZaGsudGx4cME4j6AyrDLrB",
  "key3": "5vV4c2rxJtLrE6kvinWoDTcxk5BKKYW2tjPa69rYejyTgJBpw8AQWDUCGb56ojmxhterf35y97VCupY4LymbRa5r",
  "key4": "2xTPj1KmbMpZjMpwS4vQfKwmFxwbfgpJTiZLVE9Tx5bc5NbC65itPVSzEnPToVmh3gn46XV9Q3EWeWiCDbnCpxPD",
  "key5": "5SUQ7wCWV5m4e3zpx7z5pD6qLZYkvU8uosMw5CcPDHjSkef2MkYbG9WVXmtHK4CMvrirk1fkbpypWo5nsXtN5qSn",
  "key6": "4UjsyxS6cgqrhnXx27YZWE216Nbfab2nVuHd6tP5H4Hnptn7REZpHAKrLSnBFeQjjtxE3vj5Z1ZPSF7KSSmLVvLb",
  "key7": "488VvNwsx1LFJJg736feFJETZqaPCQaHiZnK57YazJbnZdsTYnr46pyFhU1kAJnjyDHpKivoi2DxXkLzPZc4K66k",
  "key8": "4rhih3sosN6WSzMbibndLPNvkXzfUmt7mos2gccDtSzhSZm9LZNALZzr8eAdsrt9CD7fLuF96ZbG43AdivxrqJsC",
  "key9": "MKWZrqrWR9ZM2ubdj8b9KL95ScCbKzgoyChN4EBGvRu7tM9MjgCXejEeorw526DgebyeZqpCASwLWrzb2oCPuc2",
  "key10": "3P35dpQ9hASEkfCKW9GxyvSR1d4GF1AZiL5fEYEzVjtfyTzAvSUpKT5kNsMWnfL3dJVDFDFoq9r7PJBiCtvqF7KT",
  "key11": "ePbhBkJxacrYogqtjvcfewZdJL9VQFLCc5wh73krTJfWrvEse3hvtqHKqgqu83rc48gErVT5N5ERW3dLLoH9Trh",
  "key12": "4wYRFBN11AswAkZZ1qL4GApyEc3eDc5xChqyMYAbhGakNRRS4kQdHyeMxd8XyKvZ3RcrQFrrVQUuEaFcvRFk55YE",
  "key13": "4R4XEULEwHxtiMPmfSAbJ6sK5ZKdx7dV39XpBdtfGVwPWrRZA81EYvcjyheTiHBUhtnvFDZfnwNao7zsPbFc5tGZ",
  "key14": "iGYFutGZQCanSjp159FmzE8czchb5zGPNAYLLMHsBratrAnoKQR2jrZ9TDzNq7Aeh9CWiyZzfVpQjXqdPqxwm8J",
  "key15": "3hRgR9mfo4MFziBwYbhoSHzjBbXD9Y7r77tgLenSHQTFYN7iZ6wLeXyiHQMgoLaGbDNJyxL7T88LxVxBEg9TvnA8",
  "key16": "4KwuvM5x72rB2TFHJGVfRzbigqrHxhXkETLDdrS2y6c49pSeW7toYoZR3vMqRkpmRuridxykSgVtonqbGEBXNp9T",
  "key17": "45B9wyZgGTTpYvBrupjyDQ2LTN5Fhydx6GXHBT6T38YWTLTR9v4rAVHo7E5UpNQdEmHywVTthx3WeEtiun88VuKP",
  "key18": "2Vf76DSBAN9XSssQSSQZ95WqbUeVeRdidSvscJTFrE1yVP5AG6MJwfgNLbZ56wVh434v5kmjpEJFapnqUo2Yhciy",
  "key19": "3WVcLPHNd1PprRMQsQPDipM3HeoiTxZnD4ZDwqKYcYTiUxZwTrTbfAxL5iYxx3SVxDyMqz5xszcBeewALE5ypRu5",
  "key20": "N3vZqfyhsPRuhBQzheZJjnMYuiBYopqRJTubQE4UWrKndWC579zAP1HXBZF321D5Kb78DGtNrFzVWNSniJty6pC",
  "key21": "3MR7nrh37LJUbZdUvWPLCouKntSHxhJEMQg9M1Hi2Vsto1Ke6KBuzxDk2jJ7VWWiC2uXf9Uj9z7D1i1EWo6j5gf7",
  "key22": "3MG1GXzRN7L6zjD5z8LjQnxuc1kfKRq3ZudKTwLSr78gkFzjdNbHz2Gq5wkzfjCrJ6oQrA4b4mzvqDxwj4PJRViv",
  "key23": "5X9VePWe37H9DXaFKm8QRmcaHCfVmQxFSeauM7sHnNdtvpFECfbruJpETo4PGddFxGUbBMmRuzx5n5fzj5eWhWNa",
  "key24": "44T8733mMPeZ5fMeueaJR9YLSacrZboMc3z5gpYGjptA6eaQja9JPxxdGTh4gS2xX27D7Vq648NpcrrdqXy44zeG",
  "key25": "3SpArGG7ZSiZR6UVBnzwARvGUiQ2tbj33wsr8B62kyinENiUQj1sTpUEUwpofFvexxNZTXFAfi2HrZELccbhQJag",
  "key26": "F4MKdxmTsHQ2sNRd7ec3mZKdFUhWUBACSD9Ckit7za3C8hUmZUw7d2xkKba8UBDUfgkLhXrFRdTu5QRSFbDLgZD",
  "key27": "4mTBrDVgjCEdEvrDusbXJWnEx78rBcUAhtCQyqz6VAghJsnr2sq4PZr6ZQKdSgj2iLUdSHZpgmTWgopByqXnBPC5",
  "key28": "4ucMEDeHZVtTS6C3BYtWp9DTDjLNYZBGQBSvf4BoSZtFrGTcbbYCuCbS7aFyYtgzejGGSm62eWDJqsPs8TJbD414",
  "key29": "2qTjs1SDYQcit3G3KC9QqJbyiqfFRUy8J7Wrze7LkpDHU6E71PXDuFUeVkJh7gaApynGGjsYphoqfMJZ6yx7DL3F",
  "key30": "4WbEfFxc3LGNoAKi4anoWZbixZipdAsTpv3tRGCBsrE3ZNtRS661LQ38Hn8M6oVX6mnCoXhb2ET6fxumpdv4zGT1",
  "key31": "54rGVwW9xojixfaujBc1oS93eXu8CWQYiqE9KNr9v9EzB35opsv5S3p8dzDZrnU7fpwd9hkX5RDaCvztayoSY3Dn",
  "key32": "5zVizQ8QvgAbCmywQfXfATh2FioJ2rhB9n2MYt3V5RMW9SYg2H5uqaLYyc4dRTHJyecxV7isUrHXQ6TJ5dnNSC8R",
  "key33": "iYfcWkF6uzGcc5pjUn2g5uYqQUcWaxfNV32Mx44knuqYpiSXzREphmwMbKJv7BJ1ujjfAkozcGYLs8UpSE7roi8",
  "key34": "3w5G3HvLHJHJ97Qaw8JZZq9N8TVVxKQsg3mSs3Yi8psYYzjRmkZbdhwWHQJsVgNfCXWgL1PMyhGVbLXRFHjHYrRF",
  "key35": "3HnNSqbd4172NB9pAGpPesjCZh5sSdsWUU1S2YBLnisHbBQBRPs8GAYaa5f3QsHytmkgM23ygdUinQjpgiffZYPm",
  "key36": "wrWS5qjarwQgYBEDr2dVfog6wAuTTNBUXPKqXQb2HseXQ4y5jxcNfhgCAbGZriDsG4KCUsccjcykrsDds5kSsrC",
  "key37": "22FnffZqT5UVvJwRhixMq79wh9Q7psMUNDA28suXaeWUaGReSsWgnuZjammXuvr1FFcfdEc96M6fqceh6KP5pR1y",
  "key38": "2hPNcoLtDKv2BPLgB7w3NhiJqXjUiV3K2ZqqvkXcQ2pzf56Xs1zZToGtjqhMssd4LA6fEHqWTwoNfEk1mrQtX3r9",
  "key39": "2KSk2ZetxE1MzUbzBD5jhztY4FtyRBsjzSbZXcDUQvvd63ZZYo812McirK8XhLnipigewbYWgFa9ZSMHKxUvQiuk",
  "key40": "59tmuWLUXDjCbfe9nkjF8BHcR5aJpv9LCzAdiPtKqMx691BrsgiCvLkipWgMjHY6pDKjvpDdF1cDbXJtXwKe3Hie"
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
