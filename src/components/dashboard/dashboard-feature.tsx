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
    "vCprXMq6uF6uvVZXeVoDY8szG1WsyeMGFkD4NJHS4mSD5Fy2PXvKFTb3dCZdCfkyA8g2VhUBoa2ydVeCEqorJsf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RpBrLRDxwXVeciDoSdfaxMqDv3YAPJCsp8vm2B9E3WtWUz3GL65KBXi6yDdnbvDaccmh1BvZyVv6ZzaVB524eyC",
  "key1": "2MG7Mb9kTWci87nPSbbrdLYTqi4aVNwzWR3821E4VdC1uSxaxBVkZQKwX2PpsXrb2B57Vun6SXs69is4B8VdrwiY",
  "key2": "4CvJVcQ7nU9EzE2Mo8yxaaUqeikQbTYQwPFep53zB4JiYQofC85Yazm9CGo6nXdUrLAKbRL387zNk2aZWeNMkXVw",
  "key3": "4su8iErPzm9aRQg4dLARKhSUFW188qScGcp6rceYzz1zi9G2x81RF1ovzpYcjac9p3okRYmjm45HC9MKnc8Gc8jr",
  "key4": "3433ppQbAGpZVFY7Gd6gqgCbd6P9uizztxLnmgp7D71YctdLTMuNNJAUTCHTth3v39C3RLaF1vhuHfFAZjusEncC",
  "key5": "2ESWy1KYP12yKL2WD7BP1j4RMzyXX6XLxj4cqjf8VBsK1YFZPfbhWm5jaBdsZiA7C7TFGMohttRGbovjN9rmqq4e",
  "key6": "4MoqEuXs4DqGSK3tvgVWGRd1hXoxcXtdkrLyQdEjcWMrj56LMRmU8mn8vy2hKeVk2JtBVv7mGew9xc4ivoEZn1yj",
  "key7": "569UG88ZSxzNT9h7sDRxN91pb5roGS6dHn5V1A2GL7V3TrjPjbuMdCzaWB9zPGFBJmy1uacysKWRFqe4irkCSyhE",
  "key8": "216mSow3hsucW37b76h3ovoS9TqqDPpZ39HiyjFmKLbac7E65XL8iL8FuBqqYtuqTNneeJQwxFeev7uNU96GYijp",
  "key9": "P99Ma8UkUZ6ssHRRwe5ZxaxUrJjC2325hRKwUjJhzhjcWBGQTZP1GBpBywkum3KT2haUeyDZ8t8mYwyhtu43bqe",
  "key10": "4TxJKSZMGCsTeykYAK6xMHMi1ikWEMtNkvmAxUdP9T6a9hBotMMjZzupx7qEZRBV89TC1f5drJ9ESBabQhBDoJjz",
  "key11": "2DsiDpJ7nFzwNa1tDXiZfLteWDYiZTmjEo7MF3QojYC1o519Ti6WL1bBT86EZ9jcFWhCeYTEDPrFmPD5rBDkVaY3",
  "key12": "5pYwahDSTQ5AjWnLXey6mnZiFg6Wz51nGCFi3LSng5mjmjUrQoCr4YdH2BRjCioNXCEHk6vy6u822RsYqQ6uR4Vc",
  "key13": "mXUUEY5PcVHYyoRM7mYVFnww9CeSPNYbYubE3rhavrY8n23NQvC8HuATKivgMyr8sKG9y8h5sQ3nMSxV1RWqHPn",
  "key14": "5N8FL78ezAKqemUAg3YreGw68heDd4wqJaqTyRkWsKbW5kDFqrqoxx3spZ25qrWLCKREkyV2WVN4aiM2pvgtcSMS",
  "key15": "5fF48YuL18ro8BHi3uAhyxWPScenJe2FhJF766fnbdJKUK8gvSgya7LN2zPkJysZqZmYuoJGuQ3fCC2jGGXsDHW8",
  "key16": "3shmSh76rbcNUsNWxDSU98onyeCUoyMNCfSCwHiz6RNfe1R6RkdAAG6N795Dgti3YhAuuy59cdBPZK52hvovaGMK",
  "key17": "4SaucM7k82UdSALzwigT6m8GPLVG5iDTDKH3bgQfKxDDvjTZyKc1wzpaXaqEBnrty6urkMoSMUHK753nWvHxbFM",
  "key18": "5MRM2wuD1xvrdqA3ekQqRDPvELY8J21He2P1FkU8ZiaBYxEd3TaArDtP5y26ptMNb9cM5yfo2wW7ozD8T5BjHpWR",
  "key19": "3fNykky5m4xZxqoyi8HSh76kouENtrDTsp23dgyTUaxsNRZUMp9ry1Jidkwd1v9qSVJfyvE7VCCBYG4UXhWmnWC3",
  "key20": "3MSE9KEP6mc7SJsZtD739j4zeAZKmR2Ueukbocxm7YPGy92J35pdpoiNMTzfpfZrAxvhLLbyXXkYMYqbG2dwcBiW",
  "key21": "3R4CeP4Rd8WhLCshTnfn4eTCMtw6kb916cnrh9USMfmLVgsP3M7Ww2MqWchYXBAS3bh9Sx3wGEYSVcY4JRqQNYMg",
  "key22": "3iVSSC4txAaZczAunvy5yDBgqqX5Vww7LRRz11XA2RAaT9o8Sz47DSqzYM2vrxB7hEEZmDv2KQf7sWTuZQcKQVyD",
  "key23": "2PprRRBh4fXvi3p8cjFcehEbxDDc49AMGsBd2P8Wzydye9ZZDe3R7SyH44CmDUC5VvUTZMb5wMcLoGGKNobV2Dee",
  "key24": "35DbeuK86RY1vZoiEcQhTGNNs4jRR1k5Aw9bgvVkBtJXSKaS5PtKPW3C2m4vS8Kbpz4HeWVUQXSHReoTQrHsAyd7",
  "key25": "3nqTNiunFr4ByCnFxgVBBVkh7gm9bC4JdtGvBnn1mQVJ2kW5YU1XL4j6xdeRXcnsSG2FfCCBqq7wQbUQdiKPJ3jx",
  "key26": "xDc4SX9RD3ezfsYgRjKz2prc5Qhy7eM4H7FdaEEoeLNG38EwcNCjjVHcpThmxNSLU8cZXhwR3HhvM3yjUPzFTDS",
  "key27": "mu6t68ZmZg9ipsNUCTdNj4rzGxKA6z6oK52KqfyxjTfzZeNVSWGDEEcYkLvCF8qeypbSJ8TyxWADNGyKaPiwR3f",
  "key28": "2FX4hQE1mP3Y6agbVK92cPr1WCcyv5Ws4Mxo98GwYSaAw9vmT278CP72zL5iLAhE8NXnHJMDCb4Usp8xFm5nHewn",
  "key29": "5Rhfg4Ybm1LciPcpWXkqcAHKy4ctCwCYUWijF9xZCKcGVFPoMNgUKAo91QqvDAhj1zbdtsjnL4dHK6LYehi5BnXH",
  "key30": "2YqCTvNDjz91exTfz7zS6TGdfAC8UzZ8F7UXhunGMYw7kLSMkhHtGmi4NA683FoL4yRDxx8yydG2ytnQn7JDu6zp",
  "key31": "4MZJN9X3xhAeYNSTxomikR9p38u3J9YT75nTKGJy1ui6rDSN7dqZxFoXWoWcLrTw8y2rX1adnFdap2JbtD55mneA",
  "key32": "3YZuHjeGh1C4rRVcP9oHwGVWpxgGcNvUmuXpV3CMT9LwjMBsru8peSZRzqhjfRPu1FXrjj7Ricp8g8XRdJDA27Px",
  "key33": "4AQxbDBMk4WTM3CVBT93jrdH99P8TyaPwYoYMBA6M2dpiFiUHWhbep5KqCHJHCCp5CuJ4rPSJ3S2VgDsmREjqzy7",
  "key34": "caLKbn8MUHF3MJkCYTcSt5stzAb8RHmxqMRFnrmpL21notnqaRocEWpT7kRtH8twMXNpC5mK1ZGRLNVBgRYL9tB",
  "key35": "2Mya77C4DCHWCR4aoRY9tFrq9fkxPZX7ufzbwJaJTgSUHcjmF6k86gdgZVhY9yA7nyoNek6vfQds7eNKRa2kwVjP",
  "key36": "2KtfBBtFSvAKgqGw2wbM6KNS7ZAuoPctzbSQvpSvEqv5i7fF8kUwUjHUXq4MwWs59LD2db46dV62zaqkCq87uNEt",
  "key37": "pyLiw3DyoVFbgM9gYSzfv9AT3ngpaKhyyw9MWmiBGeLD5Re2du4YQ9RqcGjrkvpoesvcnLNsPtpTtdgVHTwT4Qg",
  "key38": "3VS5tzFfp6onusog3aayZpNJ7XDHWz8tQD3UPLCe8p6M7ANhpApaHW6tQ7HswH2YDqTLG5WhAfgdyTk8sNcwuobc",
  "key39": "34bWdarajjiwfPzrZ3fUNz3J6VdVQ7kRf8XbaQNnHXQ99D5NMxv23tpDMsxBMcW4cA1PGTRK9cQmBAiCkMREwg9h",
  "key40": "24YBCLdz9ndf3ySSG2Vubj4HipmVgcLRVMFmXc2ZrYuEaXwnEwvj8VhWnR9dnafnNPHPnpqBhYwigXm8rPFBXLf1",
  "key41": "f8GobzET7KDLJq4AxWfujDzPSPcy9YgVwWTdmpHk1cYPgQMDbuxZCdNNGXiB24nnJf9F32qjEQkZY868i8SJ2Nh",
  "key42": "4JiELpEBcZo8BQX4d9pWkvo7PoNaZNCFcbE8r5hWRedoXGMNcKTkXHeEL7N18uCBQwATkSxC2hMm3L976u6jznTm",
  "key43": "4J8u4FGb2FgryPH6GGgMwaMGwU99wgXnsBpurXJhQHnB1DzfVQaBByX3JCABsVSKSMvvYcKjBhkhWjKUL8KEtBaD",
  "key44": "htW1joYdatBqiwMcjDhQgxBqJGjBBHhPKv1dtG7GVY1kfWHQo963uWPaUnuFdFjVM43ENN5onpZ5zxMr5EkTjjQ",
  "key45": "5TKjz4wvraEgR8pBQspM3HrLd2nCECuSjREVuDifqgjs5nF9rdZeR1hRyeVpHbutJxzGif28y4gtQuWBVsCgBc7t",
  "key46": "3rAiAGQ9p95pXeY5Kw3R45FWRgUHLJ2ATT8dbaMrNavvNKJmPjKu2re4L74Amy82jWqBbKwHm9MP3Ap4jGkFQ4n6",
  "key47": "4T8GEXr3E6APEW3Q8zRUyZRGrJ2TMHMNfGTRcQgoASZ7J7maxveKuM8sKyXtnjBGAiV2pXPYmuUKqNWAYZ2v5zRE",
  "key48": "5rV8qpSknEWJZmTc2nXzpcEYKRxJAgch5vj2W5AhJhQFm2qSV4Y6rxZH17iernhwB7Cd9HLLUcvT5Mq4i7DEMYRS",
  "key49": "59eu7BZC7VrW2hfVPGDFnfjotV7QfQNbpy49ZcU2xyWzKK77zjxhktY7VTas2TWWCmazXzfrZPpyMEh4oAM6gKpz"
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
