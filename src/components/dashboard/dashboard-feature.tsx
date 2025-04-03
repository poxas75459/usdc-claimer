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
    "2hDkjaSGaLEPEfjHZpVep8KmWfFc1qNewo2cig9eF5QmoW9A2327HLD9ztGfUjuxiCRSYXR6ZheSnytV9AeXHDWU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VRkGPuz3A7vzvRYXj93abRS8NFq8RuMy3Xs6VpvKRLyHSzaawW4jQ13z79USksLci9MUhSyTFdR78woiqApNCFg",
  "key1": "4JFFkRatbA4xy2F9LnBnfyy7FuUZgXYPQrEWXav9gpfC15LU43ZvhHV63ND3rnkcXHPsoY7uH3HPYbxW7cszJoT8",
  "key2": "2tx64PhqBrPTGTKMWwjhTbQW5BTbQ2aubukQDeWS2u4J8UHX3NvdHWvjireCmATCCqXG5RW5ZqgDe6bj5HFPv3r3",
  "key3": "7d6XF2vvY9QzWTGggWARvTGBXYVuus3bAkprCkMphDGZU4m3MNuU6nBSGCf2pfXTKaU7KEQzx49EreAFimLH3DL",
  "key4": "43GcfaEpZ3xJbUAXngAngsYw94FaBbMCGqhXDq3Jw7zSrqdDiZzyBrNjH2F2vxKDEAzYsHE79dmDmrqnDxstzdCx",
  "key5": "4W9mGtVpusLbGPai5gWAdDZT174zsx7AfdbCi61ckYw4SmHj2CkiqBBjB9CdT8Q47nUeSF3GMfvrSm5uZp6GeqEh",
  "key6": "2bEWzW2eBykQmXjU2t8UQVKtXHLXsgpMpK2kPkpCRKJUVoyfXTRRdxxwCExANeyRGGQLZyMuemRFtgS7mkFsu2fT",
  "key7": "3NbwoCuVNSapiHMHcLrgdUfPRMeSXfpet9MvDfpv72e66r4GWSi3tfJhPB3KxRDsrQc445S4GLQN2MDAEwvxepAZ",
  "key8": "31htBVEmZpwYTb5vwwD7VYXZ5nB1eBAr6oCWjnHfpqJdGfyHr6UymtEevUJr16AT6ajwnuWtSXYNKjzoqkibbUio",
  "key9": "2hNSJQREos5SfRpKJfLzRTJMJhfotHW3uTMAbC8ER926dMRW2VCiEuMCXVeVsoKbhkdN4wsrLy6Mcnw3hN4FyVBy",
  "key10": "4MHszLMaf2P5TVm6sRwwfcEqWv5vs7Q889aHydQPcoJNYiWe4FAZBXgwUJweS83rw9Vee3vNNDAR7AW5qGH6TfGW",
  "key11": "44noj56Bd7fi6XBZR575mboTpyXhdSPVJKJXie2r1TbHbAUYkQdQkrnRNNQvfWbgyXFPVr6wrLiydgpvVVoiXxi5",
  "key12": "5pPtqTQmkpkDM7kYSF45dKF7PXKWMggCRWaiXb4ZCQ6ynSVmcpGWPeTmmEhxaEAqazWJK1MDz3z265JWrdwAVNXf",
  "key13": "526Nu58avNfujScMLWY8Sqi1HWjNJdbzXRBhMTVYiUvxuiE71B3zLeF9Z9dKcTooKz8Yf4FPQrgZAD9XeZt3F44a",
  "key14": "3sk8CU6FnkhJ4KHzwSUkP77Uk6TfWQgej7dpoHzE1cQwT749hJanzihxBqpY4JobvSpi1th7hW7Hcvv6umELi4HC",
  "key15": "5e9T1LTgecQ9wULm7wcUWkgXmfGwBbsu3Cngw7VboQKqhBViMi7SXAmCiQkZzUi9sP5AfJFJfFXMpNt4itdsUaKp",
  "key16": "4xd5pZtyt13ftLxDKggHpubk1Ut5oJcvd3ZoajkugxxZcTHbEBbFAJ7Xb4MXw2d6W3DT8DQUimXVSKxJbv4UP13z",
  "key17": "2Ycyy95WkAeUgpQsjk3jYetqRKrPXAYpTWM81XiBmeHjGaGiPrHUB4ZC2c3Vno7K5w3PVickhR9VTR59bejkd7Lm",
  "key18": "58qQDUZjGHXwQ7UZMRSFxv1Wzw8xCweFq1Nxevyps3VAL8GwH4AqeVjp4aytZf9oSqyTXXqyrBajFSFrmLQ4GABr",
  "key19": "2PP7b8Qj46iTRE7qkAskmhn4UXqkpJVo2mNSkRM32dixPoEVkmjZixao9MF6AUE5WDa6eKzz6xiKBPoC8seYKPfB",
  "key20": "4QxBzKRgRJpL8BVjzFpnQrYGkFeBLkxrXzvt2F6873FfAqAHyLb17BtmVryeH5TS8YW8NUpMaco4GxUDWiU5C2Au",
  "key21": "57XM8u6sUaE2D9WZuuarMiSyq4TDRMbvdhqLUZZ58E9DZXzCug2NkRnswFawG5KVLf3fJYM3NCoasD2MGxxampnC",
  "key22": "5w4BZTvh4p21sPTaqgn5Y8ZGQBjgWRkvPmLpz3NcbgixdL5SKMwEn6ASgMkWECg51SbEYghXQaEmo5UyGVmiqjYP",
  "key23": "3nMm47nmxEKaQsNRJHzyQqmkgRrhGyNJNMqYJrb9dqMgXqwdUMnrAQPequ7nchugYTcxhPz2ibdNTt5WYGqDy3RA",
  "key24": "3mrJUNFbdhaRCX8AiToBZETcm1HA4qysJQVQdnSheb3D5dSM4BQc63g7BgQTgNwKJzUWnzNiJkdLJQywRmb8yhyT",
  "key25": "4HkmHJiXtCjr6EVv6vbu6X1qXdjNm9CRZenaeHbaqcQaSrtXa3F9cqZugghJkm7FqpQhTNQy13BCfgbsv4FmLGrx",
  "key26": "4Hr9Y2qD3mf4pZ7XqhfvYjQShJv5QdBTcoDNxYJ8eFA8hyR1TwviYKfef73y7YfJ82Uj28QmfPqqeCwyjLGBcG6J",
  "key27": "4nSX5fcoa19MLNwQUjC3eyGu2FzZzXvo7WLLiZYVe7mtDAUATFtawPzfGaGqxukxxZBm45vJVUw1favYTTAwGoGL",
  "key28": "5j8ww5T8Ngne5tdswstczwX3dMty3vaNZyPj1WpM5ks2Z7mSRSZh8LvycsqToP21a33P4W8t5fYYQDVpbDUdaxkb",
  "key29": "35Jg3Zu7rtBRJDDD9MjVPKa3XN4pCSuhv2GhfV6T21E3WbFMkFoJWFQGeAhJYnQicuVb2Hp4tiun8TzNsY62tjD9",
  "key30": "2JdAhap6Xrn2rbTuvckk9ddWmm4J29WmvnW6z3vMTwP2jpbwW1zEbWyS5ca9FhkjJvBwPDch2ebPTZnZPhLmuTpY",
  "key31": "2nWG1NkLK2xE5yiSBcn8E52Y6LLRnBTNprnaXKpWmjUjNtTeekfAZbJSaRrdL9RJzvKJoGYFAs96gdKSa9rZicjw",
  "key32": "5qtQV21y8otW9HgzQbzu6XZBKMenojSkH7L6K1wVFiKgv2C4iSWdALR42GqLaWEE1a8JauM89yTEhkCL181xYWqU",
  "key33": "5nwZ3T2erUkCookN9Zje6xwvUjkYqWHntago8wYeoU5VNmpvRtN2WmgBN2tNxuswMbEeWEqMhMRnrfckoRn4Uina",
  "key34": "5stn7zUfx4BLnEiBWZyT7qsrQ6XvK4HsWMoijWk742ZSrW8DbWq5N7fkhnQnHr6zQo9adcj18gneUge75CRMCUCo",
  "key35": "4ZsREWsrJd7cduBVSeimr6wh6mY2EusSVsH4t9Xx1vhytg7qFszjWtrNATXHbgYekNPCaivVVGGMfqCQG7ELXSbM",
  "key36": "239wP5DCpKy6SrCmDR7kYuo7K8AW5Ak2k6ALDeznf7eqh1mwv8WnSJy4e95iTVbFdLXe92QBv2rvZcYT1y63omRh",
  "key37": "27de6Wi8Yo8WFo3N3KFsJAcWXtPvnoi12LcWpaF9X9peW7MekEZevTwngYHEPDsFaXXQVv8d1jQtGQ4mjmsSHbtj"
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
