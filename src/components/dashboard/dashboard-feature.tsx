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
    "MUwrhkznLJAfxv4WaWrbYttazcHYTfQYM5WFQ9S6i86dtMRjQWgxg1cxHV8HPy2rEC4NhqY6CT75UtdDtE5nfWS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SfnQeb4HWShqs7EJwLN2xdd9RSSdkGmdwP7HCCmGKoPUMjdBnDcdQU79auo4HpggEkdUAm4sMjR2sLZhkWvfpv",
  "key1": "3JDz75fPg6F3pgzkSi1L1vBm3BGzwj3DBQGnbyz9nSXoxBei7c3BB7zffw3WbziBuM9uP146JBwVXyuQjqUN1wYG",
  "key2": "3goZBeEScEZ32rtdUwJKcTUK2HSbnbZrfQ5csPNGBgGC43vR3xBTYC6WEckdE8thaeBJy7F4RPtsg3T4rq7QcbZp",
  "key3": "21C4gL8VXCGUq8eKWZrDPM3iXzsj9J7wVKWiUKZBrVHT1bsBarp7BmeQpFKuYeqsgwew6x26hnVbUHKQGWEvayph",
  "key4": "4otfPbTiLoj6Mo3tuH5DBXATcxkihXxVyDhN2yybYZSYMCv9Sw77bcGgmJt7WAzwqXjoQWQVQo91B91gYjbFfTJZ",
  "key5": "2cmgLY1WAPTgHoooqGJ5u8n1zprgFAGgFXyd8Hx1iHLJ1AyDKCoczKSMPDPfp54MMuRNdQXec7wzjb6i36KGbGe1",
  "key6": "5M26FJZ2xbJDpj41zWWQkH8ZUG7iFEmC1yjxnHQEpM49EokT6Nfi5V7zS7wptfj53oMZKzwc35bY4AymKCBzgjKh",
  "key7": "FLoEo7LwKdNj4GoZZwYkdmtENKGKNDbWFsKATMQesjxK238ruAdHKBV98PZvyGFppmCyFZiZSvf7dtgqAv4ebqf",
  "key8": "4BzGD9nz8Bo4QZWCk9YjfsNcX6uYMT1tnDiMcqFmgwkxvo53e8TM4uk5wmtaxHLm7nX25aKQgtqqpSrcA7LtdYup",
  "key9": "5XDcw9Mj4rPGHMWvrwdvxDB9ovMhtt6GEF3sxvUAGuAdZiYqbaaN32y4zfrHT6dhA5XBuVocPyVtCkbGxvrmZGMe",
  "key10": "2zXR69pDNoWt7z1YQbUCwzwwgqFWA8uomRurgCcUqwga2yceN1PxD15dwWuuoNLSUYaCZzrecxMQ1t1mbXLwmSFg",
  "key11": "2tMHDFoz4mG9nJrp4oKgNnKt1oqtHxyT1qdbH8TjRYazdZz3FAZh3s71W21eKdTScSWcgPVfkKUu3uHBcD7HnSBR",
  "key12": "3BcsiM7VTxHio1os75e7hjwoWRgyixwQSRBVKHKvmqZtG8ccAXLytac4shJzwrJZoLe3bTxf9Jqb8QRLxvspqiCj",
  "key13": "ebKD6VsiUmNNpJrpyCXHHhj3dmx8Eiytjr1qbfhCTc82KhJQcCGSBWdhqHuBCaSerB5s3mQ35EAmyMnN2xZdWfV",
  "key14": "39SW9m6SMW8hVbcqFpzHdwrdUB7waAxTMBoicqBucc2kBKaMFahQrUzUTQcmk1nWjm1n5x8f2a4Pa32Urgq6Cv7w",
  "key15": "5JwDJmigj78tzo1aMj3djYKncwJfqERopEwL6Cjm2nceA63CoKEfP7KEzEH3PJZrBSfxyTqKcVvYZsfJrQfM81ub",
  "key16": "DWSUnuxdbvaE2L4xvF6zx8iRSnfqQrQbdnHs9LSuMbmNZy36kCuWoBarKENXcFuZdpHv4zXkWTjRpmvSDw7fM5v",
  "key17": "44MuzFLYcXGs4uhsq8ckAtDBTCgYfTHcBr2she3bSGRGwMyWLPNAWE5nDjPcc2VcevZ5MMQ97JF3Nyvn4xeB11xC",
  "key18": "36A9b9JnG7MfnraKdmTqk1Lucmta5YE3e3QbtiCjGNxyZXxybbhsBKGjP3MXLkGfYQ5LRZvWu3yvCxozKJmt3xox",
  "key19": "4KxMUcqnmRi5FFnBuBtr9Yz91TSBjKBaqRwQun2NUibP1ZjgjaXnwgvCTeeZvKusAJoBkhmiJq7h5BvNW4xbS3SN",
  "key20": "5PjCVZmucmAzD5GpWpAhwB8aC9p2849iZ5miuvoC9BGH2UKQWYzX8R5EzprvzQc2NUrUzFJbs7eWTJ9mXS6EF4K8",
  "key21": "2JXPLyhNV7STMmVz9Bhy5L1mx1pFn732U1CtTvUk5yT4hPxw9NosdoTW2DhDLXjFVNKTXDZcveLG3D68BYhu5guf",
  "key22": "4tWRG5wGv9T8t9FBA5eAetMH91dqYg97NvXHJwrfDLskEz5DrqHv9AgjewDvajTVrTZP64de5krGNngzivWRnXyE",
  "key23": "2hCHyV15zRmFBfCotojszoN4wNYgzNWXkvsaAEkrL6eKvnct5YZ6SpZtZs5YgsyDE4Eb58BJKj611RddY5feG3g7",
  "key24": "qNLh8xcrMnJY4WnyGrmuSsx5498aBd8WaptnrXyTBamBMAMvBfY7D5cSCWfm1Lp4Gv5eoZ6geBW6m2dgSTVDAam",
  "key25": "2dwW35kq6iFJPpVYWm3WAFuzbECZxSPDaRnjVuJHhhuG3mormG8LScyXCZBbTvL6wQgHTH2en9sedbC7SN3KJrPd",
  "key26": "2TwKGcm3pa6ucJZbVkmLm2vp6pVqx6KeQUwCJZ4MTcCoFVdxFGEKdatBmDXiLoui9y8XZbsakuWvsEyCupZpKVy2",
  "key27": "2w2mM766nWKijPUZEsA3uguVXLRSKaaHGFuhSZB4AmzKhJS1HBmkARyfcv7gkSSV1wytAJkvuHDQEtXaFfkbYMNh",
  "key28": "43Mc82MpnnmYYY7ESfgELv18eam1nR1fqYqERALVtfJvsfjNS8SRb2JSq5edaS9qe2oZ8G3pDBxTdps9T3UTrwqE",
  "key29": "5cMdpJ24Y2wHpBuwKJ3sHezBHR9anwZ9tdGGADJuCY13uJseyNWgAi8DG5gHaYHv49cfvCqxp1vXVUjfUiywGve1",
  "key30": "4hx8Ed1HgM7226k8ToAKsNQULBuaFUPLZ6kp1fnvN56eWU6kCaGzWEtSQfcKpFHHZtf9d7wXUDnApfemUzQTaF8B"
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
