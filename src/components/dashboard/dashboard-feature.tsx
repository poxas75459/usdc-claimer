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
    "562jYpbSZXrW9CvA4up6Az6aJzTYKEsCrGLyvM7z9cht1Y116kFEeqWrB2X41oHcgshTw4VjPsTd2u1qRh6xtUdQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "454ka3s1ccYbSNodzeaRnpbaYiHa6AV46gW3YWF8AejgguqDDeKBbDgoL4NZbjimzpa4cADe14yp5CYmvRdj8ojw",
  "key1": "3s26UxgZLpRR5yqXG3Z5R8cHuxnMNTsfvj6yLMAgBWbbPLJQ1HMWUX3SsuzHVhakDYMuokMEMzihuBrP3XobwqyS",
  "key2": "NuMC8ZFT3zCwP4ucJBo7zP9hReGbCZXwE12gVAxkTLd4RtmYvPgicNTTZD9JMfE9687Y4d4G6LTg93S462iQppz",
  "key3": "5utfUvpm4JL4WxSQkbET9km6SLxKqRJ2qv7puBgtaRmM86RXgnrkaktUEJQc1jvXpSmr32NXcgyCR7d7unX5498c",
  "key4": "5JPzPwiKDJvtRqz8ikJ5rgcDQq4EZdsWfiqywPdU5w8ZaxKivYTVLA2m2cKnR1WJx6SEZDYo1jjB1QmvocR5wxRC",
  "key5": "23ZJj93Zeoqx1CLuNpKUxdXXo5YyULkzYby8D8sjGv18xTW3ML5vDWkgUnYRNmve1i9VaugB1TKzHxifrCU8wRKU",
  "key6": "5zYdJDHt24unRX4KXHspwkAip4AM4wkLAabXaFvVBz9Z76zs3miuq5rWSrqCSDgHpNavt5CWJD6D7BqGwHNzZpQE",
  "key7": "5RpWGgfDn1ofdvy4TKY9EBnVQo7FfxMzCvvPWfw3Qk3hDXgAwaz8HKj8Dx1qDuxWaCpvKtW8PqMRhMC85uy4nyBt",
  "key8": "xEuWB4m2ceuUaQv3VZHfhGWV3P8PYk9xwLmpDZYnytdfiAZjAKpXmrvfenguLunxfCD5yKJdM9S3uLAWZ24z4BG",
  "key9": "3Q8h55trZmtbUxVaH21f3XnuScdH14nUz5ybLhpeZsWhu1eTGjZq4wFWsqWN1fE8kQW3ZGvzAD3kX2Bh12hMEtSV",
  "key10": "57kugv9XXPp4sxEVeYL8qRV3zLvGCv53TNZqQsFTrRMbzGn4mAmWzNfxuoVywde91Xr9qCjq13QJGxH4WtQDqdM2",
  "key11": "2DRedCmUqhQttNwBsUN4UjZjw6AhPbyyiqsJZzvE2kfhtpmf9GDLp5EqrU6VfrDsF6boeBS4UviNnDZsA4WX69mt",
  "key12": "mMnomJ5anVb4wiZ7EgZkZFD3TYzpb5uyAbwNmXaTUCxsZNfUtSr6YDsdpBAJV3mQB2r3aE869QwT6vpATDLkXzN",
  "key13": "5oJMpwDMHsnGcKjDcKS5NUt3x4ZFTBSsLKgrFYp4QTgrW9Hsn5zA4cXVk7B8eWqoj4h6N61MExFrTaJZFf17zSwu",
  "key14": "3uNRbn3i3u8y6gTFSDw8HdAybnGqrbiinGWv4Xk6N69vyDSemAdVPMpq6BjkC9ChdWUSATxbKJeS6Xb7Jh4PgqJ4",
  "key15": "2onLtbamiRFNZJgg7F6JmCA4yEGUfTQQNKeuse6L9q68BjAPsQquoYwVBp8pY5evhbMNcEwpzdfiVyvRVRgUkEpo",
  "key16": "2ifBPsdhhCEV8ijXbCSZKQELdFBNbjuVhbiMXjgov3SecPbKtqJMxYYSJhiX4Ta1GxDeMcbfPFPVC69DpwZzjnTV",
  "key17": "2XR56RAJxFRcCx9TaJQDjdYesu1fsgswXVc2ctE6aVqw6vXUKMdfqd3J1gRcxhF1BjhTyZ5Q78rghHmmLxJ6nEpC",
  "key18": "Rb31fSqzr7nd7sHhZrdkkVgB5TRQHRFvjNnHU6oDvAAdvPhwhDw63LMGrNQPBB2sgVh4JfBVJ3yAKnw361WtrvT",
  "key19": "VNvSTTY9LcGRMuKh5AthRcDs3yNConsntRHJwJ59mXL64kQweECwsFsWjpBoVNXQNP6wM79UmpM9QVQhWWWLKdy",
  "key20": "5WC2wPyJjKHCFQu9UkuvWpcnXXMLzJazfR93GhbiyApVPP6gEcQEwrpeQCF78dn7mztvdePHCcX9YhZ6nUmU1ke6",
  "key21": "KVxsZTTHbmYWFqZmPopnCz1urUXDCtd9ynHaS3Qt8eAqF5PbwzcapAovtJja352UuHQUf3eGiv6QMQzxJCLq7fU",
  "key22": "4r7ix5aWUUKfiyTchf8Xk5cK5XQZ4aDa8LqEfL4KyjXfx5uE9cBmPZMinamt2iYVFcMx1zbtHHbARZ31NLUYKh1v",
  "key23": "4dvsZptPURRkXpDgak73EoW28woVkDMM4ympB3TcKuwL9hzkbD1PieFgJjqCo75knVyCGU56TXZN6p85Bfcm4y5K",
  "key24": "2PmgBxAP5W9GtdvBkzErnj8teFMmcnF1CCStYppcqAfMrw5vUSCBM3zvVePkVu558j2c2bwkiRYTas5Dhaa3BSvZ",
  "key25": "9mbXyNmA9bJWyQRGEqtHPPG6NrfXpKDyqviyvbwqbt9RrTbBqT5UoN4AjGV7Gxe5HXNvjt5acHSdkQ87a3rfHiF",
  "key26": "5nL3oHeA9MCHg2ceTEZa3NLVRkShKFSELC3LZPUsF6iJhCjpBoM2BjwGJA7NemL8GRRfsFCFBh9Tbn19XRRKP6wP",
  "key27": "3SmTEiKt9nhzLoP5Mjikhq2tDqJToE4NmeXicgWTCd8XTvYvCXveDBkS53WpCqhLFKnUCAJ5gcxnR2rebfiMtK7W",
  "key28": "49kRzh8Tpa1x28wPctY2mWYjKhmAmvzaCLNvGr1TtjJFThBCYFP7xDCZG4R9sVN41CYkpRUbbaS4Cj1GD6VAP368",
  "key29": "4YhbWJvCR92t74Xfyk9MaG1qBrMh5hYVDU6BeKFVuTyDexut3fV2Hp7CYPEuZVgPfdKByLQiFm55gHtuYNvSz8iP"
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
