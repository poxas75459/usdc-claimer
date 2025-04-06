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
    "8ZysKXmc1NJUX7r2GcN9zp8ibjScMdDEuwcwgfRtGE6e6edNYRq46gEgs7BM3FXpnXFSkYBrmSXyDK7FC27W3G1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63qj4Q5dj7MRURWSpnSnuNvUbW1irSkDbWGjDTXZqicV2uyYVvimssPZGnVaY8ZnAn4H52Y6wMRtwYL4sksbca95",
  "key1": "394RQDiEnTRTCjYaG5oEd9vDRhpMGfFLphEMBsaezgRmu2eKXXsvXwXG4qFmpzEPvJ2GKTE5sQsH7MScA1TMrX1c",
  "key2": "B8kw1khbFAcp5G1wEQYhWv1ZCSh7qsKejWCiy4oZmsXsEEM6gtxNm6Hm6tG8sZqBkwG1A3eyYUq7Xao6gz39tnQ",
  "key3": "5MWWuxdCxG8G2YShxzJdoMjqBFhNSEfN12q8K5mv3QS73o5HvFxKE1Ei2zDGp3No5wUPUCtH2EA1dZ2DabxHajcm",
  "key4": "2Y7taK2krDiEQUfk92ZtfN1Lm1WP1uYGBGCYKAD4NqnRdAV6hGmu3gwiZrkYatBnF9HGp9nZTPgrHCVvvpkSUmBP",
  "key5": "bRKUsQZSVaZp7KZeVGVV9QohuoXRDxBdKvy54b7WCZYYEfpv7boW7cC5jwbKzfq47J4yT83i7wPtDZSXe4bn8Eb",
  "key6": "66zBr8k91htPQmUSMb46RXHbA3JCA8mJQaV1HHSRbGvwkhjNomEHqsur3BjzQHK6FcQUB6jCuHezNmh2U7ktt3gi",
  "key7": "5m7ugv8nNzXYzXvvTBwYiPibb8PjFdSQymNZ3Kmb5eojCU1yLSYMrdp6z3z5vMZXYPynBMrFprHrvApBccPFtvFY",
  "key8": "5jFbiH5sh4FVQveoQN6R5TydERom2uYSWwo6sMRVq7RQPy8L4HkTvvJVLyNMkU2sgQjokVNtHkrjo9PSMqESXdv3",
  "key9": "B3mP9LgFqN6vJvPnm5HVq4X88E9qAzGuYr8KDo3E1kag4VL4uQiLuLrcAPWWS3nZFz4RGC9jcgRydWuquLUyNGz",
  "key10": "3mgHQd1AVNHU3DdAAwq3cmBN9BKsU6W1W4geqxZgPuLtMFgWHRvPpJe7FY7wk2bCgnJXaE8nxKswNAQrXMgUAXSB",
  "key11": "2rGgosrtmoZ64zCccW56JbmZB5zfaKGjCLic7z7JY4vehgXMUiPsSMTSShxr1YvMymUb5J1DF4vJk7mq83iwSmRZ",
  "key12": "2VkKEw1ii4ZSH4n1C79iHct5uUF4rpsJS7gZGjo5nPJBLTii7Lyf1ccG4Q7bPaSZ6eiMv9uePco46b17fUVRHFVB",
  "key13": "4wSzpkY3Evou1sKFTr3Jv6JsKa5TYkiti6KYLtsV6b2QM8p92JmqKbv5Um4XBZPjStY47YFw9r3XRPixU6rRFmXC",
  "key14": "9kkjGsCcLDC7TXsyXQK8Muu9dmm4exdTM4f4hMEFNUU2QEfY9bPbbGs2k4VyTjWD1ed1s5Sv8Hxeic7jZ6crnoS",
  "key15": "52jjhrx6h8jjCDamx6nvDXqUpXsjrDDLy5EWoaawAHmMbjLLT7JnbAsTE3kumByB8WJVUe2Pt4PDGB8PqUU8VQcy",
  "key16": "4W5kmETxHNkm5ET4nRJE5R4KTw6czc4EzHQKSQradX4iuuJyxUGd7RjpZPeaYNUdkMY7egzcpgg3Rw8U1cMUuFrw",
  "key17": "5vkP3u3AYEwMxdc3Lbxxb9MU3w7tU1SX7jmqeXxmsmL7PqEiA8SWHyQRYtsU8GLvPaHYw7fghcPwyN8nbJ3gqWUK",
  "key18": "5fydsKWAXA8LCqUDtSsp6qTHXpca4TArpc2QpMB3kr7sm1zsTFqFSjzdmwXNestpFU2KMYFuCD34n64fav4NcG8Z",
  "key19": "5NwWMxs8rUjRzNE2fefVjAvrXERt3YaDJFgj4DZLEBFtS2Pt3h91Wz1Eoy4KDHaWV9t8VRjTGuwVvqKvuhhsPd7d",
  "key20": "EvJxC8nMMHtzvz6gY6AeMmRcz6vAZFC4QkArFuA6nXd4omhNDTr3JL6QJo3v1RdQBTWDzqkcAX7JfStAJUSiifx",
  "key21": "5QkUPqYbEyhhNNSKwrSJbih6sbR2q9g8HnMj9thuwPMv3VZdXu8g2B5JQCzoboxQjE7PtjgoaJHsckc6C9sd6Nb",
  "key22": "4z8hsvXcHtA9w5JYyxfG7idVYVRqcqZpKdDkoALqWSRY11djJG8v4TyCFMSaxy2XNEEz8CSjDGKLCGAVtgheBduC",
  "key23": "2hHiVaVpUCThcq64BjVHPEVNXstTBSajK4s49Y9sKD8PD2cVVGj45MMt6YwS2MWMVXc7PRjvHu5ZyBMRLRkL3RcK",
  "key24": "RWjyxNu35hxnboVirETPZKXv2bCkgexXu6ni1yrdNswuVN37RJsUwwZB5JBuxrNQb7yKwYDeFum3k1JSAMUKPAp",
  "key25": "6Dhy6siwTVjrTjpn1626D5v2Nt4zPrpo6YFbFFeqVSkJuCEMmCTBFQFYXGwpdJGqr9K5sSAGumTxoaVyiHTRzmb",
  "key26": "31GbkN2pyVg7PgmMLxgdnyrQLMfJGY8jpEhvgpFr98YpjDN7VQB9mjM5r6Na6zkYQ3B7q58PMQXBUwBMZfkh4TY2",
  "key27": "6ih7ky3L19nMQKtPG3cw3NnuakHgCYSH3NahmTyaugozyjqHJcsj85rL4qDCpbusjWAN6MjVwwJVwsZdAsEGbV2",
  "key28": "5bQAveUUbqzzT4111SK7TAH3Tg5Hng4BLFZW8s2EtH2bCPYSJzGqUXHWU17qoHAp6fgtSVkFUy2kW2UnL6kakyFr",
  "key29": "2sQz1W7bzgm9nqqKJisMLxVh3P7QVNG9Rsm28QP5Nsjx7u2fwHiaSfzGFzJVM3CF1BngbXYUK1GbPvoZeizCuXgL",
  "key30": "3SsPc5cCn5cNQQpL2gua2BPv6A1t4tDXHqq9d2eQm3n12FKvmw77JbK4WdcNbZGCLDZKQ36jYBvCYxYxX3kYx19A",
  "key31": "5E4f7gM8apixXreBBLcCwAcehAbetR5GESxysZWypFxmRui57yeS7CvJpx8CaXC4jufSp7y5S8GyJuancXwnLcoX",
  "key32": "5hv8PPuxxXRkNVHzPKLjESoiZN7rrtyXMoinmFHiHzeYA3J7Aeu5voaTUJ395K9o1CNTaZFnfEdrWTLQ9t5CU3bc",
  "key33": "2NFHpAmscReZ1FCPko4RuuXpLbREfPWdHwpoeg9GEYUEyDeqQ8QTR23wwYVM634b1vCS7Nqp2ddYXkdXDqUN7bvR"
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
