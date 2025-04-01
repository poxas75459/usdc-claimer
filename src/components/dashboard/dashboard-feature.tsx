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
    "3pUbZgVf4HquQL1jMNop24pufEewBoUwXmoTZdShh2nctCPvjxWZG11zzm3Tpk99JzWbTceavppFK6p7BRMK6kPY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qEszopGNtgWL5QEA6bCuTz4AYpNZkhAFNdUafm3TTz9Pd6dRDu9fQ3su7hMUUq135HMyKKLrNdy2uSmkGk75oXB",
  "key1": "4qpvB7Q8dbXt44o5DhEWT4vJJxmjwwYxCvzvGVs8AQhczJpaL8dCHLkfuXCtZqbbFL7BrNHUuskNYTSfJYDp5BdP",
  "key2": "uWqGWSoYbArBzXcMnYqWCzuyeeowzoK6n7tcFNYzUSog2iFcEunn2yQuAFUteuJJYezoo1sZEWEYtNFuPjpXm9G",
  "key3": "TzvaXi1KRwGgVutce5YCpkfWU8hXj3M8otf3gb3UviohuVWFswYaNi7CsyWJa9GHPKShCZUZAh8wigjYWmib2B9",
  "key4": "4SfzNLVxALJkKnpwFCUuCG6RcaiKEaz6s7zrWXCK8wGBQu2aM81aiHWUMjQ6tvVJPHSJnn2z3Ff2FmBntuCzSP8d",
  "key5": "2m33sKVkEo2s67rc4Bc8RzRgys5KXU6ejYcPZjqBnUYngiz6nJRfuMfGYpdcCQgAK2B6HjkrU2uxTPRu1cgZzXgf",
  "key6": "4GDRh3y6WDSfmvmmL1pSD7gJKf2jf7i4gC4GN1ELkgF4Fa4Ai2uBfbpkVE3mhck6E3yFVeu4BqW27nvY6gBHDsjw",
  "key7": "4KqkC6dktqWFAbPRg1orLFMi7PJj3DpkwRb8WNjmzrNysv7G5AXbPTdMwnstCrr4UfYsG9cdqT4S2AERAhAHSYYM",
  "key8": "4Mc7PMvcCTwmEq9FevwCqCdXmAYn8JN4TwQSQe2qJ7XuMzyGTooBAu2KffnZcQ68ZHoSysR1VnFBE9o49yo48EDj",
  "key9": "3nNfwkNUjfyoJ9WqnhAkTLJT1KyG7Bt3W7UCi4NiNDzbveRZB3YYo6SGzHCSHy7WFDoPywmFMyi1NQ5fLLBwm2xb",
  "key10": "5bsMvjtLgo2XjE24iUbwque1wRYdNEpcrn6tWaBSNMvdSZvUkqtudEh8EdJDWEN8JL8wthaXtoDgDNp5iHpSQB1j",
  "key11": "4veRxPvSziEhUnEkbwujJNydHPjnzLGpHR5AHerGubTSSHkpwGigVT7qff4VWDZGaQWJioPrQ8BXUGwpqhpBana4",
  "key12": "h33jqRNCvW4yzbL377F6LYjFYtPpSkqAibTUQf2baeQnU7W41FULnmuKVVbfX8M11qpjWtx2siYmJCnpw1npzJJ",
  "key13": "2BZa2YMzbpnL7SrPLmHFa5sDjDT1a1A7CqbkudfqGCGJAP6mQQqLCnThHRvmucrgBa2qbw4aLjpgzu1LCgtwqERU",
  "key14": "3hSKeXXtFuUqmjKY6zqgtP5F88wcTwuxGnvMtWgiCroczavK4Ja3xTrL893VmpCdzcNpDhizHDUU3demGdTdoVCt",
  "key15": "5UnC8Wmswf56LajgwNMgtRU7JUscEqnbpvZbmQYfcZt84ho54VyARQd6HGGUJuvHjsZXEXWELWBgSxYUQ1ApLTWH",
  "key16": "4noruY13S5sDbR6xTdsEXBbGq578VpB3nXRoNYGTQWmU6SnaQYf6EsUSU57wxkvGVRoLTd7pe5hntdm5aj4sAU9U",
  "key17": "hN3XHfqgrr9HCT4o62p2fyShtUFNvPNMppDXMr3GVM2ZC2ftsfvUiohpRCfdiF86UpL4mcF9u6pZ6jnrB5oLeUx",
  "key18": "3ZogkrCi69Q4HM82AGk9sUQBinEreYtHozEAMXRP4ob3x9G1QLCceWws1yvafcqd11Kcrny2MNnBL5PXaF6XW2n2",
  "key19": "4m7NTNXCxpukjJEXaBdngYNFBfZcVZatfUFra8sqgXrLyiSEeyEePKR4WJFJk7KM5LNynP38bWV9zSiX72JobnEt",
  "key20": "54dFnL3bYE1mRK2BHP3CY1EBH4H8aPfovLgKBaMUAnpC4nsYoF8g5Knd94wJc7G5HzLMQHmwbU9yxMng9tnYTwQQ",
  "key21": "3KxnmGvy8wwZim6gGFEa4byGFeCDNmmDFuE6ooZEj2qafgnAPFc1PApsenpHcPYV7Wm4nWWTPn2TedMEADm9B86n",
  "key22": "3gWAWBKthfWxrR7Jk3fvzebZDX8GQnXGCqcxJJazsqR93XZkG7F79abSatQHtMvs5Gf9t9wy5wy9qLbHkZeR2wJT",
  "key23": "3ytu82qHjaRXu94oJREeT5ohVYnKD5Xgv6zmmY2VfBbvdPUPzA3JLrK1xFuJV4aJhABXfHkZwMicqbvjUir9SyTQ",
  "key24": "4TqeREuu8uKBxjAe7HR4kqWmWy5r54ZuFpUeEd4usJnopSa5xNShMWwLrkjn3pHkR7XrmChfVgP9Sr9qRxBTQMQ5",
  "key25": "3jY3B95NxwZkFoysEhg8eL3dcHuMn4rACVFQadiNHrvo6Z7FTzBHJ3U782XfU18CyjTgywQxYzwwtC4iEddoq67U",
  "key26": "GEJ6j82uVEPmwxLf3eTxajBN37oqaziQioDcedFAfyDqwZ25T98XDAMt4BErVj9wrNm5NMShKNE2VYGLEfvo3pf",
  "key27": "3SWNHFy2qGQWAnRZjfea747zqoJ6bNV1Eotn416VwXvPuLqY4CXsV9qbxyDyJnEWu7ehkQGbBHRQLGtbX6U94PbU",
  "key28": "mKgMUneKHmNzyabA8J8s4NzLbyCJBEzUwg9b23uNvFf3cfPFA8JyWPzWerfYXiCnDqN6vuaNdvXigh7fk1czcXb",
  "key29": "4az7AQKTb2hB4cTRD5vFicvbmeWeWvGVSrRxeVPid8bU5bzVznD5WEYiJRDi5coUqnYo46f1JsotsQRxL3q4qmxj",
  "key30": "4EcexpuShCxStoDTGPZY2CBu4BSkRAyEWuvvvQkUVuypFn7C5b5qndKv1qL8sLJDAU54uwDU9DqcWguXV6W9VUEN",
  "key31": "32a9V4oS36oRDJBrGAChyCXDARni1bSMsRWeoF17fjvLGw4asHDxeg5H2iZe51knUB3rbsSWYzpDmDjXcvb5udhu",
  "key32": "2mWDM4aQozZgD99UGzKZJCq4EF1FoDJnmmSYsiM5MhjLkDsXV6jpBvAUbMsrW1DL282f6sTJr1BvaL1iUbRWdFCL",
  "key33": "3Ge3nPaTkpDad3fyBWpYFmCZnz4FFTZWLwyUW9TDfgU2GHUFWpTLmczMzdz9PuswSwJuRvhBukGMkADPwTRyjCHP",
  "key34": "3Wt1LEBTimshn2MMzRhPRnJuMRCv5oneFeBiK6eLPFWgo7muzohqdPSBqyrhSNbwY3kUGZtLAUJBNRLGHHKfMzqg",
  "key35": "5ZsHatWBYh42RTEZPQZwUhF5kX7rrSb2YcoRRatSnHisNGJzsASPJFoF1rTHJfXik6c1vzo3P7H5XSv3WygtcByx",
  "key36": "qzWTezRJJBaaEp4J6DKxUqudLzWkNBMNNUtn2UCbfsZLYxJUEF84oG4K3LPwYdduX4kCDJpW72HWcPM8RmCP8n3"
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
