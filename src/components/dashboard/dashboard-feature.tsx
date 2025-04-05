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
    "3Qqi4jmEtydzh8vXkdkcha9EWZh3PxtakZHwD5bfUTTpTB9tvj4mUKY7DxVBNYBMPpCmK53SEsmkZ8mYZQggsVQ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mRsf9sVBpKMye7CxsLi2sH2e4e24xiLBJV2Pj51qKgqhJxH21vvYZaWoJ5bxAkeT5YKsnWjddDfWwR8iKBGokSL",
  "key1": "4D7QeoTf3C8MXmfgcnY4aJydQYwQ9LBJjTZq7rmJfzg35S7q2oxfVpJpSL4ZX1N3MGKok2VoqKYvqkEgkwZDeq7s",
  "key2": "Mi739VZNZRa3SCcrhdS9GDNchN3gZMpPiU3Hm3Rx7GVvLiYmjTPkXdKyR5tniDYxWsn1XFLRyi679kN4gqHLGQJ",
  "key3": "REaTTmrzMSjaCThX7YERagzzder4Nh1bZGmDL394WSUkxsf2SbXKFs88y4mv517jKH1GhXj3tgfNtKVZZimys1E",
  "key4": "2cUuq3LuEJ9gMo9BnsDiyFQx3kfksWf1LyY8tKa21HLEHJE9y593eiYmEaYVRwiic3CZMiSdVpRyxP3BSUV7mN3X",
  "key5": "3S8n72zL6gdWjoXbWJzh1Y4P67JJPdRhBvnQ64ZmHkFv9wJCZE9a5nEWBirt6QKAUUHpVm8GJ7zCyRJPxtEQyEyj",
  "key6": "2KPpWG9pwjkP7ECjsfeiryGAcnDeUezN9KUaGWDhiik9UzeRibHHdiPxrWqipqa2yZm3ejHT4gM3UFBipiYNRMfQ",
  "key7": "xJTYHdcs1cKzBC1u94VuiKPsxmXxNKNu9yyWS4rRu5UrrfVeysKpgLKvcpy5RQwM8hnnYzUtKPynPGYXqnLK8AC",
  "key8": "5ykYNyzpc849NxqECmjgcF4Eyta6yCdgq5kL2km4Hb97cJXQsNDGt4ui2EUNe3ccPrUW8K1F4ZEyfqVMYtfjZjZa",
  "key9": "4zXGMAMANqPa2pRABeKJkavTMUm1BCERrc4cZNfXQgsWZXL3vQr5e9T6S1Q9pQwHuUJSL8FtaBfPr8MoWbnYAxWX",
  "key10": "3FDLeS8ZiZS7SdM22gPVxXinSxqEcGG9e8RurBRLemkQZSdM7ZhSVxpr7GydTekvykgNoF2spXozRUjVxPeSrTWS",
  "key11": "2PhWVCEV8mqgtEpmpVfJU9VbZkxpVuoJusiWk8HMr6t2TLdAucB667vf1BZxk8Q6KYCLtehN2BYFxz4pqmkH8rh8",
  "key12": "3AahgyGbL3geM1bMPASx81GgUEdUbYqEjUiBM5rd12QxGK2hfWds9GPqLdq7BX6ZG6CBZgCrqE27Mp15qwL6UotR",
  "key13": "3KuKPgXMvjAPhnkYSWi8ctcugkvnrB8T4JQYTTc4JCirTTfPWe37TcXMdh3SVvExVYDGpVc22dEWNgpnhdnxbDva",
  "key14": "5nNvN6D92xFrrye3UdrJrVaeh1ZGTNnPiHgRCUxDyRzVspJVJVm8hn7oYpT54cpcj5ULh2WsvnPfCp6XQnrwtTS8",
  "key15": "kNDS74GZJNFKHpwNQVPBCoPrmZGzm2WfXgHa4gVTeKXNJLQcYrbDsT2BLnFHq8HAkqH7T7u8a88aZUSiu9zD5un",
  "key16": "EAbm8JvdG4DNEqJC5z9qW145tEANr6tWoV7rAMGgCCiatyihgoDXH4FpbyYpE1H4Wo47TFJobtRJ57zuzwsTSzM",
  "key17": "3Qu5wtwwySyzhJgH1EgosrzudC31K2yBmA5RidRzPWgqpVSEcUfmqNHz6GRAPtAfA19VvMFvzxnUAS9sRfCGisEd",
  "key18": "EiNzk1rUujcrxBhDhxy3CepKZZVq6Dt28ZnaPbMMwSEWKTF2RCmvx7ZtpFAi9HRvomJh6ArEXKRNJSVzHJFMy6Q",
  "key19": "2JiNWPxeUVtJg7H4KdQ2tQz5whE1QMeS9DxCCDCMnFjkhLRLHkQLEmKf3eQFHFbchLcmhPQknTmR6C6Qc7rNVw41",
  "key20": "3SLSCUZqJRhHwzxNdfNNJmXnkVEoyvs7kbUeABCrZ8PsbWAHbwL3weENQfPWqLtmGcYmTck2H4y7dWi1Vy6gZX2N",
  "key21": "fANAcTT3uhdefGhZS4mN62CKZ1b1eopy12BuSXhYAcw8Nko2tCXtzutLc5jKD2d16H6PJPcyKzop39FNz9gwtxP",
  "key22": "518yetE84PaqDoBX16pczQwZbSNxfBtHJ2ucWNNpVrxaTJ3R1AXVHCWUp7KtQqCXZvBhSDVdqY1Mde86kLPNRyAS",
  "key23": "5BNA6zrajp4eLvxUjEoMkP9xjHw7d1NsiiFKkX7Gvt1XR2EwctRrz2D4YAQkZqReDhbMHPBNgCs6w2ibJVw9647S",
  "key24": "4QQpeCdaiJPTUzALGRrpBGtAX9moKSXs3A7KkRrKJpQLuczbHEVsnVX51UqXMngdJzrff3bNixfhuPkkFm3XbEnZ",
  "key25": "3WDhDrjdctHqGRNGRG2EZuSt25YtHVz3DkS2RShPUTGhGLwqMrSB3gF3sRKNwE9pvT2gBwERGTCsYh4gxRjPSoha",
  "key26": "3gZCqLS25RSogKCQx41pCxVjwvE9Txr2pQy69CadTMttQV4NiZFvRLQ6t7JoEkoW2PcgfoCUu2skVKV1MgH2TNDT",
  "key27": "3V2S69T7ZtiGafVVZaREpJ5m2jABoD1yWaDTcWwuS888B9EkwLAfJYAQhxx8i2xffg6iCu3Z6kDhspkkSUdzQx9N",
  "key28": "5rFpLzD9btcD3gZQAMCxbUCKNvtUWBWEoSV5nHrqGs6JPRnaskKLh4hSaPv1GtFJr6b7CDaNto7KPEgn3zWCdkK4",
  "key29": "4wJgePVGQsTMpSehXFYsmEbSbgane5RK4RqnhPw7PuF5Tw8SPz7RcWTDGokv2QGgyCw6zcTYHzAPKvAuBHUqYCkq",
  "key30": "62KjTwakKsP7bGEbycdyUFsxAqVCqFnrfF8VUTzE1Wx6PKxUH4kWZcwEkEBMsRhqPxhhA6gEkAeKTPjaWv3XFJKf",
  "key31": "4ibus3kBcTPJav7QB8MNyc3geQcPnwJzpH5Zq8yzVaJ1eER9hkGGDfMPFYrej8cAMDYWaqi8USJaZ9cD446McrDz",
  "key32": "f7fE85x1BexwAFcGCqAkaTHafDzcGtqMKMYt2eThmAYq3RKDwerAQEtC5icwgg4o2KCne2CRWpZd6P9MZNtZBS7",
  "key33": "4z7NGzwmihUZcTmUhXDFMzv2rDkQKiQRpSSKZ4DGiguPEUCaGgpyfN7A4wr548LUdLGgsZNYYFmMFHXenyrkeJvu",
  "key34": "2Lp7K3dnJ1Wzyo45YTEc6eqHARqNHTKkffuGkDHuNLJ1iwMYo1XqYvBwmwgqMPmptWZ8vYKRRP5uHjboEkKGu2eN",
  "key35": "nMCiNdhQoFAHy8TZhLT5b2u63N7KVVZwLkWuPpKzAsfMziFnDNx5CNgTBZQHjxW9cfLfCyL9TB98Yndrop2uFC7",
  "key36": "2R2w4TKGKZqw1R3ya2546A9tFCKTPu2sfuzEZ3V8eFuArwA9HVQXFh4PbRccbgZWeeaLVvANQFmdzvGsrpgV6Kgh",
  "key37": "4gwNFr4Sgw9imPovYfWk1Wj28fya4om6NmkVW59QpEnSHypvn28PAL5czu3CdgqjdgSAnxiLYiLZ5TX7c6UfBryo",
  "key38": "48BxEbp3BdfZSvF86zSsXTZrW1egxFjoAT85hGLqaMBzgtcn8TcGHgGdc1PHC9NnNZpMF1veqJgLzmRVBy4mydxm",
  "key39": "2mRFeL3J9wC1Vw7bfe75DKa6gBCcJ2sFEUBk3ZmZUvAdUufdvLCPdwh8mjDDjwTL7NQwZvxyD5ERgtBg8BM2DJ6S",
  "key40": "24RC8rxMMxBmV1xDrKjixJikpaT81oxM4h86GHef4Wq768tRDNkJ6MNuugRUMRF6PzRqKqKcRScyzYUY5irYoC5Q",
  "key41": "2KSpcmWtGDVV7mTpYHqpi2cTV1AaD5bBwhTtUEtPNnckrbGPUW8ceZ5ijpiAxxhwygdxS81GcUZX3BfbaqLCr3zv",
  "key42": "yxKazSyYiWeKmYfKoKix1XCFLRYjfAx9koRpzk4wst4v4yVhxytnnhkdKUe7aWEcTRZCbgx7wUyBXqzR3CWhZuU",
  "key43": "2JTDoFhwoqEYkuM3Bpy6RfJ3XL3bC3p8jXeefNhGcrQcPvWWiMT3Jf2Qi7VccSUxzfpztU7GoyZk4s67RxHBCwJY",
  "key44": "5977aBoNZezFdGHXuW9gkdjPipwRw3tGTpPvMtZSwMRDFkdAUDHNtLbj9qdHYZ3SzqsY7UcubskLJbYo6peddZvS",
  "key45": "5DxFFPb4wQmNXmcQSWY6BtVBu97F87o9dvTfx1Ew9JDg9kGVHXWem9rvrRB64Ctfvwa79TjcSK6J9HHzaUFfsUJh"
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
