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
    "31MLhfZ6S3fzkDkEtKvYAH5JGKKMR2zkfhmquMFGCYtSDEPDtTHsEY5pqBQ9iwPijMWyH9rCHZrsgmpAdwpWmPCt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3riPKXG2bd6cGvwEN31amoD2U1NbNPiCyUupFVcaD4dKjDeXMcKXaWtFcPgeZTxr6NbtjKDEj2oJkGPADVETGV9C",
  "key1": "qG8wrNcgktvQnPkTMdCMcNtMmP6A3bZ2UuVEzdbtDBTvyT882q3TYnzc5XhjoY8kASUAYe9YWvhH1bowumJjiZy",
  "key2": "4wmZrCNdJhD6djtuhtjXtx5uDKa6LgjCYXbmicnvFYNnhNgu2PrvdiwoPAcVNQYsjVyYGFbpL2sfneBxUaoY5sTX",
  "key3": "2xJGNCihkdzBEjGiRh8xEvfEY3Hstqznuam3WyBKLN9WKfWjhfS5kzRXWtXthurSsAJU89kJyDPPFMhhdbdKCFsR",
  "key4": "4hwaNwcK5E1Xb5dn2MFCDHjuFYgsBbQxQY9sDN2BQarM6JUZGgjQahZPnAcnXwLRW2NW8NcLCZmSzBgR4QYSdLXw",
  "key5": "4bTvpSr9H11tkBaZoKghm2mxC1jhLe7hL3LkvxiMXEQBfrp9ch6k8gQLwboek1LdMsx7L6WXdxtQ82RAxwKYrFt3",
  "key6": "2dDJCgf64rSjCEfqf7nMk3e3dn8Uc6aNC2GHtSPrB9jABQf1uoFeeFt2kjfxTYSxJqXmhxYDUxFQK2uE6r7pd925",
  "key7": "2pvWs1dJRUuot4ATx472TQCL62KwiqhaUHqza7sPVA4EtBqDbfKiPUdCagXUux3a3QsTMsZu4dkqZfqGYgcTURvY",
  "key8": "489RYtM9AevkGquoE3VcCHFusrWxqrDMT4Xe1SrUWWKUaZt2QokzdUTQH4eDD4X2553pe9qAfga4SbeQ2mwuDdNF",
  "key9": "4t8Lar4rYefcahyfJDU23gua1iM7RYniRAxAX3svDJtB9CiYa52tH6g8k3x9M6CvirGZ9g6HQ9LWNuHiWPv6GXk",
  "key10": "5jjNkM9aftkFVnKtv3EB9dpnaEXK8AqheCxPxaWnK9chejcjcTLbox8v3B7Bja6JQevkLDZADjaBc4rQYQZkJo1v",
  "key11": "2pPuV4qZXkrrXv3BzAqpqGzqExXY576Bm8pcizsXsENjvwx2rYBMdY3rN3q5c9gBbNid4srJreLVNuzMNwR9y6FQ",
  "key12": "N1vWgkc4pFs3R1ozbmB2Cbcf6u9nSeEEXdXxkUEg1v36CSe3y5sb5RTwqp89QiSG2GfRGZNFgk2ddgUdp1LH7Vz",
  "key13": "2rCS3ahkRWNsDq6Hq1UF8EcWnM2NtPQBjqAF9T1X5sHwn1ZSu7pWXXiRh2WLRL8966CtDhL5epvuyC5RqU96ryXx",
  "key14": "zbKxKot8UqxEKD5Gi8biQhre5F6ZwZJsETgpKyqXnD9y4azcNhJgkbk2vtCoABJE1e9VzCmwU8bR4Wnq65ULRof",
  "key15": "3b1yrWxwrn3vgvcK2dbJ3JeYeQm9estkJJCbUg7AN72EEzJwFYVwSyasNuKaWAGLcPVWUQ3zcfsxUD1PXD73a6r1",
  "key16": "3qCDpAoVQJzhZysCfG2a5AbmzeAYzWJFkFZaYqfYBzMgKQswjs1Xn6pT6XcXhSZ5KR688H9ryLwBi1tKc2fZFQay",
  "key17": "6YbuEyord2QC5dzPq9VvkJPGyRc72zfw26j1wn8WE2tVWpU4weiFjw2s6P2FWTYGVm6HByqoDuXk5DS48ysfn1q",
  "key18": "53rM77rqytnvxoQdU9CG8jtK8F3TdWaz3GYAzXRr7Wc9q9p9Yv6rEukm2NPKnV7TDAWXD4jpHK8jzG4kNLzm5zXo",
  "key19": "52jwzjWA6veJvEgiJ49DihUupoVL8ckMTNdGsbD5Zto1XzYyKVVZc8dJS4uDr61RqwThPVWHk6zDtNct34DAPZBt",
  "key20": "63S9yUdVCbGu9iCPN41zNcRhE1jkLyYvFpoi5SfBFS7NgenFSMvkA13bNy6eZiwLgMipG1vbxTCPS69xAk86CyXG",
  "key21": "2cFVWdDRYvwo8rVFApNmbL5GFBd45EeytHFNDiKqe1kn9kg4DCAE7JPvzGaQpXnUyMUz76st4Ta5keM4Z3q8wY9R",
  "key22": "kk8gaUkxs77q8fVVPTvnN17Y33FeKV4RFemG3QZxFzqBjgn65sn2WEPoWShsgeQsMJ47LgSQEWQMyfi2812R1SF",
  "key23": "5uiAC16EDQYn43CDgrEeLeLiZ5GE4w8AvfXaPkCoyivXd5GyZqVX1Y8L462ybBnUi3pFWET5MUbTKwKQSi9HCtjP",
  "key24": "2Q1CV49vXTaAvUjNiSHRtmkxiAZgQqiLyAKtwXT7YY9eDURmFW1KemognefMeQqRs5TDNonjW9dqAdJLQZH3xfPj",
  "key25": "3fyMcwdhvw2Hv72wfKTW6ZDngJWem4iMVVvkndACeNwgeREyWStNa2itHD2LDA1y64H5WkYgYUTPt885vmYGXNhV",
  "key26": "mm8nBYi2n8Nw3SzpZhQNxCnvXx1HZaKQHjJgLLWMBuA7DzFcR8Rt2YTM7PSgPzT4YKTTzaRi7QZ3UQS3TnpvLrF",
  "key27": "goF4neexfkfrEmxvJn5nhf5azFpNXKnRmM5Jcu7pDm1FMRFiKSqddHqeoWQj7Qk6TZnrXHmz7B1EKLjm588nEUw",
  "key28": "5cWURg55B9o9amZB2Eeg2za1UAuSDjzVNj3KvRDzN49T4xhmGochCBEz7GAcnoDRdgxDhs5zM47YS1jpP1PxqKRN",
  "key29": "3sFYA9yoQ9ePqDdVQzyTF1UbVFcZDxRqbBK7TghtUQCQp6JwXZ3CzMr31kgioF7wbzHBK6kfHQRZiMKuws5ShgYz",
  "key30": "4A48Y2LbgBAq4EK8LY8K89YqxwgYVD4VdV3DQv5G36x77iFGftCNySbjXp4vSyLduSV77zpPmfWgKY6kg8UcCVXL",
  "key31": "5YGH6Pjkg8mewwcuja8L1kU2furchpBZNJRV7ropyggj8g9A82icEZyox8em3t5K3dmki8yFw2hHhF8mPzz5ekBn",
  "key32": "4xopoxRWB44GKdudWzBre8XxWQS7FQ5J5Kjajzj8XJTX6KLqEEA3F3nps84VK9SVHmhxaDY5KSqy62TAVC8vWo1x",
  "key33": "5CwUwZs94boxF1TVbKmcqJYSXu8HAUNggVJLyPN2UH5y3LJwo4MCpMn7HUarFNYXagdVoujVNkshP558pf5CUd7Y",
  "key34": "3x9d6cDyriKWf9HaWBm6S3DaGi1W8e14c25P1wTAqDtqByxD7vkV6AEXUALhJTpUvQfMYPvqMNQ7pNttRdjRjk18",
  "key35": "5EdKRsXaYyHT2ZnhLS7ds98gue41jQC5PNNcpm4rdUwB5XfhUuFnjJUdiANYY5G2Xt1z7YmrYAvdPTnGtrt1cgnm",
  "key36": "3ZPDXq2Ce3nfDsbrc4Vc3PvR2J8vNnxdEEMXb5S8FiV79VWSngdMtpSN8vfXG5uT31rcRQ1NRXoA99ZKPHrn5aMZ",
  "key37": "27r8Gpe3MhJYPkpWCy4k92x6A9r9HMn1TaeeEz5Zqod8jsJdJmbjK8rawPaVMDsZqmWn3iGz1Kn6E8QsMR2yb6mR",
  "key38": "4ovz42UZ4axwhXu5PKBnxQDQ35aTv73bKHXTrGgT6TEfdwLG6hEHnWbXTTW2LKjWwwsXwC5cFLdaN1BM26Bkxr64",
  "key39": "4K5qs3iENa2yLLDCkzPyS9Caq5vj45jGyY1s7sotc4oQ1Rv25mM9dPfEAP4jBxV4hGUcaNzow3eNnMpKuJqE5tR2",
  "key40": "8Ni4FEuApyxM5eigyF29ygM1mT5gPFywwzJh26v4YYFrdMDT7b3fR3M3thmEtigdyAZeusJcmhB2KiwrgrRp3t9",
  "key41": "3tdeyRjGugxHV6VMR5g99yBQrgxgWucDLQvezPDrH8NNpVnZQi5hJWFFRF7DsMCgvA4ZNHHRcPEA7TEtDNzR3czY",
  "key42": "3JhucJDn8Z4ecjweZmd9VvNAHFwkQaL1Pv2WYkHkGeoqjL7bv8UHujguXhgx8RsPXpnhz2nRzEx4dvGqGXKB7qB6",
  "key43": "5e9EqfDSHe8LRgMd7vytfwEzPFyM7n6xBPSPhuM8xP6iMZUDjXXQccNK8Zi3erYhMLfxQas9RqRSnkFDrZ3qcEyq",
  "key44": "569AX26Y7wuVyW9FXbtoYNa2hkURzzzRqMMsSMKRmHRzwapVwpEgAqsyGdiXVFPSGBzf5nBSVYGdLfaskP2mWDLX",
  "key45": "4by6vD6zgnSy3j9F2y4jkHfE8Co89gCYzvvsnEZsfcFtDKvKpDkKEZCteGHMHVeCBcgxN9R67TWnXxrioWUqicJY",
  "key46": "2Boz9YJeq3F4EHRi6e1ocKazNFVnNBJ3A7RYsrd8e76gLFFQrQwkPFS9kh7Ry9kNqBqqVbdqk94HMDZfh76CqFpk",
  "key47": "3nL34myijVZP5Y8g8MirUaH2h4uTkyMkLCpkxFgLVwd7c7JK7SThEVbnMC6o4PqNwfzaFi72Ak52cUfh73yZeYUW",
  "key48": "5bPZimT6Rt48NmvUasE27x7UV855DVU1DRkgHXDGkHazt1nnjfW5KhuzgHSRvwAXFsmeVhiVC9mZy7XHkgQxfDkh"
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
