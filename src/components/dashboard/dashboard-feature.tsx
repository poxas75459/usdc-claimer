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
    "3UAKJQeSdHRrpg1GTzRByHVEUKSRffgKQSNnuG8hPGXLgGJSk2GXpW3GJ6kDxrUiiqwqdeq3j9YSw98EjzVedT6q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dKrzBaEMYiJJxMFW6h2abQkRYWRFTSAxgbAWqgNGc2R7VPfHr6VHfVKQnHrwVPUT2ca55iyAPWUXjFvG19XqL8Z",
  "key1": "4z1MBuH3zTrapiHf1xvE1Li7Y5AoErkS4LC8TBb64iZWLDHmu6WK71UebxdHcca1hpVM99UD3baj6nFvd9gXEqiS",
  "key2": "2nmjpt7nnHM2JXa3YcZnM6tRU1CX6daNUQQHKNpbPoYbSUNuHkFiuvupJTuFm954DgF65Ac3VtXwWukzCH5m4DaH",
  "key3": "3tu71tqAvmhVCLdszLkmnaBdbkv28oUc6ZtMQ7VbePBDnNAax8ZkPSkyuueGcFstz4HET75EEpkZkkGyFxgeFH6H",
  "key4": "2h3WAW1JMnA1e11vWyD5eDvc2qBuDFdMvXxsHd2f73iUDxyd6Bsso35dKE4Ag56k478gBbZBy9h2t2URUUw7sgpk",
  "key5": "3cZtUro5VuPkjJVfGJyZUzsJQtudeXJ4H1sBdf8WiBpmiPTcedoXW59XwD7aSk3NNQeGinyKMnoxjC3vXC8V9kz1",
  "key6": "42CvEfFcjdvfXK6wXsAqhebTTW89GSpkY87vxewBUFhk9EUkAJApAf536Zh1kRQsQbVRr4wpJUPj1bGAc5YP4Sa5",
  "key7": "4WRzczNbHfpkFVRWVHM6hQ1iUD5hJCHkcNYS5SKyr8paRMXoQD4F42fGhe5oxV2D1uxVc9wJ7QyVw764y1qgEzJr",
  "key8": "2JiSkxgMRUnofffceriPxPZ8khmKNuCbYVBRjLr2auaNMEFJ1RjZmBptMp5v16MaBybYaos8qrDC7FedtWJG4p8M",
  "key9": "3Z5SwGwL7wzPsCfLdvBriVWzGtahP9KCijgDt681dSeFx5899WCBKoof2K99eqqZ4BbVJu8jr8GG8MdXMmyYSV56",
  "key10": "2ytiKEoADDnRGh4vrgMciAu8veRVw1a8GzLKMtMwh5T13Py9Cfy2a9hUjNhLgQ5aV1XLBXshqbcRsnoQ9Jdj3m9n",
  "key11": "3NcVzVStsMkA5Ah4sCiVnbV53zabTLCExNKBf5gyPZ9xVNJHFksNhpMo8s1dMDgCVeGuo4A6Rn6smHNvQATDuw9m",
  "key12": "awofFaBbhsUhm4C4hiyUJhVAnNDEj1epnhvbVysYWZ4Z2e2cXvHipMmuacPYiD2gM53B6DeiibF9sh8a55umxH1",
  "key13": "5rxFj8uZ9ECRVgW7Z4jbZ5HKDfo1Vn1LbwqzX9VzprwcVr4iF11BvyYXPJszCgFJes9ZDa9oFCTPeuzQCP3uuuns",
  "key14": "37MTmDPBdKnyjbygmiTHFcXX6GzrP4PGCpR8rdgrwQ5VYh7ExFbNaZ7QH8GXbZG3R5FQ9BgNbFQ1DSGGbEt2t6hd",
  "key15": "27Hf6jEKKNjbFccgJaoFr5dLYdGsA5uvFVy4QZsDF3AG8VvbfMNUi87ipcYdnFPmNoLDo9kDRwxMWpCe42Bp2Fxv",
  "key16": "26hJziweSP92oeoPJffWvyGFYzpVWPQER174EGYC4cCgx77tKzJmE6YVnYUqmZqwAhzhbrd3KbvQNTmRo5jVuUBD",
  "key17": "5ZvjbXcMKBC8w4vjKko89UJoCBeSraGGFXxq5vu6vLvz5ze9xWqweaobYQVnGe2tiQ3S2qh3s2iZ38Jap7TomACc",
  "key18": "5ZH2xomsGpbtWttztep5fsBb8fq9YfYQU7hf5rksJfTBUfPAqbqVDRJfMKR2duNeCg5WjY5fqNsQYns52ypDjqgF",
  "key19": "3qTaUYqANPGUnvHP9nhEkgRfQv1JHaDxM27jGmLL8FoParXec52b8USUTgrf9QoxdxQQK9qQSMPFxyFj45XqvxkJ",
  "key20": "5oqQZgHuKhCyqw56kTzbJ4qfaqbQMQ4xMRMKAFFDzP5A9aTZKk13QVc2zAJjKRAPwBKmXYyDneN5JBp9rWbTNsE7",
  "key21": "51ST3HsGeRaZz7MU5riVF3DfL8Tp2cP54LGhYrTqKdFB825v7CbDXppdK2b8nswYYKQvE7LyrDLAWaH27r9o9Wzc",
  "key22": "4xZtDgTnzJtFoJ732t8vc5F3i62daRiA6EJKqzewiH7Tvnq8QAH28g3pS6AAvePQ44rQPjUimdoVANCr8Ssdte7C",
  "key23": "4bc6pjmWA1PBMwWuau9N1ypMVUcDPDj3ZbwQBa2PdXtt7fryyafVoYtaEoSoPecGmfE21GNGXqMikPdqZc5kd9Y9",
  "key24": "4TSXwtPkkfGvWZNCCqPxAN4Vr7fQgqtRVvZRgiYD1twDPBGASXE221R33qAH7zhq5TUKLPhd6S1qSDwonCNNf4za",
  "key25": "5np4vLZneJ5oGMyGwdnraoyrnahffWdULYd3KQPaLi7KZ3Vzou8Dx5FFQvQsuFY6cDNqhBSv1xJvb4ZaxA7Qq7mK",
  "key26": "3xH6YUcHaJTrrWU5H4tTLAB2p9FRuJ65cJtT941jg8yaGtX1dav5DcVsRW4tSs8qsACQn1vi9DaupyQCNqye5oUL",
  "key27": "a7RqCzwdk5igqX26g8JcZ1D543pDxTbytRyRrX9HaYzqC9SdYCrVakA4RXLkRw4ANfBtdXXJYiYpJqiazie7o8B",
  "key28": "4UjJ1etrkwXT8H4NGqVaevHH1tKMdGCybHYLbcFoqtbVeoHQb2XibDUH1maNm6pJBPM7Sn3Bv3fGExwCNBMNWrbC",
  "key29": "2oLn5Nq8MP7FG869hG1zL9sGSh94XBPUpchfhA1Eij8FpkvHw7mk1jPWHccP7AUHruMY8CEvkYGMiyzaD349ufbh",
  "key30": "127LZVzyMANGCqSL95NStRbZrRwd4thZU15y2csJHiz24b7oM15HDaJJzPphB9SKvSCUhsp5kRGAP24trdxYoQLC",
  "key31": "VmSWqJVHY8NMcRt3xFqkzjbpfrFNj9oTraa6t8hJjpuTSaMNmkbtEwDUEsBjPcntYuQAecWJF9243kE5h6s5Z1Z",
  "key32": "2UQEuLBLipdEDWmEyn6gfQkAW6CJXZmrTKqhJ7o84d1hCx6Ns7bEaD3f5NdKf5aDs9YhcWhwu9sdpBMBJWmEcAE6",
  "key33": "2Lbbrd7tUUwp8K5vybn5keBUWCxQBqoaWbr19RfFxXzCW3t9om5Zwyefxd3bJ5AMDLhHWGJEjGworNP2W2dNtHan",
  "key34": "48C4MQXy4jroWiJngXNafZBjLna8XDBnZssde1vG5M5Z6PtuArJy4j5iTraDwMSJLTozpMZ3UdL2hJz8pbHiLwXn",
  "key35": "5WW451ygUMjKPxECFka4eRBgpDXko4Kcm5duHztK98twpLtXWtKaZ11BC7rwif2njx4tfQmKu5tVvUJNpzFGW43j",
  "key36": "4B7MLQ4MjY3PhczXXjHtbEtsSXz2Y241D3xqGQLvfP2GLzVh1pGZUtN76g7dFKnWpNaGpFdiJrzU4eKyCswPFcEY",
  "key37": "2dR2t2E3jEc1imreLhAj3z9yuHCVm9wE6CsXJGkJ2yvEpBvmGdpuGubtySByqyeagHzPKKZhScLY2d7vEZLXdpNT",
  "key38": "mw2mmQa6mapxjFMFiVGA6H62wZ5twdV6EwhdAkPvCodjJpDRvydpD7S6zjfxNBakZCMpkELjqh6eUsDLJ95s4DF",
  "key39": "63PeoXuyRrVqbScnzqBmK34HSUjrWk9sMWS9kMLJNW8rxFJgrqfUewAXxKUejrvRvRQfcDSahBgskEWM4TfBrLsJ",
  "key40": "4o5hbVzSFNzvHKgbJVHBVVX3c66cdV1vJ5GWMseDueB4a7SkQjy3K72hD4RhAWNWquY3Gm6doo9uaBgDez5NmrrQ",
  "key41": "34dWx2bjFCMqzGR2CDasKszzqzbW695q2XrMt8ySWLAEt7TKnDZfXzGGWxoH9522wXqGgTipxGfhKdiSuC2HMis3",
  "key42": "5sQWC9z86o1oVrsegZdfqm3WKbQJRgPLWMqSebCMmqQhMnxabGFHvWZmWXEkEkvjQLRkAK69z9bgU7Ke4Y5e6rvc",
  "key43": "2oWZw5iC3vMhKpGQ6ToyUN7Y9vR4DFSb6YunnXxe6hpZEcVVH9TjYay9cnbfLx739DHXb28ehTa1ff3EgAQdeg3e",
  "key44": "2645JJsrkmdtUqMJEiXKmfHBbbymmC4KMQAncJbhzWa1QKyVhS7U9DpLrs3HZBrtsWrhWoPEkvJP7u6K56uBu4eX",
  "key45": "3e7nJPLpWR7zQdgEJG8AoACJ6EC8a4g2Fa2zeAtdwaHxwdqroUAUNgaWLjgDubwHTRq7nLAw4t8fu75dHp9bm1xJ",
  "key46": "2u6JRRdEkz2WY3Z6evU3b2ZtUvDm3F4r1BL1J7SuHHRCTSBTPDPPXuDUxY29xw5i6F2R5bCuWivAdLzz1AJ5z6Ad",
  "key47": "4dWb8f7sxM45y1zgcDGqxDRrEWg4YY6DmnHD1AMbjTdiBYUP9QSMHnyUy2EcXEfPSNurUSNB9qmKcSWPdyHHsT7Q"
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
