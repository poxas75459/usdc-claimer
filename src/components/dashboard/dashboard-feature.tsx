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
    "392Edgtp55VLNYESz84LfWCuraaRbUbjYhDqC7dUrMHeGYK8oTPBTTCHMsLShsXhBaZ6fBvsyY5d9QDEc4g3dDYW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ko9VhSKskhhHRBkehP4hBBJR5u1uJSwjBPHE5tWhH8t2D7T3tLQMirkKDKXWpZHnPA3usHYd5y1L4ZD1F6QjdXb",
  "key1": "2qFn6cpD4ecbr1n4ogEUHuqTJoLy7RF9W2RnkHG278fKiHacr8wZe2sWpnzDNKkeEiD4TyRBnJ4fLtXRfDzGZ74z",
  "key2": "3TxjCKAmyzYAN7CMpSkRCtzg7v1CpBV1qoeURM9dRitRNL4zBZjXPj4ncGJbbYZ8XTqnX2UoaxKaXbgj64JaM2Je",
  "key3": "JcecBLKKzYbX8sEeFJa3sd8WPLFYaweoPu82qJaoJgDUxzUsqTQ4Ne6w5Gqro75in6M79NPgZH4HZoRi3LMQE21",
  "key4": "5jhPEQ6ScXCpsSXNvH91odLAPHviv27fTppSK4zSKVUeKGLNafjo8nDbvHH2gTmoTXxNyZ3ccJjwtCe3comskdbx",
  "key5": "5XwQVmApcBdDtm9izEJgjDV919dD71sD7iUM5J5ZQdGyzMHu9DzZUQpEM74hQjxUhhFKwcfjbEc8zzJmRuzG3WrQ",
  "key6": "5HF3WjgATSXxj5aqRoDwgrjJ9CNVKJ9cKa6eiyWmWiWqcNptsi2m51FTANegACFqf2nrNMNEBetkMJLToXufMS1S",
  "key7": "CEpNXUq9CFic9JqqFBucGQwiDvoDTxwiPQ5wgM8w8TYg4dCoYEmoMHok4cFdyABopdgD5UMHA8bHZB9ntRALRcq",
  "key8": "Fb8dmKUwHqe4GpbentevVdcP5bwJjTkDtU8gGq42FGf3NBXQDNjCkk1pqcTTikyqtWj5y3LFAkDF8eAzxPtiqmW",
  "key9": "654FxjVbMztjHVDhLzrFgEgtc7Reir1EErm5DVgWHGRy7kGwcvpEdbQ3DfLmxRmg9aw6SK9ub3mp2fXCerY8MpWV",
  "key10": "2gvQ9k7xRCx4VBWdB92WUgxrrZjrpe9YmGQZxQptCAJXRGHH8oyQwqaJNGUjpss5cBU4q8b8V3F8LHViQtsMjG9v",
  "key11": "Bx2VWmiy6DZTRHgnv5zJo1AABNJ5fViZXkELB4AGy23M4qdU4DX33kieFz826Ps2ePcijYb48GNduLuJhCqvLBL",
  "key12": "J6sErSUDBfk7cW8e69B97vUHs9P685vuhv9P2v6LGUXFsXCPd1RsSXK9C2DqP8F4gBzMut1U5nmJzFkgN5jo9GC",
  "key13": "22y2bBLHwTrvvYRJKGbxxzfMGppS4BRz57xZZi8fmwF2Z27wLiSZ7RV9aqnX7skjtEPVGqH9vBNqYu4qKcBk4B5k",
  "key14": "321kE7rLNTk6JQZM8dvnoW25fhGmJp1jcnSB5ccAv9MuShHRj3m9TSYLAcXDtMUPPGYmpQhnGNbcUfypjRNpsThr",
  "key15": "4UMbR37EaK8RvL6cEiyBjGCtoJjGpMsrYpRS8rRtHwgaFThpd442RNAmbbAoN6zK1u2GbKYjoDA6kswHKeNvfag8",
  "key16": "3D17dTF4n8Y2VZNmwUuDcPcjwiXgeg4YJpNFCJ1QwRoat6kPWg36nNpaxgFmeDrxW5LeX3RzNfuWzYUDZrETVDDX",
  "key17": "5vB8xFPyUMUD4wZdCCUaq7Dz1NwFkpwNAjsadXne5WLXKY1PW2nKQJJQrpMcqgrnUL6t4a8PjEhhSDHMJezP2Kbd",
  "key18": "9tubXERbXAMyRUtHG3MgvJr4oRqwm6eofJGnnLfLGjfBN3RJZRQs4PsykWbuCq24Y1gH1g7iHtE5MiDNLY7LKA1",
  "key19": "61zG1hfRqFV7b6p9fbVsy5v7o4gJ3TEmr6zMg2iAkndAGjRuBMAKo6N9Uj6em1SGu9H4iurEGSFLs1D8mi4yKFPo",
  "key20": "21heaRFT13FZ8SP1yX9TMWxcPKh6rFHRjhNMoTzhvax11WWc6qhwrWfpfTPwvuUpXBsit8pUoxjWBmyLtC8PTXEy",
  "key21": "55vWhDacTTXwk1eY2ZwMjN4QEBExFNMbC8YApbzqHWMYVaaznCS8r7hZGZgKxvTTrk3EupnxjbsVFj1n6gZdMiQy",
  "key22": "2c657QhUdw49Lo4TCqQfvfAfVwWyQ4mEoS6L2GBPhukPuu13qenFM8cNTy11M6w1Sw9LaT5Ag35yUmGeG81rixVv",
  "key23": "4P9SvyUwqAmXnBsG54dk1sVMPBQMgZoffhQeokDhKuTPF4SWANcwuAdQ13tLoNbNattqgkCZxH6NhWikuKxiy6t8",
  "key24": "5VfuGVagRn1LNuCHiwnJpq7zivnqc9Dq3sHUofD6MVfzKJcxWR9GqguMYUTFauerz7EBjMTrUNnD975vh5EC7J7r",
  "key25": "aeRzHVPYpE4jpqkqxKKZyCgHbJyv7H58vNXPuEuneJE6ax5DtQMytTHDXLjmervnNcesjfrhLq3devTksHCcKjx",
  "key26": "5uV362vreErCRBkDdVu7CacUHoiTQVgJjQ8VJ9YzWE1drRLby2vdqKE2tuHMGg7pqxzNYFZiXFujnjU17PLKEwf2",
  "key27": "3aNhFzzBXWdCxHo8LWxaHe1C1AqB3bvoWsaYMV8WRYxHcUXrKabR1gvBZaWs9aQSR5ixa7qAC2iRVZeVRSqRzCQT",
  "key28": "2gE7f8P2ttrrjZW4iQxcFpSvT2X5Mv2iWZadf4a9ANEWXLqh1MbnZiLcBvyiKqRcUrByLtUTRBfwyHSZUMiAA3z5",
  "key29": "4EPhQXRurDwRBsZx4TXLfeq1xyscqocet4wxxurcZ9MBATk95Lkvi6bnwqsNAhs6BX37cgVYBtQ6agnxgtDvV5ZC",
  "key30": "5YTbeZQbafZivbHGvK8C7dvmVQX9HKmDL37h8P11zHLsvpAmER2mNxjK4qRJLJDM7AGbvykzATxB5cMNTao5SvUF",
  "key31": "4jV4UZ29P1B71ddDUL5TGJV8JaM7aa1qoiMobaAqiavmubCyn2T5wy8ZbUhQxVNvcUn7XcYQA3hzYWVwBhhxBixW",
  "key32": "2a22wgi7KK9M5qdEnzkU2oenSTX5igo1PHFJUjUcpuL2R7c5v1yyoxc7bsZ9Qgtb7UYhdKBCYHhoqESpefqpLv2R",
  "key33": "2SaAT53DLFXRHoU8yw6mdToDnxAzeCaMFMCS1nCe8FJfbozyWDJuSz9y9oQaWcMYn5MyKBuoAgbXaEW3tJZJbhD6",
  "key34": "477BYeXTtajXd9oYAHk9GEE1kDPpQnwbbjVJaJX1muoLaucnrVTXiWehnV6eVZTWeMYMsMRTYURHd1gqhgtY72rH",
  "key35": "d9cCcJLgBRHUtg5umELmXC8o4HjgWYyWHvxVGt5fvEUvuqX7A6ZUtd5YMZpX8SF21J86uvwnm2kEu2L7zVJJYGo",
  "key36": "2s2PgffdJhXporwynhRkU3SeLGH7toXBEk8Rc9wNkYmLpRz8FVBSMYEZUnr3xEsFGvSJ1QfRBAD2YQ47sVYZzy8B",
  "key37": "5v2mmtTMdLSbbvUNbn5eWJoMbo3HqDq2XfkKi6xFrRNvfh2U9stxoxfepo1DTdF9HtEoy3xQ3oALWjgp3SX8wzun",
  "key38": "2bGQa5VoSKFdf5ERyrtJC8pMcmVUqfffm92KonfaKNcQbTvq64JBb5CTDuNTK7VhdLfZBa2hiV3NAuKbdnpZGj2e",
  "key39": "mF87dvGTEjt2XgqqPaKUcVVE48jEhmxafikA8AUQvqsC2hWQdE9yDR4o7qJUHCCqpF24RCtwDLiZWLbmukiNtqb",
  "key40": "4gxUAmnE52o7YdCH6sBUP2cLo8iG9nEfYVMizMUsCGZFTY7ZZyXGNozUiLbL5T43sogvTRcc3P3pNEYpf6q6CWXh",
  "key41": "aggi9gHi2XdrmHKG4EqoUZrNFkobpnyB1ZzvqSrNDvmG35LmAdeSVnok5tdUQSxyNBS445JNgY8qPpDwxBWRBqT",
  "key42": "3U1cCjCVchdd6ysi59voarXUAWKNVtuxu7DyjbwaN9gNXWycA3iTJTwcZ8BmNp43a59ub9FoQWapVyYZRb4uWnPn",
  "key43": "3EacWo2ii45yDFc6JN65FdYz4FPn6iCsC76a1sUfgcorkvYg5YzSVTDvK3LiHhopi8wTsgwEr3HNPFB5kTqv5u56",
  "key44": "3TDcoVvUSyePs7XLzi2xd6MB9iocFzcWtvzSw737YcLLZDrnd5D1uvUzcGxKUC82fn7X8RFNQBw18XGCJUuQNpDb",
  "key45": "357S1n1pW2J9PrifheszSUuSzMynwWyVLU2ap7AiEpW5q3srrFxvYDbJkmaczHDP4MTGGqViDJRgLzZctN23DVGv",
  "key46": "4ZPyibPzxuwgxWtb4WK14pSdsnw4nFMN1j3xGJ8wwrUYpXpH87WSDSDfbnDJtcngyEpGWudje3bzTvehxsCcgW6V",
  "key47": "4VrBzb576zZa7L7WAVL75mcZihZodtymUbExi36EgLiBkbX1SBLR1Bhe8udmd6cU2jH4kEPmYZtTtXmAazZag8km",
  "key48": "4mLtd8edkp71cG4gwzaBe84183T4mBAoRGD3xG2gcqQd864tbUVBNUK8Aged3N49T2mNziSt8LpiyTNhmpFtgFcc"
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
