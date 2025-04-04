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
    "3Hf5hHVGUBM2cQJ7cpHNmvypUd8cz82Wxqnv9mnqtAj6dgdAa1RsuciALb34mUdu69ExyVVm6UJb6tkiBr3ecWx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m5Ja5QRbNUH1YtPwPsZRc4ynrgKGkHekt1mn6izx13aXEqUdG2DL6XRD1Zunbmq8gFMumTaeX78QRoAr4ZbroM",
  "key1": "5oRD6qsEfEphwFx7Z7t7Ek4vSTUtpp4DSVx8WdXeAe3uioJTh9CfAz8ZznxfchyRCa6jQyNqrhqD6R6UWTbs4AUP",
  "key2": "58mgBLsqD9dNLMsdqHvT4bW9QLtmQYbDyFPZd3psh2UaVmJtP78b9PcPoaQfa8FPMPDc8gRHXBiHMWbN8jyXdgZX",
  "key3": "qhVSphqUuHQ2vkubEATugLRzyiszXcAop6ca4iMUocAskPRKZUiv1EUEHa3TbGFVzSJxqeeKX2fzRAK5tXPAZWC",
  "key4": "3xksFo4bw4RDbs7UptHa54SWojmk2ETh4rTuRpB9phAjraZUW6HckAgiQCJ8Mw33asPDedtN26uzXFVH1scfntQv",
  "key5": "44fJ2NAStf1CSPCCjCoGffFr2GBimFqdmfTZjNqs1kp4hqxrXGS7GaNLYvPZhL3wYC3SSivxvry4XTXvsJeHhwE2",
  "key6": "5fwknwFjkfCFi8mnAXN2rLfeDNCbZphUs1DFm8Q4MZna5URoXzCnyQUpaRnuioFa8ZEAPAtsLHk47vurW9PE4ZHW",
  "key7": "2zf2X6CuBLyGGEa645SZCa6QsLSN3M7phBdHP3HvHLmVafNGmwpUddWmrXnCBTKEnRfaFUNA9XVH7nXV2tY8B4kQ",
  "key8": "2z8Wj418Lr947DJ68gRPrwcNDmo1dqzyMwFg6PLkxv1WbHy3BdS2YmBKjUNubNQ9Xiox3g6rivNc6GPZogCrd8kT",
  "key9": "2L5Jxzhooy6E9qd5Vg31RVG4ghz2JVjsQz8RgRjvek2UUFRX3k6uUF222hoVbVwiyvUhQpS6TVRKys4qyXBbG67L",
  "key10": "4FsKziiB4iC8wMKXrBocs1U4VPCcCc1Xj9MN8CqRD3zWo6Yx8vM2zP6T4mDoJehHLJHMMfEAyMYAaK3C9YsPVXaT",
  "key11": "3UrTZZBXLGHpvt9dA2Z37DxiYacMQnXVsbo9Sbu2X1sQuUxxKQcCc5Xq9KRxtZvDHxsomqChRGanPV8FjDeWdZag",
  "key12": "2S3xCFeZYu18S5fDebiKWoiHMbeSK4MV2DeNetneAFY4gsEMgU3J3q1N3mJ6NNjGk5y7zsTLZQjAhbp4wYMRtbpw",
  "key13": "2FiPpNHRyCQqdzU9LMwk88x5GMMVKbq7h2mpkXZTrb6KdyXJk4zPGAbXN3n9PKJBbK6armU9hgdQ9PJYcvbqhkRX",
  "key14": "3pXXrEYDWanHZ227mJVWdXTUKX3Bpry5fRuWHQwcrA3BLd4xxE3NMdzgWecGjFikerjQ3UzpS5CnVYghi1rEfxJe",
  "key15": "2HJwEP4eWDBP35jMkJustsVeMV2qvGuQkU8PDzpPVDKfNT3nZGAKU9hXL7DZ4gNYMfhMfnRyeTfnfbBW8Hkw44RY",
  "key16": "5qNhSSQ9mHPeiZn7erepdRW62pCcPBa3hozwb7SP5QeSiXeaLZwvaoWBsyAfsUXuCNXV8VTNAoJkDP59qtFjJhYC",
  "key17": "ybWS2eed3F67jjcTQK3HnUNbQwJP1UVBYxhTgPLemwSo2V2nCiJHERourK7aV4ni8RzuWzwgWrZv4PY24doKrWg",
  "key18": "5scm7yW6XG4KDwpurnnZVcSazNnBpUwUmsSniRPi1vsK87erUZAjiJA8Nd53e4hD9SDycPeZCFozcQF7nrssuc8o",
  "key19": "4yWmZpazhgcompb2BR59AQ2hJUEAu9UfhjHR6QFpXpddyctmPBNQv3SE9rTViCFVYuz53y5ugrfaGBxHwwQRWpoU",
  "key20": "ZtKtGLUiXWeKmAm5Gx6WphMLKLLDYvRbPhT1pC8igLsDj1JMouo53tQMycb61XSfhgYeYQY2NedpbCJgCUJBt8c",
  "key21": "4Q5Po1dQwL9Yk3PhQLPoMsm5W6P1awTaG22smAvfZRJZH7riyCYBw7eCjq3j65a14wqoKVk3Qtz1Z418yz14kQb8",
  "key22": "2uw5P2SReqDpD4ihd4Am3mkXR4WKubxygDqwkFsdRJsYUeskga82M2jgjpQ4mCvr3n3kydr6W24LTLkmKKarTcrQ",
  "key23": "3rkq8NBhy8qwi4WfrMfzQczzmddzEKuLogktBocV7W5Y7Q7XdSBLk6pJ7XEAHvxk4n3JSycqhCbaX3w7di41QwzM",
  "key24": "5HzpLWtLCfziQapSuRTwHdyWPEjmhf7B1nM7KJGNm4Fstr8qidRCLQSuTfYywLpfizdHCqpDaGt2ZirFteSW495E",
  "key25": "3tDLobbwVqfSLdjt1QUW5kMw76CUw2qeE23KUz6Pvx37r7aXmToXwMYN1dTC8sWMYA12NKxhhnkwDDtLQSDnGeZM",
  "key26": "3gRG7dP6sq9JkXpwMRfu6CxHuK12SpwnhZDZ9Get5aCvBUosPk8K4csxDk885T8buYx5qPPSVkoJEo7ZuQD2SfY2",
  "key27": "5mjjctzgthb1eFcqTChjQ7nXF6AEaoDAePt3uD2xm6TGzz2AHWkybXjwFUhtEoRnbvn3nZR2FjLinamofuDjsga9",
  "key28": "2DcS7tq45yeK7Lxd5wTy673TNP8dAN3TjqCS52Gt9t6fFdJ8g71vniqxpgpdofmjJpDKEaH2iU34xhxaA7Z4ZUG5",
  "key29": "2scyLNZTRxyUFEsZ8VXnZxuDiLHB3sqTVHttnmfJDXN9PvcQNDfkP5JnT82syfcXbRcF3A8Y5hRYCBZs1H81BCNC",
  "key30": "34AwqBn9ANNhSSefB9z1ed8yyjXmW9kwuerYrwVCmVX58mK4FVrWctWssqzVfQQcfWPKhwnXFwd7pw7K7Gs7JFMv",
  "key31": "3fCUnGpK9tnjcsQWbyiAtR1yRJtA5eWFQDwxcC6a7WooDKdYjkgT9x7Ryu715SqqUgAQQsUxu7EJivQaN7PZphV3",
  "key32": "2ePzHURaxqu3WmmdqHBBd1VefynRL9CVDEQVCqxALtJTX9wJn62YEQNmLuGVt6qNmBRHdVyViDprmYbQKHKLApE9",
  "key33": "241TWQcqRZPr3cVEE6r6EM8C9S5tGNw6x6vXzYbScbB4fJwWLfSJ8cwRd5hyeuyCjthUb7fza9w3V9kzucEnyTTN"
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
