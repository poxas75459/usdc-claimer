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
    "39cn1Jgp4RgbYJiamtDUwgsBaeECWnaHHMNvoEZxzANBaTpKwkPRVmuX27u2QNxhUsxTQ2KVsTr1hWM1Lt2udH7T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UxFsvCfzua7ypo4NE2nnjU8Q3uuskChpV8GC4a3XsRiRaLNA9kZn4NvonLAk7QPtAcHV35TrSsFkNh1xtWoeGph",
  "key1": "4vjwcGnQ5jJ33jCqVSJtbsvScJHuaBEuGYU93D4YnD5VKPYTCFi4J2vs7kUd1bXhNAQB7v4em14XUsB8bfCEgWQp",
  "key2": "5rHxvcWPyqLQdt9pzW4proi4nkPUCa1epxe5VF6XsCNpexiNMoJdD17H84AnZyx128mFvuAeF48bhvWoTQBeoK8U",
  "key3": "cBmVGuUDXFERzTmaRw3yMAHeEd38nJYTMMC2REb76PDqLCqoAAH7pXRV7rP3ktMiHwQdDR5zLNaPmG7xE1z5xsL",
  "key4": "4ehGFyuECrUAZCZnPUsdKFLAhMS67kmAWzN4HPRUjwd1Vjp1eubYpogHn9zc3pF1PgbVGdjccmFLvW69gyY5trkj",
  "key5": "4bsUiVhEE1Jsg39m8JfMKFwDMMWa8J4PtdRZggbhzkDTnrC4VtR7uFLqNSJ3isPoxn5SxSDuqEHazy6PfsHJCr3C",
  "key6": "4zmb16PdP6Xxsiqmy2i3Z43iATMXj5DG8HZEKk7qSNfPYrTwAMicNKsur96fWnpewMAdPC7hHk33Kwa2mVNRDsSQ",
  "key7": "iTpUXgxe4HrQMEhu5Gtey5CjkPJXmnhXLKgEV31vVhfTuk6gFEJBpj1SPz9W9DQJ2NV44cFL1ig4tT2ng3z2UQ6",
  "key8": "3tquqyKvscAMdJUSm9yxc4B9GaHK8hfTc6Mk1NZjw4quXUFGgkbooQfbY43wDWR1YoAVbdiwGes9mngCwTwUqd31",
  "key9": "4YyHaTVkYQrg2xan15zvb4tJt2sqQiPGSEFNspihuejGWBN1BtuLNB7Wdn32LQGG2w15taGkB8S9cpduuZHuMzyo",
  "key10": "5JMYo4YQyddcU1niVsjUXbbgx5faNUGkNFomCxecg277XYXNdacLfu4oRW6V2v7ghGci168JFRaucMUbo2nDRDQg",
  "key11": "3rFNGvD8nEu7oZeGpJ65VXmDZi7PiGGBgWzWSeMwuBzk13diMcsTngmE2ndHZBWEaes97TMYJfHPDTTNdGKW3R4S",
  "key12": "3BUkfXGDKanbL4KDpcdvD2odh5tFPV9ynjkznyvTcGWFTUwR6Az5Wpba5w1Dk7GiEMa5zmcmLNTWuTg7A8juw4A9",
  "key13": "4TN1dyF9Ta1vSvvDpuWFr8ByDLXJLL45WcY2wPxBcGQMJKMj3fvUXC27kV5ogDYkaMvkHqtn6568Dgn2VNHoESWc",
  "key14": "43YmAbg36hqgB8yn3CtGzjKmRx5xyqdTfKoVMdTB5xEuTb4FfVxPCUdgdRQfp25Vr5yrsWMU3x5QzY3Aj3gjk6G6",
  "key15": "2JPoTZsRRDrvngcTnwsMspkmaL11ZFoh7XzS3cz9wdbEQsBPJ5pJaDkYn5yX78JQMztYGFDxQXm5iqzBpbEom1Br",
  "key16": "psUoZ25obmNkJLPVwJFWq72aF5HKD5nKora2TqX2YBcVSG5eWFGWczN9eJ5zeWz54dNheacx8ivt2evLoqp7GNB",
  "key17": "2NhUHNnU3QJcGerF6Qz8cdNoS6sD4dmhBAcaQ2t7iJZ1VebUa2uqDDPp7fLMdjw3fVZ1X2ot7SdE61pgaJuKJjhn",
  "key18": "5JQtiEmN6QMeqa4x2fUnYv3UvtiZb3tZ4Uharyox5v5yEjCw4VdvF8kWiZ5GCxABoobR9ZeXe8xpivbLfwwUEYxq",
  "key19": "5yRTMwkSuJ2zRKUKg9d1P7pcZjVuz8Cp8iQxvozbJcw4xzVVHg68jXMkTTraCxAojuteiZ5RzS8n5gPyxk4KTbyB",
  "key20": "2YqzUgxMjuQWty8prxeTZ7xa2PcVsSBiCxFucombspJVqBoCWGDtPffFNeCUHPkPrQhU9PnmSMfZN1uGqg3e7gSQ",
  "key21": "4hD5ZySBQkoCFZY4sUYvX4dPEAaJMKciasypPoX3RxTxqonG2sEvTbWXvpRvqUA8tJV3GGdXJs73AYi8QMfTWvmU",
  "key22": "5DsvWUawRzTiHGscVsVJyTMYLUwG9xWSnTmebbmL9oPGEpmKrToZhqjoprDeRp33v22oq4p7q6hFfNUQ6N4xc9XV",
  "key23": "5iSY6YM6A13e4vZCVqx67nSig5mfriJKGrjt2nyGKyCtrtUKShfaFwkFu9DBbqJ9c9Qp9kuuX4ReBwhWfCCPyH6G",
  "key24": "4GKpWYzSs47xxcXD8zQc2wiGNjRwCGzScsQ7XVzAK1CWvy1WkbKiXWzmQxNWqB1VeQDdE5Ae4m88kPP37sJyFweB",
  "key25": "5fvyhjKuCv74uY1mpAgUj1qN8CYGcDcT3y7aXqzbKxjwWekGkzcEDzHGQJqNXb8P3e8ipVyrH9WgmP8xZngXSDme",
  "key26": "3TL5Ej9BUZCJ8bQwcNLzxmL2EP9tJWvrjKXiieNjuor8oNKaUayw7XUHosVuryRurLyk9wEgz1gUT9NWeaf2nA65",
  "key27": "28cSegWZ6EWv8eUavZxBqx4LbdCwufNu3ByVnW8GrWE7igVfYioNFjnjV4fBwP7C4H7xDUAGkhDepdKYs6G7PCKk",
  "key28": "5H1V2NjFQvSN2X53zV8sd8v9TD59Cor4QBD5JdZdym3NxFg7CHcahgLssq2gYYHSszhdPgUznJbKXQcgBoVbTWBa",
  "key29": "t2Cduwoara4t2w5x7tBq41FaiPiMdhoNoD92j5RkVJNjwH4tZMQTeuer3nKFHcXPW8rv8PYNZcDvbLNpzQtueSx",
  "key30": "4jSAZkyYbSAvnMtLEeMR6zNBnsWyKWwfknVWPY4K2xgSFnT9pmwKpvKrn5hbK1K6cDfocUNYhM4qMbQPwW7SRmo7",
  "key31": "4tZSvNRG94bhQgozPFez5sJKTAgbtuncanxRc96PFUkjevNojujWd5mnGD552P9rBpTNZeDpT99P5ioJHe66xW9R",
  "key32": "4g8nYFVMzAtpt5HR2MohiWFybjdhc4juCj6SAyxXXMB61xMQXkDJshFLbZQmiwb2HJXEoiZYCPoqmQrB3e9UpJ2p",
  "key33": "4K9W8bowhw4HNqrjeaYEM7BRkBdn2E2jmPMPjRAbod3rz2npvuSEjo42DvErhCWA2yJCdPhqoNPX9SUEN49Qiepp",
  "key34": "4xd2f6oVEbb1Pek84HrXXstgt1sGaEo78G5tDySQRYHZ57RjoAKFHQ3NYiLsc1Xzo3FVfuYHqhL9ouDA8MAnaevV",
  "key35": "4CoHDeAfWJELUYZMtVXdCU8rKmAT2M5kPNem5FtAqUzm9dwy7yHdfZgYiMPLwY7z73n9e5XGcUYNHR5jDc1pgfbv",
  "key36": "5visnGrkSBdJmxM7BpLAuAQbZ2vmL7gsP8dza5sfbENGDWiDrcvzb6B5UDP2juWJXHnfS1bcKAS9fUicadDS8WWe"
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
