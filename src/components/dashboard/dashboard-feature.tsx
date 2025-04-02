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
    "4sowuCoUyprmtDcGo6AAXzAZrKABGhmiV5wXoJ8BfHib5KzBSQwGdCZXFUnfXR2daEed7LG4auGjtCWwPc8aVKhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dDUtZ444irdAcNpXGfC8JDC8S9UkxV8VvVS7bb68VjoHqC637Jyu2GebDq2jrxbiTZPZydcasyT5m5MiD5tEWGV",
  "key1": "tFsvie131K7v3SMHqBSudktWuL7mXWdr8VRn1UbFwCfPynDTCg5rxHqJWHjsp4mpxPrEbSfeWPQ6UqGF749KYnn",
  "key2": "5VfW1EHibMz2nx2W4vWqmGBoQS4Cc2tpcs34hcgF9MZAvs9XQuySzgyukc5Ukaujsbw3HhSJwvkc58da466MBkyB",
  "key3": "fACWinWyLnvxEm1WzU9AsLEhb5aEW3YxfXfHk8oqEqUXex1mPNaeuHckEoNw3SQLidu6sLEkApFpXqsnPXpJM6j",
  "key4": "4iLTzhitfuG46KiMPFm4W7oTtapipHqboTiLCqpukwaSjD9pr2F82h5fhUnVHmPAjp7Qh2Wg1heQwuWruvabZmzA",
  "key5": "8kK1eUUKyz5SrZXcPMn6MrhWdteLiUXj47V9e2saNWeTtvjnjD4Q96Upckq8v5Loigd9rVbkNrA9CcpShX7gXcp",
  "key6": "3oELcRfX8zoeFwBzbr1qqFDJ3UcUyMMm8iYRj6uJWCrK4DHCfM2UiMD4sq3ADofWa5nM1Px4DuzCDEVmDFe18Mgz",
  "key7": "3AqrrP2Dt9JnZpqxZ8s3rCNnyXYqHDWRYvdv5UYzrXaQ2neogEV9yJjehEoQxhNqYRSkKWhEiT86JUU4G5MibBZY",
  "key8": "UmmB5syQs4bhKJM5hRJaAhnGuxMcef4p5bdAH15EBLZz7UjJmwSdfh3HMB5mXB39Bw22gJjWP8NhkiVquwTwTqp",
  "key9": "4T5oabtpKL8Fbweg7iHJTuoKFkKmyip3ycH9jfNSU6oMviyafBNtMpFeazkyQVtFC7KF4xG5xDcaNvppkQGvi9d8",
  "key10": "29QmnWcnEB14SHZ1qy85Bitkj36YkuBqAQGPafeahPRfRMQEWhb8KCNEzGqPef2tKQ7ZoivExaWydzP8DCwdqynT",
  "key11": "5x2zubSQKRipux1iwRws3VKDjxJCtPccYHBsm4Nd9feuKt2e9dDFKtmUAJvFXPyRxF79UY5tgA7Pnyje2e4rZkdc",
  "key12": "33NH2F5zt7QerA7ATDtPfmtTwHaTTGiqy6tTzRPXkWMYWt8Uxcw7R9db2YqgeCJQnTx2m5MZUpq7gWMNS5PCBeby",
  "key13": "2PVhARM2XJDsajskrQ9ei8nJQ3svUrEJu8mF9Y5SWLnNiZKAhKirFfQtpLuAK1kiESFEF68o8GbBzBsGivCvcSEP",
  "key14": "5RrZonP3eYtAwjgJZ3vphZbxy2BaNDncELLxciYGgtTQt2B6JEb3HfBkNZfKtGS5GAbY1YYnfphrVid2ozfcnVaK",
  "key15": "2srE48eRFTKFLdXegpomi3rNUTfWJt4vUp6tyUPQeXtc3jXVuTvdvz28mRZpnk7qSY1PqM42tgUZnWrDrHxMBNEp",
  "key16": "TSAiT4TyBeXmHNMcsyM9cj7GV7FsWpaTApQdjSAb8nyNLxD3ewWoA4mKcxkZeBeMW8Z3ZzhM4n2GdiNME77znCs",
  "key17": "36yJwrvMHWbfcfwEgSDhZJysHn7PLE78zYH8JVYYyPAB8u67TR5jNqCRkPUXLfqxFUhWGzinPbnY8uFWYnUM12Wx",
  "key18": "3t6ZSLevJj3cUD6dUpxLB17FcCZab96M2HMLTgpGoAA4pMMzchJgLGwEC8k6j8Qt3fcNs2q2p9rHLK1ZeUWCqUL3",
  "key19": "4ngceenXuhBPSzoYETw25qSBD7eyHC3NuEizQehed4c7B6pcdMA3o4YGErWP4ancuHJgHpAVkpH5hWCNSXmHqAAv",
  "key20": "2RmgUx826Fkr8nYWt5pQGTe38kQurDCk4mGjhGTp5ZvEUUgx2X2g6axV5Sbo2Lpbst3k7Gmc8831SZEnJvk7QvNc",
  "key21": "ncL99jb9ouEL6FvgNHfLq8ACZLfKCzcH6aL1yLrgmYSmgjLQ1jMRN6qpzZ8koQaCcoubipbACiQwVu6sue12enQ",
  "key22": "bKJgyVn9EyUJTBcz2NuTBeFL9bpYcJDfqE9N38M5oXeTJMoLKLMZyfxuqSNLEz4rUYSa64rSE5TUoyCSAG932Tn",
  "key23": "U7RVkeU3HGEHS29bXpE9YQtHksGjogh6rUezaLiuBdqAA9jmAmEML5JUgRPkTg8QYkKkm9zGfBm4AEWUvkh26Ch",
  "key24": "4WWkR5LTAd3iB4no5UEnZumvMuVWwdxRAg7hUC55a7Sqpag2RYfdV6MAwi1WsYQQJ3RQXrk3vUYyQZbtm19Y6DM7",
  "key25": "4rVw3dAhBYx47AgvtEKybBZh53BASHpWCva4cjwsjr9n9RiWqaPs9ZusTLiDfbh5RzT91j3NXhQKo89pXNuesM5F",
  "key26": "5gA4FNiYHzf85iaLtU6WY96V88e3hu34QcGWCozq3PCp9YYzTkfaZtRgadSku6jPbuGZ2AfPeGfhT4JZXbbxKV9Y",
  "key27": "2KXfmzVDYMxsjagbSFzvRrMPhdVR5Ev7aqrPPAuxobSLNkMBBqTT2QxCshMDfUSeNMQq9HTZtNDJg51QiUqWFb9S",
  "key28": "2SDCsYEnwiaRt1ibhj6kVwQos46vvdQXRDNFXc9MCFCZvYjJggvUop6oKCory8bNbipuwtSpw1BNTqMa2ubuEJS",
  "key29": "3g8szVg139tkVdg56KKPCxxXdvKHs3tf3hx1gaH6StTBw7v2HTqsXCT3wDyxwjE7NQech5sJ91m2MN1RJKMnrbF1",
  "key30": "CWdgiWoYXMa8SSdT1bPT7Rs4Z3X26nuadKrG5uaN6Mxrr3hf1T4z6Zt1SddE2NUXS9Hcm8iHGWp89fvnx5JsKdY",
  "key31": "4mZciKQFYfQ11FrMWGonubbGu6JnmEo9xipotrxVvs71rLp2Sc7K6ZswstfT1qdubUgkaTuCqSCfDe5Da5i4fAri",
  "key32": "dHd3fLDA2QEu9HGfcK8uicHZQ89fHWwWfAvsLTDcikyBA46FsR57K6vrnEor39JgCnCkJ7r4RwjecA6z7qjGpPE",
  "key33": "3q6oZEUZJFwbVZWoaJFGpjah2XZbsXRLiHbm2tYqoWbkd6xtdHJ9uft1PKBHHYLoEZ3bgCNhzr3YmNCdNz8Bx6Y2",
  "key34": "5gmrX8NQS3A5KxdueEf8umsj39ddFxTBfMjZu9ZG6it9eHa4Z9o8qhg5442H3XcpKDCyZEGVovgSfiU4BBsQsWmQ",
  "key35": "5nuc5ezvJLvzpThWgqqMoyCMTmJ219rFt16iwMo2SELpJfCqwSerP61CcJ4ZZConU9MqHdfHmNwDtAPwuginRpmX",
  "key36": "2ZNT3d4LjsFjpoTMf56muUvCwLoDj2SsYzAGHuGv33WcovagBZ2aNEgj9xQozaUMwfuf6CQs2A8HJx5JKgGBSpZt",
  "key37": "2QTy2ocrccXntLerjAUEUDsGw433uFGNyVtYPMhoz5CBXGFCXmSc8sGsp33StwFJdH2oQxeAVMyFozHGqJt5Le2N",
  "key38": "5KX42TdBhAcvVgpMwmKjdcB4UKwH9fQVNJFjCR4P6JZ4omz36cENwLWGcbdvaKjD1Q6bRZvYDzYRjRnx7QCvdLsL",
  "key39": "57vbAacQQZsz2iyqebKyaEfXY2bppQuQx4NRhEmQjVCGCSx14E3rcRiJZwoKBJeQxLK5Z74dXiVq5teSVwucv6n5",
  "key40": "KAaMfKrUFkwkpnsTspR9vVcCEfXHe2QBAn41fMsS9B1dqCaKvHyGhBTY8BVnpSLNuKanX993d5BN7916yLjvhv1",
  "key41": "2BFpofb9wR2UtvyGkFSRu5dU1NXUzJ9YPdhaWF1X4nLC4LqePExSHBSqLxN5hBhKNwqqWobT5ULxQYLLoyYQxBbn",
  "key42": "WGnwyrKB36PNeogVQsYUvTgneaQ13p4D4aTvietZe6WtqvdrsadCEZZoo1xgGyVDszicgaznM2m2f7pSFP8Bzp3",
  "key43": "2DxEfEMZawjF4QwG8icG1kme49oCeH5gQFSibz2aDZJtMy3kMGpKMPYFBaUh9PazcmoQ9bzD1DevWojxjb6dAMiC"
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
