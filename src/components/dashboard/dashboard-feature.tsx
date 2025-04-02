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
    "4hNAn7cziLMqGfX3JUZoERddwEhDgQzyJpDqCTGSvofNo5q6EkDDBY6RHor5vj57YuQ6TCpUZkzccZ3MGP2gFJpp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ae5wW8bk86LQ5T3498YngdzBkqRQsDD1YBV1qNXLfdZZ8fv3TuHhneTH9oeZLHA61ERKJud4KZVTwx2dA4KJryp",
  "key1": "2GfHew7DT9L8aDXMfCUcy7XHCQYhzgvBCAzT21YdhuJtN3dgxwthvVM8F7mzQSvTwg35VkzLhPkzecURFWT3X2k7",
  "key2": "2byPL2LHrNdVoqmTNMcuktCtnr6SpDonC1J8i2jbNumKA626NmyDHZvNdnJn6uj5hyBMyJuVhynBzXRPfLhrSZoP",
  "key3": "37fu9o9ZmHYU9Ah7qhjw9p5k9hVfT7mChB5ckn8eLDKP3qScMtZnhbapL264BVyshm1EyMi2r9MkafEmb8WQ5huN",
  "key4": "3RSLben2CLZtLkDqMnUu1PDPXf8dnVWLPoaqzgWuBeAWrA6SYJit6aKz2mu52HgEmqBMdCRQ8EH8utUHoeCXBJSM",
  "key5": "5wURhExDfp2DGhkSUQsKbB12ds2MGDTMqnb41zdaeGimF1FeEVTYpLk5ghZDjcpWqyf2qp4qyv8MaEYumQUyXBG3",
  "key6": "5QskEUCEQuu7pGL7tB9uNQFYnUowwbahZm5HibPNsZVuDozWV6CqXNXi2mr7bQDAdJmz5Fj89k2H1ARRvwypPDxN",
  "key7": "4dLBsU14jU81pYk7ZqppxNaWDjddypaCy5RLpWUdpdTpX6ZFEACPEcE1TKUxqHk1RizQAg5MzLfFZRhXaHNPEogP",
  "key8": "5s4v1v6ffC8NZ6o4tci8VXah5BXr4NvMrYUuawj9Ft8eeqhfsVekgN4jwApRajPK1pGdSbQTomyeyF86zs1vijcV",
  "key9": "2w5H3FS5xEhUqkVt1RGSoQa2Wa9yJKAV6YYBymhXxX8PNbzjTK4Cc4unEZ8KDraigoN3YysYUGbnageUZ54XASY9",
  "key10": "4LmMGcmLrSq6NhbxkN1bSxeWuQjsYzns2N1fkzXqQJj7qWb9qLgas83D9BD5QG7htiZKDEpCQ6fZRWdKE3cHPp9U",
  "key11": "UXzFKMgbVBr9wdqmmKDG6mgh8vcE2XfPfF8Rtu2U3ucqfY8Thifs9mm1WibQNCqZAf13TxKcCYsxVP3z7PE5r7s",
  "key12": "5rdckq84wNNEV4pS4eELQvPoGBg8mf1HuBBY8HNC4z9qM5rqKe275JoNzykpHH42sR8kAGPmA63jz41g8bD25Sto",
  "key13": "5sjXRmUEnZf3cZy8qAtnFb16TN4aFhVQ2HcHzeFSiLrpHAdJJz8xAB4WAox6CpVgXiDxFkwhCZCSg3K723MS1EWZ",
  "key14": "3qrXeyFjDtqFaDxLCXxooni1tiQBmgH5WTbHnr2BbxELmFUdEJf1ZxugAcXwUEfCUT8A5gAis66FcnNqnbKezQUz",
  "key15": "AHA8HonkXDCgboP83JB2gtRPXrnzsUX646eW9Wwvr9HU2xfwfkL5imhF2i3KwAnGEBY4bYGTTCfnYyyXs55weKA",
  "key16": "2reTDA6myDRWqX8TwoisZVMmEzTpr4WJZ67nFaBiYnojf5rjByAph3mec1SrvWeRGF9KT5H2whjGnjQA77zDoHQH",
  "key17": "9jAV5ww2TEXwEwdBkz4G48xjfXAR8ujy4Ks91zyKQr21X2t6EpqsEd97666Qwq2zPx8jsQJ6Qap8W7rxu8myaja",
  "key18": "3zUQqHXhTTzRvfjCkAz4zfbhELa6soRkZ7bz91ccztKRiEAFDQBUX9B5SF9bLKrDNLUKaYezWFJCFUBQecfw96kp",
  "key19": "3gXoeJDC8xSQiPDYPM574uvNXNNX8B7zZQVdiqRFLB7UqHja1PkXZc8dRWcMZ9qdYgxMefsQ5ALx12QMSna8hdSi",
  "key20": "3FtbyuUGBEnHWaFFmo4Yn4vixgJxUuBWdJ4V657yZT8sMBQeyg5WTyTEAtSTZHFiPtkrcUk49u85UVe5iKZZypxP",
  "key21": "5BK9Efjoq3VUFMGjpQLXLnnXqdgDqeyWbhyXCsrC1K11u7e6t26KFbQPyBJQ7iKSMLremY6gpLdLebALiyVqY8TZ",
  "key22": "38pdi2iFx2yCfLciGVZXvZUTQMyX9DMdR96K1KR9iXfcG1hEFpUpomvrk3dzdkfVA1Nc7cZn2CqHacxbPofnqqWQ",
  "key23": "2tUhTW9oGW9YwY4QdbbgXdbF59n5eteBbQJb8a3R9dHUSRJoRAinT4ZEQNpsnc36UYsoXyikxYmW2ycYeaGaLMKm",
  "key24": "5MWFiryCRZJ4MFtoT3ELTCFmNJ9g3DH4L2kJVHh4qqWVzgbkCneK6mR763rJfxMvpUv6HgTdy1aKSEQFM3LrgDxm",
  "key25": "8Xr2K3gAP7a48KjXRsrEBMwD3sXoLfr8sF42NtQdEhK2rgK7octLfvYPHRm5JPDxpLDqKQtJnjmzuBYAzvudinx",
  "key26": "osnYuMs98kfqH3Z5d2NRwB8TKVv6QR5AS25pvF5UHPCtRMCB3DxsUwQEAocEmU8ranRnv7HokBdcCDNjw92Cvd9",
  "key27": "35SCRwCHNLnC82xeBCk6UGVTX3a8YmT9R1yA44ZD8Exy9C5UDWyTM4tZLVshyT9iTXvGsSb27p9MPg9Ci9sRWhm6",
  "key28": "2WJ1AQvgNioaSo7ybpgGZcyRZdjrbcf6YCPcFZoFrNRSevsdZnVchGz5s7zLZxF5ZgHDuPeZ3wY8vK8Xp7zGyM3p",
  "key29": "3N5N7gHMiB6BjMYkhLj6NWM9GLEWF3S5nAe5a3hVYitaRQ2rbzC4i5sFKJXKK9MNG8GsqDaMPjoqSGtJNnJagGgR",
  "key30": "22k7nfBUmsDuFwpVuEvRzigVfP8cpoe6Du6GknztmbShZveQYYWKvAqv6veWaEnmX74tmwgbB5Y6uBFgyxTQZk99",
  "key31": "3rpK4aFtYbYcYcPutkrMqV2fXFFWi3Lyi75i8h2ituLrb6tXqBh75h23rAMbuEf2zaro3EzZhcSjErdGEY6ZvRoG",
  "key32": "4RLz7HibVzQ7zni9oq8X5ZUzKdvS8r4DDoizLZEofNgM42WRkvYkK1k3VRenX9xjxaHXH2Q2Bw5uLNZM1EXb4Eco",
  "key33": "4wrc2v1m3cHSH66Z6kFqsLWHCKssmd7xZAznKwzKbdrEn9udgzjtUNr3ubSQjW7ur1pn8k9D35p8Ch2cRHWsPS2f",
  "key34": "5FMHWeVRQRUgQdempFzpvnfKPAWQSrmvmSVKX5i3kFJDMQccH2vSMBoA2ZNaUsCpnSu1cFDQDmZ8jvtUtVpxN2MB",
  "key35": "3HgCKVPNFU5Lc6jhGicMv1vdzMbokPsdF7qMGqpv3RvihBWYPZ8nZaDkDraqojcukuQ1xY9eMvztBRZioSmz1mYT",
  "key36": "31yGF2SmGX6eJemrnYapqLfaNVpouEmD3DyxRPoSM5o9BZ5siG5zGfL9nuRKXFKKzyxnTwhrzynqR2Wxq7ebxBr2",
  "key37": "54aVRU4HEaS7CsCJNAnERnVnXuoGsMMzmXPVCBynRTkaQTraUtisby2WTCqmnQPHoeWt6yT8qWpUhqWyfDw6Bzcv",
  "key38": "3zEjCy5ZcQHGmAfxFyw8QgSSkvCFsujQiscHzpasstQfhBDFqC3mEyMwzpRqnoRFbDYfokrfS1quTowgE7AC2jZy",
  "key39": "4yHV1etKkgQ3EEKVFRUjQa61gi3b38yRMBEfoH67N7wS3vNnpexvjqKRQSi1Qn4EWh9tF6iroBnUEsYzEck1GK5W",
  "key40": "2W4chEg16ZPtYKN3NCwhGrew49bQDJNBJAnPnMKqi5UmNR5NqDUeBbP8vchKpEGeEnAFLwrwyuktCjXX1gXj1DLn",
  "key41": "3xfZmDENrGTWRPVAZVSD7A3Ln5eonugj2USDtTRjoohsnBUAGtxT5Uru7rtA2Kmth41w8dYJgFZwA8pr6tn447rp",
  "key42": "3vwQqpeqX5aQbMFPmfpexKKKb91LtRw13tFe4fYfmKQ88eJU3EEpJy1DX9HpH2o1eJB2GQUuDvqnHZReYV2u5icU"
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
