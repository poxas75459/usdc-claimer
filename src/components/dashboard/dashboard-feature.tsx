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
    "2yma8W1cfoN296y2ip8yYWwyAVFPDU4PDXeqzPHoNfoe4gAWr38WSiPypmXcYZUC3kN1q5ChuJtram3T2qmScUdG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xWGGwVrdm4bFmPxjiRDsx19ruccTbzSg8DDm6UhECguQWNapiTqdXGi13NKSVjRuuHpbZXyt6ydC3doUDobVv6z",
  "key1": "2uUmypCbnm8VJKA7AhbnLwGDwFFSMGnUbWEYdQGkgtTe6Eo93X8gmyUSwJLJVWZMy6UMxXgeZsKFskMWcaDDJ9Qq",
  "key2": "4NMa63eRzEjVDhE16ZxVbRgGydjBYn7RVvX7ZLAHUTk8WvgTCsBJJR2Jc1hf7iSmAXUoYqFdbnaWf6kBVUGBrE3j",
  "key3": "HLh7EjacD3voEFiUnFriv31YttQoftYxjpNtRcrkYcqh7NYbSjB6E9XrSwC6at2hqS7YPg9DAmqFFg3S4UhHXVk",
  "key4": "2Smg6xTeR1tsTBxj9juNgEpBmtTckDQs6nVMddJwWKVmbK68h8YCvxasSbevBKnK75XyE9cjfcR9wsH9qpTMdavD",
  "key5": "2QuHhECccf9DX3wEuuH4hBLWpgD6ZDCMJPz3mCYugPeNm6BUtRzrazn3PjBJcdn67XDcdtBjihSCEMuCBxpmqcxN",
  "key6": "3YfKUCUJe9mfvMZw6YbNuYmM4bmgJm5y6ViuJm98siaUEuQTNv3oKHeUqFFFxw9oMnTvRWDTMKP8gRYN4V9F3Vof",
  "key7": "5RRBPufn8kcLgHsbQJWivTeBGvF472QSFEeGmshdzESFbaA8KtrmHMmR87VMZswmEDZV8tEegJxrqcdDeMhhafDE",
  "key8": "675jjcW2fYqpoSMfHvrvqkXp1CYZK9qMvDJjfBnDPYpEd8CRNA5521xX8N3s6mGYxUpEGPeCasv7kk9SjQNLJW9T",
  "key9": "2rQ4kiwpw5iAQeqLSv38JNDQY5GcygnEtaUK89V1m24eq9XzqvFb7UeDshLwsWMLmCJ8uvZZESwuSVksjY78fH1F",
  "key10": "3Dc6WCHuuNRs4uPGsSVVxa3diTJ1VYo4UdPxcLVFFotCrzevChWnVe65UpY44fZPoctcXoRimibN9KvS4BFbBpya",
  "key11": "3P3PBaDupxcHRryBZ7VP7W5Px3gaZpeLvGrGD8PBiDgjD3LogHuVUYxUeYWw75YF3qY3GfVW18DUwGQNnoSm41hm",
  "key12": "3BnU5iPqgWESj44hg3cVCKC3wMKHY1wHM5amVQ47gHgsSMAJHxErFk8fiRnKLuJyHDpkL2v6C6KtswHgJN1VLbTw",
  "key13": "2gRmDtqRW5cAJcPTyZ5CL5ufDVs72LcysZF2VpaEGG6x18jSArCMUCZVXwY75uXsvabKCFNRLGSW4pkqY6xvsX7x",
  "key14": "4nhnoDSJzMLG7eXXTdBw3sCwpwepyGTPSMcKhjsK9ezG3Wf1MNwDLvo48XCbjDMAkMXn5a1hsLBMuzfPPqZ1L3Dz",
  "key15": "2WhFW1NwwwKSF9ttwU1PB88WnKsX1CTnrQLm8cPmrJNUZikyjM5MGrVdow7aLRLEujM9fHLwwW72oY7g1DqnjBu5",
  "key16": "5cBJJKBj3mYXjoYmitSQskZnDpu7YUqnSFhRsUG6JQvceNWtUah8QcJLMHizR6gVZV6BFTCmZgxe4UrcDEhiLJQe",
  "key17": "4VHtdQGjVPiUdVrosrWPnHBztfPznqzKdUiBQyvKYABQm64tii3eC19t4EMkd4B7BgMmUzFe6kpg51mBjBxpT1FK",
  "key18": "bZtr4q8aJmQBDGjNcCaRxC8KMTeVcV1ikvGarpybH18SAyeXuhgsatVCXVpUv8Dqq6gKTaTfzX4M7aCymbtBEt4",
  "key19": "3LGcqQroEsHwSG2tM9yEBn6PykFzmwncNGDRBBHJQvAfFiKmfG2X7ighsg5W9U7KGX2Mh73nQjmycSAp6MRwN7oc",
  "key20": "4v1d4Y2Kh5qiervKCA8nY3R7u7yktssD9usT8HSX4e2rJbvEWmeqH6HyhxtTq6YU7xsrr2RbnZ4uXAaXuN1BjQFE",
  "key21": "1GMjwrg1ZhA6W8KpfFQrpPPygFcWQGs9HosCxsbR62WWzGrn9ScHPMcx61fJYLLz98FpFsJUJab5yVmtKPHdbAh",
  "key22": "57q7wbnymrKfwtDkV4RzB4Gb8uq6HTaKkjynhBVciNZ9PcpksnWshLW2pMsFqLmkZVzppvYS3xJbtU12LdABseVc",
  "key23": "3VihaxSyAjNTsb1PCjAfwZgAczdt1vvGcfiWsWxDTHmgiH2eogwVL2LpFG2BR8mkh2giHqGzNg1Xptt6Dh8UtgqN",
  "key24": "CuJWwoLwo9k2yxKWyeDFugLWpwRUSu7rwhi6uaHGLKiXNekrQBkV96rdHjNierYPBJYpJHEXyJCFr9PAbLu5Rop",
  "key25": "61eCyo6Aeh4Avd2JErHEzqAM9Lm7sDL11DM8JBaf5PAGHBUiFeWjLxtwbnJcPeCVEYVPRecxLVRfX83Vn5wTwfAU",
  "key26": "2TgTModRZDW2j6HDU7uLv5dngrRVxnN4Q1nSQhZqGac1oA3oWHAP2EAUgWC7h8v9TisR5nb1p8ZGsZYK8VRkMXCD",
  "key27": "tMmg6xWxUxEDtaG2GtizdvankjPHdhuydL5iw3vB31o63awNTgRq2GCQL1vcs33KqCjf9MzpPeKShyuMivVhPam",
  "key28": "mtaS7GBCV5xBwv5Nhz5BDauCsEfZM6a3d1y9KziParmaTjQ57QVz9nVHWuTo39YLKs8FwnviHik1XgGWs5wjard",
  "key29": "5eXAcac3shBFZztCRpdXPCJy1cMCA4TFY8F515ZaSyp5aM3KJ6rCNMRU2CoPuj1C3HpPEujKprW7S2FRrpr7zeEe",
  "key30": "3PMZMm92pVSPNbJ8XVrArtay5jxxeWwbmjbvjdz9p9ZAdj6JiYWP9uyhgBhY9StEmpL5Kqtr2B1x9Eq2LSyrWp2G",
  "key31": "3eMALTzgatFsVDz8EpjZp8RYtJvd1gD2VK5jicwjYV8XvokQxwmWTMDZ5szqd5draSN4jYHJ1EXPpNwafUyEzjGz",
  "key32": "2SYnj51BkaCESYpvzZ8fztGTYCBK1jnLKr6GHiHV1oZmpAJvMdS6hFG2kA4SzgDxe6tNNJP5AnLxa7oHNYsHNYc4",
  "key33": "5qP3MCNvCWeZKBfV3KpEyohR6SZkhWffGHJSPYgtnkrRUrjYihqSAbSso7c88KngJFACKxvXKyYctijSyKkdSGoP",
  "key34": "36co9VvKW43Ryc1isZ6nQymR3RwbWuio5eioR4kxkZ7sQE9B54pSLSfnktVsEcgfACHBh39itsMkSwxeudMLwCPg",
  "key35": "24EnjvdYPuLUonFvmVHghBqUnt4BzXgpDXoUb7ksaoHoCP1JCe7JBeKFXnnUeVV4iPDp1eUBpAGJWpu8UKv4RtSz",
  "key36": "676LjPQp7556Hnjp2BGNJvMTUgkGCvbyj45Jg3tgnHVaYjZab81eFWkpyjkAfb3Kb6icJChYwakbL6h8ty8Hd8Ey",
  "key37": "5BJqP66rqaK7AFtqYujHwjqnuykcuEMr8o7MeitzyqSePhs4TtkSmCMebWuwK9VuhMoHhtw6YdNZUcMQJEwUkdvZ",
  "key38": "3QVFu3hDCyTJk3Fi2qZ9ryxZ7NZCmYwmKNpMixWXCjzX4gCgsL1woAyQ83FszXeN5vyHd3ctLwsKSu97SQQ88v7D",
  "key39": "34k87BrfN8faE4BqvFGmDHbdSG6ZCkeYp5Dcq3S7BFzwp9TKsyn57WbCuVzAaHHbSevCxspFF1RG9ZA87hZ7dDaR",
  "key40": "4PRFzh9TF5nTELuWDPqbkthGg597bkDKPEWJQqsYsBKVL1gwoz83rXL2evFLCLmtxUEMVnLKZwxk666CYurttKLK",
  "key41": "54mMUvSqDponcT96cZZkFssxeqnjLdkKpgtcqXv6vB8PsDmNuvWPLBN9QxqwtAALL5ywjKm4hGSw82aDHr82VEZg",
  "key42": "3y3DudSzB5NbaTBmcuspj9RzXQZZZs41EepH7LceKAPRsja9oMGFUhkYP2tu6Jqm6rHD1gMKUaijC8ohqVccGKBJ",
  "key43": "4uf7pSDjNvzgPCAWzmUmuFwmSs63tvSckoPcB4Lrpd8LBbhGS7Dm6DsLU4jBHMv3Xvf81iYXRFhyQxP8Bt3TY4hX",
  "key44": "39LmC6w4WPdg9JAUgFsNnWnudoR2a923YNR2UrnU47eexQWy3BUc8FhY3WAsh2AhU313bhcbKn1vSQHLpHborKJB",
  "key45": "4gmDvFmok8q6MZCpB7ATXEX7WMEP1CDSQti61KGJh8pT9FPYBfdDt9TXMhhjWGVhkEJhkhafDjad7iu9Ymom3xR7",
  "key46": "4SidzRgxjrN87c8coXo7mXnCqqGkgbcrnsiv5qizgFmbLXGjzmXtELW8eL6v6e7hpwMg4uTws76wGpHixP7YpARk",
  "key47": "2HGDe4xMPnbxzdr51M8yxmm1ACM1jC5YGMNTuRmUu3K1xKhVEHcs2NQMaqoi3zqrDRs11WM3FwPac5JYyq2VjToJ"
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
