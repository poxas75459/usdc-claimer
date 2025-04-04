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
    "3cZKijr1jPmi7skBBgHZVPTj1RbgJdbg4aaGrxLV58JT3psmvzifka54evr5tceTj4PmdkDfxA4goshx8QHqkAGm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bowuw45SU385yhoZ87hrjG6trz7Vtt8m9CjDaHvYsQCpeKRea9z5LDsy4V88MKuFa99y8zazMKwpLdZgZXE1skk",
  "key1": "EcGHDg8iAKnVtQ5pJ6bdkoBzy6dQRghXyGCCQxbieyEBKiodpkR7Aq9wgrqBrSFMoPhAwZPn2CqbS3PRQdH8hn5",
  "key2": "24tceaWsnrhbP1pbPBpMcVXW6BDyEK2qV6jydcgjjcxPdMdZopgQgFr8HE8eaYPyKHPxv8Z4XFADkb2tVjwBp7mG",
  "key3": "2dWLDVacNfTa3WArcvyXKcHJHXBdt37upKD5yhmdphYRXvmBU8Pv7t6JAvAdquSuTTB9SRrZrUDw2kZD6f7VvsAU",
  "key4": "5ZZBKk2ekDpUJKXRcUuyUboaMSPtg7n5o7VMrwyfBJ9ftGdp5vaZNYbxUsPy8CieNFLBECW7pYCCDcaJ56aRP2ox",
  "key5": "5xBa8LGBvxAe17rtxUS5YXF4gV3EgBHehBUMn2RWjHDH5SkhkiFTEZC6TX1r6PmqULiQ6B3fbW5pNFUEQXnhUGRP",
  "key6": "41tUiDwRVzrQHtph6AG4Hxcff5EhuUdVCVFUCtSEMnTk4fbHesxnBEop13UZqRnRytfpcYaNHAvtP7fV6vvfZUtH",
  "key7": "3uX3niySmR2k5u3sgre4FHLdpfJ9kwMEPeKFETaKWo8HcsqZ9rJTk6c2HCCQV5sTcE8BA5LZ2QbAM7jEoQMUG34k",
  "key8": "5skiYEPW2wR6DMy3uzgUB64MzPSYZH8fTgs3n9zfvJu8k8ffiJ1ZKkJyH7V5Xs1v7VgA1wRT4DpXh37YvpLeDLSY",
  "key9": "4bd1AkipvZthfPkjN7x15EeitU2j6xsw6jGD4yzfc5aY79b6ZBU2VMs2ZcmC2PAQzwjNWECBqDepoViSFXAbFXHc",
  "key10": "474hGiq1hd2DFJiyC1VAGKVP648cFGh4wyYGVKjh3EAVitmD7ai5uR3ZhYwK7t4ubTNKQncmaKdjgfcFYUM6aVUB",
  "key11": "D1qyRWCZJU1zzT9caMipAjAdRVZoq5RxyPXSW9ar1apZnDoL7vCtQAahPkxZuFhpvwYdrYwMvDCC2YxmVEEnK9i",
  "key12": "2DKkpzxFhdsFQo8C8ZXBbF2E5jNthFukKTa9hv8dXdeNzTq6iMV7V4tds9YT7mzCoPKvE4nBAmjFJqey4eUVWJim",
  "key13": "4GouREJvFBqy8DmDEevTbTV8GcVmwfhK3gP75uqN5xwmrM17JQNb9QrFGqgiyB2zwJQ1s82RPaAE7uUxKXuEEi5j",
  "key14": "4kYYdP1s9a5TF37TRVZrPz8WtYpuggM7Z1UYjN6c4Sds7H9z8aym7Qr7nmWqUX4iTWrRAPjKmqERHqQdicdnjsUy",
  "key15": "2X69i4XtJaBmK7eoVQMnokbKP86MaQp89qtWArC3GYUyL27v9nYrwyVWDwJoaQR78vqk2HxoKUzgYEbVUKcvaQ6W",
  "key16": "3vL8XPzLBNUvJq8vX6e7dp76MAe8tmtHVd8TA1ZQaxffG7qGbuh6SeBHm4pPgEoghPmNL4qon35FCmfqkr6ssJ8A",
  "key17": "4b7ZAuWYceZFJnuQGQXSHTnfMLUaRyHA2d1B6BMqs6v4MBHgXm6ULTp3qBuP87K9rbDYpQ3cYYusc7LaX7dbFF8r",
  "key18": "5TN31VNYofPyVYRRqViz7kMPG3ZZ5xfyDnQWQM7NLNKnaWF738qppKZ3cngQEQqery2xC58b4DNJ7KQToPhef4Ga",
  "key19": "vzuQRQ63ZGMdkH39Joyo4coExZ13uRu6BorpGUpiRrRof4LGUViREGeyj2m6ukzwpoyHCCME9ngfvaMXDoA9u8e",
  "key20": "um5T6HyrbdQBeqjWHETWCvw1EB2qQxoT1fDffrQLWmsSA7FQ53MU2LFk1ewE6rHa8YhkrWAQPhbC2rDeBNYtd9u",
  "key21": "NaFSpBbaCXunZDEXHWEtcTVmaVxPE72JqST4T3Br87YD53Lg19i8hYCH4cZ5WyxV4wZwWXDKJC8iHKWPDKCF1iN",
  "key22": "4rt6Jv84YbVD8KGEnsgRnyw6mRznSQf1GrvRVAB6Lu2V55sdvD92K867TXNErcXJMiSjvqrPUyZ41V9pgtAFHPKC",
  "key23": "2feS43wWPyTZUhr27HvdzeyhYVVP8h3d8rovWVJcxF5g2T7Ve4hpkAN77PwjQEqj64QjKFjJzughh1UiyfAks1Ge",
  "key24": "423TBMh1pjVSnEAhBYw7coucVXjFjaEGdAtxiFD1oPTvGtdo9Hm4fUD3L3AhU8SGNPbL75USTWSSq2XPmP3VjZQd",
  "key25": "2wkCUUHviUJSXYybadUmmS28EszVdLp9575xAS8bpuTUqwFBKp3AiekZt1NZQ5hGD6XzAUxBm12FVV83ivDdtEe6"
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
