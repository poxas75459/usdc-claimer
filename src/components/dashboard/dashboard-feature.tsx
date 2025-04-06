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
    "GJpa21tgQ6BCYyVGm4r4cbM4Tan6Mi4V4mgugmfG6iJU9c2edJRa9eUxRHYJM1UhY1SzpdWpCrhCdeS42LdPFnT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z57zYiPGFWci5jXoXNcuLWSgB23UsGqZHs7Qe55km7ELJLhy48WgN5rLsSRtohNjmnfV3M7hAezFMCxnEixRU9i",
  "key1": "3qAnkKzeJr7Zkkxp8voqNbYFEx9ybKBaecLzCEQAtQ8R3hBhKZda8mAoSYo2LwBDpCVW6hgFKZtRPUAdxoDhfWvo",
  "key2": "Q1xu3Sm33rtkMHxJbVzMpLYf1zwdH3cBNQJ6VccRYSb4JmigjvYSzb7RfP58FkfoNQ2soHn7Ght5ZmVNAEUoYwJ",
  "key3": "2KvdURXhTta2NW7bCPqtX9sfYPNMiNDGurYDHGDcy4fJYTBHfeugDKjzGHP8BuwpLWUysLmK4hrujNdZn53cnhU5",
  "key4": "65VYuzhCBcw84oDEpNdZH1RsKjeAPmdqqZjzuynheD7QXBGvFmuipd1aTzFqkkWxf8mZ3baRTZhFWz8YTmajp1YZ",
  "key5": "63ABfyWX2KUTP1hyxnSpgsDo1M9rZHmdeFCQFn4h71bBnSSmeZcNHSrggPH3oGAeaZ8Skw85hPFmsgGGuHAbHHuY",
  "key6": "Hmaka9189ED7qsuBuA8bdCB5uy47cMoKycXjh5fcjn6mhBdiwyuQ4wuBNuieorrCy7oPmK6BFR61E5ocVfkvRGE",
  "key7": "5WoCcTk1uYy3TMBUW8mxKe78dDWJMZewLbye8uQdkuZSUtEcrkWo6XkuyXzKVUqP5RD29tnwTnwv9dS9HWgFrxtg",
  "key8": "2fz8k18nnyTSyH3gfyffQ58b8wG2eUV8Mw2nn8YqArrw4Ysu4cbKDwwRNqojooC7HnEvEMbRNNfMprGf1JjSDyC5",
  "key9": "o2MqgzbuRGa78PcFNZndNcHe6vwXBQNoZMUZhUzdxcu9FCUJPwFysDF3cQYEskqWpULYPBHUV3wSuZo2xRRREBb",
  "key10": "4RBfkk5Kt2oMsJFfMwmj774uu2GtUx8ZW5JNFH4xNmQYCfXjHbJucj9yyDb7LngoPnWpHys22Xm5b9S58ZWhggUf",
  "key11": "23XTtd3VyeFbwP7eQBkZHnn5YGgMVvDCtVLqMHE4op7TQLgotbbRJaegHF1SFPPiep3iv1mS9dfvFoFPhqAj95GG",
  "key12": "45FtXXZgDQ8j7rdrTakrEdQQD2gxUqv4ud2tNZBTaDGE9NVkgbDLWW1DdG6eGNuVSZTNoERiuX6VugFENSUzJXcR",
  "key13": "442KhWqumTxnqqXHWHjFJptRNBDM3USM92rebDYMmkNM9swSq5BvaYZX8JMH41E43et9sJG4NbYPKgzyhkuj3ukj",
  "key14": "5FU9gSvXGnoE3JMuUF7THuwoq3W1X6QEWqoNmUis17PUEQjaKUE5uVrF4wyijaQjzR9dBn2ngf9ByfcRqhXZt2B",
  "key15": "4XMaqbii3MPQ5X1cj7a9mZKUCRoszdmEJujSzwDvEgJ7ZBxHSKqSHZuAFMZpKRrp5WqmTuCERy8gtrKTXpmWJXsB",
  "key16": "2rFyP264MkpfUzUXHFS5MDJsE5WqAXX7uEvdQkUuZZhuqWE1zQtCpLzLhdTXVKRjNVF6cYypFnPzCt4dTSDiyCve",
  "key17": "4B3sEhrgwkBvvru3PuwKHwoYeRTLLoQRzGJVRyXJx6eGQgESZFMCNBoA8ZmWjgGbKdegC4tRVfRqnaRcCUEohC9K",
  "key18": "3BKL58xYvqozuuUA4JptKo7Z2hcDxVxv5hkvYDpjhqMa8xUHdj973PbbKeZH1jBwWy5z1JZRgnQx7JQuJcdzsUpU",
  "key19": "2JwKCUjibCt9L2quVrUsUWK9x6FakRkzbxGPT8CXAYLqzpNyhRYva8E4L8YfxXM8booWqY3gB9guwYCr2KdvdxqX",
  "key20": "4MBJkGPCNMft3aVh3MfwJSkSL5LHRxYTHL3ZciNg6LEAEkG8vrUL8GEVccFfddmstHZBbdrinhb295CmzFWUSYXM",
  "key21": "2TQVmSbcemkfkrargqRBbHW9NphVR3Y7dftjkwR5Mc5gML7jzjLqvzfuXBNzieEzydmKwn35M91rHVAJAVExPZy2",
  "key22": "3Ut1fGKZepFDMjAabJC6Moyx9Ygd7dHYaik81z7y5suW26UbjnX5v8haDtvhWsK4wZ7TDDj88poKRMe8X2A9QRf7",
  "key23": "46fAxPPNYc8QgywS5sQ8pcAbvAsMp92aauaMqPD7FB7KLG1LqcGggQKuhp5bi9YkvxqUKKQN9LNjkj828UHCvHMe",
  "key24": "4k7JjecNTSN5tBYMgYcKvutVwL8SMRgq7BFVjePFfe1QqaNriwA27w9xwf3KscD7dG3TuccHywoRmERvASj1b7Gp",
  "key25": "4kdyN2Vtj2VJDUEPh1PjCgXjYdEXu3X6BrEVsavANJVLMBPukStdxgeEhgfsrqY8aRmxHPh41dJV4x2JRAYV7pUX",
  "key26": "62FsTbYWqafc8seVZ5ie3qyP6Lmg8LD9Ssq1PdYCwk9StsozZG87ePE7RmX2u54kZHZC4HCD57YzT5cbYbYE6H1K",
  "key27": "5VVLXJkU1SFfNvU7pq1AhTJJBtSXx82HHHRfPo4rbn8g8cT63TaEZ2ZBiiDRDhjmGRHWwB1iJhykkAiT1HV21KVb",
  "key28": "xJmzWSVq8EgNzMJnSJah9GDDFXrLKV8Y9bHTa7g2mdr6qSy7KvCQUwe18c5JCrAWdv14UvYi6xMRgxF9WAesD3A",
  "key29": "BsmWodiVZA3tARJutkYUoBMjLwifsSVV2jpMidiner6w3kWGiPcvKz6o5YQhTxKQTBbEXhZD7sQiFoazjov5Sb4",
  "key30": "2bKC4jdVkPbmBpNf9RzHWoQ5KqLe4iQVpPm9jVde9wkGEEia2HXSnmJkPpYqUJ8hmgvUo2K17cePxVWxCW9WJiij",
  "key31": "4PhAaj182jGC9DEozwpAdRLn8fqDHUQQfWQNVgW6KNdMRNbD5iCtyKqcQntDBkQwYEmbxh6GFMhf81fTkHAspD5t",
  "key32": "2nHU1QXLtqfbytKXVbkyi5PL6BECfdGTpSfdFAAZjTeLYxXnYfCrS4y5RnedaKGLBQ6D7zYU2x2t37ThxAPyLH2j",
  "key33": "31fcEbHeddxbpPpDsvYaSr6ZsTnctGKcn9pTZCQF4EnAmijA5ADau5sT2pRQUnuM6z87E6HTmjvt4k14o6sHbZy8",
  "key34": "3A59q6o6Wx1snjr3ydNGXVaZjJBKGQcVKauY2CcjxkH1cgVk3f8UM6se5NTXHtTfNjhDGamRn6hPJkmNUFSauau5",
  "key35": "2darmQyGvyv7ESnxyEoHpBSHiENdtzyVX1y9zbUkSFCzaJYjZiaaMk3qcUXRDaNpQZr2FvRkSS2LVhw7P1t1tNEV",
  "key36": "4eXL1bzh5Mjypm8kwGfprjGJR7gBKYoGhRrZXMHvTix212LyV3io47EyvUGSd9RV4MK7KHw8pq3x6qRbQ8TYSkoF",
  "key37": "339CAmwqxy3XmLT7Vo3TTxhoGcQ4mgS8Kip6nQkyyEVTXw7yM9JyLqhdtBeZHZqcG4oThPh6BcxkGMC3sDVLYdKY",
  "key38": "3QJe8VJBwvFfxPKzAGpDYtcAr8yeHmaxCQCuoU6ziQtaxv8DghgEydazfk8FArVu44QpY41yN1XwZqN3PgLmm7Ss"
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
