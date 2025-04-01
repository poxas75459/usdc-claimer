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
    "5SsWFrcPudjCfGvU28e5WLiSBrd6EmrqtunwdvSVVRy94w4D8pFuJ5NoMfevrXf48MdfXXCa3egkvAS3nEHPmof2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VzrTEm3S6i6Yro7suryLDZWiKvVwrSyK6Fu2TrxTuKwpjinrU9VKVojDn4EWhxZh9zdQG9sgymVwHFC7JgiBNDb",
  "key1": "3h4PPBvzAzdd7ZG6YgmD77Z6y3nfqF2vZHpqDCggvyiaJQRncPi31hWUHXMXX3YSTPWBzmG1TRKvHrWDHbiGsZAc",
  "key2": "3FKZUmobEX61mGtcAv5Tbk2a15iyMtXrYakcYDMM38EdQEjFQ4qyxQykcrhmfoyQhSToZ68zeKWn3QBakMEp3xLQ",
  "key3": "5QTYbyKJ5DtrXiSaYA3gfxaJ7QbrhoTKGBcnR4Vg4fuhoFNgL6xMaDCqVJ1MA5gkRYx373rQcS7DgXoGCfSBBTqc",
  "key4": "45AKANBQaXMSwSndCyiGZ6bsPgHTpas5dKNgffubvfPKk4TGWgbh7ccEZTCYWVHWoVvJAaVgVnVra4dfKSt6M34F",
  "key5": "sk7LWJVqg2pcP6MyPeXvheM1rMw444MqAe1mJhpmfVi6U6WturAdZmXwmKwALQ3Bg2STdWaDnTZwRCAVKd6oRgv",
  "key6": "3fmujndfJkwaW22kvrf6PD1nW1cZ88sBcZL5z7zRz3buLpfH9wXVtjfWoVt3MrWnDCnBmGGbBetrwhXwPsFDfzyR",
  "key7": "5fjxA9qW6q9NmFvdsPj6jdm6q3jgm6C4YcWDL8bxna5tXefUgekNA9VFC9vAd38cSB9mvxbDfNpmBPJTzgAsVkqc",
  "key8": "5ikSZiLniuk84kbSxXSyi9gZK4rYKMq12ykYfMExdEoph4gvoek98ZeZCh4Py6qG67NXF8AfyLAPciPzxbYUNVz5",
  "key9": "4xLsA9iRhpL9FkEsDw5tNrGpxsUE6o9kLbhhGTvgvDNd7SQGXbKXBqgXmP25nDEs3xAmfWGfp8fTvXwnipcQrPWQ",
  "key10": "4aeLzsZTryi7Z3JVFL9gSg43nUGDcskwiifEUCmppgvMnfvFj76wXmzRLHiLxv4oVEcnaYWcKR6THzzrcUxxKpzA",
  "key11": "9P4c6tkSnvHMG9BXrxfBUeBpvMPRHGpVGbyGsqxENHr7aWgmfkJ4CxPs5ogQGiDCwU6KFXUrnnxrBLG4tPrk84m",
  "key12": "8PJt5vzpLn2eLWanh5SP5vcZzBntsn91fErNtH45LjusJTFLTDiKUhQA2h7dejvMnvrxJ8C2cDJBfYywCbfJcyH",
  "key13": "2SfiRUWeyHcfPAEMBy2nu34fXrSicQbvsqWtkAPGvMzxes5k9U9z3jjtu2Ve3jWu3xNrse7z4bN8hP7pZnqDhPaj",
  "key14": "5DcpmQk3aXqL6WNe4YActL9tqvY6tvhsh9w71N7z6FTStBfxSy6s33FKoLvbqCD5Xjd1MD57XvXTzBiFRC1WkzxH",
  "key15": "2zGYMyqYqpo2MuknCUuPCWjQ5oU9JtdPbuZQiY8CkZTNS4zLmdyMQk1KspQHa7SY4b7QxFq1dmLfyUkaLgjVb8Xe",
  "key16": "4yDeXwcDy6dVL8KTtSuhLXBaLUMC91MF9jzjrqqU5DGg16UXcbBJBNZK5WDTU9i97LSWRrXyzaB8aDsoc7rojEuC",
  "key17": "3pe1pqsKgKSGbTiuaSrvnVkwbHGyGa2jFZCY4Zi1z1Deh4tdqa9prQxNLW18fPKpCGTquserBoPvBL2235u3xMEm",
  "key18": "41YvUytzVqoPQVAQAB1LcVG37wv8yezRY821TLjh6NmrrpT9jYC7gUX9bwMFPejhyZd9g3NnPUfVLuLS8EdTUZoi",
  "key19": "62V33FZ3zUmzPSEuKgEphbvj9rfHCgvH1nBguGo28XaogjXnDVwHxxxKT93ZFdsYDSzKrZDtYhTh6crG7PfwF84k",
  "key20": "3ZR6Ai6p6Gw441Amcy4JDgc7PfUi1Zyy77zHFJFUJkYJpPhX886TowSEL42tYVwRjYWLBJKbrvjx3nD1WHPS5PJA",
  "key21": "5sT6FjyetsDJajrh22DAuWY5x5LFNEAn4RC1eTTczhbqh8n1j8aipmscHoQNpmgPP1qExazReSGbHofPjJ8QQJpT",
  "key22": "5c1FB9vLC8zCge7xUv1nNrYmqcascjr77hW8S2Azj3JJ9nCtGLuHoPATzkbcsmnYgKVaFM2WL85Ey14owboFWKQF",
  "key23": "4hmjANZwb65fkGmoAUKjjdCbsPCWQuo9ArQP8swt59GRU1WWc3kGuFSP7pvvSriDkPX6nAgbnaCeiZgtCWCdwonq",
  "key24": "5G1w5EDkbqbXvAQzwHLMBi8KLjs2QcNS2d9zviFFTkuQZd9bDSU5Z6K7Y9HYqBe9Ka1Jwdudu53UbqisKkmSmpDs",
  "key25": "A6uFVcuZqyB4PvXg3w7dXCWQhDRUi93ney5ZfdZNekUbe2jd7ptXTTeP7ugkFRh31CjVnBDnwtQbmQHwKN9Zrmj",
  "key26": "5vP3KCDwZ8uQhdESGkoukBH9YkBPVRfPyo8qnmDcLtqbXgQrBp3U3zSNGczkiDroi4auToRPaoD5GjHcwPWgMcAr",
  "key27": "PKrQRpoowXHwaWKQqnnxFjDVLpeYwgFTeBh358jVgYRHHsMi2XSHxctn9FEs7v8jL5ohqGYhYFAo29zzzAMXzh2",
  "key28": "ufzinQMrxWGY5sqsymfeSmihFZGMGLcwomKTwLQwCDZC9o6yFpuQhVEdGqqVsZ3qoWwCJ7GNMkkoZMbNHtRW1Sd",
  "key29": "5cDpjGA3DzoU2GDrnWPosqzS2WCsNDrKNTdsQYvF6jv9n7o9e8wdQVYBfsqbTAyhhtvp5MjJL8wM4dAfwEY4L4eT",
  "key30": "CRAyHqXAnFELHFUUHDWu2xh6SdpexvQDWMhHbpoPNqXApWcZq8hk49oSV9XuTfry9mhNS5wD9X1MMpjyZ6FzhFQ",
  "key31": "3a8JBHt4tvsBEWoVayeiRgDZLfAvuhTmBuHemGscaBmeERKCtPDwjrqMnKtYJSvyJL9MhTAEym8E6qiEdxifzyx9",
  "key32": "4HyBEgLapxu87wCR1C4GkhmEm1N53uubifLtrZNhAgMoiqeGLVaVre8abchLGH89U8ia18UzfFHm9pLNqUnh3Mg4",
  "key33": "2caLhj8LX5U16zXive8zRmWRJdHy85yqxoNyuqaMFrweLCd5pGrzqA21EnTTUUKQDo3ce7VZ1WLxLHWN2Bh9X4bu",
  "key34": "4zFFe12pgnQR5s5AgbLL3yT7h8hjK6YJguukuCvS4MrPGeWKVKVhE1Dp6pUU9ZxHArGoKVK5ujXEHscTJ9RKSSaT",
  "key35": "66HTtLTSzTfiFbkWonTNM5Vw6uVtwXzhVKd8GoELhZev398E2CNr8af8vYLR1Bihb3thcYNfZJWw8ip4bnBt8KYJ",
  "key36": "5ePoNpWofYQduaCy2AJZe1FAt9SoxMAr4qEwhmS25xPszAaovwRomR17R6UKXHQPdBxNUnXombMfzK4XVHHM6BrD",
  "key37": "5JDHRbiWwaTC9gC5hXXPTCT635chW4bQamZwAMkekVXUb9k6BYPzVuBWGLRdXae5HMbqHS9XRMofPZGNkq8TkN6K",
  "key38": "RgEY8hNdrBiQ2YLsAiYihwQTkkrEAK3iNnesCTgAkcnbyB97TZ8F8Uzsv2Eb4a26i3cuHDCbHnBk325PMHddGCc",
  "key39": "4aK293GRC5SD65aBycUtPRs4MtpZD5QdEvj8uLXPXNMFpK6ZVqk1HTQnvkjs3oxLsihNqbj5PEFci9FGWSta2u7q",
  "key40": "5Jj9N7GNpjkug64YwWABbTWEEuL9Kwy4hQFwHpvoL2zz2uWJxT66ZWtYqHVcjTS32XepXDRpfeNBdyTiuU14vw3r",
  "key41": "4ZRk1wEubG8bF73F62knNbgxXG1KwhsJW2M9tr1TtZunvQhpLv7ux3GVoKvyAi3uPyZmuvXsjcDUm6H3mymJ6DsK",
  "key42": "2c6ij3GY4gDmhaeLGwThj8wjLnQwF6SqRawwxh5Hk66afykXyYWaV89F5qw4xGpr493TvfJieTKwrxACfjhJbkdG",
  "key43": "3ZMhr7BWn3nKbSGcHmptdyeNDynKrXbGi4saHtBxgb5sviZjkSShapCLCiySGGAqfT4UAjbHh78m2qpe2sXZQ7bq",
  "key44": "2XwK1zuQi2WpKv2vbh22Fz3b9RJDatf4Yjq7GmDHkUCihiqkzTVH54SfZu5bqbjJJgcCvfXCJBDfjsatr5cF92ZB",
  "key45": "4BPpAJnXPG7r6npkD2eUnHBzu7EQToWW2HcrV6p799G5UkRD8UXmcXofL2eZvXLBbJJyQBQ6FBjHzXkmZnfrqpzn",
  "key46": "4xNCoDxZuVFDtojWu5UD1J19bnTpuHRmkKsKATvF533E2myzrhEdU6Wt41eXQTspnDEXPex8jQWHSNHwMrfsAoAy",
  "key47": "2ZhF23neoSoSp7QDikNYbVpCycfmCAReCEoryA5tpnZjS7hqzMs4ZurBjfn2BLA32djrScsW9BFEMjxHHo8FwViT",
  "key48": "bWjA2KcTk8KxsXvgdLSyHfQKNMMYGM1VkmtPtDKf1WbXi1e2FLduapKGoeHZVwh6gzHgviuHQ3nuK9RUucUDCrM"
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
