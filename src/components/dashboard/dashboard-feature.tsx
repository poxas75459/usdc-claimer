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
    "2wPbjDqMoWfGgzVAHvup1zUkPnzUezERDuQAwWDmA2gJCyMt3AdBXmGUAYXuBvzNLghstGWfcRNdNoXP8bv3ALTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "caeZRxTZRPivsUdebuvDbW7ezcfak9DH3JGXYigEtkphEfJ1rBAwceX6eR1nxYo5KvUGiGC64eGSv11baEmr1ai",
  "key1": "62RtsuJFZoNCshCsXsRMUEA7wNqvtybMQGW2VLvcvRiJ4Uvm7qwXTQ61nugAFLXJPFSzpMfvXyb1aMJyfgFouw8g",
  "key2": "2V6eoKv65i5fKce64GqShZn3oRfgHTKhKvHdTFyD53n7GFUU4LyejdK4RJvtYPpap1pD16p3uxR3jRnTETxNejWW",
  "key3": "4PW5ogRYVGgMXL4qVYMWLWXnSTZ6pychdZwJjcK817E9fFMpH9vCBPVveSfK181FkrDcRFpD5UTnF18XScptikAW",
  "key4": "4s28p7FGijvMPDQLFKaHvyotthvKHJYTvRqJxMnzPMTdSXMKxLyPxrFQ48UBpv2WHwURJiKmXU9bVMXhXGoEK17x",
  "key5": "3Kunb9s3bGMUTpN5MrfZXrC3gAnPxPiYZFeCHgrTKCwDcNiZMYRh4XfGa2Ds12y67KgkJBHRzzeRxhsyVpHoj5C2",
  "key6": "5yKktnviU9YxphFVBn66VWh9fSxLArUbMB2MCr7Ygz1scM7FxbdAeufbXRYETYKWwrXUYWBd6HD28c26XL8x8ZFa",
  "key7": "4AbHAjeYv5aj6LA53op5vr18AoFJffpmRgQFwr5mBAqSiCehtocTMamxb2rqRyviTjdnHFfsSFxFYXRkJMx1peXD",
  "key8": "5XPhForTrAt3TUj5P84VaFKTy5E8Gs24b8Z8FkeNZ4c47AyqT24yTgjdXMsHGMHfXmMn9dQDpnNP9efj7jQDaPT1",
  "key9": "29L83Ej6zMP5LTqKjLpEfgnFgeJ4xay73atZhTnZ2DA56mJgXvgmABcu2Znqgv5DoaeA2aX1mPYeJbAoX74eqjSp",
  "key10": "2S1bdnqXvDSSqutuUVgVeJMti4eJEPZSiF6TDy7azQSL2GVXMabWSrL4vnJtKoRkPmrfDuu4MSFRLZcYhnX3mMYa",
  "key11": "1K8yyQSHFP3eMMfHu6ebA7Qj1iDdejhxiTVvvGwYryxmuzNfFRP92zwLQ7Picrn9Ath3WGod3RjPyvCtumdAbg7",
  "key12": "4cb6NncMXUVrmYRMzhFVpzJb5CMMbqLcVyvZUVABUnqsFQH6ADF68DaquNV5UhKyVC4fbuMsJwgYnwXr3TUiofHP",
  "key13": "4PLER9zdvrDri8hpPWSxmHWnChQvF1Cbvc2yag2k3QRBxZbjwKzRiQ8RZSnsjKGckUeXD2J15XyoQXJ7fXxyAbwP",
  "key14": "4THc8D8GtXcWeDPFHjhu4dp38ZzVdXaULCSGrzoa1hRSoWqogQGQix4HezNKWREjRPTDrihcrkTgE4fVDnATcGcT",
  "key15": "2rX4HKJZFtPGKruxq2aTi1i1ntYLihgwJSAed5Un7MMs8RG1hP1eH5k8LgBYKznPcVrcaSwRQuHEWx2h8pDCotFt",
  "key16": "5jzavCgjaHTTPe7DdJGN8NGh9ukbEPBuWvgRKU6y38rQsBoA4iBC9pAbmkGe7C1uGUKi5fAZUYvwWhzW3ahTo78J",
  "key17": "wxBT7mbQtDWSAvfxnu1qmC713cPMUAVhpDLGiiAGxSjSi5PfFdJZUrD5UzXBhLKiiTjuZAKVC6tvkXQiom9HQiN",
  "key18": "37wZaVAgKxnNumcXoMRdBmcXZo4DxE4PaH8nscHepqA2SJhZiQDAKtRLsvJBu8NUknwhaEEanpkkFmWeM8MmPnbw",
  "key19": "5PSgFyhFHDwAt8N7d2YT4KpPT3bFXSkwQcLK4MJcmJF3EZoGquRWKM3Hkf1eybhCHKNAs3z1KB12BbxzcUcya19Q",
  "key20": "64FFE5G7A9PELX49Tfc4gVkCkpo6zMV9nZk1tTWFqnR3kaUpWWW8zmwA1xQ9n6BzJQjsPChjYrrg1J6C3zxfDThD",
  "key21": "3wpzefw3er2jYpmmTMW1MsNLZBcd1J2uuqbHepFmNN3bxfekrmEos1GK55weDDk1pKJYpc52gdAyGtrGT2KtruD1",
  "key22": "5AVBkNmcH8BoDUTzu8CDWgbfkaf4oK8EyPGRLyF9bKKrGg5bLKoNiLuHRqJpBfW8UJqUaitE7rq6vXHQPena99kA",
  "key23": "3pEG5DrZ6nhnLk3pFFhEQfzAKwMT8wfLVqwkMBLeUb1Ka7k3vC3UvroBkkB7mT8qreUmqhLezASxsp9nYp1njkHy",
  "key24": "2WrjfjPATT7g71xht2AKmbPLCj4tnsaRevPHE8iBr2wZGGJJJwmrN6VQamU3HazepyRa6SRn3Vxhqxkuc8cormNW",
  "key25": "ZXigN5PANHHim4rh5BfBvr7qq9giJVK7UmPMrz4D5TT134SHpvbLriyBY9xpenzzvncGmWTP9T11CSWq2pAyfV9",
  "key26": "2ixg1s8ZGJk1RQLb4vybJTBWsM5wYcxmbhhh2MCL52tZr33czcp1xyfnxH1ifkvACUh1aRf6upf5xQEFErTRfkWy",
  "key27": "4j6uiKtKEo81PzjTVT4eRBAq75gddmb8H16ftLZnhwXkStLckpBP19oZ6m5AbpUXcB5pHFyQRmr223iCq6v4SA4u",
  "key28": "2LEJSmC9yjtpuMRsf2BkQFu5qHdK7zCX6AaZ2oWqpjSC52mJSdmfLrWtP42DACjfbhVKVJBsnJvTHrJSCHAPKMxm",
  "key29": "2aTSnDBDeZzFABwS9kKy6kiQLjhu84UNBWUAD6EyktpBv9kLtL8EKQK2AEq5JM9SU2F6gSuAc7gnAs1TTWv6SwT1",
  "key30": "5nYVFUgqDeXYHatoWiEVmsMePWKGt4BQDL2i4UGcAyZmqXytWRqMDft1qYVJEe2jQ3Tx6HUsrKEUasoUhtv79MEJ",
  "key31": "2RJRHS6TPrkD1B339rnoCmMUcndp2Y7pge6aWmrr1xLcWpXqmiYh2SKefPSbsdK7i92gZtrHDf1wkH62KswteVKQ",
  "key32": "AFsDgVYLwJcTfqkwdjX6aqXhgzvKWkFfg5AAfccxWnRytLrdAgbT6PqxAK4KdvevsgZ5q1JLdFFjuFNB2eGXQom",
  "key33": "5NanaFBHBzCd2tRYBHjB5CNgWtDhX1ySaopKEbLxRAqMVSRHUALNkc4ziPPXJRfdyZyykUYcT2oTktuq6KAb1Sc8",
  "key34": "527ey8w1CVt8xws8fF3gkHgSLJD9T7ucCuQWKwrpViRwpU3Pt6omiCfLGnxFBKVszR92ao44G3dXgjhpaPHE5SWT",
  "key35": "2kHTRmQ7A85Yi7mQZtindFGDT3CcSEC1vtvSi4e73ujfttfJNQCV2JVWkDJcuQ8eVHayXVahASLCKV1oee7wjKPC",
  "key36": "3Hsbk7gbdw3KfP9F6WLkyaP57bhT4P4oeZS5rWfFyf1Vo1LhT85v8xQtndWpqDSV6BtuCyMhvGhjgCVVevnUdak7",
  "key37": "3NMaJSbDf7D6svBSuHXkkaFdhGVBSzwnKWv5LYkctNg798XpQwjr4g2h52q2QNZTLTgdGQkjE6ZEWB7Kh6Qw2x1e",
  "key38": "2tQUjaYvU2Yy6aPiNNDE5NjZj4AcwTLxAEVnJ13bmAMpUh1eoeK8dkQtn4A5hhkr6iooBxGm73jjobDhBDZkrmcV",
  "key39": "617QkgAgW1vtzcb2Tng6CwdvHDNf2dspVMA3R4J8U2Nksrh49uVKWQuoEHNZ8H3nbvmXxPt6Sm3eG9juHTwVLmF8",
  "key40": "3sqCc5itqWvaHqrCmPH5TJ23MARoeyAD6R9ZLrBmoxFzZtKLXEZoD4tuvPnheZYNeCiygbHEUenyCePv26ajjdrD",
  "key41": "5x5LbrUeYZFJH3NdrTutRESCggRQFWLeaCnApozHamj2UbvQEKhNUS8VsWgxyGHyiUaNMGiZUv2HNEND6QwyxJj5"
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
