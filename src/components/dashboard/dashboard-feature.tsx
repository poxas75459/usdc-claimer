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
    "475TxB3hCMv5xeT6prWrNS9XhTN7pHEHz2E76EJxn6egQwpXxvUXWbAyWHvxuF5Lkf5qn51qmAKPzRGMeQUm22NK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ghx1jqSgvQuVzQT92Q2CcWx1t2QUdneXTLkxoKLVHZhH8odVy6Hd6tCtZ9XZQgsiXHbzQJQ2XiAnTXZrJaafdFV",
  "key1": "2NzhPvjTY7iojtftkxZk9wx4ANB4UTBo4NVpVKgRkCXbvL8F7a6LTfN7HQShsoT1qVxxkVvka1qgic6KCxQevQfF",
  "key2": "2MWrQC9SXug1zW9DFBG4CRXa2pxdsZFqxM7Auv7ihmJ4Z8wTdzHk2yyX2Hp8KM5Xvt2d83bgGqLd4nTbZXLiimhb",
  "key3": "5ut49FKya1bfNnNG3rRGFnciv7SzercM88xXLtQGcaWqpegch9nZ8Y2b8pxCzFjkB9zSCfqaL9ASpojreorp542Q",
  "key4": "AGTdsZfM3Ziwd74rw86kP2sBsAJs13NXsK1WVvrGQbEsBDUdF2CcAKJiMP3NwMZDFDr9WeAuww2LGKAP7UD8dPs",
  "key5": "4Z3eTBLyPSj3sNzH9hGij6aHsvyopgVPQqQdbisuCwfFyB4GRYNfGLK5qPVjooNp6KaLD2Y5dFMhCgFqZEJNKt9m",
  "key6": "34yV64cjvcvKS7SHWGBhDXtdEoQxjTwbBR5iZCf926Zhn5e7WGE3FVXuTneYaxZGJMSodQPg6doyJw3T7Azx5Ft6",
  "key7": "2rVcJv8vp12otDXbQ1tE5Ryc6FDuHHCYV1QAXLNZcfDZHPfnCofA3vFiYj8EFrmuKmMeJJDaxZyk92tA3pcfu6of",
  "key8": "4DFeQmoS5dcL8uYLJ137W9hdE6r81vUoJ48LAdmifJofGKCp9idRxCtjMUXxNf4BvFtfWT8UuY1qE43BV1uB3EFC",
  "key9": "hjqy12tTiieiaTctQhJGJXLM1diM3NnxXHMcJAPtUq1pRoyzj4t6GHCfrfD9mttxQZ7Qkosp27ft8L9rwrSsxb6",
  "key10": "2qMMsWx3x8FMoCLHfWLcjP8d1g8rUwqCUwk3fUyEmHAEXVzrKek8n8TJBSMfpLbmPQjTWAMyZKMba3SxJFcXrdNY",
  "key11": "3MZnfXjPhudr19BGbzFimd3n73H5kJZ5ecx2gf2DjC8CCW52KgEQSoHVXsHrwj3fY9Rprub5QMSrCdAuY1h4zRrk",
  "key12": "3DZyP1GKAqTYZNpfiVq1kf9vfrEuPfQm995JDYHBj6xCxUCJqpnS1fVigc7nKtJQL8uYryUL4UDh1Gf11mBdGBat",
  "key13": "MwKUdm6zpsdcPCjxY1twEYA1F5GmPXFycoQnW2k7inFNyYp5UMsqzz2bQSX7vudGoGdBae66TSksDV7RRSsgVtd",
  "key14": "39NB8girKrbmnPUDoUDmPy5NGarnCdykY3Uy8EbMXcggTYu1dmWxyB35exE7NABH4PFQvR5bsgt8tADA4FDYsCyZ",
  "key15": "4kTRc8mC5zo4Nry77qD8U1Mmdvn17uLxyqJ6Kcy8Y97X7sgXrqS1BdPaizVgnQokXVGihAo44AzCuusiGW7JDycw",
  "key16": "2jWShYfGUEuQV5AVrdbP4NZPg4RxCfKSXEgxwpZPu1GCopzjMQy17dQ6S1ojeiBKtdfTFhBMmJnWwmvuqvGc3rCa",
  "key17": "23cA2pJ2K2hWp5t6SDHn6vTswhojDyiz843brZ2ZzXyW3GLhro32gxzmRBFWh6dSw1UpUGpLXmTJpaJbarNKPZ4R",
  "key18": "3x2ZPfQm6aSnSi4bX4ZeEzeU3HNXS1xKsrrFqHKwzPdPmfBBeMWsqrZhYKrkT5c8BtyUpxj5e3VVTuskCREDkwwz",
  "key19": "5Hx15TooxNty5XfrtNHyrxb4AL1zuYcvEN4RFaNUb56qD8GvogAgrATUsnR9p5deYuLouXmovBhJVMa4tjyyCU3h",
  "key20": "3sByRdqKzsi7R7EnewSWZHntVPzMJ8kW4t2xz62YVfcbf2YPr7UbvwHEnRXsdt9jkEVb8HdPPV68VzNp7bwFxtNs",
  "key21": "58y39PUnrCv75m4Q2czZWYH89ba6wtwfw7a7vDhJUBtPJ7dXnrKzAhRhNWd7Sgq2KZk5k5jgSFUP2CXwf8MZwsvG",
  "key22": "2Kewgm5RfK6wZic7Au3Yxq2Q9S5gTEVyEvPY6usKoYH6TdgrFyqacFueN4EWhHR5neZ45KzdHsTmw4j26yfQoruJ",
  "key23": "6PV2NogXh2aUqxQijKEAK1Q6fKMzAKk2zPbZtorNXf7tAEEoGVjbSoDKzpti8kLUVk5fi2vYjs9nrD4LRWSzr5J",
  "key24": "5opXeFYHSfxeheS42HZC2WJtKDxCEyLviRHvSmm2MBQhZbTzTutvWwPp5B3niSHnFbcKqx9KAUvv4EXLU8wt9PkP",
  "key25": "5dw3ES3BxwujT8kkjM5d613K59qyEvhpMF3wHiyCU7WiMxA46J5sdHHZr1mfmoWVpLAnTZBz5ii3pXAPRdFsyn1D",
  "key26": "mVHaiYHcnSeopig9Uw3rRoMqtgUnCKTuyrvsJFtf3oWUH4EbvBPHRjkmLxNUkkLVkzPDdJXA9guC2mHpDaPZZ6E",
  "key27": "2YC3LYhDGw3ytFrBRgMG9GxrPkbUx32GRQcQdxrLR5wtrhk1zTiVcRnrPEhsHWyPmmRJZVzRJA7uRkruu7kLAtw1",
  "key28": "2AHdc1oMTfJ6ktAPFcwvwXHikAMX72VYrkPK4xgboJzmgbJ5TaeCU1NBMUBstbKRemiM6qaLCwabjaUHJpteMLEK",
  "key29": "2fMn7B3HrP7tLwyVcPP3qsZEoMwrNHb5buxs8hqoGGYum5H6YB9akEQcQgGdrFN9SR9XbT6YwpZBPuNUeEaNBTJs",
  "key30": "2VpFMM2E4HWrKPraaT21tF919PkQDVCji3LdfXbdPcVheNDuXjRYkt5Y1PNLyHKk9Ws5RipfNM7AaDHR5AeLsjb2"
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
