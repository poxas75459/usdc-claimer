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
    "4hNFBc3cJutWWXmFUrT6rszboJDPG6jnA8zBQoFjpgbMQYS5BzSFyErvqPDCjeyTNDoKtguMd35GVcpSV6NUTnGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51DFWHWJ9Tmf5x5y4KwXiyR26of5AgrLKx9HrY4VrdFzFeegXa6xa97LuxieP9bbeMXEXf2qposWMSsnorUDY7wQ",
  "key1": "5unARbsWe67M2S1a5Hjy7ERz6dqkErvHo8DccaGGY4o9V4HnHnYFHR9N5tn8gpawQgKaY4vLSAqzfTsQHv7SRg1o",
  "key2": "4PS4tQtFJCCsTHwFSm5Vum7FqWThhxx5rgAwpQk2SXHnMVveeh8HNVHZA73K6F948GTtDUrGh1AhKzP2YUN3tymw",
  "key3": "4yEmCmfG3gnThyDNceQbkNtMnNeBZyGGGM8tsJvMY9aCj2DCcY4uLfZzBiXxoajF1k4c7ua34Dpkr53sPiUiF7b3",
  "key4": "3aTBmMnBWwWiaxqTSpt99U3FeBtmiFoQaBWXn8ys9K9X9QdTywgtkkSmLdr9NKxJECNHEaXmaL65AurK2yBxjr8E",
  "key5": "5a66H85N8jzvJWSRUePCgMhJ5oa861zqoFakeLqTHZsNSz8QE4jmgij6Tu4wmpoHUdguKdqaVedhecPLM96fSvuC",
  "key6": "4fz3MnCfncaHWFo7WQG91efRCW8cxeydd5LrinHUnqQPrynJz5mmvNTsW3Fy92KofN7VqU5Nn5J17k2EhgnanzPt",
  "key7": "37moT3RrhU5ot1cwEnQcVrgoDAfi64FG6hA8GPPRSNSpPVtyXsyYadf6sRVv3VEz1rMPAy4Wt1ESTfVLZYQHvA48",
  "key8": "4q83F6tXqU88Kmd3LMTvFjwnBpRurLKSc5RtadBb2VmXyNZETVykTaZwkE9h9C1mK1aNSxwWm78hNnBDEFjFhoVt",
  "key9": "5eAKYxGvjJiE91smtj3fX82ZTk9eFMp1mHLCLMXdkukHNP22DnFumUg7wmSMneJC2yHMjQjVa27Cq749YG4q72rG",
  "key10": "2HjiQqeicM63fZMAwndHExHevh8qgxRHsZm7hjxSuS9g6burPq1Ey1a9cJQ725vh8smj3m5tzsaWQScnGTiwu5yH",
  "key11": "4UBWKAZqiaV2yfP3Lq1d9QXeL6Q8GBvxiX31E8PFTuZ5Z2HyR4rCfXq9cNXxDPj9S4GBn1b4bSwWKMm8X3eAK3J4",
  "key12": "3kwJLULZayRHufaAmenrPs4v5WGhDKNSuzdSLk8ab9ZTHd92Kq6xV3jssy4V8DdFbfgAiKbrK8vbhror5dhMJ1cA",
  "key13": "2gGQLXXEv3TYoykYfufD9z2mdJCqz4SeVxGZTjmF7GyFc7QvTbQUqcM1wjNUMe9xfLhBm6bEox9gNtS283qxhNoU",
  "key14": "3w5NRr3SyJFJ9MfP9CpPpvZEJwtbk8xn7g5TKcitDNQDswG1j9TmXmus1BtuG7YGueZk37eCcnqeHrGfuhKy9KYN",
  "key15": "4n1u91tCLkuaxpGxdDnUFoFwJ25rfSfPQuX5D7roFaStXwi38AkWCMCDHpAiSHtT5TtG6fGh31yz42q47V7suKAe",
  "key16": "3jFSfq7HcE7meejDqgeDS6kYGBxavJ2Aa5Z6h6AY9Mxzu582VWnr42BaoqbXBRVGN9vHBLHVB2UZYXnP61nudxcW",
  "key17": "EBQbzK6cy7fFmTjaFC81FuTGyUaHWRRfBjudmAh96CrWmZD3SWvoVBsDRfaw362wNY8WnYvDdHfVgtw1k9ogNbX",
  "key18": "5FtB3men1uwCJsi6zJqRbiAiEKAYvf9qDB7AQaT59JuuiQPEWFYuiyG32j1XtjmxXQK34BDcNGwrHeCpsyYXzw8w",
  "key19": "21oMjJuzpb1wgWwJDuSMg9aQWyDrnbngxx7ZLxSPqwVsgStrYjFwVXuQtMWt8yJ3bq6kA2yY2eymRZMoovosnatH",
  "key20": "4V469qQNmqf1UVfV5icJLD9fzcfGAy1kiurLduaJLjmJdHHkHQM2C6mdyG9FAxeeKUd6z8V9KvixRsSf33fDqcCo",
  "key21": "3nedfA1yzFFFwBQvfjHJCWSPeaXHotkQh9B7KjzTQ6LUQYaYWaJJ2oHVgACunmDrVEFQB9CJ23qumhGFycujL2xJ",
  "key22": "5HeBUBcqUG9HG7DNsxE5AKivhkyPNd2Zdz4MC8PHmpL4yN6oDewKiJFFzTGYgwPvCfYNKhDZc1jcgoK5oBJh3Hm9",
  "key23": "f1abxQpvJWNWrTcBK187wZD8gz4rTL29EygcABpUkX2yQbQBqUJJCjKEHP4byLfEqsH5LDXQi4YZn1VJExhzNgL",
  "key24": "3cPv9iUG9feR6bnnBrsqwMyeWL9NJP9PjWvWfuVmZyCVvwZKVHb327374KwMKSzZ8e3htKpepWohtt2EwXiFXsUv",
  "key25": "5j3XxwAZXxpumKRMBusg3FGUCNikJSJaSDYmqv37RuPcm8YKkbMDjcuU7K1ZBavxPSfZ9iG4Sm6dtJdx6wSnHiC1",
  "key26": "4QnQJFDSY87jRWahV2ETSgb3W3fUus2TAoP8pFfi6YCgUnBetcFHr6rPkb9FUkhYaiadFyBS9eYPALm9m49jWbLu",
  "key27": "t35uFHErRMWpCUm3mzukt2BZCbeng71VtDMGr2EAd7nMeLQqdMeY5RVZjw2i7NprGBQd7H4K5xWz9ES1za2ugiM",
  "key28": "4uHP98sVBaneRErdJEyPAMxBn4DBfmLQ73fwMbDzpqYpJ1eDQjEim5Z7bggAmD74SN7WNfDmuMQXuAeZXwEMRmRe",
  "key29": "54gup7XjYyPzAExt2zkRrZqKRKSyvh3nA3tcDiWVNQ1eY8eiY1a6EcDDdbR5SrMYHPf8goghdT1qgNb4SZD4PgGy",
  "key30": "5UzNTP1h6Fy93ooxLbwUN2UhZpi8yWTNH2ySP8GWiWNGyoxvm5fr7bpFxwktkmQ3D5UxetkEMeKWNgzUf6FrC8vZ",
  "key31": "4NjXCX48M5eQoxupy13MfWLrEvhFzvy9mCKSuGBnC1gYu5ZnA7ZCzDrF6NTsBfRrNCSowH34w8bVELAccH22aKYY",
  "key32": "vHTVi3BaD3VJo3XdJNU5vPG1H7X7B5ErZLhqbkGALDoUSM1r39jQo1kLc16ttBfCFFp3hmBe1YEg61b1LrztXUF",
  "key33": "2ooSwiHaGBo2pwrvbHFDP1a6Y3TRgnvoXZ63FZWkwFdznJZgf6wsRNBZ3J4k3w3P7i4zTZpA4MeZmthEDE4Udy8h",
  "key34": "vEBvx6ZgF51EWS9wmknucLGVRRK3BTiRM1Cs7FGmMuesj9nogVVpgTmZq7ekB6U4KCuhEi2HDw2nMzxk3EW1zf4",
  "key35": "y4iSWV94QWoQVhXoDapfTvcxM9fdShWL4M6wUpeQa2PYDjvoaBzKLbug8NVrPCNHeEnMMKhaRybxpf8NZGKFY9n",
  "key36": "5wwKE7vKH5pqnQZHe1dx8hENHa6ViafApiqCMCXyYcCYgbmEHSbaX2atqnRjADee7j6oExqogSveduLq9bv7rrhK",
  "key37": "2yiZr86t4x8SY8yEVy3DEcHetrUsaB3jtiqfc1CrdJFYib9tjxKPKDhoPYAag7yZdj53ygDTE5MJUyCTXchz1M7n",
  "key38": "65gedQf5XChw1YuGoryUQA8QCHXmKfxWjC864jX8dCVxnVWdyh1gnKxosaHAcfJ8uNYGHpnpPZmX4e7Ar1nt1KNa",
  "key39": "5CQ1Z7jBBiyeKTxWSo7CvQ8RV38PNHQwj9vRbQvPJZC9QUWUbgkjvZ5BMnVkSFgp8bYcd2cqJSaqmCbDSFmb3zgj",
  "key40": "3rNNPrz9FarKM7mxmZzwyTmTCuaxty9vqWvR7en9NCVRyubEHNZwHoaSZxnmaLFoxbuNfg6F4bnrvjhuMNKK77iF",
  "key41": "46sAvtupnSwzLRuDoxAn9z7HWvq3dwz8rsXEh91GmtmT9JrNc8jZkqzifZZyRS6uWr53nC8RdYsiECqkvwVi1he3",
  "key42": "522oiPH7ZsikNqqnEhNE4NqcNR89T7nnLr5vt6fZM4NENg9t4rrUQVjKrbiVFRzjaimjMyc2sYmuFJvfcg2wQ1Ei",
  "key43": "5UPAciYh7Lo6yVFeDwQtfsSWCoqhM6u8nk7GcWDCqbpnLq43erUzw6F5eWMrSTxPQ25u8RrSdRrimGyva4dVks1C",
  "key44": "67QtXLn6pDg8LA1A3tbnyDSKVkqWPMjrcbQti3U9vjbPo1rDWmRm1z7KVCVgfdQ9gzKi91ooP5kJTPZJvd8FKkTX",
  "key45": "qWrfDo4Qwe7o3xDYB5Xc3NUq5z3DahVcrKFzYXVZuiZD9S6XWg1azgviAv3eTsuV4578PEEZ1fXRwok58stZdQP",
  "key46": "2gYJbDYW3dByXR5zeNfvY1sS2PjycU1CUr98cGqSFbU8QyVZEpswtvE7pk77m7DaWbJBUYwxqc2Y1vvctLry8sGQ",
  "key47": "2pYLgVtGJfUNfqiyqcv9GZJL8NPXBDTWxYdZeKkaQ9XPDK9PRX8m9fyzyxe679oYzXWMHGir8USAe5kj3uQWce7t"
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
