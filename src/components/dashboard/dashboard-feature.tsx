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
    "67CCX8k4HivUZYwjZxNQpYBFPbvC1J3AdLRd7ViHMW85mWc7i7ouKhdNpALw3ThFNJeKA6vQ3A9vqewAM18HpvPK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CsPxi53acZtbHeyDTgLCoKx5o5sxofaXKb9B27hH11kLZJxVyQG9G16k7D8k1KN1VquoUTgTd6sPxQvVAPXe9fQ",
  "key1": "3faeyK1cDhLS7BPHcjhBcd8w7RvahkaYuFdvhrKNsSnyeskPY96MSJEeiGKqwAwE4g5UVU9uxxbU7X2ZnJbMChyS",
  "key2": "ErrWtMnKEyucfU1by1FRp5iPTWgwYwzDEc2A1rT7XL1pEBJkYgWD5wX5ra7tanXisYjg3enJjRwJwWEFRDmkFQ1",
  "key3": "3v7wZgkM5SNEcW8CVfzpydi4CvLJyqRqdNFn3y1nM2AbCwiiSYEgJJgnBcvqBhvpKodtHBkY6LtW24VYUeSWTCvD",
  "key4": "4PuQQLPYMR9fskXeRq7X36gSV9ijJzzt3Z9JubjDVUYZFY6vVCDArLhYGCdwiJ915ovjB3MYBoYo49Vu9cEX2Q8o",
  "key5": "5wtwUym8ZktXUGdQ6HTdcDCuCVAQAzpmn6SQezJUPmoexAf91dN9ev5Lp5VXzG8GXtgKcHFU1Bnyrp1wn7oQEpAP",
  "key6": "5bEomXcWhuuudVZWGFFAgTTvmVPW3KjdFBvr12UeE91jDREMDeUYZfLjXVDAe7sYm1icne5Nv2xDaDaGTAa4EHBF",
  "key7": "3AAASaeZG4VWKXJgbNAP6nnkZR7PVcsQ4bikRp86CEeKQiYpaDBxV34NAAE87NeESHypFVbfj2KsLjsSTEfnegVG",
  "key8": "2pnbnCVabh24f9EtWM1NpH7yHS8Ecuj4C6EJYK5p9KdrkYcduJc7YpLRtz7zyt5ScGDPzMTBJMViJuuxghVXvXW8",
  "key9": "6Jv9bFps71nt5TDUzybLRUrpZmWaEasZet1ydf2kjegdUKdV3nXw7brcyVXfXi8KcG8ot5D5vTccDDnX8Fj8e5L",
  "key10": "4HajSPo6EouQBfxENpmFvM8ThusgxegXWhb54XT4qtKifqAGZnb1a1GmWMynPQL1t4S7CwiggPN11JbXuMwyEsjR",
  "key11": "3oDCWApyzGLLsNxQ2Au2kqQjvWxLPxpR9ohRFrRW9sJCDrBCeGpd1eahR6t5UjpweeyHp4jhoAbEt6DLr5yB7d1S",
  "key12": "3hDLmTdM1jHWEVrVobsLyXcbd3wJhmobbbdFfNpCoBiEEuuqp2DWjc3h5ghYFD5EQDJHFPq2ZtdPWuoBhNXUAdDh",
  "key13": "4zr6eRC9tsowgf4fzGeZqr6wQ5h57RCCRHc1xEX2NoihSkCCMkip26eZuUWnPUiyjvYvPPYShFJMrnheTKqkoizN",
  "key14": "4WffDbQtUAEkV3pG4oAr3sd5aVdvQHg4Gnwug2nPsbEf1FeP99e4VniPZ21YYafErtjCHwbqaDJGcbgZBiN9gSM7",
  "key15": "4VZ8hVPdqyrm5YKCaKR6qY76qm5UphnuAnpZpcFvRpJSJPmoaub5zipgSVkmgxKm9DoSoLQcGpY3DSa4rRxQDfZD",
  "key16": "KFRV6ub2FraLqBASUjdwnAQ74E7s1nGRhcSdAnikg1xcFE3t6qtUwysh1rzGYrzgC29gcr6nBQLbhNMLxWdqoD8",
  "key17": "3u5jf6qZdxTM2gydnyPHrP6ZMHWcM6b2EU6nWAzgR1yJb9eRtMNuA9RhVLHC33eEouyzh3HgS2tKRSh93RDfT84R",
  "key18": "58nYPguWDrB4qgtvPatti4QWFB4GiNYQURRee9ATW5PY5Gi3wY78KYYAUWEHbvgT6KPfoNw1PeT4ESuxrFr9dLHE",
  "key19": "4yNSMApuMGxdCrGMAPDi7rPT6YwzPubUADVmdAq7NhU1PaBfTmtL7v1B6j7sqhyMSHWTYksb4hYM9c2YBkeHC3FL",
  "key20": "2YBU4BGjrfLhnnRHR8rRJxFGznUDV49o6HWzhfvtRsSZRzx8SZ8onC5TeBKkpm9AU2FovHNmwZMKsGXDDfNZXAYR",
  "key21": "2SnFeGe8XtQawNNj7ip3z4wtnVMbfFYoJBzS3as2ZvR7gbGmLpWhfpoy71iA4oHwG547xg1MEp9bFUNaw8as3RAd",
  "key22": "51xePTWwW8FGHT98epHtDm9Q3LMEF1SwFRyJMSJVGTPB43YTgw8rpCeMmGnzgcza5srdVp2v5KNvhcBUMX2ZL4D1",
  "key23": "2g6fT8dqeEckeqpug8RwSiMQhN5d1K6Bw7KeiaPAmKjeTWURffRMV8T8F8rk8AoF4wnhtjtgUodFcFTzZ3JBH8VN",
  "key24": "3ZKVufAovyQ5LoWhjLViAHXgfnemAi5YmDunhWoGzTzVyfbQSYh14gjNExiLSnWwjpXvFhuFw9ZNc6b2ADiY6PSe",
  "key25": "5iRWaBGcfFgQUSfNha3ZCfVzdV81qzgrDQdfbnFSynRgswGQwq5hxRiiK7DzjVnF7YHFHET2LBJ52obV4Ay4ytkG",
  "key26": "3Kkfr644cd5JyrE9NeipAYexFoLgxvKsZfYxgBTJQ6tA1BaPnvRsRa15aBWecaWy6LWJbX6n75KyuYpPJjqjantv",
  "key27": "b4LaXV91qK9XTCA7HwRfpbPW6E58qsZ2LkN1wiiabVyEg9APT4dByZrKMo2cHQBMTcZNmHR9bj5GPJJJZR51G7j",
  "key28": "XF9BQjiKWKYP49nUuixHUJ5dMR38pKrCjttnCkk1rxzN4g5DW78r8GHNCTDCJD5RkUWLZx65kAaevhfM8jdJU4Q",
  "key29": "5PLXqkfKmgXGbWiCy3t9ia2RcWEQvPWDpxkhK8PFFgBwyLupVjXZYfXWegDKXHAMEMVrojXhQaJxTbsR4KGkKkSE",
  "key30": "5W8pSkLyrunMiDLf1VPqDsJ9ttwjnpPz9gzpzN5pMURRCdPE5sB9yFFEd98tW426jHRAsKhpwmKM2zC3kpptqoNZ",
  "key31": "pZNCQ4NFjJZz5eNLLT82Sb44RWfPpHsGm6bY3PnTLfNNqtZxVcmunxkzbFxn7NZPkYRoSgWm1U76oDs3AVznygL",
  "key32": "4KpNvAVdVuh8K7oowjmhih5vRtcqTyr8WEmw2TiruyHAdzNzo5VL4oW5M5a3cwa51JB5pFJPmqFvJTTpqELDg3yT",
  "key33": "4jBH1m4HybBCQ6q2mTwSCopbHUuBisosVSeMgqvEmPdmtRaVEAtnpr1ihRXcTZ86drgyZDnQp8gi52XDyfqJtvNC",
  "key34": "qNFsPA346pe5SS9HWzZCAGbjwpMmzk1vLtX8hgk7NxxKgNFXif4TXSoYa4eM7WTGJxTa6W6pmePJyjaFZDWYxtZ",
  "key35": "29XtHQAP7pkyUH3TLdBieMaH2RaxBmATZbMABA5vmKsJ8WYJpwQZiVAqsPMeM27i3ewb1jxYZsqmUu9wfgKffe4k",
  "key36": "3anVDLqFLMAdApFNEVhe1KC9xBskojxU2YuxRVhJKqYKqHQMeqzhJwynKzDy984tC9m6QVF4QWn7RcxwpC64f8Vt",
  "key37": "3v988qUNtFAcH7asPVCHTj9wR1shVVYpRAcq8ZTAYoK1EJe82tiuoNcZZc7boUcfe9wd2ANNRe9AfRoKicNpVBdV",
  "key38": "RX5ikAF8tiBmQseQ3SMjRvU8FK4iPLk4J93D9DC9XLb2vqixMBg17adfu8W7t1KZbZHNh3kboqC11jDEgrLVfpN",
  "key39": "fxnsJgcmCXCA6Kts6EBGwYsjPEgSzhAyYSJDdCk8JajeUnmogm7Djr5Z4Gj4XSk4WF3CgRNrPW1RMLtvcepjQMv",
  "key40": "4kR4xiq8dmU4vVSaLbF6LoKjLAraQvrcqeRQXBdkTQqrj9AN8a69jRBLQC9crS4aq1ho7znToXBccRerEKTX1LRk",
  "key41": "3xeRqomaGaWiN3z2srybhhYYtef63CE9Bq5VbftneF3BB65wQ5zFL8LyWv13hJ2k4rPYsWYUW6Q6yv66LCGAsJjd",
  "key42": "59EGHPdNrrBnAahkiPNcyr9kmvDCHWZCvnogzPc8voriDG5hehiyJvxzZmAqkVoiTZY6MmkGyKwq8VSgoduKSeZC",
  "key43": "YXqvfaT7T8Zeo91kph5bQpY3n9dvou5v2UtJnRuacksPfiNo6TfV4xbMWUVHXGt5YxjsbhrkYZNDcbVKvaM7oyo"
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
