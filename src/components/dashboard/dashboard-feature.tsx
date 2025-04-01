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
    "3cbMyPyQDXgNK7c2Z5fu2oxpDBVTesA3CzkPT44KjGSqdE15mQVtJCghjDmUUEXC5qCSKhBoLiT1zU1rx5C2APx8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q7aQqJ9HSVrLmdvMkZbFxQnfjHbX3oL9HkWYE79rk3Bee3rLQ88mVoLBcREFMKQZhU3hreqs8WLnNyCZ4RAM7q8",
  "key1": "3ZU4MfoBfpGvkZ8JPUCwfUGgRHTT5N2ceYVZnWF3A387EoU4Qbkf8B84nvTEL4gY6LHJJ9sjShZrvG6QCgRBiddj",
  "key2": "55JmcgbunVTf14F1fc42C45UdX4qxfFHQQyrL62nadtNiR4rXxemWwV6MXBzuQqwG8pM6oaMQeYhkijRgCF5owPV",
  "key3": "5um11QTEc9zBT8R3iztotdfCvzoSTvDk6Br2fwdNBmDCtJwDsBhR4a8HFAv2mYMLHEpkSFUwpHMXBM6qv8agaDkr",
  "key4": "4vd4W9fk2oo7VHHC5DaCMQutyb5TfV1Mh7x5iaehoHPwJqNApxyZA3tzC5TzYMFXC3D6S4wLtgYu2zZccnYL7CNC",
  "key5": "y5G1XtGABAFY8NXa3QhqbSHQMVc8aLjoFT5LPYpyvicUtz3D1YXx5trHYR8xHz5K1VYnMjG6z5EztCmm3DnVQbh",
  "key6": "5R2phKzLEKvPiLL64xaUpJLCnXD1ujpoy7D7LMR4uxLVwndT61jUZQ9toGczcj2JKvtL8rnxUiaoA7ehLP6wAZLs",
  "key7": "254TPtjdjdzBPF7hJtSYMXQG587wnmYz65AiXLiJWjM8WNZ56kfEtPnSqcXjRKxmcZSFJvb8prRSFdKsRZ8SWNHX",
  "key8": "Ys9oyn6RFHRAoGBWHmYXpxvN1eR28kAkBxSkaaMnLWUp6LwuSaeM9JVjwUboynuxiG8ohVsso1EqfVNuboLtG2U",
  "key9": "4JzUaNR18aPYd5kbLE4a3jhq3K1GMx6vyJn9d6bfekfxxVTXvt9h8JvsK2ENXqp2CWcZR4c9JxM6P9rLS6rPxDU5",
  "key10": "5AwcNn56EdPmabJN3DEb8ft3nPUQ36xzoLeMw5qucxokkKuQFVhBxAJrDszVwkqbbfXmtc2jd7bEQ4m7pX6yRzWL",
  "key11": "6QbaTjeYE8s644G8k3CJJ8MxXbHpNibhJC1jDgvXytKYKV16g9S1SLuU9YUiP7JbVxVPq1aZs56iEGsdunqHAfR",
  "key12": "63bvgf3RFpHCDETQMByJJhqWHeuS1fF42bMfcKnNdwHTP7RzdYgqU3NfsspksUQxpD3QRDL4ykFq6BXzTJwQHDMG",
  "key13": "5MsjKoYN5KejgLXD2MvKs4Y8MMwCT7Nz4ajp1PWPvsPj1LCzcLJRraB7fpcPgpYMPP9z2xmQFPZfdL598VPxxZcm",
  "key14": "2vCpqD9yRKusRVToiDnKrJWyrhU7MwicDouvH4w8gPUHQMEJheAW3kwaLX1L2yQiBqfYzzaM1yB8QfXm5kk3PsCk",
  "key15": "5Ufb5LtnZzL9xTSENqLpWYwAG2ogxo6E1PPXBPxtWTASk6gx3tKj8Prq15pLQ5GrEva7UMBZMPUdh7ZwL4jJGVuQ",
  "key16": "coCLWvHSoDdiqPtZeVfqm7D32mY6fieEmTZ9L5MPG5NYNfmMX5B844epQNxDdkMCuc9S9y91qKT5HqMha1HnuBj",
  "key17": "2nx1goTmfrJvnipLTwD83o624KChmejNLgkhAVJTdKyRQhHCyS3H2mUyo7sjKN1aTzg29bAWLbqyj8kNTvn4UXnP",
  "key18": "2ihkmSM9jsVqjeJLpkHtkSsFPtvrPQh8f9KZzmmZAGufYtALXknwSbUKqo1v9pjRLbJKPvxpZrD2E13ZnZnVnwRb",
  "key19": "5EhmgXFNNbckKfUnXqZszrrcd8C2bMJn3kPUhEjisVMJ9jsJLWTHL7VV2SU1Qk6qMytZoyEB3Ex7Q942N7z7z1yP",
  "key20": "6J9yRXTXQHYb51dCmWjgExh5mLjSYdffVVfSChmg2XPUsjtR3TB9am2gDMPUbC4q5bvPyVA2aHhHQM2Ky6QSyiP",
  "key21": "3UNgsQvWc1iKLKdCaNm7bQ3EBEK45tCFk58EcYRx389oHRRYHbeHSMrLHLTWHEJNEhdNvmUVuACM6Hn1AQNQVeME",
  "key22": "5XHc85qs6Xcg29TPyy93pS3ZuokV4vp1YRQHgzNHUK2qMyajpgWWcrnmNFDGxKwC1gW7GqmLcx8VCjz1XEXWgvpU",
  "key23": "3m3uddwt2BzgMhzMrRV9brGWpr4RjmXrrA8BR1wMdocUatQ1SpXqexCsBfi87tSJ2fmapL8QQvccLu7HFxbEjKyP",
  "key24": "5TSK93QiCukGMbzVh38A4V44358WHKiUKJnzQunJF1Ng5Sz8zNwBL7WpWGymLvZyBJCvPj5jL8RUB7uV5pVUanPL",
  "key25": "4jKSSEESh7AaP8KsHx3HMx1bNbDRbW8L1e3VcN4Bu9yNB4CTV8VWa35kcdsjztKgfc3QBycBK6L8NdCdnJLk5fVa",
  "key26": "3TE8YkXcAhw1p1JvggiA2SidM4CpmZ7AhvnSZxXSMnowF9t51zmVVxWAqpTVhj9n4aDxBJmxJ2PvaoEnZhjcJYbP",
  "key27": "dzU66XjGz5SCZTL1gvjvKTCugDczFnMgEtTiiyKpkHuhKTAyBV53Lei8j8H1oHuWHc6CsnoZ8hsrWF1uCrTswuo",
  "key28": "5SZsBVyJZGt48ua3g1P5o12RkZdNaQupvXEfujycFv42sQsfzDFax4DpZgtHCTboEHXW7QG3gMkVtagzekYpTMqB"
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
