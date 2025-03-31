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
    "5e8GCiy3cHznkEEqyp2V85FCd9Zd6EgHuLUaEDahXrmTqKtWzardxPHZh2GNrysrij11q8WLDMKyR3NQEPrrJG7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mZUvZesePXm5fXNNcmmuuCPaDwCp4XTFkXxNbAKyvzoPnbAWr7Bq5UGte3xMJVWjz5ub57E7MYvUqfCwPrAcF1s",
  "key1": "gkvaFDygbbt3pisBfXrSa1SVvMMz1zuFLy2HC5jJjrkmBFwxeLf5HUZRpeaSAnL1KLG1wExcKSBAa99WH8bzi6V",
  "key2": "2ujcSPWSYrUGhiVBfgjR3AARZPBQTUTHEatQJKx3ys9n5dQFanA2QijqC19ToyLDPXxKuT6fB6ghjngrsmh9cKZL",
  "key3": "ekhJ6juMReWwePKkz6D9bEdXWq8yy97iKqV8JemqVxp9McmfpPfZavzoo7hkdwnh5xUj4cT7JH82g81tYtgG8S6",
  "key4": "5Mm44G7jEkCQbckjd4jdX4YGF1yi7TEDXEB4EanzJEuXKH5PApwQ1vqdC1DndAV8CWbD4xfv1f7L5HqmTxLECN5Y",
  "key5": "2mT1DfCGE4Bg9Bqxx6kny8Rih6XjEbSca29LgiBiBGbSYWm4KhefbsgXxLwsrGSi529wrHCnbtLWMXq9Ssfy4FaS",
  "key6": "8KrhPRztbsC35BXXPCBpzpG3Cnw8EwbnJAXLyhT4VJKx7QtuDqMjH5YTXHup9amcpypboeuApoTBqaXbs1VPA5X",
  "key7": "3nm7tfx4yQC7WEcRHtRDujCgHWwopUzy8xZGT267Qp8VZDX2XaDe6r7BsU9Uv6PLAUJX56wFQeWyM6T84Nwwq5FY",
  "key8": "4HcBNq5GSLLy3p3ozrwJRVJ8KkmL1rPFaYbGfx6G3a9wfRaAApFRLMHB5ra1FbgLVNxi6qsMQ69R2BpH25kmARHQ",
  "key9": "3stL99xnkRBLtkUMam6kD2DF8Graqbpb6KQEn6Fpa6miuw7VMiX5XtCZs1EuqmJDMGi1eT5nD72JL6ke8PamsCwr",
  "key10": "RfHruDFKzc5GRHYZPYU5SbN2fiEnJXAq6fxbLD9BswHRKeHVeCGQkeLogwW4L6UWh3vAWJmknqgtyHwkYv9XCbp",
  "key11": "nafj1ZD1TQp3QuC2Lj2DQjCxYBdTSe4msuu61bAoWKy2fmiBbsffWbw5m2rVZ4bSWybVSGud4bNfimpSQxWfcmr",
  "key12": "3a9smHgTBxdUree4B4VbpEfvc65Bd65YVxZzex551j2wiCEoGQtHzazjLWDZv8r5AcP9sikHHEZTTdtMr7dY2YYN",
  "key13": "3JxGs2LAC7C6vGEo1AK6trWrYP6oZxErLsmQ7G82rE6b9F6Uxdftun1yHdMHHXSJadsBjMMZetTZ4nLcAQPFMkEs",
  "key14": "2H8zgmXTX39jXCfBp499FKFaGJMhmVg2tkuPctc6GAB49VvHYWS6RSqun3snt46RSwzFMbWRHYktcq1AGgLsd2R3",
  "key15": "5tajimV9UGNgbHRAsViKQyWmczqqpNEvbjJDR2L8YjebhdKM47rsCPUoCf5865oPCjX91xCWvPg62bmudJfsuJQK",
  "key16": "2WQQAJRhmnb4agiqdyS9teJabYGcDadqLpWEpAvHws9iub2PuicDEnKNDSUzkanTv4JmJXqivZSgHPD7f6GPA813",
  "key17": "47Ge5fzXBixvkoigdqSFJb4UoudW23VzikDPDwAXQBQTt6zxnTCPic9ZKeveQELqHFYSr6y4AqTErjGmeMRgrnCf",
  "key18": "412ovFQSwxetSLcZQwuB8YxFME7Ca2uMvGgaYNEx3RZrshgpyuqNLZWy3Hj4ECEe9gP85nybxLt5ZDiX1QHmoyM8",
  "key19": "T8GStFSn1KFcGvVZXVU6q9w873Vav88VYZiE5Ypo24Ys3B9ezpmBzDpcQG8uRxfXbyxbcgGpQwGNGtehyYZzbQa",
  "key20": "4LEWDbjmXzzjLATzmv8ANPVzoZcp55PPHDAfsbgHXNX7aBQQ2nenE8y232SufK5UwbCsgSCrou3VEUJTxhAVZGQK",
  "key21": "34eGkj24Dj8hi5e9z9aZEB5kQvFuiwXLghhsnPbaD3DVDoVZQPtwxkZJYJ8apPxhqZbx9EqKfUnBFKWX8N2UKmw7",
  "key22": "gmRfcQEVj8DfAMRw9LYF78eFLwFq8QnH9w43gTbPPJWV6ybcEEdNNhB5883iFxpBf9r3nQVTGg1F4aK5jrWCGRx",
  "key23": "4q5rfmohjy8BCy7dQUSHa6jxXVK8trApzN6WjWTWV8NWZx6mYjZDH18ApK5kngzqxxEDxdY6ipR3BfRkY8vnFrMa",
  "key24": "roUcYjLUptBSgp9UF6EFdXNEPrhQezWLaXWURfH6jEXWvjGQhTvRwWG37V1DtH8QL8j9A2udVMUHkvAJMnEk4ZC",
  "key25": "4Dp2VcBjRqj754QTk929k8hgg5M8jprQLkYF1XXS5J64gMYj86KxmuZuGJWsn6CM4WkisHhpNUuJ967WqZrdhLVp",
  "key26": "3GzvYio32afRm5T3m6pYPsZcVyPrq5ayN8biyZcsivvwyRXgSpnbUGvkRNF8qjqA1cpUDLBwSauqt4PXrRbgiZrw",
  "key27": "sNm4NcpLc773YCE7b5984MReVHKN3rmkYrxykkL2bfAx8DLVdeKFSMLfWfzuMNxjCQybph1XXyRmM7NWPGvs7RZ",
  "key28": "4qEx2Yitfazr5KJHapyPPWBFrVunXu7AqFjUZN5RcrjTRdnquarCi5gs66oSTJbxNoi2MRLFzSUAdzgdav5oCo88",
  "key29": "3XafFjYhA28VegzT2UwfmJ9PtLxGun3yPpDUaWZ44fXWo5y5sr6NMRXkavmRYMCY2FVw5G9ZuE2UoXn6ZzcA9sjA",
  "key30": "4PTyWjeSFBRw4LuSnWugXisscax7qyYHw4dhJ6L6MGMZGMjA8mfVipTwjEzK222tqpquSi2mij96t1UerZcwnY14",
  "key31": "3nbKv9Xynamd6jtAszRbLJWiycrQJrWfJZcxL1GdihddQ9QytY9g5bNqLCvZ5vKboNkDQzo6q6WYEZYMzTupfPu4"
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
