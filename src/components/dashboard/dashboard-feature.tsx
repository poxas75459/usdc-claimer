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
    "4Nt9rBTXb9ynP1AtMbgsb1dnpN2gPCmqZJVbNsMsFB6JEthCMy4f8bFkh7rMqztvjENwQmiZb8hX188ZLPGcgBQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wWJ77tQh3NoMRojUsF6GYFFSNBCiRJz19WG2FajsG8CTbnynf5A6XxUbFVTLHidc4dPpvGufcf6JeYQrkC7oiAF",
  "key1": "2hga8PELrF4dNEMtNcEwHc2KTZiGw6V6Nz1gwsgVNrAyWKGe6U3giN5KAwuyLggZT7VTDFEYTWMNEjh4HWnDKibv",
  "key2": "4sjcWsBBRkWb6Kya7GcXFLrn4QuqvtXsAe8gf2M3GMbxbqNWJEp38hCzgTdiAdjnZpyfDjY8FjM98KK4nmMKmv3K",
  "key3": "4RP6g7BgkaCBvuWGVJrCw6uxKaUGyoKSs7c5DzVhZnMtbDJ463yFu8bL1Fahut6Unf2uLPRn1yEGNiHJ3fFJBbTn",
  "key4": "3qSLtMewEdGskjFu91jpeoegMw33z9PhT4azjWxJ2QFKzfuv3ae3NXrcrH9PzebNgPG9YEzTh5XpcscbzJsxbZBg",
  "key5": "4dLZWUYauwMWtGNGiF2CxLvedZ1SVP77YFHCAyGASnFhFBukV6EZCMwtXCK6tAkGwjR4cKb5mjGMwvTKWeg8oFPZ",
  "key6": "3FfmAwniSsqk4cqxp3BjEto94MENyeUkZ2m7Zzixxv7j7SEajt8syfM1PJNjik8Pu7ct3FayqrRk8ePDz276SJUj",
  "key7": "3H5EYauGPvYJrT3qHctwSGFSrPUBfruEbHXP55dp1RuKHoG3hK2L8dX9aVBuXKQpmLNqtKY37d9nAfnhuNwFaoSi",
  "key8": "3VQeB3piHKuPxNcg5fVGTLhzsrV22JPsKDSDdWauf9fDHG424i8vw2ACHXFWdH5hVj4ccomc2kCEYS3za9ppQeUa",
  "key9": "2ttKxSXsDECm6CNa8zsjh66vyK98zLNm8WwkJcqrxYtbsPeeu4tRXavsAbvecD6EqiLxbXT1S7JeXkYXrta9A81Y",
  "key10": "4k32WiDvpd8uxPCuqzQV6W1pLSU2RSyrDtJEtd2jzKKqFQs6tFoVPHJ26Y5yZeBLFJtTP9GfK9jBLqCcVRMBLgqx",
  "key11": "VZJaD2eLyaLfpijUC4ZXTMULbY6Cyw3kE14eXqeRgsU1YDJYfW6LBhqKZudRUdUqAChYELc78mpx13RxRYWnFq8",
  "key12": "e9JvYFm8jF7rd9pRcgTU7ygbFFBoqKoaBKx1mygMKHt2ZRJTBGvqto4ofnQ4uE9yhQR9y774amXnf9eW6cKuQeH",
  "key13": "3SGNtbdYgqGLhv8R4B5AYp5ij4rhC5hj5th1mQJ1CP3iWZ83ArkSVjrFSW1iVHE6pXrXDjedevgd9K9sQ3NUKKX4",
  "key14": "2MxCkFJtS8pJG6sa9vXhbecrzzMhrkS6DWHiVCPa9E92EQkT4gP5ma5H5r7VkMY4nNCceMe2tzPknMG2AHmZUhJS",
  "key15": "wfsLgGw98ocS3oKPRNTVQk1YG5UVataLyrjuFEtEEFTf3FuH6BauHBD7kekXWMceLGpGMyTRPGd47uzVjTyRZtC",
  "key16": "4iuT8XhCRTGguupVmYTzRm4Wer3f1ifksFQtD8k7nxyRTfqigjZHNkrC9Pu7wLhNiJwepy6AN1mJCG3Sy71Dz3nh",
  "key17": "U5Am4BVU7xqCXkXniC5MRmJB2CSZuigyREWWCSG7dCcPevzu8LGcB3D2d8hCfKmahNu2vyUwQjFJQaioV4gyDHP",
  "key18": "4b2KkWDHaZqdJL1A7HDBfrWqdRpmSsTKeX4KU4xWTy6erNPBy2JriAVkCUvfs9CwNB3JFPMX1WSJqKsxryvK5jCv",
  "key19": "3QxVGmbfraUfn2Q38n8YsxYNNpab3itKfE3PxdG47bkXHywHEYKba1XGGFTVy2CXZjGTcp8eRw7RAUgeCgqVeWps",
  "key20": "413tKgB6nvFREwi1HsGascPZtHW5rAfYE4xysJpoZmPQQHQcrW4SB7oMeWHX6y9RdEQdU4pvobk1VWQUePvhrbQY",
  "key21": "B6maauAAXbLyF6D3F9N4qSNfwjHGJLNEmjrANoc7iSgjG4c3PMrsa43GYTqJ2v54Ffxe9wBD8Bx4pfKJYdhdJWP",
  "key22": "29dWVhSZeEQQ7tgiYcYyTQDieasxndi97hFioEEbXwuBLwr85G2zECNZuW29uR6m3j5LCf33gUaddjrHHrZUwo4c",
  "key23": "2A4FmjZehumuMDideLvrobDkvWZxeb8Dhv3t6xwLo8rWsrkMMWHwZ91BAner9GZYvGnzGmRYLwfJaJqo8ptiWgHP",
  "key24": "2Dgnk9iQysSoBM9mnoRmFdQvTkRPJe85vaiCkkaNXnZQ9jNReCMNJPVr2Wsm3iHpdDenkhJDcgHNn7qQNSveghAk",
  "key25": "3gpvpa2HfQa8JN9ZDPAGM2y7mW7HopRMJhXN6pAs5WSmyqng35ULxtPKDRj6yxVghd51GWGygGs8RGZxgHHw7ACN",
  "key26": "2KMJUFSm4QquEddcvqCfydtR1hsrWMWFF7oj2fFgJVkFJsdaj9d8iAaqJWPxpQD8v5B3rAoC4qxsXhs1fqotYeLi",
  "key27": "5FDDgY2bsp3Xd1zWCWy2VDSdHenCnNzWH3iAJbq5xf6Avt4a9tEQzbRba4edXS9KZoq8cHZPwZyGby7x2oKD9LDV",
  "key28": "3jyA8j8q8DNHYqGpJPS4Hw5okYx3xniKNWqs4maPwD5gnwbkF7C2nJ17AcUdydYX1aYh6ud7XEEtzBoDZf18wSk",
  "key29": "293arZto9ztFU9bqyEakCUGf4CZRcAk5L2nvBFS5n2x4WzaPZgk7gW55LhaokTti3T1F76ds1arvzqPpRKzfFE5m",
  "key30": "2UDHw4YtugqQTyYK2eyRTmbV9K1g6zerxuUEFRUYF9MjH3HmjbUmWqBSs8sWY1KZdsXMattRS2Xt1mN7gAq24N5",
  "key31": "2qbQs9su7moZEXCEkXUNhLQP6qQg2M75rmuiUGcVVwjCbAJZfg1oCB7SnGrZ4bBpHcQZSyxsM9xSC9FNkWLVzjuL",
  "key32": "4cwyy2Ddyj1gJubQFfq834RWFHPRwpHyC2uciYtEcJiksCYkLft9GHwyuvGiuy47nGfCaRYnYHS3mLX7kQ711VJ4",
  "key33": "3aGM1y6WSSVHwoFBED18w3C2q9V9km4YMHa8QZoTopurfEZhrsv3RaRytqh22xx4JgQjB5s3gGGbbQJpuzNSexYg",
  "key34": "2Vt4peLdUsPu3BxFDCKR4qzWMr28BrQQH5LKUtjNrYUShnGJXBnkjMcET8dRCHimyUXEBdswAqGLUer1YVqiYsTC",
  "key35": "3ssjFEacPY1wkqpZWS3wp4i7yC9Ffhd2775KjnTZWmp26VCjk8NjUs71T7gFowwTjVsHpszA93Jv3EiqTioKo8Jf",
  "key36": "211BXox8nVPAKZSopgeRwWGgHn7xjtqhwFUuvzzfpEeJUa32hhkwCVkjtnNUXUSkLS4LLp9mKbRZvEapsZ1ik6Mo",
  "key37": "3YE2GVQYBVN4sookTf9FYmKMp3feVenC9WW7B4B4HH7PbsqNbYZTm637ZGCJtraaiATLRSvr1zVqCFpgnBz8ESFw",
  "key38": "ACZQ3n4zkuQTwwrySXUHxRZdeRfFPepS7EFBvy42tggWCfy76y56hq92jRdHF5R2kbR2qnC4sT1EaFUqNcbKb1n",
  "key39": "45vCQ6d71tnP7p6ZgjXhPDZot6RJ43a6dxSQdwE34C1fvJ6FnaBsq4B64NoGzKWi99XwXUDoTiFCgL8SPKj5cZNb",
  "key40": "CaqBmZKPVTQYcZKNGvduRicFFRb7NrwrJgurx63KUQjSqWkgCQoR9VxbTx7nsVqWbGmLcdsyJWSEwuQjc8DWsAm",
  "key41": "5Z7zjBntwC55vCRtv3rtBbJsVNyDgsVrsnCzk54aexhD6xGEe8tyiiT2thbVMfkAByhwkkcTbiCf7SwfZapsYMPE",
  "key42": "21mP8DDHCTMa6k7Tj149DXeCACUfP7LnjviZPLhsTkXgjNsTbi4p6brhDPfk4k89vPHHyoogzNXRqLqnj24aYaZE",
  "key43": "5vXT79EdYR5TUKh9kEjkPq1MUY8ovKQkfXsYXoN9atNJrntGZhWh5EXPxGFSoEiCYwQxSwcGkpstCuBNytFdEZyJ",
  "key44": "5CvddyVMyrov4soZdG81WSYYvYoXGpZEuKybEepDDukGN1Btet3GEGFtn5i1s4mZVXipgRTFShw5kzbBLZexS746",
  "key45": "2DPvkj6SiDet9bvXsHgAqKLj1MKTsYJ2pvVp3wpQwjnjoun2xGrNNDQ3icCDLHqZzBntHac9ZZjCUozVbcnZBN4J"
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
