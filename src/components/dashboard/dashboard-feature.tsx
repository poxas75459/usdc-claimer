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
    "2sVsxF6RHRxNGUVwMwTJHpeKxx8C5MbmD7LLYA8KRQ4NuTUr1SCBknMXvh6oVgF2RKDFdYDKgr4H5ET6D6qExktR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58rx1iQH6TkF8mvchQaf3c4qp4VMxRU4N7QJmHtgNCvjfHzdnp3qoFsq3EhfQCfZrZ63FhoNG3FXzD3Thup2aQw4",
  "key1": "Mkk3CUD3BbgkUjiGurVMFmhZ1Phn8fofVR1MzCNagSXmx1T3CedUdvV3HyogYrQRjBEbwfdqv6qtbK37qJF3C72",
  "key2": "3wfzjFgW7VbhkVit7THEXALVzQvQ8eCYBASZ9UjNwBRwPkK1mbUTWC8UBVcgzajSRJEgijwcK6kd7dEqSDhVmZ7C",
  "key3": "4gW7HFgeF9xcT2emR3QmXsSQAD9wZ8fkC6Fzp82jC9qoZaCgLGZRNtsBXT6KEMBbiji8oQ9QFu2dPt3SVkRxRPMk",
  "key4": "ZjPwkCGPZ9QpdcX2G7VRwb9DCsnxXFu8Wf99TYftM1YiCFiRMSVopyRaR8oKAvJo1X8cUkpFDAxG2qVsxq9ZvMD",
  "key5": "4mGVxLmHZrodKEH6qsSV8MJtx9HEyiBqonZ7H3vAw63Tg5CefEb7thKdVAiC6i3wyD3d88XC8uKUBFUYTawBRNmJ",
  "key6": "4bVp6V1w2CDsWgP4xAH56DiwkmPfCQtVGXm6Y6LAvPddEohscbKyMjHMrEvLHtWBj3JCCDRAju2NSNFHkYVyY5Ko",
  "key7": "27uVVcVpGFBYr9Fz83tzyGbrga5Hej7t91faFsY7WyAJmMb1LCkumn9UPoasoi4ba69gzL4Ps1QWh5cwh9epDRfX",
  "key8": "4zHUrWQG62WW18JvhDBWz6mKy87x21kyw5xeLnj9o5gyDkcqErLmnyNo7bEMmiXKbAmeDUL9kTiuBrtFUJPx5Q6g",
  "key9": "573mBV5qM35fjPgFCNWXku98pRo7iAmdeygeZDz6RyBWqhJxS3oy7x7xJ2St5cugnpBMbDXEGGHRRncENE2cT8Ye",
  "key10": "37g7hPKKSbgQQFFFESoUEQbDExcUBuemNPCFssK6zh3YThtHfXFozSCpZGrkMxtgNG1YUQKdTGDn3RjFkofLXFc3",
  "key11": "mf8pUdHFnooYBWajMMFXS1XgUXK8rbZTeyb6R5VXqLNcsv6odbMtoz2dXVwrnacCYaYobxTRT4VYuTaZNBqadc5",
  "key12": "4EwkDCGnZHWZndZLfL6erU3M6icE2fkBUyQLYSt7QXFjrd8CjWY3PRdfDi7mKabmpRgKyTnwnA5uLKqd5zv5scax",
  "key13": "5DGdBHxE8bmNDxq7aU2mHNzyM6WTFVDSadhQhXqZ8BFLpouZjvpYo7yDTpiApoqbEN53h1Bd7E4ANkbjVunb7ufw",
  "key14": "3C3GFeT1SULb7DTPu3k7YKwmfxW1phLi4WYnMTCts7iBXCb5ZN1VoqbSHrkzUuYBgwdwBFYCqPG8hCXMeZ2FRpic",
  "key15": "4LjA6Zmfo1i6xhzP9WFqJcwxR8U7xRFiC8hH1XiVgde3uXTBQQmN2hHGAopfnM2AGqu7hQ88b7nCgyjjMia6favL",
  "key16": "5zRJmmT7ydh4rn46QKUo9ivTmFsBdK6QGzGGN2kz9szsoaas6fmfMzYqMudHRT9BDdjsRSr484HxCPxfYEvqV1tq",
  "key17": "bTqwTnP1Z4hbhqeMTSG474D3j4ecpk2J4Stmfv9FgbqmmhapKZe6fyxrtLeUKVJ42o89PuBCPAuinCChniBHjUh",
  "key18": "5tCs2oMKjtkZSFzAnDCKH4cnnaW8Mmg2pXBQuxWo4v8SbHyEiKBLq9DTypZiGXffimbzvEYdDxL4iXo4AF1c6i2V",
  "key19": "3YFt1K8uZxNZw2DnG8hPUSuqni412NJk44TjhgtZ6qj7Qbu3kzcMjYbM3emNtQ2Ua5LLYCZaGu3aMvpYRvxr8okd",
  "key20": "2kdDBn3sm9TCLcSvtN5wZGMuYEstm1sFcR6KUMfKzu5A8PCiYG86nV8GMuDeTUFLaSKNin8AizcAEPRHhh4ACDSw",
  "key21": "2fAncmwgZYrTEqMRJtgUu9cYSzdzvWLbd77V6k4qxGfVj1vu48jNRWEh1n86NutT5fsLfHyKeT32RvYTgHYpJzTs",
  "key22": "5ZcAjEDHZHuBrWrpW2NmvVbKPL8PqnRnFc7qm9gvzJeybCwXE3XyLALKTb4wB8DtvBMnvPKAx2uZcBQSCvFAgvLo",
  "key23": "4PV7kp8uz6DPK1iQkVNrvsT5Rs1ge2SqxAZfhPg9M26DUoQcMQ2JY6zK7thsWFvotFecjTaMiWjFySMmFEbHGR6v",
  "key24": "4ikToSX6d7HBsxXDYgLG6Q61P7LuXCPAgW5zaULQ38wXNQk9gVCyAJ6KhtZCV4RCpiLUbEdqjUv1PHJzGDfCbxip",
  "key25": "47Cf27Kkn6q9KszFaECMGum4r8WALxZN3QuMZqnEuHJoLZV1RhqWSZLXknDsKY3uJBnYA8mxJn6TU3juzZPfAutv",
  "key26": "3f2uLJH3fKiNP6UEm2yuUU5gyuY5WHrrfR5JF9hQMp9fnsTfu1XSBFDM6Ri7aWKTPRGLYe3JpYt4u5wkZ6xCwnSV",
  "key27": "5oGifomH84Em1MmVPuufpNvS4E5PpKYhWJtYFXhbHejK82cuFirB15nppQFiw8xG6TXAb1Q1C3MsiFiNb2j6NSPE",
  "key28": "4ce6jRNX1weggpEAQZCjr6Vv1xTWKsvJF6SDp1qcYD6s1ytCEgjDuiap83LwjGVMfp6aKsMV7KT7TnupPZMQmPro",
  "key29": "3wTG2sdmRaFtjPej8Bqq6ZHE5a8BTTeZhVMSLzD3x9xjD4tsU8ckoFxzsN44qjCMCZ2kVsdeBjKVG4Ski9EWvjkn"
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
