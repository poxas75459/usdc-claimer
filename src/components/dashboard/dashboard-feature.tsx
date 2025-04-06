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
    "2KZ2jwjgDZnCveergQaTwB9evvyx8mQtuzrJrK8hi9z285kEXzTcGCMAqfikLrgckNxxBpv8msNhk6ihnjZ5bKt6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j3uuWUVg39cm8it5fb5rDFxh4kQNpcxChTYGhFfFYkE4sMyChkLgusx1V4w1oMnm2Cq2Y3AxWPBGqsCjTSFWGgM",
  "key1": "usAvWVMAfYfUv2r9US4LCBduDMpNwqCpw1RTWGdgudiC3uXYNMbputFexcwUCxJmJKZGnwHYeaLok9ENvK7p1cG",
  "key2": "39ZaJ6Xz3W49HaryQ4zjwFoGdqpJMgkYzFrBZri7bL4GEfqoDwC68jZMGxuwVrTEqa1CHpc8oBJDsjxzQWeb2H9v",
  "key3": "25vFqgTEMb6Grnfw1KWrdaQ9WAwEH9HH8FqGDnKLZWohwJLeUxUwTDvLm22g6iPKq7gmYD71bqSjHEUJug8B35CV",
  "key4": "2dZKpswKjJRrf8RpAB3BZKav8faiF2PhUjCy73n3xAvCmJRkxeABbwKrPcEj9QR1tQyFcLrWyJ2QFf2UQjGgL44B",
  "key5": "hznJucXsSZpK3AVNTHeM2yKHzVW9TicaYQqcZr6fqgGtVkJKzJqmUqVijeCitkGFaNdLSUVmtbEfh7GMGpV6cH8",
  "key6": "49m8pBVszt2ryHfAzUKpWcgCQfDRP9vQHMZxLVJ8RNvwycSS8NxXpKG6LriqJvwYcFWvxeNtSJyb4EryZDmsvQMq",
  "key7": "RmPtfzbo2xEXjdFBQsGNfrMiLnKhYrNaLdbNm8J49nXYCWDNwZ3Ja72enZ76y9EhtQ3H7E8Tahmx93FfMVg95x5",
  "key8": "51ZU8LjyrfoCUhSkTogamSUByQ9HiSHPv2LBhQ18kCidsgB35Ef3AxHUozJYwoeyQp3o8mAjocfjhoKs6tnCkCKx",
  "key9": "23p9e8wWLaZ5veAFfW25Uuqw7dw3GBQy4dUEkJ81fQNb48iBZQ8i8vRwLdVvK4KUen7PbvAPV8ndAXiGTm2RbeJp",
  "key10": "5wr8HBKbWPhkog66U7fdGwxGLitnwm3uBFhEfSbwQGU9AYL56yeiRvdAuzJZ12fnZrdw543L86NZqzCJyamrDNtG",
  "key11": "46rMV18HFoj8SweiKzSWuv8dGLVBENsd7wZGfLpoZrguLq5iAkTcsm1Mo45dDkdoxVJ3wRcA1SgFsR18c8JCB96v",
  "key12": "4nPeBKSLorEGw3tqeXzhXqG6Hv4uBTzX6ais6a8gYJcdarboMvqKVkuBhM8EJEYFyerqYPN8U9rFA7aVUnbN3AfD",
  "key13": "3cdikatic1K2LYJaSHk4cVEujvXf83vfoxqFjFMrVyT2SUyjfPSrzJFXq5yuD7W4Wtv3h4bCjkYHX6QS3tsf3Qg8",
  "key14": "3uHi9R2cFfb41rzc3G6oPz3a9ZYNYToiZ8UemNMaJMCnwCmssLAyn7H7vivxb5dPp2LURHCkveFMwSiJrooLmXhL",
  "key15": "3BjN8shx5v7kNpByCLsJS3AekzzjvL1ZFxDzcQCkCSJjsa9VmKpAxRwUKBeEP27HmQ5qxCyWMR4DXdH5yjJNbAWv",
  "key16": "62kBKU1NhvXZiAZ8Cyi42dFnmw8P4vXDWtKraMc8Cwm5g8wQFnFTGWHvZBiZa5iUznufsT6rJYxxHmcQXtKhrbC9",
  "key17": "4LuxqULsFXs1JEAZ9BBSkHGH4hNZ3LrBnbTrpGcQGx5tFJGds1DGYUcLgbLNTv6jZZ1h1TUQKhTMrCVSVk7EyCXj",
  "key18": "zYgQNpZx7kLqNA2af3i6KWMuvuenThuRcjubMc6JvNwsBZbGKhJqJqZRT8ndbLGqkxAN7ebG7MyPk2NfmoNWfHd",
  "key19": "31etDchBsxDU9WmejXZio2V1xqUGuTCyAZBAZeNxdLi7AtMCUVdUiDk8tssQ2ZZWqWK2p3gcLX4E1rJkfy9SjhfQ",
  "key20": "58vJ2GTMzbSymqqCA9BreXeutfrDtuetNouck5aEEjcR1aZS7YGcmAEC32GvSm7cibYY8oYMspZc1fp4eCN4L6oi",
  "key21": "2veYTyY2Ry1UHmdSte2AVHPqpAUyZ8GAWkWDDEEGtwdSDet4BobYR59c61XKbQVwNE6Zq521cjCwK5YUTKmr1uyy",
  "key22": "4mxPSSSWrtWQvnRiPjhtL1fJVJoPVNJyfuUssaJ1frfpLDNGAYyenfJ9A1gtdUC2YvGP8ZFbDTFJvQt76jKuoaaA",
  "key23": "3VkXKWJzBVjYXRRcTyvSXr97gTfpctZHi5bobiG4uJVFpYBjk856Ea2qCYNSai4BNKB3Y68Nn177GYni4sCqyRf5",
  "key24": "Nm7AjJDnvur3WVQkyoKkRVXwen3LuibW8hJhX8zniAFgyhQaHcuHUz7tR9wR2NvW4vyLcGNiw1kgobMu5RJiVMz",
  "key25": "2yH47q1fPqPstxhhAXwDnZfzPcoprzGCdzFCnAjeD44c47W5sVZmjHcUrZDiSUhm2a5DsfdjrSVgGEB22eKCBnKk",
  "key26": "3DZhurgBWX4PzYMxReMnwGsF2jgKRustZGuRzghw4ozQcLy1DoayJnw2DK2VTFzQ2jjJcWSoiWa9rUyJJ8pZTPhv",
  "key27": "4ip2qoeDrJpvFP2LRjQLTi3cb2iuUP93aU4vdQravfq2WaWeU3dKUeCo3mTtdafEjZWPMtXgXVS9orbkpYu891yZ",
  "key28": "3CvT3zAvEaZjMoXfpQEbsMJe34RJQqD3A4v2TTCShDdbBcREFGRdNJ5piccr58VfihNHB6PmivfH6YhwpuSGiva8",
  "key29": "54CJ12yPMi7Sdyc5M8Ck8ZRmfXu9oo6nhnptQq6pnHo75cU3ozvz1PBz1puWNXgvTx7Ee2T98LaeuejEVearscAm",
  "key30": "2A2YichgNt2HQbrHJckr4ctRAQvXS9sVN4cVYGB8JgrHD7YEsnJNUAXnrPVcNfvjnAwEMkxq9qYGhcZXX5hT6ivR",
  "key31": "5BETjD1mwVM3qEKkXoo77ZAwBGjMj1qFXpnC2rFpZk33nVf5gqDz5R5KqcpoWEEvDqvJHQKPoFcxSs72SWm3v9bB",
  "key32": "3nTBtUqk6Vix9voGJUhY1go7WarS62nARZZdU6iWFLqKCDTafDemaaj7fXB9aJQ1BYX8E4aG53WMntUis6cXvZqZ",
  "key33": "E9C3YLoRCxiUXQTE83e3LSYRCUFSSq1KoBgPaJCGLK7XwcWKHTCVqUbPqCswDR2zJFTCk3smiqXCR5m4hPTBTrF",
  "key34": "2RFJKcXEi2oriyjTxVQza1ck1STeNEJ78VazDSkT9JmYwRAMag4uYSqDNCZeZAuEtEE8GLyxyFabD48YhitBxPEv",
  "key35": "2NSsyXW9WT5w3CDUufyHy3pFtxjaeCC5jMDqSGyYbiJNAu7TbK5Nyc1TFDmQu4dDemxRemxaZvfrUdZkFXr5uHNm",
  "key36": "36AxB1MDXARDv8N7H18ppqMZRnuHRy6preejnARhcYWa1BuAXzovAWZjxXSsxRFanu5feHCJF8FHW6QT1VLWiHvp",
  "key37": "SCFZivFn4ZpKSo331oLDQ32WYXosyiam3pG7dxqMPFR5uU3qmdacUiekqacdnbUrWz7X6Totfx4wcMEKiJKXQ7y",
  "key38": "5iba8KFZyUkPMUT3v96eia8m62u46XNrzGfwdxFB6pJLjF6hYwUb1YZawxahU7ZBWi2jMkRHxWKL1vEuM3hB6Yun",
  "key39": "4Ri3J1rfLF23u4iib18WpdVpcRpZ2LoN49gfGfhMM6Vorg5AJ7HSXbKMpJinUaPEWs9S3DWXE2EKztVT61svXJ4w",
  "key40": "3XhUnUtLE6b4uzxUGBwzEYu6Gpv6ypZFdGZ1KUHEhgPjpgkJwTkrUPVfj2jZvDphrufB2gWhXH92y3LFDiGu5a67",
  "key41": "2J3Z3fj6i8k2ZMp7xcYKqLnkmyMRBZm5wAxJ9TTkxJVuUwVDwtmR9NQsHRy2rF5hTZubibhWcGZvwQau6WHEqWVx",
  "key42": "hgzkBPcoBR1QUhMAXwLVD4xCtzWeavBxvTkzWq28U63ZHY81AMSbVSo8nHDJyx1qEGTNRCWc4xWpZLuruTYnxsS",
  "key43": "bRN2VrZAgxQPEf236kDsW32SnTd34P7W6fitUC5DdaoyiTBiQtxvZY4EyXt6W6mXQDLqtW9sxDQ7mxwSLEnNhUw",
  "key44": "5qAqxAua3tzKHTCY9Rb6WyzpmpEbCt6MhAbXc456erz4ZrTjbsGmwAFQe2E7qvuCMXiuyx6kXfeAuJepy5kFAHCA"
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
