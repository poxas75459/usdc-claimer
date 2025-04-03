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
    "4jPBEGVPNaKbd8cghRWabjDP18NTphnRVJ1FqKFUimg1M13vajVnvJSHNNZmxKBevszNYJf7cMk7uDB7HoKzDRiq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LqpteNpzcWveApY9bi7vMyBz6zR1NqQmpivERwABRBUhLE471NKbTBwcQDbD9DPJADDaVND4sw2F53zGkDKb8tU",
  "key1": "5EzVz7M7F8u1kkxLADgVBxQG6vi12kLqz8BekLuCLU4ZHCnLwMzSvSFdLxYD3xoJB3KzxnPqwzhd88EJw7QbayhB",
  "key2": "59d2167819uuTN3kFgT63SxZfUU93WLCKTygMHRY6gGKxYor8ND7eiS8Nv86hazxRbGWjFUHkh6qi7atDPtJLY5u",
  "key3": "JNx2izzUYEWL6wGtM6NwRw6iYq6CQQwnTiJ7ZEv4aekw8iqu2RszoM37LLfMNgo8FrCsUBWBy6tsdmWCydEf7iu",
  "key4": "5RuQ27ygKfA6fpKsbYBBWixZ2sZZewDBnHooN9N3mJeH52UuRobjtB1zoXvy6mCQDxA3okw6UxDzRbePNR3fWP7d",
  "key5": "XQakkZwAHMN7YUCUrFBSz7K115WK1JiwvNGowNSuHpchJeNeCD7XBTnJuu6C2iUkRBa3gwQNnC5T7x6v8yav849",
  "key6": "5xxA3LovGkHygv7P2PHeEFmLrVhe3XJbXjoyd9m3r7KhXeb5DjNXFwoMvjVe9xvuFWDMmwHxGNfwbZUFw9aCXHKc",
  "key7": "48xDN7KHyNmEV3jafYBQsaj2hyPTgtzkz7R5Cg3zPMWPuEPcib67qBCJaw5AX8tcE26JYj6C9BFZkJmE8uHZYypG",
  "key8": "3ZsMMHk5o77UcHf6ddk9kxHLh2cD32FU3eBnFeHofpng8HpyhqVU3z7zWf76YxJbs4wNmt6pkW4J4oGq854Uoch9",
  "key9": "4AoCjtNwqtkXvmfDjm2uYioQDnV6zcdtbrX8PPpuA3ZgYifHVNwx72Z5tQktLZmUZDACpTnrT2nXrh1isQC2fidT",
  "key10": "3hmRXNZAw3SC4uC5LTJYowJcKoQec5ZKiHKho4hBJAy9CdKM4S37o9vqMkaBpz9UgPPyXZWQ65nbwoDUsYQc3tW4",
  "key11": "3BDS532oJnhtC6xME2aGLVY5RsFRadjAJfd5crYL19wntyCRbPDTWCeFRDMWCKkEPZxRX6jrpRu3WAEDCj5Csmpa",
  "key12": "5G83QUNvEB5v5LFxgz4NA6EBrKNuiU1R9ToTkdEK19n94ow5CUjtyTQwyQUxXt5mxR2rdhrcvPLk2ddiKgNUNSWe",
  "key13": "2uwXhxdJ5rMTnWBriHSDWb57UGw42TGbKwzjAtdct7GV15ozKVF22uqb8aVwjqp3RGejbmCPpTse6YnBq6qQSuNG",
  "key14": "4nuLeA6YVHtvAkkoJgEujEAstS6CpHFR7vUNRAA92352a8FQmj7wVL6kqY2TRoNx1afuztGQMFwHsRiUVBmbf9N7",
  "key15": "3UF2KbKDguR78MNV3UM62gnDmcnvcMAXBmpyCoyWL6SswVys68WuTEtRAoD7EqWyuMuFQFmpDSaE8uZjSS8sq7H3",
  "key16": "5p6RxyUYGK2yg8ZFCfinjPTyHkkgGJhFvCy5TANbRU1wsFNgoAKxbNtgQe3Sa8gAw96Upt5UnmAgCReqXq7EYWCF",
  "key17": "2RPkycFkcKCjPhT3Zm31Wdntmc4fgbnuT9iw2hG9x6XCR5G7k55SEHjzRoEz3RmcDVyGN51BhQk8xqe8unMafdzL",
  "key18": "23qLdYgHjr3PgNuCZ9gJv4pvqKzAFvyVgCEWX8cBqPJnrNBuFCUVHVuGGMRpzNKf8GTzCUYEoMc3DYjfhb5jVa7W",
  "key19": "2y4jMaXPUj3GkYTiNUGdoNy4hNjc7C6GCT6RoNDXY4LzHTxQTKAsbFfYorVqcu7TbvyoLyuF8MbA8S5Avd1CsPPz",
  "key20": "2Wk3WkMHcSd15CszFiX1fdRxiVV78JbcxMF9hQxKky9Q2v5eHeJabnJW42oAJEGU57WGm5D7gQw5fhnXrmLkfexq",
  "key21": "4F12DXMATwFaGYpvEXLJtc8PUY5cJKXY53MKrgjypSUmNrJBicJHjHnT6en3JADECupYmj6Wpo3qcZzZ7pzGuttt",
  "key22": "3dmYm83q5pRtzru2RY2kD5mocL2yJwjTo3J1oQy3XU2ACvLGXfavVX5HctmxXfrgCeQ8nC2yRJLmkufebCU6TN98",
  "key23": "3EoYxHSyV71LHKcxeCpJmYzmzMMpjWzksDi5zX6edDBPksURmmnQjc6iZsscWL6ZEuusjRbN8de28n7u5fV4HpTw",
  "key24": "5DoLc5TgMPZHS1D12HHhjLzhGah87XjDugkQEjA1Lb1K5x9JxQZbKxxaxq5wTnEN8QyCtWBvfR3jMZYSuj6jBXQM",
  "key25": "55FfakRcjo4LoocEwR1b8EZi5X3x2ACEUpGvTfusiuqronbpkZkPaoTabvx1xFVei9j8xminQoJsJbLxAdSc25LL",
  "key26": "3cZkj5P5JbBrD8CDWJGB92CsXwLChwKdE3YAkTo6qZd6YwZ6NYdrqD9PbEb9WNdMrBJKJebCEnnBJ4jRFSm2ec7Z",
  "key27": "LRHcBQLu6S3BoPUZ9xy4D8tj5vGKFMUj4hDpGBAyQGaNEicw3AgE4HfHkufmohLdME3Pr4wAsi6tXym8a6WVCpW",
  "key28": "2xv9CjgG9RKaFoHtNu3G527zKdEbqHmSc1PLNresv2dXyySArjjpKmAbE9wZf5pdDY1nbhEhNV7tQJGesu3mtM3W",
  "key29": "4k4pEcymjvH9qx7EyESdNd8qTdW45ug1YSAe1jmasVPTsVP3eRe4TmPE9zUb9yDo3mzMxDeMb6L5Lsr5tTccanKo",
  "key30": "4WGmYikjBhPSZi3NZ9QCZDV9xSaU2zR1VGdEKd9ygzF8R4NHBouaQCLKBgrNEpY3BbGGz7rnU9DNPJnFpee4ohtb",
  "key31": "2RT2nNPCd1gDJUrS8n1HJAuxTnw8Z3LyQd2jDF3KEBXvDZ78g3d8UJZfCdpUC9NZiEuQsaPHkp8mn342FYQawn3o",
  "key32": "2q65ie3hHz8ob98xJsXMh28rmeTMrw63cEESZbVoDrF4qz96iw9um72R1WUe3wXPrxT81T95qgrdBfv3GJhCHPjd",
  "key33": "6Se9ErjF4kRxxfeKMVJEKKMqXSHN24Sea3LNBz5GFTgod1ZbDsBa3zzeCWc5BudrA5fAZUmAPDq8wrM3wH68Uqa",
  "key34": "4CrhLnpirBoMPKUdXZzZvrYCPyvF21RgfjiHyCqHaSzKnVJWGtHrgxJx7dn8Rc3KfrqfH8aEe1k4vfsfBWRFGqR1",
  "key35": "4gvM5WS7CCmFcQt1wAMygLiwqxAPHZ3LT3Ea8pfuULxHZeN8vZrLKYiRfL7e5u2nthweWFhBaXmboK4rK2Jwne5C",
  "key36": "PFcnoBfvggVb2W6yNsSFVoKGUDG4h8M6V6969A79rczCvzN4WQDMtXZActALvW38CcGBGwJp9iNokeuuYTNwCYk",
  "key37": "3W59tTr7YsCetDsWu9o2b9M5R7KtwZKqNtzfLz5JWRNa6T9kX31PXxCtTUHr5Y2ucyuJhRBmdF8EyWLB2daV3Eag",
  "key38": "4uFjP8AtbJFRCmCDgEYeUYc1rkA7VZyfHQ9PXTnHJXrh2k4hQEbEFbnbgEVoFSXMMf5F4c8jN7nYcrz3XNMLLhMT",
  "key39": "4PiV832FKuyDwZqqchk6VT55VaHquFNnpW6MeEPFsVGgswv5DQgN5oqPDnQs3PnpATMLz1G4Zfop82aJ3uDUqXGN",
  "key40": "P5ZgSfXSmqxCrtx33nvAECphtKgsaGUcepCXVKjCkKZANvqhG28Jij5C3mXAyDDYvKADf7xhvBN8hVSb38vWbQv",
  "key41": "VYNgrXmb2ngnduSHcCFz3xKcCd3d2zHBgZYVhH4tCzAFiokYZiB7SAEPeUbSCdUuwcbxYEfzfuxDcSEqnAsJP5M",
  "key42": "5YdXViA9LVvsecWsTcB55uvdxSmDSb8ujzjjCnfHBoUfMWHMeqKXBZ1knX3AMP4EMxPtFdaho5JJe9Nrf8e6x2Zk"
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
