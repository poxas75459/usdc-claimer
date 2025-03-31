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
    "4YtvKymdwL3Pno71KGi7HjFJGT14v5pLzZAbV1qa5eeznFrzW1bJLZjZTKKQoXv6T58T2T2qNMpHTv4KWYXZR59p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mKuYWbsbmjtP5gfTNaJ4owuwEmhaWhfmkjty17h1wbFhtXinc5JCf9MXQLjkqwXP4Lh9HswRUMCsupAUbgivLw",
  "key1": "3Fttbs7sPcxeYPG4S5rnKgvGhdYeXVHrttC9eqw2RYrjzdoQY736Eu8kjtws3exSHBKHmKa9gUpBjhZ4WD5n2At2",
  "key2": "UvV7VF5PD9kYcKDJeRA7GGLrrLNcbK1XcBRgeeGRkNWe87krhwCxojRRmVHXSJqaGi47qfFoxmHYf8i2hVLYU2b",
  "key3": "oMKic8R5PgXbMdEqAu6Y4beFBQG4Z1ubE5Vgp132LwtRfQWJV73jJPvBu9rox8uS8C3R27oBAZPMJ4k3hPFYsHZ",
  "key4": "5zMRAbLDyj1MtFcD9mcpcXZBCWebS2GAetp3oEveiZFxRMNdev9HT39ps2oXbwTAJtVnwvdrg5ntwdGVLVKmkxnk",
  "key5": "5itMFpCvDBaWr36Q4fykWQnSbMXt8n9F2hUnrJv9exNEhdnV1nnRMS4XtRFmdRjorPAU9YiujZkVwsJA265UrEnX",
  "key6": "vwZmLWa2DtRxr9btwBC3q9tMiD6Rmho4R9RrqeLRUhw5Je3RD411PoCm6NAVHAAPHXbQxhvVFC7yJ4nG6vnaHJH",
  "key7": "2mKH9gKAadSuFBimxuarTdXumLRHkJ1tZwzGv6JSygiA2eEcBT2RbeTJbDdtTPKUCKMdYvSA5xm63hHxtDZQtKG3",
  "key8": "2XzE5VHWFWtUKz2U2rkREpLbdQFmWWHGdZuWDU7Pvd6wQwCi3YkTwUoZLCe6L263RH4ujdkt1QyXgu24NN4eL8gR",
  "key9": "vdVQjmGffywhVDJnH962RRsEaJPeMaxLH3B5nsqNUeyz8FxauG4GBfAsXKJxA81nuxvxwLGcBpm6ooE6L6fMF2a",
  "key10": "5FMTqwNWWEV4jCkno1US7c5p6H8vLWwzGi5xdqbs4PTF9JKet8iQ8AEf1QVkUa7UMWuwSB9aBVMMgWEUCuTk9cGj",
  "key11": "4zDt6EvUkLvjwMqyZdWBt7ECi952XSpWikt1QTEYjR49TgNWH4uT1AY3LNMpGiKDt756jPAtbYZH7BrkoSHWpgcB",
  "key12": "4EjTuiLQDgrC3H23orKh5uRV7gCk2kvBrUXFBpitwsoVap39PDR6FE9Rv7KuGgay2rBAt9upyGbDrMEEEW1cCywS",
  "key13": "3tGUf3AKKf6psdzQ7KTwiodE2LYjjssjQDiSBCLX287RX267JwAiTb7VzCm9kiccd5Ahi619snnbQ83hve3nC6ha",
  "key14": "3Turpf6MHG7VguB7URmqtxxrBJUP6yD6EERuePEwrkYP7HzPDwu3BcJGU7c6accv5JhX6TYH7pjeKaHEmCm2xWA2",
  "key15": "64NQyqdGcPuoE7AMX9kYrGrYZbP9fQSvgUJh7UtNty1osnubkna8vpTUAznt2CGDxaLr5PddnKok8UjEAhy51Bc1",
  "key16": "4rswbAuyChdDEAL7imHrVbKDk8JmQj4mGDQcvoJpWmbWXgj8iEfJWcTDDYZe2MJjmzmg7dnrn5k5whnMaPxQUwEo",
  "key17": "2kWTB3QFH7uTWYq8dSGYhhYrEVxgzpcnYUW1xTCrDp88oJHtYABmfGvNwMEo3sjYfWFkEa5YpdDGrCaXxnGMFg61",
  "key18": "4gTUYcRvxw6wsVGuzHnN9qChqbD9HQ4fAxS8yUeKEZVvK8VseeHabsrujBHJQ3bdAPT3Z1RsPFEwXGrPKtFoM2bP",
  "key19": "5sDbRRieyeSawz3oGSUTXrRNYBBpA2GiT9PSZa91qp6nnVmSCJPhSbm4eY7njk68PHaqvPpTFFAAh4jwe4qwS6BZ",
  "key20": "615qvbKdHgAqYFgnNRwhZHYC35tqF4F4yBR6qL5B59LYLARywfR8VU5ZVQCH8KtKp7feyN7iB4qw7iBUUfVb4N7p",
  "key21": "1TsUP7TUsh4MtKRHmBg5n7nBPyPHQAQrpGMUBEGeWrKZh6G6K4ubnP9Xs6drNP9f9u8fA11y5mJNRWcyMv6MVQ2",
  "key22": "3UJHQ35EJZ9YyHbpxV4VAF4UcSom7MBupAParcaGFmP6WPZN54JqrQjLWfuRPAK1hRPQzpcGvQChbSnC87zGVgjV",
  "key23": "3zJtQ3RTcNqtV7tsdFc7U1K3W53w2GtrfxDPrVxdH6c5bRDgQhCpDxo5dUYVjFuHqQyNzDNCLuBHGkf8YKNDCtSc",
  "key24": "4S56LZU2c39bN43etmDndCMLsPd6MxE1MLZD78ArASLTJSexSfDeM7wBqt7xBDK6fPuUndJaLMpZ37YSSHkZUFkR",
  "key25": "5etZoWi4bxX6j4BPbVMg9R9Pt4Tdn4zdhHPn7Ro4MQeKK9nAmgbv6QmVwbunuQjP6ZCZBZRaawUL5qLXtCVRJsWs",
  "key26": "JjmJVY1Uw8RiX3G8BkhqZeQbFqfUqnHFH1kHEYfWsT9QLssCqLGh14K7ccKVuFrwfwsUfatyDsiYoL6gZRCrRSW",
  "key27": "5TPHmxXN4QVDD2aXWbEoHWrzXYgZeDiVVNANVaSfdDvBymHdtPNA14rqNPLgJZpQTdSXdbxRZ65r8yCdR5ihhSML",
  "key28": "QTk7LcTEgG6p6KfsAgYzuDmZ3d2NmSsAQXjCyvatRy3qTiVoagU9xNyTgSjvcok2Mr9fswLYNmaVEfTDRR26K3f",
  "key29": "37Fz2nVKpJ4HAXuRmYVMdpJzjEoykPBkhmK57oV2MJYmGTiJ656ZstE2421g5oFvjW5EbqvgTJRGsbT4jXBTmMkL",
  "key30": "2iSUQ3HEoT3YTgTsiy2UiWqVfSkFMUhK2qsMFo6tzRst9oohfjnb9it1wJFF5LbBUxnWMXX4ES1Xovwyxgx9VhA9",
  "key31": "4TvBHqQ4NmqopdP2Nmo7WM1UQ2yV4NQDaYy9aVaXVeFTQCsvYc31EpZdeYYLeBna3ps3gqQRYXvqJVVTxQd65qv3",
  "key32": "4J32hJcs9gvXfS9Pz1rtz14jLBbqjZ9W6uTA1QeVTG6S4LcfXVPPACcfUL9zthCiitqnC669ZgHDy2R6uhkVYZ5",
  "key33": "yoF6nr6HtYjWFw73ENLpoTyxKdEog89HAqWBUXNqR9Rv5P4pb7RnfRxuMTin6EK4JxHD7XKoan6KNCUNfRozfru",
  "key34": "3fxzFDWgnmRe9LKGvMLP3kj3FHpwVLwb2ELVQ5UEzMqHE3uKLixBWCnjV8apbvsHVG4cduRjecmX8d1NB56Qz35k",
  "key35": "3cfc7YGGWuzLnXkaL9U3jxibA4zgYFGuvazYaEz2zgqm44ai3868HrVmEZiCrYRc6RKoCkahqLg58dU56KqqZdcb",
  "key36": "4p14d3J2FF7bUiaax3a8WerRRP5rasntdqjxipoobz3GFxUKBaGUMhEnnzDekaKXsvmehNvJ9UGTENwWXMt2UJhx",
  "key37": "329g5GomAwykJ4E1GcdDnKbC99K3s5Jn3NN1SuP3VECPxmw8cD8Mg6h1GonQVWFwCUoLXFAK86hFs8L5bfZoHaiC",
  "key38": "2r8naKRQdjbL2RBLeA5qmWVcHk1fh9dzwbmSGDYxtAA5uDFb3SBYPtcr8mjeRchkPMjS7wT9qaQ65wxz3wZnpwYN",
  "key39": "2ZD1rg1rWaTbP2ZEymRsNYGtQUk9L6nP1K5z7sFH7gexC8Yipp1KsgsBnJnwG2YBjqzXJPpZiaUAoZ9TBFiksk6J",
  "key40": "3XirD2hkWpq511CeNdu56UNtWQaacgiHqofHRMtUdV2tg2cf55WoYSDxg6Twwh7B466rU567rzp2VwP46A49PUZ7",
  "key41": "2pxqQssnnnWLeg4wUqbrEcB12udrPvprPAPNgsKQa3BWSZLaDHr4JQ6F9kLGAGcpZbojnNsTeJ24n84WLNHvvuFB",
  "key42": "3CnMXh2L23VbkBCY4HvtTQW5xWjpH8DbZtZQMkePXoBdSn8u9mZiZh5QJvEh25oCNUyqatvpAZJifcWVywMpSxJY",
  "key43": "2w1u1CuATdHmtEcrMiF35CFHcLBcaouNyxLHep9FFfggdEwZ37fSsJWbSoWthquAdvFVkNCRMBpwcYSCDiMHHuwj"
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
