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
    "4xFMZgAWNVMCQ7T8oCww1LteCPKGzoMoUhx88qJxyvWDCuyLd6LqBN82RoyfczG71wUpaMFw49KdyLN6UsfuVAS6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AVM3MtoQ8ABpMeJPBwyk3XZNirwyGsdb9dkwUKmA7Tey9RYRaC2cNpJoUctJopyauKjEJqBswZD4rz9jUUmwmHi",
  "key1": "5XbuuR1MZ8LbehZ15m8ZFUYZshiwyVCZaqhzBdtdv2VPmdq8Zrghz3EYBKi87cpGAh7izQZSm1fmiq94p3MB5yB1",
  "key2": "4HSJfhuwYFAPvzxaRBDds5hsHZVihPRfEei3awsT7AWfYS5UrwHb9EucUEvvYG2Aw1f7JTzG1BG3SQDNpXnNtEPb",
  "key3": "2LB4KxTEhymGj83MrKUiKpHPSvXow4TNbJVx3W1jQxf5k7Gv9KYxv34d1SvnDVB8aHtBK3HCbhNMzVi5n5Qjfb1n",
  "key4": "3Rsq3XwTZegTC9osxBRd2Yo9mk2a6tevEop7ygyar8THPTjM8k5VMxCE65XUK34qy43TWkm4XaH9ecoEjfnUoY61",
  "key5": "47BMnkXFxSm8SSTt75QTjW3hi8johwEc3c1pNng1vkZMv43j2SevQTqgydxbtGGs2rXZHxtdhx2wQNrUqQFgGQ4F",
  "key6": "3dxFuUtKddiuVJhNDNSps2facnAViFVLiLziemYQZb6NRKdh7PMnExVdZT2JKGfnUKxAUChvyVwnrR5mtjzWSSn",
  "key7": "2MVqYMqkm2DPUv8USSoyYVv1LUz1dK3KJsHjEQyepGtvyrBhxs5P7aDUDx2d3jpmVGdUdLNWM3HEkWwcFYH1tPQm",
  "key8": "67pyFzWb5pRTFPsfEENZC5MNt9ynoeMszeSPiE8SFiForUzNpUWzSy42uvss1bdyQT9A2t4xVJ5Nyk4yRkSo4xiM",
  "key9": "5SjV23usiuQfRzTTPYzzEGX9HUzbLJ8eP9tfHS36RjNHUnTAhJwESAUPykMJMo8nqedXCYk2dtEwk6qNFCRdU2ny",
  "key10": "5CMnE8MzV4XESQ22dH8VGZJvjR4gRp8WgA3FvuTdJPzTthebxSYVaymf91pTV3uXCLN8rZ8hX2pga3TXqpbcEiLS",
  "key11": "jSuUAnDNUvrvwm1ikHAVTwkyRZxSRxuu76j2RUrhjpzTJi3K9WVuGBZMdLbAm7XDJkXYsAQc7Ucw6NtnsP8sNhH",
  "key12": "PrapHV8JJkuRNqkcKUgjQ5Cpb4jytEizW3F957wucoegkc1AUfbnsy8gDn2Zp7msvi8EiYFnTo5v1zyoHQMUMVw",
  "key13": "5AnD7JBAWBTYPn1Hr3E1yGeeu7ChZML3arXMSHzSxLcojd2SodewUcd3wm62UJcBaDKNNoruz4X2tYumdk6xe5c8",
  "key14": "3CrN6qZuneCMYNrjzc5Qj5ARWTDZPsD9f5izkFNQcPnsoq6DJjUiZigGCN1M9dJkZRDfyJfc5KKXxkUmfMePqLKx",
  "key15": "ZgUhFaqcASwju6VvjV4wbVrZfuTNnTxr3h4LkU49YEjACDz2CrhvUabRYxV5nb2BtZS2gAoUByoV7RTDsfzmbi9",
  "key16": "Kb9aEEsxMhkbE9BGHYfA7pwwXfh6shmCPfQeY5D9Brsb8M56gvc8nTND5WbztCvj9rzg371GeRSuu6zhZ8nrJD3",
  "key17": "42vN9Ejm2wSeG8zU3z71qEpX7JMN8zJqjumAZoALa2HJhr1uqQ9QDyMBQcCVo7sozB7W8ATPGjbVwoAnkVwtsYbb",
  "key18": "62uxLrfWZ4ufUjiL8HKihvLiH2j7LChcderrWzDU3EZXNo7pAkBqoiPEiA3JhgWcPsKgxwtMyYEF4ppQWTV1h1aN",
  "key19": "2Ja3PqRZasLs2xa72Z8g4FapmeNG4D2TYXxzxR2CwYwPMkyV1dpANsE1Z6bo86sjqFQYkHoTVCnnYE4cpw7J8Zeg",
  "key20": "2o5PvBqTaqHbQZbpyGzTdkChKQ69TBPJVKpXUSviLTGVP78tmn6FnMH6VFsWEr8VnKcyADecwEpFEDXLYdYcVKHJ",
  "key21": "dC9H6ZFwGSjF5CJcSwB7QzKGD5HAmGqvTvMosCekgDvdc2Wkz5cmi3R6RzkK1UwduJGo26uQTrh2xFzba5jD3tZ",
  "key22": "53itMH9zjxVeC6D5mpX41SHHVJgPsDTCCcia1Szy6SqFEyEQGC7FXSab5tuCNK7oHBGHgGZX5YWpAD28LnX6c1oU",
  "key23": "ka1e3DLoVMYtGWwqPHZxM2eMkGHiUGYtbzFVcZgbLauBc8dcGf8cLTk66m9tAtdZP8We1M6LeeePZkHkqMGRjdx",
  "key24": "2PqRPGtXAETwM5fqbzSc9qmTxcbzYsYXuGz5NqC7zqoGYFW1fiCwQECrbFGyznme5MHqULeVv545b3ybjYtJ8mLj",
  "key25": "3WzZWKMLtqA69whbqji3ZtBbV8KfWSP97SYCQgeixcYs7u1ko5T3Nc3z8qxsJr6nKABxDkS9CMWxHkAy3asA93gz"
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
