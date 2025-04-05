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
    "ribjwrjTAjT5pHPSdcYRRaJsyUe2CeNSQpzmukJPQpwuTM5AnpVzmMyrFD5v8rMxTuyXQ92LB1fsUfojrXU7zj5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c21gWLPtnPAofa5MHsJu5RqBNtt8GcLsMAaTvPNF59xUymJiUxwYyDr5gdb6JbDkddEgQEdZw246qCM6cSrSPdv",
  "key1": "4AheYTKnMYJo3VrKfRjnb818hexVp5iLyj14meNoeL2VJSY4orAfR3CiSt4PNWG26yd1X6JfzWXaGNFUf29W6FaP",
  "key2": "3LYUH9tRFpGPJwj52hVNRj1uzMrHRBt4WCeQiG7Ptf9ByLdFUnjyTGCw9D423ap69vEhU5ZwrTkcTsFH1yPkFWzu",
  "key3": "4URJ8VrS8Kddv9QRgayrqQWxF2LBpnGtzsKiQN2ri5VNv9yZ6qaPJnasnVi3YDNMBMVvMJhfXYeUTehdBQYs9oR9",
  "key4": "2SU3DQcGzgU5ASZUf4CpNZG7Syt6X5ec1h5eG5Y8bvRfmK76rWgjX2nVSeFHFpjWwWn7gCEEpbvrGXmkRdBcQQEm",
  "key5": "5UgZQUgHPaQZUgUv3sh9nFcM7A89v5jm7aLcPy4D4Ub27C1iK5XnzHdwyTNbowaNWJijDDDfiSsBD5PheDwhFx1c",
  "key6": "2CL4R9WKvHgwuQns3UFSovC1M1Nnc47Cuygid6Fu2mcMwj4CxqGt6BSQ3EvZoWbpmeg7UWv7PMgPEV5wMHM2jTUd",
  "key7": "3WS1nCXEdm2FX6WFMgnFTgxD3nFJtwvdSNBwEdRWdZEY61q8u1aPDT5dziWnLLrqxRPv5Bf3kqiGoCNiyzUDnxof",
  "key8": "3htU7CSsEQu3ZnT6y9VpsUu5678oTwtRbsVuQ7sCfTjQrvWqq64JB49FBJgGE1y5PkxKrSXsg8muExFsienT2amv",
  "key9": "4u3F5DreUQLjDQ4w29VQpGpb8cWZyhuPx2wLFpMMC4YsWsESHGA7CmaoxuKEofrfLDNHCiuEz9VkFPecr1UVMfhS",
  "key10": "3cp5wVFomYwNmbFHoKh92rwe82ivCdfFhyoWVox61cwJyPEsYdRDvGzDX1v2VsFwGLaVdbuXboX24UqjBuq8N8DG",
  "key11": "2pGjMqbVQuGwNW1V2bxSvRPDUESJ9gfcEfVDMNSdwZx8x8JtHak2MsuVnjFNhqTo3qCXEK6XRgmywnBEjvQct3MH",
  "key12": "4MiMorxpdUuB4TKuSAhmPUaC6V5Gzq9Js4W4Vu3g88kuP7yEHtW62o18AF7YYxsPDRprMEQhK9yrBwhfdx9hDijy",
  "key13": "3LwKKNDoBp6nUkAL3C7qhnL8EaKJTnVme7nTNqwpPJwU8eUoWBAyPTTgicarrorPEUzCiiHQNGZfPgxEnMT6WC53",
  "key14": "5dFxQbWCs9aCAje9p988zZNWvNbRvQh3RoQUwXRFd2CqnsD2GtJq4995k22Kpi2QhMJirewMQsawQVUiE3ZJGBHV",
  "key15": "5jFef9CiF2niey1MF5kS15USeUqZGjUZAiAj8pg27TF2DpCe3hU6Yo7bZy3X3nY3WVxRLcSWKQjcTJpw2ggCUGpY",
  "key16": "4TNug9ZRmNWfdK51BGag2cPSuf71FGf3HP4b8JPNkjVzDNj9pAsGeuokxDqiP2DFRVywtPXzesFCtYpeN7RjpJxP",
  "key17": "gvvtta13CJxFxKFVnhnGD9czwUo6WyQ5rzXVvaErmjJ5BHXw7qU5qsdfLpmDbctYpZ12KzZnG1h4Y11dvkGsqTA",
  "key18": "52hEELP4HzdbVT3EK8AVWtdDt5GZFo8iajPQdQi7DhK24sXHYoYjDVHPjunzXKFYNKyqXF5Hbpo9pvvC9u42r2UN",
  "key19": "2q4temwQjsFvraNB8ijD3T4iMQAcnRMHgRDf2S47aeNN8DPhfqGBqdyz6stG1xAH9iu2EGXyJoQY3VWRqgocREVb",
  "key20": "5aLhmSXSnQLUhVq9sbDahirAtEuwEZf3unSZGTfMF95VT2nnCDESWHVW4Pe5Exa8Z2qsQ2mMqRwqXXQs7gGgJyLT",
  "key21": "4KfqrkZCabDQUhcJsx55CjGsDvKgQWvpCC739GdYXA5p8qHEeL3HTXMoGEArw358hBN48woRJoPZQEY7T1CBKALx",
  "key22": "2h4MC4JMybai7Tdq5gpDbfBNtp2yi3GXQcKPq6syUpyNEV1sK49ziLLXTu7vMfeYiCM77TmvNA2v1NQLdgaXRjPn",
  "key23": "mvFtwHY4jMrPX3h1cKC2LzVpDN1FVfuts3RKTG8EEFLfcHxWFfCFSEUCnfipemUAJ1bMx9DYnDNA135gBqxUoaq",
  "key24": "4Ju3fPdHZ6mZb8gpgzRtcLM4ooa8PMNsDkusKGHj73yT2S9JYWRa1Urky666D1rSEFpJVaDrYX81cRGE91MAwcsc",
  "key25": "3CN9GRZcbJrZDAbYbfz4tnsSJPXAgydRn3jyDYfG7R6ZuRiGEevuKcv3K9Jf8suW8tXi9CCTzoB2HeAad2aMppz7",
  "key26": "2ombq469NWGFZSPfAqMgm3xoCiUV2ZNh9DjnkyDdXQygEqRrUW1VXccVH6MJzTYk5skysFhYtbnt59Ss4cmECNgP",
  "key27": "XTfJm6s8ZZxKNHUcUsspBBWwG6g767qfLgwjxNNcNaVrWS1jGvVEJFRwUJHwH5snKcjceC2hKJBZqHEd33jRa8D",
  "key28": "4KSgm6znX2qdEUo8mf89JZpukxxxVfKu19b7MA3YHF8uzGNSahhyaoceeiMHnq8dA4QUt3jRUoXCYucnygLpoPG3",
  "key29": "PM67SEFiKfg1SE5RpWtEUhXPhLXhc6g27pXSYngtnTT7bTUycKAMCBKuagZ2MKLXBPacXyGijmqkVU3xrhKBVKY",
  "key30": "5F7GQuWbSgpJ2tS4jS2HAsRcGLaxmwyb9zhtwrtX6aPRKYPcdYhfVQnZiWGXNXxXV9LCjQHyu8AJq9SKpNS6VwMD",
  "key31": "4DGd12B4712WPiTyTZth3uLK48Ak3KLSYi1F8cdXfmLmGzKFy2gRLnPLwPmdy6RS9RKsGKf5Twe42aeMq4c4etXr",
  "key32": "63LzhF7NRT1jrgAqGxRcAh98WrVDG2NHrBkTjjHTjgdB2mMWCHVoZF17D5u3vzHTCjjnQzKgZBXkwChqaaYKPvmm",
  "key33": "pwy97hXanrsx8DafDQTsWjhawebcJ2JhqtpthnNPmY8Q7LMwpo2fVpzrzfQfUVH8PYFx6hMWWZoD7hH5x3sFXfR",
  "key34": "4RYgGzCNWtnNCU3uQfs7CbpyUu8QiY4LN2LrCa3JrhadCjeR5df8DvCsQGj7Mw3K2ttFfpjc5THukTWd1Tk4VLd6",
  "key35": "877pFPszKkcPfWfWXwRwhj4w1nFv9QjXLbLMJ1zMkKTpcFknzYyiTqrzLqBsdJorovj8UEKjvUxMy5wUJeCZakk",
  "key36": "4iyY7zyAsv5ygAbg2qTQi7JYLL8w55SXzi9oKChEHfzzJ6NvKT5fs2YHxqbC5qhhhDZAPZVVAAjytnUro4LXKSg4",
  "key37": "3kERfUNRet7f1dAmkgzzSEcpkrGyYdMqAEgLvF3UVvcM2sQhFJGsGwVtYme72i6hbUSDBRjCduofwiGHnN2KKtDz",
  "key38": "2qeUM9h64bwmLxcV6qxDEkf6cCAf19yRd8ZgDaGXTNomg1bYz38GpE5uWYeFJaoTsEqUQKSAAn5tcDBYRPiGTFcg",
  "key39": "3XoYmKN8EwTKEHfX2htKP8SaZiPjVJdjLARpe3xG7mNVmgMKaZASwVJ6Ys6otcVMttDLvWnpDTSctU98Ln255kcM",
  "key40": "VWSs8db2sACbB58uY7PEyVn5AiHQdnooLWiLRukpvGNEPi8QB8TND8qC6SKxCDFZCjsaYWnBkRQiNp4EHHJAmdz",
  "key41": "4bH9QpTZjzUp8SEDDUviFDrt3qfr6fQmhFQKxJ5XjcVcHkUzcindtYZcaDeGtyzc2CR1Eaeg7TKKwaxPAbCbMCpX",
  "key42": "3aB3Psp6B8nU9R6EbFrLnHWYMQ8wp5yQuVcdgBz1cPVegMmKbx1jdeQ7Ye1DztFR296KWdEAHJBf5M7HGQEAb52B",
  "key43": "3BtryonfwcBeFjxuTEedGSSNvYCKinafVcctWXb8Zc5FTeZhMgyJ9iCC9DhcLP9XF3GncS8KQGQHp3H1jf92WTa3",
  "key44": "4zkbHCR8F4m9ENSyc2Nxi6ZnLn1Z641D9THkwMYq4WbDfTippTHLSYNYHErasTL5PqfewBDZW4n3TJGcdkXRdczN",
  "key45": "2TbNxdsgtU1PpZQDE9tHXbKBB7HViTepL8tjeHJB9PLBoWHt68pNkqmviQeWLhY6hJgNbJVCqQz7tsGpe6bKb3dV",
  "key46": "3ejkA9zBnr9BC8NnmEqHKzsigP63scxENrSFkTqN5y33es4f4J4h91wXXh4PzrdFpHopRHXt2Bj53E3GcHAuQEUJ",
  "key47": "3ukLWakh6fZGfcxTWXwJzQAS8VyLVNUaHdbhmKBBi76DmGBhdGrueAJpcBAW5XxbgqxktDrj3NBgtRiHUZCxsCSe",
  "key48": "5LnEXYeAVNBYjPpYjSFsPnZNaoVCnYAs2H8msjEm7N97hEcPYzKcfy2ZRmF2KqZVcndkYNDkr6L8iXhFpVwVHmKF",
  "key49": "5tAJLuZ1GYt21fg4UsDReXK1hCcWMnvQgEqnMbJfkjGYLBMpNMUaaEfCvvYyav8zcJtxeJWeMYd8riapRJLjuVq6"
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
