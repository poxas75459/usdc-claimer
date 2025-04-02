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
    "4hdZRRgQ68AAjtefJEtsUkm692wpCkpGFoM6JnWgjUrz5wThNqvgkN7WfQJjisHEoHKpwTgwBs5zz2ZciWdPsfSd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T8U14EtJFhzLYz9pFvzXRxWRrx3ufHQ6JNiUKxLo7tn5HASZpGtGetJAkQ5c2czQTw4YAkRMW2zGn17igjHwhbk",
  "key1": "2crPVJdk4UXbwAWSRUeUVd1wRGvEfaUwptyFw3P6aVM48HaEAXXv9ysDHfzC8xTXmryeaToTa2DVJDorfYKxSTPg",
  "key2": "XGuWMvTx9nsxJvS5pW31ivsppaAsH9eEkh7WmBwwLB3tjE5vhD1FaJ4a7ounNViR7vM74vHi3yU7t2L8Kvyd178",
  "key3": "3w7GMtGyK6YXoNLqBqZTrRCUsxDWqrpeXv1kkbg7pez8z2dagFFP3fLtcDZzYsQTnomoSAKLSuDoA9qpgX2Fo4ce",
  "key4": "3M8sc8k4x5tdEpiUQw6L2wrkYM7kh5ea8DLk3pPW45ExGSbHwCK3HscJD3oRJvJ916ihUQzqD5xCh5Xr2zQeWxDk",
  "key5": "65pwAXjusmgkw3qczTTipcJdkVywfFMdeFHcdjTfeQuka3XkmBoURFKoLxy4oyFRdGPniT1LrD5ahVaawJwUBX48",
  "key6": "5hg2j7j8hxdjywRRVF5U8QRYU83dFN37z5LpgyGTBbnLzdt74MaoAP8rGv4P6sgGjZjsLdWVGk8kBaVTfUz1UaH2",
  "key7": "2NNJBM4rGyuUvUPUwMR3QeFaM98C6oZLnxYpj4b74Q9dZ9FtTC9bxZ24EXDAqiPNXNaT8ZLG3Pbgk7TN3qwjYzZv",
  "key8": "3d4AYsRwcF7joZCTqWj9naNLvTsAwQFRHhtRU767GTrC6iUwrBKaccWNZZ3PZKgi9uuQJE2ZRcnsHZshnDzpstSQ",
  "key9": "52EdpHLaTMNEsrQfRJkoDQityGYJjYH9uaFLBUcyrf3RK3Q7osoKp6Hwdyn14L5xkqSxRK3ys8Qr4m4dxaA8LvNW",
  "key10": "iDvba65A1wFEqcEeVsKRKzb6rKccwfipzBza4rQ6Wy1xxhT2VHjsqFnT7P3XSADfjsue7DSGqYYRMwdqpJP8Sux",
  "key11": "3mhq2mz8jgQmn3KCkHBCS4J4qod1o2iSEhJSUhLpQZT5n9K7LB7UW3R7xidM7P5u4LdBdM6K5V6C3z8yNws5F3FQ",
  "key12": "46mEcRhZ7rHnJUR4EzKTCpw2PZuhjbsnuyfkH4rTaL4asw6U54YbJUK2yQkN7M1oRtbYSHrSurfmDFZ75zKVugEK",
  "key13": "5g9KsKZNsM94DSsjTVhtWzcMhj5um2pxwjRKJcHC5LJ71Gm7ZenJsQiTqNBJvW4S3H8EW1QEL8Tx1DnFnHS8w3zD",
  "key14": "3m9RqVy8jJDS434cvX6GRR6qUjtyGWd9efNpS5iXPEeZtxxCjMApsa38JniFLcUkFg8jhY2E4gghbBrDF6zFJ2iB",
  "key15": "bFY8YkgaDEhiZuyg7CdaJEXZKf1KRkGcrqqSwfM7tJui9gmhcePEY1kUZ8uwFmU8QE8bNzFB5EHPXBeM2Py9KCw",
  "key16": "5V5CUj42FC2u8AD5Dd1tKKwbcyNtwJjqyEP25usNdt4qg7jMQ6y8qoNzwQMq4jW6ZwyiimXchABJxasMtDkxujiJ",
  "key17": "55Hbfet8iqHXnjDG1izr9Sitt7yahWEmYYwc3gUZgCGt3LzpW3Tvhf3Empmje4kB1T72rmcBkvU3nDj74w5EybdF",
  "key18": "4m6LPEkpT7iEPGG99a3DF4mUgucz5zEfpLewAjxMX4AESzhoBJbJPvPXUNgmfRCaTbg7KXB5tqAsWgaFG95e4dgR",
  "key19": "3uGCfo1HpS5XYxy24UHfnCCGbJS1wWFsMgy7bBxo1tZV1WZRuiM72BwjHEyobeP4zW5yWPk11J37o6x9TN691gW3",
  "key20": "4y9d9re1pqwDWAGgov6aorrg3ScdAZoFpJn3toWfNKYvaMfRnbN9kJi14x94Uhyen6Jh8ACFKQFqQtgPLDz9hBbi",
  "key21": "gPgNCy9ZqXDmB4eAQ1quoWbptYd7H5ejosToQqTHnW8YRLVE6x9iXyQRgTJ5iwuCcasphC1H461FQ9s63BBh9MF",
  "key22": "2ytcaXaxhdCkGbWGcmKBKnoXu3St6b5qADVbYoDruvg9s2TMJ9GvbHi9KPUwkW3aymXgLGEYA25zK4FCwrniXAyo",
  "key23": "2Tbiob6amxXoeodjjF3DysnVyw8karne7p3Asy799osdzLbgmZqE6j7dbKDX6JhCcA6sEFjrSrkec8g8J4piTqFP",
  "key24": "3uRuc28qePhXW2JYtkxhapxUbkZVzRkFBSfLqoaoQYcctYtdTS5NevDkBkGcCEik2TuZYHX3UoHbfLj4bmpBKHGE",
  "key25": "2MBqRwwyVkt6bV4LBq3CLHZEGm8mQh2GoVeTGhaRFWWoonBYfDPfUahS5eYS7UzfiAx8PwkdTTwWC7g9ArT1rHJ2",
  "key26": "5utxcrATw19kUeKiC4qagyiyH3X8UW1Kxfx3xErrLF8F16ubfjq17SKaU9sDjEdRN2Vik347Hog53wY5RsTwTTzi",
  "key27": "2GP5QA15DoNRVPzAnFUDoEZb4SffvLLR3tDvgJrtuUY3LWGEKpU9SRwNf653KzMQkRGtJ6eDFtqWTQWBMCdLGyHA",
  "key28": "5qnN3WVbKBMJoHc9Coy739gCYduwMWCiBnuneGaJeGvj9Y4rFTvK2S27xNaivjkMw2TSsC89turnpDBLrc4LHD35",
  "key29": "4VoUXrBXWSQFiho3SvbTSvtbc2C79cSBD9YvsnLSDX2KyvshpPdi48cj77MHE7qMveM4eaDwG1xVxtCx4dZytbPz",
  "key30": "5mqcsGoPWLnH6qkZsxF61k8Dr5z7CF62PqNBfDKEMTp3thpJz8MyEE4jQrPRN9TmGv3EKiAEPCbVyjvXS84dgifN",
  "key31": "3Droj9R2ykkoHH4SJTAj1QYviFfAzbf7S3aow3PnzRxLD1FtYSwp9V8HqRdfYK8AgxfARdZNmdbW1oFrEUtDLcCg",
  "key32": "YqZuhpJCEpGWejgXG8GjHV9AvZ9B9BqtfgAqfpsT5SYrMEwaKgBiyZvod1CUeXLVehz21QqbSCm6vzhDyCq1veb",
  "key33": "5KfhDq73f6xkKLCZqPjEzktCdPCGG49TL8yvNn4hY4C7DjYgAiAnW66KGrC2WzeeCpWdKnWbEJGrEogwQ6YpKwcx",
  "key34": "3TsUmMVVMvHAmhF6pfrBCyKPCE2WBKwc6npPane6fKmPGvwJh2HNwx4gemGHGN5DrhBy86AxvPdzTbwN1bBxFtuZ",
  "key35": "5xGSnsQvVrn33sZTazb1BA726B1Fqasszpfq1DjyGWsMR9C2LdKDK1gBxjFUK7PtB1BPYAXhwRNvwazEYUTJPjFa",
  "key36": "gGjJDRzESmpQT254DsurxQgFLuM2ZkvQQPv3RJ1qSJwYHJyFgjGdkTcjPdBqJjie9pBEZYq9xaQbJnsg1Dk7M1i"
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
