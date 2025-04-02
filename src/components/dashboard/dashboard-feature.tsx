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
    "3k7M3cqkQwQVVAHjsagka9Uru9W6YeHDmM9xDbS6aTNBJfCbpAbU8ywwBorsaQUuUYmtc55Y5tfgMcpkMwWk2XkV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31Y2RtBnXQFFXN8DMUkYiGZBknMYQobBZhKK652mBC4RuGSWsQBjK5AeDppzd6dqhujJ8tHEui4odfjT6Hp7YwDe",
  "key1": "pycCWUPz9Y8Mj7JVkimx1ZPQxTbWZdw6ogSTPUTtsAD27oc487TUd2KzTYLFJ1x8w48NEjGYfUNjmG6XtTsZ498",
  "key2": "4f5RBFLS3y4te5gVh5Q1cxmR4NXQQAhhUWG62CgVXfuyGxMpogFSBB7nJuAdgscbbh67kBJzGXbbcrGJh3wWmSni",
  "key3": "5dHpUc8TSw4fXMhg9TsJRqBvcCveG1RU5FJiz6WKChtuW2R7HawbdHwgwaKnLYopDSSf7u8ddNLkjxdBn7T77BQs",
  "key4": "4WtMZwrkr5fJyjb2A9raDRtr2PyqYN2kVepZyPvsTgXjZRUe8toLM9LDeFGTAbNdPhYnK2FL1sJUJJJffUoRtLtZ",
  "key5": "r5RSmRBv6x5ApYvax9ZyoA8k2ioie9W1XRit1daYcKdrTdyUV3iwm6XxdAGb9FBihYhZsb6ev52pjvDuq2CXstV",
  "key6": "3XtR2HDQ9P9RF5E5YiN6QD1NCHJ8QG8u9dkHu7kdyteZGqEg3nxwyqyZmtpeBnYwHEdREqK5id83geZz5bVZaxi8",
  "key7": "3YDSiLFKNw2WdQCra52zPXXpJR5g8BxazGkwSgoQcQ4VrpaZ1vk2UUwNYHXZnoKPZ8QWurTryrYYTeuPUEkQ5w8U",
  "key8": "9ZrmZhCKM1aA1MMjfBMm3nGgG4F4brwXvbm2PcJNUAWnERxgnrEhmVnYWydzL7DQK1DJHKjqioQKUuHxAT6isVh",
  "key9": "4g8K4rQcrUWwhFZV8cFpPcc4CXRcR6eRmr6gGG2cgTqLGTUDE98cXkREqFaCGg1pj9hk6AG1NWAzpDf32vHbyE9u",
  "key10": "2cY3ohw25xe5d1RQctLXf84uuFGrchQPzqAfhKnGcmz8Qhy5tEGEaoJFL8A3YDLA5WaQNSG6VD8Y6B5dYuuzUnvu",
  "key11": "4mFcusATC6P6s7isToUqadFutzgTSFWA2DzzDRiszFH7sGs1PhMz1HE28TMfZDGMBfctVgv6Kkx1b44TUGg7BbuH",
  "key12": "3AHTb4dyJvmoxhU6K2QS2wWbYixZUmxXfu3aZcQ5Aji1iWKCjA66DL4VUX5EeY8agDoyDQtFvMMh6pVJDQLCTJhj",
  "key13": "3DU1ySTvfUXA892wAXAMx9KU4p5Yvp1jWDtnvmGj2LX2kbTD79D3yayFSNGe3jVpFPvFsQkpeZPiTLffg33u4n8t",
  "key14": "4dqHUreC1P4hLEix72c91bken1WE47GtoCZCovRsA9qvuzbA51W9qifcgu6vkHLhexyxWBrVYopcnrSAvNk6vtu8",
  "key15": "4FNtU6NqTkWSJsGroECwppbu8Ne7owUJXokWpzgFfno85Hcp3AvfsUtHTFHKqZaHDKqmRj1DCi64iXz8whyKwEsM",
  "key16": "5h5jPY99GUT7fAgHWhNdiZFEnRc7eYaP8g9xPD8yZRBqG7oHZgkTyXSH5awf6CTdgv36R5pqBwojk5xskfifEGMc",
  "key17": "2fAfPKRjzeSeyujiRfGkwCyx1M5F1bCwtSKZ1G97eK2YNbewyCVaHED8MdPTCLkDCHfiGVATmTyTpHoTmDmaQk8f",
  "key18": "GB9FWYJHoZcJrX31RTPd4gPwk5dgoX56VQQciTmu1ZxVb6LdGXg5J4NJ7n8hPSbCfNiP8AdEnc6uWT3YVU5yb73",
  "key19": "3xXPohRSc3WvMjUM9EhwC41J3Fy9a3fvkJYHHjZyZPkQjho5gSPoZLjYjHPo89SfdR1JXRs22vCmbG2xtGvN1afP",
  "key20": "top6XMmWsvHHnZnz5ThSVXR4SVjFkZfbbAVsERxhq24H57v6E9HHAcmpKxVCbw4brS2an8hoiySWwEhWVaok3vj",
  "key21": "3xTT5DutbPyG1wvNX6A7Zy62ZNeeK8r4pH3KjeTep3DUEMbhNH3vy1iLB8YJMja3uVckoRWzEmm2QL4JZfYhfJr9",
  "key22": "5PJzZVRwahR5wgRBdva8nj6xWSYNWze7nQS4zWb6rmnTQWukg9Lc4JwTYUtTHTAZSnyepHKWBBs79RDGnEoExiJx",
  "key23": "3KRJdwcEMhLoFYjT5Aggyz8ShEMM1RUk5c9e1zLsbHbmMM1EEdpRiL7CqN3bhZePVDXqky1rXNQctEY7AgUxqyE9",
  "key24": "5egVMHKmwUejy2g1J79N1WZX3teY2XP7hTKLtBDnSSxdv7UHGCJgHgwAWDBqywKhs2HhXfQXizcxjpwuv3Kjtnr3",
  "key25": "7A7eeFKeYz56BuphK3u9bNYz2CsE3f94RoTG7kr76bGrHGuX1zMYbRuUYLcXvxdEjDo7pvmJ2pemSvr8Jn8QjG8",
  "key26": "5bJCJbfgbcXhL16dikY9dGRNM93wTb59vGqqh1PRJenPJRMLX6fhNHcykDPGs91r9DPTJstYpf9V9aJvE2Mosz4D",
  "key27": "4amCHMfg6b4XUgBDjoAfwP951AMjfvk2iQdLV4qQNimtDvhVHVjG2H3DJ9b46rm4HdwYAkde2nhyHuqMYoj52i3m",
  "key28": "uye7Ggzzj61D5JiRPpZeZmBhwtK8NsJ9MFUqxGWeGPz21w66tCyveYVQQAY7SRsfoggMMHMxwhVe4uvqrgp2nQ1",
  "key29": "GrYhZz7jFXMNnYyhpqz9v2ugDs6tQXnu4y1PqFC8YvTNHo6ZZgaaTGgSNHAAVTuTqD5nEkiU757LC9ZiayoDi1J",
  "key30": "2nPSJHkX4S2HkvTFXe1SGWfJP3qoY2qVbTLSC5EsABsqXb9rKBUN6xNaQaEddaNVD2bxY1U61gJTWF3niCQjaXAM",
  "key31": "3zfDSMFPYtYkAcSPy8GayVAyCWJfwoqWF5RzXiiZtbhJnb8F3AQbKifN7Cef28LH5G3ereWBBuyn1K5dt9UJFJHq",
  "key32": "4NmkkG8ueaMDUem23AkXpdYXDcntU5nVwjorPmYF4pTL6HKbVpFdZVKsQphSkAGJRehkVGVg6DbtVQB57Etxvh7x"
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
