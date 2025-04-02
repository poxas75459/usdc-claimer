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
    "4jcgChn8ZS3pT9vkJLPHULWLE5gm4Brvkpone8eFWL8c3ppc9cNarqki6wF9zpsp998LEfLDRN8DL79cYNB85M43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aJeLXRmYp5Xj7iP6bmKs4aBbxKHzpj4HMNf6j5t2rBozPdV4rxLuZnQkAaTU2Gzydvbg9qUokb292one1hpnevP",
  "key1": "5C1TEPMSCnX23Z3dLZ9tK9sKym1dYwH8Q9zGj44aRbySP1idyJ7znTYxYJcjNGdPopEpNzRhZ3vcMT1EP1owRXpS",
  "key2": "9VEKpq1ZBhA3GkQLevejRjPwQTt8nC6KJApK78yufyZ1cTwHaxXrpRZDLAjFKgB8Rcoi6vp2tKxYKZDSbzSQkzq",
  "key3": "4gGpDES41UXJVAg1jX8tvG3xb3qj6ViPvbzZzE7xyZokZQ5CxQpGFMtgv7LvfRxuDrRfLooScZuXj1eCPn48X6Zb",
  "key4": "5aRTHR4CVapAbWsjkJyr73XATsntCUcQQrN1fsw7fC3xPZPKXM3V6iVcsthqTERuTdhrLr1hRVddJx2NiyjTTkKh",
  "key5": "65de7tV7opVzGPSDTQn67GqSWB6togVTv18rkJ9jnHiiVV6r2ijVeBEAEgPzDHY9DZHUVjtGcCPFG29D95aZXQsx",
  "key6": "3KxB3xjL5ycaRQjt12qd7eSoDbK6vtiGcuCKVEtfNmbAcEM2kjJrXGSihHQK5Faip6GD86k3izai7GWx9HhYptTn",
  "key7": "4b8tNo2w6F8upusnVVDusRaMUDHMCrhLhNGuyY2nsMcBJT5EcHmQH2dEex9HmKBuZwgaYWGHmu34NhMvfDVHKLgt",
  "key8": "5kVVPf9SFkkfeoNGMfPmfaq28B2cWQZ6kNpipvSKf9YtwkrNN8ewDiRr4CGjd5J2RTyq2LuKgjYsV7WpvkEVKR21",
  "key9": "2i63M6TaFJnrbE9zgQRZtGiDEsyKXVXxHwPPrKmZARfsj94NemXEYwb7mBtLk38s1dwqR9baUnTtaWyyPzkHg2bS",
  "key10": "ZE1qp9pvH1uKsdxFpSBLecZV5vAgKacvc8sveyaQqZYPZXtoL5M1Uh7vpVstdZuHvT8d4Rvy4neFeDzC4yBUkp3",
  "key11": "2Q3DB4m3AzwPStQyC1G5N9YmtSfhmUJuULFpPJ53eQqG1FFXS4wGgxnt6e4AWnoEjNbkotTMR9MoyzEGXchetsQ3",
  "key12": "5QvaTwun9d7Cn8SqPu33UewbhyDTn1TTFWyZWZtXGtGiMA4dtv7WnERKxuhWtQpsboSGh8wt5gpwab11CwBPZnQt",
  "key13": "x5WyPDdKweTxdVXmWuRdhuKvm4hhZDK8zhw55HEGv9sHx5SEunitu1DHTUBfTbX9xHH5qbgAdi8v2vsdRgWda2W",
  "key14": "2i7rgpGyJ81cYJUAaDVmccjUWh2s9K8k2DdqqRN5vgdxn4zugyXcQk2T3p2LX2oSQH1Mia17kZ6yzDSaomMZjQeU",
  "key15": "3k89upvvJviCpHJNPk73RQtEaV6i7HxnRUicDbiCtxgHhTeDVHRUJ9EqQRJEUqvRWtEMHggBMQgXrmvhAKRabezE",
  "key16": "2RGfqosR93GQEFagPXfHegZ4As52nTCstGBNRVd29b2zneWscaDrQNZzhn9HJBPMwFFF4xCHEEHdBx8jmKrzZejg",
  "key17": "4M7YeRBDrhssr1HCDJDaNABYP6TpLfz8rpvFcRYaURczzLEDR46G14eikDv1KmsfRgMod4qHhLwc83JRYpNhfhEk",
  "key18": "5oYLAdmn85kEeasWsrHG1YZtjjRYiLMGivJJAeQbkTokBQEfAjiisf2Q7eD21msXv7uknfiza4aNWJzy3AtPT7G9",
  "key19": "5AiUU6F7KSQuGETrNE9QR5MVPNsUY6LQQcrgAGnLjDz6xqfwVEyGFosb3fwJ6gbxoQLTVyaFdvLosxjrWCGmm6ea",
  "key20": "5VVHHpWWr4jn2xgrwk9NDJgxxRmDKKXgVt4pfWJ9JPj9AecZVLnUwaWWQTbcobrGR6J3b7oMDAUn7mzUb5zTjY4H",
  "key21": "35WBe3hSw13Q4YUTU5PEDByXBsk4HJ7775R4Bw3vtyHxHsH6SzqRy4yadmwGZqsu5vFewwh881fVx1MHrNPJ48gG",
  "key22": "5Cbv6Xfo4jWjA1xBZTbJBJcNyokKav2NKruLripCVfiCWsESyKADKC1c4N5hnckWoT3mDNznvhs1KjERf6ioywc",
  "key23": "3wZyxpWpxQi2ZZQ571AApQSTyFWrRnCoDFFuF5GEyTQzwbMi2iaeXXuAAVoZtwwg6ZU9nCJCT4qpHYQySjqqvkMd",
  "key24": "3bRebCFMJr15BUnPF33jJfPjaxkLGSoGUsGVQsqUpEBcVvH4cigMQ7R3tjjibH2zZiEYRbfkgHR8Z4oBMsyzYZCs",
  "key25": "34d3xbjETrELZf1fopmWgSSN6SpykwiEHSsrszQ6P36v3PUM7fqCy43MTKJuLoMYAxMDV6eXFFDQgjhcSkaVoQ6o",
  "key26": "2799tqdLR8asQK69TwYqbHcTxtUf5GnrftbJUqNzcSjKJf8f3QgaeY86sdUn414dFQnfakPr463WHe2RUZ4HM6hN",
  "key27": "3AnSQxJLhoLCex1aYqiKy6dgEz6th8g2myyBMVoUTUG8AHdXvqoq14ojbQwuBRQrvUUTCUvnFCX5sYoFm8pdyjzr",
  "key28": "2Z8ioY6x5ey14QgQaQG7YKawgQw48nvucp167MYvBTMsJGPPegSTY2Cpi38LDYF9D2hDsLWxKq8ypn9m5ztkKJiX",
  "key29": "3kV2DGQnj2gQ1vTKPCioLEdhyobXnnwbLVzFFTJpevxj3DYnaYQAnsVSN4FKJiL2m1gRfm1SYxKQeJJj716f5Az5",
  "key30": "5yZCqiMxHiZ3Em13as7TRMWF1dMXArdPKgMf6y4X24ndbua7zTyj1vWU9btCmDgzJXPjMhHiektNdAijUEg8J9fu",
  "key31": "EQp7MT8wFDKYBiXm5oMNe4KMbVr3gzytHqy2VcRw65Uo7DS8vGfpmzRoP9XJQ8P7v5nFV1f7YFXoZVcLWauwZHy",
  "key32": "5a7sW7jc9ohUSpwvNDHff42bqpMz9Yohc2DC6QrM68miFoaKjypJDvCvPiJtJN5nyRnBjY12CzM2kr56ss81TnEr",
  "key33": "5GmdaHFDgxRojBE6iArkkZTAVqmM5bPAu6mbuH4YfqxC1yxfcz8todwVgSTf3wDAK4dTS7eFuoVG679T6W5euA39",
  "key34": "5N1DiENPM2S56gFoc8z4Bu64yfbDiJwERX3y8SBa3bJBvmAjngngJENd82E2CKivWPndRx4ds2xFTzgHCQYCzSBQ",
  "key35": "2KRBDBtPzRN1Yg86cwGWUDHtgWJ8dHKbuT222FJgEfoH9p6JpD1Fa5xixajNZ4pzD4j8P6YU8aGKQZex6r9Hb32V",
  "key36": "4Dv9QoxDDDjdVp5vBJdL5mBuFoVqPR1aigQB4thBwHmUer39wpQo5XUQhdEH9CvDtr3FTyTWJ8oXTVGaryYd53Tg",
  "key37": "WpzuFPQ1TVU251TnSxT2VDJrLcwKZwDHZpwtG1cvcVz7G7u8spopuejyKsnNStSmNVMmwTN4h47yPQnHctoddvY",
  "key38": "3w1gP5ej6ysKwmq2NPvDdqhPhScnzupvqScSWqVp44vwGbqBY8mdyo1Y4tnYLj1GVBdmFCZU8QYSfNuEkQCFbhEB"
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
