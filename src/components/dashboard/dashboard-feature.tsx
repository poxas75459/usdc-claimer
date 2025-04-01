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
    "4qfyY7g4kZcSN9HT45psd7iKbrEFuK7rceTACHKds8rkK7kfJGfi17sVbbvNCQf9NNEFMcbp49STxzkYXUSe4Sg7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rjhfgo6wiUq4UueMsNMDt57FG4q39GCCcxWbRa3Vv5cu6N7zTThRGt4jT1kx7YJVWYqHfC7WAR9QDAXEhDnqvpj",
  "key1": "44rduuJaYHPcY5a1He1oiA7ZMPa6v55SgNvaupUtYDqYZorPboBuRAgxQNQXuwPK37uUVyHASAC9L8uK9YoKFiRg",
  "key2": "2BWRRRTDarV7Y1hXcdqPw1AJq2Cxc4ZV89GhK7yErhXvhvd72QPttDPGRF77SgzbgfbeSi1BNnkBkBUEgxUccPqL",
  "key3": "5XZWckkZR5ZwQeUwShchgha6ZxMq3GiQucmQWxVT1GBZsjseJfMNEA6xw1NzS5A88dhreVgkaaGkYwwN8hfunPXi",
  "key4": "4eU7vEVpKzPDgTut6WccKmo5h3TRZ7toZLUFQqMXgria5QemXB9HeEEzwY3ZmVrWYN9Fa3CMhpPUwAg1v5D5hbd8",
  "key5": "4yJP9avPEF3NwR7FCP9m5RLF5xZesZ8um9egHhzJP6JzRqC13cty2N9UkoMaAui7kmevaBQuSCfw66Xdt5EsZmSL",
  "key6": "3cAo1mjfjDza55ehGwpDDyDtgH134zzcHAQSvP8Zy37uHN5LJFGrDWuMiJZv6DaMH7z2PQwxeyXG724DB3btAkTE",
  "key7": "5dRTJpDQpjtbJAc1Yeqav79vLsoB5dUdGLFpZKb8BYmUqXWCbuF9wG4WUu73ko8VGCdUEYhHcC7LX14iGafxNLrb",
  "key8": "smnYdj64gPfvpSNuDjCrBcnFrEQ4oUdM2BKgHxnBbA4kMu5454a4DgEL9bN6YWayxXtzVtTBuns2pvvcnbkcY2B",
  "key9": "2R2wi9gjwEs8o9cySySyB9AVZyyExyHJUWTJmSnHrwkj8XGy9u9v7aYdSUkpnb7vmurtFydbVDFBKVFRes4BbjL2",
  "key10": "2Y1iuBxJthWjmBswARdgKXw76gtxTTJQEd5XoATrGWeAEBuKf8Bt7CWyZpqv8276s4vJ77RVDuGcbn4ASi9vU9Rf",
  "key11": "5419eWT3BUkyzJqMMZfeNdX4EqLpoDzMJDqDyshFKi3GcQRgZe5wi7HKDuRDVc6H7PSrSR6ac7zTc5LG29PMg21Y",
  "key12": "3rye3rA1WMr619wgeEtYif9y2vRg3xqcCkrAg1jPoT1fAUqXupGSxgbZJoKKNsBZ8p6xn31ZQ9fanriuRNp6jH5b",
  "key13": "5isHxe83uP8HhgxaiYop6BvECi98rbmTWMdiGaFAp7yzTsHhVhq1C9aQ3yv61NyiykUnNSdwTTyhWjUNcWQzVioL",
  "key14": "4aq23QjQh9h8N7wrJW7uaH6BiTpNnwZoHFm571AgdziE4EQwYXjxeW2XAxs77iAdGyPVdEPpDfRoaJiP6ty1RQwD",
  "key15": "3pPRRnTAv2SLrjnrf3HdFsGTwNqva55fPV8LawwA7YWxXphmUfeKLJDEyQJdvFYE7a29UdsRRSgn7tx6yhrzcwQ9",
  "key16": "4BDWRo35evKfVwF8s2qcWNzNLVt2Pm1naFRoyKXiKFBFQVWFLzTWmAbkhZgEp7nG117xf7bKdFN72r9z5yD5kCTw",
  "key17": "38mBEFgUDzdu38DgztWkQcQSuWrCJJN5G6A2vFuw8XvENEfpGbJY9fdt9vxdvfyzxHs6chD49g67KCSjroxmVxFv",
  "key18": "HJdFgbug3qrAqEh9PXj8z6Ne6L1pCT9ggvLgyAFzLQHsYdGMXzFwAvovnayAqsa3hPiky8Ej8LKHp9xZtxKCRE2",
  "key19": "66yBffkJRwafS529kiLX5bDK7cPyDTyfxwQCjKSmXWiKYLJiJ66C8Evdv8k5Wt4rqyn4zXvpoHtDy4uZnYag1DF",
  "key20": "4EvMo91Dh8kGnbsbXQ3ER93keTeNSpTAQEE3wz3qdE6zEWZTk462UuJCcgNh36xSN8cNXoQ34WCFdvf5kmkiR6tZ",
  "key21": "4kaYmBXMUrXVfmJGC9beSCPdw9LVzT4QPqcg12cDoapksKX3K7uLbTNNZVUHchsqa4CHePJbwc4UjuJw4Y8W4LZu",
  "key22": "3XAWMzaDowmDQSQUytise9uRjbs5z9hN4bikKstKEzK1UAKLtb1ksomG72T3Hnb1CWigkSccQAgTZXKxpdpqGESr",
  "key23": "4isf8PsBz57nEiCvfKXooDtLDYqH52JFqikWe71ByUc7tFWJhhFmb6vtApnqtB1ssLDnrcsXSieAjsvzJdy2cwix",
  "key24": "5ZCypBHBCoJW9WPEeMC8GzHANJZ6QPg54Bbkz9kQoGPp5kvDNXZDrCGeyse3QyKYunpBusk4JwQUEvekSuMQsTnp",
  "key25": "2TS2btCm2mtKKGxboZwLcws9Y5T8NDcJ1tb7JEsMLh6pTTFse8QJrNhak681acVnMaPrWopfnRJJbbpN5XHkxpqe",
  "key26": "5Qjs5dR5UcaWftCrp8QPT2j86KLdyfPjKGbdMSFSFx9nfeqz1wgqsAzD7cF3DzQcYYggekCX6GapTSUMvJDGCsHz",
  "key27": "4PfURLdUHeSaFpWRoDETSWuwSNer2TnUSrK15Cp7SkWX9JWoGvWpJCvoU5kYPQnFw4pzrqLY37oq5JKuz44zJZtW",
  "key28": "N8Gayabcj54BGH1cqTsTvL1aQkzwaTKFH7xCyjmwgo4sGCB4i55nXeuPzUnsaubMdrVSYVr2ViQy2yZJMpKkwr6",
  "key29": "31oKp6U65hCcCtSnzDbHQN8L1HymZzHAWvT5wt1wnDuJbh7wzZPerNemz7myEYds3KSgCsJPmSFo2SZBAd2xdv3F",
  "key30": "4hcvdXbXz5chWnyLUkpbMYxhoaUSRvzkhQ1eDDWqk6tnPhbjoABoKs9xpDFzBw2i6mZyMtAuEgSa5MqkSpYdjJGg",
  "key31": "2jbExKMWv4farwpxxPTp3PNSNKiDxNoKPdS1tvZzdJDVDBkPEZNC4txvFma41C4Z1nmysPH6GLijV3Cf3KYAddej",
  "key32": "3qavf2JSQws68vcWLeTGcpkkoPtJkcnN5Z5TzsgYVRJZq7GmRoij5Kwg7Tu9C4nqRUXd3fHt6wbXjvaHaUR5A7zm",
  "key33": "vvo5JefVJXJUmyEP7p2JB33fRjBZ5xR5aHtRGZKEqybb4wW18X7oQUCUaEP5TfGxiXjS2fytDW5Jt3csY8R14tk"
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
