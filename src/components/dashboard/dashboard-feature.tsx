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
    "euatEvJygKfdAX1ngvfLDN4sQ7KE69uX51KPGkfJ1NvxJnD7SN1MELZ2njQRLZt9iz1QFVWpSzSh4QUZYmUAcQq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TYMLFxaSp3Jh1U3PzCnfRBfgjUwfQ883isGbUZ695KxjipPR9Ajrt4q9qqcytfVgR6E54xzcQrBuK1ECaBhE68b",
  "key1": "39xk3tQSKRKQfDSGvQtxucyZzqV7PrhEMxip6JYujuzdYTMnbYbksVHmPS94HF1yzPs4JpA7mLUwmddRwqEy43iC",
  "key2": "VUrM9z9zn7UT1XHwkwHGVu3C2KVsyQrJNdiMT3d4sUxBZx2Mz1eZqU9oLPYpunTSAD5vEB7r6MkyVMcb9QUdbTY",
  "key3": "QX8VwJs5oS8oQZes4gNr64ywnrXzrhJo5anhAMEMFJFWzQU84BLs2myzELP98LxBoquAeXCR3Z5ePjZo1bFemWN",
  "key4": "2b4SZexyhD3mRdAongB5KBhTU1V7mAictodXnwtnQ7ZzaNd4xUNHXasde11ytMrTfcGVdXmN71WCT2WwVk9tR3cu",
  "key5": "5KsNA7Sz1ZPjBdBLFHiykrpoNLhenBAhgmTmGsf1kuQP5tgbQxhwnKHFnZFhPhSci5Uk7J1Z92wuygPs8m7Eaj9E",
  "key6": "2GMARrbrAqUK1uLsH1ScfDgwrBHpHXouy9aVZkVcAJX5w7dV5xUKbyxLt3skVy2DUEdUV5Td99LJPHEGVYzMAvXw",
  "key7": "4C4vZcJFeLWtAr4YPdH9q9CNgu8AUBUmrYNhHhEMuXdKKy4YHk4de9drtZDSPMpzX27piFy3Fk1iaPMQYnWvZGxo",
  "key8": "5t5iobQ3TyqQq3nijLDqLPzox2M4ks2aSFGrwgY26sAq3mAQz3bCmqEvR5jkmHY6hYuUigfrtiuqAsByRQEuR3T8",
  "key9": "51mrdx9fea6gB7wsba4FLBXxo3HZ15aXajr74xmD9pZvPnirRftn8Qjt3DLuDrJoGEXNp42X4e7XCfwbwTP1AaZH",
  "key10": "61oSVtHKD7K8FqaUeEjHxfciUMJdvh3acsD83d4uubxtru1GbPCR4VUAup6MMsY6dUPRdHSaCKMWVGm7obrbiEDw",
  "key11": "2rrcS3Sgu3pqYyuYsM3DPoLC6M3H5MUanxzDTZLwDL4yiPQiQAXhd9MU3LrugfTMudR5iTgHQPkC4FVbHf3zjR1h",
  "key12": "4rh8eAyRYYr3KYXcNkDqPi31N71YBMTDthU5XxdF8SWJ7VvioeRaB6JBQ23QVXJymjYnQtSKdCbxAiGGKNJsfT7r",
  "key13": "53K8SjmPBZ69oAVaLSRief1sRsBfQuRX4zqxKntSm1iAxGxmQwqSVMVcn5bL6roTRtzsUqBhi42r6QFwPDkTCmcF",
  "key14": "3FDyR1p3SzbUbxrei4Kft7uoimJuvu9sUqaPxmka1kVzGoRWbicfnUkBHqnUZvxUegvWtnL3tzeeLEJBqcoieJbH",
  "key15": "n4d3swg5fUzMtd4MU29yTuB5P7aEFQAJrK8AQ8fsFGugomMpR8cPDhuKNEuVEp8HXeWkpnoCg75LxxGaKuQaaa8",
  "key16": "5Uykcn9FDhrHnx57H9ownctZrhPyNo2T5CMtS1MBxpmwqkzLiRpJkvCFqiLbzyQCuctAibQnjtLxRrygtc8zLbmf",
  "key17": "5v8vsAQiKvv3Y7jKmY6rkhFtYPEdQfNuAWL7qMwqTCrNqpFj8nY1Hdf4tzK1yhZvzJ6EXEubDYjZARpwNo8vb1gP",
  "key18": "5Ra7ZbcrZjTHboHxXHLoh9VK4X2ejLokftpSBuy9iGsxkugQQXtg4oKxHtorgQCSQYonoD6HAQZKwGpo9SgSX6YN",
  "key19": "43ZmLwyxteiZX6YNaoewzMaXARQjYEari1fnn43q64GZGnGUqef4GLV12BMLc73hLQ2C1Khev9cfBCPs2De4gRHU",
  "key20": "4pRapvGhu5CnTeG3Fc6GgSPcCKowkYQmLPj8u5tUMbZbkDCfZQQ4VGzejw7eCi2g1faLHzGPEGzR61RiHoTmDPLy",
  "key21": "Wqwbi1ZiUwRCuc5XzVNQwSdHomcYfyes6b8eHmvUhxZenjtfpoMWcV63Q4uPTnjFW74RumyqP7vVVxt3n5D31nn",
  "key22": "44AYrnBLz5w5z2nU1EZ58wcW3Cu7qSiBC8cbnKB4HfLBQtXMxnCfzBRNsHc5rZdvXGDQkapCWwbUWQcTnmsW59BG",
  "key23": "3vUEBgCxW4pRZbJoPXNthgnPsLezsyqzK5qTt2LRc4yeUd6j7V2dbMMJFDYpPNP3b77yn9dZJPJDMnKd4Jq7qeGY",
  "key24": "2x71zkTY1eb14X48nxzfoZvMFnDDUAz48ySR5r6J34RvboXhsYrqAPFU9No25stQtK1Wk8soqn1V9utG995DFqCT"
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
