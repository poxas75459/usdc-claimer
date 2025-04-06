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
    "5821HKT9AWThGpA6LWPcW88sUmmHDUh5RpBYY79DoS98TzAMwKvCE293em7xaHpmR9jQ7VZ2NvMQnFW2i4NfGAbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "buZykJ4aExqWZd8US5acHULH7MrgXZ7ESnB2kDbALktiMzHaBZAdGvSXfm3L7x1fYaFvTn9mSguyaG2wGEjK1Hc",
  "key1": "5CaV2Pz2icxYJjq5SPzXz6He28gJQNSJGYYxCqQNPobwLhp5zuycNoRpoEUb5NfjrxerRLhvZNXpDaeZ5A5CbKJ3",
  "key2": "4Nj29nhyUjA4MGsipBRXtbDXs5NjvBWbYbXgAUzPvTE93fpdkyuiAJ5uCqQuak2h45UndqtebmzZw1XEmhfpNBjB",
  "key3": "2qHkp9dg7JMMo7N7KxHmqUBWZkuUfVrpV9rpRaCTurUPGYKWjJus4Dd1xwN723m26W9SUwbfiJMdij6aNVwAPf9t",
  "key4": "4e8XDtpLqsTHHzRgB5XpzNt5uuG27sKu5PJcLwrdmw4pw3go1Anak1Lv8UM6bbeAhqbfz7tsQ3HVtQpqDRi6AJXp",
  "key5": "59gLmj2W2jUnJ3Arjct6Z4BjE7jgtTeFvPXiSayuwpYotphKw6sdcpSNLtKH8Aev1MdaT5LKEZf3Q1Suo4k2eCa5",
  "key6": "9tNT17boWTfHKFCRbodARf5GGKL3nxyKNRibzHwrLpFHgVX4ECTB3FTuCbojDavUMXsguSxc2x1VbhorHYA52R2",
  "key7": "4pwgp2QTBMMaY9HmmLxpY8KHMUkNTMzuDhBedNVmDUquVurwQN2FfYWUhUs7QFJxJHwMRwkgXnqn5TtT1hcyhH7m",
  "key8": "2MWjNAWVUavQQ4oag9Qw417FUcZ9m87xeySKcv8pvGBEM1pT2GNjEVddF87c7b8ShoPpeY2fiy8RqsLarozJVxtg",
  "key9": "RiYjWC5MtrCMh6MEQ5kMuGRZxwRn2w1jZwWcWj1xbdiatwotm6wARuo6gW3bf1qfxR3zXZKn6FYsPWtTJmydUb3",
  "key10": "T5iV1dBM2SaXeTy61RVZFD8m4rS646XopxynZCz2sujawi9jZBwHuyNxHUWDXAwwT5iYShDmyUooSKTuUgfnZo1",
  "key11": "4jF1jscAU8RcDWVzwrEgAUBweeUwmZR4u4uHu8s9n3jd8TPbEqzfhZBJQDTSEsr83gduBieg3R4JNhUpNJANfZAa",
  "key12": "2ySSnrmP2oihQXeg5rGpasZUGYqzb7Ww1Js2jrmyc7RCruuxtyW8Gt8k6RhRAoZ9dmHiPN7o9bHFackcV8ZFEet5",
  "key13": "dosrBfw8wfx1LzamBBffWcZ8DrSifqxMp19XrsjdmJSCdN62BjmKVfxQP2axaaATEdnFzcDfZZp1m4fEs6Cj9gD",
  "key14": "2hBJZSqFyoRhp2sVZed9Xgx2q3MDpf7WDVxndWEaptWCGfGCK2HCXrGrTvZPSCCvisyWr1UdDdHBoVd4xiC7CU9X",
  "key15": "4ndn6yEvmC3xy9F5tnStRBq7hVfQTHsKA47nWwWWQ5r61Lso3AUEj9iieg7MrK1XqV12URJv6MdDhRQxj9JTqVbg",
  "key16": "qSgnQuXm9DenV13pZqEAZ7YZciC5eG7QKAYxLwtXKYHnSdqdpHsUPDLXhmGDP3r3kXPpXpq3BmDosKn5W7i1zQc",
  "key17": "53ciiLm2uvgFu6nXuwqp3fiE5rEjcKdCLusBHqH6WHHs6Uqmb7adDZxcg3UJbKe4ehUu66igW4H9hHBGt6mGqCug",
  "key18": "5S8atakDsx3KG4FYjJjgHdhRq1L2XxZZCfxMX7wG1aDxgC1J6yA1NJ5n2hA9zVMs6VxvMYinxFF1bJr6z3Rz7ahW",
  "key19": "4tb38bR1M175uzLC2UKpxJXVCEL9UjADSfz2d1dX5CT6ec5PiY91Yr27Ws4wWPBBE868Uxv1NYYs85gbMavt2vpt",
  "key20": "4Dy1RzdMRFbsLocquMUWtCwKPkCcxDV1rfvisBAoZZZBtxVtSfMXj3pqSihF54eDWodx7qSBiQ5MoJTrYVDVtgfP",
  "key21": "5h9uvZ7Q1ry4b6bXKkatT8EwoLBvMhVX1SoBWF1Y3AnEt8EabTYDGqGd4E8jN3Z9rQiBiGxmx1acXfYB7B2THNg1",
  "key22": "4hmpZ88n7KGJSg1rQYvNVHfA2x636KXuTGhHcQX9nxqLvXQnyT9BDukxcYbWT4bTmCaSdTYTW29ayVj7WyL5Gj26",
  "key23": "3RheuwEGoZsLC7CcgWgkN9f2h1fSKFScMHYN6LC19YEwGDsRZAyDQMzLAU5i6os54R99jwXCf6gDXwgB3CbEphXb",
  "key24": "FXydoiEbxFj9PWpRPsZpr5T3VjZXW2dqTLRCvMomb4gTCxdmUFkSmTFp9ysvXDvXdcYb9yAaSCbSFUHbLZB4uyB",
  "key25": "NcGs54mWkdJfB8x5SV6JHsQ2Bj3cSa7qumQLGRBxjeApoz6aoBsQELNDwrjjySYwqtNTjUohBQf5Ge2QXH4DWto",
  "key26": "4kxaeMEWQ1VCoSWpJej9GRgufbq4RPkLnTmAmTNpKtCYFyxG7pMGfwU1kYsjHuhXPJabqmhZ7X6FMSszkj4zp9S5",
  "key27": "w56qQgTk4pLNoexPY74pooRQmPGdWxaimdQGr8gZbVFA6y8tpnCMum6MgjQKAfBpRaaWgsaVJDARhzL9B42zi3g"
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
