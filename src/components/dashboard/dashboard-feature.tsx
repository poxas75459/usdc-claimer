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
    "z5MTvpPD6ucgBQZRuVJc2ZxHcYG9xb846Gd9JiH3yvXS3ow1NzZ1oJZM6UhFzLm5jzvh1cZKSzqp94x1Dxqv3nf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44jcn47FfmeCgzeZ5e8FP98uKCoh9g4KcNNG6LMFptGsbPh8kkEKorCd9X6Xr6XjUo4ZGhbiRcmeyvuYqrgECphx",
  "key1": "4xL2NAJoFtJyRqvRiwW28Sn1BfPgAJnmo9QoSU6n7Lh9iijvSJKqM74SC5TwYzVGKbNC6As6hn1cULsHF6LyWw9u",
  "key2": "5WR33NRqWvYTvsLg6n6hRqHQvQrZer2StTEhK7PyPNyUqfwSEWQnLJ4kAQaQSuhkN9x5nDC5YgcWsXVjgGgiA2ZH",
  "key3": "4g1kK9t6gaYAbn74jdzSiZsMdoxcEBvMHcuh2PRXsPn34YiWNYSfhSjxu4tvXrkKGuaH1fJCmPFF77ZweJofawR3",
  "key4": "42mGksdabEyw7guTB6iGbYGNJUW19fD3J8TLtjvFrRARvyLczGt3fNsb7ebgtbzyrpY8hyPK6k85aehH4XinFoM1",
  "key5": "3CRbW1TqA46z9Ze5yCTttQ4pzbKLj1q4PLdogYF7UR45KtNSNR7a38jf7rReEQXee3k151UgqsEC4iuHJL9AnZLz",
  "key6": "5oNy5nt9sCpozomXtnUjyPWQAan7hCRcqyNYEWJjXsL5ZuRdF3Dme56f6fG9qwc5ejeSRsrQeKjxtB8req9gMUHU",
  "key7": "4cvZJhcpyy1eEHkAvQwgM41L7XCfZL7DtwHFbXHgiyooKMuoXM8AQ6H9RQCX2wsm4xtUgmjg7fzutb1ydHFLikuY",
  "key8": "3SM7kC8TdTDhEakgkSvaanAW9ay4XqKfpjdL1jXWZhdpBALrXFuMaRg8khWh7fLnuR4Ns1twY9kYrVhmmQ4AgQ7y",
  "key9": "2MqX4gnW7vkVEedbLvgchQE7X56U2tKvBrL2jSFzSsLXE7CWoeotc7C1LN65xFAR6XDzL5TKM93Q1t9dB4qo8Htk",
  "key10": "3ot6FPFhuC59xtKNjDDqCo3di7wjLcCAn9Gqu3peFTgbFtSMeuZKHi5aKKk97LYSQtH5UXbXWDT8FtdiPex3qYQK",
  "key11": "2grF5S672gBmPttvVBHL4Dh5oBZ8dii3nnVE8qN2RNEQH2FTi72pfhnKBu3SfDUC82ueKtEHMmx3Zgx7Y2pSRPoE",
  "key12": "cTxd3tYp4eQsWZZbyfEcKVkwv9A3REmY9T6eZKERVYeaLSAHCm7n1fG6xmnXZDJLc8dYANVufnmCPJckp4mpBCy",
  "key13": "24Mhm9bxCxgEpA1sBvwfv7mmPWrVMZ1NYPTT8nwAoTwoTvW2XtY6PxRqwJ7Lq89t9C4ANL6MK4wnTH9x7dXppTzc",
  "key14": "2xqtaakANubJY9QPPqqcxCA86ziYAvYacKVfgZkptdsZhTQKMfZx8aML4Sm6gyEzBsqN2koHdFrLcGkwzAbZhnXu",
  "key15": "44JpaydMBLtwWvKYYjtjuJHAHpUyfmnLSyKnHSiJNgTtfepPExbfUT7TaDXa6SJBgjqnPzSbap8FkjJod5eFzaGJ",
  "key16": "TJRuURu1pGnJ5Vvepvgj8Rm5KK1kEKGycT3pefDt1F4edPEMAMW4h5uEoyPtJmhD7rTwoTLmR7BhaR3gpTKtcws",
  "key17": "2ztd9M97VSnFWcFZXasjPJJvbHKWiAfZLnxVvdxQMwwteAycttqXQMemGqLRVi5S7e8T5zjpSKDoBfKtNEGi7Cfp",
  "key18": "5J3XYJLgavN5wF6CySMXXoQyvBomUpyxhh6x6X9DnsNhaga9ZoeMEeA2rsxKm5iu4x7zXiJBSDs9Ej2Q8uVpCNTJ",
  "key19": "Ywe7vnF8FiysEanr6kCEh3gq5TqXA9umJP7bfrZvaZNih1znzcYsR6NAnri6fAvrBCJ51yD91gtWnWQNB3S1qQ1",
  "key20": "27ZVdrWgLH1RmSxxNhGEtCuC1iyPnWxSr7NdQmpx3y6bmt4BwfSmJhfMxsSzZdbC4F1QrGBLMWdStjhFGn4xcnXv",
  "key21": "n5zfk245H5uVcrPAw12unYQzR7mzysDgwbHEX1XNjv4oJFKHYV863Efd54NMjuvU9gQDfAEu9oaFmRzLXuCWnEJ",
  "key22": "3oe7RTGiuHXonPcAxqWWodk6wn3E8xQUpxu1YYcUGTYX5pPADRSZnC9V9uTPwcmpebEnoxogGHvSBraoE3xAv59Y",
  "key23": "5rfEJJDnPSy8PdyydGATRAW97gCamPZZ64TVt5jcD7Hraiva4WLzBRQgcyGMo26vnUgqLRZsNVLzFRqANDczfi54",
  "key24": "3HJVzQeV3djmrFGYnnjaaaJZcLcYkFEs5TTe2PnVct77LxB3Z3PZhakYdDx9UFZTmij8xSWWUU3fnhnNyD9kBoRH",
  "key25": "5h4DP2qQyfWf7EeparN1G56FTJ5GnXunMCkFTGwaFpYkkcZeZ2t6tbC5fA6aBN4XGGXgUJZWckwwQpMenGbibiju",
  "key26": "2B2uMGnK2zjnpvkncSzA6LH4oBozpPGKnA5fjJiNQe5N24F8Rf4yMZvXgPGkuu3qzdpbAuFUBNP2uaeY12B8cg2x",
  "key27": "2DXDDpfV3Q1zeoHJxFbyrr17cBRuzaiVBiZ1hVU3BS1pGb1ZS2FkBXvix3vB6Xx1dB9cvSfebw9hc12htByVLQSq"
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
