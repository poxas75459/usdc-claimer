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
    "3ULnXQoXKaNVg9m1BGmX3tTXS3mSBgtzpYYABLSrwdEq3xTvsf5Lguo3pCasFAb9g3VUREYa5WuXGk1xwvzyxe9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KqjqEzA1iuuzszRsA3L1DxYz76qHgfLZKZaopwogLTZjz3aLtcF3EAREPM2ikiYUMMtssdrwDAc92quv8oreTnB",
  "key1": "LEu6DyHFWbfLcZBYP3VqAJXZGFJQegQqZDvidaYDvjPRnHant2Tbuw7yqcoyxy9HGxYUNNKLXF1tzLJaWU9aEso",
  "key2": "3fSJkZUu6LvymjJuNM7KtDxxMmbEuwzmKQ2EWE3XZ9bvrXafXGSE21CGmQJ4o6ShTbLzfYg7gdLMnADjUnuC88N4",
  "key3": "2munr7vSFVqvtrp3F895JoYnYUj9GMrDjqM99chrwmFeoAS4Hgjv3Q3WGdH7yV4XWxuo1w7rsX2Q8B8bJSh4y8A3",
  "key4": "4xQ4Xa3WsiCYp6bDYMd2ot3Xbj6Sdb295BBge279KXTAxcp62gFSKVyQp9KYdLPHdveqF1Mg7hVJF6NtfBuWTFos",
  "key5": "4NQ1S81Tp2jgtJ1ZvrbG3fbEu2eJggrc6yv4C1n38SHCME68rT5mVQduEbAfqsnD38hFgf1TtwZbdRsY1MNaYqYg",
  "key6": "46mt4Ro9a8191asEB8FjyTFUEy6P47UDHGQ4EWLkNYMqcLBwKNk4kNNyAMZLVkj2mX57GbvijJzxZrFrvVx2jXKq",
  "key7": "5Wyx4WE6fEUemh2ED3J2R8noy1Y6uhhjcC6ZfL5kWg8N4rFFVYTNvnMRkBjmw8EWZiQBYFeMs9rCG4svvqe5nUZ8",
  "key8": "i4ZBe68QH2Xun2R3u9HdFm2zjnf6wxvB542rnFkpahzr5LXVr7V7vTSLiVYqEXH5q1BdpkdxudABK7sN9xXP35e",
  "key9": "3ckmQHzmunkYRxP6RyU7BYqwo8bhZ1JnCKMD2qgNS9rroNExm5qSVp98sEfRmEzmMmG9MtqEZ66Q8PvZbqxRne64",
  "key10": "ixBtS6CZjaxshU4odY3dz3LzoJpNiFWCC1TJ9n4TgkqixQUT6Az8C4vdZU8eTDqZiiW2r5eBxF79ZyiT1EeoZNu",
  "key11": "YkaKBPRFbiAe8fvKat5v2eLfbA4WTZ78oS4B4pQ3kki75wkht4np3JoSDYbqawYuFs3bcNpX9SJLphKHq4Jp6Qt",
  "key12": "2fxY6DvmP11Et6jdx8TD39fdzNQS99SnN1UVHdzRZ6agEyFd4LkJ4QUMUkrsKKU8iS1uWGSez1bwoSkUjq9rAQjx",
  "key13": "48frBpw4kvji7CxfzWMHiTsJDbNZgmLAfBb6PUDQRy3E6kUABUcLdHXuMbR3v1i58YDtjTmECorW6V7ok5AGBh1L",
  "key14": "42doUHchMyG7RBt4EiXCvfxM84edH9kpYqTdPmGpAxsgUbrNuQTVKHGozQbrq9hym9rEZyJVwwP6G3vnRNmme5he",
  "key15": "5Pb6o4AdSB5RjNif2StUoycViWDWMsQvqYHX3mAvhySWLeKB9E2bL7LVzGMNuzSwM5egA9CpVS3biv59zoSEJ3Zu",
  "key16": "4hBxzYzMZsrv2dRMtgdbQEoCir86HNJnE6ffQFAiPGqShyTHcvdu8b2K8Uopss1DaZtSVjuEWZfzscoh7JVpAbwg",
  "key17": "3BUZ3kMzvKStPatDJSofF4wBbuuiuiQ4xU4ea1etQvb89MucryBzrntZ7MV5dfLX7vg3X4AMjxVr5Jg77hsfPjyE",
  "key18": "E4S8BRZ7K9759iaB7M3pPwjzo3f3hpDpSoS69PCK33RjQxLjNrZmn4yGRyq5Cfc3xGcSMqMmEXHSXpGNNJCLwmV",
  "key19": "3JFzMDFM2nbuLHNesstN4AdKjZZGqCj4NbaqRTPX7bUC1a1VN6BFRm9oCHVj3mbxTUiVsUces5auKMc2Zxf2zzyN",
  "key20": "3dtG7FuEqtZVJDf1giMKTXuSHRv5NX3kg81HyF6fGwZAGKfMmAqZaVruaE1uyo9KSbQ136denDzXpBYYBjBn5T8d",
  "key21": "65KPKXudGQjuvcbZB7fD9kAtKaVhcUBDFL9KjMHCj3KDZUSWyouEm8wUumjy8kVegimSMYtogEQXPxB8HTqMAXsa",
  "key22": "UVNFQff2DQgSDKNypjZSGXVvp7q1EdcfU5mRdR9YUN4tdbcEe9hBpDwQn5hogqxtJUhwQPFvG3WQEHi12wxMhmR",
  "key23": "3v8K7piB6NFJPEjveErgb3QvNX4EAseEGYC4waxNqYv4AgsBwrkptoECsMXJkYUUMogeEWXxQo4zZ7icpWQMCgrH",
  "key24": "2TMPM2A7HAK8zbtc6EJjZKitdu5CibXTSvGycwVDyN3uWo3jnqPHBP1RCtRupGKZzHc6Ej4RFC4gy66CKDhgfYrF",
  "key25": "rkHGUpWCbm34rxA72oFSp5CX87HEQfJ1BLtVLDRFnJUpXtYpRuv1PHmageax1n8nXtCxG2tk3HU9zCbcoyDNhFq",
  "key26": "JoND4ntvYJxX1AVJ36B68pr34M1U3GpLnUN86aRnv8cPneu7d6TgDGS3yi2SKQvPd4PTcrEwvxGgmbc3i8TKNmV",
  "key27": "5kLNhNXHvXJo4HFbyVtpfGrT8PhMqYnAnUYmy6Wurz3KKpW7BHns45YrcVC27HeZwRAFD6RfxRkrTW8SSotWpSaT",
  "key28": "3BizXoC7Xp519h4gqG73Ud5DM91mFj6d5DhozhsUzvV8ZzrC3qKAzuPJhgHv5QjGYqi48odrX6rMt8tbgWYs4DGX",
  "key29": "3CnPxWBTnxCUVdGAgPebHnY6NdWkd4XDSUbY5gto5vKaKJPySrPdcKbP2U6UczrZHDjRdmY8hYQKVZ2aqfYKSVe2",
  "key30": "4ZiZ84uGrnJRhjoUVHKVNJaMrPqfim86P3qD8fQAcGcaiiiUC7JCXXjDM75JL9GgTXu474Pvr7R76KBHHQCcFMqZ",
  "key31": "3XThF4QN8criHXSuKa7cQbECrDprbW3EbXgHk8VzkiVUt5ErbGULnqWb78osFvxhcShsE4Lb921h8sd62c9sTGux",
  "key32": "4Lw3xXSocAbQMKD4iUxDufJtcpUa66AihXzV9UuAeMqA41tQKAXnC81EYuVP1coZ5AFYMraiMWEkaVYcY1EAq5qk",
  "key33": "2tdfzkYNFmxD28KMtZnAhUT8WBTtPUwxGkHLWtyx9oTrst2NCJKaMs8bUd6KLMBiaZ2aswPZo4tTPP5oCymb5FJB",
  "key34": "4SbtdAww7RW8oHPeC7twSGo8i4CfGA9bCdvgX91urqff6t284WJ84TGctgvtk5oJzo3Ta44UpGdh97W3jEaxoUuK",
  "key35": "5uLJ49J9RMj1b6AjZPgtw2aoN5kb3kF6jTktGYhv8io2pdeod1ePokH3VvR9ARcCKk5QPA8HzB6sPZ2ATKo9SzDa",
  "key36": "4DT2TqDBKxkEZ4KUCGSWp9atQttoVSg4cQHAaxKNa1wEQSyQC9k4nTxcnicXaCfBB1bax5KeBC7ufxK957ayTWNz",
  "key37": "5VDMf2m1VDwELhYtFa54SCAUQLvC8FjQqYQu71FCmQghi2E6ZzRNQ4r2d7gFVPYVD2Nf53vDWimhcAyx9QmAzreS",
  "key38": "zViCd1rC4LcdeDuNgCANtZfsP42nLStAxyoEGr3RukUoN2riHzTMERcN8ksNJmV4Sze84iB6e66ni9YF4DvMUSM",
  "key39": "5KQAztmDofAbrfwZ7DZMYpnvFfP3weMkgz6CNMbgeiZ2LL3HM2FynC8bpMu4rRh5Tj3pEFCGBmWSbf6nP8g9anSF",
  "key40": "kZEFMzXg7kBMyK7w2SdfxNkU2FVFj1iJ7rAFxFvVhKZrt2UoZQke8cZ2e783kCxFdxibeG3PuzHK5MZuAkSmXif",
  "key41": "5jgpJvmLYV1VwAWVZcoTzVStubYmAbMWxQFG4AzK7XZ72PoTJVa8dumk3TsXVJhxPMdutM7SmUJpssCcv6UAXS9w",
  "key42": "53pPCA7oWajeop9nFKgAyZum9b1tFGbm85sZHG9nyg5dMUgooyTvbDhonecmmnXwLbhX2VJfkAVAPahhNhxQPbG",
  "key43": "2NLjh4KiaCBGbdFzToRR4G3sbQDRECPAxErGnMNtqhc6e1HfkL8suPZzZgWrj2GBJqbKUTtmefvoZixeWcP1VhwR"
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
