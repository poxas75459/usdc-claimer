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
    "2q5nQcFuCinGRqxbMfBbdVzMGFr1tSgeodgpomdSj5G6Vg7uFFa5PrKWFwbAwZMDwz6dm7DTsoSaoWs2qfp5zK1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21uEF16nsaLZV8foZijMpRH7FKbjcj5Cu1qgArGAnaMky2xZh6s8CPcDTN1StwLsVpeuPU98hjpfSvu8vn2Wyvei",
  "key1": "256ptiALgXx8GRq4DmUtHe7FihCPm8FUKvACXLc4hcBhMG9enBUD2AZCnmufYnBrjyPokB3cnfSFUNT9VgMGNLdm",
  "key2": "4J4YmvWx6rzS5GXdLE2AYX2Gbqt7zNAToUKNZWj9gLgJX8szGDZ6HHXY9cQ1ZBrELKy3e5fB8Wvhj4eLDUGDsKLf",
  "key3": "3sgJQJ49Y67WJFqf68kW8dw2Lnn3atNvXPhbsfvAtCWTkqtBDg58nD61bTg2wfJRXqRJK1daio5Li4me4ba7yDxe",
  "key4": "5VMrgDejUzpJmB2isnGXaGzh2pMuufpbRRU7LVhpGPaGTaACFQb5GukVetTENn6pbvBWTpLAjneupS7ZXQrRbY4B",
  "key5": "63DJMWfrXXAHFszergdHsX6fSYFW4pE1eZBXh8qSJUdZ43wZD8SUZkdzd8gps4ewy7D46LmGZ8jDTecgY7fayJnD",
  "key6": "5zYNGXQmoAp951jridJzLYsZQwkjVevQUXSNcJ3W3Yr6YN6N9yP89jyM16iZsrR1NHq8Uhzh4ZLE7Ao1nRcPv6BR",
  "key7": "31HDcJ4Hy49XwGpoCVmxXRgP1jNtSuXEuwoxBFHSqcc1KG38Q6ZuoBVAuDFGVpxnE2pwNzoP6eh46AWGDKRWB9mL",
  "key8": "4TjmsWbjQdhczqgXf7aoCuRJW9JQa6V9DZav5ZGTp8daAb7DsN8MJKE4CA6deQ21k6P3HU8j29HsXUnQZnTDpQBq",
  "key9": "hRiy6m56FG97fowWejaNeTukYVA1jLCTNfU5o435Dh4XWvVpH2bzxPN3gQLi7CxpJTHnFdMhjhYc8PKxG2Rk8Yp",
  "key10": "QLdpUabfcvBU3D5DtnpWjaejhDGRDWZs2rjqERUvZBRHtNmGbfQ7KHDX7SHeMAroPG34ezmVd7dDBDbVDgErQA6",
  "key11": "3NqU8QpsSYtitu6T9E1JrB8NvG1jRWhQ9vHvrrFiwEnTp8YsbTcypdbpbzTmPaaF953sYVuUi1CF1mt7SiQykn35",
  "key12": "2XuNigj1gGmgESq1zbVZkpZcdNjM9ntoz68QbD6DkBoF6agspbCe52imQfagK2AkbF6GF9YuZwwq7hTDWMEN7YGf",
  "key13": "4BaxuEhWF6svfFQiasAsbnXwacyEGttKDuHCQh8nkCNGVjaDExbnZt2sKGWAD4g854eo9wke4BPbCjuotDDNFAjU",
  "key14": "4idYFm1PEPZomR24eVHfqwykis1ukLr35jn34Xe9ic34Nuvc2EBpfE3SqT9EFQE2ukcX7hszfF4V3DFi6qEtDQXR",
  "key15": "4enbkekbRG5jwaQdJjPrXnknoqxiD7foVwJ6fVeVWh8iXqYagvtQeuP6NqnbCMdsCUNgjeYbK9oBdNfqzMU3eUJJ",
  "key16": "4HVEq3RoCgCm7WmdAnv1ySGRAXEhxZRJeJgiWdY7LKmvvquqTbJ4Gzom5AxYfXAs7fRYF7xDmoWWojQTvzvYg6TV",
  "key17": "3wG6aPNbzJkX9FjAAVyxu5vqErmaTSnc3PzNBx45a9kywZcXmegfMTpxVVVjLmDegsxdmCLcGnDg1t4PorGBLifZ",
  "key18": "5fCxg4KppVJttw4zq1rBeJKcmhcQkG3RZu639SjK7G8wpQ8Uuun3rxPy4BeKfAHVP3N28nJmYNLyS3GVqUTnGTYi",
  "key19": "4UY8HjFQ1x9MVRcP8j4mvSiVNik4CAvWhM3LPpkDdukK82Nr7hVRST8sfbuKUxYVjUMsLF6af6a4wSHMxfPQxP3q",
  "key20": "5uWCkT17qyjNKX48M21X9ap4euMzvhUcDRjGcVQnTfwi6XA4uwe3nsGtxRNAErL5Tvq69urUCya7owiwvNquN1RZ",
  "key21": "3uTjoH5ac6sjn3vwJmXsc624wt44nouX7AqDCvy9XwP3j2yPsSnoFtVKW6aQfEREsn13M9cp1VZujLGMZE4UVECb",
  "key22": "4F4BAxhiimboYGFSSU1EDhDocc8mC9L8Leuiwvp5Ra8AHYWAJBPjwZcaPMo18jbtmPE9pBgNEJvum1HC7F1uYtn1",
  "key23": "21C43HnzNDEdNQKuyNjSrN3B42VwNvzx5hbwBXMZBBYvyrv2zwbkfT3WmSWgD2bukrUA4Z2Wyb13yMVRV6Tr1DUZ",
  "key24": "5uLDqbsT6poiXHppyBUk2XKDeihE7vYh1Tiseyz2zJmnXJUcr3vRQEPd5rCvURZWm3b8kAzKBAYxsxgobfyNNHrw",
  "key25": "3XgykbxERpfridqmkQxGUfhB9DifrAJ6mgcc2tKT8HiwDjiEAvD6ssYBFSYma4jr5hKKiVZAEMT4hZV28YL1njQZ",
  "key26": "2yfn99U3dbuuzFz6ZmycurxkoDEdVYt1Gb9fpkpC2onaSb1Rq58i7ozGWLggDfKSvqJnZwLomw3Vcc9xHT7MbWca",
  "key27": "2UCPcb8Ci2pWgE5LrEyKKeB9PtMWSyDhRxfXVptBs7hDj8hp6fLLk6APtr3yTWoghcobEAYXPunTbmH2Dg9J4KhP"
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
