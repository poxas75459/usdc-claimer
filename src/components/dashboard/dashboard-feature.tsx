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
    "4LQyH3cXFZYvSsYaU8UXBWxKWtr67r4mVMzHMXZtkgnmEwarkrfrEGahMfeRhDZ9EEJEMgqRtjnVyqWZpWJz8fKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uwt9Sfph7FU3YLvcSdwaeroKFvXXRGgztjyGFQPckRjH4njeDuUFttSiiA7wgBuq6riVpV1yvneJJC1dadstdoS",
  "key1": "mYWYGgA27eJuFWd691sTFMeETXpSMBTsjG1FyFvhVSBbFxRb8sQm4YSJL9hNfmqY5BL5jZKbevNMcBXgjGcrdgC",
  "key2": "3jPw6kGPirwEdLW42PdvaU2dm45skxQdQHd1KegCFxVDL6LwmbHJgCi1nnoAXCYWTwmKbS8pET8GXYDdnxeSKonB",
  "key3": "4bp5MXFnjK3Kkz17oFFHkiN4GentSTRPcBEe3D3DCL8gKpjxY7ue7cy3j6Qxta3SmLEXYtvgqGwLtEo8nryuLgvN",
  "key4": "5GeW44LP9cgTmRjqob1Eh4MkCqn16mczKyg2hFLz2YeR7eQzETLwgVUM1GeVd8GekkoQj6UEJ49egu5aF33x8Cs9",
  "key5": "3kyQy6apm72mbazZ7osx8uzKZWQWWWqGEgXaAHfFjtitQXeYYcWw3ESgipspkCqp44PtzJzo4GShHRZW9hjvFcpn",
  "key6": "4mB6eYn8oyUmptS4s13ecDdNGAWJo2zwqAQFqa8XECtR2MmQ1PneS5RrKAXdpY9ajC2zp7xHvU1vzwta8csodJps",
  "key7": "5rz6dzKjruZbAcjH7MjxGdRugpMFX1E6D49inp8A6gKk4DYz4hZibvHMWy2PU7uuXJmGy6Qn799gB4vY9bNDnCjB",
  "key8": "5LECPb8oZFzFxVmL8jNTvt6CkzysT27b2YeqADSPZVh9TJFko2DDehBrhorfC1WtahWrxcMLWeU8KotLuafBDCr7",
  "key9": "36bRNLKCMHXwHYtuqQPHEY4c5kJQs2XKtpV8V2VJUVR9x3S46E1ugU8JdiH8bSFDZsLMcUecfseFg4W6nsaQGKVV",
  "key10": "4isPc5X7Z1h8m1syXYeqBpxpQwozYEtSrKCrCQ5RoJEbtNxSzaq4bHxU6TE5N6bDpFuMQhJfVUwrRnXZHEXyFB7b",
  "key11": "C9ZRvFSMBGdHTpgwJRi3ZayioyhEwseWDMzmmBRuZ3dAGeAPBdRNMcZUd2aVU46dupFX5La1cSccBd1xEZcPuKB",
  "key12": "5uNxoYiyotQNgZPLDD4qqEgHrtFnxecQrvyqej867YzWoCeGU4jFXyRPXix4s9A3kh6ik6xnB9ruR2WBvZiPJUBL",
  "key13": "3aMVtUuFg9kvPGTptG2bTWDZWXKWhye6YGVQbi7BswoJ23sMZJeiXARayYGQWPRKs7KoEpUyhsrXYUDQGnYagzKU",
  "key14": "4BTtHc42hDzuo7ectLjJVBcFpG3DD1KLBA2jRGPPWEUcFD1YU1Xyk6CjpyB269C3j15UcXYvvjxMWCPwUmrF3SGL",
  "key15": "3hKYDYTQGuNEHaaS33Kv2fq31RKb63ydAXnJyS7NfGZ51J8ssivek76bLckfzAi6xrbZxPBMi3yUmaeYf443Qn4D",
  "key16": "2pvDNy4cTBARn7g5LavveSsWn9ws8aXhmxngpdispyMoZgoUBBWE2AF7Ucih4MRUCzMXApCAN8akhEDa3KrYiHMG",
  "key17": "4QDD6youZetCYEY3bygoWDcHPCBQcsyUk9acrb2jX6Ln5mBTSncTeAyFANqYY6Hk3ZdNxY62paW7xyDaLRJUvBsG",
  "key18": "kZhWEA22X4prAmMdWXud87DpUzQX8CcM6KT4Z9dX3EbLGGo2TLypdeVK6QBozZvQWW1bnDDBQej3ZfppS7tn3Li",
  "key19": "5ijEByAyja3kkRBdP4LihTz1wPEScpP5HGhDRvMfd9hGmJv6fiGSthcu39N37SJzkS1r9k4wBu4QjB9BpFVU3QAD",
  "key20": "3RZz2a2uFU4JD5pe3H3bZCdSPe5bb2CoNYrjUHSE18FUebmxzXk9CGtzmZAT7u7Xkcq8wPfb3QDKMdu23BmgPxiF",
  "key21": "5zpCJZdfojz97FQaW4QSKEheRE6gp84s3qPYZPXZGgh43CV3igpy76U4ef2WaYLxQ5jiq82Apw6PZxTgxwnNZWpx",
  "key22": "5kwqUPxvwyzNZ4r26QxDmdJwJSntJdJnznsiNyGCAZiZKh3BtWoZoNBYyHQEwDvpGiN7GWYBJcyS9z3RkscPk3MR",
  "key23": "rgGGNQJXmubskr6fbhqR4jFw7rqQo4e4bi3aqMzpaCMPhMX9AEn9mssjGwnbWoM91qWuB1y7KgnqkzHe8CR4mKp",
  "key24": "5vHGED4s5Dv3gqPuBBVbLBHGxakSA5cDkq4VcPkVJWXFubLP1QPMZ7wj7XzjPsdKhVZCwpGGqd9QW8jyw79AmAmu",
  "key25": "4EHDgJ5ZejvMHjNJKLyV7jX7QDPToYMpAXcyBtthZuJaFGbcqWNUFf5vQa1f3qX23VbXF7fKq79oDMijm5Lncp5o",
  "key26": "iaLQ5t2BTbCHbPwy6s2AP5Nq7i33uLNKTECqgsd2wyEmnmUxAnMZTFf6nnNR8baiPcCb6xKjQatcqYctXmm31i7",
  "key27": "5MipCY6uAmf3vxdPJ8tga88tQoxtcF3DYCVF3XdBmh4DWRCBPVgWXvbSM9XrXmQ9dwvXym6FeGau3gj5Yd7MSLXT",
  "key28": "3qpj8zHV6zbnfSj7GAHx54Uxi5EAWgJTUcSreVkkUoCj8cuTZhEYdcXWyggR8PefWDq1rBvZSuPD5m7vKCxc4HWP",
  "key29": "4LRcgYqJukK7eSWcreDfdeP7Ph33hBBRayANRjzfx7aqkvGaAfVxdsXsaRTZCRkA14odNHB2CFVv1Y4uW1X7P4LG",
  "key30": "4T6FDDjtTQYyVEXnYVhohDgyLaxRJdByFN6GbY8yb4Zo6M8wQVNwSa97fJQAVh3Frqyjoi1cZe4AzyjfMBinjn23",
  "key31": "LqrtZwrkmNcjhdr4uzkPkRFu9Ziq9UPUqGSsu8P1wGmG1xmdf1NbZNwgnvqCos7UUtS8T6YrK27smg3nSqcs6nG",
  "key32": "3WaMhgvPuMPtHSBiXhKREEVvV6Er1qLrYGc7LoTbX1fByMYfrxWpgF9TaanyJLu3gVDuZSSGzQuaQ6ykwTbSq7Ce",
  "key33": "4eSFVKeNwH5EAy5TVksswtXxmygmUYZdTVcRSoQwMoNGdvocxwJMCfP8zxwZ2vJhTBEa8xfCfNY2y59MCYiijbNS",
  "key34": "46w8dUTEqE8WjgpLdf8ZAjDhrsast9qu55zqtYfwabrUqEG6MdAVSjSfDjxBz2sjSSRywisf7VQ4fwxiZ8BmzYCX",
  "key35": "4JH1Duj2hZYwL6819Fsx688n215r1dGFe5cjE7v7hvEpMHebKtYrM6xy1gW2emKQ6NYcaBUTip6rsZ6dMejBar1C",
  "key36": "5JqxZqW3t8C1kKMnFpwLFbJetYihgXLnWS4LAKNhfRiBPMpPK1ALQnauzG2EWkr6ei2BxzEAZz9hqcQKqB5RGPwD",
  "key37": "bthRMN9vZh6BwdwULB19YRXKFsv8kmMnF7zHZuZpZQwg8QqXxwpy93crwiqQBaTNWhxg21WuMLs4t8fGGQF8vMS",
  "key38": "2TmwwigCUwkgjC8jNysr9z6EGJqKXSgZqvpwqCqWKB7vGXspY79H48hVJYCWYeJwnz5tz3ZC3fSWGZ4qoMrpKfUN",
  "key39": "4rAdSB7g7a11WLd3u3PM9jPPEPJqA9gm7X1pJivRJRaPu3pBCKvFKC8tL5gCdsHRmL8xt5Jm4A3d6keosAKhiNmu",
  "key40": "4EWeXu982goVPPabs1RgThBR9AzyEyvDnYffssX258nceHm6Zhm1rkkLu9Q6LA2fZhNxM11Z5hWqHj236cdcvLsf",
  "key41": "2UEdvm2oFx2N1FGDUui3VHq48d9eMEW31pucjg5YsxNUS3CuCvEfRTAaCGq5Jvww7DJu7ZzDD5yYLhj1YUm3CoJf",
  "key42": "YSqQ7oFw8w3bK4QH36JCt8xFCuaLAxA6zrpUnhFbUbTDW2iP8p9gFbKBMVNxApNuRw4mst7sSNAkR2NarTigyUW",
  "key43": "36AuwKTUGLyry7HQTRZReeEBkj5wCTUGRcJbEbH65vGsyYxHC33gVv2Y858dg5nXV9cCZPh82UNiqm9kVBb7pUD5",
  "key44": "5S4GHLTghHbEqCQzUimVWxsSkdPto7qS3fzeuytpR6zyxZMNCetuheTCXVWwe5qhyAPBpPYHNfJ4iAeeoyxpu5YF",
  "key45": "5WspSF25sidCXQ6wtwqUTMJBhdHeoe9sgA888fb3JFZu3U15SqMd63NJvTNmY2srYv48g6Ebq68DofpG6koijVP8",
  "key46": "4H9N1W3zFwpYaWEvVTsZmDGzMcAKEcVgh5DywzMMjzAKVPrQR3KQCRUWnX1DbJg9atHqQFSB3omUuxdLA1e1SA28",
  "key47": "eaNUdTv2eJ9K2CGAaGDpHvbGjBFXVLC3wncDgAkBa8Sy5qCPt7YacMjF5tTJf1fH42DjNGKvCBTf7hVrAhNgncv",
  "key48": "3TiqibZURoZ9BY2hGavbcV9n5iBhTJDAGrY5aZkcvc2QjMu9PSM9RvanUPHbNrGk4pyytoBqNCWbiRAdWVmjWbxK"
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
