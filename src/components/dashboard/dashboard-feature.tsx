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
    "2stnwwYSVVAKwmqeQcuyP6mSoSy9mmWE2oPPjLV3xzHhtkD7QkPUwaSMcY3TqfS2598ENzVnJFu9Q9fXHMPyzbG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56BMnBLwGyYKSeL4KBNoNGRykYNTiKsu7zbMk7xGRRenifBEheBmD9AcbkhuwgasBY9vcCGsDvfoG8fGAxSD549W",
  "key1": "32HVwwjwX9WHqyyv2ZDYJUiJdWTg3UwJXDax2B2QrYvDa9tJ9gQ32egPD6EfhrGSxv4B7GjCGpgGbXKMc3c9GCFn",
  "key2": "34V6hrgEcZniNSieXL3Bj1vKPQSU9SRoo5FEQqQ62VFQeQ3G4XekhYPSJPtvbFqzS2BcGX1vBYmtNWHAAi5mNKnb",
  "key3": "4Q1VBeRHz6sP7wktwCKEwjhX62K9CrtUrXebxpnc5kqPqt6PgZqgzW5nw8dLHFBHCctsp6agcE7Fj2cdYDjwZTzC",
  "key4": "2Hbg4k36QEY12X2dgjvJvEGaess5Fzhvb1drEMTtdPxKWHgjJXWRyQQpFQkLXv63Ybj5kehSosz4i71KaTrmSv2F",
  "key5": "5jV7ecMLCh54rdE5dTatGaCdEa5pHkndHNBToQFkEcQRUR1vkPRGt4hcLqhe5EKzEnHUcK25aPp7iKSbnwDAXDSK",
  "key6": "2xmtTwmz2JNYmjFvaFFHmJdiwuP2i2PzYLF7Jwp3LUVf5tpbjBe4u9VaDg5syEs4bHEZMaCvJPuLE2F9LZK47PrG",
  "key7": "24KF3Ktqg2qEBghXbLk76Zm2Fv3cbw1HTcNri6zj5azkMdoErGM8ZR6DjNAZwjKwRYGzAp2uCRDAJ2PbpzTEnxjV",
  "key8": "4QS5kLMAfEiA2VcCqT2EJQnhaoCAn1352EYeWU7UA2GHpdipYWQ3HRSavZ3vpMSkYMA9Qkx9a2vLSNUBTKeHvKji",
  "key9": "3PzDKd9JjJMKsod5aKry9JbUMVeAirL4jNaCitDTQy3odoFSQZaVsBbAVF8SeFmp4Fyqg9cx5mEdR3nMKuL8FVtA",
  "key10": "4P2CGdUwXGYYdGJvqkaoAg5mBaJ5PqZvW8UN5qPQL8GbhawmMqoyowHkHeAQ993eGrYG6yCa4FiixXHsMwFSJBku",
  "key11": "PoDyvAop7Afidx7VHeA5dwHzcLrf6st8ZU3kEL7gpDK9wz115uh86nLyAMw8JtHNUFJ5m5xW42nnwWMkQd2G2Sc",
  "key12": "MSY8sVcQQtP1ScrjReY2dpjVkFT55RFZN3YVwxdaSZY8dT7YZku7MGBoLygZPW7txraWXNLUvkJDuoNoanWAkmY",
  "key13": "4zfeFJ1Kfcf7aS9H5WF3q8MBSUpYACVbwR9z6hBZhgmAewcish1vTBU6F4NhxT9w37YrKhp8iioaCdkfgXyHz4Ja",
  "key14": "3CZtkyS9qRNsuibDFsG8wTnCqfoMtsEDsbayLwderNEAJSLnqpN2A8yZG9w1RvQeBTsnHWSvFNk3swGXERhCD7MZ",
  "key15": "4YLDTfcmwKHhjGpTZtVnshZ9ufsYfMBFrx49MkXzi8J5qc3f36jS5ayGmjdzr3K2q5ymXkaXmPxuZPWpTNvwfMsx",
  "key16": "5KjJvPxF1F9yZhDd8PsQjVhVwDRuaSqjgnkZGKdnqxGyeNBZ24JJKgEdaKMm77nG5UtJKimsdJ9o3cL7G3NCs7sH",
  "key17": "3nRXfURDxyFEm9LVMJeeEmBqjbQQDBWEfV6mik2rwLK2tNVBcRrQLjmDjL6yMP8qSeCM1C7uHp7tgWxJ12r3QhzP",
  "key18": "xgMdn8xTRFwRfhLYKEzPiamD8q9pKJ19L5J7WrwhwdvFcSW37UHUD54CrwqWNDzGhUQhbyEpa2ApVNG92Ua2aav",
  "key19": "44t9dKet5psrDWjsnq7hx26zAo919MNGBED3BuUbLkT4KgaANWBVKUqzS6LwLDEn95nsna176jW9STvJnkqJE5Mb",
  "key20": "46LRwaqRqpvLRNypzKKTQgNeJRR7QWptHJZPLp3Mg9uiR4Cu7RD6KXLu76aMrvkKrDbj2wGbUvGtin8V4evAyfgS",
  "key21": "4MXbfWdumezoBigpCoYPip5Dwbnd2G5D5NraJdgijMC8GeJfuk5b3L3mx6LnWbnBRey7vN7hvxcHpBbJnTqyHhk",
  "key22": "3x4Ge5YzGj7MchiyE5ESLxzVLUQr1YLRsnUMBAPbPRDyEC9hocGczvRaq5aFxJA13D1ybTRPaWGqn3AjbGWvG11H",
  "key23": "2nbsHfgNEo16xF6q3C7rtRUdAQzoNW16E6d38YfmFTqJSpFnKUAgvFxdrvJro3qZxnf14iCyZfSCNN29Qq33ERfP",
  "key24": "5NnXLndqMKBbsQx8AtLiihXoRNMXeb94qLc3yqSHFQcQzYm1sfnZirWbGsKqg6yyns6ne1zLRTcspuSQcZoMJ5bw",
  "key25": "5VsTQLDNCQ8nKe8ZEUuMy9VGAonv4EDuHNe38X2SGtcgfPKczSHru4mxrHmfykzmz4sjBGA9L9xQjTDqgYv5d8EJ",
  "key26": "uHXAFcKzM42u9ZzmFaAX924KBe4qdFE9As3RabNAxxUmpbYQ7im5tKgaFQ9jVkq8wSDiep4Fpuq3huwppmcG5rA",
  "key27": "2H9dkUQMDA82CQ7G6rRypd6kzkoZ1uT5LdXV1hvxL3iUWRorNgFiRJH8bewvuMP2fX39JTZi3hDCX44HffC35Xfw",
  "key28": "5cXbdLq1nUxn4YWdNyP2rqQ7nEvTTSLn9gd6PGvpqetm73tbADRdbSb2zovaHpEi2TqRHBaRXstV7gmnjkRtAbZa",
  "key29": "neX8DCbL7HgtxmR9sHzS1em9ASHmwMqFp9MsuLaNRA3Uf4boUjjT1E6hR2jbTEKj2R9WmA8SesPwDGoKZMYsx2v",
  "key30": "3rJVBRGLtrXB8QELZJL6dj1USoW2umCoi91NAUYsUC57vrTEwFngKQJ5BQWRyyMkfwascNq818ZVSfJhL7TuyoZa",
  "key31": "465B9opE5XnfMtRD4w6kCSV7my2sqQNfjmYtZzbMwrxQUgGBmAe21X1zrz7tF9oA45tebcveZFiuJy1CPs4ifGqK",
  "key32": "5QE84MRuJXhT6MNkXcGjNKzGrJn1uics7DeQsY13qzgzQ6byt3hzmtSp73oi2Q3qz7AFygtgQ6t4jMW53Vrn7VKV",
  "key33": "2yk4ZFDaXzQXiXTEJwugCH9ZtQHFVzEobWUiCdUyxsDEPGxBAAZKCc9RsD4gfTXfrwx2EvwWbLEecnNiVcdttHPP",
  "key34": "5Z4QkE99WbRpEAMEfzM9kbHgkrsfgf8ewTzk6YnmrmxiNwrsLCKR1kExMcfWGHMJcPPsmARU4pqVzyxqPoJZ41t",
  "key35": "35ureRNzrMeJXDLtNReZFf1ETXLFUTDE7sptX8rpLfgL8Rnres7ZNpKHzxSqb25MFixopPNWov8sfV8X9ALs53FR",
  "key36": "5ZEABSxk283XUz6LErHidZPUWY7yuGNebCE6sXMfcU3BUX8KnScNJsDd2yDC44vhhqUZ7TkR27ZW2UM1nRE4HvEq",
  "key37": "2KAHC1Dvd3mqxSnFpwKVi6dcmhPfx1LN84KWhKRJk4XJDzRH5gQhoirSXvXj7Xz9N5B12oQFNhZHBDfNjbLjfzn7",
  "key38": "4q3o7US4FrjWriTRm8xhA6XtV72JfUH91FYy5eXFYFbKv2dpMMYFrwvui1MREYAKn77jYcNxhzm2Cmx8FiBbqpYh",
  "key39": "2isNdH378KZgbw87bmfySVxvtM6q8M5PworMXESwqrpCDmsrvrUt4F9JE8JsJW4k5b6de36i8CbJxFD2LFT7JRnG",
  "key40": "419fN6UBFusF833fy8BVUKKqTXmYwshnEuPvAxiYRYbaU1aVmdxXTGWg78kzJqeuddPnBJPACMVJMwkQ4yTAejci",
  "key41": "k6krG5jsQxcP49whuukJ4S6Lj6RZqP3mwEUHZWZuV5fy2yS2J3QF5hpkSQXZBQXxABpZEHLo8kJDjfYp8wTvgQy"
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
