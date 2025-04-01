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
    "4mP9qExAtQhS9E8BZZeS23dfroMfYfmNYzcvZw82zBEo1z26zXPqR8SHKEEqxF5mp3wrmqDEeENMk38QyEenuzNg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BgEJXozKp1tr7Z6H5L2zaqA9odkmyRDPeq7YZbhtGMyk6ZZbwr9pd2Ff8mRR4mnFWbdsVSZjwk5mc3vSHyyGZvL",
  "key1": "3rJehyAVEBoMD1drbqgtzqcLmmbW4PiP5ZZQHNUQWVQ77ifpRR8vQsF1TvkQvyCtKqMUg87wZbRsqrgwVtj3hBvM",
  "key2": "3YgXdYHsbyoVBPHQampWWBV15t6DEFj1M5RJXnFePP5qRWyJLyqVP8a7NLd2btW2GpyrmRSXLMJQYYQvffPGDnZB",
  "key3": "4pZnPZNzHcwHqn49B1cox5RaRDvBnpgenY4Fk2HKzJSRr4bLrnZ6YDn6UWnVpKkSb9PgfK8yC6ag8kXpyYLBnC3P",
  "key4": "2fh6oCv7ng4mbsvxki6LNVA6tkLz1uzXTXoeoSW1Th6tHjQqqnG6UKa13TFtXY61HeVTJF1AgTaDcvkcZVDYEg1c",
  "key5": "kdTtm2N4Ff7igfE6CRzre4xL76uNHnj7rBPfiTAtY2rKUeFVtcMxFHLUFSkXhCrWjyHnE9n7k6zAgqDJLLci1Ra",
  "key6": "BwjcqjNuQpFdJ2jzfy11vVxwkBWdNeyQdfW2EVzwmsHQ5CAB2EiEYhYxLWiuDaLxNBCEa5mGykJBN1gXkTJjuAa",
  "key7": "2DgiKHrCNuPvtw6jtARxoFS7CMSAFZiUWWVCQf69ustudC9xqAomVK8totgR3mHQK5fhUub17NdR6ZMhcTpyBmX9",
  "key8": "22VuNtLv8vZkNSCZZrNRZmJPWiP1GEBKuakgFHWnMvD2foyfS2T6rZFYFmD17jTXYVG68PF8vSbC3f6PRVgaCKjd",
  "key9": "53KBti6Yb7XJEYYsuECzTyjwtuqmoXqpCbwFicchfV3uywZ5ZkJkVCbcB1HK46PfsVUd9q2LExVR5tdibCdjCnX8",
  "key10": "8pnqiv6bAfmRMjtwBEdBh2FLUEB6qdPmywB2zyik7hVMk1XPwyJUG1qxE9p6BeVe3cYRzR987sofzc6Jy5Cwxus",
  "key11": "652nWgJYsBoTN9Q4NQdB2ZV4nUXYsLN9EXAK1QDZ4afQx4ezcHcjVavz6kzmsm5bBVozA6jpeVq3FurXhVHNK2LR",
  "key12": "46X2DtDBp6wGT4bmRtBDo7M28maTQTqC2pQaorwjgv7aSTHgwgjTYj76KguhDRom9DdLpt9BkrDo3DSj1PiHia1M",
  "key13": "523wxSGU5viXSKnz4KaH5sZhy94QZ7CiE9DrdN7SQ6MSzbHsq46NM2gnMqDdGjro7CMUUXE4BkiVakcEx8Zp5utR",
  "key14": "fiYbr5EAuFEewY5B4oaUTLAqdwAzGfaaUaxmedtxzPkCyTjxeWam4ydvvVa7chGY8DYDamMj6ijBrYTSPSvvCen",
  "key15": "2NGsfQjvTYiQtyEVTZaEoiCDid3kv6MMvXop2kCMKe3yMhzkJzXdxotSRhk7HVibYpaZqsfRsUAXcYLRJasy4Gz7",
  "key16": "5mcmWemnozikBkvdp6AfCynjEoUMCxPKNwhGn953STxQV5v5iTwwDnGSRtm9BegXFLLnBxhvWPVxLio6L5uYtjXJ",
  "key17": "oxU6B133qvobosGtkTm2g8PXFKGjDwGEJyUoB5CbBtzgycBcmKgVZ8WRqXXgWA2RUb7cSQ8utUUWHm6K6qjmaQG",
  "key18": "486qyY1T4keqwCFuHae8yisz3KSPSVA95227TXLtMXfbrDH71pkrhRsL4yduE4WpwFSjKjrPUKUNL26pGM3zQ4by",
  "key19": "4dH8jXP17en4cJgKwiDmXdjWk4DMC8FV9MESuWHHUSGdBRoVnuJcvi9Cx7H8awBrACq3VzN3YuPK1xmXrPPPKP4A",
  "key20": "5dTfP5Dhvh7FhCc4UtbvJfMTjuf2jkXYuSJ2VeErKsAdhii8Yo7YRwZMqv2QGZ21j2d9jpKJGT8qBbWG6bstjWxT",
  "key21": "3WbNdr2yCLfmibGTNTDyKjW6eqsUtNHKwZgyXtppFCZD5N8QfbL9MyKJNU8Wv2EAs7dVgLAiS8arh4Zkqro5Tsa3",
  "key22": "44xSgqiW38CUL7JLq7hUT21NThboden8U4t7xfqR5UGyJdgtga1aZJN1Qw8Va5jxZUpmL7LPrKRCAAR2HHrcARd1",
  "key23": "2LjYh7WF5dgAr9CcMnBtyGFDYNHDvuMG77VeKJkdYfTLNWStGpivfGNuHUtxsZ6tq1hxS11YWuA2j1cmBqau5wu3",
  "key24": "2kBV8ZWySA1wtN6jgpKkohR1j9muPLaHKaz6KRKmRSy5Sf6fTTsZN5qN3YJUxb443Q41q1yLL6ChjR6GQ6NzUXik",
  "key25": "61AtCF3PPCsNdshv5tovU4i4QDJJX1TXDdNAF2ubzSfkmoNFoLofgKyjaZqPPfaCnJFicn1rCkZ6FkBQABHihXdT",
  "key26": "bc17ou2Q9TYdMKMUrSmEnk3ZMvvRZHNiQrrBNkLDTDj5V2w84WWwD11r8BvbgHuG8HovvPvERgXSJsfY9wDVKKg"
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
