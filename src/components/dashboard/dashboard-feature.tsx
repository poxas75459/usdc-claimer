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
    "pqX9BuY6EK87gq23b1eca4gyAG9pVTAtBH74jZZqpDCQkxz2ZkbyQVKNTf79s9bVGZ2WVWFn2Ufn4JJb75i3Abh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UtRh8SNmnNACFSBKgUmqNFrQ51FyoGg63zwvz7hGpW1VxWaH26WNwEBTf12Xt6HpwNQEEg1qCGbWTrircLEGM36",
  "key1": "5YvP5xFxCu7NnAjLYcnT5BcGjjdayxsPWgbynsMyHgMA5agCmZCZefy1ySRivqjFc9pziB7oyxo5kcXNcGGwVpVV",
  "key2": "4JeefgdKryknQVtSohkJikHzChme2ZVJhZQVu6jcGwNeBfrVSSnPPzVdCZzKc3WbBZFXhsumRqYHoRrg5dzE68zz",
  "key3": "274HmXd3MRsmRZjXaTZXdSCqkCpX5WMcku9FXsLiPrscBUJXB7j6UVctCcRntQGF279NzVTUJ6fBJ1qVUhYAcUUj",
  "key4": "2QM4u4FRqGR4Qu5HdwscGxVoy2ydhBSVXfooa4JpBx2wgTXHLhJnDwjEY85dsbmzsJ1GdxUNrx4Qc7PTH6djje7g",
  "key5": "47L3r4TG6koTT9rYTSDN6bAtF2civqjUKJddQ4y45X7gexvJ4vDYotGWg6yZYTgBHUJUk2qaHDdXLuzVApbRpipb",
  "key6": "LGk78oaXFvuYzmPib5c2an6Ngj7QzsocaGuNZitN8Bw2KApqsrinjgyN94YiyyDugBXojrkHnA8dnQr2LsF3jDV",
  "key7": "2Avvq4bjscKPjd4UG3D9cF4dN72QRPo1wKMDgZKiPsknjF2Vbr8FeRvJT65Pmfnntiq6tT6nLuxzeraz5pQG6AKe",
  "key8": "4cP4SgBM6Jqa3A69knaMU5Wp2PhfvymVPz1JhkHtnT7JNksWzz7ntTHoBmSPv8kB2gkPz6PnvRXtBNCgNodyBMFa",
  "key9": "5PQzrW4kZ5fPeQ4nTNNCziCNE5ohz2neTz1h6DKTiDwens9XZwAc9CJd8HrJwLtJ4hZLiBTSYdA3x4PTzNYPdUv6",
  "key10": "46ivtoLPudbLPdDDTNFeQUQbRfx5jWGovDYXWqaq5Bo6dd2VpQcPiYNjQyKfnLhj3RwBe8Udaw85s9SNi4Yu3saJ",
  "key11": "5u4m1jr5QyBEP6uPX9ZMfKV1FGPcXk41cBfCqnMnFGQR6koR182qsNotTJVzWJ7FaHT8c7ZzB4STgPVy6tBgxc2E",
  "key12": "RYQJ56pprJFb75qTxyyN5a83oUajVamuTrBJTVRBgh1YAXDC7dYhTJK3sfmyNXfMtTw3HVZVHBxuYaTHczJ5E2B",
  "key13": "2WXrUAWL114ubVkSkprRTnd59wuP3kNLHUNBdoax16EpsTb4ZAvzqr7KjuxKA8EijnQb35u2VxKvvpR8ygrYARQX",
  "key14": "rSpVcjfovbV2J3VA2MQX1GaqtXAqNPWjHxEYMQNgeZvh52WKzxRBCcyAheTPsc5wfYGXCQxf9Qi83phhHUYEjrr",
  "key15": "31TBQkLLu3wSp5N8rEVQ8qFPq8HjJfHwAwMea52x48QCMsyfwi6AA4NoCpuGxBayaXrJdnBGY2UcCLe8kVbpvD8s",
  "key16": "U2HCHsmGS79Q6rwQzQBCTaRhewVLgFcDcezgX4ddaN1AhzwSW51zprJLoh5gaC4VfoSuiQspC95h2RReU1YN4XS",
  "key17": "4kpBiLWiCcwR55Xahu7njHUembp7A9Z9G9jLGVaMT62VyctZiYxm355cSDvWJMpr1CenmWvhFTqymZuUk7rT3isv",
  "key18": "3WLJHiCgV1cNnVwZPARB12LptdrWtMMAyg1iHUGZkqcoERjsAAXWehWikb85ZKjCs6uegoD2g6QxncYKCBMwR6CC",
  "key19": "2WjBZVNvoJqz8hEcmQhhmoprwY6Z25376H22m3XZB6DyZDEyNT58CvqmoP5C9LgJYe6bBArjhDTYcBWffgQgvBvE",
  "key20": "4maJSAF2gBk1Atju6g65H3B7vvE6aexQmXi879LzPeJvHZnKMKV4zLeFjyT9P6pC5vCgt7xiQqyYHdeisuDxRGmE",
  "key21": "4pz9qkWSE6GNi3ZfaS4jR2sMPzyUw65SguNVh7DWQFKNHfw8DTEEePiw5C1YgYr7ExqbaDuK29g8YkbPhfWen6xP",
  "key22": "Xv9hFtGJhvECk49KeZ2R3hQvHS1aFPMajWkRDZR5fHjgBcDaQjzYkUkDnX74oM95P2xwrNgg9iTrKGxhPX8cDKc",
  "key23": "4V3heAn2cZ8r6ARvLju6X24yzPsTUqqa3iWLAjpEkJ5YwUTTeXdjHipt7bB73V1gsCUpg6626vXLQn7NvBwaYjq1",
  "key24": "5Eeq99PD8uAZfR6tvYX5QHGeh5e5XmkGm5wS29BH5kiGf7jckVtyPrUY1689d6Ly4vSHuSXpLUgTwq8zdyMZeJ4e",
  "key25": "Vvst9kXdwKpmtUKxhnZ8WTTNS7KUQmxSkvtRFWL1SUZizx7Yqj4tp7zRnmFJMdULbdT198YtzAZ3t7DKaCsNbGM",
  "key26": "23oUs8KFj2AHHFc7jNbaoz8npvuSncMnR91jKmi7k7drXj1otJrEDYXLtkaN3Pd8EaRM3uB3Q8qjPWfJr2UYVTi9",
  "key27": "5pi4CfhpWe3mUWwMtsUorSbBVj4ewuL9ZcnCR8GgvqSWMJgUK78ZX8nQfD4Vt68Rz8KEowr5DqfHUEYazEZotKCB",
  "key28": "eKFfMMra3dksXe8Po8trXsBa5czmGUB6eFKgdeB7Tsf7ozT1TnLsoRjkofe5tMrjRhtTpJd7pCxhknyFAY1WoC9",
  "key29": "4HJDhDtxvzj3kVXZqAJAKSwVm3SjgxbzRSkNhUKPWXpCRzZKbcMuuJUYtLz8MTZseJVc8upJQdYwiHb3yLLZwcxa",
  "key30": "65FBsXJ793Eice5wdhUVpbWsDdKMBtta52pZT4Xu1Ac1ukvVtuzKoGGuCpWabet7wHz5YdwcTiHfvxASzWhADQFA",
  "key31": "3cDi8Wjkuc7kE1rKSgwkPRAm9Hv2rykWVSpHvs3ujjJjMmwto1Aqt5cDK6APfaQnKpn6ewtnFTNeVYGdWDufzSdU",
  "key32": "3n5Rk98ZYVCGxU9hTr4fQRtUDBdxARfP9Tm7zMEMQZqnnbGSxdx237kG5aFtACotQYGz2SSQBkm5TymcJ2xgH7ZC",
  "key33": "5JbY2L3fbo9c54EQDx9WmTeKQWN6613ZcHf9FfeuEjnzDrx68Q15MK6d17nwv3R7G6bNTRAW12mTt83TGkAfTi5j",
  "key34": "TpRKNbza2ohTh8RXmNCiFq5Vm5UXApgZRsX7bwBWJSLcJMPJp673XqV463wPa3zyNxrPqesSjJPgAvLqExnVyJg",
  "key35": "5kZX9xq2Bmeak7guQRbTMetXnKvQnHBBEzBtMe882C1mjM527xLJjK5HfBGWMwRa7s6ioV6wp9Zh6RrooNzr4Kmh",
  "key36": "4xcJZ4DrgPx4RNc5izCSKgcmGMBe237MfY9CF2Ss537FHNqZsfxQYTxuT33RHKwGyG7Tq4G8uHZ3bbRoAhD7QaHH",
  "key37": "3LrpqYtDx3FS55xSCthKz98QZhCn9zSPnjJwu2zp77Vrjv9BNumLivnjvR6p1iKikbQLhv1x3uraY3CnR9bKqhSB",
  "key38": "3e8McjkuM29k8QnEASgQiyzKZHoV96Uumg2q5WHbsC833Q3LjDebt3q51b5ikP3dpFgfbVnbprGcUpYGYScYAN5G",
  "key39": "3QCGc8S7rCyqxV8phAK88usH4gat8HG2xebx1aj4nphCCmYg7EN3Xt396gkYxuBcGPEURWLeTyUfDT3kmVC2MMiN"
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
