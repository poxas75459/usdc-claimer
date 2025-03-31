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
    "126iiDkeqTGf86MteUrdqRbDXuddpjnYqLdqcVqQNYiMmAHLkf74nHHuCsFMQEV89zhHEuwyWnWqpFxmFAXhks8Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5az3bkEQXGqf5EXmTkMp9jETf94ypVAWipWybwbT86aq67uyMrzzzNCD6NmrQaNe8yKLQi1h254X7E7DBmmTrrbY",
  "key1": "3twhmXixpLrwccZ5RisnzEYsv1M9CTcWAkHi8oRJU55vCuwNsTzfeCFTa3v4wCGbvZxyCdWSr2HNnbHCwtE2eqsV",
  "key2": "3aK3VHzX5Sp73pBF6Av1oNZHbWCUu1iTsKnBTvf91ontJ27Zu6JZFSH8YT7BdDrj2fF5FX6z6V2aYJUmxJLKyuNR",
  "key3": "278YNt5U46c13xLj3KGqxDECzkg9H3T7B4iHEsZfuvNJKmyZK9pYfiXwnZWsGYDtLtMVf4nJNNqyiYFR6gmpiZmD",
  "key4": "5eHv46FNb6v5vcbdpMmVUtsdQyzNNSuWmaEKU91z4rH5sVywdga8idjWDgxMxAbDq7U16CK6efu1hj8JR71ToGK2",
  "key5": "4kvp8E4VF9GL2oXr7XdtXBSfAJSe86iGQDdVv1LCQcq23KZMz1V8f7PiqJYL6tQQiMm15HqD5Y6SJ9d8Rk5qaN8z",
  "key6": "2H2KUBEA2zBzzUkaWuVYBgn2atBgrGicK8kDwhqr4KPgWMfwtheYjhK8ZcWTTvGnYgrpNWfkr1ZcyiYjwMXc5waz",
  "key7": "2whLmHN4xaaVmn7Kn7MoNNW4KgtevYsKjNeXqS2pFLxvmbitQDoutAKQByf81GDE6FhTHL3GWPd5gABqWqZQYZe6",
  "key8": "wTjv7KqbC4Mp3bwLqbWFyXFuqM3mYTH5eX515FtNnnsq7yhvne71RYLfCPdGoCRG1hF39yybQMFTuYNKPY9aqwp",
  "key9": "3uTx69QyLgwPd5fQtPJt7JJnHmuVjVwkB3LpYumveA35QjaHfM388EqXTCHQnd63akcgnmcyAK6YZwr6E66Upvri",
  "key10": "53uym31fJtZkDMVTHiykh2RpqLdpMeyA8rPspw7xHXnkS8x11wWjipdF7pXVDXhto64KjhYixpnmAxrCyWTH8gvM",
  "key11": "2v6Yy543ak9qnAeCYk1JLssbNStU9wubo5d54CzwkbQAHinQYMyj9Upsp9mnKyy8j8K1aJ3q9YTKHPnRQyPNfqTH",
  "key12": "32tVK4cxqGakrtJjxNWzsYsAvH6KsmSCRarqbR71C3Tgpv7VjDZX8HAq4YB3kwg21buPhjMdvednqBUnNGVpCGWh",
  "key13": "5unTDgUaHt3jnHJXh6b2nzESV1CDhZ14tjjfvcTwxt2BidDAKKa8UN8vyYLfP1jXSAeCP5tWFi4kcLVhkMjJZYRP",
  "key14": "4qLWzncdPujVvKHUwsyb6WZpTQEdsq9eScFzNZq6c3ybmZ4cCvbPS1fQdVEhfKSuNSUPMfLazwCSvJgLUN7tQACV",
  "key15": "N3RjKbxdRRTXUgY6xg1wYvgiN9bZKdpj8NdEKn9xtaUs6WLeRjH6eeHJieivCoDd5aSAkfSzsaSYP7zxttQRgB8",
  "key16": "2UU8njfEGfHmJZy57Xr9XNK53XPmcAhxyNy3yuc2BMDeGq9uVaTrDEkXsT29NLQ9EKmTmiwasKgiwKcfRwsw5mt1",
  "key17": "3WwhDi1qbegu6qEuht6AKouANXRzzeQjvxxcCVVGUpwDSY2R6FtLDJAZESg6Q65kMHo4pVZusPviuefkDyVzSuZk",
  "key18": "4ZDDYzPfmHyoBa15b63gP8uBBcbYGc2ntnm4auBzCCwrX1aFceRSEsnLDPkqcdKgLUSrKVwAxSv3abjwosYCxp9L",
  "key19": "qT3cECoaeKjsyr1JchVdeGm45bQUSqHsXE1kKwL1C4midAiNtMKy41kwXmqPJDrgvR2WRZU7rAzwUsrCoCcTmZu",
  "key20": "ayTBKKPKn1wBADZN1CvgoYZnnNr4jEv1fEudEbGJfNppQLB7HiXmkM8p3uqUp5srm7uuAVgRcgF2jpQgFSdXBw9",
  "key21": "4tuWjZuDXdhEEFS3NRJgRTnnPtdQzae6qGAGEfZ3rg8xkgYiAPvwMJ9pgxffB7VNnzyYpcUBeq74UeAfC3b3UMCa",
  "key22": "34UwCpCJgKVvNvHTkZdFnVb2JTvCA8UkC6EGrVEt1umxEnHKwJcQnBzSEBnCEUCtKEC9eD4EBeChU6nJ6XjqKVXt",
  "key23": "5hVyLYwnAwbqyF2yxnp9jMYffeQbzeBvNiHXUfGBxCHTcoPn3uqBeESfHbCNz9vfD3XxAfi1qdvxPwpVC2ikAtrv",
  "key24": "5cfz1hTSVsAfj2W3AERJRLE9qU12uUGBVUg4Cc5igQzBAvEcSX41SGvmErYqtMo46ekX5BzSEdYo8DcecSFFnT6o",
  "key25": "3trzARJmALhqdroxZcGXx2WbUN72WQUG5m1wJDJRvVbMFqBszdyPNKnT5ADQmFgJr41vK5pMPSicGETomYMZsyeq",
  "key26": "5xPjCoGL9zduHVcsv9avAu6HSAFxNQqVy6R2DBPLoSJAH6wDRMsMv4nKyhxHX3WXrnokBkmQiBGqKsjz6kiYQLGE",
  "key27": "ijQrAKPHpmYaSHdqUt9Amx7NL1siAqntt7okP3o4kL5w3ju7PmQtAx7aFNKV2XqSX5EaiyWDdTpaVsBGJHpJsxs",
  "key28": "49V3AnZsnB1rVbpkSt1FyspiB36vAFpRG1KsQVFYwEjqSzs3pHiQ5L6sArm4e3HtY5W4y4ovp1TNRv5itdT15dNf",
  "key29": "3cpeYZTCtmo3xMU5aiVupHHZCWZw6WtfGhxc4YxbnJujKuWvtSyx6sjSmVGK2ddqNLmdpQcGyqSMsZTJpCFCUx1u",
  "key30": "2cweE8JQFM9AmvwpFpXA9H7emCBaNXicgdP2xe1jAAgab4SxMmDLy2AxKt8FzRwDyvJRD3BFgporYws6jGByCmfe",
  "key31": "2WxhpZXTTZ4KwjRcszDB9MAbf1b9sW4gNjsa1q3rAaS3eJDGf6v69jUhrQca18Ms3CyCM3cWEvTPFu5K5hpEuazD",
  "key32": "2jxVGFf63AUx56p9xaEmvS8tMmFy9sSDm6K1RVgAYhbbVeqToeWz5D9Pza6zDEhGMDbpdDCBwwH2ftgiMG91g7Te",
  "key33": "2xfaKCgqVuyqtKv3xG641T7E5suzdayZqUVJQgzUiMpLDNNLwrkc2YkQqQBhBPZVFxNqjz5dunSpu3SqnSTwDva6",
  "key34": "3GaonKyjHqC6zFnphDjzZ4QGRnvMY8KseHYNZfSMPrCCKbpNKVFTxS6DZBckBhSAB6AEPwzkfZYaFasaBWqCd17n",
  "key35": "4XEbDiAyypancwGFkVdBjD58Fx6Jqq9okUimRLEo52AtXEesKkjjdT2ceVk5tPNpctpdzGRct387GsT3nfh3FMBW",
  "key36": "2bLZU9WcYwUTFK7Mah5runufxYxBqwDgvkNr4KmaKfrQvZgJCxdjWqms4n2TPMJEtAqV6FK4RKFybkYmyrkDzsK4",
  "key37": "3Ywp25i3bJcWwCaww2tzATKXCj5mPien3ep5brkGZ9JH5erSPtBAC9eykQhSqVcPee9Y6eGoxzoYkQoKfUc2irkt"
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
