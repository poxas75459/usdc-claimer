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
    "2XB8vJU67hAoEhpNt8j8ST3sZuNZQfGoP2WWr7BinoSzn1aqikq88mfx3jkZqERxGT3wzrh6hynenBjbhb6KmE1m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jder4ritchy586yGFoqoTP9k9aSjEDh1oeRpQgDmfQVHkTJvmcdqNs4mbKzxJqSNYtsi8sxr3tf8QgPms4dJc4U",
  "key1": "DpkavxoP51kBtx414AqxR142XaWL5YREhC8N4YoS7xzoSYr6rqpxM8pg9yGg1UietF89MsYnMznbqGvc2Ko3aen",
  "key2": "igtBTpyvvixX2USxbRhzN5Ae5LfBXHhf3fFzuZBDabkq5sSqEhgZZwwbRD8N3ZUufJcfXzC9Q279mph86UdBwaB",
  "key3": "PJ7iJ8EUY7YzkHxXXdD5cQMpAJ9aQuuaLXkbb82x5RN3isbUEpFLemCc2mEbSpw6N32pREgTjTSEdEtxtSLodnF",
  "key4": "4Wr63vvkgnEtyyT8g42rmJ64tptvho74CQdtyLpL8h2zGmHpxTRnhuRn4RQyEnKC1WgqQh6TTBJRSXCYnLibsMER",
  "key5": "51XgzsW85WEsyqsXDDNVfNi54wXcBj9p3479YfmEobQt6T2eH5K8rtFyebXJfipo8esdxwfwcy14EQHZFudxrWPp",
  "key6": "62owL7bHNq2dYZVb922X8v3joEhAxKeqTtmVSZk2QYPW4AdXv9rpuU2XJ2mXYAFCL7atchgmXPh2a6yu733Jg72D",
  "key7": "2bpPNVKUBHnBDmaZJFHyF6rvothxqezh7NxZBohLJf96jWULQeh3X6zgaQJZwqLhNKcvBbNnahhTjccH8eVZbqAK",
  "key8": "3hENP9DovMdL87xnVcM2MTVDAELdATT8KVkxbe1h735GkH6LMFVNhLn5fd49CxvQh2AQ9Kfw47cKaSETpLLVHkqH",
  "key9": "JeFEk1XA71FEQwg78YidwzwSQAG3mRRVjVLFqnfHL9MtfWCtriumZHAZSgCEUbVP1JYJsbSMVi6d9DBAfnF6q2S",
  "key10": "5HyxPJgLf22XyyT4gnwmk4FeZ9UoaYNycxPpUYtHTby1HBQi1Vm4a92duoPReJv9wdMQs6mcQt195Z6U7FSZAdZS",
  "key11": "58b9jEakeveAEtTmC3o4JFMhtCGE2Q4YDeaWeMB4zeFpADSU414BmkohaTa3XsupSWMFriFNoFJh9iMYMtuDFP2L",
  "key12": "5TbfPWpJiczBUtgxtJ2Zm5vbHsXhdxpv8DUbE6WNY187pPoefVgfu7dMnPC6E9jpdQsLbgVWkDUzUPaVv55bFmDN",
  "key13": "4L7Y5As7i148QTUxaHd2X5qydzuAUZfEuYpNyUfGUjLCxu7qL2TTxWTNJRRJFza442ta4ijASTAkqh1eXigvANHZ",
  "key14": "5qGbeoCtBYQP58swz7TNAmN5Kqw7VZK76uJcy5Dzes41fQXP1A3tY3ccKSWePJME64dqWGNVMvkXZrW4y2jfeTNw",
  "key15": "379vQ8xUZ3SzJvC3qMpWrEVuAxSHeBNpcgnbv1ecixPFaksrWbz8i3r6FkJmfC5JgAnRmQPM6H9BW6GVMmcaXnQF",
  "key16": "pTtCVxkeA7t1dehDvxfKtyMhw9Qq8zexKDvuB1Rps9XxSN5C7FmaX1k7RNb8qCvbnPyLxJ1vjNMrXctTES7JVKK",
  "key17": "4hbcteyUN6Uuo4qBM6mLCGdDoexKAh779VS15U11Tj4SkCWzwnhFvRr2wvwHvnPkWbnFsLNgtoaFiwRxRA7UNXWf",
  "key18": "2sDfrT2UtCMdNx2Hnz7cXm5cYih8zHwY2UbrkG9DaQop8eukb6TnV7xUyXmJPK4FA5yMWvXJAQQq7L42ZDgc54C2",
  "key19": "3DxDkgcMJ5JkYbnALTmsw3646uXhRSHA3VLjnbZWHSf1Z85ajhmNEuLUGovKuZn8rDjrLxqWHZExYhPTmCR9iBro",
  "key20": "2ssceJ5CjjEWqzoXJQoANoTfu2Ja8bLH1Sx1mGtdXMEC3eWsXgVLijb2hQy95DCHSpX5s3q3pTtyoZeSTKQeKQqG",
  "key21": "5ijanMgSEmU72uTyWxrPEWdccKWkhxgtJK3RFJjmvP9ZMYMwFVucXR8kCXndc4KE4816aqngKWRc5qi8Y7Rm33gW",
  "key22": "5U5aXoAixmVVCtd9m2z4DP2Mf4FmPgsTvofjfsCtFdvNWgo8bjqzPW9tVuRA4YXdx38bRLEmEnsft6pkBMRwDi87",
  "key23": "3dLerRMwVe4UFGb1kLp9Q7RzcnzGJzvGA6WvybpQJ3qwyncbGfQkyD66LXVjsnNwVL8Rwu15GfS2wdMGM4Hd31Nu",
  "key24": "3wZmx9C5uL2hdxLBkCJjHhV5XnsT8bTSXsVyWL38CE6nvgW638c6Ho7E156oXCvw289D89cohpCLvmxy3RSpGx7N",
  "key25": "4ZzR4udbweXKNVkqh34VcVVbAmt6Wb8gEZPLxyAnVn2Kdg7A4A5v7gEY6isDBTqX9Pgz1nnec3yHosUts1GgrJJv",
  "key26": "x9oFEg3Hm3KgFF4DSuPJVkgGii4sH7QdLzbzy5V5Vq58rKPyE44Z6XWGHdwbCmu4J8YHdrGMB639QM3XYiPQpF3",
  "key27": "3SBnPHjwXHP4cMJo3a9mpWyp7V49Am8fc338myfmYu75qiq8YST1oyD9CCpYzoy4EGvzN7XLQAC3v8Htfb6oAgAp",
  "key28": "4FEwzQ7gMWPNDFD1c62wYJsioYBxcBPJnUw1R7hG2PBFxMmce8jhy2yJNP5nKRyDXtB7XwYrJfKLMr7smtCGMpjh",
  "key29": "2opDzSxzBRvpgKuqXXVdGSgtdxizmxh5shx7NyCjkJmwuw318joXKSvvo8SMfHWxppYBU3S47eTgtGQ2qXrFgCDn",
  "key30": "4Kv2JD4WKoX96Qm2vx6M6V6zymGvNcmHg9gL9Piiw5u72zMzM9aC3RRZBdVXtxWapjtN4wz8UWn6kLhX65uXzWDz",
  "key31": "YHJDQa5hkgRuUdA6oGhYBARjARBd4b41ag23AA5YwvTdevpvF7drcnwJL9JgsCjiwqdFb17iB9FN1RbKRMQXWjT"
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
