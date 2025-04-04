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
    "21ywK1GU33cVdEz2RDEycyUw4F7jn8EngVy6ex3XW9VSsVZjJX9gmcVfTrEGEmRNvkfuEWrTx4XJqcfcKfXmtKEP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W1osSRsUEi8f8wkMoWQD7affCjZDqgVCpARSok45XUHTi67sJb3g1tdbCe3kFZhs4sRSbVBbFqMBDWMVsXSsMr6",
  "key1": "3xr1MEggxUJKvQfNoimA2BdtdCbaRh6ygqrb4bRXTdnbBFkgwbVzwVNfiUr9d4LcBXaRPJz84iJTAmsVqUcoxiVn",
  "key2": "2xTbCAm2qeQCzLsaqHroMEqWM7NccH4ScKLHQxu6TNCC1NiZacHMssup1fmBF4AqTQny4MdQ3D8t9VB6orKrZo9Z",
  "key3": "ohajtXdDdJ35EF1pdk57jbX2c35yKMu36k9Y4erseq7GWHR2MVxAbe2Wa78J9pAYNL4P9LmQEGYmJrbfDEtxpBW",
  "key4": "2nXfYqxL9Y9yrQbsWZTVnHDRac4RSuUsmA3Q5yUqgogVsX9gBmFU5Cavdn4i3hdB264HtuCyWu8t4Cz1siJyBYjQ",
  "key5": "4BMAvba5GWy3JpkJcn6bu99CbVQsSfSvTaL2EB4hcyUAmHHXDLBs1papZdcRkBMHA2xs4nanVtHdXREgn8QYbCqA",
  "key6": "4s1JmCebJdm8eauWeEAzxJc7McfGgZeuC9yiaZEkF3fyRS5KorewCKZuVv8GiTtY3dBoXLKgd36non8wNyrffuwX",
  "key7": "3eNVny8ANtYGgbzsB8DH89qrPsDqyqZ4BPLsJNU63e7AGpKzn3nqristXhMmGpBKRLEfzTW5YR2X7i5y3NTrFnYc",
  "key8": "3xhdMY9FDJodjQpidzUcAS5CTML7esQKeTMkfGWQyVuG3eCuFS1JmY7mp1im32Ha3nWUzZJSdfXEw1VB1wyaz3oZ",
  "key9": "5Zcj8hXTeY9XeJcSAvHtqGXYZ8hHJCLE7TWeVh7mUYpaADVJdUqoM8BzC6CuxE4XedLZLVnEFqS2NMyfgRmFHwvp",
  "key10": "5imNE2JxMnPh9yeCLWSrMCE54QiiXx19pTSj9KFZpE9uLUosPS6qJNCBp6wn8b1UBhgb2km2xsBwEimZW5tp1r6g",
  "key11": "3cAJ2cvDQEaoSKiZgjaYed3hMJar8hR74Eb8cj7Muqcq1HdGPnftvMjXZ3mHCvbMTPTZ7PmVkDSujXayRXGL2xce",
  "key12": "3taGcZBiHGsU29xkskUDAXGgLSt4SrB9n7PYchpM4d68WedexibRj7ezTaZSU8MxTRsLLkxDnM1c9bBC3mpSXs53",
  "key13": "7Jx7Vqv5c5itdUGKwunt9FKUic5RU6cSawdGJYKnZh6wq68dd9ZpV1D8nxXiz9Mu779Ao5yX4G8G7TaMpfEE68V",
  "key14": "zeDyHTf8TUfg5HqnhFPNMw4RuX9xCdgY3A9ZUVkQo85zMY8FXqTr364VL4Y6Ak2qmfCkJoRnynkfermNeFiWJFw",
  "key15": "jFDdN6WwtyZ3dFamZe4xnTrD7rDBoPPphAMVbkbuYph6CHXbCN7MLkKGz9DJgeL4Aih8Xmhc3j8dmWe6gnimVUQ",
  "key16": "xU3Q8XfSmZPR8vpzt29MaPmoGainNq8yGrEQBfuJ8FM7hebTDMgdNbDtGeGBjocBK2BhmbQthGFdHLejYArqkRX",
  "key17": "2rZep9U6kaXRDQjKep3WNDhN6a5Lg9ZbECFRLiY78ZqNh9527oBqM6JppruEQfZvLGbYTUs466cBpKzctkVQAyqo",
  "key18": "3BgN3h7Hq6QgGPZwba5xGChUS5L9JS4xkVR28VNY2xb9eZnuxF6qCLTW4Ci1ST3WqYNaFSCmVfLiQoYeRsxqQFFm",
  "key19": "2wfgjmMeCnVQ4UzHxVQzKaNCf8Ec1SHAKdDK89YcxDzN6H42GHwA3eC6i4fEqnCZ8n2igHUZJewQCgU8Lr6LwsXY",
  "key20": "3TywgDF3zgi7tRzrvhujhaw9reTrn55nQaXpACz3ySiDD7MBZ5HeEcchcRNU8vWocBZD2dYYvNzvdFmd1g5tM8F2",
  "key21": "4TmfTVwTaQmVKG7HDbMhT3TQrCtDHJ18QZ4VF97Be1RywPWRM19nr4sitAQg8Q9Zds7UQ1XKBWbbYJVjD9NrgNvy",
  "key22": "38AGGBa87YrfCxfwu1J5EsaP4nc4Rzd7CyjjYfDqADh6WcrmGhWewm5iNebV3whHyRSGyJ6s4WcGTMjob7UBZXCT",
  "key23": "5s2r8uXLYBaCR8Y4Xt986SnM5qUa7NbpLtVoSxG82rBj6rb7RzEzpdfm18o4JzPyKq8JxkY51RLjuqQd5DrTkm9n",
  "key24": "4AQsYeiSuCAw4FuMf64tuVsjZkbY8Whe4N5yX5aJosqiW6ES4N2S3sJfSnWAHhr1VHdU3jDRtkxhUrf5fVD2sM3U",
  "key25": "5rxyJpctoYweSn5dHkSSfi46U4S9a6bgUwksrCGpfDDEg386aB6uVX6cAkW7roCQXNsjRmvUeiEjGtnjjLFFHwPM",
  "key26": "46tUWvHhJZwDfkJME1JmvbdEnhfWDdnp5MXv2JsenxJXwtEz6sX3Shtkjeaxy8CWSXtzdWwM3GTVCfHDumzUvmeW",
  "key27": "3BVZZsodxMcfk2jkYKrYnjM4cHbwfDvZJVxKgm3CCtKKQ4iP7HjoBp1nmd752si1jmLrF5BReMcA5a4yfz88nsze",
  "key28": "2Z9bnft3WijAb8sG4izBB2ob4RsxZmwsY36Ep3CP9SXxRsvirNkeKatvzaQVafExGeqXX5XsuwHA3X242tD2yUm6",
  "key29": "2meXPicdbgbxg7KmKiM5Mw5EtWNU2RMeZcPnjgVY6sKMGhnr6HUyQCC4wkQw3Ei33jBJrwvpQMB7ZtLGvE2TWuTa",
  "key30": "5VmAL2qc78awYJTT3gpTBccJQbBufhC5co1cK63cteGDNaea4EfZuS4pTJiDhWvi1dmYTU9DHZKZ6jVo5my9CjPY",
  "key31": "4dr5roDW6rkQCKSGDt4gnZLsiAW5KS5QRJXe7yBBky4SCixiGXnenE7Ravb8g3Vqhfkox7RT4kCRdfgP3eEErFUq",
  "key32": "389RJopB2BJNQef9Yfo77pq2qS7nXrrJ5yQGF7B6J6BSEqEnBTUh7DdGV3G6Sn4PQgDGaMHgvHaVmWc4pTKjKomn",
  "key33": "4NZQ3xGicyNGdqbrUmLH9bPyf4MhuVRRXBLmnBxUP7h7Veu4VYSwGAjctKJ8aJw3ArMU4rCvy28rvJ3xRyCyKjbD",
  "key34": "5jWbCcaXnbe6MC2fsXLuJmdo7ArDnaULvPKBwQeCR4j41aEz4wgkWon2Smp9RvY3g52y2Z4fWuwbA2KRAZzMdh4r",
  "key35": "5q7dDhTnbtJqD9KJSgDo4UBuDNFHGkDcQEhBpyhwqeBiiLPmiQyjcxZLzC1FZqHqiG9wHAJLz7UV6ePkHCpS1zJ",
  "key36": "4vAuu24ZPdUmAukYyonvVGpKXeFUuSLKrjtdnupnDEjLkReRSGVafoyreDszwLFeyfH8aG8c8ETEwwn7dpMNtxW3",
  "key37": "54WqWeM7bw7bQnFWEB3apBthVegMiCiFc785J4V2ffunpt9i4gAVf4WueUAecBkAcq5HJwJEd5cN6tJ1jYNJguzT",
  "key38": "5yYFTbGKaisBYtBdHsDwpvZ8RywMEaioRwgchvaZv34C3ZmxwcP3ENXjMq1wkGYUVpnFDRRRvvMc7udrUbNgr4js",
  "key39": "57srdqaYrQKibrBV4ku3wABWiyh1qaUUxpvaxkg59que5Uwe86yfaiVBbtL5uLgKfacNmHDjXcxKEUUPHbt6XwPM",
  "key40": "3grSdY5R5PV9zhCJ8U18Vs1LaXDX94zN8svsrgvKjksY8kXWPczEKECpj6tEukfxGTtHe5CHwjrgEvbq9ncAovrm",
  "key41": "52ZbNJsExijSM6HQsk7buGk8sXjzh84K2sX1RiMB2JP2FxqKdZ8K7CbyDguUaDNqpi29zn4h2Bg5Wcny6nFLVTYJ",
  "key42": "2TwNarb9a8TWGixrWQUGhGdBD1uSrQtJyn1xCWbtS4Wwr1bHRVagNukF9BiRUdAGpUbwWNBdHjAVQBkcmFYoAAtU"
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
