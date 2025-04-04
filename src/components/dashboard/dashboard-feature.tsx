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
    "53CNGao7iri3dZgkXVLe4zHNL7kX79nGwygj7fXNCuweHjv3yBKo6p7hoXvw7CDKdUz9xdCcJsiaMhuzmUGYiYqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mrwxYDwFMDK1MyWdcxxiU7kS96EA5yPEpQyrss8qMdjQxQZXMnJhE6JWQ3mHzugGN5FikPJgeQTYV4Gkqa39fjG",
  "key1": "2BfwU8JyiDJJ1Yh66EMmo7yJjCcdKTL8EPSKAQpnxjmrbsDAMNxs3qukSiSJKkHtxMz17gtJMHbA9QJuVetn8QYt",
  "key2": "5b88rgbfhuLvHE71t3hi2pKTVN8b4q2qRC6LwbfjJtxpssGoD4KUVhRkKzLQ7CjwacVDM1CwhwqygouxXnhjSCMo",
  "key3": "2j98zxkhq15ncG6gATTJnaBaKKnzpSW2jofTGp8ZE6st2yxtyZ9oWHfk75ThRoUm4ZLz1QHQP1gyGzbA43ECjAY6",
  "key4": "B7pRdRfwu6KJXjMbejTCBYj8vUxhWKbBYcL2J6mEJ85bAhsSVkoagCcxdyZ3w31i6AbsTXBBzFU2PfFU2MpcMCD",
  "key5": "4wpy1nfyZ8N3BvMYegdb5xxU7jGZMbGfz2EYQpAeVkytTTr28u1rpm3pTtnvCLFRwspLLenFMczy1RdJxDz4Azpv",
  "key6": "2waqit68QSYoiDTFDLcHDgQzhKXZhNeGAdY6eV3HfkbpEkhfDc1ETdDXEKGhQJZdb6UHqWgdQVwNvWxJ6rr726sB",
  "key7": "5DkeXN5G8Q7o2hbkBFJmBcWZbUUcDPzJpK6jMRQiySb48shx6HM3qYUFumCqHpuCbRMfP4ibQWRZgJAqgqzwE9F6",
  "key8": "4hitR5FkQkHaFYUyoQbb9yJcSgandDVsHwEDxB4TA7QuyxsaUgcLhP5J3GCD1ts3vmMjFPD9gFTgSaM47YsA1z6P",
  "key9": "2rTUqbobB6FdqE1sEBw3ub1SebiG71tJhVwaMkiVu9oU2UmYDBuBE1qWf1SjW1Jhdbw3uUB9PXYmEX3wq2FZtaVs",
  "key10": "vFVbNbdZ59t5u1sUEYM2jsR4xshHZK4WeZmwsMVSyVMRCJM66pKmiVHKbRSvrGhbWzyoUaBBT4Wh3XwVe9Y9RAX",
  "key11": "rb3ZfNmCXu5ke9KUXJMdP9TPshaeKgUuuvNXY6hzd6tnNsg8sb9bS8hZ3WjrfjCLLQU4g1W16ZctfZaTuxkqNL8",
  "key12": "5oSfap51BGrzejJbc9PxuxnrtZU8JajQ1MwKSx7sGnCdqd4FumCpwNBpZXieEbZuY4mddpGoX3urRzHYdtdA6J13",
  "key13": "bKeFywj6RYbX4vZ23fsw9zpmJfJvXeqpg4ngwUD9xzePKoacLxfKJTM7oaQqLEYkAk3SpZdRFoGKx7NW7b3zMqo",
  "key14": "2za2CS9Ydtmm7kU4bkT4oHR82eXMTfwpqeiJ485jdymQV4w7Pw2s65kj6M5qM3iEhDBZwHpdztksdYqvs41Xh2P",
  "key15": "5L1rg3XckZGaUXnzhYDHH16XBhpq9w8UNimAADvW1uyqgSmhyZGekbxpLEd8PGhbC78z3uqZ9bGa4jNCR5cFSbmo",
  "key16": "474ms3K9LJoYLcKLQ5F2KJirrgNjYia539kEkBV3McnHcEfYhBubpgTshfUbhy46XCaWGwYspukykaQ9im4Ddnbd",
  "key17": "4nyhrfu9wmtWZhX6tmSWwUxQrPKaDfVcePRLTmC21tBpJP7Qa1cGDmg44KpBU2Y6jm7y9TZKfocqf4F2gmFQfJZi",
  "key18": "67EWJfgoXxbFk7WsC8ZJda84ikJu4LKsjb4DGVXwt4iHc1asFX7HrHFcE5F4rQg28xthiX5j4DSFpKMTfWnD4zg6",
  "key19": "2gZRwNT55E3NYciz2zqz72ic19nChLBQ1cucEG2r5TYjkpMrQoFBR9WzsNN3oprMu9UnPQ9w2D7wyLBzgayrDzdm",
  "key20": "35mb7crt28shabwt3YDQTM4nt2WcmtmVo9BvnfoizLRYYTdWVanev188g4oqXaq1VPL6v7shwPT29Net9tngP1Cx",
  "key21": "cj4BbQdnECTV4tRdQThq8P3x2bf4c9bL4qcGzufX5WCtDRK6T56VqXk85mUUY48cqkk8fAMHcojsYnZT61LFPJP",
  "key22": "3WWd2v2YYD2Csy1ZembpEyUadzGG6yMNwE43UBVx7Aw7P9BVguZ6XT9AdjFZTPeUFwNjjsG8tvJ6YPcPZuySVXkx",
  "key23": "2QrYsN3ZjUgQQeY1taUB1LdnH3Fxe9rJmYMhuF7jbtBvcJzUfAtooK78YoTgQna6m5U8rxEKnuQNEBmRh93MVUH2",
  "key24": "5njJJSsS5ZnfzERuoQqy65ZYeku3KF5xwckxrzEDzqX95PF4XRZJeFJeCz8jFHbbNruW71guNsHR5mhhczCeLQNe",
  "key25": "3UsxBve3WdNeHSxrGoLY5UL9dRgN8dM2LEr6wATQGxNuEoKnibTGdm4QxgrehYF3ZeWL9qSfzohj64yF3YSrgtTm",
  "key26": "23CoQmB5jc5bgYJV72NyWhrNSmwGzNLdX94ECehFvuTn6jmrdf3LyLGLfgHvm3gq44vh1wwe4X4XXLfGMsd3iKXT",
  "key27": "3Q7veUby3KXQ95mAkrHZgzE5hqkScxKQKDPRiCi47Ho4MAfPcKmvQhGJgJTLTYhHGUgYMDpaMxXA3xHPxHgs6otz",
  "key28": "3VozAZ84c4pLbBjZEuqfnfQJcXNbhXG1kCN4Wh3oLGMeycUx6Z3KH38Y32Pg8mZAkRQ1fgFeff9risjgHDSQmeU9",
  "key29": "2bQhgDjNDN4McBRjg4V5yjgMyj655j9Yy6WSVVpXXa9BVTrZYNatkd3ivk5xvD5iwEXF5QCWEuJR1i2ohwzBN8it",
  "key30": "3gWfUj31iyMxKJ4xaHgpw8bftgE8TdU1hHZZgTqsfbaJWFYwmXXcukHLVRLKtsAsgGzJsCe7NFFxhz4YvK94bj6G",
  "key31": "4akWW4j9obE6t69XfnWjpyWenGvGb9etFaNNfLyrcB1os3sfnr5MN51aRjcGouGCQCmTcdJk4bW8Mdwrj4Qq3YRJ",
  "key32": "62uSQ8VNXyK9iJtHjJutKPk9KFNAFwQjdsq2eyQvzpg6C2wFQNuASQNDQ9VQ18JBTRme4ii7h4VsJd2T7BK1VvZm",
  "key33": "5vaHszXQpFBKcCmFZAFkDd4VGhu6WgipWmN9V7jCJU7WLRqWPxjLhRx8oPZQ2UM7SsGc84yPePscdLSNHTrskko5",
  "key34": "5wZZBzmetfqhWxwBw47yRdpGJGqKUwDUWzmdHoMohcFC98La1Y2Vy8UyGcpUAFbJfbCD7ypHJSPigzFs3abbQwGE",
  "key35": "39BSSKherYgu6T3fx1zKat3Hhmh7RL6tYLZmacakzVo3S32L3wM7ick258DYKSLbqrmdQWbTD1AWPPA3FrHtzzd3"
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
