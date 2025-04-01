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
    "2rWMEqomgdWKp1L5UgfksBNys3EM1T44swQkDsZFenx4CZwjLooDtwk37cma9UQDk5V2UA68Mt4QmZEDvRFFx3pZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zPijPt9yrrQJZyZmZiCRcmd9n4N426EYkHyF7mXDqnheZiELr1Janx4fFyN9UPGTyKYER66ysW42Vcamhh3rKCm",
  "key1": "5VLLq4KVcwahCqweazNYrNFEH6KdN7qC3QhPivdEaifg8bVaHSHFvauCyV6Ara54XM9jFFSAnarccDBs4hFwX3Tt",
  "key2": "5i7Cs6iFPxmMYTzronzwfBHt44GSwo28YsuH8M8wZcbEPXDSMfBiLPrMPzp2JanzPTH9onvJKPRGHXRdyXRaTb3x",
  "key3": "jk8LoHH3TxTt2eP41zes7qRaUrjSvPpYYkAaoaGm5x48E6qMVHcRJThhacspE4C9KmSSfXfHCB8PMfPnsyYnisQ",
  "key4": "3pYdxeHgoYSKrrzyPKqqme7Q3yogBhH9ovXBwZwrGNFzYW8ie3shVVMtBQvJAyn3GujrwxpeDzW2jsPsF2HeekvH",
  "key5": "uL6ypYZ8ibBJh79pX18NVp71qDr8ij1ukWqLiEPh5JAUghDtsxos4yfJPhoDgnpsbAFcMDpgjhMWi6HuzKkfq87",
  "key6": "3qgwQoRQMH4d2JZM9M9bsmMiEsMzQCMuj2UHkBMJXLnSaBk1adzS4VXjKqpeacFZEgFJP6aXJPdXNNJiwAZcdSSf",
  "key7": "3LfQB9FmQYZx4U49Z2WDa5RMbRL6WG4Sdps2cgFT7MkpsP5R7xhP5KhLCro3nV4s33p6KPE8PnkvM7EBKtEQBbLz",
  "key8": "58bemn8tWAT65CijBJECDkn3mX5U4vV7heRTXkn6DpVMcy8TyL7M6FUEhrj41w1ysKLT6rgSwCGSZ73dgoMrGoZA",
  "key9": "iXWseEF2xsqwSCxQG5qBPUEwDdrBZaxfUTmFQ9CXejwqmu8beVLwaUhSsc6LY3Npdg1CbsTNoGMJ4Xt3dZeGvY8",
  "key10": "2A6nyy4mpiTMgMsQSzV3EQAsn69grtaxLZ6FUTiQ5YhfqdoNxZWpHy5Ab5CzbajQmKxTtpySpkTbpKvZMDQT7fCH",
  "key11": "29ViqKupqzAsuoZHQAqTrTt4eDTq9j5PnQzE7x2dY53pWLaiBzrm5zLM4D36Y1csaiFn1DE6hV8bB3JZoAJrt92R",
  "key12": "4ugGfzS7va4kqqHnhERkRoEYis2VBTs1uiFyGskWJU4mvogqMB2tRJ4b538kuPaQhbpyqaXWtGNCJNbLq3YzAZUJ",
  "key13": "2VxaUDbznU39VDbd6jKwbcyyQcsqKzZuxzpLuEqM8YQrkA5zRMxDijHPjrjPCCmBiL1PcsDHRg2GfvMJoBBbcydH",
  "key14": "4HAUxqdT744gUKFFRDDkC6bGCie1Pyf4FC3re8VawQuefCuBdWr1dmQh9rExiM5mVDmdoKe3yiD6PaPEbrCmd57r",
  "key15": "GZP8sxtfZmgNBnhs4RJFvZcbQPaEppuW86nUKqedoQ9WwpJrdWeR28Z7SAbEnp6VkPVTS8F7uEkX9NdfKAhwnYR",
  "key16": "bR3Yrp3swZoZDhc9pcximEgjgDsoL5FUvwftXicB6GLer9STg5JobMCPoe9FkaTnWibyQUBs8ypt4QZxwvgtpyQ",
  "key17": "34f8MU5fUzXCmubczArdPdfpSDBmxzLGdxSG8vJkhhEuKN36jvhvtPoFaQrs2VZ73fYAno2B7tZcpdKs3LUctYJb",
  "key18": "k96jBYqcgpzJbmJeRSQzQueQZngfV5mig34drXeZShKXiZVxGhL4VudfvkofoHFG35B7m9SJ1Y3t73LKgjxJ9PL",
  "key19": "DHNWSiY89Rg2kRSh5JtgvqfCiGPqWz9wFvVE6VZR2PwGFKbojMZPzE79njxbYdCuZPvW7WdkMseYrsh17vbjZo5",
  "key20": "5fQzoPRLWEmhZ8q3DDBnvs2jHGceeFcAAJXLw1mV8Dz8SwFuWStT7nqjQiExRdJzXddVCE6ZECzUW5jVc8f1VFnf",
  "key21": "2rfXLTeQSF3WSfNruMazWFH1kk2WvPcZDcMrgH72vNczP36AvmLunBsQgQE5E6Z8W29L8BW7G6SGG3ah7jWr5spq",
  "key22": "2EFE17q1kXdmrTpntbh6eJfzGLZ7tshKcxB613AmEQ8ZZFWKfdzEGF8bfe8wU5drGQ9jcoXTjpV2nfkPjf8LdWRE",
  "key23": "2YQiYmqvgwRQdwm4c4aBCGTGqfHh9tkQD5REdwfn4eyRJvHCQBMCXWUSNYH3n9x5NwkchzkyTGPiBfGRQrErjiEK",
  "key24": "EEsiv5xW2BuPQVRn8v3AomjC6cdK5Cd7eHHpgE6DDHdrtUgwH8inDxxM5mKkwCn83FxcHhvRzdMB1YT6wDkGvGH",
  "key25": "5iFCn9TZknPaEMgLp8xWhEkUaygG3y1QhKD1EqNpQqL7dDxbQQiRSnjgCT7buAKNULc8WkWBVU4hmfjaiRps6CrC",
  "key26": "2HiaZsE5UX5owuYgCFXUEkbs1uxv1XtXZd3dptddrDSffCggaM8nBzNiYG5xCghiH59Amvg6okfr4n1qUxSzQNQu",
  "key27": "XrZEP58Ze8YRZx2pLwpKfrude3LdgASvERqLMxDAmSQdLYD6fR6kuTZHHG1D7KjYZvhwx7oa4g91MpN8Wb21ghb",
  "key28": "3xJBj2shjJ5iqXsiFgqtgKLkvKc5BYNvj9k2iPsQhR3kwiZgi8wQiBdD1Gx2hbcNF9ZV2BvE9Xew2QFWjHV1YAXm",
  "key29": "qinP41jZLi5jEvnrgsiArDwphu7DSazPpCCcE8gAma5et5GhtEEnW77h2SnPWEnRdpvC8zCEL86uhAKDhdXPQWb",
  "key30": "62gX6WNKwY2QkPTYJwUnR2AD1Lkc6AizhexoMRp99HYLQ1Sa9TVqadAHshwxDTjQPMgPyL4R75rHVkduXpimehv7",
  "key31": "4fzwFvtDNqa6Kfmsh9Pp7NND3jSBGkhfReZW4GBi8h9bWZ1GUR9vCjqhGMeh28UyczrBgaX7UmheuucuyxCSHmn7",
  "key32": "4fBJL5hvQtZJSbXugY6S3DAapvgnB5ZrzBwaJ2a5dwKffHxWM8AFvL1uCCdgoZfncxSYZWmsKnxfeCKVEtozWr5y",
  "key33": "3UzBF38uJwedgHirTaaNaqsqHGhkDWSaRMWZWGxRt3E9Dn7NjAZdJi7Hi6JAFaPLFj3SpRXHfTWZMnnoRqqhMPFz",
  "key34": "53nZXKtXhpF56ckrjUowMEqnbGt1wq9CuDBaVBVqk8YRawmWYamRCNWHtQz7Nh5AYhiNuXmfyja4iM5UmhvaYmhJ"
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
