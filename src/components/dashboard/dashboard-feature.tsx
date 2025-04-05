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
    "2De6pYmHbtKWwijqiXeZjsbRPU8g492r2h8CUrK9hPd3gdybnXRQo5A2ShRoAP84RkcM2rkfPwaQQpkqTLLyXKM9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uoLZk7uG73TkTe8gSBh6gMh51rhj7zocQBExh5N1cexW7oJNCxXuTEP2fBkVLsKNZQQ1s7C7QQy85idGt2h3hd1",
  "key1": "2uYFt8SKBHBQFQ2JRV4rxfqpTT5eTdiy8xMAn81uHGb9hzptnpPbVUv4vXEj3jBjHntsbncjc6rQz2SisjGXfapJ",
  "key2": "2kEvNCoBScBPNJwmrF8E6GYKWggFuBcYuX6a9yQFbQeNj3inS2GmpFaiefJGZ1DfjmvvuFqB4BgGhsSn8caTvpMa",
  "key3": "5osfh7Bk4JwjQERAgYyPNevWSQWpMWPSHhtSGaVcyFoUvz8VytKN3rtXFxK7krX4evKaJdgW1dR5ETC9QqcVnrFY",
  "key4": "5gbrAoHyTw4z6GDox1ZFucuhZ5fpieDey7AEzCvBcwfePbwUiSYvQA5WtBnCMVkseTA51M86U7L964Y9ZRuPe4MT",
  "key5": "5vVD7Jvuteu1uH9VdkS96fQ8kdLAFWYwsN4iarzFEHpgP5BamEw3mzfHP4f9rMLitE73Me63ETeqVw8RwwF27W2A",
  "key6": "5WMFGsHv6KKbihVXxBxk9wUUheWUVkhRBunTZMZnBaeCpgnVvWywbaJXKBpu6sDKnGZqthgXZVrvsLCXTSAGxsv7",
  "key7": "hyZBWNsC8uhZXL6cCGuaXg647pGXo1X4oKN4hYjNnJUXQEemFWABB1pXrLVP3Kpm1RnrTBWfYgrV3mvoujKhaxw",
  "key8": "2bCBYB3P3geVKRzZS9YMuymU2fwUBdZcgXtKKbci4rz5DDQNAEtAEZQBDQQhkTL2MUfFuvmGrtbYet4GtuZsuNC9",
  "key9": "4PcLTDZYU4WH7ZHyUkMfSMy1adVYHWcrpVVmpFr29e2nPE1NddoNkc9TCBMpbaF6n3ndayw8nieMDqc7FjACCY7y",
  "key10": "4dNTTmCCs65PPamd1pk6pUHu39LJcWEyeRf2tLAzWcUtyHhnBMeVubsE3JZ6aL81vwhY6HBCTGKCCGnuMs4KBmMe",
  "key11": "3dAgDaneJdQYQ4hXaALHLgNnhkmrUEY89cwhL96LWXjHGFrpe3SRipgFVwD2RAbgYKe6vtSMhLK9YHGFLyA7viqK",
  "key12": "5RrgKejEiHsx8o9ggVkno1sCD2Cu84MGen6AdQ5h18QWEUNbJPcodJp3ww5cRT5RwFkscdoXQC3hLQGEjy8p8BgH",
  "key13": "2ANcmF4TWm6wNGcX7AHQCa845f37T6iEUSRsukTHHwXcPe9CduG5kx65b1EGmZYXCGb1V6kb621fRE2nrYsTFygy",
  "key14": "3GGiQApmJ3XeLNXvipgG9xCUfxZHbdTLAgjzYp4gqtThdjdPu3XEGcTHibr9VFbb4sQonashsB2oLrDex6oZe6Px",
  "key15": "5Wab84dSBNe2hgXu3y1HcYS4anudYN1ge4qU3WDbYD8B6FmSAF3Bjkbqw2Uo3tHsSMwKJV5Xo4Ya8g4o7vwWp8zv",
  "key16": "bjNq1WHNczxQbtaeayofndzkyxm14iUPsANxdraU9RfMzYGLzdbuPXHiYkjw4ZhEUSEty44Zrx93HKhmrSs5VN7",
  "key17": "BmZxtSNueWYE5FiGwdMBA2Asro7BaGiThPQpTfg3H6NDZqbjqLaKme9mVgRJPeaRDvJKNw6dsi8G8icK1RokanE",
  "key18": "2DfNtVT6xgxH3MpTSM6tFxWiKtocLZ3HHwLjeedaGGmRgM4yYh2ec1PdSMjwX6P8r4YWHb7PSm4GtTBqfT1M5hsr",
  "key19": "3Vdr6NtvfD38nZ644ZZA1BqNaWPJK7CLjhgc2jFkr8dSrRGkdCLeJXxUUyED1gUtVpcSHmLF1V1xaLkkCe8XU1hN",
  "key20": "6226XfEEkx64oKcADQZehChzXuyfcEKzwAsKWoHd2oTWszxYd9BMsSmMtexXDmkRfgDL1Kcf7U9XFKZKYwn8c1UW",
  "key21": "3rvYK4o4vGwhAgU1iDo2ZfCvBkBT3CJVtBbX3Lr6cYNZHTFs3QzyMNRam5vGyAbSJMeeoEU8sFUhYFn1PVxBHg9T",
  "key22": "2GbPZz4HTa9LDMxPAuL1cbqPL3h9nmTjeCgsHJQfZjzCkMDcDML2HgMUGKMVe3M71vnqEu5z8rMWTdvMNVjVRkbR",
  "key23": "21fjJ8NbiYMjP55P7Ve6oeULphQV711u1LUDNQuMANUYYQnfjpFGg2REbxnScMtnQ8AzGLLsdGvb2stPrivysmLu",
  "key24": "rRH3VwpV9yPTRK39EnsbYTReifbXorYTGCFTuYsTziRuLCHqk7KUyPpVS44SEYFc3o7iwQkiMSbe15H4M4NGGVp",
  "key25": "3zScXcXoyB9pcjbwGs78seXqCkuxvwH8M1ptxJq1akNuQkpxUZbboQhWtz5d6eU7LNiGbPh5dwbJDX3YToszApne",
  "key26": "5WxxSvgG4nsUPLUSwpzfkKBkVnCtAhj9WbrJmF8NdW2emyfPJNRaQut7ditjFzuTCvJkiYKKu8FZoxxYnMW6yayu",
  "key27": "243jWbkqLBhb3b9FzySfcGRhPE16wStKPBgQHHDDqXpeAys9XqVVLoxrweUJiDF8yomV61FPTswBf5xM2VxY7MEC",
  "key28": "deHa84cVsd9ZsdYwCPR9Y7wE6BJ4BkYFfhPGMPiQMu56odEpTZFjsLv2h7tf6cxgrquyt6E7YygHXXWXHbTvyoG",
  "key29": "3pEbZuwMq5ZMhSPfyndkxzAshiuy2VXHRmorVThYkFe87XygQAUrwSuqDSyK2exw6cUmMrqrXiFrqv1HTTsm5zuw",
  "key30": "5ZrPf1BVwxNJysMCTeEXZsJJKi9WgrGmib6KBt31z5vDbeZ1L8DGoKj1ayLSGuuiQvE5YVFrpq8wJDgFjdkeincW",
  "key31": "56777Wr7hi5btAMGtT85SFJDP5Unon3EPy4UbGmTy2f7rgDKbmJpuPHk2YqnVPia2iWqEfjXYWaaA9VHjKhjVNvy",
  "key32": "33kurRruBtmgatTj4boEiQJ2Lv5WBcFguKDtSf4UiSws2f8zAp3kjVq1hQ6o9RgoSZETG7AG6Dch1BkGfCntWKFz",
  "key33": "3kvx4Zd2LFxZdUtQjYpXvzQJqHpkniqumKEjz42QLSg6LEzjPb4gUren8bjBxNd3bXvZKspj1JYwLaT945rUky49",
  "key34": "voLsFziugikqSpcpX1fr4h3GgPCaiUKNLjuyrMrrTxETyFsuMctQmh6TiUQh8SizmesHWd7pKvpbfw1K1XhXySi",
  "key35": "3eEUp47ULRXLvuKX5BSums2FgcdgYzxcikV64hknkFrVQu2HvLiUpcRafPnoqSMtz7vWbCDwdnENu1HN5baoMHvD",
  "key36": "574gGAmjECfzcM9zmdBwkZUZudKp3MBsHCdgKFMFca1XC4qm2FPf54qDy8NF6MH9CwAjWXMqWDFacY3DaNrH7W6E",
  "key37": "4q5K5tRsSDpMdymfdeMTpHHnszhPt3aPZ1AhLNuMGeGu2Le8XGNbPfpb4AevnmQs3TUaxYEZqVe27FXvUkP2DpRC",
  "key38": "4Bcr3T2yfxBjz9TCHrZNjYo1RL8pVFSpvQjSCpZpWvMbogNQV5QAsgJea92FhxQjs4HMUag9jX8DbgbydxCB4nee",
  "key39": "4t8dYQ74xDWFU9jbSNvire4DdwNewSs1NU7CN6qP7zdRSnpsTqFG1hD37x8qKjyMDVg9r474K9Bxayk5g9QbJP1Z",
  "key40": "1J8hAJK5RF5xCh2zCkPSu97KXBLfCr44wU8p9t5wkX41bVHGuvhRB3RX29oivTNJYJJVjKa5aNSGH4q3ifo8pK9",
  "key41": "3V1zjqTigW8YpJ7Hza1on2w95Fa11LMh8FoGXhLSLHL1oa7wQkBt1vakn6hmtaEpjMUDECf6BWSbz2WYWWG5epP4",
  "key42": "2QhDgvtcsn8CW7F2SZMwn1gATxdpTXWbcUxnHF4FsEBKahbt4Z6uR9YgXt3nLPvATLNVnqBEPFJsTKYbmLVncFSY",
  "key43": "5HQmSLHPKdzdYADZccjmcE44Ayy9Sbijf9T5iWN74556rJnHh93tir7qstJVSt54cDJhggEjbXNX8U4xYXswPfKD",
  "key44": "639s1DPLTG3c61oK7tJ6Ch8xUDsZznCYiaE4QDTirPoi6N2nZ9bmnHWDPaZWmfeGcFJyqTs7x62LkMyx27Uz99zi",
  "key45": "5VQiu5eXTsx4HxcXrVuq1XkhYJ8hH1KVP8By3NQF9EWbiiAn4Yd19KrQ7V3ApYXC7YRA8eU54J3Lv1FZbvJTt1po",
  "key46": "2DyakQeqXR2cvwti9vvtf2rxyNEwAKwtqx4A88SXsGgyEgwnAyt2nZFQ495jpvJd5ReCgcFeEgH3jFLDKKv2Smsw",
  "key47": "5xHdio5pFDkbHbXpMgVs6LQwF5X7mS64m1YaWJBgxw8Cu6RS5Vvhx8B2Edg5mUK4k6vyfZwyASRSCKCqnB5wRqY5",
  "key48": "3o89Navgg2un8wAKmotSEnuY2ponkAq9DMfoChxFDLXr5j1id2qutuw8E3BB8XNPNDXVnEih9RK3V9ubk9jfGAsg",
  "key49": "61oVzTrmSwGgatZqhh2Dj1mr7FnWKo3E6QR9DBHh54PQLUU26gmfLZ873KAZuiMAgKvd4QZ7dQSqPrZdzmYUcVwC"
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
