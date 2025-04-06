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
    "2W58VfS11yuKoKS8jxdDeby9fg1KkHBuxuXGG2TZ7t3iNny32tSNv4tia3P5PsJ9CEHSHCdWoSwjNL14pBQPTwKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QSW4wUeg8DQAhWpQRFwePniUWc6ZhfSCo5AiukKh5VT69FBRyAtA7D3nejoHYwMcBzreFv26FiCNGExTdBk2cAd",
  "key1": "3Sx29Cm17YsVrYKnEHkoCgbYqXJcDufG6rvRBhHWk39W2Xxo7sG9VgnopFJ4fSt72PDQDHfcAtgrRYgn5bJDn7A",
  "key2": "4qBoqhEpQe4EksSBQNBU822aDngfrWDHR5FZQ1ABxT59MNfPShW2t4hg6mJqLKPCLzptFtMyzSPA85HykQpKwLQZ",
  "key3": "3JrjYkeTmM84Wd1sybDwHRBBUXrSD2QJuLMmFSwa7EmGSs8sTw7edxFkwaJpLHo9JKVQQ1453e3t8YTxvzRZj68u",
  "key4": "9EJBWLP4rGNToxxtoxuxsk8z9QHaS8kaX9zsobNodA3QQaEhNm9TsmkpR1hYG1GQPhBrPTANYr8VTBUxy57F1WD",
  "key5": "5aLVQg4ZmPMdtdPwbL3tJreuieejR5Cd2UvAgFUVuZPHM6N5mgWu44bHp3VKyZoT2eNPpTPe78XgPjoMpC9j8EfE",
  "key6": "652zGSHmxwTe77qkCoUsJgqbBNUJ3VyzbwE1UJwiy6dHoUcqKyFEvitFA4rpFSamWhZS2mhk8PMBZFnBPnmqVxb",
  "key7": "vQ4zZZNFmfUe28wKBLs4kx7nwEyf1iZhknsc4Z4fjKnmev6PQEXH6yMLN3B6hdPJn3GnNVaXo9EWatr2T5ZTQsw",
  "key8": "4Z7n9CvjJCd13FkqG9EuijmBxXPFLFszM2rNtvB5zvZGEV9TqifBGqYV3aXHoEa5saA2p7i5e2PnGGsYfBPtWjWp",
  "key9": "LtnDYZh6kWS9t66gY8rCJhHv94AFC8nGHmeZoFy6DMrc5nmgFX7ZuU6RyEX3a4HEhwCfHZjegi78gzJY1VqQB3N",
  "key10": "5pJeAB3aiS16Pyxe4BcAiFsghsPoUPofMUiNt76AhhQWG4enve53EH7qSWxzqvFL12VVU1ZjaorpxHGCxjdLGF1F",
  "key11": "5sAPYuQTaYSvv1wCaTmnMFKsnvYzQhgBjaGKGUJmUWRHiNvuAyudRZCrwyzYjW75LGgwD58i3meZdMXHa5AsCd6B",
  "key12": "2PbRAaCXHRZtSkBJ61ZfJKZgY4ix6BU5HmjYhG8meXtUaFLGiA1yZ9sRiAHJr21Q27nA5F4i98KV3eTGbKoAkgMC",
  "key13": "xSBpfKWymsgY1kFpaFGjEWREyUorpTPeSmahrLQyjsSHbX6MfYBZcy7zh2C8cmTD2xqRX44aZH4tvUu1x9dGKzj",
  "key14": "2psuyoKE6dyPsFfpsPTdzmEc7mWVYXHEmRUewmn2GnbeHmMdM7QM8g34fXFjR2add4BK6YY9S8RsPNPCH9xMj3mN",
  "key15": "7Sqo4bengK6NNPoTTAosFm1Hu4admCCjstNRZqMJb2euhuMsBZSEqrkexwdXDuY9X6WbfPwVXHfinEji7bQsutL",
  "key16": "5CgGUmGW5aMaKoTvRqzwPgmb8YnGN72LKPyrMQmSq9qwfMJdh4PRCbtLjaGo9MZxdLfSmBZMh9bA3gFuXaaWebp3",
  "key17": "1WNUAsfavKLGT85UXbGtA6Q2pcZL4UiiQ2fKtgU4wTBBxpczNVFq2GAdHTiRe9xTvuFLcTWPLGdoFVEuo1pTeft",
  "key18": "xfB4YLALcZS8iefeEFnZEuhnUuCKAjbbJDYFyc5AzeNKw8c1Faueb3To68kzgAw7EJbaTeTSzMRtZQh1RxqHiy6",
  "key19": "5PXvby2rsfRMDndca1WonY3setH1MeZJwTgmtKvCHPTrCAoA6xAKH18A6cieTqsMQeMSbokZaRrGwAfuQtNhHmd2",
  "key20": "4tYZDtGzqEi2V89kjYFjZorCE1GYF78DU3mSBVfH5GKj1Ugg4H989zRSFXpFSXRrNpkJY13kDbGC4pqJJNmm91ef",
  "key21": "3jDaQhufNSRhQDJUkfqCV8jjWmKw7rj4ibKV1aDq49nFbhM7p6apTfHCZsKX3MEzsJ5wxCscifvwCipihKa5sHE2",
  "key22": "3vnQMpsuYmZiGZCETmmZRiBznJuE5hgKBNB3Pk1j3eMJf6GCGkNxqMmzMpSe2LFKWakYn6DHQpj2iCNo4e2xtdoy",
  "key23": "5EqY9i8qaQbMRkSTdLTR2xvGqby92DkV9NW9UAeDrgKdK4noPRcpQDVPVcDLBET6bbxwi6D5ufy2CFv61nHn1k3d",
  "key24": "4Fyjgaw2babXvscB2cWa2N1fWdLohb98EH8xX23gEHeXZYzYCgvQMDMfWRd8dBmxbZDMQpM4VUjVh4N2kH8fhbXp",
  "key25": "2mMWh8eNKZn87646TC3qRhSJEvWa7y9w518x22fLW3nBb4jm9EVvRq7fqVgNtuta88haGhwvfj6HnU7hGcEoXiTU",
  "key26": "41GtEw4Uc7TW53yAqWPAWM3F2HnuBwPiuZEmA8ynoABvjFJiS8XFNfDr6RQZQixKhpEyaG5QTmru3wwS93q9bQTt",
  "key27": "fYrX74LPWRLa5dqtaa1ta6Q2rP6z6G2GoDhRJ3uEtBixCT7TgMaLgpjwHUsJg9KMwKLJGGvYzqJpruRQ2bTvbPG",
  "key28": "3hYJmMH6keV7ARgrbmsh8g6kM8tF5yjHrwpYU4MyLfpQzJwJkTTzVxC6fRTcsN2zdnZA9yNAjtHscfD4e2x5nsJQ",
  "key29": "5ZeZYBiSmLcQeQk5cTMwQtos9Ke2QT94cDyep4pcaZfQ2KQEZ6jD2EcFG4oHwfU265en4kcNJvgXR7mUCkFUXWsb",
  "key30": "45Nydz1ZY2xrbG3u4JXJDSCtPnjAv9wGmpRiohfHgprXZUyWF3wtkKTCVojXcCVkgJoSRE7NWb24qvrVtrkxQST5"
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
