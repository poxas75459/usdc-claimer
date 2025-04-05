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
    "r6oW3v3a4b5UZ5hYkpHigUKQ5mCpSrmsX6JGa5YDXizo1TKmVdZvHdoEdTAJG4d8AC2ycr4S9Dkifc8wzUAnZ7E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bDssbDnMZmCR5cqirN3RYnPKrwyyxU6W9zBkCEheeSkXHf8sUxxT1cNzLVMr5BVE9VxRPGune9GNx43GzsJWkm7",
  "key1": "2exhMeA9tYGcZY1fhoh5Yido2DhouzxKENx4qGAYbbMWQG11CZRF5pPHVpV4ciWRSdhu7qsWgPynkkx93qrvPgMC",
  "key2": "32vp7ydHWQtxXJ4JZBLU2tr7ajq3EbpaNckqRMxdZnifofsufxCrJwApW47hFcs4UTR2pLFBztG2RZtBtHgTLn4Y",
  "key3": "njedGJmQsTUPH7gJyttgZTBjxkRz3wXH7Gc7H3DYb1QBq6hCgcwPgL9wT8HebQZXToEHKyNUdLJkYVXheTXBdZk",
  "key4": "4bwZVmpy6KtPc1vXnL4oqgmyuYYrByifyb6sZbC7BKXswbbWKCGVT9zB8F6u9juVtLiXKuPhy3JnrP7TQGTgMJGp",
  "key5": "5XHvQXEkZY6HRBVvJP8AgNVpoiRSfp3eWhVMkv9yDvp7APujq9sNL41fjZiXKPDbS8zDikqZZWbd2hZmMXdGtVJA",
  "key6": "4eexiRdUcy4dDhmQcMimKCL8mGaPsLnvEQdEZN6xkzGWnFSgCEwwxteTSHVyYzDMg7sDNDosPkZjTR1VtPSkNzET",
  "key7": "4jny2yeNLDPMMaz8nPgJNvmyEqwM6cDMxuhJLpv8Vmz41GAHZsRr3CBdL1qWyWxEvGVixkFPTp8LLwT3rwHcPK4e",
  "key8": "2hnAE95dytuMWk4HuufSK7MGPHjFuKgrupdurei8NuQSaU8W822btrtLNgYqdVxJHGDfVizPXBaN1KuCWkhBsE1B",
  "key9": "5Bqho7Mw7iDA1KdhPTSmKxpfxaGqV7iGQDX99C4MqJwMiNQAe6t4s7SBNj1o1WZf9wtrXWiQnx4o2bZ7ey6g7DfT",
  "key10": "47zFMoqSNxbhyGcosPG8Nyvg3mdLuqr8q2tirTh5twT6T7DgpaMBy5kspt2erJgsx2KsK6trE44K83vnEYkvzHxX",
  "key11": "32jADqWkQ3DzMPTi1mYMv8DA3mV2MHzDFKcYGKithoeUiKXVS7GEoeT6emaMStbDCjtNjvaGPPreEQjg9nESmnFb",
  "key12": "cuKbXMhgfjivG5j88RoXb5R4LJ4jH8GpWDEqyBZwX7PiXp7jEbwVfpMScUeUVqLjNFaCYQx9e9xZwXL8mJ22XVE",
  "key13": "3VmpXnBKpZUHTwtFaQthgN6VZ4NtgXRovtxYVwmgoDxSG3kCZweFRiyXNhKffcBDhQ3ySMshiyENE1UfhFSygtVp",
  "key14": "3G1bgqqZmsHHSekqnE3ody94StiqSVA2Kyt6GbSi65m96GaLx4szy5YEwBZMgHgwo8kpLMqsHifxLwAMNpt7QM9i",
  "key15": "4UBqbw7F7AMzSN9aSZUfu9YpTtFS8osCZVwesY7T9rUivroHGdLG5Pz8qqPCKJqvT9kkNHPigocki9K3h1985wem",
  "key16": "GmYeZfoJgsomyKNwfRkr2Z6QmoxcqTyAANSfptSbrrnyciGs7GTwxT3p7wkzMY79n6mQ6cXEfJAqHwTqeLZB3mn",
  "key17": "2M9o8XpMMM5VRkPhZVLcrurJy2ccsbxbQ2duet4MWYQHdxfvkQq22adtTN5yXpAnqFvaT8CAwuRHkLZ2bBkys1Uy",
  "key18": "3vnrDNuV6kG6uUffApVZFty6N21ALi7H3mDrohz556EEVBexG7WKcbW6UHpqeMAx4bWP1jVWsDA1aM92KdRMQVaM",
  "key19": "35cM4LszAeVSeorwHrBiWSuJHLBmV6L78ZnPS4wqq63oPbR88LNFJnVGfzvCoDtgh485S9HFdF7Uu9sNeWqpvBbU",
  "key20": "4Rg4pe62XJzUiS4h7K4qKwK36BKsx5EDjuha2zufWqHeZxqChLb5a5ZvNK15X8UkSoYWCG5ymLEVQkPZeBSDGs1n",
  "key21": "2bQ4r2nPFxKz9CAQ221QHH53rHxsfgi62gnWES3WVGwNF8sBazkQVwcJJzPv8t4RmvC3Q58pugLNMdrZzh2u1PDt",
  "key22": "S96katP1a6vS4652gjsykMrUFrqKWypWoUG7mvMsJr8gWbJydh6p2efxKAYMsRZQsrLAFkNxGRtVf96hAg8KUzy",
  "key23": "54in8ZkYoCx6tuBr8vJKodkTzCGnCBDqX8beLkVRr6wHdqARnmvo9oFqSZuLtYWgG9gen4DQnuVA7TdwtDLefNyf",
  "key24": "32E8SmfMBhXaLmGKU3quzVh8nfg3oBfvdwuzq4P3ajGkqUrnzBxXVpGcwUZrNrkMxb2KVnVfgX1ob1iDLBfwfhJc",
  "key25": "4uw9kvSh1o8ZJdnN1mpyWhzY2Y8DtBNADKNr4vS41FMjisvgQVCHyVpaPs6jzfqACW4BpjosDTqkWU92F5nhyGwM",
  "key26": "wVLaD13uYuV5FnVsv7A3eAQZamSjWudJcsRmSUWsk2mEgUCZu9vcCFpXszr9DUDhnabJQLcRCJi4VGHRnmdjhTX",
  "key27": "5Nv91gHDvqXZdVx5AGSoCb8K4bWUup93eNx9L2N6eBg9dfmkBW953gWhArwxsS47pdeJYMtDAgXNxV86PTTJ8yc6",
  "key28": "3zkfBsMqGyriXbzF8e3Hhjm1tD4ZY2R6JaNxGuEVRo6yB3zXPh3yA2fwBTi3MLUbPVH4iRVesxN32zjwN8MoTL6m",
  "key29": "VrWSLfit8X8g62DWYFfP9VAJkWNwE67pTrEY8HxM2Xy5cmM5Tff91p8wE7FDgUW3VCTkePjBMLLGL9YXLVgdwCA",
  "key30": "3jbBuiCfhNmUc9fnVA3cscLXEzxLksQY296MnoGbNCvLWBMoLq18A71a6muHuLkiKD4LDL5U5MKJE54uceJEbkBZ",
  "key31": "5ZJ7npruD6odu3v4mUFuy9sRrTUqqWRFANL63rDq5Az9URved1o5tJ4GeZqQRgZj8oDUGDn7Bz5RuKwoqkZDcwyM",
  "key32": "62mB6DCnHQ9tjCpyfgo6et7hV9F92wzCTzJkpXH4ynmN56bhxpjzPu49eMbR4zT2XFFZySehRNrHt3VPcPd7KycL",
  "key33": "z5m1jKXkn3wmpcTqMs8zohyW6XqTNhe6Cujtkdz7nLN8h9FVSMi9n6cdAfkVGhJjZRq97sUxK7oEMVxNGZ8B1MH",
  "key34": "19B9JEwSJsmLy1jedhCsZz8ZeR2fPdYiu9FnQQihjPGTsJcjqXmuUErcg9NZs92sKX7rjQ1WNWg3GRupJQknSK7",
  "key35": "4LViawwp3W3GqHFyMTuYf8mwiUerKd3tb7fGm2J5isBy6T6UHRqDyZJHXJuv9jS6SCa79vL8syNpXatLECuGuq5v"
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
