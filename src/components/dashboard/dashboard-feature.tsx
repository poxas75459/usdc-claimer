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
    "hE8atXLxV66TW6XhqAk7JGHbRdvztt3WpBkzbketyaqhkEaoek8Ybac4tnJKtrYkUc8dK4Ziut73bwVUf7zPfHc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kFt5FQqX64scvDYoAJW9JEukMVK6USqTGiMMVkcVBdBnvhBhyqhNkRvdemphvvuupUGigj7a32Ft1jvRr4zwbEL",
  "key1": "49da3BNow76akvqkvb5rdb8wsUqi3U8sd5xqqQRfke1yRcEeDBtfYFjnZocNpq4nGmatDGb1oka58ck6dDtBYGGm",
  "key2": "3aDrUSyBzNSU3k3t9BPJjePWuupz4RUVkmAu964U9tAuduMUJTq87h1fozCUkGWP7LdBGCWL32DVSwjc7Ey2zmDr",
  "key3": "5D7aHYfNkDNcCG1itYeoGtsUAFfczjJQN5xNJbtwuDLpinkZ8a5HYeyeEG9qDK9AMXFihqiC8HpoRFVsLWwPyvHF",
  "key4": "53pi9uTMvCjU3RvXjghhTeU5FivGHtUBsv51iu6jzcshBNKqGkRbPN8MakrrAT9jE5m7aZFzmgTjf1mgeqnLz1wU",
  "key5": "3Y2xzKKrQETVmBiyRuQELPJKZoRQ3Qyu7dDhZEUFnvJNch7a3HKuYAGxxzSiKoJTjUGijXpMCpbkauZCcgNDyMQy",
  "key6": "5MaDC5mQn4WcYysU7KMxzBC66jfLJWN2uLMGq1gTEqZRFcV3FYcJjgCWBTcG62b4wiXvqJBYEaRhRiTBEPAXdeGF",
  "key7": "62383DuANuqB6HkEFyZqMVYDKTYs3CoTwvLiNvG2n1TDgLz38JrvfMLHiMUMRPybcwbQfDxhKLWGQs9oSDkfo4og",
  "key8": "5THnVrEdHoVPDZ89s3ustZ7JZf9StHgpWzt5jydtVvj5nPupNximfjMaGhAvWg84TeJve8tGiLn69kS5QFWeQpEB",
  "key9": "31t3UYjnQA9VG9AVo8KHyyYerBhfBGxkk7e1ieZjw8oTmnEtHuUAwYj4op1PsLWRu47KaVNtTNzsQDPNc9unCH1r",
  "key10": "q4ggYCaX3sFEr9WwCg6dzEE6QYWG8dJWXkeCT8XZ4kau8s3Kgc1QVAauv5B9v4iQGmtZk4QKiJ9PYX5pfBzRS8F",
  "key11": "4DLTgGkGeSULJiw3URsv8U1nyaNqpYEsfka7DtuLR6bfSWRibXZXBAPD2tTPuKgA5RF3D22SKYaatcDjnvY6KSPr",
  "key12": "36o6Bx5Zk6WyMyr4oMzy9vCTpKzkjSVbGNUsU1HgikwLveATLy8jq6as2VM7ycV5YVjKEEjRbksrZyZ1TPWPpdaC",
  "key13": "DaUQKV6Np4brb2UDF1KmB3g5wsH7gav7pDLuE1WQuKNNk6YLys5Lt3PVDE3muJE6CE8K47Tf9zUmymPLLQLUaAv",
  "key14": "4C6F6rfUtpeU5qsubek8xciRTyWfQA3CPFJTUuysaeHXA6EfuDp8XJPqMYAYa6nAcQxLiCDDgVwicTtFZrnDVR7h",
  "key15": "4C2y2gDrsUQPktxtuKTsGCuQDFhKxxMp3kQNaYx3Mehz9Ei3JBMvpoU3qNjbMjh5wUf6LPPQ5B8yji3HVXLZKLdV",
  "key16": "3qJ4x9edngAkmoqBDZmxLQhfckqa4yWp5r77MT8YrUAn1s4TqFXnYiafyFbXT37vNctnbFcZyF8mBU9YJpdfWdyt",
  "key17": "4GFFzW5VkESSEMnXypFND9MUdWdCgT9TueFNVQ3pBLXD523JAdepx6KSfUr5UgRVDaPWjsW85JQe3vCypr1zXBXH",
  "key18": "2dLSqwrV3WbmwHj1KPmh3nHx5YRxAZD3djs9YiyafzPBEMS4E4n83HVszuWrw7f2S9awNpLWfdBvz7zWziGtvz74",
  "key19": "nrS5dC8vBSCXfXCmrUaQYpms79PnJPkC9mhubwPZyQYaRKKYwyJs11zCoJt8Ah8KJ9ZfupEkjEd4Ca5vDmRHmuC",
  "key20": "5VFieThgmuEL8Lo8CVpG8Htcn2BBowLdDYzrbwcZGbZ7Xu7tUySRGJg275qv4ieRx8Eyiem7GQaXdTzw5RQgJxMP",
  "key21": "2UoQ237KeQPwyRH3dZ2DUYsjKLJd3StyinHVZzbeJZSmqvSFMyJDEFtc6pFUzb2UzjDbJ73ETVScHxbzcdMF25Ev",
  "key22": "6347ibvcVbtqDfS38ZUikH9Ai7k4iFDipMubKwanfbeQXkpijwK9j6vMGmC5naj2Wgtfx7CMrJchbDqt74jTvccG",
  "key23": "63mU8CzRz6wEmZrfwQ22AJ7qxGBdDAVQtR9HUkDZSzx4UtAeptnFW9JtNnKQXRXXgKjFfuJaCuqyvExo2KwaPuKA",
  "key24": "5nd3RCy1P7sqQJvSxfZHnT9nA9RAyefL5J5Y81y9trwmAczv58n5NLevzPH3s9zK5GZ8etZgo6BVGPJgjeMQeFG",
  "key25": "4ZnHnKPHvmdamFwGWjEXJHQtuG8C11ZiXF6pfN4dAYUBSsyjGHEQyWbautdPWjrQ6aBpFku1wwA2fTq656oUS49y",
  "key26": "2ePh9erxRWx2e6DtfZG3NVF3MbUKZCZXRuc1eeT4APs9xdquTtZCeRYKHtVWqYvmxfcYLt3Y9WebNXPCYD6cnoZJ",
  "key27": "3q8JDsXHjPrt97a4DHwr7ugpXi4PsA4vKA4Ji9vibkiyeWtk9BaDELGWnkhWFAUyxtU1kdy6NdfZBPtjuLavMvRj",
  "key28": "StvcVBytShzEiL8m8LihFP6pK3SNcjJizRaoUpDwgz22rwJhwRYQHuRPHyMAxx1JRvXgpnX3JCu6dvzLhphvYJW"
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
