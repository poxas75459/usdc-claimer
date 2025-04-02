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
    "2ayQLvj5SDYEPRdHHNe4vXPgmAh48mQzZotquLGrv3gJKqRmQLcBxpfa6e4xx4g9mxbWpe9qrmMKySaxLur5Rujh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v5ESK34jC7t7T5okWc4gfaeVdCVzWZ9EKxWbE343fcvpfPQySgDBWHcS8GPsfBUrLck4TMC9CL9MB9Zt9wznHdH",
  "key1": "2QRwATQcs35qFY2JwNK7riMAadqXKXXHGXykHakrZhHbtG4V8i4vrUXWrtzPYLMo3ZmQWkSjLssNdTMbKxDPqL1H",
  "key2": "4yxcQq1nUDptWkwJ5ffC8tFX1K4u9oPRZLd4G3FzKZxVkNXFfrLrcPQ4ZjC9N8pWNxXUrQVcBe1x7EXV8FQDHvvM",
  "key3": "5BFS9mLN5mHe69ZkbxKZho8hmsVUeACmGTEkNvRhFh5v7nyZZ4epxs3C1E95DowxTT5S9tp6MLddsk3dWSLcxnzj",
  "key4": "fu8WbLggKFD7iEJv5bqyFeeYomFTGEz8a2nCqDUpzSEmSVZSDpCAogLyNpEvpmZVs475pNch2ddLQMfuTBan56J",
  "key5": "3EcRKYZ6ShquYC7AUBGZ3mAh2s5cN9V3CgFtFrUSZD1Rcd4MaaP5H1qyZ1PduZiFLxFsqqHQBt78VvSM9yCsc99h",
  "key6": "4qs9ckL8LAWX6byKeTmHAC8EYPtTJsvjy1SnS5NG9ZNRp8jSWGgkXsHLniCpRp8uBWDkwkGCxbE8ujRaazttvcxR",
  "key7": "3YPWPJZZdXFhmCfLXX4tcJ9csUodqJZTFJXRK9uqTaHpEUXAGBZi993oaMvWdaJsZodQTgZZw5tZSptY31Ectkdh",
  "key8": "5UvdeAbHgmVnwdRhd3uKrncgkKWZPY4t1LM2XLKdeXd4cWQ5JNMx63Zqrh8JYtWLisAmV3KECmBE46gPRC2kJHc2",
  "key9": "2j4c9AAQPx57ofori1p6i8QaUcBfmc5wB8tLgehx2exm8zvf744j4qQNuMSYNAr4NRQzfivMCgJQcznALs1NYn1B",
  "key10": "43VXxsgUvA7tnkgvYcaPTYK7L9LhZtJ4fB48FMJN8kNxwRcgR8yTKgmCZA6PanFGRtUXVBt9yfLeroqGsW81TmTX",
  "key11": "2cJ2Yq7R4Psb8XR3RXfmztmhCchqvXHM9cu1JqYEvjgFpBWDoydVBZx4vZuT2gX4bT9xWNtwP1QSqgCfVgCJcK6o",
  "key12": "2opCv5Km7LSGAVQB7mzH4AaZ3Wrgw9anYM59CNQmCW2ozqP164C78DfHj3aNRJ7djkHK3BvAAUVQdoekeVV3p4Mh",
  "key13": "3TMvi1kABxtU7dL9K64DcqiNggDVGbzkDqaqTRYLos8CTVo3mQwZMGxNuhB3HtY6XiaTA3naeZ2RLRja4R1bAqqb",
  "key14": "3AFSmNFFsctfWRyCmTSFZTo7fcHZQKAQDzRr1xhUufHsubwBsMhoJyf13vt6Lb9M7krc3zF2iCvXZ1guJAKveyfL",
  "key15": "6XrRNywmMWFnq7KcwHPgguS1im6o3ja6tWtd36wyG4S7W5x7J3qjxLMAwZwf4WGFyJtxr7cD8dr5rzYBoJduUNG",
  "key16": "2zenNHzjRY8uJpyVEXLvQbpbotUvq2wn89ffRMqGqanGLXABNxYS9dxnnmWsmZKDRVmp9PYBZV5QD3JnheVgG4Pf",
  "key17": "5ZsnqSFEn5qWiRxfm42z7aPcwa6hBoUKvYZ8TcingjNydBqUsWUS6kcxpjBpECwsKZrePpdGx5erGmqZKpnheiHq",
  "key18": "2jQoDv1nrLmyazrXSpJH7LqQRhwKoMLNswKJLmjMdg37MLLfAPYFBoARkHv1xmeCBqQTSWufupm14xfFN1F7qQUW",
  "key19": "ErYqCxRbQo6Fp6LGDDS6s8BcFYEd6Qdp1BNkKZKbKmx5Sdzs8JYZVS2kyKHLBwC4y5siN1ZGiy6TSwQw7AsPund",
  "key20": "3WEq4dR6Q5BDacioDojpfCpWYuPpusP9pkGhCcVpnnvacusssC2HW44MVahWMy5rikcjh79GAfk2EBZTefzZkGtg",
  "key21": "21MBgvxCzJSErX2R5XyAGaRS1bbECKG3yTVJv5Be2Vv9U5gCUZHMbHgcAtGRCpwW4CyYb9e7JTPS4cvzfXCJcQ3z",
  "key22": "T3AQHUPu9FjdrT8ERKM284jktgDuqtqXY8SuL1CeX7PzY5fAXChffun8egrdYUheW25orPoH3RMc364BdsWUK9j",
  "key23": "Kv62b6YKPV861owSXBkh6MAn8ibmSTMB1vFFSdJnJXVJvzfHg8QYdWxsuk28Zw597Bs4Huy42wr72VpvPhJHrWa",
  "key24": "5ftQhMJKJuGucSVeuMBGjwGw6w9XEn9b1XGFMmavVkPRjsWb5QsqHh1CYxRdis348WtS18dvM2geXseGq79c4d6w",
  "key25": "4eNTnay5xMosGu9QG7nmQHWuJoLaoxAQUiikBH1LWxQ9sEHjwbDDFqAQyTwsKCVbCFKmQWGqXLxSQiS5NDDXEJj4",
  "key26": "5rKTS6jkoi4KKhQPmvBK6wXoSJ9S1H9zhUL3WDVn3au5r2HE1iSt66K9yqZ3a6FENcuGA2EdZ37EabQ8cf59HUzc",
  "key27": "564igMhNY3Zkcj1uZJU78MU18XTq1EkLPJ4uTFPPn78YNFTGjV5mtxB23To9j4E9TLATXv3B3GwwdpgtA1FRWnpS"
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
