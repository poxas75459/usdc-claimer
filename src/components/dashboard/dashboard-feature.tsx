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
    "4EDss2soW8TDFJWje4b37uiyKCUg96A4RKogKfatjhG4GXsQbeoNJasSoxnCAMG2NXaWQzzRkbGnykYnypmFZ8XQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iYARN2Wu6MJZYwUV37Zta7M1ybmrybcQzGrqXMaTmAoPPvj9rhsjVPtVzeUhHn1guTJdiNtBESNR8pFe5rN5EAc",
  "key1": "2qCmGxmrrSKXw1Gu4qH69verH4joxaCY2Gc6agFhUXMx7bgDS5nZjmYBmXidd16mihU3eDhfhG9GGNfKY4MQUwS9",
  "key2": "5emd9xuvswWQcEuxE41g5roFmhuP2XjLu2TLXRKiZ4jGjbTs23gdu3F4aWZG1jibuWjHNAC6hH9LPFnkNRSZaXpn",
  "key3": "5JMat3JLYcQxhZf9XknvkQW2rKBBnCf7wpphFHriwvSN3nHe1g8hsP1uNYBFMTRMSWJktSckYsEsqgMNYEdqGnXr",
  "key4": "oZwuP4Q9bPB2v8jgP5wLDzsJxMUhGscnf78h9LjqmXWbPhV6c9hHL4WpVPP4h83qp8UkEsfFaoRsPTyN9eNtLkX",
  "key5": "54MFeDxjp3psNyDLmXs7KdwWN2omjRri91EEfCbMVSpJN9ZzyVXXTmLyfQgAtpUYJjKtHHiryk2QPxUtRYkgqUAv",
  "key6": "2j5JPbXgxrB1oafeAyrnTLMn5BJiLyP8cqcwoutiYHj1tFMZf5wmgejKwHpeU6dipR6Gb63rehJBFCWQcVuwYbVk",
  "key7": "4yvPbQVeCfPZ3qJgN1uUKSGnonwmvaitHm5iUawrJgfRKtSLRAxbkBPgE5TmUB9YkZzM4m366rE8pxudEuhpBddj",
  "key8": "Aaek2WCjYY4dtcuqdwBrSLiYrn6FKtSw4QWxGqbKipBv62xy8vhzf8BHG2NXkjNrw6HX7WxZ4BzRdN56PunyXCM",
  "key9": "2TFwBJYqE6Rpuve1WBVPpDp7JF3M3Q3x4SV221FDQACe4zNzoeq1YQaSEgHei39VHUisSHQW35f2U7ALD5cwjUGi",
  "key10": "2Mq2QGsFAPJaZXB9K3j49nWuxfWgXiPRH4x4ufa1bM7tuHWB9BnU9mbRhVpnbyWfmyKe9eX8wKoT7pY1Wc7biGC4",
  "key11": "2CuEKMnjdUXZNdYZCoZ6cDKAecyQ14uZ9Xd1oKkqptj4yR6CRusa8TAD6eB2PWpF2vwUU2NAYitmBfUsznPuJXi5",
  "key12": "chGLEnCSeSjivjQD5zfnhx5iKmFeZtn1Zsm9RcanUv9699HxwSnLRhXxhLChvu8iZ5p2VUPn3VJPcpQYQFzuUjn",
  "key13": "49ygMJyaAgt6QoETVNrCv6CKXunbGknSKi3SY3h2Ha1ESriVBc188rNa4j1kJxEghgHGkwC1PGwkXNW6UGuQHbpJ",
  "key14": "5pv3vN7QvHR7AAnwgWR6kLfDujUyq3Y6WpQ86pkZaR5mnYfcQf22foHpEFVNHY4HuhpzSdtwdBCrDhxg84jwHi6W",
  "key15": "5DYWzDjSXzcrcJSg5yxoPBQ29tRGYmbukcugReWPKTn8bnNo8Dk8Ye8f74uFMFeXiCjwp8bSUVHVbCvBSLiaDJc8",
  "key16": "iRuYS5NrnTKEJhpMwH56pfxDdeNkKXWKDfW7VaZ8kfBzTvXciKNYMxSe8d76Sbk1KyDcss349xM4r9EXDtcZr9b",
  "key17": "556NVvefv6SLdYkVHHwtRfRYnBrqAe4Je9M69GjbuBn5MorUtnB8ak8QLmdJn8D723CwbrPKj5ruxTyfpkDrHEGn",
  "key18": "3ZST5uDtGbvStvE7SZ847VLZMEacdEaaTyEcgfFfMBzdm1oBXxPbW28cCekwNuPF13XJfMCx2Qh7FH8QViTCpPxa",
  "key19": "3cGibo2NEwcU7XiFMZf7SuUBeCqc8uuPRPnH3Gg6s2zD6nMijCSg32PZcSUnyY47ryrKCUEiW37MPeND2oPDm4qb",
  "key20": "51UzPCM4VgH5833SpW9H1D3XikpaPrfRf4HeAZPnebqsMudvKUQW6cNsMt5kgLn6PZ2jpAfvdzs7N8xrzvpACPHi",
  "key21": "4Zo1r4Ny2ojssHkTbZBZ8CjETW4nWXNFf7VVaZ9NiGjZtwv5kot4WxC18XEY2KAa2VCQVzMm9RPdxkVEbCSxoJjS",
  "key22": "3jhN9ci75Wyi8MMsFJwdxq8Kd63jpLu8vAjP3ogjg1qjkjoWi4uQQFMB7s5uYPes1Ktvb4Wf5xji6fvQbz66thxr",
  "key23": "6p2fn4PYtW1jhC12zrNFfZWzZgHryhcFHit3zUu8MRYpXxUd6D72vD6WA2R8zrsayaMdDQmF5kjGxXP56tUuHjK",
  "key24": "5gKiTZvdhfKNuikU4iNDDRjnGVkBeWcpZPUJoVf2SJpxSkMrXZ6mLgGBB7UGSqz9ARzoGr8y6jYKekwCuoRT1zyx",
  "key25": "sGS7ND4HKVgFmF7vB9PrwaxJc2t3WnrccQTBs1z6SDQSrTAz9kkyVj5B6U3pWvSM7XvaCPrPi3ty4bQsdQaoHst",
  "key26": "5z9AmRoG9AdfDnAo8Dk7MS1z4XkzgYCxZMJADvgxiWF5XmV9CA9i46Jkap17JtpPAjjqhfNBVZsEEHhbEkoUSpi5",
  "key27": "4hL3tnv8mEyVUi5Lg38peenVimDXMVuaVtGgmUzgZomQMEHnzpK7Z1YFPnTVhWt7Qt7pjvbsPRKZiZqJkpvsdpQt",
  "key28": "Mizc7hQtiwjXL8u8RpG2i8syRGZQsKep6cftPywcTvrfviMNbmyRYm4DETAZGugFSoKxfwBspJ2nniHfcvcgxtg"
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
