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
    "vKSxfuR8UmwnFksnpVMa7ivPEt8JNYdXm8V2ZXEH7CFDHJv4wb4RCNZen52G646UaKnwhPnLa7VNurVcghQTpEE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CGVpSZMUxqY1DLCEtcdKDvTJ8JSAXyEJ7gz52eJUhp1JepTkqPj8nmL6wY1Ga7zGFY9LDNXpBaY7ZbHUbs42Gv2",
  "key1": "57rnXg65nVt7mU8SZ2nyhpC1YCqiaHGtDLLFN4fHkXk9KoaBgNrAkWush5GLNC4XNqCLVyf94kdouf7szxhB1d9T",
  "key2": "u7x1wEQac4cVhXTUYWPQ9V4wYpxLdd1SUAcSxEzgjF1HE1Lc6riiEqJoq4dUzyE8f7VL1fseKhf6kXS3NVbCYt3",
  "key3": "3qczZu5NKfNsVyKGo4PxCZYtcF7rTpYpxERYFrD8JxDRyz81GVvM5TYf2YALPqG9fgVqjyCn8YRxVrVRGFPcyHTT",
  "key4": "2PmedmzCuyRtiWRHZL1YAnsrCX45Hvv6KBKNdGShsaALGCPPegrx1w9r6gimmyRfk2XMAz5dXU2WPELDqNvJCg2H",
  "key5": "665EDb4Wnc64zizgLv6P1y9pHEumx3rg8AYeV4ndBe6VXXuEQeedcjX7SjN98edNcbabSesTgSP8zqCMS2vnpcFZ",
  "key6": "3HGWpyV3Ciaq9PXt4Cv4mVimMa5NyqzSh38ZadPsaEvztMqXaizcC7NZeGP2TuZYA94FUX9VfrwPJYvZc7Nz8k76",
  "key7": "624Fbbf7by2cqTqta4pkKkB8rsEPoycsPQvGZMSCQNM8AAWipNtXzbrQqnxUSAtEaZ4VE7APyXp9Trd1QMmoDjvs",
  "key8": "4T4aBKph7SDDfKJQabfcP6C6cdgJ1kJE4Jz3xEmk6cwfR38M84ijTCUgzTmPndUErtgSpAxaBSY3qbFgfY8FNiFk",
  "key9": "2KBkLtayvVkoGdW91VUw7sMV2WojtP8jersYuHBS89cmBtCscyXrLgredKpM4r6cxPGdYg8KEbmGxcBUV45MENTZ",
  "key10": "R6juJQZ6Q9uBup68PAtgfdPLBdLMyqtLsQeYKk6jWFQgCyhsxaVrMy8H5MwnvuJFkweFb2bSqCwH4VuypVQU8NG",
  "key11": "2ohg3QzktjJMXeweDx1DavWXkd2RZRb3RwSfMkiZ5CHZjT88uZHKzniAmTxW6x3DHHaQc5rp3HfpfbycSc9rC8kn",
  "key12": "5EFjnQ9vntvkE5uxbPcVxiVVtnHQ2CPvqqD3CwGPSPMx6CgQovQYmMwejM5iPsFvfjCEqbaiudTsNYMJhdWa8ysc",
  "key13": "ZCHsuk3yuYtAPZaCJqZiGiwYH9un4y7dmrapa9iQfC1AyAL5HEQDmZgU9NkXithBsoKXc5iGztGtPbRRAiJ82wd",
  "key14": "59YWnu31ksKqLUSRMhvELfYTBK8zauunM5bxjhx6Mpj2h7xtmS5Zh63E9Jffda5D9EjXoph7y6ku5ZbKZme1omnu",
  "key15": "5mCPwKs6r94ZUb9YxWxrLc53uHt2ActjbXYfYuos4q5z25Zfi6tmsZpy2Da9LXgga1HUGnYesPEZeRj9NZ7g2gdc",
  "key16": "4ofKJT4JHNCeGrpPZFrSEB1DqPyozkcVHwwm9998LArGokLMWdQmMsZy44Dt9RqgAKaWHKxeeq7LH5jsDFv1oviJ",
  "key17": "rsAc6AKPQ3xXzcudSwub3AXZVdm1CknJpeXFVMaKdqmZUzDnL2ELjX8ncdkAkS592YzthJhDVZTxzMcKyoG1ys2",
  "key18": "5jLXzAftT79La6Jumde7LxAF21vmS33o2nXwFndLFhnETbosNmCNzk8uMvPQHVnSr2Y7cK95DHM88iLzytcUwMJz",
  "key19": "55rrpR3NmEuERBvfWZ49grM74UdaXm364LJiJ8dat6pdt4JTuVX3fkpSRepfcpkxmW9Ci5MjsPFb9w9zFhPcQLYF",
  "key20": "47cVGJaobyacPtNtc3QkFArax6Hvx1M13wAN1ozYYog4huYAiv3qUYjR2n3S149kHKyXGfSA5YVCQufkTPTKosjJ",
  "key21": "B5eMc4pZw4w5BLrPeBtdDGegnJW2Ntbwma9Z6G7DaY5h6vJrhggbrfNBr8PboCxZfEXUcqhUKRWGTp7R6JWaFSE",
  "key22": "2CSFfV3LSjeff4bXQ74YSYQh1tyso4WJsPeLvywCd9WgJ7ju27qumMdApEkDyU8ZvaRUnxMPgi5uVkMqkAceRHD2",
  "key23": "3iCqwXvR5s6zfoJdZY5ytMLWQbJmBHTxtNnmKNTYbjJ3ZudaJXuvnyg8t85e7WmukKEiJuPXtjqKmY6sxdkQJYyR",
  "key24": "5kiLWF2QpmUq8r7NWobxEbVHEeQ4kY8rgNKNdJ5MKCNChu9MmhjusKtAXskuB8PzG8fuQV5YPxnvkJTxeTADTcvP",
  "key25": "PKyxxVBMEaAGdvchhR377vU9tecEcy9GCik7nir7QmRMuMBGwmcfDnVJ2EDLbZgiSy2VTVw8it7e1GBuxNQ7Z39",
  "key26": "2zLGTrMVispMSTrXWF5VoucuPrXLgumb2FG6GNsTmW5J25a8eSD8HeJd62PENtz4xtLg6xnDAvXSnv13658EUuZh",
  "key27": "4DsB7QcKKkvpWMgTbCfgQXPqYtFGtG8uM6DoqHFpzUbNNrzZMijgeCgfQbo7Lipte2Yiv2GkTRUSYCs2kghRSaq6",
  "key28": "Ds6dwWJxx469k1oDJJP9hr4jnfR7K3z3itdWpfQj3dwZ73Y4kDMzwCwsoDn8tiDhs8pywhQsCUkfr8j1WiEeABB",
  "key29": "2X9BmxTuy5wwfnbDL7uoTyCF6VFS3oXXXYpjVAsiksLTForBgupsVHSm5omGTLUnK3uAzFWN3xb2qZfBkHBWJvji",
  "key30": "3tM4g6Ddm1go2yeXr1iRnUPaowkohnuRRexPZAgmFemn8ya4x7x6e75B65eCn9mNj2ZLUAxw6RKQ1MmnS1kLKqVX",
  "key31": "289mM4kGbfDvAvGnPfp7aFyrd7v3P8dG977fxURWHfwcC1sQD2QgUG5o6bxY5dmJ4A1vYpeyWTrdGJxPkwo8vDca",
  "key32": "4RJ824Te9wApmuXKpcPfh82Qf8weD9WCBs2TQwxP7o1RR643ZMgntetoejKm7wA9aNBcReDPNY1TDXQsuF5sHpAq",
  "key33": "2qNdo8ec7Nj8LTYsHwCN2EYcxojBTLMoAER8UDjaoVEeHTwkanqmNEBZRM9VrjtxQhxBTayMX2ovQP3SbSLBwvgV",
  "key34": "3wBQ8DqGTfbvjJWKHKsp9STWwwQqLEtNPqkjXXwAoBhCaCAThBshm7qK1wZCKSiWWdUsHzL6kC5e5aUBpKujwRxp",
  "key35": "3jSQ3h3fJKVHPY7hPzqPWgA3Ww3Zpops2H6ZqUNTf5C2wHMie83MLm8t9ZvZorpMQ8BV1XnRipfULK3CNMjqQpgP",
  "key36": "RmX4qaMzCrTnE2A7Ys6vDQ4cA2uQ1EuaP2GKS8wWq2VJu1jdX7eTqAZuNVtCr7QYHk4XDk9WUaVnv5Cgrbvin5e"
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
