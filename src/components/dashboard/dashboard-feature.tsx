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
    "2bv6JL5njzdZKY5E6zwT2jitse1jDUDeaQkVtvcBPLBzcwSX6K1PLJPv5XeMDgewXmnBr5zsHUYuAvxS3nn4pcNk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mrJ7kK9qTpAp8cEy5MrkhYqcSmuSM1DTr1veAYk7V4Ga1e2mHuhNQr5t3bwNqKyyTpHBbTNzQ75Xepw6yxAzdV",
  "key1": "4oxWkDhq9MEEb1eqX5PcTop9x4GSqpDEHumLFC3N8cDNpEjoC4NVXzBQx72dW8tnQuDhH5x6rbVb7zdAhj89upDn",
  "key2": "3dGwd5Pkz8biMgyJf667yfUj32eGmGdLjLq3K4Xp2qb89TmWZACtY7SLBx1K5NRSkwG4upLHhBURjMAnZuqW5HPj",
  "key3": "5CFfTffnqNVPfQ1bPQEfb1miGRSunUdBGzrHYVsfMomtRfUnm5SHBS2V1MeThbeB4JA4KTaMkLyQxVfqjRqwc52J",
  "key4": "i6QExTT9sVvezxNU8mSYoVYTyTk2ai3Jxa42HrXS7aRqgXfZ3ix3XnbgAqJUeJKN2KewRyt7RoTxTptonnh1esb",
  "key5": "PFKbZw7KyugA7NbkMD73BzoEh2naxzjUuGEb8ZVc9xX1PEojdL3CxSrBQuFtrUhj1JSUD9HybGctubCTwWmk7iT",
  "key6": "31ZAtkxfWLqZjLoACYtzn9dYdtwJZ1hcja15oZJkfUrTdimwP7M93cBfCvSZt1xC3vvv22W9h2nWmMvYAEyLVR9j",
  "key7": "2keSMyF5kc1j2whsGHPi4jTtB4pwjbMT1a3suHr2zbgBXzV4Jad3BTuKTSyeB4HSLHyR9eBqhmjfSPLoGffYriJe",
  "key8": "2k8Z6jBv1tpSryJ4FRy9rtz369UUETzgw2NZxSAbQEHY77ScG1b2ZWCWBy5YKuDMEGKCNUa3jLZQcP6sqQQf4iAg",
  "key9": "81wfHXM6dcVabDqdCPuBoZesZzCjxMuaSggD5Z6CjgoiMnYv2EVAN4PabydZ4E8GdDEHNMijV3VSetw4jW1rPQ4",
  "key10": "35RzXjyxhcG7cFT6zMuz34ckkGZsNGNyxLw5hqcc52dn3RtrEsWjKA6rqZUAABzTY3eMWzv24pNV1D78W5GfJq1E",
  "key11": "VR31JA1749A5fqXzvDNQ2js73qqu4kXbCjDHoNfWXXcmELbGRzUZYCtDnbEH9sRFwbXaAnAJB1VhXkESaE9qV3E",
  "key12": "2kER71sUpeMZujowW9mB2rMjNqzTduoja62MHNsegkyteW3zXms8Yj5oEn8uktGNSkbdXCynDXWxAEZnNujEsKT6",
  "key13": "32LhghRfbxPu9tLt3BXVuUmEioP9bNB1MAsSaF5J1ZtjK66x9BS5BBkNZgAApSYLKFZDFVVrRUa1T6zmSph3iYtk",
  "key14": "dZcybfzYik565XtH81JZCJmmyDA4gLQmKw6VGSCnHj55UrAiHbVo32eBBctACTpbzsCj8YjDVWYBm4Tc8LeWNyG",
  "key15": "29EAwWV7d8xbeg9gGdAMD374Ax25VpqMGpyezGWMq5EPmTKGZdYNZaxJt3d6QJCgpijCWFo3EWhE2rXoX1J1XViR",
  "key16": "5asj3vxy1uQURYzKT8AFdJYAMUeYcKpMCzwogeoro2tvUVTiuh4ruJTQp3pDFKi1rLYxXCYJkJqF4hs2o5WGBPzC",
  "key17": "2bEjiPaqdSN5GwgdD5bgLXubwUdFNiSYjPHy6nxUKf12ekxo421F4CCgaRnL7GcuZM695h2GRpEieKNWEFHtTzux",
  "key18": "vxFSnxgXKiZgW6XRSQWCGEToZ7C7i2VUTtzx8KGJrCyzzf5FFSCyn4ugkFC6SSY15ap5RhgDS5YUtWEMLqszzL8",
  "key19": "4AyjiSSxDYsPWFWKN9KjdTMx8JGEyhA5mHmua19PEE9dX9MzcxUqH1CiwJhz3au6WhQ2j1yJ1xJdqTE46GH2fuMs",
  "key20": "5iTW4YfXcY6uchmNDmNNU1Av8CGzPQnBqypECb21uG4Z5FDWkEq7UvncLKfLEdfxHUgBG8rBDmpQngk41VmnRU1E",
  "key21": "YKCCeQy3Kkbebju9SoHLyJFapcuVGp6yASAja1YzpF9BqwNUo2YMRyByUH3GQLKiikdDm4KWFR5R5ozTt3u94ds",
  "key22": "4XxcBf4xEcqvDMiC8KC4JP8n9WB7BmxDLRdo9xGueBY14viLKoXtaoVyR3PZFSAmFvmN58CMYyKCsxFrS1i3kLZ4",
  "key23": "k3erxaGCjBhRCfPCJ5e3Stvz2bN8ja3TU9CZsQfPyBJsw1aPd7ai2RLfz4sZmf4kCz4Cqok3p2HXw4VjJTouTve",
  "key24": "3KbtP12x2HaXLKE6Lh9NGApTzc11mvewEZmoJ9qzLoziW9Fn5aU4KDidNmK11cCW5MR6YBYBA6RcCD3A9gMvZTHg",
  "key25": "5VnN2VqnXYyrjip8wj1i6oXbSytpJ9WnfzUqm66foEPYSs2a6WrqU9qsjcSf3iyMWFshbFjbQ7HVkKdXHV6svD85",
  "key26": "3np3WLRz6kFCvUfL1vy9B9mgzwGy9bN4CW7GKSbwEXgSETioRKfQrgssLibNjiBcmeBArCi79UHACFyFGcw8LPCu",
  "key27": "2K2wXVTC2gubjLnztCWucAcSE5XnzB3xEm9VSeJFitRarwD41biSM2cEymdTQJnTVipNCzdeHNw71HKXXyNEVyGd",
  "key28": "2QsToJALVrtczEfehH1XUoQ8G3W8xa5a5DRCuLtvKALBvBbZ9vtkt2AAa2NpxM8nMPqFh14JxqpzeCGVDo83GN1K",
  "key29": "43yEs7XbFQTm6XndCigtH5bFvVGvZBbqXcR3ZQtrjQV4P47gKvYs9jtNPRrc4g6AKm6m7wgfqEnVTbpqVfvjvth4",
  "key30": "UE6Emakn84ePNeGMoUTexK9f9YTafv4QetmNHemCjy3j8zcnvj65fALJZcHEZ9KG5w5ebCj4tWWQ9Nm3LAwFde8",
  "key31": "5b9rWZxxEq6rLYt1zqajyX8c4AR8g8bPoYHDKU5osBnbiZxUe2J3AE6zUkNRUM76vHPbwkf9SZS9giaah8pmA4tL",
  "key32": "4No1ZAxvSdkYJdaXYGHqChbA1zCYtLmpUGxss6MXTxK8FjFMDSnyE1EsrhtK5w38fGj7wAFdb3gK2NTnLhu8XHaW",
  "key33": "5DUegnGH7aMqw99kfDqxcSpFQVdB8Kewq7rh13hXP9m544Ks4cvgX7dGbzwNtSZm4YmWZVAARdVLkazofnfc3ibG",
  "key34": "3jNc39TggAtcUgATzV1Goszgz3SWaVLBBkJqTicEyjTy88sqkQdteHikNsgkbkkjTrDRnAL1fNADQdk33gWhYiy9",
  "key35": "27DXqSabVnxgq8HaeYDKW1NMoyQDDXYvLhUQjrTiS5kxwgmTyCCrAJhs2tYseUjWnRrz3Nj4hPQbA6fSxPfUA6Q8",
  "key36": "3HqawiYJeqg2J5EBWKMPZsa2Zh2ePNCRnWhLgbFW2K1hDNLZQkUvKLdfHRb7mdBxkok8BD7Egk2DANWTMhqB1CEx",
  "key37": "23wiBT2BCXVJDykG3m6L6UdatHEfhc5H2DoopsCWXmLFZ8MJfYHtXYXeEtCxq7KsCr5Dy5siotcS1ng79JnaYkN2",
  "key38": "3bLGEPWNxf5V4JkAcHEhZZoBZk4DjJ9gdJNvbFSiRnMFC3khuhip9JfZKgk4ZaecjMLZNw1T2GY8931dEPWGj2gQ",
  "key39": "4iCrdMMX2z6sv34CT9kMdZpqPqfWta28XTPvuSQPWvmbK43hNpqM2w9JYQ8qo8SYv5eN11FF4oNsGGa7K9AvVFR2",
  "key40": "2P2YW8tMY93E4DEFZ4k5yCoF8wHKELpyeWhsT2Q7aGbd9aM8xbC5NmcBrUJoNceARb8ktULgHKj3LwHvYg4EgsC5",
  "key41": "Pap4xXctwtdbEKAtJH6PYqmbogxwLmLY8ZF2hPZz9PM9o7i2aCUnaYFPiriW1c5y4Un6UH3AzR5Yf5KRGxRdQK6",
  "key42": "3zM7LMtpXwq27mw21QbfEgFBF4ajDrQ2fHeUwVZwhiyWiZmWyCjL1wWgX8vx2kUxuQ3uAA6nUX6bQVwwyH31x4cA",
  "key43": "3jXuth5kKwtBc3oTn2D5mRvyXHXut3Z35bYiPXXRRsi8YSz31DLLvTrTDUG9CeQ4jLsGGNKB2XKR2rztkXfUz9Kh",
  "key44": "nhEXrSLcEUxs6F6Kf9hRQtP5qRzXTbm69p7gvbtr34ayffSYq6Y5MVtA27Nix9tP54KpuyzXak9nLsYpDbdFi6Q",
  "key45": "PTAPVjBz3kjcyNJsS7yc6VKhocjM6DphijVMSsx5WRFxhjCqPPQFVvjxHHpwrAy7r3dsKsya7iLDAzzddNodbyg",
  "key46": "3qCfMPUYVpnANHpL5H4f2RtPCFdMPF1qDdw4uRMcHnwJ7dzHpNyzxLYWQh8w7U53Tw4xQsjUgBXMMWVbui4GZk4o"
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
