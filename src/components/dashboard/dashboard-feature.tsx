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
    "4PizTVfWA6gEA8tfgspEPoi4BsQX9BvGncdzrkVkg4m72yx9G2ZCGoHhzrmAet74LMHRu7c46SFPZFhQYctCSL6i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VoDEoGaANWLG4BvfnkKoBRCmnHfqPXWZuAE7ANqTUVNsd6hFvuk6YxB3QjvynWNipsFU2rEEYLJhzNrWFvYW8bf",
  "key1": "5Ubn6DwVbAWpzvMpn4Cp9F58awBpyhUarvDTn3LV1qc5fk6SttKB7yrKUsKcJjFD5kYfgzy8anw5PSsRb8D72y1f",
  "key2": "2Z6pr4EWVGLokDhDAgw5jCnrKZToZWe7tmNVya5165d2HJMHUipzoKZYGVBEqypbyueqRKDM6JZnSVMXBxT2Rtnm",
  "key3": "3jpj8GAtsswsihGDyNdDbiog4dx8mEb36FD7u7oNBvmjtaYvheB3EMTphttCLLBBWnevk4jCyWgrmdZeXXYyzPVb",
  "key4": "SSC6DVTZA1XEVJPzJTATefbEaAutZQvWC9Yna4gAwwhcndQp7CyXC7jGwJHn4a3HZohNmHasLHa53fPn39jUv5j",
  "key5": "3wyCu7JJ6zkhAm3DX2AD5nfE33RdxXiRUMp5qCKmRWMzGyrtfXsVDUeP2zK6Ww4bUmh25bQeB942jMCBLLCwgL9R",
  "key6": "3io6zaeh7dgDNDmo37jNwq3Sj8pFf7K56VKPiWfSd4WEqw9FRyRtrHPY9ktHYFyU3u3FSwtB5HNoiA9Weewtjbe1",
  "key7": "2tGpCTZtA83ds5NsqtQmJfQBuhZ78hU5hWDw9mkbZCJxcJq53s67qEAWnGnL8wF4aMM8C25hEugL7VcfyjaJac62",
  "key8": "go7vhUaTeb8hFekDyxFUcKtKQ8wFejDWfEwX13iQh93sMMgwqzvYS1oggbmT9C7WmvxJvREpu5vHem7twYeTKTD",
  "key9": "3spkDuGKNBYsDeYKRP37HHCfBDkEZSeesYQ1PqMtyivNqfeSN8Pd7ukAYwLAMbNGuG5Kgs3ZmbfrHFDLY8SNzGQR",
  "key10": "LsqPBsbGyV2spdXnUUeWmzdhb3XaqHvkXc3sunVMaimken4yJPG81XrcrYWMQGpiP7Np3ouzkxkpP8cVHAnSpWA",
  "key11": "25okC96t2RU5xbYDadeDXQUKCtsSMr9DqfDLZChqmPYVY7icfm3MHsD6MDWWezL1rXzmQSjhhgmfLkNEfEkkfhjt",
  "key12": "4cpwEuF27NZUji3JLT2iYLyUctyfPL7XZN9FJds2xuvGtq7R4GiaiamRJMx9nCq3pq8NiVFqCooRbWJb9a99eTTG",
  "key13": "4QZ92WxALBtxyABKDzUnsNU94UiJAQP584e9RKCCCV2XnoX1koSruyMmhCsKPkw5tVEXkBEoYm9Uu9DqXSVhtE2r",
  "key14": "FnatJDMk1Aj52Wyw93caL36R8t3uhEfQgpWKy3RVpokQoVVMNom8778vp7AptFhWu8hSTGSbfbzdp7UiLe5JpF9",
  "key15": "5M2BFcSHsBxFrEqbCWU81oUYphbf4sGVEb8m2YVnVLRTFH79VKNoDVNVx7yAEB1S8oGgG46VdwBBxyBGyMgTR6gU",
  "key16": "3r6uZ2EJSG2Ea6hv6ez5URsfB2Y4boXWdopKVqUSa34dntiBCLotVwrhhWDXgDUWMTi5hQcTXh5F5whsuqtu329k",
  "key17": "Hkq6gUkYiNzW6G1Ln4RajMawiWQCrQUiNBRadwYGMu5Qpq8q3VS1jUCnzTVCSd9cXXeJNSqrL57mzTCXAiKDHjm",
  "key18": "3kjtw6R5NPnmWSsmb1G7Ms5cfVPzCMeZ6qjrummU7FZbmqLELLHLVPq4c2tC3n4e4XwnR3Vi6yy3Gawxvoo2Ywvf",
  "key19": "59fAkBYT8215JyMUcn3GQLHJRw3JVc6mvLjBhK9UCmip9k7WnRr9UQurnyboj9twm8uQZGPYLheZsBzPL1onAMoY",
  "key20": "3hXRJHAxqDkmxYkr96WcS58CvByt2TJzUirux7tkUj4S4fHf6FdwEeNT5KAvYHNbypanL41qg32DgVmPGcCgvDhq",
  "key21": "5nVE224GJr9CZ6MsGS4jKrtPbdA7KAsAFMv4jT9URvNzEz8FKt2FJFPy2RDiRbUa9yd66NkgTz4tkmfWoSRDUzzJ",
  "key22": "37LFEkF9JGsW26LvvTRpNyKiW4cmhEyE15AVCVk2fZmywgecM66s8uDpVXjb94Da7omZaofLZ9HowXbYV2VjQk8S",
  "key23": "Gi3cMWEyk1VmsuEaMFyW7kgFPzUSuWQyP3vsrB4o9wq1NAmQNAph4ZPppEJAQEH7wtLAzTzn8rGRYFxRbdFq85M",
  "key24": "5wgDSvxQmRUFLXUjXE84w8QVvRjVSs7Dy3UpaUPvKgLmJcSysjDwh5EkMTw93cREf5AY8u8iofzdhsToTCksZumy",
  "key25": "3ZnsivsKyw7wsRXmeeYcgPzSuBkgn6Ly9qSDd63wynWNqxbVsv4kDpcFG4zp1Dg6FZJqzSQprQgnT6ukMAnZcD33",
  "key26": "2ER7qQkoJYhepWBHXdsdfUggLmxErqN7oqzeiZPpeidFjcF5KW4oDcmGBEnpTwecvPL9iXLzSDmCwBLNssTTpuGr",
  "key27": "8HAMcszw4k6zeTHqcdrJ5utUWKqHkRCYvZ1U9KCp4r2hcBskLvEfye2MCgXzLSeykVsUQph3JAVzpMWdy1yGWNd",
  "key28": "3SqA7yALC9uuDTV33HSnUiEAuXyxNBUsQ69jgQmeSYUWjqjkjsA4gc9QCCY32cKVzgTTxkTWab5iNLKBH67NFsdg",
  "key29": "FeXAcwFBj4rwoVhNhvg5xuc5hHSaDAahQttLDPn9EqbmkeQf5xfSMK2fq1iZtdKjRsogm27ajHUibDS4oDUfBpP",
  "key30": "2Ues2dYwqKqN6T8VTG1kfJxpFPoQQztdQ71X8EEQwg8eCUKjPHm6kSJtmSV8xpbRXokdwrnVHVScQWWsXKpwheTc",
  "key31": "3d22f7ZsucCpBSqFdexqPuXJKbr4C6XFPr1un3Ph9vfhWFkf2gXH8ZcVbQagLBnRkP6MxcNTtBnwJ7bnc3q5Bqgv",
  "key32": "3kY85LE5vnXLtd8pJKqeGgcyzLtP12murmSja9V2KMAQRF2EVGi8GELpNEHEnd7arbvdBXP4pQVM8RpiwBKYqL9E",
  "key33": "4PXyRARuPLcZgKpxvjUEiZFko4maJ87m9qKTRK4SHU1VSWkHJM19fNp3mMY4YRfwNW6xx3MvwkPqwSu34aTBGkqk",
  "key34": "4tyr7eryqSva91bTf2HBCWEEp5mKqUhxN9Bm6wRqxM6bkXvUmTQMaPdBabxtiZDgV68NGSckNd3CENe3xSZukjqc",
  "key35": "3RWfr9VSktWZMC1HJYiV4cum6Lcj8YhdbEdAk4LxnvPkqvy9gh8mRuZokhUTDrfftmWqP9ZrpK677LeUNDAXum4J",
  "key36": "42ULWMD3CfC4K8qxmTpdscULFZjnq9FeUkwxjrR9CSSndQ9d1her6ky7ezTyEgG99umK7G7R4XBsBUU5w5ngyMx1",
  "key37": "46vtgRuPV6tTNoYbSbkSnk1JsVNHvDmMSUq86up7F2oh9RtcYNp1zzhqXAjJRP8hTRZmccWeCxyLxw61SK1Q5sUo",
  "key38": "2SLbQHjgCUxGBur1gpdr2sM5Gx8kRiDXd4J6swZgu831UT2VU7LFDvSiwsApcuViCR178gYmpd1vPtvfZ6XTHS5Y",
  "key39": "5GSduAbHrR1x28ahKtXhPkBsrBD2pLtWsTQGEKp7cGbvqSxzw53JgL3dUvbvo6neeGjio4dGJWwowf46DVtwmeV6",
  "key40": "28X45a6oaXPb9FHBLyApRzaYyNHKMn6ZfsWJjvgaGK4Jj29XjEcUdJfrH6C6QnVnMs6tSDXSZqe2Usa8exdRWtVt",
  "key41": "3v9a49qVr616FisnzbbM3yLLB1mJoy6P3kafiJP1sqjGXCEF3pB4xASUKSQdyVjCaDhSorg77ybkGuGSBPUqNp68",
  "key42": "5x9MN6sbe69m1Phpc8TwgxzjwpV7P4bYeJEcuWSWzhobu8c8H1jDvkZK9hBWcGNLJ6LquKLCCGAwVMCmfdb4VmMM",
  "key43": "5o22z79gabLuWuyRHXk4MjXV3Bu5SZuq2K1WKo65UbuzRfaGH29LRhyLHeWnYvUWaW8msGLhYFdj3kKfWXvtkdKQ",
  "key44": "3iSrx6giiMawnYtx9oxJSHRNV4ffmh7iQyeCW23T2xxQzXrryFRamsTqZTtpaf4bSyUc3F6BMGZ11qTGut3LRKSY"
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
