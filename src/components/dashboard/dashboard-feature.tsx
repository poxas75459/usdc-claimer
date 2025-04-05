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
    "2F1L5sPM6gy3SbQX6ziSzKY4Vcq1dWofPp6rFJdGtKcvoUTyUxDbaXHUFFq68fYwxNLb4M21CYWXVrPWMoYnf4YZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wKJyk1soxUt6v4mCt1XuPn5xiXVw7h7XAdwoG4mmVw3nnhxVtP5C1SUQnzVDFfc7S2FbL4LheZhR5ZXZiVcFHop",
  "key1": "mrgZob9CrbUvJ85aaYmjDEZwoKx7aQsjDhB5P3eVvkr2WhFVS6cYoZHbPGCAPEeYn6aAjUZ75qXXEaDM7vpjVJP",
  "key2": "SQjqsRXyCABES1T2p8cG4fe5kxTEgkSuro4dEviTGjjGnUtGEQEqUsWM7poVQKeVtDY2WY513QHG8ejx7BnyaJ6",
  "key3": "4g3VBq4qbGFSgLNkLUroG8vKa6yfphy4WV5fYAQmVBTHwPZK7XTecEYbZaQVq1zAZTLycu38n5FbqkkVTCNzeVFL",
  "key4": "XhPzwsjKsrRMnpemU89qZhJMGfPEwuK7i1cSkcfbqR9C8CsvZpUdPtk2kmN2DpLyr4uKek6HAzKCDrsSe3HinZr",
  "key5": "znutPxx3X8FQDV4zHTuPNwRiq2n6Gni3qL9uA7PNNENs9HozWydwQQMczXf2KLpDSgNFuav4KuymF3WFzB3sv5L",
  "key6": "5GWGWonCNjYpPwLUuCTa6N88Kj8VBd5x3J7K4LzoyQbcM7Ki8jUXtUnwZRX2Pyv39oG8W3KwAdAiSfKPAEP8RTfH",
  "key7": "4Pw5chgtayQdAh4dicYQpJyWeGNVWSjydJ8Qv2pYadAinsntCvwXyDVm32c82pkn43EHbx4nbgaAAQHziEN9Tekr",
  "key8": "2N67oYzDhz3M5uCas3U2Erb8ewfgPgfJfyK2crjas3zgmRkv5cnQxeZfCKrSF6rGVoGomyCeQVyBCs6GmnFPPBNh",
  "key9": "495aaMeyFh2AtGsNEHBHfaT4944QZdbfrxrpZ5nxX7rvWwVaVuKmfD5uRZXNJNPvwKm2uoXJJZ972H33hhsVBN2J",
  "key10": "Jtjv6M4rSUzpKWDeXFZGK67mXkGLDCcwW6udnqxsbKJe6Lx6zMiRg9FNAFDw76DACwuFnjByY4Kta13Drj3QLQD",
  "key11": "5vK8f9PLw3D9SzXxUKbFDzCn6Bqtku6n57Lna8XjmayMC4kr5NbJ6VYGDTukYEKwq3buecUN3j8jxUZj74ikBhtD",
  "key12": "3dYFsyKWAk9GhDAnu5FpdD2wGt7y6oqx6nuPBE7N5BmMZqb8BuH1mxrmtirNSB8Uqh71DeYJmzLZr5CLznUwBHjK",
  "key13": "bZzcQsRUzjFBvYSihrMYcVgxxR4aw1zLE27Zg3t6PZfS8LTm7jkFajfvjW1TataoKs1joC7Cp3sWVVToQXHRpap",
  "key14": "3AR7bpnQ9NkbmqgZg1rQWaZrx2TFx9qdmyCqNtFkK6VJCKHBZtL5h3PH1xiu5Mi1mMTB8XPQV472uRCitzPpTaTS",
  "key15": "5ZimsNuca6TRPmTrc7XwnoNyBb7pJrgTkSUPG68HeiU4zTFPCFjVN4agzG6nh47SbwNK8yQcHBg6BPPPdW2xzgJ9",
  "key16": "35oYLW3kibYjRa86xjgGdXTMRLQ6n3oWaNSa7g2reDg7zA6gR9PLTGyY2aUzUtpd23yCsfH3RRz7une1SVn5AWFP",
  "key17": "5cNp3xvDLARrDUBTTvBGY28uzATakPx3DomcPDqj9aatmto73ESf5PUtjfj9gXtjECTm8V3XPYHVyHDQzVZ1PPDJ",
  "key18": "56qaU7s3e2wuwdydDzvaGSbnAjsacK65A1FHHqENunesdXaTDcvEUsbucjfz1VgnqLot2o35ZyPRa1eBmvU392pC",
  "key19": "9tu464WZVy3QPDsC47U8HhQUdWcRW4onZvrARwCvCJQ795Za2NCGh5rWpM8scn7ffKN4PJXTXUrtVsw5jpGSYhJ",
  "key20": "3oMztyCzfYyjKUJnxKm1qia16FAosTgCu9VMwGEtSSS7MELjJcKXjG5cd8vDBEyYfmWcuafuaxBdFKABuYnTe9qS",
  "key21": "XcuNxdu8ToZsiiDardv7xLjewuLmpDXFnzSiUdBrtaWbhsqCbSotfnX8WUKL8fQLmLr7JpdUqvr6cXmoXn8vVoo",
  "key22": "cXwJ1gez84bPFVnbsnDs1sWkExYjwwGPT1TTgPhXX7amKm4L1wFFduEXT9RywxM1zCYRqSSha9LButMp5bQWpEp",
  "key23": "HXQq18TXtD1caiz3MLcdtTG1nZyXhsEn6AfELFmLvutabMAUGjAVQErMHtjiWmzvvCsxaWkFU1rdSoPnfmwRRPp",
  "key24": "kzxXQgt8jXJZ3NNvvL14JZXXMz9WhGpj2CKmx77ti1Bk42sedZs3WQuAqTY8ZsNFqTWyRb7UefxU9SqNXTAo83A",
  "key25": "2T1YM8w75ex7dUSXsaMWFJGZzcieJcfy1Aq3h7QXBmQuy5L3X3pxftNB8oFSSqthSNygPKrAsdCGvXjZBY7qX7nX",
  "key26": "4QGC5Ej1LvzjnbvZjLNqbFGePJP7WB4cn5qW3mPLqchMk2XVAXM9Q7y3gJp9jjTCpWdyQa9L3Y4T2zbJWDNNXGfE",
  "key27": "iaXJeMkyCwKGnqoKC7vTXynKYbih4q61RhqNQ7RCoVrXkMWQXPVcXxxA2xPPtFeyDAWSzD1gh5ESQCdHXyy9qLh",
  "key28": "34PJSqnunyJqvXH5gV9UyDrHz7KzUsL7TVX91c7C9aDcQwYEDFR7hg5Tsrn7YeWSMYgnskVQcAM8oTU4Zp6TcJAL",
  "key29": "QTRWAK8Yhywprek5hso1yxRA4WoGGRcZDuEqQCFqHb1VXrT6ZMqpC7pUDYfaFwshfvVQ5m9ARn4RiiDMQ3ouEeB",
  "key30": "3JnGV5SLNrc37jjpt7vNixs4TH9rMXAEUpam8cLkk8k1PpfLLtMi6NDHAv1MzmX3Tq4Js8wxU2kehjrwB6RXYAe",
  "key31": "63Za1SHHKQgSXKhCJjw72mfYCLdLVcqFJfgzFoxkungzxvaWv5P5oidU9TPV6xnRPnhhhnsinqjfbX2nNz17XjqM"
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
