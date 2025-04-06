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
    "aJQ8PvJbRHKLQwFW9KYKjyJtJrWg38TCgr8M8YVHehsMwPCadGUwehcNwj9Bvv2JKkYVQeybax7T5Uab8z9qTTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "657khGEabPjHeiJk5THJgfZyLTFgpj1LR7cGW4PUFY9Hoagea3FFEyLEuNGanrHQLZYSVeBneszvpVBwpoi7FxZ",
  "key1": "zm28GUiZ3X18fTbp5oGRvfxZVMnZCYPKDV9NZPSoYbZZ2Jd2vQ8xpEjWUZYdZ75hcdRY1oUrFJM5dAW4bjMV1iy",
  "key2": "37tyMz9k5h1UaTLfvqs81ZxUQA5AqLsY34Zmp1kPePCsWp3PYnnjUZt2iC6kcdMBpQzB3B5eaK9sbR9R35ij8uVC",
  "key3": "2hQfo1S8G2Z36J8f4aXz5h6XQsqDw8aonRepmot5h1rQGwrsdRheMw6HBYTv6UvweuvsZQGdJiDdwqNj6X55CHLj",
  "key4": "2ikQowH7yxaWQbgamAsnKFFS7SWH4Uar4Vm58t5R384aaxRuHSHbm4ahfhgQpDwjWC9J4Vin8uFqQ8H5TroCkYHr",
  "key5": "46HsTRCAt3tD9ocSwjgWtghCReqUddFRaeoYgVAPBWeymbQ57kXsPHr8yejZGCyNCujYiUhBCGVBKT539oCpJiZA",
  "key6": "3hFizXpJX98darbrBoDqpe4UUoigNi6CLeNrn8yhrAiGviSCx7HCWarkZssDXLBjvgZe2D3hZaqNxtTHy9FxXcHn",
  "key7": "mNcHWqg3AguJxj3sjEUBGzR8gRnRydKAVxDSzSDoyDq4eqdEKW6848otCreU5mVYBijoj7wMpywgf5Row6iC7Df",
  "key8": "4fWhe8EQRH1gwATdCho3yXiBfeVbMHWkGrKpBpiZ3ksy4YZbodNE719x4kgrSM6AQubfwtnr75zR7Epe3uahuGEx",
  "key9": "2kmBQZNFrzLm8hcc4zZiJXshCh2fUKaorszARAmdA24LpzqwFGXU82SDkd2CGUuJMJ9F8485ZYSN1WqiBpKenNkb",
  "key10": "G1FSbtz9A9Pu6jZPxmeCrZoURv3u9LwUSc19QRMrz7jhVfRucYstoiqvvtbJxsPfJGNEvaF27LN1hqZVad9ggxg",
  "key11": "2ATD1G5jzij3JhMKwiC2ebcio2irJh7o23iABSWKMWJaErCtKauDtayVkfPNYtuLL45oJro8vN3LLUMBXi2KV5Mm",
  "key12": "5YPywpfTmKqzpsBgkd2V1yXWj7zJxYiWrG1V9ZyTHPgJs3ivPo1c6GsVdXE8Xg6ZFsxYDnH8LLkpN3VUHc7rYxZD",
  "key13": "2rYqAuWpD5MBAu2AdFMP8MAsAkPH1V2SYRgDHX8oofEhAZa1n2T3vxCLiHMxaig2uDuZinnK2HmAEZqbUE3refJ6",
  "key14": "2Mn3CHPUTkebsaT8KHu39zCTRoqEMzeqUqEuWghjnz6cAc1s7XCE74HbxeoRvQpefzE1Kz5V8v4VtgdxhiGVMAi9",
  "key15": "UPtx5Sm7UzmALKdQ2t3fpMq6JppBaYKUZnbmo85tuc7nsoeMbe2NmEF3ar2rX3b3o2N7XXHm6KRB8TuZEU3AGCA",
  "key16": "4iZLYbNBTJ9ZG6BZmBn2WY3oFeyYYo2ZX9zqEFAXoym9pqZtzbLyNPaFXiE1t79uoHodX8rpFqq8W9ACMpy9T5pj",
  "key17": "3E56mJyiB4115vSgF4NfPtXbQ1zVgE9egY8uRWo3ocA7se74CogfVhJ6HSnHqswSQjaG7WDAC9hJmXJrwiGmnXEp",
  "key18": "4AezdLZ2iVZzYeWK8aMP5zcRKXoKTdGpdfJPRbQNj88rYiEd864rCzKRMURxEvAX78Ny3hvQKDm2tZHnqscKhKU1",
  "key19": "3F5jVCyBqPvc88mNdNUrx8KcHTwrKZuXoJy6zrZZPAzRmezxVN7mju6kQfgLjaXPReyoj1zbtxTBdyGa91pTwok5",
  "key20": "5eUz4yeLeBeDomEDiUGXvzHfxcWroggVGdGNsKv1zWdGHvs6RVAuQGjX29zJ8QbQ9ANJ3uMGA76rojPoRfnobsbb",
  "key21": "5xcycxD6ifkN6a7yNjdzBKPEryrewMambojeCdZ42244pJxg1nbgXpPP2fVX2HTQBKbsSxX8CGSd7pNTYeHzTxUw",
  "key22": "3eRwBtwqLLVzXyxd3dKy6wZVpxAC2aZeqTNdtMcUxqB5etiD3nQ379rW5ckZ1qZdCTpmGoLruRUgW8fw6USEUKWv",
  "key23": "5yR8SH1mBaf5eA4togXPi8o9BohTXZgJTEULit2EnPr5T1eu27SCKKWrvGGFxdL8JhJZe7TPujoDiPHHp1LJWzi9",
  "key24": "3h6Rws5yrVyEMZRcXHGdPGDEk8J7mfCCUgtVzr94THo6g2LdmQX13WeXdamWgGUaaBcCeHEdFyL2NV9ER5Ceavdi",
  "key25": "5iYiX8uHpxPMDiiwhkWk9xHEirjg937xWHT97q6ac6cvjmB1yCtCeNMDRECG2K6ohXLNSXvJvMY9eAySN3SCatLw",
  "key26": "54ePH3kak6yvsn7hmTHbKJknBekFYzXRLNYUR5QTHX2jgnwZuqTCQqh6LxQdULVQQgbKUG8yWEkW3DXHC4o42NrL",
  "key27": "BAaXuvE8A52DqUE9VCoc9ygaCirTsDsQQQfp9oN4YT3GHVSN5o8fUGpxsRQG7HPbhKyvpfWyWAqcGS9LzqVoXnx",
  "key28": "2jiffBJSx4NDqyAqA4Ag17m5XPKg4XcqKeUAsG8KaPg6phaGiC71fN3zzYZA9YgmYW12n2PQsY9GTw2XQETu48Au",
  "key29": "4jJzJwjHc1CU16UpWfbaSibBE9nVP5C79Nsj7ZMDqb3YdyLNCAbLaTJHCYb8fqfaxbt728C5HFRovYuQSfF8XvjC",
  "key30": "muncTuoSpau3FnNVjkwqmcaKMwNHavT6wZKUBVVh9RnN9AfUdeuf31d5WbS6MKA9hwVoYpMbC8przthpRwC6jDu",
  "key31": "4ibs4sdWvpkQL9bKZ6dYJFnnuCGD12HAKEcDSaKbd5g5or84ruthWR5GEdV3HQFy5CKWNobeAXPq8XJoyoxnbVMn",
  "key32": "3RDkR4jk88FQSJjmT1Jp6bLRAgapjukLrg86Vs9YYJWrGuoo1PHCcK7uUhNKe89jNVTVxNs2QrJEFh68s5E3SqbH",
  "key33": "PphELAQCGicpQhRtucNfBSTaaX27nLJ3mNpN6YUAuTtj5AuWobLyXA6VTs3JPZhVxoME2TXA6Cum9t7o6qDQFW7",
  "key34": "61eGxYEg6jNb1VLr1UbVmYPGJJknMopU9wsrCGnHRXqrcRZ7ucso7sXFVaLsah7qhtXDdoNcj1ZBqBWpK9k9eZnv",
  "key35": "61jxoeSx9FWMR6MhJJnzmvrh81Z4G1u6n5tEQUichjeut1PK7oJHVyTihEB46GzrYJeKpKumKDhHZBxnxh4ikSWJ",
  "key36": "654rDvejo1mYbe8u9aCpckzH3Knf9zs6EhWNHBKXiYpDnosNr1wn1ydXcqozaeFV4XhUMsw5zEaqRJNWKUhoJbvZ",
  "key37": "3NE293BLpSksye9ky59hyrU9vd9vdUkr39LeT3HyMfib7Xgszbb6SaxNgC4kyjfEngB3bChxZU2EYkrjTpCGouQo",
  "key38": "N7gZG5gxZfsmU97S3VxfmY9KxvySJVmXuiKj3W5Gf2YePaPEdzhHxddh2Le4rKNyUgenvcRv9wf14SY3f1yRz8D",
  "key39": "3Bw1jaKDH9yu2ZCmHEp8UpxVPHPFBVErgGLevZQX9HH6g1ShtpBcrFkcjCeK42JF4wYDDc3PutQMxjXGi9c4zyHz",
  "key40": "5k3rLcc7ZD7gvfAy4eAx49V6MR9U2TmtmzeorSVBkQxEDxew2CeWPKskgWTAtEkYp4Wpcpj4A3BTRu2zEeRX3Umi",
  "key41": "45j25YJ3AdYVdjr1yhmxxDTTQsYFZY415zFqpA5kYVuDCjhLWGgcc2TCziRrGkzucpFWEyA8EBnYHDdog6vSLxHb",
  "key42": "3Z2ZY12299RSqbeCXvfdprq8oEXoQuQKmycE6KHtfUU91U1YbZDLNveH9Pyzui5zLQGKeLG6cShVaEF6LPMHTBzj",
  "key43": "cDsyBshDfXwmByKhhNtfeuvfKfiivRppwnHk9aGMWSGPW5hv9CnvWp6XeDcNq17sErwW2y8jB248E94hNHhsQKc",
  "key44": "5sLc5jJthejzbvT77pLgSuLB4SYA9tpiaEetEKdTtXRGjkgS2zYjRvAZm6X6K8YT6csczt7TSP259Q89MiUzV3bK",
  "key45": "3ufb1vgfhVksxYbmSsdRgURQKkNVKtrtH1Yvq1qzZwEyqMbPeHFtd5EbYQYpHJuVGXAUNMv52Th6mjYcZZJKMFHd",
  "key46": "38ce8GwGj3KxFKn9JW21MBpfJ5Vw4G9XEEz43WkJyRP6YaHGsKfitR8FbW4jC4TvYP5PFmsbQqDtHrTsFW5tKVid",
  "key47": "3xKCXEUabLEfxRzpbtTnvuSZMNaBNaD5MQwgtLBEGu4EAr3VD6hVfGJQWLAon4zPh4W3wkvSmFw9UQcHYkgdZ5s4"
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
