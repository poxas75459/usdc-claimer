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
    "46Pd7SuaMRzyZXKgcnkP2WLugQNRkJguReHcXkbsUgb9xS6bwDUuBDr5Kd8MDaoumRVNr47KN4o2qVGE27VqTXLN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JumSYSncwZEsxZkb68hKDuaa9CGAYT4EZCaVnZoG6ah3F7BqtK6XGpR67ZKw8xRsMu1JU31srbaAAJaFuX5qdjp",
  "key1": "2Tx1VQx7uvRQAbjDdP19TqYwb2FBmVbac5kPjqw7tSCXw3r7Msq2wShtMaDsDauYjgmPMaiTrBizymS9QfygSBC4",
  "key2": "5P5XrfjxJ86FW6G1BWxyAHQBtTwAowM4sNEhAEenoL7BaU5pjxcLiaCcZT453vfrrVaSrdxAn8GUAR77KZVUufcm",
  "key3": "65xE8bdkCWTk4tonx4NEy4tkfbEsTbpk3qkmD3GU7cgABeF66VMo8U5fsciVt7YtU6nhxtbzkREzz7r73NmYsuff",
  "key4": "ywX2CUJCRbeV6Jzn6XJ5XwrsU52GURajTVecJAuEYfHkT5HSPJVYKg98Lgf4FPLwAjEteKYv8J3GH2pyGAdKxsp",
  "key5": "4TKdGPGLsR6Jw9Sqnnwq9tDJuCNMFK76kgCCB4n13h5E4Z7aP8LkmUoFENqiUgwtULriqbJS7BtxwLSnJGWKmX69",
  "key6": "2NHrNxCys7o3AEq9sfYSMqHsnt2QJeXFuGWZzd81DMDawU2oUbzDRLfUxNhWFg3wqUnnRLwR9g1WENM41CuiMMPk",
  "key7": "5gRwEFfBDxxo1WutEaoSiRFTh6ads3STDUPNjFQNZ4UawsCV2QkoSBNrg8cWDUe8E3yFQRdnp3HwaYorT6coEfnk",
  "key8": "675uGFXt5xFPm58D8EXnqR3NYwj3QjgKdmmUeTtGG9t1bPa854UvNNjZsET4VjhD3qaduqZypVd8H2s2uRvGh8gq",
  "key9": "5YPgByU6GqQSzm1CuUHMWAY2KDa2KHqbA7suRkoo2SCvZv1dxyzo6P2bfmQVRMCsZnvuYWwhccxkTRrY4CMQapZV",
  "key10": "shk8HwCcE6iuq1Ss7tJbmuWTF9A9NMR96sbcGBw2GNDEJcSDixpYU9q3ZZa5M7LFNsnUc913ugC7FwXmeFMK5a4",
  "key11": "3iFTe3uTrRrh1EhWDQzo8WZzPWRJJSJiWfQo79eDfa3udGsPrApPNL6tZ8NNTu9vPNwD9Dob7FjhPnvm7DNsaZHW",
  "key12": "5tt9kjyieEB3RpEQxwwpK8Y2eCmVxLxCSYoSknznn7BopcX1MoCyu7JBzyHR8RJjgeaGY2ktwMfCsBRNPZzPhFpJ",
  "key13": "4xbQJVyfj5gjNnW2GRixHJLdRjQe3W4W5mkdfDnbsqzF7LbM4jhAaYRMg5CNPBK6MbDqcDaSLxDSyoA2dHJ22MRV",
  "key14": "2BJ4oFGF3G8qi7FiuUwFNtLQz7n8dZu9kKuiyASXiMMpWycKnaMCeh3BetECvPP7vBChWjx19nc4UCPsX6VZbQ3x",
  "key15": "5LLHckfFoeAnRsqAY1MX5BDpXw5ZKiamUzMdofScuKP9mQcaym8jGpcE7wCtbNVp7kQFwLRpke2h1CmfcGAwMT3S",
  "key16": "3K36V2MeKSby1EanfVr8e6NyvaJJpZcT7kAGNduFhJKoJNoVbyvPaRrhDomPrwqYTDH9k1G7gQoCgwZCPWSb6Vkc",
  "key17": "aRZ756THo9HfGqQUCRmexEc4E69qugZKz1EhAvSeGyaNq661aZ3BTrxref8PeC7i76mft7nuvnqtnnUaJQgtovE",
  "key18": "HTqQ8FEZB2cydjmF7As7ScbujjKnCLrknKhFEvmNBfuM9SqxuiFZRA3NoAfCKFaYz3w4UB6x9BY1cngoowuNuAS",
  "key19": "624W7nXMC9fshw54iHxYpK8xLpTCWLXcphHJEHjGQfHJFnanb3NS8JNgpBPMUnDxUcyHiT7YUVWtB9HnB4a4vNNs",
  "key20": "8LmskmPQ2vk7mvYPhh4ZjRt5z4ZmgxDioB2HtRZm6Ub7vrdBtprvRYpXNVipkX983TfniFTNyiySyVy8XRZSWW1",
  "key21": "2bVLbmyPvuF8Fa5dqukwBVJ1PUgK5B6hhHY83qjRi34JmbXaZkYdNKiJHLf5MbKcKvLn1y3vJQgaT7exw4Wd3xBB",
  "key22": "qPcBxfpWgmiVaK4Vj54ZDyk8f4XLG7Hz5dRWkqMA1KoKqyjbE9u2b3n255WkLncnEUAbvaQSXXH8cqgQh1BudLi",
  "key23": "5rAjPhLsgLQgaWnXkn3MsxH84Yi4KD2dcSpXGgWNqrudhW9B1DYCCcHLJpqX25CYXD4QuW7stHWKv9JHnqhv19nr",
  "key24": "5S7JJUPNT52npM4V5U4y6myM1BN5u8dx35WagNip4cyDi7eeCUU47eebXfj8KxgUBHoFp4xoMVGqrjeeZPAfRuaD",
  "key25": "5mckwPy2PBS76tMqoNXohtTsD3RGx9Jf4R9cBXpsKB3uhs9yopgDEP7WgPRmd9PW41dwDJWLsckeFJjXVMdWL27E",
  "key26": "4Vga37WVE5MjTSRgW5prhou9d82Bv9wpuvBhX5gd74YwMvGkEx8aVeavrgXDXs61WDbGznxwXDXfe2XSnXSGEY6g",
  "key27": "5nCydPDM7CFZXyNbp6GbLvVnC3PNnXkM1DHT2Lps5YUw4E2pRpUuJeo2gmc79pZCLiwi7KmogBa2ZD84HrajsyNM",
  "key28": "VNtGtaPiTrkbZhSmiVt2XqvcJTZvu8esaRgb73g98z4M4Hxo5i8EHBvRMniF2nSzbAhyQcqyqatrwBjooEtDapM",
  "key29": "5kvo6QqTHKeaodqhLN6ouZkbebHdzDm9UkGvrr3dsJin2NhX8zpeMDXA8wsmbYhbudAJkSTqizojUDfDSZ6z39SV",
  "key30": "3jBNfejowTAYqW25cFJ4sStWpTotfhJvkY3x8bSGGh437eQueTBHHqZM7JjZ7XYCSgguwLcVGZQcafnKtiGVNtoT",
  "key31": "21KihXeE1PthTzexsPRPMUyYNxzMw19UJsmQwNsnsJ4tnyhF1eiMzpJMNqvZs3omsRWEMSEQDrRZ5neSzEkfL8PU",
  "key32": "2BJMrSUS1yeBTcccNgtmbCz9Fo8L3eEg3ykQip89dE5tLQtBVbpVYkNvuH4crS7fwuAe6nLULmo9j1u1KxYxvfcU",
  "key33": "2Ba8yKCvZG4ssrRS78UeeFX9Sozv7CygC6xjqouSpB7YeFF6NbJH6T3MJQxtTC57FRHMqPPBdkGxMhDr6VBVvTdf",
  "key34": "4SHFnRxJkYH58g3ApW4HSWhWHvsJTSwJvXjTLwCq3TP6M3VnSEQSPeBzSj2jTtpK2Uae7NjLZta6KU1FZqcdDWTt",
  "key35": "5iXzjRtXBKTeyCLjhCTDDDHE5HpqSued6PaLur7eYAXz7EJ1e4tAAvtAHC9gXWKDb3iHsmRWDA8dNPu2dJUCrhLq",
  "key36": "5VCDNqbnrFF8LEaGNAwr3ZLFod4pFrML9ZxMFq2EibpES5GtLjmVorCpK845qPCs181rp7E3RracDrXFRFtmiTLG",
  "key37": "3isWLShtm4TR1gdEwwpyMmQvSHgz1XMT5sEJyRqN2BMThamyYT75A4BVXsTFy4YUFUSkZfvv2BAmXYCH2MWQcoyW",
  "key38": "3kATPSP5wuwjaC5pGPshrp8ZBcUxcQZTrT8j8bg6YuSrtGskJHsYG93yYLSLBY23S32sF9GBNoEDQu96c5nqtWFw",
  "key39": "2YryWL1Z671xxrjwM7RxnFq8GyTWDQVXVeireAMX1LXhexszEdtgot1fzYwKPEUBuQwEt1RyifKFcC6hGGR7e88A",
  "key40": "5HubSy8z3fVrDrj3XhnSKqJJL2FyN63TwEn1mtFLUosewTQn6ZaDCzkEnjKotSMgQMhZxUMg4buQME5SBiZCUdj8",
  "key41": "4vBBqBQkp4cBN6XZ3cbK1fWvtiUfZ3oy3fqan4YPo9f5o7Gc5XGJ3787rHqrS6cHznicTE9KYyoYFf1iVYL2piY5",
  "key42": "38UBSRC6b5f3qj8au6SseK7cK54JGME64JiE77KyH4XXNbsJAR7j28iD4exPGN91oZqfegAJGzAKccGLrVr778nr",
  "key43": "1orUZvkWpXDJ78DGg5gDF3hCRtzeJCcSPSshw8ih1xMF7n93BLZRwrBCBfzcMV4gSJGzApCAv73Cffdt5gF3ikj",
  "key44": "2TS3yYMFNTUnxQbhPt2wiYYKwpo8Mdv5Qpyp9eGT3d4wzfkCcDhe6UePe2sTrXgbqrSDpYMCDnnNvjzrgHCfRz8Z",
  "key45": "rWCGUgvMwabVCudCgC52mPNyWehjFkCwYa1ZVAaRdYrWinvv6BQNumqqtc91UDxoBsvxktWCuB7n8wYXD3dkYBK",
  "key46": "2o8gpqRLjTPXATFe2AEZpJrRC3vQBYpfLsqC8VDA3vKRf1d7SSr3Wtjfu2oFAHyYNiDKLj6A1x1EjnZF5VCaQRGy"
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
