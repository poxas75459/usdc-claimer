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
    "4YHM5yvPfdRM3AfTmAHSUi8L43nHU4wiCrQuPChtXc2uypmKCNEYap1GkrvKUJMB2nBDqhCn98SWeDpwjEbuJc66"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wLdLvYiM44wf7EcLaCzL5YnJdNuCVvM1sVCP6EC9MbPYAZ2HoTf2Lb2S3ZX3f4VPoaKXe5oJi6VshYj3mV7Ynvn",
  "key1": "nx2o8T8GTb2cQCcSFCSWmb5LnhoUmAPBkHJmFsamapTPAktK94JoZrkb1PdfSVz1vyGLuFtJZP5rB4Ucp886myf",
  "key2": "nBxHhf3ZAKbUt7G2ePfoaAFqFSVnEhHKpQPG7UxB1QGbPzsSJVHy9ojXSn6p5o9P5ShmiudscRuhXGWyX6S6wfD",
  "key3": "3DNmcao2dmv73UzXyYAwbPM4EZefGaadszi9BypkG9h4Qt3F8u2YCAcwV4eSTx1kBeT1iX4BUsx8rnHGYh7u3i9Z",
  "key4": "5SaTNBNGhRzGFnDvwE88f82Tn4vNsEGV9uK5A83sg87A74yvMvg5VskQPrge5TeFeRBuNErykqStfeecY75UgyMi",
  "key5": "5yziLo15s8mqgV9beZLm1BxsPo5U6jDWjcrpGwfyxNaVisfXdQNjTc2XAMHSF9eW3XtEdQzU9si7W7suCvkLKQs5",
  "key6": "5wr5vc8Ut9RATbize4kiMQwSgdk75VFns4QhGvTBgqimq7Dzz5U79VuprBGgvMADrSZfJeTGiCcmnqSv5sBiRTyY",
  "key7": "4GJQoeb8Szj9KeG6gqLcXmmYhGfPn6U7cfQnjxrVp98k6WnvjaPeofYvpJXUn6r3dperbabHLcCjP2JUcX4hYYkb",
  "key8": "37TTPL7QHrJXxdXVNPAD29hChKnaNMQp3tR8iVKpfumd4Qe6RLCUmMJXXDLtrafSy3RxMeM3VSGL4FwJFHtHB171",
  "key9": "42sHjCqBsXLFXzz6bjAa7AhaJFG8zUj6pCUE771FAWZiWF24av1gFbsKKyjiEaZkHoPFh6Bu8eou81P1Bnsqs7c5",
  "key10": "2u5NtUYZvvgessnEJFAeVD9M7V3KDHjtoby3SgDXECQmiQZfTQPFsHu3Tgq2uvKGwBrEUiGiFhoBhonyQmF5TRFC",
  "key11": "5N9zceRTB3t1Yu4BLdemksDQuWY1FPd62UHMyfbJWLBojRSgSNgghjXGaUSS4k3hMZxGshASz3s3jXV1joZqdbtH",
  "key12": "4uqRtCao3SbH8WtyKEQqNbt62xPmGALgVgd43i7d1cpZ8ghowAEmUND4xWQ6qB35rQ1Nu74VDuomgMuzNVTjJS8W",
  "key13": "2QnMkYBS9m6tRXJTf6dj94sZ9ZwJuZFkjhKHotiMBT2HRG5DBRkG879afec4VyG44DXxsWnXZscn93H8dN9PDyU6",
  "key14": "4S3wDg2VufdA5jYFNf9UNVTa78oXb5x11NS1SvJ5XuxAuPXuHWEfcmNNqdmFAexhGQP2mpojcq1HyyR1t46YRXGF",
  "key15": "4vyFbQ5h3G89UtFSzBXg4S7gS8yh2mtadJgCkRVH866FTsxrKmn15bdSk7EXCeP6hkCixDVuv5CHcfqFKQEGycNu",
  "key16": "ziwRRXNw5MjUZAPHgNcvM9EGFa6Ugjt6Zsfc5tto1beup17WaDmLcq3digntHQT8xAJ6B4Bmx7H7cqFmXKt56DX",
  "key17": "4A7pQrCj2WQvEHCquYX1zEXoyMmWviAREV34LVLzLVBxmXaBLRwLMuAfmSs7qKXMcJbUsucotspyYYb2YZttJm7u",
  "key18": "4sQ1A2uwSyT2P7hF4aFTjP5nBGyqCNMuh7WGzxVQ7r4dWPYVbf4QqWSFiYCPQr62VwavzSYjTTVSYXqtmTMtZUDU",
  "key19": "3wT8FPounNaZpjFQKkgvxyEd8StAafsmAvdr1ZRtV76Vf6eWfyYicT6zqTptESyjkmBkDK2VT6L9wz5hWifYTw9X",
  "key20": "3VdbwPcpPkp6KKzvLYdCpwhEB4p3zve5AWRcUEZ5aAK4qvNyf9opp89wQRp2hHufLazwbxsiiworpKKGbzfs2qXn",
  "key21": "5ZKurE9nz2WEyXSebJaVEjzoXf2FDi7FYhkL8JeBVtizW5xJzYBvv4nN6MvKvLHh3saaMCjXLTEjcM6iPbFmvpUo",
  "key22": "2fNfbdSERWFsk22uAkwjnWccMcQzD72WrwyhfYDyv81YwRUbNJYhbQakkRHh33UEw4baAxgjEgfD8NmBpqnbGvCV",
  "key23": "3fgk7LvqpYK7QNFP8NJcSsmMbDe2hrkY4Jq63w1UTgyoj7ZSWHBLc6cJCrksk3HoziM2KnYbkEgpVkUcuc7iJuFw",
  "key24": "2YNA66PwjxS1NdjSrniN65mLdLtFtPEm2PPkRgviwkkz2BQksuesWyH5uMiwYdSX9HJWgMqQ19yi1HhvrZm8vQZK",
  "key25": "4C41ECToQ5buYjTNfM3PoKQBZMrcqM7PEB4mLKtsoNwQP3P1ghiNvD2VQ9NnBjNgykTGAUTswhMK3CWxpYXSShoC",
  "key26": "3wya611rt5uUHUk3k55sUKGKctMQbhZ95kzXHewGDXVgQsdHpwc3b6T8LAXBF9FAdvf4pwGhMssAVw47jUheuj2s",
  "key27": "3hpAhQmWaG4PhtVuEzJp6J44QK9Yqn5kditMFGebpRZAZvZhW41XaLm1WJqSL2FCAwq7R8Lz966nvRqNJTx9NTAD",
  "key28": "3vut1j59Qa4oLJd52JAHA42eE31tUKCyjTSoHEP6HBPE9VYD2TdcswfY9yMormH3urbfKK5zuWkQLYcQNjZ83Vn3",
  "key29": "4HPcXZUZwhewab1QF5x6rHzy3wxp5edSqpn1gw1wToqftt1iTSszKCLeJ7N9HTnKmZSYzDx8p6hyMSdbjwFHfmsx"
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
