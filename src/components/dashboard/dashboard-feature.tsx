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
    "2u2EkMExTjdUzXyjbwMPi651Pkkqo8f5rYLvwcJuYP7QTZSFHenmYDx9nvtAoZCMzeHvqoU3gecCBU25DwddHjNq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m4fAR5FypxJa91F9hYu3YHkQ4MLv8cfHcgdQR5GTLRBe8zWHcuR3753bqyK5FgaojWDf9TDMHg6cQ9KTPwUw1pL",
  "key1": "3Uug2vXmFTWVouw3hLrP9nt7otdmJRT7dnaLuZ7fYKCK224LspVo6WXqZMLiypgkaBjcXnDuT4VwXJu3r245GWuK",
  "key2": "3Ni8te8oJ8Um3UUM6HbnpWj7T64Jxm6S9VnBw6ZxrsT6mv7mbKb8XLVcZn9VGafbrWoA1FEzbn2nPeyxuanEYC4m",
  "key3": "5Ca5s9KBYQsR36ZNDDCH13qv1eTdiyLZ4Sw5FzoDejgaCo4MLGbdAX32A51YES7QyxWaYxxfP7RCp6co1MwU3Bez",
  "key4": "2BFEQekarLk1XgZQAHqqcHRr5rrhYFWczhSJaBupBLTryPqJ4LHVdZPrLhGVauAfdR9S8CnhcZzidksqD1J72T9D",
  "key5": "4aWo2crDNA9zRYAYro5hoy4oKx3vEVd1NfV9EebZRokBcS1qdRVSYR8LPkXcBbSzy6S77LwCXp4qWcmStkjC7kxV",
  "key6": "56jCcDKuxxLQ1Mi9K5kTuXPJ739btsaHSW5fx2RmDrnkburipQA7UVqQumakmUeAjdXdHbvJd4w1ATAmYarfiGsS",
  "key7": "3QWGiDG7UG8L49Ru5Ny4etnCNywmHNqWHNrGg6Nh8bzkz7n5PXhgcgdvGuCNgAydUZJdoVkZNvmFWKuVXSoEj8By",
  "key8": "3LjXwUGJNL9jYVrPRUt7cJAfyyirPqa8nPg6TVdsnF6WS41zWJBZaU5RAUnDLmSCuVp7JbQAmNy3y9vSca1pTZ1b",
  "key9": "5AkZGrHPRaftSepXAuduEhoJFtuA9s7XfRWayLtuX99E1n4oCTj8JXCG2ntpp1NXaTXFeybHEpN5ZVvaaaXQt6Sy",
  "key10": "bt7zoRobkxR1D57A4WLc3TaaVWKRdjFWHi6FMx5dupBWt3h3thPiEFSLbnUJNgemkHpf7JSJyzpDhg8Eqa7fPNh",
  "key11": "YxMHT7yFT9PasrZoRdVR9u9XP9ZDEwkrhtMTczLXy9nWVqDkdtQ7Jm6tZB91er6hih9TnNXJWcv9Ua5yXD9d7p5",
  "key12": "64ffUbcL8NTdUSee3LRN25SJDxu8bYcGhGrLxnEDzSQpjN8bCYdKPTZPiKpmZZmQ7ZbPgAjkpRiBLPtTy9R8pebf",
  "key13": "5HgxmeoUWyL6ce63dFbtMJ8hWVeCTBFWvSjSUkPYcqJ59hiwJ8paW8uU1x4WiY8hyubmEAjnsgTVVNgBHCRRYWf5",
  "key14": "2UwdqRE9vho3jvti3ibnRnumvB9WUCvVD4MKsGFqHAvSbdadVr6rGZ8bwvdeprDpfboPEfsEWCMJ7k3gsk1qJdH",
  "key15": "2wH2Z3cD8dNF6eT3vqmyR5T66WCSTeQXHnBdV9bEo4CSXW61RoVecwoL7LmzW5wMDhwveMCR3tntjXWvJXgwVVRR",
  "key16": "4Ai8My4t8d26cptrP38QBe5LiWg9dCuMbkw9onnDh27QguNTfWfiDfkpTCq9xGQQeNcLAhJ1sShkanuPaQXwmfKY",
  "key17": "5tGFteqqJzJzc33fN5E9jgZaccVQkJw5mAxGHkTx7BJP7LzXkvtTTqt8Q9EYkymQbwXhGRUnhE2eZ8y2Rg7dwbv4",
  "key18": "57wJAGa8vaCqgkxogFcZBaFfGP6PKzxzyi9KWTXfv98vcMcWpB7zmaYgmDmUhqtWP8JQr2S89hWXEabB6eWAgT8D",
  "key19": "3gdp9Fatf6gyfemQKexmtedQ4Q5xA9XwLJcyqqNqigNKzHumAB5T7ytymidMzPt5bz12CGrgio4e5yG1mcKCcPDv",
  "key20": "3rSDPGGkLmHmGnD9JxcfpfkxjweePbmBtvQnNvC6HULdTDJdyFsKPshH4DDFdePB9DX7hjDZKcM3zvhDCCgm2qsT",
  "key21": "4u3hiWPp9TZ5wzb54Pw3GC2FL1JoSukAZdmdp9RGPVtRqxboeZdBhA2JwNgzkJ339ZzP8DFa2tGTDXtX88CDchDe",
  "key22": "4gMVcWEociVKzcCwdNVnNn61FAgczbeSzA2RpU8XhrTfq72bZvoaJKxJbpaVBK3rCRoovnRPKCpFPjKCLfHwDrHT",
  "key23": "4EPK2afCY6a1qyhBb95wh4zqBc5MT79RCTsfty5NLDT7vUManV3SZyisxBxmiuFV9iVe9zz93bsLC9moEiiWwqBy",
  "key24": "31QyDiqAMSAL851eCct124XxVZg3GR7q82Vb8aYwYCjWuvydwX7xGYHShM6iBPp6EncgzVmBSraW9EoySqpR85o3",
  "key25": "nyjTRCzbaRpJw4LgPgbnEnajHRxt2MWv9RyZASrkFXBfokkqiKtTeRE5dPX2ZW8qiiZRuxA6Uprr86QeLPsiG7r",
  "key26": "5FFAr8D5DYcE7JvAhgRTj3szpvMxuN7pL67EzmKwSdmhZN8fL6SjjRyqMBKZekhZLYLEXfzKav83Tc69b2WmUteR",
  "key27": "44HJe12M3uYADrA62WjJAnvaome8mXZcHFS7aAdb8NKb7sAE9JgbYCkkEPt56eCEN4gt4XHzQ9BNW1wcgUmD1M4V",
  "key28": "3tLPMMaUHPH1ciPz8XwKnBAJARshWmFEJdEdTwd6Cur7CmX7j88fGy89oE5hLWBwEaygQPAGYdowTonyEUVgRZJD",
  "key29": "3koseEZNLkYgR4Z1fbJDfD62hKzCRBdtmqhbkn1T7U85JgsSN9BEy9nMVgKTRv3GMgZ9oL98pmKodnYrSHqsDC69",
  "key30": "PXDkmEFzF5DEN4KMoJA3jMsi8ZYW9rGwA8Aep4ZUZGk4fjcKvGvnEtQ1zdsyiy8ANmnzk1U1NTZ2GC4UwtBZ23A",
  "key31": "418fstttfP17DgLRpN4gJaTygpHA1MVAhgAWUvYbs8w2gygq3coqNwBw43bGQcPCYk6u67PfVEQdN27osoHMZBBW",
  "key32": "dUPQuXZYQjrACoSXoZDnJFFQ7vbfHmYm9BqgHhxMvQqzMXrdZpZH7TsymrWrySxtRzKCY6CWnYMW9LQRbb4Gbjg",
  "key33": "3i1UgufN2uJAEvehKd3z8ryxVz9mcpFWsBhRdtt1hUPWGEpWpjJkTRwiXfG3xXsLzasrAtJ8rFhbBpXyx8v4ZHh7",
  "key34": "5NfxnAykZn81FRM9VkVetSCHyhiN6vvJBSnwKPRiAMvsWr34mnrYpRMQWSyd7V5RNsxCCwYTDFyXaPwV6UMghvvQ",
  "key35": "3Y4YZVsaGrBYc8NCDrUDaU3jexnAL89gKF1BKkf2bENXkcxHcFzAnYbkSqEGJCyu9mEqK9RcBNZyNkVgMcWn21SU",
  "key36": "3M6CSWLmi4SJagyHCY1RdiZWK2ZFJyLnsdo2k74U2HSdarhawj6sm3MVoRtb6Cb9Pc2VSmgUm3vdwKqyfDcxoL1i",
  "key37": "5ydrwK81QzR8E5uLQu9mKZEtwsJPuZ6AojaV9tQEN4oTYXo9MmKuVmG2xejzyv9pdWbPSFB3bg5uCtzc5GG8RrG",
  "key38": "3HNof19ZHJY13QEGCPxy9fkCT62NHizi4QEnVuujWHTWcBFL9EPYVGoUr6YEXWgUYb7ArUjn1s19Um3YcqSM1Rp9",
  "key39": "2aW1aEx1qdaowtdGoHnvP5kDtQx6EwiJ3Cr9ZL7Gvmm7CwcxcdgJYyavzYTjnPmRWqB7A81iSWnLsTUcvUbHqbWM",
  "key40": "4ij387BJVtsdx7sq9LW1pZxuketXoLtonjnK8BCGWKgtk4pDN2yP2fukj9cAHUCzmZ34vuNRCL654RqS3EPGjwLb",
  "key41": "FFdQ4BEFT67dPpgqiA7vGA9MqA44CrPGvk6Ns5WcMiGhzDyuEhTFGKmYMHuyEL98vAfi5q6V5LzpjjjMg1M9BgL",
  "key42": "4ShUtXPbuYnX5aYwmXuTi7P8Y8D7CtdrW7FwUaq44VgRp8Ph8hpfJWj8yVzqBJ7pCvPiLmBqJTsMUv6HooMHmdST",
  "key43": "4642pxBk8aLGd26UjiYv9GFcbTPUHaj9VHBm7sREbXtHpy7hJS3C3sEkUPseKkC4CcGPw6ZNM1UQt4Dmf6DohEUq",
  "key44": "4PeviEN44Zt31uGXiyoBMzyiMn15QwdpiF1uDB889fqnWunbPjQ5u82uZQBKXYqDahxNxQ6JH4FTSz41Txy77zJ1",
  "key45": "5d4ZKiFRKXxpChQBm7VLh1btHXARJ3HrTvfv52mHKpgy5F5uTQw1jVpWjaRT4xo7LRDMN6dRtTDiq6qnwKxUPWJo",
  "key46": "5TDoQtvEA42Gjz9nNr46K1eJkGqneyvUt3eDzScfi2LXh6g8baybMJ8z4fgCcNYJCXVtfQkmVhGtdTir6sUXQSpm",
  "key47": "2Uwqnjmft8QnHMcUKfNPF67YyGSPjKXmRHcuK5xXPLBwV2jPA6G7HZtwdxkd42ActQ5KLWciMJEEqPCC14mMLvzE"
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
