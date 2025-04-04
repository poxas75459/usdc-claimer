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
    "4ukmxhAESZdpNqd1y967ezTA6iCQ9Qnf51dLiHYmF2ouxQwUAnbsZ6E4W71jXy4GK8fxapADxQVi1fouRuyGWeBg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RamJ4tjFP7BSXm8wjTm7SrMz32FbjtphVhywB2PLzz7gbRLPgoxU4nxp5MJmD27dwoBBdEUyWxSwoX7sfDAKoMe",
  "key1": "3UUcAcpveTW4sDDT8JVP7P52AiYRQWG6hCfyf97zRqtcsba7xsQ2dCPmgwmhgFrefNSzfeAkpCnEJA1Ei6qGqQMq",
  "key2": "634SSwYNbm1dhnxT8Fp8BuUxsjdNhoBdjrF8MczEa2eyizSW5PR5EjQ536AdUEWef152bBHTxBNgMjm1YxfMwH4P",
  "key3": "5uu38pcJQg4WzGDzFpNCrBYDuGSutiYtdYPRQGD5N7d1fCdeZjzBmjy9N5SMhLhu1cpbXwNDwP12wWLDup8iMahc",
  "key4": "3NMfJpgHHT8cHmproNzrNGLp2J37hu2DiUXEYXvex6F6p1ZuE1aJx5JYiZXZjzu4QaiDQUVvBccQg5shqJhQnXWx",
  "key5": "5D4AYKGPouPpQHJaBmSnyNa23nfgMNtPuThwKEMK8UgBvN9zjmKD3KpWdXTpwcu6H5AT5gqyDw14WjYdVnf592T5",
  "key6": "5zvZyAEatu1AZFT4CVTWKB6Bq6JtVNJUcfA1SDbmKnsLK6uLg3eQsuL8x5eDDuGYUKkfM1HtgXb73ydd9mXGXrka",
  "key7": "2zUdnJXFzKFYagpitKS6n2bZ8RPVQa5Ze4cPMp1GGBr1hyUzuvGQe2SQvWxssR7PYchYZCVinrZRF1rwG1Lqxtto",
  "key8": "4GUtqHZnczK7E2xTkQuQPdGzm6p2Cfgeo8st62mjja6T9nFJHP9iPNJBiehrnUHLrMBuD5DLtSJmGZ8Tcmm6fS4Q",
  "key9": "3j2NFkCqWRouEWYd52uTWXJj6NWNmn9KEfx2ydR7PVKrM15R4DseD1isqcy6qsKWLb7ddx7whLX8TreHu8uREVzA",
  "key10": "4Ux53wTdZgkWfcs2jgbdajTTkMkYUAHhhUU4wT6emt9vUyKBpnWJAohM2429sN995r7ccMhnjjesNJUtFDEmJiDQ",
  "key11": "571oAmdXbfnsUEw3ns3GEcw8vGKygudHjE39HyQBCf8EjL6gQ6gQnttfTyvE1A7Yz6gPBQtNJSHUhjCM2vZKBNnw",
  "key12": "55KenHjeucP2CxagHhN3cdQxXaAT736Brq8DU287faUapUDwk8NyeCswMSK54QEKdskhb6tmaCq4GeQdT74weB2h",
  "key13": "uYKFJfdjpZthP7dNh8X7FPe5iP2jUPB12Dq5zCzLGhy8Ee6suEuE51YxUYn7R6i3mEdJrE1NABMT9TALbwNy5FA",
  "key14": "2t637jFrpVkkcnMFjknZUNtQDMTBVuuRX96c7Nu2uAA4F9mGFgJuSLNKLpycRZHNhmXQ4cAg3J1ZeWqJqDW1bDpW",
  "key15": "2D15NGB5XxWT3VU1sMMPdRo9YozcqcmEFJ2YMRpNA6KC7U2zJaHkgpN8TTTfSpBPf8owGZojojNkBrmqoXNrkL1e",
  "key16": "2snDDGJLyqJGkwQNVMz8hURufF7R78hoqpNs1CDF6hEzgkqQJzXFskB5xZQkuiT4ngy62UVUsnkNbiA6q4V93DZX",
  "key17": "3xHSjzQjL4W9ePC8EWFj9vwvcDbVzjPNx68yWUvtpD69VvMsoUs1cTBGyRXfXjrXCWuU4EAHDtx77SxWbLBzrxqE",
  "key18": "SxMYtAcpZxC1WMRPcLeMkXm7PZ7toMQPJ3fBdEW9joj9CZsaGEAcua9sCQqs9qz8TE3BGnkstkRequ54VXUPgrr",
  "key19": "5yghpiL3SEgMeo2TRkLGy5zDEkG55bM1yxDT5qyi6ojQN4CxMJdQzcQiq4sfBkQGVTPZfX1DvNgAuUxWcGD3yMVK",
  "key20": "5NFE1oog7FLWx3NiJgHBBJynx2fETS9owRmqRXLr1X98EttoYb6nN3QD1xdVXBW3usmtRSnSqjwPiwzP3X3WBhkq",
  "key21": "5zD3NSo3z6oY95qNxkE8Zypgea5XJqqTyrx9V2WQw6woEtt4FsMucyhAFsn58KepHNpwjKsL2m4Gx4fAi4ya3D1u",
  "key22": "3LwRpzZAehpJcKWX797zBsyJ9c4ybRAmPbozARUa4JvEJM4M6tBrJJFkHahSSPtxN9d7gWHhEReAMw8TTb3dBNiz",
  "key23": "25Aa7uMsnGWefPFqXJibvEpR2puUG2x1ehnMGxnqYW6xFPYRpVpemWH6rpttu1d2iskLVm8w8ma8ZYD9VMnLmEkd",
  "key24": "22ZtjcsaGKvddzXtWAUyv1af8NyhPUrL9YxwZDwgH3NUAfxHWx2sSE9ReMP6f9LBFz7vw16HmWvxVjCCWSLVH3nE",
  "key25": "3TW7BjN3VEQDqkKHtfHSPMsVUcxMaGckA1d6ut6Zj4NKHQobcgyPgcmkqaeyZanPNbAcjQv3J9eK3pQz1qupJH8E",
  "key26": "5gibgw3NR5mu6rSWmZYkT6G5fp8Ui6a7QFdn6MaoPe1hQMZb4xnz5SgMekQFu1yXkU9akCRKFNJjK1sbg5Yw5w7S",
  "key27": "4FRPpommnDQBoTndsSuWdHRJX8DYmEpTTUVcqLb3mP6EBE3qp3Xgk5dWLM6Vaq3BRWpir11w1jTPHYRcqZczTzPG",
  "key28": "4ZDgXixS6Rp6B7Lfz68JVpu8bSR3xNSXVk1YUobfpfZ2pwRkGMQoked9brSnWMNTAhoRuNoXJpbcYJRxepunoyTW",
  "key29": "4FNreQR3egPE9RgkSR9pvkMtAnLA5RJ9K6rEepLGFg2yqxjjfjzZ1ojqDx8kdSEczWk6A44AdV2FFKbS4NBtQFCx",
  "key30": "4EAMh3XWjyfYL4HxZ5HXL1FHo8AqvpPDxPvHuCejTm1y3aZDbXSk2NF5WNHi3zA5naVWvRboqtazff4XygeP97T8",
  "key31": "3ykFUJkGnJqoTip1tfxpyYQQyC8BFVApxTpqscLxP9Wdb1yak7fXaSCk9SPpS9GAH5kw69Nao3MBAiGHdxy9Bcij",
  "key32": "4EJQjfLBvQ9RKiLNYsB1Tr5X1UtgSJnDQQdVqE2f58QPVuZNkEEp6jmnKfJrmUfzN65JgXh6cf53io3i9cGQFkZn",
  "key33": "4zaaj2MDZt5yDVheRiNzLud4sMrgrB55ydtEWLnuJz3R5WcThmhLNeZacZqby4gCp2tUdkkbcRcky4CQU7f36brm",
  "key34": "38zh8j3PJLWQfX1saEF5rz9o9jKArUwai5u4BxjdkmJWFTH9GpeL2XmgqCpA9wgGrcbUdbXvDQV2Ap6sxr15TRqL",
  "key35": "2D2K77khtTuoAVfwZgnDfuswiHVKVstfTjJbnJ4BM9vBb1PYbmcLHfRj46BUUaiZNSJPLPGrzbUxnex53w7zEC9D",
  "key36": "i711cpXsH7jAxkdfkfEUEoAFrT7H3SMLDgFQKcksiQbHmSaPWkAyEhWqNzG5VqKrHi14CMuzGPcGXF7zWcXqHkS",
  "key37": "ZGvLGLwLLW5oXEJwVRLQLYMTp8Sxj652rFDehECHg7mf7mtzg8JSJdkR2WMGcUapNvii9MgUpVdGW1JuLzZ7E8r",
  "key38": "3dbUdgYskLYZrc1HhQFXv7J4agnrrMuE7cBFNCYsiwr15WQhz7LZCfpSxfNu7VUhe8Z1PoWqE2g1ddg2bbF9kFSh",
  "key39": "4MUKqfRH8coZTQeNiq4Xa2gMLff9L9RSjqfPTdpSCkAsgnQEPqmCMMcwGuEA8Ebe8nmayroaw9ukEtPRHbKP6r1e",
  "key40": "3n6aJYqnB61Exe4f76Qh82urDEpJqUSScaSgG1NVeYLq89n1AXo9998jWvu4JZNZNpxwY1a6GQkBgJPfMmCFPh5Y",
  "key41": "4GLoTcUDFaxs656yTkVoVn9eBg2xPfnAYFbP4Zp1H13YhRHMXyi7pSLoQCBkhbXepKDKPPLPuskipkPDujUwfc4b",
  "key42": "2pLPfXQujSe2x7HkvntXaeGbgQeqwUaCLtFMPCCpKjuHrTku5V2UeyeHNgH3puHHJ5msF81h5moKAGLYLkTU6Wka",
  "key43": "2Yc4P5AhfEqum4kTkSH6QmhHkh7QeXwMzywho3xN3khtQT96bnNHEeMTtdNZSCK63pkMRX4qTQrnSNcHAprToxtX",
  "key44": "2qdTzyWLfJztQmWMSLLUwNqzy5zw98xo6Uvebb4D8pztRdMYhziayhsmxQbmLcwqGvkR5Ea7W3MwPR3gP8wTUTMN",
  "key45": "2zps6vrvN8Y6nDTrpkPDfJ4tMKDgGHyiikdKrjiv1wLNG3juFAt3F1UJX72xHi75ZZoeGXKMSKiXDYsrdXE1w49k",
  "key46": "2XvDVp3c1mJF3Wap1xUPooEH266qJHXfrdY8zJdPPJR817D3KUXsttZpKcCciK9twpJLKLaHXdMAMJixj68qYmdL",
  "key47": "5LL9fYbjLZ9CL9kBZeeAzMRmJxqupeMB54tZ6j1Q5rB1K7juhMd7AgykK3T5vLC2XZ249HAZpQdbiJgMJcm9H9gn",
  "key48": "5U1LdwFmq1wdcqqJNg5oTckWW5s6QAom42X3jUm5dUicAQ3CvpYWUFWKP2DAMQVqcnwioFF1Ls9MmVYoR1LQJ3w7",
  "key49": "4227RRAAVyfNp1kbw9zwEh6rvjcXDwFrH48DdtAuLgmE6zkMyjUbS5eiDALukTPS5mdFKLCG5L4rcAb6TduNVJMx"
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
