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
    "v6Vukhd6Bo6TbfGYUePeEocY4MFkvHSYkwbJQCUaCaM1NB6BfapNEVzfQkNteZpgqqoFc4aMLCehpRxKrj5XiVF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YiiKu1GK4vxgnkrdxD1Ur6v2s6scJTQuoNU7DVtE2YCfvmTJaPSn8aEMuZmxyUyHf3dCkcGawksw1sZAh1SCZtD",
  "key1": "42Hz9LUiPyh2jK8siHhN9TWQoWPFxZrRzvZjY5UJDk9C9hzgf8FDoP6WePSrCTfUXeNUqpPkQtde5xv9NFeRLmYX",
  "key2": "5eYhV54CZbN6QBo3C5xDxryCZyxR5JAFmScArMrQzFvfdbj4gkEG8DuWsyTJhWAoadyRVVD64Z4XbMAMSgdcTcC3",
  "key3": "3fpRAgN3FZ7dWXgLsvLYbijgwCptXshuyVJXKC4ewD9kj3M3zuuHTBkMvqtEfJHCZtAMofxrj2UicuN8uXe2zMGY",
  "key4": "5sVYjiFNVyg9CHE9p8dWzqmfv9WjdAV39uPmjUsiXh9XUojqZG9ca4DWEgiegXQ1yR1GwgJ2fizmEEJJe7Z3wR9j",
  "key5": "44a4UzZSf7FzwUAqR5MX58CZuxhiCQMrj8FKAuKi5yoPEZ7U715fVkbDaDhMsi8jSWu5dpu5mTbdUMPgu99QqTep",
  "key6": "PZfRSKStiNKu6xf1tDH5yGUcWKw3x5apCyPPAjCp5wnHTp2vq92Set3eXpeFL5p5ZhG1KKXTzH89eNZRGd5uPPQ",
  "key7": "3gHG6WjYRDFgimwGS9eQAxbRSALbnzdfoMJndUi4P6u2Rqo67Gxnon5858ZfVkzUyqXmdKeVM3zeKJxyGtsjBGBx",
  "key8": "5jsPGDWseqmvhhDeRY38ie74dHCQBynkuXKqKnHY2sKXXXvAMohPH9fKSB4vXRDNUs8D2rZbCkSqcCryWTDkmoRH",
  "key9": "2F1NUBUgQCU2o5LtHJ27jDwkz3c2sreA4ABVzouYUtDZzZpaUNXT2oEbt33x2ZQu7mNTn6JwEq6me5oodpVQVvWv",
  "key10": "5a7jDv3wnBeDpHVMPcxswRZARoVfE9CzcGigbaBerqrBjMgHoaBUwMU4ZjmV5wTTAkXXx1zrk2PZm18PTqfu4Tyk",
  "key11": "2LT31dtWPLL8ToN6RyYhteER71rWDh35C2LqNvVcUV14y8a73DN5Lmf4xq21EpKYshfR25h5TWuSfqSiJ4bCLeTE",
  "key12": "58GCUfs4oReuCKGZ5w7NcDhqFxpfnGwC43TggKnQnTvkkhZEvmVrnomz9C5iy1KLMCiDp3KGpoj3DZG369NhQDWu",
  "key13": "2rKJH9KFxCP5UAQobBM8eLKFrgerKJ5einvSqH4bubVDgZKhSaedqtcSLcfp6mntx6Qh3h8tnXC6tyyj4eochgUu",
  "key14": "2XG4HD124Nxs4cGJXpQbUQXrQr9LxEVfTVPUJHsAo2yrHCCAEJm8U2YPQbH3wNM9EK4STu5aHwWeLeRqXL8Mfh2s",
  "key15": "65yKoDDGVZqbJh8BdPUQxufgcDxRCi4pMMBJ1xSLBBhPhnff9281XsT1uYVtffThgHpFwk3DW5qDEW9zhtt3R6o4",
  "key16": "GjBQb3SrfEXx3Cf3efbPZnRsMbU3hH9M6YqNRqpoHYS3LS1PRJ4g7PCPVb1z2C69xPEbKYrEeiuzjpTedgwZ83e",
  "key17": "3QS4sj8QuTQUjqM3FhU9Ak2z98a6NjmDfxQQpGCXGm2ngEjQKQGCJzJXqV4kp3Vns2RgDAMirgNTEHcwAMUUhoR8",
  "key18": "3Z4fnncUPmDiudokHbsGK3TJ1Ch3n84JAkycjDX26tF1gCtMuyCKYky5wwwARXgqpeuFHrRcMWi84Ksyx3F1DvzT",
  "key19": "3n7JjZhmd29jzTCrjLy9j8mffgG1eaqz8KC9hgWbwzbMFqNyqxa3nKTD9bsijZLdaYEDZg2y8skKbRCdeCkYoJeX",
  "key20": "KB3DMJEP7WdpmEHwxNsvYNVcHtf5aFkfkz8TScuKRbCwDnkDZ1nEH35p1tybBMoa26UFe2weJTXMRymSqg1ec8e",
  "key21": "2KW7FcvcLQLBhiecpXZGe9vmt2haJmycthHy1cLfbCG7HFoqLmZo96MrCMzMgoEw7HopUmauxmwuifTCWAWsPS5r",
  "key22": "2pit3zZMMRpBN8DGccZ1ir4NPXyVDdACPu9Vwnb6KDb2rgzijNpgFb1yqH8ns6jfSwyMRyy6tfTKF7XGogLRXJwo",
  "key23": "3uAhNWWSX7okciamFUJoJ5T5617EjUEKfyhEPL5Awm5T5yn45cCG44SmH2e9aDiFYbuYuut9sRx1y77gNaDctksN",
  "key24": "5wAWpGYz2RLbJPCpaq6hWr1ApmVw5Zdf7wgskjhe8YMHz3Lo8yQvNUiCv5zHb2oEgpxTSSnbBnPteNnhD967PX1e",
  "key25": "RM1b7LdXbM9wiW5X7UnLsA2QsU4EXXfRjdXakQV63aC7TBZch1CHYNBpGi7cT3FFwJFCRjbcHunx5QNNNFuWkP8",
  "key26": "4RbvVC65tbgEs938jYKjZ9qQMrwV2XaFC6VaPMF4hNmjN8Y1CDdAjWY6gFxhXum8CtYdaF1xrtT58C8peZqHwNMD",
  "key27": "5ynCn8voQEkzJ8seg77X3Kpmx3WeTLGpRLwfV1EGZkfup2qnGmtYjYj3vurjHKJoa5AFevBvM6RgbrnDaHLYbzJ5",
  "key28": "MyUq9yepDExz2wy2p5uB9yTf4CX5Kfhk1ifSi4snunj8CPeaqQcvCD7npw4YVfZ21SxzDYJg36bkQxnb51gQ1fN",
  "key29": "4CKng9swNouFTwC7HXrYNBn6QXCMZYoDAFWGkRpjThY7HRpce1gN9m4tvvbeP5VWuEuzXa9RB7WnTzYACLLXCt6M",
  "key30": "XJdRKpkuKVwkFye6CmWnrJxHB8s4DypKdZ1rCVwgMD7cVJaPrXwjHhcGoskZZ4zhsgmpfywnWyeBE5hdHACnNGV",
  "key31": "6dzmebr87xjdfaZTjrUsFjwSVzEucaCCQZLN8cdhikw94VTymr9cKmWuevoYfyCnwa4oVaZox1BGsZgw7yuo4JS",
  "key32": "4Xxs91beKNtm29dCTWqYV3gyEUYE9kR7r1CCrukRcvAdjzu6DXoKVWF9nuicgpg6awATcBp3nV7KAij5SQisgAau",
  "key33": "416XckJH79fvRE1yL9eppLeZxeZ2T3JqJJQcaJcqjTJuq27bHV6Yf5FoHdtooWwfqgMJGcVLEeKcr8MwXjaoCWKk",
  "key34": "258iLkpaBpZNp3u79HeD46tUnZboLWamHGHzxddvp7VbUkUCCBc7t7tsNv47B7yj6Zzdxg5yxiwpZwgB9kRxYqxg"
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
