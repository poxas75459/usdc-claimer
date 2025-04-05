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
    "bNcaDvq8Vf3zYSycgt92p9CjB5jj3yjS9vzcCR7MRiFhjR4q9SC2afjBh2HdQrJyGCuq9zkrbLbAiTaVBfaw34y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vH1dj1ZoscBcttYciqjnM467nFppgAwyecCep3PjnAFTxMZSgWciEqJU7KedYCYcPvVeM17PyZ6sZcQqj4JPBWY",
  "key1": "24ymBgBvmU3Tg72RqoJvsidGeVMWBrgJDgpzEo2hEcQFVogghzx8UtV1ACUVmCTfLaE1BY6oo7cJvnmSNR33qAQF",
  "key2": "5VFmcd7y8WhZCC5dPDJSn9HzMPts6vpDkavab7T6HUySXJFFt61NvQ5X6Rx2dD7YA5MPSbsFacg5uqmnpxeUYp4Q",
  "key3": "29t6Ja1BZ4Va31fk32mhK5p8zNZ4NAveTuEi1W6np9BqXkChCackW8WnDCFCYaxWE8vGHjegUZD87dRw3VzY2BwD",
  "key4": "5bbbbFGt1MNszHSRMv1L4kzQzUDEwkv6ARw72RMoBN1mS14QM2eh6U8k9JAu7CpFHZhWMuyzFETa7X6BKni8Crmf",
  "key5": "3Hzpod7gCbwYq8ByrTRH261csTiGZ8QFddxFdbN6KQSvsaUzBwpco7VnXBUoNY4iFA6KQ47N8QUTyyCa64k3kguW",
  "key6": "5zURFEjYqSjADGoTBqmeb23BHBvkAKL2ZZ3cbnohamvgJLh38FopHq5HpW518v1iuFcmaF6tJKBRocR1oKBkJZih",
  "key7": "jqbn8i7SV37bSTuu8wUZCwdFSpTGXFnV38ZWLhvYYpQtpG5m1C4jvwRgm9KBTH7xAbKU9hZCH2eFya2DYY8sDo2",
  "key8": "5G2fZGMCDokBx4MmbZbtf5aXdYC95YdmcCDwWiyH31iXr2oyffu1XDcwbqikTqQLt4EHLTYhAfd9gV91sA6JHh4",
  "key9": "5MZWY6bVNtF9D94TNjYy1isnAVGfgbQiohMLrxhyRucZo6P3eGfcPAGpFb8k9wRN1KS8jtwb8U26DzvW14P3dVJx",
  "key10": "38QXQ4macizUT6mNyBRKjGAChmvcgWQh3jCA8NveToiQwVSmQsx78urUzch4YX526us8MHP6HQ8nr8Vh4tHcNCxG",
  "key11": "FfjpDWHx2WQXekje3s2amnetg1EyL9s9nrgHDiUWJMekH9PejnTyJai9zdKxTH1DtZ1XPWUsZ5YxYqJJxj3hKvw",
  "key12": "3DwADgK7C83yF3y2mXkGdM9U1weYP2AFjS7fAvxML3Q8785zBcF3rBpVUSBA3pDuSLBLWAYmdHg2rB7LZiWXi7LJ",
  "key13": "uWrR4G9MrPKzUKKr6ontjXsPaY38XBeHVDi4UNSeBTFbmpW57z7Fm6WffX3j2Av4ywijT82Lx1SUrKoc4ff4KfW",
  "key14": "2dXxQ7KAuCZJdQBpRWxYq24dgzkQYTgvNumriodVxbRU8yej1dakSvcAFxhGmxY7E2tjt4oUfUirjpsab2QC8jNV",
  "key15": "2Ln8PQaeaYwDSnGWZBpum3yogarFuCXHgiTRX461oHtTaEcRaWyEAn6ys89SXaR2MCQ7yP35CdwGVNZbZeJPHEVH",
  "key16": "26uC4H8VHf8xPG1cFBdQeGQyffoynQHR81yw1aeD4EvacrNS5cqMAqpWkYKQq9EGwf2HM8CjZwxEXWnDDVVWdexC",
  "key17": "4a8SA5tEioSmKprofKqVMh2kYTKhed9c9pFN37D5mW9Uy2imsP4j6GVQq43JJJQqNteaG4yn5MdW12ppFaWG9ikK",
  "key18": "MEanQigPxb1dZHov79i7gtxKKMAwYPC4SMFZmUSAKgZ3P5wfqvBu17h6feZH6hEz14oywTpy7z4qFuYMHdeLpaB",
  "key19": "44tNCXmoiS3PJX1ck4FZo7camvKVS5qX8Sk1NEzHgk6nLSRUu9acsjSUZe56KWTe48jC4BzTpuzxepw8nX6VvT9r",
  "key20": "g8F7jq3z2R3RVWXYdEZSXw87y5LGdJ4ndry16syiDCVxnxuFJKaStyimZvJvnDKZLzJK4SuBFyqoaghi6XDdTuh",
  "key21": "3mcKWN2EKpKjKkSy6Hy9uavdB66vHbq9aLsJDwZuoiRzjXhScCTZ9oBSiHQC1xuboWrY1WGQaeA7sMpCf2T1gRBc",
  "key22": "3EXU81hqPed7xT1i2ZfftBmZG6hxuAT5bT1s7E9hf71AzTzosHoK5KFoDisAgsvA1ixBapi38pq8juuvRWgE1hV6",
  "key23": "3ubStmQZt7jFPgnSyShCV9sCNQnvcsEXMrWRJUmVgxtwVVrCU93d97SfsMdVjGuUkriFSX2Xj5y47kobun6C7W48",
  "key24": "3VwcDJmWebjHyVWLFKdXWAAyjzYPTwv6qVxXt2GrGYeAK1ve2n3FXSMbCmQYX6AsoK2aD8nwNUumuZWXKCi5tdQX",
  "key25": "5aYjCJfRKMoDZmTmWwHgoaeZs8izuFB59jfNDVYSq6zCuEnstqfU5B87TtkVfSJ5iSkhGrhVB5EAva3ygr91Papd",
  "key26": "F54UtQZccJJuzPvKctmHoZmCJGrCeTfsqWtMStaeW1H1f8w4FxuMZx7Zre5U6wwizkCHgYSzq57dJESoavD4Xn7",
  "key27": "36pLCASqRXbLfeQ4x8SXouWPSYPE8RSXxTEwPfJNUC1sULDgmXcSaVHPmzbPezXLKEQbf8TCHxYUeUUkocSwj6h6",
  "key28": "4ddKJBxWADe1dMPP7RYdFeDXfdVXGLYa15M95oCx4mvzWTHntU5f9fWwgBUsZNdb3zNmA1L5QbwTemyppwzWXRC2",
  "key29": "4gen286HPfs2BoUeJJQHAt6yvLYSGfFJYLpse6tHixZZoYQpNZWuyLv76P1TDgbzGaDCgaJhbKt8fyx8zmV2mMkD",
  "key30": "5kvRPjQe882DA6S4N8EEfUdAWFgf6e9u2xdNigrc61o84tjGciUAmmyH6ixCKy3UZYKg2hjk1vNT2Pf2YLgfxZ5N",
  "key31": "2GCVzkadZ1L7ykNQfqBa4j6RRNtmqn2AHZv4cgkdZBJVZYQYRRRoJpg7gHwfNE954RnNFTQD37hEQFTZJiKLwXbL",
  "key32": "3mPyQGALjSgnbe1weaGNW9JqszipKFpuHQ99A8qPEpoAWSvpD8FYYyjpH6hjhv9otpHw5R3CsnN2QcDEXgqtaGJM",
  "key33": "4M763BvoLo7S7SzwzNAboGqoeb6W7wR4nmvLLABYbzsgqk9zSVCt37bzkDMxTn1SCJqenDfkcWvqqkD6dcbjgvaD",
  "key34": "24UznEzJ4Gws18nzeBHjXQjMJs94hMJUdL6pWudPwK9mYsvFZnUZDrZ35RweCL3Fym68ELVuXDsrBdWMLHk8ujsS",
  "key35": "2y3tu59Gnhm1FtAhbxnFj2AjMa8EALV7WaiZyAaRcdiAUus6N46zFnozGSrKqvKjGF1szUDRbi9eMVgVFUczaTRP",
  "key36": "3Ykq9ZDvmAVf8Fkmz97bp9htEgdMqXR2nr3aH9Wz4RoBWSRKcCdyU94BJpwzPySdM4RL8J2eWqkQXKmEu1EesECB",
  "key37": "4u8ayRCbmPKhV5T62fBZJ7sRFyk97S2LhDGt4pZsyUUQXFVvDr43odUYb2fEUThLibMDyCFZt2LYVqAHGmtm3o1h",
  "key38": "2BCipBnkiD7S9YrKssaUEquQu9KAVQYxhhdqkvZeNKhqEzQnc4zDnHiMbdbA9pTskwdHjmLkrhYZoeFbfnX422pi",
  "key39": "yh5WebZeSj9dYgcH4AXWcEHwwHuYY6dpzZADLP1d4aS8HzbaaA92zHpmGCLE859SYnEd9x41LYr3AcGeVkZYJZ2",
  "key40": "4iq5hhZjaG4YUtWgr7jq2zhg2tVR2ghjD4zwSWkP53po4Xx7zi6UcKEtznzdw2Jd4BXeQKcfVsMiMNiqdv3JqMzB",
  "key41": "29SFTzGUtanETS2Zyhj6BBf48BZDuQKNG5YoNDaxaraokH7Y3Fn8q897w6Q1oueyryPKL7cG2AeiwtMdjW9Kg8KU",
  "key42": "4LmAv6jyjVzT6pmu1QJoFSUQD5Hf3aAAuC8H2w1gjRAobmsJ8r6E5RHyeNSKdDkdZHDZebrs6z3LkyvjjSbitPpA",
  "key43": "2SWLfZYmXXDJS7UNAwENMBmvybmij7GRTgxZQtarKd5Wbrmbbd3Q7YT2yDXQQ8S8vckzaAsqZT5LvqVezXAiYFWZ",
  "key44": "4Nx4sVRyPLkYeHuDLuAiCmEARkZM3L1tJNqVcYVE1RizaxfRtruSLEe8GWjYsVjfY5q5R8WB97EpLJ4AsW3vpf9v",
  "key45": "354rpMcSGqTrEBBHCNNN8EQGwzEbU53HDEYm1DXqsXMCHJRPedwxRRzS92FPTbDYaK4Uh4M9ATMy7E1R4f8CNW5V"
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
