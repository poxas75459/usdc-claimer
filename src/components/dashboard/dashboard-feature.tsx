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
    "2bCfrJZZr23GPdW5MkEnwSjNodWw2VzYY2PQSGCTpBXKdLYcVaBZJHiqppPAcW4hfb6Z7YNeag5Cd4ToNYjeRGZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XXGE1ogmT8QawYDUi1geuxvfqcdeAbAghPhWUu2TD1F7nxa9LhJEUU6jmensoLK5mptEMBjSwvQ7dd1xiBpNWA8",
  "key1": "4Bh2oN9pjkEckAXjzq1Xo8KoMKqPEYkFjkU4ktn68HcU2L92g3i6Vzzh6dcpoZAPttTZBdeSL5Q6tdv4uXMyXnJD",
  "key2": "4uGX1AMLSWSiArAmomaUfVrB8X4kbgVyU8XB8zKuvZLqgkAejV1f6ASusGGqoyrrJvGxTwXzS8yTyjAA1H42Zzha",
  "key3": "4Px5BAChP2BCBpjsdNhVSkvL4etwdAXwtZ5iAc6wePLLyUR2ViD4UuHiAU3YYAA2f9bV6kYpEamwYmGsHoTqtoiS",
  "key4": "2zygvJ5xVJAQ2vqzpm3uHdFrKwGrGB9Fiw5e2ajVXu5SqFwcYoBJXZgnmkgNqDnTAd3kdawRi7j4517jPqJtcmyh",
  "key5": "3QFejDtYgyLuiJy4zZWx5oria1wotFHskQ6G1rd3RZv5AHLaY45kqFzTpbeHPnvPmL8A2wd6mYY4SVbRtFYFkG1c",
  "key6": "3G2U9fSgkvCT4UJoeyVqU8gBF8WJYydzdYrnWZp5ikq55TxGmxUT9wCBN6JSiL5RW3YBqUxR588PCgEP9ZPqgDoJ",
  "key7": "WTnJTM8pBLD3KMo8Yth2L8AJghvty4Y1isnQqJ1G9i3N6pBEvmkQo2sNZjA6pA8gDkyaEzNGcEVSLYMveWxWbKd",
  "key8": "46rzKh1GyXK4Se8jmwL2JgV9u28ketEEmU6QibFk55AZdcsb1F7EFDJQfu7CTZ5tFDxrByExWXZs81kwPTNz4R8f",
  "key9": "597jbpvPRLT2xAp3CfC4PbWPpJXyhwDqvsKAZHjjZFiP918tuWtWL1tqguKratvxoPG5n9EQueoqE45wrbCu15zv",
  "key10": "5mcQvgTc2VF2mjzWamkd6p4GgvKX6qdJVJFPG8YYUZJ4zmfLbvnogNbeL6uU8FkMdfqo6UTT2sQfHMV5B52zE6Fn",
  "key11": "XaXp7qR5cYVNQu9CBvib44oRcmydnKqzBDniHYMY7TgGuKJnN4z7XPG2BkA1eLouNiz6MkK5yaedxi6j3Rx86Xt",
  "key12": "4NBxN9Z7xtpddi2EM7ZAUdJFBipjiRXidH2eNbEvz2wufk169LfJDzc8P9a85Svvs1GyWzB5b8oFnU1ukv2VZyJd",
  "key13": "4W4gPsA9vPcbYpL61WDCLeBpKG5t2n7fKQ8erLcDZZ8TTqRwMJvENvC8oMTnGSgFitAhu6bK9UJVrHNd6k1JrcC",
  "key14": "4YGMh3PnwTZA316EiNrkSw4afcVf65ffUTQYnebGSn5TakHBbnmFCM187qLT4GY86LxA6nn6M4xCgHWtKjv7BgJF",
  "key15": "5a4EBeMLstJTdWieR6zeC7y4izvv568GsnvwCBXz57wqgkbPLRfJqYNTNAp2vDr8Me5urCsPVoPZTdWLF4fQSAFR",
  "key16": "4EeMM3nGnrcoJx1ubVjCXXPZ2aZRWXrHu1iV5LW9ZGvmA3T54AJmTo55u9XocEhpnVGvzhc6o7xdXGvbHsAqHEWK",
  "key17": "2qs7eH3V4ZmX7fgCk8UuNXJKM8rKUnjg4HPGBzN6uDRvfyWQCiv5LEkTBNWwAErcAD6oMXaQw7g5azz7XpWcaWFV",
  "key18": "3DT2irdqYAAifrAqLsuNRYS4mH2dnHjGoQx34z67FYApwgBiPbgXPqDdLM18pnAgSeoEeyFH3RtmtqzxFewBCpeF",
  "key19": "5Y2jff7mc9LMW7BNMkFygRqromEsp4BtTsMYJmQ8Zo3sS16P4Npe48mU5Ho4zjGq8fturQ8Y4VCzmk8hi793XubK",
  "key20": "36p9h8x7UNy2SjWyCRCGHSXpwMTPhueb8TtNMRcEeLUUbXfAx1hpcuBpiUKRdi2nDoAWzUpuJY3cok9PLkuZzetr",
  "key21": "64CshLaBNLjEknwSiwTKdm8Bh3DFr7CjhetUnHuwvazB6QEKY8SdEvhkry5dAm591efPgCQbvpDQfVb9aXPfo9tc",
  "key22": "Ub2BtFCCj1osW8uA47dJQ6ZUsBzDe7JZDUdkYwgZiL247TMi5W8bNi9g5ZEHs5q4jdrxq9dZK8rEeiagF1whV8X",
  "key23": "3BgKhqMMyhB5jhNgXxx4GAkwLiMCGCZfSNiQFZmZ5UPwtPYPkdck9fXnjt4PBCdpbu2skgoQUTtNUUCzQ1g3fNc3",
  "key24": "3uJcVQrJMUaux5ricg8bWd9jnB9xr7cL7xWUKaniDwUry82CTetAJV7JuHzVFJSMrP8n312hbJham5CLUmUDQujj",
  "key25": "75fuAwWHNrAKZEF57YYedsVaEKXUdC51fKpP55DuQ6CaNHACMps1pCLXqCWZhh6assZPu4YX2QqzwQpbdaBa9uD",
  "key26": "24Hfb3NobnML58yXWqAzazCDEuxM5RuQKSWPHTFvSLNuAdjtQQeVaAPM1DQbww4PeLJwPr55wQ6FoYpU1nFv6xrm",
  "key27": "5YuikVJELurhrYGhtvyid5hN4J2JT5bXeWetZKqPUsrswJrL1fVhtg1Bp3cmKC5QUcYM6qtQawH1suEGPCG7PiH2",
  "key28": "3fWnBDcMqgNnQjD69hfepY6tH9STfw7b2M2AGiCUwdfXbxRHH3v36Vy9XZN8fP2vnwQ4PHeFt6RwoaWEY8wRUpni",
  "key29": "4aZ1Vwov2Wik6J6BFKMdPxr4Pim7oLcCQzRkGtKC4kXgESdxk5Vd2qc1XGGfwijJV8PGJLbxE2fhEMq2wgprEBVq",
  "key30": "5FPb1gjyXXVDx6QLhhYXyMBGhqoZytJnpXojiCvy8aP3H9a3KDfyirwYaTDmrYArxGUbmgZ22QLmAqKmG7ExrLH2"
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
