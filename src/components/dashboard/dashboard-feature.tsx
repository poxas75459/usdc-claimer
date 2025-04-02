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
    "3igUNF2gDpcswh9QAA9XnNSzRj68NozZzrGEP1C3xRad6TcBtELGvcdnh59cFKE84ZuzuJMYGF2N2WdVWqYYF7Hx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58wwm914DBowAWr2QtteFyjyGqCpbXrw6kDgzrQDSTTXbHeHrup5WfeuBVz9jYsBUFW4aSgZHmaMbHgq995ovG8d",
  "key1": "2fqiaDqwHz4xtUusRWPnr2FbQwvTW5sX7EotPyhHQBtdLpmbVWY13kZ8fFteXzm1TzPqfZYgtMm9RVW3GVibdAYK",
  "key2": "5CGYyKq9eeomRf3JphcM9PCaPSreW3k2UFwJhfwNrJb9sCcojwLFVSEoYDRc2NbTSJmGCQ8f1AnKLxBtCvvzcz2J",
  "key3": "LewXyNVBjtmzSVgjVr32K92iWDMcJgof7M62E2J4UkpbK4nDvNhhqPWnf2rJS2LNzLsCP1jqfr1anZNy8WDPkug",
  "key4": "4r2B3CFnS8X5V68ezCucoFUS9dSJ5RwCBigDxR5c1ZmSd6MnmXZSmmpfrF8qqf61Nw2mgQtW8Fz1fibifkRi4Qn5",
  "key5": "2fxx8vV1E2YuphjyytpHG61UVAHaro4se8W2ZcTqqkbrUCjjRGUFkoNHBRqQ8amzp51XAZyg5fHsCiXRP8KQNZ5c",
  "key6": "5sQv3zGCaxwLqFFAkJnhXm1iec7tgMKKxWdAgjq8nPaeM8wM8rB6e1V4ruDQU7HV4aaEsFmqKqDofJQJSH9biUwt",
  "key7": "PzCQfFCFPq9rFy6cc6XrjLajtc99kLTJ33ohoqcyc6fpgnACEJZQXuidFHkHt2PwEtAG95YaWuwu5GvKSZDS42r",
  "key8": "4Ruc9ggxMGpFdPokEnKuUhv9LKPieRFi4TWjEwCTBzY5f3JZk6o3A1i6pkUiUZgHgN3u1kZE98mkBXdaMJMhCStD",
  "key9": "24VW8CatMgNcV3URY6f68AfkcJ73spXBKQChXjSXESYKN7VVQWnRmkLdpJk8DcL8NnNSb6TtHM4mteKdwNVTMjvr",
  "key10": "3G31oXNNh1zrKYuWyB4jRgzYGuQiM3ViasCGCi2YeK8BQs3tmAi1TgsTfhd68yftuYBUJs9rT9yMQ8fpgujKu1Rx",
  "key11": "2bvrmwPQDqN5vqdBfBSMt58qNU56Po8c5UCqktVLbtmjQZcpHqZWpVcCGAqHcC4rQ9iV2K2pZNu4s9NHriEVTgU9",
  "key12": "2wkPu1b8Modtt9PMABQdWSZyNBZS9Zf3orkqkNFZKc1e5cKHfj9i4r2c4yZ4GdYVdoHtcBvbKRuj9zTnb29DuMPe",
  "key13": "5H1wEotLEeusFVBcMQNsbRQDqZvCUDaeDiBYY6XMogzERDpNhXrK177XmkhktBddn2EYA5jo3WvyJFjgRkR4h1AX",
  "key14": "61jk1K5B8oW3GbwcMrCvP8UKeiRyE4iuJPL184MxKCQyHNh4A8NjhytEyRPPTtNCMA1WcopiWqh8GDZTdYx4NAv7",
  "key15": "2G4WxACsK9trBwKkDc3hT63CFQwZmMN3fPF8VgEqGMrkfEmbccEvUm9ExZpzXFGjfLmFCiKajFi5ghssNs5RjUDx",
  "key16": "5jcjAiNrXfRUpsZ7ZC47SS44of5TGEd6fAMxkYz942eooJ6ARkZoseyArhZx1pemVfNoJS7KwEPXQyVpcZ3PYy15",
  "key17": "22xsYDhm7YwcbhgeqFGVUUGimfdEiHGYwdCsRwcox6vwGJy5V1gwDTWJYvLZrrYRm4FZwT62asLnFFcmLgogChQP",
  "key18": "67JCtE4otCHtNKa9octbx4NRz5kDFRoJFgQCZa1ejAxYGL1vjSwuuoH9v8nTJMLwkukLypGDJZgQgMHdT81urVZE",
  "key19": "3Av46u5URzfXCkFUtqE7iQ8bLshr8FqRCBoKnWhFdg9M9ibx9CyGr7vvYq8NzZBxunNHEZSrDEXHhZePUyM216uZ",
  "key20": "4QDoQnSMdfgboVwwebhP57ZeQ3FfQ4spPnjNjrafkBCZwXi4Xp1MpZZdcBHZZ2XtwHredEsSmZ9yUzHuxiYGqCu1",
  "key21": "3NTzfwU3p5Jt31zfZtYeM1qRmXpH7cBXyFA4ohpzfCR4bD5Zg1KdRpD21bDjcYBzojuHN7TKvDSVqfAiegQ1cAHF",
  "key22": "3caMbDNHoMqjJBvZPYrni4Ff8LV6h1wgE9SJNQrwcwruqGFtdJY2UMtgrPtrwZzpZ53GsLEUx9arKspFJcBAw4XH",
  "key23": "57P4Nc37QYrayPzVuN437tZWpYzhZM3LgGThEpSjrXN3H2GoYxgXbqsda3pcZhSTbYYfBwKCPqN6eucGtby4WfcF",
  "key24": "27ryABpRra2d2PXb6cWJZesUX4hyyvBLNu9wDg5e7p13qKb8FmmbFk58PyDd7DzszZKuyuzXZZ4yPx3GuwKo6Rwa",
  "key25": "2j3UfKskRagnbWCXbc2sEmJodSAozZojZWLKFfaFrbKQmBoqgNfWDQWC4T9jbCP75LqBPU6hA8wVxfdMboMryi5z",
  "key26": "b7oDfMBBe1FYbma7GA4rUbnvPy6zQ98adagMvLa4oAy2QdxmFhU9kLrtb778sUyYenhXXwQnjcQmq6ZRah9DdRa",
  "key27": "5Eo9yL1MZ39tTpsJr9W7U2GdabSNbQoMJkn86wAEvuj6Z9YiCH1DbRqB9hqVndNf4pDBcWiRjc1gxTSoCdJd4MGu"
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
