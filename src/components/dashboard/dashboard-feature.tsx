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
    "4sHa5W8QYUUgCzeqPMdB5t9UtnpkTyYu8BSsPv2NJhTxbLR2yJnsCy7TiAKsYnSrSSF67bdweD9urYxoYLmVhRuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HzN3CNAPb5UvsHvKR3koFmxKJPFDSMmDpzbmxwFXu33LFtTFeHzKMXraAS4jgyHiV9P93DxdaBDL36hc7YFYkHj",
  "key1": "67UrFZ7FmqDrLoaD3TTYvFJEYB7FPiCswBjnYB8LXKFA7fLt2qTwLvEvLd4VzQi5vmz7v5JTJaSjDJB8FsdnDvEe",
  "key2": "38bBqBdNipWjprAbtyt4wcfoyMNHuwu3sns58tdAWSjR2c6tZiA8kniNmEJ24xQUpSk7RNjJCJ92DD7Pzqwto2QC",
  "key3": "3JNeeAJ3DxXvyKMGCRmqT7Vih8B3i7fepzjPGxG7TTX7Pv2h3MJJ7wqZSLn5ujrzJXybmxbyNxrj2QCZTWt4Yeuz",
  "key4": "3ecCHHtQJtRdsLJA7qrMFTSePStJ6K1kkPmSB5YQMpLMYr1v1fShwwYgpYV9ep6r7rnDQsZ3ptpVAhZKo15UVP4v",
  "key5": "3h8chKScikMNuFAVTSAGjK7yNULEkBRtNX2SGN5Pz2xjnsReo1aiW1tCy8989oXMPx5z55J8duyuCnQG6eYfaZKw",
  "key6": "29qrGYskwDWTRAnfkRRMQrgAPXDemeerXDG9KwY7a2cyzcie73FNmV5rvqJStLyQEC4Gw5L43mBn3uJ82UE7NLZM",
  "key7": "3DzEE2bJaxG4rEbAei9FdN26RhogQ7qqJYG7dWTa3eFrvhco8L2aPkYNtohemHwsJpNNEyWBg9hbF2bnxnFXrDoz",
  "key8": "5YWuqteYMu5LWPX7qxbLtRcAL2X6nccziz3k2KzrmU8N98cSnqbmZJGmQ1g9JM2mSwx9g2SJEiKVLSTuWr8AmoYw",
  "key9": "5c8uFAgMjXbsiTrKim8ZUoWzSfTBiWcbj5cNRE7pYYEjud1wdtYtgsYbBwqmP9gfHwA8z9YPdmUqyb2BFShivh5w",
  "key10": "5ZKFSzZBFcBEPGJMu4sBMUMkB6czxhB7AS82asTLbiF3ymWwPwoqaRZusbUDV4Z9Q4RR33Hnz15VCk68Zuwvz8nH",
  "key11": "3GZYJyqa333rt5VMBbHQhwZzZ3T4T3tA7USsgaADWETMNLABJJdf1E3FiX9WC4m7jDmhhu4ShqqmWbvLkip2T8b2",
  "key12": "643fn3h3QaYeuVmzLp1FSZbTic4FMxfQnKmeKKPyQy6pGfUFS9scXPZ2FXdEWi4uDTddi1Mo4H1srKnXXA8KddB8",
  "key13": "43FQq5qWQSushcaZWniP1d8TKaF6oLCoZP9C499KU7X2nBPSVk6AimBUGEiKbWaunQH2F4GpE8JyDzKYykj2iUxi",
  "key14": "3EZpXb6as3XuCjifzGa6RUKxk9JYey8GDx3maRUcG2abiQPes2GkJJwbgnCfwHHrA2Y6BVrbizMWr7NCPK4RisAh",
  "key15": "2S4FFweRFzAYDr93QUEgC2poGBzUtXEfPjvgUCG32We6nHtG9e6d9VxfeZ2LEHoCggAFX9bBVZdrBhc9qczXRp1E",
  "key16": "5ePqvRSzFoGfjqiBwu9G1UoUaV4x2JU5cBfHMbPTqyx9xrMRMsARNbT21Kf6vPiHJ63qa9Y2ULgYDbKpkQUzfox",
  "key17": "5jzVU8rxH9w4rBcdXSMxg3TBgaSPcDF1oT2E2fwmvmQKEKHe5L1bJfxH8AgqJsAibrXtv7eNef5AdXmT5qHAJAfC",
  "key18": "4D5XHG7puqzxY5YrvvBq3zi6Q1YxHuKbefy99bX6HHZLujTrBYGwE9L297ZGz1TrnRBjkomAEjfkBPZRg1MPLrgg",
  "key19": "BLgX1t9AWKHHCYrutHQm1TGonYa5FR2nXkRnqwdhh7VwkPJRvB63DtkEcgZUxK8rHFaw4RZ7apbNqxMjrYK1URH",
  "key20": "2F2dz9KfTRc7CGfnAJKtmEruWmqSjFvNqz8sNSDG1tn8rbM665qvPbdUE4PVjCtvuH6vTXvGFaqjMTDXmokkzkCS",
  "key21": "3F9SsdEtJMWR4h4JBwubSNmgyVSdposACzoxVBmdGdxMqF263uHGuZwZS4Ja3uTabu5ti3KBqgQJFTvYxrVq9HPW",
  "key22": "9V7JzEYfosq9TyoDyAtv23ixFQKtxWPFM1cxroAzBo9if4RAG27tKGrXTkEHhCezCDndFysVFXYjb5iWjcXc6PY",
  "key23": "33CCas3mY7kDQiQj8D5Wd7RWzNLNAdMSTmwYNVs4Yjo8EvKb8yDKghxrXTfy8h3tcNTZj29B2q52Mfuw6yT67jGw",
  "key24": "5WajKb3QPozX8tKw6Zkv2wyPVuEuvL2XYnnqa252uamxZTbqXX5SxFLjCcmidWQxSoJ7SA6gDjyVYC3gUqC9WtaK",
  "key25": "2SFoarN25jmvafAXnEFed9kUDk23h1eFdfqJo9BMhg4MboFGL3Wnao3XyueEX3C9t4Rq1cyywKSfcZ7MSg6JAruE",
  "key26": "2vVN6QkGvNYb3WHmbt3bz9wt9C7UgDaguyDHbkMWHCJL42wVBuynUaN6jJGRJrFVwj5qDyvmsmbu76u1AgbMM8AN",
  "key27": "2pXQP9ycU71vPEwqedxy3mMyfBAAX8khhVXWH79PmTbf2RkZWhfvXcC1h8nt8zrf9iFAJzZX464RbzkEcLiGRiQT",
  "key28": "4Fi88hgRNYwbpa7rBggsGoqqE24KH4xMeA8fBYxSq5rcfM3yJjyw43PqgTYk9wzkdPhrExHQGKy9iWZj3CeY743r",
  "key29": "4YMhJgQcnykWLfAYoJvuN772ogRZGSDNjzKKVJsJ8dwUmGnqcF3zG3Vdm7Yst4nrsLVFWWvw1oexGSsExnzRrKnE",
  "key30": "29SFTxwvxnTHcQtiEDicA32BCF4LzUoc6neNvKzK52WAKnyHug1cd1n8FCHGqE6Vmx2dVpExnrqpkYqGW32AvdKP",
  "key31": "CRh3Ng9kP6JsQCU1iowr6GoY4VpxLDaxEyUnPxg4RmHKBkjv7i6JbJCNijr3Coak3bFnkowGAbSMPJ7swqds5Lr",
  "key32": "4FZCb9Whv32P39LhHH4sXD4yi4jAkqa19eY5WmRe5jdXeuEzaika9rnncwxkiB9bPZaTotTRDpe367aAYsD4HLAZ",
  "key33": "2f7bCwnwQbqGCUFhJnecszSxfHy1p5tcowRaL6rajG8fi1mV8oryf9nfjWEJDR97tVs373QjZmVsd2bt53gBGFWR",
  "key34": "4WacxzRCiHMjvYWfhiF8B6MnG5mSY9qHAYDm8KCyu4Hbx68TFdXPE8GDhiyTLU3VWBgjHM76VLoBzykt85YA8qZw",
  "key35": "YNDZsWEPRM2U5w5AARKPhxiWZuBjMYTm1Yur6UkENtcNKVZxQMoCZ4A9Mf11JubPC4fV6nGiAEwkdwCbA4GVaCh",
  "key36": "3HC6hmDJnxPCSkGgeWoYtdqjruBqTfwpSVvMLbkF3P8JJX7Safgkk37siYfVmuVaUFxGVXQsPa91oSptKiVDoMJL",
  "key37": "5y578wqoLxi1iUFWcbM9hwLQsfeFvXY2aKEEEWrKVaHaaEVaSMbQuwEHG3tPL4WRSnjVcQXLQs44MFq2a1bnn1Ga",
  "key38": "4qAet4K2MTpuoUrCpn7TAPDDr87T9Ky1a8Dy3rzBJbQac4A4sHy7jdLULNVuR5Psy5cMetK3CWK8ZJ9vidug7oPn"
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
