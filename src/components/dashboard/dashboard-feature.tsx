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
    "aZiVFE6eqnWt8PHXKQvCFpakG54JrSvbiMVLngpNaf6hT4wczx2CSmQFHVSUktrMwYYrxbGhzYU2sM1sBpW52My"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27yHKTb59DuxmFpdJG5JtbLEK8pkKJ5KCwDnDcQD8iBmGDogtb57Z4uiPwfKfQKR4zY3CzadneKuuNeFrmSiyB3a",
  "key1": "2zxhBCde4iwgnpREUUsamZbckJ5heDBTYDkCkwpSvWeppfRU4mYBYvrzfQeiCusopmoibQpHh1oowuZnHP93adyC",
  "key2": "27HVDcVgYYfMDmrZ3pUMrBGcibq9TbmG7R4HLL7vCQXGuH35QLpuzbJMCADVo9xDsgkNkxNnQCuz1tb6SpvHHsZ9",
  "key3": "5oMM7xfYTdEMgxcqg5nKZUhgXPdRsL491pynnRzNbZuhvvoLk5R3gzC8neWFihozPhAoiWHpTWNYgbwMtXCEA2F4",
  "key4": "4NSBsX19BAnVXKd55QmDGjw34SkwqRc6BVVspgA3jxUBqtjhst4g7tDzf6JnjprF1oRh3X266uU7iBxZBzXPUwS4",
  "key5": "3UedGpRqFxJviFutW3WxT89TKTp5SpPqUH3RNBNGkYVjcBVCDQh8EE44CfcPCUogxkUssB3CpGxns3tn57TgHBz3",
  "key6": "5NEgpkDAydCDbRvCBNbsKjA853bY7JZGbWipuTURTaaMP6VkwKiWpAC1CttKKr7FhtpZF5V1pKuDmmWLhrbBUP45",
  "key7": "2au1oytp4WyXnuanP2a5To1pLur1wALqtu3CpyEYUvrcaBkA7aKCsLRoQ96Aw2niuPAUSiEqX7iJvbKeptajUvFq",
  "key8": "3HQbsKbKzjPpgrFHXD1nSWGMomJ3kRsrVzUj8uZzf2K6cxpFATUKjmBtpGhF8L8oyuG7z4mk2tQPkkfzLWfc3a9q",
  "key9": "3EfmYL6JVGnNFxm2BhrV2VtmeVeAtP7syGXB3yc7JiGNMm6EBPJKjyP4VAhf3pdg6AShUN7Lkp722nkfvV6CkmTh",
  "key10": "kd3dqhTSs1mmZhHHUqdpoLkjsEH1WUzge8vB7u2gV3x6DMNriqr6CLnwtg9vMfAtW1cj4zk81nMFK3GnTkgMTXm",
  "key11": "64uNMj9G614W5U74Zvx4UkpzFoHCi9G6WDv2J8YA1UhqbBMRudd8mLzb2sTzVYtZNE9bArfZCbdFZdspAeAKw9im",
  "key12": "5vaQgnCuGWGaMyn2JhTpN5ZAwRQthhf7oCbrBYSKM47enasQPddViPu7zT5HFFtsi4ZVGNazMSqCqdDXFcLpxxB4",
  "key13": "3GuhYU37T9BA2GSQCk6pY5FmnqPQiU6JVjewAY7xHVbAFnsW9aNo3TS87nVQ1s5YwRFyoeHuGanUv81uDZDeSZVG",
  "key14": "2FCmUDEkHZR4VFx3U8raK2PGVgtSMXeXiHmTQ7vUkZQdfXdpEZjFBs1pVrgPBYWxjar9VjpwaoqiVt8u9MkGt8s",
  "key15": "34vpU56CyU2fGqXhd45nLU7co4EjxJJrYRJg5Ru4MvhLSgxVwFrFd5ZBBnE47948snnYDWiqdioBVzDy3WiPk3ix",
  "key16": "48DgQVtvLkKrBC5CERrPFM6Dhek7at4Ej2t5qT7uZrfeZxnpMJYya2R18qxg21J7pqjwUYfeQUm8V6CdkNLrajPj",
  "key17": "DfeSmwjZqnmDMkNkgXphz5y1K1A5jq44u9f8sdU2oR6TPYAwxjmSNkXdNWqKUzM9gnq5U6sq3WAKmH8vh2fU9iu",
  "key18": "4yPCcjK3MEoAKKL9n5yGd7QcgZNVcuVLXigm3J7jkWe2iAGmXMtEuPyW45zW6anaEnF3LFRDoSb6eqqA2fTjekfh",
  "key19": "4xLU8W6my1jPqdYYzPyhFhoG3WmRD1i7dRMf1Q6jNsg97chzSftHU1YaUALsiZpDXBthZUwuQAA4qquLdSnsx3cq",
  "key20": "267YNq4ZWNBFwVK7LGtceirHtDw2rpyKjUE2Lhc8e966iQ6evTBXw1BWTDydV4s65RN6pQYwJp65fVAmLCCf4KQB",
  "key21": "5SoFDv9WuDLzi2MrtNggjDQfud2NSTZwMniqonSLDTWzNJ5oZdSsnWfCQjvUjjF7BkDFYjasFMB87v6X7wkuvcBr",
  "key22": "tXsbgntKwJuhJZK3bviQNKLd2ivx6ZfYC1XQWXZWEPdc7HfxfR4eTJADsdAKpNxtFAHgSVEFBPxdfTbF1oA9sJ8",
  "key23": "2RqZvxiaeLFLonAopx5mo9mfpiBd3GsukuuUSnSU63M1myvTWFWrHfReAHA4DRAUyqVA4whJEsYiiVECpYjDBi5P",
  "key24": "3ZE71miY2GV7sdQAMGeNHFjX7J6HC6qkAW8y6W6tTEbULfLBZSdDGNNC1EkcpqP5DsSa75ngZeG3nQ7D7Y8PdKri",
  "key25": "4YXobYm9Ao14Nxfi5hqYRKRoFfBSWGsF7prgdHTV2atDZgGZWANRV6MXgN9P9ptroxUbmYGScVM9MZWXwXD3sjRU",
  "key26": "24DYP8SpRqWsk3Dbc2Z689KkbEgQ5vjrsjHTGTUgpeeEafkDhAuCTK1GkNHE85ea7MbxZt7Pbe5DtoLfxoYX99eq",
  "key27": "57yBgR2nMxowqnupQVDx7KZEheGVaXJFgowgWEu1LzUyav6uaV7V6sQVeQqPoBD3JifvmqtVtAktDyoihec2YX5T",
  "key28": "3TP8NZuU815iEcmHocWXyeQf2rLoco1vtxavJipbCg13uVuEGPEk9jgHqiMYAPPv5smkb3YLPFWAzvDZWTWkUTtN",
  "key29": "33egUb27QGb8eoX9hrA9jP39vVBKdJPYorKr6YNWusSD3GmqnTiqvM7Qb9V6Jwk1eyFZM91v9CvafcYmPLAQdcZk",
  "key30": "3YaGHXQEqm6wfnYcUeamX5AJiCxrqFKwcsH1giRJi88hu1wmxddVntmic2gMSgVsBBCp4XEbizPwED2ja4eaK6kV",
  "key31": "3GbMqjeTWrbBDhrJXVtQsByAznJrYkAFKwP4eHXfxV7YpZHwzkaaPVb96zoHid3U2UAcHjzKrfQaQybxzHpFevrz"
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
