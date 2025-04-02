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
    "2a88ggd6yk4W9Cc8ihmfQ6WXHBxyZnzYUWq1j7qP4kKavbHx4BCLo6frmxh6vAvoSouNR1YtfgRHgfcHKQUbZtmr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66xuzUdFTXV8i1Z2rp7Y29Gfov2CVsPTZ4y7e1Zxo32t6PPywt6D65if1bWR92ZanQroYWmoRTXxPmW9V5ZxFHt7",
  "key1": "2b6hmzhxH5mQ6JJ7SQ2hCc57cxaSYwTFjBkPvm8kyS2EqCNVtMGbdrKYdGQguEpQPCEte2suZsc34yaatTWGBeZ1",
  "key2": "5jbQmFXXoPmrbQfNeWwKYSrktmfUUKsht5s6zEFHfdbXbgxQh4SNwQrmEmPwFVd8Jh8igYky1QayRWREazunJNeY",
  "key3": "2kRzv74SimfBZPGjbVHhhUqYUh1asPwdRCm4A9W8oumHznYpuFGLJSNqhudQiiqPGvif6VxRqugpJUznZ8W4BH6M",
  "key4": "XMrVwnDUFnco2sAz6RGFUiF8NpADT3L3eE2tqaVYykXNui8QnVMC7vhMSH2jREdSb8MT3264nVsBqcv5wNBP9M4",
  "key5": "5f2pZkJWUaaBNUwWmjk33GRxS7DuAmeZzmGF9suqU9DGA6LwLwEbJvk7HtTFiQq7pP2LWswjADg2RVdEd5DEvGeH",
  "key6": "2vTjMsCxzXLX6dM1f7ShS5hJFb2ZuUshcLFHsW5hGaH5gycNqLwhjP4u3dXURRhyCQHyNRH9wyHVKyENZKPEAfND",
  "key7": "4SCxzJtexaYhdEBpa5euf8zmYR8HHdQXiZtNkxa2MHXoRffMPTBmj62fSf5Sn5btDcKyAr8PPb9ZWGWWU4yLp2ma",
  "key8": "AGmYc4rcB88pDQAPux8zjPdbBy7JwT9n7ueaGQSBdhx7XLvFMSRkYdV9JjXqRsTkkaF8EadwZiraDkT2bAfrx4e",
  "key9": "5UHoaoE7iMhxMjLGe1bkzFq4WEoTesAsDwGYvsSPft59tmFiHyNuamhHJSG9nLM1n2fDUzcSfzgTVPsdbKLGFqWL",
  "key10": "2g7FYz8Bg2x9T9yFBEM2ZgjDjWvbW8sXqmqAMZUzDxd9Wda64YA61j8ZSRUZL8yZsoTmKVG9dZS7jmCQos7fv2SL",
  "key11": "5PgpCNWrE1Z9pY7tZNroYcTe6MapNT11JEtFK6oosmMaCxbswDuFGRCpVEHm8esxr3yC6aEYaLaWWmp3MTzfhDno",
  "key12": "66iSmqv6R8rDLHV8jcxTZYpjouWYb9Zjp75kC2GvchFmNY7wfddmz5tjynqtQshohtePKBgrHdSh4oNZKyBy3zS7",
  "key13": "5J3RP6rxJP979AiVsHcQXVn9CvkymQUZt7QdrEa463X2TmDNWjPcpgXQEPNu7yUp2etzhEJGtG3APYvEwY5Kyn3Y",
  "key14": "JarV3h4KqY9EcaDzrUvKyxa4pTy9SSEu4yF48DKfJBdakS7KBqQfN9dwnjJ1Cdm8JjAVwWq4XzohsBJpkwZykTo",
  "key15": "4U6x7GLoZt1r5r6Aw1vpCQHgxjLLWZW6huVmvgqJHyB3fQbfjwQH3JiP836TbypvGXXM49d5xyBLVw1c6wT2akqa",
  "key16": "23CnJvfbuwhgxuHrZjp9iPHeCsjXVB7UQgSuXr33yu6m15ytPgaAa1qemPio2U6gBJ1m5P62FaKBtieE2Y7UKy8X",
  "key17": "65dPnejfzTJzmKm1pu5im39dB69Px1UP18Gyt8CKTnLU97bT9ikMpLjCHhpKeUi2MCwRWDCwZ2gKU5AiYMBYN9FJ",
  "key18": "2Ptf488oBjBEU7SFxjhRUu9XYj18BR967wRyfL16ZRR5iWqZ8m6gaYmMsQznnBxraLdhs34msKtyESeRzqo92vSa",
  "key19": "4BHgZNCi4DMzTmGWWMDQmsAt4k9MZy4H55KJwWFYoNHhzsdn4Bvu2xxVo8FBa7LikADXTzJAy2WPZcRqhFk6bmLz",
  "key20": "5QDbwfHwMmKNHnkds5pKdnP5GpuX3Ew4HuSmbNKSy9ZCDxc4FdMGgsw94NwGfL9MxeEDdP7n42oNRDk7karRNSP1",
  "key21": "yMWkByX9qiUeBg92cD9zWFPwADKZ4tA4RKoQp3R8WW1GGg7v7gj256Wh1SMzJcDbmbWKhYuyYeMo3TQud3rUNnc",
  "key22": "4q5N2Ctn7vPfq9wbVnRZFMYT8tr3avLCakQvmRYFpPcqTLx9mtKfikinUqHnK8rNKr881YG7tyRoc6Uw24JKRYkZ",
  "key23": "3hyqvXTY1QrPbtMhrhyp1rENxgQLw2R47pB533zsTr967jzhWa9EG6eWpaKAnCGAFuA9ysdfD9KxxkWdcC2XkwWw",
  "key24": "37Vv7p544J4f5bTceVv2wGL8RajFdfszibFtuwwejDjKk6JZnyZmj89cPLivzTRF71qzkJXeLhogSuiAuYSk579m",
  "key25": "62DiJB6ivHqTdU9F126uXXwCcQtU5VvZjCNRhoAkKHP77By1ZgXxfo5eDo9d8qVDy7smkcJqEQ8SfNaRMxqXXgxe",
  "key26": "YCS4oZ3DxLL6ZwEfshq587NquErssKFySSt5xu6ve7brsNwb5EFN3tepLe1QjMuotqd95JYsXVYaMmvnphPHA3a",
  "key27": "4E5wqcaAupe242pkkUrJBWXueQhjRopfdRnpcAaF4ZA1zjCtmWp5wnUE6bjc9wsHQZQaE7pggpUBzEE7mChv13aV",
  "key28": "4ED1FDdbNrynevtBcTCd8NsSHb6252BMfhS2LmmGHMSn3SJ55cvw7LvXz2QmQw1xpns8SEq1xHfATc23kQxF2Hxf",
  "key29": "5JopCJJ7jRJRzC6GeoKNFm79aX4au71VAQJJ6xJvePYp7Wapot2anjm4ZNtyYeo1GxYoEmugSjD99imAKDSwV7Z8",
  "key30": "3uLLvccCcmDaPMz51yTD1bTyFus6rP3Jrf88KC3DGeQW6b6V29BsznxCVLsr348Tn1iGJeMrvpnrvJ8kdYvnudVt",
  "key31": "3hcmSGsChumSrz6SpFJD27KubHHBWnKNHEiGJa9V4DYNq4qB6Xmz3vQ7JXRJH2c5hgHFRRQHE6ySonku5gEkKyWY",
  "key32": "BKpnSMQt2gju5ixpkS6dyFa52SSkqCuecHiJBTbt8Zvh2JVsUHytRRiPHN8WCgjypzPSWMePDy27oKLqZD3RAYS",
  "key33": "8CYgjq69M1ynQH6tfKgwYHxPXYTJ69JKs7B3btxQ6wkBjMsUP5fWqPH4uMt3g8v1GJySwioBaCTkY9TBUoNm1Jp",
  "key34": "2sdfdNnEtPaKbXzVQ6GarNsyQQCMuEb38wXWeMtMGjiaEZjm3DLk7wYUB4En1PhvA8NMtdQYnDADXsbuvJQW8rnc",
  "key35": "64NfhQD8w4X7KVuF3q1coevDPAHsPGU7rhtisuAUVyam8KwLU1uABdUvrrqFyvDY6mCrtd3R5NbVtn4SZL5MeWRJ",
  "key36": "5QSFsvCSJE3eUP2dbSTYxHXTMytQq93JbVvU9TqUVp9rNgWKTYXdcUWf1S4QXy5VqfUq3NmiTjS1VWvHNDrjFnyB",
  "key37": "54e5RuhwJckvwP3DwwT5bCJN9Rb2q2nymwFYHLpg3Tq6QbRjfbS1u42fuiXmRdumKBVrTavSMBjRwioaqvP4L9yj",
  "key38": "331Qfvuy4ek14pSvn4FfVvZh2rYwKd7swkZSkmeNpw6aFLp4CEtrNdqsWeXbJU6PfU9457oWHQb3hLTtwfxNiFEX",
  "key39": "5pE3TvkKgrVDBAmMVL6JjzzB6Xv5VkGwXLVXwdSt26VDUZc2mMTJenTrJdeJk1PwSi9qTpYR4FvRq4V9XQAVbBwF",
  "key40": "4Sv5sFUDkGYYf8iQUnqtxyvMQoMiHRwkHLCY1KcPwptvwg62UfQFSQzY2B3jsRD6LcpAcDY4LcFE1zM8dSsgpZkz",
  "key41": "yBPQkS5E8zDNXyPCDH5ZqBsmCk1FXnrJwDqZpSN4sqHfbiohufsA6zTtKqUNhMpfJQj6WHqKmzeiUaArgDwK8sm",
  "key42": "XNqdydt5evuH4Ez8AxCWjJaRZyoKGJPSKb46rmwnXzHtQnYr1oAcyosQJvDGCg9EUDJ3mykxLux8AcG6iy47n1m",
  "key43": "dQuk92PLAA3Xp1ByyJ4EZD6taBf8q5tLN186sXKHwAojj11k8FmQ8uEZR6pvY2Z5oYfzayy7pQ5QWSFFvpXtUK6",
  "key44": "3WZaYDNZCxyLxddzgC9kCx5Z7BY46tT5cMEzE8iKDKevfumwxHeme8uhZFMxdsueYkAFefoAKuMjagetdkp4cjed",
  "key45": "1a1WbamT55hfWrURmKZ6uGWWKCQWKydRxBaJYVBL5961RjCPPrDBYBR1VeD32iDFEQYxBWXXh8sWwPF3DfRtB5h",
  "key46": "28T2wgcviJa7cj9mv1kREnJPQLh1XkEB6BdYueYHYssQTGcg1ANGvY2hz9Qb7qQmcEh6ZVuNFw5tJiwtUa5ZBq9e"
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
