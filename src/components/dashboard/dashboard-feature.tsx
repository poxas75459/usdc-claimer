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
    "hvBAWB1tQZR8iyEAZbTyVrmdjeFhPc5eWYwN8WUVDgJE9HhMyNMGqs2pDABZ5grmZjsA4bYnNSqcpCbMEwknMMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R1KD5UVW8kxRAjxDFY6bkvYxxqt7hdv71BrVuzM94vT8X8yX6RjFMtBqgnigwYJ2e6YLyoehBgztXTnv9aZbJT8",
  "key1": "4EHi64s6xRLqRDpq8yD6SUFsJqqaYx7fm5aGSEBS16s1VcAxqoEX18e7qeCN1FWmpJa53ZG229LfV1RN8Yypqbdn",
  "key2": "5q979AsnSkfXWA3C2pQEdYZ6etbJCafzkx4nhESihcdChpk67qjbRMZU7Sx7VKr5VobNHtZra7qn8RsiKKzGFFCG",
  "key3": "54tCRLUponFMEzoo8F1aVdouSevkDQQ3GVvuS9QFhY4o8L2GGi31ZuuPLwzDdCJwxmKGCzNFZdSzdqzLenfoe3Hz",
  "key4": "tKuQTHJRzr22DYp1fMnZMpR9S85oQ1YhjGhUxtq3WrNLfqnVG7RoXosjYBzFrTdg8bKRZe9XteRX83AC4JEkfbU",
  "key5": "5xEFoHEdEAExpEhzdBL5zhbYGPYoGoawhULeY2gGh556xoFH5pNhNXxMDRUDfUiVbeqC36KgQdSTNA9kLCxF4PcJ",
  "key6": "4gzCw6QEgKjvfWJuwW3qhyetvG7tBLfy9TJ6yYinbBnGVgfdJ9kXtmdSpWisttjyH43CZNDzozjQ4jL9uUryEFB8",
  "key7": "5ZGrUVwFE8L4vHDdmBoP4VySfQDiRzGeeGAdGQdauKp32zvhikbnyAeR8d6dxTnytTwDj3hBTDgx8gP8uVh6Wo82",
  "key8": "Q72K4Vd2XqkRTWPU1h49MrdhtGEM7eaWCByFXjT5DV1TduzZLoj19V9pHrCyGCGm77ZtmG5X4N6crFwQib13vCS",
  "key9": "5yUDkDEufeCUPu5MRZywPtSg4iVEZiSfW7qDng9wDhCh2RkDga56MebVnegPU5geJtZEPm8HoDvqBNbfY4pTW1L4",
  "key10": "5wnjdu6XPjwpk3sRpZ6h4UVY7bWsLrXDgnJySqk4MvMeJCYUeAyB3y9vMQ5Sg1ni3fiUPhrga49i1aVeZjaeUbtJ",
  "key11": "38KVZUFaMAkRRxPMhPJLd24b7R42KwE9uUK8yoL5jCnxeviCTFG7D4RLpCSkiBLT9GDV39fxVeCLwciqAorrrurz",
  "key12": "3o4c7Q1KeExCJ14FjeKbTP9fUGSNz1AuKSUtv451vjxVgcDaGVJrxbDWdi9HbSXoNkmcdibxhFR9KgKq2yxtuEhT",
  "key13": "5ZXwSvQor3xJiPALEhss1iRC4JiJKPyoVoM3GAr3CsrraxK8s8iuojcuNgas2UkevFV7dDtbd132VRLydwoauFVH",
  "key14": "5cxcYV9MuGuZxcSsHPzWZanV5r2j1VvSrpX1Fo76HswhbrU7rWJAAsHw9AHDXnUvkYNJH8VZrLuVYY6wzksRTqAS",
  "key15": "5UUDxQrFfbi2y5KQi9jY1sZdkvTvZ4Vix9xWmNuRULJAW7vjN33mKn55chgv8egc1sdXXJ8B7APtRyqz7RfRvDHv",
  "key16": "3bxiKNo7CpW1Sb8XuuYxxoyG1RYFQZYLpvCnCwcG8gfLLj9JRootsLwkp2uYLA7oi5qnAfcEicrUMLPHFoNbxeb3",
  "key17": "25v5TAtPZHoN3uV9qzP4MKztHfgjS7Lw69f4nUYCRdkEfFaXCwgBvBucLeFVzdqYCE7M1KBysMatdAPE7gsu6Xiu",
  "key18": "WcfCmCh362gpxD6eARPGRdANZtrX5QMBkbN5syBRedCs1rNDUuwDxNxXEwm8TgHmuLyhzJmnwxrVfhcBybMw8py",
  "key19": "4FHKabYCAiRsbAyXUVxPsMYPzqtbop91mGeAbEtdKfVyd4J9sos9NQC6KhLtNiP6Ugm3EZxeNjD9NonoKQEe9JBd",
  "key20": "5F8kEyZHbyhW2TxjAaenbBZnAnCSxyHWuSSxQwFm6CJESfRYCNLogqisDtYwaNHSB8qfgRA8qab2QucZnquNT6qx",
  "key21": "635hAmTDB5iyurw1P1BBbuW1f6bpx6LNsQiX6g4eVmpZujc4fxh6ycc5r9FCNfkXbPPyuNC1gxqHrtBvJAHUrcNm",
  "key22": "5ZY9LpzErP3ghGoFYt2GyRkKfUTwyLk2f5t6Qw5bqN263Tb18FCeLqbGkjBNMPfwUdCE3imj5cbYYidYNEcdqLax",
  "key23": "8nq4PfwketXXS4u1t7zs1HiyrZ6zydbKuG2BA9ctcPM7TMaT8bGHACzH4DYivfKNCgTbptMUdvTrqEAMR2Xnhfg",
  "key24": "4ve8ockg3kavyyGBgTafEEQSaNixtCPNuigvACG6XTtBLq2Zk8nEeLiyQcw4kuBtzgMW4cLKUakJV27ZTgp4B43v",
  "key25": "4rwuUz2fkDtcYLgQgVippZxDwy1MjjHSQo9CaBUv1SCywWNdT6aTn2M6mA4pwrh4WSeC2emCP6i13oRMSdoFeTck",
  "key26": "3xsP9xVD58K3PjJNpEMozAWpyvfyXKJP3K9XdpfGRDXvojpLLz3UByFFuHrEjDKtpZQQ13wWBp3FACjEUJLrURi5",
  "key27": "2MzjFMN6bdzzTBn6tX54DxArjUetYZxiDpN37wxg1qYzBhUfd6nyCBhBhfsSQF9vkqWbJeGErPfbErgagK2LcbPE",
  "key28": "4Z8e1yrFGF8gFuZAKPwEspFs4NSbuFNm6vEbH1MgrFdJQmTW5BveUGdgTGrLL43wSsQ6p1ZuxPoBG9pXFVHj4hoL",
  "key29": "bSKfwcWqH1S9o7UDB5aZXwRMihj6Tz1Z7ddmpBXCCYcd9p2TavqgYswFrGgJEzBNxaKbAC3DLW77ZpqMG5snoUU",
  "key30": "3CuoUJNrvvn9sSvfYnvnofqpMigWpXba2YcLhhcDGBpYkmqDjg1Gypsnbu4xgSypMYYsCyPSR7ig83KDy6FynTiZ",
  "key31": "2AAxeEKh7nVqcSJotwvCNaK69pLPodP8dA8cuLAwchPW7HHXq3G7PNckEfHgFfVn432JXMrfoN4JTgZALuSzNC3C",
  "key32": "47krkh8VQcq8QNAJMFgcd1747c5zLwahYoNaGLrzeyFgYphh11E6ri73PQmfx7ngGzHqVdZyPfJ6HUbqaXtzT19J",
  "key33": "2JfVMbE1t2e3UwYtRQj2wvzxheEknJ8VQNRpuHXJ3BtGaa8q4TKjVLo93FEhiAQy7872FiiLziUBWBwF7whUNJue",
  "key34": "8yxcWSw6YLkQdqLZQaDpvtNiQ9egjmayeRhLbbN4CJbPHiLifxbpiAJmu2WYtt7LmHouQXKVqgeBEmNejjvh2TW",
  "key35": "5vEiZs6mgohz6a6XaReV5zkFkG6jroc3cxCgVSpoPR2irpY32uPBpYgkhaecVJD4qamCU6oLJxG44uxEkhF52Leu",
  "key36": "3DtSCkkdpTeZNwPm85s13Vz1HdXsqFwXu6DAtLRE7fo6MSfKoBsRkMc8Z4fQ3z1vBrMySrQYufownQJzpetC41ML",
  "key37": "41tgKe1vyHrHpjCKh31Adwrwzm1qVNKn9ZGHpivDjQ68kWjjKwueSd6fKRjG4MQ5vdinc6ZX6iEqMf3S7m6zjShR",
  "key38": "5f4Q3kX4M1E2ypTUcQmqwrFdCu2pHPANxsMyEE2XTGnJXqeDNwtHJVoq6rRKvs9P1ABoQr8emr5W6i8WgLJBCiRH",
  "key39": "2g8vJ3SVRggWZmJ3J5GxKhgUrDCNWMhEFC4i4bWUGYnq7QD66drzBJAAWw8K5H1BkPfcx7Fir7AF7bXfMF8qYtaL",
  "key40": "eD7pQwAg1LBwxSckwEhxshXDKcVs6pCHMMxfZVCjb2gc6Wu2LTsMs2CeShgkbdVgXp8bxLyYoRabNnA4TmwKN3A",
  "key41": "3PihmGxHXTefsYVTJeqhYMM9FrBY7dHmC8MXaWTD6hSsAa2hn1P8finciDuyb9pif6F912VJmNWk7XZb7RWz3ip9",
  "key42": "3iouiZTWDPSNfZs1fGojYLYoLx5jZ9qevSya6teFHpcQJobHnjPxEvSRppxSf8Y1C7n43VFx6on8r938TTBMx9gi",
  "key43": "Wmyk3sEpimSjvVhTVfSCKQQWbX43HSPaBRDvPnVfi2vu9zzALmevLhk4S9vSTiETvmaSuNp71aCq9A1Fh6gHMjD",
  "key44": "5U118EqyDNHRUde2jKm79Rahv1nxTsEdDETZyGFWfLwTB8yZejEZYVcGZtCBo8ukKKA2riwHaernJgwerjQ3zksA",
  "key45": "38fHoMjDEaeTzsnXzpo9ZaWx8yu64RV33Xg4Ada1RAL443Xso65EhNR1JxAN5yBHa3TgqFffgJGbVswJdKsjM448",
  "key46": "4HxAZrcM5xxzes4LFy41SXrdq6y6UYKqB1wULvVLX6C2FPwXbCe5UxQyvnRTMXqF7KhwE3iddVsK7zKizVQLdEXo",
  "key47": "4WpQRGfidTnBxsuMygraVfHGXCJXgMAFjVFrJuXmQ1dCEs4MFof7yTLoYiUApYRyGdBFpF2g85AdNivL4GMzSSxQ",
  "key48": "mmBW1pPQhwAGuAbxzgPHRrogQtdCVhZdU9vXjHXYK4rVpdUaZSf3m1my7HH8fE819MpgmToJVeYegMeoWpFMbXx"
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
