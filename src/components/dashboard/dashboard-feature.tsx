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
    "62xYQapfcPD4emctkC9VLdP11cSkBjWt5VJaCJiUckCCBhxCyFgr9HNnvG7EN5mVp9KSNDNEu23e5AwkkLvFyeiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25MBwAG9aSiaAcoPTnUocyypjbFaWHUgRo7qxBMvqCKRVQK2u9tm4jArsMqBqe74pE61G1p7xYhGTcnJL8k7YidM",
  "key1": "3LqN5GVwQ1RvSoqoEKr6NpW2R3uGWSYYjGiCpkQgptYRahYeSgKMbYvvjtdG2B76a2deftHxNT9RhRrE6vD1Un11",
  "key2": "5EiQ78b2CHwStMmzM9VVZ1BTYdfBJ15PKWN8szCTrV8SdgrpymTMwQQ6hdKZWSab6qe3zZt6HbpZnfvAFaUnrAVL",
  "key3": "5dKxPX55SwEH7U9XsahEPh16EMTtznqntC4vmTqLfjRbYmi17MFm1Q16EWWawBvuaM2bSKn9MzerqtydgviLpkhw",
  "key4": "4ULbKEkVP2QbKTnvqk5qomL7jSmaEMWD9yKnMHK6xMJLdi9s7EhZjGjo7cFqU2Bt9rL6X5JRKjubRqvMz4qmPMjG",
  "key5": "2ZASUcCRzVjxV2PCf22tQLa2Xg6A3WmhdZaXj1HfQsXzYTR59YFpttx1MjfcMbdBiS5VNJeBuBAdkBkzDsG3J4XC",
  "key6": "5G4Bs54ap62JuN5SrnoQM3vbFsW3GE87k98buvzNMyaHhyba7WRSmb9ux1CRKEKNnxDHyhTWdzEA4PV6Cj2QPN9q",
  "key7": "xQhwYb3YXQvvbk2eZpSQNtkzyam2PgC8dooeoLEdLdRZQKAxxVEHRyMh3MGY5CwYVKXD8Bng7UVE7KkqkPGiYB4",
  "key8": "4mh63KCmGZJWrmsTteTEywNmgBTKYXd7TgGsdkNGar54Znzdpay1uiu8Tu4K6VBt68p61xFXkZYZDujYCs8UxvbR",
  "key9": "5qW5JCkwUadr3bi54CpyzrGG7FiMNRYKUWYBw97jspXK79zJ4zRRUK8V5xXDRdMEdgjRpWNC8xZpki4oC1hFtmoQ",
  "key10": "2FZDspvJRB4GELvSaiZ1nigjpfAaaAm1MrdL2tASLN4t7QmsjniMF5E5vpedz4hqCwEXGoJmxVc2miNvhjZVHXBr",
  "key11": "5KoZC4DTD4pgGcA4kNf9Jhn4tJBxE9QmZ93dN4Xsn5sAatVxn5qZSpUh9AeffLwpsycDQpYTdzfzWUGxsJpiiQoq",
  "key12": "4yDwgzbgDJKVTmTsQqxb75dsRhVHAnEQxrn4N7o8XN67EXgKyAKWFAiSjKZqzzfNdTKz8qxpJbcySAJPzAnyCA99",
  "key13": "5rrXc8S5ZMktqxEJMAPP598m3PigN2wQnZ7rQZJ9mSLq3oaYDcP6XwsxLgaJw6ChkPLC1jf4KVwxp8sgEuTw8m7y",
  "key14": "3D2NVSefXgegXuV8kn3MxZCpBzTsDFDcU3eNQS6M3UNvEj39DjMKQJgAVsYWazdCRhP4ZMEKDP2v8ATm9SomnE4s",
  "key15": "32jwjFN3hB7MQHiQ7hUgd7V2AZNZcCrMtMuKtTD6qDWEz563QwqvnkaRv2RCnhUaJirB6VLXxJeQxLgv8jmrdQS6",
  "key16": "577E4pZFmnJmj7ejNjpJFV9ad6cswzff3cqatSjsC7pJG5sBYxquiYjtj4orqA9t75LX6oanp9q7GzHuBwxbRLyy",
  "key17": "2eLrjnexEfcnmNkNL9u9nkznPqZXN4g8yDNkrk6L6xPsH1vQMdbWBg1X5CoxRqnsW76RJKfwUjqXpG1BnkYunLV3",
  "key18": "4BVHmSVjeQqw1YC3Yixi1GoqpHqNvDKpaaHJaBFzrBDnBaSDFGxHmHduuvern6BasrNsFNcuNeeacdk6Rd9qyoCH",
  "key19": "LFZ4L1VVjJ7YemfCku3piZZuoGLpzYBLzeThG4QLs1sUfu4jMBszzy9aanYiPLGffjjJuoW6cSVfBYLUYf8nhvw",
  "key20": "2uCffa7t64uYaSS48T3UUyDvo5AgpK1gdviD5Vh9pRnBRN2Loi4MRsWjbznEMrkvmv22r2nbwQDSjLo7jQX8GMdP",
  "key21": "4gUccN7wiKLXTTuZzyn5UxWQFKzd4NSuwKzYxQ2WR1Srk9gkDSGo7NXFuJc9KBwYeBp7utHBJKuqEfNNy7iB28rR",
  "key22": "2X4jZsM2AkhJwA5xNmU35W1gGujBXtg25dsJScLxc6BuDsErYtHLHr1o2KzG3WsPTdhWfktcgQQYnbkWRYRQ8KhT",
  "key23": "3rxvvyzefgi521hB9Hz1wXkwBCW3gwXU4drCUwoVpAj8CnUASZUAFS7z2dCBk3WUJ6shSFBVTgcz5JHPxwdkehWL",
  "key24": "3kFdV7pjV86fphTWKBL8NA2CFGieyH4vehRJqm6Mh9ijmP9yACYQb7z7DnSh2mKb4vWawvv62naz9DHFWV4Sz4jj",
  "key25": "4Sj4g9vcZWkfrC8gz634FcQpZfAH67e5kSUv2c3buSi3ZZix39ZjJXR3KBQNLQkAJ8uRhoP6GSHdZ4pTVZv6zLAT",
  "key26": "4sdZaTf7AkUuSKXMU993xvkXUTohY4p6ooWTwp5iNyxywdinft4AqsLsmEQpVkJSkye4x8BwkJdkxfEsQ3hENrgD",
  "key27": "5dGLWUUnuJh9EArPFYQfCtDg4Q3YrHrYvce48rqWZDf353jfcVWmQ7FophsNrbTVRxPawWAvayA6AN74JXkCWtpU",
  "key28": "5yXv3DEfHBjRvThyHnhxHaDNv3aV1czjjybiys8u8TK3kvrW9BBYgapcR8cRHCzvNTSdQQDtLb56Lrd7VGSy1s3S",
  "key29": "5WmWRkXXEAycfG7S9pdckWW1ELGsxtJ9gLQXjXu4RzBFzXL2sjvgA2wSSpJycg2UWUWzk2urxCBPQNza6L8hmYAJ",
  "key30": "5jANo4kZesWqmmcBPmyc6Ft3S8qRtcWt2XRKWFBRwJz5AZY6HuVydXqVTpetrqtPdSiL4GFnXTyhVgHzezw2hMaC",
  "key31": "xRUdhdfsjHfSepgeg7MpbtJFjJwQm4CwqHJVsSsXb48zr3PKatpFKmRiPiEeD3bm26eFGLA3AW1MGVC5Br74zFj",
  "key32": "5mSK5kdABUDgdq6quCBJoDgHFtgsCpoh7s9YvCqjsEcmUL8Z9kdbykPf6juoBPpzVXHgYMXPC9qEc4HMi3d1ht3Q",
  "key33": "67f3rYhgrCmTz4XKjntvY9CkcyFo1WeSPh5NRhjT6Sx5cFsRPJ8kpUCP2iEvC1SgewUWzJMFnjqC5DZSTvmHdtYH",
  "key34": "vY87fknkFpePqN4YMXoKo7RWkC8wzSPUbYH36f7hMkR9RM9FLGufDEt7zEG9bvCXyfFu6Q856gcwrNiEKwMXUzE",
  "key35": "5Dh4jqkw6Ezc7U7sYdAYmaY2LKgeiJHqFemc5mCruFdaRVdnTq5W6oeCKEfHUNuvK278dE8fqmqnzEcUVsqy9Riy",
  "key36": "59A6xgcrxD3kT9HHvaXABpTFy1A5d75XMA94aHqVYiG3Nb1oeLrEJPXs52zeAv3Gsaxyujn4EcHKQmHzTmPsyuWv",
  "key37": "5ua5sesqWEM3Kaw2uSsEm8QjTbfwdE4FXyoD4J1ANVzjkBdcvWquCtCdWi1oo7dffgefAqjWnQXsTZvDLE3445rQ",
  "key38": "37e6iC9ttQUwimbKk91e8puzGpNQSY1Y689CrnZnYJidt23jPP8S8iJ6A8VzU9gbZc5vKBxQqynfHEnWeVTDxosz",
  "key39": "4XMvXLiZwXr4hzsDFZHDxpvHUH7DbssLyocRCrKcqq8wV9nWQushFG1GMYjpceTeWvEMevutVF1mNy9VZ2erLPvS",
  "key40": "2iqfVuAcs7G6iWB4qERBHJwYzJBzSYxjv3tYt6uPkaqAm8nWNCk76AYWEj6HfYbB46UcMQQmWSdvkJ3Bah8Ugnqi",
  "key41": "4PfTV5oHoUMrLrzZFwCbue8SQ9ZtQ41LgFxXmq8GhZxefEmhqqwwaFnzf5FiE9Fys2Kc5em1LHZ8YLdqwWp98fJj",
  "key42": "2p9mhEhGVVRrohgRvLREMh8NgJCh8Hn74w2UR2JnSQq1fXX2v32pAsvAwvY2xVyi1Jeobget783MHN6aboYVdexU",
  "key43": "4tEoXVNSk7VtjhYACnEn4KhwaRKutb3CbWzx3xMKgLNXfsD9gbFNETWteX2UmPvAKWFy8Qt5LuT2i1b11xnhJtf4",
  "key44": "3hkyhXgTYs4JueTFpJfWZV8Ly1pgmYByUe7PiUicM8TAG3ToNRiFkjhpnpKWYctQ1FatRtdY1YabYw4ekxNN427o",
  "key45": "5QPQPNuXHwRdkFYKkiDTEsXDDc3oT7KLuBjpaXZ2cQKYFqANWnLeLKaadpDLY9Ri3NLJZd9Bq3r9ZYQrac8iJDvz",
  "key46": "LPZFF5fCnZRYLucd2oN6HZhnvyCxdoM9juVcLBqZ9ith78yuCpa4YCjWD7wQrzYkJBoU8faQaQoFvyvGZAfQkgu",
  "key47": "61B2uvBLdCpFgnoprUDHkPDnqCEmR1frq3vEDvzEg59WYfWsaqZqZ4SyE4xB4jbFz7bKMdYcJMPJJjr1ByyKepna",
  "key48": "2ErzJzd2t5auNJu2JukcNiD5dQKji9qYQqCRKErw7WKMrrDwYZNrMnFjUUHk1C5JmsJB9MNqU66Yc3THHD2uxwMU"
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
