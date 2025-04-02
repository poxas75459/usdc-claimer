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
    "4GDJJ7dV8s1sYAM5sKXA5TeZaL1zU8RfhhZfLJFiaJ1qwhV9pM6bT6isKPWdy2Hagkh9JYfJxZF73GLyYEb3vqD8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aYVYkzomfLkEnP3g1CGRgqzuDLNbE1KRPESaKiZsKX4BUqnuXkaGwFDshVSxUmWxknUNrNZit9Qr99dHpF3akp2",
  "key1": "2Z3MX5kahdRMsq1TeRA57gJFeN77DCHwsfrNcFumGPgqc13dHfKBaZuxEbDJQmwVfqnavyFKZEfFw42QuFARB4kP",
  "key2": "49fGB8JN4zZB8rXvG7BZZVEgM2yXaH4KQbZbUxvmuHpPpGLimHoPXqPUbf1QT3A6vAWN4bQ1yitY9BwAQmrH9Eer",
  "key3": "3sDBwKUqfzTQufAUx2dXQ7794qZ8n9v5uYz3GK1fz6vWvLpLmKTg3RkLfMP5gdmeD1ZrQzbnMgn6uvbx2djCh1yT",
  "key4": "2i52n6tZUmEuEWUF56q7ZCNFrkqeoeVTdGUp6DpvfkBxsFTHUrmymUd1zHk5mGjxvG6Td6MiaZPHUkvzYQyDzuJv",
  "key5": "37zVjqCtuTXJNaWJdPay2yui5WBjRSpvsQdYH8u7yyL7RXHBXbdXu4XKdZctfcT1odvSspdQGNKFFE3oqVXkixpi",
  "key6": "4GiiYUYMg432AZj4Va1vs4PgBULBeVrYWZExrUipQCB6P4mwnT7eRtKGB4ue7NdZxrxtVTJ1mVHafM4tRGbWGX7a",
  "key7": "F69d2MnrT3HsxSN7DqwEd5zoVC9S2923udVfMmiXXjB7PuUiuFZTYcCSTSxaZrCUxgXas1bxJpox1aboV9D7GbA",
  "key8": "5rS2rpYGUfXDDb9vmjAJwTCpP63ByvwvCfeMB2dCSrGoSaCBaWy7RgR4sF1BxHnTXtrFXtqBjMZkFUCEbeQDt8uE",
  "key9": "2ytXWLNtA5JYrsDuTmz5xS92D6i7J81XhzgeoGFxB4WxrUkXNXTNh4EJHuzKyp5GpmTMqHe4UoqhqCRdP1YVMASR",
  "key10": "511CmcnFGtbbEG7Y62WLUDsSXjSasYdpSu1yJPjE2kwqMBQuopFuvn6HNoJyMSiix2cNeXDJiweu9Frvc3MKMqVD",
  "key11": "2L8maqxtF7HEaTVKkXVqvcBV7zwLHgWeFxzJQu1QyKRnHL88dnioAiyXNzguKKdrq8MAgG7vgi4AQaxHcBHgnP5C",
  "key12": "KDTkFJtkG3TPgjjw7nK3JP6jsu1XqXB27fbZRa6qd4yF7WGWEBwvkDWABzvgxhGSScPyKVcNQNDvz9Emtbhsx4j",
  "key13": "2jYKzFaaEq6tb4GxSsDtuEF9szaYVsLectmqte7KAUE8wQmAc5Nr4fuNfGWmykHyUbGTPt49LhJvZbYXd63riimr",
  "key14": "5oFNsFTXwxEXFnNoPCk1MXKn3GfxW6V8DkQWwXrqKEoMVN29cL64PtZtBT93DnNiLcYLUMhuJMz4Wpd9Mdvts6Ls",
  "key15": "64HYXfw5z9xNMhVqU7KBH8NzPQHAKq52Unx7tbnNpfCBoDCp3Jrw9zDnVCvMqtDD2qaFM2q9cSnkxRgmzRwMWSgE",
  "key16": "5uZrAvCQ4GWV8rh4rBMzjX7RnuJoD2WYhFFoSYgULPruz3GGbKpoS8TJLrhjM5PFc8aSrVyKPv51kUDsx3HYXjGU",
  "key17": "4MKUwWSX2YEDzBSv6NfFXo51T6wzf1PJX81bvyVK9SPBBQdGvvfeUJLauDNzLDoJmRGUi3ueLAZu8eBBwxwnRWFU",
  "key18": "2hy2xCJ9s4o2i7Pkro1fHZxW4rMidpm2Mb1n4u3AUULzWGBG6mz291mfRHXff6Eqdr7NWmbDtoWH3dzNHqpazKmU",
  "key19": "HYCGBoq9zS3GsgRwXSBqa6DjcoqQ6Z4bc9x5FnKXqR4FMsTkKCq2toCVXo2fL56SnJRjromyxaSY4JaTAFNn4Vu",
  "key20": "3fsHFf5amArjF9AVdstWmp9QrzXG9hayxU6fh9GDnhFckb2osxzBk1suSyqrEhkxweVTmp9i3pkGUhnddJK1Vqdk",
  "key21": "5UzVXTcTCtteb4ZqXqJrDbFf1Jzq1NXuap8SHeE3XTGAi5gZ5sxEyLge1sEUGCwqW7kcmVxDfjD4KAUkdZVqMUvs",
  "key22": "4SFJJgkYGLHoeUxd7RBEjsifUhtcTAG3kVFg1HQNtmdGE6WdubNqYR53wC8aaDTgLLWriDeVEyNa3MZuWKzz4UFS",
  "key23": "6193DAQTJUwBB53sfkDckwekToQLBD1AdEABDYUACPTiJZnUyyrr3XDCoYHivJuarhNUMtwozpEMMKZfiMasGBSK",
  "key24": "3epBkrNRpsWQo2XmNXWyVuEJhWTz1mDfZ5GanZ7eDTRxxWk1KkcFmLPhJnedyeHSYEzLCzdEw8DvsLNCMjMYByhx",
  "key25": "5YbWpGYwmZxSUUmFFBi6pLhirEV9EQhuVhxwteTJ5feKj8MZwpLgCnfKVtFM6Qox88BmTTUpygbgAhUw4s3YnHZd",
  "key26": "2CJuJkrk9i2hg1uZPzYxjtRQyDDXFvddP5TyezrigaFkUNGjUJiC23Nm8fBFAv6WMggjMnDDdFBURWi9X7umVitm",
  "key27": "V6t2VX4gJ8YWJiWLvadxAjNYrU6ei54yS7jvDqXvaMTBZKf8qiCBNwSEXTaaxZh7NZhhwCzRV1cHtahz7Z8nCCt",
  "key28": "2CWRMNjCUDM2risdykp2Poqm2BE2gJSGt1yHZ19tuiMT1954m9L4quHFB7HPQMTGHLYTixPbGX4CjJ7g8UmPTheV",
  "key29": "9vuz7fBicuKDLZacXJzPASSq4qK5ydY7ShcRr9DvKdSip234mpB4zisPRR43N1i7m42fnUESuCd8CuhSpDJE1jm",
  "key30": "2Ss4PkJnNtDiotS7tVapHSEN9itLXMDN44baBwr3zWhyhRPjWtx4P8v4H8RMRwtLrdTRGBwmXQeonzZqf1EAuVEc",
  "key31": "3kvHAFV4LL6z4yJSA1bQTpYSVV6oMrTrtx4PJYeLm7DoPJBzRX9XtpLizA7U6hf7mSibHpMghAES1zj9WyK3ip7V",
  "key32": "4ZjTZSyKN2c7bkniwQvf8KuRxBZCk8Ak7d6KfvirkL29zhF6YHRNpYEnBE8bGQpbrKLQvaVLXhXKH2pKrVXVXNyL",
  "key33": "27epCWJVbQoF9BcUd18TbzhDNyfPutzGqWLe7SSvtWFYDvbJmsDe1UtxLXJ63tmRPkSMqu4pHxcMBXgAFp4RNoCa",
  "key34": "3DaiXBk9iWjknRofBg6p2NLizs5Tx24VL6enVzDB1hoTdwH7D12SCDpLn6j1JWK6RZ9gLT7dFAyC3iG1SsBEwNMx"
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
