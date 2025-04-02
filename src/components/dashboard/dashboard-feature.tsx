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
    "45vxo1TDAisHbHVXGzkojYnMLNZmq1LFv4rzXCggb2rf7azBCpJcQWpa7rXFuSEgGVWBdeNjoJ6MBU4uKeT4cW3c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a7ykbiZWWQB8Wg4TWmWhGKFDZMnyNFQpwuGbAry8UfSKuTQNGvBQv2j3kB4AntgZ14wpWkNKed9tnfjDPRVopfK",
  "key1": "56TqnEw4ufxEUJbvoFcUN7pFKDnzmBZ5wVk8yGqweDqQNLKKopQLkw5WUEN5rgHop2uvyeHSfdMgHvUdP7jSDcDx",
  "key2": "5f97qJJxtLbufiNNpuqgSpKLNvSLsbD98LNXHdi3oiVWi62gVjQdb56drfzydhTPbtz147trkJDxtsYcfs53Wn7m",
  "key3": "3Sg9cVjemVxtHHLLxEfMnRzh18eJKSJazVbA8eYJXBAx9vocBDqUUSvyeQ3eu5EBxCWQcpbDyNvQGkDhcKMLtcc5",
  "key4": "3gs7v7LUsp2PJY5dNNCdLjxkdTQjpdn1qHt2kqF1KQrVxST9pPkmfRiGGj4JnEZZWHPbwnZdLmmc6sjXTRt1PZEg",
  "key5": "4WN5hehzj8LHF5BX4BvD5fxcuMQA8W9p1Hzm7CGhUYmA2SiBYMeVgKwhAAVib7pTy1W2Tpq9hWoUw81kT1T7UErZ",
  "key6": "5XTfRMd6P5EKkwFQNh344cxQNMwALgm7XEEVbY3ozpZAWXcAkNQ7hoeW42dTXxn7AUMG8ov3PNGvRFtXi1CneHUN",
  "key7": "5ATf2hViTVuFF5vso1R1uN1zYWAXfYR22MgxthqhQdFJffVyyzFuFsHAqWKzGiYxGbpdnUpqvu7u3WBFQ8QqAQd8",
  "key8": "3RsCfwzFaKvne1myFBSRFyTVKiZcq6HrpszSiiSSBq6LEGcoj11Ac88wVXw3Tx1DnSfBHA9WECH6DLjSLbax87Sw",
  "key9": "65u79vyUB8qNw2YjG3R2NaZa4fKghCjT3WkHcuz6joqvKjJhCPnyCUivmgMS64LeLdncAn3T5ZKEKFAymgqbCvQo",
  "key10": "4D1DNqqZXtjXmC2fndbJJhH4mCGtgixMCUxkmQC5t9qMcAW5QxYo4YgHssFXaup2hUh7v256KX2kKXZYwAuLVaSH",
  "key11": "2ABq96hy6BTmx1h6fpADxD5eBEbvgX6wWcSb97xBWcFAmYmTBJWFwpMrPvpsZCo95ScBuPnMyANp377utwGbPqYg",
  "key12": "rhchiU31ZKCKty7sXg7M8wWLkwdbPzJK3wf4tNanrP66oqjrJmBWLoKmpw9UtZDxfp3BrkwZ9AdDxb7KEU6vRmm",
  "key13": "57tAbwhgdey312Ba7DEcMATqK3iF1tQSkyEvFoV5HZyPkDx9GqGgEx3q3G7c36aFpef97rBpj4yR2r4shkE7xLgq",
  "key14": "4k9rKzd7jyqG4G63xfGDdP3FKk6AfZ7wQmR336P48qoezQmMF4PSqh6txrcujQiRSDrfjXfotgXzf9tz5c2VQfpm",
  "key15": "55mfzU6PTrkng6F6FgspcxNTVsFsmuYJYonj3WvzAimt77iifqVofrEbzqU6Zsh6BQSWMGV9P6QZDhz1YeJdZY2k",
  "key16": "o6YRVdkDEPbA7sbmZ5KELckAP8riQLBzT1ufJU8YYHPJjk6KXXnDXwiGJaiAxiKwraQvNe3j9u5tnMbCnK28E2W",
  "key17": "57R5rS6x8uARDw8e4mJxQ6KQn3RmWmEahHProcu2LSoaxPz4HH8nKzoBMgQ2BcK4Zhr8pE811P4tUkUcBMJfzKDG",
  "key18": "5H4Mt3uaYVbbvPZZnLNMzDUNo2Yohar2hrDCVsugo6V9NhnnV2UxYxaibBorhX41RdGSpw8irGxMdFMVqg8vB9aa",
  "key19": "3evjZ68JxKs3zj4qPi8RMwMn7DZ34cQ4GrD2nijZsk8ungYuXepiUi33XYefmkDiK8cnF5xtbyPpRbYkZLd1f4vU",
  "key20": "3gKUgk8edhSmEN1UHzUNGBtvfZ1gYZC97EDcxq5TFkPStoEw3KHym57RhCuk7uhJbscELQgrXHa3iicpT2G3yhLM",
  "key21": "u63w71BFeQRbgMa3K984VVSKVMUDSo5X6AHfCMitUyzGQTUQK3ivwKe3DxqPnayPsnWxPiCvtJTt2C2rnicSAAq",
  "key22": "WsMDaTVL61K1JDUZ8wd3p1yXj1oY1XCGhwTFC2EWgFxYtAFPgwEKXoRk8L92dAqUMFQ6FDQm7RvhEmtAHyCeV46",
  "key23": "2CRf5wvK345wYyYuwmuByKWq7V1yFAt3H8ymvjpxijrDpatF547VkNJrxWfTjoCG3dxSYd727roFqhiLYsEeobvC",
  "key24": "4R6iFSiD6KFrRmJ8XAz6WvTPyttN9RPyxBMBLM7X6fKWYs2hhbjZeg9TVY3HbXLAjKw3LCx9UZ421XgnHQFfFW6C",
  "key25": "5EmnB1Ccks5Q9ZJ3NQhLrShAc8NL2rnJGtnmWHtWgcGoKQJSfg9unDfqGLXiQ5QJadGqBucjFtgYnKjyEBpgkspD",
  "key26": "2sQbjaK953K5uM1CisvRGMyNLVCc1i3678dpQDsJC7GvWMnKKf2oNGwrwSkBDvNKcHpwRB3gxnTccLDFj2JYKHmy",
  "key27": "5rtqfb1K3NC6oYaLsSDQqiTyTNzPGYH1CNVrF9uz4YtyGGV1uMTM1qZmtGSfqPmYtHvcUQz5RrPyfRWZfr22MGcg",
  "key28": "47T46uDGHRmvszSmGAiVFHQ84oENjSiWRAVaGSw9qNBDoJkhWYoKSNitsKvWyaMw6hUMpDmXQ6r9iPeRbSRBw8BZ",
  "key29": "4RjthGoFqnKLkUr9UENAdWsYGzs88r2frtyrJ2d8N6Ta2WidXE2vRFgBDAgE5Z4qqgYZoV5YiF3kjVZ9wzrCx3fd",
  "key30": "3K87i9VyBjqutHZvXRXgrK1W1gunGD1qvwpXv6NXhXURwYCjsfTyH6pv79CEk6zapnEgMa3CyrybUkYKY48AYDo7",
  "key31": "4b9A8FM2pNy2dQQ7EjaRs7KvmBLuTZSDYMAzEgYJzpfcd1CZH6PhokSAvaeC1WP7JVkoJcpo9GsUJf6nAXPRmweU",
  "key32": "2W8HLaY1PA2TEA4pq3q1BwB75Jxr8vYR8suKCTGVAbMUb4AFzZjhAV8CVtFj7agvg8ojk6GNus5GVUhXETfA786",
  "key33": "3oaVdXMuyadL1x3jCe4jEdm6cHe7oqsieEzWhwjtWdhD8116fjutPm8mNd4ApScMaYQgdCc3Hb6GA4h6nkoMjwMs",
  "key34": "5atT5iH3FVoX3XV7WsyrdhJtADTXMzb1QF34kHkUj28EdfAs1UkiFua9qWtDutpVuwodwWanDuWAxAdcfK3RqL8z"
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
