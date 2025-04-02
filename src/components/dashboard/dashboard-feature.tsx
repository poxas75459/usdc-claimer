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
    "4kN18syzvzyVuENiDkas7D8BETxoCVhdDcyGcwToVNJurPgjB6wnkVTgiEUfQrpqqhGvYCBjiHzyrL5MMwVgxc69"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44HbK3SbtHbgGfce1tdb2jpB2pkYxQJYVwzekbsVLzxJBhqA6sAa1WCqnEaN9dEFDpWj8J7ZDb5QT5rXEo2Stviz",
  "key1": "5MadonQxY5qfqRw7LrqLc1LZ8garV6AaYwngEHV2E37vHmhB6K1YxxHAfAbCNeqF6M5VCogRpVwJStgKt3NPEL4q",
  "key2": "34p9Moon82DmG3GViE9u5V9sH9k3bncpjTf3qXdLoZvhgy8t9pmh5rywkwkTZ6gVapP9gATChfRYu8x6FxmaMN2R",
  "key3": "4kEuaqHizVfy6a69FhEbSgyivZ7JCCtYnLaTDxf6iuUBCsC4YAU8je4KiMdsaVJxfobVGpHvHUYKsAK4yMmdZBMR",
  "key4": "EutFhaK328jL7A4FVNkNPnjKASKUB9dXgxFdbWH6wkGHnVpCvf9xCPk22WLwbSdZ2gVG5YH1dzxa54uK1McL3hk",
  "key5": "4tZ9aPgiQipGRXDbvCvwxNTD3jDP7vZEZU5mtob27yq8EWP9AhwnRwobuAXSGdAJPVoyM9DCKP2kciTqRpJf5fQn",
  "key6": "4d5hj7pfNkLLpe4SCRSpNQwbpu4ysV7c2Vs8upXSy3QhAQpApu3tTcoZCgGnPptWAyda29k983ZNkFv7PCxr7pH9",
  "key7": "3QvSS8tHWGUPcdYieEH2ok1PErqjYdTaLytAwBAUpzJcxx1U9VNDa5H1a1xvhwaLLt9jcRGk1H1agXohZaWnCL3K",
  "key8": "3E27xto3nBkenvUS2XX85m2o14RGHhi4NpTNXo4YShAn3Msj3CasSyxfmNGtWj3Ktx1GwGGdE8dNVA2BC3R69AH3",
  "key9": "2onkjY1f6Kc8GRTzaEXnGadc2Eq55Exmueo7V2iiRi4DrmKdAT7Hdu96FtQPS6LMafon5i9iUt5Hbwxk2uJZvpq5",
  "key10": "4tLNe8BAS227EzsukJ9zkVbba82gEADAtN1EftAF1as4wNi8wTKfTLBM5BawgQP6JchPPP4aujH3HRk1G96NbcTU",
  "key11": "5pXuQJYC7YUo5PnPDBv9i1FFesySywbhiRhJ8kBKXAa8ghAUE5bZzs8wTa11kGFZo6yp7ts6HSBw2y8z22kiwLV7",
  "key12": "5V6Ye1NGpnNmTqmQcoWcciQFRH8HRsUT3YbajESMfZTD8Le2tgDmh2nqZwqKC5s9Z3NPVRYE7nisRSKkyWtRE282",
  "key13": "41nB8rPyD4F6upYJCZ8TkUnT2iPGVtm26Bjjm5SAkrEnpzrYYvb7ntTLtXX1En8MDn29VXWCuFLxnhyFAwdDq8qw",
  "key14": "3DCpH3HCpo36Qyh2VVTihKnP1wdkj388nq4boUhwL3weTpKP91qDbGq8tySZpk8kW46j3GmkUqmsvbFTyMPi4sh5",
  "key15": "4LhtJZTAiD57gcu22cdMwjdjNazEpWEFxGNY4dPpcWpqKgguTVmbHpA5zBjDTZeyKF6rL65MHfACb3HmdjRjkXdo",
  "key16": "4MYGtfNrGG5oJzPhPGcU237ngQiT8eZWWLNmaTvSUdf4eBwJG5ewxb9jq1ATjkWXzkBMoy3z1CtcuJc7Sc4zxzdf",
  "key17": "5hSvn17LYEfScyCXTZ2aSqb2ADH33S1t9mUfXfypjSoJFpp95W5sst53TWhN8hGShuFmwRfj1VH7nS5HvUNVYZem",
  "key18": "3ybcumoNbMbx19HLBDyqQdCBhjCECLskuAFvbryeKkGvoaPVGJ8tbNixXpivLX9hgLRFKa9BjWzBqZXEnD6ErnHq",
  "key19": "3XctDXjZZynzUbJKquCdETkRsYDqNPi2Bw3HHsg4jYgnNMcvMGMjNfic99UFvj7Pdb1pTiAJ1R1aZ5zLpL8ZasFK",
  "key20": "3rqvMhXS8MzYA6Q7wszsuFF3M2auAjGzihLjnJ5KEyGGPxwxrm9kkNuL2oqidqekXzuJe1knXn4AA5j7Bo7zLjTA",
  "key21": "65RVZd7f7JKhFY25zsUoapcJrymFnmG6mEvY7VhQ8aYC69K5c9GTx5K9TwqpATp5aBcnTHNct6F7FH4yLTNb5gas",
  "key22": "yU78GEEgqyGYRfNfM8YxYz2VRMyp89JACrMUyAvdmkXy8e1uyDru78FNqUsSULAPm1AcTVsHUMpKpB3XnTAbDfX",
  "key23": "JcTqgGA7u7QhdP4HcQrUtfjZa18LLABmJvRs6biBeeHucw277EFsAcYSKTm9tNNSHsPvFAzkxmruYZwRkoTJNcM",
  "key24": "53kKyXUTETtXjFijD2KoDwu7erf5Tnrc8xSgqasn1mszNWUcAtJ55GLUVF2fRSX7qfEkuifuzjKvMxTXXdReTBjb",
  "key25": "4SUXWcY5ud8bjGxicai6ctFT7smdqUDRFDgDgUh3VhE3tEX5afJEg82jirAJjUk13QxykQx4TGkfRYPvtbbnhZKA",
  "key26": "4JGngxcJEiCwyahVFdHiqcAt2Htf1FvQt52aW3emQNiiiUfmKHUwmAoTKWx8FNLiGU9GDhqG1cAbiDUeYHbYuzaJ",
  "key27": "3hpQGJMFQM32jNFLEqTXLSxPix4439PycY4HYBVBx14GGsDog9BuDTHNAAEo15ihZpGkGnJCDyLbNYaSkEgS6Dsd",
  "key28": "26i3fuHauFmF3fNZZDrLdHsVZMND9vnMno8u4YCjJyk86tUm2mXUnCvq4uk6d8VefpKzQrbCrGT8mScpDmi3dud6",
  "key29": "goETA6QUGw1BWutoL4wwbM2CPW6sE3B1c92LTfAbCZh8errZASq6pi1zcVJLyqiaAJG2QAY3PazaPpPoBvtVGEC",
  "key30": "4Xu1yCpoknyyJbJSQ86GkJVMycM3Ga1uHd6zubwomb2MLVsvyhhaSViS96j31Pb1DkmggrSVR3fBJ7sXfwkds9cK",
  "key31": "4Xr22N7kH9f42sL3ggqEgeGmt1AstTcBFxDm38NsybQqzQxBRMEQVskZRHY9zuUipaRZgT3NvkxxLwFDLACgYx8Y",
  "key32": "5xwSguNfRy5BnraXoFNzrkkKS6iDrERYh4nVRWA3AQFwA5WUG8GzNYLS1etaTaV24bMBFZjn3x4nrgMfTr1YUNom",
  "key33": "3VaRQ631tp1mobEmYJcB572PPP3Ji4kXFLUvnxc38P9R13wEWNFF5T9owY4z5hpC1KLQSxa2v2DThV3mmaMEvxkM",
  "key34": "iytUX5yN2YYpyLUPvh5MSGdzqTaTyFmpKA5VJrkcGRD6oQLDZCPnTb2o6DKppsRVskmbEPwEnEnNAvYxG9pny2c",
  "key35": "55vL6S64qdLWtpDvQnX3LfPWxtTK3eq1VRZyPaGDjCTBZTYQx8hGGY7uHgH1PG812uaNpmgpPE3fkzKFwduqrJvd",
  "key36": "2tbNPh6pwTXz9L5ixD2ApzFbuk9AT3q4sUqwfxT4C9ve3o7E5SWUMwNwua5GaYeELWWRpm7V4MEMeJLNsGHEP2JK",
  "key37": "4LizsD7V69hmyBQ1AwCFeEp7DTvdCXPR4XRBpygK3VLSv8h3iNVKKFJYUwXr1zrshdvSBvgHCk24LJn9PkdBnyPj",
  "key38": "5vxkq9q5hTFVGTZxRpdtfeR5wXf3pRJc3mcvJfCmxbVYexdyQGyrKAqA2iYBqyGu7w6X9fVVWEQHDrSKq1nCfjn2",
  "key39": "4Jcm6aU9YtT14nnB5i99t9YKh5KCE6UjdvLuvkYBsVooAJqpeNnMtp91M48tGUmJnxZTJMCJ5N9eeizDAQiuXH2G",
  "key40": "tNJDz6eqi3f7GADUxFFZWZSCb3wb7bwgMLcowxz7yxGHkjFYMMh3FQv2aQMikEburcQxNyVcX63XfBnX9k3hKkw",
  "key41": "5cWiLSWzepfEpFH4pG2sqEJgkfYUvukmH4XMWiKZtBgomTfXUJwtx5UHFYPQKNey1tfznBGaCHPicLviM836k6Af",
  "key42": "2PTjAkBmRhWBq8CsDuYvCdWyZxnaR9siVRBnPCtHhM9ooHdgfEEoAuFDMWsSEAYWKFGwsGSMWioDz7EPuu9Wpe9k",
  "key43": "tVpma4k1MpCCmwkbP92wpXci9e714XwfePeEz7rdsDDpsj55o1bHxqoNSmdEuua2AebGLf4vYj1t9xFeYZMymgF",
  "key44": "4Hi9dCfWdGUK15EDHzLVrhdxFNiikanfjpLwXzvZEtbwcbH8tyaFYYEvc1T3avqZMHa3xVSovBnQ7yHo9Puihvp2",
  "key45": "2wLK1W1mdk1MWYwK6oNW4LMKTA6b28hgvGrZg8PLXdS7h9AkT3yBpXz8k8azrcBJ1pLeosujFv6vAFPaxaSoU1cm",
  "key46": "319wUwtBwV9TdmJdWRyoSimz2n2BffmTpkEsbVPCRcx1o3BJCkVWE9Vq2xqc5NHk54PB933UycnZd3BZGivcFxyM",
  "key47": "2u4VzUBhFW89XXXez4v8RL5JJ38sBT4mYW7FuST4MeH8qYrULQyyCNcuovgdNG2t139QQT5f3A2dgXcCGnviHLBn",
  "key48": "2aPqtZtVntM9kVyrceGuwbZ4MxYd5msskfuq7H83brW4Y8j5VvjuBtS1uGJpC9UFhNHLGwQuCtcKoSz33nwtiTh8"
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
