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
    "2JpdkZ7cWKUuUt4urW9eAGewN7pLDf7eMS2YCMeZdoND46tHyRQDMAwSDYNMmom1Hdqf1bLNieV3zXTLo2rW2i3P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52RSxiwepPARSUDZpc5v1YHjHUWsCgiLtpCmMGWrgrUn8s4ikFYbzeq2XUgnMroeRWBuFu3eiQYG5HXhravioJYK",
  "key1": "3DMXpVZdZXFNi1FJ3Bcn8T11gwAR2NTPJmktYr4TG6VEAwLzNnqHn7BatkN3BY4qHTZ7Gdxu8RSKQkNZbWjgXQ1a",
  "key2": "XgJZfQ7MehsdY1MvynUmGztCQmULyB4Cm4kdQnrKHQedndAzswCtkJzKYtS2T3msksvJpBfRYW3wCnP6UUb4GM1",
  "key3": "2cGeNbbaNb97Dw4XgwYQ13mPnsrt5bWQ9jyrd3SWjG9abiDZWZZC1sVWKvHie4BnNiGvkEhTK69KzEY5BbLez1w7",
  "key4": "3CpV6wJygn4ZFRnHKQArmkDwwpbiW75kLYyGAfk3qJcxrXnZzAafjGWdbvFF6DfVQWSrVzYjtG7whk9yUoCeoCEm",
  "key5": "cKw7wNUaokLbznsFJggFm4wqV3DV7xuSRPYsh2HTUguwWFaoQ4Mt5WCtmbfKXhqrNb6CeAcRy1xzqKxsCmha73M",
  "key6": "2zeurcCk5xcCRi9pW5mMRjCeaQrPtTTjd54X5WJkU7VyZ5iXm1Aan7SVeLXzGrLY3PWSeJv8PDXk45MaTsRJcYD8",
  "key7": "uP6nh77LqBRGLAJmRzxZVaCQMg1dSSeD25WiaqoZDdFA3Nq1qni94pvDNUou5ckqfFjY9uyR4woC7Nh34w4fM9z",
  "key8": "4ye5AgcynsPHnptTJzpLPMWoau4zoZke5q8S5fxsaf3y4JBtFZ9BZr1sLF6sA7jvn1H1MCQzM9JmriKxJBYnqG7M",
  "key9": "5dUjmppxoYStk26f9G9PuP5ugKRaoWMCV4ceNar3Sk4EAXnpEQK9EFr6CscBo5ZGPsn6bdST5CRG5BHUC8pTQEvd",
  "key10": "38i9ppDxDqL2u7mLVKdDBxaPDhcSBzBB1Abi41rLEeX5RfveqohuCB3km79fW5gK55mpkDerMRRwpJefTPWiQHwS",
  "key11": "3wMHK7LFx5GUXTei5zgHGcd6YRZoLeTAxjxhtujhtZ6AEB1vR5mp1zQDPnukS3uhKVpAKcDz8ApcnBwcJNQVzVAS",
  "key12": "4y6AeV7wvUjehtwzUQmHdq7K94FpZ3QJfHkYMNKuKRNbVmGcJKoXS6SXyBi6A7fNxxgnmNJTNkw26yKBt54of3V3",
  "key13": "2QY51RmoFux3H53E73vndaZRss3pqu9L8Wvu34SceDQqeLw7jRrtgWinBx3tYfRp1P71ofQ6TG1quGhv3pQFD88G",
  "key14": "56iy9WfgUFxBVJJ27bNnjVWDdL5BpEmaNhLseX4wJ3m9Q2zE4srY6gj7QWTcNKQVGkvqMpay2H8jxUEvnzJQidt9",
  "key15": "jNizw8vPFnfrLFnDin5CUqUVpioWMDX5T1HdSpToKzy1NLrYqG8hACN83hXkPuQxfaWHsTEyVcfUXQeAAGmw8F2",
  "key16": "5bFE93pvsMwKphURdJdfUakgQF99eZ8zg9cy8iFUpGbjrNEqKZZRWw5W1afpFV3iiZ7DaxbjSivTDjTbL8nJNtHF",
  "key17": "5P4PvAwg5i6EXMacfPrjDk7QnZRdurjR6wbALJRDEjt1Xxo6uABsPATdiWPq3YHusrP6JoZ3X19eTLbQ9m5E12tr",
  "key18": "2BpWqLx5oLCsVuUHbzQxbNh6ixxVNwkQEyAYvMznFFng1peJY1cY4fYACgH4b9HfYjaSU1JiuRqKYPgif48H3PUA",
  "key19": "5nYF6KxyDGSdPsQJdbjPj5USB6MU6d9kJM5arysD2UL1K8Vh5prTpcjFLEKmcQQPMU1WrJw5cJZH3g32WJwAyxnD",
  "key20": "2fgeMnyRLZTLCMH4usTZ3SDLTobokUg3EiANPBeaDoeN4zLWKgufnosFWq8YZTVC3vcKRrkhWdTVwS3VTWjnBzWG",
  "key21": "3fw2DCLU2a26kF3eGTmNMRtfsesL1E9cVTzAfLWJWg9mXgdJP52jK8xg9kszdD2xuKCtD8mnrX9MWFHtcoXX1jay",
  "key22": "5kxRbgf4PwAkbQ7Wk2RFWCb763Y3pKbM7nMGTEWgoGH7jeyv58Geewxkrw9qcbTFtPUg7v7QPSM6No8Vg3bwY1f7",
  "key23": "NTKvzBFxfDudHywymYwJJSjxrMgKxescDfpDNmzUbcg9Au4thCmqq4GiutfVHmGFndSv5HRaoaejhGpVHsrvTV4",
  "key24": "fDxdenGeH4tzfbdQTZJXqUwGnB2ohGCM2kmozaAxFFxGvaQrVyoLmZV6WsCeMkhfuwm6P7CUogySHcoxHQ1ePDg",
  "key25": "5GxULRS5UPnyyKUijdicf4WVqiHjSUWQ4ZQ5F2ooGS9d95YuDuL889LhFpJBHQM11iQbMEAcQuTHtD771KwYaPwj"
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
