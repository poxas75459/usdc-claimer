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
    "3AbwTTEA6kafrzXTtEzZ3tVoiffhR12rStxM3L2EKSivP2hZqsuCj5EY8dVBKK3vedUGxiW4pKcTQXqNon9B6EwX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WvEBiwNkTcCjCYCvVGyCp1zeHgT8aZxqB4cjTr2n5z4k72V27eZobuss7GSn3LULsxt98TqBcCr6FhVQ1a9RF2T",
  "key1": "64W7JFHMivkran9M3cgr9xVsMdXbmBHMefWmn5tyc6rZVpvZJx83UuZ98haAsPKjmfWWQSbiGB56Kjzy9kryeuPQ",
  "key2": "vBDmAHbFyR48DTXjqMY4UzjBA5wHsH6WGjMi4hBFNgyeQNBbk8pCFCMujFiVnEfavZpoV8qoYCf1cTdXJLrKZUV",
  "key3": "39Y3fVCNfEoZDRGZXwgVF1NaFNkRYfL6JKVpytsdWJFbpMZ43vVbedkTCPF8JWZUaw6xgCSWVFkZ2mB257hpxM6D",
  "key4": "2JV2y6jZmisWspiQ8VfQv8JHQRNe6D1DQhkcMmsZm1AvfTM1den6abGyWt2c3Xc8a3AGXnhy5hoHq6mWzGH1w3qj",
  "key5": "5GeLpL6i7F4bnFa9ZuhBCSAtCu3iq1h2rmuw6jtagsBBMZbjPeUYbFkj7jsuk9H8qWfDVU1ANdqCz1tYYGa3BZtL",
  "key6": "5f7d7FzQwLJQMEhzsbQX93S7s2H6sVEaYPAbsmAV6fFEpBokFWgrq82xh5ZXuo6htyocD28oPfDEJosgnZ33Kybp",
  "key7": "3XyTBzEZ4vn9dcWFFmLWfW4So1hU448hBgfBUNXLxTi5H7juAQHDq7Q53WvjRB7MkYUMcvXw3yq5mpChmR9MYzKo",
  "key8": "44a5cDMwPkLx4pgcPzYUwWy3crzf6v2tkYK1NBESaCQnHfL3haNeFAHbaefMgvdPJAKrt6vNHkDoomxD7ZkRuPkz",
  "key9": "223nB7TYn7Uaa8DARyQozyXoDaT1oX87Sw3T5QeRqsZqduzTxHP1PzRmh6YkHFPq3sLZXkCbnJ8Bqc6EXRcn7RKz",
  "key10": "5DHADoHNbDpZQux1d3MgUWPRdfwdZCCRH4qaiE8y6ZyzStKupvauLsdeMYxYgbqc9LhbBg4rWw8t4WmZPPTF3Y6H",
  "key11": "5Tbd4d6WCqy8i9fVZfJ4ywWEGVrcnAL5JBdkxX1myJz5ZgvVFYYYG2RYN5HjyEcwv2kR6rm6xNZ6hfD6ShMwUvZv",
  "key12": "3JTEEHZxN82VwtPTk3cfkA2iE7Cv3zB2b4FJKK5vVMSp3A6oLcGM2BLF16G7L56hz3PkmzYiDEsogZKQz8arK6Xv",
  "key13": "3aaTAJcaFep5MGrTYjRXDohp9APx342d46CxpfF2geHjqEiLJGgmbgNc9AXw9nVsgYKeJt853MGu11fpT53SMqgW",
  "key14": "3XQYH6FBeeimTXKGYyoKLpjyYznM12kv6JHM66Hqb3EScWbgA1LNomoTieQauwsFjHC1G8rJQDcZ9RcykDSqNhe6",
  "key15": "4uZV83PhJHVEn2Z4drfqHyfYdezAkxprx4p8bioe3GA59218QhyaSh21sG5WuxvbCtFRfgXvmF8KXkdRTTcKXdpd",
  "key16": "2xePLYj51W3QVTVutAxmy6e6EinkpZKMwT5r2UwnDyYSYdCXf1TwVbzyNpMyZzxmdtnYd3sF47QHs44WoRhicPxD",
  "key17": "5w5JjypueFeJbJK1xAPoipCCCXnRTTJjEnFQDXmoGWPBzzXuyxi5jbZWXCk8VbtHKc5wbH7KqqrfvMLWSsjcTxFt",
  "key18": "1fHxnHMKLd3xbtpVK4mDfLXgMUj7joMFY6uSNLrw2rDfT8RGKCcXyGZPa3ht2AikYSweHx3Acu1eGcreQdYEpKu",
  "key19": "52da2GnbPfYyrwCnMT8G48YbjAwtcQjXT8r9s1TbGNhJHTFYFHwbyZ7cbVu5p2E967x5JnxxSyQvMJMKVt6P7Ka6",
  "key20": "Hjyjo3XXM7dC4HTQr4QHuTWKDzmqn1zpGhUG8uGgonDP7YGJHhAFkBahkDJ3PAC432g5oY2gLwGtBi326jtmZou",
  "key21": "27VzAc7rbMzQx6hAaAputbPzjpwb6heK7WRhgCMvWV9vHKJqFwuNMCjEkXPX6D7kC9o5iJwyyM4gdBTzBJmacRfv",
  "key22": "5JgCZ17RHdMxW8BRMbdseCVQd4cQWsuXrkvfecCB8YcgRNxcXJbVcMS7EMuxp4EqUCaaAowPqYksiHQTkSW8uj5D",
  "key23": "25shLHjf3Qoq4fY122hmMY2HwrQbNoX25TTxXXUbUuY7CeLEcd5wzDPdoKpArPc89ucbivwHh2Eepb5Ty3RyKUA7",
  "key24": "gYkJ41LLfVVhkHQULS8SZpvGD1su2fHHXH2evKK6kAQm2cwtg7BuPqvxzTQyn2scxZBm4BjVUTyBWqykV855kt5",
  "key25": "3uLf6XFb22tjvbQ33LziYVq1HPxZDD8Gobs74xL2qeGfPJARdcSo61yexKv7AEWytMiQzM6jJQCnmpkzvrsN8fti",
  "key26": "2f9H3wUwbybd5GMdYkyU29MBkJdGacfvE47g4pfJxs39z7hqvZsdvEiy8GPSHnq2nFGWEpU2ZQ6yrsXNBwBZnGKR",
  "key27": "5x3VjptadqvvGqRUnZijrg624TvrCLPkHiftdjxGZTYr6QYPk4eRGTHWXntZfhP4FPdgvk7HeqLR445mWk55gScr",
  "key28": "tq4wynVsUwy9CHmpk3iZ1QSHFn9gc7SUNBRzAn8QncVAc4XaNgjaxrMNVZ3y8t8ATcTR9NSqi874xfdfnayDs5d",
  "key29": "4aro9UozfLt712GveFEhCPEUzZTqb1oLdW5rv3mMeew1RrkSLersuMzJc4Nk6DL7fsyHd2r1j6FDwzB37rNbMwQL"
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
