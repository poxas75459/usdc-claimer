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
    "35xY2g3cqRwKg6eYRL8GZdTst1Jws8RZzjzpw9yRRt7nozqhxLDzjRo25zpPKq9F6VAnSX7EKtJJT7Qe1e9bsvcW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BoMmPbvWrsHBteB2ZLAZAVMuPGUNUAh5rHUEV387QLUFB7Rsnn3cKNJ61b11tezfScfVdzHGoTFNx6h9HYgd3yE",
  "key1": "2tJAJots8gCBPvdw9oMUcrCqnpjrwGv1JaX8eNt5LgxBR3Q3WAH2wWDNkuntoUEWCiby2ddTHtVppFjibMKpf63h",
  "key2": "4BeyMLFDVKQbv3fjrzARqY7N4qsnNF5JGs3FtuVTZypi53QpfHmac6xWgrZaPiH9ZVCueSJy8FmzDEjNPpCV8b1t",
  "key3": "5tmmj8vmGqQp66bY8QRvAi3miWEqi4aNjf4D3pubNK4FJrmM7wYDt2wCSDGvgqFbUcWMd3YFNNEeEMzmnzWBhJf6",
  "key4": "3reJM2ULjd1WfvL6cdbX4U2cKKCsKxCWf7BYYpAWDDw6xxBr5W7tii4hFNSvwepyj8yHuirKi216se1xWAx44dxi",
  "key5": "1mC9XTdtNJDngNxfG74NsAkw13MitS7KaEdKjgJUjt81oFz6xw2aPMEC8qD93dyf3QiMXSXfZThXvC1MzY13gGi",
  "key6": "1DGQpByvDgifaKp7WQTiaAZ8hgfsVkzBz8jR8ALL2GNh1BU7iR4DpB79bDT4T1aV7GKPjMhk62VTGikXBnr75eg",
  "key7": "5VyRMvfJqZjSYFVkCZzNNZYgHudNQsKxwxjwqjHHtoYnQ9t4NxrA5F5M9humGJMBp79tW4ymsGBK3CrPAUZ7haXk",
  "key8": "2qokiWkh5L6ykWaq1Ehg7kKYm671zhDuM34Ab6JTm7qy3KuwnaykYQAds3NAMMM1BRc27ph6J9tgBRAULPmfmYYi",
  "key9": "chFXsJqN7mLDzef3m3sSzPRDHqm12WziUViW5yHoK8DwSuHHhQHD8rmoXR4NsQyZ16A3cgc52uUdowVJVMf9uiT",
  "key10": "nd9A7VURrdGDoq8DajGaqJqxPFWHcvEVu2fCH93bxwyE3NzmN3pVcTmwaSrzxFZW5S5BT51mPDf6KmVTGzV8jRs",
  "key11": "2ob2DShZqwHEFAvyedkLSCeytVkLqfxAwz2omTHaWqxJHgk5PhZmdh1WvAcSfzwCgAUbEUMTUfxAfEaH6uBACJW5",
  "key12": "43RjfvW8R6DNj3vMsw8neRr1So67eHg75aNNiCG9yxeun6MB52NHct7c3CvjvCTCHDasyHfXUL2o2jPdVuZis1iz",
  "key13": "37j47mhLjw9ZfrPi7r938oywC2pnpimRnrdu1LFjjPTrRFVkrPmKRwGZCqcRovHkE5kTRkLTgDQkyjUYT6MMUB7J",
  "key14": "26bhvZS2e6c7Lsq6GoghaAes7xYDLtHwf6FBRmKVSmHqKuV19z2aH6CfndAeNGrX4fMxayPSv5zLzgNcPUnkh7fo",
  "key15": "5cWDH3JPs3MBEB6kU6LQuEptS2A69bs4AP4cUMMM4zjzbprZtQSCLoc4w6KkBiBjbvMuT2pwKuTEbqakB2onFEmT",
  "key16": "4RcceiJajtcsxQcjezq9iL7JtMMiVR1GWy5oEXje6G85jQYNfDy3s94L93UKod2xnXdPvF6jTwv5n7bE4zCvGbzF",
  "key17": "2vTTKV4qebfpZAxvNHWuGACosR6GzAf8mqC7pJwPqhYbD9yLSFyEYjjudwZhDMrUSgRr54KyjyYSVPzFdF2DnMSy",
  "key18": "4XY1s2vXxoMZQ81aGHaKyCRLu6M6rkdsYH1M75TjDH16V2QjpFTmFsT6tMT4vZ3aG8odyhXuhSZpeLu8BofJ5JRu",
  "key19": "2325Km27zLfJ8RC7BUnkD8rxpTcEA4kkJD3LFW7U6qyrd7MXtssDYEDWxULA3NeFYdRgEnBTrCE2LYzHhBJ1rPsY",
  "key20": "3CX4sMeraNscQ74nWKMSLc5eim6UWVWhZmew7MHpvPZ6te9hf29njpAii9gKLGPEYTyS9WgYH6d57WfDCRBcTP4T",
  "key21": "664yfXsCuc2j1Vy4ZkCLMnJu8q9Maj3aBvdXRDgriQumwHkJ5wEsc2aknsLofdVE2dKQwXojij6jXrbVdj26KHFv",
  "key22": "3JPkKfsaF5ocZENjUU3B7NPHhtdk48cbgfo1zCfvC9XGUuweHo6asNj3DVN43W1J4dtPXGQePyWtHxVkmYGmaJtr",
  "key23": "3EcVBaCkkB9eHeUTeYir34rZw4pH7sZdeooPFHfkt8Rkix2YVS3caLmhesnteNLNXWrLjno8jVsFxd8yeqLbEbLr",
  "key24": "5kNb51vLC9SDhdfHdN9gmR5bYeCDTUiLSxehVcRjZbsC2w3vKuZjEwsX2Vcir8ZgsXNAANKg81jXbhXmZhB6sK7d",
  "key25": "2E1zKHEPBZiBMotopTLkTnjZKX1dmiNCAtZe8inrXqANJHEfNxXTGhCsAXzio8cTbvRiRFP5WpzmkdpaUTSR2oCB",
  "key26": "3HNH9BAgjxU8JA5AVYy9zFWF48RwBvkRTRF63rz7WPEttR7Tad4gDCZs1yKDnHvg6MfEJMMFSijx41f4KHc1xAW1",
  "key27": "5w1zzB5zVgNgvc4UUs1dbb3b7wAy9cA41ak9HEPw9yMmgQxXaZPY9NmeVdJEj4f6uZRDTQtougPikVyuVv1TcH98",
  "key28": "2swXrvx8Zc4WsxEQWsMzN5NkYSGMEwZWS2mxiXSAPzg2bYvgB6Hv2kj2M6mr3EzTHJ85zJoGf4NRiwTduEQAx8bK",
  "key29": "3T8EjsxEtwtx39i6quac7qzSUcFgK7GWt514bqZWPduLkFH9wdnnxq8yKsLVD7YKYCwqLFL3j8UmXEHxQuTvZEvQ",
  "key30": "5eFf1kERWykq3JUPucHXBtq5KRWrc3aC5EP9qsge95W9hzddrkWE4FywB4NV494mwSYDEs3m5nwmaxxKENjqAy4X",
  "key31": "3gL9jKKRoKprig25uZcygnuMNNfb88rPvusV2nW676hD3nv9kANeLRQfh3FRMWSaar8zmbKxQ2K935mXVYc6gE7f",
  "key32": "38QZsHtZ5yNVmujeVZVfGKpL2w9auA2gjrv31eQosg1krjehiN9cYnFiR7E8Bg9oARWGnDM894chzhC49ykvPVw9",
  "key33": "4zURe4YHixr1b4H1ZiMp9vw3D2Gomf9MWciwwf3e7WCGAm1SMhCzRU1K7fiGNXMfXcmUZHRUTJkSq6R6MXbt7X7x",
  "key34": "5k5ryRxM4FtXERLztqwQAb7Sqgun8CEGnYPep1CLHXjX2RSYwTdLLGUjz43uDP6Q4Xy7kEb9xw3XvNi6b8b9UWA8",
  "key35": "psPuGUz38ctezyc1Fpqbu3evSKhrJpLmbSqS73pxpHsnq9ia5z7Uzez2opxN3QYLzUSfXEoqfhcdiwnmSLDd4jc",
  "key36": "2Mm319rPQMGdWUNDtaLroRgid1zmbvS8taZEV3kRHnrg4mxPDLfpQgCXdDi5nTWVh5NwmxQzMYy4ju75oaG3bKTH",
  "key37": "3BrCwPRExRKwQTn9jNpY2x4tMugiS76BjCKeafi4HBBYD7TvdkC1dtxBcJuHZsacNyT5CaV3uhBXwfZ4HukxxwHQ",
  "key38": "5LQD4RpbbcY3jBApghKt94UKQijEv41VmSSHLckDg4U22WZVv8tDmyQq6sLe79rXQdAg855s5kyjLjbfzeoYFnj5",
  "key39": "4ympwNsFJJmghEMbsHcwPPPV4fyA7jzSk9WiF9S4B5Ag2RhvND3TMX1T9gxG1oVqpwFUE4DowWZZ3bsUBsbhm8m",
  "key40": "5eirEWpKWzoGdNKhViruYmFSNstg6zgMc1tCkExukRt37gMvX8RorvGynhjkd5YQ6odQEs5pstr6TNyA1cV5ExKC",
  "key41": "61BgjkUjQysDRbFhS995Ci8QzBRoH4f1wLbe1caDN5k9kr1ZjyXvri9VoEGDr9PDDH8JA8ydgRKZGezD3e7vaJdH",
  "key42": "2eFfUrjiMnYxph5hbzEPdoF8vJRT63Gyk97nCFZs4dVr3hvssDM49mUdNYJ3hWdXEu7kvoeg1iuciHr8iRKNevGp",
  "key43": "2mmwyRbwQwv3vfmPphZro1dgPShH79xQTJzS9L9u6GmpP7bY65kk4wpMWKyVKNec9ecikntwskwgzH9tsqN55b7y",
  "key44": "2HDAVTcp2ZeSi3vVXzmAARD4BmZr5n3G7LCsZoT45abYtQJNnx2aEZ1jzhSCjiVFmrdtDo81YrCfKE8HTJcztt44",
  "key45": "4FpKdAZ4XVWe5YtqP63DJ9Jzig7xekJL13rFoE8qXggBtc7aKkmVy3g3aVAHVQGKn9Fu8Pn7PW7EHjMtp34vgRJG"
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
