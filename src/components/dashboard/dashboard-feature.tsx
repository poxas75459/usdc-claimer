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
    "263C6mTFxcF3fAw2M7Myg2dHjh9ec8E2buT5MgiLf5b6SCeCWPfu32kQJubMhx2uiymKU1DTbu4mwQ8M8r2gCwRj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Kh6RJSCrvChxV84ZfN43nB5JiSpqM7CEyZQavfkxv1AuUdfZCVnk1rzznn4A4AwHkFy8Bh4ebg4G6swJYYEEhoe",
  "key1": "4zrLfns6onLYGgd4v2TWSDMvutPYseqAe1JpeKo6Ck5S8r5FPYJkAoNgUcjSeQ2iovrq5wqxr71fKLL7s1HABrnr",
  "key2": "3w3TKgGr6UQekg5kSJTY4f8iweJKh6PyTuaqH3wUASyo1qnMoycKDYBoNhmY4KXagkd1TwWEHbUrm6GCjH4zXq45",
  "key3": "3qGdHeVsXDeCWuLqCXC7NuiGTVAG6e97YjVuebRVtVJqZoRtf8VCxYpK83JRkPXDXFrHqFuFVrxFbWB6k9rcaJrz",
  "key4": "3nbKsdwx9j24JVr8YfsvAqLYYZJy9FLU49rQrtpzuB86kdQbjAJoK6jnhJNt3c5xRBmzokXfzxeE84tBnYe28h5i",
  "key5": "53AAUZy72PdK7yKeY9TuJe9Mw2sJvHfd1VznQg41XgpQDkAzHEEfY6GXGcDRZejmgHfzijrkrR8npCWfL96Q7epi",
  "key6": "5KTLZtogmrspeBdqu32PJ57Y8iVLruM6X5gKayGemT9jc8uLyVAWaJqaEkQJpQBpCwXsmyX7j1jJw91rMqP9AfTC",
  "key7": "2WC6z2L5w3Vj6NkU8mvhMrYbyX7dJpSvfBaSaJjLYXXf1ztUotqzG3mtj7KresAewGA6j42quht72ZWQmhD7LD6X",
  "key8": "38WXj4jqy4V3GB8UFAUZEf2ZZb1TNfwv3X9VXbLeBatpmzYAzrNyA3tT3AVxUHeSHEkZUnJL8RxiRrdkxv3iuLmU",
  "key9": "4MVcuqni26syZKWyhHLqpMnMLHRxsbrGsWTxCWmyNZccK3ef58fGFEvWWFnDsv7bWDu6QceueCTvWWnrV1swN2rj",
  "key10": "5ndAh9qxLsDbVh7wNHqd4BRdrKKkbij5jQH8fnKeCdsXAwZSYxWs4GPBuNhCogDjMk8a5U62HVdYsnAqijGa4gm",
  "key11": "5R7vSoGLxnkV1uZapdBpa7WGEgfz9PUuQdroGwox6CCh7Jhz2P3ktuefFwfDLq3hVThP5M4FS7tEtsKGi1ZHYRbN",
  "key12": "3HAxh9U95qAWfsePZ8r34F6Yc4XpcKseavAwQD2eF4hNa72VoQqa1NrYtKuQ29Sfi1nTMVMKGNbtfThT4WmvzRmP",
  "key13": "5rYVnyvDVzUcT6bAcr5YwErYnKPsL9HqHJtrxoQHp9jVrd5JHcAq1WTdP4PLPT5t55WjoC2fyrJNwfPwX5gATTZS",
  "key14": "QCSHHXkLYo5GYfn3uNW55qNuemof8XMaRUumHxXfHL2vD44GVcqSBtr1XcRcinrSAjnXKJHhq193Bw2RRxTGvLf",
  "key15": "Z1yram5q7NVdw4dDKjZG9h9j3TUD4dGmr4vHMTKtefjNMyieHhDHH6P5CqjMXMasyir2W4xZGekGaNmdUtVRebk",
  "key16": "3ktksuwaRxVtidXY29uhJBdVLZuJSTenuvz2yWAv3C1MKKmrGXhQP3TGR59z8qGfid29An8JKWVnmCvoVbpxizr4",
  "key17": "LMqpYpzrUVQMeCVTXB2SaCUkMrkRPWiL2iQ6M8RFxzULFXrR4ZQ7BckGdr6uoEiZYtxP2A81F8JvJCQVhWqYqnr",
  "key18": "4GiHw9DVaSqCwHEQ28spED3QyEQ2KU62YPpfWMerU3GK2VJRX5z9dVvJ4g28eymm4zWSG8ZAgcuarjY4c3L6bVby",
  "key19": "54A9uBKEt4W4fPuj8GKELuc1qLBBkbMRv6tTeQeG4MCALNgTDb99w4McWG8JiNzk1CDrGhPvvw5Hjv3WSqxbWGvT",
  "key20": "4DrenEVjHyK1FGRvhoWGyFpDuwvJbg5GCMFK5biDtgtPyigucTB4zWFmtTGBGZGXoG68jnaMT9Yrh7VNZP6dYYqC",
  "key21": "3XDufLAgs3MP9agFnsV2MbDDvGn6xgvLVS1ahYPmfQmuKRax9SNHvFgugYdDQoKkyuzPdraN7fpSAnA8F2Kr12Sn",
  "key22": "5D5XRmbYKAYf6tyLQ1zEozsLJiyfG9fR5h1FBxNbkrJ6YTUsVoLNkUMrNswUDDg2AqYmnxJGszkzb6kUVnvCofWE",
  "key23": "47hbi9ohNuFgvAs5Sju8eskvBHB3hu3FnPUHPDUgzujmJZ6g3ZAjyyFF81YoWADeuRo5srr9kg1qNbUmRaAAGqwX",
  "key24": "3r1EwuWhGRv8KmFt45gtBbHrqvApxeSWyCXxJRPXcx9Wo891RXPSJrnZb4BdXyubV3FKNPXF2TW8cDnKZRY2i1VL",
  "key25": "4KveZTvFeg7VrAwJSUfPQGqD62nSvkADcgQWfbAwLt9eSkzXeUDr6ufbX7kZvY3pRvpRGo2JobENKobGCBeAYU26",
  "key26": "57J2yPdDvypV9bu2sWjxdStoCLYTe2SGjx5TqBWXSRdGhrp2pdF7LtF3kEW87mdSweLmDTDsVzU6i6tuaoZoY2ji",
  "key27": "3jdffep65s2am6GjUtkcGf8GeZXze7syJB7nQDR3eiPmjojBu283Y1ReGaw28HCj26yzTgZJvdLNh3QA7PbnB4o8",
  "key28": "47knSgYrxgduqD1VxUbsqvMDWoaHN94dHRJx6rWrDEZFfzBGKqgjkWSySkstukNWazqwGTausqocQ14TjUqYGua6",
  "key29": "2wH1KfyJPS9z6p7QciEjRSCMPujE98DLDDVdxa7rQzubFjWyJRxFo5nNADzHaKqfrpJhayfThkKR1nDu2Lct7Btf",
  "key30": "3DwrhZR4hPix11fo6Kt8o4zF9onRiSuBew9VmYNEpyzpBUL3DVX32365uGvCr7xHabP38kf5pHTVAUX7iP419f8N",
  "key31": "KAYn9fDK2jsz3t8gKKGgmC3DNy6zjBmQCuw4ByckeVWZFk8mr2NtAbaa6d8bwJn6wsiiSt2oPppWKTz22cimhCw",
  "key32": "h4oT5zCKF41U7v72MP1gVb3mSJQz3UkdJZ34BTi3vT3BBgWyxF9nH598ww179kedMBA3HybBQxta18eAdL1k8Fe",
  "key33": "4vbunYd3wPGDxx912VyAobHLKRScsrNYC4ddmvs7BHTXEy2xj6mZoWwEMzBBpvzPWiaSLVW1JZL4UDxgNLJZJ2h3",
  "key34": "4SzeajCzGEJNxvzhh1iuWGGkMzSAxYPoJ9VrVcpzTRZcp9esD8XhdELA9pfATBz5xNcvkwaWJzzAzpyUw6tg6XUF",
  "key35": "5TWzz1vPjooEUx8x612uDr17qtY8mC39TgsMua1H37umZT4S89yCeJ5PqC8qURJzmiev4CZMv6R91TbhwNEZFGPx",
  "key36": "3FhNzDwFNj6Lbhe2yNKQzdfa4dzwF9Xa93zZ4hnXhwzvVcFsM7982txcyPy2Yy1rbrMaxj4C2Ggj8aa5EEjqDL9G",
  "key37": "3iEN16x4UaHuS9y41AXC2sMtWRADT3u8koXVC9drfbZugbZwvYfT15eDVhtDsrME8MN176bXGaWrWLbDRpJmmCcD",
  "key38": "4oaSsiUByLWfZQp4b1usM93NVLUoq6RGFARtg7rWfzrsNRRJsFuvs4J8DJ7NXkJczpe857PSCyoFYA8JacbNqgyM",
  "key39": "3hB6XLjRyBxJu8mFNEqmkz6EtDNxEU7DFk5q6zZoCQAob5rEa54oqC2NJ5B5HYgL2TdgfPviZCrVHtNQoZUNK63n",
  "key40": "5mYAUciV3CtwmAEgyY32ZBrRJSAVkpm5d6f1gfv2xqZuVHAkkTs1sewNEuecFQ6n4P8GwaTNzV5DyRZib9FFZ1u9"
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
