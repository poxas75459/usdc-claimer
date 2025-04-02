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
    "5ZbYKwjSivDnTbqW9Wn2sdpoz2HG4PpSMQi7jqksWi46fpnZZREzjnAypbGeckBwXbCDaK4TutMyqy1Xtvfx53Ab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21YModqjX69FWE2BAKc3Qw7ZSoe8VaVz1mh5rRUwfnWrCecW6ykM7X4Ui333DvLzTQuqcotBKVB1DLqPDo7JhqT4",
  "key1": "4gkpUL552UEsnS4T5YMfrNT9Tf8H8EP4weFMjxtYzc67KQed7qzb6mT454RNMXoVdFNZpycUJQGjwrzge4kJo8dM",
  "key2": "2yJzkniUCbiTzBjKp7fChp6zTVE3eFpMAitTWUwkQf9PRmdMF1sa6SvysQNhMXtd47CRdcytDCXNB7GTVSgj7pP9",
  "key3": "2QzGQRT1yxHjqTpKKxxxDqCVH7YM93Ta48sr55SNC7qf5yhAkpcjMUxqq7S4aqCndeVf9Jgxo2Rak3QzcFjjBRP7",
  "key4": "5wT3fN31GWHyf8Y7viDWZRpHKVea1zPXjtJqXWE74QZqUcJqVmDcnhmzMSr3m864ofKEEBDr54xtaagX519wsojN",
  "key5": "3AtsPN1kPv3cDVfB8pa15YPhxmA5CDKDksYn2iVszRNZc5v14CxeQwmkrjKf8nXqZeCfH28gN1RoypYqrtxTa9Ld",
  "key6": "2AYwbGRZhcaMZimqqnVfwLKCQJNeC61sJzXQSKReiXHPfZqet1XbFkx2cZLMveneqoJeVbYAa95ps7KtCmS8iKo4",
  "key7": "3NpwYzpZ2j8KyFsekwF87FY41QmdtCTSrCCoBVTnY5gunnjfhJQ7XGErzbx6YeChvgJNZc36os1AjEbmdFvii1F6",
  "key8": "5qNcUqjWmLtKvPPLUHe1BnbTHr6Hn8KqDRtiUmUQCWzHK2pk5LFCZetF1ykZtwMmLPuwTwEfJdsszje7H7zyiT9z",
  "key9": "2Vf8MQ922B1s446yAKeGU9HuAiZKYQED7eztoNKR3gD5Ntx4C8TQ2QVyK1nwo194Wup8v7gDW5pH1JpBh5xKJYRJ",
  "key10": "2oje1SPPALW62oY5WQPZG3CE9yiwxwnBKNHjkr9e5DP7S2bKd3dhVwsdDx1msFhQPYLukGkmJpCHJnWicnuLzd91",
  "key11": "2CX565k8zpD8vHpovbYxPd9tb8ZAGjrToDhvYTTz1gLEDausYd5z84AXicSonrDhcThgkB5eR1jEEDiwRxkFMgnY",
  "key12": "59mLymNRgobZSh1x3CMVRkLJLjKToEezzgvKSSshUEQrc6yEcLW7UpECA8FCa95uHrAcHgcWqruNFLV2WKT9n5P5",
  "key13": "4uGBqp2pKGDP2iYxtBnn6iDwt4UHbCERye5fo94Cw4LsJU3hmeg4xy32hBxJvHZ9L8UB6y6cRU3egH7wDb9DqPjt",
  "key14": "28c2NjzvdAqfmKm3LRKq643xHE4fLpUhXW4qaL2sestM45pv1zB9ZfdUzBQof2wvWWuQYD8zgBvTY57VMXgGFCER",
  "key15": "29y4azWu8F5hvCVFvEzKgqJqZeKj2PsgxRFf7DtpLfbyxzqEtKKNvwtpPjjeZvEvTrcVjn6us5BtcXNnwtMgK6MZ",
  "key16": "3cBHb7NdiZ7nEk3nHuxrxb1BT5QSDzcD8yZNb6oPLatNtBepXmqsAqybBpE11zq7VgsfX224LLcYg78WT6KMqmPd",
  "key17": "3rAwUCopUGhQkUp1xqtBhL5hTZejk8tuSLjTv4atKSGZj8tpF3z6L3T4aiHGgqbkuqHcFSN5EfW2sXC1R8xWEwb9",
  "key18": "3SWXHKe6ZXEvysfaHy43YMdDsu4YwFXuMPE57rgoqXFXR87i4WcAcTRcYkrUjB4swTQHGP3fPagf223fgK8WmLWF",
  "key19": "3xxkKg8dZouUJTFB2xZxvZ1XCKr1gt5ihqsskvFQ2VMwhUjvnvBQhnmSTpirzbkZXf85CXHxi5PPfVWdZfYCNQsR",
  "key20": "4DqwPBV18iBHX9eFjZc2TdgzYgi2pnQniNhkZJNnGvWkUZM217ZhEH79mb1zqw598dJgjKHS7WhcpT5uaUuUSmQX",
  "key21": "4StB8K5bRPW3bdnJkjknJaFKxECCVtLRJegTrAK7cNqrnNJzyfywDgnoz3HCdK1pqEN6pgdKGUhe1fRhjUwShfwx",
  "key22": "57ewQ2mGFD6X9SAGMwQPNwXzGBWBFynvwvCtMbgTntpFAp9WunDL7ZZPPD3pM6rxWmSFKg1g4HgXh6h5FkNT5RJs",
  "key23": "3pe2o1vMaUN9DdKntVs19DcjwjagwX2tNwg2b2qbJmkZZpRYCKAkhD6jQJkx9wHgU2xEmzppw9stEE8bNLbpvnU",
  "key24": "38J5XReooHfFk8H6ynboK9ZVcuoMt7gq9eUDJDNpYQmkePr943KmaUk4k15SLbUvKQkGon9frDcD76FEiJ8xQouh",
  "key25": "2PfXaDfqJUsMcLrUwFyf5JUeQdvkwMuz7Si232NRMv1VZmsspqKdtraraUGM1gBitUxTj1M4g5bWNxm6PgYDdqqH",
  "key26": "55pMtJARp9Ga4y5oRCgXA5js82EXMTZDzPN8tmzJ8yCfGFArkHTAn1eyp8hbaEHtWQ3t8iu2EotbRGvXs4323Ytz",
  "key27": "4biVMGgmho9aksjbVX1fWiZKD1gQWWqaLwYfAJErseWc2Vf4MHqMKNwMMSVvGQBUL1nuuLEsirPnrqN2zMQxAWkR",
  "key28": "5U7NL1P7CNeZD5f5KpWgRfnum1bRVWpnqmnCrNBu2V8NNNmyY9U64zVD7pMp27we3Va1xAZuMqAKtkJ37Q7FuetA",
  "key29": "4ujk9wcm8QTKiqLdEwGWYVyJgSRBCJ8BtujbacBX7EF47T18FVbwMtasrVW1GEq3bgqKaJx1AcBnaperZV9yJM3A",
  "key30": "3M21H6u8t7WmY5kwtkvgsra5ojVcRn8cgdxYiZ1i9ai5egnv8evbXau7rsf67Dr5AnSUCkkbvE5DdadABqdqBm4X",
  "key31": "37ki1DHVpZJ6fznP4eVnYLbzXJV9po7ALFikzXD3wjWKXGkodXtFmD9m7sYSwFGBuYEyprVwG5VX3JHcjKXwtxQ1",
  "key32": "659ckTfQDbE7vytUVMWqdxHjNZmUZv59UnZbgKAKFxoL3koFBPiKXFgSAcPiUZSd3F6nCwMCYRNdx6jtU1NLY3nG",
  "key33": "2DH5DfLLCaWcpehwp5GMLiKX8s1jhvWGjkxBZf4k8cCS8FcDPM7a6p2qogPTrAfkZuA81bySoyWb8VxmoLBfptgA",
  "key34": "4nQf8oTeCYuDYLpvRZxSbiH83CHUgbTMr9HxiWw3d6LZ4paZDM8pvFT1V5pNYiqM25EBRG844MVqvS2GP2xrxgq9",
  "key35": "3xSCNoP15fGRBxWtMGpbWWvJ5Hd1yqwwTowUAqDzfp8ifZXopJvRYd2KkLparScVV7WEZcW7HzqCUCr1JvKHeXDV",
  "key36": "NUdQBSMx2ox8beVxP1mvEecQBVTtdbwVNSD3x5KWcvtCMqqo2UTHYRU2CJxWvhLf9uJ3pMpfyQpHgfEfX9LuJBt",
  "key37": "4RmEcF8k5pVwjy7Hk4yCrrBmDXEjCLHEJEvyPXTvHzxE5o5NQMjfNHarxz3nSJ5VkMPGdCaWFnh9CJw1gtv3E5JB",
  "key38": "oTnsXkd6vJWrDmUMAwH4xSsAg5oG5cnCeu8CqpA2jbLCPBQzF7WRKogfeNzuWZpHGoCYTTd1AZrYk9BQSbSt7Vb",
  "key39": "pQqw1FyuEWE4LijH4VLJkpoquco31xxedR9jwp2caaoAR7Xt2eSk5ujKpnR8XBgqWgQhb8GsGXh7ERdtZhGP6h9",
  "key40": "4uSXVaTSkXur32fLxrHADreU6BhiEAiqTKKgrWE7eUjwhGP1wo6faBKJjKHyAEChY2foExstTKnzoDZQszs9YrV9",
  "key41": "2C37AS8zrFx9uAmMedwh9i3aj4sb3VV4CwEHNHHLCxrpFbbRDeT26JgseFZCvLbs8DnsRVPmbpVpjfZCMnhirSbN",
  "key42": "252Lub3rnrAUtbNJRGDHn4GY57z4jTwtqNoxMtYNMMzswTbJjUfDXMfAHjBBTej5w4eBxhY72Qp1KJE5gdLpRkUV"
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
