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
    "3JR621b4XwVndjEYdXPVcc3XiHGf77Ty1pTUrmSGMUok6PEz8v5HD2RA3FFdGavDnsR6ovsG5gcBzHzFSVdYbPNN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "846Gnu8qn1kCAdVr9tJDhqjDcnkSwBN8sUdNxmgoGE7ZP33tGz5nnqu5dmp97qJN4TAnRqc7mGNh5CcUK41Q4Wv",
  "key1": "2xjcxnPJfP2P1UqxeQLk8UauwZpLQ6E6UWj479ashDiWFzxpysUod8UHTBheJSqfCJWdFAcW3P42MoAeqUdmuAUk",
  "key2": "3k3yiJ6vMguWji9tcFVbehcQqcDC7Pmk6tj8YqYeH8Juz4BsZBdn4Gsy5XzxYTSmphETWecgc2zataipbvFQzxiB",
  "key3": "3JnTV8EL383DriZZbE8f9MEMX7WAVjihafGPWmGrYMPX8wZDqGMmukmXQwTHYXnBaFMHybvRsVgVUTCs2T5ivfnj",
  "key4": "43g7mnpUJq1itut7E9AbnQzXGYiVf4E9awDEpQ53BeKqMtoL6ZYj4XC5w7JCAJJoEGXWeRL2aMFujy6Yq769L9xa",
  "key5": "5FmR4ewHvh1ESxM5r1SnXv3X3kTuNA8Vh3Yy3UYTvJaXFtUVGfqnsmserpxmruuHqoxu9Gi76WzdFJ2xJoXvuJrp",
  "key6": "nDueYxHYTRZBtCAVtCpdj7wMDkeCwBgsD7ePn3pUAAeyUf1yNT3Hsjo8uTkqfjDXa3fT98wNM8eettU58HAmC9v",
  "key7": "5GT5kCmpDLM3Av624kjVpggFTVdGG8tV4R9KmHQ3Y96PfT5FS4gMMG4Zo6ED7ddDGQawVHERwKGMwQbsgFfVhQUh",
  "key8": "1bASpHcKspNuwf38TBhykxbRSnhJMzAoDGrASJFXfEZoRMV2avcqUqgpXHPvs18rVWBJ1jft65RrzRnR6rKJMSu",
  "key9": "5aCHsvnCGJC18e7JmcvF7dGHCtWmMsjwvpfmAEUrEvCtckyRUpqzHQ7tnhwuBvQ7Q4CDMw4fb16ugBqHtK61o9WX",
  "key10": "3pGj6vJShVAtKJiFTcdVFFwGo7dNJLmuLzHzPqK5EwFzmpn5UEhg7d1iA1LvyhefPBjJAckTtnDiPipGoDH8tQKF",
  "key11": "358aFmNgFEM6D7xXSTpnnGEqB8DsfmdSbYqygtisVBBuQvEzR9bAWxMc2BTxxZTu9ZfPfQQScXCDcrYbWqgnyspN",
  "key12": "5EHrR3xauAe4LHFHHnRJqG8Yu2Qg2vjoPwtiTRdokrrCqxBGbM6vs8RpVnqUXpcY7Vk8QioqarVyEQS7mLTWKYci",
  "key13": "4uFfumZ7dt7tQgpamcfnVQ5iNbZ9J2M6hsEDd1TS2ADJVKCUpPziKz1zNFxQTpQm82U35Acebnyiz897rqTF9dMr",
  "key14": "3nXrL6Vt4dT9oPDfFmoMFVeq5ZnWaJxavBu5FuswyvAEYip5CnatadX32uT5it7AQkoqG5bwP5wRwChSYkg9YCh8",
  "key15": "23QarXNgKkH8GVCXuu4qDdroNFKyGpBLCBCcaAcCvC1V5vpuu39XGp3YXPKbXhNi6qP7CC57mm4KGCpSNQuLpvDd",
  "key16": "585X4CKDCsuc8RcNwgwi3HVQApXCGnzypunxZR4Qwio4ynNaYrq3wb6cEH3aF293rAM4hAfrNJC2zzxz8T3riCoG",
  "key17": "4hSQi66piCd9Dvaz78k1cdUJawu8HyoFJDVwTDwg24eyt4Bk3LNaETcHFPFKArDMg82pb2NvRRkYu1w8p3PVS785",
  "key18": "5DeyxizSrDyywUhHYvDdK1w9MR9mkzbBXaamZJSiZDXvvBmru7TjZiAnwNKTG1rYNdjW3d7pKV8s7ZnS9wRCR1AJ",
  "key19": "2MhcoNzKRYzNsMVNNMK4qRhgR8FP2LSrd6re3xNfFoeJ2uqjLWUPVecTvepGTmEC8wpfaDcT1SsBMswudv9dGf8Y",
  "key20": "5HMseuqU5czLzNPgq4QSYyj1pB7qkHvsGdxZGZCADFVeW1maKj5XXvkqzcoCc6JnJVpDVWxrUsmeBzcP98zAo5tw",
  "key21": "3NZjxWK2CeYQF9gKNYy7nmAj3BdPtS1xDQZBKR9CRt8tmbNTqLoTvN5V939mY3P5vQphs7KBtYKzPdcxvf3JkZSi",
  "key22": "5dUaZfU6pXBJU6oSVf2KynWTc6VG3v1QAUuwDcth5T8iNJWmBKbGaG6BgYhXg9NmKNLJvKpNPi9n7S7iuk7YmZcW",
  "key23": "jM48kq9qAZjMoe4nuBas9HNePUZB2VvPpqtgatAiq2pHNcyfiEBJGXNUUQFLxcuv7WhdEnHapfp47iUgUZX7HWD",
  "key24": "2Jvi2CciRSW6JaUq1tjCjioy7iYtXWy9psHEhH8EVdHqwx8YxqYCZRcUu8FgE5o7mrnCcbmUz9MQmHLUxeQnevLv",
  "key25": "3x2cTdL4nvXCJGa78X1dFegYC3uZFKHsVAfezkmKvApCJT6bR6W6JTBaBCCY4uF7bkyhexZcWT797RCvjnw6Udmp",
  "key26": "5rp3eXRaMqHGBLz89mJAVy5eJ55zfP2ZnHZazLe5FgE8L1MVTtkRd26g4BBSsvCrDYwMz4Najy5f4EMzSFErCaBL",
  "key27": "3gMATtBuJK9Py25HNuEMqd4hdMH8VZb3fxkQS56Cmm53nqAK21krFX9EJ4iSevvZ6yeaDfqh6PgRDMdQR6UvMAmW",
  "key28": "32GrNbrqQqw93foLvSUFGDWZPE6g7nGxJ5cwYZXeDW4Wwbhjzm9hoL2X1H2ia9jtJU1RefuygykHzUA9V8dQBeh2",
  "key29": "61nPg51p87a5HXRgJu7YgTdo3WD91y6UCZnP8HhYqw35sRqz3MfmQaqekRMPSHGNo8XvMsn42RJNgihRArW4ZF5",
  "key30": "42PqS5gXuroeg3LSrD16bFU7Gn9v1nnvSDnocTEeCfMawwvKzLBfnVMZhKsW7ZzGazzhzdKi8b2RCY32FZ7938Xf",
  "key31": "51aKLGprAViBhbNffsk3B3FsVMDxKMXWTj8J7iTYDo83xaBgD8yLx6iyR489eNw1ixLq3fEwKipwWWj9QxYAon6k",
  "key32": "qu3PQf38mCjwFB61sRs9iksYj6LPcCS95DbeRF1ufboG6pnXJTFHc8ay926cATR5PxCEgPri1bcfr78HAj751oe",
  "key33": "58apQjdRB4f1fo6jfkicCrgtYfAB1gdFzTmjqW56wbKz4iUJaMiRjRuNUuj3uHBVQFWKsY2xUvBxCvw996He6q9m",
  "key34": "2TtuuGabkuoBayU3vwYhMMjHXKXk7n8RJQjCJzm4XAar7VJPSYD3yyWB8YnJoVsQJ6YxCHiaUdt2Ag13S2RFPAce",
  "key35": "db9WQpUWgxpmRzMsxkHfPHmnso9Tc2CStsxNZ41YzBm6mzDsrN1emUnR4ZXnuGgvypi2SZBn1hEbEorSL79kJYZ",
  "key36": "5c68tNXyD4xsinuk2A5JahJVBkdyxNvcD3sbc2pP7iFnDxJVZSe4qiXsujsyyevFrWmd49bVa7k1Fya2CRkEBzkf",
  "key37": "42b8WB4sLkTqnDk3HrmYAH5kVkZjM68Cy8YPWefA6LrKtzXNruA7sevdGMDvuJcVDQrBuxWPUPgqcrmGout6hLen",
  "key38": "4hkjrdio6mppigmAmBQ6xDtUbisnGrNGZK88yGccR6kSHXUECui9fFcMWwFNh7VCxGcUATkkDLzTkcyTWLTktmiY"
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
