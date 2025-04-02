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
    "5fju9abPf6am3oBXUg2WjUYHEM41DSF9oY7kPx1K7wgyr3UWJnxShNLYptrc2TaCwKDkKdbWJdtLpyngx4c5jXzx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DN6xxDjV74rv6ZmWtSKipBbGJLLypqP8uGHPDKRyyHi4PsfRvAnMgyD8kwTWmbjLs4qmofgsCnJKAH6p76dsYbX",
  "key1": "58oDpf8mdr47e5iyKms7ecXkn2QHikq2YKCcBj846FboS7wvfs9Pj9VPNSHx2vBNrsrHohNFN3h6NHgGJHXKn7yT",
  "key2": "128MGW9zH3xYkhMS3Z1eJpk8L5dh4GA4cqYtmnfv4WS3fVbYTPZTk9FyRKdAMhSA2MDwbPYy2G1MyAYJYpXKkbyc",
  "key3": "3kBighdY1DQLTnxH3UYHCreJLpqJyy4vcRcGjR9BjwXpuRDayBPVz1QgDHZRW7uiW84DNxsNks4GJ6RSczSW7pPC",
  "key4": "2Vmo6brZweWExF6ojifc2ZdDTzazpjaJswWjGid95xiy58xrbWwgFXJF5v825RPrQ9syu5pJL4NkiMeCHS3pkvy2",
  "key5": "3QKVp7J9DrjhrChWa6fsfjXWPnVBGxoReE4XEJhY1b2hpFKt1TzLPGra8kemtQiaqTPbBkQURcui2oZtQHqRMcZy",
  "key6": "435X8xJUn1QpfLukqGCGEnJW9iGnhs9PA1xVEgg15sGQMNeVpoZaerQPXvnkeA148Yjd3XHkGkju9DPZQii6eHY7",
  "key7": "5rGpv7XQic7Ys7FQrsLCKaZbbk3g17XScrmrq7UfRjoxy4iR7LzuhPfd6guvr8QxmJ7NGEn4LGRkH2kbkiLUCxT3",
  "key8": "5Lws7noDRLFTiX9fKqneJrtgpotDv9XJvvGnqGtqvRcL7iuw1KhoZYenS6MzKpgTQSWdsyAqPz72csvb5qgkeTxG",
  "key9": "5aQqrgxQCyoLdZb13hZFYZfQTM5tbB8CwdBH6jRB7BaQyhyw2XZfsFdhUuxFVVhQc4UdndcCmwm6edL88QbnUmYy",
  "key10": "3JZKXsuGXKd3NHSdNQo92SkCDKgi5VZx9b4kHUQx9SJco2rUhukFsuSJfkooXLXaEgGuaAjFCrD4smWuF6etgn4h",
  "key11": "3kh3DRt9GNtcqeqpmFx4QYCNSa1dhEZAykvgre4hAJrxWCnhLwpKwRgizabVYMir4wqQN9MmjTwCgFrPKgfnLSUn",
  "key12": "xJnp9K1V7Cuqaapf9ZzpZ6NYhxCJn7nRDwKGaPB5ne3kB8wv2K95savMoyGSbvTv114U4GpWxvcxX7w3FN4Ci6D",
  "key13": "X11THn3QuTShEGpeJ2pDsS84L9FE8GNf3FDi3EborCR3Y7kAHBMy33f1riJccvQcgujdRwnQZTQyXbMH1EABmwa",
  "key14": "2f9zR7SKccsLHmnrAtCADBpyjsgRCFjbyQrDAgbYqGdwSbaf88opbfaQJcS4wFzTBJpHj7ZioVTFZDoqh6pG7wzJ",
  "key15": "57Xex3ZkfAkxgPNirnBREwCrAZekdLmuTLmnnfKiFPo9AyJq7ThyKZyGCeDJW5ACfMqdidSwKJeyZsBhq6QWxyqW",
  "key16": "2WRoEFPuZ3rBENHxvsazffmqFcizvSyAUpffSJ3gW9PjXkH7f4FUoYfuUWzESbGP9Ew32agemvZ3YPWPjANzwnCS",
  "key17": "3a6GxkWbBURmmQ2mYLewgsma323hhm43dmaE6B31qkG68Lz7XMc2GjPuuyXBohacRtSsnQDmcysdAY1uRGdB4hTV",
  "key18": "RkoLxCxg5i5WS98tXcdYGfVY3pDzQh29LdsdZig4aAFZ2a3DMTwmcMdJikyZQJ4eWe3KzAs1mKQsNZmKRgj1A2z",
  "key19": "61PPgNdBpFPEvWdkcqWd1YvURgFWxArBVDpCYwWmCCqfq8tpQG4iWaZ6WRRRo74ajV9pnkhWsP4JjEjLG7BmgeWR",
  "key20": "5vEktcwgNJU6MyunA8F3x7m6KbETtHJLFo7DxrwgjpmPNNaXKLvSiEBDc79L7g3DySjVGQCmYNn8LL2He1BjvM4a",
  "key21": "4BqVjLL8R7w4he6LE1WfsRMXAnrJxBZuSnrBpT8W75PghuF85nvmipXF6gTeX32UnB5YmfEgf1Y1DPn886yndVR7",
  "key22": "kn7wk8xqpukxBrz1V5wsiVisKKrYPLM3idkx4XGMVxjJrhv6BXic7pBXPNqCRV2MmS73jWmSFSHyjc1rv6Wc9wv",
  "key23": "5wBmYboJAfSJWZf1SWrhwunFuU2jk6c5vVsULGCHFy7VnRmmxiB3Zg6Q4Kv9o1mAopit8ssCQTDF46wMKtBdG8hm",
  "key24": "3ceAtfhpurDQck3TenfKn81NotBcHa1GR8T5qW6nfJXV5Q4Rr34kcfHuE7rqAtxZRYFnpaVsJhR9S3jBy4ZK2t5T",
  "key25": "5nUjVHT8udse3ZLfPtVaTPkNLCmEto82UXxA6sFDRHS9cKT48Z3ngSdpGzFBRHtJLwxnSg8oRpFEWCqAyVHSYDHP",
  "key26": "5UjbVkR1L36FGFkZfbdtXHDgBdassjxjJDyM5Uy35YJpbbm24h8UanJ216ShTqUEtHipBiTuiPStTG3byctuSPsq",
  "key27": "5vRWXPwAkyKeE9B8jZsL9w2G3xpqoPs18ALW47NhqrQDtd7BBzuMvsCzUZSkCkzCmYNviMAETH1uUKrKiFa9nmHd",
  "key28": "5bM4Dhq8jSoWCqZt3NypzwcBmFNPVZ23JWK6DX269BVf8ni4AZ3o21Trpb7goVmMcdXJ2w2UaNRxBrmpD5LuYQA7",
  "key29": "f42kkz3x2qVMejaWzGBXjnATd6qz5gMJ2oydvVvq9bxj9iTh5nGqqnitgXNWKQaYdDNKFrmBcTqutZigCbqdwWo",
  "key30": "KHH6VsSBd3aC1EpzSBJQir71NJ27o7DoyQNKB49DffA9RprTTAdVyvchxPpqERWxBdpBZoM2QgFHrpYakHZLcTY",
  "key31": "4LWshCrFNizazQn3mYMxhTxrSfGmPvG18GiF1ywfdwmvLEVFFVdwrxJ7zNtQQJN6h9YTeToDjqVnAtK7Xtjm6jHH",
  "key32": "5zJMzbeC1tuLh8GrRYbopkjPaZDUkfLGbzu85voe73McdUBCuQvDNKkzWFSnbdSseL79sc1qGzwhFPxqF2P1FyCt",
  "key33": "3Nc3pVsin9QT2kh7wyK63wKxngmi73HaFdCxG4i2bLbau3DBkwcStyPSHLnTzzvNxVobTinBT6U6Q4NXDbjkr2t4",
  "key34": "41fQWbbV7EpypXXaQNPmkLgWEza6gB8c3sv19rR3X6gARWcj27yDpGkzF3NhVavts8zV95KhrmNm48G495JPCopA",
  "key35": "4kcWmRnPqhPrCWoBmf5QUJxzSuoknBsD2sTm6B2oezwNhKAJSsBmUGwV7W9HMG47CFHwQo9aXvs6ePPwcHoN3qZk",
  "key36": "7erzVC2ovxj4h7P5jnCkdY1TybhehkeKBrmpyGa113TZbECbzZhh7baMQ11YonJkqFMtWS1nHqdata5ohgPf2Zp",
  "key37": "qRE95hoAFREyNB3oJ8dzTYZpYR7XqrR9VK6rrLnHNtSA7psnAso9aC29LEv3tFEb36sVKYTMo5GYP7sgqjiMzzK",
  "key38": "2FineXZNdbEiviaY5xHuSHD8PFLeAdK2XZbMQShJvEd98akbmwPKsTPTJx3PMDs9bnx3HjMJRvYQdrPFbFzUuLHg",
  "key39": "3YADPTZtJM9NHEokiJwdKeykASs3kzLKuHZDvbMK8nTrudfKvkJDCSGXfbN6a4QZbgynCJW8GZGEVsxmbZo3jEW9",
  "key40": "3HvE1NRxvyRgauPLBZRNPF9V5XXJz3SeBSLc4Krx6V7NJmyUdBn3gYNHvse7rdqka5hSispLHYyFzE2utQ4JdNfn",
  "key41": "2hM1JMFh3C6EZQ5kgioLQbgkQwjc9PnHgj3g4FQMeiywBdszvaUdfebN38bDh3X4PxvhZK99DCwMpToy5fJkJdQr",
  "key42": "2DCAy7XS8zHURof75vWPLeCPFFxvCRgigH411rFV6yfBbJyHjmamZuDYzvr88B2SCEC4MAV2mHrgnzPdBb4jDmYE",
  "key43": "2cfRLMuJAuc27JykAGfrEk3yADTPdHcxxuczsHPkwbtffuPqvEL3agKhsrtCpJXuyT8MQUVSKSVpiZnvRP5F8hFS",
  "key44": "4R97L3UJruawUNJTjv5y8jR6c14rS75sskwzHcHpLWG7xYytVEfkbrVhddDhFoQ6Ekce7gkUdZ4Uhja8ssYHp9NS",
  "key45": "5TYp6DAZKwbXSswn51UkpG6xkNo4CM4QyuQ43ZgRs4XLkGswxvUax7nW6uGbCNR67nXfZXnx6AiqZyRZ2iNv5ohw",
  "key46": "9Ztnzf23gqDB4dAfBBVPSB8MLoAvsSwJe9bgvquJC5tyGDUzamJtaWWx6v997TriFrCdXsa9GCbYoyvq977yaGL",
  "key47": "RXt8TqRzJH8iZRLd9fa6Pe9e85ynsaEFfufFZMP6uJord4KRzP3QwhYwp9rVqw4zXr35afBSCddq1smSprPGcXN"
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
