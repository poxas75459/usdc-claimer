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
    "3xhQeAa1uyEwsRQyGgU4e8WCXAevuqDmoZ4337xkET7uxeZawGFkPJc4UqmUMzNVxasVrnUqJD9NcD7gLLECi9uv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31yiELYvgFMNkRV3vjcqHZ85v3NNjr2XZJXUjt3SJswUG5enCuWPmUBtqJdSqKJKvbSnXtaqtD21bRRkQibancD8",
  "key1": "3ReEZXUNhC45gABPDryYAo1ZEAxpYzkss3u9hxkwWmET3FB7hyMAFYN52hKnQuazVXqHJ663bKAXdzjJ4D4wMq72",
  "key2": "2xenuPUMcUdvAPormL6PBrLcpc6hEHazvpV8nZaTykWSVyYQPnbyKD8ntjr2qbCD83qCAnEuf9XT6kJpEEX3wZv9",
  "key3": "26dcqV54RntuXZsPypDHp3EPLb2QEVtmBy7omzMUrQEnXDnxdFioix1d6MNvPy7kyYTmtrjJT3tmvDXXsR95az2C",
  "key4": "5P4zwfgiV5gyRxG4dM73jHvA5oHodtTuR5H4q2Qm3AWdGdCNfqR9JwhWAdzCxnz5EbLBRbDmrmvxPunDuuQRAvPr",
  "key5": "2QvrfMbRBw7UMZh6HMbJfREN6NevMz7sGXqH6HD1C7mftyHB6vzyAk5pj1opXg74tQQJRB3Wew9L2hwStXKtyecy",
  "key6": "5qVeVjgrqxV4P2AMmbf9P3WXwEz3ntm7EEz8NtLH1CbBnZQPunodWyN4SNmnRnwMMQB4KxRgVV8pUPKQYJ8Rf65y",
  "key7": "4D2YBMzdUR3v2jLpvPzpiyvGD6ffpwoUAeuhBX5CbJnbVt27J3TUQ7DFKHcp3tPwP1LqQHJM6Ze63ALaRvG4DyUW",
  "key8": "3hoevtGW3JTGAjwtJeyUiJ2mmBmCm7iDCfjwm8HgmhkB3Mxi2kksn5YNB8s25gCENnUoR5Lu17b7XbEKAc1iAaUz",
  "key9": "2MokQG6kEe96e7hKkhGPHHxaM1yXPyCeFT1NcwiCsww1ho4VQww7uBKS2DBNjYy8fiYsdaaPc1pJbHvktRAQW1oo",
  "key10": "5W5Q2nk6fyPYr4R1LU9G7L6L9ZWGA6eLX5BA1B2eKKbUgSCyC8crKByJcarJWgYEEZ5PhwzoJNZETG2dZpsdLM8r",
  "key11": "4Cj4N28kv65o6JoR3y7ak6cVpfaBdpyVQzkJxEXhhsTm3szzGjr9F3JDtcXwayiikdMjwxvTTxeupFoCYUgwAKGH",
  "key12": "21wuCQfADvE3DN6W1oVTJP59MX3drCHRoa1E2357yw2YL2RxYqwpPCbL6LhDXkHXafo1uB9PX9Ynz9eDtVuhGQSo",
  "key13": "TxhCrTJLVRWEPb5WxHUgwmWTcoS4QwieStriWzjAcQ2oYgN3dFjPaQCE9BSAit6ys6iqUuX9f19z2gU3MioFfrq",
  "key14": "xaTMEoyTKpoK2nYbS8cavi2q7qJ6hFdBUNWQgcgy8CY6Q9jZJhAuhZ6fNRxjfwRiBEg8ovXDof9WsJ8zC7R1sxv",
  "key15": "24MgjVnuFVBAUX2mw8pDwpYASFwXfqh9KvjHHEi4Zpd8wtfL17qT84Xhz9yaX4PHT6jqj3ub2bmV8A3EHL6iZiQu",
  "key16": "4aeZ7b4JKwPs5J9v1EKQaqJKh9jGiizNV3vfa8AioxbyVuvKWUDwXLxHEpJ88XzwW3RD7YqBFCojTTwkFeSpbnGm",
  "key17": "EXDA3tsjiMQUhKUaq4TnqAjytAXk2BvWYYF47ZcXBJCoKBNPQxzMPJkjDDWiYT5DfWD2typzHyhdFmHtZkfU7un",
  "key18": "5KLuihGG7G9ZjyLtn8yyAPhh1bTf5uYf9p958ShyxMucnAVSvfEEr3ksC6cpTK5sUhSMxcVWfXxaR8NWVdvQF6ie",
  "key19": "jGvmKhYt2ThL9cGBDPgHynN8xzBLQ8J1ZeVbBU9pT9fvm6NQj5GsYgiybsZMALLCwQLhJ423m6BAptiNs7odAj3",
  "key20": "46R6Cikcyh4dnRXUotTfb8XNbChwHMpjWB2ZbBYWsggcM3rpr54E1PcJQVZZPGndt3XNdYr6y3XiBNwCTmRRMA1n",
  "key21": "3qEXKHqF36yT274onqHU2oNMnDfXrwE8rZgFJLfFq2WLjBKr8DWQp3cC4ucvHGHMMF9wfo78zMoKrSTNPEcjhSDD",
  "key22": "4ZHh5BouMgCNSuuyDaeNXYNrsKJGM7UziEfBb8sSuserz26qsvjh8BWTdFCoDGEGr99dQJUohx91jcn2Bs8ogZti",
  "key23": "3hDZXnGyYtWQ5dF7PzBgUfRjksj1iQ1RWZRucqwJnae1ZDvY79AKVy3r7G5z84FNFXcLBsS3Yi9EfpRvMsZ2p5vH",
  "key24": "2G2dUBMUBzhR3Drmo7Ltb8phAKURqbabt3TagXnnWGzBzr4khj3G5BhgtXKciWKbjVqKAqrmK4Uy3pC1CN8oFRz9",
  "key25": "4w6Zq7Q1rTXtp2PMDL27x5cxD8u15UoGuzc39EjniXNcdT4RNK28rm2h3NTzmMW7fGdgBn3TKcZUXs6UtNWuRYMg",
  "key26": "5xvEkV6GirCWvWaCiiWGJHNdJcGou22a4MMx9W9YNHjvonf4PUXeJafMV9uw2hhrifC2C3a2DtkF98MVEJuMEWLn",
  "key27": "oxeh3wRW5X34xmBKjsmSQTa4D95xBFbUUrsyo4etLjWJXEFaPygysMu8BoiJo8C6KstQqpJEDEmBV2FyZSUjYZC",
  "key28": "2GiUFbH4HeFFsJP7iKFAs4TCyPX6BMTiPuBooZe6WdVirJ6g1JhLAX1eR9EQ9X3UdgmNT2vb8rRNTUQTHYzuQgXS",
  "key29": "3uX4BHsxNeadQyjQRfGx9tKGy6ramLGPEGDGdPv46HgShEGHvsvgk7F73ZUNFj73ypNRiYNqF25mmi6XSh47tpnK",
  "key30": "5AoYXguiH4rgNJZwv2Nm82ueyvDUN6LFBR9cTs9bHkYgkDq43j7QGFSALCKY4oMTbDH8S8Hin92DLEShjcc23Hgb",
  "key31": "5DQZ8VsazJrzqj5vZPX8NJw7UUZb9Dwts84nqgZGUzRwv4bGjQdwcYonWkN5Mh1og5hNv8kru7YKTqTB1ejhhzfA",
  "key32": "3JtU1g4CPTVPUheeArKyWsqL6EeLJbyURsdtaGqZ6bdiiFwSYAJpz2uAYyirTqcF6jjToA3nM6RPVd7RZPAhCY8C",
  "key33": "4wSJRdHYUNKMg8rHnQyVWjZ1raLP2eCBn7p1YNbdZJSX7tMeG3mKjVcZWoddkRxccj9LFzFdB7Uh95X3Dp4uSqU3",
  "key34": "4Z68p8WPLegQpXLPC2JmKKA96pCvfrEsecAHSFUAFmZZNBeHvrTLq3zH7QtGCMEDLz4vxABxwkd1WwF5vu5Jsg1j",
  "key35": "3dLauZXtYbLfg6G7oahQFHBGMGr5C4Fkok3sS6fv1smWXvwdT7wAjzZqUpfsWEGyRGLbJHAjJQmeQcPeBRu5RojF",
  "key36": "3g1osb5Vw1zhEm8EjANxH1SrA6wQ4ifUbdJDk5UHkXqCZWdWRbLFr9inrtFWyPsAFxJ9bXxkza5aN76vUpSkvomQ",
  "key37": "2nuomdCZhNdtgFxwQJU2hDFQGLDj6Lw77PfY8Z2owNV4iZSDx2aYJeEXFskQcT6geChooS1oXdD6fk5LJPvnYnXA",
  "key38": "q8gE9KDWia9xrVUxHz8w7ZEJwGDj3orKtrzZ2UgST7XQvBCH1CCpUBsqSjNWYES9C1XxcHt4MPgY2rxtMYWpzQE"
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
