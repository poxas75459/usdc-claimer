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
    "4p3mq3DhG3899vpMQdzrN5hoHLmFfzsgvk448UN8Mmgjed3WYTCBzd5kp3PtE4rjefk1xrq9rqgo3TYYfnCTs9ns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VqzDA1XAwmbvV86E8paPHRPbMrYxcu5t1425w1QKNSKYoxk6UvSFY8aC8JNsm4xL44Kzo9jCxqXKwTJHG56oU45",
  "key1": "5U7v8PKaiks9gaGvvToAxRnwcgbTnTWTSENxNJdXM35TDdo6uBbL4nXb4iqiEYCMxE9FkQCqU8bLpDn19ZUQ6KJh",
  "key2": "4H8nhFdaCt6ZqJFKJ7wHgAwjE1diBb7xXzAavNjvdwNLcN3gXhyNjYysGvMWt77zJVjz6Mu6W6YN66x2dM5wTykv",
  "key3": "5Uaqc4BLcRTvcqmH4zZwvnxZL6zo8CbYj4SLSS5ev5PxXR3Rau7N54EZ71np2mxNdGx3BYuaykeHTMARsqjdsSHk",
  "key4": "2s3uGKwFh9ZaFJVAjP2jhXgiESK7QLAU4YDqBtsNvKF4hJsvUaPpnAAmCJtX9TdRo9KfSAvfiNNqWvBEJrbb5y3X",
  "key5": "axXe7cV2sqvtt3kCwgRV2WFvszSj9ek3PbkH5sgpWPnkSBYGyiR4RAbnezdPFAj5jK9UyatGyo4NNHts61QExU6",
  "key6": "3uNoK1ihiUxvEcQZEE83r9by7bEgdFyA6EqwTf5XRo3mzqnVstPoiF8fJ44t4m8BxxjtXSySrqRpzBYDJUEHy9FR",
  "key7": "2wGUqTNPjS38S9jWY5mCTAtEj7KvoUo83wbaps1FacibjpAmJ1ytb5fww351BZuP9Th7YQ2Bu6LhHzhdEasa2ad6",
  "key8": "NsyYdkNaBxmMMcb6NJhFnSDWccr8qixw7cUKPHtnq5fkuSLj2TGxhEdpd3xQCySeTr43NniPiyjrt4mXHCvajig",
  "key9": "5GnMMs4aRc6cyF4ZkPp96mbkUsFxj54ZHzoTt32pwt3wUBJ6ezPrcneadDX1AF3yeaix9qyuPzTJqffGiNKW9hAb",
  "key10": "NLMaeFnWHawxSXDhrNPMTcoP9WDVvtUc877TvVrZaZ5RwBFfsm4qBd9eMSqvrjtASzURsbXUt8BbMh8o6eZMY3J",
  "key11": "3yxi5hH5oztCZbjvH59Un1W9uaquXGDNndFujQXmyxp8sCVowD4JxZAJ61DeN95kDpHtriKhejFydBHSqECgMCEE",
  "key12": "4gW5UnjAt8p2audKJfe6C5DGFKXtSnLigvfXDsaYQDMhNBGaBPcpLWp8ryUuoBZs3nVWVGArBZpZV1rjQqtoSipH",
  "key13": "4FkSezDeBeqGoFC3WrjtjUGmG49yEh883LVZKQWr4CNzf6QJVFFajJLhGWkhhxv6hwBQhxKfQrHcEAshep7dTocm",
  "key14": "4T9B1Pk5tPEGCpVDroyEDDA19yBJ4EiVibmEzKR8CfDS5u3RvqGy2zPqGncNW75kjFp8X7FMgSoEWap34hbH6qZp",
  "key15": "5V5KFdE6S5SjD5mNw2yh8NWMdc92t8RZu1L21jCbpqFfKBDDxXUCrXnQZqHFRKT6hUAWDoHFgpCttAkKteyDVmbs",
  "key16": "2nuCn8mFnKmnVb87ZaTzcezc6NvSUM39Mei5bfZdHK4ZU5yEb6UfyaTyhEaZjSHHpMuLaeeKGZAjU3dbjgFMxqGq",
  "key17": "wYEX2L58HfGhuKQdpaeGaDWCGY3ksFyofXkSRWYVsV2FYxAGmgBUHUy34grTkEz3iQpp8de8Q5ahcXX4UgJzNLJ",
  "key18": "4e7fbXKreYUT6JmjJE1McbHqWejyaHpWrBeMRyM9YyHWWcS4hvPHn8v4Lxp3jF8soPXg38EahGCw8edn7Zxj71xW",
  "key19": "NkhvJgTTgGHRqxEe5DJoqZLz8h9Cv5FKGoRyGFGuAViximmqtdmaack3GmPGUgua757jHrdbQN4kR4krf8FvHnf",
  "key20": "Gw9enmcZqs3b7SFLex2kKaTgyfaeunVNMZzFzdnArrP2KaMrDNR2o165pgHnC7PPcEMkaXvZ98tMUTHPcpG2b2x",
  "key21": "3rnwJi93EeZTaY23gFCkKU8Zej9o6dosvnM93hjPjg9hGhf9ykoMnZzx4wUYRV8J6GDp54ZyygWuhVa1n4yNTuwf",
  "key22": "3ck6sdVWrJF3J7i4mxpsDahVyGLEEnPuC3uDNc4U7jvTcgtsPz66hiQupBDsTzL193HbrzrrkumkWW8AMtrGkQ3z",
  "key23": "4HRJ5aQXM3AZTNcgDALu5q1utVa1w7RdrRtUNXKT5Bw1eRvvwWVwiZqwWwpJKGqVbYD795J59joukq3Bf6FZxGKd",
  "key24": "4hCLas2RH7qpa2135tykx7DcyeVnaJJea6Us1rSgpiQfg6qUzKPU4mPwHdWCcMWHHnp28W1s7jJy7q7nRCM8tg3J",
  "key25": "5Mq6X8voUByv2kYFBgHx1ymq1XyV9pKc5RffZF3EqwEP575KHpNctf1zJ8rYbqzhHuEnUcLV6oawdv1s72mQy8Hc",
  "key26": "28Mr22KJx668zBfGhQHfNeJCjPJbTnaxUxVojqk4UJ5Mz82n5SzPEWuBYQq5tCU9orE2fujLe1orEyTzp2rkmmmv",
  "key27": "QRWXYWg29bnd3deBu6j1LAc3qepP8EdPLbsddGU4RVdP83AvbNoh6b1PLoLJhJujFK4zTmnPAmundtbHicTFXz2",
  "key28": "RzzAzp9gMsPKK2smLmUnWzxQQB9Lt3unLF6Jr7BZ8SfEaZhDBGj7QoEvUJ1hzbFErEiyEkkjC76NG9SC9jCVXqC",
  "key29": "3oYrb39NiQA4BrkvdBkTTnSLZSLatTcMyy3AfHS1ebdAvFebqCBUsy42V3wkKfNn8jgsb8CdKUcgsCthbCVQsbMh",
  "key30": "1zbBKiaWKCZ1NzNoYYubKCyffP8bxxt244PyiG9q3NF1p443RwLNgpsyyPdQRL7jyDCV7ZcDJCNvuduME3tawNj",
  "key31": "3itpb7i8QXJo8zHAf8jDq9DBqBEtZnbHbzZh7YwpvBNMfNHKb3T5sXZMwREkAxyLy4c1cuJgC1YPGqCXsVEnjmaH",
  "key32": "2r22PDMvGCvxaST5xAHadJUBMzsyq62hKngB4qa42bUBx6mgbYcvTPFkJKCXV69C6cjEPBCEVJ6uq2XG5d8RrmpA",
  "key33": "XB7oz5WhSZYXoWs6yPT2vdk9ghjQoWXPJW6zVeAaTKo616dbD5df5s2udEZ6w33ETxCENpQB81tHE8AWvZeBpip",
  "key34": "3b7Jg1JoijkPH15iX9VgxZ5ht98r9uVdwcQP72kxBY4LfxBKAsqi1iD5KYdeJoyjZS9LsYPZQg35EBmKwMWeT9if",
  "key35": "4m6pvJJNdghTqM8Vkewd7MS32g7T5wKbyg78JT6Kz9fwbvzZzwaY1UCakDB8NrEF8TWt6e6wtEZSy4dA6xk7whBx",
  "key36": "2y7uKYKReha2VaXT5SaevHRLvjdUPLqYRsvzbswJf7p8wyt9pna8rmBRPTArVBQDGFcTtumymB8gFDDyNuWpNtXc",
  "key37": "3eHWDBPBspFfpYuPLodGr5mjRoDtic7tMVNDZeKVM68wuv85ByVdP9b7zJSbW3AQBXwzm7V5DeBcR349wshYjq4A",
  "key38": "yxNWFdtr64uirbFjgEgNCNJqNj6hUxkgG3tsw5VKVeLNTkN6ssBQj3kyT1hZsPqwkEpraFwJC6FXcDkZbrbrVVP",
  "key39": "4jwQCg31QejEdsfV4bbrw5jZks3SgJyj7fZfduKP9wQwh4pZtRAEnnpoC4kBqxAjNqdvUyqygarfPiiWdZnY18LR",
  "key40": "3t2gYDY1J2TqxssuxNEkkgxZWyPnuBLZe326iTiUxpvq2B8X6skJw3jdfwkemZzpxyu9329Yo6AJH1ZxQktq1xrj",
  "key41": "3kKcZUtbkne7qXKAxwuuexBgGZ6bCeZ6WRxMejWEVwQVi7FbxdxgA4RQf3ZrGX2PmWfXTtfb5YchJuXm5KKLRoxc",
  "key42": "2hKWV869snTboaB2GW85p9WUm7PXUGWwHMQm82d1bSJi5p8ZBr21MvFT8FCVJvWhDgUuGqsKNUWx7LV9y8WCD5M2"
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
