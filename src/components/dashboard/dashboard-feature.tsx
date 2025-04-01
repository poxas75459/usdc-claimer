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
    "2XwiaC9gy4dCXmqfrEpVoWevbv8K7hDcv6vdssG8BbAWWFimQWBMZjcqSn9KrAZM3DgAW3WPxD8yZTqhxYafWed8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AzGqacaxLZkQBLLX4hTuWgQUZr4qSXh3JJHVHgNzf6Hddrt7od5EzF8QArsTGdqTBV2CkCzQXpUaB98Y8e1GjZL",
  "key1": "2U6Ad3nH7syaGgNHD8vxXtbnpUJsVGG316eKJtbr9dA7HD4Q1s4264tRUQW27GTwLCtaPaZnyUrzRMuzBtg9x5f7",
  "key2": "3baRsEnAXMaSqiJzgbLg9ZvvJmENDQRTDhE6NA7CTbSbf1SAEt5zQt1R2WH5KypJak1TRBqmNCyu1DAmLTzYhBjk",
  "key3": "2vDyfBfq7pbpdrZn1swjbZEozE9AR3rChhiRVEqcdHjythfhJk7cVoGC7DsJMEZLSeRdnvrPCCSeTLT4R2XLvdkD",
  "key4": "LEzJ47SgfARhfJqRxAyn6ah8DpMjSZe9KwDsuZrduHDYtpFNJemd5K7ZeCSTWLNBfducXEhBF4G9gWSgkB9cXC9",
  "key5": "uJy1E5npe9iqTMQ9wVLb1tMzwCsnpWBymn2T9FEMj9n3Ssgv66AAqUbHmTUT3CiBVe85kUcTc1KoiLzuiagMjb1",
  "key6": "4ix8dFyPyNPgDDubtKWmeMKa5KU7iCjiVrSKe8cx2EKuXs5vSQsTL9Enj57faWTytWjv6dCCiA5k7rEzFFM2GvMu",
  "key7": "LvEzMXyoyFUp7iVCYKEJ1wDpnTXdaqEha3USqJ8dWxqL65dspsma1HPM8MWQch3QEjVGMH26eFm6gTro3prAREB",
  "key8": "5V4DPJ9mihJyfMahHSqCqQofM5eNhwyiWu7UGwiDqe7B93V96V4GiWpD2D2izDDeCftR1yDhE4M2zHoEyfeygjx4",
  "key9": "aLd2tgbivfJ1h4knYqLeGWUZx68UYJHSVgwQeWRjUnJy6nV9MqRj9oNH3634kp6FHdrw8Hen4FYwk5Kvuq5r1sW",
  "key10": "51Pe6WRcpaB4ecQmBHHoR57naWzA3WKRPFg1mA7Yj4X7pLjKcQoCaDwnrj7JcNLgLBDHdswFEfktZCXuG21zR4XU",
  "key11": "3MoEu8cmhSJSAjL5Hjuz4gttQoNg9rTGP1rjxJ7ZTQw38CbBTHK54iybbwkHQdbya1oqdmdSXaRT7VqJC4idbfjC",
  "key12": "4UbXZ26M91Cu4wQWBLigyi1fxmUCoTnJyTGuXErP7kFPB3ZLoRaqLQ3NnTjcpAesH3MyGwLrcLtNZghgwZV92FC5",
  "key13": "2Pbgke5NFqFBiRuCGyBVmR8cQzqbjtBBVh6wFtkjHNnEr8i3kHEJ7hi3GzkNjFkYRTjCdQSUwsKxh3ELrHrxN6CW",
  "key14": "4BMCqtwJaRZnJLXnoFiRBKS6v2y1hSdfJpQMrmZx2d5f8JJU8HXLoSof5v6MCBbT4rXEfCzvsX1t41QDXURiQ88d",
  "key15": "jWG6wPy9KqJ2hnoqu51NBLxTkjP1gf3oydKaC6n9FagCVgb36HCR8Jj8FLEH96UeNxVstPjTbrD86F1Y5oqjQth",
  "key16": "H9VvcTB91Zum9cHeeV8MDBc4racLY5N7Sp8JZdrsno8g7YhEN8w3E1ToraqmCPgSc7fA6TJc4N65qXcvyosAbs9",
  "key17": "4Dd1xdAASxUYujGhgkrbAAGqYx88poAWdaYS1sggb3ka1F25LY2jE5U3PGMZUfwSke9z7hQvmdLVkCSi5pHtzCiA",
  "key18": "BQckomXf2MhNPcLm3pcn4uW73xwA74amzheGfeoh3ct2fYmEWGvhbuRzRFwAffnDApZMGq2KuxqGcBC5kTRhzNi",
  "key19": "2WNoRT1aSQyRV6oXsYgN9cQdgLFpgjnjtKim6JzPSvvfgezhashtYgnXCjf6RwHd3eDyooUbM1fpAdueCCJa17LP",
  "key20": "cJFSMs96sj2S7kGwiqx8BCZ3evUfTx2XsGaoLah6YyjDhpRutsvkDNQb31qGVHvC9Rk9AmKexogz48WFUt86fGy",
  "key21": "5GHVHy1VpGcyS8LjnpZa7zZfYXPGCGjc1pKWcZarZpLqWb7Z6FeJGNsJyikC16pYCiZLGjK83pD7CYyeWryhxQj7",
  "key22": "aVHePD5bhQMNjJn54v5R6iaQ6WjkPYX5Q2s6NwnMKnkaUyntfL8DT6uTcAjQGTHahw1eoR66b64nRUhKBwcewti",
  "key23": "3hUULYuVQCgtqxCCkAb38FQXiNN4Ab4Vr1Won88o3EcFGTWj8vGwgkLae7YLzXVU6A6349i2MYZHdCtwJizV4cbk",
  "key24": "2cff8EP8szCrFt7e6FyrYgeh1HBUx6wVyFz4tz6wqpeEkPxBodLa7ihjGpLoPWugpBJ8D2m7Z3qqZLazK8zJzNWd",
  "key25": "2wPXxdn1tgE44vvwUDHptGpmV68A9tkaKAsFrgz3CL4EvAJS61NVDyjtCF2VhBzg5DWBh513YHbBFqED7dFvbo2N",
  "key26": "28WtupqikoHqSzaod9fnsLUn1pTet2nLjV8cLHysgj3rD1gyHzoHzBB9Fgboou1Lrt68HndhvgzDd3h8aLaa8XcZ",
  "key27": "4sphdJKy7frtYD2XGsEZjJzFcWLXzpBHJkbTqncrMfy97v4R96ZHyeqgmXZDT8VeuL6GFLakEPysqXv6k3fSPpMF",
  "key28": "2ST2p52ewhPudWmYCYBbb3L4oEx1TtW8Xs9fM9qHUexCcpr3NR5tWBNSb32EMggkMTW6DBwMDToiqsJjgFMUx2JT",
  "key29": "3G1YpzKrfxWPHg5zybRnAty3fYPTiNsS8RFkLLuH6b6jjGft4tdHJ266BKNSBevFpTmDkvKq8YjV1VSsAEauXpZk",
  "key30": "5vih2ToyFgrFbiEr6cBcabUbG2gCz3hWhDa3tuxNjY1FJ9QyDii2bqFkhWikYxV28Ka21XyTUoVhtNhzpHWNfJVD",
  "key31": "4e4hJXdvDpUhL2mQcDKNiqxeWwtY4CFsapypMvkhimxD51YZvNC7mquq2bkxBmdfbt7eercWVdT5R1Y2wjpe7STe",
  "key32": "6UA2fPMLdpGvoSxDMvsmGXisJVX6etw6Hs4LAVunYjSo6E5DPYKEK7F9yTaFzzF23m7bWqfwXxbk8guwKTNtJH2",
  "key33": "oSY94oWrenLNtZhvZhYJS6RckcSv7dckLbqi77QrNbj3ASCre3yzG82jJ2t7PgVQNcdZw9VTcksVM8ojeLi75bK",
  "key34": "65tMQ4VAqKPFEFyPeSdniju9x9sXAc5v66DGMoa5CNuNqEXR6QJHhgsnmroibWs8duufWGVkZmQt5tpkPwotyh8e",
  "key35": "5LmGksB2xVDxqWnu6HWGMLiKu7WRKQyfnx6nbHS8u7TRM1NZXRMmL6CcQSzUCbUxoM9VKMYNdaweCm5hMjaASstg"
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
