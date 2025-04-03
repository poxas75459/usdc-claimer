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
    "2GZGsEbTbiKuYC4at6KMERMFhbf1F7EjsyU5H885ZsY2MGca5ZXWWy7odvJCA9LCgu2qZ1yRpy3avMVea25HPHHL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P585rCYnE43kXH5tobv1bGg9es9uWQZGr32fTFxruecLPAaTLfoZ9t5rf3Gqse1KEi52dMdzJmcxmQCFMVSmins",
  "key1": "dqyYam9pLQaLQtCKAFHge7MG31u5wQzeuq9J1HbNoVZQfqczKVKNg7ujFh6AgSTjT8xmZoJKYB6fS3XeCBBgAX6",
  "key2": "5erK2CHw7NReKHikZU7SBNBapGD3MxwKzu6CRwtQupR3Gbmn5ZDEXHcygxXr5uGULmJ5nEWwumJSEpxmBJHjpN8x",
  "key3": "5xLC6dHQSZdEkv2XoZdnyFbQ83m7GfKiCm8vHw5qq5gEunJhE5AH7GAChkvagRiEs8ik8GftwRTQ76QHjYAKAykC",
  "key4": "5AYYNymfzV3xfPhv43RQxPT9ddK6HWW14qmHooR6Lccogvz29FMfSLtXTgFJPFAz2pSpqfXdMRBXNJ7RWBAQZEa4",
  "key5": "4RPV8Sj3B889wfi6zWwmcctPHU18nggZK8yF2iWRCRap3pTPmv7uXiX9zuV7L2bi81PmUR2tqvDQwssdbJcxuknQ",
  "key6": "53qoncJChRoFCGEDPmEbaiLBmBmnjscbKY5ESeFNLBdg6SseJmDfva6WjjNsLGWM3avs2RbZPFomkNf8WnaBmJdc",
  "key7": "HnFozwjF49UvXTfBxLk2KmGsgPPr6vqp5qoAnPwJwNpG1FmLbyqk7ZTnSb3r5UN1qzSiyHBiVwER2kAEV4fC7Tu",
  "key8": "3TcGqiC2cRJP9Lx1dnanmKLnD9ahZLUmZMdkqLjm4FP9gsWJDe8gPpBgB3QWZQC8tJETkfDYWNf8bWumoLhLY3H1",
  "key9": "39E6m5QaACp35ZBn33559XeJEbvBnWHr9yL3Zw1PT27LxDS5Zn6HiaduphYp16mv8qG6aHaSCyzKomDrd9RXaMnR",
  "key10": "qBjYo8CnqZSLu2Emzj98hQGe3PS9mq13i2cGYVBsjukdAXmmJ93nH3uuYo2eSVrKAhFg8pJBSmVv5vMePg4faft",
  "key11": "2VsfWwNPD4R9BTJDUvhyTfE7xtbzQ3JfQCBR6VUJcjeEM9pYKREv7Hf29v88pp5XTNQsJUvDwQaLr9mFV8DA1AMr",
  "key12": "57bBnCsFDMLZQzctjtmTngcLJeXXzK12MbD1JyJUbcdaSKWkxCVQzjthVaQS3GULzMBKeboPLC1cPjjg4udtWqYZ",
  "key13": "5pTTYevLqGsTRMWiSyyWpMn9QjEES2sTPuTNC6QzcFbfoaTzxNPun4de63soD3TGMfGtDeYKfd7ndsRLYZZgkAXs",
  "key14": "4UH1Pw8VCm1ur9r3ySTsLPjTs2Gzrr53uEbngsV4FkXYryqJoXvrjRJDk77Fh8Eatg83yt1kQ4Lxh47hMjsrJjhG",
  "key15": "48ox9iKR8drkZgU5Vfiv9Nx2t2HMhqr4cFo8EZQWWzTJWQ141uVTeK2ihKjmXbqQ2hdwM7oRyiaoorEhgdmdNFMH",
  "key16": "2ZtzH9PW6ooR6ZH2VfYuoZELQnYUDa92FnA45sAmu5bzWzLBWdXsiZaWrnRm7iAJC52GKnUu8UXnRH8tfyDu4qRN",
  "key17": "487jRnuRompjUoBugiox6ZWqKpmZdthJBwTSS7xW1N3aYoZ6i4AMAg78faXjDWPCFwCrN8CgvdEBMs7qLKbcBQ14",
  "key18": "3KorNZEKvqhMSfYt3EW1UAm61UkoiYCQ73FS8TC3m2JyaL62MxedmrhsQMJhruqyMSyTEuTSXvpTVfgH8L9sp6AV",
  "key19": "5xW3ZWwzJrD2MFNJoCeTBHNspkXfBJAHucEgWd3izJqD16WB9PKCEK7ihnoK4SLbngh42Lxau1REuqnEBuC9CeD",
  "key20": "4MDY5omCM4CCHYMhRMgRCNJXmzksQoyXEM4MmfK5v9PRvkVRfmN2iuG8h86GNxPHh2BtxuRYGQxkMpDvH5uxFiBZ",
  "key21": "35MN4bJQr3EmppvQ3LDXwuGwmFHBmQetmouoCiAinDhMeAQ19SWqxztsDK36oX88UWnyjrZYrd1mLZM1S9sTZkEk",
  "key22": "2uv1JaBbMvmrMzFSRmrwf2onuVdVoKKvg7bYCaQ1bcpDAG5jqxM4e1ciNmKUZxx5qVcxUUsYqqvPEeMc6oZDUnQJ",
  "key23": "2t7iUTLSyvsazsToyBhSuzDQvyVVAqVDCAcNbXPi7AZJ2pndmfmT7xeTcgT2LirtUMYEJ9kUEUiv8XypuoNUbjW6",
  "key24": "3y3sxoFciUkRrd3mUdbhBPhLN5a9ZVt7Rbvdy7nJv177wkFJu7TAn7ppvfeUnaRwwTMMBbzFDBgeVVTm9aDkbTrt",
  "key25": "5RpjPAW8URV1AtqSVfyMWyMeppPWGx75n8X2UoiZk4UFzHp5NxCdmpgNvFn5y9ZzsYJRzvgthi7ckg8qrV5cjLA2",
  "key26": "3NRAyMxjaV482BjakewZTgBrxP31m84JUeMxsAY5fQQV85Tc3xEqchcozA2Enxs8wcJyegkEXh8USx6CeZhBLdCG",
  "key27": "4QADg6vqdcSFGTfqJQ6ncDj66yokxBbyjWvchno29UtRJsqEvyeUfWNypsq8cef8e8vYJCp693cMyboX99yz36qh",
  "key28": "5xa81TDPG3DDuf8rdDQSTgSgqJgisfDUHCJTcvjFH1c5YYx7kXuZ8DVftGiazn389eHYLfXvazhcCQjkdrqDbSos",
  "key29": "2GAXLb6U3L6fGL8b9xnYmgNBsKe7uTSxC2uZjWNSfbwDUDVdM2w6NU2BV49SBZorHP7AsK4VrW7yBmfvNTDCtfQW",
  "key30": "2BW3VXbhCXemCuZFKNECeYrncvtrUDZ2ajjTd3yZtaVEAhSf7dwQadkvmc2UfYwLMrw6TSSLiUymdMq1jqsu5ywy",
  "key31": "4KRVK2VhmGjA5rPQ2MiBjQGCWVbR2Hf7LzXiQrDSkhHMhBsWo4YUndUXkb45c9YU9APuuSBQWVYmJykyBAeQ3FKG",
  "key32": "5CbGSDm9MnPkxaCiMCkCQgStofBSVvVTY9QHY3B5iaztagvZbU6kcyz5T871TGZJ44ixmN8UrnLvcyP2afZvZ4aM",
  "key33": "5XqRek2qaTKtfDknrVzJqM4rUoaVMfySZUiU7t5K4x6twMS2j9gNg8aDksdFoR4JARXjj6hxS89v4GUFAajwJ67i",
  "key34": "47aMQEsHApMa62TbVzJ1j1rMonYt6e8fkcXbxgHJgqMXYmqw9SXEpruSnPDw4apCWqnuTHZNjQ5CnDzW5Yiy7Dkz",
  "key35": "2FYb87pwNkAwmnqU26uHsdUxixBGdedGMihxjLh3Xczv4qRx3TqGhBVXpU9tAS83xCW2pvwYYEKjh5vSis8dvT4S",
  "key36": "2GfkFnmtaA3Qo4sSVsVdkpi4mwPLvo1KxX1qpE8T4SZW2G4mfThyr9DGshUtMSBLeQhzC6yzTvmftxqUrjhLr9zd",
  "key37": "3EssgtH52WEGRucF2pqi6XBcL1K4x3zuewbS1PrKYRPHomkhmnEDoK42ebezhSnDzsJkSpB89ri5wPNtWzNAKN5N",
  "key38": "589d91v46vFT74R96TKekZB6puMy5NUBh5RnwGrasSVKoWNZ1s6bqPe9Xh1yoTYQrjS6GqdmTYw1NP1tBHfWkGcL",
  "key39": "PTJLFakt8fzmgWejH5uWcFKzrTp8cjyEHPKE65cPFR8jxu6VAdgrsZZMHiSwFWV13X4V1AvhNjz4a9zd6dhZVYA",
  "key40": "2YvPFQ45cuwLTrxo7wMLZ6FN8fSwxsF9MfUPCGiSj7NvEmhFQPpBGUjABQX4uG4YtdkmfdR2oZuZkw37T6GEPAJK",
  "key41": "2jPwufWsqSsZUp51xLeT8ouLRmFxJdVVHwZQu1NdaXg45U58EA4qZVxLKKTA1tL2sPKZ3JY8mgtavKZm4AXWPidN",
  "key42": "kn3nRzLU6dao3KaqruMQGjJ4eb4BYrMZ5RyNrx3p9husz46ywG4YJsTyUqWTsF36nsA6FnKDeScAzxvqcFphv3H"
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
