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
    "3WD52skP5432hmBj5wxogW6T3MdxWqXc9xFErYHth7Z9TPyXKfd7p8mpe1oW9BWnhysWPVUD1gWCuup5hmBJE5nx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28TuaKAGC6AmzniujhAZ2Y8PtvPU28x5RJNAUEiSUE82JiAGBSUtGWnXhYxU5zCT3afwMa5DdjRmbdRroNLoH6ns",
  "key1": "9MwHbpoLdygTQrVCJGYvaShMWVvBq1iUgBpwEvJQqKKmFTDu5YUB6Kww77A5dUkD7o8coqDGSgRSPPBeVihuoN2",
  "key2": "DFb5tgUd6XUauoqYhq9FXRxYz1cwx7XuoHRPZg3J4ie2aopTBsVjLHqAsdkTpGvvJ8gJRVerkeW9a16Vsk3xCRU",
  "key3": "5XQV8sUTcBAV6v8skx3ZVC6DYoXSbN3Fp5XKJML14hRZuAgheLhe8WWDQc457y2qVLKsgK4fmZHzGsjEMCv1KDgf",
  "key4": "5h5nU3qo9fnbitUtdndYZAiTnCbxtm57GUp6VGpBhxbW8XBJ1BsJSMg5ZM85f1DeKBhppkHzty8J5GuTwinE9gEy",
  "key5": "5eMJEYgcyB3gzd7epFhoUh1dT3CmAuShxSbkr6d5USSw7CfFSRL8LURqKMfmFhhvCahCjBThQRR52HjQxigpppPL",
  "key6": "FftauoAvkXBDxmA8vEKmHtsnpc7vEkiqQDwBcQGgPnGxKg19RjNKBpvRW8KKeYFSoqbFp7Ye3quUYj5WKjZqSiB",
  "key7": "dveqdyQMJT9JTq5J6Hnxac9t3F38PSKpXo5SyxGc7cXwMdKXpHUBsaJgZvwYVGmQ7WBrM14qV3n8KqjhgXNFChJ",
  "key8": "3fA2j67SdC8XMrpEkwMkP7fMRBoUbgUL51vQgkD1XCLVGKEkyuskxeT9ZcvP3R8e78BZhKCGp6UoVbL2i3ywhNVh",
  "key9": "4i8oUnXApSG6ykDr5KykntZRRJKP7J2musdifKjpUDPjyWRGkPrBEtEP4nLiQLJu3oABN5p2bNRidbv7fKT5XGVf",
  "key10": "5M15nD35sSrsVZ4HhTcTGDn3XTMER2gR6PY8QCxfCZhaHDVLbqEpp1XceCTXQ48xKhtGoEtQiKWi76oHR6AV6ruo",
  "key11": "22xhTqpBXqzpGjtv6YiZiPrHVPcJs3WJsTagTMBoGUXainJyDwRppguiYrYLC9x8EFQ8VXjGYBgR78o2WKkhHgAT",
  "key12": "3CXzW4uJbcEDHh6LwMAgYuyvydeVPYsBXw26Go7tRLHJcShEX54go3jZY9qzHoHy2f7vQyyyDDViTE3pYu1JmDuz",
  "key13": "4d6rFo2L9xVFed1JWxtVzEKSsWqV32fGHP6Uux1L2YnWP5nk4PmrnNg5Phnknksdf4e3VA2e5kb3H5WftG8ASW3g",
  "key14": "2rPmJDncbp7cpwU9sSNcHKvNc4ayhUbQtWCCFzqcoG7tQFdrjz8iv4cxQygbuv8AYjSL9MybVXK8T74xBgwWssVR",
  "key15": "4L9eDi1a5pWpQydBVoiz1sE13a4hx73kEujH7UxT1vcWEGFoohHd5xaxUDVGeHvGpDQq7oWGonK1Xbf3ffdW1L5v",
  "key16": "2RcQeCc5zdFUDyvskvFTMF53c6MVAkGz8d2v172tUGnVxeHoxfp4Nzn3rY6PRQsu6wVc9rsxJMo3Zr1ipgePgbxc",
  "key17": "526qsKar9YDoGPHFDzMPeUr3gV445KR7nxv9Gxu9iFc4mKSMYtwYuWcR8xchLhooqCb8BijXr1oRc9qwjCsQNhby",
  "key18": "2caRe2utWPWBa7A9LAyvFW2wGcaLXGwDpawfN7tsXYjwpfQcNxV28WGFYotgKnZPQdxyFG1qQYHhbeZKDcKGSR3v",
  "key19": "2f4cu7xHkJGx3QG3xWg6k9KYunyknHfbLGaYcazr7Rj3PKPnLsZopACQpYPQ342FUnxNWthxs4vmd33xHaJYdvzm",
  "key20": "QuCkg4XE6YXACdSQnKNVwQwiy7EL1tSiRwADpdA1spBVEKASvpGrsh4o6ENxgrS62B3vz7fC5CouawGX41PUnTN",
  "key21": "gszFWyFxU8y2KXvpxEne6AP2g3M27b1tsjAiSB5RKxn3aLm5U5Pcb2KYumGCcdQBCa3iCbGNbdGg2AkJ1GNYLez",
  "key22": "3Ary3ceHzbEccPggoL73NQSitdqJkSFMhzG9NZNUUYh1dyXWYUELdfpEJSLfnkCLGfgdrbXKrtHGN1gH7TFLbDTU",
  "key23": "YUvjYcN9mJs6JkAArUiJnfHPLh9eiDHF4yJ8yEZyXBGbxPomRgKxeW5XDYDyg6MjQb2Jyz1YdJucQJFtwr57V7R",
  "key24": "5U69UnAi5kWDKW9vb3rb8xMdGWw9M9v46KYqvLoR63XHeD1s2eNBSzVbmAUwB5mbqoK11dJ3d8mY4dh81qoTdJt7",
  "key25": "65Bh1cH5wmhSFWNQXtmmpj27qLshqwzN578TQYJNXjviUby1Z9ayCp4GAzYsp7YeUwPD4vyPrQ5bqhChZ2ePKiRt",
  "key26": "oXbnFMEBcPrYHoExyb8szfcYAv5b4PYPLVJh3fWGEKm28P6G8HrNk9ZWwKCLv25vehjRmwYaMSDfNP7T6LUQA1z",
  "key27": "2w52sP5YVKhRifKtRHy9Bg4yqRCH9S1iNjxUmPSLEWtHnND2svxa1SSuKX7YreFCX2iYyzo46wXMs5rZEj4zmg1o",
  "key28": "4FuLzSDfMFfSGjH2VBuuVeWxz6LiwQMS6DvJMpUhovZYcKfteJp6ArqyWeq4n9xvg1zUVomp1mZbZKuLdXYrgpF9",
  "key29": "3u3ZfuzKeE9to3AKMXw2iYdR5kTYKBo4oJp8sdHLFr5ni4dsVbFG2L68Y6buTZJqdT3MexfuPddfmCpxhjZZUAuT",
  "key30": "5ToajA4Ce4JcbG4Lw14oG1d13Z54k7xCi3GNWrZDrAtpnZKcKmDztQuDfaKbyRF31HnbJfTtDnCu4QtXMTisRq1C",
  "key31": "4Bfe3fssL9jYzzw2EwgdRbdaVQBa6DXodA9LtoY9ipcPqhD8MXWKM2n5K3xt3AmhruuQYwvRkJQvST45enmsg7b6",
  "key32": "3WSYCceMd9aC2XEMUXXD4xN9vdM4bNygGyUtB1aGN8v2kmhkXmbD7XwgVVFy4b9NwVzfLQF4j2vW5JHT9gVrYsxR",
  "key33": "58rsnx5N2G8VNz59PPgC2N566TVpfAvayH1YWCESMio5JMoTLQExpYWzRoeEWaTaS2JjqC7KJGmNNxJwCCKFw9kz",
  "key34": "3413TA1VknraiYr7VUVheDPkE9VEKuxhkUzrf8Wqb7de7JhRp6M6fpkbduW7fdzMasE5h3byjhCX4QrJYXUiyGsi",
  "key35": "4B3SpGzC91xAV3RrRDg7NEJM7XZzeWqn2wTV4K19Ssauo7mf48v1Y24srE69FL2au4fRAkpySkUPqadtgFEtd37V",
  "key36": "21jn1ktxNjvEQpgKxTpbpe9eR7ogoZX8HwjvRY2g8QMqDChowKx6s6dkZ9zAh7f9epxiGYWHLCiPdQm9Sj8SCyqq",
  "key37": "25WkdmKSQi81oCBy9LLKt6Zv9qJ1YsYGzZPvTj7hgjXFJRssQE8CmizQwckVbbLV58peqPZdLCMnaMdexPbS9b73",
  "key38": "5b3V9daMBM9BXJfkfQwG7xHjm6aEwECTRd1pYw1rZ9T6tAo3qL1dvX3yfoTTGSCHrWbTZ5otREHJEGqMaijwc2Ec",
  "key39": "4ayNo2cpGiCacWUComF9cdtz7WBBAjw3KACHvgUjv8eA6GiKL2btcKkrgYmRF3pMhhJPVbkvooYNVeidwsNVnZkn",
  "key40": "2E8DeTuC9zCpF8DZCoymsjXVdazXvwwqcueFBbYCE8JoZXo8Yo3xTNhu38t2umw5Z1g3qnUefVWgSobcNo2isMCM",
  "key41": "5m9fYnCLLtstYxxvXbSWuM5B6J3E7pr4uwUbTjALScdXK5Ex7LKCBYgoA5oNqAFwNrSopjnVWWb8eKFVP6WHbRRD",
  "key42": "57NDwvxWZbnuBBsrkTMoJ5f8ofSuGdP4TYfj2bGVVN5dZ8PsHkZrt8fvQc2XCunJ68Cc9Bx82HKKuZEUQbHGiEmg",
  "key43": "5payfYW8nxMAP3E1BVP8giSmqeJpF6WK349WBpcmGgE7EiQvFxKqszTzoMqVTtq813CJPVNYi2C6h8HZYyCjBz1b",
  "key44": "SdRy5P6gXe4yAchPVAViear2mp482G2Jhvtty53xS9THx6sbsDdpg1foKaoviGJDVHivGc4yVNCYvgQqv2Hpm93",
  "key45": "2etoyAdBe19zc6A3AGw4NLmqJoQKAdHejkpRk9Uqm9SL2bSwwShhmMemDsecRxnTnwFv4VD1pcAVctyrRXDJjM4R",
  "key46": "4TKv6PUeKrtb8itb8js6DokbjHtEtVwaobcGBHYVqMfo9iXsp9sgy7sPhovViaurU6fwsobcpN4DZJsUQ9R7eQR"
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
