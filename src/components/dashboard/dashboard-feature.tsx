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
    "32mrMeBKWaQx1U38wdmpgCQAWyziV63RDQBpAs9XKJzbGkT2R1FtabE1qvERjv1DUp9W38bbLhws4PoP5GWhRkDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kBzMZNxVpMLpf71tN7irRom316PPrGaZg8TZ7Tmvn22Y4xAvYj8HLffprcUaXVbpL9ahJwAcJ5FANU4r8vy9hVo",
  "key1": "3eiadSrSXwBDpfwytWAYUyTjigyAd6QuU9njDVefYwXMvMMk56RXYbVJaYszjRGQp5dfs3GyPYthpvMxZbrPGB5R",
  "key2": "4noqUyuCJygNBt7atUrTpAtirfRXp4fMpsxXASmzAi4eJEPAn6zj8f7ZmTMh1kQ8fTmZ4DEojyKsh8eS7fGdsXBJ",
  "key3": "yhBhT9f11SsHfAjRupqxKmcQi6JhG2yEMvLHbn4dvfS254f5qk9yekdAEkRQd2ce7EyFZ8abUjW8hvEu81uFS8z",
  "key4": "5zgamQhM7tNDaNJXQndNR2Jx9z3HfErMFz89Sp45FbcVJ5KxaWbpAsgu6wcoJ7wFE2UMG1ZbqiJsn5isNgDjsBQf",
  "key5": "26hnHfPaDNG3EUxLFgQGpCMXuFSaG7SA6gh5hs3UEiQpFhTss2V7WHAp2R9z8HtyPGZNg4A56epi78jjpPdJn5e9",
  "key6": "2111FUqtHXWZs7n1vudaPRXyyaYAtJeLaaWkZErf2MY8pNzTk9h73RE2v6KRhHcDSxZPYkpkxrWy8Jr6PBDfE19f",
  "key7": "32oQHCgczAiXH5nahF8owLbEdXrbcZx3vBk2pF2tng48RdDQRQkAyWauxPE7mDHNzE6qb2WYPy5FcR82mdesnoiK",
  "key8": "PUgttFgoQSadE3qKaLbPwYpYM5G1fPSzkG64xfcJi3twzfbsjvh6pgBiaffB9KNL5tGV9infH8zAj1uUsg2tKNt",
  "key9": "7PAN65mL6i6E4FWjzucpnuxvKVkAMSR4ZzYuqNsMpGhFw4BXdxjcNULP9Zh1WEHKDBpxsBQtDu7L1RxLZ6SPYBr",
  "key10": "432dFeR6NTxUQvEYn8H9kLWAg5sYeqB8DkrSxx2jzCg7RBnkqGFQiAACu8e1gJzTXywEs1Q1QiefEan3REeBFwGK",
  "key11": "5yLa9cu6dbo6LAiNKSAoDRdw7KZkYMC15PEBJQKNaA1P6H1Wda1e3P53NkMDKQc7A8hywqkykvHzL3mhX4vM8n7z",
  "key12": "5LnNDisdGVCZqBLDz9E3n87ux1zy79RPsAMDgrJpEefSPh8no2JxqrYmdZftqhd8VTyVfor6DS7meJqEzAdeqHdf",
  "key13": "2eu4CSui6DEFSSUKbacimf5HvghF3o2ZcxBMLYFYYrkoTVpeFbLGQ54GEhi6o9JB9tmm17ofT89CqbGr7d3kdSZq",
  "key14": "5b5i7j7vMWrHAqmSrveSeZ9X8WGhzdhbD7c3Pxb4BWysQGmBpWi169ax79khyn3hZBuVKgCKMWsvGzcDxd23YTv3",
  "key15": "38AHNUj6WkWM54uAgw49bd38bcEYstsvgShTcANZeKm7DNv3sDvGSHVNvhWsemgiD59NecYu3SnrDnEDa9qMWaRf",
  "key16": "5yg5qjKfL9qdfrMYobPj4tMwEdbpGDKtS6hC6bMibgUEKuvfca6mVUm574cih9eMdziy5GLPuChjxTcAUEhLqa56",
  "key17": "51uyWDYCZX8EV4U4WKfkL9ZCddMfQFQNY6SD2WjSQyJWVeBwYfqbkCnDVDqEkcYU9QnfXtu5gnzsDQKM5qKzaYmj",
  "key18": "611wSPwbCojh476Rsd654C2XK5AtSBVwGjFoSx1Jt2HDHz8boqR5rgUec6XcH2EwQsq5NrAtLoRWg16fsxapRYHt",
  "key19": "5uEYEV7MGuGRjGgyeHFSaNM8sYkHT5wCZfq8aoyC9zYkjuJQk4gyjESFJxfTahcbtpXi186k7LrKfkUBEQDVh9JQ",
  "key20": "56DWiLKcViQaXxm43EBmjTDWBYuv6wFeHBiB7qg6xY5ABBSzy7uQnmkfsbfjGFCfQxVqXGkfbPmB2wnDQghNDTEm",
  "key21": "PVhG3v4VPuSqFV1u1Qez3hE1sQtuGFwU4jvPBFS6z68vDinhpyDYv17jzk42npfJgg81Z4UcAhy4U7sMYjkNzPP",
  "key22": "2kpuDD2wAhyoKQZjjdS8mk3Js75QkA75NUQ2VBw2wFs2zU23G8VymTm4c44JZ6WLqYFwaT21PYGg1Eu24b3qjw7Z",
  "key23": "3GWqsuJ18REiWX35Ub134MoFzzWnqNf5ew5wV8X6C1GUC7wVpJPPcRSj6BBkgU28MFKRSy1yP2i4D1Hm15wgMe1E",
  "key24": "3cKs6KA6GcJ6WdHaMKhFPA6GxMn7CdDp568bqnRAkLoHWkowFn3coKjRxmxbDHdxBasJ7jKv5BSpcgPT2WnXNczL",
  "key25": "3k9YewhYqdFYz24zDLcBKpGA5Pf8EbdssvPGQuoia4DtVJ9FSocrzDNjdrNwodYVVpnYQWfNKt3MdXp4wGQxC2S7",
  "key26": "2L9mZRM2QQJMr9Qn72NTSmGaLFcYUJJVo1w3SHYF5vzJ6rjvbbU1PyN3FrutxgSeDAhEVihEgBbBRYwL4c1bTPsf",
  "key27": "4e7UDo8Yfgvg8d3nLeuSfbssZGqYxYhggmNbNbZ2kVnMWrLNqzHLkUV2w1DNsDVDepmMbC514xfdPfrwMA1ceURP",
  "key28": "8AJRGvaJNhbALwyrj6Kjf6G4UAwyzDhmDwETezjVAzahTXzgPL6cf7QjRMjFmYcvB8tZzRsjRdw8W1wrJDoPu9B",
  "key29": "ULgQ7X1p3BkaegEDse41sBqNLFqmfcvhSKBTbBc4W7WMvjWRZDXvmPxYeyKcM8UWtphFuJABxDn6cshxg4x5jPq"
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
