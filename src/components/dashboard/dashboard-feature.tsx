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
    "2HvGjK87BMqs77YxhX3GSFdcvyvqvK7WhX9U2i9XhTAM37bmmBHp7hxQAwSwH3nVG2pyPs6ae39gPaJQrMUrKu5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H8HijJPtN7nV8J5UwJZFrBCjDKnvLQYiJiHPp4U9ZhTFPEujKtRMkzrLjj4aWpoEaWrRD3h8iZBcgD3xtRjrDx9",
  "key1": "4pLduzZWTqLqL3698w3BwRi9afsgsvdFyAJPU4aLD6fCCiLUoNomEg2VowVe2AkPLWEbKthVYVC3We8XaFDQLR1p",
  "key2": "2FstUydoqbSyUfkAi3wGpZy2ouZDt2e7nGzH5nnkTVyQrQ1VZwd5ibBoyu2EqB9sfiS3pMDYR2JH45PUmcwjhAae",
  "key3": "G6KwpSJ6wQvQmc8ussnAD1sx62Qo5aAu4ago6M95BQLr8tbKSeiZuJjz6oqWFniUzMxfYuX63TeHsRUDyQypYx5",
  "key4": "64kpRDwFxBU8XtLNKsCKAyZnTBnaiB51CnJYspGPqrqboDH1LnkkGqooQWqs4Ro2pEJP4j3iGDHACMFvNB6bVq8k",
  "key5": "3G3xgrKC4yM94rFF2d6s7zJo3X9msweFKZ3wpucxhL8VwoSQWCs6HMjNjz5V3fQsDYPzUBbAVEiFPbmf5n9fdNcE",
  "key6": "42QfgnMmQ6jk4MtUZmAmkDD7LTSRo89wMhFoYXLUnPytqbgx4hum3Yh9UhfsomRVu43sukXjvNJD3YPQ4y3K7Fy9",
  "key7": "3UL4G17BecEHwgxiQMzogHPCBeDKiUD6RyU7dCrQo41PvaENtmsrgAQTAWWNgpkRvJXXo7v7sbQDqNA6Nuk5DPJG",
  "key8": "58D6LbcnKZVsoNNBLm8EqoXcR48rFfEvdTDRobtNNg8ndCnSVB6ecPatxcwrESuKJx8AGRfq4Why6TvPZXEGqJDj",
  "key9": "Egdb6uT251cuKR7GFVX7WxY4GDz3KNdDtFnFnQw8uztgSTbzoRJNk15jf1i5ao7kXJkv9hnxZmjzJRUKVrktWbv",
  "key10": "4YFUpamZB2CbgWjpy9WZsE7ZtxvXFkDnxLBCWc2KzP6D5TwWYGEXiCjqWccWQNiXeYaKD8TTzZscAk75apqAAW9x",
  "key11": "3nMkxQUnXRPrMh6FaX6H3Bj3TLmskSiJ5QVUYHtUHyvsuHpP7ypDYytXaRhaMa2zhqSP3xEFU1jjLCktmcHvBXrk",
  "key12": "3ys12Ta3vPaVGxbsXhBWwDXZiT79m3PZz3EdjdqkQ7MdBZoPR9uP5E4y9byYqqZk1qogmZeiavZcJokdPTnTxHWC",
  "key13": "PVPuPJAjs5D56X2NuXuK4vmaNwKJQykrPQtHiC2R9Era3DdLkcDmG5ayN7rUXUtDzbo7tHBVCDwFbp7q4VrmqzF",
  "key14": "5UjXYmwFMesPMuMV3QR9aQJCR3muS7PcbZxgiArZLB6yvJmKAjhvCqvQSUuTKTFS9adwVgDgn5y7K6Jz17CGm4jo",
  "key15": "59MesVveUFafQquv7eUPrDakPhMAEhEyrb3H4WfZM464f3F2xtciFurnHs6tMRBE4sYjrsoLpKhdsbumMbudAsJo",
  "key16": "UZ7n1JK7hxxPXA7wBPNXXQkuxANDTArv4yqMi5gBKb5q3GjztnCvGp1YsCpso4reQR9gkhjrR1TLHoYBHYtnowi",
  "key17": "4699pkPDwVbxxGZ4khL614WwSxd6EcDxZR64cUn4HEyv4mQ6PJbRNAuFZkMRTgUnH1WcRFz12kQPkTRyy22qic5H",
  "key18": "2A5RSqiRRKarmCwDsPdESYfCkgWftAqpKCdSu83aUkDAgV7dC6DJw6i7e8FbZD29GSdFhjVhGBv2MniCBoHz4L5b",
  "key19": "4zMKBM9SSzJ9H2LN8Pixx1TQ2yb5iHZ17hAqguoLKjr5W5GVVtznD9zuQKXRhNFNBpNF4DSoELsNMmyCuogQKTKD",
  "key20": "5T4QXmz8Msza5eDqZYCVzVaQ22yo3JdnvrBDmsABEBo67RYgektnbsbF4mdhJzpE8HsV5ijhXyP3P3guficcesA",
  "key21": "5bwT28tsG5Mfxd97Pxn1zC2DEAQyBDsCvJ8z8xqp1w3SnW9HdLVvayXYZqT5H1LsjVov4kWEkMadHApcuRnf48xq",
  "key22": "4AmjntzvtMf79QAi9oZVi6qoNJkbyMWcBnqrL3X1jgB5VeGvuh31K8fJSqVxBfrEWCRrbDzuGgvNLUDumNZvv6P",
  "key23": "3aAzFnmrRQmnbi1QJSV5X591a7N25aiWcUVwXcAXCqVJARaKJrEk9AVstJi8JF87eVqDVSGy2AGcMbL6mnw5NNCM",
  "key24": "4hUmjrpKSWcHVZBjeiYfERBYbDub7GAkQKuohRK3tG6E6NymbqKT5eaNdvgSpMS2m9xH4XHUtSfL5Bu8paXViHqJ",
  "key25": "5Jkxoyxwsxq1vySvbfU4E9fGCES6T5nMaBkpxdtP336vBdarzsbKKUadNGSP34UZ988FjzMDfEySM9GkVDUHeCni",
  "key26": "3e5eK7ygpgtBCAp9vYq6tBw18oZeA4smYgutszNpMoNxC5iESgzT9A7b3Wq9Kzpmok7MdsQ4o9KFf3xtZA8mxsLi",
  "key27": "5oWTfTSzqHN6Q5Xf4iZzEAvZVrEHxSP6d7Nu2CRjdAS35GzW6MWAXshDbSVL9kBtNdbMQb57ZWMujBRYUk8R5Xde",
  "key28": "3F9nSbad7vsAS14ckn6yKJJa8GfLoCHRY4smsnUasXyj6p5RSjXNRgogXM2CaQPmP1gLCfG1xpHCJFZGiFS2HfSt",
  "key29": "4ksBBzA52XJkVdoC2FgiR9UVz4ZvdWymJvzxzuLx5a7Pu4uWAEpbws7QHiPszWedfE1MV4vgzUWyDKn3H6E4ox2v",
  "key30": "45Xr3a9jUpwfVRNPFxfJ7pBfYBrwxA5yvGBvHX5ue5ZqQNzMKCzearkkGjbued3zesvUunK3vEPwCKgHDQhhQoQv",
  "key31": "2UuXiuSMFNqirfDKhQhGmoAwdF5MrLfy81i72cWHEf48rsxvSxwJ83w1RkJk4KdZpGA2soPoTXbf1qizt5fXQRe2",
  "key32": "4xggScCKjUup14NYzBoj2HiJ7BFzdr71kWkoz29DowcqtuzHqAJxiVJXQBzyvbwKbAUaEWC8FqBHxubogEoJRmqf",
  "key33": "3A4eKNN8L5RYuhuMXFPBG8Vba3KWVdSyQicEvVPHQCNmAHgs7rYyXbSBEihQGJKyFJQSCJjueyNue7cchaQ7qfDT",
  "key34": "4h8Fcujy5Q4cc9Cfih3AaREaxbXSu5YWvueyoaLTCGPPCL4wAht5t7KMMHPYZe4PQwDMUgaSAgUuxCNRm7NT5Cec",
  "key35": "2cQRXjeP98KcHwtVPbhiZPeAPN37EjnpB4xCpTbyfksB4wYKbWTbKpMAkwoegcwAh2k3AYEimrz1aZWv4N267yMn",
  "key36": "4qvYcGqGYtvojwieFQY7f1tHPRpmbTrduUZutD31hYE94MhrMcKL77AWJBuzFxovKGedmkWoVkp7kkRpjzazcP72",
  "key37": "5kpcMLeoaRBdsGZsVSjvGPBRQ4i8UggK7RQNjxLQrVDHkfCZrsUFr5F5eDfvLMY4ZCCXuyHRtrWo99HAshTttDXa",
  "key38": "5pyYn4hygQJ2NASfXtKp85tUNnovueqsHXeQwLpi4HQqUwub7wvfC1pPaBbB252aR2BKHnFwqPBA88obhb7W1HZq",
  "key39": "5KwjRSLSvx9nNBgaeAWw1gpmcke9L16tA9ahS4cGWeJCZdsqxRypF3L4L7aDc3EBnjLzM9mzrdiMS1mvgr5opjRB",
  "key40": "5TRDqNuEpw3eFNiofy5Jtg18USuqVp7auvkpQ8vtSKL29kHnUZCfRLpodxndQ5ebPnE7fZsnVgTin9gbEFffpAyH"
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
