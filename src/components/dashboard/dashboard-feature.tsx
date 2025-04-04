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
    "2AysDSdn982gSo2zxccwmY4zDJ4tgx85BoKiyhJrEDBWHX8cFXrhUKemYNTDnUiypQNkXJw1gH1Ug6FmzE5zPZHZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6529jKvDGLPheJ3VxZzMoggZpwnEqSYSWtaZw6CV3Wuhr3dij98Jj6KNMLyBouVSzuuLusM8ad1ebEhdiPun9PqZ",
  "key1": "4t5KMi5nR3XeFHrxUCmz9sUiNkAxaBeZv9X5cGjETSEzpd1dRr2zitUrtvqVueFjdx9D23bNdeMtjZ1kkYbNK9oc",
  "key2": "5imDvLEbAaR7KmrxEnB52M4ER55x5oggAsFci3nRm9kcLhLn31GfYFgBd2fCQGWoDurK7YTYKeBZz8T79sc2o4C7",
  "key3": "2gwkCp9SpP4aUbmixeQK4d92T7faKbBAFAfUYYgUio9gCp22RDxGh5NoVUANna6XPFZdjyaznP6t4JSgfjBzpJUT",
  "key4": "j5eZdsg6LjwGfnojM3dGxLAHnG9dpVJGTQkfSSpmLA6p2usevBYKPW9hawm7oceXsFsfAfawodpYyXYXiDhKMxc",
  "key5": "3mhAsfNxdUZaxcWcwFjWUrGHmbnzP6ybhHYzTxmpna2cc6t67UUkMP2AzJTCWgt5GM8SbK3HSyBxX54tDfxdt4m1",
  "key6": "sjATbtNMxVCatqrxqkRx4jHUmvVuffNZgMsismpqphBKb5cyd3qKcCGPCXBbRdnzDWnmBbmJ63ekfmNbMoXGvCP",
  "key7": "61gqyuqSQNGeYMYMkTZux2ayGJf3o7QRPQEJcbrattL8AQedAnL8DcY4ALsF9HF7yZq6dMXqZ7ANSSNVwMsUz5s1",
  "key8": "26urhWEYPnsw55o2hJCknp93MrQEFTvVPeQLwhbou1cbTu1iVuhYWJLZsDXnadth44yjBdXVkr9S1QTzyp1xJyuB",
  "key9": "2QXWmWaqpgm9TKyRKNcYXmsozStALZfAXqVCMTEMA265TsH1e8CRqaTAcEp9qrAGh5DkxPBCFivVvej4HyoonTh2",
  "key10": "5yjp3Ja2aT5uryMCCWqX6vpMNuKbxzTLsXebn5TBJRbSMYaeAFhnVmLNq6XTHDcRhXAwoiyrxTcTdBF53t5vChSD",
  "key11": "5iRezkZeFEXQzzUGHpqStBqMv4pCrZ8WsmY6KP2SoPo8Nb1ULjwfjPyhf1ebfcAUVZLSQjQjd2KsHwMuuy9Z4PdD",
  "key12": "2gDHoiiuMFnwoakEW3fonY9F55mrSnwudWj1GAneWhhnkG36S8NcRKpLd6ZWMvkHgkh9m7HvVPV9AJr38sx2xjxC",
  "key13": "5Pz9A9Lc9kbKiVT5zjZRrjGsFmH881Wf4Nf65LciXAczco2te4VkTopR8gHr3xCUCwm6p8QpxRN76JeMFrPuF7mk",
  "key14": "3UQjH5gndDZepysvQbspRAuyrxtg5isZ1hz3webxVH9oBxzs7t5QXXd49GN8UkiCDzkwXRvvHekw6YGZQDRK9iV7",
  "key15": "37qWwJYpy8aKeD483gcqQUK1oytsvPWVa4xG9t93AKXPAwid3hELthzLAPrEJU2JFQWndVAhkxfSsH8qGn15gFcu",
  "key16": "3ZpEMGGF49yy4bC8TkhtGxHf2WqTanVQdo961qB6dExcnxaJ1T8dthfxWkgEHGBQb2Cktj2sjSzxv4bEmZMDP5iQ",
  "key17": "3PEQ7CdJbfTMv1GbkJqXqBADwuAkecr13huvKU3jV83WGkBNGmv3wqexXocpki8F3NDE9t13HThRe4Kk4pgMPwv5",
  "key18": "53mSHmseymMWgEkFN9iwDnknR3M8Su2bUSWj3DXpo7rs4LS7cyd5F7DooVifST6A8sjCc94ka6BciznKdPktEetG",
  "key19": "2jkzsewQsjs9BrDiJVjHu2LPbH2n1TPnCp3BUWZAjVutNXY5nWXJ6ugcpQXvqiWBw7a6NVyvDU33gECo7GGG9sYx",
  "key20": "JaTfsNnRQC2zH4tY43B2XPnkjo78Jw2vxBwvaNL54M69t8QDMPfSjfjZLitSp5x7F4s8sudvqEkA3yyhAdi3Mnp",
  "key21": "5u2YxnNvvpipYUrsJ5bVPzvowpnLhHvk1WuKVRH1qEdfGJ7tgAp7Z8g6RmPUuKwJF2MzbVdcUznpDU4cAAEXSS5M",
  "key22": "45qrwrmCAnQyAv87LLMN9bgRVK8Lygd5ZYqhb7v2A5ZAA9diGENKzCyzNWh7UjrzE7xMJReHopvsfb5p2dJFnHJS",
  "key23": "2mauNWkkanjxxXe1PYYSuFzzvxuaGSXNKEAENyu3cjTw7Mq3c8YULnSGomuuaWfZk698hQkptprMY9jaVZNtBu2J",
  "key24": "35Yg9zqWEfaQAT2obRwvc1Zgu7jmEAHVQymtgg9XcfY4S9v1GePKDoywJLr6NisXCfei2TKEgRGvjR2UZvjFVWGB",
  "key25": "2HVW27ziMxqLqdM5QNAPCC6UL2qNLwUFbWeDLcmNHs1tdKAeJNV9hjS1HsSNk9gkw5L5i6nyA7tggdm8YnJqaccb",
  "key26": "5s5weEdNZ8C8zMtoAY6pdjrekSs4xunp4CUtbyudPK9URsTAKi4j5XCeQhvihhx9jMt5AUKR9bYpkgCzVcMgGnNi",
  "key27": "24Ne5aKGqHJDX2orF3tEoeDhQcUYbRX6SsywjjTdi2mYajgcZGpw9idJRFwkE3WjChooyhiWVjD33ikrVXYX3RPv",
  "key28": "257exABjzKxiLkAWEhrmEpMF1faDHpGEkvMAkrdRvLWF8D4y992ECPHZUdWGAgbiEmkcMVybYHeD7xAQq56u2MLh",
  "key29": "pzu89sMmJZ4cF2Jxh64Z6c5GTgFCXCv22ZQGsA7w1i9tM3gbeUqodMd9MvZhmdxvugFbCjxSj7Hi8HrUTWNsHoG",
  "key30": "4fxn5ocm8it9og89kwDezmRsJbSmPnTwFftMsM3FaDJCVkM917VMdEZ9uiTPw9Qo2c5ogLLGnrw1S8GovWN9b9WZ",
  "key31": "3mpg2gPjWZnAA7dHc7e1RtyDN14iZgcvUoNHGV3Ra3MHNSmeTNsgCCYu4hmCkxiKxDpcHNivnCU9iB2pTvF1rubJ",
  "key32": "3kfKvf88tawbkAta7sSrjYQHwcxTaHLogt7WTgRym8iJgRsNdhpaptboS5KdDwh9z9iXLm16tLAdUjKdZnH39FmQ",
  "key33": "UiLwzShUvpj2evqDcVsxfjQu3JDt5GYQfwZKXb2P9xzkmdXGbPBVxka9GEW95FWsYgK1Q5XdAiPoxcsLQuGUm2o",
  "key34": "2hoz5jgWFhmopJPQ4BgxdGakPDSNkkucZz42wooRwdSyiKGt4MTjgZ7z7BKuyePuC7Phni7uoWynpfXKGrqAgzpi",
  "key35": "5TfemjPhHWv4ZpNjQQY7tnskstkWYXLAP76SQcRFhvckvtVzNT1Gi7mj2MgygCVvnnBjgozbgtdYLHR4N4kYhfJu",
  "key36": "4orL3R9KDdibLfpqBuAdyq7JrHtoqFzYQRmRdXMU7b3idDk1yqhKtY5Sp6LQ561wJvVdacreS2pMPC36aDWM5p4w"
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
