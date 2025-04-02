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
    "5EnJ5pHPfebhatwxccWuUqAZpcvqUefJEYMW9hcUhChtrgRRhjHm9vFCkixwbA9zDaHkZXuo2KL1y3LUSRecicYg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aqBLrLjaHxtvfj6XEFNdFUpU2nmVoZPm4pkszA2qgQn5WLe7D999Ks8bcFMmHrfqFqYp4K9UQSjzzM7YfHxs4ye",
  "key1": "5BQNgntvdoa59iaaWFJg1JZJHaKhfjkR9cbN7SmGXu6FYRFR5m6uB5p8tepxgTDJX1Ty2LmyCd21GWTn9uF6jqxS",
  "key2": "2871Bc3U5acshzWN37xnS24bVX74wEhaQ4prD3f3xm9Wch6ArJ1GKqguxfPqCx6G9UPu1BCrB6C6i2Q4nr2Bbnhb",
  "key3": "3826sSUGXzsD87TZhJaKWcSpEEn8ZET9Na3qxDz91wp9S5qcqagA7uztug1KGci2fZwFK1srNsJRwXLJS4XK3n9d",
  "key4": "5NJPCFx9tGQTaZuqTTWW8iv61xCzZsaYgcPgy4Eh9tF3ripYKxx24zLmP17oVnj833twwBboLFXX7jfxRTpnoWQU",
  "key5": "4KJT4vahZkffwy225cKiy4kjH6pk83hysAeeC724XaC5qPonxXTPzZdqia5w9eL2VaPcGnuQZaUaPoLXLtKxXxqR",
  "key6": "viS9asaGGyGGfr58VqVest7t6DXDHXMDXe6SuVJq9sMUZrArWWScHUiocDFeGeib7nJuAKgDiHrxFEjav4KKtqE",
  "key7": "5FfgWhY1ZNHXYgRhoyaQnqoVTpNNdG9cfpjHczaV3DjD2AbJy5JHpvpFLjPGkqU1cQwN82SmZUw2SDJH7wi4gfYZ",
  "key8": "aaxxVaFCUxDBNsJoGCr1JDkzv9hRHoX9SfGoSbrCpDQDbhHCooNk5GzqsacijsKQkBjZj9X7a37DAXMBSP7rS1t",
  "key9": "65hYDrdvLzdB14JndPjznF8wFuoDAqr6r8xYhqA4eBmpG4eEhgi7pP4HbztnKPvqSxge78vXfbNtKT2r9TN8wyEb",
  "key10": "5ZdJiA8XSv8pL9Sxhkvosy99QsRxNAJ97EVAdV7jEZR8AuD3EE3JXuFHyFYK943XMvzVCBGQ3ccFsA3azGcZNP7S",
  "key11": "33cD5HJjTayGj5vrxK8XAsSwSq4wyzTUXJms9Cth9iFsBZiaG5i8kVZg1pMLxQ78DtVaxzH99i6X9KnMX3aD3DDT",
  "key12": "61LdRAY2c8ZvvxYEnSGXksZjqrfpiJdmTdbLE2Rx6VvtbEkPyoLXpfjX1SLEH1gyaPTeaZqCKRRFCEd8f5i6uppM",
  "key13": "64UR8k3788fryj6izDecEFuvJBXaoq7YYabTS5WRsR9b2zadAeh5ci42QW5NJAHjuqoXUaL8A43KbT7ghYQHJ9Lg",
  "key14": "4LwY3nYhXBQ9Q4ch89HCVXWTfRBg5hPfkryuqz4Voh5VgsQphyWngbKM9w23aPeX5dQWzvsqrfYBHSppsfrrmyUe",
  "key15": "2f2ynQm25nPMEZAi8yeV6tLQbcWxPYxxpcveXLNUr9YoteriBmBpJ81iCWqsrDvGjQ7bBDwucXPhaJkDLCMLVb75",
  "key16": "3fDYuSj11Z2H9NXrMBC8XWaw135TKTJNwys5VbjdRC819rEvYVke5B43dbb3ZkB6MNgfZyuZ4jXnV9ijx7QdXDX9",
  "key17": "5RqCZRhRnVi94ouB1geiC1BQUgUcZgHWZTqrdtRPfjkpMafN5vypEcWK2mKxkD3hNtxHbhWXBTZVTsWWrRqhXaUv",
  "key18": "gKPvWED76Kx72JkgRRfARt8vXuQ92fVLCgCkjKPJ9s47HKVPj1iHH6PiDSs8hReenNYE3FPjB9QwtUyVX75GdeT",
  "key19": "53rsRrPyBCQZ4uDwnsuZRetyM8ZH5qJJP2e4WLuTyPk5TEqrRxwBUfXtFVUjmGADB7vXbrzpay5YvzDidj1P2KW2",
  "key20": "4fR3DKoBcDiKZaZYSiAqaFDbahScxwKiUbRJRYKhAUFYKBCt9G5HoXSX4xX13NiYs6awp2iZBAzQHeGgFJteC48S",
  "key21": "2WcvAYXh4jqVAvDdVkSs9wY1YKEZY3rwWZgf8jtTaQTWPkNZQEdN39JLfFoSqxnzCNRd7VoEHykDiJkxTGpEp6xX",
  "key22": "2GxVxLPxHXRou98Tq492NsutSnKRunH9hDcCiSNRa7NgEWa88FstmfMNVrE4B7YUZwYU1YrbV5N4ofiWcJEJfDoz",
  "key23": "LbCBjchMxPomu31E2u136MpmA9BMaruShiJQJpFXMSnADFZ1daNnkGNavsRFQty8A85by9E7iqsLi4H8hBhez4d",
  "key24": "bxSyMLPJjvoqPc56Wbi9Xr8EpfAp1Y8K96fY7N6FspSoyFKz3oH1bsPSaoPzYNv5bHX6DRp3xYoBR7BGocvirt7",
  "key25": "2sVRdWGWKu8jmT9xEL1LwWLYG8WbUiU24f1bvmoXtpc7x3N2xdY5jWdwe5usNxNfk9yFzhpHX9FYRYx8m2W55bta",
  "key26": "PcU2Sqsbn3cip37c9n2zpJiVTYUQ27R4KkcGbJKbEymMvP1ziCXCmX5C46M3xD4NxE4ypusLmfcKsGjotaCGBAM",
  "key27": "5zvRAXqGaZaL81CBDptoVLQNUkEh2bWW9TXEHfZeunPNeFxDzWqsuFtY9fhhpfikz1GkhxgpmQZnQnEFSJeEqPsK",
  "key28": "39QCVGu4nYQh1WMuhm4Wt2TKCeLLLGq3ua6fSagm11CSByKjyFQ7oYKfjzwArxNVZthif8BeWDAyoS3UZ7FmicFj",
  "key29": "5t8YFGN2m9XmFNkrvSpoMJow6CF8wq54yfmZqhEQxJCJL4w8nm1DbQRGptuqQcUt9WYc3ysfitqraEPgzBmfcin9",
  "key30": "22rSkWy9HvwYyzfir71Lr71MnFUJXM37Dx7wHG2B3oZrKpQ5QC4piWrK8cyjRz49fcAREfpvbQ5VFDaPPREYwFpD",
  "key31": "2NuzejUWgLWF45zhKMS4KVafDbhSzCmQ3adfQm4TXzmuVtzXw6xXqsyT6CfPzkQuBdEgYHzyCCdHBL6jh1prUebB",
  "key32": "4w2vzjAf7E1Pg9Ey4BDKDCKJeUUK2WRUurwm4Tvb5PiRWgy6Azhun392r9CZpZi8uLMn3gmsEZZUu7M8pBqDM1vd"
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
