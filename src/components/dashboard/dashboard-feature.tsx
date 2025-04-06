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
    "2MM3ZsWDCw14H8tTctkXGZkBuBi9X1rzSQiP1irmjJiuoAhLtPnE86wgo1PhLKe8pZxRDr4BFrJVmDnntBSaNBhJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51yuih3UoWtJ618H4m5U9qfvHheaQQhysfnK7WUuCTC9VymD8HK3cVJGhRGB63AGgQgp4pJiRMjphXca4zLioTem",
  "key1": "t6AW1afkpspsYc8kEUXKERtj333uRb61EeFdDAW2AJF6VyENfy2UNxjzhQSecgJaJUXHiyCoPiZ5CrSp3F95kEk",
  "key2": "34WKLENiBo9fR85R9UT47MwQVwRKFhNVeBzEJBX9wfY4kvijyHRMUjAKWxAWHbGpg4J1yWrLEgWDoP7AmZeHgBBm",
  "key3": "4C6KEcv9H3vUtVFicErz5RhvTzgWDKF4sTGk65S9nct7JbvfxemvyfTbMn67Wx9TS9HTqbDntwFM6qRyPuKwD3G7",
  "key4": "4e1fRHQcJbQ9kAy6oShLTzsPgsN8dk1EJz9UnVxotgMFj5zZHPm29Pzaxk63uvCdYTRV73uZyvQgg1iQ3qhpVMZz",
  "key5": "4DWqQZbV4e9MepRSheCzMevfGPrGRJhhUpxdpgkGhhgDcFNuiL1VGXq5htVERPQoEgzYByZZhdB7aTxjegaWyatS",
  "key6": "25J6csWxHJq7WEeEet2urgFRoP2qmXMRXvdgbadDA5E3UGMp54vm2Rn857fTtGYoioM9KYjsNUR9yfuVnptukMJf",
  "key7": "3LyPnQ2Yy63YFtUMbBdiyn8uoSB1txXU8D6eiCWJ7DCNsenuxzBsCnqcCynuXNcLYNkuCHVd8muBZtTiLzAHEo7J",
  "key8": "Scc8vGEQjDBmaw6ncNi2EukAK42Diz1KMwmArWCXKNdq4QtZBQrbQw67FhipKEFEugfYNseiuhhYqRgD1TDLTh6",
  "key9": "538yjjFmPrAiQaywPP4dVnQRfurUid4nrp9JvHY8zFWfkbnUD4yN2BHQXyDMbi3Ub3Yky7tMsRUbbYEd9SQprU6u",
  "key10": "41M2yscdbgb1Bsvizhn5zvQYgQfCHDrNk6Pt6irEC436abdYfCixZhTQWmwpgd3nmVC1dEXuwsXjnchqSHN5F2NW",
  "key11": "4NwzxSKrqvFxYYPWtTT24inQC1tfCGCVFBSyPpjUQHm4c9zpv5sdk3RxoF7bC6XRjHXMj4sTnUca8KNUcbAwAoSH",
  "key12": "2HieChy9PB3JPfENbjwGU5dMpVeuK11A1KRyjKsyohxd4KKPj5Pp5W5jjEqQiBUbY2GbWxeHZPaF9ZdWMcjgfvfi",
  "key13": "3d6aTcu9EVMmWs4z5zSmXBza1u7XsKHrq3GLSNxLNaqb61L3HEn4TxyUpQKkFEVjdY5aTbwk8knXv1LyRAA7V8WP",
  "key14": "4VLAaPWSjRUwt2Pnm55kNQ9wJ2TQGBhxg9WnLvoivMUDJp3Cv1uQ2xbD6T66PTVeRswarRXc1sPAmT95K3MmFh9R",
  "key15": "59mBMXZT3kWcKKqiLHYhaGTeoCa3qAPJ7r8TsDWXSSGck6URRgvkhEWPM5f3cdECt6ea9YcCdrdJcqHC7GjXxPJw",
  "key16": "5ZoagWaAHUjJhGAYt63ARhojPP1WtRcGZADEedjsovDBeh5Cgm2kPjDVSVGMVJ3gKBDVn82CWHtaRcpe3ncBupZK",
  "key17": "3uKw8x8QiYfkFVU7vT7yCEHWE2K8CAY66ToN3vZhJsW9dj4vZx6UwMZ8BrVH5P5Pr5MpCxsU7X1obr3uYHzh2m6j",
  "key18": "3LfmFLFNGcUMu5pTJz5JMZJsfBSXCtCHYf9qXEyJMkvYSyoMJWZRWsnWyjF7dz8nGJZN5q8mh3Zv7eV8ZpymFSS8",
  "key19": "4D2beWTUXzkUh6xPrHEX2jtdKqZe4MqtvXgnUuGqndN3Z5D24E6YQ4CgRv8MrgkwBm1nduj9pJnXx28FhzjxCdyf",
  "key20": "518qTmvKPmago8kbLctGJ1oQv4decfkB4aCVi1ugFitGeaU9MsDnsM7TX1cHXtygHXNi4C9yGHznufdb7F4CQreN",
  "key21": "UKxVdNbNwTQMVXdcZZ6yw94Q8gajMJumvdmxkxHR6Z43p54DP5b695xgoU4ojGf9AQrHV9qTaDkofkDt4aCbXLy",
  "key22": "3NzyC6wrNP5e7wYnEQjPhvia4MCg4XUupS1aGAL2JoY8SphxLLVv1Uz6Tor12U7a4cKqHnMK3e1tQGGW8e2Po4HU",
  "key23": "2MdfHojfY6E1QmGJ3c4rWLYjwaDrzMnSQQne3NvSgvy6meWGHLamTjQq83TvuZgAvURTCFtL9RbWkzMDEApPvJPE",
  "key24": "XdZV4Er7NvzyEMdw8Md8jxxPkn7tNkktX2AYqVK1fur1e3LJggpbJL9DRDocLhAibGKz38fCJFu85CxDvTTSKWD"
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
