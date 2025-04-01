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
    "3rksWRnFpNMyKLsPidQ4B9r3jSxuqjEd58ii1nrZBBar1UEW5koBES5QbGJQ91MQhdW2BPJoeKyy1jdrdUbD1iGC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qBiMZepbNZMKrm9zvqsaNE5vxRDg9agJGQQcnfwdT4b7bWMfU1TdJE9R58rgiStAQyUq1f1gRozoFDQPFpCwT5r",
  "key1": "3fkwc2nbjrKEJzRsSZ86VfVUXYyLQ1D2MoHoHFKv7ZCem4h3YXpUbNJZRkUUfCBEhfjTbr7yUBtQ2Rt8W8vd4h36",
  "key2": "5jGLMupfJmSgZ8ZRDBP2S22AhUqGkpjchqWGip6wptsw2X1zKMfUVCEqfmWQdfdFSaLaGiQjsrpvdxCkvdtvieUo",
  "key3": "2rpGj3snJJV87nFejSVLUMXPmwio1iCjpV5KnXsJ42iZSjkTje2kYyGpRDHrbLqAbVTkhHUJ17sm4jBq8cSQVmPW",
  "key4": "2L3H7YddxgDpNm6ToA9H8esZrWFnPR7MDRSepXgcGZ3vLLmQDxLZCeaSvsVYXfs4nJxyhWER7Mp8f8yKUgmLhe6R",
  "key5": "31NKdqtr66A3jZGACHoUWubpkLFgHTzKNkG6uZRSsgVU84vvRDKZSSssfKA6Naeozcx33XwELvRdWLWML5k8w1ue",
  "key6": "zsANAQACBwUgKgoYSxZGpxKa36xJx51nCzv8JSw4gZqCaMHzTsmryovDZWV2moaHVxEZqJgjLdJMGzPZRe3YLYT",
  "key7": "4tWgHmFK3QBenf7AvGkNprh9yzVL8X6ZrsNw2JGMVYUp113hCphcdVftseXC48CRY2fxb1Vh361ZBsHbbc2m753L",
  "key8": "2XAb5Ae3T5v8e8nZkcefxqQmqCWHtMc6BoWk5n2TuY8DnK7UQAYoapc4GYTVN2o3ppnHrtheRQktffssv5qMnzwb",
  "key9": "3DbyuvjFDQjNnQG9LT22UJhUCqNNTRUaHwGvUebS2bXkzUVqiNA6hWMYTD3niKhgPV6LUGhj5aQVuKC5E4K11A9S",
  "key10": "4XXUinz3vf5kpHsy3mQPm25tZPAppaVGRwsbcrMMiPGMDWD353xBwJjiwTN251gWshgLTALSfkvwyDEyDe6eih3R",
  "key11": "2RzhZpEoyiNt7ey48VYCZphVHJu5aV7T2UvaWM438GX1LrSAPvJGrhu6LWckdQftjTeKvXodXGzEfvxx5kDUxA1o",
  "key12": "5hxLqF4unuxHcFmHBMkVt2hYTKBJyc4L9Aq5UtaH65qZxRNFWjLiAMJXFzZ92MFboje7HMGNNGfMkz2E27pEdDyb",
  "key13": "5cCXTZV6zp4DczTMNt75U6PGYpCzDHAZQUJYWP6ftRYCkBwd46m4axfQkKWG4WpZXMw8Wemyr9nNmAvfC23bdfHX",
  "key14": "4AeZkp1cpWj7x2wE2AQq26JJnbomp8LjBeextkhjowHFj1c6inbH1L674Xtcru2HaRNrarLPButB6WA9f9LLLyBm",
  "key15": "5QYe6HUpQfVaVRsqLKm3WuAYnn5ezA7LYPRQV78sA4cA9u2rQNyvYtHviuefiHBpEcG8ygzAZvimLB4XpGro8y7u",
  "key16": "eyTMeMU9D6xhc4PGTe44VBGpdz8ykSXmAewvodpotVzy1MyeE4YxxYqJcKCJT8psVDMh5WBsK4YAZoQ4QiiTW9u",
  "key17": "2g8jXCkkDKQ8HQsp5ser7aDJFs2TimACd5eeaY21uUqXLVxf4PHY5HzVrYg9nLa43PkfkpVFqzBD6SWUacth3Vse",
  "key18": "22E44gakqHE3q5PtGZqLxaYNC5HPnwXRPDyEHkbsjx9zJNMBLMc673j5xeKogbiKLEVEjRc7pYBQc2L2ghf7tgHs",
  "key19": "nHbrQkwBr4TfzzGFz59jxHLCHhodpDDS8UhATsPvC7iwn8yVba8Tm3EePzn2RetwYSJX2bq4pbsppmz5obZxwjy",
  "key20": "KJNb24AyMq9X3M1gZgxUMFxxG84Uuj8YV9VoHHWzHoC5SNaLAK2LwTXj5rvTE4wcWootDabzuzA5Yi5W5yzJoZT",
  "key21": "64vMbTCz8UCuyhk9xPQa9eDQdzYMHRNpmH7j4dukYp2yBkTRK3htZQoBYHXSevujZ61W4bJct1VHdjYj1bprQvs6",
  "key22": "g2kmwKMpie57aBL2vgFxohgH9JRxBM8K9AWQ5q8RPbJap1qUWTFAfwnmmCjwTARB24RLZheGWysQFAuxNAqz6sM",
  "key23": "4tuSRQxNc7CHjmX9rLfGCY25oFmTDSLLyu2Fc2cLBHMFyJ2iPoSKn25zHWX8cTUnvicp4Hgs7jqTt6D3hAy9cyyq",
  "key24": "4R1qhWEzScpyj6gP2xo5gHu4Ekfzhj8zSmk7QaD3G8A7K7CX5dEiRUMPqveevCqVKdpEGuKrnMHBk62NkcYyHXkX",
  "key25": "5tEiz8VMRuF4faUd3Rg2NvohzTsy5xFKg9fEnzRHtCdiLJC7p8gKH4afZezY7Ny9GskN12HADWQUWRWTbG6i31VA",
  "key26": "4X47HjeW2HkQ646kaadAGj8DeXnp1i1UvVpdXz5gz3SF7eZNpuyiDpi2n8krAzemYYzJ1QgofgNkNMUnNjTV9TyA",
  "key27": "4HTfv77y31sMtYruyREpTPYwuZxS6c6WWnPQwRWordkZfK4mf5mYYdaHia4SFRbGBg7eacumxo6zmCPPgDVQYjQj",
  "key28": "31v4YaJAJy2T8VoK9zCiFXxCXdFVKNzJFXjmzXRhdfEsFTytAvAgNWEmo1Yae4g9gJ9Ywhj5Bi7HS9LxmDvNGvYL",
  "key29": "5DKrp2wrMk127VynCbskXXfFeNLzAAH8uCwBdmLn66eEGvbRF5o8aMpe2pDQ8hDrm6QQxG25bS1jQw1Snx6oLr3h",
  "key30": "4m7MvcNJYCWRiZZmYYERzGa6GtvUirKvp6EQZy9t2jJTLaTqXoyj7C2ZbETsZaVsyjyPuEAXpGCsioG2NM3utAjs",
  "key31": "24VMQMQdqyfDGHVnsLEJfacaNnauteB2hBJkNUM1K9M8ZXacfowHZCJVge3fGaiJHJzw9v1UXbiMYzRvyZcMDSvc",
  "key32": "4M3VnozpL8mf6mV47Pgh8VXPsftdsczcFCv3GZPWWrt2ZBmFsMZBJ5ATY3cHTDmvzS6Ed85bjHfn5r92XbjR6k3Y",
  "key33": "S5brCeAWpPudQvu3v7aUZZBgTuWpeemE14eNPxu3PjpC4qYDhrpPhUt4nWMr4pUFFzFdJGEXmmK4aius8GjzyJs",
  "key34": "3PaA5YQZhXJHauMsvd3DNyff2hyAjDpxP9nurJg5rQPvs6m7zzAwVMS7WMPzRmm4KT5qg5ngAhRLChfCR9pipnMf",
  "key35": "2NuDpza1nRtAPq5wFjrQbhMys3AnX1yBBrB1AK1ZV5sLkzLZbgwXjwnzRJ4gCvuCGPFjD6p43gn6pTPdnU8ZE6tq",
  "key36": "uBSXmKgJZJWfFrNEids5w37nxmmsiwGfcWQFA5uUSi3uTfRLH95ktz8RXngN8cYwRWMNj4gpaDQH7HauVbsMLkE",
  "key37": "5Q5UnAsxcYWZQJLTh8QsheqjjVsNzEPPd1pgxRoWmaxxa8Bi4JbW1z9Nxm4F2FiDMPkeVMSUn2HSKPGjQcY9goiE",
  "key38": "59ZoDkdeXtC11SBbd48AnPLrCoVUHQiPNedBaRHqvyNxNpDAicmZBJ43uLYWjT81wphJmiBSLw6QBYRYA2YEkh6B",
  "key39": "2RWARogdn2bF9e8fJHdAD79m2p8sNGkgoPcCVR1wSQEdrT1Uc5fsnmfb642eMe8cYdMbms1uCAshRkYk71iepq8W",
  "key40": "D88zXY6eyLHnV86gh7j2yuQiub5ecTMABmrVAsWcEwZ6hCQxYSemDgvNmTMmsAyHNSjkb8ygMs8SfuNtRgrdJQZ",
  "key41": "i3ivGAajkfCCsJzfodJygFvXq4gRt6jHwte74ZXe3MBCxjjx4PYrdisL3X3jVRR7B44zTT8MBUVM8zBPSeXH18T",
  "key42": "3V2wHhb5h2x9ittLLXFj8MNwUw3UURy5TVGb1uZzbwFyqjG8NFs2qMbmv8hgjByZtz4bpwWFQw1bGPPfvWVkVKyV",
  "key43": "LPMvt5woZw8zMPYd1aXfyu2zNc4kfWBPjZZuYDn5226sPy3sN5oS7EovaZtjwAiTua31HV9cZ9rFxB6oyzYUuyo",
  "key44": "3dJZwwPsMs9CLcM2sA3xZyffPgxkWhbmbU4N73uyeika7jU3YEQaXvN517XcUD1LFqqSeZYBrFjfYXE41j9vZatR",
  "key45": "2a7igYQL6Uws3Lkp16eETX96DuxRkRhzKjkSsUzeqFDv5XF5DSbBZqQkCtKVScgoPXCWL16waEtK1xho5wL9kApD",
  "key46": "482JnNhW1cFLY3eKeN77dyUye474CWMjdBgDZvRdnJdXUJzXit52TxW9MKJA1PGYMU9tBNox4xNqnrot8wWxSnk4"
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
