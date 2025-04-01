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
    "2QTbyprzoKoVpHmvVv2QsecH1n84CCJsHZek6HQkgiqHhUT2DfitgCKVDtx3cF7HgPJ4mgNeekM3aqRczTWkyvH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mGTboreAYMcvGtwqfPnsTT93fen1eqwTycU8UYKjgxFB2oFD7WqFt4YW8cLBNYVcdotosJzMrKbgPSsquUsKaBN",
  "key1": "4xkMLtuRLCJH6kkp5wsf7R2QjfcbQgvDzzz11vpgBH76M3UQYB3gRrRU5yNqMJLgtL3oDfeqJRDsCmDsiZa6Vzgo",
  "key2": "3TCqSZ78wmLuqNvd2hP7nY2GpL8j7An5FZfJHiLatQtwvqpSuXnJYbexL5Ac6B3k6xMj6YPUZSEmmkmxePZwcFx4",
  "key3": "F9N8K7txYA5jxcx329T1Syi7LmJGABY3EnJAMr6HorUG92WPWiabpFGEaTV8CFSXk6qpkEWX3wjdNir2XvtugKU",
  "key4": "3XUzqgULa3ciYcDPZxnH6dZwY76qAjnBbACUaQ2fQ4avAZDYURK4dac6vh2zwMuSXpy3VA764ofvf2ZvhXybBNHx",
  "key5": "5vbERbEeNiwmq3WB2fFJUvsxzG9knMskMs2q9SZGPwjpgAyjdcNDYxhfLdUBzYxzZJSdwxQ72BpfTRUHGr8XtStq",
  "key6": "5n5vBDsUQSsHLvHBb1Kcw7LRfw4CYoBiffrbCHU7LbxPAYvWUPnjdHTSsp47Giv1uTj9rcWKjWajPpE7Uexs9tCY",
  "key7": "hKTzKnKq9k3bVQN5eoeQaAUCfg1Z5qBhcqYScnqFVehDjkjH59CyYmRaERzziVmiFm8auXqZjFE9ePjmUhVPtHB",
  "key8": "3NpHFrztBqhY6sEk1WgbZm19QrGP1VmJUG9qvLhDpc9QMECawVhSvjxG8zK3L2FWcwD11PjTF3SpK6wrJ26Q41mB",
  "key9": "3jf2nHyX5BVQ4SVgwH9cBMkytEzHy42GSy623P1EDSbNpfaaRS4n1NiSKn3nYNddBBqhHnaLCBGRGagyGfDpCL8M",
  "key10": "37gVSzBSv69HoDXE6tfEx8HNtW6VSGEHpbZj8Nu66HfpeWp4QLMFyprpLoM8Vq5h5rPTkUoHUW7caZWC9xn9Gzzw",
  "key11": "3Qh22Xj7tvgDzGyeP6xvcLRb51QMsKgJD1gyyopHLd7x9iiSznwoqMhzCg3Yssek37rUcbbmBwp9thfPpN3wMMFD",
  "key12": "4HQ6HMtBME3dfiGxtTRN4k3qzFYa4rWN9J5ign5TKJuXeSV9GwPCXNJSj4XGHKZWAWbQNrkchSXgdsW2PHtPA89b",
  "key13": "5dVmuDiqbuBBhYL7sWoQgqtpKqD84X733AvmJSZF2wkAc5P7U6XUbQFocRvtfPCd7qU9ETGiEyGtRDT1n6ugUmc8",
  "key14": "4Xy13N1hGcVPRSZ7RpmvRwnMFWoB7f45rJyBFbLcx3pVKbXBeZpb23egQLbKbG2mCDVTLev17Jpq9UGtgFQAJhxL",
  "key15": "2bmDfX9sf4gPxi8XUgvDCKwrDoBXU5tH5vmNof7wyVZUfsg2CMrjHidKAoHCoMxfH1RAuvWwE46YesrUxUVpQwfb",
  "key16": "4FWK2APSsrh91BjCvdrh7AzfeUZioekSWJ63CmsnEEQsAqgXas8Wig3aWiXXDR3RLA9RYtGTVwx1BrKBAX9De97",
  "key17": "dyrdRrgFRqq5CDt7JEoAsyoRQ8vg7PjVYPeVBeAbSaWkNN63sv3vg6GdrfkKFYHkwL7opZVw3XUv6aFNMqCT5XE",
  "key18": "3FxoFn4sgVeT6oxNsUhct1Xg6LHxgRNJriDSvHje7oV3zuE8C8uCxqi8tSmZizhjyZPxHc3kYSPFszRe6g4sTd4C",
  "key19": "3nxA1YXHGr2Gn1qbcG9oWAT1qPE1TAL5Grhc74EyUJC7BCSMqJ3MBihA6FKNMeoGBGn5fhDx2E6JNoqn294Zn3K6",
  "key20": "4VHBhakS6ahy6jkpv3W9AxSXdzbYKX3w2GEh1c88kEfXXQqBra5HJcj1AT3iYU1Y8YgBPnFrJww4BVvnWrK5rP6x",
  "key21": "4bRaXbQAQyPT48voTVbSwErM8BdYmnk2X7d97QM99zxkcRAFBpfVp7pdmLhoGoxQxL8KgSUsvTYfjKY2DoGPbpQd",
  "key22": "2fHvaY99ar7L4ZZ1tNfvPeKxHn8PNr2X3VaRZWA8jqULmQtH1Z2eFebmfrz5LiepXP56TdUyEoQEZ8htSspYqeEq",
  "key23": "63By5UwSBsQ8L3MmNvYoktYBh8w6QmXzKfqApfcAJ6pAACVHcTs4q65LxJatncNQF45warNYmp7HrVbVr78RGWxU",
  "key24": "26etNYNq5AfHnMHcbHBLvM6GegCXUbqac5aErqrELHUqz6BpYEeo6ddpZAaKppsxhf5bYnFZkEHoSPNGZbA1Ltnv",
  "key25": "4WGby2sQuP8qAVx34zQKC9axJbh8cBHYptVifUP7i2Gvn8GH18HJk9AtHtWA1PwQSdwTPcFp5nZYif9a7pVQ8UeX",
  "key26": "35hWYqRXP3goG97XvPhgmpKKj4M3rt7C4N6pSbEVXeVL4BAajPyWjxUMY3Xqj9DcREDD8RQmjGh71LkChSKyFWTv"
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
