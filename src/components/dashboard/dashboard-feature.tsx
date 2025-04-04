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
    "3H1Ph9cYxbZaDnDdmCNprH2oNCwEBKMj9EcKYaeXPrPSi4iTxHHnbc9GN8G7qFLdvfuaSDJwtfK7YaLWrBmPfM4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63tzaDDEuUsss7p4ZwAW2obie1XxnTcmq4FHRcd9iAe52ww6mgho1vraUjX9cYXqk7VcuP4BB3vQ7vwmiWcUt5gy",
  "key1": "4Vrnm34JrpWRiyJK1WJLZtRmi13DWTpnQWVXRaBkAm6YB13AymjJSe32XVLiYnt5rENqdPWHrHrzFVcoXWFF6wix",
  "key2": "4DFuMCNG16GSSaabEaoE8UUy2TBYKFVUcLcoUySXsHH9HFTmhCfJRsSirKrfomuzeUmMYR9iCp94KkndZTbhsiVV",
  "key3": "3gdrGNzLLU1FXtJXcSLaHfP5ezggXmWA6TySDDnVrAPasdxKTrhPeb2HivriSuG8LSDj6c2GwjL8ZSguyKtDWwhh",
  "key4": "3C7kZh3QDfJNh9ZsdWdacCtWmuopxpRxsWLQf6psUUhH4YwDjqPAPvGb9eC5TN3ut6Pv7wCDiCMHiCdv3HR2TNDu",
  "key5": "412VfJ5ws1UCkNdTz8CYzAJTyEX1k9kqPyCEaYgJogHNWro8K21PDgUK9qbaXHkrWAYMA9L4Xegkpb6nvZCutk9y",
  "key6": "2BERdmbM5ZYo2uLjQoUQRjL9LwqNT6AdHn626qWwFHrt3wxuVH6y2it5vBuv6PBxsfCPYcTDKRetJE1JWfjMgB62",
  "key7": "fxCHG4LVo1cPuJBmGjLqq2XzQ528njhmVVZVgQq7Rbgi1HKuk7hRyjARPgxZBtGayp5J9892TF3nErHZSSnsLvs",
  "key8": "koThKxFTJPn88e8aSYaz9YikAErEDeufcdXkM5weVAP7Hg2g7RS6E9JjZK8yfb254r6w2p9Z5cdKnUPS3KPbuGV",
  "key9": "4Fm9xbuYiX1KzjnGKa3chWfq6onG17etCSjap594RKkJJmvi9VbkfiQQvbYcUruXgfDeRJynveKDzfzSDFDzGWvA",
  "key10": "4zDSeo3xqxMPPxsXYYwE27vjVTXFHe1UofVPX3vCdURGPBsFpWUHmhifSX9pVtKFKKCGTUqAND773voU4Bwu8eew",
  "key11": "3Mw2zBB4v1zwTithKxor28wTq4QDBYJFKYBxbuTg5tFDgorLRLH7FeMfwP3rEDdmEvz8BddEBPo5zmypWtwio6y3",
  "key12": "sdVVvaAA4NySG236ZBysT7ZsPvUfyj7h4SKK61h3raVYfrZiRQBYzfyUoiVouDsw235ZMpqRsMNkF5EzW3XKbyW",
  "key13": "4XgZ9dA6qE9eb7hRkz5dkPmMFUEiGT7H3bZ5BEWRAb96qWDJxDH2DuoyYMnULsYmstBDNqdpYm8NkjZeCAgSkJbN",
  "key14": "4aDfW5h1ydTT7CMsRx5xLipbdpgbEQLUywHTnhujbGDzBgHmaVp5mVViMTcWF4KHTkbvhtWYj8T3NtYBgqwEPKnf",
  "key15": "2qcDRpyuN2iw1MsxXGSDdFeNzYVaHribewM1qrXhDrxKnviAYYgPLMkXakj39uB1t5TjkKPVs48kLCAzYzfCoGE8",
  "key16": "zDvzpurNjZazWEYYRDcBeysi4HoV7dPimAA9zDpQ34NAhLa3UV7Bnq16kxqAjkwQk9WZCTAB3bbpwX73Sa9oSv2",
  "key17": "4qRqsKsgVhPt34g5WGo1f5gFkwqiYgwzxQxiRYXdzBhdi649Ho1oT4jjHoVCX6JdeGZ6tBfdm4ryupePDE8af6CS",
  "key18": "55fW5zuc2kcP7mSkJXEZnEYZ8UGi65HR1wbDyHTgu3AdskkB4KJg15CYs29RHJX8S4B3uDTzXxnFuABb82PgUQWq",
  "key19": "2L4D9ZMiDfTaDZMherxPyZntNYBhh7zLnY2BHHfeF7k1c8WXsSjP2MfDVf2b9wg3ncswnMRsUQhyyhWXAFf7B2uf",
  "key20": "3pWQdxqBgfYiB1RARzaffZmA8JpA8SYBggsFZe1nffpAhDngAijCB4CzkgzpucgskSphSG4KhzbFxQ2ztQK6i6wr",
  "key21": "2qW5qjNJjRcf7uwWENuFcTcAjuc8qXQo98wM19EdXP7bPrEJNEWfWdv6t4MUirAe92NSVa9iJEYyqU24UKMg1tS3",
  "key22": "2SKwdejn1J28ZPz138kMjCBXSJm91ae1HU2rbe2jbpGujcvA4wHJ61gM2kiPMtnAowniyCF4sUhPUAfh4xTy8B95",
  "key23": "5qTnTCuC9jbty9ytGFwDqagd7ZDArtkxFe4WrQkRCYt695GHoUCssN3zksqB3EFNYFR5utBxCqFVnbZB8znqzUkB",
  "key24": "4EnbU7vPTSgb8Di5RvoPBoZpMDZ63uibPEEjy5BfraCiGHC8y3TBqpHYgMqa1Uh7qbBkvPrWiugd8mxE7AEasqEg",
  "key25": "58WdTd3Kv1K1fEG3E28PtmAURXYWwQwbHMXrELK4W2kYdH6mNdyBYZ5Ji76yAyyYEeYRhBP7DREDC8rh3u5PZnyy",
  "key26": "5xMhSJ2aWVhBXv5MDGQspxbrRrYvvDbEtB8FRFffQXEhgX49WVYM5pxbJyNp6ZVdQBBbUKNc9xBTByMWe2ezBrU3",
  "key27": "58UgJKpr4mAa754h94pngeMSB2ARXM2j4Gc6UUrUpwiyu6WCTwF5V3o3YQgnRHpR8HT5Ns9kK8mcJ2wMzMo6E8hX",
  "key28": "5QLqJuyaAr74JYzxSMqhtfJYZdzFMTjGZKwyPfnTjeUvKdv4V7hQR5zKQhttDZdoFFkK8TxUY8tdNxcMPBGVRKxU",
  "key29": "5DBRWNjuJWM1WS96aRf2e98gtAKgMmQC5MrYFhSvUpHxCBaycGCaAqCzHy9D2mD8bwo9M2Gw2LmJuQtjjtx9jHNR",
  "key30": "4FpnMMiFz3tjjTu68xSWMkY4AB61gpsfVXvkHT4na3bDPF3mkdqv36nk1W9MMMKpDMx3SYFmDzoFgk5o7kyQJDbj",
  "key31": "3W4nC8wCR4eiLbSE8reKj7Vw1a8yKtsPwJS5bf4RCt8mnsu8YAzSfy3AgJ6ovDXXs3cHsbG3G68N1QX61QJ6vwyC",
  "key32": "522LDE6PuRRi94hXQovWryUrMEgh22kqxKQYMfTVVE1V3Sb867gD9o7ihgWGy9Dc8uoKgzhR9dceSx2Lyn4NRHJV",
  "key33": "4hRrU9CeMjXQVVje1RYwaPFWxirKYEKK7UXMVE61AbMK9s9Au5LTPMgxKo7mob17a2oK9JCbvD58hyXwBQUubywB",
  "key34": "1XPgpGqpbK57dhch9TESDW3ugBTb3juvUsn7Y2zGKNjT3rfvyqHupJ87YWdo5chrW2JyvGerrqjqZRaCwBLvNQp",
  "key35": "d3coAhj8i477CESQusirR4fsHfXYHYBMRtD5Sfp7tn97Bq79RrGnsNkvZx6r9se6V9T99yqXm3Pp5YFzyiHMFh1"
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
