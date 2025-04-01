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
    "41aDRuX36TZJMiJ9X6aWGCi59CvWwmotFzcHwBVMzYtN7CcRwLQKPActKWmbADhhLC5qYMpoYtrm3KDrnpEt6aGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nvrBdzHwXyePFiSQ2kKaqsnjF3hnumFHBNZCijRGifc9ELWu9bJKNByveuvocF5xbGcdVqwXYnTBAYnLzKfw596",
  "key1": "3eB61gtBkhgXF1CA9NmGxv2JqQWKd3FPR9Kc618XJMEqmPAtLupkfnAZK3hz3XJcpeeJLY576SPrkrhb8ZRphHX4",
  "key2": "3m63DsvcN25EZzHUAkCG48sSUPocTGSmnE4BaZj8qN1QUDwmihWCeTA9xa6jv2rWL6pHvgG8mUZRLXEM5rZVhNdJ",
  "key3": "3vV85gCrDPz24FGFNUMrgxUrjokjnegeuZJ33RSX1z8dq7xp5r5hJSXwEkwe78QhLuXuGALaQob4ZV3UWbzgbyva",
  "key4": "3z3f4PRCz5QutjVLT1cV1BVKa6HuMN2PxtEj7y4qdJMJRt17Fxq8APmaJNsqB5THXy1kc1CTbMdWDwo5e3WfXt1F",
  "key5": "32EQHYuXVoaZsLjNCHd9oWkk9KXkFkp5YTadgQtgqqeqSh7VYBfG1C6UvYJtLsHRmLSshpRzGeopzJp6orUuv9Tj",
  "key6": "3eXZnNSc1gyJHEyDT2kob34FfAjGeP2NLamWUMKo9nwgNSNNVauMFBTcV4sLYCYYsEtiJ5up9mZmxbFjVgtk8mJ",
  "key7": "QcFB3VedQatdSRRBRNcGydVKJcQRciZyM7AFabrbAye7xhUp2NSiUDGoZcCfjezZ8KnLXTXyApJ6M37LUVNiUxP",
  "key8": "3rGU1RHBm1grT7G8fbdBWJ8g7NgNkSv8BvLZj9WkrrRnujwbMLWRuTXSUab1hcsB2NCiSV7iPSW7vqoAzkPU8nxN",
  "key9": "3KFYNUCf36BvqFR1j9ayGjndfk2ERrXFTF43YaJnFvaACdP73u5PmRpp323b7Kmjz3DQAg7mxaJdGgD8nfk5do2y",
  "key10": "3tghkUbRBrWk7kUR1JKPcR9azqaF3r2hPtxESG3sBTRKgtzsJ8XSJFAmKrMHUE5de8Qo9xapQ7bMQdEQrA1VeXa6",
  "key11": "648xiCNJLg1GKiKwqvbvs67j8mdJM5pLt4zpdqgfFJFVJHwMu6Rpt7PxoSvSMK9VpUgboeN7tAhnVXMY4aZk8nuW",
  "key12": "S2edvB6VDJhCxEBexpKcD3qAeaRbSgFVXmhjBQEgau2UJKpmhfzJbYQGdKqYPffgCjkhRvtp4hQN3M9ckGxNDwj",
  "key13": "5BjUg5SCsdpuyoqyzUWBf1Kb26fNNovRmTFC3pKhkfxNeNUupuzpFCnTByYCER7K4kkZzaRbHrVtRE1xJjZGC3JA",
  "key14": "36FYdF5rm7NVC9XswUvE6RsoNWBGvUpWY6VJWEbJ5549ejr2y8n1XZ4po4nwtbw62uireTuxstCUzzdPMrPRgV4p",
  "key15": "5Sbm4Hb23R9xCva1hUpqgRBedMTLaK8rHz3VH6gVKULvr6xnVxX3TL2oQDuL4pJ1AtxzcwLSRzEvmWhToY6N6m5a",
  "key16": "5vTdEdUY4yrPPuctedi51t6R7oM6T3ygxkLMmTEPD6bSCyaGKMPBCgCrh4Wb4gRyYsadP3YbsvRBdD3kikjiv8pW",
  "key17": "3Wvm3ikwUhStLE5Y3W8sjwYKdtu4iJpzpwwKU2eJP11516fotRU4thPxzoZL1yD5x6XQeXvS5H7qorM6BRRyLLQz",
  "key18": "39j83EQUNPvJZ6J9jv8SRAD9YfxdJ6tmjEr4a6hDDuDiGcC88a2v9ZB8jKFRRr2Tuh3Xba5rtDadgFqGuU7ZFsXF",
  "key19": "3RsyzGNwWjbu5cwgf3snXuu5QVjEBFnmtQnxMitkSWgGB7iWq5ACkVj1Sz9v8e7PoykDQrBydsBsXALHxh76thbV",
  "key20": "5gJNvrSTVPEUwVhZ4e2cfU6DqS9vnRJQ8G1NAUKhjspRGNkKxJwwNLx87E6A2Yfk9CvyZfxk3YDr2iwfVTQaRR8P",
  "key21": "2ysSLr3v59nX5A92m3LX5zyc9d7qxtMNwDrh9A7jyBrxExkf5y8qVr2zPobBMRtV266Twnof2aCE2JsMYZaLy87Z",
  "key22": "5tguUc4vzU7sGmBJL7KGaTs68W66Ho6HthWiypL2x5idATDpP9eKcgmgT6v9HB9Y9XmCc9Hk7Yzu4irPbXnARTdZ",
  "key23": "1ykf9VQB9Gf4tWiGoC34m3BNZRXjTSEAAcrbKxpULVoGyLfKJsuvbCMV2L3r8qCATm27bDQvXA5Vp6EJJZGNs9w",
  "key24": "3RCx4eQ5n8RzGeM2oLFuqVQhJVXvTYR8emB8cF3Lh2yPSQ4YZzk9THLXfsHSSd2wDqRSsWbUiTrLDkvS6Tkv3izW",
  "key25": "2ANCTjNbDY6kgiSiRsDBJTLCS7euq9sfBJ8Ehg85txyVjPCTRDYHw1YZt3efxMpgUtngBZLcuBf7mXNToVRGzgnR",
  "key26": "gomxN5h3JXYdcHpTttkq2gTPT7KwssDCqFPVvnScgZsQwZNw9LQmkhVZQfFY5WN1VoU9pcqcBzb1ph77kYyXfQy",
  "key27": "XeUy3Eq8kAkpQhNWxoK47NkRZ6yKGN1jNY5YuSjZqwfR3aoqSBLMs5PVxRikHh4jnpzmdT7hfMwdr2ws5oToqoj",
  "key28": "312LFq7YkSBwjvNa9R5YpsPZDGCRvHLKmcfLhDhQC73GH133EQbk4zqiJjqcrkVhrvLBdeqQRDhqZ27nXi3eyb1v",
  "key29": "mpAcD1ovrL4NHchyXK2B5gnsJcC4R5X2Prrx5xtUxPySUy3ddAsqHrWMHLQVBtopXuVhVq8XrBiWeTQpwarNPXB",
  "key30": "2F8iky96rSXpsWvuhEQr9nRw2inDQemyUG9AGSwi9yVpbA5iovSUFTwRmm8vAZELMiNj7iUuAKpkqANFaK2Ygixd",
  "key31": "3tVBKdfhn1xi4rWJhLN5TSxU1ELuTnNNMU1JSJxZVU5UG32vzvBfNRuLxGc8wZ84bnpJuduUEU4d2gju2kx4gbCH",
  "key32": "53knivnAFxMS6kFP6UPSgywSCsTg8UaesyaJMCyioWbGE5uyobeVXkdCA9wgozimW1FD7NyoxUz4dCt8UhdDgvwK",
  "key33": "3iE9yRXA242NGvJHQ9Hzpsy7ewsgs8ZX8tUTJSKa4GJpHVoo9L3YULFHPRoKfpAiMyRYKBwWcJ6pWoynQQa9JSvQ",
  "key34": "PTAfZQzijHPiTjPXRjetpsHZcNv2cVwEo6H5bkFdtvSBNzAeCKMXhooGrikCNCfGt4ztvQ1g25m4gFmvZzETHQx"
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
