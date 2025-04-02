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
    "5Ag9hgExSdaBRaWqKoixRaSYws5aWnRBTDRA9AxG2qkbpbZBEw2NTX1g7pRouh2UzZ8nTtnLXjQ91LC59NZwwj64"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21ExdiWA8qCdjhpUDft2mqHxLSHhgp5B1xsrg1x7n9AwSNcPg7cK5QAh9UKg1SBYXtjzMsyqgdhqMdCD1yYDZZ4v",
  "key1": "ATfEj4kukgUuezKMW8aN3NH1gx1TNFHbTytsAWQDyUTGtgx3126ddsiTg8gmTC45Ram8HukCPpSSnerCo3Jogyc",
  "key2": "rAU3FHTLvmi9cC4ishKYXBQunSKprqYCuomsquTG52xB35g7V1jqhGopwMKwrRq8GTtAgnoRyXRUQmd5Dy7Pijq",
  "key3": "5zMPKNkNSUVAJwMN9sDgAhXY8m2PPuXU8xw7Xj2xzFsZAkhiHzg3HByvnzLwW1kLqkqf5qFgAM83iaihuqsAVWvT",
  "key4": "3q9tGUy6fXe255ryGyTThkFLUCnvJNGzwXBW3C2zxcmdzh9F6LiGCZeWTm7m8ZYZpGPTjq5XPRYoLSgoN9yJ7TAu",
  "key5": "3YAT5hYNjcsGXqdDCeTErosV4WxUSgFyWU78BCzkcBNvjFtoqmUZ7WLZpD4a9K2XaDcQpoe39o1YcrCsdcC2Yh6v",
  "key6": "4Bjqpqd4iVsKQuzYKUfpX8PjFmdHH13EyD92HRzkKpWx22itFrBmEaYKPDtFq6uax7MMyc77vgYuqomrWR6WPeUd",
  "key7": "3S2eLVhYKWvzY7LzgV5ejREMJW2bTv6o5aiaYT8vX8xLRghtB2gAMDsmNPPhaKgSN22uUCjBKBCnrnCs7qHYkiUK",
  "key8": "2kJKFSxuGDs1BcPh5X7HDJSkYcjEBDdeBy5rCiSLQ54mKEuDjSBLVd9UZ3oCHUrW7FZW5XfTQc6NZx9DCWhfMGzD",
  "key9": "atuiCjQog9xbnfkc9S4ueo4eWxvuY37QtAt76fopwn46C5ahfbswjLgd7km4wHa2YFMt1yMpRAdD131VJumXALM",
  "key10": "5Wj4zq8W4LbkKU7Ai7oa8K1hZRseFLkiGxGT6oqFeJoFZFCvU4ybN6xLiesCkR4zeXsZ23Sc8PzTMxoTjqWWhMqG",
  "key11": "46kRJ4FXCzfhgt3RPubAgnFmQgmHLGBEHsAERX2SBw59m5XjUxmLsTAcJjZnaoZhbG5cjnUubhMxX3XtSkoch3SD",
  "key12": "5WScYdyAgGeRPcUtX7EjAnM6DeD6m3KA6KFGwP8bjA6kGj1pK7Wg8rmGcrVzpiQgVKX9Dzn21ZPjqQwjVdsN9DT1",
  "key13": "52nQ5JHbrsfsJRuqRPfFvQVd8crkax7xmjzd7z6s3xhKmu2sFhyqKeB57T6udkwqcrZ4gN7ULq7B31bGrFwfciXR",
  "key14": "2yDcZggu8ivc6Rkt1ghcxsiPrekGvBnvNoVCvZzwKHwvWKJNot1FQ1uXkiRpyif7yNkmC6XYVTCrCjAqH116fwCr",
  "key15": "2Xtue2hhAJhait27GXJurgPLF9meJAo21Z4zEdnMJiJZS3TmbRfbzr1VZ7mfVrDfc9CVW8rQJFWMiWdj3wW7qfRo",
  "key16": "EqBb4mMj1b1pKfLHRjT24NdrwWvaRi76qsXchus2WfovJ4MTYcih7M4TUPdskqKq9w2neCFx8Q2dFodgsa42mKy",
  "key17": "5RGY3EszjyHUTFQHdQXf2hR7EiLup8xmaPqkb1QhP4MEgKeXZcgodET3oNXangKdLgR6ZvbRG3qqM3qLdcsjJgJf",
  "key18": "4EDJ2Gy9mMJruyfm936TuVWrjaGFVrdosmvkSdzStzuSp1MyMnr9SqG6jm8yGTQLpWAAPhQp2J9wX8EofeLjKQ8N",
  "key19": "jJtJGWzK8YPg1nRXaLskgdvx47zajZEt6v4mEnEquDvHG66PqkSw1s7ifFhbGu3rhVxswiMHatCsDC74Q4T3BaM",
  "key20": "2vcBHJ4bejqV3ZgGPDK6rmx6Urrmf4ThyaM748hppSs2oVeSzt61YP8saSx2hRqi8NBbpnoA89y16NXfBeAnc8W5",
  "key21": "2ZTe1XSnVD6VhCDuxTmZhDSEDBucxYtJ6JVPyTxGQKQV3ZFEK88jrYT71SyA5z6PzqBdAfk7wfRC5vrQmz9QPyqH",
  "key22": "32RgiCQzP7ddYwvaKtRLLbdB93CW9FZUXLeocJRox3wpAzoc8V59vE1aKJSYm6DjcQ7ZBZhuDCaK4nyFbvM3EMTj",
  "key23": "2g9gLvEZU9C34cQQi6H8zdiUpHtwvor9Day4YFLo67gC4k1vEoQkykP1PbPEUvLVU8XAGTXP5pzfQUUSUAVvt9qS",
  "key24": "5Jju4XAX4BpFWwEKtKrUVL31siJuSvp2xhaAS9jJf9SVNBxAEq3AY5nUhqGMMtjcjy3VTLvXMaGo7vAqHjkJrrAR",
  "key25": "4uhGgP11RTLksTQWBGpzFgDQC51tzKHzqjVANkcjWutGCHAKwsw5H9fxnVtrZuELeT65HBYrGgkAvcku4eivA4nM",
  "key26": "3iBSQyT3mCvfLkbjt1zDkcXyek1JWfz3kETZYGKF7ctmPQVwSWtqFKKu5EfsUb5QE3FLy4yoXK6b7AzEcXJzV5sL",
  "key27": "2gYqKCV4cZTfoskJLLkhvR42KhEd7TNMhV5bVgLv6HrHRUgqnSBmjCh4S3TrqDCLUvC63RFPN7ACQDHC5JbSwMu",
  "key28": "3qE1YzjjcRa9B6fcWcubwi33KShJeiSMznssgL6onk8HCqW7crSFajrA4qbf8pUCJp59Zs1vWgvTTnJHc31pSymB",
  "key29": "m4hmqxekNu6QR1kX78oXpjwMbTswdZshsgwJX9fWae219k5QNTSBqojwQ5NdHk1Y45M2UtZCbVU9mtjsYSGMpQi",
  "key30": "wyQuZnnmGpGi3pyk1uNwbE4h3E3RQpAXuiUJBDAiCgF5xU2gyJ8R3Pb7AXECiEXDEFCbPzz1WSF2HDWorWArYod",
  "key31": "5BxRY2THnTuQC1rL5r4PWLMDX138KErmcYJoMna4PtscYBYCYYNcrgb34XGy5rSmz55G5fba1Fp5u5URs4tUKr8Y",
  "key32": "3Fj3hcg5ZKU1baRo3jV4wB1a8n3CdC8oA36u9vewBoKrQcVq1AEeYBbfUdwtFupY5k956bhmECyvz25M7uewEXdQ",
  "key33": "5V42huh8hwNGUX4c5v2z8xSxtJwGe4NtePo4JCrzBNSC3NTMjiJUujt8hjTUregSsXwnbkMafwbbnMDyNQL8a9nG",
  "key34": "5wdBxMGqdYETrHUcuLKduA473Frod7eV6LfHDNaSyR3PbWpUDwBMf4xdhtg8wnYynxSZH6fWHbTvG6NkpZhj6ovM",
  "key35": "64FzpAH3vRdgbUaaZ2bb41xR3CrezKHk36wLeFzBxT9QgE8BCF9voXi2aaKeFFJSnbwSTUZgdpicGoYLdFAUvCEn",
  "key36": "4GQaRWWzN5Wid779RVJioHHic6j7X1TaKsM5eCVnSUtBkqDFA5ky7UG8Fyzroqyue9Xsc7rUPcbpf4bFEXCxTpC2",
  "key37": "eQqKTvr9k6krGZLhnXQy1YgVcbCAPVktXr4ttczSYCLrnD66cLWCeTYAgy6w54VGVVDCMyK998DUsCiws1aw7Kz",
  "key38": "5g6Me16wYmymWbodXMW2LPf1s2b9WHVKJ3YAH2CNqE8BFZDQkULuVWTEKF1TNxDzEu9sWpJyPFtrULbukmpULXi4",
  "key39": "5yqs2to9eStvtqUDeguew1qxUCjcRELZVWyMHKkVE7CMwdha2V8etYebBUqyWfqwFhLBdFPawL9j5KRo3xNqS46W",
  "key40": "5or6oPJTZvkhpjrxy7BTMFCTCZL23pVBNMdW8LvdwfJrL12ZR7fgZCTedo3KgHu6RF86odnewQTaJE3SJzzprmEF",
  "key41": "4Gy6Ys29kn754NtfAbf4BBJyPZbBaz1TLCtz6FKzTvw9u5vcYXpHyuBqvuwAsEDb36dxiRJFEPLrUruAN99WnV58",
  "key42": "2SyWSeELV9tSHniEfKmYhDaNwSHmwQdaUZ5fh2fH9SakEopDnBii5o3n6ERgqztvPgsyrCzuFFsCPqwSzHHP1crP",
  "key43": "66H57kC2oTC9j54qRtVZXojMaPfW1ZA1LxSnRzrwqUmVfHicnZkszi8vGxknCvS3w5XZYqn8bHupLFJcafDk6wVy"
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
