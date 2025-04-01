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
    "2jFgnfjASwRgnT7fiD8okgYhSXTRvuhbKnBhwNCnEAPRywmwLA8E96Fuc73NGk165uvRprX9vteGPjBh2RTZSEAy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "488UdTECDErc83Q4m5nN16RJ9imM8md9faMgdgoAK5MJYFG3rS74bJ5VUNHiYCKQ4tF7Yi9GjDvGSz47MHhtb6eF",
  "key1": "5JDFcD4FEc9aGfqnhHXhTs6epC8LGXJSrGm3zyEkGrEZcp4MYGUz8A8WBMvQRTW5NHH6bWW7G8Tonfd8RnyQU6Dd",
  "key2": "213fpHMvKA6ggMjv5LmxS5W1rYRamPeF66aN41fVqD3MhzN3TpCxSACPKe8xsxy79ZvqRGJyeUkkKhhiebjyn2P2",
  "key3": "3DEv9JU4FBuYkmRxA95TNGgRy1NTVb4fKJaszxp9UzQQ57qiKkpfLJrD9NyZmstDsK3NkKWovuXmGfB2jx6iqbdK",
  "key4": "CRE8zmaq5bNL2tbCb8EtCwXJ4CrJgH1wYAS8T1cR7sCdwr5goo8V1bD3qDjgTz9kEkyS9pwChFYWPrYbmCgR2P2",
  "key5": "4GCRTNXrjDmtmhvuWaF3SDYpY4MKpX6kT4HricocScp7zAewfZjoN1fLCp43GoNH4gdzhZBgPJoZxWJ9YvaYkKLs",
  "key6": "5iAq2zsQ9szAFXNfiDYfFZW8W6h4zpRg85Ca2jBE4eDdf7avqFid7bgUJxfMzvxk8FsgXquF7mcur5343Sr8KRy",
  "key7": "evz9bgW1xTLmq5pMpt5L6Q7c8pTzKZSgEKP8BT6peEkhjAgcBP4NoJsspuo7oEUWTRN1fjqsoB1JsfisFUs8eih",
  "key8": "3QppMnytWbzfECHACLy5a9gwbRpQWutHv6aVksotLtxASZpw5EjPjyMMcGsptXUo8p7UDN4HpukB4NcwNdxExEgH",
  "key9": "4UpJssfr8ra1M1WG4xvzrwUahitU5XoyLQFwwCXc6EiXQDBayGp5acFhCBBznwdSZkijhckxxrND5qozqT6Ai8ni",
  "key10": "41dpPEBhJu7RWDnANxZWcgaD3tmwjbynHtJct9QP44WxsTyyrPidEf1cdgto5mj6WExFZf5Kf7a9o7dqiCoqyfpS",
  "key11": "24rcd4rRxkW4sycp6hsjPg5QUPXB9v85CdbRbdRRbRgaEcSFRa58DZQY7Yc8sCbPy5f4VFvtULtS42ArXTH7Ch6a",
  "key12": "2b7pmi4zqphVKa3Va1JjrZbL8Gtrigbk2n4Xf5DZJpWAW3Lc3bpSGvZauoLxQfabwW9Q1vWLYS4jL6zg6dRnLM2D",
  "key13": "2nkMckLn35GECNX6AtehiA7XEQ3q9tDrQdGPxkPmffYegiCKQPtF5SacL4J1FNtg1WXxmVSCK5hrqKvhYk59daA6",
  "key14": "248L9BUt9biTVcFtjrwVrDCqsxEKx9vjTaSQ8oBfMfiyjW2eR5yiaJ9WWreVgVVbG1KajqV1SSztYc83daR9tMRg",
  "key15": "2kLTcGgLR6NXRh5Zz2ZKQsoiaFL63TzzShVDLiysrSm54aJNyKn4DZkbBnPuSX7UFzuC6enuz3PmDrtd2mccC7Ne",
  "key16": "2xTTt8vNGKRYX4rqCCpjkaFnuDTqhVi7VErv2xdZ4V5xcFJus6HWTvDvryuXnjmJwiSdDQu4wU83p3ewo6TeyJ8R",
  "key17": "YG2S3mRRSttqDrvx7c96LeUXGB6mzkxPsPsCxxqmULY45juSdVCV1P7e5epRk1mb9HQBkq1WNEEbKAHqGxCqNEL",
  "key18": "FCystnoFjjSZJRRMHKt1KMyU6qXccHbgqCKxeNeX8DqMW6mtZwcV4wQK72cXZcaoDa97qbYRQXCnW5kMq8FWCUv",
  "key19": "5vV1RCapf4YcgZRvtPeziJtYBdirDRvX7WLsiYHvMD1FCCsPFPqpYf5DLronAN3e72Wbv97wC8YL2N8DQzCH7V3s",
  "key20": "4smVPmnMHZ71VfFqognAnPATvV5PH1VgCZzWtXbqdZhHuzAMYeJaGiwEGdX2sXN3MpbLYtGecboVrZfZeyP5C6E3",
  "key21": "4niwyLUjk28Jmu4pxhQdHr7DmwARtJFYG4L7DztJRXcK1Us8pUw7Z7B7C9Wb1W2wus2wzZvJXXA5biwWNKoYccDn",
  "key22": "44Hg1ckumpXkjbxJ59F2viKFGbrhXDS4gJ7ZdSrY8cx9nyMvAS3ZTJcaPtDHZ7rvC1nUVhBRL24tuQRFMoCrLFUz",
  "key23": "3qt4rVmexQY6UgBdZe754VZZ64RzQ15rSdBfe6uRngy7KovpU1Sj1jLDuh9k62KyUY9sjhZ4soyCLXKDUMntwGK1",
  "key24": "5F5AR4PKtmqgpKRbLo2QUpQmXgjVQBZW8qjSeNKDikM1GQYeZZH8rmuLSFhnRQnu4LGnDHzdASLJB5WnQv4cejWy",
  "key25": "3PsWL5nCwufzK6YfKj4jrJ1kfFwWGpjsgwgvYoz4Dfh4puxyBdSPLwEhkg1ejJZkS9jSG7PtxikXT5LxLZ6MyNGv",
  "key26": "3z8KWia1vYUVD8RmiTEg42WT5Kv2PRAFdNoaKnskxdm6khCoW6GEAv3TbqirwwTeHQb8qF16MDaFDMx4JpaAfmwm",
  "key27": "5yd8M1HNgnkXxwyJySjhkZZ7MpN5xRMBvv2T6C4PxRpS24BM6xWrbXvM8hFtANxyrQrJPeGyWjNFTwFNEL4Ej82U",
  "key28": "38PCPtRnuyEtWQ2hTRoN5kx27hFbax1D7qxigi2H9pgjbN4g9S5Rb92EE5YzYoLNdgmQR5MsDyuJ6wwjVwppqtFa",
  "key29": "3b56qpMaRAREs2xb37TqSVLaAjxkBW3eFDMJxr4JtZogc3CZKJUSxZNJBZv722kZ4ooJ4eeGTXq6vsuS1kjdDALt",
  "key30": "4VCepxMTT61hCvy3KyQdDLUePPFSnBBAdZ7R39a8iv1mbmQeGU1JG48yuaTaHXnC5aN66eBs5nLuNeUfGh4dnutV",
  "key31": "4LVcgmHidkLrowecPiCs8oHYhc9BpVcjjXCU97up1q6gchuAZPmJxaqvNrgH6vz3tDyPwTjJMGiECRpmQWXLnhSz",
  "key32": "gvonq4Uaq38cTDVVJydiRUuZdP6k77nEWfC7DU9tLr5h68VQhFnAv5vgqFiPmVgKJXQdFQN2Cz6ME8iqJEWBc6K",
  "key33": "2h9sFPeeKr2ap1NVMGGftZSBeiLMaUDagR5kxQ6z7QZC76tSscjqBmbeGjt5wTvyAi6Zpgwi9wNEkQDgrzBabuPy",
  "key34": "2EWAfSc9GArqxejdSQw2XfEaY7TkQngizSPj44UvgexgVfPTqJcTAifV1mK8UTMp15twYMAc7R6m39yCNypiVBYz",
  "key35": "2dWofgCDNy9hyi3sGY7shyXA4RVeTMbkdeUeGLPhLAXEMaeW9Ba8N88CQo1kWgDEJ5yWJhRoCHZ7TzJ1pPceCu4L",
  "key36": "2HjHFHXwvasxEvDASDXm7U9pJLomeeuvSrYM9kHE99AxhBdUjyMcTgZavMta5Eob3Yyq87BjDVcxE2ARYz2ewN7k",
  "key37": "3dCrTQwTsVG2vDtMxeWj4AGh361GXmuidqRYRstVSuAXQN9cQ9BxFfVniat36cHhDbwrBbDaPHKD4TbLA6uK8imt",
  "key38": "67Fc7sugLP7kmbKeCbobfyrecr7Sv3W9FuPcEQqAg7362vQ9xhhyrauq6gBpYjx9SV4bfoyhUrt89dXfRK3yi289",
  "key39": "5VeFonYuovsguKGJDHKjd4os4sBKjWEZzkcc84Fjyb8FXjuUa8RFiNo66ir9aez1ZT12G5BnuzrgZZef8oXoef6m",
  "key40": "22UpidCQq6qASMvMcPgKEwkyQVUKT7geLjSwRHCn4YsCYLqUspDhEUZCKRkBrGmhoKcvFtvMSNFPp1YsUYXi9Ke4",
  "key41": "ik9SJRZoMAXzNQ3euwFmJBG8LXh7mSNWNLjYbsB4SbRC9hnWVwtv2p3A8E4upXe218wGJvZ3i1nsyey8vthQm32",
  "key42": "2NS54niTTHUYoR5ccMRsJChBmccE12AUwyvFg9ZvGtdq313JexwvPKTviWqMpUswm2rmE5nKhs8XaUMfrfdW1mK2",
  "key43": "3xkaeVXEvzUyrBAW1CY6vrXQykyeB78S5Mjr5vRD1V8Ug8FskjHTzHYvAsNnc2nMyBXSmk1vb8auXF6aVGFtdXxB",
  "key44": "2k5YZB4bf5qYEj4ZQVAzeDMYCC4GU3g3ynunkmq5nGVEc31GEEPqPWgvonHf8BdMH1P5NBg9nnv9L6xKNWeGGtwb",
  "key45": "55VLd5LgoZQ4aHfu8suVBErP8HaZ1Xt8jLhSe58CR4cRTAUq6RbEuFq9bGH65gvd3RFNwF9conAnVwfPXxYYcoAy",
  "key46": "4N1NCpocuyFEdyEYJTLix8ATcF9Y263DuAshJBBssGRpnzCewQE3zNk7Wk5FNEL2S74ttZC5vs8Hv2TfQ1QQ4kYD",
  "key47": "3RVaubD5EtauzwD9xC2H7KJrjPVT2CLdNxw79QxwCS6f33YbvYWHwnxntUUobDEEp7Su9VEXbLyRjzT5wXGHc7T5",
  "key48": "GGHtzjrWeY1wnVbGgyLeaH3pSfcpeQX3vezQaxLS3hyH7mupS8wW4VFHNSFALagk2FAQ3U9bjAUzpXw4bztrxeV"
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
