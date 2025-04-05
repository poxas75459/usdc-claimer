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
    "sQVZ6pnXzDPSbxbD5rS5hq4iNJsqYJnFhpRH6cuxw6Ln2PHDmuk6L3EWwBw7NmBExEuaS8nXn1nPmurAgsYMv35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vsESVCLcj8kR4Fpn5Kzu95n34PBatu1wtKpowgbqMLm1iyV7EpMEGgD8RktVEnjHnYqs7DVapAE21ecrugBZ6Ej",
  "key1": "XSPFWA3w8d6dmdopm8QFwPHkYxLHNHoAADDJkoiyDcbyF8ky2gQ9UeyxTgVp8gkDPvQHoyqkzuShSWdZ7yEoNtL",
  "key2": "2PYqZewph3GkF8gouQt46pCumukWRZ4uUe5ysJw89wKqtnnhPVSHDwoKJ57gDfVUJX98fjE5qtWVxL7gwQuFtch6",
  "key3": "33K7MxukyeZUPz1sbo4Y9Ma9ZHw7u25iYS76b8iS4a9tJxhZ66QzCH3FMbXbSui91w2JCmcDHwPQPznCg22ZhkuN",
  "key4": "5HBdvUieExNJNzGavdXnZTDsJqmxXe2SHRuHfrBVAvMa5xy5a4A9t1kSLUJhHqK187iVHLARKu6GyrND2jzusaTR",
  "key5": "3NxnowvaDHrd8AovYqahwDS1uukKtftgEDuMDQtfA1BCRTHGxSx7aoGFtMx3gEvXjyxptukT5RtUXtebcoiZ1MQe",
  "key6": "xHFYsN27hFXmcnkQK6mW6tstqVySMFuGu12XDTXPG8vP21iPPhPczPtKkv6kMA1jrZ7Kb11i9qNGoMx2TLTaWem",
  "key7": "57M5ePULG2RKJpiwaMR4ofKeAxtQxftZoQydCLv7jadi68ke7z1fTinBxNyvBphxjLSyHa3Jz7uBTHqtz8ogUBQh",
  "key8": "31L6cZ4hci1KVWM8mzwuCY3ZUDkyKCNSaFWYt2ZivvEp4Q6FTfD7zYNwHCgZoF9pJm1NP4wphFH1exVmufkgefzn",
  "key9": "28eS5GFHMGpebwZuk4cL3GyuqgsJtjpK5QJFKr6SYCBCSTsQUaLLH9xPGDfB5dnyAK3n2Wf7zYX2paTSu82ZpDkK",
  "key10": "4ft6eKhiM3uqzpv57QCUjPLNAxN9fMDhSjAbMbyhW95i5Dbo3ii9SKsh9fEzS9dC1ecyfNms7bN6DXgxJmuUmfeG",
  "key11": "671rVQNuKrtyDMp2wWUKr946xQY3PZdhEnp7kxirFxjstjGUVBQ4qSezdwsPVna3bqtXkiQWfrXXVKUnw5Qc1AG5",
  "key12": "4WMwQL7aSXxcZ2Hviwm9JWpcL68RbAXbvtdEqJMrbfJiqccL4mpsR5MUL4X52u3aoF3qAEopKkgnw1SBcTtaeCVA",
  "key13": "2SKcwxaUyvhCjiv3RXcg4oAdqghjsz9mR1eRdNDknPKvSWdozpp1y2Q4FCZhJeQhpWd51PiaJCKbJgeySnfWoM8V",
  "key14": "5YaPLTdyj99znNwSGMH4L5fq2tAj1ExXLPaw21SYismXtyQi494mbuKvY7moRAXnxuKBEnBzruf5TzQbLWnGLKFB",
  "key15": "2Cdk8fKQHwjzfhaLshheb3BL41qiEwwD8LaMeov19nTxtUFpMXEjPv4RyHTivdRJLWB9FWtfvPtbvQiVYshjbqQE",
  "key16": "4tUeN15KcLuG6b7EG2T7mwtKH6XVgheAfZ5krxn55dBPPBmRdVBx54fNAkPkJ17ouLRxZ7F3FhS7VaLPFaXwaB1W",
  "key17": "Wnxx9A5zq8P2WdSJRYfWJYQPG6wmwysmx4AviWHnqT5jNeYcT2g4dPV6j58E2vunG3wKcQ816PedStQt89hodar",
  "key18": "4HZN8k6dEnnSu16LNMd7Urz1GVpmAe5HSFb8ML5icTPBbQp2PzbDvsT9MGaZ1kUQavUdx7CFhSwmFSoi4fjz6NMm",
  "key19": "468aiBk6LbtN73Gk7RiMpgFCpBjdwzzCGNCVUXe9kct2ShZ16Uc6JpJbxRCQ26xM2aELSnLDLXF7uFoBYHdtazZd",
  "key20": "4U8bf6kJXz5TbdTwo6Wpk1TyDKTS4tpVfCuvw4n2DV75CovvFdWsUXnZcPDULk9H5FMpvSE8KVoeTPA6jNbTfTMv",
  "key21": "5TmNJp4ixRgoUGJ9hTexuiA5RzXdjjsokRSUvkazAvkUSBfyAbZfyWNyTnvU2PEKCoKbcWQcZzxYn6zNKXdGJn6M",
  "key22": "aVdVeWJQGozoZehKTfEuKHFENuqQhkoDvLyyn7Mtb6HHN2b9bbaaEJSAe1nr9jbF6nbdLnNsAdWaAdr5bqz52Za",
  "key23": "5KMCSFpPV3Fa6CuoH8Pe2LrrWHjN8zrDdv8jE2XgPqnbJV678ac3zcqa6NugBLAmBUZGS2VE7ZduBZrEmpnLy9bV",
  "key24": "39C5vPB6BEb3PVUQhHnADF113V2m6iZs9jA8FPSFSNWasetKHfSZWMsF2853yFXtsj3XCwasNfXrVKAY35D6m4P3",
  "key25": "5CAD4PCPMzv3kpXdyCWqxsa22xXEKGuxa9DQiPpTDYzfRwVpQVu9xD8Ehv45BWdSLPiWryHStNtwbpsXmvjDi4Xx",
  "key26": "363294VYdY8v7gM43mWpieDtHQukB9EgSwJyZH7Jh4rTV3qDA7c28TiZyFSVxqQVvkA7qtwKXNL3A4jbZcvq2zLd",
  "key27": "ptY48DHXcEBT5Y1h7uE5PgCWEpjuyh21vuhSxPubPEh9njYxAsCm9DHP32UUEMLgtS1wJfivDH6HkymUd6Sk3YA",
  "key28": "3PjrSerNvueWVV1t5YDiVkRmzDTYtwQ9j42Ah3aN7AdRnHMvK96CKBgQxCeimVBCynCdkgLVk96GZGE2ZmBWTFji",
  "key29": "2GgtyjQDPDru5N6XZgQuQ5qNzMM3jyqjzNmshX7R2DwBao2QamyrDryzqKzTEUxx8evCVupb4m6czKcfMKuDQ4Pv",
  "key30": "387ywSshT4ZbWxCB9gdzvRktJ5doAkwP2DCdF7YLBohMGsQiLZsvozrdWc5jdMbARfaVzFpRouCxgfePShwMKq55",
  "key31": "38jwUrf3eforuFi2d8pDPtMP1FyMVrTv3G7XfVENXn1ueXEfWFQgSrMDGJonJFs2b6uarQw2z6Ppj9qMkM2yXEXf",
  "key32": "5xMtb5TE35vZGuzkRUSS2ottTVVwiTHHGfWq8ZbknHpeVCmJhx4fuZQ5Nw7fcUE9Te5ckuu5oG8cnFXqkn8UWY7t",
  "key33": "3W5DQT3VJzdxMTxp9mxFrmBDb2CqePqCUW4QbgS1woYcr4fVH6D9vy7risUV7o8zNDJTRgvzqUfiDDbdemgR2SWs",
  "key34": "2UMiMgDDeN4WkK7dZkknPSu5HqBbjghTmcusMjHQANtJAgMhiekxstmMqsBYNHu95PsmyD9o76jVxmDFNGMD2iAz",
  "key35": "YkGBt9iF8ta1oaV3fmNNprJ1e64SyFTttXxiGKMukJ5vXCn7aED11mBsgdaS7dNLZxTbMZgssG38J8Sh9qvBxcp",
  "key36": "5oNmE3orR4DmGhwLRmAGLkQ1Tk9zXoMmwHVQExrpMyBuBkWhuqpfxyJ3fqnv6LKXtmKXxZKy3k28KQr1ReacgkUF",
  "key37": "YbER4zA66Wx3fZhB8XSRmueDgUmdYEBZ8gPZECoZWtR5YX88uTjxU6Hr7TqZhZ7kkRv8xY9UMuR2EPgr2wTUHPv",
  "key38": "o3tmVzfBmokTntzGtoat1AEUXVaHsVZBa3LsuMU2WLsWvAoDq6kQCuinp9ohU7JRxn9eYexzv9uu2pHNVGcuaKc",
  "key39": "4JenuQLnFrEkz4HEcXtqirNgF5CVqi2AA4nvpEn8BW335hHpQxNbXPjPwBbJgjMByf8jHZjSmfmjwVgrp1yQpVVU",
  "key40": "3e3GFshBvcFArkdxaEnYqdUYR2uEci6zQZMLuTzPWdiwFGdWNwdQNnkvLKJiDTs7xJxpYWJmG5J2cSAtRiYWniPo",
  "key41": "4hNCAAH4ho7N9pupM5D34LPQb3JphPStBDzrBweXiGprLE7W7bK4i8GkV5tJARsFXJKSvn77uPkWzPop6jMQa5gF",
  "key42": "61v4X543iFEK7ZejzE7YeG2VTAygL4FTGiCTTFzyHuaKVWmmoWZiwhULg9mVKip2JTf1bT9HADeZoVhBj3HLoH2a",
  "key43": "4a3v8Ybm5aTdCqr6mbgwcS8K56uxft7GsUoCvrGoGx1bvsQ7UmV8WLoMRHNZmgP34zq5i6idd3AEGDKbR1xCuVtL",
  "key44": "3idTNcekJBcRHNj1roQrhFauXi5HJHZfsjC5HgEo3sTLprGjYjqBwWBngZrBf9fG9BKPJTWdS3hhE1A6uXnfMAvf",
  "key45": "2uJrKxotj67iS8af9i3uPHtyQo7PfCPLGFJZUV47nGthoCkxCBr7VhPZ2iwrjhvFkLbnVieG7eZ7ZC7giMFY6qVb",
  "key46": "4cphu8HG1htCvgHzWHPx4aUWtyn4ywj1yrJ39Z5CpyhDwbYUNC6VqQu7Np4GaM9hRRipCAwjuXNpYYzCNoaL6Kc9",
  "key47": "5pxMBYKDHvYrgfujUr5humBLn9zTTqTTb2NXJewejQSAj3WNVwdDFzZTerUMxy9N5D3ZkNtPQ16vnPCQPT7TZvtg"
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
