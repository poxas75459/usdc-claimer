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
    "44ST1D5gC82iNkQEgXSJVowdBSCrMFzpKjBn2xqjVs51de2hQMP7R6JnguD812xhNuXtpJQYxUPtkdRYU4qZBqNe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43iNK8jNkRpnobnMPxvocvX96AJU7x8QJFxqn5deSVEw9WgJUTDUCY5hVFMGWNWBRaQQmuAF2Qqz71y58acWRsYL",
  "key1": "3feNiqfShJDZgLMH8b5bZr5by2Bt3zpM1veD3wJGmWCp6uvaDtjr4xgnbP7QHG4ASwb6WEs2HfzLwcAgYLdRwpe2",
  "key2": "38WiMXuWXC4HJS75V8mBzhAhZJeQS8eXUpj7Bt7nWspsvFkGbMKbzKbWfzMybe6jmG9N4dez1Q87CpF25rCiQd8P",
  "key3": "3miaL12k1uMX5Q5JUduQxS2Mc8CBuHvJuaGs1csFd5iYyF4dZ2dDUaZ32hDe2B4yRQ6FZiqW7nDeGNoSBgKkBGfA",
  "key4": "2oLuubcU1Xjt3AUFhciWF1BB7WvbWPebQ15caoQTih1dkKZ7syfpfPB4xrE8cqoKWzuFthdy3JYH8ht8yYr9Ewzg",
  "key5": "3kCFHRJjht29mMFM4ks7oEAidKrBxE5GBkUMgHqPj2T8PB1Z3WrEDMTGb4CVcWGPpGMkHGz5MRU484N4LmQ9BipZ",
  "key6": "46846k453sZtd4TQt9isiAACZmExKTgXFLHMfrSp8DgfaM7FFcdegQQ71qzS9MHD1xREX6azSBdgfGMGJy7P5DYT",
  "key7": "4p8NTjBBS7c7nyqa1MDmbFq5avhfJgpQKjdRpjMAeeSk4qryM1J56x1PNTxXVmouPWt6uon4U9Y4HXy3gisoWd2F",
  "key8": "5iwtCKBPyEVddLbxzVERpAYbCgV74pQG6XQR9G2GkmDi8izy3ujozpfFK6JauMXUhc91EWvXftmheXymBsCrAr8K",
  "key9": "CKz5ZbCXw1W1KwaHuzQYqhbR2n5j32qTC3E74YnFYMKoqL8xzYZDbBBVviKHaa142DAyDTSSTJAr5pGLNTGYBjS",
  "key10": "VMpskouzKrKyGoU67YzFqhGobdP2UiZRtUSUUh3XZCJdSioNtQsKpDqiJdy6Ry8vDgCtCYojwv2rWK938nBtWJg",
  "key11": "45A79GxqxdVW9mgFw8ZvayYh1wr1BrEHzqoBXkVsNjYrdLAgU4G7KBH5wbfcE8sqrd4vaoYgPS7HRU4yjrQJ1gaK",
  "key12": "4k5h5hPZwFZtgqsr8PqCfFGZwqbAKn7ppKQPL27jJXrXVMCu7g6UtLZ7bD3uJfdGqufVtzdDxrH9ZzG3RBoZuKTq",
  "key13": "dKTwZ8GXynsujpvgFsPz5nF58vSVCAisiGNWFNWfPE2BeMUPVJHiGoAsB9rkqPhPpkJDzJ6uXEm4X7r6jfcismw",
  "key14": "4wK7WTvfhpTHvvuxpAMAKY5S2zEr6NFy7a8RrFywv9fxeaePagRtAr71vA2FGpu8bR16xbv4Lgnroop7tz7v1afT",
  "key15": "BXJupADvaDAg3FT9qwkgND3EQ8PVXdpANUpLbBtP2xdbCcEcnE9KDLNv5B1Y5DT4a7yqXrXh8dLjPMan2S6gLqd",
  "key16": "4etSi4jtT2aPrSL9WupqRb4MhjUmfYtcTLijxjCzBUki3WRYpwrgGaAezz6TmqFadD9WXtt9Sb4ixLV1FbY4YXTj",
  "key17": "3B58sXg1opdm44AArme6k7WEnuNHWqNicr28rmewQX1sevQXiBVJNgoCPFmsYBu65yMMRbwwS3dUwB6GF2symvNF",
  "key18": "cTttyn2n3nZnowJw4xBqyjcTdihHhdxRcPKErsUSRd7TVNha32YHY2kKfwYFqtdVSJtsG2Eiciu7HAqbSnjbGv7",
  "key19": "35QzRAwusooq3g2fPuVfZQpDjFngMCaJujMj6bpprP49LR9tkFR1u18wPrkqVTDuR72cqnrbaW5ZovZPq14mum9f",
  "key20": "3JvZB7V8QBRL7pTHbnbpwDchP71y8vPRpXXys6hSncRkz9e7x124a3yxzAaucMFnzniTkVzk3nPsoLMgrphmWNHJ",
  "key21": "m92dtfLsD8MN1FEULLH2FjjM2UHkaWwQ7jEwR4nXW2miVr1XxtWZB8mg74S3oTHyMq23gcJMCqHHnicHN4cWQ7w",
  "key22": "wRfgkBR1dQj9q8dbJypw9MVu1EAX4S36asdCyKmMDGfyBu9i2cHVvrdfYt4DooAdvQgCtiziSEbYYSTb4fvry2i",
  "key23": "4PNj6Dd5XYwq3LmQhQ3LCdTRtJenHhHibpBdDbtodnKrj7WzY9L1qGBxt2Rw1qcwJ4oZWEjcLbwJnEESySBStH2X",
  "key24": "3S9jq5NQpAMyQUK1P53dzy1dYLtH6YvwkXK2xRrFffVPayhbQcpHQJFmTjLDGpnwToEri392Gru44by8az5mcTcr",
  "key25": "3yQzU1GdoubiPKZtTAbPLUYsiim5QA7fzVPQ2MHMRAooW1jyQNrvadgBJMhsAXteGhcjc2SDwhDNjYynbKxTpcBz",
  "key26": "DrVGiPfsdKqCN1WKssFCuVkeexThU7gpq3uTBHRuA7zUekq2JaSj4TsFZuhipnpWnUmJeqBavKpTjPe3u5xVTv8",
  "key27": "5xZhM3YpyFn56cvJMfapeaQmiGebiuDoo8T75aCwu3s2Knko7pqgJigXaVDRsi4KnhVHefXhwb2WCJyUoGAFhDaw",
  "key28": "4h3XCNAFP1BT71T8WirT8ju7mWuNAEwaK1dPMmg13cvShmWMbijBEWsvLDX6t446DUd9xCy1wS8WreRUGJeyKLJF",
  "key29": "36PCZNkQGdsqfc4nQURoMQS6tALGRXjcMQbmbqLLWVHMUj4Ai4VcGJ4eZuJdqq7oKD1N2Nv2R4x6ANw8ZLMMWdTr"
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
