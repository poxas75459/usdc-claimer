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
    "4vERHxAXChFD3iLLuLa62ENUN4er9ay6e9BZ2Tb3XiUYSXPHxVz5cnARC8o4rqBY3zgmu2Npfn7PuVmJ9TZJxLmg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DnVUPDgkaBBs9gGDQLLC8E5hE9pf3VUJbk5ko1ETe54bZYHipeeoPLXaiuvNgWB3Zcgph761JQbD1G2Pm6Qvogp",
  "key1": "2t8LpgjSNDx5ps6okHWD7E6PcMjMbqUEdUiMVB2ZbGFihAkU7smkYe5KNFdWNHCZeor4amqG258VgUbciHqayaQB",
  "key2": "2CSA1SAXJCpEoqVPSy6m6VKvTWgzHEFmQWKwMjS6cpu6DSW85S4qyGTbsf4uaj2kNPvpLbXtcgz6gajZLXm71hru",
  "key3": "3GTjCK7DxxTPZdAs9fP5xGyJ1P9oiL1vQDYyqRP9xtEET6NCwMocWHdiCwUsfpAz1qZzHL2wiXQmUBjxsefSmk8A",
  "key4": "quon2NiYabGFHmdvff3qh1qwtHidKYN9mEB4Hf4i1ZsFCGMHqzdvuy9Vw1dmc41pNNVvCrd5RVwGMgrYjhj8HL9",
  "key5": "4u2MtkX8Hmv8dDTpyQMNSJiyFBKu4gtBQB5TsX97X8xkKQL4tTgYtSnVQvz8fW3gULSS1xhe9hS3SP9h8SyGYkEJ",
  "key6": "2xx4tzF1gC1h691fj1WCvDroDp2BPtAa8UYQA3NRmHCA8mSWQUxe1zHBzjBdTgw9ikbtPsKbyweNFNqMc6pjS2tM",
  "key7": "2jyUUn9mAEE84kD4YuqXF2GrBJRuvjgN2REcfjiKmHWKN8EPJxfq5dHbLZU4Z22nFWwKh1KtGXHwhToi8ksi2RiM",
  "key8": "kHau7uCy2qJBVfvR3Pc8uywRR5mCWyMVzUrC3TyrYijViwC9wRv56o4EumuVFCLvK4TQYbjhUkWjdRSyDaEdMYo",
  "key9": "3rzSzBexw11qsrwounMVbysxT7B8eEDSs6STVkrkURRqEgxLvp7z48C791QLSADk2yd7BTGtbrEbmG7VDc6poeAs",
  "key10": "3hdzNB7PVnXnhy45STr4djtSu5nmCtmM4hnanyrn4Zy9kkkqmyuKUnDF46gLGZHhPnM6nsJPq1rC9t7aCu3MSR4B",
  "key11": "4FPGipgswZkKqZWiPDbeuMRn8HJjFmFxRvZoWj3jLuzksHFfcsTAbFQaQow6TbD5thPueyoaNStVQCvTYy7NEkvQ",
  "key12": "4aKL94pUQZYCRdU2BBXeEEf8Edo7mzHNinAdX8KE9spWypLgS1h64c9hqfMogF2hmABsmTjUbVmEQD7FeQguPFFx",
  "key13": "3DPRfFAeHEN844o7zfzp4KVrXcD17GsRwgU2hQGXmgD41GLzhJgcYiL6r5GMhg2ZKxZXczY2ZNurbqCCnLCaDzWm",
  "key14": "Q4QbPvht75NboEFEU2zDasqwPWB9X4djGF8ky8zz6LKUV4Q5NP96nfHe5XHMsCRxXFKnTtMYtU2vbRAQ1n8ogT3",
  "key15": "4TT9WBXDLuRRLjiB9s9w2iknNcs9iTkK43X6cfHvXet5AE95FGiA5C51prREh1doe8XRfFbsdxeEy2dcJCmSBE4u",
  "key16": "4S8yb9AEzysuzPqnQ8AwGWFaFcwqyRAYRavRMTy492izRD9cHjKviUMD8EdTTDnYCHCkmiyuSpMoYVuroLFNX3Yh",
  "key17": "33pZE6vi48wfXfFv5rn4zTRjiBFTbSaKmC7QGHkNTPpopgpYPd5f8j6gVF6Fw3AwomMdh2tWpMRRFbB9iyX8t5iV",
  "key18": "5WqrM2gSt2w9TvRsQXuW2DeXUtU7kfDyHDzHAMoMhw4pEoWbib4rgA5xHB3uc42diDusZyur2dM2AVvhooLfZmHV",
  "key19": "ERrRvCNHpixpTitNYwj3zKA9ckzKXa4WnMEwLjbW2vhqneB9E28PJUbkRYZx3G5NcSW2v5x4bhSuqCb1qCtXDnw",
  "key20": "48pvSpAqgxFQPK8ESj5pnxPcTuEaUXQKKU4f2u4xkc3VsPJRCZUf7scYfcwY9hMuiyuWwt4boFPcgFhMFur7JdZ1",
  "key21": "3TQxLWF7cN2W4Feit7iyk54vkqMh4kLwpVVyVJ7uAoZ9PXmjjxigr3GwPYhUL94RV2x3z3hxg1Fu3fzQ3DNEWBga",
  "key22": "5SX5jNK6FGbh77XY7oP7pxusEqMXDCycqkneKmBw9vr762cSoe5mJdyJ9FvJCCytzHAgZusC5Kko4eHepZyyRLuz",
  "key23": "4BoZFJgPuU1FYhoQsGShDe64fmRnHjkQrr7mwRGTAmasDBcT6uXTcoDezNU94rwwCEsdkdDjkm2q1ronPnowsja4",
  "key24": "3khdB4qmBk7BKaoyurERpoK4AQHNSRu1AGhRy4xxLWsV3MX8B2rmzxFXkaam3iu2HLbKmQiofodkGXWG8sHnhmRv",
  "key25": "4zVd6UiY2XLb7PNuqAKQrW2z8FEeWLTaZYU877bA2CUcQ9zW6ZvyjePWyvj8sMd1kCBagVtY6Vd6Xuq5tFjRGQ1K",
  "key26": "ViNhkr9eF8cobcSuhjsEf6eKEg9r8mHCrA1Zgz89ErwJ1oNNsDwK33VFpr82iZkjkURrC72uznyaQw1Xy9fx3tj",
  "key27": "eEYTBqjugfZrcanti6HUoU8ZY4QEpjYsMctWrQp9GBSxJmbNPRvEF66J8jfE5VXbG5GZ4kpquKAp4y21HvfXe7S",
  "key28": "4cWVqpf6SVfMDTqRLNHMMBFWjWvHLoAUsBj8pES1HeVhUkP9nvVVagswWaDq6JrKMdkKwe6h7cku1Au8ytPqWqKm",
  "key29": "2QK6ui12VFNmT1by1gcXSSv82HFf839SqVknpSEWJ2bPDZ2KoN3KkUFQp3NezRUMtvkPe2d8iCizSKHJeE9DfzK8",
  "key30": "3B6n32MjsMNVbdKcsd5Bx9L6TD2Lme7TMoSQDRwP6WnbiaZgdw4sWm2yBoWn5Vdr4KqgQwH1a9y6oE6vQGyjh4dz",
  "key31": "SM41Zzf3jPBvXTWfd1jsdNE2Ng2qaVsPHNChc89f8rLe9JHbCqBdqtEc9vXdXmATP5mu6fKku53CEe1aHMQtnWX",
  "key32": "3CXp8jzSvWsEVvBxfyUFP1NRTXpSoMuSVGZM36TiFz8moxXyFVnUuaWdmyRuBm9YiRaSwc2C2u9F3gT91UoJGCSF",
  "key33": "5CF84ejvTVaUcTBcrkybEGCrzU1jXfF3SHSucqFgFMhQk9Se7Qgm9ftEcwdVrzBQ6L1E7Ma1tCTq2QBNvn6q5NJT",
  "key34": "3LEGXGgvhx1A6TUZ118VW7vtoNyPwLfqthXbNt638nAt6toXFfhA9cERJhCdbfG1TaroeHFgY89putWQEutPV2zd",
  "key35": "5wGmt7nnAuoKpQVHUN1F4hhqaFy9e9aeTSJeG48ZTANkQgR5wvEr8VBaHDdxNhbfahYtuhpMvb3hftzzgWg4hC4M",
  "key36": "2svw3ZDUYmKPBRYuoiU62R6K6M61tFQrkgjt5Ks2XTa9d5p516RfnxzqLyzcC85Hf3r5Npr1Acnm9ipLsnLYXRKX",
  "key37": "5k9nEtapRPnhmrPtM5TZKNMpegc6R7xVc2xf6LLbUmz9oj7KKFbgazMnitFiN94UKmJYDRSp57ofdGBzsu19dAyY",
  "key38": "gxKVvS53WFWSyQMAtYqdXUg4aQmRjJqcT38C39LXsCMMtjuwToCpJ3opbdsrGPaczLGXCuEntQYCVKchB58TAxK",
  "key39": "2dZWnVqANmvApiLu5uhjo6aJTTMR4dKVymqgxLQzxpQfPQzfhpRzXAaUe1Divmx5wyZrqi2nrCNpPxef6LRiRAF1",
  "key40": "35vzUqnixPF5arAjBdq93z4prxujE34TpHLFxCUYT24uyQ6sDwuFA1Sm61KQpPBnYXzAULKPb1veAatNzRQxUqCy",
  "key41": "2MQa1EuNSdJBqZXEP4EX5fbuo9r3cB3h2By1jYYWy7pg97sqjmWbNsXCGcdunvX1kQnErykDqsTU5DoNKoqPi9Wz",
  "key42": "3Dhnb4nKM3b48FjVn8kM8xCnqQxWNzpRMNHbQrQyyRcPPMvinnWvEm7BG9KppMqXhPQKqZY4LUT9J4rmG6BgfLHi",
  "key43": "gm3UTChwpitvw5Hd2mFvCzt2EF7BcNueu2Y64nQFnqE2u4X7wgbysMfDThVHf6cTTv1umuG5eteUtpmfB2CD4VW",
  "key44": "2R7Hx6a9dsjUBkknV5iXDD3W5n9U7d2VU7cpgrfn1aPNkXwyWT43K8nEm4zyyyXXvJZv2faP4ofH8PZETsZWkHte",
  "key45": "75zauE5nkxqQYsAdW2hZBmQEjWL8cbevMtuTCYB5EGFc2ngnHDJrcJ6ZTXk5Qv7aP5WfQGz3bVLkzJB6Fp4nDww",
  "key46": "5CmJJosqPw6RfmtEdVHAYrPAkgRbr5Z4KHh3KWi6NiTaV5xFHPTPL7vtdSM8Y5Z4foR4vhcSr8HaG9kBwmpK86mu"
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
