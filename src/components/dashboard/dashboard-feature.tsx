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
    "XN3YRDxsaSZVC3ZFT5wRg2PPBSSFexjFYw71mjPdBT3Twb6dMtZ8MzwSiMxVrnL9Hmk482KCS3djM3vVQyZK5Rg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fo7q1mv2fqPTyTbrR6cLa58GKrmHKFGsA3E21bHoQKZJNDaoUgXceQ6NSqASe4saGpgPiLy8onJw4wscXXcGJTH",
  "key1": "5MzBJk9NGkJ2k5JxRzntyNFEj6xaiXJWccqVZqjC8gTrCFT9Dmm7rz5fWQsYxBhufWKxMU1NwfBPmKMAXHVfoeoJ",
  "key2": "2NSYgVVmtHX8Pyi8TAmd1iB7uZR8eWAQuWk5aWFcugMrR3Cdt7srHy5F14fNjokzFkVNVp5YsgU2JZUmbAYpMaFB",
  "key3": "2owPhPZSYkEJbGR7s7Cqcsy4ipW8cZMHrHU2bqC9hVzBwv7KZykaf92cgqiCifMTyqYE7UhAsJVu2f3qrMJVcEvh",
  "key4": "5v3h8jT4UFqLpgYKBdJAi9GoogHSa8vXwkYCbESb54qYa7rQutDLtE84HdZLMFyJWATTcgaXqj965PccDryuGhX9",
  "key5": "hGf5iQtKYcyXD4kevkkZFS8ek4jkbpNCJL6X1f93V3g3APRJUr5CT7EM4z3nLhCakiUJkhAZvCj13A4xcSJkJHQ",
  "key6": "2Hr39Gx6EYePekkoysbmWbmtatBTWiQ7GgWXbyxWJYDavRK7CkBWwwHKGHJGDpPFZRBVkR6UvpMBoDJJgzy4Y9ST",
  "key7": "43mp2MHph54ioSSSKvGd59GwsJuDHprRJT6ECNnpqQBbi6VMs18djd5fogdX1vZDGHZ3u78K7PPToRj5MJNScr8m",
  "key8": "2DWF9jVFwZwNUwpN2bJqVCswLrRKVQyNhc16rV2drJsrcuaxA6Q2FqjwEWpV4tB7cHQb1LxxuhTQ7rQKdwTcLfMN",
  "key9": "4HdhCm9bF3MJpmtbxZMjLhy85HXm7Qqm95rN1YLE1XgnTp4qU5pKwvr3rsgnM8tU3mRB4R2zjRPV1X3BRvmcsheo",
  "key10": "c76DQTQBpP6AiNLJmZdbBTJbyxRGfgHCxh1PdXDtYyjrJmHhaErmVWhT4HTuipLSohCSMb7NicePT7YLqsjRyjA",
  "key11": "3WdvmG7evoGFDn7EwFjT4RtaDey1tYv6hDXtEhZdxvkfw9Ggc3ijXMxZTdk5wAivmPjHTyngAPMEqYWoWKKowBCS",
  "key12": "641YQzVsQswqDUeYU77k8dAauCzLtw5SkPNPm9FPAFHbmcbjgjgVsUNdZ6k8tJszhQJgJ4YdgbLtKmAd62EH6ydA",
  "key13": "2hp8cVGX4XdTwQke9sQJ2iKCSqPzLBpy7wNGyyqpoHiKAMmapStahP6FxKKGGmDwxX3K9ChbDVKY2yW6Yaj63MXH",
  "key14": "3GpYuADgnUY4mc6NXTaZZTPREvfSrfCpnXPj3S3jCACbHfbSZyLkTff1gwY6iNJC1HZWzYbgyytyxmdGAoP83CGf",
  "key15": "4LB8jY5Apwzbr7zxCpDtfyKZLZYLhQcz8tuwGPL27bXQodKHpmzWyS7SJjce2dgjx6dNPLAQJn4KG151xTeWWWwt",
  "key16": "2PhovAoXdzpDZFkeJUHtykLZuTWMcjdxusTmZNu95XAak857xV8Je71oKJvQSATY28n2g6GVj4qpwqBJAN1pdW7c",
  "key17": "trrJd62QMjMfCPUAw2Ugcae2N2tJwvaz1GH2Q7uX3wqbnXR97WyibyKMKkNFwZQM54GpJNFs5BNCq45B3gExGnu",
  "key18": "3e17zCSXzfrQC8GF7vYGBfhHE9SXfCLUW8ofx2ML8Y8sPu7A5Tn5gDwEyFRm3eAYjcmsx4hKMXfwqgDnSFZfNF8e",
  "key19": "R8JATb4eJLMVd8ziCdqyjv5L7AX7DSD1K6N2K4wQfyFuZDGHWq9Nx8WCKgUtMduciUmFtQciHd8MCqvtXSCZk7n",
  "key20": "4QEuM7RZEweMPVsiHvLsVB9kp1YFAh9TzYokLYNxzoTrw1aFg4g67FibcP2m2YPxSjs1iU5WauVaAHopiSceqFtM",
  "key21": "LpyPFcwqoz3vL3nuxJdKLPvCpAdwhswW8swqDTa2PFum11c93ptbm9XeYUdu5wzUCP9RvAHqdxwQRurH8Az2UV6",
  "key22": "dtVdQ6RTu1yhjnVF2f8TGyRMhfRbWzEi1upZyvNrAFL9sozdrMzmP3bj3o1m9irECBeyLNwjqvfLEJrJnoxut39",
  "key23": "ze3ts5x4EK4iMEaCWbfbikMxG98jkiKNCoEdQHzUhhoec6i9mCrjYCztwPq2p2c9xKkcXdvxewuzyN6Kv7YW8Rq",
  "key24": "4Xjx7ApqJmTkW367BEVqF5mEYujQLLb7qcKQhgiZffE6tqctgn1gfKyaQe7wT2E5CWab2jcNg818gPcRrjALuinb",
  "key25": "5rrXP7Meeg1cKXnMNdccE5ttH174uvp1xJDZdHK3qiXxwc8Hh8Q6xwYuQt5rfqqf7Ad1AkjaGfb9HofTmScMNjNc",
  "key26": "5BZLuQc8UTS4YndMVHAfL6E46L1fajfdX285itX9U65HH8tG6jXeSqSsvpQm8Ee5vUndE8jsesKZoYqvnaqQHDEL",
  "key27": "Mz2M4nRdJqcwSDd4kiQzxcqggRRJBsDBHWkKqyCgNi6AhJxF64DKjyBVLvgY8oaQqsYrc5zu5i3x2BRpQPqyDjK",
  "key28": "63gadeFb3jRPtMdWYqxRJakrkjEr4uPQbmJqwy3919vYvm28G2KHV416U3VjR1ybVnmTQ7he5GY7yp8mUw26awi5",
  "key29": "s9C85z6LooG2cH9gnWKxyXcHFQqGD3sDp9zmUGhSooxJdFbvkJTdTqH5yT4b168xyxffpCpnSFbfK2dbGm7ctEm",
  "key30": "5nq4VwDdUAAEqaNXUBqKmvejYdWpAKtJPQWJtaB5bP9F8Yb8tMppc1C66xaBUDAHj9wn1gAP1zPRbbNVtwQpwgjS",
  "key31": "5t52qH7pExBKbXgxeJGZuvzEcmTbhPS1562gTH7ggQZQtkjsc69nHzMzXBGcwCyBGhvbUVf8SHHuTmnXnr5kDcwd",
  "key32": "5VvgRxz7hGqHnb7ZPnNqXScogwUozb4TuuqEsTaUNsEoxVshPv9w3VUEt8qr664gX8kgX7ZpmPEw3ZVcyqUk9Fye",
  "key33": "49F6CEBzsKt6n5pPAyjiuw8NQfJNwAV2hUQx8eZ5cBCwo81nsBGxoqg8H3HCP5wF2xHNwFeXgoY8Tg3KdVEbGb9o",
  "key34": "4AgTLd5ZPx8xkM9ZtEZGehUjQapDv79KhXTLG1TfHUz6nEcHPsBnfpV96JNm3xiAvPNfQ8LxeNsiGPy6ze1kqgeS",
  "key35": "4znjPqE9yiQuy5xHYUR8jUmjeNwAbp5KNHmzzPQ6x5hkt7JGx2KnVtBdtESWZBF9tRDpTaR8Ys6JBpSZFFh2ir24",
  "key36": "swqmaq7nqUNxubBKyCujCFbL43kC9EEZUrPTshD14hrFqS7FkzRHCbdGPwnYNqwroSZunfE5sHRrQXbp5t9k1FV",
  "key37": "8dL1k2JN9oeKKpa9akkbA5w6PLp6z8UAYw4jWoULqwY5yJuGFgWsn2sSkYzEw3B9sv5kFxt3KCzQDPY33xD278H",
  "key38": "3LH258x4RJP849QYhBNrXa7SCp71pwZMhYkfHhqjHGtpiDXtqi8AFYwLsz7jhtwvfFjTB4X4YWbB2sr6zrKybyQQ",
  "key39": "xPy5zQ5qNiQp7JyG5hboArxkAzDNe8YmxUJ7KswDD5iFtNTRsMtTLVPhmeCuh4S8nPc2AoNpTpXophg5t4Q4da8"
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
