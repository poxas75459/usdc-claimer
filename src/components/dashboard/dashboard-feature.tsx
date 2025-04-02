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
    "5rKZhiV6pPv85S639zCuWNu5GveXmqEBfuUBhyGwtjWTYGRJjwvt9XSrdDNM7cv44WgMEZ3qq6XdEaBvstKHqxd7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27GmxKZxGV5PfRC9ehKpGbtPH2eo3rfQRCa1BBvrUsLkvBBMrHD6pTTewsn1f5wnyNRLWpBt1femR6UQSefZgnLm",
  "key1": "fSV5FSLNB87CMEq95FgrAzHixCozV2GadFPPsaryMBJRyByb1hH4DyBGSXn5Ej242MFxxXZiKUTavHCwTKvTHkr",
  "key2": "4BfPHTo156DAxomMk6YwoYphMqRWv5vYgqvdJiakrg8h3iFxNzX43B87PJYd35wy49awTeGC87u4k4r2Jca5CWab",
  "key3": "4mqrK9mXHrpkQhVPkHNmbcCN6mbeEohB98PRGRPYVtahpnneGYCpi1VEp97dt1Lk7j8BXQGysCRFCYriYNx5Nhpn",
  "key4": "XFeMy7yTPML21nEQP8WzV674R7Dexc7UJ27qo5oEas4uhi3CtJMVHH49wt1qLf2Q5VXBVaw8zE7gb2end7ubsfu",
  "key5": "3pxDnvg3xsic3zotxRwoWKHQ3acnh9WZSRsKFH1RvxJean4EdQonw4mujBUTEzWJohtwMKypyDEUQ4K42uyqGDmQ",
  "key6": "4YZtauW4X93W1GYhNjZcq4pdN3zokRKgye5PAjHXkeXTGuXn5m1AdJU3wzSR1QKSJzRb1rT8GmodCPht2fNc7ba6",
  "key7": "4FhMgC1RfibmE7XTXyc7aXPtpx5ws3xg3Yxpo1Ccfm2MZuMHFGR77tMLznFnvqGdRXBR43s4j786wzDBYmfccBpj",
  "key8": "29o9ZnPzWq67AQmjpSPjJZJCegxj4ZkahKDCRGgC7duWr8SsaW44CC11WamVMaeFhGwyRYCiWQbjEby3rEttfQPW",
  "key9": "j6qdSa5i34ssXUcFsw4SxMKg3yMdzvvbUVnaZTEaCbHxg8D4ncVfg1MW7LgZqjgpqtSodgdVKMt53YHA8D5Sdsy",
  "key10": "5MAHSaCjd4rpGr16KHYEMyHyzQe126wFJYtkYeWVUos1UK3cQ9FeNrtoccnH4f6ppnxhxuGAgtWKehDJqrrYKJu2",
  "key11": "5igRLbHKw843KCJyHK4iLN363BLsn8EJ8fG9rQZLd999bpKeNFz66RySpgNGjQuaANBL8mV7NXDj6eiq582gu8Q9",
  "key12": "4ni8KddpUmEyqkRnZjMNrs6wyU6k77i2FZ1rLBan2HsqR4ey6HonFPLsWT16LdzHDqkNzTJBHCcYUBu3XKSR3Mu9",
  "key13": "3C7UoZNiUtLAjKfvZCyNZy3MCCZKKkkJKHnwGfq9CCxfQYxAi4uWXjc9CeaH9Rpiye1QHcHruduvz7ww3k4q2ndg",
  "key14": "2JeUcSDzezUsMxXTW2aHoyP5GjeKZDaDF8CVm2Yw24FTy8ciXcT25JBc1PauXins6EWHv39zmUMU2Z9jCtPCmF6c",
  "key15": "41STg8PEwPvDhu44Kqw3o6ftYbKZE36sj7qtydfPkkDRm1vHu1ZVY6RYj4ou7nkPq9tVDr7wdp28GCihZQeG5K7Z",
  "key16": "4aEgDruru47UzzSE7ie1xXd1aumiSymrL4hANN1XeBEKgsGvFPbYx8VuA5aNaU1pCPbpaDX5tAELVUuenrJMtxKv",
  "key17": "2wBHyV7EZ7reGfUNfBKGaN9rFwrEimddpdRouJdCJMVSao7cV4jhcdFPTG2UBzhpoayXBFWTh9njw91chw2ieDHP",
  "key18": "5VFAPdZh8SLu8bpN68fxn8MkuH3hyJsRVFUg7QFNihkU91rmQzEQkHwNxM8T9DJWwucdPoiWNZxRKo5mAxjPdzab",
  "key19": "54oSPkoe6wgV16eLnJJQxyoTFgEWkcw9Q1PKC6M6CGcNeQcxT2icWSfQxnjC4n7WTYunJuMSjCBTLiUY256muFVq",
  "key20": "3NwbKGWF24bpSm6js1GNDJ7cyEUgmkjC3eL7KtNqNxq48cwHQDb6bbnkYHYeNp5YsmUM1Lhh6PjBBMeZduxthK8C",
  "key21": "2UK59ZuntzFgPt4w7v3dUM52cFRPDQgaswG15NTgCwwmtNeX8YHdMCzbNMEHJgifB9xvb1CsERbgNMr1krdWieCi",
  "key22": "5MKUU4QwS6xgYxLejFpR42QTcxJPjgmY5u3QNaxEF5Wf7iD5tWVL6T3JRiAiapG7n698NdEhfKtdcsFp968xtDbs",
  "key23": "5UGEk2TabXTxhNvSaR3nSRkpPEsavc7gQAxf7uxeZB581NGZ6puWBCaW6ETnvbm9LeRnZrR7pyFws4WUA3eogTfp",
  "key24": "3S4jRjw5EppZ7Z2PKZiBJ1aA94zwvcxJVYSuLSvnUuFW9MrXYzekt6SnaSWsh4rd3ApL4q5s88GTNXQ9P1MWq73x",
  "key25": "4paqyHvf6pfLT3mTwCfPML6sRXL6BN13NGnsPzeneNGbSY3iXsGenqGDu9k2Da847KBsiJa4Y1KKqSytWyAip9xu",
  "key26": "4yEMNyc9vfXWxC57TME8iHcWB37d2zF3MkTN3G6iz5cNzB8yMHEd3fYuWE7McUtHxMuf5pCpwEL3qT84sJnwczqy",
  "key27": "5AYPAGuqgEjzPGNLFZBt9SPBaw6ZpWoPbetMeT5AW7zLpM4S6Sj69GCDW5PEfBMAnvyySy3fuCAhzuAzaVpyT4Yc",
  "key28": "5FbvPXRm4Dui8QERuCqac3hutN9LDZvaEaB54HtjF638fYMCz6Kvb6ScQgHckkKGA4A7pgFoRnYK75FtdFzpH25u",
  "key29": "5KjHdSmdtApKSeTG86R4KLm29FaSAXokrws58DT54Gd2pC4k2cgPKtJ23fm9ysDGU2kfc5rkmWK3x59H4LHc5EC4",
  "key30": "2xzdcvvbH3nLgr35BeNuFwvEyS9MvD88xkEb549sUdEqqBtbrdxd5nsF69xA8RUWDb3wfB7P4uqU7GNqHHp8i1nu",
  "key31": "58d4vZEMzvvxdVtFknxxmyrKgZKSt47tXij4Em4UbWzNMvXmtFhsUNCi9trmaDMk6j4jXiUjq7eRCK3akUG7jTLf",
  "key32": "4FCuM8pZ6y5927LAJSdLFWGAwWTAswC7JZCiU7ALraAW8GBCYB1PhiWx3Dcnb2GKtgipG7YW1zwBbwHbnT2fuwVP",
  "key33": "4RWgVdH2ihfweEJoWnUMAy865czdENLhAFsJ7qB4HwrsWzSW6YX9pNLG4H4rgLjYfeeZLgG8P56WYFw4SBz9xwhp",
  "key34": "53u2C35Dxjaqwm4trDphoCGqVh1eCYUmEAeU3WvGZamDemNcujWYQnLpcfNAbyrqbeufJQLHxgjKbFhts2cMcbA2",
  "key35": "S27UDB9HVKdEBmM1DYq4CYeUXp2ygrZdNHfodShFPfEqK4tpvYw4my8Pvv86stUESKQyAEmDn4dNsTc3BLAE5JA",
  "key36": "5ENue2cHTfP2YbfD6E4sBFe31PCN7Kfv6MuqJoRTUj7VFMkX2HzUeNumKakEkhUn7NtWmdJCFhsuN67KprVg82vi",
  "key37": "5yCtpRZSzuKTGNE5SZi6xrwuwEjHCtrj8mwiQP3pRcDs8Qoqfyihcj8hJ5ApdBFSLEwK79DijVVYEen1n6KuuyNQ",
  "key38": "2uzJHpHqhN8FQS6S8Sw2HaghTyvZdV5crb1YAqVd8Lp19B91SacYSNqJgDPrwsQpaF7MY2p78EYNvkQFR7qUqbWi",
  "key39": "5zznxQeM7XV3aUfd2UHEfUXhvBjSuJxT8Fhs6TTABmDYHEJV88GWJdb7uZCRRGa2kcfSiRtNwCZCLyFShnfcZTW",
  "key40": "2PGVC5rzsh6NtaDsEErpnhmBvLXW5tgzKzmUmZdt9m98wtqRCNurgu7ncFvb48qostLF2ZmnRRMd6VmWkj6PRRGq",
  "key41": "3PmNaCW5T9WygDrDxHNbiiBJ6uB4vq2hZdp9HLwDhv8NNUKYmgga8mGaZgbrauuWioPcmXTmoazguU8qEgvHHYxk",
  "key42": "4QnhKLW23KrQbVR35GsEJ9dLECC4NAsfvdJyJqASVa6TtfSvdTo5YXpVKzuwpx6JnUS6nU98ej1Co6PAz892AtL4"
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
