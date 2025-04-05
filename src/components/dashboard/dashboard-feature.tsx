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
    "2CqwZXpUR9xZGKETebw8YkBuB1STQ1BehLcyaFf4KqqRvMB8YtgUdd2ES76g7kqMcUgkVv3oau5inwFxzbbqXymj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FHcSA4oz6y5Jt1dX9aFasUhqsngJGrfVXmPakRg4DoVfRJkzQ6UD3TLNgUmznPPKxY8aAJctFrrKRZWRttB7tQx",
  "key1": "3TQLo35oTkTrYFvCXKLyFCSg5rHrdzfWnv5ZS7XyGTLJXENkScZHxZbSkUtVp4Jqh5hewFUZSm7nkdqA22nWDnyk",
  "key2": "3eaxvtVTFgSomJ1TJgsiPpzoBg6htvboJzeZkKtFYvm9U8yxY68L3Rkfrh8NxfJ9jNy3eyTSRhxtCt6fFhJip3wS",
  "key3": "4NRmFRQag4BNw48Kjkskjgd8qdEnKfbpXfJEPQ1cNU6r898FC6pZNshxRQL9gsRG1phoV7hFvGshE8HrUa6FVNHf",
  "key4": "2TvL4Xr8UyJ2ubXR7PPgQoBhMcdBNuZgzHoqaX2oCKZ6KagbV97KdYFTpbjdeUGWGuusxLWKnwFANTS2kGGjxokh",
  "key5": "3azZ2dj9CQQiV5EyR7rYxAtkQD5MWboc9teSxgp7FxeKaSQPzZnV4EjyRZ4P2rciFiggGvEh9KfYELHVtPyzNWdS",
  "key6": "unUdtiP9cHVGVyyWfzyhtpQRnL5sMLZiLLieFiE6RxwRqqAXWBp4VRBuSsGiyqVMKc1QEf2e5uG7xbPefuSTYGq",
  "key7": "3j5xMMxMRK78FpQbeKztVi9tbg5NMYvLKASkZEzBwsiTQNr345CTNj5i5eeapCHDijwbsQDGpHbKJW3soFGbqaGG",
  "key8": "4W8tD6UWp93tEsmZThHtAhh5kmCWSYTAf69ryxH6NvLivUF2gtSp21w5353RhRYab1stSfWkAQ1BBGEeieV3sSJ",
  "key9": "5Rx4udjXZkeqST18hfj6aqtz4gACntpN2Rxn7dRNY5itfn9K1QofRenNJxFG7aFmDcN5v5k6uPp22mMHiecbJKrJ",
  "key10": "3ZLyGsX4jDtfkkGvzKFqGW7VSFqXFBjcaWaPzs63mxNpPBHHiCaN1AgjDTUwnQTQb4gtw4jz8gpyz5CMS5Dmju9G",
  "key11": "4AeGYzEy4zuJdQnrX725Xdkg35QcjX1zdWA9LQmfqx4LYxEnq9T6NZUaQk5EgzoSFd5zEHKwkSdcQSWeCxvBHXwp",
  "key12": "46SMGhxrt5xoL9o2AkguWEBbHBX2DRTdht8sjyxQYhsHRnSUseSt5qDY1mvwdtz63QZNXC1DFRieRFNAQrfzxu5z",
  "key13": "2ksc8CymZJWZfoo1HVuYLt362Mw7iKquUjeCE91K5AHacKQCYw5ppoovJJeVNB68fukHB8gDPDHCffVXdxSBGUmP",
  "key14": "2cjZcnZZoTgNWzoCADWMTuWQekS3fdn9y5dW9SPcb2ri5ffeY6ox5cegetJjB3wGwCpuUvShtuYgc6T2BsCubQC4",
  "key15": "392FRkHwynAfKE5Nh4BdCKMoNitrSfjoompRAuxpaqRRLgSkxzYnsyVprinqucVV2aDB4SSy5Qt2fXmG2k9VKjqy",
  "key16": "js9VuBcV39HH8e9mVMzQpWu7goJA3FYe98mJZDaGDWbwGJQrexSEdhRyZc4BUNYPmkLPonm9VbWkK3gsERTzYhn",
  "key17": "tonqKV9XJXzmWr45Fs2GLbJbUhFRo3FuUp4pPYZ4Vd5JZ29h2ox3LVwDziPoU9nd9ayVvRsAzQwQC5aFzTkBkLe",
  "key18": "2DxQHwwwcE2okpxWpU4464kX6DMefHoteNrAHp22c6ro5FNDSiDZ1rEiNMGgYu6t1zPsAyGmRY7f7repi8bxDz9i",
  "key19": "2vSxKjZcxbc27nqWVfi2oDFWKmPx1eKAkMAxqykeysTDysUFHk8DVePWDmo8DG1kGfLCoehmwoyZB1DuG1guDduR",
  "key20": "5GBekhxCqV4jTBoPDbecsvVFWZ9qJBvCVc5wp3t2rqzGK85htTTyUTZ6RxRtEG6conYY3UpJ5xgqPMUkqVnF7Aif",
  "key21": "21jkgzMrqWAR7NMQzuzEx5AjeErRwzYzDj3uwHT7WFuJneCAQnpoCbrViDAxA6GPw9h7DRke3j86UD31SMkPEZaj",
  "key22": "26WroSfvUct9cHpDtybRVLf7iwGupVvKHqs5XHH6P8tYp23BsNewowRG8D6YcfAyXdTS9tPBynjY9ACo5xigbw19",
  "key23": "56ZRYZVeVvdh7xPfsR3FGq6Hy2jy8rDzQ4jctGnLy2wG7R5EVpmoMoSXyDFBYF2cdBeZt5cQLqsLNMEs92yKC1BJ",
  "key24": "5uUGDBqwZhuZQTQ8HJmSooZkuHU2ZP4ah66qcibKeKibnp9a2xVf8nrJU4XBpg7srrpjnwU6axpFrE71nnZKkEvm",
  "key25": "5cFNkfTzpJP5GvWPbDib8AfdWaBMHxVDnrjs9i7kb8p3ahGVqCkJ3VeJfmTjndPMiNHU1mhQ61nEDRHbTatAqSdr",
  "key26": "3h9irw5UWLobuwcQUsbCz6bMLFGzn2Qvr9PXCtuNcPBHwhEcUCD6fJQyq59mAbZtPCybYypLjVoSBMAQcWGUFq46",
  "key27": "3jyaviMvgTZ5XCaFLGGs9gL2Kufu3rwu3dg5iVLEVvFGJwEa84QeC7SZHKrXoHcuVpMR8dzK1nWxfTLTmQRttVm6",
  "key28": "3XdbBwzoDy4pZMusBaffNc8NAVMxhgfLCriw9UkH7JicjvKWVGkX8f9gVyVd9z69GX5gSeGFMnVWyfpUcwZtnWx7",
  "key29": "jUzXPCmhzU1jUEDHoELzRvPVUhk8NhDwhpKxHkTyTpcgjcYfQZBcdEPoD8aD5EZbbEa1bE3u5CFWL9qQGanuwuT",
  "key30": "2Ccsn5ZCWpcRjW3MYReJXoKu2AdFWk6rj7HUcgZ6cGCQ1E2mtVdNmxapL4tUww4uXJ81J3m3Bm8maehwvLpU3Rnd",
  "key31": "3aGSap41N3HobDe6euynpQJw7N9wzMkJBAtvmyLegAnU23CQBGEm7Qt5M5zr5STm1D7KPnAqNUKuNkDN4qPqYFaJ",
  "key32": "4BMJqiHuViBrsEUzCeh3S7PpiuK7gH3Tp9MhmFaqHSptLgkaYSsdbebZQsHG5h8E5JYJei5LL2mXK9f2GF2cuiZL"
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
