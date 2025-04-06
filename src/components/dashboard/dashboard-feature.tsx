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
    "5eDjc7qKfZac4kMXk5rSX61unykRBmdvV39vBTZkQQiTK7XaCojS76J6f8hNPh77B1ipvmUmx77mtzvJJ7j63g4a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bTxKNoWoVYNc3nP44mH9c4nK14jdPYXabaFYcHh2yKzgjrUWpErnQibpAfzcxuh2DepqEDgwPwuhDetuayKJixu",
  "key1": "2MYEfSYan9eDDMiYkG1KUWJFyR1grN4KCipgEpQ6NEJC3xajNYNwaMnmCvHQxpGUU1v91Q16qkRYFJBRU7wkroPw",
  "key2": "4XGvwYkzYyb2XF32fxG4mM4iQ7HdqV6Ah9S3CkzTQyfvZixfTzW7oU6fq1uC72QLka4J5nuCsQpeZNtdtD8BrTVQ",
  "key3": "2L6akNSAWC2WGbddSUAaetmr3Mjx6cJb9NMBvDnY9Lc8qcEiQi4MifbYXGRWWAPPmYS9hkqek6qLxt3MWUbzBmvV",
  "key4": "32coptoZ55Qd4KjaWH9ZctKyNKQaxJ2w9M4gYYHiipAzspx5RqRtwTjFZp7ihEsBYZk62r83gYTARpjaAd6b4dRE",
  "key5": "27QwG3D1QnSqcGBF4n7KAEJv3cm4jTE5bQ5P4PKCn8THF3DcDCws4WRBSSbDvZTTpgQFCjpxt5C5mECR6CHnFwvF",
  "key6": "5UGKGQoBUy1qxsk47AvFcXZSBQ2VBg2aAH4SVP4eqXnHfzZGqcaVNvjgGNW9bqs7y6ooemLWaDYgaFtXdVQhoqVK",
  "key7": "4HuqFgxSK7Q8o5QtRXxuY7mcBWZL8Xc3VSeZn61jKRiYQHzD2yMvWrDy5NAdNvYTnqfPRFq75xD4C3aDHeAZKncW",
  "key8": "YksfusfMdUTrUVLKiW9UXMjS9sunxEspFV7KGch9Tf8PHaE44kZcc6UHmn4uiv7XXpKkAZ6iP4QBG9H7QUfMV5v",
  "key9": "HrLDFXP3DWtpphFk1ojUYR61fNkmvoKVfHa1z6XQKQASNS8iE8FYgjb1ySTWrTyG7zaHQaeRAg3E3MJydBhyA5V",
  "key10": "27ngGYumVeT6YCQ2p6MpkK4vpadXFCgtfkZ8rDmmDxQjEBx755AVJ3dirgA9LVrSWbN3Uox24XWUJUTu3VMXLcS5",
  "key11": "41svqp5aZXF14WMaQ4FGenDS9q2RvQSit3QrWmgjPF1U27Lh8xzwsV23u3xGaacL7vQmYDEGtba9mg8yhxxmixs6",
  "key12": "5rNSd1N6djMq8Ru8ccsLQ5HVSpC4aX59LGLWg2QtAiGZkJbtPeV1UwPxXPsUjLmdH3tHomiu5cu34NqpEApHTXdx",
  "key13": "2S3o8HHiEfVtMq7QSKmPNEFuPJCDBdfDUJ7AosJsebXEzAAiq38RD6C9q64y3NXGStmQKRx3RdhPouajYDutedzp",
  "key14": "2NTXdEXShfeHEhgVxGXQxFvE62RRErWzoKmE9kT4NZZzRFWa9LJXYs15NNqBhEwV5gaNQaEnPukXHm5M7MYyjTe4",
  "key15": "31yEq5tt7cbthzCEvqrK8pp8u9jskbSa1Gk4zTuphLwzhtTG4e58TtoP7gq8M7EY4uyBMTjdBe1YrG6knciCmgkQ",
  "key16": "Gz4LYo8sujEiZTm8raRgqggarAYm4Srugv8M4MHBqtWNJBWshoqGkWT3i5a5WRWJMYo35gjDosmqY64MWR7AatB",
  "key17": "4DyQ1icXc6qK6DSEGZSVj8tDzieDjpc57ZxdLyrU4nghdfJLtpxon4wykja9wvmrfygru4jGqUfG9J1PPKVMwjWS",
  "key18": "4k9xnCaM4VBR92GHJNAVBNjYgqECZ9r5TNHSkFXycW8rL5Ut2C2bF6xdf4o17jXT1TYAsFQF4qq7dro7Cg4y9vwW",
  "key19": "4SKmuS9pK2VbxNhucsH2qnG743okGWPAjbj7d8isq5JzL8FsxEdXYx3QsGc4oCKqCxDbwc7DtkvLDFGWRxJgypXD",
  "key20": "5X4MSgKKUgUiA2XHe2fJP9SU2MEVRrawTYGce68vTeWcyyUwRbR9rvEYWKBUvyRQQwrNygDjaJFpq7Koc1jvwngb",
  "key21": "44oXf6giPbuh8pieyzm8pUu9UAJxziYkne4Sejr2cE6hTTWEByZLHwZDBbXp7nPrJ7a6dBjTCzb7CngJx8TVfmFf",
  "key22": "q86uY7Ak7sGPkx2DkWry9nAVCETnUHgD71isgcDbTAcbSzX3Ra9h8aqhW3XC7Ex4VkywsDcPiYj6eTs8RyHYFsa",
  "key23": "4kusdTxWgFJUcw4s2gGjNNAzyAZE7BqLUV3b5F7AKzKruCmFvgzKczzTDHvrR3c2RbXBp66tfcPtPCZt29ppkkiC",
  "key24": "2VsFYSaiMYwSvAoFPV86bmZ4jXNSXQurEk1nLQCH3o1aWur9zSdB7vSnCoT5xLe66YzRj6agYmASPcXTH4GBSmE7",
  "key25": "c2FhbtzrXTDKBeoSYTJ8Xn7zdpa8wdHAG2ZeCMnbFxipa6k9GLm18bhp1K65ZMiJ27zmTtbpUihQHtkm8wHT7Dr",
  "key26": "2u5np8BFCfk1DrsvhPzPyHi6LQG1fuovW2ePBFB4PioFVUJjFZ6H99vCHG3MZsQKLgGQVmnqeYrdvYAj4Z1iHhrm",
  "key27": "5pUxRfQaM3HQn98gKRq21Km4Jyoxgr2dCHTdNT1YQuxnu3oB1SycvvC7DN6UFBAt6RLrQukfEVs2jdGFjNoBxBZE",
  "key28": "666EroLYGPWsW7hrEF4h8cEixZvUZoyB4Z166pjWJpzSNJF9EDxZaz9v6196ywMkBvQgbbgvrRpk9HdF7ocoEe4k",
  "key29": "2aBrnfx9kHPgYsci1YMR12m2TWtyV3qUPu5jg76JUuSxLsxriwFEtHLgNeGayYVK6H6LNPsH1vxyGwYfNMrUeip7",
  "key30": "4Z8S7VM7qH9p99hwe4FgRMT5gEgw6KVPUvrASERejnDEngVEGoiNvJcAtmiCHUX1E9ZbAkfJPYpF8BuZnf3EtT1y",
  "key31": "3xQCcdqXPKSQmpYEZM3t4vyWRobX5o3Fc4sZ5HjezLNkkTHs61ktmVobzP3E8LNm8AdFYKDGA2xQmgcXk1S88Q41",
  "key32": "2VTxyYc8EgaJGBcqZVFRc3kDxcX16R77sXsS3x8NFnQ1fxfU3zSedtXPqCUQsjjW1a3uwJ3MXCDkPAQy7Kf3kLvQ"
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
