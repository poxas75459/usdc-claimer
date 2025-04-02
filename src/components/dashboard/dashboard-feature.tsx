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
    "5WhXfseB43NpbcQaMsGJ6BtfT5XpN9DktYCj3Q6WXvUdGSahjwGiMgN5M1uoJF6aywfH4eJnT4sAoR2nhCvz7ViX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FsvGHaunoEFVPvC4QjjY8pEkJUirgAcTbtZUpYw2gPLEbn2faPryipKbmT6fL28NvvJDPmwjxxYsq2kLPHcVUbp",
  "key1": "nJU9YSKhjw4tvc5uF4B2z4rGVsy3UJ9im8TB3z7E7W83eLuVtrG7jBbVtGXHcmXhxxQVr5x7n6piMfBGg15wrpg",
  "key2": "4MQaoPFkQ5QQQQ2B6Z4EgFUUvuxkZnHPjEyW9aUGe52pNnakYTjof72SyGKghqM1a3hUJYwsqCZMfPWWuv4rwtcR",
  "key3": "4GzRwmDPhkd4qd1PrQBDLqvvp9WCEPw61gxt2pYoPzzfk4C1imZizYxWnyAG3QGnz8uYzuc4nra1NxN4x84J8eEF",
  "key4": "2JvoAfQcnMNpaeXdbZz7eWE2zcYVRGgU5YuRSEsb1zYcwHffbZhw2KcfK74mnpYbLpQzLZHoWgBWA7hgxLvbRozB",
  "key5": "rfwb19dJWcoXX4L8zpP2UCJPmMMBe2K4W7fLpbqyBUwCrA4JEgcTpWKmbuWs2whw44bbJBfGxjGv7DiHwsGu5Mp",
  "key6": "4kvEPwtsmghzjvto5TEct2xcJzjczAf1BgEdcmhmLTzqpQ2TbZ5GtRUKri5YgfAyRsJcr4dpSSYNihLZf68urav",
  "key7": "5H98iPKL2xhBVYBzaPGn3oCcP1kAdVA3u6tgHahCT4BYszRwGYiUDU3m7fG14pf5dHSBdrg2M3oRb85x3mHRUQxh",
  "key8": "47dwQy7XfQ9sWc2BHjdUz3wARfAa3QUMAkANARG5FAnyxdUrt5ftcyhKa4hwZpNJSkqrBHfSJ6doPnUuMKhhMBK5",
  "key9": "2JTAqTi8GfnLxg1khRpq36riJdLVwiQY1ktFkE6xoHZWkFJb5xV2XwUk8gJmRaYfRKVBSEJ5kFNJDNAGh48ATuRn",
  "key10": "mZgdKFXrzr9ARZ9wAHPqBsunNduP6HigrVoNR993Urou9v818PSLZdXxcUyi8kSCKZq56kGVXBdQ6T739pXeRqe",
  "key11": "4QdJPxeUG4fErKdyijtPje6BcMQRFpUKXz7oXi43yWohT8ocd2P13kmoPPZsf7vPcnKmcQiy8FS3u2Agp4gj5JGK",
  "key12": "55ArRAe2TfxJRHdMPfZWthhjLfuuzVzncSracBUskKsUiPsFpGLAvWdKVPTssiu7PSio81wbt1FauJR4fdmURmT",
  "key13": "5U8X3aVVKn7oGGz65wNKaQbC6snKc7gMwJ1zLngmkheMwS3gn4gSsZEUyDjFyHB28FFrHSksQanhm4LGhyeEEY7T",
  "key14": "nRsTQAKx62or1adzPh6YiqnsyUve4yRwyCrUu9sbXqM2NBDMWDPgpHqWSVsDMFXzbC8Z8G81bETCSYtKBv5zAc7",
  "key15": "5Mf5bC3GnzdHkvokpZrN1kyQfqn2hyQkKQCukvbQUE2VFyHW2sw3CDHs6fwLiRz8Xfus8UabMUMhdvfko5aLuRyz",
  "key16": "NUw1ENHbE6ad8GoQiAa1tjhQBa4HhN56j8emNri7h8pjWdndtNARReXwkM8gL12JBZ146AnyQDQ9SgKMna3c9NH",
  "key17": "3zpZiumqEDLQiVPsp4UT7r5dGge8AFAJHh9Jx778KSUH9zcVK3tqFXRFy4HSRUJesd3ipBvUcSkn8DAP2WpXYXfb",
  "key18": "dwRbhBX6NWAree8mQcQEKam7ahaxKAPngt8vRouFzBaJ1nhfVGZBsXTr3wa1empZ4FcQJ5z5hdusnYuzicXtnpL",
  "key19": "Nc5sonofURouuGUVV7s7dhTGGKQ61EcCDieoCerYqGWuzn6oCF7i5rpxVPSg7CNa328uUFCK9ryzk3NJpLBU8jY",
  "key20": "5Wm63gJUfNUervM4SagsArK2SX5GAMoTuf7TWCzRjcZCCmn6biPbxtcNXi6ytZfsZJN7rKkqy4DuHDhTG5FHXP55",
  "key21": "258PocfvWQ5N5Q2x4BmegVSGt9z3u6jArGfuzsYvejK68BzFFxkreZo2foiVS34vHu6PDtwQcu8QEA5iexRnBJWt",
  "key22": "5L1A63pMMLXpmbgNBQQzJqg63VETgZNo1e4LuP3dHdWh2vBuEe6FvT36xgoyVkREUNJqMSzHnLa323PFqQoATWRZ",
  "key23": "2DR9vYJbwmFTFRX4iCVJvXz3ALyQkVad4UNJa8veSNXHbjLMJwAPz5FNjn4AaznXb5GJJLLpToZZ5RKFnxfZBejm",
  "key24": "35NSewxbLR3gu31pEPxt6iwzUHC4gTGsG9xgYQvrpWNF45MJ5LdByzn9Px7mTmcu7EobS2TsA4EJZJ2Jn5Fw7PmR",
  "key25": "3Dz98q6agVDs96chrYJidhPtZoneBSUssXXtkATxZL4MyVCkScJpmXWt9HhBK23TJyKr1BMHx3Pn7hyesFyFnpWY",
  "key26": "4e2dc7kCp6JAYhh7xGj89YzQ7uyGH7R5kyh2gyNdGU7KwRU8mBvfHx4dcs6tpSQESKqFmhLFhUhgxouBuJJxEQeR",
  "key27": "tKhQUkZLcv6heheV8sKbCBkC2g74aXLkiWxV9CvctXqjmWvQptWP4adqsa9pNi9CxLDNqqePCu7mSDUNZye6dfZ",
  "key28": "2PHWMwpgRzjrueqoqHW4GjNDjRx7FqmHB1qKKs92dCRBAGfwHLShWLdkUKGxop1zZ4JVUSmGYGiN5doJVasN6RLB",
  "key29": "2tMGXGqS4eGn4VX9Avjx5Gpe61esjzT5o4gyq8jxBRhojAn9AAUKRLpe3MXRLkq5mPkPykkYKk53NMpf3SToTM9B",
  "key30": "3fXmZyysyJH8Mn9Th3EzB8Deh7SdkjXQKAUmofWXQVLgm33pWB5thtgwLa4yXWnZmLfxSo3LCrtsyfc2mCGrXvb8",
  "key31": "49U2p8NSShxCkBULqzJNZcesbWTxAsHCJ36V5jrpNY7v79aSa7v8TS3YQY2YmwRLJzoUTKFiHUBH76QakWJb56oQ",
  "key32": "2KMnrotekFmuvbs4Eg4rzyuM3nZGavRpiaFGtFi4EB6SHUtmXyCiJ1cEf4GQBo4u7Dgzu1hvGBdtDVMHxEUTzB8B",
  "key33": "4ZJiCGUZkMm5UDuT4sghbPZgvcs2jXziSke157PFbVYhKK3vJWYnEW51m4zfzB9CpMrPsSVC1nPSAP9HMEbKFJtX",
  "key34": "5TZLdNeQAXeS6xXERgDdLGBJYTgjbgsfEYPT28nyqYFhJcodjbcPW4bZRQz9Hsat9EZaauQHFwMjsuodhxxfoYpb",
  "key35": "3QfDM5NW2zzdksZaN8oYdtdw6SfdjQL8dL6zeN8sW5AUZmWxFaytvKaseRhgYgeH8DFLkFeU7xnVQ6NC1sGe8tFw",
  "key36": "dXr6t3b9FA1vpF5SyPyy4L24FpDSaicwSvGCHGUVCR3S3tS9PXBcxTVVjdhTCaHP85kkzNRUsGYRCwzzsVA9SnN",
  "key37": "5DRy7p8AU41RnVWWcPBaQheJu9xAof4uq3zd9kVPTasqaihAfcZoaoLM5TjikyzKXKP7hmyobrpCjFtmZkZQdJwW",
  "key38": "3B5cCMqMZbtrYDBbpuomY8fPF7ymr6hyEnkpW8hCPhWVHhJJTA4sypQHoF7MP4DpPxMyTJmdVfs62cqUhsN3p9G3",
  "key39": "3gbaNmHK2iYn47aumEQMmEG45qcSCbLCkGvNtziHjazikR4KpjAebJCDhL248gSzxHGshqKEorkKBGSfn85ASMNx",
  "key40": "3Q87BomW1JuW13tVEu1gritJ2PN5f9UFmxC4qUJ762oiD5vpRrdPJ2psANZavnJxTxXpTYXrSM9qXfCqRp4PAh8K",
  "key41": "ogagUKjdoubG4JdqkZxLeXu3bVNTQdz8t5FPHgU8r15MGSPhBVwsU87di7tytqgPf31pDXpaXgS46oKFhPyS79d",
  "key42": "42pcg1pG3GH7uhFAtxF4xNRYVt1JPeGjwh4V6kYCHpjjn1NeWmyimPPjNP84CS2ZDcPC1kbDYTKBh5cXxFTZfDiA",
  "key43": "59u8o1XfappPyBNPcZr6Qn58q15FnaedtsFv7rkxQRqNNMbJDwQkWp1WXAnYz4iMsm1YGL1rurpwXfTvWS175V6U",
  "key44": "5m94qSVzXni2zQpKPq4kJYUVSARCv9YNQsgsYpwWvXisV4G6tNm9xCMonzjsNo6Ef3CgS6ciC52AFMLiNMbwq5vx",
  "key45": "Jo6Y6KQEUdPHPxkWb4bustZYggJo7oA4vwgKvrPWsfn9AuZyVPbR1tQp1pbtKQGPyZq65wTnMTL5WZP56AV9K2b",
  "key46": "34MkySpD9RhQBhZ5FsDNg92duNZG1hTY6eLXD8j9BZKT7Wm33mRokFUSE1YrLQxQrHKCQjZGmTcyjNbUH2bhMa6K",
  "key47": "66MKBiFowaYb7gcrXM3vg9Drr31jVr7JT175AXa9mm33qS14RTuurTJVPmCruQNS8FVxRSjBkBx82dXdrgkJaNkG",
  "key48": "2Qay8VH7PcGmt1fBRqWjaKq6mFxK29ioQ1n2sGXgqvbwoWBUviJDYLBQmLq5K6pWJK4w7V61DBcqtZLNAHs91iCF"
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
