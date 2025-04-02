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
    "4sRF6ByTgrqv8ZJdeje6Ww78zhCL9puBX1CwiCs9jtTjfynLCwJGnPgFoZg4Lg8nQPALB5mFbfymM4cMrvx2QsvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CLgwXXaXpCCYNC3nwWMTjDboUwgqCy66uoBNNCYkvaceFKi7NVZXFgHx24PXszDPVom6Yu3AxPGqysK5yxtE7MC",
  "key1": "3B23JcrfQTGkNxQ49W83uBAxMRfuFzqXVyc6s6kBegkMZayedyN7ioPXSyAg96M2be4AYeyh8MeLWy5LzyX2PfQz",
  "key2": "5JV9qt9ngcwJRmAFi6XMer2uS4hFQ5qP1vVt6E4CCXATSJeZsFKCjaCJymvZD7jsDCbK3ozdmQWiHFDxwJ4GFad1",
  "key3": "5BqBJtV8pkq3xUFWeXCqxsszER1Bq6YSpEujDtwZDod4BjZNEGH5b2D5FLAPRywEUrFQL8Q4WFmxwioX1sywELtR",
  "key4": "4cqgms92MamcgxrEsyLmye9Zgr8rFTFonnpbR58Z4xjUeHkDsc9H33Ns54GWdw38FRWUuH6LX9pe2Emjmaut1Wiy",
  "key5": "2oEMSYe7xTZ4oFo9Ki5PQxMUqmmEcsEeMaYSy7M3H8J5mvncKgUJfrQa4A54sdNZbKZPocYs9SUPmKByTri65jyd",
  "key6": "3JGFg1yBzXEK6RiAb2QatobqMcjkwvzCgRu8v7KsGqaUCzmKVWGdigz2Q3ijwn9LQGHr8gD3Suhs6xpQUe2Hpyjq",
  "key7": "2ikYeW3PYm8MEXjBTbbS7iqDUFPMPuN46zkXGSqK12U5rwmnRf5d1MHJRnPL5ntDex6jw1JKZ5o1SqhFpAmHm8VK",
  "key8": "ufvyZwiWwKtFvKBDmYkwQ7oGhh7Bj6SChX9JUZ3pgst4w3CHpxKCN9vqstMx5sZsGGifudN13f6oCQJVfMncWcV",
  "key9": "5U5sYyUeVDKJX49hM4hMkf3TfSPRKxZR3MdYQJhDB65ntG34vhVSxZoy1AexEaKF82rNCKmigwbHQTNSFHowCTyf",
  "key10": "31gzzVKZcfo39PUBrWCbqzgbGhjuHq41BGr321J8kGbuq5HihkwJZPRfTsVRFzqb6u68uezbsKgR73t8wqQ7u1Gr",
  "key11": "44v7cKtg9JBG7r4kyBvh8LerjiDkqgDKAweXWG6BKi9Qx258EcXKQbzeVNCMTtowGjUR3MahuPknH28MJWGnJQXK",
  "key12": "3imerdQx3XHKMqnpfiNanjH58owWifd44NTpZ8sx3yPbTvJy8PCxFw5yb7cNofYA8ivc74fUq8sRptmcVpvsJPK4",
  "key13": "5PXEBQcSDasJVksrsjNim4wGe4hCvG3r4ysGgKe9HFW66youmtniAR5sv9yophj3nJSkm6334VLYYGtUU4z1LDGm",
  "key14": "5fb4DNbtw5k45cfGJTGFgTb9kxGicR3Ut6711A2QQ7gBbEjcvcGwnTbnzQrbEQEpojcw6oy6i5oaqSjHobt5J5kU",
  "key15": "613HEFRJcGnGvcTokY6RyhMLwkhA5x2qWndeKkHdt9aSo5dLLnWQjSYhVp1q9xNfj3SmAHAR13qT31Ukqiagw4UJ",
  "key16": "5g5GMPq2rbF4jnf1jw1h2UgnU8HQjB122woGobTL5yYU2XGNbG1HktTYWyfkcRmYQJoXdJ2kqmrdQzRX2d2BenYP",
  "key17": "5GVfryHUrDL5HctbmQH2NmyBnpy2j2yWTPFizXocaFxFXK9ZANDy54FVHHxNZ9cGHdGUPvFXf4fPGcKB7cwbDUBF",
  "key18": "qJFQWUCP3Edorm2BrZifgg1zcEwo6uswLJKu1hCgy73ZpUmdubQJuLTwDRQ9vANjym2JuMUQyvTu5quu11N75Hd",
  "key19": "2wHfYz78vccjB3z7HRN12tt89nyC5esxPozo1mS2esM2zoiYqDEEvCeis2SJEvtkVoZgMxLwjjwQ7Y2DaqLTZ1M9",
  "key20": "55ZuTQUApn9RRViNAiwufJKW3iFrjmuDZoxrDbCMPjsRjMK8Bfb6XHRH3dCsVv425Cmb2X6bdowdXjDwsbfDcBiZ",
  "key21": "4Tgj2kTJ23iFFb8c7GfRJxQP4FRW97xrc7R617W2qhJ5xgwi2s4weHAPjXJjCLwWd9U7DyJSAkd83KqLVy2Dr8kn",
  "key22": "2HvKHcYPjQwHwuJH1G48fu37AQiKM8fwuwiEvzeNjCxWhGpWPaUzLReyVETadHXrJRyhrTwkXMH2Da1PKdSqAr5F",
  "key23": "4diHPB5zP3nnPWcom3o9YAF6JFJDy1b9bG7oXdP2R8tP6BTzz1DEesUiRYsCyxbAC1xDLY6LAAs3tNNgtLfVUci7",
  "key24": "4sqVt7yfmy6Bb4AWU9SKev2pjA3ojb7bs1VnbRu2fDHUDL29n8MDGEfxqMi9zMxLTXgsn9oMeGW9Y1uBLKA9rJM5",
  "key25": "3dpKWtGXN1XwASSEkiQxyE6b4HWVAPASmWTobfjJckxCgxNEaL2B5RFXTVet8h24UBubPNcM1j9tKtaNbdCwMtVt",
  "key26": "23gZqaidAFJ7B6YPeG3DvxnKxc8jX2DY7yBL4QW9xsZtShf7sx8vkx8YLpYxQhqFTKYLHdQJ3AVXREAZnYvufmab",
  "key27": "2Bk9S2j8ZsSfobtrvwA25FFbA5t4wDmfqcDBbxqWKSKmkCVAumhNLwxogiXwyyh7LPkPVpHjCxNtCUDpgNawxLMM",
  "key28": "55vyV8i1dt3FAFf14e2iEkpKrpdC66ZSLf5HPh6ucBUU1wUNCsNv49fGKvoUJqNZzB1xMZUDfsEsxd7YgJ6aDHW5"
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
