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
    "35eccRjrtwpGkuzE3aaTwBKeKbGRiqh5RYwGhJX8iYwrMnT74aPxASEP2Ukdivpk2wYcuuJEz8jYKpPv824CzWoX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AJHjFqPBz11GMEipbgo9jbQ8Rr6MGMoee9pSDTJTtE4YRpyyuyhpe8BfThP1838xXAxkqpvBM41WNANd3fnj2rV",
  "key1": "QrKLcMSNJXYDewmSDazwiHuHYs6NYTkSw6A5vpTTQq9M9RfdPRYk8tkzp5ztqC3SEKArTB37JaVBaPb3tprgPD3",
  "key2": "5h7bBL5hSEkWmvgRXu9NQqHkki9RNP3itmHQdzbd1BdrX321spHi4nCuGHJRxDp6Uhr866PSMxMLCoXF6wiPtbkv",
  "key3": "555GdcjijUYcRcTLv6Xm6J2PR5pwa984gcc9h2Qkn8m2fGGFxb1v6ZQZUD1z8prBkoo7637awEYeoFYnGTHmjYqo",
  "key4": "3wvo5hFmneXhGBTNhJfgw8dc9aHu3mHE3tq58dyJG9zEqh9M24kDohNUNCshHYcABhmWx4oJacLFoMTfeJnC8YEm",
  "key5": "3JGnLp1KWqHBVZoqj8Y1xfVQao7DFckBosUhAjwii7LdEs7f4cbMy2LGvxzah8rCSfJiFLg4VmdJYFgwdzPji3k4",
  "key6": "7CYux3aKsgy5CFbJZQ4yC4NWYTG5wczhWE6DFHKWueKSvc8igLqYWE3Bnqao25E5ZeFCqsBUeEKQHAwET9h3Yqp",
  "key7": "2Q6Ytpp8odGdDKBYw4hmAn9YPHNeZq4VRkps3efj3xNEacZdLp36GHFGPJDyGXS3h7owrH4ejQnHVu1hK2Bf6BHr",
  "key8": "4uQVkAfMK9T4vMpiW6humooR5fh9J3yQDfyfUtu8RWnpXKkRZZyzJkEsdrQhM6cCaTGzGtzPxzFY4gSZ2QRTQHqm",
  "key9": "1Pkn3vv9JECgyc4RYvRzfXhbGZANHE3zwBB1Tk4oFrZyKd2efJtUxcLhj1ajnxAg2fFguu9PK7XtgSGpRG8iGj1",
  "key10": "nGFpWBgSxPAMa7peWeXjhJn3Y7t7by5d4WRUY5ptkUpenWdB3d9BJVZkJTkdyRTtjM2SnVD9ryAxWd9fFSHgUEJ",
  "key11": "4FVEL6fbtVtXMTqJ5jCDQihu13wcATCiLsfxnTfoAJTyw9yH59Qeo7iwCkhmkB52GoMKLQMCXmMFmnnhg1e6MbrU",
  "key12": "2iFcLEAQQz3npGmxcvTAbuAsVMsFHfRWXGD5Ur4smKJsjLxxhQMe6auPtUhuLs9EA8JU3tcEeZKi6m3Yazn5R1du",
  "key13": "2TAzbbvQbq9tktgh7VP3Xo8B4EcJF99fjcsrmnwa18vmQ1z9CQ185ohDUEuGJi5tkvKfPVCwv9S3JNoxer5kib4u",
  "key14": "3jud1M4zrLGke5hU7jpbYuo1zoxD8JjA92S1Uk9NyJCVaPqCrvyFL9urL6xGGCbtqqnNRVUtZRxgo7u4F9KMXVCZ",
  "key15": "43s6satYrQ3KmoodC4ih5hm5qVi67kZHUTnVGVitXM2qwfDmu4845EQ3jvvRFTsFbtrQr4KNp9J7aaBBj6YpTU9r",
  "key16": "byCjM2eb9BH4ecyUoADUj6UsSY7ZjoeJfR5SwFGwTp5fBWXBVeZDrm5ACBtkHKQ1AVt5UCpJfCwwSZhLwFhT1jW",
  "key17": "5g1C9BX4pQrjBycyJE95mCavVvg4tcKr3pE4SUNNS4UXZN5FPh9iP9DptJenQeWWooFbMmpn5t4M1MUPqL82rPer",
  "key18": "2AgWrdm88YWnhHtPaDFGugaEG9EEtDHsrF2f78Wij4n3RdcaSErtASyG6bnPG3MtzyHv92Lvu64ov3Eeu8hxCC3t",
  "key19": "5xFU6sbDLUt188VauJNHFRmsUAr1rASoEq69n8yssmmRXDZfLjjXheUiVyDDXpeSs2AstBgimAo5PQ88NqQGqfvp",
  "key20": "5KEU3N6SpEjKxegNbNPcMAdks1xLP4orGaCWmAmjXrYsR9ufVHP1FjSdWkadTTDZUPtNQ4Nk7wy3o8v5u5q25y5n",
  "key21": "4oJuKVhqJU1TQJbNLfemCcUrZQ8ZrzS6dgCFBSyX6P3hVrwUHSAV64U4iKXXfiZmDVvWXtzAKbpuYbzGWy25vQBo",
  "key22": "43ZXMrMnZE1uw2PoBycB2AmEw6NqrjRBTYx9MCnCKhJNgrShcHNkE9b9tr6MomzJGkDFbbyn6Nm59mNXomw3iWek",
  "key23": "cxm1sA5jC8CWrwZymyAzdTErRSxnEnQHiMKhmVpy2QQwj5LUZLaDSPF8w2sYUvjqFcTZ2wgQcmLmsNYEkcsQZDo",
  "key24": "33krbgmApMNNYF5D2RhoNm2VYC6JW4J8z5Viat9tTt2oatBkJaDNG7APEzr1S6LiNW5PfRc7aZmf3ee1SCqckNvC",
  "key25": "4rXSaqF2qRpYihzf1JEacXyXaRquvwAcTKSaoH8AfUkAUXR9JEoE9Dh5AcrZJFz2xPg6vyqnS2nRRtx86seDSoGB",
  "key26": "4s5zxPq6QKFwRW8YuZwWWfuqxDciJbE12MrYdkUccd24mNAQYHmSxwPxwVid4k7joaq9nPQNSEhxhg3kpjtCYRpt",
  "key27": "4d8zffpESFptsTynR6wEM1MT9j8vJJAxtjqRgMaZVQ9RCknXmDEY9jxnoq1KbYSGPPeGrmq3aMdzU7eo6FPVGnLn",
  "key28": "46wDWKopRx3qj6QxuSpQDvZ12zSsWf4iyCY6gVxPjE5WBWUkbwUPEiQvfiytJZe1oaxGan6KpJfKjabbkQfjoW8s",
  "key29": "4cdzp8aCuv2455nJKmBZVpuiPWYFWFHowfLe7kZwbmGgwV1Pea3zH3aXVc4891DtxF4B3UHA5Su4hPUtSTN6hFeE",
  "key30": "32j2ebp9HRkUn8q9XxnVGetgbtfgT9Fct8Sq1ur58yJrDxQWzFjmPzybk73Ku22XEwc9YbpUDAFiyRp6QQQwNZzc",
  "key31": "2aGaCKtQv12HE8weLxPh37AApwbG8byqmtRuUNXKXE58Gna25tMdPiNCaoN3QaBFTdtryqmHWUE55Uf2ag1LTZBw",
  "key32": "5bttRDSFMQfQ4Wa37ZmGXXvQceanPwtRmmEER79buYmKhjTabCAG4d3CT9ZDEpYoUL8UMCCcKgPg6ySTWLuBhG3P",
  "key33": "2S6PoPQWG69LWyJjV93GfHCvr7WVFxtSciuAqkucEX2RdRtnpdSc3ymYbdE5ZbQ5ThhCTEuTxPBvX9W1jFgiukQu",
  "key34": "78XxRfZ7AE7aKsKEQXdntRQZheAyRyzCKFp5SeYVChzrtSioHBStXyr7nfUERp12KZRmRJYGCBuQczN4SBTdW91",
  "key35": "3Q3mbZ9A7LYniHYscNigNHV2H2JnHT1NPD5BkgmHyEjHpPtmjckkAYBmtHj3qxfuzuWnE1RQYYyXCZw4j6kiiT3X",
  "key36": "5NHm2uHpgxt9FfDHpFGqEEgjYSN5tJphM5th12E8bCJgphKssW4eGsRx6zso5DgvBTrQ6QgFogixLmyDohdyLsab",
  "key37": "2bysToeQrRyZtmKA61ggyS3t9jLCCvEcVSSmUNymnnJQgpL2AkdsUQfD99uVmq7xicGAdFwGdtv5G4rZwXJS9jAZ",
  "key38": "3a8eGyAQjiVkgg8nQVNSd7yZyzCJvEj76rARnLbvXMso7y1i9BYCwJAQwn8YntuVV93hQ1rtQLpEuvnScdMmB4rw",
  "key39": "62WKxUUdXyW7XLqHhvdV8W4tmbEEumtJcDsKSakvhn3XedFp7Eoyud2SNAZ2nUrBMHtwQYCEAZSfEZRWJd12pjKj",
  "key40": "33AAo2HvmWxG6mZHhzEHSxuJ7BBFUcH56hCBBsoAkHrtyVBFiVszqMJms4oHNBnopsMdjWWhinXxZXzMUF9EV7q5",
  "key41": "66ioSyTyidYdLvh6kpmMdG4DeZk3yR5tSQvBFuwrEVH2AgXBr7Bc6QQN7KrrD6uP7sdQNdo5JgdNJ6esEGax7Aox",
  "key42": "GqLDCbRVro8xiAs2W75mBNrSvQWMKfkoy1fvHu8BwVmsP7hWX5eKW7V43ftKKABhRwq9nJ9bEY3VHpkvnfN1asJ",
  "key43": "44dMz8ttmWRLCiDwr2pNVcF1DnMuEMMEUJGBFCKFYJDH4ZXwHxPZhQsxC8ey2hGgTCEx5NaXs25M7VH77FAxXo42",
  "key44": "3YoRHhZPdfceReMy5Rcq6yzXme7W28nE6r1WS66xaG2vKcdoECXoS4gcW5xabFrvKTRe84GNSU9tJUnor8uCyCvV",
  "key45": "5Hqcpr3hF5XWQPMRjKfxCAbCsMPEAK5FzujgzS2y1SbVwAD3m5KmzxZ9TZyjfC9HBVFARzSoBUpNpNrC7Lyx345o"
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
