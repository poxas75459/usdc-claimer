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
    "4G6tLNcN5UqZ8aob6YMM9WgDXj4shzCrd1dKCG5QHnc2KdCKZV7htynVHhxfPiZkLFvaA8HxBu9f2LAQyCEcYt4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ys7KeNL5fZ9kkkVJawMUurBLYEBXLoMaC5QBszKSgQTej7pjdaiL5CVGMMCmw4XAA5NG1HsK9LPLkzpDUxLRsKf",
  "key1": "4EjxrfE8sqeKxGQHK6i4PXsJyJRutePvnyh5xeCnyAUE93hpRvmJrhc4G5TeeHXbAJWXeJwiSknext62hB3SGoo7",
  "key2": "5QGdqRM57LRZdN3jwcz765qWfJDfgVZcUuqQQcSjEt13k36KZKyphSd8gHkwgfD39ZsZGsttfRrWoJa96JUVYTUa",
  "key3": "5rdfQ7xEVgE3NBhHA8vsCJgmaiaEEBc74TwcAtikQTLH1DNDNQBtHDRq8d9q71DSA6rK23h1DniFSKnKaw5cUyj5",
  "key4": "5EmL5R9sx3yKFQakzF3uBBfbsoxcYPHP7mg8hdAadQJ6sxfudd919VRETmkxubuYZLwdT4v1AkGcBDSUbW2ywDzt",
  "key5": "4tnph6gnkFYjJxP54WXimvQA6p6J48Qhqfdbbj8nGPjHns8GegQ3Utcg5VgL7A5Q4knVRf43Z6PwsXTEspdbPs1k",
  "key6": "62knqcoA1Et59YTPBb8wk4W2DvRuRNMVyGq7THhC3sD7f8wXFUnQpxywZj4r7X5DsyT7jgr8FQayBRDfAenmBecz",
  "key7": "5T6eJ1Wz1fZsfYSCAZJFTZa3FvnJPu7DvNF8gJtRygpp7MYvRe4gSDpaRYWhUAQMPSPGEgn6DKUjWoMsGej47ucU",
  "key8": "36ZM2qRZNzaYyCWAxRaMqM2ZVT3VbKCRMe1Qr7ANbGze9AmUqyXgH2DastvzGU7Dx5KUNTKBYVuCqPRi7bVKEEp9",
  "key9": "5JURukBDWZxdK6ZuVKZAxiTUMyxDe9CrS5v3YDioYu3g2HESSwgNP3pvFh4Vqj8HeTRwgu16evdeiBAQiLRUVsW5",
  "key10": "5qJ6BnH2QoJ99A3HW6ktQPvhXceiUpib6W2bxtM5J9vdYRHTKgNPzHDmsUDXUPciuhtQgxo8CvdrbuEF2KaaHVJW",
  "key11": "38qBDXHqp4qgH7TbG7FfupZvg11JcmQeAWEM91thzjngAMrUJkAsZyE5NTyfcbbXrU4QYgEW6d3WWAMpaej1LwWZ",
  "key12": "2mFT2tC2rVuKcJjWJMaXNmcXHtAZ3N16dEz4SaU2nz8BnXCxhmyofnyFinQimW386Jy8kUyhHDig79CjmLgeSDdC",
  "key13": "2tEH4cUNRSPtPDArXxkXRSJrStPC6A1M4tx9cKZdeVSNLr6hUPBnifg9Tg4EvmFKts6xCvfX4adUKxzAHE6YX4Ny",
  "key14": "58MMrQPb9x5pCVPrEEy8AyPXB5ER13oWwegiT9u5veHkrEJdykZ2VaLSUX1JdzwJHAVqLX3SfQNUsvCfCPd2fAiD",
  "key15": "TaLNtaQQfjSAwRkci1XA7odz4qHSSD2RD8bvaBGZmLwMthntgxubgtTscxYkdJw2A3X6AhwoaQ8YEQc6grbkjFc",
  "key16": "o2pVaYoSXPC6BPURjx1qjoTL3HX84qyrFfnB6g47UkK8Fm261R3TYzSSU2oArNeMsq2vt7tHw7JmZBEv8ojtkEa",
  "key17": "3TRxBJsNsCXmdgtWcyynS769xNePLdrK3pVo2LMGg2Goy7jdsqckMB2NMQXsU8C4homFfmgp5Ud5BhYLyEUw7doA",
  "key18": "i2eUpE67oikP4nm7SsB9xwFeXvJu47AmXu5QMy1QUApoi5zsKGdLYGfHgzsfptwpyYuEuJ9wD6ErPDMD85Wg8db",
  "key19": "2qnEtaokS2Gq2yUbohcpFDMhpURYGN16P2aLewJ4p47DiZKNVQUFjNfAXAW9ZRBYKaYHkfKAAea7zSBjCdL6hD56",
  "key20": "3NdpJvCDzvEfY7RgTaHmoV49aJuGmJhgf69Df6MbA8iwNPb66s4hc7yajvSwJ2Rke17JxtLrUYbt2ieAb3Kxgmvh",
  "key21": "5fwpa5KDoXZyen3JxU2DeYd1oVgXPvRYhojLZFEZzcfe3s6u8f2g1dRBFsdBGMF3WV4KXwx9KxMindVNhxSGXmH2",
  "key22": "5pK4TZqcyQBVDFjLXruwUvcJVuSc6rYLYNowsEQFmni6iQF2drhqhukys9MkfiLCWwqcFc89aW9pYKtJ8FL8avV7",
  "key23": "24aeBoDcYowFhK3nRACSmLyD2izksFEquguruqo9DMC5RtD4rwKBDHUHZ8qDuMuGBbuRHDaKdifG1cUgznXYnnMU",
  "key24": "5zJFkScj3dW76Ss8miUWPFQSJompUZos1cq58xHcfqxPvS3YrUt9mDv75tDDhiVxepcJ8UmoEyX45uLqaN3CKwdi",
  "key25": "C2HBUWXk1DcwKZ453b4jXN674XwuBw6GrBSnFjGhoTqzN48DXvuFGoa2dTRpm8pctARpQGSRY961oEedFAsyeam",
  "key26": "nbk3pdxzmueQzeBad858eRdJSJZ8Yfg9Fd2QfUAULGGDiXFh9DBDTdt7QzeJhxMAoqTNdNYTGvk5xFi6QqWo4Qu",
  "key27": "2QQGz1TrtF2EeEuJucZb4qeXZKbTvHFUphkpxjCxggb1tvAiqoaxqMi8KFGP32TtqQUVQUs8xkQidzV8WgXPiQpW",
  "key28": "3z12mFb2rqQyKDWKCLTWqxjCsndqReV73FjFnPLF52uZ3yr7JNnep63KRF4GGpoUrhb3Xr4LXzsJhbFPwzTt6jDY",
  "key29": "5Grrk7YSudXqerRv6YD1EvdGKTFkfyyDSKtF9wYi7p8NYcFvyCMTLtpGXhdzGN3qrs9TrAvkgUocd8Hw5hDe81Ej",
  "key30": "TpvgXxQRwMDBj4DZr5Cgm3twUajSBJdK8cgSYN2gexRxDVNSY14tpWE99oxUCMLtd86Hk1FCq2XmyKjMoTdKy4c",
  "key31": "78texv4rptnKABQJsZhuVq3iYJC3GWY3hVWCjvh2qmcoof7mr2zogMNmwoKmj9R6dk4dSD6yBjBiTAZnzuHNrr3",
  "key32": "34rq7VPwAZmsQN6TGFRfkswtq9kVVujU7nrcJFSmrFkyqf3GU3C7284c9ia2ovEk8PZVT5QrmNBTJbBCoj3RoY1D",
  "key33": "5ko5oRchGqSuLix8ait8vtu61y1GVeYhkS5QuNpVwFgiMu75Mn38sUjEYpucUxQctzFVv2FhSTeFZGxZQuhRgqnc",
  "key34": "5jZaUYbtXrnTtyYCeXzY6sX8K31FiG8Ro2QSmQ3maV7EMmN4QjvVD8CPNrst4pXy4rpEFzykJPHho9wcdXLr4iy7",
  "key35": "jFdwAP6U2FGkK12sp4Y1SqmUuteNxd7NmEXdiVgAkyXqMjwZshdFVSM4z4XiRZKMXV3fLaQitusBe3S3CDZ7rPY",
  "key36": "4HGcj7bnYX76VEUaHVuy8CcoV2eaR4jv9d49EinhdTkemCwjC8SEQz4NkfQVGHKT1QkqYDUeuGydSTRb3iRDzL8s",
  "key37": "9yPVHrwkxhu8xZfjLrqXQnjXEb7od4ziFPaGRb2EwkY9WsvLhDir3cVMH7We7XvBc1mKWBJ4VoN3sf6rGS84o2m",
  "key38": "3rpypK6R2pTnp7u2ckAJV9MT1LSY3uYqfscsEk5xGiQi7tzgSs9cJPUB4dWw537BSamYhaJKwX8prie8axNtG2E3",
  "key39": "54axtkcVBo3HfRcgtkphxebb2FXnYCt22iLwrxvHyNtm6yix4tS6GupDb5WWvS2SPBdpbDoKkZYBySfvxW97GX4P"
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
