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
    "3dbUHVYLncRnmgM6J8vwKZm1V8rTGJoLLXj68WcmxKvozfqNj2D29QohbBWoxc9ANpgJmDoRXy2x8N6WieFXjmZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jS1kLxhVrVc17h2wm9HbjZbRk5whiUbg1mRcsNqsmozHkckia5GLunMzGhA8rECarfKBrKuBHAzJiYwh21Z8Wog",
  "key1": "5DFZNo58g4dRXnEoUGRzHADinngj4fKus4wVF9tYWTA2jwm5GyBtYk1Z743EsCkJfuXZJ17AaDKjj7cyBkvZQEsE",
  "key2": "2TE7DXs8umTGbQ5RgAyppeUTnpRpvoa8QuKf9AfPPJrNTCWVtsTs8uHokFFWsKG9WN5kR5euND7eGpdQi3FawsMi",
  "key3": "5sYUgt1FzEF8q4rXGdtMxK1e4sEQ7bRS4e4M2Wc9Xbcbq4e5xNAnmjY2eaeGoRzTis1UT7JnsC4X7AJHfiBxppLw",
  "key4": "4JRAdFRryknL33EKThDyjzXPbsEvfZodbJCyfqHmUeyLXpcSKB5VMxK7MvuMXqDMg3VbWqn1oeTiZxRNnXhQet7r",
  "key5": "3wxMGu6kWbTf2LhURRGnjjekLtKrGZr9ZznS9wjeTCfAsGTd3h6FfqEUP9VYUsbywmwFw4dZHFHG7ubjXptrVmnj",
  "key6": "2HVuoQnN33pjbKRjChxX79XiJ2USTFXQqQC2qAPYFGKQuR1jG4T9n2HwavDcL7WqbcS9DrK4CtvbNiSoCqphggJq",
  "key7": "2dcDR4zUBf5zwJHgiVdsAzQLfGSBaLo7y9hwZkhum1uxQ34dHLrNyUuvdzScHChDGpp5SW88Mtrm72nJ43hnPLCP",
  "key8": "2j1eBHNdVzRSiuZt1qJVALFqwVmPMMTDAEtN9SJj5Y8iBJsLv7wnJ3ZXim93PvWwyQfkRbgwg6tfmZ3QbMFACJHP",
  "key9": "2Bxq1YsL36eT1GL9sz44Ag8sNTWFKeZZ1EG4NwyGNT6DM3Viy3asHvJXBWxvixUerByE5mLKPqNzFLj4eUaaF6tA",
  "key10": "4W3ZbUdzGs4tmgqzgHYL3Ugu9zgKKk8Fwhm5XedJ9pXAuxxzVFVKCSwUWhvnnv4hNVDFucye8XvNSUjegQmKuKaN",
  "key11": "5tpPc3VphaC79a6beFLTjs1FVTaBz9am4yLR7X3L4VvoRVL9SoLdr4MUAV3MXTQ8LDxGzoF5pfrRqgg3vNcp1yuj",
  "key12": "2zkYCTwLtcech1KmqH2AYCv1oahMdubhgUHVQdGJVDSgRairaj6QYT33GQx7gw8ym2Srh8suvyEymMPeNj1rX4AW",
  "key13": "22acApk414qNfQTC1o6GmtHeq2j2F3BnsV1sbUHHHtaeUcHUHCtT7WGLPmWkMdCF3SnTDg5LtfdpM8tLaqq1gevv",
  "key14": "2sGMY1b2ALguAzQp6Rk8B97YUXggUAWgs6TbRZx17akQbZkzheWeycxj3Qjy1wmfPqNTZUJw8xKyniFQ46ZNCHvM",
  "key15": "2UccEu8TfnVFTE5wPjPKHUGTgeU8EAkE7tQJh1URVECauTHnvX8LbBQnH1L1cFhr1gCFuosRbhKeDwLJRJWkATA8",
  "key16": "224x9brNqVNwqVCRjUE3izhSwmNGF4TnqaoZGC1ah18zFNPEWsjwsjrEXasopYgZh7XEdpLxaxVuUJkT1cfD6nKK",
  "key17": "5JuCf7VHcLMDXmLYLxE15mCNy3JLrCWWp7ABowFcjdhZHwJwHTud64xHqfxvc62UpqVQmHtBfdhHrFKmVCvCTtv",
  "key18": "3ABw8Fc4proFstu53PcBtDqPxGjuKukppBMjkt4tb219sR5gnK2CAq6Bm4nX2oxTq4rcWTpWESuCKQQoBvSoc1xa",
  "key19": "4qZadYfPQeepArxbXUw1MuD358X2FZvTXpNk4cfHwPJnMDuuDfthZUvJMspn35NTYbLMKtq2W7T1btgNVcrChNw",
  "key20": "4k918VzBZW9qbaXMPH3Mv9AkPs4HDMBiekPK538PHGpaVXyDarFFtmhz9KioFK8SAT42wgqFckr8AsSKd5UZj8d7",
  "key21": "3r2yKFAc3FpCju4Xt4yfx5TUcFDMzm1rtCEJ8ENgqbLpKgd5PfsUh3NP7ZbNtQdDyZekz2bf8ihMjYgY1NvbD5ZG",
  "key22": "5pxvB8GUG9tLwmjX9WdvQVx4VHXtQLb2zKrq1WpgbMAdq4gqafsQd9rLVPV5sjMg2EoTZVsvA6uRTSEQzkjZt6jw",
  "key23": "37APXkoJFPXGiuf7DVYJbEUmqz4KeEeDd9o3dTq15zLqofep6VP9hu7YWwXk2s78RYAGLWU47azbdxDKuUjc5W9h",
  "key24": "3PeHemY4EWV94bzAp152LUfgTQYaqHEBAfWmBHTkws4x2intenYxi3sN7hcG6zHJirjqxRBBddrcpsKPcBAoDFiN",
  "key25": "ffexh3zxLtQiq2N9ZacmtSpRhkp5kwvHKAKUVJj9oiBHsBNkSdeSbgavGnbjBkNMptLamZLc4rSN88iZmi8zvs1",
  "key26": "5Qt8NXAk9HeVuDWxea2NkW2nnH6w4BadGduhWbBXK21iMdEqLc3PnJfFswRFMxzqJxhU2wefgapk61K4QZTVpjsG",
  "key27": "2yQjsKdA7qT617WDUbd4d2ZcwHMHEq6fmJVtcFN36X6KmiTZ8dyApkS9HAP3wE5ougnBsbKnMkwi81GGzSR87LRa",
  "key28": "5faxTHFJ4L6h7jdjjv55jti94wGovDUiu4Bfj1MBjsntSkZQcqiFnZcoLMXsXQNuD2f1eWXB8wNWZW4XjnDF5dA7",
  "key29": "h2EgXnmPe6yUnHnq558rjJA1J1g39pnn1oJeJaH8NG8DpVPH26S2YJDUsRz7J8xVAUhkkGXCg3Wv4EjqY378R8F",
  "key30": "VYD4EYiC6gaQHuRQDjaT84aXkjDL64VCQ98ikfuQeo4fcZDkUwHvfCQhPpoDYXEj2uzZsKbuWznZzWYR1m64JP5",
  "key31": "2r1bpeJP153DrJi5rASDCXdcgQN8QJVmwjvcTc591z99mb5UW4GnZGMMQp5DJW2y7vn2TKxpEC5bq56VUhshuAEi",
  "key32": "5LrfpHYBRW6qwoQvXVmSRNNbUSagLMt7Nxt8WHsi7sYjvR6AfMq9GGsp6dRAxrKC3egiaaA821jNgwi3gJ3BG3Yi",
  "key33": "2QoY6w78QmDWe2Vj27coLVzmy5mYgBQMEc8yvJzYw4hmWRw3Fn2uDBX5KTxGVjr7YTuEXcXgQFc6UtHKV8SPCJoC",
  "key34": "35A3BvzdHQjHyG7Ua6s5Ff9dKYqSbZyW1vbUfaJwuXFcdB3xyFRosTNmUNusfWr8ztq2xY3HVzWWkW3ipUb5Ar4N",
  "key35": "5LSKm4wxV74wMYkCqP2V47WzysJpB9HUagMAGwYbdMP5nRAp8P4iZHzZfrPTgPi1BxBmXPzBY1KGoU9qSfEDLSFV",
  "key36": "Yeadb1mjP5RfvqCqjDY7yFj7KqY2JzZMAoDGvnbz8jUT1AR59ghYpjvEL9JfesbcREqGbbPQn6eGKJN7ZncQrDR",
  "key37": "5E8vwB67H68JQouvWdWcV8bqKkTL1bVTzE1mJhcqWRTt6vVSfHPAqnVLhaoqAFiVidZ5FixvFYSo4EvzG4LKdnuP",
  "key38": "49FMbk698ZSPM1jCt79uQ2763z9F4eQeyg4ukp1xNf2t7kVJQrt618EHKcPgQbXExyacAwHmL2jnLTb77DA8M1uQ",
  "key39": "4fypkkzJnX5TooBRZHLJjmXFdhKrsXrg61imaCTNngWKeA2XJ5SAnLixjnckWsisr1GD25JZCLWtEBRDyEqzNL5J",
  "key40": "3GNRDvhmCTR6WEocwmTpfUcmxSC2Z8YTinPXw11Uck8NTu2SFFxVgy81ssmxMH3g21k7XLKY9Y5a1x3cQKWAeC4M",
  "key41": "2DKkdr4acw7mvMW1pEmhPFc96xSDJA7Sdyb6EyTabdbCs7stvV6ZAemLeqgejx4v4n3GjrErqARQe8dxPyat6DeK",
  "key42": "58jxDCMHZQ9Uk6NMFdDqo5RnzF8Yq6PS4BrVKuZ6dgoc645AVdx6jJ1dN9rF3hAHu5bheidyyGsydmFz642HunMU"
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
