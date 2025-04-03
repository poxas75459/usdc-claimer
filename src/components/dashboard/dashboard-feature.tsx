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
    "4WVbdsdg5fZabZUL57LgSHYuvxqNcjwouwSWScXqdNAC7irPpoUnE9JFkubJx6zbeiowMRFCWmJVWbnQEG7XzwPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TbP68oxdcfJF2faX6N92LxXP4MB7vQvuAUoQoE5Tv76CgvPDVQGkrydvR6CkB4hCHWEAyxt2NURk3tsyFv2unyk",
  "key1": "2hpLNAujm7ndq836WZ4bp4ZtEwNWj9nBLyXtVAA5knZvX9zJoeirFgtqb7X85VAYLDydjYcMPoYdcKqBDGanqEMN",
  "key2": "4ncSz8PEgFuhmJchhrjCcRr3sbRLm213ckBAzgRPDLPowttoDqYPaQpaaAQHCWUYH27dZGZCMjnkq25BrKxrxnTK",
  "key3": "4ytRmdc9VdCG6dcyGBnqUXxKVJFhEVvPLQkykydGjNyf6RWpcmGMas55wzBWYcg8cBUD9kw2Q5CNh9xWcKjh5sBy",
  "key4": "nCVxs3jCavMD7e4do9tb6Pvap1zew8LP73wjdLYnWNuf2Qj5bQ5uKFD2oZJgN2BnmaQXSjWpLspbghmmvJ8Hs2A",
  "key5": "9EmhMGpa91P7dHjgfsEjHo4Zrgi8sJp27Cf3oP6kJmvPxaLGTqv7kKxWu1D5QYMmL2qfMCDXW1JRVcWPXmsFqfq",
  "key6": "ow6qu8mkMF2RgDUJWVsdakLLmffmEHXnZAn1pzxSUbgVxLw44Zq8qSwfoZidYTXYCkEhNEBtvPf8JLQoNjAnQWw",
  "key7": "Yrtihgb83qMPP64mRG7MgvBP4rByiZ81ja6HrTPKrKY26kSEX6sbagP4uPGZWwQmua6jwBKVPB1RqkphUe3TD6e",
  "key8": "gTnp1Q8ZaX36TcHSQ4fyWvewK6XRie1pSVMW2nEEaVtFdPkiatfgCk3wmZ8wwLjqycBjQPhS9k619cuE56H6hRg",
  "key9": "5sZn9QPQggNKFLfp8ny1R8A5r17pQ7q8TgymxTKTM3mX7YZeHzFJv9GHU7XNNdSMgnHu6d9SKpZ6rz5EpMFv1Wot",
  "key10": "32qsf6qcBj2ZkBmDDBoC9WmmtVWtmFbgA6xidhs4ewrkw5uVaPaBeeJqsFQ5XiVxYkX1sd36fpHCeHdLuFPzHfq3",
  "key11": "66noHuVUEL4ShD1DKjckpXf88WYejBg2w9axZZu4NAkGHL41mA8SGVFzdo54aJPJmL6trPn1aJxHQxknrEjvDhar",
  "key12": "5UA1MDRjxDVnd46bXivY9MFb7rts99BwHLvAq9Fgy8YLCEkccMkHdmiGQMZtWXWm12PZbHpRr1W866LqPKjof6BK",
  "key13": "32h97TLs4HYP3uJcuz7sqcYa18aF1SewH555HVYVy9dktQhmqLPi4sUR7oxcgvj4Pw2zGo61DgVAhPUt8AJVefCo",
  "key14": "4E8FxP54NEsBxKkxKeMfEV9DBnB4F6JNQKPEwjgBDkQT6YNcKa6esCwHaxrWHyf2FUgLcWwWGZiLaxThjKYVLzJa",
  "key15": "5o4dyMZAd6JrJS9ds4qNmATjDJrsSgMRSQhQcHw2ToneABUSPyq7xUp8qmcTydEQimCU6Wgz7uCXQh9SFLPyudiJ",
  "key16": "4Td8GXQykK47RWeQQeZ5vna63UMszegTSurQTFaz6NUbZAL9GEj8rShnZNWW9eHLvBTCvKhy7yiv7vM6oZapuPJ1",
  "key17": "3XJFpf8RMmYKgSF1scoLF7ypKTymbLCZv4E32kLxZdA1ZQenzkMc1by4Zdk3jEgL5k6ag4w1kLqHeS9DfSWhHvRc",
  "key18": "3kUTBkVVd9yuXaHt1EjM2Pfzq3wa4FMnjfSxxxbJks1Wp9JgBPENy1qdxA5uwc5M65EZXVxRyUUN2rfpXznaA8RL",
  "key19": "3S8kHS8eaMzo55vKzJRQjRP4pRv3FuGsGL2o5xFgQihjs9NGDNLZAT3G6qvk8Vkm2X8xM9aXzHayKqDA2Aaa6JQ6",
  "key20": "5pqKtNH2tLhCoWkdnPN6wzjZowxNtQoBRvMEfkguMVgCEpShFM9PtigFnwVKXFRkYaBpqY99KrRn7UdEFiT2WL78",
  "key21": "5pC2qry1Padi4CVXShj3GQin46N3DkcPr6mwUnkAErLrufpnwwE6YQxumEG1ZdfCJLEVQvyLqh5DQ3PgV2awT4kk",
  "key22": "3sV3ddKc1nBg2D1JjravMC3qNpKLwwgZtfKvHKwV55798sjkVhcfCRe3YbfQ5HamZiikPe44kiQvx7cgrmEh2iMm",
  "key23": "2jpufPdqJu7YGqFSsquGsjNm43xTDkbeWtD7MKgzh2EXbx3oRhD5SoT3YfVboddHJ7WkPvr2g6PyFFNuZ8bcweMK",
  "key24": "5ycYTi7B5BzdZozA7GqpKQUczEPByFP5KuUR36vMSM96CKnEmtmzmSLF18C9akhxEqtF8DDT4jp77fcyJQ2hPViF",
  "key25": "4UBYH1yeJWd3a5S6TdJBiatrx65Fses5caeomHGCgQuWPvNPjKtKps2BRvLJ61nDi6QuA5N38j5UGJaK1ZFQs117",
  "key26": "YHKMnsELZ6PAybvQx6ifR3UYHnNqssvwULAx5wabrXntctjf4qpUbQ64gMmvMS7DmAZUsxcVE4PyywFRPJfvsry",
  "key27": "62hZY3a3eYp9P6ZagetQYH2aF5PW7h2eveF61yfvRAXt6JDCYvAYZdKw2S4BYSWLTMqwSfLsR3E5bXPpbuegW4DL",
  "key28": "4pCgV46aEq2tyGkgc5HBiQ7GFAmnQuRo6MxANuwMUMAYco81AJ7woGkBJvstAZF4gzPyL134vmgDsrk194tvJ9NT",
  "key29": "26UmSeDkN349UzXNgFa3fCrkUdy7VAspXax4SPFuoQSYnEQ1mhCmGqUFjbezBcsBwxJYCD6yUjqrpn4NW8KcREgw",
  "key30": "Hp6QDJxrvSb8KEFda1CaPRHRKtgt6EuERB3gYHYgL7jZF4qf8KV7W4Y3m7JDXLivMAUGFzsWHLX8tW6fBsRiFMb",
  "key31": "24WSVNMooa36YywtzokWPT2GpL9vsRZ1tYR1xEFkDnmd6cGc2bt7WtaNn99seBCjtiFgst15QNGoZCFTyecvVvAQ",
  "key32": "4cMsMJuULwTQ5vXiRjnb4RwsdUu5KULTut9aSVcadycQGtLKCh7dW9DMoDSQ3yMqjw8qySxtbX9fbYsJpHPFrGU7",
  "key33": "4GVAV7YDDgbCUg2zRVvY8iCUnW4gdNndyY7xYw9EzJpeV1ZuK2QS562N8ZH9uPJuaXs94zwaMDmjLe5Fn948JCVJ",
  "key34": "4hbHMETBJ935cLai16sQ1H7r82Ub2dXHG8NNHNNrVxPj8gqeD8P32UQ2ydhXXEvME3Y2vidWraE6SD3EvAF6B7wn"
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
