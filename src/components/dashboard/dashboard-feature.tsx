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
    "3w4Z8oevaVWyhY1FBGvfMNoFu8omwEqj3xmZZ8iHgR8EisKMkJxBgVaLuYqVRD5NoUhFfPZAYH5XLm1NWmzjnHJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mC9Jr7EjEqZMo8rBxpFM5uZfZMpNUe4hQXKRZtVpiVnQVtfz9fb7AvoetRkVyexPChHSYskLyoDqZstFYozYvjT",
  "key1": "4X6qe4bJ6Z8FNTuuqPiTmLeXHWZZinsGuH6y77F59JLuqL8BrteBqM5GcL1qdo1xRuDuXHHqpBoMiWUofww4WW7u",
  "key2": "3veDEsxXxNkWr3MUVRYjUcqHJqgR2xsUhqtJ76yN3pvHDJKEJ6mToTNkpvNBvnJ4mB8WbCqB37jH21S785AneoCr",
  "key3": "posr7CmyDrsHfn8CSEwEMe6g9kFJL6P1PgNd5J2JZEFzNwkNsEKbjX6x64ZbgBxbVenv3Lq6gjeJ3sGcvSnj3Fw",
  "key4": "Pe4LswGmoRecNVTJ3t9FYPVGaANNS2ezb2TTw4dzwGWZvrzKRw4VTznycEEbX1An3fNKjsANWidkJjPACRVeuzB",
  "key5": "3iUeQ9VYg185RUJzY6n27RPHe173un5WQUNN5abxH1n4pCm3qecxASeRkiLmPkvbYHrA5Pe5LGQysCGwDf4Rm4yg",
  "key6": "5zUz9NEjLg458aHXtBvnSkgo7wdnHKQLFW44kSWpaxtCJzjoadd9tvjeHLVHvoE1wAj7q8aK2rJtXpxtDzaNUSCF",
  "key7": "4j65Gx6hAEz88QtcmWB3QZmSyeWQ9Bes2DN8S8cJpZaYyCv3jxxd1d2aRPxtvypcaU8WpAmJCjUUZmaCeMvBUz9P",
  "key8": "3NzGVmVN4q7fsJkqPVFjE7dB6UM7JvHaqsWp4ShQmQnmLVRGiTK5WVoz25reRzfQLJ6hTFeGSQ34JHcgLqEKJXBC",
  "key9": "5kacToQUtqP8AmEez4pbJWg9K43Jwd3g8MZdumPFMSqQrHhfGs53xm5KA25gZS3CFDasD9ABrr9UDWD466McXhsn",
  "key10": "2sBNsFQygqhzp1WgnosGCpnqVpwia5ZKrgTdS1Lep7hqSc7Hdz4dkzqnYH5AzZMEX2Danvx8TSMW1hMDu6nBYW5P",
  "key11": "2DSaGwh52Ekw8Tq82bqqPUGNF3Xmh2ioKjKvvdMW8vpRCmGeYoRQfaUXicqxxkmUGkR4nbp4dvnHL3tBiMY4tdp7",
  "key12": "4HfmnamRKBm5jBLiGh247x8gKrfECfHaipfeC91WVh1LBrB4paTtJeLCoz6EgykmCPJWkGtj55TxwoJo3Q9pi1Er",
  "key13": "b9MXdUvdJ3MbCSVtGMsSpZ8m5yYG8MMEWqXqdnCw33T5FQvbpzq1oYa9Rm6hf2f67r7KBJ2jgvgTsv1LTAQo9GD",
  "key14": "3ZCwgypJX7Yh3rNmZATX3CLPHkbotKCSTBWmPT53sRKV3B1H4XptUVXnb4TomjaC4KUoSvgH1CgMmvhNvMTLhWXv",
  "key15": "3zyfkfXdzcWRFCf6s7q9ftFVRTmauwezxV5QsvFY1hbsQjGrM3rMPGEPMUT63jhyjRJxW1auQc4KYKrmeKf7PpeJ",
  "key16": "5U4MYgv5HqLkbXhqmGruEEsVSwodyP6aycu6xarLTVuwZDTGHvU2JLB7gsZoYwRzLTM5AsKL9KhQSkNjE3QgJSrG",
  "key17": "vSEAgsaxjgMPXAcZ6mdGLC2jeVRo19vehfC4UiR7TbK9hYXiQ3655DH7CttQuxSpZn3UJn1R1mwUCA1cmh6gETZ",
  "key18": "5JP6KEPBdyZLw5EVarwFuqyniPAgksvyTE4NZiHadt6EDJpw8ryybXYARcXXtJFLpiTVm5hAkHxwTZ7gEqwhMW2P",
  "key19": "63AHUVQ2t5FLx3vtdnP5BCXaL6nxKmsEWhfB6pa6dtH5nehNq8pBVQEC9bqwcEd1cX6QFjGCvwunVLkSzcEMX7dm",
  "key20": "4P3wBpCHuf3zVbM9cG97adH4uW4WwmMEPA7Y6F4NShmpFDR71R8vnPnQCQnmJjVtrwGkHYvASLPp4Lh7FUJycggH",
  "key21": "4RY1QFzxVScV52oK1Li6ne52CHKrwGsVwkT4EgXxTVHfUnG3ovJ6HkuVkWNvP7zaeMvJeSM97e9n9W5fuZwv9K5N",
  "key22": "58SRNXL3oaqwDi6D721o5THbtu9joffPUtUo5wSKchg8WifCfxwVG7wgQqsPHRNzZ2t68TnHbBJGLf2uUD74JfAW",
  "key23": "3B7gwjm97dCtghohSnd4Vnqsy33VyXutQqsES4C5tqcvKvpWKTrM6cXMnKphMkvUu2s4Ldsk7hEweb6njsCbMW58",
  "key24": "KmH2Qt6EAUqexAyqYMmSCapZDG4t2WGaBcPeGzB1kuMmRD6wj6bLdS9Kty9wnobJk5qbrsqx5zNKR9Jx982vMz2",
  "key25": "5x4R2yb1agj4o88MEXsgcS23UXWjGxrbFjJ9Pz6YqpQXgtzBXoVhogYaTvwUebPnXxFZr4deiMJacVP311Gmdxdp",
  "key26": "36xEWg9Sv3Jx4zDfvFcFnchxkLciFcotsf2JSW7kQD4Kv3hTZW4A7GMhy6BE7nBv9M1vb484m3PovaTYYZtzbZ2T",
  "key27": "4UQQAcBHX4aQrxhLhe9tQawJpXLjKTMiS17ivzKLo4yopWHWUg7rJE1GFMncdtq2tes8UeKWNEEGNA8AarXPFe9h",
  "key28": "4biPmLV4SuzkMmpHcULhd9yWAzGe67ynvxrh2hC7vt1tY7NuFgSN6Qvd4LuC2RH35SHSAqNUG2r8zoinV9uG35J5",
  "key29": "FKFFJz3QqwLrnw5HmKqqT8pM5836gLDY5XnNixpYoDY3cVMLtBNojhjfTWB6EKdRGK42DMKPJYUeAzvuPAXKs2D",
  "key30": "4zKLrm1VHXGo1HVJa8d2rEedX2WT9BXSY83SYuG9ohtjewomWDBGUTnmfQUsYWpWT5y5EMNpukdJ1bom9Nq5mMei",
  "key31": "47T4ezoV4sZMwbqHySnPS8q8U5HgRWnMCGedTqwdLxX9BgNUtP3CpUDyBTuz817rBFtiDafYYc2UPC8N7tud1sv9",
  "key32": "32eamKbXGrr1G7bZPAyr4GkfN2mKvMxeEHJDnotFUjm7z53xdNP6jgxhgTSPjuHMHH6uPsPHnVWoXZBQryXDNvRB",
  "key33": "s5g7Zk32dvUVnLepUR7sA6ywxroQCDw9oF3n4kwKAvBASr1Ysv4J859iUDGtVT4w91GWPLxo3cArVjW4aQ9YSjg",
  "key34": "5Nss5ckQy86iujHBVVwGGdHRG3YeQgdXeLteNSn5dAcWHmAH2NVxiG4BBugjsHFP2Dhn4exvauBiCoczyD49JiJy",
  "key35": "5PR72XwaXbdLi4rtVh9grtmj2VNhg2Mjd3SAdooWKDmiajm19qwYf9yiM7mDp2unmDQoTeNbqcYshGgtjMPC2ETy",
  "key36": "5BLUivZ5RmhGHZXijZLMvrem8sakksEY7gmgW9dyKJ2tpsSTFJNehbN6AGXLy1vD6PcFYwHPppzYn1zBSreYkPF5",
  "key37": "5SG3xRWdCNpbzxwngPZzrGoMX6ukzSXUPbN9Uz7AUcURpbAj5cHHxg1wPaF698CZWMGKzpPS79EA9eAzLsZwAYtK"
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
