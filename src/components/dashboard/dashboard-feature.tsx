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
    "5ULnyuCQUuHG3etaMa9qEwM35CV6fAt1KWda4ec9jA38KYDkuFqhEqybkvGmnVe1pJZMPDiWzaSVp4cqw3D8dcH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "96EikQZWpAjGanuBE9YYxeX1tcdbFvbYa9qbBKHbLnNezKhXv1AGauQecDBM3eakkNVdGzg4xbC4Hjt1e2YujcM",
  "key1": "2NHTNf5muRmExTFwnQRSteuHGwUQBR2N2D1wtpWn5f6oJyGeLbNLcvmMvXWqw7f5ddL1c76v2zJ9KtvXB7nYShRK",
  "key2": "5gBd4HdjbJXmsLYpsQof9iLFtkUUGnY9riUckJxMPNtfu7Zip2dF8JYWmTtmgLMExNoYgpV3SRZgshVPcRbThQhS",
  "key3": "2Sd4ojyKHYeGnkndhNMBLYDopvCTnjHhDj38h4WMxScxs6EsEgJA1qFuLzWDjEoophBZT67rENFgzJc8DPdyCRTp",
  "key4": "5c343R7LvVrRvJudHq43w79g1XWWycvxth9dgGbwNGMYBRLuTJFvWw53PGLR5JqYD7u1LJCrkhrCEJz4RadD3Ris",
  "key5": "4Gcq5SvNsBC4CMhFYir3ZX9yZxYrTJLjuCgGrYrGetbEX8VenmVirjhj1eLXCq9RLJRddAJs93RejgLKJYN6iwyG",
  "key6": "2KWg7Hc6Jxrra6WVdXDPEcLMugZVB5zPWFdbcS7bCEYvrF2FK5kkY5uA282ujRmdq8UC7v4iDMXXNbeapZndmQXd",
  "key7": "3AEhKQMyuPV1YLtyTBU5UXeerUEoFy9jY3DNWY14k9Xp325zWfgbj6fLPdX1aL9zY5m6NLfXz4Pnikvitr3MiuR7",
  "key8": "5NAtfyEzvKL8vjH3Lgwu6m46Xrjr9rNZn5RgaQdRb222t2S3VtM5DpUN3BhWpjno7EEUfuN1dfUzzHe8cRpy2hTm",
  "key9": "5veDLVL8MnEi8aC8qgpGEEsHFtjT6yh3FZoYURzHkye2zxobrciWF3FLttE5fjbkHxz9PCHzCyasPzAAeArLu2Da",
  "key10": "2wt4AL74jJdLXxP6Hwsr9k7MiTP7Tx6PUi7Uutj1qtiJkaVfSUr9o5qwZCknNqHkkwh64aTYfsobsFEHdHu5jTAj",
  "key11": "4tf2afpnonZCY1exnWJG9CTWABKEPnFmD25fULM423GuHefU2hKHoVRAh7Hz6uxECSuA46xcJ9Nj7ywcuGhWTTgf",
  "key12": "29fmxuYBRyFA3BGmTbFuTMHK5sCbXaYSzdDLd7iaLcZUHJsEFEdCdLLm9xZn4DRXd7ryqGwWMnMR3GS9hNj4NHDV",
  "key13": "4BW4XyaHRYoBDjBQTA325tf5Qpb65kZ1bVkieA6KXnmsGFFVHmB8yYQnnK5y6Xir2ScgAnkEWiP1UQ36eburp4Zm",
  "key14": "apZxvzS8MNvrCQiSwK4m9XtRiiLUh1aBVZEq7LBvttnA3KtBWtEBYTM9tYDvRoXVAc9L8tSCEu9HcGvvDMXRGTo",
  "key15": "KJhS2x8YvrcReCKmXgLWdbLkZW1twKjkEKTd8h9ojvH9Q4rwjNXqffgmhk5w71APpD5THzQwaBbUvfpT68g5aGy",
  "key16": "3pL5T6wSmkT8So9SsB5nvb7rZRRHRWpbX5irF7mPPsGky5p6k2sV4bXhNBS71vksiR1EWDh46jWj7kyeNoPXQtUq",
  "key17": "3cddScVtKwo27YAJyr57YJj2HK3Jb5pz59odCUDkdEde4fTpa8V8GDjkFqYsnNvd1QQ9jueNhDSamzfWpD6T7MR4",
  "key18": "3EZEbJw6ye2g5C4Yf2wonbu19ohawRH2LejHwredPFb3NmF9VrcufKRNA75PvYyLtv5ZfUbfVupNt5M5k2tbntMy",
  "key19": "5pWxT7eh6i7frVWphTJk6odBuA2bZWJXwwdzMYjHPtj6Q3tXNGx24ZC9tngT1s2AC2XMUuZrggSDM11pPqZgNMGA",
  "key20": "2kaqFy9mLaKzYGSuDsnsTRFAPkC9TCT64PbsN7HiXYoJvLmUZkUTEWDm41NMFtM14UwtE6jcwq24E5s2CdDyGt28",
  "key21": "4M6q2LwvcKdjv71U6uhN1C4ZgBPA5JgNurXAAfM4o6kzjH6eHU5DvAbBVmKhi3zKfs6dCa5obCVV4gumNsfrVTAi",
  "key22": "3z58z53vem7VPJdcxzszmZ8aJGJUQyU6pjZk9xhVMbBRBKJQHmBEbyaCrhiK2TePixLy9j9q9FA3ECJpkpghRsso",
  "key23": "37NpTMcNhaXuLVH6Q4MvDfumeVNHbuiPVZbvSrVxMdNq2pfTojBidbhQxK2buwQpB21xM4MNoNFpZUJ6fh66bgZ4",
  "key24": "4orzNYJgjBPkTfiwzrQr7CAqFGinxd6oVZBYHSP998GjNGdoVXBHFuXkaxwPYzSVRXrRALS2dHPmyyd3tUFzsCfU",
  "key25": "4RdASEi1aYFPR2LUhWMbXtnxaTKybzQLdKaKTnGnovrBVJva4GqesDegYrDw23EBWByNma68GYgk8eNQobSWx35A",
  "key26": "44SBfBtwnbL6WtSvhvfAUXHjJjZqDcyncwpQLbec88hSj7C1AS1Qmp2JnMD1jpBz23YmbmpQfEFuD7EGbSVrqrsS",
  "key27": "dxWE38EEBRktFtn34PSj26irBrc4Y1tw2AhgBKTUggh2iYCgWhsdh1xyF4ME4j7SanSLHNPUMLxcL1uAuY7m9WK",
  "key28": "GU9z1w1dxWc8KBqxZP7VcxUCXw7JuRoreCUFaJVrFpcQUi8aHqyMidortvVwdKXwifPxacCAc2sXkUALCC2UyFX",
  "key29": "2wzs6BNZBn7FVU717A6u6oREs5Vuzk9SAsXcp82FGgbnfztoADTXsC4UqoX5mY6pT5M9DMqsZD6hq98vYfTG3vkj",
  "key30": "3ZuwjqEoPStfNkdyBxz1bwybi7x5PM7XtZmLARz6bNUeLfBUyLcFTC224pZ4WkWLff9hZ46FsKCQ1jfuApoyAwc8",
  "key31": "3XeHQ9UbLSC2kwXr3dp4MCGHk7J1ZiSLdepfqsdRSfaXc8tyPVzaHxZh2gTkknCfRLuExpdkzsMVXi1UjVbeog5e",
  "key32": "5bvj2Ysg5sevZ9qosKH17DFSPyAusQU6Z7svAR2HyTxVhc6WMeLKBFVeJy2m6gSfdnTi1dTpCxPCgnfoKdeT8Foa",
  "key33": "42h2dWjSzWKfTMYwwZu4aQ1Hx4zJH12ygnaTwKxLZJXCUayZ1KKcPWT9PJmgPVS6ut4BeFQ8BYjdGPgakPg7g4dr",
  "key34": "5FawaFSiezCkjURap5BvZyL6G3EPG3LoPBut7CkESFWroRPPHTsqpUGHhYVfmTYcnsUBJuKT6xjob9nqisS9NnKV",
  "key35": "2Wj9NRbDC52NYo2YsaYrpWJUnQR35FBvkHwxkE6UwujssF3z3PhqmDLgt5XmUurfhNeLcvcyf2StwLoekutRWQnC",
  "key36": "27hxuTCSRogZeVytL8xTBMDUhbvWYzPMUAHfsb998aT5KKiV6BTZkD3qj2ThuDdEnMM15Wt1DTAZYyBtFeu3wCt9",
  "key37": "2MLnTX1wxjtSV4nmrZ5WVYbuSTk9YChxjjefRgke7F1wDKsvRZkohmpVnUgYHL8BivMgFNWeA685sSsAZbr5cxfN"
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
