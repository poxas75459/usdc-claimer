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
    "vUNsp6AnkeTdyN2c58uTaCKxa4aN1pEzhTPcqisQd8Esz1MJsNcDXCZRJJeDn1BuiKn9dF9mvR28CmpAAkBvB8T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PX5uVezMtuSWkofS8zWiyZ72wZhSYePPiQCLCQidZgyTjUw7KXCKwjeEmRqL3VkCnUWrqDLYftWT7gueY9xh5kz",
  "key1": "2PDV6ocs3pGWWfhqK6F2qCvCHZ4bEdoH3RNfAuPNKQb8AeK3X8MW2LPf7BTsJQcxMMfSmCiutYpjRxcczRDtfDrt",
  "key2": "3LjgZ5XKkCm51xTNKNEz3duZjiRPQAvwqym8eidUR81Q5W4knRw1wdzkUsekaqhx9zz559f8xQvJmvJHDu5JJC2W",
  "key3": "3cF3rbffpgPosQ2kScdGHDJooiZ7XmwA3Hnw8vLfasfnjAed3osw1wsF1U4gYRSpQVvcamE5yLMQKQVx7TPwmH2A",
  "key4": "ETJdwtzJBuqV4Kp4qiZWtUJGX96RV4UjqCXp4MGHz8Uk5Fte6EkUiktYr2Y5aFMHNxkrYSCkk7NGa7bSkjZzYg6",
  "key5": "391PhfLQ9aZjFUhEpa3Y4r9PDbqnh2w9mjfa1TVRVUeNsnpM5ra6WTTC82vwmGs6D2XV59T58wGBLxa6hsEyHzho",
  "key6": "N51H6cBrUXckNFY7pBBq6jnkK2od1aD6t3C9K3a6aJXqXgdzeSeKscZUqA8yH2EoSRV9fSzQGC9bpLkURpd7s8S",
  "key7": "gDWsnRVU7CVPjrcTY7iHiPcUS6LeqdHriSqHPyvrXovY79jnWfdRYpMeyNdFgdAum626AgyY4SNCcn7CAUv1vnh",
  "key8": "626WXgHnYGL1cwq4E5pK9ajasRwd363vx3L3dkr8GECVzVCWpPzMgmEi7ogzEBpmUM916Er7xMhHTeuMxk5aRVwn",
  "key9": "4VRikuJwTUSUPmgKDkbgj6qaXUPjyKK5FxJZEHMJuYHFF5xBiNyukaiDDVYfVYuKRcdZWTNsBsYNQRTnyiq55VCu",
  "key10": "34AgK9nLvHhHHyiLby8CsLUXJTc3ZuQHxekUuHpgKvxdtCLPvfpmQ2auYKz59cYpe19s8EorKYMVjxV939bhRZa6",
  "key11": "33L8rJjuJ93e1R8eJRgwY4kFGwr9WUZ4Zvukma2AVf2ZUZi6uBRbEFjCB5MoCtxR2pXxB7F43s1KcQn2roXMpsGp",
  "key12": "268oGs6LsZFeEk5gu8jCUQmKxnYDf3xs5BEVsPYbokaCmBvvSh63mwJ1CSUU2UKyvHbX7UeqF64GvtGkRC2sHUA1",
  "key13": "7uXkAS4Jok7a7xUu42mg811fC96t2X2SGf7xs9p4SEbm5Lc4fJ5qTg8qZ2HajrRDz3fdve75bPmPh5PGCCWXxsF",
  "key14": "5zwBewcXbcUtmzrqYyF17WCDqgY7F3udufZnPfR5cXmd5LLWvh6hrFp5yaKnaSDjyn4kFDNo8wRUUJaz6CSTczrj",
  "key15": "2RkySLivaGRJACHPwNMEWzVmjoRnjqTuVF2b2PYVKdZv5tZ7ureQ4q71MSvZgwE8oNKQERE1R5mCgRn8RNPinMaH",
  "key16": "5i1cfmded9AxcLY5FLAP6FDttAAnJLR8gU3yCLh3xNGFe6RdyrGAiBzE1yUkfvhsy47gRxMyHqqCJDUFQEGXWeuB",
  "key17": "3oHpWA7Uceryk2YqqHwySctU4b9jEWhFt6FCPVc9GTmh6KhZ7MX8skAb4nxGLzzYR3Yri1JgE8grj3nYZ2B6SwWb",
  "key18": "wxDEaTY3RQNtFJWjTnBvnUTMS226w6NHgGypHzafhUfPXAEWZHmTz8v2NJd3Vaq2HjjDJ6ic7zXuf4MBmUN5AE7",
  "key19": "5kfRbJKTsa2MgT8yD3RH1Ee63u6TgzZoEypQskfPCisnHj3eGx98Z3AkgRpbUcbAMAcnARtWxzZCMSXM9XsK8tXy",
  "key20": "66wSDYoN6W3FGGTHGCNmuhnYDfgi2De1EyCQknWhrCtVHoSGPp28QLvLL1Rsqmdf2JwD5ZcdLtiSKs7QUCUTWxQ5",
  "key21": "122EAAN8XZVsAFYQ2CbmDk6zzG1wYAFthFKTcebGN1jKtZG6tUyjvnbPNUJZiha5hefTvjsm8uY6q57C36kmCikY",
  "key22": "3XJ9c5B6dqfeTfTKWimvUTeiPsKeHeEQVMnXHADmbrPpEyeoFmMvjoV5y2n4MML5Qg3SbJjqY4KtToK13qf4jpr",
  "key23": "2qMvmayruYt5oZCDymsoe6tihV8XukisB4HRNEz44gsPkdx82feQaNksRq2C8SePZhHwykNBAC3PYmdGsF44YpXF",
  "key24": "5r9ZR1519ao4fT3kTwr6Hz1KRgCWKAAmqVvUBPqAsMqvmok11crKwfPqMya1dTHXFbJS4i1PkLmFWPpk6apcqkBw",
  "key25": "4LErC7GjbxfP8S5QDBnWiCJJrnMYNurgm6As9chuTtRBPCx5AvvayoNhVMapzJZX3QJfojjGAbiQzEbnNqVhgyb",
  "key26": "3cpjH9VF4E2NzX9FdxJ7dLpBCQhEVpQsEEfCo8ZB31ZuBjyNMf3eGu95G7N267bQyyDSeB4aX7x3hKyePoTjsRn3",
  "key27": "kFkgt1ZRsuNrCf3eXVubeAHvRSDa9Mf2WQ4KUqsCFx9y1442UYdC4uUby4QkHjmUbNy68ALhL4DepMVKqimX6Cd",
  "key28": "2WFvS7RnifkNoihLyUo5KGv1vMr4A7HBeXiDu6i7E5kVyj5mcyfTHcFqqVijYzmXPV9XxmwTXNCqMV4hvcjKFNXg",
  "key29": "kqrvJSVwj8NeSh3h8NjHJA36c7PUHQBgeTYun1TRUdWdJjopH7qj6CLuVSh5cbFEWFxh3XSyS741PKmQX9nf8KG",
  "key30": "4TuV3eWVehjbdozNJcUe6LmBBLfRAVqHwvjDznuJtjxmDZurgx9o7F44bMV3eRemREVAM7z7qGsKxm4NYbfsFLSB",
  "key31": "35V2PYa18uFRySeU6BcZvjRyjXKxW1Sw1cgtAVGc8wSsPs8VBZp1PMFXw7fCj3r6BxTuUguGVbadV24f9axUGBUG",
  "key32": "3cUSwZTRECA714jqZv5xFgxbfqyEcTRNibC3GyYdYUxcHNTD7wGNcprtGWa4YgJLdbTHcrXez58XYzSgEjZHqC13",
  "key33": "2oU3cZaUrHjybUXv51ZVKk2wzys4PBZgE3tkkB9g2bbu1aH4HwapqqzKyvaw9qjHSofjXG5B9xBimsKEUmE4mzWt",
  "key34": "31PkRpnpuxtcfQKdZ4tt4tdaPWnTzb5hqg4YNxqRsztjx1kJTUHGeTaBn2zPh2vK3cwujEs7v6fQXNDzvkqXfK9C"
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
