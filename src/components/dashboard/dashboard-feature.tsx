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
    "4wHKGhRuYVan7pxdiJsx8s69QXeen71yErzNGEz4q9sy6W3LdQJs5KiiA8BsR1pEx7HrT7tsohoqZfvVpxKDNZ8b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pfjM1st9tU1CNyCjLAZL3rBFAUgS8BA6gFngpn889svvErEoCKCMvk9SG6quBCbnPBwL5GbsMVCKd17CwPm1yjA",
  "key1": "26Xg4QE3E1auuvx4YkL38AduPz7ew83a2o9ytZJfcmK8dBh64rNkLuaXce6iXMgzLrSf5fgkJcuftNes6SPKG8gK",
  "key2": "4MaP68xjk7vjSdXAqd97dLBMDKUanyb9DfxBL4cmuUWhSPEmZkn9VE1WWFGdt2E3SRTqc4AG1kuqVtF2JShoD8Gj",
  "key3": "521oWCfvzDEsr9SLybZEfFqh7FNNthoEQDKQVMPRknPSojVWdu8KyYuemeRpzz8r6fRtvuAShgxGaWR5KLtvnByz",
  "key4": "2GbTeYRCsHUkudaG1WmPbmH5zoHw6PMVsi5MJ1oGqLaMjPSojufZnas6efEE2PvE5LtmtMgEMn148fxQC59GvU44",
  "key5": "5F2BRKAK57Pkxrm9DpBBjVScqpDa9bb1FK1tLy1LMyC5dh1DiHuRD2mfqtfrzHiB3BJNmrcP4yj4AGiN2FZkuoW8",
  "key6": "5zLoc5b89Wq5p1Vuo3ho6gt8ReDWnW4NLKJ4niHLmMkhwDo3Z866rkUPLk7R6xjZAfuCqYjvqQmxyDVjxUs66QFd",
  "key7": "YSBfEuJ88WGbQT282mSMmVVo7FYGPMFUjgYmiQatSYTNW1yjbj5eJpa8dWkyNnZTTNqphk9PJ1cGwEi7h9qtjwR",
  "key8": "3Td8iUirzSsKqB71R2CeXP4RDyNxQiNDB72m1KqiuX4ygsS1LdNcGqhjCNdZpVeM4x8719kQcugUFi24dEyWFqrz",
  "key9": "51m9DbvWNFAvho6azFbwLgD4UnY8xTontWXGhNaSWPk23vL8A6zvvtqkXZvXoJ3kgiUnnwjS7jQT5idFMedVTYWd",
  "key10": "5eEKfNfDZewnKaawSAm2iB12hV5pegsjPSvDJk1WNAGEDZmPVAbyvxVDcwzsqRr2VohBhaQJ68viboBxF4oSXGDN",
  "key11": "2BFfT1ppD2xNCHaHhJA6hNWkMKhoxwwxEbzRtka6C1ZNJyBoJZpVqzGDbeoXL5X8Q13DuuHzp9Y7kbHkC17XKPVB",
  "key12": "MAZqJ5GHBPANTkF27JsRucDmoXNszRWG8B2RbBPrdKwZvUZWCBRCTy3XFdQ6MAbykK7itt4Wt8XRDDADZer6d22",
  "key13": "5Uk2it9h2Ky8kTmPLSCBuGTqS47qE4V8gEapAvQTP6dn5Jcm4P8SmbkNAMjScRR7qXonUxQLHocjoBbk2yH9b9fq",
  "key14": "2wZHR6e6oMws2kG2DtNcK5UWbrdJRFQzKTTBE9n7EfaJEGiSS3b5AdvRTUzbxeMCx3j8ZfXoxuD6VWcxqgo2hJDn",
  "key15": "3QNwKWgHCu54mn8nk3PmmcvEUhUgjDerA7xQzvkeARKFC3PLzkUXYuDcgV1uA9vBDm31gvyaLWajEXWqDYYN7Djm",
  "key16": "5uWrXKRHEhe5yDqoPxLkxoFzX3o7EX5s9hSdTCbs8BmY4EDgGDqQPqVH9vU1k6BXvLx8BumRYVVp2fpytVc4tdx7",
  "key17": "84B444PG6bYpNRrVdQ53bzmVz8c2br5Cce4YNctHHXyswiJz3FBwm5VmL9zP54df9Ter725aMihsUSxcqFvQhCf",
  "key18": "2EmCdCUftKagXa3SGk9y5ozGq9X4S148i85dFb13uP8LK3QNUoJR1uUNcrgds6SsknVAGkNFLm84Acncj5RKsZTy",
  "key19": "66mACkRM6YcMGTddFzNuJudGUMfT9HEz2j8bERs1E6M1zB84w6sAbtdGMGmGqL4zy789cr6AefAXsnJ3QEJzh331",
  "key20": "4z5qGSvYzpSqAmFwWSDL5Fo9t4iqdvCvwZeZgiKvFUZTtMoedZMrqzyzeaZQE1yMLF89UfjYtuMGGRdM6J4iXzfT",
  "key21": "27jXZUxzfJCq41qHVehuagF6xqvxegNx9JW1Xe1eEBYjpvEUG8my6WfpbPAhSBELkkLNyJkdKcuXNSKsdKqhs1FZ",
  "key22": "3zNz3G3u43iiwivpi84znz7tNct4MpW7n2tByhMDqXBsHLQt6pTjLN5nhp5thj6CVLQbxJ6JYrCz9hAez57MB4Vt",
  "key23": "47o1TrCswvCdBjkho5qVXfxZD6xDCSJ62L5KukCN9v81ZZR1Y6B9sBKHhrFYJrhiEucHoAAYggxRnd9YMye2maDZ",
  "key24": "4VP78CR64MdfhTT4seosG3xw3ubJwXNsVAy7t6qkHp1sdRfhmHQKz1ydhzpEvRwv7BunUUieS9Ap7rveCiGaqCM3",
  "key25": "5wYXCHfP4ckr3mK1SbPDhZustSpT1xQtpCmhNNvWCw3h6RVVEzCQwcoKuZdrpvpLtrGk6BwETrG5cKozSHwNgcZg",
  "key26": "34m9aZJ5bWXXL2ADnjLqLTHF4dLv9iNHL9VebxsHH7JVLAeTBEUABeMhz8hTcQbvjAnQ7Ne8mdQPV6dL7wSQ7C5C",
  "key27": "5SykYHnsq9Q7QULpuA6C6BSYqCENdCh4JebNvwHdrDwLuJMHoCfREfR7qVoti5RPviL4PmurE6y7kMmiyPCH7Fdi",
  "key28": "S7mkiXut3JEko9ZjnYhzLeybdYcFF42vu21mgfA9kvEadgZWhrJVjvWuC9r9M6eq4ss821rnuQEq2JzhNtk5g2t",
  "key29": "4QW2v5gLYFKYn1vuWMpVjEB49GiBo5nFHGAmBPBe5GYvySREdCqMJY2z7FtFdcb933hRYDhTg48ynEmaF1uN8u95",
  "key30": "3rGRKJriCS2kqQsUpHG47LFC7VLokbP8YrQpPUnZfuDYsqJbKZ9oqGWoQRpvZDTQeE2XtA4uF3iEdQzdThsgNCtR",
  "key31": "48UWjEGGoyAkSYWMJagPjDTMkwDxRzo9CiEKiqxoJuA8fTuJvrRk8CBZZFWjhi3wtgfsUWpQNo5x4kLGsPpcBzx3",
  "key32": "3TCQpGWUSTkdk8x5BwUZqJH7wrEf3vYZfk3p6egPtKnMwh6ZpVErv6dnMTaL56srDmzKHzn1EK2gFn75qkZnQNnP",
  "key33": "2487ekfeytPnM7QFui5WFzCmek9CVemMJW49YRtMV8MSP2aYeSCKqxntm3ac5fwyie8CfcuHgK9JQK9Tu9z5kPvT",
  "key34": "4sRBL1qqwKKQtbyNiSqU2sQfvZXRNDCtD7y7GUroV59VT3cLteYx6UquS8Q2GvV86zRoW37PhAWEUUxxpzTPjefx",
  "key35": "4XsdFJ8pxLaprhH2DhESvpZgZUEeTvQW6cHdCk98HMmDdNhpMcxtvrhrY5Rw9JrDbGGKwG8tKs2mXrTaGswyvD8x",
  "key36": "5aQs6LTshj1yAgdcbfpj5SFTJ1pR3wDJd3hwe244mSxjsWS9EMaEgqubATbruZ6q2wBEMQV4Mk1kEuqv5CeSNTgF",
  "key37": "DDjQ8vqCnBmGrt8xKavx9QTWbvXPS3hRvMCeZaxshCwZJY35tDhMdqb465BwQYeR2iuC7w5Rb8r9iKWMhhqcNJ7",
  "key38": "2WCP4fuDxQsJD9menRDGyCu8FbgkWrjnAEkwxiagLK3jTk3R7i89bV1Z36qRRyqzAGoKJFM26VcBWLwgwo3XZyxV",
  "key39": "5Gfs4jCZ5GpWHQ2j6iU5k9SproVgeF5tQwnDfhEGUQzUqG7dd5fNA5KsMrj9L45E2tRmdvXskbFGgPk8fD9JiJYt",
  "key40": "5NH46JKnTmNHw4234WtJp7MaQhfshrpUH9PaZ15gtqAGMu66CBBKrAxpBoqxTmA8XZJewpaDBt46pE82vPqGd1Vc",
  "key41": "2JMbUFjYECks3SLfJkX3Ta2kfBrWsRygRh9CgDuYCd68ge1sGUpNyCYxLT3z1KnzbaX8FvSgTCHrJC5aLzoy6ehv",
  "key42": "484P7GLVGtbegnVMnksLr1fCr2sW48EdzHpa4vynBdLNwCz6YJkBquErN8hnGiqXmM7bUyiBGuznxhcKa4XuXPrd",
  "key43": "5UVLvshFZ1eEYmkyQSHE3jiyZn9xHy4XeythPUYUaHPP7MxL6EZ3gNJMGXQnCSuw6ayY3qj1namNUGM8Q6LzEqpM",
  "key44": "xmoMtMs5iyNBh8LiYNKDkmPU6oy31w5pk4mJV7hHr8MbUL2BGNDdG7EuydYVoBc4nhHqsAaQ7LY83St2D8jm3GH",
  "key45": "5A6o9tLrj7VZFvCHPxyuhwSLHmh12jmArAofkUqwSSWurtdgzd7x4iJ744V5Kt8n2Mjdb7PcRuQm1y6WcN7CwzGt",
  "key46": "3sELwSM36M6bKP6qYMrk3jyHSEWmbcbBzboWX15mKUDkwC93Tb3xpFtupmxYhRSxtLr7B2ZAxuft2SAVVFkDNnJu",
  "key47": "3E2Fz9t3xSBMg19oN9B6rd1FT7gkBnLXdy7hYhLeP9pyUTHQoJuJTG6HzEmVRQGJ6wXTXuK1SLBqKpr9tZyem6dV",
  "key48": "3wnxxTMEhBN2kYnjPhKXEevEViwXCjZZemdab1LWe1bn1but6Lew2FJ1dUPxYny9FLMSQsuKNFo2469vkpTW6YFG",
  "key49": "5dQLaobQotdD7KoB2or5tKWPEBFkLepSGdRRX6GXE6YG8WR5VdsCi3GBLbKBA4JhYH6MwyYGyieazN9iMcy6rao5"
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
