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
    "3Bsny1TpjX4GUHW3TW61AbRByKf5FG4YQvGQiuPVzBt2TSMJjEMDR6Xjzr4LTMLR9ifKVm9N1uj9SKDFvfM4Ek4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hcgJ3HeDynVUJg4BmxLuAPophXajjTmUwt73hi7Yxm6BJzE5jebr9Tmx2zAdzLEjt3N4qqdLzgGLVZBt3YxQkiv",
  "key1": "2XjXPKTjSV7hDbU3wyqDXxx5tTG9ssq662aSG2ocj8Nfi96Q92Hd7aTmucdwBZBxW6UBt5ryQS616ogeZ4UQs5gQ",
  "key2": "2rNj1KNTaAA6AfqFk278X4daMEPe8GJ7RVHvJyKumgVGMvmA1XHH11y1mo32ivK4ZxSHaEPCYkkNAt7J7iZUTbKx",
  "key3": "3KxDzjRBrPwTPhHBdtemwssMs11hjXQdR6NhdziNWmFweKSwtfBz5iePYuYmBQYzPo3oUkRNjSSFctg4mcZwq6ae",
  "key4": "4NXZ2VkzdWiW9moMPXusCrCkRJSv7UPV2zByrZC8CXPHraeQ8botUHBwqss5ESDJmfh4QtLiJc9DT7GSkqV4cXWu",
  "key5": "draF8Nnk3wCLTQxN6qJdnjyDRZ31uNrsbJppMNJDJBkNjSbUDCquJ8fPdcgVm3XiY8fZXymm8R2dtnwJn1Fd59k",
  "key6": "3yC1Z52TdBaFnq57Vz9NsotNEXSdP68BGqgMnR7w4QEtkbnQVMbo33fqG5eRNLeiprzwuMK1qSiC6KogLjq2JFuc",
  "key7": "28paQaNyKWpYC1rn2Gg1jw15bQ52tAjhhLwqmRnnR7scU3CnzR3hDwtGHLUfn32pVirwKY3NcHFycD69ksNrLyDP",
  "key8": "27KR4Z57PT57fWXWhu7nLHEzbAsCvr1A14mQavEnSkzL4cavtsXaN8PGAemxj87fKRZkypXzWne6prZjHEMbd7s9",
  "key9": "3gG3G4vfMx6bgbXWNeMPLjbE3pkRDXzGrE9tKfH74oQVd2WHru5ofsBSpfQZETx1a2ywJy9YX5nSnwouuxCj1Pe5",
  "key10": "WpjAaT5iCBbnmHPaP9DYM7jsF28tDbxwARa34jLXC1ZyGjbFnU1T4pCjVV3iWbA5xaUSXUpUJ7Sco6eDcVa35SG",
  "key11": "5nVCe7jt5k9CmBTWHNcbG2YmYjpcAZAwGkmPGSmgpmjz25NRLK15nznak814DsvMW1UFhDHn9z9SvKLkna56Ryuu",
  "key12": "5SutmXR2jfrXPBAwrqwiZxCLPMFJ8zLZJARK5g4mQgicRv3gieH29bwughFJs4JTi1DP5m5j5rnXdYfzTyHZjgxu",
  "key13": "5Ym1yfmihhrz2zqJcAUnoRhJzu7KRc9Cz3cY1W2obUoAXZrFWtQWKJbNzZRfP4uscV9ZyQgGiNxPf2GCnSQ2GWN2",
  "key14": "efh6cp2BciwYbHTrQyu39hK8AzP4mUtLUUoj2vnTvzVuunu8wVntrHV74eTruM1WzpVBNXHF4WA4HHjhK8XCej5",
  "key15": "3bWDVXLjR2FiQovaR1y36twxyt8nZ6ZbhJyNjLKvif6syrFhhNkxpBb8yRVdkbu4mhdVDUb7NudTsE9zUrz6FJ1s",
  "key16": "zW9pKaQREmPdzXFfz3NJL2WqHkanaZQXBNMqBruwe1mu4nzzNTC2KWqg461BBHtbvDCUJdEtg4D3izw5pDJgy6j",
  "key17": "564vXmXY5XYpJL3KcsbbrzuJRhH1vQCn63spJDj7tLxMLR5ACKxLbBzc6M9BFKjbaKHqagf9Fm2RgogHxCtkmfZE",
  "key18": "4xCWitvWKobYqx1a1KNNedGGsrMWxCpmnLXS9YNe351vP1A9LAYXSeTQYKQy6SpjYYdkDNhxiQP3S4Pr9NMaq7mo",
  "key19": "ey4mCBkf2XH7qsxhmLSWEZx9pcGYvo7qY94WMjzq4HtLG1B5hBtz9PZ2kvGFGe6ud7mwgvQXUsoqnpvY43n7zah",
  "key20": "XcCNfbNYpgkBWWf2XrVxuP3X1xxxdBJTZCFCuzh6zbmgr2ZiC89LzYKifrNwisuhDwXJUZeNCV7AzgoYehFFPb1",
  "key21": "QXrpigkTuWCjuofuTqTWcjFFRiqhFQ7TobTUhVSfURWfcRhMSd1LwkMjmfjiUE8YEPJ1hGppfL6xXC98kz9DYQL",
  "key22": "5dBsohk9sD7AVQW7yTEZMZc4ZH5JgyU9UiHsFxb3ScbDWSUcSpBbjX64xVbLD236Eb3Ny31DahkmkdHhCq6NQxKN",
  "key23": "3PkQegHECDUcWyknaU4KzhBcdKfsnJ6hhKujL6M9wo6y7iPDeM3emkSV8MB6t9dM1SRvRdCAqFNGFxVgwAxprYhV",
  "key24": "5xvvZsEeTpDDFC45CnU6hWkwgvYpfS3qX49PHcDkJ79UTRng4sMP7hTd7hnKSkcrFAX2gm8vwGHtECzXQQTtjRSS",
  "key25": "iVetUQT9EAT5Gf5TxZVvXiYSqNDiK5MAb6GHBQLMHFtgz8fAHwF2JpFdHy1NDTty3FpQHfGToZhTDrStHNPaaqn",
  "key26": "3Buk9jxawrnmnCxoVHVXBH1S4f3YVJbAWxJgsz83nk5y4zz3WVmMvaZiD9oP36WAnzaUDTZ2o5jrH16Cu4xygsA5",
  "key27": "5dka4JZDxqoqCgu1DSVzo7u3YQ7ak3fAmhEfzHNFL4eNP4PmdXZWEcRXsYGHo6rrrxkzqFYhJwYaV5SfZZhbdaWC",
  "key28": "TLbj8hJPacxgvBSQN15GMvAFYeLwPEyW8NNZ9aCV3BSj9iJ2KSCCkbsgw8e74S8DFa9BjF2wYyE9kkfKCFTsnhu",
  "key29": "2EyKKBmCwKTsqpCx5BzSkzAcrxmF1rUTwBoLWFkikK2NNQpQDVHxnLRtdGqrfmUqJK3gUs5RSQPmx7Jjazos4p6t",
  "key30": "s26imb2GYGDzUWJmmCYsQTFsvB4ex4qMT1Ey6n9GY7yTv6LRGDR8maPWZtgrZ72zXQr8eDyuNd4io9Sr7Tt4tW4",
  "key31": "2JsPvHb6yPUAf6qYhZC51Zgnj9inbuhkfBm1SJBSj1m5PksiBH89SA93eBVBsuGM4hi5UnDi2qUpYX2Q2AMGJEDM",
  "key32": "5Wwk6mWdVRn9spmYJXVW5DusovhSu1f15dVzc9hZ7dvjq9KdJK9HYYXAJytZyvdfL9fyBQwHvJDodHXRYXCjtq4Q",
  "key33": "5P17YKq3uzJH4AcRb1XSB2xYd1vRjdwPy8oCcWUUWuMT5oBnzGK3LkMDar6Ufx91y6s956yccksxgSn4LDYNHVvF",
  "key34": "3697GG2PthpmJfcJSoA4Romhtp9K2VsmAo4rY1cnzspD97kTT2fkYnKCo2SwBbPmTwcN328JjA4CkjfZCDVrV5i7",
  "key35": "4wqqwNqXDBtr3ocdh8VHm2HKpqxdv13eQUj3AnboYU5uUcXDrWeuBUMYvPdrYyhYyv62igGAgwe9pWPLqerQC7Tt",
  "key36": "5KrH2YJArmkkcyGbs9P4HpmH3VPBY1T955bw5xk2g5DVn29imMxZve9Lee2iEajHeEHA2YDCRy3B1XtneTRAai6X",
  "key37": "5HYRnoBDUyBjzCzyUaytRrSWYYf5uFsiYw1D8TGgLYbEaUXdSAhmS9TMMeEg1S7crBLSMhacpWUc5KUQbeWZ2wHT",
  "key38": "fUePKzTnZEhDDwHKAGJYjtXe4Q83ZvoyjWuP3ofXz1r2c4LueZo6g3ewJTCbZtqCruaSTdzU2KzDG9Ad41gFzrA",
  "key39": "57vA1ZrX1dKa2ssRQTWFGBv9Ct36BZNugNPjYsySr8QyM6imhQmHqEWJbDVhVaPJQyTi3nyT7MzTh2tTr2T1TMwQ",
  "key40": "4ovtKwwCtU6pqAWMKKxyjSgpXx9i1fxgcQ2rVEyXmqXUMKEMo9NVZj9o2ciFLrYYZgpgjwGK2Ukz8j95nKn451ME",
  "key41": "5kXKayQpAQduH2VBuSioiywUySbS4xhRTb3gWuae7acXXQHzRTTw3B6my2yR1agVxCbkLXuseAKDNz2xtnjE8atH",
  "key42": "51fpBcwPXfnYLacY8JnYQbEyJiFTbHxwxwbo7NtL1rdHixHiggeeDzukU2q4WVnyzgaFNwvmVeSHvnawggXJUmN7",
  "key43": "4GkrRPTut1S6KB9u5k2hn8APCFPP8rvu7R5C8k3FryuZAGThABdarVwtkgKZmmGXuUehPYxVcEkt8NvzXkFmgCKS",
  "key44": "5jan1kQuqJEW8ddChpBx4AxoQ8MLaUjsZaTRPjCFuM1xHFmA3gbtqqhG8mggmpv7ZtZbRpvUMczUpFrGTPRucDSA"
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
