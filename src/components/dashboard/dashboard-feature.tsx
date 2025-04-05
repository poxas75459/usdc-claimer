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
    "394sBg1XwgGMQkSt9xdjoU3SyvqrYZSpN5pm1PJFq5QPeaZ9BQD5b3aDV4VY56xSSN2LGnn324Ehr3hETbj3NPM4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QGMJu4MPyCkBTXH8LiTa4JXPRaHeL6d5s1Jbp2Zwy6aP23HCGHcaXCqtWah9SFM6bQFC5zHgcyJQMFBEqr5o1tB",
  "key1": "4tv5oumtwQRepLUfsKVTJZx7kjSX4yJVCJiVN71bc9NRYPwdfrBf4gn1ttyihKMkCo3L7jh3aD1kPLZ55kyhKt78",
  "key2": "ahcKDURPm3ncnZpGYnrSA4JJ4zCVkRpxpxkwDP2MaxaJo5p189E7W5FHphLtZtcyGHaSop5fQFmyFPb2K9xmRSH",
  "key3": "4XcYiHnrYmSz7ZSnHm3xrNExBrY4RYnwcgfT6S8ucn7WnCV1MuDkQmkt5YGqchjdZtXFESGbLMNw4s4CjGHcT7YP",
  "key4": "5xbVekYbdFfDxXL3KRd6xsdHfrdybHTedePzJMxptzWedLJLhx7EiYHgU2S65BaSLSrXNsqamrTNg9H8yL5cnHhN",
  "key5": "5sHWyRTEvyKgoMcDktvDzGEU5Yh2CjrjVWJQq94LkrvWVoAFHtYipWgqb25Dp6ezsEBotYP87AZ9mnvKGqBFRw5g",
  "key6": "5Ay6wxgtUBp91YqRyN1AbtAFCqcGzjx5NRPrEpPuWXVeBi7uhh9uoe4ebDLkXJZQAZ1bm99kD83U87Hjb8S2PEAH",
  "key7": "3CgH188s8Lo8ug7dWEWAw16chLwfE3zu81kDctPmVsXHXZ1eURVijXgCoBsnEwLGx1kHZ8sG8EgGnCRndSrSBV58",
  "key8": "4o76mBN1jVTb7iuosQHdngeEkxna69ZYM6vdovXaNVmxpiWjthh8A6k1U4RXCLunCb1VCVx86x7apuubK8wT1D2w",
  "key9": "4yz3hxoyGWC9Ub2xdED3RLjDPjDbe9JEtdvcErego8Kv8Hp7sxpsAxRwkmoeJ8aUohaq3PdTABBYffLxPofdHiGb",
  "key10": "64bpNojyY7wiS7GYpu3Pfz7v7sx9pVPmv6ubDg6eZh6xD3yt7VMeeW9n8ZX95JsL9csvZN1PuDLMg4Y8DGLwNpS4",
  "key11": "4Cd73nrutaohLAnKVcLMASK5orQCmFTbyeeBU49zu8CoPtznVDTaVpaCdKgYwdPmodGmzVUgkwa9kvwWqwss7BJg",
  "key12": "GMBPgMHBmpWee5tYicMyG7dkSsxcDBVa3fpcTHbXTta5WY5yp9VuSXveo15PQsBUsebJN2ssPmsHn3G9JsYKP2M",
  "key13": "4YNabDFhrCYmKEUN5iiyCZGmCRzS8fUL3NLpeQiWYQZpMBqyLQDMdo81CaKTmhvbWniKHAuzL12uQzGn8DGUNGeA",
  "key14": "4MeGYsHsZdqzJHvo47fBQMBtxDEsWTzTzk9Z2mRfqGYXVN8L851sbaWLH8JtZ3b9B6TCjXxrreLzGESCDmtrsjUG",
  "key15": "32rp8LrQJkywBYyrYf2B5H48MpjGXPYY64koAdfBTbkkhD8sqmRacyC5mLMW6RRESLNgmaQHzcXDbkoVJ8MU6og7",
  "key16": "4hxYoS4AYPuuVxHQ1fNKbL6LadZBv82dVyA4sr5r8LoawVbBRebaLfSub2qjdaAmGNYU2KvjHLJ2sxfgzZ4rJ8wb",
  "key17": "2kuFdMAMH8FmhQB2CSgkTRuFWTQ7JyQVrLEPXucKktp4dP6P6MLV6pU1Bm1143bPHawWyJiekfreWk1qqD4ECP63",
  "key18": "2SaDRQfVcznUfKt3kUFvT9iW76VXemVSFo2YQw6fWCuCwhxQwMDbtw3qok9YEnPvJajVDdLkGB2atxDU9Uwm378Z",
  "key19": "3XF5XSFnLZrPwanXeo64vn4yJxyd9nNnw8nK7epyFfyhrvJgirnes7bZffDSYMFVdHEyNC7akxqxTcG1HanEwPdR",
  "key20": "3u8N8ycauSL46EmcgcQH6bNGm6KgzwYXiHwi6DNYaMnHbfbZTraE3k2PQd8SZmhp2HVsNxg4jfEXUL73K1XBMJZC",
  "key21": "21t6DsobJ6GZuqHsa4FhjnzaJnSght6rfPhjDacmau9q7P6UfLXejDtHuUYzcTfbVHA2RPq5MnQYb1cT6Y2MEyKN",
  "key22": "3aAsJ53tRS7YpUsxNyC4oXnXDNRQ7BBh2ssA2HdNWzHGgvNdYAww24fcGa4Cm8sEsGnoJRz9ek3kGD8zfoE9CAF",
  "key23": "4REiwvFBC4Mdtr6vChorghaVPkTpZHUyeckybFPkwfa3EjUUNkJ4FTZaZzyrVe84Dhy1QFowcEg9kzM5BbybdUZr",
  "key24": "5nvhQzfcnEi7CdqDaGF3sEEZGaQnAp1c6qhTLDoLmUCb6F6Tngsc9oi12HxmR57dru5x9zt8jr5dVxyogRArfZaA",
  "key25": "37VqNGMGTmA6uvEgyzguETm3u6EJv8PSyLKzcKL4PLTwzPMT1S1y2czQcSFGHXsCepi9m6njbLLrBGrMxgkmAtpc",
  "key26": "65rJoYRuWDzrY8cWqUZkPwKypdKndwFTHZDvLYBmvC89JMTHY2N3FyieuSsTsBtuuHSQmzixvUQwHLovmt2vbWrn",
  "key27": "5UfAqT5bZrYtkZCk8oSjsjSQa9KToQtDZE5GggCVGeXe426NNttciH5Cm2SZzrNzHDESEAVDh91kRphC3NRWhy6",
  "key28": "5PWc7sULaVcXaZvSCTJ7mPrAirJcrn8R7BbKxnWpbmLkz8NP1G7dcUUahgjNTEecXkMSoKxpvkTwQyHTe8MiUfSk"
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
