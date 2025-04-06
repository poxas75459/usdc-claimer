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
    "2yDM3zoatzUS6qZ6c2Jz6YxNeryMRBbByBFtBCXorss3SoA9kcHqS6ZZiJjC1vU1BVLoWLBtkT4jivyhg3yMC8JC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37jgn7S7KbYpbeqFJx5rgo44WgajLKu54rZBGHHMcvqDQ4DTALhKgG43hEzPdcB1z4L4oMXXFWPsBmef88CYEJtD",
  "key1": "2P9FgTSUEhKnrNP29RoiknyvsFYsP6wMzonzcAcjGkjRziLzRMpMSnpcz15xtn1Rq4byCpfrM9cPG8Ceg16UkX1p",
  "key2": "4xMLtNXcmdKvMnERdME2b2cXot45kzWxakU1rDHzfZAj3nbJLxhpwpbh5ZE24ekim4xCBaWKjfDXEvgYVcQN5PzQ",
  "key3": "5TyXPW4KQ1mVaNjRZUkof7SKXeU7FLj7d4mX79HtsUfaeRfyQuGbfxcGw39D3SCJT8L6zpwbrLZvpmFrGRsYxKUy",
  "key4": "5XVP8BGkFagMiss6JuvZbWWaEbtHE3PiwzUqco4vofKi2MMVVHD845jXG5Z7BKFodJHaPuu22zjrhAxVWoK4sTTy",
  "key5": "aXhCKfXVkjoMW3pY4Qiiqt9qktr4nuWiRfhneQp57PF5u2eLTYtxWEj8CC6qM7iruhvTqvQgHy6TQTQHDoZQduH",
  "key6": "3evokiKcGLbpH83gTTr2RhHhk2fBGzDNWAwPSTwcFyftRAffpwEUiovGYyVjnhrxDPgWBXKGvH3tHcJGWeK9GbDz",
  "key7": "4PiiCTqThabWBCkSKAMqnNDwFgJAPJxEMDdpD1J9CV5RbuCC7N1AaCrzjnWyTYE5dUkivfMWxGJnKFjHe6E5bos7",
  "key8": "3ZrLLdh3FPudc4PR3FRApoRyeEQpShbgsih5fVwDfK73JkTFgei4Q5d4U19ZRGyzgZ9q2Yjd1Sj94tEbCycfRhct",
  "key9": "36QATa6Tb6ZS7WDKiRaLTQwb7HbQZcbh3fZoBEhdFkWzzzbRLqihvWYtyC3sdp4oU1iQEc34TxnzJFat87dJnqN1",
  "key10": "2j7oFiSpDN7YceZBv1yh5aRbpnCRQEgbCkgUrDDdx3CxMKkwvWbjbvA92HGKyhHKywWdnbxfCxSqgeinKGS1EDtb",
  "key11": "5oWN8HvCAvCK2KA8PiMExVRc5jc6ckEcka2KsAbriMYCu4Duh5uzQDvuotcnzTewTiXCaq3ecBDw5VBALxZiBHY9",
  "key12": "4Lvgpv3uJfbSBCm9H7DHgYX3pkTQYDEvLpePsDLPU5eGW46CFkB2cTLNjcyk8Neq63D4bEqtiCMz6QZXV8j8RD8C",
  "key13": "Un6mnhaiFM7zNt6hDaYcvqmdtLaP42uLjEmNJ3RbpZHbZL3Y2MPT7wEQxa9UaySwzFwkrzZzduNxpHJkuwhJ5mr",
  "key14": "525DdTjAhv8LuU5RxRF4UV7tEFFXFK33gLudptRZ7QbSJz324KTCVYcXB6nYnjrAJJv52kBKxiKQd2v23TrUZLMr",
  "key15": "wm9Bfb1vvD1Fm8kwVfHKCX6VzrFcLQaqRFaX6ECMfy45yyoYJGaX5L36tz3rUZxbPzEXZBdisoNGuwDv83CeZxX",
  "key16": "2UPicmyAQWhCUc93bJpYLt41EbKHf8eRN8Dm7xkC9yAUFVcNCLEDf6pGnHrKh1xVLH9ibUQdYEYwBxmXXSf17TPc",
  "key17": "3tUTX6W768pPdDpaKGp63cwNL1XJzYdzajeDqKjScDqcQVKtZTYDBhnbF3iUzG4mYM63yyEGwXtfzRYa8718F4V1",
  "key18": "2z7tgU8nSATyZXRKNS92EghMfWsMvnaP4MHzVHjBz2bN51UmLzsQPTmdPcqeQQ7an1UNSJc9pNYwStftcHLksQsy",
  "key19": "5fD8ohDNe4W9DxMTftwjYp678XzHJJyJY6J6P2xBkBxYVykDwzBv838qRTsD7N7sjJdjdgCnaAyiNNzDEiWPCw6U",
  "key20": "3ujo3yrfTdm5c8xrpbT9ei5XhnHDYgvmSacDaqkfdWdAkdM5eaSiQbfFGXJiAUFVQu4q1FWRdRqBzRoYDiULD94Z",
  "key21": "4CQa49qvg2Ygu1jXk3vcbmWV53yyNGYRjCNv8tcevupeM5S9oZNRH7w7GaGVi4manLaUr7256twkDKuESGucByub",
  "key22": "5gpMVkncNjTY6qeNCCgkHk71zPAWmuhzW3gHHsVQ3PaKz4g8aCys6NLLfRgmQcCp19rSEpSMLMVX4bxs7sfKQpVQ",
  "key23": "5yBmRMti3JPiWLR5mRP5A5gFLRgthRp7WfQwzF9uCpV5wo8N6fzijgRCHwmJkUKF1C3WKSB7ecDHXSfZKMa1WU4X",
  "key24": "3WgFhD2sJ4qMdo7wrFgwPTFatKLY7iM8T7A8PndHfmWvSU3JQnNxQRCDpJcCn4dqpbJvcptnv3Jkv2DE7AbpLHx1",
  "key25": "3bJFroZ3b74bYRmj6JYJ9pBMjwK7kQWoZusvjUmcuQfXBoLpr9Xn4wueWWixytMhn5V64iNqZjuBjCzLk3xArqaw",
  "key26": "NGuUNf6AvFWVXVJf3wkLU43nAHgV26yCQXU3LSNJNevipo1amkbD4TTDCjJXsaYkKP2ZhefuMYxzioTFwD3yMvz",
  "key27": "3BpReanAHXeTRfVajbJR5bfe2v3moHjhYQeeeV1GVCJKwRaFT8jmA8AnmnBJqkhbhi43k9Q84yEEXp2Yn49P2vnF",
  "key28": "4gR2nkxjY6kyaKnhNPVthrZdUVDz2eLKwdC6FqFzDwDeHXnDV3BnDtqpQqgmnGwsQD1uFCQzt9exBHPazDsnBewh",
  "key29": "2wmJuLh3ZT2hCui6BZH79kdE6NvSs3Gh6Gfna3EePtuHgrSxxFvFKg1TEmRfig4G3tAvCoc54c8Mns4LGJ7xUFvt",
  "key30": "5rEpS5ysBERKCzsJhiKzSdrx7uU7bTGJB486zzbG8DQeJ6DmzoD2skToR9TU9d9PxRCiD7xAiQKJQyRN3vQNqqA",
  "key31": "3wE76coPeNHCzvE5MGWFUSEQeQMrNJBqyE1J2vcAwb7VbqoGH2nd4wi1XdBEyBSoveh25MbjMCAdbzLitw3YKTr8",
  "key32": "4TyJNvNwhbWUBoeyyas5dvYF228VQ9cX9jgvTT43ZWTEqxVT9qLm5tEWuankgUohZABsdH7QambTjXDRrWyVoBYn",
  "key33": "2JAt3rMFm2CPb3zaw2BcpyesUGZaSxi2EqSAeMfnHxcRXMWFz8fSezii2XQwxbyHBm5wKqwVMF2G64uBBZ7u76aE",
  "key34": "4Wn3zoaXWzu39eGtzCpx834sBHPWo2CigsRA9RMoEHiR9RDyXc5fYPihUAfnD2qNzGqWEzUeg435dZqhYxY2gK8P",
  "key35": "6nzguwpYB8om816UPCvRBpsBTvWnr7vTkad8pgWBTRjBJjXhxUL3Gk9rGzk1MXynHjPTZ88cZFM8L1oePCp6z4c",
  "key36": "A1GEt2kPBkxALTUFqqJVroUK8z1HRvqevx1jUd8jr8GV2UjfYx6KMHQKNzKQ9PvQJrNSABYW4wEDB1MfUmKEqvn",
  "key37": "3KeWvjv3rC2WTfw4BSBfddjKur1AeEohtNT9PFzbyTqZa1ps1GXBWdbntQ2QEvyNem67dZEJhXkUj2q32CgJArem",
  "key38": "3ysPXK927Frx5KgKUaZNtc77Tvg2GyjTmi1ph9VYTbdz121sGESePJcUptjwbhJ91xkxQGrTCC9jj9i5GjCQV2Ka",
  "key39": "4teUogSz1R8A9VXTzAnxvdo65ZWW1aAL9ma9dZA6t4BEWnqmZKSrcLprh6LGbUgk94fUo8cFT4papwzbZwf4yYYF",
  "key40": "3X3CNJH98fKzWqqkaSdLiQivGaJAB85CbEAPK8qBeCLrAGLyNy8JsL61wRHQVzQX1xmbzjjuXJwk3A2ndVSb62ZK",
  "key41": "4Q9jxQ2p73LkszVVkEeXMj5buqvTPb53Cq8nGwp25tzS5TqMY1bzLtTyNigmvQNYYzHsr1p9Ui6TWaZiiJNBNu5J",
  "key42": "fc2rFQUuJ1VTKYE8XtXFQg92GA9zCey5sDvxcMM2ZYXfGmnqeGfX4P6YnDwuGF9aJxPe8uhcnWWfiq4cmN41To9"
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
