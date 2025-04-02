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
    "33u86zbsuw4TuavHq2cDPP7ypZuWB1zmwUqAnvPzEiQV2Gox8mBfaHwDKsdx9NcaZtvoh1TkSopZmD7L18zsPZbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h1jzDVWFEkZpwLaTGSvt7pLxHidVqoNpEPMYW4Wc42oNZBu6RuXNnBWYmihfYfnTAHj9RgUyFyqQkZxjZFH5juV",
  "key1": "3W1VtRnHCqhuXDBRYnKcRTKVBCLgaJFLH5rGdCVgiyyZmfntsAkZHRKjt6UBwg5ovCh7VxyUrhXd2W3EfCdjwHaw",
  "key2": "2XBrzUtZLYp6bgeMzpSXtTixqdjTuNLQVidLsaVcRPbNd8dswKmLBAtBnqa52S6fkenJLeUvRYCfDyjqMgLjTv8X",
  "key3": "5RHJo3CjtbiNtwxA4aizBgTDY7gB2FmVFbnsEzCirSLYjdu5ZMFyVbjjmVT584wnbt43GTNiS34PCWwT5RZbQ1Ea",
  "key4": "4fmmrjZLu8PtyaEipwAnmyyEJ6U4ioZCWQeqkZWG7zL3W6KmFXAKjXPHbu9VSerwrQwhQVwJa6ceq19oktX1hMpi",
  "key5": "67WcgHwruf96UeahumpiYpDwJxVcxhLAhNdE26GmQL7Yj672BR9UTc4eAj3xFxBzLGQuG5tsPPkdyxbJkwka9YoT",
  "key6": "ykPpXzVbEqYWDre4JFH4Q8k9wJyb7yVjBBjKWngFUor2E5tV7GU8jsjPsk8SpFtsMzRmVgwn8p8XtTFZhbxsRnj",
  "key7": "5eynr21WM4cYPpsUFiAaKr7oKZzfRkPHdmy2rhkoHtHkijVqGxJAk5moARcsjaZKrCfVjAkuRAzXemaBNXsNYX8w",
  "key8": "FhMgtnp8CA2TwnpqP2RWBiQKHKvz6ZiFAUmurEzbFPzCrWgKRUCK1ryTZKh9Ld9yrakfue5uMFq9e7LEYYmdoQd",
  "key9": "3mcaJGuiGvj5SMv7yof1g7rSTEhHrQD7r5dbA47L4xxJR4w1z4WVYA7Ps7zodQJDvYDRtB7PxwwWiNvUbuVXbxB9",
  "key10": "35ikgFVtH7FUGmxTFQTdd1qN2mJp2K6NgKB2HbMaH5N4XBv1LgyLE8AHXn7fG4WCdyiSiWerQBFq9D8vz3GSXdJ",
  "key11": "AVzBp6eYMiXQuAsG93fq7Jk6Jh56i9uDFtC6KCM9RkZg9RrEja7yf73Q14TGTnZrwxzXBH5mvoNGH4QzHyfukud",
  "key12": "2pGu6rJMAaonMRZvh1sWbAjhCd6Ub4g7E8gUbZ7d61EXPCnFcvJw3zikBeBrvDvEWxx5HvbfbwfhC5E2cYHsgQkb",
  "key13": "2tNrKWkTr1XyNDPzKjAjDTBHULfCyKYEsyEGnNW8ggypz1wDBUsdMjavH1ujLSdeFeeU7Vuq2urdn9cLpWcgrFn5",
  "key14": "28NRfSJurrZsq7Q2XvoDv14bzyFFcNtkrZvPoRZKWQp9ZwCsE9rgGKV9MgmZzfDVpKDNALiV18qZ3w7goU6ohqnn",
  "key15": "5GeaL9WdEVpC77xrvKopAcus9kSQoXrDbH9zkh7QHnmdNPApFsYZypQSGUBHAQyTa363qwnGrQ4KT1PEnfdvPCFn",
  "key16": "4YnMGFQZJz77qPNajRPrbKdRzS8a3HztVKrgF8SvBC5KYg1v9EaduSgy5qnjMtpYSbrc48XhYfdm4cGCHWwrHzSX",
  "key17": "3tz4P6USYWZ1PWpAs5ZLwH8MB7VuSHAo7hdfPSGjQqiwrj834FZ3GMH9zhRw125x8Zy2VaQjZaFSmd2hS5GVGMLA",
  "key18": "2zgH7nQU419MErcgxNLoMWpBYKU1ZTVXdWDpYssmtuMM2sumvR4M74oFwSB9bPe8c6aWr8tHQtFyGTCfMGdDJ1x6",
  "key19": "59TmVGpv9P5KEf9pVWDAxRmVYf4t34BZnnJPN57vRtedcQxV9CzikYwpXwqA7ZtsgPw8zBMJJeGsGRtMHbwCaQqi",
  "key20": "iotimC4mXQaAeH4xL79Xuxm6Bt5LbebsXfJezuvhLFYn8aRNyDrN2nD5ZDGvVpuuXd9oW9f1TABucMgy5aJutgG",
  "key21": "6mJE7M4BA8bFrRj829q93EZZbFBNuGnUPMd7BRbFzxdmEudwoWevEdoAcjcifZZyUqVsVPdGEuakcab9At4pPQP",
  "key22": "3py7X2GCWMBnR4oih8mP8dCp7wsfZV38j1bddXzpskjecfQXXMqizhUbLDcfPdeBAM1SrKpfa5Win6UgXdQg2b1e",
  "key23": "4dcqesEhR35dwDLwG1QEGQ4hiSJKuxHY3nb6yoWtkTuTeRXJNQRnSaz2iTKD7hfFtVmzgWiRWsGRWLSeHnjz1uvU",
  "key24": "43khAEQcGJrPpkhQAFaTWQuspnboRXKTqQe6mPDTVKPhFMYESwhTHWkZN3oq22cgivb8r7eCf9gVpqDRxMYF629c",
  "key25": "3JoF6eAcz8VgabTDr54dY3L7CbFAZsBFpBBMGBKrdDzBowiHQyoRgmfTb5mGtWajLjvYHcHNwy8RzAEyHbeTUroK"
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
