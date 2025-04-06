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
    "3UzjKLK8rzBR39iPMuTo2T6tvVK93CyyUoczAzk7EbVuatvGQccg6GYBrypAjXZtf2vkxdedihWZDx4F4fE997uE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g89Non6E9afrod9cJUzHnibtTPS2vkgcvhBHdUoxeWXAmfuRbxPgsBsjtDcV3GwEJsMhJ9pNDxSPUopf8hNzRf4",
  "key1": "2eueG5H1UQEauAHHiLaLXhoXT8HASHbxf8mMnP6huSWUQiAELL9Ets6APYE9XxruWAVjMEaFbD5spV6RBVqCiZwY",
  "key2": "4ZdABm7TiwidxK7MrrryaEWEQqLpJ9FmiVAWur1TDkuJrV8C7jWuxct4qWzGAR2LeU28aosXHPjc7DVnG5nD4pzZ",
  "key3": "4bMpiGq2rFZkQWWzZH1ta3UqpytiQ3QDff7CoRDEwn9WG6viTpDBngS5jLYV2UQxBmXcCp9t8Ldi6N7WBawwRCQw",
  "key4": "2zZx69A3efnKGyaUPctTAhg4Vv1ddAY4Q4SnYiAdieqxAfthXYPZYcccq7qGBPY15wDw3uxgbgMk2CqHJBePcBuq",
  "key5": "mVi2vQkwyVKW5g48ocETUhMHMVLcgFnS9cLpru2kvotw3rDMwdoAbHEs2UXL4wRTKGUJP8koZ4mCNBMV6U8CmqQ",
  "key6": "41gQ8xECCTw5XsyZTmEyQwj9vhzKFCYN2pKSVTwieMLxmoeTZEbKrKpBCAB8JUyecj5xhFfxbmoRTJaRLEK7LuEe",
  "key7": "3KjqUMVhn3Xkh2eNcoTJienjbGJrzJmdUVV92KsBwd6FCcbwnS3hxuSknxdg26vtmWyv7tZtj5SHaNVsc3kjQZbW",
  "key8": "5wh4ZJtGVmVbGYunV8HRQ3WdDcsw3ohEHGZVDYZyEwppSF9mt542LrSMK4ouBUQe8vwJedaE5bna9Nn7KAq34mgg",
  "key9": "5zHmKK7fLpraov6UeoUQq6Hwvi9RvzjuTRgzefUYiKDxmrmZ3486EMeY4b4BzNH7sLcGXA612W7jsqxXV19GhBqs",
  "key10": "54CdumuLmzZs2LnmewquaNg1DNrNp2bdb4dDgvzLJXbPx612uigwFgSQkwLXSTF1sJ2S77ZHvTFAg1EZK4fw3xuq",
  "key11": "4EJAiYUCGCpPBXKQsWwVEiM1yR32BqvHQpKvd9nv9iVTQi3BpQpcpMhTM2NkaLrLVTWTuNeBoejwYGV3Lq188asZ",
  "key12": "5DHy2qfVk6ck6nZzx2NKYt6TYcdQi6oeb6oMXrM7DYtSTqz9oBR4F4Zhe6kvKUGxj5hnAQHzCrAiNwK1TPfbgtPY",
  "key13": "4KpzbT7WLvMm8gAkVHHhwqb14wavbW1PW35Dh9i1X4uHJBKnt4Z3jnnn2FaTgZuCvJUCPSwMJfR71o1mSLf9hzS4",
  "key14": "423k767n8LpCcZUtVHRi9ZkA9QSwqEVW2Nh64TuXyVK7M88Mj79yFimwK9tqWGZTu94V1Sxk1AmcoXPXkuR2MVAj",
  "key15": "Gu66VeDzKPaKqdpy7Wu7DAK95eXEZdnvgn9X8RKxTSnzMVno3bFZ17rnjHZvyyCPvb6ajpphqfCnVg2YVtcAhWh",
  "key16": "4Au2WhmaXzvXe2oFNbA38J568s7Wb8KxUVEwS3W8Nf92sb1Mr3DuXTYXsrQok5duV4unsL1TKHfJf4MBF6VPSnvh",
  "key17": "5bx6qNo9rvyFP1MRunv1vApzK8T29AJFLm4k9fTtA93skN6DfC1tLfyBpjXrFxcGozUYGRuAg3RJ865GNFeCdYCX",
  "key18": "3N5bs4MqMUcCDCEXwpvQUkTxktRSjmdtme8K38uv9LGH2kqiSrE3CyzwzHrTPvbzD46mP2vaq7G6QkoZZH14FUKS",
  "key19": "3aYRUhtReaC111TbGSvZbw3jimnLphz3jwb9UsMHCwzE6BUJENN5frWRtxZfMAsrr6xftY4S4c9DBLnZrQZQAnjF",
  "key20": "3oEZ7t1fup5ttrc2KFc4ckRdxmUyJrz15JNFWXgDqqo6xGeUa9btF7Uv3VynqBLx9zhrxzzbSaweWkD6jnWAHBYv",
  "key21": "2CyGwZE5zqqMUCsa3tJuWWzEB2TREcTErhWKxvdWLwMzApcCd1iBcGCBnxysMagEeyxk77Pxqm1dMd1qJ9nX67fK",
  "key22": "65asS9ZdMbrywnVf1KCv21f9q6Lvd9sDowJdgH8Ajcy7dnQfFBqBFXwPoiWZmAsu7Q2PsULPvNk4L7eB4G7nygU6",
  "key23": "46QGbJXn5DjcZyjQ2XJcDXus3NMSX8VvQAa6ei5NppJYdmsYBQBLPksEAAQzUbg2odCEkoUJUHT7JFqb93x3EFQk",
  "key24": "5Qi3D8aojpBhvfR2gSZNw6BY6rgvnScCkCWc3LoTSTfh3xcbvHG5CBk4zdR8E3eLHHukJ3dkezoGYZD1yH3YwBzp",
  "key25": "3vP98z7rkmZdi5kUgcB1ToWEJCiqvTCLPkQuggMu4GokMjiSh8Kid6iA8axjBkcbDFcjbY6cdREfuyD8j9aGSe54",
  "key26": "2htaoMEvwHmR8Lrb71eBdZHanFYBprmzEjVPNcG63d9G1gjCwStJt4hrsuPF8j62fzTXEN65BS28GCXWATRT9w3N",
  "key27": "9t4W2xJiySe4jhFgQWAyanMcTygV7MvfDQbDhCejDvcb5R5nYhsVt3rhuv9NYV8wGX5ZPDQofH3BDCcBXpJsJfH",
  "key28": "2w9YXTqLdLCfd7wQdCN8Zb7pdL2QKWtcuYuRuwBwUF2zmkHM4rkKR4fvXhs5rEMkWpdMC72cEhCvJMHFJb6tjEMj",
  "key29": "4tXaLvJHeijjUrVDhu8MUeMzGzxZMBGYGDG6Sg8wAxDETkR8CTkBTJJwJiDSPKQGuvAm9qQNHr3oFsfbLNQ2Bp9r",
  "key30": "2reFhA5gqUrcL1Dv7GfXXZKTAxfP1xPj12PweWESLDNYKYdtxm8rn8gh3kXBFSs5rMLX7N3uHsyu1X4T2sjvjzPE",
  "key31": "4h2BcohxAgH4B7zpLzp7CTGfUbwB7EirTYDnHoPsLBEnWk751Lbfc3JzpRpmQavCsyUrQbVPL4yJ9kT7H27tHajR",
  "key32": "3DBuVpx7GJ3Y6em2m2E7HQhKQf9seGatqPgJavqbUS2a2hhKQ9WLZzDTurLpsMECDT72M9QsvvTuej8WGjFP9nU6",
  "key33": "3RTCkMa5CV2tWmVe4Dco9Wp1WGhdtNndrJZ8fJnw8ryUScMV5t2phQ6kVWGj1DorpcHwHpe3Pa1W5bcBQKXEZ2jh",
  "key34": "2gFQ3EVN79zWvKyaC7AtJScZdZt6zt3LAG8LZJpw9MQZ4JozpmAUH87HDb7W76WAQnB3nFwnTVBk6vFezt7ji5Tv",
  "key35": "2cyWtdJ89CvzZ3zXG3vvMvr7jzLxnrAwN69HdXpQozAGLh9FRSvBqDxuiWa4AufU1TRRgB2rkjTGyhAqz2qx6Cxt",
  "key36": "5yDZcwWDhb1xzSgf6bsEMcZbwk3rmnvnTYfvpbGGRhryW2Y9XTjkJmWHgzxBh8waNxF42u9MxZeqfqL4xf8M5z1D",
  "key37": "5V4FgBKiFLQuUsHUurYoSitu2yZgXvoUvrCLhYqJP6PMKHKZSDBG9A9EBUVis929YTWiXTfLfpEybmWbnmqM68n",
  "key38": "yrSFyeRLj1zP5s5bv8C4t9vRRmpHtbHRvnFDwLFt5cQoP2X1w29JKg21J6w1o3H4mumk31ufPDhhB31E8zSWjSJ"
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
