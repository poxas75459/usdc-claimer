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
    "41Dnz3zL6N5K4sxAfraTp2zN9dGE9E6YE5MoCAukV4eemK61j8BiSSJr532z5jjLYd6cQLrVtQey4xcJiUHsZZGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34pESgKLD4vafhz4SRU78kWLpkRsywUS918qAW5zRYPQsVtKUTJ9sKMq2AaziUZf4YusgQsGXd85LNs33q2kq6Rc",
  "key1": "5thjNayEv7WnFpzEmhNVWE4jXnJdUQTLxP9qaMSAfMZ6s7qakXgyYFBAvcSmaxoynGrGcqKAicmNWYqmqt6StW2J",
  "key2": "66nrQJGsygi2bcxa8a1yRBMtrcrRuetAp7kvEFZq6NkBu2TYTVgtMwiBzBvJNPD5PjdeLx24Xe2wxduvQHXhh8qX",
  "key3": "4M4HaU7oUj3BaTq8FeAxHzcFAgqK9QQPmAai3dKMiTK2X1m2sWxe9SqymLW46qxaAEAtVJhWUc3X79b6zzruAUZ8",
  "key4": "4iKzV2HiiZz7aJthUMb4cxjYpizu4Tbb6UHC8HxdDerPrnYVvQ6zY5j3KMJ5FYoeKw6k8EybtxxUngjFCY8Xu94q",
  "key5": "3Q9e2ogwvir2hyCQc3qub2H56VvP1ZfwYxE4seNZCYr4KzyPebFABmVaNQPW6YHXC2yUNX5EPtUJeT5v4ck1ao9Z",
  "key6": "ssCLCVAKpXPvG3XEZKDz8axYzaN1aUwXd3mRbgJtXZ1wsBMyrpNJbNPvpY8aZj1Xasam7FwrM9JpDf55ot18D7E",
  "key7": "3QibC77ym3tFu4eYTNYMb3CNoo1XWTBLR3ejFFkhhhtpCk1934AsZUrGHUMjyJrpMmgpXgwpMQCXVM1JW6aaFDs2",
  "key8": "2xhPz7FbGS3ZE8w56KhZovpKrnn8sz6WAtJvMyk3y2qVKx99Qm1dPvvjd6FNVcKNvXQsrF8onGUD3hM858s3VqPH",
  "key9": "YjTJYFQxyAgbphansu773sJ855jzRbmAk5LgwNWg4iVFkXf4neALSKHmqYd2ZgfbMYmo732QzA3dEiFKBpJfdkk",
  "key10": "4bPZt87ax4b9Hcw2u7bFhkjg2KemwycpCNyKfCSLPtnhj5nSKCgDBi4tnw2uySMeimipTqhDWrm6RcHmJZSABXWZ",
  "key11": "67VogUuWLai1Ujypa3wYfK43d4re8CbUFazLrGPRB6fbnB5A9gqLBqKgyADJ1Sm7KAyjbbGbMoSCUPLdRT2wWb4U",
  "key12": "37JTzXB1kzwMJV23MUrKPeJfXPxhJui8MDfN4utMBd3Mo7wbe8z8maggwqcBQ9Sfzpnkv5oXUTE8uTdhfFsoduw6",
  "key13": "5ZkByMrm4dUV2SmKvJBcvAaf5B4LSecYahrZRY2JWsi3jdKXqhbpefqeEnzycNoLMXZBQL7J9PwXJKVM4pBmnMJA",
  "key14": "491kY8LzPHHT9SCSbp1BS5NActnZcpFwu5Uu7YSnAde1hV9ajtUexFh1xeHLpouQtLZCD1gtsPKphCdawLjcXrf5",
  "key15": "3JiapoEDC7N7BRaPyn2YENvubFbgL8LacG8jM6xZfb7HVJ1Y6P58k16Ws5S3ds9VBAdJhJpKjnRcCcgDQ9Lvh4pJ",
  "key16": "aU3kZmvAMNp2eQR9XrMTZPRRb4wnrYMy7qqFa7ycS2fBNfwek8EkbRjxFgqnMHy6wv8bmrqCXg5HPfDkBe1tBbw",
  "key17": "E2ZhanZBYHqfAcfHhJEY7EAkUW7kLhhRnSWgNkkwRMCUQtGyB22pm8nstz3kp7EmA6JiKvhVcrs4EWGF5nk5ErW",
  "key18": "46AqPZsYotA7PhRGTPpE1koan9M4pBhV6RWkr7kRtoaKZwShPedgfxLRbKBgz7xRnhi6fJC57LzEsKQDgnfmYSCG",
  "key19": "3QK65sBZqrCYByu4jm7txCRWE6oRaAqz5YWzY6Vyoa4qyZLp4oPt6QNkPYFocZJGfXQwzpPu3BCTDx6S7CzotzKN",
  "key20": "cypS891zt1s219q2fz11eLm9PBNPbiTCnkrKGbevPvRwn1FXEqN4XTDPA3zPJ7Z6jDv23STbh1pWxuBWEnZMWh7",
  "key21": "35zSGXGpuUds7AsGAhDy5Ezj5QNqqor72EazU4GYFDVRSh7dFTneoocbD9k5QXNbGqcYEzfoXQUdbXWnWNGCs3uK",
  "key22": "522F6FqkA3UQqaYGuVUqUxH7ppKFEMPhKULcZyupyQxFMPsgtrMCs1QRxt9krXDBXFSnAuQqLxWvDcpowDfqNSRY",
  "key23": "2XTJdnHu3nAA43tZVx7RVf32dm9nneHwh5sCnTZZBpSnLHqGBMgcYmYMewPmY6Wa1vyYYtqDCXuW7mVtgPb1kdh1",
  "key24": "WCFiBDozutcoZCtB8QyupEkwWLUfQSmUnBYBPZVrndedrBD3KN8G1i1znMSjV48SdUs9pEgGYuVMeii7wZVaNJi",
  "key25": "ikeVgcHzUZMMhncAkg9adbUFJjwSd44fznHMgyLKgbj7c22bxY4QbDGq1QRcYpZpZXrAENLPgq6gce5Muxo25Qc",
  "key26": "2ojRDZARRcWAYm1pD2vaNnXUDvT3ujzppHUBWFfDitxGTHJom9jyixA8qDXUaznwm9z3ZunnM1dy1fZxkcHgKw7K",
  "key27": "5EDkAtxmh5mUsFy9nnhWP4pytqfS5anvMkJwkQ1zbgXZ4yEvqoaK1c3Gh2ByxEUtVEv7odJqCWAUhHGUGhNysDJJ"
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
