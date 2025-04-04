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
    "46NVYwiP3rFzhZpjApCUwuSYPH7PLUSYJHTzuptmXqgBWmQnFsEkQhiTKcTQPPmBbzHsxLgTKqtTBxnJi3rvZWYK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hDMj1Hv1reeXQq75ScBdKZVn11q5BjRWkagftLHGA6dN4BzCfLtCTNgKzPh59h6FkD9dq6F3pfAcenUeDxZe8j5",
  "key1": "2jrejbQ9uYPpHEbqPoBsrjQKvhKu6odNPaKpotJxJxUdsgsZncUZjr2yo3Z76grXzGVVAigy8FF6oUbPJpBQ8Xbp",
  "key2": "64GyMqXFBKv9gztfHp9rcjdMMysLcGTT9JnhP1VM8NZ6jbjcydGKCivD7HrMYyZzobU7bFKdGbiNYgCeEGJzSXmG",
  "key3": "Tye7895sTNefcezERRqkuEUaEJtpdYejihYT2ErkrkABTZMEwrX7uKE3vx8MsTkLoZFpzAzg4b6qeti6yvWyJF9",
  "key4": "2cPC4DKzyysqrZqRyNg6bfCo9Z3vnVyP5vrgawDBfwLkoMJWvEt8yGVUvr6jBzpCit2uVCQEVi1nKoMGdipxbrjS",
  "key5": "3oTuiePGd31zUzqpwKEYPWYNjbNPMi1WG1Tmm2wB3QYexjdGwLJpGXxwjPNGdraZaNU3ySWpfZP8hrzNEroDPQzC",
  "key6": "2zDTskFD9SjeHzcjfWzCoPA61UFvyMNVjB9jVkDptRvLozMEo7VJ5C1Ay3T1dRBFePdi3X4iYMVcsx7vewGPK77W",
  "key7": "2Cq1FXF4vdVMrND1F9MeZi3EoKPHUBVWrMYBHuHgJudEUn2EqxpUnsq2AQtMcKn6eSEHtwmmizAtNch6qkYD4F35",
  "key8": "61E6BzpvTQqJKiPRod2nP5n1TUJh7xWDixkfJ9yQqJSii1593bQPHWV54ah5ZS3LWbwA6WHCHXUM8zMxULBH956W",
  "key9": "3BkY8LcxhfPCem155uceNjLzdXt6pPxuJbaSbPsWVMDnwxJEvguQCQ3TLDZ3cSdPjWANsgc3c6X5LCYNuYcFSGRT",
  "key10": "5gEK82QkDwCr7z3FHKWFdmvhAMHbwqp2Jo1ppF8jgNE7H3uMmA8hfpSHEsuC44At6eXJ5H2X42wU3p3GEnZixV19",
  "key11": "Z5c5dSJoBJqY9JGqUCNRDWbRptSfGkx9XFDdJ5BPgn3f9HCJucWzxo1EaUe59msZKfCwXCeBe9TfHnWCFuYhayX",
  "key12": "3UDK7B4uPSwRPesTVbNscFfAP2uRAPMgHBLkpQKc66x8ZqaQxckUWJfmz8tu4v3CEDdsSFTs29QEg9z8wWeqbUvB",
  "key13": "y1nD5bQWhfXRf2RgAvwKyHtiAfNgVV5xMok6VfuSUoEhJtReRJVYXyFAFoiQ7braXWJuFquZ8CCFBdQ3Pmyr3Ae",
  "key14": "3njzfkTn226VKKZcq2VN3kJg71DaADDSxG4DBdaURjzTpqncTvkAhbLzf47xcbFPWudxUEZheKAigtFiG7jPfay7",
  "key15": "3G7sWziMzokcxW8bqWY1jpdJobuov4u3fqs38AeSyqk88hKMEVytSF8kd2BMmA9Sfex6afGgYyjtrjioVSkF71DH",
  "key16": "5287CkQf28h9n66ibyniogB4GZMuLC5QHKL7cQLfW79j95MWASMxXDbFdoWp2ZQ733196EfLSbCsikY9xqRQNTtz",
  "key17": "5pNU3pByLfrs9hsFaejTdLCptFPQhFxNz2Q1fJfS9CjukuXTqbTZiewBTJ3CV6VFvGBAiHdKPDDHr4YxNRSBwNXg",
  "key18": "ExsEXhKxgyDJwRSsHB5PZn6Vkgj7VkePy4GbTWeoiH3hGwNYotfA9RGtTtyVpdpe99WkM8Dp2zhF6NfRESgK12b",
  "key19": "66M8w2iv6FVGP7Ba1zHn73Z5Z1pCKTas9VgCPSAdV5pefbQWCjbiSn6KA7bWNKw9VVcENJbRDWxUjLAMZbMxnuLj",
  "key20": "2b8dCacfo6NDWkw3QLt1vzG9a1ttUHi1ZAzVXoFk1WPPPZMkgKPWuR11FHGxVHt9DyNNkUUh41r1gLckbeXsoqm7",
  "key21": "8YY1DDW1Q7CUDox6DsMBVNr3fhprM122UsEY3ZBZ9itB26w99vrMTEqWx7u8AeF7UbeieNwSP2LDs7qyYBQZADR",
  "key22": "5WURdY32GkjrLXWpJhm1DV6pzME1hbeBvC9EmCnnAk4eUhLJa7fYKc74P1cirt9Ch5BzQ65onMPWbeNPUygbyew6",
  "key23": "42HajXB9vx1LZf4u944KKDEKwVv8RUjr2cffwFnx2YGS59sCjiz7ydXncFa95gQQPQHmzFaA8J5omDAEvfuJxQcU",
  "key24": "14dEPAAJGNwQDASTdryGNDeZ72df4sGm65sQF3sETT7baapbX59UyH1SQccbAToqhVPSbGqLv5givN9kmAAJFfq",
  "key25": "5eC8ahnSrMUEwCj2ioqAQtYuGdpgaXcbrBkXVm7vaRcHx3MTqFFPoecUBsVVLpa5QRdQQyFSAaBRXt2k9mZUVmUF",
  "key26": "5BNu9BdAV9BZHD8edenvoNbVx6y8sJUMoD8weuLLrKcdXCKUkYRxQCZ6KHFbDN1KQBQDSktzayMHKRHaavsL2wGt",
  "key27": "RyqepuNdjGZRHH4zSk7hDFyA5kmkYv4Vg3nXjhZHGvDcuqqHqXXD4AJaE3sMTXk1r7rNKodfTXUDnvSJnAwUKBL",
  "key28": "3Kk67zWwP7dzFKkVHfZJC4Jn5aEwNmTAKqHSdYy1DpHXSMiJSe2HMJwA1xDu92Q7wSYfAG86U9Ka3BzVp5259GE6",
  "key29": "4zm2dodNGgP3qKiAwVGNErt32XfgSQT5181pTtikwwTZfq7VjiZMUZp8LNdnZZT3xsZ531DnpavJWcNmUxkp4cbP",
  "key30": "3ahYbgsVqm46Po1SpSQA7SjBp6nQCGFaDxLYdx1m4fDn8Wj2G1N8NKj7cGsTKNzwmLJLjHypFsvoA6i9k6wx7Tvs",
  "key31": "4R3VF1Q6j2QSdmHJGmP1om7cmVeGsHt85QtsPh9VSVFt418xnF1gvCZDLPp5fRgLHWxaNpsphrVJfp3LDphpzxNG",
  "key32": "4RnypboSVp7JgLW4G1LNERNwJ2gx9BZ5dnVxmtTi69oousZN4zgSumrTnUNa7ZJnLFc5M8Ws1W7DARBesGqdQuVR",
  "key33": "4DTc6vdcvfjB6Tp9nfdYoYjPCLPhFKzc1gZqYhxReF8jKvUQaWHG6BdUVctEDRjA1YBjWVsUhRxyXYxksd4gAS79",
  "key34": "5U9Dzw2CWiwrT68At7m7BuCSDJBh3TKPPD35EYV18rxoPAuWXxCPSwaRWYZnzrqxZe2jFqvtbda3it8NeMGedgYT",
  "key35": "p99cHYdDJpnZu7x9R2kX6jjFkMveDGw2ikgwQU1muBxNSRUtuN6sufgxDNMUrRwSHnW49V8mKAkRnXm3H5xX3tE",
  "key36": "2ZcxyrpDVenRBev95yBRCeVJmHNfRMsrJDqagzBnEsRc1UoM8rMoW7BSaVaKhQ5DkxgcSEfUNRPNNstrWcgsusqb",
  "key37": "vfgYDR12fLZAB7Hqgurb2aHBTntkpeK7NPQLaGgmNLCADHCrhRA4FDVfz6om2pJBHXHxm5nw7idVArmphYXgQ7F",
  "key38": "ZBZca8xCQPsfz9oQxejnreExAj5YaqEWZivwvBcHM64dwBsFBSskchf7ZtGE1mKcZJkBgyq58qTSzFmdU7KLx32",
  "key39": "4xsS8MqrvZc2bhC2nYc7AWW3MA462Gny9DznmMU9nNDGCp8gJ4u8gm2qUPEHibdm91Q4hERzV7wpDSYTkHs6pCEH",
  "key40": "5tJX5yZe6A4JpZxgxgmZz6pehumLwVikkR9GcEVT4EeRHDLqejNTWUmuTaRzdcwX9fTJJ1qwU2cpDH7A5yduTsfK",
  "key41": "4jcd8PusMVwFtQcqJ7nKRMD5Gbt4R6cXnQKRjPUmBRsdzW3zqNqNFnsJ3C4fRGHH9LxXArbhnRNvbSsk988KfyPs"
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
