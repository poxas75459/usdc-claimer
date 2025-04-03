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
    "5pPmMrYVLVGMRBQAHW24qbHs7FW7dHZYfiqvCyThHoPhaExu7uvC2uYDhPjNmnt9CNjnx91P3eKnz5XioR17wWg3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xgmRJhgJHMx5fbcsmDs6Yu3gsKNmxhx8mAU9Jduo1DucU8oJuJ31vJFZM5JjdchXa9SCPXr1SGvzEjBHbBps8Ex",
  "key1": "EBQGs7RJ9cB2NDM6PrLJ6XJPkuTDtmTeoh92VWbJV2h6zLTBBeFQ8oQMP1G5v8LsTAAjRnKB6FEvTHGvGaVx1yv",
  "key2": "53Z2W4Wp5GH9rNSATJAp5EpgJY4WPgQG749Ast3zWMi4S6GPkcAK2GS8RLz91nNzcYy5BJcKscisEkQ8tzEa1WNY",
  "key3": "5PFUEDzbTgHgpgyaQQEZXf7ihuHmipDKL8j5qDxsZn6PCinAt2z68WbfkYZJQDRZiAAbVPVQqkFSr3qZtbhu4GYV",
  "key4": "2agRjAZT1TinsNkcYtbY56G44skkX5cvfVg8RY2zY4hGzpHL8KypcGBJhGqHUJciPBcqmoYPq4jDhmWCdRcmUyJU",
  "key5": "274Cqau6V8HbRDMTan3YPzGYUFVRRcycJ3ahxV9itLJvGRgQg5SiqAb8YwxaD7EApbdLZHKLEomMEzaeEnw7Tdbt",
  "key6": "2EJrKit7mqUpjZu3mbdditRxAeEYMKyCgJgmwFjsoWjVVMjRj3NDej4o7JRY58kmeEURESBdCbiWnXg1V9nsEjCB",
  "key7": "3kUYCFjWxzi6PB6qhBD1yCZu6e1sETBHL2MajBarm61PHSfSFRGK1CvR2UfRt4menktvrqyCHyioEJBcEXvgSbvD",
  "key8": "43hA999wT6guvNyEwFYJfsx6fskYzwotE8mccijwMrrcHp3C9J4H2eyB9LL6NhGaZQrP9V2PybM5i1AMS5CTXmen",
  "key9": "4EKntZcS6vNSZbL3yyX4YaSgmGqVXddH4fPGzKqfjKg9gzndnvL2DJwAT9tgjXM3Rc9U2SU6bbZuvXCd1xLkYwm5",
  "key10": "33jWiuWQVt6L8HhTpLYjXyHhK7dZJgxoTGWickhYuqgEKqBaPD7AWtZRW1MAYo2o1jQvJdBV6Jc3R4G2fPVxBkfa",
  "key11": "2uxopAbBdMVnUpMWRVT4JoMJELTZEuLcwiyjMDZ3ZoiK4y1sFbgYXN7GaGoGwHgPdymJHMggov4gT5Y1D5XPJxFT",
  "key12": "5ntU7AkmamZV5Toze4rSubNYDN9rS8v4XWRAzFdsNr37js1fEff8kVqj4DeTHuyv6WF5b8K4ZUJzTy5AzPUt59cf",
  "key13": "2LjpPMsYwDpq1TUxGohkY4pFdvx3ZRfBUmqcY3GY2yWuQQCEx4WoahK96VGxuePs2XznkX54CCYSXDpneux6p1zS",
  "key14": "2hgAP431F2Xuq7fQUmWTFSZjRqKAWUJV1saqc7VWKwGAgv1hELG1jncnmSzGHyGjDLjKBiQCEy7kNTY9BDuCFirN",
  "key15": "5ebvnCsZ275qUiKvEPFppYSJy3vyniEHeYLDuNp8DVFx89rj1FFYXiv31B5xEnE43pX8oBaKvdK16uYhEz8hqcgP",
  "key16": "48kk2WY5oYfucnSshkcwLHV78NH48VYjauTRg32qQx3W8FJqN8cnBhHhsFyeo7Kx3vu7sraKY2dDugnBNw7T3JHz",
  "key17": "4d9U1vtHAsNaZ2WqpzJJHAoTCJJGkJeUXsyktNMX6ZZLtFAZUxKjTSKRZz9GzdiigCMACFacDffhiovBLrAQkJJk",
  "key18": "2xkd7RT4kA1tDHxSwsat1oro25YKE5XuiJS9HCJMTvWiGiypjHLQdDbCkp7Js2Gd9Ya7wgAUSy6RyemtBrCWU73h",
  "key19": "DoXfgQnZe3m1XFpCHCzXxmAMPmsBTiuaVVxHbWhmPHHK6BvLXsdxp2tw4TjnMR6TBZeTYtTPTr3B5ozn8joXYrQ",
  "key20": "5JVbNb9gAo75Busej1oAuKjn1o6sxouCP5mRgRd28jdSVF6BLBH8LaoZ5bkM2PY2BwdtPFUrr7mHJrzsjubtqhna",
  "key21": "DRv7TrgfDkR69AypVydjUEMLSVWRfaqkaX8TS2qATuPJ44nsrxrzJQkiT8NAbZrcT1aTiN6TEnX2kDySNBJL9A3",
  "key22": "5d5ApV6PKM4TaeFfEkokXJvi8wX7Q2QM5zTxDnh1iD5Lye1Xf6q73MJrHCgfiD7hPNjnVYS7UmMoGV5xWpmJJzFD",
  "key23": "27taDJQJPCeaQTmCrVSw4ZnAt5TGeXSYtvYh55anKgMFaEinC9fgWNWDTtA3ukR6JEuT1pV5WyNumUU8bAuXigHK",
  "key24": "VYQNwQKWASGpTXD2xxome5yJLhtKHgmaR3KgEZarw8Apig51VR2Ku6QWUyhXdTrbSTsE2dVb6MQ7cba1dc8TQaD",
  "key25": "HR6PqsgW18y525pVNyHQd4ixjNdm7VsQSvxucnSiy4SkSd4enQjxEw69ecBdVERFRkwZCDcjeegPti2QrrmE1ih",
  "key26": "HaKChANU7LXabQwAey6oEcxWGMpUaVy4UVBBraFqvQvhxxGgGC2FEqqnLQa26unzSczRvNoM49SK9EeiTgXaU1S",
  "key27": "3vdtb9kuhwyip3qUNuY39dLGJ8Wcg7hHBwHJEFV3CwLt4jiDmm279vwsdx6YGvF4ufP4ABizg9S1Mv8PwpXzeDWY",
  "key28": "5kJKJnNGZSjVtWKBaS8mheQuoaKgxZSAZkk3hhC1A2a8WYV8EWL1MUCYj3Gi5uNX4EpB37b4EQPwu6Cf11VcNPsw",
  "key29": "5f4oLaFV4d6uRZgjpYJ2Uvae4HkZzRf1Q64MTG3RyJCgAjHmMWwewCYforLnHTPPs4PugovX2xWix7eNNKf4HCt5",
  "key30": "5oBZR1rhcm3jaNhPucoE4Qu6hDY4DQtoURNWYjKCDJGaMhenifZjWVUxfX1BJvE5PrskZDJYCxFDo2K3VyPH8ofn",
  "key31": "BzpPG6Uhc9Q6cBXzUYGR8jbHJGHXHb2GLWmE9FpabopZiZhxAeD3gEwXSk3RZUyA1chfLXkiuP8wr7RxjFABQqV"
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
