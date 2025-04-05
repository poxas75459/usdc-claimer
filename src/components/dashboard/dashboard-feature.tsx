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
    "qXfRNWvq5FGMbSyhcaCdCa2kKbHQK5RSrW34tRUYzCurh4Ssx1KHynCBxQrrFQvrdieJ9D2P3Y6U94Sr5a5As2x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZC5Z1KiuLKRB9o8dv8RXu8BtfYKV65xZgN4nqh4MUNnuzpkqN7BQHts2X9HdoLxxjoozDBsehVNo9ZzozFVMKxH",
  "key1": "DqMvgyQFXNmLyWAWq5YVbAyYVU7nRz7voT1ruWkLATLPYYU6ZuBBUc6Wo8dTHBVwHo24JmpM8qm2X6dg6usnyqn",
  "key2": "3ikCpNyta2EfneFEBUDdkKVijwSVEMyhqWXQfZtbdKdsPtr77Bu9QY4Q1WhHVFHN5hWHLpRJ2ykegQGpXsy9uVJT",
  "key3": "48bvAxLA9USMiPZXECfMiLkixhivR3E7tFzDPzuheWYHGgFQNRyhv2uMKXmCn22Jh2eqSfbzAeTTMTBP19otuaC4",
  "key4": "3RuCECXpdEYt6HSyeD5hmtDJxfrM455XRW7TNr3ZgndV2dmfGLjkcFD4yYjj47fBcKRA8xYS9GpLt7vrsybSUniJ",
  "key5": "3K9e6XqLncevnpFcTYk2rbZCRMoHrvC9qeB4PPDFfbrx6MR33QCpAjB9Vot1dQQFXbuuGfYhdb2dbRSdGsQ8y1S7",
  "key6": "3mjA6NPMywF3fFt4zdhNX6L9rdKCZYyHcvrDVFrVEPRdp4NECnfZzDQbEzxZKSYYWwUgPRMga5kR1thYQirJsyqn",
  "key7": "5FpuJbtMMJFFPdcb95T3LxV5h2rPedRrgAzGPiR3su57ZCoGAh8p4AyPwHXcUQVvSjh3Cm4q7DsAtbk9Un2Go3yF",
  "key8": "5WnQEADj1YtukpUFwZrqiN5MQJdJYejsbyvacpizYQ6v1KWjN1KQk7RiPY5gwBq5iEB56ioQeQUYHajzeAEYQePh",
  "key9": "5q3HUCFAjgxA2hdM4BXRAcVWd7338Zn6JWK6r6Y3ndnSDt6S1wSEMDjZx1da8KUUaxk14eiGkT9wByqy2FeuL4WB",
  "key10": "PgK3qCxJ76sxCmnXXzEhmXs218VWEKH5KCcetT4osTVYtysienqRxDWT35CRN6eYnpdWsUEGY8aDq4uVHLBjAw4",
  "key11": "4rm6f4wQiSZvZN4ugBeaax8bdnQ5q6xwooCtBvyCTvGNxcAw2PB8KtDPek2rNWt4AkYcupgYSLw4xtSYUxGYfe4d",
  "key12": "2aqwXgPxUhzG9F6XWzgPJgmSoPovHXL1nYFbuEUEfeYaW7EevKoUhwrZ8sR6d3w2QiV9Bta8tdJ3vLuUGRBtDezv",
  "key13": "39wFayzWergBMisFNpTDangq3HEYPC8SmEHZpSxMqFUVfTV9bz4zqjGLyseBrdwSu5nS4PrRbDq9guXXgALFKyqv",
  "key14": "5WaJrjcZ8EbANVwLWXCmE3GU7MjcBb4coLmuB3Ue1GkXAL5UNjhK615Hbd5pRwwWp76zKKbhwDiM9moU21NSHzis",
  "key15": "66grr6nBdtpFwapt349kaxAFvunYaC1MjrovDe15sgN6APuFFRfxxfioDBY2V2WjqdaY1gynoKeKoQTLyggLKmLH",
  "key16": "3Z97Pi379fibghaTX6St5r6UdssrHypUc5DPNnixWFmg5fidsaCM9uvbNVNtw68HzQ8LbPyiUsfgUKZqxJ8YgoiW",
  "key17": "4wP6Tqdst6m7J3mizpXBk9P1LBu72eWguJfdAKQkJbP9pMgt5zGw1YTSKmWmZb3rYHahjCKjtEhLxfv1KsqtPNhb",
  "key18": "5LoctcCJRkKCtWFUCiJGKaeYP9dQAbfX8mh32rhRmnUx56WqTEz5NZ4EzCXt6eXJKaZy4jjUS2c2WAhKAPEYrf6y",
  "key19": "YKfAnXSi47cTRZAP8K5kYN9bVeRR5GRuWXFHAsAaSseP757pbqAFKrgBUn1VwBZyR87HEj56C2NCSk7qzkXF2GX",
  "key20": "2rNnjqeVtHeAPJ57z7x1iKyRihPtAKfYhFJNvgGkgNzXxft25jBtf4bPCic3KFvdXWzhXLimmXCUT3LeGPvYDZpq",
  "key21": "3Z2UUbq8rEbt3iqd2yPWKao2bLcwoXmG4MH3oDZFyjd4KUTfXdxke2HfKy8aEAXwEwUhtZSuxobipmu2aVNQq7Hh",
  "key22": "5tXujNthSaL62DuJdCRL25XTUUjFJy7wZ4YqJiAJwok15HKJSuFUDg28L6izSvvKCXeYyfXvZhYX3uCFMsm8qpUs",
  "key23": "4q9PPEYZhqRGytvaZUDmManKefMxgHvPiYKvojkJ87SnHhXHSunRnGX2zk8j29Azxsb2KkbossQsd681KJMSBLGt",
  "key24": "GVbnxscvqYiWeuFzdwfRP1zHMpU1ZL36nWSmEZf44ccbzXmAMrMuqh12cTD7zh7iZ4RCZPQb95eqkQDoqAZwSb7",
  "key25": "8y3MAucwuZRCwW4GWZHBxQPbRZhEbiK59mk6BNvvjoTPpafduwUwLYMQUGqhMitexGN1u7eJMtJRqMyBctATN28",
  "key26": "2r3WLQ9z1qj2q6Jj5uG5uje82psjHX1EZAS1uUXvvhUJ5KTBhs8EZnS9eShyA4zTWTGfkqJuJ7a2htSNdbz33xFt",
  "key27": "35XfJSnAhTinUfbXHqvE2aQCvseDi1FT3kbtKFni4ZgKEeGs7w53KAd357XpAhCzq3VZM3FfGRLs22zMcp8eZaYA",
  "key28": "44ki8SJHHNnpSUPXu4NQN629Pdfx8c4srDyBGEZQXhNKEC4VTgzBWqjqVLwTEJcMeRRAnViWkfqCxAMNzoDfaQaU",
  "key29": "21j1a6RUMXN137WfSVEYHbtwca8TkYCGiyLe7BjmGcBBGJHsdnAxsDWyUjDiWNSBq7jPUEKVG7W8kPUUADYbwFQE",
  "key30": "2CYCD78zAK5zSq4iFW537xNraU74Vkf6jmEfdbpCrWoKYbZFVJfz5hBwf9LpitfbESa5wJsYxQiZnJFA6GpwEZUg",
  "key31": "5LwDr676GwUZAq5Wjgt3PXhUtAwB1x438U87gKJvLwEbjTZbbTj4nBCaQkMbSzMSV6T3EBiiFyLybGFddTXCRotv",
  "key32": "2dzQ2yBFvC1r8VoL5RQ3xRJjtx3NJjRKW2JCMqH5k7RGVdHV5LS65wwbgq9ZfjYtod6dFJZHQ81VHtZ74t1SFZqG",
  "key33": "3Va5C4fv8JpmzC3nFcibDQouAypgfqhXxmT15dtKg3SfKjDFDaMqFhi48jQeVCmQvFV33x3NAex8jmx1fDJjNXVn",
  "key34": "3bPEiu3B8ZM6h7dBAvSsGafBqB7N8RTLQFFbaYTe8L3YxMvDwUrwbm7tC7SsKonUMvLTq46yfWdcbivWo47hAf51",
  "key35": "51WpqzCgecVVUZYxjrXnpUcZyvKc67LD5w4R7o44Z9ZicT7GeAjvCvCepAamLShgWFeoNkBXfKjmGH4ZbKWpiKuA",
  "key36": "2u7tXYZmFmavT6FYa4HFcBJwj188Wzrhef2JMqKuYUPnBv1yDcd7RSn8XDd2S3MaTxK5yXYEVkyEHsDbHqs5QewF",
  "key37": "Dba4vJuSoW5HFsSAuLdu4TZYMwLsj7m4zzDdQRRfEZGtZ7tDRMDZs5PJEYuuwzYhw8d8kLmm3TcrYiVP8eKUbwB"
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
