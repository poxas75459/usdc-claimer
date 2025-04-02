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
    "25GRFdxZ3v5GTDXUJ64rnHKVYMBkJU6rcwUXXvKHavCmmA6xTNz9XxDHWzirve7Yy72xJXQSZ9mZrREScTycET7o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63GdHEU8SnW1KkrbiaseAGjMR3hDF8rvxpAcsCjmV2N4kBPAFrnUd5jKhLpSVGKkqdZXg8ZmudoXDrbaypSroGRr",
  "key1": "54QhFEjyu6xkhKvPdGBedEG6GftLqFf5TiEeBJvyxWEAMRbg9rgKpDRtWHxrSePc7DceLCq2T519cQTXSWq5Hzhe",
  "key2": "5jELHFEzvKfWNrFeeeRa12TdnSkvNAjXkD2THNWYJJ2JvMLk7CtUQz5tYbaxaVTKU1mwgVTH7EpNrB6xPmAuk1g",
  "key3": "3rK24dGxWEV5BtEvqDtBd3j39g28SFzfb1BYaP3AtT4UpW2UVbUev57Q6Ve4oS2cgEnYwZaLxY9QV66PdTg46wUS",
  "key4": "5VT2iQQBjAeLTM5kn9ZFMTprWa2ZjVfiUrryJLLuyi5atH6TszwUNe46KYaeif14kAsiFL1yw5KBwpgK5kvEQP1X",
  "key5": "23bpSiXbP52QagUQCUB23nHXVQaAdWguc7G7JpT8sZYYUNKLAkZxPUhSvWCmpT5XfwNtZZUaPeE5hL5nKhH4snHn",
  "key6": "3X3Mmupc7iJGaWoPnqJk8T9MGaxqiAjCzYScidr9T9WXhHntJ3BxndxrHL1AtMjk1SjWLM7j87zi4SNvkhNX3zdK",
  "key7": "2Uajx9N2KJ2AbMpM97afJd1qJk3HiDRTkqx2BG7qR7avVJnPRFDryCiUA8qvsPmVVcyufUnXznf8H6C9d3Ejm23E",
  "key8": "49LgY9jtZUwKsGo7CJRDzCLEMmaYau27YizHt5KQZLcT5kZhdaq5pD2YuCQXHeBKtbkqSM7FUmCpfbLHWLptiwv8",
  "key9": "4rBd9n5vdRdsnvqUoL79zkTMf86aUNnC4gGeasUvKJZsNiXWphdFwqEf65EDbk5BQXSy3XmuSFPLpjmyDZGHMxZp",
  "key10": "HFnDFCaeuSCMAPdSZSeXnCLhPM7dAeMkMcTxtLSHvzar21HbbYtDwa6iqkgSF2pujJhBxPrRvbj1U6wK4jwja5z",
  "key11": "JCYDke25Qf3LfNzjfYxdLnuomS3vhBvMjo3yFyGcDyw3gugmwHiqiSTva2q2gaowc3Fw8jR9QLgTWApwfHNg4im",
  "key12": "3ELE1Rjb2AFbM647VePBsCMJ9Lm7JGqQ5bGq6wDxjenaM8xYSxxaoaX77m5aVdHr7vvMwnCMwJ9yeMZ4imLcMJD9",
  "key13": "2X2Fy6VnS4qacm1unSUo9K798xcBQGbwNJpPxBLKdSFYM5takw4D1XGZhqpH93TDWuENyDSbmQUgQmoQvT9ix2VW",
  "key14": "9iFSHF6iB3BpKfTDujX9HgsNCp5hyUAb9CWyWGWdaHsvqDwRWvX9ZvmeUkEQVQeBuKvxYDJ5Du7P3934bM3QLNE",
  "key15": "4bRUvGPUuWxrz1m1NcxJZUJQY29w7P7HsopY21bwAatAHJAesCPx6d1sjPQqxRaY1GuwbNLihEqFBLczVG7qgPbR",
  "key16": "3tYQAvSBCqQNUfPzDvdmEEo4j3xMheAzNePEcrf6nfCR247H8eKiRDF8uF2KUyZ3Kkood9ap7PqHynFmYGnp3NR5",
  "key17": "NN2W5VgShTo74zQXw5JvysVMdCVpEdwcHHp2WJgTSpQu3LBebBXhtP7XQGWjmbrsyeZdKmvGqugj2SGXWVbP7VB",
  "key18": "4eEJ2EpLTK6rbwyuMB4E5LhZQaGeGyfn7yc5g8s8L4kxpDf6EvBzpjXDiD5MG4x4YKXw4HutsYAiR8bXnatqmy53",
  "key19": "3vkY6hbDkWWfyFNioq3WQbtDN9uu1dRqyQNhEDPdEjxT37hMF3HquNZBcGtCPU3jY5vdNV1sBiE213jeBxuicmY4",
  "key20": "26une3PmLLQGbBz6AoSd5182e8J9KF3SsWr1MwS5YspimEHwr8eZx2x8pQyRec4PuoEkA9YPpXJ55vZtTFAAUTtT",
  "key21": "3tgY9HTCrn28hCTMgNyeWfwoWPHdPWFMEuMrb9B5XP8PjyAjJcRmF95UbRW7LRXDU1bpyNuDR6nZFtv4tgs1Tqbc",
  "key22": "jjaAp9yAb9an2uWQf29fUmL7joDN11r3XbFmsfCsyJpxQGHDgUis7cMhy5S48Runs6femvfLHcP8DuDCcRss9Y9",
  "key23": "cWqZjvFStxwj6Mox94vYqSyHwNGzeXo7xN7KZEi4ZDX6CMjveVdxc3XJmo5vsHHE4GWBjk5SqzYe5PB1wmFvr3y",
  "key24": "MKcVeSR979kuiBuNxPEeXs2wWvxm5hppMmfBM7aqzHFPDVtz8g2kpeMm2cfb1k3fEXEbZEcr4u8pWkg29Zzz89z",
  "key25": "3XRpHtyVXsz3E8zkwfWsw1ZzrGEe5iDE6WqGP4QJkmn4cv4MhiYVU4rpP6D3v25p4Hm6XFCbUQ7DT4ig3xtUHuRD",
  "key26": "5MmnCCAhruPES4vbReoDDJ2wnFfKTahmY2JkMrTTcrdCWThvfQ1Z4m1qz2sPsYbnLTgiCbReMPXN7Nh6h9YY1c38",
  "key27": "33A3YE1RZRmamxFtRTyRKJdwFaKHWKPrZLQgem2JU5kJLZBguRgyFwzTeinQ3tJhdNLMtogixWi433aeCas7X3PQ",
  "key28": "3nJhxYSvBGsy2GRmyyBqn8D8mZJRGvoqo18uHbayff5nQqSMAzRys3sCAAJ46Yr9Uv43x9wHGFHj2mXJ8LSjb2qv",
  "key29": "5KGtZczZDSfrc4K2mCQpygGUw2bSun89TjXaNQY7e5Eta5bidnBa3m79VCmq8jTQ5zkhRJtPMDiYXBrCde9DVbBg",
  "key30": "5fJfzNMxgwfjC6hZ1dp1Ko6Gms6BpGzr8VqtZYkodBo6xewSnJkmDjMsAYx3RBrt7CZf5hZqDwT3LDQQsBBePPF5",
  "key31": "4jp2ESbGn9eG6aus9GunR9xNEvtT1WhxPg1Yhd2EJXueo7gZdX4wn9nvu3T544qsC5StfwfJ7fvm2XdpV5p6CFRj",
  "key32": "4XfcAexQp4BHswnRRhr7ri5gLBjtWGttDBC9xfrGBwTTn3H5HATx7ZxXw3WKDhVxrAjU4qWHCDWZM8T1qXoqePmL",
  "key33": "32aqXdjKFWCG5Ado9sG9wFuEQEFvnb2Xy5maUnwN9TYq5byMUaQbBHBhUrWa62MRtjiSvY4zDAnBYL6bWF8Rjcwi",
  "key34": "2x6mwuhd9R4i4TBS684fqCBvzwiF1DPABTeNrBPukNYbZtx5cS9RTecRdKBC4uoD6zBvyCmH7jBB7YMjtSruscPU",
  "key35": "JYJgbz4ttiY9uHMkxnvR2ppURRDpQqU2bYuogJx4WaAHwkAXDeP4xYdMgJcfFHTFiVgXfzCJPkoJvrC88wCwdui",
  "key36": "3uYsbdi76KBSJpQQxxEiewgLQuTPEXLCBbB29knbkqLvfu1JcQHZHNkkhgQeXT38ikbDyc3FHVWgHtePPCbvd4Bi"
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
