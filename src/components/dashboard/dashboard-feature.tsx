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
    "5Ky6hyTKvf5PtShXrUedEFfH82pFDbgc5n78fkvG4nszvsuvHaeyTCJF6u5XfSwn54ANhV4wwXm82N8gq6XuAo44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27AALgCbyeKkvgWBBzmdbV1C2BfHGw9P11mRaJ5TPgc1rhBWYLcqnpK6FCdF18gtz1CpZcExT5yHQJGNm6GWkvNP",
  "key1": "3sGyou8HkBvS21mYi2HC1UZaNX5QwEgrUoneLh52EFTpLa7GduNSN6ZWb5FSviHfJpGkqEPvdiBLCf1atuzp6hiq",
  "key2": "2VCwaXuZGTJfR8mJiLVGZG71vHZzENZth6JRofoywiyyqEa7A5X4PfiF63nQUukGnAzeB4py8GsB12qWLX8YJ9E8",
  "key3": "61oF6sybmHP7VUDxr4Eg8rCYfW28wnDheesCBi9erYPHPUW2Pz1PrnHeLMFzs2tkHUtopm5HxTqUCsZXRWPXxGF1",
  "key4": "5ow9dMuyahzZKZLqKnr77EpGYyXsn8ZQ91es2aTRNNs5cLfMrXsSJCyfyjhjNGTSXJ6xokgnRoYW14BMrrbwiXfV",
  "key5": "5Fyn8SMyNg4GsZcPw6Jvbgd9AVLzTzdUqvXBXmKXDNgGi3i3oRyDqYmMN5Lbzs9VQpP2q9oWhY1qS2YMkMVEbYtL",
  "key6": "2RfiqvrtWnaYhHDzj7edPWqDUcBDvqTLgXNWJyaacdKY3mBnL3U3QFpbetwR4R7KcwKzR5pvu2PrBMnSLCnMv5Jf",
  "key7": "oFkDTJZgf2SnoLAQXcrw46eY2XByF7SPHuoShXGnCJc9K4GBYKU57kykSz1ScvCXb8j1PbYdc3gb4BxRmUsrqXc",
  "key8": "55SbvmAb6RcvBTGb5h2eQxar9zzzQnjgnzC9vj89cQbczHwE8McP3bWzQEvQGUM7kEn6ghx73bXTpbUthqq2voJg",
  "key9": "4QR9bmDHVAyj1uv1DTQXFGJGugRTTY3Jhp9mNHvjLUcNepLCTkfvjck68bJYfmd62zHNmrfNL9CM4FpsB8wb9v3M",
  "key10": "55iCK5VMNEbgw5doJFEjGw2yc3xYu7LsavykNPmUCmaKoguxhJf3F7vqgT2T2uRdsVtExAJFodXboRNe8fFCC5ZZ",
  "key11": "4Zh1BFqYTGWnXBMpuh3CNcGEpe1699K7D6WpQtFvrRy7mRr7XePCZotvftvHQbX33JH57hUHetM6UzQH3suR3gFP",
  "key12": "4p9DFuvNTTAZPLyrZN8DjgdeVXoBNSuusWmYzeU8xXuZ2jnzboTVCS7abUnrXyZyct3ifuvf7AdUKFoVKwbskL2J",
  "key13": "2tNb4Yv3zQa5rZEqTQm64MJFS8iJLKpMTMXiVCFtPajk4qRRdEvDnZb5QZkEbzBuq2XfrAyd19eNdTQWYN8bBNPL",
  "key14": "46MFy5oEFMzdp2qFG6H7reStsvBK3kXSij5frypgyyD4iK34pfNLphHVLDUBgciN5qgnN5q4kpAyXsLJCwZa8SHD",
  "key15": "43gNZ6vbSX2Dt9byLRRA4vuPwyfDqiLEiPo1DbWjcjJVz8jYBxtHEmutdhYRjfLWZMabpd8bJtG8DhauahJkjrXf",
  "key16": "5SKcEEw5JanFiHc668CSgaFmuRVgVWkuTGMKYh5f4H1v1QGSD5LqBgSjCNCZ3PhbpinMeR8EfomU5cnTFugWcPix",
  "key17": "4HxDWLxCtG4SxYns4aRBsxsY2VnzYkGwwfw69oEhkT9RVfAxkhzZ8MpAZXHxKK5TCjSRR4i5imJX2zGKSv4yivka",
  "key18": "4Aw91JdAG3HEG6ijAfR2pFW3Zj52WLFX6EYnwCfYC49yxDwdv8vZyFq34s72WsYGnF58E6pJG8zgbxznnWD4D1vt",
  "key19": "3CKzS7VJfiGQuXwusSfefarUt7kbpRq5efFcm4qtQ27J2HY1k2vLvTyd42izsQg2X3wALB49LcFKv5gXUWxe8YHk",
  "key20": "3JiiBN74zCoPzmdA3XfMMAGSd9ZuvoQNhCR7MzVQv11kFKtMbZrcvDPfyfHpMuoHpPARAzbExM1zviBBg6XWn6Ji",
  "key21": "3DTiaAcSW9Rhbt9jwqs8vakNY34dSpdaKhdbjUqWy5pnxATK37rb553MCQK4Yp7o4LFkYusf1mSkUR8xecQNAqpm",
  "key22": "3nG9fMCFi9RmeSnne916x32jcR8LiYGf9ijukygHT8ZUPVZkMNPLMVGzJYTfsygXX8T1YDk4Mrqy9zyhE3iaHNtV",
  "key23": "BH5CfH8sknjchAovrdXBpxJW38DnjYQK23EP1NaDb7F9YQuDQciEtZokHFETAsbVv2p5LnShbJheEEEDEVPHskC",
  "key24": "3zWcGkskzPQ7dejZGZZLMEsr4fbGZfzJzxm6hAcYNu8H4jrcWaw8kkKi1xe6tP6Rdqjyzrwjf2otc4fZpcP6UWWo",
  "key25": "2B3oWbYyFYDg8moePFMX5GXf8YpsUsQiB4JH39EPq4wccDENsQitYTjSkSnNnYGorXow1fLTd1cjviVZ19SFHowU",
  "key26": "4izSfyZUi69qyY1AervvdUtXkQ8wUmzHm9Gw2FJk3p733LuAobhrtVFavYzMsp9qYSrcKwen8Yn7vAD9pxenn8xp",
  "key27": "4CTnGt8sFBgLyf9wQ4Fygrp9wVivToknMjrYMfCsDnVKMuGjcR3k1QUnwscALuMjvALXyq5W69cDH5FsW4PvirUw",
  "key28": "66Rh1a9ohEH73Sj5u9YquR4EtZqqYcmc3Lk3bhyLLz2JHC84xbPq4BUZZP57pTAYwRhey7aUhvrGwwywjc1pes6V",
  "key29": "4Dn2iG3RyftUCFbRbeftZdxCQ6iGSqqQCpowCQx8hCAczypXDf73WmA8owzg9BhkMmnGvx5kZY9ya6PEfj7Kptup",
  "key30": "3cKSKJWXzMxUdaHAsHXei3VrFeGru2NVKByig3MqmEPTwpUcZeGPs8CAEcE2vJCCoeY6tKXWqrvzWvBWny1Yq9aB",
  "key31": "2EwEjzdHzwQ5tLZ8e6TsJZKbownZqyQZsitNtxfTuc9M1Ym8Xn779Dz11GY8UzP2JCeBP7rAaRmkKvSKGCHrEy43",
  "key32": "5TxYZxtH2jA1KYkQxi2ii3JHoEsx33SCteG7nrLKAi6aN1sbnkWgn8QvgXQqavzNatVmgjNUztWPcbu4B46tcW9W",
  "key33": "3wPT6mW3PubBeNPD5CbnNbsvLC7qEyPMkhFF5ARvRgBChDkJrC5kj5Tc8tSmDHUZ4cDhdWh5ct5jD5GE6ysrwdmD",
  "key34": "46nyVXs93xqde6ifNqSTv3ZRxpzki5bzvovQ5Qc9kZsXFT4BqbjbvfwArGh4PQuZqGdZhTXBFJzf886Va4CXorfW",
  "key35": "9TE2rj8baXRTX5GkohazNYd6KLRFH1THjSon4zCLRv7nourexY55pzL3rPJLgA5U354a3BUHH2f2d9vNgszWuR5",
  "key36": "3MkgQYAP45sPue2THG3wmq2cJMaaWdLUeWVAqWmz7CkEasBNBChxLevCLRy76MSNupjzgkvtPja3RM9F7gFz3yJC",
  "key37": "2hYjqA58GMTzocFGWK1knAPoLaTUmE122qjGTQ42QvJBQbiLJHUPZKgAsmf8NJbg3userdDYVGikcg29RAkjSG6n",
  "key38": "5uRFjbeBq38MwVB6vMr57J7KxT8Dw9VDbdj9HFqwAXz9kbmL2B2ZWT5vtZyCHadTG4v8dgsS54nemsaL6e8CfBu7",
  "key39": "4gLECgcHBf3CV1pfgNEjLodwDdBgZJ2gRGxfiFWZMCyTSefj1VFLRgJaAzmFxiXoaGp1t881RH97AePrVP12cSbs",
  "key40": "5ugznGaj28ZckLy8miW49h5AJsh7ykFQP6TdqjTRAWyqzmvkyAzJribSHGHCir9RrVfkWYcGxbWBs5doiUkPY4hu",
  "key41": "vqf4M7ch8VKcNuuUQUb1ny2f873Ee9dWFC3RGk6z58CW7GZwGGskBVxmNMtwg9stpJh4x4PcEFnntUDVn3rZvoH",
  "key42": "2f3oZedYXxZQA1aKuC5AgAtmgV834HedZkwg8Y4KExt7QQsN87z3LvMzscreFyBe5rV5N2mkACbSmmVvs62aWbZn",
  "key43": "UtEkbrntMvt9MGmetFtUYjf9nBAveHRb6x2pMvbENia1hQznk6M4touVYcrHC4L5RPyeA9TxbMvopWgVguUxXHV",
  "key44": "5493E4NMvKejXbR6QGvwgBFDidXeivnwxy2twLQVdg6T46jy74fkNPe4nEn2vnous4FBCk2VyzgcSswX5xnPFK8N",
  "key45": "3UgyuT9enqwJCJR7Smr4PMM7LAdbhB5GAQXpeMdUj4xe7H58BJUWHUBZuYdNi8i3MCjAuvR9tqqpyitg5r878VkB",
  "key46": "47hBVTE8v2SFSGE1kY8YD3oz75jPwEC42r4KDMTGmrG97V9d4utvUJgJZJidBLDWSA4fKePUYFszvssem5q7WwcE",
  "key47": "34SV3vUPeEUcBMnatrKCT3b7GsxxBKouU1rK9Rbqh6HPKVqrx5GTRmMjN9reGr86wd75xGz5wQ81BzGFvC3MnhtC"
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
