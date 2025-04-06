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
    "ebueojzCjs7wXf6SgSpStSLruRXUshWvngBwjeghmcuB7ZgdaC3KjNoSRzhmYZR9CGaUvnEKotCopeZuA77pWDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qMqdhdiyY6EaiswaLYZJicpSsBJeshdnwDgbsUjLJkgkUTxRExwXWvmAnwqMWRyrzAH1wwDU1hkSPxyB7dsTVgm",
  "key1": "4c1UyoJiSLpg2rtYWRt4AnYecyiu8g3Ea4PGiFySzY2uK4BFGg9MyKJSvhJfnT8p4AiaZnsEuYVwceahxNTy9Sdi",
  "key2": "4XPYp1Ma7kcJQkCG8NaFZ65yaiYkfWeysgNMKpEy9Kj6qEX7SAwyJN3zd7Re8U9ABD7pUFZBpt1UXHLKoCbpkAff",
  "key3": "3VpdZA1scEAhjSNPM5GyAAFR2QAQuhhcQoYApWQfWKPivdRHshEAMUYEdscyvVcrCdK5JqrJMe5fzRge3Hid66fj",
  "key4": "2eQ2z5HX4PrMbQkVxfFuMMExQ9YhUTYu3v3Hq7UXkmBtcW2fSy7cLvVrqu9nveAXedMnRyX9NMUwhvKunyYMA39D",
  "key5": "5dqad3U9mUGo4TuQJDdCg5quKbbzcpRW54CzKA5LJ5WdGAtfGgZw1HksnFjyXRhhJKbipu7v8RZZy5NsH3BvAzjR",
  "key6": "2X3JR2TVbpHLBbnF7PKu696kfnWGRPr5mQGnHpx5MAVebLB6kkTq9fCN3qewGFkWKis4LjosXThc3ZHfERfsE99e",
  "key7": "444GRx8yGA2JYitEaggYQRKVgwq1FHpr1Wq9jNmWVZgxeR1hbE6nNCpQWqg3nCnNenAb23b4XdQTCusZAkqtCTUr",
  "key8": "itXqYhP1Bj5MAyeR3SvUspBZXLSfnMHzJ5oZuAQMqYXkTzx5zE3eNxQigZs5EZqaYiQhJEDBNKb3vA9nyByUH7g",
  "key9": "MBprZNNGurUGhaKD27VrXbHNrsi8yW77gRt77AG42cGqEs52XVZzYoWuHPYMNmTNDgHsK8XpWhaomSVJxvVcMkE",
  "key10": "4gZw3FyE4PbWwuWRUVq4sdpYJds4EvFhEP5BSJVEsuqK5ryaFU8t4HTiJoT2eLKa9cu8DvJ9VcLeTaH8EeViGTJW",
  "key11": "5P7zUjXDNsCB8aKSfqn4iDZv6hU1KDA1d9dUcntrYY1STzpXnteSu8CzPdFVy9mWZGENv2uCSFNMBehCep5rZuo",
  "key12": "41EBoquPkySh84R3F9amZ6ksPfD6aFqWXhmxLP3djDYLJwhPYfKnrDDKVc27w1HXisW9xJZD8PGZ6msMfxnaEpyd",
  "key13": "58JFDroarH7AwZCUEfxAQocvZYNp8HNURucnQEpaLgoUYNU9zPyBuVx5z2vaosSzg8NaQZMRTzyg7Lu8cFSV5QdU",
  "key14": "2E1695tkcgQefVrQkSkkyQQ6dXDrW6LXZaC6Ahq98ATkNuTRzkovRvspWaRKMpM8cYb1HqsEYfmVMWthe1FeQNZD",
  "key15": "3Kpe9MZV6D2XiDUvGKhU7rXyJb8uNDJ9jM2bEFCY6umFwAyPrYqjGBU2kzVV5HLfdoTX5pBr3nUJjYoa4q136CeU",
  "key16": "3c6Mme99HD1Fd2xq86uK6V2mMGZZ7t9VFoXtGcNWZtcb3QAxKKJ2E8jFbRNjjxt9QrYbStXrbFEnKP5Vk4QYBEfq",
  "key17": "2GsEDv4jST1N85rJ2fcc19qfYG4KKqwFWZA5PtU7UYaDGbRmeEP1nKnPDm6Gc2C35saxtRFDeU1r2dbFtDxX4n5D",
  "key18": "5Jy5WwzQHWG9F6ZYVaFCd9Ra4UcwaY1hBJBFjNsfccTz6WTxnM68KKCxND6W3kU382rn3ARrcK77iX8tNTWQApw1",
  "key19": "FcZMTRYRC61pCsvMG5gwPRNaaZxMTHNvNy8xscyrGqtPNyUJXGMHopseaebjFuuXrJNX9mz5CdM89AcnLjJxpqE",
  "key20": "48ssmD5Mm3ci1ikNsNVfupfw62Zyu3L7XLKb2hA44BxiA6E7hzfXDHRBHbw9W9DwNyxuTgwSJwFeqk4KAd67vQYN",
  "key21": "YsYP49B5h8zwgNLcvm9sS4UMBYT7bhBLbpvmDWW3YbcZ2dPbPzwLibbiSLHyBCJ4dscNaEiQdg23vBPBGyvRoyb",
  "key22": "5RnJhD9gAxsa6XDmtvavLK3Peunrxgbxkb11JEmW2zxpQEuFRXYSwMTHDXaHSh92wgK3zwwRCHcLbSu2VGjygbTV",
  "key23": "5tZ2vPmikkcRsynPVKn7d3K6ErJ5wq898d5TQaMNeyptQEEWgRqW1d1nPfXRhmyFZUnoGFEAt3EgKJJwpdi49UBG",
  "key24": "311QWY2G7eTEEivebxZMcRcrTtqnox75x1jLrozV3N2Kw59bAVNfsk5UaFbydRV9FrJZGH7hRuX8aa8cf7NApn6L",
  "key25": "4LjC6tCe5CaaBTu5dDj1Bfjd5ELSqFxGrbEq91xedhUJUVu9XwkSzUkdVnhihMjCVfBDqKwAmJWh1SSbLULL44mn",
  "key26": "4KGb2g88KekJ2ZVVYFjyDdf1TE18yVbkppgBHpwKqnYRovv5dPdnZPZ5dP4guHAfywQkMP8yzZgYdSEBJ2c9dLjV",
  "key27": "55sJPGMH1vpC7QFLBPoS7U6HK4hnaLinbn8GhpmcJ6oShE7w1NNdb4kjWFijmq175EKLPjAJzxDsepwXVChkFtsi",
  "key28": "4AVgvCMthwRHhFtVHvZroMjvEkHR7CBXPr2YHN74tmvQwa3W6vkFnDMES7xGtSfcFeVnFS37fucgbgudjDDiJUpA",
  "key29": "2oKjELjE2e3AhV8qkbSF3Ceyzzti3KynfGqkvY7id1R1ayGkGzNrMV8VLunAencxeK1HkzYWUnqF3o9PCCfJtxv9",
  "key30": "466tY6c66agZ7JsTroHdqkiABgwkWt74WYXqsSVWUaL7gUfvAzCXoWrL8wMGheXYWi1BB8scaGPK9Cby6Tj5xchn",
  "key31": "55ztVDPuKqMg48QRSE4z7wEWUNWeP4LxXnsEnFJqTd8v1vpr49rZ7JDbrRLfxssS4juCXiqsRuaFHEnmvLrNrCV2",
  "key32": "33ox4ZGwwm9L64TJtz7Xco1Le7GvMstr8Qk6Z3eBhUUS3Lgu6wiadtgeJGA7hLmzNGHsJpDrHAEzzY3rVHXS7K9w",
  "key33": "2LGC98xhRQQT32Ewgt5DgkGwWFsSDvAehRjHmCUtifwXzBtyemhJJMuVKAfC9m6TYp9QcdrBEba6Xk9z7GhyiYK8",
  "key34": "3YAtih4NLRfuz78eWqw1AMpkbrwWsxidqDb5GFbQE55nTkeY2rNcz879nh8KF3U42LxdrdMin9CogatHECyu5aHD",
  "key35": "2uTrKN1gZcjkfbwWoPEsohtp9urMQGUWtPYiHLEryzYLrdZQLJQ6hqPqXog8hRYnvGtc15vtsgk6BUnFJRMrriKt",
  "key36": "3tMPZ2S8xXPvZ81YYFwb1z16E1jy7mCaUCbsbaiZmeWgGdbzexBYTwyd7dBoL5zcEhbEonoTDbaGw2qtcTDGWGYb",
  "key37": "4qU6wGWkwMdbaDB87ZmrkqnEv8fRFC3H2yA3VXo4FUsWzJXyQ2Eto2SZoTKAgSjBQuPj48d4KAruKKSSaNPfqKpb",
  "key38": "1e5ZkmDVxgfG7pc8TqRxENebDDGzVh8DVLTKaT9VUDE9sLpQazWzZh1zqfiVMjqcyVwn7FVYWkXvrrKVwxKq1Jd",
  "key39": "3ghsqhf1UmyT97Fqrz1MAYXkvDAKqMtvzmyyYTTBmiMyTaRYdBmxD6ngbwmos2amqceiGkwJ3hxcDE7vpppLCA8U",
  "key40": "56RJ1YpA8aMrJPcBRjZP2mr8C1wb29Y4fMKvEaCHvn8SoNh1gwrsWT3wYoMtqgsfNSrry7d5RFiL1fpSBTgCv7NH",
  "key41": "36EeoA3qH3UMVutWSwSrKmpiKKyye7bSU67nMAS44n74HnGczsckXxsZvSUuLdyMYN7HgHnxGKCBKr2RML39zuQW",
  "key42": "2JuhrcMKFrsw5ZGZERDyhZx19We6aP9xCH9jU2i5KC2vs9BjkczTbfJHTdYDPmkG38s9c5v2i9ab49dTiWoSxg9W",
  "key43": "3Cs61MvHrzoJ7bkyepgC1P9DhT8oornbJEzLYdRUkGmYrqxTw7CQ6SMhSx8iiN5JikkJTeQbEuhzdVFMi28VoFqU",
  "key44": "4duG5DNjpWwXA6vXbwXKpFjMK5fhQMAMTwP8xy2tTVTRL1sCzPmhdup8ppg2kABxGNdaPYy4mwNRL8uU3ApLvrDJ",
  "key45": "r7ctbjvBRTLzpHp3gA6bXLBQLKZo5aKLiWDoWxpTiG4bbeEfGjVZyFvbU6FFqxKYPafrBr1pT6BcoXqt51YfVkr",
  "key46": "4Bdsw5T1BPmkzfiYpfPkzRSNTqAYwy9gbQYsrabu87JkuCFK7zKgJNNcLoHg5zwaod746WAJqEA9UhwzA9Nd3TPF"
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
