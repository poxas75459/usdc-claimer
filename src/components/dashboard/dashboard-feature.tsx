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
    "3FQKrD1dKk9VuZF4nB32eH4QRwM2n3LaBuyDhdT1Qm7F8qE2CBtwvQ4NUptBJqMowq5dZxHh8hGSVEkvbVRifMRJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62BKDBPX6iAv9uSrsR7fRRQrrAkG4XJW4A8aokh9Sahcaf8f3qQ2yt728MgcxmxdtRBF84WC5BmvfJEEBhgnYUkM",
  "key1": "3U5ssUZzPmHA9rByZjCNESSr6QCuwbR41B6hizbGMStqrKGey2id7agAjX4n6pV4rUecB1T2N1BK1TGUpvddgpk4",
  "key2": "2JafZJowrPCGXzsQ3rzMty6y81QJrDDmJNXz4E3sjEJe9sHpMjukLTED6omLKSKrJ8AWZC5SHTGEjsZPVabdC8u9",
  "key3": "61u3o76TGWEMfMJYDxC8kDTUpSbWQeTj3KtGcf9mCg2xeQX4U1927VXyGXPHT53hxxW72gDFJM4dtawVbQj7ia3s",
  "key4": "31t6nQm1JGJacxyveNSwb4c3yGEiNRnt1VwnqF7hvAJ1QsjZfyQcg8YezhRBKhHsFyo96pYBETsAzMVtFLyUN5hF",
  "key5": "2rNkMxSuXWmZyeuqz9bhGwnbJeLTM8DxU77jZVjXafHhBuhgnyTJtJQsmppabPvdBxkDP5H1UtpwVdjw7yWsCVXT",
  "key6": "X5rQ1QK25fvYtA4W775CFEctnMrhwbm36Pby537cieFyArqgKuk9ui8rRVzCAcEV5TaSsWmjfrEVXjKSkE7fTVu",
  "key7": "2rtGEaWBmymFb9xB4cDdAwEj4Q8MWCN6rSk1ea93PX2Cb3aG9A21hPNQSZzCPeHUhwNVyfcbPByB2SwxH2xXfzAZ",
  "key8": "4jPK4VKYufRCZMzbhKZGyYQ9JMCj8LMijgZavUywUaVkPRZUxa5gLtELTKWHTs3wCvPtYWcEQcgefxzchQKSsT9F",
  "key9": "5GKPsSwgRFkr3HzMhbTNo6Dz9kABJga5c7v9ecsEuDdagTbwSwH5p63fuhHv3h2uE2KNRxK8bBbFoaL37Bt7izmV",
  "key10": "5KKK6ybUZ9mQ9TWEd9iRGeLExewnZXguzbiAB4XTgTM34Xof7S99cNgVFtaKHWMETiSeHU5fJjDAfdagcHsmJCXE",
  "key11": "4hM8JWQyB4Kxrj56moKxaksufZnDyxV5NDAzmqiuwkh9bBX8cgwDVpBdeWyufwLuok4U6hb3aLjjvRuWAZ8Rwhq1",
  "key12": "3hyyonw1UkPxQNZaETw3NmxrAvYrZ811CNUgSbWLH7HPEhpQbCtanAoFEyHTDSaYSgCb36LSnNRs1WkExjdAs1oG",
  "key13": "2oBswpro7Zf7YJuvMT9cPV8R4W8oPRNuHDtD5pMCgBNHg3tz4cFhxzfsgLcDRr3fwFBwFMfEzfFj8ZCi6YtCQ8jE",
  "key14": "21VvFSN1RqZAsYfJ2D1189w6u4Eqh7KPLWDT5TszHSN5RSDZ5Bu8Tf4LNwEQGygAfMyGYQKa91fyPMyr5241sB9o",
  "key15": "2W8uknjgoVtTNisPoq55AXhGYpw8bJW8SbU3qSghdeXR7Tjr9m3j7z5TC3eBLQCNGa2prMmtabn787osUVm2idWU",
  "key16": "SvMTmrb1rD3rWfmEZywCTarS8wWxvYQEYe4Serhik844Wgtq9R8JuqEFkExc4aGGoQXZxaaPXLy4dFcbsiFhYFh",
  "key17": "567gFBKaztEiAawVFL327N9mh1cXWzAoZu3UVCyn1TNRc225HicitheeLrKyNfxWX797RHxGc742SdnXYg4UyKXL",
  "key18": "4zNHLbdgjA57KAKBLvr4XnutDUkXnEDnwasfJTpWHeMJgtjU3DXixA5JJ5EA2uy5kuY6XHMWfPd5a3EXuwacXhJn",
  "key19": "4xfggjDceSqWXdETMmzUq7Td66xQb1B27Tb2iPpyrL7CpwwTkkX8LEGsXwjNEVARznHVBzfZWHe2QytcRvzdc2cd",
  "key20": "3g1RC2rUwqrPzz8DmaCETqqriNoVeMv5GJBjnJM2owiwbR2Q7cN4zQWdkqs7dD7ZaFo1eBHDvRooJurr24Aefj2H",
  "key21": "39FmiE6dGUmk1odyd473ee45JMgeixT5sW1ChXKpyhvsb6zDgibb6fMYX21TQNSBLn3Ddtc8zb1791BQZKC7daNY",
  "key22": "4HVg1C19c4GFvq7Rqu2RucdQQsv9vEDHSaYsEDfiXUZtmt3CtCyDjEhCkxZC8hoTgRfoXEcc1jcWmjDQj5hiFRWr",
  "key23": "3qKdpWDYmMyJruoNkCMu5NJ3q6wTD39sjimiSghx92mKX9BMgEYBC2xTNPUFwCQRDuqw6boq4xdF1nNNy9QP9EqM",
  "key24": "61fBeq72dK76K65gvb97S1Jsv997bMU2sdzrjMVLNsUgNXA3ya76muG2pv8PYGPGraLE2mAAoWqeYgzkuGoM1VbP",
  "key25": "2SY5P8zVuyogSneBAzKp4NTirurPazU7xY1T9KWByCywtAR3J1c4Ms8VMMwoLKvbRUj5UwXTCnWnf7rD6tRsakR1",
  "key26": "3wjX6wcNz3ErsBcZounuJD1w52Vw9cNfWe8kt4tBdaXXQftfQ1kKpG72WsRgwokW9Sr5PJCr1ow9EujDW2UdbK3u",
  "key27": "43iqhCzeL5WEPEqx24brZtgTBPYCqDhhHQGGpFLhhw2S21gNgRuX3mnZocoCcfAYJ6MA8sYcehARY3Y4DvTrktE8",
  "key28": "32m5RkYBPEQNg4o2i2T6MpNCjzfEKiFRyiHD5HJoybiqfTorjEArzk3H4ywPqgQJbKsusvgGLGjbiNvZ54q92xL5",
  "key29": "4cpxHexTbqDoaqv8TkPKFKJQq5GQtGHMWPxN5tF7pgdq71ZGLNZZWP49tWhLGk2WLBPoh8WUncwe8wVAnrqmQHs6",
  "key30": "55fmi4RvENkZmJZ8GumUMHrhuhLYgva2sJ161HVttgAeGoZi3YYWwyMCh25PAb9eDZrMexe7LcbXaNxaJKBjEZGW",
  "key31": "diTkSBBaHSDHHhaqQbtsnsaQfgWQosDTcbrb1m6VtJyf4yLxFzqgedgxgxeuVTj9rvpQxCvNcUoDUzETK3rCgDa",
  "key32": "2M7CCdVpPCwdTt1eGjMzaJFhSm4x7G6bTpPJcWLPJ5mAp59LVhFbXf6aQ5sipued28CWrvh8L9GB3c1esAqg61cL",
  "key33": "5cKmtCn8qgGQth8BC1xtsN3sZAqNrL23gsH6y9FxvjS89cHqymsxpcaSK2t6iq92FVQdCePVRXubLCyy2f2yL78h",
  "key34": "661Yo24kHQWi1qbrTfeXKMSWXvMF96LF6q6jFHVR8wQcNMx5vmzmQyCMFYhQ4xFov9e3fSMb8oMa9fNfUWpYyEjk",
  "key35": "2AXDLXtHhrqKS8tCkm2WbMmJS9FUvfBVNbTXSHe63es3yvicLquZwLqp2u42NBdVtZScWj86PMH1XioVssuMyWfr",
  "key36": "3kuc1wVKkR1aQcSZDKrjCVQBVEDGuCXcjNPJLWGZvSZgJcvuQRnahkpee2PZ4JsVhBQssRzqqyG12BFeDjb1vu1V",
  "key37": "2ZC35JWCqnjFKGhSDR8QdDC52ZrfXcZ4EuEWhq7Xwzy7f2jRcMDLs9FPqspR438NrSzeDyGsvg684epxAfDZHVRA",
  "key38": "4uupD3sxqR93oxrSDmpBWDvuek3Kq6K6G77FnuAxwG2jpQy4B4qep1Cw4yzUfPnvZ16PdH1wD7JB3F4WrGLbge2S"
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
