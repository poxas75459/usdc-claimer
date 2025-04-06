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
    "3HfuhdNJa6nGGsQEp8WkwHFjjMheCEZyxntduP2cD8LhXH6h4ugPfN5F6Ngmr3WvXdsdvyTuE8e4wPmvZSgCcCEw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42EkYEHvr5JZkSrRDkM6zCLfR31wni4Fchh3X6fxqxHxhydp8H6yoQ24JhDB9mVd2KqDFeXC6U8xb1RB23ma6vDi",
  "key1": "4ERQCVRgNVHztMdP9Mezs8F3m59Nk1Q54TT1iaEzZdCMaC3yJ7arPLaeoX9uRCJbnjpqCsj1vh59NeFTdHjMBPih",
  "key2": "4ApewGfEN4MfcxaG2vdwej8qcvnX2a9MjBc2g2zdmXmcHSvfhh7RabGAvY5QbPrfvcBebJv6Cemm8HsUgZeDTyUh",
  "key3": "2ogRX1utnQdwabnCWn3127UBYwApXpZNmvw1es41gT3T9nZqaakKwVm6Ha1dqBrbVrpWByzeuCwNYs4V9TgDMMX8",
  "key4": "GVQaR8syptpfxayqdiez2P9jR7HN8bRYVTpy3wwPcWQHGpR2UU3SyJaYEvjnM71bamivgfw23if88ucKZLWskhw",
  "key5": "LZz6mVwLpmkr59qwyKQ9VXEcbyHSq4HvK5jfpaZY4cpLYnk8XXcYJaJB9WiqwTbhfdbqJjBkRWb9w21HF141XLA",
  "key6": "5NjzUqSwhjbQLXwFrdHs1UknuJtzTsuVat9UFmuatewJ7D11YZDm4QF3gBtNpuZ46QPA7SSnW2Smw1L1wGh2TjUd",
  "key7": "2mXNzX3nRh32DWoq1fHnUWqFmD3GwDUAfnXqb69249LAVXrPothdPspKotLdUjeyQDQGiBM4pmfrfbzV8qs1ELLu",
  "key8": "57uist1RoEaLjEvQdUVZTKen1o5EgdzCDUVVMgXSoPDckG1Mszx4QRt6m8PNuEZqiGEpqQkSSnQ7v8meoMTfprmt",
  "key9": "rZ2Arkq2ehGjms9FFfFyuHptDN4uTiP29X3E3ZabNjm2WBvqWRm9wTkAAaHZZKJCdiPQnwjcXm4sSDeDiWFrPgZ",
  "key10": "29Mmmid2AqvcwwoaRtrfRE8rnKkfGut76pfrFz1PMKkD1B3ZtK1TywUF8VcZBrMsNP5oJQMbxRsa7NauadD1QhAx",
  "key11": "5Z45nrL2qK5GWQYgoduz3oW3jHmy3qv7h37zCd8xsNTskppPP3cEba51qHwxiQhuT3iDjjmRpXEvBy7jVYpHoeQS",
  "key12": "67j6ahaGg7b9KeuUuiG2hNncvKL1hGRebxGoBgWuVV47nxgLd4JRJeYXHfLGbp5DveN6Vp8zR5Mv4i47RLqhbTfd",
  "key13": "12tvvzrjVqMB925h3ncNv4FVeuAjVCynzQYb2gGHgcFUiNiFKBQk24Sh9NpWsxsJ7REZtizfZEf2aikDQFrWaMX",
  "key14": "4BAMJuGoEAcQAaqftaAT2EgaMSLtRZ16YUhfRJ3s9Uhr2DNwJT7wUYvpLAAMRdMWKuacGPexK2g17NKFJYsdckZC",
  "key15": "4zFEetJptAidyy5MfaoMaHybtjWMQEAXyvtbr2rFmMHVbAtwwUxStKUqsDAJnLe9EVHE7ZpshFDMcfi6Ue4z5aT9",
  "key16": "3dB3Gm6jCh19CirTs5QXWM5H23QHdqZ4YmYJfbcvRs3dDQHiZt4tdVeYJiX7QFRdup82d3CkZvRBXRRbeqdi8Pt5",
  "key17": "4gCqmCV51Sv9AiNWfaC3bRFGzGGrzf6tFxein8eMJq2AEWiiiuFYXcBQtsdQ76qMPMUKnw7P9fs7rSvtxqUXQqoN",
  "key18": "GCQfPDLUNCipeUYjWTdDGU6r82zhVwTVHhpeVg5CTsCC3qEYpSMt7c1EzqsfohZX3huBTDycVx9qQzUWsbTCer1",
  "key19": "nNkMfTNdg5h7QmGFC4TaatX4TzhodX7w7g43hGVSMHzdXz6PXsfouXMQrsDq8V1wwpFkRCb5RAVsX1fqScdB1LH",
  "key20": "4D2ES7nUu613twaURebEwCfgXw5aJdyaZtymsdtdn5AEpp4rxL7T7pvd1fD6r9GmYkTxqR6ksDkpJedW65McNYjD",
  "key21": "jLyXCzccKG7HiSG3Ujrki2TSDzkg9YpxXG9bJCtJNsSDhakDXnPxhRNthHR4nWcn5oPXoehnZZNan4ULzwNeD4M",
  "key22": "43FLEZJjLzEzuLJFjFRoxcZCDjZUNX4gDFKxDteKBZzZcErZ8cadr3Evw4tdmSdzEdp4Uu4viiBn9DgrNsrr4NTr",
  "key23": "3f7ugzE7zDCDyoNUqQgoVQHjs4tdfGm8DY8xfeLpa8V8MSRxA4TLkT53K4nTKeiJa954Hz9tXCNauJNrm6He5Rk1",
  "key24": "5eGsV7e9H9r4GoUZMHw3Rymssh78w7udbpUHX5FskNxJu6jfh3r5jot25divPf4vqeefo55Hjo8k86L9SRBY9S6V",
  "key25": "4pQbmrEiBjYzYdgzJwDFW4jWdb7eq123fh453K6gcD2Ppap8URSfkrJQpCeopCyndwWgL3VoNgTWn1be9arMA3RT",
  "key26": "2QH1CBqP5PjmPrNjnvAJwsVbZXQhTjte5SKviEXuYgkmCC8FWSb5ALuytLBThpGPtka87B8wki1BmucMSjnWeGAV",
  "key27": "4M9PjhfUsVwCPb612ryggUK2Jj2z2qgPRwDKnviugJ4ne1tTr1XeMLso8u7YqJrSvn15rV6qbKZNfpdfWgnPfMBw",
  "key28": "32mvFmxAxsPX1fYHRo3cWNrRHvPAoR13urZQ99TFKKFqFqcj7igUUQWov5uUYB2GpiTiNv5cZM5ZQ8GdABtvFd2N",
  "key29": "p75q3fDeXs2D219oAxhR5AdKWNuvbQDAFirgLSuC1bUPfhdJXWiRWu8maCfnJpBALxyCHcS5mkp9JEdHS1tpAp4",
  "key30": "48DmxWFbCFz3NbVgzhmBcJTDKAUL7zkAx9NofYPpXoubriGNC2N4uF8VMqZmB16FUhzSJFeGzAzZhXhxxLDsYeTq",
  "key31": "Ev3SaRiQ5a7gMM1KreoeXvtSWgRSSbNfCk1vLN9E7VJoGfTmfvhxaFH6AsLFLeut9XcKe1no29UTZUA4V9rwHWr",
  "key32": "5YJzVopSb8X3qqNpvYfRsRJQJZGJscrMxSFy1KbhkbxYcwsHWBKdoxfpLHwCxksCxDh9bb3RYJhxiR8VEV6T9u3V",
  "key33": "27LBrY5cGQU6S9m8sPHRYK8Bjxu8Gobrr9DFhe9JFtCPjEmPnsDPQYkqGc5x3cnwaomrWTTtPwHyeae2b9cztMjN",
  "key34": "3yrHDyERpbuugxUkxbmdJn8EQa7nNs1UFebHZ97DkXKfnzp4r4azkELUSFH7DjG1KVZzwyirhRJBXcRXdKBdcFui",
  "key35": "59DA76iKN5tAQUijnes9M5BPA453mHFgdBN8K9EykF4yc4ze5xv6xr2KAukS4ih6EaT1pM4v2hVfX9XKT2aFpC17",
  "key36": "3dczmUgZEqXW1zFFzcDUqYZvEwHzEPNUXwZVNvKpNMsMWoLV2jHD1WzRrm7dJdV5fKZ5WfMdSXBdaJz7Cbfqb7U",
  "key37": "3w57vpXHwxoKgC3Pz7idquCQU4ECxTLFY9FUsbxtPGbYSdiXj94BJPLj84CJXEBmqJNoZghS9WBWAqjDP4KdEHRw",
  "key38": "2DPspkzTQHZS7Fbbe2W9hEZJtn6SUVE9PYU1myZViKPmwfQLQRtmmdby2hVS4czvNsrb8UawnYSJicNPpZuNsUA7",
  "key39": "44VdQJ5F689ZaHyYFTi382Re1KPgwXWDafTrY8FVVjKmzruoTEfNnb7ZDpKPGgcBMREwZXuM7syV7BrRjRLEaoLf",
  "key40": "3RNJXT9Y1T7e8S3ExoyWKVpEtU59ahhT4GXMFd1kZRZZLnYQRVDq1cHfXyCYiD36P4eGyg98hFiGRShLw224o5ZF",
  "key41": "4m3oYdVuD5zy5eApdvwmxMQa6d6iqtVYQoCssqDnNTqgPMSCn5nStYPsjvPVZUfZamVKoTwHN4DpRx8HETiypU8e",
  "key42": "5cEdhGqPEUryvAacScPfx7Fn3BBzDMRoSuJ5Y2RXhSvmpAvJ6fNUX9ePjDLc5wC3hZiGJt29pg77bLEgRHs3wWvR",
  "key43": "4xmxEJhGb5LHTf8qC6TcRFFDBQNx7Ujx3rKgdmZbDhNoy4ecYqubHPSPEYqUNSTWVetfiZLSMxDWjQw1jf9RtSCz",
  "key44": "2V7PDhFKdjLJ7Au3pWv1GLbKRLA3aLUq86fZPzcaGycRea3j32APzVhpQ9arPGu9cdpVHz3EbDByhAVDqpTWsinn"
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
