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
    "49ckntRGqtkKvcHddEByPatznm19aagbg9ecxF6h2zkaCzuiRckFBPWUttB7kRufFErpL4pv9tZmfGfZv4uRhPQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53tsGV7XQmHtthM7uxYf19JkbG5ZFStLqsh6LhrU7bRi6Xw6FCH4ydRJs3e3KjPPZUDRdL4zEVyWEaFY5mn7Dgd5",
  "key1": "4idt7iaTxfGg14CxesWEV1e474bcGywRzJ7627U5WUiZ7xSVCJbiWp3SZmkKsSthHQVCyrkUnpG8hfN7fLnHXeqJ",
  "key2": "GoHpQjzEmxTgP55dT42eGgEEViTXkGJfB278VBinpLCmNLZRXf9UtrdzmacfZ1VKRsyy2ATLkxCrdZ6HLa4NeoU",
  "key3": "TF789W894BoGGQqigX8bFEz585Jqzvm87twgQdRsFQjfTCPa15DQUecaFcTyB1xoVL3WLAwzHKzLyYwRhAsqmA8",
  "key4": "2x1utjnuMqanpi6FCUFxWy8sK3GEhPZm4uN7WUN1AwGitBG2WdAioBRE9ykYcimkefaa15NJmMQww93zppnZhTED",
  "key5": "4WuDJaT3gMNVXuYpVogpCgRUixdVurzJT8SQaByMTnNQmPFwBawg3c52EuQmPUauZe2X5pUrnVvjd6VdDzkQ9jht",
  "key6": "33a9iCx1ydvZ7bHC5p1c8eaCjBvLMjiJAW8qN6WHPtDNmqHk96daf353vWy2pMbA7MBCPoeYzVAgb5oAsNDpZ6uN",
  "key7": "4tuZoDtpRhqNXohiTsGMX9rhNPLuaAf9Nkq87bUN5sZizvjkyBF7nBrijKanDQPctC8mR3GB4v7wEqyQhDv1Gok1",
  "key8": "34mokaKeF1sX6QjH41ekPWiP3d7shC6RABdeWomEq2M6mNtmijEuYZR72vsxYofc6BYjf1madr2wsMiCovcCHXYR",
  "key9": "2s5XqrMRvPQwhJh49EJww2JfBjWJG5fHK17BgbbwsiK619spWwPHxKMMDzYPpn3MGdeK1dz7NDoHxa8ibRoW38S3",
  "key10": "2V2hE1QdAQvQLUMXbE9K3Snxhc5jLz3JTRqJHo1FTha9BN8WvjGsnt113rp2VrhMXdPuqSYeJbnqH5JMhy5e1hTg",
  "key11": "5XJmuezEjCeFuV9cUDV6h7nihH2mtH7br9ZdPwkwbsSGGTiHFiJAFCznYzKFQzH1iypqTc8psBJJVMgCauHLCiPn",
  "key12": "4fFSMDCP16z1yFJCdMRrWyk58EX6o8rZZf7KLjMgDGBHg8AUUX7YqAGf543XvXPooTC1nuAMjPKDSkokjjLeAQFA",
  "key13": "2bPJyjLGiK4Mw3XhZqQDLFaMLujcpYEpSkRGFTRBwPEemNVgXmuXp8uUao889xU1ndAAfe6a58cQpMRSGs2aouz5",
  "key14": "3YpFAr9gpjwTpwBi3RNfAJuU7VsseK9ePCBeVe5CJAj6wyRHuTy57NHASqxFSvEnLP9F5mEvom8E1NivWV8fkv3S",
  "key15": "ePzGBK6dPX6QzhGFeETgwhV1XY3X9AozQHEKf4ctBrwZvvwHVuM5kx5UDXY7KMiNxwvw5dVT38k4GhzLFRGLTgR",
  "key16": "tfpQdW3t9eRrdeBrR1Xi4TrMNfLJMM1QEbBSJJezmVEMAZvcAoBDNpNCmJGHtPMvxKfQJ2rmbNtEdhoFxND11Ta",
  "key17": "5YfTtrXg9c2Rwx9ffZzMT7fAUk6hUjxN6eX82sQvDrT2gsjz5dgZV3KxNrbbJPdFRwv1tYctVLpWL2kWQTjR9aqr",
  "key18": "3mCQMKmrCXt6ps2zsN3uXq2zhdtqtqXK2HejFDN5jEX3DjXkdbB55v9eAvoNtBH4g8vthaJ75EybB7jSTCyBDahV",
  "key19": "4LH7fAqyxzGrap1gSrSAwfT6MeNYFNh8DMoDE2FdT7yssCjTUoaELsEzjZBJcdzsbaHNdEhVdYCkD1oEiXcBuLWg",
  "key20": "4bb81cg1bJPqvUPZR37BFvDYuSq6ui1aUPLcR9xpBGZD6ngPadHXZW95frsxkCcJE8wo9dBfbHf4PejrxV5aQNdg",
  "key21": "4X7PhqiVj8BNBJJP3ASkSNVFTck5pxBEGcryw2xMb8BmCCfjcfBBpSKcXW7jfPnWqaNPbZEf6AMBUfpnU5XZrK6A",
  "key22": "557yWrEkPvZyFUwny9KbfNaMPgnwQKfeFDNGEKhcenGxSNgg2xe2yrpVGTnM7S3iWrJEdyTkLEjXFJ5bQpBoUck3",
  "key23": "5y2K95FY9p9Zuq1ejwpWEAwhPYSwqmQ25DU3X78QcgAYzJpS7791rarzdCrMeAcjmJ2bmYgYrLY8GaEtPwVLbJMX",
  "key24": "5Lhg6qjzn9RhRPiNsrZQnN879YffAuBbgh8dy6aFDJfbqphLRXLHGCJyJRDMt9CmXhVirLpGxbeKvshYUkMnHGaz",
  "key25": "4n5SMyQMPdoG2eDBB5uzTuGJLvPRjuQPdc1dGnFgY99iw36nP3PS8dKMzkkGNeawhy76ZuMrKdWBixkPCJKxehUw",
  "key26": "41kh6vkaMjEF4NCTiH7RcuF8LFMKZekgQeWWJ81mREGMztmw6rd7ToN23QGZGfiFJi4BuFozw1qKQxS19AMXc2Ze",
  "key27": "51bTMRKtQA95K4VxfDKVfHoVXucNkSW8dpJYwDgg4MrnaPRL31JVTyzav75J1wbNZj5MVTRPjq91nMCVZPmM15z1",
  "key28": "2wnD7659oVu61ZPaX2unwyPgehCchJpbHZ4keK5JfQMAjq2854xCzB3Tf6dSTZvVabaw8cpxaFeWmrNrqQNkWm4V",
  "key29": "38hhwBdkf546Vw8L3FwUMYJdwVQN8vaXF5coknTW27GdfuiGXbH5dSMFPx88uVsxLCdgtkFoDX95s7UQf6DcCRvS",
  "key30": "5LcGQ2FuGtwwFvnwYgm8EFWpXXSEhcCXVxzzv2Hu7pfp8nrWkU64k16PRStVVtUG5VtbC4GpxZJEG2oANy1hWNJD",
  "key31": "QyXQwBbF2aCJrbsu1ypgReM9PDfQB3QnkY75kcU9mTve8c2eAUzi9BPa4SSUErGVG316rW3fiftZzpojPEMtFdx",
  "key32": "3vxKJxq4dVMMjA769xpAKmuuRNJbvFFw8WAHSseqCesm4NRortMmtcMTaC6Zp19BbSybC9GWqJhW7eFonbAbCXy",
  "key33": "2X8JQ8P81svmruAzpfF2DQcrFSsDjw8xdfq82co7CTHhjB6ydYEJxacbRHLc5YdYepSVXdtfdQnoYWVfdmcTTFaM",
  "key34": "2L7qBPvDtb3RexBqwAyLu3MsDdqrabcXSab6V79qq59pLRyLqVsY6DL9JtnUJWEQzXPLTLPQRKF2Wx31KQtdWDV3",
  "key35": "31X1eZ2AY5zgmoELaVPDshgS5oFWZZJFSmUKJn4FbtoS5na6hVt2o9A5Vh3VAsoHJoskP5Xsr6YbQBBiCLf47NXa",
  "key36": "3j4fSH83PhTXVUfmagqD7ADbr6roRcv8XNKJekNbbgeiJE43GrvevhPcDhzTSGcNs1hYgEpSCJKV5F3gsJktgkXw",
  "key37": "65T1u7g6XwfnspfnLuL3imnRWF7nUMvZGbhUqwUfC5j7Cj6q6PGNpsY3DwafB4Jt2jSAqEx4ANqwW9jFT2V74YNB",
  "key38": "2CwNgvSaBQgASK9q7Vkq7tVN2Y4m2aBihGgyZ5TkVpgTLUkfzZ23Wzevwz4zea4S1JbsZDta1qCnAwDsBcFAQwVg",
  "key39": "4TzcjvQ4pap81nmMpXJAdBfRivSsaD9SVfssmXuQpKKZ9MmHadmmSphJwREF4tBYq8bW3maGzsR6e2dhWwqD2FfV",
  "key40": "JSNDLhmKP7pPNcgEGv7qgbeq8AStppoDhHaxpWrp4TvNjSyfUxT6qxY6qVXkAbgabVafLrWRebHkJnvw6H8VrVp",
  "key41": "4PkZeq1S9wqJgqofzo7CZvRPvKkAJbrs9aNUhhVjpMxJ7ysF1G3r19xrAY1Zh3pWJe6XGeGM4Bfe3o5Lyzrb7JUK",
  "key42": "3cqM7RKQFH14mxtzUuQ1L7NwAb3VyyCKj3o6eTPzTbKddSAXLLkLB7CpVG4oGArd9SJUB2KJTsVYYpNaJL5ijgE1",
  "key43": "gRy2d3rECrmevCv7mtyPz8dJbz49WZekMACvFYwiJqJYQf2Sacsh62f2m5yL47bZmsHEwy3uiZsmbWjU1mULoN4",
  "key44": "4ZJyYPZqQwmTDrDMa6LGee6iPGuLpBuUVN7ZecX1TzHeXhRtMVVG6sqTP6TkhqyLXomPDfgoi7EqsriovNAZYHRB",
  "key45": "1gSzZ9FwjFapa9q8s65QEMoXNyFX8PUmtw4pd62U9G8g9P1nyTbTh8qZPYcSL9mVPS8hnN6fysuHmY9bRUSuAXA"
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
