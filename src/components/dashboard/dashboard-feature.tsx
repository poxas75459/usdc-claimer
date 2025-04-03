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
    "3wnU8pQaHCqgVbfNM2CybySjkThCTJS5kRhxLdYAKudUCNJi3s3S3KQ1FjtXHVQyi4t2rz3kKryyxCbxgDEHVJFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iPQn4L1wWWGBp55HzvSZPPvbSCpYrMJYTravhi3YvAZyPUeQM6FJpZTTkLRUNcFghJtWoGmZjSWfTefoomLu2NS",
  "key1": "d6UDgi4xEwVGhZCsT93jNfzAanebCxJNe6ERRhfQjCe1z14cTALGpdgr7yVaeJXzmdaekiek5FzssS347We7wZg",
  "key2": "WZThfW4HnQdKdn2UP8SCpDN1HeCN6h4WEK8UtvtJhJ9Zi262UPfz2MqWQQ5kKZhGGCyTCzWb7WcFrTmazJtFytd",
  "key3": "rABaHqyJU7LddmrpRk8SRb7xEDKrpiJ5C8YcWr2ed21a1yrAxtQgTCPRZ7aeLzDrWnpRHwtoxdjYnd2KAnwn73F",
  "key4": "5M3Y8e3qd3LMUVBQ155jMiGVY7uYRmmQG19rDyVwJxqh2VQFdbfC1JH75jvkH2sj94W5pDS8GMCCNXWa1JN5FmQq",
  "key5": "ZC9pF6haPqZF2BurLTNbdBE6GCzUmCuiTDfYEgqgK4SYivCTAPP9y2BeouieWncx4BG6N5zftK45VtbYuP5QN8S",
  "key6": "4e3znKcAxUhn1hodpvkzMnhZnx22ogRPTJNda47ggy6E9ZWGX7TgrADH3on9CYs1g6fjM4Dax1vKQ79wG1odmtvN",
  "key7": "35FXR6pWVuuKUUr8ezQ73Q7WtMiP8pDxN9FiQCFC9M9F6EfckUBhu2LJkhCdCzfqazuHy3ZJEXV3tP1madamaeFJ",
  "key8": "3hn78pzvtKfdKmaubzc9xhBK1KYiY6nArP6y5vaCpuPrNucYRDuAdgSFPTfbDc4cnMdLtBoAcgr4YgkTkgXzEFMF",
  "key9": "4dbdeq1nRPeRu6quoAFfRcjfU5bW8zwqZ6su5jhDgXrBQShHyDKr9iPbizfWtG5Xzbx8uE5wSAYFtAzbpGZLSyYo",
  "key10": "4nQVusKwEYBEPJy8DynhoNxKdxGqcznFjVphf1WuQBmnyhHg5K8oR7uYbQoE4iinPi3BaafSTDCAnMFNVjGGXwRK",
  "key11": "2yGA8Rq8aykSKz1e5DauhGmpR4XnJRZjDCYyiTSEjT83JL53eDWTEjdY36JeQMAnBc8bXSKrJbzs1SumKLygTxAY",
  "key12": "3L97PMdE13WnwEXxgTGHmFLw35rVKrRNMzo3tmQ1gGE4M3oK9LegrkZviEoS6fwrmovETsaR1NHDv3nSWuZ56Fte",
  "key13": "KNEaiSRvt1EmVccEeYgrh1LhnrdQcUZadwJ9cysvCYFhgLEJa9MWr4DXFaCdLmr3kF47zTvezUybsJimbRmcPZY",
  "key14": "38AxNggidKQC77UuVzW686Ug1iz3FcWMtgLTTbQimEhsruf2Ah773SEh6hRaGWHSaQNj8ANTVdhTUXzHEBJFtaok",
  "key15": "2Awgw6Kz78BYLpXbm5TvJw6SnAacTnZeMfE7XBaDJjpk3tvxQLwLgnLMAJXEWidFUAMsELEqFJGXGfMpAXxBMMyw",
  "key16": "kgfCs7XAenv5pLuRyeRvC1fqTrZfeF81mXjH9AKtFEsxnTTNVjcTQNsP5do8Uh4YdywTiorWfVgtbPD47nLmoCA",
  "key17": "jFEkKu8UNrvJJQeqdnL3QeYQoJadUvGGNuAYzQj9HoxYP4wXj5rh5op3ey8AMPX13WemFpfumRyDC4ETBwamCLs",
  "key18": "2L5ZhmjUiYWqyxdwfDGt4Ng2QRcYoMbk2fDCzyKiF6DHgeFQKCKBK6VD9Jq2J9MRB3LMBieV5KGM4eSjya4dJ29P",
  "key19": "3QjGoSCNJhqNesmzFDY9eimEMTHQFPjwQKpeyMm49VEmjg6tPYLCY1ocXt9hcQAS6zbLG6LrgG34QBeMmEgU8oMH",
  "key20": "3LWmK9ZCjUFqSPv3su5dwksFSpUbTY9WanzW7NheDHgDtpUGW2zzmYupQF5BmP6QvgPdTQAfMTfregQ3JWALb7fL",
  "key21": "3gKVznrMmrp6gqYBMduFq6dwmis7vWVo17MjNx4a8PjiMj7hvjpDvnWLvo5LoNo7EuxrCsfZQCQi9c4Zbphr2o7u",
  "key22": "4YbVaTAzJMFkd5NddhmY9zShpdx5KnBddnkLwWu9poGMkJ4eyQRiwjw6iUaqMTUNWGPGeNGrC5NyJQJyfxWftMgn",
  "key23": "HQbaEmK2y4ppLQVVZmC3r1FyyD7xXQkjunhCS4CQR9vyg4X8DUPfu842kmMCftncD3j7b8dJonh4WrxxVw1muUZ",
  "key24": "4eMgPvWxjzmp4qehqarQW9uQAjRZHGUhF4xWv4keQ31PYTvPDFwJ8rm7VJeLHr3roTykK1qjDZrLc2YA2eHduZKs",
  "key25": "3LccerXjWfCPbYkM5okWE2f1tLRpH2xqTRT7a2ogRYikTMAc8nu6FunvNRqVtAUrJsAwpRdinrKabobhssQEDYpW",
  "key26": "YgjxXAD2UH7M4vVf21tRshGUtRGHPhGicQ2bzAnNxAVh4svkiknd7UHtcfi2yNyNqDqMUmYyaDesn6c253bokda",
  "key27": "3Zcbza62JKfnWC36JF1BJoAvZazkuvtnpvtgniGrkP7isSVSpeTd9Lt9JrKpBGWFRs5HYZfuPw3Bf98XKhBQEucu",
  "key28": "3PeFGkbQDumpYjW7XT7moFFCzQqWyTCK7SJ9cAa5Wnzp9JW7yR8e6ApG4fzNg4495qLJvpuTdeKVwggY3tCjjsFa",
  "key29": "2zBjcPJdUkQa3akKr9DnACJa52zWDb3N8Qm7UvtjjjoUUjP5mue5jKrnLiMjVXCnQoWdcDC7q8UqxKJ7fkX6Ayjg",
  "key30": "3PM9DDxtWayyW5XHNTtSkE1LdCvDfvDQCopqhjbrtCMrV6PiYnB67QGhWYeH1Rb7JkPn4qyet1vog6wjdb2aeo6H",
  "key31": "3YUFJWotVUEufTnWT5v3Wfhg8YmEsL7JDj53sVoGTEDz71FWGWjfht7njyADGwDyvvRqJtvmbbMRLwBddpMJR5vB",
  "key32": "2tSbd9ZwrdyxKMMLehQ1VBqyLT84QGjV1FwBN4JNoU2VVDmFfJXLAX25brHAt2pe14nB3GQrPsuRe8YVKW78b8Kh",
  "key33": "uTv41WtmBcXFgmVVerys5AfCSEjh672W8ZLAbuzUMWTUc4kyYLQJrut3UTfgdQm2T5VAeaQXWqP2jzrZJV3iXm7",
  "key34": "39BFAWUyrsvkG2VpMLQyA9CLMg5y1pgCKQ1mG8fYoGnoBCfLBgT7bGjorbSvu7M5cQEn12Pb8asTwxnZC6Pkbu9J",
  "key35": "5paFTVLMxBWCwmuoUkjDaf9t2yDadDiLJniVtcoxecMjGWkSEvUJhAYSCJEkTjsxd6GwEZXdk6TVqrGx9wTTd7XY",
  "key36": "6128mRPoDHxTxjhW4jUzcBg8ZwgeuiFvE9YyrdGvFkizduTxEtPTwJTQNmjHSoShiMZH5Yxx557eudRNqehbByR3",
  "key37": "4hAeqaQnximDEn4r8hmnf6zQueqUKBCUfdmuBu8irzvsRKWiHBm97j7qj1RZ1fXacfo5KMXQEbfi5WyWS2PQ56eH"
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
