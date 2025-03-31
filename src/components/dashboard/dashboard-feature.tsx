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
    "GTnda4mJoZDg3GBR98bmy8BUYUzPzSkEKdG5aGDkpqB92fwBscpx3ZAWLenyLTphzevETyVFDuRkurHtwQgNoAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xQ5w33DAzz3gZzqKYnuZd94vtSxYKQYzGWXX1kuukU57NdrQ34cDB3X6pU5BC7pGrtxNBw52rM2HC4F46XNqazM",
  "key1": "59DnTixqyagtbfcS5wZJN5urwmr6rGkBy3BL3EUj9n4e88jYUYJrZciExAUxjmbeSTYEppXjbxQ6wtRybTgrcAQa",
  "key2": "5awjRuUtopSCbihey3wpPCLchPfCmacvXofrCVPXe5HGY2nKTRoeCzs6Q67E7jBWRqEqiduZN5VEjSEBKJEbUTTz",
  "key3": "3p14WZCk5b7ZBja1HRykRxGkK1eKde2wqgGVBTPEhkz5ynoF9rwBUQeAcvLuxN6DbsByAsU8V53UBruMaaQX5XC3",
  "key4": "4QJrcdQa881rL7fnsBETj6dykVNGr44cmFyxC1KPGk4oRDnzDNSziJjp7wDWs7TZfzaXu5QfMbVX1Jj1aiSV6hqr",
  "key5": "4CeXDLVv9PTgXnPq4Q7rxWdk9RLU7dZfesbyYGEtjkZzXgS1ssRX9W9siWonZ163dXqbooJofWWkhx7VJkmiaKdd",
  "key6": "5QtaSPW1P2h6yRKvDdFQKXbjTJpTbQ4EVHSZyYheLDo48GWXcGjZVgoAKKxHivKVbR82hUTE7VRiYYhLp8PGSxK2",
  "key7": "3naG6GHTcGYEfq9F1aCe4hgBKyQCQsfeb272x7fSncE1aBpP3QPaycJbUFMZEtCnoY3ZbLtPUiisxhWFMRUMiUsu",
  "key8": "3cc1rejFmP8JLrzLxVvZ1C2t2VRktPmKi4U2p64MsowSHL4Cc4q3RjFnLcqnnHGyFrhuhu77DndvoZoPwd3NTFRb",
  "key9": "3YQFAXSWTjWFhy2N56iAmKGekJ21um6VAw167XJWFF7xSBbB1dpVPYEoEzVBsgTgnPawZSr6xP6eLRTXTKkxNsSD",
  "key10": "BtemBnF4ajye4SdxyoxKV5GoTcUTi5cB7FMgTJXyjDqtnsRU3ywV4wAcLcq4rsEdcAgDuyQufsNGTiqxzAqfzjw",
  "key11": "3cMqGbPiRuHYUwJ8c34y8EKjyo6hwPMKVLM4xZApBUtupxp9src3ZujF49wvqnf9KRp9fuRb67bDjw3cvLTD81MZ",
  "key12": "3nHenVDdqH9KeR3qm3GBhSmtuHNpH4av6SaZrHJUip8x4ReD1nUwMQW5oY7MDfEEdFWVgXvLVXq3zNRR42BQht64",
  "key13": "3c3Xw7DozdYcwj55EfGm8rCEYNHozpLcT8BC4odqXvb4etj7GsUkABRnc9dAvJEhZ2pbRjPDS94E1cHUon794MCF",
  "key14": "4LjjF6RDKph7dcRf1aHzZBuPfRk2pYVHEfBBvRTH7XwiRQrUm4yapLfqHQVAyPvCsjBBHxMMvPXMFcKykVT4mHbG",
  "key15": "4ARYLrf9F7YEgsW9pfYSCad1pD2CCxgzGNoaxdwVg2FJmJ5zmQNCCLmd1v7N46ybaxbfkLTLWaQHLNQGTvH2tuMt",
  "key16": "67jdTY6SxBEUua3rTC84rzKSGfGHaH2JQ8xPa13pe3f9k8Trop33wAX6phMReD15v2Z9qvBzRMXXKSDztZn1k81V",
  "key17": "5sNyhWz6AwurQ7TttxaqP9JBf7Y8pThyfVNcE7CTwF4iyt4NcmQNHNnY3Y4PukWshW7tLvukELUrhgBn33C9oYhk",
  "key18": "2dUTkyiyYJtYK6qGbL1ZuqcGZyHgW2Q4vf67Wp8cvcp2J6QrwczMyqPnVucdQ9Cp3tYptLhoykVT2RTP2zL4m2L3",
  "key19": "2TZxJiqTzKfNGCmoaexTLbvpuJF8ghLcK2imsnjUcmDuLhm1ExroXz9FGbrk9ugTUaNosXMY3Nr9kdiWnpBujwqW",
  "key20": "5QoKizacTocQYidQFuSuYDgAWssYT4frUx31n2eGVMiR5qdrgLfHgREUaTg6452CczqAW7ics8XrWxDnpjuYMsFN",
  "key21": "4NSk527KayvZozVJVrmK9G4wa439xNutZCyWDo9Yd8t6aXVspB2CmNp9fpqcSsTCgoJzHcUbx41GAgAtLmmqBqPk",
  "key22": "3LcYEmcNfhYUFn6Yiobi4dA8hUffjEALknvZaAQXfTJjvkauLpZ9d46LnUX1iAW8Tfo15D4ctL4f6kKV4RZgXw2d",
  "key23": "4J7xiMNuvDymo43o1J6uo9NjkjiAjup9x2TZZZ2keJZDREPjhzV5dKHExpZUwJcanWnuXEEfn3Mep21Zb4MPW4E5",
  "key24": "3AtmYWKN59gT25U8TFfcXXUXbxDwuPxATSpRVM6G6Pmy3o95Ej7Xq24BN4Ci9KTzb3FdDfa4J5JPGPwR6PB8jYUt",
  "key25": "4fqKx3jQe2VS4H5Uk4hnMbYMGYCVxfixNvqtRzxR1izy85uVfXMeAr3sPXvFBXVWmV11duYTYWMZF1Da3Gzu14Hh"
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
