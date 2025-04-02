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
    "4HWkxbHJCy4hDSr12SMgapYv828ecmBvKbY9jWyiNkNyGCVHSLDQArdzFMgeoqvnn77fptUp2gXAzmioukDpGAEn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j69UVPYbcqGwPkvCP9w3XoxLx22ugXfEFnLP5gk7GrnTyGRmbViBu1Lw5UsKuAg5rfimMoPpTLRP2huySYCDKH8",
  "key1": "23zAaZ8e5ZZKdJsGSSXAbpu8QwzaqtBPtmjuVRHadUg5iWa3YKs3WntDpo8L1zyMWc8oZwWGktFSG7JRhqreQbng",
  "key2": "iodmPuUqZRsjeUVfxRXvAVWmJheGkVi3b9xnpK4yGHcfBVqhoW6tYs3bURiKYqBU8SjMxSNs5fXh54ReB4iPzsS",
  "key3": "5ds7tf6yQgRNDqr4nRFdSHioBSTET5HBVo4LGKQX2Swxp2pRrrFmiHKn37KnEAseC3V9tAEePWHa3aXHYQyK4Bav",
  "key4": "5MHZa58aEQXGxfVTCTWHoD5z2NYZST9pY77LMHvKdhwmcB6zKWrpwDqWdnRWekjhvkK5S1S44uSc3P2Vf4sKdELh",
  "key5": "3QDoMhkatvt2tiwVfDZxNG6sYASArcJXAAnskNFdunbPXoSJVLcXzwyND9QyujYSuonmSbeMWfrK2kD5W5vPjy8r",
  "key6": "5oN7VDNmsisJdsRRKwWtsAYokMiPQ4Bxb2418cHNEiDbL4cFAmV1LndJYgFywySiFfHkmg956TcWdeDZKMGVbGf8",
  "key7": "26qfW7Xy7oc4f7JbdH9dX3a5jHF6aAJxNkEksFcxzf8XViorGkratu5k8nkRjom86qtUKkPoL2m9Jrfidsynmec3",
  "key8": "5fohqvSaRBW7vx3SukWCz527ESGkRQNG6w1ckVt3XQWPbwUMbionYaF7eCaiba81YJSmwe4ivoTU9S2spXZjZqeP",
  "key9": "5b5vvDseFz18jBd9QLhieFuFmkunzDHnksoXR5r52TGwNmLpfCZ5W3ERQwyuwStZLCgZD6UThNLcjFNhg929hDTT",
  "key10": "4JxaFawSgvUH6tiKQ2LGUG3brDbojnmgHMeDRdXfu9DY4vuimnYN2PSRyGZhhqKxPFn9VhfH5gzCMfK9NCJEZZLx",
  "key11": "4bGPxpSBXN8QaRE5hVfF9EZ8vuUbzQXRgLkmczMzqtcpdrfo9RtKdkAQZ7GaRG6X4RAdyb6pieDuWDfDoHNkHTXn",
  "key12": "3Q2ynEWfytkGXptMDUEbJpwfrQwyzk3yzkNvLSp8Q5QCsgbSPfcYH6b8h1NurVvSTHXeRpPxiE67MFUKnBXwzhjr",
  "key13": "nqpqVjXA3NeXPvPT57eAFq3ocxhE27XbykCJP2Sew6HE4e9XcPEm28qGNM5GGdZ1hH9wYtCuMDHzFrbwcxjdjFE",
  "key14": "LA9rYyRCbFD6J9wuwV96fXdnDoBZ6SmmvwnGGwgN3YYGDJV4UaziJqpaDu8dgxmBeYbe5wQkNavsQZqNtQAizmt",
  "key15": "5Mz9eE1ZGYJAgLQByZy3EDZY3td3NchAHrATf376LXD3P3kSiUrMtw3bgUoLswZsvNTckhyEuiLQhEFiiWjwbBLw",
  "key16": "DcNyJUhaMybhfGYi5cjoV8L5ipkyLDWk2FUHj5sf5M2CaswFxwVUTg1diws1A7SaCzMb1BWvVhzV253ewhNwuKs",
  "key17": "PNqSCDWNVbWmGsvzJKc7V9d6gJbswgmQ1svEXc5x8bPh37eTdLA5b91zvFNi4PUBf8ifoBF6Lii9TVAnTJJZxAe",
  "key18": "5GP7hqFxskS1AX8BuN18CFfDXjfadYP4QZuWfF45prYX5jHPRGQAM6fDuKcoFzAMM4aUBut21LKRbrmn6Vs1frTf",
  "key19": "35YQqa3zPtCxjys43AYTJZrwtSRZt1sT3LMS4VZ3JLUrkAptjxzZ5sx9eaCfUcij9ko1YkdABWRtcENZCTQohJPq",
  "key20": "5aeyFuKyduCaVyNkrhGd2cupUDAk814Djj6KmB8D21ZyHh1grk4xHjtq7o3WNqrzGHAvhfVo6s66qEcnzdQrQXGi",
  "key21": "3nnZuhcUNDYGFGNy6yyEhwtfW22WMg3vCEwrs1FaqL4N58Bt1oFATJmWq4ZXYNTE7VLMQaZuUTrQQWCVqMhtSu9s",
  "key22": "hRrJrojEu1iTP9pQ21JEYvSGv5kX2eNCCSmDnhEPSCVvLQo8Wr7Es7miZRKyDxSdi3h4CWZstmskyF9Lg3vPjoz",
  "key23": "63CBiwaK6CPfAZCM4nXY1WNYwqteRV8UufcKbhyihdLQ4bPVRvUVoaWQPxfYcrjd3ue7eku6XKdDfmr5TWxnwBfp",
  "key24": "3TUEcoNDSqDJL2qDWUYhkXp1dHyChCYD3AGcGgpGsqbxMB1qWG7Atbsw96qW9kArzdjokgPbJB7CBNSbQMRwqAVx",
  "key25": "ge88Lx2u2Ygqh5DmqCHpggofwKUYiw66VtABgj3t2mEj3TDAyvUhhuz7fynwNPF8DkVJXpgLY2nkPQciwAtPzRH",
  "key26": "4sXoM4sCQaBc6znVi8zkkja2CSYQjXfJad84niQ7nhySeMY84pFea3qztYwncrxiB4bcf8XCozMiuFFudSYgNQPm",
  "key27": "4GPQMwBLN7WE8nnTcMpGFUQpRHAhdcr3jiU2DHQNYZ3eEMZYrSCSJVfZzn8Jf6pm9oTLVhKnfL7QaxMTbGZg7nbT",
  "key28": "39SmrYXp9nREAer1LCD8pcEEeHvLiLLR194wF9J3CUKhuK2QkedgLujQndzkcdM1cE3pwjENyXidfe4A1xbHd6Mq",
  "key29": "JQGdFNJAmiZnBZRRgKg37RvE58Je2TZ82aA6j7CcF7LCMVfdHNGsu2xgVJv8VtT3DVPx16qmgQ7QBTsdzZuzuhP",
  "key30": "PibfMzYXPDKTAjN7V8FaXKskdt4s1XbmJKKVK3C72vTYT9ytKzBSdaPj3UnG7cbQomwxmpvbpJL1ZEURw1iJMdM",
  "key31": "3CAMcx2hweJk8wkCTZJNij9E9UQTCTupGGvq5PkpDokvGd2LzsLZhCJH55T49BKAZbnFkRyvmaQGSQR3sy3iEiup",
  "key32": "2eMtWKUqmST2hrQvmUeNZSacxMg6pf6k5hutJkLoHxsRhcJHjQdgTxKWLeBSw19MdWMMcBst1RfqGTpFT7JXEAEx",
  "key33": "17qci6Hhi4tEtfhSehkZB6Phq86JnCrja7E6aJpWiwCr1hoBzY6EYvJ7v76Bn4N9UuQaWes2yP7hkPoCw4y7YgP",
  "key34": "CNcCMbKewfUEPDoaDwYc3cZtpsA4gZoj9K5kMwtwewngKhbqShn5qxQ8Mf7rQcT4wiTc1Vfy3MNFRgBjRyPUqST",
  "key35": "6pjKiM5okfKRuJyjcdoX7UKMUVqfvvckzjRjbbnsFpuaegKPASNLajXPXteaq8chivKukJPgpsAR7vnkNYmt9q4",
  "key36": "keWa17EzmxL6oi2T8mHmjwvP1nWq4neKjYbwcsv1NYwhhwRcWNHZ6HYbULLmnQAC1xEnY6RGf9dwB86HEybApFs",
  "key37": "3WSUnUZ2tegHcL9u65YQSqqVHCUZVGqhAD5KyeE2ztP4y2xQ1SCuCoUgK8Mm7wMa4xGh3E6uD7uWDnEnSreCgArk",
  "key38": "PNjMBDsDaFuQkPcDBJG7zLftWgW79NCaNa7AyFD51uazb5C4jVmrFmxVfVuU3HNRrPk6sz1gj9FBNcTMoo6G6xX",
  "key39": "E1Qte6H6hGuvxZGX5kxsCXiiME73cXDHgAR6Ep8wiuutakQazHzTvqK51mKfQuLsqnWkhzhbqs3suTpT9TtN7GZ",
  "key40": "qiTx9SdNYTsoqDQSGw3QZrEHxiT6KU2ZGR2msX1xfruAFoXctvyfF9Cxw1t6K8pX1dbEVDq2sEaNVbw5vST8EqV",
  "key41": "2BxWrtpaatnvHxUweY8T97TZjCDn8gUyvtvRwrwWeudQiRpJPTq2eVnWmEp6bd41DWLLLMqWmfXGpHnHrLdAHzTa",
  "key42": "4DTBHX1HQSCeVqj3TgDGGjMZU1cCy6XNBdJ2fQgdU8uL4siKSKX7gGNFG3hDxffhfvoMzQUHshyCmhAmLPGQxKNy",
  "key43": "3oUTJu1ys5r3iToMLa4DTdcZAYeEwq7WaAzTw9kjAkgV8hF2GMFreHgUaBtLCzVf9RLkzFoxRZ9jn2fXc9WXcDKB",
  "key44": "52nFsPBatzc9466GVXxHp87PyiHWWQiT15QCjzaWB197V4GT2XEthVkae3qXeKiso6i83UQrSazTrhNpEhqBABo2",
  "key45": "3A9MQ5kdGpqPxUCu1FnrzkWaPYMvr9ZzZVX478uu3ZbVSaJBL9mbETGABkSPbUWkfDauRbQzYbzMxnKGuz1U3gMS",
  "key46": "3gVbhqdsRNgmd7tmJTM3tz7e78YRf6n3SqCxi5FEMpgPtrzyWKbbVzd1FWhzqGA63nCG21LLmxo1f2JbbPXz6N3g",
  "key47": "2VviFA2JHciSi44KWyCaZT7AvUSFtseY5tPvHHrYzMYcvqNQN7uJLCT8LLCWaTZLJWkMx4jFbAY5KcqyFuqeg2Et",
  "key48": "2m6SvGaGSEhiNX3fuYqW9FQbMGgTt6Kwetv7eVdxgRNcyHmCgSkACGYEXJSavVoaWuxCoK2fvedNpHJZc5cM1z88",
  "key49": "2SeDvipE8sh1HNmdFpxJxN6KuLjVSm5u5iZwvipWSZMp75PzxBNVzwUqPeB2NR5Z9iiosDNqsUS4VQE4hzELgngc"
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
