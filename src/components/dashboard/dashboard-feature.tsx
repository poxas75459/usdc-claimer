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
    "3dGaGiuro9q7MhwjJgQEutFCPjdr2cHBcVQoh1ZGqrtA1ybaZ9TJ835hRaPUWkRU6b3ANWZnBMtPYavn5iTr5WVz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "596UzsAWibP5b21CV4HtY73uA5N2kFkuf2KMQynE7vBvHaGdUP2NvsejvY8WagHYCecQNEtGG7p3oXb2QmpvAtmW",
  "key1": "Wv1FNhmjPuDx6Tz1qeu6T14qhZipGp5ob76EPLmaQyBFgHCKrJoKEEfDfzXyebQHR9jR6yfUyNhjj65aVtJdcio",
  "key2": "4qxaC3eaJKJjYt7YXLv7QK5TsDwCxBjhzKAv6BHbepqsHq1jzpo8D2fbUNQbFuhB8BFo3mqZEjs59cxAm43ASQa3",
  "key3": "56h7VkVTPkMaRztKCrkmJXyBkynpBWJhA6F3LS71KUwPyUcaQRJ7pbQyMXaWu3hxSZPevKjjwQQtMG62ocGfGKTq",
  "key4": "bVMjsZYXancQ98axEZY6yYaxRGoTys6khvbEaKhjCBRmazkNWsoP3vJhz13rwM9bFUQiSs11inPue2vmRnKfNqj",
  "key5": "yYx5ykeTsgxVtA11255LQtRUCqM31xSGDoZCDFZ5ejD4SCQ4FSwWmjSjhHFbKZAN2ciG379MgL2htsXYpRJTA4q",
  "key6": "2v4ZEMYGB9qzs9geX13s3WVcTwyi6tB5JhJtSPsunawWr6FXT1JYYcAynDVnKUqpkupBt2V24T58sYqs62sQdTbi",
  "key7": "2ShcbC3phyuY4m3mEtrUDewQQq7R9EUer7r4FyowbY75NTV5gLErmyPWTJE6X566r5m3GQrfeFQDgXcEcB6LC9nV",
  "key8": "mKGKH41gNMRvsdUoo686FhhfiuznbHRMLmMS1pRicsAyibSXPoa5XRFH1B5M1VnvS9og3UnEXo58hhF7TyNEcR9",
  "key9": "3C7W9TQBDJ3PmSJR1fpk23BdCyjKYL9n3TD7Lf1AQpvbjizhotn6HRKGF2mwexKatSc85MMARFyRRzmQoVRd2egJ",
  "key10": "4NwXtu1uHRyJbHGYfeJnPQqZsh5mCY3FsNp1Z83bAME4LKw1J8ZcWH4xcEYC3XqckHHQn5Dic9REppsegZDzEiJD",
  "key11": "5PiTorU3hdMNdcTZBWRkstn1wffnSNk9HMujKFzCmVo9GFErN5GEXHCa3QbHy7oqCH5Dihfv7ra7XJ3BdZucPWPQ",
  "key12": "6312V3TgzCcBibQtaNmhw5JruoiABBYinkt457LjrPtKuQSfStT1zTaJbU9iiLXQstmtQxTAZWyqKYK5NS8NxdnV",
  "key13": "51eYLhR5m8jNrCJc2hrq1moPfYmr2DyvTf8ZsdDFT5REtzJbzLjPf5xsZnTsMeFAjEAEaKdVWPaR9EEJhanrPPTw",
  "key14": "2LQqqWPsMTbcm6gw1D9nWBjFptz1o9b2rhFxgmzjtLa43voy4NbdGfY1o7k89MeMxxVAawzUucTVZ2DTpTepgLFF",
  "key15": "2vKz9hWRZ6v8nASMK7CiAVf8Sc28BRuc8LAK4JneR2Po6gH8emouJ3YDC3psf9khtn9cB4tQ8rgfm36q212ZKC6Z",
  "key16": "4AhAZhbPvq4CNgw4ZxPcDxLwLwqxbwJY5GEGYMmWcjJodi5x3h3Eaxg4WrHryMBiVpuvq6hPJA46U2NS1Va6fePA",
  "key17": "Nvpq1yALrizw5v7ybAS284meNaFzbbzXWDUFGKzV18aqF86oS6KdiSfS8giZCa9xRA3anatngqFgDAF5Hp4uFxn",
  "key18": "2ZAQUh3nvAiYXk1xau81metfzaVF2LTTmfDFy8xXmvPbuwDqj9WFcTGjyMCKZGFP79KNvCHDwh7Pi6uC9ot6Zjw8",
  "key19": "SRKg1ZvsdRmFMxayELyvuK2MNWBuoMtRA46pPhwsr9XxsqECbPSfv9XYKpsXR5DtBUMd3advPZKTDnxCgxWFMWb",
  "key20": "4q39CASnMCtxqPx8tMaYpfSJn6NujLSNSahtEhnPVd7dePpbGDFZkrH5p8WmaNReAZmfgGXMWG2rcphyJHVjvFkH",
  "key21": "3VxKdYgJ6feHvoUFKJvGirgRf48N8CyotsJdpuqJncfwnpzKvruWxL1VC6k6UzbMuhL5XgV4enpwdykDk9eEnapw",
  "key22": "3ZpehsbFGSJstLDuQP6zoQ2JFurs1xwwbLEXh4EFS7DnSq8DfUbE5sb9EJQbPE8zBbvSKxcxVQAjtMra7eHvvk5F",
  "key23": "4Q66icvYNZPKUxagShW5i5BLcgPL2NeEg1EB9KsLtD5tAKb6NofmUTD1HvFpPTQoQrARVnJ8TWQuY1Ha6dTwMK3k",
  "key24": "2zrjTBKhXGtYdhynCVCvvh8ZDgtfc49R4pJTAC7u9xyYxuKh5FaCy9QT24Myi3mqDVZLfH31qQa3WFWFTX2j4m3b",
  "key25": "5hVFpAKPbmScdNjnfM9FpodZSx8g4mPR6M2ZGvjUvZrX6w3ZXzhti6kcuPqnME5PSLnH9AeVEbKrkVLvTP6tNhSp",
  "key26": "2MENFvKPkmqLd7Etu9aLZph9iAANoKM77eVB6WQ14cSrNvzs46znTDfZGxWuEshkqRykvBUVvpqx3DuzXQxFNmM5",
  "key27": "2BtGKPfj7S7KoXiytrVV7Yb67ihBGU4ciWPCRrK6U46RYGVDgaDP5vjpRfbgE3H8sXsuEC31Rwy2EtsZsNei6XDb"
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
