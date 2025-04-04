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
    "532v42iHTQnip7HsidpAxCadVDLd9jX6GGvobFTova2vSkXhQWtFMVse8bt47xcRhbnez8n6NcQ9H8758fNCdquS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hU4BourUsPXN8ugCgLU7RzZMLoyUj9eD4pqx2WxwwGP4xzVzNZ6VtPq5Eju3vLzHQsZKe1SoJdaxgEwqkU4biSF",
  "key1": "FSLov6WnQoEcT1LvjaSnUs4fE3Tm1mHRy2iuKZDnQC87cw8gBb6arnUAjf3LizD8eTa7igHApmvgTsCimo1kYrt",
  "key2": "3MYd7C9RTmDSp1rm57tcxVWbgNXsvLRgf7oYSbddZaPK4tGG2KH1ZxvZC7ro7GqREPFyzahUQdaKzDu7jzyWqKnZ",
  "key3": "51aF2weFwSFA9T6R1PHvAoNKL4LPCm71HpYtSZs69oCE3f2pMwMGiqVezPHnVxhzKoSpBmHXUrUk4E5yoZPdy9Xd",
  "key4": "5FCvRE6tLJJCY3jgNYVpYJPpcfjFEXeWKJJqjXgF28Ehm22271h97afG4PpQPvXtDtBT8GnESKD44uBKfTtpRcN1",
  "key5": "2nDmBgrK42P94cAeTdMApDeSJoFdbBqfXhkvhyebJztk9F2E9ANuWUyDs9wcwwgMAxuFq1PvBKQfcybkcqz4Yufs",
  "key6": "2kmzaRL9k9uucKTbrPMYzGBss72K1ddfmznWAHme8xNxVQfKhoGfvy2ZiC2WZW9fgjVhJa39w9MYLu2ULEbLeqkG",
  "key7": "5CT4YXaSmv1vQz5yui2Sw7bKjC3e3BKFse4R7S3EdPa6TX4yd8N8zjavJge57r4Loi42iHPnNKQumx7uAHmHpfVm",
  "key8": "4Vd894ht665B3VX2MHeFLPobrtfGL1pAFVSkr3pfYdN5Tm8LsWyD6hGUxU3GLBvdQNzKKoaYKR2oS3HLmSPBVgeU",
  "key9": "L3ED3Vta45QyfF197Bmsv4BjkudZikZrSTWgtD45Zcaf9YffE2jkoGayN9eJoBabQ34oKpd6Pjhq7Qi5ftG5Ces",
  "key10": "4NmQirk5iN4a4Wkmf9WEYrBM8tKFbVpWs68ob2Dk6pRYkLbtH6rHtG8rZEeNWpmL1U9pHmhffLWjRtRJqXmUErjz",
  "key11": "2wv3jaHpEyvAkPNyzQmLHwvADQD6B5cAdWcNuVLJUj4G2sAJpjqfEzcGrB47yscYmRtHKuRYwen3Gt5wwY6BVMRP",
  "key12": "4wxujmKoQNEu5DrVWrX8dwcBKi2NTgX3vXXgQF3g3K72vHiEc8oFYgAL4S8khhQdgfRNc2WTnnoyS4YS4DtskqjD",
  "key13": "RJKSkepB7qRDp83J9tYpcKWUfb428kyU3V7jVVLJHLXtHjwoVUjGVMH4dPh34niNEefoByggYcbJTxdwwqLbmyP",
  "key14": "5rxMJMXdMSP4Czb46zsvDn9zrZxphYYNLLJECaWCHXARs7FuNAacEvs7qhzbL46NFbJwLfVSuqeUsJ8LkdJgP1B4",
  "key15": "4ejeoV5sjHxxavUHUBjAMZ1LhzPyLUw5Gz7yQpE6hkSJDRtAcN1pbVERQefb1rvckeE2kDZjRGWjfFyqhq2zYFkx",
  "key16": "xGr3UDBR3ZQnLjTRvHT1kwbdhSnuxm52jzi1b1M5aNKVgDp1YQK9cADzWjr4AHXDFsiJgazKL2Er3jm22eZxGxE",
  "key17": "2pUBtuRAjHHfJWYN61PpnYXmNpi7WDwZ4D1B97uRLECsTAjsKdHHNLfVFpvYYuJFVF1Zq95jQ4bBbjPMmb4P6yqm",
  "key18": "3zFbBagnUb3gYpo8xFVVCJR4kujSjM58AfUyGxXDXy3BPzpYHfh2YkmEryN4RokfA58zQ693AT9SU6FTsdXnbHKM",
  "key19": "28Je3dW7t1kMK4dthM6dbNCu4SRwsU1ixwY8s8NtKHmhjru4UShMDvYj1rnCmPTTKnNZ6MSFbTT6mRrAjgewo36f",
  "key20": "2Z58XpY2SPsUaUAutKWc8op2Y92c6jrUMoy4bPQM85VJBPcHcwcCK2J2x7eFiLxkM4raAD9dgRsxmmCJMtaEWcBM",
  "key21": "3EKZV6fQ4UVCQ8YWFaRc7g9uyR25aXDhkABgnHD1gjvtkqevSgEqv9VtzRZXn7QeS5RFnYXbGjvSxraDTr2NQ4hL",
  "key22": "2fphzfa3pWWtupoYPELcwaM5igxdS5Usz8i8XQcNQdxHuatZj8Zv97wqxdNjGnocP8raaxuXw5NxdBeuwJfj1TWt",
  "key23": "5PhmeGroiAz83UzdGwfXX992qSEUATXhcusygmSALs89u9CFcwLj1gVdc9WoRFkEo4PbRSvKoyX7qFAaUVJ82sg1",
  "key24": "5628o3jhcbgNpVjikAj2H99HEdTxfGzgW1MrtQamoTD7oM141TGAAzT8X5qvfSbe5GkReNkcr3cbEK8Z7DojSuA5",
  "key25": "5jGqA6U85VumsA6LjM51zUdSCRhQNDnQAyyBvpocprSjdxsxRCKPTFS9qcYekHWn264KRaJQ5Hckr9gDUxJyXS1L",
  "key26": "57Hma8p4PoeYvZmPGjPnYEVuKMcypvSBVJ7Ha5xYXCwHAqYANRXMYhNmAYMTZyveBUNyd6YCZ3reAvoJGCtNLids",
  "key27": "57hMrhLRcWjnjjbinJboceoqJiymLMGAivnrWCxDSW5bqD6ebhsAfnTQX1mzRm23bHg3Gyu6gqeayrjjAJnB7Pg1",
  "key28": "2R932tXuMAKofxCuBjKChpfp8KxARBGUhLnMDSMiqBYBh5o97RAC9kLHivfRwrPSsfXzpUW7dR9M2WunnLojEeDy",
  "key29": "4Ppyk2jpFzjCQTYtBvZj6CTFXnna4T4u6mYw8S2Jp2ktf8Cgmq1zHf4vgUiS1ZoxDVsAcghKsCy9xHWjDTCZUVD3",
  "key30": "4NzX4uo2XGGmWTUM6ncpMEYxsxPEK5HAaF4JiEezBdgWPZACV5EbW7sXmS22Ssnm2vDzGaKqgfszaXLah5qFLENo",
  "key31": "nUB6vaSX98oa5h9PxDGpGLRnWkyhXVSpqyLCWEn6iq2NhmwTzL57Cb5vA5gMKXc3FXZFz6DMbBM4mxSJVR2pxzC",
  "key32": "2iBQXeVCViJrJEAYErVbopP3k41RWTaKfyCKTbwZwWHpHCH6yZrbZXu95K9RXnVFeg19x3gYArdnqVvGCDxm2cVg",
  "key33": "vvn2RXTBXZKHGn8qcspWLqRSoJHHSEpoQALNHURR3u5Xyn6GoCyx1FicQGX9VTjfd9F6KGHTk5Brndst2CKewxh",
  "key34": "go2U7mnY5pyduDwLuqEyk1JmZSEdMzUeD21UvcNkKy6ZWpdJbRhMoL3UnNVc67dxNbA7qEDHxyjvfrpi1hUmtAJ",
  "key35": "qDCMhSjdijk9xF6dxWc8E8YaVkRS2qSBKBj6UmMNTY2ZfgCQtkeLQZBqFkjxQUBqYXy6Jrj4kY1mRsdLeHjYPox",
  "key36": "5BWCCiaHWSSBy2wExE68mMSz55cVSFiS5s7YS2kHtLeLrsriFgoNvbZuyg3LsjEePGitYFB53k1QXRscwWYiSRca",
  "key37": "2Biwck6GJWSq3xaRY1uYNYtT1oce8W7aPADYwa3YfzF7bw4VyYKEdbSMrmysNaXTuFnrpDpKtx2o9QGfwnJqpLxu",
  "key38": "2i2aYJeAnN3WpZK4WA9jfCaDk5NGQCHt8ghrJ6v8BYQxDu3pDPE6RHyfKZRTpgyCoGDpL9K41FhsmDJQUMhk9PYg",
  "key39": "5o1ZspRvJLBgWpFWQFucQrxqTx6fkeR7bUunoKq1EurKcBAwUxP1PnxfiF86xJHKDgMYU3fJrbWitEkfPnq4SSBM",
  "key40": "HvCGjBwxp37tE8gd7AHjJFPwDkm5Ez23vtqeD28jxbF5NHynWx7qPvBBwxE7msKe98UDk19yXemQYBZLTaTsFEM",
  "key41": "4Kss3sZzqfNKAPhNiwtektSp2xexYdjEWj7aY2rpJaKW6h5m8U4xJVb4HPd3JNYpb2PEz94cRuaYqqwQ6c2SaRva",
  "key42": "38HJqFN4gFRaxEfPwsnkPcVQ8Jodw32Kt7rKHoTFEyNAQpowpPpzSkNMVGVghCrSjw5ayUxyYGsVRn4R5iwsiXpB",
  "key43": "5urh4kCKrhPUE7vpXP2wuaaqERzwS55EUwPf27b3cuYDJvJQV6HCWGa1JX2RmHrZBqof6FvFffiBb6yTWFaeTK4e",
  "key44": "9AwPUV4oJBXmwzGig6hVjaW493HL73RqS3BSeVgKujA68m3WNTdihTrF7hcss6jjuzBBj9sFNBLyAsQS6nagXq5",
  "key45": "65NaysAU5Jp9cwcjiqsJp5sjNNnYJxHLM5ks1Jc4fYWwUqfi3cyufRiQV472GJXdG8frhyrJeoZHE4K34XPfPxkD",
  "key46": "2csiT8Ar52XNsdL6YZKcCTNmWNQNSgmindFZaDHYE93qDFrqS6ohsUWPirzSVb7ZZAaCAwCoNpSxSuXvKhQiyYou",
  "key47": "5ncboQedvaeHsFqeff1waMD54o7jRNcALj2M5o8yZvxptrDCe8gKLaakUuQhjUCw5T7P3nY7WoTJwQuyD7NQ2Va8",
  "key48": "3EPZyMHgisFscgERuva3q2yDqRGfBdcA44JsaxfSvmfMed1kaCfU8tA2pC1x9827cCWugA9eeUuTkqL6inGHxR22"
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
