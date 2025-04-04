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
    "41r5i8rxpMbP8Uf1yoPp9yDZnU3qMfY2rJbXEmcNbGzwPrRuH1Pq9hENF1GFHH97BGrSCjHQ36f7MpM2SsZA8s6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hPoisK7pCqpTLgdMqHk4KfP4KvTbPA2VRw4u76j1DYGAbDafFcveZsCHxRVwvd3Ai4jJL6ELGLeJAzdHjWTuB4T",
  "key1": "4T4ateKYijsW1KfEAVuLTwTxq6PobK9adACLM414pV9DaTXReRGupYTrE58wRCbvkSVjV8wjxzXQhMgZfxabGink",
  "key2": "DdhYHCoDjZ7BmwQDDfYBSVUWSPvEXUCAgEwqJvadXKNriqru47MjCZWW4enRt3sRaK7ccTSdh499Yk9xDMXZoMZ",
  "key3": "R23bUhuDSPBQWatekTYrYmjWyLAgFp4dHo4gcxjWoCmQUGV9199ZJhEzqBnxZQHYWJU4HiSJSWrUh4BeD9JU8Lk",
  "key4": "42hFvVSZH7MEEhdk4teVC9GMJWY5gSDK7VGmgpoXj2stLTqoyzyyreo4BCM7JRu1kYL5w6WucH4ECyNdV33aBjbP",
  "key5": "4JPXkb7NeXQLoyC7o6qGVHDRAUyoTb46StS6UBbtgBv5HzFJ9JoZSZPqAxZx7J5unfn6jt3MK8P4tTXdxx7NuM5j",
  "key6": "3BhsWCFWWrrMEnG2d26N6SahRnHcH46KoMs4TdSJ9haKfKgL48KjXHxs9JX36FJoUPC4ExRuqeUsZDA29pssf6aL",
  "key7": "4VQSUSroh96JzKzJKY2RLQkq1xkKDJmLLa2Vqn5ykzwXkv8aus5jkbpqkVEHuFcwQc6iPDfDyGZR8Bxa9PxTRSqS",
  "key8": "3foSsnMgqV6TNWM15sTDjgwk5qpcXthrXKTHXr4SUtj8UkoRzTE3GRMS5oNHt58mz8jgvSqmD5P9tjfqpcp9um12",
  "key9": "42KoJRxu8AJuChTLMQGNqmW2E2TZaQsDsgS1v4HWuQYwWZPqC9speM3mprcQ4GsqZFAE9Pnamaa5X1jJRsQpAps1",
  "key10": "3oRYWyF4rfruC7zrkgvNPE8tVhvKcnwMuFpSPs5hZ6re1jHLVkeSNsKC7KdyLrm49MRXZiJAvydXXtu4e87zXhGR",
  "key11": "5ciD2CVCVruvip2UrGUUfFg9C4xbuVpf3bwPcboz2iFXingJwTr5UDVYc3Mw88jgrvcvNwXiBy5ngKBJUtTEuEzF",
  "key12": "jL8732j28w1qjHzm42qpMpapUYojH5mCbEpMEA5gttnHiCVxn8eAc1VSAckfvahkSUvWX3cvFPzuMUg3UGsGTZF",
  "key13": "3btheEYpin2ZDK7i3nYkg4SDuv9i2Z73oZGnfEFJz6SvyPgyu9DBkyMcPguzF7D8ER17eco5XYjQEZzsN7hmFQtK",
  "key14": "2BAbVyGAkeVr6bKzx4mGYRys9oBNyLreQ75CFETpdRXBgBdwjpgBrewRejUTJtxunmePAhAdZsfdCnmxzuVTmhiY",
  "key15": "3mYUahn956EBWeVpQxAoHgk1xvg3mnQ6v8cG3yS3tq6xznzPkVwF58HzFpJuVMutHhjehSYmEzSpPJgx7oj19YCC",
  "key16": "3uZhbk52D4mdPY9kkvpiBrmHMksroLo5MsdN8Y4L39yusjgyASEeuXpHJQ9CbnXJtgFhfqZ7ignibZZrH4k4LEMK",
  "key17": "4CzZ2TWv8q2UpsAzunXqjGzXqkLWoNwTefbJVffTNdbCP4iF99b9NGeiZ2i1B3HnV2BK3DbiEZAT2UjVsxdywYsY",
  "key18": "5tBiMrxcB1p2vzYysE5ibsxeQqXonEWC2tn6LyyRao3VADBShbDy9rGdn2C24YPetQGotLW9ev4X7TjL4Z3bJgQP",
  "key19": "51o4v56ENYEz1U9My4VHUBs6v8k6bixzkDg5KTS5jVcMh6SpMEDUGQYFnPZMFUUtuYKKbo11m3TLhN2V5Wrm9DAP",
  "key20": "4NCcjdtVPyTzmg471tQrLgdB8RBSYSTU46vgEm6euiMDnb2773vqALwJ1NYkwrw1netiNPM7aPrgAR28wDhH5qLr",
  "key21": "njLbMDP4JC4pzkRu8PgwpbbedRrZm4q2jhbePZiFgMqLhYnjHgrqyvyfsCNWuV658L9yNyUrpBzkYTve26eM4kv",
  "key22": "MkrYiqg7NLb9q6furkpgop49tMA6S9zTXySAkT1H8i9gFjFkQMjxv19KUCsyvRuHFToC8bTTeoxJfgHjKyHJrS7",
  "key23": "3FqfkSh8dmKyoTJhnRJQT6ggwAs9vc6usTmFCvkhPtamz6aTnRyNJHf1yLFgyXGeayUV2RWa5JNHww1Zc3fpHnro",
  "key24": "3wAkWn7nzAtC7n5JY4r857mDMa6uNcKKUUqDPoSKz97W1fpgaRnDGKZH6aq78vE9rnJTexJ9ghXuTkitSs5qxNPb",
  "key25": "2WZcqg4sB28rpQb6JYM2PtGomMswnCrLocmbMmzpVRHPpxvq8DHq4dJvD1CpryvtVcvVdkvkkDM5xkVKq13mwKH8",
  "key26": "5rVnT6H1z5SNNFioqeK2grQypDdVhUvKo6TncgsBqF265peTKPEPMvygcd4pPAkWMjjLSEVVi15U7omGXgZaEKk",
  "key27": "2yMc5i1MSTB8Dktc3ocRXDL7h55Xgu4svRKmfCrbiKSk3J94jBCGpacUza47gPQYDcxrTjNAb63m9jSrKbPHPyez",
  "key28": "3LbnSNU3N2AC9MAUyrLsYKZxT5zcwDZ1etXpQLf4EdwHC2Lu2APJVTQhmjuwmy23sx1bNPkwkbo8wKtsWLfuDheN",
  "key29": "4sz2nTLKj5JjZv5h11sac5n21Cw5NAthnr3c3KHWKp52x84coaJq1TiCwG35x6QD2CkHNuoBqJBrXKF5bTy1xRzg",
  "key30": "5AA756ezsa1WdrwqDykZR2BaXix6vUxa1ygCrPCsRrUZCF7zUnzC3LCsc2XguuSPJC9oAmPU43kUeynuwKexxvyX",
  "key31": "3YEo7xp8GtiY4vCyeDjXUBgdfKohtRdtsySeBroPrrRyRRXSchiVV8puojwRhn2sJv7UR9BfUu413yuJxT3gauct",
  "key32": "4Zrx4JySzbee1pgZbQcYbYc2ddezTs9XbfbWQm7LDAjRtgZePtPDGLjJkKD7gbfMsSxEiavrqCoNnmnLkNvhp3PC",
  "key33": "4cFKz6y8SFRF97xMD6yByxaPL5BCFGyywP2oCiPUjo3yrsob17yDRGrEyD3dSrbGtgMWZoEcCNr75GPCCgSaLQ45",
  "key34": "2cc1EZcFRVvqUhNTHVgWJ1tC2jkD4qgZSH7XFZpTk2FPiPpv79SW4VzgjTTv3sbdEfPQE6E4XFEGoKM9b4BvanQJ",
  "key35": "2sn1AduTgto4GgRqjQnimJEor5FuYekK3Tr8TDeTBnfEvGLvhFEYLyj5MFBcrChtxfGWqw1LgjyTQYJNDz1TYzFi",
  "key36": "Tj1Fmy2ixDHgd7XUp7N4iHCJKrbmHkNwZNVQcYJGAwN3joMXYp7erCyeMcyuHjtMv5wSRXqePdKsQ2WMtt2dnS2",
  "key37": "3w6LMinGr5T47W1rsxUVDDt12pcFi5qJhDt2FR7wWER7rSBHkZUxiCkvBmn1EUwHtF5mCbxEhcgyrF7axVWUrUC7",
  "key38": "5h3RwXJX1CQ1KRmRZGQVZQAkRS8CPwfGdB9FSRtyHRHZuSdkFZWU6TKQZ5hMPa9yprQoAw8hmNJYmpEPdC9Vq9dv",
  "key39": "4aa9vt5FuCZ4gD1Y9vcYEAnLTXmgJjxPEY7Bdcp2r5mjMNTmBhYbankgsPcAXCp6cUx7H4xbrpLfE7hcGiBjVVYy",
  "key40": "41exezvRbMiNXuW1wPUxHY9X1d8U2Gs2HbhekxSxriQgiFd58XjSWvJuwf4ZMMMBu1iL31XM4n7S9L9CbsqhJzqU",
  "key41": "3WMw7ErLN67zabNqy8dQeoyxBTie7AWX1b35tzS24y5cUx2cpXbEUXYK4zgAogpzW7xNQCSj6K76QXDuRBFKuKpt",
  "key42": "4XWSk4mudnJf49sxu1L2k45ULjiQHw2tByJT98DuU2CdnoaMxij8f1CqQt8aH5ZGtyMA69mUr2D173dedXmcMHBU",
  "key43": "4QNGcwtJB23r2DD7AU59cEU4h6tijiSbZJ6wGsZvThrnWqkHHTjdom3q5Z4Bwno6NHfD4UHSsYP4rCpTydsE2c8Z",
  "key44": "5eRFnH5NsBUMCGpiyNAjBtAKG28VEueWZobVySirm6djawA3NW2PaP37jMpHRUNFuaWoaTupNhbzbPJ1moMpCXrH",
  "key45": "3PSJXHKVvtn8KsfigmeHHSan7QFWjqpVzYri7r9aiRPrtokprkhENC2xNr5rrCcQPM4d9bhdjooXpoiFo6jbwhSV",
  "key46": "4RYYEauGiRjj2Eg9NgXz2ALxGucdG5AmLiqRRV1cYqoM7XPfpVCe9ymgQp5D5aHf34yX8C4NsBYXF2PBmHVVs8b"
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
