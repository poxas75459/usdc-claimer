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
    "JsZ5qwbXwyHZjefpqwYct9jbh4i9ysjt9jVSFzCDoBGfipRbKrFu6XJkZcpcE5QhdSo9zwW23e9da9cbPkf3sDL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "no3FkTPr4MXQfA4hsHbcs7T5V5B4awRkRYs286rD5RNoZLcvNnyWr29LYKV8Hixxsk8QFqcUCdEnuKeaaCJsznp",
  "key1": "5TsNSkkcA7QQtYsXcuahWWGCfxHinEDqhRmDisApR7756WV52VmHk2vohh4KL77gps32ThFCvZfHCG1rHjy2yZgC",
  "key2": "3kARUgBLPDzLUwxwTggRZq5wHcpPcADVWhTBoPz5gMYVX8VT8qgkgsJXA4BeHKgTQjvhUrXAWoUo5DtYK5Fe1GgP",
  "key3": "mFkrUeHRkDcJmUw5h17gZzWnbLz7BUVmMXcXhVsLY6QvXXseTs1HbxqSKUPNviXuj1PDEitfuT5uxPrURNDBqqZ",
  "key4": "3f9D9iBVuy4ZF8SrFdTAZfM6Aq8mivQffVTYfpUurFz599a3FrXxQH1SJGwW86DCrdj1u5KKZ6R8AKyNTXi4Mznj",
  "key5": "4tr18ZQSngMe33sZy4RRZF8iorV2GaQsRMcKb3Bwc1D1yBG396g8W64Bw9Zx61Jd46P9BT4NJ3YZdtfNfAzwvu8c",
  "key6": "wix4ahmNXBsWDcyNTUFKsfueA2xffP6UpJE1kqrYvSxZqTa8DY47ZxWqCkwUZAHhmEAbkB6VZFirMcy3ruXJYyN",
  "key7": "5MxqDpvX2dZ6LY9hsR9xGjwcsqWrKuFHph7WCe5RKunPrxanQSoyHdQqWG3Vog8hpZDA9LKbDkwUYMzFUn3dfqxd",
  "key8": "vEsv4qTs25zxfNx3bqKf33ai8u7bEPf5fXuJpeP7xSMfQkKNUJpujPPrGubktLFXQ4nqGFvGzSmd8DbYjd3Hwh5",
  "key9": "2CXTSj6egxtJASqtYwSwNtQQx5yaa2kCuG6N2m1ubSaeKgMCVqRdbrVQ71VNmzdLeSwHBhAu4dCF8H4W1UMmGc7",
  "key10": "5Duwcxu46GtwmesqVCJgeNDTrv4kfyCvc7AcpNgBbJthLTHSsH1i1mkJod1s5FbW6Re9RvBy4LWgLTtVWMcYafSr",
  "key11": "7uKXq2ssr2THFo2NJGEezg9rpexQ8CeXtpRr2hkf9s93CcWRzkcUnp1mKh22YAVnAtkJE7xaHnMNi3acd8nHAQT",
  "key12": "2PiBEAkwcNwhqWVuC4pEDT2aErVHVYCQHcXcH4fWs9XMCfGz5LBALMnQs6wA1b4PvQaxhuvYx9SyxCdEW1XzEQTN",
  "key13": "3gL9dhCKSvam3hWnRDWkkFqXkAJdVaKWd1sDL7bUD6E2o8ttXFiZo1X44J6EEV2ib59ZzakS6GALPzewxhSVTSC3",
  "key14": "d4m6GtqU2UeBg6L7hTqH7GNe8vJ5URCodVSbzr6gyuSoiRsbGKnZHM7fS9k6obyA5wrHMt2BdndurKTAgBSD1Yh",
  "key15": "3rWbUkDcpVVMXumX2Qfmt9jRvc9SPiAGrGzu2bJ1erP1ezFgD8ftJgDo7DzUtUhEcScwXSiiCQ7Cjz83xWyFk4Sb",
  "key16": "5EVqQ31HQNChWDRbewpPReUjLv5G7RFxcCGzKzDETdhrF9KG5nDZcogW5JdJdQjsFVYk4AyFpezUvTCb9wUeQJgu",
  "key17": "7NVkpQUGPgDeUVgM1peCPvmdpS33F3VDbpCgXo9qrBh188gZVotnS4TwJkusxHswHVLQB1defHrMwGSo5n933dZ",
  "key18": "2D3YdyzJ3ag5TexNLbvHK287yBBDkL4jEN7rzgJFGADNHeR8b6GaVbtPBmFnSD7fHJUw7FMePHhS3fgeT8iooMop",
  "key19": "2PnNGYTAzbvHyycmXZTq8v296QdK2DYVn2Cu5nNkKBc4gpw7WwV2Rv7xzSxa6gK8NA3ztqLVfyoRwDtC1TRR36Hs",
  "key20": "5bMrZAmT2gCHgb1mYBkBaT3EkQfWqZm6npmyS7yWm8FALaRVw9AALn2fchXpM957N5vBfcRcM6YVwPSoeJUvZATz",
  "key21": "3o1AmX8cgM3T88hXWbpaLypq6uFoKvJCzAzQudZ7u6qPnnHboR8iZEuY8zvGRiuHf2TaSVSwP9mNqg8wPBUgx2BY",
  "key22": "sVjLaZ7oySCMfD9uvRGqgCbMbxQzY1o3wYJSHYpvkf8orBP7RcWfTbmB5BnFdFFaf41qxyeiwe9ny4BUQ1UN3Y5",
  "key23": "3PrT7qx23ap4dL3nkD8JoxbHBMUiJdKH4YTqeTMsbFQXvJbdwkkSEyWa4KdHDfrPAk226Rxmscein4iyMwSAR183",
  "key24": "2efwNE1ZdJPYnTX39NNk4nVXDbV3PDoR9YdfGrakCED7ewWA7SRckU7TxSFfGJa2gkYvDMrMoUvwL17deFzTKM9d",
  "key25": "2u6djt23DyP3hQ61ysRJLeHM3pPctuMSyXFdaBTTasngE4A6nowFgrE5drEVfBES7v5JaePVQg22iCmC3UVkQ4Hr",
  "key26": "4tyycuU3KunDvqNLYyeLBKS76bTWtaVkRxVw952AtPydZoASnsVwkGuUVmkwcUJ7oRuFxPKoYWT6mAtnwQ5zpCkB",
  "key27": "398QfRFY8pWMopi8cLcyCsTEFiUXb54oP7tLWKBEZvoRh3XquFUDEusEXe9mw98tsbbn5xEXHbKhZ1fZ5rChP4Kc",
  "key28": "2AXw4aPUaRoG3VEsYNWDxj5X62bbV5eesptXDRUDthMF6YJnm69wj2QVCYCfgmeXjMmYzsuYz3nGP2As4BTb6Sde",
  "key29": "qup4bXNJhsLmhTaLMsPYr1tRcydMeGvjVJhhRJCDgd3XjiwEvWfnimEYKc5zAmNu1W8AmR3S5hE3BRF64yTe4jW",
  "key30": "3QvKkg31FHYrKyzsoRz4PiVP1GhjSwfbyWYLxGpUmmXBbsrhUfGmpFbbwSCVYBFT92tHJSkcVvSmSrLAktCwZrqJ",
  "key31": "5J8mMzuEtmwmpYm58LcP4NitYLc6N3r4o2Fbu1MeF49UL9hw4E54dyqRtiNQrEGxeSYqPVBrY82JJcHVehtRnjDY",
  "key32": "2vCm2adpdDKMwMxz488S7ioYK8v5xy9cH42vD18AJECWhrPG7jc5yHpcjWJ3QBPvKUZEpoyivJvzjoxcVLP58jaw",
  "key33": "2gqSCT21yyPXmqjuSaDEFdzi583FzRWeRtKnEtMS5arwA9fKJgqQr5U3RcLmyqjrCkZJifUxGG3v5korPDE5JwRT",
  "key34": "5xxEbAdZsxBvqdYEjLcyA6cJ2ikEzrrwPqfrNzMYhZUHpuREiGTbjLPkeQeJfzcEH9XmNRwF3rBcGfDSRDRJ9p3z",
  "key35": "42KLJiiECXpwJwSPDKqmebEpeUGXzV1ohrD9wmbbzLxZC1FKLcsurVnQvT6UNULV6FughkaQFnwUgaEVU6oFkTaE",
  "key36": "RWe9sefrdU5b4kVyZYugSgR15EPeW29PwBVqVWsk27BtVfCMkhjUyheCchbeCZdTHJD3HtFEtDYxAriytcySH3v",
  "key37": "3j8LoMT5jeP57GSHbbudiEuXUgQzWkWFpqnRPhe8fUcEKjNyracSG638nYBb23i5KuQXfqvSxFsdo8XG928TYjmP",
  "key38": "2LKhUT9BDMLxJgSWmD2fYza6auvoFgdPuwQLFzMU1EGuxGA4BrLW1tJBz3utFV4vnmgaA8iFFKzDVqULtL6H515Y",
  "key39": "3KGgAzXrjA7Jx9iduaJ9VuvErDLzQuN5byTX9zcdbzskt2xoxYKyqDcn6Yyv3N3xZ7Znkk5SJJZxqQNSt3471PrX",
  "key40": "3UhxzcNpcdDgp3YCfT4dJ3BbyAUL4FXdKVyPMAurZckhvAufHRU3oYD5MT5et39bFLPx2gqgsrATjZYR13rfi1pg",
  "key41": "4tuXjrtobHZcc3g37wVyqGk95RqP8KyJfHUJqZSHModngDKFvj6o2XXFHkFQDMgRCYCyd857timFCd1cMD15Y5mn",
  "key42": "yPUTfDv1LLwM3d5bqKSCBwiidQUGo1CjpwDVwXGRkbwmz3uKVJqvSDa9XqugEQBLc9CsE2v4SE5W1Q5SuRWwjPr",
  "key43": "2SmNRLwQbAHvgv7vbh8nxe23WN5hjt9LhNSigqbS78KnCdvxTzJvsVJUPBKQWs5VwXow4S9Gpr1wxY6gSCUh4Y7k",
  "key44": "3HfyAi82Nn2YWGfxyLoAUzF5tMpho2WwSHAJK8jKpsCH4szF6pmtZuijmfapMteU9tTpCFm5GHbYDubXmByRonhY",
  "key45": "2LXW5TJ9STcbwZc5cV6qq3SERFzViKAQhVmjZGfoacA2zAwLLpa8hvUMMQzE3aT9YQs5WWZ1S5phdYFSWrgXFc6U",
  "key46": "51xLP8wn55nAMBEKG6AFR8VeQMqyVqUqWF63XS7ysvv8Kjn8zf8LzgqAbG5yxZK5Ba3KFDfKyHEpPRXcvTDujgja",
  "key47": "NqNJFudbnupCY7hXcyJt36u9NYXiB6zHHCQbQVfYNuAMxyxSkXNpK6u8bGnyGJoSr9v32JJuV7Z7HfHp8wi6vSK"
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
