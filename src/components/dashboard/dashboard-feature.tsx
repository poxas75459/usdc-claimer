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
    "4JZEoYsZ7SqZNYpbxTWhKSLkdBjZLpvxBW2hPkfiLzxLa6NtC8A28PEvbbKfnyL3JqKsmimz6kwjfn7CtfAVSRdY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GHS4S2CSWPWgJnHNpJwdU3tdDwbDsCMVkCyxq95H4vRjmof3owdqBRajZCqTbt5EPggZQD8a6pF8UGqr7qcSNWo",
  "key1": "5gGofDuTWm6dHymRJPFm9qHz1ixG5G3LTP5vNJ5NZ3ajDEv9nvo3gw9YmFGGrcDCmNBFw5RpJ5Yt6VKH7JZCkiWW",
  "key2": "2X3WJAwUb4fUki7SoDUpPgSK5q5QYNmvkzyELZ92qqLrTLspgmajFePu1bxQC7NxNVcTG2SRk8bpndnJv1VK5Ba5",
  "key3": "3BB5wRotkeSGukY2kQBRGrXUrKMmnS74bFqXKVnVRu6tyPEmdf6cBaNYzE38vA3Gc3c8bJe6s9V1knD89Npq3GCD",
  "key4": "BySFvTEDwvDwMA7gYuTv6oy3dTFeiqi4yHrLPLgo4Y4jAKy4jc2fWjp7kUDrhZiaW3PzajmaernrQgNeiRb1wU1",
  "key5": "4C4sMQemS1Nyf56zZSx8Q3Kj6K1MRWGPWiY68LbppJJxvPJY2kYpiCgezun8EdAiqZto7tXAxFdkApo6zQRXcG7c",
  "key6": "247uz6twqAPEuNuqDThsh9hiPMAxGwANKyCL3QjseHGpZmYwhWDkiztptz48ZuBF6Az5yPBiLmHh4uzxJM5fQBc7",
  "key7": "5Lgt272tfvcjU3CUUiQfSwYGaTa1aGEsYuHgCw4W4JTNQpRM5v8MmPgTjMf9EvsCzfcCboJ7WVNw3w9ubaVEMGfW",
  "key8": "3sM6bUnJpQd5HXXbhLxcEtJVfhBC8fMhiMEqyM1XL1esNUW2jMeeWaHbwyCJSthiZa7pDQTSzbQU1tdLYRBvh74R",
  "key9": "drRemMqGCWfMUDXZKJwEFPr5Mo6JH43PQp9eRZnPr1iu9eP8rprn9iLZrpdAF7Erehjgf2snja2kj96B5SVfKTz",
  "key10": "i3RJRCRfubRte7vWdDQxeaCjNgQLoKv4rrfpbaZauyHEfaejXK4MAdM89TkMwkBJPVHppEME4BXHe9CQ8bD7RwC",
  "key11": "2e5y4so5PMfW8PBhQmGxDyj3y8udBmTtgUovHGnukMir3aLgdUbRuBje2B5PMSet9fiydKpQaiRikjFV72d6Z4im",
  "key12": "4avQeZ3unogp9ewkjmZGh9J1bZgsf2AtZQcQkrLEnRVHe8LVUmwa7eGkh4VScQD4CFGkAUiwcZMAuL1ZeMW97T1c",
  "key13": "5uX2kKkopjEhWb5iDET4yEFioGZe2drfrHBJVhu8Mg6E8cUiPoda78LaMe3QFKZvG1anbqnnLdGoxpNhP1pBKKUQ",
  "key14": "518atbzVhKqXBxQmpjdckTeLzpWFFRvC2Hjbm2kZ9z7ofShwo287LLmMQbUsmfNvXJ1QR8kwu4k3r9t1coCYf25S",
  "key15": "RVJajcYibYpkduoTpQ8Cb4Uv81JUpdJf7VfLg9ajVKbvpheR1pg8pcyuAQyLeMD2UqxzogbGDjTXRtxQPXk5k2B",
  "key16": "4s45KNmoQWWZifTbJv2GcRFSJvJJodmGMGhBsNZTqQBPzu7TMTSzYK7Am66pZK3T6a9WScX7Y9t8YoxxBC3Dd4ts",
  "key17": "6422nKTJDFaoDEyfxw9qNvfnWqAs8EcrX5XoqKS42CAmZCwhiQyfvswavjcrJqQxtH8ae3he2Cd6V13P3paPYQXz",
  "key18": "3dF3XfbMRHeL5phATxA8mg2aYUo7mwnVV2GETFLjhniGUBtd97VQKTBZiTg2E3XyFHxxap2Gy3TwV19yrEq363J",
  "key19": "5bUSKPFkCBNkun5Avi2dhisWeU2XxSMjw7caeJVT8RPH358aDiU5Nz3NMEGzj4rQV8BZTA5nprDfXeESPcmLVvbr",
  "key20": "21jD7P7TqQTgWEyZnruNMVd667U2NNuKM94N59GLwpqR5suY6i3Mt17mFHmVuj6krFxbd4BrEPSR1huJEPeFtThn",
  "key21": "45hUc2Eeup7F33cCtB6gc5NA6XFdTtWfoonUqnTCvp6NAkQHH2iakaQKKZ4MqVw6UsVSztfW8s7aHY3ZcixEyjDc",
  "key22": "3ryMUfMqfD8eqshoob16zGtW6X2yooMyD8fP3eQZJHQjzybtC5FhP5MtbbtKBmLT9NQm6KVwWBbXonvUBZkDx98H",
  "key23": "QnrSsKm4sANDgcrinm9pipCAJ7AFdyvU8pLUaB6rc6Hy2Yr8U5qn88WpMtS5n3fGeMTQ6SuHwjeCKfmEm27ZM1B",
  "key24": "32aJiHNB6AZjdSMCEepGDMqe65ND8bFsMyk1gfSup2BdWshhJBYQ5RWR4sJ6uqpXKamuwGjXdocM5jK4DLH9XzUL",
  "key25": "4UeNw9qN75g26wt6XCtePGG3g6k9ih4yZVr8CUd6kR2mFwjXdWtVVUf2TZwsEX3o52MS2eGDXi5mJpajVeWi2otw",
  "key26": "4N5CFbp2UDGs7g8Fhv6AQEVU2bro2AZ6pZwAMdDLLENPy2tE41tRmF7WX3E2xmZQFDXxt9JoYbucciefr3Y4qDwW",
  "key27": "31m7ypgGDaBHSojf25HgmYSHHer2g3NF5aV9GcSfbE96xjZsXjRJkT51NBwxuaX99FKNppjhHiCBhU6y3tBUSMwq",
  "key28": "3UnnoStTACe8STdDSahCmGvFrQEyt5RXeVnGdGim49RXuJpVrdR7abDXBJkZRiRGY5FGoS6xMcvaub2bYbGW2zjf",
  "key29": "ndhj352jGk8mTAY3AeQVsdpaSRE4SPFPqBzmgYXwxQVAWsknBXULXLHQiQTZ57hX845AvNKHUr3mrQ4HhscG8jG"
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
