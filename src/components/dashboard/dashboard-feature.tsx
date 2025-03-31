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
    "9o3KPceWMR3XUjN5HHWzux5AJ18MJSQXfCfQ6Qd1akn1tpQ1FYrRdDFgbhgzHArCb62LRFXRWS6TT5qC6GSECb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NCSGBATmACzVmniPeMEhVjCaqChqCrgbJKhZSNwgwo7guz9zGZDpYEr4ya4JfhHxvrFDxSQuqhdB18hCn5Pkxpo",
  "key1": "3xa3TzZMJ8JunNro8txMk4DK3wcPSrqzJVTt7PVmoajdcY6SgbLMW5na7PMN7tkoQXa4C5mgv5hjmcTQoLEinpnB",
  "key2": "4N19nStj6NgqvMjPgva6k1TnTrAt4PUxZiZxStj4znfTdXgBwtas4bfCUg5fqMxwTK6UF7WnYndJ7ehz2ovSjnnx",
  "key3": "4N6YrcRKT48aQRpkk7P7vDqpBUerDVbvRrVnbo2FMvF2xG8xcWvzKMG5R1xFvtfNqBu4T1wyVu8u53YeyqTB3ibW",
  "key4": "5QDRqaFmGRZjdeabYgKy6Bej19J2MwrAphQpmkn68ftqzji9eiGZEArFuXEZbFnJwNpqrHrGkgxrEXDcAfeY51Qo",
  "key5": "3tgpAu1TuNbtD5aLF5L5vnPNRq74Pi7oK7LepZBMZdjGv9FvyeQRGijD5rnPgLbHY7vrsic4cWcMnYvJWXNkA1pB",
  "key6": "4WtYLY69ijfWgoPvXF1gRcsUdGrNx1ivtGnbEESfo8jX2xazkRrp7FYV4jAgsn2NJphU6JqKPvSGHpFVTMQpfQSj",
  "key7": "4ye22NJm2L6ap9FdokWbzi6kaqHzCvYKKF1GE9vEejtJ6czcV46XAvhPZ1PEvvxN9PjrzkcjFUagzwAbyL1DaqVm",
  "key8": "3xBrZgCqSPWuAsxTZvkLfJKg18S9TXycn6M9tJVfCAFoHRo9ZMK8awafvFAXhkfwUGB1tiwHxhFzgC15hhQQ3gs8",
  "key9": "23yjzQ5Gu8qEiQvVL73thJv279qhAnNef6uJ2opQU1rkNVdseVLk7hrX5AeZFsb8xUi7DXpFx1vex1R7awTzUGeq",
  "key10": "5LLozabNHcRcSckJM6DzkvuE2nf3kpyrmuiHYYiui5A6ypqpSgsRgfU41QUbxbcE7q3sYaSCQ9Y6Po1EwYAKEbEZ",
  "key11": "3sVfzs9fV5foVAr98TeAV4o9URomGamCL9htqvmkM9LCYqXBf71UR8Eib76ZJ6LeXNYCohXhvGYY6aHJTXzB6WK8",
  "key12": "4org8QwucpHZuPDxFXzoQdTrqDDCL8fvCCiXNdvpo3WmrqYz6sunkptWF7N6kT2NiRDUc7vFBurMEZZGonJXCycP",
  "key13": "5FfAGBk3RxP8B732EZ49PTJqWQptPY8sd44bRWD3ztv9H5Py7yagKjrKXedD8cNWAMT1cUt3fdYeGBJpzUhxYo9S",
  "key14": "2xVZo2LouSTDMBcWF9adc9cxhT3FaHMFzpE1rYMTAiz7V2c5FBkEnp2JbH5pjdy5zVkQ9F64gzPUtjVfP75ReU2u",
  "key15": "38QSQPV1pGYG2uszS6b9n7vAyYLqdoBAkp3bUok9vbGeYi6x5GiYHjyG97pM9a7QLjLAfcG43muy9mMq1Pn1u6E2",
  "key16": "3fZLJEUNe58tYwdfTVk2SMFKjXtsM4mFkcv2RAFXvAY8AG6Vui26h7NZBGjNVC2Ha4JM5EzyZjPwZteNfsGi8Htp",
  "key17": "5oogsTzQ5nGzYkthz69AXN3iTwkbuFm74eCTB6ubaC5nm84DpaWmeZNUwNbx11ZSEmDSbhSwYewmReY9gFAkfq1r",
  "key18": "6VH3an4ZSpTf4iXHpZJRSsxSxAB3HA5WNNiEbMfMoP4HxyMjJgUH8uVUe3QWxmRrmKyYKtWpJt7JfbBUrWa8WSU",
  "key19": "58x71ps5gnEb3Fb5LaQTT3eRdbrvjk3cUkH8LkCKZazeiGqxxhwy1BfcHGunsFDGWZ5fbQuUuBSnryW7tmGhHf2e",
  "key20": "3LjuRytmY5J1NSSGKPVWGJge5sifCXDmdis9vao8JT9Ueo3apVuH8Jnsn4MdLVxuTPR8e9JCGsuut4Atpgkexwqr",
  "key21": "kWERPMDuJdP2r9AYcHuSC4bnhZL8SYz2mYpBf7admWHNWbjQi5ucxyCu7UDasKcYWcavNZtNJkV2bycb2rxopRk",
  "key22": "M4BeJrsw9g9YP8o7yTGxxRG5dA4yVjR417MzDkznXnbjRfQtMwAPua6q3P5dRRGZ8TCQxBg4ZMdRKHby9freqxP",
  "key23": "VcjxEXnYKaBwtmqB7Z3KVGwEcXrtN5qAwaVw4bWb4wM8fvXzmvm151EwbQdZE4bYwqkURfoiGEX4w3AaHXiDjov",
  "key24": "54qMLoLd4Wooh6Lezdy2hjBkScuWeTdiXTJdrWgYNfHPKxcMy8k7ZjR5smQB4gKdb8cnCvwZJrmawpvqSaepzU1b",
  "key25": "46VKLU34nYtPviLjDPmdh7w49msk8cg2mURvawv3h7LmqdWp1PR2vEGCh6C2ANJ5gps7ge7X4kc9JmtKv9GXT91Z"
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
