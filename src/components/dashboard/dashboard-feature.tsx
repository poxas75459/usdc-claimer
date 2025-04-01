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
    "39y8L8LiZkRsBWV7qKFhqAzLbmPEJaWa5HCJgNSdfeuDUquazeAFrgnsuugUhj2hQDbqXcxTk9UcTSCveps94vTd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qitfmJk3hKzaJqCrLuE3wRLAaSMFHz5PNHWViDJK9jXfrU4VcPFvPS7dvPxQaPqpJDJfwVifv9MHww7agPhUQjQ",
  "key1": "5Rihn3q7siqrnDDBsegVuyzy9bBKsVBLByHzdf82A573xSfPfRDyM1TCizXhpJLNYUR59WQQ5SbniwQbALDHT9dJ",
  "key2": "2EW42rLQU6sJ1WH9x7rX8kwAHa4s9tjVqKz4KHTqtPxJXWxZZTB3S5iTDeS69zUMCuvKzryGXKKLYvniASsrHNf4",
  "key3": "3tdQAFUJ45dBaXER35nQW6NJsaUYPnFVUhTwUCgqPiWBW7co5bXV2LkLUtN9w2ZAgJmVbR6gxu5ysRwvj6sHsHmq",
  "key4": "3exJYHLTjF2pNRrVoh7jYsuo9K1vr42CtiVkEra9WfXdmJAkHpp1mdMqs9K7BRsqscsF7US4bSah3f7hSTg5stxK",
  "key5": "sHAhy2bEHLyrStgzDnex1nJnXq3dXaZp6m3bRZfNfEfck2X4kJL8MX1A3WZ9dNvkHRZGWComVS7n61q8j9yikb5",
  "key6": "5ScJtv4yy8qTbq3HGHwfZTEsNaTFb6MMtDQBNspGZzZ5A1LF3vxXtoNm758NbTm2UuGf8VpUjaw3fKisggv4ukCv",
  "key7": "2dZzbiDP8SFQW9RmfDESPxajSgdCbT2wpkVF38F5DsxJjnswkEVzmWe6hT4FJqf5eteefBYMMubhTRPB6F6c99fd",
  "key8": "3imEEPeuhHgN69mazHHxQCuUgtT1vXkJkoWADpwyqGXuJqhxrso3J8NRgch3MhcKVMsdDuBFyYHVFGKCj5JVEpgt",
  "key9": "5Suv6xjCNtB2ZeNAtQAJwRYUFNoVj9LLJ4H1ncpT4gBzSo1bCDjMr3TrzWiFMxFxo8ihw7gLXMkymQWTSH3tY8Rw",
  "key10": "3jCH5UFr9rsZAf61dFMq8U7DRL7LpCyK1EaQF6GuLnjE8VYR3QZt67secrGLg1cvcGZgfLeJvPgaCS2p4AJgGXQ1",
  "key11": "5Q8kM7g7CMpym3Y6JyDxgemLmdLvLYmmrvG1YBmomygfddjPCn6uF8h8m56K78pgw9Y28UCBAooB5QaW486k7r9u",
  "key12": "3HFYoczRcsRXmH79YqSXLtvCL6GvtJ6mTfYCQgH5jsET8sTWXKwwzSjgJSegYQhBwHuACvJ4oXarwDsZ9wcMocBA",
  "key13": "rYer2XbNiA92sRFjeW3pWaYYkTRgaB9HLJZs9aJDcPuwYtiZ6Kor2Ly99AKvYCCPkHnTbJpzR3BAMv81w64eUFJ",
  "key14": "5kUmHTycta2vrsVJLreRrja7mHRhCFYyRN3Rwb5HMGXGbpmt8wnrGkJzKNjyZTQjQiBrUpWCDUyV1VD6bLhgQm37",
  "key15": "56iMTodmpWN9XwKw7RJYBkSDExj79ANNNQwaVEgu7c5fU8r8U3wUgk7QPikE1XQiFG7XnBrwHwYwCPGfJ6TLZzTd",
  "key16": "2dhaBV3oteHxKSm6WzZNMTe8m5FmmBpu18NRShm5jEVCeHsDddYrtA8SDwFqAabut1K648kRGcXeZrBoda1YGgD2",
  "key17": "5FK7VaMVYHEQnrzKcq65stGRv93GgnEUDFy44A4e5uHMMzHV8aGjfjTovMhAYbsTrYP53pcrwUu4f1hD3MxL1PMv",
  "key18": "nokQyiVKe91pZX9tPJwhnpKKcJwUEzJhG5uxJPXnYysuufc991yNuuQGe8T2XdoG46UXfhEBBTC1kpRNERZPQZz",
  "key19": "2v58rooLBfsF3KQQCgw6sB7ZWsiFiD6yQWoTSfrcnJtPa35M8c7fomE2nrtzSziq5MGQAfDTLR5CnnxKyqiNWwgq",
  "key20": "5rqc8M9UzdLEAUSsWnW33zXcmti4E2upFD2GZNSvSuqPyQKXaz33XCmLqsoauN44iKgx5pvWpsLYdvycEjgbQnD3",
  "key21": "58NPBdgjawE3GRcgv9VtHYguKBWZP33SkgqeCHgXcQCkJebbvw1opAjzfY4c3PDhgPEdPM98gpzAmpiMRMpTP4My",
  "key22": "4iLvqwQGDRUWwNbB9bqEy95DF39Y7uR5X1jCih3r91pZAbuCKETJ47tYNCZNVdfcK1wn1hMANLP4QYwwGeW4f2GX",
  "key23": "x6783rpHAVYeyUSDVw4UcmesE8xmHWunidb91N2121osQrEY3Jj8fzVrC4f2hqgKGsyZDtZPp7TPZevruzYhGox",
  "key24": "5EoRN4FrkprZ1yvgRZkqbYtqQmP2axuEEJhNeZQsoQtarjE6XwXFABfejVADWb9nL1wHATyn8QXvPtc4M8C7jYmE",
  "key25": "nuFsta2RKG6CHif5psLJ9k3SYBchpjLVKdZUWuqFRLMb9ZsWNSmYT3saWsjtb5UWJoXUEunZugRunco7QWGAQ9a",
  "key26": "2qJ9G3gJ1L1mVn4jBLU4hzgehDSkxtQK1kE6By9MepHVLG1GiC9qZ5PNcLUsa1pAcqiSHsyiTZt8BX1EVr4ds62u",
  "key27": "4cXQ3ntXbX3VoUxNZWCC5j899N2B2KMEhZZafomYBU8BN7get63J2AcFHStwBZDKqVS2D8m7isU2MRcZNo7rb4c5",
  "key28": "XETViMz5s9AEQP8z2oLJ2hYWbQy2ZCYFHHZs5CaaLGn7v1RpWeqNzrWsVaWDaiHgTz3dfj866dzM3pTRk7M7e7t",
  "key29": "275fQscgyLYimQdSbed9M2DjTLiazNMz8cUctkpUwArdDCgGi7c77733QXdm3QJJLY7pqGwvZ1UweGyyj1s6JfBP",
  "key30": "5M2d78j9oTAnER9Nej9sK3kUJXgwtv7bVD2AxdY5cWjL52MUdpG7MqpJH9LEtJu7LhTbmDcuzJ1cV1ignhgoXMcr",
  "key31": "4MpGHuLa6x8j7cHbHjdSCpPCn9TnAf9gukbYAEksC5nUs5zrXtgeG4fPdtwZgjGUpcwaZpfLNRwe4cSTdkBispP1",
  "key32": "2P9zbJ27SeFxF9knwnzRpa7YCkM6hNMo1YYAU9N24MqD5ovu2T45xCJotvBC9TDzvNLrwFc1fYx4XM5AYjeTwV1n",
  "key33": "5srrZUduyuo7Ycf8RHxPbt3AY7PWjuyBZq8gfpLC7B4gkNfGcwVTRKzd4vgz3WgKcoyyKZPZ4ehNa2CFH3xZCktL",
  "key34": "3j8qDT5P55B5itLJUrgejyK2ZSbcjEH6B1JhXbi5a15H6TQiZxpLsMTZmMTngM1Gm1Ki1M8hG8u2kXS6cVZs4uVQ",
  "key35": "5oZvtmXj651vaobBhGNduRVZzRao29hEkE6jMcUHQgYcb9quccTf6QpCwB5JUm3sQeppNVr89LLeR8oiD2aDzDV5",
  "key36": "3bGrMwtNxDZfJ6KbUZji4HTmoM6vTx1aTqN3VNPrKwuoeU7m5mRNQat8aidU2qkc4Q35Pn1cshUthgmGxvQ7b2Wx",
  "key37": "43hJeh6qDGzDiAjZ7Kki56rJZ3CdWWCPMaGryU3wEHpRRMqebCzBfT6TLH3RiLMGDxrqnKc2jvL2Yuj5SXx6XCZv",
  "key38": "p6QF5mupKYArJv6weZFdG2qoPd29SUuC53X1ZXsnq4XSTzjSwmTg4qCxUjeFTYmqDRNhMFcTyYuhK8TwrL7axG7",
  "key39": "5MNzangQPFafby2SPR4ZkEgvrwFN58v9nZXutsE47LBcGUQLFtoorGJkoY2N2AsQfvY9Kw561RJRFnX76N6M1NeV",
  "key40": "5GCs5kEB3Hp7PW5hsqduwoaFP9LmaqASPH9kJgGzPYkfS4mr6DDfDyTzZGX941HkxDZTrpPVq8ZPXTei5k7udRJ3",
  "key41": "3CbzVGi3Jkn4pQg2qeVzLkkxWRQmr8pEA5neeQbLF2AkjB44eRugv1r61jMzK6qedP5B4ftbkPS2FG4q6YViZjky",
  "key42": "5AQfo1AE1G6obtSKdb2z9J3w5giLyj3vFnWPcdjK2mCKQEBy4DA45UpLb7waPujb6DBqWKwXQuNBCeYV3W2kDgiz",
  "key43": "cqo5PD2uFFczMZ32PMGVG1oNjgnbLzvtqbgzFyfej7qmA4bKabeKPkUtyKZfUVQC4twFW7oRHhuSKTFYgAZBm23",
  "key44": "52SQ5uWJZXUDhNUL8ZTmyT3ajEZ82MhRMbbcUNTcnatKxgGnPZFXgvdfGXQNhKihmNjKXURveMMBh9ySicx7dGyq",
  "key45": "uf24jWLz2tf9XZZygmra4MVGKEsAW4Yyy4GtcaJAbSGFUdbG5vWQ61PA9Y5DD25ZmqjF9CvDq2Zzdnc8qo3rHJF",
  "key46": "45bD2MeHLW2R8utzDJffTBehP6jfAzVhgG9xhBb5zMjajjnFUVpM8wTXSqvFWvdn6G9LcfEi4ijJtGBUpuf7zwot",
  "key47": "3eGrQoPNXh2njhB6S4Lmt9L3mfFqkC1joEF4RTJFBYpnz3AWc5sDDoyLyDQZGNQXQkY9pSVged5rEgSJdojJiEty",
  "key48": "28hhzg7LUo6AdJzYC3yjAhaj9xQ2hjvKi9bs7g8byFEqrJLxwEc6GUGmXjUJtENLceTwGX8g8Xrw4gFD5ZVmZgX5"
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
