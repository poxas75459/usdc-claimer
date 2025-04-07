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
    "4cJTvAPcBzT3dRbs92rattY3QrJNyjom6KTG864bLiCUcUJ9Ed9gb6NzKW3A9B5kLbHWdw61AWMqqgUKisUJqL6r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d1DZmabHpcXFSjuU2ZWEsSVwcjFkcr8HgrJzZBJ9tGtCbgkFX2Fn3f6a2nmjTjjriipGu91MPo44fJTEQZ6babk",
  "key1": "2yviNZKQtgfb8GxounRBgXXg7zy1ebumMKFWWy75NRAQNcgqeESQhCPUY4XR74tpAsxJSZoDkdvAMQH7YzcXqaeu",
  "key2": "4fACwz12WnVnbgT5YFg698xyG1LuCU3fPDjo7yxEmazTykCaJ5LSKjARm2XrXHhnSvJtDSRJ2a37hoo22RpJJnm",
  "key3": "5ARtatmVYTuyYUEHEZPNcmCWsc9WvBvbazJWSxQ9z4zEFZF6JWepd2K4tuLoByq37Grbq7CctztexnfFtgo7y1Uj",
  "key4": "2oJo8E3zikbgespaffBETDrWzpS6dosSxb26ktSQosT6JuNZH9zZ1hHamQAytDRuUCzed92aCh6Jqcg1m2XQ18LL",
  "key5": "2VvmrsKg3tYFHvAeYzgc7BeNq9xM75SiANX1qZM5DPT3yhMbukqqgceeLJZmGQGsLacXcwLYMTKwivLSRkrPiPUV",
  "key6": "5d4kzaHJT6HqAVh7CwapArTKVBP4r7rqWzTq6g3V1DpvQVZq16uBnmoUoPwy7L9vT8Qn69ApdNwCaPthk6aBJAW7",
  "key7": "3bSxjL9fHS71dQAxJ1p81J6VsRLE1XDKux5xDeaKegyv1fyzipbYyoTss7iGo9Ub3sXNb4gzBHDhkRrMBGd28MNC",
  "key8": "qT4jU2wNTich5d7f8D1F2kmwJpqwghhYFhx652H5iw7TVAc3bgkm4g6TMTq1wYkpCwSjBgEyG61rsvzxX2DH8hs",
  "key9": "Z7KdwbobagCDbCHCVJZEvdtAQfvp6r2VhRhs5Lyg3YRNmMoHnqaXU5wJ6yon8eSMzkcRuHMgc9895usEqHQWD1t",
  "key10": "3FXA8RhJ4xJy9tmXjaWH7kkqdr5pLcGHyHEKv5inB6LbMRbdkSQEK4Cvi5FPPiqdCyTnoCL4pSxYdXMDyD33tqWq",
  "key11": "657NFtWpiBSKrmLw9wTQmyxaMoc8pFJ6kxBkd4QKnb2VEgsANTk1p7YbsZyyq9mwZMrRVpYf1YDcHTpGfccUMnn7",
  "key12": "4hujLv9iq4hobm6yFupoSMUzoDeqKDj8c4BS11Tkp5LbqK4iqMD5An9cexDiBs9nGkUD5cuo7RkeneynFxWQF8Pw",
  "key13": "4jzUmdfxDK1UcCfgwuLuSYy8aXQZy1Yr3Q6DKeQmxZAFuS2huNN5FSMvKwUsvn3ANgXcPURVpBHLLoUzaUERH7m5",
  "key14": "2NnRLNqBWBLvp2pZvWy1HX8r5X6FDeShoXvTk5HNCD6sKJARn8hjECjN58uNLg2X1BxdBQhRpzCckKvdggt7ab9K",
  "key15": "2mpAfAuNmZBcamBaNndDdoimbBxM9CFvBSJqZ4wU4aY1o3LrYrVzk262yFyG9e54X2GbxrD5ud4GDjaSDrsgTAgD",
  "key16": "666rRiRxA5SqvmhUP4Rpk945xsVb1PXfjB4bi4X1ZAr9aq7mJVpNACqGPcYvyfPJf2wRW7arjaz9L8dvSgN7XKtR",
  "key17": "2JgKzT68PaxdQdkVEB3P6AFpnkTQtRUfMJK5kM7F17pAb5jD1fNEMygKkQ1YMFFA8tQAT95ULDtHajXEuMdJgnwH",
  "key18": "aVHNhdQ8aDVBmEmubfE5P7ALF9P2dt6KkDTDigpQUwPBxndmM8HhS362ufSTMX8ix7X5gbHY2gSKrv2RNX8Vikc",
  "key19": "2zYLRTPzPE9piN4mYevGeYJsfCG3gY4GcAii7cqjuQCbczin9KRyBBCdip3cqhT8RR3A3vWBXkggyQaAfSkFaoNP",
  "key20": "2jcsuEkpk1nTQXFi8rEVqXA4mpqU48ZgVNR2DDaMhY936HU7WnDZ1BXcZqaZAtUHrgiogRBu4bknk2qa5RguHVUD",
  "key21": "WrVcBbiuQBbsXrQQ96Psn1pBehgyBhMDup2b4dHWuzHUfruDHZHvoKoBCyu8XQC19v5VdmHZ6CBE44iQJjtQ7XZ",
  "key22": "2vPMfdb3X3hGq4UsZwvruUd9Fz6ykcKEZqXAgoidRzo6CTRgD5rpVUx1S5BVQM3LitfYwGmD8csRJvAKU2svtdQo",
  "key23": "55jo2qwBdaxo6U8zs5b6TFnNVK1RnNDvQ2aHFF4usAgbikegmR1AFYnfWpnAESrVeJFH8mUtrZ2uMAMVFLvUJQnE",
  "key24": "3f7adxExft5NKWPf3SMnsS9czsonmk1bN2S2bRgodprGrDhvxF2Lb1hQ6MHumVjWLHBLEgW5JutvEpoWVtncCqsE",
  "key25": "2sx19FQ53Bd3tq2axX98H1QxcN3KRvcioU4t9gyCuh1yzUj7KnB1aLw7HpZZKY2ytzJbpnHx947EYDj2AVFQUKqo",
  "key26": "3J3oaytzTZiewZ2xWCGq8ibNCHQDojNRXkcn3BqdrYCH6FQY8cd3hxZjc9PnF8xPtkXxzNK3ypHyJMXnDEpN3eid",
  "key27": "4yFUo7ctjeP8jwVVLwNorUj85GexmHqCF6ydZpbBvYaffmeLtjd9o3HRW95EjRWmSxrmW6NR5eNaVyRASMv4TSay",
  "key28": "451cuD4MK2wScwztTTgdg74ULuYx4yKpEvqtQKYC1PHERvd7iKPkBpKAe3C7opJBeGxJGYzQi66rsRAFpxQXzS5Z",
  "key29": "qJvSYeGcZicSkfEJXNSMm3skskMkKMPstUyWaCxvPvChjTqiHAaKrbxwgKpwPfmVyw9t4hnVjQRU4uNgJqDRZuX",
  "key30": "rn4a4mnFFxaok2zeWjuTSC7N4RSapaX8hJYTxoFoCo9tEBzLLMX8gCtdEsUuBBoCuhEM1aM9y2fZ7tE1T9XvGPw",
  "key31": "5LoSJpVmWMdSmnQvXb2aVfASCfrHvjds3yViHYSBdwXAUKoUgzbXgF1JJzpRWvEf7XgH9YBoU9DT3apV7yHH9QDc",
  "key32": "49PoR9NegLFcBdDwba7gaNHKhdqfPxqReLsXxL5dRYbqgqmqwJeqaVgVuu4Wb5R6DgN2syDpH85zfA8YT31gYwZm",
  "key33": "44LSQMQnqzy1kDBQSokmrSsmbVNpezdRiCjkVQBhWyfBtrjCcrqUyAYmTYSmXbw7xATbp2qopWYTthFDy2whu5U1",
  "key34": "3qBA3jWdTW4JDWpnDRZBqgSC1HQMuy2xvhLFmgcGudMrXi5t8uCM9ZK6JHPDc6G6jCcuz5uDzE9CAQpujk273zAf",
  "key35": "4D1EXZgsCh3hzsxArsA78AXp44G1cAdcQAz2hxebpw5qrdugdmzcPFSeoADMdMdyp5m7XfSdX4U3qQthReY2pxu7",
  "key36": "4VgfRvGPnuuP9AA63TFTQawjwbgEHTygUKYXqccuhtteb88TvTeJazfJUBz1sqrjD7zfL1Ve4yyvCKGpmCqmHRvU"
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
