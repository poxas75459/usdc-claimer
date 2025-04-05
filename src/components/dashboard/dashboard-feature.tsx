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
    "ijNeu6x8uSsAnum2atabxdUZZNEjhBGC5B8EFPx1QdeJzeCYgPj1cXVix4MqBisD4r7YCpQTZ9pEdLhAPTA4Apa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32MKDLgRUqVAC9VraYeW7sTtAJ1p7dXAMj7i4AEQbKgu8LqzXgiAcAqpNFCFnqEWRy24ZRDu1jJUpTmkMoMCmGxj",
  "key1": "4hJXRNe69q8mKcumidfPbiTdKAaW43h3hyAjLqFJk9QkLwz3tXPNJHhRmVf4LzNvWNp11KFRqhUnP8TmDB7REp8u",
  "key2": "2FdjcPjxdZ4z7gxwxbejeL2vG1vEiBGMomvsuEtRfFzy5Dqy7sizAJ1d95aBSyMZbBFxmojq6HhCEvD5buGRKybN",
  "key3": "2aasojYExwsN3EvdWWo8hBJeosMnpEz8Cm8MAu3vtrvUqpqMrWqJVaTAqn5hoftWcYeQE3mh7QFtzJUtsn7fgwix",
  "key4": "2kJoXBHGefdMhgtx7TT3eYkkvFSkPY7NtP37KWw7xnud93vSXdicDGBWJjVAtbQCspiET6GaUDGJWpXEfzfmrqXT",
  "key5": "8EXwn1iLuvBERwHhm1onQR6kobqpUqrvKUedZpnACZ1UuZxcsSrZCSWJt4Vzyz7sGKTUDgK6j86eABuCQcy66yX",
  "key6": "41sEMbTB4M5frzCEg6X8g4on1R62XVHdvD5cgqzfBbx9kD6HHrGMeULwWueu61G5L6KVtKVCBkv7Efxcw5MwJaa1",
  "key7": "55fHPxXgTxmKPdsnBKQEi9Pjt4Mcz9X968VySTYAxwGjPGWd6d77VEYiamtmafBc87fu1LKRZScCdoW92uv4KGDE",
  "key8": "YJZX2yoUtuZGwnqDhNKj2QPZyvmW2Tgke8uC4gUAnmnfi3ZSXxg8E3FBHToE9ENvPni5TPYSXeMPGdYHzisUmbW",
  "key9": "5NsvgPLsWaSsUFpwodocVjw6MXNfVcvUs4Yo6xZCCB5jNuDBArDewoa1z5fr91AaT9eK48H7X5VaX7Et4gh8U2Hu",
  "key10": "5qKUTENLWSNbyr7vG9DWuA2zecyRqi9moKeSuc2PXFCUnXSdzX1orYq4BuBtfTbpGo8KVXos4sDg1kmsopk9EDFW",
  "key11": "52e3UJFF31yVdBmsxUteLWj73piRdfVQ8htHgZCvmh7UgHC3xm4eoURaCHgffWmuU3dEJ1Hfxb2H6ZP2Jnha6KGc",
  "key12": "2NC7HzHtnYox71rFGzsdptn7afHSWuvQxnAtxRAsD9djB57xJa4r1MTdwXZTW2jFB7qaDzHPAjfGGcNbWEbN2kvS",
  "key13": "3R12sXNCLEYXCF5BWPp7g1dHG1ghcPQ3aLp4ZCx1takY25SUaYLD6AM3pY2Yo9xSHXxQ8h9neZAk46Ac51PCLbgA",
  "key14": "3kSwshwGzFd7ePCgS9ZuVZQTHHAYkXJhPTVHTtgywbeBeYzfhHakWbUbq2vYnGUWaBHvZ5ck5BAQrCXe5FQDFRmX",
  "key15": "2wQ98fNb1L1qLXCHxZjwdfKbaZo5i82i6VG5DEiaejzVU44JBx2sKJjkTra1BxjW6RRZ3AUnz5DsgVpmQg7TNM8J",
  "key16": "4W3wukzp1xLsbL5EJwiZiB5xUbbiEXLRcvUdVLvRov9tJyJF5xF1QQimS6gbCsrFv4Npv69cYXo29TZB17W3FL1t",
  "key17": "4FLpeDPdJdijkAJZWSU914uxtYj65YLkWGnGvek2j6jLHkheKS7dcD76wfTQaivkbwAmQpe5JfupUNuA4a4c79RT",
  "key18": "5jgEFJGNDtQmKC6nauqMcU7RzDGqTMnix4k2fNxgC8wbCr1rsAMEmpQHR3Zrp3TYn91iXjXKiWArThLHosLqDB2w",
  "key19": "5hTNR5B2G8PdMc7WZP1fSGSugzazTHmVTHxgYas95MTefvV5yuS1CUMu1Lx53AX4jTsKW1B7HU9tosKYE521RJCg",
  "key20": "4QRme7FmsaN1iwRJeHaX5y2kcBaZH7L4GokfpooTSkPBE39oNqAbqwrWUGdEhwzmQRMSAmkfDcSTSuETS1k6xkvp",
  "key21": "3teEM7BX7yCt1KS8TJvQY2zmzBvjG35oLc9kKzrLz2yaXXSjhT298bxeaEz9dcR6ZiNpkc8fdCAYW4iJ37DqdA6s",
  "key22": "3oTYKqpvniULTQTyT6jy4Ly5hJGSoqEX7LDSqkaMZSVoC7TuaTWKkgQdcJrsqiq3mysLhZuWhQWYx1mdq9C1kPVn",
  "key23": "4JthvJDd69JQnV6fCcFWAuqwBMgEMWEoZrW7X6w9AhC6NksXPJmKDAWpurZVcYCJZwTLPpW83PB7r1DZeXufJpJq",
  "key24": "5uVxogLYtvyAMsXzMWE6DyaSAGkU52AnZjsS9ZXKxArR2THE1gYGEu1nASYWXjFpLYk2ojsDBuLJwbWdVJn8detc",
  "key25": "3wzRrMUzFkzyMJzPPKWmURkR9bkKm694Mhm64kwNb39ox5KBuHDrpWk9fJE1KVipZaN4J6dqaX7cGrSeEvtZs8MA",
  "key26": "4wrffGNuFAM6gwXiQBcokyWErv7hAuLBSnYMPQaNEk4AJuYLfLXprMYZH3hQKdfWYStou6L38WMSsyb29xA8jtWc",
  "key27": "Z1tEms4QbCD4X9n7qGkvoqtjF7v67wa8EfF3Hx8dw184mFzZ4DfjDhdPKZwBAGZVyHDh5DS75BNAxNbHpeHwdn5",
  "key28": "37EWoDwhjJtKuGqK77cNANqr3tCxNbmw3vZ1tDv2GQHvr3aY91wjGJDyX93PCgN1jrdEdfM8wi3PLFXGAeroueBk",
  "key29": "3SjismcnykNh2ECQuMv9jZqVmHBw5yRJYwd2FDMcGqW95FRuhXX8gL4CvjiCobjJtR8BQ2kfxJk7RhhfbBNwzSb3",
  "key30": "YR7XzjQGSYUaYsV5LUw5WjWphtGsKsAPP5QT2wr8F6jGXxYAxwZmEA8JM219foBTLyhie3AwgyqmdgQvsxLiBpP",
  "key31": "2PV1eiZRRGAHsjujWX5U3bByFUK8QtC4Q5XahoYGALXwwcN71v5EEmamMwEuL3mpfXJYLo3JRe5eVtyoAiJNsrf7"
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
