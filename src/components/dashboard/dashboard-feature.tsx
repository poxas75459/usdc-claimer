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
    "7WcZLozoEZRarN5E2nnLk4hp4JDTc1iJERpkRM6VEEqxPFbAKq8PzZs6LBPNUfr8Bw8pCVmmYRhyBh9cNfDjo9k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9ypAiaufCtpFo98GD2sfdK5ERZfeqnP9SZhTQgvNzPDaaKzpCDJzajAWiz6ZK87Gcac3CMknGwgqXjU9oFbjdch",
  "key1": "4wHSksrZxZt23ZKMhP6kHB6UVbQ8K4wrLA68HzTJNiYzfCnGbaw2LKcPX92cpajMHnfoWNSmquVKunmyNdMyrY9S",
  "key2": "zbHPgx2TQEdiRr82BYrdfmL6HU62R4z11xTwZcSQDod8Qao97rEC5RCHfd9SPoA3KZ4HFjx93iWaKyJ1HZmcARf",
  "key3": "m3JiT9Q9SZxJSdv9arcNVmAN3ZmGBcKVVVsuo7zupouCcrkT8mhuDf3F7f1ekYwdW3gXJKsSaPVVn4srFVN8KHn",
  "key4": "5NDHF84m8r3S81N9B9gkWsca2BHRGy7w39vR1dGAmpvvvAoe1gMaj1y5R6NvtCerB11zS5gM2M9djvLHjMV6r5bd",
  "key5": "CJ94g5z1nWfi8s6Z153J27bKYnRHwezS6ju8gx4ropm597EuUCs4NidJgHz3KDbUVwsRVhkmYXpS2vp7cWWnU5j",
  "key6": "1EVCgGsnLxn4YwZqPux2zXYAgvdDP8Evph4VhbfcmRbi5Fy6x9yRzyGErkEmArj2YDYiCvwHaWRzAws2RPB8YS6",
  "key7": "3XwrK1ryko3BwzMruaTWqmn8TFRxxR37ke5fiVbmNTzZWiJHqwcmCV9GgpLLLWf2G5PkaiRqvQMTXpy67QnHn6ax",
  "key8": "mcB8LPJMSGt3hBhe78jp7cvTducrBjUUwwTe4LGiJ8CNqPLpVonuFSJybd7ddkbt7r7kpZuWGGS2E2uXPqtR2tV",
  "key9": "69royJAu96cn4JajCsP3SxB3UvbVby3GCAowtSieipb3kBvyNfyfVtgRhK7KHvTfe3BAgfV7stPQsfbECPjjf6U",
  "key10": "5b7Rh7NQz8EkVwKKqBD9xEek3LsXo1svSxJ3YBEfhHip7mST4tcVC8tYvbeWSDUj41mNcz98B1rTQCBeUwShnDCB",
  "key11": "47vUZtqyapXqPAHpUNujes1CJ1hTJegDw633C6RCoJ8V548AGpT879RdoEU4b99cxyJ3jjziwrEa56nfV1vTnro9",
  "key12": "rph5yyiE4oABXhyQUNQjG1vDazoWbvi18aVLotCF7Wqj8sgWKAx6tGFWQeonCd6oMKD3dkdMSdPjYLC3hjQ8huB",
  "key13": "RH9Bj5cHsQ8eZvWuvCEtL6R5ufvyegdRRhVCE8zZEiW3hTeKy71P2TvpwT8G81rVeKCbSVmurg943wEdFS1u8Dd",
  "key14": "jZHXy8pqcuzoLrpSsrnYSmJP2tqmZKL54Z6Uvk3jfyXDxhsVkjzk8ybd5DkNejm6hhbqi9nAAwXrZoDNfvr4hE8",
  "key15": "5cu6FYAtpQyRnP661R74dspFLiunmHBYtviqw8CYuf1XHNXDEWTWSPfDJXH2JDn1fPR5yHwyHqe8vuCMNL5qocWh",
  "key16": "mq1wLCEiPnXLCoV6ozHHq2tMYeqz8FNE2tLJ7GyEcVEFziEKG1Gdzx1hETQEm1RwRPsnEXkojdxyH1YPbdmevFm",
  "key17": "59gcU8rKCFYsswaag9cpNec2sYXj8DgjuHy8U3eYw5bYFVi1mTtz42N1rijUBvb85ned2cGPmVyyCGWJQ32Fi9W5",
  "key18": "2dhPXUMBUStZk4cuX3jk8H5ALHYXyn9pZsS77X6EQnLDstSkAWXQzrFaE3sG1Xi9mjYngARBUv69MN821FYPd3Rg",
  "key19": "61oRsNEwXjS51LepWadN3GspLrTzdSaE6bpzhZySGpe8VQhbUVCwGARWs7vjqjG6wg3VbkCTAxU4XwFoUEbpMyLi",
  "key20": "2TWqMUbpap5nT236VsSqCqFi2cvahNnhwbcnzfYmEEA2iU8HGxMXStKSfF3YbMr3aqXp7GV3KMB2K2jHd2PL8DeU",
  "key21": "2aRMrxKPjqoSM1ur3RuZfanrKGBrkCSByoJxJJam2Vv9fJTuiFBVzWLcDtsu5ym3F6PwjNjah8ERubCvqwDkLy2d",
  "key22": "4H9djf8ZZTwzwaU7ft6Fp9yiT1LtTZSxNgwMmhg3S6FZTNyEu3uyQHmpykUtvdUCuNHyg2hj3rMpXrPnaz56JcSp",
  "key23": "4i9MM9pym4yjL5gALhKBr6HmhSfDcWDTTEcNPEMWjKTAvKW1wGC2YTudvwtvkmfDva6M9bkqCiwffebaeXpSn9tA",
  "key24": "54aJxXxadvgRgvrsAhaZAS9x253nzNQiRppoxNEukhjqfq5HLoshKhi6bhxjpnU3KqxnD9QNhoFGw1uTkCreeZ1q",
  "key25": "2CVazH4yYiAa44t9dtG9jPu2wgjvhXKTXDXDGsmU6kF66S3kjcw12z916hyCubaFrqF53mQytVtkfQBqYSU1sKRv",
  "key26": "2MMGf46g9iSGedFgKio3C1efC1Qzv6VTnNJ8Nc8ffrZh3nC43beti4mGfhabcvesAasYcRTky2gj9zj1ivNJRktN",
  "key27": "355S6sMdoCTR5XWRVxp6TZ99SmMneNYBDT8CmWxd7xzHew5NnuUUVgZZS4ijLse45ZKjkoqYVckmv3L2rMxE45yM",
  "key28": "WWNZjwMNvY7A6T52uniyy7Gx3dE8EyrQ1fqSQ7kajmumSx2SmqnGmLFmQViGZiVMoRKX9copNGWiAgAxDeUW6tq",
  "key29": "1nNu9ogirzJsWb1drRjTXGCwGccnbkEBj8n3NMrH2FZmHVJnnhyVNK1okhsCCTwhq9yxaScA6dCZERszr8NzwD",
  "key30": "N7wVvhT8caBni8YnsMJjsZoF9TquPZeHAjCnAvWmMr8rkHmTNeNM6Y3ASjio4aeYhsFh4hKpnfubDnRm1UFpZ2U",
  "key31": "3hqgmpdjkB8qXuuVchp1LsW2o5emyDRxLPw7rkehbePyBJAiSaQAMW33oGXPrJkNbyQM67AiUzt7yeYGihFuFdz6",
  "key32": "3tnbJrZaurMuzLKjVsPxjpZJvtpXJxo333mCTawaa4tTKG98fz35P3zDi57hnn5YVaaTqvED7mBUuwsywXsgrhMR"
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
