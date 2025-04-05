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
    "5wDMhT685wrz6zACHxn3R9gdTgeJRjvYPjwyKZpNN6URinEp8iowzDt4GHnWfsHR4YbA9TFkQpwjDL7tZHWx3Kvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rRqCAZ6tJr2GsRPVyiLDuZivuMTEztXsE4QCUbuvPDaqXhCCfdsbJDNMxPxMV2BD9rhukbwp1Ee9utCNrDFbNpP",
  "key1": "5GBksKzLo2zXnfq91iskMZSzHURRrYxwpMUKuGYmqYPisbV6KgcdQYqmSR6ApJDDgiooXxA76oPgxjxfY7FbLLBV",
  "key2": "3jDgXg4rsyXiNUwZ288h4y2y59yYdtumhDFktTfJGhfrfcuJ23h9YZuqV7GLTYg6DMd4Uep7G6PkVjT9xkr6TTah",
  "key3": "2QSNXWYZ5ohjF28hiYsCGMcwPKoBrEEVNrjSg5tSDt3UqT2USTmwJJ6pzcRUMomW5Tu43p9mTT6rzYymoMw3p2yo",
  "key4": "4A2ENMmywu4qQSGQQKATohaptrZN6Gsp44LVCUW2QHB1CKHf3useiwynsAfZYcFi7tzJgZvxWGZVzbUeNuL3GxQK",
  "key5": "4tXp6abVFY8h6B6DUnwPVrL9v8qjLNq1tYbMM1nYeHoaCFzwaogGrpTidBnCPMwawdKwuVwPkPX9LAWYuMcqGnSM",
  "key6": "2wjiE8eLNefQtxtFfjX382gEHC2zKXskVDfCWwNcEPWyrQisp7HVQUyHKXbVy1F6LMr1GtiynbNeBgTK6jJ6rUq6",
  "key7": "4GRkGhrhPhSa3mPqAf1rhi94pB9cPzQPWxZh3HB7pVn7rfJwTggW4s2bJpSAGEjU5mJcBRRJXAgXzT5gP1F2DBam",
  "key8": "2wEC5z4daxLZ6tstm3N7NS1yPe78aYFxeWhvhy7CzKi4NNe8xoM21kj6cSTz2gVhmPMDXFGmiBbtgvXeQBkGGVjx",
  "key9": "34cjUZ7rpfrxaJVeeTF1Ki4QZ4ivGed3NiGzg7NLmQvrTHt3JzuECxtLmpL2WXNcnjBdjQaAB6iQU8FWbCsTKGfo",
  "key10": "3troM5Rfs4Q475vSMaLe8VMDau1XVxN2Z85RLWmNo3qAJ6c1NyaqPp1JHbkEaYNpP34HLTnvn5knsvrrki2SGT69",
  "key11": "62NRCfbh1mLUZ1utrVgJUgxdsfTiXo7rCTmpEWo6ivCtarJ4NVorVd7cJD7ra7KxaVxGvAt6VWb7DYTQBQvvMkaV",
  "key12": "4mQc7Chd2U1jVs4d9rwUd31t1MwXZo67nVvFeNoau4PYRC4C82hQXYn4K1wAEkc8QzmVuF5fboW9sv49diyk6rit",
  "key13": "5fhX47cvPENWgYcL1nWiXBxrMWpgMffHmHAv9X84SXCTXxDuyAVd4QkeUWMajWcAu9UNkwFqfSVJVRfsvV1iQYUV",
  "key14": "2MXAVUiSxGe8FnPLRXTX73RiLmCShTb3LaYhwsWT8H5KqMRb6fKEsLbK2KNYt4u3RJ6sc5g1FqsYeySiWHgYQUp5",
  "key15": "2TUmsSnf87WYtpdFjNsqN8ti1hJNiyVFP5zS5DJsYYJQ9KtWxfYF68bJ5FVtiL1YKU655ihi7hkZgMdYbq1ztwwV",
  "key16": "5dn2989fZpJZKN8MPRC5Dhtr4739VbD1fcbuQdU2RXWmmFCwyNJx9XM6QCUjh4Uzim5aLhb3jrV4YGmovd9izaRP",
  "key17": "4UFhZibB2j7FwisPqe2dVFfpy7Swrk3PQDijCrPtXgmqM5SSbVL8Nig6iW8JfDiMExCwoVwsTnbVzSxDgp8JaxSi",
  "key18": "2igYK2VBpTJWSgHhtiDmLXSdqQShLNYC4v9rFH34XqUp4Qq8n4mY8gjuZsaTVv8o1BfMam4R1cAFjrpu8ge4u71r",
  "key19": "2HRG46JbR5Y28hsHWRpGzx5rrggQ8PotiEDAVcdT4szLd8ZE8V7qoVqtrdMWVU4sBgN1UThTVabLEH8MUYscYHtd",
  "key20": "2PotJWzV6UcDhdicfSHfv4tEWcAxQDmZcGPARXSEkcYrncejjao2YoD8st9iGkYpH4ANJDz6n7e5dueipaDWLf4Q",
  "key21": "3W4JNyF6aY4PCZZra28NBUP52saW6w2GghwHVrR11iuME8wbmoY5XntVBSbp7MWqsVEkDDH9JftwQMprn7HcVZ1i",
  "key22": "4oc8SAt9B3P9q1fq79Ju7CupA85vZnHRwrdvVSxLWAemrtLjk7qwVxfA3iqj2xPVXce75tmqU3eVnjHds3pWxfFQ",
  "key23": "5dgMYSVwzzrV7Rzaqc2T4oACyvtvoxPCpzknCMgpjV6GjSKjufFVo6Eu1cMpeYUd5taTx8hJrH5UJDNsDqW3dofh",
  "key24": "2KuYPNVJmpfAbFpgo7psFGvczXriCdEwfrUTVomVfgnzx1bhmdHzUqhPa8sVWhvrp2iuZUt1UxmsWMMMwEi4fdG8",
  "key25": "6KxaazpKnVyxnbvtfdHJ6acvZXwiK8d9Mgsww6X4Qc34ZnzYUeeNo2DaAsEupYmnCLKEpJcbnn28WazkYhz4uLQ",
  "key26": "4toqb5DjQzCzNQohVEGWcJqMCtQw1aUtMpekfmazEVM1aaMhtVGuJ51pvL1f6QNxWYJJTUHRDX2QwZaugpUASBsk",
  "key27": "3JhXVxL6PpbX2eEvMCo31Rokj1r1DLwRS7F6hR2kPeLB1DhBwudHZuJHYDfQ3D5thPFvmu2rVh5TyMngkzn5KyGM",
  "key28": "2WjpnFsVzH9QYto7rMm84h8WXdVjB1DXFPWqdXhcVzVDorcHCk6sBXbixB6PZxabH2TcPRFfR3jXtSE6bF5TF6ou",
  "key29": "3jvozhquuiVD3aPNzNdgNvm6CVBk3T9UxcLYUdUPCfosFpLGXGqLqqVGzxRBWkJTizeduTQoJdNKWYcHtQRTKXb1",
  "key30": "3Dcg9VkBSFLnZWARRFEKNUv39FsCt7LSQcK6xi6g6KjrfJrjDg7girwSJ13NhCggeAMzo2dmhXEUjLjvre4cGfku",
  "key31": "5dEU68Sdp3pqx9n3Dt881i3boEnvJsg6b7GMCWMeEBZuD8ZUxi1JLUVvRQ7ADA9LaUgZo6LaVZCgUNXh2eEFbY71",
  "key32": "yggJnbwE526gDL3jy7Fy66Gd24DPSxcmYVQjLYvokk4Hu4XvYiT3HkD4WmeVa41psYUCXwgSdZpm8pmRjsgGP9F",
  "key33": "2S7G57CSgv2i1UgoYx2ZuhV9KuRTRKbfwM7FzuHnaYjGgCeA6GzcbLpvSwFNGqidnzsEK8uWBtbLgNRnvyg1QPAr",
  "key34": "2PWDCTLLNE6xZfTnFm13SatsekixKcxTAp7TrAp4SbEL5otNK323rP2XwxzaTS6cm7qCUUFMiotFgtkvdWZdB8dz",
  "key35": "63heWUTpCbtabvX2Rq3vRX4GaAbpRdsc2vmuPPUPczWuyFtZZpTriR3q4u1wsDNbNHJpaoRhhdLJMxFdsAW9EqXz",
  "key36": "28MQETawyxevkCetqBP7WH6iS5XSYHsW5gn8gXe6h3VRzLEurgmQtsYTU1FxpzET2weCZBW1taFuge7x6VUkbpXf",
  "key37": "3ozmdR53iWD46t5ZZwAAyeNTDmN2aCNfQeNMBaKTASdM5vDp94BBnwzbe5FtLDGedUvpwDNK3quf78TjXG2BY6ni",
  "key38": "3P8tNqXfdZnrU1XTRhG5Xbv7wReRh5CS6Fbi8DnjvPGngHhySzhDxXRYa7CqGdGbtJJDowvaZDPzqQkK8TEJtU22",
  "key39": "2N5vDTbUSmYmZ4SEdiW6Bxp7rkSitc9wruWXr99GfwPJeoZ6tZfKxhTKjZE1KfT13Q72CXiVSzYBMm195HCG2s8K",
  "key40": "31y8qcVMSna1vppmv6KWo5GqJtkBVQFVaXJdCibE2N22ExZ1zgDZJmzJK5KTXgyTw1rLSVh1kVY8dPk5TmDUJYwe",
  "key41": "2upCkz8uR1MAqefTUuEM1DairJviHcRnST5E9DxSZp4y3STdJWu7YCt3PhFzenaPP6kb8U3PqqjZiASkR5GcLsao",
  "key42": "pGGCQn2Huuwi57xxFQQevmYvDjBqyoZd2QqFp5CyMdWdtGbUsZrRigfuWwXApayB3ZN9UWq4AAXoV86d2qKCGBr",
  "key43": "4onnnPrtPgvR5GswcEZ7dg3JucxGyAx9u1RcWaEU1qBNjn9Ah94Kf9kSXxJnwvmF8tsCGdFSFBANCLDzbUVeMDVR",
  "key44": "3tpUnhjv2xoRCCyaBocp5JwW9wTeuuiSFbwHrBBnnL914wJ5cYSe7s16XvYffY34JRDr37GeZp5pzwCuHryRmbFr",
  "key45": "2L6uygYqnyrDEuvGLf8ea2thU6wAjFXYd98hTFEwekFNB4X9vuf1xc3Ki5BTgZ5oyfxg5Kiovri3ogCc3rnpeeAS",
  "key46": "2Y2eQm7pwdrNKdoDewF4UaTXQ7F4kNon2UGf5y3UbrMzrMfNFWi4D3qYtLtrTxbcWZZ1a2AVEKbQnHwxXioAkSMF",
  "key47": "cRK2QdUFfFdZCire4JZMoZBE2dgm34PrdR1an9vEpEPbQBTWQE6aGFsyASomyK9PCtD71xMd99kSQESrGEbDKjA",
  "key48": "27NsNUNHVnQ4iNE2b6xk3C9FNq2xTMwiXF6uH87bTsvdc2ujJ3jsEYPFTH1rV19dsh3NiRSVQCnercmD2Eyb2F5E",
  "key49": "2BuvTAu9avd9M1CkniHRCDJkfQ2bx2oYef26ZxNPaZn1WJSPx7MJHdfrJGz79qBhoFpe2TZHfpp8FxL9EQSqze4"
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
