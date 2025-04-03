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
    "4EWDuudGhjQ9HixJsYt1zo2BPPxKSMtdYpQf27nXdJvjnj6ukMwwrZ8QKxGBQLEi3EmQqgWgBV1f3vEUBbqtWQjd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jxJ59QGbEFwZT3ka8XDevqUHFKekBsumxu16EfE4KCaurWjZJgRiyvdccsisVVdtncoT3fekPK1QpRpaP8jJSYx",
  "key1": "3zu9tjohdidQaksVtsLm8mrR8zUnfrL6YwBUSWVwN2RxfLqowVVBWRnWMWZyqPoP9RtJY7qqywQxjZr77mWDUyHG",
  "key2": "3dbCaKLMgANu2DL3NEoGKzJXn7osTkPZscwyLaG5CKi8LVC5LTNU4kXJt9ee71BWiAgFKmCzR1hXvhgyaPCjZUZB",
  "key3": "5x3w2g5kV7CaqWWxXhcBAqa7SVWAp75SAeFvZ5dkpVpmAVVLaisgpz7XDsduCbXJWE3coHJvwWGeiPzpHc4QLYaL",
  "key4": "297tB9hXwohqbZaitYCRt8hrr7GEy9PmUeueJa4QZbmAWpmbv1kvjRyXVGDHhcjm3QuWVSNE8V9pFQime2bF1Z6d",
  "key5": "5CHdi7cD7miYdUoMA1DycxaJvZ88EiParF46xjWKhSzWN8GXQxdmaDyHgobZGDQGWKcuQwzuAPJfi5JtTfkVYp3P",
  "key6": "5P3doVmRBravXMqRJb46EY5GRdH6Z6RV6RczhGAracSZYCqGFkDyCMN5eL5oUMHnhMi5rbbFCPq4zxe47hKGBu1T",
  "key7": "2cKs1ZMF6cbinyMabgBp9j1EsK8zaend1EtcffUTTnj3zRPMdJPih1Wt8fzC8LPHkceZoWbtvWtiZ4i1rGvQNVFj",
  "key8": "66KeUWBKweeXWs8HFT1XHt7ewsj5xGErUu7wCqDtj6AGwt43XJSmx9JD6L71zTeXjai6EWyUiHQaRybhYPgs1CL2",
  "key9": "4ek2Y85aGWmtCF54DpGdRkkjGu519PC7f45hZ7b3eCn4hRSC59vi1hTPGkXWuPEALnHMLBCkNzvfZHPUTsYWuXM",
  "key10": "34Es1phs6mBVqkxhXWdZzJtSVyg8iFJXBXm5Na9VUh4fQKYqdw9cokkyrnH4mEAxFypFmSC1GSRXZEp3nw8hPM6P",
  "key11": "toE1nuhhnHPmmupn45z99hRB3LX8y3ewRLdKPMxdHC7PtA2HRFJSLMjhubJMnp4wCZ3TWAhihrDiAheBijaCGFL",
  "key12": "3zZm3fFmUyCYRASLteStizJEtNLpw8ZdHJcsQW3fmZjHHTtZiBRBjVKPhpkvC7kfQcXvNmGHpg4ECa8uBceAsKmr",
  "key13": "5UPEsRkqC2ZL1C2oeYSbrD82U4r7Ro4M9PGaYiAY61WbQBGpnifrFCwij9PvyFEj8Dwk49tE8xTgbV31vNuTZudt",
  "key14": "uQ5FsYcpvfNQzuv4g2fh4vKCVc28HoKVc3iTQgUy9PpD89SyccDPQ5mPbJkZGtjEfyKy7Lgr1mW9c11gVRwpGDw",
  "key15": "2yMbBXAXvQS6Yv7c8SsHc42QGPoWvip48W84fXJeYrhkxfSLtJpF3TaBjTzw49KMNLNvLbk2aDYgNNYjkfTtKFPf",
  "key16": "2N3LjpGxAxHHh9qiJWzekE3hy15nJC1oiQQXfSBrjP3VAFQU39au3A2c25ogv8VV4Jhj6ZcDhHEvaeLyfW3Aosge",
  "key17": "2N7uStnJ1ohfYg9dtUiwPcVXs4x1fbnvcXr77b18z6if8w5xA2J3BQxssDz7izgatn6PVN6aCVhhH1Pvj8Cxtwhi",
  "key18": "3p6VbNTbxHGGvCint5SvFqWvMU1KdZwCAa3mMAjn7jxbZYCk4oR69Vee733UtxuyJxbFRN5q9PWneLDmueq2ECQ1",
  "key19": "4CYyVuESdQfS6B8QRVUW2fWcZsyzH7fAZzJDXth689hDMQi4y3EVaVYN35KNwR2dhLFaCQTz7cveCo1JMCgGbwmZ",
  "key20": "3FdzUj3TupkSBQR9k8s3NboDYdWN8vGoiUJWBqX6m9uLfoNLQgjCxbgPyjZkiiEWKakpfeQpNDEpLw8wz1YsYzag",
  "key21": "65VTA8NmSJ3hJu5y8CcGLJCojzfsMc8986gav283gFEXfMnVTPBJrKxBvcuQoWonnsqgaqLLoe8gAgz4LGQ5AKBq",
  "key22": "CkPWJcY1kY8FmgiPiY3zDVpkvqV4PFQ1Uc92JxGBboqp6pk4G1Nz2MQahAEssfVs2AFJouRmzfTjts6VyHjg9yx",
  "key23": "5T6DaB6gsiWDvMgM7t6ffpJzniifuStgJuisN77dCNnVHjfp7GGaiQUu9Tx6wCtGE6yPMCrFBGFyqt79wwQ3wwQg",
  "key24": "QYpFPAVg5npLZTrp5MAM126JL44k5ffgfXWsdUFPqk5pgRwzodAq2aTqbLngvpnB8PXgXnT5QSJzAiwaGQ4Nmoy",
  "key25": "29r8p4NQYosiyRp7vmbhHvWzK2jywM2ZZgaATNLNdo3AjegDuSa9sqm2pV9wLia5TwMaxnAkzvBHXL78eNaAPqkR",
  "key26": "3wHeYpQquurPzxWzbvbF8mmmtAEDzH9KcBAoTT4B7zPabne9VAw2nFfXTxmCpZkof6J5JxHX6RUMiZdXRu6e3rhp",
  "key27": "4uwA68r9cetBNywGpCqsEQj1ML3kUA8hcU3RwkFDfihVVU654Y1Uf9wbJbdw3Js4yMLBFZbH1kJvbfTEbjWcdUE5",
  "key28": "265oLMWVP9ZPAsmkzepzKCT4VVmJEKcjHyyMd4RksgQW5TSD8fkZnRPGvZNQts2faoxG7yB5CvjeRHW4buxS9Pe7",
  "key29": "4HX9pLTacWcmLD5SYCkvibmdY4wV1uZH2VXZAkx6X1YPD1QiceyCYuQZWPnqcB9Wp3745w7Xx4LFTXcTXNFJgfyK",
  "key30": "QRuyBw9icKf4GnAiBGCxeaHNMWzAAahLXbyjqUGaL1ow5KaDcaHTAwXjsZqioogYp66B2eg2muSQ4fkVdAJ3QLX",
  "key31": "4ytW2dCURxzQg4j3m44VBW3cWSQmPTehuGmPQDf9X43d7dLZwUzRzVQxw7Af2mWJ4i7FaVDAWA2Abaw1hy8CKwSJ",
  "key32": "DScuzgNZodwU7jYLJY9gE2ZzsPmQoCzWvceoR3G7NUiTcxDwTGEpyXxRNmdobL1qEYgb66TfiFeupF8TGYx5T4M",
  "key33": "R8cmRMUQYwvt2J2Xagschi3kv3aNeU9pGhXKjvaNntXwaMCcurVpebrtT7TBH6w5aCPpC2RsC8zqLKavpcNkJLB",
  "key34": "2WP6ShSfznrNLs2huGSsGj9j1ttoEEEqKH1Yr4tu7MADSuwW8YjKXznHzpnZPshugc1BGxY4taVFjkgMg2tkfrn7",
  "key35": "4HW19zvHedG1MM9gNNw8kAoP1WjqQHttY4u2y5TNNXmbjYwG9rfbLDRaX7JsVuJbhikx7Pb7geV1jxia9RJ8sQDT",
  "key36": "5XcbR8HbC6KDD2Ls69Wu5yuyHtYcDKBjLtFRTEPc4cc9sa5QzZY1Cg1AfDvdByhhUsnWN4PcgW6zx2BqamdKnnYo",
  "key37": "4CDcSRf6DBgUiGdS5UoZmzsFVxUErktgdf795x3pVAkAcS8isk9Cv3CZua6M9NFs5LS3MrawfHUZN4NPu9d6ejt",
  "key38": "3rJ8hMZdfaUTT24dxtnAFzAc7zCnXTmeEizL1bTCmsLKA3deD6qc1vXcnvhiiW7AAsEb5GBCH9iPRhVuN2Z5FfMJ",
  "key39": "4KM8HZ38tbqKjNWmJYbDoSePjcrg6KkgTgnZMBHvNxQbkjLfFzsVjkSdCYwyrSnFXvLeQWjokZKEN6uh3BFxTQPN",
  "key40": "3iw9oBfLau3JQykxiunVoyodDyM44UbzWn94DcLzuxLb8Xmij1q2uhG6bMifikuvfsXFHMUAocEDc1z3hJG54rKm",
  "key41": "5WKYUTV7NT9PaXvCLL3G1qCP3UBXjqbqsfBApKGmKCe6vbuXLECuXxJrqGreDXonZYwTNNQ8e7Kzh7mHdYePxroS",
  "key42": "3yCTMpdpqpZN2WWMCqye9Kyq2uoQgxmTqGXRV5oHEtN4f6RGPTkbB1Gc3istV2zp45tijyF262cSbcHG3qALrjHu",
  "key43": "2HSy5MahnpqZ2ycCERZjMyxorMYTA5uu4Vvem7onSoMeUE5HN2dZ37w8VkfvtYgXgeMWAYdvZd3WVhotTvhLnkbk"
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
