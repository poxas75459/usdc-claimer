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
    "2WbboPiNZKTHCR5G9Xx2YNF6Y6M7UgfPK2FSvxdqBqXraz29ZLGs91dgwVH39fthBWPEP6r19tUBZCuQjGuaVdiL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hY7xM8PnXo6hv18JmAFatXk2P6dhD7QefzYC3vTJvuFdbdibY7yATQxFSLk4RAACaXajJjG4BQxuwtcpDaWMpo6",
  "key1": "4QTcoc5JBkS6tm8WnD3pVjpyQdkA4HByXzFZf66AcFpgqMKxz46gqrnRMCXx7ZyYDLDcHzcXnrGmtgTi7pXZd27f",
  "key2": "65fv4kaJbvepR2yXa8gbTpsmsg9guSfU7QMcqxAZS21qx1fU2P1BHw1b6TGMtx2PPBQEkq1Xd2fg3PpuwbZPpUUn",
  "key3": "26h7z5BdVEM6jk4MfpRx1oC6GjMwWeGhc9YMZAibhJcsqSnWRveVSFrZLNKuHvsMurFUAMMYMBcXUsgiBauDNB5o",
  "key4": "67nShveEeycqhaJ7wUF82eJ5dSbJsGNUbkd7RfTBk4Zvf4a4pyaKZDkFtwZXReVrLrpqLJMd5Qn7SKxvi3dapuYv",
  "key5": "5rM2PAiwWoAzktv7SmGJo4o5ZunwhFquw5tL5dJur2rRZB4SG7BvxLGQKha2M1KxszCwSso6aMMyvXsk2o5Pn7bG",
  "key6": "2m3jU85EtpXYQiJy6YT7SujVBgq9N8mkh4RD6BdKk9Dx1LEEajDUoYkeeAoQF6MpTmh8579QC2wzYERfX6kzg4pT",
  "key7": "5HA449fdKGY9qY5mMBNQcKojFPu2G8eRuaxtAzM6ohAnFHVuAGsceu8YGZrnyQKZA4tivPs4M42rv9UYXR34QBmy",
  "key8": "eCAPBb8Wpy8RLWvYCEZu18CfSz1x6cn6q5qQAbtYghgxKM2dXQi2vr2u7u5FaWyzHAs4rH7o57CcbCfC5eYb9QQ",
  "key9": "5epHZNCs5Mm6Pi39smNUQMMeeC1zbvx8A4CdLegxsJTrfcyK4jYqWgZ9u9JZq9Nw4dqVDps4DoSpLQG1AnGT22Lj",
  "key10": "213JN5ACKfZCF7nePNQGnGBeZNqwTef39j1ZtrJvVwDZPqy92sNWF41AaLpdA7QBQgiwFW6gMbRV1ET5mN1NKunC",
  "key11": "23d21zwHVfcXDD6T3qAJkRR1bhTqB18XwRRYvCdvYMiFpDy9DBjdsbcgufwBwiejcezqwEkLRWR6Pm3huStRm2NG",
  "key12": "sD6i8s32DivbSSauw6wyk9KMnWYsN2g4PVxSBtKVpeGrxpvs1R5r6RyhVJW9YMdRBd9kdriz6PdigfdwZn9PhLe",
  "key13": "32CWiSUitLGxVGfrQtGGCyT1gLBPBVKkRakixY6TbaVTKoovsm5MeiyJSN7sFAtWCUQQ1bZ3TMys6sGivk857oiW",
  "key14": "2jMrqxs7gxjM3ynhEuvQx8QXaiWswYK6RHVXNQp7uedPj8TG1YaZAQcd7igyuUksNeuNRRGqXDaAkgQ788oiwtjJ",
  "key15": "4xEmWogBexqjqEab7RSGugcN8EXjL7XBH1Y6rQ8bAn3uyjSfrgpn1Mfg2mNF6T9sKf1gjSiP1Gx4V4NzJDvCCQts",
  "key16": "57Da1YTMv2sWRgE4duPwNgTdjc4Qpz6GRta7eiTS28qw7XP584gXA2x6Hs5NJ4Ym328necXxZvERk37AcdyZhebU",
  "key17": "38g1eR9mzRpnJ1u4s1otJLj2eNGT5ThJvQN2aLtcFSE2QPvXMbGF8bZLaPbaAYgwqo1XneRZBvU4uuGoZdevn8tt",
  "key18": "3N7dPpMwKQ8QFrFeXrihd2Y7nwHYQT1WayQHxschBHPbVkCHAPJB5kNW6MZvyrwC2oVf55szpoJkuaiU4KqSmu6G",
  "key19": "48LDQ37gWNXn7ZGo8gJYfaTVij6tdvNmbDp1qeEdMgYLS4zsBf7m8qkBMoLBAEey77smt3dYqpbuYLpVxu6TS9re",
  "key20": "4cAQxje3R9dNAV8UMydKJJGPqWktcMDSdYtgRmBroRJKT5kquvoZYGxPSFGMPpzoSjngnumErKJF6TThGVLXzQwd",
  "key21": "5Pu15Tc6dSo8rZmNX1qWiWNeWS1rnsQoL9s5qLBGiAqYQivrQeBnfhtoUsQkkz3D8Mu7kfe1SfQgPe8QPFcLADts",
  "key22": "ntNeHWJewRVirCw92uiouSXLMmripMSdFsKjWAU8QjP33JtezWcFHu6mVcGsSeU4j5jBroQMxyx5WW4DENNT7xP",
  "key23": "BqtogAEs9P1CrhJGvixLhGcP7cFCu5KAhK8jj37ZoekoEkib8ZAxsadjEqkbwQCG6coifsxCni8HeDALZFCfkpE",
  "key24": "3HZzZTb8MF1dzriG7cdHzUrTfMzsKqKccTj9rYxoifiqHTuYYhxRdGc5oZX9hBH7iww9cJoEarYWuw9JbcZirRE4",
  "key25": "28Kfz914ArGRXRJHp243R4JyxEJvR85auGLffsfynsXKSkNCQ4qB7w4WNyiUfZLhnddRGVQks2g7E1HFTtMpvPeE",
  "key26": "3LxiYoZs1XgasxUx9rwn8QmbHCYPLdgTZVfEwDdF24Rj24YKDbx6vTX6VmyEy3i3yqSuqogAEHoSPPR6NGpKGB53",
  "key27": "3R494xm3D8bJFfGEmR5EQrunVjozNznzDijHBo8D3qWV4yLyidpZdqCHvrqqPn5fPnMuRniX7yKkppiLJTYsj3wn",
  "key28": "2V3CcHWr3rZrmFKdYh1MH12PNkkcDRmHHBvJ7UxC7A3JmhHTiE5V7FVsJfAe5jQCHJyqeMgKHt9NFrhLDHpydEb7",
  "key29": "5xSxzLDcVbqmAV4TyrebYgUoAWPmWVNZT9e2CQ6iHso3Cgcv18s6yvjGihT2UxTEtpa3iz96AVuPEBozP1FycKWa",
  "key30": "2awXEvNT9MAAj5H131ZdBTVkni9aaJKZpwLhPWzHviuot1gqYz5wz3gHRURHwQgy5awVEJq1V5mNqsmSaXpY3mx7",
  "key31": "2x2eULHUYhPtVYmktbFQnHpc6y2dX4L4vxrFJCMT7RdMMr86x2pj4ZK8hwjWfmrqc5XACeSfLYHFKPoULSZQ2wQu",
  "key32": "bSsaJ2Lccdx84ARTNB3Z9iGia2223f2cytW68TsDMLPaJWPt5uAKzdATmt4dppWHaPUPKUJmVJLRJaFN9mm5zvf",
  "key33": "5iaRi2tAb4ZHiSSB9vyRmtmAAG2NZm9oy6Hupd7iFhXBqaEGrwR7vooLbFGSPPFc6PbGSNtWs2r4KGY6WfvDHz7q",
  "key34": "5mNx56h2fZBaTcD5iN25w4ffNLokvjG8E87VDmkoLacYpK4FrkFF7B2r4AyTrbkTnMyju1yU7BHbfcN5zzKBn7Pr",
  "key35": "2u4eLDaJzQitzZgnHFMcyza1AuCA4puxPD7a4RmEZ3Pbpq7rJPsop5SaNudVmsweSDGCnwxwJUmDczyY57A8V11m",
  "key36": "2GkDkgnvoF6TnSxWJMQG4k8r2pw4ZtRJvgVij3BakdFwMtQu3y4WremeDogunLRxhkPvMDJJeoVzQfNa9bZU4ZdZ",
  "key37": "34jErJakqw3p8tQUvdf7YWBhzuzTYpiXEAaHzjgWDXowirj8q9YgTBDKDvP1PJpZk8McMUaKDaW79yJMWiK9fJGq",
  "key38": "5Ch2RYrRg1TbXrJPWtBM7uw7gAsi45ai1sGTa7iHeVVWAsyzqFn7fz3JmiuFcoaXp7FGimJ8LtwehHVopjfosoik"
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
