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
    "4VDaDRtJ2ycxyFB2opT5f1kM69hbRP9P5KoCWaGQ8hszQVdgfD8pZdgYkypVqtqbfW2qoY6aajxvCpgCpkaSBhCc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T5TSzefAxUmArq3W8Jtip8TRLeyU4kwrJSJ7CCGM6yTcD1HvH4J1EPqSQo3rt27oD1TJMbJkGvuNWmEenpJks69",
  "key1": "4DGRgjeV1EDBzNNGfeC22W2cg4wGVGpLH9xkUtz94nNJBHZUi3bW4WKr5PH59rYWh4VdqoUTt6SV4Luck4Jbtxko",
  "key2": "4zpan66JkxcEd2Hm3w8YkodFxjuQPCbwvvwQ9nhqKGV33th8pAtFvfcctvVDjPpRDTeapZtfmabwbEjh1qSDJPom",
  "key3": "38GgJUyNgFiNoLuz6zscYtqMitYFqMiq9qC4WJh3Zjzx3xWvrV6wS36whkMvDDXaLFwf5KqFoWp7ndrGJrkjzVix",
  "key4": "kSk7vM7Yk8GRn1Z4xpjSb1b2Lme61q6ZhbmZ1hhweEmMYBxnNf2FsZwGQ92qEakH7orwAjeXm3Pb68bA8RqncHk",
  "key5": "5DjxEJBVmnEqFVRkf39PUhWkKHid3rybzBR9BawDqdcFDrCAyAxcCy8x7HgEskhwyesAJU94hgW8Rq7VaQxCyLQz",
  "key6": "3d9s9HBvkF4o1am7WhJmqGYhRsrQo9rPtZuTbvJCiE4eHrDgqgLdcYBmJM8qoWDFNvrSnoyhViNwgNAqvtNaZM1G",
  "key7": "4vSDspu8RpH1CHpSo4RsCC9R59i7WsXCpSksYPmHCRRL1TFWo7pnG532M596dRW3fJxL1v81MwgemL4kwApWDCGd",
  "key8": "2dX9XGQMuXG3GBeYaQfhLDrKwEBFquKHePA5FQm9Norr5noZAR2Zj4ZWNigZcwWaZNmg9HDPAAMpGrETMRNHyUqz",
  "key9": "38Yy86KsTZ1SZJ7fSewRJGw56yeYzXqEuEEKuWqLhvrcp8j6DRUXGYr23YESAKHGSBkVgQ5WyjF6maHMTmz7Re9d",
  "key10": "56LdEQRjJHtXk9AsaMDjGnCVgZ8a8yZRTE8K8kqrSH8YoCyY3LvX91Te97rjPKh7YwoiFzUTkyKP7JUkvbdBCXBq",
  "key11": "2fpx99aV8nHcNszgqGDVK9Ug3z8qFEP7ynNhvib4hU5CcowrZA6gdPFXFFGng6aDkj1mWwcjNsLRPSBKB3SLmUSv",
  "key12": "39owm7HFjfNVypR8VcWD6UWBPqRDKAhsnuk3VtMseqNRiR7F7HYMoWNMtoRAS9pY4oz2NaH3Q9EEq96aTVyJjmz4",
  "key13": "4ZZuWiS3Rx9Zs7LqeYLtuabwCYAE2se24zoKS68h3ULc3rmVAp8stRQVe8z8aDAL6Ay7KzJJW67XVn2FR92HLBNj",
  "key14": "3FFP2cWd5FiCHhtWZD76oGUe7wwnEeq6Rq8QbE8oYpEjfBghtZ2HM8TUE8Ui6Y4X4cu6ZZFVpLs3bvEk9gBZZ1xL",
  "key15": "3h8FB6e6o4FBaHJofT5JLX2LEqxWoZRrRQqXqvz2htAsuwtdUD6Q5rmzbDXjuvC8JQHsmYdCm8D6qahrCNaMG3Us",
  "key16": "2BkcvKCMosi5EkG7d4VwLD6GzLicesc7MpYcx2jioo6kdyUR9Lp2g7Xot1nsM8qit5ut1jKqZCCgfu2gjTgqb7Aq",
  "key17": "3h555VkBehM8uRHQ4F5GyMEd5YiDdPNSCRAxzqwYuEGH8d3AC2b2n2sLTsyZpTA1MvAvvaFAbW77Vduj5EoexFVw",
  "key18": "5h2Bx3dZCuBmwYPkq7bNkQSeWVDcAGXpsLQJakUuQw9ecbcSJ1oqiR7ddSuzuE1cctLXEuy28cPdnYMxkJQPR35H",
  "key19": "46FWrL1miFCd7yYFKdp2w6Q2oFR97FdJDDbpXkVNJ4mCPH5kWRaHYRtc2j5AS8g5TuXi7WriYT6mhBU89j5Ai59W",
  "key20": "5x8irbQLC5aN3Fhbi52wohiVLTGqvWA8ThNcP9WDv9m1ERvWFKtcUeSqcG9PyFLDEimMqpJA14s628YZqzBcKEYT",
  "key21": "5ETHBSNuzUnx8NcWjYiHZH1C66CjTnTherSjt5fcFukYQqJ398Dxy6K6ufHMFeuqPKfdZbSwxamBperkyqbHPc9M",
  "key22": "5jFecDH1qFXmYd4tok6NZBoL9FgYg7oe6Yt51E9bsd47WwHSohrDTvp7jkg18kLMo5KLi6gueKzHPmfBFUwECS4e",
  "key23": "2vGrenHYyuoBT6wPNzaTxFE79V5LfCpgN48VASJivRNz1C6wLtu2aFByombh3aVhYRgteWXZ43t4UGqAfC52JfCo",
  "key24": "4RhxPf8G3bpSSpLoYCZYG1PvmuKcViD45eXCwR8buoWUXfixprCxVqstEzBNAzofr3oA2FdkVaCf6wAm8qk84tUJ",
  "key25": "4DeCLEyjJcqyg72hF5aVTEmuhY2kdW9nDfkxxR1XYmWv9aRV6isqanUDsbQNSMqvgJYWf2KKX8oYnWPkhg7V9rVS",
  "key26": "2QFgLrR3hEVR4JscZtgkwXdTgcaefnHSGY1tWiv4UzpxTH3zParLGyfhW4UBMZYRyxN9KFZEHtmHpxmuNd65SDp9",
  "key27": "4XgDbPDaGB8vcsM2A8Yfq5hd7qhNNaQp4jLKExmvPq1GYze5tHKA6YL8kWNUNyjJaAapLtpSRK4wgG29TXrWgnxy",
  "key28": "4t2A9Gcz5bP2gcVBv2nHopatihVsWLBK4Q4p9CtJ7qh8B8XsLQaJvJYer789nGKQk1TCX4VwHV1WdwRLHe7Ad4Yi",
  "key29": "3mgJF31MCK694ttHu4CKprfEbPdGXdMPCNZJ5sHFXZdrnrvJNa8gcL4uP6BEjVpHd4ZCyCRNFNNE4LR6qf8ThUSb",
  "key30": "5zxirBP3V7qpqRHs1vHL4asNHAzyoUz3odm7aj67JinA3ex16KvUidHzrSYk86cBzjnLFe9qqgkeq4t6QkX1nw12",
  "key31": "8TNN25TM1GAWQtfTqTYp1q5nZwgLWexbArjBhEihedvjb61rp8rXbEwRoyFRSVUEdXWWUgpRdijLxqbEBikjee6",
  "key32": "4HG46zAXMfrJqLDtGDc3xzvj4eYQ2txSRK4Fnn7tpQQz3LXkSNgzajQbPCD8VjBSvtgQvEXQ9ZWREZfNUSnUauMM",
  "key33": "3b14YvdYMRYfTwKBq7JMYSReD2rVJxLcC1pGLdRKZnUxXoPmNHNv2Fhg3mYeqiJQyFwZN4XsJDbmuXXpueNGAsWT",
  "key34": "5ZXukJWBFPpuEoZ599LWQuvEbu8v5n9NcQcoVpNxGabBpqEdK62QzNYoxrD2P4To5s3ff5Gi7ax1D1TCvuU67SG7",
  "key35": "43RjHkaAG35KPPKhDuhdmQAVWmw1ZwZLv7Ct6FgNJcZktRdNvDbVk8ZZSyHNrMTw67bcScTCAL7Lkh6iy9aTswzJ",
  "key36": "muzvM6geRZops24cYbwtABGc3V4hxBTk6orHBqVmKdcLfprd9fnT2KU6m6kV3AE8xxGRvFzdGiKxkvHXyTz3HrU",
  "key37": "5S4iTAezba5STZveSELEXQkBDCKhJQn1VqXoprsxiWKky8pSpTpBXYe3mQg23h9QRnzA53pxQ4nQYaP1FpGSsj6S"
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
