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
    "5MhHBJqpwaQS4DTk8ApeecDLcmXdoM5hNd7ncMs464Npr1mn34up34r8S7x2MpdCZiFtCV6FTMhS87KiV9djqm4Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bGCCC3hT4a6ghrUMB5x7CdePbt9PZix9NBxQYvafKpye9Tt3LqL2Qy8dhuxhELaBRSSUVvjgUHLikaUQq5uJc59",
  "key1": "5KSFw4DN6srxM1WVYPMT6TPGSzLGNRxxPk1aPVNGCck21Pzu45LW5uxzEzRkVrDepkcWE5YeAPzLYCuvP3x9NCcj",
  "key2": "4WhYgwsV2RyruDSkCrE27hvDoQhPR8TRJsV2GewwnWogpGZwuSzxJ9QMdfdhkyqZDBE5nYsgdWwrdD1BryroGLWB",
  "key3": "5HP9DvV1u4EnQXw47w3Wnw6gvuD7FDYCERosMhmRvz4wAvPYY7nKD3RcGRKXmuvLQRQPJDMzipXty1M8zv3udQYj",
  "key4": "4wc7Ezh6FYyjY7QKk5qKLroi8MYWvueLrsZfuN9A1Jo5MKxyabdDnFNdG7Zpek7AMPaPpRFtisSvCeRfGueUw1ee",
  "key5": "6EVYbcwfW2382WcMviXj62K2SLCSo4T1drDsxC3y4D7auUBkBMRR1AC9qYqo3cyfpZRJ4Qv9aoRZVwJ1k4tk3DK",
  "key6": "4JemijGygCkFZuDfnxFjkMyBGo2zDumpP9jaWYwKkb5x9PmGxF36AFaaySC7ArFAhMPnwE6miyCGviPX27EQfuZM",
  "key7": "2srd1atDv9XAUdQojCZoqwKdZkaKZMFSE5x2zC8NT9xT2LgwQfWtS7A5WuReQuzRgLkFu1cru9w18dpS6TRVnwr8",
  "key8": "ZB6iKBoXujKRNpAdrJ8MKHU4qRGUeLmdLwh8UPLSxXXtEjVTifaC6UUVb28Cfv6op7XgnMNEuPAVjCc5Pb1BT4t",
  "key9": "4skZBKeAz4pWbJ8at7KkKFGErPQsP6Mmy8dakSPFVkw6vEstgR2yFdGyeyACAxHz5xrdMFnJZngfU7FYm891ssmz",
  "key10": "5X57Dg41352yPraGWQnoDcwFraW1Hds7Tr9zAvGmAeXvPcWJzWbiRggGpze6AunZv7UDEAw9kz9Gg5be8dxar3rv",
  "key11": "4q9nNeHPGR3GViAo9EheUuiwfCUQfCTRHLvkkm9hnkoYsSGbf8Xe8depJAZsJ2HxxZLbMkETqMzzP835XvZUq57Z",
  "key12": "4zMAgGewym1NnQDdo4HHdPq9WNTyv7mGDtyk9wnMUXvEtKqB4ptZbhebbKR4KaLqpLz1uPfQhnopoHUJe72S1T5d",
  "key13": "4bEEXMWUKEieN1vWE3wXsAoH4eyDtEdt8ZLYE2g2A3xSeGtBR8wJnz1fQM4icNnT31hmAgZmW5hJBRc5W8CkZ8vb",
  "key14": "3xg53MV98rSSKb6izBm3GtPnSUYQprSDShF8bveqqZreUP3WkreYwmPQQXssXtmZ7KKYzPr7SFGsQyjZ85JGhxqC",
  "key15": "311azy2EspDCzFL9NV5p9EEJ3Przia3cpYNDx9K7GVCbfktKLrcSdAQbGZ3Nc5MbdrePVCgu7pptTYYTT6Xka2pL",
  "key16": "3mxc82R5q6aDUdrdvmvNY7Y7efVGWVLySYyCNTsakXoBGDfvY8wSMtcpFmemgpHj34CWsPxP7JTUzoBKtsxUJjKZ",
  "key17": "UQvapJEfMpcRYvbVh3z77fih9bwYJVay7GY9Ws4gNUv97K1WawvGDMH373CEXxQGQv5cvWYsZTyHPfxCfQUZrpi",
  "key18": "3Vfcj3cBPYTyU2PZKXFEp6TJJmzSvvBqgYr1WkvrBrT1diRTjhi75FbCLao7MXvzipn9jMYrWmXzs1DKB2dYwGVJ",
  "key19": "64Ghj8xzHa4JgkkyirXtZQAvvJjtnFC2tjbZiFFN1mrLe64C2aBPWZjJTU3BFdY2MZ1FfF5f63mD5L1MnXeqdDfh",
  "key20": "3gQhsYqhicdXS57RCHKZv2Nyx8bnf2xbQ5Rwxz7a3kc2S8ar3i2SUTeArDa6o8ZfhvZj2mVzhFh976aPSgx4fxEJ",
  "key21": "5C2dWodpwDX5o1eJKsjU4BxPHkcxG1wvD78DzRwSsCtns3WxW4SN629S4prKkiqJoycde1vyE1mhix3M9mrwhgDd",
  "key22": "aUhWQ7t67n1eKAssqST2nyJWTkSQ1Jpx5VMWWYpu43vPtrE4HXTrZTw851yGyUB6ekAyMi9Ga7y5pSLtSYxyrKX",
  "key23": "5KRyDep6ePnfciaYKu5ntGFnspTUro54WqeQq8UG2sh1wV12SyarNcbTNNQHVDhoqtRq451Xf46dPzHEkrmkqDTy",
  "key24": "4K5VhneTYT6mXEJConkeC6u1HvqaAwWyNAv6RyXDdayxvoQmTYyBxmbmVUFK849h1rhsie4nKqGRdCawL4F1mwtm",
  "key25": "3PG1RxZutgh92iFduts71BdoHV9edm8xXvjbqXvCmcVP2ksUh4ny6QZucHHyeotbuPnWWpf4Qu6Lk2q8k4q6Xk4R",
  "key26": "3Eu51UBEbRHMDWhizLESSnhTrcrC2VaGL6omtjqDbUT9V7E2fPHfHfqKajE66bBmxzavSmc5nCPD5uaA6zPEJeEg",
  "key27": "2e7hMQAXT89KsH3sHyE3AyPH3bzBp5d3MLFT9s8zcrnX3vc5x9dV6CnJP4XudrpiS7LmPHsFvWXiDGnG7iqL4vL9",
  "key28": "N7xsmoBp1KVpwkgBmdCZxkmJ5LpBH6GRFsC8B9bXUoyhBawA5dBVx9eznsdUr3LUaQGrsDqwMCYyuMqRoroJimK",
  "key29": "3nxfdn8UPA2mcJHo19ih8tvfBJSEmZfiVbmrU1CQRs3Hq5EQnYgEzq9dDUQzifXjp9g9UNBGvEM7btfpoibu9L56",
  "key30": "43nucbjDcbvHmTSisH2kNFoH7gB16V7m53xpAt5UFBxbH6y5KNkem9fwebFvtAbjeWMUdkcq1Qoryuoa5AyoR6F5",
  "key31": "49MsLDF4Cq1Xu6gbtdzz8i6R7D8oGFVbSEcYh1Q6oWM6j7UeSNnYffRGSBr6QkvYbBoxJA46oPbF3feXYNKDdG5Y",
  "key32": "3tLfn5ACebKjcTVXLFbc1F7zrrtZ3jTsHDWksJZJD8w9FjWSL7RFn5U1sYVjD5sLjGNuverJbVSLX8QsKFpsprTX",
  "key33": "2YsNwmfGiCdbyi7HcGkaRhfkGwuT2F4F8moaMRH8HvozFBcyiZgcMSi6p9Y4VHE5hhNM2LEmwAFRFa65X4wHerkd",
  "key34": "2RNPVy1akQmnzUN3ZyxZrjcsSaQBsrL6uQedSyvUpGWeyExWypjnViJymUsHyYzQ7C2iVVXo4s9mNQDCKLMntmQJ",
  "key35": "5PqzBUcEuBjb8cHQPRYoApMBLWSP5b6PhDuPVEohfhmcgRF3ridYJri6bAe691sbrAcEqyBZbUv1uv83p513oCyg",
  "key36": "FLePRgeKvJw2eaU2HZLFo5B7JxUBbBwHcK4fHkHXSwN5TRfCfgDDp9bAzZHd11nxWvp3JDL7Jjb8xMY9XAwQ3b7",
  "key37": "4HPLsBtUBQHMVFaSmuuvJemw25AJLNe3sJEYYqDQeYiVZm4j2zgU3HJdatFxuNrJVBU3fXi29gpm5x3tgqjGUtiG",
  "key38": "ki3r5q8XWKn2JpWLP3vY6F9nWGGViwP8DPxRVbMis3qqu7h5HF4cKB6pDqUCJtomQSoWpNGj2f2ZqPDd1ciyCdk",
  "key39": "2wKTT2MzP3ZpRvt6wpXPXuctLJsyZErRXeeWqjXryK9Mn3y8tS7M7obnCdfjsTc8UQBLNbs4wM8Z96TJSzwRMLZL",
  "key40": "VzrK9AaGUCWkBE1s9zgtWrJ3e1V8kz378xckMUBBL19AeCUBT6HLxeJLCwvm9v7Go4RJtPkS9f7mHn51aX9oMew",
  "key41": "ECzSuySTrTcVNtr6oJ12fosfofAq1mninHDrLnTjtfHtTrny1zoWdt6JCtfFpTks85qRaZpYEbG7WbjmJUQDZaA",
  "key42": "66GA7hiaUAB16K2Jmj6BJGKUJjWC9A11nV6miXNK8vdHoRHQiTxCB6XR7s5ZdFCKVT36G8CZpCAHRqKpDVLTjpWp"
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
