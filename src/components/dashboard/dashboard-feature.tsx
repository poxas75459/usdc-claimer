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
    "4etk5VJpzkuzHMP1jEEDfULXcTVLAAPZhCHS39ouLaj3xAsDefk7kQfpAeFk5zQiMSFo5ZBNCdUqEroWPYZjjhq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24pQAioGM73f6PP8kG5C7UZKBCyCkRdrGVoSmWmwgBQ9GfWatiaNYEjAJJnX5sZUYjxRBnK7HTH33V3EG9K7q3WX",
  "key1": "6GJArTxn4zfMmEqy49Tw6ER9GYPZ3zxQoMhQCkWj12jHy5bKT25sccS5dT7rHhB3Jx3rxRVCDxwFMYC77pG6isS",
  "key2": "65BVv9HYnKdXRidLKvG6ggTcemxusdaN5aH1V67qabCRUmZyms1oBSHrnjievB73gQrjm4MQHPytvnmVgkq6esP1",
  "key3": "4iqxk9Abd3CRier3RAGRBcLjXX7UM26AwXGjd7JpZ9T5Gkatr8LWutFm4mcAmg1KDrWgfGtJCauefnE2YJsq9jry",
  "key4": "5wDdUyWsGXTFbWuqg4rVwYMm2PQnn4h1eLWeBUc9ESZr9j77E6xNNrNfKH9hTAmjd6cTZtXvnAubJMPn2468DezT",
  "key5": "3YCCcKysxQE6C794HDZP8JgQjRBFhC6zQD7uT1gQ231ojusudSNKxPkt8z7sDEu9J5QCCZ7yRRWXXym9EEFU1G6q",
  "key6": "2gbBHL69WhxbwYk9WTgWaRGx6kNuUirNu71P4URh1frn6Jo3UZJqUnAcHDwRWd7RkioE3fuYVGC6TQL9g5Ek5sZ9",
  "key7": "QebTsoDmW4os1ULaZxC7RsBP9eGQKPcTJhKGjP6f6oMw7PuekUrUZV9943BMxkm3ufQPWbxvk4CUoetskuVSqcQ",
  "key8": "3C16GXjoSAjfDsbWoBtZTn2yyKRU2NwU8cK1kQvQg3mdyuSiZaEXRi53wYtPf1k72ZdfzrNUmpKKbFgmHeoMCQYF",
  "key9": "AL5EUGEbE9tnMFNWnuaeLpszet7KhZ3aC9yXpQ6X2uqrXW5sNiWzejBtYb4AJ16ZAW3SUVPDoSqXkbTaDZiUyu7",
  "key10": "49jQowLJzsd9hgxmJSWCB6sTXwoYrwc6AsbtxHkC4YpDGd7RWGKGjS5NAp1GnicfGhBFmUfUSGQGw1kfgL4ZrBSk",
  "key11": "4Jff6xLA25mTMUbNVgRT1pYMXwaK61yQWSisShfCXJW1oxgoHi2mt2uAETJ3qAWth88PmdaKzmBYq6h2oPWX51XQ",
  "key12": "3mAEcmVqePK6hUQHF3inyduCB3NcEksRQ6k2iBtPJTNab8z4on6wjz2tdeGNQqiGovKXeETjBRr9vYHqGcNKvy9Q",
  "key13": "ak6ueeJJjJSQQRqyU6RjgLPT9QH4ecHG2SJkPAGohMwNQDrWfag35MDenpd2JDvJdfKsR1Aee74Q7G4KaimVPxJ",
  "key14": "3MxagdQyAnybXanL9wFHijJFNrFYThwZe8qYeBPeW7XPFPCqsNWduGqka6nS5LyDkPbbmatdH1JtQXQGfVKKV3C",
  "key15": "PRCg7ykCoiGQg2HoYawmcM9zzPyRaBRyqYRdzRdUaCjpehUHbUaH6SupJHa6hQdpskEpKo5wciJ4G9h1hwAzpJK",
  "key16": "4ofaycv1mYRBwrBAbETVBubwKEKSomQDEqs5UJADA312u24qNgyhHYSEARypCHrE6YdvuhusHwDrSXfXKeBzJBZ3",
  "key17": "5i6vbWYPGkkNvkuoadxR2eHGnBJwuF9vvxDa1XUfCfDghuGGWR7Vvagun7BnXwSmcUV32b9zAWtGwciTnLyCvwu1",
  "key18": "4Gh6Vc4UAQwx1w4MqeiZpVtaG3Hdd7BpF8rkdwqX9QDmYuLtWTWjNkRPFTHmsQNAYkfg4vKT94HpuwLvuk3KgJnb",
  "key19": "3s7Hzy5dkUnbUXiVj1VMpfa1hi9zjC1byeQha23o7RX7JpENQR2TPB25oLy1t7xEMQfAJpMV8eE3eK5LmXxC1yER",
  "key20": "5NQfAmqTsNiQqeLz77S2eJEmPRZ1cTyVcZJ2d5h7wnxK9XE58jv9iWDC4zYdGpTWhQ1Jcf6VHuPFYGK3bxk19npe",
  "key21": "3jBqrCGNnp2zYaYxmmVsB9Vf8iUcgyFEJo3nohtYZRtw9RgfPqiE3xgLTuUhex3Letd8TdHbaMJWKx5XQaM1xvqJ",
  "key22": "4jMEP8zS2X5peTHbfCURx4vhfMoy1q3Sno2hVJQLLyeHZyUTJQNSd4TpY3WXnq589iy3BY1cTmwbNZwwKpsPP6dd",
  "key23": "b7yRjdRu9utj5k9r8kFcSg175keAj33cmJCYs7rqYrtJCFBHG5u1ZtZ89MzBNAwaNkVYyEiw8qcj9tTaQ6saL3C",
  "key24": "2HJRUernk1WM1qHJLi3JJ9dcoyqMr88XuGGyYAVSYZr2P3PM4gwvQHS6uaRRMBFvraCyRH4XT8jMotDEHnNLdhsH",
  "key25": "qREWvVKUxnyY6nBzKBQHV9ptTj77ykexJxzD5wHjpo84VM2PmM6Athp9AnWz61zzb9Q8pFsRNZos5iKE7cCqD7A",
  "key26": "2KfQg1V8QEQdjyqXNfWJEmkNTCykAqLNZiY1XABeMHhonobD6WBT6Awk26VbFuWoPL6oK5Cjghkko2KjcD4aGZTx",
  "key27": "3k8nQAB9SLAdLhM8mwzizpmmdNCHT9c23Y4ron74KaoLqxzxA89ynHqj4BQyjZoKL4YPtHrR7rz6JumAc14zuBTp",
  "key28": "47aaQPjJW3e7aTdziSf2AyQkkeGZKbB31NEbBPKTHvTnSo76GMBax5dmVeghw9VkyDwRPvGFZMR1VAuipFJn7wEC",
  "key29": "2Upe3B96aMgzCu1wZpoCnbddg9s134gpcxh92EMhydF2P21UbiWkRYVyraQH6QJxdWhG7ErVs9E9YhUo7kr4DHdP",
  "key30": "33H4zABhzVNmfScLQeuP7ZAPXA1dG9P675anZFDuub1nomRushmQPLTbfT5ykFwQhWXZQmggwAaehoh9FvGYDWyA",
  "key31": "36dX3GmioXuMxM24NC3EMcUGmyQSr9JFzSgVGCZnUVBvfHT4T9u4YKa573XSkbhLceCKyFmUTg5HuZZYb9A9XVEM",
  "key32": "23YHmrSBesiGAhDsnKdBiybZMQ5tzP5cpgJ6VdHeCvPData4bJtzw7EJb5H1FuPCpcnCWc7E3sxfGSVDwYBPMhF5",
  "key33": "121TzvKuDnqVo5k6Fuvot5Qx4XqSFcGxDpauzLKLRWzpV13sTaCVjibxEwbW3rT3fF9sWuc5GECy1qjUdLikBrEu",
  "key34": "2XR2GCbVNP3zKa7Sqn7zGREycNaxefz7iVkxm3fXeCfDPAzVG8vUnHZ9uuYNrm96teBNBYd2Zob4gvSsJtvp5Tuo",
  "key35": "36JJ1Ug9uXU8eWfB4tSa21KtpAB2uPv8dLYUfGxddyevKdatxKtC6s6RYq4asHVac2VVgsJfZJGAfQRUWqc2VPYQ",
  "key36": "4PRQxewHPXfDFLgepszh2tq8xnTJM28812rZmYEhxMKs4ev5dQjobdBmDUF1A6M3dbvKmkRnK2Kxc339pjXowz1",
  "key37": "3WHpdGY2wQHJ6g3zxK9GvSiuA1MEe2RU3rMmmeVThfeRNmsVhvwhQmQK2eBnidMXdMNccaosCPvrAEepJEwyxEPd",
  "key38": "5oFmEzUPbYqCQ92i4rXwsGcmoProXSDpxcf4647RJcsbcAgDoWtuJDPh8BB4XiFn2diHhYTznBAKj1Teo5neVTtm",
  "key39": "3FJY1xNq5mTMSnkZgfFz9b7DW1F82kwswKY1moRYPwFb9eEsXF5DRRDTAQeCFQ89XM6TYKYSgZeLhnzGWbD2xwd5",
  "key40": "YWZJWWusTUwcCETmbBwY7FKEStyy9kPecUnaWt7QeahHofmnW5QSUw6hkdsKmaadqMYaikN2KbEihmYqcYhiMGA",
  "key41": "56HjkC45B7dEpZzvdYDUXTNUJQFDhxh5tk8y1G5ebYE7QCNL2TykCGyW1ky5vruUoYaL8G4fULyCevumd2WTcUhS",
  "key42": "2HRWai5PQDwmFT8uNrTydzTVX6FewfhUB35MD5HyFJS7h41Ay2xLvYUv2Tz68Kz2FYk6Zj8MCwX1RTma15yuFgWx",
  "key43": "4AzvmDWwXn9yvnny9aqLsX2yk4GxWYjbq7vWt6c9nHpWwXoieH3H1MEL3WAnsE7pBJvKRiqpZhmHGPfu1UQdXzUs",
  "key44": "5t9eE7HgqXa3PG6iggm2r7PL76Myo38b2NsBU7jCz83KBwhXzAE3mdazRMsjMBaavvjgMm8STqYAvagWkDQ6wWKY",
  "key45": "61FREs9tfK2XjvamB21HLS616dnwo5WDQrsb6AAgh5ktiGqnsiUksJtmMMwAih4ueVUyA2AoiCKVp9Dt4P29Be2h"
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
