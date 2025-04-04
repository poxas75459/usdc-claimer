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
    "5VrN8nEYMCMLp8LCLbLy2Lgcc4wkwiN9DwLha2Mati6Yg86C1oEVUJ6JJPyMDv9AxnccVTVNtE5T1brTryhxDbhp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FDeFzpBvE2PpFyLDqUCEE2gyRJJMpXXKRzzpKTj3b7Mb8sbmJY9RhiouJZ7SpPNmoKSRxwkNshMwHBtUzCpohxG",
  "key1": "4fBpt2v9DZoC2KXAfga1P128fgAjJ2LgESRfPTBrhNton7qa253XDF4Xnr5RaKXLjysgkxHXCJMrGdSpMQd6N14D",
  "key2": "2abERTgvYPmyTJKdrJU3U5ZpaDGyx425GiEyDxd7vio2WwGcCnPc8RuNM6oB2VdJhLp31tBcd9zSxcChtsiyyFWb",
  "key3": "56Lexkhfuww3kmUGkgdsTdDeM55Gu5BCfsvx4CVXn27wxejtDzGGHGRjhupNMPG2QSkhWxCkXgVfc189StqauM8L",
  "key4": "3QiPWCKSqTF8vaa4fug9F39iNer8MKsQqLJES2i9UqS8A4szoSg9vUjRWdXAobSR7yQC9dsps2Y1vja9fGwP51RG",
  "key5": "34qESbrn8G3zXVxmwQ9hhpmNWaheH5QtibsPFydWhjXBPyFdM4uS43E48mz9eG7N8DJxY29qV1b5Uqy6eeCRgNar",
  "key6": "5frfKp7pvAGp6K7rLpLG98gQdAz7Nj6dKQMog55mqTyjht5chV5ePpU8deKRY9BbUYo95FGR3aeXdHTUe2eo1J6y",
  "key7": "5GKfxQEheiGsixFqfCHLRtMmq1ucPdLpMbApKidqR1G9TZvKAJopmGgD2neSQCJ76ALXp7MzS65qamXtahQ3STSS",
  "key8": "N43ajqTN6M2sBcGfrEhB4WYypnW6DbdUY4MsjxH8B5ydDTppFKadZ3tUBAcg7VEzut3gfQj8wBEHeEC8nsgtqcg",
  "key9": "5NhDXVCN2ezyzM6QJqADVXyXUeUykVigncqY3YxQPzDFywdS4oSQwic1EwkbuKbCB3KitB4Egy8ueh5ZztiWNuHT",
  "key10": "5C2adsymzatsTkbHsbsBJ5hffZZCs7YpJ8D5UHjDdUq2MuZww5zi8dnJckNvhP6KDjzE8EAuBqbr6sch7Gb7fr6Q",
  "key11": "26Kgow4xk5sLDhwzMhMgGX2osiBaVCZSK5HPa6Z9d7eLfkRbL13dAdkJtfYo9xfPyJG7LNoTrw4PQtGG6o5zSMCx",
  "key12": "4QxHjrAHW7LTbHpMVkGF8Jhsovk244LCUdrxbyDcEuDCagWj5T48bYao3V28XXc6aqrTwLhqH8XkXApZQpJFXGis",
  "key13": "3QwTiv4d7qJwX1G5BhDLB4gcrro5zxDeftMumrVueJmbW2fuyF6i4P2j8o7vbndLqgnC2opTTFcttdjJVDysEVGz",
  "key14": "Ho6M7mofB3C11A6ooLoqn1qW6ry9BNLSrMzEA8mcibJ9DPbheeB6j17KpdaC2cb3pmLzfVtDsyV6RCbBYjjtnD3",
  "key15": "4QBbkkXH5bFcx3qvmRGXN1H95NAeM3ssVKSHy3XsgdfAEDBgHo3Sn3ffZS9KpkRDyWtyaPTtKRdiPE6b2epZgSUQ",
  "key16": "Es7nTfWwDPgUB3AVdrLHTMVE6WknfnrkLk6ToS4GLSt5ZroKwvTk3wc6QtyiqJMa7zVQRWpwpLqjeQcmndB3Xh1",
  "key17": "5rTKHp5hUdsDjQpUhvogwePax3rsDVvUeMcRStEaTWsznwtq2CYTcTudp3JYAUGdS5Rr78tXADa2mAR1sS1WoUro",
  "key18": "31skfZzvdLCX89PBLeo9qSQQBMWajGgkEeahCd56G5CMFDrred1Fp9rpzz6y1ZQWbynjRnvDD4VWfq5BCUuLkgyK",
  "key19": "3FD9ctMZU74wVmG9TPqkzXxFHET6NzTuLvD5S1Qz7iH7EeHUNgNvFSgphfAXHCLHBjEL7zLAE9XDVVRjPF7jaEja",
  "key20": "5nkqQqWXr48wFriQpi9RKRLxyCaBv8SrjbqmqF32ntTTrCn53KpMEWSNhwh6j9Aeab4vmvEPEnzT4U5QZJQVtgnn",
  "key21": "336YJQ7CRNW41NVFofjDMZZ4sDFyAxuxepvkJux3SityLMWrAkqSS3G2meDY4Zd1ycs2C47t5pu57HQx5qn8FXu6",
  "key22": "3BegYcc8BWRaYN6XcPLNBv4SgktSnd8s7ZRDeCoArVUQHAnink9539PJz4DBHTXnmCFA96X1XUMCHcJNYLiKEZB5",
  "key23": "5TsCj9L6d88mo6gRU3MNwbEmRoM2m48eTbFteR2A4AKWRZbEcdiZXwXW6TPc9GEKPK1HZ7v1CGnor6YuuQJtjBQe",
  "key24": "3te2y48MEP8wQzp5yA4y19cackJG2q78iH3tQh1VHE6xFRxcs88aEvL6acSV1PR1NXDJQUbmiN5txDHkze6qbCY4",
  "key25": "4srNny83ZbKWjnM22bMP2jKZaeswv6bT6xmE8KFutN6kboN6sx79iNRvFD7yPg1ec1UGyHcii4hMhV1rFPneweya",
  "key26": "3B6nfCTqxvNQNtzoR8X3LbodGAvAxT3PkqxjJ9shaQX1B4GpftV6mVXvpA53CURPQr6GPbeAsx8v1E9mXbBPaeLU",
  "key27": "53geMP4TQ1p1541QxpEwDjLwWZtaVmn9BYWo7BjFYbqzRwP4hc6gtsR4LQ32SGbZQA7gW2ttWML1jXxggH5ACqCG",
  "key28": "4VCrTaixR1z9vb2RvvJysqDLqsRaB8BinyYC3DdGsCSb3dvQAD4e6rApczzQ3KaNJW5sV7WTdCJsD8ij8n8SkcRM",
  "key29": "Jsbu9TxNrUAQebM7xeDgnb4WuLbYohXFiqvky3RwgjZgehj6Z99rUwzimkjMzZUVhG5q29ZDo68StKtH8i1E8Lx",
  "key30": "2wANuDVG84Nn8wh3eSJaw5cyYauYaCA5B6wdemBfuzUZ63P2Yw8p81WJg4U4VXTCxHXSpxQ6uFBRQaEQSG8t6Erj",
  "key31": "2yna18dfJ5M4oKabF6ziFKVmAnUp6K7RwsnaRWrKqkzGT5wTuZ9Cpw1hx89nwmDijAzWJKtMbBbKmBKvs4ibKkyN",
  "key32": "2hMxyK39N5Lsv6dgJtzvsJ4b7ZEe1swLC8csCDdideLpsRcGwGD2C78q9PBgXQQQoNb4et5TX81D2meQWsBqYNFg",
  "key33": "4xBetiqWBv16bfWYNVZZJufVKa9fid2vrJnxNWRMm3t9jjyCVopqammeKJSimeszq7ao8t22XqVc5trpXy1VZ3cA",
  "key34": "rpNuGo41Qp5rkwTQrJRkSu9pvrhu8zTqdNKjGaswcUz2gq6Wa31daxqUVWutR8F8ZykEAUzEJFtKB3oUc9tyG9t",
  "key35": "2dvBTU4JLYj4B6S5fyCaSpEHuTWUe7nd1iar5SRZCFTbU8ZcbRkd3qDsWZhac1KCvvDVHeCGGFgdvi17Pwn6iPqJ",
  "key36": "5ZJcM22yZsgprqmBHUsppxhhmatk4K2o8WgCGg3fWCHJ1BRtFFpsVVyX3CbKvmtutBf8ZvKGmk1BZNqopBnzDXMG",
  "key37": "2ueXcrMDCDNRrQF9rFEfqhpteBYVAiEnyXTgYjvqWGRcz9FLigh63XbCawAUWvnLXVKZS8fcQzRireykVZ5kJjKW",
  "key38": "5ieXJ2PB2sNa4wZ6fb7VnAYnjS9NyscQ7CJRV3uDZTVX8fMr636qT1DBb7CNtpkWdKf4exryVFo5JMDsNeV7wtAU",
  "key39": "2ciBW5pwmDtLV2igtgwcBvzrJrTMEGtLNQqCLVR3x3nZmGMU5yyQwE4iXjWpmkULo7qa1BX5pUKuNA7D6TU9EqH7",
  "key40": "3ADi1YAcuXDW66nbFK69XwEcpXjYQ7V56zXnGmhmKjZvmLX7kvTVN1qKZLjKmqv2eNaNBjGUh8ZdDcdeNEeRRq6Z",
  "key41": "ZH9pZQnYKpy3A6LGiVBpdwnb8shy2fe8meSWtFPH8Q4EJYUnCBCELPMD4Mt3eE61mmp38F3shSVgkhw8ghEnTDt",
  "key42": "5WffaUUT3v95FYt1dvVQjPycdJ6vthoMrZhEART9CZg3eKQtB51NPq8yQuw63oGRoszDqtNmrRSPDozQkVJGcumu",
  "key43": "if2U3Mw4pajmQrAvuQYcfxj7Wu134ym3qx1nfy66BxE5ueVCnNmTBFcadzmR955BUMSGdTqa4i3eUp6eAHZK3Zh",
  "key44": "5kK3dbVtjoDo3PNHeY1eLbP2P4Hm55Jr6b9dGyaNEF78X6cErHADwbPzJv9UioCMqGmM6VHruNtn2gtCf15V1iaw",
  "key45": "3kCk8zUYzq6LuUKPnUxmJvS3sBS6AmeB6ez2yZBGajCsVUzGyse5QYyN99fVCudjnKbJdnoYoTDGqsHRJfPXgBww",
  "key46": "59ce4aeTkq81yGA4cwXV3du1nNz2VZtn4zY9QdVWLhHGrpEoGpMRQHTABQsA4vCewGnTiq6tcGhKQ9jg3ebFg3LY",
  "key47": "2m3ZNDwgresVyvN3CcQ6kAi3w3ymGqQ3ni9LRn4SzzixBKWddEJLQ9aTBhwAhfjmuja3tfkXipDYQBmMFiciyuU6",
  "key48": "4xiDpajReYGL1ztuUVeQm6LV5xqBxHPz9kK1SceSwHP6drUfavrWrGnXwURSQ6uzoy2W7Xq8Tpujgcs6yVSfDQoC",
  "key49": "zZQ4Z7WQSVUdFG4bt3HnbUzLxEJ2dEHj1nw1SMDxBAwpit5jmcH6CX8cBTLPJbmqz17UdfnnmjU9z4vTzm3G7gx"
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
