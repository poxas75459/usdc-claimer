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
    "GNC6yGmYNZ116nSN8YFA86asKZ6bHJH92PvYMajMWC5xgima9BTrvgiM6gWpfHMASHBESmS1LzxEhowjEHyuRq3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QbiQCbXDAZgmKtfQFeHzCdUxmChvFsw38iNBjsYABnTpRjqJL6fGGjjodJZkw6QjzLApde35T8JG8gtB5NxYVaT",
  "key1": "d7q8WLpUrxZ1sMqjbc3aNAKr3oHPrYHFWdqEgWfebdhEqaHM1LqZqv7tDNHvGfwGBGzbfJnqnwrU1v6TeU6gMVT",
  "key2": "7bwAmnphu3eViDZWxsCQu8NCbvPR1mb1S4badBvHxJmd1Dgbt6yiTSHyDaYXwz4AuiFVshZAD5LtHanANf51TZk",
  "key3": "2Qtk85DDhyY8Sey7TCSxggyeJ1QXWhEkdnDV8RqPgwErRkREhGeNUxK6J6v8fQDeMVSwoadTau3cAbnfXLAgoBdu",
  "key4": "4djjRT8wKiacZfLhbgUBQVGXXqWAgxuvZ5udH1iRNHpoXoTJFGC2J7wMeS6uTQQBhGjze8P3uDjEcfYmqX2rBy7J",
  "key5": "23ZCMnp6apzU9bn3KDuKq5tfiyYp3yEd47ECTHMxwYCJ4JdAip347WtU6zWGVY9VYcsS9qTiXEeYgvuAN2EUoJKr",
  "key6": "5dhZEz4vfkXzt39Emz8FBTejnSqYBfpqv5m6WoSuTYacpQiwWYoYo3CHD4EM9L2J6A7qw7MnN4puZdoiYgYyWxC3",
  "key7": "5T5EKmG5RvXdA9LgF1z7efC1BjRrH4BTAmpK9aM4isZCo6eU7a3rd6wcpBfskissHbk9NNxPKnekibVuV3vFvzQ3",
  "key8": "5z5NWWLodsp4XY5Mt4hCtdFsLkiemVYe8M4p1QodxM1DHe6vfdCQTtSY88CFqQgid8qSDW7stoszfT6oD7miRCgi",
  "key9": "5J839fzcsqkmVNBGiQikCaYta9EJeYrHUAVgqJYkLUteKeS5CHAHGPgsjDrTu4eY72irmnqyYVryThNVipaKP6VY",
  "key10": "4HWnNyZMNuFDsC6eUx5v6KvHsG1U47eHUApgEHo1rAuZfKCDKWCLKASVFi5xMY84wqeDEHEyStBDgq2YGh8erZmR",
  "key11": "29yZqnVh4xijF4n8ht79f8PxmJEmiQ3n1nX9nLJMKLWpJBoK2aMto5p9qcYLXFZ2oFEH2iAQ9CDG4ygywFAcqMR5",
  "key12": "5dUYLj5XFa2MFfCqQnFoDTCKj5rA17CV14HrTYBsizEisT9nvy6CuJPvU7jwKegN27adJdDEehxbvRCS2f2EZctw",
  "key13": "4NsaobnKQ4buau8hAWvRYJFADkoL5PmqLCq1LhYFbM87W8UNvFfEtBigEYSGwuFHJvepMCAME16sysrh2ZYjWuRV",
  "key14": "Qkq1at4TSfqAqj7wAbXXhPHJ3hukph3B3L49DbCVAUspAMWAKoXKGv7ViSYutAYNJmPFG7gqK6gg9af95C5eL4a",
  "key15": "2B5GbVtyn3sB5jcpNrSgfgmZBAqRbNXQ881CnfqCAXe4sABhadk12JKUHpmnw1vLwJsQStzDvb75A54SLxYEpJPb",
  "key16": "5yK2V6eS2TWZGDeCuyZBfWof689rMqvMc62qK8aB3ddjzvgPby6bgcASKJxTq5TkrexTfvZS6jbthnoNuS82F1XT",
  "key17": "24CE9ZbhN8kh7dFaMb12LdzJsuNGrDz8HeWCx6DE2ZoKr6MNvZ3ab4pZ4X1YAz38vAJFxHN2xeZqDA43HsBSypzk",
  "key18": "q6EZFeYWwMLSK3ridjFixg7YFfxwk7AtFnchhZKqJCpW1VSiLnkDLH3qjZt9ANTHbEjeVrfqwAsyiFSsjdEA8Ej",
  "key19": "2VdERtQxtXepaemBiyTr8USAxJCVb9pVWTcTYGNpHepbCyqLATmqMeMWZSAp7wRnufqiAstuSFexFJ88z1vr1Xym",
  "key20": "2Hx89rR7CoYfTxnVF6ShnkntUpzWigBwPsPshARzj5QjypnJCUCKwc8vEsHa9AMYo2jXngvg4Bkt4Kr4kLuiYoBi",
  "key21": "oF2MhaU6JrLSYiHWQosXjyZB9Pu29uXf6Dob3iB2cpjurNhyyXSjyTHZW4pbdG4qcRyDPmkt4bKBsz9aL92fHfC",
  "key22": "3WB9SjXqcdyR7THPepwwffkHbmmitzUqrqhN3hMSLRZULmgNG1hKDouhQTeadamVCNGGr2qvd2cmcqD4SbN8F79W",
  "key23": "3kWiu39wBYy8bFpDq5HJHMuKKxGJoy1X94kBwVxsyigoEtejr3rq48vBvhPRLmhEn1dyHUt5GsdK6NmPdKhcL6vF",
  "key24": "56pDHPqT9fkhjGnqLztcmGDeLh6X8XMSELLDrCFCrD37v7VUkVBAFBhQcLehYdWpqaPHaMNA3XnTYtZikZCQad7W",
  "key25": "25a5zfiR9KjgHTTQJ6xjHXtQER82zrNZSxcxbhvvZ7cHd4QKHd3TBJ4UJ2SQhfou6cbvoEsQf98HYkmZienBaPN6",
  "key26": "4kFpU5k6HFQZQffjfZPiXyjLuK8jpVJ6BYvAQbdpp3ohmvMZeb9Efc4HrdHad6pXUqZuJA9uD6n55Aqw5JHM2LxV",
  "key27": "2k6A1dZ1ndvL2ku8H6ftYyFACzdW5axu7hGYYJNF7RwCknY2mVzURt8EmnBVQMGRbeEBwWqXU8zfyYN4vLwvqQGd",
  "key28": "58bfTkFMhSV5RwQE8n9zNJPe9D9hvcVisjPuGL9TdLqdycgL8ZmkorTDQB7V6bNjYfMAakmP8fYNX7GE4akV7RkL",
  "key29": "5vUiN6RyoPK6k29BoLBxJyJorvyqY6D83743wzifDNnMX6dJkwbQXjNQMd2A1Lmuq98xWj94nnev1DwQHdPPrQhU",
  "key30": "2pKUKpJzM2kfTeqKHJcR8X4MjxQm6D8qLpscRELWJ36YG65hQaEJrKmL8TNexUZdspwEv8V9qN9ynV3Pk8m1xD43",
  "key31": "25xhDJfdxrrjyTybyhckEigPX7DeMx9PCHHNjFD3Go9dL9sYXgHcMABNs9G4F8Ehhjo93FU5Zg1cBbxfyF3ua5Xx",
  "key32": "5mkKcxGuASECdpZfDcUmdvxMePkpmik6qtAtvb4EcTt6Qbt7sZ18omefc9TQPJGLKNBPapWbmkVhQoJZDtQjkHjs",
  "key33": "6pvToLu3U5XYEZqWxDSNimeiL7xuHhdoZgD3ALZky4AEN72QypLAUw5yHGAjjPFhPHkRo3bJFbxcfSJcxehLan2",
  "key34": "5C8dtqbXkHd1EwqLtufrwDDv16hsdDJ8APRY1bQDdxmXSSfs4SCtTdRaVwZxnrmb1ouYiqR84TmofR3cgaYqytSC",
  "key35": "4XmjVhsgpGDY8N8eKssRxUWeLvAhfa5RudPzSUeybARmZGiKBubycsnYX8CjSwLBHfMagUfsgeyNokDkso2s3x9",
  "key36": "5a6jDCGTjiWjv2H74ngtUQ65pkfsAYZNJqhCHwqun36yocWq8QkDEurwvKEyGh7HwfZ1by9m4mmszGNUGugmkVUd",
  "key37": "5aQYR4DJ2TQrE1Tabg9rokL1mhm7W8oVAZnkQtwbWxj7UaCksgPt132n5cJfGcLjx6fWSCgehGqUbvwe4FiG9LVV",
  "key38": "4VfRz5Jf8Lu1ZYg4qRCd4CqmXCqhqNfUXzududoYuprPUsjaEX9rHrL8mhAijjuLRDJeKP8A9eu1ikVBZkty28Df",
  "key39": "EvLedREND2Cp3xgar3VXz61625KvUrLayyzpfYX1XuKvhoVwVr89efnJovXPYujpwLSC4HG1sPmkkPRihKjJ9yG",
  "key40": "3xxNRD6GZBGTvi1hcQGL2LhrzaQdxWsiuC3e9JnphQ1wji61sTRCQhPbFLHmHrSgWCa4kQ28em3B1459gK4iprK7",
  "key41": "5snsswsSswojUFUVBEwV3T2Cvf5UCcr3g1ZHWY7qaJGNVsMNh5v3LUaY75KMirXPWQCQkvWK6YR8aJQwuna8cJnd",
  "key42": "5ZwiogK43wC42PAibgL3tX9GKxeyqJDJRUJxvNcLN22nXEdN88AUqGvyiwRMhVaqnHAcG8DYjkN4La5n7MPpvSzD",
  "key43": "5tvhk84LqVqmZLRM9yfB6vBbWxfQ8kpRisFhB4UtB7dfiF5n2kRdWrs1Pcf9fvVZneAnqhfyCTgC8p33yrUfodjB",
  "key44": "3FSepb38wxFzL1vYjuL1ZYWvdeUDAt9vukyUSmTsCdkJDkDV3nSbnGr6VsL7ozWrFTNiagvWRNezDwNUBtoEdwPx",
  "key45": "5v8AEZgJ1j2ZfiHyWwxzyLmecodBHQntQedKXhTtFk4ykq4bq6L3nGQuu5capVhUEWb8998mw68midvxpG4JEGfA",
  "key46": "2g6Ddu8J3gHRQn76ibMxHAkVYcXusw5oAsBnMsjHeuh7Dfg2NARv2BPp5cnqWA25z5QFPLAxDFXLMmtxKM1padmD",
  "key47": "62xzebSHYifZZWPgHnMUEw131n5capAp4MbR5VQLdfd1bFigoRoCCkZFzyNkLkPSnAhBJCM2tnnbRDmngr66pjkk"
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
