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
    "61meDXYub3QDjWnCiywC44mVTEDvkXXb4Abij49wgQxenku6jhcwDRuN9rjgEpb3dyUBNUykgnKCLBZYvMP1AsUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BJ2uutJPbxXaxparKSXRdgciPRx6XuzTUWVTfmdxePdJMCK2D3PrpraUwggGxJmdUi67NRpifYHR1idhBXsFrPx",
  "key1": "37rLEHXZCvn2WsfHLHUEcSRvDFK9hWixFNXVrZUSAJTRHwAKPTzTfxyap5zSjqPGWZyM4haXxRXs6nWjrtx6JEbi",
  "key2": "5PTSuEnubeDf4beAuS5vs5bZz5qHi6Cahavj26aLjf2Kc7WWnMCjDmWc7W9WM2hVSjkGiWnzGdZJRd6HgDdgpTJC",
  "key3": "5SogsziUESHUScqeMJ6GU2SLu7zgRxyJy1mConHvVnKGnGP66KvQKcbpR3uoTDkR7x9aYHbKCLWCchaa2XyHPjUR",
  "key4": "4yY9Zv5ZWBN3A5ZZPzYUJ5LCmkFc8uYJtr4snMvfHn1MG2gQisjy2vd9VfZRFNYWfKvLU5nxv6Ci2Y7XNx3arjXn",
  "key5": "2CpTZKL6C2fx5RK4LoQKLTc2vgSTEgJwwotmb38JDh2k3hzLSVcnZ7JHKuZ1RAmZbtzkNuBQYDbYYbfmqt9pjtcg",
  "key6": "FebbRB3m29zMGw1U44pURTHXPSXTtHd5pVn4irxmANWtnvAjNKFFKvrSFL6bWp9A6hqhGkWgsHDpisoixUPoCYH",
  "key7": "52WghgRdDZ8DakPGzMinwCVz65p3tzYjLbyK52caJpSaoyzD3JAiegL8zrhQSZ143Su6UPptW2RZjEJubTNehLdK",
  "key8": "2jhEJQXcwAYbLWGgwDiGmwta7GwV5a56tUnthdd1qSyh2NHuPjUMLvj2jb3XrrqeUrqWxPpmhKyTsLBzR7adwzWt",
  "key9": "4ppwXjQbXkdJ15WQLMkUWa5z92BpvEWAATPbaBxdU1YkGUcBUWE9L29Njyc7wmRCBAy6UeXktLdaYNMhm6mwWgVh",
  "key10": "36LbLxsRRGjDyNTzmwRi58jpxwBoacP3nfmTnmYzYPbv941E2hHrZ8Ey6VphWqb7AGQn3LNcBSfq5jpSxJfWT5kJ",
  "key11": "4voqfvcDL7AsdVwYWC74WZdpCK55XxaCKHWoRPM8iNXGe3dWgZKyvdRwLt1Jt5s23rdekCLnJyyNfUDkAXgynDN1",
  "key12": "5YMmHEYHTe2ZZ2dV8ceCh5dttajp24QpLeWCXAz2rZguZ3nBYU5GtAB6ASJVUNNW6os11UNi9N2xuEQBoyYdoApL",
  "key13": "4mKam452cv5pwrFEbEJ8Mv3CZR9pYufY6YKxtXeTtz5gsS4dj8Tt3frTYbT4BwTuxCPgXzE2Ur6hbwenkqCHvp7K",
  "key14": "B2xnMXSGZE4Fz4TAZoYQ6iezWQ6faxrciSBcaBNNqSWmLB6TKLaNz4JJB5r5gGEjWQ9XgnN2T84o5ATxXaVCh9P",
  "key15": "kXC3uAUFwm1gPnpeqLpq8yqtdcRzGHmkGTYJkqSV1645D9vNuV7eejWHnqe3cnWursazHeE9mDtoSCQyuDin9jR",
  "key16": "GFg9Vu7uQCYbWz9iuYPrPGHQCHgZnadmD7BeunYYp3PpxP3PnbA9rWnYqJuw7WRadZHw9nwp3zM8PJTzU5AeRyo",
  "key17": "57aT6MnMRtDzV32vNMAJ6L8ptvNcd8R8JNZvak1u3yLi46ZfeGFPzynQTmrU5sLQiXwuF81MHqRhkrpaMUGmABYh",
  "key18": "5fRjsqCjVqocBCVs46cHTdsXZaQhVHyWcAQNa27knN4DaS3pY4GdRPXXRwgzGqjjfecSCBKpMNBqHKJgL3qywWux",
  "key19": "5JqveN5HJmDWc9keeALbng1NY6s1F3CuGbMCZxQqPLLBu6XLZzQ6pfm42gvTyrfn3DT5GvhdrXnD4XtaHyYQDRCN",
  "key20": "24ozvw1pZs3qG8aukjxw6tZYMm4b6xdNp6LVGAT8SUtQv1kMzu7L2akHPzed7jgAgfQjRXAPLJ1jc9LhceMpKs5o",
  "key21": "123C2UrXjtZjMSK2DvHHLc3udSQQ4o3F7D6DBfqNxZTQAaWPcVDjjh6Sihuydt7XmSHBDxh39VRMekfcKPs5qeD5",
  "key22": "4BoUDgYRe6LB4kEYGzWcaUtMiNWKEUK5zkJvtxTviZWPCGWuprVY6MB5vuyhudPtGwJMh6U3ndrxRzRDDN3Nt5ni",
  "key23": "4X3jk1TVmrrpgEAjCXvfGh4Jye5yhCvLam3EGUmMerJE5ismr3gzp3g2HhY2Jab5vC24uwcX9785Aw2vhF6mMmfz",
  "key24": "53CdVBWJnFaVeStm7P3yP7VdqbQEKzJ1CaH4fjdhhhQvPKnkVYCcwvZWbJFRMeQhRt9km8PVhKzvJ4zv3cGgbEuc",
  "key25": "rW1KzQh87jmxTNdpoG36isZnDQcqTDkk8zLoCeKYvgDSQgCh3qjAu5TZcwymFGZWtapuHn8EJJTYQkgVmQi5GX3"
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
