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
    "JJtFsvbH2n2PFMwZZm2sjxvvoQL5RHcEhtU1MfrRAEEpT7LikNYGbcsLhgj8HU88t4QJGNk6YvqiPJXA4LGx4Es"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59VEsU7ozxo1qkLGZaqAAxNHgjsKosgzsrdGpXWc9o24WheFYxingSnr83Df1ssYUmt6iyGf9g1tsAdJyqzwmXGD",
  "key1": "5XHqs4LA9dioCdzJiqbV8viJiJ9cQLHJE59pHW7K4oGMFHAracQDzNJefPjcei6JtDUkQiccCmZ43ubYuxAYCFCP",
  "key2": "521XHCAz8wXwkKu6GBzzMPQf1TjiWs1PuKkZiRTVFLjkfQYWhg5mEX8bzpCLUiX4XaUqyGc1tH8MuDJAQeDREiRU",
  "key3": "3Cv8JdY4afHUqN4eNxwdsaQnXAJbhkcRB2NanjHwgsReW3qUCMPfSV6UwigKwwowdCMB7nbtKeQcZ71T41iQRk5v",
  "key4": "3Wc99D3BmBUyicJ1iyTZ6mgVAt4tYB5MsX8m26kvxs42R9oLtSEFkyUyfkArXi8BMhNznSF2icdJZ2uX2GQMx4Wb",
  "key5": "4qQwWns3Ma3JyL6YsetEZi6KTE8GAY8zxZ5YujJYEX1yJP6oygzCo2a9ap7ryAw1JjEjk75KyRbcEtyZM3kiwtQS",
  "key6": "5nUJAQWeTT2eTY5rC38kvLMRX3ETEgB5QrAdv8egrSqf5ep3DEXDb3xRR21RTh5mJ2QFhZFyw884rMo1DQu8427L",
  "key7": "4gbsSxbPawQq76EcEFaMRJktWBsFTQTaXwNt1PVddb9aZEA9w7w84mBzeKZcE2Azq8kQddQtvkU4i9rthQbXKxvH",
  "key8": "5Uevspft3seprMrFLAVQ6WxpUqXmv3cikmKs6Vrn4tzPjunYifApmyiFjSgVKB8S9qnAqMNgTgmTFpk9ueFBL1fe",
  "key9": "57R5WMJGhMuA2xccCN1VRF7opNRrmdpyHEht1WDw3YbJi6ukMfH3MD9QLw5xhyWAdNtRKuMCnMBY4iXDXC5RLRcp",
  "key10": "5HWHytGE35KcpGKsXaxeej8RyYLKnB6bqPY43Y3XCv6my3gHLcD5eQRjsqdsx6TrY9QcBfALbfDXEsaMTKELcJcy",
  "key11": "2UrWrZiJRz3vgHyex4MVy9dJBuTf4WkP2Y9SQ6xf5czgjV28jBnKxYyYMLujZMW5pYRxRPzEoMRajqaEphhKg1hK",
  "key12": "3WVJ1axhutSc5rXvescR68bj4auB2fKQyobpLrwwMgMKVJy6cUMNypuyxuB3xJ8D3HSTvT4e8i86bf5AL4dSRtPG",
  "key13": "c85bYDnjBoJ25AtN4Qd32Q4yYhrTv5HZp1f5TXJqshswjdduZyZzn2MG1rJVpkbYkSZpY1k9DeH7oJzRi5k8PKV",
  "key14": "3GP5JjApuFNNofPgL6htFGTL5J9d5KtwUCTR4RZBnciQ1SnkHcZfLtTjiiDUk9t87mdHNXWAFpL5umgKepwUbchu",
  "key15": "5tjwLdUUgtaBQsuCuY6Y3NS5Rb77ezeZx3e6RScvHw3Tv89udbSNA8uxkYKf92ZpMd3fJoVuhHb4zP7Po3XWqujm",
  "key16": "4oJXDoEinmCZxxWyhChX2BE1eUWoQmb1doBUXeJBXACqL1XacUodmLkjPEtp1HaWY4ZLwdwmkV7PtSeKVMHD5SWp",
  "key17": "4RunnDeokRRhh7utu9x6Yor27siQf7AM1WzBKJrVqXEXyTXpGjkvh14D9AQnMFNNnYFkEp9iVWJGGtL3Xms24h39",
  "key18": "3tZYusnpT9WqdB5bZqhuJSuJ5Xvjbt5KBhSiRgNUgZX7nt6w4RRruaichswDL4SCZvw57cWEgxrXfT32HAvX34EZ",
  "key19": "3ShDwFPZrK2oZ9tUsMCAXEBJYYs34y9ghnqqXSg1jtCiQr41R9X28meSL45Z9em4wuLTSMa1eAi3q5PFS9eChXbD",
  "key20": "3F5hvQ5r3kVbYH7ejoYZgWdYzoUrJvfrGVdvqa7NMqTKMKi7ofUMBbEGfR7cBY5XrB8bcRyvrK1Mce9sJWF1WymW",
  "key21": "4PfK2NqtNc2KaD9CLoULDZXqiRBkD7Ro38ngSd7FMv6UZJfebcCSQ21FFUQNn2eD6r23sqxNszQyrzT4LaxQQ2aM",
  "key22": "3BYEyEjsn2FuuPj6DsfkkzuxdJGFSE2Tdthkvi4jT82Y1eGAjo1ANEhxPAWXnX75mnjBDefbPFneb7kYySifbymd",
  "key23": "3bKWB2SDadb67qmCsZbT8jTyUwtMVWCgunpL3CdPjrR4bZ1iEVy4C1KkfCwF88VgjeCAoiBQ3y7tfwgjvQtjZAeo",
  "key24": "5PNNCJAt8QuNkMqvGEpmbYTSYwgnSw28b3UpaTu5mWmRqznHDLKvMQSPbYkmiZnAdLdAqrAtD4kp2Z3bKBBLVgiu",
  "key25": "6Ensz9QEUps2GEPT1Y8fyzqhxUHinfAief2oWhJ7DQBcEfaaXV8sdLwEKxXqtyguebeJopBNBDQgPgLpkNS9zaQ",
  "key26": "2Euzu2EYAZqVzDQo7H3RksVmFdQa6ozUtQJiSq4Sa6mbVLfWVL4J49jn99ajTnLmpkDTHLcHXxg5WDVAtXvYchbt",
  "key27": "3rR9dS17g4MrSdyxez1tCz3txDnxFRNVy1R4ShhB1e29N4H9qW5uzQkBHHSSbMeLaB8Tt556ypjn4t4uZCmpBZDX",
  "key28": "2LMP1VJ9KgZLXHH6F6HvHu7HeVHQ3puadGqFuAuZYhRjATX1wMwkWnbZ9LTQLqAL9nVNNac58xLh8rpoCJqsDLx3",
  "key29": "59JzvAEJ3xTwARx4vWyZVxg6aPpY2iQBmQRLLuDAoo3np1yRdDgrXRYCZoXYdtd8wfzCtCeRUEuJEmZTkcz7yYJU",
  "key30": "3BdtQBBaqgaSUNEMHHZUXNxtQkzPKxFKjsU6F4soSdQnGCLbSYWd5Mm95xHhu5BkpTDfnrHLWUCGs9urbvRMUnsK",
  "key31": "5EAbub3sADCXPorCaWLXov21HZETVp5HDmLKka2KSV1tvQe1MZcPtrWSkigxRRzCSDyj6s112M46NAz5TTjrpUAk",
  "key32": "5mF7iNzzwS9cDj1y6kszNzuyrUTn7qKZi4w7p8eNCEZVkfefY6pwSUYf6t82Q3hNXdtK4HU7sUKkvs9ZGgNJ2ydZ",
  "key33": "3nkVatoaexqj3VmLeLobAPX8hBWMJ44hNpZ1qtPXEfscqLRmRRJzsCCCswQATxjfCd7ZU1tns2agpBPd89UMgBE8",
  "key34": "42qi4rucjn8PTmfohGsdcKay6jqjNWx5A3UNmGGATjXbCoishXBgHUpr4PyFBN6bPkDwN4ncCZ7eAzersGDJD3kn",
  "key35": "5jDxsJZBfesTX5w1xwd2xbWhkuHXUYAHi641M9FacmVp6WKdyezYsqdxbV2vSjKkyEoZURz5xfYHSZhPfex6rS3z",
  "key36": "1z8xWWawiGHBniRMgtQ4T9pq4NVCnkuQnsxsCWyXcdqmfXZu4LsiiMHPeFTZuoqHBZJEPSdJ3YxBuiTh1A2wW4u",
  "key37": "5jhE1eJBqYQZXxV9bYSK1nd3HKXDHvStN2j9QptepeBoQGm3pALRDVJpG2RZrUo6UyewziQKkNWqEobTvRWYCoWJ",
  "key38": "4aXfNkN3atZFTMUsNoU5CBJMXuAT5hwG7mmvvAy1FqPViztc7jJTmSvXPgmH5pm1pR3v6nDqMfVoFeRcC4RTAzSt",
  "key39": "2kVYQ7HWWDfVKsziJV1KDbEQkZxp2jaFBUsVdkatrnVEsegTfmFgzCjMHfwC9DpiVaZAz75vSZJTr2LE7m2JC41K",
  "key40": "4E4hYwK2C4WKphBLEu4NzY1Vs8gEFYTGF1epxrpPbcVEPBkPK83aPn2d8w7vMN8AosGFtC69c8LfAp6CtDWWaTY9",
  "key41": "2GgjErpLyqZ3rJqjy3ByVHH1UWYe41Xs77jvu4hxX5DVrJtCUgSdc3Kf6HoyHp46J84bKYpm4Hp6z2DpudGeAHPV",
  "key42": "4sYCJry9eVrgCWWas34iqkGQFTkJ54SfZmDHBk1HknMsiiqMdFUELLTrgR7v2h1QHB9UYN2JPrNUoyNXW4nm182R",
  "key43": "C8ZyQo88ESDmUeU6yyFd6fzAv62swsmoab7mJ2YGxuD81VRKy7TTVCAnvv4RoRqyVV6SYDC6YVUGKx3zTpZp9nq",
  "key44": "5uCsUdvefkSkQy5wjamrFsjpTfGwjrZy4zEnRuLGWxaYYxKCGGAkJbgAhJkDgPTC8UFxvUDafRiqmW9u2A9gddfo",
  "key45": "3DUwissXd9916DRCFCRqpV8XGtGJTqWM2kWW1ipQHTpenNXBKmdGdgFTy56wMt6YZoQVnEBGQX9TEegMo6ezxkR1",
  "key46": "5ahGHREPrZuzwGKEakNqQgtDNRpZACvVXrFcRSpe98cRqqzoNgn8J8gGGzHL2VgN96eo6gqJnxYYwm6j7kAkxdSb",
  "key47": "nKKL8Mt2D6YL9N61o7pkxJKYjSarHtLbqo7fj1MGL7t5p44MmLUNCShRts8RsHG7JYVGvnUkZ6Mj3eWRHGb8fNW"
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
