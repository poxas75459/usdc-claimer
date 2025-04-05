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
    "3Doq99McwcwAiFFbTGng2wxdxeDGAUXisiCpWF1q6VEQFpzcocpDBB9abmh8Juy3WTJq9pRRx458fwo8RZ8gRb3h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27eo7imEhaBRSbbsrC6EG4xt3mRNU6AJ2rFzmrPxVbomFXxx8njMiGsZregYCF5h2FKFaNftYZbssADZXnGN6eWS",
  "key1": "3FJQ9pzWYHUXP1PNGZgVncY1rdrcVJyWr3TZPtHNQHi3AmSb8iRNuua7ucAiWpfWDiTei5G89YrygadHXQXVN8ix",
  "key2": "5HWWHE8wyT4J2v1QKAKY4a7v8KEvZaEgZpwMTxbDf5kTM7tYbjwDyAkrN1tDHnmx31K8jhndwwyiQPg2ePvhT9MP",
  "key3": "3PACKD9wefgebjsLwy722SB5VFDC7BG4rJ25yA6V3VyaSvHZRBCa1NR4jRgZdNk7MXtEHu6pXRv1RPYExAW8CMn",
  "key4": "5EJj6MjtT3yLW9cJBZNrJUBPpSZZjKFgRzMggo5qpatwxCcasRX9VJJqhpycjsjMp2QDzMaVAqbzwLfbhPoMCidw",
  "key5": "4jLQ1cbHitfosj1uVJ5bKmsA7hVg5KYfF1KmbLWLTiRGnwCTz6yUUi1JNeqFFXGbMHwuq4kVZtBvgPaNneb3a8vR",
  "key6": "4itibBiJMXPn88Ui7bV4fGt8brENjTTVeanLTMuGTgY9KmW9MUrRntkRDzA7aDJc186EpFozJgwmENVCDizFB1nV",
  "key7": "4WiwXLn5fj7SztJkd67eCtxX2hPo3UboKQHpAn1tYHYio1VxEcBV58ng1iVr2X3Useed261xY2nRpt3ceXgCQ1zz",
  "key8": "4R3BoX2eXTB4hihhMcjw1958ebnnACnxqbUzmmgQtMMWCQCbg55XbZdeJYKLRMZzAG4nXnhKvMzmuLU91dMrGWUh",
  "key9": "3sZkcNHpUaw7dqej85skVqKje7bAaJYsn8j5AdMTbkztHoutkeXnEk71TrxqQZzNTXowQo4w9x7CMNeCyBhzekma",
  "key10": "3Mmvd9n8vsf6F2wez9bpDG9GMANABqnGa4dgnnj3NHbneXSEEmkHkeNN6pqXLMNDsuFJqmuzXbcdNGz8WgdRNMfv",
  "key11": "DNjWR2nL3PGsVpe5aJtLmvGpDoKwCWqYrL7WNu3sLxsLsk13LUzFgDACbi6PWVULPhqqHwoqJyxAbh3ZQ23HGSF",
  "key12": "2riCmT13owZEdEDzA3v4TJekY8WHZoh54bq1Fxu7zqXiZPRB71tFTEuvugu8j91cRJW7BM5Xuxh9uzc9xjqjDW5k",
  "key13": "2DuMKSKV1f7z6Zebmt1rFqK3VmvnXKYm9gFYuTnvN8XVwZKgW6peSV1SQE1yZwi5SbC2LCwuLT8ZjqF2gW1sbmBg",
  "key14": "2pCzUi5M7AcBKWtgiFrWFwK19ges63f85baqiA4Ftg3UTJw5bfC6FcWBN4ABqS78C9yBUCKLoyww5veSnKpBktLZ",
  "key15": "54MBf6oVZUQ6sUKbjvC9sQJhqNKtEgF4fL4Jik1iqaHgmjcszmgWa1ghsE1uQxEuPR64XK329UCdELKzoe3zF6dA",
  "key16": "2sHy7qYfudKwpC8ncwuyticx4wtJrdwKTKNegGpjEkn6exEPFX2y8Yqi9rfzTpkemEW6ymwxQiUm1wAXPKBVaCaA",
  "key17": "uGhreGgftWuwkuBGyoV44QhGktGjqctB2XkcEKjBDYRhqsVNpoh53xc6dPSKtZ2SkB445irhuep88xK2QqEqgE6",
  "key18": "5Prp8cUs5ekJEzPdHFKA5URPeExSWTk3qARJNyqfZneYoRTiob4r7UDfCU76JQp3XG7ox7za9bxWMSWkEZAe3V6p",
  "key19": "5aZZ7Hu2QmquQzLA8CdyvGfbSRB1MycKzQkjxTjmKHa54FCWJfc2h4QfZyDEuWpRwMi1ertm24TB7cL27RULz4oU",
  "key20": "2KR2hs5nPbL6dvTaKKXd8nqh5iTfBBem7VezPPr7RPvtqFC9BW1sMF3qr8uwnRxCBjhv6LmXFxsBoRzz4g9cJaCH",
  "key21": "3MC7JDQrsXMWXD1va9c7kXiNxNNZd9rM3DT2MD42zoVMZ1bC2Qg5s4vSrZTqWufntNFdcNtA47EbEB5owbQi9Z1n",
  "key22": "4QK2dZRvLxHbC9bXtptwXQtzcnpt7XSbwmr8K3ZMvSeqDAtuSTk4BYY8SA64EZvBovaq1T7tahHBdrVymbfaStce",
  "key23": "5BbBfcQSSCNez6F7fL7Pptx5bC3whL7KxhXrgxgiCGaERsFJsEFG6TpPT4LyztUPp6W2KvaBLzWt66LFEce5v1Lr",
  "key24": "2PJG34SN7njePzPytzuaxdiRyzfB7QvdpUafvmTMXQ6sJufq1JUANnCr9hLdJ5ze7Q76nLbP6WU2HjAkTZQkYMVk",
  "key25": "5YPvW5vRvsHmsCPcVM1o96qbav77HaGqDwdRmQW7oSaoa7e9MRyWdzJCCJnVfC1wPyTy3WQjm6AW15DvZbYK2wFv",
  "key26": "2vE3eWLKyNC2ytdUsPyHTKScig9thjyNNHQomDCD6Xs4heEk2QNK7oLYP7DV5wP4hcZjC2FtvkkS1fWBKVxAQnn4",
  "key27": "2rXfekecrSsB5gfnArGkEN7cZgDZpxGuPwz6Gp2wHFWfBpN8xCnA7yUpo5RiaBu6zbikNKUXVgnA17owa6tTHRfV",
  "key28": "pHan7G15N6pZFE44hk2ok2GpS9TSdEf39DBNRYnGB6wtLhBMy7SSKnqbnek5eZr1QwU9unHBwu2FXvT5xzstZcv",
  "key29": "5eMQj2EG3jLtYoZKd8eDJbqjn6hJaLK8T3tVvpc2oDcHMeDKASNagsrhzRXDJ1smzEb2n3MEKAXjEeJpGZnsabGA",
  "key30": "44v2LpcmhmDQaBSjPZ2X7H7ozzC2pwfGLDtj4eYjTqtL86QdNM8B4ey43Xc7bXnWwA4b8XtUvXHJNfAMugwoidyW",
  "key31": "2CXsf6QVHpZmHMcQcj6PMXQCPnhcpFfjkgG2gBzzYU4CQ7Y4YYxHcekvf67sGtKYrWKrDhVaPMcjxMu9YtFPqpt8",
  "key32": "4fgJ4VSasQDkWgYavFCDRMWAe62pgrF2dZkT3WeUSgBS3UzPudXB9BAKEiLix8hJeoMB1aNn13kbMjF2j7haFamE",
  "key33": "24wx2UsnF2yVcJQzp9JEQ5q3Du7h5cdbU8eCJT2c6jbJby4pcYSVHAec6dzndWeWLRkLmDzDteHXLh9j9ZUuLFiU",
  "key34": "4hXrxkvBtsnx2aUzHxnjhFLM9ckZj87paZofP73KoRc4miPvhJDHh5mVhdBhXKFP3oKjLSBGbaiEa1mnmcgXs8oC",
  "key35": "Xvuf84TSSPiq9YWo5BLKoUaQGjZdGWsEMSxu3qUNYuYu1UC1tCB3DbqndAoz5sgQ1yTenLFFc3oxi7y5DbNhUs9",
  "key36": "2KuQRVz35rWsArunkhCXWZ4kTvY9JBeXWAx8zsDkRH5ozSnKC3aJT8HMzir7HjYYHunzb37QQRr6Zrk5JLTLycJT"
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
