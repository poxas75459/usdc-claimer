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
    "3gNnQGvB5jChxqUuVakm4tPUJfhzmU79Fey4a4esUNdmAwhVSSGR7VmdvGDS7orkKEVcCUp26BNdk9Jd1mqtxnvB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r5D4mDutTyisnKChKQbSM9KUbMGCJnBNho4e2csft864ZVjK5EKk4PVtmgSz8cPPhzA96HA7HinRJEVBg5FyFdi",
  "key1": "5MvpaMLNc5J1fw4FDjufyNiE4vbrjGDUcftUEavkbMa3Kh4r582ELosfJxEf7UAXkVNM3ToDsm8YE62XcQW7Sv2r",
  "key2": "QWofGynrqhxcHChr6pr42MVaRLB2UEMw4f7udeXU5ixFGwfoSmPPiWKNcmtBcJXi5PHYXMonFZVLEWpFALAoM3y",
  "key3": "4e9ogtLPtQsKXYMdYHDjh2dyK9mSGHmWtaGCYoAj9cnxkXVtVEPmMmq2Sqe21zE99hFnn9UKZU92zWB5884b2WMK",
  "key4": "4KJABetk2oiaDfmmYcuLbaeLTacvSHyBR5ErtHf5Q6B1rU79p5FJCKkADUJyyunTUVrZGM1q8QjvsYnSjwhfXiYj",
  "key5": "4dpBhavthM1nNS48Qfaf8bn1spVZey4xTW1oK9EGWAcK7KjsZjagyHkK2NY5P1NiamFSDDAbPugCx1Y2xn1bKmse",
  "key6": "2FXxmpe5cjqarzz3vt9w4tVVyUMHDGVG9iHYDo2c5BszZDnEPMB26JNrEiDkUac1BPYUEvToFBXbpeGif8CQbCYC",
  "key7": "6288Drn7ATx3Ni2ThgudQtWUB4YieKtKBovZoL8NdxDirwu1HtyTvMjQ3gvgCK4HB7wYe35kG8e6eq8isusHFZB1",
  "key8": "4dDGJRtBwC8qc1xofo2BuA4TKTHezKDjZidduTpvchFLpdfs3FEuyMQY6yGnQoWWviNbMWieRP8WFCqZktAixB9N",
  "key9": "4qGHSZhr2ZB6RRhs7f2i3L1yWYd2B7wJG224ZtziYP7f4GoyY9Zr5jqw9GbmY8MC63ToCCdJGwqi6MdnYFJM9KfW",
  "key10": "L49uFCF4T4r4oRk5Xgfjf8TDwWzyjLSGaYd3TQ2h8kfBG1izH7nbtSDQSncBemGpYaApq4fs9LdoDFVjcFRH8fo",
  "key11": "2NYLwAxT143pg8QB9d5Mpe3NKS2f6dCc4yPzSazzBARYQS2XDYhaJ3kdmL7Hm1yCfRf7uZvizNmkjGpPRCLM5e8y",
  "key12": "29KRzPCBZxMeir3GKXGUovo3k3NBLcS6svGddqA9P9zi7t6Y3NEErXo7gQyn2nZbtK1WXpDJV85WMcRjwbDoVsoj",
  "key13": "4efxwfKgWSMiTtebGzvNKwG2Fdk9wcYvwCNvrVrca4Ary3NQZZEkVnWvYU5Wrk6riUtgqWhy6BfrXESFEXrWFZqN",
  "key14": "haAR3TJN1iL4sczA53vhMtjKtYS6MkJRaeZsoTtK5BFVewEbUxzkmp39YJbx21Mz3CxEbamyH4hikswMwrE2BuS",
  "key15": "2YQNt2CF9hAmKYpPFwL3LQi16i8GJxJJBHAqfKVsHuA7pBnepdYe4hyFUhDskBbjoi9jtGsGkET7QiudM8oF1HKu",
  "key16": "yvrwa68zSaqQUbNfzAnjP8vL2uucdq3rPtEHJBc4UVKotVo7sLokWuTYRKHLjcYiLkqWtXD2ydVcCFRVKkpg741",
  "key17": "2YpNeFyJWKpPptS26Sc3EqvJBDTckUTjWXih4uzbTvT41oNwAkkJmxyAwweeXBD6QBXyVAyAbe1y5vZM6iT9hKbF",
  "key18": "4kZLss3mybg981xHRJiAkkxrEA4zt1vTVKfFc3gQtNjDyKLnpQUY8DsT7x9ZE55AXygjTg9sheNVRyVUdy66RoNu",
  "key19": "2HM8xkzgKcspLTKZmPnQ16dSBRwyjKc1nBaabmnLy6tmfE2bUzyoAEchNLDx2qr5ptrTwjwQTUn4mEyZYjSs3HPR",
  "key20": "4v95b1EYJZX2bBhuvwjkahkV52TKi63VA2z4kWha8Wx3pXWPNYDwTcdcjE1AGTotdvzmh6LHrdzwz77q9WFeuHLm",
  "key21": "5eZFKWybSKs5ZWRXgXJ3qn6tWpwzvwqc3s4yS5zhkvra941s2BVjLX4Sw6NTgpFcsUZdj4HAmPV84nfLhs5uTxmB",
  "key22": "2Hjtk35LjP5K7ekT5vFMmZA79Z9CDuXnf6hnvKx1QQAfTz444EY1Rr2XphguCffEkMZB71KLHAyqXkgoj8SYuFu9",
  "key23": "iiJWnHzSuSkwzNeQGBqEGpNxF4yKD1RYTRAzcRUNF1p6WgCMFtzx2ULrL5YNHzZfYfNaPZYPxC8HF4PEP3UejtP",
  "key24": "j5a9YmifupLs4CmocwX5nqNGwwBcra6Qh87FAx29W42ucEhAWsetiDekC2t1B1Ths5gGnTiNjdS6b88PND8KMrT",
  "key25": "3rRk5awjUsLRNrSioW1V74aKQ1DtwP1B7wjtJNjB8ZL1igreeUC3g5CyCigAUETTUwTYoKMZ2PBEN57Q7QaEEKU9",
  "key26": "4ojAgh2Gm8PaEVHii9JLwrspbYSrAvWzpoWHd1oAZiNVdmhMZnjJJF2oQUG5wiTGVHsUrpQzMEdUt54m4D66SAUd",
  "key27": "4Ng82jGnxQ5QW4fXZ79kN7VcC3oDRhZvP5Fit9q5rYNU9227uF9SxVPgCHW7AjhY2TFqEDcDGvyTmm9o5qkCWg31",
  "key28": "5VVNurdvHMFH6obYVCa6r5sB1K3HobsjWdfNazr3sWm9DLdSwid2NvZKpDbnnfWjTd4fR3hrLS38NxyBR1FoYwYG",
  "key29": "GqEBAxkHoAWJ9K7dHpVM2UD1aFU5YsPd9UA6AEcpddkP5iUaMiMxyR9E4bKo2jo1Sy53o1ZPfD5wXMNGzkUdfEq",
  "key30": "4KfzkuBKoWNfQpQKib8XyFYYgRQq1e8LrhLuSTn3N9xpCMJwMZf2HxEk89GRVYVYjsMdsfnXRa6zi8DjsjTDABA1",
  "key31": "5E5fuoKHgwMupd7jtcyLGfKppMtEvjM8SEt636GrxzJvNcF62D2UbdxNRMGrHyBNwdkik3FJPtuPxnem7E3TXpGR",
  "key32": "7zf2j1wjRQcB37aPcqWPZSHAGB2f9FkeEKo3Xsk72fgQrvNBELEFq2JqGrEkqH74aMfgHam5nC5qWDZMZUnZWUe",
  "key33": "3c8PHg24nz1CNs9M3HiLNaJPee2NLWkqBdDyWSUr67iUrpcpmWvVEA7N2NMwQkMAaJtH1VezwAibJWpAZaA2ZfwV",
  "key34": "3EbK4nUxunBW3LKMJfYsd7xyiAd4iNzW6wxNtAinzda8AY6mempa2mHsdqDqzZkvbjAe5mqBP99CWBh4Kw72LBpE",
  "key35": "3zWDMrziWqmdbo3BXEFLSszqgj3HwcruWg4ivwAV1Ar6dq3Ypy93AeEyM5qXerx3hrHbNiYQH7hM2yzDH3nuk75w",
  "key36": "WDJoY3uNDj65cSBVdshNKACbtb7othZMboPTqub5dAprUg9shPjxA7dyLr1KxWzoHZMsEo79KTAFjVKKkJk1Wkw",
  "key37": "3t34yDga2vxyDYHj3T2pKctUyixGDGg5fZxJQQhxVNDLasABLbe6GtmKwGJpFyRCAYhNy2fPU1F2v6Fu47hU6aS2",
  "key38": "4EjZ8UTgrQqAsWk59Thqn6wR7aVCKYqc1VkXZGke1DfpX4sbdNsrx98c1UTRQTxqpEYzCfs8ovZ5JQUwyRLxjYVZ",
  "key39": "2kegsMsLwUDTV2MavfkuuACrU3gZp6voJvikcMzzauonumgms2wwE32ujTKfyuCWbjFg4kYFSedwoMM3jYgkZhNA",
  "key40": "LHExDTJ3e5NSDx4CTVj8m7wxqGX5QtFqkaUuU161pCvpYsYHRRD4rsrsxWvpWZzq9UJFUdhkPJT2tR1BkUqkkPo",
  "key41": "ZdyFHQmTQus35FsRgGxvkrx6yaVgicT4jPcvehisNM79e33715yUMVWPqwEp2YGUoPnvn38jQGmLEeAWUL5Uhq5",
  "key42": "4vh4t8vry39osLkEoWLG48zZVEJShGhpABDU6B5e4UKt6x8qyYvtkpQ1Qc3QT3KjX79STv9BgUfEmyDQz6jEXDhz",
  "key43": "2KdqCFmoPd7yfPgbNqqfoXjR8J3iM1WmL7wdvPjvNZvkrCokP7AtNDjqt1UmSu9AefUcZHv9NuKvBD4FSypcD3tx",
  "key44": "nPwzT8rH7BYs7351yQKskiqLurHCGNAuZfx962X7eJCt5n9wJWJKTQYgB1Jg4yPAypg9NPAZvnxdLUv4x977Q6e",
  "key45": "4PVntbr15LTFvU8GxXtexDqooqyR6Zt4eQN55M9gz5g5bBfBe5AhARatnBxtuuv9RjouYdYpaoiooxbJanEAcLJq",
  "key46": "UjkRyTMMFu34udsPN6uJhA4YPMWNZsdGcRRxmnViBsj7CUkvyR9cUhvv8MBoghEHL9bWeFhnCurho4LFP3ke4Rp"
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
