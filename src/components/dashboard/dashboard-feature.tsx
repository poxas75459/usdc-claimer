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
    "3waJof6foiqrzZBMBVYdqhhv5piQGzE9QtkP2SUVPqjDdRTqt7oz83QPN9oM1LRiJDUhHxMhB9QgY4YzXmZx5UgX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q7uu8m8YQZiLAFfSkvYj5p5CjmvGYPmot9Mpg1U8dQEu8CWue8udDCPavCehPGtQ6oD5yyeZX3SuQXJLtWYLfhV",
  "key1": "3vvF8LuNeHEjE3sJywBc1Zc7Xw6yi42A7ZiLE7FDtHr9izb83gsTSR5Bsd6ggA3uC2CQa2JuzqijWwTCNzLhUBx8",
  "key2": "tboz4bqZKCNgahayJtB6Lx3SJ4Sg3tB4QdwWe5KwaP4HLXb13hobGz2Xh8gnhYEz3xvo9EU5psZbmn8hbXkMvLM",
  "key3": "44eVUedH7Lh1eMVWixUvDhjU63oK2JPFnMzyiY3nTPuobGQktDiFckBmHnaX2iHmZg7meNnS8LkSJmj77GXA9MCe",
  "key4": "DNXwmYrLDVNGMfEW1AXiXMwaWFu7zmKanENwjiNk4JbgNUum8fsYwgKPm3HtLW47pGxND4y9mcyoW23NWhmpBQu",
  "key5": "352KqvdcAMkdCfAtmC7G2uR7bg4yGFuBXdmz4jEPbW7kb3CaHuAhrL3FzHUDwptsAHraVjLNtu5Kaf3ALJSEQ46W",
  "key6": "2qZaS4ZS9j9C6cWDcJ7F3kahirVD8YWsF7UTsuEuvCiiUCLPKHgpVjuGDXKRDYqpGCwWbQWCGeHvvkLTuAX9MEn6",
  "key7": "52UF8tLnosky4fx9L8VRCL786j1AHbYLY8nvNwGTk5bQVRXDpFWQuV8ukKvAGYbbcFZCtHUXPCzBJG8c4X1UAhvF",
  "key8": "X5UqoX4wBJMvTTw5iGYukmuKyLuHGkpSwrsQSFTvqpFaFydKJMRDH2C2W9HMaq6HbzKDiUF64FfiTrbjaAT4D8r",
  "key9": "zFfWwZyrGtR7Y8XdhGLSL8F2zYEMpEHodPcyxJCDchyoGujgzPXYgmaQb2vCiA6RWDCkCLf3798Vfa8UVxNusY2",
  "key10": "3oHaCcw5rwgRKEmounYSKLD3LzsFhjYJyGuhJb3SzzXApVVaAEfk6AnJHfNpz18BgKL6aBjbwSFcXEkUe1dynE3b",
  "key11": "4YmkAZFVRefJP5VufTvosvhWd8M6m7xn2caxyqSrtjLwTMMCcMNJYe3J8Rj4wnP81bwFYpz1dsumkqZ56uSkq5XE",
  "key12": "3xvHivJkRRBZcDo9AMyqaso9gvbDaRRGw4XsBwyRxZ7LMvHBWRoarYvjwGmmNVUjAgcVCRWifLB6fZv89G4SYvNT",
  "key13": "3uQhnNtiuuvdArax3F3CsN85DMPe2KtztK6mZrSFkmYPmeVNw93Q2Ecg4ha4cdwVRULWMFmjyYtR5FLGGTW4AkbV",
  "key14": "UNqJrxWjnJXLYpCtsRHtJa1k1rDJwtNaP7feEwmAz5J13c8mExgaxHFLiaDqb2cX8py8y3knrys32ZZJpcQpXkj",
  "key15": "3XqLoMGDd95KZedVbc3Xd1FALa3Lp1A3PRRmBKBvuPxqJkYHpDJr8o3n69dZnqg3PwCBw6UvQaRBJMdMFZwutL4h",
  "key16": "2sLgHcarQx72QAdvRU1nLEh5cNqX8RJcbrhgv8fS3XmAjYm6N76jAmeZioN5AtsARcT3vogS5Y2GG18c9o5YkYUF",
  "key17": "4RpwmiX7QDHgyfmSjCTFmdkDrgwy9auk7EX1R12GyijaYfXqwXNL6nUFpywVxfh9WP7LPeszit3XimkvckSkfAwo",
  "key18": "3QW1zsESvy58nHErA5HKF4hmKJTwhjZusBdmu9tteBAyT7sV3dREo4bV9wupukVq5JSrzzA4FgtWtwLwgyy6ukeU",
  "key19": "3rTUWQWe47rgfYUqt41DZZ5MDrRnemsQaGNdS5iNmzGZ8pVuJFq9t6H1jsLC4MTbYHLKFkv1McqHYR9LAivWTHSN",
  "key20": "3VZm2BHyh5hV3uPHsxZJtgJyxdh9muFbXL8T2hFzGDZQuUv7nRaVPLdzPKkr8joUjWZmhySHCJbokscW7qdEDwJ6",
  "key21": "RvvFVdMtg8AWyogQX6ELVkKqbhN4JeSdpEdRr7x6F7ffkMoWcHd5gnXM6tkwVHdAGQ76EDdbZKR1yJiXDx2km4J",
  "key22": "ENss79Lujrxzz5bVfrFNevh2v6mEtdew9xFvpdunmrR66ZbLC6GFWF5Qe4kMM8krgGNwfd5aRmu35rQKoaeZVyz",
  "key23": "4ms5YvqSV6phupbwj3fNXmAorJ2hmNZk2hkuzKmqxqw9ETUfgTsNMFZmBM6RTRagn1bnMBCpMZL4ZAVGy11mxKN8",
  "key24": "3gvD4gigMRCNM6ut85wE9ksJuQyM5amibeeUqGXZzGLNkSZ5rPWjMJreMwG5NUtpt2Q3CAJdi2AQMCe7yjgcJQoH",
  "key25": "4S4jNsVzHSe4fyU7W2RVohqBuwgi8aRjR9DpaX7inis9eq3WUhwPUYY24XrCvkg9ufw9MnEgQ9Gxatn92zEzonno",
  "key26": "p1fQ1UeW4YGHDA5UNHZFYrXCNrebihUn51frQ6ZT8Xw9ZioFaLf4fyDMwndK6V2FNv1ZRqLxMN2SKQ4EnZQ3diM",
  "key27": "2mzr2gRKFZtZoQqkxSUk7Q9jeczUVudL6AnfMt8KiN6J2ykpmA41BRhKHFMyNRVwsFTCfdV57cvRbsWySmUqJajF",
  "key28": "4d1sMdnVg1mm7N1p3b5JpbDDrsUPgMD9DnhRaQJoRNtP7ffNG1ad2sdnYuAMv5ULffx1zajguCu2rgUws841MLkv",
  "key29": "dBpzt8VXdbwSoqVeuape9RStMGXUjg8Ho6LscrATp65NRXMCX83j5ucKhjYdboZxhx8d4eikwBnMrzcPx38MR5C",
  "key30": "5jBqJyYJMXMjtCmhGsQz5mifCD4aYjkqM5KYJJB36nFzUTw2ddg1xbAW5Cs5vams4VBsoxKhUAGUoiHJzYTi9Nga",
  "key31": "4PiuYM6WzKiJBJR7VpRgEYrgRdSbf5o85tHYgKSwnAWcHEiuBRBkKRRh8tAgMA8Jn5N5Svr1D1Czp8134ZV33niF",
  "key32": "JvdgkhwkDgdk3UMtjCAoVGNXZiu7qCegfqx7iJgaPoCGPRyjkZAEetz7nr2yVzkM1owygEGsUq6X7NLovMvJZjk",
  "key33": "2Fogdy39kgr9ohFBmSu1tFQgNjv5hjVhY6FZSiDRmih3Y7JxDicCW213r9hdKeTpdAByfJ1W7fFLQSBi2DJQU1Yy",
  "key34": "5gUEj8sFPCcEfit1HoCpzw6eAzPxR2Z4r4McQgqE5KamqM3WGm9VwRbdoH4ckhD57Uadb1WTWbzzuBYSTuccWP2u",
  "key35": "2HsswXUT11Ner9fMM1RD4ybGfK3SYPV1CZ4aZeKYjsMkNxVBL75Zf449Lmvu966ioUqtscUSxsBjbqbobwj94Z7H",
  "key36": "4uvR4ibbPjXb7bv1AtVugktTbwfsRWqFQut8rb7wfKgpZ2MonsBuGEeAcaZmS2k57S1RAX2L6QnQXZQtKrUbsN3j",
  "key37": "ps9eLFBmGpDAjYLw3WXMfJse68bwCwc7bwZXa1WVapmgb2oWeu1GnH9yKVKjY2TjKG4a4AWD1RQR8za9fxzQd8x"
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
