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
    "5hn2X1FtWsd8cM94yqGd18TuJhwsU3SiqGtEyqVkUjh2qDQZba3wc96mzY9DQ8288n83jszddHFpXNRPtZoB2JK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FkSje56J4qCK8TJ4edwUCcNVhXW9MRno3T7iV73FnigHa7EdqXpkeDyyVJgCfXK52kARfU3YsMdJkuVjgYybdVu",
  "key1": "47F8afW3qAER79n4gaFErDdsdZJVaJwSdXD6skfsbqbiBj6VEEAa8w9HeMWWjCFCfrckzv6Ka6ZRge8JPvVG64W5",
  "key2": "5tvaYvDcW1wbvrkkrnxq61beKP9TS8vV2LZxZEbUZPk926ggehEeGnqDeN2CKuLjWUiY9dKzzuzAnEj3MrrQ77CD",
  "key3": "5HuQk1KY9MqReRqSmaosqnNYPkGdx3uJGygpwiwQHY8xcDSVBh5WcTF6TRNraQ9TWxnSrUvkrsKWepDAY9oQFCd5",
  "key4": "NNuT33yK2LBXYDV44SXFzWRSXnK4u7MnyJRwtAGtE9BVhwE9nqRXMyUv8HJR1iKwaaowhYCbDkTLQVGjXHpFwHj",
  "key5": "3sst4ZCvMBWuyZymRNJHWsTMDRBp5MGSyL8JzKUJmaekreGJytMwqtAESReRhkJaNotkGygintLeDv4iy5traDZG",
  "key6": "4CxZwq3KaWTC7HHzorHN7S2ZeyRWbJCfq9QovwzUbUSsMpQmnGkN4HuEGqmXakaHL9EQy6Mv1zQrsEU9XKbVm4Z9",
  "key7": "UvR7o4SEJsoK8iuVYzgzh2hRdzB6TsCHes35U4rP8TqhVQwMAmykAeS7zvt8auAmDPZZADjPtaiPrixuyxfNEQo",
  "key8": "2exu95EnZ5GC5t3ahBPBkaZrU9cPTKHAZBgHXGKYASoPCAWM7jbtCA9RbNnTa3i5CLRvmHEKNhVHDhJTCVT6cPmJ",
  "key9": "5ohiYHtJJPn3GDBzK5EWyyPEgkgPzSnj5VsQku5wzb28ZjBkjGRp53ahp1MEfUjz742QNJCgv3o4jfj1ie3P5g13",
  "key10": "LLN5gEAUUmRL4mLQBdc9TynoHQ2AY663khQa8kh1vW5S6BUPdTydxXFDqVmF3fwbYi5i3pg64y7xTqzJE7GjMhS",
  "key11": "5hoFhF1KPCbdkTwCZNSzXxQxCRZtrknp1Y4Y1biqYJVsLK1wsxpeafqXktquSS53MyR8gW7sUE3cWxBop4pzWjLj",
  "key12": "5V7YV3fmjGKpmFKFXbL1j5rvysXEbd76xn6hC65NkmMXX4deZmV9cnuX2gNATkr4zqCNvdgwEnNHe3D693dsCizU",
  "key13": "C7DYqWUGXoNFzZ6nRooxGYzaDZPqy4hpx9v9Ca9KTkYCyxQKRn1ohvppTruT3Rn9cVW4eTiUndXgcHFCLQJxh2q",
  "key14": "4ycVfApAE6NfZ7USZSQzzyhgkHLDfATSgyNwp6sVpePow5i1RKWrEKFaFpuWVqWzwLDoaCxpHiRbcjKex9mgdsUT",
  "key15": "5UgA2Ls2DRrw3edQuCivseoLDatn9LNCJubBuFgBQcS3XPyDez3xYa5CE5o3BAye4PNsWNML9eXkVdSwKapo6PmV",
  "key16": "5LeiwPAXpESxVXbbQLmkUj5JeCxrbu8Lc4HfMbVaRTaLKo89SfGfGZNdEyhDHGuPrQcNQMp1KqbcPVDUZiXh8npG",
  "key17": "3iQ9kWrT4dcoNg2p4sgpTBRPJ2KAjr3pnjimD1tvXnrUJBruf4PzHeVRhALVVeRVvNUTFcFpW6neyCPqn2hCKdT7",
  "key18": "3ptoau47neRUeGyUqqxAPP9yEhGuHmMKtkVNZSugffrMXoFdK7ZXw8yA1o5Hg43zpUX4s4fjCuWVSFtvaU6Z1b1x",
  "key19": "4cu2Ep6JKmT2C2RXjptTRGhqw9LXzGbkJE9qV3jpuPbMJtvitSDSadZaiZJ8wSAQbcFTgAhMEbYGmwziTY5sKDpL",
  "key20": "u4Qz7sJ91s36aSGRg5tmE2eCnqcYdDJAYzNuthiux9q2Nhzxq9bcJiaqiNAmUaLPKVty6vd8uskhkV6Jbodjhyk",
  "key21": "4nMWj6cWeU7wND6jHTpD1y8jEeKf8Jkh6xuQaBbLxjRGodhWdXEAxyvSDrVHcweJQDMZrj6FfNz153kCQaED9kVq",
  "key22": "5hHabqVgfgBrZuwo2nRr2sgUdM2hMXyAoHSdJVKr1WwZZtozYc3eYrirdPJyEhicUXe9nKZbJ1MQLBgbfavNu77z",
  "key23": "3qR3iusASPtb4X62cBE8Gohb3vMMcs7Avd3vay6g6V6t6UqSccp881yK32WNGgPFKockxzQK4kPFUQnAGnpJqn2s",
  "key24": "3vN2QAAzZneb9ZZzHbcwSxd3td5sZCpN74No3XHi4vSHS5HGHq1kfxdng3SfptduWXapws6vs8KZZFfVb9QBiDoF",
  "key25": "5R47KZ6Wmwy9P6E1vW7eCvQuwcy7BVmDqwmz8sJociGRo7Qk8wNHPFLXytySxBshwJYdZv1seM64TpJg95zvavsG",
  "key26": "4RmvAXot6QbfbdhmjHxbCzY9qSWUsfHbVeswdAgrNjFMbASYKvpcw45rcYCorosPA26Ya5jax5pKuEiTrae8JkL5",
  "key27": "425qwWgLkPpGNRefyQxoD2rTeRX3t4rNfai8gvgZq5dP6YFLHziksFGaZEBFGxgfr95cGytNQZUir7rcKAQzFZy9",
  "key28": "4jCL8LsVPCxHDeZPrRFnuEAvZmrR2mDskoBGDnjfRCFXmejDesEs6GXy8pxuGrSLLZCaAeAjS9kYBx69EcksBoTi",
  "key29": "5bNyGxYnnYysx4Umqm8vLwh72xjsJRmFRSR9vmxsKABTaXXK64atztwnGdFWCcKTqgDpHCZuqs4jp4v9YvwigSpL",
  "key30": "Xr63Q9iXEk55y4ZxCXU6Htsddeh6VSWLUrrxY1xudfWcd9pKYWsQmhCyV6scDtrDa8D1TqVRhHiWZXtMoNF1YbS",
  "key31": "94wRaVecC1M7TvHeAGA8hCp4NwXsfxgTuZ23hYEep47jeGTwBxf8sTUkJ3M3ZFzk9SKvFnA9ee3YEF6g8NdWVx4",
  "key32": "ULY9bKoYo8e9DF8ndcy2SzrEVudEWoPpCb8ZChB8y98cgJtnz2vh8HK5KJJbBnhkgd8biqD2cZGXnVRBpzE6rQ8",
  "key33": "5xvEwswny8h6KyRcd3aCj1dN3AD1v682pZuDRzbiPZYa4mkrZagtGCB6mStcbKcTdXYmtvywcNscusdbEkEzT2mU",
  "key34": "4AbrGPrSQoRjnwFarthPCmRs1jQGq9kzUDotLxS3VP9Dkm8uce29wWi7tYdTyqVnxAHLnhjpL6NBotgSwF4JrDfF",
  "key35": "2BymjqNkth82M3rATPSWSH4AeHN19U965xRxrsDMsGmzekrmxYsgZQt7NtYeTL4m4yHi6cvf5W7SkJCdZaDh8K5L",
  "key36": "2iEWUjn48BfgfDnMx4TPqzo3sUowsMZHvegrFWDoHCinET7B7PPXA34B87C2LTEX3zd7Aj16PdzKaxY7SxQfVpLZ",
  "key37": "21wozMuz4fne5vCUXS8tj2yAbhnDapdnVdqpRcH6NXSXQDgjfvuUGJcYxbWsP4szsK2AdL6RnBTVA3M5Q4VNDKGm",
  "key38": "5pdwdF87Ze3BCKturtcGhyu4gjAq2ezYwPPMFPC6SYDS4bgE9inkJPDyCnV4opDUcokd8RoJtCtokRsDt7cPiNo8",
  "key39": "U7ypHvS2idHUF9gXVJkGrCr5k2To6VcrLVJdgHmnYEEQGssp4XvjX4VR2KzbuKoro49DEfSagKf7Xh1HHpp75iQ",
  "key40": "CWgpLX63bgwbnGGdR9k1jFyhwiMmpCUgREpnm2D41hiuHYaopxkUfQGGF2n4GXzVcAp3ujzxtAJu2gBMxKAX9Gb",
  "key41": "36pnVebjYSSNxvd3ujFqjUvbQM9Xye91GK8Ub5UPebpm7ZYBfKcWN8W3AsohQM1aX8rQQUW3NtjVk4DqSpvZJrCZ",
  "key42": "3MuWJhP69iXthCf8EsYjGXf4mnijkRni7QNTSfi7QeH8eRmvpqHUi4LeBjT56vm5UGjrjZpzgpHq4zF2FJZnzkM8",
  "key43": "5U84Gg1DeVPL8K666Z1MDrnPBwV5iSZSb5cGirtZdJrNGRhw5zmNaDvzfs4e6cWFfB4cMm4wbSsPJyV2YMMPKmzV",
  "key44": "3YGtSVPEZfNkJgJZkyCH8uhQ5gefzyeNdXrZwmNLwtq7L2paMCtmZS2js2zWPYx7kvg1JaFf32Yw1cKPSRVxiYmj",
  "key45": "2DihH9EtZzmJvyuJnFR6NkQNrgM9FxPME1C5cPjoXn9nP12Uey8CKoWdvTyBm9yqhWmZsXrkccMFJ2tS94Hh5EYG",
  "key46": "3jLCyForaN4YDdYdn2fJQCdajDEEvVFKHhFfzHo9RTafSdx3vUDWz4aeNG6fnqtHLUrRBBuxjQVHcc4UQEi8CRYs",
  "key47": "58djuM4ddjqjDSGJ7VSPEWTS9ARukbL6zQsuLB8kCfxwp2rJEmCauSsobytCfM3t263TnRTy4MCfej9psudAYoKt",
  "key48": "Myod1KrgjSM9MVFvQthmo7qoBMSzYGrBrRGN3MdeXVJ1mXZW8sirKhzZCWq5ZEeZEE1QnFH8oArYk4VasovgJm1",
  "key49": "2q1tm1Vjh5KYTXc24r6HXLoUEam8b1tJa6paiF66jL5P3T9VoNBpR64gt6fSZGNcQ9BTBWojxyTE3eqtRTesoSU8"
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
