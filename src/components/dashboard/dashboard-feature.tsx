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
    "GoKvuiyTRFz2Xnqp6EjhSUu3ETuYZvngxA1oKeAbrbqsZwotZKdkibShF6YD4RsC9AXS6bXCkbi3mLKoXMjjbaF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66itzRptmN1131giAyWASoBgwmeWe8pGkBej8Eat646tMaxuKgebcKiJbpJCMvNiYwH9ETv11WUgu2XAbDkTSuWZ",
  "key1": "2wf1tubCC4dMeHkZrHu8Ya8EXTnQqT46v6Gm5nwyV7uyxq3aekvkGL7c2KFsf3vznCoqEQ7mgYa4ecTdnXetVNZJ",
  "key2": "HXWANGo2hB9aA7J3xtmzJFXTrXtbtgSTJUn18R4Nu1USYVpyi3GPAgJ96EFwuaCsURK8YdM6ABBEUyrzNtQbhFq",
  "key3": "4aLV4M3yJscPhTSbynCnGFq6VTaDhsuZAj3QHwn18Zrn9adBcFEJwnQdYtZ8GvXifmTJcjkyvMP7KmqjugvNSJtv",
  "key4": "3CZ7rfy4gPutYbqV9y8neK2AZJZL6mFPx52GfpwFFWSDg7Ax3B7cnvt8Ps3qB3t2jeB4fCVBjZNfB5h71Q8DPPF5",
  "key5": "3JuAGC3GbnGQqqHprmu4y3cVMR3gWbbR5KRMdoSNKuJpBJzyH8BJrfSjbWh8bT2bQt6ektapsZfwdBjK7SNnsT1k",
  "key6": "3zgYPa46rVKFPj7ax1GnunZCbgZ4vKXKR9Cikjn92PUS5Fqi8KgpLeTMCnrGsFM6fxfgM3irw3u4KTAoc8XM7PFD",
  "key7": "53WnxgnTekVQXBx65VgAKXZ2GgzqYWYd73KoCKJnLfs5maJytWSrXWYqxErdF4abbJ6sztaz86gfTQRUvRJBnieY",
  "key8": "EcpcAsTCrHoMbFDwxWWnKzbsDNDbz6fev4GH4CmocmmKwD9WchVJVtW9q7R4CwWxj51wYFivYz77UwEtKyWxgxA",
  "key9": "5rPEYxUg2Hvp9qNM2mkahgyVZZcnQwHTcGzfds6WUn4TLapsmGuYQmiL5xjSumqx8e4p4tRWV1JJdPPYY3zLPdoH",
  "key10": "hbTa8YbgDMAuzCKrQMZnr7mKEWP5ymVEunp953ztDBcVgrEk6Nyikmj9tZxtHiBTmThM1tzguZzd9cab9T6M9sE",
  "key11": "5LSa8ij6jRk2NGyGT1i2ZYxnTnT1shA6whnJbxCRfeQXMuT4BMtrmHCMAUjLyddgExeqgR75xcAwBxtsEDqnVukD",
  "key12": "3Xd3WYqLpATTymRFzFD16ZjPP5FphHi8bhCpZo5nrihZkKbfci2CgjoNj1co36LVzUQGs6mJ4ZnJudMELrgD68MP",
  "key13": "Xpj9agraLtVjWaXG1ZnuWYSW59gKbvPVJ8pstAhX3YbZZjJEnBbeora5oJ6kLTxqM6tStWThxCRqG8anEuf5yWq",
  "key14": "RcNbgzLH3bgesukBpcgv2AgxP7bHhzECXY6hPx4ZdwWN8HcpTotWz5FL6KkWuP6DdTis8wa9HUe5EjoEEhEQQVQ",
  "key15": "4Sat7hDZCvqCYBFd7pJp3ApFpNdg9M4ESgToZ7KuZB3xDbAPkhS5NwFeFrLXmEfC3YdMo86XLki7Rcfj4Pjmqwjm",
  "key16": "31uWigkvCwB9zjsisJaGLm7bUDfvSrgBdUsbZgXVrPFjsG75TkRYh6m4C14G2gnn3nVjg7K2fs8PZ8xmx4CUF57C",
  "key17": "2oXcMbg5g5w5JdFVRsiboc1DfxZxovmgpLnTEDSRe7ctUgx4PzXwZYg6JkFsZjZvj9hinM7scQTEagNRivJeyXbJ",
  "key18": "2biWMKn6QVQ7GMrN7e9kK3KPJMZUiza2VvKNJ9evquHZk5dpg7D5CN2v6nX2z3czWubUncAxFXYqmNqRQKZiKEFh",
  "key19": "3ig8hks5ojBw2PrLMWxuzH4fD4QsfbNYDDFPRgyH2etFdwyMxAK6mcAYU3AVASuiAqjKsPJeM1i1aGwZMBbqX61j",
  "key20": "2jn9JA2q4jSUz2xWhyF4nwPTzBs36nP4rwfBMkzW14hufFJ34kdsC9pZYm9zWFq4NB2b8YCJ3Lz9VmRMcrRGX8Cg",
  "key21": "4AEZijwrFZRrCSqZ8Mp3hZpxwotWXGNiX8M6XwDdLxJgsHVdbP71rqpMh5sXmDWTmeXKQkfd6JRzBwxQZ9VDiaps",
  "key22": "4R5BpdneJM1Whkq7Z3x8emsXmGwXro8mfhwxefybaU8NEmDD7QywTnXURCz9RPaVmPjsMSQjuJkfB7p5NFkaYBuB",
  "key23": "zFPAZjK9MbT8GMAKLcA8FJxm4mUCbU2EreButGvzpJnQQsJrKsDCYDVhCyRkhDJD9VtRYJu5C6EHZKyVTaC94BN",
  "key24": "F88szbv2czEQ5qnTbGDfCxWdGPBtcMtL7bAtaChKEzhV8yu4o8t89CCG4dVssF6aqaAnHmcJYzQZ7i5JcHrBs7W",
  "key25": "5PZRxoxw9ta7Hwt9E9uJr9Vu9LA92qw99aEt8eLHRiwBf8ShLa8gwWQGeiWoHqrw7ci95te35CGzoAcAaqkpbpGU",
  "key26": "36u29VRapg2CosxA3LGQ61HssDBfErmvd2YqX82EEnjf4CVgXnTMKiNTPKx3j37Qz7prvuBpLmqN6tKMbLMr7q7o",
  "key27": "3pcRZPoiWYpBK467efzRgBmVCxoWegjqgvsY8hB2sPrEPZvo73AR9GiFGzbwooERS5aMRZvQzPiha3v6KvtU9Xfn",
  "key28": "2iH4sYveCovKQTb7EtRzSAPeBP3nB4qiV45cDhJ41emFWYNQQUpMrHTC76e67EJGtueniRxWYp5EkMhzaRGmdCbD",
  "key29": "5t3Wup1wejqoH7LzSqzyFE6MJ6xHgVz81n1k7wzaXnP7W5GTyWLH57tMZLEfgGV9vE1vcx2NUipRB2njUWateLoH",
  "key30": "4FCJKqDkAErPksMYJpx7t7BrJ97sziuPiyhm5hzo5YugmooZ4GZd58Kku4pryfvYH9kbewqFNQfnywDFYkyfEdaX",
  "key31": "2ACnkSgw3VhVVU4YxhJYXyL1g9irhUopCcSipLxXBqtBeDnw7BQuFat24oc5Dynz7LCoEwyBXSvd4JfwwGrp8TNd"
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
