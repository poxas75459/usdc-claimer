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
    "epNjJ1kuD3GdynBK9ZxTArz7mXaJoeR6345x4TxE44FCHEhivxJ5QmMjN7djhowzmpZn3eovzBpxYcjE6SDdgLj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qLJGfpUVyAF2ug28r1rYrYBP3tM3YWy14vwSSNCRhHB9xNZfLnyjL24e5csSB6YgMWMHgX4ZFBvP7WkKRYHj583",
  "key1": "uJxjpqKPVXSK9VksymyXXRwmHn6kJvZX3vvdwbZ5ZdhQJ91vZLdki7sqpwA53L4ow5WWS7Zydj6ZZi7pTMadmVt",
  "key2": "FPSdSDthtkBRfVhsV2CzHQy8aSMqVsjUZJfKK5zXPktSNZLHY7Suo1y7pmeYqsAD3j5rZhAeywyCLDAFApcxPNW",
  "key3": "UK4qxzhCMi4J1a43WF2W4bASL66Zg9BLetvP39UdfYi68KVP244dnh9GqqVVU8Eywam7pftrWHMAA3uEuLL3Mua",
  "key4": "aNV3McRtLGYzsSXpRn2haXgGoPBTtZNbZcNsgfxHcXS8sqK125fvTTn5oP28t3nRiUcFrY1nV4j5ciQaYtXk1NV",
  "key5": "5VFCnDYFUEyRjYL4AzJEHxQEkcNjfCf3owSWMWquCnCnGtbEbKHAWxdpAXPhvGeU76tNvMVCJCFEBkGitYyNyFSR",
  "key6": "4kwQucXkbRwwFgVwYjpXgHzu5uU8X3oP8GNHbp3CxVNgQuc5oEL8ZgwvobVSG9yhiknHo9PikcEeWGUCWKUygdZW",
  "key7": "2aGtuQ823y9MQVo3ke3WCLqRybsTiisNsX7rBfJYDpt16FGHUSjVmzQCb8H7K9vai2t67gYJBrE8VCe9ZAZ1g6rX",
  "key8": "5ETZwGcP9AwcBCiMASD98dJprLmKuFssii5nKefD9hs5M4nn5ZQTsqPRZYBVjLe843UHZBZU2Mk5J4fHTAQ2Dm5H",
  "key9": "4LngVT6af1VDsJnDxRMam3eQLFtHLKZDHdssvK1dnXpTznXyQ9bVmJjzgPBkEgZaPc73ZSARvMPxkqj2skuvE3HV",
  "key10": "4Miq1rzSvffwoKVjLbAw4M9DZQofvMUHQtCBPw21QiGGkJFZwpJNQp6mqx8GktujWnZLmzfXFqfJt2q6QF5N8BJ3",
  "key11": "66hnxu2fspnkKmd3WviU42XuijNSrgcAxkGQk5PEsSuduwXJzRMfJTPgorWy1g6LkDjqBk4LYymrct6WoBkfqfwB",
  "key12": "3i64PmMtRpL6qctwdNVdKdtWGPAWqNyfxqc6iRspQahMeu9YyfB4eGXFBKcMhT1PfCL98vppRU3pBB4i47f8gc34",
  "key13": "3QqdGsPSuh96xNwREKv92S2gWqXG7EuEcjEBXgGbFf8CqcHv4AmDDpuLJQ5Rcmi75chPTXY27yi8KZdAs1f4BbPr",
  "key14": "pKnHDJY32u8GVhPq83UiAcBPLWSHUZhg3Qh1ZpMmUaH9xBQ6d89aQEFiya9Dr5Nptw4fHz8sGGzhQhfEnMCpbpM",
  "key15": "29KXjRWJTaJBX46ndQzoDonwwev1GcXxj4wioatxqgGixoGcxXMZdeysaRhAnwRrGjw7oswC9nRtmXxzE9AS7i12",
  "key16": "6k44WHTTE7YMezZe9AXkqAMFLmTUkkEk2BkTiT49F2daRFQ2tEUAQFfxUnxe1FH11aJHFewPP7Fc3LJsFsdym27",
  "key17": "3soWtVA9ZcKMDWWPzqF5Fzwt6ZSAGHtBHuxke9MCWrycNdveMLFUEk6QsFxzoPWzUnvhmnLGvTX3qUDw1sRBGAtL",
  "key18": "5VhgmyfoLaX5UXMgr8q9bEoqvxbP7NsehaorxMC2zdQmzPoNK6dfXkEVnKtZoJJ24eJ4VFzqKxdnmggf2KkHsXFk",
  "key19": "S7XuQMZaBR79RLn4P9zEd7sQJDomFCSYeoB57iDUq57v2g8kKXjoPWMEDwA6xUE5QtehjVPuQJVqAVTZN3F5gsA",
  "key20": "z5EQfuvweQL8BkAFYNxc7zzovGJcUx4msaFUsRxcTbVGv4iWjmvLo36SKkYCyjCRKdCb5qb1zrnv5dibpj3Ydyt",
  "key21": "4t2YWcr8cssDwNE6q6StEQ1jWTCZDkowDcztJaTsFxDqqBgcHD2RtNZUDFvkHJYVFdCrUNMsGspK4jPR73EhNSFE",
  "key22": "3Y4rfVgr4vDPGCstPNGyDMjcYnHq3b28TY44P3yNddNtkz7urxnzMPtq6hpHBEfrRRwxjZRKeDzRWdcyGLiP5nDN",
  "key23": "3nFweCXHkcUMMy9jRcYyhzs914zMLNonwv3nNR2wBWM6dJciJbSUH2GT6HTBfGJYmL84vVRPDxFSncbW1MnSKeze",
  "key24": "2Kpy4wCS4Rr2bcbnci5yEqSAzvCCpsFRHq61JkUspgZJ3hYLxwyPWdq28oQfJHKh9LSEKSGjGUrJVpTed4MK9Wjs",
  "key25": "3n21qpBvBc6dMjo9dnFLTrdLa49XiManNjPTJc2fKWL7UzD6rPA9Ux7YPQd2vUcmw5oLv2W5owvvega8hfaRBCTm",
  "key26": "2SSbJAMEZd3iwG9uDPhHjccaeXTRRmHwWyg3V4DPFuG6s8yXauVkkHPdEjcCWHu5YPxVEy2LHNrKwp7aDWxfUgi3",
  "key27": "66Cm1tZAThVD7Wba8RhVRTVDEVAQehMu7U4avhAL6JHh7PJBxvY13XKohFwN5HnN7p6hsV2Jw1sL1GtagzFCCx14",
  "key28": "26KxjW3qsqdHqg9RdQNBbhr9mvrAzV5pv9R8ymp5RCMNzUS2YatTdpHMfPXgBoDc8LUzVoMMZtcyQv3n8JDXko1n",
  "key29": "5npT16eVYj96QaxJUyxR45asyCfvRjQqtqzPDwwoNvLU33XBxyrGCrf8ot5XfK1sAUSTaq6pYyLUzd6nDKfcpK7a",
  "key30": "2LYkaHg3XCeSTftkYzqXyu33ESMbqzMtjegXPUPkNe1uXU249YmsfuxRuYRD375h66PCGUDPWDAuXJGnW6W1Af6Y",
  "key31": "rFb43qU5W6JcvPufM8vEnQJ6hE8ULEnGfRFz1w75YQg4JRvRMAbKZ5y5iKNnT1FqXPycLMdPUW6dRkzBZHbp73a",
  "key32": "Z9KhgNZoeQ648FxUHCM9Jiah1EtXscFnmR5ky3GjaaeisuT44msycVqVFxQys3JcHB69x23cZwNyFhWTBrggtkt",
  "key33": "KDwXbC1mwdy3Ubu46tKD2Nbk7w5ShFXox9UbxE7i3eTBTo1SAhBvUbnFRQmTaArwb3mKXzv5f2byjWapWicy6g8",
  "key34": "2gReMbf13q8bsjJ13ZV7oSdBJ6bLRubD1UkvTzPXoAGsPKG7rXvFo18ms6Q3MguaVcdG7zypoRBCRh5o6W17gzrs",
  "key35": "38We4zpJdwtY3TNhbbGtomoKqqTGrGZcMaKDwPE5ybLLdwZNdAfST2DbYdScEx2rHC63ycmgnz7o1rhiQZ88TVg1",
  "key36": "36rtSfELh3wFFvYvCRQnnn3skZStKNyN1S46uJkY5ccp6EEJ23A4ujAgHK5rBtJSK5RUYcDJVjYLSryArBUZWUNY",
  "key37": "SwKAW2CBrMJA2zScUihzKEMbTLqTzuQj24Z9YS8X5AZTMY1hedXerC9ek5dpU75qa53oAZwJuSzvp9UQN6NeK5F",
  "key38": "j5xz2DAREzTiqw81wE8pemMQRNrMDCyqfyrBKWfsZFDj45kPvHVXNwiVVsF6v8suMmeGVheuJEZQs8cnnNWbkK1",
  "key39": "25PYuV6gDukpRxQ7eskjrR9KQCkoRqdKKXpgMCqpSsenajAkAuFjyFauzhTPkxJufvdD78iiymgpZ82EsZB1Veee",
  "key40": "5SNpCoB3b6JVWT8zWzphvDkBVyvE1YZLHtHGve98DZKpGgjZWSXy1Jkb3Z3NamMMhcmx5SSpxEeRVxrs3iVuwtDu",
  "key41": "4ddATLXPmmMRWECBHwRkReTpHoXyUYpTyeiFJWXmzF3MNKtARMApr87YZrTWubYgB4BSgXfj9jtiybvPxGxLys7V",
  "key42": "5Pa78AafGepcTjhG6Pb5hg2EmsT6djuUGKt5RQV6UWdUNiSbV87DYTnjCgAE41w8RjhAecK513hriV6z3F6SyAkK",
  "key43": "4Qr7ocYGXby8xScnn6X4odQXhGsFX9DiNU4K9SAqvcvYaPh1gxNP1sFTy6yHzJ1MwXApuxBanFWzTLHZJ1Deixjn"
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
