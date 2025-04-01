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
    "2tVBpGF1eNDLb5924agn2SXDnuszak1UAg77aoZEzNCoNDC2ycw7FU4MmyJsNBRowH3abVPW5FRJxbPbAG8J5dvN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b48C7J8kUkhvdXcg16vXvnzxZKhuu68snv7QvwU2GzFoTUSuVmL9wnMQUL2g1zxkeytYyC85cCeAT5YNnkbmmmQ",
  "key1": "3srdrsCTx17wEVHZhypSqhXeLs5gBRw9qiMBGchDvj9fBj7xjtc3sdxhTSv4EjJUETmr36RHSYj4JyCtgVu1sTb",
  "key2": "Zpi2SQNoeTApkG1ApTHYumfwaGwHr9TbvVHwYnKz7meycME24RWJyrwWPyXB2TgnpwXaeeiZ5xAKQBtuQwD1ifD",
  "key3": "2a3ZFmPd6FffADNV4HxASGQ1om63sZif8voSVKgF59XRHbXuLWRidT9FwNSki6cGvCFuqg7VGF38KqTR1zakFrRN",
  "key4": "2HSjnZeDUnJQuDGUF8hrLiLbYn5yHwZ5JAyggThaSe4Rm2oNJw7RPYAmZQsVhw4mhkVwDXcLS7peHQLMbqpe7XEM",
  "key5": "4xR7Y5QMvavVy2RTc9SnYrnoKqvk4PLPSVuHCZr3Zz7k2bREm1Lx6B4Mf3F8eKh2essV7GTmwSDUmk7ub4TweFGx",
  "key6": "3JCLBrz3fCxmQ6sN3Ttqr14SYVX1DEpPaJarzPzsuzyJqRGz5ayfppmp4L5B2EyDaXaYHWF6MF1K4wVJ5cQ8DAYg",
  "key7": "5gnYTZAZhLMiT6D6op8bmKNZQEwW5DCQVvUhiYnc3J8Jmj4qh2LGtFkyD9PinSPxMFq9LDQ6ZyQusTfhV8EWR2jd",
  "key8": "4PnbCDo6jBTtTrKyjdX2Aipg55VDhSxaruqqMFfRQR7jWWYvJKFfo7jCMdCDs3mYPMCth7jQNGitg6zBUrTcKhA7",
  "key9": "26jeEyVnZdpd4R3awRitbq5DR3vcdWURXyah9j5YxFqFmNeWgiUJjx494gT3FEhwSfevCBTWeiv1dxv6oYkjvh1M",
  "key10": "3YYcchSGrXhcvPa8LpcVwrSmpfceYS8DJfygLvZZf7r7c6pEeVAW4UKDCSwkzN6csEL17ZatU49cxbdvuGqfbVKB",
  "key11": "2xECCoGoCRrUTxDARt21VaZK24pksy1sK2akYxTitvHXeuoZhotESG2M4KVeK9JHVjr3ssxaB7fqJsKS5Cb6efnY",
  "key12": "A8DJBqMpkPvUVtcjopJKZGnkpR34qCsKGKD7bhePhfmk1EcRT5rnBiF5yDAz1zygG7YEUwdbgDGm6dGSntm7RDs",
  "key13": "5x1hh4xXJPcKv5R3hQsRdGq7DEkJU2gAiXP4sR3ATv1mdBNp8F7xjya5x9xk92KZJ8gqFJwbHA1Z6rtThPRKyDz",
  "key14": "WRdX2SGWZCKdF4zB19rAbc7vdBhjPEKZTtpzw5763yDEFiWkTLXwVeqpEz7aa1q8ukmCZyBLcVjJNH7mWaKWstt",
  "key15": "28jhG2MNWYUSC6XbceYBeevoqYPC54aHC55L17BzvY6W3sjmagabAG5YzExguqpGTFePHwRAu6tqo2NEFpZfRhS5",
  "key16": "3QJYHDU3PfnxzyQDXAN3m9cqqcmCtqEdofPJFMoDG7SxNuhyMneADMRrjDBRy2EayvHddFFcQdLnGVy9qkuoUyej",
  "key17": "663rBJv7pXZNUGYANh3Bya4vtvijv7qf2WmeS2UcppZX9hVTtKXJqrxemgnTQBmpY2PwDh1Haa7nQ2J2V2ikTcn3",
  "key18": "5sgHijENHN2jp8UjXHnu8cEvSummwQVjrp4qjtBA7WGu6CxCjmNyx2BvvZMUN9TiiECkzvi7eUeQMwrykjVmZrXN",
  "key19": "5frQhHAqNxCbS6XQxvbozEfXci8VrQxTyHAzeqVJ5nu748u1Bcu2v1xrrcxCdAf6YsAun4yRQkupaGv3DFLEMFv7",
  "key20": "acTGygBx2A7ZhvcQhRAXtXbz1KhrQiDDGx1FGU9bNcs7ZJD1HRg9vKAENxducor4saayprf2U8iwjzxNgVsnvAR",
  "key21": "3fkkiZWDY8hLAvHUrZJZdW3YY7gaHa2bZA1iQ3DDKJXsjRu9fqedz2BsxJt5xU84ade5Bcdesxt3mD8efQidHc8x",
  "key22": "2AdK1JmNV4xE7YzikCn9u5t7ZQytTd76sYqutYL6g9Y4vUAexFV6Zpa1H83mR2ZaC4JPeJef769mqTZhFqa4eqF1",
  "key23": "7N9m8Pf6L6UjjuRut4epX3bbtB2K99Mhp1pRndni3Xn4qoS3amRWB1a3tvsigJynoprSa7wS9W2KLKnvA9z7k15",
  "key24": "4ZvoXtUE1TkWh68jLXy567TfRSZpgjzn9tF51brN91RHB24yBookcLtZEbPV3GBue5zAkpWck3NKp9EiZzduE2t9",
  "key25": "oFU1Dymq5P9Yh5vDQUMBQsNyfujmnEHxa9eSmcHsjT93maFszvunbScB47gHrieqv8kvFSHtUkRtpv9ESTzXiNs",
  "key26": "2srJCqxD72gvvSK9mXdGhX14SYpycDZKpYsHUYCcKzDfcpZjozeH3LYRdS97XZGA7H25U7boLsozsS3F49BKUWk3",
  "key27": "3QSUDg9sqWwu8C5q6hvz7fc8giX3qhe5ixy1hPWgSmBNeoVW3xFUB3RASRYc5aqbDXbeAiEntYnZ6o1NMUoqinuD",
  "key28": "34J3TwJATwtCmXLP8jQvjXtyzYAvC2YBSr4tn8T7AoxHH8c5XrqcvhdmAnmdd6QhRVsPcB8eHWYMQpXkhSohWEja",
  "key29": "2xh3mYoTFzdCmiFjyFKaB1QtTJAiU22KnBkuVemdijDVi1PVPMnJ88i1WUaf3pG9DjH1czrmuM9m9EpQdGHoUzTP",
  "key30": "DQLMzWvdTWVeFd7ewC5nL1YJ65EWvvXFqfcnXWSsuCHGwt7gaDtYbMBWLhYwGUhRRbs9MhEuDqhqSkR1FXrnJjJ",
  "key31": "5SFALxNhpy8atEA8TeUSKvHGLQiHzMqA8NK6mjpPmQfbH42T4gV3D35joDz58UM9p6Mj2htL36Y2i62xVrLHAwUR",
  "key32": "2i3g7Znv5aqoWnUEok1TrUWiuEdgRvnEcP2dSz8kwv39eYNPUGtsaD7r288ujkn5B1ezYtJ5q3Xett6p1zdNbUwA",
  "key33": "3BKZujFeeKwAuLxSJEs1s8igTXde44U66VsoKYDBrUshbcBdkQLuxwogo45AjeW67BunJPvKvxFrjTy7WvjgyYNG",
  "key34": "4GSzFShbR6RxUoMgXdsZyMYjNfmconC5uY6PqpF5YMY65n4NE5SQD3T7ksxZYyzmQJ3pJcw6wMcq67eGSM57jvNp",
  "key35": "bJCSTXrUQWeGGtDKCaSE2dtDhizXz31NZbEyQpYR39pFNcmxdhf4j4XARyqSB3ybLUdsvzs1Mp7r9KnKbo7onmc",
  "key36": "PmzN3rxHHNKpS4NAeFJik2c3cHEjkhkgmMb4rfcz4VZPPPX8NhjjMXDFD42prJHEkowUTnHo7zByjKxiFu6GfNM",
  "key37": "SSPGWeN4xEyWPr5TzayJSUQzwVvUwjyMfDXQHRPs8kHgRXdb43a9B8Msxof5gHBvXsMnG54hvnrWSzPsDQjKrGM",
  "key38": "4HxucWQPcJiLdEb6MNtdLG4g9qV5PZ7hCSBxTZFQgZdkjrvMAfjtmP4a6QXd7RzGJWuePN3SmHG1MUxKucYAzxdq",
  "key39": "dbEASu3pMcPJrqNk2z2Byn8pJjHbHSHWxKATXf8HDuBHwBwLUbp9eW8wq9KfXcoiS1LDvc6VusfuCk1N7iQkyCf",
  "key40": "4paLLAVvVDfEUethk83ipKDFrfz5xnLZKUpC4D6PityeHNiwhdG6L4Wq5aGmjnbU5wZWETi68KheQZbwYYT2xmoW",
  "key41": "2bTqzmxk3Q5T4qeX5bvNdzrgQsgkCNfy3Lpriu18phh4o11r1nRL1hYE22t2XSzTJuqizbm9b2NunQoRWqcxDXg9"
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
