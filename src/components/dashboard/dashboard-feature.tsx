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
    "3dfJKhxaPUNbotPwCsuUTr77PYtLgjPmHz1JviTfUbZqrtsUh5s47V3Ev6EV38bzXyS1z7VwWRBvNjCQJmKJtqva"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GsS6f5uRTEw1pKLDpo4SozhXzRvmNP2oYNa6tt6v3Eh5TY4KfdFhidV3CygtkkXXsiPHNeg8nvRsy5HKZuWLmAZ",
  "key1": "2Dj8w7gbRyvyAhh1qsNcc3NNyLmAuBQopZERsyFp9bfczBXJ9Xh965vKpUPcQ1DQn5QJmbmZKUisCciGZqQWZeR3",
  "key2": "2zPFKpzN2ycwVg793UZ5r3iA25Yaa6WYbiSofy1oLqyYMABHTwJxsu1mY4N1JnAx2KSvSKs5VemYLgdbB2GQhc8r",
  "key3": "5FcUeCZYs8AeQV9tbR6oGZtKa6YUgRDsLeaDfj7x7axc2grgdcB8yBQqcBcGEvMwKMz32t8ZQ19SyeTyhESNTExz",
  "key4": "4iaReEeqjUR5eQkhaAPvjga3Ci2azXAR9pBFdKwN5GtNkW9r9o7NnkXDS2TFf4rSVZiQZZD9QZRBAvHBNYkDN584",
  "key5": "3WWa23epSTQGCz5X4j38GM49msJw8qM2CBmVKd7WaukPhjCvGN1BCyiPWj5ohycy6V7QnkzQ6fF1SpGFxyKYryZR",
  "key6": "3W4TYnK53W523jXA8PjM9ppGPKG3LZzv6WM8KRJDonVG1KR5TyWtdmNsvicFazWy31bkuujNitr9tNpjXfJdyJyd",
  "key7": "35WGtD7ruEiY2ySpRUQCoHby7YBtP314MWYEaoE3Yz2AqrVhCdEvNvKaZekW5dwneYuDTPzhaK88E2V4ivR5FBQ1",
  "key8": "oGhfmAaoMEyASdTbRnKqWoiFU1UZ6DaqgNkuDrEup8ipBdtkxAoEqHEKiZx9xPVRg45i1HVQyJd33CB8MZyFHyq",
  "key9": "5aGt7ba9SZp7RSGdecAzSKk7cVj5iGxm7hYY1AiaMVteYhVp4SwSxNnA7cWh7tLJuG9rUpDUA4oiQc5D2nLPJCec",
  "key10": "31fWur4x5j7drPtJGucWEXs8Kp7kvMeKHUuYzyUgqFPoFz5nQzpqzP7ZzsF6xBEewqRBzvL4KRqCwvMEFgmcE9sD",
  "key11": "Xz5AK2SK1iqjbZz8jvCioxtwRdjS4ZdUnzDmQd6ritVKiMV2pZLuLnkwdSyisPs1jYPwFJ82JqHSy9vqZDJsMz1",
  "key12": "4vmV3RdBCv85a9MdXvqAf1qF4Vkq1omQ5uJzZWyq1jfmXU2EiutuctYGfTZVWcCNUPWZk3a3qhCyxBHJEjRuqoA1",
  "key13": "5JV8WLAzMPcvg3J6w6p1ezDmmq7mfD75dUzXiw7J2b9ag8jGvwFFeMwV9nqMViLCWTmNjcFSuzLXi79uJVjf5YwT",
  "key14": "SbH91ZNazKseswayyUJPr8NbrvcbJ41KTaooG9xG31RKagHcYsTyE3yNphY2e3D52RCqdw5GcnYUaFPL5ya5Mef",
  "key15": "5wN5r4pCeDU6d3mnCbPTA5BHW7WmfvpoRRNQvfzN8kpFxRQsnTrZRzXGhnLt3axUK1ek3WKANUAEwU5hW4mRJsFj",
  "key16": "5J4ZXDaKAM8iGkKTnKy99sd2BQSf4LKT1qsCKy2zSG5VLLDab6YsWpZS1bfNRggyRiC1U5tNmcY5YJy9KfjAH6Mu",
  "key17": "Eb1SX1JbGzfN8e9oipmqefji6spDKfeJh9sD55oFf9BnNSeZQs56kq5ojRpYLLp94fVr7p4DPagSbZm8e11KxGF",
  "key18": "4sehdBD5nFZMo8ZBJG4T2gQYDxwJSLLRSsu3PJnQ3gXQKufDdeZQTHeLRZLUHYMoEAPNVwgoxz4eT52CtEBwD6oT",
  "key19": "dzktef1KrjKBq6PtdicUQuE31nYUjenvwpachcSqmafNREBjMt7hi41UtQ3HLGfZvhQH6cPsBuJ4qgzzXeKeJm2",
  "key20": "3fqquNsGCGN5apRjvzTKU35otbwPdaWUYT3GDa4vMr2sCURb76iH4ytp1WJyMrnEro9bLC5mF9SvaeaPZQtMM1qU",
  "key21": "3i8GwP7uAB9mwgpaVn5WEUnDx47ouGAPHdiUkqTKZyTKEPobc9VK7kthu5aAdc7gHQksNackQX6fdoRD16MyXdvF",
  "key22": "2QuvtXVqSouahp4YZqHQAY1TMkC1ABav7fFvAXHe7gxKXWZfW1NpfQbNfxVhRhdQmARUz1zRopFq6Pad4ieyisVK",
  "key23": "4o3je33Rpin54RNNwR6NTTEBJc5S1s5YxiNbms4EKsQmcRDpoXL1hGsMzU8ooVNtRPnNihu6YP99U1WgHJzXKQxb",
  "key24": "3U13ABSGYtzP262JaWkZxpedsnQ2QVjd8eaG3Y219LyWttPknGv47F7cSw1SWzyMCpEBrtwqPDy2b9AHDpsMGXnY",
  "key25": "2STBM6RK1eHtxzRSuZ2f4ebxXrEQPuBKG3VyGPfJAPEmAmQPdxMGWtMFD87T98Ke1TzypBhsiXzukPdvtpyYKMGt",
  "key26": "2NdQgPY4hTb6nUZveMFALEAF57UPGiXVd9PTszXAmVoE2FinhCzTvqcfgf8Thgv2JqpWeY2Aj7xjYGcTTmUMH5zN",
  "key27": "rvgr73JiG7XU1VP9xY13d6VxPKMkGt5sCYcsKtBL2Uf4tDKbjMoP2mhoCAY3byNC7Swk7atJcJtvXub1M4bYpp4",
  "key28": "4svqmRJdkcuCWN1TXeDNwLcTXMfZMXtmtS1BZDaKLW6WMCSc3H3EMxhwtBajqqtgegXMCZJhJRCgsYrzkUxTUHmK",
  "key29": "GU7Bw5d5t7WPnkETxjnTCmn531mrW94aDHMURNhJa2DbnWN3K6ues2pMEE7wdZjswJpjJkLJWHUKzq7V3BCZViQ",
  "key30": "3o1t4ZD355s1c55m4jPV6i5KjkPSBcRdJo4h42kqSBiUKgvV6W6H4HCb1sXgrtkyEK7rr8TQ94VYg3gKZE2xbhAV",
  "key31": "3r2eSBPSkGfBtDqsYMhmdg5AJCRogGjr8HkoQcCjAFq5UKGwV1mRiNaCbkSLR7gaa4bzubgGeeNLTuELxZCXh8xK",
  "key32": "5599dnj5anjeXrLnjdjCqRCtnxdaHPsps2VbdemgKmRcACaW6ncqdPdk5KgRvW5r4rNp7wpVSsy5BxuoJYeTb54X",
  "key33": "4if6RRT7Pby63mXazAV5nJvGrWkhLvGEHVQbk9ErVrn1tJWLXTBRvAS4gMJ9pRz2siJnKzJqWXDpVFRamcZcPUMU",
  "key34": "3yhXyNtLjcUu2J8x9QbA6uogwwoyttu1yBdPKJkdCqqPGsUXZu7hsbqJGaodKmkwvwYFWwGqKdj4iXFVFZSuasox",
  "key35": "3QtRTsECcdmqwik3NKA9eJFL5tJnw1C4ardegkD21ZE83Ud58DhM2wYWBpBX2wbHaZu3wfoQDkZqPBNY5p8cY2sD",
  "key36": "5qLFr83jq4uhm5MJydnyPpDt1vvMuspQj1g2VAJBBgzKFWMPsAkMjPdwq8VNvdL2JXui5DM8cS9UHSbqKKQakQnw",
  "key37": "2jLsh61XCW7nVFBzc7gLgohVszkzWpzWvpMyh8p8gYbNLKA6uuTcnjkJ7rRct5fHNMiuM4AzKYRpgCgz4Z125L5P"
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
