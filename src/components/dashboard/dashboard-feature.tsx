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
    "2ejrwuwCtGARuyC5mhew8hjT9ADEGQXVexUfLBRQstkRsam1asugwXjyLybPFfKsa6GAPZn8tRagLsxE78dmjJAS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cHBetFAXNFG7BsXcYN8Hk2JomxMyG7YGt53RucEDVKs3xDe8f4AqeYnVLjmP9AqtFj9EaKtaVGBgTrN8MYrJssG",
  "key1": "4oUsQjWiLDmkCwgDunfgALr19cnNKgJrrU81955HFv3tx2tKZNkCdL2ZPnu7oztxH4cPmHr2GzrcJ8ypqozpqfxW",
  "key2": "2z3deDBArRLmmThQSbz9mW8PxspeLruLyxyJAGCYNaGJomBuVM5g4MmfWC8D4T7mLUiRxPdWYqVrJrVQH3FkyUNW",
  "key3": "62NFvoBwa1PnbmmWPoppW3mJkgrB5jCaG5d33qp1h8KUynargXqj8or8wm1YHaZVtD7e5qA2fo58wSmV1UAXBF9w",
  "key4": "3U4rdVe8NeD3c4UAMf2raGQado9Ks5ManFtErnwvFv85DGC1wfHCxGWbQa2Wj6wTCbew6XhAek4HHbBa7uWsx3HF",
  "key5": "5Hj9KBYC9VsmTwQiTpfv3Az48ntZjn8WRWXYGnhCbqLfgJqhcmDat5A3dETWxjWiTmubMnhqyjjmUvNwddskYLzi",
  "key6": "5Etj1MM1faw1GH5zwet7ocTBMuU4d1V6mqCp74sbDgk7CtLm2u9wFjQdvfHUNUTHgzu3YmB1xwZpXdfbQ4CdgaNY",
  "key7": "3opRLdTHLqbswCnmstUJdSbvLG2DTdbDpvuXQLGyLhHdtkKSraSaYrL5k7CBKSJFtX1AKNBpQm7XfC5gFmLdBCcD",
  "key8": "MLwteVufRvCfyqeKxRGcKTzCkorvocTx8EHWHsW8kBfkSQ1JgMqubvPSFJYaHpdSCNN6z4BYC18bY1tg7bHoFP8",
  "key9": "4uB3go9BEAFxQJXkrQTeueicMY7Mevbcm2YSx91phYx3z1n1qqLWrUAjXeyXaKzUesjUAU9Er1jJ8SSrYD5Dag27",
  "key10": "21KdftqiGzN5zPR4oCTo3nGhKXWCQCPkrB7UENanyh7x8CgeMHnivSPvqzJ7Q9wvHDXZSwNjMjBuRBwyLMyJftEa",
  "key11": "4yzzHXCrxyAXQavMy17QYRVYBCsmnPSp8uBQbQ9BfF8PCZHiPRb1LKwmzboix78qibi6RVAx8N4kx4UGSVMA2Qxa",
  "key12": "5QxCnjW3ENyAG7mvPRmHw9s9hm137BZH5ynpLxUWx3keGXhGygCGH8Nsik2geJEWP3Rv3HJjbi8nat6yGMtAmmh",
  "key13": "2VKQp8kp2dW4eoQP2QVM9xW9pCDZS4XBhZ4Q4K1JdCPnzrpav8cRiyFMtQMPs1zhkNJt5M8HHZg8TeNeYayUw2z4",
  "key14": "5eiGa4BS2hepAmHS6ZzVfDah4EKx4qYAeg5pYaccUaRDR7NgZR2ywiFzwvYEJLQyx5zRieriGBuAFLBcv6uDZ2Jt",
  "key15": "2rP7k9o17oesbghNzK4epy2YwLuRGi8zVAq2EZ3Jv4BdoXoaE4ZyAvXF6zXHB25XdgtZdR2YEL87kGsw5MqwruFg",
  "key16": "463PwY5zNfTyyTAAdBgWUBxo8t51Jkw2LkWqtMAjSGbdEEWG5ivJMw6hAfdnVrNGGpuvw26MP1fU1ZAR2H1KCa23",
  "key17": "5WyghTVdTP8SdVrJNkYHECbninb3WbSwJvhgfjJn9fX1DTQZ8nmR6YaMbA5tY5ZnEFh8Fo2jKfHhXNNUkbhFs2vj",
  "key18": "4WGHemWhZsio3CHwZCDAzZeLzhUb7aYcLLEMFTnv5usGMg7FU8fwqCN5LX38k9B5kyReUoDAQTdjTRBa6jSHZtos",
  "key19": "2vZStmQGzGMrntN6NNhCFseHywQfGhQ7KRpB7Xz4wKcBRPKaiz9EMXcFskhEFJxfvbw8EvP7WczGZP42jdE7Fn76",
  "key20": "3cQaFnjmRf884NN72iZBFczrP8358c6wai3sT3xNwMLpwPHJGc5Wqip1NGGmqwZe7zmDcmTs4LH5AvasSiYQBCte",
  "key21": "5ZyrsqVbF6LxBSQLQoPzXmkQzxyUHKvRmuS3rfZnoP38gx1Jv9Gxcv7tD4Jvepn4QozGgKvpjTQ47izALGMVqcHc",
  "key22": "37HPnSWbgDWAXcZx6pihJX7RmKedFio1eZZTH911mWWxUYaUXK4dF3t5Utr25JA2Qqe2Ppt1LzEWC8CjxP7mYfuM",
  "key23": "xJ8ZKtJsftT8RLHLqBdXjCQ9auRTmPr8B8LhSP8ZfAWHhjTzwvTTFmv5UkMxmHKo2475Gxjs91mDwiyqAY7Cw8s",
  "key24": "4zj3ee8Z1ZhqPYEBjMzBdG1Wzp3WnEdkN2UqENr5ohMTq8YyhoYXfFf7vT3Cs1Lu2A5DDZGHyXrYCYGFiqdoi9QX",
  "key25": "2eLx9a5ULETrkWNVDFujhbNKRyPvqERWRxTfkSamt43okdxnD5BNp8Z3vQa6BL9Kyjv61YNHcUDiK1crAt2vNjBH",
  "key26": "4AAzo9P3uo5QvXUkdjNd64kEra5gXRZEbPo1NpFmJkawHbU159tm4S6LejrQodgTfyv9i6jrdKKZaqsFwGhcGdgZ",
  "key27": "acGpu8cfhYH7xFxqtiztrwz99zNhSqz1ShqxvXpM2gY6mwGiXeWf6AhgtHfEidLcXYhBwt3pjL3q4LiwuM6BCUh",
  "key28": "49muJqmjhwdKM5may1VFg6mUyzBKkgh7zs1xoQRKytByS7zUb8UhEAGa1XKKLTewVsY1nPHS2JFo3F2siTxcbTzJ",
  "key29": "4ZUpzhozSzNn9DrbmWphKJ2VWC1hRGaLBQieS7DwRipDGCZQ8E8LSHqY8kmha2xYyDDCaUSbfv7YaAeH2tZH9Nse",
  "key30": "5cA4kRTVr3a7nnN4EzAdkzu5mFukavapehKnGH4iSrMBbL6W2N95XVHtvayQNXXZN4xED9Vc1cLvKr4QMuZXfaqc",
  "key31": "2R8ddab1o6J9qo26y2aHKLj8mJLB2LGdpraxrk8JBVajL2FkUEeRDrJGCLhUUATuXXGCkBkj9oayf6Uv7BFfHbNu",
  "key32": "2AUTMzFRfw4i9FbBfLaVEvHbsDYQJ9xAZiALhGDpN8oPpKdCEesDg2JBdLMjRi5Q7RhxPN8XXudVsFk25ozL5txL",
  "key33": "4ycRMAJf1TqYNFAwb3u13JqBUzQK5kcK2gHcoRAbdkYS5sWP8Pg4CX7nqJr2JJGyfuDKgTXDeuaH86Qu1oR7JpTd",
  "key34": "5Z3mcH1fZLw2q41C2JKmUaVYD4ejGbitAkbMunNRJpUjuqHHogYehhDp5sKYUGT4ieJmvre64hcApZcZi7gUAUQf",
  "key35": "26bZzrVGrzZDomAZtjZxRetMfCdNUMAbrCnmpNjB1VrPXpUu2FVmwbAn7cCUbZVYqF7XGmUyhhs3LWPNhFXHVFjv",
  "key36": "5GAzoQME3QNe5eqXoRcd6omShuMZyvT9hxuqkGoosdgocdFrkAtkZym3aZVk7ERueQm2hNgA9gGw7oWvc3Cffvib",
  "key37": "3Yv8z4Vk7qE6xZHYGVLwgJcsocH2mPPZcoKdE8cvesaBKWygXTSycRaW9RY3F39zJD81GACgtodXCzAj9sSFiRHe",
  "key38": "5Em7AiM5g1TABTUmtcFATxcwM6uBPSeNod3dsQ4kPFuytav4GNGPccuTiaqqhoQnRE99TTcD2ZkbVdptRtF6GvWt",
  "key39": "29QQsKkVua1hkHoY2t4ec36i8tibmuhFCmktpRKMaYJQSJmx2CbLVoHqT3yWThxnPHQVMJY5aJp8Kt8U4dD9MotR",
  "key40": "S8Km5L2ipjegdrDUYUYEWRTE5QDFNfubAiJ39uBDgwqdYnyfGFEZZUedpoX2GGsZf6iaGYiiZ1zfM1anuxEjGtK",
  "key41": "5KfsQ3QkPWU3X89XVW8xXUS1cGksc94CoM5igaa5MnvzgGyqmMqTks9fh29z8PNgeEtaakt9bL3DcMPeYe6ZUUGb",
  "key42": "3zgSxSBKJNFsoDR61H2Um88cdbhB539oqGBoFBHTeH4mHVMMhv8vCKJaGzdxxdKwJMisMiREpFWWXxYRt8LqSrg6",
  "key43": "27n1xJkneMGCNFKQgZ5R2GrKFQrVmAcJSTUdZA5KLVj3WBcZE7eehEk2ky29WqYX5ZewjvhRK42cm5fmvy17RGT4",
  "key44": "5QdgScpi2MdrSc11GGnpVcw1BxJoCw7k5VaxrumLk1FrjZ2WnLN7uzrha92WTxNShQXhB93tAgNVEesgu6uqZ2w",
  "key45": "5TG9Lwh2NU5KzQfA5dDog8AJAiMndPkmG5ECX17uWGbwgew4crvRgPgjqpEs5AMHC7nu9vAAJYQTTpvnSKwt1xHa"
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
