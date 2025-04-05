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
    "2GQE6WLjWmhHQKMo6vMu5zt34PEsmrG4B6E6XRAvuqhFY7jjmbkNJaM9vL5XyCuqhto8vRr15cgQP1NbZ13TVabA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pyRRZxwmYo3DXTroFtCjjRQ5PErbZWqVswgqHpLvvp8X3FUcU8T39PpbbVEkzpsWxA75JptAd9r3schghjPKKi4",
  "key1": "4tgwywHwDFJoatskPWyACWTz7biYTeuv4JyZRUKwRdKS5Euitd2PJp5jEHjzaQ9Lmc4L9afn3Hw774mmkCj95eWv",
  "key2": "3obuwNR1z4oQAjwd1BZz8qxY5TTe38J1hMsqZejYPTwHfeQCfotVPqhxzK5hxeUn5L3gZHNA1QTk94st35xLzZWr",
  "key3": "35JgBvieFGdjsthvTWYsh5mzHKyGNWacDK5tVmo8so4BFcFSaZquW4gLciEpeefQTN3xMJ7DyJGuUQyC49iFHGRB",
  "key4": "KG4rvKxicEUrBGuBYnhQ4VPYJdfovozgfVfMo6dtkFTis8JrXi1YfKHTL5mv7jSMTXQ6ZgYaM5rDmfDx6Lf4ht6",
  "key5": "4Je9mrow6Y4JJbUj615QRRu9gnHtdPRcLbkaKXq1N8UsTu3924dozfDkk5uUt1sGZwKZCWMuXC6gC64vmPgTxfY2",
  "key6": "2ugZnXXFVHNazzBGwrUJFnvjbnwvkvQnSaq86KTeCc9kESMDJ6V3Xy1xGGdZRvVer2UayXwhEzjwKtDBigs12QBy",
  "key7": "4CnfGWUFEWDncfeb5moK7WMAJY9SXbFs8JxFhUC2hGao15wsu1NQU2xAdFju6VrjdQRRarXLbGb9TBG9BJWR8M9t",
  "key8": "3kQJVYTR3v79ivC6GqTAmibHNp2wA31sjDnc4tHJFZ6fKTWhJYG8DdybXxeLmN99zqXc3FKA4VQHM8J15xP861tN",
  "key9": "3St29fEeU7VKKqC7tfnVh5LEMVyse9Df3JmAWTH8vkpf1X4TUN5RZ4kemNXnYUpUF1ozcXnUovtCRnPDPswJoFaF",
  "key10": "5TmnyVhEPXsHbci4u43vuHhwi8ZrQC37RtyQ5Fw3sDYtgozQaHyLDfvWLuhTsjhoKPthSJoZDLV9Gz55YHFj27NP",
  "key11": "SFEfGhmYUSoTr29BVwfLLuGLij3wFoDQrzHj9Sn5eGwu3Yvvb3ApxZJEvrSJvz49ERuaAHPJ3jd2Vt2xHL9FbFN",
  "key12": "4bSY3kWHe8rcNN1LG7Uiz7y9NcfQEP9mt13Sqcih4i65he8Sb8vCagWRLnWAMSomDaHtaCWQXBa58apncz7yakha",
  "key13": "opAxidVuc7PGxT8QLkWXCk5b8fNRvhzEar8pY5y4WnTXjebCYUXDuZViCxYpKvpbdG66ky2mGoUixJ8T7uYwy9m",
  "key14": "659afeJMTABJCNdeuMmgrTQXfBcZJkexALUVrcyDxe28cLiUEExSe9rDFB8DYtBhZPfD8H1VwaBJetpK6JehsdVC",
  "key15": "36gUrpgZajJpNDLBRFrpQSxgMckjvzzYABZxnQqNq4XmsgyFYiCrQs3S1Gw2H5aYhtVjfmWP7W5djQxMHG28UQE3",
  "key16": "Z1kiSv5Vpnh69BCxJcu9sEkDHZaiiEewkQuTXBsZxe3irtqCE6UehuAqTT4Ee3mM4yxHMsWaEcJPUJSbizE2gh1",
  "key17": "64rg9D3aMxgPLca7euUggtoKjTFHjkXMtFEEdjXqgxmmY1tsmSAkdKt3ZUywTrnEvQ2N5ACbYohUiKDeocicHkRV",
  "key18": "wGudu1i8s94G3WnskGWLcKXsM3m4yX57byExYGBydXoyUmxHoJUfPwYiKT9gmcotL9zqNF498JsP5QL2o91bVq2",
  "key19": "3VHrhHp8hREsTJ9tsmYWM3KxR3XSJi1V1f1Wz3VWhguVBmBG1PxcfFnkMMQDnj5ntYpdnJBd5dEEn92xNuUc1TVe",
  "key20": "QcUrftjZ7vqEHJaxjCrVFw8GLWAibgu6ADeFij1JHf7Bkdvub67W77MymfSo2J98iHcwCLTKAEBeWF8LW8srdv8",
  "key21": "4GQbMNdL5buAt1UDzSF9Pt5nTyP8zEW6UJd1qxNmCUSdK9ugDJxecHoejnmVR3auqhia21n6rWrCU1Wp2W2TPEz3",
  "key22": "3gB7xs5SBKrFrXFF3DX4QthYB9vvWUZegU71sNwxYEjTVhde8uD3wUu5WavMPdo3581K53kcSSnz9ThshVG9CHa7",
  "key23": "3Nbzgcrx61wMmCVVMBv16X86pFEUzVZfAZMZc7R6kbt68P4Uk7ib6u9xEiFzX8XtTGETHnjomWv7TyK6aGFhxHUe",
  "key24": "2ziE7i2oWTwYsrS7UABFnNFi6BQaUmjjEeaFcyQ7YKoKnaBw756MHRruSvkfvQ85V9uxvYsz3JtYY8dKKChQmp5A",
  "key25": "5YcgChX6eDCVwya5r5r8B4bZZ2h1unkAT7VXeuurAsPBG92rMKgKRy6h6po9NnvzDa993wpgKZyJthEbmuKfCSVi",
  "key26": "5VMxBje79LWg2rsuC48nDiqfBiHHreMBtuSLpVNGyCpcA6AwnApRGzyyVr5qShg4K4ZYvsqUh1dzATFmwTMP1jaH",
  "key27": "rGRu9bhxJnc5MXLCQjt8WYcDzpfsWD73H6ngGMGbvK2WuCtAQKn7rcVXG1N5pDV6Ad943G9g63FcNn3uLqAN3QT",
  "key28": "E46eo9hrSUv4XW73Shuhy55usk9NeBKM9qr61WksRWg9tXaAxhVTiyPkefQrGVdwE4qgdeTPH1j8urdX5g1pjVG",
  "key29": "2E8MLyPGYCznxSKdB5A1BmmnmQBcj9G6LPXbfhToeTuBCZvxZn17e93DXVBbK5cCSAHWtzDDkVVLHgyWi2tsT5LN",
  "key30": "5ahmeTaniACNRijyjUo55jCq7vQSrmaxjT8TfDv9H96GmTivdr3EmTegX9t2jWketmLGZHcPRr1hV1C3fMrj2qeY",
  "key31": "2u9aeGPFQvJuz4AjqDDsy8XwSrGgWwF8Q2ixYtuT4dHynj9DG84XXWUUfW5qpgroa3sBmpNcyW1ELPqx6c37waQY",
  "key32": "2KVPNebDrtZLFAokJhVi22J9P5KWQd56zh2Nqb382dQXA34diwRapS2h664gE2oKqtaKPtyJkgHgSuiTWBQCSZLS",
  "key33": "2AU6BXokMgjMoMaxYiLXckC9LMZbNh1mhz2RmZPM4Lu76HGaKWUp1WJE5hV6r4uCPnVgcbXp9A2dWjUPKEq3iNvr",
  "key34": "2JuYNWTrvkYexfsh9QqzUYLdRRGb21bRahdn2FniL1Y5xGLx1MhyGExW2nvUvKrTV1GGmHovVkAa7cAjADNdzwp5",
  "key35": "3GWwRrW3xruvjzqWHvu2fF3vAwYLrWrKA7XxjRsgMCCXkF3PCSCorhwwiVF6rZHH8FQdri25XqmPCPrNqc7Vs8Jy",
  "key36": "ha5os9GAe8sfxq8SY9nHPuqRNMgJssv1kQNy2hmFvN4q9QQVxMFZuwunSXdwPhvQP9sbdgKWHfTuydxfkiM3W3t",
  "key37": "JDH1mTMomVFuKtjc5EEQrbGkiBmMfy9wL8YTq283CJUhUzcUL2xew6FCqXzBkberhmYdjqWoTiisoS1iKu9pQSm",
  "key38": "56ndjTCPg4iuLBegzqNyDNydERqB49a682RRYnjRSujjTsHMwL6JKWVSCzuf1GfBiLqb3qwS4zCqoShA5ibQ5dv",
  "key39": "bJVrn6tbFhr53wAETAbN2tSsuGmukfzXfTjanUmwGqkZQ6J9imY6KyYTF7i5YcT3zX3y8Ke1qvitv8aJ7xeL31o",
  "key40": "G8GCufVdhT3fd4YUyMF4fz8PpVRBoEVCaAXmDrPMe6c75Dv1mS3MiQJS68p2FvT3ekUUxYn224nXdVp8DwCYr6r",
  "key41": "wkYPKswPHnQqWVryRmfDaS7Yjj3nvJHquFxzX6xPNcn7JroXZcU3jAGjNz8j7SAoTwatcRau8DfaEjjHRBEaCMV",
  "key42": "3vSVboMQ3Q4iLZCgsex7bDC2q8aqhCiLJT29Fi19wEMjtYoswroD2RpgV15K785mRnHV19cRFb5WYFQTJGAM7Kv6",
  "key43": "2uE1eHX9dsdxN8vqaeijiaEqMdJfPbRkPenZ5mtFW8Nxs8U6NpsZta3hxTTDVYdCHiTNs2VTaGjxo119tRzrzkRu",
  "key44": "3iLNxTC35pKhifWNrCZ9WkC2EKpwUX2q1cRMU2KtFJgf2SBWvztkJLcoFfSZjT7VhSf2XDvvCMG5en6crmPpWUxW",
  "key45": "2RMT9UrSfMU8HBopDicazdhnyEtFHHeoHbobpcfykZkrWkHZ6YfSA77qd8WALjWPrhcmhcqxg9jdHG5SKFsE9Q33"
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
