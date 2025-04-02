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
    "4yTQ4rTJf2ktaPDCP35RKg4NyFG47wDjkM7YPrz82qYTaH2YF1qXj268Vj9w9j567vTAJo2yU7p9NdD2gSRqAdwg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WaQi8ZpcAPyZax5DHe8dfbtJV8T9aa2Hp84JUr65hsbgSBZfHee9a5Sui3j9RyWYejw9igQ8meEt1ApGykhKF5H",
  "key1": "2yf1aDWsQahSGKjQyf1Gp1iUgGsHdvJ5YFUDcZX6Bzh8srxSPdGDAKugufoK4q3JjvtjQSfLyTL4zugKoJ8QHteF",
  "key2": "3EB2c1wVF5LhJSdofk8GCzKUoB4b1aL5C655PgzThZoVagC1nhbyCySCemntVH3rw4TCqpNzGdkzE4TwNGYxEL57",
  "key3": "2xdEEHBpt58Acy5joj8SuASVy4T8KtGcPRfPtqV7zRiMJkTJWU8vp1qLFUNDMTY3on9jVHerMym7kWa13UPa3yNL",
  "key4": "5aDnUgXopvExhNsLs7mP4aNs1ud4fLtb3MmmhqxKhE5C2QwnJNg2NGiXsVLZ4RdDbSAwzow7XH7i429MTfWV57i8",
  "key5": "2v3tv7VCC9La1ydCe9FozLetYCdaLLpV7TmTqRe5zMcfbbmL6FTESQQSa6wSTqqA9toEf4TVo1cWtvWL45TF3oqS",
  "key6": "5wcAcRaPTW91gh11mR1qS1C2nXZKmwFDtmsFjBN4sRbwiKLsdAaCkiKw3XiuXLSuvdk7vD2nsJx2cShKVSiaXrnx",
  "key7": "2XWN6LAbJw9vWAQNrcKsiu7nZNR5PYqxp49XX2XkZ6AA7BsMLAEW6a6F12kXbGbgS41pEg1sDG8M9Yu8PytiH2Fu",
  "key8": "2us9q8okUtPyzvMpcLW5KYDjzGRUw6A1EwUaC2gNP3sJRAe8UBjRGd7ZbFjqjbhKVRV32kgFSSNqQxpKqqHPS36x",
  "key9": "3BtMvomNmwKC9C5uKcTC4nGkG5ucmri3JwLXr1n14WCPs7zitirJrjHEHeNPThW55Wzxr4B5XTs5yBA6uoaS1K2E",
  "key10": "4GeXNsUwCURVUSbUe78jgpebvNxnfLfRWkN2mwZiJXnrsqvMMa1xcBvuMhGpjZRT5RMNPHews5CF9epGWQTqoFLr",
  "key11": "2iDxDNSWj63RTjvo8tYYgAJ2WC7GoMSiC1PeNEJuRWh8vWU79uNJ7jYnFyWYPE4kEowXrr6m3pXtcFahoD4VcmeW",
  "key12": "YyQDzBSeWvsynKMbamMzTet5TfA9LKEPYeAtCkmbbwJBfJaMXZZiub1uiWDzptSDXgP7ceuesH95Dhrm7Uh2ANn",
  "key13": "57F8LwQZmGppgshb4euT9gPgjedRVHZyXrrcAkyJJ7a9vArDcWxN1QeyHmdvHN7ue25sv4QjeDkKDhSed8o6YYvC",
  "key14": "4YfNeggsWJdR5hmgZEAXYmEnefBa4Z15Bc49uniWQankAcTmQh3rT5eCyLVGUdoMSuMmDPVC6vE6W48nC1gb6MoE",
  "key15": "Hen1JsrtXWsaFWyYjzCKMR9RZzGUBZ3sk5SCvJjd7xhWFxX4LmYitVEvLGytGYJbydJdgyybk5mYgcqNfmvjtGv",
  "key16": "5j3V4ajZ1MXoXQ5MN6Rxv9fFcBsYk3RCF4jcJ45k3QaRJ6VuwXjpwkJ1NyLE2YktCPkuRRe4GXkvLoeBXnVRN3EG",
  "key17": "27GMjETAp7SKBGUisHzjZuQepAAcx8EsRSL2TgtHQi3SX4UxxPcn7QN5yYUtgRkvMpMB9PRtPJ4gsQaYLMqdpvN1",
  "key18": "4ya8Zn7SJJboH4yBq1ACgjb3mBJ2QxECPPHVk9JqgoEmPTYrV38s1saGYwX3ZzNBEfSAsuV2eNzpckMkqjGnJuUe",
  "key19": "27nWy8jQ4CwYzktc8xpvv6PMufMsY6hWX2FPhJGgxydSp32AunbypGbjPWzJwVZTGMnznB5hzg48mHqgoU4n6rT9",
  "key20": "4BEVLk4xRV3FtBJsR9VDYafMTcsYpW8ZNmiX44Ssx48QMMi7STRu3mZfHzsqzenMu46VnpYYCppQhpkPRn6PM2DS",
  "key21": "5aH3kYbAqRfchvCJRLUa1fRPDnhib73qa3tkiBD1r8bxxJwcHa2BHT9aj4JpuXkfvdiBTyA4FZNdMzVDbrNrpWnP",
  "key22": "2xG5tLyntQaFtyx32eCXR2Xkfz1hnvuVdLGyHrhVQJEmQSDNzq9acfPgE9B5XRNDGY6qzNSaDn2Bg6WS1bpMEw5w",
  "key23": "3MfizpcQPb2JgaWAHScq8qvMrbCxE691j5x7ydRo8Q5cnhqFqyzF4CpCsmyJ5JRJpM9H73Cdoq1DsM6EHf8eLAJ8",
  "key24": "5cTqMAxfdxdgxXTWCbuGwV5MENbUY1jQKZQvSPJXXndPNE3GH9Eox91tVsQWnva2fQmMZfQUfTptuHPXxZ1uiXny",
  "key25": "4pZhVRWFq5z9kt9pufwFUwz1FdS9YGof8oNhu3VkCDKPbnTDWpYcf9EGQTSr2S5zuvTSSkGcg9WmeSPUPpauiUNQ",
  "key26": "24qYgSmA78Z8h4UoZLCnQ68GJukENV5TB8SGwZazd9dj4JUVWZiAUmjcYWsF1HnSkFJwrh357kFgjgEdpYRKqZm6",
  "key27": "3AvBqxiMS3JUSRbS513ue1kSJkqQ7xoNppwfHDRsPbLZKjbSkw6M58YeSCUDuek3oeRrnBUZEubz2vmNXBskq7wk",
  "key28": "d8QW5ji7ypwpYGrraGmuFcj5YHfDS1g6TR6qPVCniYA6eEoqgTAjUPeJJG8wWkU5P7d7dVMbqSZBoG12Y4zVjwF",
  "key29": "5MCZCwBnTWY3HVQyseDjTgMtPaB2dyXR2jGHhUUV7hZNUvHUATJcS3tnmLa8TNummtV9pPafbYUh5xcQSnAv75kC",
  "key30": "47wXtxWpKh9oieML9qFZWf9Y1uGZhN3EgL34JvniiNaS9WGeJoqKRPAXB2DpkCBMGhNghXEvCFTR1zqbTfRQobQX",
  "key31": "51BveLJfETpNyvQfyKrzypfHRuBZkGNbq7Mqyyhx5shFSFZSoJSk32xrZro7ak6LH8kuPUMq6DZydnRV3RBfYMxY",
  "key32": "54ajP7JfKKi2jZMH46CXdRW5jHwRqjRLNTqExoUF1dTnTk7f82Q6aRxxSUBBsHhrS3D4KbyCmyeVe43tYFjnEPwd",
  "key33": "5B5o26W6tN4GSetArjRaCGNBCsKAWkziCT3H2XHBGeXmtomNQNKKKJN8PVo55uzcPfFDrVrUuWpnCLVgFveU8K8V",
  "key34": "3SBCgvweLZmn45Q8h7M763HjtQvabmcZGgN5xrWhyDVaLPbJjQmNwcKfus7zEjwW8t2LzTrndaAdXET3kmywP7vw",
  "key35": "3rQ3C9Bq6yC7GG8iLHxd2nAEvdguwBu7qCt71uJUsFXL6reghbtjeW9gtqAx8zbGJSBgzXfboEFUro9Zefgi6AfE",
  "key36": "zXaV3LwZZqfhuQmzeq4xni31GuBkTav6UTMkTEXEU9qdTqTbbSoTkZdPtCei2e3M7Ckqm9ZzDNNX3RHStZSsPCk",
  "key37": "2qn5fUAdBgSX4vwPqDu4uNvk52sRcfPJFfmmUcRVtPbcnGVsMCUXDJC9qxscWS2BfonrENjcDANxvudya76n8snA",
  "key38": "2oc4tqFqcgjQQqQUStb5zx4rxukS8FPTK45YNMXuRkdedKfVFtrjYoExwKn2XD5uNcFMLfx4EhczsVZCQzaHp3Ci",
  "key39": "3eGKgvy2CSNssH97fDcacc89cAX32PSp6wCeAMx1Kdxc7Sop6SMCtoP3KkTxXPVUEvSw8zEFqxwDQ58KQ2mPjdyY",
  "key40": "32uP7qoJ4jcK84yWyG6C2msFs4haVk6PsAgHht8Y6i62vaAyKiy929zMkNVqciMXkQJ8rhQxGPqNmMEh5bYRfZQ2",
  "key41": "ZQwQH8iDWB615TQPgdw9GbjEMyAF1Edjkfyn3Sr3vaiveHcSauTp4ZpGgcPC3zTuAdF7HJjAut4g8iqmcJd78ER",
  "key42": "3HtCiYb1uxTJi6UGY9kT3HcXJCspgTonvHwGgwQyc2HmYKFA13eamxzF25bGNzadxHrmVn6JSfsho8ZaDeGz5hyY",
  "key43": "SyFr7rQSgv22KyxwgsLAm5pjU8XUAdCog9WT8dnGbVkZtcB4oFQn7MHvbnsieQbPeVhAXPENakbf51JZNW9xXHs",
  "key44": "CUUAwn9sp8yZdFmXN3CoXba31WDxUVM5gpxbnKtm1YFT2svHqHf5G71HA1TvXK6vYax4evFqC1wfvfiBhikL3F8",
  "key45": "5seHmAsoQqdogziCgqzycDzEXH1RUAnHHSd1BrssVNUXukGt8wGURhauGhaMYSMdxteef19Yxss1WzDyY53PRtDc",
  "key46": "3i6PYSJC1LPBo2JYqhF3wfPsxFGvEkTkWg2NyiqQgQrEAFkaS7fWmwsxGWdPMT6Xr66VZKqNgSX2eEd2vpBSDRP9",
  "key47": "sofkWpUtszWzQvUBNYCbebYjfowwHnTd3fSDZiamXrA2QR6ntHQNALUZD8ZLYEJ9f2Cmkb6QeKj1z6PXxH2eviy",
  "key48": "5gnr9JukSUnzgEjs5wG6Sdryz4ssuv1xkuQwRLeaYnKvLpqh2aUzC1VbQ463eWjc8d8G263tTojsoBs49B6anHE6",
  "key49": "2WdNARwF6fPoHRPwfxR1yZQDaMLN4E8Y4NoAWVMmZAHxEb1H9WGs2ecxxmcPNBSeomkvQvf5S6CQMo44gnPgS5C1"
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
