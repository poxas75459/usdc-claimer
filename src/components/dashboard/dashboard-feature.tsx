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
    "3uiVkRpcnwz6HcaWiH9xT8krY6K2p4AWmm3DabzRDqSNNPmZEaWXYyEp1sY5XTBi5aLbTqbCiHtUpex8o4a8TMhM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FkJLzhCHzz5C2D9WXx8dszCsoSnh5XFJixbUCWSrWLCvNyHbrbejwwKpXkj382KChAin1X5AQhWXVdvsncL5i8K",
  "key1": "3LeCVHyy31SivxXVmQfaHNSqHrAJumDhpob5gz1phJxH1h1wMokLJ53bNPDZMyW34QmXgvGPeBYRktzDeBQMVE5J",
  "key2": "3mHaEdjdEFnDNJZromaqjfMD4EyRrmEuNnwRMwaJ8x4paME6iq6ug1RgjBXE8eYbMGzNyeG62oJ29ypMHcAFpUiX",
  "key3": "3vLzXnafGWZCVkZtHdK7XWnaPdjaQYjxwEChCsLC7nuAE3cFDKyrJWag2d6R3kup4HpYutuWHsNRSbxzMFLnQGvz",
  "key4": "2L1e8gEapj45AEwiupYpXVwKypRb1WhCgnyUbB7Y4CARg8zrVZoKnp5MZYvjGx58YoN4TCkep8a1FKDqGfzJsTpc",
  "key5": "3kmmGTASvYKmnwZVLqLjhG7qP81ZJDh5Rz1AEK8GQcT8R7EMPaEzNzfNZGnTrcjJug6EvFiwPVcR5DST8iiXh2MC",
  "key6": "2Lykbyw37keaLnzwqnWpEZ5DvuWxkPoK1kYEDiZ8mdviDxqwnjoRJYj47h5d7o8ybeiViGLk4gqq1swVZMY948xP",
  "key7": "2VckaM67e57g6P6zEhk1CmaerFTZTG7MZhvRENkC7jTYziVNLcbQvjsAJ1TnYC3XvyXJcqfdVwEaDx1wEtTkRec9",
  "key8": "52Hf9zwC7cbg7vjz7zNRZfdWkVX9uYAUNtrQdtcS2axiDN1b66rRs4PQvF5aJi5YAawutctvagrL8wVwfizwRBLs",
  "key9": "vpHLekyieE9JFWsqjbkR7JuD3aBribyp6QnE1WfquQpxPpxReZXMF1D8tGTcWwnXL6WQ1YEsjr76ApVmQCvvQKZ",
  "key10": "nBeXEr4JVdbDqP2XCg9XMvWHq2yHzS5SWbwzZFoWg1rH4dXjkiLzjY3vaHX9ZGH1FPnggocKHSswkpAroo5hKCK",
  "key11": "45STscYT8BhUKZVcMyRJ3xruMtbi21PVDt3sy6WH16pMkQTnQTsWbX6LDtMLd7fMdqqFNKZGVa593pKnDgmL47DA",
  "key12": "3NnrPanE9hMncBEYYTgwzNLoaC7jatZAa76hDQ8cHXBC2BMZXnUFh4BurkC1hWHqmGGeFg8yRJ7dHNzhfgaadkcb",
  "key13": "2CnLQbVgt7UoAh5pgq4BVV6Vpw1BDGqHYJgMUvDZyk7C72jefSpuLw7W3MavvjATZmJsoBMSAXSgXrdvFn1nx8ao",
  "key14": "GTUE8J59f8K4gdXWJ1acxsWAL3AjxbAhTCEiDSmuEZ86DcrXCXoPghRwXArs3CNsf2UNrXPr6YRucyk9GAwEtkr",
  "key15": "5vjFxWLXQt6qiZQ6uzTkc8s1iuzLHUGXe8Z76GcQbJN5qJebTQVviQJiAYDpThhswEXoqFqD3BaBfzDAu3w1kYCh",
  "key16": "58pqaqQCVxJwMwQL833jC4zUnyozQ1LLgcYnFEwzdSEujAELpCwtsCCp31WMR1rwYL6ht1UhznryVf9pACBZqw7c",
  "key17": "5MaEakLAY81qJpZeRS2GcRLwiqoZzvx8WQwFqZjjjzJcU4bsTSQmFkt2KZNZi1fUCdQ2NMXwyG6aqqvzE6VkkoxY",
  "key18": "gJ4kUopq9PG5Caqu9XFCzovF5SHW4YrWwaRoKvKny8Kh41Cxh34eJwBubgaXSsxc4pBJneFGxd7FHuge1dNEDC5",
  "key19": "5vnEFVx5X5nMGSDrg9fiRxAUgp72BpE6K7eXbYQKrppqyE8kv7zCyUYmwN1UgzcdpRK9S4dnRGzVKV7gtNJzaK9h",
  "key20": "4E9gCeDr4hDmwvEhbsTPCZD6DiPQSAwQwMogTaFX3vNAjUtaSKV3os727HyNsvvnSdrZrE7skhhzA6ENiqNGXrN3",
  "key21": "2zmmFrccpKWpoAQLXhZ1s59deu6i5mQL6xfKU1vPqouJ8xrAnq32qTY13rt5BXZxakeLWgJjzWk2rHwdHKkmB5BL",
  "key22": "2LMza6kMoCscMcpgDB9EX23Ga3G9qj6SRyA4Zs9FdUD4p9iqtwhLJrXJj5KQxMU3hzbXjKwvFocro6dbXSXEqH2u",
  "key23": "39fxX5RUbxwoeacU5RwCGc1CSeS8kws9oarDeuANDxLHYVbiHUDZcmKDrr4FHUkR4k6vMxvcE2pnU2fvBz3t9XtQ",
  "key24": "57Qo9oVX7bXMiqPhCV31vVSiXA2RDFXQsqQJnnfiG63AqoGainUeGENyvBmNayytSk6K6v8q8YujhW4N1bw3SLYd",
  "key25": "2VLP1T77hLBxgZ5ecPG3Wt76MTt3quoWprBBw3y1LKuqFBiwgMv4ibauuTtjBWBzmDyAkr8YhAjNUX2tCwiKwR2P",
  "key26": "4BbqJuUsRFdHhNfsdv2QWztGXmrrgNBtXAtcGJQxRo2rKGzWWVGkGEWyFc8fYWV1uxzBVcVNzhKtTan2GF4Dao62",
  "key27": "PiQQdhsMBzv7wVioSijddxdfJawLxd4TYdUYxt8gUcNta7FnruEFQVvzo1FLY71U3UKS1Do1Yu4Q6NzoT8Zhd72",
  "key28": "4H9WLp85HCdCLWFpTj5JCyq7KitnBAbmeWeJsBfd6TmHXfXKNK31nFpWi7V3g3sZ35ztG3wMJ27JZrJ2jAvkLyw7",
  "key29": "EimyTnKQetngijokisJvRVcVKiiec58wNgaVQkihAUuvsEJj761LsCoXJBjp5SvimGYbeVy6hpdhS9vJacGkmqe",
  "key30": "3LsLGm3NmzhZjVW8ZDxwSoF59G7QaGiMc1puuutwvryzomnfuoar4aaaUhPe16cN35X8uYLZD9WwAdybHGYVBHUa"
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
