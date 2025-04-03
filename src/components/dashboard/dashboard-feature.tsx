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
    "5ezwgTfqWJXTYqJQaeHY9mHecSYduRpWT5Du4pQtpoX2jkcUtHz9bTFEr4UL8gyniN35fxMtu1LLCndY57ayHnjc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bHmZi8oi5WZJVkBdy1yapc4a6Ufk9hrK6Wm4K4wXEpzkjHx1ocAEu87jrPVPS53q2v9pNZyYACDA7pjgSBogFZF",
  "key1": "uqMRQBx8SmMrU2iG91BfSHW8shV7Go1z2AoLuGHdd9KsdUqh8n2338esfg7Cxq1tV6c4BnV9Ght6iTqsELw3FeA",
  "key2": "39o7f7YQt1fpZm1UjV8pQMZuZgmABxnHSpEPMX7agYywXxS9sDsNpZUzKfTvoNw3p1SjohhyfXnb3AgSmcNMfMsK",
  "key3": "3qURdzLesseiS1qyAevT9ebX7CypYUdJ2zEFuZzHcSsKkwKqFyWjpLfzwPW1qwrt4BGVZwCaDHBAwtGRdGC511ct",
  "key4": "3RXdCsQsWmzkXucKGG1CDE458KFtvFUX1w6YsgjtTfeYwoaR5NxMs5dBWbLDiMW4bqvDo4xtr4LH9tKo6gWxiwuZ",
  "key5": "5Fftxwm5Ms9evkBkC4xAC7f4z4DBnc1CtdVQ2MowM5v4WH7j7RtJ7hegQC4iPm9HXJKbfSVQU5mBvfF631wQZM9N",
  "key6": "H38cRZRU9haqLGG1z5xg6sr4WCQBndFgC974yvfNLZdgcU93D6e6c9DWGFEfDcw3ZVWLLee5A57UHU4Z2WsvzEr",
  "key7": "4MkmZSi5xZanWRHuTtGyxdkVWionZkyuhY6pD5uRpJXqnc29EjDvD3rQHJ3b9H7UEBHC4tSPm5qpc7mqt6cLkKNr",
  "key8": "4j5UhAuxqj97PqRVrmH523FW5yE9nBENqCbRk9ymuSsaDZN2wbSqyNmECjPUHjASTFqhU28tBaToGFRxNALboJaX",
  "key9": "3rGUARui9VbVSDDZ5K6oVD39Y1b8SmETyRi2oVQQoC6V2TDi5JFNP39Y2pppTRAP6gyy9MnN9zPzuT5UFUKhPZtr",
  "key10": "5Uiu28b1jgDKCWAXAnwDrC9RAF6yvf3nPVprk96pbzfurkQugroPvggLY1MMpHw2erGFPHdQadzUBxrQsM7S6Kku",
  "key11": "2Yqc2BkVhhtyb3dpVnXnVGQ2Qv3ek8XqdCgRSMKsh4pvuR6WHvMZrXnSd8WW9JanVa2ps2maKDf8x33PDjGdKT4q",
  "key12": "KfWHUpLU8t9vC8CyaP5dNz83V1UktyGgfSacVH3yGKobk7v6XTRJcXqQe1qeWXtZyQVFm9VgHT223CxpEA9MhFL",
  "key13": "rSHeLfEUpjrMWhLqCCabPpanSTc8BkytWWTMzxCRy6xWNa1Y29bki7pce18qGfKzsYsGu2NuBDCN7d4hGLz1sc3",
  "key14": "yR74nDNSyuJgLZPtRpgDRbwgbA6xMjodXjMKh77jE84J41UYGF9Cw7ZADbvCzn6Yw695tr98FHh6NzaanjGbdmw",
  "key15": "5xe566mV9zyYWEfpYjn2hy96FY5bwusYhayMJjjQzUWWQUAtqSiPqVLKP1Qh1Gvc1v2rHnvacip6QWMqJAtAkJPU",
  "key16": "5oZ51xHNLUoTV4mn9CMoST52f4cZZ1hNfUFfe1aEN4ayywBgrPa7VjKrkZvCyMuXGGBR52qMVFsMMbJxm96uoBX8",
  "key17": "2sHzXxnZ5PGiCmvB1FKBpm4BrXo97F198Yko7gZYvCm7H6K451H46qjrs6VfeAdhhhbxsVdmAVaHfEAFjemnmpcs",
  "key18": "3qiynqZ7aDtieoshvG7nWbQ2VTsiWbcA4YboSRXEPXBtsByBMN3MryFdC251GrsxqhUNmRU9DPnJH9RdmUwTzXnT",
  "key19": "38AfHX5eNSdBqNjjMUYvksCvBB4WTEBRJTU2sFE9wioCS2TxKyXaJurvhG8EMBw9SiWQvDwozTkmDcRnNP8uutWt",
  "key20": "4cvi6xv8j7cho42mfqX8D5Z9DofR8NjTZmnsaMMheAfSjxQpUtU8DacfyTC3E7LivmuUcqEwk9TYG3bbBsmg29tR",
  "key21": "2pdjfMoDKq6HjcAEdqfryQWnHopovc4vuQhnTD8X7jZLrBA7pHMzwc44Dwjr2G8cAv9B3FkE4W5nP8n8Gr6SpA3Z",
  "key22": "3p8axo7TuQm73JWpsb6en6i8NsKNdhouc2o41tyWPYT37swGiwPJ8vCH7TXbaLr53hPmxrVsE2RGHRxoSAUS9eXW",
  "key23": "3ioSWxHbe4UUsZDePAdvZ9Wn2UkTqFDTEnrjoCwKDWDD2QfyZg4Grf7xbHG9C8z1eRTbQVQi9zoGdnn1kSakR525",
  "key24": "swF1hMG1Ng1CX7zxmSJ1ZuJULGRUwkqQk7WVfSK1pbpNWWfzz6ydbJ5nbSjEkYk7CSaousEicGHo2zfSDY7VHpr",
  "key25": "5pzEYHKvGeEwTYvCPvzXxr6UF8MXqYNteewXnvit99D16UgSxieEzJMj6rfcGeP1DGrekPbLutbhJuzWig2aAyk8",
  "key26": "4QVjLN54VfeXTNLyfNA8zdU4KJbFnbi5QtefHWSxzLLDEvosNPUxnkzFD3nhiYECgMF1mLxmpoV9bQw3MeDWmsuW",
  "key27": "4a2EH6zvN17TU9jMzsHxyVS9SZZMz1NXKG92TPR4kWSzaphHXG4NFrFKoxodNZJU5fduqzYiooukA7EMfZ1nyd3w",
  "key28": "bVrn6H14n3h5bRz5qWsJtj9hsgeSasRViTHJZurpJSQQE82DZztg27x5RaVA7cyLCkMMsUeBxrDTNf1C9nCEhBT",
  "key29": "2tyYqz5pZQBFde3nLLgkV3oerekF9f7Ws4gbL9spaAsNo4CGs4s1GrYF7skAM7GGwqh8f31mcNqYwRh5UHAicbFx"
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
