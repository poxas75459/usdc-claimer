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
    "3eKfNPFhLNR186ejG6bMaY1ViSCX2Db5QaAyrUbs15TsYQTHkVfya45DLYzmC23FcrF9Q2Y5dET5XDFtGQSVM3cY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25T2y2GrHBhVJcUBjuWZuEN6LjiqLfQ1DK6twvodqhfrTdAETLdVnydJLPmpTPZQvPLdNHskoTgJMDcHt388jxHP",
  "key1": "3DGfUk9PnWmnfeKwiSi5pkgSSA3Lqzs5EEQ6KTw8iuWEbDGmzpSHTfBGHNzg2sXHa9cn5FT6eWfttoL2r7G1jjMq",
  "key2": "3P8Qf5AVbNjXoKRfdmcqZ6mKdsUjGJxMgxAEhvmYPsUX86qyzNSyw6qUNf1qkWTytTgwtvkNW4iv2tC2ayZ25S6Z",
  "key3": "5bLDePeU2h2YySvBm2cw346G2gFxXQMnW78QLWYSzCxSSPqnzvYfLNx5ugNZAgZTNrLFQLwMj2vuhhiZyVRWGReE",
  "key4": "3R4cdTuCLot1r4JUjradXNJEDBML2pNNHnkZXWTy23gBMS9FnP1LSR5a6DcVNwupKqj5ccpdQRYMCKPfVWT1pM9z",
  "key5": "4ZEjtRGYRDPqaTXxzLHN1wo1sfj2VEGkJSHFMKJNyD31Ao2zUA8ELU43NdQaLCY3eiKhtPDg3am41BdF2dkP4wTF",
  "key6": "8JjDvz3huUtSEihb9jkG65TCrVQdVtPuyKdS8xe3j2YqMrmdgPD8NKMowPRFk557KJcRW4WY1tJ21PpFeqZ4584",
  "key7": "nYsF1PfeMFXpHpQZSoZ8m5q3vSHQGurLi9MsWwsCQiEdvuhYkY2DTrLAwZeLd1oGBXxnRe5BctzCFZGqm5DUHtN",
  "key8": "4p7GjnaL49Sr2qLjKX2BFtgMhzzJmPnRD5xLAYk7yKQsExAAMH3optqpJRkXvA8Xa2rtxMmqhbK6tCHrKp6qVqun",
  "key9": "41tLRnph5Ch1tnQZuKEKbwGsTYHEu83iTNKsFbqEdBxYbotMKjLSyJdtevLnqVbdNvfwJo2GEYuxPQmmDrwS4QMT",
  "key10": "669jJh2gT74WS1SywqyoicJeTVQyUf6Mjwu3Mn7tkMKGjnZo9pBcR1NugAiY7aBjaWtLFDwq1QQ7tbMPR2e99sL8",
  "key11": "1NbVopWU7sBWcq8it5LFFSYV4bxG8ZNS5s2EbNZ66WWSf9sTumqHQBeXBupxWyBdNKnorfh3BaG14gfFowv2hX6",
  "key12": "489LP23Pe1Kx5JZHdW8gmz5k5NoXiXbSnjhWma8UhYqZLEQg54D28QHDwpuFXHT8PT5x1KqcShLDDKX3kbaK7Cxt",
  "key13": "2Cw8FDUZoHn4b2g7k8EwMYYcUSTHowr8ZR8KLiDdY5GL8WcEVVvefwuweXn662G5vMufGpQCbqoEMYrKHsgrNhGK",
  "key14": "4rPjiTJQS6M9YtEAxy8axjp4CouexbqqEgK5EUSV5CgFzGtg59ZMmejvg1L85q4nhGisw738728buXU1B6dUJryj",
  "key15": "aUrYhw4T47XqftLxJMRdsSm8LXJ1JR7LFGsdtSKMEedC1tCYwTpJ3GKVbYQVnDstd6sQaHy6HbbRKv1vVLzg5Xt",
  "key16": "3Yx1526fb7ukFmMBtN1G5NK9Ts8HzRZTMzQ8za6fJkm7CBw9gwTRtuBVh5txBfc8Nok8R1yuMv5V3J13zV9PTyA7",
  "key17": "4BGPWqT4wic8gq1SQGr9EDDynhyt4qKcQnhK2G4Qssvv3BknMXyEoav6Tta7NrGwbpnkMefgSmJ6HFeHc1D8YbQ6",
  "key18": "3ZcHrkovmPHrW444QBWxp1T6Mj28bF3bfFJi9KX6VHStFwZ9AW13SzruRe6SezuZ5V2Kome7M1XchLZhEKHJ7vKF",
  "key19": "2f6S97wF1KKdLXGydT4uzGVrzSNHh1oaz3znw6HTe96fMLwDBwQ5ZfzHqAtPgGiU5eY1mbGtvkNowEjzHimUQqJ8",
  "key20": "234uoSgnXVXZJRqkQZJz7zdiUnn3H8ysooHvLaJ5Y3Yrh1uErvp3PQPMv86qQ7JA4pLSEwWVdStpH6Jc6T6QJVNR",
  "key21": "4Aa9HggitJfHpx71bddE5LbAY44pskG2yEqqs6eExAaXMchUNNHvmViLXsbHAAuJhL8hy7oFk9EzRxg8ybugPe9m",
  "key22": "4idHKpDyt5nie42eJWJxHDwtxSBxk1SEmejqMQch71mgkv19N2bcXVATrnpgTpXXwptdt1pkaCwvJXCmD3Q8uMzk",
  "key23": "3GAJ5wY9LdmC8t8LvdCFwFx1WST2CYdYZqmJrNxbzdoSxzq971kuCNdvoyZ1NNuUsQMt8hxzZrfLZKjpRDDASxTo",
  "key24": "3ErE35R29aKdgSEiZae9cdbCwJEJy5C9wa79U4fPqG81wHdKiivc1MEjg4WcC6MqEqxFEUBHmxhGQ2DksSmr6yL5",
  "key25": "xG4QiDuN5t8ECKJFukWG1VF8RW5E1yeomPdLBdwSWdVg7HCfoEKCHPeunVEYu7hMSJKFr8gcRQteWvosDcQjTQx",
  "key26": "2ajJn52uKSveZNuo2x8QqYiSPqg5KdbpnsbNC6bQUviKvah7DrEnY2trdAat4enK5bU9AWHdkdwv9njUz6r2MYvx",
  "key27": "4bBztdXvCWaaQc23kdaWAAvTfpSJ8jvngYWvvjz1Zx971Fzu5ULK4DkUysfB6pMET7aGLR4cRjedyjgbcNsmT9j4",
  "key28": "Bki4sRCH4P573iXNyHeQj6zHUYxzWqx2pjdGTh7KXcLnCnsWzjRZS4V1P2UxvaBCQB4y8aompEDTYMhHCTKFeAc",
  "key29": "4bnEto4niEDYkGYuLqaXmK1MfwfaQDzB9Teioez1JxYwVcwJ4ULP1b6G7dWNCxdc2QztsqDVYQNMYxW7TjPEeiJ3",
  "key30": "5iGYyUGZktNrgciFUWBQ4srvhh4iXguHV1FEDBNN4uoamX46dAKvFZ39bWzLeMD7SKf8eoSGpmWetmjUsDBmneas",
  "key31": "2TfLCkjeKMtM8aks6iDH8eJ243eovE5joPE7dacQLyMSH4hCt8u4gUAumNe8vdr2qzM1mytbT5wymfn2X32WjW8D",
  "key32": "4pDEHBCiPqcrtDvwsS9nr3PPD3ctpAYH5bM7yEMyba8FeTMUaprXrnhQonEcNzLWiehNV9wf4eyvez5GmNLNKXYX",
  "key33": "2hhrptcvMQbwP9EizwTJ2HZVf41wuQb2WqWwKGJf9J1XMuxcfTM2FKMkAGWxstuJ68bdQHp4VEtnERYqqfV321M6",
  "key34": "3VzktyXv3JMhNWnnoRzkyj5mbgoA2d9TxCUGZa2FgfW6ZtGSoAf4coFzcqr4aKB2dwDkG7a1vZgu7vZ9a8BSNn5Y"
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
