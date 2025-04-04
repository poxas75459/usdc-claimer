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
    "5MMJfaej7GNBxgCwew2MYym2aBeNd7ZrEhN9YkG4ns5ofp47JxY4PuiuzWBMAecHGnvbDHUnim9VPiHDopsRgbfG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rtTQTb15HBaBgG4rot9Rh4dEJ5rd3sXtMFDXZvTjE5LBJRrffCPNoFjF8PXpCj33VhSmrx2cwLwPr6vUNJXzhSA",
  "key1": "2nXUjMtPZ7wk5ZnT1Zgg9A87yc1Uki18nfAV4BSodDUMe9o8VjmooeD7zxiyLuVVBe9Kd8YvmaDgDjvZqGZSUr29",
  "key2": "2fkMYPMqLwzyYWw3qD6Xpqmu69XHDW4y4tSvpr3nCN4RUuCqpgkQZ9QQUSrYKPs1xzuoXGFubtL8wCLmM3hgx97w",
  "key3": "4s5Ubzt11mGmsM9DbXvDTPYYra8nyLJk17YGjwzVoSVqH1iatrWaaj3LLQNHzpRtYzepdLnerCDTiGps3LjanZnV",
  "key4": "2qdxtfxewN4LRscP1tQB5DcrBeo2QsSdMYLGM7B6EVinVvHBLtgyXQfGCqNr9jGxtprhwk6r9QGF9guCNDYzFQJD",
  "key5": "R8PWzpjsJdV35XiCQ4QPkTxHjFuvfQtgByU18AMqMDTX7eBBBn4VnHAHdfJx1XgZVpQhSs4kyLt1CZe2D83g85E",
  "key6": "2nfwLKvtpaTRcFqegAyUbV6bcmqa34ved7PNYqWurr4jfeYxE1hLYbi8WFf2tBxvYWSgHea9gwq6wUH2VmKVRVuR",
  "key7": "4NmSxmh2R3sh2HtJH2dhbHQkveycjdNa5WapeZAmM7ZLn7ouFJTKJ14LHFgpb2AV3Xy5AbeRSVGUQLZEK5wkNaWb",
  "key8": "3aoE8Ziqr9aswmqAjmUte9vJFgpWUF9tvGsgARVLoaJTyG6V41LP9GezwRb3c4XXDq2DCrfWQwJFyRmSvyNR3WNo",
  "key9": "4smq4ZTQx8ZVLciYi8Hs692cdTHy4Jjgj5v8eujsGxRCpnWG4j5wzM5Ns6ux2fzC9euYwyzNeGkMr8DaUDdvkPYh",
  "key10": "5mEhFFXoSUHUF7QWosqDPuuj4NjDriHyNPGquEU8DFsCpDBEpfA4vUW8bKCdkGWY6XDdXuLYZm6LCWSyxcSdc6mc",
  "key11": "3L2gNu1e872YqpEyeY9cyUBWQ8FyDnSC3wYeyzjsKYPLtzsCeEgyFqXJ2J9ZYkYDJyutVxC5AyMBhKhQCJM4xkG3",
  "key12": "4iXGgCamDTwajik6EPS2TuQa6YowmC5yVJX8DYSgDEod8MAxRR8xkT64AvJCUzGNCk6PFizdHLFNjo3rYCmVsBB2",
  "key13": "4UgbF6Uu16CyYj7qarajHmih1wfTp2KWWYeCTqEBmP9CURHtmPfadAA8hkRSNkYVnoed8YQyfPP4Xueg8KeAU1Vv",
  "key14": "4eqKnFT4mjaUdTHND7VjNyXgcca1rGeSerEGLKNp6f7MTf9VSGetHhQhhnGLgWM9usFaCmPFxTH7LUGr3Cqht7Qy",
  "key15": "66XHA4Mat3MGvpyHbbmdXjnRf5QbS1bfH9vaEJSu8nD5rxrDka69aiYfQ9ATctQNhoCAAJA1zGRDSCXVyYXADpFz",
  "key16": "5sowtsSCxV6PgJWgZWYFnpMd8QvFfbhyuHbNQYYm8XuRPm6A8CynSjxAvQxa7Mb5VFPbD5XfcpVrLsXnoNFShwDu",
  "key17": "5Lb1ZiwbzKStf6suL8PMhUizevKqPmqwmZryFL8JoZ7SwtL4PHhD84SnAbgbvEVyDni2Pce75tffHKUUABqJhgQa",
  "key18": "2sp8t4TpDhJDJRGN4UzPsY7GDjDpt1B7zxeV3zdYoUtpkNxzzhqYUjHhvWiRdhAC7vvnZeH7yciyfCiogScV5vbq",
  "key19": "2hMGcX1wQcTt1ANrezhfa2AhWm1CKs9nVwHGPFt6JwGgZTXWgC9DyJBJJs4cc76RyxQdhkFAdSrVGzjvhA78Lh81",
  "key20": "Phb3e8V68mfGMauUs45XnoqxBVo1PTsP9AWUo3xvrLLVvZj22U7LtooDTysYF1iWeWkU7L8Uo1pdvWzkCBfpx4T",
  "key21": "2rYWpaJhzwDjSJrLKfWozzjYciVLNrRrBVNq5GJFMeusyR1LvkwMi3fHPJrqRqn1268rctqpzY3jjtNmPMdVhPTh",
  "key22": "M4QnaxDXPfzqRnEAfcrYr7jUzi6MUE33PUnxcx7DsMGjat1pnnQbKnrVFEpd68S4tYucWihRQFoTZHf7HM9PzLv",
  "key23": "m73HS65mNaZEZN4d831HxB8JQcQTPfsGyYYE8WokScTdp6PKrqSYfzATjA7JFruofnGjohCnmJAYeEysBLTtoiP",
  "key24": "4bcqsgQXLB6XqFSv3tp3nrwyVsWoKvBkznrnoDXUSCcG3eKRFrXDX2zgEKLjLXRm7tdViQCDtpHT31FP64a3BrU",
  "key25": "26UWLQKpKwdhF7gcEwn5Rfk4gCiPsYye7BMU9DfrBDj7KMPzNtYukbmGCyn5RsJWijcnPcGbbZvaAKhcyBtFgPnS",
  "key26": "2pAgcFBGG7hb6kko1q9rNrBAiFcaiQUUhhYNw81KyXTE7LhjxD2u7RSX6Q1hGjKwKCQwkv6ZtgVfV6Tx19g6funU",
  "key27": "2wpgj8hdvvSabQuynsbKHxcTLoxQ9114VNoYaQAhYvQ31Fabk12xEDUBGLHQLMpcyKK8yDPatqg8XrxxPkWxsqC5",
  "key28": "4vh191WmGMBjzJtcY1GZjtvFPRYHSD8aQM1PEg3ntTwaPTvfAD1UhXu85ti71NYqbNXbWrVzjwizxtDxEEWqZR6W",
  "key29": "YiyPyDDha4J72JzuyrEa17aPWTqAzCQW4x4qy8ityodhh3YFKVjDJgVWLqy6TBbW5fsJY5mWunwpQck9FMqgmWu",
  "key30": "3BJdhuofpqcqRnZNbFB9Gij6FyTkdCyyusrPNGqJmdb2tWzSaS22sQmSE4SZumRFFkX2vNk8W9KHhH19BKEdWwCE",
  "key31": "5rHRGpChjQy9Bo4uMZkVrHNpnhtRg4kDvWdickZXTNR5PFSZkJWmQVF9oQ1NuFbC4ud3TxHua1Qoo3GdJ1WbPbPY",
  "key32": "NMwRGLKmJMTX5U7Rcn8uPdMAUR6YQm2qrQd6wsLCVEKLQpHwmPiC3KuNEqrJDZvnVyjgJG874oBLGWrCFzSXW9k",
  "key33": "2vsguqMmNc8re1zqsVTbHTkmqQz1AyNEF8rhYkjpUj58f8aM3nwLwWNiNtuj5qeXrWVEJGk3v3GEh38a3WELGjqC",
  "key34": "67JUUHjGp3ERVBEcboVS6eZZGjWGvDsVURjKfUZUuWK8rUZasgxvM3vfSdinAwSM3ioFv2ckvyvPeB9h8exhFgU8",
  "key35": "5HtDvWKB2YgdERxz6hfK1Lhn2pdRQrk6v4ZmaAbDfoExZiRMfCUAjWmY5jgMssmQ2GRfuDQXDnD3eRNLgsjJbLZu",
  "key36": "2343EYmHvinDTARgKpkYB2YNRtXfA8v6t8TDpcZpVFWvrTGEPB2d1WeWEeSfj2VCHr2TH26XUXqrZA1yQUdKKXTy",
  "key37": "61tL7SDUPv2cmMDohJaXcw2czLJkLfKfwEfXTysbCCG347CBEHebyRYaUXJGZmhgpnquMXRPS1HgQ5MXAwWYq6mr",
  "key38": "4KRgPzemtenKVQuq4y2odQz8xrfkbR6p4z6fvwTjgdvzb15Qrqogpx6kU3TXdxTv1n9kfyCfsv4ujuTBUDsjUjE5",
  "key39": "upLCS1AJLo2QpGzY4fTuoNPsN25FXu1dkVVB2PEkdSKZGddsKjN25aWqj4bYf6VhVJJbp8UQif6tqFPanPEW9qb"
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
