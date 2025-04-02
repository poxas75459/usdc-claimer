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
    "2qgJZsR2omqj7r35gvjhrdZdTTeX2TXLLkZAy2SsKSDEM69DbR6Q95jUzSf6GdPWC8gemG7tknfT1MaFPGV57U7L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hsgWkpGcyBZJQDAVckiHGX8u2KSLEjpJRMyYFh9HUtp752d4DicuLeg4GopxDHFjLo1HMuaH9CUmy25DecGXges",
  "key1": "2VamqHw2hCUL9UfY9PQnjzSRo53udGyTMTxeRdTJe6HSJtNwdShSVkmX4psyEjsJQvWxZUshsQauYAot8qCtAHTn",
  "key2": "3kRv3rq7xTuW1ESRju2WRqsrDMoPAtWyDynRGq2HD5dtWWMepDmTfJspW4hw5sPNsQkBNJcoUsPK8qvrdzxjnn3N",
  "key3": "4UXots74cUzvAsJ1A5HTn3oQKUzU6Dz5n34UApyQRAq5eWnEnhCJu1GByfxNe3Nay75MZZELwxKfdtHouZRNhMhh",
  "key4": "32cHmsp5gawB38jVCUrSFRJuvdSm9PPYmkiuynLmt8YRZN79eByMnL81kbANoYZsJv3x3yVn54wkVgA2XsKMQ3km",
  "key5": "222e5FsDUkxPH4Thcn6RwuPBVr6QACKng8EpzRwLhGC5QAirRqmFmng7Qm6wtrPRA2mnvmULLXanR9iniZFDJF4j",
  "key6": "5yNk9tFMjin27BHaRMzCto5A5NZEudr1JrjgzuPxaakBkJdxmPVz86SFu3ayTDa4RVhmfQ5kzxsMF5eQg4Z3ssAy",
  "key7": "4LBMvnbd5L8okvfsuaJSDicgTTkpBeBBBqbCjak6e4tyau8ETmqPq34bodfaCMavU8HyxH9muHjzTLhDz61LGdm1",
  "key8": "5m7R4wfAyaxFxR4N1ky1ERcjqQCPgTMJFMcJv1dAj4twzcoYeDnn6L31ZV4r48G5tb5VnQ6pStHuqEhZZPq67aJT",
  "key9": "4gyBNmcb3kycjFq8bETwFLdg8RVe4v1qKojr91K9Jgs11Fft2Hsmtvvwez6JJjHkRUbkP2ZEXQYCeHXCJwneSew7",
  "key10": "3A7sorjeRagkymh5RqfppHTkAtyy1W4hFforhJZBjeoFcXKkVQSCAfrB3jRAfaKJDptqFBk7L8fnopF3RhVhY7NN",
  "key11": "3VzGJqBHDYH6WnJvU86LeK3xsfHDaGyfWzzKPpg75zevSQKYMoRFd54s293Ny1yvqK164uf2HqUWfeWa62FsoZKg",
  "key12": "SRRXzN4Jhgk5apHtj9TpUaNFnkC2DWNS7rZWq1qwmfb5bPMBaofaUo2Rmix6nYYwEh7MrLjJfhMWXR1NDphTyRw",
  "key13": "3qXoaukpZPFduVfNcUEggXY5E3X2QsYyGFPjLYGjkJs17hLYEc9ZKNgAtCg3bBYZr9DMShdhSna92dBvgC1TFVLw",
  "key14": "5CudFPtzimL6NwoTRgjxinbEXP1AvVhZZprWdAEovzt8qwVPfpzHhRVYu1ZbPhiRssqNu4PM15TM8HLX1BQxCZu2",
  "key15": "4tuhkzVvv5ZXJg4uFiQnHu9cKVDnyCtSGGtix5yz5iZrvBBtxM4ap4HNBEcWV5z136NLLytgieAV5RnstgQxQQGW",
  "key16": "4VAxDd8NvbCNWMDRn6QxKnVWEwhrW7FNDEM25hXH7EdBA2H7yjLRNZ8y24rykHbHHPKw1djUR4cEedaHE4QDzFeC",
  "key17": "2HA1UtJJ9E1miWn76nMdTpd66fWGeHRb3rSzSuevWvApTN3gaxxaJbHV7C3CZfPY4dypqM6XtjQegMRN1EisDjN7",
  "key18": "29LPsfEamNPS3VTAetCqaJoPSWYGWYoJbiT4d6mrqwCCnUwMb86To8cPRxvAXEtC9ifhLTqq9Xpo9mVxLYxGaqnq",
  "key19": "vampB1pGfHqfEitLHkMmMBgQ9m2tuVdphY9VY3FtgAFbTaFhkwrtVAKp7bGLxnJUGH3gk2FvBEoMSTBXxmzJMJw",
  "key20": "2bBoaY1jg4ERmkGrFQGjpcC53fgYxsFhe9wMugtA6C1ZXqQqnkwCu9NJxekrHm7fBDjZx3QAqHXDr4sSxDcPD4uB",
  "key21": "Z5KHDvRY2fE62ySMAGfcyonoETkkPqSLBGG4XHenfrTwpQD1qN1nRUzSZFXQnTg5uAxJ6cgvTYyxMFgve5aRdic",
  "key22": "ZZHpYeL8q1vnsVy6NheHyqJTRcDAbkxk1EmifDF63aaPNp3ApKTgLg1Pn8sciveUQ8avGNYGRThWhdrJSxKcGmZ",
  "key23": "569KdkkfWR6RYgZcNnWCG3HRTCmo2kB2k2J2YWRjC8fpHNYpQgzdLNMffihS2bdwpMWFd4MEjubUoZnECZuGbpem",
  "key24": "2ACuQ9bBBciwGmTNRpEViMhpC9sqrFo13oC1fCA7W6V9gx1qXUk3r8LPex7JPLrTk44H8zdPfA3ySheEJ8tusj78",
  "key25": "3nv3hkfKNu9SkT3SjEbJ284RVr2pfnWkjmoLKJHp2CgcckB1J7Dc5M7qdSxSjRvf1Qek6ubYYnrxXyBshHqtPABa",
  "key26": "46KaHmJuav6sXN9mxiSFhCwQzweTroDiAdMAzhoDX2hSPHd7Ci7W87oMxWtvAgi3EaekpunqScSPFpyW9sTBxn5V",
  "key27": "4AYsGRLWZtQRoE4g2eMSRJt2qVeMi75ejPZuU5KnznkqWvvukeeAoQshwi4udCCz2iPMrNgyjfZnad6FE7gnd2tZ",
  "key28": "4E4KTVWuoohobYBRT82FCeKqE5XpBVESrnYnKdoNd7RxfbGCRpfoo3qQW6FFzCH1zcmTskZJ9pYU4aCMPoWBYV7m",
  "key29": "2BJ8SazpR94BuQ4qJxm3FG5bvkYQL5kmcKGYtw9bUHWstrxHjQAkyJhZFnvSQgGWv8WT8QijGxQP89FhFGC1Bqkc",
  "key30": "2mNjYATcr3LiT7f6grJjLansHD2uqF2rxgVkLzaeWe1aMKZJzkJdd8uui6S2SRjdhx44duChGWhEx9suMv2TGSS9",
  "key31": "gRe8eyRmVummQ4t6sTt1C9ZRZKCvs4yJcMyQRYZ5zWV5GfEeEnNzjNhJRmr94qpSiNVcmNyNjU5eQtUvH1vjct4",
  "key32": "5dMPoD32iJFyFggWDdYCcU3un6kCHt32gjqKpx2M76dD7X95emxx7qZoDPZt5D7PXPVpvLfYeXrRhZzRdLZJFG2W",
  "key33": "2VBVf2qbz1H6Y3y9yd3CiSWekLiQkLxEJMZFHiqRdicEKsZJ7Z21fxDVX4H6M3x7V8LxEesWFKTDv6bLJJjS2PEB",
  "key34": "4DieUMGT9DCwLJDH6gVkvUcmhbdZzURAWbtB6akpVc7DoYNXPiqzWEY5tGrnvz1W3EE4Q52Qg81Tn3A6Zsn1jHdF",
  "key35": "318kmiEvVyXmqqwCmV7knEUtjA8NhYmGgw6mhQA5Dct86wDLcJGo2GPXDp22XDJJkHt3hkwq8zzQU3oCHQkJHZii",
  "key36": "4dqxaMbdeCVFvqZP3DQHvNieQ4pUuotbFXpsds6UsqMyo8bjecNoeMP92CoSzTtJsqomtQKrxpCHotjH2DSBeAyD",
  "key37": "4CiCYuRLN6FSfEFXNS7s1TCLorycNbBDc2fmgTyyLMo2uofstNX2tw8eQPVmGpzjLb6HdQ3w2p7gq4TSx9Yf3Gjw",
  "key38": "21kSFv4ef5Vvx78sURcsQ5K2L4arXYFgcnEy1RACAsKhskAh7C4fs6ZHzPA2rPmVEFfLiDTqvN2uGrNzA9jZ3WKt",
  "key39": "2n9hN8L1jyi6eTNayXQokohK3CAa17CnzWM3G7zT9hw2qoE6ML6Drd2znhc7cSMee5gL9dHAs4DYb7sANSX9FZXY",
  "key40": "5ibAF9K7LoTJTz3jf9qp496V8yithEzDFKRDZ44YmQRn3KyT3gZA8ojYNZV2QNbrWZ3TKRAFhJi7Nqyeyss9WSrH"
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
