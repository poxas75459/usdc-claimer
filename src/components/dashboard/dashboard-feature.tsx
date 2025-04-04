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
    "A5QgSYD4czmxsk8htmYaYsZRyZ3gMWoLibjvo8jqjPMX5nYKaG49yeW7QJoQTaGJqtYui8GmHzk2paxEFPcmrJX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ymvx1GcvpfTzK21sbDF1iBvJLkXiSvPC8xFeMgW9jaG3gXCveMeNku2YUEvmb9EBGjXMSuatn9sukVUddnD63op",
  "key1": "3C4oXSPzxcWXuKkFpgGmgVubSUFmLwa3w8SDXneF4WArrdsD9L1fb2Fk42C4qg9Zq1usB4fe2uxctgRxU9xgTrzX",
  "key2": "4t6HqxucKtGc2jF2xTJoarunQYhc2poFw1H8TSCDYj7FsCxKb9ehTpVT6Eay8EkKrGBhpzKwTLC8S4GgTZTCWB8D",
  "key3": "wNwJxM85EfmGmKRH1TVukYqe8ghn6DDvRK7F7hRQQq5euCh48RyJvHFrVoqzB7wJ1pBcu3W5nRA1fLooeLKvrp3",
  "key4": "2LeAEee1jsAfw8pnfu9noczLkzgFEvKE42YhtPubaYyKmcDFDrmXGZnebAqYzqV7b5Qgn9PCxHQeUCJ9aSpZNjLu",
  "key5": "5ukJN7boLE5djiUoaDsjjEUeomDj7Pedz78K69wABg2KtaTdJxwqJQTvyVBfGaXbsKu5N3WvNWHZnGcubdQPT9c2",
  "key6": "4K8bXxdCYQfYGq3dCRsXbaNT3Rv23T3wijoKtMAUrPboKfUne2H6YWx473PQXSaa8LVZsN8PwQUZojeoixGs3Zbj",
  "key7": "fTATzKumWJhAaL3JfdGkdKbb1QcTxkk6EtLhoFUkvLrzjVjVZkDiq2QE4BWABez4KYzgk23zj4UmXji2xnYikmm",
  "key8": "rEnYNT3a76eD76GpLeW5sQh9mvq5Rx48sG1s4xo48y5kUDqh2PG3HAEuuMPmbDNpDVr1n6sNuzRG6W9MP1YfJFV",
  "key9": "61sD8RYEAVwxjpRHfcHSWHaRsWXRr2VvyGQpoYBXko9WBon1tREdqFUb1Pi5Brn6KBhrAck6LtfnkecGvuAzj6uP",
  "key10": "4sEf7goCdwwkHcS9avxAPubFaEqLcx6kVJH1JpyMZjtRdDBVRn8A9yfMdLkpm5dVh8YZrwDsNq4T2ij1xbNKR66D",
  "key11": "8naScy7eYVqX6vsrFtS38FrHxcSFBMgArKRpoN1ccjnjh8ioDpqxHx4TQQ4todhr47EZT3A1rBFAjpXgtkBY4rT",
  "key12": "3SypbNMThmgZh52nKpuD1gQ43CwXwcGFP12gwi5eaxGbniBqs6U9FbkUxeWfjG7Lw6MzXo9fnAPAxe6xcPDvQ6YD",
  "key13": "3iwcTR8NBKQgvgvG83qUdzpQDsSrpx7uoZ7ADtccg9ErHcBMAmqTc1v8PTrePy8LqfxCqN8Dzb187jcYifWs76zC",
  "key14": "3FrxR96yUqWWG1C3NvX6bYuyqgbvSA3h9vHT3Wo2DAkcJ2xjjYrTPnTx3cTtzbCdJAfbkjYnp9x6Fik2xEMz2vaz",
  "key15": "5JejgKHNiwWBjGy4Q85NHpe5zMEwFe4vqLVA2QyVYTPbhtLy3MGNPuDNe9oXXaGoxRRzHVAtommB2fQpYE1xbZwp",
  "key16": "55HZPxPQ7cFJBGpuSPbT4NGM8GLZ3EfMZF8rz6c1zX1Ky8XJQKAMhssVAoxRhTaRhmRMtpkRFy5sbKtEi8SPawQ4",
  "key17": "44xh2zLmoQy7UPXWdy33qn3iduM3WMKvR958Ew4oGX5gJMxofZxuYLzAcETJwZZiLBnX8vmLTSwnY6tcgCsaf2UL",
  "key18": "UE6KCZmBag236n3AivZuYwdZ4VLXrxcPRQFCHCVymgoHAqD83zvagGyQDyDJE3UFYhmRghXNPAUdjmusFvvEXQ5",
  "key19": "4Vg4jzibUnLhadqKDgDsCYiHsc8VVvGTs2XEnHFgf5rQzJmJjVp6Mgi1mnhR9aMQq6PAaF5EmqTVH4YjKBx4mxUg",
  "key20": "GTwPDDwsvsTgRdyiLurcNuHitg2LRhgNfpubXr6E6ioGsMEVa9WRHCs5UH3XWzrogFQKMDeTfw8YR6sirsVYFLq",
  "key21": "4roiFxs6dDsPpaXjAYMeH5K161iJq9PqWPiwaJaPaZdrW2adypECLTKr5TLt5KZmxJP2vBprNXTHPs9cLmUE5zJA",
  "key22": "3hPzbcPcuUiBv9G4QA1d5NtcWX59BFimqjWgmucm2isqYXha7qAgscpMp7NhzSEQrbaHCJ2zQQgmLRvxjGvM254W",
  "key23": "3No5iNWn3FyF5bTvj7FCsiMNdJLbqy2soBsMgwAEiDa2vqt1CHyBNtuU3bUW7DJ7hcU9ok5oZTuyXkhrTwGFmBpB",
  "key24": "59zWcpAWLGTZRL16T1Z8z6XaoX9i9cu8AsnA3AMhYfH7sVbrSqMjRELkuTy42uQMAtL5q3hbpNYdcoxwTPej5T1N",
  "key25": "2svS1TPeKC7kJ8jnPEtTk6WkFDGkR9MEvEPBAgKbTCNbTGwueDHqnywG8nVc7MUoTee9eq6rT7tQedYp4eqapXjk",
  "key26": "5YWgxgXrLLLDgbipHN6nQbLGoVpDFTqcE9CX77kmzRHyou3Zsj9aCnSvEKgQq91yQaQ7NGUM8UPGGQvomWyMCRaw",
  "key27": "3fgxpDn9VAeggjpN2S9zcDDNGib3ph92nbuQcenBAC3wrdxiP8SxJxxZaLjs9Z8cvpGPj79Qpwsbr5XLbPQzDh8b",
  "key28": "375KCHfQLdKBbjJFRtKqYNvvhCJ75CUqieNeCwkPvsr4SLGagZfubZcDGnkXMfG2Ln7M2KZ7evdBzzhDNgJr1mTa",
  "key29": "22e2nvji4Xxy4tMWhorQy2cAnzBEyB62uSGJYsYChh6efkVtc8ovP19bFumFUR3XnMSzzkzpw2p6tBF5aBGRFDVv"
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
