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
    "3YEda5p2y9JMwHCVuFrWLxvxvXBB7P2kNgk7TptVhn6Vr8oafk2hQkbup8urMsLGPLzsLQJKvQ7KJiUcwR7drMXa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27JFEFNXjNUogNYxBt8oWzM1YepZLTEEK9LXtv6wLE5XsFtLUkgUjAyxptuMr7cbe3sGwi2cso92CRnypYSRZcXb",
  "key1": "eaRNgDXLr2bnHykmxvpitAs3EwHXYdqPumWVJSruR3zVDmvqCf7V43ajRxWuYSxswWPusD6byYKFHxvsF2ktbaW",
  "key2": "2jYV4M4wQmtwnnRLU7ao89VntBY1vqmzdSn7EM6ga4LEcU9mZDHVTNmfZ4GYQSMy5bu89ck5xseGSGosYe9Hemks",
  "key3": "4wPCHKbsrsa6i54TxPD8viYzpRgRGsiFHKuuJrHTVxoKsfT2cxZ4v26BF5rbaRjQbous8rULTpQ8yQ5GNSQCnAGU",
  "key4": "tTstwtn9qMMprkRwCQ5bNmDDkdetPZQz29T683hxZbkFXCNzrVctVZ3jVxjUX7E9MTGvtnNo8yr6dkHxZVnxCz7",
  "key5": "2h3ZdDZmm854QpcdkmGrV2dLMykjfxi95U1t7E8zx9JRVqjDQQbekwaSZ1pK9Yvsg8kMUefMbyo3DPog2A3o1PWz",
  "key6": "438Hn8hNoqmHunvQnrh16rytiM1L3HMdG1h1jwdGzRtTRVmQu9oVenKbGj5dHGX91WWXqsCfXTmtAZgf1qDDtKaJ",
  "key7": "3xo9LLxQkrZSQwi7SfUFViXcHoBtEUA4rwYJe5HbZGCR1ERVd3KVNfzw6RuaZ4NyVxWH3Dvwk39zcARuCTSPJpHQ",
  "key8": "3v3GrWSGLDv3PfxWv1ruDX3G8KvRtwopbGfPdzD4GqtrJ4zq51LVDuoW8QgiVtjM12ibDRowGZ2EydXqnFJf7d1W",
  "key9": "3APKTu7nC6aPvSqhH7smYoWe2gPNHm46AHYEEvMAv267dR6LDqKzCKXTcZTcAL49AEZGuQdNiJw8ycU6SSEu7E2g",
  "key10": "2gPwWyt4j2gy82aRCpv7caqnCgnKyRCpYwgYmtomwKQ9j1i8FXx9uvowAiuNMseRWo3uvtgZGpKL16uF4Jqtq1Z1",
  "key11": "3R4j19JWYkZsecE1uPhRn4VKxfy9VrjrhhTonQNQWwTxTsRsCwzjnAGS5ji9EJtrvucPEMfLu5yjaeCC2FVvAsV9",
  "key12": "5JpBAQxiPi7ajfVJDt7fPQbWpXwReQjArFzZSzMsHHAnCoGBmmDhG3uwh3338PkfzXJ93AMeKvjJ7FUHB8r5iRGh",
  "key13": "G9B7q48Jz4eDcMYp7AwHYjr9qHNQPEKtAD1Yaz4w3JM6okSqbMq9qroXRHmxteStq5dfeGZ99Udm3BP7pqMrHrZ",
  "key14": "4deUGWh2Jp5fbDuXL8ko3bNt3gPxAH7DN8EQWk5hKaEwZeC4i6EB4DQEDj52137im5DjbDunuwaiTRA2F94Psscx",
  "key15": "4sBpSDtmfzjUf47jqW3ubaXcbiFSskxnCU2rX1m2kLtxDFVQv4LUSfAuyLL1C8UiWP3p5VrkoXyw9cR4t3dBxsXz",
  "key16": "2czjgzwggVeD8s9umFt3nopNgVJ1nr2iDiUcapYoBYSXfXNvxU2M3wr1C5w9e7mXD8dR6VVv198mq4nXwC1E87cQ",
  "key17": "2ud1BzWFGST4CobKSQ9EfhDAtufw2EdpdP7jHFqJULDx4vj3xZ7nzceS8HG5BfuuvNUZmpvi7NJKXWUoSkU7vKjU",
  "key18": "4kD16P97pEM4B4MYSMUt5abCqH1CCadcrEB3b8Y4BFqaQES92q9zZqpWApoGU8Rf56CmL8V9g2XVkzK75Jwh5P1g",
  "key19": "3djqjgmywFzvy7x92Lk8UCMY6LdGp6wzBcH9zz1qnqUtrFU37PCqp1oNbRbysL34zn4yPbRGh8jxxa2P7Axt2QaN",
  "key20": "2BEQSsZ7PwguW9s2FDqvLjzSgyBTSPyL7XK4i2CE1dNGT62bfu4RTq2HkqqgbEiQecN1NcSrsaxpeawYQuV4LJoL",
  "key21": "5cCz4Fed3xFWH1Hh2cbTgdpXjY7NVfYZN7UdccLok7qV8u6CeZPceUJezNxDLw5Kttbm9z75jkXEiTdKC1CHNwqk",
  "key22": "4cDfZhWAdsrRfezgQWvfhsQoccFU8p7hHgu4DricvBrcZ4ereEbV486djd6Z9HGqoP4PH2hNwAknoWGv9Buiek9p",
  "key23": "3rZPSEGEZhhewCFGA4i6FgLH3mPmjjCNEoP1p5zoXpEDuGMs6bw4jzdedH3uRCmx9VHSbsrcXAMvydo4YrF4GgHZ",
  "key24": "ajQ3jDzMdW6Z6pddmPicpc6cKiC2H4GnBRyhnqw9fDFhSKyhfKGZF1dweX3QYxbAjPJfDKYXa1BWXRXoT1yfUQa",
  "key25": "3JWrTrfijdoq47ZLyX7euu6pTGvDkc6soBfrfgk8mEtQRUoMMkFgtutW8aeP8gji5eXzmCqjcVAKyV8m1DUtKF3w",
  "key26": "5yXcw7BHvk6GDBqvmGo8oH8tZHoxZpcGKykzVd92QbhMWxJm1fQQMsPniGRZew6aNmHef5wYqyawCocfYkBKmf6j",
  "key27": "5Z36SCX1Xqj6YdxGp2dxWMzrUeN3TtqxqEoqm878vqD7VXZ92Jbg8tb75vesPAkCsg1KHUvkn4ijjoQcBrPtEPiu",
  "key28": "5RMdRyuCwafwqzqwcb5rXCF8czy8E8jKZjumtmpAJKXTRFzV687bTgAVdELQ4KfquCEJ7PnbfqFwcqwFPFBNC74i",
  "key29": "3i9MzdWKX1aLi3rtCsBE4cYvYSYtkJQFDRrS9z2g3vsjwRL2vFUDM4ndgVbRMYyW48qgyEThGf4S8DCMFdtY5NX6",
  "key30": "5QLYonaQrMc7bbU4ugqpVsg9GtDc34WES3Ckms9yRRUKoXYhfGj1c2pft4XfBP5oouWUrALQQWoZD6peDkj9iz4z",
  "key31": "4S4LXDrwJB6P2cCqNNrt2xjh7T8tLY6QBfKHwzyuUiJ95Zf6YMHBKB7RvV5zSbK5zG4fT8SHGBS62d4VeDGbLgdw",
  "key32": "4JADFF88h6eShbffSw9sontauoteLXhgvaz7L7LapcBDDCe41DANgWoFUUn4YrEjiMN4f3bUeYoKbQQRYPTNexZA",
  "key33": "5fbv1ZB34Md1DTg9NjzMvPwpbwvc2GRLL9RMUcvax2WP9mGEJMb7YmqjSxunQDUCTvKhGwuzaLictSYJgf1N1W1y",
  "key34": "4i4pGEhymoqgrTuZj4C8nuLBbKPBGvs5pP3TWyK7XR5rnSpKTRXmbYMftZJydYmJBRnTt8Ac2XSwR2x3a8KZ9NpQ",
  "key35": "5drYQP8yp7qfyELayk5Hz3TBzn2hfJN6oZHvNvE8CwuRwEFo2qUwFPzBRRPG5So7aA953VwfYKskXfkrnr1f28yd",
  "key36": "2EigHS8ECwctUkBxynCGpzRPqg1nxBjX43Crrmbfryw2W8KF1MY5qF6pS3GpM5BAXhFjnKAbbaUK5byuo3fpXL6U",
  "key37": "goT5uhZzGvFwTiMWX46N5EvSSaBgo51fGFxh5aTAD8Xkeo3EdXahw4iBZy2XkBQhSuvjDEbQ9ZQbmDq5tpbzp3J",
  "key38": "4SJf1mhVgcbdWBXeM6aUtPVS2evevw3mvwxecjtsyitzPRN7im2wHtb3LjevrXHHNYT1Hvgw8WTWA8rZk1pRrfQt",
  "key39": "39TJN4zBuHscPL2Nj6KrFYYqQ3xkmvKdEYtpht4BwAgLS8MdmZm9Xp1qoUPmcRohvYAuiHSPxd6MXkd4z9jE4FSk",
  "key40": "5GuNEvTXL4mm6cGvkNND9VYUHxN274CtrSXmiyctUJxcf7M5rW93F4Q4byUoVo1MQPxqUsn62KLtu1sgVh77n5Z4",
  "key41": "5yzUmp2LzRJdjGANAvgUhv1iXU8GzmcozAvMgsrd9Cw6GKzNT1RKkpfvbxe9M7wVnyTWj8zKZeBRG5G2tNQ21NCH",
  "key42": "8VBSTSR1d5x3eMQdmx8f92FaQhMQv1TXU8aAvpWNG12tY3t4HNUxcRotuopn5PCiGCzHg31McnP8qpdDjDmC3kN"
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
