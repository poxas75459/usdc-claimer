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
    "c34EstW7PEWA9jVqEiv5KiR6caQY8Q7JyDbaDCttCquKJYiqueBHWiJrCQp9VDo8aik2TMNvG9qhDfLUCuMMUUm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eMRm7seUJ4J6GNwMnWW8LCg5LkT7dXzjX44jjfknbz3WPsGtUBJ9j9FkfpkYVqMFwNE1LMAhryR3T9bDjMLw5Q4",
  "key1": "M1LVN95yLPgM3s1xwKHcprJq6Rg4x1yz3dUaoxARUC3E7rMV7eUi4wx99tCENurtLBaYm8pfiTU2jWFHBfNKrx9",
  "key2": "2rnQVTsYqQiYZxnD45L68gnLwrsCVMBH7hFZdZtiip6daWZst1U8StyDc5U2WNjxcVswH9BBHBuznhvMmEWD5arn",
  "key3": "pGpvoojyhTeAaxrfpePepDiwtSsViEprVYCYDoQdput4tNdHjqhoartUWrxgXpEXmadfvbm49FaKx1ujk9Fd1Rf",
  "key4": "5BBDYL7hXTcgTWtdJL2exv5sVoi3j1xYUnVJ6ZrFNNSMNPf86cW2Hz2wAUyuw9LaFewKxyy85BCnGj1XFURSnKgd",
  "key5": "N6bK5R7nTETuuhvABJKXyjYwvajK4hh7ARNirA3EWJQ5GdjpqHQAiLkBcoFKLc7HciKpdWKiFruq4goMUHjT4Cm",
  "key6": "5HGLvZdSTrqsLZPwtzvSnC2bme7v2tcFEHnZEUjyYhFvojB6WJC4sroLKccS5mdZL4hbVQdS8DTNNFFrhCNpKsRb",
  "key7": "4HWZckzbNyPnaFcxS6cgwALXKx2fcYNkSQuL2DL1WiPaJCVNUPqX4QtciukczQtENYuDbhyBHrM8CSZdKgMWTkJG",
  "key8": "3T2FwUrkMy6Dgkkg1AgGKhkC9fyWrFJwUi4J3T2AJGqAsisUYADoEUfX9QVmuSKYQnoAD7QbRaE66tBhfvHKjQhE",
  "key9": "2wHPdogRTUXeeNBJsGZt1ZRLZKBDg7RRmZ4RVh8JnXTRDutfMBmE2cJuFXjEU3CEgg79mMsWaL5x9fhx2PP5VJJv",
  "key10": "jPyDFFm3swHiGFxL5HXK52WS6M6JaaDQumYnhH9WGBckt7fkjsUjkEZu1zS5w5R68XmNXRYzn9QFq7wKxfbH3yp",
  "key11": "4QYJQ7tbwaAUwFw4k3Q7hPxSqHjjhyYDG5EnRTQKRYYN9sASpQvBmncNU6rbb1tgDcwHCYJaT5GfDg62Do3TPk8Q",
  "key12": "5XcJHL8DTey26ajuxsbkh9FnZAf6Hj8NU3juspGJA28vgNREmy4JqeFogfiPhFaH23c8CRL6RiwR4Jw9CjG5e6nb",
  "key13": "264gEArypFvdAKkDu6iXfg5PqeGhayh7Rf7iZzZeQBjhuqjngc68sc6iAK7WFTkfgJTrwFtETf8NNtoDR3QMAXXn",
  "key14": "592C6aKACKRs7XEo2JWneWLNWLRVM52AxCDNi9oToCNUgK4GLEGc99Qdx6eqkBnpwCGEXYDExZguDTw7rnWdqoGE",
  "key15": "CeCg1deXYobw5kBurguCPgWsyEoTutpFyvUFq8CQjoqA95F89Y5T3c4vmYy1oaSktgaDvoCGRqeKuzj8Y3P7xz8",
  "key16": "5htVE2qhbNFztvPpgv8Uq4jnAHPqkkNfkySZzcm9EzBdh76T3DRmQNpsuP4GkQ132Yybm342qzqafcfTgEvWGVCm",
  "key17": "4tPvPWAaKCgTmhnXShQKSDJsa3MvPBBr8z7hGPb1YECbjc8uN5Q94x612Hss9k6t2gWoCfUNZaYWF8d2HvGpcUct",
  "key18": "41eUtP7NjrnJHKAmduLH6RiaxYoPucyt4TqKT9WNsRCDTWGadxMWRqjuoVymDHBPtg8vqfahJ4F3QM4c1obi8qMZ",
  "key19": "52BHZH3FkY7W6tZct7GfneKB8mK39rVWqQ4THE5gT6t8EEXmEvuYMQ3vJJFfCgAEob8WZE5RuMPxjUakS1whvPbn",
  "key20": "5aZiGmfyCG3BzAKkQTjtnB2tMwjeAkh4jDeN68Ns8mASHQT14BjGLNFAaveL8oXjuCSf8xe3i6rNtyJ5KpTFmZre",
  "key21": "5MNXZE2ARtfRPDmZgmzTx6Doaqf42ALPdyToUXTVDtfFddEKDSETT7f9C5xNsTBkY8SrHzLiBWf8sHUimD7BSn48",
  "key22": "VHQumUuARvKKfg9jNs1a1wuZtC1qZL6neTaGMyF43TcU5K6CEarF1p11oFNj8e5eKY1ZuddKKk9v7x98NFa3ctB",
  "key23": "UdJNjTEUpoZ2aWNRH22wypTFWSHYrtM6dCxV8z41k6Nm75jBp1AygzFdwv8XnPgi5pJ4XSkQrb6Unx5sp2oiYYN",
  "key24": "2ZmGN9pWUqHfBcajrj7fPFYVmkbxPw3fQ25wETCZPZqSdkswedxidGkX7NX7VMaXWfNBQ2z2QuLrVJWKcJVkmSVh",
  "key25": "4phMUXfLUzxrwns6VSNStVmLzRNjagZ931tbExxeiVnd7iQh8GRGh13c6M6sxQsp4PtxyGRSfci3tKHD7wmK1Eb3",
  "key26": "sNYAaZzVHcxKy8BMVkiQCeET9iJbk3yaLfrniC7o9ef8LYSetNL55Ryq2pi2NSECZiouGAWLdegD2i5docvAQyY",
  "key27": "s2wrKwUEGQJmLDQKfejiVJoo1tVbjzRsT9QtE5R1RMhc9uBaN1REcQpqWxiNTtrwpY7r9dvuEkArsUoKk9cgYFG"
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
