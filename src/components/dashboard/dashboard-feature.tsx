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
    "HiqxRXmHfWTgyG6wYQrUZy66vYJhGDbxmSTr91ZWxM8mNHZEsNbNAgS3WjYuPtX21mqqWQTCCJScgkbHXTUqc17"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54hdCdMcU144PNWCEwHRSgv3iToGzZD7T9RX36PyZBSCRLk2HGmtTuUjvqaySF5BJiJ35RyG6i7RYrnnbC3FW7XZ",
  "key1": "5cncVmnCeMG4arimrFcJbdZpBeMA3qFYYZW9qBDbfm1kzghs3tUtY69BcojLU3evUvz7CBoPvwxhzwE2ZYSeZjXB",
  "key2": "3y5F4ruR4XpXJdXp9QFnavG6KmNgpMPM1KEYaSwuaGC2ZemN4XG4aH4r6sX2Qo91dXANRC1iQFzzGSNaaArbjWms",
  "key3": "2CAu3G5BAtKtUMsPXpdQpuvtjmdhBLMj1toPMUGWpYRo2X5HPUMPKYa1qYGer3JPoWgUTyrxRoBGyEF6w2ts2mrQ",
  "key4": "2NXmf5R1cmN6jgu5G5gW1W63bijvhEsdGDUMXv8hNAWW3j2SoixsA78fPkGnye7JkgeFeBYdU9EmjERYE4Qvppdq",
  "key5": "59444RqixShz28nB2y3HYDGQrTqeVsSiqukyudigScCJoPLNUoRaMVa3TegjQZqQDkfyhM3cSwU8w6kjpJx8f68M",
  "key6": "5sNspfGnD19jPgttGiEAQBPLAMZWPyeea1VZhbh8JNygLFHVMjA3njZgnQoKLWCpd3zErwEmZutoTo2ZN9pDp8vg",
  "key7": "Sk1xVd8SfH346xiFHsmmMqCfAhpwf4dfZAbZdzEc1oebTCC7mb62unuhV63Ag6ziAXbJakrTc4fnePduAXiuRSD",
  "key8": "3GpzY5hxiUCm46H3Qf9js994kqydse6YKAYp1iE6YbUjxqVV7iBf96kyfVZm1RCL1BeG3pATvDMxmr4DeebC8DmZ",
  "key9": "kAE4jyeeYd7ucxxfyUVnyp8opmCVsYoLnJ7yPvKUpmyrbTikqZ9cNb6Ak6Jgvden5SaUt7VdLWmemvruHUYKRZM",
  "key10": "zCrujEBpHWLrN1ZREhYrnxS8Ub7mzYmrkKuR8QTEk5G7AJZV2afwegt9oFYh25kuodJjdQupMQWGUBLUWUnAMNi",
  "key11": "5BfiuMC26TDvTdtp6zZnq6YTzUcY1DMXFP43jsJGu9Vs8UazA2LMqYFKUezkwgeZb8iLosDuv4YgqRfHPri89fa2",
  "key12": "2VGtgUZbAghEzMrho9RAxGXq2T45aaHjiTySJMVXYGUhEYBbGXNAiqNo5ULHvoVpL5e7uB51XiCdQL6TVSZ38Uo4",
  "key13": "2DUZ9sS2ji8EXB2sfTvufrk7uaE1U7xiMY8RvPYvEU4LawDiYK3sZ7aHp4XsRsijxiCqwzJtvnekiF8ebYBirvYQ",
  "key14": "4PzHcWiAD3u9nDvE2TmopYderaTdthoYutvmMACjeFJJCwHQzjipr9aShsV9BqYPAUyB6zGCN4d64MD2g1RNv8T5",
  "key15": "2E5mM8UThzWUHkVraG6fgHgzQhPi8TuTRiJGAYWxzFUhXMi8tzbsw6Wih9Ha2m2LEkWKU4F6wL8rEVmMtU3feuEw",
  "key16": "3j29bgHYwa48Y3Zapjruw1LKSYKc3LWwhRmtTXLTJgqLe6MU7JLgQmo2FfFrhGnv4HmmgMJJCZxr1XBgJuqnYkXJ",
  "key17": "5Y21T8w6c99d2kgUWRQSJUSmH3d7Uqgq4ASoLWuF1uZ6m9kMyvvdKjbcoX6Th8Wn27DvAEHfy7ftAbN3RozihSKC",
  "key18": "5f2h5UymfBHh5djbwWE1dvvSqVdvKYkZdZcCX4Y6vh6VB6bkLKq5aH4DSfrsNgZBRkQsh7r1UihPE5zno2Geah2S",
  "key19": "2PjfyFdDRDxUVVi5FiuuRdvETZHELTvDcexdxDLLvXVhWBS2wUwXHkkW8FuQrQS8JjenQYLWaFQ2B8XjwV1tPyAm",
  "key20": "EeRnPELmT1tVZYW4Y4zRka1nnPQZTBa9JKuPxsA5GtK5Qw7tK9xJuuQYPLMcpfBxionYFpKj7bkqEVYvtHxc4FT",
  "key21": "4Q7T3RWbNcxu6piu1nfKbCN4QKb2krFBDsLWP5vufBCFAwTcbJoGrmS2L3VLQ9M9rWu36gsRnqvfD83HzRyMWa7G",
  "key22": "48jJNXVa38VHTJmQNqaBiZSypnwxMvTT527vEJygfG853RFTXKwuHPJ4kKkZ78JHNGrPPVYJ65zxxumf9WsPennm",
  "key23": "2vULAjV8fwVbxVzSBLEnpSFp1jwFEAwm2novSsw6aXQMYsMVVmt6KnqTS2UNx6qBWtvAJJ7YTLwR6YdqdWvn42TM",
  "key24": "63s9RnkQqbRJ4UhaLm5f8sEsTWbc1HgSUqbZVLU4dbHoSYas6XEkMqCYxAewFifoCE6cgLi5d93ytrrKy65RXLWx",
  "key25": "3cHaZi4js1TTbCd5L58fCFhFSmnWc3NWfZtYndoYhNCEZqudQuUPt4ng7x228TyMTqdafqbRbsCcZV7XgtNJVLkR",
  "key26": "3M2i8T1MQw1EYSXYTyCgyESCaN6hx5SNtmZUaN4SM9rYqWBdGCyCyFPEnLR23iGLzVwojN3mGsJV4ybs3B7UhX5",
  "key27": "4C6NLhMQmRrREz3vcYXqPBHM83LcEyYyXzqKRsAZDSS2EFSW9XZRA2nwCUBsedYDBWXcfSLnxnn3pSujJduJRzdA",
  "key28": "23XumEFVo8VpK25gsbYrfrndutMufEsXi3J45A63SxTrqeDGyv297VTMpk8hoRTQhzYQD8c5h2osUs4LWcXfLLTP",
  "key29": "5H5jdGcyMZwSFWZ2ZfGMwdTHiyEiTEf7iLWMCUfAkteeWGu3oCeA4hGSet8gmuzehebxhfv2AP3f6LY8TWLatxCt",
  "key30": "BRyFrdFi9EQYeEEPf3bvRt9j1WoWgd8tvRNCn3iZbN5ggKjhwAWMcNoTBEu7EAYm8aTW8kB5VYmCb5oyjRPo35n",
  "key31": "2PQnCFqh7mumM4sVHqBKmmBUVPeo3sfvmAkLEnDDLSRYCmfmo6pY5aFVEEhtiVpdHeoeYzEuvxdg1PLFigT8qP2F",
  "key32": "4AoQdEMudTGhppP9uA9gpqwGdSnbg8jZL1Y6oZ2nc58hBcGmDC6jzgJiYrcYs6Mke6ufys7MmvFwNaoj6vBhcGZw",
  "key33": "3rVuwySv3boRsryrZC61HN76YyEx71Roh7fd8xzNPou4kkZDG3VXJbGjj2qV6Cp79a7eB5AeBpMcHVo1oF8SDuCu",
  "key34": "3FcyZ8PA3ph7Vmp7QULuGk2sFwBirxWfhZNFB8QbZkPfYu1mPKJ73ph6T5c75Ejps3vnf4qvME2WUXSwMNjEpTG2",
  "key35": "4RCStLE1wCtdayc9Wcxryz6efCiySokSXY2EbBfmzLbVsX6Tg8UL86iArpcehZ6fNfLCvRikYHRNWrBejdHaWEPr",
  "key36": "3HwVGepLrfhA7eyPhymAu4KT2kTMyJrbhqE6QhW2oBJfENQEQWHb1NdWX7ysCeng6zhZZoK95SdRPuPQjkU9PM5a",
  "key37": "2dPPLZfk7PuRBPZxpY53Lbt5DCC7LKy8rHeF2YGmprYHWinKtRZ8ehQAS6W2c31ttknET5diXipvkTNSvGXxesSs",
  "key38": "3t9FF4Wyh5yDV6SLFvQDnqyncxuenUANWhJuFGWMDGeMCJUMVyTk6QVhdWYicBkAvQBVdePybP18MSbvkXcqRYwT",
  "key39": "Drz7QkUJTNUEvE5uZp8DH8ApMwDzS9tVZ3KqaX35pzdpb5d3RFvuxGu41iiLPycA7TGu4gGqsM3XuzYpZwSYXxt",
  "key40": "663vom3qjAWm4Lu5nhF6Tkh2g2McwWGPP9deXgwBjCeE6DyyZeRrrNYyd2L7KdcwsJHNecUvwNPc3TzXooEEuoVM",
  "key41": "97by3FtMHP59GpKAyHDgBVoUQP8LobaPf3XmBFSFgnHHWQdZ54jNhXgeHJBvMwt8C6dG7LicZr1RWtXGrMz96MC",
  "key42": "DP8EbbP48RZJySZsDrdsHvzPp3ECBjM2zEXhZEb62ufFgybHHLW8NGoqQ8zgrn2SjV3qcrQivLU3uw9f2vR4C6c",
  "key43": "47cgzwX19ctz2QdkAYDNgQ9N7NVYfew1YiFGB4AEkaBSMeGaF5ow8phUyHHKhpZKQAEAwYydoi7i9UW4E41jc5TF",
  "key44": "347mpqf6Xyav3EGERnEEDqopfvniA86xYYcjz13x96HnZeBbRvypUJh8dv2yvmKQXgAZU2AeBQLVpWKyhx1ratQQ",
  "key45": "3KhyqkHVzLC4NuKu1a9CPA7YEuVNX34DXj35vAW6GofJFc92V9QwmLKoCjbLPpMg8o3iHnbfkzQrhyZYAuanatAF",
  "key46": "2Z2ycw6kUfiXKEexSeFDJx6FEjJeDX59pEyFrsgXx8kEWyxqtRiztfy7cBvJrJzLrftgtQ4xbvHYn6C8B3BBb7og"
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
