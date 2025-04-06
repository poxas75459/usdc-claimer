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
    "32CQxGhEgcyuCGqWiYUjabqZyjGSpP6Y5D8JF4tq6D18dVSRMpES2Tf7uNbNz9tYwqJWBGvT94cNDLHjw35hdkQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NofEHDB5ozu1ViLpL8WrMKfQNBdohpaRaLV38A6MaLk5oJ51BfrGcwRx7TdnvBgKArUpBChW9b7nAiSheZxuXby",
  "key1": "3w4dtmqfKgK6CG2Pqh9KtuTz4JX4JrhULMvFhqu4Jm35JPrZHL9H8QLiRACfcGrwnLQS6gRMJTpaKFWYJ1h66bSd",
  "key2": "4x5EsqfViMTeRib46D6bs9Nto8EgauPJYP6aBa75TPxsxqU923NM6ve72uHCEvJjd5jhuKGiBQBFWeMcR6A4582y",
  "key3": "5VdJci9YqYNJBZCkuBt7wFKdD41mHpHcz43JLp1HzV9iDEGjoZy4LNxL7M2o5RU6r2yip3m1NtcBkqz9svSBzL2u",
  "key4": "3SQcRYp9LJr66AP3Cdp35B18Am93cNcvf8UHxhnPfqkyw5eGmvV7K2HouruzcYLKzQ6t78wTNrVHoUaBdd2vQtPt",
  "key5": "3XKkJepCBDu8wkPTD3mjqfZ4JpPxUTDoBv9wp7G57ZWGmnxnT23yJvYsVAmN34gYVTGd5NA4EPepJfTJXgxrzYjJ",
  "key6": "61dmscdfUeWatZhRxZkDph12RY7TwHNYqh81kTarHM9aBkaN6xKvNHepetBho7wFSDCLYLoQbe2w54iFEhoHz6eQ",
  "key7": "ADMiXobeK6zy53R1Bf6cXYE8DFJyX7i6wCecYj91Dqhu64FLUdWH6Tj4LLXaB3mm33JodEUjXoxXkpNefri9tbe",
  "key8": "pkUnH5jJAYviDiDwfMyRgckGn6eZ2uadTzLk9TPPBTPDQQBxCZoANryFdUWCecdsQ5VQgVgUjAK7Dhc18YtqjtC",
  "key9": "hVvoHXtrVXEhSs2PejPVPyjt7oKwotYWN2D4HoQLiaV86x15o4iPxnKanZA3tS5AEQeRrcmwsoidgBez4Rz8oPG",
  "key10": "MeSWSL7v8ew77SJwMUaRi7ZBhUcQxJmW36Z6oCnJHKt1QM7pRTjZFWVCg6gKHopx53HdKeTMWk226RT3vFCd2iu",
  "key11": "3z3yFwJpZTVV3pdX8RHRbPqHWXeUWvLmkjDpMHeVeY7zSYTo8C6YCE7ahPyMPNLhJzVfETKL71Ror46sWaHXBnpN",
  "key12": "2MSd1RbaqNQ7nFe8e5B9XYayzPRCYYMhwMdv4Vz37iiqiCyL2htG85ggCnAkJawzmDDwusBdGMC1HuB9a5ZwxyBk",
  "key13": "5UYpNd9irbFDvJB3b8vYevrtoDMhKSL8adrLEgdt4thHiw2Cz8BVKiHaMH2YtdeDFZeFp3zgsD5gySE94GcvbaM1",
  "key14": "5czQ6sTbmCjHFnzAHxC8aEHMJaYDaf4219x7zJcxGRieQfJ5fwCFTyPMFRoDwtX2LjCtBkuQtiHa65ifwaAJnLA9",
  "key15": "2xkJeqEuATEdHt4tJ8sLYJPw3whkYSXdGRzW9HDVwH5f6itmTw775nSCHx7GiPNWw2ymu8mNfPw2tifSxth8uT2X",
  "key16": "43mFUMNt5TudaEd6HNWjpCxWefurUmj22yeuRNmAv74DkZAnkALupQ4DThf1PNQbeM9FVyrNT9Z4Xrz8FWiTELU4",
  "key17": "zcM4NiPtQryD7vjHVmQAuLRhG2t8t4bLFb9QCMStRabKLRAGMYe23bB6tafaCwwTi6cjQMrj4FucYjFoch5MvLN",
  "key18": "4zKnJgQiqG6jBwFPiW3RBmhiE2Tss9JjqRaYxVNwsonbmmtGRtozgW23WVSQTepbciDRQpGTrFbzwZNJYC3wvK5E",
  "key19": "2sxzxkA8hQv6PmtfY291CdWLEC3UTkwq2KbPA1qybnKBP81ymZjsynypFHSFjz5BkGf7aoNuor1DTg4AubrVYdyo",
  "key20": "3JiPKLHKMtkG6YQC38fJDee12yQNn6pqwVeVZf2AwgZxsPFSdZt2T3WkQU3RWpG5EPycDbgvhUzDU3Usa2f1kBuE",
  "key21": "55dt5dMH1d3av95oMEqGEPvQZyrrvkrGbN4K3cxPcFhtXbU1VKkffoWm64Dis7WjWVw6vmiY8HQybr183QzsK2va",
  "key22": "49DFKX8DxvCVFjRV2Yp238sDcsuDrRLDVqDnYMB9s4LHEyji6jqgrAFvuYfeoraUJJxK7eNW3QAnmbZFx7by2eCQ",
  "key23": "4x5s6xaRegmhAdgU1TH684BAq4R81TP28vw4gwWeVhYXX1V4aFFYnR7Vu6WuBHaWEurRfgbSrFBytmTvXzLXwf5g",
  "key24": "2XubPt6tjUTmHvyqKcukya69S18u9DuZSLBoWGEN7dacbzVEALYDEw4nSJQbhNAsknPYQ8JaVJ6SoQtX7uw73GaU",
  "key25": "2a3MLsSVyA1cdy35YpyZwPw7tJhkBvuqi4uSvEdo4j9eozeqgTL3PsQkadMU1vSTMBiHdx8B3PzVfU9AF46ApwnK",
  "key26": "3xrL5LjyWqvpEpytuPaWAhRebEnyTupViVvSYFUjqeNooS24M2qRbDTnkgvJzYQV9xjXWVqxuJ43j1ygpUALLBHP",
  "key27": "2JD5Byec4et3ybvt5sbipmJ2vkEQgQvo4t8mZ3tDqhR6wX31py57GjPBWxQcXiQQfjp79kNQxrhqjsUc3Are8Ey6",
  "key28": "ta48459dXmWV6FEj7JNS9yEaZGugNC34Hb8xA2ZwVsTB7jNnBWMbaN33f9dR1ibYn8U1cbpBfUFeR7Rg8NErSfB",
  "key29": "4F7oyFmoDN8XvJ4cVApCbzDBkzhFK2Fp2T4W9EnSWXR9cpV6tkEQDEfupFh4WoqaVz8HjMj2sa2wwH8BaqDyMCcv",
  "key30": "2sCxmJo2d7ZujrmgqAbwbCGfNZG8vpxyu2jfK6s9vCG1YhaMY4EG3PZX2zeQmGoWAndVgaFT4oJWhh2R31tP4Tgn",
  "key31": "28BN25UEo4BgAkhYQ79QKEXKSBgPFGgPELMyT78tQj23bZaDY7y5eDDvtHHa7ortBL1Ak5N7om5EKKQJAJFMvFKy",
  "key32": "5MrXk7ycikHSfHHxsimtjnqAoHHSaiXtsfy1Q6PQbWLYBRxCyVPzesD5XxrjpHQZ5iNehxoZSNg4DbAfFPxifsnC",
  "key33": "65hTnK2B3EQdKjaNjNqQvySpDYaZwtRdHGLK2ud8po5K8QophommwVmAdDZZj4gMRyS6gTg7gNwP5pMUDuXUYeYU",
  "key34": "4zj7PJiBdMDTQDKHvz5ZR5BXKvYkKnqrYgJ31iPgVPC4K6Xvsj8aY81yYc49nJb9EnuLr7FbqPDEXH4Q9JCzwWjr",
  "key35": "4JC7prPHvJhgX1QbwhTNwDhrDEDSyQwcd8zLnWNnLCz97Lte3qSQfg3HkvGxZ3YduMcVJuvoiZPfQRrmqhZ11F9o",
  "key36": "2xKebcmugstZuAaV18rLuvKWS66fb5HPdTTW37u7oSeorKicCKDWYF1mGrLzqANxPkp6DkjgHdKD6PJx7ccR9Kdr",
  "key37": "47mS8tLmwGN9zu4A28NLMu1xwFSNcV6q59y44VVas2ihk44LoEMukd4DFAaheewX9kvS3sBYjrEdfAsaG3PVzvsY",
  "key38": "eTfSDtpQ4kypgT42E62MHEPqXFFRMvwLeALGVnpE5KZsSHUaMe4uxXcvEeZRXUpcJZbBqHx5tTr6fhzhanr4Xop",
  "key39": "3EBN6CyJK5GEPrZojcE48v2DQogagTbEs499oRpqG5eDkLgL4vXmNPjiJo4YhpMSR5vPKWjNMo63ZP4dRtoZCuC2",
  "key40": "4VNFNsqARwLBr86zTWyPiKfLe8iHBcKfPJwwoNKUGDLk3BY5FTymvjm7Xr2r8L4mJXQtjUL8r5r8zfFr8cnRwovE",
  "key41": "4AaTK6dPPzjgNHw2YT7uYfXP9FgVFhi5212L6WtyT9DZWAAXdjiqy7jmKvjFVM6x1acVGc5wbxFUbkapVfzjwYHo",
  "key42": "5VNUxJmRrb31GfEzveB8s51SsC5aEjHi4JMTzVhcFYivtP6Vyx3gzdBhW9Y8UWUS9jS1ciGmrTV6kDHsxLnzQbDf",
  "key43": "2jDPjp4jCRqjcqooFim5V7RfoMgoW31VcXKrcGvkDkJhBirFfVVLUehdmcpom4VBhvChkkyupSq6prFmJLC8WkFk",
  "key44": "2ekFfawoMN9ecnLPuFyhqH8cbuWEkaJ3xn5Np84WpUPLK3ohLiVLLaz6nnXpqkSkUgsFbciJAy5G9qcfy61Rzk2s",
  "key45": "BHB8dVPdt5rvGjYbLXU4k42ntfv1vVbeASDc5jh8VbthkGP2v2Rdg9pDsxw2hoFebgKr8jQLcwV7xMhb9pWbqEq"
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
