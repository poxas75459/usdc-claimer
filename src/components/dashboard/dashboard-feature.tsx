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
    "cB8tRxN6bdXj9PJKZo1cQvcB3tULCp4S8RHaK2Q25fme2Eyh3SwKj3PwC5TJ4yxg2CWJLLg7tjebK76AB2q3Qro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oDkBgG4RyuwmVLYc7ZfenxyrvLn52C8Y8ozXrSn4gEN4GhPGrwzYwc8LiiTAMuNpbxGbw6BSfevhrmyAt8uWws7",
  "key1": "5Mp7UwftYydD89D1TjGBHDfpjCF2EnGSLrQpFxMMfG9ctXJC8uN8qdxmnhQ2uesWBi9wmyJNfdFpr9scf11QxEYZ",
  "key2": "5QHSegFPto71EpotuEdsJsSuQ7QozUba6RbmuHyxjpTtYD16pjBQ1AT61tgPbkf1JTvQdQrWWYpMkT8hbMeqTDY5",
  "key3": "5AbkEynSEiesEMYYVs1iAtiJRcRUTcWtT843vR5RJ7eqKmVy5ojNYZiSwJmbfCytv8qfM5cs3nPWWMjpiFf73CMR",
  "key4": "3qAL7i8igHS9FyGfhrLfvx21q6koCoEcLhf94qznzQmyhrvptrrbPmcVhsa4zDimZuR5h8j6cUKbdETWS6bsAHvW",
  "key5": "2bQGs2m8ypKt3w3QNvqU4urwKQCAVrr7HswAFyUAKMALjPGQf12DGZpZ8atjHr8ZstyfrvsrmkBUyeknobB15egn",
  "key6": "3DWfdt5nuPCP5qQHi98uLWu9P18zoiLaPHKHYSjBoW5zXmu91apNahKA16XNcyAiW6FTpFBEHG7b1zr1DJu7QUmX",
  "key7": "3kq4f3sAn5rf3fKyuZ7E1bYrXxh8WQGRpWpg4H3aCbdcoVq8Go7SxSafmkeeUNbKvj3bekrHQHKuqEWBpQvQGxub",
  "key8": "E7PNW1qvt5D1VW3Xhh9P9GGCJR91VMNbbPsqtf6vzAkeTG8cyM3oeS1mGa2UyLNdQnHT5AGRi7spxduosauMdND",
  "key9": "8G49xsFxBybd3s3Kj7n1x8XzKaMcmLFwgvF5ubLCiYgiqXkMM8wXNt3CFD3LJBcpbBdQVj7CdgK64u9vzac8Wqs",
  "key10": "5wuYSJgFJFn77kSMDvweqofTCd5Uf5RR5DohY4LA8KEKwFWSnK5e7gtXGbFk26iCzf5JAhGH5hujaGc33HVeBVrv",
  "key11": "4T5pSc3tY9HQS1rdfYrPsCRpPE4PxH8J2NVQpE33YxVoeVseYtavRivgMhNZbEbJwrJxuyDB7UVanMQoHPj8WZ5Q",
  "key12": "4CbnkvCJutDW5AUXy3QpinRm1NDVQs7JrxAJvggm97Y85LmuD5gE4ViFxFGXcd28WZ1RWGnbm3xFq5xRgNNw5KYL",
  "key13": "27pW16bFZdTHHGJ7DVVg81P64CdNxrSvFYQnfnoMmeJnYUw7XvBufAV1KAcTsyW8of7vpQdtUxbdDmwrp9WhaTvJ",
  "key14": "32U5Lu1QgqmgEvE7esBovj3BWBheXKSwggtfCrGNifgkj73EpESV9bE5g9ekN4czhqnUe6kJydzuLLXC2iC1EgLC",
  "key15": "2U6z3eB1fmCX2rE1HJ26sH9pV3LYNvjVJsJBsJ5LvuKT5aFb22ofP5Rf3gb1nHqsNV1KFdhfJEZhhDz1gJAQZ4T5",
  "key16": "24YiRNavuuyxPL92iZ2SHddkRuZ5UaRAgWhTVxgYE68Wwb8EqzA74ZqCr4o6GaCUvs4VTDvdW3xgXrG6v2BTKTGX",
  "key17": "3rgLQR6dqGMtaTtzciF61kBe6q71BnUbPcYi9A6dvG4AtsS51ZajidJZP9js1tgF4bUU3BrVXswwvfHNKzNDm456",
  "key18": "5YgrGxXU667xAqoM9f7nmmEGvruYP9qb4UyFYGEfHdZPenSdzitQYxMXdyZP8qnFTnS2L5wP48HcKTEFwLGSPs38",
  "key19": "5HpPVeoBKmWjTWXDujhECVrxMUyM8pVK6FonTdkHLyKqoCGHNCrJ9EBxGNZfusjf83NUtCtNhGUTb5dimryJvNkV",
  "key20": "arrSiPNUFNV8uM8TnSSfGzqmEyHymYm9LzKEuF5yUdCqrxxeSrE9EtUata9bGc4RpnNCostdDyWXGg4asKFv8Ty",
  "key21": "2Rps7WVp4rocqp3zWrddbycVbbUjiXxqmHzg2XTrtgssM9t7g9KBxSPBKyTNU38VDKrD1NmHAphGjH8wVaQ9SrvQ",
  "key22": "C991xK6wvnaWSEwz6DWG3ELPVDXmTakwSDr7373rYfdpZzmKHahwaqBXbLPeF6GKrGuj96958yQF4VmJ6Sm2RKx",
  "key23": "4CD7ZKnbY3hAEiDtysnxd8y9icyCeodunbk91h21EZQv6d1HGPb8pxMC7D5oXnbjuy2YdCZPtJXMzpX7X291AcTx",
  "key24": "4BsDsMK1CwicMyQ7PLfGUvBt1s9PiJAu3UA5Jvha27c7H9rgZ2hwdHcZaNPLrCv2X95z83hZkgTASFEiqys3vHeH",
  "key25": "3zT2uC25kk4PwD1dKAhvDES858oidMAKun1kiUbUpVFpPRwtvz81rpqArWfFuF8eHJ4x5saNjNy8bmGwUN6t1z3E",
  "key26": "5E6EunftA91tb8Ae7xBZkU9xdqmQAhpMqHVSjpHfivfbjxU7Seo6QrWibKxaLbjjMDLVwTBN3wrPySZENFoWUcYA",
  "key27": "CkpVpenNDQmASp7nCKMHDnkMYM8HctcwJUhpk8zeoP9bxWvXSuS4b1vZtUF3NWBA1n1NbDqJo1tFcTHJpVRx7Nr",
  "key28": "sTw3gZAEDerTAXQTA7TZvH59gCWK2S6WgnnRzmVwJrsARSsESoKTxWjSKqsQWPMgh3WLUhXXFoNk5hxhynk7mkU",
  "key29": "3yxh9xTGA2JQTdU2rqURCmJPzCgDKxLdVNLqseDmNoeryqmjC6gSWPrKdMHHe382AoCDF8ih45GjtmF5ZKB35ik9",
  "key30": "3hCv6Bc6kP5r951Qo22RCpKqnAeDNmZywsiBe6JaQaeiG87HAUyRFdB8bxemfzUJ31miFA7tL1PixK48E6qupCBS",
  "key31": "31QTyJ15uSTUBqhhddzcybkFJZGm2uNbivSLbkdzVMdcJxgSjLftXQWBXGKe587xPeAZjfBgj1ARciRV9soTz6WL"
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
