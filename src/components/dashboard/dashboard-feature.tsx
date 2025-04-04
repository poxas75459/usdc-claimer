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
    "KxZXhWhH2RcTLUPvBemLTFpsuCU2SgiA9zUNyH71wLqCr5HVRuvrKB9FMt6jruhfs4zwDBTCvfz6pgh1ZZZANbs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tGpbaz8pWcXFuH7JJ4UsJZdT5xW1HdyprUxAvEQaSafynkGoM8rchjJJMFvd9Wy492hu5ZgB31rqkBEkG9FKZwW",
  "key1": "v6zz3CZLz91TgheBzCWqCbCpiRQnWhiU66yPYxXAG19RFas8J2voAa639oN8gka97sJfLePs31wHtDyUfVwvKRC",
  "key2": "5QLUJkWf3HssxTQmTWm9NpaXcbQRsZrPc9HAnvhwd99cDysn4kUX1xUiLo4dhq9DW1ybctL2baRbBwMw8acV9FtN",
  "key3": "2XiopLfLrgaoddVPNYT2fQ15SNGt26ZSiBXzh8M5tXmg7tdvs2WxxNw51GhBEi5zTV6vQ8xm43a28h6gvUoaXgcF",
  "key4": "bH3pEhU8FkZDT7L8Y2oRJB3rcwg2g62z4xh7zAdbBdjfvGEKi3ZDXQaeagWER1aG9BWdyAdob4PHNLD6yroB3e2",
  "key5": "yUSgq6kCQYvAPZfR8AFoBbRc7enm3oTJ2FfDdR3MmM6Fg3ka6WfvCynJb8hhCKLsV1BLPtro5C2HQuf56NkaHCJ",
  "key6": "kCjq2qvkSPvWk2NGQ5HwC5K3Cr1VfCzozG5hTf6yGGHyhkH9ef2dMNsC1nBpq7do5DwbW44czPFCsMYNHcvzRWV",
  "key7": "2gmnR8gWktBKVwDvDQtpLxvZPMpFJhwrMjpYVs7oNCcQ9jRN2FvDKs38VHWAtRMhHoXo2jWLUmLeqKg1vM4LAobF",
  "key8": "2cwdkGbtqQHGbM3HMv9MfUPkBoKHz2nmZFp4g6vMT84yhxPHiPAW7bv8zm6iT4HzR4bBnGkaXm3XX1prF8WMg5cf",
  "key9": "27ZxHU63AWtwYNJwMcr85sSnhgG3xLw5KDgL7Vs5xFS8uuZiNiQxgk3Pa2UyCQNCRkrcunuttG1j9Fk1VerNLyAp",
  "key10": "4yu559kaLkDeFAnHrZM9AWsg8xwBWF1BQPKwE44XfsXoDU1RpZbMb7GCpueP2NiUgTY2h8tNUWx5kUV5U2RCK7Ny",
  "key11": "2j4tYD4kahSUMxyUz5QieCYG71MLk117TnhDBzMzd7PN3QvZBEL4aQwsLBNGCCD3Z1muEz3z6NVCSTZFWKinXeLH",
  "key12": "2wYX9FdkzpsrdyC67ZmBvE4Tk1ZEspU9rKSkFvrS3SfS69SdNVBYAFtJZDkW9R8T9yCgeZsszUF8krC7f9F1w8nV",
  "key13": "2FTgD4hr89d1ZXn5tDADkoHJD4PHudVZntGYf8jUvWLwahiPxRSU8stgQMHyzKui7SumS24G11FZphtH9qKXLin8",
  "key14": "4jpfjHmjt1R5GQh7vVJoG8AakvDDxv2zUxkT6dK7AHNdguTyXA5wue94gyjESwMyiu7iNfs3BvfNyYXs37QLXwZK",
  "key15": "3uXJ5er6au1dzWvR7v4aYHRonU3gGkA7H9bgZRGvrRqHhmnjN6xbTMtbANnMVTrr3ks8HyzHE5uWJTYBvqVbzXzb",
  "key16": "5SAFQvgZV5ZoPgKoeU4xjL232ma4gxFiQgmZ7RHxJQX9pZ95U8gNRe1cmbtdDyDhz5L4UsLxQdiePYqnjwwqgFRX",
  "key17": "49XM1ThKfLEK4wG82h3KmRogpQVdMNrEPXFdRfmBVY7fHbGGw96eTYFAnWs2ecXACijzKU2Souxib1sBGkaGjMZU",
  "key18": "2iZma49D3Q8BotmmRUn7i4oNArSrJf1w1ecxvhErhxdMSWTJQYf7qCV3e3Wmv5rXcbWdxkCm36Reo5kDWXwJK3Wq",
  "key19": "oqGw4chei11uP4ytT3b6QVuzvit9Vto8Wp3qDtAGt4aU4G1RHkzkC1G9iVfaxZbovR9Kdz8xhX5SVnofj9hb5Ai",
  "key20": "3ctgJJ6jeVQfRvxuA8uPmNMYXB1yKkuR8iTwYECV8HJPXj7LypmZ8MkY6fjp3QUStmCHkCTvQreQjC4qdvP7Ltxs",
  "key21": "q5ijzskwg7dcgaQXe2CekoVZoFCcs7qeSoVKdjZdN1tqF9cRNcbzFNmevHFUYR6frYh1qTWnUCoxQq4uVTkUdwX",
  "key22": "4FtCQ7X1uJdcoCCYTmdtKncB65Cj2C4TB1Acdz6VibsoRhK7GPx4niTUaT6BFacuSjzPdubYWQch2VXj6B1gHxax",
  "key23": "2rTrivLTL9tYtvvGqR7QvYCg6fEicWwqFdeKpkhjvFAXuigdCv2wdDwic7cYrsVayfZZvoQV3u5AErzNSSCFZn6h",
  "key24": "3CuSUhgV8udx2oZREADPZ8Kt3cqtLDcFhhTT3uwKVczm1GEB2S68PssYVHR4xZjDNt5Rj6bQqQ9va25b7QVvdgU1",
  "key25": "1hCDocLA5a8JaeMoVGCRMsjGiupvUAo9CHs96fPk4TYEbZ6Hz9FTBwnQ2NRCJhLcfVK3gwC5BopwRmKnPnMgLyy",
  "key26": "2W6QJUEEs8Hefnf1YwuzTiKUK11rhWgAvQPtNNbpQcj8gKtP7iFu8KnkiYcrpW7DceWGpVVykyEvygF3YcjK7dAS",
  "key27": "61bUX8Bxz5voyYem5ntLGzbJhorTTYzHcPYPqAtQJ5hEoX4338b9kY6ZhE5waeEGDEAq4qqhmMGTu8CfDsNwA6Zq",
  "key28": "xi7xkjvWFS5zbqLQm5CJSE8dPRa73ZCVhSarkbBpMhUF35jALhXUgPrYVGba4KGsWT7i8SLPQsk1y1rmzuAygJ9",
  "key29": "ZaKGAZnd4h8cMjqnxNHAQiW6MDR5X3DCkaSsKLpQHtT8gWeyw2vFUURJogfmNoLSBKxZn17kz1joLgWRSfNUQoU",
  "key30": "2SLoGvzHZ8Zne8nbUGqHGnpdWjypxXAgQ2Bapy49hLKSzYkTR6pDF6xi6KGZbjA9JoG8Bxvhw7NaLbZjMWYy1tQz",
  "key31": "5Sx9RK8CQphagZ6ZHJmJX84v49mMnLDwv5yP1fa4197dmuhfQ7cgufdhJHqUmdSYoop6PGcpTQ966oVymRuTrsjm",
  "key32": "2iAUXDSAhrNi1RuaNtwuthMzYzd8qfF8WLXcgMBjaaGKVS9Wy1BEzTpNtidHYfXCg2yyB9YiH5xfC1Me6L8NsdFd",
  "key33": "58LyzkHfVpjUurUrSKhdTQTLWVmHXp1QTRtNaqUa7sRhxFHdu641aJCddXy6K9DmLs8g3cMzRrGAw5v4EcWKt48T",
  "key34": "5deiopYgxiNLoGGRVgpNRXoimPpwoSrbbaPsNR7WCMTS7dyKGmtL7nXT9Mh6YHy7RqYuxxwjaC616H36nvRo4Kms",
  "key35": "Th9EuQugEw9NLX9JsmECK2ZS9JPoPjeAXHEcwjD22rhxfQGTVsdbezkKXT5ygZvXv3PNrP6MHEWXD3UJCQtuPkD",
  "key36": "5jCW32Dxyp4uzmTW3vkyymL9WRd8Ktv3nXMdzkxHPsVXcYTXyUcVr6MMCLB3FMyTfRxoVhbyPeNHtUW8TCoAJKHv",
  "key37": "3bov459GE1oK5PAhQFjEEbnLG9qqsXQFWp5PPZ4bc2HViupcFgaJZ9u3p5FXMufnxxSi7ZBsLfUsnaFT8CftGGfL",
  "key38": "3Fq7sQWNfzuwqLfTkoL6XkyrFbFKgQUjkBcAQs9P558aktjEDK1QQihscUrWVf91igJVBC2nPAszvLxAEUsnFMjo",
  "key39": "2hNj8ukQS1RhRZzBsNxbimLfDLrJiomvxed2P2tWbbowMuDk75g11jC2JRGTgHUTtKvrdmWG4Hfsrx6dvYgLt54",
  "key40": "2HrHkwuetecV2zwfuAszkekMUPYsL9Ak1xkJVui8DtKd5ccrGVcRXTPkGzBWSV7Xbg12PJR9p1VyTMYiEBKXXnRy",
  "key41": "3JBoYWpMqpYGDQZR5UpaptQL6XEuaze5m43pntd7fkgyJ2xb2ZJmVyFoQquDumHfEchWmCL6TTBuKUd8NHuofN8W",
  "key42": "3YcdPfs77akLPTunF2geFXrPT3drL2wFaK5mFMqAkAdLgoW7ebnHs63CpDsXY3cY1dSRZANcmESvpw86vNqYYy4S",
  "key43": "3AJRLT94e1V7uB4nctsniDkNBEDAgeRoXK2utQHMEakpJUGD7bfqAni8qpS4MadNQk8RRPZZYgvr4M56aXG48gXb"
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
