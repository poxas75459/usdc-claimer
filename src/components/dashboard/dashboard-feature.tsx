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
    "5iV4bZroDAd24HoFLPYVREU7mXzpWMctC7i3AbNBPu8BrHEzHdH4rmiP8D3uzsYeGjUio3tdPiJ1XQWiFDU9ruf9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7mUmEVj4ZdVKcfh54uPmTkD4bWhSqvsxJs4nMsF3J3djihYjvYRTDwje17wsAi1XqGA2p7z4RDWseecNxxWNGy7",
  "key1": "5gbwvJfHaVmMTNj8KNi4JDob7jhyVNUp59EkHpzaF282v3hNpPN2c8RwWd1pW3kYoyi3aSKY5VcezgGKpLUhouya",
  "key2": "3o8vmbsv42PxvrTezatA4FWeuH4Us5N4dJeXzxZ9MRDnsYMehCic4A1yD4TyQvw6Hw6eCpJHgWsr7L7VVQ5uaomN",
  "key3": "6XEtLS15ggXksrSY8HgB2XKy5CFQUb26Veqr8mp5K62Jqc1xBqkeiDWYys1JvMv2RswCjW54PFxFb73tnhigDSu",
  "key4": "2p1hLSkU5YjQKkYN8XdwCVnQm5y8x6PQAVmktbPu8T7eWH57Q3SDiYcigGV88NM3ChXDc8rdAFRMNGPy4zVSoq5P",
  "key5": "5YygaUfiHXqHXEVKYwLDkxjbpGh5c2qXJBLBZcgxvipD4RznvGgddodimq98Hor6FZHZdTPLbvVg4XHSf9vmAfW6",
  "key6": "JspwUm4QWyTRBRU2o9VaFoKSRJVSfcGnZBX89vDH867SoTS4zKCFiUebzE1y3375bTDzswgYmpuRxzeJg78Wpru",
  "key7": "4ECaTJXnQ4ocg22SqaNPhpXnaa75qtRqieAowzB2uhdgSWdLmSnH5iWPgMDmP3ReMG9zu5znYGavbAova5P4NEVW",
  "key8": "5Qq6GfoRBz4TXiLG52Dbt6yCcKvfMLQw4gQEPSbZBFZnVLQnt1iUtPuBcPnxjxfmakTRuZNRwWqumQu5mZGJyFb",
  "key9": "2B5fWerhPDdPUrVcW7L4JwEddyRnjd1J2auCv3hvN3NBXZ3NxRFSUVSAExwNb9FMpAsrdgQDhBvjkFuGoyjaKK7s",
  "key10": "5fCVEQ53M8DBbW8HHBsAxHk1HttwUUBqEv9MzT3xnGLLN5f8ffm3UQ6LbkBEa2sCFLyALN5MbTrqgYAT93Ske7RR",
  "key11": "59Piy6Gs5dZqVMWTC5Dyc8QDMkhqaCV2zMeFaMzM5v6nSmxC1vPGvG9hLyUhvx3wvaYcbw18wvswwXSbnSFPeURs",
  "key12": "35a5DPTUJjuYiBGFycKj8VGTHsyQADcjVGZxTgmx52GQpF2rYMpenUGC2hMxhwmKUurCa3z2xS4fhGSEbETNupms",
  "key13": "56vXkcf3RPTiAJA76cGY9npfoJDEWqmuB2YMEBBdoscPPBkea6RCKU9nZGjtb66RwX2KxCGL21GxTR17t7zMYF8t",
  "key14": "5hmZqYh7rypSyc6FZVpamvvCkLBRJMDGP24t8kd78BGJiWLGE7aWNCT9FSQnVbJ7w62v2yHYmg2E9x4A4qb3Hrh9",
  "key15": "4bq8ErZf5vMFKTydwCtZ1xEnjCMrrCQwWko3pU1PotVmSrnteH5LZixDCK1B4gEa9KugTLt3os1pQMjUKg9FUbRF",
  "key16": "3KSDre5tMQq54D7TCH6q3Si3ZNkXhdtxHcF3B7owLF5jfHQBuEui5ffg2yAF9QQkoprd3JcjGVfkE41cutn6VKrR",
  "key17": "4bnURpqwMEx8owrQ7apAHWTzm7dNef4ZjZZBR4B1EHrmsxajYhoZzAYcPy8Gs8mUFq4KjQJu2UYWqoQBFjGrHVhH",
  "key18": "15UYibqeM9uYB91R34hT42PaoiKGcofzrLUn34r2HKWUTc85V1LTVZbSkSGVPCYi7zJiYGKrWoqNgWBeKYzn5an",
  "key19": "4Lx6AS9guB7es8c3Qgcp7yemMXWCPgKYjmMP1q8tEbJYPSDos8ybXRSurtWc2FEbeKeccfaGqFY6SRajyVrzD4ad",
  "key20": "BMPS4xaffPHdaCUEUZrG7XVHiNkq9obmXwx4q1mEr5amWPQGcm5VUSJku1d3sDxC2kPdMyeRSpgFZAhXPPz3KU7",
  "key21": "44s328vDaA6E6J5env9gQFY4Xp3K9KGSz5jXQAUsYK2Hdrejgbp4mvjLcF2MmRQHcAJ1YKEHQgYDsjFyWzYevcRD",
  "key22": "44wX3VqwB2iP6ZydbfXDdNgDxKJ2LHJitbdvgXrHV446BdtmDTZsCouBgziTswMfjUwHdruhimJz7m5omtrGJ2kj",
  "key23": "3Mfk26ZH7T3X5fquBJ6oAgHLptNpHhtLHA4bcW8yz6dYbhBvN8NV5Uk9MdpCUpCTT6gDzfzvFYspWjXZNeSqeqUx",
  "key24": "51toCCDxev7ZipasMmYFhMnTHu3g4jCivaRaS4jwchMSBTimAyFksfUYn4z18MU9g9XAfTRRkGRgCLF3gvZhvBDw",
  "key25": "53G98gbwQ2BhBTJxMo1NyBwr8mYKRfEFYUvGwHKKeFKpURBjYj15YLreGXvZmBxoL1Kb5tBNg4Zn3B1BLKpRm8hC",
  "key26": "2357Cd8XJDYx72bVERkCCkYPGnT7oScsUpT38u9tEpoRj2AXVAUQiMX9Jh6WZUKb4mN7WyJB4Y98YxaF67ChZwSr",
  "key27": "hS43WCazNkGDQHYFPybor159wqrieeW2TNZL9VMNccBA8dUnxNbruPWadGqRiVBdSjJ3P1W2Xs1ShgonA23THyS",
  "key28": "4W8t6zGn3weifeUnFiFMzHztwY5vbDvcJFzShisJXhM8RLK4YtA8Qwi5rkRwKKYhjATYuxa7D1uHh9RvHMw1TY6P",
  "key29": "2AES6drpjpbxVGzEnnjLt8BAq3xRvhmtAr6FAvLaxzxwHdSckG4rCCUxHAnKc81uu3wAaRuNamxJ29ZfDYjj4eVH",
  "key30": "4FtXYPV76M9gKDd4Rn5LFDH7twwT7dPMiZGRPMqkXqUY7GrfyhGTXgXMrzxgSU63tUEqQ7ENDmnH8fjPtH1BnQUk",
  "key31": "yCvzBAhTYKaeimJSDkp8V3rFisfNdW5mH8LxXjhYCTigvNwhJtq4mY6fLmawh4krPGW2ivWkp18qk6YjYHZHNKd",
  "key32": "3ML6qkS5GUyrBY1TrxbxaHhhtvdoU5PL2PgfDxerXecUCh4EfU34hcohYszVuxrRqQZ1Zs2u3XeBn1Z57DfvCSk5",
  "key33": "2es41x2uaY4ww4Q9dQcNhijFNCScUXZ7y8EL6EBNHoZRxyPDrMpt8A1YEyX1hGreFFRkyVxwNJ7nr3E3JSnbRvXC",
  "key34": "4pqWxPu9LBGRvrwBgarVuoiTrUki8v7cQJaZhc6jQxj8uyzUxQBSVgJhtazgoG1nwWLKHL97fad1WvQ1LzPxv6r",
  "key35": "hAw6GJCwqHNLPSBx4tsT8EKFrhUUrteesoyLyPWmdxa36LXu6CFHkKX1CG3z8qPHCkenVw7PsZg7EZbHkupGQjX",
  "key36": "2a3z3Mz9b8ANhJygpXPd7JdsFLe56VFxijcESYXT13Cfur8Z5erWG8DTJUV6H4aPxkMKNuWg7pub971d4YNH6wY3",
  "key37": "3fS3i9J8NjNdfoaAy4RHwWowDHEAmaWJVS4tK5z1krL1X3P8rtLwioYzfkoxhpAArGoMSYLjR2QX44sAB5eYu2SV",
  "key38": "5QA6v7TTdzjV6YYqLahwE6h5k8JSXkTuKuZweT51cqQrQqTqFmmdsEQPTiPPW8y3sdoyb9z1Co9hV54cKu6sU595",
  "key39": "3XXhdNLGXfHE87fH9px4oNwsaF6RKqBjU8MHJv33XXJUPzqdPLLCL7xsdpKLNhzbcSQVUrmJvzvC9FFE5KJ4psja",
  "key40": "3wFVfq1G7qu39qEX8BGXFEj86Uyo4yoDMAa36rr9gEH2VcvxbcFXCNoQ6zNj9y5vz2qoH5Yjej7gHsiff8JfygDS",
  "key41": "3evK8YRmtS1W6NJG8EnoeiMybks1XgENYdL454itW7cmCAT1mEiStRtTQePFnRQxHMFdhp6p7RPZwLixd5YpgKrL",
  "key42": "NLkfszR6TBDoEVhEBPkqUpcJJxDfxG67ZAg1d8BHBg5yqimT5ykkUTBuGWV8FSYRxkV5NDofvkjQNjsWqJgyMAN",
  "key43": "4yNMG3zqsFAcQN3CrzoKGQsbMTBXkjmLLtKAvB26VM89xpFsWoT5kXX5uiUzYxmmvTwK8GoMpLEeXYsZ9xqXsnV2",
  "key44": "4cydAf5R7AT1LCguSkTp5v4EohpdBvGUZN6JeU9DXY9zyt4SdsxSZToHJAnAy1ZovjRWKW332bZpmjRgW9qQZo2J",
  "key45": "55j5biSDMh7MkvxGdKBxsDu5waGdLeQkXnd6iokM6pAeSCWDG6eimHrT5inRYdRjH83LXeu74Q2AK1Tq9ct1drLd",
  "key46": "5mAddEq9iJubWfwNPiBEtCmotHZT95mdy3xy2qiM4qDXun1nvLVodvThAKVgb6mUqt9LeNSawyrzGDQDgzJGBywZ",
  "key47": "3U9otyepb64pVVCdo1ocj4zxCbxH82oJYSn8VzYRZDoSJSZJqmTQR9y5Q7cLmjoAhXLVGkiwkrEYtPWhg8DgoFCQ",
  "key48": "AuFq67pF2wtexBLWcNY84SG4crTzgYfLe921ucoTc1NKkxyrF742tz6by7d3P82KDcoaobyygwqMz7TcW1rkecq"
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
