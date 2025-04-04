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
    "5WrdSqxHC34bnGAguXAUznqgyBBFLW3qQUzBvrA3waSYeNYTWWNpmH1m52q9rt7ZX7zJvBYG6o2HnJ4nb92dqom5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nLueGzT6qKnsoVNuaY7WashKfDr2m5RocxCfiitZRJk6tAx43C2wsZ2bMbhWCNRhQT4pydbavSrS8xaNRj1ZeqJ",
  "key1": "ZJ7YEnPUyahWWsGXrVDuPEujJpS347pAkHYmC3ZfGMYmbqPphcD1vBj6D5h8ciP8xnJnnT2csp9e34r923kXP6H",
  "key2": "3rzDTckzWh24ZFkhX2JfyKeSADKUQDurghDaFdqdw4rr4DnCSamSoqHGXuAhCWag3BkLxT7JEM7GwTLSCJtAR54j",
  "key3": "Z5rm3uV9s2m6hwAjTz6cMEh37NzBRRPYzi83REXqbTENJp9kDDRZkkqVcc76UdA8Q7kcEdWAYSL6iiZkst8BjwA",
  "key4": "aX7rsHacKkSH94R2EkpaT3yZjPbVh3XDN6V1ePUJr2gQUbotPi4gCJG5vb2aoW6SdHcbTXxi3f5oAnf3zDc6ffr",
  "key5": "4bNnMMVS8jXzA58z9qyqFpWBNniYbcqEMTkNmaLjaHeBFAPDP4jtoDN1chKnxzyBV964tw1RnJLciX6jSmLDrrQe",
  "key6": "2796p1dReByjswN2APjKRt1Ry9Y8jbvbeoBMSFbKL7xdBLEjsxAyX67JZkCpR687FDmRcLv1Dj88kYpbXzujF6hX",
  "key7": "5QzN7xHdh283WFYPUCVtvx1nRABUFfTeRA1hymfNwxbCgf5aJ2Jz7Bm77HNkGTEthJx2EWNQcPd9Ypu6PN3s6J9A",
  "key8": "27kKwpZykQaMtrKdTRAdKbrc6qNEZmtfQv2z7sTbsN9MxCr799GyyB4zL9cGqdVE45FTx89WBqVhzQsyR8uMYrMQ",
  "key9": "5zBMEDejsLRsmFpp4uawjESt3yEQek9yGpYRjUuubcWa7RMUgY96gzKdZyXhjHSTZbsb8CqHaomNtLgz8VokuSDv",
  "key10": "2hpaw6qfys5NP4pcqQ5KkY6fEkTh7Br8A2HBMgPYaah2S1HsX2vK32Ww8U163TAqo277ogEHZ9JwpFt2NLUtY4B1",
  "key11": "3aATyiKfrQ36f9HXdcQJLSiZ9B7ZibbLKCJv5osH85755siFidLya2BFzga6N1As9eQ9zffeTdQSZm2S83FXkpoH",
  "key12": "uhASsPfWfHBwwK7k3mPJTBxK1hMyuiYhJerMW1Jm7hdycEDHSoMeNgbYaEbLq5TxMjXoKUK1iCTWNQJdumVJQZz",
  "key13": "5uVJeu7ucHGQdcJzkpRwwYBKQ1xEECbboRYw7YBynwXjUVns8P87zLMotBMu44KV89romk3GQTrYvQXy1B8K3EoV",
  "key14": "4NnbTrFU3YmZaTKBstrHjdWgyUVkoyRWYuJ4GvY7VLpepfobLzhxViLCugwP2JZ8PGgBvvFbyrEVoN9DrRNjtuxv",
  "key15": "51RoqG74DFt6svSw9JRXj1udjW5HihYpLyaLnUQ1eX4XcUVmQnYyS6zsyLNrNKx7oqxE1xqmPvRwioEYJB3PNem2",
  "key16": "5MHQdUh7RSyTdVyV132MNva8xCpmz9Hc2ViyzQotZuLgNHNkApwh1AdxYGEH2D8FPxMNMEqPBPiCyjmZBAz5udNj",
  "key17": "2aXYLbjUCqvpwSi5SzcPT8daUhZYHRiDC7gdfNM5h6CBPNTqpYqXTRHUECyiZ5JKjyqDJNm5c5L9y577w7teHBps",
  "key18": "33xtC72iwJsKxN9inR6hbpiWN2YTGMZqQFP6XuzRoGy6B9ynSM9LEt7y6y8GRg95EVvjyUqynJHhzhxgzaeent1x",
  "key19": "2iTPj2hP9r47d3n9Ga9FjUFP9ijxYcc25ha5w2ZjV1v34RoMskJfU1T8sTEkv9iR6n1k1HxXzNRw7Y2TYufyxDZ9",
  "key20": "3drm3EuxMGXvAS1TCmpR9MnKAgYYsFowpKur2PitqHEc2Anot5RRx88jNF6ABCgkfPAFwoAxPG1eFCKYdDfUY1a5",
  "key21": "2Pu52qsZfjjh8b8nyZ6ne9AgKt5bFQkpPagN1TactUfm5yCPCnR1aoi5Gm9iMpYQVC2P4LpUgoCv2LNZdJAJXWfc",
  "key22": "5Xt4jrWK7NydqMkYFkto9Wywf9CsBXdaasHz5FY1u3mC6a52C3Ropw6YNxLcu9dtYd6rWMdZ8ZNo6eGCEk6zLLqJ",
  "key23": "3uMXhm4koek37xoACUm6TJLsjFG3FEMCJ3LZGY1zQ7QA1GJyoNVpGUsQaYS49uHUHXSu52MMHRP2stqAa1BPRdTt",
  "key24": "5jFwCJptNAb2scJHr3y3LVRCFa1i7y2DeURqDuJNUst9Syrv1QD9i7musWJAzghj687WLiTutRBNQpCuWGqqwYRo",
  "key25": "3nyG6E72MkUnXyAZJ3vBTVCSpBCPmv6FxKhx996pp8pC6PeTSVELjngZribwxb5jnmH4nnXD9j3U1dMtQYViSSyc",
  "key26": "4KVj9oosjfYvjNfEiR8EfFae4DMFZJ3vLb75ashy9Rn6985waPn82XHsVJAseCRDbhgJQyNQ58jN1PDqi1oGb5eu",
  "key27": "4ke1ZLwu2kjXXLsumKwM1Sx7QG35SgDDDUSoWh41zTpvj6c4vnyFzaY1hv59xdT3YnDzKoDKw3wgpK46m9Me5imD",
  "key28": "5eDEt2BYE7DLD3u8mADJTChUH5jzdUaawiBKVavkSXgtHCYs1gcxJHCE1Kd6pXDgXEQD4n6Nf6yFrtDjdGdv15XJ",
  "key29": "5neLAvwWBKzqVaTmqGtGTmvzCWeaXA9p55epbwcW5xyaSYyGfiUZ7p8cx5sqLmeLXs5iUN8jRsPRjwEnEx7i6FK5",
  "key30": "p8jqEqfcAqC5zXjaFdWX5erTyES9nV5ToNgmavQ3miwKwvYpNyk4xQofwwFbsgYMV3wduRGAVyDESLbqRiowxp3",
  "key31": "FqiExg17SayG2myTN91poxgzT2WudrnGodcWC386nKg8dw2vvYJJqCqAmuQYNdxF27d6iBhGXie5D7nXgefGFqm",
  "key32": "67K3xBgCd5gNYogY86jfAu7BEunonpCqS4M32Jj3ktXQXjYGa6rr6X3cJ8siPKoSSLNMvQP7bZEkybBdCkMHom6B",
  "key33": "46WVzDGhSzZooDvYvqD3W4p7VvQs5ebeaf2jf6kkvizcavYEMcoJmRJ2nNYBCpxQyYZPzMtGQjerNBd4VwtRW4tz",
  "key34": "5EQf7BjcgGxKrnoSGLW9aeSLsXwTqDhh6p5t9fun6dsGi14JGMgvfbWaTVUfgQG7YJHEVvyupbQvE6JH4cxbFyp6",
  "key35": "2Lnevnwx2j3X9umYHamWyFvm6gaQktXLQAJgUWJUrkkW469ToziwkxhkqZoDAmtwhAvsczNwEroazWPq3yfxRRRo",
  "key36": "3458J5rorgj3AXeNh9uhmD29fa5UXUbqhS9ioTSrjarRfobkGwQZn1h4PDxaRBrYRcFE96FdXXkmo1FqGk3HyyK1"
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
