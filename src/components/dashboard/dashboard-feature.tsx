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
    "2c1LL9VJT8shTRrWLBKPLjoyhJdyorazh4izfcjbD2ZXvHj8cvaHEW8yGdwmPSLsM7nrC8ji4s1J4vVcMFQMKvk8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iLcAcwF52EwTBkdKhhZxnzRPVi8sQLwzzyjzFGAPBdnBh5kCLuPhJCtGcJ8bkQvg9siAySV8mxEzeucrPr39aqo",
  "key1": "4grXpNsJotrRigzEDgDAS3jw5wpprTu9nnocppnDjZEnqGtoz9AH9RuVC9NM1t8VobqUEUiVfMdQmCxTupVx13N5",
  "key2": "5cnFEftMuMjis93j9WHGRaWGfKmW5qnDm5WHTsJhJoaL6KY8khjU2dyb3H2CNEX1X5THG6CMr8SJmWQ12HqwuVdB",
  "key3": "7GwCk2YWtwqUpoafpR3ZC4z4zq1i1upDUbGTnJMSshWPRo99YCWwRqTNotGZhP8hr9HJ3ra6oqCNNWnABPrAS9s",
  "key4": "4ZZMzQoCPJZiSpyce2LdNRenyQoLBycHws6kJYG5wQcJdEcnLZLUDvW8Xbd5heaShziStJTDkLrX2KeMhcKu8ykT",
  "key5": "QdAp1r5MfiMUW6qM8FewoeDzuFBB62D4G8gobuAKk1F9GUQQAr4oc8eVPxdVm5BAuPjrorRBGzVtYqj5uHh2fRK",
  "key6": "35X1r8ianTHuTmWgZz6c8xPYCtxnyYkT3bxjPoLxXMNyLgGK1Gwpw25886RuSYpWJV4ZXSGXa5CsZzn9vuif5xrn",
  "key7": "5kdJC4bpMSodmekzfSNnitDQj6sQgoR6ZJXraAChfQafuv9mRAb9aMmwoHFMM9en3BCp5a3R2iMtMpg7iQZrgnkL",
  "key8": "2mc4ukaSAq7ftoNXkAhFyzFSEB7E4bL1cPcT7aCFuyVDGbgCvFcVtiXxm3URYLNAMdumx1TrQrB6ZeGKwaaHR6UJ",
  "key9": "3ciBL8eD6Pp997cmFGQV8HRx73GZ7kBtxSJZQvbQe1E3HwnX21ESPbfXSMQ2oXxKJ1j3gbyg1P39U6dS3w3RpRcz",
  "key10": "4qRNhbwz9YX6UdgFpFLHySHicoEwgmN6iDeTZu626oR3HcrZpEJJLnzRvbREvNDUhrVnCmhhBjz6ZLW3wa6UeZ5q",
  "key11": "2LyXTEKpMoTNsSbZTRRGFhT7SugEUa6rHaycWuirh1JQKdV7QRZqenwWvSL6HMMfse1zZFwfqfjdMSxr4zosn93S",
  "key12": "3s8GQkqHLpRQpiUWrrDqsyRq63o6mcGS5F7edXVq8MVga4nQd6Ez6VP3jmRe7t7G64sxzHdPsHfh9QMyfDx3BgPN",
  "key13": "5DXpcmW2hixCF2incMucqGzL7xLFn3Feu2P4fViqRdqMMoghgHFhYqYjEsamXkfa6auuAHoCQwmcdApjobZieS5f",
  "key14": "3oMTAZuuLJwfjXBJkLD49628dZ45HPNbFG2WNuwN8QmbPbhgSHVnE76vHP2R5js3fAAikHtT8PyF4CCpVrQfSkAr",
  "key15": "4WEi4Rp8DKB465qXvafXRcfPjAHiwugc6GgETvwP4Q7xXZnpk1SR7SrqJJUMf87tvgdqNYdHEx9aBNmz5nJmSEAm",
  "key16": "4QfhuoNf77tgZUEAZqa63BHetGosgi9QFxKLRBoV5adWA7vj8VpsNUtuXssvAApJKJjUA7xZEDAtPVnbLPn7a6Nn",
  "key17": "4TTwtBFUyzD9743yWawbvUeav1Pfi1mLSDtdPH4NW1aXYszuFhghos7joB4BiwnxX8eRE7ZWpu6hR8eqxKePNKqk",
  "key18": "4uCEvN1fHxcKpHqhXBRX18TpqSCkv2nmgWxKFeE7ejFLh5zXRdoVwUsvpw3jRS6WU2WFMH14Dm7pVnwCYuB1JnNL",
  "key19": "FUSa9xvtUVbhy11Bp7Ufpz2N6L2mSPVmr88xGrjCuzRmSigtb6bpNhTyHy5AmFBmG9PBnjoV7TZWNb2CLUrcY3k",
  "key20": "5pxQAFh43ou8Huv6z3NvPp3xsEEmh3wiKikmGeiEZDJwxuy5nr6Fojr4m3buAyWjqtTPPw39L5atAt7uQWC6bzti",
  "key21": "PN2T2K6TykagFRTPisizgD8p1budzdczP53z1MLeERuWHNDHdS7jUSBQuqxdkrGyTG8ok835JVcUddWYH3nDyA9",
  "key22": "4EYEXertj3cpDi4ktETzTgRTx8VTDGfiv7ENZg1svXgTw19NAKs8yhBVZyFc9LehrfqmnBJ4sGgtURJ5wreBm5yy",
  "key23": "3APAX3YTwu6KbuBMxbcYLYbZ2GYnJHSVxmz63qmts7wE7NYFB7pLp3kxVNmEd9RitCMryZ6iFRjo1zFRUY23kzpS",
  "key24": "2Rk5wtGrc2QMWM2vKXHQRqaeC3sx4fxahgryGCmeWkQTGUqbhFckt1FAAfZagsoqDK569vTG4MajYbHtfuNZAJZd",
  "key25": "fPUTLtihqKSWUsGEspGmckZM9ozcryD9xKuJLt2iX2uuLg2EAGgNEKAZua1R1HfDGnRrg75Lq5FQ2GGRsqP25x6",
  "key26": "3T2NBga3MjKiG6VJcQVwS3uphcAPYXT4P9WoGZo7ekp6vS9LVNptUbFS98nfC8r8maL276hFHFEt3pUaqwFoKnqW",
  "key27": "3u2gDS11C7NUfyW5iRrSAv8i1hJT2Ggo1dtKV3cYGM5nDYg2Q96fo7AaDD2ev69YPjJTwwLFAJXDaqXKexAYoyWt",
  "key28": "4GfNUR17MtAoFVQRk2A8WooqsDt8fjZ6Gih9uBWemEfCHRnBp82ou2kFVDsefSKvfkqpF6hCYPNzTodXNewqjBH1",
  "key29": "5SqvLBv3RxrARCJTjHeTLW2AsbHSKRWk7div9pABtFXE9UveuXe9fYaG14wxfJcWCeQXXWxEmEjxbJezjTtyBzmn",
  "key30": "4zn6oTpw9aE3cUrWt6JMJoBT2wqLVbzhc3Ad7sJ5ar4eJ7qYw2sL8KDnuAw4XJLpcFceqwzc7pz9hvQsPFPDX5UX",
  "key31": "5Qr4iuaVJs9Vj4KSrQUoieuRXu7cjfJWSN1LfENrp25DocY713T4QM8E2usJvbMoPizkannmaoVLZNm6Y7BHkgeH",
  "key32": "2XtKdboVvpwdm9RV94rqL2wT5rAc36TGhe72txnfoj8LV84uuj5GwfiAiYHahkePdeM8QsjhPMD8xfnodfGR59rJ",
  "key33": "f7eMq9sGiPicABjfFuqRzMYhBXVcWyLn3WHDD8JZKuRzS3AmCHUARQVr3DXCX8m1Er93tpoDG3qFa86iMneADZV",
  "key34": "67ScXbHw6hoUWnsWsWvTQPgHbhhCjTbYL2tS5kfJFd2bSYao5TpyD4bQJsG9GN5DEmU9BkttowPJDgdVMQAx6Twq",
  "key35": "5VLU35vWApxSEizXQF84sbWZ9GgT3HyYmHtr5Pks54332t7E6HSS7ayE8YDU6SH4DHwoWL79dN6vfrgE9BeYfvY1",
  "key36": "5iQUpT7YkRkXuDHum6usHq2Co2AeYafKUeEGULjsGEwbHnY8kXJSxkN5Qcb4g8ot2fQgaRnyq6aAtrxRwvLFrtDe",
  "key37": "22niXqSRc975E6Z73M17stquQYXfcUSuU9bWLQKmZAUdVcbJx6B7JyceRaGmjkHnM9GWoHmLzEDBm5YtSPpuoudY",
  "key38": "5BeWZ5RZuFhSqUhaUhWWDA7r1fA6nXf9queyB5neECDp26tVbWBjsCCJPtujU4p5iATHK74cRVRTdL3qTj8LYfHb",
  "key39": "2XaZErb3X4VWrdeod8qykH7CrQ5dd6XnnZffJ6yT8rhpCtiPyqtWghAjo9DjZUsxsSKVN1epv1Ura7vKAvcF8jne",
  "key40": "oeYdbaVfjZis22fxZA7Jjet2rLeViYReWosnRmtuWR2jQZw8u75jeWsvEEdYLcSNAfQQzG87vR3Zbadg2xicrZQ",
  "key41": "3PRqVKSGNsX3yMTsmAyJS6kxSm7bub5pBHMBp8Va9W21SJaWEAWm7zx9v8mX2nLh5BVXgfZ8SE4H8mhFdZSNtccb",
  "key42": "9KJj1DPdSkrVDYip7vFSzo5NhyC3zVoCWNnM7oUJsF7MVXuWPZfezPyzNFBY9x5L216w3yp4iuUneKSY7QtQ2bF",
  "key43": "3kt8GbeFfUTabtmnacD121LnrBst1YQ2SCQEacSuAvwSN4jC87HgBhgScBhjUb7SGX7oHMa9XhXKcPLAtBpqV9tw",
  "key44": "4rsu8HDAxfpxNQCUWbXZ2cdE3nnbCo7r11vzai2mfx7qWZnMLhXdENgvhKzSdyLcr5hfhkAr73sxU7K1aDHsYGKe",
  "key45": "4p1VBrdRytT1yfxvPFM8KWJ82yBYjMzWnViPgzfAGM2FyZcTMcydjBemjhsRL7xaKwD56UELCeXnNP43bL8eu6h6",
  "key46": "4niak9LQCRDKQy6UkMHSbgC3RMtYdZ6bSk8wHTVsGTpkfyzB9UEfJNbtQY3vkQCPPFad2aLdvm2YJHNyYWc4pYpw",
  "key47": "2YN5aF8RHCdEc9GcJq7ywTYgwA16N457VLaW7YznDsiUodS6FXXGRsn4HyEqQcTfnFtQE1fJU8ryinpG8yySnUPg"
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
