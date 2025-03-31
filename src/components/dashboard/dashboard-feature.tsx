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
    "4UEdD6JDpwjaKXpK3TPau6VwZFSuGxTpPwW5LwVaFwNMyBxhuuUrJC8MjLU68pmHGi7w9mzazeTQnAkst4MLHky5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bx9jTn6gCr6gcaQtTpPtZ3oTBBnQzzQZFaS2H1PuowhU4Xyu8G8CAFLM9JUKkNPUh4toV9KGnJoQbcLMziRpkdd",
  "key1": "5v2PndTHfBERoKpNkhs4rfdJzZ3WRb1WFyXoZSkMiTyoecH6ZtYHs9mF8DrsrQLYCDzWmxkUzUotbGNZv3S9X1ti",
  "key2": "56eFtNhdRzZNFCXHmGU4CKhmTMgLLgbjcTizfGEoe7KQkbUAFjZYLsSkExV4vEcybj5Fp23SJ91c6EmeyKftvb3g",
  "key3": "eikbek8aXtxpiNKbFfn9pVCKkx6znaPezDGvihNs1VvFQdamMeHpFUTrCSyFWgYfNhJbgP3bhNYFEj9fVNJXju8",
  "key4": "4hCNrVLycmWJr5eYQgxQGGZuihpPq23zSGbGVLg5jym6JgMm9bNyrWzt6uGVJS5zazJ4mL4aqeHnadtoKfQxXWxD",
  "key5": "2rAg7Af1WKk7HcFVNHsgDNyenCcV7M2LRtdgnTzcm36J8YRwvzYrcstsknkxVqTxzmSUhWWwqpjSweGkwcX4T3ar",
  "key6": "2eNoZLE8mTV6ZKWtQPTVxYje1912awbsbtQEDB5LJXk8PGM1K331QeivAKHuf6V32fYP2w4eaTBpeLsGcznC4FEY",
  "key7": "3nd1agjw8JRQZErqj9BWZ6f2DFP9iABCRsPWU6DDimbcD2cAeRV1iV2vKMR8ZPG1uspBSGiAZAu1fjhRUYW5cGbN",
  "key8": "5bhLHP1duSLcbaVFfgFEPek4rFqMjrjcJVJX1DFMH43XEYLfirXRNjYE8ptTmLa7ar7K8Hx41PMupDS8iTsZwhgx",
  "key9": "7gpFdkceUvuHJE6MZdmuZRifWmBjDvtC8dbddhjyeVoKRyobTCT7M6TmoyhfKz6CGDNoDZ156SucWuqKMwiE1he",
  "key10": "oELUKybg5cYZKKr9VLRLVwN8Ja83ZzhdiJPywpmnx4eCsNDYDJSMGapchi5hV3bPB4KEoBzsPEwBpYqhN5K84sR",
  "key11": "4xrTxB8pAmjE5DFh5N2kbEiN9aF7MiX2gjEPNMvq7jztny4oDdtR9yX1Hb3fqidKeEBBAeoweQgGiGHffLSq5oBn",
  "key12": "7e4bxx7Af7FagGka9hcqVUk2QntHbJwP47NL2kYEVyurCTQYTugtX2UaUVNXbrhjGfhdsjM63HYH8MHwqNtEvu6",
  "key13": "5hU5gEX3777Botpvahg61eYPXyaXkxG3n7imUNAzpUvDDTN6mNKAr2F85zXVLGUxaGL7n7UZ3L3s7ZVEaeVbnFBX",
  "key14": "2tFqzeAdVUYEPb6DL4Fpt7XXQLZtAi1FNLUdJaLhxzz5MoQn9dADJCjYE2o3G2tJSsd8X8MJDjrydEZ84CZAhsrf",
  "key15": "2Hx5k9TT9amnS3KV5qiP3jsvz3yK6aHvukKi6zjbjfmpgc6MdqxGjgM4Lc78bDkAv3i5ubn7oYCLK3NH63UUUD9w",
  "key16": "4rYQFSLEiyqufKWPb2aDGUYpDJSenU9E7UtDoyxdmZFwf8Qv2jidDV2VfzCqwN215uZum6SoBeyFXCzqzwniBBju",
  "key17": "49gtN8WXbUcoPnSGGEb1jVNMWnd4XbNUw4m1Mbumw6noBAqqXPN7hZKhBdVxo6QBh7nafj79QeCUgHo7XbdjVVbM",
  "key18": "3dzpKLbRMjRctSEPpunRoSe1Fk8zHYgAJzctfPEMDhA5Yb6ihFhUmNKS7ynqAt4vD12j6EcgKrUNTyJxx5KPNdfH",
  "key19": "3PDfazjfJNTW6cfqeKoHTUjMkPcPQNncKhq2Jdrf5D6D9s2yQ5mphkQ2bSL5FRnzuDyN3DtEer5RKEAdLWd2wCoo",
  "key20": "WhhGGsuumHAvLD7Hae1wh2gDihuvinUK36SaF2bEi5F8FNPUk6BpGVeVcP9o34jVkRcWijU58r1Q8uJvZF5hXU8",
  "key21": "aD8vbf2g1BSbyvQk3cN4N8C2NfNJ7Prbjn7WvtTayV5TXYYCrDPQjwT4M34BSMQ5SwqUwAK6NZAd2cUcaPR2LVx",
  "key22": "2tsxNKEUv1St6yS14jNSCAaN7WXH8YNMofQA7J8Tyvhy1oqzYBp6sjarkVWRL3BobcALXaRH4ss2PZKWzm1X6ve3",
  "key23": "3VACcFttwHtNQZhy2PaWqCeJkbZjEEa9h394xyA67i7ZLSyLZSKMu2PCZYerT1N5YuDQibtbZuSWurfZqSfocqDY",
  "key24": "54Y34rT9o9sRF3ymr4dmgwsKyUEoRmbGsgxHb9TNahFo7Rxc5fP2EaR9dpsAkvnxqwJju8s1NBwnA3jhfppCxqWP",
  "key25": "5m8byE9598S2TyT8q3YWctME29FRUsinWpYxMAy2DoiUURk6kZb5X4M6UpB2gBQEkxrjppZFhNjnwwnAfgMjdQJ5",
  "key26": "GCaQvyJSFPN7AQ8oAvExMKt3FXAqhGdE5f2pki6mdcqPGZkZdLsJaV9qcW2RwdxenwZkTKzcXTvKkmEH52r5A7t",
  "key27": "3DDcrg96hamfdieB1RHkdaYVGoZNp3qCn7Zw5buZeE7k2uJtFJDK2GZYhuBjLPJdKjEgMnpfS27GUinTAHjZT2Zc",
  "key28": "4v94dWDZZopp6y64owbPZDj84JnQ1ETrXRfRfFxV5riJGYcAtD7u95vD423Ujo8ZVVJAFT4bJUN9rrwLstkkzLeD",
  "key29": "3H2mHL79x328MbpSJPd9vkzP9f5WaydLVHSEqwuCjXDwQGyvCtAgyncKoQkJgzDgYrR98x1HKemjWXBZhirVa8px",
  "key30": "5wBBSeBtCvgn2setBW87Ro7CEfbhShFMMkhcxbRY2tB1zZ2N6WDvqAJKcMeNys1ZWQW5HRnu7WmEZ7RP69MDwd4q",
  "key31": "CHQRTN1ziNXBZeFPMPV4zDtgWRqChihedhL5P9jn432g7QZhye7FfSCSRUpfpwGReLdVCyQqwCiuxLC6pYApETS",
  "key32": "5T4pRpPTpzgrLjvgGbH7B6FdHPo3VqMdasUzzc55EgGRsPdeypu2gDqRLCLm6c9vvVKLmgU3CXUboafPu7TBvAiY",
  "key33": "5se6K74Mq3ebT1RXnLNgayr9MZEHebhwMfb5TRD1iQpU6PtXv1sz5UHNrC9KwyLFbXkaameK47XP4zTAJXC3xoPx",
  "key34": "2Gryp2jhfAX5baKccaufmKm3HLqfT4ncUXwezi5TSuzhULQJmKVJkcVinz5XTLc8HcuoRyoWw5bKMneR4TssAVzL",
  "key35": "5dZQrWdVwEwGLNDtYwwdbiarYL3Egv4qQZo6pA7iLx8Pmjo43CY3TT9qp2DReJ9SiLW9FEpmbRKAoWChvLmA1wgc",
  "key36": "799rrHrouefFdAsGaNxQSWBL9jgUvxTta5xo3ExEQH78b5kunDxpontx3DaFXEknZ6fJgi6BwpKEdnzA8aT6ufx",
  "key37": "4pSJZsx5rTY1azsmBd5KDgyfL4EB6PP3qtpMFzsYyAJJTZGepEJDynnH8N9L1AYkmoP722gZ2xKyLfdLg8CKr3uA",
  "key38": "iidqhWnokGsSo36wHncdwuBTaVCziuguiNTz6vHWN4x8H7VFR7xFLCqgvJpCctxTUBocdZXtYpt5EXVKMWAGEXc",
  "key39": "519da9MbPNPmMYmpfkJxuaAvnYkoydthY6dCFh3WkUHYNjptbwm86ZGrWuB2Q5HSXE9ZM1BHoHveRaRRwQzhZH68",
  "key40": "2nywbXonC86oTgfX6dPEZxrejQBEC1QtEgF7JRHQBfLN9dsyt3QbAd4fCYKaDzD4rNqjoAVp6gUNXNR7tq1acrGJ",
  "key41": "4ABQrMnsVDshQ9GSpXTLkNampbyvSYUxpyGNo42X59hxRi6ZLqjE3jJnd8FCfZcY2g2A3LeLGUwWtumyxUTBDLU"
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
