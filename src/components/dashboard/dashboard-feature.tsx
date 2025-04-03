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
    "4oor51u8qmPEf31y6r24Twoc8MC4VAxWC6Z7kSUYvDaSZFmFd3bBTsTpwVSyjjw7fhvbg3wMM7BJ691VfJWDkmMR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uceAKDEm15JEJpUfYsmJ8o2ECtyooAFEzGuVuQ146M1bqDpbJq3vHBaDr4zcdaduQBGkQkoaPfqwpdDJzsqFcow",
  "key1": "419pgMqptpMRn3Ve3JZuQWeFx95XfrMkyvfhJF5bpBXhx3BjHo6YgwZnzBk28qe4ipoiZy5iYKmbKrnGf6zNrPwb",
  "key2": "5eBMxv9UoEkXCtJuVchT1iusgtvJEq3T3S7dDDZLQhcLTBVWeyr9MALjhqbVhDTW6JwNVxPaFm8girKjA1mToStC",
  "key3": "4hTfKoVje5DNyy9MTbpb5VFZMSe4R73EDeNsXaqiSPA6GNWSWSntmpdSMZc9yTZjrKgu3hmz1oSMDQhDpUJBjEAU",
  "key4": "2LVtCAkTism7PscQwvmJUfPNqbiq32jgEEq1wQtpLtWgTtu37xw479KMbNSHEu5YbgxcedH2YKSkJrgtbjKEjgUE",
  "key5": "eDX9f8KdE4VDb1Dk5ypE56Q357ufB9x8WLhiodxD1bu5Am8oa2LTaAHcTXiQkivuRJGr2XXUTfHBKkp9bXNFFw3",
  "key6": "47Up7Rf1X8dPTeiV85ihMgNVsPrEnzVKR5N2yGfEhbV2VCX3Mi1x2tSJ1537cyYj3porLNpxLmY9Ba954ymD7Vu1",
  "key7": "DAL5RTNEenxtG64amw2wFMziaHaih2BjxJizQbxQuvwWjbSjC75PDsMSnkuUs4pTykqgkMSwgZDgbvURg9CgaYg",
  "key8": "66M37PkBrKVr6YCK8tHNgXLyp5TseMHMLfcnmDfq43EAT5GhmeeKMY5MtdDhgxx8WWsoDwvqfQbYAjehXJi8KnLY",
  "key9": "2QNcd5xRvAz4nDX9E8tvcKQn2w4Uk62hMFRmworjx3P44rHSCRKCHHzXewZUxJJ3mquJWqd3qq3nNLzcrcvZDqY2",
  "key10": "3QakQoeGKzXPv2v1dgQZJV6kivuDH9oo3JXcxcJGYYkcJPvS9hZtKgSNTpb6k2vbio6BGmu3r2gcKnEwDzkKyW68",
  "key11": "2HZY9Njcn7vhFeVM12TpTJwdY4djQbRzzvJnU5zL6AiLuERpKnTbnE4apEApoYow3KfznQ4UbBZhAT45QZ4cpRYJ",
  "key12": "5UnMbe9wWWidCT3rJbLExaKB1VBbSTUidcoYyptp2ozeRXHs681tY4tHrPKCxetT1nFJKFzHraGTK3xrfNwhcJcF",
  "key13": "4uh3NaJqVksHwG18mEL4ved7eSL12T6qnZcpUKUaWW9fEDi9s8Y8h65ztV6y6qxU41vaxJycyY68Q8Kv2Wmhqn9i",
  "key14": "2kePw9f9oB2XJxpAd7r16uGcdKy4s9cf5Rk3yjoBD24QKM3djW1434xPn5SVxCL3CdFgHg7mYoya7Kd2hmCnoUQU",
  "key15": "5nVA5JGd4hqwCGqGDntz8AK4YzRvuQuuLbf7gp4G5RXwoacgVkJuoDELCtArxvzGH66bX2yFFAUSLSowHUj8LuwH",
  "key16": "5Fsvg3kFVdmsBTdm3zCrrT4MwtcTxd3ohSYWEdpQLebS4sXpxYfbkrXB2U5CZCCmnufxjaL5moGRqUu84nRgDcwt",
  "key17": "5XRnqNdxZK5E3ZUTUnAwUbP4k12ZGKmQQUhktTm1NBpaeB4T3VGXdmRmfeheqcBhgvipsdaWgTohHqrdJWhgub54",
  "key18": "5gR8wJykxMeteWJjZbQfrfqGnHMsY5iHJdPWTkXjxEZsyS2tWNks1FNzd6fiv7pJ9vdgR1eKn4v282aZaGWhJyA9",
  "key19": "4ZYYmARPUxdNW58aUZds2RYnK4yZnnNm7P1xCTUe2Ky1UYf2aeaMmzcYZ9ZPJXopQxa7U4Bvqv8ucRKgZX8u7ZJ6",
  "key20": "4zfPdgs2SuzUA3sTvYvRXhR3htsGf9oUTPMKueqhhNLesDXuSY7ZdatmJ4N9gmRFWEFLHM4DRLqHtcCEoijrm8c3",
  "key21": "cDqMirH4nNiUHjKarAgi6FDuWCuL5P643mFjUHDsGJuenYVEqyZ8yrz8zecVL3CXNJciRSoxJVgQANWeVbGpxz6",
  "key22": "26fpTWEwySY91GcxLZPnq7ek4BZhJ58p8e6uXyk5MnLUvX97n52p4yr2pn3eKB3dEV9H7jQ2FKtzkdZhFDbvp7ag",
  "key23": "EPchMNePLP8RXysCvzgNoPJzhSokNxnbUwxVV6dTLswzPJPd5HGWijGjA5q51DRQesQTceyJmPitcn9tk7E42PG",
  "key24": "2gs5B8hxrZbGgAcmCV5tBpfkrtibuSAPVN9dhYpaegTv6aLrMj94qWVYK6B6CVh1Ur5AvzKWroNRPQJbWmeAjXmh",
  "key25": "2yDhWod6ftegLmGkTLtEai9K39DMJYh6vNhYF2ZgwCfYiANUQ4DySWogQDm5fHeZgfHCzjGwuo4zsqgbVMbrg4Rb",
  "key26": "5816grbyMVe9Vf7Q4oVLgMwUhBb7Tnsg5ntMAK59LHfp9pFgK9fPb5bhvw2FfcEjpVXw51bVNNMmB1eGmszuQNX9",
  "key27": "2D4X4j6GwJpLUjaJLKq7y38ZZHAjMwtm9XtUeWohiwgwPviTEeezf4AC2hACXVTZrhTNJ4WkMDZVYhKV3qBZ65Kr",
  "key28": "7vb4NCRnFd7QBRaKSfyU7gNyLLkh7AFNf2H2ZtWRJ1sL2n6EKCJW8GBe3R8Kcx3eyQGDjqb7wAWKRwZKNBqjAtk",
  "key29": "5eFyMSNY2AYAT3EzcrTvgvwzwNtrooABAhNjK4FNuHE3KW56H1Md8GMNEEDRjb19UuxjrHWp22YS7jvo7eW1aXtM",
  "key30": "3iEmpYAvkGuHXmi8eY78oQw44d7P4FiJfRwBb58n3hHaBFQZEYh92Zr3YL7DJCF7wBBpbkRJDdj2mmCx3JV2N8it",
  "key31": "5nzxTrFFxkZSwxa3NxfCiG56VNs4UXademTtRZFCNjJkJXnZR56Q4nkPx7Lc2cfXs8e6uyorrz3YTh4KBPZCoPhm",
  "key32": "5zegvhLU14vNVck7XhTCrxAnCbeK9h97Aq6QXkRshZZxgkfBXsNfE1Q8k2D72KdxCbeCxuYr5J1cArQiGtBHSmtX",
  "key33": "49QzWMvEQdz56ewZG3PB8uMvHwb4gKM12fewCoF9psHgAgCfBoCJaoG2omjruzXCtNW8WimmpKZwfGL78sFfpn5r",
  "key34": "4ZVxdQGfDoRkvMj1MX1HFAHdH96ZVYFq1Tgd49Ui7qtZkTsqTYUhC5QCPCFzsv2ckE3kzFaDioi3sLNUPbvacGmG",
  "key35": "5ZKLTpaVTpBFBwPrdPrKXxhJnW9XJ8sRfY6fZKpoBwc72PaHJWSD9HqMV33LEZ8yiPSNqYTraXyRVcmfWS8ydyk",
  "key36": "gFPjMNRWBzdoGiBA1ZUhGN3TiQcyJdJAG1jwHAXHqfWwSj8zdma3C4E5hYwWz5QMzmDPTgv1Ecr3H6AkhRFaKVy",
  "key37": "2cAPrFsfQQciYvBpASn5BHVh52AfnYyw3J5sZLXehTPXgevNQM7gq4cTnpiPA8iqPUTHcxhREZL3hrMWYZPfnnUz",
  "key38": "6rrnDtFithvvEMga1yTVrfpfd6pdo8tg9CaySHA5hShvyFgp1uVtPn7Rnf3Yd7As99eTrVVxMgfqXocgNYzs8xk",
  "key39": "nTA2ZJvmRLmmMhWeWzGMkpm1v4wwVoeYeQD9hcx8y4Tb2twi757BSdJWitu9Lz4KBXdR1hhinAb6fJKBLpCmrSX",
  "key40": "VNmywMiP5iDwhCJHt1KFnSRjsHA4XYjGktEqtoH4N6CmUKLGxJWdGFNjXRRL1ZaszBSEKNVhfqrLHRwSLYoQtRR",
  "key41": "3vC8i9VBsbAfNHk1cWei6XHLGTfx7yf7xNjGTbT7dN9JS9AdcCQHYdw8F1bpRJUiKnFZKe3aLUkLnFhpGKANwFuf"
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
