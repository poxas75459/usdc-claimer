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
    "3xo93qG4ywidqsnVU4eRh49YDURud4awABtvNSoV6bNttfx16qR8kE4CPoSadqQLvJT6bPiR3adagAWYgkwWyCTJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ax8jV8wJKCzZ3qPffPFb5yLBzXAAuTLkTupSd9XGxWVRAHsRUaMg3hhgJK4Rv6n33mRnnbFhrFhgRei14sJiE34",
  "key1": "BVDxP84p8vTjyQdzvZBQq6GQWTzuyvJs99z4eHk5qdzDSK7JXFtxJDX8EgfkbxkBRprZhC6AeNo7wkQ7nucryJQ",
  "key2": "3JKQiz9vPzA3HUX1DexkELBesccxjScFbM2uDDoijtY1DvUckEJGGSx6Wu8gkFzjaSLfKP3gQFBowQPYdUZ4fLig",
  "key3": "3hXtM2hMkVxv8aBBf9ovj6HifyomaEYAnzkCj7S1behuQN4MyHYonbAMsjW6naKijxkQEL1KcAZLDAU98bMfuRrN",
  "key4": "2ABQ1HoVQd5hXLxRdiED1eQwfjJZmrJwD5uHm5JVgwJPSkPgW8962cga9c3EboKyYr6qyxTTturMKVy5NP4N2fEs",
  "key5": "RSYm3g84jyQtY3YizgDbv6Ufz7wQgVCXdajaP98W5G4bxfCz9edsfmHqRe7q2atWGxhkvfk8qLbMFRdgSh52d2i",
  "key6": "2u6rojP9AiVDNSKcPw4TRD8QY3odgtWGvhsXCv2uSXrJXr3y39EVzoYGhqqcowxvocZXDA9gC6ssXmzmMj51HKhj",
  "key7": "abeoryE2qLZCJSSrjXQF8WFrVboVJ6y5kovPmG2u2gG85xohmceGosbYVKFF6rBfjL9ThrSxzW9ZrtkVn6Rz8kd",
  "key8": "4HbeVHCwEQP37XXcUmv67hATkdn5QEu7ND3fzfx87Y5umTDVVVUeC8eAMYCjTmvBLGqDueL4RonLUSV48joyJoDP",
  "key9": "2NBuVetNNryrPioq1v7AWGbjLqAHgCDbK3gsbvwF1HgHtshxk3vaiz9jNWdyKQHKV2deqHT5cxebGyJTSeejqmJ1",
  "key10": "RMsjnVRyVJfGFGob8CVp5JuHZ1FEmbk9AQTf6WkzHYM5yuGSmrSeDw11EWH5t2umhKEVzB586CSizWswseDxUi5",
  "key11": "4N2YvoxEErceZde2CSf5uny15rkBRwMG7PRJmBm1tipBKQpTGL1Sjp2HNE7ZHsGU3aqHZvcQi3fpihWXnEUKCBie",
  "key12": "2bgfjmPJUnSYdhRSU3NPYmxWhtxExB3AhDEdg2MEQhZ9krrqwoYE6ozVaB3rNWSH5oHtf1i9HRptQvymZ18GBywG",
  "key13": "3nrPRQYhGFuNvB7GmLrzFzPhUn9fR84aeJrsM5gp2tqMc5fWJMx336rGfssmZjwzr5o8vZBNVweQXME1qFtcbSZu",
  "key14": "293HgHmAwBYTLQm17RK3XNq3n6kHBhNKievx3VkdGbppFuwRUUUAyK5hFTS2Wfm41BKTkBa85QwDZ8VX7FjrKtnP",
  "key15": "5kDhoWdQaHmWWuPA28Zb8acA3d7MxqyJqwXjZMCgg7xj7mVM3DzCwM3AH26FQH5zoEg5kgEaJbnHeeurzxpHkGWD",
  "key16": "26HXvAwdHTnYcQkYh59Fg3iBfhizDaYojAgyJhhWzbjZrYBHVv4BQiKy6opcKsKUBdAV38MoxPNVpavZjsuaq3X4",
  "key17": "5q4bPVVwKqaxXU31VftAeM1QBrvPsSkrgafgMbRLtLKh1y8ZEUQCsc4VbbHW2r2Mv6hGtsNjh7dCit5UiTkXybN7",
  "key18": "S9sradqwnQQsyvr1SPeZNJaCLL4iRkFvqpoj56hJ4ocypjedQrJihF2gj54oX4iQfukeQuDdebxLWuUCvnjFSoh",
  "key19": "31kE5FkbodgdbQQ4GPwkQH8bGPMcHa5SPWG2uoWatEkrc1nFTUdeKZzbLcZ4D5L9az6JENb2fDpK3nVB7Y3FLsCT",
  "key20": "4rKhnFmRUzevAUHo7LAR8mrdeKLZgnvt2u7BNri74svGByeh4aFn8aTBNGzfvcPfzfBw6m36db9AEz4YRW6QN5SV",
  "key21": "qurpAqkVys4HGGvBRDWxpDJHwBbPFT3UAAkMDYd9CD8XK2v1Ea9CAoPYppY7erCiPRhDgXS8VYy9eSnBTMjTLW6",
  "key22": "FbKhmnfGbpiayYBppSRYmen3ipty8tNnBMCUDWzzMbdiaGMC57GL6e3tEz3uUBdPBLmymedA7d27YU1ov1N6mw3",
  "key23": "qpAFKGhaBEdNCxF1S3Gsrc5qKV3vq4LmF2N7BiJpEdgqg9CSkdqxSYmgdfZB3F4wUwKfmtqwvH9w1nQN9N2C4MX",
  "key24": "4tdsntY6cUbow86z5Yia8DZ59DCaqPXWjDFo7v4ka1tMF9sPnfMrgKdQKA22qNJ7dGsJGbZ9YSpa6wQLWPxhiezo",
  "key25": "4Teqnvy8XTKBGt7gc9Bs8jYFtzATjDPwSfaNtKVx1DeaBWa4MJEJuTkyQoyg3ESBHp5v4BcpJqQ3DBwgy9gLoYq8",
  "key26": "67csbj1JVByrcmPyWuuFYTcr2GH6y8tdNeEXH83zLcDoSjnVz8fiJ7DVPGDskBaxj8hpJcmg7QSnMFHNn12Qeo6n",
  "key27": "67pnWogqH8doMjiNV5xTfiAtgeP4wdrjChKugYi7pbA5eaYviGjgKyfaFRmJJpnLkZtKzVZ8SpYN2Bzyb3k1unAd",
  "key28": "25JvdESuQ45cprf8vHrhbmLqzCREkGQJz4vY86M8tBworKk2FZpvgrp2icEsgg7WMH5879YWBh1U7nAQmubNxqTR",
  "key29": "5nwRQhAHgGgXKZ8LeZK89b9mRqXaXxheQkZrZh6rWoJijYCamJrVWA556WbXdXFxJZSHq6aD4QK9gpcdipriBoqa",
  "key30": "5H2gghLeWDSLcZZ7GrGytmscBXf4xFzb5dm5QnSSU3gNEVQpjnjVumXga9t9dNvhabyZBv8ni3uALFTqWXMufnyx",
  "key31": "3WaCkBDCbYE6NcdEt57oUQhjUCU32F5dcAkQNhmSPR95Gt8CwjLhhDHrjgqdFQ4fVyjHKY6Ljw7YACC9NQocnXF2",
  "key32": "2wr4qJGy6zn6C8S6P8UkvVw3d9DxRYuP4nV4h4Mj3U8HiesLQ6MHq5Vm9sJdLPoJ6yu8qABUba1WqAMXSnptdpUW",
  "key33": "3pSxLjXVQGvZLLarrvVENvJkqfqunX2kirEqf7CkwVWFvN82NwU7TtADGhhCJQT186UZhS6JBGeAippHLKo6S44B"
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
