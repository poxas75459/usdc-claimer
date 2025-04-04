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
    "bwg6wJDza16YadQjXHutkyEYkgfqGhFXQVZzY8P7SVBvVtjCPzrrfcC85iRRnMNgG4EHB5qFEGP4F1ig4TVdoY6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GYvJAtRL2ZB8f2UsezhLXLw5XVZpQmWexMNiE7wMHeSfEAuGL1Fyg4x4wcx8tS4sCBxwoBH9szzGns9UrqmYGtS",
  "key1": "4gcD2sKxwm3iBLMjJrjDg5bXdcqRBHNZGwUqBFmLB9W9MrVvGfkAFpsXTaZNFAbAKauv5V1JWRMNwbCzYTNiuejK",
  "key2": "LgyknUhXaFNnRdoJ9shkL1a7adeWtCcWi74N3Mkp5YuERFm2HZPNReSqSBMv37udNTc8qBrnYBbBcFXXSh4WeK8",
  "key3": "4B192xrLAPWG1bF7AzChkcvQRUhtnmiJPnwaFx9sLAknjc2RSnjfGgn2hT2SVCDezJgYC56ztw5LFcu5HqoX68TG",
  "key4": "2kkZdY11EGe3uP6WtoWrDAArLB7jmbhKsmHKJP3vW6xVkrzWXC7sza3m6n1xqAHfrBeUrDYvMudzt8tfzNx227Ff",
  "key5": "59QZZkcWY5xN4k3iL64ZmMi1Wjbr7MiVoAuqu97SHuYnvo1wfBhr47QZR567apogHHfyJFjqjSP2RekXKfYrjHBD",
  "key6": "359yVMdSG3Uces2AKP4SM4Qi6Ys6kxdJqK9fN1G6A5axu5KZseYDx7u2XFSKtEhcbBnF8oSTLvSgZS83CsSncSZv",
  "key7": "348xJDduuGGw5K62HjdqfZvckX7ZU5vanujBzGKxghK4JiNXVnWNK99CaSyetMwiJKtbCnAG652jcx728MZi8drH",
  "key8": "5dKvpfWBg8HRo5wbV1y3oaW4Bn9wZS6bgJD6C3QPByPU8JkUCAkBDJTDSnu58YEmUZqVNbC9wkLnAidudrwpSaST",
  "key9": "5ygYcdDvMvT7atn2VjwvY8N84X9iUvgcJDb7A23WcKkUsoPVFvr1TTsY1DrkUnMBP9kYY7PNCutBFZEbU6aDHksV",
  "key10": "43JScfs4Q1A8x9iE2pFr6ECCkSWS5zfSbTNEXJt6Acjimz6aMBN7jLBLBsVmTLANnhKAdnRLgfwj4K9cLAAeMEt7",
  "key11": "Pj4vvsi26sdmoAbBf97hErxHLDnYuLgXadqLhRG59hBgTfqmbMfPgint5K8iJiwYoivt7k45AZ7fW9e1FGuPHuD",
  "key12": "2Pq8qgZuk6XX3v1jjqx1GdGiaB74Tt7pdmuqrgLC64CaQd3RGtP9L5wpmXgxnbuvbiPYyrds9nNkiJJ2DBWZtBVk",
  "key13": "34famCimZ3jZcW5Xf2TjS8J1rkPFtFAvg3MEjXSLcKq3nHuzSYJ54b4CejzbDmDTosGvizVGPbfJPyq8mRDZSyeC",
  "key14": "2P54nHfhV3U9Q9wE5MLRFv2QijCV9Xny12k7j2K1hkdJ3Jsn9HKbu72UPVJP1RES6KJ5BeCxy9B87qUcMHMkQkRb",
  "key15": "3u3Q8XfiFXgdcVhgEo5tiHyQ95w6MiTXkJD4s8xpT9jcvZ4umNcYcMRWNyWCBh14FWpd8LpSmH2tBuMeu7EZgQpM",
  "key16": "5abSEnoWqMtZyTTH2BdLLQcPEwaNiqWmjrz7L9t6ApSRq2xUKrHPT67U5QS7NAsqhYpPfiDUippHFboA4zeNrGKE",
  "key17": "3pxhabFFD6gSsVmGvhbCXiDEroPQ9Std2krFsKrGmKEDQNzVM3GKPbP3nBXfZF6hi9PtCiAVQfTdtMNp26ECyuyK",
  "key18": "5r2nRboXtfPpPuKfQe99jVQdsePSaBGwKSjfM2XXrxB82ZPoov88rGqE79ZvdQ8iMg4crN84ZMZL5Jvn8TPcnD1T",
  "key19": "5gVmHbhiVqUToBJkVCqQsttXrYvFb7MseTewRtjskNTzDgVqFmks16AVxGUxN3hwdfyYpQCT3p1DGvMD1KG8hZkN",
  "key20": "3N4AL6edtaRiN1oHqTzqNzBa1Au6iYTwHPk3EWJoGThuKYqzsKzZVDtDMHySgpBENu2tcwx24pA3dpHTAUU8MAaQ",
  "key21": "44JLmXaW6zPataSx2hBB6bf7Ltq9PjvfsVPxLyKYve2yysNDE17iSKhfUqVREBr6LCYDCukcRDwR2j8C8xbWT4pL",
  "key22": "5PpgqKXVtJRRGzySmDt1ZAUqnauggmf8B6qNyQKeueZ2VnSRLtDRBJCMARkJwb6smRqM8r5Qqkh2k5Zr3gvkuEDL",
  "key23": "3jnfRpHJxr4g8DrDy5PyfiQzmJSmn7soKtdVc6Qmd1jC4QPkh3wPExB5QfZ76TzMgo6ENZY6yTfSHCZTxX5Kxvv8",
  "key24": "5nAcJWqVvF2PNcPCa18kxbRYdnjvy3nSHDqESnwP8UsEAxSuMvdcRTuGq8rrvZSteNPaCWP7UDaUPgYxkRQpja15",
  "key25": "3yVJVnpxheddeNs7fK5RaCZAzas8XQ1AqEDSDf15FkMTUwgqi5i1D8JbZo2FjBhpcYYD5n8jizuhPNfArTkMtiCi",
  "key26": "35jwLumJRkenBfcj51BQyC1Pr4YqmZkozgsZ29hHwSmWcfSEEQAXYKxNxseb6QNt64STrJ9XDfax1LYhidj4J9hB",
  "key27": "5eZmH8e5bYDuhm6EEC5ZehzDj7pfBGEjKz51KTAwXAafcxz2Lty3D73ZwcWkqDwAJcBoC469zGCpiWBnRSbtmphC",
  "key28": "61RJ3PXXuFwiPQspQCNXaXg3Dq7PRuf5cZhCA2Tuatd7HUQ31kvGKiqKfnoyyhstRvNtwuJ9re3gJsnogykGSGd",
  "key29": "42AAtzWTCxx5vNjMDXKCS7eVgvoQXEYzUXRmLJ8PynVnCNSboxcWURNBD2F1xjngGhRFwPfWDCiL3n7fCDHewSzJ",
  "key30": "3LvnycRbBHWew7d3XGWVW1UHjag4tJofriJjJnmaZ8stkQDpspmumdiKxo5RCG8UxMTG3SUguAnAWtLEnyieKKxP",
  "key31": "2oa6Zu49tXuBtKfyK6c2tTyQA3AaLYqC7whtyrBLDCA2VzRQevZRfbvX7JVergjNHDZKka6hC6LKkdMVz7YHxCU7",
  "key32": "3LzgJNsdMreTwzwWfLxbHmSxjDfmzLGdNnsWGDLCViEhmktXK4sN8sPioDRgph3BFusRBKEnhq49qeZGXaYBgvcZ",
  "key33": "KUJSu1oho2E8TBVqbKW1JEar2ENtNLPEk3xPXCR8oTGwU2iJeMHNkLXY6dggFfKKH3zZJKR6PrJDafSCbK4Fy3K",
  "key34": "4ZwyY8B75s29HJSKm6NpxG66MWHrG3aPEcSJ5Kz8S5PbH6jbcoMUAoXLXXtRxcAXTLoULkKEWpfza5XHChmYnqDo",
  "key35": "4uE6NCNGw9R9F9oGDvvpomAisurhNfW6eEhWQw2Grz2V7r5rdPLwwgkK8WN532MjY4dgodaJVN9XvBmmKZ1Zbg9v",
  "key36": "4kFKKaKFD8Gb6VkV5uuZL8fnqA5sSJ87u1Uboag4vKSdKUNsucnMpoJP4oyeyEVZ8xxDWQbtrXfY1YH95k63BCed",
  "key37": "2FyDbEdN51C575zA9ufm7UFYnH84kdCguj6d6YZok1t2gG5kVD2P3UbGCgDxwYWdHf92Qs2wJieaQfY5E3MKJ1e3",
  "key38": "4TcdE3UvuZnnFb972sjFEAWjhytoZSr7jkrRRMmoztfwX9WfNGtL5P3PwKE3EbTEmPhXEqAJ5LXZvWa18HF1TDNp",
  "key39": "2Yx6yNCbCfnt3AUfqsKYAX7z8dMNip37QbhTyappwKLkeM7PHZF8Gx3yN3fQDQmyFPG1Re4SxTyM46BEXDtgC1tp",
  "key40": "5ZpC6AFVEBdDgUMEHzf2qH72syRW4vWDQDVRPtLGPFj63Auq98NPKhf8Rd53gBi6bfrizP43tBjoHSRzLivPSuNB",
  "key41": "4q8LuiDy2qMofhf7vHELhn9JonA65DuYR7Mtb5LuXyAp1w53sU66k5Gw3rKFB3P835YkuP4m5NnqJCHiV3tV38Q5",
  "key42": "29aqVFNw5jPocgdpVPdALcnUy8phQBpZg8ZuiPUVzvmTZH4xM8JV5QvkxRm5dc7PULATaYqQiNoCeGLSc5ZN9b9B"
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
