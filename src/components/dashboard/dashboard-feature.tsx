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
    "khiBQcGTkBgeswd5UUu8h3GFia5mdbGJUCT89in4fs6ag1bYpw2sSJzNkw8RcW9hFQrLUDiGNziViQyByq2fVbR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oHpbKSfjwkwwqTtRCqeG6XkMXVxNutaPR4tfzbnwVEHkGhdZec5GCm4F6EzBgokxsiCkcPUFdvHE2HhmdY8sF6o",
  "key1": "vYXExjXAYacwJiqwxdLJZzUU3bDxdhzSxUenPZxCEpRXec9YXfkyrDozDzHyxAor7yyHFXEvkFWypGPmz6pvJSf",
  "key2": "21GroNgXMNisSWPXW8RLbqA7ugKZ96jfrzHgZ21fhyfoauVtzVCdAn7EMked2eSuNEfTueu8imByVUxbVypnpHHr",
  "key3": "4U2Ue9LhQegt4tXfwSpXU7J88t1N9nR4AN4euX8cyNH8HNrvUtzCuRKmitiPXu3Qvw17UVLs7aMmRhJo7C6hKxVz",
  "key4": "35hLGZcQCjjpY9ifAURNfjsPgK1QUpdbp6imKFUAnDGsg2XZFmTx9njs7vdo98mT2jYDvADwCyo2bTKvDgLaPcxu",
  "key5": "4fxYP4cyQxWuXqvEydKCpLSYuue7382XtqLebN2qDbJQ7w9BGAdbUPu6kdnPnuPaCg2PhyDEvFbdF72f7LXs1TLo",
  "key6": "4VFdzeRqLfHqv9K5qyQSiQ8qR4JQ5nP39EHoXxzmS7auntv6yiwmQ4op98MWKNrsRVkZeaHxMgu87R5W9ycGn1KE",
  "key7": "56nGZJt2uNYNqtpuZHqF1Gbe4Ekqfy4eFk3Uz6WPc7yjSUSTLQe6BVbeLbDZR2KwNYJYLXA93eGyFDSEaC2RaBQL",
  "key8": "5FewtwetVEY4d8b5LbG7YsTMDueW5uPQTcZThKxf8jGwe91uUCSVTk2u1DKKf86MVLMsG1jCJRL4Sb4p7VJHw6pE",
  "key9": "6CtUVuAD1RRAuPLqGYb4YvtRgySKB2ZYeQgoNYu8FMsABKaQJdfuPqZX5DgSiFMvJVWa9SkhbvtdGqvtwxRPqcH",
  "key10": "2tDWJ1nYhB47Bo248HH2fW1tMukToGGYfa4WbcdjCsxD36AHNmVnnjabnqv5nv5xcGqpB4dkpkcveEjrvepPmHdj",
  "key11": "21U4UHWCNzvWQxDjeUumUx16CzHDWokJCTr1vCZpU4vhGq74zUKzrL79Ycv4Lh4jBzG8ejUDKDQ9R5CEo2dfG3ez",
  "key12": "4McqJUnECGgfY2GhdzXUXLRBiUuqD4EfAADF3kpUvuuLx3Ma1G2LqdjisD2gBWYSkESDzrnzqg5yTyBZ41cYfTKP",
  "key13": "3HRfgkJtGqBiEY4JsaAyFurdSZGyVueBmtHE6JtYbWxnJrKjm1BR3ko92oWbKn1g6XLTMDvktDRCu7eyCsJg1GTm",
  "key14": "D77rymwkGfMzK2sSw7VV44tC87ViQ6SNczLVB9odMWG3J8PUr8cC2emP27Gq9nQC26sLwckGQKxCSEnptYNSLkK",
  "key15": "3RfgjrYseCTZ8Xh9dG3SQUitixb389ZFnsLznFjoAvHTXxAXcYgsMsiJPPyQ4VQoLE9kKSz84hNx7zbo7dJg7YcA",
  "key16": "3JfqxbzF9G458Sqrtzf19po2Zqmiid3WgtFJyhTgu4yQArazKzvjdZ3KSKrYgeJTSkDyPnF3ZeKv4qN6criPeyc7",
  "key17": "65NFihjyUMCBM31QvjTmKRy8DHSrauAzHDuX6D7gpsGZZeXNy8SSNKsWFafhgst5DbSEfrujiP4zh317h25namJZ",
  "key18": "v8YL7Ma4t23QLMxDeeR3pRbMAJCj68tWT8Mvh1mKSHzK5EsptykbefnxJEbjtZB9ofrSFpwvYSSfVcXbScMKWQQ",
  "key19": "41e3eQgYyNer2i4xhi3hQQgF1PHA7VHrLe13qtu2iTsUA6smdUs5XikWukMW5d1n5MFqLmRzaWSScA4sy9vJF5Ji",
  "key20": "5BiLD7AZQoXmz8XWtuVue3zRGVCYTThnxL492KxvTt6h9a8iuRuzyWfESREhh2PqEC7PQ6VtkxTRdu5ZBfs4rVS4",
  "key21": "2HNLEVSc5q74LqTEkmJdYBwu5sZyWuRF7K2VUJEPVf27bxR2BpEXMgdc7sjME9Byy8VjiCQUuTPHboxtkHmseFZs",
  "key22": "Tuo2aMfX5i6LDBf5Ty5D5WffZFWeZ2GzB9BiYv8MazRkKSVZmKqkm9vYj6gkjBexNG2ZGCjFTZQdfncytbS46QV",
  "key23": "5wLkyTXaSUfyZjZbU7ezor8NZHv7rSReRohGzkbsUgTrUnv2qm6ghQcE8EivHwiKoZNDJ71BsoUxx3Fjoy9V6cPY",
  "key24": "5CjnXECTYqTdQWqoqCDiLZ9UfZssqEHBPuGNsAb8MuHG35BSHu8ksiDMo3h1iLzPx8CukrP8nkmc5WpFX8nj3YhG",
  "key25": "57vjfqqdvYVWSFCiTJpJ9XrqdAZjyBWFZNphri9NMgzhscRkkRXRp9hR1BizNo3UYvbymmUrZv2ESdVJyFhoNHy9",
  "key26": "4QkZcqxqzYSyLSHVnUWy64FZZCDEy2TVpjQDb1GPq2bK2oVwRsSn7FJCNNUqXNfWDPFgwKFwUBDW1yXYBVUUE25G",
  "key27": "4J3Tt9q3JodhGkmr6oBTepLvNTSdJXSReaojsLTKSVPu7X2GRFY8jDh2Hu4a4xyLpgwDi4aE15Eoi7WLyGJrH7ai",
  "key28": "J63HEDu7u7w8UqPaE94quwZxkZc1pGHjFbpaKh1SkAau337aDmLL93jF6vAYnyyKfXD2meeDzY6jdVaUV8YZkXW",
  "key29": "3vYGGPRe3nLB1zDTzRtjJnWjw7qNhyK3vDd1SmCuPRMwz3AhMrY3KtFvennE6vpuNHcD921xipPBUN4wvQwst7t1",
  "key30": "VpanNTmjkAjCsT7HiWAEZSohjL749BYrs8gNd1NNuzqCL8ZVJmSEypn9uSPfdSSiJDVpHP3fF8wjZJ5yLW4z7J1",
  "key31": "2EwAA8AGHUxpG2TPuisBJpxgxFPoPgpZshq5Goqm9R2pekDz19KWqUweZzebpa1LzETK3QE7KSoXEj67v5criboK",
  "key32": "2Loutq5eC6vTeyxW25ZsDibf2cTXTW3M4V4bsK41g4yYTH3kmHYZ5hmWo1sNnfvnx2RUAoA6wthdWesKe6K4mt54",
  "key33": "5uF8kqVwQUt7C5XZSj62iCZx9U7cuqijveR6JDBoPsg6YnG2uwAQh8G4xxb9U3b4k5PdaHTTc2U6wmcZ88aNoVzr",
  "key34": "P8rU6S8WcRtKNzeU9TkMCWGUDzdQaZB5riedyeFLoRHd9wPj9G3fmCPJJ5mmCqXGkZRUzVx4vFrdqTWjWUtHZCX",
  "key35": "CBAkFZbjpBNxNYYXUTF1wzAWpn8Jd1xZHznDjBCDUx6UbQkmQJ7gADxSrU4t7kRsnEttWmEFZhiE64RgDiTZyCs",
  "key36": "582iFeqFEEmro2QDFchqV3KnumiER1C5nJj4urzQQzFRQ992Hhyw7me8j4b5z6PygUkxAP1XtCwHXVPmZfwAA9YU",
  "key37": "4NNCuC9hmu1nKBqxovwCTCMPhQ6Hv5JGC8x8kXeoqQRAL7KnkqAgHej1GpJwaoghbXB4nC7VyyGJB54tboPFLGHr",
  "key38": "3fBZCN28cgYy2JR3aaiv3yjBowzw5KDpsatpiQM2idhXNix2UcHMjE9e1rusTSpvH4WDFvPLS4xmciU36QiKVWgj",
  "key39": "66kpn2L6XU5yZYoeUaGA2nfyimo2Rtgac3zrLuGLnZvg173yXCGU2bY9in8CkKUJJQb2YYC5o2Z4qyWu4aGvTHXF"
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
