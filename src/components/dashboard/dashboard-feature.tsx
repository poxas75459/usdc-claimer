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
    "4Maa2G482ARvcvjxMpVmzhZFnmBNU7qAgq6Poqv7Y89okJuhLLL9MW2CKgVL6s4MJanpsG5qGeSFkHzHnKumCXea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jDnwwfLjCdwCFgRZViEcDjrP3sdKCR9bWiu1K8FrzW4nTGQyUVHEroJNxMnmKjFLFeKQwHiNN1FJpchBQcEDLY",
  "key1": "4TA7bZ24CTf7ix9nR7zSEdehmpUQZUzFM24AwwjcE8smqPoo9LzGdfYPKZ3ZiFZ5ZfBuvs1rwimPpMrT1Frw7M6W",
  "key2": "3dniPajpdR98JmeDCz14FtggyoebKymk15ZjG6L24F6Dh1QFVKi7fvCjFd1Qm5MFTDLS6SvCBWznBfX889Jx3tC6",
  "key3": "4TRYryoWP2yKXsmEeyBrUqjJ1f3Yor9UTjearTvg14q5LQMwQDHzbSnqeaYwnD7howpLT8WowdyZw7mPp1xEHrVk",
  "key4": "4Wq18CCXDxXH4TKbaupwGnHALq9hYRA3wfkszi9jf5raEoLYy21SCdkmyA6Y7knKoonK1h4qpRxuFXSj2ydF9Ffe",
  "key5": "NNXn63ttPfDJ3PCAEmb9bfjq9dU7bssmLogNCxpx1P3qguFxSKR319CduoKC4WPbvLuPwDv3iTCDANCWssDQ9Lx",
  "key6": "3nrRGSWG3A3F7NjbRD2DVKvb2Mg48wbY1F78Adh5aoAQvFwWpwYe1BRXur1QMXTqQuC8CY9d1S5fUB6MBbS83QJK",
  "key7": "5ypDKDh8JHBDY9HuCMajVEs9hKTamJHXu1sU5UkNKhfdBbvrwoFhH1rjL5e4bYRHaahs8cAD4y8eV2FPTKHYg3c9",
  "key8": "2USEvJ2nFW8tDmsE2oR1gTTcRztkSV5gq1gabYQ7ifVvKYR7jzyyrHSwaciwxZG5ATXrSduuSf5m6jqTU2JLcnDx",
  "key9": "3DAmBVN3RZz5YhgNuqVXWj8kF1mvNrBiixiQbmTvUCZCWxXe3CgE7Rex2ZfVtMAte6LiQgeYSac3nP7tDmHRTnMb",
  "key10": "2XsMQThym7ZbfnqCgQvFWoSxqL8N7fsthpsRjjMogNxvUAnEmmCo6H6nM9ztccGum9YTjKVa8PB1fEQLbym15Xg9",
  "key11": "35qzvgV3B83hF8uqWXPnq1MLdxNwYQx8fhAcfiTvCgHs1Nbz2JnZrrLKfmhcgLabMSgwPSH8C6JNRfUfYMREsr7W",
  "key12": "VqgnCD1UQUatuauqPH8J5YJr5B9cxpxd8ktkJbrKiD6u37uamPfrPJ8u2TD2La2qY9eTFYgkHynvLHVrdNKdYVE",
  "key13": "3UMDiSuvHqaRcmDu1m7opzqSz2P7V8RQ28R18XzQi1jtQxmKmnM7EYykBpyGkqMhYXbFvKPfdZo9TjxunY1vakFQ",
  "key14": "MABu1PzEhJFGkMrpXT8cY5rZGsZ3cdZSeY4yFKbudPKNAS78P1aGj9jg65zCZ5T1uDHvgsd7ViEvzgg65NyoNE8",
  "key15": "S31iviM68dr5jz5zHrMYDsDyPJNjsxYvNuKw4YY3pMifDQoqMtGdgcRAar2LvNkK6kKzrQ7qDxBGyynbWGoRTVX",
  "key16": "4Ucgm8jhcogvHWVupTNG4fmtX6JnPfrSkyvGRFiUuRjiGTFeAWzktzgJGs3jtGnGVQGvZkXAT7kXZZmmksdzmXox",
  "key17": "3wj2RXSsx7gZmULB4ETKNuTAJhvgXmUqh7rXW8qmCFNVUXpANsM6z8hy864RL57P1JZCM3ptELPxHfSMNnGNCc33",
  "key18": "5YjY6diDaTeNJCJBmPjdWCK7EVTeTYY9GTGTW7ACkbLGjQbURsSvnVE7BcYUwxprT1KUbmdqREzLNRcPoS7jJq4D",
  "key19": "3HaPFD6onBBv8iU7BGKMSdX6nLjNUQcygTJL6pWnUmvH456mGEojTANMkHb8zd8DXaARbkapP1mJPCjGgABjm4RC",
  "key20": "48yBCq591nWrzSSY1wK5XFXZnNtCJkhyVGHJerWgGzRdNTf9DVfF6qkpGYfCiHxMEsNSCteEc9fD6T4kvKCJaEQt",
  "key21": "5Pc6oa8qR3z9aBSTVjzNf176ZTGXkv6YjhSr1JWVM2crRtg2ySNehw5XocNKynWgxREuZAkDL6sRjPBddgpZHGjQ",
  "key22": "91fCNiyeLFQAhzvZuxT1wg94SwSoyQMiFU6vKprPp3URBEMhxspkLGqzMQZjyTMMU2kpid9Gp4WQzuqBW7UdNWV",
  "key23": "4h9PTbNZ9rtwqtAhC3NqPH6MBLFboVzrxH1eShuLsfq9YgVSm5gcf38zgg7Cs4fXP7nHMfNxzGb222YNevFj44xr",
  "key24": "4rX6bneGKLbBXgHXt2RSUWBChCWMJ5ANZMwojaDjkTLuLnEeepkR6HxQXeFpwRLneWr9scZy2w23CSknavGDjrWs",
  "key25": "2ntfeatN7nipEV46Kc422SpfKaZtzPZhsXMxHD5DsFRaxZdgJBntikLVKxNQsgVmYANWFKAZkw2B6FWtXUnv3cDx",
  "key26": "4gZA2VSsctNSDRib9gq9RdHnDBcg66dPwu2e6YNhJwsQV6LyGKSM5NZAEm6RmbPbmRh1FAbmqZBBNZbSNPsaPvf4",
  "key27": "64qK6gT4mLFtsyrxCxenwLRwAbTxLz8LCj1ascM9opRPKeXKonej1UnjVJeuEQZQHJN9tnEsvwujaibyiGmx3aNB",
  "key28": "5E8Nad6PT9rcdkteYbvf6voySUUzB4XLnon63eGKgX49xMgBEJB52ABeTqLuGz3RmVcjbXVXPhgrKvikBQ4RJuZn",
  "key29": "4skDJiiwzi1SdXAbFKpRPekF8wfshWUaYR8GpGMhjrrSj5qzHaLyW2qwJoKdiwGfj7asJtfWpFQNhC2tg1k1g6s9",
  "key30": "5cwTTR7NJvX1wfZ4bJEpQWwi3sB9cZgzXogHyh4kXfdYWXF3wb6AKFS54BRaHf3Rk7NApdBw9jC8Bxgk2ffRZpmw",
  "key31": "5C5C1urASp9KTQabjtt2L6skqGV61NK6w1p1F2p5k8mNncdMosoHEgBJNpMnS1dpgL8jh2LKq3VE4cYGu4QaeAyF",
  "key32": "65W5LVHe8Brrhyu1JFgrtE6MTnQ8XhecabNLsswEF2PswgrAYbScCEoeqsNzPh1hAvxFPpfF5PeK1rneKhkJDVY4"
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
