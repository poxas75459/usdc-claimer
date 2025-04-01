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
    "4p7zKPzKDb8keQfiNJtdFKXeeWaQKU6ThR66gVZjZMUBCXB8nRn8Th4PZR4FwbRRREGgGVScy2CeG3uArUZSHJu7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45NGbwPExk7muiRExQHC1KzBUA37sK6vfWSMSxhxqtCQAnT2RttjfKJkZw2jsWp5KYJdxSE4XsyX4r3SHYjVZ66C",
  "key1": "2UocjAyZrMcN1gqgs5qpbMjjYY51p3HMB5o6m3jwbaDWGKf8qKLBKeKUfPpsfG8Hwt5aocD2euTZ5uRQQXV88meT",
  "key2": "57ye6d7qQbxZVEoHoTEp5psQcFshBHH8sNKkKDRon2AjTG7P6BqPWWDUJTPopU1tc3daYequ9F1w45xbvK8iQSAm",
  "key3": "5cstYjcuByQ4nHpZ4qnzc2WHoHVtBVUSskEgiUCygN8Xz8RHNXjAaBqPzP2xrXfrPGTwqbhnEYtJrF7bShfiKLeE",
  "key4": "3j7GtGuJWNCWwCTBFP6ajtAUFfwcLmYrbEGbGvyUz6oRaQKKR2wsTQGKVJMnKMAxQUxwUfuTaKzcyaEtfc6s74UP",
  "key5": "63GynVSrGm1HPyBV12W75u9NJFrfy6BrqjZEKmQiAT9c6axpx9apTYA8CJxoEpxMvg8nchcTU9Qw3XA6KWxqR6zz",
  "key6": "49xCrFr9SvNq3LCwHgP79MDsHVJP4PXqkYFirsX9NAHpHfUzL4FzRKCys9JfQsB1ZCvriyGAG4FBjYkpV7TwtCz1",
  "key7": "25xCtayQjqFBTYR2RApVXZaQbQimcimHjUh1aKQVKE4z8h649oaM3ix2nLY1ba6dX566qCB2t47MVMvYHnau6DrW",
  "key8": "3i5gjQkRznSCyBF48WfmC6YPgEtkR58seSkzEPg5Gzbtvh8U8QEQbxqVQ8tG9VMMEFmAAukKtLuBnVSLYiEMjqnN",
  "key9": "25Z1ZccnXrBpTzLEpaZ5ucY6kqNDS3n41rjRXYtRC1ZEFT6ZsYcEoetc5D9K4S1VdNZovTnEWFF2HbHUQPUzdfxm",
  "key10": "2KeLtFbXu7g9Wn866kud7aqvM3Mdb32yvHWyMgWRF2LAkehRUGHC5P4uWZpTpcdbDGujyLVUHNW4yaeFYiTYLuvz",
  "key11": "p3FvneEno68rNMcaaioWqZLjmEo8Gxd3WjWoovcwa3SsT8vfEf8QQfGPpEeLwCZCMbV8qgHuPenTBSCqbRSWqCt",
  "key12": "3DVQoY39p4b3gUuRxw4fJdE6MS6XrkvDCDqutdLtsBAh6tcAj5ACmvSzWdSvWfMv1DcaezqGj3XHnrrZKEEcjYBg",
  "key13": "4e4gdG1ubdbc9N1HteKRBkS7RzfaJ7R7YShw7EE6gWHauoxxfRRNcgkh8UrbTDxQuTHmzdGtwQh5KDzruehAXChX",
  "key14": "47nqu2haShitNR8NDXDJ1RPJ7rSDX9mYpBXc99wDbwJryRJLP8LP6u6RJNpomXfVrMZ5KwTcP6uifuKqeZNmnc4L",
  "key15": "wZUyEeurxrf1vWrjjqQ1vqiropJorCAYTdzg8mvtixGs9fmE924gn9F7QH8Bj9baRxwwb9kf9cbCaKbM1Y43J1X",
  "key16": "5X19odnDLUjEnryj73oeB9ptDJ6nBdu8pByJZiCZT7VZqCKNV2Vu5QT3aiL9QvG2UerVXJ1Ai5y8JuzRBaxfZPPb",
  "key17": "2sjSHyyrhnoLnaXRysNMp93oAoFJZ9zW17KPUuX2ctxdoowj1F6z5ZuwgH4bCVhgNrnmV3Zjvv5kyGih7MDgNygE",
  "key18": "4kUTfCt4Z5L8CL1tyYpNYsjXEvxs9wGg1cAVZa56RxN91odjGQ51PhVwk4RoHWcAvzbnhdo2fRSEh9qqoH3iSYGW",
  "key19": "UvwGFaj7HZnd6wrmcDey2dygL7UpFuPdFQ39zWJmwVLZEK5Axh3ZRqfi5rKXcufnE463XWavnnvCGpvh8ntp17C",
  "key20": "4MeTUJ62ejnoBxiunbfcrbYDbCKU1dMbdVc3iTLsVWKWFR7eMzeHNSjzQpPcy92k6cvdpALVzHZoPMG4pkg6wA3j",
  "key21": "2MZXXAFEPtmjgrTdv9iqLkWAfz6RFq2DuyecYSAGbW9uBcs7yxSTPFJq8miHGgTCoYj64vNz3s2ZuumGRpCHFwYq",
  "key22": "46BKfrwzUVU7DkLTa6Ku3xJj5tcped4n7Up9ZahqrFMehdjHRjcssPsiLtF534dnM6FcFhgWY6uJv8ykQFzJiVai",
  "key23": "sQQFtfcRi6rrXRTgpetDUu7WjmZCoZy4STTeQ1vXsXbY4HcfnpWi5LKDwg6fqPxGXzS2uC4K1zsxsy4nXPeS7e9",
  "key24": "5jTpBQLANuxbWrAHW54cCGDNfqYbFLkoZ1vdhS8duSeRz4Bb3891Vye4eyTPr3zsFcFteSjFPqx6qxeAvC2gEyoL",
  "key25": "3ewSa6TzNHV7ZGzP6MoVTAW4K5TS5RCoRLbZGfHeYy77s3ErDgCLgZDiRKx4v1zQPxaXroDfQBYxCkhos3DUXVFa",
  "key26": "33kKyMmjNJoLLyNPSyiJn5u5vFxwmWRZ1umGCiP7KTMGn834jsse1m51gb9Vsnr2n5MwrQ4WfLDMR3qCTusZDJoj",
  "key27": "49Q8bTYZ9HB3KaZMJxWBAY4Ucx8UrUnQaNpYdcFY9NWJWL4qNphLaCkw6f8mrNDMVaXduWiDj8Qk5LE7mBbSb4HC",
  "key28": "5awRSSQipozZoU4zEhkBwK22kkmgaeXeviY3zEakcHT5cpjxxK9qx6akS2xexKfnjcQT6Tf7FeqoNbjLdPXJ6D8P",
  "key29": "2vS3UmaB1KucsCkqcb8WPehdzZ1srQVEWxKLbdgJXS8seAXh2nYeCBmjXzeNmdSBn2tFnA5pZLUfNiF4Me88aBD5",
  "key30": "WXFesNYsGxj54KcdWCmtb2D4knZkd4YtD4vws5VUubnsygCcPMNPRxowMqEbATJEQ71bLVBkmrQvVtsk8YyoYRq",
  "key31": "5CYbWr1DyPZUqTjgxGQK2txK3471MctacXejXDnaRPgLYVHQhGpV1XvQcf3KhZF48jVLu7ZDRn9cwU6DrXjawJuv",
  "key32": "W7cQmzeeTZpeYFMHwmSRH3kWisS51PS5HB2amacA1NAcVcbvEcDDCxJxHVFDixjdgQmVpe8jUj2jXtgTz9ovrQV",
  "key33": "37ejUM4rQqA3FQvq4hYXsKd9GWigdSdhU6fEo6nUYA8V2rEBcSsr9WkUvJ3YuDHPooRJ2sWKX5rdCa1zzPg7jvWJ",
  "key34": "5NgGCvqTtBkCYkQiMK5zujDdjj6oVoRCn2a5Bh9fmWyBpVY59WuE251Z19AyGwoVYptSBgyvQKmVRL1We9siCHc9"
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
