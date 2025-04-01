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
    "4mqrc5jTjt96KGgS5589kcNP5cASGCmeSoP5wKsELyEEFTza44EWub6NYGKwpHTAnqgKyQmzeqs5XYD5jpzu9pkf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wDjqfqBixksMpzGiLf5fYTa2JPMZkc6Q9oCQybYkSt8gupnug35HaqDM8rkqjN79uDc949n2XZksBA3K6B2DdHg",
  "key1": "5Rrjd8GYsWKkcUjjMzioEaMMiejRKS79Gz8MQDy4coz5uvBGni5jUpVS3iQahK4mjCjJmvUe49YVTXvEA8D4mgUW",
  "key2": "34Thkan1RXjmhKcRt9vcZFCoagCpj4GTpnuH7967N6QReCt4mgGkUU8VwpqQtidMMo71b4L5T28rSsCrrcrznUGc",
  "key3": "5vPyBCQeXpqzWBnSwCQnDvgPqRLbpSQu5nvJqoSf3Ha7NqVXQDjVW8sRDkiYdjm4UdN8CaX1ScuLwvfzhviDKgoW",
  "key4": "2MzBDgnPu8ePoXuQ6gEfsmESHgGCiWBJAZcmxz1yygTVjdPbcTrS34NX7Pyeup4DEb2oMs5yZpPrYz6vNyhPFS8b",
  "key5": "4DUYnnL51rwfDkkfrpQ89bHwZUvv8KuyaFNbzskSAWh9MadSkvWzZ9Mz1x3UC31JZtVZA8v9PgaQ35Jk3BWobbmP",
  "key6": "2LsR3Rtt6UMyXtEGwi5neKiQJNfiDC67x7wqsLYjmMfUt3NvTqEcM6iFEwvFbX9VcuxajPgCoPjukcc3F3cKkc91",
  "key7": "29LCbTRA6MsU3YeKE5n1XbKQryZswB7VyjRNVLtWeERAz28oK5sKXJh6GxTJaZw39RYZTfketxL8CdhcTePpdLTP",
  "key8": "663yU69qSNX2geCAU7Nk91f4eVCZZ7emLG2xyXDGtY62zjPsEzjTcHZq4frLwQdJ1sSqF1CbW9Hu4N2o4n8QEaJt",
  "key9": "4GSZUKnZyr2DFcgAijQQS9mrUAXFhH1ESWfrtodd7KeJWDZTH9nLEfJCZtiW8Y1mVwnYFp8RnzpJwj4foUWWgyK4",
  "key10": "PVXLmc2acrkg2KjRgtjsUCtmhPCu2irQvqct9b5Sq6dBiJ9zGW6S3WDAVhbhyVEsrKYTKRtcDJegGecb8c9NvJe",
  "key11": "LkTAfepH6NAUYqQqAdWGUJd8qz2gfTM42aPY153m7xUbR2UKxugJdBKYDwYXwjE4jYXbY7h5b7rCwisNN1nzJE2",
  "key12": "2SYWTo3Gh4zZuH1GRo6R3LtE2ZZ4YE6r3WomVhqUXv2bR6iFfzDcZgeUYejVZ42RV9uj3tKjaTnbvjjoYDPBvKdG",
  "key13": "43AdyTzgGL2YtPrRBpmkBAMs8jsgMsF6sXTUKoGAXJHW77rBUqTeKM2wpKA9HLcdK62CMWvuWYLtgvjcpRjWjs7o",
  "key14": "53sJe7LNK1FJP8Azf7rDdFH8Sg159WefYDLgq78jvzLMmtB12NwDCXaGUcjg7CrAJkz7MBSa18CqKk2w6kDSe3Fm",
  "key15": "3jAvpNBf7gLdy9mBY2GrDERKYmhsMAsz6sEV9QaWe1hBbQvY8MaDWeHMBBKDqwr6a2PmfGDyVZthwioJhUzjYxmv",
  "key16": "4dAWma1VsbWt6XNeBLG3y3umvS31QkVG8US9TSWHEXoBfRrwUbDFMB2LRR3CZeYvGNsD4EqhfYKtMAF6xz2819yG",
  "key17": "3zpGRkpR1sfEZGE51Q2Cc4Y4oVFE7BjR7dxB6nttxNz7KMQzf4ukuQk2LnKsaKdtEKdyhqPkv2D3E7zhKeA5A3hX",
  "key18": "2rDTDo3CeQUTGRneFxoJiq6sQsWSKFufjDK7Kgp9KrgtruHYXWu5iF2sr77DDFSBNbxNhTHstdmTumSrNFPzp8Kg",
  "key19": "3a9rjyW63QTuY9VQckXMwSvUYGNf1KsyvKbt7SYRQGdqSZKqFjmNN1hZdoi5kGzwqn2mJNVZBMf7k32ZV2qEDX4w",
  "key20": "2oNZrCJBNC3dYGfBJ9YVrUKkwvoJgnBC1LzJNCGhWSWHzEUPPs3dih1xyB9wyVHcanYqdkBLgDzhi4UqGxJ8FrZu",
  "key21": "8B15iea61sXHbBuTk7HS4BGuETTuusfMnvb9VfRHNsyZ7y1bT6eDZ5DAxDjmXP2WXbtowojL3eVhkhSbZTQGj9k",
  "key22": "5RDn9TJwgRffarfFgpGKad4aJgdbxVdtTZMJsjQ1Zf142G5dPNFmLi2W1BCT21MGw9hA6L2Zfa8aoQgMkpMH3mJZ",
  "key23": "4GpibF1xibZw6w88dhRhY7CpEsyuGuCUXrVwqWCyiQKQ9CNs8PCssJCxNszvANXZ6eZb93ZZSivbpc1kfhfX9So2",
  "key24": "3BMvVA7MXqCh1GY6DeJFtQQUzuKaC9kSAa1d5m4e8Y9vxEdb4PGDkQ2VvoPU3uQ6VeuxCRwyScoc79VBK7WCizHH",
  "key25": "3yPzdUgbGpMQQaFgeWYN7mHtY4aaiSRf69kKf2T31iPnp9pz8d4MVgbKeyHThqMJKPLWuTnBgDYSu3XRFeD5F6S3",
  "key26": "53UpNdn1snfbua8GkGcxoScJZ1r9aCK3iwpBxqDseDcXv8zpbVPfo1zzG8HucEADs5RBoJYL9mrAEderZFJ7YUVA",
  "key27": "5M6edd9M9n4wscfPToe7Pw1h9yHjkQk8PuEunNzGznDBy6rAKyK4Q18dCo6ZyVfE3u41imk6Hd3eGG1yH5RyRQX",
  "key28": "51amGygyhz5tjotvcgfX3vppwAAFHMRqDfZD8xaX1WmXVhoC8EiAJ5sgZ8euVCMFvdBzVq8rRyv4AT7Mp3foFmqv",
  "key29": "3Xy5yzTG3irJZYe1qFCoCqVThPrCtpE1CPjHkvSU95ZmBqm5qw8UXZh5fTBEAi1FoZpxvJz2R5gUWbr2q7Tm84do",
  "key30": "4ED7H7ypRAdGHZrGRKMBPF7tBjktBCTpV2NtA8eGxAp53vDCXYGJiwbXy9SEFKGw1Zy9nhjRRhVrRfFV1od8icWE",
  "key31": "2K1PP8hMbikFu23dLsJhDr4F1Yb2VxZBxgQMSErnpqrKjWaExncWQmy64S11n6PvxD5xxPc6NtDQiJeSHaRFq2EJ",
  "key32": "2LmAjSE3UKw5BTDEvHm4j29W8vor4cmWKCi9QX4aD1SZ6mR4hXevvCcov27o16BiYXYfaHHwG7TNvVZisJE5xbNi",
  "key33": "54nvCmVRtXzdCnBBqESfFnwViSXbFcWygjHth6YMideHBnRk9LdNMdZ73nV6xvTicpmyGfC17VTC9vZDt6JNAMoa",
  "key34": "44qLsvUESubt6tM9xnTZdXRvNUbmgSHPuogTpJMG6DhXMg3U2VTZvJBVCVwrEAtBrTS2EYX4mmEzEX6MDRDLtFgb",
  "key35": "2MspLMGwhM7AnAefQ867sG9mCCk1WCJwFkCfxKNe54vxoUHcVM6c4A4XX8yw1izfNsJexLc3pU2sB8rVPZpV5zAg",
  "key36": "3kqritogAdwb8RDBZLsJmoKjZaBWFb2mZCL9Muat7VM7RF1zAi6oNPPTd5eiGfSa6yMmB7Yht5isRkbzD7yipQLW",
  "key37": "4E5yHqD59dzbK6Q87kdw6uEhCaJJhSHVRSxXhZSPKf1fQRMSy1v9mAYsr9sMvkyj9ENBCnpVSDa5o4rh5UrK8wdc",
  "key38": "4Aug4dbEPirMtmeLJvQYZybNRFdxTJCM1YpahNvhT6MqtWT6VRENVSfTTxo8L8uRAmz6k3weJTDNHva41bTqG54S",
  "key39": "njr7gTtxuz8fxkF8swom5yZWujrWKywrAtRCxjKk6tvXvYm1tvLNnGj8RTxKt76XMxVYTj1VmEF1AXMBC2agZWm",
  "key40": "yqcCr9wXm9AXutRfonmX9oKGbxVEKddoVDDdrbGbhBC7BintAJuJVYsTLZZfkQ9F2W82PxUGB2xtfgZcZuDPoSk",
  "key41": "5GToNcatbjfKLFPN7u5FdrBD68RMhVuoFUfALTqkMTa4xk7u8ArVvE5TkChCXpzZK6X4iWGEhPyjLVCN48s8pGhz",
  "key42": "2cFtifHUjr2A2wfeqRVrbwdRsYdZV39UhnmyPtJ7RpwdjKE4CLjEBzB9pFtskR4qDY6ynLx8JcYi7QBjmVZFWuvk",
  "key43": "6EUxkNT6xoBJxJdRAHDnewvUkX9y9dAKsgeT2Hw2wjaJ5LjK2QpiEMq3uKRfXiwZq8jYn9UHTAppHJnVWnhBpxx",
  "key44": "ixhvoMhzo4cwJhEcm7QcwLY8WuMLuPNywLhpj93U4bBeR8kBYeaRuh6n1Xc7TRPfTdKEGMV7WRSSk5yv5ezt7J9",
  "key45": "3TQtCC7RsM4SrbXVNMnUR2LfxdF8Geq32wtp8PEsM6Zk7q4F3phWNHgNx1Y7JDLfj6nwPavCHnjk3WCxEFmiWXeo",
  "key46": "Mzxm5eKjFWkmCrunBKRbStdUrTDie787ySAfjE8ecabaXEiKMvBjZsP6Bwxu1P7uBqNZM6bbP46Dw1wDqtTn3bs",
  "key47": "5961M4aAXHRf7fy1vnVpEC3qP3QQ1Eo3MV6QWkpXQBfRXo2mesEjaTRshMY7LgmU6Pt1hLuJbKYuqkaRzGsm9MLL",
  "key48": "DpV8TubkBy2WSg1sigRvdCsW38VBhwWLagAuHzopTnkDffykzAKAePzvGTfxrSm1LCJc9tu5jyHE7TR3XsvZizc"
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
