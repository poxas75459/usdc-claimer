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
    "4NMpXJoBr2HvEpZ1SXQieewdgGNraLLifXb2BSSEG2S8JYgP1hYdpqCWeyxUvUTex1ZQsUkB5NaRqfZya1dSk3hV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QVK5iwemuMPyXLuidV11f83J9u29UrJ3rhQUKuZJxjtL75XNMVRd1EJ3W4wzUszsWHnTperyHfHGVsNnYodvzFc",
  "key1": "EwLTaztx1w8SsXkuD6BLiW6iWYeBhjbAyQNsXX2GBs3n3ygpguPGxhoLSELkLCBRHuQHkNSW1arz8MtTi8UBd5j",
  "key2": "64U75MNMEuuHuCwYoRej1xaaiZJNPdFeCbjEHyFGLdgXf7swaqSxfL8VkH4Z9iyXf32MDNX1n2nZBTaRjoHp8F5b",
  "key3": "5pWLHJ4BSA1Vq6stUBkj4ea72oDuUhQM61nJQWC7ykt2nfoaLPvoAdPLaQ5Dm4KYhZbsJ2QZaXZLbD2iqf3Z5gdT",
  "key4": "5qnUfqa8u56gngZjdz3XK7Yk5LVMYqGLRLjiCRCtvix59MJ894ntdaZPUCyK1qq5L4wUnBxyLpuxuWymv6kFMS2B",
  "key5": "Ksw5SHYcQswhfszT1bG6dadDZWL8jPApsiEpja6TFqJhbRTpHwAeEioQCHjqfVo8spsWCTw5CDmWNQocypVs6mi",
  "key6": "4ey6Sk89EVyjoeqLoevXk2ZAAecmns5XF8egwGW9FaDiMmWuubHsRjkFZNWwSJXDbfyCLdRMdB7BUomzkMwbDrGQ",
  "key7": "5HYe2XMsXaYDc5n1tzcWc4Gbqnyyg4d16kvXXxV9uwwpYmmqVXcikA1nupcK2A6Wv5foS6wA3RC3jSRrCH5MgfCU",
  "key8": "23wogFj5a2fh2u3pMqcHZipGLR9nx4M4gNF3w9gY8Gz8MacKNbyXqkTLUgb6yyUbD4bMqSdYGFASRJJKqCz3oBNQ",
  "key9": "4GLHBo9mkuWbBiRM2HmqNeF5vshoubVnRXL96Cg2RsiFsAPFHmFqJxfp1U3RD4W8A4oaGNoTEczgmg2mnetfJyKv",
  "key10": "5svR5pKVMfAHjvb5ATmTxHVN9soo15sCRqqE4ETwYhyV1K8KnU7YrrNEKNenpm6L3uFiqciwa6F9bfsaLP1grWDq",
  "key11": "2TYCCsemN6Nkjd4RpNxayqm9GrVhf2ibNhHuLnNiiWgznBvvyy8xLERDwZAEJTLP9uhmc8xGkVQeQuKYq3nV9eYh",
  "key12": "5QJtayCauLT3VLWfRw3ufUA9moxdLrDMoHBgwCMoC1XH9yGpHM5FAfyxKNhmeBwYphEGw5LARpF8Can8RhQMAP8b",
  "key13": "5yp7kvKSFCw3coevM72k3GrT3RkABo8X2dN4r6vy7aarcMN1aNvUjk8tV7ezLZPRdMMAG1Uh2GLhw3xZUE2x6Ck6",
  "key14": "4eXTFxzBmVbMcu8ED6gvAbf85ZXLixuCMQ6v12uvQKougc96zbWqg1VXTakAx7QEDzE4sX6j5ts698yfkEJjmn5L",
  "key15": "59Pwm7MjmLkfotpUN86hUes9HrSUHvzdEkwCmC13rjcKXrHZKVhdZXDajo22WhaZsfdhVWrYdm8K1bxE8BMvdgtM",
  "key16": "2oZuH3tLP6NhJVDrVdtT8PKdJpE82eqRxv9w12BNjeC19zYc7DDr6ywmkMMgvNxcyfcJMmvYSj4MWM9NwB3YuJTi",
  "key17": "43B9Zhiy49TntddeouSjqZ1PkeRhTPUeeMguinXu3KRzEQDBNmUkXHYUkytsyupnqwEFnArUNMFU2qYCc4VHuJWd",
  "key18": "5bnt3ARPGYrcL28nWwfWyVLpaUqcJ1nMFb7iMyidm1vA5oW5Ft8NwBCKdmfoASh1D3rMqjjDzTUdmvghHzx388SJ",
  "key19": "4R1WAjTut5uLcNNEh8AyaRizEbJnvJEw5xjckKYvxM2irdT1kVmcLyKpe4uvKDHZqUdzM2aPSYQD19xoZutytGni",
  "key20": "3Tf56eqvWsnivFJXuCEmysYvzAiSvD7jNbqvPUo7v3ynpv27bpVLWvLnBXvBQ4LYro7HCp4a8tawfVjLyJ3srxNs",
  "key21": "57CPMvjc4DzcG6w8jx3JzLKH63HzjhXtiNBZCCiKCXj33pRrXS2mPPiZxJjVbfChwYDipb8Z5Qqm4Vv1Lobz3SmM",
  "key22": "3UaQNzQGLoTfHYHdrayquvXpGLmDDQgggKuXsLXhGYnzZ3j9sbjR4YKQTag1iJu4JwPRHK8ZsTsFMRrjcrtqihu4",
  "key23": "3ZRLNTARysGz3dA2H52ohSA4ZkvqLNFVQxh29MwwUx6BHgggKaHNKQDkj3WswkstkvFfCwQydRVtxkEFU4JcpQXj",
  "key24": "2SNYkbgsUGbvCQT69wa9N4XbCkCRGCF4EBdoaB6DJTi6L8gnagqhi4jDo5USt9rGhUuwhp1V4ru45PHg9kJByDWk",
  "key25": "Q9tPg6khFsTtdvcFgqj1E9g1B43quEgcmEgPcm2YrPv5Nis5XFWC5RzD9ur57AgATcSPiaMvCcfU9C1eqi63LTn",
  "key26": "ZUT1kC1erDqwxBrop58dah9z2ybqm7Dt6W3izYuSdQmudWU7pmxAYGUytvMmz82uJKDGNF2TdR4Lhy16esA8RjF",
  "key27": "VKkATvZgb8YPNEKzJ2F4PgLY1swYvVFG1PT5YLWixHkfsH7ih6Qy7rjFsec2AhGmjqdSw5LTK8f6HdREKohJgok",
  "key28": "2XPVyGfEtqAWPT93XJBo9SeeYkf2xu1MQtfPLG6rhvdRkVunmLU4qVwaYjJeWibV5rCMbVmP7yUWqUFJu3qve2nr",
  "key29": "2B769ExzoRzKPJZzHrvDZYPx2AB657PBhWnvGuehBjtgyT3X3qRZsM22gAd7CYUtpBrZf13kJA9bhW8RGX5kZoch",
  "key30": "2Km7zyHBMaoB3TAfQFEKWBkM1XqCopVMY9GzCXUAVidUVUp7B7ShtMXo3Lv6JZwJQouBZSMkuz2obSqW64MeiHzb",
  "key31": "hPQs43BCDx8h9eKoAbcbb3q5YWxmit5EY59fsx3uL3ggCw8ZeMpw37GTeotGgqGwCd28JQ5S4H6gAMr6xTCzHZV",
  "key32": "5UruyT7gKpsVDRcAfKfrniCrHxypDqnwE2CUcqDTXZbCWrjJwKwK62ipwUFWsKJRSsGCF1x48Kd4rxe1nfKpqsMp",
  "key33": "3EzLz5DykgZiTifG2FuZURsoFxL5sKsVMy7PCeCzmsLd9yVNXWSV9oLppK6uJQ8mgxMACUEiuHUmCB1jwZd5q85r",
  "key34": "5X4BdfmRGLKPtdyWjg5GvH8v2KdQQKx16fZTP4khGWAxCTni4MSrPNiEdmtHAXggcKXRjKzCKqoTCHueMVRCbxqv",
  "key35": "2WGMnRtaXAfQaaEjQ5Hjti7hRomH35BAzvtmW25gC9SbK6HuZZCvRfgY5JPXXZgbno157gv9N4iTtXg94gjHzPec",
  "key36": "2d9ogTp6VVCLrYc1rrqQcsjuJj2bDS5ht6izBwFx6BKEp816DC3MbKKLJ3NfyzKBm7Sx4Npg4Q6QwRwYDCPX926d",
  "key37": "AxxHN6XM8DVpN3Fu1YQccAwqPhxYhmGGjQjrQV61NgHrwPJXvp68dZXkuhkLmpkqT1DajUeMudkma3v9gsHeWqr",
  "key38": "5zTMzz3GENnJ4QpsmNXJACJhj3igTQ2HZE3KGauTQoHVe7SChZ8o5EVexGSeumrmsg267PaCQomjVEcLSTv8uzmf",
  "key39": "3zRanp9xuGdWFCLMkmKTQDETFAEp5hrzBtsdKQEBZXSzk3AcFGMxM64vSiH6LViZukuW9bYR38TXLJ2CEqrdLA8P",
  "key40": "2XDV814ZjY4NcXtbFakcez5faxXmYXYm2582qQLySBXupHLY85tmHBmNagUe3QH6BW7PKjco25aVGRiZYn9inDAP",
  "key41": "37UgqZh3WqaFL4Bxfp1BXyzvK67RLiWNkfdSXSaoy3KnWLHHqzFp9SvmpduMAjKutH4XgMXTKMBu4UuZpj8j8Jfp",
  "key42": "bX6YCYrfFUWRrA2zDK3X38SJ1cnHv8TskxFWZgiJhgT1DBeXeGkV73M31se9TAESJNctDcF41WNQ6hE88kPjTnd",
  "key43": "43FK6yafM9HuUsH4N4TFBmML2tSobDCwhXrhvZL8BHNptJJ7EysTbMdLvi2ivnAdVwTjnLrk421wdmtenvfSPVs5",
  "key44": "3JaZt7kZ6fnir3bAUCyYV5iFKQ2TPx3Px5UGBwXRa8S1QKWGg4n9b8v68UvaWK63kAy2VnGArVpFAWFe757qGFVh",
  "key45": "3CwRtzhdd4cQk5eibfGvizsAnzRANCcZMwUMTX5rNsw9V7PZfMguqLJhMPraq7xzsawjdFuYtcUsfUtBpXeGpZwC"
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
