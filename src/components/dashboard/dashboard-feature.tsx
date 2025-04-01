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
    "42YHsLwk16sYmdZJqQuRbUfhBx93tVc3F8f2KpdANiADKTf9pGRyAgc9JHCUQsdWKWEjVayeCm6UrFksTj6koNqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dg6D5gJemzbVSxjKLazxkPGtTUYMsFbPGizAGqhGFQCQzzBUqu1QPMK6tdeT2VTzPuR6tDgvY68ab6pXGaXaihZ",
  "key1": "5jU3FjcN9JPR2xXWMJJS7uzgh8wFbzZATaisoA2FyQpJ23vMMmpyNBQpH8W7dZx4nXJaMtG8ceFf5ns1D4sbUf4v",
  "key2": "43ZFitHufbfpXGVnjXGK8hNdhWiyCFyrqku7UJ99aaJ1V5tQVuAHy7zcb9BXVw2GDdd4AGyYQr5yUARxSgPcUKJx",
  "key3": "R1UeMvdFHMSPSRDHHxHjJkk48Qubm8xwhH3sziGHJYtBuNykZafJGLKd7nu6CnJ4n1D9K4mR9CpKrkuyB4bD3xt",
  "key4": "4MudLRtZ8powtxaMsQ1kUnqRSwkrHLSo1yR6so8z4eeTArX4zTfBs8DHc19XyKQnNShoWwtRR5w8TW6jfkBd2GTg",
  "key5": "21SocuhAK3ysecVNLyLqisUrhoCsihGZnXReHEmmBsK6MNAioBDFr1GeFaEDwy4ZAJj5BjrtFeBUjbwPWWzQNKoQ",
  "key6": "4JuhRAPdKAadpxVzHzCb2LuYiXY3DRBquLJCNYdT9yHTX6gZPxt5juWLjF5wB6gGQ9YLzzMoRJWN1sVtncLhwgSb",
  "key7": "vvJvgTKcttZhTxisES4B1s5V4t1MBHsXMyczsevENYb9rkR3C5pyYFtF2gvj9xBj4eqPgaWM6XMdE3nPDveN1Jp",
  "key8": "nHNhLMBVbr4XC3uTGhfW51mV2aR5aiJxBrRnViFKDQHCSLEUEo8YszuTJ8Vn9yXVwRuvFj2MQ71UTjhbiQ5nov4",
  "key9": "5rBmq8Hx3LdXmHAN9s9JsrFFQKCV5hPEGcjymjRjTGXdxTC5hS7QCCiiG9dgBUc58ZRcKWCVoFszrLHgihySymiv",
  "key10": "37B7XxcEGviY4R5cc4gNDm6U5ejKNppF4Qe7TTQUBKSefuWf9uywd1NGforDGyLabrLHGvNtmhVCW5Bn3Z6L1mwh",
  "key11": "4tgLPaPSzForC5QDViXMFeEPpwXEegPgmfgjHZMFjVY81T4x2N463TauMq3FvdMAA6vajhEZMj4RYKDbSfuM2sC2",
  "key12": "5ubbiQxApDZhf1a6veKUquXio5ZwLTtWDmVKAjiBUvcoQyqM3RDz8Mv3pe4e1P1w34kuGeG9fkho2A1zfW1mCu5B",
  "key13": "wZU3Ht2ytg6Y8uHAzudpoBvbecUY77X4sZAjYn9cRD9aQLWaPPASaoXi95QcyvT4osBtS5w1tofX9vUBmUbggkv",
  "key14": "2q4EMqFdeYdPeRxMwTiKTJPZo8pjm7w89QJ99sCkeEe6dEfnqAyebertEo7PATWhdAMY4sDgq9DvbZCBvUnzf3B4",
  "key15": "4pS1G9VXVvyptf3hPyBbqxMvupESaJEXHU9Ny4511Fx3fFXUbZmxipA91MEe62sREAM1cCF8V8efaHRxx8vNfsZD",
  "key16": "3m3PRdrpwPv1CPHWdcNNYm8SLrdx2UH9EctqEXNYdNzCtkyEmknTVVeYapGwmNUF5BoU7dkwwRBaSWToUAxX9T2J",
  "key17": "3p8rwxsbBxK9gbVjKvKou5ZC7HJfpDsRo21CuZyJ2UbudCjaT4boWHoUTBq8sptdd8pj8qXSsfL4HtMjjbCrm9tT",
  "key18": "3VXuWqx1f2GiGNfK1cJSiwy5wk4cLCSdoqqp6qKJy8P4ypjAGH4WUWGQfueS6Ry4w9wVYtbEWCovpw7KJ1fjsoWU",
  "key19": "3YQhzMWPEihjzgycDfXoiAb8sC25FVDVkEUxDEZ6cQU8zxBXGxCHjR9783i4hc2FfFN31gNurp6F3hac7SWoQmDA",
  "key20": "4D5u8MEe5Si1yqMuRc7YNye6JswQC41uWqRHC4ZWC3VKhiNcx1eCNZZgzZqwPnMuqV8HG48VXNgB6gxnJv8dKFko",
  "key21": "2Fr1pAJvyC7MbZN1LDJvN3nA79nSaG87NQjPmqqLWQpuQwwzRVjwBFrWY1zVVLQRSFbXFQnbvGuiiVYqcL4oKpna",
  "key22": "5UcYH5AxCsMAPw4jRTuvLfUgFey9h2zemJJUhGdhQXXYWccdriv4zcYVaMjEMwJ1iKe9TjeiABXSpVyVoU3Pno4d",
  "key23": "KsVZd6L2ytGXApndzpP3DyBQvgnRRaWAMWpgQocQXQ1EeTr5xWjdE5rZs5qwqwiRddrF2EXYmcynavsBEjQ8n4R",
  "key24": "2XUDnhKHCK8cLh2XD6BAJWAjhn1UibN8on89kdXjDmEpVvmidHoeR9tA7AKF1wPLuCSFqgDxZzxGsQ7n5iKiCzWT",
  "key25": "2MRsHeDtcZwpKTxxqWpAQHSFZdiP3mrfFd8JJKYCtdLzj898VmYnw9VVX4zWGKoxNn5xGDBeooNs2qdZAhchTCJy",
  "key26": "3cuKcGX6bmax5SJkNzif21BYapgsi8ZQSBeDj5rQRqRCkGwTdHUZ5PuRvaKYXqKJEWGXTDJaRg5Z8kDzp65S66x3",
  "key27": "3TJ5GdNxr7nJSzEMmAY9RrabciAwDaj1nNvR1Ddmu8J9yFA4pMFFY7XYKKnd8qKQ5jV7n8xhyssNj1gvYNhB2Asd",
  "key28": "DTryueqs3mvmX6dhtkUvuWVr7w8MnEMxoxsPuGtMWiJeRqa5HA1oCsfcTMcEXPaG6KGiZ82tFL7kC2DhtDoNpJy",
  "key29": "5Qr6obWF938sKyE7tBC4NJEbwqHaQneiPCsxD7TuJ5cbPNWtzhpe1qurSC88f9z76e58f2fEB3EL7TVseSrcp97D"
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
