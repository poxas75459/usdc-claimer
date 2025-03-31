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
    "kyBca1qVHpi5JCPZT8AHHsbnZJFfadXuDNjbLisTH9r27pqmpesiuhHR3hZwymMHqgYUmNS9LxmN3EtpsVSMG4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fxRP26qKYS77rNSM5PRVGp9Q7HZUZMgGtv3p9mPJdC4jRWe6dLwP2W3D1UxPCr7zUkMeK9vhANYmguiZk2Ac6t8",
  "key1": "342EGUij1cstLkxKg7YMLVm9tcuHBSNjvhtr97McnhajFJG62gVvgGkACCCgfmkjyDRaRFSmHzH8gWSPj6cHhRBN",
  "key2": "TnHLpcxjeWUBunBDq3oAQcg9x6XmYW4BXJ9pE392KMCbDeg3yb7KzWKBEeVsSknQR5yakTBrMAjGde9rVY3mYf1",
  "key3": "5SAXDSKbLZHvwfxhsuhXuPvRK8J5MbZGJZW4cYP4AWboKJhCryqJFxJ825N8NHeeMQbf7rawWwsxmHUhuWXhuYA3",
  "key4": "3BawhTrCwDJLhRgA1myJGX7P8oii5T4JqiRcQRiyWczd1DR8ZeFqkGCkvzFhAnJLyrJuUzzAxhVGj71fDiNvsB9C",
  "key5": "5nSi6vSzkLqKghi2n6qR8KCqQ9xyMiQMMrR93CBRgymC5n44AfAPnZGu6gvBzHGWSkH6QW44PiyChDdwDFxadVt7",
  "key6": "3GXurXQi4gV6AdBCF5dGPjFor3uNDGnwEGkSTJLZCFezxUkXHKTM8Y74yDnE4U5nNA25oe8Xr1JkSeCxeTZL68Lo",
  "key7": "2x3eNeBwn5gzYXRwsR8YgmwL8GkLenCpMAuw91aNJZbfJXFK5usjobQjhjFqMV3uejgbBmSVGNcUkMi7HUZmiwnk",
  "key8": "3UHjLfp2fdASp33buWTWCbkkg577zUnhuktTrdRXqzvm6Bw2ByxgxyKFdQTAkJ6HB9titAtVu5D3gosJ331wTP4E",
  "key9": "5nwhAWZLyoBeMVD8fqRgrdySDF3ATZzAnrSEVNLa2r3qo4wUqqmLrLxCQHUB8m1fiiN8hspfERdqH8miqMwjiJVj",
  "key10": "4XAGGvdhey4vLtjVoyCVKGg8SJPNrWirKnDngFgqPtehFXEYnjUW3scB7sq8ZdLEDL9Dt8RhULA7Gio7uTf2zSpm",
  "key11": "62SfoUgYNQSeViYuhvy6C4yFMs5cv1KkmeTKbMtRPKxuvrgnRfGWZUG2oDDpZzTEQuZxsRkSZQDSXK8yey1bCu66",
  "key12": "3fNgVX9FxJFCSTf8Rm7BB4ktkdzbhaob9iuRYQZfzoGF6z5cZKd11KXajCTJsefgnPkscfpdeY1RNq2AsPEToDqv",
  "key13": "33BSs46GpxUhnuGcN5u67iQYfJcxZ9SzrFePvCcJ3pcrXX3vXQzhed4xL1rKjp2W2prRJE6hKpDjC6AJ9CSFLiPR",
  "key14": "5KpJaBSxGK9rrFGUw2BZHJhDCaheqZfRFCMtmSzX7h1hvgETtVxkAWKPCKaBn67fFJV77RqfBm6VbzLaF8Xf4Zyw",
  "key15": "4PdPBVNBXTjMosZce3Ai2L4WWuiiAEcSV9NWDF3PArFZaWuEm21krddig9XjeLxBZo8PgLygMZX6K5xcwrsHBzRY",
  "key16": "7FyzTbNVxWG8DkvNPYL7J81sbW4HdeAn8vbeFaxNFQ1j6RBmMvNGSctDvdPNkHih43q7jQUNW9DB4ghQLCy6i9M",
  "key17": "2JdLNL5iLwwQX3XVy4EsgvsBE7qDPN158CVZRh7wBsh696bYysbcidZQReJZfigGRuVAYnVcNYe27Pxmx9NeYS9m",
  "key18": "3Ep8hB14vXde6KDyAr1uk27VXe3f9FkKPzHuPtQFumE8L4mPbSj1nCQfZ4vDWb72u2kGspGCrSRGLeRFFQb7cwuS",
  "key19": "34RbAjmoTYhZbEwjbRs71zKvfF6uMZCC3KEkjLhNB4C6V1xdXEz2et5QRFLRSQDQ92DhGZDk2fK9jC8nnXjHHbdd",
  "key20": "41DTuCP1kyn8ZR4UMfT5yvhi76csfpYriBqZBu45rvuKq97UgGhGr4vk3j47fypz2DBjqwrT1z7dzKBDo9Rp6Y45",
  "key21": "4Z8uCq1YtdvztzbWaR1547gzcRhAQz7ihQpuKPggyn9KAGbWQAkmFdi9N1iEFgCcE4xzm4UakAgcVCos9FSdvfZD",
  "key22": "36ScjR5mMSWQVJQUcyaTdDU6RZ2rbiZy88Vy5muG34B9jqbEgeunpETV5GkFfztjyNtww3wheLbJ4Q9LT3pwwngs",
  "key23": "3AC7tYgzoSFyGJ6nKK6uvFgyA5ZX9CYBinwzJGjEjAsw8BZhrBxdeU3keU4zv973YxDqwr7mfEXbP6eWDgCX88bU",
  "key24": "2gKzL6dW2YC5J1JPAxH5ou5x8hHfKuVG98sJAyxV1WBYUzJ7VWL3gEa7eRsEJAqhsChTJpi75iaF8QBvSxzahPAg",
  "key25": "4YEAmgyABaYJc8nLkocTeTqrAx8rCtHR8nxj6cqJnRGFQt4bTXRthQ7qfQ8UB3PMumap5WuGR415wVLBrid1gRuj",
  "key26": "3SM2xbgpdQTTGj9Mr6rhSQvBHyChqJNZhMdHqzZtra1Noa7LktVvE48A4s99wjj234ib6mmcT6Vo9RKZd3fE2yeX",
  "key27": "5en3rfVkNjS8grC9ySVBWAqSN4kmq9oAYbofAkR1k2azvdbcGXsj5uiD33BhQZt7ixhSRsnRwGKyERhZpbKxhbkG",
  "key28": "srhKmg9pB24h8125cGjKPQwV1FfhQXZD33Xp1XHs9D3kjLtgDHyNmTxYvsmqKAkJGDNLX9B2sueBFKGxGwGeeq2",
  "key29": "46cEyYWVkxxVFkkMtPRQsHhnXLLYnb11J4NuTMCi7eTigWkpr8FbsitpyVtvFDFXsqjPLtF9m6CTLFkUJwCQcvY1",
  "key30": "36DBvSDokpUUywojEbHFdTbi5bjyEYPY1s86d4FfJ62bMTsDNuZ833nwndvoQeEuYSrD1VYPD2y5CW4RuCPhdqzd"
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
