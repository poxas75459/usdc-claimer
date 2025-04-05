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
    "4v6RL2QGa6iUH6oRMiz8DGinV1WSLcdXDDFcu1LraskvsLyG5jgT4m6DfgPmxQTQpaTE49Bdo8tSCFmZrrd5hNQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q19z7nFptm7m8i1tqSFNck7pwBY1uBo735GiaGHG3tUimbu1vzAqTXTfywD87m7aqz7MgqheEv6MKAWgvgTdMSY",
  "key1": "3XvS17hdHuC1R413fdBLegMZSdXsu7pARGsjtTjpfhoEjEvpXR6pKnsxyNrSeirr3ZksJLbZWVFHqaygDRXSNFUF",
  "key2": "2w3E9HE9TfxDhqZP9e7hJN6hXp8kuZXWMEUYHHVPENvHdoD3kr6hHJJyEt7Tri5t2i877CB7Ls1pLB8TxtkoKY3X",
  "key3": "jTAMSeLSFCkNYZQU3MFN9aa167k5SYUsN5aXx9NPqGr4MqH3ZqfWBrSiRCxzTsPxkHYe5FADdsxTSkUE5uGP9ys",
  "key4": "4QfzrrKDpJ1KZQPvn4CACs6tVenpvTD3gW6aXM5VyX4tqH3PkUTTJiz2YfjAuocEB8EtbWnpxRFgnDNugLLkTgP5",
  "key5": "qqC3tm8QQKHGmTqwKeNcLn8ibKKiYr46xpe8eY1cfi9duGPpmkJXJa9WHaNqgy9HUPbVm7SLcnQJu6mhGNPuYrF",
  "key6": "2jgmQkFdGG9Q2fgKwX8EWcWYrucXwjX4oqzjS8ggB1WaCaCRRdtbJFj6dAUnTotbkMXSHMYRbrgeBcyJRg4RPbTr",
  "key7": "4YG2UciDAWdtxmMkUE5FsvaNP9R11DdT1HoW2PWEdxtC75tNy25YMtrVe7urrCrztSpj4XYinKyWcACXepHBspZu",
  "key8": "vM6o1uxCsLTnA89Fk4pK7FnhuaRbsioJMUHNibZdhnZ7xvh5kuDUK8YHqjh5iXKRfqs2MKWKzAmEYekq4pRPXWw",
  "key9": "3R5K2rfP2ynTgsmop4tn2vc7rKVWExTtya6TEBTvbqKkd3jBzip9QjHpJo8xZFQweacjmHjNZr9DHJo6u3QMjQkJ",
  "key10": "4FtqtFd2yYxueELAWCY4NCgdEZ1Lun4FdYVL9WVuuUSP2QkNRNQFj6UmYBb2QUTUvbfePKHAh1b68HLcProZxuCx",
  "key11": "hdcvJEPgxZCeeTHAncNhNjWvtAMHZqbcCmquY5XNgWWQWGB8vb2t7FdnoSrbF94ggE2dLKxz4AHSR4tpQxwv4DN",
  "key12": "3mwabSQPp1aL3WPs3eikz1MW1J8U18pRzsaRe2AngN8dkC5sb8qZ98kmeJguZ7JJdyxEz1knVdB9396tMBcJLBze",
  "key13": "3u2MtwCLqrSqiHcDkgZTJ7adjaL1cMvf1SThKhYuqt9YzS1M2MfYwuR5gc4Hd74qP9EE56pHYT74fPRDwgbtJXpg",
  "key14": "45DA1tYTizjQbgU2qvBZasFAWSkQiz2kJkCMQgnsbD4sc8c7wY1Z83W8YuPSrTP2oWWCpjxPDmCumQc8n54hXkpw",
  "key15": "5BPkVkSfNV3JQ1PjCBkYEbs1uv7Jay6wXJ7XHXQUA98n6CgSg74o7wditnKNKnXMqkQMteX6nM7Qh1r2qQhyKzdw",
  "key16": "4PB1RPYthDzfeXmNgovfZqGq63s99BZQk8qgamCiqHA8mdZVeS273Z98vS1fghdrNCGhi55XarR69eCthDja5pd3",
  "key17": "63aF19RGMQuDad3CxDofCSSknqZr8z8QbgAqDCmXraA3xAmAVb171vjxY7qHGMWrGHvoymTS3YA8in4gbpVDm3H4",
  "key18": "5EDGXKaBr2mkPiBzY13T6L1Q1s5fx3yHWddNuzDwvGYXQ74mYGUq8UJGp3hmEPpLMFfo5g5tdpDtq7DVzemowbfB",
  "key19": "2seSkuxqNKYthXqrptvRTndhjBbCpjZkUUNZN1XFUdiXbPZS1HpzhyQauDVydSXDcP4aVmwsurNAQmwkeyEEvD7s",
  "key20": "2CkudbPEuMizRAuj2F4APcFFmigR9Kn25yKfqC9awutdrnQboLRKsSXEi3wcyd1mwcsHkeHxxw4sMAegKzBQgWND",
  "key21": "3VkE8ur5waMHGFctYVzo7dYNWs6uHqLsDQ9RXQa55BW6ZWkWLUW1t3YSvP59UQ1rQwKDqTYnsX2nuwUKVHbeH145",
  "key22": "5Mmk2RyipFsjZE7LmViHUKSQpU95zmegy6nbPTPBShJmtSugnj5A9T6rz7GGq6GaJFbgFZqAXToLdJTjuymWWiLB",
  "key23": "2MM1LiEPLW5C3ecVXkFLQbemVJKrcX7rqC4GSJb3r78RKsM5ZRVQEma45mf8SA7YNkwTRyCv1GqWW8boePna6WZh",
  "key24": "4JbZaME9h2fs84DiD98cqsnk5CgRtXYh5JPD8fiPupzKhk71Dx7zH8ZAEnjesmDVcgkcc9SCrKfxiC5ZuQeeYeFF",
  "key25": "3p6irsP28Zn6Dwqg56eKn6fYc287TqCvEzNnZwTJzQihZEB9ochXJe1DQXTtdEL7D7A91NK3GXBZg8w5jSWwBMFC",
  "key26": "3mYQcj3MxnPxJEct8KNeYkQ9KsMk56cVcZ8QF16MPjsxxa1fAuBAdY5xu2D689uMpCtbvcwPDo4Ywv7GwCpy2dtG",
  "key27": "5mCP7mcfV54XkdGFaH23XDJMxzkK6kyT6coW5rPxbvkg3fabyZ4njvbWTPnsvrnT9mZHCuGeimiEYSs5qmSzj5Jk",
  "key28": "25hE7okG1p9tfsgkw6pJ6gLyMTp47ZKXoF9V6UsB4BsegWEi4Qy6pQMSai5mkfvRy8QiaQmZCtEP6LGgXnGWTRRX",
  "key29": "2bYgs73c4vhjr6vL1sFv33iyMkS9x1GfzySrNpgu26jqXKcJDm7KvDDp3Mc3Y4P9VewDX2r7rzJKPQ3DoXHNwoKi",
  "key30": "5fxoDg5ZiU2RT2Scbfy7DKNG1vcARCDf5U5HY5TaNHNuWjQjh3P7RUXz4nJb9F22QUrwDHZH6VM86PkcianJ23mF",
  "key31": "4uxby8aA8uerPck8AtLgjrAZgQ85oqQuM47BdSRmEYhURFgDGD3Y2LvYq7xHApF3PaXyMt1U6jHRU6PdCmC3scgo",
  "key32": "3zSyDyxVkcjay5kTzVr2M2JFyYYq4i71ggPdyjXWZRhTF6wWgdfm6h6JceQbmFuTEoyWoCgha5RtagDJpt98vtke",
  "key33": "3KyoUDra75gTPvPpYsKBsQ6nFn2hSfXrRjVu28aLCyHfrXf8eiJSSKe5A768LRhftnvDoaMiQcBRwvov6QrnKaxi",
  "key34": "syY6NM3NbfnkcXoheNM3eW74iQDiHaZnJW1Y7S95qgsFd6ma5MJe29cZ1AVczXy78g7w5z8GVcrWmEgfVFj59N1",
  "key35": "55iGmm7uZkRQ34RPRRePjvBNHkbqDzuHwXSMS1oZBbqFfaTC3LjGXDhCQRCYv6CFpqwhpnE1cP8ne7HiL3nnGo7p"
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
