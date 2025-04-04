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
    "49Fgj53KZDaHkazsZR2bdz3ZjcHpW3KzdLSPYvy6z4JRQerpCdZ1bUiqXBDZzojCneMK6FSmrWaiC8o48wgms2kU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZfmK9AorYHYoLrMUkghoLF2qJNfq3zbfJn9g2oc6YQJLMdWjKMMys4wnvuNhfCLn5Tw9FzAay4DtG7kmgG9fgSF",
  "key1": "5HLH2upkTAhBaqymCVB5mV7WVv9EUdfz6wwneDs2KjH26WkeTU1ty3bfvsYZqw3dCNSpFX6XKhPaQTvk54Guvrtw",
  "key2": "4oZKd4qwDEmQk9dEGyQzJi9rpCgxZ8qrgSxToqorb5KferXfC1LKX6b96NwCby22vuRLY2gSKs8MmWynra2y5jQA",
  "key3": "3UwaKFXdrSCqpsfvRv25Y68UgTQj3sMBt7fZcAbgHMSWYV2CY6QQKUW49H6vWSRFmK8oBzpm2vfRbxq7KyzpDKLA",
  "key4": "SbtsofibL8nB9Bjn58erMyGXBMKk14YdU3AaMsXGUTpRqtu9FVdn6uLyZ7bN95cftUUd1DzQqZBeLcvWBwkgboW",
  "key5": "tN2Skya43bRKGrqZ2FXobHkEHBpKqgxV4KDZ1kBpMeqyDKxve5B8zy3px6Gn5ZoiTERXawwWqd9EDncwYcV5Rq7",
  "key6": "2wVG6MqgGWfqa4P3rJ1c34x4Q4f7XsDWhc5Jhy5mBaXEeanjHSjNV26jUX73FYFCdy65iEuyUZ2CGHr2pbcNivX2",
  "key7": "217C5nyshuuB7MJNQ1wWz8EpiHQi8dFhfhz3CSZ4aRHpX7sRN4Gp1UFaJc9i3RCfGvLStBCU4XgyYn3kwHxJoPXf",
  "key8": "5wD9crfQJMPqhFWP3SS8i8dnFTCDeGG4eLtaVmT28BiYhwsApJdcMqa5ZQKoaejAYT7RMRUmo3VHvXU8XXXyCqXb",
  "key9": "5hLNrKRd7tNEtYr6pXkWzNRcnSeSaxtFB46fpvVmMXGdLX32eShGXhsDM4MhLTyDUtoY8TvwVfMmrGyu7cj3nFte",
  "key10": "249w9SWGDcxwPaq1itT4qrZY49L915jBokgNUAqzuWd3N3SbysB9w3oF5jN5C5daafnuuTV5Fwk5ouigkRzDF6HP",
  "key11": "35zNg4cSrT6zSZGENZTamiC3fw4ajvrrsSwLWfLPzdzpM7zF7tZ2ctYnNfaWydUSTwJyWLEu27WtXejYhDX1Db82",
  "key12": "RSejAfyqqtQLGzTRUd1UJow5GKwY3whqVDcKFzG65xEm8tkDirhaUBxLLnt6ZXwAih9o1bPwg1S2FSHNkw8kDnt",
  "key13": "5QKNfJ3tWeWf4BvhgMwj9fxmuhT17BgCyD5Lz65rqNmJMgddQVdpcvSqTUAcMunW4hXQ636aubGu4CJfdXv3tu6",
  "key14": "2Xrw3BvSBcSSywPBMdNhQodzHSYafHep7sL2gzS52pzeZvaSpoUjKZsfhu5swBQJJ3w8YcVmMNoirJSmN46GMR8z",
  "key15": "4FbHdxVRgor5FTN157Z6DMpVru9q6deCRgCLnGEmSufmWpSwnkN6P9oubP6vznhqL7yWHZrF67JsvbS7jc7Pbpvn",
  "key16": "2rpNFFgT1bEkmgKeNZvJ4kHnhRuc415AAvj7hMUFWKP34u2LucVKf2vHKJZPe733WQnXHSvfFbz4Mp8d5rb6wXZx",
  "key17": "42iWZAku4pMYFpNKGVtdkKr1P8mXwSawtVU9ChUkVcvyCqPtkCJC8eoLfac1oKgoFS4M95dm3gkofjFvYLqSSEdv",
  "key18": "4FXACBDtucCGAue7ZRfwkARdPNdj1vM3m48Uzi991bBP2Ps336c6FeW3t3wam4btxE9u2rqj12JGx1oJqyXF4WiE",
  "key19": "LLPob7xGqYbqFhqPgg8sUTpkmxRpSkVvYCcRznHSWGYVjjHyGF6NXLyWW8Kh8Dhj69Fb1i2rE6mvpy2EAY78Agp",
  "key20": "5Q71iTsMuB9hhCB5zTBrh4LUu5EenR3AzMNV3CyFj8vknGgKGzjf6tfgjocJ5u9xCc1jaCqayyTc9BrqJSC8rafG",
  "key21": "34LYGBzdSY4nic8YnBmNJhsrCpwShDE8A3LbTfmPzGGm5Ut4z5AwMKvF485bVdovM9EpTqYZs9P1TyiwTq1j5NY8",
  "key22": "5NAG98yHVx5PKSFpVw4NQxJE1tJVPSs7Xs2KZizegtGdREsbo7GzDcc4LLqjJtxkne4UhSPmVeTEUt1imUMxH3oR",
  "key23": "2PJsE1cf6e5oLav545qRykRyHv2KeoGCG9CWPHuqp6t4JBHCEGDZ6DqGTuqZmJR95qehQNdAd1s79yTZdxWVwekN",
  "key24": "WEbX6ckQCczq8xC2BT4qYJD6xmq8UKSwY7ebD7v8CBXFJKC7H7tpvSAjSsbcM9g6bHNLxM6brVs2qzK6PX4p8W4",
  "key25": "4v2tYZZdmyj6iDYRzJHEmHqceaFpyWmFnLLPu1kA7JL8EKvzqTTXj52Q3pWKAV7jMUGh7coAcLjoHAr3XN4KS55G",
  "key26": "4Smgy8dr4fcHv1wDXQiTSz4NZNpguWgDT3yV38mmbs1hBEcqc2wNqz96PvHf2xDZ9z4uSQzqGGtsLaXMpyxZp6z",
  "key27": "4ySHxoKjd6JkMwF6kYx4QKMsC8CwgjvNMcJar5XbEkXSzq1Ye4zJS4GdMxJRneUSjAMKZpFrrjxKZPkyR7eFCvcg",
  "key28": "35gPFbjqo17Zp2YXp3K5zMnjaZCQem3DcFLdX5d2LdZxwtGgGAVGdEpBxcpLBLmsJTGKu1xTM8gNmuZAmpAcZ632",
  "key29": "5mH1vude9sF9WtWRvdoPhSQmGQvj9i4iT6yRRE2bWHEQaMV7Rm6fJKjEkk8cMiKyZahHbtATQR93FoBku44SCWf2",
  "key30": "2jsVNZ555gx1qhksXPmhRXkV4LLus6buAf3AACeoinNSkKm2ZricJCKSMpNUR8tVq8naswwn3gY8Zpk7N1sw4Kzs",
  "key31": "3qXKVLXDqJnNNCS4NLJ9hpJZ3wzuDDk8DvdGPFM9KKM2PuwAM6tBr3pnQuoRVx3hUk6rZ6EAQkAGTCDCZRiXLT9z"
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
