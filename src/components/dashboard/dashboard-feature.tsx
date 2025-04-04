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
    "54EHgT7UbLV8fwwZUUH1e4LsgQJKBcRAqdBjHa1kVuF6w4zqkn8VFfqPWaLHNt6Z8V4rrJkuiASjBvW9kdVkJGva"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jjjnk4xoSxHtw4EAcUZrDSNodGs61L7SxeDVY37hAGRx1nJyUXMkvp8CXmMe9mzz21USFEPrgVCvdTBxw9fmQqG",
  "key1": "5aLAa7fSAdbecWbzqfqJHjsEwUGEYJafNmBLix5dstUff1nsssYNdBQN4dFV3PqVU6W3r9jZPvVMoUWmZ3BdEnmg",
  "key2": "4CgFZkzCbyD5nuuvfp9woX4tSGM426xLpipwyQqVuRUZGVdLsti4fwVPdrh1FJ6a8jwquUrFZfJZaM7BsPUZq3Jf",
  "key3": "4HxB5LjrwJVU2o6z3YZiyCNPG657QSsttK6nHehzcedmsmgFeET2YxAF1kTrS5ouhsCb957RYzFHBFsy6sQoJ2ht",
  "key4": "5WyVJf8cR4r4G1RQGsJBxub64ZX7ySMCE7eb6x8RJLcbuTe52cqaokCM9pLLfRFUmboJDmF9w8d4FhGGqNmhtSsj",
  "key5": "4vL6w2LHhZ9hVMSRXgFeVztyojpM9cRfYqMykFtvYLgzQupYJbKmHSaArYoprsAUZbWGPyXw7jU8SYgbC84dC2oC",
  "key6": "22T6vsY3k1YYEug6spajesYj4av99i9kNKX8nLQPAwwpLq43uwDSDqRE4VU5S6pMniUBN8V9AmAHzdfqWuBLfWdc",
  "key7": "3dYTpxKBQ885s3A5XdsN9e8sZ1ET66ekc9hcEs11xRsg3KMhxqph2j2Wt4tsWv4PXU631KiHiiGNaoiK2JsKFi6w",
  "key8": "4cAeh9rZzpqdTruaRhhEpvxzobrWhTVAvHrAkbbaD5teHzmcNxKKzuDe1sZBnMVBQM6XALiSWx9CGwh3vNgtKVtS",
  "key9": "42uuo8YcABbPkh8korZpwCRMTcHZku5tG4WJcHJpGpFAW7HweXknr1UHQxXrCr8JnvzjDwXsmJ7zJiatWFW6eYJH",
  "key10": "5vLapyeYs9diBS9HJsHn9KgcJJVab4P2AyCvNytS3nuuXCR6LeH99mnDNYjKdAtseiv7NKfPS1TWego818FXc3Ez",
  "key11": "3xoWgqi9vyUQaHYhdpUzDgGxefRZ5JHwtdiYNvVRwUiiVkVH5jE395iT77Gj86go8DCjU5tbCs7YzqpRdNVJeUmY",
  "key12": "2UhRMd4GeKiqrythAVqZbE66sAzc9NyftxpLxRw61PLQBD526WyEh6ePXwvELmpryWasrjkBBh7i9NwjQrFf9BRR",
  "key13": "2K6Q3k9UpfqWDDwEaCJMutt5RrSK34BWuBvNyg53w8UL8dLhboUh15UZP1sq55bn42G3XdzjtTtaGzhcYAd7YTZ3",
  "key14": "2zFm57jME3kpjc2QuUNn8uTFg5nZG5kMhzQiX14d2fbdKYNGyzEBxh9rySp41iZ2usLPQRrvi9pJdXubdthWrubZ",
  "key15": "3VmqijZaaz9PiBqRZi6oCRTsh18QNQe6j9FqeAz4h3SWn1pJkJD9YZSV9MnjZ2SwMftidvjUV2wJ6UVNFUrRQkun",
  "key16": "46pkogHzcZ5ZxH1wMS6NBexW2Kv6KuyZTeCscwMFnJGoVk5PD66MhXG51tmX4rTr8RC22T9tX4TsFjkzMauETsHo",
  "key17": "4xSUaWLG7awxRB4qyW1m5VQpu6qLqfZ8mgHMNjA5Dscq9g3p1KoroHBujy7vyF4UQDe3tDQHGGALqbni4sy7wbXh",
  "key18": "53wMDuDpVs9uNDpMkEwfc2rPx2t6duEVnwVepFPcj9cto9XdvLC2nqWUEnGJnMXKhiSzTpAWb9TNWfKcAA9dfYu7",
  "key19": "59qcXVSka1pF1Tp8BcDpmw6BT5j9R61n6uXtWrbSXGeqqHjGdaWYkFRumjAmG9yHM1JQjJ18DcwKWTgeKawXFLW1",
  "key20": "4pNCGx4PgBrsvKpQRnXc2fZdAAWj1XvDsJ3ehc3EyhoEiQp2Co5ahvZvBbQNpfCLCTW4cedZZtKghpt5uoMxq2Jv",
  "key21": "2wZ6PYJTyDEprH9nHLDQwUqJVhGiBRoki1ApnwupMo6CuxyZc2txtM4fUxxhPnVV25v6jDHA9C9ohsCdUnB5UA8L",
  "key22": "7mNr8vjs3AsxwMQjYuVqHLHLQU1dJzgfmx3sPKACz2rswud3bckfmhFvETKxQmyrC1cgbEvfKUnz7ShByu4HSqT",
  "key23": "3mJiaPj28YBDuNo71GutqsEmywU8wc29HoicGFHQeyAvahdtuygNZVCtkdtxYFnwsL31tcAtdq8xpaDpiogCoFJy",
  "key24": "2R2kRiYqrCHeEpRWHwWAMK3rVef2R8EWh1HnP7EJqMkKo1DYbjtjjETMbieCtDAZUCMGPiioHJeGep2zkBrDiVCN",
  "key25": "3QT7mF6dduFNn4JethscXbQ3c3kxYKSWH65BASfLh3fzveFw6SRsmWTtuirGPZ7GoKs42rxe8GPeEF5bn7yMeJgY",
  "key26": "5beMiDZ2sEzB2HbdYnRF3S9sPxTKTXNH27CPVThfcLVMhDvjMbTsfqFYFhEiEAY16m6bFSYKwuKwHybX3uDtsQzC",
  "key27": "3wpQnj2RNRGo3NDMX3x41FFxCVRERxiHiDwiVekgf6enuBM8zMStYjVcMSWazNVLYgFaHaRXx19S5w1tT9LbvXcb",
  "key28": "59wjWEBcmKrEmkjBc8zMnwBxsLQCAQM2BZEmZqh9Sqnm3Erw35xELeW8V6WJsd65Gb4j5h7B8miU4fqajV3ESwwz",
  "key29": "3hX5rjCxg8wk1YYCT8s5fZjDrieuSXXiEAZt2J2k6ZH1N82cyPDSbwL3xqbZKbE2JqRDYMc1XGAcWdMZxgiDq4vE",
  "key30": "3mvGTALN37pnshfkBZGmXJ7MJZqbaGKdeGCQ539bSQ6SJAJnjqy91oL3sN2gLcKKCo6PcFSzp242h2ydndLRyFQo",
  "key31": "4QRYygg8ftyHkikqN9XyiD1zvZFiff4odsXVqsiWkm6FnrPtmmodmt9EakPcJ6FPJGN23ZHQceESUF6AsvS4B7Ez",
  "key32": "3343RRNTzFESfdYDztf9YFU6YQjFJzho2atpoaJ3Wneohkfv66PPuAWVmTgdNEk5GZqhJDhTiMkJYpwDFkc1xqH5",
  "key33": "BuhK3agwCh377JTCWWGMMYDTCVAgKxWnSfbrxLZjuPWFCofNKfB3VAb5xGunX1r2rozmrLQk6wUZwLr3tyXswVV",
  "key34": "2YNYCYwA49MBwRdfbztzTZu3qGTtE2h8PhxQi4gn4RuKLjCRP9yF42k752HsT4EEnQAgNcZZNxV4S6T1A821UDzE",
  "key35": "4zGNuyYPbXZd5oAG15cwYQQVW15WaDqbG3MB4kSyrrek6v4BH2g9A9gpadg4cYdyeQ5QKP6jcfztEUP6VkojmcLr",
  "key36": "v2btTvCHtAwJ1RM2N17F5qTFjHBdt1VsdztGBEs4qmJmzyh4xgLx8LL9gbE24EJzQ6RrjHafqJQaXg9xiARKMHX",
  "key37": "D6JSyeedErGjLupWcc9PGop3NKtPCCwtDA6QwtCKv7Qr5wdhATbEjmuyj5X7dAMkwcwjVeVuJ5SWV2Cc325gsVk"
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
