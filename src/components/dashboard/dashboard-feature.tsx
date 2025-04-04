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
    "QRCt38MuekB7nUEDy1VfDJnSWDmja7awwfMhWKL2rpyo6MeJZY8MHnwC4TKL9A3dPdv4AfTE5kN9Aw9wLXCuZpW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mq43w4uyP6G5QxpHn76HLMhfCCNakupb8FQsn3hojvsj2EDE3mRRF4EjcgDzsyHrHypXdxB5jw5tUeFDPkrPwSs",
  "key1": "4crucgo89HjHFNX6yvKeZoPJH8pxJNKRCnTp3mt6oTgdg7HDc4XambKjiPJtxp7SXEYWFjab5sWrpGfFKcfPt984",
  "key2": "4KFY2Wt5n7pricEpdZco8vzfHpku7AGHafF54WWQDUiWBqzYPr7id7jrdxTknv3u1CyYCP2xAGgkDj8G6eajSD7t",
  "key3": "4SDv2V92zBusUjn65xgxUWihXKPGAWo1xU4vThPMVPHXTojWV5AKwJsLYgZQMKagXqCQYsQsUvAKmtyYNykSf6N3",
  "key4": "4VqtRcBhdVnW9y8urhQ9K8hK44mQBYViAznwL9VG4wvKqML3ju8fyqqwwQfnjjF4QDWyQgNeeirsuUL5jsjkAVNM",
  "key5": "5F9FYnsgpBdaNurBY5zQ6HDxada6zKMEeakbC81giN5rK7CK3o2RY1tPvxKSYEQx8hZrDDynnnCkruv3owoJh6Mg",
  "key6": "5aPGQULgVZeNhLBpQNjJh3YRc2xfet1KGcc7qp21N4ULLC8C1KoRdNdpbvjEBHu5g5PtphTQ9XU4f35wh2eJyUH4",
  "key7": "6mve72GNK6BHtE8TaBJy1idBnDoJsquBE3uktepcGCudfZHR4YnXtDBrqtmwyA1Ao5LeU3jdvDMntLoZ7efJYbg",
  "key8": "5gL12JCB9GBX7TirdnVPRsJkwguFvLNWtp89ziC2Cdm2NXVcvmftroxm2BbUnJ5Ld4pLXbyxS9khESsb8UPrYrNA",
  "key9": "5o6tCSfHzMXKGGZWTsfo9bX7jpbbNHy2DmPgWx1Nc5dp7rJJ3evSn747jy6r4HAYTxxvcRyF2M4Ax6cxco1cm1xn",
  "key10": "71PPPrzmaAa1wo5kkt7GQpKinkPp6eDDEJMouiNeNJUzQiaq3UY75r2F6GkoWsNnXYXB8VAQtb9E2Ucz6gGwiit",
  "key11": "3D1x3dTGvd3uTRLYi5istBZ57c2QsWMzWZQWoj59nExavJZkT5sm2ZwQQSjcaXBmvPPycX9pgDL6ukPxR615Sths",
  "key12": "3RurvEcSyKx2X2oZRzpiE836qLWXAj7mZiH9DaN5aJLmhGkftDjKJZeb2Ds2Nums9cH1k9SZ5j9DqoWf6qdNZZK",
  "key13": "5xgFYa3nu2kS4vQ6SYhMhdt5mdBrt4NPcv9GUdfJ1vYPrWTtdakTrBMEEbdFcg4iP4pFMrW7McB1sx8FFYA6Wdu4",
  "key14": "3HGywnVrCNN7HNTrzBXQkBn5b8HRYMayRG6VoeTzvLpHXmrPJn4fz85WApaqCn9S6vKoEiJ6BRCVrjMForMMtBrn",
  "key15": "4c2mEZ51fp2RTfJW7ZHyEpkwCBxDodCuG2ftgC7wE47qRBvwmbvdsMzAUpaRBeLCpH9AKJTPqXFhYJk9XpKPFgWQ",
  "key16": "5Jh7AVAbCSfEYZ1ppZakTwG3XVbDvYWTLZcMFRqLXJNqXM8Xd79jGFBZ1SvHkUuAYXVjfxu14ZRMX5U2ztmGt542",
  "key17": "5UN1RArrySyeDevzdowHMkhF2kTi9eiDxjzCM4Eno4pScuQexU22fBzkLcXhcX5npYr9LjvktiMsPiG3VzXTUh94",
  "key18": "kVA7BUSQXFA4Xkyza49TsML8mV1GwNFrdCoMKq69UkoTc62A3R1AZg3KBtt3mcR6RXB9gurCHfA9DxGjQyL4N8R",
  "key19": "2pHpAqyDGwDHtxTH4rfEDrUMksFpCxp1vfeSqpCbDeAAXx4gsMAao21rWB7BfUfHeMkaQ6WosFLR7EoBmaajSKBj",
  "key20": "5eCAuAJTyGkFGTAPdN4eK9DutY6eK8ARFFJSscYEXLEmwH7CbgV6eVC4VW14UbzD4w4Ai725sjyTv9fzXHnpLbq7",
  "key21": "5rgAwnjHATgeXxf8TzbV1wUUTXUpGWtifYrFb85Qv6z4K6pkTsmDASfu96yXKMAzTSwkMS1yYDx1uTUPzJXNo37a",
  "key22": "5fAopRefXAQSdUpE5rfoUGud6yTZY3MTSszJaGV6C5Cf6CU3m96S6emjii6ZNc6mFvaKUwFCNAvX7BaPzUTZtiDQ",
  "key23": "5tKxneaS8XJsKfPNpGTNJVFm2n1oL4gTrV1jKHBzRA8aij5LadwuovTRHJHEhBeBwSUxgvzq2BR5oDumBqigajD",
  "key24": "66YmQLUinTnZNzhLyq7CCVN6JUEMxr3E3uvb2fSX5wyVtayh2bwfUUfw4PYqrhDMffH1kT6WxeaHcxZq31nCV1UT",
  "key25": "22VyedTSN5zckqKXBpVgrGU3yPmGxKwCcipSP1NfYs7rX1jg7VCcUYBtrbpP4ocLQycMYEtQgbRXvQ5bTHUexsDN",
  "key26": "518G2ziYUtUfkXYWveEEzA9Xu6QebJxDVrPKRTzFt54iNLSwKs5yHBH8AJuTUx6pk7oXrkEupKQ4dQd7hXEgPfH8",
  "key27": "4z2dtFNp2DuPCgzFRmX4s48YfZkfWFr4HvRK4DUhQL8MaVfUHPRZo2hxVdm82Y4T5bmyetsa8i9B4gVPxcakzffo",
  "key28": "4eFcm8PdVfEjXuBGbMbXXtnDAN92eK8BUS33ncf6JvSaKUGQkwWXGyRiuG1xXxxQfK9J3XsKAvK31zDfqtMsKgNy",
  "key29": "5bqSLHNThkMzqv9aSodDf6f1wMMdmnNdZnsbV7A9GWXeCyXN9FExWpqi8SWznhBWSw4WCD7XZjJibZ3rMzZQT8i9",
  "key30": "32d2G8vHckVgmAfSu4ry9pNU7f4WpB8oCbHeSTvUT33AThdmkcemieWXhGkHXK1V4gETc2c8WB8JNsBvX52PVoCm",
  "key31": "4BbkzW1czsKWhe7PNm3Ly67wZXcRz8YzhhAAsZc7yqST39UvvEcLrzLHJuMjK8KmNaCa7pnSD7WA1MdQi8dAKMXW",
  "key32": "2mUnGP7o6rrNxerGDSVsYqgD8UavTe2kwDD1tytXmkjvnEwnLLWShxEjYPFkRk2PJnhVJKARMzSahBxSToHBcYYf",
  "key33": "4GMLgJ7AwfgQbtTfdx5EXu71YDsXDghkBnRkbjUuk4ftU2RuQmP2HW6aT6QcbkSkB1YXptedvRzELt9ovys56Xmd",
  "key34": "4F8di3LmqsFS3wPu95d1vSYPp16MQE5869UwSYFYGfvZvuHKLydXRgc1cgNTuqnJU8xzEHWNcSuqEsH8agJJqLDS",
  "key35": "4FDZQ1js3upAcFPDTSPyQ1tBgvKtgfqT6kMP7oC1ji6A3ytZWN5KAySooxWLrVi1yzDEjUtLGjyjJViA4CnGHfX",
  "key36": "jGLqtuThKGsLToJn21BPbj3WeuMXZR5GTjUHNQvVCmjDhNmzBk4pndYb6RzoHdKo68QUfyYPh5JD32tDkTm2rMZ",
  "key37": "4kvAfKbiEpNhuAXoiYrJz5wZraU7QSHDCez61kkYhycn5iffTrYFDnVPsi8evzwybSbE9iRVBCCcY4ne6JJinYRs",
  "key38": "25dUDMCXUDSgpbuWn2dyhr36WK7XnThNaRkGkfisw1GiFzr74AdoP4yoevkFSLVzQm8bz98Jii4x3n3XnHsrKBbe",
  "key39": "6pgKHkuRg1ubbgpiss5wf8xMQwbkCQidrirTpSaTEckX12xwCYU9pDbSaXyQHzENoSb3TzUJrisDwQ1UsKbFckc"
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
