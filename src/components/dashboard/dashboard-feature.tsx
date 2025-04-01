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
    "HUMjFVNVsrWeXusBaeGiSbqLfgyAgCthJd8JseG5du9BHnuwRvKckSrUbWenSMLPYT8PVDeJ7988Rq7ahoTnwJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "em1yis35ezZorUhhCsUFPjQbg4zg9CkNfubzTcq8qVW3BPC6DYjRsUkdBRcBqWHbfYNfkd9h121CXzuhC58R2BM",
  "key1": "33hzEB6WjcUSqSUwYD78cbM34TRpWdhHz7VPH68m6otMFQntpJKaJFPNesxSVFa6RcZPXmnhHf96UFW1jvHozEsA",
  "key2": "5YTpKmYSbTKJ2LBYEqwx9iqRds2ZTt4JWbFNcSL7FyaKVBM8U4ZnhCMqgzvF7AjgRpBsBMPZjwGCb149fVFVC3oJ",
  "key3": "r6JzFJM1Du27jwG2AXZ4G1nwxU13AqCrJ7cTvWaeskc9nkmTMthkkf3HReP7gaM6EEyMRhstzX2nLAyBQMqtSJ6",
  "key4": "fczRrXsPYxCgkXBw84GErzZmLWEgyfrBRsS1j44yUV7GsSe6ox1bkmGn7rMXQcqu7Bmv9Fi2JbLCbpBNq2ttpLs",
  "key5": "3ysALn8VNR31akqNYESQ7Qkj9LcmXZs4L4QjhxqSHxC3Ess3LadPJXaCyCYB6FmZAJQ7oD4XkZxqmeCnaS8RtYQw",
  "key6": "hRyLjuYzMF1sMYYwbxezjUZkpx6FdTdWpqKUpepanNKuUr2XZfqaFxSENuwBKci6y8cBL3V2W71BwHngd4SvhV8",
  "key7": "ioCk8noSG5e8HcMYaPUSZQrUAdhQE7Fi8HkvRQ1kdnbFJpU4q6PyGfVJbdhboeoLqYA2Zj5xm51sUpb6Td3M7Ko",
  "key8": "2eoNeg94x4kMSb9JfBH6MHJm5BbJ88GrreYTBPmEPE9S8KUjLCfxg3QhHt1y1GdzywPRGDU9a6rUPspf5q2jCiDL",
  "key9": "2c2tZ8TECQWXCWTcYRk9gBxm3wZP4ZudxWEj9x2EkFuYKX9hmrY72yyvFQJAiKssKDrm6WH13FbNUhnpep3fXZv6",
  "key10": "3P4PmR4Hm4FXgkAkPa2Uv4V671zgAcDXAv4bWHEt9gzEhJ582Mi9iiCVCTBxhH8JKZRwZq3uq7UWNURwExjuiSn1",
  "key11": "22PjyNBqivgf7Ng3bYiDTjUM2Rm9eoQDcn8EX7zsiXapJwUUx1VKRNDuHWWwMw9fmkRkBSXD9pFtEUGYFH5A6APQ",
  "key12": "4Gs3ByQfFigrcGXJRijAecySwKZitT2zFtbGgzuoUviysmQPwR67AQoR8ua3AjT2fGomBea3xurqamjEZ616Zypc",
  "key13": "jph1zvR5mUWQScTMM3F2qWGMvjEQ8aneVh42EQdbiECJsndxGuWMpMUzGg5RcwBSTTv2ey99Zz3h7uoZG4Xc5ZH",
  "key14": "uuXtPCqsiUrdPM2PsP3K6CZk2csfUhyW3cd6zy1JnCMFBnSEkKqJuBjxQr4955ihPSs5GgPWZ1e5RrmgHGRBKdF",
  "key15": "4dvJMp3E1e8KeBsp5KyEQmVQRXnrnTNrKdDwCsGBvtMtVsXnxJmj3JjDrEU6CAZQaj5KJ1j8AJ6zHc5SDaPXTRNx",
  "key16": "46WsUYWD9zwGBmQBj2c3uHZB4BJrgTLvbUAuAiPCPCyiE1qduuz7R1m2Em31YVzGEKx3jj9VTZHaNcoHgnq13uNX",
  "key17": "3DAoAA1nsJAVEK1QwKRVopShV2cf9AbkAnomgkCf4CTW1kFiquPLmQXFgX33evK8o5FZ2D8NxByj6tdJ4fT3jTEw",
  "key18": "4Jn8fLFQJDZBQYSWGGspLTD6tgxnJnMowjrNg5xHWoo365T37BG1PtoqFFbcQEZ3fzqARhSLRjT1uH51A96myT98",
  "key19": "3UsAFAuhj9ZvFGw1ehk7vkk9VV5oqkRjEgwmh6hcAALWhsNM517j98Gz2BSQFUxTt7iUtrskiDQRL8GB8XhXMJh4",
  "key20": "3ZgqSRoHUrHMe2Mtic1jFbbFNDu6N74Z4hTMCycVJiqsUfUuNCwh1XnneNb2shWFvqZ9oTrUqvBNLHv9UMopTGv6",
  "key21": "3DZ3YX8YVjjxxfEnRSodXejD1qmqMzk9Kcc5jsf7utK8CsN4TE2sUPKZqNjkLcNNHMbxhxMZpqPkYGUwAMqimng",
  "key22": "36rYH2WPLvF95xW3SEfUWwDvRJhnSkAAdcsy8rwqMvDQYryshDYtX6v43wiXymHF8CSGe7pksRZSDtRNqL9Yn4gb",
  "key23": "5AcA3vG2Cj2dsTEMg2Tc6cUgVZGjQWePxLSowUaJs6GPRaKoj8q4Zu4cN5NMw84UwhB1WZvjTUo33qp41LegdgtV",
  "key24": "5pfcxQQ6jRhaUe6UF1yqjsgf7cnP3qPxTrhRYaUc1twUvwmLo4zfQFBnw4gWFSwgkfFmHYkKbLGSWRJYUuYJERUh",
  "key25": "3QgQQwjztbnouBdrXxjhMQb9LSBXBt376fP2DwiJrcbhcajQtHTHRfiiJ6Ufk78NQR2YMB7gePD4j8uhsDuMgZFU",
  "key26": "5kDD38mNphvTSjT7KDbWbucFP2gRGfPJna7Yv2oMVmBWQNhyndYBEDuYHm9MBmZK2cHuTYNP2QimaDmxmm81sPHN",
  "key27": "2DAasBHxQKWWxpvstmsCT94Kq9TGgcx9xpxAp9e1kUCwdcmKVejdsFa956kr6yhutT48VEo5XkHb9RJt7irqp9iW"
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
