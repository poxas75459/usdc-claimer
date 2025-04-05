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
    "2AW5bt6s3sCoVEy228GJwz8XCS9us7W3Jkbd2gyhdpabU3dLwB4ewU7EKqwqETwqSZAarBwbfxzBFvQzYutiVrTb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JYrh6C7Tu9V1XaKwVemFknsdzLQnhDAbz6c6b9i6vMK3H5uTiu3xyhozVM4CK8BJrXoGRCwW6hYT25kAxAxGEDv",
  "key1": "vQJJC1Jdt338HGTJ6KDJ9hPcHkFdWXHt1EoLL9u5WtNLsVG9bN6eyYajKyr9n3zh7korGsvBhVAAk8GmN7owvE8",
  "key2": "3qQQBtcC9v2fyDFUnMXJkJ3HHQnsXdsAXa4tD3EmqdE1cbbnu3tpW3VpktVN3pRyXX6asKxAM2k9XgYrzkgu7dxJ",
  "key3": "4FdKqveemiLMMhYp3YGfKyN6QpWmvYEZSFVpHuaHNKdBPtuxECm4hRs3S6b4DMdDAKbePuWapZXEvDdkTjDfSm5e",
  "key4": "55boZkDx45yAJor9LexqFBqfLUfy4gEvBHpS2Gg1HUaV4VyaAYWgZJJ3SGfneEtSrqSoB7xeC6qhPijoDjvQ5faP",
  "key5": "3z3c7nxKGx5o1K7DMNhjLkUoxrRFh9UyzkmLu6RRvzUkZd96bVMMxoKxB7FSbyi7GVHXJ7kJvWqo115E9Rox5sn5",
  "key6": "47wtP14Nsa9NPDLRhKuLdrAGSDymruDXYregheb59pg2LCq6wUo3fftYA6u8qcQUZyjHTZ4N17CkmNgobR5dAgkA",
  "key7": "QfYdyRViqUbTWgVAjWfsQPuUdXPTevTNKPby5iWcK5HyCc3qncz4mY5pmUDoHZE3Hmp7mvRXPZtGLYT8FwRbM5B",
  "key8": "263wdMN77hVqoHNHippSHYBoYaBuxuNhXgekEDhWVfxdZdEbNvNnvDSKtEtUUruZpTSnwpiFXhcaG9ez3PTHHeX9",
  "key9": "3bm23MrufproREEE73Z9WBS69mETmng8CH3MEhWxyrjACgUU4k9hrwvoyiP4YiUqQwKwvPdYZ4nk8L7ucP7NtNsG",
  "key10": "3jokggmKGLvT3QdPt5KJa5iWGJvSPs1hZDLWvPwQ8vrkytcgDsqdPfrRrk88PhSWaSjRJ27ucAb9TLqnDVzxBcD3",
  "key11": "3H4UqfaeuPJhxXdFaJf5PWJ1sPBkKXV4SdSwYSjP2mHu693m4oVjDQRGX66tERHrjsv96m7MJBVsXnRGtdLsW1zp",
  "key12": "34VpWcbrsfexhi3ne1btuZBESdMMaTymPyosve599f2Jd7VjU5uRHdad8ZXFXzFC8ooVeLLZCrBFxJGtTj9GojyC",
  "key13": "4AeYLmXJGTDTG6TV2MS8fJxEhbDrBnXr14weWgNF8xwj6XE5vtTiGDH5SpnoqvocgQnCNw8dG8gpu28QrFCuFnek",
  "key14": "ifKugMd92LwxVE2BQrvaL2FrEJsEWicQ32xJAqEGvEWNiyZnnYQVQJEbdCMndvWu472dupZFkA8xqdbPoBtXfwu",
  "key15": "5tTmb398Vr7RhiqFLzhks4EELLMjFn2ar9FhqRWmEchrpBNEPNr1jhEiQzxZne8cRraoVVPziYUVNz8rpohkdLJu",
  "key16": "2EVvfg3nJgZUD7vuF9SGEsYd4E4gEMfEfhWxB7mUsDL4mQReDSmrpMxZ8w6GUMn1TzLduPd9ptYYGLon89K7hn3y",
  "key17": "51C52b1KmirCMZZX9Szukkc5qsnq9MmLGVki4zJVHDAgYHgygAA5xpCisTKExyPiKhtGpe9NNQo7nGPkHe3caAes",
  "key18": "5Qn9pUmn2AeKDHQFVp9HXNQQK2FgzKJApZ6z7qW6EChSegimVoxJeqEaDCejFJAyj6UkgaJi16aURRUsmWAYSxiz",
  "key19": "2r5dyJfbjoK4EW5eaF6XpYfuyiAy1R4JHnkSUAp1w6iFYEM2jKRw8XhkeqUQaW9bYsWD9Gbihf281yxFdqpnJRfr",
  "key20": "QQrZLrCjgbf3YrMSsDq7XjXoxdHqJgngmUCPdszdnR5QgYWCsf9HYauUzCBPLwtJoyiegzN5zftzSDmQLLL26j3",
  "key21": "4eSb24CcfSEFEwsxuJsjV4LnNd4btUrooCvhTGdZSzidfieDiPibzbLKvotBPzWNQvKVkAXeMJCmcq2NFr1neN2",
  "key22": "5BUPUduaz5Dr8pEXHrCvPUEvsaYqepATafLsrSDhzQWd9RthRCzCRRDit4QWtAU4W1uio8MfLfwG4bbqMmVmk2AG",
  "key23": "3rSkyqAEJgueriMTnsNR6LYnqM5TcwPxJZoHRkS4cftxCYWMm53FThnHGHtvyXrJNvkppLBMSQFmVW35Fy77HSYP",
  "key24": "5zSGTFoqgHYo5ZRkaBPVrdSQtRiHh8znUyHKUa8h91psG9JzL1tqhe3HbkcQRrjPFB72cZFcTtT5fhNNmPCzXgvR",
  "key25": "3VVwxRnvUw8gHYfDjj21EC6zEPzbKdKkgDwqyx7if8spQNaFVDzkhj5Cr9T5R4pLGVdgQM8R1U4YNCcdfHCn6e2Q",
  "key26": "42h2UJJLTgtioYZP3vkL5QKJpY5mXcrR3EhL43i9uA1QUi2WFzewD7rMuQ8ZeEEUQfy8nUK6BKCkmbNmApgMNHQG",
  "key27": "3mzCmGAq1p9gDoUJP86Zwj1JtaRncWyDNnrVob6XidhNHWC3jc95WJUFeEvPjKAUEg3MDuSTu4pKFmTEKzooj2R3",
  "key28": "SntzwVimgGJGRzZHxExfpLoXLPKJV4mtXLZs2wAAY1Ysg2xDc6Ee9XA9LDSeskVZrU5mLzMefKU8vFZj8iT4MyN",
  "key29": "3pAU95YbjBBsfhmxiHH9Vea5Asw5bvSuxUMMf9eQ3WXFRCdy5dRxP7Yjm7wF14AQ4upqvD5kwT51QKEj4yLZm1T5",
  "key30": "4f5Kp6PCgws61pdj7Lf9D6rwEPRNY2Hu7syVUsLLw9cyzzYjsqeD9ifCi9SteZ7woR5Exk762bXDhyzXtAYGnHLF",
  "key31": "3DgP2ufLFepAMJVtP24z7PgQiWUM4Y1XDZkCKdwY2FskbjvM4W9aSbcNHnCCLHeQ5dKZwUbC2dqeqbRYPXqK56mK",
  "key32": "6TUi39qoho8Afc18ngDDUpjcqdwHotAmrN7u2G9DRo2R1ifR3PGXAz7HdGEgwkTeaGZW2TYA4PSGpdUZC4GmKQn",
  "key33": "25ZjLqseX3Qp7iPj7tpU6AT5iAEzKFqcSfXvUb94jdyBSjsLpG2su82f9YYnwcJ5zzZXFnmfD7kBHjg93C2cQCDa",
  "key34": "3xP2jUESioR1psneki7iWCXuEgHAWXTveHNVB1TdZGPrLMt4N83S5RhBBqm7SCXbTK5uWwM5L9yspb34KczNYVzC",
  "key35": "38wA5z46KiDVruZva8W9NwwNjxmLovVdh8ffp5QH2wuctE7yrwHY47MoXNQPggkrHfkDhsvCUT5YKi5Ywa5DpdRu"
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
