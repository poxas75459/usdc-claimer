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
    "4UQAP1etpbrtxtRp6nuWatGiZebp6DEewe4FkouW7Uzf6NUMFgVRT1b26mxdcsUAz5NaA6fuTojJaRdQz9YiiRXX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dQ4Qzubw2ZtjpF9FeFwURWKsqbzMxcGtsycqBV831orqkWVs8kmjCguAQVVq3anUQs4UhJNFjCQUX16HHnYt2eW",
  "key1": "2GtQJaaeMvZAnND7zuP9KxitfmvesHcZnBLCxw6NbG8H3hDMBtoXsTJSfbowoDgUaJNTEWX5ggoRVFM3jZ9PKucm",
  "key2": "4j1ntXDuvr7XApncdeZB7NjfRdhED3A5hKWQwYoAyrj8bo3K8Y5kPMA2LZocWJkYLFoh7LYUfvLmoeG5FFuqXuYw",
  "key3": "65kqiEZF48SpH9XvyrQ9tgH9hbLvxK5MSBP6Sk6zc6EWEm57gnUv1fmwoyefTXZ1JP3c3p6TBpqyXVnCLU3o1KUv",
  "key4": "5EU6KDJyyLaoXsJBpztFBUK1zo6M5yKsQr88rtsTYBVt2QRffiiCoVpf6cNt8Cs6uNamu2JQGkKyTJy1j4AB8b7L",
  "key5": "23XgdQV1HoNbWyugK9KxH4Ses8ZMgaoXRX3wVmTWn4MVZ5aPfbDhshrdZR7bSrT1HTYtNq7QtoNTxsY6RhQvnHHB",
  "key6": "D1x4u3X1JyJzoUx7xHFN7dm2QuuCwwz6ChSfj4aCPgR6Jhnrbq1nNsdxWmL29krx8Jh3j817wFUPBsJ9vkXLiQe",
  "key7": "2rPYhspaXf3yombVpee9y8Y6FWgzMk57D8UQ2HMrDFXNdfM2Mpdc2dXUYiSEy8iANFw1rWmAK6JxoKGDDcbxuCHT",
  "key8": "21yq3inNMZgqWzwaP2uS1JDVv9pWcLxCsh6hHMungo9y8wzg4qu1aEu2xrYWfdpqq8oCZuGXwLETheGD7K6bxC75",
  "key9": "4p38pimkkYYLj5sRtbsDieaeWHpuEswyjziEq3XhsXbarhnHd8rLZqLFeGyZTKqR81pCkFksUWByxnzbe26c7rpw",
  "key10": "26qpuk1hznwrCgDKfDgXL9N1HuWdtATrXNaXqTT8cCSa3opqKmpZtFenwuovi2haF14F6e9W23tvzWrnsGiq34Hr",
  "key11": "GLMDs9n7uxKrTyPkyYxDoVcHR9a731KZCRmucLffYNvCsFQVmuY7HaM2G6jogLLhHwyh33bch2kp7APiZkSJj6Z",
  "key12": "ji3LA8Nise9RqoPj8jN8VJ2gtC53HwnRkrECEYvPze13QNoQGWXHp6LUUpN9BjgWdMtu9LuqtA3N7ZawaxDTEMp",
  "key13": "n5sKw1w17y8i4cRdYt2QTthyA8iYieUED7QtKiNZq3GyLZfZf7mhMkNjCQfMUEkJf49rZnEwm84j6QBKvDjR5iS",
  "key14": "h9fA2EVSEPi6RyB5QeATDx4qeomSHLSwX5srkbiPEVnMdCpTXF1XuJowYjW7hCtUi7ZbWjoq9Qa123vDAPr76Zc",
  "key15": "56g8Bmt1NDQoZGTG8zQ3L3pprLydRYGi2fuH83hKWJUCcngNwjc3bMxaY7XpujWkibxRqF5QDTr7FW6zmCkSncxP",
  "key16": "4BFGCxMwYZxzpnfiPhx2dZ1Ts1WnM6QsquaqVVdu4qnxJXbvmdebgLtwyGsyC74uLRHkT2pD62ARXjtozLCG46UV",
  "key17": "2W4mbV1T9e9bviyqXUBzyMZMFiHQQyrVpAm4pWLj2w9qybyb34tBWgU5Pdk6STBdDWeo5LhxQJ2ceBoWPatejBup",
  "key18": "r9yPAEjQYS1mu4mZ6FmFVPMbNPj6dFiM4we68VcLQ5t3mgUb9zJptmdBwM8FCeCewRRRotDFDbxMY5ybLd5PAnR",
  "key19": "5UjbKUp4Lzy4zGNAX6opfigL98mGCEUoaYV85eBwdUhi9xF2S3xD7X2aU7qfnv6RZCc3sYFBcoyMRDsqpXgh1tnE",
  "key20": "UuRKmCEYMZzhFLmbt6W7V9nUXtXFdmMNCqfxMjB3b7Hc3TkerGfYUawLPEDzhske2YCGs8VYUaWMJgSc8pUoCkh",
  "key21": "4aL3nMH8GuJLNFVukQqasE6VruGoFRFiwaP1wAuLVRWF67cbTbWH1wxkbKB19mXq6xy5Jz4ooyEszZ3Vy447Yfpr",
  "key22": "4L4WoAFdeG4MKsktdas3yy6MLiSjDKArcpJTqBXJ8YYN5MHURMoeieZD2Xe2qNT5xJhG2edXJG6TVFLtWStN9VYN",
  "key23": "uxJVtYdhiGxxrxp2HY8moJy9tQ1PNgd89wGFS2xDofKjE2KjrMLTJbqk45xdXJxqt8GPDtw1kpvvuijjjrEu4RL",
  "key24": "3MSHA7571zWvAqzzHJ6rewx8JHYztPp95ToGdnBiFaCjjtXMyTqrfHXn75SBJrkwqCYWD8dS5PYrthyogxFmK6u4",
  "key25": "4ZbdMM4S33GtbPHNgqPevg6hrG21qAaJMtVemZ2CzhCsTBi78tKG5ZDEjbEiyaWeJYfbsZ9kxC4KWRFWnCRoeYwC",
  "key26": "XFnVxi5NFfkMBrNr2fHznjy7uDrm2uoYp9EB1SXZWq8YHBDYHmn27Qq27NjVVZVv9EY7DQiAc1Gfd9unaqwZmK3",
  "key27": "24Y8cLBjnEN7hm7XaA2hdrTNXQQoSCSDJDqiDPthoMWiaNBeSGvbMUELYFFdSR4AHuvPBYMwEMiUJXursUDhzTVC",
  "key28": "4MwtW8gXny78d3bXkSkT5hJfLCT9kGMLFDpxAuLpMQ1YvDY8HtMcYUGRjZCZkBnN2G4bVDpnHE17Sr9qeCTH9fM3",
  "key29": "2XTt4PpnMtB65Dq7L68As8BZ24TGeaWufwEbuEGCvMLYPci1NSqGLT8PbXoxCSqHsmUt8zbZxBiaLCghYhanj5iC",
  "key30": "5dBCPVt5wHEWbHv7qErF9opeqHjnXxnt19ucqossLiK2iLnhDtTDHiTdeMbBW8GA5TrbY9kWwJkjfQGmMtuzvcrt",
  "key31": "324wEGoFtHLZnBS1K4vvbVYzvye6VLCzVcjy7JRvvVpKSDS75KpXQmdngS3AELvpKKS1zB3hQttAy2D5Li6YhYQu",
  "key32": "2mgxVrxSAJiv5WR8yygfQFXmu9k2XFVaSZnpNsnyAD1tpKJARP7gqsLo5XnmgsRCYUP3Wbkf4UisUMu4vLKVtopi",
  "key33": "3re7xz3jXCGNWNDw85DpMbQtRUJ6QcXGAJaKpRtLFAFWeDTH24Q4C5yzTR3o7psnQTcED8z3TKbGqMJKevUHadas",
  "key34": "4cURj9W6fh9wNguozvdt3R6iBMejf5adHJkcMkMgnunuNDd1ns7Gna5HcGqBDL7tXXNKFJHZNddruhDHhzQpbfWm",
  "key35": "3T5xhT9tqyH1pHahrMU7Hy7gcFF4xwiQGE9KKmisDX3pstiPZxz4Sk3acApiAtVNtkJYpo5n8E8iYyfCyR4s2GcC",
  "key36": "5fP5XbweNRWTEuMAFSTZHZyGzdQFuWucwZcFHTab38kwGyLxqZcELWC3Q74G5L2EBrJvkaBup34faxptBs9vKVfJ",
  "key37": "5xuXputG8m7HbaxEGp2YkiQxUVrf6iaKTKr8YMvpk6dm6ADF6NVpJNFLZj2jzR8GtznYvshKZPWNAb93kYm3K65r",
  "key38": "4i6Fpfjp7Pg9kuLJsy9dsq8Bi6nvrtcasswvuYwMhzYPMEAkaNRB41Ts8BvhYVcjZRCnTcEbTPr4CQB5ByPsMPyg",
  "key39": "8qCpGsfMKEBAJNNBiz8gpuFqzMDzW3yNJD6zj7BGdFbTfZQcknD11GfKV3XwgCjqDr8aBSPqBJtcNDUVCLHRmJ1",
  "key40": "cBAtfU6HEseEt2aAokfN2kkQbFwBcQzkYidZ1NzTWoiReDbmwW4GqsR5Pro3XwYSPNtNb2bxZWq36zEMFW6PwMR",
  "key41": "3wsJixT3fJ26LKL18KYhDiG5woyzyPoQW9pfM9vJCJo2h4jYhri6qqvhe4iezjAAfrV6QqpkfychgW17Hdh8rExg",
  "key42": "6iNK7fgzM1g3rrNkJycoXG59DxbZoJqwFyDW9UwmkugsTVS6sSdaoeZyP9fevZqFcNPz1f6PYXBrH8BGSuLNVn3"
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
