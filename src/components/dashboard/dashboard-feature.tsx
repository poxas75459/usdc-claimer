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
    "TtQkNQg5cMWCKUK2afacSkaFowg8sfawDWU5n25Hnoi2bwvD1sFTtCBGX25PhbEvSCcYoYSbsgiGa3pEQMARqAt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gi2JCnaEDaxvaC3VLLJktvu1W8Zh2QQmHYCv4tE4VvpLkiTFcQb6uzcdQZuRga8w9euMesfFadpFZFTqJ5Pnzv8",
  "key1": "3nyR33ZntdBwc85QxwuddemKJmaqWDuhFvRTi9srutGDj3FDKZXZJrD5vFtwrqMZ2EWLbRm9TLtieSymc8et1r7E",
  "key2": "26wT1eeBtAAoAA4EA5R8iWnXx25DeZa8qExjDzoxVF1iF6s3VcpPud3JcHJPhsu7ktUnoTXEoeKQU5fus4dQb6FA",
  "key3": "5KUG4BayjDXNf3DN8AspXLrrjVKwbNq2E9EHM9e61Xd8r2TFURFDGTd4tHGxcCBP8LjEX5Ln8JdEQnt2ciShCFys",
  "key4": "WzQoZEFYzZndCNca5vx2SMWUY6SFnSGYk15YLTFvEbYiNkbA6RhFKfZT9gSr5fpDLpKC3fiGj961pL8yLBxyFJY",
  "key5": "2HqLLTv3qwPPfRayrKkgC7iHeFACWYVvdDoutFUMaffcRtfWnVrkPB6xPxTK2Dyh9RgDQMJ8fAcYoFWKp3Ayb6ok",
  "key6": "2qq52VZTDuSdkkrRcLNGy8tseLdx2jqHH8iw1fXQFVsGZs1i8EUUndciD5rPKcPCjrC36TeHr4e8yk9hMb7YKb4N",
  "key7": "h9wJkHt6hCnq9Q2HfEuABd44g14fZDjtidwpK33AJMWpxsKkEU5UAHg7WmuVNLNYRZ5FdYz7K2i9irAA12xFM2s",
  "key8": "2vyVN53byr3bnZuSzGsEatyLsyoF8Dx12kscoLo76M4aGCgTS7DGJTqWC7nFmQ6fCBZrSFNzgeTdzLGjnU2qhzNY",
  "key9": "4fTyauZEAZtPafqtrJyQuWP99J93S92JTj6JAKvHjeJwcSukWS3TvjVtiMCzioZzJ2dDJ8yRZf45JYPrRt67jbCm",
  "key10": "5TZChxNVgERmcdxfFy2Q9vfwStF7PS1tqC9JvzGfkZzMAykPUDA4RQt3dMuBjDniz4Sv4i33AW1BNmR9wqQg39As",
  "key11": "3tXa5ZwfVQS5Y6hLwUkeA7eU5Uc1ab9oJG9jyagTwEtMRsjqCpLWQ2RQLuVCYQKbNzcZRXyRejMy891WVsn9WSdp",
  "key12": "TboTngFgBJhhkyo2TqLWBQ2z1Mzv4fzCDZuXR6Ftj7LXwFzrhLDShECehNxEKk18GjSGerrnkN59sXgpCyPQAYa",
  "key13": "2kNXCd6F9ynP5KP1NHRdabwHynFy4rjqm5Dj2Hw9L4CS7a5UYp1rYfWWc172QpbXvvYKoSyevj56vgdpJqgvTrbk",
  "key14": "gLjhynvU2y46jrJBufiE38pQroxAgVaPrKkV7tQ6UDXo5UVKyXZ99sJzgqVa7w3zBoFj2jeF53K7bZ54HJ7Yu3b",
  "key15": "2YbphgpFfsCbtcqQxFFcmr2LHgJho9sQNvJUq9LkebKTayaRzbnpsBUzRGbMHB45vh2f2S2pbzckx3PPum6wkJaF",
  "key16": "P4nWeSYza14dQviVkMEKn8AtgGk8SffeA59PFG3RziRzDoBsBQmwfqTHHF8pMVypzCi7tm5M5sXem5CbfvZSPA4",
  "key17": "3P18cuem3NWA7XFgv43uSxDefifSbKdZaQapuU5aJPKbDvUkWiXMEX3ECGmKb52AvDYjzFdZJoeZ8h9kAmQ4EcL9",
  "key18": "4HK7f99SCtkgc5nBiy9U5DAPHZZdWheEWkAhWHHVPikAmBgTM7RTYJ3fJWRE2tZYki3ESwPTem4VgZEAKAF3rjtE",
  "key19": "3bS723zpKWfazPb87pJRPjsqRtyG7EdESt9T3bNEhyZSsuU1LajhyjiQxJFC7PgQALu7Y1BvTCRG8C7Me5iFChGu",
  "key20": "5PKq3NMqv6GnXoMxrqvPWqNEzFCoQJnwVmnWGGaT3ybq6WfH8H5XSyoXgz4Y1acYrFEUJSzFKLEvTqSJQRF86tpF",
  "key21": "49ucwJiXZ1HhroG7nMd3ziKsw3sviPhxtDM6F76BEq6T8fiStqK1yz4QFPFnLbpXpJsDZDrDT85pfEvuvEHfNASx",
  "key22": "3FyqnmymJmSkhLu8edrxwk9HyJcH8pFiRxV1CKdKzqeGHmUM6xA2q1M2Djtw299DaxJNqfo2ej1sQmByvLwpQUvy",
  "key23": "3zMW88NXkD9CXo8K8vMGqZWdqqmuXSiMoLUgBwBjYfTDJgJ7TYgK4FoZa1uiAarWzEWabbnkCVp3ajMrU5M7mMy5",
  "key24": "42WGuSjXrpM5CJD4S82NtZtPZKgjSKs11mNd12C1iWGKS8zmH3jyhQveDfsyTiMvHsRnE298mvTHWwQNTLbihRan",
  "key25": "NkA6GwFUe35Aiv3NnB7TSkuSFVduSy5masJ2rhpSPNsu579oU6atVe19DEuz1z1bp22njRjHk2g13kRf6hnntSr",
  "key26": "2EcxUEcwYxktHeDA9j3TrcChRKVXW4gjb7zTG8iNYQtyG1EJwxrv87cdTZ5zrT6XuUdUjWugs8Ttw3SbP3CsEqC4",
  "key27": "5qEFE18ZgdJrBmVfRVbuoTSTpsRwAJqqKVUzQ2PGBD3f9sZbtdAJ5D2QeVdBsVJoeYWrop4v8jaFHybL3XuFsLor",
  "key28": "2nn6Foe28wKgdNQSx9HsHwrLB2Q5qFAhqKe5p7NH3dCzk3yJKmkWn29hr8MKHPCxmwwidf5YKWG6Y7qczbe4bdtU",
  "key29": "5ynAu26mL5dMhks7XhMAXvDc2b3j35M9qEnCF9MsKpX1ESoY9bxKnoeeXmxj8paa1Rou8u5wPStitxNDjCaEzUFW",
  "key30": "5uaGAgTJsR3Rmecyj8EvbeRU2kPdXcWonuAUqj153CuWVNhzzkXJyidGJsoWpukHz3Y8T3VEVGgjqJjNSZhDNCSD",
  "key31": "GD7epZGdSd1AFHpEmoDPDKvFLe3zmqiHJD7BZaa6qazsvsxRdg6YENZeQgy6FFd9J56fJQvERKbn48taNuax9y7",
  "key32": "3sSB3EhahBZxoFJsnKGnxGu1QMWur19ja3NhuQqEj1JTmQcN3tn7qfPrWttn22FMuXtJvmD5wugzxTYmumaMo1W6"
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
