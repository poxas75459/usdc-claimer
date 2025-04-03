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
    "3UicgYK9qQTQn9v6D52Lnhs4M7krdxKJgCsq97aE7JFug4ihpgojdxSRckxX9KWEMkxNma1hEszfRYeM2ntguUjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y92QXm31jFrB8rP8rjwDQwXKQWpBhmgJj548Ys1TJxmef75kyFVn4wVPjFWkXYrWnBFd7kZNLpT9rxXVvCBPcaw",
  "key1": "5jFaqSyiVv6CkxUgSdsTsaCeVNMLLL7HCL4hn9WQtURwHPN3bfhp2UE8pkyCJQXLzmnqTz2rLgdzWrqLUYxsUdj3",
  "key2": "3PvwVUcim6okYB2aqeVsDWazjfxeGsHEg6ZPoecyZ8iDHsyv6vM51xZ2VfWE8kFeNr5UEJVrU4jMMWLESU1XEPbN",
  "key3": "4mvpuPLQeuRaFtNvioHa457yTRH4bmGqqCYLZkv16UMZPWKYSfiCjEBePbZ9E8oPacFeCWQbDyp4vyGPcGNx9PVc",
  "key4": "DoE7ESgtCe9f7bkWCSHG7Nx6CJSWiDTv4tg9Hv5koit7KVwsMGdmMfVVcwzJr38nuB8HmC2QGpwUUzaznNm36cV",
  "key5": "XYXDxEXdfHfHhWf7xettAPuepPFu4gSNdRnPm3JMbrq4yCvYKKEePyMwyFX2YYkjQaa9vmieTdk7ZtWxjqujjLS",
  "key6": "PXJBbPCqUCDj2LiY4p8ryyPgbKAi1vDdXURGzdGWeojtKRHkyHAhhbjg7LLPcXb8oRoaCi6ASk1p3PFhE1Scr1s",
  "key7": "3pGXYZjit8gBmuWprxe4uNLg8VxC8avt1DLnV7B5cRAYvbRchS4Wj39iGTYnhesWGXnU8FUzrehSYs5CPyRLSE5L",
  "key8": "3KFPF71f2S9yPzreRQabbqVHys7y8B8ZiGNBJiU5EWKJWjDUCG9NtC52XxeBFFCB9pQxxzhzd9PZLtbxVxWfnS9b",
  "key9": "U91sRQtccwoe1zbK4s74NbWX87Aux72RaYE194WbudMvTuzTEw45QfAcboSyi9iZt38AW4U5RYW46xJPsPYQ8dr",
  "key10": "4p78ycuDmFvpCoiDCL5TA4wGF6NYofJRAot8QJ44mWpYVxxUMcQUE8q1QCV9iM2QeCubr8Hyw1fTvXcd7RU1sgf4",
  "key11": "wjJL4qNirpjo85ZFYcNLsgkD5LghvT4CqiHc761vsDyJ96RcJzozjVWzCjiCPaRVLdY1f86stHGPpjYzyUZrSqA",
  "key12": "2NxnEbSYPudqhGDya42W9Y25iCULAnG49LhuY5qg3W57HLYWDCEj6rTAJ81WnCHe96zTGUMxoGX2FuvStmYxvup8",
  "key13": "22Y4QDKss38nfjfbbcZby166B6Qq1scmm3GnHE4yfqCxgpR1xfMjFvikymD3mRWTSkCnxj2ZTP3dkdVP8iRxdEt3",
  "key14": "2GUNCGvv1ZwnesRhWS8r84Xp19pFZbbHACLRmXUjoGjQ2gbAQhLbeMBsF8nZ7hnuo5iopmsJexpVrUTnnV384tRE",
  "key15": "67EzcsGbuu1xYaQsASx5FQpRSWsXtL6YuZWeMj5gA4kmdGSLCesL3nYVatAFG787HNU6p3sprKid87WCeVf2xXTm",
  "key16": "3AgnpPifWuYSdRzgEXfmCxxhYKQzintYEA9exNETTz3nrMRwxGJxqWej3tTRs9yrJPYQQ51FEtZmdNvsor2RNY2U",
  "key17": "tXT1g6fvaJVTPSPFxvvHGiuqskBZP8HhvPZcp8GW2nH3Z35LzdBguSabMwDijpBh1DCEoLBtqcbLcRFYvssvRDS",
  "key18": "3NcigG1vhBkyLKpUnEvGYrw433WTYy5TUnbnK2H1jjjeY4i87tV6koKS45hZC5f5WCM1YR936W2R1ebac81TBCUW",
  "key19": "cmKziDVgQFmsTdaDhp4tchQSLUAnmLZvaDU6ATjccXMZkp766FjFg7ddJu1Ft8cW1S8Hk2U9aNZDp8gq9y4fTuE",
  "key20": "5PQqWLfWoK6bAASzGG7typvakrY8Dr65V4H4YPVcSHBnXMwiNtvVLP8deLnPaSzP3ZVUPLr14bPCdUqb1tVkwL8d",
  "key21": "2ZS7pxUCn8XgEb7xNk3byZwUiYeufq9JNAkv1rMUwM5MHW9FVhJZBp7otMtjzR3inR7tabxTy7o8jBjEqusa41GA",
  "key22": "4ZCumKitWxxUz5bhj5yFouzJSRKZqPkTW5krnAZHQEEwVybFPsnRUi6GSPcu2mivJAWsznwtrdGmqbVZdnukmAUy",
  "key23": "2ZbC79D87HLWSuHh2NAUzKDunhJmLbnVgnUjwKFwoCF83YT5KnaDm9SVDmR9r3Vr4dWuZFUGJGQobJQiJGFAUYz7",
  "key24": "5tVDSctbKEnSU8WcUsigDj1bVpAXx9qV25a9jDERyDH3C25kNmDjJ3RLRcrMqrTsYaMjphzMRKQqydwMsPZyLuSs",
  "key25": "4ycaS4ZopK4tq6i92GWdb3RWwnKvq6FAVZrfCinH6RxNpVV13muDxovQAvicqNqrjGuBwTsLbPUnK9bcg4utgY6",
  "key26": "5Q2vwkfjojRc4NZARv7xMdwjGjncTk4gGNnYndshfFksr3EV3N9YXZqC7uNB4mNBHuzpGemSWvQvcqBLVBvs7XfQ",
  "key27": "2GahuP59cyDMggMaa6BiHtPnhuPXdjf6nJNCCrFnoT16Fk1icxcNWF2GRgtYgLjKyxa6BdifRZwpUq2WJUdTkFow",
  "key28": "5ztx76GPL6RfdqsA4UpLXjYAxbsUajVhXtUvhxkvmMKcKRy1YNzvfA9W8pEM6qGBLquo2U9GNiEy4SrjiKn9au7T",
  "key29": "37cvT27UdqcaEZVQHKpANWSVRVQpbDojLaX45gtg7VXkxnhZM7L2nqUrpVMyFiT4RpNPEemLB9JkrZ4tnCw6k6Hw",
  "key30": "2kWQunRtdwxnnnFTQkbk7xfnSGPyafqipR8dDFJbyveKG4wKqsQiCR6muSi7nrLwHTu4KyJVxi3eduVXL2jvjJDT",
  "key31": "3DoqkT7dspXSGn3qwnGXqpeesJckeYDvg7eiq92YR2wtJLgSXbRZbBnLV5Nppj4cJ3q7pDpUmvQwbSk48izJneGy",
  "key32": "3WsXUxPXmPZPDtka1xKG7NwKsM51f2UitpmCoGVPS6aBjvcick4FjBzXvkq6HuZ8xpRhLxey7Rrwk2isnRYmY6u5"
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
