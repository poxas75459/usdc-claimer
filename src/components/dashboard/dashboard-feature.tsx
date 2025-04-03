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
    "J7ypceYxUUZTcb8X23Ma6q3hKENLz2unwmcTjWRycKcCqsGr4DmidVyAEY8w276j6txCi2phKgNc9CcpD3e3FGu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e6FazW1aSETbLxZ6x2yaTj5CHqNC2MgL2PJUhgPuHZVWtYqVirJMsgM815UMsXRvz34wjJXWuUXWtZT4oDr2pdi",
  "key1": "4MUwUMsLawresAcf8ocJsV5m3EY64my6a8vyyms94kc7ZLuBcSPPDj5e19AJ3BvCCtk7Bf4BTWNGLCg1uCGCSyTT",
  "key2": "4a9kDeCb7Wbz4YjUTHF51EwfUyffK6NBXYKjHJVB2fo9PfXAngJwAnbVeywM6j6DiWADPP7ogdrGumABjjBus7bD",
  "key3": "XETqPvkRGgJkwJU71MFv7SZQk2A166fnV3rs4SCcHYzfqamB2ciDUK4eQTXJn6rwQWcK3KQwVH4XNJPf3FTRKkL",
  "key4": "4M6tB7rrc8eXoorDJPCKBUREJP7wpzEbM55tCkTQhiyE8t9yiSfgvzSKmQFpyCkNzFW5dE57adgVW9TVRmTVWJL7",
  "key5": "4fyvSeJZ8PQVMdsiH5d5Jk4XrcewTu7SdGu6wswziyL5onhpMDfdzn9ikFp43i5EsKjDh7zEZqzQjbsKXiR1GPMg",
  "key6": "3ENPEjDWCWuSWCRt2RVFZwXzavV9xuwxFbfN1uRpm66UPi9dKzriNcSi3Q1QiB9zhdRwsQavwchEKT1yVoBDgxCB",
  "key7": "KKKZ22yDkRyGdt2KQjNRkpRwERJt4gapKKcT157mswZpSewUEKvTAmyXNE3U5ANGx3Sjsy11A2BEeFsXDtPdaUm",
  "key8": "4HjKRw1TSKJSGGvmUUrFhLsbz7Wotaq2rQufgi5RkeG8BRtAUS89kqx1HQyvr1au3gpGe2Cvpmib8Tw5Xfy14Yaf",
  "key9": "4zom1Qx85qeJKi3okUzZr9AQDjBXmkJyBFfzk5tcMnC8PGey8671pfninnUTjumVYV717e5uyC2SXnpbLuQZKKpV",
  "key10": "38swtNK77Bc7wbdfuN3NQJHDTbmFLWnwvGwRS9G6cNtSbmRRkgjdxML6D7UsHAEPuKTkdBpZ5YgATfdJzxZ8qy8E",
  "key11": "2sVMSWqyvybP5NesK6EckwgYoAu1zXaLReBg2i4H71DXTTxN27AqoGMApfBh1sRhZnfazLx6SZhZMi2rmz3d1tEp",
  "key12": "AXk88KwLCBrDMujYiEbrzRe2ysvbQBksptCKsDLB7911uKAL6BASognWgr8vAehwiBdAtXB9CzrPgYoNPprEH4x",
  "key13": "2h6zG7DhASjS9AzgskELxq6NATvxWaSpFLgD8VHuHV5RjKQCicFKS5koHxSXRCvrePnurtA35uxictCYUycogTmq",
  "key14": "5kXfDhXXZJNM4bxiRm4voZbQqzJbie3xf1GxNCh9oWCgmTJBM8Z5a5D9ZWhaGsLr3jqtaq5Vxrr1zSgmC6MHXFkd",
  "key15": "4UVcrLhJCqVe8sW5CBTefTrH9hKtnt3dPpzCrcE4NNmw12Bh5eeah9owvMSixLgSq37nby22dxHuLVB5Apq39iQq",
  "key16": "5DH6KE6G5xaTd4oHSbyJnTY2jaFRvGzQTZJNXvHy2w9b46WAfVTvoxzKWZWFjaHFjiLjyGHVxusNhYYwVp7xhuuu",
  "key17": "5BYpSTFS7K55STq3GLAeH7KxBev3YkBS8JNYJkDrNuv1Tu7L2oeiqx8JgN6Pfa6BT2kgDDSo5WC2c33ApM1Y9MtF",
  "key18": "4Zm5dN78qgFvZoUHTFXt3njyDRCGkgUzMf2vvJyksYxSSbLhtXYuiSEqAdzsfd2uwhJfwBrNFVUVt9P4AESzG8zD",
  "key19": "4GJMEoQSfjww6cHmEVp1EtmbgU9QNu4ikorJn8YUCRfyZ7BFooHCh11YWho5KuEVmyd7WwPcCHDrA5DC3aCDiyGi",
  "key20": "4n8YobvrCKdr85At7QFch8gsq3ZxjMhmGZh6f1DJKggC3w7vragU6cmGt7JEfj6KSLMnEB4bHgvvthLBqmtEJnXr",
  "key21": "CxWEXs5GKmfzxYVjjwRYT61kPBgKjLccTGfx8X57e3dBQpRcHRsxeG7Bek6kg1juNv1GHhbhmn1ET3AhF4Gtuuy",
  "key22": "3rDZfhknkyy1MvGap24YAF5aYgBkKE3U7hPzw7isyaRPF7EESXKkW62AgjRY634ZQ6PykkLS537rEZsbNzrzChb9",
  "key23": "2Sx1oeZVN2TpFRnJPE3MFktJkBTK54HZZezFqQSrQYpqALKriixTFtvwEoUNP9ZqT75kKeHXsBPY4j4sp9auP7sB",
  "key24": "4gAje3YHA1TcBg4aRH8SR5MEFaLd8Dqu87UuYTqLH4hmv6VZmPrgXJmE5V1TLiDPK6FLpR3JhhhHxAgXPBVFycto",
  "key25": "51Xq2QuWLuuHZT1g2e5eCZxmwcgHDacmysSfkEne3GREmsunNkCrqGs4weRC52kS6RTrgqCLDnzigow6dUNZvpcY",
  "key26": "MkJve2QgWZmeX95111j8YbcYUzFfUfGwm6e8ciDLGq3rigfdFEn5Rkpow4NNPMVb4ScQ8FQCg3fC7JmPtqiTrip",
  "key27": "7wJCNx5KMxnF8zLE3gYDFHFhWxXxcP1pbnTcrQSvBH2SCQSJSTh5K7mMsFwqygtE2E7T7vopj6CcijjMsvg7VMo",
  "key28": "4xH6E5xutm9BfAbTiVRjnAhUKvqmBvieo6qqPjZXkJsL5SctEKp5UWRHCZrYK7nkLZyfa2RGBcMYEoLiZpXiqCXr",
  "key29": "4EtCZXvd2Hr2iyLi6UidvrkqVJ228ktRuYizBnje7ZtAsir8nuUBrUA4ko6tP73JbyxjbSyY1VEE3CuCR85cHQ8k",
  "key30": "3yvLR9yMCSXvBHiydMYpWs24KsfyGbyhBMTakbsSZ2cSuu9sbcWc7shM9Y6M6kAJ1hdo51RJvnG6eggEy8yVNpXN",
  "key31": "61bdv9xNRxffSHuwwX3X2XsyraKstP8mduJ9uEVJTeaXbULYv43facX1ZBk3TtTFNbjKcp9SQHgYH87vuCpgYJCv",
  "key32": "3ZStTGUCZyC8RyWoQE379rjSBCGakAtnzPqxt19eQJyGYmftnim6YEEYffSywwtFgbZnNu6PL3oxd7Z8EeRsYhaX",
  "key33": "58NN5kCN7Yfw6uhzzQ2BKMFtJxwhtzqhRgNkdEYidFoABAeuvkGoUrdWvrZXgjbFzyKHqAFgyLuuiE62Mvht8WHx",
  "key34": "e3t7PqigsT8BLgKuEdNyHhQ4a2bRQS2VQG71FVG81vYQCMUkgjZNZ4TMGeRh1fr5iq5JLgLjfx9wN5DeTvawyGC",
  "key35": "5qbgiNFGEkczJXrWRXrwY2HUuRccain1XdL48LmaR32e5njpBqBwYofn3QuLvaDy1EjYYpeNU6m79bv7YYegzV2h",
  "key36": "4SzLwx5wdUErssy39o35X38jchduaKxr61jJpbvRatFtC9UpGgYheaEJzKEFoHUc5M3ZAKTCcoEArkTD2nhpzhxQ",
  "key37": "4YsY81Djcpdo1VthHr21HVZDxnsTEMtKEMxsrquHfBEjJnjfNjof3cpXhaKLYkyWcRUmY8VMmDLS6m8AZsGyBFg",
  "key38": "3R31HWApynQdRBvGxPbKQWsKcqSXab6u7BpTJmxKtxaWtFRoGMAmyRN9CBULM5jvco7JSCDA3a7mjxnVfqNEyWwi",
  "key39": "3fedMVcDZwcrEZBxYHvRdcjzNJPtBGrNvMaC5CB51ycscPt4Vy7peR4LQDXmXajTKKQEUkhKrAG2cThhcu1a985B",
  "key40": "3uLW4Yv6hyTAjMpHzZAMvpPEy4vmiLJxWsF2TDcWZu46tsQ5aN73g4xq9Uydi7dcgMsi88sSxfR7UeDUA4eRKgXN",
  "key41": "9YVNSgNiXViez9YFBxjCJRv8uCGcAS4PsT2hPnK97ZChYZ73Bcp9H7PEiLjCp2c9x7RWQsTaEEnB8YUXvx1G6KA",
  "key42": "4qzC2FRxg7FC7an5WgyEj2tkd6V3we5AuBcX8uLeXg9e7RdACT5zfvude3rCYtjj2WfU2em73sdh6N6saaqDHKbB",
  "key43": "5jfW2QCRuVJbQkKB8EDS5RsjPnJyZAV1PnYrmV7gfPTP2uuG9btxpi4jcokCaKSCi1QMktwjWhUizJTCH2in9XZy",
  "key44": "3ZK1aySTpGH113YrHtHQGFmxz3etSjq4Q9dLpN626rxXEX95tfp32huYe26pbKYsPNJEDrtaeWDd6AFuna5kEnaB"
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
