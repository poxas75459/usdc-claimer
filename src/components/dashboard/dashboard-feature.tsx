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
    "3N7nX9bU1wuoDdWky2wQvMwmFo1hQgkwifaLGyPZ425S6dLBDKor9qhmpaRaPc83Q5moPGh9oUAftvxWign4W9Hg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KxheqXGbgXCe13xqffTKsjcnG3ovBpqgh3srXfwjyKUsRkKKidFLqRyAPYSf7xptvHkYZmfExVBgvCDmxBNCAYh",
  "key1": "6n4P192RKByBrRJ8dt8aBd5uVqopTkHFCc3jXLP8KsZqfF73MdraZXHCEokN7cEgBDpeU2AHzRXCeXQncvZdyPR",
  "key2": "5mcEgZz9iSf256y87qF52NHyhMKAZytPGFxxHhKTAWowXk5dLB7sjE3cM6TRyxEJfFbAsnzgHJK1TwaB83eZXNTB",
  "key3": "3q38LkM7zREvne9BHtPUpwRhPiHfC8QsxeLHxXDcasWqq3mVFVUV7cdxeEnEuQTSJUoo3LA7dsz9dVR2n6r8GcNb",
  "key4": "2Wr5DDbmcanXfWZhTQq8Ha6XzDGjFQ7D7axnbPGCQ6LFRZXLqLRmpTvwnjRqaMT5u7i7uPLZqBoJ43XwD2baDUqa",
  "key5": "3AiUveoPZtSvmH6XdM5SuMQfsKG1BidoKhGPrGZtn7XoU9vEnM5iaiWt6dPHqDiSo2kpSqLVoBa3iVkX8jaYBzaU",
  "key6": "5S7FpHLQE68qb1MCsiLn3tDtPLwTCLbzy6hQG7AaHvHPhDf3Q1QPYik8WMmUKKFdPiunVCwLtEZ2iis6Y5dKf4BA",
  "key7": "3Kq4X8PVdzM7AZoChx2jDnzuTwnuXLsQAUA5emFx9KkCZHXmF21ZCxsaTgfBX6M4cGpZBnnHmmMD7GDZGxRr452t",
  "key8": "4RcUDWSUysdXtk6MqLXoMKUfBE2V6rXCgMapV7368BEJyDrXoLrbVsLDFfE3Ld8spqBpjSEZBPgNWcfaiQs6qHEW",
  "key9": "3L2zXYKKL7Y2QFZk88Z7uKQLqyMpKLBE7ig3gqz9Xgt6g1FgiWrFkev1S3inv3yciSd3imsR3ee4bwLv43oGxctS",
  "key10": "3vrYkEfua4LsccCQQWsBzBQNDHNDGex3KLMvq8sUJcKEcaQH2CWnht75nHLExN72DpWWfc9PzFsgnKcgYQihjv8P",
  "key11": "2Tb8Qp4VLJqahj3cVXYkSbdbSq4JidMtTrSNbQXh8HchU1FZSqSbVzj3GnyxSTrdXEU7sqP72aGpDfzYizEHW8aq",
  "key12": "4tap3HqeBFYe8DN4PXjfNskQ47nYb6d6oCCPL5ruA4fFS7b4ktGwrzsTh56jMw1vTQeH1cU2L7wdNSwwWQuWDyDR",
  "key13": "4fnpG6t3A3DN53rRa5vuNesuQjuX4qzR2trJN5qzzGfnvhHaPaTb4VCHyiTDFaNbBvLKxazgX23NQPtFXWGjA287",
  "key14": "TGmH7hnML3VNMdFLdd2jKtkjxbEN5u4uHJis27911ac1YtretPBXBabVCc7zMBxY3mMQh6fsEVjUDGBsNgonuXX",
  "key15": "3m8A5hg7GPzN482hbdCtf5WZwbA6timvJ8s4yQWJVdD3ZE9nUqSQ6vtiuY9B11f7NP4fpNDUawP315qcZY9kXR6q",
  "key16": "2QauH58xEwNhRymPbaCiFiooE9qRvCDPUYyBWPemt91XhybvRtuVk99VVYmTvTKeLf3Gkk668SGUtzeeyjcATXoJ",
  "key17": "u5DPUkdwnzxcYPzXZF5H96fBqhqsGNm3StQ9AKCsY4gQteUfKZSQfH3arNrEFDD8P3Pt7ManHpv7RTMQvAP3bNe",
  "key18": "uUjMgur8tzquE5qeEK1TTPuGa4tFV7DVPASenoUD91jmpBzpqf6dDmwtdnf8kuW4uQY9Ym3XZX7huwrHX7ycXmN",
  "key19": "3V8HGGRF2hQcuxx5wGudDVTkEoVmMn6EBW2hNGK64dSgoMft7CEJMcRA1vz6ZFDsg4odNiZrzoUdt2BTJkbyntWK",
  "key20": "TGVNV5BacvLNvKQGD9jgvwyN5ugeijAoHWpiM89v6rf6kKcFYDA8ZToc9dtXM6gzY6cEH3nGA787pSmgHfEwcdd",
  "key21": "5YvuavyCi8bqqT4ovKxVsWnfbyja6frPBkwDq1y6gp7X8jNWAowKFdoTAr1K6cugNvn1wPteutjFe1eUhekHHo8d",
  "key22": "5xPTgJjb2vprBzq6GKzrERY9JNQVGnEEie9PqaK4DmrrQi96XnJksEYvbM9iiDhAVQWh5qiZFL1Wxfie3ozgxH8R",
  "key23": "4hVVk9xKY9fjBeoVGr3BAKLoaQT5ALagNYJpehKtXgVNwkC8tnwEZh6hnxbSYhcsRJ8FQR9SRHWEq8JdTrgnww8U",
  "key24": "5gdCzQcYKNKY27Bt8AY8HTiNYfKsW6W8DYAFX6wpuyVZgH87kJoh4S1ZUiQLXbSHSswwZegNAqUrQdPku6BUhkYE",
  "key25": "5aVNg3zpKyjb9jBrY1w9rbuE4ek8fLCBLWb44m3VKea1dBXiRVuhMJBDis4DNocTY7akiR1qhQnZotWfD6eX7nyk",
  "key26": "qQQHNWNEVKNX8WnwybJiigE12NtA3wHJC4EvhYC4wUGdFdr7a64VhV1wdYWpiUmd4XosSRT9siAbTdsoVys49WH",
  "key27": "2fPV7US9Thbiyf3UCoFjTmn6LM7AYRSAws18vfxgcU5TP7kZTLbetZNAjoFGh4iddqEKbChptTuZAutuarRM4ZsH",
  "key28": "3Z6W868c4Vz7j6YGxRsYEvypxkrEMrSg93mzG9PoRzKumAZTrnm1MT2TtiBGWDjf6wuHFbcKpYichQK2dLxRjHyo",
  "key29": "39uWnWZ5z3SGfTD6ZdyKfShrr5v7aqUjimEKxMnSK8fPSmo8SQN5s2ZVdw4DkR8hS4YFpqL8T569BFnkJJqRwm2V",
  "key30": "59ck67RhWGDkUnrMrEJgpZnfiqzhHnTyX1k6L5eaZFSGfUYNHoNKqXP8KJTtaoYWqmfhMtmtgojZrck2zfCBkhm5",
  "key31": "2ckZRC8zPz96QwQsB4DJ6zG6qiSrt4UsPD5Q7EArjeNH1E6wGRqXojxhL6rbXGAeCb55SY1j7AXsszwP3PRe5BpT",
  "key32": "3Wn9fDKHo9Q7y8Pn7aUKssxoGyAL96M8YSZbi1MSUb8pbVwa4utku22niMGrjDkYyKQJfsetUA1SqRR19uUgHzac",
  "key33": "44Dk49VuDTPc57CveJkbQS9it6a1pn89mFSX7gvYk8Cr9D7gtGxqMaYkuCtcNfGXKoBvsA3KSRxzftgM7u8WkbV",
  "key34": "558XyPQjYeBzh2L8wTTwAcPaCXrkJxvZjV24oCRw3uPjsbjEQMhHWy6TVEehwjjCBeszksCDNy63Qz6RHa1cUbew",
  "key35": "4N4GVjyrCPf1RwJB7eXjvT7PW5WRWn4ng8dZfxczUTYKF1cnV5LcKZHKrFbbKNMkm2z2xEpXi6fkwnVRHbQehYRP",
  "key36": "5Q93B8HiBtPYN2Gu15wG26abWLVnRFSNq7iat4v7Ej3qXTgcJzQQyXaf8dvtGrffLhGx56fYicrieLvPT6axizsv",
  "key37": "Wn9LT7Qr9dmnbBNpjC4wrRNqAdcAN1749optZPwXVTLkco39HKvSgmC6vohgpad3CR22zvxE6VrSnBbTsKFt8PQ",
  "key38": "5vy46nnRAx8LvFzCjmZjpE4Y9toUacykWAgq9zXNc42oft3njpXNqNQVwRXUoT9gnP5TXgRNEDPgRpnxwby8FDiz",
  "key39": "5o856mGafrqGRq7LPXHJHFhRfGSQBXNRKRMCrTVB6Ufp1SRCXPvsUXmu4iYXJ6K3bmcUTWUFBWV9DVDBirHWvaGg",
  "key40": "3Mf4x5FkSyoj3cnK8VCaWxhA7rsVxfP4BKpbmQgTBKT28cDHPSH8N3UDmmFj2gqSuGbVrqqBnoLNDkfj9KLuFEGN",
  "key41": "5CMMsBLHtELFMmJG3WD3nWUymgsvUHRUfDmY7bBCbc1JirWfhdsUMSLhk5yoPgyaCtifs4QQGiGSRmAuwemqqmNM",
  "key42": "AH4gouUCFtYfEG2fvVkURNFcz8w33vqFwKxTnHRTuqHZFvLiBBW2gP8HX32RyaSPCihbbLLjqqZxP7qxCMCYMcE",
  "key43": "2DD4M8rhT9rGXye9YKfPeazuag5FZu3xBJBARd4SaduGEvPjprKPABHyMoKFNPEdM1Y4TEYLLRVgRB47e6KAxogZ",
  "key44": "2MKLx8v7BGxTE1jhRkH7vdYg2Pi3hSGmjxi26rfeJk6stSzZ5Ard5eWu1v66FJKAzsXSSu4b1HptJdRUG6Wyb7Fm",
  "key45": "dfvZRKdMirxfJCL4retofs66cVK4NXzcMdp39Fyj56vNF2WTMyA3vLqHTMWEeqGg2JVWoAXTkp8FXF4qy7wvurZ",
  "key46": "5nZLVPFp9gqDsKfyShuDZuXCTm4g66F6cz258DNCa9rfC6L1Gf2iYV3oGrvfegN23RyHBgemq42D2taQibHNhKYq"
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
