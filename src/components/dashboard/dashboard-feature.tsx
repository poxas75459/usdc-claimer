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
    "vsFsPdL9ssHHnbXHQHGPkvGR3wGPG6AYAur8H4yR47YZMgcKimkqhoAC4JMxYA9mz2gwL8ze2vkYRsqJCMz67So"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vgRh5LExnkTjSZhQHFrHr8A7MhDmgjttpeuWks5udqa3uAL8v4R2AgJU17EcZnzpcmmKMZyzdGgfC3HdacwmMw9",
  "key1": "4qLaBJ8Dx7eBaeJApYPR47sc4nK6ibR6PiDp4nEuWL9jV3JUfUVHnPgBn4QhT1LFiLHAzWCNA32kqWxwL66nU5jh",
  "key2": "5uz4eZGbSaGQBMifQtj3m1rPVEAM7Tyj8C1WMXVzJoLU4UxkPNMoPm1ynzVdfWVb1mTr72vfAmYdjYGvnpPbFzAy",
  "key3": "4CJHxza6wjxYcvBVBX8kXVgJQYyvjjngE9KbNb5E1pDQUtuAEhBQgiTNjf5XNNKCfLDSV8RABV3c9SrH3nf9Fyji",
  "key4": "2tWLB92ig5w54yz9K35io4PpKp5W2DEf4VZsz2MnRcXGmWxkBjtBEXDKRkVuPgsNFijmWRWmkswcP5mAsyzudWHv",
  "key5": "aXmSkMGW15ujtqTmARFJ3mzCkjbQFPJDGL4v6P7cWx4VpJCp8fqs5cepncn8M72gsYDRHJiaH3PdhyxnXNTfAUQ",
  "key6": "KhvavcZ6tMtb3uAqofkVwP2A4j2QEYkozW8XWygsCaEcEDM8rRJwwZ2UZfifi6kbrdUbVjRy2t8DWTW2SRJ4q2Y",
  "key7": "4Uwem6xA2koMiYZDeRZfRcarHietU9RHin4yUcMz4SSqECoXLQeSkGpSGmf9SRyr62E2APW55tWK7fR1spuX9dsb",
  "key8": "5fbGzYg8KWFd9U9XwiifL9H66habxmSasaYszs2wvHPPoJ5SQapD4BmAWk1BMyP42zJdhhzSMzTnBFtRCG9hVZfc",
  "key9": "5KPMtxdRTjMM3MxR9Kdy7fwLMcuzCwvKPfPrZme2r9N22bYFWRQVnhVrYzY1cEfUxAn2CBahq4F2e7utoetEbt8i",
  "key10": "4mbL6SM7Yu1ztqy1mgZaT65KEbbcc6pBNvb8eoneuF91r8kbwbwFRZLdJkRZykd71qdq38enq2eG4gNYGwNnUZqY",
  "key11": "66sf5sLeSMvPSXuvzENLtvDHuwMiSYkymfre2VNE7CvGw2dhWVYBq3LwHEomvAdAgde6UGNS8KbuVfsJWE2vhTJ3",
  "key12": "4aH2h2tDisGyHqaCgLA6Nd4YAWn4GGWXXyAor1yvoYaYxufnrUCSHkaxHjeqhiHRyNgDHq2cVKVeP1hQNFE6ozqD",
  "key13": "4kXoArExoFTg1oTt6eCrojoJdUK3fF1oFmtVjEiUqkUYVv51K6iFjiis9xeTp5N1pjFxLLGACHeJqt98TPgDKgTs",
  "key14": "YmtA3FJiVb4CLmgFDduZKxtqDzuAb7k5DojVBhkG8jQjHf9dnVo5R5kAiE11Tkhe99QnvY9NjQb94MWCoaHRwoK",
  "key15": "VNu63Uc4wBbHhtTRQUjZ7KHV9fjM6eZzvRNYLeoBFHx6KkMuhh68kKgKM7tu2wrcW2mKXqsHLmHMXk46sVKuhyx",
  "key16": "5qd4iVzaUxNxZfLUcHwp33tg5cecX394xmpRsGbEjbKu1Fi2KkpPvPZ68nLq9irf8uLCma9RwPeMaSii8oFoKx76",
  "key17": "5f74CVuHKxPvUs5phiDbqbarMMqySBf5j5tBxxP2HJ4KC6eMqK9GUV4j5FXFMk7mwyRnUAze8hbBKuRH3XZEtUq",
  "key18": "g1a8KKna169MfcSQ2n4ZgjzQKyw1Z3ZLwUpQoRpnSdVX8Vxkfm2aivnNzN9Aaiz5WPTnQ5tnfKRXEZBBsXCY6fn",
  "key19": "2fTbwCnoQSt3i8aKiASSg7s1J3N5FeFoPst6fHSo5ibGd4gQW9SsoJfiJ7Kjp1SdcJC4DkhqdaJ6jL1qd6RW9E7g",
  "key20": "5xZyyeGNrTMLghEMGRHZTvzq12AsJrDbjmyDeWAeU7gQY2y8aU2HWnsPg9CP3U2VjB1JW6cfvrP4YdyojyZQPKML",
  "key21": "8PNaENWYiLExuq5kYeWaz8N7E5tJP9bDR4s8MzCQNtwua74duekWzFhkmxQkS3uNxYahJ6HVPWSjcjwVJrj24bj",
  "key22": "5GNjVL4faNFpTP7TUpAerttqyx1PgW8E3iEg4ARMNdipX7R8cRPfCbYqwwZet3GtzAwwjHo9CgHWozp7cx2CTzvR",
  "key23": "2Xznutmf1zRF9gKeJXkX5RfEA1TZ5Q6JUE4ajLymmBNH27gGFaDM6e2cu8e4drqn3oUo8C4F6a57zgjss2XcAqAw",
  "key24": "3vby5geL5Svy6Ah46DEwZh8UtmQ6BY4tLfWCmwdKrPrDNXEu6zMCfTpViC4mBUBwCpm7UnSXWP5bsvptNcZwubnM",
  "key25": "3LDzadms7o1Y9XFYZJFmFct1yYGaJ2GtwQuuQEwcE3vVN62nffRSwMjSwFB7t9Vepqy9vQXGTwo2BFm6rjEYudMy",
  "key26": "2fyceN8bZfq3EDsArpM5T2AEHZXxdjYbtMQheJ9bYBVBGZZdB938zCMJrLnY9F1eScibZiw3dgkDxtL3xGS18hc5",
  "key27": "Y71Mb44xJgyMtbCS1UW5Exujpj2MFxxuPEwWbuQankBy3CEWPGC2rsxjWSBAMQJxk2raKURAAXPDQxjWGF8fskJ",
  "key28": "2euDVy3FCWKZhoCuadA2FUVUc57qk4EsyqMrThHn5EcvbNuuQEY3f8raQNDRAFSBgKpGuHve7SKmDt39vwt5PkEY",
  "key29": "3SdtMSk6wZKx2mQJ6SxH65YkFZQR8GdCLM9pa6mJB6xZSYeRVtfRbu4xHiQPdphw7AmVn28tgLNHffH1oRiLMGcS",
  "key30": "3cM2s8Aqe2Vq9aMqsyY6XgJVbeGGvByGqSgrWbpT7dKxFTSynWjerJpuNF1g7ZBxQwtFNXKFqzmmAzHpHo6vXBPr",
  "key31": "22NkLD8TZZaSwTNMY9ahGwDQs4FyqdHtxRWzBSDYX1sGGzjdmCLnnu2MYtYp1vkXVwFt7CJgxVt8npSYBtPxpkhM",
  "key32": "4wf4NDKBD7m5gNd8yhUg1DzjYcZbrtSEvzreAh1UsTJwEByWErKGb8WZFHabiQdCcctmbSzjt5LcFuzTQC6hM9BH",
  "key33": "4Bx9ntHnhPjVPXi67uKNt1GEZWvwRKGT34KLCGDEBM8ypUucoey8754xu8aAvmaUqEZuCmXMZwbXDKbXTFQzUCYF",
  "key34": "2R57cY4VHK53HU1SSrPp9AxTZ4iwhukeaFTEwLRJp8DQXQYCzSyWnpQP3r2iJazCdq4xPAHsfACT26RasBdmDKfH",
  "key35": "66iLKDNnrHjWKfrMzCR7FfVPKNhXW4BkGVMmwfKZtyoPNKV5iyf25tgonBXzfMFgTcjD1RfVsonQ266SNwdxMbpb",
  "key36": "4gZkreEeWNtfyBmNSVyJi9DzaKx6hhvSYKin7FMcBxRfFQAhWGFz6bVeNhgcnhgEXjkUhoGvjHon6U5s7XL2ZbEu",
  "key37": "4zufNYVmcC5ydBXwDZGJ2vswvNr7raiwZJMaKK9mM34vAhDw24cweHeN1xNHYHbz7fp45nfgFRyEigR2ZW3DTY3e",
  "key38": "YJUeEmECLtdLbuotYqZCUAx6h7TUt9mYFx6dP88zLNDnuNpDUtgdVBdBFh8xhh359ZyhqTkAudFB9E8D7mwFasx",
  "key39": "2Vqi55HTXFBKbYjA7brEizBCa1t9atENFw7hMKvBf8FucdiVy35GYQhQZCj8AbwSGoQ3uXz4Ux5TmGoLP43hLgzh"
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
