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
    "42E6KxZxL1zhXGPp34YNiquLscTPrkyTn1ff3PRdcC4MU9xFHEPn5pnaZAQSDeyUDiekDqcwoRrJvKM6VyKu1yt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C49sDn2XPJEnEv2ugTHd3uf5xxDT1ZBXartwQ6kp9wWzvRfPNbugZcVJ7u5eGKUJME8hpuezTpFWVjJQtFLVJvq",
  "key1": "2WPZyLEvMUSW8DJFGe4fgap1sy1go3GfifBEsgbn6fu6RdctwT5CRVHZ928sprQLGUpCrwvoCnJaKZGr3qUeRYuW",
  "key2": "cHS9ssgYzAsWD6fAyHgv2LHknXvXkhcbK2yrt1ZTxB9PwbPpXSm1ciQkYwMT1cyHpiFi6u6rQ7BjVrYCEN4WxbG",
  "key3": "412RumnBQX9GUpkqZeqACv2twe2ttMBrZgdWGK2LbV7tPZLKeY3U2cBvuBp7AZo1y9dNtiuGKPQBihq8koSCgGsQ",
  "key4": "3WEh8mE8hjKhezFS274RhXLMfmJMHh399QjchsfYtVZTtYee4RtUERZAmrBXSzFhH6sfZvZRDXYzr5adRJ2dkzNL",
  "key5": "aTxk5mQT5HCnZ2MgZ4aJxyUBAP2114Htwz8PbRU5gTQkcbkK7PDe34FtdR6KqVrqRWWR9YK6pWHcM1m3cPnmM4B",
  "key6": "3SnfrW81Y41kibUtevZULsZqdpPY4Je3bfPw77U2D8BJfUxxL5JypRaFqE8tYztcWRmn9gMeHSknAAep75PXVqGn",
  "key7": "2N2JiYSRZE3RL8dGxEVLmd7hzwmtTaRwH3Qu79FRC4vBvngegKstwgf3UgQrbxLdJQjuCQYURy6YWdoLZ6PEJVYx",
  "key8": "MjxQSTnvEtm7YaaNg2teJG9DPfnMJd5rZbXdAfWjtdTvhmw8dMqV4rAx9ixVfrsC4LKozQaWrCaNKpebnBK6UPh",
  "key9": "61Y341TWQpecqTQFGjjocVi5LFPYJsqiY3dsmFQD1uXxTn6jgid57MDRAM8uW3XPheeTGoYTXhxe4fF3UxYTDNpF",
  "key10": "zyB1FnjCEDkHmJHQTi7JS5fBMG9PsJKB7AP6CsQGch7gnb8NcP3xgSv5hmg5Mm93L2NrN825JH889V35br8QynX",
  "key11": "aKXBCyo4MkDHpLKL26ocHj3naVmoV35GBQCtkN5k8JimL1ZbF8DDwrFoy2qaWkWaSDXaqLEDesqcPdrEUKiBAgH",
  "key12": "4cRoeSQj2jnFkkxGygsJP5pa1NyVqKaAES6bPfmEkkHM9P28FPq26qePwZvKFSDZX9vmmB8bnwUykTJfefFKmpTW",
  "key13": "4eytqGYWrkkbGhQHtHP2EPtqBeZLYi59x2W49mAJARxKqAUEGARSQTdMdisWtCWfEHKxjen7pQsSeVnqQ8KaFqWw",
  "key14": "2tX3DnGSKsRA1857o5yWHFDw2hpkSvVcthaFKwYwgXJ1oKygvLVysMvVRScKi7LgMJo5F3XUtmRLuRHn9gWuXWh",
  "key15": "5TJAkRfaGvou9du94Gspc4X7JfK5N4eN4hrpR6qdwSVxFxa59h9Cqc1vdSi2GpC22PNDNRvpRVDLvrPtjrzUr7EV",
  "key16": "3m5jxuukaarBp62xJkSxT7sg53PKAN7QdjvhXUqLC89SWcBzBWeFt9RJyMMH3kzi1h5jpLds16RKXF8yW7AWi5qv",
  "key17": "3RMgbY55LXAZHJzdWgFPxhsNvxYBS5Nz48p6Rt2XL6WhQDJe9GZriANH2UZSGjVwa8NtqZfWB2kaSDbFUwCYzeY6",
  "key18": "3D4cEc6H5M86qFGr5H1XxXUxgvY4iqZxT18V5UEwAbDQSQZ96FGNMKty5MNwejX8fMtmakh8Fc5VSD2LzxXMid3e",
  "key19": "3t82SMsP3GPbBnnbZ51s8hFRTnBfCWn8FjLdyqnVDF4p3rFGDABqdnwVUZd8wtTiii5XSudYhiFN4oihFWSpBaLG",
  "key20": "2e44bD6SHRN8nWYYMcTHTqaMNKtr2QHfSzCQ5HCL9heT2K1TQPzfhqRgccPFfwzdhTUWSvZVbz9b4x7wdmMoTthq",
  "key21": "4NQkXhj2wVJ9nivN1RwUZnGyEUhGLEcsj7o89iQAYmfsbStu83uzKcbycNYAti1uv9PgfbHXAACQ3Do9gfCdZhHv",
  "key22": "vuFp73um3X8HLAESkHKkNdU4BDf7ZzUyYpaEzNZt5xM5tsA6PDfCKN75a8wM3AHimLdZCYFCFo8XwoTqYsyjzDR",
  "key23": "5vap75Ta4gDCeYLzV2WonGkQz39S4BaCodgZ1xXwR1XUEmBoGKDEzccq4VfgWiuU8uAYmtyydLzSy3Ueonrj1Tsj",
  "key24": "52gyGYd13kxqfJCGmuSgTB6xFAA1YAu3PqrZEh7RjEg9ze2JUhn41CYgijHquNqsQHxk1fNETZNJLb7KVu9eiYgo",
  "key25": "2p5FegapgCdYTDsaC58vFMDKAqTnd29UpJNWonxGD2rsrL59jUXUZPoEKrytqL3vHApAtdEZtNi7Gy9fEThuNSTZ",
  "key26": "2NVv3qgrnXQJ6uXFjZWSmhAnAN4TXq9vFPB1t2RE2qphbtHB4LgLGZMFzhQY4oezY6NuvyJiy96f8Nd6VuyQN4ta",
  "key27": "2QgCHeye8UavPpvAL3msUpfZ1msZpgRnhnEJkMwWvwazqmrFZZRd9vYTw2CHDZxRkdKZRjti3h4WRLDyKP1jopPr",
  "key28": "5C6WFsZArZVhMXfZfEEkgH5i6VUR7dP4hFT2Lv7wn2qeSiLbe6csLKCbzJRuzYJNR2YUSqeJpJXg3vkAVXzc3dpb",
  "key29": "4CtaPMFrQcA5umsQMphss4dJB6JYgvz4WwJhWJtkRojk2HP7ycwuVNAPKgxRQDrorNULAuY77kKjhhtUVvJS8heu",
  "key30": "2pHbTJcTwYVgaMdMakboi88PvgyXstTpyLN7cNoVfbN16ku1psFemUYhHqfCu4a7my1Qd3VSX3FWFo3ZkE9VntxC"
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
