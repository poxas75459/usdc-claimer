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
    "4fLXvATYfdxK1BQHECectCoRyUo6YgdifTpKPn3f9aD2pjXuos7hpnD7zvUZaNQ1MrVxyacsHpUtCcuLoi8Jhb54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K7gPUqyyCpgaHQAVY6SHXnbcGgMMuy2cGpQ7bcX1fVN6tSFcrWp2j9N1uhc4BAGPVvfDaiBYQ2PpKjAheEXUsv",
  "key1": "4sVkjdg2gDwfCiS6cxmDDHzgYmK8Zjd168oQTuG6FNcBwr9qRwtsNrtwJogMiQdVKDG91WCuJRX4H7ekDioXt92h",
  "key2": "yBmVM3jGUsYvQixJSUDRcHzTijr8YtbJUQV6KdrGcXzJjNKaibUqwiJ8LQDywqr38qnofBUepsikDPC6EVX6jPo",
  "key3": "22VjfPKd56kjCXsTHujMbCdPKVUBVnRVqKjDhnnS6g8oMSs69nVf2FYeU27E2TMkJ9MZQjS6mNjRxHHFk96VDn7X",
  "key4": "4ZVEkgs1KjR8mTzg5r74EgewcF1drLFKgQFsBgx57t8b5BrV1VMsgJkE274GeRMj5KuNebaeQX5DKesQiYHt9YU3",
  "key5": "3w5YdJqMNpTqYEAzKbRRif8LfsQaK7citXUAo7BxmgBSWbS4r8W9jXC857YfyrP2515gGdWqjvAgAsm3fbMHEeAb",
  "key6": "3uZfUupUmeoYY9kW1SB5Bq3k13ynWfhyT51h8RBmWVYHpLW2SmWo4RJcW1SsJvDmUe2rzAietWMT5rTYZGvmMNd",
  "key7": "FjVEW3ZChr4WQDyNvf8S6hn3QuSitTvQ5ErKJ54vrBqKsrxLWx8Th4DsXFSjcvCeZ8ydHcKNc619BCNyWXTXuVZ",
  "key8": "5MVvK69cPb5T3vbsRGp3go7wX2oa9eQLKmEULZ5juBrPAGetPpS7XpJEd5Wd8MRRmX7JErvr28Uppe9U4Q2fhMBo",
  "key9": "pRbi8U8aErMWDjxPXFmEAgzaw51g9bG7RYYjkBSvY2LmnEA9Bcj8S49fwGFK7suLtubeX5h7ekQyxGUhKpcGtKa",
  "key10": "36ccbtZQ2o3m5uMEemF65jGGZ92BXuHRsHJFitLJCgRKKKF37Rr4CPULdoBq6u9nRqrwBsjQMu7zvnJzTrgGzyYq",
  "key11": "5Xg3EPCxRBHkr5ekBzFqbPjAsH2gj51aX6K5yN5DUux58ejANhgwzqAVYNXJ5eoz11Kat7ujSFxSGoSJ9j4y5hQS",
  "key12": "3kj7Dckz8mqiE6BW4fYVS7sQccQtZSgW644o72Hgp8HZBpNyngVwE37Q2s3HJtTR8WLoCcdzRpZwZGhKquEQW2a7",
  "key13": "kwZwTW5jcCT13EJJEyjTSa7BYNKb1SAp38j2BgjsVa1n1utSZaEVTea8yxQmDLTxW87tThPfUCR8GD7LZ8y2mVM",
  "key14": "2R5eUTTyK9epkLAmRc4qfZCt2vQkivpGCBCAuxSVEuAK6RuRUNqcuXq1aWEoCoGnV1fKt6ZDc89EBf68bDGccoBQ",
  "key15": "2FeiiPH9w9Q8Qjky3o2YHejpjQTPStRtW7P2E937DGZiUHPGMCfBVYXDdUCCSEaDWetTjAwzJVuHMcrzBSAUErEK",
  "key16": "4Nt1NPd65bM7pkVFCuVRkoXjG7NsQWtuHc1fX8z3tti51ygGBygcYZb5DmvptaBoYVHCCZ8d4ZksEmPFr2ptr4ZF",
  "key17": "4u9pQ2498Wo3cjG5A32rmR2TRKDs6CRnCZXYVsRkc7rESUGU3yyemWdvBDugT1iHKjRPJYQ2V8jTSzfh1AxC6uWJ",
  "key18": "tXZjJEbK9Bcaah9to1hXkrK4v98CXb7YSZ6cifcfSMUzXcKGHcftKULmEzcPKkXKMXkewspdYpEvSQb2bV6KozU",
  "key19": "2Cy27xEpcCPaoUEyZB9swBYqb5JfQostPVCeVWQmF9LQTVnKXfbxiy8Rr7V9A7i2njqSnXpxnqgngdCvxFBMS3FK",
  "key20": "3uR29dLS2DDdNstAF5W4Wt792Ev2ntq6EXi9FnbWU5Zu7WUHoiFTVtNHEGHXwNLXmEQFyhk99g5NMXqvG1ogF2n9",
  "key21": "2UXSxxNBp2FBVWTU8N1woggqaQuKZptnVDqqDkWw3gpkMimtp3bKDrbKY8mcxemCrA4stigCfW5aJesZeyRcwiUy",
  "key22": "zZLfhrZ7kwiQ4Wok1ig1Y3uxMAJmv5SYHGnFBgy4p1VUEpggr71F7yTitqA9QbAu8o7HaEYQBDqc2rS1HAW7Gj4",
  "key23": "uhcAhTJukQnb1aJQksYqDhRnfDbPy3E1JaYHMReJBGFQqEVRjZDrzztrDLHRnS7kxKUqcaXDqrahRffc8CddZK6",
  "key24": "2SQhv9HjK5HVV94whr1BQCJpcv2bAx89R27fQMDYtXxyfw6i8PXANLGTt9WmEds7nwxXCmQeNyZAgH4Mb5cvRUPb",
  "key25": "EpEMDc6QG2y6yLoG7aWH5MWatXQv8HUZZPLnDQgHnT6vSv1ndqV3qZZ4xkYRiSYNK1WFos1d7wDL7MayC3BbCgZ",
  "key26": "4ZQMhg6QGWSymFgEAjrDvfqA6JuTgEZL15FWv2DJt8u4UddLaDSh4e8uyr6X4AzPHf3GrPzTvuSNe4X7gumiDyaV",
  "key27": "3Fpw9saMpKdkukM9CxP23dh2FJdDxREjBetSFR85pxFoqeGWqVaSDgAUiGfpgkTDAhsmbwC1SwQGVe8gEzeHR43B",
  "key28": "wqYsvbdU7xMmvHnaXX5qMZPbX2UMcKFbYdipWEjiNitdCbcF8FhNvf49zEQ3KuaDprVh5Sp56DcgtgqmVeNqUXC",
  "key29": "5zTfAobtvWvbcQJaPW6oz3dfgM6WMP85xNKVoF34wZjcLKuaBNuYnQ4VbVWxRki6Ltg2YxVu1F8CzN3zBHhQ9deF",
  "key30": "g7M7PDH9yiBStSfW1k3cEpzpVm1CVpiYTSF23efGsASEn1khbgVkjMbCrMptdLEuEuv5YqVEb6McGmwMWEJxZtA",
  "key31": "k1uWDudU2Y95zkn3j1gKZXKH55XjYasRBmaGTBUJUBuduUCPn47UBvnPe7esEvp81ELA3d2mHjBA6gy6Tmdf2Ys",
  "key32": "5iVfeMBZoQUnbwMsGYP3gRbC5ppsfaAmeW277mKxL16RQGYPYt5173e4sWSV5PZxHyNwWK6MgEuuyy1cX6a1MxHZ",
  "key33": "4PmUJcK2idD6Xri1Ttr57WBmVeyumLGoASvK8iSDdJ6aFGegEzii1mWUEBeWmnCDDHDPsGDJV4fKGLVYPeARnAWg",
  "key34": "a3SsG3wo6mAggpSzGR8ZQXL1vt4ibyrSwGbQ2PEnsHZvz6W3mKj7m7a82bEGk8t4aWkJ3ajrJSSy95yPXRZtniK",
  "key35": "3nqGkgcxwh4tKaZaAk19Jeqqq5PVdiMeFuxuXRXEowMU4R9PdbHQiBt5zKQZhTEdqv8G6K1JFxr8Un54Lz1refmx",
  "key36": "tERkwDGFF8HFCrkBrDLb5DmLjZHsp8HVthYuDLM4MbxGAuhnGs43Q3xk1AWvqMZE7gEsVVnfmHWYt7YNPV8BqVC",
  "key37": "avig4K48iG7MP7PRdnaD17hp1wMNeBbNDbVo9kUBSpie6AdPqH4cpbqJsNSk4WuhPbaUdxrgUnJTHUTJvJK6JwZ",
  "key38": "3g6ajKWHDC8psmAvTthDWUmoYPjCsSveTvycmXDvvVd8NJyypqw63tK1TDc3k8G5GXqdf7zV9SXrxckVayM2nFm8",
  "key39": "5mb5fsx3x5qcVQZSZmivXr4CLnerdJo8Cin1KXBhYdjk8RcFr5nv3Q2aBLnNfwfWmCG5SSEzUfo8xFM1yDQTUFjp",
  "key40": "42pFBXNKr9dKpxXYht5CRG7zDxPttw38A2b8ZZyN1tgBbPMAoxiFe1T49LwTVyjEwL4tmPb6wrcpgZ1eUTEZKXfb",
  "key41": "2XCrmK5p5Zkd4Av8Vr3CizTM5jo8ftuCkuoKn1cTSGXAU1pzGMhGGtPxmhG9j1Ciqzqwi6knoV4P3TghAXe6ZyUe",
  "key42": "49Baz73nfCmY4fHXy8V3hrVsCmHmqVwQgZhMXDuZ2iaXxbuurvDySNQpC7sNRrXMfQhi1EoUUSqpGB8yt1rBWbS7",
  "key43": "2x2exNXet7g76HtgdiQ4DfuPDxT9WF1hdAxUnHovgiYZurHdk3ExBXHGxhWhy7VQMneN2P96vD1MfLBxK51WC16k"
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
