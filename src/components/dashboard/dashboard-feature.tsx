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
    "5BrStNeERgD1Bvwm4gJaBPmpYX24TYDA7BArJGMUVCnD2MEanUQA4j1DusVBitaHVR6S1zbNwfjeH9LPURYGaJci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24V6npns1pVtdvXnEcuhJ3hxd7dd7H7a5VZsGoekscemwLYJtguoVJtGj35ubjEf7nbp7FnJJckdFLcBPgxGAjTJ",
  "key1": "3fHQAerfGxtr7R2Xvgg9dhioaS7RptearRbipKQhReduA6hFf4FdCc51EpjuruLn8woNZVdqLzcwJWvgJVeB4QBy",
  "key2": "2geyxHXLjqmvhF3Z6JMGwWaowuNw2r8Y8rvx4SG3ggcfDshgZP52oATTE24PyEkvNDsbDYTK6UcKyEjXbUqAsrHW",
  "key3": "gsSj39vT3r7qmKezcnsu2SSzoiA7AKDehHJLNewyVozuUVQJ1J3zmK15B4Erh9DCG2BbhtMXVWwyTZcCxVCB7Au",
  "key4": "z772dnruE8vDw9Jws5eg3s6HPi1d9GJ9HHZrdqzxc5uXhueet7eLKxyGLjhmmB3yVCLcmAyPuguFcsGRt1WFo1T",
  "key5": "3SetMKgvFqY9eR2Z2PJNfu4dk9gCCoXfSDSaX612GZfMFUhhhnW3WqmXVzDaS15TKzPLJnyH7UXRvSnSYmRpQAio",
  "key6": "46GRXXDDsWqBHXJq8WQbSrNqs4TfqNexauMNSxokREUqgJwjkj9WNgyaTMBBtXAuZnAQ9oxceTDPJJDLXGFgd7XY",
  "key7": "5XmJ4W93fWKMJF3Q9Mjo99t4K6m8CZHkhDJezQApNsFYNyihqTsXQkHeJWwDFz8LJFmUXcrf8rrRjpxyJaAkXfCb",
  "key8": "2mvgNS4VrkGF4j2ngdBzG8hy1r6fU3DCphoiyowreoyTs48eRah25QL7pcUTriYSsyBDneMG72SvgPsW3LKDq4Mm",
  "key9": "Dx4wVsZ8MZ9NBKAqiSZuwqN1zJhnvazyoxLrvkQSRTHA1MjFoeefA3kFNSVer6hHFLKC3NNvzCfejDJb1b9uUYL",
  "key10": "2f7bAyRrRrZn2t78jUjv3p7Wpx9YF2kktvvfYnuHM1vnqnLs9dL815JedyFNv34L1SXtv8itfbaLqo3oTYMUp77g",
  "key11": "K1LbLRtvqEJKMJye8ox4cH2162sZwR8DRcKBeTX3fuu5CYdSJrwEJ27C7s64mBwajoWGwe3Bkpu8LhjTnVemwWJ",
  "key12": "4pWDihYrSopoWjyjiKcJQmEqqLivBCYPsoo2kSXFdKJuPkKsZQbAQNiGQmb6v4Eph41kSPZjkAAtpnXNuzFxhKxG",
  "key13": "25ziUxpt8ruyvfDyQybXubFA6tbXfQeWMsbhKQ84TRDK8HC1mpZJAXsSmJBBpH5pQ8ifDdozGNyE21AR5on6rjxK",
  "key14": "2JLgLeLpB6vuy74GU6DDAPnPFVeapWs9TYGktXbqFPei5ny9aptfC4s5N1pgboDo62FGHhZ5o5fin2QP3rmTcKrm",
  "key15": "5KPkJWeSCyy5HYGXaR2jWLbH99wbSi3UhpnLkAQJ2rk9Dxw5xBfo9WbLyUmUuJRNFpRTMTPL2eUus2TaFebFZrJv",
  "key16": "5h1imMT3uaQ7Mfca9raF7YGFDHK3Ec9xEPDki2GoHvPXND3gpBSK1gdEfrvLtqxqi3NeWH6tS3NHuC7489zLZ72A",
  "key17": "4owrsJXAujGoYf2575t38kzpTnwFVKxMqksKrWVjPuUe1w5QyHKaHF5vcHVD936Qxkx9gg7FFmauaAF473dB29rj",
  "key18": "4fACL1rmgrp4KdM44x8aVRU2SNdLmSZkUdzyvsw6r8jBmia2Lc4YsZ3s1mLDYaAkbjvB4mC4ApbvcbVrbRhAWaad",
  "key19": "5zt41Gjg1hJgzPTpx3Nf1XEGeMyyfWeN58yuTRi8TFY3oLAPv2Lm28QL1edPT8LK4oVex4Q9zqrbJ8BTBYAE1cPg",
  "key20": "z6MQku7mWy9YxzWTm8AjSzwmLQpKVdMfNCpHHrVej1G1PyVvr6hT5RCvr4uYkMnG6md26jY6XHDERMyGw3cNxNE",
  "key21": "4VUuA5oRKHAmS23HYQ8c4Vhw58T99sg2gKuJZhwnjjmUyNJoLYjtdQnWtZ2JfiCNr7ehGNQKNeqk5DHm8w24i2HG",
  "key22": "3tcUnrMAS7TrgV79biy474ESHB2MmXgmDxddhLkWZWR3kZDjTVi3E2EX6aBUnf2N96xVvwG4uQpGhUcbiFzzT7zg",
  "key23": "4ivwQHsUdpzY6yT1xNcifDsecPX7vgmjiqqb5hVdbi2uFmLnfhyghK4nGcJ7yYFZReHv7NDr1ZzY2oSTns6QBjDg",
  "key24": "2PfcRxhaA4cQr5KjdCCvxbZGYmrT1iyGD9PEekW2cvD1vyD34p2VVZatgyJUypz5RUALy7T5FEH1qvWnB7hNQoRL",
  "key25": "575GDvoHKicevja31Kh6eEHx2HPahT6Pc9o5siGTPyHpWroG2NdVqR7Gcc3enCXa48LZ8Epz3BfCkQsLpBMqju4N",
  "key26": "4sN7G8Tg63cov13QXHkgehUvW6RWT62KC9FSXFzaxtz4yyNUX2H1tYosV4rSQrGygktMi6U9XF2QoyTtCVZg81Ng",
  "key27": "3qR5LjzrKzjd2y3V3ZUUFTBFuokmaqDYJ8AaKHdCJpDvWx9PSe2bjBiBgxFJaHLosd7ybpmXY3dtTBZwBMifbMXe",
  "key28": "3v8kuebnTYd8dKUj7w8AAX8NMr8KooFcpmRW3QeX9WAQ5BdNWeuizumkyYxRBE7zaremoEVscGFjscT3imaUPw7L",
  "key29": "5cJxUeAwcsN2CSZ3egBt1kwmcFcAft714oMMkAsrpf4Z62ETFHFrdtQJCHgY3ZjCsQDrz16ySKHMVn99hAj5PNTJ",
  "key30": "4epq6dCzfR6XTkR6YCWQ789KhHp3DotsG27CUZThQciw6wjyss7QMWLERii1njXY9s27iYQUHiaTgpEPks8tMcsV",
  "key31": "VsfguuUpLTZvWBoTc1Z8twq2BqJhQYQu4KhdquFfpwLSm7QxjnTvrfxu9MeJwUM5KWsfiA5fns95z6cZEFVKjGG"
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
