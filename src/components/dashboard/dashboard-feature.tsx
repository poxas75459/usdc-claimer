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
    "4PCeXzu8esiYVWvNPSfYQCqirDQuUrcP5a5QryqHYEQvRTJXVjPqpFCA1cTtpwqejYojZibtma6z2Kv9w3jtURA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YB5pCZpoczye1VZNhS961Eb2YHmF8AipKWBjq1BxhNFtf6q4oZL3hLJmW5CqXEhvoB2XLdJSCUC3Jkr1NsNPXuH",
  "key1": "5zVTbhra6MJQ5zADq4TM65BBWoxrFJgoWy3nmWStV8Axvt9hUhLheGRi6MEVFSo35YVS8mWjpk1PigXTPidLiuKX",
  "key2": "5tff5fYivvY2fZ7ephE4vse4XN8NHWt5gt5582b64MDj1PonyAasrc4CsBUyhczrZ3Uhy8yYnNXiyeCA5TCeADfT",
  "key3": "39torfxuPRUfkMPwYm4VMGfyfbyYQG6UKLhga7qY4sM2PjNuwAafLiSgKqCFDnv3yTLNfb4bukomzgkbmeAAgZwM",
  "key4": "4mTPfWGZoPNJD2f7PKQW6rMQS9L3prrRZo9GryUmhZ3zzkTtmzLzKa5k4RerEWaFKJcrXx5r57wfU1fA9X4uASjt",
  "key5": "2weXZpNrdja7p4u36XQ8CAhKrV1v9MAtVPwcj5JMrHsXdSvJZYu434QJwbbE9VzoFNav4BDKowRsL1EbgyqrCfbx",
  "key6": "2rsTrZp5UNUkqCbCNHohk6HVnVjKVQUpzfSTzYymSDTearBAYN3bWfGBUhf5JunxZubtUvoPd26kCQf9CiFBXNU2",
  "key7": "5LnR1HeLZpgSAPhQ8bU82gAGTEWP9jPxz3RsDimVRbuN9VfS2hDAMb38cG5LwHaxRuC1wRgKaxhrbE9YUSb9Yie5",
  "key8": "4Vgva7JmiM5wAWvNMk6z75gNPSCecFEpva2u7UdMESWGQqA5VpUkgb7tHWB8MmQ1zUjQavSs9M2bp9d9D6gNkgqU",
  "key9": "34gPkSeaiEz9JEgNwR17FVHi3Kkj6T3fLyDhTTnVFUii9BtMzfB9VFV1rwfaLfCVeoyrxFZgzJXYq3iUZkBsg5ZU",
  "key10": "2cjhWhhvZdLARkMQQctAcDYskd6AoAmSTVw8mWpcp19vdYcMCmsCdhTMM8C2wcTWPV6BnmWrKCjtsRKnKUMMamwD",
  "key11": "5eUCModGGai8Z8B1m1bw5g6ikkXggrGfCSqZohWV3G8kUQ7EDD9W14ihMbrsx2XM38xd4F4UjHnwLqauC6i3bVUe",
  "key12": "5sa7829jMZgXaxhsbr5XZXipgvVgGKAMW55vyyiWNTFx4gNVzu3EXvSNznB7Bn2cbAbJgUCteyJnzWzTZJwzoWnM",
  "key13": "63cyx2FsHARUnVRMtTzccfdSoTxuRTqyrzgS8BwecKvLo63VnYdEXBHePruEk7USunfQFxP78t4yDM5Jp2T42zfC",
  "key14": "2HpStTj1kAcG8H6e7Z7aTShZ3Q6855TeDjXzhxm7gyoCSLghwjYxcY7g8itvXd2zz3NCerrgLGGo8Fjk3QnRxUiD",
  "key15": "5SwNpKzXgd398CFdehNPzEiSfxkdWEbUA3zp5W2NKrAXLVNfZoDY4khqEB1k8AU9JqnNCPkhDYzXZX5RQGHdjvGJ",
  "key16": "sAG8r1TnVUncozqFSJ3WMbdxvANG6j5CEuWMS4iNoUXpsGmcMEtoTZiPoggPYU5kPymHfF3KfWYsVCG8Wma3E4i",
  "key17": "2JbejkQbih7hQfee7PQudxfRDJxUJvXVHwnrb93CKogGdh8zDEpJBM86hTopN4CAugU3oTFmmwRc9SnLyNKYzXEA",
  "key18": "2F7bBFkg2LWPPCBVaHw5C75h7J8rWP1tXqwm9uUiLFidj2CStyyfCjDVBULKPi9t1XHxM7WYotxXjZa8bQ9cC9MM",
  "key19": "3AFbBo8buj4rRRUYd6bkEtPiq9XuDfjKqw4dMBXqXKLq4xV5MgofBrvX8XoLsjgH4p5Z8q6Dkn8LFZzeLbigJfdU",
  "key20": "2uHsRdca4yYoqMw98T7X5Apfymcb9KzcrYaJbEdcbYzGVGFb6AuWVL57554rxezJcwwKj2vCe8GR7mxpnnK68naw",
  "key21": "2mxhtmBXtbqF2vr8WvUKQoaDgV46ve4ruAhPh6ro79aRAfUHYErhjNnj2yVp9DFSVL2rYGUKMW4hm8fu7YtGot2y",
  "key22": "4MDxchSFGY2bL3phZxWMKinxq97YSLt4XSa4a9bTbHppnBLAq1GSMrM71qpo8UZugZ8AZTmdNJpSzMRFqvb4ds2V",
  "key23": "ADVLKEVeMaJ4MW3erwA5WYQGQfZ13z4xbVH8DmXLP2TUdVdx521FksAm4GxreoArGbTjGQkZdLSL8AUzDgctqru",
  "key24": "FKgi4i1CGBgVi9t84i4WYQ7rxCbhuzEtchg7DmS4sGU4uuYLEBWEpzS8DbRncGJKFCKHNWHkxXxNSms9H4eKBr6",
  "key25": "9Xeqi2DhGniaY1u3pMF347P512c83NUbABu5PDFLCUbGxT3dv957sqRZfCtdtJfXxc6cECFgahDT5QX1GqgqWdL",
  "key26": "4Pm3D5FLJGPCUqL9qjo2aRLjtwj3E77yJo6fetUv2krs1SGgs53ZU726wYKWAUNgPqaDdApi4RxFJLfAKxGe4m2M"
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
