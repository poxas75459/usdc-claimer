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
    "3Dq7PPEFCcEpprdUYGeoCAdcXpSSHKm9XMcfLVs5EXi8PXqJGSDXtmv8yoM4rxGracY8wg1C28vZ5x7EPa4HFt8h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CKvxBg48Ns2ua6TkzcxSLWv5aLUCGn68MYfHR7hq6BUTZtz7DzWQDqbqX3cf8RuALhQxeq1z2ARyD9UvMax9J9o",
  "key1": "2uLWCuwsqrkeyPs7MnKc2xZbYf5TmGY56MjidMHaxHg5LTFa4yhdUdaCPR81F1JxYNHFmG8Q8uaL4T8RSxgDJD3R",
  "key2": "26Bc7TaacVaPGDJFLLKoAD8xatkAMj6uF3hWjBwZnNHmqWy7JLcZnEXW3VHVXSXP3wAhFKunu37tA1BxHj2UvAAX",
  "key3": "3knrquXXVyNqJLYpzMTotuSmXm9DpvH8wqUUYvt4AZoek4GVePVSbiGzLT8nQSAg79pRYhLEcUAfsZ2FSbTR74tL",
  "key4": "435Tevts25KcQSKoC3NQej78KrViJBuwfJNwgTj2XNjjUhe3jo4UZWA2X5BS9i1bgduvR9o3HdccdEuAgyHhDMki",
  "key5": "5xY9QRVyYhE6Dty9AJdTf2AiQtdMAvyXynfFJhVvB71N6rti4mjNH9Bz1Pa8eijXWjdycpLwPpanvtYZAPq4Vh6R",
  "key6": "38KLRM1QirPB7YCjawY41D1wzADxy3qbZivaXQLfpcGpL5CtBi3TB7sTRkX12tq7rEzRdKpPQgx3YSM1cKj1ew4V",
  "key7": "35qekqNXSY4wmi1JvmfJBJfHSJKLV7GzEpbMCnXGrUJpexhkZSMbav1KuMk7B6Jr2BxHNXdUv5F5BuavpWreA5Q9",
  "key8": "4ifNhXyk9KarYoxh1Etf8MPU1CYaFgH8yAj6fcTpEqJevjo9kYDcZ2mzEdEobFaAGtLjJ1hPQ7KXwmrvYtmR18w9",
  "key9": "3dxGYaub6AvaLhs5Ju8ewXAUj9iLoH4wDoVp9u8TadnAcTr4fxAosykqdCzRRNAu4mBFto9dD22vmM3ci48DV4Fc",
  "key10": "44oNYUmMHbYhGRhr35KuTYquvuiCq3wXKNypfSXMDBSrsvbRtxnMU4jL5g7X5HmzYMKq5kuiqaFmYGG4rm15WHYc",
  "key11": "5K6X1ci1NuQTWeGyUnpmqhsvC37vRFhCiyHWggth6oczS3MDxyQAmYcDpPWuWjBbaN2gV8HordnwCGrUXKuujEFC",
  "key12": "4UXEydNZ9uDuCz6vrhevi5jjMvcfbiTrFeEYAWS4rmNCJdon17VTvGpaPXvEHNjkBNj5VFMXgceuRHNjSrjvDCpx",
  "key13": "2GNbK7Cy2LRMxSd2Ud4zgfcZjD5rGbgVbxxM4LAPA6uxTa7LtqNn2GVMZrkTUGR46idXkLenazxBLZytKSxTqn3A",
  "key14": "5P6kSi52VovtSfnMHNNodUKnKsNTeyP5PGekvsa2Dir6MF9MC9aeJ9Lq1h5UYtFa4uWrtBpQqi4XF2pqiaLGMjkH",
  "key15": "4zNjG1rLnmwzE9JUqvcZN3PTd1h8z8Mb9xb3zNe3nxB1rX9RXtqXURaBKCCofdhpSZoNT6Z969Kx5vt1BNP7xBXc",
  "key16": "2ntS6Y6icWYS1pEJzoqz3dvhMMdUbwjEreh4N1a9huWDApbyuVyV9XTGEg9abSfZHFovWNGNE4N31WomZAGoA1kR",
  "key17": "4mwfhobrVdiva1ZRPc4NotSFdxm5H5MQLy5W9kSpGtyhX7XMFNovmbXfhsPcjLXBchxVBWW9EJ5A2gmhgM5uuFxJ",
  "key18": "5L1YqT2sAg6FRgK7xAdmyEEzozPrWdTWGHrDEDoM3d4orQhczubSqhjaL5NemdnBHK8v4FL69KHxTFdo4v9xYxg8",
  "key19": "1PRKHRPmru2biAnDjA9zUwvmYEfCsoTqDaPRk3rpjhNasr5WuAJPtSwhBZzSUvkkphN6WympQrN3FTzUSM4kT6x",
  "key20": "5n5bxEAwtusKYp2kG1WQMCpSDVFPUFtJNEeh615ULPNu5SdMTFxFxvrcmsHSKnNWHZp2PQD3zb1WEJ61EWvUtNs3",
  "key21": "7KV8rLi4jh7wWbh5aacQGNeAtNjaRD3oTEr7Mm7uXPeyE8uRuBnN2YdqKmyLkUN4317iS3hw9pKAfqgu91X9GgE",
  "key22": "3hZWdtTUTgJeS23qrQzfmjrGoszn8BXvpdhXJxbE6Rg57So33tkTVAbku36msYfSTsqYrkeVekpfYxzzwKrJhuyS",
  "key23": "eYtUGchHkNuvCKuvDxkULGyNQX6uKt3XSb1iT3w9We8iHGcBJQokYKqsh58yRVFSC4AsWGWc4T698wLq22yS8wb",
  "key24": "4JRGVfkejn3BR9QDHTh3dLaq1szZ1CNpZ7jFPh4ChN5tRD4pHkjMtj1M8LJyJieVi1VUbW8CHqREBBbS2TRXJJDq",
  "key25": "2FzansBXFkMDXKG69VUZBuFV6QGWZS3nb9engYZzoNrbqpVRF2BQ2WYNXVCy12Ffg6rP5BnzpsWZ5kGatwN8AUhD"
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
