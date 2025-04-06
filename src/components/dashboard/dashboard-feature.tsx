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
    "fJrMjZRBDsarHYusbXRQ1c8akS9WzhVx3CA9ETAXb7FQsbZyxBseSzHeir2GdSgQbTLrcTTP2aVTWi3D5jBQKWE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44QgM2CG72ZPLqVbCPdUJPtSrbHM3q3V7bJwYNT2xCW5CzZY6PdXJZr1kx9aWJrF3cSaUdy3TRVtTQpomDKsedt7",
  "key1": "2PBfk3QVY2sDW8RoyXGwz1Swy8HT1La2ntFBWgweeFEEUyfVrVqCstiSXr3J9Qg746BbZvhb9KjwUVfeBoCZNde3",
  "key2": "5vrQY6Yy23dcJakPprH9BDo7JTU3sg1QpKquiV9cFbAiV3Zhd2orvVNwaYxni14pwSPBxrxXQ9wGfGeb76vn3grw",
  "key3": "XkzvBYcmZ3UoosNTWjnX9ZdcQ85a7XGXBQxA43WcNLyxcorBFQ8rUs193F2tdk2Un5RMDayzw5SekEHXMMq8iob",
  "key4": "5gKsmm5JRQnY4FupJNC3dRhytKNZ1xURoA167BujgiHfDc66v9rdfaoTxzpuQvHAHRW9ike1iWZLEFf7ZeG9KTM2",
  "key5": "5Xt3HgPBR3posTCqjppGNEJ2D74huzgdJq2t9dVnYCtuv3BusSx4oSsJ1MjxwFuUyZCmVGNk3ExAE6ko1jHUxZKX",
  "key6": "yRRhij1xXhdKD3fwcTyEPiH7D3fgdE5CfnP2j58bu7QXcexHRDdPKZYo3NJWbtRV8ff5Vo96UKvhiK18QkHQAmZ",
  "key7": "2Tbcie2ABTut1Ff2RSU8gmEfhhKqRYQtq4q7C6eBwDuzJXuRo97wyALXuUkaxXm4LwHsfyt3GU3Ebp5yrYM87F5X",
  "key8": "2rjeUHLfUQH9HUyvZm86Amc8YQcCtmFjp7LQRZ3VismRLXEUCHy6ZVtXHupk3NSKWGjAFEvFA7bbgDpt9HJrxF9F",
  "key9": "4Vj1LTRwcqZ7e3hhuYfcvjZQviWpeg2n4BWysF5cVb6bXhiDM4MUfjmpfyyhPmm85tBbka9gjKLBjjXhjoej1Pce",
  "key10": "L1Y2d9oE6tfK1Tpf7Atfyf8nj8MJwPWvdBFGM3yWcz1XoJWbZkCQPom2dNA9SbizpFC4nqdk7rCSbkr23pYa4co",
  "key11": "4svKNgnDFam4VPBxaczn7izcQYqHkKy1AcPBPYSeVTSccSwbGnjY3FAdN8MmUxuk2qjH4PRZyKebHoGBEstm1Lcm",
  "key12": "3gpobNGqc3BvXu1YkSWbYjYrNf6qqacMvGYoR6QtHermkxX55usU8md4cZauGXTTn6cigFRkKzjhEpe5H4jbUGVW",
  "key13": "TDpjJ4M6u2MPYWHqQp7y6Hc9yNJj28wNqfL1Cj6NuxpPAH2ZGJ72HpRwVndzCpPS8RC7m6EdpFDvftsV35yNo8i",
  "key14": "FpZtKFncG9ZE9Aa7g1UYhbFjqui1fpL1xcriPhVc4nd3KgnP1sWYNQRdUqnJhVQDWXmX8WkDUpjjvdtE5ejv4vC",
  "key15": "2cwG7QM1KppG8MzudxQrFxCHYPRfoSCsH2tXtZZ4FhPatbvEJ7qNze3YpjE4ipNKQvw8GansRBb8rjG3vaRv3KTF",
  "key16": "XQxSBW9SKX5fAMrs2t2Wotd6yCPj4GdWsRURezEZ3JxG6VPnnRvf1D8GGWf5e7sn7XXWqEkK1BR7b83sMVdEJch",
  "key17": "63zTJZWJXtRwWiLSaWnHXyXsdaZQ4UAjMUDu3WsgDiMuPVhTdH91DDn249Rk2W8MkA1XE9QtWs6hr43MryDaDLDA",
  "key18": "44KmX5fizR99eiucwmmabUHgtxGCt4DSeHY94oKSfWpNe7RqA9bxUw7HEBAkWG7ATGvfEKaiW9ca8qsGfwm2kzPx",
  "key19": "3WhF5ygaNDhP3t2RuGUnJWUZUCXrrEXjdr7rCAugwQL1b2gkogV6uz6aBU7aWNtxFu38Y3htZJidXBGeJbbR1M92",
  "key20": "3d99q4gTSv3YqhBzgEBzhdT4Sa8WzkZPXwbisGFZAfUS9A4ovB1VnZgjihR4PXtz6gTer2dAg9kWEZd14kevH6gh",
  "key21": "3R8zhv6YzBDDrEcUJWjvmPD8K1bLq58UBSkkadKwbfTUDHios6gEVYNBG8r6PGzkVG2YoB9F3cyzFEjA7sk6cSZX",
  "key22": "zqnXGtLArc6oHVTTgF1DEYfyKGRH9fWmsEMZu6K2QqkpKAKHc4aosoN9weXYxCmKxMqQqpGcFYrkD2rfvgqEGpw",
  "key23": "33RyvHh7tiF2gdt8Bp3CEyuyB1igQXBpKhLaEa1dVa1VoiMn6BZukYxjfccxs1v27Zt7Kr8KA99R92MLojHw4ijo",
  "key24": "5v5iFXF4BwnULL9diuPBMPzKGw1PbhPqmn2uuAJJan1SWSVZNUBRBEtMeZHdPjDrbZ64NMJhTx5iebuJ2u2b6u5f"
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
