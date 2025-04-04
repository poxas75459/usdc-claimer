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
    "5yiy3keKixEkQR9fv8L12cidzb2tGRL8hSGFL1eyigMs5psyp3yiARgfaqi4f2qX6NvbnAV9RcwpJKmLLTLfxo2S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51St58u3CdxXotqRZShcWnkJVHNdv51TzneFK8WNrnUqJAH6W9kF546xkybZucpPr3xFDPxUVCnMvBLbrLjEV9jm",
  "key1": "3E7hoySu3d5hg2XJKyBS39M1nEMLZ34pp6nddwKm7RDj4jpMLDbgTnsv9s5B6R5zmCn8XAwe7TPUBJAK7s5ezUPJ",
  "key2": "26PrPmxbhdDaw7tJi3V7CPFZxnD3AVvUdiWieyCcX6fKq5AKqbTZjyq3oBHVLNYJ6Efubb9WcGu6yvwH13gFs3FJ",
  "key3": "2KFMuFREN7EBt82aiXiucSuo7v8F6Rw1VZ1Uhv3pUD8FQgWPYmnka3bqCA7JFR198ASHn4njBcNRz9rze8QkJCCq",
  "key4": "48rSBVvduLXRVALjLgzJ22QH7Xa2oHqw6b4AqQdb9t7XP4RCmEE9Z3MtNRzedUZQag5UJHfwWzWEp6wgXYxPneuK",
  "key5": "3QuKUkqUMZBRqCA1f9y37E1HTEqD9oi4VbSTNJtQAffZtraBTD6aN5bxsk6KypheVkn2aXC3V4VTj1cqueDJGZcS",
  "key6": "4k59W5f3SKQPNh5Pz5aVZt4WcAuJxF9wAinz3qm4PcjcPaqkkahdTzHK8D65P269cwLc8YRoHziegq9wys3RNyMr",
  "key7": "5DmkKckCePMcsvrsFYwCZ28bJ1t5zjsGGxdrjoQA8P1zwU9WYWiSVidt8fsLuDsussfwFjcaMeHgKMLjDeZCp1Xn",
  "key8": "45NZBuuyB5EyBLy5FwuySrJkCzyyuZ6x3ChWSXhT6C2mGJQ14FukGZoBxWot1iMZpT44zUQiGrmLjqq8HJdVcxBM",
  "key9": "5YUkwphYMvPBNcuPcP4ve7ZN3W3ydKEYUbZtTrsN3bLQfHAA4tpmtBtRfmJutKQF4Z3ZNo6vLoFAUfQZRf3jpKzq",
  "key10": "2VJe89X3fADzpMrK2uUtaE941zZJEdG5F5sR63PZKNXgAeH9cqcXcYxRHsJZ63tRo6QmkMAXSqzA4kWMF44MHmnL",
  "key11": "21iHZPVa4yvkLZcDqqdb5cvNYzGntF9gmSJeZjqUDYZxRA9jR2s9aqQobw1mfxino8HMzYNx2HbB1g2diEymC3TM",
  "key12": "jAKdATxyysJNQ7qFa6JNbMM5exZFZEqVht4LhSov4d1NYSAGeNTYM7uSYauDMWdmztgKZvk1iQbYQQWu6MsYkUC",
  "key13": "4S6TAuyiKDuXHQ7JV9oUWjz1GnYCdgskuWJGQzJBU4AnsQsjmFYG1EG1gPnTN8HADpsvwruB4ny578GVa3hvss8R",
  "key14": "7Eh1YjjmMr33K752ywj6P5UnSyCALBKLurewgrrN1XjMTxNywsyXP55Scq72W33KJxYWEwj4JkFXdhHKdvqBeLd",
  "key15": "5mWgZRsK7ZxeAmyDHXg9eBeWqDDs3oWh2ifoKwbb1WAz9hks79PdNwAEm5M5dZyJ6nsA2pzUVA15ggcdd94f9Qvd",
  "key16": "5tNdVtGj6JuejhzgsryFhyNDXTk9N5QQd1pbKqh5FG1zCauJ5xb2YaRSgArowZfcaQWVZu1EiHZeoUNiFE3VGq2v",
  "key17": "5evf1uNbHBB9QuiqoLgomexWdBMhrpzgEUcmPFGZ4pyMAAaZ8PwuKHzu42yzjP5aL5GhsyxcgEwqLc38XVY8TzU6",
  "key18": "3QwGKSy3GpVad5dCsyE7JYkYhdxf9gQGuHeNZKa7yDvBQV6y7MMhSiZHNtRKKyr9JjpC7tMW8noaYs3RmZo13me9",
  "key19": "5yGdqXbiuLjLeDh7XV9ZRX4yy7dZ1BxDXF5FJyrkcjcFWPkrNQ66bzoYphjAao1eJQAzkDAfr4RzBFncoh9xLN21",
  "key20": "3NXYxz45SSC4UgyfopDPYSzcxnGcgCXykqyttNvTzMDN6RpPWtqHFGz5YCMf64F9M72QUsrh6LXHeMXpnLdBERKC",
  "key21": "2U3nK2qK1Gk87KaLCmv3YmUovHq7rtiw9maqdagUN7DHXtbz3kZFno5EguCJkkdBVHV7eGVHXFRPzLD5FEJPWZLD",
  "key22": "4GsUWhqRp7CJxjYmeyhXDccuu7xKNZ9BhovJSZZqdNXrcLJxPrwwyurTvkNRDkpnk9PSps2C2swPFxqRabpXjZn",
  "key23": "4vHMGkZgiPXwVjKnBYPPq2h12xipDXb6Mt5Ze4sGGx53EEzoTXEb4iGtfBnFgz5wvQWsbj1aArwuZBABMtK6XseP",
  "key24": "2AU5bgfLz4WH42SDsBMvj1WVTPoE3SYP5eWM7W2614tiixe2v39Qn2iiz6DzmpFy6cR5TqeAvi5Afr5JfA1XH6vL",
  "key25": "4BHoEpnENJGvXgGFHVd1HUp79a8pUmfGz7LT2NZAE8RHqG8LZF6Dy91gWmWyR61oLqE4PZ8KtUTHTdUCwQoUKpGz",
  "key26": "3MPzmqcR8bVSfPQVKWbKGHDbuFTFMet4Y3VrTDYn1dPEJbYwqxK9uicq8nvgSjNgSm5mPicei2aNEkujFNGk8h8z",
  "key27": "5dy76F5YYDncrypfMQctEwHDRk5AfZegwV5QT7HkGBebeHds8VNw6y3RHqeLSvcqSSRR45aUxvUtYZUAW5E5S3Ku",
  "key28": "5uaEmQB5opun9QfmDnzaayaif7Kp3x5AjxZamhtuJxLzcExcuFLkkrNWxpfy1g1vXMfTbaaoUYRc33Bbg8oJZEVE",
  "key29": "4Q9KQG1s8QrZuRPZHfKcXfjUNX2pcAUk6XxMDo7RehZwsxKNu1FGNzhFjxhyQuLqcYfVoYWG7QnFToh6RFMCmbXD",
  "key30": "8e9F4GZYn7YrNEEKndiSoCgWWJC93jumrZMZ7J9yjFEHRAADXc3iaN541Knczz5XcSaCghqZGxLKAZqihTmLNcS",
  "key31": "5uezQrBsdT8FSbm3G7bgRmcuaruZQXMwRRHK9UkzgGmYyKBUBPd7AHrSrmyYtX4gB3B4as1NrDSXbaKVgdBEEB2d",
  "key32": "92bpK1CBvx9QW34PrGQ1to3SJeaJzsJiM8H9fS2ED6YEYxNchKgkmhsJZiRMiqrjrfe5HxPvAb2NAJ45PgZntJi",
  "key33": "3sDVZaauPKTC5HX33vnAa1Djp2Ehv4TYp8176ui9783H3XVC9eXbZQd7udZP8NAvjMANfncSEaQezRQcub8mXJzW",
  "key34": "3rYbNzyZDgPTtRsK3a5yFFebVNpgSFLkMGLb9kXXoYHwuwLtiz224jeMgiUi257wqLnt7tEx15jBoNJswag7Djwj",
  "key35": "5CoAbYk57awpQeogcC7hWi1uS6DEXgbQ5BU5QQt2PAwn8z5JueWaZJRFSm4HEEn2SEtCaeWW1YvXdGjQkBjo42D",
  "key36": "4pDeMtoB6hQhk9K5LwTc7XZR5QsoFq6zFEQprKDix7eRcaUxSzS7DeCCY95rYDHJ9ptytmNH8KLL7rj3ooJrMVYm",
  "key37": "b2R8R31EuXGpuqQCXaJjYxhYHs6ySTh3zJZBRstLd4uhGUpLTBnToD4Nn7tYYLzFFEfUY3r27CnExk1DR5Lytwq",
  "key38": "3dz9i65LUJ4B4Zj1pB4fBnV77sUs4dWdekuFtEPjccoeWEY12RxSFR3MeA7LcCyKVCb5a5Wv7G6tza1Az4nzwXKy",
  "key39": "4U3n96PmmgQWE7qUYwewa1EKgkD5TYKrJHhLw8MnanLMDFqqJtiiXpMFk3wRb87WSLypwhmcDZBD7gN1Qim7cGdY",
  "key40": "QfrtHcHhoiZJPo1CvNkzkrXQbUS9yb58SMe3vorY87JNoDg8FB9JC1Yp3cHj4sNa9YRoJZuXScYezx5XoaZbEhr",
  "key41": "5BkEXVu3B5v8ezpjzw7cHp7FSzz9XcpxFLN9S4GPvY2T6EHA7ZeaoSEkHXuDRdCRmbKHBdCqQrN94jRCxurRqCxs",
  "key42": "S8kNHJLSjUxs8PEdb1UyabSJTSMx6mG2DEGKPacbSLeHQHFT2zhLRDMZVXY7iEdBFv32jQeYkkiN4PUp6gNSfDn",
  "key43": "4UF2tjyHDDWZM85zZAEsL2Vy1CfjAai7fMYqMvpPZbkbQnoD2QRbChoesnZi3ijbPt9nUEVPjxcXs1Y8wdKbKg2o",
  "key44": "44hUq6kSyLrcDchyKipj9bUJcgFKZRttay6rcW6pENW9sRUsVgTAywNPZP46JJ6nkQqWazs66kZi7LQvPaWPNU1N",
  "key45": "JpYMDWJp2EhfLc3RWqR4RACPWdt5jsneTyuYad83UAuAWLM3s9mGAKGZpuHpHr95ur1ZEbR5egeuVcTsdyauip7",
  "key46": "4nQEHzc5kRR9ad6VzatzdcJLNxxVigP74MBQxeCkiJsUSraCf6F6tY34UR6ZdZcXsk1Y4u3fg6jLTx4MNQVu6HjD",
  "key47": "3gvyHKtvpsdrtwnzA135DeArbmFaTUVdSmJ1UkWFM1Yur2tCHCWP3qxc5uhsTAHgFmYefqqFRqrz1nmM4Nhum748"
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
