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
    "3gGr8X8qFcxNPjjpBAYcivXPwPTMTU9z3E939J2THD69BiXjBP7FxEBBpkem36AZtEuGABue5WWaBWs86gZWZzck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SyGLqpQRfpzZFXA95Wn7s5dkJnAXmhHgnCXJvyvGXXLBmJqoKic7xfGFgu1nwEfxhniFEoQdHm7L97arcagxh36",
  "key1": "zTRWRcUyiq31KRT68NcokoRWABu8V9XippH5ED4GKG1QbSPNx5bpgwa5SKntVmmjg7mKnNzKoa2VUT7MxrWpfYs",
  "key2": "5Ne6BHUznP8s6k8ZcRLN4w424ei8gV5cVQDPmUHGPDRT7oxCxDkQArkgGv5u3aKTVtyYnUBZRDNXkQff1B8MLus4",
  "key3": "4vKYLiYaJUBj9Fs97D16aN7qYcCz4K3jXoSVTaJkecafBfcj24TaKGJPvfKFFwc3myr25P3sM9TGBw8dxLhQCyQh",
  "key4": "3wq2LibW2KhNo1kWjMVLNHNr7M9Xxvkh9icwPmTXvUa51jru5m7JhAh47xkqV7d7Tc4rStbGrLFYJHXKrmQxgdPB",
  "key5": "2rg2d7to3p8zPbZrJ9kmom77Su5G3UWydNK2bUwUBCeGt1W1uGjGtpRpAaPPoBH98kMEEqgvJsi115hEkyh11E8d",
  "key6": "3ZHQGbqQ1YBvBFatyZixwYCTvCiqqmQGqHBwv8yEySNEMY1VuwJqiTatCeRnoYRepZkRvqAK5RE7pzv4JoJ9u8r",
  "key7": "2p6vL3uoks4cJj8xzi2qxDMidwMUD5AYyd3S35KMDm8h8cc4kZNw5VF83m6nc65RiyHnGn5rvpqkztgMaAfpvLZ",
  "key8": "5cTDCwuBcQuXLBsKM5kcgHJw9tvZgMK9mxo8E232UetXVwmLLSh64R4kb4cDKRBwXTQ5bqgGW48MccbRQnka6fWD",
  "key9": "k3oHetVQWVjfpQ6z1PjBGQgSFgdZRZLQmSiKz5wGizzt1oKuvV5vgRKomEJySe2uWUwSMnSAfKUV59pZWUCqdcC",
  "key10": "5vNtVGYZ2tmdcAmqpdG2CjHJ8UfLwWAoUmMmk1PnfnQaGx5tUbCC4rTeqLSGLYDV9uzLpp24VTjZnw91c4n4xmaW",
  "key11": "nbFwqKAWkUxkb94PwrwMZjbPRgYy6wngBn3LXGwCTWZNxuW2XU253Zc7omayBBgEXMdeEZMkPVzfbcF8qhC24RB",
  "key12": "5y5pJe1jFQ8DJjWR9PyfnS7Nr6D9vBsQWSYRZXAtT3M2BrmiJUpbgBwTdSrBtzPeLGRtCMFJrJToXYFBRu7CPtVy",
  "key13": "4ugvgmBow2nbBPMiCSLFQuYdWJxBrT3DqNXaKKDmBVyWzXQs33q12QciNddX2jTXpAeis91WVoAsj8r7BAfsDV8y",
  "key14": "3oZQdCxW8cXr3A7g8gp8ea3aYdcYHMTwb2iHXdqTCBYPQuKxWpXPRcNc2YazH7jxshknK8xo8C5A5rCcoytf1cCJ",
  "key15": "5vGV15AXMYzRHaDKoZu6mx72GkKDWGyeu4svbXg9LFaGWJCjHx3jnLJYU8S7yF6wKFk2pgaTrdfGMdQkEPHVs7Us",
  "key16": "4AVbZUTJaTdg26Jmh4X7HdUFPnu6oXKgmzM35396uuYcWCb8r4doZe9mn7vUQ7PxC4VS4rd2mESZaxn5rikCNENn",
  "key17": "3s6kQgNy2QJYcDWtaMQmj3eWJoN5bbD9BSxkPbHiyPJ1NNMBKFXy7YbaTueMQu3u9u7Wj8Wu7oSsqM1xYu7ck6JH",
  "key18": "3AAeq6K91TGXcwNomrWCqiGECSDyjQG9CrxdD1uSwedZUX6RSumr1LcUpXJvM4dtzVRxx4e1emJzPEdDNXQwvoid",
  "key19": "4aFQcswigjPUhUKBDQPmbvG7FbjACpxkZ67H8oca68ogCVGhChqiD2YCG2cbQF7wXfmt9EiDXsvneuMCjbimSnH9",
  "key20": "5xFGpHD2CbMc7ASqahKCkvhukiao2kHm67wCLzoWTHMoGepPTxDdQdX5E5uEfbUUQf4pbQ1PU4jDjJmSHYvZfAJD",
  "key21": "2JEAt45HVCFraY5HZ4VvKg9FGbz8T4qeB9NueU4hhbw74Tj3UbiyFSsWi2hGt9u9TZLMHhsponrDq2EJ8eS7Cgxq",
  "key22": "9e17Db6DStfEY5VWSvKX96uzFYKkghM84NjRyAFURfFpJqxcAR2DCNB6BVRKHShHnN6NQYsLvZvmMm2Rjkv9twA",
  "key23": "2J7b4ZtCjx2oohrcWqTqF3dstumzttMwc3ZZpVgUntShvcxWzckcFE5pUjKnT44WURZaoX69BnMQSq22TMKPZLga",
  "key24": "djUe2SB3Z73kaD8qU2DGCAe26pXvteimEG5Jn7Syh195tiNfoosMGCytA4iqAqf8U5cvrAt2LS7qt1e7zxT3Dzt",
  "key25": "2GBiCEdzdqc1fUGoNH3NyHJJGpmJL59sgCm6UhBnocpnxCRVpa9v1puTofZY3oEnur59PUJezMrzwyYH2MpdyJzo",
  "key26": "4H8vJrrA7R9K7MXqi83ZUZKCWMcuugnYVtmyszvVS7ubSzsNmVjVekAEwfsdBapjE9eL1d4UewAPryCz2Zum8Jgc",
  "key27": "3iRxKdKYhqRDaSGkm2DZoesCv6vvSBqa6czrFgFRDwb1n2vPLTmYs6W3BC8iCXw6RNUeq46f5xJCrnVf9PrWTPJA",
  "key28": "ABoL1DnVeH44P5mPVFWubYv2q3VfTPWh4ftHGjBTsQ8Stmyi7dtxBit64om1kae7bJ2CxrWa9Rfmijpk3Kdphp8",
  "key29": "4SDiEWqqYDgfJrPk4jwoZJUF1CTnVXMnDfMupMbkkn2Qytzu1vnMhH8wFHmjegjiwmr79o7uNCbEXzRcaUP7KTXx",
  "key30": "3TQHdff99Ubhnx5sytp46oiRWwR2uifqqezfnMqy7bKvAarTQK3R1X4zwMJVNUg9jYciMEi8YPgxa657fyBf7cg8",
  "key31": "55bxywBWUzMKdtEVU3Tb9DMT5E5aaawMRbAPVUTNu2E1kNG7iTkzVWgDjXtW3P1pXNpTTTS8GiCtkqo6FZsFenkC",
  "key32": "4GXPBNtuzcLbNFYEF6En4nzG9B3PPtPCXBrCLKKtMkAToy3Ju6KAtftNyGQtLo4Z4W8VkPiV75mshtteGbcq1Fkj",
  "key33": "2M57qndcmA72rsktnvBz4HRBKtXUbRQtrebXQjEhzGKgdanEnumZYuPv2uXStdEAWWLizSiFwWPFMJUe5qvD94r5",
  "key34": "r6eJGx2yA3msKq3visWKbGeA1mZKKttUAa1J96yhfCMUeNWwT26WttZ3NtDDYAjcdyM9v3zSL9yWvwnhPqHCBBa",
  "key35": "5YzCZYcnWDme73GN2UHY5VcKMQkRC7oioXLfh6AGQSSCuxbn11hNKccqrtADZwHe2eV8CS32TxZzeUgZUgD84nRD",
  "key36": "22wD2SUYiyuSCaxXXFKKnVhQYNZW5UWxLpw7h9xLjHqRhd2NagnN8uwaH336BpuBHAT3hA4VP4wEnHjq8TH4kTq6",
  "key37": "rwV7q4uhJDY6hfhWGgsN3M68BRczepLBKy9ZUDDz52AfXGpsmTSCvP3Z7ogLeJJg4SHNqmncpNG635kzBXp2KwM",
  "key38": "64SFxqY47tZ55WMieARREHbrfXpBzdWudhaikfVkCwHrVDyz7akVFSfSMaDKW2oLTXxpzPoDZwJcAJQUdax5pq9M"
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
