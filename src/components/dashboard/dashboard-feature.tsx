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
    "54PDsSVJ22CdLMGLeiZpu59ub1KUzBgcF18yPa8D7EqTXgxiFhkTGkLdee3SafvNWeB3r1n7ga9LmNdQuYz3k3Ax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZDUNeUCXzcxrc8NZR2oKavFybNDwFUdbQGN7D2Kqj7DBFERyVmmSt8mhiK3B84yXbT7hfAdzxG5Y6LU87b3rNMU",
  "key1": "4pYF84JAPrjBj8JmjHvQVKS2SkdxQtGrJQQydnF8wru5kWyCDrDQqALpqZqnNC9VYegY21rPEr1TusRLinaatTr3",
  "key2": "3nkYhyZMMxkosqZGsyQxTKYCs8EPVCM2RWWmgAEdTSsXynxx1j2kox8qbdmMc1ZMX7xWB7Jk19Kg8sK4CUiFMAZF",
  "key3": "3d6mFMvhuikx9XtXcspEyR1MWSbwA52qc9FzKfZGuSkN6eW91b4iXxCFi4ypF1fdGUiThfYpSCz9jsqandZBhhyd",
  "key4": "5yu5Qnsfge7ZidJdYMFK8AvfL1FXaYG3heuUz6vxR2W2VWZUrxLFBKiKhScwXAe57gkG5zhfqQAPmHQvoDxH4hYb",
  "key5": "5ALnGPrewsYWrcdbWNfjmS6GkczZbrmbDnZnNKMUoahyszr2LRiwXvXZ1eQvwJ4R1xoDUSfsBDMhkkqwEtJqf38y",
  "key6": "2HQ7JPsn2Pu9Ds8PtNurK3pBMuyVQpc92Hjy8mWpuS2ZPEsU8JuAtHYVXcLSJ6X7xM1rFSEn775tMJ7iHXXgP1pE",
  "key7": "W8rhgPUEmCQBtAa3m4EHV8wwoFSeqGA8bi22nie6osXGvxejFvS81Zz1Tej3VBPSqyxaa8UkTibo69QDchGpnua",
  "key8": "hugepJ3XKgcLiaUGjy8jPHjUNjHW2iSnbKARVtYXuRona6N4Sm6CBZuZmq3uexYpL4yeRfxp1DyEVoTvgZEwY4Q",
  "key9": "5YqFKenyLLPwAW1hG2PwmKFABcNCTGoxPxojdKsde3veUfGryDrFp3yxaDbHQTiGxiDN2XFYsyQ58W3Zcebjvmi2",
  "key10": "2VKAHKzTu2HmkvpEVkC3CTyoD2y5WxK9JDnXS7zx2BQy9E78jRkwQg1w2zwcm3uWe8PeAnX8EAruza4VKkCgVJFw",
  "key11": "3nE2diH12g4jmZfT4L19rUYUaZ36nVgsYJc8e1Mr5bgRJLVTDqdpkpKXLSXDbv4KePB3PvQmLjeWXrGUAdkC1VCk",
  "key12": "28KTegjSnEXnyDwkabfJLP4Xj9z8tUkYhVzwKDd4FhCm6QgEudn47Zrk89i9AziKYqDhWRPF8t3HpncsYh8Qf42F",
  "key13": "pmCmpAS3G5bxmQvTsYMkJ2NCGqoiKMNHsZz8RasXVqqWXVkc5qwFP3b8b1aQputyXxFFoV5KXti2zQ3FLtaZ13K",
  "key14": "45pPsfRiSrzsZwYjNHq1ZBzR3vQak68HBiHmK2rgZ7mVXGA7gvC9ZyctJLpZRauTQN6EwhkBPh7Fv7tAVoP5eZP3",
  "key15": "42ak7zWLoSTsKhNwM76oZA3b5kozwPKbu3cFtBCjPvPCywS3Cs6KYEWrVZ4fHg4WjGavTUCZHVkg4jFP1PZxkc4u",
  "key16": "4nSYBCCvv2efnCAxZ72bMBKSydBDmmXtbyer9LnrLyArHrdHP3NBVvkyr5ZNrqXioTeHD9k8nvtiEB8BjyxsHgif",
  "key17": "bnGSKSQr49VK5wLCpdb2FtS3jMNThsZ6F8qrNubL6pcRZW2wcDMELnKS5ZuVJfq9Q5zSaChcrS986fBaM9P8dxZ",
  "key18": "4scaQ5TQDpDCWSWAWQzsVi8PFSsCkkj5Sx3P3SW2xmoNqGNkotgY5mjJDxDbvpPeN9giurAkA9hYpWY8cXWPTw1s",
  "key19": "4pQkWgcjiWrX71ivoqBwSkM5kxMXHGuuvmjws4euRmRs3BiDA8czXbhFttGk4dp4Vozgre58KfbK5GHDzoqmKjCT",
  "key20": "2h9SVqqDzQFDV4qWq9xFtZob86RJrG2dLcXCKYgNy5uj9XienpNiztYBtFASv1tkV2yKVfW24eXpmJkvU58hMRAt",
  "key21": "2crxJZH2PuHHnzK6imEwwhhwf3LePFoyPzmu4VZAHe2354irPC49woxu4QaVAuofHeitPVm7Ljzcxgzqw9jicETa",
  "key22": "2GPVRn5xsyVLB7Wug3qL1CwinWGEaZSt3XfnZrdFLksANNuBFQ31hFpbu3oELwWc3qE5UXWosoZTxzfg4ed1hZH9",
  "key23": "5xSYQr9fFWrNJRRFbUgKkQpuiZXEf7zPnFL9XrL7gRfmqy7Z8j9qKEpYEesM4mFiAAMaiHtZXvcK9ioF7KSSoEV3",
  "key24": "4XCwtwZ95qSTxFz9fM8N7s85uKeAenoToJmkxfUsoD596i4JJCmkV9EBY6q33fcDcoDoMkvxmXs1J2QaPAXvCJqn",
  "key25": "Ya8uuExwzH72hMH8nAEX2eRBc6utZ2UnTNVigoRdHddozXU91gjaYHACVKAGzLUStG4feih7fXD4YN1kkjDz2CX",
  "key26": "2aGzRJcg2fTXwRPPfJJRwxhdSoPKCmNsKj4mRsKSWrAUWsakZQDsErBkuibS1ptwNGhMXyW9LJG2YfBAtENMZiqE",
  "key27": "39CEJk9F79zySNUejgsPMAbWNTTJE3d9cn7L7U6T4rWkA4Ybz2fvq68DzTnNB5Ry7DKEwmmYLnjVj7x2keUTJiyY",
  "key28": "54sZUGKVBKyQh5rACzT2Ff1BUxKtowS7Sm6EsoTJ152Z87mhGG56Bb2oxYqXPH5LSphDw9E6dZVFtM8PMR3mfDjt",
  "key29": "3weGKkSY7Gj6FCCvyyQPtsCHxtLYhMjSTydS6w1zqSCFX9JTKcu3MAS8Vxmaeh8uznS7MPTfY28wMmta7Z9xkcYb",
  "key30": "64EJygoqpZi5Le6ALbmnQPygFtvJ326fxfSX91C6XBsqz3gzsTuAcv1cB6LdmUDRbHriWSHGcnmDvP1LRKu4X4eU",
  "key31": "2CQQEFUrbRBDcAChbbCsQ1cHiM8FnDm5HLLy59BfpL19yyTsDFXDChq5KnCdB8Hjbbt9paa2oh3W2PU8GYZX3k5o",
  "key32": "3SMNd1L9hYyr24LMQhNxSuq1L2JdY2tiKGLDMYRqcp1SZhSagcSsD5cPatUK1Ue5WDKPDBPURNMJqMPYjzM3UCXf",
  "key33": "3VkgXwxc7jBUGWpJERbK83b7gnzmudp4VgHtBPF64H3ZJhCrxS928TEREZ17RTmerHeJJe9zuV3mKhm2sxXPzn9m",
  "key34": "2BP5QTmxj35ScxFfj8DNAia5ogdMrfWHw4AGRKC3TJkx7bo9krNDBuLiJ54L7BEgCZKZyXFXaLzAjE9HPsD1ou84",
  "key35": "3w5uaYRcmFdsB1qD89Twjva9nnTy76GFcC4ARwXL1RGmig9a9yn59rq4TVycMsLM6dEHQmjiyv2D2Cexg1KMqKet",
  "key36": "gvC4M1Mt9KoUDbF5jCGJUDtoZYnQqZpnFkTVCRgXeHR4MjzqaLq4vGg7x9m2Y4JzdnYBEfCGgyaisk4i5ohQrvw",
  "key37": "2syVjMJGKQwAccCycHXjXcgwg5G6nKGgy7agKVhRCjNciVbNZzWnfRtK5cLzeAHpiBcRTzCmm3UvbonDSneCq9Z9",
  "key38": "3rDVFxtJLBWp3t3XFAWvBK1ZZ7prSmziSjc3Epw9SbuvQ6189wVpK5b5G5NzgpJ6xjxttSQ8bUMwmrre3xjxRPUE",
  "key39": "3nsgrQVy8dEmuqRCoixLY8KY2mHW3cLWmVuhVnAT7JP5rYgMQGri5Wjn8iw7xPrJzFw88Y4Jx5qQWmk4QhXZUALU",
  "key40": "NkBq1FZgtoni9z3LxeGWJA49zmvuMBzA4T8eRTofjMVoH7G2BRPbUzKGD4bMm9bQcAv7sR8NNZQrb3nzuVaeoSa",
  "key41": "23HKKtn4gHjV7npK5EY42UNc8kQednfwC1PyGi3QvKmYppMbJFKhCN7Hadi1faYSv9jp3XEB65u5623oBWfj3rHR",
  "key42": "439bvttoyeQGwPTbr6fw37eWKusMQXc4iV3waxyBMtFmZAjKnfUg45sgpV1ukssyaypXVEzgh8EveFUgugH7Q9Wq",
  "key43": "4P5F8PbQYUVuCbhEsUc7uMCpyeyXKPuWPVJXBxDQeMYj876LPbYWoZPjSmHeEbfeeSL78sEvE7DNvhBNPG6zFsRw",
  "key44": "3Mwdsx5mQhgvAYHmxZEJ1wE8yhGoL5o2wUsRHpRaV5esHArcGJ4Gnx7mVwNSy79CvwLrxtXJdMEq2EheSZwCQuJg",
  "key45": "5UmBv8TVkuzYJ9q5W3xjpbdgs1ZzK4j9zkDEnf9ki6E6Tb4tCEud1fzfaXxMUZ9c1y83tNYiZqrYLAtj6pD4d2Rj"
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
