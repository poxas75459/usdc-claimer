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
    "33rPqZbBCUWqe5CE2syv8SS71tVDwj9ehGPdaEqpX1PBF7PtGdsb1T9aMidAtqXBkudk2v3MNDmJdye1RfoXv11"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Pp3k3EfSTXNS5SxnbRS28BiNQBS9gKgKoZJvK7T299SSg7etocnUm6EjpzwC5L79VDqUyn31fcprrNKALTGq7ib",
  "key1": "5umT8ufzJQWPZP2qo1cTTDd9D3PzRXuT17Dce6VKXqxdzKp66YQLFCqBx2vujs3i2aeLaYHMSbvBUSoSxJct81jS",
  "key2": "63qgoi2KoMwQWfmcgWoD2MBxuH388y3g6hD5JNWwHqfQwSAodubxk5QojfQBADxBAFpp9Snig6uPo7wqjxMVVLXi",
  "key3": "3wVSyhdqLwMHyHfJ4GuLGvXrABZVQsQ7gkr2qybxfBRQb6sef5zrjQ1r6KdQnQK5YzqPZ8D7X32tYNBCEgntNKMv",
  "key4": "mSrNjCJ1u5C72tqtnfFLAQTqiPWp2SG5GyqSBY6xXcrakpUFyzB715TNQrVZnzQftLpi5BuBhFAjCaMe9azonXA",
  "key5": "4ifSfKKLUofpnw6YAvMTMkBgaC9dycLvv9hSrbsgdKrH2BvzbYkAoNvajDGQEzhiqe2Mhecn5r35xW43x4a9XeUs",
  "key6": "ZTzcboR5A4KU6y1BZ3ktnPts6CjkUZqvNb9z7TMAVUD5VYw9MvcVLwQSwjvkTF8KvbUWShdkKec7ECST4i7zZS7",
  "key7": "5Rg8yxt4wHvU4CLN4pBQtv6Mfpiw8JWFjyX7cSAnPBryvddB62ZMAoNEQR9e14W8Wj53XrAW5e2shwoobJfjMdQB",
  "key8": "16bsCGbkg6cwoJrFCY6kL6j2fsWk8ronqnnjyArvYJBqUt82cv8picSM7E2K9LyTfQv3YP5Jv14FArK8WXzpmwL",
  "key9": "zBcJk45hkp3JraYiAabWyK9SLfRLAWuDSDsSu3DmhgXCpVmckBnw5QgcpdNnuL73pAaiRucY4FXr4AAwPkLmuKA",
  "key10": "J1eNHABQG24eixjK1QbRsN89DoZaR3NcnxbuFhAbw9scJ5n1nWEphFbbckTJ9UwW1nEDw3cqfdfaCNEQNtopcVN",
  "key11": "3xwJn8jktSXhxuczdcEoN52wmCBBSCPasAxeSxNcFDmKGucRhvL4aqLSKWmqkxRh3uLds3GkdL4SiGfoY1aywEFQ",
  "key12": "5f3bYYmmdaniYh58Z8ZY5Zdua67CBS7bzyV9gMU5XWUYSMPzVwgg14H2EMQEa1XNmSmNCDWVxGfU847YMW1XQfS",
  "key13": "RSgyv4iXsUJNmVGmhUZcuk4jEKjgZAcEJnQqdDZYJXNX6wPbY4JchqKE7akbPHHRMeniasyMpNV5Zb8uBYog76p",
  "key14": "2hNeZSCkGGctF9scDinmSEawM2jXNuMnpCf4xqUcBGVV2pNare2djMsoGDw4Xk3YC2M3qzhzPDYuVcya2UhGDSDc",
  "key15": "2K3URTzXr4PSzWLBiaKkyumBNiF1FPoaQHVgGkZzZb6XYtNJVtfVBg29ofAT6dWxSQ1sHPfGErFhom3sdy1qLqAg",
  "key16": "xXqfgwHZMKNFLw4uDEJ66pmtRfiGz55j9TjB4tRrAFmQ9BQSFo1BFext6DfK7HfYdefurNRw6T2Gmpa28hGXL1C",
  "key17": "5jHod2hcmg9SUVPX6JSVFaayQvHxAuvE1xeGAmEp8XX2qJ6gXL3REwcRsdxJdMRLLEFsKGFZGYjuEYfr3VXuUFb5",
  "key18": "4yeBsuoCyFhkefiPbv6QV31tgWo5xTWJMN4teFi6c77ADkqnuDwkFdRZYU3uoWm18Fhy6mDNpLehdoKqLqj1VyHt",
  "key19": "iHg9DycAMnxTx8Z9YfecRrEpL6jmiNGbVQFjf1zfyXYzm2sxP91nNNpFuw9TC7jbA9dp3baYxn5C73r3NQqzvT9",
  "key20": "SeZwzEX7faQ3Uz4SJmJ7EdAjFpthggdiF1jpDdbx5aCzELv8uhWvsr7QHBuBstJm9DxcYGbCvg951Yn5P13GKXf",
  "key21": "4MqnT5rUJ5tEzSTAF2nxK86AphvRTdYVsxixN65bGRtUZiE4B5z9FiXG5jnrkNJHHeoALKmC4noaYcAPZFM9huyy",
  "key22": "3pTXQhAKethg1En1dNhbHEiXdxWTtrCRzpmgpWbdJUGVUh4o6PUrBcyifi9ZMNDoeZXMe7SycsSJDhfaSp2FtxpT",
  "key23": "ZnhKPAV1gie2vaSiLcM4dNkRQ8Pu7A1TjD6T12doFpuZkSbCQpD5znDhM8ia2opCFYmBLhWnp3ztr3Cf1FqWLyx",
  "key24": "2GE7aiVf3rAcxBsbCLgsxQ8gW2LL3rXoSwsCTQbNYw5q1CQj3jm3x8bTV3jpoZEZLhxSaosdNKPLtp8XEJP29x29",
  "key25": "3DfEaLwovGqk6NU3L6DLMaiAxUcsSq68TeiB52Nyg3usMZ8ppXvYVCfppxcRxuYHFgtNya7PwczdZ3EWWmx5DSVp",
  "key26": "5oHf6j5zAzs376DKsDyZGQBJg3K2faJBUdhxAtwMJCnkYPb7JfFD7ETGdzFHMjbSVQzPuaiXujdLKQEXA4GTAxKz",
  "key27": "34JSwp1EC1RH9rxcsgfN3T5PqEtmcEYbdZs2vcyGSYMBNAURBUt28chJpEHuzLMHeNfujKteRVUkyPNXhD5odUEG",
  "key28": "3uwSykvzc91i3w4iiyCdwKSzGnrgdLhsWsS7F1XAKhgPZtkLCup8Lg8n38LXs31Cu8ER45zhSRk4xD2nX4Hq2wnk",
  "key29": "2EYrCB3guThyiDLxgzTATzFrYThoyhy7NZ6NFfJLNukbMQwwdW6d29jwe2VtfCTh4LVf1DdjSNF7G5dJfvu8JFmF",
  "key30": "2HBegJUnttxjaV3pqGpbcuo489HagUX875M1JA9AiLduYhG4dfWKYYRE1vPgsZNHf8r1Ayh7Jsehj9h6B2cJCoaM",
  "key31": "4HiMKSWggV8CuYGVfW7xnxwu8e7p7S3U1YAgTkNKiNVsaqrpiqvGxsxg2mzGZ4nQrCwafrzJxCgRnZP9iUnp8xNw",
  "key32": "5wYNLyLni2DA1Aq1YsDAPox3wDH2UvVvuFSbfQDys8iQv2sf2jkK1MMHsrCoVMoug11L5yeaGGK1Ts6cEn5bK28m",
  "key33": "4JReY51QfJz5npB3scGfraEzN8rwv2YEMQ7gN1Wu6Los7NaUJWSbYCfAx5GNzhx2v9BUNLWE5aUuVLmSPZ9jxieu",
  "key34": "64WRJwwnVmYXqRJAno1mzcTjRg7Tev4Q3FG8Tu5j5sR3DZgXz9Bu5DZpohA9QwcNbvhFsH6CL6VXu9GfGADB7J6Z",
  "key35": "5DXcAhvWR1Mabf4kroM5vg12Yyz7KCZrQn6JQe7NoFrT2fSsR5FKhYEubGAyU2HwQcMwMCME8CZ5oThAsnJ5MVuq",
  "key36": "2PmkU7ujpGxM8XkRhed4QwDEQSD2JAST1a58G9jmBomQ54AagWHER3jQYLKwacRKRaZk7NDJhPhduminQpiBBDDL"
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
