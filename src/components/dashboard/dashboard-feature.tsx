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
    "4ewki8M5QCYwHU5jCwHq2kCJKmTpoSUFUaSfhdetbtaJidBwWUw3oiuYkUbnyTTCM9ih47oa2oKmPLyoBcEZ5dm5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43mDNptgBuTe2GirVvYDhqP3MBfs3QHTyciDYxxf7LaM5hFRi8BZM2rr6KYaZXdcvC5dRMaKNjJFdjhvwfxUh6A1",
  "key1": "99dta3pWTcyLJmaZPi7wxSPWSiPh3sRnmYgg5mbN2GzZRXasJznknfgW2Qqx3wJL95vP5KNmPG1m3ABpBWKR15P",
  "key2": "2LNUGoEYsLnn5ocNz1XXroaU98QhW5habu8r7UgmWmgfHuJnvDEXPnvNr3UZnv8veZc8TSQ5NKZPhrm9umRBNiwc",
  "key3": "2ZC4teLX1m3y2hprTqBYmDAWdXgSnv4LTg5t6FprT82P45Gji2tZvK97Ye2GjQNMkcSfaCrMn7XJwLbRDHvUMRS3",
  "key4": "4A9psLcY2Be8jjG9c47eytgBoXUMWMu1SWrZXGNP5zR9dNetff6BBP3XHCkso2XH1ogmyiYy3A2RsvkUqHWtbDLu",
  "key5": "5tcX5aB5zrXu7V6gU1En1cfA9XSX4hjLsgd6qNiWsCLGDm8kWBnsrGJkRZCWQbud73LoTm52cwYquJ1NmgtsCTgU",
  "key6": "W2DyFdSbm8dQVRFyj26bkWrL64qxeTTLcWGgHakyPxagw5KimGyZYiaHiBDksWxLsji2iEwBdfJHbYCX912NSnA",
  "key7": "5qntb3fC9j2sPRHycpGwxgWeJbZFh8kM2VShiiovtUNdiz8gWSy8KgE4BdWD8RnvokgrqqBvn7kJkcnBaRyHwids",
  "key8": "2nNfGZoXrjNoFFiHk84WHAZpBEuSZhhMxWKfFjWUz6b1sh9zWg4xLLRt4pxmEgEFxjzT5bFg9pnro1tKjRPVnMLC",
  "key9": "55V3nWaxqLTAvfR6ZqBvAQtCDJQiiZVz3CoDCikyv297Zv79xHK8kByvWgNco4vZfNMUkVkpXXZRvKoCAxztvQsV",
  "key10": "5osN8eNyaj4QA493jJ1cXj4dHSWmTpKZkm5mTYigZqdt4f8iE9r4L9iCkBGQThk115HwgtfUG2jRSbd4Nbq5rE38",
  "key11": "2VmJKbXMJPcB3gXXv5eoCFDs312H5AqFfkSKvRNgkMhtyoEMSyf3caLYofyGNWeiEPvYEyPiZMrWs6MjMYvhxmn8",
  "key12": "5Mk2Y5LWPGoJhyeDvM1pNr9zaq4t8u2LZD6RLKyCigmiCxAFWByYzcaJXV4L6ryUW89cMjALF9orRcZNdKdMLJT1",
  "key13": "3w6658oaBca3xbyZmMi5yrhjT5KDxLhRFXYNAfymRnQzVUXsi64zcpVHXZAn8uwaQ5aVLUw7Pwif6tgMwi8D92mV",
  "key14": "2bu9z3K9FTqLV2E24CUobFndbzV4ttP9gybu379JKvcuhQuuPfxf53TrAoCbi83SdVpNMvxQnoqT2J8qT7ff1aiE",
  "key15": "3oUhgjnuZGokJ9jXAzcp4R6kjc2sXj3j9NSYi67kbgLUdecNjYXC6MiuBRyvdxGVSv4akYvJvtjAKoAvvF6aTM8T",
  "key16": "5crx3rvd24MWsPhDyvBGHH2G2tjMxTRJygdurTL6PBmA89GgQ48UHAXDUbJ97xUoWVH5yarXf4Q8sXrfKmXpjeLP",
  "key17": "36YxpQ3e3tHSTME35A5w17wusHK7EtZ2xNKLuvQ9PWovpiPnSRG2zTNN2YWYdLSk6eAYsNNe4QqPWwnHosUBySGd",
  "key18": "5ycmFTku2Dmivpkc2wKJzSX244uNwegRUJVk9gsYQcuojtdo6M7j4sLym7PYckJpXpTFeFKDYoFLFXhcwSDtJPpn",
  "key19": "2YzKVZKbYPsM5RVxxJXxfGR8P71amK1LPRQxeczXJYVFN2jPBigiUTM3uy27pf6QtXAwfuDN6LZeKou6LkpjfihG",
  "key20": "3s14iyEhi6Ypod4JtB6z25WqA7HY4VoGNZqBzzbD75t1KCdZwbhxveXyaEueGzEAR2iVrHQ4DtwNRhAkKHM16sB",
  "key21": "4RMinSb7QXDVRjDYo427h2Ds7FABVbZfZ5KXSRtkUPWH5Tr4dbGhRFiXeEahoaoJwTJBrhmPhzLGDicRqEKdzzBC",
  "key22": "3isZv8aU9TTQ35aKD9FHRtmcELUFK3r52vGh1rj8jf8x3yGvdKbutRNjwWWf6NPGtA8Xucestujp5ewukw49Ec15",
  "key23": "2FTBUep8s7K9jx7TcmzR21DdrYe7Cxdf2RbT9bqFx9ThN4DkL74NGQrf6ZiN9X59fVKeQ8e5248NB2MemMneypAm",
  "key24": "5Abf2bmVBpFin2RfVGMJFWj8NGcjM95JerAxckUyC3YiMXEoAN8KazpPJb4DHfBKKfYWHkyLBUYuX3mKj3FqswLc",
  "key25": "vMGcHKwxAnauvNak7eDvyQQHjktrqr4AXT4eVL5Q7httMooYi1RFLQGhWFid7CiMZaVfAMM4CAqkdQqdDjn7tKs",
  "key26": "4CVdPmLv5SJZTG7yKXeeuURGS6x4Kc1hEA8ov46NxftvFCUarzusjjcE5NsHsxAe97rdGF1JcAnGXthyn8bjAu2s",
  "key27": "4grYbqWr9CRvbNKmwDTh7m4NDPHV3fg1g3rvEHKshFDSM1dQ8kJ1bLt3C8RDLbVEKghiqTRfuBtWjGmsze2La78k",
  "key28": "o6cZroF86N9SP28pSNzaexppYnqVJ3TEVXG2MA1ytcMp1jnuKWG2kBwqhcGMMxzSKqTVBShk6dFNjLHsHfCGnEM",
  "key29": "57jo9wRqzCoCsFo8torYMWpTQKNGz9gTg7WK7ijDm3kcDbzFUHHSF8tjCLeoCGqdov87pzefmSKn5tUwFTt5pWXf",
  "key30": "4Pi6MewFzmyhcSo1PzeYLQfLEAZoi6vWrSnhoK2JghA5b6fTv23qvzauVuYeWS1bpKrnpsHZbEHNuLYQYjxUy6yH",
  "key31": "4wmDnLbtkSmCainBHVvVzRpUqiVq8qPpRRDnFt96RWtGusfAVs9kAUEjWH34A7A5ytxF1t85jEawcKh813JvjGi6",
  "key32": "3x4R45q6uuuWRUi2cEA4L8qJgAUJfM3qZoevbAvVfZX78omJ26Q2CNS3sqpe3LHCYYtJ3ZudWV1K1MGhUCnod1zk",
  "key33": "3qXN887NPA84676qqqmi1DmowARNirUVmfz7R4X5Y2g6p8YsFuNdye1ssk1azSG3378esTPgMSaL8hWvQWscqheF",
  "key34": "spS1viMBFsmGWN9q4aAEBei9CdDN9x2hRkYEKRA8wXYdFV1dee7RP3RpuYjMtHYFHu3gboGc1rhH7n8xLt7vKnw",
  "key35": "2SJpYGyzWtpPJyrLwKRGspKmkVKwPanNFNzGsG2BtQQMgEPjyH7fFCwNvEWyyQeHgxDVprBtD2762z5sHNQVtuER",
  "key36": "2akwP88DF6U32KZJurYu7ZooFLtXCLWiky5gmKGHBLZxCJmydsMKzZjbbUERuXShHrGqsmkeHtvP1Avg7LNznzdT",
  "key37": "4sNnM2o7w1xerpBoVtRdfmB8GoVfKnhh1rQiKpy38BVU3rreCo6UvmFbxAvvNQaUJ8mpzEy5qCG1p5TbQjBjLXFn",
  "key38": "5SW7XyFydwvUCk933akQ4pu1vgXnn8hndptoxzd5tVxnVMy3XtLKsBaQAcDzR1txvQzBwLMpAeDBVTUY3znb19VT",
  "key39": "SbzhjmMFpTfFSAe3UGnfz5owSQuumkWeCL2k8CR2ZKhqs8Wt5tLbUZZSUDsCJuKKu1ayuhLk5sHXKfSP6GDRJBj",
  "key40": "4zN7xUqDW7gGnHuaZ14WgPZr4VUxqsYbCpahJcuqcbnhKJaXe5vStMrvnucaGBKBkjRAue7wJzfjp7oEV5PMiSPZ",
  "key41": "6uXpi9EdgT4xdXfk5ioUgenLKN47sEWjTumUwLcvVv9gNfy2mki8huupuJiZF52LakPpyHmLndrSYkqjkJaFmpu",
  "key42": "4maAG7u3JRiNUv4gT3JQkhRf8vb23Bm6Bh1svm7TQ2wS5WftVncYnUaz9BKk1oST7zuGnWVrKn6TSwYFTLy7JC7n",
  "key43": "3pHp7EqEpoTLhyy4m2Q4kjUMXKSmwHy2HMGCgYXQmXzHte99DH2x1fmE5VWoUzAw4XPKK6SuJovvk923JwcXxt3Z",
  "key44": "2JBKDsMdAQkNW2xRcftocmJcMcM2gJxLvaSqBWByxVzWCRmaWdzKUoNDZMM4uLjt1MQMPzUzj1mMEeiq71C19dyQ"
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
