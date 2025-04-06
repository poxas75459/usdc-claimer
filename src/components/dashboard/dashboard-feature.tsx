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
    "4YhK7LaVTq4jbpVXwiFSbwf5spJKdKQr9h8aV2WbEd18CEzjSxWGAtK19GYG5RAtsEYsFtTk9ZhgYapv4R83msNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x8zvVfr74TupF7qMX14u1Jdjdw7XVb6xeocUQ4JPhWbL47K2riCw8JufsBW2Q7QHy8zsVSG6RYQCdtArccBHmKd",
  "key1": "2kJjgSLeaV7NQq9S4EFggDaW7aKkeyVgE7ESzePyjXMxMpq6VuhW4dFerEhv7DsNd4bd3wrzuuSc7y3hwT2dhowH",
  "key2": "4h75a26rfe83uwHQYNdeUkZKdxfVUydTEYErx1bXty3P5sj3Sie1v6zjF8fLwsHDDRKKXZYY3S4q4ZCQp1e8uVse",
  "key3": "m7SHvXpyDPggTb3nWvQ9T5eQuBP9dswzKu7Hj9YHDao9WFCb4CzeFPjzwPeCkN8mYCtmWextQ31xuC64M2RcjmA",
  "key4": "2LYwqf6R95F4uEgqgSri2dZ2HLtBFEhLcNtAy12xqWc2kwmudTKfzMFWxDebwCYL9pUDVxsoNNLjoGvYSPgt96Jj",
  "key5": "5bNjU121brU5Xa4yW9KU7B8HZ6HJXCURXE5EmQRycvzoq7WTzugXW62KYhG26aoxbPsnDnKsTBgomevLND1ed2Le",
  "key6": "u4zvbzRGGR2aa6rZAhBNCxzXUKYS1Ux223bJKK3xMkMmciYQ9a4PYT17dk9sPaKNCaMxW1gBaHF42prJDLHRDhK",
  "key7": "4hv2AWbRnwEZpnGzcBimc2osMraam6dECBXvhECbws83By27YHZox78ZHhrDpcgV98Wm2LYstmtJzvvU3pkA9xVJ",
  "key8": "3x5KVztqRQm4F9Uch7V2q8LK8m5ummJCgV71QH6uZYnCdeu1Jckhtd2nH5pNpfYVHF1tz7RSeRgbjD5UcZ89BdZL",
  "key9": "2nkyTgvXrQyscxn5Ko1h6KUPq9ZfadumJAGzyViCFST3z71exfbFd7YtbG9vW9aNVbJrxABmefWM44WFYpqpFCWU",
  "key10": "5oC4grbujsDXPxNTaZrGonYMKvfSMxmmynsAEWupPkH5TvajzRptBTUAacBP5MuvRJPrunZBrVh6EjRZxbPLQWvz",
  "key11": "5zSidaNhiVUdbByaqU8Tg2umAyaoJ5kVYoGt5MRvdDLvEMCmDksjq1KZKCT4HkNdSqwaZJPmeTTjdKa869mQZWuE",
  "key12": "3gfHzrawYxBwiUKQ8kJQpcgz5L94UdTqs58dHcdQ18NskeiKDvEMxH8Bbfjhe9HyXsPNF6jnArtqHYB8eF7zXXaq",
  "key13": "NBLwMemYgyrkVCiqJnFFV74df3q9zryKszWLv9uAiMsWKaKN9BNj38FE1gRXzHL5ZounyZtxxydiv7qqRLPzuNM",
  "key14": "5iVd3xuFVGA7SuxVFz6xiCYnktvN8tnLQhU4bF8yXKoyxaBMjNi3rzfKPB1kn9M9C8ozRadtcXv5qYgaKsGp3HYL",
  "key15": "2R9zKHDD4xLqichTzD4EhigpwForZBTktd8H4sTAAkiifwtTwroudiMy24wH3EhB5oBMLBHaGJ8Uvf8tPFqQT93Y",
  "key16": "bqays8dxct7TRFiosgQMihBwZ85XFwxy3znHN5K4fTAztxMJP6C7dzJ57pSsEwuaGHy2pvaXFmsjofjaF9qw7TG",
  "key17": "3A8LkeTgZasSZf4jBXrefakpFre6REeLFLdu6BzR8hywP6PB3412jNd8Xt7V8b28LHMf6AMVbR7y92FFjMg3aeKj",
  "key18": "5UM8VjE5u4WX6ginha2zr8s3qY6vLKdYoE4L4iEXxyXyoTGjpcPVLumZotqRrdpd49nxYMDMqwbExKvT2wMuAZx5",
  "key19": "73ANUYbtaYaumMUm2DwNxC6oaPqJAetqmKRi28wtZjNezfDGScwxTko51LDMD7GoPFTxMd85g9d2Y5GJYv9L3CK",
  "key20": "271S5GHekgLVbDUqJLw42MRU5cNf32mTASt9e52MSTn9m6fVNJMiQiVKxcr5iD8saX23cL5v9zNzLsBaZBFWRYpU",
  "key21": "3HNkeuu4FStHi9X6XsQwH87v2MmVG496jz5gwDog48P1CCbpCjeeEMBfwuLbWXjNt1x37kejia237DytXKyzvSGZ",
  "key22": "5mTPeZceXLS1op9cJHKaLh7g3KMd8XBEpR3nFnXtNLyVX6rQPC6CZ59n7t75XyXXi4ugq18vGcs2isHKfCXKx34G",
  "key23": "4PeQEB26fSeqSGn9XRfg9DsXSq5HEXTYGGfLGXXXJK3erZvGQikj8t2xcpvvc5dyfFwhqFW9Pmovh95gTPvGYQb6",
  "key24": "4xuQJfR2zw1HxKaeaBj6yAZgoCFuF4t7JsbvrXFSPmmTFTFa5F9gmttu8R3zBPsiAnae66S2wiJWDZZ12AWrw9zt",
  "key25": "5htUhhXea92EJb2PMwHcg35LGd77K9KoTYnVvi34Dnwe81TC7pSw3QupvjVqJ5zsotnpPw1ASZG73qFea8EkfvEh",
  "key26": "SoAKqf2wBUkD8Lj6QVnVNwcywv7DKKWhcAsXZXPAQsbvA9ALevFmQS1TfaBbs8qGTiRQUPJ27aqryfaqfReaSQE",
  "key27": "4KEeS4xcFj6Fi9Ln6eKziZi3N8Zuu4Da8YQyJJo4Bi9X6di3aaWw8UREvgoXuYTPhkRqgZ2orFbfV5jUdxfQvSeQ",
  "key28": "48FQ3hEzwfhP7ypaZkKTs9kzKjmPkjcenbVkdAzNJ5MmM5Ni4ZgdpPGLu86KPDWtcbsaxGrHX9WNDKpktFs2snML",
  "key29": "2xZwDpifVViuLKXajRC93eJyWhWLX47AW4L12dKGkr1fTQ43q7r672Z7TV4i9CBVijuz2fBZBsC6upqr1KixoFbx",
  "key30": "4DvfAhPc7REEZqyKhe3xLhNZegmhAG1vNMm1FZCRaAQZU3KsVC5NwhUqKnedH96zAG7bavvKFmh2a4HqdaLWTTmz"
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
