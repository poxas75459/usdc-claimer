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
    "2Tb4BaZMoZXYv6qx7oKuRDfZZw1qDRBqp9YYa4zmpFBd3fPvE2m9kEmMhdAPyBq5RA9wWkM3W4pxdXQTnQ8AisfH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gBNQysYq8WYtvzGZTBdNBEpw7h6gskXbXoJ2ALYumqeb8kXEanLkdwgztjHdD46zuU2zh2wPoKDRHikXZSumg2X",
  "key1": "KQKw1jkcEzC3jDas8zkR2nyk7MRfyzhRBdPz99Z71rbs8jqhcDaUcep36uSX6vbANEDw1xZZP3BrFHj6VBHhkKo",
  "key2": "2oLtmQmJHnADvD8LWyeyHTbz8NvJtfHZiofpqXqszfVz7ks3NHTSbudMMmL9QQJ1T82ztn4ehiDD41aeRo1nMD3Z",
  "key3": "5xpHATMzgj6Mk81x3JKUCi3vb6e1Ya2UpznTcWAiGWMGdDLYYsknQxVPdcbxgVUG79bTDGw8W9LnLsCY8XTKTNz2",
  "key4": "4RZit6xQh7ptFQ1nVcnS1PCsny1igAh7bAJzSBp3cjhDhzYh1guKRLaPMLsdWgFcBXs4AYrmHNZjawBHERK3dp98",
  "key5": "4yhgjHLHduES6uJQUHSqAiRaePaQiU7a9QMUhmcu44SK23nd9XZw27q8Y9SGfUjfL3WmaqUSiLsem6jpxhmzSnA5",
  "key6": "3rgZpCZoziZyV9TdRpF8VXG5B7aum81RbBCjdPKsvsuhEPjjJ5VndmBtT2WEpBE4FX8Pv3oYy2GwGwAhNBHxEmH8",
  "key7": "2XXtFkUq8tVPua65buEccfztXHNdBG3vZEv7npTtu7aUmZTgDJxFamviji3n1Hp5zF9sKP6KcNQ24NEfXiUXNtSo",
  "key8": "38t2V7ifb6ZCYyPbUM9JNcjLjUTKaTNZZXUJX87h475JTePDpq1tPqXPjzvsfuXLQt2Fq7jg26n9K4haYjgZ2rRH",
  "key9": "65msNAuUbVnCywg1gqxBa6peS5ZKTofXCDd7RAa7NjFVpfqzuezUGFqip6a3sAGD3nvFveYFzXn5kD1g4ACp4GHB",
  "key10": "564Q3xMK9xSXozJsoGmbdjwF5pnE5Fd1jVD9xiycUAqQ7xyHD789RhxTeimEL9zN3eSUGJKAcrhXzpL1u1x5sMyz",
  "key11": "3R6g5mJLgdFCTYY1q3XScCBtEefsa2SqCG94diK7xfgHw6fyo4WiQDTRDZvSgTzyxYjmAyGnD3k3qAmgn8RGCfhm",
  "key12": "5YB5SGvK3iN2XcKN8AkWxju8ZxtorHk6KsJG2FBsGVora1a1jpcHhWaaciTfphHNdXBvSHgz7a3QWAoGS3bCiyMn",
  "key13": "3AVb6m7KXC92ff2UY8Wq3kLbJUUtmB7A3vs4tJPYqsqcorxANryJ6Nhk2XvSqW28vW6ZukW23hNTv5YVkaAb5mJc",
  "key14": "5VUh77p6dNxktpfKxfEQ7Vm1diqCi7LqyMq5Gp98M1QccJtDVskSL5K1eKXSZFQ4FDS6Sqmc7CtWLuvey4WeaFS9",
  "key15": "6BTFAJSnKsKHzz1wdPRfBs89M3Cqa4cRATY2y3YWhVAftyNq1jeMibCquWSXAAW96gEtbHMfHjQMx5acGwphLuN",
  "key16": "2T2nvKiJRiGyvHNrhrmTbW6XF2yaLNt9tFMXLBPZNEHLG5EbC8gxMJaA4RAruGjgyNkNprTTAR3877TBEiFYNnXV",
  "key17": "5PjZb7nDsuvoy75ZqAMDKievuDgHA8chVEYwh7d2WQ8b6WSAApYvhujdr13u7FS2TwS7h9KJJC6o7ZhjeogFouc2",
  "key18": "2EKZy9UxTCxuUaGa4ZhWXSBi2xt8CHyhtP989F81YVHeF7FPcWkEajTe4G72Kro3w1CCrvPm6woGa18eLEm1qmVQ",
  "key19": "65q68ASr2Tmz39yYWkn4zUi9v7UuVF3aAuKpUFnBKbjPXqknxjo9yZZBvBevhfPqApzaEKtBU9PDbW1tP2kNQSJp",
  "key20": "UXG1QwEBS34PRvRyu3jVcypzsF5c5jwXe4F9ppQc5irJcqDWCfVop8vLnWHBFwGf8CNKcqBcLPN55Wb6rbRJqjH",
  "key21": "4aThDM8vL2WytDwBqQDy7Z56tcYq7jiUr9AueWTKiJjzqAwRH7YF7b6zRQ8o8KKpk74Qvxhunf5sz9cAaEaFnSa1",
  "key22": "fdb2Ahocx3GuW4AbNh9RHwauNrg1XS4YVgwuL4bLC3mG1n68FBXwEbxnuyTicTF9eQ2XgRy1T23PBvM6kKA8VLD",
  "key23": "mpNmRLZUhUQu3m2csk5ZXQ58V5vd6sMU59uWRA74hn3HCTiXSZnECyzurjBjk7kW8rZ31Rzpb9qUq9gHijoCBqV",
  "key24": "yk23UCAzfs5MYPwvjYJX4UTzQw3E64QpG9ZWxnvaHyqXDX78J3MVfH3ApBDDRBihE7Une3Y3h5uMNUxdER7EhP7",
  "key25": "4eDVvv4kstuSS2de1aePZftFLkFbdywmKZ19JErFfgJ4FhW52gUg9czpipsk1JpBNWEJWdGAvLfAB9pN8oXHNKzE",
  "key26": "3pxuT5KWNbf5HXa3RfmrmaLNXVhVg7osiR2ynx4b8NUfyJdNsZAVdTJidJzfsenDbPGasuQemb8Ypwg1GTD2jWs7",
  "key27": "4vU5cv51xXerJXavEMCtyxG42hoHpRGAFdkoSvxzwfUcx2Kq3WZh4MJoPJQUq6X348a9JQanuBp9Gn2KiznLnNks",
  "key28": "5CYmZgNrKsZGrtxTyue6AReL47pnmztXCbmgbsHz5yrUZnLdtZkwAiEkdeFHYDCwq6aAHjjMmQLd6iDX51dzzoha",
  "key29": "22yyH1SAB1nXuPiVpdbzRhQTx85ezJodXyW7VjiCQLFk8mQvNx4Mqr4Yae9EgeQdjdCmrKYfA3ppcuc76U36KoH9",
  "key30": "5KpCm5oyfCZdVAGY2eRFbopHtSu6nCGnrh4S5gex6fE3KTCCDqMLXm7koFZJE5fAgJdqHG9zVQZGeSaCb5sfwdse",
  "key31": "5Gz7agNFTkQs7KQndyMKSU7Ekv3RqwpnvfF7yzPwvRf6pjsmoEhVJPRCbWd5jERUBC9ah3uF62RaT89WgtFAd6NA",
  "key32": "1pZnKFKJ3F732XNy1KsnevNsvvFpcCggrPCUnrwCF9sziXDVSnkiFqHbv2ugZ5n2xW2vRFwtL6UHwnDduJiNsaT",
  "key33": "3i8CUEfA9nwAwAodvvb2kXXZAjieuqESnd1AhHPMG236MTJjhNjcy7vA5hBrcQh4ffzRmtZPMp2Q5SaZ6rhbxH3j",
  "key34": "g8CfoTe3RDPew6VJBvtLABFBYRYTdsDiMmx257vhbggHHemj3nvEM9CJeSFuSn6fqHB5Kad4epEPti8JcwTRMZJ",
  "key35": "bi3isFNkBKAEqQ4byofu5jBGThkRZ5ydJRAX5hh9dPaDnrcPUy9dkWV44UkWbeQbwFzryuTSCptfLwVa7rN9gmh",
  "key36": "2EUkCPbTyBn7v3BTQT8oT8prSSFbMMcLb9KH3AuuUAqZaZ9FYCbewbx3uQp7e91KtJ1B3ZAvwYJJX7vv2GS97HSn",
  "key37": "49RcrQuYFM8vdu25Lw51H6UcTXW47oBSjjRffVW1fRaNRkaKRCjqt2JrYs9RV4P1DXe42zX8oBgNKoZ26Ld9i3JP",
  "key38": "2e1hJqtpK8rRi3T8fTMqJwig9zWQbgBiTXnjTYKFvmq8zs8JriVsALD4EpctJSN3kpmmeRRhYfPbSPxis3actnPP",
  "key39": "5q5rpTNtuvn8NrxNbmQypgArdQN4fiCouBKV3EJ96USo5Rkf2bgMthDxL7kCssEsur6Yt9UptYCkLQCGAekXMQ46",
  "key40": "3wfu2W5jRbdyqiNjwZDpWb1rquLnC7GHVyABNMjvC1h4ojpRQJ952fGZrVPLPTL4atdhj4hyKGHvX8T5nS8xVNta",
  "key41": "oEefBGKCyE8hHdzKcKfKS8RWCe2ttbv2WEA98NWdrYZeMZGiGpnzWHndyLxcamyRGAgghLk1w7LPmJcXCikasyD",
  "key42": "5xEScz1G9UrEir5BvPosyzbBwNzwzpkUe1kJx9gyCEZznkLNiexvunYa2cHuoiDgKjfXoGMdZtnMdnZWTEdQjyyg",
  "key43": "2jGVF38zo2HJ6dDJEtQThUr9jszgcBrm9kvMgLw7tuPLAMi85ZbZkFF43y5yS4qN4J651STX5JFUnVZpJ6ci5HHK"
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
