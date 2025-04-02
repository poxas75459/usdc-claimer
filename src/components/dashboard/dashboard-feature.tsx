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
    "4d1jZqhtrx1kdLEkFmH1SZExeHcTG3YZzUUxZszqRtTRG2mVTC6Xi8JgyPvvDYkQBy7AkXaMqvW3eWonuPzwjqM7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "462RVVWaDQzFjCes8iH3i339v4qHMZtht44Sn4jKU6NZ47X485MQiaTsNfKxpaxNKaCfHBqgCYn6pAst6AJwXE4o",
  "key1": "kF2x4ss9xbo8Wcvs7oCqurZuH3kiwf4G66BhLhS8iRnSAhmwQrKxHdqVKzWCbsG2jarrbKajVSSvEJkYiMHJhrw",
  "key2": "4Mi4YvAAXNBcwfg6r5noSfTT9MpGkiKXVSvUtnFrSmYseWmAt7YTPA7rinUXYJH4bhfbgM5ikwDiTsx5bH1qo3FN",
  "key3": "56TiRdp29H7Y2JxxjfLbuCtKLeHMq2g65fBSBziuuVf2sZRCVUpQrxAAurpu47GXAnyZARdjyfztsznKVobCFuux",
  "key4": "4Ttj2PmywKofK3WgJkMdNgiqSac3HgqYtrgJCMAVyhb8LFHWNtR66zrGF4Q8eMgC3jWgQhvod5tjyN6cmC8GaCUB",
  "key5": "2i3pWxF7X47Y8ySxieoZBL4n1F1uVrGZaxyf9CU8HbDXtxxt1tgwgGa9h3CbxAH1sj4JxdM3E2qdobFpvsjkDENd",
  "key6": "tccQGoMDjJK5Jci6sxKmVWn6nayQwiJmr77LyWrG8iwCnaG9o55vApam6a11ZrUGXFvBSTSd1q9CCMzMXyooaSn",
  "key7": "4tjzke4AWc9fRotgt9AodqcRpSnFFoTg9SC7g5tRJ8JM7LfpH3LkydE2hz3uwcGc8U4k5URQHLkiHgzaWHmsCPzy",
  "key8": "29u9d2Bq7FQkmiuC7bxo5K3pc2fanG9WsDZStCXwuWhWJ94RLWSiizoTud6Pyth7pC2Z8hgq6g5Bo75HbVuRLoCJ",
  "key9": "3YnVsTdW4H4pZHveBGw1XwA5UpMwq1i7kXewn2hHdNNyz2HKPoCWjXVw6fQA1MWBvrzVSxXYfvzX74PgoqJpuFob",
  "key10": "V2zvVvhiomD8zRMeW6tqHpTaoJCfvBAme7Dy3kRmHUsfCQb7D5MDrZw7mF3rPtNrk2YdzjHhMkPfHnXwGLjTzrV",
  "key11": "4XRTgF27G8g2yyuy4gMjsCHjhLR3snjKWWiKhQBukiwdHiXr91zLShymKcCZU1p9YwMAvKaxZa57TN8sf7y9JSpD",
  "key12": "4q4bwJKkfcp3AuBjsMhDnrkDRGqQ26u3LLoXVnufYA5LoWzWHexiNQEgL3y1ERtGgkpF2HtCA6WZVF45o4rSe4bi",
  "key13": "5H1FXoc4NfRDHWcMhrBbL2BDxSSao2Vy831ZgKUMwGuSgV36gfcQeaRHiDy1yuQecRYuwjeVfH52a2GZ6XuQ2umJ",
  "key14": "GirNXAeyAYU561zVtNNDsWnKgqenwCXCNjyXertiQSjjhJUqzRmxCeKY9d8P4qQV43jZFXjJ5bdqdrR7Vn1UqDt",
  "key15": "5fipDG6FXno9VZQ4xnX9HuvQZdJ5ii3DUPB8drKcMajv8KaPMXUbf3o4qnFjUN6mdbr2tnZFSn8W48au5ndXBwhy",
  "key16": "4qeNevmHeXC4EJqAFBPyjHhKWSXVN4pHrhK6pVqYqiMtJ3rLAHs3ZBn6kVe7XDJRx1e6tB77fuSzQa7VpNSn5P5m",
  "key17": "4nqW4bLzAMbdaLYDrVShJFHXgDQiv7isTDargmF8bfxmyrvDQkXyr646fqt4XdYt5uRVRUe8R7aCLuo6XnNFQY4v",
  "key18": "2uEtbGdwsAcbiMHXqMB1348t7fqwLyPUajQGNTaCmhD8tXSUt7iuA3UhhKN5Hs2CtbKjqrSZMHooPqFizLAEHyr",
  "key19": "jJtfnDhCh6LqbTs658jSizBKhQwKnk9N5JxJ6VpvvXp4VXNAUz5HCDxs8HK3wSPNNYQuRT4BdCkBGsvhCxtZmbG",
  "key20": "d5joK79yVahyXvmDkZXXL5AkNV4DsYkkfGt56ZZXGtdnHp73y7HHjMF5mPTvPuwT1Nya7sx9nJnQ6BGNrrFL3cX",
  "key21": "48jCrtZSYFmUha1rWXxbqGLpoybPre7cLYs8cePQe25m8hgmgN1XBN5uaQxPu4C1qFUzkeZ6WeFTvbi9f7fXNTVq",
  "key22": "3JWdiywqKoqd4pS2Z7RaqMjt5XaNWriiLBtPNrWqiAuzXsM7PAJ1iNd3Bsc3rwNNsYc6HGd33zzYW6w1gAcPiY7r",
  "key23": "mgVWw2S1xCv6Aw4Y95kubg8ZYNn1BFJDv8H8EkfQdVz6dXGq72qVsSJyRcYzK2EaRrDmt9n5aZ2e3r7j1Rqm2F9",
  "key24": "3mE4bqLXYsBjUxSC3wtxDC7ZikFK7Ecam2eaYd3wEUxNnQA5F1FfZnEcVpnRwGXCJjEEDM6i8GuX6BWzDZLFtRvn",
  "key25": "LdMcXToJxUpXtQ2gEaQWBcq4bgPckd5sLpijPJfj8c2w6QTkeZnmUqXhYkyJ4JhjgFaQviqpovbjPo8nTWxVHsj",
  "key26": "4Yncpp5QSRxsKBWHTLHeqKTncMWfkk8gZqYXqwhSKX46L74rTF4oZRkP5HEisBG2QUxEa7tQmzZ9qmqQ3hS2juuz",
  "key27": "2DKBYLcA7msjqWfZvvEGa6JKPTRmuyJFxyxprjhKWveJU9aeMwwyzQWohkZK96dmPfSGiZVrp88MuysfjDN81Yav",
  "key28": "2Kbi3JtnXD3em1m9FPZWy4bfzzs1onWv6Zj36aYPYNyBrunjNdT5CuLP9b2g4BweZsWXLDpfzJFsLjsGFQY5TatD",
  "key29": "2hnPuTCvoVyymmY9KZZp22LWEeiYwdrjSJj6TuqYSJAGLC4mzcys9kXaYgoUqfHJiqstY3eDW8CiU7aJRPoEv3EJ",
  "key30": "3ZP143vSV5JtU5AyqHsZTojRBzRBNThRA1TaerKzVJehbWKpz2xG7qZDDsjC39KoDARKdb4L7UNrGUTubCYK3cru",
  "key31": "2ofdetMuPK3mC3HW6c3SBgv8iEPnYdQr357GompirQQBdP8TTKQ8C32wiZfZpBUnfnYTxy8dTiTizV6JFkbYD2nt",
  "key32": "48Qgxpv8GLdFpRVfcaTqYfeNQqLb7pUKg3a6ciWP2dZUp72mBqCSDKMa98JQpCwLp18vhQbS6EmpE6DeTe49d6Uo",
  "key33": "52u7kA11nWeERgCbQJfATTubv8jSQGtbKKV8SXv2ZNdKJiYNqQ5qdFaGEcsyShVbVabhk8UbBMW4UGmrHrS2eMCo",
  "key34": "3QGzuSgaxpNgSmRSMsN6E8xUWSVYSq5u9RcCQmNP9h4nsMqtNQV1RLsizNfewqzBKsJtFnAXz49fMb2Z7kQAU6rs",
  "key35": "5yK5wn8JtFsKrYuAL8qPeh6o6kHeso8pEGYppAQzC9QxWydEa1uGyvn9afDFmGjPmZYeswf2epXyGKJ7Fa8xXxoQ",
  "key36": "2qYynGjrie1MHyZCRsSG9tGdp8Jwm6sFpeqkFvo3KTykETrzBqkrBGerXgP6inBmJKugmh8Tghz8k8vBQ1kcNCiR",
  "key37": "2NPV5n8fpE775tzd4fTomqh9CrywMQBEfz8pN7wZbRHEX2KL9Us9p3JQmQa8RiSmjVt8nLaKcGCyWjn8MGXXQ3X9",
  "key38": "3dcJWe6tUTKmTQFrxERjwximFr7dh6W1Kok6wVQV51oZAoDvXegR5zVCRAWq3RPNC3fnZk7anLDLhc2upaUWC3LH",
  "key39": "4D8JZbmke8HTAyHoDedKv7t2Y5tBv2ZFW636idv7qHiwR5j2rUJmkZkJjeEhTqLeXPiVg1mqhsPLDiWJ8132T4bU",
  "key40": "4GM8kY444PYighNTRSaja2xZp1FyTPWu2R9DBogcE9A2ZyE8adx64GNjLLL12h6oqLcPdPB5HyXudzBULghA6nN",
  "key41": "52NdMxE1DPaV7RE7AcdR7CYV5TGMteb9S2dDRL27j46a5HacKmPGZqQbkC1NHhjB6gKUcBPWutomZkhFHK9TLE5u"
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
