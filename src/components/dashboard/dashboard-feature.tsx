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
    "2ahxivxkKUBGR2YBbbZq9F4m4DGjAx4iRTvUJkJ2JBaX6oz3n7pJY8yz7Ab9Uhb4bTa6v2NwQqbC4awtYYZUpwc6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eXqfBdaE9icpwgmyR8uhYgyrndubvuXmKRdhA7M1n16JuWikFCRaqjmPgVNufQBdYxsxpCdDDzwxhzDMmzAYCq3",
  "key1": "S1R3jisFb21fwxsPUPr7xEDFjy3vJPJzbVBZrvKF4ri3AdUX6gbpcjC8EnB844XhGj4E4g5j8D29B2oEkEEsUn9",
  "key2": "bFbTKntEKDqeLnc3qUu39jn9Am2uQqtf4MVk6mtaWkx35D6C1GK2zF9chwuYqRKuZAx77rFNzwWJHiwwSVMuCCj",
  "key3": "3YnNn17c2x6ob5YiWy6a5WMSTCWE25sHM4uncwpLH3v3FN4aQVyxgbkEgTBF1au2BL5S7j3y7yk3nAMhPDDz14Z6",
  "key4": "PTuKtspn65u8V4xnwNh6PzBVHriCNd8orkZhKxzeLRxh3oWmtqH7hBXhFApaDgUxyZU6K8SVX1prRZ4gBxTbN1j",
  "key5": "5ggAy3xegvdnJ5XAAgFuzbT6GeQf8oo8kFtxafoHgJobH4Z3ksiD2caWbAKHVGUYpVJLL3URq651rpc3A19znG8W",
  "key6": "tjVr1AU84F33GCzcsTUVNvXr5sUepbjqnJp1D6LZTJDu3GSGwRkjKt6sSPLEwYCb8RwrsiiSAoq7VheLjfKpWX5",
  "key7": "4CCgVB1Wkreeub4Pvtg9puUokWmq18bw9xf1AsvpzNgHpqX4iuh5bQW6PgUBWZcbUutq7FWQPDypUYxHYygggzU7",
  "key8": "5xjAWrfsHzN6DKpfio73cM5gMrd8P3uhme1PomDNPuiKkk8mq5NXKjBKdZnB87BAmezdbw3PxyeAGJKx7LqozAoH",
  "key9": "3hLtSoEo2jSf4aTeTvmbz8sPajz4k89GL78MepaHKDLvXjhMPJeDk1wdEh65k8ayDTB4KCkMKTn4MB5nbGsJSHrK",
  "key10": "2nPTWHmyC1Dn6AsZazPjP5UxmYVbcwbPkJWawMVh3uavGRVm73x5p7j4GZ3EfEDjhC4CbjzvQ6dcqnbecKsjgv9g",
  "key11": "nht5iZcyAxqe4cVAn78XD6uUXXatCKRhPhzZnxvjxsC7hHwbAYshnrQjRpcfixUMcT8FoKkt1An6SyWigqgqVLi",
  "key12": "47tgJRzXonDoqMw9W1LRddwvqNgkEqP9vNrWkhydc2ChbJ9pAThiLXcr3gGsnKXWXWgbsa49XkZthuaNdJZf5Wi3",
  "key13": "369AULawVVw3q6GiwMrEQg135nWdPhHVh6N4USNzbQFZ9PJj3MDvGP8L3GYm8xWMVAB3i47MgH7tvUnXrypfW4JD",
  "key14": "uryrQp4wzyQ8YCYJhD26NjNgBtXFxYUsHSABrtyFxjpeUWM1S8CeoMhZC8pqUyvKxr1GQo4eWEtgFUnW2oyGWjo",
  "key15": "4iz7wQronAKA3Vvgp6YDEA6iA6QQEJgrXcWc5Loo5NsQTR9kEZjNQ3o784Awis9ezV5Qvc7T1M8i1ogivug7rg1e",
  "key16": "2v2NLEABcMKGhnCdtLQJydWYH7brQztjJAkWZQD9UiFoUaxgf1WLtFwZkGftbsE9EvxkotCwB1n3jWsA2wLHj9ht",
  "key17": "45ob7ZUQRwPBZoXwR7i1nYmm7taPfiJAAkzTppAquqJ4dKSeZwciWSHYXaxUA5JR6bscUYMZKhq4DLUjrSF3q411",
  "key18": "2pbvNuwz9PZEQbGtA3e2ZxiHhUUBcqXq7XEC9MbDh1TwzAs8VxvodiFMQdm49jooVHRjX18LaqD3iW9UYumUP1uN",
  "key19": "4G4DMejxAFDY8LeKTrEKzYGrJvq4zbqXhKvfXSAqEUt9bpfa85i2UyN1SVm7QiFpzBfejLnms5NN1BwjN3BYpwKz",
  "key20": "1PxqXLTXQVyBUjKmCXEy6u2ctLz6oPXuy6CPJP7pzBH6v9eaUL1uvyDV4h1KaDETdneVnEniLHvegBk2o3NzdRz",
  "key21": "34uZ1qVzyF8iAyVz7x18rJkXBWniLRnTTt7jvvx3eY5EWE9mNSLJGRpfWgy42oE6MZKFDiPysxdP6NuYFtHyfNqU",
  "key22": "5GGFBDP43L4FGSxGd4v4s6HgvU8X9PosQDxq19rRkFKQ4i9Mb6QnjRraZq5YUQPCFCWq8uMufyHCDCFhJXEB2YMA",
  "key23": "4kQTQaukJXouG33o2VvQRhiSbrDCkzWf9S8qiVornaNbucTLb7bLUGfRzyyWtu99RaeKAU4Gd7pbaQKaVpaCzS8H",
  "key24": "3M3sQ1Bxz496MjCjzS8uA69882TPiSGmzNwfgHuFn8kzicqMtwbF7Re1xK6DFssPtuakRraH3PjSJY87QuiP9r6a",
  "key25": "3wxDgh1agmo5ssHToRvs3Ue561Fvj7YhzYmowpKFK1EFK6BhboADWUQkDFsJy8Pi8GuLXsZjU9kjHFe6vvNeCPjS",
  "key26": "y7zx3CQcHgMKb14E4dYm3cFGEVmM2hD4wHYmvxyNLnfSPf9M55YgaTZ5GXHQjQLZr4j2poAzERAyWwkJghMdEQy",
  "key27": "3Kor7aP3bJpyJmesB1nG1t6sjtpFWhgsQjxuFcskBPCvSjkZq1R8uLANyNfkXPLtVTHPvo3Z246vCTPiB7Liqmif",
  "key28": "HGxUeook8gRaZtntvUVaqD7wHzX4N3mNCeo3dULHDDfYSo6PDz7CV4eycDerajTx4qgLic5gUeTokWTeWEvoMLc",
  "key29": "428m4sfRxn3aJaXLZmqgrS28zndnCndxHaka9qSxuih9nAbbskWLk93bm9tQHQUSnhC5KpDXmRreVa9doSokXBmT",
  "key30": "EEwLBqYa6ZLrY1FXxWb6KEnygepH4tkVsXMwjxXQsGRLfWSWSsWqYeSuz6KnJBS2G8ZeWR8F8tCBkJGnk7cuXaw",
  "key31": "iRRHKfMUdic7jsZ9jSuNFuCCV62R1iBKLt3xahTXwEUhrCRwXG7vYhe3oqiGBLKmcxyTxJSKcX7WCJjnPku2sUT",
  "key32": "Sdxh9tzGFmq9iiTUwZPshPCqQgNGpqK8gzXmZYLERU6fpTrRkHFshL7VBEPFDGMJ9whq9ZvVxfujGYEUXKecAL3",
  "key33": "5PWBNn3MMeNumyopJ1AxEpei4Ua4mxwRpp1NPKSPJf6ANVAPMz3iuPNy4b27kg8eYrYrVQL8Y22WcpMV5HdeTjf7",
  "key34": "5dLJ9gAy52a75rcWT4Mozn2KfMDPqpq8szStWWtaar7xWG6NReAdZxMit9P4xesWAjkhVhvrx3jR8TmYB5S3DLe4",
  "key35": "ES6HJLKXyWPW6zzzc6TDwwMYXvvnmNUmiuvEtWfWW1ZG6tzSnebUjYKrv2hmc1WDURd8TeQg1JJUbTEBksjjkw6",
  "key36": "2M4VhvMFeuDMPQTQGpQwMy5hhp1EXLksQUTXxjyGJmEdaFWMNdvZ5YX3C8pgjQBLXo58WkTQz8Sgt7rc2cWhEE47",
  "key37": "33ueFi4CvXvze5L9FWECsCNSRUq19Rm4qcZGM6RFsFkmCGg7UzJzj3FBDsDuhfL5KrWsxee1wea6jDeEQUsUC9yA",
  "key38": "5F2piJpfexhFv2nhqKNa74fzqq8JEgcY7oD3PTHCPTZokKHS2zjdURqqXaoZ6vzJ3FxTxYcvQvGWxwytUbK8dH8N",
  "key39": "3DCXFXfMz1y4wwue4pFtibpPCyLwsstUGyrtToCAXZQRHeUrm3kYDNNtyEitR3tbaexoDvrdEoQTwpkLLPDZNq88",
  "key40": "21ga6r8n4BNiMWozrfMRXPsxuNMWaRovinKNAtcsvVyjiGAfAPfWj1DKDvMgywgRgy3odAh7Ay7rssPPx2zwLQS7",
  "key41": "2RWmKski3dR71h66Qdkj4EvqvWRGs4Us92GkquAc8eEtXdLSq3FMGvaN9MivnRDtEs3tm81MJGYNoeMUEFVJBAK5",
  "key42": "a9kCiN2AJJrsnQErvTFxzTNwDAWE64tFWxFmeyiLEni5dbxdzKVDCm9HEqrWaeCSeFLNnuMxsL4jZzrdw79arF9",
  "key43": "2tCWQ1jmfrsEzRKkC6NuZLd1ohNF4bktpNtQ7QvDdc6Hk3rfD9E3mboVEn5EVpkJuQbEcqzPtJdRZ5HJzjvcUKTq"
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
