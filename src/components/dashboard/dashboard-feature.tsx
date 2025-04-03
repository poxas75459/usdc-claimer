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
    "nqC8w7t1VDoWj9Y6sYig4UFtqceWLh26M5DqJjzrr1seEijmrJsruhxq9ENgqRPR3jtgcXrBX4qUTC49LsesMmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PAY9UcjuMYJuLyUniQyZ19VteWcS81tcNpM1YnSvHJs5gXqXpojZNWKnG4H7EXpTmZpMFF9K2Q6FCLqRaiN4tNp",
  "key1": "5jKngiogTh47vAF1pMLTtDozzUp5pxuKLoMESJHtbwCB63xcffKMLkPnMahDKgxzTr4q2wKYxGdX9jWc6guV1yci",
  "key2": "5XCDkYDiTUf4P4Exme6CpEQ64k2RC8eW3YD7PRTzMHLP3ooWP8TDUq1r5u312fyGPPdUYXiNT85n6jf8RMzMUZhs",
  "key3": "5cFt7VrrrhZqoRgoSFEuPEuBJJwq1SpPgGTjm5LFMSynRY7B6J5ymLdV6725EeYSW7X5SNDQ4tWU6zJ8N1hwS6G",
  "key4": "3VkmCQF5m9gXuZreyKBRir5dBK5KRkpNRHnE1y5hx3jHQBvrnm4vj9Y1m24kVRqSjnRk3CkvRCXLuoUbxaxDv4rN",
  "key5": "3RFmcRDSUHKqfPo8XhKXwFySsAZ9Hf5seT9SNsW8XAf8AuRKkvyYQa24s95nJvAPXem1JAB7U1kNyU1b77ZBJj9c",
  "key6": "RwnLbdNXXNps7TSU8xfYiwKZZa3hA5h9AUptzHhmi58dqXAiL1VYZygnfVPBA2Pdn8v77WKdL4auvVcduohRcEV",
  "key7": "4YPZwr6PRV9DdHULJoFLwDXQdpUTLYovtpStSNwDVutJunvi6K5zegbYUy3xRzWvAzfyq9MbnDq5TLNn99r8hdru",
  "key8": "vLYHf2whs6CX7Ch1tVAQy9mpCtbn3HhqgjGw8K7nVTYq2sjWhZmHYrzirYnAptm6CdPd7LgMdGbVrVsJbLDhL7Y",
  "key9": "4Dmu3vt3GH66vSoHxaWsyVQuidU7CkvwtMbqLSqiuKm97BKMuPKECPsh6jrtuQvKBGidvL3BmkhY7RCQhBFujepW",
  "key10": "Kga242DyRUyFd66yGxuBE5eg5TH6LyiyCE9FnbBLc8dL8UrM5miW1KT1m7KVmKs2TUNitUEg2aGJhjNfbKxuXZ9",
  "key11": "32BBXUKs9Ht4zsU8ohN4YKdgSb2vGnKogXfvKquAjKm6b6B4niWSAm4RBbiKqhptGj3vWdd1EToYWg7ED2mBWbSH",
  "key12": "7N9t4wi44ihWQyF2SFM6TeZRnAHyEnySjrNWjZiLJMwjBeX3EeJEZP8EBiZhxCDhzoAwVLQMxiHGbL6Xy8VzeKC",
  "key13": "5P6D6VL6nw1rMYMrdXPeihAXEexa6VTrKFQX5Z1k9iDu3kUH4JzJLA54jz7JEdNC2ThQMwKg9S43yRvtpKEP6Psi",
  "key14": "47YKq2tkNtDqNVSX6tqak7dFr6n6ae2tnpR1m6brJeQCoAKmzf2qCUewX7XGjQzmHTVs5665FWmM2A1WeYAW9BAh",
  "key15": "4QPaPW8XdG9evfdgwMqZxSFwPBqzoWCFhSi3xCYgSTH95AyrsFkhMzTJbPW3ar8njRuvqBUfPRPDt6EGDuKFeETz",
  "key16": "66djT4wqiBPw9pKkiWiUU1FWaJkYmW9EPSCmysSZUoCDKJFuKimJquxn7uaDyek9WA1FFZuTFxY4AVh34259kpyv",
  "key17": "34N1x7RqTV1oSr6admhqQcCjPdmbFhp28wCjbZUaaH9Y1jjMJxpuNX12LKNjWummkzNSqktjzvxBvVrmKfpsifj1",
  "key18": "wBfDYYTYMSY3VhdYLYezACmxWijJgFRvKFwjKqyBndiqJpDcEL8ou84SW4VdA6BXoS1XZ9cWDd3xdHYz4xy63Zc",
  "key19": "4R8SgaQ9VQyNJ2j7SpDcQ1Ukp83sqyrqoiXxHZCmqAwriwy2snJxuwTKVACMLTZjTZKLMhBHTzEPR9bhtrCgUVV",
  "key20": "2UbWv2GJAEJimUyJrsjqUKJiJFttNKhLKMV684UYCqwx5M5bz5C4kGcsfKM6myfesTpm2pfqyJdugXVcFVHysXLR",
  "key21": "jXnD73Un57RbuiCAxuL5ZWSd8P3bsAo3PN7gHjvSCMVeVqvmw4XoSA8dEfjBve2ps7qDTbVtqXmnQuztVWEHM8y",
  "key22": "23oUpEavyLtEMz2UofvQYu3iUx37RizHN9mUDtbCCLC1irCYTc6MS5tNQPEiE5ss3sK3XfwQDbV1H5wpRFeau2ur",
  "key23": "4M3inYW9TcRBk7ykwPFKNdCFz4FJkMNxQFqrXatuxYiPhrQGznaZvwMsBPqyp8a4SRnHmxKqU1N7v9sNiKEth8CX",
  "key24": "QkdoZ275LFXQCrVcCRLa6AVF4gK9V9uHvVgiUWfBNuNFMoo7genZBHoR6FkYXZ9ZTjvW583YDAEqsWH3X2hVx2h",
  "key25": "2sDaewTsrcdyXwFGff3JMp9DXRjNP3dVCPZZiRmpsE96K2ghNNETDP5Sf8V9DK4VZeac37kBxa3bJBvcH8VAhyB7",
  "key26": "axXeH4JJ1iDECrHpMdQ4KnbryPvFXznA5p8C2fZG8EvxHNLeCmjAJAdfzQjtr1LkAfJDa2x6WuLt2k6omuUxYi7",
  "key27": "5ar8piyPGxzVXE6afQNg2bSMyykTTXtjgQLk34enfkxsqqF9PGxZCcbHxacs9DUuC2dae1cZXPU4jEbqB4GX4bCh"
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
