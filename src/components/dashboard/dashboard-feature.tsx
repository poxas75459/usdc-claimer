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
    "2GXMiZhvU9FUjwiawyFefoZe1hY8jaXzPH1KBJDRebYq2fJb6r95e8ah7hQMvV4akyS1iHit2E9xkaakjB873bA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "597gcYbCRtrEJW7vqfx8tQ512jy1oatF5MWEXuqNQB7LmWcy7vnHCgzJW5L5bpxGWbA6mi8H6WoZSCy7jSveCcf",
  "key1": "3BfynyfYXWg9fFe9A9EhMR8qdZnDtRp4CvnTEXWkL9d6onqcgNRMQS3edX8gcf6smuxX7fEXGAJPGUTzuQfbrw4J",
  "key2": "NJkXiT117rU2CDCoRboKa2jU8az3biZ4r6wjRwEqS1frQFn1kcE2mGmjTZV6AbHjqYeg9mpUSXytyCXxML8sXCZ",
  "key3": "KMcH2LZsKuTSc8GAiXPKpaKsY3QTYLx46ZSN3iWnYuiDnUV9dGt5o3w2LNUSmf5qCqrG6CrMPRUSgTrzMT5cVMU",
  "key4": "3MVGoMHv7se6uUJb65Pf2zaazKvZ8uuNo25VvoryegwFEwwJ9YmxGsoLXMSMCCXLswzBSYjVtTbAzYqW8f79j3VF",
  "key5": "SLtHHKDHQLYs1EHqXqcf2n8JFRCrtoP1kLWzARoszhNVxcGwKsvUr53dDVPZBhhktHdNtLUDi2nFNGhnPwkTaFr",
  "key6": "5jbbrGiRLo3mzcuU4Gt4gUKXQVi3BSds56UXuyx5LrqkjdKzCDutXu2Et7ViNTELiRAEhQPt4BnTzHHaXLX9rm46",
  "key7": "3snxqu3f1docjbgr4HwnRAjeAE4WoNvYiERwK27tmTBUETzGQExLY4nSGBhCUXfntKgidcYfkabSX4wN97LeEfrM",
  "key8": "372hWzDPbBCZF33oFoHL47cAiAqp9adr3kXFrYKdidVe9mDefTD5792pFGYVG7rdSc6zG3L4FeV4xH7u1kS1Jahf",
  "key9": "5WMJu1G9wcFJv9SstnDosT4bLmvno2mfyTqhpNfw1e9fPGZPdszgLRTaZgc1wmiiEUv7MuMu26h5P9Mu3AMsjAxo",
  "key10": "4XH8DrY7q1mNXbrfF3EJhUgCCyTHq61vVmDEEmWREVKMa5GFnxfU2HUfgS4Wic2xxCeoF3x51obonn1fK6BAGqBm",
  "key11": "4ym6CarBHpmEP4Y5VrxaJSoBsyV8TFvNJJZqh36eLmdbLkFL1kZ24hX9UCF4ow32QPvywbDfimj2RgRsZBWSSnWA",
  "key12": "DXC9vE7yoPuiu7k3dW7PREp6gGBQmUEQn1m8v4gpKGrpJVcnTWNx7Vk3Diw8RBZqhv7AxVBJ8nLPX5Sn3yFMb1y",
  "key13": "2u2jPVHECv4BqaWZebHt5obWczTf5fAdQehnuYfDFykTCpNm42fG9QPFrqr7A8tT2mjbDmxj94XXCzjhYFaqh1QD",
  "key14": "512dDePPuExrm9jYRWudsXAm8nWZm4rN4PaCy8SPCDYRdsYnGbhSXTR6n3M9qbmRa6RBPsZ8pNtxFE96kLGZAx3e",
  "key15": "4czTVfMk82h2YgLDGm9wq7Cg4sYjckAWre1t5GsSMXE2F5iKchUC61mjNUQ85FpS6j1utUmZ6rYdZ4kXC6G6wmuU",
  "key16": "2hWstJqkoC9VcrV3ajxGBKYDdPz2sgCn1iLBFdD8piGmir2Mi8L5aBbjic4zEG3x5t73i7nsGkSh1k6UatPjNVS4",
  "key17": "5FUqGNnpzJHVUMqjsXPkf8izDBkXftp5VpFgcdUVrV4Vfaof5jhdynNKtZD2BzA1z5DRqrGrcW8oxupnqwi2Jvjr",
  "key18": "2MWE7XWhKBAKdQ4TGpaDEHbM6yYTZwLwUUjdg3oFaPDvRwWacr4r3kFJ8HYNLqXhXSg5ykXeqwjL28ZpUvpEg2N9",
  "key19": "4fzRPs5YakWb9oujRZMcYo6dawgTXbhFawnAv3bBGSE6nmxd9TQqv4aFc3CzhoAjaWjWAJfUtvLYFv2BrskDDbg7",
  "key20": "5b6iAEBjs7GtjUQyuNKkmSNYE6kcAPZsz1aCcnQD6eWjmqUJxFcZarwx6on6ojLKey3VR1dMRu5sVJbiizAdiKsx",
  "key21": "5DuuE78zX7aVJSdxcmyPmR8hAFx5zUYNhGtSx3avbWRzFtYq1hGx3Dy9HdWbdxu1DopmKWiXqUf9Xz71rKh5r8ei",
  "key22": "5eLNJAMRisiy5tyCSBAJvFUZCqSPZLvHaPjMh2AxTNWcVK94SHYNWDj9Ld6S8qtqicizssmcSNeQhYbS3J931AWF",
  "key23": "57gCaSjhG2m2mpwirRwjxSNWDJxV1LBGMBH9qkS5CGhX3x7Z9TgxSnydyQFrJRfWirHcyRth3TAMssPDXV1pMfiF",
  "key24": "3qdSBJe2uqYxViwqJFQ61LwFBzFyskTJFHqER54GXcjMCsLdkeS79jV5sBxf5pCgbrfRgU3ALNNRBQWqg4JFxjuP",
  "key25": "2bjrvmqseufXJ61rzeoig9Q7jDzRuPW8aLjT8o4Kz8VqFLjsvBNz5SAdvK2LEK7CrrKz1535ohxfSk4p7Z4kVyXc",
  "key26": "4tHSBadUzmwvqT6brZP712nUxqBhsegM5p8uXRf5US7xBKz1SRLmpAyhQNbrjyNoXa6AbZq8Zd9ZcuZ83YPDSgyN",
  "key27": "5sNntp1hDBRYwdWviwD8on2aRZwSJ7F8g3sbBrDh5TEEF3NHCoQjazUzQ47YQ6AuqVtXN2xQXEtLBW8Wuc9Y8ywh",
  "key28": "4vCzyC5gQX9sfcVj7TfHdqRiTzibHENSEh7V86ut2nbrodTNFozX9fgocCWxJUpML8XuP9DDRHG4K6hENFWEKcTv",
  "key29": "5nabUfeq4tWHNf5vrSfZQo7EnpitdaHkTNzBqG9FjAkWZiBHXxkfbmkui83h98tnVUy6nRYCcXvwoTPBjwXEWLf8",
  "key30": "37JSue5eFK1rk5SDsb973Dc71aLXwnvFG34AaFo6Ci7xafJpAxwtJSxLWRvCGdTHhhhBZiXdHxF4jfTmmjjXEoKT",
  "key31": "4bWkwc1pJsJuNJkdvAkM69xeihoefakFDivQzygtsXF6xZzipRH4rNirmkE5K131nPWw9hWn8cfZ1HDebTDX4tkS",
  "key32": "2TtPJXj9oHbpSZ3w4WCEfX997KFvA8qPvGobEnm57QX1AnDDaf5Kd96eVNFUSPD9vZnYyG9kLU2LgVrnrJ7Rdd6S",
  "key33": "2h5stezzqgchPV1B38FrSpFRTwWRzJ6UQKpWevDyoVL5qegyRZgUNAVSnQqBBiTjLsf1Vy1JcJKnoKU6QxUjxHLj"
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
