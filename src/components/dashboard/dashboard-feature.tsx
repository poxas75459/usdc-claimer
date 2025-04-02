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
    "35jskSD1qxwDj5uokzszjZMjUWu3sELsib7AsXdCTtwtQd5w64YAJjia8xVPj3S3nskYmmN9aVMSD7Qqut8B7zuK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NHv6PmuxQYDvVWxAu2GZuc56KZ7A6EzCa2wEcEcp1FzbLbiRYpfbSXfoH6yDsgbFqg836Qqge2seGu8RT9eefR5",
  "key1": "3LxnxXz1pa9swxgbFTzmwfLYRdWKC4ofXZ45LQnj55ooCafZYj3DMH2Gay7wbrUUJJ3c1cfiwVUZ8R5ptfZUpLXQ",
  "key2": "36cVq3vBi2md8HerGyUwPV1Lt8tujtVo8oHQErzPTUG3cFguJ3e7zgRdGitTFPoYjvqN2Mn6qgFMQ95kW1w1We15",
  "key3": "36aAPkz2FqW9JVZq3WKM36zsmZqu1fm9ufaSw2W1UDWkTb28FdLThNt4GQpnt1WpNGdgi2DRAjU1uA2meAjZjNnT",
  "key4": "3cS3t4xPWBF2GFN5vDewwi7RY2uokpQYpm2nXQ48nzyZuUcQfeG69Dx97pUx8f1yFUyJ3pmCtuNLHX6xvrf6NPz3",
  "key5": "3pTPSqBSqPMaHFPVMuLJYf97D6giF2NH36d2gCYcUVWb9eHNfQgwUKCUFeNQL6UZ58ksyP7SRPmd7BM9Tsiqnywt",
  "key6": "4HAyrUvY1sHtX89BCzbJw4scqzyUozThzpepy13NUcKmub6UK18C9HrtMuSRLUHfsqNUdTCFXJsdbY4A1jwwiHeL",
  "key7": "4mkWhYuRihpeChLVHkKSKQqNH8xnFM18XHkK1HLRL2Rx4yJ8q4Y9e3Ungi7TXyv7JtJPgX4ofpi9W1dc5STK3Nam",
  "key8": "5YcHNRQo3fw58pyikEtvvaUuY3GZ1JbY5UYdapSvq2QkugSxKUDkGeKL4RxeU5PeXZNfsDvKJaXVG4YRjkBNrMH4",
  "key9": "evsEJXTw7Z2kb9SUSmeCmiyANeVN3LwMWSZjvJPqYTRWjYRoiKeogwYxqxQDAmf4XsqVzQdyLaHUfxM1yExUhfj",
  "key10": "2BBusu9pj4dac8YjUje9LFyDrEJKfH97kXJtG1XeEXdNXxho3rdo2cMUDMXridX9PE2KG9VyXAkvjJ131cUm2ZgV",
  "key11": "gL7p3EFtHBFUh9rDMMNHqw697MXJfydrg53casDjde5WuM23e9fbYJA6guWKZ3g1Jbo54RGdtCywVje8Hr1Y1sh",
  "key12": "5xezxjAUw6i1LunhM7riyHoiBj2qZWUFzoDyXidgNiJ8Ue33UibB1eiXX9sQVtAPFbjvdCUuEBoXX2tbWR84ZMrT",
  "key13": "4CRJG85vUWCQwTpPQpRCBTtkEV7E5ExcSNEjf71ag6moLaDkkBP5C2bpPYzk9A3tJvA5trmuuMPoWrQRckBPuBpM",
  "key14": "4KLYmZL2pK6MnSkJ7ZtSo9UWJcFiFonuTgKTQiQkBQoJpVSAeD8sTL33N8ym1z32tHt6St7qAcQMHuAG3FRDZWPh",
  "key15": "XHckcUa2FvbEFwrG6urXy8dz446AqCkf9fjQFZ45PD6Lx5bcQ2a6vkkzizjg9ChjD2NSwFvp9JHjJLhXMKwKL1n",
  "key16": "MZPYhQYHjytsM7tcLw1BYA2bLHQo9BGxJEVgWJdxjVp43un4DRrg1155Xbuv8UdUFda9y45VcpteRifrwwUpVPm",
  "key17": "2uNVHEd5B1a8eXW9Qqc28XrPDZiP8w7DpXVz6bxmG3TEiBjhbnMCj2w8rheUPXWchJLfBn6j8y3oZfLDTznhi8Wk",
  "key18": "3XAheBu5V4kpjQSU1LboDefePnUk1vLyzFEqv3qD9Hui9ZsfReoyjvB7uooMCZYc8EWwkAH1nxAtGAqzD2P6HjiZ",
  "key19": "c5P2CS6hKLxZkrsfMUWpEXx3Rzu8o9HXUXDJriCvg1txSoQxKG3gdLcmSrekyyTjmcjDx3thmDqM5PorN3mCZsV",
  "key20": "3CsVd6NHXRCahynbF1PSpu1oa2dET6c7miuWGQYX5NLC5Fw1qZTbrxFqqCEyYenemv9NCpieRedjqdxx1KHa3aPm",
  "key21": "43eCCVsQaR9JYykYzst2jKPWY7sma1NktArRYEt51p4ST3MKLWKWDzDV3hRoNfbQN55vfVjA8VWcevBnsHt5T6a",
  "key22": "kxfRFbguBpW8xidAsMHZn8YmEoXuqyCCt1Ma1kKHRo27gKJKSGCmwFu43S9rBXckA8Ywg6CfdWAfHncpFYVP5ek",
  "key23": "2NYJs8TFFc4xsz8gGUyMLy2e3dipBd74EgX9Mxmoj9tqEvvtgAkBrj2pnAe4iuNzQwPSfaZJGTMY77gHPShrSfQT",
  "key24": "5Rkgwtq77tG8uHhbwAVmVVDBvEDrh4JixxAbKaFvnCQGEqJdAiNeTgMNEQxEEVHWbKa81uF1Qz8Ts7CVXV1P75Xo",
  "key25": "5d9LRSceMcvHNLtepvi8B6UTtEqjsgU9iGJfQkvf6vPgT8fnPgmRLfXdJCDq7h9M6AELX8o2bqTpd61C37QY4z5f",
  "key26": "3UNo93JLZFW8kPt2GC254BmdmMUR7jCUHYvrDkTq7b9BNSrdvNfiXJikb2Qqs5q49uCe8gZvcySQ3bE2XG4of7yA",
  "key27": "4AkEUxd3UMPENL69CXQqZseZF1TMsXafkmPPKgZyWkGBXnz2SDnf9tBqcCg3hozF8wBTFTGEsGkuWvAeYdXBLy9X",
  "key28": "5knW5WX9A2vAPoncWTe86PubmNvCQ9FZHgSo29DmjhWAiCmVUPVANeUVRYH8niHKZacj5qCGKUWGMJSRrqo7V67W",
  "key29": "3VNUBQ6kqoHJguusrqWfSxMSBUDaednakKkGxRiTKTeiTFYyNn5SVpMr9rjmsmC5mwxkTzsT4szb4oKUC4HYRA1Q",
  "key30": "AvHy9spthEqQLuoaL9vSNRiHrMnGoftEe9TRfQW2WHzjsDnk7xnNfDCyVJF1FpttKs8bRDsq1RhrTps37BEqx9a",
  "key31": "5JPz5mZSHJ2CS5cNsRFnp2MspGQMCsnmYhqjDUwLZScmx5bSVY6oHvEp1iEZGbFu357BsQaGoAcQFkyrH8xUAB6m",
  "key32": "5t2vmCYrxR2Rjk8aV74KJYCth5k8X6rhgqfW6TrsgGtD2KmCDcjrXrCMG3v2EeZU6S2Je5jXruehT5tfBdLQiq6e",
  "key33": "64pw8AnXrZTr2X4s73Fm54L3AY6GEiHqVSeZjEZ26Qi3zZSXWios4BGeNKjp8gjEB87d1Jhh7uZnd3fFNdZSZPaD",
  "key34": "4FGNEx1muLfBNvWmCTdSh6wvb48ogv7xJogNF9uJ2BEYNMQnppZeifAdbffHUFQG2pCDoHQFgR2B1i2cchNYj9SU",
  "key35": "3L7L6HM1rrZ38EFEzNK46dWjxC9qzw5JkNQtPUWbCbdjFtLc5Bw3gnDpS7dMh6xJZ9wxBLta9NFCDfyjfJGoqwWx",
  "key36": "5E64cUFatJMVFPRhXj38ngUNwBy8R7Yx9P7dL3QS2YpgruNBL1GX8n4wSv4vY19DvviLBGVmahHfQmXEqYofjxBE",
  "key37": "2SsegjrkbbteMi5q219pHsYVPtZamxTHAY5SuwcEJZsQiRUAjZN1zgXzF1bFuyZ4T24cGDZ246L6jkDinrP8r4Ev",
  "key38": "e6dKkqg7DuJ4pjR45DsNTBsyxno6fgYjvd9CrxcKzBDmuApDMDR6yLQ8piKbAaG3x7wUifKr9XBg4EZ4Gd4ecaN",
  "key39": "4Xky5iCDoQv2gRDk1xesyhe6ypnAF7FEWNvmKbxTRVfqxZewqiSZRcKhQKou9fu6y1cfMkRDdK6dySLPHYKAK5ga",
  "key40": "3wqMxGCZEo6cu7TfwhPQaJhr31o43dVz5zyDnTzXhuGstb58ZQp9cuVfqEVJcZPLeyNZHyJVDx78SyqLNGHjNRob",
  "key41": "5f95FTDreUagytoN1B5BKvzsSrJtDD6sHM4oyhMAJKtbuMvEtcphd2UW68aZ7FRHhYBJsAwwLAt7nGdd9pkEHiQp",
  "key42": "3HudXjfjYHfde9xDn3mqtPWU9gQxyREvTa5sNB5P9Kb22H39LQgub3aiwMbx8cbfaRLrybbdFthVjbWDrVh46n36",
  "key43": "5QYZf7HzvcWsuX37UeVDJpHAXMWtDUgL4sd2FLtnpt2zduuwRGargbwFgaYqnsktREteDMr5uAP95fY8t4k6AC2w",
  "key44": "4C8rfY13uhupnuWtsoz5K6BApp6q26Cs4axQvN3mfydiJQa7U5rJ1NU2EYx6FL72humzGGmRu3eXBCEMQjt3wHfg",
  "key45": "54vtv7vojNSNhSBWLKoA4UaGkQH49FbCqjAtMmxfbZUnoKxbPtHFfNt9tK3FD9BFr3jB6aKyX9JD9HoYNY85BEPn",
  "key46": "4C5BnZ6LJNx2RgvkHiY2rRN1pFKQaYcUjnEzEwMX8YLj42B8xHvAU9WeLViwYLtiCueXpmzh2NgbGxVf8HQCvULz",
  "key47": "2UmRUqi5xFSqRuBnMREPQWAt63126DH5DjvLiYsgfVgRqLKvNtN5SSH9GmdL6EgmZYDbKSR9Nbz4RBRQxer2qWeb",
  "key48": "4FMatNjzpPRpfe2JNtS7UkucBPXBfmpPruK8T1byUfaY7Av5LWXfiBuarz9r2o8kEZXYpHcCk6tUYxmLbW5YPjg3"
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
