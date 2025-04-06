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
    "2VmaBj6tqJVCQcESvU5Lvc5Ly59Pmft43i6s8atnnER6NJwaYJ9oNFBVUvCms3bdvuXPimoxN6ddUTSkr2cBrKNS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Svm5ZnFSfUbLjTt2GSiEJAxC5X8xXyqgtkFmwRYrJGVQAskKacyKmRrtE5XZiMhYB4FpJe5v9vSGwFF8R4X2mxz",
  "key1": "Q8LZJHh7rgbp3WqXkihqpE7t3C1VoMa1FYn2XowgBUuQUHxrqRwws2vASLba7ELhnEw1VzfWgBQsrt5jHWeZVLL",
  "key2": "3aTmH23wKxdDkTyJ6jhQ5kHaFekmkprDPN7GacUsmALAwCtRZxWQCuvwvs4FRNgnHiEpfRB7t2n2QNrn23vMSPys",
  "key3": "2TfGAheEHjkFcBDWGvMbDZJdB7HGSmy3ZuTPm6sSev4shKqPz3jKoS8HDi2ZYXn8JshqwfWigDrKjokM7gLNibBi",
  "key4": "2zLNmQcZUuqV1HRMF1LBo1ydGL3VcbkuoAyYu3SPRZQ91PQPiSWsSyLwtcPfVDyEdmDkEmaetvSNDVShMYAy9ufs",
  "key5": "52Vsy7qgGj5YwrarJS9eTZ9oaVXuvkTzYox51zcj3rAFv7Wy6CJuegjhdcZSkB7q4XRxyo791odFGUxCgqJ2mGHe",
  "key6": "32xGuJYhbkMV9YJDg4QSEmdvPGijkBwQch4RMjNHhJ4bhmJKVJ9XuwCoTyUPobwEFFuv8G9ux6XXh9corv6SyNcg",
  "key7": "3fBiWPReTBL7F2g6GBUYNNnZs1BQSTWW4NENXAU9nMZymgNPvqssRsPiLMFf6omxMrxW34TjBZuM53kahq2tFgej",
  "key8": "5rN1G2gWbAs3PDZ13NWxy3mxbtGAPHgwy4B1vHwjboRVE6BM3NS2MzkAduryhWf42o55RE514E53GTrWcm2JhLKn",
  "key9": "54ue7qvdpB5rwuTTuDgsmLFubzndWGZ3pmgDnuT68Wjmq3i3wZBEiCEDpZGUaWiaobnbwYmhWxB4kEeSmwu7tkjo",
  "key10": "46iv8sG4aH4tubcck4j1iLkkPXjjdxMsindSAL2J2ei7vH2U214shqNB15bhwHttoC19oqVKG8HZu6wF1YhNkTym",
  "key11": "23nXZ5oTth4bngTYUXbKSLrQsNQfjx741FLaLqgRGEtW1ovfbxjs1CwmGsq5iNVtWE9sMBapKs66oytvuwkiLFcM",
  "key12": "4C5suYJTfSSFjTXM4A7eKvyqtanE16dVr6EncgjY6PcfzCQE2Xo5yBiNZ7jEC1ViGnBrAPGT8XkjDYKN57djjgXs",
  "key13": "3sbpgDNMNLyzKia7rCGDmMuLk2MtrzxKGhiE6k8Rv617CJQBAJ21o9gkpgVAhQL8RbfZo4vcGjoNBG15EnJRDc3",
  "key14": "3TAckEYJx17sN8cXsP7GUCh1cLCdREHvD8CeVWwafvyV1SbwAQxVofo17qXRhTeEg7C8x21P8D5woTQGHpP8EB85",
  "key15": "bmeRCc7c4UpB9Pf9hDJRgChS6Z9BF4EwnnhSoVbZdDzj6FP39So9bSwSaFp4NcYMq4wk4ZZAHzJQrjJbvaziwLv",
  "key16": "4ovqeWd7FyugMXTF2MfKkEBiMtDj4cs8pxKzfWdEJeEX8hbZJ38vQj2xsQVhPJFT2CojQQMnmCg5Vx6YUuWGL4F6",
  "key17": "2q7CU5HWj6QsZ4BgM1Bfh4zB2WpvMCTDa2ofTnPT4wPC4yRh9W8weMqzcemPKs3vL79Lumd2LZzbNYgZkETmdmiR",
  "key18": "54GxDgFn42LUsuGENM3pCSqxYyCdhQKDNnt7UzohHXEUkofLcCfDskqPPc9PZ6oiPPRZT1eJRqTEG3BVVVy8dVL7",
  "key19": "hkuCagM76WqKaL9y5WCfSyCQLDDBMXpghVV249Gc5tpgDvgw1MVXt3pnvqcus3aZypH9nthRvo8TGCy9WEMrAXr",
  "key20": "67bFFyNemJiHQGUJ9kiCdtnQeoc5Ps71ZuytNt4UawpKmUGhL1D7m9WgVaXA4AbyowyX47iR6dDEBHzbgtfUCsmy",
  "key21": "2VJCe4Tv2SGV1vzNNmzqNgMbcfWaVfLgrwmtmZpCX6u7cgsWpqcpxcxKoA8FW44GQ1pTgJKjBMFX6E6VMiLuK4aL",
  "key22": "4WVvUi9ckAqRZVCQADKPSXp7eLs7H4oyY4v9YhAihaxisSWUouPc2JY1SPMxo9ifqmUvSoBsBp1j9RGfFWjPp1P4",
  "key23": "4XYX3kZrGXDtSipJBhGSZk383fn6Cc8vJt5M6nHV2sJv4tRa17XtCjn4bCoDfp7ayDBoazZUJ58dG7B3rWzRzDXJ",
  "key24": "5YHEbA1ieuNa4rT5Xb5U34iHSZzS3yJX1FJiBFuzvU27N9zrYGsdZsAkvNYHXsJFDhGrapRwne8vfmKWAEuSLX1r",
  "key25": "2Fnc6k9JxGDieFrVrikFHDiHbffj4yi8tPH3HktaJ6viKz98vaHvWonCzJ8DXi6x6FZ7jL1xRgEAMjhipYTj7MsG",
  "key26": "2V3kv7M1n9SJcYN3M4FP5Racx4JN67mysx6oLLxquo2KbX9CCVGMf2KZavAbPP2Qavn3EHJfQscLqFfu9DMQWxWK",
  "key27": "27suAMovWtSWYVKmSWyDhJ7S5rNsvMoiPDwSywwCymyavckLThrWMH9bp6UdUCHSiPXBnMEwdfd5DLNMTvh63t2v",
  "key28": "5m9wDVKBugy2RufrqCtFMWdva3ceLHR1X3KWUCvpUTuf36pVhPfDdVyhHDAvsoUh8k6hCkjXtmzBWkWzyHkiS7LL",
  "key29": "4NTMuHk3TgdQdxEzvCeL3yCUjQdUwij6cuPas1vooLCX1AChtcd8e3DvyeX8iGGbPUJ4WW7bWcEHJGuHAcvR28J7",
  "key30": "5adX7RcMTz6MShWL63NFdNSQKXhWJ6kVSV2JHiJL5ypR5n67uZpP7kw4jLpqF94Z2RTEmvTQiaUaVDzkc56cEEYN",
  "key31": "647wTMb7adNTFBMT48Vm1BtWCVC2m9Rf2jk11U9qaVuepdSe4Axjg6wR8wBTMPi7xj432Z68RGpBu8vnFTCa8JNg",
  "key32": "4zQapKKeqkSVZTETZ2RsXhRqumMWXPuv4vq9RgzFdWuKtpNK2Qb4ahqpzx34ac5vkhpFc91pN4AGCe9jxCz9BUff",
  "key33": "3KC14333cXcYZyE6C1G2xyNDeGD7xvaw4c2f8JofQXNbQ6FpdH6e5X64wmwCqDhMn9yV148YmnxHUHGkL1xMBU8t",
  "key34": "245vDZb541eiEKrF7ZTJWdNzkKeFph9Q2ZTW9CSQRDHcadp5H3S4FhrvDvX2Tq9hEuri1vgdpYhXiwxoYffKfGzH",
  "key35": "2ggygQjZeAm78iEvuUDnLN8jVYe2zJtp92tTDpofUzCZuFYo4GRPjoLsqHgefy8bcDaxZUPH2PH66eh2V21yD1wc",
  "key36": "AMKs1FRHLtaSA8k5tSBpF8YxED51qyCCFPn3GD2NeLqDmtUXiK2HzZz69PYymc4mVA8qy7MML5mpsXQBnfjRgeD",
  "key37": "62SJFZiXjePZ6T8KkGThGttE3Qea6ZwH9kG6MKDdG9qNpz9icZyeBAH889xsrecjnUNRoBuvyG8dqzdfMpWK132C",
  "key38": "3bvz8a6hLQUdnfzZMoSMpCkMzDtXVgvN2R1k53kfREzLPhKVTCZsRr5GDbC5QXLbTXy8et3Ypc9eVcmYp96QmWkL",
  "key39": "4b9cdjD1CCngdWXpRHc3SwDARib8v65bQmVjYKBXAGzGxLjTqdkN6vbAMrFfXDKQmMZ53tBdtgJVg5LxXX7YCnyD",
  "key40": "4ae7ptrHQ5DQJZvSRVTAr5ZutDRZ4hJg9WphAgHp9pxesJ5iirAGh5ub4emtW793KgLXMvsZ1SejcVPUvudwtFmt"
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
