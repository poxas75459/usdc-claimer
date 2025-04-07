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
    "5ApqYHwFc1vUrvwVRgNNxp3Rx9jTswUzxPsgkB5EXA8fPBhjH4PpZNLh6BHygNQ2pDp81zSW4siZKzskWKYTk64A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uuDBUcaFuSbXcxPJsH1rmV2DsWbcfQBXxYjVrKhegkKMgSLfVXT3pLetebqJAZ6ytM38rQLf8ubBn13EfJQ6xuq",
  "key1": "5HSyRjVdSWTuHJmScWjmMZ7v9iXAyBGRUyCgVRywPUo7DZTLaCo9aPSTpyCCubKRxwhjQxuChoB6bA5LNq38egdd",
  "key2": "vVTPjudLaj7v7EAjufGGyaGcK7865ARPnkxffHFP6x1JcYZpZVarVXufYa5tDHqUzVJwdpnQu3kJB2jsMxq2wdx",
  "key3": "gSHoL6cfYgsce4nmyMD5Xstq1tw64zyV5h3aRQbw4zTw3T3JsZA7dYUjBHz9cAQhnNHZcBcAHsk4Rikayobx88R",
  "key4": "52u7L7NfLKtTaYFrxzFKpHsNEynY9HN43mUzb1iC8fBWYAvXwem5d5p1wuhZfraAynNT7UVyd7xvctEfAFHGd7zh",
  "key5": "3Kmhqn9uhe6AB4KRudPhAkDjKJ2q1dB2DNjsUfjN9PpX5yuLJG2NZuNgaWGPb2SkPBLjKQKptjWUVQVeZerw3XaG",
  "key6": "4EgZjYFhRxz76dY6ownK7mviMHtXUCChbzGhfSVv5VqnLqe5UytevbSsTTgoezVmwpZXFpnq9WTZBUgo1qq3enNX",
  "key7": "3fJKwayBcrWAPdC363wWogWVnqZmYx5XVW4PQXqtjnGaXrcdWJP2TfCteBd37xQ2VGKMzD4gN2ZHoJuT95PSq9SY",
  "key8": "5dExH9bMMpP9iL6hx38vwEEdpyUsfKGU9BYdjnBoezoKYVMF4wEdftPTqDS9PLHWFtpd1xETB6ENtx8AMKCPfoXC",
  "key9": "3tYnbukHToSFRLjF3wQpJj8cMdvRgF7zmebXrgBxFkgazpAxQS1TU5xgTkNhScFcwHUjFYyQKBsUJziUzG5wnWdb",
  "key10": "woHEWbU3nV7QBS3vQomL327S7dHk7Jc8TA6yfEVixFqWLCt6ffu56DbfjDzM6vcgMjTBED6DqHCxWoYakU2iy7B",
  "key11": "5nYeVdnKhzwW7DKSiRmbTKA9MkYhN6pDYAnUA8b132x4VfnGqn278QS6GkjeD2Jr7XRNn4VgLtPLFaAXU1HVKcmG",
  "key12": "4SMazi13qpa9qUCXapXiKYtwFvsfAhYSTZurSqfQCTJrSAcqdocLMXkZuG4u73Yoty12ESjQ5yKnUJndugM82dnS",
  "key13": "4BZ5CXxQmDfVk8arFYriB816KFwZbtrcdk5XfHEQXEPr33FeKwXq55KTAS4zxJaBnahtyJKKnais12QaHzw4nqVZ",
  "key14": "5TcP3R2bb7HujACvCmfgc53rR2QNRVUrLoAskvZL84K9rqYR1JtBJyBM7AiBpwoMazHMFEjgvxbAKr6nJnMCnZSf",
  "key15": "WssJw16eU4AZyDp453BU59QeWGSecNtqhs6AM1Pw9mP1zXXVKWaR9ADiCRttjM9xb9RErC9Y9i7Lqm3JrTpPiPx",
  "key16": "4s92XR7YzhJ5U2bCqutmmyDvddRXHusW2waDnnTdWPWsEWdwrpY9FztvAu5cWEKRwqWzaVgdWMULqgU7FAy29ihM",
  "key17": "4Fuq3QCLHJvUjiVP8dLgLuWQpwER7uAHmS9tzMgQVzRWAGHbnRaWRVympDtkasTAQSMg8rsZBSdikXv5cw3ZY7ht",
  "key18": "4myZo33ZdAYP2tEbZ4L4FriPVbuQtniFSUUfXtURrn55jAMZBSd1oRLrwM61oSP4fjNUejVpn7HvkH3Xm6tTGyU2",
  "key19": "53vnA8oE6boVf6fmc7rLf9qjDCgCSDMyjt7p4qtgQvGUqw96wz1myZM2nxwCacA5xWccrMaHohtSnLToEQ3QKKjT",
  "key20": "45t7gpyhQhC8wUajEteC51XEdcTxSLkxRxnTq4C754ycrL18FmjamaTpQSCC6VWQ6GPRLEo8GE9Bj7FHehXBg4Yu",
  "key21": "54Qp1PPCc6eR6e9QbNainSKeEjr2sPTGGwwNSEvy85fW88xdvxc774reEg7iMX9CXAajNs1bPuHYQCrgHz5xuGWZ",
  "key22": "489WfoZ5i9NAzznMgZPPUELfKizEtVVb397i4L8ZaVoW5e8JDWHvLJCW2zs4MYt2rYACTKe9PuiXW1TwmsZEKkeM",
  "key23": "5d5AqWdq8xmsVjKUAXF6jXRDE6GQcB2zSzF2eSMQ7ESuSiemQeKmgHDP4uDfk5YMveCXN2pFL99BnwQq7LrFUB4n",
  "key24": "UTEdzP2SzQtptsK16QNeoGu16Uq5SAmpdSfn4NG9U8dH87X1oyY59wVwmRN1xXXdWA9n87LoJsogNY5amLp37NN",
  "key25": "5unUeAaQmfmXyQzpTag4tARiF7ydKzcUVrvPoSBRS98X2wmLo4wow3PVU9BMnco62uduEk2sAzJ1N5xH4rteJw16",
  "key26": "3zMxa4YcZw7gAawjzekGut1c38L1w2euzCp2K2BtZx4iabpUmLBSXoDCCejoSesLqKtFQaj1WqKDYdnnhZPwgcRK",
  "key27": "3j3ahWTk7QcPpcAuYiAhwJcWPGQ8UX6Yq4g1LNh4xPQT1Twi8hvq5mLcXttzxJh3CnNr6Xxaf6LsaBVZYtNCzKF2",
  "key28": "3gEyQjTtsotzFoNEBT28iSfd7DNGh2vHNctDEUz5EqTMNGD1Qe76qef5rwzePoo5E1s71YMakUD9qJeCQMe5cj6t",
  "key29": "bGxFLUoMSA5eHJGaW8GX8Uaj8GbHbTfzYcGHEbQHkHyFLsie9Htv5xdSbQbeuxgsy3Q1ZqGFTuidxMtBH9w3Jk2",
  "key30": "2r3yu6jQP4PPtNzCQGYFaNC9GkkHrFapM1uz2bv7SWcPaDvKPp7CXBhRJNV6dHexws5FWPJnawAutYdNj6ymSfvc",
  "key31": "3iKd7TGibpZgnAMsByJNkV6jwWdSMzSb79wEkVmvFLW1ZKgNqE7gk7aLsq6gTj4dqHZoce78ipvY23ZUjdBgRHPZ",
  "key32": "59fDgxyET1ssQGw6dTriRkMMFD4cohg7SfSzmyyHmtR56J7a2ZzyjZLHngSiL5QLkbXbzjUhaQTxXKGrtQntpx1H",
  "key33": "2FZujMtzxdEMemXhQ6m4NsMWQvBYih2ZCANmhpGdwvDnkTy4jARiAycieWSD69dY55TGR9BYP6FhgvynAY2qFZ9L",
  "key34": "3s2Qqu8i6nDbqaZEwhh5Q4bA4qwn4Xu4YmxAugB2YktM6bKUES6mpxX7oyWxQ14CzuNaXJRAVrGpXfhhZHwEqccR",
  "key35": "8BKyEqBVff98pXsHRjR6g4NQj955LmhG5DVxXUmQiKXJ14hZn53t7fXU5F6QBkfLTGD9VnGEDUweVfC4CcogCWe",
  "key36": "3zir5rkcXNfQJNKjDR9jbpA1udqsFCDAPCieyKmPc1DM1hSxY7gTMpFYDpdkg4qNsB6UoigMQfZQ1URFsfpwCS9m",
  "key37": "5Adq8iXfk3HeFB4ocMoscaskH2xzekB4Gc1konSNPYyNxRXpkwr2H8wac7hLU7tn2CiCE9Y4M3xqFvsxBVYTBfdM",
  "key38": "2N1YdFeYy5qP8a4rgWbi3WXMTCbKcQFoAeoL7Acprp6aTDRzrSk1aN7iGmVfwU29KRBik9fJJhCcCy38DCLgmkof",
  "key39": "vS4BFDsRsTrBbWB9KhQ8H1nfPk8AiJo797H8Pd795DMxGSL2iZtQMC2jTKgr6rWbtteoAGitkwgwjBGpSG1jKXj"
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
