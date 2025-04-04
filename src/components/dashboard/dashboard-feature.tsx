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
    "3wDXzJzti143HTQAUprfSJc5BPvhBWMTfD4ThzAMW26vUpEcHjjjYi2k3ruk2sdc6bgvkcM7bV8fvHJvoJpKUwJs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3piTqVJEE8MUu5s3xuUSg2FMcokakSstVKrrMfZug4TNh7uyRztvUtuVB3vst8hmiUwFiW8i62XWMnbJ6GRTsBxS",
  "key1": "3gz22PUAaeGS9AnDyYCi314D7QHGVCrhnro9Avzefdsi5ucZDDw8GJ98EGu8294FyDp4BoL6DwhY1ApehUjAMF82",
  "key2": "qGcZZJYAJbCSvKtqanQvpNRERrJifzxfupt21iTEasNKYnoeUH7x1ZkqgvjT9HMvP2HmT7izWq4Cg9daknYmDQT",
  "key3": "2odWG7U7zv72s95Bq13jJUThtZLkAsBqfbaKQdwsDUSZx4D4MnALezbWbuhinLXNR5fYAMCmxzLZhuMuovNwzdXq",
  "key4": "3XZucXpJGwoyfLNHn8CM9LwAz9uHAfXYmoTwt2cpHqBCsndTznpgWM2bjBNpmzZWAUamZDcEWC3LwtFE1aN9QTh1",
  "key5": "3etEcPDto7C7jf92WzTp8VrKu9SyHzFvh9QLQjyr4xHKDz6MucBnBHB94J7WLKobKomqmk2oHsRuKHorHg6ht8tV",
  "key6": "5V63GkrgYU2gm9LrQbjFvVhUisWEwM4UKCiqGNyJDReYmST1nmDzo4guSQ2PKGh6LB2iaUysCc3bJ8oqR7N4rmz4",
  "key7": "2ghTq3FWrpBrraNcW6XSQHuM2afDdUSt7U1enAPdU7HVtbNVo8iT9AcExfoAg9FSgThcCAK1h4p3arZdJ8rYUME2",
  "key8": "pHACVAdeJpUMHejCGohucLyWoBYAw55uXonu22Vd6jcFVVqt5h8ZuFDLrX3Pu9ttJGEvxTxTEhKvUfBYaLLt9nC",
  "key9": "9ijcgiMdRpBCCrnBDB7o3QZhMuweY8TKuJ6C6LvjNsZQU8JtmqhVDzgR2MNhmYTSHXpANBxvFjEVEYYzAZiEctF",
  "key10": "2LQVz8ma8HNzyh4XsztudomXzmMfubTunLLv1LZwzwJCVsj7mMnyirzmCZV2dt9o227zKHC8LvCpdrbaFGKBbiDQ",
  "key11": "4UaCNyzUxeGGxE5fk8x75y3K6rmxGTZXHVDmCJwiDNVbrKHbc5dLhxWkhE3bYvvybLDMqfHE2BgMCvgfSdUCKCLD",
  "key12": "5onCDxcmwkqAp4S8rQELKJPZwchFb9cJnRMWBtpiz2bdVnPk5Y22WYcmgfZjE7ZqD7WA6xXZ8Yd8BaDuJpc2QnVf",
  "key13": "2jS58WqoRzNQPo2rSSVgb3XcrTxzxwLtuWAFqregVrebpBFpSy2qypCu2wgz9iXQaqkCUbKzKQ7RijLGNas1Vyg",
  "key14": "5GCGrXwh6t1ipm3kYZqJx65FzFgHWYqQaJC886YiD9czjQY9EXgyT1oiq24QvuCPC8aSfPQ79fd3huqsLd7FXmuS",
  "key15": "5dbY8qZY1tp6gjVa1Vi6vVY3FvSdhE9vtC5deeTvjMwRZTSysSwvuKEiUXyxsnnNd9LTSks6KKYjMAtMnTzs7ou6",
  "key16": "2vH8ZmCETVWrT3HFTLZktiuLvQwFChbBw8Wa7kAVFME6fxcSMtBfMh1SmCG4bLJCPFiTPLgQWZzVuZBjL8kucvc3",
  "key17": "3nHH2fbneiXyiUJxdzhDim8CcpQReUQyP2cYbEnVsYPbW1ht9HEj25y3CVcKhdoAuKFaGmvBxi3UF26sByMjLSkm",
  "key18": "217tvsjvE4pGj1gEGKzjbF38eE4vAvj569Nepm3Sz14bMwBABc3XCWFyLSdC4oY4ddjfGcG2AkzhqQmL3EU66pXY",
  "key19": "3Wn31bNVgB8VoWbSh6V4u9Q27xgekwK3ifgRfoRuqCp5FTDqs3VPLhTw1XCGDk1qsTaBWFJcwjMJMG6hjrjvNXEg",
  "key20": "3miSsYyyA8kZ1QN5RAvNSi8MHqCB2UxuQsr6yyrdSXJVg3znRuLTnVnjLxZrVjhiVaWuiL43sMrvNY9d6ak3jtUH",
  "key21": "DkrTiXA3pFymmD7Xu67tDbYFDf9TbT7X4K9SXPZcPmEiojdj8XDuTQow9QVLmAxP7878im2UbmoTw25zYnx3oMU",
  "key22": "2TcJuAARwM14o92AXJDaNzhuLTQ3qKVj5DccSiLCgRzuY17ufKtgocj3QfUAWFJCvzV4cX3TefX9tr6n8g8mPS9k",
  "key23": "2ueBd1GgfFmD5PfmvDSHYLpCEXtPBG998NPq5QgDhzujxUbvJqhd6hyzB35grpDoGW97oovxsbPqm5xriuVtFS54",
  "key24": "26PoDsxm3xThnTRA5YyQsp6YtNczaAe7sAqb1XTksXZCSSnLbRjWYDJvUfTZLv5b7B7aimK2hYrVrDh32XRCZ3Rw",
  "key25": "a53P42tSuaQy7uXD5W81dHxp2fd5m3QWk2RFF1ZxJuqPCsJZ3RyCjF1E7bMtx5Fk4N1s6xUdxzwtBVrTWPM3MF2",
  "key26": "3s3vPMtLEutKei2DBnXm8WXtpqGYR2Md1gsTbmwbV5ZogQsGh6nsgANoz7g9zs5sttH1UZrbcopRbL8yJ6CBxYGa",
  "key27": "trcoSyt7uiZjMnBjV8f3VkNsUQs3MVX7jFNRge9yHHQpNQFCThRJ1kDSQepCAbvSKKcMKTyyXWxp59gachFiUrf",
  "key28": "4gRtC24t3LMK9Pz1Fp5Enjiz33mqN8u21Wx1cJXoHjxX8xtKprvm5wNqaYYR7jF3GDJWh1XhH38xJYjRYfnmd4Rv",
  "key29": "2y6JUPrrD8cAEJDSiw6gqu7SKNZaDHr4rK9ZAvPY2AnFLCkaxQNPgrAUfQ91n7Gsyxy21ej4WpgMigo9RrE67TEU",
  "key30": "4FYfShFsx4e5zNoUntVeZiVssvYsRD2ptBtWWoMdDuVjYdXGdWK4Z3WmddBAAWejq7c7L1ATeyRQHAGE6MsLqTYW",
  "key31": "kc2QKignp1WncKr935DPjt7eq6KXDFzU2vDzGGPSW4Y7fkXJJbtbhao4QMHF26ZSfKgkwFeLsucWRWXoKvqjrkC",
  "key32": "3o4y9Bo9URtRvnNXGnRiJL3J2MLRh8wiPt5kxJp3PUBAwfKywQjsWqUS7AcATPVK3WmnXW3CRBCLvDnwybCA48SK",
  "key33": "55TyWF2BCkHKJbZHKedUQNJ97sGFCR8T4rnFcZypUYJ12nXLYZwfPDBqik3e4jyzti1W7oAwhsnaZoDwDe4CD7At",
  "key34": "4Fcbud3FnKe9GyuovMtuAaCTVPT5ULCtEzB29rWfUSDZspQfttoMQsBgGfDBdnG1GKfdK8qL5vEhB9mZHdMqENQW",
  "key35": "26aSow6fuWZgjAKj3szy6aXYNNgbymb4AHQDYS9BNWiJ2fXS9yVf8hGTw3jSRboVuJci7ra1c89zAXc1gaWzecw8",
  "key36": "5XzyfvcY29EtPKbjkA315nuQJiNCS2kWgtSfecPfjinBvzs938JbqUgugnkNJHstZTaXtiB8VREJ1vdDet1KqheW",
  "key37": "eph4Thrgss4XoZvUTq3RgFx8R4WYs48SJKuHa1BUPXR1L3QiGKDdwDQZEtpxTUbH81NUemFp793aVguo2QGYA3M",
  "key38": "4PQqtQUy6RnvbfMuuoJ4ntoiqvYDkPtrx2M53Cfd4KjMbTyeXKaUPn5QHLPTcQ41t8a4P5SyM362jyRxBVMKeFLB",
  "key39": "5yt8McArDfBQ56Qh6v13Nvfq1T4hkyMT4axGsNNGtDcTY7r9V6wofq8GrPeFtW1dy7jRTvzk5jA5GgQmAPYZYQiQ",
  "key40": "3tBzy718Rn6qZL7TXJJdzoPETL6A3S98JLsZA6zGycH3mAzyAGm3jPFa5d5Wg1STCnFePj2uRTsN5FLQpL2jrWBa"
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
