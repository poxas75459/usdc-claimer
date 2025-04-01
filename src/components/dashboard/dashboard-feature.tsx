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
    "2sM8yLvtLhwYEN2ZJZ2y41Y3aEGifJhLGoQL9ctZGdawyBBiVRQWEj7VpCveNdajyt76ikXKi739qj7bGJ5v9AjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kWNARanRGmc8suAFmYjb4H8DAFgGEr6g6dwrAS67ZvKTs6Qt1FTkFf9nVkRjqpS4phCouhBM7WgZqSdN7wYe1F7",
  "key1": "3KNbkajWkyewjJCWLHSTBkZr8nMW1bBaZM6UCai8bsVf6n4HALeent7MiUA52BkGLRN8fqz9F9q6tuKp6XucwV7j",
  "key2": "4kwX4jqWX1QMMfjNLSejmHdvbJemWAThgXYXvsMrFSzLE85mcpUTiuP4jTuUtZ6qE6kYYatFXwF714HXbd2ZghtC",
  "key3": "4oNd52misAnqWKahVND6oXtpgmcvWzAQJKvTYSotjBETpuxjJKG6BZzubMa9Ga3bknov6z1m7oNyX5J4pevCj1Sd",
  "key4": "2JV5d57QeoaA12WNeMCwbiL3WGNeEMK6ao7SrczcrWmdiBMo5mq59HLVu933FGAnV86dq4oHdcc6x6tV91Nm7HMc",
  "key5": "3tQ68PHMMmY3GqYpEm8d7mmZ39Qa7SpdBFKU1WikgmjtVDmH5FF3oZFk5nZ6XNohNCF9uW5kneCLn45p3XA63wpY",
  "key6": "2QfhxWGychzazACHcQ66wX68xaqQseC668q8Pmb13d3Cvr5yAZhxpFvibAZCrddCMF3pcDqrRXRKaQbz5T71dQEy",
  "key7": "3UWTQyCUuBJUCmpgKXTaRMLCXyrP3AfP9czgw5zYpRzzdL5RT3xY95R6MSXFa7h3tW2J6Wk5b8kxWGUTaf6fi44q",
  "key8": "2WG1Yehewf4KW5JzwDuxsYwn4kX6UTqSNDBdyg4MiQJpDvsfZh9e9boj2hjjgzd72NjZ9SATtyXKBcYAyJx9hRnR",
  "key9": "4hMqBpJ2aRc4ZTU9iCow4qgXvarPHsSUF3TJV7PHoKq8BV4tfiWGtJFMA1qNTRdPzWXqaDzZBY5q8GsjB22VMQkS",
  "key10": "4kTh5VvmyzqDTpFBwq6Pve9iCzUg7JJNc3SpgjstWCFHueCzqTUcczofFaRQq7ZpH5pujYYGgyjVNeWrVBgvW1CT",
  "key11": "5VGkpotnLqjUj1SZsuGL3pPNridrik7s5SsjJK1D4QoRurgu2vTTzRtr8UoBpYpMS14tDrRDTV8SaG2GASPjkDp9",
  "key12": "4vSjt2sorAe3iEr6QxDSPZ1rwz6ieDovih5SrEpFkzzqXRCFYcs7AAbUajiVZa8MfLsy5THe3QMuPM1znKoqYrs6",
  "key13": "3ofV3ey2G6x6Cq3L6LLw1mzDowvR5hGRH3i8gCKFdaxoHh2qCFwuVH2Fh29heM9ZK9o4VgyDCgVBf3Pji7fo8hJG",
  "key14": "2vGNVno4egqTQhVjrqR8AnhLPjbH9SCL4bygT2aPXfgDEJgQTpvZbXZ2rJHsoLoZWtYa4wxWMWQfnRsrRpBVyawv",
  "key15": "5D14Eysz9rSv2oNWptcUcsy7ovUPvoCnsu2Br7fSvEJ6HG3jkJYc1gsEGuev8ozhNLV8cdJ44ADXo9fgKnG2sdEd",
  "key16": "2riaGN3t1eJZqyYZTyGDzVWuFQRCHKyvDjHbQUK7Y8UCjsNqMHg1K7JZNyKZ9EBnfK3FDi7RgesicjFLyViUwnbv",
  "key17": "PBv6DZdJ2mKLgchNZgYJtHF9tCUXhqYXNqetmNViTFMonNsKCT9u2hJwtPg4bakRSrdZX35U4MU3Vn89Qpuafde",
  "key18": "2RzEJ1DRXsNJA6r9kUoHYd1JNnsJuXHWbNC8WsAksu7tMzZSYbTC4Ug5oeou2bw1eL6qdXpVxFH9u3XFAemj9orL",
  "key19": "3DSk1vkzb6xWvLEcR7WJCopGNvz92pNdwdRnMz8tTqavC8x2LX8z51PSCEGeDfbJDRESxS89iEv71G2e9Jz5FxkL",
  "key20": "2PFbTE7XzHiiUU8QgYGAkU4tL1eCRxVGsK1LZDYye5N43xmvxTje2Fj9v16vF9EVVii93TY4Vks9pEegsUH76nyg",
  "key21": "4JsYtkX9h6LS3APLJSCz2mGFirxCVbtdGGfpGfccoEE4JWTwELbz2m6xixRgBpoidFdY9creNTJDPwoJFui6bCcU",
  "key22": "3NQtoFzgDPAtukDU1GR7mterTiVC2Hj4RoZfc44XbgYdKN6nWgaW9F1Lcb1VMEKBHjELv5jQo8dyLmd7rqyV2JvN",
  "key23": "2GdmtTrzjDrEY9j5LkTZzWFCenZcx6HcstUUKJQLNyNbUkVWQ1sNfj7jcaGDsDQw5KHhxt1EER4WdpAKNwaz6xRP",
  "key24": "5sJtYwuLDXJgPiehnTmAFY1g67ndNBwFhDUWEv8tpDgBXrnXY7Qro5ZsWpY7L1XXTH3uzbubvi7SMnpapPbmbMaS",
  "key25": "3ixHwW7Ao7Pj2sNnXJzW2daXwbgcCYdEZpy3Qh5LJgxYWMkK23SNFgjPeXqKHmQ8xrNyxtZ6Kkg2B9Dt9Fz4HoQW",
  "key26": "4Du7HZcTmVQSvQfD8QeXmpaiLnkjNdcHautmZzg15Qs1DoKAVpm9Ds4qJKDKRHfMwdndhrPh42hub4mAhB3fu6Do",
  "key27": "3DddYGJbjtqjV4QKVmintxCqynomTqouNNC74vyxgdboegzjwDg8CZ9zw6DYTLZftfpcBHnMHBNuaNAF5Z46SbF7",
  "key28": "5AucY4e78NuWzf9f9r2mNmogXvvdPrG82vUCqcNE94rNaLrZ64xmM61hTVNdmKhXBKfpF467EFe1SaLow3sT2wmx",
  "key29": "RyYFRvjViEbziV6b3VhnSZ7WKgNcFpe49KsCGH7MRMctUwHh1YBJCsZ8b13PhVAHnmdb3Mf5uggRjimsBSFUxTz",
  "key30": "2J4cVpmccQFAby5WdFA4FqXhTTxMjQNy6fPACWNHS8sKJZDKvzd46D1R32ib8Y3X1PfJBa9vEjVobSuRCQkNvDA6",
  "key31": "5PFPkwpTPBzdnrZYZXpg4W3D7mUe84993di4E16bfvy1NzJqctGsi5N5j35Yfz7x9pzQk7Xz6tZPa4B5Y46dq62U",
  "key32": "3Etei3gGps4snFoh4kSfoxBxJEbqPoxSaZme51toA92RK2kYe9BnNPbydeP1AMxvyL5iCxKwZLYHoMzEbhNKDgcp",
  "key33": "21ra5gvRMH5sPEKMvsU8c3UHWyU2W8ZLCaC1aFDqTkyfDfWva7RP6KwqJD4W6VQx2xnGYfmzsK1qdS8qK7Z2rLJg",
  "key34": "24JUZ8xLthhqhcWVfAmKDyjNczNtmkFFE2Vqjf9FGLt5TZqvvcMkde1EWGuKZ96GSeQjSyAeyVpRa8C9vtLcygCc",
  "key35": "41DacLGzbQm1iAQEVXMmvsSknSWhgMLKjyyoVV2vnmhsXvKkFA3HaBfT7n2ruxBWqZeWHvVxpRcX4NjWEn5V7j4X",
  "key36": "3MdaqhbLNeX7YRXHeTerSiqdc5hMSn8quZJfrVBWRtVc6dL5Yg8QLaQpMEaEnByidE3jEbmwsQhpc4PvMWhSYKct",
  "key37": "564hYVNP9PrkF1u2H3gNckrU5cLttdUzAvYgWUToU1bLtrVkToqw9HGtvrmZbHHpwSk9mXkc482XtP3Tpxukq8wS",
  "key38": "3j3xP5T2TszKKz95DuzAYVwwyvhj6bnUhb5yX7GQGVEfj44MWLFhW5fpDhM1oQPpBrhwroH6rDSQbq3Zmte136ER",
  "key39": "4ZUMpfEXzf2p8pHNt7unnVizKBRKfMgrCSWkww2NwAAtFJBZKp1jJ8YGhxqhj5YCHuYtfvmMRBd4uWEbUCVrjEg6",
  "key40": "5GmzXEhkSuxegw59hpEsJFxNaYoTTxJpF9CbyWEFPWVNJ9F5J9jgW5pdD985he51wP8rGGnUYha7RnCDKq6rFhdF"
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
