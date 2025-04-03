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
    "632FySeVytmdRVvYCfPiZgdc8exZCPjnnUc56s9kFNr7n7A9o6rzTa4HBpEdAmfzuZJG8M4rQqvbhr3cwY2aQzQz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ydkCQkAg3d94QeL2mDjYQugvAfYHX3rw9yKGbVZd6mP9Kcx7S1DrC7Fc46yKh4VajGrzQ3RYbuYPbD1pHHuXQQW",
  "key1": "3fMRRki7rDPLgEt4rExTmd1fBTZzyGWKjQT3sN9bC1V7cMNQsjyMCPyfpdqoqbk1e6F9dZbeqaKRzY6jMNBZCZkG",
  "key2": "e4RBRHv4LQeZLHApjFBcBW5UsTv2HeCJZxDYTxFXGDhChEFXeCF8Bnz4vMEPENbSsJweCDtQrMNrXJDMPbC7WqX",
  "key3": "4nUSWmDLSwqRBQGjEK1ttrdepttKuDKKmFB6NCMdVqT9BFggY4czuZc1jhssuxbtcm3nhRXvvjAz3PZgrD81AxEr",
  "key4": "4zvsKYAEN62pSza3Ttp8yJfScPJm7JfpFRzrNzB6nfYZte6L1cqF4CZ7D2cdiFaHcEZqJqWtiQXfnS5qQ1crzYJH",
  "key5": "2tNwV9LZLzPiMfPz26qFvHaXrY5PHVFScPa5dFRtxMf35X7DsVEgHEyjggX87CaFpx4HbkxEkTajHS4b2jccEo6p",
  "key6": "2dwKyptwdaPFL93GoDjRpvr8cuSZssRb3YKmMRS5Y3NJD92y2Nem82DfqXyEen8myxUdRWh7MR5VgyW74nnFzsTL",
  "key7": "5dkxfsKV6JhrDLu3NbZ2SfEq1R52NfENyZGYEVwbaKtgj4NEwdwF5ikF4ZcspcTjDeBiquFjJBv13FhQY6FysSs4",
  "key8": "3xFyfzcFsdAFdJQfBq8ib9LiJiM79mgdC4ZzQvsiKW1icLrZrNw3ue8kBaf6vZDLewKxkRR11B47EcJyjewYqxZN",
  "key9": "5R26Sb26WTu34uThLWDbkXnzSQNMUm4fZwq2FAQZNCcs8mtgdKui8qxV6fH6FyyLnSo6mERz5VfCYoV1NHPRyfBm",
  "key10": "4MBWCFAMjESVhzYCYJFAXUCzfQQBsQE69N1YGy9gwkGwJirEu1a3vGXX41WbfNJzrckDtAS2BV9HJLE2WKc1nQTF",
  "key11": "2FH9rUTDxWUK8XjeYNnEJL2vr2YxXM9cgDDvmT7snLY765ZZoEzUfMP9arPuZoq3FndtSBJtgMRLQQVbbnYcRr61",
  "key12": "2wtnqP3QSvTikMJFR98ZuWBK5Uoyg66vhgLxLvSonqjb6fk8jqN7FfCVCA3mHVkxwCM7EDrGMUfZ8rnS4B3jhncM",
  "key13": "eEwWXgkbgePtuvYH2UyBzvDbkiW9tpb7eKTH2rwBTEtzSv9gXArpRNKVceSKG8KjETwz28LDuE6HXwqA2AVAu66",
  "key14": "dLSK5LMrJRiwXx5D5E7dkpxsaNhFRXDzhMJTSZdAmGzC8EKHmZYgsTEHbZHxqqcpUNJeemKHwtebfBo2oKY1i5F",
  "key15": "2qV5vmstti9WsSqB9th2ziGGuqyMoYJNSZXw4Ra1YLJVB7KJnfHwLvoQCo66subQFNy6Ytfn3hbd8jF9DRdcKdgX",
  "key16": "61gWa3UcnhiHaEdUSzeKA7dbX9uzsno2nbcdcX6wY7SVEkTvSH2qwCNgZ5a63s4Pv3wXtE36iA1GsFoMLrqReru7",
  "key17": "4HrtXMjfcoaX6rajFZz9n4eEqK94JhYGxe6SKug5ymU2DBQS7ffkKWQqeziwhAYM2pNdZA31KWXhhvRDHgKmguJb",
  "key18": "2E5vNQPdguwK5akBCLEHmixWF3qZP9xvFYKCL25FWn6VvdjT3bBWZEfYau5HZAsubEHm9jKqgpm47zhhqt4pp8tM",
  "key19": "N8kLiDHHR6yLqWz8Jpyzxmbu4MLnbS6n8QHjGGh58oGqGXvC2pkePrBzKg9kf4GSnG8fotj7y121kK5uw8FSUhg",
  "key20": "6vcTPXyoknx7jpJzTBDWx996JDxv3PS9axa8xZwVxxWNpRCUayiXL9uPryL5LUAdh4VmR2z3HeMLwk43pzXg4ma",
  "key21": "2RMcwBxQZUTK72BBTt1wQbbVN66ZWUvJCBPHhyuGqHNf7daNpZsqNAuHAdzpyvGc1oij3QFDCevurHadd3XGYG4B",
  "key22": "521di3V2HGKqzFgDiryY3CJJeWMEJoApfmL9ADHkm33kxbSZUUWeztRMgWgrs4UT8L2Q3sYJxhiQNLuFJjYCFDQ8",
  "key23": "41QQDtai6qKHHYBMtvhiecGT7AJkBn4LSVusJVLQyXKgCmmJCK5vF4nSTBCAunkHu2B1xBzNsbysZeoXgAuB6Gtv",
  "key24": "JZAA54McVyXUF6ghX3ty4miWNyUfmEZwrz8xLx6KcVp2TG8qbjr1Uk7e36Fs3Q1j8Hyii1MMMpLwhwboQubHYTj",
  "key25": "2T6JDuPz6BHfSx7vuLxx4Qs3D91G6ckrCXMzMB6PQSkNvRgzRTwsGwD9d8Jih72u1JTqqe16BXdNNQxYespNf3ki",
  "key26": "48CBV5no31znnpvHCNGDqgyVww19Yha6MjRPvFJca18EeR6kgjzxEtPJ2sMFFrYWdzT1XYmV8PQNEtkGJYUz4qeR",
  "key27": "2HPwJRqLpuEEfDQw5ZqThuoivGzn5B8gVtBBcThtAJ91UMaN8GRM6UiigU6aiQUxhGJtKNzczFdrTkZaqakT3SZ3",
  "key28": "31Hi8ho3Ygi8Gj41LbEThUxj5yG4otwRQHvrHKchqDpf6eWkjcBUUbfwJLHSQh1GEZkpVo5V9zRX8MCvHnPKH3ws",
  "key29": "2HXtHYimcEacCnzPKHfVH6tUM8m6ZXpEfqshnguHVMFhssCqFF4YWiK5TNoD44xyTrazxfrigz7n2ictDtnNa5RU",
  "key30": "2gD1AwxfG7GJHC1KaSYdmf8FCjyqqdk9WM9Ntu4qKEPCSgRTU23oXkBseT8KE6rvShFdrLYG5CewrubcMQsNcGw2",
  "key31": "4w8UrFGKdYYAYLaYKi47uKSbiwspkHACNzYTGTzx4zY73Fzub6ceWNDnPMR2MZZLTzuzS7cebz8hYi2AYQKf5PJ3",
  "key32": "3tDEGWzkcoe86QHNa9ScX5U8T4GB44gbx4bcGnmggvAq6Tz43pmUunSw2G4D1CBnyZg1gBuWiXagCp7ATVvfGJHU",
  "key33": "3ir8fMnQa2N7yMq3tdh8Qdfk6ZQZ7pr9Z7XNwqgkP2FQxPJ92NzE1j8kapwsiq9Yc16phtE7nLrajNM7GTaYaiVv",
  "key34": "2ApAeEXhs9KAjQEhQk9WtJn2Jinx8E5q4Sk9GNbNY1fBfdGRTPJQ4xfJHoNvDf9hoK9286pE4m8DfdHpZyL8jNvQ",
  "key35": "4ppyu71SKQcQNT6zaibLKhhj57XoPcWHmWeY4e8Qi6m2ZFwNNcAy85cYu9kYbHw12Fjb8HCfwma5t1vv6brtxUPc",
  "key36": "5EGYsiPTvGZyQhgPwHmbEzeiHqqvPxAeR8RRgw64UVQ53NhXmMNGx44V82Nss19K7Dij5qoKL2nU37zv8PKwgKUn",
  "key37": "5Msk9N7AdZ43ZLdVo7ri9eYYTvCsHNGv11ofvqQmitrR7gtzo9CXzcrWVV59x91BLGmHFexoefVdwvxAd8cVAx4N",
  "key38": "2YCRqCpFCZrDGaPHwcXk4sSH5iouYCXNyp6gvD58ePD4ZK2oijNQ2wHfA1Qv7pAG3utBbMofKvfdtF2obNuEqvEg",
  "key39": "4oos7wjZWyzALPKFcvoysnAyU9UZBnPfNUrrbh2PCjJzHN3ktDpQm6ZQFm6Fnq3ZQRUZXW8F1MrAAFMFEfGJbXvV",
  "key40": "4BRzKgGbmPgYKMqcpcRtuSGpHd2niPhaLQxDKzm75KfHaQSqmwdA2gkAvd2SJGavUdsMqfbZtAhHVWRQPow4zWuc",
  "key41": "uQYV6HAM4tQm1pc5SK7YpvoxWUNHYjRdHuYZVYCvRfdprGYYAW9U1rj8RV11rviiNAKL9ame8qWPTSxdBzyVLjL",
  "key42": "5zU24uSDSDi7cKbo3VKrASVueLSreHYUHCiXhrzZohtGKMQhXujnbAKAhYTjU9z9cvi3MsUFjv9Aryoox5zEqi5w",
  "key43": "DSnGdAzoGVCHvYu2XRBjsaCZt3HrAT4Uxe4sTh6vPQpPQNticKeukNaw8aPTKUPFPFgHAbJ5njLNov84tckjcdH",
  "key44": "12472BMUpNwVnUQ2rL8DnMbLyD1dDu5GN33usdLTyYDykUZtHWZpxS7JMC7RT1xvzqJd8MhMKW4XVjes5hCY3Y51",
  "key45": "3fCt3EVd3M1CFKnvWXWSxUev759BcmiE6VFupFfTfk3pFTuTk6fjWcYXoJqVudb7jgnW7NKak5cWPZmddCw4sdf5"
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
