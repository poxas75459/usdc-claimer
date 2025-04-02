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
    "5z59HKwfiqNg2ZeaZVwAVJWqwvDCViR4jNYJR9JTuspZL4cChyGmYvvzLQUw27WdcTgwbSCP9yNr3Sy3ZTwHpGhF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bw2SB5E8fKtKo5iovcpEuqmX9SC2oQ7FtWyJ8CUMmTjg727ihGGnQLx3rZKDYgdALhBRpw9TQBvD7HdHu9tjrTG",
  "key1": "3oo4XKTGHZxDJE93qaQrBPPeqAM2RUjRGtJhsYFQfWeQf6zWfuFCU7S9aUoMDkSg1sawopgvmoicQvyBXTDYi5eE",
  "key2": "353LEZiL6exa72uNAqYhKeEnbWF8KrhZk1NH5T5dESBZmWRhfpiMPjUtpUJ4dQ637tUfdFhf4DgbHyfDLLCakJTN",
  "key3": "41KB9QoVr1175m2qXikRC4skNdsVKceNGCnKThkmAQs6xszdbzCubu4nRirWk6f2P2oKEePjMzZFKDwdoCsgND29",
  "key4": "5ctsWpBhGKck8AWYcESiqGXTtUeQQT8mw78WtxcjbNiPuZkW3NGSb9APVuQp33i7kvUtWx2it1i52XC4VtUfC9W7",
  "key5": "5cgvou1eo8fnwGCKFQV5MzCzAzvosr1e9EnFXiPjqKCdV6eaP7xoVm3bCTnHbj5i1ZpB6koaFft9EVXY8XbptC2F",
  "key6": "2gGncj2MrUKqnuemV676akwrs5tAM7DL37UCoVtB8mb8uipfPZv3r231tYtCV6kLz2XT1CQRH2x6kwBcLebUVADQ",
  "key7": "37Kw8yFX1tmDdDyzQHWYVfMaSEGwZx8kK4oV57RfJMaGiaAwcTU1ryA9WuKBRwH1fQDF7Wu6tTq4FDP4cn8297ji",
  "key8": "3EhHnSm6XTdqmfCnHRT9iGctVrbYGByG6MGDEy9t17a4LrE4bQuXvW6U76mu71wZuufgzaA2V7haBQCutK2ViDDf",
  "key9": "4AbKr6JVs4BRgiQb8ASmDGycLw7hKnrT9KaK89bn1Y8gyWmCgMVyJKaZAxgF4m6XWoJuG4oBNyT67nUbBVGNnEpa",
  "key10": "5CmCDUbyasrYg45Die6d924bvkKp2kJrHLtPGaN82a5g7ZuNbodFNaDFySjRJAJ8577Je978eDQt9aRxaa4Ay8HA",
  "key11": "4X7YV5FQ1thGYBmkHxzyN3rAC1CYyg8uwwdCR1AxULxaonMn93zP7xdujrsPfAAL8Wx2nFLcvCniqf3aWtLTeZDv",
  "key12": "5r4kas7ac4x6Cw5JMmckgyLXSEUcBohRZMXaSqbBHFqjjpVkr7nxCWTEWczBGZcGsttsBhaduHtGJ4gnmcmWD6UF",
  "key13": "3y2UWSQNnugcczzZKbgUtCVNLLwgQc6mRvUmLix1xiuezE3Pqm8v7A4tdkzxdsM8f4Ann46GEsB8psTXoPwpJBvJ",
  "key14": "3UCbJtSHDt48pS1BygTY7wbVXKEQ5AyLYUp8LhLy9B9snWLNxpJGtKxama6DDF12XeeWeawJ2VT1Jwpt6LwqH4HM",
  "key15": "5wyQ8XXasahAjPV9ETn6PeqcNk8z15z7gXtkcP4JiCXjWanMYH7KNWYGkk6p6td9hqMBCjuxEtBQirPiQ9f7k9uF",
  "key16": "5Ms7koV5tAvfi1iwbZ9Q3HPt6qugbNJ9Uahcfz448cjArKR5Lr9GFKRSoENYfqkh4kYHeYhDqjCyLUfTnxYBNd7",
  "key17": "2UZcNYP6AE3Zc6X5v9W1GEC71j5k9m7AkQsUh5eQQjkyZ5KquPnFatuPttSZotH7mFeuxJueFrdTYeScUbV5P7Fz",
  "key18": "4vd8PCehkAmNFeBdQjVgVywq2hWUypXhdMdLqy9mrbYNfWjwLqyCCAAwY3m7MgBv8kWCJ1hgyDU82WUdsGoXNdmF",
  "key19": "wyLb9L5JoCAYEqDAhyTcGuywkVqiDn5kzAC2aSjnxQXEVE93WQwbrqMUxkk8khf3vaQj2t7aqy1CC8MP9gs3FjF",
  "key20": "26F7JnHTT8vTmEmB1tASFPZ4HfDrHi5v9Xnn4h4JkyRwVG5gumTYKitFXUkPLSUqBvnafSKvMJY2ZCDbcR5ADQQ8",
  "key21": "5mGBRHzJuJbqDGQY23JVKNcuJeaaR4ytm46uMXfu1RQqGwPiZnKrnBg4yXXkLuQYEvK6YjPLBEHSERqUKsqUBQ4b",
  "key22": "3YkGpmocgJYPtka7ixyzYNZ3fa4xRam1WRNBrXKjFe6pWz2Gc7L3GNfBG2Qewnos3XMkgjgRH3NvMvHcWVaTs1wh",
  "key23": "5r2F2JkLZT8pmEJND5uMzPciyDiR9d6yvGJEv19T6ux25JSdgwA1FAsbgdr2GqtLb6k6nVtEodTJLqmg6NtfmaAG",
  "key24": "41wxCPTTUHQWMDFW4L4sgJ41SCnAp2Z7rQkMcWLzZvke6jPVDdB31fW97MCHviKAKTfUQ4H8sM1dNVJQeBaJEW2B",
  "key25": "3TdLQu8TQFqrnbNpdRksYt4Qe26rm53rn6LsuD9XzwcSzFeTirGryco4PRbdiseSvFzgJ8SzW8bomqEg5fMq91ee",
  "key26": "5SXC4NCwHnVxdYbcRxZvaNwnce6sZUBXQfBueXdK5b8iXB898bd6ko4bKZgDLku4SZGYBHpPyxJ13hfWBFetTqyX",
  "key27": "32b4YcGmiWyC47o47jpjvGznFsWGuNZARgWLSW7ib9hfFJAdc2FExBVHuWmdwVDHj9PB6QmS5FM9uGkeHVq8joZt",
  "key28": "5UW8A3bt18YmbJ3f9qfRtm4DUMfirYEJrBBixst5HS6L1XUdqy4ZtmDffdy3NHMbuq28hT1VZwQ1QziCymV4Uegr",
  "key29": "2BpoDXNgukwAFBwwXwQ5gJDP1D8iQBrvy6bFRJErSio5jeM57Eb2AbdQKYU9ZAAMii6a9GVRjJgbP1Ya65C1hdjF",
  "key30": "5mgKK4UPQsS4MqgvhRGf7ARrCbZgd2TNrHzjjW9KYFqMSmBspTGd4CrtqrUoxXYJYMgfSdYSd1QkdQQSYFx1diVQ",
  "key31": "47zikhwJohyCxuVtAZ9AYwuf9RmHEE1cqXGPdGd9wAuh25w28Ggq787faAJbBZXeW56628YaTvgY7D3smUXBrD35",
  "key32": "wB7RdzNdCzthPB6ZUqJSoTHb2cJaY33spXuMxY9TUJa16LWWzhsjwPFyCXV1dEsZYu3mLM4ter5w7MouEdKcBtD",
  "key33": "4d4diwnc3ttdQpiwuf8NEHi1s88PsfS2jwjhUwmwKbJUAvR2i9UFRdXwFckHrPCAeaRoFGGNfbHLTonouHWsNtX3"
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
