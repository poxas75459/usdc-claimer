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
    "4fvvT742WFT3d7T4fSzuq42k6xsjrSWquTJ1eAccWQAeieb8AfFQixJHBFSc32gHjDThbLt1may7JrmnAxZ4T1Ds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iC49pNhDPvVJHKJyGJf8677g5DbfjKxkXay58EQSAE3ZFzzXxqW878HHUrBxgTiX71f71K4ZeRQjdzh9rbCm8b3",
  "key1": "53obUzqTPoMmhrdfCbECVTsyg1AKnXH5hEkiMDq4QxXDZPdMA7Tqzk8S2red28L8N8iFyoXY6A3h4SYdNhJK3b9K",
  "key2": "34HPmEuPz9CdEzaX6tjUWNLYLfmea4uJpmFdhMhvxFgmjj7cwgRX2KuM9wCuep4CPTv7mkebx6fMkxGx5KXijmv2",
  "key3": "2bLJbShsvFe1Y45AoktK6dDkj3yMAvZQye6hEXQMcXrrX9MbxxFKJxru422NphHhj4EMJ5p5uyUKZjbK53CtMriR",
  "key4": "pitQFUYcCiKVxQ4Ca7vanqksB3A1KmzkFRK8tk5DmoStHojAHo1wZNQ4pfBng53z2TFaMEcowLvX62nzRCFbXAn",
  "key5": "4Ro5TG9PhfJoTvD9VzHKaJYSDMkSvP1iW6m5L7A1SQqWDFSCQoF2raNfds3pugp5wtL1EFdkC1NRPRDt2SaGbihL",
  "key6": "r6fWEYqvASzjR4qjSfejWCuyFLbXNa3B2Qfia48ZrjfSu21JEbwHTf86F6CvfRif4FbBrNS2YJzCgD8coh8GmWa",
  "key7": "2wtNDbSJFna6tdCgKAgMAn8fK1XsoZJP1exLq43ZCYDfuo2Q2BHBHxsVSb5A1CSy8B8CHJbQ89nKmrNTTL9DezWh",
  "key8": "23CoamouUfphwJFDsJPHycHfhHC75XcdM1snNjrBKDLtCzRJ84VuEurrmYGgFnuVX7au4nANxvLGYsBXnwfVFN3C",
  "key9": "7dhUWgyb75YcsgPJhRrwxofcJHo8n3sqgM6yfjnDbbQQvEo4s644eD8wmeTuARc4VBLZkFG6jkgYhux7aJabfYh",
  "key10": "4Bz1WrcydB3T6YQksHydHnTfy2CvUsKfkqDeRchWYqoF7kVzhV7vXPawTAEPjhdTwu6AmaBzyQx6vEngM6eMKwKr",
  "key11": "4TNjFJ752YCuP3XtiDhyb1iDY9z1aFwH97MmVK1zvRwEtsnGCHc3Xi9W1hovh58efk5oL4L8PbKvkjQjS6Aa7335",
  "key12": "wf6y9bLFDuBeYwk7d7D6ijRMw6A2yuEvdq1F3KDMvHV4JZ2fp4wn3ZksEQ8R76uDnR3tDK3yn5vwgcLhKd48Uey",
  "key13": "4Q7T8mKUuwsmccLVtKtCnzQX9XrmjjD3d5JaqNpqgQ3jFHYAU3yeibm2SHwq84w736BfQUGqPdDCdruFbpj3uBey",
  "key14": "nhyVd6xPnh3FmA31Qs1MaAGuUsTUVrWNPXhNektk777WqA7UKieax7V6mXc3a5m2dvehUVutJ1n4rhsZmdaja3o",
  "key15": "5v8rfcrodpGTnRzitYUdEy2BAYrLVQKaCjjftdS9BJ67f9KRBFrSLHpcctgcWaNe6eqhxfb9U6hFWrxGeKUaQ2gE",
  "key16": "5jWdK2aRA2TUz27EhxZxeXa8a25Agx3y6QQSfPGT9aEEkmUB9H3f7PP7S1BTjgVHLvGWMxpRwjR2aT9GA7RsLuAQ",
  "key17": "5gEebhPUar83fbqgHCg3ZCsJyuutPMfPytnHdzeHsjNvGXGC3ieRFxzGgxsJF26cQZKEkLDHY1taESdsoD8KQDJX",
  "key18": "2JRdKA25Krq7HECBxxGpVrHLQ24GkMQjUAB5NeAFxSmXqxsuRXH3x9Y36YNaT4Rq5vFFSfeB5a9yVjYAnpJPqhqB",
  "key19": "3XRQN7hB2BePU7KBBCkKQVLQavaECsicm4PXSqEUzBPW2TYYAcxLufboAy2GZ3sUPZ3NQJghu5Yfx9uNugySaS5s",
  "key20": "7b3sgn7fQVAumYg47sVrG2GECQFNe9nzF2NnMWGR7QTPBhg8cJ9MynCGBNL6U8H8T4MKZ83rdmjnkdkAtjwnzEY",
  "key21": "2MzrHVe9WMEtK8WE6Yayopf5oJHbhsg2PqcmgthfEwhSrD9CwSHbCEXyryvM2oQPqQzqGogVnexUFUQf6U3z52c6",
  "key22": "32XfTegTsKZQ5jP2YsX1e3WUysFbzLv8uAmpCaqdEgQ2kLbEdhBZ7ypk5PgdceN432LVAvgKF7muYSKW4MX3nPBr",
  "key23": "5KC7pzNL4x8PpGZqgGmh2u8JuqvZpjcNMMCM33yPko34u2kZmjjPkVe8pGJMRLeDzqUyAvKgBvXEX1wWYEN46Q6i",
  "key24": "4XLcmkdyFUuu9Qp28h8XUT7nhJ1rRd3c6MkbpuxemcJbK6br59eL4xxA9c8HiTMG7j37SPEdvotRB4VhrFYfBQ8z",
  "key25": "2oUmoJjJqk1wJMqwYkJMF5r2Jg7sUfsLHEpSFfD3Zgeq8zAGPV3cppLNJB48WfhGEu3m8h1qaqvn25MtfMNYvKcR",
  "key26": "4U9KW6mYy2Zm4yNpijMJHEC4zaYQ1MAKidspVE2VmWuf2hVWAVSim4brsMgfknxNWSwLAWjZnZdT8vrSKCyJkW4d",
  "key27": "4apunMggUQjqddwLaptZ47oVNvursHm1t81jYkRaQaLnZP5pHi8ZrgmEjZipCxB7PuXgUS628rfNs4bMorYTrir9",
  "key28": "5Zb8uPxZG4p3EDyTRf55Q9PrfNkVBW1t4xNgf7gK3HFm7iv3JMsquDeUr8cytrcxsnsYCPodoYyg6hUz8awDbo9N",
  "key29": "4muUR53NZSg2erCryahJqZjQr4WYpjhgGycRe7LQ5dE5eXHCqVioiTsuZgjTL3eZSVjoieLQQ9dEPnffRZirGni7",
  "key30": "4qXezyXhrLpDwfwi742DTezBinGf6mkA6GgyzbNuTpn3gyJSMBPyCsims65iTGzb7XUse8SbMBtHyXPEy469vTYx",
  "key31": "2UiN9mvuF18HN1T5pVhHw8QXva7znyUJYmn9Hj6BaHWM6axQ7xV9MvvvPvNE8SMdFJuaveuKgP37UGPEhsQj7FSn",
  "key32": "53NatR1nqyXbz5LFV7YGkxqvu9ipWNHkG5Xu39ZaTL4kBQeLjBvM5K5Vgu5ioQqTvEWRphMhGp1NPZ26zXnS6w6p",
  "key33": "2hnDYKTbnJWJvQubz3ppD7ctY4oy7RSGk49qLMUxwWArePcULmbgrfQNTRztUM9gkpt8f5bMu7hEpZ2d431BGVb1"
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
