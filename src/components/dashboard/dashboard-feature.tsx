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
    "2h4SBJQgjE2K1t2C8Q1P9zDTbFMnxr4iNP71HDCH2shcYTqsyz64tmBF9fUbJ8JJgNX5wgAtzxSZXUZEqdioLLFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hr13NHePMfBzNzUviNBgnW4JousMi3eZULLUgnMQtTuvX9Hyh7kWrBkcKTTPxJJxH47H4xqXjC6edRKoJDYgwY4",
  "key1": "586fcNnp7fwoFKXkHqqhSYz29r7qYYdcmjBBG2YpeyoXrdAo1HLgKQ9Kj9YrMTQKRVDoVvrS3hnDR5opzfnWWKnj",
  "key2": "5DjNCmuwg3ZUoTgeeSySccmUHovANUQBVSZPsw4UyNECQNTX5bxHWdqNnx84rbRukdmb2NM5uFbm2k4UqLT3LT4W",
  "key3": "2GUnHAQ3fMqvT4htZA8JRPzq49GZ5Bw3HmZB2TJTT97aiqb38Jcfsnx3d4XvrQsnqfQo7s9ReaT6Wqr3NhpmHdGQ",
  "key4": "5JUNDm7cj6KJQ8ZbHKfgYX5h7BJri1Y1ESHnZBNgrKcYkLJ8WZYBe1M5ECDXxo2zYHwDaswNeKTHbezhrR8Jacn1",
  "key5": "2ufbQY6a8tWprohZ4PoBig3QY2FCXbYJ9b4WTFAzd2PH8jJGZwg5p6YdJvcdYcb6dVxRDArjUasZYjgvdAPcGaML",
  "key6": "51E5pEHns7SZPm9NH7bcfZyUtzmLwFEMSFHPVNVhhw1TL7HA7fyQvxGRhEshtEEzYrJLF1SsxVwV69iNBYeuTTfp",
  "key7": "5yKk8v7byY2GRHnRy3a7vh6FDAZnMSejhiszGbECB7GFTZNCyuxGa68QL8ddi2RCCQPraTeMv4yc3GY6PRKQeL9S",
  "key8": "2WhNZ5sb2EHaMPeaNqwUGHrKhfXK8dbNAHPL4SrMitCKqHSvkobBCCc34xTJNmmDbpAbGvDxEQbpvkbrC6SpUtnT",
  "key9": "4yBA4nmCw5s6LQYM1uPcXGWC8EcLuUKKUDcGKut56Vq4y15AnGpWAS6cZ7Y4svhJDUe6D7DGvt2yD2JS9Sz2Twhj",
  "key10": "2ka9VrJcganLthPRKyDw9e77y2nB3ZYpYAzhYj2giNR1TYA9R1ztpTsW87WfdNSUsKLcMQagq6WDwik9EMjHksuK",
  "key11": "4U6LjxqzhFJ4PXxvpcVyiyHJPtAC5SFL7qiDu2wN4BfG98Q83wu6VbXivDCLYkRSxB6orQs6BQxM8ZLog2vaXn4c",
  "key12": "67iKJj44Vd6FPVQMDTJShY3RYScN7ZJkGh9iFR2STcGB5T5fgNFSk25EtvntZeF6igKZSnuChUY4rMRyMDmfsc2U",
  "key13": "3NWcFHYBHdk9BDz5Q33woeFUmYP5CmMLDUvdZ5bU6fCK6LmRpCmPGFs3BNGZAdMSxwC97yVveF4pqxQWMGG5ewdv",
  "key14": "3vtjBJYMsRGurYcdNjoEe1zkV2iTDk8eBeGJokNfE1f1qLXv1QxvVSa483Jowts5UGHSLpkAmaHgPKvgaAkW7pTc",
  "key15": "5Yfu8Dwd5nhJi8QYAZYcL1yn2NjKZSdTSXzM7QPHm88v592JirSkEaLsmrqEGvRdzcpEJnmkJ2AEzobFEK4G5bHD",
  "key16": "3F1LrxdxHnqUJwp58tVqZVyskoYEnZiW8UCvwh7f9jjBhspXweZqWSwgNnEabG3QxZW8KGQafstxyZUqoQRAtvFZ",
  "key17": "3idh5DQVKq4Fpo9RX5ZGHTLvNjo6sKD85aagGZ8fGsbYY91KcX6ZFZYSMmk1y6f3Pu5ps8TwvJepUgv8bD9j8LJg",
  "key18": "7MyPLcuMZciK2Pgcg8tszciYvroPstXVQDDFvvCQ2beUWZFqWpjsDA7UJjWoUqRa4975kqFSLgTZ6hBtvgUfCaY",
  "key19": "RqPWAaoSrEXiqGLhbbebmTZTNKmVHT6yZti1Pg5f3RP22XJXaoZPmg8YaPx1u22dro87nqHkYYYzJXrMTTMggKd",
  "key20": "2ChPJ6UGTxjCqKfBKP5RWu4h8ocWsMXfmjeeAfspMTbCuHbiTbvQxJb5sVjECqq8TAeLHsrN1SdDuCiQ6Qe1PmMj",
  "key21": "2ngo7UxviyXyfftxK1BP55s5MTrg4N5SpnvRCdpibjmHx8rLEWkZXzfhaXwKsuF4hon7R5nQvGwE5gte4wqePzpm",
  "key22": "5XhjY9CKhUNeY7DGEEyog3PuoW5dWnJdgz9JtA8SJteQ3A85cJGVt93HBH9mLE6ZJjpfTLZNwn6BFfiGkab9KgwC",
  "key23": "3BQaWTQdVt78UutDQy1TKKpSmMHSE8TQy9qEgeM5vw8by1rZgqjcJuq2eRR4zwhzXefKZPiVmU1xS9vMbRDYQS3g",
  "key24": "4CcCqbmR7J49wFXCvvTZhmmY7mg47jTNW4w1WHEzAKMVGyMeENUAp9ofcPmimQ8KK1YJVDN2eLtyFKWszBBB5bH",
  "key25": "2TPAysiBBnQ4iNeBjDiYT3sDQNJRhBA1J6eRKp9TJKSUxq8vxeRUMWcPdGs95FriZapARWFtNHLEp6epMEwqfnoN",
  "key26": "noaBd2JTeit6w8eDNeXs3aTBFZXEFxjpKZi4oy6JPxvDTpAss9rXeuWyLeWqXEPWzK13RM3U6HQpqDH1DjV25uL",
  "key27": "5xuksXjMpGS5yxyy1C3GRxHCnf5pPyU7znatb78bP6KeYrXq8b6CNPPE8mr8W7PJiT8vcvAv2a7eETTzUH7Y25Ni",
  "key28": "89i94vjhL5TydL3hWhBzz8rJYXJb2gvD4JKfzVEHwh5pdeqNxZhozbfwGeivhjFH7wSRXoaNnj5vwBvnS1Jqfo9",
  "key29": "3t3bp7YzHhp2kEwnsEjkz32GcvxGLfPCcyCvXU5Tgd7EhZKwPNzHtbfujGuh1r1wJ2k4G2KCS3ZDrUnVXCF89nEZ",
  "key30": "kZ3UuT5pFsDAYrRxk9ier6h8TM6fk1F8w6nzQQtQJk9TFcn66niEcBW5hmapoSKAmGufwWBjxrBQFuNR9LxTbbA",
  "key31": "283coqVDUqNHkDqegFGSwt983XmDxawk9Ep82RJYAAETHMit3sWnWvAZcX1SFqc49P7MuQMV69NTH4V5bCtucLjL",
  "key32": "4gYTw46xTbbEMYNCg93sPqiGurLzGW5R8mPLwgahcAqPWWEKZa7M5NRiWwRuDX81aawTu1F2JrxZNwiKwq7ZLuH8",
  "key33": "2qVD6bN8tK3zB4JbPCpw2uJhf9j32U2fJ74f1NQx9WgxQkQZ4YwJodJKJKkLY9RTM8epV3T7Rhg7BkqRgn6ddCB",
  "key34": "5mGFuo4LwtbGk1TerNBTA6wXYRurxXquN8ikpPo4sNZsUMnVCcGkhYp8ARpmfhf61XNpEWiAqRjGtGuhrNQEBCW2",
  "key35": "2qLW1PmHmJfdzR2yZ35wdh9cwTV8HnGNYTifFvreQwBfdgPBEZVWW9T3N6LjxB2Ae2EWKG7TFAfcaiHgwzaoBVHP",
  "key36": "477f2Qv6e8L6yMAyJBRgYsk8mw4A5gxmy8ARL6fhayPB3C1Ts9PuLYwajsgdnabBRJpZMKRg2VRPuPVfT2YHnTEe",
  "key37": "5Jz7WoM2EnW6MeHc1fhwaikxDJfBxE1h1LxE8mojDy799aBD4U78gxeniGSG3noabTNNVvLXCsMxDZ1gdTLyera1"
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
