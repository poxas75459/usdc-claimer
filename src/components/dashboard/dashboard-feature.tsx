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
    "2WA4sJBcQdZqhBvzKjeypUiCeqgcMESvxxsmwgMSzjNBZUd3R9YwekaqUiAnvc8jr5v64rNyZi7BWVRYw2frPZjy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dthw6oEQpM1b2dw7BD383KxWz97n3BJRMQ3eQGoDFcjB8t79DW2j9mtAsiMKqU1zX9wrMhNMVcStx7VJfwuKTYP",
  "key1": "4ewxemF9Ha7yyjFSEb9BXsNhEt7s6E8Ha7rRjm2QiHomSgbDLeVASz1f7X6tHLL3f7GeUJU3sJr18Zwd5sJCXb5N",
  "key2": "59juUtvpt3Y1XqUN4QZnPeRb4gAMBP136t4pcS2aFjqNTuB7sZWtEkgRit6cP4DYg5ECbnmyN4uCXh8nYj49AMAF",
  "key3": "2DorxhcEMbWjGKQycZ4oySCYL3cuNSeUn3YuymD9R3Q1BCYV2pw8t2L7tvDntBFczsN6JFkh1Cji5a4pUcAGMHdj",
  "key4": "4uYpBZrszBB7CAYhQwnVWepsJCqWdKtXsZdgGV53MdPGm1aQiM5ydQkedFA6zBEUVqzL5wEQEXzcVAwk2rJkbwDy",
  "key5": "44FJcKE6jVQVDod61WiUrPjYPn7Swf3RCr4rvm3S17TqsaJEdSVVhtEhfNXJSnH9wdVy2twvQQbQZv3YdhCrTaQj",
  "key6": "5ptedvJWWQdJy4ir2refMpPDvKk2w4s1xtUkVGXbSfrpjgwTARz21N5MpSBY5mu2vv5uMQHDbr1hUTcZ94xuKw7T",
  "key7": "4X65sUzJ9LE86g7NqkquPWF5ruTQ7yyrkp3BjrT2MmotgnAYAKQKcXfsLRpmdVphVt11qkwRKDUUeX5KvHQu8W2p",
  "key8": "5j9foVaFXLqEFo2izgaMYVEQ74pefRxozyBW5fYbQBy1jgo8ULhcLSVPh28w1tBq4zYfwXx4e5DKgpXVbb7dyWqL",
  "key9": "66TWkoRBeZBQLJ8FMn3Y7XFEbnxdasf5kSJMfVnZSjNuZWdQ8SJpkyU4E3aHfCaF4HT6Hp26pvRN9VdNCutyHDhF",
  "key10": "Z8nuZvfy7CaBxAaQ946RtyfFT8dH8hDQuF8e1zvGU8DptqeBca1zqrH1wBYSJtLKGERKnvBZUYxL7fsrtfLR8rV",
  "key11": "2E7auFgoxU65W7XT52tdUkovk42NvERxw3YAXNr5nvVAPEkGsDcpZHKeWSRXEZp8GpM3THda26GuBnNkN8XMDX6K",
  "key12": "2FSMWXtTXubXe3jJ7vBXKD1pskXKVWTWHHw6M534R7macu3puDN6VXXVHsbNqurWJiGuYdjbKd3NiFxK7WPqenYb",
  "key13": "2vvTeAJXeEp3cNJWX2wYtnTAAXz9acAJEaGBHxo8STLDKCbxwfddndgvjaxhxUnwQRRdMt1sGQfPkPNvYvzmyHke",
  "key14": "4PRF5rqAsN4Wj9nwToRGYbGo6s3bQSQoSZdDtzSGQXjjy7Z5XjQgbzrS4RsRHhv2X9JdB5iPty2mhNgEbjZ15aGi",
  "key15": "MHkAujDXDLRDo39CQ6sqrb8qHbyLC7aGnUqdA6n1w2fUnaKdtd2JCGQfMHXoCvpPBdgAoSBatsyWxADyt8nYnV9",
  "key16": "2aiFbRS1MctRDGWN6y8DttPTNfY8X6VGVb2A4Pe7cDQSimcnA3YnYBWcmLoNutUj5h3yb9Goujo9hjp6GeFAfbcG",
  "key17": "2A8R2fjQbxk1TVtfDHLhnX5Ge9jZZupgkdGtyNwU5RqDs1fLf9cGAz5c19N1CUyanWfFMKpYHAvC9r2Hk5xcKzgA",
  "key18": "4ZeXXM7G7XCVNujB2iLPPB2wfXEGbrbk7LkhH9DSrLZaAAMUy6EewnkCiJNDh1qPcKXdenbrYMNkEWDqFWu5vP84",
  "key19": "8C3HcpRiDy6Mw1S4FBDtYWimEGsgrQ38iHNXw7uvoRJBYGJGLXdbR1kghd2b2DPtL97vm8VzcPypVyZykjeDohy",
  "key20": "4UPttsadK7wMaRjbPaQGh8WwLxPitnqaGDtUwrw9WGUUQSA7H7gLx3yTCpwZXYdJNSA8zBx52MkfJX7QWaXNf92p",
  "key21": "4kWGW8rQGWCSYYoWBYWXLVC4C4XYMt3gMAQDJhVmG2HSvHrpn5ewKBipXfbhNjoieJd8cH5DD8ddgLshNKdfQFNQ",
  "key22": "5PiAtNqtTJmu95SK8iMccSG3E1HSr2jP7Z6b3iyyjUxWCzwWeLUCAiiLa3RFJxHrHko5D4up4hT51aNTUbTunp4V",
  "key23": "3KkmL2cZrPo47zEeaTD12PMF5E5eAs2KgL54F4oLXZTkERLA75qJitK4Xiq8hVNFFJAQBgnSG3ZY3j8kePd2LnAy",
  "key24": "4yVU5Uw92We27rJAjRJGGVzbQqRykivVqHXypdZAmLgKpXRr6Hm3BhmtfHMAwgLCMTBQfuaFPoKT8unTA4Xv6XoZ",
  "key25": "PwN4NiQg3DTDbdNFkp8yi4G5oaiwNv3ZFaKQ4bpvqt2jjZkPeYNa5T2BBHRDXbjoXEQ1XgJ5yDf9ikMdqNydGvf",
  "key26": "4r19WS4ejMz5dTwJTbZ3XNmMiJb2F5kSjTpyBrCZS47Bsf8pkGxSGg4hXS8ZnAg65pc6WraA25YuoTMGntRnB3rH",
  "key27": "21qUA6jBXc4D8m4Bewagi6T9uLEvPnPrdoyspQuGguJ3YkfhgSqwiTE2qkbQPbgUgFE3H3q9WDZCHNNAgGtoZ8uB",
  "key28": "3Vh3PXXXT8e2Yc1B2wa1w7uEQSpZhhWvf6MpuCiS9cN96WYb17YaUaDTWnr3g3XRGUMXweB1VzySASisFYtYBxj4",
  "key29": "3bmjnMn2Z6cUmunfyahLhsi1SrQLLGXE46oNPiJ462PGybZmMtW5i78fBzhKVEPLUSxpgxVRbCs5thjkuN7whuKB",
  "key30": "3EMkvbgwR9PsLWJ7ARUgRSQb8wYDmuBBUS538n2jAFtdX93Ndamw5AKqD6oad3FxNJYsLgfhrVNdsucD8ZgqZhp9",
  "key31": "4TiWXesz19oyYZhvog8A47Aid5yknHju27Sw1fCsmhBsJj2h1os9cWwYc4NF58kpkJF5z9XayjTaxiBPDtuafAca",
  "key32": "bDD292B4MjbBGD1Hn8E1K2GPz1Y8aTJdrzyiHHxG7LRMetd1qbgmhjcFruYLWPhgS2pi1EPWEtQnXy8S9H2nkMS",
  "key33": "3ePzdo1BEFdHyCu5anDxYVmb8afPqi6nj5TPTF1sAPYqd9pBUfNgCj39xxHiYjVhQoWFW1ADCrTuNwPtoKeDmXtN",
  "key34": "4aJL6Vh7jcF7MkSbjeg8upZwTzSpkwKag3Fer8fUU4KqrEpZEpwVPjixJtdM8mio8vHbC6LJghaAygoSV8ue1zyJ",
  "key35": "3cZEEoqACP4vPYGjD2yE9mipjhoZwGazFWM7a9aMvo6ybn7afW8xuACyzQ4hsNiNgXpfBJSkqjmkiTMhqM1jiLvy",
  "key36": "4RLnYhq2wubLGNdHFirHkZgs6t8gnxdGRvK93pVJp34Gbb9nXhZybpqY4C1CPn9AP3CE9vKUsCeJ1exLwE9gyycp",
  "key37": "4KLVYXJo8FZp85izWC8xWLjEEHE9L86n5xCaXkWrnKhG7X4Gd6yiu1iXPro6LHj5Fd66QCw37Vxu3zsch4MM2crd",
  "key38": "3zwLidTwvEFwaLSK1sz1MVWgTpnQZAZgCQDg1zkwaW9YbR1A1CGoXuTn3oWv7nKM3sKbkBEZTbGZrMtUd3gKP6tt",
  "key39": "2t6avP5GcdUxF9dJrV79j8vbxngyeAaPe1CgN8AstqrPXxyCFrczZoenyjUZSxdGqEEKcxtx4htEVZaAaiF7bHzF",
  "key40": "3ZNxkRTgGPGZ3DKdcbHKNwxtNt9yWQFdSYXjveknvfcZ3eUrHPya4jrgQKHRaM7R2QmBtLAWhEYKApjpPCYg1ri1",
  "key41": "nYxgbfzByoPhwJkV6UVh5Zg3QfBeHbs5EPx5CbCYMYudzvXb3nuPt98k2BYVLti5GH3KjrfpdBZW49EZsWNbpv1",
  "key42": "4LYN3usiPG2x1EQzk7r3bLd4k5C1BspEfY7sLsW5smg2xQxrro7gmfixKsJpXAf2Ji6n1NMueZgp7fjAf5rTXRo5"
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
