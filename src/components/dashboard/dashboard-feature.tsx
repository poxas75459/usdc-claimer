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
    "5xHFR7ieTUVVpVEop1ZV6mToi8jN3KsD5x9WpGfeLGjWFfQjB2R6LvE4sGSwYm72ofaGagCU5EdMSqJdUymDJuR7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45NYjMKHDNPjk44bqQyXvUvnueMSvN1w9JcTJwwUr4bQQgmkuUyzwhDwbdGSpsjxZ76CdxWf2BD9cvZKew4rTr4L",
  "key1": "2jo9Gvn8nGuyVRKmd8BSasGyhjNTtTQRrTxSEy6ABwSfbywFnJgmYzJCPWCMHvGuQtrrDckZGJ7jaNKuKmFVsS4b",
  "key2": "2MMGh7m86JThna9CTyYqghepDKvFArxRTkoabgG6MAp3BrfQMHPQWXmmWjrT3qgMmY9YXmtgw49H5U3r92z67B5c",
  "key3": "5Shg8UVJgu3EePAqU2tevki1nvFQAUaeMs97ZihWVoPBzBGExx3zHea8YpLrsz9Ejxrm3D3cjtT5n1HXPAuhbDsy",
  "key4": "2jBqTc7TtnDLHgfiFE8rHeyzvwBzLtsFVmudrs1LYk8kQYAhHooS4GLRVSJZM5sShcFaifKjtPY9gKR2tJ3Pgjzo",
  "key5": "3zJQtmFoFXZ53g5R1o4d8PWvgiPEcNbAxCaX54HXbzwBFLbQCpb9yp5zgBcb7pawSp3k5HraVRVaHip5qUGS4Nf5",
  "key6": "2C8fczy9ynXuoMVnRNtvquvasLoAcpKCajwwHQdZhVAd8TKinFJYqS9Nub3iNcbhrSrrrxct2USGtVsWSmdTu5zb",
  "key7": "4bFyQrKVa87hdmvGM7gDJU8ss2YKBJPaFSfVS4dgnF68rYsKZiTg8rkxLXEuVsK1mf68Vw7pzeF1AYLMHGM6mrqN",
  "key8": "43Z2kvaDnutEyAbEXc1UGkGuU6BstCEnwNuTWr8U5JneMPUMPqu3Vd6uipZtwM9cfhEJaUyRpVLehYs33CXczDJy",
  "key9": "5nPyEeTHmZgWY2vun8PzDXLr1yvZVoMFuxCXR3pv6Gf9CSzFqf7zkwknbWfaw1JXibaKxXdPLMZ4Swz2ySJ21ahD",
  "key10": "3ZVCMDaEX26bup3Ky7f4Ke42WfMSQ1KdUxCMNro8RK1ZbvfLjo9kvf9magbNwuP5vaJNJk6aJoPVjHSqrwX3XTzg",
  "key11": "2XUT5kbWrxNVLEChwhm3EoBPo3LvKUgNmiF3DG9w8G8HpRFFce31ZBssgFLm9PvZSVV7Yt4KxWTPgZyPP9rMMcrH",
  "key12": "5pwjLffc6GTh5b6o9wVzNVzvjCPUFkEvdTcw6jrJ499LZuP5d1uc8tDs42qRDsToZTCR89jgGEanG5GNBUZPq9tC",
  "key13": "2drJGyK7Nvk6mxmyWLyXGY6RDZgr6oxHodasWBoXJ6WiBssEJTMbSANL84Dbow5pcdiLrL9SbtmyKtgittkSfKvf",
  "key14": "4hRn48VUok1cZ6Wa429Ru2TYLB57YW9eiKPJ1zQP3QaTwZxfNrp1Hi13j15uqHa5Bp5fLbxVsc38ZJqhzwXYY8JX",
  "key15": "23EHA4gPpvEe7qGa9iAuWvS2iPgD8urjSUWzruwFpx27yQT4AVB6SqToZonDcnMRJiG6nFjixdKdRDaQXpbnENmM",
  "key16": "5Q5924xY1ziahyEREK7CWjkYYcXiW7i9HJF1wwkhMkoVQ8MxA4xCJ7DyURc6H5feQrMKcDTxewEEpkqWGLVMXXjY",
  "key17": "4w1PCvenHyPm6VzV19jGhxkRHerRNo7RRB79qhrkDsqtvrJuRxaqtvQL3Wz4MJ2VtwLdhHj6GumSuMzpRUNa7K2v",
  "key18": "3v6Rdz3bP1KqM8gqPgPsEwY4pesGhqZo2y9WnDobEQb5caFNyFeYcvbd3DsTpsoFFFXhKZ4f3Qpav2K9hTWkAC8o",
  "key19": "4gath7eYDWobzjnZYjmLHf9QgxUdmfkLp3NTAsUY52SuRqNkmwpGLemknUQDbFW6PZ4c6Dg3A8jxx3rKaHdV7TVR",
  "key20": "4pL9VBJ4cvCxPXpEzp83sGoocJqVdH1rWJvM93Vbd5J8bkw41e4peRBeAmr1nE7UtWn2YJofj2q8Gt2qHvv265js",
  "key21": "3jAtAGeTRhGZoNjeRg4TVuh4ZKUycBtnHbhu5M1KADyvs1VmzR7m4T9bvGN4yPrUYvYGdEpb9PeFo9Cg97VJUpWZ",
  "key22": "N2f8N7wKY4c16Dg7N1ZSHJbD31WyMwStiG3966QPGXpGAt4GfSjxv6tNttDi4pFSQUssSdt7mqiFLh2boYRKEop",
  "key23": "4zbhs5UNEjpvN7YkbRaW1ytHQ4uoM2ALhGvwKa2dsxPkXAsQQtnfbHY6Gv2W9iFaWeqk5jeCtN12RLxA2Y5EsXtZ",
  "key24": "KtQVgySVrwH1LzsDtpwoHZgNG4wzQ4qbVaWjNVJdMvWPnESzcJxe2ahge4vn3EeBDQ7fygQZSjgX6DdA7ucEjU8",
  "key25": "3mPQjJ3MKu7qUFy582GJ7FP2iXhBFdAiAGjLBsn5V9MbVMcvoWVxzqgpLPsXBh7waurqCBF3Hj5yb7nwSPqDCgAw"
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
