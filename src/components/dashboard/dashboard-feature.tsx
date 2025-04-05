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
    "4yPo7bbP7MeEJ6bcX9WYn6gdEyu6NoyVZj9PKrCufU7auJZ8BqNiqcafu3iUPsofAYFw1xZ8cYSNAQCaKN6V6A1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54qJMvG5TanYWHwixeLzJDqiqvRmc846xwLkLCmFAtj9D7qTm629BBi7yJx9B6dYHq5oi6xFiA6ouf6rHerxAZhV",
  "key1": "2GAKmspj2L9LEkeLvP8AyKh3MrG58hnUPDVBwBZkPVAcGc7JDBMeoPpp6oY5u49hrLy8zwf1VyUBsMdwwohzmPwR",
  "key2": "4gvBS1mW5kQzoDaBr6aPTaJX9LVE2t2DgXrxi5oovgw5wN9qGQQfN6reDPzoqSaTCMT9zjpWbjDdjGYwueKQDfLG",
  "key3": "3JwA6SLdzk18sXR5NaxK3KtVsKDQN3rzBJLVBykm2JuJP5SpxMx7gCGK11Em2qJu94n9Zou7VeNtGUPkYPFPVzm9",
  "key4": "3gWsXsgLro9tH68HYKoMBpCPvXREeP9V5JnD9Z41ew49K15LvZJhBeedHvKGBxeUcnGA86XqDmA4VcfiPcV8hBkg",
  "key5": "3Rw7kcpDHCmLxeS4a927JM29hgBpaCRScVPex5hpcyckQW45HyNrtAYxrCxGm37V3gC5y7RDWeSFM4RSPVLtAxxi",
  "key6": "5pgwooF5uiftL8TfxTT9Yb5CLZWrumtEYLB5Q5MXPC9mGcX8qscRf9dqoQTcJ98xTDRypEVXRaPb9athYxx9oqWx",
  "key7": "2YxdSV268uCfXcsGyRAUZWB53rNHo55fwLRgpaphruNSHL3umzCimDotU3ijrYnt1JbVaxsKXKpDypPm7cFsJAmK",
  "key8": "5x3prDa7uwQ4LCXPD2H2eoG49fn2wahqyWuCVbSwLFta6E9W6MUWSGoDMeuVpBXQ14Dwyku124sAd9zMr3bJeemo",
  "key9": "UfRTf6AiXVHKLtTqEpz9wrBs3Dck2GTYpJaEYSrsCBtxNKC8oqaPd8KzUURTx2V2sUeMjTbQVu7zVm8fPFuJrzr",
  "key10": "2it1NaQ8Ue2VqppBWpngyMpYVSUUHoWDPDtZwT6PsJq5RE1jB5xZczTFDSHsAAPiCxT529EDPxTTAj5aLagUTuNN",
  "key11": "4apBJD66MHEcCVUzP23CTkAQP2Q8bjGUWHUo65dMJKxnuVkySbyuiUBJRNMg8PD63bQCSr6sK7yh4N9vtqu4eriD",
  "key12": "iSrswX54sRPnHhuAhwqt9oDVCYEFDZ8zRtuxw76cRSVhSkwySrWat3vrxN8p7YZZ45cNi67bVFVmSJVxywJaCqy",
  "key13": "3U3usMA8k723qzNiJRSSLvCwXj7pQwj52okM33EBYjZaJ5mAsJRLpf4HbD1jKwTkDcuqD2T6JgBectYnEbCWVgMV",
  "key14": "3LUgjtoLp4hpkhAfCny6RWJvCk6rVrat6vXmeVxXa7XE2HnnCEuKGm2GDv2SJbmAHdRXsHQLwYtTTRm8DpqFZV8Y",
  "key15": "5wC5H9gkZfEdTPhEvaoyhxZYzHbpi9X4XVq8vBZU6xsArcYLKuVGRoznokgu1N9a3qBiUHq23S2y1T95Gk79ZyUh",
  "key16": "5UwRokw7w3wGZZKmhRjJu6WfWTJGSggMSaXcPhtwRFP7BsBYZgxdL1ZLC8561rSmnY5WZLyEffPmZRgfVGK55hU4",
  "key17": "4sXaGpHP7bsXtBPgWvrAzm6cHDbbmGQi4A8vzTJy5GZd7KpkGZAFFRbpn7hFrP7TJhZKFdeBXBaz3jYU62tMWr7V",
  "key18": "2W7x619uctvrCGdX7WnNFxCnMF8pPRHodN1HCvF2XcVAUhbqWRwLJS3WNPwQftfrC8LzueYtdvNSidJ2Zmo4KwPm",
  "key19": "3U4DDBvpTGVeXhRYmhr9a8Z9X3Zs8bdMPesht6VLhkBCNW1ahpPWYEj7dwA64EgdQZKWcWWXgHxFLK55seqKKh42",
  "key20": "DUowRGRRPGJvsuR9RRCsjhdMMMhCoS7CykXYD3FUkNzoRm6MS8q3scYkajFadViWRgj3TN3HyHhpbWChSEfr7Ae",
  "key21": "4E8nMeQdSBdMEHJnLfXMwJGzHGRxs8kjB879SxRNJ3TDgtQkp4HMfnuhjekzoiQj8KQ26r9ogpgttkW3mCbj3AzZ",
  "key22": "23nmFKiccHRQzUdVnzzx4oa97spExUD9VYesZaWY5m3Rz695Sf9kanmNN2f37f6PyJRXqZ4ErBs2qbMPYuZhAWpB",
  "key23": "513CV1PuYKsypKn7cQPmf8mNLnuQ7WX9FbzqG9nSWjcgU76QJwoEgeZf9zjqTkjx7PWDMtZcL7BvDcmje56sCmmK",
  "key24": "5hUrKNNC2SqM5d8k8U3RZw3fvom9pnrppHitbb2irPopNrjyC4h3c35sfFQRgEnr9QsSzpAjPe2zu6kGqyZf1YrA",
  "key25": "3ZBDbCBFuoUB6FS4y1bPPrNGBiRiFopYATZz2qTBqgAYAWcQ7d7x7DNu4pGZXVhr3ogoLfVEmS8G2NskFR1KW74w",
  "key26": "2i4Ekxj6MuKqt1ZYtchXcKNawbq4pW8fHChdAeCx4NwYUchJufmMZDbMUyDM6fPbfVDbLQNd1wUhyzbLXyD8YUks",
  "key27": "2mFiiNp7bdPJXjPXA2dgb6mswpiNRbsyB8mqf3TEkoBKM9ZsoZJPzeCz6ZvHa71bQZjCwEJTjHxS5nFWLzWoxes2",
  "key28": "WpSViBCDsL21Q7ZpA5JcEj7MVDj4R49wbfgQfwo3hJnhoSME6rvmQgG3AqC17ysj8XExfiaMF46BJz1axK9xwdU"
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
