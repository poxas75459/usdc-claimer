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
    "2J5BKzF2fzfkaXaLCwbHW3fuRWGNsjo8jXymoyvH5c7KnLY8nR7xi3FcaMEmynz1QoFT2haa8Toukz3Kmkzt5AMb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nu4WqhkQ9hNreMdLywAenSBsFtpUVZn4pZnBd145nkcp49yekjL2e7kGAybYPhNivDYkVr7Bpb4bbdqUer4jL8f",
  "key1": "2cw7n6TRDJx4ahChx7dGyzC4cZpqRjFFjam75iztRcqQrmbbdCZJS2FRaeAqHMcw6qCJjadBPUdVGGo9pQdR6zv3",
  "key2": "2xMP1uH5So8WsKrZ4H3UyVaiaQR1XQuhRNxr9hfNHufAZDgFsNR1Us9jpa3YjQiSXdQtLFrYWsP3YVq58U9vHr9j",
  "key3": "3b3NtycsJ8iJGJ1h8bpLE5aqYzcBMkEVZUFP5xsFc5RK65EnfckbP8LExPw2KskzNXzWDDnHwxs3J2PNHCjtsy3A",
  "key4": "iVmToPh133gmjyFPWjVT4WpWVJAMJ9oWyrbnyKTP4hPPgQsK2Hzesc426mQgen1iHbTTAiN4ZAy5QWv46hY4hwr",
  "key5": "5XdXwwsHvRS6i6C37egZDWvH2psmRSqxBdCPXdatU3iARqRoQYs3aqna2P53dMXugBL14dne9awjjJgCXxkXBeLH",
  "key6": "3abtEWwVMqS5UqX6E3VP1dBt7jf4XmpFL5TaN3Y8K3xQBtYiYMs4g5EhfFsyc5ZhewQRh4Ch6eaimhZ5N2DV35CD",
  "key7": "2ZMiuBKqNrS9R3BjepPj7SZshbU3SHCgR5yoWvbf5LeurVcm8nBDREUng1HWrr139ci27bN65k1tGg6BVpyUdhCV",
  "key8": "2GyU2wdpi3kMB6rwmEDbzMkGCB9RVhdTAMpm2tBi3VxnHjEf9YTvEW9XbB6P9DwiTrS8YJNseGDupiS1ViEvgd3T",
  "key9": "KxVm1opPr72nyRr75xepGrk8aTJpGJJDchQuEAxwCWGXc9hWdiRGoX16bjFPBViro3e9K2iWheiMotERwEPVMrJ",
  "key10": "fbiLy7r2HySnSmtNawYCBobxkVZKcVshFaFU5L3Cs78TwSf4LTJ75XRYCCxB4FFKZjpNYdP6FANtcXGryscb4mf",
  "key11": "5Q5f9qDW2Nq5GXWiFxgmCEhVBQe8Cz2scPo3jenUpzTPmEUbBzd4cvxjDyYQw9ApChm7njmRxdeyC2VBHzMp9B7U",
  "key12": "5QJiMA5SsrujGZL8RctiT5ihsDMFGBotGJey56EMA6BigoNiyYruXDgaXMDxSD2JQTDmc1zUnvk92udcPNFmjP49",
  "key13": "5FE9dzS6B5hdsod94HsUts7tZ9ShJDU1W5xvxVZm8KHHFmFWYWXCk2JkzKGxwJ5f6jykooEVRsnaeL9H8W9DVJRd",
  "key14": "3uqFL7Vkmwc3ndJfFZoXNDJnGDh9fGy6DoVNW4e2fVAZs5wc8NDfwmugPcmditKqki9tjb9BU8zz2TDrZ9QMzMkG",
  "key15": "z2EY4H5ZkYXtYrBVRin28Fp81DXu3Hc66qxYj1cBhrAEVqcomb3NCdfcwdSVst8vkzMXbQWNi2TH5uZyo35sZsu",
  "key16": "5eNLsPwhZRv9ysGRcWHpP2hQm2RnfcKz98P9rXPNBj1rEUT6dnwf6YZTDxmGJXGsdt2aMZdqTrXHC4gtKZu7vHiT",
  "key17": "3oa2nTJEUNVkcEcb3KrBs6Q5swky6DRDpxTuUsa67K9Wd3bBcL5NsCVQmqvK161s8DcmjXhFzH29RTt346S9d3ST",
  "key18": "5nyD52tz1NBgC6bgXnvdMSswgjxqjDe3vqvBJHSKymz6Hvry3RhoffAfvXk9FUKUkL1CeLcAD3cLQHH4uyPLemBj",
  "key19": "2AptpuyF2zPGtgitKA7462vfQBnPmw8AxYLovgsCF83eXf8ZER4js3jma4jEzBhsPzhQKtq9PUZbKMQvRyHSzY9i",
  "key20": "57wSgmiFV5JkrheLXHp8YjSnSjHy18EkuUtcjurofzn5dTG4HB8HLLGms3T51b23RE8d2D4TswjbeCSZTwYC9cXo",
  "key21": "aHdpDp2TzrycaA3W4wNpX5mP32ZwYuumSR3CU3rWX6W7289gFwsvmK9GNXWiwpsoQZ21xjRUNw8NWhCsLaNAbGf",
  "key22": "5fg3sCBZV2x6miJuAhcaktU3dKjfSxp6UytbsVV3NKzGKEY8HuVsAZjfefm7ESNfgC13hVhwUUn41dnXmBLhu6jS",
  "key23": "4SUPXZ75n3Qx9HJAGHiBnGP8BJ5Vc8FrG6HrtvaCDycwsdPVR3mAYaySMEn3ccSS6fiHLjgfFy2ryXbUZEEe3X6h",
  "key24": "nkEGbcEHy6YUfDLsPwJ2R2AaANV9GfHSfDGRcsDt4FGuaM3ZbNLUfVXSy1r7eiVCHAbK3wjARjHhaSwquqQKM3q",
  "key25": "2DhB5hm19tykZHK1zomC7SpNXQHd5Do5FYPgk5uQngKWEyu4aBDVcTyDzVXyBpn9c9NG3Mr4zYsPsPjhtQEFxQvU",
  "key26": "5DeHW39UKBE2RmXEGo1foQg45FuZ5h7p9ug7tp4Jd99EdwZe93p9VBeYeGyrwQtF1EzpLnxLDBQyDKG9jGHzfcia",
  "key27": "uHSqPhRA41UdDreaoHZjYRZyEcLtEMx1VgNSUtPDhQfDMrXZpq3n3pRkhBkTyQpj9MpJPuwuC9m7FYU5WCYAFgC",
  "key28": "3qrurt1PRqxeboA4UQzEQyKCVUdBVoZBzgigE5hcTviyHBzrhnad5W6JRnt7FokiCRY2Rr5C1z1M9xDwzKr2KLBE",
  "key29": "3B9UCqNb22Ai6oJZzeEJJiQwiEY978dW4L7QRM1xSsjeAcQans5RAACs99Jc7NMdaoy2yqUdWzqotgvS9cW152Dw",
  "key30": "2gkVkmJPd5uJB1WysnF8BqH8LHFkZjw6PwNX61fVKjUhYWQhA65mKQyfpqHhyXdCVHskD2uLzMHFAUR6ZQnd88ST",
  "key31": "5atHnDK8RiuYsyBn1ABY5Ye5fbqejKpwfjVic1UirCz7NVGmBPP6tcaUh3n4yx513ehRZfZiNTHvWCZJTR6DzWsd",
  "key32": "4u1AhFcsZb44uFaHFgDSyk85LK3NGohRRycXdpLFk62umFPUdhmUJjwLVzP2hv7rTH7e4koT1FpLNRoFUvwiKfUV",
  "key33": "BYSvoFp8Vy8DjzfnCXi7SkFdkvjjUCvnAnAVFXHJnmu8VmcJeBariY2y7n6ggoKaTCKmjpJkLEXVaNUfUAe3N4W",
  "key34": "23HfhXBMfjsnD7rXaMyzK481Gpp5qwGeXBbrcYTn1Ey2Ymt9kVvvuA2bS9FftBiSxzdfizKQhVEiKk3wgs8LDS7Y",
  "key35": "4ZRJ1mGGhoWENA2nSN9WMc4vfAjRX1zYkGLkwyc6p6YZHrSTBxubAjdMntkgW1vixewQ2QUFGyBT2DYBpAzyZ88W",
  "key36": "2xvQGgTTAM4zGfGYd4nBaoq3WpJc33dqE8WgTzdiL38iPkZgAByvJWaYuw1ApmtK6k9JUJTNR76YdFHQNJzcQV9G"
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
