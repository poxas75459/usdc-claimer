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
    "3X2tpqUk9Q8jKP1fskKjjw5uQ7D8jcGkmY9eqQGsssmZqRMDXzA4QEEqsf7kvZEg5Jw8rRTbstXL1t7dpuTyBFFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cVw2KaPRHwgVetna1nS9vo7zygTsjr1gQi7hWdbRfME9ZKSFiRbKwfbcu7DPSy59Ssw8TznpDFxYFGB1NKcc9D3",
  "key1": "3BWCvLFYvyDcMao9ZXEwN8au2CAMciyKwwgo4TSmwJu6iEFuTjDyqRUK4NddTq9hJdinoxPS2M7V811651tyuF3Q",
  "key2": "wABXaGo8H9fRteX38QaSJHnCekrXL6tPvPaQxTPCLPLM26SeT58TKR9fvSHt6nah49k32pyvtWB33nfTMFVozDU",
  "key3": "VxGATYaXmvidqofcPJPhWG6h83mtabR6gJmahSAGS9M4C2LHDAASVDYv3Zgj2fCL5zuLCUJD2MaDEMcuFnooszz",
  "key4": "3UthR1AZwTTYF417iZczGBc1n9BTivJdnC6ysRYBtXyDcowW4Xbp4VPnuTK6n15JTxFwcHqyfqRWXZZNx733EEuY",
  "key5": "4SF693UhAJhkDfHixpn5ifuiBpUEdV3i7U57Gwmp3ASK7cVjsjZ85q5SHyb9vrz5c8ceFrfcqjoTcQK39y7oVLhj",
  "key6": "2yNR8eLzfi2oYu9KUsJ6auDQqXnXFEcxrgZuA9pAY56KvgqePxpx8RzfgrVopPaaMzfJPJNrauhqBCr7Ux5PrqWk",
  "key7": "3c4XFGef6P7uh9LrqWQ9bfAsd6utdCskya6QD3yuCmqQ9YWg3jhdMx2wXT4MwimCZ84mceSe5DkC1SbewViSDCdP",
  "key8": "5Q2hSsDvZseRHz2g9qaJ2GzCvJQmD8QXgt6WW85xfbvZahggW6hqHTPbUDejGrKs2iu8x3bfrKrN6NGJofUtTdoJ",
  "key9": "2dFWnbV488USfneFMfXkSuTGgZNhxXkrfy1BLBtPfqWhvLq3FRtkVnKD7fiUsgBDCM6xJSYR5UHACzC1EiDaM1Ts",
  "key10": "2kjvVwhUMyPZ5M4oy2B4TA5vxETxTdoh1oF4U3T8Qvx9ytjkqdUgwgbBXv4PEWwSUiKQqFRxwQhnxkxkXkCmX41m",
  "key11": "zzjbYaWL2DFM2d1wAeCtqQtN1io47ow6tv6xY5KqVGLbMWUp1vcSRuTMDTtRSDC69aPxBowB1gxGASanzBRSeBh",
  "key12": "5mXa7WT3KFGbCVyUyDk8WqTyUZkuVUCza4hkgkzCHca9SW7PB5ukQCqFZkxuiq4sG4vZ9aPt1DJ8kvy3FmkQwome",
  "key13": "jkeXvtHDgMGPJPEw42ckq3xiAKHsSYvYNyUaZHgiSPy9bEFSLr2BBQTz59VGqU7SH8SzZAo6i3caJ18EZFgczxz",
  "key14": "65dEzd59mFdNbm21CV8KptFoR5qWQjg5mH8C6qfUbMQ9A8GkVzJYnvQV1rdAr7EGhXPseMbEe5kWfuVvTuexg4Uv",
  "key15": "45iFK559s16zF8twksHuLin5pSWcAHn57aTy3HWNW6ynVg2km8SUrFW4ACyZeFGrGWerEeLr5kKh9EupUror9hBk",
  "key16": "4qR7JM8JJTzxERUZZAJXLg39n4JkWkmfb5opt71K2FwvKtAhUtFCxQYNYVwknjcPJnqNX1HcqwjjycpLcL5pjaKQ",
  "key17": "3a3ozPTCwva3PrjpDgJ2DgczsX8HTVJPjxPFU5ww8we1Umn2wczF2xLZjRmftNe7tZhJA4FnWMwaFpKaBkWvLDNu",
  "key18": "3wAL631NnZesFDnkb31qey8kXjka9nNyutzagcD82jca4ak6Wq1yRZL1U7wDPqS9y7TgUmCMiB5FB5uHoDqtyAxk",
  "key19": "4VZ7Hhs6QsbavRxpetAjzeRGtvQf4ZXBrKFHcfGUe1c5b7Nw3X5UVTvLbCJULbCCRhc8nu31KkMKuJfwzsBA3yWJ",
  "key20": "fZjwDKKCpXsPsZ7XabnJCa2A9XjVJaQHNhPpJb1nJrJ7aGVLxo3M3xsccN8tQ4j9EzsUU81HPCwYSTTDPmNoxYw",
  "key21": "2yBXA6A7gs14BZnEmeyxdkG5u39ANGE7cKairjjtg3zhJondhSqLpntaw874fd3SzNeyTzFtg9fy72iN9QYAqyEK",
  "key22": "3fCjQv6RFZSK3jqVECmjVjDjq6NyyTVz4hQUQkfg4s69WQAas9Aad7zmeVuheKiWAZ8GRHxpAuBbfrCRUiXTgesF",
  "key23": "4KLrTmrtRHw6ZVSiJ94mkSsmUq8Fdb6X2xWwvgznFBhYZaBtQ5LN5ZiZWJxJrGYQzixmhjciS7eZ7SXBCa9NjHeT",
  "key24": "js1nRfWcNGN84rrUiMAQrbPL64SfVWZFDbaoep5t3ATNFp3RHju5wcBQEps1eNd8HEAg4D2Wa5f2Ym1LHNi2GVQ",
  "key25": "1f41432W1iHwpW4fzoogrxHNhHXjRb1Jmi2kHhVmt3oDyS8fhdjFDA17sGR5PU9AM8we8QW9ehnGDKa68roZ8B8",
  "key26": "55bCVQAeMssKSJ52SnSYF8N7kmJ9VShRyzVJgGK4W286ELR46KbyoMeCCCLqKEeUsb2nSsSHbjZ4KtmLVAARDAFz",
  "key27": "2rNXjS6RP4c8vZH2QMFvEyg7kBhKucvV9XsiXDbRBJx8Sk7mUo8HdhM8fkxPthnmjs63t7tm4Lv26CKoup8EMBQp",
  "key28": "2N51AKg3hGxzeZAZrppbwQqZpdH7PiGu7KErR8mrTzoMT2aU9GnKKzo6PYgK95Jc9dujRXxWvEpnHQMgxbruzG71"
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
