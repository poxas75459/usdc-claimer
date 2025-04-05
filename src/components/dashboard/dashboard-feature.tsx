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
    "VnZakhZJb4kYPmaeq8K3we1VdRCKDwvtxfh9WbBEFLUhWifFZSzvxLL6eP4jHok1JpssVVCKWRuEat1QVMjPhzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D329CPA9P9h82KaNeR3bJLjA1SJ2aLobA3gLkZQ6WPTRbXJchWgjudA4UrNXu2dE4hnanGx5bGgEAchDkewbXTm",
  "key1": "56r9zRDGmmvMRASwTWyyHHzXUeJodJAkw9i6y4agMdF4eMjS5KtinedVCKdjZ8uTNcdxTt9SZhwdqDC1eNuFRQLV",
  "key2": "2KYdewLLNfGv12Bs4n6om7VWxwAHT2rX9tmWnzgGNQCMr4FXW4neNJaB34XWgt4CuJbJCTFZx6k472EcbKFeQTp7",
  "key3": "4YwLF8koCzBymE8KocUyKbsJBAbSDxGkUAAogyV1rnQEoBFezJnHXgtorcAeEtgik5vzbGQcLwJr4iFRvaTG1cPS",
  "key4": "4dJhPirCme6P2CG58sbbt6uozA8LXL3m499GEMtY7Ub1Ca4p82LiWfiXqtoMJGx8v6YadGhThDxhfFKhBwhpp1Uf",
  "key5": "arrowE8kQ4v6B3coawRfo1GHpXiQRNKRgUdbaN54XvFYBj5fDdUR6rzP5Cys39ip87xd228qkZgDHX94WdGzKrM",
  "key6": "4dV3jmZdtwdXJF7aKYzkftZd38RtqXyEh3mZZ1qazZ7BafYueyAVjTccj1zPG5cFgFj4sHvsB5dB2rJRKtAmEaRm",
  "key7": "344FJiBb65UVUBA1nVkMAHeRjGEUn1fJnHiVUcid75GvBtPNK5i2C14GpgGwM6mi9yGaXQshp5RbWLdynU4CNTSN",
  "key8": "uAeX817vWGmkWemcXuGs8tirNeBh4Da86KJV58i2UmtfpRdR7MSV3KD2FEfpqahiYcJBtZmjp6xqWaN9TRFmtXE",
  "key9": "38KCy9oaSQHGXkaQ4aaa7d6TYoHTD1mEaPfvGEGthEgezpZAC7bYUP3cSmZzLRa4LB6HguZqcJHGyKYMyAC6UCA2",
  "key10": "5hf7DM4nhXn7PRbj1hNjiUjJaXGTCvPXBie4ZW2NsYLHUtkdLEHjMMwsskAhSeyRCPKQo5Q7NPB4aTAFb7qXU8Lq",
  "key11": "2MW4cxqm8ek4zd1tPTj1RDUkMRtWc5zsDb1B6iqsgHY5z3Yro7oejs1YzXECGVWaGZS3wGnsmFTThzwZVmwCUNRr",
  "key12": "y43LVjjNzPc52oAkgGqsxnsHBhro8Ft6eeniWQH6m7NShEyAB9Jmg3zyUxSCLBmt1BB63ZHFfbJohzVUtitUkm9",
  "key13": "5zxfonisVss43Ltt17HRUhMANCVCkY4Ty15sCCev6UkW7JqE26m8yb653U3MDz2BUF4nCBbNuLicBeorrAtwsSMA",
  "key14": "5SmmqZqVQMpvgdCfCkhjdh6wbo8iPkGbUECyGd7tf6qLFemdFRJA6YxBGZrsKXtiBjHS4Y7X1dNozd1TDGggpobX",
  "key15": "5froDCycJhjmu6b1kLpErWS2Vat7xRv5ytN3qnpPDZVSBmgoiXC6t5gHxvjTNeJPTrZLcnanv4MEerjipX2oRy35",
  "key16": "3uZ7VTtTzJzu1t113XpF92vuhbUjwtf7pu7eMtr2c9pzDqnQP8x5upjVmmm3dnwT7SF5q2vkKZbjrWtibSEvCeep",
  "key17": "3qo6v49SQucDdbdGurytGBMkgr9qJaGAdTqBioJM7G5kaQAxpoi1f1UMg6GjgVQ9c7rdk3W3RJFZcmjM7MGM1fUu",
  "key18": "3HuaNSpknRQQLB8uitYj2AEzzTMKsD7ZJoBpxzb2QRT1FHQRr7hfi35b4WX7dQu2ATqBv8ZyGvxxA7rmRxyeeGCS",
  "key19": "ZkXFWfugiG7Nz3nzi89poSUnN9QohtFp7DhGhwdyk4kF4H2QAxhUSPY7PoAM8KY2xPq3mHN2x7UtnpYip4PqcpA",
  "key20": "2FsZwCoQ3AWqntyGNZ2YPVKERbfBvpge2SSCvwgChNHL57JRDv2ZaK4vVfiQQdBfwkEBvshPRytjDXDBK1iXftW1",
  "key21": "674BVeF5GYVkScaFinW9RCuPjkekH9MGWLHf9Vbs4N4HFRCsVGy2pGSVhRC863kWWW1iTxdU5x5hbfukBGxbpdqH",
  "key22": "3nUt61tiH36S8qqeijhSPGo6seVrGp23pZ1y4C78Ro4RDkqJdDjtY45cGSehQAmP5mNxc9nGgHoWKbpS7DTugaMY",
  "key23": "4H2dmBZ3EjTNy5DzaiW1cAi8JNAUWn6ZVZP1FAwTrFW1hAwwdw4mqXwiPimhpbWZNdQifvDKrJRwG52yk4GCewj9",
  "key24": "5sDsRNz3E2xsTjrXNBokbfACRb8P1Vqgy8J4VzvpmC4NqrCUncrWh75GU96VsyntMCeKe732mUDfsaE5w1R4j3wi",
  "key25": "66zG8tdX2SosnsdcfuYNgzDd7XN8gXTPLhVy5qohAhaPN3FSssAb8f7YTepV2J9DK5P4F6FLFor4Ez6EdzMdiNep",
  "key26": "3EkvScDJnoQ3VwWJAGKsmqZJTpUUqgCbd6SjykjyCykzY6mpm1wbstYyRooHabS1Lk6uqGhYZaQTbEUw81CoY7RN",
  "key27": "pYFyyvCe6u1uASsYAtdAMXX7JJ1Hxj2AXE2irpPNEbvdHyqEeeCjewXLCViNN3j76LKbHU6VY45AXvhsSg7jC85",
  "key28": "5RBGQmLHmgpmRjWAi3gSLJu9hwbZJWnHvLWitfb644FtkPKa82i71W2Rd491myVAnrfzTgRxnMrdeA9ZTEAkvdwL",
  "key29": "3JjYh5fMNfvgu5t2xrqyShQmU4yP5v5gn9AAsLHBuPe3xQZBtFwiGMpFZTzsXv2FyVpPhyjtDwAL7MKgFkWwvZzB",
  "key30": "3SrcKr2TDzfYNAG5PiGxK4LsQeWidq3JEy9CS7U8pYcSYSU8CAJ6BaPpTMzxjLE2ZqaEbqRPsYDS3EwdWzY7Rhe4",
  "key31": "4wkdadxdcjNSyynQ4QdfFe6X8d23hGG1WeBCSacuKsWoDvhrftiP6TdmJQjrPRKkhMJ6uY8z2DPUyYyoGGMRbKzm",
  "key32": "2N1nqBsJ3bCzpFkmeW1BzmMxCXmQ5PeoHzaNCok5J9yJRYc4xYYsiKpkKh4Rsa62FSy7cjQRspHetCVGBPrFEsbP",
  "key33": "57qH1TY1zGeLBoVDe81ZL6dzgg5ctA3oZZrdgtBLEbWBw4hrgHFFucZWmHmvg9UkUmPbvnQ6dNqwriX73rwxC5hs",
  "key34": "5zdQLwzANjp89pCo6MSmdN2aTCvwPpvURGJKBLsrmdLze9bLu6hFyL75GRyqT8nZLh36U4KgCjKQfoSJ1YjjrgNi",
  "key35": "BZLUqWPtkC3QYjbshSBRcV7HsTY8cpQfokSZw2VHCkz8ZWpmwba76rQWUj22VnYyAKifo2JR5xEDNJbjjoYHkXT",
  "key36": "2dh5ThQzwivPGqki2vUWvCqt2fcG9zxJVWTst9Gkn5LUTnAzQEse6rGrD4gskHbRJVAHYH6bzn55LX7k5j8vRBZ9",
  "key37": "4ay1XjWWdUKmdFscRD8k8QvJDojYrRCBCGQaFP97e5G3cfJKSbEZ3j5gjPakJaPM1kPM6RcBVXTeVeV6PU9TQLV1",
  "key38": "zkdXkk4BGNvrT6VHvWZgzuaxqwj7d9APLcNkvWCdrbwf8MEUg6NohKpbGWPbBFTiJJMBdefLzun3c4B7CsFSuAb",
  "key39": "eXcW8Nw7RbJ9E1BvHYkB1FmHVD7gXaG79G5e32wa6smgw3L7Xvq91eQrw3ibrd25aB98n4grbKh5vy4HqsAMD2W",
  "key40": "5octyLHWLWfmyP6BvEZTee4Q2nDiUUWungtRcDwdSphfEJJVvVmnBJQikDogacsySa7zv21yEVbnj5pXYv9aUZ7c",
  "key41": "4oDcqb2StkpWdrq2eviapZxySUAQAgjqA8yQwb38avq1jfKEdodXX31Pr6RyjqqFbvGvwkULvgwSFKMgyDghyMQG",
  "key42": "4RB5C5PCVvBL7iUbQMtvxXgq4zttPtp1dDoedofVa85rWHWsLRYKXxP9qhVKYHxyjMGfqHxH73Gca2hLBQmMUKSQ",
  "key43": "29YkYSBCkmdN3PDVUU5mpSTEgRaLN4KLinqFbuqMqpcuTmZHYi4bCCyK65WbLSsKKqQQ1Aqu7UQRW3guZnDqu3gE",
  "key44": "5U1RQ9gcYCumxf3FCw3rAYfU2hnFLLZHV38pfMVH7rdgtwjpHexVUqVVCgEofZhNA2TK9YbQM7Lk6U7pUf9i3mTy",
  "key45": "29tTTUZGJnME7j58rigcZMemPCYJaxqtRrGRXRPTX77y1qJ362prV67rF9drBEJGas2DcXvbqQrx2qhLJmEoHc8T",
  "key46": "5v1gD6ppv2eV2zgYFUHxjYogCddt327jfuFzzXUsDeHVMw6GA2v4MpMN9RD6iycJshzcvuBoQ7ktqk5L275dZU14",
  "key47": "59aVPZnQQ11jLsSnFTEq2mPFtqbCXq9u2MfohXgpg6LkzyUCuotGH6WcJr3dK1rMC85YG5pw3bsnhyXi99GV5A3R"
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
