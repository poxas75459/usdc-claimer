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
    "ku6myLo9LFRW6RJU1NsJap6wPRSzN1JaTL9hiS6DBouXxGnM1mewRCFssG1aQTggc6e94kuHjASC15X8bYkZFbM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QE7bAZPJWKSeXSMcnfoKC9WMtJAxorQo3L2aZ8LMr5ZErKsLhkNVKYY71TihfmCyXXVoAD3XgyHSDuoaSDqraAC",
  "key1": "2ECFZgJVQ6shqgdnXwwcmmK7uxwXg31z6TogW4jqnQMz4d7i3HGhhunjNKgJL6oLVphJiC1djQy27RPz4SWmiFBi",
  "key2": "2Npg7wmgeyEMTP12SnMXeMfCrpKGc3fLH7n2vumkRgAqajQQJmnoFMZeRdB6FDNTtJabbawrh7eqa7oTJN23VBnV",
  "key3": "ovRcfFYaZY5ViSCFAc8ndqLbeQdXw35zSziZZcnxguE2vK4xc8nLmDzmB4s6gdMGzxTviwSUKrpNWQUSSR4aodY",
  "key4": "YRfmy6TNXnBCNXbBUR1eWboaqmgo5eV2KQWgqPewMdLYHovznhCCRBJwB6gGsucDbbKaTqdU35PbqeUJ5BsYwnE",
  "key5": "2JyMm14XcjJA7sZzta98VozkzoVirnRrrfWSvUj6wEgVTRx2v46iQcjvjA8nngJQDe4RWubZxKheXGB3K6V3npYC",
  "key6": "3XSWg322Jwn9sX5FkCp4TuWkN5L2ohZMBBugnDm8SnF3PLkXmbN9nxcpZgNwbegkF8qrZ7duUv3nz7AdegvqM2yB",
  "key7": "3Y5ruXeKUyQb6jiBe5BFuK7LAjvkbTQr5prNdt2HARSMxyDopkwT5RQMmnvbV6tBM2Ve6pzpCgrUeTgNmJjSvRR2",
  "key8": "4shuX94a6STnuFceD2QTcC64pyZz4ivPCt1Pey6WF4fxBXQqe6Uy4qHp91s2LxFiesicgz2XwtEMXeg4S5gBnsqP",
  "key9": "3JtniYKNj9qcAfww2RuiGX7rRkPdfcbSKBoBkuKi4j1XLhL6AXBjcyUc2bpFx3Lnq3Nw4pRvNUafLncjBeFdmQsW",
  "key10": "4Mm6feFZQfRbxUyS9LiFybUEBkbTnUaBBZaBowdhshuRsppkFEUBtU7AoscwfrAEThGRjjAJ5sK8epZfmW7peawd",
  "key11": "25kWwHPyFv398kvYGpEC23bnq49omD4zk3yMcK3JH4vq7sdhm1KgYZrAwByJaLCvxNnPQ5Rpv377KQcAtyxNf5zM",
  "key12": "5C7kjpVUsqvrxy6Napfkqux4aPMnt5K2iU8eJsBBpvURDjsSiTYV2Z7hH44ckgTijRfWTnhZqbwjyMcoK7Q7X5sD",
  "key13": "4MzPCTssSJg2kLYCzNVaoCom5RtDLCQwcKXjdKWqEw7LMXGXDhPSXxRen9WBCJbe6L4F2Bbbe5MJwwtDwPXv9EAv",
  "key14": "5Akke29TBUTomRj7XZJCZEmRif8xDUo8yB6ZtErJec59EF4PG8zxcfabdq5PAw3wu9mBjBEi3qcbWWkEhKxaN3s5",
  "key15": "4TX4AKRCExoX9Te4Yzo1hPVrXPZ1qKeTsdDzYjtymuk1bnFeAisGyWfvoFqeLrWzSiK6xrN7cxqjhUv6CBFmdiDG",
  "key16": "3yMBMNo7ScHfVUnAA9JDSGuoDitGH4uXnjdWundht3N36rP8WYq1S5Wh4AwM9t5M8uiygbT2pfhSkHXDMJ4dYaZm",
  "key17": "4kbGJ1RTxoT6PazLsxwn7PAvwPVAsNoZDwd6jSh4aCF1K8VFMZjRTn5ZdAMza5QDe1SpCSddNAoBVqhfxBiJ3BNu",
  "key18": "2FDWdYrJznHYwxk3oa4qsGYAu3T5KQofJL8wkXNH2FqpPpw3HpJpz222kpZDp6zsUrbSvfnc4s8wDVKkV3uGSKka",
  "key19": "2dX6viqLQpvoeEsnPhQ6vtL2Q8trm7TzSKBCHRewVFYoFQttgt5cqGFGLz3e975GtbXXarTg27HQ4eNq5j7cFzX3",
  "key20": "3iByqkqAWMCvtEmCBcf44eQYzmP9X221vMKkMLYcLHPctvrbjHfjphrPAazNCL8PzHMxZcGueWSqDsioVWkrn9g5",
  "key21": "ygZ6kUGozqfUnkRHkV6m8n7U2M7U3LLwdBdRTKae4Z81z6WGiLnqDDAatrH7DUUSEEXnp6Xf9JuqKX5JmaU5eaJ",
  "key22": "2tpEKWV4zAJym5BFp6WreQdNN3NiXDTW6k6LRiVacFaycE4YG91rUCDJpUMenmxH1vNjz5ruXQ3RBa9Abyq8dCGC",
  "key23": "28khMVGyMHm9m2PXxrvXGYz2je9d7RZEdFknTqey3D9He3pTuYdXTF8h9ChU4F44kGDMDzWfmt7FFxRM8HkTUitV",
  "key24": "4qU4PTaByFkJrj5FqAKJbeqKtfdLqUDZpcNZ5RqzpFUxX1Er5q94zmqUR4zL57JZPebtGFSw8hVYcJAy5NkvNjY8",
  "key25": "3GYxXxg9eXd4vFmwhtmKirf5mZ3oQcTiHawFh8LdaxRuMsqKf7WEXS93dFhr9KBhkAehAe1WyCnwK6QrixdiExQK",
  "key26": "4Jnmk64QPfvNTMNS9dcke2UqwSxENn4mSdh2K8Z1sqeNo3fejy2xtboZrREFTxWwigqjfnQLjBZDMUwFDwpK1HfZ",
  "key27": "5xoRyUp2uv1r8F9eXucrsCXXMDFwAzV6X6ki9T1CHMQJ8U8k8eQNZ2rhwehTqayM4uzy5JNGWF9jPijrMueyAtBS",
  "key28": "4r7iDvWhAywZBU3EbgrjEZaNyEG8CtxpBAVB5iThXwtW1HPaTYaqCSzZyp5qmsAMm6QcsvQ5eeFUu6MkfaQhMkxW",
  "key29": "5VG88otAtqNyhD753DuZsgZwZynV9popjrHesEpt4wfHL8DYuAnKBhBZHAai6aA2sczkpPBqcXrbJ6DfVRtDs1Ey"
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
