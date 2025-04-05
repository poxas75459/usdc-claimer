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
    "3pTZDjSGDPB8ZkutyZF99xkabidpBwmvNJEK13xULe4i5yn7DEHBnCx3PA9jBMntH3G46Dcp5tTxQ3CXYxNjfaG2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wv7t9eT2GuXjHxWivE7KjmjriescqLor6B8HUJcwEGvzt33XtinqjjFg3PFaRCdU3LRkn2c48p5nT87ZWx7Kw4z",
  "key1": "2FkYuX6LPBQGL8Fn814u8m79Fd57zuWXKtQh1sU7yZce8kZqsrCrX2mLApVFViaog58VyH8DLnebRh9ZMam64Frc",
  "key2": "2AkaRJLpuu6okuByigRM3EJe1ATj5e2WhPfG9h28dvPLBqyvj1ik3GPeaQeDu4T8XP4vaR3BN76Pf2oeH9zA4zKb",
  "key3": "3SsHqhCANrAWGdCneMViHE9itCjHXbQSTuyNdNC2XyJwsCqrXSL988jne7ALNguEtz24Yfu7vdVrk3VTzg3xwBfg",
  "key4": "3MYgm1yxWwkdCGNQ6qNwbGfT1vx3mDhANpAY9ijWp83ekQbLDUBkHkZDgG51LkDNSotHCwJXnEiKQus3RwQMk59W",
  "key5": "35MmW8cs6VNbBZ87B8NadPVyWG1KaCxKCDfHnyJ1d1mJaAJzejTJ4UGmoXr2nAJWPAR58aZuJJFLQbE5E7rdKpPD",
  "key6": "xE6Tde1BWqHYuMFLp4LsgTP5VrYSXNrUKoaHezi9rnPZ98shyJiueTHynEkKDC2pA2Wr5eXw2Y2hNvNcmSeaxQg",
  "key7": "rLijst5XdNqanYDVHEUNk4CYUSQvShAr4k5xs2ci8A4rWPYuybcdJyjQJpXWcG7Jt5EP925aogKLekacx87KMKU",
  "key8": "5RaPFDeUXiaRPpvK4xonjf8UpGCDAd3S2ZchXidMf2G39Cjs7iwZ6pSnq3EBukzo5KcLEAqJfUVkUL4QzLUYhAx4",
  "key9": "33JHe4tJFpyQ6WwUnGCAo8dzbYRdzhv4wGDTuzkNjMktNDnaDtoDvm7n5mqQME8oZ4A3dAcbLAhhsHn6gYZ5ThxV",
  "key10": "3Bkm75QJVdFWhNgR7y6XmxEjhAmcNHNNY7AcpSgmeSX78Vi4sD4KGSJ4S4RntKJ1fY9r4yaQprFk5y5Rbu1PQp1y",
  "key11": "3pFBpSKgpxvnXnkQPnVYPCAtZLGs6frsVZrasELm9Eg1j3Z3bG2uLesSWs3YXEt55hRX3i7ZXe8JG4ETgaNkmyDH",
  "key12": "5WM7wJkD4kSe8CmLGQL8aPaaRrf4kd4DZ4Dve5woGzZrdJkShCQ9eFigutpEKNdL1LipC2JTcX2CaEhE3t5XRKFu",
  "key13": "2ZKu1YTMRjN1MzBui1kYGs9r67XurMSdG34RYwEBoMutMaVEw1Ay62VKXSe1Uw5nhWnQpkPCtoEc4rCuN4GoyTsL",
  "key14": "4pLkZ7Lfgp5SUnmBtGASrUPR81TJemYwy12ihQb6nFseYRsaJp2hsK9yYWnjzjfAj9RstbWWZYNsmzNjgw2WaDhs",
  "key15": "2VKKYdPisAsxavaWKDiNZhs6Ungkfyrp7U3pPkkrp7eSfA2G2a635P2R9GmHciLVwzAmBxErXCrAiAaEbf8xw1vL",
  "key16": "4yVYDhayo9jQqnFkATstuhXEh8pLCYK2RND3TgV39oEL82hSVj1R1P6F2hTn2vMiqfZXdndDzc1UiX29oHq58nqu",
  "key17": "26uG5Xb3La6WQzGA3GJtg1zdFtihJ2v597sGHHh9BxXcAEhWnbScmqW4xQRGCZjsqGinBroRVLz1F14fu9vMNS1w",
  "key18": "3nd1h8rexuNpLxzkCk2rztpxt9FnbCupt41kUrHQqRSoDkAezGRJBiDsUUCLQ86ZPX1HKPJk4C6R7nXxBxGjApRb",
  "key19": "4Z2Ydbahc8ZMDco1yduzYubKbevN6qsJZN6wCFTvsfLa1wqjXMK1CWKZehvVGMuTTLfC7SoccPyDDVZemBpmXZwB",
  "key20": "4Rz9Wa8bfwiiTV2h3HydHGK6cHikBuvoMwMJqtqoUzhxwxYWXBPHyxsDkx3gmckSB6oHtQHASGRSVqxEwKVwgcs",
  "key21": "2yiH2mWCidLS2cArNy96pxiNkXLaGJW78C5vPRfix3cnxkqWnEEu6LHYNQaz1JtEqrK46d83HrvqGW6Y8BDERVAv",
  "key22": "2AdgdAuTSVGPaH3nzGqBkWMT8EQ9efXm8f9HJRkJBcMCs55EGg1Vtv1KcE1ZtDXoNb6sooqUjftkj2iE3nf8z9zg",
  "key23": "41DZdqKKFK75hYXJUEKHDAfaKwfNjvRjtP9L2gVSihDMWuWb6Zc2zZTvUoPWC74Eeak1dS41hgCG9M4GadS1odyg",
  "key24": "2xrEQMugmHc9CVPQypDk35FkLehXiQcY8ySDhr5bj5XRntexRs787n9HroDk17W7WMQi8CqYq6CFLe8ievuSyTDV",
  "key25": "Kkgs3XxoMqoKAfmMDcoEkAhzbmorY7fx4FnSaYgnUtAJ1anU3D2P9zHoKkB5nJzCQb8PgEKKvxAY2mj9vxYqNzo",
  "key26": "5Vk8Us3vzjYhCXmpGWZXj5bH2zEu1EfkPHpYkQHgqH8gZtgi2MGtGzhDDyrPFmZBFsHVBo21Dkqwfc2N1HuPKWyd",
  "key27": "2KbzbNSs3qZeRiBUQiVjRXL8vWT7ir6xRFLmTNeD3Ymw1JKE1bMXwK1Dve5iJ4BVpW2Bk3qmgFP3TK6Wh724X82u",
  "key28": "2FzC4H9m9kyHeTTEnJNX92RrSuXY5xDnzBeMsur2LdF9WJH1qkZxJiyczRgru3ZvU2mJiuv3jWY5Xvo2bzDVAPCN",
  "key29": "4ZLrh48fF7gYcAyUhdCN4ixSfFauKpbd8T451cj6qxgy8aRfTtaevfHCu5dVxQKyLUocym1W7qF8YudBTqN2mg22",
  "key30": "61PyfjhH8rkEUjto2weXmRSoQZgGHMDJYxhDRLKMuGvVntaPffi38EG8euEZfqXofFyYwbb476JmH1R8Fg9pJsRj",
  "key31": "4Bea4gnHeqaH7WvgL4p4tvZEb9SuzjdUoyzXtFmqncVSSppCb5dEcs7bsUebvBn6bqp6yM2Hf28Bro9UAMT9qRUK",
  "key32": "3uAhYHr5hWTPivA7QyXSziPy6c8kpKBkZ95LEDcDW2dopqNAGdjnFoFo1t1yx4bXvB2aVPcboJSUHgc7mjVNXM69",
  "key33": "AjCtqGp1iqP9h2wX89gnSaLUDv9eNQWcTTFK3a2YUpFveokaFWLnkgEPSFv1y3aTBwrc244jKmNB4P5rkRTJ66J",
  "key34": "2Ceeszk4eBoS1V7jqZnQowdX9e5SJdCDMqtwPg6Rsy9kGYeSfduKLP6gNfH2n7L5YvyYkgapeGBRscyiaZCRTgDf",
  "key35": "4PYfEmaM8GWMfi7u3xeKudzwwSc93cU5E5H2KoFcUdA5vmbwrsTNu56FFWGZF1AFQY741DLzhtm7jvxtF2awZXP5",
  "key36": "7xS8AXETNUNajhafW2kvbArdobfjbHRtuo66MEgdKJx1xSuNiXfuqb3WWLXdk61qrXJq8ZHkqgu4EVriXKthEMy",
  "key37": "61eqSXMVpcjzWky6PPzyoRDpmiL6XDhXvH771U813JhQC75YUKcRCagdqLSq3vadDKsZrJpBiLmCpLTkkf4mupWE",
  "key38": "2pTfNKHRfXfymWeDPsezckMUwF4ykdY94tcevoAiAjXqVLZ5CJtL8vui8XyWt5iuaZLFVzbZgxTqPwQxrtU9kNEg",
  "key39": "63c6qiazmNKkoeNTFHj86XFM37hexXGZFjAJwcNH4LpNBSTTEfTgWdfF6juTJeeFrdiHe3DBasuzEZExoGJ7hg3e",
  "key40": "WzH9Z8DVZ6gCqxPFKN8DJo86mkeJUpH78N3tMFFYznTk9xJas6FnbeeE34V3kqcgbuKFVzrYRLXwMXtAZhuhvkT",
  "key41": "27Nsv18foJZQoGGoePZBEAkQ4oqdGdqzqfLwWKL1XxW66We4w9XomddXxUoYhCadBPjQNnDwoe7EBiQzRef8B35d",
  "key42": "5oGLq1QNN1pKkZeamYzpHMgdsXHETfEwDvXWTDoK1c3EFZPH2C1aUfUrbSYgHC6dgnqgZr2XrMa1jDo4uXayt1QW",
  "key43": "5CgcaWGUAtuU2BAC3KqLPWVo8vgSG2pb2Jmgd8zhGth1snvq7MBcBR33jKwLyeu4RvddJyXHAbfbHdGYd29gTYUr",
  "key44": "4c8sxuoJ9YpcEenpWQxpZhAydo798Ud5Tmnw449s65QbbsFkVyDX7jTgVQ1JNmb59NpZQKKmAR71F71JVUzsdNvU",
  "key45": "A6kzfvqoKupjACff5U7XGSVuXiMtUno5CDFuZss6pX24Qy4bu3RF4RMDg2MTLaRMfJHRSou3KAQApUosr9Gx1yG",
  "key46": "52uwBYCNsthnyP5QfU1xzo69Ks3aC5X2d9akgKYAGc2z4GyMsXKAkWGWihUkwDADfdE7E4AJmx1htuVPWtu6mtBf",
  "key47": "BrqRFZzA2dmNznQWEhKbSGEXJQxoVoZJJSRi2gAs9j9nLfCMCc3hHE4NCv3EDYESS5KGcZ4wUpbAscTygquEz3y",
  "key48": "2czDYcL2UqZbPNqmYDJHt7RXSAor2uR1T1fUJecQEqMKLGDiknqyavd7YE9Gnan2ibVgmXpgfZ4yz8V8bXGrPSko"
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
