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
    "4Z1NJEeSWkoK46jhYnWKNczuxATeYv1hrhrsCxez1BrXgfJ75ahLzk56fEyHKyw18WsabQbviyUUniEftd59Prtk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53hemWvhfUGQzyCYkxVqVk8hE1ASSWzxxn61BZXiqtFKkre29isuYGkra8iazsjBRTu8rGeyvop2MU3ZnLnHeo6s",
  "key1": "2VDwmm2JZH4AcUSFZmVaZPtwmTxRL4pSVHBMNLuC3skTaJymJj8EaFcQiWW8dhAstmWJ6evWo8Dicr9i3ZUBHeUS",
  "key2": "USwDtigbxGLqvJk4QHmgVKVRkcSj6doUYRwWqszyUSNZuRiFn4VCVFNZ7B9quregFmoAYFiE2iYQLS8jh4v4Ji8",
  "key3": "4Q7yNmLVXKqM9cfSPervq7spZvKw6BryZzpH8K8hJyizNEQnx2gGbLYxRPn8f8J3AmmdpdxFhS6iePBs8LGxPG45",
  "key4": "22nASpi8qT6Stnyar7abPTyUGQP93k8URVy5P48ZZ4vqvVK7hGF1pQ3tfhaHezySNApBxcDyP9yg3c4RTBXXPFw2",
  "key5": "6wkf9Dn8YyGzHySQApCRDTWaVCWFzJ4M78vWnbPMrUesxkmrJC4Feb3dYUFcmtHpJDSFjk1LK5obcH8Up6Pe8s6",
  "key6": "449ojWRGhpTnPWYmnGzZ6Z1SAdLpEJdSfThrARi9QEMMPes31WJooMhzmCUod2USMs5GPbviuRVwGwwZXzvr7XGQ",
  "key7": "5LC9mE8t9jepEkvvyjYdRDyMyAtjr38bTskCidDXxhVSk7S993GWjMgB1RTrVz8c2xnJofyYnpEWq6wdTqUTMV2Q",
  "key8": "3r2Y9ER4yQcZphBYiuqSG8dDahCcZRxFgEhVXLMicUmcqjbHSKvCJZALkHN7m2gTJ1z6NxzoF2hgaBnSZqmT64bB",
  "key9": "3L1bVAvgiJpA3Fc6QESMo6fUySEDmXvUQeScAuL7HvujYxMPYT9FLjic7EULgR5MjcRR5JQJRDs5PunZ7X8LuFx5",
  "key10": "4JiN9TtfwTNfRvLjxqRyh8CYrXgBMB72MZjwhVqtPNbwreDz37U7mxSvmeK17f4atPpZGrbKzJMsA1LEgYD9b5KE",
  "key11": "23HsWC8FDdMHtKv7W4Q7xtAeachvm3BHWuxsoU1jLuQVSGC2xQiSTU3XyQgFC13e1UG5d4hChxgoDC6LH8AWyxLE",
  "key12": "2KJfg4h1zyC5y4ZC6n1Fio43ywkQebne4kAy31vLQZqQPSPx7DrPUZjCMK58qu1MZEGUnLYkTkzizfyWEbyefWzj",
  "key13": "3KjT7cszvTk5ssDbkdWXCPXu619iDTHcAB9uRGKR8YP12YU1njrNNvDdyaVeyQEmScurfC2vorsxHWX7VF3DXe74",
  "key14": "4kiqmSdYm5qvsaXPSrw8FjrArwg6RhjQ1ub3C57yyWNAUiFTjUpSEiLtrFZLG3ywKeVEfcWXJVztTLna9UGSCkAp",
  "key15": "2NzTfoGGdg26HogD7eT5AyXzkFEpGcgXNp4dX1CHPos2dbj1cMPAE1NBTuiEuvVozd5C4PVYjxZ7Qk5mu7JooqRR",
  "key16": "x36VaUxnu2cAka9be9yWab2Y8N85d2vmcWLbCXzsoixt2jCbWdSbQ8d2EVRkFH3aUcm6ixV9JZYQkpQpT1Em76m",
  "key17": "35GFCyRWWKmUhnuS9CKAQbVdewmbzHR9fA9NoQdsEKeeDVis7mDw2yzvc8fd4NhYqGAwUfp24t3MvT3pq6QYv7wa",
  "key18": "37C9Y2sduchphEPrRQ9AhzUmBd7zZGAFeMYkGkf569EoCQwrWfFJrfQU3ecwyD3wsfFui59ASx4ue13nH25EfNW5",
  "key19": "3Ehs7oJcBF5RHdQSwRcLemcr9sexqAzcwqD9VqVnwpLHtANBnFx5Nnh53LV9243XntxVkqSG3id3UHLLAHNZwUMf",
  "key20": "3WPwMAeRRrsZQZJWK7i6hFZa1fS8G843onPkj1mE7qwzUgSL7CCa8szE8juokMMgcLsT1uHVScNney3tDAqV2W82",
  "key21": "59tp5BW6eujiGbZHUqTXcjSoETtTrRXj8SxU6u35QhHYb1hCbeCdf7dELm63EieWkr8aHUky7dT8c1yCTpqbHJPL",
  "key22": "592ChpKwQaxcxkZUwTkVzzixPNSTh6ENCjzrdWXEqL3yi8y3TiTcTEpgYvAhSuvaC1S1v8gs9rADubMR56CpnX7b",
  "key23": "5zU17ADdk6kKRsvWAWrnnebjFvgi8aVQWoZ9ctp4CLj8kUBoaKYSwsb7NBjBkRRhkQwGHEjxRUcSpxiQReGKfFvp",
  "key24": "sXkuMcJrjUzvrTxMZRWMVMxv7bz8cXR8CYV7aDrZh8rwixP1hDKy2s5DRZmpH1YDXprdMj5SWcMLWNTCvgd4mFp",
  "key25": "2cbgSsLPCgWtYoAp4CFbY8SRJLp5QykRXBVuhoHqEcGvsXrF8S5TARR99MH4nqR1PpEWdTxzYjX3uRHpYb5stDVZ",
  "key26": "2gBbpwaW92r6N1ySubwAgWjeuPyfxji6BRMx44TPm533MpcKgW5juqRaAwKiVkpaDypCYAoMPsB6yaQwrjPozhGC"
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
