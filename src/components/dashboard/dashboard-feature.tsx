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
    "59vRe4LwbJm5w53khnKKcZptepZJwUJBaQ5nf58f7ZVv3u3SsXYQHWLvhUqFta12RvMxvtWd1YpiVDKyr7iu12TA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EoY8adAFVZ2pjyxrGbEppohjdnbyA4ZHVhVGML2eFtMqoaTrTQVCcQMGwviZEVSgZ4fXrpyhdcoeWrF6r9TZ2MR",
  "key1": "22LJjoFWbfdFyVywDRDrq9jV7Vqyotb4Zh9smKbW9BcU4ZiQvZwqovEyVzA3v2TrfufKUknvUXxwBg7ywPrfuyzh",
  "key2": "3dY5XcyMeo7PuAamCFH7Y4WwCgMerYF9qDxZf4gQKjB9zCsxdMLeLWEsx9LkJ7yDaNeVnN9kUzRrn4qvHuAvh49H",
  "key3": "63DQ69A17AaX2XmeL6Z2Ve9C4PrVf9R7RKa8Mk74LoPHodMzRa6p4y5YQf5zJMHUPJUh11F5TE28UxmxSB68ro6W",
  "key4": "4x6GAUtRt5yFbmE3jFQwMPT6fvxvRp7td8m8HvVcdrZ2dtZfNE2YS66ni8ZFmLuygJF4K5vmfvcnQ3ScogNKE3Wn",
  "key5": "4aTTLCwPfU6UGhCmvtq5mcBanQ1MmGKsbMtXHA6rfj4VfXdZRGkZfoT3o1QRGxAMzxv8GDJWe4PgNi8JhghHN1Y3",
  "key6": "dz8x37jW1NqjiEn3awHESPtrRM9SedYxbkPt3m75VHx3RvZhUN4ASnAMCYcGTcdnCADaM3ypBSSLJGAqDWcDmgS",
  "key7": "28tDQpk428ysjkCU4aoentgdchXZY7wKNcKcScBzWAwvAyNS78XQaPVcswwPqfrbe2S1ubcEHzD9qffT8ZNEn1Xk",
  "key8": "4ywp83j8opoWTGtdbQb6WTEewRpRXjddstFftJ8zyjmoyVw2QXdLgUn6VFqDA3suivYwrtupaSuspPsfLxfKEQzM",
  "key9": "33e13XeU3whFCLTZD7DbLxXgCn1KVJG66HipnJQ1rPTrEZpH6LJEdmEmgmTyDoH9D5iVbYMAGC2jGufa75DK4KnL",
  "key10": "3zPWXQzE8rHBuqW2eP9vytmK8xRFf23C8BU5npLXBFXGVfiDtX3czfN56HzVuBph86x7xtS8HRm8WhxX7hs6BkWi",
  "key11": "58zDaoo36toCYrWAq34pZZdWD2fDqN6FDPog1fUwR4yeX74LdjfjPNURzb6b8VLbY6jSVfm7wcnHqnseCj5TkD2U",
  "key12": "5AVg5AoeVDiRshgUFkVYqqhAZqeNyNPVVGV1PrzNYr5a4gYBndSH877t56NLaTqB8FB53vCpDrFTECNtZBXmu7PP",
  "key13": "27QGCQYVh12LuVeR3suAE9tG5cWEKicFci5yEWkaSebXuP2bxEJ8XhTubmy1R6ch4hfb9UA6YThejq4maMvRwdZi",
  "key14": "4zhD4F6pDGfrBTkcjfyBHum6UjmLG7SosfN3FjVPTzcCJqfBnNTtGorBCdCbgSSEbCxqdmdvv8SjRrLd27MMqbsz",
  "key15": "45fzp3akJVEgNvdMz2Qq5uYo2cGNypCkoNr6v6Q3PrDTyX9L4PZUN3vFXcbDvAyu4ptbPTrvy2MrZrqVpgcfMDYL",
  "key16": "3ZS4KjAbRuxh15X64hTXFKhPNWtxU5LueZNaHe7tLRS588AyqsXhNrb66Chrg7hcYxgysLD4h97dPwmmHfzWh71S",
  "key17": "32Y4QV8zuUwWDZbeC6NV5HbWM64B92Fn3fUZ16zsUoSiQtC856USxGgWnJTBYNJvEdBcjXJ1GiD8A9woRx539Ci",
  "key18": "XAqMiLHovDqt1ei5PMe6y47HdADT8npUavuXExYEN6tNG7uUHTbYkp8EEgdMqFPH35h6DHB8QZXgGwnm2WYwEzD",
  "key19": "2fSvg9y56LKdGpSoBXsUqPP3b4cCK3FrVdMqDckFyyWgUX6mRnE1qBYs45RYDUHunK6Xmec3URBsMperzh59MPNW",
  "key20": "5jgNdTu6qajw1umWbiB8F5Gzr2YcjADX3xWKn1gbWwjP37ReLUuDdkQSpecsMVZon5n8F8tPRnGtXmxuC6fvNd5H",
  "key21": "3rBtxBDJLf9v3oW42zw3HoWMy7smTUUUacEH6c6V3mdJdu3NAAw6PbGBHQ54tuPSDhoYfHqDssfPtQTDwWWZJk4C",
  "key22": "WUj5DG8BX5CtCgZfhQ8avHqhpK6oX1pjD1aKsRfM7mpKGkZTbJvoeCxVxZ73wxcjYHpr8n46VZqKQENcgCk8ugj",
  "key23": "4srhtGPofjpHHbuiG2xkduLdCnYVSS4ZmxAA1K1ToAxo9zGDLS8xF9n9oxSkJe7styZVqmvv77BtCAbwTiZgD9XS",
  "key24": "3VkBgXoboRgUrgRsHHpxMhM57LszpHDZMprHE7Jix5FNtoEaoGNUuDK261prEtnNT6KDDMi4jvCaBJy3gJyLXCoX",
  "key25": "27jG7j3TMKS3tLaScBpiCZ3ZjbRFSxzWcFHSPmCn99SJzJz5aCsQ8YpJQmnfN6APRL8uS7KGxgimhudwEbXqyp7v",
  "key26": "5VK346MHV5Bg4QBPgz18bhAajiYhPi39BPg3ZbgHf2MCuEEE61xgLMbqoY6WFyw7c8apdbMPoQQ5qZRD1tqAdxuk",
  "key27": "Si4vqovKY79pApEJ15W3gYzrtauosMZBSo4WXqBBZ4RWiV5oxVPS9sJHWDvL31kYtRLm1iEyHsP6CouQ5dvnQ4T",
  "key28": "4bg7chz4FcmRvUBwfrpyxPjExfzYpbb4xmSGYLtjJgJZzp8CZQiviMQoZyCV8uvtsv91i6nPyW38MdrEkrW8pRca",
  "key29": "2wqWtShprpRC4tzoyzHnKZg5KLq5KriXY9gPVfBjNArxtMrx9UZvt1Nh5zZANgBqgCdP8mcu1E6PaEMGcfXNSnPp",
  "key30": "3gTTyUqFg4t4n2HNsRLxzJEuTRHMra9guB1znYzFaxmLZMo9j6Fv9Q1ZFmGkef35v1gK7nU3YfdiiVmHffEpJzVZ",
  "key31": "2eTQd9jtmMdDLG7anJ3ELJ2r6TXMaVWv97X5h52otrWEBGCD3fP5uzUr4MxtUAPJkNm66DGBSG6mLzLL511NokHt",
  "key32": "3X3cpymcjMotPTTnLtkkVWk94ppapFJmrtKkdVxUMV2NJhTKGbGeDZFZk5vavyZaLm4xaqgS61DsTa2BPFB3ryJK",
  "key33": "4Ki3gZJpNPp3YCFZg82vMxME2jVZLMttMgvyL4WdoD9MEK8yoCMiNLFAXJsZGhJAnyyE5yV3NZW2GiNq8JjeDVTe",
  "key34": "3R3NgndgJFuHHnn7ffYkxoLjCeaMXS6Qiy29HFQuzhXrokZnxV4FN1EtManqz5JDyNi99g9jzdUsxrgUcqiwixRJ",
  "key35": "3W7Lzritu41CUNDDCDoVgnYwVytbVM3HLwQSCcdgrsNkTjc38wgTqXW5XPCXKRNvaKQdJYnL91iKwgmWz4ezoqnC",
  "key36": "3EbiPEwWSQiUJeLmAmVbhczZasPu1dDknB5ESB52VFmzQQVP39t1x1z3r9a4xfWSSwuKMEyibhPpLPVEsrUsi5P8",
  "key37": "5L4m2oCEe68DpgnkAmG8CH5oQkd5DKhpPzmmEZheBg2cikQAn9FWrSv1hr9kYK4az2X9dzD4aqs77ijVFKgm22mw",
  "key38": "3WXFmfHS6KDb56LgxShBR8uj5oZwt4iEa2ubCEqQPP4h1RrbEVwqHUfL8fs9H2sR9awmZ5VFRHzQyXUMBWFCsAqj",
  "key39": "4whhVXVDEFM7AsWyQwLo6YA6utAsZEyVeFYABXjT9YVAyTcR8TM3zh1w4dmDbYVQpLXdEeMDMgr2gxwJmq7SGfiS",
  "key40": "3FXMsjWLqBNeTGhrSP7MHxs85GgxjjGJc9wRa4gn3aYNfUjC1HDjxzHmDBbWzZtNn3MDHPwADwGzzjMR62N5DT8F",
  "key41": "51HdKmFLSx6y3ThhtknHrSaKBiBsxxSBC4cgdBKxivHFc1Kyes6zC3ahYe22gyu21SQHzVNZwCGiwK8VyxESicus",
  "key42": "mrMVeHVBZE43neSkWdfKXzAQpSQTKB5Qf7mY9zjvMTT7DCavxPpLUZq4Y8YHoquKCh8QpqpvgQpe22YxaHjd7Bk",
  "key43": "4yyFaG5AZsEY7e2jZSnnb8ZQabwPXN7XM4yNtf1dFvsJ48bNMXW8rJh7LCz8uMYPqveWsHiVXmD2cVHNWtmw53uS",
  "key44": "5SA68oZZvarc9jjHpLv82gajvogvUn73R8rUVJ6JN5bYpYQrMxNk3keMFSdmD71BuMR9GYYCZHbttGHGB356To29",
  "key45": "5E1f7jU5ocQMELw1tGmyRmW1EdDL8nGFYihiPi82dBh4CpNisjvxU5WoN2C1UXwYe2wKo6hdH9jWddDgHYCAroub",
  "key46": "2BCpxF4haw1bcABN2NMFeHntNxVAhabjQBq7fBnuQSUZ4ypaSCUYM1peYfMvMdeJrPPeia9bNDQ8ctornZKeueUx"
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
