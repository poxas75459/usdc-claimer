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
    "2n36LTqdgiQbCHQoFMStzk3FF6DbB9U42jChJZzkTB5NZZR1SXypWrMZbL8gTETAFNuLYfRpBzX7mjqL5J5uMJgj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gEyiH48UsA3f7D7LnqvFaJdbaD44wuvRu1AcG2usTxEaqSuAbAS8ETk5RdtSYn5ECS857hdbNCoF5MFhw1jtXNy",
  "key1": "41vFnvBTQDUwrHZe2VStgfdbnYzYEwVbfUyjF8f4VUXA1xMgZ1Bvp99MqMeyM4vubeS5CgthAAPk7QFQ4NqKGbjf",
  "key2": "3vAtKWigLS5jdxX4mUZJe8CAfVm5irjf3fuwehddCiddQfF7WCDdEFUQjCqdhmnuTuw8CZBBFAg1p2htwyirR1hF",
  "key3": "3yWfzBC9XrSwhpKWTqUnf1mxAEArupRoD62cV8PEqQc5SuPutHGDdPQcZuKjn1P1D2QCiwEbwiaf15bUMwAYmMAC",
  "key4": "4dycqF5VnoNLUxW8SQiWLf3dQmeKsN1Yg2iUemH65pAf8abTeAm83AGWiFsVEf9hNphMGizEe2cCpm5qPnRnKDUN",
  "key5": "5e2bkELEDiaFYsHq5a1VRFcpQvXN7pCmKYCEUtZDK8mTAiANYXomiduN6QGXHzrguC8ZcZED9wururEcthALynuC",
  "key6": "5Uv7Rpii1JgENdRuDdHbsydxFdpQYragkuoGHhTZX8hGJRPHAAfZx2jxXYRhP2i259bT76jgo87z5kQYKHCj8gke",
  "key7": "2vrdnJooSUSg3AhNUcynYnN9VmM9RummuSBJgCnKMisHak3HH2wAXy8WPUXSvHmMSAa3m85vtVmJ8do69YZTcnTo",
  "key8": "4gpZcMNJupx21Q1AHEorwnRJnDS5E3iJkjC5dqoLJPcTdqesGZVNSwyQKMNqxVCqjWtjxwiozNssgcXKxqbMx9C2",
  "key9": "4v1qvfR2fxDzUqCyFtc3h5MMHoN4yNkuMy6qhGqdYuAEr9yL8DGvzgMU8b56mcojVwqSMRaBqMGRQfFuugNeXjP5",
  "key10": "5mrd5ELjpGJFWt13XHasAFkTe7TiBhJXHcL2bvd7w92SUySPSmpTj5hDZiWdz4g9uqCHTYHePTVtkDtw6PuX2go3",
  "key11": "tzy1ZnyBekyrBJy1ZKeK4nqbh1AmA65stAmxLpXG4YTRTe8fm2sE3oD8Pf81TEgd6rqNgZnJtt5KmZm3B1YWbD2",
  "key12": "3sCjyaTbZ874xJ1CB6NktHNxumYUBUHXCGhvT6Eo2Uw6AAsAZtHoYGMq3vSaH66EG4RmJbzpcmmhtjAj8EzgFrAS",
  "key13": "2B3ERoetbUbQfv3iC3VTDkpxPKPvHHNmDj242VbCKs2k98rZ2mPDf59M4j2KW2vvdWignjJkfP5Wh4ec1hjRsfjK",
  "key14": "3xxP93duJLiQETs8iNfpVnYXZCZqxFK2DiztmVMhoe8ePZ3ErEagjKCAnFqo44f36cQ2sdCAoYC6sJDbytGCP54n",
  "key15": "3WjqDkUomSMQpawqNmqyCjRc3bK7MhuL9ZFNh7uTcgaobzxrF8ngP6upkUb2tk51NQL6dfvy8TnriHRiWCoKiKgB",
  "key16": "38wqMZf5m1MUduuxbjnZqi5nMbt83RyQaZgb8NeHcxCbwgKUZboExyhsskFjKzt9FJPBqZNkUDcjJdVvcvDzBw9n",
  "key17": "398VeVijXCJ5keTB7gzWTKhPd66KnuDJTbhf77rSbHsCW1KyUTSG7gU71LXxNamZweXuc7xsdK7DC7Bzi1axovGS",
  "key18": "3cJBS3rK8yuzLapgSruqjcNJgLrp2X4r4CUFiSuMZqNXxPb6nMQiEHbNqcQm5t7r7sgSi8cnACYwc17JsAVJDdqV",
  "key19": "2va6rpvZy6HCUzVyTjPZcZPFcvAarzcx28RZKSVhuuWY4iQ9RjaWuG5m98V7CtmJD7ytzrnwdKKL8JHyF7CiWFY5",
  "key20": "3BWFaQDggqYJBaTWSj1kTeiRe6mHCHvMmg1tGvs1pxwTCycxAS825YzDC8VmpmAE5GYfcdJGU9h3x3BTPCPFZtcs",
  "key21": "4jyd89vpWCEkoEDx2fr4TW6Hs7YX1CPLcNeNwP5Z1xvbWfMUwzUfYn1S47mnmRZd3op8ArPen9h5hARnZxhDZ4iT",
  "key22": "ZV3f8am2NASgLRd79C61ziokqjycU9vqLzoSL3ZRWGq1es5jayAmpLbZnk4uz8rLo6eyEDoSHZdPrSYRMsfjsny",
  "key23": "2qhSibKb6o8xsZMQw5yehCVQ3S2KXSDB1CgnKYNLqXmMiQiPDXpNhYGu7xnGV7SNH5WvaaXQDw7qN8jYRKUm6x6M",
  "key24": "4nRNFkfZJE53GUTFoLnLjd3JBqySXmuDRaez5BpByaisHmFHJAkA8KrPk12NfQbjpmhCfMFEDCYvR6giYAKi1uxg",
  "key25": "4rqVHyTqWViM5N8maHVJoVAhgfwGr4iAHeU2oNLDS5HqecBmuJqJkAqj7u1fCiqgSdiBzmXBWGgGXiyqhi1Bkcti",
  "key26": "2fGtWyjQqyuhavmrzPwuXVNvwKWHkRrcHd493Q9qT8rxkGr9cTbqm7DTTV9tGfMyrFZCGsMp12pCVJYqmr7VVpni",
  "key27": "62yayrLkdRxUS73AmiCZiJLhzHDMKgoHXxS5poMGDWC12kiTNonzseVCkjDFJMwzTM1tekUTSYgTi8uLNEbGtw4r",
  "key28": "3wB1xWEBTFTcPUPmKcBzqYNQH16pHLbvvkBGvTT7MPqK49RaKNxPNXMvZMEzHXCmwNnfQ866jRRmdnf2tJkg3kLD",
  "key29": "3ZGsac8FnfzqWDu7V7vzhDSpRg4j5LH43aJRVEpoYP6vT1oZpL7TjEzmEweutmiWQAiPNEBVkLEf4UTpMEWMWiEp",
  "key30": "4YjaVy71vCFwNRMwK9KD6PDTfUBBYF3SRontDTMU7tVHwxbnSDpkzqELRb1w29PEVJ6nADTmrcfeSZzf5hNFmZnM",
  "key31": "eHf2YwQq1CzsKGHFUoMm5shJ1jH49266NCZnThabWNX9ZYkUNSrBw69rQmtq9s8WbptgzUFoispDjQ9dqfd7nCh",
  "key32": "2w5YxzpYXe2mXaWU7YX7vNiaBnxs75QKaKmeEhxdbHQLtxNBtJrKLSKfMEgH6r1DwiMeP7QcX5JjXPxryn3B7Suf",
  "key33": "4Tfwk7AS3qBhgxenGWvZMVrHYZYy4Fe9FZmNnqbWLNAWnwZF3wia9nyvJPxGWTzob8Yxqq5vusdj3Y3aJH52VqUs",
  "key34": "5CNvmEu6q9WcAVo8RpdMjYp93eDP665s2MhDd4D8C8ikbPts2PFSB7L35rqk8JBCbdd2XzZsFz1yQFuyxuKCbs4x",
  "key35": "2cC4GC42qE8tQFDtRHPrh3YrkmY6LvMi17CyM5gQZrs4vFWNQjk9Qj3FZS9LRb23zuUQsroZFN8R1tyQpLacbEYE",
  "key36": "5vhREATYdbYCnqDj5GPPhdBfE9zKtXJLTArDEadj6DJd2QHgT4YzVR24NdoguH89DUsvSgT4Rm6sY63RiUog2k64",
  "key37": "45XkryYvvJE19kw6YWESvJVBkgVqwommuyQ9hu2j7Wd853VHmeJi9KzQLoNpL8CUV6fXjqKBFXksx2TaqX3MSWGU",
  "key38": "b4mCBwS7fS8meBqPQjQ7ZV1UjLhEmvrid2kNQ9JDmKCLzd6wPKUYL6npM7bgyu2DHB6fhjK9wCUgDjjzYPRxPvV",
  "key39": "5Ba6ALcMCw1zMfjJeqs6oZMeRhVw344EvrPSCEMeqLMr21btfWbbqbv12pS14Wacq1kTR7jWJCyW6kTYGkBtJ5xu"
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
