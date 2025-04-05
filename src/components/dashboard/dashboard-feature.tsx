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
    "2UZ9BmtFsUiG35QgkdUt6Zfgq4gLx3bQtdtkLZp4A5gGV2Fjwy6697ezxZ3agC7DJW6a6x1pQbKNFsmScgYrvbKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63XcwNvSAs9JVMfqtnEicCRd6oqe51ivJzRarrqHvaGHp8Sp6qK2EhAox3SZMt9iwodkxZmSyRw688HPF7NxWmQV",
  "key1": "5CRFVzQDsVhjuEmYFyt173AuUpUFKE68gbGKJpMXQD3z1BqgJfe57iLToaxaaf2imstU55uBiiLkfnKsJ4Q63ffe",
  "key2": "4Lw77g7ozvazLLKuvEKPop2fFomZL1ajkfFCUUdFHv3Mpsh9F1HyBfdBjbK3guhS5KAWioaqKBtyihmjhqEhZn6i",
  "key3": "5ggZSDjf4nrEqhz3imCxBV6dmNqMVYw1JGCUJH8cDdntZjc3zna9GP9EycwCXv9eASsLN2maqFEzmNJoy8pakEcC",
  "key4": "2zaGp9FcToNCYY3QxcpZSz42dy3P2BbXU3xFVAoFfbTbcvzJYRqZz1RCxyuAjxRSpkSL19275zoCxqcNpALazQuF",
  "key5": "32ZsmaKLfuUJ6vxZgGcYUUt2SHuChXMiAFQWymkAAupfFJKUfWcA85EdeRw8UyyjNvWar6SsFhtLLKN58nwAqjVz",
  "key6": "5regKpByqF41qQvWbhUAi1juQwyFJahEdYUhkcngSs36PWymLsQJUmtYzvcTCtqDGL6eRsaBa57LeRJwknbmxxPe",
  "key7": "4CcuyP4QJ4xZkPEqhs2JQ79spEru2apog2cpfDHdSAzwaxzkQLLAfUqYR5HKGwgHgX4VjqsK3rjAsvnXjsFxx2Ut",
  "key8": "2s2JrrAVkr9zuWLperMvMroicA7qBk4wrstB4AbcHnqVpe4nZfbPWXDQ9CFNUFh4PEsmvSuM44rn1XYJQnSRCPLF",
  "key9": "25aocbaXiFwRQnS6gdkDaqT7UtShWwccyvWM3eVWdeH5dnzDopGDB1FaVxicMpZrttjcEsnfzh7x7ZYF4gPVybD4",
  "key10": "rtczkMWSADQ4FktVNsPbGjYLrK6griKYk2VrMwARy6UEN8HpyDvs5VrZ1XgDJJXsvu8XEokE4CBAdUTPxXD53CV",
  "key11": "2XRXqK2M7Sm35yZGJFeXFNfgksrU9fzkmori1jCzYYDhLy4CskvGBR4WDt2QXVZaEzZxc3o6PGbmZJnvmG9vzqcL",
  "key12": "u4pvUEzo1uwWMcjhi97QFReqVzHMgeKo4D86s7eBEwP19SC9BKXNcgHTQTdfCv7wdFJasRTL4rgz2JYMHYv9iCJ",
  "key13": "2TpxKDq64A3mkunfF9QzwH6PWEVgKtzK7kM9CGa7MVYaN9GzWPyTfaFKK164u3eGbH8vxRQvQANT8UErs7Ln6HUh",
  "key14": "5CQbBkQPSX7QKwntKguhSCcxFWj8MJToSYctqt14deHTm2VNWh3RN2VZY6bqQpaajmoYbyfDxUsyKXTK7PXEfT98",
  "key15": "a1qeJgMFWe8GKns7UDVRfBJaZuCkAmC5xGyjje8hCVWDnBn9joWZJrWxfTPyMFHBAMXwjfUSj1nDFpxyB52FoLN",
  "key16": "3MhJgGqQuvJQJjz6UfKDHinTC3P4bzV2GfAi5f5VdNNcpT6KBvTBorfo96P2XWAt8Di9NXYfcDsUXSzFu5XvmKu6",
  "key17": "5GYpehT8m9MAESxJScyHtZwq2PGkGrDDSMRsH1iBKg4AA21UXMSPMUMkefKnUNewPgDui6QdqggYUzYuK4n7gafa",
  "key18": "31PfkaEnjnx49KBc6AJUpQX5gzmv9mEXMm6v7LesAHNn6MvMUwJWJHdpkmcbq2ZHNMxujpQvvPxZ6jChj8aHNXqN",
  "key19": "4Q9qCbgho9FSdEGLPmavvbikFqhNKueq8iaitRVPYFSm8N4Xz43xDZiUKNCMQwbJawdvLn4sJsxfEak21Yxp5SXf",
  "key20": "2UYir7ZKUi624o9kEP6HoM3uAatSZo4pttgDsTmWvnCrbkd7XQJN4w2JsBqRFbGvXKUjX1nq1Bf9q3A6ESAUejFA",
  "key21": "4X1z2nZbBV8LfHR84N74zB58UqQhFAkjjABJcgZ8EKcbCLFjQBq3xbXtKtHFtxmrpkCmiUY3AkHZ4CNHHQbUx9xm",
  "key22": "5wGq2piTpFcJEQtjVFmW82kwzkFKkcwk88Xuj4sWbn1PKJRvUyyJJ7nnHT6mpP721Yh8NSufF22fXnjTGm1wXizb",
  "key23": "4qvnkaUmXC4mPy2byJeg7ssSzdwVykbaEnpGuAfeezpSEqoaKT1X2eb3CPU8hJFEgEDWu9aG7WcRsQytZSwA9v8q",
  "key24": "2HrA8EkA79FzUUgUopQbqBZiXNvFgmvgsdJLdzKWAhXvZFwDCMnPtmBpZgV2JyZ8S44BiDjJCXGoTE5kBvmCWsK6",
  "key25": "4HdBxawz5VmrM9GtgdjTPnqkSrX4TKTpLzgXyTwWtXF77gkJbrJjgzoRXnBUdN3NjtuUfphZeACa16bWbLppqQbG",
  "key26": "29ZibTGF4pdEGAiNBgZNtCR5T9ph11ioGxjjfXxWpacHGwu77dMGTZHrWkxBtxURPpvXo43BMA7tftzSHPRasP5X",
  "key27": "3mLKBy6JevVWeJVJX56XJ1cPe2eChje3EtqnpfTzCvY2ftwaHHFH7KUW8GA9pyN8cP21VQUKh9s4WB3K5qFtFBMi",
  "key28": "hr7Ss1UZgRRKvh4ry1mzzRxhkpxMoshBmmdrC3Ti75KZZrqBTYAKtPpCZceXEcj3NkLGDbZXT9oKVT5AgftaQub",
  "key29": "4wfJs5HYhCFn2P6sZJni4mVoQCpvCLQX7SfV251wSbUvrcm3sX2Xxnus78fYxv47Kh2vQz3pqUhFXnrxNUDwh5ZB",
  "key30": "4qMeciZrscz5YpxHMcQLtEWzFZd2UQ28UYctsPgemFUHLVUxD6G8iNSK9fhzpYw1reQKGAHY9yGnSCHzMGichdLW",
  "key31": "4HKZyFxsmHFte1NMSM8JJgbFzY9vnzmSWZtYJhtgLfSs782hxKyixvpUp6LtPKn6rvuMicjKRGnxW6mvpUiJ1YyT",
  "key32": "31i98J3BXs7suvfbYvSkcRguTh4S3nytPG8vCavD5pSkCzWoXed9jiPR2A1PMBbZjzpSWEgegNjGmdiYgPLxxT5X",
  "key33": "3zg6juNPZPbN5mqpPZxZKHYe4aa5EaBDWGfCiun23oAc4wvfMAxYipBEiEBZZoJMLmBXFApKe3SfVuHtxJbpMruA",
  "key34": "UgSgPNgD7X8uPVhP2ncyxgrCM1AWZ4YUNs2sRpSMgQQgTJ7Yt687RetS29KNitDcXMiPEwhmwSJgccsFrVs5THr",
  "key35": "4AkdV2kL2WCtqJw9MD6DWmFfR27nz2dZujk9LwMGExdHNU95DWDSVyCBt8DDw1mLaLMAJLBCbfdZxMTZh14T2HTX",
  "key36": "5rrGBc88d5js7QmhhznQYfUP4UgLCQY6KLhCpSR629vw45rXNhYTaXohuUSXde1HbgZSxvgffGVvSzE4he1kmMRJ",
  "key37": "4BMZNacyZixZWEt8PgpV8f3MZt2hbMsSuZi7p2dtz4paUy1cnQhaFf2ofKVuTcyvwqkVdrp2eEyM7bQTZpvDiDgw",
  "key38": "2u6dr8rn8vpQWTj4fLJK7EtRFrY7kMuffWme1PWGeTDpAXWjR3L8xjebRyc1YJhB7LnZE3g5hNTFvgggP8XKnbhe",
  "key39": "4Hc4JUweEJzm92Z3jbCQArWyhZXUrPADttEpH6YScDmH7VUPXWRSDKZk1dQJ3svUtkBNwjdTj2bokV4nhhEoEJcF",
  "key40": "5vVkk1J6B1FhxNGoRtB11W3VD2T8i9zhAqhYShBuWCgxmP1SYRP5rdr7tuzav53q6ujRqPHu4nj22rDeZkDVkAJn",
  "key41": "4THytodfj7AUNa1rXGvEtKrxKYLLDsSM1ijGYLin4g4Dj7QfS3PujqGSY9Y5PYWRE2QqRZ4LunUkeA1HehwzTrYu"
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
