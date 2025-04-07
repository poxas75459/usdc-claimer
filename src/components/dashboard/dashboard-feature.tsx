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
    "3vkjVKLCU9hQQ1HiWfgokqpf6E2wjp416CYVwQpayp9yPRkCp5LaP3aHLpo5BBFYP7bo5qvdcSix6b2XgxFkbCDh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cYBycKg1Zz7FY1Zvk2RNmimGq3dk8tQvnT3RQvTHWwyJ7reSNAY6BXjsdSAA2R7JSYDnG6dph4d3K16J6gfo5BG",
  "key1": "5Thrt1LtQk4qxTut1xPYdowWLwneA8h39nQncupzLumFMdL7T1bt6vnQF2zvDLQ3F6U8fxiTXvc2A6umjyxzYtq1",
  "key2": "39XVTBgY9gQ2yzMZhPdmBRbTpkPgoBydLSU7co5uaouTC9ZZ3DAoRQF5q479ReLgfJq7PZ5DzsgCV6MX3G7d1G4i",
  "key3": "3tyeg1u3XFRf7NhcTDdxtSfNXAro3R73PePmKGJVE91cnPY88Dre3bnxBCnqjyVmk1EPzwvxUKEYeDnfWBE7Vn3Q",
  "key4": "2FwgqsnK2neMfGmwcNniLsp3wMLJ3AzcxXth2zEkeM7CoUiEjdjBojmfgJCYvkC5iwo8RBKvSGKkm8fV9dCDtdzf",
  "key5": "4YSew8dwuqMoEzjLD3hJkfVoGggbUHYwWJA9Q4ikmVAXnnLh9RAXZcsuuQRXe3BRDz2GR6e6sjhi25JRmzcTHPNj",
  "key6": "7sVmYvbkCdSYmB175y4Vv7sc219vUHV38KYWE8gQEP5ferwDcn4ZLV6JnnkNmhQLeerpJPCfzsPYtoM9GBcRizA",
  "key7": "CjTs92mbds15V5zZDWFmd8VrXEErjaxwQdGNYLHx7TVFGBfX7g4rp63trKFnfaHEP8neqNfLpCwcJ8R97h3GG99",
  "key8": "ikF3W4Up7pYNxCdS3tZakj8Hw32syfFa5WtfpCLUGbLZ9V7H9QESnwfkXAuryPnbQ1XVYSuz6WBYfiChXdhB5k2",
  "key9": "2HpQbqxUENtnom7pCyZjw6ZBV7ojhw9RS5HmmMoMwPysK342ogsaU1wuABgP6uJuS89Ck4QWrtnvtNTy5FcMRNjK",
  "key10": "vDqUfqxsoThD78rQGt3hP8emipK1WehvWUDtSWq2vzs1G1o9NyDLARrNQcdcrREApPLxXVgvEBHQNaPBWXpnKnB",
  "key11": "3CXW5gkLzqGTY753CB4Cm91xVr2YJ8rbWRwsTn6c8TpSLSXZiSZHorAoBmWRxmqfXiyv9UW3g7Y9Hud493RC8Hsd",
  "key12": "49BwYhZRd8uvZxQxsZa5LZ7zvLnVWx7phhraLMMdEY1qe3h6Md7Fz8Z8BXneVLaXc66D9B3a9E7okUFuEnGDUAqD",
  "key13": "5bePhoyuFgovM2tMm4KxKXu7SdDPUMy4dKMosu3KUFFW832smthdHghz9jiGCNRK42oH7b2AinFCHFVeEVU43j1M",
  "key14": "3aQWEWSSESTmft3nw39mGer2Kpapb11njLwJsdjMyHWEi7Zcbd5sAH4ToEzMHJYd9eu2UwfKHGkzCuNzaBYXpzMq",
  "key15": "GLoiDm5Cg7jze3iwczbkxJv5jCkey7V1zn6qTpV9y9esvwXXDaq8L9Eh43fkCdVmLwPtSXyu6DqRESigP9VYuqM",
  "key16": "519VX2RoPCJ4fsZfqUVCYZkPes1mJ8dDY8jifmSyyf1o39psz8ATa9tuzGBaRdz2XL3N6wMo3toffD2XbSwARmM5",
  "key17": "58ba6viPoffJ8hTj9BxK4TPhQ8N9JssC58Sxh2BSzsqcbTjbZqVwaW7dMUxxE5PAH6oN8PwmmB75d3sDACM5a5Kp",
  "key18": "GYAwrRBtaF49RrLiMm35zzPD346w66jBvqFtQ8rtvbrtwob7EatVZLADNQ9W1CxZNgGyidBzmxgsdzCp5vm55Ji",
  "key19": "2pBK4AhjsCSHGoyto8W81VtEMKTKvrKGa4PxvqxAnkZv68YL7aoQJNhTPgWaE8qcVkhtYak22HQ7TDoixBaTWML8",
  "key20": "5wLVq3YsLCmZKMUZjWtnFLzP1NyAT4VcRm31JmwDodShxPTT1Qq84HwWco9ScRHFqfRbdZzCjhzkjSwKDuXi5u3",
  "key21": "5Wr965m3HiRmLhzpLKPB73kyeMCiYfhd3SjHGfAue9t8o2iXmjuFHkG7SXpmVm65c1Go3n7miwqicoxEUdcQzeVR",
  "key22": "2BwHrKN8wCQzw4Bg1ExdrFMs2DRmTRoxV9n7e89YbwxwwKd94e19kgYGHBFgvSKFRU1W9hicryyUfs7EzfH26Uhi",
  "key23": "5JjSZgDxeyUzTm1Qc4Tj62W3DWtHD4dK6oekYKhkvP72Ua4Y9rvu7Am4LkGjnXiwZuKiag2zUD3qADLT9qNUXdSv",
  "key24": "2akDuv3cnzpkdobWy4HH7ipCaMdGF3FPLoQsJh6nCiHd4qfgMAb4pv2NaBFDstd5Dzpz67uy2vBMLyWymNixub1L",
  "key25": "4sPc8k7JUxqGRbNtCVpiTo5oy5uBH2iBBahcaVvFXW72LL7Bn4u9WZWgmeP4wKoq6RJUFyhJ1Z4qWqPYMe8hx1o6",
  "key26": "2xfYZYV7TkctVtJvat7eGDWSVUzXMEUebp1RXRjL4J6bJbC1iHmXpaULTxYkbfxV9LN9hh9B18z8rEzMUBoDcA4e",
  "key27": "4uHjnJCWKyqHpXK4fvwt5u63Y4xV8GkAfcAjbdByABg7REjj29rsHzeth5sRRSoF7fwg7euhY2Qyxzi6Fc8AcZ9e",
  "key28": "2NvigS7T3oQoTKAAC2RdThZ76ZAgBvAqFZdsPzVKWs9zYB7dnKDYZvbjn6xKi8LbeZ5mGZq2XsR6Zhtu5nKxcveM",
  "key29": "2ZRFJySNJEUjNknCRSiCcPhLkjEPqydttRXRtATkYHDxuqSLkQcv8uonp1MEfDKA9Xj22kvzAsaH6SqtQviTy23z",
  "key30": "55jBbGq2yu23Jr7f4JD9pDuHayK1MWfoKU5kbpw1GGFLjLjesJvu9CDJfUwrncmCm1Xgd5e7hU3cV33TdmMLNwi5",
  "key31": "5qYCsV1oTqqipEfvZjvxMfXocDTBzEJLUqJGxp69dTrMadMHD59LB6GXqCxrbEuVMajDXHWYb52BPkaqxaGfNn8M",
  "key32": "4RzvA2B4oaCWJuFg7rA7hZt4WhJbZVgJtiPuHdt2tevY3Fn8Dw69tAef1M6iUPgB52HXDk3eiUGKUQSPNnEyQPAq",
  "key33": "4QU4KerZcVymMCto47AeK6BRchCumokF4QAhxxqPJmMek2QiBZWrYBffGCEdrPhLr3MpvnZvSMR5pJV454ykucNW",
  "key34": "2U1wXkdqUCdt4uQMkrpNVPJoVUGXCXDP4XcrtYs4YDBtMTCbRUX4aJxsMFSwXyJNCsRWrZw2JypQHrociLpyCzcE",
  "key35": "2Qyrk9khQ6ppc1J5QYNcGnT7xKNJ58Xgx1MwswyBJ9Qq5ieaTVvvpwgccNAzNgwRb6QtvE2wXySrjBtcWs3A4JHw",
  "key36": "5FfiEfW8UqxLfpFCJjTq2bwaMgEgfUKgXSSp7WbiXj6hx5mZpaduDApwtLtDxXVgAV8Vq3hfjhiZhP9vEoWdFbE8"
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
