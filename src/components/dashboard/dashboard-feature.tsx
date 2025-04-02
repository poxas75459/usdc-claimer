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
    "2gS8F29A9S8rMBQoxwNQksawyBt4XcAfDpdTqT5noadRhJMaQEwH92zk23zGCFCizsCntAc82R25hzkHF3NQ4o3b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eYhB1EnrbiG5VRHQCy2Y87HYU8VX6DpDkBWh8bnGpmVffvQBB9CLUEj4QznbXcFXM5uB9vt4Wy1vVNmfSiFbNoq",
  "key1": "4HnzabWorSPSb5JEXzuzZxJzq4n28mdojrv7BUfqiQGkaRYhECnorKR7143n2pmMAEdTJTFZMJdG4xz91LTHx6Ld",
  "key2": "4oYB3BVMzGAV85aYvLE7uNJsTF3ikiWrAjmK4SrU7jMjxcfoLhtpFz87JMLdeXg44NoqdfhKNXkxYjbTH6R2B9uH",
  "key3": "496pYKrWa2qq9m6gkSgieajVuaCNPbNCx9fCv8xTaDbVwmPrXMzerqH4cBAFWiZpfM5MxWkcF845VYoPMVb7rFSr",
  "key4": "2hrNgS91DXt3cjQrtmuxZ7bzxFjR2bCxK8KoFscFZ2aFWFHwKYsqmcDAkqsonawPszEhziXEj2QnNHAfRzm6WKLb",
  "key5": "RqpAzGfUE3K9nTwXWdTdho9eAUZQQCSRQvX16YoiK1VcLnye5idspFKfQCPqnAm5u6tkUT1bLwg7mGVFjMAAzLz",
  "key6": "3sxFV6acoZunyLq9rBitV3U7RDS3SWHNzfAVKyZZ2biPYUajPFetBpCkVCqxnYHju8BHFAw4o5s5jAgneP4qK9TA",
  "key7": "4Nnn1kUpLceo1MYHetBKaTtqL2WY67CLp6aUgQWyfkgyDU3iBZ7Nur8SiP7NcZfsWxyafHn5Ni8PVd3NDw9uLu5X",
  "key8": "27CHNxu8LPz7VkLrqprTUjzbYfKUErYmE2sRC478ELkDpoqBEcUAPeaL2dBGXCpWZJSN6m4RMN9fRrXvvGjd1viQ",
  "key9": "2eHSFRoQZTAXWNukjaeJP6Z2Qr29jDgFRxADoxxC3ZdMwFUNYx7sCUpj76E3cLfcBuXKcQ5hihvQU6bMZ543n1Vv",
  "key10": "3XLzFahzCnufp7T4TR9PTujnAKZg3YNBmckuxEWFos6oACEeQTFCtKSZkQRquJPWbarU7ctThHbYy5V9qu84e1kh",
  "key11": "5Zzj7bzGD8Za7yPsEQP6p1EeNrk3DzuM8iQi7Eyrm4LuGgeJTZQnjXHPnRp6h1tsZwupJqpVkf4VP9pQwSrSDjpq",
  "key12": "4iEBwyfuH2zwViaDkGyxdhBVTkRSadA5UQhvKFxVRG7cJhNwYtq1qe5QRv9dXUMBkuBpBPbMq7p7yheLBUcER42c",
  "key13": "2vzxJRVuydPYYwE1ULdiGQNWzsvRumBWqAkB4ViDUSgeuWpnsPUCm47KURUtjBAvdeFncYJgaVvNpyT41wKoaxJh",
  "key14": "Egq3r1QxS67PttEtUEqBPTvDVsVMbWKUYaaTQF2ndxLWe31ugFuxJSA74GdCAr4B1hUcWP68CgqdFWeQLbwG3yT",
  "key15": "3YYdybgTM5caPkLEGByCNvyZp9CfnfvujZ293JSuXpsbS5sWrS2fhYmLBjpu3oSLrMB9nWcm6Ku9s3UvWXauZW52",
  "key16": "3nwUVkUHexWvGLgXJ3BjB3PHgrE5DmqvS5tQE7zn2QaQjRV2BiBpicdUUzBRTnJ4EQNQfzUU44TvWEtPhNQijTAr",
  "key17": "4RaxGq9qeyvsijvu9jc4YYvmSPxCHvzVZgL2oToaXn2hETttikhixP7CWzwQ8zLFBfvBiMkMupBP7LhHZvGx8huh",
  "key18": "3pjezRjYwg3uWLeD5zEEmUkRrtcetWmzqFoUcbQnMv2BnHHUjy6fDCuXKEu7s8sZb2quD7tNjZzKmLSAaSYxbHMA",
  "key19": "5zqQUGMxi6jPrcvxePgQdLDMhnKEmbAzwiwxTxvj62s2yVNVQU8dJqeBGxkGaqnBvJa63w4tEvE8LkSgNXtHYC8u",
  "key20": "2dAPD6LGtwq8i6ypDbLZKpJLCwn1TDy2kb2TWb6w2BNVyTSP3AdPygDmgem2JNmJLB12T3N3veaz11ZcAzMApCT9",
  "key21": "2PHmKSiBSKjeCCghVMnWqdPJuNKVZZvaq14y9zjPkz1GZUWTVD1E343ZxRrFGZVKY2ivuZqEP9R1TGBaaTwMEnMF",
  "key22": "2urUhWJFLxwP48H4JQ5cXbwFJG5DBMVLr9N4W756RuY7d7EMNd9yJd4qzY1wY2R6mhbgVaaiuvtenUHSZikaHB8L",
  "key23": "kb23D4gD65iAFuvWttpsM5GRVUqhargtLthvjycKqn33cA15fVieNBjVxqP3ZccphSPJ6XRvFpvFoJoSmCRourG",
  "key24": "tgpp9mceWz3kdMQQorgqM3NNmueYx6J4m5iK3FGLZnFisEyDGzAtM7GrfYkj8x9w5MWRSjyYB3jSV2ZTUZPUr7y",
  "key25": "51bdkFunqNQpmksBDaJ9LpwESowed888ahkEy9fPSjokznrVbq4V5Y4tgw83E23aXNZeMAHN89rPYTvikyPmuNYL",
  "key26": "5SHj6vrG2FfB3dsSffZTB7SedgJZUkQeiUmMyr8jaz8JroNSBtVPV5bte2BaUSv9SEp85bo1KH5dY11TpuyURX2S",
  "key27": "4yVVZp7jtiNCSTjcX5P7AQ6hop3LnQDNHoPGs6JqqE2HVUkebnJgbqNAspguzYuDbc1WKPM45ZF7nVNzGYQx6Cky",
  "key28": "3p821vbPc3a51PzxeBzgi6XoGTiZ7S8pcB3VJdNKt4isCxRxyfzBusGHvYHwjjxSLrWkVVBUtRw1Hrogfi8dfnDM",
  "key29": "2W4whZ9pJtHFSsTU1sbHTgSzRpvCQPweVukR8fwAMHHmyLXv5kYWVF6WYr9K9S8PT6MipQjprSbT8BrT4mNPP8Fo"
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
