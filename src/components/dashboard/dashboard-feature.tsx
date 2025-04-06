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
    "2oDsaWDNArG6TG5BafKT6PGYywV4JMgPA8JQWKh1dUGBNct2E1mNKs5f5N1o8Zxg1KUecDAdQtc3X12cG4SRjjHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pDAWKMW1oP2W34JssmovYMgBBBznnPtXEgNFyRk3E2ZxhXvJY5Y5yeqkqzrv1NAgJMgeQnpxdAXJGPv6s9GEQi9",
  "key1": "2X9gXGGbz9jhStU4MosCjUuCcNGQwDYbJtGjTfosAH86A6h85BmKvCfpDvrWNfmgE6V7cFpy16Qp956B9rd9meuX",
  "key2": "43dyTC8FLpqWo2u964bixobJkNmEuegxNY4thoamKM9YjCU34ViioxWMvoWuzTK4mp786vGJPVNTJ6ToHmZ5A75A",
  "key3": "2Yrq1K9vJp582VNRBTKmcu1kV8VSDhfcyQKKYxasbL6fTvDVnr4q86Eo9qHVxMxqxBGx9nUMnNBm4RNJ2FubseKH",
  "key4": "2Acu31Fao5jXjxWB8tnRr4iVRxcKwA59Qnx95yDoAU4pQuzjKiivFFi8dgYaHXFzctcwjYvpcyC3XQo2DonVSW8B",
  "key5": "4hnpUkiiao45oRTH4Hc2F3pLHoA7qx1vmUjoff6QYUGPpsYF6houzbKpvAqpVFg24CCPyHGn8fHkj4PL9x3dzvuf",
  "key6": "58iuRAU4EGnGTX4ZWmVdvWjepWaS4MSRTaXxDb5k1wZQrPRxwtc2d5YVRVC1QYXpg3eoFf1QC4buvdp2PyZPcdXt",
  "key7": "VS2RRarbQ4uajg4evpWz8TYxYS1eiT7wvTv52iEUAgZrne25B1LGko56rZ5rJHMBNXWhUfbZjou34inM2wx3dFg",
  "key8": "EDPNPn5oHK2XPLEq7XE67c9wCea7YoxzYj6o87d6kRoCmTQpp8UKNgmVNBXpC3oV9T2RrujsXbdBxwBZRW5qSsG",
  "key9": "4F6UfQbF3BdJmoZ13wH2T6AkYRu97c22DUC1k3ydhwhNnzkiqTL9Mu7rVqW1ZZNjrzmGxgaGY3ZnozDwrcrWQxQZ",
  "key10": "39w8rjAciSfnboof3ydcGxeRitujbVqbFhFAeqQBtEap8woAfruFV7NCJj1U5d5cszmFiaAUm8kHm2YWdhp7E2Q5",
  "key11": "3H17aAuCVf6nXdt3zUsJAEV8HUosRvb5ndrFg1oLysapdg13FpRQKyH7MFNLXgxbStUij8ks3H1w555XMkeTwWQ",
  "key12": "4MymwxjvPgP3w1eVRUVEUbWbdKvzH8R7YYaoBydnLVYz5Ru83F99cF67FKzTxTPmLYiBTRZXzVBKSJYhpxWR7F8U",
  "key13": "4GzZLYzvgrThfX5UZvF8oBfW7vD24KFXcKK5sEkjvcmgfC3aNSG2QPSD9onvvsrErc9ZUWMsmNShgqezBYej5sEF",
  "key14": "4epM2prYE6Rb55xU15mSWf9yPgoFKAg3kGSuW3mGHSgtRbmZ5EaWsVqwKyT4tPYb17QSZ6i63jmGtDKe8WXnrw7x",
  "key15": "3L6urE3jPkqqu6yU6FG61NeczPwQU6wZS3vT5mR5Hc82DYgE4PdbgF7G4xBgHyaQbzptKE2E8MDkEQwiQdoZGHyQ",
  "key16": "464X2LkPswbGqkBio5RfUB2Bs8y9QU6oSjoP7sSWMpSNch66HSsLMPuVAJ9LnWEgyBmPcR4sAdAU5ykQotcXrFJX",
  "key17": "nGXTRs8t9YKf8dcVBmhPxbsN3tN8GQ7WDQbnKe6cda8aSX6qoYkKn9FfW4GP8Mpu8xWrgw61EE8UTr77jAXadRT",
  "key18": "2QbKKXuocCvmaosE3Ti2rxfmwzKuXH25TKggm9cPs9FEeof5qLU3LESQDfS2vRFx7cxDNMB1AkcAb2woo4iywYpT",
  "key19": "21qGc9WjwPUyS9ysjuTafHH6sDYUG1gGFMJpTcZMuYQMMPFZURHe1xPHRZMFJ2x6BkmsaqRUMfzsuSo39GuBVgAK",
  "key20": "okNWKpKonLPk2y6NWZrD6ZbtBFXw69tP5eUWivsHSi9Mb3bJzBxaNAKVoz1G6K1xPopaY7m3GQBcfy2PTmaGrKs",
  "key21": "2uMhhUqJp1Xie38GULY2Y2459NbcvQude5PCytnfPM2RAz2nSfYMvZUrjucwBpnENJZcSan9ZcBmt5Ffg6FVEoYA",
  "key22": "64MV2CJq5AcQsZtFhjvAD9vFRfW9CQb5NUwF7tG9WbhuCLKN4BveZb5ccuVgVFRCCEgqD7VjzVE8r2v6nEjY84KJ",
  "key23": "4yCzwNC4FD4kD7Lu6Auh8EKYBBhMmnNzWsgFfmAcXvqyfV5fWrwgXPdDeFFqXoztpWJJboTpj1zPuEdzU5pb8TqC",
  "key24": "53WM8ntRnBy17AT7v9C1BCEbg1Z5zMWRmQmpWdkjAks6XvmCpbnTnw2CJbzyN1v4nMZxaUM4iQFA65CM2AWjWxFL",
  "key25": "K6cWUt3qP5Vqy9sJh9YL7CgCiPKaU1ME58nHdQ6tPm6AXTQM5FYyM8uWZWm6gY91pN1H9519gHh1JYBn6umxT7i",
  "key26": "511hvYY6LmdvhNFHdxei6cysvv5ngCQwdetmrWBbULV8BGwPVfXvGXSB7ctpbzAfDmAekridem6G3EMoLjoeJLs",
  "key27": "42DuWFNYohhhzkWHkerqQmbRtq2BdNAUpSZizpiBRVj6R4xrX4dKaDky91GpQFn4RG5K2L9FAwYfEU87NZncCEgE",
  "key28": "2CCMPTeU1TS36j9hrFagP7yEwfmfoxsrkf4k15wy4uKtJeibUrg4n5hyit7a8r9CMvQxpgJaVnfVnQS7j8jinpxU",
  "key29": "3mgriRXRb5fHTMXxxnoHmwVtpsCipx2LMPcR4L12oHpLhvsZsjJojZjgrYcSSVF5Ccz4mHAdJtprMWcCJwNAV63H",
  "key30": "34e56Zz7t7hHL9fGWYz8BM5p58vMATPinXw2zEWxAPjuxcXB77miM3bYcVr1m2rd8P8t4k6pMKp6ExDYTa5t3bBJ",
  "key31": "64DpdKgyJPHpfMu3PLyP4SEEVpQZDuL5Z43rV4ZQgDSjQPuu6M7GE9HcmuQz3DrZ2mdmkCdvH6fk9SYYU7vZCqqS",
  "key32": "Am5wytpbUqC42PDrC4o8dfz7FJRAE6KJJj6EwdUwJmBGZuwjHUzWHMsSbQrCigFjiCUBUGnn86fNGVP7ofCV17D",
  "key33": "2RnUzFQVVLVQjutpXvhWDs97mNTRkUFfmUussdB1v8epqzxDM5bv58Yet9cFgdoX4cN1sMcSkTxTaHC2WH43fXqG",
  "key34": "2nW3cXZhzR2VvRKytHeU5oZoApfgYFiUpQj7PZXyjNCLGR5vYVoBqSy7DWb28ubDLn8PHwynik8X1wrvy6VG6529",
  "key35": "AzQJhKd8GFCiFty1ZYGYVhkYfsCiWtQMNnjtt8rQJh6anz4KBrFXNoPR5jo2sbCywfdiHXyWjjsNkCwRZHUidYW",
  "key36": "3Qkzt43F56hCVy4auurMTvebeeFbd4V8doubWrnJqzQ9ozP8ef1GzkGDE3oyuQgewxx5CMnQvDsXBymWaXojJErg",
  "key37": "5fC8ZAkgfLwRRzV1pVPNtnFstZQ1EyYGrKeg5wL5rMC5jyZWQj5cNv8RjVBJ6yuxDvSYvxFJ42wcvp9zSdRrXGDm"
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
