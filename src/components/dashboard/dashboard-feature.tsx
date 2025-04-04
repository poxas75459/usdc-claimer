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
    "5snnje2WMNYQNoAvQLcuGUBxVYhsxS6xz4RBPPBik3nw2wGXLqxqfdF715Hse76qUGx56dsQEPJ2JkAubX5NJZfP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jb8tUxSE3en1PMYXkPh2WfkRjvh6cDFQzjztqxkqFpKF22y6vqtNFz3n99r65z9vvqjesouTKnYasbhAr7QE33k",
  "key1": "3FgNQ1fLw8tzDdtiWrJZBqEPiufnfH67K8uijZLaPoC5AqMNnAP18V3NXaRNZK4h4gKb2VpjMhrjRHSqr7V68N3w",
  "key2": "28ucF7wavzZvdJSMYndM1c8V8yvJjyuyq33oi3mfYwkFBLz515wmV1XbCxqySCaRXg8e9Ew2rNMyFo9hvQbzbEVe",
  "key3": "5qfGEPf29f87xJkgFywpBYNVfswcpPb7n5JKpSzzfZc8TgXa3Z1x4Vv4p9MY7x48Bv9fjL1gfvKKhKDunCSzMBFJ",
  "key4": "3bnZE7CsabiJpapvxD67DTqJM9a8Po4MsBp4hpQr7jNJe4bybLiaEmaa7iYtwscV6wq2QvEJwfxhngG7c8YszhEX",
  "key5": "3aEBLQbfBkFmRaJvQxiKnqwHtQCz5486Vmsr4QQ2bDKUFbYUKv8xaFUB6HHBdK9xBwu5i9ba83Bbx7AMbYtKQfFi",
  "key6": "xpgWfarxnju4owydjhB3rjE19xUHADo16v2B4CGTiqKe3uMwMiSxgkJm1kceKevMqqbZhiPC6BuGideZ1YVVkCb",
  "key7": "3KQuftu2yAYWgArDKf2BF93snRjniRmvWYjXe6LFNuceJ2Tefqh59KHr2kZ8ZTcRN6tbCfAyjaRenxKjAxdXUJ3r",
  "key8": "3nBjR8wDqZBZywT9dDh4wComTzdFZBZuRqd8c18fyYZRqkr5zbRqfTS7FaiiE7GP7TRLuy2yB6uFPbaXMCdaehGF",
  "key9": "mPyT4C5sLkBev6GF8jZ9svRKCWPQ9KkwktP5aXw7j8ViMBp277Q3qXQYt8qtAcVv7B3e8SusFrriu9cVT3sKBdR",
  "key10": "55hFBYLB5eMp1hTVkwJSLGQ4upuUgusYBXJ2yT2pfLUpJtLyAn3x7LLKJRrVZEcQgQyPWVJp5TTLJD9SQrkgeonV",
  "key11": "467UEnKDEJDAe72PqXpYWQm8XFzEbvTa1T8QmLPEZECKb4rP1CMy7PFUHrWrXivg1V557qEoo571vc5wdKinAWYK",
  "key12": "5QbpyrLh8hS36yyjUyYRrzznB23bxSqBJ29M2MYz2Sy9aaA6RkL8Vnyoe4kamnCsHercKxg2YLn6w5V3dmaE4Sr8",
  "key13": "2uvt1t5m2vyjMZuvXou8nkoHvhAUSCjre4zdBfE7WpUMuFwYhzsSQmgyqFJi3ZSefGRyVBryWdSTax3YJkffDfCm",
  "key14": "nX3LSz85rXEPCYPpHZNTUJda2H5FZs6qseeGzzy3CsLZQu3rafj5yPw6bvu7Q3miV9A1zcfzCmHSivv76nvAmWy",
  "key15": "MpL3Miw89ZrkjjTptUezTbe2PqvGkgJa9FARfvMH8jomjCWJ65q7A8Fu8eQ2Z9Yf4EtJS3gdwuwV4Nc1GW3LEoq",
  "key16": "5LmR1E2eqUcBgdF77Kn2WoVmH5TjDosnh9yn5dbuuJjyjRZXhPe9ewAJQAFMcVRSitD2FVfLH5XqYPPgAEA9K1Sj",
  "key17": "3hQkGddnGmq1Et9oSxGDUKX3297h78RaFdiEtQf9NYmNZqjAdaWSfXiiAcVL7ahKUs5HQ8VQ8idag7xDETuLiE8G",
  "key18": "2LaYmSfrFjooDHir5qdXGWKWsn2iV9mEy7HEEMy87BKxWdPDWK1XUbT4pVvZxtGuFxeJoTwFhTybP92bPvriYknD",
  "key19": "qpfi7nsxh2ZLeGj7QStXUTExei7K7u5SYZbEhcJXnRJv39Yf9tqNZdiqiLpS2HKfQXZTRpPCEo9j84xUbQmXSG8",
  "key20": "2jQ2RQRbJ45fFemtHCkciQhkNHa6xXRuivmywVcT5ALYZQnsmyp9sQ7SEpj4ajvhSGSJLXxqj2MgZhbVKugqBPLC",
  "key21": "4fCK13LfFkhLkYa4BHo8v3FurZfZbASxzYsD2RKwEjgoHoehqL4T49pk1mqusCH2whzZC8v2cGYMSC4ApJDQBBi",
  "key22": "5vhM78HeGXo1qMQ7XwnH9a9P5PqbCSpqdfe8ZeBKMvbamf3TKb7GSCkLxvGMH41F2kKqNuGf6vKt9g7AU2kaQGBR",
  "key23": "4pRPTfUpzVSQy11nDNz26SZaG3sZzjFDz46qhfgKnQ5LiJp7qAg59WD1Mt64TiK21GUadwqJ2YAgxBkTU9xnkJfB",
  "key24": "5EXRghgCfitZSyzMJ6emKjU9e6FXLUQCfqytWSUJLKvcg5LPggzuQDdZFeoMZLHtVa3yvqvmFuJnwKTebKZ4QMJF",
  "key25": "2Zwosn4vNvyxeFo59z9CxdxfpYF4hYm3Xqub1WH7SS7PSCUELaugWEmcrLrPLHhbruGx2WfnoDY8YZD817E99AQy",
  "key26": "BHneRHy9JdCcgweCjkhH6cuu2HydrxLM6siAthviiqYwohBc4oCEiaYKjjPD4K6YvPnjzX4c8Tc4TawhjYryeqA",
  "key27": "Cmk2xEruWb5ppjMiVmQM94ovKe3FpEBoCkJakAgJavqAbqJw1498nztQuLZQzcLrEemVUU1cDdA5kRhGAxfLvHW",
  "key28": "W647iXRWDxCDiR6ConZR5cyG7WcWnVsMG6zEQn83X35UK9KCYj6VPBbvi9wzH6kSZJYbnMaXj8zDeYrzhHVQHpS",
  "key29": "3rEE73SZ8yHTqKpnP8Y9SgtvHYpsqgsk9jZZDNTJZcJEyBn3kGFBLahYGq429DvPwRxKnf9s2pM3Z7anupXW1zNQ",
  "key30": "5kH88gfSDNNoVykSEpqjWTpfkgJdvuJ5TgYzD4qPMjrWAp8sqmrCshjouqghZ1JV3EmxwEBUcnRDU5FqT62jaQH",
  "key31": "57vC7Yy93h3EuLgy9H31EPoNrQG9yvNMkFcAJjFJYc2uTgDWZ9QD1BsM45wcubNhaMz5BT3TyaSKkFiuQfj4EQMH",
  "key32": "3mBuYW2AHuoU5gNWPKCKXxh3XvakQkZ39DkmMyLqfBKjfncHebrRBekyA66GHtrx7yADLXRAtbE5aoxR1Ed7PHZe",
  "key33": "8GC63ztAgNS1oXRknJaafvu4cjtnzesEjAQwb2gw9qXnxbkr5bcTaKVywPq9GBdha3EYi7WxoaTdTtPtakJvMUs"
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
