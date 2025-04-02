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
    "43E6oRLx1b8W4YZLA7qWTCYaVhU4Uc2kREtaKy5zXczxevPc3iD6vt8GjbRur8x8qwKEKUDKnYbr3it8rnbbkUo1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sT3cgmMSgZhhPYMAcrYsrXBiPwCTuumbDfvgmd4ZJNf3hrFbRq5CPehAo66oHmuat3wrZVuEVBr4oztuAMrbHf2",
  "key1": "2quNcmaFg93ZuzL1biB35f6ca4iDfUYo2poUsoVA3uvk6uag2jWWf6NptUKhGLuDKGrVDqNkguAajZnRBuxhqrAK",
  "key2": "52bUXRko74KdEfxDZu9Hu9HyWAJNgaihC3PoFfys8eMByrBctAVHjKq2HqDiWBRfxV1H17gLDanjq4KLuu3R8tby",
  "key3": "4DmkwCFgFXZkjkKRaVAM9gsvXVXr6UwtSZHfwPyJP5gLUfF4NJgJQTW38C8keDAyk2sCeDdm37tFjMqEMvXx9x1a",
  "key4": "oTPBPVgxMERXQvFpPEPbM3zVhmaJgukqDxrGM1D5kSVcjxc9oKmYDkrwB9szUEKzrjgbcfvYbj86EKQNai9nujk",
  "key5": "55NVawJdg1rfaQ9gaB4LQZeQAnMUeZGxJbLZ2sPY6uwEoptRFfNs1LwsckmF9ye2PstP8fU9MTqzuop6wzu4auhj",
  "key6": "4WfxfWAFuZJHWiSixAaqXSVtma9mo3ynAnsKThnL32v9o5xftMuPh3ZZ4o8y1RyustjsTAycNZ5sTwamTerTCvUF",
  "key7": "fH9D2NRHLAiMozqucP7rBdH6nSrCr4CRLbKfCBZr8KRbNMtW24bmkN1aXmMcnZ38kRNM1gzbbf9FCWYxNkG2Wtk",
  "key8": "4JvRdgDZPypy7o3Z4npohY2LCyTWgGb5XrWQnFbQyNXxJdHqC1GvtxskBRUjwrYdT48wvargEHUwLZVqwcKprjjA",
  "key9": "4a3ngo6Xit31cJX7sdvEVRP8ERWvj5qfrT3JZ1k13e614CjV7h6AqCD99kgb7rC7GdSiS9i1KanGKSLikbc6LhMo",
  "key10": "443xYJ4JNDLqn56mStN8YXeLpA9NuGvLzyMcEvaxTKqKNNEmYTYnCv3Udi19bLbzUoMFgo2fLaV46q1Yd1izJ28a",
  "key11": "YApHhvmwqmwX7FMy9yE6QaszVCAgBSrwbhQd3UfYb8np8j8HyPxx9Ktng1JSQxEFXzVNt7U8d78NwSdjG85v6jG",
  "key12": "4nZZE24rj5jjQMJBXhQ6nmHMSUgPqL86VK8zEPg6f5XCyCDNZhNYTyGtnwRq8KVjYPpgvou9byumUaE9oMMC7x38",
  "key13": "3Hd6z3D4HJaezofQ45x31JFTeeuTmnuoyh7rA9c1hTaf9jjjh6XvvhkWLjjBjqtFykgiJSKSMDjU9UcUrHYGQvyj",
  "key14": "65QwCaSa8RvfZfRZWr5Bomq1fMc95w1wxA5gUhZbF9d9zxqZgqsXYNUrRHTtsrqU9gg69BCkocxMPr5BduGiMY9e",
  "key15": "4VdMZiHcEax63EWrTnJ69paBdqXnbE1qLmtAiWyHmnMcGs1PYGdQnjJqkVWWp6JxhS9wD7jiApz4AwWGUhXiV515",
  "key16": "8a3F3VGQ8i52X3wyJcdiWVoDkoJ6L3w4sQTQJBtkvKWDwd7hcnamUkJa6QKt5YLPHeNgFS2vfRaYPs8WTxgJzx7",
  "key17": "49GZkyKShabbytg2duUo5zbYEA6bJSWXVyv5wJV4Uho4HF5wwF7xoCRzyWfjJYR85dzu3ezcWdMGdJwdyjDomS6z",
  "key18": "492LeVGyk5rn9u258Z68CiBn5XVHf1xkmfZhqGjuN8aKAf5zhQq1Eyzi7MncbWyF6gXPSn26o1KFyPMvmus8rkiK",
  "key19": "4QEFgiWQmVY5QAA1qtHaP5MSTrW2ek1ALHaU2efGxg2GEc3RkMrSpvD3QdKa7o7oS9bdrKsccLxPyu8tHtjjxCZS",
  "key20": "u5Z4zZApxSVyLgLq7fna5h8N5Vkb4vyEzM8z73D9qPUwukqTHQJjWBqRZ1XFE2zNLKQv7rAV13QTy5AEX1YpYkF",
  "key21": "4n8VSy6G5ZxepantUJbrH1kizJKQki3Wfbywtya21DcARc76qTwv3MUPqkShFJfvEyzd73jPUaeuDZYE1n1TZTvz",
  "key22": "4uM5kz3B47cKiUoNR4uapvxV1Uw5U9Up35FfDKakmb1ndYUkUo89f1GMyMP6wiKhMxne35JEtjKNg2HgsAvqgRjq",
  "key23": "5rgGWUsRVpvSSc5LCu2tuUtg6yYTBV5j5g8XYGQbDZ263gz18wh9xG4MT3APwCYpXvtsZB8Yp52Ti9SFY6aF3fCd",
  "key24": "38op6KXdhvoVYbc4CYyvxxmmMu1QDuJuLyhEf6PG78xNHF76CqKB9mrdbw3bkqTscx6hJ3NBzquckYz7E4Ekxj9z",
  "key25": "5BEuBxjDVybB45EmzxdYpdq13oMBTTMqS2BdxYkYiA5fapVS3jLHmwyWyXZndUkQ9XJJS9NFEr3zjr5jEw7tJKXt",
  "key26": "2TBwWjFCHHeTRBdpVrffiWHUNP7Wdbc1kjz1A4nQV9Y9gVCaLQN313FbHTSQn5Jnj5kFdHh3aAG3xUL2SXC2wxsv",
  "key27": "3krTjpEyYsSZFdefvTs8iW6vqTdSieoUx51WMgYrYFbTPBLvZmkmQWbMYDjvw98MFwYPHdmXogZRVqJV1sdNbUiq",
  "key28": "5evck6B4XVNs5FEmMCWH6LeEkHCvSm8KSpkj1csehWoCLw6xskZzLepRWFDRCCtyhasBUDWGuwTHQ2xqJLAtVVq1",
  "key29": "3izWbzmw8zKQdduSNFzSS3VeYuvQ8tXqwMxfUXxGVVkGq7T9mpn9TGKia94YijuapFyFy8wKXwWbfSv72Jz1K51a",
  "key30": "2bcArwddJw4mwdX7uJRY7fXAm5kmBkWGRF415hWgGTWdpZio2jZrZVDHCZEy4zuuAzHWBcy62dRgJpN3BUZrM57E",
  "key31": "3uPWJpm1Rh6VYHKSHu3bNEPJa9B7Z2aRvy5GzZUCvPPTT4Se6SGfexbZ1qfVXTKGt3FDWrVGvGCkTJd2G23k92Jv",
  "key32": "3LnT7DFdDGefVL8ijHnHNYvr1qanVCBdBfSkApzYY4GEUNuHNnaU4ZXqLtnD4nXTGXw81gWAaNhp9FPPQgDM16VW",
  "key33": "4pjgzFAK6WKaQEw9tRPa7otNNZWgqhEKsy5hDozrYW8KQKSYfhUXPu1wyTMjcaTmjMbAJgwt8nZRjeuriGVuuciZ",
  "key34": "638wdYe1QRnMQzXCKapTU3jC6KjM1mowGVveYoJ8N67RFTffgVrk3zyCX3rSgyj5qGyv3eqeUCoLY3twYBWZrfmo",
  "key35": "JQ3qrvWAp45fBr4f5ut426ixhVcULqpQeGvxwNctTTMSzDZpV3CSr1dqxqdGJkYWZYvx6s1eQtJQEgdu4tngrfL",
  "key36": "dB5gxNkcJ9JVqQ9xw1D6sGJ7Y3aMaBYToZWfsM7m7C6WmJytXc22wcHFfXy1Ux2WPUidaUMZ9CWJ6mkKxfTcyKk",
  "key37": "5FRoJZkHsDM7KPjUbUM4BrX57naQC2EZFYf55CEvmefRHUBM9gQYyNw32asvHsvw7cBPx3ZJXp6sLHjrcYcLhtqE",
  "key38": "4gJJSPLCpRwhirbEpy69uRrsrR8qrMvAqRZ7Z4jY98LAASn8Bsag62bQVgEVEizKGCgHB6Jdd2g2qJuHxPRFCYFp",
  "key39": "4XMhMk1Gt91iigCMKT3Ffh4HcFmB5Av9RtRGsaPU8T99yCwwzcHPdPkT9U17jMGuCnSrznHoDqF7QGHZ6GQC69uc",
  "key40": "3KQR7riqrtEeruhEKSdHfau5p6c4bYMoahbN8ahRrHfYWpAMkwN4xKviEDwNpC3JHJY18Gy5V6B6Gsgi15F7b5hn",
  "key41": "57KmF8nA4ZKcKWhWUo2N89tpu2o8amxa1eh1uPdpCZmsS9436kjTiCnBe9YCwK7Cepz97gewHfNHUeDJjtPHpkT8",
  "key42": "2hXkJBM64otYfbXUaf3q4g2QTSgeq3yqCijA1cmjjx8n437FHjJR6b2thMDKxNzsX8Vn8k6TSFLbUC8M72cEZYXx",
  "key43": "2ssBHVVfkHBuvTd6puVq69eZH5ATW1T3JG6ctEsKcq1VodZaTeW9AEr4fGbD9yNk99YuHGubjwJ96TdX4qgUMYM7",
  "key44": "E9g77HWkzzPesoc4KDFfLkKpGG4SSTPgJVEMuJ9wXA2kRaAyPesMtZnTnYrTuBc4AUVMXkysC8aDj1ZsUm5D4oL",
  "key45": "5cuWd7BgdN7twkzyS6Gs86ehk9feAFo71axKzzMYCz64cJdPJmUL3Z78YSNXdDT5kjRP8ZuzEUL2WawUQtT4oFxL",
  "key46": "5xSrC58FsxhQyKBW7PU8RC3ifvyvvHPnQFy5RruQ9MpmKD1ePtPFFLNFrfCHtsQR2kVdJsScgBpvguRmx7pAiZnZ"
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
