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
    "3DASwhi1AvrXvChwnhkxHkJ4QyBXL4mGN5UMZYsmkG8VnCgtbjx96vrK8YCHW4KssHhm1g5zSVvmZoRfDy4CS3vs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AHbexfAZfHAWS23Lr9gznKqZbonoJiMwqa7bvJxP5MNEQLbCekTjnbg554xjEznPPJE63f4PaHR9oRjSMy7ZBSr",
  "key1": "2YgNrFtSDtQu1eGdMYDC2fzRxiuGMFfdUkUEEdXrezCXVZPVidzqWvJ6Ck1N8Aa4qNWE3pUHPWMVtjUsnwa9f6xB",
  "key2": "4FwwaGwihmLiPBgCkvwkLLkdZ4pEc83EAUUPoAU9nScuVVX1xwbJtVxZ6iEwaNyUEJ47V33uKEsFczqVKtq156mq",
  "key3": "oyXaVDqdT7st8DUL5tERvTFeNxCiVuuwGVyG9uLs3QPLRnexvNZrV8WeuMfG3NLaD89eMwbfQG7NNi8pDzchu6g",
  "key4": "5qBJvxr5XP2iEsb391uSG7qqGSQZF8RvaN7nFCySXqiHC5NNggJ25cTMq2JDuCVfdYZbxyXHbmqnH4VWEdDuuxbS",
  "key5": "7kdLV5ATA3gz33UkiWerRZPMSXN5ByF3UMekHwZfVKr4VCaPE8VERVHzdTvci2CRrNnbyQQTSKjBSaEwqryW6Qk",
  "key6": "5KNEVdDkekztJxpacMyErnb1JWS4KWeQBE4mVMkftVWQHZyZ2utwJyMVdHYRh4DgQ3QPBs21uLXWR63Qyzy6A5zK",
  "key7": "FAHntTVD7Xt745s6AeEDntouyAJadgB5W9sr3eb3iJy4ZUXTZ1riPg7jY3apKef7L3naNAjSRdPZtJrtgLs4PM2",
  "key8": "4wkUW8BFUTVBhEHA57LEczoEcaG1RXWkn7iPA6cDLutL8oofQzBN16Zy2jSPuuNcAheP9v4tmQ6RmDYN4ibN2qRE",
  "key9": "2NnFRtVhBZ92W8LyNDDAQ3RxKuW7UUzeuAVGcypLEEoZ6MokrmyYXaSb5imUwXD1zBtJu6BHTJEP1TBKC6Y9fSph",
  "key10": "4qYddEsc17QfP6R4MUQtrGPRpz4cU8cCgWNZjKVJVUe1Sqgdh8nD3ZTFt3AtPNMUFyrBxNSz72sNJau7YJiTfmyz",
  "key11": "9NWz2KrM7pstTWEEaBAbHkbwiZZczjVrSCMzZZ6GeLWGTsymyG8viGBXE567sP1LC6gD35YmugWLKXz5sWhhPKp",
  "key12": "3poLSz56VXZSUPhLWtwhgyxrRCKfYMRHmUAyr6tJDaa15bn8oA5oA36kqeSBAHiDdUFdRt8774mtmebeHCkfKajg",
  "key13": "2CbHg5CQoK29jxcncMX2FnC94aeaAwBsbTf6ewk6afEcW8uR4RpnTNNHRwWnD9CojxfT5L7vgmyoQ8ir3MNY6DW5",
  "key14": "2GzoBjTwZabviA94bPWf5Cg9YEs1kz1VAUByzodj9zdZn8KrfMFYN4c1sDDcLHP6Lh7o21fRYWgdfFNMwNJ1iGRp",
  "key15": "4euA9nPu5aTBtni21C4Ghxj9eTjf9n158ad7TpRiE8H6V5m7FErHcXha6zsrJUFkQXMtXbkhJY3VjztbSyPF3c1g",
  "key16": "5dK17jS8pcHiuWJYZnHn5j3MtYy97VdNS9k68tcAngLACWJGVGXioCDKaXiN5hDyqr668tRjKnf9N6ufAQch58jm",
  "key17": "7S9cyoUQAVREzoEz6B9eEey8fMZgwARspS8SbsUSnBdpz5VN1cqMy3TW99NGQYWem8bSQBfKbqXFeAGXjZNjJ7q",
  "key18": "5dzz1qTffEVML8G6E9P8YLiT6FzD8DnSxr84N4rMx5yLw49CnLKfjypTkNz9oriTHAoyTZp2BbVaCeVszQrmx6X",
  "key19": "4YgJ3m1UXjw9mYq5PXzTH4dXtyyeykJKwLdwpbVJiSJXbK3QjQdvesMaiKvYPkm9WXwUYVikZ8ZKgYvzZr6U3JJW",
  "key20": "5gGzggUh8Vbd85RbCeV3JXTh6o2yMcFcYJWGfgV96nPDUPhV2WZ1vfErv8FuPbXqGzC39Q2ddGkw1aosHBqTuBG4",
  "key21": "5GxFGSz6ypyCkTpsJUu4owE5XL51GDHSgcQqrJajSh1NgeNUXVVAcSYh7nKEjBtU7pQrA3ogcP8dNGqDKdnkXgTK",
  "key22": "3Xrpt9Na2Qt6qU4PTHhjSdH2o2NTHnxGsnKbZoTsSeREgo4WF7cW4N6ATPVLAtP6toKxyfHM65CXeZ9Kb6QVK215",
  "key23": "YrEpFuidsjKWJwcxG1GCqRh48HXFtXTm6dhLYAGzZD9dXZzS1nDSJpsAVKb9sgfinXVoRLSXZuiHhZUv8N2HRRL",
  "key24": "3bwNmU4G5zEZxaPNwxnbPjKFYFZNv8TAJEHUTmme6Wr4z1wi7WUA2AN2A1LNm7mf96dF9MNaQLcCjdzdN2iG5tyB",
  "key25": "nZRQkPm6d6qt6PBLyyEygraSpZERmJSZHyVFePDbzRtq1UjELy4J7CTdwPesCKrCL9LP9LF3sTVVaskyvt6SFp8",
  "key26": "YHHEorGTgtpB9cZ2bhiTWDeQFjfp2t3Z2yKxBFFbbuKrSNdiRZyrEygpdYV7mdSymWKgGJM9ka8jiLEd51neC8Y",
  "key27": "4hcqPDos52LF2FGvBpDMhHr3DSWDpLqX98AthSvL6fo9qns8NHhvUt8ZspzKgvJz2RCjxru79Tx3cRrUH7ixZw6r",
  "key28": "5kNswj95zwj2P4UM6bnZMx4i3MbP3EnCSkNW8iimQWXF6UHG6T2mzta7cMxaNZzfE4mxLbqCHKYVW2zUo47oGLED",
  "key29": "3fcwFKadNheHWxhfv7Ew8H2CqDui7QkrT439Q3uhVB39rkbBUkk4yR99TRsNKq91cTXgJ62ohc9FsGwxqvPTfkvs",
  "key30": "3mEQ767deXCgPC316uud7K6hPGhiWa3VGZxptG1WVmR7DWutgcMvXgdYeSAC2g2GoG7kDJJekUtTinBV4K9yXBz9",
  "key31": "EzcC9stMkQDADPSyUUoyzM91wmPmcXr6qYBFB7yYeK6a5fCCdE3zDTeUvPMvLqf9yrPFmkHjSMe6gaLQUkYWG7u",
  "key32": "XFCwcuzC4vNkW8m4fgKZsi3SoCcnG6pR7dAFwpemRDdmdGogQPucmc88rsgNg1wnYmNYo5Kwn4x7QA12XcjRaJD",
  "key33": "5nUk4Lm3zQkDWq6hM8iw3LzVivzbPiWmEqjkJ7U9oE33Cu4ppK6vzaHikXLmTZLGT1bJERY96xW3dnoAqMp4ASz3",
  "key34": "4JgrUBACZ6BnnW7m9mB9roQ21AeuRs8fHEtQRdnGKPbvuwUNfTBznWFVtiW3RtTiqa7F9WPq5JXz7CBATYoqwSYa",
  "key35": "5e3G9Jc7VHpgEbtRaw1VWuRE3bfcFc7M3Lka17R8w36HTjJjLTGy6CoCaQdmSGJG3z7qv3WMBZxqNZ46T3Wja4JH",
  "key36": "4FDqy6Qm9p2g4GQ51HFY1w93xhyrrwzCMPoLEzYhwE2EFGPbxhMitj6F3RkQWF5UtUySKE9tcmVW6WgU2SqPMARR",
  "key37": "1dyrzeZzxguLPmj2YvQwJDD2CDfyJeUFNFr7GcvUxwPfuKfgmA9UthJtaoqonYWeeM2BZqrBBb6A2PukFnXZbUJ"
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
