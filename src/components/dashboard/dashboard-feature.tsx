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
    "2ncd8qr8dmVQCML132kydqdSuMQutQmdeSNXCe4WyPyVUvXQZP3BjT4X8CXXBEVFdc2HimgpsLfg5irAEJ1R5FqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TpjLvDSPxuBfKvKLbwFcXnacxxwR93HpbjUapDD4dfPwuCvpEGKFoH5dSvfh24T5SjpbuHHfA49B9k6wan72kgV",
  "key1": "3PiDMfBxijkqE3SyiSW3TTj8bExYX3E9XGY9LTVfFF6xatwrvcBd3iTSyeKj1Z7MyovJzjpZNuBNRBgPZ6hbPXnf",
  "key2": "F5iNfwMTPUZger5QTSpDngoHdjdA4wqEERU7vmckQjEPTsUjC8rA2vNMyDuXGmc14a47XaGRSGdiwGjE9LiV43M",
  "key3": "38BrcoMojq3esdfEq9FywMsJEUVYtnUkGbZsscVMJTKLKnup9WkLaDpMQaNZCfs9rfyjbjZHAxAPhvKVVECjykwq",
  "key4": "5gRGRBLg9Jud8WU4eE9ZsbeQKAcRu69xXWQJ4gert2XKR7ey6dGqj11MyucqWiKhsYy8nfeamaLuY5vd5Jf8vG9W",
  "key5": "3kR8K5vXPpHa55x8uuTs2qvkz2uMgP4RL2LERpTM1dXwrwSozcSW4SfUb3X5rRw7yrGUCBdMe14bdVXby7aTMsNu",
  "key6": "3BNYjtyk8zXEsCBZVmmfRPey1GeHcVuyQXEATBpswZs3kT9DNywjULmD2wSoKeZJAcUVRyizxL2ZZQ5gY5H2YbeH",
  "key7": "2qrkDvfBZ6FaExW63FKWA7w7v9KqHwUUDfAc188TRJs4FcKmww86MmZUyjd7qbnZTS5LP33xm38AvqTciLCeL6r5",
  "key8": "5V6p5yF5YvJ6fZrN6vLc9Sx6Dx4mS5JdKiTC9PxZNZM39j1Dgvo275Wnu7y2Z9cWjX2diH1QWQTxM4nEcNFeAnSp",
  "key9": "phnQnFoCCU4qe8RiXSBMvthuY9ouWs9g6jWuEsqpgn85Q1XDpmcZbk1ZRoKaB8R4p6baaBmQF2oz5gJ7HfcBe3u",
  "key10": "57Ay5vTXc9fFqV7GJNtBd1VXXQfrD1nvv5dTVyJ7JviQJmM37QhTxRidJPtCVxXNnLmZ8sgGspyJymyKfxxoyxTh",
  "key11": "2qUdsGQZvpvR1QxsuAYZwbxR99ZzJQwGgZse1PtPmwyb6rn9TProxhvq2pWSAi29aBu7Ym9i74ie3jDZghbCjRs7",
  "key12": "1Yr8vxLNZuS8LQAL2SFr8h4MufKtLUGW14Pt2hqa1FZzgTSU9rjwaeGH8nBE8bJF8asy2D9dmJXQJsYiVjne3jM",
  "key13": "3tsqGpRyeTGZprrJtzwenWgYc6eosvYbzdQtLidogFnbKHLU7XbktE7juR6cXs79TNpMi1GuNxsZUrQFS46QJYgq",
  "key14": "4dra4nRCqEeto1VT1EYyT6Z5prsrK8kU1YzQx66BTAmZ2AbJP6Xuf1DCikHnAzUJSBf5uZadQ1CUwrPcB6ShjuSH",
  "key15": "47oLhmvGMAP9DQnjLDSkr4Xx1x5LPhxMnV5Hv4f4F8SqUMwdfqN5Par6FR5w44LiyBtvERM5eu8gUUkXMubQm6Pb",
  "key16": "4SHtY9dmZUCPV6FutJhbzpUtj5XhjY23d9zXHejoWSR6oCawuTwTwZSLNQGCUGDaNDiqWJHE9xnwEqsCmVmKjgDe",
  "key17": "5Ypc6CwGRL6XVLAWHwG52qVX9X9rDMCSbcSbZ2DKcuuk5Cy8koVejMHGmvzGRfyrdb2knBTUSefwzD1FZbXsms6p",
  "key18": "92kdXZCLNanQQCGCwrsQ1qQ2YaCLTYYsxVserAPH3otZHbJjcNUGK14PQ99T1RHLCBpVi9V4v1Yk9wG2eTQuBCG",
  "key19": "3KanGqQ3RpJtApNmupQTQmKWXynes6hadkgHmGpVa7dfWtU97hBTfhkQUamdxhouebr7isuCon9JqhQqjh8HkxZM",
  "key20": "4cCCEd1Re1RWFAsKeSFZUBd6UoACkvF2MfhTcNNxg7tLKjbh4WE2pwwvqAiuzsDxKur6rtS5ZdPqfJu71f4xmu3v",
  "key21": "42dxzYShZNbfecTLfXiZAvWWQeXf7bzFLk8be622rX4vacM9N1PNUBo1ZnX1vZg18bv7Jw73tagyg7qyYtk1DP8S",
  "key22": "2S7fMJQ9WWU4qbkcvLR8rZPkRKwRokKfZF88tKEsE7712f1bxhYAUehLuedckP5pU4sUmK3KyRtSRat5LDpk5mG",
  "key23": "EicAFFp6C8bor6VbsRTFcouP2BXhhvE5tfUcQAWMsZxwnHhEbq2DyVqfPmZcxxZRq4Lvt8FPcdH1SsaCaoZXMnv",
  "key24": "5gProjrS1Ykx6MgDiSc4BHhPfknQ3DPez2o6pxXBF2UdZFoNU9rAzB4f2QRw55E9dz5uaqsqnhQ8TTJsTvWeGDM2",
  "key25": "595XcWTiAjyWucayDgwvsyuSCtspijg1NnkKpgGzf88AzRMoM3RnesacHqBKw7CkBGr13pvu8d79FAxoYQTMxAxu",
  "key26": "4UR3F7vRAQJUK6ahAiJdkKhr9WyV3AXjrq8vbnZbLFpFyNNLgsio8tg7iN5mseDysmHMrNpQSfbMfZp4VjCVewsR",
  "key27": "51Yu83SJmTYnWcwYn325QVfBHqgZyWwpQt1tPqi8vQHsrD3bGJfoXwF5kL6GyNsnj9HHv1jMEp1xDAQP75zWbsZq",
  "key28": "264azojZCMmhBn88vGkKgnTZwnqrYmL9JHBwkdAzzKG5THRJpbbaJusvMUo5SQV13khg5yS3hxeo95xQmTC6YjAZ",
  "key29": "4S2kXLpk7fDtu1r7bGxUbG7sH9S6A5xNsFYcGgQBZidAHu5FJWz1QvWcQR39g6oqRwKz3ehXbk8e65aFXd766BZm",
  "key30": "2XjPkRk7Neqj7qxJPsUkAhERdyfRHWrj2d7ke7sSTgHJiFEAQYP3V8ebaC7XXLLhdDvnKDZG2P93YuUVCNbrdiaf",
  "key31": "38RkTFFtp7TdF2JVmuhP3UxUETqhG5uDc6pajtabR3oBzaAsQ4CAuHS6pHyTp7nUdRR6eCbW9BBgzFXqWN5y89vg",
  "key32": "3mUr17bktmWjtxpHqKNFwiYYGtVuAC8yv1UVBsn2EKjefxMGGxL1zUeFkC8A12dVSd9rqpmJ2EA7THY46nPStdY1",
  "key33": "4bruTKHSBjWfwFbFTdqVHRgCVcRpCTvJUFyJvAKtJkpdvxHraPRu8NuNCNd2fPym9iTPSUxL3nG9u4D6eBTXuijE",
  "key34": "5BXuQWGSiuchxV6kZyJ2EKBRNzn5cgV4jphgMncS1UKWHx8S7nBASEpZrkMNQ2FMXZVt5uj5zcHd1vroS6vX9JTb",
  "key35": "4MvLW7RYn68F3Yy2E6LX45JioMXrNNW2KSTvPPjjynPMfzANtjsfyKR2wvi5NHn1FwiRZ7FSr8oUviGe89x7fDZ2",
  "key36": "37hAEtUbWBWpp9eXZMrmQaKsQGocGPZVuKjpnMLQ4Cth9wV3BRoXPsc3eXRKeiDtYxpDmwDxhKGeyqT2D6JNo87y",
  "key37": "qErE8CURxci1qwoegKQKV2fKGxR2S6BBPkHCd5hbkmAEwp5XgcQAiZ7pjhyHpQYhxDhRmPsUdRkEs5sFHFSXbKF",
  "key38": "5PSmzCp5S34LQUtgRWbrSdmEZSmcnMAnRRLCS8V3xTXBRZijfyeQSabNf9LEc5zKvXbpYwa6Lyn2HZMgqxCE9YHL",
  "key39": "5MGzbZzGQE5Le7KWRZiqmJ8n82NrQ8RZsgDpADZJAXCVjja8LQJTratfPqTWYBTdoQMHD74ADi9L2KCqes52bxkZ",
  "key40": "5pwmWCGu7BkNeaQm1BH4mhrG1AVgxU5hvGHvZAZr3hmiKzZNbjFd8SfdYkHHhw3zzQ4gzGruAUAKKGT3yUhbvpmp",
  "key41": "52PyxGjeMVPo15vFTMSPTiwR6bvdwhjn5i5csdEtmfScDoA2VBAVrYF6wbHP9omUpMp5sDqDKHPNdv47aWoEXiev",
  "key42": "jwyBNsA864C3GF9Y89JfDqsykdXMVwVEFRKrTtruApPEWTM19BtyiAKxW4QMF7psv8z3fTQxQZhauNGauqo39dn"
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
