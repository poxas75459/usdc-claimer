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
    "3ihd4oMCfqkHBL2hDtt1cxcT3T4T8gBDhHY4TYsH5Ea55AZCEMTfFruFRaZJPfu4XZMQVnzNwA53EErEjMzVa9Rb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UcVoZLksmS6v4csGTq7GPfHWDNERGBWMv5VmFRSMTBZfaCMPYJQesWEqFDDN4w2jwe5YGYU1vCUKdkpyt6J8eSe",
  "key1": "jHuMfCVYHVvePRNXojbDGCdAK7XyUSgXcjEvwugGw4G72KR5XkA1g7V8fCLhbNLfWvCMe6uS2KRHY1nHH16is6B",
  "key2": "6mgHH7ZMfWiqsxmtPF5geBnen5sQMWAKAenhaUttd9TCddzVmPFAFUhfPk9i3WhUZGRH4USZiZFer9kVZD8H2Um",
  "key3": "4Wc7p4nCTq12jwJ6g8tYVhBHDj4XyckVHK7hoTrtWFJrgn3Vh9dWodMsohnsY8Xkhvhkj5MwKHGHQg2m47dwznmG",
  "key4": "5L4ASyV4aD6CSk7ZF716Tjm7b4G7PpoWoF8BCz7CyV7oz5BG7DW5Q19DwuusNStvTdizaKCpV2kwzrctNDj8nzyN",
  "key5": "4Yd8McnkgbVc85pHo4vofiKiBDzYrEgVHbsoMQYNqpLUfC9e1h8kiWhsEe5SuV9DRDAV8fCP5gz8GSzoQrNEwUzM",
  "key6": "4qXpieNYTqS3UVdvs2hxJpnr4tgPyEZQxjMSc3AZo8FU2JQmoBjSWi2sBvBADDVX361w82bgvXT3icoBwcjSPTxe",
  "key7": "3XJ3RoXQr96QqRFpAj1LaDHfBFAryWZyPyy861Qcb1ph6aTRJvG6Xk1wgRBQ5frMjxo98Fxq6sZd8ZLChqdSBwNv",
  "key8": "2qPgQ9XDUURpNbaoFtSEvwtZ3Ab2ndKzGsDMq8xteUshieqUtimSMnYcGgG9gRgMmtBS4mjNivkHAVHmdCa5P9Jk",
  "key9": "3bk2wFRQ1AkpmQFjmPeRhstjwQDLK5yBwiChXbGT3khP7QBbraxKo35k5bf1dMZfj6dWmqmyASWrKXoiDgF3MAdh",
  "key10": "3VgmEoUkBNexWhA8yPDpNzaf2Qfpw19BhTG1aQpF7vYVRijQbdB7mmjiyNZvt2aQasQzGUmpso9oFvDhD4gnxPrG",
  "key11": "5i7LfPXn6LLsCyD6nmgXgu3i3ovKhXDPtbKJwLDx9YXmZo3Ni8MeTUp9aZKhYP4Py5qaEDJdDJicVvQGLntnvj2t",
  "key12": "2spY4E6kX9Sv2WU7CfGgNANbubU1EMfqGPz5Sv38AtkkkqwMNkXPsc5V6kAmqXe5bajHAvHTqb86DhqN7y4pQwtQ",
  "key13": "4DK2dDHY5LEzCTN3tEdP4zzpjn6tYN7H78gacpdVRkUgicnAFGsYitHJKW26j9VTQ4DbvzfmGbvLep83MU6THJte",
  "key14": "4cEJDo5JdDpbm2bMr4BRYgSxpMm3mqz9Dgqgbx9Nsbi5RzTEF1YLuKBr7JDUBocxxdHryaQG6J2YaXzm6N1FLLbz",
  "key15": "3hQDndBHqgppwZcGbyU3SK49aVHDx6DM9sRzPRGfaSCvYgnrFVx7v1LaKsMrJnJYyHnuScpp57pGBvv6SgP6zL6c",
  "key16": "56ATqsAXQotwn1p78fjWnfnoipEpYbHigPMHsgNhqqtTp3Q9YMaJdrb45XRy6Gy2mtYex3ZBHAiih2HWTeJajoyq",
  "key17": "4xs593iXhvcz3gm85rjJMU2Tcg3CSWEP6MQzWAtaQeRCVu16Rp27h3NsE9JmKKzKNa8urV7MuBQ2xLiBVUBemN1y",
  "key18": "5MeHUNKg9XAY9cDY9q3tw327tj4pNwg8DzEZ6cEJzygnRwaC25jTyCGqteM2byqqmH3kJoRqS1TUb9eNc84HcdWr",
  "key19": "bzmismx4LjqaxVoggRRbARiJKsZm8XgNxG1AJL77s9ffA2sZsjmzsZU4QZaZYMg6bbKSbaGxq8xgwRo6cCn6NT7",
  "key20": "4XmwynEc2Yxj3uLpNh8HSq5Y6ctjwZfKw9ri1DHnBFUTu6uEvF7uLMrtNcR5JUWzPJhwLjdFNKiwJgcyADRERsje",
  "key21": "3fJSvoo7m4b94Y6NiiFPdgauqoNRjVqdx5Qw6X17wRybqG2BEVkefGETyEKTeRrwUX6GXXL6gbVvVpjwvJWjapXw",
  "key22": "3cwRbjLDmxYE5yJZ937DV1BWbEcLQepXLZgTRqq4tFZhibVAFBGfCKSUgXZqtvyDdttWm3RKzt54HQ8Bw6FyYr14",
  "key23": "65B5NZLjC4Tzh8rBbXiQzaYiF1eJJFknWoK5EdJjsXg8Ta6PDNU7r3GKrgNqWtR7p6kbx13dRfqzcG5PaL5s1dLh",
  "key24": "3oGh8YQ1aQtKrJKfjbxZCpyKkV5NqGgPf17PmxW8PH3fzAyuBUHcG2fdfkxjK2uUqrQwm7tHkU45pibsgEYoTjFS",
  "key25": "4t6D3T4AEw89vkH2kuTbsjpw7GJSfuxXxrQhSqkdxPpWthLZMJFUvgXvwJVdkJEksVXycosFtcjXecbvbRMW1no",
  "key26": "53AsbaBmBN1PxYDDS46cyNzXvrYSLw7w8VMAUUv2V6e3CVkF2nkeYyzBH6RwdHhes6HbxbpMd4YUwLCwXMLMyED6",
  "key27": "56SukVXoDPuxE2uJP5UxtJPijeeNiuHqrbtJwD9o8QTtELUHEt8qNAdX49eWQproDBMSVgWkKnV3LvRVfm8eGNcZ",
  "key28": "4dx9hK6hJVkEa4g8K5PVTGasQ5JdqnQiQVxCVipQYzWFZ8rRC1EnKhEWY2U8Uppm5yrLdTqtyRdkPZ3phArcyiqy",
  "key29": "5RSRBFxFAktqbJriUVcMAepbcgXCqY4rxb8BtNYZuyvAL7HuoBoieCBYxGg4UJfEQx3TZUB4TNeoYSjhiFfhtgUm",
  "key30": "bi6yFZzh2m75LN7xFJLg2CnJuWHbnQF3S4vicGguosKo5bvBhkrsnLXJ5YcegbebuX1bA8xYZZWqQehLogcZDrm",
  "key31": "5jmNaL8a4a4GTNMb95CLMVZkZCKsrbRLnZQ9rcULcsE3eNE8auE7RS8VCXaVsGUxGLAf2omMo4TST59BWMofDkm5",
  "key32": "23LHcgzkzNNwRm1CSo8j2BrFk2nKaY7B9qKzPiNuNcfuE1Z2qxsshRWwcXZxKLxWQ9v2Y9KgmVp2A3RBDHCr8HeA",
  "key33": "bkaxmmguk9JcXW6KYzNe5uR5HbBDemdu4JifPkkbQZ7mMpa9FE1F1khDXk4iKM1S2NBMPXEftQMy1KGu9WBhfrv",
  "key34": "2g2aqUY6cP4ZtCr6Kc4R4QEMM83engcvyxa38gcjoSQs4FJ8f1ypRRFEcqgixBXHudvVbp8CHfSZFSNYQVd1P5D4"
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
