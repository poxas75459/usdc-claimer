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
    "5ZKtAC9vQMzB1Jc4HXfTwMdfwKWB284kj3e4K9u1fpHuPmQLXo7XhSLBoCqXWywiCeAKAN49CFWSCdhDDAfrMqMC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y6hf48w9DHyUmm2SQ4SvzWXgfdMF6s4gMzSgjvaCSBooGXgA6UDUgBj2paCCzVgKFxe9f8pRyjVbzXvyThomsNB",
  "key1": "3UtbZiBoD6zGhxv1ioiebkf2KreG6FRCT2x3FVr9ACshe8m9umweJyQVF2pTUZjEEoxzkguHbTbSAdcjZzxq6iqz",
  "key2": "5CtjxEt7N56mjZodJt4VqcuE32AhEpB5BUZA8jCuXvzL62ZMdmchJjiN7Y8uoJQYctoguKqkqkUtizJKBP48TZu4",
  "key3": "4893Vcm4xKBXEv6dmKSbDX5c7ECHQUusERFHonrGzxyQhbrz2yZQa2JcK6uS1zqf7NWBDaEaiYP4BekYEB2tp3Dp",
  "key4": "61acAq9cuBXS58kcmhYAd5VUbat3SLnoXnU5ysy8KJQ1NMUA85wrwtegj6VWsfqFoMLF3J3bR1ssLxu6GYYxcr7p",
  "key5": "2a9j5Tugdp6v58vWUZKRZ8LwVhJZx49KFbpYiR6RNH7YrCpYvJhYWDQpbjx2u5g8cvbEKKhwB4jtEbKWbrTQQ2cX",
  "key6": "ckUdCAzJtQafCrABbGb4jN7YjENtwTid3d43464yDppp7eh6JuDGVv5hF6iFcib9mQnZiXDaCLgbiAV6AKNqPG7",
  "key7": "AESRaso1kbxo2xvAa3LLZc7QuGQdwfdAqPzWNNccZVtQnZxJUdoReNz2drmf1dtMdKFQfFpPkhVCiPnuWUuWNCD",
  "key8": "223ZeAEnHaMtwHEZneWXS5xLFckNUZcchaHhiUoXNnXnCYjWK3uM6CU7Qz1QB6NDJLHLvcvbYtLyqdr6X1ctJAm7",
  "key9": "3ra5VcYB4kPKsB97zWeVC4WKsAd6EqnfecGUPwoMFjzWMDhx6CzgZQYCwPMXPv1oDJgixdw8GmJ3L85VJyC4JMx1",
  "key10": "BY7fbjrf76G2spWqBAnMZohrDfTXKHpUwtSfaj7JZrWFBuufV3qxxsK79ZhAub95VftyH51UBFieFmwEq6GqAUG",
  "key11": "RiHzdPhcAApj7gSer49PKBaeeRNcj4uybzFhzyimUnkdcqt9wYUvNDAX8HmV6mu9SZdhm7C4HZdQ9vdWVxQb2NN",
  "key12": "TUsji6vP4gyGEjxLTJk2B8Ka79CAbPGfjA13MVECY7wvPqZ2ma8kMxvAH2me4uxu63KAgVP8MMVxzGV8MJHaEPZ",
  "key13": "532n6m7tddshMCsim8PGQiw8DnG6w2DLPEMZLx8LiQQye4mZkMh9rkxt2iuAVEk41YEyJ53RwPP2LYJuBEsnt8pU",
  "key14": "Crn7kdyJi6GaXMajHK6s5ggkUSyBZqKaKtPeBabQPg9XjB3LvMpNRSv931PPJtePR2TSQ1vZ32muvjff86Y4UVT",
  "key15": "4vEjNghFTYE94vq3jFLB9AoLkzDkv6pXmLuvPdVT8XD2pha1dRaAjaibY57GZjR6fz8jndV5b81m1YpCwiBBaHF4",
  "key16": "43t1f5D25kmTkyV1p7Zyfim1Pt1XpFbZdanPyQr4aaSmLar8v6Zb811tyo84tkiFfZLjAyPMeXSkfVyz5ZGy4eqx",
  "key17": "4vTGcExciZ929wZh7BCGGx49sd4ARexHmn5HcwkThVBhcFkndUBVvq1bMUm9j6Mjbb9doKBgcKdgBPt3RWjjqeZR",
  "key18": "3acKvkaRixmBBCk9HeivB1NrwmKTxtQbQunRAeaYLQ2Pb8Pxd1M3Jzu1Hwmnz1YXM648JbFJRNmuemYNGAz4QNk3",
  "key19": "4JkH73JABfeotx84KnXrqUjrtckZKQj8tSD68Wr9hEyHcQHLf8ZJYHBDWnjtKd771TzYvJ71bYxh13E5WC3gpjaH",
  "key20": "4s9SEp1pfWqyZMxmQKzAGQzxGQcLzNVx2mfffZQiXh829PUeQE2xmAcdJXgthYi8wGbFdwUboFFpAWUgfKAAjD2n",
  "key21": "4Zkof59MRt6EWhzSRKZfbk8cBNcZvfNuhZ5UoU2Qb8mqz7WtJT3eeKSc3gxz2ShRwEKNwwCG7wautKouvpNKC4gz",
  "key22": "AY9ZpcK3wbfT6VH34HDVHxNa2q5RJ2srBQepMZf3fMPcb1JnvXYZU75ZB8rGjhd9snYBPvEoSUz4MLZn6aQM7U6",
  "key23": "3F5RpKR2dNNnv36r5fv9vqFVzKrh9tYJvFkybtE7FhokK8K7p3Vp7ABoHZCu99ghxfBtff6p7w4jHweCcYJDhT7Q",
  "key24": "3cEavKuUrB73tFZ3y2xmLQzZ1nobRnKsHnt9FKcEiVY15i5Djp3oMMrEqNstRsLBCcF36GEtQFLi7L3pxEVw8ZJ8",
  "key25": "2iAvGBW2DxspCkSYiXS8n8vardgkWNf9CPh8ccgpEKCzSMF4xh726u3vf9Myai1pu9WV1iQXzbDqND73UycHPVar",
  "key26": "5Y5KQJx8yo38WSBHMSFy36ZbyM4xSaCU3ZzPkaqpxsKtuArLAv65LBMVXzoHvZp8BYaoC2Bov12Ynt8wWk8uffZz",
  "key27": "31DHKQPa3AFYk3ychGn1HX2LrionAaRD2jSGAEjM6kCB2e7jHJtgppgrdHuYjUsqE4nnJdz5tfMvgBrX8Z2kqcu8",
  "key28": "5FNwQj5SDxRo18didVcH15znj2yskpqFBSPxoe9X6KrND5fCJcWjSo8hXPEp8ySZxThfGxgFtdeB9YaCsrwhpucT",
  "key29": "3j1mgU67eprFgSJrFYC7dFZLiSCz5RphVQKshZ4jp3o5eiN5wcezwzJJHfzPQozW72ocbjTTd4t4Kw7KrRVhn7VX",
  "key30": "2JfAKq3J3Z8pycgp2i7VgdSMLwTxdnSFmcZ2S1kRUdEbyhF2PZWYzGZygQiNKLkiUpbV6F25FEsSDeC8bVoMNmWx",
  "key31": "231tciV3Zaxuy4j6AgvNAPiJ3KNdpLEVVCqnCLhNDoLUSncZVMsdduc5sv1Dg1nFk1xjHeNkG8AzEg5JHNiRyCeZ",
  "key32": "27Zhsin1mEwZRkbRgG14yrsAw2p1Y4XQQjGVJVKFE6W3UDEdHH1vzqhaaW2FHeny46uugtXbXesvdJFynLxhXCNc",
  "key33": "2NFTeTxjWwGLsNXKmiCeR8Pa4moUAwPvseEvgb9vCdAQ6fPPnzCQr9KUhkufpany9N7cvDnZ5tuiuvR1A5bNV8wC",
  "key34": "2u7gyH7LDd32WZYG5BqkKk1YBEEm2NXiEzstQK3e75yrFDdHsxQmHEapK9aA9UYUWTMQgJcN1s8HnP8pNcH36DoB",
  "key35": "42fU8zbACoXtzXgCfp5zT1kkv9emDdhW2SYQMaTtDoHTg8YXA6Qg8BoH9XCw85TZk7JV2pjNMXGYCXe1rhytBvAT",
  "key36": "2eRmeA9NVHtcRAv5Ctmggr1q4mi6mtVv5F9FStJtisH88GfDeVsWoX82cZov34UFq7Hbjr9sR3sgT9DsHBAxwkxW",
  "key37": "3dyW7FfXV5Spc7RGNytwwoxE3ZZ4AHYoUHtdr2YJPwiKFk47JBeobnZHGonjvTdkUMVSmz9EVBdTR8w6NvE4d1Kp",
  "key38": "4MheETugxpKgkMJbmNk4txhMK5Hj3F4D89jtzGTjT73RCiDZQmiyMkuVFFNmJGPhYQ2syViFhBJXyRi47FeYsKDF",
  "key39": "5cNTJhPwQkrUNbXZizg5SERzPkESSAGdUMvQgW9TefdShQYhYZy2mD7R7WP13ttgC7dTPPfgGJWQabsKSm3XrhJz",
  "key40": "2mtwJkmL4WhmDMs8PDM1xKzxkTcLL4TygwD9PSE8jMdeJTrG5oGuxq2EEW6q2ZgrkoeegDisMMgtvZ7cTgGTmH9f",
  "key41": "4VKwLaak8jkwc4G1z5zgcs9ZQsXcprNMyE8EKJPt44fBkjGHra8j24LhroEy9RQD51NXXKz3ciAyZKH2RXgQk8SK",
  "key42": "UoN4YBoJMnLjbyNVinJ2J1R2KwuVLSPmwCXH8wHwFQUucrnaQDM8EHhZPKPAFQFVMAWFKJPuHGVi8UGnCTpHj7t",
  "key43": "29dfodvUYrarGRnfYxCxteiAC7NMdZF3uV54rScRPvrf3fpuhAnDNchd5CWqtXg8YDAh7s3Lis9Pf7exvRPDjp4k",
  "key44": "2zqvxdnP6W3aFuagX2oBNntWwknHTympfgKVhovu7v6fPmw89WNVj3mkwdMU8r1rkcVF6rHbr6AbHPfCwZBzZnSH",
  "key45": "FeiMWBHizn2cBUsj7qTFzVgANLYjJQgxrhLLainQakPjqSZi7axx9Z1o4zMhci4eTfe1hd7vFu4bMFuqFsawzQ2",
  "key46": "4Fcg9pFYKpU3xp5Ki2wq96jsti59kLtE7Cbe6e6BM29dSxUMabuXPEoURzXqMuW2nmMBoPu9KmnfFXs9WEDLQnj9",
  "key47": "3Ab1tJBW8Yt2Gj19ouY1AGdsXiGQN1cchcqaLwyAweBGv5JgHuZSqDq4BQXnkZTsrm46ZTAQDAU3ftncy1E6SwaN",
  "key48": "5JkUdP6NsPiRuaxCjW8FxEC1FRuAmyZp4GWPv6rnqmMtYLB1CsSwveUwZ3vR24kKmsoXtuDesJRTYBsFhQU4QtX8"
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
