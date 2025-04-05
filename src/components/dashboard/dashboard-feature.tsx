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
    "zveXunNK3i8YV8ar3JCVcroqcJayGH63zvGJh9YFrJhfd8hmivqfZrbN5oB8ekG1pfTxhLf8UBP8Es7fXVPXuo5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wAg2i1tS4xXcBPGavDLNj61sAfnd6yKHRXbRem1kWcqn7Ch5bS8vjjFemSKkY6CCt7JN1aW5Rtjziwotcj3Lgk2",
  "key1": "4SyyuspT31TzPpzMA81xUmEagniNWMAxASqZwyx5j7kkuZnjjYfCrNLajKEQ1VjuDr69XcJH73WzDN1K895uLxK9",
  "key2": "2qFQPhSewt7ZZ2eQUDrRK9V4TyiWayvpEQowL1NrrJYKi48RtjaDgFJvak6pr7q8jPd47fPjJWsQaXeHAz2GLMKE",
  "key3": "2fPtFezYwZqZZYbLSQopyuQczGuK3PA5hEDuroA7pXqsmetsLrjneAxxGgTybodHNn3zTuK63A91qupqV1Y2efYQ",
  "key4": "4Ttn9o31TpdJyRMXp8iMaHZJbsaXo3FWXmPe4PuCAuuiMVx8EF2Jf7L7hJNkTy19dwFDw7mGQtWNGdajYhiaYYkD",
  "key5": "4VMHmVGha7vNBak37YKf6NEKSQyebs69Aqcve5KCWAridzF3CG7KoryZLHAQr8W4r6581GzE2ptQXnoMUfRoWnFs",
  "key6": "K6qvo8LC8DoYn4XFYbS5AsrsX5Vwd12kYfvxCjFJTHUTde23ssnYBbQmLgbdesH4Azop5pKKd6YXrKZf1MciKch",
  "key7": "2USjavemnx4YEUmGaq61aFonZSifQKpSCJYTLU9oqZWzC5xNvvDj37jisoYS1QRMEar24qqyevxkwBpatLmBixGV",
  "key8": "5sw8cUwpFS9cByv5tdiCNPoiiyei8U2vSDEMoupMsKzVaBabnQttkgrb4eiSAq1zU3i9wf8oEPbQRvhR4tYg6R4F",
  "key9": "17bG6QZeEC5aV7TghE3yKykrqFfU43rgCa8yXxJ6L3c5StUAxpFMH3zm473hFwRJyJTmWuV1YSqhzRHUHt91BZ8",
  "key10": "3nvEiAeisf1C6gca5qy4zcjMdbq3rGwzFWeKjbxgSzsmXxLTc5szednT8ocQqjELaDgh9f16X6NGfYXe8djnMAa7",
  "key11": "DYKTbiEwvzrTtMLRtLQmSiDgUZT8WHEhQUw369xScBo1zzCsMcXCThTtSg5Vu3FRrqPHcTJnSz4kyJeXcqGCSCt",
  "key12": "UGkE6pEZngwFPvAHBuGRMnq8VZ4qLdFVM8adXuViYj1Pr2Sb34JqGTFv93vodNcvTKZdxW6UQCue35vRfX24aXo",
  "key13": "5aG2b9kXGF4YsLMVEeRNEEddgDoG7b15ntNSdi9TEc1gA7gPxCPo8mYBixw2aMr4zjxXZiJXfXeZY1VVAGzfxPrR",
  "key14": "2wRxLz8wFsmHiZfQbreG1hZowfi3u5QzG7nWQosSGd3ERd1JMaWuWrnTBYz21DGe1zyKZLVm1iCkVYDMWPJUrmhJ",
  "key15": "52Y29UWdsPSCDyJHUN1oeebZ9Gq5mBWs4exPQ7qhvhyf2zKwApn2TYcWQFLVqjJaoprcTwKByfS6opkARouV7k1A",
  "key16": "dnxdRivRB4fMBcCamx9c9P1qrKr5xorDC4ahXAR4hWAP3P48cMv59FN6nM4kavKVVVQoDweCzNKmKePso8hR6hb",
  "key17": "2r9u8RLid4kNCDYDfoobvWE3JyqfUjbiJgPVmMWt67CHDm6L8qUB9xpkDfFwsXeBY7mWYmko37TRR7KjJHkQ4T8V",
  "key18": "skkXVzYJ1Ewskbek5w4gp5J4DkgVQTPY5X88mUSNzTbyQYH641gCgaXCEF7cz2Ag2RPzJF9xiKR494Kcd22Dz8S",
  "key19": "4RbP96mTRTNgwma4W3KvLTWu61ZdV9u15hD6Yx1sagL5oWYnW9M1My3c39zqeDD18pjYERCKiK9X3xCiCZnbmswv",
  "key20": "3eb27cGaQbmzG8gHk4dhVFrP9R5xiv6uZ4d3Cej1AYauWkfpDvfLUYAxg3jGFZiR9f4t5WyBsDJ7AG25uL5tRynW",
  "key21": "3SDwvW9APqAA3PNdSpvhLoH8wr2vEBWMoe3npsKVz5BtdH1KnM8nmb2YfbZ2TqAwTavP8n5fgLb17EHxtSa4QNfd",
  "key22": "5mXMaUs38rcoDjcGxzh5FSxvJFyFRMyxetwUkwWcbqWAWP7nQENgj4sNpjGshjf8qbqTiCHLWbbhEAL1Vpgz2J5g",
  "key23": "5mAhNW9v93CQPVMeeLig2tfQpfS82T4QVxpdfAEDiicjWUEpFyjXnSNyMGNwidR5qJX7V2KUWE33xDTWGGZKGdPr",
  "key24": "2scvv72vDAsn1mvgyEKYhQEPaLfoGYR9PTx12intYqpQGH2JqKqNvvLLzjNXbbnE8Ri5D24Db498MCqgZ9S7nYeg",
  "key25": "CH1pzvA68ibo5imjvyARb75iLX1d8meRb59tQZoWgKwbjxRcwKnSrepzoYNqH6QcE2JifhS1kUQ1zGuuRKYsPBs",
  "key26": "539EP8Mn15Rq4txsJRmxMLSQRJgHytgxdhADmnkffrDX7RoAebExc7aUSFpcn25H9u5YALgNnL88Aix2wJxT42r8",
  "key27": "2sCEqT9zPcgvbNk7qFsEDNg8uuf33RerxrJriCF85EmnWosymrkdknkbEvSQemqZChUsF496GLfNnTjqBsVsh9h7",
  "key28": "3c3o21ywEFdP5T8NqbQcXaGnN77U34fhuXnAg7Eb8A2UVUktvqudUWWhJ7aR73QUEwWfheCxt4Auiqq4HfCEL5P8",
  "key29": "5gmxuUSKLknpFo4WvpoxFLPC74Mg7ZWWxrtLVMGmPk9yQ6WoCECH9SwpZqKqBt3ABEetG83nrgMjZ7E4aVvoZita",
  "key30": "2UUkMsFoxNvGVshga3ParVrcmC5auGS3RnSRMcchWpzrioW4wtq4wZ8JJSBqMPbNxV8cGYiWhUkJ5AjbeofV9Pfg",
  "key31": "C8g6ov1EsEvkEkij2ahm3ZM7kdWdn8T97cc2NfbEnDuxgRSCCidBTxWyFcs7aLbai67bLGpDkaYVmNyXkdAsCRE",
  "key32": "3iEAu5TogitvSBZTUjKqaD2BLmcyWhUitUg8s7xqpvwK41NDAMeG1FwaeUYhS74U2f8EZrenbnTWi8rFPyaRxx1o",
  "key33": "5MHPfAL1wkpL2Dp294X6mKhmGkMJ2gPwT4w9Q928MfSsNAxVgBdtnunooSQwGcyQWcX9qkBK7GwSyMU2eW3ZiLNk",
  "key34": "5GwGjTsv9zENkdy65UKaUPdUM7kGeZYv6Uapzj6Y3P8cE6n4YST4HHofvA2o6MsEoBNbwD5TKf4XwQtQv3yzAHS6",
  "key35": "2zPYXK2wUXA8gjDjjA9ghgqQbhTRN4N7ZWaEApwHuGPfLF7RYmNbWDrqfNR96cmzx7aTynQsp3fGPHjnyhqcZJLT",
  "key36": "ejQEu1rBe8d38hpxyTgVn6vfFCLHjLzSJAXFqhforuZTAtFTQ3j4SqNXcqmBUjXJm51hCT95tvNXsovkwwWu92Z",
  "key37": "5EnJVNWRmi5QBEAGS9KqV7bwsEkMsJpxp5F22mXKyzjsjgVVoMjYgATpyHJvysvSgxeqkxAX25CUUnoD6GjNTXhv",
  "key38": "3Q1FGKktqu54u7tcNfP7bA2Y8ShqkQn4VQ3tqm21Vqrtw5n37zdDEvNrYq676x9q2cGs1oisD7Savw61k1nXQ4FR",
  "key39": "46VezPg4VFn48keU979GW5jvpEnnuExuhZDZwSJzTtivWhQzpnEJ5owoC7XsXvGyT7tAXjnD94YwZQu4XxexLZU3",
  "key40": "2R17yuij5qdKGrAxeTfZFUnrN9rsTvXGNYxTFAghPVEvwPkoiMsq3Xm94E9h1EHsYi2EbPVPtsb9GNB634WxhtKk",
  "key41": "5GT4iubzcJRjzoYFfRApjzsQtWuYD4SPV3EfPkguoBWJeW3YagejeARjcYV8b2iUraPCKgRDrLV9yq6cgHE1YLWc",
  "key42": "67Hvv9L4oMz2GZV3acogM9kZHneyU9EJRfNRdtCrzLy4JSy9GdShezKpi3BYY8oHpEPBCJTdbAZkjyRCjddnUZp6",
  "key43": "9x9deGfxUkirthTbnH2ZyHUduF1DdGyB9ockuiMWLjqHFV7utMHKpX97Fe8pNoVTTsCPFDvR5FJ97UXKu9rsq9x",
  "key44": "5hmPt2BkU5GWPPwfRQvzDdd3aBNu8vxU7Z7tH6TGSKkgVK68jkQN6choeJRCDo7E97J1UVuzSChQ6c3Cctfrk1iC",
  "key45": "3NSecZo6rbWEAcsEiVqSBKt3dRzPAGSZkag5s9MjDLfkRrvwQtmVthzBZVv8D7EaXUPQLk3hMfwY8Wbe4gsodsKu",
  "key46": "5xiaapxp6eD4HtfQg2pPnZFZAw5M5C1zZ5NKzmYomUDotskagTZpLGznoWETbLv3iV5V9gpd9K2PNTTz7Z4tH7ua",
  "key47": "5kkm4yp7fTnyYisz3cQVmn2Qr1xPowukLRYTKMQkmMeJKyRwBi5aYW5Fu7vkNasCWh5i62mwkE2oPJQqogGwu89D",
  "key48": "4VHDyprPFMkinE2qMEocbTFj9HY65qPQYxZrgfNy7VzZs4SNq6uLQpxiVFSCyBui19KSknmuaUXBkuFMYMpZtN77",
  "key49": "2FRVRpcehWStN5XFjSxpsd35EWBAr3zsMprtv9imKtvVSBNcRZ86qVmZrutLTZsNbjjTS3S1wvAgz36Z9jFouRrd"
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
