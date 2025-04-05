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
    "5xYNoyC1YywGhcT6jSbL3yFGa7fwhubsG3HrWhoMdJGrp9sn51ppJ4Uw7tqCpuYd4txvMSRq9m6sjRBkZToRVRLP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3smyAwv1ksoDULnrKL9PCogkCzxgfAH9hokHYE3UL9HvehuanDFo3NvW2r4poFvJ1pwNpHLsde2NapYf1GyJTau3",
  "key1": "58ikXjAj1QEQnb2XGydZUAYricuPraPDYoGL3Wzz8XkTPdtWNNZ8DexNQoubLgXFi6oU1X4ExBUtdUSNrNtXFjVf",
  "key2": "AuDmyJ7MN1orfrGYKEdxaYDeRxufZAGniDJCpdns4obZaGzdRd9KmWeo5cbubjSyCPJ2ysMoinKFqvHRc67TTzr",
  "key3": "2GnpUREtxYib1uTV3fL1rug32XUmuJe5A7pdph3DZPPZJysr6f5B7cHiFFNkqafn7SkgRhavFbzJUJk36J69izF1",
  "key4": "5PifpQcTceFrByv486G4C2x9vFxQDawrN3V3CknUcZw99oSqharmYQazxerVLCWAG7QrWyU7Eb72KLpC2K64AQeK",
  "key5": "KSJF3NUmaGBbUaKZ1M9KQVzkWRaMqm5wbGMhU78HiLrXxF9Z5zDemGYzmA6TySFNyHehubfoMQ84Co8AqJQwrkV",
  "key6": "3ouQXUNNHgSoHeA9gkQ7u4jVtgarzmbVV2cDA4xVFw7ovqsiuqHv3pH9Jy6Zs1LtPVnBT8eUcCRwRvZj5RMJm89v",
  "key7": "3ydrerg93nVxA8u947qSQq2GxYPrwfYdpa7dyJphdaJcJtqRxDXwJsevDQHZxYZmugHGinWJyxexnyzGmLeb5qdL",
  "key8": "4YifbYZggbownCc7cQV1h31xDTVVh85iQeVa27T8FQqdXQogb9gCyCdCzNn6tQ1rc31yg8dPDBhRin2YsNgAfkSJ",
  "key9": "5rv2B1ZXZNB1t92xBdypszVd4EQvKAWyyt2v5QnRd3mGpNYpUwkX1pgNKJiPCsBSRt83mZHAaggjLtAkFMCERB5k",
  "key10": "4t3stXMYJ87RjkEaALAsfxbrZ7ybjFaXV62t5p5AKZ96bsfq9Q46TSoskX6fNvmDKUVTDxP9HoLe8pM4d8fgyKcS",
  "key11": "3PASLF5UFLryPJMnMkVbHzWbRX7ikMdpi6Bxo8u7wQptbjvWwqYYSXesVHieKRgw6GS37ma7Qp2oSikjP7pWjdwi",
  "key12": "5Yqts3Tvw4miBQYvKrpKqbcxd6BpgVyvcuZUuRg16vmotvH82CqPy9WP4G6uiHpntNYwWN23Xj8gmB4qTRBQqrCn",
  "key13": "4rdygk9TQNVCVXdBNcVtfS2a3HznGXhRpQTp8toypP5f1ii1woGCHSDoV9UwCw37ntk6b2GwiUurCuNSvFMgYb2e",
  "key14": "3MMv49KQXu6ujiq5P2UztNUXZngKgAjiWnXjR1g2oJtWXUrQq4ZDUoDfjiM83nnSHmgN6QNqFU95McCXq4Td84cT",
  "key15": "vN9f6RaA42DAa9Y9Gp2qeuBjyia6YBgotfF1TPtDrazqAEpv24EL1HZUMXcC5QGzjBp9whx1mPnPu3TxAVQKgkk",
  "key16": "5UndEodKETFPrgb8KqRNGdYmJZPnHnJnyEZdgbmPbo4M9UZiQkmyuH8j6Wg82TXFGKJm6kfUN619WBdihcmmJ6tG",
  "key17": "5D2ho9FpHzkn7ankvbsb1d5Pi9H2shModgFfUgYz885WLQH73AjKqQTPnjeLhE6T7sFCLjRnKyL3bkmrvCEG2do1",
  "key18": "2E63RaPmAT8Kvk2Lj4uuTckUvMqQPT9DAW6jTU2z3hAsn3bNYLQjK6WibdGHn2RUbH6VQag7zYaeh6FMJBNae8F5",
  "key19": "4oeridHP5njGPVLE5fpGzsb47cjy1LrtQfDyanaiQ2SikRSXNQBb3cFv3ZxFFL49kREC9VebtBgzWXGNgRKtJJYw",
  "key20": "CqnGPUUs6LmbyT7iF8RavmEzXsegEYnKy4aC4aCMCM1Pj3dLYBbiMyZJbaWmExPC6Nw3tbZXPbhViPyX5Tz9VZH",
  "key21": "32nu33uLbMxvYPEqSNNBrmSUzFi8RZ8DuEEuTp8LNnn8tbgVGQHbz5nkhVAXeeS8xB7ksBvE3P9uzkVN338LefCc",
  "key22": "NeL6akq4GjNsqigbGynDMPib16kz1BPTLbu42LBvmgq1E4G4uJe69cuKUXkpm95ZkoA5AHuwtbGgqrftX4N3npv",
  "key23": "58gF1L7Fouk27aGZistQzEar4byxjQ3T8NHFvzQezNhWTmBGN46wzTvxbzG9iBdxqA73DJmNyEC4642gv1x5QkQq",
  "key24": "pK7NKA4TuaJuD4qqQpewXCDpUKd5Ut1W9TMK2WRGJRVqhbGUSVRAnSbLUoEfEJfJMJug9JwFNG12ZZhKmGENVfX",
  "key25": "3sYELm2Z9UjiLYz4cY5562dKARMCbfMv3qt6FBcf1vk6GaJVUidUg4BZYLT1VCFvzzVHDHK4UxFm67mKqdECu3Eh",
  "key26": "49ceF56VRraD85Y99Ao7njUSrHeo853erHTQawuNoWXZfv1bEwhxYPBsn8Spnhw8kFcNGUL77MHoj1eBQ7R2dyhp",
  "key27": "zrufGNeNKaKRfqi1uC7jrGTBux1h1UtMejGqvxJZuz2HnVwupEVdWvJ8x5yJMyR6wCtcf1nn8Ev9jCkR7i6eCbx",
  "key28": "2aa9cecSVxJ2FZbcLzJXjw7kFLPPZ3V9xFcDZCd5TVv5NubSRwppwv2Us6b1hbGNdZgNDr3uMHJKPBZHUHePrnFm",
  "key29": "ecxEQNSeBpy7rkabNWRbzMLpCzee5KANhpMXgezMLsxBwEhNZNQTqNLiYGrBQTjYjFpkPGH55zmmrM41iutBRrj",
  "key30": "55wHKZWJiJPLL5zmi3UAdC2tqxJpfhdPDFQhpZNNe7NZVBABbkB2yMuHKw1wbHFfM6dhbuNsGUtYNTbxGByoHtLB",
  "key31": "3ihkHvvow3RDH7ULU1vELV5uFpFAt7G6NLjTqQz4aW177XAy5EeRo7LM697EA4QtTzoV5CEA4mkX8EfheFQygA5m",
  "key32": "3N48gYYm8xFFrXpJz5pwLK3JboSrYyLPTsb9whzyKjaxzHFcJNATqJJ42e9f7rr7SzTxLLtzDPDirr25QDLwUnRD",
  "key33": "3YSmvzv4rpmVEuYfPd1wCzSjpPQsQB71889Rqnt7hUehU5ibWdK7eyPQ5y23vqtknTyGNrmqmfCW62mEmUF9qgiL",
  "key34": "2fqGsAW4ygJx9HwFh7JTXGihcNjtyRfeHBKxnJ5CEh3N3WNn79viAmsM134QKh8NCPp9GZJutpbmMAvnGbabuTeG",
  "key35": "4bYxmVr68v7CKUPb7fGeMski5g57nmsqGrAZgmrAip9rxAjgbtVEPd9kwF1Q5jjgPFp9TEMH7cFqt7xBjNY8t8RF",
  "key36": "3Uutb1rzkNEyjDLzqUBDVkaMc8aRcrbJHCcvpTVDvrbkRcQt8PFmF3sg1xxFCyNwQUfMB4C9XWtDo6QdqHmtXUbj",
  "key37": "3XVZNDZ4VWY4JW9DiazRbghZ9CKAmaATWqSx8XwwvdtTGZq3yAJNsJZC1LGbyqovJMCzxaL4Lfp2iULiZoFr3tq9"
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
