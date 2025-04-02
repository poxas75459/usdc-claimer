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
    "5gjiNe3uiUjQSMC64h1FyFLyPwFaEPmWMxrvsweDDMTm3nZWpjLhWqHbgQhMBHqvGLAQP93smUTky7Wfy6CuX8Eq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WDuR1BHWmSGQNas8kXiFewtEEYfJhjBZFjyJ9Kj6EmD9x7sbYZsxiYpZ644DGDexBBTz5q7sFG4jsgAMUhQDUyW",
  "key1": "3Qtfpwv7NP6upXbaoa9YKS8S5BaBZ4tGjxewmC1bhjC9MU2Pxt4frXN7jhbUh7apmmP6pj9uEWYrMUVZ4PoXLMjZ",
  "key2": "5jY6vQKeZkSBxiwFBSYQPtSMogSanVwn82dxWPN2ShF1hwRfeTBAjCbUdrWnkNdSkKFtd4zw9EoSJyiMB8n76VrT",
  "key3": "3E8GZcc3YHLTucAQgHBPLC4ejZd86mng6hea9vCgm9Qz7XgS9kAvNFeq3cAzv1jGuyrxbRqTeGVzFa5T6HosYbpr",
  "key4": "3RR472z8r9zTBfNjhgERNHc3suhoa5Wq8pmeJJ4yB13Wp1tDMVdiPt5F25dQ3KzAiJoEMZoCSyreqHmwBB2aR9iW",
  "key5": "4PYxZjM7CYSxfvCT1aWFrbJk2Msnoy4zCR23Ds9h7uMxcrJQL84jbfPfYvmt4CEdE1rghNam55f3fNmXcBKkGpme",
  "key6": "T5BWS9RCciA8xmXYGgrrqgVFABStLZP469KCSUW6GCLs29ntAifjV3MuSyMyMEaCKYphCqruxNrF4ftZTqdPVBg",
  "key7": "4uEc28z4rvXYqF8USYVv6jDPNm7WbPXhqhEMsqVPhxjPXkQ12KeuUUqZ6mgQ342EY2g6JPstu1RAL6xitgYpm3RE",
  "key8": "238w3DcDQufSe8H3BaKp9exsJyRteB1xEnPqsAd3n6w6KsWggg5zwnpimwRkuCpYb5vBUygvaiD9BRtpkhucQyY8",
  "key9": "4wigawij2HBKTzg7F2JviAGxP42dfPEMkBDvVc9JHsziLsXWX3uRiXAawnidyUwyrzHWUdyp54QwQy8aZJy5jkwa",
  "key10": "3eidR8rVrCsoPo7Gp9PeKQksKGcEhVvZgfVAV2CHRLFzb7cVUTx18ZhLyKExGbCWDDR6NywUYUmuYZ4j6CF9BSm7",
  "key11": "4KUBvarhjPBACXLWqwNoBRGTf9ZT6Z5Ayk6omaVjtqcSkVFVJNawgvHoNzNTokbpgheRG6pmeNw8t37NGJJyxbrp",
  "key12": "5E1k6vDSC6H6Ud4RkEhDzjuian6CwzLRHqEX2oPZEMwSTEd7sKLLw7q2xeoXjPFVsEwg5kmUJNDvSNpF4vWoSWYA",
  "key13": "3rW1PEWhNE9ELVMVwccvUpEJuUiasjs67DhbTDbT3yQMbCkcGbzgRQvgx2qwYERFHpgRhR2g928N3PakqChoUsbk",
  "key14": "oRcVHz2LdKcKvk2xVnu1DQkamM8c4hYMkw3mT9VEsjaPRmm7to6ednwwfqdoeBnGyS3S4gvuZyvr4Y3PPmXewZh",
  "key15": "3F7BDUnYSR2spaToPzr9bc6fbwaKTJMViXxVeP2tnuKaLN856ujPVHCJm33EEdMgtRaEaqa94ndJRaJHSd1kdgLd",
  "key16": "2bQBoLvtYVY776LX3Wvjkxw2p1kDCStvdi4Bhu6RcbZ1w4onwsjxvwG9Mc9uWeUQEJDqxEb8vJATh1Hyc1txjyzw",
  "key17": "2jrUx8ydsQScNry5sutx4pryGQqsF9ix8i6VaNVHPoBig1CAoPyti3wG5NwjmqHx1npc57CqHvNEhjv8idduaF9u",
  "key18": "2F3KHoMqYcD94K9LocVE3sWCPGKFnKLJ43Coh1WdadViinZGqots6DtSn1gbRRL4pt9wrkmZxpVEPkpGj5MCiU83",
  "key19": "3G9wMpkgdG2V9RDWPXeKQYiiJTfXoT4bXznZ9ARVyfFYzX2FBEi5XSA4Wd9DfFoaLpHuZsnhy8WmVLNdxQvfXBPv",
  "key20": "3jBQYZrbgMkqSeikiTpzgRU1evpXfDyqXCwiSACy3nPZXHkECL3KVeFLJfvgqXsxJbiaYtJoAndxCpww9QcUmQbG",
  "key21": "5koAzZ6C1Cbq2ubJJ7dvbtqvrtEz7QJUrxg8T7tHCMnwvgiW4GeuBMH2ukdY1Cmy9Bd7PKUEqBUM3mGsXXVay5eW",
  "key22": "4vKT63uATFPTm4eTuETrrEVEVLmdVaWfsoXnHT5xa9qpLtxYNKWPFxeRohTk11wgj5GMLmP7M2SECpGbvmxatXnm",
  "key23": "yAxbkY5m1Dhw52dU4daM4WVSci24XXGHSCx2DYxxBMxSViu6j8yU3ULZnhxqT53hzXqVYtMQSS1YTf9NGuhkCiQ",
  "key24": "26gytei4wLNKPuBAcGt4CYL6RaXNNbfchbvefgfzvAazE4z6dwAkDk7BbWG5UZcYMvMzTR52wVmca8k6Peyn788G",
  "key25": "5qLpoSc4rF76i4Ynq47xPQqFeTLYo3L1hpx6Cagfvg74GqYnotuQ7Ky2M24onaiq8wgFFHGe4ZDEdUmMu1dVmiZr",
  "key26": "3i25pX3xKhGNnwAxob2mJdZxZNajQPPi6jLpxCGV3cDPonuDmnWC99KNGCZ6gPkGaCPLcBteFgBfesrzAiMWN91j",
  "key27": "2YFDcQNqgo1xFYuKwxz6Eob7uMhdFMwNFPWEgaQqCscnjjRyG2RqfMNzxNSFX7krTQn4TVfFH57gv6Gn492r6B12",
  "key28": "2AZCkzEeZ34yEVhZMzfQxRqfrTcBhL19ay6PTN7CFefgB72Hj6NhzrRbBekt66CPermMGMmYDkvvWDMjRYk8jG2",
  "key29": "ChLB7jdKETsXdi6qimNDyTSysGPf5VciyTTWvCAhbxT37iWXtZ5a4CVPnuB1sxCP7NpvRkMkVEouSboa6hPqrPP",
  "key30": "5kz3f4QPDwyuor7bnXjqeq9jGacHicuuPfUgbQvM764mvPvonZHNGPnwZMSngpBKDm7Jwu5orsYyZPdXPjwWioP5",
  "key31": "BYRdLNaVQLXDnE4dciUUNN7qf5mevzzmoEkZ3rMo9siQ2had1XfjhmT4kiWdb2gqvxuWLKfZ7ruVtX9oJtocCzE",
  "key32": "kyUtZ7TBMTotHUvtbKfnKTV4UWD24cfcmUoAcCvyT53emqzZmHxPdC7ewShZvesvdrVz41fokbQcfh5QiYEG1QM",
  "key33": "8FMXpSt8UcH1owKsFmMjGLi5ucJ9WQs5BnAZPwEbpcSN8q1TZcV4NJ1HjHWHhTFFxn79Nme4Zwws6674523Cy6C",
  "key34": "4wbFABUet7mb4ZVi1NdHWHFE3bh3KTLQMEjfrkuc4iUwX97bZoTzncKSz1B1LnAA3JctLRU2c9rTPyfeqKkdygQ9",
  "key35": "2pcxShTxJ2VtSZ2ibbnmmvcfiR2HpncgJLxTT2Ps4mMg5Qg5z4FRvxzipUTw4N17FdYdyuWyZJV8vuuqV8YvHZXg",
  "key36": "cFniu1JsVUebjviCiE9HxbvFLgXeMPLoiJL75ccFLruqxbc2ixJm1fDNcbKXVB5hwX7EWgjr8YVWZFNGvxHCytD",
  "key37": "3nAk7nZdKRAui7hGHnTV8MTZUh9mBYGiReNAJ9v56ytcVsspmS1eBpoL3yK7VWWU5PZoVKhGTQa9pFrreAbcD5yY",
  "key38": "4ALXpghmjQnoXcN4qxTexCsVqHZp1utqwQjCb2Nr1AmvSWNVP7gvDUtFZVAPTPoMRUAMDeihLV2HWCYNerZz6SLQ",
  "key39": "2NDmjXNbBrgpuaTVVCsZdEk7o8PBBTnMa3vWy6j4m6Vn6MPkJtPQ2BdYLET4tT9JWgWbpqJStT2a1YXWf3cqq8ru",
  "key40": "5zV9AhpzPjBNDxPZEhVrMmQwuDTQ4w4XdooihyRBxmCXbpCPRo8yQcytWZHgGUvHwvgLxs8b7G3T1PEPz3Jv7dKf",
  "key41": "5EEwwX1hf3VR5RJxkQR69WC43fzRibZjyei3su8SR7RK9DreebnDjWuesyhCeZRJFKervJCas8zejWRakBnniF9v",
  "key42": "4g19Zn2gooz9gBNN7aJxhBSXK4kKz2bfyp1VkZkruPQLt3nPygN9GMYNLHKeuSTVDgmFjRUjKgVoTEXAADSvLFKY",
  "key43": "3QkZDgSs3jZejNTrxkPrLqgFCss599jswuW8qxr8samo2kbyX1NcSMV41PpWipqndNzHaFKr57igaQHzN569WcLj",
  "key44": "3VFo27DFPt8SPvTihggTgK8qW3ifeLuCyw7ghLjW7xEX4ujsm1GcmMg3jaF8YfUPdsmGXDAWdgafudVcAKUVydWN",
  "key45": "2mm1fSUEFrGfqVVKAmRZRRp6DWoqdvNDF2NfMg4NRdPnNuX5nFKXmyuxotZfS4euBRBo2LYbR16fzDccDbHx1Kpo"
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
