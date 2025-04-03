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
    "3EUE2xmjJBtNdYCi3xraWntCwDwirGJuaii6S9eQQxmHnCvnbQPygjnkZVmmBgP2rNgDSBCsBwJiHEEvxVNgLGSh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49e6S7n45vYoVaVs8zwuYEjpzUrfETZDk2jCPhdYcAqQapCzZv9ZexKYcntGRt9gyV8oKqR6CEHZhPqVuinJMJqd",
  "key1": "2nipbKgQoBEMY9He9ERaztExhvmBU1jeab2EqUa6Rku3EL7atfJtvDNtW2QCNXnrptokvMe6B2AC4noJJY3ZigT1",
  "key2": "3nMNVwepZR26GhhdD5BJt76BETxYhr1ZxiDFT6MR1WFv5av3LtpHsvTWWq3wwUC4wm4askqDRp7zMmLV5s9JX3so",
  "key3": "tcTKFUo8NoKefpwc97n77YJ7uo1zVMDuAJyvLftXniEemDE64j4HzuBnHn4VggU6UjZQYW8JNS7pLjV9onk7MXu",
  "key4": "2LUn7hpTvB8RczCQBxFWuJTms7YbMekLSRjb29J14B4j63oJNJ6Dtu55YUrCYHzNMq4cjHCstmMGuda3pbXXX1rY",
  "key5": "4Su2Lqo4iK5qKioG1vv1NfyDejALFivVkXLEvJRaGtJGRft34ZTCAkxQS5qqHTeq3jDZETeuuDu1cHM5C5XNqBPw",
  "key6": "24TPgchchG39YKvXb6KJebF8Ztuik5nzMkVX2UCT8hXxGEnGhbrt5sL29tqEKXa2BEzMgWdRReNbXuuNmgc2JtEr",
  "key7": "4T5vRw5rYU9sqNN1oDFodaA4PnNnE4wgXL366kHU2v62mHR5cZ9YVgSXaPmHnteWuRzj7jB7UfqmRgvQdpfGrJZu",
  "key8": "26PMKehXA4TiCePQsLxv72Lrrn4YxGKqyMgNFSgwJw2sQPc78GLsGnUZSi16HoZPeMynu3HEjYYvTUdZePhufrZg",
  "key9": "5nKUY9tuEiwM62WiisfFyVGu2H9KQVA3CwbVRbpypkag8g2FPPW2rXcHkuPWefn2J9Xmu2pSxpnBEYWQ5En5bCjU",
  "key10": "5u7g171gzT8FbbZt8LQzWe1N6L7oWKqJBuzZxdNaTNsjxLJ53dQWEwSdBeZekhUvxmAb2hLnTDTTppjdhnwBwcHL",
  "key11": "4y7kssh3h6ZzjsBQevexS2XKW9Fu5KMv42HmRLfbVi2eXbupRrzRWUJxDsNaQcTYrFY8KgaUoX6RfyZPgyd3zQDX",
  "key12": "2JFjCjCG2hcyuYTNtveZm7vyB8aUm5T9fPfkZcQ5ufdZcXtH9mt3uhaiefZonPfyPyzsx5M9NJFWfk7BmhEVtYqd",
  "key13": "upgMJRsgecQRpVf3g7aZRLC6ru6jgPMw1ULbuX7y4WeBjtvKVPBpsGjFa7XdqPADTug135nwrJiMeg5D1N8qVAL",
  "key14": "4nTHd58Q8g61cQ8LY7yFPmKkr978ohi82z7z3vxCVfBohN5qtXNveCi3k1xnh8yE49fJuQnU2ebEu2ygLpojxL77",
  "key15": "2FZ5fVNaQRXDKBBodjo6efAhPpMWuz9JF5Uj6qu4jHYeyFBBmjp4B4KgZvVhhZ42FNpfRxTw7a2d6Q8cm38kaFaj",
  "key16": "4JPUixtS7GR8QgHsEk4YkCisp3SQJ4z8nhkyh28KWztcb8bcysfB8GmMmUZEc6XtYV3QCvjwGr6QP4N7MuwuRgAN",
  "key17": "4R24h52etYsbNx3HewcMRJMJQuhvCFsSpCN7Ftt9cwNqesGCP1YU3yuX4b6d67wimuoZtR7TR1uuoXwcf1tjqKY3",
  "key18": "4AKaVcCNV1j9nmCV6NK679PiAYvs67rCbiXpK7uc2mj6ZhfEmZEo7RRzU6hUM4fLTQqfTkLXWgYjD9biinhNrQr9",
  "key19": "UgygaMGtRJ6rk5ERosvjEdzndoJkcuPUAEmQieotUNrUk1phmNJJKaKbWXDA6XXhKj8Wnkpyu6MHiopEiiDg7pb",
  "key20": "5C1m4mHvwZHRqLsdySPgkTuPoaTCiDH7VZKeKt5uNHxKwYmMqRHtBgooy751rKuwVUTfbVm3tnN9pujFzWBTY2Ag",
  "key21": "5UboG2VSn8e9mAM2zNptZRwbSVhGHjN1XHqXv4CeL4fqzy53RJGBvwmxdU5KrpRzsoYK3Agg9UWpHhZsRXLaBFtM",
  "key22": "2rXbjroVvxwJE1xPV1XhkKcrwbsQKofqFeEvVL86mQV1a8Ta2E8M7H9rKvPjEriuoGDmXQem46yDTRZ8LZHLwhoP",
  "key23": "NiSUYLQ52mN2iWv1u3epx83mS63UJ9saLBpf3e7yAotpzqFEzgvD5fyVGf2s8YYe1x3RoGaXDiLrfaMYcPLzex7",
  "key24": "3cJx8ANrK7dRBw2Hq5NvRnKe95e1HV47L6BxmmSL1eQygMKzoUFTDtHmWqh4AJbiD5pLQTtKso8QdjCZGLk1pvV1",
  "key25": "uCezwDZHqmKXmB4R7B6dsfoKQbL8ExgoHHhc9uesjeGrrbxLozFjFFWUPHfteWrywt4SBSg5bNstAHvwTVN859S",
  "key26": "3bUFh8sJCYrTUiwFktVZbFRXTkbBbkfKTpLWkp9wZ2ZXnCzwSNVKS98M3LPEB2GxFHPsTFno9ctJJ73gUoeSV4Nm",
  "key27": "MK4Uwe3y1YHioGJ1MR3QFK3wBqAJ6qatHua6SvUfjBoZBxVtyudHNofUBwFVkGcUGQSpthBthaDfU6HF29qeXSJ",
  "key28": "aJdotTn9pC4aEUe1D4y2joqwqyjuw8EewozrKsxcESVmt6s1ya7qZRXxYjE4wGMpBWcX36BXqRwB5N3WFmqTkL9",
  "key29": "3AAdWa8x8h4W9vNVehCEfJ6SNg3XBVFLhXKDnGXKiNXBYv5pNW6KHcwR7Uu84qpyYdkGtBo4ziZGobqW9qEccfbR",
  "key30": "3Hhna3kMhWzZEqPsToLYjNN7j2iQ9L6gRzXSDu5y7cKYDvtvjKE53a7CxUxM87ZaNHwHhi27S6CMj7z3cECRvUEh",
  "key31": "5YpPjAQQWvpgLh73131ek3b2zuvhv9nnzDasEM9SfeLXJoeMJeapCHMLo1VQ4kZcv3emXCYAuXCWvAYW9MNnDLmQ",
  "key32": "2eajaW3ggGKSWFuYLEkepC5eU91q7caX9DRX58ZRmCFy4LVKrYcH3F2RJfYoM4q3Whko1ypWxFehB68N9ft5TPz8",
  "key33": "3F4DmB8qhRiJkF6Rn3vvKr4XMhgSKMQVpx3amWRYYWAxuyNWpbcSybeGPpDzEsLYxY4SeePVc6ijyhMqnh7bpZnx",
  "key34": "4tS19UbKVbYB9eufKNYq9QgdQmAjzHWw91mKWJ7RMvvquXwPWbhUJDt1qXsGTRccVb5wL547DvbqjYCUpzg9Ad2v",
  "key35": "4Y3jSuY97USnpZHB447NAiGJKtLadFLHCLW4E1c7cNjzUYiZW8uhNmHLSpA9eVzjzovQPjmvcGbPK8eVBZ26dk3r",
  "key36": "PcqT5UR7oRYHnXTao1gDCqs1PxquFm4tQUNyioqwixAXhYg6ci49z3LKsLfetdeJCRJnMNeVzEdSPN6nud7hM75",
  "key37": "3za8Tpz3p7bY4QN9xuVcBJ26AbcvT6CxKG73Jitw21T4HXsJ6z1qTyqz8aoPHufKkwRcFQSmtn7pRnJAs1BtDSYS",
  "key38": "bU74WETzwC2DHXuBVxcsBziwQDBwFMLaXDKpxG17VPaiEGnZtK5HVKauXspiSQ3F74NSfZSJP4pBMuxJ81MkLgh",
  "key39": "41MJxvgHg9jtdUdf8NB2nBJRbFYmQsQrrhLsz2o8UwtciaLb6drzF97H1nFS8KqQajMQTG923EKBLHVYdGMUgG69",
  "key40": "3NuDsqLxA1MErgLURoUjzFftjSoYfwY7cuwYup6YqWc4kaMmKKki4Xb34Hupeequu65btPKrPshhzf8RKBfo3JHW",
  "key41": "3cHTKGZfdhXM318geDk6LwHXVsY1X878gnPECaai5J4M8CqA5Sm2mJEezfscchB2KYpV8ah69W1x1kUcw5w2VBpY",
  "key42": "2ewwXXSLZEGVWGU2jJzEmeNDs5rc9tBWn9FPdMQw6UgAHr2dyqnys4SGfT22BadoSnFiyAFgXRqWgZwH6kBRjjuL",
  "key43": "3TgoDKrNfjWiPUyPi3tNBNEkgkkYXMdAK6t2dapbyWfF7uuqTjBdvzHi7L1PkybNNDhR7iaWbseDaA21We7QBiBb",
  "key44": "2PamXr7N2eCgtxofZeVS5abc5GCLMTnouBNHJuhVBjwEBL6LCfsG5gXSiDnj1RzFuTKRagvEKjXc9pDTMDyeERKa",
  "key45": "5pPv7ztXqaEzNZ62bFMYpafffs6BowF56XfvdGnEJXAFLRkMiN7xv19HAukhmFeAHjkH6nupTUZSStWBHyWtkvfR",
  "key46": "3uUTE2eUYgqsCZd8CkgEDFh4ffDUdcyQQKQxXeRAxS7sMyQArU5QweRZiDWRbAERjX59LbE5AyfTic1bN8nm16Qk",
  "key47": "3MamQ7QCbsv2hCusRpf4qx4S7dPFa71zr33W9v6Mp7ne68pGSZ13L5cGE6A78KV8uR8M3jLpM26Fvsgibg5G7QZz",
  "key48": "3WSebLjQCXsck8whQf6torcbEL3kNzf8azTNEqzcpwD573t5xZ97iuix4RytDBvtAuWc2f4BkSVZypqD7BpccsGN",
  "key49": "34zsVYLxmzwnEuE7X22ye7DFhonHBHaAkVrLtRbN7ddbmtHWJ3jBak9F4vckxzp5yjwn7kTLgoTs3BcW3QVSXyhV"
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
