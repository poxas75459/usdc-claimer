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
    "dzDVFAHv5D8uenzxKsnCANZKEHfMVz4rYuBNWASr1hRPdx1KmMcg3oxETWgLf4vkjCh2BnTdQhJurQcMaQVZ6rZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46vN2Vwh7QnTWeGHzyypGcY4bVa5DynnsSq5FDs9cV9ZsLwWn8c3e8RJRc4qTrVaRjC35C5VpbVoDXC8bA175r3R",
  "key1": "5fMfncAjuCTFrmBXwmetTjFeKsD1cAHtaqaNvLr3wsHv7a5Wgwdafpi7jeq7WW4F3e7qcXCcXUGU3PMxcSkf7QQH",
  "key2": "259bUVdrWRpH91AWGh2iWDCFSiQ26quiZZPAW2jEBDrv3CRwJpwpiFKZbGyhoC2afcrMmdEa7QjXXvPy3KAxHME4",
  "key3": "51aVTNdBKGoMkLjRd3Uu4MC81aLQ6EroVu2kDMVLFZruZtzH82BGXdeydYEa2WRQipvxipyvNv5tJSf5hN6jyu5i",
  "key4": "614Ek39up9VZohtdjEfBceDA7HJtTzs6whTP4GntoTuDwpXT5mV5bHwufXKXLcw9r8VYDVv5iZMQsbLWMXh32zgG",
  "key5": "5MGb72DQNN9GxvgerjBojrChM2PnTRQK2XwPJUW9jfZWnVh7rudjLmLd7cZFNP1aNJBhXkdLnbR2EpvuBeWU6hRD",
  "key6": "DLZ8AbQMFBKJXQos8acZd9WazK3kpHVuPnZcehTf1iRAAofk2v7aX23jBuUipn1kjTTGFU17kYuJydktXtmg3aV",
  "key7": "5R3j3mXn8VKg8g8A6uYkQxxtimh35v8jHswepQizKrjLFj1qx7ebHuBDpqwexCXBceZuCXpi7CZehPPmBafdBpNp",
  "key8": "b5PHnwWjLkGkKfqXrBaVKK6aejrEbfvbbx2SqAf5FPA55Y6vhAcWRhjDnjfkEviNPsosVTCW6enGkf7SHqbV1r6",
  "key9": "oJnGGP8tKK3E6KesMxUqZpqFYqtWfSrhHdXQtMshfoszuRtsusARyd2uSAYg1e2tL24iZrHTa1C66bZzTPBnq7D",
  "key10": "2AkMTTLzQmFF2ULr1w25Ss1ft88cCiPN9tEKm2qmBR1PsA9p9KrUpWFCAj4EaimSvKFioBX6B24AmRAm7RHffMfC",
  "key11": "5isjeQJqGpwBM7njVLgm26hqjKEAx9kaEsGR4M2vE28rMnbv9tKFkSzSvAYcoMs6Rzu7Agd1a8bxrXZpAFt3SCBC",
  "key12": "43Vsorf3phft5APvKcVXaADQ5XsUVddjvSkskF5QwKEQWbSjRSchRRcExSsshNcjmUwqfUz6NPg6DvBCCMVTHiwk",
  "key13": "4KGsATGkb8neMNM8N3NQtBJ1K7g1YnYMaXPGnn818SfA9r1PNqDPnwiRGsmoKQsQ6BDyJp5adNRU7sKLHBBqSQsn",
  "key14": "A8cBomd29iEY4jdPo7exRH46Px7ASyrfDWjJfjkajqCV6YmyMBEeL1JU8QRQn3HqKkgfCEmLsabFyk7r61ApsQa",
  "key15": "Y1JNg5anuURvjxdtQoA5LkBrfjfFtsffzwA65jdJtFcpxQqPSqj1VEWrYEVSwquxsuuSMtE3LySm7UiAZouhoEu",
  "key16": "4RfqsLdFEspTF4XGQTsABzE31QqNrePDzYRtXZ82q8GEvobsPK9iXQbqjwXAY69xEDUSCsM3GS3c6nwHMmLc8YaP",
  "key17": "4Nm9cf1ipRe4MZncPPyFCCMC636ApHBQ1MXactGXof2bKJxEDcTygraWKwoThpiDd2SmCfk4pDA158XZSfGwBnNe",
  "key18": "T9DdyWu2caKeqVsiNi3JWK61kDDfnfpMTs1bPmTJ4EbRqtRS69TVnRDsnh1EYsgJ5VxrtbLASPMHvFPcAfhHbPg",
  "key19": "2jKCUYB1HyvKq1njVDDnTFV95AkzNQ2mx64wCmKwNY1tWmGDccuvD8qBRnYKxHJRmmrrDov8CstmJt5FNDoq8w4e",
  "key20": "5qjEVD5Qr1nwAwP7KJnn9SMhPKutkNrdjZ2Nkwicy6UeVGJjNzPfdnCTbCvDwzvnNLkMX8myzFXruwQ4HR5M8opx",
  "key21": "neHnQm4FZzS9KHJmZDiWMGu65UZHY6kwz9sYRLTMm3AioN4bnDTcRVfmh8KfMuaA1auazF2njETJaDfDk8vdkHL",
  "key22": "2XMfgU7y964n6e2n2EcQQyoMzsi9hLRJTdFgxNxJjVz9jwaA4fRNQiYx99yZ12TcvNQWf5W1RKq6GvUiJs1p3ccp",
  "key23": "3kJvEVdRiXcj4yUw2ijX4A2FQ3VgK86bufca4jM2ecyJBbxvEUMmF7VQbbcnUwMxjrLb8a347KfnJpB9cnCr6G2S",
  "key24": "5fyc2bKjtoSCPnKnsa6t6AuZErc92voacQc2Yk3Ye5WR5wLLHjvduGq72vYom48ozWdrKrMEmrWS2wkPmT48v2Uq",
  "key25": "3nEjTQjgkVpaFbQW6AFjLrA6trCx7Q9yEaMW9MnCNHeWAq52n2vB7ZBTvesNjyJzkQ5rS1ZCiKCW1NqEZZeToG5k",
  "key26": "3XZWELerzothkQZhZ4oHkVF5tCEe8EDY38DrC7B3x4DpXMddKhDwBeMduDBg632doNdKrFUM4txR7isw4kdPUwEz",
  "key27": "21doF5oCCyRSXqqdvmtQMUn1otWhEg6z5j83XqZRCYDeFMuuxdGBmxFNzqJWkrzGHAYpo7ds7FsChTNZ8QEqoZnM",
  "key28": "3ZycNEvcZDUnMqXmxQxRSUcGSEU65DcYS1cgME3WdcLeAhrCfLR7Pfk4BSeCF8TxirU2ghZAH2fkZQjughyayuAa",
  "key29": "67faS4aebqvzEzff3mSw3euTWW3TN68L3Y1bgRnVwUvXytf4gptk6vK4jpLPWvwcNDLjbHyf4yxPLLsfimZiCBD6",
  "key30": "43sikEk4Z22DrqFsof6q6FW15SgeL2wX8nHt2NxkeyCyMoy4dS8MY5DJeBJgwvM5uCcjTBiYLJdsniMHCaNaCNib",
  "key31": "3Yik4nBxkZ7wBLY8RfBjttyikHH8CPozwAmhnv4WBo7hAcWTAdjRXGDzSMi2fX6hHqoaoj2xd3eNeHppLRPHxr8y",
  "key32": "3eN7Yw7ZyHgQb6J9pq8HzEnfM92jWdEhEyNNaHfeCXYUA9q35fby9qjfLsr7ppgXR4M7NTe2MQZRSd8SDr9Sg93N",
  "key33": "4SaAbJoGoccJ2w4jee5iEzHuV2V34ZuGziYDj2UdPMP6VNZtEgors8mNRVV9KK9tJWQdJR5xp9NE5PYcja7B22Ab",
  "key34": "2EL1DGdVogctFgeRdZ1P23DGMFVFJmeyjCMnQKs1V9soTCc3TMUoJEwGUxoyogyP1gKgZcn6HtLUFZ7n5ZVrBxH7",
  "key35": "5ErGuokWSjD1eipeSU9XLm4JVy2kvNi8sEvqvutUk6Tc51q48E6KxEF3aa9sF4TUBRVbFi7gSWckNXLBo5q3TDEd",
  "key36": "4QcadKHuM31ZRtJyqdh9uxa5tFSucH6hCE1onfQqcM3tjomVN2yaDMyicD9dxRHB6nuERRpydigKrR5QTpy4CSZr",
  "key37": "3PXkdQCN2wHPrnnXqUR65CPPX7mXD1ZKXzbFc8AHFt7XGXNFiYXY8VmCwxF7sg4XVyyBc7kCiDae6dacdu4xmxMb",
  "key38": "2oGVVp3CJVWoShH3iLrRf7jsBhBgpfjZjwYoUKMFjb3jQBXu8nmUy1jczxFSSQBswFM1LRdcdtCuorzZ17zCwjj6",
  "key39": "4tpvR9cbQUm66TQQnn2o5QrA7JyVBwj3MRmAXeKuHv4ASZSUyKq7gqdTJG6xZSJsiu6TqzeLRk7GLAtakmC5Rf58",
  "key40": "3Y9aanU62Ja7uDPro3nLiBtFBZP2XtdjsERTv6cyvxRRzArBdL5cT5fY13KitX8nrxHmEFkUZpXQ9PtDMyF6nVnt",
  "key41": "3juU4XWQVAvJoxt1P4hy1QfxfvBYNiW3FNMjBFVRjNw5T5HAE6xdeHz3Ev9vrL9eZiri2k25Z8uHmVHvvRWpc8Bq",
  "key42": "365bCDxraCmZm4K651dpaXkjXpL1VihK2YKGAxdhu7k7cAtjEB3qfajJJfsWCZHJgfAbACsvcAAmYdgmjT4FzASd",
  "key43": "35PpQeXkBs3QcHJ4dHKrvohwp8aqg6DPmFwvV2kFpMjzVB3GCJHsQUGAjirNAwRkBzhQaBZGoBjK2ej3RaV4D8AU"
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
