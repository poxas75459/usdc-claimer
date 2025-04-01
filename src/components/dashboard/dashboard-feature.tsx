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
    "4y386vnBWpMjt69iCfZyCWVhEEidp5bRXX9esShvJM59tH9Ad5oT5zn7N1Ugr7MjYZR32wuxFnrH7XR5rLzezi7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fWe8dXVtrcpfA1pRXTKcGiYJqsTrD16jLmhsDibpMwYc6brbG2rC2Uq4ZCo6Eo7EY3VKeikZnFqQSP3xduodQr8",
  "key1": "3nxJonqVD3w5wyWTJ4wPtBPSdarQDRL7GKG3S9pxiAC2UqfSMLwat7dNW8vcoqH7FTmZrxrKSa1zgNi8VBcK5zSV",
  "key2": "4M3fpfe15r3Mr5vhmF21j6aMFy72d3vT5An3movnsUFJHT2pXwYzLwh1DdjYUNuiwFecGGcvsgrMxSzCv5Pkvzj8",
  "key3": "5LPWdyWFWk9atAicHsvP2gEXjD6fYRJ1CTJ3VmvPjxr5r7RMDyFJxzLVdhjwcpQS7ma1y8JMSy9sw1gWK8WUDF4y",
  "key4": "5hbDD5eRBvenmATwYfQ324eUD9YEpmc1RsqTwiYFWRkqjmjSjwzLHAFHUf36DjmdCkAio5skgUCEmSk68MyNkaNs",
  "key5": "2sGoThBJQ4YCdcePTd4AS1zLSu4433VVRNcj8fvEn4KiExeqVq9aTAg45PQmduVK7xEhcpVJzzJLayzdNSKM3YBk",
  "key6": "3yWqqBU4zvenozAsRQSs2us3oNKSn8Bs8rCmFMfxqstxkiFzbEL18kzj2mRqoFtucUa9cwiZysuF9YgpiKmpTZGE",
  "key7": "VSevPWdj8ohCSpbvzgUpSDL9ChSSZnmcpLTMZmo7UHaTGumqi1LoPAcxv9E3Jq7ufcVcN885vNjQSpgECBN9H1g",
  "key8": "2Ji4eQeEsPm1KaxUvvUMp773Es5bK2nyXELTrXVZpizx1gFnaT3bgnxdLpmhwCnkZ1gYfoQzwCKQyr5ni5ji2gSr",
  "key9": "56nhDgSKyn3sTc8HWN1yTQ5FULoVpTrsfstA4hLSgXgrZu8yCNvKR47BdqpiWsmbwcwAymq3FeGNKdQMPLaGzAHC",
  "key10": "2HcG4uGnKWe3skvK1dYZ5zcppS9FJ9BWapvKGppCf3T5S8MBk6rbVXe6MEceDeJZ4vrvSEYZdryi6wHoyaoEXJe",
  "key11": "5iTMyHgJZpagLwo7FdfjRkto6ji2Gt3djSc7VBEy8fouWWf3xZFB5FsywCuL8j6Ti6JMn4BU5GE4DSh8dCAB71AE",
  "key12": "5QP6GAeVoqgQCeS5gMSAV2RjZie2oAPSDdZwU3QoGshadHq18ZhmvmLTrPqRPG9BXusnhsygBVCkEZBMt2MWxw8C",
  "key13": "5WJjaosdm5GPnECePyk4447H7XZdcJ5K6QpivE7PUQ5dznnXEcFALgcw67a7FP4zfXFWPzJQtEz4WUxU4BJeSKDa",
  "key14": "3hF5p6eQKQsjd3qXKRXvAEmbHWBLiZxmMi3Cfk9QV7JZk2KboJCfsLXD8o7rM7CCvAHnfku38WaiDqZVxGU2dw93",
  "key15": "3HKurHFn4mTW7932dbQwgmqKq6PN5wLWUFcAPvK9zGmYpGJaddzTRSbbknpMMhU9eqNcBiExB6KsGJo5KEvs9kYn",
  "key16": "5UpevYLCXE2vxSNtJVZcLDWAhc6MwTL4C4hNHVTirRquUxvNbGui6Bb4J7xsFFqWYT9cxhodLSLedrGDkrcsjwyH",
  "key17": "bKBr4dM5dGZQjjMfW4Skn37Hk2Bo62A9mKizYsJrUFs8Q445ZjbTYEu7zjQcJGx7SvaB37jP15hZNb5eSsCUjsV",
  "key18": "3JwaAueoFKaCYCNzqTa2uHm44Wkh9UpMoTJykpGfcuQiY9KMqWX4bimA1ufc4ttVL6Cickjt6eLUEhDsSD1Z3AGN",
  "key19": "5Ha9aYc27PABDj3y4zramuBymPwXHBW1U5mvKTyFk1LJwD4yS9J5qUDgHGrMa6qGqUjyA7QhLKBuiSzWoDhEezkM",
  "key20": "2b4EaMnJx1PeBfZ5bQsfzGV1wg898JwSkZNnWR911CeVpFWkNy2QBpeENuuDZRCyNKUTB54yCp5QcXnvz87oLuwK",
  "key21": "cB7qJXdqSmGa9XcngyD3v9tJKs5ctZh5ddfMTvxati1iceuEMGtzu1HkmbwDC94GR3UvsTXsDk3tSBKB4iJE5BL",
  "key22": "c73AQrDFo4dapUa64hk1RAnCAiB4jyaouMdHL9ANkTwa1zWFceHT2i3NDwcCaQYfEwdS7UVSuXgFokn5L7YNG9Z",
  "key23": "5eBb5CbomUqzDQRkSurupvGp19RN7A3113qU9pgFNT4cY6onQGMZmwDmZz2Sod5iC9SShbp9QponfFrDGKyjmMsG",
  "key24": "5aXpBDnrioHd1SvFYCgcFT8QJSjDebgBk5ZiRAQnFYmWrCcxLF8ZAbczo5i5KgvNMtYj4mh2SE98WnX5o1xtzeEP",
  "key25": "5KXmPs9J3DpuBRFPK292odK44xqLVvxjQ9LWdYDVAbK9N6YTBbqFQXrD3WYXEB7t45AHa75p5ELMTx9ndMcCrj9k",
  "key26": "29QibCGJH5APsEpq2eDWBiANNpUVPkY5RhSDTBqSj9LtG1CxLqLgt4odegtiZxju6qCgwoseyDHtFCNSRv7rKUe8",
  "key27": "53McVqw631gMKjyGCPe3obNU5TL1eAvtjqYTswB5WXukB9KgFrZpvKENuukdxUmY9rYhxwRCm3vtZmyq95XtSshY",
  "key28": "3fbJGgKiogdWmECVNn1szCKoKRR9VsFM7V7WAUMUBBeLTh6hcnQCCT7p9W1Y2yYchswHNAb46W9LrDspAXgAgsgC",
  "key29": "2v5Pz48BvdCeCoDGTj6DKKc1kBGUkyXiaG25T2cPQcoVBy6WUbHHFVKU3n9H5kATX8aSgBK875unG7rSoHiCWMsY",
  "key30": "3HeuEaqkqPBAeHbjkGJkTSf3zYtQYmKYUenLMJaXEgnGNemPhTgmisE67xjqvha8PnifdKwBV5uaj2yf7RyUjBMU",
  "key31": "BvCZGbGHxSszoq4V8AFusMJkAexhbKb1w7yiivTbUMPws8Q7u2mXvkKs8MoNGKnjzCh9yvkxKGubz3s44wRq4by",
  "key32": "3bp2etMVUo2LfJst8HAhMvQdHMpJDq9qwATNSyBdwLKdyWLFvxwN4Xgtrf3gLpRRefWpX15KmLYjMt5ZdUq5JJoF",
  "key33": "3JHoQ93tjRmYaLdFhvd5kCsR7axYnvVZn4srdwb9KTXojknFS3VwpY52k9xz5ResAK5rKRhsSgZw7LrceUztRJF9"
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
