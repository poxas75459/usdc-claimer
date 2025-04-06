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
    "3rAiyDDy4MDTnQ2YifvKkCJeXyGsQds2hotLWC7YxFTHVtS126Uhf2LoLS23utLhKWhsH6jHzAoZZ7RimG4HSxC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uonsbPgQ2yN3ZgGLaC4wVoUanYUqXPCorgYnNprxcJD52gqpm6XaCz5wNXW93y5kxHeMiq4xndE6mxCsdXMVLpJ",
  "key1": "2vNeKt4a8ra9YMcDy33kmuvUsFpoHRcqc8mtkcYyhb8zU2U8qSS3Naji7XMuiE9GgCWzCB5jNt3FC5GhBHDGqkao",
  "key2": "4ccHLSLR21KQHZC6kYTnYt2WreMbWFnqVhymTLdjnmCzU5K1r19beTUZYTCza4y2v46vnZRVqrPz67bc9vUsFs1J",
  "key3": "wk5yDh832W9Js7HBvobe5HtSBqeBaPZPEsouoti6qitAFawfExvuTbhYtZX6G5dyToqxSweaTbYeDSPE2wVut4Q",
  "key4": "633UUnTcQb7roMWNPVuU7DYpoFUXA4XfhQDyyuQCDMvPCurZPBeBv2ufNdHWfNmQjczH7a6NvbcNLSWorptjwjf1",
  "key5": "2cirdkLNvxtm2LLUCPnPnqLPNTsM2cDwhLMTbudCwRQDpPPXwKTJvL2D1Jtq34Hq5pbHutgQ8btLo4PSiWYFnFXr",
  "key6": "4cBJHm5ny3DF8n8sWbMyKs8HWk3ZLCuYaRShUY22RpSGnFAmiQy5xzcJ3a8bW4VBVXPemwbzVMbPMtXe3qk4GuJx",
  "key7": "mxgTZRnFPP2yp4G5ByEKBFRJLtDkm4C1pZYDHXqFKyvcbANdjDMTCKkBXGvxpUKLLsY12EomdxH2LQemkAuEMs9",
  "key8": "3bRmpsDmfiqdQLCVYRkRxm44VvSoNvUL2i4uS1UW51B7r9a6bUDzNFKgeMMzpBzqbbfdwzcN3gc9SRADYBEDgZFc",
  "key9": "8Fry2CqhU87z92uC9pJorDPG8YkkiCZsAjstB8TxWjQb1hjDrnzDMr4ajqB3cDP4AAK2W6KRBg71DTgiyFKVkdb",
  "key10": "zEYJLWwLUtmYNtTDn98NWsDT3hz2N7M9SWVEjVatBLLMjDxfyojvqFTbwu8jx4A1taDx2mngfZzYUsrDCkdMLhK",
  "key11": "5WNiuvpNWxHruECovWvN7tf6sq3KcwK68yJz7PppZofpwHAP1ySNN9dgSLoYYRFQcGAsFKSF41WBy7QMnzVzu3D8",
  "key12": "Jmw1q98dq2zbtGKfDpbfAKd3efUj9sCcNDPprbkhRfHdrkrKN9PtnP69VQKeQD1RQkas43LSv7MaJg34NTksKxT",
  "key13": "5dQvsW2Db5aTk6BtLpyfAVsJiZjP7ZbKycqiFxbNBKwnpfbuwZAUTvFfh9nwxiNsmau1mNN69LAo7UaQrAbkx5TM",
  "key14": "5qhR1hmJmzBSrRe2NhEGNkPk2egpJS1FxzbziqJU2BHE8kD3YKpGv5TPcHB7MLW3LGexMxwDctQuuPTSe3GgAsKZ",
  "key15": "44z9WJqiYbCfAdXjfHaJNNJaS1KMQmPTRCPHtqG48kKdorGRFXKqi7Lj1xXzKGt52x4aF9N5awKAPVn8oFnERAWZ",
  "key16": "gnYQxLygVfyKdYGgW4V73Qku54Knego3JViYzyrdGUoRduAnhu2BYmXC1n2G1AuGa2SxvZv9SpraP6geLRppere",
  "key17": "2xzqFGon7ncY3LdGvc8Z9NyTBuR4YSjxVnxfFZRHNngMqcrftfa7i4vDZdLfb4WtJcFdabiAFaSDb7aGA8odyzRh",
  "key18": "2LFaMT2EBNVA2JUYUDVhBiQ1xMeZ5UVDx98LqFodhEAY7D5GPjJt7WNF16o2UMii28tXSsPvFYnw4Rtofpghr8Qj",
  "key19": "4evtS27qgnHSZj4VZMjBpPmCYKbXxA3hATJEVD76Esbh5ZRkmmHtxaH6cN4TRjsrkYhHXsepQdTGoCdeMyZWVBFJ",
  "key20": "ZJD2TpMD6wJJPXYrGiCAYMYPf8a4E4kPbp2pQYzr5Bje8py6MszYn1bgZ5HrsT3PV8SJcwwjwzRua71sxrE25At",
  "key21": "2uwSWaQVpM1ocm9iUaV2DhoCVRUb64SN9xeXhF22ubs8Bk2ag3dq6bJNnNubYoNduEGSPm88ZimhBiLs81zSE8dp",
  "key22": "4VBB5drf3Tt2MQeAWcw4sdiVVr8a3uNnUsCkbptiR2QVuLNgHuRHT1PPCb8EabGmGX5vuukWHH4t1bhUmDMazqzP",
  "key23": "31HEaQVsE4rQBfzyyY4ado4Rn4xysLXequYXp7V1L1Hjw2jpk2Bak8gnUra1x3zDY7Ldv3M6fVCQwo7tWFQsKe3k",
  "key24": "y9s5PWsD7wkuXg67txfbjjdqK6BGRinpeVkPLGH6v9NBx1bF2U7LfdKd7nGkwU4tfGQCgUe6sWS5W3pADWqjX6V",
  "key25": "5eKZzpZoWTwJZtHX513wMMiJB6eufPvi2sg4e5PRH7ukccfzCdZ2spd9rrjnVhSafHQ11BUVGtr5pqUtpYbwUe5o",
  "key26": "4fGsHV1BSDau4oFrL6z9qjVZeqSmfnyhgQSbTXqEVA2bqrWRvakcqtS6VbSnRj1Y3Bz6yopshmdU7LLBizZKjejX",
  "key27": "2ecNuAvwjXrryMe3xBz4THEqtCY5HF3JCxfN6iP9Q6TA6k5Kjcz11oPXHtQ572R92cVcRQ2GCYY4AyUHLJbTvNuz",
  "key28": "67pNh9fH587jVSQA5zzwacBqtrznm53SnV6kGzMa6HYA4hA1VUaPWTnDBktxh7i6Js1HWRwJxAhL9Z4ZVTKEBHya",
  "key29": "1YfwvpjmdQNGQfvTaES8FXRqJqwJj1K6KiYLYfv23pb21sunuMyfQ2Wu5DLJ7H1Pc8UCXa56d3YEWvo4HBDUoMR",
  "key30": "2zUABHa6CpnHceEiv75dyNgBMLoMJ2iGRZ6USmC8imeAfoJ579pj5B51m7ZZEbh3HqfofmucW5Udwk5EFGrfZimS",
  "key31": "2DP36ZHkHRtzo1suUmHwBn4tJ2qER97Gx7hskEAP4BJRnQ7M5nsiwfnjyRc9FGbsB3Gfd6pAntMcwxY3AD2E6qXT",
  "key32": "sw9mNUK2TP48dEVNx6ANuTG4c3TXo4bnknuM5dczF5jB6CQcrtcAz7BoMYN2QQVNgDmCRJNRR6f2pdnLLgUwrp6",
  "key33": "RVwweBuRV1y9nozWuyeNe2hVSmxgwJPoRszGwtqoL1KW7hUxisezmRaN2RBDRCbZ9NrEEQeAbchdnBozLSiW4or",
  "key34": "63tcG4pxng8g1XpQTGe5jbAXXFsn5taZYBjJCYHpmLo4rKppyfzJczGNn2o48dTi5RRZi1GSPH6SNtcMTKGjtUWB",
  "key35": "4SeETRLVhpEoGGjUpPz8UK9f9fEzieouDZDk82Rpg35wQDv7eNWs98bysRm1hZScTeZ4mKX7ytoQTznpk3EzHBwc",
  "key36": "33q5Y1oYKH5i1frpRa76muQCXhUb55NNvPEUpzgZHpjnppAscf2xKAfef5Qs1tRN6ngQXSohjLqSyFBLeyWDvE3E",
  "key37": "3FDfbG4dE19cYN2cv8L6DrDfiPtNmZTSx5W7wK8v3qGF122MAbDJ2eRDJzyNJApN5EEgS6T94HeayfptYxLuob4V",
  "key38": "4JBhRKKSh4eFvYTdu77cdDsCCYM3HhCxp55Uk6qiMJ8rCnWii6kaakEPiwhSvfa3ex5k4Nh7ynbGfyUF5Uy9pcyL",
  "key39": "427zSvde8xrGjCZMdfbJw5wPWr2vZaV7gmY1cXUoavyERcJd3UbFE7VCzASPqxMbAC4R5s4JcDHiYSfxACPp5nFM",
  "key40": "42diVurwKnsKs9Gm2VnkhtWnWSBYEzprDwXLJHQD3LdheZFZUg3qk1C38JZ4eEBs3P6MYT7vJ9kfxrqEHohJT3AV"
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
