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
    "5q6reN7hRsXEzaUCXQpeq2ymvsSrP4R83SC1TWfdrsiPQDTEcknA8hiJCz9zafWxC2XjNyyPqFAmdyAXyzvGb1qL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YvmuVYhktcZqcUovwrSJzFRZn1deDz75MWAdPEqZxcMnHe6YH6btV4fMaQuiNY9WtQxRiAUfpBDK2vakDhW8vwE",
  "key1": "3PAMfs1FbxfdUaF4zSEVStwFBL6dVkh5VqrFEgbLMxc6osxR8VWh98ZwExjy9HjY1F68DTCQRH28eEeEfBBL44bL",
  "key2": "5fJuSmtfbepVd8rQLvaZTMqnpkmWpqciTfvoGiB2keeRovoQYuvLfXuKygdcu7kmmwquFcLKY4aaAMJCLVThuGw4",
  "key3": "5j23Byp9mZuVQT7DxW4aPyzNVnatQDj4GSJ2Y39fhEa84E1eHNkjJpZot64gjG4Z1vaeXsfYMKE98vdFA39V2NbE",
  "key4": "4JNumRq2rdBVR8n1moFzYA9zfMVS3VyMsEctCGaLyY1ibVPvQFUGrya8U94K7TuT6r2AYMAQxp3HXCwVbLZ2YbwB",
  "key5": "2Vpi2UQ3RBzN6keuC4kUM4s9SHWc9EjCCvLBHiKPvigfuWLs8kKyry51dbn3EUoTMnxUwRWtNjXyJRLVFiS3ojqW",
  "key6": "2MgtRfhmWL8Ejd4UvrsAtVTkiwWSxsjsjAvg6AMGxTicJyYmHpjZnXuFhKzu7FmjRJqDhfK24po2XixT6CBoFbzL",
  "key7": "3JVoMUkDxeoYRrqbZHFWyPYyGqd2sucPtZ6WhZrRfFkKEybHLFthEqCbe4xngSH8hDLgUMdRTXzPFMDWeXGYbDhL",
  "key8": "3oqn7hbTVKbF54ynApuuKp1aL3VC5ypUG9pygR1iRmQSgdfcN8XbjucKDLKaZvNnwdpQMYv3ebmXQ3vK6zJhm9dw",
  "key9": "4vnj18k83Xj6oAUTpK98oJAh3AtQhydduKheaiEEYHJbCpiFhq24yLxWxXktTT3nxB81AK4UFZGH81efQTxrQEje",
  "key10": "CiGAK3BqqQngo98YhStCMHxJuDFKSQwieXwQfz6aTacVBDK22YD6Uuadvg1hKG57q5tiH2wqXtKPvvZP5QcEAdX",
  "key11": "h25DvBxJqtMU5qKQAH4r5fqmTWvogEn29bavGxrpWWBNgPE7foJCGydRj3V8ozAhDWVES93vkn6jb5Zd5UaryF2",
  "key12": "4Q3BqZh7ec9XxGMdxE327ivKPs7Wuaf2oWTYRD7CdQAwdhvJv5YMuq2vCTurGitiN3XA3FAmHBitq7oixVZUFC3",
  "key13": "5nYYcEhvbAF7Szm66xu9qFAtyG3QxKykCBhW64Y9vkmDEw9yJUAzi9FYBxmxNBTq5iiZLUV4Yq8CKcF9KxqHHYbH",
  "key14": "oyv5f9TdcRF6TL1ndD4q9MdmYberfzuFT7TcpfHpULWuq3i3NQJqtM9FLwDaUih6DopuUF7mLxjxEp3LwW81HjW",
  "key15": "4QzmwRh85fKyii3yLVq5DD3VBXR8V9NyqZbtcDSHRDHCLUjmCBUWuqgDGxNrGCsY5Yvz3LkMyTYcvMVEQHC4tc6D",
  "key16": "28tYiXgFH8zh2Y7mvnpXLtTJ4w8F9fpi3dVx6TGSCJb5GzkLNJj3gfv7c8kcSo23jVbwa9FjaZ1y5kdQeCrwtQPN",
  "key17": "iPm3TMgRA5czSxED61qPkiAAHuj6mtUbrGdNah91awV4hNM2mS7DayrMeZz8scLCWTyrCasuwhPL2qoFq8BSRjc",
  "key18": "3bzD1h75LizA65RPYCaTi3rih3vaNhoM5UfEFgwuyt5HBR7PnE7c2hLRFazo8DQS3BNYd2TPcmWyQTAXjSeX6b2g",
  "key19": "2AAHYYC1qz4DzNPdzQ5Q39yXKMHuHkWzNqVmEuaRhDXg3iM1C3tWhFgYu4yuJG7C8Cro7UAiXz8HbncKiHbngeTE",
  "key20": "32mnzGQEuLr1c5ewbwdPZBi1Wvzjufhi7V2bLFZ81tQdyeVNzrmGnGfKuHi5ZHJFMvayScqYq86Q6mGAygCntqko",
  "key21": "5o9p9sc3bfEUuN7NU8CaeGgaAkjEqcCRySZuyJ3THxfeMKj4anwRrfoppSp4vj8FahRHAXtpMxLqbDepjhQLPFgg",
  "key22": "5T7pgw2S17L1HzmSg8LV9U6WzMt9LVZoSkK3dfR6bM35YjtuRAiQ7KxNJZz36ZtHSEhuZbVqF8nBfSWQm3Fy1Jn",
  "key23": "3KSsRtke8UpQVMVur9T3TkLTUTxwatF3By3Kuidf5AhWgFnVf3kWPo1YBoYhwHB2LMJ3hVzRFQcqDVd6FWBBZuQc",
  "key24": "CnL5KDhi4Z7fTeGUG5h7JYu7V85BS7TBicJ87fwgQ8nY76xX1YsFDwey9uBw1NyKdzaDDCUknieUiqARThtL2iP",
  "key25": "5WmmQdphTz9Av1UeQwCMX3Kpdh1u7sPXor3pabEtcmzELDiWRwiUpGGKePYaB245Jtoxg3sqEiDMekjEhEqTP7Jw",
  "key26": "34tKg7LaSsMzLEZdmREpAKFkLjFPQd3CoSQEUwK6iy7Bc6hm8wUEBw1PdSqV82YzzGfjCNLKzKTnjF61vLZkXCLQ",
  "key27": "43NEzvGP8kYxpszhcN6SVZaKQF6EtiES3Hvup3YK6vDeQd7kyaWZWHQGon1qeg98VLB9UVUc9zGqjdS1mrT1XBFb",
  "key28": "2ujAtepk3B2j9LKg6DY9hWZm9DKCeqPJP2KeMkUbDUdvbrParASsHCfyXcQ55QNKDnHpo665Sa9DKqQ4cZeSPdjs",
  "key29": "3axRWWy8a8rnmjudkooAogaeQYHr8PZf7usPtvjZEzREdbX9J6KNqhBfDHNu5qTi8fGyfhpME2JL2BpDHDrcfwqA",
  "key30": "5CgQYjkwrVdpKKq3HDGb44YfcAH6eGqgfvSUmto4b5jPXxDbG137XnUN97qX6ejegh2xsHnP3YetBZ4dtiPjDmf4",
  "key31": "5M4U8ANvhGbz7Ua2KGos2tuDfGyQWvDGhsUmpQjyJw4GUMasStALEouWrjKNisgYEvtYLZyd154d2DMWdfjNUv7c",
  "key32": "5jEsQwGPsd6y5F6bPg96Yick9zkstpy2e6qnBXp546joBiema5r9fQNahj1XRmRCyZHzeGiaztyKTHxqqNatsMeW",
  "key33": "3hywXapHLJ6Ahfu9N4b55cABYnR1RHD6MA4j6d8c41uk584dL6mZJTan4Gy6EDpdC6M5NdzsP1hhM8t1b6TqBH3g",
  "key34": "5NYYcGMT8pPanmJHCua7n7TF4x34fQ6Nk4j8VvLdiVoj1JE4P2dfeEUcJhYEyJhYE9KKRBAK54tc9b4o4XUx27dY",
  "key35": "5JNr1pRWeF8DvsQw1c3rg1EDxuo9HxzuT4nkNVkLk76PvunBZSQ7xHT7ppYw2D3xNvRJKwNH7pJ9QrR7wi8reyWz",
  "key36": "21VcE71Zmji11pFQUKZLxS8Wd5nUKmy8LnQsHExYT3N7bqEhdS3FyTXqSxDzizGxko72BwcgwhwWv1wvEtCNRot9",
  "key37": "5JJHuv3ppkyMjNvh1s36hPD3cqWNCNk4D7BbuhfipwrkvZ2cxMf63eusHiDmg5NLSVnmV4EgoAwaeP7xaWZTsyhS",
  "key38": "5syoAhfoodbNZ7VLrCATDKHjvJZH8D6fhu69cMFi4nQhgsjTc3GJQ5Ud1oZxwfDe7bVg56YFzLcV7N9Gxfh3wEDi",
  "key39": "5ZDsw5PnCXTfRgjT2p6dYTL2NJLh35zpmm6yTJpfsn7zFrxCf8NBoCmEvH8NtRcp37QJ8PGwKC43rFbibqxfKZP1",
  "key40": "4CYDFDEHNvZgyqpUo5YdxSdPBv92RTb5QTj9Fc5iX4EbQahPdSbnS87KeK8dtWQ14cvUo2yNtZ7CkLueh6s9HnCX",
  "key41": "2MUW54sqxaJDXhUwwjDEyi29T8Fjr6UmrVePVBBEonMNGBrbUVRfkDkbwYaWVxgLs5piGrYVFJ2jEK7NZirRYzn2",
  "key42": "4W3AyDhNvt7f9eu5HgfeGrPxAC2GGwcNWEwJsXp1VhNAMnYMhsR71NziayUvnXWadbvRQNYBqeN6WbviNkCozib",
  "key43": "4KwmJtzWi2c1ZEk7eTzYeieDvbatxXY3otP2YPhvCs3pPZMgbpCkr7Kru1cbximD169PDjs5g1wZ1KoYoPQ5kmBs"
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
