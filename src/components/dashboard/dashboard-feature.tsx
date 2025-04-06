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
    "66PUWwLDNjZ3mUvVKx3J3e6xYQX9quYqyvx4jcVfvB9URdKa7QU4PApD1ohfwpzCznHd5YZK8HanXqEsAqv5aa93"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cNouw1jPKmsTKnAJDqo6ys6DLLyLpnWEMJh2tnzsZaBUni1YHuFqhXWLPvfuW8zJyxgNkjHWEWFD7ubKsTGL6Lo",
  "key1": "5fRitww18iayXQzZ3dhc4uzzZMeX8frEHLZMv1NsUi7PXt9SDVXCEjxWQCtSqzUpy1YQgKUnkh7fEuWoUXjw5LST",
  "key2": "2kTG4hGweNJxcYhjwMZ3Xpw1XCX2rDR6dMxCdt8p6mqhU7ZU3BmCs2kmUgKvfNMN4QwgGjMjsgksXDSLXjVLMLZ1",
  "key3": "3BiKss4CHqdwSprLedTkhxJ4hPNH5foVYnKYQetavwauxN9C5WucrafQScjqT8osVzJQ1sxYiCqxPkpJpuWUdDpk",
  "key4": "E3f1zJLJePof475K3iA3QYTeEQLkdeV2t1YR5rjFTKJd7hVyun1arwXtmDjbyShP8ibHtGSrq8bcbaX8W4Uw9Hf",
  "key5": "4Tj1gZJ7RrG2N1YNKNf4vVvYye5N89baoK24B3tG9Nzai38yTsRaVgo2uKjvGMivfxmFdxVRe2KGBZ5msJUvGpR2",
  "key6": "3CVt77GcyKEDsgEd3LzaAyPTkMfrd2uQJmbvjtNw31EHixVJjxpZ893WpVLMRoa8Cao4TFjaijpgHt1AMpg1W1Tu",
  "key7": "5rgwbQMRwvykasXuknckhs7Mkqe2bke5qQJHLLkMeL6yc2GAqafnVdKYZcgaVyMqNjt6JGr2D9RGwZsxC75Pi2ig",
  "key8": "3RF3LiDxUWtLDgorzmARW4ZCVqMQiGTNbCe23xX7wK2ejLEfcZP4BzkyLh5vyiRaZYMAaUGX7VW8YQtnkyRxUazW",
  "key9": "ayXomsVMjjF9iKQFFPxAApb7mnajUjAVe5wwJQQpJ4N1Y9b8HWTyrjEqsq1KQZZtsTspQBGi5Cc8cuUFyjy3DkW",
  "key10": "3tEMjbgnfma8Xg4BztnuNRdCrn3qiKfYNb5CqEDHh2XbFtYruki7ibnHx2bphCVxeuGmdsaWcuNTXMqtgSTL9k52",
  "key11": "5re5XGVcgdpHvHPXQfkTTCXVwrLiUERZ7mJZgrSSJZLZ51L15sq9WbmbCDjgR7v2KxwL9mkwLyYxSEYko2QvxNHJ",
  "key12": "bPB3DhQ86D2eWMpCnBBQwBpzLudBBVZJMJvBHUQ7rDm6K7EZdamTVyX2BLkeHWeZqCMez7K8evwWePef71NzPK8",
  "key13": "GbqzFeVkGN9Hhq9aTDYrSEShJy42myRXmecTkpeJkjkMCPyQxqv69YyCeDHjPYaey7BNNZf99kyx5nftzwHRgRV",
  "key14": "5NRhWfrNFPmkmFR6aYwgSAWHPmkKdJ991GZJKU6ByavvLSK7n5tPTGkUcqvYdWPCw1Ne5cwEP8Je8AfZcFNZaLjz",
  "key15": "24fAWezYQCuFDPrScLJAK1wniWaAcpXxWW65N2RVHdc8Xpx8xr5B7quEFbeW1U3c1GKihBuy56Gyfw1QdLhXzEam",
  "key16": "ngaZ2u8nXm9Xc977k2EekLouqcs1DuAuhonnfGwZXxzWPuCRa7nWLWMqBbqxBwfGzGqGxwDy36MNaDQ7ERwHXew",
  "key17": "2rXvpFESKRymWzfgryU9A6j2gqfnzxBF3VLb5RfHXt2QT7c76DTQXQ7doX4Uyrdwr5m3FPyAkMZRxHD8hxJmkwsk",
  "key18": "4Q2uocG4yLzfv98o1g1VVB35njJHJGxtwjeR1qZPjt3FCwt1KXApaBVmw36DaKkJN6ttwEKSBySzTvx7eX9RYXm6",
  "key19": "5gJSgP3Z9Due96yac1FsKwntyqwnAtaphkGqeFgW2m1bzLwekSHPunQ293murhbwF3zH7ZxhQJ5t2GNEMCdmRi3M",
  "key20": "5srEq47YfADJQTkP4F3JHgV14EobcHndrBTjiPr8oYep3mMuRCP91xDnT5by8MBopjB1tJaX4n7DqTc1R92LJdVP",
  "key21": "xV3u4GYQyrPaDcsHk2D9BQgVEB1ZjUCf2Z4ToZ1UxBQpwhxWGZcLJzfAyTTbVHsuiALuhjMtFXnLa5SC2GVSyzC",
  "key22": "3U5BydjVJsChrwYLjXeerz9HJgDcgSehEZ5LbDfgeY8xyAWp5CAn3MYNCQ6op6SanzxVymHeFhPJExeNzs6j5S6d",
  "key23": "shaMdz8RPpdwKWXsEEL7bjMYoctqoZm8r5juPDkBhmN1TXWypYPgbsykzKqwBhrDatsgRwZiDPpwt9vV4U3QLNm",
  "key24": "56rVvPnZny1DR1RHfc2t6wDNa7iPa8PmxPk7L7dBfKb422FdDPv22TJ46VvD1gUGDuZpwfY3fStytrzRchAEKm7g",
  "key25": "5m479tTqVeUqLdSdHAKWGXcV99dEeRxLW8DSxGHBzVe7igrPh54dnyLcHer7qtBhcvMpNh4B8mPtc7ns245vJxtp",
  "key26": "3GfyDDrRF7Vwbyj92S6SFkmkT7Hi7Nre9tqkLgxFHaQyfC8W1pXLbLDJenWwio3DhtKpk5KLZMM7svW7FJuXjU4u",
  "key27": "5hwnYTUkJDYXkPM1YCPtYLXzK7ky32P91KwQS6FZUXwdDRNG4oByLYoWVz9sLjgRaKJnxmSGcGUwkJQDfCAkmAxm",
  "key28": "3u4rPnamErAhZBq8pR5A5oAPE48BSaiHowzXA5b2FkbwTzxvLvS991JYW55ykr2b5QqxxhApJGufsbyFw1CpZsbU",
  "key29": "29bg5uSViZUWGFGwbKzpY2dCWhr6X3ExYdiYsos4jXTCBihKbrm8EC5gWZDZy8pQXPJuthzpM1VK9sjfPFCwmJDf",
  "key30": "475XZZqGsSzQdx8zThaKqaSb7NbT2tVWMrSS2FsgV6tVeMcjTJwzBCgYQiiXCHW7myadmRb1GMGq5Cqbkr1tGBHn",
  "key31": "7ByQjn8VzcCYSNvSJDdFHiDvinaMjxe3a4Nkhb3jMwf1ppATU5CgAwLX3P9N86EE12uxUwwS5DP52jH4Ewg29LA",
  "key32": "4CnKcCbaiFWML539AtQ7BG7c15oy7mZDtPEnxR1rufF9m1iBP7pKb4G9Q87TuxFPvxz4CXvorBBZhbfjbgqhA27i",
  "key33": "3WXoPLFDoAem9i5ndPys1XB7PjwPcK7G8yPfqx8zDNGnQXPT1bacw9i1zHQyr998JcyQGtFz989UHrPtPuEyWo7J",
  "key34": "4GrDLvyJtbSVqt7gPVs2hPy6gx97qy7kVLD9ss4HHYSfvjvDHFUzt24GrwyJ4Z3gmLKQn2LKtGbkqcrQUCThnkxP"
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
