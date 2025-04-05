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
    "5mjBfv7AhoeQvEfi2gLs5stFhhLPwAwH1soGVsYfx8h7MZ7MWWc9aAB4pyYuk3JQGbCFQkBtANkgiQ7V2uFYeL3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U4YPQJ8Jutvc4xiwXMDSHEvDv3eksiwTWZzCYjekNvvqooSvd7h3nuVRVAvsxLqLiTgjYA6BAMGBe4HZULajdfi",
  "key1": "peV94tK1JZxk3X6xMd4vb6AWaq4XkNmjJnH6YoM6WJ3KZqncfGsvRW3zCqcTcKspKYQEpGqQ6tkr4P7CuN7zaKT",
  "key2": "3ZWKm6ASr7KADXVEiheqsHgL2gJgCGLqv2X3Q5QdiDX1gC9fyy9TwMMJs9SdZ2txjcbWgGkU1DRR135WiWgpMznw",
  "key3": "PHjSCZCRkYq8BcL9QEhkCWhKC3WhDHTes4bh8ZDzxjzJGgmJExuJA38KzpV415FVq19649iMWrePAXXySBp7YhX",
  "key4": "ZswyvuZvcy1XkgciNd3jziiMCjjZ2CQK6kpaF7wPytt2nm37uG3iLrkVq9NXJgz8zBa81WMHpJAUrJkrojJGJ9H",
  "key5": "548yoXpvWCzLQJLuLZUMwgJaW19VQnfKydVyCCYb5UJMAMVhizBG7UHPpuMR879GghmaSGFEYBNwzE5GH7rU5RKp",
  "key6": "5iW6dnNo2MprYZ8VjYNq299Sa452VN924eEAPQnLLcvEYa8eH5vqCCuLmer73LifD87Jyf5NHbLHCsRPMgnSBtC8",
  "key7": "3uy4t2L87SkGCKD4ZwU8KhxCMNwTfoFfKcBk7BnqcE2npLYDUhmVoMhNAMz6hNsKyKnHJhQn8ZdB8HfxEz7ZLw8S",
  "key8": "4PKwQmurtuQN4J6hWoZ9vyuMHswBLxyFrTde62WNv1M8GgUFsSdsxpSS5iqUaPYAFKuTKt4VatDDUe1F4VgC4YDR",
  "key9": "3SBDJ54cGavcqrAXw2di9BxvZZHz5nC8PEdYWLN6VkQTppip9FypM7qJUU2SZ6qtD7w5vnd9cyxvdGESasg2wRdn",
  "key10": "bffzhiHgoZYC8bMx2cudGsPE4YLKzY7Fgj6nETSqMF9eAiyqGSeVTwWYM43UpU5m7i35RNTgCMNM7XTmAKUhUje",
  "key11": "3EC6TH7W79GqSi5AhGXZuo1FEjsoM5WhKhsa5b7RxHSqPtM1P9jQ75oTCzGAxbox9VvQbfQWHWj2icgg7ivvFGcW",
  "key12": "4fZ5QwMcVWNmdQLWda8V3Tt5xNgJ6MXpKZmG99dMqnmYAqDwTZxSiyEza3zWPwkMwWgfQLf53iiXbGRmaPDQZEkZ",
  "key13": "59BVUp9bcDtu2FfqviLZ3HjERvtKZ58E2niku3QwPQgPXAb2mtgFGLHVh2AC8FbkpaPVB7fhNWh56unbK9hiWMWD",
  "key14": "nPXAN69vjEqdyks69PdwPoT4Uxh4249yFmnKUnBfvHYPhQvWzTvJ4g2L4QG4hMhAmsSdbREvamBent3HreZZn2d",
  "key15": "4hH2cbraTjpEyDJjaioJj4jXEqkvSRYzU8wUyMv6pKWR1HV5XiSDVxGryZ4P2xhnCYDYyxkU4c6nzijwVM5KgVyX",
  "key16": "4fFoAo1kSdzv2iVZLdQ92eUBRJjRbpJ9nyCYwSpwD5xvb2huaci8UgfujeC5eR2orp4nR1zoXUoTEA11F3KRHRdZ",
  "key17": "4dFfxmGrRSpQNe83mxWUoY8rRz35cG2kbWFpJijqqnB1XTLdDsAWfuJoMAAb6ZMssqwEwyVCMx4icJNTnZMUTTeG",
  "key18": "5GSfu6pSxUCBsvD7CTFvZzgtAHZHcYfWu7wmGV4foLwsmoNfSeHrtxkW67QYM9zWoCqkpU2CuuKP4uWhKJwov5yx",
  "key19": "5oWjEH6Af6n13QQqHUh5kifRrxP61JxaPK5Pbth7ykj74KjNod2NspF3cfSxBmykTntqL6tZHNPKKxutBJDt8Vc7",
  "key20": "SnUbpnV76SCdJ6peV1WY1BQifPn85SwwVyUkuQYwZx6FGQf7duCc9PTd5GaDyg3ftytpMwoPmVTKKSTvkNrxdVv",
  "key21": "2RJNEW8RMi8wuDrtuKS5vpdbpU8BedeyGhnzVzfo3djud6JuNDqZdwHiLTgEpDoT6cKsJ2HYfSeLvZGH4KMtZsA6",
  "key22": "WWM3QfJGRhc3S8NG8AapoNFk3Fc3hyBamrqeCN6ZDbvhyBRevQRzwUW2szjMrMZNvoYP6BTw7oCYQyAydKmN5Cr",
  "key23": "43uLAdVtnBRqcDxmTxwYkM4AZgh1wzqgoZa9BCvoPVHeKrTyZc6Kg31jXb1GCR3Agn6yZvmsmbTfFfySUf6myEEP",
  "key24": "2z6sPvsmYW2hzaAW6CWjyxdkeGsFMYhfHRohL9DkbeBuioBm775C4CWwZLxgd7JoequeLqKfEZXG8tToTDgzigdu",
  "key25": "5qa2B8u6pQZAvuntuZgEp4QLDQsKUNXNT61eAeJ7rzcWuucncMgALAyyNcSaZdp2gknougJ6QcXdJvg1EyGjcyt4"
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
