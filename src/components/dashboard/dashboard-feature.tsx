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
    "3RGtUCV6sRbCZue2esb9qds8KW9YSJwYqHPuoumTwQyRoQyfVyaVa7NCQJBomiF5VZvzVPyE6PCZDCKruZcDaKJU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EmTXZDeU9wVmNjQK8MBtNK9bMwri9PvRhqEoPf318XAaNSxtY2drtvxqFgpHipysM3Mwdnk9NowtvMU7oaEhrZ4",
  "key1": "4FdtMdr3N6AupZxKJW7tfPgL6TRkghnsbfJNUJym6nLttYK2T3fVFwgNpoopLPxceqUdYUV8MzocmKDhPs4XAgd8",
  "key2": "4ZzcPrTLeVXcMxmm62Acxzb9xRdc2Z1LnNfhdfZtL8XpBHHUV9YYR5x5THphAGMKYU3BMNDfqAEk5AyF3xh4kRKN",
  "key3": "3RusC7NmnAtoFTQTpz5TjFHhja368cqdqWzX1Sgf1Wwjg6tZJSzz11n5jKiNqtP8dTQmPLEN3psi494f2ymG8qRL",
  "key4": "4ZYK553LatdYbrXmh4nyWtaG6L125WdWF418mUkg88snv97UggcAKLD4tKTxrYTeJrsgYD3yqZJNHRYib6bRms9X",
  "key5": "3JnyYg7rn8FNUtgCx6J9bn7KB2kS53A1z32HRpCMKfySV4V2VTjV78oXfk23H4Hepmv4fjorM62dt6xmiAdUq7pW",
  "key6": "5KfzogwsdZHHMv5jWzaWc6Qqae5PUg6z5M7WGFrEKvqdc5UyRYdjkDM6mnUsMQkcFidibZtjJnqqhgeqknbkpEUn",
  "key7": "2mwasHLzvcPH2ZJcCAjsCTm5TtcWdj5ePVTizNAGjj2CAqHXcagX79M2G7HnnGLhD3UF71j9edSAYmbmGjr9QmCw",
  "key8": "rSfZj11qN72CHSsXzKvG7WzQEKdjbggmTH4ZN4TGYRTXXsPU1KxL8W5G3nsQ7Z4Y6aJ8uSgVx4Yu5yoMUNmKg7x",
  "key9": "5egyczHFiP2PafmtmHE4unrrFPzrPeCvCowEWqVT1BEY451Dyek1dBtKfw9KdoVxL5JrgqiD4uk5tBDG8hiGgE1Y",
  "key10": "51Ud79vZ1zLxodjLR4Y9FscQcbhEY6sgfdFoA6t7NEszyqGiBvX7Auj3f4pvs4CVzs6rHykZiRaJhsaLNvZ9UV3b",
  "key11": "TwUVeUTS8R6UvjmP8W7uWg7jJhqU2MNwNCs2FoNYCn4jBDxPmhqAEtJibj9ffsHYtizK1N59DhgKmrG95uZefV8",
  "key12": "2KgBpci64Qf78ifr7dusuj4hxvYcrntAezHQSeKtgrUX7UcsVKhuqZ64fL37G5re2cw2YyPDvj24KipWMfFpG1gB",
  "key13": "YKiJydHdcCakXv141ezN2Dp2y2eqHrF8mTU3j4KPribXBWhrLgVpso7zciofJ9pFAv84uEp4aHGLNCFVW1q7b3A",
  "key14": "2fJsyFQy5HNe4kqdZu8Rv9v7tPMz4YZ18YE23rUf7x3Go4q31DKgwrtVZTrpUShjZDZsgBkkXrnKhVHrb7Zc9a7m",
  "key15": "9nZ7RvYKytmooatJn1myrXWxxfXSWnkNyHdCBkrc6dmYMqtg2dbpLBZVugToQWoeaWaPydmEiMk7nmEeE3o9qDC",
  "key16": "sewrUH75G6P5tU9UHHfxQSq3L4Uyyqkkp5BVG7of6TM4GPc1KjHD8HifLnKDr5VhPdkW11JwJgj4YGZoGZ5sXHL",
  "key17": "LXSEfwYfY8pE1ffVSDL2LALQZV8LbpaeCiV4fLx25uZ83TsDBKMvzB761V1p2cN8cM42gVK8cVuY5ewEeoXEzYC",
  "key18": "2jodAbXuQdqu3QuB4kLZx4e6bm1QLwpXGuHkz3s4yYZZgv6rckUYvTYBemoGZHMa7jR5CS7fpHqz8oGMWpPyXFf2",
  "key19": "2uAAaqUj2v8rfgeLXJzDZwPfr4hE5ZCAfxiViQFCR6n1tYJokNfahLPnY9hQuzPKg3Mn4CorS51pFFmjSpxKeusg",
  "key20": "2mR5axufTApbzrGBH3MUxKHwvk4HWAfDhcD8q837MZwSD2HG5c2nNzndKkpWYyJjuDyPmiLw8sT6hqPNQsEXY5Ac",
  "key21": "FLN19UR6thua4DZqDbeMyrjPHKPJAHiCELMXB6SPMC19mTxmeoyTsraMs9R6pjWN7BRffMKjKKuAPZoqZT5FDqi",
  "key22": "2dThGKJqG1WfLzp8Wb15HDv7htJP6R7qzNwoEszwYaFrHQDNUGVdQGCPedeQBdaVNGVY6bPyBYPf32Lyw3YdNVnJ",
  "key23": "3xv4EKgqjXNPxvR8shdXks7okB61cEYHauBAMrRWyZ6km3d4FvduGrad4Nh6pSFmYnR71FhLB6dRKDkDGQrScpkk",
  "key24": "2hE7cfgnfRHpRMcV48wehbaGbD9chFaSPM7XKq8Eot9Bn6NnzBW8E3BLJT8Qjp8HoLN8j8zcknmu6iC8PTCM4MZL",
  "key25": "4sLJpgYjmQrVoiZiN78tCXjsuXEfSMpqmopg7zDGhygANydjTdCiHvbro3zhJ7FSwmX8HCXiwcLKn6D7d5DWyPgV"
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
