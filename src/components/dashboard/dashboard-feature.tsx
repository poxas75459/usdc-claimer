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
    "64dAyQGk5v2CBZBKCvomH95LmoRTpwe1kYohrFm2p7dZZBvzk3inyQgeiqabmdXojWZk3czceFBfj5sPc2V2JDoW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tMbqszFtyZF5YKPSUvkfhY9Akt5zTTLodZKcTMK33dUScjMeoo2nQVJKAKBvxpMXM7XTCjv1tvo3JGYAWbKYjLe",
  "key1": "5uUs4M7arDTAQBh6xxG3HP1rjTPQ47eb6EfZmVyDDouS7XuUtpFRBechQnpjif4iK1dewaDALUYPNePNUwX9YV3d",
  "key2": "2dB6vFdYvpmqRVgGAMxittJBrnHceunK1UgHeNFFag1A1o3UR2DEaytpkXMgYS3hfo3R4pdjv69aWBKwdUx1nBor",
  "key3": "2c7eHvomWQgGbjCBpgiehJ24xxNh7oF9THQdqy5PATBKw4voLfWQydNhwVo9E3zRz7UXKB3UDkMyELRMnDXVSjnS",
  "key4": "5tcw2kExxAJjU5njBYxY9qk2bsRQxo93XpyYUDmB5JDxdncqxinZqDkgyDJfFE4PEarpJNwX2rUMWci3zsjbj7eA",
  "key5": "5tmMs7L3oGe4QXmBTmG6h1oPEQFEWRemsKyZJCfQ9TXkWzRsGjqYxg2P8k3HUkEfSanNriPjthLie9AyJDuqEA5i",
  "key6": "KF1bSnKT9dnUQhvVgHfB8i1F3yYGdGNYfoLkKAQHAyxzgRfSs7bssB3UFeQFWLBz7dSNv2ndbXDurXWi7kDAgrK",
  "key7": "PhtU2BRkQUsDaGwr3tMEdaVNP585hWPxtqtvPowzbvykoLmYnmwu1Ymhb8rCDBJbuBgiAg43S4Awgn1wfG2mhBz",
  "key8": "2KHgRjDjwJMAFDbGycFSU91Ch3pioLPN4yyMjc6uSZ74JyETKRXYrP4n1guUhJRVADgwUnbzvP1RzJxVHfadNVHF",
  "key9": "GUJuvdHzNBbLF99oWibS6bSgBRd9YtcYssNLxhDLUyDFquRC8wc7qd1G6rM32faaunrJHgNZuK9JhPNiSqimXij",
  "key10": "5qLakj1fcycMuxPisPAqC5nrqk1CAhUaH6sJLFkbSXkLyr384RFqFgtyxk6tMNYaGRFuXAEQwc6ZP8RbfNsUZmYi",
  "key11": "2ZyBYZrpZ76Kqc5UiNe2KqhtwmaTrvV5MoH7uj5tT7yfKmC9fwSN1wzLsyGZds8sf7us34VBXATzdKNmVM5N2Eif",
  "key12": "PkwUAkWhtbban4pzWqkBzaYRAFrnjjWdRuEYos5yb2Ywm8ocXffjr73vD1ppKWfn5bQYkArPtKMMmoqMHaUsAne",
  "key13": "4mqGs38iyrVSkE4VgXUSA6F63fr9LvaeTSPwdCCFc8diZmbisCKPLtk1UKNm5s4rg4wzZZ5nzPBqKKRzcy5QRo6m",
  "key14": "5NBExKevLRB75Q795HWRHeGpi3qwjCRrV1knGy77h2JhWjwALcGr6hGBvNZjtH65ASuqZpEk18LYyjWCnhGs7BFs",
  "key15": "QEfFz5zCT9tboZh3TUD18nsPS87yW8JpUjjStNSJLsyAyJXsHZP5aHmwADVv6b5DuCJDBGTey1bghErDW2KcNwW",
  "key16": "2tuarSX5xo5bsmRSrvKuWnsn9mwAAB8Ei945fdQJ4pEzbw4rq4NHStypcDWMcsfBJ3hi7BKEJ5t2mN9rUkJ4aTtu",
  "key17": "dMonQ3rq9dn7VawQ5TunFyWYm1hVANH82v2XiRrHogTzoAiaMNgi88bz3q22bVdxSF5w4YkFujSbibtiLCALUyw",
  "key18": "3YqcXuXw45XnDr8ziQWF3e3WQKHesaYTUQWfw8qM8SXco4nCkeC5g75Tx5UYMwJQBe69ArsZiWGdyECiJ8jyGNrZ",
  "key19": "beuSGPySsdKGuKMu3B31aWFdtzz8hMMh415mBxBxoAMJf4SiJfiF3jpCyNiz3ormmfbyMg7Yqt4XttjHGqgPMnd",
  "key20": "2U8NhvJpA1mFSbEWfUtNyUApX6oQvrHAPbHx5bp5HnynzA4NzdnJdfwCNutm1JYAvi6HdCnNM7xyz7WMocsVyRca",
  "key21": "5mnCipf4XyxqPXU5B4iJJRgdwUGbhShyj8GqrkHgNBnjceAxeqbW79xT86HMamhHxy1JRYfpdDrPr22RQ34xomoe",
  "key22": "3r9TE7TBxwKvV9cDQPjdoYmwDrAT7sHfPYGVmK6PSSZFZ3quKZShPv49F1ZWUivfC8M6rYW2RBho2xBNAFxqudDM",
  "key23": "NA44zazaReyirMvEGi7R6JSimdRkwo1A1Hrte9u19Tbv7teknGhxxyL5r5AhGbsL9rwtXnLaqb6MzR5pMf1P3sK",
  "key24": "5DHXjmXGjiu9UjzkBFLg9RAM8o4g21rWsrQp16yJ2Kam2ErRa1ySdt7nZabD1eDvGM61EbC74Pz9CngSoRL8SqZi"
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
