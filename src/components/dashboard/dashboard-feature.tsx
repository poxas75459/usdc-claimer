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
    "3BSoi6g7zsAeTdAoyebMrPq6WoEQt4WARfmXVZZCwd1W2E8c9GFozafqvSJ9wpaNXfz3YADU1FZgdpWjS7thTgeZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q1SBEXrLk9WakkdagqjUbfNx3n6n7RLPhK1UEP591PkmgMhF8WkkiknX5oWGEM68s3ndNByUcujHcgXQwzYLcSz",
  "key1": "4d2arVqvnj8fT9rxp3KSWcnYx2CGkgXJvAM2uAVCRm4upyt2q931uiXy63Z5DaPmQq8tvivZCZAovouJU6a9is8d",
  "key2": "5RxgtkrVMjL5ke4XU2WkmYxyEqm5Rwc96fi9Hag4B4PfWrebogiCuzfRvjy9adz6g5PAxZyJTi6ZLXjG9rXJef23",
  "key3": "UVYqZriJFoJrqZZ5DGVNuRFrYJxzmowQLhCg1NNz69fWtjfgZY9JeudEmpGY6L1uzbUYRgmNnz4QPr2zctBUB7Y",
  "key4": "zKC7Qwex4qyQYMTewBYj8PkscgmiJnGM9rF2sPdpUt3ZDEAsgfeSqFJ33pdTLTiuLRB9Vpd4HvPvz5ack2azPgK",
  "key5": "22CmoFc8631YP6noPh5DiVW3vcMx4eXqmKPkcWGiX5fs6gV5VEP4SYC5Qsisuu6U1RZedcVVPXK6axos2hKjf5bE",
  "key6": "3jEUmZ4CqWRzmqerhigXzfVTzReMhRKxwWEP213G6FZyA4yWmExRiMQd4zwhQhqZKREAsdbnHq51KkJBCeVcMPJP",
  "key7": "3mLMLu1fBhbkPjD6kC8xoFNxvsk7fF7N66Lg2xJQBveW7KqXQ4ZjGErHAxHCYW4xcJL7cEcf6RuxnoAXLLmMV2vL",
  "key8": "cDm8W7tVwS3TN1VAoJFxW3J5eHQQa565HR5RG4Ai9jYAatkmbfoYLgTGwBbpaKbWgmFB5Bist3PV5DgYDJkkoXM",
  "key9": "3Wt9SAQjK2xFDDCfkbYZyXjFLEekuqi8L7hfLZYnMdV3T2S4aXsDcEntfoAW26Vw95nM6Pgg57Gsihc3wHnX7rcw",
  "key10": "h1uBqduzWY5JxknZkpLLvxUvWuBB9ayjGKcsy73eotsFxPTFizULbTaGPmmsNAK8hwtQ8jzASpA28me5TvPtN87",
  "key11": "F13c85VEJoFk5BtjGDPmc4pSudEEtjiwNDzuqW8NUEmoFVtUvwvRco97tmBuzPdcBGenGR7mLdFuiU7TFxUoh3k",
  "key12": "3N8tcPmrNBdcJFiENXRHj8uR43b7fL2obquRcLZnUgnVqHC58apMPgDCi3KLeeAqsBGmwwfNDvKreYf2WnHLUnvw",
  "key13": "qGZRzcvJurS7pux9AJiTTZ3hXqK9VrJzVZymPYsnvZi9GGPyyCT4xMAQcTzn7ZnaV5GUEm6w2hYq7seTgNsVjHe",
  "key14": "4wyfMYyciFgoRH4g1oSsQHdRZm5XBB9TfUNqgqdwQH2akHePVK5xcojtYgyEYZPNbWNKQtvjFsdwe6e5ama6GcZe",
  "key15": "3vpyZZCWHfWy1q3nKJKueJZx4hBWbsXSif2esE7tWyihDdZsoEk7RCmXVsP3Gj5V8ncVDtqKcn7p5EGbzFdiwkQ1",
  "key16": "4dwxTUsgzcNohXKF3Jz6ofCngJiPbPTizosHA7fSP3oGPE9wxtshvDJkQ8XbnYa6mnbrWknH7ZtU5J13zyao441M",
  "key17": "LMR4tzi7MGVousbPHVxmP9b4Ywo6gxaSNbTtpaw7jBK8RhvYB5dxVbQBSP7TvpV11oKFBGiUBYAuDx4SMvZqMs8",
  "key18": "2Z81HYE11JYydkhMPJTu4WwagzsLM1mCqveDbBQw54ttUcg5JfnXfRh2gKnf4V31Eqr9pSrDbZUfc6ZWktoeSMRk",
  "key19": "67dUZmSNEPBoFNKQBA622zbtpLtkKE9XzDy2Krbh3NnFXNzwDZGK6uuzpGTvCPfzkbMPTrJUqNHsMWfynjfCeYk1",
  "key20": "4KF85iZrsmkDccrbAJWqc9EkC9vu9RtjBK3sTWQqH2i5CuCs72jaLALy8ybs74KY3yn2QKoQJBtHuSCPxKhEW9To",
  "key21": "FvYDD6jSGUpe8LpxjbuxmpQvhfBhVHmBcvLwSXm1vmggBGL8WL6zgDsvbK9twgxLLVRaz5JtV1Qpy8mLB8xZpqD",
  "key22": "4dLohd4ozYdYYcvMdWQQYS5rYiSwkTfGNZCCmg4n4oEqwkPeSTq4hGWgM4WYb6SvYSxGt6LxN2QCn7ktfpLi3URu",
  "key23": "2fReB5kgEtgfgwFKDTAXtSa8xhZSJa5pKvWiJFYDAZmwVBUf82LzFWTyydoGnrPnWGChSCrk9pK59UVt9x679w2b",
  "key24": "4nzj7En913BHpd8SepXNdDbsfEqK7Xd6h7crVNEbKoEwNT88U8Vyxdy8ikrYpZ8t1QCHhwFwwqFnbfTK65djtBcB",
  "key25": "4zNX3g3XDcijJPVncWzhfD9KNe35B7tjSxjk7wt8UBBu4GMVkeN1w9HmzDf7nxmRs6L3LRYt8VNMTTY8PjM9RexP",
  "key26": "5STicoVrSb1W5LBBHVoFius2V91y9fTjtaeLrxE5omEyv7iPQVwsSERnfTR4q9iTyfH7KMCSWbGywG7X7eACWNE3",
  "key27": "49VBqRyqhA4iE9w2FZPY2Mj6P32oLP475D1s1M5dCyQNcxpUKgTigsbZpjWrRew9evykVmubdPxwb8bAXVsCyYz9",
  "key28": "5GXKdogXiajNLpdRKnZVbbV76qTeaVLtF8sosooAwx62swT2RAH6A8Aax6xurkAJqn3p8NXuK69ZhBgbodxsp9zG",
  "key29": "hfoNfMToXx437QUnie4phjrqNvfKdKtVwSvAHB8cjWjvN8beKd9m2HQe1FbF7MdykwaTYTSj5zwSmAHBcMVswK9",
  "key30": "4FDupQD6sUfmrxdgoACUXqWGDeQ3JuqciKqPT9ArBumDJ56Rko2thwqrHxb2fNeUecYT8muBrWFiuSaGhg2eVRFK",
  "key31": "fPC2RqWSSHXJPbcsoXT56V1Pe9mDybCbmWT4U25QwHbUvSBStwBP8ppzK9LYr7KumfNkvBRjqrgwV65t2E9NTJ9",
  "key32": "3dn6YgboedHcpQ4fdBerYA75cxQvijwnKRQzNhLmaLyA7MkJ745VEoXCbKXhD3ZBSDVPP7y71wgyVwXx7Tj2B8RE",
  "key33": "4kAn8EFsKupP53cGY7irUPJPrp7taXvBoghDZTCPnEAunMMzDB8oLHLzjc1QDP2o7pF9PBv6k1zHote25C5bk7jE",
  "key34": "gAFhab3AigVEey5B1nUa2qTDecg2ppUvX8AyAppncmFFuC4pBukM7CxmWQ1UJHSG7vZWLoXNmb7coBHyKmmUrZN",
  "key35": "4PcCz2k4tej4aCiHjwTDchFDBD5enRR9LEQLskx6iRxZuZSrd9vFyXYcwokNbXhZmJWnwdyNnQQkLBbj5pXoGM7",
  "key36": "2G3xPK65FaFw9Cdjo4zXwzCkTFatgHHKM4DrinegjAq5FLUKHTfgWqY5nPpRvcZTacAnH1PoLneqXrVtnsUxQGi1",
  "key37": "4UPt4pxQA2oXjZ16bjjJpgdb7Tpy4KiWJKDvD6KYNszJDeBQ7aXWmD4amAgcNn5FvunjTzBzvRNz1ZAiWysKMnx8",
  "key38": "4sCM5x3twnqMfYCMF4fCWWFXZNFi225oVfo1andb3LTT9vL2FgkwRFPqzNoPowLp3ZjyC1vJ5LWm5twaPcyp2CEA"
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
