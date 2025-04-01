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
    "594M3PfnK1EJwLw73JT8zcKKKjpWs39ZtUDEv3V3bJ19zKydsF1GktudcnxjWgRbE7haPHAcP7AHcdhYjzRb1tgf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PLVXnUHhU4iaY6xDFKGEwMxdGBZfgcTSesbv8mFGbHGfB72YV4hjmXiu1Aeh2Ro7FJHj6mWbo8TxWSZVYuywWz6",
  "key1": "pvfKdNsr8FvaYoxEF8oHJYgADB8xdrUMJtJrpXUMQnvQFufRZnWQZJMU4pVKXxFGS4VWAg5V5nJMV3Ku3Nm36yB",
  "key2": "5wuiwwfWts48LVDMcikeiTtLo3uEBVmeaNAjHfYzoPuPZwyjKEHoaLkb4Uoy2cXGMGpcMhKHKJ4kFJNjRhh7p9mX",
  "key3": "TuzYwzzKw9DdoJFQfAjpnAvKMVeTLzoU7GGuNZSPp9D7cCfkSXZDZkteRbwEEAqqYj3YZZp3kWUcSo9XqTFXTov",
  "key4": "woMDfBQ8GeX1AUp63moZjU9CuhA422etCSB86se26dNSLKu3Gm2MX7Ugiw8PWta7RqD1Ndq8Z5VeBmetXqPYGV5",
  "key5": "3GmykUGgDGBmmUKjbSv95EbXX1dRwgsfvgT843wR3eauUtHntTdTwtpwzmkfreLijwFE24pZWpxRkNya1hobKN6X",
  "key6": "4CMZyBsUGoJjTkEK8WyvNT6WMZ3RvtGVqeATTGVp4tdJtSKCjE6vA798VnMVdb7QpnYapnDSHPuBaQPudmYxputU",
  "key7": "2ZVbp1onTtZDHpcWYzqx2V4WcLRuKiowX7wV3XBLWbwLo5XebDFCPUQCMqM6wHo5WhbB7G1iy1nNDDc7eHnbGSy9",
  "key8": "WLzQtwyDFt6syL3JZdL3pQwNLpbFXSnVseMvXqDBCPSNNE7e6Cpn4GVwyrHFiygt1RbMJ7FAc2oTYU927w4yXGa",
  "key9": "rpJQNr36uxmNm98kQiufcuYJHFDP1hRxuY4PD7v4cwvG87DiyBb4Un3oL4uSCftfg32xFugwqs61u75WhdFkdAd",
  "key10": "3WQTfC9fvit73ADPnpG9aFnKDnRRwyqdQanx5HXC7ZBFjRyHCo8ko4tsjwvtXhCUkcd2M5jyCk4dPWyKmHwPQGoS",
  "key11": "32cPACoxmRaJ7MizSbQ3rtRokLu3QPJttWzJ9AaALiS6ak1njexpvij15tBV9fXxXnuetGQ1cQKS8XYDz3j6cpru",
  "key12": "4S8b2rwdw5iYyS6SQSERgfamoDRpEMHsBaXRBsiUYrksbLmQ6sjoHod6UJEDbzRtxyT4SCiEb9FtwtUTL2x5NLig",
  "key13": "5NBDF9nN83uESzSKF5kb14mtYVxBhtBciNeqK4ifu8yZaCep4G8V33dZ6EVWRVSHNJEJbgs44jMmWimTw9ratLCe",
  "key14": "4myCh1WFZn8xR7tSPeDyqbGRPL92sCTE5LLRMgXpsBrqyP8J1C2BvGfU2FE3FPqrvxiVQ9Aqg1ry2Cb2woNL3gbr",
  "key15": "2zsaJA3QqBMd4Gcg8nNgVntBx83q7f5TUzrF59TUiJ6zE54hb3DzpgzVP8hRBxXbUERd3Edswk8RaJ7vW427XWoQ",
  "key16": "3K2ERs7uyn8UGJ7o4uXyMPhzdKEQbcg2Mx47y7aEPkyQg8N5eNNPt2gyFDRAw1QjViWoCQAGVSeivSEpkXj2iJKo",
  "key17": "2d9FN7iPvv5PaE9YEk5wN68D4HQkBNmusouDZ9hAH1SgTuZEJ3qiJjtnjvdjY8x85xcbdmghaEEyQrjDmH5qQHGs",
  "key18": "4jthtY4UCjTvVTj7zxXxzW7BuPxPikJdeBvjLJTudSuzB1UQZkfnhg1MGiLdAtLSXyP6iYxvc13tHA1qL4D9VMjE",
  "key19": "3RE1ZhhiHNp8RKvYSkvT7oXaqKUUtqPpDF1mgpHySRadaTffym1Xvbgd6FXeaQYCpsghAajnE346ay6gdVsbLdFh",
  "key20": "2QHwKwrNm7Y48XVzjdQ5Q9zUctsPNzCU3736FJd9nw196Vrcm5MMKoyJGZ2kH4NVp9ekogbuhvoYQ49YgSMx8Jrk",
  "key21": "2FeccDrv7K32Hwwq45x1i25afD6Li1QdcmjY2DfykQVnH7mJAfXVv5vsQHMrQzc5j1nuBjb8vfi8Kx9VwgMCQPYw",
  "key22": "4q8ZqzVNJge39NqQptDyrZSRnBrFozRfBgHZQnAZCwh6afhshG92XqYBp23cZc8EvtZJDA6fpaL7WPX1VvqJdJaW",
  "key23": "3WcVfggRhi6XZZUgadYkNNdmRdskn7gHTgp7xvz8T239J3EFzqYWxBMqfAigrgA5j7xa7Hxc87ivnbPgXXYj4JAi",
  "key24": "GEbuNVo2qgAueo7ZD8oHWja2dbZXDHNAKoFFLfhege89yXTxmooJCuk7V5xZre3sRQuUfHZPPYLdajsJa3rYf9j",
  "key25": "2b2SHAu1Udy66SU22UGXQ38xVPBedTxD5PhGZdVTsBWQeYY9Zrx5Tbhe42vrwejXCw3TAP6KYoNgw7ymZVrgAyGt",
  "key26": "2vLiHMTVs71N3esGRtGmEeTVU1QFyxquRgDaWaj9vNeNhcdt8UT7JeX3XQZ3L1JTEV1aCzeazPmwDjVnWcx2WKUv",
  "key27": "4pkrrWMsCMArbdjgTgyKVQn6jgxc1QCtaYV4i3Y4xkyJVYqvpuQSdh9k1vbznGMDfeQxmUTmBzHAPqJp2DnQbetq",
  "key28": "P9zUNsYQxDZbC5WSHTd8s6v4GUoJGodCpzSJn9Bm9XPVfT1EofyfHRtR3J272sqwp5cApztp9cogMofFHDUEdEs",
  "key29": "2XXDKEHA3NppsL5o1XaZG1VzGbaDN913LC7wF5BuubVpmXdVZCf3iDgUUQZjnuFgMAv9dJUjr8Z5Fxxeree3jG8g",
  "key30": "4ihJWXgqQz6aV8TNY8KG7bJPjz2goAnt3mHcRa99zzMX8G71nPi9bq1ThdGaAm5PWmgododsPqfLqyqMRqeiuqXB"
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
