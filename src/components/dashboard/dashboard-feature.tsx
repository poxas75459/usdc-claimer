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
    "61XwHjaJeGu5DdpdsGuGJeoyHRkpwGdxjoJ7Hmzj9mnUd9GBxBYfztCQaFFSs14rBxXdmqiaPotSQQGedD76Wn6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wKjTWoVpAScFBz1wrvjLzjNkUp9vqW5zkxBJiThbR661Ef5EfWCHSVdFmWCReGuxXhuBHRT8wVEomjR4GA6ZPhs",
  "key1": "5s1wacX8hEYVSVPunMKjcmBdyr8Cdne3Zt846QBwGT3axDVR9CygGV8ArezTPDyzHzQVzLdBpLQSEvh5vCdHxj9Z",
  "key2": "DcDoB3FBbqHjpzB8ggboHPJqhU6Kq5cKhaHRpx6WnC4RPNYpRvwvffNGWb3zb74RLByzXmxLh3Yp5RUEjJoJDpS",
  "key3": "3Yt6W1FyC8TstHt61hQNU8N28DUHSs6KXrH7FsKAAkBzCCMDgHYiKU382ELzw59wt5DUowcZymRm6BpimM174mgj",
  "key4": "4ouFJSWvboyoDUKeTJVp1L8fL4ecsyu4HeTUK6xmVGiCNrQMaRrqcH1Thqx4tHNncP4AKNDni8fFoD9K6bnUsaEL",
  "key5": "5ptFm7HdWwjq1omwari8ApCyHwTkwrHyWGvQmYPTmPSBuTiRsSWqDjTdDyfaVQarVfqWUV3gqRg6cded4wtKgfwg",
  "key6": "5BzrbeUbg7PwddxGoLmZDmpoPxXhyNzrEm7aBreEjbBK8xu9dviLyek5jFdi1FcvYgeBhKpS7i4StygbY53EtcRf",
  "key7": "2SqrbtRsHmSsPRXqVCF6VbjwrLg4jUuD23XzNfs6y4GAGnEvgfgdv1PzXUE25jnmBcqvT85dKXC8kUTS8415MvsX",
  "key8": "XXwwizXHLNKkuDqV7ys5GVXwBVMMjT9vsUDG9Y7TgQ19dBZ8VB5Ds5GoozGiy6Ndrzxq5u3q2SvMLrrge45jAvj",
  "key9": "2PD422jsJJjmZzo9t5xRatThqMGeCF7XEYfgLYtkStJZfRwRSrCpL8tLohGbjMDwZLoCysM4iqYvMiygq7xhHjZJ",
  "key10": "3bc5YZzwJaKwFxMKnPyemrnFyVfxHoQSqWw6U8yXxe8sVXtV7cYfuPkZnUpmnn8s6G59eLuawhcQodMyfsVZZs4q",
  "key11": "51WA5zw6khVaxrGZ2HYpvNZC4X4gc7mzHc7qDCgZGdJQ3mLJWgUjsVLUjKvRtEWdcb7ufTwFGwbgMUMPXsqwsNA7",
  "key12": "3cP6eP6PwfcrWn2fbk1uSwVtDFNth5B71U6paPKKjtRFVnwKkeYWpBpptgQQhN1YBoYGE33D2N6H582dPb9DDbGG",
  "key13": "5UMvZFJpRx37xn6jaCsAwYYmZFguHYR99NYSkEDZDhbdFPS696TTSwii9qJvnC7mwG7PAg7yiio9oBcAad3FTCj2",
  "key14": "2ZSvFemtwDpKnTqvQJrwdzwnRgFvkrmsiLzi8SvRPjSgqbM3JF1hYPGoqbT2TPjuVYfZK29riT1Hd2grYxQSkiEz",
  "key15": "4PHEjB2rr83JNiVwj7u3VbP18Me4AEW6mv5PdizpqJuMYEjuiPJpandH3Dwdj5iUjq9QzVH3TTddwqVBvwyeNQad",
  "key16": "446Kf3ZEviheUAwvkDRJWb9n4e62BgvrbKybEhF3sxYyNx24nHARjKEAGEQ5MVncpFN9BKwQ8zdyNVea3qxmBs8v",
  "key17": "FCGuXoe36Ec9geLvU8uSWJXhqPJyQnTG5xZfRiQM3PU57XSmuFqst2EZqDvVhEZRen5E7iRhBXPRk5K5QgU4t2g",
  "key18": "4TShDbXGgjjG8V5XgnqdXjiDvFsyB5gyUNK4uHvxhLGMQBJVx3f7oG2bVhXoVPoVg3DFrRWg3Qn6GHRaeaniZX5V",
  "key19": "W6v7JXBpaHNFerLtpUhgiYNrhoQfR9W76ZXsTYxYQQwskE6z9kjKri238kWBrjJWmK14oB4NYK9TC8HJM35evaE",
  "key20": "TvLc339tZCTNMCcXszjDBAtX3WyD8vBLUuw6PbMXB5jjUY1r2Thgs6LvqfecYXJsvHyhzdK9RYAvWDvZnpMDRGn",
  "key21": "2HRDyULtWpnV7x1quQBbCkHcpnwz8Z8U5BsYwEtd3HwYcwNzgogaWxPXCWSEXymMhQUynfYcTDcUCt5J98kbYx5u",
  "key22": "45UebeadRB84NtHY6XWA8uSr1DQctqSkpMVXLZgkEJC4zpNPxmM7QcCjfd7iQH8HQUWhh2pky97g16qHBo8Jq4Ba",
  "key23": "3FcGXpPqsrfgUVLYb3PJTzS3F4i3fNFuDy5wvr8qSaW2E2kUojmqbc6Wys7SVfBPLZxePenfiYEZNYMJAxsSeiNe",
  "key24": "6ahvnQJjZmeHJAKjmChau5jEmbxnsRqLEDEf9vgFUXA9hZHpUFJLUCg8VJtbqZu5e1qTDxWrgu4jHsA9853vfDH",
  "key25": "eFaZNnhgrr1EfRRvYMKsKuHWxUxncVLwhDaVAJKetsnKhgfbsC7EPopFkzx8VFGPrdGkJze3at9GADQByAozSei",
  "key26": "5SqME41oKLJCYkJUBA7hP3nw3rexGe3tvw5mUyawTv1wDM7HqRnrPpCMEJM5jmXRkWfb4FgeDYmukoGoATpRkzdS",
  "key27": "QiVVrR6rAUsXn8c4KkSZ4i7RUHmLMKj3DT79E65Lj8k5YatqimQev3W53oiofhS3zcuaEDsGsQzJsQiav3bajLH",
  "key28": "4PAkzdvBxBDMs2b4Z29LTM3FTMS9CiqSTL6ZVP8VyPCLQZV5h5A9YTHpawFtSHL9yw1dpSmn6doXtnUREyxjeaM6",
  "key29": "gdgLUfuVyrCw76F9jijAVVG7KPBEsGGjf6gnuYSoCcuqeyspNU9Hq3X99cfJSxpWiE6wzPSNj4JvwjyvDTrKsC1",
  "key30": "2BX7ZnEAhvLXNEb3acSmqXKf7p7d7VLZsYwYsK6uKJsS9bTE5C9iQHXzRjGrAiAdDJpnvEyGSx2ggbjyEpPbJF9W",
  "key31": "5q4j2T94NmsFcSdMETnwcAm7h16ZtcsNEVGvv8uctUWYjCvuDiHzecVAVxWkUnxXeVkFvgqjiDKC3vh4e4o1SSPp",
  "key32": "5cQ5cna2wGGxn8aQaxafWiVEjiR2kvE7cTUAmqyw3uMrJJ8kRsj33cW4Aruaav3Md5zbw5vDCyWuPCGiApuSCMb6",
  "key33": "Htv21nxeFfN837k1WbiS54u9A5xyf4wuaVEmeenSgQ5JQ3qX3EzSgjx3JNELrMR1qyFGXdGDcV6CWJN8XEP7paH"
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
