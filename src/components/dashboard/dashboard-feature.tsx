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
    "aCmbi71jAbMdVi3pY5TDWzsrZZT7hKvNPdzMLQghPBjaZqCW4RkxVur1EedRcKP4p5xDM3hS3n9ocCTjQebk796"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oonQq58J4C5xzXsc1Y8dXv6pp3xtMMqMpwzFFuqGycemq8xwFdfLwBvP2z9xrjqphnYNCCFr3HsDaHqyUUHyiQP",
  "key1": "3HSQ4mS367uUbfzQZQyyHMfQPFtEkRthP6MYgmUCjvwyhzA75nxgjZeXXcsLCQh5fx6xws6CPPCcxUgJnFvVEqpV",
  "key2": "4NERQZu25t3eoefQvXRXmSkaw2VJtSJoyyzCNdWG36krhS5Vi5NeWGfVEmVKS21gxqeFx9WaMgDyGBjQg9jNznvx",
  "key3": "5wJVZ79AGcN2bhA41HYftE3f9isLYLgS1LNTxu92nPMVnJ2pBs1jFLTTcrh6ikckFCNVexS9C8X3DyszE5EVTTMQ",
  "key4": "3grXeG8wazfuhw89HxYB3RdPRJzkmsJpvy1t4fBWBsvYpnerU7ycvszds5tEcWxm4cjoQwYPn9AHt228roWYyBnf",
  "key5": "2y4fsjge4MSHB5yQ3oGX6BQvJ7y9FqXdLuu3ksK69KSAcpQRFRgMAMpNkP95ShwYMtBYD7Gqb23dFagApPkRn41c",
  "key6": "411c48wHFF7Eichp3eZZLhFeHh8KN2adpqR4Qf9mhKD7AJzHBAerPPKJTqqYmxFstnE55BjTqGzJN6Xr9NzXQe3a",
  "key7": "5URxm1rZgHtvopzBjgeaPh9RBQupyH4TBQ3cVzjC9VAKxthe1XzDyPLoRoFCwHngZXZMsJx64Sj857Sz3z2D5aVb",
  "key8": "3HiwhVvrpPcWqhG8M3iE8h9EeagYXREX5jcG8oCCAocvpYMpfbFvaSV9vGgDKPm16j3CL57HurPqENXiSCTWA7J5",
  "key9": "3G71BBWcqa43C2vv29TDGTPvrBnRAMUfiASFnQA3zPSkZ5Q6K4a9EGeSwaf8ECph9VjPWCggFRbvAQMjmh8BjY9",
  "key10": "2ArbVRReZkaPSkm3h1UUcV7F6GFUES8HqrSw9bn6wsfDd2A2ix8a3VMdZik9cZ8UK7Xea2aa1J8v9qggcRtMS9jv",
  "key11": "59jNiAXKwS7LqFRiNyXqPwFHcoDYvB22kw9GnqkNjkytfrkGsan6E3dMHPdi193jRwkhnvJv34JY6fgrgfhNjCGT",
  "key12": "VWXwA1GokCveW9e4sPDYuiS2MytF6MMVb3Q63Gt4CaBeRiJGDZ7PL2qhDzjSwppuqWUJtW9ii8vB2qaGBV3uLnv",
  "key13": "2HZSzsZBedcJJdDeHXnj8tA1QxHJuAyKDqsGaWffoGopUcTvaM61AFTqpsLHNYDATWyd3fQCrEW7Hr4sQmdYfNCi",
  "key14": "4s9uP4z4g7R4CrTTiCE2KR84FFmCD7vAyrqGV73Zqr9ta3AunBvU8Srnn4ErLVcF8iKq9DxZmyDrB1KahjtACDga",
  "key15": "4uvj38oCaV5dqvHymkUVC3JzuFQpVX5kZJ5CjKooHjRsi24D6vr1QvZ8QfB2sWhR1Pfv8Cn936htyVEiX2vH4Jx4",
  "key16": "3crWZwwEjs89RT3CeBhFDVLPcgSAeHGDjBkVD245fABUPDign9CG4vuZduQSKqhAoaKuDJm4p6YWzzjmt9VCj6wQ",
  "key17": "2BFaX8vwUyTfmT3icHB6X6cuSd4J7BZuo92DtHABSdtLmSCRkX8UqiJ1dPJcyXxa7VJER6SPhFQpoiKHANchZ4dh",
  "key18": "34ickVGToEeLYmAeRMaZNAq4w88ZCkxbRoUpN2UzRw3iyjSRJSF8JA8Ygm2ZB5ybjEczBx1VLfKZyWxDyuvNpkuu",
  "key19": "3c9FLuZt8tadoc2NAUSt6X2cAwowHro7GQL7mewbGbh8tRAWvbhU1TGAqVEQR2yvVsT3yLaNQZnfwKqN4UH6saYG",
  "key20": "5jP6EkTKVoEeeQLA5yZTGb8vnUoSdxfLeVYqkgo51nbdJcHkkrtYsA9fDuJ9kJC513dEcr1deMCgs4JShPZWSeEy",
  "key21": "45gPUZ9FJkukmkmGFkwKUWAN3e2wFiSjmhiNAhWHk3pfmaAhRZVVeA5xCgGYC2qJXKzwhMynkkvxSjsurmqU87M1",
  "key22": "657pY5N9byapjNW3zKD6qofVy8DAwUe5yh9Jfgpwmm2e2u1zwE8hvA85mwGjRdbTk4cqhyGJ3GyzT57ZkKZmj4Vr",
  "key23": "u4g1nqAi2jfLV8hDmtMJPS7Mh81b4Jj1yqD1fZNsGM55DpfYs4QUsYurWcXZQqbHz6qWz7wHAC8akSjybExUqp6",
  "key24": "3oZ13XQVgDqSLMhGqZWE2ZqN3UoLDawM7gFnTxRMfEom2uxiT75XWG4LmvbcWNMdqsLbThnp8N9dYkCWHSqnDwaN",
  "key25": "4aHUmWMHqANXJq2nUDrjc3DRRNxA8C5cqp4wegpXgsX3TVxmH8k62kNhYwXuw5oFoiGvysj7Xuop2ZscbkSGwgCn",
  "key26": "4wuEuNLf5GzZJh6N6y79V5CoLjAMbftTAzoJQ1NyXUUCjMh4QLbS19GsD3p9wNbrMpd3wyqASJYFstsuZd5SFHqe",
  "key27": "3AGVZpS4JhqqPzgpuWDGpALYdTuVwbaCytwfBXjcfHXZv5VSowUf7NJde3P9m3TXLcPpbUwoUfta2YHTWu7pSVTB",
  "key28": "5tq7BoUJTLMsvWff83xMf9UD8cZ89oayiBRa7h3cioDK5RwqiF4G4bSQT4MqNZFY6z2xBmem5NkG54T5g9xFmvzM",
  "key29": "4yWHv7KqPCcgX7JqJEEKZoawcKvfSTi5MV4cyJbhtqnUQBzTJTRDpX9NbkvxiXMWLCYWrQLYo3JCmpBzVznbzkAT",
  "key30": "SKwX3Dpptvn6c6wWMKwdjeCHg9XFbLggv7C68Ztag3ZfnExcUMhhqzraY3jDTCmK237CsizumUWHwbpPDgJVWnj",
  "key31": "5BgZux3fJ4kvCYZBA4AregkprBkAxBcMuqQJPEapJMVxv41Vxdg94DFPuWuNBtgPc5nCYowY3K5d82rm5XegTAf1",
  "key32": "5333JqVgkKyHUdq7X391F66dj6kdoPfeMgD3MgfHsLtAGbua4JdGN1nHNB3wUxP7Wzhr5EnPpyQKkR58nUMJtoYC",
  "key33": "4oB2cn1JD9UDG1PZqmfaCthTmJ9xm8CVycjfoaMgFyWhwMyZTRpwgDXzDNmfQyfGQsQo6gv43FeBqNjLLUzrv4H2",
  "key34": "3DcnsHN48dhPosNE62zHFikZxUYrcfNL1y5wnKcTYZzfPVwPZUF1Gx78u9oH8ZFu8QzhnNDgEaqrXfbR4QPomm6h"
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
