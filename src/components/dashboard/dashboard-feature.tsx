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
    "3QWer8BqMgmsKx7eTDmUE4ed1wyWUwqeoHoGG2YUJDA31BHyE3sdNHrcqNyAZMDhMhhkB4rLd9wufLeVLsSWD6C8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51tXYN4gLdWmuwBRu9XQhNcsPwoCctC8zJZXrV8Y3fN7ZHmoQsCQKVZMwFcigmeiGjy3nLgMtmbevWNxjFKGtm4q",
  "key1": "4mGFrrXs5hrP9DPGkaY9rmKJ9NEATRbP9oskBSMct2aeBTMErhPFEXsVUWVStpLW5L7h93rW6yFFAkH3k7yFknw8",
  "key2": "2aQqCwVnTJeuMwSbyc3NRqC1pzbTG6pCiwFXXqv8YnzCU1g3ydeV5iWg4q86FbKCKmoNx8BUG6DQQkpZCtvhcNFo",
  "key3": "62PeAmzfFdDVwirYx9x5oE9JtNTEDbrHn17rp3yYnVZRvrmbDSiXQgMpHAEoG8Tk9y5FRRWVUijerbh8i4Kc8Fe4",
  "key4": "31v1TRPuBotV3opafzSMikL7HWoZd9PXehi3zVsSFvPHNpP2U3eUNVWnw2gXTZC9kqe9EAAYWXH9cJgsWRWSpF6U",
  "key5": "qcpwTMNf1MuWvT4TmwEuzPuokLo1jmU6StsCGwkLppf6ZWnF3kr2Xnh9c9LpNH42omXmARuHs5AFXZdcCYiLwDN",
  "key6": "557d4Ckgf2BDfmGL7BUirwpGt9ZagcD5SogDRx3iqURp686rhJBKsErUF6JHtenAUJ3P2HDasGAfYHykPGZgdUof",
  "key7": "2i6ydCrUxFZSinxUuhWAgAd5CQVxzj1AqybiYqqpCtUYsRJwKXMuTaTST5q85NGzkCnd9SBsbHtQ2Hghtppgot3p",
  "key8": "4ChEKHJhBWKqhSzMSk6A42hhv9VFmNU1ewUGo5Bekhr4G7UjcKxG7iszNajzcoetM6FH3JgfWMKct17Dub7V571K",
  "key9": "2UBPccME559A4LuMDFM4e4pnuZSgHur7VgvbTVMdqGXqWHtsNCqELiJ7JG2vkcK1Apk3Qzq6pvcUojARtJA3CBTD",
  "key10": "3rA6kktQVFVjwmyU66t3Dd1HxnJrNZV6jCx1KbRqDmnvw8RK9ikRxGwhk8z19tNf44dk1you1a6Za4arTptpC7tr",
  "key11": "63tQqN6qoH125pwJzjYzptgPqQng6fKTfyw9xKcmyFW3T8Hvh5k3z1by1yCtbm5m1SqW9m1sCk81aWdVQwYH2fFW",
  "key12": "3GKF1gk9M77Lr3Rk7VWaWAQ7UUhVAV1rq8MnmuDp7P57JNpDNpTh3M3iuapvszK2jwf68trc7MRg7WHjXQfcxg6t",
  "key13": "4PsMjaK3kiLSh7uvKEKhzzRZDbAHzXuui6cUph81GAYEtRNEzhZCF6eUFNNsJFDXTxStQY7crhztmmQzXfX7gEHq",
  "key14": "4P773mQC2mrVczaGfuFG26ohh9mE2rzxydvPSGYeMQrXhy1yUst8s5d1HR4TfkUifyHEamr7L4ifbTgzXGMBnYRY",
  "key15": "4QbxMfKjHSqKzLBwQmHkmfbXerabTFSSexhD2YjHBF5cqyXUbo7vmV7zturYEUtw4nj9v4VcLcysKyc5CBRWrQt3",
  "key16": "3PgjrJfeK2vY7ytvqduiVUgZPgxhbQqD6HvU8MjzJb2xdV2A3weekoaH2EBPwtVMs9QyAe3fAh1T3vBsP8daNWbm",
  "key17": "3Z8FoR8wgCpkgRVTNKA2wQZ3Tr53gkHnaGfPJRwLtuTgwYaNg6KiY3ewTkiMAgEaWhUn3pNyLFcLfiQPG6LCeUBr",
  "key18": "2AYU1MyDDbWwT782hE6xBAGbGAsmuQJcY6K5aR6nJe3Mb8wpMGLZhfvPxwfevV5EujtRvtv94St6p6dcBR2rLank",
  "key19": "p6pVo6Y3uZiVy8SL4o8LxEpXTwkTWWu68fAg4tGBE1Rre4U5vTkAuas8rBrWi1x2unPnJkegkDLnAEenQvMagBi",
  "key20": "3LuJn7PmPTgu78BZzRxs1msTT5tAnSQ6pSQjb412W1X8zbX8SrC1Bqai3vwjCNBtag3MkgQWdTWDDokVgs5qkZ9w",
  "key21": "3zSLeGq2gMmH16TzCgMTjyR6vLhFVwEJi3HcbmWHKTg3Zv8ihPFpce5NuhcpEZcJpgLFaKpZhEFBA1f3PCY1xyKD",
  "key22": "2KicE68LxJDUKJTeM6Sn4tfppwFzjuxbXUv2DuT6R6vgo2YJqqBzo6kY3S2cwDycDzWhc96MXTqSj3E47J3EdDN8",
  "key23": "2nG7Q1RV7Acy3kkB51xXVcdyvtXPJrBP3YPVcLr7x79sLYKe9Q4EKjWfihJb1GdmGdaacdYkAFH6rKGVfqBbsPq1",
  "key24": "29hxh6u68oc5BY9R1z1x3qb5v8PjniDAgdPgmJy3SpoNznjxtFGFn5q5jcD1a9pwTVWtrs3pxbvV8rVQMPYGQXXc",
  "key25": "2jamGm1MHLJQmeYGbZDnEDHncqUjLtDhyVskBtyuaCZjbtybCsyzL2Pd4dqpbb32dSnGemXz9seJUXnbFuSQNUbA",
  "key26": "5SMwhcdaEQT3ZyYNZQx67usRaqTRpcqdftUooicmFhdaipEcQCusx1nPgaHKj7hP1izWUR6FiLaRXvuakn3aEDKh",
  "key27": "2i2qDjcyTFrJ5UYSNQfjeYCeAkKkJixrUdS1KaMDkxyGH5w2Acf4fHqn2k5q6GWaDTSa8NRN5tqtM58ky9gYNL2K",
  "key28": "9hKjQB45BWHGHE8mHcqXK1iUUjBoASk85psYV42Fh9g2qtXWUHC34RwMMWQA3E9yMAJw4qynxbVFmKynVzCznwB",
  "key29": "3SHUFux5MnQvdRgeQKU8JC34xY8Fgr1uDhc4op8RtSJQ2L5r139UxEPDpjUSQ6xD9fzZEvs5tR1XAPp5KtmW5Eav",
  "key30": "3izoMx2opjyG3bGwFzFiPQ1tJTETy2V8vPqieCB6JJGrcAgs9gAspUAs6661sp2niWLGVDFYv6tErjgc1cxaa2uv",
  "key31": "eeCXTmwyoiNWs4Wn8oWAJjHLGazhbaiwYPn6PmejFJXF1AqeoLB4RnZ6W6rS5GJQa8jPfVAN2FLaQYmjiEhowGi",
  "key32": "3QE3anwMyLH9ADFfDo8tuiczx1McUkXMrBDV2ZH2HBv8XZuMxC7iszZ5pn7qHFQGyAj5zU1uxVV7wCQWDkVNqSyU",
  "key33": "2eNSW3KwMtiym5rhSB3n1EcMLk44D59QMuwF4rGRXCYSTjjRm2WwnR1uMhNr1bm6mqpP4gqUFiZgM74HZh3sLcE8",
  "key34": "41EnGSrx6kq6hKzEbHoLuNuvyyBirL5KHjpQhCyZRkL5ocDH5QSAJcFovJ3yJdLTgnZcLKkUs63rspSp1eXP5VBV",
  "key35": "ZivMkdXuYCSs3qD6BUugWe96Umcg5nF2XbGEhikEu5YwhUYpLkK8VErJQeR77bRSe5dsSrWS6Az6qZwZramqiJY",
  "key36": "2bJHuK1iqpsiTcgziUAYWNC9BB9Epiu3zH7wBPk2Q5ExEAsvBm6DzdsYC6GWBgqjFaGpppDC9UEJyAta3T7j21Vf",
  "key37": "aodX99Dvps4NTi8VuTquwwH6Mis91rZjpeVDHqEY17KuB71puFpMNKNBf7wC2bT7pTAy8LxLfdh5Mnpa4iVwP2p"
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
