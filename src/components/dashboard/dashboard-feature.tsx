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
    "3AJUC9BLPqD4cmgnVUoMUakS3Kbwxw4tL5jJsKYPU8LSSmguZVmu8sEnT79aYxar1WSphzV1NHouXrNLXAJttEZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kpEP7Pc4JW1531GDr6caCVMRBjLmQWPiWyFX3GmdbT2ryfYQjioMytSx8uUUo5UX84ncuVqZDFekerdysksAQ9B",
  "key1": "3GnsHGxptSSKeuNosNbwAgGmtzCoX9iJR649Ux4U4MxiicVXUrfFTowdQPKh8b3RypHY6Lk51cn65ynEMxNTTg9Y",
  "key2": "33XUmMARQ8GLND5Sn65ffVsge4uegG61Xrkk4P192NiGWXzABKDcKAWmkFBLehHShEjMs8JMZxLjzwGFCeN2eu3e",
  "key3": "C6w8eo4Qr88Pz8jKBeR67dAYh39TZiLgKTB3q7gYGytQn9S3ALaL6h9ariwXVnr3BoVdAn7z1bhxAJbxbkhy3oQ",
  "key4": "35CKP6fDUi71Hm3sM2pHPBbZbHGD1MmmnYV7rPy65N6AQSwBXdwoK2cQD1y9giR1sZDyx79nprdNbcJ4oPZVtZUM",
  "key5": "4fMXsF5bAbND7uxi6jbmZN6YqkWi2tSK8Jg7mMojDfS8a5GkQShUE1XeUC1WUGruJE9bQBM5TBfLa1Tuv9rANcqk",
  "key6": "3q2jS8wjcUYixME6JRvGzM1WxiQYbVoMqC8UBpWjQY7vcjRVM2uQz83wxwLDc5Esga6CohTwd6H9CPbA3w612R5P",
  "key7": "2517e3XCwHyZ42AVCmSSgWdDU9vxEuamiZe4F6YGWFCjr7HT5yL2jmUjd9EZy22MAudRqAK9mRSw8yWuhEuTf5Cd",
  "key8": "38DxcaAvcittzd843sT3rfFrhESWAX1pVAM6VTHi8kasPPndg4tedvJHtAzKPmVZ6U9ExixsmLt6youLVeiRddLD",
  "key9": "2NhqsGskP6xcZQw5jUSAiHJKWiUkFbAGE42cxnXbucsSZF6Uir5qyNYeGi8kV3fwetoacjw3xxWnN5hPQH2gZdUv",
  "key10": "3t5QZjiBYwR61dZKo1LRSaJPgbYn2pGpe1CBTG2NQtHSWU51wBSLkYm3QJaRTq38ZmeS2kSJirDhxksf34nrhojd",
  "key11": "2WoV519eyoTv4W9HNs9PWBNwvZaVixBuKKzromwVBttW62YPgnuz3E6THftLqv1hj6z7H3HgEpnEY6KhPiEeDYVy",
  "key12": "66kmDy4Zb7euoU4TjcGeHQXEDFtXBA9gotg6b5A1gZrzMuRtUVQwB8QmydX44CnW3nH9qhNMNoaCuXPg5sGaBBQV",
  "key13": "2yhUFe9DqyzKa8LbcSfk43uvMpo9ieMYzqPE9UcPsh4bCQUazwvPkrmvY93ZbaUQNqzRBcEmnYuSehR5MmsSkUtw",
  "key14": "5My2qZLSgaQcDFVBnvykKp3fE3yzdtx6cdpF1cxA7SnmJoxcM11fLtorUsMHkCQ1WSrhrQJg8vhevb7FN3YbhRqZ",
  "key15": "e8MJ6GHjfQZkssodV9MYRUBimasSkRYqzdJszwEtvWrw1arfLW1ysJzQVoTWWNRKt76PPeT41S2kQKTFm4e31s8",
  "key16": "2RNwEStwPKdLTRAib1TpBRqSsVrFYMKvd21tvtmZ62b1z27sPkiyb8pJarjonZ7PoWHdsuf1o2mfR9233jJLJQQb",
  "key17": "7LMkMFXuy7Pq38bWgv8noZkX7vMtj5Y3Vf3xHPN1qffWm1DxedxGTSqLAR4wAg31DiQqiWn4Sk2KDdzk7rmakgU",
  "key18": "2S1HdrjzitABNQa9PWtQPHxLY5SCB9mzbKorPxywnxLaMHjDrkigqRhbzLknU9MuW2BRKU6E1kAPpyCgowBebdEr",
  "key19": "34zH7Hsn22QVw1ifsuEapWR71XZtSkG8yZqEL2CeVTAkU77THqBQY4Rv5KXLcQ3afWEGNkYaixPkD8umsQ2D3RQU",
  "key20": "26f6bTKYSM7zNQSPoEeqM2TX8G65LTyvtoPurrjnsBiZkjbFVeDdyPXfFhoxkDZ6Ta656FDzPzYo47oPjQ1xN2tj",
  "key21": "5fP8eJz3Ek89DjyzqDswQHiBST547seKNyRPWVU8T1EHq1hxB8YszEpVauJUjCDkbQyiwjuCAf9cj7XNysCW9fWq",
  "key22": "2SLSqpHhorqq6pd9wEd7UKKssvpCx22d9HhirufRcUvKLGgZo1xKefZQyuS8W6iyarCVB6bkoXM4zdEcapn5shyf",
  "key23": "5G9rLYSS1fv2kmCLmvsjAUgx9CKBMu7SWbUTeKGbpyfbDaoqHJz74RR9uZVwCsjt5gLvkWEpFYaPRGKi2PaPxUpx",
  "key24": "36m8X74nQiCj6fKYPYkrSMm9fpBgjvVhocRpPG4QMq1uzwAqgmHHeHhB8tiZjikBx5HLZmj7x1JMeZZQCHjDuzVD",
  "key25": "CAXK2qgPU7yJTrQC5WurTVFh7qzJgxiMBpKg6f5TCGrvFzkfdWvPyshbqMZiq4QvNBftiN9EC8dnwwbeXMXigew",
  "key26": "1RRdqeNTgaG8Ao1xxyyvaSZXP1X7mujfL3x2vKmUtJzcWVpSHJ2A2wFVp5unGeq57o4EARmhWwpLKzMfdQy7Ggr",
  "key27": "YqnVxH4tgpcYQoNFM19Gn7EDa1AuX7RBEpQ78UMZuTNKAMbLygQJ9vigR4GGNFxPH9dFoNFtmMdTabxKqCMR4kU",
  "key28": "58NRBrQTjkVfQe7NX9b84siLo88QvBEnokQrYdU89BLd29EEmMLCHB1EgHhQkjsMYvxBPJKuyMu3cVC5gthPYUS9",
  "key29": "3trK6M4nPVtvNF5EwY1S9UtBnnLNXwd92F6FMMuBeyNyR3XtddU6EJRKDP4WBiNABFoBcqsoQpW1Rk2n3KgV7tBm",
  "key30": "2fGQYvjNbnC71NQwAm3BxbZaKF751eqQPXwDjhbUUuoqehZkRPePL1aexFBoJGFEErDvszNpb1p8FuSMHBz3fC2j",
  "key31": "47wkCJ2nyprxb9cB86aJrokrYQQPsEUbq5KWU6P8ys2P7w8iC9zxNUxQ8XMVfH32gZVS7724oBWghz4ujQ171jeR",
  "key32": "521Mx9jn2yfd4eQeYUF7zSVNcFKvmDEjo4AnaV6Z1RoALBM1t6hC9akaYDX4e9KFq6iC1uqQ43BoSx9ExxYFag36",
  "key33": "5BoaqTZnGETEACCnYeQH3paPs2CyaiAGrD8pb7vUUCcAM9qVJ9qyoNCoDppk2D6p98ChqefrmMqGtCzJsEfqWkix",
  "key34": "5TAGV7H4u4ySUUBEsinAUYb854QdAZgAmC4mDemsu9dzTf5EXeWQQqWpKNPyUs4vzxzpptWj3b9wa14NmQKJJtMb",
  "key35": "gfmdhr9JRCympGBfqf9F6dEwSgzqRN59jup38gRXaRr7qFZmpwEX2LuhN8p49fKBrQGkQAFapJWC5t2AtyGpjzq",
  "key36": "g1z8NvEVJSkhKD4bXyv4vSYrqDwBh8iyrsgdicQgizvWqcMRYMQt9Nn6B1azZD4tJP4vRENjnSvyo2oArjtE8Nq",
  "key37": "5LkdmNAgUV6J285ZLFooCAf6jvoG1THwsDxzNHCj3nwRSBXPYHvU8f79oYJk8M1aRrweueCLUwP2FLaMYcBaSsrw",
  "key38": "5zGG79ytMQu3gAsNAxJsZC1P17LcBSprcuWPMEULwNWFB3sD8EkvqxPwPfFAVbq1oT4jTQaXesyHmhhCUPViSrF4",
  "key39": "4861ezNU9KHPx35gEKmxjvvn4ngEL5Tisw6MkQvfqAG2vX2Qij7SuHTefhqmtF9HSVQGnDBMBM3cntDhFvDCJxXD",
  "key40": "65JrsWZeHzbXGMUmqUjaG9LH2KFnsYCVKJ4UtKdMmJL7ZdWN5BTpCxR61rHPoH4TUardYQ81y8b9wHvPL8TWSaPq"
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
