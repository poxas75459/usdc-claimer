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
    "58wKRRTvHZBxEKL269gMGMENDzFnupT4VFG8sF4vs1wibrrHdgZ3DetRTjZi11AgZXLzXUwDXhnefXCXWCryxBPx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55c6fFWBbtTVoFYKXLiEz5paBgfsbRzN9cfioZrzs4nWqY9wHLogrMEp7j1BsYwRH6tec4VtD89xT17btDmJF88g",
  "key1": "71wBzg5BjRciCZcfgYvmAvggisY3ZimSn4fefCoaUjHFkrVkomugPMG6W6kiA5Qp1G35XnBRJVkNzMTPWDq84ko",
  "key2": "3pHfwhch6zMFUYtrnfmRdQopBaaToaF6DTNmeG7ZT9phGS83tYf9XM2BjPpksxWmK19KmVdU4kGNdrN9TGa51cWj",
  "key3": "26SWsrMecGX1Gx8y7yLnRVAFPrVeqG1xAHYaxC4qHduEHnZnjG17QoTn7piaBpe2s6cM5uYQoBDVDR84yVa8ws37",
  "key4": "3ftHFnZCMyFYVNebUrttQvuMCqnptfNPviRAnEgR8ZFHNzEWkCA9VcdJQHbEP9bYTGF85qoi1aDSB4SFbE9F1hH1",
  "key5": "56fffbyAPer9w8UiEATsEnaXrWJtgZWRcrbwYaNxChRQAeUvVMsk6biKNhzqmCUk3pzWtXT9cfGrLYMTF1F9jmBr",
  "key6": "3Up3xSFL5Xt3NRx8XFqPKYAY6Gr58j9Krck4XJrETFNRdwdSVWwRV4ypphaFp3xG755X1TronE9NBakNVsSJrLR2",
  "key7": "2C6yBVrchViaVb39UzYWbb3TzWgb7BRmDbDB3jqFZUPGP4SqPNrbnmQw1QhXkhwXSVmUfbCBmUmAUV7qaCfSrBHP",
  "key8": "Ft3m6BP5ebB8QtqSXcpVuqa2H8xrZADYXfhFqiLFnjVBobgeVxo6c4enug3rSo7MVM4VZNKG1L1KL6VCTvkEDAQ",
  "key9": "5RUUe2oyEvAwVb1zimkp9upf1PaVrUpLj7Ysx938hgYZa2UH6ZVC5mPZBv9qr6yxtByx8Yco6VRt5oV4Hc9NrJmQ",
  "key10": "5JcfiitBUdTCazCz9qkTsGm17cmYunzdP6yAtiPZtkJ2eESdxUJfSdtxZT6DHeouyHgZTEw76KMZhb6WM4VxnZsM",
  "key11": "5eeJDeNRohLEJukZ89hVpG7EbTdiSndb2BxY3sWFQT4GwZqGoNipf7mhJsPCJ52N4G1s1aGLYY5nMQBuxUiXGZzW",
  "key12": "13pa95DPH7hH1Fivd6nEVnFby5aWfo6uPiCntk3QRPhAswTUK4k7qWfv5XAqNYdhG1VcTmoeYtEpfaCMFebh4zs",
  "key13": "XpLcz1kxadQ1jSnrat519Qi4rFCPRUbeeRWMaZKPCMZeYnqoP1dAu1aWwsXbvVh7hsFdW49QZKu8TXj8mwfEH7H",
  "key14": "3Prg2AfeRGdqUiQy4rJhhEdjd3MG6f36hUCTwL4mK9jyeSqj2o2KD8jkyuoKXAi32jz497TNwTViomYcbTquL9sv",
  "key15": "5HifJ62ZWVddG9P77buPcmddZvGVx82mrCCVmGzpSfM47faiXsFS43CZjvfCZBXrdBQcJ4PQpUvmdJCDFtRcPdFF",
  "key16": "5BsJyXs6dGLsMcNAzsQQCsWL6YjcJDv6dBiPgCUZKmLm7qVtR1sWX689agqr82tq3jL13G9oRBiVYdKaeSrjKvjz",
  "key17": "y6kFQ5hhkdZUHMcZstNEsG1WmP4WxQBTtMmC1gfLK6Uq6R6Psd4kMS35KYZZotEY9yEo2TZjhKnCQANrnyXaAYe",
  "key18": "uKp5AEnM2LpjEny8RVhjJEz8AGqixD4ATP5Hw2eKJskZtxU2GT8XX1rh5fYfwcpyb7Fu8wZ67vwnnv7soqNvdrR",
  "key19": "4YU32nbJHcUMmxxYUwLfYaBiPx78mr1mk2DVcLQZzFCf5ZbfJ6q2nAafPcjNYiYw2xkMUTp7RfEzNNptmDdKE3SM",
  "key20": "4L5mcACNy2QVmwEbUHWCMztptkSbrg19yg4yH6cr5tpnShYXX5sWQVgGksAx2vYxEqAFwW8UmeJoU72ARop8XN1D",
  "key21": "C5gixefKUyDt6f9LqqEMoEkh41aeUNGVUrq84T3yShnSs59awruUn2JuJs8hiRxhVmY46jyVmrQVdvqdfAwx6gJ",
  "key22": "5gVMU64JdmDXoVACaVFacfVeBRHXYCg4qbHffUcY9bifc6TMMbrzcy8kRVH2C3gtTBvS1PZAu4KsCPxm83WP6N2q",
  "key23": "44ThhWwQX8yNpEYYm6rQyrFxpcx9wev4qP31k2vvNwH97rK1Zw2vjrN4Lhh2MFtYqCoRhgV9of9LLso1hpJmmohs",
  "key24": "4buGTenooa2ipjLzkqf6kjxXZwBNVc3bjL1vpXXzUpqyWpMcWcrDC8iRrSnxnHpPkBzPem4QM9ukdRjNsJi31xrm",
  "key25": "5Zfivf2AiRMSbDU1vugW3K4ANdHam3t9Ch4qCptkmZScsrWaoHxVUhJh113jiU5cRSHT1an2b8m2aauwydZyUd9h",
  "key26": "17Sz6cDBan1mefXSPgh7RbWJqmJGGg3aYSJQeSaWhdZwbFd86b2dzk1oEKSuz7zhUfTf2MZCt3FEmW4CNumrLJw",
  "key27": "44tvKRWCT8w14orQFGt61YWkSSPiZ9v2AY1ggCKYHQwt2c2hSZVJwSeKQMN9sPS13ZsyGx9mWmrqkWJRbF7z9XKL",
  "key28": "oGMUGQ2yPMr3QiLeWENkurP3BFMwQTmAQHkuFJPhjXo9WSZmDvKYRLAu2y3Bx7GHir9kCMBePe5aYLNe5x1Zqwr",
  "key29": "kFWbHs1VcKMp73dnQtxGw14cDUeue3UiWYo7Y3tKZiPzqAC4X6hi6JLXqYufaGnnEakQhnYzugjQPLgYwxZgZny",
  "key30": "2aL3PjPM2m7KME1HGoWXrDSiEch1qYermcCmZ1yhxmUjeXdQwLMNeJuX3eNY5pefpPGh3dmgwKuap4q4C5ArNvM3",
  "key31": "TNSszjfhg6hXDg8osGnbcKBDCHAXusZNqFtjB7M1QNt3YeLNarZ6ExL3TA6XYS1dPuhvwdgQa5FD9w5NbMQKR31",
  "key32": "uGm5s2ssgPsbVm63HXHb6Pnt4NRAmYvcQzYd2cNUehaXBsDYJbmZ2LQkPZYbYgNi6bUZcQ321v66adWtRLdeDSv",
  "key33": "NDQpcnKgu81Z4tfL3zQpyoVfjMJ5nbfamJ93DABfVjv7JSPRr9yqjQuWH6Db8HzDyDcLTKmaJAguowmPxr4BqoK",
  "key34": "nBGXTVY2HHiPKAnoB16mr1zGnwhYbsmQDK3sVPqdRupMCZLX4WjzEzQcy29JUqbadrj9pQXhaGVZFHu8ieAfrxL",
  "key35": "2DJbNxogJzJBUhA7d314XZyZzVeQGtCgBkJwPgawMREoFRCaKv98XAzBGAST34NhgtY3Rsk5fFTvZQR5L931v5Nq",
  "key36": "5JmNUXT5XPf3JGpTxychkeN9SnxRQhpsKxPLuqKhST13xZmJSww2xrvsH3pKddZFBBSfKNJCd1K9yvVep4JVrCtJ",
  "key37": "4QEFijkwq61ZpQdbkFEVsVwb2yws3UQcMEjTrMWHH2BJrb4zU4Lw3Wp1YNkRJXJCNfHfifcgRrobRMECW1y8wzgd",
  "key38": "xznU7pMNgov98eZBtJMP77QyfzvpCqV9W6UJJMtcbdzBnXbN93x7FMLUVNXy8xHBJ9AdVqSZMzyY5mtqc9k2rX4",
  "key39": "5b9x69h7pyrgWe9LKizNTQKh9nhqJLKrrev36sSqJL1uc2kLP1kfVgcaUBswhww1oC5vcq86Z1q8R2B5nGD8Tgts",
  "key40": "2ziaDrhLQB1fkaFjx8s7rEKLtDh9AwdRkDBJcqGUg2n5KfmXUoPLM6ituSdDPFaySjJw3ngDT4fSRkjsj9k9r9uY",
  "key41": "5wFYMFARUMx8ctqWWeYynCAMZtxzR2jh1Qm2R2kVpXCwzdMCNwHnxKCPr5ra2y2Qghd2ryDfk4AGwaB7UogjiLe6",
  "key42": "JCy5xWq16fp7tpYV2m4NXnGUrrwqbRRN4SXVEMfnPx8cAtc2FpESjBqHrMUUHLhDn9rm63qAF6fVWN7pKDq7GLx",
  "key43": "QwA29BGo2on9ujrESrT5mdji7yKQmy9H4DJ53tMhGoZaYqUv2SVfNUjZsvU9DCburqDnusJ9bRKeDva7T4dP1JF"
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
