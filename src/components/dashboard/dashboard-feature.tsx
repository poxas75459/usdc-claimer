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
    "4Fqnp4GnZqePbT3Npok8ceA5h7THc7S8r5TSLApeKoC1MzJgCCvrEr9RwhXFakLBjJjHZH2SqEpB18AecrLA5uqq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35MDUAwgqwWTSZTmyKdBQY4iPp5S8no1b3opqukFJ5BX85DFtGnGWpEFHRpescKF82fRbkL7NKmaUTxTonE4uGFS",
  "key1": "EwLoEjXB43nv9kdNomRxSbGdEAPVruwciGKBp4GVeu4o3cdb9kAGcEm5oCR47pMkZpLLfFs88nm6hyUiCX65b3r",
  "key2": "4CJqkhxHbNzMnASL1DQPpt765KXzGwSbC6YXv76hWxJoUYfSzFNdVWqvAyLSg8bgq4yJgo9RnpJ3MR2FBcqtG8EK",
  "key3": "jqnGnLuuqZFDoZMLBm5w8otQAX5TuUhL1iMn96R9YsvDHu5sVbqUDr92aUD9k2TkTXfkt6iuvRUd8dpXRwVTN1g",
  "key4": "nJ4wRQXeV3t3wmUDzLRc8HkTKn2DGid76pYRz2XVE5kmEJ8xUmbyDcjicVt99N9Q6yJHFULu4W1EgF5HTTyJDgS",
  "key5": "KzAmGQ7i5piZ3zSxhW9nmwaxhR62sHY1KL4TPgD3iz5BRBGjUSj7QB2dbUTJ2PaVuQo2ov5zV1YrkWGZ52ReGru",
  "key6": "3rerYjGKCZNxhAwb79VgRAgMP4BitfVGZL9g5KqnC6zNtL6pPXtY6EN4qVHxA4XwRAZz2uEtgHyi3YGbhP7chBKu",
  "key7": "3ECRhotwP9ocLXiEr35gazhH9pE6RsWRHhnraiACdSbkxstdE8kS6nQX62f1Qbdok3AWEEYuVV2T8VJ5HyQM8dqw",
  "key8": "SyEnCqeoHqymKC5e7X4Ta2nRdHcd4FnfacMWxqHjy47T5HEnhjQbJXi6jQhpxiYRPHqVMYd1pBe1Y7oZmpqKn8H",
  "key9": "4yxUYjSEmHmSHSWcNQLLQqS3fQYV6kk5BzBdaz19P7u678sadutfW1ojvZKBADFxt7zTvoRL8tWoGqeQrGT2Gp2Y",
  "key10": "z9kb13M2Qf47F3uJJSdCwE4LyqG2vTW9cZZ4rBkZ8z8Smiqb1SisPati6KiYxTKW3pbwbgmiwq9mJXuM2tx7ifc",
  "key11": "5GJubrNQBSjmkJGFDCMMV9REdFVvDGmCYmox7SroHTLy6UVbGuB9qARfrYuuL7H3vtciaFrac32L31Wx4pjSY9pE",
  "key12": "4d1Vd6Mak12r9VEZ7qeeowKDDkmvUJPtDx9rXMM9pyw4JBe5vNr72G7sxGi1bB3Pj36TNvtCqxNnM6m5ucwVewZQ",
  "key13": "9CW8A2wvhCBBDwYYT8xrf7r7pm4nNw5e83FNhe6ZwcUSVv8od1yUWJELCN43kgTNRGKvARtwygmGysSqW3LTAgR",
  "key14": "dnBtUrUUEJSEU1hpF6sxzcEQdogLZPeWDxGUtJsbYgoaRVxBwAFWtBuxihDCwe96nqeqH2QfNsv7izWuQFGQ6uE",
  "key15": "4PPsVBnpJhUqJFGbiVfiPyHHXJEiao2U9fLsDaNBbP5BCSEidcoHfLbuVZ5ur7QgMsY8LM5fAqEGENNFY5Yi8Sqv",
  "key16": "5h5EwcHNiNE9gs2w2gvWtMYMTAQzdVqavkiZzTZHqJehCbLrv4d52cmY3U6tdWQHZ4NFQ1UEcRhbRh2cEqFMKHg2",
  "key17": "4PHqK7ur5keHDxvK6FPQWKDjTRtErB6ZEox8xjxUJGC3xpb5nNkX1MUeDAEodJGqHGKg64m5JooQJYjUGMnzAuPM",
  "key18": "4oEKq16dtrCqYd9qBXgaLF4gAe7wxKRCz1whuXyi1yNu4KWCPo1V9er2ccBSCey1R3XLAevDn5DHQGVpV6iBfJA5",
  "key19": "3EujkARiW2Mb3BtdVJJ2ZwxC7m78rC8MEnSXZfTaFA2U7aeE5ALvwAFvYkm2HbiMCbUNpKeQTcKhhx3sBY9vxYNF",
  "key20": "2LpA7jTAQqjzGMHh1JZuKYpPUbcr42XEoabz2WFNTNe1U3cz233Up7u9Kv6SJLAX4EcbqxMpxeBc7Du4QS4NHUJE",
  "key21": "5vCiECR3b23vT7MfAJ8RDCVPxxCGA1V82rJMehgHH9atjumdo8wGp9CZhRCZ5x1Q5SPeV9anTkSuRE8EWYDQxEXy",
  "key22": "5hy2uXpXbw8BUCkVHH2VgLgkhQeL8WxnfXXz1i2rLQrkWQ1uyRrwjtRBVNbs5hkLtPzXxSvsY61QMCfBq22CALir",
  "key23": "dfWcmQDdCLaScaFgRYbdYQR2ty3EF7xNtzTDeF8gWHZHKvsjSdYXPazMGo3dG1qdRFiCQ4YnFyi9ZYVhmhmQB9z",
  "key24": "tXvQhwXJrF9G8mY34dezNts3U963X9HrGpGHADWgC3EKmWbx5ZksGq3zCVvcBF1EnGdPNedA1vxkKUEeLMCM48Q",
  "key25": "4ksQGtzT1ioPz3ffMZ8kYEaY5TrQRR1dyTTuA3shMpK86iGzp6HhPtAz1Z72A5wmthhUFYvHFP3cH8yvwWkeSfzZ",
  "key26": "4PyxUdkD5MdLSgBZwrtCpBoR1paWYhuUYsmtc8P2F29KaWmobkbjBtxLFcGvy5r4MSLSwDAzAe2hnFw3U13XoLw1",
  "key27": "64Bk7o3NGYSFSe13oe41RjCJHheazrAaEVTTjuTDSt4rFegukwqRkw3fb4FukbmPoCQM3gyt4wVeMBTonkSYEhz8",
  "key28": "2sWoAKoxKupRrgbG7juF33LCFbRoRXoJcZuWSoTATfe3RcQy9d1qN49gUGqsYuy6yrB1gctzMVrsKqNoWuQGkiUc",
  "key29": "2Q7vLpPjJBpm8mkmvgQ7wfu29Fz58inAyTydGADofkn5KAWpdpkoaVF4HwMTXGmMNzCUuMo9mPbchvxyrJi7hc9N",
  "key30": "56CdXa9G5LypsVpEavJePZBSrM8BUdkYn61hFr1Z1s8T68y4UjaSp2EXudVYXMyNxGJMtFoDkBwcDv1EVaSHSzWa",
  "key31": "2LCYShVsLhxHkgw9qBfXKCq6pA9k8gWieGtfqQExg8BpYsWfQuySXmb77zPXARJ2DBZK4gsGL3WKMdLukjdt4aLM",
  "key32": "2D7NS1fEUffiMTNxA1VJujiaMjocBx64qi2eSAUeRPPxrvKopuwhZLbrW9Zt3ETrGDos7aVXRe2ec2Z6tgJBseUh",
  "key33": "3N4jfABj9APU9Z1yTEC6M11sk6k4yc6syj31x9bRiCpkCNBtWK9Zfz7D7jTdwTv9h7hDm94KjhDktGHmCfmC4Fma",
  "key34": "2pyaB9cwGrq9WWZpNUsYjceHpDyMa9Z34FRoFuSB7qrHcR9DL1Mzr6VEzsZJi5tiMh28UWZEACqLi4SvvPZa81Vt",
  "key35": "2a3Cs1ZPCxUoRambdco8EYqRLfDmFWLFwqTzNPnqut8fmSGsj98tzb3d4hMjao9sXKYuBcGAspCvtsx2QpqWeRt1",
  "key36": "4rQ5oqx5iJY5fe4x1c6fsWgNA9CUfgW8NZ7m9or2VkzbHcVL3hEteysS5LjRsUCS7Yyo2sMagoMLU5pjmGUfSZiv",
  "key37": "fnRH5yZ1qJgWqg8BHZNFUETESG7RSpj12USZrmQf8emWbsZesy742z95k3HNDUNR3AXiU3TpZAzVTctJWh9dNgW",
  "key38": "3ZdCnVFoM7iaQbWGmvZ5g4bwZmWsmcicj2YfRxdchodUKjntFk1iPcWnn7xewAiaxybM55WeWm5E3RneqFyYvdEY"
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
