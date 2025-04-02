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
    "5rGB99PrybpcT75aUCe3qxDT7kFs2VKmTkM21ELZZMP6uDxsfPExdAjbHDCYCwgFLRnFYLxapzR2ctEKdRsbh5iA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CcAeFmahRb6j7QTVkeBkKVjbbDzTAtyz86ftfuM477sZ9SV3DbYmR1DUoPHsmmiXGs15ZbPGUr9RpNyoFbBn6b8",
  "key1": "5rjFwSTytX6TatZuZbSYBwDW3dqQgzLWbddH5HknwFKuAPPgSai2ruN6GjKZ5Hy16PZ3o2MetftFchUKomnjyQnU",
  "key2": "3mxB4fN8c8nhmRV5cLkHS46bxpNL6nSWtxannVPrDqX6syrmD1HDu9y3dFJYxUgv48RSd35UQkHxw2VK6phKa4mt",
  "key3": "d8qdAmK7ognEVmaStnJP9szujcgiZDj2QTByFu9ZXBm37fzCyhvDpBmvHjVcCMPeMAaYqRBHp9D65AxrJSN89pi",
  "key4": "382TGQVtm1KcbsPfrW5ikgU67QjAqABghBcU73uAbjH2ijfgop2BpK1iKwttcHJk2VjQ2mgz1csGpuNvB8EvW63B",
  "key5": "2AkFyEdA1AHSqMxvrQTRBxFjWCu3VWGXbHw8GpdgQbRh7wUegSYNEimTQgrqqjxeFxXq2GrjrQ3xtTTm8VP5Xo9t",
  "key6": "2n8qPpXZeZ6iz3u3RR2jo41bxSH9SLtZzxAHovtVnxbs9drqXD2St1C1QGA6RJbcSEGiPV5CpicyEn7G9UBDCZxN",
  "key7": "66PtFfgPQnrp7L9hNhEaojnyL4XryDjgokHVSsn6P4JJmqKij2gZDEEMPRPLQGYUbKfdsVSwNFuwuZbk9gfU43o8",
  "key8": "4auS3iowUS6DgMLKAUhFW5KYtroS5k32eyBxCjJqj7oyn6iiPNL1LfnMm5nXQ6bMit8XvRR5n78qsP8j2RR8EsgM",
  "key9": "2tgaxNrtjYqVuVujQrizzHnfDUWSXxN1mZFL4XjEwPtpXtc9JAzxug7GdacsHj4qWKvCpfJjJhTVkG7Te7SjEzMV",
  "key10": "5toE6kFQmf3XX7PGquqfovzi5ymrFQwWScv7orLNtRLdPtKS8ybBGaF8sGiWhJBnx18fjRZFjjsS6wb4cNXqhFkp",
  "key11": "2b6TeNVJRrGFhfUMoN7St2grwrN5mwCNn6tUR7KgvECvaYW4eL7PsbKBiHj8V1DXrxTX1SxiAKAbJpn4JAyiz54D",
  "key12": "2iAvRxSDJNXJHqYRR6b5r7cG144RJJvZfngsqwuHoJLHyHpnigR35gvTFSmckp73qFqLNCFNevwWuisf8LcFLU4x",
  "key13": "b73Z8qcN4qSMUW8yCRPPeDpcxBugKnmoVbdaxBbTRNLrFsZJ6FEF7cBzRjrKzQDrUfJrGa4aR6GtSeRs5RK9vWu",
  "key14": "5nFWrBHDNZ4CoaLEJzexpPYDPHksUgDQbpzpix7PTv6hZAUfoXPrucHWXgcSZCM8ybtoRVmvHQQsmASeXeDzDNsG",
  "key15": "g2q5iz1dxKeCiNtuYLuYPPio1a3sh9AbLJmr84Tg5CMt6wxnQMVeXKHpB5gMxuHyqz9ruNqXdJZfmYm5ePvin2e",
  "key16": "3vvxNYDJGbr5CaMFQ1o1dcWjVNJbhPTRWw1KqUjNn8y6bpQCgzZtH7jSV2uixQ3iKrC2XtTbpSwQ5uV3Ry6CCru4",
  "key17": "gcS8xh5rTfSuVoa5FwXbPhp9VHy2MKtpScJhcz843KRXcprQvSaQs9SW6L4873vtJU8iiAQrbsLKJWtUG87pSgB",
  "key18": "26oEyFSnq6N34p69VKZN8nNSq5RUyCpqw91eA6dEDD3d6PwG93ETeYurcsy6EjJsEGTQaz7rDRvBXY6dSxnKTQ57",
  "key19": "5Pzm5mLQaERY56MT9k8YQ4WYJseoMNhuT4aYHSAbnfSyYHGQxb3RB4ukAKPYhETqBUDVDzzFTEQn9YRoVF4kWZ17",
  "key20": "TSPDg6tHyTXqaD6ZmDGMJUWdwUG2NQpc6WRYj9CyZLJ9yfbLdYNGjcZzzyRdcZUFuA6StgnWQkKGGrEv2agpajV",
  "key21": "5JUiZNjgr2ZuQ1DTWi8hgtoPoLkU43AKtyPmrLGLTuKC1xc2bw1JxmGKTAKqhXY41B6jPjxXpWMm2VrdLnq5ptkM",
  "key22": "VUkSmRuzDLfUaZKhbpDWURqRm38vUSK4GkxhDf5hYRFj57G6hU5v1ckv4NTDqTzU5XX1c7JGYsWTWDQC8pSBpZU",
  "key23": "EEQP2aMtZgK8o5tzPPUsccva2fEy2pp6MYyxUhB81cgWq11GaKLzM8dEZYH4fz3e8WaDd5U3sHcn8MhyBEy5J5E",
  "key24": "3fJXBdWgMtMXX6DWv4PX33w24gSoceUmALbYwBQCq5GJ5sLiUuSyktPKWmFaGAJL2PNkQfSuLfoAv4dM6uuFMEeB",
  "key25": "66vCkBdUEwoFAe2ny45SdyhMQSwGcVt8YmxAXB3TyCzUCSsFzSjCpvfQLWCc7GkiX8gazch5PfxftaWxLDLo5Qd7",
  "key26": "5G1GU66MjZkN1zfmHGzJsjCSG3ibvp8DoihDwib51xyPWTqyvSKfNjT6WfABxBDqYT1MFhyJEck8DEs3GYcU29Zm",
  "key27": "Udn8b6kf9mQfEnMqq6iBTkKcY2AsK66BuumwRqzvgd5L4YRbELen7Nb2EZeCf5agHEwfqbTQ9GfQWikpWo6k1tH",
  "key28": "2zwweDhZXpPyC6cKfhb5ReMA9P2SFnSR4QZrYifDsvFBw19czHmrmVX94RtvnnfLP4bVbfqYNq7j3feyoh7X2bFB",
  "key29": "4hW41FEMB9ynYp1jmdkHW4Yi6ZsiWqm3CzgWMw4MoaLhMjtYHmaEY3ERMpRhwV8w1pEWGiDSDXe687SX3Wo2yb7s",
  "key30": "JA5FewsnamkPVZmkJiaxCbts4EzCqCkcRRZzD2KZYNTTZrLMMCB1x9QVEzqMqHi46XezEpF9F2JhcP9u6GBzyCe",
  "key31": "2RUe48B8wn5b3xAvBHao1Q329PHXCXqxmKAGfusRRE3BSTYhg6HRrpW1M6HoDhQnx29jAnk9yc5KYXAyvtxCjS1L",
  "key32": "2LGcRQwuXxBHZn8WiaT6LAFHbgRSWXuW2ZxtnMVADZ81Jpd9ivQpFryksdWpqWNVA9RChvord8Ny2UWCbUUTTKqj"
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
