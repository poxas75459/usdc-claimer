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
    "48qt8v95U4o4AGfdrFFc9y8zGmUi4WPv5u5QiUUqA6UtnTQyu7w9kjmrJc4bZrQfCHhgCAj6e9QRo6TV4mZAgcoz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25DydoaE9aMgUUjL3y92iUYSCwA5EsZn9KGy9KmPn11ux3YcmUTXNQKfRk6FFc3T12EU76DUCANoBPfZsWfShiRE",
  "key1": "2eV4uebfVXQRp3gTPZKnQpHvpkjGFWWJmDpjUDaL1Xqjqy88bYaPR6fkgXnpD9wB3322W4mdJha2Qzqm91BaXLhE",
  "key2": "45hztaPNH9QNkRkgkYoALKoxNzYLrK7sQnKUj72SDmFMf4t9VXwNvHTxW7RUjvT2PfisQMFZkMcsYszSaJjkB6Uh",
  "key3": "37nGQQNwNh6V2FKRZ7LELMurQq58iyY8Lnj6Epmv3SrSF3zPteF8XCpy4mKn7mXBWpGpL7KdiyRkCeN4YyzuDK4i",
  "key4": "4b1pC3t1KGxnCzVYz56Qmuw1HmHA4RAqWbdMLfrXJ9Cc4ftm1mw7xTkBzpGo5QmPMTwWYWtJcHiAodZgMve9Ln3n",
  "key5": "3nMGny5ri119svfnyqCRQzh1VdjAPmWtpqvZgTyVRBZnZVvwmV4tivffC2cXyijSKQanAguE365xVAP3avHHMaxd",
  "key6": "Rx5SgtQ1CU97aZvyRu21wxnsHwFDQfx213hLmyRdU7799cCgMFtJ5KHZtXZmCiUAa38NyE4U7Qwhm9m9KF1rbQo",
  "key7": "41bLNzKwQUvyUfCfe5M2uiEcAtJM736nyaEBTTjF6aDQxvecVxAZH4bZD7RE3Nrk4aAFJvDW1JehvmPHckQuFiYY",
  "key8": "2PmidvVtfvVjSBtgfK6mqNu8fxZdw4q1HxfH3y2NDQ5k24fLoQJh2tA6qCWLca6VZK7YnbJZN15JrmjQCYehzuf7",
  "key9": "ziDLsRxkD7bTZ9yNu1JftVJGGdDyPUojA2pLzFMxsUvNG93K8CLeJyReb1Ys8qAHG8i6DeM2YkQC1G6x7imbdjQ",
  "key10": "5QG7AFEBpsAphp8xbT3uJPCY6zgL2XBwqhHfX8gpeXbcQUT6EPFJA3nXjLECm1MTJPnQpR4mXLk8m44Quh5FjZFR",
  "key11": "5JBr1aGoKuMC2yE3St8AwV5gDLKcHWNG6PFkQxk5kLnCsZzqQuYQVR1cqs5nZeJSkUAhG1f5HQhi5jD74XL42GBY",
  "key12": "2z39fSYNjSKExS1b6n1fo1YHLbpEwFui1XqjNeKwr1mBSVHTYVv3HYoujek2sb1dZxsj5HvyWYKwfkaMeHQ7Qtp7",
  "key13": "3SJ9hwALzy7gBzg3kBsbkaFf6Tr5WJ1B6Yk7jpxvVFnCN1esKLvCsi6ruMoZjKeo1jjx3ogyvPArboaGrHvcooS8",
  "key14": "jbp7C9XqxR69P4FA6yLdpZB8PkNtSVcSSXsvsXaHYjN5qGi36WbFTLWAPsYYKg7SxbQ8DK8ZNozeFc9kWuGmeiG",
  "key15": "4s9VZaz1GDpdqWN4bmw8abWBzNYdXWweQTsmN9eLwoXZBx8djVBnPGBvnxJkmMaek8CyogWhHuMCiuxXK5DzG8Fv",
  "key16": "3Pe8tYnQpkSJQTzg2jNtChE5SxgYytKzeTWPggQZt7KVCLb3o9wqyFpQaqNfzRNzzDBtShS61EFHQ4WoDWQjzB3B",
  "key17": "4gtsj9KqVLwjFYFVSZVapxRinrEx7VvavWYfPSPWXPvVKwHoCfJWKzfdMrBiUPQskpg7tnsYLFm8JJhjsoFv55W9",
  "key18": "iueEL8RKvyoNKsw6aSc1rGeo9nu1sSwKG1mqKHTRLkUJrGM5UZ552m9gv1TQgdzsEMr7287BkDuFoTUbhqvBuVQ",
  "key19": "35kh3XkcJWhxJ6vdVbXhqkcE2pWcXjoVnE7rog3BnXqQPBmPWJbsv5cP2Z35QveDFRmUiK75qiDcrt7j6JYtjV7L",
  "key20": "55oL6SeceKXRNq5zQyEVwk1Rd1aJE8HAZ3AjoC5FYjiyPbe8mVCccy422iuWwi3vss1MG6WLUrmUk61Tt5RAu8uw",
  "key21": "4wLYYwz6QBaYqB6Dzk4h9jTnbAGz2uQxs1zjtXcyNfSReKfEmkTRP776yrxp2SJcM63waNmu9tmkiqWjZ9kwnJ47",
  "key22": "5euw9SAStAhCwWtaAhvfrHVsniME42LXnVjGzYu6pMuRvMCsGHMuZMpsSJPdL5QicXzxpxzAa7hUsR7nu9xVQsiC",
  "key23": "4yUwSgv3M54oLkKnTEerFRjEt1joN4QTU5z6UBNguvaFwHYoXK62CGoQP5XX7y91ms3seUNSZfHFSmc5G2aNJ68k",
  "key24": "44sarDp6i6o33ymaWv5mUFYGkhW5Uym7Gb3XD6ZkE9CCaiyUt2Za4HkPWgyqCRbvvxKFmHcA4Y6TFgbiDMxtChJs",
  "key25": "51YqKSXwWsjKRxreaNhFcJ8dWxiqHkT5hv6NLUywx9Ba83Nc5S5nXdyCDkRUszGoL2FA6XUXKMJt6Q91eGE8YgfF",
  "key26": "67GZA1sXgbJzW2jwxFyxhBsVo3iS9La9Sw1SkpaNZy4eLsFkWLE6HXzfcskganNb5vwuRYVWa8Qc8xQmcL8Pfwgv",
  "key27": "R8edPgBo2QgUdau9CUeEeZBbabG6MCwnsXutBpRbeMoQNpsN6BNYsySZUiomBrvSdQQNRi3KgbPPLYGEjNrvMqK",
  "key28": "3cER9FjSGXfeHQ2BSCk7fKWYDWNs9bQNS94CRDpWB1QtaWYmZe8nbgp9QKiVb9PMvSw3T2BvSsPF1EYUL99uZP1B",
  "key29": "4LtKjjp2ZkYbpYkatKQ2VCWpwH5w2PBRbDSfy2RFfCjgLmYcoqawyL7ArJKLKsdWsjtzdvhGyhSCGB42PmS2c49Y",
  "key30": "5sLC8Fzd4S5mPbPneAqwV9uPwhfQ9ywh3ebLnS6WKGfp7zMymwRoxus3ax9WMA1FAXxSK4uYzLvoDt7HB8o7b9hV",
  "key31": "53fXBjFS3biMjXhEJJDUBJFKAw6VynBGERqCxqVSSGPuRknYp1KUEWjNHpFo2gKN4nur6yHMacViTAbrL45XYPJW",
  "key32": "2sCgCo3X78qUAxcv3giUuPFCxrUAaUoSa6EaQXnanUJK6AJkhrGae9HJQfSq66zTemb4z8MabR4ZLcfExbsmvuvN",
  "key33": "7z1wLeuZ1knpr7gbjcfXhUhRkScWAgZ8gH14Gue5r5nEGTUXT6XuSvmxyr9426L6tza91UavWJn39ZAnYHhneFy",
  "key34": "4gDEtqyXUvF5T6AGTx32GUhZq1xKTpUAk1PRYsdd9C2cjHcTwTJnk9BJM5KZ9JHUnzHVSJSAshbCaiFv7wUvNemG",
  "key35": "52RXKPeb6JuieAhbng3cTYbQCYiNtvT3zt8MpLpJbtTudtX548YL3i3GejgL3EzdNCjb7U4KGs8syCkjLMSXttL7",
  "key36": "31ZYCn4JgEXzteTfNP1XjmR2WW4Ts4obTFdwBzrEeb4PaHUk9qbycgtGuUBuUC4mD3GK6AyfLJ65A1meBfTbTyjy",
  "key37": "2qp43s4KnXEzw4WfuLdToMY9YEx8eQUXiuXB5VCH2y4NeSKHd6PG4TJPt68y8eWuobsNXUF5ogzNwxEBUiQKrXsq",
  "key38": "KUitPiyzWk3MtExdtexTNDhjtrPai6rmLdnRxBteWovgY2dz65cPUxpDrAaHriwMoXFx9mxc3JiaqVcewt5q3zr",
  "key39": "3UXxcNARM78GrwpSjYV2NEhGdGrbTgTMi2RVVVnxXmU6SXxSodC7dmPVMRkYSPaYfW8xBh1hWC4UTTiswYHPSuGA"
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
