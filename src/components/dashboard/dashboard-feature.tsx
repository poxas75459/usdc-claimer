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
    "2VWS5qq3GJJh1oUoi4gG3M2XBEgBAd8P87ahdtdAqiS7h6ZKUoLCgLEphYpix3NwdGdTUGkD5sLnyCrapmx2qjE3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XyVKZM4aKY1CXfnkDf5z4uiPBRdkMJ49r3u185VHjTh2FwoDw2FeCry9sWsjj7ZPPfmWhiHJMwYfbhmXY6ciUGJ",
  "key1": "5X5AVexMPbZPaNhdyGTqvxbB3taBWFTJULk7bGLQhcCDczq9vxQnZoF2PdMgwxEqUoB5CNGcWnkoNKJGavDCHD48",
  "key2": "5z3sjGsDE7rr5Zb4h1m9GyNuNrnj3Qjgt86gpVdFcRYVcPwoxnyAh2J7Wv7QSQf9dt3G2mxGRB4HeiLosSNWEpkS",
  "key3": "4kxKdYA4ngg88d7X5SjLqA1Vc16U1NDTTpcYgx7Pqky7kv1pH1Dgy17PdgDoSjbvi7hGUmWFmHyCVhZ6he7usn2J",
  "key4": "2cWvan4WKxA4sUYuAJ6o3BzbWYKxfpNwh9YPjPJuywmdxuYuJPLKjUzY1dU6qHeWoVsLSsRgAUxbSyTGD77aemh1",
  "key5": "2iLq9XMWmk5ZrqoXqWB9Kx5oX3bYDugmgpjXhAYaXSGu8jhk9froTKe9uFsPB8yCQDp4cJSrLyWE6RbMZGgXzgwo",
  "key6": "2K5J2GtJKTzTcT8khmC2LwzmvFAawcqHsvwg5E8JBxRD3XboZ5Cdzd8fP61vAhFwM474yNiJUBXpJ6WRyC9wgXwr",
  "key7": "3UuQZsq1AtMha5KfKNTLe9ZheHduQS4QkNKYYK4bkg5SNFiN2AQK2kSdZqHQ4WZ24tcnjDcEhoNSNUHPsfCCTYj5",
  "key8": "pmk6siS7Hw4AeZCy46wLvre9z1SxBA12oAuCRNKR2WiNUkFXELDNsognHduBK2cWX5rVUnfN19AS1LZdfDnmgqN",
  "key9": "5YNyQBAcvLK94ySYSaHPJxWC2Wad7jtTEgqBFj2hiByaw9nUSq7vJAxLNAn3DMNaZ6ShFXoY7ipoJm6MLQcPW6YF",
  "key10": "4dvatJ8YHJFShAt6giBDt6tRnV6kJn4XuH3pz915PUVtYvZiyk9jVLm5JKUMEuvubDMF8KsG3kPZq52mT7stsYKy",
  "key11": "2JQsJb152ZiAtTpLfknetpLMEsF4mSY21JBGcuQzcusiTiQeM9FAdSjy3SRStfUmMzdXANJiuaZxdQkfooP753SG",
  "key12": "51fUAVpRYEEr3yHGazSPmzkAVyBsNd4QCF37begQb9pyZDEnWk9oxyjCH4iWVcp4HtHEg6Lt8cvfoxZDT2foV5kg",
  "key13": "2cqwEucA1hG1tF248EK3dD3CZ9iumCt2bYWZqgThKwZUL6ULZU6goQTJ5tCfR14hhfavSSbKW1VpYsUPBmLho9zo",
  "key14": "5K442aF67mnBsgXKaiQNYM18W9chk72gdq5fKJAuaRTEES5v9GM2fLcebVzTmmVwXNbsKkAw3DcxeXdrgk8iNtRM",
  "key15": "4K635pwfbfG3EYGVUBqb5d1iTCYMcpddLkY3UWgbAVLY5FnYUdKA5HdytUAFZqiEwASNsWDWAy9eq9G9VWQxyBUs",
  "key16": "4vNH1uqKkzf4WzkJpM7hvq6STp6FFF4k6HMoND3mzYExvfniUDJCZVGG9facyxAStUFQ2ggaPhMvmGBruty5PsQN",
  "key17": "2CggpnYHxcgnKcnKV9rrkEgA2sBMAmX4nvYVN5jnUQqtSvxdt94iyh5Y8bZwaeTTUGpCivFn22VFsdM3Rnjxxei9",
  "key18": "4VwC6juxVfXDqB5HJYQB7rBMoUJDZreuHLBbzWPAScof1NLDrEXQwnzr1dDzFwLB8DigCi56ZDnxkj56LtN7bN3o",
  "key19": "4Jb1hcYPXKoVR8fgwuowUQw8YHoA9Reewe4BRrapVqFV7pLSaxwZJ52nvoixmCzm4AVTmVotGn3EQ1Awr4zhtdiy",
  "key20": "2d4YjSDC9zNGfHwr9KqcpMLRGZjFuLm1Ytpbvq4E5rt1QHhZ3Yk3vYXFBD7PPDPjnFjz765wNBRguhHmsU4RMPtZ",
  "key21": "3UxhmfZ4h5HNNzoa2UvJHwLLASfN6Rfm4oFs65bn4KcFgqH9jKJ28f5PvX6jTkNCxF5SJDx7FYhKQBpcxaCLU9B1",
  "key22": "3CV8UpinwNizGNePeWs7K4gxziPg32k29DaD4tdvtsjGV39BCG9emcmoUgzPBb4Razz6cxbarKBd7E91MfvuKDtN",
  "key23": "2WFJNyDZ9vFidQdFFWpni6tNmNiNCUDmNft4ALpsb2Rv3hUE3uFdUiP745XxfyvH6HVBh5p86zbECumPHSRjdqBH",
  "key24": "3ZhCM4BjcUcCBVXyftQs1iRHyKHbmXAsP6Mm5Ybm1mtDWbjeE3edaJSqbTbb6yAjCfiY3vCSq3uHHqY9yu6fMQqA",
  "key25": "3dvpFXRonEWZih6C5W7F8XSkWECZtoJyYjV2zwUoLsrPwppAQbpFtgGpvz1uEtxqiSLgXfr6uQxxvRRLpux2PefR",
  "key26": "2iPwX6dBDBWzxFce6BuceQDFtXaVGWkXeySx3LJCPM5v5TUAnEstrGyMsuJPHQnhSNVBrax4DzpD4JdREEiDao68",
  "key27": "2e2JhFRBYEogMK4DwU6nfsST24r7zR6B2ESxeQAoVNK9jUzmXdWwux1Q82DwRapkztYoq69DXAg44AimFsnPWRxw",
  "key28": "4EMUHr3j1eh2M7j4ciftxPDPmBF4gHkjdV4fubE6RdZBRzTKatZxFZMmnhtXZPVGv4QQTYWYPwTgt8AKoRvL3XAK",
  "key29": "DT7XGLfRHwWsP4m7CppnMJnUSqBLbcBi5SfaztWirjEhFG322mAoyE6Va4BJZyYTTNje5bbcNwMd6LKsB9Ybdqd",
  "key30": "2Q5YhD9h86Cf6yTnzbjAxobo5FoYwbAEJVsZkd9cYcLG2tXz7gByqrzFdyVZNQtwgmmQJA8eVnqRB1dtqJSqQUzq",
  "key31": "3x1E8JYJMDuMJjf4Uki1PdPk1sFG26EKiWJJMB5KEwDnJszrSDxASJ1LdnZx7UwDYH35oHiDYRZuamMKjfAvEuGg",
  "key32": "55hVFCae4dSuvYcbW16GpSgvYJn9sZjiKw11SEprXTeWH3ocv15j6Lt7Vb4PhpMx6yQki3NTG3nQLCvNhzqZ55J2",
  "key33": "5VR1yUiCpFcy3MU4XRKuvfmRZxHn8pGv63nCe4U41gSaLKR9hrRhL9R5vhbHETfvmEDx627KNTxYHC7paP3GKJWo",
  "key34": "5FRvi8Zj4ohAwnjqpS69zundpi21dfb6im9EdY44u5b5qHnryBt3KUkg2dKMPBvKuFPuCyXqZWZc8T5BMBwnEJ6u",
  "key35": "FU1HVGe59D5Yw3ZFtRwottAS2Zwzax9xcvCyNmuU4KiZoucFVGBDqoLLN1PjVPS6rgUjsUwfg5s8hWjxoqNjbLU",
  "key36": "nAuVSMAGgYDbVf8hJgE73sLPQV2U9stFhhWvqEYPRsvKPcPaDsCfmPCdnMGFBA3wkEwHehHrTdDaZv19WMF5oRQ",
  "key37": "539LHdS3Ss3CmhAX4oEbZju6ffn3J9aaLip3uvMqjRm3JTZ9njff5MJ4CSQPN3Gfjy9XN3zNBT6apPpGdVXi2UNi",
  "key38": "biANxHWpbgePuqTADG3NnTuHGPoTDt6gFPqLyBx7V7y6Rw4T24hfFPqxAxxpjZRBH6bLgstFkP4vyVrVGYePAYk",
  "key39": "2v2LmcnkvUNzeEVzz5q6VVNcms93VcTRAaeyWwssvG5GAKoL4XjZkSMuLrmstf5pG51atvVTe7GXGoMN5QE5Ngbj",
  "key40": "35sGcSi764PJjLySLB7UHL1TbPkB7hXAkqsJ5RvBVv4gM5kZrWiwqmVaMLvZbNC92zEf3NE6rdWbrivNXXueguMq",
  "key41": "3EoGjcf5SPfwe8GFcRKfgQTM9u5JNVQBnZg2oDvU2aSmuaLryeayCE47RsXXZ8u7FJeVQjQUCrdvJ16jnkjyi4VF"
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
