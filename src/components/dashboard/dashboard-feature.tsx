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
    "26HdVLeD976wEtPHYZ3uGrS8Jaa5RAMiazBiKNkU553P4YH5m6bAUHWvrpVTniTWRmEnE55TGjzW3naakr3oQgLj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hkHGvJiafYY8A4ywBzk5Jq6UnZ5rebyrQFZu58s1Xzrf7FGvbzED6Jj3fLTwHpoPqjif4GdVqJohD3SeU4PtKG3",
  "key1": "gFvWhqJJy99FQ7dYhsGVTYrJV6592v7Zu92xk24YqcWJuhsK1TYTxWJRRsx8dYEbaSBCwthQeaSu5D9jYT8KzV5",
  "key2": "34QLAJxdszeoFaRHS4kESmZiMKt8dTXdZqFGpZsJZKxnN1smp9Qdr6ZGXEVnkvAXJ6iv9cGDJHb8CnCiCBqMtqFv",
  "key3": "4iQsN6qCXRCwmHB5mYHFrvd9HqP2Ya6TmZbCTu4J41dVqFKq2keDPySsNrRUn8C1U8MPdMxMct8jNkZ6ARhmecJX",
  "key4": "3N3FJBV8yw4GtTrY4g6rcdKFyXLvKANF49EzMTGJx6d6VnpEBzzEQmk5Dsowd4xFiJbvS4tYSvd1v3NddaTMdtzj",
  "key5": "2y1z7tEdMQsmvvVWY3m7LXMroTuscdotDot6Esw3buLVLMsQt2aJqJVL1eBmKveaDWU3mteF7PZcVf6bx2mGLEHb",
  "key6": "3gwFhhHv3GKUgv9D87oEzHHa6dcUTa8m3iZbtMAUsnhssybAm1CPiVzfJgPJqzpc3MkKS1SYALBiUVHMgMQfh4Yi",
  "key7": "2pPgvY2XnawrvCDJxBjobKXimF4PTaAAqRuQRTNt14Hde9Wotzxxx9vpUWrKuo8FVnKkQ11iQfBmY9qcrQJG2RwU",
  "key8": "61bY3AA4wp6SvScHS29LvysGNcTxUY8XnjyWzJYaBjh5xeTiAPpLx4keqg9NrmoEsFxYiYj3goNHSJqfJkxmtCbm",
  "key9": "adKBwc28S8mjM2uH1rEUSevcMdeDFq5AB26W1NwdHA5grC3st9ZnpewV6BLqtjupg9E4a8XvD4GjWrBxB6tG7hf",
  "key10": "8fVdBwcSUhsZ9mpFebcMXafdWuv6Xb6UDZrSpGbrF4dr2T3NfxVuXQrG7yvy3CQtVTRiUjVzWQEKdfTvgU8pRnn",
  "key11": "36Qa3ZhPtTKT9wuUmMNZiFLnYq6mRNWCNPXq9rh47ZDj3j3xkcf8uXE5xmH5V3aTwrybCtN7gY3LWyzmVvbb8LEu",
  "key12": "N93NMyZ8re17LzPFhACLqe63nxaxmPzS36r8hPRDBD2K2NtcfqGs3E3HVrbZdZAbQKdh6KrEYPoCBC1rqMGSzd5",
  "key13": "3L8uCZ16RKua3orht98Pz9z6GYHNCpaP9yEgBLgmLRav3cKqBBnSaJmDXgPCWUUsVz76pxqoxiE4DcWmLra76hCe",
  "key14": "2KNLFuHEi3KTxegtkEKiw6E39uHSgJgNYxhZzNYdSqCnwdoYmhinrZLMnaKnwhY8e7ghK3ds2D4fqMBn9GHpNyRg",
  "key15": "v2c2wFW5RY67nyYfC6EGYyWMEZNaGtn7ec47nvaUWxf2UguTY1Wck27ApkEQXpEVEc4gaZBnTDz59Xxkbu6Yjy8",
  "key16": "2DKGejPNmRgWE45vBQwC655SaDhempMbywvqAiD7NHXnopPgtPRKrnTcuGhZvZ2FKfacRqSLtm9ZTywto6gPumvF",
  "key17": "5b3VQHMySa4n8acFrtMpBhzRD3pJYEkEopAxKfXuCTgvTKw1mpuRS7RPsHWhU11kVTSEgrU6hbab9bQr8DwzHJ6e",
  "key18": "3Bu6brFrwfrBBqRRCKCVC1RijyD2jRUrSveeAd1hdZeYGDAXHJCKkAztVh8gduaNjbhZkJZKE4wcAQLpAxckQNAg",
  "key19": "2cemBpCGmYmD9U5RAJijDGyEXorQ77YUCJ8ss5oyomAyV2wgkgpJnwHkrkX5tvaJWYSRWZfL3EJn5YbPCe87U13M",
  "key20": "ohvofXVgygBY9UZmz3GkPLYKxyAQgAj9sVyZt44fJNw1VT9WEBrxQZDu6VtiSfjFzHhCZSUnunf9i5VCEfZeFob",
  "key21": "2BXrzq523cXUQ6YUQJzebuuv1zpEvAfgDQg3P5gKrcn9JtZNwuWuK92Eiwmf2yZhUTCahTJRQi6uZNNfvkuovJWA",
  "key22": "yyHiGPg9Xn9U8SYrCjXURbZz7BgQmsdKvLNqkSyxhA7CyPELTFQxbytZgEZngrL5zR7DqZUvK94UZWaaL9EzL3y",
  "key23": "MeuJaW5rAV4pC2LQtWSWoYqMPMTTTxzfxSQnAD6TGCNQKQNhre7ysWjDdzVQYTsHjqxHrogyhqVfqZbG5r9sgvQ",
  "key24": "5QCoxQ2WZKWdofSdPDxv97quiQC2i9ZAnmMowVEohGj9PGzvuw2qN7JVtM7qwq1Yja8p85UHYwyJYg3nkQ2kHHXi",
  "key25": "4CaDBXqLDmXGBCyGCMXUBATQc22VmQQYLvbf9Tj5UFdeMVZCocjK6wQL1evrkELShaRn4kTQbic1drGs2NohEWck",
  "key26": "41YtzWzeWUZM5qBdwfDr8NwPrCcTCPoCuaxLExLgKeAxKmX2dytQcKXxiXnpkcm7FKfX2cS2iWXwcNKRgzFTq6jJ"
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
