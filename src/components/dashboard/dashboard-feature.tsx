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
    "4rDy8SqDGwd9SA7Mpknjr9zmYtKfUCnVt2HLyRhTpERMFgLaYCzXcckh3ReGshPDitHrQFTuicwRTrk5BPCrbcDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i2fwqT5XaeSUCnm1VxqjypGBCxax6hysj8gxKzwQ9kqKWZZWVoExKb8sfjZAkLnSAjHvRnQwPS2KFRafXhY6oFs",
  "key1": "3axCFZaERExjBo2nGTWfYRLGrxsZYvYFPXW7RPexgaof4MvKXD8UhcUhf64PW8Bhy5iQNCsbRtLq53Qz1RKDV3jU",
  "key2": "eFmFudXPzF2RGn82QKWsBVAXy9yn9oAoPWkXERdufsADWFmbJnB72YqCix4G4c7Ms7e1Vom2T6EjiByCT23uCw2",
  "key3": "5ECRgk8jGqoCgHxCjXKKnUQDc6updmRdo9Z66UW5DkCvNahQtnJWnogbcErBU6dX4SZF6RpHadXxtQ27REAzF5dt",
  "key4": "2hhF3qzBdkvTsytb6qhRehjYEGCaMbrPApXRAxNUHJdsZkwAP4MXYV8HHoa3EJCJ56DhxzyeS1toJbQZNrNZ9F7C",
  "key5": "5FDHCdXFSoLL5YqdR73muc8kSimLdVazoET7hUgQcJTYtkhiMtFH8FvQfSd4B2No3LHuSspMiQWYUBNd8ahsMAFw",
  "key6": "2xESdo6CuVW6JkLLb3TKPDSQBoK5TxEEeBDV8ND8tWxATVcPKNfwKWBqDnnH9gWvq1mSnmRFEhULKEjeuSmFj3aq",
  "key7": "61FwXkuQoP9HK7gg3hrm6KNFSE9icFCac4kmrWg2FaFwc1s69bwsCfLb5sgvQ6xtJyNn6x4Bonr62EuBnLmADTGB",
  "key8": "4LJAPvRg7r9WYJuh2BuDC5F3zxyZh8iXfkoqBueJCUHN9FBtBt6nds5UYgHvXSbvZfuTDrW5Fxswub7k7pfyqUdc",
  "key9": "3MfHRyemBRu8FRAMsf2Ct2MT9rXjmRX3Y8yza3GHLAFhuEjBRhk9ibJuNcMxib9ku68S8YMN8q8Fa7132G7iVb98",
  "key10": "21XiNg8yEM4fRKBnvTcXtQLypyvSd8q6LCSPY2vGqoe3LWGHH16ktaoDBUoiiyhGK2fxNHfrgxcz1HA5vBSo8FN3",
  "key11": "5yeUD4PRVHkDY3A3KMwGeRrK5mqdXJwfkGi2psthRVPECe9rXLJ3kxDp1qBZgeCFfXMSRdvJCFXWeQiREmu3A9uK",
  "key12": "Vj58ybm41T8ZtRDBpWsrB3PzNyCQQy5bsgjbUWjHbdz9UyFNb2ifQw7T1uwPxuN2F1d9x8xkE59LfRRb76387uL",
  "key13": "27CoTLmWJW2hRBW2VkXWc3Mtw2MnGYm3u3kuCx1bCjERbp8mC89NJCBwsRzt4JN9D11nbam9AGXx7bcEd5znCCKg",
  "key14": "4gpVMPrSzpugw2dAZ5J746wST8RMux5NBHYBveJJCWJY72WCEi57FgdsGrHTfL1gHtZFA1BtH47LCo751vbg6UmZ",
  "key15": "4zQRAb3rUFGi8Pmn7aYiwbkk7d3yxbiTaN3W8XozhViUVxRjtKnWDqc6WkXnSBTTGecgkdiWbEwwxQFztff7GNCB",
  "key16": "2tbqBbPceDD7UVU69G4Nf9aEZ6hHCcpNXGEZEGTGkPZgs1a8wKKTySNEFRGVvTgUia259LFooVEh3GgMBbzPVwrw",
  "key17": "25TcvpXaYqGYWAWKSFGVLjDuKho7RuaKRYX9ui8qnwWdnpSnhxbaG9ByEFEutnK7qqWGcYWnAbwMpU3sWDDdFf6h",
  "key18": "KXxTB84f3Soce3WpauA2LeMGTVaN1tPUXsfWtUgPGhHMQe8NtMiLK9J1sj6ujyTYuNkYxNjKrXBs1A4B1QMoLey",
  "key19": "2VjhiMGLu9tKeCBYSkCNdVvwekPmktNZVEZJH59sEbFhBxmQcCKymvkQbKxVHPJoCXJ3Syr9Tp7mp9M2A95BjbLq",
  "key20": "55h65QUKn9zorvj2sv4Fi9GCz4HGyZwWn7fhKfhTW6xM6txba1T4D56daMGDrJVf64fzyxR9mKb9TtXMLwAkaehZ",
  "key21": "5eixyTZdGyri4ruRmMRdDc2twH3BtGqnGFrLQQURpYUU72eGcVnQeEmmxsip56xYcx7rAqigXFZsMTa8N6cM5XtY",
  "key22": "5PJyktwdVagcyGaPUZH4z8gxLY26krVjnmrw2YKaL5zyi6PQLd7EGiR8tPyToePWQA8bkH7GBQaTN1NWR7x8uoz",
  "key23": "4YVkh83pexYwkXFkqRcK1dXhRXH6LUcr9XgfzGhb2yE9FLTsRcgnKq1HHtJFTigysPDNpTA2TfJTVe8hDrJWJNjT",
  "key24": "5RvaBgjXkhr5MizskhEy92sdCAxPaB1mhpEZ9dkh54i4msonwuMgDcEEMzXq1tyAFQuXje77f6Honn3xXgi54rgd",
  "key25": "2d5YZSNuRXSEwn1ZNA56tHRQrxqwtRX3RqPHS6DSJxacTGVXJvrSU6V8EBy4D4NQu5UpQufFXqVWXG9J1myMo15w",
  "key26": "5CkT75xqwpP29ySrhRZjvc6aVdpzjBnWFYdwvaQGBxd7d6kmruz3FBxhzmyNsTffaMCFwc2SXFpAM7Zh2DAvGBPW",
  "key27": "3xyg7FcZBkYMivVVHJgnbN9pbbeQ6BNVDgxygd3MBcCw2GhGcReWyNDXT5EfY9xrYw55Lygc7fBfbptVT7TfwPtU",
  "key28": "4PgLAV87rG24Prhx4bLgnHi1YAmM63kQgaNxAH9ytxWR8q6Prj7SwZpnK4Ry4gdD5KrsDAVgt6mfvZ9DSjBrPYcj",
  "key29": "2ZV79QdxuqGFwwoJg65WGWdjoSHHDgpSDpQ7RRWcLZfWucU7PUzp4k5oxG8w48UZm4mkHJXRCLuYaGnrvAupigUY",
  "key30": "4qHQtJFkdimVJ7F2qSSjrjYEKtS4fjg1SRQ1i7V3rcGrKAwSqZBzeVd4MK4mpEf3wuEQjSgxATqhZvkdGsmMttJp",
  "key31": "5ukCpDahpmU3w2PyLAMHWMtXgomApDop35qpiWuCECdrZ2b49qyPd4b1SFmbL2fXZtPQkYfTSmJYiDoULrVzCRjp",
  "key32": "fXrojoKNxyd6fXFKFH3ELNKtPbPrCydh2QLsMxW5kgZKm27VXJGeRZihqnUHDNPgoRvcFdYqP4Xr3Mufn5AHFyB",
  "key33": "5Dtxjys9Womo1mWoC4xJLq9G7UUwXLnv4mHwWLtAofnsvBHEzq1Ao7xq9S3YHPWssZeTdXwATFD24yA8WfPaXP1q",
  "key34": "5Upv5x77UrwY94xgwPE1oTcX3djvGRnyu28Z9SkB6PqtVU6EDW1NkuuURYVxyFH1QrEHDgmGY9bs7GJfTaGuZF6V",
  "key35": "gRjjv8NzQDapgKe7cu7KdhKoPWfRA4FMvcvLTw6dh6zMRmJWBdskstizJZNHdqjkYMGXy2WPdcK8eUHMpChX7iw",
  "key36": "WmaZrxKMo4rf1jJLr2y66ZnnavsxoQhzxocAfN6sy7ZG674G8jZ9G1ajV8WjWZntrw9SqbWu8gbM1aKcD7cV6Ly",
  "key37": "b9xtr9WHobRhqykcrfqzqACS3UL6es2T9aS9KE4GjcsAPAMrnZAh7FUEWN6ASFPVm4dsnxs118wr33QA8D19B42",
  "key38": "4ZzmK6iu1Eaz2n1hT1qSgUggy9jxR41DFryQ23H9fCZ1ED6PMxQpzbFQmp6Dgitt6EKRuv5fr2TfXnD3craaLWtv",
  "key39": "5EugUKyPHRPi15fsa4twtQs1cy5E7njih9oALrC3kB83bp1FSB3SnWNg2z3x3Grv96C14YS3eHpsMTD1kP3iooFk",
  "key40": "25SMSZocJQdnTusHDeYZGuVxiXQ9YZpBXVYtydqWoJhWDCQiE3NoYgWpjvUSiJBGaK72LcBWH41Dri3RChQtSgpy",
  "key41": "2AuT28RJnxVEEJRHxksdwnEjg7kMKH6HhLPnx89Kkbm8TeyXUWX7KoZKW9UuCiePAQ131cMAHWnPWBdptbRN8SGw",
  "key42": "Vki8uRcMfLHFt7snb1GuwxqQNmJVXAoBxXXP3dUEsWbUx4EG7Xj8zV3EG1XKhW61MKKZ8buahwtC3ydPGZ5wnnf",
  "key43": "37BgjyJ52r3H5FwVUKZDDTfga7QRBSQcaM89zgm3THEdqk5kSjSWPAnGAYeUrpEfviCPft8pgvUqMw3Vs8xijFt2",
  "key44": "2C513FhejmBzsV8543ntFuHoWjB4TVyi7Sdm3ykmmnwz8AYRpX6mrwrhZWNHBEYy4dgjLMvikD3xGaHzZddMMBSy",
  "key45": "3CQAhxHnNwKMdFC3tdq2R6KQ5VGCxjPJuQEM7H9om1cVW7a8ywV5eRxA2UvcY1S1rCpe4fZxmrCwetiBHZGTpMt9",
  "key46": "41s4tz2EP5vQr43nbwjZnd2K5kNdhpvAFsrxo85Ryv8sR1DDeKpTgZXnTGbrD2omnA2MU9e7YAfJNux36DcXv8dQ"
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
