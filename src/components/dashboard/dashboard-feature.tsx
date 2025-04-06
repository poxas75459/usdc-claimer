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
    "aAVkPKZsUsRhgoh3CQzFnNB7bCZ7RgmHmxV64Mjspdksb9whJ43ygnJQP3SwnH1JBEYdqrt5ysp8srKHMJ2iCrB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3weHtkpmAjF5cYNJWpjTntNu69XFWfishexiJPbVijVs6tyqCEU4Qnb3pkWiRvRA7NsuMiMtodjx6RVMZq7jBrYk",
  "key1": "pwD6pNneL8qpK9mubS6Dc12YtLaMNx3cKfsiWCV3ozyXo6fQ83uJXvwN89so58fPfWL9e9hrtderdJuPh6FaZGb",
  "key2": "2rLaY23GbBYP3Zqbm1sdDUZhnpTWh2RYS93oB3spZXjXtm3swi5uHmRQ9451y3wCYaKKQaGvZd6Eh9gC63exB5e7",
  "key3": "33Vg6AgGuaja9PBZ77ostHtGFHANarwg31yrGd2qAJ3FoTUi6aheSfc3kvNiuJcrV5crpn4Jwaf6vty5zGm1KfwA",
  "key4": "5RYnn19zxExqh2MHCovdmTAqo143t3Ch7WGNqDmavJkJfJ9pd7Lc9LmGNqtL8epbNtbfmqa3TzKG7UmcnbfmzsBm",
  "key5": "SWyriwtpGSJpAwr8JLCY335wDUjGzbKK5jJ16sBGooAFmF39kzNpYd6MHyHferpq33doGDXkWPbeHXdqYsN1hWQ",
  "key6": "4mUR8sTyH61yosnY4kFBtFMhGSS4KaMwBw9rRLasPvjXawuFZkmjYpAd1933oR3qj3Tfim7Wjoek4dss8Uff7EcX",
  "key7": "2587RoMB4UDVQwdDbhrFBFUrqtAZvfNYvftavG7abRVuTEyoUBcngQdpBt441ocatWkTzmVQoq4HhiY6u496tokd",
  "key8": "3kDusjiEXKaYx7x8qTLaohYzhHWBBrFvbneG6fyQWuGrEioEQ7wzeo71TYisuSfGdNsS8HNqfNDmxemaB9Jt7X2X",
  "key9": "goNrkAqe8mUpmmCZCm2jakKiYrYRWjbcSr7dBqUXT8FxS5wsPaut74Mr4oJXjQ6CrayVReR4cWPGVaViPviAX9a",
  "key10": "3CR95ur6y766BmigZ8QaiKREuvwYxWScPuW74n4jkdLGiPKAAdsnLj5H7mvrKLpBubjBebaEiE1hfAosVzFAaFU6",
  "key11": "5kk9XnH7kxppCpg1Mz42c6eU3jJvY2qWTsCBmTeCgRZfZUxxZBNwRReFwR8G6zKcL57FPrUDJh6s7UM1GoQLUunM",
  "key12": "Z7CagYWWRWJGKUQAuRzDnRxpnx68Z4CmXp3L2fHCm3S9xEyN2eLYDGHcjKmGXnN6ZDKVfEMFJdtPzXoFiSzBBai",
  "key13": "M6cUotLe2QdooSCoY3assCTnzWvXVUhHHh1s7Zmdyw34BWgAbVykiJghhWks5pcifwtpHagg9huaxMTtkFdjLyx",
  "key14": "61BuSHK3Wy4SpRMty5TxRc6uhWKujhXHyjtX62JBKK8ENZaRuyMe36yHFiqU7wZ5VKwxKMwmfYvmFD4op4NXM1nY",
  "key15": "3tpYb7jtt953cj6p1Sn7YoKFfxYApwPGPeT4eVuCGPEWoCJJg629pnN3EpJgsWT71GyDun5dZzcg6qLRb1LC8RUL",
  "key16": "4boBgwodWUqxoN8zFMJ1XYmjm9VCw1saKeKRazUE9eUBpfnfooSR2FjtrDX7daNteYs3HNcM6gAzrMHfUEtFbJXC",
  "key17": "5kntifkkwveNb3krBfpsKw21kcayuAzzt6poCm1RD9gatknZ5EKXmcjLFSD6ohYp1k29BfU8Ta7mGMjUB4ufD9LB",
  "key18": "2ogELQCCANY6QoKYUL4ZLn9n1nhL1vEr5sx8YSsShzctMRKLwyoburudXX6aP9d3vDZjUQ4UJktqFjPGqEEFbFQF",
  "key19": "4G3mtFrpvtsMHeTVoh9hsEdMUSJHcd6GT6LJmiYnDpTeFojFc3yQM7Kq1ZSUsX9cuJBkL3TeuYPQstUqkERUW1jx",
  "key20": "45A1DZgVjgD2ibhH4a29fBLpUmFoZ36RNpS9brvtyiWZYy3J8sCz9yjyhH9XQixRbk1f1BjZ1CHn15P98B3sJqvP",
  "key21": "5rZR3WjsJJ7NnwNLEYXGbPJHpBTyinmt4AuWLgUDeoRrsnXZLnmAhhStQyyPwKyo2Lo1EfjDpgMQLom1tHHK6ji2",
  "key22": "46jYv2t7NRtbGxFHFw1Us5X7bTW6HYWooCVz3GAWZyQQAN3gZP394uoyE4QEc6DyTuL5hrxtGATN4tmDsM6SDoau",
  "key23": "2ZcCBzwTd4HTyX45ZLa3Ex4YiNQGCnbDTeFNXKkotYHYGjngNV6DaafXe2S44163LWW9tenre6uckxMH7XBysmow",
  "key24": "4AqWnacZZ9LsNqXQvexCnFFaFYH2dhtXpgkQhuuRiUzTo5Bhi27dKe985iatKUw3KYiTJ8rFAQGe5xAoVQTZZZJf",
  "key25": "5U6HHgNh89NShiGGtTVPmuaNH22fQs1jtfQcxhvFvXY2rafANqUmNXRs8sLQVxmM9JL2LsFoRVtp3jdNixSPpZUP"
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
