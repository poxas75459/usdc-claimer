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
    "pUXADii1XYQTnW4cbmPQzb2WmTrrW5zFPnwFmCAsKWzcs6K3Jew9PGW8E8CwZisdn43QG8Q8j3wsT5i8NbjJqrB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yLqqGJymygahsrNBEdv3gsENWf9JpXHk1Dw4wZ3Vu7WUBfBPxFYYs9aR8CsGYrQZXvGEdb3tuQ4pqAwohBeAJnS",
  "key1": "3LsnafVypEw99R4B74YcWxtcuArFpy79yAj8vepp7mLTdMLxHBeairE8vPxg6StnHUCCJJRKqFaCcukMgKjPaL3s",
  "key2": "5xusZxGH9jHXohsQcxuhgRGKd5CY1rXQGy9zYwEtbTbTU4WpuwbLaxdYvpa7BbKLyryQZf7CJ9GKP7tqDUqm6CLh",
  "key3": "289NkoM6D4oLsvohDpJ4dN7aiRJWQ5YYdLJ6BbsHGPYSg48xbzeR7LUv3DUnU2EFfEBumruVSf8JBnmKCXpT1Mj8",
  "key4": "4TXMNKk6Jb2yV4bA67PBQxAmkZMoe7L33grhWQDy8gMrqqHHoy7x5S1CrykK1oZcrZkCWX4Axk9EwGteyRTnQhht",
  "key5": "PQbTpL5GqPedaAjyWb3hKYSMgKnt3sw2SeiCLacuwPpAFXWubNHkbtAZbEVD8bPYFTaMhBoce7eEhPW6q7bTEtE",
  "key6": "4qTUNHEoN5cXgub9Sv44SGuDPbfjVgc2e1atfdKQU6QpxWrDrh1pJKXEZue6GeJEuzFnZfiC4h7TfYFuB61ZhtAy",
  "key7": "2gx3zwphLHuqn9keFBA5wZQ2H1Jmm5Zk6fbfcujG3vYAr8vVE7LZBdEFBdQPTkjqu6yBrfVhnKaXRu7bqcRFS4HB",
  "key8": "4Wzqgbvc84t9QeoR5gJcTpC7xrVAfXKY3yVeMjJAt8AExwByCFPdJZrPWUZ2Gw3P65B2ihoJ5snhNN3STSgkuXG8",
  "key9": "2gqTAaiv6kap9nq2evqDssvZzcRzGBCZckYLukpcCzg3pYmD8YiKkuDfkZo7fENLbNEgezSvXa8Vd1vCNp6P2qcH",
  "key10": "4F48B5STmbbd9dHEFgCZAgxkzUAxPB1fht4C33M5xLqCA4pQqe7QvDGHyQ5vKVDyCNB2sgvvb67HpZ7t3Gpf9LvD",
  "key11": "5XHydhhN6Ww3bV6U2mLYE4UniZiPFZUhKqMv7qPSQX9qvDSVhncnGyzrVfV63BUdQhGPnXPvFAwX1ZaRTAG9X71a",
  "key12": "4hwtj3YiXBWRCgBqGvc7biTHNPWJ9P3eyaXrqiR6zpLbh1RqQyu5qTab5SNxvAMoSRFtmb2BTfvEWgzBYWyx7yT",
  "key13": "2mnXnxUUkK1sw9CvLytx3CAEZrBsm982sJo427b8n5awHmLLKzxE8xQgpTcnTZTnmm7sb26fn7qq3T3rMMWj5qEP",
  "key14": "3Q5ga13MJ6CZmBEVLYG87ez3xZDeaR5u9LYFvraxsS6RAkqXtRN6pyxuEGofdLCQxrK38fbskyqcLt74hkJQjYkc",
  "key15": "3b1XvXAczYJqY7WrBS11QmYEJUq7aQ4ZyW6GNHt1FtGB3R759GKm9saJ3C259mhVu2EevJhcZR2EWmohQbBsMjfM",
  "key16": "3yWrMVE12bFusZho7GPfndKgD5Rt4i75DybAjgQX5gFY6A3jP8WpRVGF8zGawUGHiJkSyZ4o7rn1YDpz26oWpQ8h",
  "key17": "46vVP39rGogiEPaGaAixXa3q89r1Ubq6erQKLWPnpdbdo2gpm2v3MeRw1RRS4iGKn1CqXNkHmJf4TT5hT1WpBC6U",
  "key18": "5UF34D9s4QPKUcmCoYtKfb63NJU62WsnvPs6Evt6XU6qTH8vkRr8BZEmQjF3GgW9atVMJHvtpzhnZ9kXcCjvD2v4",
  "key19": "4WDweHTe3Gb4gsjTVMSZyBjdwgfqhGyx91C5MHtHrQU5ny1dAMHPnX7J4pTzzbisjvxpNynV5ww4AA5xYnygvoZZ",
  "key20": "4ifDAkm4VPKJDLLdSntVQXePvCCQxs39AiDd6enZCuGWiKfSgzfffXqoX2AufkP1d1o68hXi95CR9xtniDjny7r3",
  "key21": "2AV8aqW9EhLvjZaWHmCRxDqedKCRwL3aZjNmDwuoXyJqqCeTcMtj2p7w9PMoGjVzPCQmPQ3HyHLkJMmicT6sHSdW",
  "key22": "ApBMDXKckDuBezo6VBT5PRMXtiNpaw2zC2fJK8hE1ZNdEx6nxzJpCyjjFqPzgHTYdN7b93wjPV7b9Ape1Kn4aza",
  "key23": "rupGFDbBCFSQix3gTAtjecbBUbD6BfPhxqzCyu2zWjLUkpZajfmZYfFHADHqTTrQcivUjcgMj3hhqZsxtU4k3oc",
  "key24": "44pwm5wdz8iXzcADWZwTE8GzBsr7YG1JREohdskbTAAoTKhF4ds1enQZ4WUnrDGSwDhkGnxhBYtHCwPMtRG5CDrQ",
  "key25": "4LK2XGL6VToRs9s7bySf4GkKxt5FQKCMV6FRdpbdpDGh5U3VSMGPWkNUGCVFKFgSJFWqH5CBwXi5SYKepqEygAmF",
  "key26": "28aPeKetNfZN3uWFz8mtDsvfJc1triew2ccz4Qphb9zhSjpb4iW2TLGZiMADNvwV6CL6DiEfvxjRXiycP5XaVHZo",
  "key27": "V9sSjAxfSNPv7kbVP1Xt35VRESB9xZmR9EGriS3JkugHWX96zkPDZuGsxuxD6DYVx7PJbRyrF5soMJSuHV8ys5u",
  "key28": "2nriY7SJonXNiCDGxUKtgezKMXEP6PBqHTx2HD1v7gcyYKb8WKe1HQU8ofV3jRgubXF79cA7XrNqZAGhSDa5Mv5t",
  "key29": "ahxX6gVppuDqFNTAVCKgT6NwYmaYGFKDWrFaeWq7N7mrsLwoWujGTWqFezvg4vSpXbUwKnAExrQmpoSnxNCnMiW",
  "key30": "5VJ9GsBi9EemSh98o3m79jDo8mqMyFt5iFW9PycCtSYJeQQR44ZEuzGu2R86RVzfkMQrA4g9HyMhjqztuUKZBuuY",
  "key31": "4nBAR3jqwSeUQ3V9thuE7yaTKz6DUwNAJAw3qQ46XPtHKMQiPZpL2tUPkAGkjqs3jDVzX9SXJGsAeW2uWLVcipij",
  "key32": "28srDueatAtMvWw69B8vV6WyzyVzQgZnFY1ijyjTi1FeerAL9uEq6P1L2xbCQwtYj8eieyNQix4dyJi6tph68tUx",
  "key33": "2QhuUcFZEVsWsQoxgwbgqnKcmvgY841dpeq6UtE2Kvz4fB8KrXFVppCENCZvDskSxUn3QYWxXyL8tJQvGm9SbAwQ",
  "key34": "NTmYy93STA3JSjVvLcAFK9sumERTSLvDLdVTVvHMRAdPd3kM1AVwMKSPEtz4ph3YyYp1ABbFKDg3h8sbXo281eH",
  "key35": "3j9aLpEVcSXgTer16eqmfh4or3jAv35wEyn9xX2pc84fyZsFmwzu93o7jTmYkNM2Ng6umnJxC9N38YXU2CViwZzh",
  "key36": "3fi71chCE53D75wwE2FncLnH6c4R8sgfh7jcYU83TNZ48MVmae86fyU1iENYmMVGSfugZ8YYPWLqyedLhQdFWk3m",
  "key37": "2scjuRDwFdWTUmJPfbR7SXHJRcCh9ZmwBK79ZE8XWL7KkbUrmoPbWayaSL4xSEyYUpkooenkDkDCvZdqh3pjx4at",
  "key38": "5p9dmeV6V9yJEqxt6zauaLjJQDb9sE1CHvTrRGmo1bFPKQyvfQfiyh5FwSNEfSNSTU431CrrNRXJ8FPqNk16qVb2",
  "key39": "5XAuSX6FWCn4xphCsZGJz66S2PgzopgU8sAULLVDjDFfRXcY6D8ExoBZ5VQbu4F87FU1QdkQnwnmXBQPFTCKnzaC"
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
