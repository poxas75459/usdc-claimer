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
    "5HJSWuyvw2P7fKK3D2BWsb7meHh8f1YYhM7u2NYVQnTCmaVhzjzsQLXjSgPnay7YqDTfNuLjG8iK4Pbgk1CLw5y9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y4N7rMTTUA2bd4AWLK3LDDVe3HKm63ovUrEBgz1XrVjSeJA8J5c6pBbXN8Jo6yqa618yAaJUkoUEws5oqdPbgPt",
  "key1": "sJJDmLf6Z3jwynryL45PDYof8tAXMf2GL2YmeqgtWRzVfMG6CsM5ddUqjgtDTcqvcHhPEXikJ5Mi16nbZHtNVy3",
  "key2": "5BbSHVQoVFV2UDadV4WX2jtg8Q4Xim9rt4CeVbrjB2ka831HP3FtWyKwmdoifhxi36Nbn1WtBYPjfVgmWoNcn5Yd",
  "key3": "3Q7fVVrC1St271h65JdWyrDX3M7SEmjn725xiJZKpS41fwUM3zvrC8KqFmn8pfu3PEirmS67ecFaPDmd7dQzP5Bq",
  "key4": "5ALcxMM5vNjM4H8GkpiCwKq2KUZh4MBJQV8hTTBAKkLtuwtfzDgnxppuqpyixXuStAa3JN2JXy9LjH8otArxRyKj",
  "key5": "45fRNfEjncSJQiXqfkgx4mXvzXUsjco7oF5Hbj5Zfr5JV7s75XE9fR7zHNNKEr9CJQ8G5pPNyozgqNU1Zxhmit2i",
  "key6": "5EjEYrHWFyAnFubaMeTXisF2Hja7dT7smjKFTQoSiGdoaYfY136MaPicKpz3v38Zo1u36rbu85VeGxyiwzsRmsLv",
  "key7": "ZfJot5uxPYYyk1gG3BmxNWbtwK6Zt12aiipXDvRcYoZ4u4T3GhvLspHibryvjzXPv9xstq5FBgiLsi5e2Fxi8YP",
  "key8": "RGbfW96aE9MvvtmbJzgrqh4ZStDTyipjTVu93WgV7kfQ8k4wvmAW3qzXgdsNBTjdrn55YFv3RxKiHBAXWuwLtx2",
  "key9": "596SxtxBq377Z3id41Lvd2tBDA2pAjCPTvfbKEFMgYUssPfYTEiRZzkhjADkomMCk4msUxYfMVnj2TU2gsyJqbam",
  "key10": "3igtze6zg3caA7fA4Na5EogQ1vXDRbTTXTFMHuNCWwfQzpDvbxuR3HrhRJuVG86Vy5iDepHSWxPLzYznVJm5LSWM",
  "key11": "2b7eZcU5nYqdWnM6AXt1iustt6zjhr4bwRootiLCozUAPqbfFef21xWDvRYn4qp9mtasmY1vDHhagjRbuWXN985G",
  "key12": "4Yi1zooKFoURx7ki8JdZ8Qfa2qmL6eNoek8KgyUKDRZabbuZsx8TCLsRAiQ8NC7RS8jPK393auCQ1uUo8fm8za3q",
  "key13": "33jnZp8tHzFXuBowSrxWXtabitz4Zb9FFUAve1AgfX5VDqVspw9Nnu8cjV4H2tj2SMfuCrJ8JYpdKr41FV6gRULA",
  "key14": "494HiYoReYVq5kfzjKhZ6oujCpWHQ13ZH188ZXzFkZL6Ubd7fGeogf6G5jJfFezucquYoxN2w7V1mB8B6iW8SGCj",
  "key15": "ZQyqbrvD1JNRm9wrgnL8UnayvDztLFtskH8Z3xBvhRkHaDXY72gZzyz8SS33MSBASHCsdYAM7Kuu7Xcqp9gZ9NE",
  "key16": "4YZf5ZEd72BuDwYaThF1ZNMvggvGbSSd4VghJvDB7XoJwscz9bhphyFwfZfoRugLTKxf6MvsEe5eyA15YhiXQhKu",
  "key17": "ppc4M7BZvhZDtRBq6dYq41WTmjwKWfydz1SGMgW1fjvqjXZSg9pmirkBChDVV9YyN3YcQsG5DsStuXDxaaQ1RY1",
  "key18": "5CHz2PUZjkwnn6k1pWMixh62pmPNJeCUU1m3fF83k36GJt69BdLBDPo3fcPKFFz73jiG2UKTtFUCDXee2nSz74Ei",
  "key19": "3c48RwPJUjueFYg1QkjADvCfbv3ZfVUtmjhXJGU3RYvP91rHJ1DEa9oZTHSES8vvp5noKG4eMEERkwmUbjEdxkqL",
  "key20": "3KVrBBpBzmVkzu8PwFWheePPqy3hGKYH6xwAhtho7tJdp6DYbxvyW3pRVryngsaq3ndDpZiYDRwa8aqFJuu4AzuZ",
  "key21": "2Aifd3UJXVmid6YpBr3iZBYWKduHQLo8xewnwD6zjuwPvWTsJEfZbEGMZyxtKvjxuqAoyKBXUTQC2xbacouj93QB",
  "key22": "2oW9HtYMxgQ1tujum2wwH4FSQyxVAfHtxuCCFzBWvrPReaDHWHqhRkozT5cknqvKTP1Wkfhu2b1vxvqGUY1BD5eH",
  "key23": "3NCPaNGi8r6nfrquR2HXoQr7YHhhmVkCnzErVKm3135vtey7YAu8mGqUFtC13ab9on2toDVjr4MFSKqLVzLkaWWe",
  "key24": "5n34gzyskDbcMs2G1KHVnsdGgva7hMcjFsy4yergjvfYLep64QSSkRkjS6Rc2N1w2uXR7fJDyQESFqTcemubooQK",
  "key25": "3GdBvefr1fR7GyFWKdMXe5ze8hv2FZMRGVGbd2j5ZKpEBZgxsUa2XZLdKXSEmCRcKkPNepEovm2sEoh6cj8U9Ez4",
  "key26": "2bFu5Y6hggLX5bEDj85gGeHjdU7PaoUwsY1CaetqLKv3G72ginhi4CsXXR7hECbNqKicJm3hTYy8iaMLDiR7be28",
  "key27": "edwG5LAXh1Y2NjMLhRQMQC6jwqa5VWJ9CRxv2BwqhYQqeucSciJmKDyN5LvLw2XC2PRkjbTiMo8MnK8D6H6SDsE",
  "key28": "58mCdeFzziN7m5i8Wz5TAhBU3SDUNx4iiuvgGoN7txRo7x5RRK2HV8JwGHxMFnKTmmEwY8m1Bxww8wcN2JmawYFZ",
  "key29": "5YLqvvuqUEtR3wsuimg8cuzh6CVpsWJpdRVcEYxgfuZFjasqbm7p4UYw4XdntNwnuM9CT8DeYPxQzp4hsyRnsLnC",
  "key30": "2f8ZNk3KYJXPLHCDDwF15ia34mFB6JctGpN4LhXZiWqLZpuaLUsBi7NU8MAQLyH3v2u2cBAKM2AVhy4cdwewXNE1",
  "key31": "48fGFcWsEt6fMm1E17oALWDATxHhVmnvBYcVdH9QzQowoSz8HQP37YXGFBPUAaVUjaSKxcWVTwfv6YYhXqnVYKC7",
  "key32": "2Uc4v62TrRuiVXB6dm6L5nR5RbEUbY3CEDfggr9WqptaeBm6wgDVDDDyCFsY1Zpy7cMZEY1swYpMsEMfi5VSc23X",
  "key33": "2m68P5v52BoaVwAnA4DzcYqS6ZErwWS8S1DwNrabi5bwXXYHmV4QudPc8CWdd6n1AYRdza7xZ9jKatTbQGVnbysE",
  "key34": "5Sz7AJD45t2PUQVVcYF8kJxDFeB2wrtMZ3pzELMiY3T689JnGXH7mNdbA9Qrs2k43XVrXBvaHj72oxhpbtqP9SMh",
  "key35": "3JCcYJij7z9WMHPmaHFgycicpiMD1CTPcBemYLy4wKqdfCW6ENemH6zn29WKzHvbJLpknQ9Ys4kHevADGsUF3peN",
  "key36": "2XyLCDHthnHk4N7SH4AvkrA2SPydqWNu5QMxBdYDxKcGVtQ1aP55iWxfAS9mFJzPGr1uMKLQoBxM9weqQn7NNTup",
  "key37": "26RRftVq9MW2UCMGPFKxpCtoSKy9LyAYPVhiivD3oF6YU4AWM6nW93j3bX9zxZpbHyHmEmBfUDqboDGCaZgk8DXQ",
  "key38": "dC8sTgpambU2FuJo9Hf2ppAtfMfUqHc12jArmJBhxQfumbpUYcw2WHyuEz6geLTKpcGRU16vC4FTmu2nNBXm6dk",
  "key39": "5HvUji9VbkHEf5kQGGxHDnHUjiyxMMUHYW6ZFWkjBLR7uxdnRZ34FWcAhCM8SwUwBpofnR4nFNnwo8yJFo2PVS7p",
  "key40": "3feFUMeigjuPCH73zS9VPWNQiNvq4pqHsm73zu8tS5Y6UFPCdZ3y8jEToE4Hwvu45cYrbBnR6Z4Fa8p9TuYLHgbu",
  "key41": "2sj1SzjKCspjFviBjPNx1mQAr6F7DTBiAXk3tv9TE9TW28UUspz3fVcjUtyPFj5gGW3NRWZA5ATSp1iwndDoNVLn"
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
