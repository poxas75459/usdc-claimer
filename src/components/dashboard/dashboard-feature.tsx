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
    "3Akohn9Nsd7RkTQ1pMZmMEBysaYytLnPsSkz6s8SkJMjNFTd8xH4C6TjY6bt2Y2rCqtLL4wJ5YRjo9sKpG7dBA5Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28S7TkvuihT4GHECVrfb9EBiT1zS4hKv2Mxb7n1S7mXQrf1idAy2w7JfGEJsSmZaeuFquCBZyXM3HGnWodkjECvi",
  "key1": "5hTcH4GVejrrQYv7YkCJkgaMcJwa2KSLPAQKStM8huxmogAKxydbJeoCsZnAU8gAizTH3amGsWa1gPna8Jup2puY",
  "key2": "2mkN7hn5HtmwWhyYoxbg2fReLSci98u61CdzBzb2Ts4TxuTEE8QGrwL5GT6ndrMb5wRuwzEX38ycZiGaKx34TNo9",
  "key3": "2PqUKamHxwqyyZcFdHT5q6Mkp74zQEQMahypScWd2U7VcFB8CbKymk3F21mPeJNSBnqQc4HQsuUbRQmedFTMgSuk",
  "key4": "4QwmjCh1Cgck58obcnDq97pRyrZSjULqZpvrEkSGAb8e7ZsBBdxn8L4XHAF9C4q9Fx18nUE3unagqGqBU6ZhhzMs",
  "key5": "3G9MNmGLWxYhGJ8crrNQxxhY6qGTk48BNZCgXwoSLKqND8KxB8WPTUVD2qVSa3G75JGavPHziyzE7LGemccTAhN8",
  "key6": "4xgFJj2sFuffHpgsDWV6qpyyiSgx1tGHJow1pfTz9Af9hFiDo6pJka7V11MkgnNM9GwRKgsFZtueFD39vXfdZYLD",
  "key7": "ipzxxPTB4vkCHz87crCJMPE6T29iP8V5Nq3cB9rYYRRjwDxPN2kYWoivPnJBfqNS2p8M8PGtjzBn1jUsohmBWLk",
  "key8": "5i7Qwxp1U7vJNMYHMeiSeaC6rKygG82mmSXSGLRu6LYLoJSmLcG7QTbVU2MMRumD4a4LWYDXugfnfHDcFTtE7i7V",
  "key9": "3kYtV6Rtwm88S42MzBNgqAwUCCW8t4iQQSbUDVfXfP9gFj7R4kJvwwDrVZwGMe2j7HTHVZDiWRutt5ghnBSdjXKX",
  "key10": "2qPn1ckpdCqQKyq99rwsDWSn7J6c8pBBKA3y7aTzxiYGVXrgYcKw8wmsw3nfKZcaMqJD96pshve4QnvpXy8bC4ex",
  "key11": "2LVZqZXDYTdZNmSJ8Lhqp8s2qbKQgAHV9fLXDGnsFGYGzk2AthLDfxbX6Sdmu8dBT5kYGag6bFSkoDjVJ7yhpWcS",
  "key12": "5qd2oxUaQP15wMq3CoKouyq7ywiYEouECWSrpCUUe9LbwikUUfbrX9FhfNHvQU5CSf6XBCgF3QPN3YL1uznA2pFQ",
  "key13": "5tWbrv4eu2mG7N5pN1f3JqyMjsw8f9gtAv7H3VQpMY5bqUWpuNuYo59RDjWZBZTNg51uCs6ezRWtgSP7V8kKfWJg",
  "key14": "4pH4nMRhWHJSHkCoUCNhbYXekgzDncAs9muaq8e4VxekvgN6bgM6gGLyfphnt2JfPLaTezReEjHGNXmmVFvZybUm",
  "key15": "kKbkWuMvCEPaNYhR6pCGW2zuR4NpxLMb5CMjSuLuB2TRAhuHKeFrUobQN9ZYtEXTcGGD9oTNJyn8cmKDCPoafHT",
  "key16": "5iroFm9JFoPy8QnMYSH7aTrtjXxaLrTNtztHkCNWwZq2mbHejeNmyA1j2JiMRfFRdTr31D32aqNmj8PkbqX1weNJ",
  "key17": "4z3ZqM5xbxWkW4D8mVHJ5qLAShTd1e18sjqDcatoJXDtzk9fqPxGXLaAt5UGXhxrdvC5dt1mwRWhr4XEm7fDs1AT",
  "key18": "2Qk6es27rgfdB9vQtLRUxMG37PbUowxCWZvS3bD7omFYczUCf8BJKzd8MR54SbiZrAjBVUkVDD9SSKsVZddW6hbj",
  "key19": "66DDT1GVJrBkQuThpWZ7V5EjUAP6jWbJjckb2ngCNDQ5rvAU4wuWFvTyKFMTtMg3Cstq5zGzXT8iZjjHTuF1dsXq",
  "key20": "2tphJwH1XWQ6zE1Ed1EzKCXMWyhPrDo3iPfNJsWx4FuroUvuimCBsJ1jhigGdqXN1g55Wa2pK3JkjP64P4CcrAut",
  "key21": "5So1Z3fkdu3eK8xgB9tzBBHtjGptLHf6BE1TN4S179obVz68jnUXRm4jR8soDR4aHAtYhZVMrcyj1Pp8TR5P76TW",
  "key22": "56DmGRLypxTAUkebryN6uBTAgP4rqPBBYpGitWfCGJHVrTG6qKfa3A2gBMREVDRpPQzHgxFQZTjR1X78actcHCq5",
  "key23": "QbZw27JhqFVqeXnXcgcYzgqfqjwKt9SexanDtgAdQu86UcFHcvwCJxpGFGXHyCusTUb4JYMSXfqk2TGXQakuFvY",
  "key24": "4vxhAcEcHJfiSVyUTiSVJ6TrMxQ9tvz4CKrPXu6H9LMAzTK9cME3pHYzdjKeazqcFrryUuNz2V247gPytzQkKaLQ",
  "key25": "wVSG4vXrHMFNRPWHNgwkJkpDtrDXrMYLW5HrRd3ns6ffEketMMuhfWQFfxa9YzyM7dTgKTAPFe3VQnipeGJDkes",
  "key26": "h7c9xtySCe1rLMAxnc6SWPi9LvjcAcgRthyB9NcJkZJrNFkQQSZ8YncJuuGYFJQvsGiUsgbUFW7z3siGM3KUjp9",
  "key27": "oe6BvPDG5R8bfrimWFZUosZqSSic1iGbncVcuDxCHJgES7rcQdJnVraYzFNs8wkcZ4hchdFLbxU2d24GvnAP8yt",
  "key28": "2e4jkWvSL8TAGXmbxMAEXNHobYAFcTEXJ1DXCc5aMQVkkpjU4V6pZzLUwAJqrEX1dkvuaBmxFSRCnmLbY6nt2ejC",
  "key29": "4tgzX8LsV8wDRrENfbpoiAbP3fVQRZ275X9FqnU6eFesKtF4Ax32XX59rZHwap54MAmmpDZrkB9tA4UxHdEmqdok"
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
