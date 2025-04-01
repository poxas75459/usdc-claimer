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
    "4BGw28bcH2TRoW4r3M4sL3ugobMqGMLNM96vj7U78rMvWBtdP7GWRXKYMvj8x9Koq6MYoE8w95dX6g3NqeBMZUgF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gBHgdRdLcGsB81avUpP2dTaD6wdqtMDV6hto7abfbPDCexLuSUUBAL4aSxxvb85JauVG54oYXpSNRLKRwZWwdNS",
  "key1": "KG6Y7wroBKukB4e1HwuaBW5SY9o5eaT7csrjNYRCp5ZGYP6eckis8NBLAxVFhSdraviykyEL5twaxHf3RfGkeQJ",
  "key2": "44WVdq5scUBZEs33GCKpXtKhnEmAbrsCF9ZhDBMhSaDKchhMYZxB7hBD2Fmbkw93a4nJJhEiPqZc5VedUa8LAmNc",
  "key3": "dMzf9vHDBuZA5nEgWq9zqH7Xbuc2qiQCKQHmEZyS2hrsEF2WkbHoCE9wT3BHkHQ9EaDq6aehb5gtiTtXw3RMnJu",
  "key4": "5Rvywtdg31e9XQH6WaAFRS5XrS8sFigWcToJrd1Eag4KjJnrqTEfp6ChYhKetLw5QZg5fherKngxF4NoJRfzyEoj",
  "key5": "3AyLo1unnGbYQvxsMjk9EMoFYF5zF7oRneVAyna2cegyDHfhwx3WrTK2xsZ1N1mqhrvW52RuHd4yhfmNZExtXrs2",
  "key6": "3zpMniYupnn9L4XZKmNmfRQW37SQ2hf8nqfFuhwRGuMyWTAWFFKGExmGQSufCfN7M5x9Ex5WT6piSV1ZX1xjySJm",
  "key7": "LR6y3VpLq8JJxc1nLBGDecVd8B6UgkeZyRGxaXptkMcw4HUwMjyNGPCSobpTeHWJeuvjsBtrRAzAp9JKxhXucp9",
  "key8": "5RJDWV3ZfdQtWGkx2w6qJsByH2PFW1iokW7o4ugPvgSTGCwXj4F37dFVdnd6TvWNSZb89sygdRy3W595u65SrZb5",
  "key9": "5qsDtGf5k4Q2HHWMZyVxRt7Lf9LpUjYeCsxX4D9zcuKLZKHKubEM4AQoxaamZkfQmWZFD2MdxjsQf5id914qEkYx",
  "key10": "3hcVMYLrWoQ1nRk4WXYfeCumzhhBJ8tiqC123uufhvrZSBTcZJ2w5ZCJGAqq8KGHNXZQysm3vnohF7vVv7eZYYn",
  "key11": "5WFZPDi8wT1uZxYLU7dFdgvCRsgsWyFSxp3eysAEQjKbWMXqLdZCM5ExF27ayu2RgWVpct9qWvrQyTftcQLeiYbv",
  "key12": "8D12fnzai21cd11pnVdj1hgMA7q2tma1hMzffiYFqEzWuCLB5pEWmcUA1FpQn21JBUfQwfCvgMJq4RYUAgyULMn",
  "key13": "4fvigUNciQZ37LbqJyY3ds2TtGPH43FTjMA5rHJdiB98uqEwJz9QrXPreXrQx6Ky5SJ4nQvYaY1yBmWqHpjBgo1X",
  "key14": "2HPmGtd2xaC5vPoPEFfYS91hz6SES9a4iQK2geZ7GTQbPo4kxxWeUAgLukYKkWfVVv7rwspa1FThbhtpdT6CmSo3",
  "key15": "31wiKcjGRXLZ4sE48mLs2ZHfLq58JfSo41hTvLQ8L8QYq7VzrdwxVM8EXhCmT1UZFUEw2zSjpW1WEusNAf7iCWjo",
  "key16": "4sL8zbGycR6F8yDcdynFU2rBKKEq5Hv4rhzoqwwTaPxAeniF1e6R1YcKDJjCVRSiPXZX629rsfrxwJewoi8sjEbf",
  "key17": "5jjKEY8Q8maxZp85Chjekf1fL8F1eFCfJJHeKcNfkfP5WKZqDVXbjyn6qTEjQJfNNc2Mc3uRbFgpMhczPPcmHreS",
  "key18": "2UBBiRSCoUjnBgv2vxKygaJzKB9NApW3uVi4z6YYDz2fxBDbKPqtcHBZSYRZMiv4qYZezvrnuAv2AthfBmxSgs2S",
  "key19": "3m8cCiqmGCyKfXY3ZdiEdsBeCsT5cmDZd9JGgmSR9WZYT5oo125dAYLoL86NZGL36a7KCnVcFKcminGJaDGY9Uxb",
  "key20": "3uoUWfSbSBYSd6yesqAoFVG968iMkYsfpDgePawc7pszAsUUaC9yL4c8aaTqXDWyZqKFkHqXSuhjAXi9osaem9R1",
  "key21": "4u7mFxoyU5E7CvVsK62TEsLugwmPuA1oR8CwLCcTxw22H3JJ2pXQpcAzwdJKZ1V3UzMdjzEwH7NF5FxJJbfmZijk",
  "key22": "5FG7a2DDuFxMvnKaFMKcdSMfCJvUhywWb5QsPLSFzMjyw4oct8d516Dxfmh6dKLQd1q6u4dAuBBPb3RpZTp7XjD6",
  "key23": "2SmCY79Y5qL2GhKuybNsh9gLGVV4P68ycmkPaySnjmpfPnTvKCGx6V3fBLT2VaiF17AAEp8NnW8KcNyrcLDCYXpg",
  "key24": "3HBVRv2VwPNR4awy2VsLoDBcbn4SUKF4uZhD87QtkFQE7Qbz7gioTNqBPfFEi9Y2maizPQjyo1RnG7zWq3DgKESH",
  "key25": "REqyMdRHXDk5t63hY1SKLMkirUojiswhPCmGbLuCKrssKG2dyj3dVCPaj6EsADvMAH9khTuwtEpTayA44o2pUMv",
  "key26": "5F2uD5Gsjib65psuVKwTRyyyTKeT3KrTNdkcH6Ld4d6KrpCPWXwYq8yNNKaWN1CfK1eEjT5jTAGvCfdoKDng33LV",
  "key27": "kKof6H9qAZopqSbLrgE5r3hXnNLjkkvmYgLhg1ExF4FiuCqVN7XzQcorEePG9KNmnZ8Dqqagjr9ksztvWQLssZP",
  "key28": "5v2aHyqzCpxKVKPRKTv222AmF5FM7JyPwA7ooosgskbDEgLmZu1m3xVwh9N4XVeCXEyZQquLQ2gWy1nSLt1xY9DU",
  "key29": "3UanZW4GG4M5kBvmr1TVFReDq4w4diEkjfnCN2tnthDgnFviHhKJkLWdcESL9R6x8KqZfprV4EnVvTTYuBsL5ZPN",
  "key30": "SEn3QgCt8wDGKaQav5ks9k5HVq17nAwnuuPXc3391iX25zwES6tLoYiMVLh7UtGagQGESK4s1iqzq8Vu3eFy5DX",
  "key31": "4ypm1thEMTb63KKjQtsEFpJkLGwvehoDwm19uGJHWwdhk2mpDfMxkFQorevEbR5aAqC7kKFEVhS7hrsqr1HKoKr6",
  "key32": "5rqHWwaq9Wv8yMnxXqM2h4qxAc6SoK3miEFt3hQHZzrBzHmdk1YSUx1ttg64Atjj8psUoCt7sUnZiPpVqKZKrd7v",
  "key33": "65gNxCPRroDAt96UtX9cesqMmn4UUvMffvWjGVG2Kv4j2zLCBD2HsjMntv6ctWAbVBSoU9npSXbyZbkNMSkN5qf3",
  "key34": "jk6JvkCDhJPJ74nnUqQsewaShqpiqwWE333pCe3a8X8S6XQLQn9VGZLUjPBFcaMGYUeBUNY6oYLahBdmsB56TzC",
  "key35": "2xNGnqdY8hTUuU6eY7AYvN16x6RuxVHV5UwUGB8iphsqZqFKTzHH8ZsVcMSXAkQpjgwpELMpUuAB87wQUb25D1Nz",
  "key36": "2GyWSVj6NgDqJzrJAbn1YJTYmuWz4zfMwURGjcf17QB8zQaHX5LPLZRFZUZvLjTJ1aM3qECrWH2MEDmLSk8xqkgR",
  "key37": "2W5avaVDfuGPLhJZWRFHi4WwpgfKzRCHjGQUcwCNwd2nUNxv7bG7bCDy5KGBgdVPMpLPLoJebg8vnWLKmNH7q4TV",
  "key38": "5MTV6hK2RnyT9MzFVF4vXnpNC5FXPEsRQBy9sLqMs7o9hrH2d85rUdifnXRPbMt31K6yQ7trTfHHKLMbTRHUL2Vs",
  "key39": "YgywyNNTWZDpz1KkU9kjtrmgbyJPHiDT2smd4kLiKGWDDGvBJiRKtRjuMDk9HaMaoctqDWwNrwyhWR3HpyD3yUm",
  "key40": "48HahYzwtk5NkaecRVThaHsucdU2zwSBwXMLF8Hx5oy3pmMddV8M1W8m9RNg8jPHfTEmmyq5bJ6xqqBGRuxAZ3jD"
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
