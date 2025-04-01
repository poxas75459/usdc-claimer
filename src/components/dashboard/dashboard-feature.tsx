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
    "3beuvjPpwbr59oRjPLP6qpCKUyqRojWQTFxTAhUJph2pWuEBPM859kQUqEkJt9UZT9mpc8fZ14buTmyriQeDLjHK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UUEfCiTngae7EqWQT5YYaQVFTB64pDcE46Gak6yVUrst2Fk5fyDNQVC3vcZSaSuxMLhBeAsmgoC7vU9W4FVmYC8",
  "key1": "3PnhVx9RTfL2bdibdfwU55uVdxbmzR47x4TvzPr2gREvMwERkEmd7r55XK2PPHHcpnrQh4N49XZ2wxTAfNn33WNa",
  "key2": "3nS9eaPZk8TvScfNVXsnkv44VbNRhn5HjRA9owRe1DafFHxG4FCoNj6VoNMUz4YqedyKofH7Qu7ufqjLZfQpq7qT",
  "key3": "4dtjvZgXceN6cxRi4mMtPBepy5XBP9PXQvP3RBTm5PK1w6CUFrwq5NFQbohqW3LoKQrk3LspiJyfMjF1pQTCkMbr",
  "key4": "5QPYPUAZQKH6bmPcPK78Dzd6LCj1Ec6GAoRt55rtpPGTeLRhG7KWR5rHuE6ppWyT5EYw9ADKKDtWV6ZeFb44uqTp",
  "key5": "KBWMYZCKL79cubVhTvb2As3sQBbq3RRWta52AY9WLTRhWqumPsmfrza2VeeEaHbU4sFf3vqY4JbuaW5ft4f7k8Z",
  "key6": "2Hj8STLfovkmza2syfhVkjwAJoJTdfLG3GERFoT7urTEp8prY3ypsTk3bddZ9ZRTRByDEvrLEw1heirCtm3QwAFN",
  "key7": "fFHsaE5zD5h85drt9Dp2xMY5fmiYoy7zpDXSPdLgqb6cfnbuhXXaiWB7HH9bqMQ8WrPKkhcfHiAvKjGnkwT67Te",
  "key8": "25cQ8QCtjwBp1ZfHmDww4nzqnDWsc1uKRfub4moqZiWtUc9hM4ftBFnvrhQsrbQ77EEjVWZeNG5DDQAbgChwQz9e",
  "key9": "5boTbut6HynqFPq8U5DHSpMJ4XFCurRDgVcftqrvbCbRC9fXiC4Lj9YBZf8bSHB4m7DvBFieC7jQYjKBXuZj7jY2",
  "key10": "573miTfUPgEyc8sydWEUYqKioKVe3eNDTxhCvdenZFraVPZY9NFNW2KaCX9e9KESxkCb9JoFKHN8LrnNi3bA8QWm",
  "key11": "mRN7UiEpYdoBbjEHTr8XexnbGUmt2ppHr5BjuskDTgYuNa14nR3tmo1cwCtKgLLiDd6Ce4kFtbbHbVL9eDUQgFa",
  "key12": "5TS4m45VEbf6ZMrQnvLo8DGs7QYVK1j6zt5x732QarNUXa6vkZpDpEAAfzsq8tq7HdgKy3wtb141agjsxRxSH7R3",
  "key13": "3BZaSQt5aHsyncWRKQ2djF7kgBaKW297Ltf4AcBVdfLEBHsaMshtxXdkudqaPfCC24Qg7Mo5zpuwgF87hXJeF49u",
  "key14": "4yEnhUiN6hdU96Sa54aXmk6nnS7GW8Q9Db2BTWFkaZqf4pAQwTX3jrWdNnEY54Pf41o7rYP67Tcv8G8i2tmjDi2m",
  "key15": "29woHwZ4P7hZc3xzVj5PPfLEoKpSnLL7PPr9585Pe6bgvdQe1q9Wb7tW28xuo5Vk7PWX4UYWysqNrBmzL5ixGkgN",
  "key16": "5BfaMkaENMfLEfZnt73VzMUNYiDVPuT816ZQneoyk8qbC6N2DS9TB5VKYMcApfHv698zc9gP6cpFz4XTWkzbnUee",
  "key17": "2FhmUeoTnkWXhRE8uuDpvv45DrRePqyi2m6ntCrGPGihuswPQxUBWWFMngnJCuPLR7rL1SWdEGAwP11JfBn7StKu",
  "key18": "668Mu8i8Xty3o6DiJb2kKkUvfUEaDBQWcnPUWTMkQAsqtwqbohSasoVZ94gyrg8H5KVet6Mo4pmLQSSHxtsYhgJi",
  "key19": "5CMJQr9UfjbBiDvuwSPeSfksmAoiGLoXjy5uFfe4Qr8AsqGtLxdAc7e9BEsyYgz4GSM4yFF1ZU9THtJtGwDQ6Fd4",
  "key20": "2pYnqX8PYcL7cDVbSHFQS8qEisweER9h7oWDTeX5LZjdrToF8aCZxhooN2MU9TevoiF7H3eqXHKGvNGuCVfd3trv",
  "key21": "2w8dQg95LBqDCFbGxxDmKmEs7aT5XfCNJMX2KVdFakAbUC9w7URaECoUvsjcSSUJELpeXQrKRahBL59Z1pYy9Rmi",
  "key22": "3Mg2VdJz3QsAZx7wWWFQyQx3EzoskYCKWoo1nhJQbzeH52JPN7iaytHVskdPH8LaavTi1uB15DvALb5UWcUxeDdp",
  "key23": "4zX6GNRNPjmJoSwdnSfu8H8tsFPg2HUQi8uCJ8Wexyer8YwfEXKKL36D7J2QxKSSmSFwqmqcqFs5unkvBaNzGGoZ",
  "key24": "w2c62EWr8PCf9RcZ7UnT1v9PG2vUyPJwwQWGqeY35QM3cnwH8kZdLWLMMjYdr4KebTEFUmVp5djvuTDgRcJVc4Y",
  "key25": "5D7s26Y6KkEQCiQZKqSXHKYW4HsFiu1bTwzAqb2vybrUavKZvDqobXra53itMx7mzXR18AP6oeDgBQkvkgVD5YQ3",
  "key26": "3LgWVaRZwdoRgUCQzSaVMtcV1h3nCjorJ6RdbZ2JhddmvbniJwV6CCZxoNm7AU3tMRXgHhq7wY3bq4CDz5DAGDzk",
  "key27": "5uA3F8rtMdgjLJK51i6NrZxWF2FekBGHbjR7UMxXhquYyDaoVfE1gJbJmDV7pTcdhZJL4DhF2Cn5p7y9586ukmTB",
  "key28": "52XvAJyTMWwh1AeuPwdqurFVSoGUYbdDtF414dijx9fW7eqm8HKiAp5MJJfsrxDyDGNF29LxTQUbuFP57rzGRSBu",
  "key29": "2CpeCHrRvQbLc8mNZ8ercargfBs35BTkpP7ve1pA5ki5qWMjzy5qsFWiMat4JuyVRd6mGp6Nc58AQJR4vwhBRiVk",
  "key30": "HskdS8MRDZLLMr7U4U9eg9pjaqdiQXcFHHmcDmm1xwo7JTXUhY4NqS5S6makohVb4psSbKhUeUJTMYj4vERdJFm",
  "key31": "SSN8mPkpddYhcLPn47kHZt3XQ95LMtLQ79N67KhKVBtX9DwKMp3km24wWx1zsqMKwBCzbPR4N8XhsNRZXT8jN9P",
  "key32": "3i5whNbh7CeL2wCST7Qx914DtTgr34Uj8pnJ8FXXUt4pvkBQUhwSvn7rc3fExcioHC7LSjjxuvsoS8mYfHJtBRdB",
  "key33": "4ZwepLJyKigpWRdr98EinvpnMKDBijgVJBEWrKac93qQgRKmcxPtoTU9Npuyj6h1oJLGCKfXhCEU2ZR5tXBz4C8j",
  "key34": "3z5zgQzHC7WSseGuNvjCMH481QBS36XzPdd7LfTW7jrkYqkXiW894Z8RwNDoqnTEmk3mdMVk2KVWRoVxKh1JkZZm",
  "key35": "og67ukZ1FsNgx6dfe5XVmBTfEr9MtTHeco9nok91ePesE3AtKa71mnNw38QJx7LHFPnZBsYu3BKwPL81DPsqX67",
  "key36": "5bCTTbN6i38V5qvqoceyoEVHvZGXsp7hqs8ZKPRLer1xB8ox4dpRVcScNmbyELe3h99SfeTQoDKobk3oLKKs8r6s",
  "key37": "5PM5udE7X7w29HQjqHHF5fuUpkuvZTA6tXkuoz5h7nCizX5gtUUMZVXeH1KazwF9RMSkV1j6wvTuEj5P3oJBZ3sP",
  "key38": "3TMaEGmcD7SfAvYSNhNNGdcJABWE3aZaAKbqXUJBzwnQxvbg78ctvhAbTSzVngnES8JWr2Am8r1JLPWPURjZjtzo",
  "key39": "2Ac5qWuV2d32YwyaEKrZYNA2CoQ8Vw3Ptd4txjivFQ2xSVr9THae4nJNQebhnUKUjiaLLuZu66Ew6Xkh1sTi6Q6t",
  "key40": "4HepzYjfHqeRV9qzS4SuBuYBag1FpG5ze3pkZ6kw36fb2fHmALoRGHSFyAToK2UrTH3aDZ1sC44nHGcyhkJVre3H",
  "key41": "4fgBKMaroSKQ2dah4sitg8yiYzrocHF4KZT4jfv94w7GtcQ7r6bUE3RUup3BsU7YCGsE1qqr8PAdQ6ukt2g4ZH4b",
  "key42": "4G4AikQAHFBVfXboDuQvi9N6Ysuvmsn1pTgTQxjtubGnq7SZJC5y7MdZYsfKTkFCQ6tcvyXom2khWQPdb6cPr6Rg",
  "key43": "HXbPtMMxxAGDUkEpTAsvFvCYGQiGdS68QArMPE7jUyBNGcTNFEpy85fSSeq5XV69GE3p77NurMyCMN3jXxqM6qi",
  "key44": "YZrRtYkaVKdmUGnDvT3WbogCr5Hhqgtn8jggq6FS7nWJUcCrE5FRM41fE6m2cxGNQy1XLxyQVbTqME5QRFPTWpb",
  "key45": "3Wt5PdiXTk23MGGAatfWZcGRm3Ezo8ybHN34F9NKvJKwbrEbCJPBvCjTzvVp3mSr56MBecPkVqjLkJhAZQF3zciG",
  "key46": "3xRyG2TRAPTWimAWGdBokSJHqYYsGaF1cJpwQdjfY2C7JN1ubzhsVJC42MqMrabSoQKLjdhfTsRbthVTjCkryW3s",
  "key47": "5B1viBgkQ8tzrdsGtmKh65pWFBm7F36w7hbsMtfbkWU7692AZsq5TfjJ5yJFT8MnbeX8MC3dwr5aVpGxWK4YxDbh"
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
