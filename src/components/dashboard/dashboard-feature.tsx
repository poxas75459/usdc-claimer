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
    "4NzumwCeFLWqBLjk5X5WBTAiRyBhNfg8yNXzYbKDMhH8a3h5LqQffURsnusAihk4t6Uwby2RCuVZF3Y6qJFkpwgX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TsdLPYNpAUnHL48jT3SSdJ8EM25JpX8Fi1gr5GBzRuY8rGZ2SLzXVk3xNcBdNzfDa1x9qayiMkx6sNT7MgE9gej",
  "key1": "4GQsktsABtAxrFa8eJWXxbs7cUW2W6Q5kjaNMJk1rTRSB4wcAqGJHWbpdJyexvWAPrVxw2Zjb4FHcqY5vtERpRP3",
  "key2": "DrPHzyCD677Np693jRYPD4KKatzyayVk6ZUuvSGDeXBuQ8sEn9xbRBCYhuUNegPBoAwyToe6bw19fUo4FHDPQDG",
  "key3": "2G8PUXhB99JejAX9q9KKXseE61gwxKv3rQSDRHXcEvMEu6CEsFbXAVVQMPEr3xzp4jCSwYkWsrxuArp7s7NMDoEh",
  "key4": "5SoQKypHRHhsEaWEjGaBrgs5bWuhxDa731GKGtgqo5msxqHgnCZdAMqN64bVk9WpngPttHNrXfjah8KmdyJM7W9u",
  "key5": "3p1tQ8F1TddVJe1pXCu44Z4994sirGbVzCnCV7sXhUQiCPMtr2A81f14dE42eSa1W9A6nJkaMoJUfh14TtNXQ6gs",
  "key6": "2uKbZsPBsNNxDq6HNKccizt24L2ycNwvXdo1LQUxuBQ2Edcysrw6UmevpG73ypfhjxnYSUDg3YPJAMbWYQnPMeJ6",
  "key7": "3biH4x8prYJJUTKJ459WtYYPzq1e3cGYuwjkuhdoN8Q5CaCdm7rge9EXUbB6LWiby9EzuEChhwAarWaX9GHAhZc8",
  "key8": "59GSbgeQVfzD7gGrrAW9DLzuCqkpxwnPRRUh1588FSTyshT5HsrxbQvxQQvU3hMRngjabQXG5Qp4niydDfZ6DGgg",
  "key9": "2t3ziTE6hy3SvdDLxuKK6DEMzoBtjjA8BdxhBiwXrq2nmp1YCjHhemipQEWjVyyvcSiM4UTVwxxsmw8G9MZYQqmG",
  "key10": "2KdH42mC288VaD6nd75SQmwmDzMPuMwTt4noSEAwqF6PQ8JvaDk1qE78WeHG6Ho4aK59rGbzzr3swMV3HaxtmPPL",
  "key11": "3f5Qbb9q5haEwd9Cksir71rPn3JcRqNpH8UEKMWo83Skkd9uDLks71w5UzqHr3F4h2teM1kNQXrsX64jf4Xxfqfg",
  "key12": "5LkaoHQnim8DefWYA8KwMSGXegK57nXX2a24Sw9AEHZgEDxnL6Tgy5xUwyXX1TRrf1foRzg2PkuowdizUm6a99Ea",
  "key13": "3JFXtafGJPirT6BBWdTZx7EEwonX8inTQkDAmDUJ1bX1s7Eo3aoWsS59MSscvVMTiZj55eqV7y7TNvFmNeUF8aQk",
  "key14": "4zAvgkquJRs635xgesRiX71Dxds6ajRMCMy1HaASQrg3JWopsboPainNhPuLidHDpAc48uorUkfoAFUg8vu2Bbvm",
  "key15": "5r2wX19zqmvXcF8WeTZ79k15hKghpWSHzCG8VpzF6dBi3qoHUPFCUCQwXJhSj46PJkEzaSYsMXHUGoSkVp4YqrZq",
  "key16": "3P4cHAQKHr6Cw8Lu65bpckHPWSPj37dCkkbcPCHP6qLTYK64fSfnamZzGVL3sP6oGWidigfzSvQZsydjLRGU9pCi",
  "key17": "s9xG6cAog97PsQvoxRZULmTmhKxXc6n9YDZ3PdCyaftwijjXLiJjq7mPz7LcjHZT2e88ZwpbqBbBZ14XEH5XRwD",
  "key18": "4wpvUAwQpKTWDVyS8ZJysh1qtWnjjq6bNvc8ScFmHR78rcaeHhpNQkETiMDJCg41iUnYBbhgkdsjBrFJoBeMHYgQ",
  "key19": "3vePyBeKAJrvWiT6jba7DvFTnGvBn77gdAAaspUvHbe6mKJDRPBqJixwKC73BeG9U9AFqtpSDBmw7juHrLQNWPrW",
  "key20": "2JqqqrfyGv26fQuNw9Mai69MBKEnevevWf7FsBo9wAWiPtCTenCX5eT5yfKgZUsWHXo16qtpF4Y6HXjSRQiEjUuA",
  "key21": "38B4Zqd6BPPcFESriSyUgYPtddyTgMrbfvtTxPRtBTSU1uVRCNJFNWLBSjdpZbZ25HEEQav9NTiSXznVmaTkiNvC",
  "key22": "P7P8qEDuV7RvUgnhGAeiWRXjmJx9YyexyTDDQiQCQWuuLf76Cpx7Wq1gUAcN16VKcGzRCR7cPjBJYvFZ5RfzmQ1",
  "key23": "NnoPNe3GjRp5nBH7mVBei5CuctiaL6mcLYQaywPd8cAeUMhG6re6YmUUEkruJWPUb8zdv7qDrjrsGwp5xekbJ8t",
  "key24": "2NUQ2qusf6kEf5tBBm7C4GqjnN5kqFSJ25N7BaBgDoARDRXCQEHSw3tzMUHbHcKmG2SxRFwS9eghDRabRuM3RYqJ",
  "key25": "5D5hFF27fV5E4f4p2U87m1LMGPqbcYtvdfYtocFotUcJMoeGPVinrc33TPLxJDUNuiGdyGkn2Tw5fBwP8LK8BkMC",
  "key26": "29vZUocuhEHvY29hLBpRjYjScWn5e4SLB3BbCJhzwN94VQhVZVF6AqxdhRmJNRgQ6kAxqEYP7MswuRoGiQ2kz3Mb",
  "key27": "3GskZiUJkTmM3oomjq6bfZWivUBLUbyiQ7JVZB9kiTQ2m7iQ3SmHe6EPTWp9yw8Y8xBCorhcCZ6LkVzpJYvnqvxo",
  "key28": "24j7GoWJrE41xdS2Za4oNcS27Fi4J8d7h6Dg1xWQPowcbkmn1i8DAYQqnBrtPCRoXMEB4foiuBhkk4Me8SYw2DG3",
  "key29": "4eFEwc2ix2Yh9iwTh2TmLdheRx796QZESEmdkRY6tfW1PJrD8eognk3bb9CegrqpAjR1m1iTsR4dYqSumZ1AhHEh",
  "key30": "5ay1APJfjuH5ZpmvmWwLB7jYWQjT5V3rg9xPRi3cJBoHYW4qr37uEHYofJDFE17UT63ckiycEcKv1fM6yeYbkxxi",
  "key31": "2ZLp6YimqrnUSkrUTpiAfNUn3dsvTyFcBsdP2PnjN1RwH5KkLxd4snFXBrgKg5bew3xf2VaPK73xA6RhzA6NvTkx",
  "key32": "25Jdh2d5Sg4jg22EF46Gz9JNwefKJ2JYNVBQQZcwjLfeuTnLSVpXYNLpLH6NekUmEZQqAPY4BNr8Pvuoww6FDE3d",
  "key33": "4TxUq4ea1h87AqL5whBMxadsyuequqZwx9aGuJosBWv3GsfZxjwQkQKD8uK3u1Ly1HkNrsCzxXv3s9exVYXtMoqy",
  "key34": "57fiAigPCDshEpWgtboCRUHM457Qa4HFNMnb22ub4o9UopUGrbPosz1Hc9tUcna72LL79m4YHZBaLeWoHU9EGJu8",
  "key35": "2QNZpYqCcDjHrSZgWhcjnMN6g3gfdVgpgmT41XefCeJCTeDx6BYUCp4ZyBEEGNMHWVspPRJYD6ac5oNoPDLPFcA8",
  "key36": "41YnvBvmt9VwJWz7xV8nc1rgf1jnRi7UGucjRTgSbbuD5BNFkwvDFS4Pep9HLHC3UeHEPjmj9kanHpsf91CJnSDJ"
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
