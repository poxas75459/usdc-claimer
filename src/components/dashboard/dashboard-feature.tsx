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
    "4vAuyAKYo933c7BceQeAL1aVeVjCT3Mjsk1ox51SiUhmYj82GUT5ps8mcowbKTeXQXyhwpFmnsMdnP5VNq3w9qjH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HvutTP4icwavz49rR7rwxHv2oJ3nfnwGXgaWfQwk15URuVNWuQphCixAFBdA1K9KPoXdTePhSReQ3p6G4AucHcz",
  "key1": "3SYsKRsiQQisHPqsRCRL6NKZXDiSJiUVfQTWK1nC7BsFQjdCMdD7WyZJ3AfatJdbhcwdRbSjqnfhnkREGqsmKKrq",
  "key2": "JwG9aQJVwW9NnxpeMGVybpAgDK1w8f1Kb3TdEhkwrNSfAFqvmoprNenkZii24m13F5RYcfXkXjR8CyzqjY1kk16",
  "key3": "4GwjyWKdCM7G2YkY33hK7vueniCTE5styX16Toap4t43G3kShienbmh3mZHjrKNnpjn5TvggXPWpBXQn4LBbjFjV",
  "key4": "4KMUpTiXUhfDyvBJUbuubgKCHXqSHYDkQWeMS3nkGxnzw8GWwXqiFR7z36iZGxqXg66t9LTYQMsWTfhBXYWLmDGQ",
  "key5": "5gzY8yjA3sKRrSCrPb1cn7jLpVcPaLV22q6EQP1siimWAdqycma1eaE5cgWUYbuBKZMdPFbxczVRH99eXk4YHPWG",
  "key6": "4qzAegdccVwTSFHCERTQcZfVmMz5FmxfBdQua5VLxfyDiaw5qW9kNXCAwyywWa2rZ7ujdd6EmYC43y7tWmmhHuRp",
  "key7": "3rATGnfiiA6UVUEaRDsfA91HrTCuvuUS6PrcbwhFrrji3PsaAxACATgThcE6jsd4MsbbSgidhx5RkYYo3be9AGyT",
  "key8": "42DJmokdG7CxX8FBNS471XSCLkVnUPbMpr7e62Lt6zBdHvXG4QWA4USEWzdE9JMpqktX1nfHmx63uqZYYDftqWhC",
  "key9": "2RTfwEeNcMKVnwBFrsr28NyFhnX3q3Mp2SqE3iipvRVvvTJp6kAHxojx5CP1k7w6TaT2Xk9A3EFn6DBkfW2SvUEV",
  "key10": "5Rrcn3saUUQkrr8ZMeQAvuyhrYvzyfzKADBiMM8prPi1LLoJBe1MfFs48ekmSnQTJiVf6yiD2yTEC9k95KaDZdRV",
  "key11": "5j4YX1H5aAbc8cszNtj7zpwwRWNoMa3qGmV3sBYxKixcTEp9XEDAUEuwrf3pDM2G7iZPtzHoumC2fvLSbyeTn4Sq",
  "key12": "3ieEdL3cY6TSBcNgzzZbmEqJgxtke3SRRCSjHh6PYpzeunDkwLtuEM7f1F2foz7sjQfaUxPbRDzyJiT5qxACrcKz",
  "key13": "5NUyextPuHm4U3b8NJmpStHuAzEcsKbiKFK9J7EvEqjLT1bk6wxsuqpsBqsuR9LJRSQTsXpcv5UW4jgFKmi57edW",
  "key14": "5v8CpsJvPz3YxFuPD9oDJGfai8Qdjoqx83wb3tA2nTz2RA3e9A4KPfTwsA497eA2ZvNWbHBnqeKfz6csZM2NrdBS",
  "key15": "4XPwxYJZab9XWcE3xsn7bThCyVnugRveXmSHWU9uLpBNc6ZssvP8jSZ6gQiU1FxY4NVpg7Je1VC9uk3SnVpUjwnM",
  "key16": "3JNoAZgLVo6HgXE4ShFkfeUCWH8nx9HUHGeZc6iqqpws82biSBHFGbSiaD17XdvbnsWvKxL7V3GBFP4W6xbSeuyq",
  "key17": "3NW2JKd1bt6sRqCSzJce7THiBzcuikgcxgmayt9xjm4nzKgNtoaeBNeutJXBZFpVknL1GZoP8iZ7EVZfZ2K6TNwN",
  "key18": "2M4yEe3HLfXPVvRXsVpyfKRZxacLTvAxqNu2JpYwDF7E5vgNJQkR4rZcviWgskKRpRD67YMr5PFgeCMHfyJh8ZZ",
  "key19": "38fr99kV57qRxQAmoVJwhL1Fo26fatn3AwUr1cZiqh9oZqwA2tYhU3JSM6EoQZZF2TtXMFXQZLDXaPPGcznjuD66",
  "key20": "26YA5XPseCa1NozkpYTGp6LCDSG5ajuYmkssZSpSnBt4hsbQcE2aHGrRQq3MBb8i5NBLvuKuRQQtgJUNy4DQUpNo",
  "key21": "3WscCcYQH7bD155kitP8ZYnAG7oaYuTPKaMqUGngkPHcWq1tW3jrGL9mrmi7mhiYUDymTTmAbCB8JUeFZnqVkFD2",
  "key22": "4d9p9NCNnjLdcf5cSFxiGgtVQD3Pbx8g4DJsrf4sh2WAy6rHV7GHiavBrQJ8hRm5sY4f6xoxywFyEp5wMbxAiXM2",
  "key23": "5bPBqx75QwhEb9wtTcC4MMRzRF7NPWrNQoAghhkZNkFNwcpp65AqfzCW6ZyquNsnZN6b8wTBMogof4YjKs5NotH5",
  "key24": "4UY5RBXuGDikfvUwofh1qnFze1jRjkqLDWCaiiN9iBBhXorLPkscy2eMSQQi2wHuHengshpeGHXs9JHwZ2inkWW5"
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
