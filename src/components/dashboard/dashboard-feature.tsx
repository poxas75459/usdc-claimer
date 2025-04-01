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
    "4GauCvaEoALWWb1W8dyvQqBMfgerT2GPuzNtmYVApvFgcnMWfE2cwDrZ6othFHs2VbS49onuWPGEktHSYBfQEvQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q694WM1tE52nvKFhpk1axFLdLEjpxgjjxy6oHWTGCyWmaTh32hcCevvcnZpxcVaWBvRcBbyxdrRycX44d2BJzWN",
  "key1": "46qZ6XArxNcExtSM4sC35JY3izKpi8yWwiUBvu9FmH6Jiph6akeG6Laonr7Lmb3XUdD1WFVMxUSJCodS9okjGFru",
  "key2": "46RYw4kRNqVgPHiZHKxGzJFi9mKWbwaTUnsJn5A4VvmovQJijHMfYfyizUjnLWtxMR39T1J2y8skcnM5KPm5w22a",
  "key3": "5A2m4nkyUqrX77pM5JVkDXTyLe3P9KiPXyz6waK7j3cVBRS2PZkXQ4qaedHvAxbwsHPKTkbNjhWP3xLm6euUD5YF",
  "key4": "39LRCUfDQVDW1auLsTXtvYDqmCB9iyqsvdnSrhb3p2JnYAUq2mweoyuZwtd8gMGBmAtEno9sUxoRSaDg9XQwyaKd",
  "key5": "2YoQ5MyteAnGsT5Bm55KRhrr7zb6PV6RQbNffMyPJZ6sorGeSuMmqAEhYq7pSb48Mg4sLXixi24zQqpPxtqwgvHf",
  "key6": "n6GHy5Tm1JoFZKtSSnGBr55C31bJPJL4FA3CEZx9woqdAQeE4se9dbGhyN2fz9kT2HeQpgezXAx2uZUbARGKFZq",
  "key7": "4wMRrzYEhHH4v6A5qKxj3QyJqDdamGJUAfaEuw5xfwbDn1TD2HcNcVMomZZsXW9G2sa4FpTxm4vj6wXUtZrbjmHr",
  "key8": "2b77GXg63fddwjKe92998eurJQvMXKdLLzYmqhgnSY9fiXbfMiEgF2JuGfBnZPmznMk6rDU44vJpgB3wJC5XqN7G",
  "key9": "5mXF8gcQHUFtEdkUhy3ENznmJkPUm5A6n6PMB3HdxD2opfHqGYqMPwjjeti3vDwSRzJ3DwjB1SE4YUS5npXjCiaM",
  "key10": "2ayod52tA27e6urD3QrYW5Tt6AHBx3mRQUSNJuv3fkggJX5mWrh13wQctrkP913txyyXgap9Wqi7EKBgeJm4dxhG",
  "key11": "63Vk9HMXizVZmx2RakGSYAM8PqofJffY1XnrLMA5Gg3pRBesciqNMiNzMN6Gxxk8GMX5L1i1A4BP3sb94hCLqxRR",
  "key12": "2XJCvY3jkoXmRj9MgPkBThFQ8ZUtDJ59vdVcUZTv7JbaF7WocrXAyCyay4MafTch5o4Ax7bSbs8QgeiL9B5XcynD",
  "key13": "2wwVokjioitmhEUjF6wPn3ZGtFNESkZ99dW1aQukhdVk6pZbMwx42cwHcSrEjBdfrYCSbVaHxuHnn2zmbZDZaT4K",
  "key14": "4pxSHv25wGpcFs4nH9KzaCFt9GjuXFGRxrQLNftf3B15xQbnT4YYte6VzYrnLnEZznY7NvCABFMiAT1VARa29xGX",
  "key15": "5XoPmTdZQznp1s6FVoGwXBn4LY3vy2eL8A3cRVfkxzLxWBJr7NEcfGLibhMiPwbCd3op5Dx5DCTEe84kciKuCRaV",
  "key16": "5BzwU8o4oXJJAuKPCbPExUQsKLM6BYDHPnX1d19e9K7pR2dVskUHpBAeXcjZLivTn4Ng2r8hzJTixBd3HmNDc8rg",
  "key17": "2wPLJWyV79bJZbS5tVEG3NNRGdHeEiMBTXfnMc9eqbJLaQGQoNWgqnQAxkem3kaLubrkWkDRkbAkmHPkRmn6oqnG",
  "key18": "eke9m6cmgXpKi5cPCLJSaLbqSPUJWyvno3vNBJowSa6UtTXSNiTmaBxEbQNAn3F9NWaHJKCQbCUgtbGRakXWGZg",
  "key19": "FEThXEi4nXqRoDZ8hGqfF3usykd9XeiuUz12MPHqzNJcatthnA7CNEicyrbYi77eyuNvdnHYDFm8MqAaU2ogRyQ",
  "key20": "9jKra1R3eGcmhPUznzCPQ9iurkYwPHEqWT56hziyTJG1KN4U3F4mKxtXTrP3Atz6SxCZ66bczG9UgYGSLM16Snc",
  "key21": "DzZboTWf8XXrN7yZqRqtHmXgs7rsnhXQrM16rXKCnfvLtHyotCedzndHWqN7PU6g5DBeTLbKSc5gZdhbgtDeDaU",
  "key22": "5PWGeGd8EUcrdUudSqhV51L3HxYb7ScYW9VuMcmon9FR8j2kWKg6BoeCN33WaGBzXCsHq3LxqwqhZ1RPedot2Xhf",
  "key23": "5sqFjXzJdVpf3pqQ7qFZnEeJGEya5Kkinv7rw7C9o7r1RMMdeV52ZBRa7PvagTeKPYFQqZVkcxMRoChMBmSKFohs",
  "key24": "3TGJAPNKcVUhyqREh1jA4v9oW7ytJaxyf58kNHZC8toZMK5Yhfq8cNcrcmWWknwj92KF5xmToWJftj6GknWR88mk",
  "key25": "2K57JCFDiPD1PAeH3sKSneLYb4koTQzAHkxYgdcphd21trKuqkVB79ZtbX8vVDN5wT8zEqhVH1sESHACWiGsnsRL",
  "key26": "4DQxNDQw3nXNFSYqXXF7K9YUgEEgUbNNxhgY9NU7QWECFa8fj4o9oeFYbYkL4FipuvRdbfFvHfyrH6D7jypxBdbw",
  "key27": "36qy8at4p5zV9usPekr2NQDA9se4jjfZFKMvZQseaeDPaF9K5PesgcYyZkz5rtrsveTaciKJMc2LzvUcjkYmkRGc",
  "key28": "5wdozyQhegttScvi1tjLnwJC1raeFCBZyj9Qhr6riS2i2yYeM5aJBqabEgGsJWEhPGKsNxz3HSsQRez5KkmHp55x",
  "key29": "5digSDQWiUU6z4JKHi6HU9sdhxujp6zv9HjRByyMje3oUm3ZptUL5aYYvE1aK8TW3zdnnR6CdEYFFtqQhATXks4i",
  "key30": "JAGrBJfP2ed9AdH9AYDAK1qSBL3RvFNMGSznPxNWpMQoDffdgx4DjojUkABYMFwuG4X3nSkaCMgpYSE4jANX1qb",
  "key31": "2rgz33Y49H6qJvJwcJiRj5VR3sTALTGBQcSjF85XZLrPjx9iwaSZybzqJdUpyE8DmnFCFrg764gTneUwT2mHYVaa",
  "key32": "2pRMSdDHehamGr3RwZFVx7PUL5Nnut78BJQKMff5HvXfvL4n2gNhK61STRamfi3ghK3H3n4KEBe2bALm27KH9eUz",
  "key33": "51irBWbNjBE2wCGmCwsdi25mMQvcKnh4vRDtgTkWfFFn3WYaYHU8PtHoFDHD3ap5m2uRnnQG664QT8Lx1NPN8NHL",
  "key34": "3JxCsoZ2jWSfbE6yMt9ohtUjhcJZvoY4RaHA32vBysZL9sDXSfBk5KXf6nipCbmKkkwtWcwAsSqRMYLrRqKR73vV",
  "key35": "63FDHBWvpzCxDKN61kpTMLTaTWX5YaL4abrjWZAMQryJfX8vSeWdMUZVaRVkqyBj7RAvMrTa6Ak7AM8PyY9SSfZ4",
  "key36": "45MbHt26ZR243Cu417ZYT5fC7k7qfsEPWZquk3HVsgUSftFR2SgZeDLtz9S8gKTntK6Hj4jXdW3k3qB15XvfUbPZ",
  "key37": "4C8EjxK1emDjYVFC3cm73vrqRnBpUP8rEmHUc1EeAZAMN6Tz86LYMGp2t5PbNtdnZQXJAYoNgvJV4F2ySHZvreMV",
  "key38": "ymLLTJ6ymZ2v7TEhuWSJUza32NXxRNWT1y5gvo6tvr8zTU3eqahgwYz2iN8bvgx3Nf7bbGUF3GPWGdnRZ8XT1SB"
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
