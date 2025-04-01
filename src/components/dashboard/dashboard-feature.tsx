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
    "2KbZSeA1okPgF7nmaSUK4m39xDNqmTtVY22u4pER6xVBrvLZWYtCNtXtLiG8QCmD4PCkABZyS2eNCeduPiJdjT6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nW3FvGB39JuBBP1WosGxvCaSypxaQfPqNsrGzNM78USntZ7metvkQKS3p1jT4UxnbL14mDBq7ZjgBpi2dT7AVBB",
  "key1": "3F1KY5jqsZDm5JhmyZPnLTr99cyEKtYqT9cpWmib2Ay3LW4RaRHuedBsnE2pCurpZwpNb5L6Cir8sV7FusLfgJZZ",
  "key2": "2mXocraQZUDd2B43FLhnNcbqXHeHdaptfBdHcLSsUVqz4nNwgKANWNhg8KxvLGRsnNxaaaRt3VBibQCJj63jcHA",
  "key3": "GcvjGdmHnpMtTkLPPTuJ5DuGXp2oTiR84uEgSRE2qF2Phf8XCak3U1vGU5QokiFxu45frd3Y5YZph9nW7RCBRNW",
  "key4": "N26YQgk1cRrZ14djGTQeLN1Dkd66mZVNYv35Jz5pWJxWSU4f5xhaYu314NJ7B9TTcmXi9q9Tk2hGY1mykv1ie8g",
  "key5": "4iSKdKkesvGsa674jz6HEAevXt72261zPzohXJV2cCPXXLtYCtJAdTHSiJ3AuHvc9tW7htSh5iuRQeWPsmUzGTc1",
  "key6": "4JgFPvq4ZnMjGrWo81fYGh1W1gmKDC7BPoa2A4EzA2oJz7jXUAHBh4MdX9V6zxs1eCWjCFyRbmceAbGYB2xjPJRV",
  "key7": "3Laq9v1Ai6K8vjWV5F1849oprxHua7YFHzBDHYT3i2T2xtZtWSzzUWbnBLxPXLaPJQJiX7iQLsoziCDBQYgMnm26",
  "key8": "4HoTGcdt7nHXeZ7aJ7bRLDfReZL3pPeCcT1szYeKFZrfaZkkr4Q1ois1ySXbQvFgZsCbYBpgsBhPK5pWvT3UXpGS",
  "key9": "5vTYVA3sECCErXr2xNwPPiyoHphJ9Dv6W14ZAc3YUHt9VWiBAuMbAYpq4EiuyNALFz7JipLKL3vshduKJv599giH",
  "key10": "3JeusPnyRqqHHGcEkkrwgSQXsxYyHc33kZtrQkrghkH8xASy5KH8HNLkSJs7jEKqjk5QrLYEbJStYd4eciztFSAN",
  "key11": "4H6ej2Ra68HskWeBdgv4X76Hnzgt3rdvhsyCPF9rhK1DLEGtxxEutwNcYfVLnFBNjEHyQaSsM65jtePUy7C984hG",
  "key12": "aT8trHH371tHXknWrfdLuieJW7rXF1TqNteshVTYoGd4rnXK9SUfhimXrLn72aoLQnBpByKtkXhK74r9jTLRjju",
  "key13": "3iJSFPfriZeM4Yr2VNDQMmJFsGyP787tnJGYbBmgJshXjAHs3731VLPLgZVBpY4YAE9ZhCNSegiys1RAB9ZYoGL3",
  "key14": "4WTnHD82pnapzxA4EoMgGERo38S42GfZKtTtU852Ha92wZPH1XMYPJms1PHwUum9pXkYutY3AUBc1bS9JXRu6Tas",
  "key15": "5wh1Adcjd33hU6qyPuEAoRxJF1TXK22mBjW4JPtLRm34hankzdgzRWUE1vXqEqDHLH8LtNYiEv4RUYw2ixi6hYu9",
  "key16": "65Jo957uoqUFqe3pDAe9PcXMAKwobNDSZ2AU9zgtx858j3pfDYZz1VPZV6T19NemRHbKHPx6rfCpgp2koaq93rcn",
  "key17": "27AHXXp5PcTeZZsRgtntZHhM3rowcYwVeHMR8rDVubCgm2QrSEzrd2GmTzHJ3niq9VdxAfnBSXame8pQ2G7T5KQk",
  "key18": "2pB5XFygXWwuJDmyM5fMYRT8RnLZo9azo1iDUuvHnxTZBdGwhDAmjnLAhqbgWxavb4DCDvbpsp55v1HTbhwN1L9R",
  "key19": "GQZ2MDMHhxNBP6HVTpQM3vwzz9AL68jDyTVUk6tpv2pan7wsccNdCSyey6KgX539NmBXPhkSj6TBuads3iRTA8p",
  "key20": "4sMzkG83TxzCyWxUdBAQYj1jSqVYDv2fqPSFigATy9JzPPH3F9SWg8r3X2Hb6yhJYSa86ziCSWo4wDwPLdPTPQcx",
  "key21": "5Pkd9zetPc2DKrxeQsUUNkSjvT61SuvvmXMyJbxpVA3J84RnqLgD7uFFh4KZMstci8AXAX7FHgYZfyvq7DNzw4fv",
  "key22": "4oH72wtsEJ6zZe3R3ak7fL2bx2WpGUuuCPpKzPqSBUoYKEbPe6os4KDG61ip9wZYNz5Sv721HACioGA5bY2D3YYM",
  "key23": "4etysiMy148FC3DiYbUerbZCXhADNrdCfEUGDSscKSRmzJMQtbsujwhNhnmpL31WXAcZD3xcS1NNExSn9WdzUbnA",
  "key24": "2zuiRLT66daLVSbxdQxShQP4UYiFk8A33yRUZPaZvk7Ph2nbqkKjctcw19Giv9q15Q2xAqBLXSS1jJmvFGrJNH3B",
  "key25": "2gju9psabDB9a5uQAkc6nmgEjaVTTVq8DgdjY3SextEWugZLVcyQGCrMf26wxA2hiNhcjU6np3woTkex819hT2k3",
  "key26": "3JEab21cHgPQBzFfNj4bdnbrX1ATzYQz9dgE24BmB7uQDC2kHLjBonRoHQ2oH3vQBNsb2xRGgPq3quC4JSQMvAGP",
  "key27": "LGD124kM6DkhrtSxaQY2T2i4yZPVZNoy4iJoexYxqSQhJbQ3JKGwqiyv5rcukKnpqmvigXzKdDpF5wza1b9ZVia",
  "key28": "51j4D1vrbGjgMsgWhS9XisPXNJWcnWmXLvTmEqiMTWGVqkwsA8HzKnSd3pRkK9yKs9kxVRxh4mMavfpU83SLjw9",
  "key29": "5xxg7aBrfgECqkkazCKwVJr2tneowsoznPLuxNZf1xzZ9Yxkh2JPP43g1YAuEUAkQdi56CYk9i2BZqDrv6xq3pY6",
  "key30": "4YGzEgjuaWgHUb6L8H7CSf9h9EeHoH8cVYjqgvDju2YFSTV74qYL7AyU7wwS7EPpUec1U6fH2Zfsn7mesM84Qp6z",
  "key31": "3e6Fe7KxgAQc17RD8MaJKo2mCjirACiBoSimnR2c9pJGXkDEZBTM4z4b6vrRbWG2GrgxQPYsD6qa33rYQcWZPve4",
  "key32": "4Y1zjBfqw3uZc3grNrRScNuSztS9kns5M6dbwFdpxrwbjxLiLwCjp811JV1PZByaLs3oD1WBZrX9MCtwrdoo4GsN",
  "key33": "4KSG8xLjYckEmfYhirGZVqK3KF7Cbm1CTvkEHj2XUxTRH1rkogok1S4JkCvujPrVygjo9SMyTTVhaVCqAEioRBtK",
  "key34": "6vcNMJEGkKQLMY4pha8cNXB1YQZmMCduRoqXK95LuwNY79KdvyhJdwi54f1zCxcv5HB9odQE7Co97PHM5Y9DLg6",
  "key35": "3ucjf9uGvA1LLoy1nrmD34EqQSXFqqAMK8xzcvxiQw2hP8voPGK4Fi9hyfnWUt9VMn8yMtQ1J5FiHAp4X4ZZbDFK",
  "key36": "AEmcT3sDWzpvSk6nuDJWeLC1Y8ub2PefU6SyQo5XVE6ENh9M64pnL9m6ddpQcoZ5718QBPBhSTq9FZt1VWMLPjg",
  "key37": "3wmbWunEWkFq8U7PocnMKmhnp3b6PaP6w1qm6JnE6qPvNGwh2ZZRDWUmBx9jtTWKiWDidLXuVQBo9EoAXjqQuwDo",
  "key38": "2XRs9syQHCgiYi1w9aBJchgFgD3X2z6ttU5KbMUydqWBFhtzkJt4UQWDQbtYuL7o7tEb2TqU2cFyaMwCwvH3Uhur"
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
