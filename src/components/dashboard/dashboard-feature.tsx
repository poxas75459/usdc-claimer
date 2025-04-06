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
    "3KSxX8jJkgWqR5ndjSg9r3KrG8uAhsaWJrvT3hVsF6ksrXiUYx5whcZadMdm13vi1nwEoDho61gzmmX5ddiD891p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M2EucQ6w4JEjda9xvojWz9bNWHTaUWYG9XZ6fjqbM5RnWVgmLNS7u39VuaCodCb8rrKEfjPBSH3xaTaTck1Lbhz",
  "key1": "2p9Nb1SAySVsT4C9kwXKM2XmTVVsmHVSsvR8ywaegCcWUicm8LEH2ek5gmfSf1M392aNg67smPar6howNvU5AZJb",
  "key2": "8eHEkqSmEWBbKN5hJb4HBUGwg6yQRn1hn6UYJaCPbtyu9WvPYSY9BYgPCmQKWryVDNGfZrLPASzC6VL2fVuAhJL",
  "key3": "5vRu9mUC1nvBEPpT8k5oxyySB5fGwkttfEU3w23oMGdRFHi43anGoKv68WABs6MudmLRaSkH794N5Ao9YWdCQSMk",
  "key4": "5R5t3usn4Pt8gH5d1TxaHqmDAxsvQtmr62jnvoWvmv3FgUgBQ2rjSCcsC7rWJWTRAWZqxrDVGD2nU9aEu26QaeyG",
  "key5": "3kQAAauh3RqwrLoTLhbRsZJbgZmJj7kVuAzzAHoP9qzSMPE6dXEKnMtphUAjZ1PYgxy6mwYBkn21syotRAAz3sui",
  "key6": "3Pjfy7dUwc9Ab9gMDPGW99KK8bDZk6TDM45PYfH5246kdM9bANqNA1foyG7LHkeRB2wDdnAs9qP3pxEQdZHtra5R",
  "key7": "3KrsFxFW34U7eR8mvUauCavsJ8Bvtc9bPYQ5GTUgc27RKdAsswtKfLxY9kY9cP7hXyEWfN5oJACU3f3xDajjmxie",
  "key8": "3UCrwNudzdYYLsFb1gH934HtfP9LSRQv1vnt3Y5gTMUu9SrMc2q1VuUiudeBBCaWhsWybGikrBY9pomha5s4zDfM",
  "key9": "VcVTyUtQdAuY2xDgq9TtPcELC8pGNiadFKH24Zddhr2jAqa4ZaC46hMYxar4CwnajmMFsGrsVuSyTbB5wENX3df",
  "key10": "53riLUyQBPdRLfPSBTZeCfKw6UEEq3Nv6zvUZuJGHM7FbbJWxj772NtECg1sFZfkYDViYgeG4tekugUrDnRDDWto",
  "key11": "7mwHBZeFwsqjTZzsi1YXRFydfkJp656F47VnbZR3FTdH6jwp1uN4DYQ6FBvpcMYj4PP9j7EAGgnihmWZ1zVSZPv",
  "key12": "23j1dWdPNzK8Hcr5U5gLvBUP1PZXan4V6E4NpyG5v5uMr3eATdkswUsZzcxZGVPkf5N4uiMBtvn7ubWQKteLYYQR",
  "key13": "yTikHztqzJPd5WcGzCPgJWexbK4BCe3abdGVwJGrtANApAnVq1hAjD9AJMPd3PTwR9U5ERUoQQJxb5WgT9FH51T",
  "key14": "jpzzF9UtxUrJ9MoB3FtV1iUHx2G5jojwHsNar1EJXKeiZibaRS6G5LGd9hrgC7Ct6R1dUFV2tv4pMk61WdWPZ3S",
  "key15": "5tftkdBqEAd689SA7AMBzc9if7VhpetuaEj8uDvzJpKRmf6dX6EMqgoG5hUTkz29qyMeq6XfJosNEdJxQK4YcePV",
  "key16": "2mceWfBaW71wyLhsr25hqhvNtS1okFwDG86pTTsuEie76A5EVPLk56sWFZ5oSXetio5345USeCENbtwTtTQ4jQ2z",
  "key17": "4zaMGxJMDuyxS6hmdzHNuqauayiTYMHsxrUGtAP7xaGe2ySMGEDmE3yKZ5T2TaAG19h8huQzN4z9n1dKy5mw1tU3",
  "key18": "2M12WhCuqQhuX7SgbUkkvr7Sk9YhjNtF8SLMzfWkuW3rqVrDoGYXmkdHvgEiWX8QPL9UzRQE6bdVQrX5bhsofafa",
  "key19": "4kswBzF2Gh5ZFmtgm52iu8EBDin1VXTkg19wRQ2hBipwRJV4m9HWdr2z9vQJJmgri36U2SETtejUeCKR4x6pndot",
  "key20": "657bRe2CdcqCB7m5vUqfHz7kDhVhXkYTiS1Ncu1zTMbZek945QVHV9hVaPe6R8NXQCtyNd3A66MGkV6tZNE24sBj",
  "key21": "5vY1BZpzUC8W1ecW4k36UmCJzz4haPQgrXhRbfA4QeNTfcHujgMvsxkE85ksadwqdqw8rN8ZEzJdSTm9X6baay3U",
  "key22": "4v8ppagsDgYJNeYeKzA1zeYRa4McAWVsBHdQ1r9eyVQeZJX94hK65q6W4dALRzmiSJTCYneGoFya9vMxemPJLFcm",
  "key23": "3bzko4gnPhjKNoHEHk1syrCxVznbchK8VsbFRR8qwcreQD7KiBqzer4bYRKEU7rJsd1t2ihcK9wHBSjzxnzHqiJv",
  "key24": "332mFM8jBffUfcqkJo7nDJHRoniQyP4igV8b3FXirMzLRw9X1tQiETxrirbpaCekJuB2qkXjdwdtKoa69rgGVK9d",
  "key25": "21FNimhjjpL8r4SUED7wEKdertZBDhMKw5W1pXPFfcJW6iJCMu9wN7bsxT6ZoiejpEBHW61dUi639ZbxeS12H9ea",
  "key26": "429BKv5fxUpkesiv1oBb3Htm37a8VJHSgjz7BtxKLYNURq4NRZDixbucANkWaTEuoa3h4ZQJhqNTC9rLEWHAmHtC",
  "key27": "532XeuM2Dy8v1NXA8KNPxEZzyzLZpF2UJw9UQQx7uDE7QQikm78s3gFK8d5oZ44Fa2sStLRyWmQu9A129u8gVG3S",
  "key28": "4XT5tZn357mejpKD2ScWgsswk3qZ9UNYvVV3hywRMvQggfAhFzkZ49wNz3bqVXCLfdBsjXdyWwucbChwe8ApUf65",
  "key29": "2pr98sNCvey95LzYZKxFHnZXWuMJuLpFYQJGqb1L3AY8s7e9Pxd3r53cwBrjHAMf85UJFoTN6T1FCZHVM22Hq9TK",
  "key30": "mc3sfd2TxUWEFMk2rBNAPRrQBSeHv1UEYHKvi8kM2oL3T6K66aHyR89a13FiDJqDfUsqGyCZYPMJx5Nzz3m6suh",
  "key31": "3ajtx2ToLViKotfhXPP24Y5ERUW796r99PK8xzsRD9hHmDYg2Jw8QShWx2ys9z2nqer69P2X8H4oQ7wd8Wyt2Kfr",
  "key32": "jQcmijZeDPauAR6GEFAsiwwU6W61xL9Z2M9TAtqKCYZQfUQZzXwX4U4ReADitevqEPLXasxDDA7RNetqptQcsgS",
  "key33": "4uH5ugQhkF9FMXPgTjahVssXi5n1th5a58YZyQ8a1Bd9NH4uBnic3KTXkNrXiVRKNkUhbEVfxuza9uN4YLrVcpjs",
  "key34": "2p3qYYWV34qRvmHdvRt5RJJVdUe9xJp1qoaXmTM3nfZh7v8LfoxGE92NRpdd7Lu1hStQ3R3DWBroAtb8su1qYQhw",
  "key35": "4Xb6sTrSRkTm45HGNe1fxG78dwbXJ6JaL4kwQ8bt8yZBenHsxHvYhdpDz2sHZFCfiqMLww8AqnkmYNN377HrDjzk",
  "key36": "nSoQUsw4j2YT5xjxUREfBK1BBNr4CUtC6p89qF8FxCcy4ZLbyiCEV5aE3tzJBVRE26iFM6op769sQG1ufQ7mjGs"
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
