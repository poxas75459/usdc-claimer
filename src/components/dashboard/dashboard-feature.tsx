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
    "31rn6MnYEQgtvjFugppT7f6RkX5y4bfZJx1ncNiCo4N4eCVx8n2gaKKqVCMbubDQ14WR4RqkR7U2DLVLgm4dWmsZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v9LwJ1Xjk2hiWBoGGNv1wHdsTfuVVnAFMh7Y44ikfsuvHJY6t5vi2Asn4bK4My7MbzWfsveBRB4XpLfqjarGrPu",
  "key1": "21upK6ZLYLXTRFUhY8dqq6WUxWM5vQ8CRQdHSLbz8fQ6REbjjucACdsERkgK9CAG8N5BxKcXoYL2UXiBSmGykM4C",
  "key2": "2jrg8PYB2DzCjiRWq5vaZpPj338SKqyFnnUdUvqPDNP6VL72RfD48QWnwWQAFm5DQy1ubE46NRsunbGcxLcJBXZh",
  "key3": "3SebN6cm8dsrcvjZdVqYkzWBMKsbSuargcaSJKoqmhpUvRhvWjweMwDUkFcqPPAESqbtSErDauTphKTq15vcWPL",
  "key4": "2CapwUhApJpEb2zj3zstL9gKgiBDwQjpNeAqwKLVXtw4q3ghqu8LHuvPTBJK62tMU96xaKRgENsstgnKM18f4bSN",
  "key5": "3Pd82xVTByTqepH2hLCneV8N42EqDsTE4X6fYsdG8T627KAQwacSx8hV6HPx8jXJUJVPXJoJ7Xx4QTyzfAXKTM7Y",
  "key6": "3N4hCVq7ZE4JmSdXXc4X6oEXQfARCqnAhgh8rKoqJiekNTLncxRnzqGyy4gWhWevgHmnnTRxNySaLFiazDw9QC92",
  "key7": "3PV3V7xd5Q273VvG7itS4SDh6ZVvF7Rb5uFKT1SbFhBaqEGUxDh22shTJAUqg7Et1uQQKQUbi4UqY5sSqNYbkKBN",
  "key8": "2c4Fhx7BPy9mfaPpBUi3jer2vrWVN5VXYqdP6VxjPmCnbNB63edDBNazvW224cGpgWBTCwQp48gfc8pY4TiMDKyH",
  "key9": "4Q3aDPWom575AraHp5776ShsTFaNwtf6woE99irz9KjSLfoFS37jossS6tcLtoxxxP3KuNRvgS4UvT2tsZY2pgGE",
  "key10": "3RdsJXCpcJxg71Cc8k9R5NocRg8iEmaoFbQmkj8yBktKfnwdojpPGr34RK26Hu7Dsh7wcnsZdmGZsiz7XbhSFcEX",
  "key11": "2tavYsXehSK6QQA2hCN3nTv8j3EqRdyizwMggbh4sbfVVUbVCas1Sn1UBzM9uVqgk6sXoMzpRr53Rk8oeQKmEdPA",
  "key12": "2U4hQuLdjQSbcuNbDU8UyRsMg64iA7S1HBDgyzKD8kTHsp2CWRo3vjadyAMhXXqZJ368p8PwyE9zdbtEyftAC9ef",
  "key13": "3vrHirjfwbBRnkLCkPjrKxFt5LQF5wfLC8s2QZUK3qd5EgrWy5R7AtRhBbqg1VY9Xujk7N1zmxTqmQcuZsRkEWL3",
  "key14": "2UWvueo3fiqfhaTask5sQHX9DhPrhaUzcLPpgzTVxBC853CwgUVQoyEDxoxVfUPQpBm9Qms37HqNLbBkYqU6zvJf",
  "key15": "5HR3iA2GWQhY46nx2cBF5wqHBnnN5KmGomYWEy6emXPhh4HcEA6aTW2ajLpLf51pUJFEL7EXinhVT8stojEncuE6",
  "key16": "2KgXHZopPRvU9399yemGr1bShyT9DD3hqjw7tekD8ZvjdCMBjbVso89YsiuZGCue5cSEkgqxCqiMDoveVwmU1Nia",
  "key17": "4YZMJGwiopjx7CJygak4UBksU3rMfzVZXU5UHvq6yBcdP3w9RjLLymNvu8n8AMUUTfnAm3nCSdegY1W8EfWWZeQJ",
  "key18": "AKDoGeRY8p3DxfwZ5DS2aaFWuLZR2uCgBvhPV2MFzX6hMd8uRaUk85NB1rD5LcmV3BnfN8AmvAxUMP3cPzJPPJD",
  "key19": "5GvLQixyKxQGwND9jsFsHLYLEqenBVqgT6PHLj9TsR1d1CvfJMLP32WqyXwBjRo1r5B1brHiFBqXPmJsF8KM6yfd",
  "key20": "4DK3q5hxyjb4hSWE4HTxo7qFSiLctvLvjh4CndtyYzwvBjsq2UcAQKL16zU2KPYvGhrRCr8CyeiDyn72BYa1vtj8",
  "key21": "2Tj3mY9XLfs9Nb7Tch4ZbQm3QgfPnPsZPkDBXGZPEpMjs82Zk97VWjD9nrJkzet9L3PeagJi6wsGKrhcXUJyvyte",
  "key22": "3uzqnMXsC1z4GgUcqVr7FyDi6hjeTw56Uj2ZQrsoK6EbLE2E7Un1qUX2MqGQjNTZ2mm5A6qrZpgozJoWQqZT4gf9",
  "key23": "1dyFSbjEqM3v6FkDDTvcFJ18hSwS723ekyK8WyeL7muo8H158e8vLvxiWhQAy4gNMN5q6n5sBB3Hwv2VswjwWge",
  "key24": "skMCzMfqvA6AmPUQTf1Ri5CwQsobHPvkXJMCuzZ9ciogHbLxCBA444TVLBpaG3BaKwbx9xNGwcovNQmg11N7UCh",
  "key25": "MhFUQcVPuuzkqQc3wrTPWdzfKGUJqt4oSXrJ4V5dnjzyyiH1fD12bBBCYFmcMbr2JXvnk4t58msvKEg3P4Gutop",
  "key26": "4W9BgqJqH9oiZ9t3H4NzBFkYRgEwMvNG4BXSDc44NRsQPqFqP7L4XSv48V3J7dETMmrdQs647cYv7S7pYnqMQsWG",
  "key27": "3xaSkyQJJjhkcv7KCV9x73kLTrnzMd5KsYtyk34J6Y1kvjzVfvhqztSuy3nRHhXoEfGZA87TzpFSeBUPqCyMu1cy",
  "key28": "5sb9LQQJLzTWNanrmrPvSGFpdrLkSKyKmsB8xLGxXCwGR11qQrUx3Y6wTGWvK2982A77R8E1nEriBxTE4DMUqc96",
  "key29": "GfskFJEzzJqTg2jAECZemUukNtFfJSUBccfEfqMLPuPVnsV5NmtXEnDyz3gBbsNGTn1ZZUwXKXqndSgvr7NxjZK",
  "key30": "2bKBGMPNsAe29e5LfT3BEK8eb9fAe9qutc2SFEuZRKPmP6kBpYn8XKv2AvmGZAQHuVNdBsrDRo3AuL3nD6AuvC6h",
  "key31": "3ZJSMHKr7Wis3R8fthbtBzkCJ1aZ2bQBxwFZSv9AdfZwtAcdVwjYm5mZ35f8VT55oHchWTpCcRuWw3MiDFM1aP8P",
  "key32": "5Jm2e3o9tud4ifeKpLu95ttFvmrw9oCEQe1xHkc3LbCm3aCiRHB6qB1YXYoDZJ5iHDZtemJMiQYjHRuvJhwQcoNR"
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
