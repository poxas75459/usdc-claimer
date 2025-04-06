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
    "upfAjmvJ5v2yRcghcNCf3VfcddpiTZ1vddMKVL1BtCC6PVKqNPsZ1Q2X4UuWLjZNM7g9x3XAYphf3T7sq74bqRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46GEchjgeuhsGKmYCeV2yQ9PCdQq1G6EN4qFLnxb3T3ABpcK88qGDiWR82duZkaGTjYvx14DvEVs3Nox2ixyhWV9",
  "key1": "3Ws6XnCFLhH3pnQnk7dYzso4L6gqAJJiBmrvd2D56UZMd78Q1292VNArmCqxSobtuGs4tobCdHSxugwPyHhBbPER",
  "key2": "gpayySw31HDDeJ8ecRQd688rRXczNbtLzfohYQAruHw1TirnMy4kBBerS4JWiozn21gDBvqMr5X4oLASc22fqx5",
  "key3": "2BGvY6KuxrebKS3LmUFypNxKwQBK2DWPK6GLZaXeFQkWoH7HAT7vxxLQjPaijyNVEWM4jMqofJLJzEwx3HMWaxaq",
  "key4": "4NHpuPttYp8RF2mKg83ikXVjGFEa57zqp3Fd25oFxivGb9sDdNWYpVZGxJzYssRXKffn5QmXaMC8UQKjBNbbAC1y",
  "key5": "5s3U9T1m6YdtfkKRBRtuw5wShhHtT5Qv7v85y9hDvgznUawM7USc1aZEE26quwnTfk3oLXNcp6aZyLr8RxfJYfQg",
  "key6": "3z1skeMUPu7eLiqJhDd3FBb4HJLqepEY567YBKzGkwtwqkYLXFCermYsR1AZ9uVaNnF2Wn8W6a2LAqSHmh7kri1b",
  "key7": "4v9yUqgCD2F7yttfpGVDCHc9zMppApAvratkmyHSWvWxB4juRVZssxi2SoSv6BotEGAuzDSbtCEG69jV5MMTRRhW",
  "key8": "5QHSeQsiya1UmuXG4vKKQLhUNvSyhLwg5NkeZY7XbM3VDHEwwFhL2ETL3LuPushPy7T8qcYiypaQWKPshS7tU3gy",
  "key9": "5LSZkS18g492ocEDnamokXZWB332fA7NjQeaGEEafsNXqa9xn837UC2APr28XwHgYBWUSv1ieSQCvYzN2fSZua3E",
  "key10": "2tgBgbVKvZKMc73Ph9Z1yJrcWmNfvQeh8AbgQvmAJSif5SXfAVE9v9L5tuETHv92uWecdVLbidJz6ANQQYpdvPQi",
  "key11": "3tLbvrHaLsPBMMu6CWhmg7KPzm7qbbJQ8M1pATC7novDbrbfd2xTTFSxd6Smvonqrt2yPoREDWFNAeP52LAVTbUh",
  "key12": "vFcSi48EBBjPtXvYs5DTSNmvyNqvWJDWe4VenmHUv37wemp5hGetTq3N72doRUPLdTPpWdfMXUexXkeA1jtjuHd",
  "key13": "3izUtn42cHCpJVGTkLB3GGLNcyXc8VzdyhPdRyMx6Mg94bF514kRxaKFJhj6HM6XruoPc7BNENsDZAgfQ79oFdVb",
  "key14": "P8iGrxMBcbEKZAbwiPiAWwLHq5XsHTVRViTcxVQZWfNPxCGppeeAXWFT9R5ThEQHjucx9oSRFdnXYA9jLbaAjf4",
  "key15": "5R6dvYGFJQMa1f4F5hMSMW2TyNYYrkqM13vbELq25Sd7arXcgTGWCCfnY2wgpoZgSqfrJv9ypS6DUogc93WSPPRr",
  "key16": "2jxiC88jKpoGZdppBttiqi5hWJgjjsKGzPrJvoEPP8WtViNUKg3E5J4u4j1GsgniwxDvnzuwpi78AhYBEkEAHZ6q",
  "key17": "4WeH1KG4WyCZ2AG1g7RuL5o2dDwQyyDaxWSaETbngR1ceDFTrX6uC3kJqA7rMf5zWA9JAfESuZdFfce8beZAeMzS",
  "key18": "5T6WmAvAySRWG1cLnfugLm4BQPakcDBN5ft3ScuHoswHnuYqqjG6cXcXfWju5dL9t6m2S8PmBtRVEZTiC3dP9HEr",
  "key19": "5VPTj1ms4vgenuXUdZ2GX6TpRyRiyNKtBCoWWzDj64ZkyGVHUQr8KsSffUn288xN4PqWnZPZk3Gv7JSozsxnb6Qp",
  "key20": "4Ee5qbV6qMUF87jmVcinTEx9ZAQVTzPDETCxJQ9DyWSE19MLE6YL2f63qLsbBgrTpV7XrBA4DcTPcT3qcu84NCAz",
  "key21": "MjCxkxPN1h6b4sPvWZBrKGztv8VmxrThLpMoRiXcPRJ5NX4gPQFesuyiBKVvvNrHc2wQFvivm5hF7RWEkLjVri5",
  "key22": "2o1UgTbVckoZCrQwQsy9GDoZLqQFMsYuywSqDLCjVhHXXMwYdz4XcmPtywzcd9MPqFkRtcSfBtY8DjhF1g6XFzm2",
  "key23": "TtLTQALzkHHYf67Pn3VJmDNV7CkL27pcXsPsDgRnJpn1aKUD6b1S8BsMoYjsxzETat1a4nzwRk1wyBbf5eogEFA",
  "key24": "2Az4Aqr5AD8aGe1w7PH7V5zg6hotLgspZgvuKTRPrmwRXWCqzPeLuKKtqdSJvcD2M4nPXhvkDZVWkNz5vnUwKkyn",
  "key25": "4EhPwrpT5ZBbg4QTZcqrNzwHufUK2etRyq4HiJY49zMYZShUCxX98sSqUVZVM26nMqsCkFdZXgRyxnPiV2vGR17H",
  "key26": "4Z7zJJ3qoPoKySm1iYzKTbRDpqSQdC6YaQ225tPemFSLQTbJRxGUYFzLMxH9zWMrtSpMTgwXHeE2HukXFvMy4mQ9",
  "key27": "PgfxHPvMHJsXDrVHxzDntYLsGDuMbtBXsbzBEmTEcFH7x9k45pNMCNRqe6TnFmA6WMLwMP9ho535LV2zmtYFGWz",
  "key28": "3S65JXt3TwGE6bV5CofLYA8DT8fKeVVrfPtBCscNrJEtPpyYeeV4iuTzqVKANDLTG17vYRyMi8dsHKwxFsJUkkys",
  "key29": "4tq6xbeGaX5XkhToCMh3vpJF8r3UKjDkaMQXcLUr9rHU5A41W512W2Nf5ub7aeMuf6nnekJvjudHyBVPCsjSBfxU",
  "key30": "62rsERAkpgTwpBxqLdfyruRjLrevh8u1kafpiNhyPf9ohZGiRyRTbTyREZ9ZVfiiKHNyfspdNtt17bFg3LA3UggY",
  "key31": "QmpeVSAanKZstPFEzhWPZSZJyY97jL9QnNCqx6aHzi5ifTp75pugdUAsSvq8A4La3MHneZpcfhxifBg1g9Rr9fU",
  "key32": "2qwxDYZd5aERhcCe16oanEgWz3SxPNdKfwqGZDBZkUVTNyb3gSQdrqqafozWfkSAZnJhoL9X2Xiyfnsy2Rnw6Ytn",
  "key33": "4NM83EVy2K9tzYtLCRK75seLphtGsaURdQxKrrqPAfYMchdPPtwZq29brUkfoZZSoYvKR2EGHM5jNAJ7AU688Bu",
  "key34": "5SR8XXcGkLPzp7AFz3WzPe4C41cGhEJRFTf1ZT1JfEgT2yG4Pv4n5m45TUb6EBPEV4ukTvhGCrm5bqCy1uGkT5HS",
  "key35": "UJWGx8jbPLoNaM3upPx6NkjGSkKJJgu5TwtTAVgkAvcSEsUw93uEuMUiwStNa3FCzfAmsj9bk9Pxm6ssaWqiDsZ",
  "key36": "2EH1UZnxCd5Z1GDoWiUFkQr8ANykfiuNmrXqGmwVqvJ55LnepBvQYh6P3KD1idyPcV7ZN7W64jCiF5ddQHQgCV1m",
  "key37": "GQ1z3ViWxHMYc1KCxJmQLkdzF35Cyu1yxf26cE5NaEECZUii2WdYjeYMmzdieYdyYNG5xRJJNqG8LaPjra5bkFY",
  "key38": "4kXweya4subAbaVtqrpFfYiaRTLLWro8WwazZRDAZghRKbJpJuNmbb7WoSSGx8SsuYBrrLBxdviGfsjyGQSFJqAm",
  "key39": "3DgmiFnTYdenVRTus4npcPCwZnWuHYJxH1jbyuQbNkYCnUmE2ehQidmVqQVcxZ5CXYJAv8W2XdMV5MGraPTfpRQf",
  "key40": "5p8ZS6RY7Tp1aTUCheyVfaYHzHuVdRkbbWD2RJBngrjWkpb4htwMo5XdgH6ECFjfMWxVXKSsrx6SeTBrr8ZJv2pk",
  "key41": "3a8grK9g5ux1wwTj696ptY1mcTZ8HYS8u4aLk49yPzBs3U99aG7kWWc1PfeVzhqvzvJtaC5ZgjAGQnQXaWk4FL9b",
  "key42": "4cXV8GEoPT55L2S5YFjaTG1L2yYqSTMhNE3mVbvvtXCwgymbfsWRqS2NJUDgrz1vKcdi7e9kMBb3rbR9uWRsRmm9",
  "key43": "5cc5PhTWBbHnif9ygBVqRWuU4LHm5VHRYzeLEu4bSn7LNFDcLSsd8ifthbG4pQPbSwEusGMadK95JK9NkiEmd9sq",
  "key44": "PzVjFkkCAtQamL3Jt41986kcu8mP4zpQLoENAY55BqKd9A42VDHaHAwnBm6PtCQLWy7oUcEiMDKB2RvZEQ9hBQa"
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
