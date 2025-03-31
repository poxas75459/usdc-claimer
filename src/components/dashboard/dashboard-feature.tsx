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
    "6ekqDT3XRJxYs8FHHg53gJyH4SgJcLvySD2VjHYJ8cqCGidoGiBnpxnobWEez3T3spkwKwC3VHtNC2e2yJLSmVH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uJxeZvy5yvYTvWG6Bp2xDNMHDNSb1Bowy6s54StMj6ycEE7XXCd4V3KqLqkoRSWGz972bRanxRq35oZsycWNaik",
  "key1": "4j5pVM5UBtSTGKnU9hAH5VyjG1ii43FKTPV7Tisz4xPXNnb1nMvDvApNCxbzvUZRuWSFAgQyZ3sqtuFZeQHkhhv9",
  "key2": "3XgJocSJnX9QwiSxe2vZXkKRbMPfXoso7iXAYghisqaTG5gPjsZjTo9Gt145piAHtFo42rMXkRVUUDdwA6SspRpp",
  "key3": "5NSazEgq3KQbWJxkYHXvqynCiFQLDhFZynFiveXk7MVHQCYvQ3QFMBGKHFsAH1saNAitnnverP8YyhHTQaq3Tw8",
  "key4": "rUL6pYYhm2kCFTwV9MoezcZRvAqZuM6UxsFpot98xV7LaLymM6iy7ubFPeMpHSAit5Vsg9eUox8SsyMdhcPmEvS",
  "key5": "2morQDMPMqxcZNcr8Mnrzu6uB25jzKwFDGm4N7TbG5Wi7KyWDdsta7y7tosXkQEzRbYTm8sUmPuNJvzFG3kJPrPz",
  "key6": "37DAu51HvSZaNG8a4xs3TuctUEoqx9uK2mYpUaha626V4D7UAtNjyYKrqbG2BKkxvi8AHynSBYDGHdbXSfavpivT",
  "key7": "5aVJAmHRZTLfPBJtFW7bxtu2NY1okASNwgFM9J17Ln6jHrsbLWvX8FMvGicHfW7LD32V4qM3gfktQSBCtycBcDjo",
  "key8": "2MSf77sU4bum2tvMaKEpX6qjGGYD4xM61ukyKvFxG9U164HBWQXqEPePob25Wi65VFnQuxeu3bXuZfeGSKZF8G5Q",
  "key9": "3nqqYV8LgQNByY4Yp8V6TomH4NbWBSNjbiyCgqiNy3mCMU4JgY1uKKbCFRKZf1CkrmR4ANT9RmDod9KNyJEcrxen",
  "key10": "49YN5QS1e3WpgGy4hQDmWJvrrPzDhoj9gijbxHUqXsn7xVV7zyEPBD1ammJ8tgDKYFxMtSxdWF2TKedhwJPALmnk",
  "key11": "59JzTtEV9SahrRMu1ByTW1t9Y3DA4yYsSphJysdPYdE657SRRTVwqXzUUs3MYUD4ZkmHXZ8V4LyfX3eZVRZkNSi7",
  "key12": "4qbhQ1ZUVUVTUpeXLTNTwqKSxW2JaUQdAV99CQpfFMmTFUCTXikwM7bwutNZhg5PtopzjWnu4rBbVxWNN62kRpC9",
  "key13": "5ujJZhW1MVo2pB64shpSMPuvBvEJPfKxRwEAvFFQuSgjhVHTTmdiznussuJzZkpCvSyWsZDfBwcLvM1gtx52CsMq",
  "key14": "4DLvHLKkRYiA41MpLXKasSXkZ7CCTWYQL3BHaCaJCByrHJ2c38tbbwjJebSL8ADEuGFY27LVH69Dr7yLUFkTPmoH",
  "key15": "4iwyo7sa3SRCRKLoZxH9LwCS2Wa3Zg8LthDREUbQ25C7TpQtWUexa9vFNkueUYhErXCBUbRTTDqgUyvedHK5Fm5q",
  "key16": "2QX3QmxaHRGPGXE8LJK7r1D2XjUhaCqMGGRr37fNtrFdZaBtB6MMAuLEE53xMvPnprUtccF9W13VrCxMyWTjg2vu",
  "key17": "4zzoHayrxUeJKQ25remwLEBPT3hTEd5KexA5dBLfdnziPePerNioy5YUe1UZarGdre5VLvdJJsgGF9m771FZvG6d",
  "key18": "2XnuycCstt2Rr9mJC1F27gjeTQdqeQFNE5zaQEtssL1Ct721nJ9k1VrwjdH4WS8iTCcRuDTA3wtk5k9FLeBMdUtj",
  "key19": "35pRsuAopwjjL1PZGnq6CmAkcTA4A5L3GmFejHcfyCAYtE3NtMbfammXmBkxsFfP7XW8U95SUHVqBYGtUDoxrcXJ",
  "key20": "4iBZ1sbziEtmBgJ5FmWVcL3zSrYnj8yXW2fnbYHt6e1YuTHBNwKk8W1uWSz44TKFCb883bZPieTHd46yCVeFsTGP",
  "key21": "2Tm7rL6xNUHX44L9xHGGo5fu2bdzo5K7dCC3JKZukVvV27vaGeC53LYmNstLqyCUP8BL1yBgGQDYSqBGoLbK467K",
  "key22": "5UcJuJcQy8T6L4pEafH5EuD5Mne7BW7Y72qHbR98ZYq6MNHBEDVwx46BXy8PyHCoRhXVSFuxpomCd8sZRabbDyLh",
  "key23": "28mAhnACV1ekaLnGe1skqKgHZiD4jbdDnau3TMNAryVcKCN8WymYdvXvCLf5ykReYhnWGih6VvZN7Tn5BaX4jfeB",
  "key24": "5FX4FS7BMRbHtubzU6fBnbnSb7toBGbxBv5DYVKMfZSfDGN994cSEJQgdGhpB2d949Sn5AUe6es1hG4gFJnEEXCZ",
  "key25": "56rt7V1dAWHpDzBUVm4CtNj9eu1W24jzi3sF3sQXstY7xqyk7PWUT9PitXDR3d8RsPiup3v4JdLKCYiQNYzMEAqW",
  "key26": "5WnDodxaqcB2yEaXxsvP5EpfXwG2Bv7TPTYDCug3Lcudty548ywaGhRRprH4w7pxBoRVCuDpHsqzmFwb4E6rKhbd",
  "key27": "3NcNNvMoysMe83znGTKrdGt9EmgjjTjzhuWsEhDfjDUHkQQ4LKnhzuWBT8WyWNgXNoTxrxZh3LKoEk4B7zJS2L4P",
  "key28": "T2AFZ89EE93DnymcyqtyevdoGiCBzQe3pu2ZbaKu2ztRAaKnVaVtTaQkuwcKbfGKz8YTJTGnYV15JCpgLnx5jSp",
  "key29": "31PU1Ey1Gk2f9TkLrB429Z5vhfyNpgmh8icSAXsaMjjhNe7XZCDuakMWQHVBbXymTk2Y5NcEmuQ1LWFiJxQmyFdT",
  "key30": "3TaFUJkkMqk1wwUuNmoDRhuQgmE8YZc6ZXRDpQSGcDHrzWzzTFEZy8B7Un1W85FiFycANKwzLx3w6JbJq9kdU5uU",
  "key31": "4WQAbPXSYjAiYm6X8oACruByyQ2AS6uRBfYeWxvAWE4jhT6dFyPirYb16gcNSqnDdFPSvAe77wGa24zGztGXRhpg",
  "key32": "5Zrk4tot5crKH84omQPkpszaVXxAfPyeGfKEAjHbkg2H2LwRqQnaxVYSy1Ss1TjqZLaLg89TQZbvZtMZAr99Q4NE",
  "key33": "QiiCkL4UoasiPj4yqRRCFhsCqBkVBQYe2Ck1cTqR7jZ65njWnV5gU5vhPczkV411v6sksEVLLPZuhcJBZyPnfQM",
  "key34": "4YofbgNbkriUcMUn5erwtogXqHuRwmv8Gp9BsRMY88Fb9HtDk3FvKyCsNwDD6DwVy9iiP4DqgZiz2VoYu2SZt7zP",
  "key35": "4d6LfRwmk5XGboc8FGXFa7FxQZ1MTc4sNMBi4Wm4CaHcJyqy8MiC2xW8fyq25XmzkJ9m8xMhMno9oppU39EfpSTG",
  "key36": "3WyD9rTSaJ47qqXu5UGvtqR5NLwqAQYbp3cfv5fmXbN61o8wAfFGBahbLRSx58cZ81PdcBKdVeijkZUfzB6FbvW2",
  "key37": "4cCUQigocMoRSRqagEHPhzScfPtxJcbVAgCT2QcCLREJBSSD6nVGsjZwVpgTha6NCabNL82e65zCEDpC6wWm1wY1",
  "key38": "5kpkmwJRPz3w2ZpeadD8j6eKQQuNwPs4Vy9L233wNkTLveDfNb6a5ZdjPaDwgBGwvKmDJ5hQqLc3VizxgDp57jdj"
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
