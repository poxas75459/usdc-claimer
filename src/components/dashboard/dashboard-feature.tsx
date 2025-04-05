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
    "4fsX8R7tihyLqjamY6xM8gokR5RD7xNWRpejbw8kvPAaTg8Hv9e7n3hbi3FSkbDcVJxeFhPfvcfNL3gnyR55TSn7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57qcKdAvVxYrGYRJ2Z1viATgQ6Xvv9z9b3QGX9rKbzA6jfAGasJnvR2LekA1cHZ3S6XXZZRp7b2bZo6P3CZdGZfp",
  "key1": "4Fi1gGDACU7LqNzEYBEdQ8V5x4qMVMTozBCtTq9YRcYHqUCagppH57MpSqKG68ijjfWKEUvrqJNKJagtWW27Zcex",
  "key2": "5Qi4EwBHafX8LJ1RDgfqxtrUQbw6C2m8fzHW1QoRosHYV9mzwLvM14cpSz4U6ayfrnaSVUCZ66pTbRorpTmSa6iJ",
  "key3": "3mSMq6upmKieUPezeBFttwZUwmhTaAQfEsdPzh6WBEgscojcVh7q21jt1BbxdRr4zG6ZbYYMmBwBiW6MQUK5SBqD",
  "key4": "3kRPASiByCmnKXGfoTz6keSYtvfeejh2wbSKvHvkdQHUsTZuuEF4Jvq2BD4PtTowiw669mk6fkK8zTQFv2HNjD22",
  "key5": "5QhzYna83cpqbSQ4AMnMxb7CyqcTCYk6MvqtBXjJvx3tN7zEuFVC9xeJnowvuF9r89WxWu77C7QtbM1BVpp4dkm7",
  "key6": "58mj1Abb8mFNxNpJkYFbAvTDbWjoHn3L6SuMjvWqN1jiFXua7rHJPToLnR8ZktsD6dUxpAmYY62RfdqgMAVRCmnK",
  "key7": "RoNzJh3cWkP9RPePLUBAtADrn67zgsFx5JEyoAgrpthz1VBwpGbkm1t4SccjhvRb8e8eswJqqUXX6c2MGKMCYmh",
  "key8": "417RdhE8sszMjFVCLXnM1jTyW27hKJVFdGExn1d1yQkxpNqC3qCCvqw88Xe6jT4um5Hda3iZxwHwfSVVairtizVD",
  "key9": "5XQRSLYzP7EYs6iEiJRWroGEJVeaWCNcRS2WcnhrBGfr7DJMoD3XvMPB9guAphLwcBqwqQScjxEVWbqJKH5f9Njw",
  "key10": "32HSTN7rTcBGpj7sUZyPr261daKaLUVH4AFeTEvb7Rh2kDEtAhouvA141bEHKaMqCivTHs6ZamFPZYkx8NhXHTDc",
  "key11": "4NgtrrkwhdBfrTbX3Y6wLNMxx3qYJNx1TPRzqoXaTncLxHZ6NWrUJ3GbZ9g4iys66tSTV4ejBD5hwKxoeqxJnvLd",
  "key12": "2MNmdPCH6j5B4TH8stt7wkRa7tkJ5E1AW7nKRin3amb6yGcdXJDLNgPnnyK2Bx3oJpsnXGUhS2G5XHtSaxM8uP9g",
  "key13": "5rnrQW8dXLDDeKVtXXakGdhS9CMjmY9fZvMzRdkpsBdqT5FSEMfM2MWnf4Syq1qMxypxeTu3QTog1xYCph74UZJU",
  "key14": "iSLPP8DHbk9mFLMuBrZcq1LCnc7JNJtjhABaguSvLzJ4v3AzSnou31mFSC3JhJL4muY5nHyeyCMiFR4MEoyvezu",
  "key15": "gHd6fWnAafLxL638AiLu5b2qAcdL6SV243UD2Zqkp7cYWz2e4zFeDBFZnj2NV2hSdaNMTg9EQjF6qvM5nbyFS1d",
  "key16": "5axQqXGX5QSHu1iJ8fiizH1xePbFyABK4MXexL2bj8V1AArmuQ7NFAjGgNNJkSgwGKPYL8jiPYoquHzNkxRYEEZx",
  "key17": "5bwjbPaoEmCF7R1yz2jouRsDS7MoFjnYeCTLEZ8vUKSBqWhRzYXnwHHhU1wKaSUVqzFEfzbJgmePpYLeUK9UAfAM",
  "key18": "2LJo2WVdZ8MrozfEHXd3NEnZsbmowVzE14217xdqhjX3EY5GxpgZtKcgqspeQCEKgHCf8uipRthpaZr8FHSbEvxo",
  "key19": "5Y1777VrXsemvNNDmyU5dwrtLAmoArVVZspjAucBZJpbgpsiup7w6BShmKejqQDD2SjNSjRwBkbhzAHX8Sn3TCfF",
  "key20": "7zpdM9HJirUcUT1VSS5ADNzJjzExJgYAiFiS2qt2Sg9LzgkKQyX4WNxPZhmW7Qw5ZxuN1NFTopkQQcBFb9mTRfQ",
  "key21": "4dQAy1KZxNMnuDRDjw8QyNL7uCcPKsX5hhczmDvHsfUUkPauntx4jLommC1MfBv2v6wJFyFf3vW9qJ9xf2onYozx",
  "key22": "4EZP3JUpSastgUREe5WAxcrp88zCCEZrGAf4FFEqmhrEXZYh9PBLwS2txBi75a2p4yqvvStmtpJNmz8rXMZzziWX",
  "key23": "26Ez5FWpMU4gV4NwAzgMhAvuQXJU7YWZZFwQrXDaeBBJTJGEdKNaxthXPgbdgF9zoUJ1wKAyUeyLZ5Ao23eGoyqQ",
  "key24": "5aR2Ljnr26GURutcpK3x4cQ3Ui8DQSkLkYvJw925WKrxnY8JDb3V9sgL7cpF4BFJz3jR9z3BU5gSLhWXgEjjeQcg",
  "key25": "5vLtTm7Zhuvz332CabYuTMVe61ZFiJNQviPP2wafTxrASL1SVgR1vC3kJWXXZ4acojMEDEtJfUuzxSoYAmJywZME",
  "key26": "52ahKJLehopBfop3VhV3pbHE6qAh9PD3v7p4zx4cKjGqmrf6DfawoXiLfcJn9bFwuy9KhvTSKxxzkcPvX8AnUJGX",
  "key27": "55YEACmZ8yuY6Vc8M4bYvJ5H8XqLsNY4Zc8vLBHkZBepirz1tT9zd26vSJBZkAi9Rhr9GS3mxgoRqbwTMMW2pKd7",
  "key28": "2mmPPBq8EJpR42nY9eZYvt6quBYaGisHK9kHhyQGJzMxHwJ7dc66aPeWte7xpLfCh3HLSmaZhjKDwmCbRPWHcgEG",
  "key29": "eubYRr9fnTiMJKDa5rom4nKW4u83JQB4pDLY996dXzDQSwiwSvyoyf9gTrcnEPZvLchEXuMt8ZCdD3X18WKppjz",
  "key30": "2v87jAfArEBqTSiX3u7wePDvnE4FKNpBqxhANLHcFfEDWpaU3eKuyqzBkS6PeZgW5Zi4qLbrDm4wkgmFJicJ9sZR",
  "key31": "46dk5Apg3iw63TY4a54aSxkTa1wuWSD82bDtBzN19Rei4Qx8pQHDCjgJyJVYy9QAWSzHfaJEa7nDDtGSgWhXMshH",
  "key32": "3dcZhjQysizmyFWBiKppnDYq4yYXcBeBHhDwyqTtQYKLuzdg8VmiNUWeCpe3V3m7j123bfJ1zeWVpBszBE2Moeij",
  "key33": "2NGv5HED1p3jhofACdgLhJCVxgvUhjky82awbFSPLbAaQVLT55ZsicSezPXrnBecvDCX1vy4hWtpmTpJj641UxeU",
  "key34": "3No6T8s7v7PyqhXLjH4r2vkQaU9VLcqYLw5cHVQkMvDegCb3ETF8K4YWbehysCLEmMXTD2XHJnwAqLmjR8kLYQY9",
  "key35": "5UzrzD7E6HGrZmy2mz5FdPD4VYJFdc8UMoraC7diRA52pMpVxTYP1RnNZK3R43jUR3QxzxpGEDuVuPzaKQSPSbvp",
  "key36": "4roysbWmNH4atFsztfaz7Uxo9Y43VJEpSWtVSontbodvnqeX2K2Up7FS3VfGHZcxazPEQnGFLxy4BVAfM8Lqqp9q",
  "key37": "3tepnJDdmwDZk7ts5k8hUTmG2YzZ2x3n3FijKiQj8TwhhBh3XLM5P4j4nEmXLBscWo6Wjiu6WrTzZ4Byzvo1vbPY",
  "key38": "Q7KDLCE34o4nuWJdv2AcbhUDWX1Ajnyp7s8WzL1mjgZmkwceqJcMrgtCqRPKtPF7aSrJhXN5q4sUHryb5nTJmFS"
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
