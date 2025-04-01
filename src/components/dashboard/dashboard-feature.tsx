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
    "31iQnnQTwiz9Aq96ENoP1wi6yPUSCFqgRoVNUHRU2S217L6eRJe7VdzA1k4BbjDkUirQtxSFw2r9fhvUJS3HQzmp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35ScMEvQbvq7hRxUKBpXfuEwV5BaVXtsodeZZsc3YKdxr1vsb9z3jrsCmBxdAZWMF2SMJesJ1T83SAq4oUMe9Rpg",
  "key1": "2XQh8sHwJqT1U7K92YqXGVR9AhYjB91qoF6RCDdwhbq5fm8ue383ELLA4Q38ohxEyx3XVKVxgZ8tVcfuhkxgJZVh",
  "key2": "4sGzW1MwawB1zppsaCziBotvFu27rVJgNDChcG6JT4nhPETpW6Wb8EwmDZUSAmPvwyN5XS4c6BjPtWssumJxCRKA",
  "key3": "5m5p8doBbSxTLgQ8zWJaKKznugsNFbbw9JPoh2oEm9Uyh9HqkhrL2nfAoMgFQGdFDj1Tem5S3WnUS3S3ZSUX4cRJ",
  "key4": "4LXkT25jR5trCk8hkgjyGpJZsztZ6gEL17taMAXumVrMAKwYgzbpnnHWrdSWhQ9hVDkgSpjiCH7YnM1vXePJhk7U",
  "key5": "3tD9QYPdzYPuNyAd4jVEvTd4DfK2jAe6thueBB3cBnoEJBPqSv4Q2DAv4qb76rKK7Dbaw3oQ6ozZSufRZgMBJaj3",
  "key6": "62FA5ugtr1S8VsRbzcMkUXfcF7HtrhXEF9aerLFmzgzYbb9sj7zbZ2WWyzCH9hfKuUqanTdw4oFz6NUeMP8JScYL",
  "key7": "53xaPfBj3zvTwyJZ95VXfPEFfHkLhickVH22AaUPtCtNYbMsq7DfzYncNfSMmMQ8C2m1WDRcSD9g8267u9TLaxBD",
  "key8": "4omhP5N76M1CbEACS9qfjaZzFN8UGAuczgWsVHduYmBxri96Y7tpCrwcrUyWywzMLPifFZ6SByqiWFZY4aELBJJK",
  "key9": "3aRa3fMrCduhnAx1WVvmvjSJmBHvhFz3RcUzKVMocFafmpWk51dvR4jLEjWpWjkQqxqvUqkDqNvSbH4uRxGSBvAK",
  "key10": "3oVcXkDKznhABT1Ps676QSwqAp3qxsMe2tPNc7ixt6SetdLoJfJy4Dm9VZGZfJWeJkp8AA657X1jUJxjaNhzq4rZ",
  "key11": "3EqoqMxdE5bWpxF268yiR5eqyvrG2xJJpGPpgq7QtLjpDKunWyUzTsNwgfLq5RNa8DcpRcYLjrmLK9mTgzLe6mzq",
  "key12": "4jb121wzFxYB9FaLJX4CGzFxhBUw28pXZewkDfA1tsEi6UFACDrsTPSuaC6zzzzvJejiaLbrX33s9ScdDdvb8R8X",
  "key13": "e8MdCZPRvszGTcDjahz4fAnqQVJbQM8JowZt92JopehzBwKavp4RyGrPufMw84vppRJksULxXPpeQrKc1xDV4q6",
  "key14": "3Vqb6buWwCZ99EufrynKJGf7TTyqzqPDT3Xofon692Myg9cQ1KiaBS2CaBbRWeLZboZEqjLWjNRKoPE7E8qDfZHQ",
  "key15": "4vU4D6ZWhr8qoxYb5erfT8nnHpg3bvD4D7M758w1FkWx1sfVW4NhewAfkeBW1XULoG1d9LmiaWG9K8nygLUF48LD",
  "key16": "4VAuaT6pWr771hBv3aJFemfFB5oqcjxFYW1pV5H4ooetd8dK8k1V169n7SbaV31xnJf1PphNGfcibmsqP3VbdwmY",
  "key17": "DJoHWZZ79WPK5rSVFYWXzD4qYCqjoMoN2TVSvFQogCm5wbezPYap14hFFLx78azEXL7U4mfT2zUjT5zzSrSxZEK",
  "key18": "5sCELWRt2CDUTcJQ5aBfP64udEycvZhS8DrRqWoXqP6hEbBDJi3BNEPeDrZw44gPG4XMBCfm2bvVNfTS33NGSZgb",
  "key19": "3CveGDVNHwbS3Hb482zL7PoGCjGyy6REeWTCPMok8ujh8mmxixrVqENsGeigK1DBbbqtjoyh2WNxDLfSSDXxgA9H",
  "key20": "3LV5Xk2yXfXVBxX85xuorRCizhSXirQyV2ZdVJ8E3L6kCrzPmD2xW5P74dS7eEz5YKGV9PH7m43uSMKNi7fQ6hNp",
  "key21": "ELLTK1CuUuxNt226ERVUSKTSNMrp4afRzSuYJh4BtcDgbWjJ5EGGyBfBdfeESrQbV91PvknPmQstR8HUp7Tn1ne",
  "key22": "5HWn1dKpGmPDoBQLsBMBE6BETGCu7kgatmBuoK5XVdb8G3i8V7oPaxWBPYicEztQipoNhHCzVgnSjGzVQ9Vyz5Xo",
  "key23": "YYF2AkaTKWVhhwU1KZCz5QHSiSwDSgp11YkR2m66tSsWwWtLQcU4P8izXrbBUQ1Kn1cRgyMrUkfjywK3nqRNy5Y",
  "key24": "2HXeBnu5fVPc4zhJFyVNtf9Mj77mwYwxtVpWud6dpnZ2aDduZ813tGhdF2MEJwtPZvXP24NANTP1cYZM7NtCpUzr",
  "key25": "er4WcjBBiVcHCV4C4VNp1f8GxoinCMZMKixNzzmymzpYe8tMPVf7a9uumZgGchzKupW3q7xaF7nsbXmfqh6eU2v",
  "key26": "4X5zeMbBeYpKjSXuFaaTs6qKWr1p41afKL2Y7KhB8X91MtSKFRHo4arYxwHKkSLMWrQEDa4AiLNUfVC2JiG9xuz",
  "key27": "3xeP895imwyUgex6GyddE2hfyYbAX2FPyXq5MNMWmXHUkwUBQKd245VX5w6VkqfaHFtv1jMg1QNVquUWSjcCHT9g",
  "key28": "2Vxp8NFcFzwKmke5TFyHJG8xDDGZrQGFwWMaBa7JXhfcU2P8SymNPn9h9RJbqJLK1fZ7rv8h2NnvbVmBV5GA3B6D",
  "key29": "nPTffgJxXkc6qSaJTjEHrLFkQk8aVgnwvtgcMXFLdWWDhL83G4r6Bf2k4DBwFQjHD5rngxAXR2SBADEQvhjXk77",
  "key30": "3kkcnN8AoMyBgnr6hYY2xBaqKXva6Ec1GUx9ahJfWBz8P8DQCNNmSbv73Ycweb8VzMN2mtL2BwhuThv96WaZRpVK",
  "key31": "5JVe8mf1WWaqbc3CMTzzk3FjDM7xkqHj9C9PeZARobWoDdH2WQsUpiqnEiZSzNX8LuxRFmE1iyKPgjijGD4Azo7S",
  "key32": "4cCmzZ4s59EH9XkQjJbub435oczAf2c5VP9L7cVqcVMF5gshzyg5LDRQanW6hfduwypS4DogPjBvhTxFGNbmAngt",
  "key33": "3AimZSjtjkL6BpQTriYgTYF5Ag4Me2UkAFpPSQDpwwuRETKxFp5LvPbAZPCSrxG64HbkKQESLK2UAMmYmyWQNSFB",
  "key34": "5gv1Qp2S55Vo6J3qBMpYW4Lz3KaCxZLzVEaFjwWnuMvkQLzPjuz5Vta5JxRFJkkeqrfxDrqtk9xkg8MDJS48rqk9",
  "key35": "2FTmabhX8hMGTMuTm4DnBH7fG6T5FNYXqgrNpG7mxuz7sDH9LcYVjeNUjadyTeun4syAoeBdHvpMskiX4Cv2EpmV",
  "key36": "5CdH9vCPBZYfgUv3zXXfTSShvqYZyZutkkshdsU1SmcftpXyBTH22UmKq8jxLWxuQgULWvsP1o2SeCiLmFWGK4GS"
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
