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
    "4RoDc5JyWndpxumrPxocm9GjFeUuRcTtLc7zB5QivEddCnCzow6JDjCLY14Y9XXTBGvQffF6PCtzsAyZVyB6LfPh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vZzGPtTAgfUDssJfd7aNPNpKDJ7C2QhuwAo3sY46p2CJxUftcws3nsZzMwgyBmsayULXqTEttYKDrGrpsHvx6fx",
  "key1": "493p7crZBmaN5HXiKfqgUaQ3VTLN23xMz5c55A8X7KUZx1UvACPGBavJ1Snhj5KkzYpGsKM7QGsMMefScUfFxpB5",
  "key2": "3WENmZViViKzzw2o5eodXpNqz3AvBWMvMJJ1FmcJefiojPb6QedNsNyuFSHLsjknUYv4S1h24aQm452vHViA89hE",
  "key3": "5TQ1k5bp8vkHukrAM4V8HUbErDtv2pexiuFfz93SfAJtHyiSzHyMr58fYWzb1b6YTn1AdL8AzD2tQhkdEg8YiyxD",
  "key4": "5HB2sGzW61ZadLtEgt6aiKzArdv89CEiQA2WRbyn2bFMbFQBh8hneGnRDdZqph6xGpzJu77efNtn2Dvi5Md46Ucc",
  "key5": "3rEFxJjCxv1mHw9L7rF9bLhdboctoY3xRhnDnjFsEn2MXTRWBByUdRsKHLQ2pBYy5qYeAeegrzboUwtPQ3pV7R24",
  "key6": "2oEKobY9USxG3PVmkZcCccpu5DFGRbMTqc4pc8f6kLvpFBXevvtGkMou5sABFUM1VMy6sbjLSP47yi66ar5pbNp7",
  "key7": "5mmDZnj25ev9TMmUDXcS7f1ihRfguWHuEYPZW4G1vy3QHXhjGVP1LyELj8kCMxGq4WdH2HWCti44oMWmyqAF3Bc",
  "key8": "NgKqAZgGs742J8AfJhbg1RBYT477zeK1M2pzXNJjNjYNRVqR3XMQR6MhJ77FmLnjgzXZ7t6wead4P6tEgZpsGRA",
  "key9": "22kwPUmXUHHoz2LaEBuUpSVXW5LcM5ceSXe9YJNLAJzmAmtdWxRMW2rssv8uuyRM2tRNqGu8EEtrPuDQ6y87tTkk",
  "key10": "3uUraaoS6MK3LFFCimeyCMBR5HjXsRS2zPNL2AwGx2Cvhc467dVfi9LijDL21STvXm2dLLVcsGFicm7iyeX4nw5f",
  "key11": "4SuDF5uCJAn7G49PGiStw6m7NnEyn8pcPCumFw7jDC24tPg4cta1c3tznDnNq3PhtsyA8f8KEemn1DCmUKTVdiRr",
  "key12": "2LkTudLup6Ss5WU6rahy4WN5aHMH1xdeDBzVrzQNrpMdMVUaQpSw1FabaiCecqrmq8egVm6iyTvDNAjcawr3HHYn",
  "key13": "43HfBhC3oWSRhPMMiEbpKwT4ZgycjRVGmND8kS3ek8bPChJHdSeVgq7pv2ETEHJfdHJWmpZyoTHtSCNJkQMA8biB",
  "key14": "gSNz2xK7ZkLEaWKvtYdENY7zhY7mg6SR9zi8QcFJtP699FrBHurYudmeUk5gJ9kw746Ti3tpJ2STh9ixPxHkJvk",
  "key15": "5cBA2od4GFXtzxgNZVQEzJFmjZyD8aPTG7o9riWBFggqdiXC8ppsSKswCyEzZdeL5jvgkT9w16qyVSwU7jvf2BTV",
  "key16": "5cxPFCLpAkQsqDH6kq7EPASuNeZbeHR56QCv6GbVBd4jB1Xg74s9Eu8gTigHPbuC35ZjHX73k5fSW1qYauqaf1qH",
  "key17": "44QQiSAR78vWZWuDQnqgXhkBftiYVRPFR26P4RtPoxpR2cTHFaziU9ejgNQWuju8b6QF2dknSgic1CPHncGP7NxZ",
  "key18": "267i2S8kWzDc6PR8j9YeGVQ5HHjAZCkL5RE4VocgXY6gJBdV8tM7HBbiWDrwYgGRFgQJEaTSWdppQnGhffRZjYqT",
  "key19": "2ayTJ7TvRD9HLc6a7hxt2UTVAqcsztAq7WXBbknQAxrcjdQWnZGqNtSAMBq6b7Hei9xgC1mBh1w9tG5TVL6wanN5",
  "key20": "5wzEUxWWhyxS6eGFQXXQNk3FSECREntPTnMaVq8saRkdfDbi21yohQqbY5FULgjfQ1Ra4DqK4FjnxChDeHx3m3eh",
  "key21": "TgypbEys58so1V51xZ5McW9BmvEMPuMyQyMMyUqtd6SLxmpbYYsUHJdJfyBGEvUBCRnXDzctqKw6fxkjR6VwQgJ",
  "key22": "3yeGzGcWenPBArdDTiasa77WF9QvffDfdbgdrhHGsNTP2M1BEAZ4Sg22CZpMXrWhTgC1Cwk9ppKGT3VPZaMfbppS",
  "key23": "2VS27oZ9VnbBdVXXPgoW5Ha5mafheWgN3rvTvB7QZtq3tm67y74EDseKVK5wB3WcA31AB8s8hXqYCbxseqnL2VvM",
  "key24": "5LTWCejHTZxFMZUvQ4E4iXictQKYJw46S1AKDLARTGXr6U6QjczYLsjjKJvoXaxQG694TSs12j8eLhjy1GgEgfp6",
  "key25": "8dXJpSae99M6h3YzqohkZGPrhS6Sna7bMAaUTQwVByELqhYHZes8H87NaeJWqNWsR8mKuNGqjkP2UbGrBNs4r6S",
  "key26": "3i5m8qKdrxzkjXJQkRa1y2Hbp7D9S5Y21B2ptLZJUWNPNgGZA3XneVz8ggWYvmj7pzuNAwPcbEEfY9HALEhLaezn",
  "key27": "5kXuPPnHpcSSs5KdC1PU3RSRqZNtdnTQDLAdhdRTNcmysnuLdaeLXSqSJFZ1dG8tby2D1JKVxdE5cE9AzR8Sc4sg"
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
