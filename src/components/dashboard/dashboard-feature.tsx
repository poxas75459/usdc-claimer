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
    "5o23zJzDT2xoXMbgGR7TEGrfLvBbeg6K5gteNpLLDmbmVmUNBjYnsh5pmpmMAfnwq5SRaA2WdDQDGWBhAVxNkUJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UpFXnXPiXjBwmSkEdRafbPdF4BcNTFord415cxYidosMYysAdSdfUjxq147sKyEhYY6iLuApEWhqcWXh6KJXPhS",
  "key1": "4Y66BjB9D1Anxbfo7mtLxJDfpQnQGLx9dJtRyJMmUvG6o2c9S94W94h2TLhpzpVufBqFJuombdJTc2iABfb61EcA",
  "key2": "3DgfdHPZnPz4RHaREfDcLiyEfoAay9wPbBunyHKK9zNYD3vZAfHnmV6U9LE1oDGdRkXRWjvYVGHFcq3CD6JA93p5",
  "key3": "3AZv5XVFqTDPRdZUNVxmPF5yAv3YZt5Ns1h1TqBmaTdFnyxqU2TnVUZN1eBK1fcvEKsChNaYHVbir7iG6JH7TtWx",
  "key4": "2LobR4FELTCdPwzKaGSNDzuJCBMKDXnfnixW2hgxbRhyUrBB3GRnRap9QEhh5QMskn9nFiZjSHYH2wn83bawKkAK",
  "key5": "621KJKTVSo76GknhbXuYkgY6tgUbNti17auM7pLPb6dBcdY7epCG7q4tM5YGARLWcj7iGR598RmQ2fb4mJz1bWNg",
  "key6": "wi669nvD73WnQhAvt9aTC97HRWprSgg3XePLWvGGgbyv3Wj8mASY5KN1oGwfmLhaZdBXXuZw7q4gY1KfDg97xwK",
  "key7": "3y9sBm1MxyArhdz64JMKJ42zRpUpqTEV8r6LVKyrpftDMJeyQ92UF6yc6Eu1FTdawMrJAxmCUi1ERy2s7CAeZdQu",
  "key8": "GJb1XqwJreXGygrkE4TJukVgoJ4v7dwk8Rv4fQMBE58ZXx4PfMtJxda9mqMvtVqjpYWJTYD8Z3SC5V5nBGHDDJ6",
  "key9": "2mCvNo911kHZtv7y8Vd6c6rQkprtbkegQRZozBCuR4gUneo1tbDnczswHhgbZ9Du7gPMxVxXSicqLxYZJucvmP4N",
  "key10": "4gFYiio4kJ17umyrz7zodBkNVGRqd9bcb4E1qwFZYLc51QaXrVK2An4qiSSxJiHsRSfj36EeGZxAyk1ZJjrLMgqF",
  "key11": "37xD6N4gThgqu7FRryJN8FjEeZM95xMNL2ujDkxo33nwPsr3f4u8N3KCyhvWx5XcBhYTrJ87i1BiKvsa4QVT6Lj2",
  "key12": "51X78XfGmwmu8DfkH6NG2fy6mh9EA1wxKgji2X3LoTCGGp8iWP4g9DqaR8MyjU5GxpbpM2wbtCZ13DaMP1eMFkXB",
  "key13": "3fLE6M9AMXhwdiBcyrfVNz9goykMb6r1aKyFj3jMNJLyxw8E3vvYTakfPvdQGXvRi3aEtxFW5SijBbExMr1gLMfZ",
  "key14": "2mEGnb8yeRKaq2R6Dbt1GoBn3ks6GCskS9n945Fve6xcKEZT5pCRy679rKqQ5kR53WQQLan1M4n77U1SGMQkGU1M",
  "key15": "3o8RvUE97baQXKAJqbfQ8fM9XJ9CrtuFpgQ9FFMA5tdwXeuwiXXHq2srigC9BUuthY7MoeYDWkEzk5fbHsjhhp59",
  "key16": "27Yv72BgpYkwy35qdku5gNk8TBKc8upqevnVqJui6qe4jVEbZDVup8j8vagZJNDaGHPzkGNAG7AQW9UePjVcFkf9",
  "key17": "2sGRydDbQG6yMmoHbqQicpBAZ1Ve1SGZbk62QNsnU8JwBVWMLSnUkyLWuchVeXAGjQwfVpdUr7DiFwrPS8urjVSV",
  "key18": "347W8xynCQLX8y1JfwJGiWgdPV3o5Um7YbRKmUdcQnitR7A1KNz6ofY7Lid5xvLD2gejnpSz2tcGtiD1gNm5PgSb",
  "key19": "29kaFYzrAzRH7HvWKxs1r5JB19RjEvg7Kg8NJWKYKEtQ4idfXUQFdW18UqfCDVyx4p2as2yvZSe88FKL33N1nap5",
  "key20": "4R4SNURLzG3r4XzZwtany47GSzcKCAaAt9eKjJdpJffYVWfNju6ajjWP4iYfHyNSPV7kB41toxhWBfKxknddRQcv",
  "key21": "3U5TQng4SXB1uUFNw1tMuJ2ohaHeTWpmyV8Wu7a7hSJdZAYJHtwtEhBNtecB6eZc8rMgZqjNaPBDZ8bLg9ck4gTJ",
  "key22": "5dWuGcqSzV1dhxECWKGEGAi5jdHm7ZcZgN4bt5jPS1HkvFU3LPqE97TLqAfuKyqf4oaD6Pjc2EZ3CcVHS7nYJyxS",
  "key23": "62Xr8hUruKpu3LBgfpervBgQzJi6fWDDjhrza4jZzk3uDGbUcNqtDHmwe4nPoDAffsG6mH1nqXmLrpLXX2QnzdLd",
  "key24": "3mJm9KXXXAZhdfbwNSSwUaoV5tpdj9ZiSJAHjknzGEwhjtkbsH1LX27cHimwVBceFzh3NXAj1vkgaQmXmuUMXiSY",
  "key25": "4bHfTm5z3VTw7Ey1Ng3XLURVgbF653kudMS1TA6nkxrh39BofhYKQ1b5cscT5McYPeSA4Cdn1kH7nnXGPUnD6SEe",
  "key26": "3mH4yDx4kr4uYeyeFK9xnVa6uoHmc3M9kfYL5R2hgLZKpg1TZUMhagZSs7sEcC9idMYckrdzzMC3faim6pVhvYuK",
  "key27": "5A5kEjCvFVwjDFmJANTLdQcxJ6Z5zYcpRZtnuaRFsCBfpHrjMTi4xdtk3A5XZddm2HX7x8784YbC3W7avFgnNzFt",
  "key28": "2FnhFGa3jWhVu6UyowUYhwP4WP6bEMriCUxNrHYQNvqwNbibfFKeuXimxyaj2jKf1w4SmXmprZUdhxJb9MCaUGEJ",
  "key29": "2LaxmxSSVab26pXLh16QJpKUQyrwak6ZEVGMpmyS8p4jwRZ2DpnbRZXYXu45msZ8GJF95NmJNPNuGMR7HnKR1G3n",
  "key30": "5XHhGuf2NkFbVDEQmMXZqWfaX5PRL7y55cvs1Pf7oBTqfBrU1UoVK8PPjLnRzynNKSzEU12niqbQfZSzmh1FRcye",
  "key31": "5zq7RsYJZs48oQZtRSySkQcaMukj4Y4AcY1TPvFgo8HGsiQS9RrE2Vw9GSXsjMWa8G8PLFpCyq6ntUYjWupikwgU",
  "key32": "4W7FNTeocfcT83AQyekKXr36TZaLtHJCeKCf3fy2gkofTAtgziPMLU73Bp4n5AvwPBzUZirv7GuoP9xa8x9431qk",
  "key33": "3Gc6eHJUhiwFSzCau6kPkJybQwVYXoyPzmaDBMnSS1wDSrRAtNcFDkNNkE8XRRfmbu3x8XTJpEHzUk1NgtChusMu",
  "key34": "3JDNsyWFZFK3bQ7ZYQt1wBxqqNkDr8G8Wm6pLvvVpibNwTuAT54Utfao1NhcbV4hUStdCWdMcyZMsTr8jgPT9pCu",
  "key35": "42tT2ht9NS8KjTEFQe2VrQq7oGEeiqzA4mDvD4rxpFDLezEYcQFckQ2nwGQD3GnbyBP8s5rRWZBkuVHdTrLRwNLt",
  "key36": "2fXFtwFK1Z6qwS9pBB7WREB9B64d76pDXsKuARwMpYjXvy19CD4KVZ2QfkN1mGKavf77DrY1LHUF28qayJ89fRan"
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
