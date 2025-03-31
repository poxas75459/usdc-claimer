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
    "77gcjPBypPCvfcKfvYqg1fu3pKXpbS9ZsnmDfQXzYvsTfyZ2eNu5oXMjp8oW1CQwiREQyJahyzxcizCNoLRnZyu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KcPb37bVgN9Ha4e2YCTuUDY7AgYEKHDfvbUQ5pzjUh3kv36m5z1WWeXnZZ8FwNkyxur496KgKEn7mmtTDHGYcWi",
  "key1": "vPEjzr8xF2xwas48fd5uzcUf29Lf4a8NHCME2LJkPMXXKhoCzwyvcRofoRpBQv7taz4SD925vtBCJxDje1roRv3",
  "key2": "4YqAZa16h2Zt1HNXzN7Cy3J6spJB4y7vVH9dKsxYEwUqmVCuq2YbmTfN9uopLZcwW6a9rG4Nq6Sg8ouNLvx5Ruzg",
  "key3": "5ovVVHRZhQvTw2tu65yHNbFPfG9VSiabmhsfTo6uc9xTA7BJsVKU4mhyQzBuXcjmBPdQMq5J114nFHEqixkhXu7h",
  "key4": "3aFEWfbYwRQorBndhjnTa2qhNNFEy92DwsFrGQZBRSgVZKJyPKUYZbGNFy4EpwKR5tFWjPVFLs2TmC5min9G7mBz",
  "key5": "5uF8fvJLfGCGjJ4v8A427Rp6GHofF3bMttSpzggDJTmLEsdLY9bHojk7Jm1vSUsyrriD2rt1axNFHcBeokdTMxun",
  "key6": "3u14rtdwPUVcLQqGXmFT9WpDnVyiuYwvkpkEhGL5PXH1ju8pME7z4dDA5EyPJs5m69VstGdzy5opMMspqafB2VZK",
  "key7": "3JHJTpMomxphhmWPmhm4ZhPsH6YDJpPKYqccChKhQB4ThY1Du7r6YJJjjiD11cZ1ZkfHT5crBeaPD72dVvULbzHx",
  "key8": "vpb46LN21rbMa6oQuhpShmF8FhWDD8Yap3oAar99eS1idKj9SKtQwa4amHTvRaMg7k5LnGDzsN5pkBRM7y3W9sX",
  "key9": "4qxkuLVVWBvWVHhKmvAunCdnk8E3kLwVwJxXrxD2KWpQsbepwa2nqhKdwapUBxevsXmkyd6S6pATHoEgJaV1z1zJ",
  "key10": "THcTXW8wHE7htKZTDkBHJfHhu6VoBQqb1yNfjtDH2qojBt4CUmRKropbxM3qMjJMWZ3ifz7Q5VjQTzVY7tSCQo7",
  "key11": "FZKY7NdDBF1xbaardeXDweER9gYQaA93bhdcnCjortLUDDLj6E1ggGs9HS6U5GioFgfQphGWacRMuKQfp3vmiht",
  "key12": "bqeWeXaVt6sBa2KCPdQdumDjCwvEzxvAC3B6e4MP5YiPxziYAA3csCxta3mDNDFGdD7SEJ5uSs9E8gM7quPewyT",
  "key13": "2C52ggrK7Di1yz2v64GZnRBeFAio4KJ5AZyc4QkHzPYbZXG32EqGTpTsvJXWN2FtmxvR3CcJFfh3otmne8DpzLTq",
  "key14": "4MyrhnWiC7gG6RdDR9q637tkxxdLJcYPmDkjvzP3AKxsBZ4q2rBkWDiqtjFd1KYNCBCXSqzcUNveWBz2F3PtxF8a",
  "key15": "2xJmgmTzDJK4M5M1FGi3phWmQAYFntkAvvsadrC13EErxEFnX5cu2fyLsFqCNxk2VDH7SabzWwB7iGndrbUXkpEb",
  "key16": "2TeWVwP12aWpsgdwyARSEfruuo5CxTQuxWN7zw5KWZcajChT5NRbqvCo36W8adY1JVukTQ1jRvKxzxW1pD5AxfzF",
  "key17": "4xhWrMMXCbHDqJVH1XEWtKk4t81ED5DdPg7D4mQYvkfyHU1CfRc3t4Gt6qho7hudgpBPosiPDMLroQz7SUkWwAKL",
  "key18": "hgH78NnndbJK8PFtQT9k5cBzPauydj593uHro3VSRN8DUYdJi2YZoJnPwhyDeeVe2qxdNEv5yFMPP6GHEQwJ77S",
  "key19": "2eqeobNhtXnGWZVqJ3DcfTRuiwH1PTcH8AkDrkjUS1ts1DFZFT65iVzaKE4vTnM4QpCMVt7AafHwMKt3pXL9N1Kf",
  "key20": "2Eu8YvKY7DH4aUjaxJ6WynTQuwnBM34iKQ2CSnZ43Evw9BAPSJyhxwdYBpmB8tMGpxUvyHMLJ6Ko9R6X2PtX2JWK",
  "key21": "dQV4KpRcyv9VPKUGm3g7Q4b4HumUYstqx3jz6Cq7tq69wrfmELNobob6DZrPxZb5Cd6R4j5Gr5Xs7kEnZ177K2d",
  "key22": "2Sg2XKeDJKmEpRyQSSMMWZ8wyb3aDbJJF81cK2b2vYR1amaYTC95ndxnyFhWKftcesDqtbuUNm9Hm1EfTrzxAwU7",
  "key23": "4FWYig1fyiRXuV8vcEmLZ5oiwFAUHVHwSHXPtYxM1xta3Q1yXwznre1ew7WykgQsjALEnQGNocCsrj3jxW24SQ1x",
  "key24": "4KM9DDhNXaR3EGAoD9uLtc4xh7CpmbBarTsm4Qo44mT3wvA2g7i19ZR3E699tM5UbJZzY1dkeYAwyZuDpZ16mQZh",
  "key25": "4ZJCRjfk2ViK2P9L5QYqALiTqvtVU9y3Jznc6LAHKxy51VFY3LexNdqTp9YEQFa6AERCF6sL9bFZPiffTqpfEKGz",
  "key26": "5mBUWH41Z42ZAikK21JTfNgpZ6GMR7d4Vw8aYMUs7GiTWWUTkUhBsDe6FxGXJmwWrEP8PVRXZekHFnBy8xqpM29J",
  "key27": "3Ga2L2oqbkE3kYTutmP6mAHAXJdbe2vEz5xZu9uAWibXWygPi8CDsDY7M8vi3URjw2ocwfErqFqRxkWwW5cLnwxk",
  "key28": "5rZJJUiM6jGAi9eppCuFDJYe164fMNWKPRTHafnFrKACRCB7neF8XXRVNvuuh48m9x7rroJpk9RfTcCCnECd6HA5",
  "key29": "2G3EuAG55aGAiuduKXaQhRNR3xCxuk6om3FDq67uwBJBFAZjxNoDTB1tmXj6k6ky2xQ1WofL8SUKGu74hciavGZD"
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
