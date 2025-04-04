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
    "55HiUxMoSe327NchPy8JksUVi24yNUhXdCU2iYNXTrDueSnN8iS8eK5sMk3Jcr47RSFDLk63sgHo4t3S2KKvdZvU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LGfRejZixtLUnUoMuNjP4cMaNkouEVgHkQtnrvu2vH1henstrPLHa5UQwXLagxdm4q8w9wZ7cGGqw2VrjpU15jM",
  "key1": "EtUhtwGDUE5usQ1TiUm5Tr3dsfiiMHHMvCcvy961W8cxEBptmvfq3GppgSeXiX11woj6tvNTGK7xDVU8aMMa6u2",
  "key2": "62AT4SoyaFuWpQhP3RFWhkP3X942iWyNPGwLxkMt9W348nuQ8sGzcBd7KNhfSnPrneZqeGmTUKzGEeMfcKXrRrAj",
  "key3": "2oz4P45tuwTN13xxpTBkVCgfhAistNuCMBWewmDPLfqWrM3CqzUocJ65HWpQSWQ32zVfY6DFgwYbPxqZFqGb8QQp",
  "key4": "3Amz5rArxvLPbPJaTJV7U4utSqDxw6Efd1h2JhkF9V5aPznPUMwud9zXx2uJ1UU5eeEYLmoNrsXZyaa4jVdLMxdj",
  "key5": "5M86AZ5V8jU2sLpR43mC24VnrApGZFnX9WFrhmGNZkvfMgNpLkub3oFfBjs2nTmy9XFkjEb3ioGmtbp5REEPWWQ9",
  "key6": "2eLNsDvCBnetWLEvVMqkTpThofqdJiFa1SrJGcAemQzTi1x9JdnBnYW6PND7qNpKJsjCNWNYHvmUAb5Ea8rBFtre",
  "key7": "3cYM9wQUA5BTNc9CLBkPqP2dcQ3wVHf6E1pQS3ss3bBTaCjYDDTkbGL3QMNJESrTG8SpF6Abt8jbGVrYr6LmWYYq",
  "key8": "5FQA7QL8SEcDYMvFDQ4YbHemkm2hTLnxJYtoi1EvuLVP76JpVkfujzv6jARqa45W8t4y4ghrk5HPTWMASvREasjp",
  "key9": "3Fst9FtNUzZrJ4dHVWi7k3UBDaDaUGGhKdFTW1jN54gMPLcsza5ETeUvxWm3ZNo1xiJAFesG7Wet5HfcHzePCgwq",
  "key10": "5ED3ef535a95ViMD8V1QaSDWDwMuHcGzrvraS3E4DJUEJh9UAKuVmVoFbryu6xaHENjThdSWCCWJ2mjEV59Vi4fc",
  "key11": "4HZsDwXfnZgLzwqvYTWgQm9ckPdY7U4NNK2bjCPtWi9gxRuAz4oHTZb9Q6umDHHkaD182LfLRdZFKKUT7nGdCGjR",
  "key12": "23YzZSGT1LqFhPAjphH6nRYf14AR2hKGJgc9xmhLRzctZ9cGwj3vL8LY4LidG6nMbHC3cEVEi5kRPh7FNyUNwiRU",
  "key13": "9ah491MhDHpNcuaAjEbidvRK4Whepm1VuV9HdjS8utkv86uNhC8UXvUERhUEr9zLiYKuWJwdgfkqEoNiGvYegbU",
  "key14": "2Wt7RmS7Pj7qzJttNTkT5co1iGCT4kE2gbxynULBdrYcPzuXhJvf94j4ArU4bt8CbP2L9Qc8wghrWDJypFbYgrBd",
  "key15": "d5Tcy4BthX2m7BwhDo9NSTCBkwhReNfRuGLvT5JRTK6ph8LrqCLLwR5YBAi8CvTk6ZNWHfjr5v2BoHfiWFiad5H",
  "key16": "57G6pEPuQzk3kpFSdfJTbDMBenyHbNmMPAMRN2EV37KProRei27F7QoWA4HMovx97zLff5w8YViytFn5bDiJcs4J",
  "key17": "3YyaQ5dxWoWvWkJSiAQP1nMGv5Yv3wiJzX9c7p96GNC2tYMfS9SeqJbrJowRzEHmziUD8zSmZwvSnAid4Q5MCXWs",
  "key18": "5ZfAuEcTYrFfGC3114JVYmwVE9vuj4aSkZVfYWdgBm4LXmsTHRTgaVByUDGgGoVhJDbD5AAp41Fed8gZaZUUxCh8",
  "key19": "u3MXLdV8FCmgoox2sTeM5ixoKo4L8qoj9rMZuf8RJ25wKYo7jH2Hmf8ekueK3S9bCMukjXnwfCcu4hv9xqGqj68",
  "key20": "2BX4cVLpWkZwF5NFa66ueYLuU1LhGkDevAShfowgKHRA5Yv7hHodpa4mMbf6wSwJeTNXRTiVeVMNFoqEGdg7tqVd",
  "key21": "3ZvqBu4n2fwaooQ6YutocNugNnTVq4zvDNQetsXLfb6XPeQL7wiUgAdGJFGWWZ12zy4yZPLzJKCXHqgPsd9FhED1",
  "key22": "2mVxYMm2BYzzuuYkjra8ReVRHUE2UM1n6GhYJzEK25LGRZVUHbrChA4SciUyMAvnDbokZoMizDu5xzacX1rXSZPR",
  "key23": "49MHjCAx6Fpyta8a2mxXw8D6vcN75ExQJT9f7Pv7TAm7DiBadJKdF7AhX5ZStoqZ7AcgYNiFSxnFNFxEnv7sc2LJ",
  "key24": "5QJQzyEakj1QKy1D7x8UgvsiEL5pFfqS4c2W3bpWrCDNvsyLKcfaSZVudN6mSLkU3vVo1vY1ijEgk8UcdZnTBA8n"
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
