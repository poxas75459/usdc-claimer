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
    "JshD4MmTm4UCGLMDn97pBQHeHqKv1mmoqgWRAhG83XHqMV2JrR9dHSDBZ5f8cy2zkHsuWekzzj2cAUUK1EzXuYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6644Zkp2z9fXkmbf49zoGEg85khJw1vUL91F53egVTTYhRNxEWMBsPs6kdwkN9fK5saumEBGttAvzwyAt7ua39EH",
  "key1": "67QC7G32HT69XsuCfrq7pYW54CDVWCMaN8TcV6iZ8fd15Wf17egpdPbhYjpPiBbJ5zucjroxP9heyrCzY65JpY6c",
  "key2": "2hk573m4ar9kqMM5jRAGV3rQ9i3XN5oNtZGTWV4pUCBYXaXnX8UvmdSezJ5kSLqzEq8EBy9TvNyGZMyk1n1SUT92",
  "key3": "56vMs7LmsDgJK2yx8HSqTEJZq1NCXENA8XXPWh5VQvohNneeqsr7YXaw4jV2UYYfJstKuYnXND8WkX78hYjPXzJy",
  "key4": "36uekW4ZrXfWKLXPNLFi639G75vmXSY1EfjneWngEFRGobpJbhUEuUukmtmHmVaCAPqQKLqvzys9vMY46AFJuXga",
  "key5": "3jfibxxjipVybTmDk3Q9PCaFckB2JdeBfd6Eo5yFM2MbqdTdzciAq8xWH3R64CiwzLcJHJNxuf1y7ZFRePMB4qa1",
  "key6": "2Wxa4m8QkMdjHAmAUAjJGPyaGos6eEEfavh8BFfW9CnkVBZycQFMowXqm4MNZq2HaARKwjHeELPztCiFozjfHzjY",
  "key7": "5SewRrrsJ2zcMKKGGJm8hSeL4Ggy8bAHx3HBfERo8pJTRtSDByfMk8ATD12afaLfYS9b7mWitnsEbZXwwfMXKKQv",
  "key8": "4oAZE7BdcKP2nSAE99PnFs3FmnWK2wTS38LkLV1LQU74rJ7FwmHtCKsXJJtda9gx4MygHkjq51o83spvRBdwmYb1",
  "key9": "3AD1Z3hjXw3uHJ9Ejhi3n7PaPfCe4TMd3GU5bQ83TBVxtTg1q4vsYBQsKb5DYZ3ysGwCThAVdQ7nFv7dvvxhRLbk",
  "key10": "3WANYbn5Xk8GME4tCRfKqGZfZX35HhdC6LuLbW9bzoW31QVFredurQ48Tpocjc5ezxoPW4jPYFEZSwewo7escBVV",
  "key11": "5qAiVkBMTtk8UaqPh39TLWssnrVcchkK5ifcdztSd1wHqAza4bkyfdDRJ2GSrREms5tiZQX8ttUNBj7Rm7ms5NSi",
  "key12": "49KrtxogqG1Nph5uxh9wkUyuwb2sCFCGrfVWLpvtFwvEfVSaG7AGECyxXeEhpsDYP2QAXSKdEacEswWk37aAh4RR",
  "key13": "mvEGtYopPjk8soTBpx9t6nD69BjLW8zA8sQEbCWfMWDCxc8j6DAQbKiV2gyQNB8hAZYUpAzPrevncFtYzb8ppah",
  "key14": "5cBNNpwz6n15kGKVz7vnqVbjx4EsrQhibNi6g95e4uWxdF9wfjtzqk58Crp5wRCvNZva3yKuS6gAWWcHaY9SjBXJ",
  "key15": "WToj9hpveJ3xdsa9pJ1Ma6tyzqxg2jACi6PXhYgNt946RvWKDTzkUMNw2FSWmWm6QoVqzQ2q6MVyaqBr8Fis5gc",
  "key16": "UtWY4zoe9iuECXpyFtcKS8HTPunjjXddKD8uh2fRPeUHkSXx23YEHdeuA3kEb6d15L3UTUNXHUY2AEWdiopFkqB",
  "key17": "JjGNphaMZwKS4iKkV3HC5UDGnfhXgayMJgdjoS1wutBWXuh2Rpc7qpKvi8VRjfaT41CLwHoQ5agqej5R6mLvhD7",
  "key18": "yD7bZyd6KbuTkZks9r6PFeCQQQQwMQXjSW49VmcghDsn4HGtPxyCmEUvvmzJBR9X4EDGAqfotwT1fARTTAdc5rA",
  "key19": "eSfj1oRX91qVKd5mTCD4GvmKh6YiV8dzRbNMnpvYv5Bt8EdZMY4Egf7ksY8ujuL4BgeSLYpSCzKLiYNcCC9zT45",
  "key20": "5kVa7J6hN536KKEMzBcSr6Y8YWdVn2szYi9dje6Q8hBUDN5C7JWq5XGXYw5C6kYu7F875AdZdUgmkrWX5ytFjkrc",
  "key21": "5SN9qMvDZwbcFiaMZ81Jc2kvTsrbsjkZRjGz5W4fko4jLopjfn2bDypC8MLzpqmtcCx7mYGstpDmwefq7qj2oQ6W",
  "key22": "4q8WRmgF9UqQ7PyCioc3Ca69t3m7Vp3AxsDfDBywiE4LLPHLvnFZj5zSzw4cvR418U36qYbD1p1QzgNTxeVAvJBb",
  "key23": "3VtPTM22UUWajoz55YxGfVjxZagQTPguZ1osT9sHrcuB3MVpAmzyA7PQe9b3iUDmiUMExqwSSWMeGYeuuHUtgypg",
  "key24": "26wiNhWZyweRjKqJB7MteSxT537JCuNkCHAb1GdVq91Z4QB5CGABYoYh4cfeTKsLPJcXQrvYWzBR889qSdTuzVjk",
  "key25": "5xK2ZjWUnyNT9F6aEeDcpHeBytE7waLXDHJwEskfGHmkg38YVm7aW6ubjrfVdbu4gvKc1tXYV9ToTQrKeW7oTybb",
  "key26": "5YZGafDrKcnvN9hCHWvEq9ZGBL6j7qDyobWvb5UKm4QEJRo8NbAdPjVXiBjHJbMNwmFd9nPkY3XZm9AZFeVxxUHz",
  "key27": "umgWrhHov8cCpvkez1iZfCBS4Hgwxq3jroKkt2QTCGkqzex1QkphhZXyWAE5YgZL25ThMBb9LzYBJRpqmuMziPJ",
  "key28": "t39zwm64oohnq1enqLc3EenbhrFsru3AJNwzqLMntpCzBV9e8EmBcd6e1N8yVbFZa8KCAHktGJGGg5VjcVEFeYA",
  "key29": "2HBWXstYMc5hRRTgLP3fMzD658dCDBqqJja9D6XgYd9TDWh41rUwQQajT6dHgfTXiJgXXbTFYRvMJwEADDG3rwzr",
  "key30": "2nFTmXLBbwKhAtnuhwBX1f6Atcfi9bp3voNLbTsBPyQ8pDNvtuDz3kR3yeSGbTuhWFaADC6TpEEpGL856NAe4mJA",
  "key31": "462AryvSr3LNnhezgn9mNsLYFQD79NZJ4Liib8bupDP5UmewJgKCXcjFrCT9XwaK3UkVFhnrSxvWFfcai89yaUZV",
  "key32": "5cJshBuRJFzyktfeHjSFd9jshQR75TpAimuuBiKJkhCL9RrhXb2Hk9oDm99YZKNxoHFVXQq3HHgtYZZ56aiKkA1y"
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
