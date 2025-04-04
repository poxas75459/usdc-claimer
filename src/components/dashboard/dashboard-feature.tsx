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
    "4ALfZPmfrgYeaUc9c6FmTiKu8DdBBTZddUVhoP5TotXPHRevCVniY6npxndVhbXXJufEmixQm4DRMXAbE3Mmc2Dd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52n4wJoee7UCtX34C5c5WdfqhLLdhY7Zvqbz6cYQcB6TH2KaHdH9pVCDwbsCyqGUDdZvVNHcpVkbFrGoNxmmQNve",
  "key1": "2JJKFxBo5Lcv1Rhjy6DAk11FhHVQQyrxTKcPDqc8zWbLf4WnrsiKFCgJtT2PnK8Eha5jC3DcujqxaGfNuaN4xzn7",
  "key2": "Y6H2eTuTZKZtW6juzBQEvDN2wZXojhEjeFMsgBmJSup3ge4iRUvrML9rrFpyAhjebGZ1NxgpTh2hG5QyAJhFiP4",
  "key3": "4y8uBza4Zbqp1JFDk5Rc4xX7JrrVvcaMdCk2D1UVCwVpge8rdSED3XptaSWDwxR186FCzqkMP5S5Ypx1TmVmPCfK",
  "key4": "4fViQNbMs5dmDctqKo6V5v7KrAm9QLaGG1W9LkP2Gi6VNaRgwq2T6X3KrTAqHWnYmR6Uku8FVP5FCXVSKyou4PCy",
  "key5": "p1buZQpb6fTTu1NU5Z23o3bZz3aWetW3BM2VHmmTDVVSJPdxMXR46vAfrrcU7F9sEScR1rCQqL5FP6F6cMAEtAb",
  "key6": "2E8rPiiLW7AYsK3vmqDmaecZ594yq4w3p9gKiXJxYhNbQR8UzvV77gWH1oncNAayGbtcXcszuPGeYCvvzwVZoRJ2",
  "key7": "3pHhg279gzBeQFZkSWTiieyVyM81FvLiWd8fw8A2TxQrBxKY5v5nBfUBU3skv8VCvwspLHMZmz1S2LLfyQ5Wpku2",
  "key8": "52zhEb8hZ8KjpszjbynZBHo7VYVVFsyGA2caksbvN5mnbmkuBorJdm4f1axjeQNz13MSaTcuWbNSsnvBXmT5XkqP",
  "key9": "36W3h3NLDVcrN43NTfBUtBkszT4aAWat8JrXgWGeNjkjWUSGsRcv6FByG5tHhC9SusyLL6wditD59DWKaev5H7Gy",
  "key10": "4hxFPSXgj37Ak5SqeFrWmBSogH2XdPpEpVWcWejhwu8y5UQ6jRXHJtH2ERHgw89DV4HZegKPgrwDoSLadvWJw1ei",
  "key11": "5nuzWFFC39mAhK6c39YCreUVqGWG9uJwchtYsS1Z9feMoCLJUopDrWNzyAxPw77qRXwQTBWV8zs298f2KDkXZYKA",
  "key12": "THn7GtJJuBU8g6xg8yrgXNstC5pzHeY5ce8oh8giVTmJ6etqsi5gLs4UMxwvC8WYCvn3mdSqxdhr1Z2wkZ54VTJ",
  "key13": "3HmNbrFNL5BDe3XphzuMm7zaDeFSHEw7YGqh6GJgpZPiPsu2TiwTfwULibyENN3jjk5wqELLjV52M2hShYLAGfyG",
  "key14": "4vrGjoxEE6rdF328tHBgMjk64A2TxHjDjuPM5HuyHY5vTV7C5DKBidxDNhCw2yZBafcFTP7ntmsSggSSjtTq6yJ5",
  "key15": "2pcvYpoXL1jrLNmxTFrUNwVpo9xBeyTsm7C5XeQSNeN7UXUeaDsPGgACCVjgtk2C6T4DZvWxFJAmpdxdPvdpqkm7",
  "key16": "3QMLj6XxcPzVzoUXL3JMLYmfJEPqBVjUVo6J5hUjnTMtV31TAvEYLe1LYBWKJA1ejRm65Xt6S63y5TF1H38w69nM",
  "key17": "cMAFSEkJbp9wrHR5ZZFPXxLPenzNCcJMJc1ZCMs57ZpAebYB9Y721pJuoi69KYKHKXgWwNpj18Pq1LfGQfyLJ5C",
  "key18": "2a2PSFQFE4XE6dbvjk5z2uhh9djYByWaNNVXvTnLTxLYbyXrMbRdw21E4NpCotTxwSx1SsWJ8KhzEgHZWbdXCu35",
  "key19": "ZweFbfJaTbVwHXN3FgdfbEu4zi7N64rnkpUMYvaPnzwnMZ7JGoiWf6Xx8Q3dDh21Xc9p2ktNYJndWeLUKpfjokx",
  "key20": "4Wuc27LstwXYj1eGEHSBisF2hyk9taRne6uw5PUU4UtbpTqkaz54GsDdpHftSGCkigw74krwiXhnVpi9t18qxmKG",
  "key21": "49SUtAU1SsQ6VErLfWkqaoaxJEoXRBCyGQRDTYn7ksnT2sQrJMWQrJeeqmZ7yoyY8m7EJXd81ogNkw4E6Qseg4xx",
  "key22": "2XE7csSa6Mhj4GgqxfHA37J1arwrMQFcERw9nyphHhY8vvCDBsT32PphFkyQctWyskyZERJ8SKBMpJobbWUYw3Fk",
  "key23": "idhY8NPXkeR3pSkGowjinYUz8JvcdyeGTRSajKTrL878zfxkgehso4R23Ns9CBeV21CaZCxAHrpftxZmNQ7zt57",
  "key24": "2F4gQvrCdpRX3MMy92RTwgoBmAD5cpLQy1wHz3v5K1dWvXbbLv6UMgmngqiPdRkTJ6rNdnhnRUUHYaSttiSLjdmv",
  "key25": "5ehjmFkcPJJVjVyEU6kcpyW6uxGHxEczotkP6nj7ccFcvUT6L7Z72UUngUHM5MYtDksMm3tVc8ACgayuL1GJHokE",
  "key26": "3d89jsDtLZ3jbEwSyp9wUyW5bqecd8c8pSQvjvaSbgx851iTjNe2eLwHZo8E9pyiF3RmYMdzPWJoNPDN1whXPsmg",
  "key27": "4GGp9gjp6PNTUwghPZ5NjE1NAJBR6ou89WQTJ9MncqDzw4MgjBb7WhDLb7Uu8cTiYSS4eqMJ6hemExyAKerE5bJY",
  "key28": "5PVFwYBSJ3rX4Q34Nkw8fx1oretHB4q3xE2FawdAcDBhrpv8FPp6kCEynuqz9hoNf21C42r1LS3CdkDZCHuR5tuh",
  "key29": "4tpsuTP2SsmLY49EVa9z8Dt98mHwCYuYFitP5RiVjfqttyZPwhH79S3pU9KhZxKbr2vx8W35LQDcqP7JYncQMtg7",
  "key30": "2c6zo4pr8eufuhaWWUfQjgenLUVmFna8QMe382oeZ8hb3vwqaubDisyNfr63xEWbDEWGkL3szi32fhj1EwmtGFde",
  "key31": "2RQnAh8RNaonPBiEu6oTi22hsE5jcjTxHCyBXCVkKQgcdgQkice6QVAP1mXMN1EDPPPf9egJH4vVcPPYTZ9hBSU4",
  "key32": "4SU8ZTVrUBTKMt7KU3UaC4FJn5wg94A48ZYEewd3NTDxNjudDD7ULvEtXHLTTS4Tj4gSFgN9ywbqHy9aKHFrdyLA",
  "key33": "5BsNabQdrNjdQHmH5QhwGvFgYMg5nTWBmsi1sxN1gNSz2qGWyoXiKbKu1ESgY34hxGc8LWjZ3ACzVrYrxyeKTnsz",
  "key34": "4L5SxKhgjcxYBK6w2Ddv9wnLwZzhYfdfoV2pZaTk7ik5XFXdRJCFubn7gzJfZqBesMNtzcE1NEv5NrXBPhBLBBzN",
  "key35": "5LGWPKsNjDsxLRLdLYy27anmo8hcR4zJrPXSw1Lq8VsTJT6hL1jzorZ45zakaLWMWNZk12YocLU86bXce4auBJY5",
  "key36": "4stDdjw6RHjks1TF2zccmjeKxVbhdV4VdYkckUDPxrABQzhNxPYmwXNiQeN6u8ChbKvrqRwBk8QjjaiP1Jc4dqLg",
  "key37": "3cxpDeCjRnu8uMUV2rNLtQ4rdWzGeja5HkyGtRSF2Anm6kmMMdTvFn2SNcbSkt2oD9PrvZEzD9vFCJcGomvS8fFt",
  "key38": "2bNM1AcuDJcoAuYvubRkYFDBRqsyorHwyGnCriE7NGJmW7CH84RjWuFs11gDe2HJYqyD5c3eoZw33ekNGHpBuMPT",
  "key39": "vVrKEyXxRcGnqe2RbjgEaWFAaCMCZSh1pDy1FAhVZW162uDmVYkbKk2QS3qR6aEcKbYE3VWrRbXdzpPnLuevVio",
  "key40": "SVEP28xiahBqKsv9jEdeBuGFgRue4TFK2FwVY3WuZHoM7gCzueKWjzitwZU9gx9Ues8XEg78VoYR3ZBXF1zDVV1",
  "key41": "5F2Dq6KHaGYKPuUdtmPa1DsK5zDL3PY4kfTFbzjjzXcshygzBp2rCoAUUPUhMx4xazVryed5pZE6iLHviCDiyFzJ",
  "key42": "24ECyUrBgMQFmrLKdr4t2iu258ULMuP8bKQ5uD1WAzbX1uHt4Vzghyz9KSzJiDzNxMPuY3BJYGQGzkBnCCtMzB44",
  "key43": "4HPATEffXHg8SNnHeCgxiYL9rWjxVXMPNpuBmC1CLMi748zL3gJecQdBBtSXytTwT6vQpei6hBMHPHut5nwEATun"
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
