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
    "3H68yr6SkFqW5UF7irkGTDcE6h3KMFRct9QAqgH5Z1PPggsBDcHtZ4gsR1oZqgXyzcXoA5xBSmQhXW6HsKpbvGuu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26w3La5Xbg2K3LivKsrmnb66piQXqttYEJG5UMhzAVrgUbTuSjw2QxyiDuirrMDcWZBRBiDAt71rRtRWRShXG3CM",
  "key1": "RYXBY19UErCVXtTj8BP3BaV9hcvSU75E5MicHjrYasY2atZL2nwicGfyLWhnAafmRa55qGNNVgeBLMa6Ame2NHN",
  "key2": "nXNBjFMvZPbEJhQ4WQHWwUd2Lckpqy35eoaoSfNShcme4YN1E8gmosdodgkYxFh41oPTSmFs8QzNrANPcut6Z5u",
  "key3": "4CQ5TN53RUsGKSuRTCbNiQ7KqRd7NyfZqURmmzBJskSP6Vbizxn9DnJtBoe24ftv46yw1CCddyna96djeAuLrhad",
  "key4": "4EidwwqNyBkB3ZUTiebjGx9XC5tX1S4JEVRyP4apQWi5eFcheQViawfFHwbPsi777mY7pX7mXENfvPLVS57uRDXj",
  "key5": "2xxHeAW3zdnVcqxzJYaVd6BajZj7saFSud63BWKgdbaZHYYz7pKmVkQCTeQLYVmXxnB2FkYdxyhsJ53DUXrFpUYP",
  "key6": "4CBt2Jz9pdg86nkRSpZXxP8co4MFdcY7KsE67pTTHLa35QQsbDTz1UqniJj9R3JHd4d5d49keXrbTSVf9U9oNC7m",
  "key7": "4xih57rnmQaFLbyG61WmYifURDzwY9xRwANgZkGwRytgW4js32wu2ETm1RmibkwSFP4cA7iLBA11W7E5MLta5sg3",
  "key8": "5kninpWWgvmCs5xPrBALhLADemLmtDs3R5fxw5FGbAfsVP1y3Pe5iGi23ANDadQMoqhYVxC2brBfHzgK7Q9AueiF",
  "key9": "3aHbtXeu8iFEfKWUGxXDDaCnAbHHdprHreq6v7AiJeAHnNafEF3dmk6rMmQCHgkiPks4nZ71B1p6dBjVq7Fz1kkW",
  "key10": "3fSoixgNJTjss6LjTTSwYxt9HLxunC11aoqGqPfv8q7atG4GrQhfwDUk1r9yZ9k4qJgpKL3iiyvbrMZBvmQ78rQS",
  "key11": "NeZjRDLvVWPpGMcs6KrWReczyZMdKRLvDzitTJrcqGYBfwo36t5EKF16pvMxSmLF5aea4i3HfdfyZYcCRfz1VMw",
  "key12": "575iN44Xo2b133BKLF2M3PxnHm7uPyWWcqELVPUo1mxCg3obNS1HmAHjjz5Zi92kbSUPijfyVcqLCkBo1b5FCg2q",
  "key13": "3AvYbyt2QmdS5zysb9psWeC2As69Yypu7jUEgLfRCCNzGbkd9VhhHPmw5dQBX8ekRpmj6N4NfRggcxSurgC9ugLh",
  "key14": "2VddKQ2qwuqwrHuDD7Znxn4obJr8BwaGgXxnwHc35TyUWTHZsFSKa4vpn7SNiCNEaoZUCAyX5ukvv3ZtVdggAyhQ",
  "key15": "2GMSvsXqrfTqJ5e3sAYfQ9tELkK32i8VYnK333MZwkRmiNZzgfBm83PciS667BP65emwHVsf9CVxjqWYUJMsGWuU",
  "key16": "2cNf21SHm6Qo4Wrdp8UJ6w1tchtH2ih5dqZ2aKKQNf8vtsn2UGLTSf3Zm6aArMbqCBw1VYjX2EEw5EKGa7TpCNdQ",
  "key17": "4kxsM33eejkSdxnJGgsTuxbeCe1NyP8s1PaE2X67k9ENehpuDRmqb65HtvqokPfsi2bUtjLLpTdNQXnviGeh3vux",
  "key18": "21uYFTbF9soRWXGRJ4Z2YzdjxNn7ViMtubBc6MZSGy8sK3fAQXXS24N57uBqZvrqBXhBqNpkQZWiCizXeXEjdbUV",
  "key19": "21mWDiDN3Sv2whBasDWnNtqizSc2R7E95zMgMPrWQEGcBfVT2yAkCKMr1XZ4T5esXRRdyutp4PtrMwmDvqhZcA9i",
  "key20": "2GmdPyEwdu35VUHqZF11ava19eTwHr3tin7LRK5PCdJ1QJeTqqsUCvVkyzn3QqYCu4eEHmoMrm2airgEGwfikrCM",
  "key21": "5sJc88E5H2PNM3dksH6UZqRK8PbRnWjtWnxv4wninMjZFEuCuK9udY97JszK83nhfJSPfjTtizDqG1mbkM3goc71",
  "key22": "3aobgYkMsXeELYAf7kYTDjWT6mjt7kgPL19NisLfY7hXbchqENXL3wptkcEseKxsgLU4eKNiFbTFb94wh1KU2Sed",
  "key23": "4pBeRHiKR4kPTiys8NW7Y4AE2ruu65VKbMeAVNijRnHjV8SGJx9MW5MBQvZ6VzTVe4qgYuAiYiZ1ZMewS3ExHs5h",
  "key24": "yMdtRmT9nKqzTJWJu5HwowQSCF3b3t26tN6MwonjT3JxRhQBAPbmcfYDMHdxV2ngkhhM79MD42DREnvyzKqcTAb",
  "key25": "2tZRK7RCMsatgV1Sx5E927bfU6faS5NohdqZpJamdPr4EPXr6tXnvApPCMXqtftNtk4ESRvXN46VT9YsaEKRjhbf",
  "key26": "2x12DKkzt3g5Auno29PYfiJnjiKvdbz5zw4BUwMF7gqjuPiMYFypeRoknkeevkTesW5PyJiRPQiLYn6GYB1q8mqn",
  "key27": "3neRZDwnpNxvjECkwELmLDUiQ2zpME3AJRR8dafGsPBdyG7d68JYzEJubU9g5cMvFRKc6f1sZfspKmuacrDgKb8e",
  "key28": "123KnwL1wxkRa56dKYZpcf1yAWHUfK947iB7ozfd8B812nGrSRJZxiaqPwU57ntTRV58B3VSpChWZKdoGjR3wtwW",
  "key29": "2JmDsjTmyyR9Hw5poSAiVULy3eKy3zzd4KUSCf7wdpuXbQuXLAxc75B1hMffzqem6KJ1oQVvLbitZhw3MjR6bu4G",
  "key30": "49EhessUP2gFoCPEM71opJqHshBjih7xHWofZa79qdtYHYoMrBVAKGuVUbZfEuYed7GgKvQj14srLQRi3CYge8YZ",
  "key31": "3SXackykZFP69uEJzWERn3XTPbF6sncfFttkw9unTtgBmvBgT1PSzZzmX5H867e66tMPrSVRgd2U71KCgeknpxa5",
  "key32": "23vjma1ehvZMt5oxQa2hwyosNZfEeKNddRfQRfY3omHWCoWKmpeoWrjRUrmKsd9tSdQwgkq71EBzey8hPTpUGV2X",
  "key33": "5e8Qe6Kk8WEMaPTP3LhauGYb2vfHzQdv7GvWioRrPSGqJPXPr5xnYWkXYBRdNd1YH7hze5Sn8FwMq8Eebz9ntAtt",
  "key34": "3B1egjKJRgqiG3ky8xPN73gEz7DNh2t2f8AuHqxoS3eDrbrkwhk4msKYNgPPZ1gDY3wMTYEb89GSW5LiNaXrkUEe",
  "key35": "4spLwihYfPVqmYg1uevqzPUiYqbRskozfvX3ozF2DHSFyUVTRnpWiMaHs7o4ordiJvjyBc5M9vg3pipSFb3gtabB",
  "key36": "5pjW8Xq2EoUJhiYKj5ZXpz9vpqyZr962CgzminJkgJJohX5V2eFsDFHX5v8t7fhtNzJqKiyyxaf9PBFuvNpMtBJn",
  "key37": "Z3WfEdJp8reaPsB5BdCJxhen3aLHKaVRbXbFfp5d8Q2cLvxF3gAZTVAU7h6CLkqi6Er5qraVEHtgFWNBi4JoynG",
  "key38": "32pyJ8kZtLbbpXXUEiQYnGS3HieP7KRg7E5BTSN71UDP73r4YE2Zx1YUUiRK33ac2YgpCHvFU1on6KatX56rAK3c",
  "key39": "5rTRGHTngu13vD8Ec5DN83Dr5CfXHPTwq2aHS3W2JgMkbyu4HfpKiX9DLheUMfmxKDmaWzq9LYKEQcfUGJD4AAPU",
  "key40": "2nZD3BNnBDwtABJ3jszrqPKExFWkWnWZQnYKgxW8eE8MtfPXuHgTEgJDbWsoEn69fU8kFN9BY1GaosacfVQYrJzS",
  "key41": "5x6Wn3hPAckRhd3WtNnT6ZyvscPS8ERKdjaiTa3u8SdYvz9L8rw5o4EQQ2NnLebsAenPMthaWoPRA3wGGZZd9vtw",
  "key42": "32wVXtz9vsnavXDGARRdjc6R9RTif3cnMHYFycq98bVGjVxZops3W3Qze25pE1dqVZ519gFFQmqNyyLrgv5ySK9g",
  "key43": "3Exo686Lex5fdCDj14n9eYmyhQcnnpc3JaZ8UvLFncbF4yKbfEQECGgy3SReRXu6ZYsymU7LPrs3BCiCdbPHctuK",
  "key44": "4mGnkFiA6iVhRFBi7EDyHHQpWgxT8Q6hRaiuwgrvew7rD7rk25HdLb6YoA19a91KmsNYuhFeA2gncFmhpoaWC89U",
  "key45": "5bCHQQFQJyt9UfoJeBhtXteg5p9sso43Co4aeM6pAVSS2tuMLWVHMxtHL2nZAQbeUcF5daZiDvS7gAGmxJoh4fsQ"
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
