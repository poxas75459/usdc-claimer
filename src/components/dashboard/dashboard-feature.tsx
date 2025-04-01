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
    "2L6A4ZFzHeatgBUkvmp8tMiokULwYZFmdik743j88M55Hq4GMLtkvV4QbqjAAgBdgRAPTQWsCnQBesJ4tjNH2Kfi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hnmAQiH2feh39GmUeEqybCt9NGs83kUWCQBpKiBj3pAuFGcXKuvtPdJ19jYVufJQfwgWKmJ87fUhkHnh8PSudDa",
  "key1": "3Fipn9zMpkuszfEpDemG2E5E6zJCRTtLyzjU3igpMmzBwpx7iJvVuN7gjTwUH46iBbowRjbBVYoYhhCf3GWQHpPS",
  "key2": "6sEK7SA6ksgprqBTZj6XEgTjbZFcvffp8NUp42aTvkSesRe8o15M76BWLQGaNpUbTeEAzwF663ePJzBph9BU9v3",
  "key3": "56bJmWeEHTfkz3uGqGf7mD9JcuD4xbvsb6uEFKpmVvzgXgYegTxEWw7n6Z2tH7tScmeQHebw2EHaYbuugdFBbwY1",
  "key4": "5fbEZeMZaVdZHvWctACt6EHEkNoKeip4gnDBUJaZoDRuys9rTH3XXFxSpRHbSaTeCAM9LxU24n23XXn2ybWmya9y",
  "key5": "5ebR2d425aALHT993hMYvVXUWb3CQYRryXQBtmFXKofix3Eai9D4x7z6pu9a7wCd4vEAvyvJMUBvCeRxSgfCusv3",
  "key6": "4hJC6KgoY26qTTR9vaZSUjksforaLuyNidoATRY6yqMx56yZNYb7EUtCTfa12KBtRXWG1y1oPa9Sf4nQUELjXWZL",
  "key7": "2bp79Pymxvpsdh6R2nUUCqTYXJVwuDdVoC6vfjRWX5JoxNMDud5uA26aR49cVEovvyzJcaCzLRk2gPrb2whQZAcd",
  "key8": "2Crgbpnv8NEaVXa4gGVAEPwT55Atw4n7yZZs3GvKJVDRACH2ZrADWhJArkbEhXvhNLK45EzEgrjv83T9nDn9CuP2",
  "key9": "MymXkCZTcqKuxqRShcee3zESWvJ3et1DspntdtmAfgYoYpoSTbh6kDjQHGDrhuAXCU2fYLq8F3VFwz4PAUFkhAj",
  "key10": "QLn3Bhm3QCXG5WR6jG2kLffuzccD6CZBAyHWgL7sKWXwSuJiqHmKHW8nGTsSxE4cttF1PajvHxJCQd9ssJgJeUT",
  "key11": "S5LNEQmwZAk1BDYQ1FDm5v9T8PYm7kSfVGtQXTitkUNx4uHvm6EYECLEZFBfxSL26wqCmue44E42A1gekdJhXeS",
  "key12": "23VCkN9JoSz7TP7Fu1mbwKNgKA7MidzaYuifZbDi41jeLBV7mJD8Pwg3vrmPT7tYciBSZyUkcDhXjdCgziqN8Ge5",
  "key13": "majrCuWSxvwEzo7t9bac7TrfnBu8pCW3qK5Q9ojRePd7zeTnbSWK8Lqmx6SfeSBFjUz9HuNXSLKbHMFFzVPFBxB",
  "key14": "4sd7Bxh3PtwmkX9QMtZCdDKzoSG25yHKFxhwvRcvvwb4fBhdsjahjwvoKWn8SHujrE5erd3hJmhdJHiL8rG2VqQn",
  "key15": "21iuQBcyh3TwHQvijtdjw22Y9mwwpvrxzcCnUztohtcmKGa4D9kG5AkFTkvJmAufKChiNSRDUPPCYXWBmhrcEmPU",
  "key16": "1f4fHcYMmVhWFB3TQDBTsySjnZkU2D3xSG14PwHXV3HZEFy1uKiUzdT9sn7iRREcEcrJCF29KWrT5Xvn3xNqQHy",
  "key17": "swvHfVWk6kchAuKn8ZvCoKJDQcLxJLcCynhazuC17FM1vtvRmcsSGhSaADLz82AdaozgjimXE1i1X4z5ZEqgDYc",
  "key18": "49zsBLRpfxKdJwiGtuyxiLLeoynvv7AAopjjWQKsEJst1TUimDSc9GLtnE1S6Mav4x3UiziUxZoqvQwe3aGDRAab",
  "key19": "3fxjpQWsxQpb2j6md4q8hfahURHR4vTetdUmrVkVsCSoi1r38aJEhpV6Tq6pK8tzjBvoGT8WdRmFpDsaR5sGWAju",
  "key20": "VqvqHF7yz85hy9PF13WLmMGeUdcb2z8WQLcTuRu7U1jhgwPTc6shjnV4aGpadfiMGN1xFyS2tdbcCjUgh12HzzQ",
  "key21": "2U9vQAJWKnr61SUte2wBaJAMojPx3sdriUsxdJKAU1kdTojzThvKPay1ZGZP4RHZrDeuH5gwSsPRQs6iUtU8hAfA",
  "key22": "45wS58pQMiEwkhAZCCJYzFtGU25iiUBb61bNe72X9CvWgGRxNDKM5mj4WTemEhVRRSaiswW88c6Rbs42UWatkoyf",
  "key23": "2LBc2QxBycw2KnimYpUP4jkg6wCckpv9rFsHyJVDSP2QeyTH5wskDvyYL7EdJeGbEP3idqo6Hjy8kbq4dbyeKr9j",
  "key24": "3emL67Ra7UzkQyhwZnWPFNamREr8bSbucvnHgXUi18Yek7oPFstHLgbd3biDgXAUnm7rtCfHDWDVHHx6KnSmUCXR",
  "key25": "3c2dH69W1mxuGsLn2KWFBk2Bwff9yXWN8EzrTMzPX69pJWWYvRainQQTp4PS5r6rnRXNsgxnDAFe4hX55Vkp4Dkg",
  "key26": "eKRskfbmSCo1MrX9jWhss62XycyiFy8ZSc1hB7KPwzPwctqwfpeV92HM42xoAC59RAvVok2sZpFmwhyN7sqyNU3",
  "key27": "4iDDRu4ghsfGsQGL6W8qa7gqZek9WyR3BKvqBpnmQcBkJ2mL2CKCiizXHYGvxH1TDCFsBwXyqYZ4Rwm1T5NfzZfT",
  "key28": "5vcYC4ZKRaM3HPEPqov1mB5juN3nvCUDfEg4KNhYr99qynbsgh2VfM2oXQReXZ1rsmwuQntAbMf3LaLKZ5BcVysp",
  "key29": "5CzEjW1oWw4S1GqtVuUUQgTC1d6ZgmXiSeAxt1bLDzSUaWTSSE7h6TddXcAwht71aVn3EFjrcu5bbutEdhh8iQwi",
  "key30": "55jW5S5UmiNCYwYh1kqjVRfDdztnPYFkj12mvKhKxzW5s4oWMpobGMBNrjcornzfBExrTqgb3JgS4VZC8KpaKMp6",
  "key31": "3nw7FfFYTFj1xsyUV6rjwwxJaTuQAtWKV3J3fZxNZ4TjQrgrZs27QUEUfTCuHfk7QM8kypMF4kJGw9a2GvAKJa1X",
  "key32": "5CvU9jjNWPTQH441hYUMhouxxs66dUhaeZZe6avp7rffXF7VNbrgTGBYxwjZ11VL8Qr7rFa2DufXGmusUA4dr1PY",
  "key33": "5VNTa9Pe3SR8VHZu3jasomofZCD4VNRrty5GVQyEBfxEx1FG7UhSCQKqJKfSYL9KmFit7HJ66kengNg9BftSBtB7",
  "key34": "62eCwXJV6SCnr9f5vHsDAje5KFJkXzjf32jZh27cBC6bh94uUcVHXbYL3iN2Cu3RyuG7LQDnKsMYWduczzzRYnnb",
  "key35": "3z56rVBQx6PC5YFtxh1peq6P7NBz4NwStem7KAGLag7zX1WiNRzkhgCTGHGiJ618rhw5gkQYx8VGzjG734QZDWqs",
  "key36": "4Rm1Q1KkCQQm4aSvmShddovQn3Qy8aJMLHFT4yuCWSwj9euK7sfuRGy5S9GSpgFFdJPBtWE7yUDGk9YvhQZaF1jD",
  "key37": "uwJA7uLz1b7uNw1Fo1j8pPB7tscoCjan8tbFBRMr34U6o9K9mcFzxyzNGd4jRYFc8ePC3fmGHfNmDaNDwCobxpC",
  "key38": "2DxEsJ9ReFTqknvrFQYibEZF4pq8d3WoVvUfRATbHqyButrZ1B5txYiKNxUJkV8kE1ymwsnKDtPR6xDzUtgx7Ds3",
  "key39": "UxhpfQLGbMAgtvdBUj2ZLGFq5nKTmE5neAZKw9FK2BW9BzBq6E7tKUEVY4vrVcQV9Vdu3a2Mzh8Shm6qTA22GxN",
  "key40": "2nXSmi8yt4QTg1ttH6yo6stMbamGS3XkccSQ58AMgmYSvhLrtYDJyNVLfLRZNJJ6Pq1mTnSGv58z7NcSPMCtpSeF",
  "key41": "2sQEVbQrLA3X6zCKQJCupymZcNvd1NfR5HfnCgvk9KZjGqxDRykqJCUgHAJXeTr5DZpJ2nta7ZdLvSRFHCTAfAQA",
  "key42": "4aqvkrmLwfVMoogzfA3XhwpLXqbZyxnSWYTfZ6tZg9oQ3eS3ACdqntLGoTeRVY4YYGMoQ316HQ1KrMiGrRpC25Ux",
  "key43": "5m6sBb8RBY1dgRR3fqrJ2soQBQjpSDfzmwb4XZ1npffapL1Jv33b453CwU7GsEzCyEtW7DU4MZnU7X4FyrmY2VNb",
  "key44": "doUZrfNikTVzLT7zFv23FnxjLMU1XLvL1oZgjGTR84C3sGvWwEbc2KG6DPtqQqnBQt5TUs8fbV6Z4rYCVVV8u5v",
  "key45": "4TALmH7K7kWsqZ7Gg1M3TSSHVPoTUPUkcL96DkX8CKg9CzQLtZucFpPmqLBUNxsbstJ6Ay6gNhUn5vgG81DPncMJ",
  "key46": "ogFJZiesrvDhBKQY5zq1p4rJLJcesQd77M9mYjnDsHQq8ohB9VwSWaycyFXWQHeTfmXjbBqUX92j8BmfHp3SM5c"
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
