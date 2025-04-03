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
    "3PxNTPjn4EfabcweAh5LfjxAsforFt7RPzS5iP9JpoXdKmDaGm5VPfvbxbHH8pmHqAVU2syTUasamB7hfyZWN9CE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eXJqFEMHQnj4NuAVZp8NoZSYZUCs3DfmehqeD4ZgPCprkbhGwYgVMdik7ayvvWiRzutpFc4kPD6Lqp1BuYqELYy",
  "key1": "3jabUAQ1HmtRtzruRYMaT7PsJXcXN1TtA7RxUagpXcVcn9m5BWXTohivjxxB4hKd5p11Wj78fWS2Xha24UPcQGYY",
  "key2": "6475RLMSCCKHiYm8tFMvTUx3NY51R1oCs3DQkmtQNorG3tQAjbWoNhtw4YCaaDL5cVBeu9Co3gtBXpxm1tokXrV3",
  "key3": "3n15UL7q7BmELQvuxz8ZF3snpbathQZtcefiFt5VTzafjxrZSigKe1sGiqj2ze1U9MnV1AeoM1UzM5WU8kaKJkFi",
  "key4": "2WFmjbiyEBGuTQzM1FSKr1u1tz6mijixzT5AVdQPtDsqnUrcyu6NuV5rKjRTqr9V7FbaUXq9SkDMgAE2PYT7z3TZ",
  "key5": "3XkSngWFsKgNYxwy2hm8DyDnsz6CqLyCQYyBNbKvYaQfLJzMWEQdrEzn2jnU358NhCm3E67fzMfJePJGmHCApKye",
  "key6": "4UPBwzcyqP7ugrHZDHC7zn6dtVd5zazHmtMzCtfxwvF3DN22J61D2Yzmk6zvb4SeADjSN22TdBmo6uZA3ytw9dZX",
  "key7": "5dsmQ5h7MXdF42NmP3DxL7tdE7SbwKwVJ2vN4hCfqMfN732eSJ41UZKBepsxm5KaNutEhUDYpB8NVBDrQjdCTeT1",
  "key8": "C9HRoHAYCPdEVNEv7Hfb99fPjy96x4RdoUDpuzrbr8QrppSRaSbPxx7cWBX9QbM4wL2oEQ6ucggJVWqAWC3Q1PZ",
  "key9": "cZQKnoXRXv4d9Q6MW7ARB9MNWBSPhDFJEEzQzsbqDp93AP19wwCNy9aRjLuiYsEds4w51TgkC6kWUyvtoUPMZNk",
  "key10": "5RS2biqxfK1XnCstnhnX2sTCENAzxE6SANwiFcXN19bCUzs9hPnUwaJEESQrLWkY8obsJqtbRxzBCSQMyAwaFPvB",
  "key11": "5ZR9xpdDMzSSozpgm39QCmXkw22Kffr7ZtvERBiPkyNDCQzV7Xtb5ZZTtJjpCtdvqpfy3RLbWPfWebmZJ2Y7W7dE",
  "key12": "5xjyPUwNK1Fy7rDbx2NfuvNr1AHuBg3R6pm8Fv5vm3kU6KkP1yRcy2WUy1Yqf9YxAvGkQCMV5rVZQe5PQPPp3sc5",
  "key13": "3DNq5AkL24EREf9fihUsvR1re9RWC8pR1yVo6YhH5Exgo8jEQ4FyS6sWyQApDcTsKZLcbBLAoNTe8Zx5kNXHu3U5",
  "key14": "4kEMMVHCy4dg3wPKVrRGefcp1ZbM7L4CAzoosU4ZdN3QWA1tb9MxDWzkKw1wFT23sGwnHY8URUGW1j5Gfj9N7BMe",
  "key15": "5sx8ZpknooAWEPnK6NBfYqX5jZQ3Fmw4byzVx4FykQ6jzfcGSW9gJ88Lk9XZ4rNAyn9voFwnZEorhtueWXc2m1UR",
  "key16": "5kZ27TwAmJTBbv5XE65qyUmSUvbJr2FtUTFKHxYDf5smWQVGLxxVi757xB3APVmATVmkZFCNf4MCYrqujV4gPE5W",
  "key17": "2gtqp1VZUVhnJhf8yFLei5GhuGv78eFghQei7WfnFYXYxWjeAarqJUzfktjL3MJLGHc7vK6Qmp4iRbY3cmuBFrdB",
  "key18": "53k4j9cRzyDHbSuevBERcWL8YWJQqnGTFLcoAihaEYB89GVLBVdxuNSTryron7z5xiwxfTP7SS817LxL44FYiHXq",
  "key19": "AXanZpm5DwbCm7N3w1hVDoxQgumdzcxQUsx7z6PB36b9gAz1hhXbLT1Xo535MtS6S3DEKccqWfExZUUfwn9QZ4k",
  "key20": "Dfn2pYdD77cnK28UmrcDKmgfZ2zTPwKCV5j3PdXCqZZJja1stUuAaqqCeaSjsaYG8jJqzcVWvM636HyAw4BgmiS",
  "key21": "3JN7LeDC1ki6NQmX8jtYb3TZ1LSvwk7ALBmDk77wb2gnUeNnvxm4XBccNhGDwPwygdAbhioVuRT5H86e6nrhw7ZF",
  "key22": "4MQm4RJ72DvcF6btDnRxdLwbHCFybX5FnrcKdKdtbMDEcMe9g2fNftZPBgsrkQjkrJYy6EmEXcCR1r7Mi5hP5mJZ",
  "key23": "b1dYcQZzoZc1TYxPD2cz1kxvG96DGmXTuYdLEG3f73VBdQXF5LqeWdjacu33k85rqpP3fuAK6C5phim1f1f5wjg",
  "key24": "WJJE9Du6mDJJNyG3Wfn25t8qbrrpa4v3uu7Y78qG28N8NGxbPV6YAKwKpmA5c7vbPSSocVTKjmaj8Afw6QtvZ1J",
  "key25": "4cfD4abMdvdSRoK4LaanjBAoFu48jUDUv8U75BfDmFHzyzM3X4Vx5guNoMxYhjAy1DhiBXunpX726h7Enz5LYwiw",
  "key26": "2iE5JWPzs6QNNqAmaATxVwiz1Vskfgstgv9GumqvEMLVZoWri2FdYS8Mv8tJVz6fiqza8wAQiDVEvzyQRuSAgwtd",
  "key27": "Z2b1tay5QMJJup3Niuvfq89z5HnDCbNXUvDqx6ZXzDBwWm2ovvEm6pBFweAx9zoBCbeY1voTr6V1owgwrkjXSM9",
  "key28": "3xYAmirMfXgY9r5qk8r1fDx7VDUsdgvkDofMcBNd6Wcer9aaBUewGeDRZy4NyJgyx6Adp8L2rFGckmGthHWeh9Y4",
  "key29": "4iAKMdpsN8ph99VkEFbpnEPvXwK87hjYYyoKfAgHey33u9Z98dWMNdBXQx2pUVFZt93za5yeTTeP7vkejkxBeVWF",
  "key30": "C4tHmmdySvWw758p2xDiLLNm1nKybBH9J6LieGDnDB2N3DrCQwwDeDmSV1n1A66jpHq8mgbQN7uPjddf8HWeG5V",
  "key31": "2GZL1hRTFpJCUE3DMXXnyYUHYAEyy3VhvaRg39YiSjGGuZZQpB5VWWE7U5uv1HXqVE35ZR98XYonVRLda7YboUuT",
  "key32": "5ANedFcHYKDpjucQPajcKaEeaHcmEBZ455TPG5bf77QY7NDGczsK9iMbbgpCXBWzBiRMMWMh52vyNYzQN3RMKDTi",
  "key33": "3W1TwztAeFGkSJbEogQQU6uSaQjbQxfy3NSaA6GXeE4HYhRofxeQEu1M7nzs3YCvfWDr9rBrqGDiEXMmkH37yctp",
  "key34": "5SJNNWLk3RTSpZ7Tfcxt9Ttc7EkZUxP5atDTAM4QmZH9v8eUgyG21gKqSWd5x63AhdjCBfew5kXiFwx3aft3TJUw",
  "key35": "5wQunCm8TUDC1BV7cKPVzCoeH2nSyv5tovqno7RcSfCBb2VKEQ8B3GiMf6mMmwremDRRqZwYKA1NvKt552iY47K5"
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
