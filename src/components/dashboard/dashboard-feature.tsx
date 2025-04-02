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
    "5mJSCCAikQnCBo52jCEFtGuxVxWhm59k6iVe1PKoz4TdbD2k5PYWBuG9mNvaa3KJNytHmEmYA8kmhzYYJkWbmiNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cSiZYppD8vzjhei82hK9a3R3DA3S9xWwFAAzmM5dYAsenWLQ8gugdJNUBFKNdHmdnsaAX7VJkSzA2i62SaD7P6i",
  "key1": "4K2UpuYH663b3Kc6gFaeu46A1N6dm2AM81vjdnvHyFt2ddhP6WkcbM6eStEgdhZZ9SjxYtd3fs2oJXxRPV3hzjMt",
  "key2": "38q8kQ6sigZBiMW72zsikTJ8X11KHNMH5dEDDgEte3AA9rhmA8i4ysSTM5dVsAmqRSLyQaB1sMSAFhMrmpVN59uh",
  "key3": "3iBt8ARi3pvUqXwMWrhWWFp8RQgtzTWS226Rqd7RqGYbN1dbs4yL4Fkhb4JPyJx4zyofHxukks1914ggHngMjTTE",
  "key4": "5LyX7vZM4w8x7D6DfMv7ZuvVS74MzTLLjcEpvqUq4Ffewzxuw83Urt4C5AEoBZenyr5QeoMgSL4ht8iNXXTSHfSU",
  "key5": "54m8ZrXqtKYNVj5ZHJgbgfiUjCfaEiLjfG924iWECdKVDsuWryg5xdsXR3cofkKAV2pjNV86Y1pFmj4vYYYHRr8D",
  "key6": "3BAyjZUXsXBicBZ2VFhHKBJLZQvgppjZseiom7TKAeJWjGjS7FRgpsSH1CTv3UrV7axBYUDgW8qHfutyTzVr1bw5",
  "key7": "bvYCVewSUYfJbJCyTFn9mDqVUQif2sdr3oc92U6Wat73jqaPUTwsFLeGk2quRosYB8ZLKDaNWr351sMqDXMSPkq",
  "key8": "3SUVLAmMYYYUKqR7xqrxJiTfhUb9EiHf8qBPTzw1CtChrJffPCAbmShemaUMLxqE1sNaiY5z5ZNbuchdgc6nSeUu",
  "key9": "3RjgxyC5DekmSHqPiZu77qtxsXsbe8g976BQcqELW3iujhVuBerZhmowRaCNRHpi6htMthTxNM75Y9AGF6akXoQk",
  "key10": "2ZUgsXPAPVYabgpV43ftLE8DTFE9X6XUHLJiFmrmgGDLJ8UrUVfYcV33hhNiKg8WPvuvAV6H2dQWse7abfDfoKt9",
  "key11": "5o9QD72BdWfbcjdMrsT1ZV51p4zd4hudfr51bj1SNMzzmxXVXwYRfEkFeURMdUsoQt7ghkdcii3rGxgSvaon1b4f",
  "key12": "2YnMtLCfHkftqFdRqy6hq1htMmmbnwvA4KRMpVcHpZAAZ794Zm8swU7QDJ4dWcVSWZHqFi6znmFs7ZTTsYwUshRV",
  "key13": "33bKswnM26zEfcmQGt9Hz6adyzvzbfkwMAgLMsa9vwruVm4GhADt298CKdn9yX9wyFvXK6vi4mtXQ2SuSG8cJdqS",
  "key14": "42yZgC8nvXz5TXSW77CKcFie2btQPyc7fWnohkjRuo3Vwv2ffpcUqainEVHgJoMRjfTdNsKRp2FWBz77QjoiKEEz",
  "key15": "3UcyuYP62RKgaJPRE88V34L2CfAuixaHSVqZhf8EhmBjuKn6TdvU5uP2huwchhNiAvWnZzC64r8QKESNUvdnfRKF",
  "key16": "5FyoWA3TAXijHy95odbmJtrSJdbUeLXChHEyrrTGYdRRzjQnyVotgh8SQJQysfA1baDofriAgg6U9Xm65zyjNsi2",
  "key17": "3y2SsvuWBVxu9KHdopciggpsiVw8oP6CTQY21NCdCfMyE3WGL1qaWymoGp9BPxMaEksrNdPtCNVPuyhdcB1eLp8q",
  "key18": "5SRp4v4vnM5gY8zmuSjTwZPPcCrZSFdSg7GpoESAgj8bCJh6NhK2jLhjChATJwbLuKtMgY6eBGPzuryZfh3kFkpo",
  "key19": "4rRgGu1C1hg3WErq2LNrtuGzzqQBWogxRku4UqUm12e1sdkwVEqSN4ntbWRbDxsnt7bSvLLypNKgrxuQ1fgF89eG",
  "key20": "rE9dShYmYsWKdT9FLDPFucxtBMnjs9mnwWQNDmU459FNJnj19pNbjVoMAQVQJmCRpnpn6cQW2NEyTRuSWFrvUYd",
  "key21": "2jphKMQMYTdYmQhepXRKk6ggnUPYrTvpyf5MKDqdSjXQ166wN4r6qWHdyvs4SnBkuYzrqkGwVZZEBMeBUhA957QR",
  "key22": "37PS3VZ6AwLNH8i8N57DxD8wg4uqp8yQzdPbCAVgibe8YLoMpCmDQKqrTcphhEYpwQwaz4o8JfrfBXyELWLk8nsB",
  "key23": "2uWWcPhjYFThEBdDDtr8c2vkXrzwXoRXzbYjuKCLSCCCxXEvrb9Ko8zZHT924evj3WmUayQedo988tT4BjMwXdRZ",
  "key24": "59SaAeuLWFVKZnx58EqrD2oQ1pc2MtBvSehPSfm3MsakQs24DJ5fULTkiQJRfKZ55X9A5PgKZP8z2jnN1wmWK2Tj",
  "key25": "9Xe2RQkbuuEeUfcodZ494USBuKXMQ6FonypsaRQMT6biQR9wZTt9DUxPWftNt8TiKkSfPMG8YXhCJrYTAfDEVke",
  "key26": "5PsCRxNSg1ihLoTbafZ4BLtsXbcxkYC3iCKW7wmwzhHky2jTDPVKvgM9hBda7MW37QuTBx8H9YoZHzZ3ZDcj2j35",
  "key27": "2fK6miPN2NkyPH9N9bGoLSfqe9QN2NDBZmKSikSF1bJXXUzFLcKht1QZSPfEsXBWdGJpy7KoT6wbcAZvZ3Fhj3qW",
  "key28": "4V9aE5MsqiRzQk3YcGesWWWQpr6R5FKwxCYn9ouwhG6SgEC9eTrA6da4J77K5vpKhbUEuCGRQmfWHmR8Vn8ZXG7H",
  "key29": "2kqiPzu2Xkbg1iBpbfoFbXaW47CJWAVMztRw2nZjSjQhk7ro1Cu8dauxP4U7LjPwwk2W9Mq7o1gL8jDKQnLPJDcF"
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
