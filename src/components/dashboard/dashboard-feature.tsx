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
    "5hdkpjaoHgQQyRpMg97VxXGqX1eqDCAFKrfrfozSv7zkWdX7Ms3UYCBAagdZ54z3hYEPeZ2NBcbPruGDgN81FnFM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iFz4UfnAgAqstSKeUpDfjDtgSQn6qq8Ndai8FtCajynAiJBgtciDRfj7DDUp3vX7i7RwrQ3oZgcrogVLWRdhh4P",
  "key1": "2uFpT4S76wsYxYay6kG18qX25ZN62n1nEyxmKfKVbhYVV9fwDjyJWCGeqH4tbNLGgGnGDex3adB9Nn7D42LJcVnz",
  "key2": "4wMEKBrxrZYLZQ3ogvLvd3uHFjbxiz3yXdJo1BspP5YY9cJqdU9DBuJPtr4SgcBDLL6Edm3sL7rimyNeS13VmQ9z",
  "key3": "3AYfTMv9xt5oVcjQwPfnffXDmsMm6ua3zDxGrjwm3Q6muZV4Q4RfqjBjyrYv52p4ZVrKErnR2q5uCHb8rhk6xQg2",
  "key4": "2uortbzb5QTAkDNGF5dkur6aSzRYM4P1SS9dHoBrbgcNixgNLCH8kfrAJM8ERVqSzHyPxzPmqSbyoV1cUwTpQmio",
  "key5": "2GVC1SnH1cveskMckiQZZe1e5rz3BQdB8qkFTpAhtLamQpr98rmcYJNNb475CU8kUgoXtHVr9BJb2bi6ZL2g77Fg",
  "key6": "TNK7ybaXXSLdXpQfmFQHBpP5vZi4r8KKhGaDeCiXm2dDSVW7oRhWPXkLoSuGr3Q2ZETG4jvXWhAshWr31K7acu3",
  "key7": "2rPjfsk89LkDvbRTz8ABSd4973Lg9vfMoFj4HUZJE6NAbAxzspreBb3XCRRWKbW2VnM8DfGmPLSLapjpEiLkgnfi",
  "key8": "37M36e4KMNJMUjb4RPyvFy1L6swnwbQBSBwcJxnhdaEoGkAbDsWVYhtsQJTMDRKw8GxeMs2KJ8CrewybDXzmmbEh",
  "key9": "4QVgF6Ko8VAjW3cCSa941VNiq9K8FVD7PsU44V6LfqPwtuC2YnBVjKeAgXvXvVitCaUix1JKxKrH3WkYo5MkxwYg",
  "key10": "eaamT2XNTzhMWf8T4gBzjyvCaDaovrUkmiWSLBTmQNHq2Y2MPVSxuYUfd9k1gGwFZD1yCj8QjccdXT2m12YZv3T",
  "key11": "2aL4m7yLuTg1CAYCJJxhjLxMH6Xzn5WH4CJzvkqUaSztKfSAvJQ1zCvvKdeCcUdv3YXXi9G974n2djs4UQsJKjH7",
  "key12": "2gSUfTqGrUfSPeCYmH7ZJWjg11386y4CWYtyaZmWeneaLd7ou9KFKdei92fubHkw2RJrbWJAingaWN6FTvZiAbG1",
  "key13": "22kH8uPJfWnzK9N4HED5QnHcN32VYX64NE3uJwhXpLGN1c6oBDKGfKbYiQQWhTFJgX8MtwSVUDzfs8piNrM2nHce",
  "key14": "4W2LVgtwos8VcxL4SGH9c8h6FvtggdftJ19XfnHTrhfVbbRAY3BZXoBk4jx4XymDjSMcpBmqtJdMrixaNXRvtA5N",
  "key15": "5GWTNFtpBD6FSHD2SFxLw4HNBCgXfGTEgbPwBV3Hp9hcF8zD353hFBqSLS8jChNS4wMZwRFJQsgkPFuP7j7Vhv9U",
  "key16": "5npsQrhwEhQxAkeNd49WcYkS8v9WudLADhZcofi1raN3Ucm6nvEmwE1z61qbbQz5vNDEsQU1874wekL5tp7sJAHn",
  "key17": "2Fb2WQDo8mb3jGSjSMA6t4HLJVmAhaXxZ9KsJfJTBC12WKfy5v8Qr4XTNR779FFBTYtQQFXjUR6pKhc3zu2D9Dbw",
  "key18": "3XKibKGXSntC4VVcLZN82WybewE2c1bq35qskgf8u3TBfSH23gxCy4o7WxQU5TsTk8s9VWpSQu44UjeQji9NMQt3",
  "key19": "AEyYNCtGdG45BDX8CCFhKkMJh9mYReHQXLepLhZgT2pMpuWwMwxJQqb4GRmyZSGA3kxxcYzjiyxwvTwVkMcFPF1",
  "key20": "HNhPyJk4adzbw4kJV19wqmCeHKcZ5wwrKgMThX99jJvwAPTW3HegnKgBmxqpkeobDmZcCYtoAvrr56cVZ7fF8AS",
  "key21": "HXP31x4NKM31ht1xukQ5g27PngRamNRNb2wvGK4WTTcymn9CtFTQLybMj94nPK6fsRagMgknEbW6KG6pXQdwGbm",
  "key22": "3Dt97VJ7ZM1kwvo2RbjMEitoNueEsYgkjimvgfchzxqoiENDooyKaJKb6D7PANxrdRqozGJHFu5zUHyjPS9VuQ1r",
  "key23": "2i8ahPKKCsDRUn2D34LgrUeYTdB4UTpK7oVrn52wSuYKXgbu3MtRpEfuQMwX73Xnfs82etk8p3MpEaSDY1YHzAVa",
  "key24": "n7rc7yoWZWyE6QRpnzG9SAV2yAybNUYSxTmHJn2oXYGGS8aeY3GUW6kxo3xUxfe9cXTqPNino7f7iXWHYXGkeZN",
  "key25": "66gZVXFnhj4aKYkBdKZCkGUQPMVAvygtVW9nKbd7mCuXH8AYcNYLnE9hGMdNYtYPkvBkSnYeJC5tbTQw4U4LBQDc",
  "key26": "3wSXZBkucHyo2LCJkob3qGjzCNcbyvA65QiBoMMj2gG8eqXmDzgfWcpcenZ95umwaZCBHUSmTb4KMsYjQwvAb76Y",
  "key27": "4oN2QbiMTA5J1oZF9krjhHBARBTHTvSXiG6NwY6BpDaJLtcDCxzYHBBVL9NQpL5DZ5wVqg56kqwCzAuMg5wUpUuV",
  "key28": "5cUV5Rw6orGLR5DBvRh8vPStC8tmQ1s9w3oPtsmXXiDowu6sfWq69hMLkKY9qtkgHMRVnDVFXXU8a51kt8ouYZxZ"
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
