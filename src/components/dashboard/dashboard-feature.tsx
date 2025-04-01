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
    "3CmTZNqh2XGQHtKU259ULxnyzgkxekUmFjTnAu26jxfGBDLN8z3AJB4msEa2vvR9WJFVEB4oRvynQEQQqbuVd6aY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KVJqdW2qN9YmoCouMxSMhHBvsoU3dHqPigyhwundUntEvp9TA1eWBLngWHfaqyWwjJgt7EL81WdxUfptdQXXExx",
  "key1": "5fBqyXT9zRS5CJFzWibdqN52Pa5jhtaaqpHMSFUQR5C4rusrbEHep6yNUbBeUzvCUvvsHFnEP2wyboehN4aXy799",
  "key2": "2p5KLh44GPieY3RACvHTbYaa8AprfZR22DSvrnT8fep5FZ2BktecwkB7vBheQoBAhrdFg3LrQ5wHQm3osGR7DRiy",
  "key3": "2jbL7NzYTawUKJaj6REvedL3ydrg5yVceWuem5FdBACtEMBqMwahm26rneVMm3JgUDQZV9Ut9oMiHCoa9o3SgZ7e",
  "key4": "3Aig3FHxZpScKFcqNDGJeCqET6fZJs3QyERWq1qAPZtbtJLbo66L93SnafJtziehY2tbXy2yb4igkWM7vtQcfUTR",
  "key5": "5ZJ1LNr4hvG9CLrPA3E2AMzWMjDibkdKYbJZopBhvAC8DCCTW8eMRVei9Z9BT5GkNYTFEQV57BWk9FtWhp53JQMV",
  "key6": "3U2iFvimR7uqj75jkVmQGMFWDcXL1tqBVyEhcVX6jYoK4Guf4vDS3faYmWXw2Grr86PqPbgQhY5tXeGkkf2AiJzm",
  "key7": "5RzisDkAeTvGJY5NXFdCveCUjELjz2KGRnoMeJewq6brwYEFrEirg85Nn7osL6PKZkwbUpVGwkUi6YzZ3sXeTpvs",
  "key8": "2H9CEi32xRZ4qVmRRbhWkoXYrdVzqvpoRDj2ZrmygCjDDagjuMemLzWXLbm2nfNXEdRfVvxpEuDfnt3ePikAbfbz",
  "key9": "3QQ8aBcSny6vhqi2YGGqTQdZj6KqdxRPrWyb6EMVoTbzUSrdDNj4vuxtkxoXvYGwVgsHkASWzfYuq2PoXpdSHgeb",
  "key10": "69CQ2G94uz1a2AdAaKVtdiXxo9Xaukvb47H3EA5KeVqACpYpE7aNojZtqVBJo3cTf4EGxdEsAMeRMNohAgXtmvM",
  "key11": "zqHJWxU4HeGBsobUDKKGAprXs5q644nqFrWbxQWJuaq7pAe3TczkUTCekR6pj2UF4GGPZNQe4iJydbgewegMj6g",
  "key12": "EpnVqDakxn7N3Xb81R51t4RjX4btZQpAJv5qccXwXp9vM5ZKWRZGz6uGNBqwgvpeZL5xUKdVWEBnPhZNCKPLmGD",
  "key13": "3bfDQ6AVkKG6DsNfxjet1Ep4VAeEDVYUdpWfCewNHuescL9Pzo8unAQBqsrmd9sTEwYeLYp47VKzpHt4biv5rzFA",
  "key14": "2eHA9vo2A76eMusXB4BFmttLijHNNhFB29jeimpfxrkeRWtYpGyUpndcsPxaZmwFiu5MFjesbkfoc8zygmt53hLt",
  "key15": "5LaxRHef7CUCyykqeqM3w7JbvKQNnqZtfnAmQSzow4c5u3QGuDEs261Q9ERjeQT2vamt8Vobevavk5DvcLgzao6A",
  "key16": "3ck6vNoqJBLGJq2LmLZPo5WaQV8qJu6NGzcj33vZNkuarMJ6fbe9nsftJqVExHHoWL7yPgyhhGRk154anvKLs13p",
  "key17": "2CANv6bor5Qgc4TdkVWang2gztjjs7neBhmQofWPHyFfQeokHWzKU2m6MTf6WCsZGqytFL4Z6Li5SxcLxM6VgZQL",
  "key18": "3oFF2HrB6TbwNYMZ1pmwqUyhpW9VzbHtvnYDVE7iZxSKC4NN1ccVCXp78FfRgv1nUxhyxhddCyNVCPBd31EyJrz6",
  "key19": "5sueFmcB3gVncoiY6tAvoavyjUBK7W3qYaaSVL2GFa9swfJRWKCEHBCwVwH3U82DKvG8bkunk2fETkzGXorhTR4W",
  "key20": "2bBZtk6yBmJvnQhE4B73jVqfwScqTuDSLi8FRAi4hrxbCwe5asRwcaJY4Un42UHtfK1vXWKMjzjPXGfWj1LNcEnL",
  "key21": "54cb8Y7ChXbnnFQKxzKygCgP7K3aX2tnbJx6WWfykwrFu2FSK6waixvkZtfci37Yoih8S9T9nmbc86FwmztZp9Zb",
  "key22": "5mHTo5qvRY8pwZB85QdytKbywnirCdpUZVWepDBupYyywwADQb6Lf5i4J5KTsuBXHky1WnmKwBJf83duT3XaUyCz",
  "key23": "u7KhwKJZDngjVcmNJNgwRmZvF4y1dVugYhNSaz3hKFYTw3ed1FvPxNnhCGhfHpGgu6PegVSaXgcDtnYDQQU1UZB",
  "key24": "wUKczUxTknKQtNKBq4tjKgfFrr95PMAttzdd4tyEjmdsTd4QQGNMv1NCh2L6VNLZQgNCgxgN34NoV1hUdSweUvY",
  "key25": "3LWknEdjbP2KWZNjXEjDtmx7a3ztt9VeqMMZAvV1MbhgXPNsfDyi5ZuoxgkeTjToxDPavixtfATUo1RYwy7e9wth",
  "key26": "5odxQ1z4RLcPxudbBMH3YqezDLfuyqGa4tZiW7DedM3s43fJugH874vvF3rzDoFhGRWqS2UxYiDepWhKu1nh9uTJ",
  "key27": "366EcS5kF5GLnu6ozqi4KEFdbtdZwuSZegURGGRZXYFaCXqtYnhyL7S9s4oMCruRrXUgPXdjRzYwnNhdh2p6Preb",
  "key28": "3iLUnNPTTrxCu8EsAnhDb2uuGtuyqLyCJK1CGKWmxQ5Qtkq8RSC9msWp6yvNUmdG9bVk1oKUbpoY5AKToA76aKND",
  "key29": "2tivpjVT9SpTuGLnSQ7hoM4kHyYp8dKvvWiyqs1rBQZUF51Xamcyju7F6xKsHd3QwGt4dP4oQ5C7t7stBpcgn5Wu",
  "key30": "4xar5Movatz2XpuugYK8XJy6ajpTbn1Npf8oSRcZGekdEmBCf9WP7TVp5Hh536QYr7dQ2HTk35de2a1YZ8CckQm1",
  "key31": "4wsf73m59VJYmbYenbB9P6ztVh7pw2VZjEVjRvdzhTaFxVzjJTctoqbXciKGws3Yg5jRSyqkK2LS7KAzY2Qc6g3X",
  "key32": "5QzefajvowDZJxRCkZTzG576jneisu7TUD4SDtsaiNaGvxF1JLuz3n2SFq1XZqRPw2QA9rzRDXqro1EmxE7TcDAd",
  "key33": "5rLoBVuPWSvmB59BNyhkfFZZ95vddgUJTg6bvSVDJ9DpVddL3RJPdyhtgsQziqUDFe41GUAG9BqjvWkXAaWjHRGe",
  "key34": "5j3MkopPtutp2vQVZWZGRKs1EkbN72WxZEXiSMSwkxaZy32LYnar8rfHeer3ToM3XeNsr243rZWvF8v4A4egoExJ",
  "key35": "4dLomWcGLcK828cojFB4oSGsKgfGHLpiaH4AvkTHn9YTULGWA96DXKKEZLXYCFWxKmps5im4faNmcX1t3cS5UUma",
  "key36": "YL4aNLTqZz7SUZGSdLa8YMCiD28DC2X1gznDCCcY3RJWBrR9Mw2FKNaq3pYkRXRBzUkAT9A2HSNAc7K7ejjKZRR"
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
