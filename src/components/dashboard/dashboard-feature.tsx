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
    "5F8HXYQaeV7KAitXAS5UqefhknvgEsDyRfG22yiFoVsW2QUpPSmzcs52MR8ApBqx7yXLMcnRM8J6dAoU2WUsNWaM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NYcFLvMRhzxgcQzgMXfhxKTqs5Xm3WaDMMQQkZWa6R7uXbJzruXSjb1SGvdM573W4PEZ6Pe9J2VwdofjijsUn8D",
  "key1": "3rrRo4WyqX6NxyQiRrNewHJ3U2nwm9euQMJPo6CSnTCEChaPFwRH9P7UrD7C3WHmz7pt9TjzQjPajc51Z8Wnmrm9",
  "key2": "t7LrPFmBv14uttiSewiowiLXUHrHzrPEMsUzczc6gooWVvrbtzRmEAQK9NFw7x1isxAtP5ZGQjcBjG1WXGm32aw",
  "key3": "3zA9AfTHypCGWB33tAMmr8EkDi3nwasafRzFxeeY7DNJgkJdFdZsesZ2GfJAVwTh9KSBcWm4iF3rwmivaNdwXrkz",
  "key4": "22My4D4AjEsbWZEqxComDnUdQhTs81mBDHZYHR9R2VEn3GcWGJHSWnzc3sD4q3jeVEUGFykdzE1ntKB8QKEgRgm5",
  "key5": "2maghFF6nxkYHqp3FyGMtUuqwbd53PYeYz79qt7DkJ4eKdHXaiuStJWdy1gFwsZj3U52PzmKvPV8ZQFYJKW9gw4V",
  "key6": "GqZrVdYkoG9XLuRnyyNQLEwDALokUCrRRJHGjVz85eMQ8MjEj3gC3oASd7B7hT4T3kUNxMQFKxEAaoxePW7e4nz",
  "key7": "3VHEEnTmhtg9uCNis8y84Es11wVirxFxmoo7KGaoSK8UhUNpAUJqoufxfkDD4B1RSWKgDHgzjRGcoa4eLJXbhHSm",
  "key8": "GcihJmsoRYUQpCgftCauzBdFuGZwaT9HHr6zb37uicJrfVD6V77bMedMNgnMz6WEJAX15iRxsQA5Mxd6hDc7oQX",
  "key9": "4GGs11qXUNUQ86PRTaUmLn4uUAde37hzQ2tzQy8x2xi5Lw7h2UBpegMx7nofJGEeWsej8gaPjDseW2KmaEdWnztN",
  "key10": "3AWGLysLs9pAPKtzPuhrDD7UChBDoYhyQKzBEFat3maKi8q6HyyzYuYJ9jZLrA98FquE2j2aCUY93FsTMey4gP1Z",
  "key11": "2N6dLCcVmaFvfA9t5gDBCGwQqvYFsqX4BSDR7XYXhHWcXmbushD2L34iYvhWscstpvpSzeEjUoMCjk6rfspNG7Ap",
  "key12": "LVBjMvarFUTHiEd5nYewfW18z512UVBNdbkwdpAeDDL9n7jv4DPHBXxEbQe6ifbuuRM6NjeNAsb1y8bwoxaZboJ",
  "key13": "49Qi9C2aNhApx1B3RQV81pTgpmepYYZUztQX8yJk3TmSJvTTQPfs4u9gsft1XvX5NzTSSqeaaD4n2n4V4BhUZU8n",
  "key14": "2UyxvhbZWdbuYSGRJqFDwuGir6T5KyHC5uPUubJiqdckq3mrEY1cqWdR9fH4Z89jyqiSfxp5V8LLUczc7vhjB2SV",
  "key15": "5sDdu5W6wjZZoVGPqK72mqWUzYNXgGvu6GduUsVghvUCarFrUDhKi6dya53GFgmbDgSZaScQnQ4WDHb447FTYLtQ",
  "key16": "51trFid3m7GkE5EcUygJwuKTd8CnXcJDXT6KK6N3BtWHTBZv8EXJfuydDi527KtvXhFKx2MczW1FsKxGvqaKPFCr",
  "key17": "4XmGHGrsp6LenExtJjGfu2smRfQBSVjkJLgnPmvnZ9udiu7AKoZWf5neo2kVq3mbK9CLoTVhrQQSJwUg3GrqKoAv",
  "key18": "4XX4mGg1t1YR4enaU5azX9TtVVUX9dVBxcoEKQjEFseJh37RgqsrrDR2961DCrKEK53i9dZkbEbT3vimw4AR7AMa",
  "key19": "4rxhdY6R9KuyMq6oPLJnYXh9hqRLVk9cpFaqnPzNZEgWsJYFLBr6DdpeC7i5fuPfjdauYmQnc8bA6qoxsMjtbNdb",
  "key20": "5bQipHJqaRyn4x5EemazPVcL9UQ4xNuHEXgwKPMMJHnSWWTe27A4BGYgbnQioQMvFaV5YJAuSWHteZCj8o6wjRqf",
  "key21": "2cs1ZN1J8mKqjUWLDyUJr8h3VmaHi8JuSUZWbTVsqAzQUnaAMNqZxfenUjUkHdWd4mFZDwrs6RYqcg1KP2XUkYjo",
  "key22": "5tdfNZf7qzZbALJ2LERJ9zrCeZorWk79jP5D8po4oqFYG2QbEZSDQCHoG55kvHdKuLKfjJ8oaXFfcR9gS5xiGfm2",
  "key23": "29SC1jYcdUCbbk9N1ZvWTnfz6pZg9zHWQsFaZxkecVZdHbEgsTJDjbpgc6xDYqt9dzG37fg24YBAbPgLQdtvJhhV",
  "key24": "5csjFpATL9bvxpx5EfDVjUBnttDRkqmsYxNKZdUXy7Jdu64n5ETXLJafkFpSMp4xef39tYNx9BkUhE5DJBVqvR1y",
  "key25": "4h7TN9BXrXtoRbEd9PKhxwhSZFT6cxUAx1p1eK8C7chwDcnD2HkX3spyQfwh4rMQV72EF8y2PYeT7cbBrq5cxprL",
  "key26": "43QsXKSHyiPcqzJbaA3dNQX9gBrxScxQzYJAmNDDj9raonT8ubyEPqnNY1wzPiqxmN7asnqaZ4GgW2hCXSuRL7cJ",
  "key27": "QCpLoia3ZkKenZn96ANTVNAKgVUzDiM7bN9KEmcNtvpp84cQsNnreYkpwN1xU3A1xR2yT6aorxPHXNcakYBNdcg",
  "key28": "378dgQTv41NniJTcQhxBK1Lo6UGdZPj5hkYC5kWhKBtRE21AALaYz4DFbK65SM2xscFiMxf7NTw6eDHX2V3axJMH",
  "key29": "2f3dy4m5he48ArghvcjrxcqQAiS7cpgB2kwyxNa6LqxZh6Qca58bYcqyF8C744xc7vJnmVLcyKqqfJB9wNRM7oFj"
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
