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
    "3n35uPiN8iNpF2ewj1pYcZAU1rYQ79ZnnR5JCUvk9uKQ54rzjUw9DxMkzusPraMSirnRRTPiLHAUycEFzt2hvMgT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fYcafoNzPr2v2yBF6J9VHRBzE61Mgdb19K1xWcQ2hNiLjSUGpsRLKe1ggY9cEVZmHW4zqMWwRqM8t4QFpAF7Ysn",
  "key1": "3rdhJ6nUUCBmq3SNrZc6QKG1bGbmtdEVxA1mT26PMjZbTx9sRvpgUafcQqcrcRnSUtLWX8UYBjBVwPJbz7BZXwHs",
  "key2": "3LcRAVwsxEcfny5d9pAhE6hfFGLkNHeLpKCD37sKGMUTToGicFBgsJLdedfV9sC361rxhWkDsSh7zubTnDSjHxbb",
  "key3": "3m4L8nSYruGnJAg6CQnjamjArtCrNXGPKPbo2MrgKsBrjirdm9CPf7ahQiM8ECTEyPZVo2bph8194CcVMRMhgECp",
  "key4": "5A8PhYB7YsMUtyr851xARQrTZq6XCmZe3KNsoE4rkpjBskyw3rrCoHWJn24znSwuLNYpYkLM2LL1UGDkE6piXUxU",
  "key5": "4wdpbqyZ42xxPadTXfhEVGZv7MRbkgKR2KLF2mShvxTfuyJvKXJn3YbDstkRoJpc3Wq1MghAqn5qoFEj8HPThWrA",
  "key6": "4a1LiyiHqk7Lq7RY9X3LqHQgZe6ZLfZX37QcuQKRkHV64Nk7SyHH7aBwXxFcH93BJeh52XuW8A5DWA54B4QcT5LH",
  "key7": "3YM7hqXvJYpT1stft9MqZYZn47YfLrVJYcLtSBBzzkygqMKRmnhHE6pVL5a4tGFo2cpw9XAgHbGEvZX415WxN6di",
  "key8": "bHaJk8XZWuar4mYo2FzL8GiP8rZe3E1UU8iPRLQEmEYVercMgqXsi7qDcnUpBhXdrcaxYtK6QbMr6D5YVPU7Uz1",
  "key9": "ARAPgVbfd1reZ2VLqqvz8MVhmJibH6ZiYm8VrtDRZK2GBBhcwVzPSRdGS56VfPUpHj62rv63RjfL5We7U3gkxX5",
  "key10": "4W6YtaRGT5ZotEHhNQdHuA8mCe5i99ARPFXZSm2WxaTMciSh2P9ntUWbfq7EvHPcxdPoDLN2MwYBixqeTABfZ72S",
  "key11": "3tMZ3jNWw4oAtmyvqVAEMBzB5qmYwuwQpH5QjPhquvg1j9UZbiR6DxVvxtr1qmi8J2rxRKWnJWnnstcCGba5ojwT",
  "key12": "ZuZ9gPhQgWgCURqkDiaNBSaVZmWfwzVM2x9civxGMG1YgiFshMZWE6qMfX5WbLa2K12BiWpaPHLihBoHh2c3J9H",
  "key13": "5saAfFPGQwDSA8Zh1uv3bsAnQgDx3hRwQQXwMzR1uXPfctviSZMeAC72MV3a33ojYgh1e2rx75a6p4sj6JT9n3uC",
  "key14": "H7YtmzLfLAVULYNHdcjJsNQCaBh3da1DdguXrSHwwzTjxtMGKtzvWCPHQcpfeXzsSG1BbwJDLv4V6DFPEi63bM5",
  "key15": "ty5pTyoj6GxeCZ3Gmsr1v173E997rRULqdWBAy1zE2sd8eaa9m3FqphHbJFGLHzpervzttm8vMdq5S9DAKcM2Ss",
  "key16": "5n7MohftMPoiYDyyQBwm8erR51DQYwvcCowQTN1ekFnwz4YDs3roMr8VGDTPC1EkWcdUA5nx9piekpve36dfoetK",
  "key17": "4xZDNq4HBTmdWAHq8DLzzCcgxerii5ZA4K9oc1c32DfSgTXVcBfYqXQ9zjCsk7m7zowctzKABhGUyXmzp7pvqb4L",
  "key18": "57zFF3VZeWoaUgJNFH12HHnuDKP747LQvziBGhSCPPTZZ6sV4GX6sLdxszQ4166QhsJ9usWiJ1MLuSRRbvP3KriW",
  "key19": "LbiDvRQuSt9KqsRBYJ5uiRtLeNnZspyp2T1waxE1RDydMKE9eJtz2d7j2eXsyWQRUMjhYUCn4rt5EV7RkWzWY1v",
  "key20": "39MF3qBuGdgBqc2QztjRUCgoJcdHEjsVoV4ibiG8QRQLHAjZ4gzsFXCox4mFcwcXGvCcJDLrvuwPeXWimwGG9wtd",
  "key21": "54o9BMHz1R2aBiEQSLtx5TVaYGK9EhVNN13kWWpTYKa9hcTbJbsRwVv6G9AV2PvS7Sy3kbri9S5wPjHVHPUAzf3R",
  "key22": "3jBsYzxSKL186baESjRFTpGMoUAHYWx7aThtaYAAeLMksNVKoRKFPKHYA8XUBJ9cVSEeHaQSN6iwGQ6TxHsHguN9",
  "key23": "4eJHqAWnHXwhjzaxRuTkgDfYEFnXpTKwdDxdhj2BSF8qx1MLkyiMAjpJgrgLZUU51ZEGnUAZNWQcUyY1trEdUAXi",
  "key24": "5yAWBWigmMmQX1QKw8xxTjRZGmxpETCf8J4KcWY8Q1fBxxdj4dRi6VZsMEcysm9Acn2gF7qvaVXUxDJLPsFqEkNs",
  "key25": "4CenhvCdGQK3ApDyM2KdMofifKauXcsvYJ2x5TWS7dVUoVzHAJHedBfQnm26F68ggFNvn7UQQK4wDwXi68xbm6w6",
  "key26": "4T9YrjJDRhySTUyjYTQYXqcmj8SoVhesYjDfkTx39gmtjjpYRU9LD34XMXw3Yt7ktEjpbausCN9gTMWQc669DWkb",
  "key27": "4onyFDZ8ovofWJ5hqNK1Bi2rxMvYVJQUtn7RyeAugYBUHwi1NDXzY8RotMdNs453yC1j7sJa7yTnxd65EtCS5KPR",
  "key28": "5G1VcgyTJNLgwnRCcCT8DbkgUGBdY6YabhpnHpCFQeBrXj4vgztSjFeouDDAaUXoW6NHR6hu44vr3QmfGKA8wVRr",
  "key29": "5MA9AU3xqXbh8ijufaGTtemPDz8MbX8QQPhRb2Ufpa8RT7WTthyF1w7gB8WNMhAmBKaqbnagaYTTnTVUeW4qceEV",
  "key30": "5sY5TJzr6Go8JSr3izbAdvgkfDeDaT4q6CeXQHsvxJGAxuXZMXUgTztYyhTi5ex3hkbdyvWw9Xn5u4jSHE1KCYCD",
  "key31": "5sxijjrJH4VbUrwK5sNWteHH6DCAvK6udR3s2wfDZRWZzGZ3NYHXECpdFqhZ5ofJ8sTabEnqJoRJebCnYxwtA31Q",
  "key32": "q1wVoYcZCefJPupJ8r2ircBfH2o13sXVWBVKao3qg2SW9AK1BfXso2uPHDY7Ypjdb9xwZnMqomRk1GoXetsEoRU",
  "key33": "5Qg7PxPPMW3rZPZYU1oYS7oTw3B71yupY8oUuQ8Et7bqomZAaE1EsUAgGUNQ9BrfyTqDwHG7gJL49wuQdZ3QcG9g",
  "key34": "2dTKaQU9iV7dws7K2L2RYWPdfhWZJrUQUDaLWU9D1EHSi6pYETaw35w5tJiNGdtwxMSQotj6jMFt7R7mmrBbASzt",
  "key35": "SgyhekQ8xy7ERkYCbWkJtFMgkaZLjdon2zzgrFoC6X3CQzmzznNgdgx1ue3dzyrSU8RharVgNQSiuPF9F1WnthB",
  "key36": "3wCoLgyLPxdmMRXUn1BZTix1mERc2haNkQKv2BfLXBczngBC5Z5UfMvSnW3M1JeWyjmEN2j9YXkjJSMm7CiKjC18",
  "key37": "2Nat14jUAhsAP6VJgU1qscGpM8BALFsnqjYcJozoBzZfqNqqzcuS9GbisxBbXSVvD69KuJQ1pyrazHfRHYcKs6LR",
  "key38": "4QTMr1Fzrge262qYrLXqhXnCpaFmm8dMxq4ZrTgZmL7h6R6Ucd3ErsKgVD6nPmPSWQzASsryiMaRFJ7hLJY5R3iP",
  "key39": "UZko7oJDpZ4tzQWoZL2DEDe56fEHGN6692HycoyLt7bkAuoRSkr8STukfP7JqGxYeaowiVRYUpiFjcaJpuD45Ty",
  "key40": "54zcy3KTVBb9zFm2Y5AdL8vE3mmuD414zaYF5aU8RGZ3bKtPwJwCQPNoMRTDhGqM9HpKzRqb3vyfGu9gvm4wb8FQ",
  "key41": "5SEVxKpQCSHfnZPUomDrC7eHpbcWALyWrs8DNFQsZZpJYJePAeX1PeVLVu3a8wyTpMhLGhADXGWB3UX8hMtBZgNQ",
  "key42": "fRGfm7aMWsvEYdPYrnsw578FSLy1pve4xba5tioZLrxyJ4f9kVjY9Ay2JMLarNR5e9FFMZgfyKu5HRPmexHQX5L",
  "key43": "3p8ys1aEVU3sc5AaLbEto5iKyov7LMDokiJFDa6DtAEExwArjuxqTnEcE7gaHH8bqp27MNVgzAkdMmykUrdgWtdM",
  "key44": "2bi4XuPD6w9xcVC58Tc1ag9D6eSyC4KH12uGjKW1Diu2VxwjzX2omZXLzJ791Jws8iySNpa5yZCiDFihJ8xN9HZG",
  "key45": "2B3DWK2yqzwTFwQiTeHqEvK8pcANQdfqTVSNPw3vncZFueuf5RWoxNKsfsUBFztYXDXudSXTyngcayn1r9oZ4kwp",
  "key46": "2SPFxye1E1h1yVPs4kGfA9wQs9Y9cfXtMrFwPNn8uZECvDsYvXM8QtmVKSbZBvZeoft5N59uUD6oAH3xo8zSzUzz",
  "key47": "3FC7bvhwbn6w2Yrq68zWDyiXZzBmzWbDYppieD82szGuxjVSQXR9zg2zuRWxTxSVWh5hd1bdkuCzDXJAUcWc6JAp",
  "key48": "57SBc4dCXGfHiHGoUGnABAFSDGPoY1rJz5GU8N25MjUKLsxGBXQ9f5rDg85uNKADfQz6DC58FyWmHFvmhiXxh7qf"
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
