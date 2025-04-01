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
    "3k6iSZF9gzouHmTrqBKaDgabuBCZMG2dvv77LK4oh2zEX5QTxHf9tDCVzr1MVB1NFsh7fMiATsXMTd1J3vELGVdg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rotyxUHQoiAL7zwrkVr8QbeeGYSAm3tx4eZFxLEEcUK54afHKL51KQvCUXbptgsUcUTV71euqnj8q1UUsG1X9qq",
  "key1": "3GJ2Nk4A8VCGhPhe1ugLhSVR7mUeakYYzCQYeGecrdxhHC6TbCtACTX7Rgnu2jrzVcZuwsGQ8mqqYoPAGthy94Mp",
  "key2": "PJtVgyGRmNFzu2EBmDUL2LwkJ3TzXsQunSudKe8FXcQFiRqq8oPQtWm1j5mpr1SdCrgdhpiFYfEirzybrBjV4ZN",
  "key3": "2i6LBnKtNHfBhAiuJaxiL4YBYCtiWVnA3gdfmUyta6ScVoMYdGVvxBR767Bd2ygFhGcugYKbucbpFCXbcDjjY6Bx",
  "key4": "4zqLb615WYuq38QGUKoZgWTRyXgRDip6ocuxMMrU7ytVR8MRuH9eqKUDcfTk22QjHMYEfALc2NWBaiaQeyUY3brh",
  "key5": "3dZWVFVo78h93CnSfnKb3h4StzzLiyLRavVUamLXx4iWFaj9cbDxaUmTa2n1Cd7QuzcC8fS3x4LUFLFk4XHre8iK",
  "key6": "4VAaq9WqrvKkTx3CKStdAUuxvAppunYZoMc54R1qXrxvVzjZ9n242bC2pGsxKxrMqBVbktQuZCNdqG7aF13h6a6e",
  "key7": "2LkesHgCEuhB8M987vv3cRCy1aUWyiVKaupt3qc1afPjUxWuVic8QNxerPA2ouUzj77QK1RGPBxTpMazDatfK6nH",
  "key8": "3J7EUZW2XMSCMM2dgBScMMehWx1HiRUkXKZahZFvQkPshi8GipgRs58ug67xN48a3pM3768tnrszUh1hn3cKzTqT",
  "key9": "4dhgEaXsKvJpNLaYVg6A9TjcKdpYK9C5vYPqmgEmXttAaxAnfmY6vmMaugFzop88nmvQ4FiGeuhfnUmrMgNygYUQ",
  "key10": "2ZtF31bqPRR9LJ4PkvX27mUyVY4d5xVJFbQuNTsrreMP72w2pxxe8K5iJdBgWxhUnCbnCshVKVyncN4UgpmjhKD8",
  "key11": "2wZgBX4rt89SU18m9zSYohUE99qtGjFL6G3jAP8og96TaQF2aBA7GH9N6Bo37CNbrrCGzvncXtVuYDn3DgCojK8m",
  "key12": "4YaYffAmfYTXtYfRTeBVuQGzmpUCTxQ6MR2rAJ8k2GwgBz6gqxSEuHWrvLAwwUsH1YQiuqjUfGUD4pVb5poCAvhH",
  "key13": "9XgCqSLexyjGKjx9L2F9UsS7fMwuhRqiE9QW9SftimJYdRkJ75uFpUYzAudXxngFkBb47anej2kzqkpaVr9WMP8",
  "key14": "2Kq1qJT9hsnGA7JgdDYUoPaggjePHEdm7RNMjLreRi8FTfRAxxe3L76CM3uywUk8iyR2jNQQoBEmcTd4d46gjpj9",
  "key15": "4fKQWqVjPsHX9KVXp3exKGuS5hxCyRtvNBrvwDuDVB5McGqSJXynxkxT9RQCahHtjD8dFS9y8xco4xSgeKtsCAdv",
  "key16": "56tMvJw2oW3sMB1npeeJaFxDKJDqdQN6TSkEX3JPLjMUyHUWKztmqXaAt8QcmYab4BWQWawrCpYQR2wWF5oXj1RU",
  "key17": "uuhsSTVjPQNT7C67ucWfpoUDuRt1vCo3pZM2G3G1EFghHN9RAfjN1vMSKRzXEz5iK1iTojSJeVrCx6SHrgYbsYi",
  "key18": "2YspqnmAx6rcghi4SiYgdcoMEUPShD6TrxMz5UvsnNXtCbNXcXZ7LXRg7MZSraAASHLQwwAt1pEVHtZbnHkoUh9m",
  "key19": "JchTxDCvAVZFVt71tARWN6EKgPj15QtoUXc7gmABhp8B6bryNRt6ws34dQD8pEaBccHzV8vWee2KYyw9ZEWzYNF",
  "key20": "T7rKTvuopo8RQf7oKgEFbiTSMaLFck7c3Vwj8rm5w71wFy8qS6dMLt4dNcnnoPCjPGgkPo5ufFumm3JqpJK7eLE",
  "key21": "63nhojXbBy95XbevrBgD2fQZDURbSWr3sfo27aYseRCF6t8g4f2tXqiLb8XEXw3gNakihvRXRA74tpst21b1vmY8",
  "key22": "56FGrowdUtoH5GHYZjqFDYkdwXjZC32SCHGxoBmjBFMZTn2YTJG8QqW7tFr8X92rUnET1Wpdif9vCRJ7EDzJM5f",
  "key23": "57o2qkRVxexpffPZUkMwxVAjFpb9ZcuwkYgSUnAVwhpehzBK96apjAWJG58mTgZfHEQeyiDW639ecxgHdGQaeMjG",
  "key24": "3cpGCgMzQA22nRbT87GtaWUWWEMeiENghKeucLcxJZJ9hDvRF4YoZsZzsh2UDzXtmzX7WYnewFcwL6cdo3Yc9GYd",
  "key25": "2Ve2suKe2P2A5QAVkNqWAfWRuYNmzJrAAq75La1kg4guKBeJQnLqWq9Hw5wBhYr5YvmdXogAiwJ5VpnS2FPm4bSv",
  "key26": "bYYSCrvUuG4kBXW68K51C7zag2UpzG6SQnaeCCtQZP7cTVYWmuoEW5QNaovnNgbsQCAJvfVYUV3xDuKduhk216U",
  "key27": "2C4Av91vnkmEw91EY3uHZDoVxzc9EvCddgXeve4WAxByHr8ECE6fyuAtsUWgP23htxdK1EKuTx3ZoJkTqv2TzRcu",
  "key28": "4Kqh8SjbEnyDcKxZ592C6rNoth6pq9mALVsa6xsKq3cKroxmyNeSqbcme7r9qyDGXj4e7E7cb5EELCDiNdueQEGC",
  "key29": "3Q3TocbMPwdgYxGkfYofDEpYYW4MDWwNCaQ4ZyBvwaBxhujYZ84ih5Cb8arjCbmU9L4adXraaemypEXmJBTjmbC",
  "key30": "2E7zWiw63UTapSr5bZ24uAS2fAU6orbvLuD2XUWx2UKeYD9bNGJSsoKjMHUWYYHGMabu9xWqug1vw7s7od6a1ALJ",
  "key31": "4wFbsusQmbwAhoD5kYCWpU3McjgfDRsM8VvQ9jay427ueLBFUSb3AamqanaMVWzRkAaof8Gf2s1CkDping3kYAzz",
  "key32": "oGZ3DhmJj1uR5ngEvyqAyrUvS1PPZUt5qTUvWMiZgUkoUK3ek4bSA9U4ATxJDsWhiCz5dKJCR9nyBqmUxTLkxxj",
  "key33": "3jtnBCZp1KynfXaY4SRK8ML3gx72MR24YCPA8a8aw9aP3Cy92iwoU516YtJau8dx9EaBna6up3mPruaYuSnJ5v2u",
  "key34": "5FLM3fyiYsDZ2fyNq86SXnwN29oqQLcpnjH8QNBxSXVBKHSCZE5Em63cwCyeMwuWfYJNzbXqCuy3yz8gsfEAvqn",
  "key35": "4gSRS97Xc8h9y9BqXEdyxNWPmZECadPBdWccYDg8EKEb6b3zpRhcJiVXddiawzeVGJ5JYWeyWGu5a2288UFrhz7J",
  "key36": "5kLNgBsUqHcTVsXu5SjejYch36Eox2rgMCmfr713aADMgWVByBymzZ7wsUfSrCdf59bzCT5sehUa4jmMaagYgcZw",
  "key37": "3jmj5NgTPznUJb26tqDGK47Xhs9hjJtBaXWYQG37mGs4UWqurjMAHSLvkzv2xjzwvJMFWsV2gShBJUCaZ5CW1yXg",
  "key38": "5yQ85KsDKXxb3SZxzqVk5dRs79iNjRG55EjkAiJ8WyQtKUdrQSfJYRgGqH9EHgiM7oqQrDAx6K5RsMN2ykpmQyWi",
  "key39": "2aac6tZLEHVojpyGdLNny4KzipkBK3Bvij6HM3VpFj6NbpmEvoPuC7RWajxNnqHHgvKBuoYxMEdF3643d6wEZStF",
  "key40": "2DkkrWs2eKn4HGd8eG9PNhMFKu5tw7fakMMjS6sCZiNgxS7XhDQEQoH26yrD8tzLKZZ2RtqY1KB41zZ46vMzJfRW"
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
