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
    "5JfSeEH4iwuyK6K2jUfEpMKwbUKGssfYTHnLmbMCxQorCRyjLfK8aQ5vQ8mKbPB8BeuEUfNp6pWUZHkhBoer1F7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21CrPhfnQ4qR4EY9H6e6uuuwodkE9UvdrXj4tsZt5q2kGJLMe2gvwqAtgoivzypuNWqEV1Tin77xTdh4jdeB8eHG",
  "key1": "4L43sjXsoP79b3yjPkWKhfQGA4nRHLi9MiJFDt3XyfKBc59eJmarrVHAvs7hJdEfkmMuVBgR3AZ2CvW2y6774ScP",
  "key2": "5BBLq7JtVRXWeURX71EttRueMRpu6Gq6oHwm9s7A555sja1AGdpEBvTYVksc4ikr7xmn8jQgrnviBAmKCWQ3U1GW",
  "key3": "3hrUSHQeVRGVPPAsJSftMTs3L6VNmYsYRhP8Fc9vwpuSvSrAg4UTz5LFoKAF2YQSoxw1cuCwisAQuZHfDrn3yPCb",
  "key4": "29yrVXNmFwihVJoN2BTxA1kFE8mGGbRXkKnAiNXbdgQZmgw2CY3oUjEiqq9gWJVZzww1atsynco9wX49qbufth3p",
  "key5": "44PCBwGTbusq8NUDXUewTnPUfREaEYpKG6DUkxyseT9kXfkG8p93mSw4ddnBwP54Kw6PJLj17gB7vavJVwQun38T",
  "key6": "CEK7MiWP9LE5WjeKHYKBypkZ8vfE2GYAAWLKRYjYF32TCfB2LXNpf18MbkUUvmUoz6NRjPwWmzyqN6LBNENQpwT",
  "key7": "5qkmYG2Kmu3KTjxgo8HLaNfr7rYhVMGujv7L4ZgBhGWGDA8B6RqLQcUm19Cjgnrke2JHtt5xsMbvEZ3MjfRDHg4m",
  "key8": "3fmQwB1jKsiZkhmUkmQiZLVKgJruMvDThg2roYSZnn9hFd5VVKYAjdBfPbFiAtzffu1LW9iVeVKGvfWGNazs8kUh",
  "key9": "2GE8ZdGYrF87Ls3WE6UhfVFd7Sd6cTLEyf1sdMwT44RnM1HSXq7YaPyYBktbmdntCgkcLVRxGwX5p6rykvP1rUJF",
  "key10": "3Jh3ESvp8Gpf2VRL8dhE2EgUaxgpqV99v1DoUEsuQ3TBborHvHrxtiz12FnSBUf74v8fMa91dvB3713sDZddiWwN",
  "key11": "iojScRCFjG4XoxTMJ15XdBxCLd22gXZSkM4nkZWE8RGR9P6oKfjmFXW34fjy14RA14eYcgU5dpySaGGVp3Cj6Hb",
  "key12": "2XPY5ktsxTV4tN1SCk7UhNazG1P5TSrb73FXTQQwxnUxnwvA9gUVwBEWfygySEV8fUrNz5nchgxmyUY4viBSm6Q6",
  "key13": "5RuKzM1dcuEx4A1MAbie4CDUByW9iXxgNdANJ2wBuwS6LiLkz91KLiFaAaYhnfwiSWQX4bkBVYnXGLPyqZh9GApE",
  "key14": "JnW4s412uCsLFtBDCRyJ32hVhwCSTHHbiRAkqtsy342nZQjAnj332iSxtUq8WCtZ7hDwLuKb67RNrW1gZGxgBEm",
  "key15": "2ZaFwEAVn5zGSE8tb7TX7cbcCudBsCGZLsnXDnr1TB7i2bifaKebTpkJsLRf4SzigiXoY4GWnPJ2qRbFy4iJKoE7",
  "key16": "71WnLtNGPcdL9SY4UepLug5NnueAJZMD3RwCgJZjxrqy3uGH52Gg5hADBifyK9kGQMeaZv5wx4NE1RSBgnwSmZQ",
  "key17": "4zrnDAfGoUvGvJBJE9L5TtcbyFAovuusRERjPEKkdaQXiGnDE4NW3WSgS6fZsvjUTN75biKCKHda7wmDLLCB6fYZ",
  "key18": "4XUgVP2xK47UQzmjKRa7wRRRaVeacwxh48hDDZkuP3Neqn627TCSvu2ZcYyFKV1MCbUiDp88CdT6ZrBrjw4Xk6uw",
  "key19": "2BVt4LZXjoeyjP6SpyGQvHkSnfwgNyPdoWAEJAmfxSoZchR8MAEeGZXdGd1e7bx6cpzGGcvRudcVAm25r9iKnQwu",
  "key20": "5PwzfjxZhYfr4S3y7sTQt8NoZZmuJnzUfKaqneNfStuN3Fb68e3tn5uKCWfGnthGeNPSPDnetZEnwWmG1HdUjoac",
  "key21": "4fHjsEAhrUzXGDcvciaFJoWQvRsHb7MyHqB62oUDgxjMSpGSjJrVFAykAAkxFR2YyBFYMCDEhKLNC6CLPFVc95FE",
  "key22": "3YMCXhqnRqAWMtEyN1DuqXBo58nbPcqgXst7we8Gf5ehYgQoLm6y2Xkr9sxSdcjJTjFymkMFxQcEtXXKG6N3b3Bi",
  "key23": "3UwJ8faT8xJhh7tzznR7MAHNorqzmVhDbTXLR9PEWQQS7xehQ1JqXRNbPunMFDX89Py7PWhVndiEKrzyzVcCYBho",
  "key24": "4en35LCeEVhTJgrTRQX3QpPiNhXcrKci1K66sFMciDj2KbcdwxrP4o5GhrWRwTkGg1wHpGJx7YRkB6hu5K1wT6C8",
  "key25": "4mpYfkCyMUeoHW7tmyKaNhW5T71aoDm8UxLVa6uvSQZwuUaCpcqpVUGkh47JfXcQqxPyrPHReNqFwpW43xNiBTgE",
  "key26": "3U98XSYx7Hu6VRHZs8RcMzeWkHQQAVdhNCgSU61P5m97KkxBNPnobmyLxHT1JZT87qR13v2DwHLm7Cf69i3fZnKi",
  "key27": "59qsGxBEk2JVZFNmKTtmeiAXfWFc7kwbKEAyppB6pcYANcpwxf9h2baHESMinNEuAt2qGWcA5hzRLkybJBY16DAJ",
  "key28": "PbYsaZemgjSFMKrGSCBpqVXi7xR5FGn6zP71bJb2bsVGQq6YEJkhknBEdKNPtW96skuYm53D6e1VrZueF1JFajD",
  "key29": "4GBucSJ4uoTeepxwfCxXgg7S5PkJfkL9mDmrnwS4hbLsaT39zMEixafS7jkNcXSFAEc32wjMoYBfTdyhvmJrqu6X",
  "key30": "4QK298AuwdL2AYm7ex6UMUExyKN4t6eJrXm81JjnFD4d1XK2Rxyb22U3d41KjTaCXSirWmgtpMvoBfp1avKHdYzz",
  "key31": "3RyKAYMY5h2CgXnSuxcy3q7Pc9Jhz2PB4xmz3cgcnyxqEKnMNRZvsAph1wGdtFvE1M4SL2wjiAtaFvZcEoaS79Ev",
  "key32": "2Q24cBgZ72PxTWHp6JHHzneVj6oh2gBHokC5aWGpdXLP5xFe4uNdsYtrpYDhp7kyEM9RR5fpCzWSZ4CGpvVHPoDD",
  "key33": "3qb8xX9ixGyZHMdZ9jkRxHdpMYf6zVUE1M3PyqyEmdppxKNzrmEt7qqn3aYgus3TxPYut4F7KHighob6ttMA9zwz"
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
