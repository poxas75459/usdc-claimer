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
    "nteMzA3J9gaxuM9WxMjT7B4x2MfnnUgPPrhYHLorp8k832R2LLG3UXGzye5L3XMEhpso5sBhxwT3FDnDFmW4HTg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9pw6Jw3XU194jcSttZPkpQYXxktR4FLvmf3ZWUPRfCYYHhquVMPaTjdysXtJwY8wcSwEo7C8VCprCfkhGCK7naJ",
  "key1": "5Ha8FQkJWvaDiDH3XLonwGAtCXrf3xKq6dhtT9YF6evu4Rb3Dd12qF2qXpfNQ78p9epor7Td6YSkLCHAwWSxTGz9",
  "key2": "2jgWqo2duirkao1Wb16zZ2XLni6mp6KoH4LU5LJhoCnwgBhB1BXiCkFjrRRAYfJgVL4tPW2Q5cJpwnbXF2eJsWQS",
  "key3": "5JC5dMgvFeG37bL9Uuk6NB8j2zUodsD7tX34hdyMCmvzyqrsXnA3wSyzcnNQKdPPLFyyhJXAuY5x811CiBMYq7ud",
  "key4": "5yuJwmQrTaLW9hDRkAx6mAXbx8sgkjBadY7JHPgQPXzoBcNZFixek2nBmmLyNmeB7Vftqd9eRAWwgkoe2PdYhvAt",
  "key5": "5P8wEeN96QLiDqYnVEL6pZJMqbDEtXBynyAxD8Tdbv8vvGGU22ABA7Lk4aqrZfeJy6FH2AKnSMUudCxTD7Nd6A8p",
  "key6": "21VYLosK6mPEHHybMUnjSa6yKDNZNsGovdcEBiRyPznsS62yf8gMdSV9Me96vPVmfHp69nYbbK3Mn2gAk2WL8TjC",
  "key7": "3a1uKKwjoNuCMVDzYk6FwXBGfis9DVzfY6nDR1NByXqwrdhcvzc9KzdB2RzRnRKA3iBsUghNJjjJ3vukNDvpjybC",
  "key8": "3c9asnmWu5e9bRokNxBJnuAdFXCCXp6hiHd2dmCRMte5h1De1bEyD47EfJxGBGsV8QYgdRCbrdG8mCN3qMTUu6HQ",
  "key9": "4Zoig9g3k278vQ7xM7GBvLC8To6Zx9vGgMEmQ13hr76tDafxj5H6rS7i11jJtAMQuTZz1LtbuNERbuSVeBgzm8J3",
  "key10": "2Uebo67YsAPPyynBvHSGrAYoCmqE1a1BJirz3SQodFaeC6hh1Wd6dC9H3JvFu8Ho7wWZThZ9h88YLJ4hPSojShJB",
  "key11": "5neuh1JnzwMSKf5zuM7PhmVHEvh1h3byukxksJziF9E7qxgPpLjhuajSYEwequsi5pmH7GyFsrHkWvTrYSfjPBfy",
  "key12": "3koamhFaaDTaJoRUDfMWJ9iL5wD4i4Asjfu8B9ggijz4GX2U2JJHLPrWTNgeHBHhGWypoiEnt9W187scNw44kkrz",
  "key13": "jDSKGteSpai1bX5S1qDhPSqimpLiqL6VZahN2ULc7sgBV2MvAyxL8KBqGDZYGz7VsK7V2s2qkUCAB7BH3p7k8Rc",
  "key14": "2FVU2XAqTeJ3Gz5amwHxueUjKosVNQk6oZPRjnWEt6EL7rVweJKHbEU3y8qh5d6bxxqoGSAcvX31iHNZyB56E9Nz",
  "key15": "9eud6ye1QFP8S7aGeF8reEXmcG4NadBwWbByHX1bRB7U51qVJZnsJULVhDu6o4hBNEey6cLDb5XookUoCFBwekF",
  "key16": "2jUu5YwwmNVhhXYEsV3Lute7Rj6f7z7y8qHb45AutCQsv9ZVRJSCDnEQ5YDZZHNuuLM7gnA6k7FukDvJWfCsZEsM",
  "key17": "2Yug6UkNzsoV3uYbvhSRH2P8CB99HZgRw2J7hLY5D7ZphutM7teSBtaSKi3WBXZG5wHh4fFydh81j3WU5VtYnBHC",
  "key18": "4uURryvcpLVymJT4ncQBXVnx1gdx4bBosm6wTd7GXZjHRTb2M3VdZsHVoHwZxgCcoC49qHKAwi6Scn6sDXXL45yC",
  "key19": "2X5RhYAvXx7rXsAs2PeowBPCDoudxVZDkCWkeCgKhp7cT71PE7xY7ZZnnyqGxxFM4GLQyTgJ56uYZup2KKovWBYQ",
  "key20": "5GKbr2HXFYAg9owBXxUt6JtRdnoJtaUcNreEkQNxyESExE3VXbJhshmVVLvsqjq1psZof7Ez8YM4JwbdmnbXZQ1V",
  "key21": "4D8rAnENKNmFTTaBwuMA4qQKDN8H95a6QU7yMgXyqGwpfztBgvNmvXT7pLhZtQjFCCRFhZzEdZywAw2tyeFPo3G9",
  "key22": "2ifrrHpk5GEVvqw2E35nz5pURfRk8Z9SEqB6yHqZEbrppdk5C2miU3VNd3nhwzhfUmrhDHK8fhEZjWy8BKHED2Vr",
  "key23": "3cBBqG2HSLdtJaPmsc3o7eS5a2WaL3RHPNXqh4S2Wh5zkk7Pk6do69gcnSDCeK3uc2jHUnXJXu5jk8DM4JEbqub7",
  "key24": "5ckvhV6XvmRB6fkZdum2tYbc42KMyrAXHikeawrPdTNKR6yTAnpiGX7GKPAmbLxTuTWxmNEFiXw5ciCj265PsP7z",
  "key25": "4QuBXK9vsWy69VXuNGhQN39hoaDCp1DTWDxa1WZTLmNu9siNAGFGT2draFWEvG4juURoMAu3K94JvwEW5HPTcqSk",
  "key26": "39gpSRswZddFjNx4ga96BjftcAVSmGqgFJMqzGveeR4Q5vohnKV39j2FtNimKfP4MynBEnbUi7VZsxnYPPQ5uDe2",
  "key27": "2gstw2LrJnffQmodgjht6YMhhU7xPdC9RQUTbYBAfcSzgqdrbULAA9tSM1FfpyppErFT3HkEHE6XcHK6izS3WApw",
  "key28": "3objT3vYbJhyUS2b1U1ts9x9xnADsX2FBd2DRQ4DukZSZfeAh7tG5wSeGprb1CdBbjStK1oZsNcNh1iBcYdUba8a",
  "key29": "5swFmhKse5MDgSD7zgA4CoebMXMCHhjtwM6WwirBs6HTp4Lf1pcX7mpdKmhygvs3hn8u3NBkTkYhS6untgWfGKAY",
  "key30": "3ueYfHhidgV8oXy64eqd4fwW3FS6fcP5MVU5m547dhUbVTCsNLQvByccwhP1xbQBszzoB597rpDtkzM29gQHnGus",
  "key31": "49qv5K3ngXTZievBF7RetJ9fZjaDrxU2cr8m3gDXwg68AtYEfhscFApUxPiKxLuZRRyXPVd1XiyiSNkyzB383V9X",
  "key32": "5D96fXFuVxc8D8kcWhda786WHKZm9DfPuYhZzCk4vU22kS99iuibXxopXv8GBXg6Havceaj2ZVEfr8xVqZHU1BCH",
  "key33": "NKesrkRmxAP2194wzQSzgcL3bb7wLwi9Ae3QWspeKgzFtx2ntUz8C9w79qMg9SGgYPvjBEHwksS67HwaXNC3CEe",
  "key34": "3CPofnKBhGaA4bqDx5mUmEhoDDZdrrZAr82N1HfL1i6JA6KaCBjmZGfMhSrykxioGno9Xm2yB7De2Y9wmRNJq2v5",
  "key35": "5ExCwM34swWPALrHjNxMnkn6JbhABsZ1vtCVtSHV62RuGPBa7QNs8cL3Bfy1DXQz4drSGimkbxjB5AxVaPjwRZdj",
  "key36": "2BStNQ8AQMxdr2HcrhotyvpQg316JiKkDAuUJHoLkTzGj94dmJUYwiCwrrNbShJPYRsKarSxDporv4yKSqHxKB3o",
  "key37": "2vKmQq77txtne7m7NnMm9JicEYq1946dS1h1ThvqMbpiUbD6ZRo3zSiqwLg4mo8mrgpEVw9PTPPwNXS6Hf2aLAm4",
  "key38": "EamG7ysy1oKsCrtuwkaNEgU3e1vST4KfyiCUkTQ9am5h1nhb8seRVrGinEE9898iPcssn49qTKGzfnaM8nMKs3d",
  "key39": "2ugu9qQ7nxGkTu5JA556gKYbiQXCqxmkSk5YbHvbnF5NU4ZNqjhGRMo8TNXdmYXSS4ZxQq5HSCMFrhDVCiSxw2sP",
  "key40": "P5iHUdpuru2o1567BEDkCGbaCRjjhfbc2gCJgjHsYLb6dprPP94EMWjxuHGHwThrFuNDZTe93vmXStrp46DfLqX",
  "key41": "3xk1KPxJyPcpsHSuKHepAwfRaZQQairLgxkxANqy9JCckNaV5hD97BpFdbkwiifnEcTAJ3iC6wKRkWzt58UMGBVJ",
  "key42": "2eToBGSBMiEKALuXrMGaja1hN9bXzxUFq9nL3GYM866SWywLKE2ESvjDzggW2vZnzThNWUvPNVbC4hyNp6zYaQ4k",
  "key43": "3ZZu2jd5tcLgA7XRfcvzXPbJjtzZrMFW7awKHaapqfchPeHc9RKw1QjUAuXWy9JLugThed2KiaLduDmrkdqF83vu",
  "key44": "2mEjD7hjnRkBuSG1S2hLqm6B9o7jNWBTT26D7JQQY7xJSHgA8wQidZnSKmhxvNbX26skL1sFwMnaAzFdLgsjFNES"
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
