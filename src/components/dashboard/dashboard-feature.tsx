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
    "M6p1E4vuhW4mypjwc1y1k96DjwJzeEBN9S8iGrJcjC3iCPjUUrfq1giDcdkeYvWQrtdvSY3puHmYXnS39y8yXWB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4agPudF56y8it6hYX8nsF1MMjBeTKsywsho8KZjdWjcFFzSpHzU1moEpVx9dj7VqxgdTLv84as4iBSNVGweR4kRH",
  "key1": "5bCpXtxazHhY6xyHFR3WtSQdJfVrsUJJLDEZ6JqH9QKNY4r2NppYkXVeHCGVUEGg1DYGkjnuWSqxFCpqhfEAdfcp",
  "key2": "39joDi1XiQXW6NM6Z7VYKa5N6DHigbqTjqkyP5iJLqhjG3Jyg1DpxRTVXWD3NgVrKtWZzYBUTCr8Bv5CwLoK4EWE",
  "key3": "3q4MtskDZV3fi2A7Bnhj4GaLn58xNrMasYRaR9BPSLGe1G9BYrLRtDu7WvXCLnjrHzu9Nz8FWmQAQ3CprZgoYBGj",
  "key4": "3qjqtVk6di3oCeqM2Gw94PE47ZEHT9xZkqE93zGTyQH9ptTTghhx1iUAprnqGeeASMFt3wgVpHwttWZtXrUTu1Mg",
  "key5": "xVCJ6QdDxREJaNtNw38Z7k1zEEP2BpVjjMVaiRPMxc2Rvt9MnyJnN4y76DGNDqfg4MBp2C6rny3gL8tFqvNG5de",
  "key6": "4qUCQbhjhSogdVfvLH4cgyo2P28JVJNmV5cyk8yzYYFYN7t9dQ4JbNeCgKHb6tggQijf9jHiYoLGpZ4mVPEDi45T",
  "key7": "yhRAKvt5S7qHojR34iR5TdGojoWo8nhXoV4cz5niY3yk7CtVw4pnLsBUui64Gh1SkgcHZ2fR6RV8bi9tmm7BmiV",
  "key8": "2JRCzeHiU1HhcoNf8aKwLLz9LcrXUPPkFzoNzAdaDSP1SPU2tFdi2pWSV3xuo4bt5oZSGFJjAskue4jQjm81jCYj",
  "key9": "2qg25JMXUr7hLujtzQjh6WJRcVih4xkqxaMGCjnydknmQQANiK2CvaFW1ujCp2MPLcx4sriSZaNvLxHbuMqCaHzw",
  "key10": "3nYjBxvKLYqQTj7aR24eFSnEg935c8XWzK6234ekKvij62oxesvsfsrSRiBU9Zqgk3EFz8ruBgPgmy4JKusxtTLw",
  "key11": "3Azy1M69v9w9eRP5arfzABbFYJ7T7TuFWtCGmnKXmZK7AdQ3mYmrLn89HaPeduuX6Qs7sYXiGoyHkxvK6TwfvT3Q",
  "key12": "3GiGR6i5gi2sSn9f8H1b6gZ4USkcEdex28xCC3RksC4gC4bfEdqbBQU79B7iGEWSdyQvhMRLG56Vunjfqur6yXMK",
  "key13": "2nP9wcERxxj22dnGUWpcXe517nD547PQVARND6L1SdbyfzW3dR5fwwRw2yGoWZZnCW6yo6YTz6wSgw9jt5VdCkRx",
  "key14": "r1KZpFdsbSpjaR2NUxk7jbneryKsbVQvh3pdA4z8Ssmc69eEkPjs7wdyhzfkpvgZGE8Rdw3V7fXNK9GgaaNouEp",
  "key15": "xzyBJePPVQFxfE58teKBV4wyPovexs471GQf8STSBKZKH9kGmAfBTsJPVK5gaB34r1KLHfLjxyS3KGAJKnMrD9y",
  "key16": "3E3VxMNrcT6YwFAy6gM2RY8JaK3y5QwJMbfJMVfzcxDneEjp8tbrDJSzUuhcNMLonCpEv3fWMNyuv67M5L7gVQPq",
  "key17": "5D7RhkSG5JFScUYfL15HyVPktgBreu93cLcDcuEwgTDaoQZ7bT3HAHJXPPQyn8jKpT9mfcvEdvZxWyhaqNfFpEFC",
  "key18": "3nL7aBwv9LyzKBxnLhyE67JxaqfXDG8BDRZkKc8yxyy2FnXUw552XUFh368SmbS6VzaQyXoANVqvB49UFrG6BVzS",
  "key19": "2UYASDeghnrAvhSoYCJE7JtKD13DYDq5nixwNWpRgZwZCdJmngHYF4mCnwTPsN6Jgwiqi4JZPVJDWGV874CCMDTi",
  "key20": "3EYc5bppdgiES9dJuHaRBTvmvj5vXG3Fn5PG7teU13XBR2xFjtFPuhaMwqvzUz9qdpPgtSrizsYQHLoMTmv3hJGH",
  "key21": "3f99DRREVsYQGEq7xTSHVcB4aaaeoCxXGj2V3Hb7j8gNe6BELLgzyPZvLSMkVU8xxqiwkxWCptcwyHjBsFUrNyPz",
  "key22": "3NXGfSwR8qsxu5jijANe1TAgvF1UFyWbtnz25QwCoffMa4B6KAWZ3C515EgFqnPL4VNUag49wHmfi1hBcC5thEdX",
  "key23": "51FwuxkeanXPRnBHz89P7PgJZMHPiSgKB9sj8esEXCGfYEg7w6WbP7oDQRGyPACvndw77f6BU2bhE57nm4LAayeW",
  "key24": "4H2qxbrANUywnNYPkPXpqfbYDZ1CHjE6MJ2peyHQ2qfURm7YzNxeqJu5AvHTzm6XPgagpiZ2Foe4e3qFmwBVHDLa",
  "key25": "4vpyHkWLjcs78QsL3LxpoenaESdVMv5fvHX6Lc7CfXW5tEsjmMFm9MV4dwJb6vLoM1ZbpgnckAe4yZr16ZxHrg9T",
  "key26": "ei7ZATxq2uno8SWvhMSTrYrNgXmiDVReQRQjJXJwWfnkEzyxRVXCrkEpu7NaMXRS7wN8xUFoFKTzvdupsCtrbaT",
  "key27": "2tD46VsWd7M37bDMTSuoNT4VkvWxizaxpgrtfNpFb9iNfTMNZ547bz1Kxmx7hWGXPzaX7tueVjPK4h12BWoqfWGZ"
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
