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
    "3AR1pvDvTtfAUpAprUh9ScV7zS5wZfEWuVHa6efsTF3mtMNfYWbw94fUvvWQee8EP4a2KXS5tfNifz973XQpUVM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "223tmaQ5hVMdjv82voqswkgdq4dkEanCd3ZWMsci1L7p52aQWmhgZr3VTbiQGo9pKDRzFnTsetb9KWwHFqsJTcm9",
  "key1": "XwCoG4obEpLEqZe9wBcsguHipBeSx62mo7sufa3XHHCNGWcujaehuAcfX7tPEMew6bXKDh5JhifS1XKRyd2acCJ",
  "key2": "5kMJ8xzPTx9V1hyn6t5JRgqpbGyxHRwR1cZhaw8Uyfm1Ph49eyTfHeJq7JNXftd9bhYkSjQrGeqdcquhhyvv9KM8",
  "key3": "4epZ45qxawJWwFZCvca3WWkeFSvRFHoxgAYqG5UpwnKppEiXrsA5xD4SMWZmJx4G63gKah6PcwjURw5KmsDu7SZD",
  "key4": "5hi64xw5zBHmraiZjE69BHNuuP9KavCJjnviqbmE6CUZXhzuJNnajQF7FBYFm1uvAhRS6WZyFZX3zs91AHvYX9Eq",
  "key5": "pZ6SrmJPM2bsmbbh69GsFUFfaFfCrMvjgpFtf7ZJXGRJTDHzfW5fpAyREPSjcWqTfp4cagAqcedvUT8DAjqStrK",
  "key6": "2myh8E49Pb9emmizbGqFrBQY9F1SWX3zJRVMTFbeAWz18RLSB7E1gyP3dsFMLKk6Ta5qiubhecSyN8yXtkTJXhmU",
  "key7": "4GDojeY2cpdxJ2cd1RAzrQqaNiDrep6LP9D9qqaeTKEmYwK6VaNSgppUogNzPefA6xNBUuFRZwTuy2bzGMSUAzV7",
  "key8": "4vZmwpPSMYzH9cYEbEXCsY8jETn1S9uhnvC9fA7jqdzKtUiob5qwMZXNbmpLskX8dAHPPjEfwzBheXhTVGoK7QaF",
  "key9": "2qzPgxtc443HoAjjn1LzHnNXUWVmzPcPgMP7fj9fpG8UycnDiiuZ52NG5iLuE6LRtH9cHvwKPNgMBtAA7wVGRYqr",
  "key10": "4Mfa3RQz6KYuEQq1LbSxpZ8erz7sLCnr1TNjAxbdWQncnsZs48v6XArRBvH5ZmgxufSowGU3BmZmKqsrwamRcQXV",
  "key11": "2nKhasPXqnsqhMUiwQLk1oebZFwwL2jWSNFDZq6rzd8Dd6xL8BTe2kB5xZvcYMw25zaBinbRDk2A7hpY3cRXjfSD",
  "key12": "43VYhG8yH4YnZuZ55jogQh9hJ9HDVQNchYwMkcLsoaJQEQ6C2wyU26nLBZSZDcEmjK7GgX3wgb8QFqZ9UNBt8bzm",
  "key13": "5ejdxfFAUq5yDjaVDQkjDXUdYevfwE1uhwUZCnTU9aaqXwGadEGxaTNZeJBgE4G8YgsDfbRvWDRLurFFqYUTHoP5",
  "key14": "2sXNEiPEttdALQ3rnr3CtoRAojsTe6WcX9WJMJ9BRSiXyT5JF26ANtDVtvvWfZssYk1kzKhJaykrxX8jw4H9k8Z1",
  "key15": "4ybzEse1rjDzFt8tBN3tchwSChCSM2RJvvVo1312mzGeFyiWWzKk4gPu3EmiiKwSPtt2NxH7UgDCYMvH8FGT7vpS",
  "key16": "5CiRTu6kQpc3hcVFujch4J7YogDFmK3nnoHkqyXqQ4p1rREqonDtU451TKDgmWUp8bYoUTMdf94z4vDJbWSpUCVr",
  "key17": "5QvjmVqNnrLxAKSaHTciHtDf1VS7XsJyuDrz3s4b5S3qgUWnwTCiDsmLXyjig8giGEhu8xZZ8Z3VieHNpDGebW9R",
  "key18": "2vHg2bYbGVZGrL5BUtsKZYiv9XQuDof6uoVtBqHrCfFAkKpu7NAFE3oY2uT68e2rqYzuRKTYxrxLixeHA2B21tnx",
  "key19": "4QvitFRSx71LJFYEFNucDoc3e3xnr8ArhBr18wn71SCFGdEwWP3vHBRneZng3RfoAPrFLJ3fcJUsBfpXmTvn6WpA",
  "key20": "4hM2JXWVMSvE26aeh4PgFea1ABT9vCHVTMgRZPF3z1rgEcjiagMVtL8oPxB5McpUGiEtvRLGhbheMNMB4ckhrkKC",
  "key21": "5faUbKePta1gnXSfVaafwFwktAEc8zsCR5FQsNte9yww4Y25QykxQzUho1Et7JRZaUB7WDfJZXSqS5jPgDJJA3mW",
  "key22": "JrC4swQ9gYnCWjvVKxXKfbDvgbqwAEC4xzVf3RK6463wezgEyzPZtgLp75mEfwevLfjU5uSCAewETsfCKVseMdw",
  "key23": "5gF19uqfb5HLJAumUsrKpMvVQoy5AAMdhAWjpVidx6sqTEXR2GAVMcWynuK8pnHhBhPnQ5VXbQTZ3wv8r8qg7bf4",
  "key24": "4noS2zCBqHhX7vZWKGfm1k4FKNGm5X7At5my41Re4YH8aQXhakm4cYzYsQXRgUbze7zmfesRfmrZ7R9yKRva8qeA",
  "key25": "3UGTtqPiZ5uyrJwV3SkW3qXzPyc7HP1aU8aDREaKv1ME8dkF1UnK35B8GhRLTpxo5xsxvANNBwKXoZ8oR4JfHLqk",
  "key26": "2oeUxDYZsoVr3wP6aQPRrfAoeCdbaFP97esmu4a5WvG4kfv7mWAZWQPwKzqDZDbMbykno5S9HG7wZR4FeVGmgsD8",
  "key27": "58mSeHjTqijSM8A4hXNk2ZaYLjDbvqxGgMiBvz6dGXRbk9vuSdGbahisubYHmCBXmqXqX4NNabgcAwDgvp3ftB6x",
  "key28": "4zw9aw2tLZojpzLKdB92rkH2tA48Qzuc6QqRNtnQ1YgeReEaD1f2fHfQXhcYG1SFF4MrPyaPyRtMwxbCzjrzFygJ",
  "key29": "SkndFeek841jgMdqRmrdwscLFWA5FPcPHomGSBUR53rdpTfmtRsqTpeaqtySP1re6pDJ5AcRacxy29uMdR3yBcy",
  "key30": "5oLSg2jc6ywnD36kLuEtYgeYNt1PKbGXCxj9Htkf9wwVEuRAkaUHEJAuQcuc5pvEpMo7Cjbm8nnnV96mj2oQMgnW",
  "key31": "5HdQgZwaJWo2eJiYHgCWB6HgU7CXzS3y6TuXEDa8yNppyHY3Qtk2kJsoA8XuCBiF1MyzD8zUuoxoF7Gu8zFomRMi",
  "key32": "4wPs4SPs8ShrKfymJti8dPhjkipxBEgM2ifcGxkX9FP5X45GD99vtsB9fpY9sTtrseDWT2CjKHCnj1pvMErr8WUu",
  "key33": "2sQUnEdjUE48EPVCEv7d3yodEZ9ej6tfRXjWYVUhzytZRtG7QZFF1UD2EXgax8kHwLnNsrYNSZ5mTLhDzbHhSLuz",
  "key34": "63Ranh3ZDFYqi6Nza1Euxp5E2U2ytY34QyU36VXXo7zAjgUt112jEAp1zz7xq35cx2ECXsAFKt9JatANEbXQDtXc",
  "key35": "3Vvr3LibgR8Fx5gf83rKCt5BMi5db8Y5AEWLJReGgkv8EVjafDL1TrGwk8uZXriywHWFhhm2DtS4D7oRDARyEsgC",
  "key36": "4QWU96J1pY75mrw5jLfuB1K9eFpZZfLcznjQwHzZFiuuEcVs3Ybta2CEJRWHqaJpPRLG7YySqQvpHSghjtJNsshn"
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
