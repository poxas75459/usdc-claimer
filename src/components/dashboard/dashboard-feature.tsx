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
    "4w9KcUApbFrjUa9hwRYFN2q6phK7jtQNu5LdgKxb8cEYWjzgtszeA15kEtAoqXLx5sjB3iyS6AYjYDFZYZBgmaaf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S56gg4ymUe6nQewvyT7JdFjXbiWyLe9VW6x8GBbCmYoAdmXZeSKS6XnS4AXYz41vVtiJFA4fk2NTazMu5KjF1J",
  "key1": "5ZcD9HCx2JZws3DQmDbfhpyPN79uBLgWvNjhUDM3tuYpBJGPG35UPJVD5cDN45fBPrWoc3mXduAvoAizJLT568Ap",
  "key2": "2WyiseQTyrwH3vPDTan9FccwHCVtVEtmptGf4kAGQvVm8qZCnTzRYJc5GpM3o82PPTcQbJsNqzLyQEYyji2ksLAQ",
  "key3": "grDgTnoCNtWhuqyfwMWAM7oh66W58B4tUCK5Yaqe9WhJkyD7R61Xgs1Q6r9aDW9kgUMgturnLYbhu6D2V1WbYxt",
  "key4": "65SqBXB5eJoXhkjfn1UcHTnrQ4SYZjab2o9zdawTxkTuqA9iTjHFwU5ck6YEFMCCRYXasUuBYHDCYKKyjJobnqhC",
  "key5": "3vYDnNQ88GUy2HcfVoRGMZQCuvmznZeFen5xkP7daBi6a1Mtt9ycJe4od5Lj5B3SnGuDpNzwkM4gWsMfEkDxfR7g",
  "key6": "2r5HQ1xid8NEKBNzyd5HoYppGXX5DbCAWfzSGVdmPnXRs69L5BCCUAL6EYHqhQ6YYBLa7tU8PV8GAGLZiQQzFdyT",
  "key7": "LZf5HSUQXvfQpg1WXJBgaYiPTnX61BobrvtJuHDJcU6Nbxormqz5fFwKyDU5G38siVeoN1wsLXjhyQUCnjk2Wq8",
  "key8": "ovEC5ndFWDgbgHRDBTD2vPBzEKs8zbuDDmTExWkX6Cwa5LPpthz4PytTCFyhbT7qMY9XStsvZsK4aXAmWuG6Kz5",
  "key9": "248HPHws45KYpbR53XJsHWkhs7fdvmUkeVpep5Mt4JmPLjKJ3ouzN2g9aif4XJcD9Go1DjK8DrukcFiPuRzpdgUB",
  "key10": "wPCiYCq3AcPtf8n2qpnuwpSXGLRnWwv9kFcQNpWwTvtzvvqhjHeTE1zKytjCVzdenJJenAfCZLVbscJuGBQtVSY",
  "key11": "5t2GB5PvLZiMnLGSNsoWp9rsYsPtTwcrbbGEAega4FKVbhRSLeqpgfdqUmigxf9UrWiCTDM5HVs1JbcqgUuPyPtc",
  "key12": "32qqcVMXHkewLMHpadV8AoChrRdMeGCN8MYAb7sxzTRFYPFe5mKoyJVcgHyUCJUiWcVuzbiykejpfRzTkVUjWKN5",
  "key13": "68C5YR4rP9LSX3kkPwasDNSY9JTCi2AdGu8aBJcacz3tHAJQ5XmMJ2SPPNMAmVyk8SyQcGNqk34DhGYSwnsfy2S",
  "key14": "4Hw1cusrV2YzMB2jaPKcQNodN1BUdbvDcXiXqDYxhxiJrAKEA7QbPVicv3abjZysxsa7WcqRfzxSHjazgYoUkug6",
  "key15": "2tz51TKQybmpdLffzDwfvjZRF5Uc75tctTvvwWY4qX6gAeqnZfEo4FQJS3NXxYfjkbc9sfHEVBiuaqWHeY9RG1bN",
  "key16": "Qk2u1ru7Bj9RVugaaqLGDkMgUv2E9XrpyVfmZWeRZfmzuTpX9AEadYokkQYDLfNPFTKSccsB19zUD91mEB6MTNL",
  "key17": "3te2Sjssmif3PXt2mpnY3PCWn6Y4WwYcotjs9MiUG7BMykABwiQ1UeHXLFmh2nQekinPXs6sAe8xFYVRcQXjLGGS",
  "key18": "Z9WpqGkjezfTk4uPmRcvbHAQKxeNgAJytbbnS7F8Z84Bg4YNNqTQpMPNSTV7d93peh4thEZkWSu62U3jmHncvJB",
  "key19": "2BcHWhSH93kvmqhx6evgbp5TbaqaJTJjsEARtqH4MRgGStENpxMdpmq3sp9zgy93HsEPrzdFjRsj3SXYPPvSPoZS",
  "key20": "3o9aVT5MrMCBz1ecmcgBUSKLDQy2nWB9fW9J9YxLPFibZix9dsrYaA2TR9jJmBUQMBxFJEasxxGbK4XyRC7cirJ3",
  "key21": "34xodsgXW2LVZcez4QVqqs4vtGsH2HRAbHAvznkJga7FKmKLfpvCspHmhdpDbq8WZ1m4fm1SgrwqxaqvQ5UfBFkq",
  "key22": "2CG5C5YFCwBJrcM1fEZbBMqEr2ZskYdvubYPLyce3FWLx9Tg8ktwCBaPaD92X364q2cC1UKhzX9wj4w6p1ei6Cn",
  "key23": "39DyWuoeYhoksfYRU9nW6e6Dnx8rSbS5z1rZsCVV81FFEiccovjLifn5dLmdXNjy45ufUkVkT4kTUZZcGfeFLZNd",
  "key24": "49dsnKAQphzp6vRRazaR5bRqgZduebHADu9PPw3R5gWdMgarUv2yG3JTBnCfbCuVntWV1ewk3rG1F6xASnK6AUK5",
  "key25": "4YDrAkiDJzGyodn8X4PM7nrQ4DbDjzmB6tCdSrRA7g5YzyaugdgRrX5BiZpMJfjJGcwKnFsX5DkoJe1SJPokbfVB",
  "key26": "4AqVusAR8zdKRqmHHYWpcXa17kE1Kz9KHm2dXjchMrRq3nCzMWhtpwXfTqwWWZfqmAw5Dh7jPdGhqFXYoH859Cus",
  "key27": "3FsLoqVtNvSeschzxUUhvMDZ7ctSEzPNaeKVAZnzB7ZLMkdqMXfgPdjTphHxjQbQypZVCNwAe2dpisuZbE1cDx49",
  "key28": "2SayekcLe6fzzb1G8G2iNURQ6Am6SAzXGbyeU7RNSm5jegkqMpZTcJui4nQmt8Vyzm17bnMznxL8DfyFQPxf9z1c",
  "key29": "2qbg2j6Gi7YyfJ7pMRMpUWj9X5zSruLbEwqBEZCUi1egUcDdSEtxWeC38BbRZBAR73a8AaNzJPyToL28YHzTuXSD",
  "key30": "5xeVfPcFYeqFm7iWrWg8BZmEQQ2G2im5Q4fHDMB2gfrx3dBEM5xg6vX5CV4Ef94WYprRyvtzwFeNhCM6yWgMDJxe",
  "key31": "435qBAsG2WpJPC7bcHL86uNqHnEwUHuzyMNzhfs7JVamf1YWE9685X7fCb2NQhsSq71PVNuJ5kMiSutSCJ9pwzCE",
  "key32": "1F35HyD3MjYSSpH9XenUA7afvyCnTbrFFqTLNfbFzd2VQc7qp9iuWcVtPRHGnXTMN2Hvy5ULbaLsP87MZ8r7i7z",
  "key33": "3bs8iCo6djFKyNiDxREPb4PYPy2Kf9MJFjEaYKpUkD5C8Uu3XRPsbcFtkUr3xb3dQjeAdwCCkUAWDsqsBcwGUuea",
  "key34": "3Qb5o8TLsws6SrHFXE3qtZskQq71cb7cwv168AkjVo5EKnR3thqruMfmLg6pHvVxAUbKZ1yprfvFvSgJ2mx3LA43"
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
