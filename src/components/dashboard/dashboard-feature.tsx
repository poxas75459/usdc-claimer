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
    "QnT3jE1PLckSrSWgnG2X4GaUBkYUD3tYkNW13BXPzoJMcFjhKnnTQ6WrjTkgmuobjFruNUDiH5TTBMdDvM6rycs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZUpfa8qtXymj86NNkmXJzLjratMawpW9ughWa4UMJpFYKbaUve7bGL3URtvTPbKTQrWJAYinwS9cdkhkGbNDi3y",
  "key1": "3jNSpoyoDZRyVSteZRsixBEZdtu6rrFXGqAefd2FgxKuqSZgxMeDXmhCESLBXCThpx8mRuhmVMQazNSRj4NeTXbz",
  "key2": "HSBkmwpLBukvotGYnKjrgfYtS3ArL75P85zm18EKTGm83ZtXkWL1u9u19zHcSuoDLYfHCqM5LAswubSiTupaWWu",
  "key3": "JU6SdP6BwdfmVutiPiQHuLAFKXXwaff2Ly5TKsvtvUbG7Po6bY3K8w5XLiT17ovwkYdod9DXAcYTfagZswroEx7",
  "key4": "5B9LLtW5KeN6iky4Wq3bwoMgMTaCMGEKGtM4AYL6TF7P7VYbvPqtvws6Gwahkax9w631sMnoJrS38tYN7i99iri3",
  "key5": "5EVR5Tgiiyw7apQfuZ2fDoEX5DegXe7CXWYWUJ8Qc58GQ7NkqWonGJYgdt43sWKaGEmq3riGDsVp9V9fUfcVVaiU",
  "key6": "2eizUtm9vkx82UNQvDBXkUH4PMVQcqnHRXqzgZVJLCfWez1CxHbKKsgj3X1AjnRewJ7e3KysfaPKRqKhqbUgHDaa",
  "key7": "3w5FfUzuYHxDF6fdaa29EVhbxAu5xyBQF3cRXLKgGPx26ZyWpaV7V1xa53iDemo6vRsQjvzZmm4W2LG6wQ7kNPFk",
  "key8": "4aqqeevaAbSunoCz5q2J3pirjsRGUDhK3BXAyDsmf3ArpJt2Ukq4m65aSsfdnB9PyuF8m2KYjtt89FMnmdaFLDDe",
  "key9": "5QL9PzZCrk5nUEvCWTrkoymcbk6fJ5cmPq64RGWVV3wG8xYv82Qj2NbboQtH9AYQdNDeJwjLbSikz218F6CD7ETD",
  "key10": "dcCHNA3sKpDUTC5AFBVZpaGD2o5W6o4fBJRTY8UxzZnqNgmnQrNGoka5WBRJhxThFvx6TkQgdDP65BWQnCaQ3uC",
  "key11": "5L9neefipw1eiLLFrNfVTSFuNvKZ2NLeMGufFgiVwu1EyLorCwNme5zwYVHEV2xpexy2AM3kmeEzXwsMcMUdyios",
  "key12": "4TKFc9p229cH63VJQgdqb29oaNBeSbL1Y7uDqzr34ajcoqyf1v7xSHupSc6mnLEwykpJ5G9MWRERFpyVp8vbquAw",
  "key13": "3bSVKV32FWJdJfRnXvgKqfSVXdFk2MAU89S8woUwnN39fDjdndMR41hvCPWvxZm4Ch9uMoRLc1dvBW7LNfT3wucd",
  "key14": "3ViURD7gatpyX6G5CUxD2TLgZuGfg5ixfScLZYB5qn7hkEvSw52WwZ1hWaMVT2uhe3vrLT23Gh1fxzHDqm8mL7ie",
  "key15": "4Gskba2rz18nmYKkb9qWKMZdizxunm4Gd2EHJ5Ex9tYSQpkUKU1ck61Q5p4XWLCT7hrhkM6mkh4rEMP6tpg9KH6g",
  "key16": "4iwPCxdxPfb9stq9Nan9XZDZZGCgBD6cvDJvJrsaFdhLfEioqjFnUKryEwTc2Wx2LGoYeM8Es1k3WsTLCnxBVqNH",
  "key17": "fGst6GgpjNkEBfYhth5ZFF2xKGiXxKHyKKUbFBxtbucyT34gCMZgbJuQVn4d3Jh757KchYoDoXTH5khLJGq3121",
  "key18": "4sUZ2Ls5SrufkUhVzoX6Ybn9PPG93YeKZyht6b12jYoj2JTVRcMNT5nBdY5RNmSSgoLZ8wHcNJ6rXg5Kbwr8xMaN",
  "key19": "nL4oeEKLsvLQg7CYUanoKAugPKGgpcpxhYVdazZ4DZRqYpRqxKwxtKvqNECz89G5iNWZxCY5rTRXSn9dzWTDTm2",
  "key20": "3DGTEGepueHRepJDyNKVkj1A2pWcnHFMFEn2VEU22xjomhPFGFzn74dgALHgeL22APAzd7wnxdU2QgUJtmaKK9nZ",
  "key21": "5EAt6ByG82SXa1kAq6bHAaEJsD588WbgYccQFPTsBFuVVWdR7GLQpB3gdurtNmZzHXwWqNm7Y6S1XPgjAxeHJgxu",
  "key22": "49rJc99drSezfrfkXbxgkdx1tPMQQuxDkinT99NCYLjapqDFXMqAtmyHNTi8QDViQrXBeCtbo4BjDUY5xNmatdZ6",
  "key23": "LDMXbRwfdSoiWomgoEKTn84TTKvfuTarJ2sDcbrca4y9PB8KJ8YePaLn31rLrkTBbgZVsXEudcmGWNVHeDNxxL3",
  "key24": "ffj6Eugdjc5ej48rJuYc714sm2E9Vvp6KaFPF7dpKi2nXtGEoAdJaPmmUCgh5o94LPTdo7veVtP9SGfegcvGcoE",
  "key25": "4SeJSVFsdwWvvJVkphb3HarSQv5YKGvBuKGXTawoUvocUTs2Mhv7rCPUngV2MaoWURD7hBtjrZuneu2bsUpuNAML",
  "key26": "4CtyvR7H4x6RKxbbidp4KNeTBnRgbpdhGK6vuxcs4ZT9fMfNphvhN2aGSTNMohpPuUnXNm27MKth437Jm64omwqA",
  "key27": "FeCfZNww4gP7Pkt47BvYC1rb7QjTv4FqGuJ9Fj8J2wPeiziS37QvoeyC83jahwNrRejNjCeSsktP4mCKrHLRTwH",
  "key28": "35JxFCBY7spWqnxGzvmxmXW26tA9iH3DqmgyWi5BA11jKuRDjrBGLsoRU4NdScty5r82pkukgwJKEEBCTBmjHLHp",
  "key29": "2cTUdmsGzZ6MeCC4pM2fxiEBrTqB9FHofSPKSNJKikGWt9gos5VtBgPuAzMAwrBersfMTG65x228a2ZnH9BajonP"
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
