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
    "5YyR9T2ZBeCugy6EjDaNo1qHQcw7y7YTmELW8iaWX41e2jNdFecnXwnFVqCt4cTicNHkSHZTD1qdVgdCoSoVGwwv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FdKhT8BCUtAj9Nd4VExiCoR9wfouXb3ex8bHzuCov4dWPrRa2SVD6TCLkfUDMPDDtUmjshCtsAB449edvVvKDnW",
  "key1": "2zENwPWSFMbAF4qVgLPMbui2Vyp7HjoVxwj2qDB8TqZkHBCctKRro3cEK4cNKXpoYPYzRiEZwL2WbmuUrXJKzc2K",
  "key2": "Dz6Ppn7WchmWv94bphzyKBaNiBdP16qFAFKzD5cEJpwW5cTazAjGPQrbpQH79w6BFo57PzxPNvA1fV2PuQK93LU",
  "key3": "2XsZcUa3zHmgx4fu4rTucoExpeRK2MLVBgiT138NCSkq3MVZGWtD3vxkjEDdWpnRG3G1QYrh3qH8n9CGwjp6HVXk",
  "key4": "4nk93M8MHL1X7zpr4NektVohvWsdYvThPY2DTAHtW3r44Ss13rzXmD7hn9qwGBxF7Dv8fRwPu3tyJbuBsDbp5jrS",
  "key5": "2Cy3SGMgVMaWZaSRBi8HJi3dCXWw1V7yDhNT793UmS5Pm4kBLHaKBXxJ5u14U8abMj9qkPYVG49EFiw2UBEnQehh",
  "key6": "4FqDXNgvbKDAkQhEfkMwWVHFZa87bVJZyoiWxKfjP37YfeghgaaRUTcqme212hsedbU4N5uA2V4nWNwoeGXDLsio",
  "key7": "4i62ruve36634KCu6hwEp5uHiUgAiJ8J2kswHzoyfXcC25kMm5VBRPEEpLYtebFwXsVvy4wt4nDb8u8JLjRJx1PH",
  "key8": "4ksU4SyUP3wad5TKwTey3m7HAkH5rgfevNRLftkwoossrx97QEnSrK8SMtKaXETt7R1gBadLHa6KULUagtKfgLx4",
  "key9": "47cpPVGC7sJtW5A8J1XtM5KJaz6BR4oT77V2s1R3Lgfwcttw5eYCXvmBybd7MShCsgrJGPQ5UVk7x1m6zYGGGdcs",
  "key10": "AEkaKE4MgaF4ZaWCbohQpVYq3inst5CDY1vULS9rrtFR42iZEvymndHSF7GrLdnttieembGeR9gey9hpk6PoTJ1",
  "key11": "5hWZbZvoepre69qncJzeX8xyNQiG1nL4y32FwryFLwv4cxSvNuJpBmCvBCACFVC6yXSCYiHU3QaFuk9rDg5P8Up1",
  "key12": "5Bvr41wU9Pqgyd3CVT5P3ohFar2Ud4Gm64tXzmm94Yr1woAgehb1eef7atz2morqUoeDsQWauHeHWXo31bYTcj8U",
  "key13": "3bWQu8SvpEqPhdvzdqmJk2FWr2MAbw6rXHhrHs3aCBJyNDzS7FroEmB85aWqCduyLxjFbbT411raYQuMeKmzcXLF",
  "key14": "2MPSU42a9CVLoyLyowYwY4KD95YpbrrZWBTruMaijQoxUig2VmscYcSu4RF8PLRaZhwqrcHoPw4CKniqixy14AX9",
  "key15": "DzWeiyutpQLdVCeiYHVQkFbsbM9EnGX7RHmHoX5GjAgJwSZK7dRRvNBFRfgxwkZX3iYMP9814zbu8Pxgn8efHm6",
  "key16": "2BE1hnuJDsqwKKEyjkH3YETPTj4tLVGwoNBCcHAj88GvYrwo2hKU4XP43ubnst6iLG9LaRFvEeGvjQz8Uf2XBeSF",
  "key17": "XVr1pbjGYKjwMEHqHDFCcWEzm1aHa4vrkPYQPY9DordTeMVJ74sRUGP5m2xy18mWBydzkoxkNPQPBuJDQeLbAuU",
  "key18": "4nJz9BZiMXhxiiLuU2B86QjHfESpXRsw2x4f9f1Hk8cbqt6NgcRBkGikKYwNspG4zZewx6fiyqsz7gCGe3cYnthc",
  "key19": "3r3YZXEZRfxNmkqopRpGHtXKNKfVNg26DZfbGdtDJt8TmmBGM7zzmK8m4xHHBjz1vhPDh1NNkX6H8mofZ38eEyU7",
  "key20": "nwonXFq96ihFJZ7n33pwoSCUNU21uKSMrMgiAxB7zgTEvWvvMbjCunP2zNPVjXKM5J5h4W8kDEmR1zvbhhyn3SS",
  "key21": "4oADKRsZZRpH5fppbUMfTeaQBKYtEbw2zgXVjZNZiojwPQUEBz5ayJpxG9uh2XsBHP9zbgLLnLQes7dzjrVbnwzz",
  "key22": "4BKoBCnLQdkvwvUg1avQXwqaP9K6GrjAHNNzwVDKCbzqGPVbXekWkqGPuAaMmRzRs1Br2WqssF4iA32DRykvqp6U",
  "key23": "4ghidZ7qbcLGXT6yWTN87J5UfnNdRhpHFDChbYadVZB3RaPYLLEobBSqbwZDwuWubjteUtSZJooJugdS6BV5SrHi",
  "key24": "3EMiZDFVgYsbvTjk3XpGZ8nu82QEoAN8VikEkJnxnQ3sk1USgu7cUuggfAav3xebS9aq6BiRNUUN1xeum4qNzbBA",
  "key25": "3FWZxoLhWtXaX4QpP8f3an8rcWZJnwoA93K9c3FfNX2wdn29jEkTGy6sVyLAK2NbUBqF95mRqXnNspWx6MsvomSD",
  "key26": "2Vk1nMwy6jRiugHC3vzLcDZFhpU4se8LDmpS8HB2AwcDv6d5Sep69R3EjVGnU5VaVMUE2Ye62XSjUBVUQENUNFf6",
  "key27": "5zYv8oChtndiChmotPzSNT9xe4uXh5sej7CqY2ss82dLf1EkMXjBaNbCctuQn4hPU1Vap5H273omXbwYM7PLSJcn",
  "key28": "5d79WgfTCjyBKDucCiPJsvEZKVK6gCE6eLQFLBKXmNJXEqpeH2BtTtF1o8JnhYVgk1URthvNQXw2KPtj5aFudovs",
  "key29": "3GZ8aHYc3F7RtMhuDccVEnFwwvvJKiVshwws1pNWYgKbubwYSgfWCK46zNdvNedoxTY4DNK1DDdrKNagSWhty3Gc",
  "key30": "NYLjPMnxtaJkEJZ9uQMSAEjuJTZC7t8nASfo7VQy9mwu6Kg2o8th4T1uVvPwW7XyLiKe6d9m1b5jN9A1U7GJYAU",
  "key31": "2D6EwUXbzRxfFKLsU7oq5wJQ4R7ncTnYaxWud4f6RYNXcocu4F61SJP3dnmEVqcEe38FQYHHpHnXoD9BHVNXLBL3",
  "key32": "ZC6ELRgH4dXNBpfmPNaJmMREHaeDqijfSTfis3n36gn66sG2njTf9oXg9GTjMwWwArvQdgjSfQP7jms4hwni4QZ",
  "key33": "uVnvpAhMXQM9X6wRxU2tdxBhFYXBYKoDyxREMoR95o8Hcq95E9aoJRXYgdRjZSwhXjiPcP7tsMnYKCpDLXWmzhQ",
  "key34": "JCrCk96yCnrNDWZbkT4f3sWJuMq2zE1i9LgoSiip5FuBfKNUTaimvUK9mTG5ZBFuvwCJ2DYmJfM6nZaAmvD5j2T",
  "key35": "5cM22nwWNvZ5gbdcoN3GH39pSyrJAZNVoRmKSMoEvawUkBybFv5rm5o1kq2WaAaT8RMthToEkkUvh5NiA47cPX2S",
  "key36": "32ckrJrth3RMv9qtUyfhF8G2G3S5pB5KvZLYj6xR1nZyXkxKdabJyKFMyjaJ1rfp5tkDqdeKfFUgfpmbApQ1mdBn",
  "key37": "3WXHktdDx2CfueUSmZCzqjyLPXDUw3uCgxwjAtW2P2MyQuSrUAZfbkuzZLMhYEfiMN1CSRhDaP466nSVoqKDPTZu",
  "key38": "66aSos2PafMEj3zsi2AHApPpa3NwMHATinEpCoxeXWq9MZv42NnCsYtMm8uTVAS5Yswqmj6fGU6nGJth9KEoBa21",
  "key39": "G7PgWBVUk7NHcZiKULY5yV6sQcnBThK55o3RYdKXVv2XAFSqYNEUXj1rmmcA2QX64h7ZAp7YeNeJfLM6Nz9ET2n",
  "key40": "452xs7NVftVxTAHVkNDLz1VxmGVqeWsTnp77YDVWRD8CmjkbfkumhVHUC1dygH7rS36Dxy3x5EELkjW59LLhCGSa",
  "key41": "4qT8bsbdHPT9npGYcafrMWAicfAkYrXrAyuTo6uU3wJ1BPi3XiexKVCWLj9Kjo7dNYfYqrrKtd7DGTdeUSnsohGQ",
  "key42": "4vkLP1PGSW7feNQieaQ5WDq9GXg14ucxeFa7jevnYTBajhDFtaEmqAcRrKSA6akRu48irhJZKBQ7bFn5tiMECqoE",
  "key43": "5L5dAKdkbabyTQkcFaf41zoFX9xnSnD6nGBzDLZhRcb2xeF5VMCWXNgqb5bAvAMWu4hZfi7LwE845h681ZUXwQJ7",
  "key44": "2uJ88aEwNE4Nau6PEz6vgH4SJSRChduFTHfmwVQ9zycXEPL9oBWsh1ZUT4fgNEFUx6FZUsrY1Rr5rbab74V7Yz6y",
  "key45": "3Qnz5tQajaqMqsKkZB2Bjk2qbpserRR3sK5ARTJXNmcDHzpimtcAfvTF8P9icY6EWhUGueM1ZjRkDB15VgxPG6vQ",
  "key46": "5Qoh1C8g4rysWGZ4Nq1wqHsYC8HdkPrwchydewe42wpmaMmg3VDzEGvMXdYLYqFk9KwdpHWwz4GriccFGstKMdsw",
  "key47": "3TZZjRFbygwqsX8Vj4tmd3w85ALW3nAi58Zut9bxsgYvQhq3hc8UoktD68jtPby3w11NfBcsoqwriHN2LDS3zzFC",
  "key48": "4wGwrPeeAkddgaVvnYtMTBos6BTHfn2Q1WqaYRzUZQcKsbtcBAsQT5tF45XADhmnpimQ1AhhUk8uLQLwNKaQU6KV"
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
