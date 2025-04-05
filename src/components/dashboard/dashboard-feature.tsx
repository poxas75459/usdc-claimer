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
    "5bpC4ye6tVqe6AUU9Sv1uZEhCjEfZyfYB3c7jbXXmkLVoUinFvoUj1eto9DQ4QLVLVYoYDYMU2XE8frrzXtb95p1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SgCstoAQTU3VAsd6WLnED9hmWPg9ujMtSymRgoGT1vU1S7zaZ3JSaizTfsD7GXSASBWh3nYVCdE8ntTxg2P9wJC",
  "key1": "qo9X3zvDgfpNetXRxVMEou3LTYP4LKq84E2ATDMKhk5Pv5adTET4NYQi1BP6eb4TNkez72QNxsgeRbwVRWnNjEN",
  "key2": "3ttRrq7SAC855ghzWe4x179HYMdHZSn8Fyf91m7tscycmtuGp4uRBnwPK3D8mtzzPHjSSwL64XoaYamuZwWWk3vk",
  "key3": "toTMHBvRiy2nzv9YptQEAzMrXCe9kC8fakE7MEoJNh3W3pJBFbTDCQAw38wxkmaeVtKi5W94gnVQzzfQNSiP5PR",
  "key4": "4Wy3o9LzCmbni7zh61yM9DjEU4VV6KbTcrUJtQ2Tkw7Eak2aRLPstYWVX8HgBrwqCUoEu1YWd6VrpMfnyN8Hte2s",
  "key5": "2mmjccAaJmd9ebryyiabK38gMVgT9LFbzn3KmitYvoEqS6344dp5Tphs8DmV44LPSCpRvnS5x32Lds2EE16XMZiK",
  "key6": "5w1YeeoStt95UE5sR9mCV1iLHAqNKakK5wdzEBCAr1h33s4bNm7oTvQidWsg1RnfkzdGZ3QWogrzo9CLMnhDsjZr",
  "key7": "3SMaG5ELhiBhrCzrKw6h9D2JHP4swqHbrZPWpBXjrx8urvLCoLvkr7tqSzHozVKP5JNGpCz13nkmX5BqiHtHyZjY",
  "key8": "2iEXToncuGMG55DBuJ4p13y1eJdb6PSM6WXqDThmjgYQbAeZqEh6tAQ36J6ckiukSbqeCrm87Lv3GPcPrt9LShUu",
  "key9": "5xcgpuoUNN1NduHbBVEKHhMhRdoU8j4ocQGDjkKv9XEcVndWQspaAkDQ2YACZzqt1Lt1dt4mp2Tjk7T1onLwMhv2",
  "key10": "2ozZJixjijqQJ1Nhbzydja7YgUNV7KMGU2CUkZxgd1Zg72LxKRp41FFoWmtidJ8XfVinLGuKivstKPuw6RcChqgk",
  "key11": "3ccUByeqf5Ww4pp515gQcUcvSnsLrU4djKuP8XG8j8hRQBvNAFzpfCp79R7vzpZmwhQ7hEM6BjFhxTEJGYUUoEBi",
  "key12": "4oGPgQtwyzJnMB25g1mM4c8XSQMsj7DLqGJBMVt9f5rBQs6KAzupmo2rfehcEwU8NiK6i83fRaNKnXUUba6t2E2K",
  "key13": "3ez1YuBgCDeJ7r2tfZSNNxSmyybmBEikDTWCL5RyWEEWUfgoKxYRjRh9PeGRPqqcTMPjjVjVkFkr437CzD5PbBb5",
  "key14": "5jwVvZEkKKVVyNGcLsq6K83APYQzWcobtvRjEF7pjZojK2xVFh4862RUWMRuPVqYMp5cHDdha1EZEypoo9Nd8Shb",
  "key15": "5u6LAYtPvxXRHdKE8wpCUucxc3aFnA1FknixXXjmkhACpMZCKRoFMg5rrSwgYQ7HPZz2XSjMeqeorK9FYnQ3Ljqo",
  "key16": "4ZRCh9oaMK2jYq44sRRwsnmnwkUyxGW1Lb344RT7s74QvmieU8xhfTvw4sp9iw3pXftP8wpqtMDjxUisiXSHfRvy",
  "key17": "JESJ6FXk2reLmX2yG6YtmCCgAaWs2AuHrcrc9U7tiorWZ5jkjhTPRzzkqCkaB6hZb5tbZctDDt6NcmnYex3A4tw",
  "key18": "7W8dYdX4Q8omUYz7iWDB61yLRvBhHUSC1yKRTrq88K7J4oCrs9YZW22dTMgFwdoNmWiNces52qbCH24pdAYLMpM",
  "key19": "2Y5c5En5jzb3jTqv7jGhySH77UgzmVvVco4LZ2RSJNt9HcQNzDfZPFNUFBqys8zA9C57HiZYhaXoq4QJXiqrYkGr",
  "key20": "4B5bq5E9FZWwvtBN3bEQDugi37AbRYf36E6HvmDVcUGUmmRnC4VPyCssGKkqRXroqxH9jWF13RfsBArow4hKabm5",
  "key21": "qwQXFSpaDb61CbVoGqbvWVe2Vvrtnvi6RSzQ8JZapjRGTLqAwzgb5LzQtP4cpWA8vn9kYSZXnySUQSe236JChev",
  "key22": "4saZgaVNsW2VcKMZCHGtAYmZVmEQVf7aEEDdRY8uQ1ncY6m398qEs93rqfLywTejm7oqRHKJHvqXSsm43Y3ASVFN",
  "key23": "5EFpMeKNBhAEhzdMcAv4cT6on1ryhF5ETtHKLDhEG7UCGjm8C9XHrKtWaS1uBwqCgk6nsXSbbw62AxnXpYk1rx8c",
  "key24": "4krriXKq9Jjs8CM1oMXL2Q2Xd5R1eGVanVSytTYYcTewwgXUX3yGTNZpT9Mgp4DrF5GZdcMj5zSJuAa5Kf1AP3Y9",
  "key25": "4NCNTEKaGBecG4X9RHhFQgW9AwmvYFqATDJu82Fsqb1MMKmy1Vb2nCwchXMxRAZbh92tL6eze4NMAcxXhNvyCcFv",
  "key26": "5qnWGbeufVFTNLz4Uz83GE2k6NMnpPu2tjE1rmkFMTwHAdYvFzr6PiwwNCwyp1LFHj1ATECbSsXoCNnXzsCwsHgm",
  "key27": "5vABeBrWhnJkBPuR8LuiLHfeF1Cv1vPLutoDTivso6SBq8RhNEakP1kwrS5xiQwja2X1kVjLDPv8KX1vDgdnNBAF",
  "key28": "4Aw24TaTTGrNLKP5caenE35ZfnwaXCuuPjw6KzU2HojJZ2D4jqyJxVPFkrbjawpdSm7uvgbBymFcmmhKHX3VRQxX",
  "key29": "4dDtN6djK7ZZbLVmN9ZMmsGLdfhRA41sAqW2f6z52ba3abaaqratbyT2R4sKKBUao2XgH3z9gv3CL5j6ZMCLJusg",
  "key30": "KaxaTr1Avsry7UbDMGBHZdQgoQFAmXpsCPeUaxWFZqx5WqVRaprnBtXakMoYnNsH355hAULkQhNB8hzkA9J3Zhz",
  "key31": "pegxBVoSUGMxxQpB56AtGNt5hrFMXVNrEvLPCsG2LrRJUN998Dcx2ta6GcKW3Um6jp9jWMCNMZM4Z5oLWT2kxiD",
  "key32": "2Ki6hkRkgViqQUpKiWjNeHftuoTevHzZy7doeo3hPBsXLTHFkK9cAZ2tzfC92fDRGjKMsTyoiyeyTNtrDZTtdKGG",
  "key33": "58hufS6WmWbd5LwpiQwNjPb73d87mSdaHq9W8YQ83pqmJCUesChPmt4SNRBKBfZ7B4SVru2tr1cgHh6n5uDMsacE",
  "key34": "2mMJH9Y8jUkKs54eTCWhL4TY2s27c7hZxQ5sAQ4CoTk9zppZvwrGJFv4wBURp6CLZQeEhaKdtZ5vxS9raqjbczqY",
  "key35": "U3QUunxynL9boC2PMg5QqUnBNxuoKQpEnUkeghjGxRLmbak1H8Wuwt2AyZct2L6dxQZpjxUU2KXVrkxx15Bthz6",
  "key36": "3iszsm7FBRDbvRp3jDmU1wnNFgmB3UqSed57kSKFQVWmNESVyF2z4ZMvx6uCpTtg3R4fSftXLQzfLigTPEc7agr2",
  "key37": "5fodsQa9UQUzkYKp8YMdj6WzkhZtNw2aA4kfvwx43hhin3NoRTryuyKtBsWqudTRRztvSfSGeGCekbPRad7Gt7y8",
  "key38": "3nFtBV8ad3pgQbsyJ3w8MYXA522DFoHWPkWHoME7etLDccqwLp1GZsVPiVPg9FTNV5AcQpoMq4gDxnMXWGG1arhj",
  "key39": "3zitZvpoKdX1y7JZh2KQRe6jguG3YsinUFiRAjGrcaF75pUQkMG2QiR1KbAQP9EkTZgSciqryiNVe5xRzZRBs8Wg",
  "key40": "4cn8VPRpzDZa9PofJ1C5WPfmm4ZTTTk83GgTjQQmRAm9wD34UijU6myum3GhxbFZYwMYK4JSyY3Qsy3Sc2CNvXKy",
  "key41": "2uomhgJPGTkUQqffQcsMXEvem498Pxf8wP56b29jTwPBG1ebuwyfxziEPwBoAB4mGSiczWNz38zoA138pAQKWjso",
  "key42": "2TysWjTAjWVG1sFLZfnUyo9kFV1Zfc8K72d2V4unxPXXGvG6nR4bQg4Cf1DifyMUNZVH4tkPQ5byYDDfLMQJMuNR",
  "key43": "RxDjeWB7oNFV1oewmdVEmwP5iixVLdUvTjyswmThWJKSFoikWVdzkUP5M43iztDdSzjZXXt5hDma38WFuxoBR3m",
  "key44": "TyEGJSvrD52E6ixFD9fLEy3VCrfRfP6u1fCF3kb6dCVvNGk1KrAZfHaeCfDmwBNFA4mviaLiESQK1hSck5aPvMf",
  "key45": "ChXU75R7MFMeM6Eq1QUg42u6nqn7vBnj7fxfgJ5Wm42cAcQFFg7sAdWLuo3ohoiDWB7G2coLgtXm3p47epc5pip",
  "key46": "6saKvVDzazcz6mHPRF7oBq3iMTcNVVcxipXGeNXMRoCE4Hg6hgbpbVsDbLaTP8PVvriNJMqfnVY4NQyHsGcafRh",
  "key47": "7LBUYqiB35iNmjcGgBAQcP7AX4mw3h4Dmp8xhGwDdvRoiZrPKimLYADffu5JC75knYvqyva5gPjFro2vnXdQSKx",
  "key48": "5W4frHG637GVZPc5PjDwxPmAnLZ9LYiy49LXjgFhS4BKuDd7PmQM4EEo3WYZeXV3Jf2WyZZSsB896RznyrAW5kkL"
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
