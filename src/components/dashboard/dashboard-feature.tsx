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
    "oL9HbA944RkwZLop6ALSc9jN6F6P86pgMFuxG3SmEaRXLw4Yz94vdEt9oaFmzunEWdoRsHhD4tTU8uGVTHwULcH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PHtnJQWwFyZxP8MjM739sELrmkKDFCPFdSxkfT8q1TD7gk2HoJda3of4Wz3rBx5pkwAhq33ihB9HYFV4SVmfwNn",
  "key1": "3Di58vcEUb1iyBjgJvSBkq5jSRmBuYxhRMjW6yf9jPjU6k4KqLx7Cb4yNDbY7kcJUL68u7jk8QYCWvtNtQZAPJV5",
  "key2": "5o9sUMfKQoTBjPD1SJppDZ8GrEqsQYhmTC9uyMGVhiB3jXJFsPPBQex8h2ZBrtQsKuErCz1YoogDQ4cBidToK7Lu",
  "key3": "5zFkv3jVU2DHS1wjdJDuGhHaKS1scpPcpWLwxtt4UWqCUyMTBu6DJo6k7s9PEYktkTcqQqJxWYRpzXoekLHFMXg",
  "key4": "2fWdUcqWQTjvaA9TzpuKRzTCvK6BAFEVciTDgLRsD7KNCvrNtJEF1sgSNzxL5qo8r7pBUvXA6nbm5VMaDj264TMW",
  "key5": "3QmDFzKjHikQp7zjgrwNotsNaHX3Q1j1yKgpcFm6L3u4ghfVh8CfxkXycbJog2H3MshfUVmw4TTs8HNB5msoxnQG",
  "key6": "3cBKyFdtmbZwR437QyDU9m79ihaNWhzA2WVrGbHDBkns17kqvtjk59397pUZz17dYXCStWmUaMETXCp8YsfnguHY",
  "key7": "2VZUbbtDYssxEnBtdYE6vbEResdufvYgJhasfYXy6QfzQvvNbCXb267x2nsSQ35ukycjxY3k4fU9GP5wATsPtjxh",
  "key8": "4ccMBMposB7aA46ZgducfqNkX6sNCqnaaosXtgkL6EfSM91wcrPXJCJ1McTKPhnN6qYqhb95vwESFfpAPbfxAtbs",
  "key9": "4838oL4hwRBKCoE1bMchQmv2zBr4SmftRkUBk92dL5NF7xuqdatExvJEYPWt1cNWEF2zSScW2jsvFwdeM1CPPw8r",
  "key10": "5RPQEL2gkQbxs1KE3dzpkRnwnY99y38JHokvFD2qfdfqg9HxLER9fYDf498eQ3BQgvKKE3qDhYoZ6KHWTV5Z9gD1",
  "key11": "5enjygFyeUV7EjFbwkCwKxdtKDoE9jc4DeP3YcmWhvZXgiL8qg1PbTTxkXK3QNNsXLV1wFps2N5W5JvMiV53uAMb",
  "key12": "2dV7Ak1dztmQbcB755UChfng1dwpbdm6NCJfvxcT5oViXVj9cs9KrRUtm5SC1NUDfAnpjTAEnbood9diZZmrDeEZ",
  "key13": "2qm8yE8bHVhZoTGHPNo56y1TRNzA5Pg9s84hvwX3TtuTStFabBuHAp6PP2U9wWSBqGMHprdCM82tKDcoaZYF4rga",
  "key14": "2zSszUSNjjo4y26bZRrzdJRzdBCHzq4bk8JMWxqPaFDqoSeC9nrqVF8umN8BJsvCPfU93hoJeVtahWNz2QUHXmEk",
  "key15": "3JVFK4aj8YtgvShWrnrxxpPfftq4RFWseXyZxd7vVWaCxaC24VfGphpxN9HaeiZrKX7reuY1ARia5zXvKH5Fkg7K",
  "key16": "4FEYKpBW99SrGfoAnnR2tb3qYx9nKRCrZDjFBYQj9KxdQkuGREW3MsJVuprjUNqDvphiE1NxKKsZLviSumME3XiS",
  "key17": "3JwrsxCRZGbLwaKUQBHuJgzmRZMHmLy59qJUmrTTqViKLL8Gs1jb5jZvdubpjYz8V8FA7Fg9pj2tLqpTjKggAmzL",
  "key18": "2edp3Wu2bRcefAEThpTPvdAZtPGobo3cFnJFEftZCH5Vi6RxKYpPSsZZwgaQNmheZu1V5uDSdsHwmJyB2D1NqFCd",
  "key19": "3cYyJWEw6QPA1FAmj6UfukfKXg1v35bgxiGEbtcKXq1MsAicZjTyU48CGohYYpvQwKVRNnYChNTL9e8VUWjU8rkv",
  "key20": "4J8BFTReryvBQwXnDAXExefUPDsYaetAkPTw4v6BQn55NHVK5XxnB2GGptHKc8n1WDveHC5gztYToW4sn7c9vUiU",
  "key21": "5Z33zWrAagkgfVJumrWkchtgd8y3a5G7664GkCTDaVz6DQRs3GFVZb9iCNBhUUdEU7rSbaE1DZZdN2da4dhhZfwd",
  "key22": "BsGk3tASK5d3Ahj9fXqGvJV4Usj3W24oG7KTVCuJNCGFft1TMtEsBZfE1eKtCBtj2MWdDcHwcAuqNwjECMKtvvw",
  "key23": "4ib7bz3MuTDmLBRTXWu5r1B9Bopr2pyBN8AWAxoZrhYxc1xChXeo6s495dt7gN4TSdvwbaHZvqTc8J7jbQJwzAH6",
  "key24": "ncURxDMZM55xTVQv441hM2uoP6tAAozr1RHRDWZdZhmzEYaVWRWYF9tEC5DDKXfgyBuQvPXPEq9miZbWBKgAyLC",
  "key25": "LpjGZhuEM5hByDoYGEYLACLby3nW8Vsv5W1wk5jmv8HbCRLNRwqXsrxFDvymMc8tJNtrQWsGfwunPqSCQhxorYw",
  "key26": "5Bt8wcmcHHueoegsyg6WX5muN7zygNB6J52VTsRzUrztnbqggn9dN6C3iQs6g9NdMddLcA6eQCqLKLLak2PUPcSj",
  "key27": "5rfez3qwkuuCVdkqQggb6xZs6xuyd3v4kdvzsc4HWGTUhi2c3wLREyWfkWUmcfPiuCGZsMH7B54z7FoqhG8MfarK",
  "key28": "5jG1o9ffug7wVjZQSCHzMeALsEMhQUgbW736ov6hNJkfKpiDWwX4AbpdhG3yfVZ5UNeJQP9vkbS4aNAz2aDTqGor",
  "key29": "5msKfuWnci6qoGbZLse1cXmrpDwnZzR9PxKShGGRMmQQMysk3SXjunHwQ8BiEA9ZjEjf9Y5sx2ikGpcPrtxJVYuS",
  "key30": "dkiQv95KveVfKTVzjbN8oYpcKKjLDihuG7y1egRi5j1ZJBo1wwdiLq2hihc8mVwqJWV1wCnTgbD2V7uNYYk8tKj",
  "key31": "4hV1XHiE8xyEnSP7Y5KhDfnwHiM2BkiCLFPMhtiZBDj1tzevH5yhba8NL6wppu2pnEY4EnxVVAaqCVDVNLhU2taS",
  "key32": "3T4FdmkhX93sVpGg1GAcEjfuFbbqhacYg4e9AwF1G38MSE5kZ3pG1GXqRTngXgEjtg3p1349GJu6hLJ18pUmwpwn",
  "key33": "3HHkqvL6DkxNDSa5WYitze8PoSL2yugs9FQgeVaybRPJGqScHh1jU5a8Go2BEbkDxf1gyZQ2BLrYmhjZk9h8XfnB",
  "key34": "5sZjxxW624wo8ieY1R5bGXAajwvQTFDA4YnD5xabSdGy2J9zhyLEjZkTSHfiat7AkCi7PN2f4MC23xHrUVHQiaEC",
  "key35": "2LS1SQaMeGX9SiSkpK2scBS1zAN4zBuZTQvsemeBAHcJmxbEgHaCDvUubRUxwvL4y9BuRmcqrNjqaj2AAAyBpqQc",
  "key36": "5eoBC41icCTv2Cvhd7wvxs86aufNNWZnkKxx28LekqsWQK8iq2ajib387TyATsBSKyh2EVn8bQajiDQ3gJLRr4N9",
  "key37": "45KXwWbkS8AiAuMDPzZcs3R2ARY4p8NauWz9so7CcHDwX41Uq6z4iRH2Ru7ruHkY3bH8seBqAxcACTMbLhb7E5Bi",
  "key38": "27YeJrND3kqvaNaA6yWve4cfBC31WsYK8EN7y2CRYrn7Q8vULTmhDRkokwhpoyhYpv5Nj2qXpipQkUhVzqbT25u5",
  "key39": "5z6ez8Xzq7tWrDvjSitmezb6mSeZBNQHS3vVsf2unZkvi5pyHwcBq3ntKe8uUQaw14sd4ckb3TEhLgWHfk5faMF7",
  "key40": "3xeUH3z4xVqzgK64Fc3Tj5tuWo4eHPE9hgMroKFM14d7x7P5P4mPE6KErWQnoKPTmEU6b3tqiBx29NzjVmBeyiLZ"
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
