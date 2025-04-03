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
    "5tYzh5VQbS8cRzNkeQdZyDMv8fAVGfs5PUFmGBEzMsNXpk68ittQ2vf8gCAnsq37aCgEjVhcdy3xHML3MEGrvK5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tky89QZs8NHZ5qhrKsSGDMvZoM73mw5emNLHNqjJMzEMMWhi77uKtzdjqfJ7cvYUmDsHvQqAjmFQ1ArPZkNn4AM",
  "key1": "MNp82bH33AjmV4h7YDHob6W7DqWDCF8TgfVvyBQaUu7K6nhKhJrsSVQSYpUjCSRi6ywd7LNPwhXXJZ74pEo2KE3",
  "key2": "5ZfsyMDPfRKyAuPKXJ4i88YrM2fbLGcAeoEjesD4ExAVrRY2AnW6j976gycRApjNs2ckRxC9LCKRY1FRsCdPzAJA",
  "key3": "4vbu8vspdns7fq3LHp4RsAz2W4jssJLHCHHx6dmgzm97g4pAnCpZ9wmRwZnbwU2JSUCgAi1ft5Wot4oerU2yaGhs",
  "key4": "2eg2SXBVBQ27ZHK9C9mBV59Cxac3HyW7xSZres4F4PVnfK2CBRM91KmvFjT4LLGYhFrGWYbMNfETHR6bzGPfB6HQ",
  "key5": "5rgEmAjmRBBo3tJsK98oakeLGCDEZtu59fQpSWRgyQ8FTsv6dSXztmXJKHpbFUN6YoSKwCfaJbcXEuJSzUxZL9ko",
  "key6": "52Tha97VYS7Us1zkMgb7tF7DmNZj3aNrjoKsJL632qXRgQGH2g6jq9a5bam93xqjvDKVr54Av5HGD3vZw4cMF1kK",
  "key7": "3cefPzkTC8D3tgn5omYZDmbNCn4UxW2He9EUyYjSpvNAuK1aXk8vF9Cp2F5gMwGF76PJX1BUaC7nvmHUzo3WsWnX",
  "key8": "zgckGE5ZNLMjDi2x3dUknFKn772zJhCGEBJKvYVhxZzJzECEvjwX8FF2Dhq9sPNfQPJdZnsvoo8P3MYqjnFSVPZ",
  "key9": "5mj47rriBK1fHszcyUNcGwEzhNNoebtBimVxNvfKBZBRfxNtncJvbLwbpWXMmdFLBBGTCm29Dnum2mFwjHLVmEBE",
  "key10": "38XwrnFBzBiWnutesQGwc9DNJqUXcVMxhryP8z3YZyNRUVv4kBtJXHbYCL4Hqf2eq4gRgnq2QQqY1FJqGbKuVPMY",
  "key11": "2kP5rZY1PFrkSGD5UziFv5Wt8Er1y67pd9qXmCgo7dd19UcXtaSRMJ3teisr6kmQrtwHp7HA7msV1Pnnh2YJasXT",
  "key12": "Bsgxr5zCr12HoV3UEwfcYEXNPTYX4cZ5Ti3rRtCEdgmnQT5f7aY5bKxTNMweCDP4BA8Dyumrre52ruXBNxz1vCB",
  "key13": "5zHXu8XJhMqr1W7RvGaMWC2tjeHWxL2Rmv63Wrr9aY4tHPxTtrCDiqZmjJPGNPv5vpczy3TTwiE5FW9L3s43PvdC",
  "key14": "65b3j4mHmkXFYgMXkJY6HnguiU5obL8AkNAkMbrSBcjXZZZmfSDFBk1avGKbqcLEkFRsx2LJTP6RuexKqauJDY9b",
  "key15": "348XFk7FJmnk7Lc65zZRFV1exeTaGZQrroLiNwjYNgcP9mTufe9jKvG4VwHnW8VztrZdspSsndT4Jz8PaiieYF8T",
  "key16": "2QWWYzyrk1yBrA4Stzt1Pkx48Hxj9rMkka4DhxMosSHpYPSA6RMU171KHvRNorpExhfcueMCJoeUvPoXT5kzX8rW",
  "key17": "CSnQof3iwSs2AW5a6BkWogLn7AWc2SgiAkpZh1cBevJv7FTm1famwbf3Gisi9E3sdzQwCTR28t5EzkQ9feKdpB8",
  "key18": "4W2gXWwvCSrzFezsenTvometMaFwrNZ6VDobq76Hp8kEWAm6zmbqc8QfaEtBwKHSN5nYBbCCkwnadxzMaTmuiuCe",
  "key19": "3kQTDsX6dNZyVarAzqb5LTEvvmARi2F6YcCTf2ZPj3TL5uGMnDxtrV671ofGXR7Z6D8pF1TorNWjL1EjuLkz4bfv",
  "key20": "4Gw5uuM9Xn7Git3aMw7h16EAHCJJzdCzwDgEwhHFeMf5rG1dr3EsmcryMfrwx2TRwNwYSazzPAeyxyn8gVg1fG55",
  "key21": "27DSnWMjfcUprrC5cW6aC6Rd2uo8xyjqchx22JQDTAWMXBin2hXbpGakCe9ybAXUMBmCPTY1V1DcApyHPjtcsrQJ",
  "key22": "5TLBc1EFvmN24N7wJEZsDbS8A49NszDuBAPrxwuGbv6bm8W2EdrTBfpSt4rGU617ZXdk5rX5C1Pe2a5dhWkpte8y",
  "key23": "56RKu9Chtfr1F1EfX14kdBodwb7ojAmesUKH1HJJ42iEmTA3kPVP835SzuF4sD6tsHwvwZ6tWvubwm3CHMV2dHZC",
  "key24": "5pz5dSh5nLYyQyXZvGStTaF1fEtVPc9NpCqyys4uPdkX5mEWcjZVgPfZG2HRnqpZcQ1T1xE1RUX8oRj3L6U9kU1z",
  "key25": "5deDPopUKxuYzzwvk8uRdckh7qt59zDK4rG8RBAKtNiwGSXyYya8HWqHgLdi8tmQj6UyMrTtkhzcVxSovpQBV1qM",
  "key26": "3gVfEKCdhUWtQwJYtixHW6oypjHsXcA8DbddhyQj4tRufMPcbzMxUqbknLj6qdtjM5mmfJsZ7KY6e8MdRwAo69pr",
  "key27": "2MYUx43dtfAFWeASoPRFP2yYwRPhqqvSmW8TVKWSNoDHfpioThbxGrqQJQH5ceLdRzRTQaThw2X82qVjWiuGu96B",
  "key28": "4naFGE1iocoDzoJPokmPxziJ2TiEguZjaa3zpgbSwLt8A5X1365ecYPnFH1P1RuaC2TCBYf6REe4uqhDcYpuVKTN",
  "key29": "4GqwGEE3zyRPqgXc6TCBD8V49hJmSmLzkBwsehXRbsse1pv48ydqD9tfZVZMokMm7mu52MNQ53rHMJ5uGjguTEVn",
  "key30": "67JJz3SNsWZBvjME1bFXhfatcyfin7wBK9DeAzKgMhsgpDepBtvu3mR32eexofYXVaAFcAFtq2q3h8VeG19uSMG2",
  "key31": "3Gu3CKr1Y4JNY9bDWTPLKAQPy3eNzF1D9RDezKiHSpxJMkZTfLHArY4LaCY3ThmLA4yhgHAPtWQZDRcVXnqSuu8m",
  "key32": "4PhPt1haHzKhGuF9qoR8ej9VDoaWiVnfjk5T8f8R7sR4NCG4sah1vpq4FY28icZrntNHqsUGJ4pd9THpTKZUVPNr",
  "key33": "WiiKpTVscQmBcBXm3LRaGVRh6cYf7WnkmP3h1dtvAoynwWsjCoouutYgjygq1RRQ7daobKBwJ22PbQ13KD6a5nz",
  "key34": "35pPL4zM468hAYLdkHy2PTFxjgD5XtRdJSnh6MjW9JMbpNEwHnY2F6YUf7wS3xkKYPjygEYqANcmESn7g2wArteu",
  "key35": "5wK6JJXEsmSWiFE6oZb4SWCx2YrnHHmfSZGLdE9YfMw3BVT4AzsZwQ1PcCT6E1Pyapim3R1oSwdktdXa2krfADws",
  "key36": "4ymeLQeVHDztu6LiBMErLgDwsqe3cTn4Pd24BcXTHazoDvm1SRWAGmh7ajY6rCVkPptCmyQHwG8yrC3ztGiXkQPk",
  "key37": "2ENiPjMZx5KH5qsFK9t1DuG3oCuy6ffXDTd5eiJfBTMazwj7pTVJfJNFAVXdoAPeHBcVhzLj6UtUKgnSbe8ZbbPy",
  "key38": "2JZxZHBs3XjUb3NQ6fBD9huT2sDpQBbX5ErzC1P5LbSLhm51hs8HtFJJv2PtmuQJgRngu6aWJsRHNPMi9Q3RQvo9",
  "key39": "3srhA99bBKqyLJ83jR9AgMBfTxjc7gKr3LZMBT4dLyWtzm2rSj65MLTzCLDzHnXu7hGntzELRt4gYXFRs5JdE499",
  "key40": "8dqKM79p24sUPCJiubhknHCmZoM9VwqNmUEXvS7FkhkeccxJgCXYC4cE7MRrtzQPNM4NJX4aA5osMJPapyGUBZs",
  "key41": "4kYsToEKtDRkabFb1i9Qjrj1kC4Xmgi31344J9tJTGrHdEwNJKbe5U4ndatMb3sE4k1bMrKpXXnHqGBXehUYVaLA",
  "key42": "3bAPrMWmPf8sKwJDi3fJAWgAnYSiBwvPW67ipAYRxjQ2eUnbCfRfvi5j1a6HiU3wpFmkMvt447jYU8GogDLLhL8w",
  "key43": "4ik2s4rnyTrjdagMFoMmCGFa95T9V9SBerjAovgNp25UNRC1obXQgLZPSPAUxfnZcwWFuMJHVPv37Aq5pKTpZAVU",
  "key44": "xmtYBXtnc2gHc7wxVutMGQ5pedmo3NsSAkcDpkifz4K9isdrkb432Uxaaw7REy5q2mo7N1qFBGoZy9qKQRGiBQR"
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
