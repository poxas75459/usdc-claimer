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
    "5ZwSVnBwrsWqdMiznwRTbiKpvgraXQvaTpv3DBRXrhgVqywcJg6Ze2g622tAXhh4wRs4jRSfqYk1imcce1q22GdN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TTuyiU5DqniUjqU9vmDZh1bw2viNMmz8zxwcG4kARM6BgGVe4trgmGgmivHsLjG9qhy1g7F5G54U5T4zsQycjFQ",
  "key1": "3szN2tJSnmCngWpfdxvBJP8MDDheybLUtD2ovBNgQewfbgkSoUqsuokdy7g9us8dxWimbfiz1PCxka1qVZNXasVz",
  "key2": "4k5fZtCBnEnqMtFhsGsvr8Rc4GuDCyFN3DPBjxDQ3beU3v2ynsJJtaRNzNog1zHXb1ADv2vZifMR8aMdiNretYqQ",
  "key3": "3WwSJukjRjPmmau2QJo9noZFvJdoDGjwYVUBMeq2WnYQ5taWqRDRDc5bUyqn15xznrtFo4vbVxJntq4gQ5yedYYs",
  "key4": "3pBmSpzdyRSygvxv5jmFUpvsD4oamwrdJSGzWm295H1EedQdeYmdKqbGJcyMiGB9ZbZpD4ToTLfqL7CHscMEQLsP",
  "key5": "3YMqwzZmc3na7q7Z9GibxEdzFejrMvUH4ELwESauf8g5q28HgsY1rSxRuuLsA9cyfMe9TKdJkSHxPJpM82huAHtw",
  "key6": "4nL2WRutJguPScZy1CmfJWpbNjZZMvANEamN11bXfRLMzvXssJjvVGUkufjdFM5SbVCvgUFLKFCiqvWaBqXfxT5q",
  "key7": "4dZk8A17vigimEznTMJSbzdMqQEtsssWCAzTgU6jHmFpDHbYnjBsdTfrjr2VpbNXf8yhaU9NXApKAzq4nQbeyE5s",
  "key8": "3PeaEVSHTfX8GrGkwRL6ZfBnAshX5yUb87XxoU4kkAcShp8w71rwhMRq2J7c94pGy5ARFco66VeaQ1p4HBPH9BLw",
  "key9": "2opxbh8kiqWDQTxcsQFrGomcK6WsmLwMA6GwDCZXBDDXqkWSMR79VVqakytdzkxGEqM1TvpcdRMz3Jrr9dVHuqpb",
  "key10": "9nsWvZuBDXn9svQt1t9ZR7dcs1vRAPRV7eeyTfBgM223D6ATSJpBYYTmVAR7Js8dw6TKDww5LiWx3JBWV3aYvP1",
  "key11": "vbdi9xoiK7U9fynhEr6Gqb7AKNJRsfz4o513sNcKobqtkjT5Go5vyEG754JchNY6R7W3u8XnPVv9vgoFpq7XWFS",
  "key12": "ZEMwSH3aT8Dsetk3ktcBvTS5rWcoNF4GjGBR61LX4Wv26x4Ju2SEQhRAiFZbtTKdddgsapkZ6M1iCHpDLBDqJww",
  "key13": "2t2ApcvjH5eYjVwyLEjPS4QRLxa3SRSsvuTSKkJUBJnWu4jyrDPwd366vn5gpwkKAW6ZVL289WQ6TjjCN94RUHTK",
  "key14": "4vJ4T1kzds5TvYV9SmzXiaopzd53JuViobgagtu4nsrMXYU8PXt6CsUv6pMtHcov1Brd5Kbzp6N6eMyo81BqLw3c",
  "key15": "5zxhc16f7ZtMW78DiXhWFnaTroECmRCW5DcAVzBHRETXkRgpX1qaZaHhsM3H1SC2evSJ3jdM4dXUg3AZu4ddmw5E",
  "key16": "4ErZbeJaxV1fYzQzUXTYjGsca1QYgF94v8ATL5sefbSoHWWr9iiLLSKwQbPQFYsMgmPsF9YzZ266SJvi3xZBs73y",
  "key17": "62ywYu4aBPLVNtsQr43LJp1URtNNYPXTtpGgnHAfdmXdNQq9hRsV4D2CvESkknS4mRgX4LdZkXpVf6gozVN8oqbZ",
  "key18": "5zwnL8q13aNW8cBMXBQGTXXnxxyAwBAPzcnBRiKZgXG5WSKDBFfFyV1Rn9BCWyRPishrYAZuqJ99XQBkVJQ2jpMX",
  "key19": "4cWHVNdumCsrw7WkXkK8LhY65K5bx6Qgaw3hRMWtbzYCmcqgJM6TskL2CUmNk1YnSugkYWeo3hU3jj17VyG6aNZR",
  "key20": "2Ps4EVMSsYZBFY2ZhNFZ1Yki4Ky7WZAdfYChRDq6vaTwXmNyuzSNMwbcs4EA174wEf2TnbBZKDYfJp9o2CLCHVWt",
  "key21": "NwkCvXC9b5aR6Cwr1mioWpYcgupu8rrdA4WLW7qN4EQeaE3atcfRbevWwJitDYZUgCeD9Qa4uoNTvMGtDuAo4Pg",
  "key22": "SkGkckEA3YkNrGKE93vRwmXvvzz7QzMTtF7XDy4QY7BcaPMHQ8eHVzv3F5jBwkGcboMQ8ZzP1TGUd6eD3kTcVy5",
  "key23": "39b6tTMyTU8ppNVj429EAr5cjJBEZYXkBrK2JfYbcvuwKDNHTfuYYJ8dw3rJjUocnfV7pQEuDEtqazuzXriGGimP",
  "key24": "2YBnhbmHtv4Q5ApaHDanVfvswXU6GFS7swB7iogUK9AE31xcKaiwYuZmXcKPLQUY98XLxxhTJ8vbjR1Z3n7XCVFH",
  "key25": "47DHeBdCgDQHNe55m5bqxhjD8KQSXtu8VsbvyrMEnViTZfNRY9mpjN1N8tV1P7aDxJqvruj31zpS4UcyfLYQZecA",
  "key26": "4d62U7w1r3N1JoBiVjMUnvFKv2GrYfTyonPMvih5kpi1ZU3vKj6EDGa5QoSfVWN6kKY6Gq4V3t2JDwn9khgo1868",
  "key27": "4S7P3GoX5DEfwr137cByWg7PZn8M5mrseLj3pCR58kMDhHioStnTtPhvkbCPD6hKB7M6svrW3BVxyzaVuyZDc9Sy",
  "key28": "5jC1yh2mABMLNDTiVxiwCjaBxB69wsN8Z28nkTztdtHtYzJJ2rX6AdiVdkfVQ2w2c2d22qawBYU6EWzyXMhMigaT",
  "key29": "2w24GYfM6VD3RdSbFAzUkRoFGXeTt7fBLe1jUUcEUEBfrTryxLZ8YrXmLFtdRxn5fBon682CdFNEJdzoEopRR46B",
  "key30": "2NUaAWLojUkBSnW298W6wTQputm1FhmR7TFP5QbLQsDPGxVY1Y8MfvSerTVGPZyW8PVXupB4MS8VX1DKA7BPGZ6K",
  "key31": "NoDoq1ByvyNUtF7EUrPbrf4pPXdbn5mhcuGdnzgygveUAxtMbKziJbtZ2JZjenDvw5r68AvfqBW87HEwDhCGtgi",
  "key32": "3oZfrwVPc3Xf6wLAzpLqLsaiR1F2TNvr6LUAoF7qQmt47pX7mjAbkWe7GLTorCNpFdcrTHU38EimXHNyXrXoi9w6",
  "key33": "38Cyox4TEEdgeJr4ouoWtngTtA4afFfYvpvg5UQjjQqQcza56Dr3SUHN4VDhUMkJiwovxrADcWgf3j1iM8zdVPp7",
  "key34": "5kdLHA8Et9uAbHT8PwLo3CoHEV7wyjj37LFuADcvar1pybAEA7vojF6BEF7oJ7jqx7jVbmgGwE7Sybiya9nNdXEn",
  "key35": "5pqZr3qNPqLBwXbvtT4zuehsfdRPp91bVBKNcTiTjUo2561HStZenPfs8hikdHkWvsnVwHkSCJCA6SYerDBe6gJT",
  "key36": "449Q14cwtQ62C14aybgYeduR3aUQkmRmqvbNvG4czwQwusoTwP8MDEi3V6VXu32DhzjMcspjWwR7tbUjqnbRfr1Q",
  "key37": "2BLWnj3LPqAeWwgxGMZf4bvWvMtSTP9LWH5wpP3kxNyHGcaBUaAfMAFVM5DVgNBBrq5V7FaEY4ZzqzPKvCC42iww",
  "key38": "5Ue1P1PDoip4cxZ8nZteyR5cUFe1zwvZA5v7umvToEAbFU8QHxvzoyJ4DPmYi2ANUoRqd1EWi4E3UVzETA2hDcLe",
  "key39": "4wgMfxrfHWHhAeEwVBBTfL78fcApkjnYqXGr9PPV9GthsgDXbddYvBeuZLmiuCxUenW1ZmC8fx8cG6smgZU9sHMx"
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
