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
    "2RwWRmQJJVo6HRcFSMa9Bd8TYPUB8dq4J8UsR6Z9yuVptqk4MkHcw7sZ8HoUs2wTByyh1LA6snjqA85RZbivYU3F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SiRpcZYU7gPYw9iSRZDa7WTQbWJ49SzdcZYGo7rmgaNPkzzMXb3vTKBZaTNxvFPvttG2AYuoReWKfyidmSmFxHw",
  "key1": "2yDtxKr7SX6uceEJ2Jkufok56avkvQyxQeBeeQpqp22z1eMq9cLfkznR57KCHs9vQkTmHS4WYVqer59UPN6TX7zT",
  "key2": "5VtFFxYdPEWNbVPM4hWUXnfkf7u2KjQGgc7Lnyf3ojjQ2PT1ERq8Jx3ni25XKQjyaQq3tNMEqtn7573ksAdU4uCR",
  "key3": "2bFmYkEmkWxc445NJc5nsGfvkMD2sZpRcSK8iRtriiHbHWTiBnDL5NNKJGZ8SQyG3Y4RtxmACraVhr8Y34q86YcN",
  "key4": "4Pzmhy1qYGEV4dnptvfWoMkLC1AGjDzy234JM89H3st4SmT5HVWHSXdRbiuiUpJBiYF1P8dVBnMLj2sejS55tMsK",
  "key5": "53GGZJTTY2xoiGaxyyNNnmn57cFM2x6MZqga1JrLGg4mGEHxhg2T29MnJQAk7wQsppYZoRyJ66KCQeUspdA23Zxi",
  "key6": "4Aeh9fT4JMtE5V3c4vS8yf4z8YUJEoxUtbhUByi8DfJheFUFZMFazZCSmN7hPYDtL8YW248y4JjUnF3CFPjCGUcW",
  "key7": "FVTaXrTXtzyfBwajkh237WHCaqe8NfJQNdZfH1ZCUq5XX7xFu46xtzZoTH33QyWf4RcGnjFHD3HBpQ3e36iiyXm",
  "key8": "F2eSp628eTSjF1pnveVwmPjWDu795mymafVAV854ccnqsjrKp9GdKZf9bNtNVaiEavseLwQf7sfiSLKLVh2Fi81",
  "key9": "6Bwk2WkrgPKLCE4wxfNtvJgXBmn9TLh8Qr2od1x7u6hkjK542U13nUQpHwpZJtXhMb9hnvGpqsEiNzthruAzyYD",
  "key10": "R7W7y68cL57SKFnAcxQXjH7VpcxYEok4qp9R1EzvjdNzxnmPaE6hh2HdGHWQwJ3jULBLGy1YwU3KztVztAynXus",
  "key11": "5xqs4osb7M8ZSoU8kw8SCUa5mZRh9Q8UgKHKW6Y3tQwwFEhpUcLSBmz5JKqBQr2zpJZWZWEEa9Y2ho166GXutgkV",
  "key12": "55Vyf8yaRkuERY2Hwq9kCp8yRqnaqYA23pf6ZaqaLYPsE2f2JJMZxnzivRJXAZw4DdrYq8uLmjrHVxQjBCH7zMTa",
  "key13": "5NakkULChpLheobog73Xfc3UofBXgPakPHKwXQHAhxoBV5wzjTkeMX2cfZaRQxRLwBgW9jaDt9kLfdZ2pgzZDnt9",
  "key14": "4hoeQdVqBE6wPv3H6hPppQuoe6qgDymaauzK1afYxafdHvrLPfeWvSjh763HzvZ8hFdH9jctHd8yCUbuBPFnpe4f",
  "key15": "5Fqjci6aZJQHoUqJCNwMzmQ6L47rX6gqXdqQ9ZszgjppDTnp49fCDpafgJn9r7y5xzoCT4GKWceD4CCtfGsSxhaJ",
  "key16": "3Mv8hRL2wRz4Zr8vBya1kCdLVPaCt61mMKnShk8pbsRgtJrZdsKM9RgKA3Whj7np8oMcP9mpxNkfSYuKjNfEbZwM",
  "key17": "3J13WaJPo7rN3C2rJN3SkKwUR7LNxVMeRgRPqKVMxuN39qsJcc7advjgKt5T2B5ewUY9FW2nTCN97VzeoABn5NRu",
  "key18": "5mU383RBfgaJjQADjMsv1Z2QnNctDZZbrrBP2oFrzHJJ1hPBDQ8aNasQTY4YqZmgz639onCZESyXS3RySj9wAq8n",
  "key19": "5LU21iCXEWmxz5osZodB2iMD4eogjKQSc8eZ9A6bJ7NE9ZxgJfX1R7VWx1RdeGpFkGC4HFwAVEcMR4sBiKsPFQFV",
  "key20": "4TFrj8V91EDWsiVjDtXtQVBnyNarDSoiMJomw2VfDLjmBr4hUo8LRtejuKJpwYwVmQQvm9R9ev4e6d7qERhmqtrq",
  "key21": "25vH929BdAUNqGzv734qB7bunbz9muPdn198hhUTNS7EWQAgYUcj8pdTXRkwGBPiHxEontSrnEVqcXEtDrr8JHFf",
  "key22": "3zjjpSj6ADCXLD1heVBpWsE6Feyb7YBcP5tW1TNWZzAEDYD5yFxMu8QSo9rQTWTDAsW4DabXpTUmo5RvzZXtDJa7",
  "key23": "4wzqt1dT5FbxruxkDijpMefTZU92Zrak7VsBYGwM2gHTVR16HrG1vWtfn6891Qs4GzaBJgUaVdkNn3X8ZWkiTRaS",
  "key24": "5WPxFe61jaKA9HARuLDSkwmtHna8bfGhaZs18p9F3YWU7ReuTKxVFEmqR2AxWfQLfn8JgKJQXQKeywA4mj4EAajX",
  "key25": "3VHQy7WJwoQUPWPTALjYymSSYNhSZX6jvzxUNf3gJ53nzsNiu34TxZMeceTXqnBcxuyYi19HZx54TXhcMmJUFaMX",
  "key26": "4g3ibQzEidSRqb7L3rqnqSkg3HELmS6jG3fuWWPDSCWgpkzsVPz8iqjoujrrjUC1iWXcXHKqPZ8H5LHw9vLwBQc",
  "key27": "5Ae5Nh8MPMSCCfZgC2WozvHiUc61efBYXZEc1U2z8u2WnsU3cMZgCRvzkNnXkswTe7WKZfS3dciMXNjzeY4A595S",
  "key28": "3u9uN5bpoTpCy8SNrXqMrMSwqziAAioMB4Q9dvobmLVUrs1Ms7eWdnaa5gJokcTNpe8pjXMJ26jfxwqmgqmBEiQG",
  "key29": "oHDjGb7t9FPJfUSRbiYWydVbbhgousy2VK5EyNwE99XHuALtZwqkxzXm5rMBSbhyKQzeHRvrXoJTWXJogjkRAwN",
  "key30": "4rHrfa9YzhudhMHRzUGw8VYFamLntXwup8cBNVDbMzsQcH6LUDw6SdMmCRpwqtLf2yvjE1MLAK3RKv85HwJLHZW4",
  "key31": "4ptGdJaCx8yBudiRJ2xxDGQdnEGU2q4PCJasaof1bMCFw4aAqYitpa9EFiPas5oBoEAGh8wN2DvB3iJXhCViuQss"
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
