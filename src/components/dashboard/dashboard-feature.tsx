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
    "5EMU7HwZLGn7thP7ZEWK2E6pvbsp469bhr4ob8Lbb1PTHsPx2FBdDLNdvGfsETq6wh5EMbzjQCsvdS9KXLWsFmWS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ARTfUX1GFcJjw8CfaZHPafbMm66B2YXogFKdMKLqAHNU4iDWFs5uHVMgyoT6cercVwSq6MR2zGR1PD6aZDmiCKg",
  "key1": "ckEqiaGMjMF7C16TSjQymGLvXNLaE6P5CTymWEEYRhrh8fyS5Rrsx3wWf4FmbFRWzgxpgxWbHpVqHZnArpEob5j",
  "key2": "4cBxKjmJi9pbyMzDLNKSbFo3fFLUv1EvVwHbBjpTaXwQgpnPVTMZQN1VurTRS2gqssVZdam4gUxjzt7nVczN1QF7",
  "key3": "5xT54V4AiyLgcUZhH6catLYmeUxo4k7n1kRKCzYVtMsXCDmR9FgNqqSZY4ntKdB2avsD7NcaXSnnF8Wcdhwfkd7L",
  "key4": "6yNRDbcMtDkfvE87H7f3FgzdDvhHiqcnPobqJFcEawuvHQ3x81zsQcv8NhtBfo73cx6QPVa872PLwYfFsYVEgED",
  "key5": "2URtkUzuZ9JPYENA3V3Pe6U2uPAPWcdBnid9wLRju1NKnDJMvkewUN2AuaycGgooZT4uU5yvF5XPBM3GXZ8YDMs8",
  "key6": "2r1XyEyZiQBD23KU9xdCLHRDS6pDTUo3TB1CDGAF5w2gHwoMfTgNVhhabD56aPLeBmkqUxYtJhvrjbxSEamTBmbA",
  "key7": "61WAKtQNNoXjmJzyiHu2GKbYqE2ancLQkhAwYBiyZVmbFB21RCADtDwVQSE8cnnziwhUxk1RpPmXZdbD4VGbrwef",
  "key8": "61xtfHnqkVv6zw7CVG37PMuuyM65xGYDDKXtgX7x6J4VZqZ6kAYZ4zHDu8CpAXs1UFvRG3wpMaqqLpDr8iLonmFu",
  "key9": "uChPQdYMZxdwjVCNnEPi8cibJtZAmZTi6raBCDa5piNap1mao271iswaX5S4ichcDz4xZG45yMskZif8aERNqAT",
  "key10": "m6rxhTPvq4p19aXWRWTfFzy9kCXDExahAgAVXvHq8kLfmqDDJ2kBdw22fT5ZyWDN15g3AhUB5WnrqndyQ1tU7Mn",
  "key11": "5cVujSu9Z4amboZ5Zymxj4rw5s45GmG69gF12jmsQHSWEvvt24NriwS8Bf37c41emxFgWE6bgoXq6Jak8ZYfprta",
  "key12": "dRroZew8PHhEvtcuP6xc9Mu4R7XKWaDfRJM1GFwaAsbWfszjadgqcaFse4QzMeyZQMdWwHYGa6yakhhXShRbFuv",
  "key13": "5zkX5jBWmdKtyB1ghZReBjxE779rPurrMPT5YCumoxJ2uk7MiXpcBewfJoMG3amM9UNYETwwAoRH7vd7h72EL28f",
  "key14": "5mRs2omQd66ZtXj5hE2Jt5rgZBes8QbJbeW6HwGLbVjdN2LD4HPnuaFxkVXM8rVNCvUehquubMSdvgW1FZ3p5W2S",
  "key15": "5ZdAyb5SA2otHNYY3DGMQ59ZiaVDjbMv56jkLJjn2UNx9jUjczes5nEtUzFnnExeiWQmt82n692GVSjmfPnaSZxT",
  "key16": "54u8hmYiCvoM7MjS9ruDhfFH1XXkh2zgL2RmuHhm5AUXy8NrvzFQEzMwhi5htj6v5uxYNzLghKMCWxGCgPmarF2J",
  "key17": "5kTd1ZN2pxQ14eTqEfrQ4JoQarWWCfrHhoyGrdZ9SHqT5u2SGv1RgCYFDYzJgBUapPqK4AtVuWTtsDZF6KptEA4c",
  "key18": "VCmgSZEyvrM7XJtMJyK34dbmKBtMU5VaRAnmVsLw3HMrCorVgSuvGp27xwBMphgQpFzN41oGffkmkRNBGeoTTst",
  "key19": "nMuAh3JePYRTecanPebVB29ZRbDt9vCdyh1uGKsPpYG7aB2QjMBMZ7GDcdcp1vMHhcUaH9oDP625szhTucQCgMT",
  "key20": "374Tchkt6C6mHMVxkrFq3eE8NtAHqnu2jQCmhC1bpL9M9vaeDNEonG1LeJA6RFWRHm62abqofBQgogusp3Ha8HLn",
  "key21": "5tbcxZzfD2KiVYSJsyCYY6Q5ywZDAXsRSrJ3QAv7pBdyNjttuMyNfW9go9yFEYH1RJWchxHaCj9UZ8R7EEfQZCJZ",
  "key22": "2ER9KNgfQjM8eGGWnXm5fhMgTZBH3FMWLxmPRhHoKEQtTcVZjS6uWmJLxHb3JK1EMkZDJtRxUZaLsp93fdYoH2QZ",
  "key23": "5QoA2YUpwZoGTf6THGihicQU3SACXHzH2KmS98umseFDsrmtpLA91rcxzECjyD6JsFvoSyiu4a1ajgmEZTLChbUT",
  "key24": "K6U4naMs8ZKZ1ZNnD9t75tbKBc5iP7poqkvn1X5LGa5ZmRxUcjYon27wN5WujxVD9MokNDxzKPNtBgjPJJYj7bo",
  "key25": "5mrZzVQH5JJfz8t4Kr8jP5HJrAeAJBxraV1EgxagX8bHrV2cUVugwqWsodJXcs9wuf9UTKDCycb8awvAPX5ReTMG",
  "key26": "3DSn2xn1AT9qkWLYLsSLZhRBWYV67rF4JUWX9yWutKd7DjJNUP2noC2vk6L2973qgXvSLDvbPHDHn6wFQB1j59dy",
  "key27": "5UdSJyq1PxzNPjBkPLYCuHRjmYsDUKiCbCo2iCCxVdenSZxuw8du325owznRMw5iFg9wpW7VTUhTSsDecPQCUq2m",
  "key28": "NbKy2VMf6ujMZPB4ComGyGYt9b1K2aPyA2GWpNkL8HMr6KZfowLUvBnEpXLdGHSJgSRcpadMtrXJLBmtzcfDnnW",
  "key29": "56Kgm4gK6ynuuBPG5Z7BKb3JbzZZ8ud5S3fa53XjL7KwUKa1TkBEUZEpeZr2syjAyVE5gZwkchoapfTPzg4TmbUc",
  "key30": "4Y4aivmcU1kQkNbZLdC2uvxYtymvZMwX3V1qZwmXGmXTJYmQzEjHJrGeXpzvoc1PPABRM8xUV8nYBz5cyoveJSJq",
  "key31": "42KGE7XR52CddA6hjJucr2mpkpeftQGRPrVpMxoBiujvyMp5JVSopk7X6eJQNMKK3N4m3sbhMUmvNS2xwuUnxwse"
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
