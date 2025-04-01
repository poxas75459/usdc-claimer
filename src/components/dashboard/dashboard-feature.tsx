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
    "3r19ew1BSXfFbGbBTQdM12ohuvDySdGc1j6nfoS6yWxkaYDfnRtASi96a5nKfpVNzd1XvVUn2RRgKfDzG43S2kKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HS2F3rX3KmDiTHQkmUPmi5ZkfbtmuxNQP9MqAA61MFmBW7oGR3SEFhucrHJiMB1VWMzhcvNeP6QLycMWvPvqDb6",
  "key1": "4aZ9BJD5zKm4NcPFPdTr3hHRCKTKQgC5y29J9X9T7WT8L2Lu6KLAa2NbUVESdfbNgyXhABPhnipBCEWK8snuRhFD",
  "key2": "2SW3XS1YzviNQeV9ajxU8t1cQUqv2KK31vViaZyxK6HeFnsxttxWajDBhVJCGjnnody1KQCL5cFFBYM7E2eoKn3D",
  "key3": "5vUjX6czXyf1WUvErvqnWzmmwA6ASYY7nindCgMf612vXvmyTcbeayBaiMAAJpN3EUtPwEZuwadVX9eYf8AsTyiN",
  "key4": "eVTzSwBmPNyAhVFk2mmjJpycCVD51zdBHUnj4vXtkNKgYtZLLDebw5WzrNhjfzbhMNhZXsip9TktEpfV74UgKko",
  "key5": "3qaBwAzLMdanhGNDRJUn4hu728JQmZGWFoydfotzUQEHuwquysbYMpPsuvYJ8kn1jEyxBYmrLbCxit1HztmBHx53",
  "key6": "HSjPc2xy92L7sXQJfQkSg8usttMoa1bKufXKvGK8qKTEDvgCJhfKPSSA4KRwEFt8SnaF8uaq7bD2Ccbct7WVVxM",
  "key7": "5XE4AeZTGFUKoh5YqrvtqqBGdF2xVzuPddkxnTVTBEU9WxesRXR7GVkUZ8GhuSfxci6AK5JSo961guktdrjr4YYw",
  "key8": "265XKYQbDeZZMfhYDbJqDEibTRw7SBkJFLRovnMaM2MCD4mPPfytTg8TNwpPFuEpJs4XbN5f4kWsFkPqVKkmPUtm",
  "key9": "2fek6mxwy42F2D4gYzA2hKrPKu6WAa6Akmr1fwXzvbAzu9TYhjxCRGZEkczpzrwx3AgoAsHdDbdZ1nrEfKRM4Mvn",
  "key10": "3AnEJhSe6EGatWvGDjA8WA94MfUX5pDqX391mj7AxZNn3Uz25btzSFx5v9Nx9Ao36e6GDGZdJd573R5EKigXtdRY",
  "key11": "39ZdogaNaW941fbEYG1Po62pmR2MzYGSGTr6pQLTxfQickdUvwgM5jsYACnkvYKdPsdzn7aTjmkAX9ZdHD5FzW7D",
  "key12": "2o5pgKHJcxQR6ckTzx35SeEbMfBMQk81rsE6pA4CF6dCG2yqipWM4VLyCYyssNFd2R8iYUiyvDujAHGZQEaSaFsL",
  "key13": "5XXWkGD6Y2b1ruE85T7DehxATC3JMyuUY19Mj9icLiFV4xAWBSPeKgbs6XWBKf7cP7QfBjLjbbWnHNfy6xw29JCd",
  "key14": "R3FaseEYkQiRsZUzRykbLKurV5U5wQ7bmZRh72inzVmZ7zJw7H4uBPXK4VS44mHNi3Wn7GC6ALdcQsSmk2PDPqL",
  "key15": "4E9HJ4GeM9Wh4y9Vqwf1uiKL6HxzFzmvU3iSmr2YYaMnXZRo7thGM1RnnRNo7cW5YwamZChLdZwBQuBuAkY1oi3T",
  "key16": "kof9mm7Wzb3mEXcsezjxnuhKs7ujLjqrBoBGRWbsKjJZCRaAvbfNdsotK5gFc1DJHsxSRhGkm29ewY6UDXH14Lr",
  "key17": "26MjVeC9peRU1qoSAyRKumigV1ELRZne34jHZjeQ4Wun5B9jaXP3PS7NKtnEziPigJg9f41TUwgYM5tymuaHiDGS",
  "key18": "63niBeZksu5xKPHerZutN27VxTSbLtKPaEY41HUJtgoadvQLmasyAatDfj1zvycFoFH2e3hd8HpScg4MMJLTvEuz",
  "key19": "3m9v2qvJrikuqSfidzbZR4hKhPp4SgfYZFUWtkThKH92T6t39oGQ5nZQTaF8ZM2NMb5VJz6amC1Xw8EfBKHogvfu",
  "key20": "3h4TgM6nBV8MwRdJQZXvkgQCttU9oT3bebQSLSzYWAEExbhQ59p2mXaKL2wfyho7DQWVGLP4J4njgL9RC2RKwuBP",
  "key21": "2uUarturkhueJEVd7t9JyvZRNYEjzpsepvTj8ujQqbK8GaYA2NXRzQVMiRP9c8VZPqubbquANSHpSxjUgxqHpiqt",
  "key22": "2pjJ8cMbXBKBzmD1357ebnxVcCUNqSoXxFgSELy9qpjWTcBRZmWvbH1zZWzCitVif4iYVnyV3iAEqjnbg8RdeEwL",
  "key23": "5AKLgvnahq8rrSFDwWEm98eUxHWFJxPrJGzWnztK8j8da3RwnKBRK8L5XHWCNGsfT22UL96XTvqkCDQgPCXJgkzq",
  "key24": "3A7ALooXcowxePwHaa3GnuRL4VMktbzbpcyUct1dwVYqauWrsHh2ianosUb1MCeSWkFzYy7fD3Wh4DiqvQBfavTZ",
  "key25": "382gBApBpgKBsLnSutYE9hPMj6MHeAwNjxzXNBCSm2R43Y8bxo7nZak3Ce47TfCAqiP8dqXwzoA8HmJjwrdWf3bL",
  "key26": "2zJ18HjHo7Y675AVtn1kkcptCVrTKigESCC3rVh9mMaKw7nfwPpzFgcybS5vUMYEttCoQidyEM8NcSWqB7cWFaje",
  "key27": "Q52UDwr1guZJcCVeHPaeDy3szdH38sXCZo2LamW9YZRXBaKh6bik4sKVjkwz1XadCtt5xJNWVZ21QQk2mp9kQq9",
  "key28": "3FAqN9xEpntTVXKPKm5ntTcqM5syycZg5LTnPDrwx6GrbiRtgASCGjHa6vRft7tCfG13PUsfwYwLvyJtvmFmmA4j",
  "key29": "3JcC7nhx1jDXTgNYGBt1Sjk6ZTFHEiamUPw2wGVqfGnqJ6HaULQWDm5XC17oj9UnNzPD8QD7tcj2h7EjtUhDvimk"
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
