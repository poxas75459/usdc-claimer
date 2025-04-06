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
    "4zdxggf7JLfoUUfec7Wx24oC8t7ayqwKDPhZsshykf46DCzizeFgVuJ78jHk3g3sCxwTXDrT1ddxL93hCrP8ka85"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZA6P9QtWoKwfqNYCzD1iTQsZeBTPswAhAV7VqghKDx88LdSeGLL3u8LgWZQ8JRLQx1CBzv1o3QxausZ6KYWakMD",
  "key1": "63nR1vCATsry8BKfW3YFTPWtv3kghV3KLMgBhtbfpPkP78W9qrZE4zDUxSU3e2V9ntSreP5b9AbpFWFd9dVgaJwa",
  "key2": "2Ae8ZnfyT1XMWCV9DLroQNXPadV1wMHkJ49RjfXRQMPBN992uWMk21uEda37SxjFTEmqiE61RSVeCRWYCADFXi5D",
  "key3": "5NVcERDFYVCwZuUkw32Gihv1JasJYkqDJ3YLow4HJcjo9vFGXy799UsUYCyS5K5bA3QXxWumQv6FUGSFRcYb6x96",
  "key4": "SjvEGfVijwpW4uuEkbXWurKqw8fdmUNjn4fGq1zHsTG2ezCC7bYUA7AkuMHdMARd2iugNCgLMymCgVocDYbithh",
  "key5": "3obbTb9oKGMiV2HURznryhwA9X8fnekWo9r6SGNXX46tbsTYFnKXemSup8ngt1VbgbxM9WN3hfbVsqovjX7EXSd3",
  "key6": "2kVzSY2dS8QXMbewDxFs1ofPwwSxHfcwgDHa8ioTgNN8gNYkyon1HjV9xYSgYHLkUXBaCi6tuta4QbV399aqrLKe",
  "key7": "5q5Aqz1LTv5LPfUPXYyZaqtgzFiYd37TUAzvDDHJUEPCeJZ9iMGVwNBrXmtmH5YJhLm71cLuCFXSgoyRdMjjEjqq",
  "key8": "4GdWQ8HtaGhXCcddddwoWrgB4oAw4thMkezRBnQAraZRUXwXMwEmdDAUXAU4orRUSjRrUAA54FmD7hinYR4UkNWH",
  "key9": "3Ay42jVZjfkMnqSxV7K9crgEZWLvKvSGfVkBN3xCVY9oW4a1kPh2DDC71kBrvULmoA17CMcL2oU81nY3sAWV2phf",
  "key10": "7H49AQU8B6h6t6gZCcjFiHAuAJVvxPCQhpdDPefsyAnub7N66vnPuhztasE4tYu16cAFNaaQKckFKi6be8VDf9T",
  "key11": "5JYA4ZwtmUPdpr1kczV3ZrTmZqJLVfmu46hETbNWTCZ9hHw3AqvBi91HYiTgDPHmBAc3Nx1dUkXEdcpGxYdqq9Yh",
  "key12": "2Sea7r9sVfqtMyoopTQGAytsD5hFKeLFcomWRmY7TWYADRfV1yAaaNJbc2i5neFiYPAjA8hPhfTaixQVZx7bu6kb",
  "key13": "3EYAYuCdvJuabrkTRsBK7unjWyHAHbaAMjmuXwTFdVMkqVpnjMyVDyPDCDhZb4Gy5seDMTTM8ThcjkBtLexBGkPr",
  "key14": "4L1sKpVKF39P3e3Ra3m2a5EHP7j1msu3scifwGEkd719zKvyJM1bP3Jw3Qp58edPgoWVnEy7LysHJCAot9Lo9ZKH",
  "key15": "2PXN7MU5guqGP3HSz31M3Lp7CMkQ5cRtVTvgTFr3Bx5pE9pcfypMxQ5E1MTHH3uGzd61H2ir6Cnbp98tQu7DSqga",
  "key16": "37Ccu22i9xfbFhE5YcR7zJ3EZRyvfbSRooWjZeMmXLTbWuoH7joaCqMZkKYZtRqbnfWMa316oVFF9kRs6vjzGL8w",
  "key17": "dkjrwEo2L34XXkT5rZPdEMic7SNCn2tL4qvsRGdt6DoWYN7aSrJhKHiwQv9mxYUeqDRro6dMFJPyaY6WGrihhoc",
  "key18": "3kBkzdcwRnCQX2kWRqPqumtfbcRmrZ39hCLDccNQrjp7HLxHi1z6bUrg6LRtJaQcbBD9a9B1omPjZmWTSHGL8Jkw",
  "key19": "G2WmZ6pf2tnJBW5C2oNJrjjn4bWuPyR8sp2nsb3qFXEYA5GLroYDcESHhFt5a2T3FRwxpyf6iED4g1eAdAN6fNi",
  "key20": "3CfotQUSAX43WDZzsXAT9MemcHzPfAtK5sw8AimyJdNNoBzCu1oCFXD2tiwDcERHr7VjjXJidh9dfWGBLJuMnDiu",
  "key21": "hX4wHr5HiphK9RMJRTqAats1fjEJDvjAC37CRxixxxrJ9gYKYXLvk2vwtGBxTjfmz88UxkUDzkERCLPiturpeYP",
  "key22": "3LF61g1hBnrxjejCwkW5vXVAtSx4QnFpVSBiitGmbkh93bk14AP1xJGpiNV2TinDKFnFiiEX1kvKQZxf7GVGShNX",
  "key23": "5iWmDDxuXD8cuNFKpBiAJAQMBhot3gBFJvRpRbtCo5NnpdrhKscbkS3WFtEBsdhG6zTx8tndYJCBEEVYmXXmhCdZ",
  "key24": "QVRNWefTAvdubarvkgKumqVBNFyftndqtnigwXZkoha9Jwmu4FiFRQ5rM2fTPaC8euxobbzWu3SEtZRnKzH5Z5z",
  "key25": "4KQ57FYPu7snX2rnkacdSJaYi3n3ckhiHLwEHzskEqnT2Uk4Cv6iGLCx9Dhn89FA64ijuCd8YBggnPZ18NKHVAqV",
  "key26": "3ZqhgYbVb55XKLfDdMNRiVprvBvk46yhZDTcRMs3y4nb16tfsRcE45utybWcCUGhZrv7p9q34bLf9irmhZTtF8UZ",
  "key27": "3B8LGZGE2b2yBCbTAXUcVBiJQVSYSZPd7U2atHhWjufntonXt22aJFScEQhwyVHauHPcMMHTeHU9pZXNUQyEqMA5",
  "key28": "4gcvmQV9GSPx6opy8otcUFMtLXcZJDUKq871cyMr3L9oYZrczJoTHHbTkok5ynrg1L23HCUkwocog7cvxettebSS"
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
