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
    "2hMdsP8S5NxHjQhn6mLqFaC8snUPr45qwe4kGKw1zufU3TMLG3nRBLhZwuJLKvpvA4JXj2DLgNNrudj3Pt74uRRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dhtH941AGtvubJFtuNpRD3EMNh5S3FMvTff5e55XhcBKxf2q1EYGTLVBpbyQ7ZBXXruebNFh9AsyExPtN3o3cak",
  "key1": "b828AtwbCXivS5LkR24gkSuMYbdBsExCc91Fz33aKESecCU1X5tfi5mzmjZ7bcZxVmiHw79MoPHhnvDLPgsqXuG",
  "key2": "5JnU6RDNVmhAMTnBAHNMe87fyqtsy3RzewajfDqxpZfmKa84RSX3sB7NWYzSdwRXdDbAMrCwP6m6xJr7BfarVE1j",
  "key3": "261jwY2K95x3yE1dGiH5zsipjDy4EyenoBRRRHArNzbLJHAQf4SiU83tjfw5uRkG4qzdPD7dgqoGbbHyYsFLFzHg",
  "key4": "226ZJdhe4bLTYkCA9K1BAf5RXSBUntudMmRrtEHx2qc2RD68ysqFGcqm6Yf8vHLqBmeoCpJSRKzvXMXQg2Zy2t3D",
  "key5": "2NFQ9BJT6EmzWbwM95dDtLvAy3y49bmJeuGshN8fAwVQqVvHG55aRZkXSjsaFmbLPZcwzPfwXqyTndZeK4SvoV4i",
  "key6": "3UTgto79WmrwiEgJB5bcWEJXNfuxdCMMJ8qGMxDHwTXwH7vKpmXPU9icrJbn69AGSrQ3XV3ECh7QDvNWqHbsB5Qc",
  "key7": "4FbLygAhjtJfS8sxM5BvYk9fVeer818APJubtfYViaU6NSUf5oLabFakre4JyGXLAS3t2m8VHSVc7QTgDTkDKEVw",
  "key8": "59EHqWyuABcbU31x2nJpaJs1uPEnBUWFjjSNzmT9rJFUAw3itBJt9gnrQ3877BFFBPZ2nABwb7QnQFZzhNuiHvam",
  "key9": "xDNfZ9VLLwvHXDKEDiE2c7pdxb2KZv3JuG3r8RZaCV94zbnvVAfPtr6Vs6kuu5oPWtd1v9P6QVn31HgyJR9gXsK",
  "key10": "34eHrMW3bhE2d6hVfH3K5Pc9GC2X7mUhSRMgKYk1GqYejAm3jumZFWYZSKtvxVdAVvsSzkTZoPrJZ2VgSSxG2ZEG",
  "key11": "2TVQynigwrZrEa3z6ubP2DE1kfkAPC7CWSBquSYWNpPNpzfghDsgYBy8ywCrxAox5j3fk2vh2Qg3j6hvWmzhDXAq",
  "key12": "34tVDK2Fgu156PFPw3v6mfXU451fA53aA9Z7nVyAAqtdxhBWoJvywkAWbEjXiQreYUG7w4ZChLZ7R8Svwp6ZMayP",
  "key13": "3U7ijPU9TqoccFvRdRCDJo7Rx17F5zgPMGTSgYrSDrMiUZ76YccYQQMEi4NLskPUmpMZxn6UzBUn8oYng7QQFuph",
  "key14": "jogZ8NYkuHqoGXPLpHVJ8vkEvFnN2y9vRBs249gwgzcnWAgnj7UzjSiVFmAj2aFqepNiDEcyT1ASvHDT3ofxRWs",
  "key15": "4aUwJmMNoErXeszSaXppNSzRoPFLXs97NL9eryJvLoVWfNJdMAnhu7z9X19fCHWJZuiU7Ctb5SMAwRyoVUTqHhY7",
  "key16": "35NJNuTgX7sNUgrW56gF7ssT9tjvjxWRLcQgRd3BokLNcCuRXrcL42LQ4BgyR1q4LbU6x31FMxucKxwQj3VU4R7Y",
  "key17": "3B8JhuirD4uBkCrEybuuDSDcVFh2fT4C5e4EZrHkWdE581wPE42xmjPGUgSWuRBT8SJVec8gJQQjayxSrtcBnuwP",
  "key18": "3iLAqWco57KjLMVbLDKWroY457EhDJ1haVeS8akMEKzd6ehDWaXhQXjun9U6nKTkd1d7HLUdoGhCLyQ5WpYXXeY6",
  "key19": "gCbb3nfGPdrdDQv3BhVebRoLCXpCxNRKaAb8uZ6CzpdGQevakQdRsjA6fZUfK8Su1Zp5tRVbJaTCPemC5jJp7eR",
  "key20": "5GPSGsYksFPSeb4pLMFxTZ5hvA38z4JFfT1k4J7U3YmZrXYe1gyTvmQgxDf7KbvekBVFdnh4GFdXgtSB8vzuYbFu",
  "key21": "gw8hA2iZ7RQmLUA7z82rPQeW1Y2gLxDgd6YzZpFqNDiB7U5q6teS3SLM4fJsyxZtneSagfA4ht9zarScTLkDHk4",
  "key22": "2tfA6tLkUx9315FDdP2kbvHM7sGEjDjcyuapv6kZZfotNsVfg2vrUMSTYrTVtRWL18Lu4vLWhsjdx9bU3Pr7u1Jb",
  "key23": "3LdA151rwN1obg3uNw8XS2BGN8rXakXX64ysiLpqiGdfmdGV2KQ9PpsraKwjx3ypnRDCNsd488f5L2ZngFSAoK7e",
  "key24": "3VzMEGpanqgWPtdX3AJNwLD6jnp4wcUeavRnbZNU2T8es4oyS7feVvreaDCjwFyT524ZR36CrjPrfibjvvUr3SoS",
  "key25": "5mbPpxgjWBcpbfNoNjwPcLRkJmF34sZQnKg6mbi5R1uLCzkuDZKdCTHEXBj45yFncekvpXj7faiterBfeYxWoQxR",
  "key26": "34CEipp1Hf4MjXe9W3eKVtQncGd5ZYNY1nEtR7Yq7DfYpcHzZjLG2uKFgXkauGXwruLpQGHfWsRf4mvTST4eGn64",
  "key27": "4GQcHM9vDMUCDLZrv3KUjVW5Chftzpgo1aqu8Z2VrkLgKQGEZ1UZ5rbaqQjJQMFXPi9EYkd1j4TWpYi5W6hAMaAd",
  "key28": "4dWkDm18ih7nkARUyvVfg7vwxPDhKkkjtwx6v2fuXdmyzPMba3ioHCnP3uXi4HtUDbk8s9UPGtXZxx3P4KsXLsT5",
  "key29": "2QvAmN9AJmbd2yNzf6JwM9d2j4mDk9kq7dMVfVAHEmJaV1dMevbAxenVQoQBsU15A6VDw35YjyyA26K5MQjGeUYV",
  "key30": "3N8sw5WnEALZ6MHHrhkjfRVQhvbRf7bvf4XTeFpaKdzBMY7euJxhG2bKAasokqq9hKKEVLLoJz8BsHvowQD2dAU5",
  "key31": "4WHdDuM5G2tVRmCiWfYYUPPvmj9Ri5aTy52bC28KvucyU6UU7f8hfv3VeeV1o4zUAT5JWDnFjLaBatDRe88F3Lwq",
  "key32": "2kPaBcGFQQtwv1s2nHirjzGy9cauS5HzqysF1AeBLTurbPHSuK2j9j4vnqzW2WxLkfB8rN9GMrDCTEWuJsVDaNxe",
  "key33": "42Ac9qH4HNC8uB15hipwTeRys8uKYF3pkynMVooEQH4VgZaxQM4m5K7pUdLR8D9CUMWeBucso77UW87coQ2SwEQQ",
  "key34": "4KY2FKWrZevAWQf9LctFYS1vpPW8HR4BFd7FizFNmaQErdTiSVSuLyQR8oA79NJgcTXnJ8YzC5zouQB2c2oTAr9Z",
  "key35": "2uRSCNUzMToFReysPcXSGiVohgcgyTvcNtB9CTGa5iv6TaeSgVBvYTcek3jdEN7opo3eBVwHcQD4xn3xAmox45vj",
  "key36": "2dMrAyXgm5DLdz6bj6QM7c6jUHHZbW4grGTsoVmJp9FLZtWZseNmBdGNG4L2wvGjw5CQDuhpYUjBuzujbUf4DpzY",
  "key37": "2dQE28zimfuonbyBAyx3AbUaQ1fmNdujNVwREeUcXFotqY3a7XxLB3SdXkw9vbZFFGh31y89nUeV63SUgUtnEPJy",
  "key38": "53g3y7W2Md1ze9saL8zXyfLcz7Mxavwp5Dggf8yWnnG98Cerpdkm5C952WLAQ28RcAhQYA7EhWj6YMwF7b94zxTL",
  "key39": "3GGL2K3Dzq83WbfZsoJfrYFBVABGApi4UcbB6d3EEcBR9TmEhRzH4V9RkTWaH16mDQjwAQoXeREzxzoiL8GcpCeo",
  "key40": "4TDXsuvAQbzqsEKrX14MQUVCLbykgGUBnZeiTbAzTDk3HJ7GfANwu3tbAWmXkEi5d752bGhhaUBygnQfiow2SwxT",
  "key41": "2UcUN9xTdDGnEa6vvTkhujF9BU5wNKhYomHnJJQ9YgTUYmiH5q7R85mXnRdBUVXyvx2LeQVBEVm4m1mFRnKeQRHy",
  "key42": "5PpUxeF4CRtSUrnS1Nms33oK5BqTteZBxwYJBtse4dUsMBQV6xwap7Egjywwhog6u426bLbhZNbF3Qx95UDEq6fc",
  "key43": "4Sppw6JU79M9QS4B5YbwrWQuh9PNGMHH84PsCppxkxDQHcGta9PZ16M2EZV5bLZM8WKYeMsTS671v5d69efR7Vrc",
  "key44": "5cSjP4REyDVhtpHLA9G8amZbCiJpKa3ZfVJcFS6bEeumzMM4jENfLf2eYMop8D6Dzmkj98dKGV3SzHfrRYr4FFxY",
  "key45": "2orizvp7LhxCtDgYgHPLZTeoJDyxvkVDsUJKTPdQJLgmsLoS6igSvFwo7141m242Fk9xvmZwHFvNqUytntw783Et"
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
