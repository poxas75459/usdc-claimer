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
    "3jmCQ57xeSMzb415uDS9mBgfkANz6dzPc2sTv9VsGwobbkSTPSB7Ji3CtpSb1VeAe6UucschR7zhf8yoLe3Wd1X6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ya5ip5LdP3ZWZRzegbT5iASepB3RksYyZpPkurXu7wa7nNP9YWfTLdVWrhhP233UFV22sk6h3KFS87m2tdURzhY",
  "key1": "2yxvCx8HV7rxS258pwHkKfeTTdXAHg29PZ99j45aMaDExe3KX7KX2YE2Ug4tyCjBgKCMWDCmWtp2g2swcgL66PGL",
  "key2": "66sxxHCjLg3XeJY7cEZyLqFYMYvr4mwmDAgpzDEwAvyTwmVF91GWWNieciCw2229xDWVT1i1DP4XJysutpp1XRcR",
  "key3": "2rhWYQwgQrfmL3eLTh3JTspSEkcUDLtTwgQyJHttLvRKBzNFVrG4SFZsG2duiWTX7S2gT8QRUJjASVy1t5mZ4WaX",
  "key4": "4MWxRpmiQB5m6HXHMbJYQApyRGQwwFQdECMeACxhX3gM4nJsbc7LvYRgj93hC3srsPyj7GcTwKbkSB63S5wWGcm",
  "key5": "3csMffEeJqwtCLBdcP3ug5DHh3eUSSE9ewXSTBDNoh6CdM3nff4vNgj8Unp3ikrXqFtnzewr21511QgUCU79Cb4v",
  "key6": "5jMgGjb8YN1wyW6jzYngHh66dqf6uswg6NH1XfwxjpyT9sLAhuSwTizesNnp9m92L4BJth2uBufF2WR7haGqUkUx",
  "key7": "2LEWfojRFSRw9cFLkAwSFW7CZAQGFCjEJm9WvowRZvwjv7cmMzevqeP6pv1yp83bomAQrfNPhjg1TSy7qHMLZeCQ",
  "key8": "5yGUemAZ7xVWFsmdzAQeWex9YTQpBNTHqYfij14kdhdnoUSDHJ6bCxaja2qYYa8XxUxjhSHNqx65oFq3jfR4QkDS",
  "key9": "5sMKpxGaG5YXDSqCkVZrQjrqFs4vzWDmTZfLMHgn5Bh6jskLBR4GCoUYEwttsoCWXVCVrke9knwDo2KQeBuyGbwt",
  "key10": "2ndLsz33DCQbbfcKtnzgU3B2s8WPCbnGDL3BE8dTNSxLYaCCb7GG98JXR2cnucXGi8kL8mDkvsi4JpwH4rk4hXm5",
  "key11": "3Vxoh3KwtzLfwg4g9pbotEAzjfTz5uBQ7bAQVhTEt3hp73zc2GC2MQi9Qz6FBwfGNyUKLgYroQDhHPb8YCkEPJNb",
  "key12": "4Ho8oDhwmquT7SZjhMMfQUxMAUh4xMC7eJGvUXcmRv7bnzLCgMCd7X8JqaXSvdFK2sXbJmqsPpJwwKZb9pKTDscy",
  "key13": "4MhsZvjHky8RgTMoBDEbh2j5FWNaiTmNh97GCmxfh5XdxkMf1p177z8UEN7oSNVp8es1AD7URQtHcnAPkDv4cwe3",
  "key14": "5gB5g3YyCN5nTivZZhHm29vnGa51AdcfnhJHcxwTJSawWSBNm8VTYEeRT49bX92Agc6aAsqWz77uYwZZeCvq5uW4",
  "key15": "4EDE8qxHtgcjUmfz47Ta9jrBhrHutWhwMmfk1AkkjrVoetxEttGX3TJnRHxwiphowB7d73GdsmveE4gkWX1iG89D",
  "key16": "5frzLHvQRM3WdxyfSe4xUfKPgQyrWwSXJKejGjhXworiKNLGKHbR4NK8c38XhuExCq3MxJ7SLiYdagfGq1LiGb9N",
  "key17": "2sTx6wkuizTpeiuF6xDj7gXKfuMTauZMGRvagadGwVaetBgTnf6PhRTSS3pwhyGKgEYg92DKJiFLVdbvduT278aN",
  "key18": "3s6bS41eP3rUYBjgKbM5TkP3EJdHKmFxSWL6rQFrJ9KP4cYBRGTKsCYUj1Y2dNPXBUFSrcEZuQDQnieakeRASWjo",
  "key19": "4f3bnMyA4QtLozuYAVgJC8Ey5mm2m1P8DPPsKPphsNiU74JQy4Cj2od9qVJSunDU5DAuZ1SDDEyognxPPJZtnCLh",
  "key20": "4LLnxPsUentFDFJtHusT1ktXi36xkMRbwyupVwrRBF7uG1quYa4z8cC2UCrvmok7fAfEtzZFn87HKNdT67muRjhQ",
  "key21": "2njPSxSKonpHJBjjf8H3Q6q8PGQxhRRK2H3f6RQ22PR6KUe5g1ccVs75kHWLE7wdqwsJAZjbwwotosxLawfCCYLB",
  "key22": "3pE7BcN9V7Tb1WzZRLmJKv2RG9Jukmz1VyxWAPey2wELPxANmdLWZJfJ6ti8qkFijEbFyHmvVsx3c6LbKkwA4iBh",
  "key23": "2nz2ex62QLUsx9A5trBdqFyDrNQuwcvnXu6PTxs4gmpQgP8r6VevQVYsu3pa92UnnjK4VTXQDi9SHEGcntLxdJUj",
  "key24": "2m6NwQa3yVryjCvqTLNnNmNpCCRL588DqfRTTHJZW7FAVpRLn4YW1B5SB5CXxmu21DoYBKydbDmuybYxWCU8yHDf"
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
