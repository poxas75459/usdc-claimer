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
    "5HGT2QGJx8tug6No6LkW9Eo59V8MmBef7Aq2Fg1eMUZgJtvTPuPjcuxhDYxjboeC34GzsJx8JysVfwfy37MB1KtP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qqPqATNjfTTTNnTw99E6iDqRcjnVtogrUsFi1FbF4tmJwYmXraHmTXZQC7vXZgsyraeGoENyXHMpgZHAJaA6zbU",
  "key1": "2qf6ZfEJgsCXUR6g2fV5drL3VqFNFgLxwA8Wu57CZcNA7RYSKgGNYMCm6nD33Fd1ypHXK1eSBMUFtePj31hH53nt",
  "key2": "4KoEffPmrGXj9vb5uwVbUE6GvzqA49aL6rX2K6u6D6VjEqAvotQLNRQAyBjjpa1Lycu1yq413Y63SfAiAyGKpZ7F",
  "key3": "4R2CBCe25uXZ4VKfqajSte8G5xZjHuajrHtKgwGRWRAdeM3RKsARpkLZ4WdTRC8nRZHFrJixm8bZKam8xmDjDG6p",
  "key4": "4kfLUjLMQeGNPoC1QRUzqjhjgYjEEFJQuowfBHg8UpbGEbne6KfFAhbkfnnFv3btTqHiGJ75yvcduZazYKck45oa",
  "key5": "2s4DtW86bYCvZt8PyegMp1Uk3LoeEwEreQE57yii5YHbyy3yvJydSMXzKcvfbEb3dpk9NPsgAdjspKsTbp4Qrfco",
  "key6": "5sVSYUvfs8k8QS5279JvFknZzKtDfef5Bc5bHr8rk9vrBaTRWhSJg1r8d4VNq4Rf1AQPzMEBoitAL2dc4JE7Mb5t",
  "key7": "5Uu581k4ZPiY4au2tmx2sRst4zBtPdy3dz7d77PgoQegJNQuHdSbSe4d7L4EKunYFLcd6uxCvNSEHkP8GexRMvEC",
  "key8": "3P1UC4YTxE8YqrS83aXhJyj7f3KjUasSWryp1LTkZSVPvTR9KAAc6RJRhDPymzbRUjQdFpmYvZqCMMBAxhcUeMj3",
  "key9": "3P8tbDwX9rbHKAvxmJPPWPgVN6SeCxVBAskbfGg9LB7SAiWnywhketBoZ2raMYtGLmV58zLEUGntp3kAEpWGJNsp",
  "key10": "G7WGot9vbQTTtYwd8aASPwVLZpyPjfsJV2E4NT7MMmFHLAftEywgeytJx5KLh8RK7XNiaLWAvVZt9Biz3KhqFQ9",
  "key11": "5dKYQurkqTTLqiBoJMuKGzJLw7XggR7UBk6CpKQp4EyF4KDPAPi5h6LYu3HpDkv5L7p87P6hLzxy14eTMXZ3sMrA",
  "key12": "4XZsmDN5ZVatCvhoZuPrHUXVLytRUiSq6GBeWYqRoDZEZA7YuC9gqNsyRpanjBGUhJzkBT5iij8qMHaYdJHjR1cB",
  "key13": "5VbhKXp1DvEgHCckFyWeiHGNbWGFvG7VBLzBSKq3eKeuprTkVyxibZW9VyGWS3cAaaGfW7w9aPTfCvuCeyPWLwuA",
  "key14": "2io3eyBD7SNdWpMnkgfsVg7XXraWj23BbBT6J4TQn1cgxByrFAcrcyYq9bfjGY4jPeMeq51CSHVZcDFRh2chV6zP",
  "key15": "2v2uWFY1wNCm8KYVqzTf4P11h3CjcYdft9MTLnzfvtiWFfpjABaz9AFnZLeH3cVaEPV3QryxPTrdEVPQUs9Ls84a",
  "key16": "5hrKort4AhPZAH2DRaaKi6No9LbMFmNFVt2kkQ1ZF8bQKEsK5pFLc1tnzXZryyDvRBEyiLapQLJTTvcJrZEsb2cG",
  "key17": "4HCBPWNGpTb7RcVvmbx4oP6i1tvXQJTFTyRuJ4zJe8pu5L6ZwDaSNuFEc6vds9Lt3DZMus2ogmFYGSpHzBNxZkj4",
  "key18": "5zn6zUFQqFqVscFd9tCZGbNR7NZwJPKGhzdTGi56N3P3TLDW5qTn82kVtbo9XC3L2BbtxuvyjuCMWpcfrFr33XJd",
  "key19": "5rD9THoghdUpLuXzf84hyscrrZCKhf6sB3WNzSFszXkwaTTCVjRgks8LehyNgjkGqJGzJqVv7RvHgE9x8pYtbNd2",
  "key20": "Xd4GSghAFa2rEdV1qh7RycLYP5CY8KXvGuUi6cAJkatQxBc2drc1UASLRjyaMJatMbk9BktH2vYkEvUBD3ZVsxP",
  "key21": "49SetJuMUCHwpPBYZnNU48CMAXVAbfEF3vvyG52debk4jvjD9YFkhGBfZuYGxDiHgFrUAESQFSeU1AsT1sisZpyX",
  "key22": "236sS6v91MXDGAspied9TiiiA4mZ25TGLCho8GAnsjzcpHiKEfPo4ztCXi85MvJxA6YgnfBCDeWBdpHGRKdBGfHG",
  "key23": "2iYnkixv8iXAK9NxstdCqhM1LYvPFVN4xMu8A7Y2c7FmCD2SVEzg4M8AfccQpaDFHH5U1trR1mNcFKJg3Cht7MJe",
  "key24": "4SQx4mZfBWBvE5xty9qhQM5AiXJLckENtQPyY7Vzx6KDzKSGFqmHHDV9UhGfhd9ju14omVgkQNzb6jLuSPb4nmSP",
  "key25": "4tWRw7aitPBk6YLFADSJJZdczePyZRHij9x75dRx9JQbF4fbqFfbD9bX6JWNP7Hh9QByXieNK6EpQn2s2FreSeV4",
  "key26": "4WzqUuxv4AmAqSueHNf5VArRNQUXNu1L9bF6QKV1DwJojX19fqK1VomUAdpEb25ihE3FZWZfrhYHAqefs42QApTD",
  "key27": "3osadzhhjsr3owcMgmw4T9UqJk2YfeYFE3mhAU8FaYJy1odkYZN1kCZBaksDgrZbn7A4nnbeuoS8BFs49kKb3F5z",
  "key28": "4yyVskiWip6Erm4Jr7zMJ15EfZ2UMTrM1N5qK7AHibhv5CNynhhaqKEW9DZBSmYgxauDxybXwGs1kBx4rbQxg3Q5",
  "key29": "2wTboBQSmB8cU5Q7TVpqG5riAqKoqudbrTW9RgD4ZvJgbm83AGuoWkzizNChoWKJ5gE9m1zaUomX3YB8kDJ3imoq",
  "key30": "3Gbv9N16syhJZ8Xd1vbN7gQ9UGFxJR8nnSM1hhGfwUzmvy6CNviUaCWAxFiQNqfVGs5fCiq6cQ5ac8oFKkoczk26",
  "key31": "ixYGWUqbV9ambcVvyxjXhLHufp21FxTnyWLhM2gGAjf1bojYb6ehGi2LWFxPvEtB55Qd9GyG55XehTcTMs7bcEu",
  "key32": "4rq4tMGBnHHSgGKQsYeqbQ3p2MDEbX6arZpEnpMNMcJYk22ceGR6kQFKVsvLZVSowH5eGAJQfaWbDhqoxMEkUixc",
  "key33": "5hWEKs4nSKUxsME1sV1KzAbL7hsgbtR3xAHdag1L2j72R15V5CP95Q98NssWvdevEKPFFq11AMepQ9sqbgbu88m2",
  "key34": "4891Z3wLjEmUX3hh1nfgaJFvBcSTfAoyzmwGZ7i9qHYNWVZjRbkDPXddngDBv88vvBARV6cVXywZFvMwgogFyh93"
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
