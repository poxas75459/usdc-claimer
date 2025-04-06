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
    "4EyMD3JFrXKMTtotAztMPHV2PjbMoPkt8Dn2JMXjbkGJkfwzTuBXUngP8mDvKtw2dhF26j2r4LFpodLRnWxpJfeE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GK9NzkZ7cnV8uhm7Ywe4ZiAg6aezGpJsd219W3xj94sKm9hdEHa8qJjYbEbtLW26qaSHMJQ9rHHY91UG83Af2Do",
  "key1": "2heDnmqApCokbgaxjZNScSsFM8ftK2iLaCY1vgN8bkF8jRJw8yVmTZepM6uNwRCwFFRQWhzwQcbrYmQepX6LQ5nW",
  "key2": "4Jz57FMzXZStiqHUeftFF9sfbNKYufFyEuCwJeHQAS2QEQqdmk64p6MULne1nUdb8zikroGxhxCZvybYyskMQDCP",
  "key3": "2AvL9JPF3bXiE3hW6pPwrBLETnLZhq5LnSofGjvXb3H5TrnRQUpECEjxiCoZxGQ9VRaKh8HsrWQRzfy4kf5U9TSC",
  "key4": "5tzRSmJA6kVta65UTNcAezrF99dx1VxH8spGHcsKQk1E41c9kXsh5Q1D3CJMvHfE5JEmWobKqtVg4ikWBeRPzim5",
  "key5": "4QieJyUfpC7RFS5sZwPPqDgHLg52jWUjwJ4VftuzktxjU2v4sqnG3kRGYzZs5v2895b7eY3VYQz5AFXwEYyPhpfP",
  "key6": "4CYSKBMgEjynY2h2JB2d5Dya3cuh1aXva4AKzBaUQfXF2zDNQ7egWwSyaCXDZqLfKnUDBGdZhmk2x4b9wqVV5wq5",
  "key7": "z7mjRVucjMVWmMfXWF11nwRwkuWP32txrvgRteYsrQLQexZriVpWk4TccVqNviDfT94FFaem1aLcPak35VJ1mXD",
  "key8": "txC4HUEAiGXDvdYLGCdZ4RLPa8BGVfMd7q8etUCt2Zb5QE8dccYc9Vm9nPxmyLsSJP3rAHzHKvMFsJmwu2b3AUG",
  "key9": "3Wz7ENfRWK7qH1NhCtXcosiL8k1HEf3F2qEmPM3s2Kbt9DzuPQZpEWdcrjQDdSmdVNmgRgtXFuh4U8D7cwfeVGUw",
  "key10": "44GVxqM5sN8iDr2muuhoXfU4XEmEFkZfnrJHGDc5xVjvUA45P9NfDPm3s7NFWfgaakJM8QVoiREhzw7XC5J8NAfZ",
  "key11": "5EoJufADz86Aniu7VF22Sj67jVSFeheuUQwWWVEyQ32MeMuEZewooQuqoHS6ydLvDmE1ZGJEQ8s49yVvTnEX7qS9",
  "key12": "2bvfzcV1ejmXbNeFikdrwdLxAWEC4xLTUJ2Fdx9SuJUQ5Y3G8pP7FmGJiawTnicBjeB62H6NX2Xgq3LQ14fQShhh",
  "key13": "64pEVNesx7cj8kmED4m3T3bWLcK3fh87vYJL15YgfEzczAnwvmmUABtU3MZV9ZW4PQiVkkZ7MoGAGCErYnx95kfM",
  "key14": "2NuEV49HQHs5uRmZP1wvK5MjbkHRzLmPjW2NR12T7gNhGUxyvy13PEUcFsxCZruGLurL8UJ6EsrvUpyAib5zPhAQ",
  "key15": "4cAAw8XWVE1NXin3f9cAzVpH1aubGoSNDq4RRUsyq4Uy5L8HqxC5fqLZ9hHkq2RTL6KBRRoTVjBtRdhpU3i8E9f1",
  "key16": "2gDqsbzTGuCud8pHQ2a82uz7tBJFAbBVNaQQGQA6tcTCoDdXGT4kifSzUmAkGv6tdoXqiyomZ5o8ENxdBgdbfexi",
  "key17": "4GqdBfS3J6c5iUUji3NKX6NoPkxQqCyNp23DrqYbyK8k4Bqhg2D6QXFhR5zpmiSchhk35ApY4MLsM4dUBc6RNPAG",
  "key18": "uUzEAN1DTdx2yxMELredJ19tKgdanJ68HsYBTAWd6uRHjiurgUvZVaqofsai72LB5rJzKd9pRzv2tCS7wGr4A8q",
  "key19": "zjkYz3DNGcNaCktcEwqBJSknr9MbAgdUyTnfEkYFrLCq5SB1tkDVw2crWriBCNsYQkZ4KgxFcX3XfUqSEFehxtY",
  "key20": "3RNxPB22FvkLUjQDZZXPqZuqAauRocd3FQ25mw8wqfBM6NXmqfCnN6D2uzzJ2hYvHTerGaGPxCRKtckFW2yj1LcT",
  "key21": "5VREZtcsgC4AymFfPQzNTcwasBbXi6FCs5ML7pF2pxypbhLFzstNzRGEvfVeNVsqh6ZYNKpjVNgdtaDSF2aKJvNE",
  "key22": "38ip1gdkWs91aeovXT3MxxFgGfeY38KnLPE4BJZNtXfhnNoJD628ZFWdD56ZbkqzTUeVzpezDncKzW7D75x8ux7d",
  "key23": "3BH1fNzEzarC9wpVV26F4RmeNGuBRhEqPSNCZomcnncvCsBnCMW2G99u3r5adtF4GCrLyQ7UQYQoKVNh9SubXitn",
  "key24": "2s3h9Dvvf2LdrenJkiLxRdiqetnKKKBPdVGucDchteTZuB9BYZ4uNUP6d7RudwVYYNaJWPJUsWRibSC9gjgHyAH7",
  "key25": "354awZaj9VFtHhDki9cAhKLANxkj6JXD4XDCGpzkYvStVup4o3V8km61F46zXYpa3HFyxXHrMctKv3Ut5FgsDxp6",
  "key26": "5LpHtRE6v5F8yTQJu49A6uJeNJ5cmUkq3KcUF1ReZpBh5FUETrvBYhz5jM1cBWcY7Yybs1eHLmXmzQvVSXorJkmB",
  "key27": "4J62qHzWdrBCTpgkZdtA9bDugukuRfZRSgBDj3ZsvB3pzCHD4erviyBg59kDhQ712sbbs4hao8ALPPkzpkrfAXgF",
  "key28": "2DmUnUF9Z871raxrJ13unjcRemb4i2yrW1ExhYoSx9YouDZ883QTJcGQguDSv3MNbcQQ7TdUc4RHN3DnC6WbF2R6",
  "key29": "3hv3TqvgL7ktADBvChX1EzDQNAGqCarsDXv4ce7HHUraBAmNiNT7Y3G97syExqByXEFHU1rJRJZKDuhaNWjkntAw",
  "key30": "fV84MfEqBwRrDvCn6AakFkL3vVQfCMyLsZ6HcQbrGz6r3qJg2Nsibi22wwrWsHeWwRsd9w63dXSWQUnyHCvfVHn",
  "key31": "2D832HJwPVSsi9aCWrziYscDU97tDHYX54wZ7z18KNfLPpccWubFkqc3cMZ5ZCr3sNyd46Q1G6Cv1P8kBpEnR2Np",
  "key32": "2B9jCQ5vt1ygYbv4LWQVKGVYeETB63HVdNAY1vZMuSTGX9wTdZ3HuiNbGLYnnWmCuJ1ZcgLutRwjsrKL9X4wC9BJ",
  "key33": "3oX9agadJe32DHfdvmDxrdP7qMsbAUaBXaSzwjtQ4GnpXPAdJSDgiDwFQ7dYLeaGNgNCfQRF99jP5Xm17GkW1Udy",
  "key34": "3M9MwtZdHZf5Wnvwh5nHNsGoAH4vH8bdxjwzSjBj5Ty6AXsYJyjiWFfdK23Uab9FbPL8gAC8UgfSFWAdup3pfGa4",
  "key35": "33cD4XQ38Ygc5do8KBPdT8FV3ytQvoQ2Q4j64JyLQQ4AaKwbDHhsZbkfVb3bod6cWzZnU3MGnkmMNxTzHChWHw7p",
  "key36": "3enp9SrsKNmZM4LdRec7hc8LjVs66B2UNDjFEnqWsWqfG3GLbKJwHEVE2mxLzr2oNdbVzxNsmRD5oqyaYvWnLQks",
  "key37": "4tAJWsggMuksaEVL3nfDycNPWeAVu3wNny86d53gdcBBorcqfmhvN7g4VvjonvRYFWinHzr3VwfLVWZ3TE2EGXP",
  "key38": "3HWUyERYt4bzoCXD9FRZsVsGJA9fbiM4PgeZHoiQn8WstTHjc6ziu3We4vLuoV1wHQxap3isT88MYMwV3kn5aSmN",
  "key39": "n7rVqTc7xRAmFsXBh32PynHpQie74FKE2fjVtq4ZjirpndwDCntKyayBTDXYBob7vrAqWMGfXiYddc2cvfAPeu7",
  "key40": "5ZyxsnS8PHvBkhAm1mpYFy3NEJ2BEwkHbHEEwHvTntuYeaQf5K3mYFXE2nyziYYffkBv6KuF2WHg8UTwEBYbBjp1",
  "key41": "2X2KZk56PCwMCKyE1QR6rdczyUD1cCcZwFVuFec7GMCvxcGdKvW4diG4XpkFU9rf73Kw2RASYesyARBHsdz2KEdu",
  "key42": "4QEmM1jwJQsUdNC1p4CFnLRifnFApk37pDoZFYu5cbLA6DUfwBmvCWZfEAowhKQGoVuFei4y9Y13p4XNSUuvxtzT",
  "key43": "2DzPiVPrU8WbaA9i8ZJuKfExrvCS3XtMUBkVfeeJiqay9BHtcZ3c712DBvX3mryrTHuF7dYBxSKUCd41W3QskxmX",
  "key44": "5pLD4LWm4DWCy66Km3urHkYfS5HpfBKbqf9LADyi37EcTWfimLoH8kCUcGbziGnepK5nDRA5WMA2Q5e3EHE6j721"
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
