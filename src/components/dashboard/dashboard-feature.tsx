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
    "2uBU83HWpH1YTCf9X2UJrWvuUETTdkfaJSM31LVxEExS9nR4obnDf3iqovtASS4yervvifD31W2XupG53oaWnxfd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4356cvhgUSZ2VPjSHFWtUKJY9rtZMNaYkUEeNpHeZD6gMRgM9wpm3QEXcMWPC7NBrECA5i1np6gHjJToJvM2rLhA",
  "key1": "ZSTykuRzfnkCmRYd1WUoz5Dw2rZh9b2waFeaiRdCK4poPtg5sQXW91T5skeujxY21uMpDDecZP6Wbi2Aim3hRFu",
  "key2": "4Kdp7bWqcdCpAKpDKt6BSWNVavkr3jmwPUo5WFeMgr2cM1yuACFb3cxtbncxpAr8hTL2jtieFW5SUujhZjJffQfq",
  "key3": "4vH24VjF3eKESBckSZc9HWLxM5MJGi8uVzGGcwNjYg5AVHyFM43w6HNN6aV6inWjdvJVBd19JKAyBDzPMP4gBzbQ",
  "key4": "3syEet8PrTEqjAxmUVePQbaAMmRZyLuv6wzDWMayXbamGjSfRirYhpSZPWFpm8v4obdxgXaVUcdjUthjPL4nu8gg",
  "key5": "xM4rhAnwMG9ZpByn1gzTa9KmKZSho1xWRkeyMRR7CF1yk52mdqtPEtseSAF3zHqxvbaztWropM7VQNM4vkjWpVQ",
  "key6": "4qCmouufrdx3feZN9reEDQL2CcbMnUjWwfkRPncsgyvmc9HC9gxQe6uEEwDmYZAfqz5QPDhgYuXZdXWkiFQQiRWS",
  "key7": "2QMgGNZBQwZZa6GXaoCXtr9aJaMopEGVmTw6BV59y4m9MXYzxBYhm2PdqR7ZinEHrVb6RR9HXbzvhKEyCuvxmiZD",
  "key8": "3mV8rGWnFVoKyHh8s6pzqS1cjB1F1nvPUb9NdN8YHFWqdDQvjop2TonKVzZa1eR16McEqi1FmXVSv2fKkNKgGvuF",
  "key9": "3y1H9JpNm83GHh1FAQUxQr5o31yKWfTZsZLbdfL184WPr8dJPqXWE3Mq6EtM8L6Rpke7txhvkSShMXAn5uZAMrWA",
  "key10": "53gAJce3YnXxzNobDRGD7jJCM7q7dRef7QZavT1Qp29KL5D3cBkXTEqYQVRC68EvzZLum4K1xkfmHDVgaUvanhCD",
  "key11": "HayfRApAawREW8TiuwmqW2rA7hECz4W8k4SWQKvvW3vCoYwTLNAcekHtf2rL6Qk177YQnsjVT7y8NLG2VDngn9g",
  "key12": "31mbTKK3TdEuGkSuXwDat4LxK57fGSL4oW71Qsbz4wt1bKV5X1d5vsJ5q51C8KxQMEvUD47fsr4AcQaRLqvnphPq",
  "key13": "2QUjnRHm5gcNPSCUvToAC2yrBgPzZKPopJHF1kbJHhjgv8SeRZUxfss4kAt1EW6geMwBBeepxYDuKCBRK2bVHqNd",
  "key14": "35wenhiU6desncA5HUtD6vCFzwawD3DxaXp9VnFYbWEbrs363UC5hdvbbbYuD8BEdXEXmDTjg9PXxrWwmkiCAu4M",
  "key15": "37K65AJXYcuxLUeF3aigPDS4YRQ6ny8aG5faQj18ovh97XE6ncohf8a7zXvgk7c4kFLcv8UNWpMFXvByyjjSyxcC",
  "key16": "5g8X4DEJ18MYaJdpwpwXT9QzKU7YfYC9sh5popHyXsVRr6dFn1NaBJKGM2Sn1Pr2ruT4LvrCL9Gd9oER5r2T79Ns",
  "key17": "H74MrdEFAShw6eop2V6DrpWvz4uTLEfvmuSdQxy65asJv7yBCe6NRfCHM7kejti9uAg4kuqAUeAbTzfVz2g8MFA",
  "key18": "4tjsg1YdhYQRpXcTSUD47Mjx9y8Z7WaCBya5aiLSDfyx8ab6exPN4miPd3yZP71fdC5K2kuwNoMKvh3C3S8KtHwo",
  "key19": "2vtyWEbhgYBKUE4DmEtVvTEqi2FB5Egs4vjUeHsSPHvAryBzt4BM9k2RtY32hoCn5RSZstfpbniFz2T1G9RS7ae9",
  "key20": "61CmY8pVw5CQ5iV3PHGjm7NgdgzoGpK149DKHLEjYiJR9n7NJNvCjB1RaEQGiTAijjGtynepXa2UjNi9iFXo2qhK",
  "key21": "3SSzFBZiR7R4Raa9BMuFSxUdsRB5HFCK5FGwBDCaLUKJYgeui6Yzm7qnQqjmcSmiZ34459cwutakvYMDSWyrv2eD",
  "key22": "3VUb7JSuavnsLZSfUPCZP4iGW2UUdu8wCPRto3PYdbojjcLs6hcU7dVvum17AKbPiupvhg4GrEC2QeHfBgaEpUUi",
  "key23": "ErSWaV9ZK4LCKaSUSpmu33d1JBr7dXNPBdgqBVzbvosc5FgmUsRvUwXhpae6cjv2C2hgMbKpmtF8QBzWDnGYFFj",
  "key24": "5MW2igMNWk3AT2p2Jbj7Xp7SFKBHastr4sATe5HXfs79NccYZUTQmJuptj8yRTxABPBzsFH5eZpaDtvco1t2mNkL",
  "key25": "rjYPEWCkTbD5ZozLndYYMAbVuNfJpMx6Fu6uXTZoYt84tGDssyds6NguSm7oUF8FJrh6RzMZ62LneoQrnEo6Yfi",
  "key26": "oiEkm1voh96UZqYWVm4DMa4z8e9h56fARjiPXLP8KzdPLQXbwQHLjHPzURu1hhSWrjzoRA5wYtrhK3PSsr3dY4a",
  "key27": "3FvQLhsyw7QmDuRKpLyGyet5DAUR5BtAaGDRXdT1263S7gbwN5JJ3XThhsnz5rNADSGcoVsV4LNAtAqPNNMCDoBK",
  "key28": "67NSzhcjCZf3iAA6qWQqxLShv4B71oUJqTuZte6eov8gMi2GEFiDHYv3nUf1QuqvuiFzhhP5ZY3GWC8hqjipWnjr",
  "key29": "3i5Se5DbFUqJJBmCCkV7bGhq7tdaCXrZ335btaZ2u4bgoLPoN3hXthk5NKe8s9f5vtEt47k6nB3mPs3CKgSynTXE",
  "key30": "2o3epEE57KVNXUPCqi76Mo3AVCLhefGm467ge7fu9R4FKzS5J4Tk9is4ws6oRe1VCTy8ZBqiMuatFSvBDziTDfVd",
  "key31": "66BAHcppUj9ot36cTUufig4caQGs5f9hte8QctHwUikuXUBtRH271wCSgS3Dnn1YdgZZpckKbHzXksqB76zWUzVc",
  "key32": "2nrFf5Ymgc7fMC5xZGA1ZBhisiLMGUDpt6HS9JGTqDDMALx5BniBQN6jeGFqKJ42VqumgUVWrGA2UZngB5eQp19A",
  "key33": "5jrNioZKSLcoX9KvCydjqFm6btbEGjyCVoEb4S7bgXD5HTYc7Lqs5eW7ApFk6jgdxr7tUjXGgsfQnxuq69gtJu5B",
  "key34": "3jcecMqQBMZuuz5waGC7Aei7N5upzRciURP1Bu69ugL9FKRTmNj29ckd22JLQYki1w5eNLYr3SJfPzKoSqybDKDj",
  "key35": "57grEusGPHKxFAqDY6q2JUmt1y8bqLmZgHyXmcCAqqcwDvnm2oNhcKu9uEPSgqUQN6Hgxsg2SGLq7awNQ8jaLXSK",
  "key36": "32gmWh37C987rM8uD5KQMCWn9yafwzqbD74aJiGw3pqFeATkDStRZmQWtFBmvu6Q5hQ5kh5Xi5hF26DZiuanNqSt",
  "key37": "4XK5biSKQAy5Vj93Nao1hQBEfYCGDHeJKZx2zJegv9qfXtDoxoHNTuirt4knrdi4zzPSf8rhqzhxyf6vrmWMzTDY",
  "key38": "4nEGBiuoXL2kRc8XuGaYhS96YfV65fvR4cHLfUVtY8sggPCe7Z6VBjmxUSKAxwFTLuA9hBAF92QaEX1wice7Dvcv",
  "key39": "38RScnrQiov8X58SMx98oW4Ro5BnqovKm8bEfwXJXEupPejpXAsq4uNzVfwvPQ33DUDnVbn3xLhFsxt3s6n64ZTb"
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
