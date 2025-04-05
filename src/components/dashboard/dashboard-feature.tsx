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
    "4cCwaqvKtG5tHuGMpZ37qrDoLouqedT1zRL8ZxURDHd57CrNxfETED1Xk6WZnh8VQaQwGP76xGwpYDGQ6PNhxG8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42wsuQb834hLfyrh88cQzRxPYnui7mE2d12KSeQRRLWGzrpDcj15jKHRHvoYmYyBadqhikhWnmyCV3Dmx5dvu7Db",
  "key1": "3RLMom8Qyj7imd1NmCqdTSZxNeG5S1WcwHRweqpLc6EPeme6ooU2EvnqgXZqTsejbZZac9HRYyDJL8PbW5HadD7k",
  "key2": "2qxa8pf3FPsKAQ5ofpvA9WW52DjaoWoeswxppnm6dKiNb5iTxK1DTDYD2EUyxvcqjE9YHb8dVJaDWxvyC4bx7GY7",
  "key3": "5PcSV6tCvqFXdoL832CFUaBoP18MvTQD1qa55wMnzcC5TN48C5HaJdjdS6bWrA7bYGkX8AL8vNotbu9NnkqSAaBk",
  "key4": "29ghBaMquMCE3iyFMeWyT3kNS9vxYVGEi9en1bwihYFtGWtU2Uim33hzFvSmyjYGv96KMeNfsfEvJ8WkvjboVTWK",
  "key5": "4L2CmU8MuYf2QYvKQHUAUPjCtF2SKGmo5A2FXxtTbe7EHf3WNVqR4SfUkb2JK3v5sViCjWBs7iURWp4HgyrhcXDF",
  "key6": "4pnmqSu4A43jdxejHbJ2tfc9XBe7eQsGcpBAYyBCRr4HboUoAMJ6FgmVtJbTZjVX78Ebt1VdLogNQfJEczB448Ed",
  "key7": "ZqZvuRwAuxb8gVYwjKACYR8fJZMH1TnsSVpDqrWHEsbvtuYuUKqn2qFsVyKfKteAakYixqB4aBbHDd8s9boFavS",
  "key8": "2yVGZT6t9j9NH1KGEEtZBRYdF8KtD48LmjD1LEfduMM8zf5S3ySwuFuFmPbwmR43EgCtGiZEMmUtB5Kp5sPVQD4d",
  "key9": "8thSpcQna6WK6E3nZfAodKZryg7eNRttSM5kvoTRZk8TW1vZ64x6Ay2gpM5YvMfcQ8cSKRBZd6LpkEJgK8UUzku",
  "key10": "66bh69qVRJ1UFAfVNbBbPvRJpMgoufLB9kEnYpPFuFJ6DAB1n5L7RMoJRAJkxzEhi32ArLvZmprGA63ahzX2DWz4",
  "key11": "5uihMamdmfHrBwEiYW5teHECSU4QRttRxqqMWydNnD3nwEpR2sz8n3bcSbkebV8H18twMLWYo4eCNZibLJTexYYr",
  "key12": "5Gj5LYqSWcPpS4daLjDu4TqZX1jp657rZUUaXZ5GFVsq11zNYBqdYjkq67dkacBjCDogxz2i3SCytQDCNtAh9JJR",
  "key13": "36GBeT84bRroAan7XqeUqKLWBDDwAf84QH2xAyGbZNpmDicGwi7zGVcdgjTCiBA49h7KHb2sfcPVnEQVDFYdocu5",
  "key14": "3uztwg2WbZpr5BtLxuHtVQerJQfvPry7or1g8F1rsaKpXNiBzycTLMXEWM5Kc5oZ9z5pLyWtNPXrdRerHXisZdNz",
  "key15": "a3gjTq35SZka3U7zoSidnUL3GomZCbz1yfap3zvbsCwKN8Smu6ALAqqNbsrfDp8L29ag5q3QW2cR7YfHWBdRtBh",
  "key16": "2yBer1NYed1psdPkT4nAM9uPJsaTdUv6QB7YwFHMNaVxDmGiSKBkH2rSWxJDPzMEYUQdjJyJLSvb5QewvfYNYF1M",
  "key17": "3UHkznVgXKwG7R1C3wDHvVuf1kXTwVyWWHw2bM6tSYq78DvPQgawQMz7BhCZ4Jy2fFoUhcwbja2s1LHHuhWSgAoD",
  "key18": "2Fm2k9GJZg2ZLGxjUjMkP1QUrru4UEw9YprNyYqWqXLrYLqxJ1N9VVhuFojsGxK6NFz75woaSoYoH6KPPmxXoSf4",
  "key19": "4RtejaFVUK2c1TVPBbhwPa4DJre569FkA8xmZ9AdCgK1nsAPLU6HVQw56vwBsVykJoMrExTBfuUfHVMAa5XJcdKg",
  "key20": "4FezZEHAx8dJQSubYdMm8TmgkdQr5BHgS38SqXW1MhgKhfPSGn9nAQUM6EyzFGkbsxruQj5r47ZP9CxTeEf9VYjz",
  "key21": "31aQn5tHxoxzJnFToCQJkLkoLSAhRLhV7j6odHi8NH4NF4GsNkjz4KcENPhojChg2xAN2YzTU4KRjkDjXznoscrj",
  "key22": "2hPbcX6JBtTw8h8EJYDzuRKEaRFBVUAhDa3frbk2NGMM3Do3NbdLFW8T3vbhQoaCb1BMRoSvxi5MXFGmqJk28hVe",
  "key23": "2UdJFDftfycA3KoT3u77jWpnqq55LdCfaSiUr4yXHK9L7fwG7oQaVUyJ23xpd8S5RVX9kfR5JJBXD3JvSSH7pyTM",
  "key24": "41t2gcAFpnrhJ1cQuVbdRcgmuRkeYoTtnkdbfW61uANznM3J6aMTb91skiGWCrpydVBgdz2hdmPdvsUbDNNTykkX",
  "key25": "2iu5qX18dAzYBepgwXXtne522SjwDpvZksMJFNxM4Nav6cTKcfTLLuwaL86g4Mz6mGWQCt1en5GiyAd4fHNYqgfQ",
  "key26": "3kj393LF5angA4ptfrpY8UpixoniPhQBxH3vWf15jbsdLmP7bMB7Ua8oM1PijrQA5HEhvGAysZdmGXTgt3hyPGDC",
  "key27": "L1xEEjErzQTSRw6sL8CHNYnY2j57eDbpDfAypdzoaYZkVT5Mz14LNDjf8SJZXhZoAR4QeCcdAPJtRmGGgjeN1Nj",
  "key28": "62oK31fMmt39vcQYoTaWfnRkEnKq23KqDAzHCLzgLREExa16WrBv3HLN4B6mDHZpQ1qdUaXkcSUL85BsJB198xZJ",
  "key29": "4YxbbiTR4L5QNvFMqKfnZLWva4n4gXfHxy9VHMGv2h8MM7NQgxTBdAbRv2LWpKBFUxsyRVaGPy4RwF89AQA2YjeP",
  "key30": "JSr5m1fw5fnrPNbtJK1PHBNMpLXMUg1wbeScp8Qytr635DEiNeapqi47t2PhWeVRbRh8GomcnxSjmVxwUbzCuvv",
  "key31": "pxtpE699QmNMiEG9Kq5aAS1Qz2vDAbMrBaTGjWvGfg9B6TgLVKFjpzoRKYsjGJRJJ9QSCEmWZwmiDYj6H4JWZ7P",
  "key32": "4U7R5MUVfEF6TiEmznQfJjoyPd34z31gr4spgZcH2CXR85GLos8rEtCUuEHKTdYrFiAYkTf4wnPDnwc5WTr3sXE3",
  "key33": "2RwiQKWbdtPme5gJaSDN3NLh9JmZzgEz4HJwgkPXGCrdYwFuj6wCnN1KNHZcdjfkMXcZP2EQGqmaSf1Mc94AL3Pk",
  "key34": "65Lyvqm46BJrfwqNXjK9qW4682m4mFThxfSMTV5SrD8Kuy959pQ7LBF5gu9ufgt4WafTCCAC7gnbVBMus31VpEwf",
  "key35": "3ncCd43DBDvQaXak9g6tPzCr2jdXxtkC7gLMmp3b21xMrMfaXoqrZXifNyrCAmdNzPMk2FZQpuTNmyhf6zPD6mYV",
  "key36": "5g7itnVEFQfoxzkRgJmCte2udNv1UXU4nNAsFqGNf6yYYHn5y6LSVph7MFgmrw5mxQppEDtwhuUXPojUqyMG7WxA"
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
