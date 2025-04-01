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
    "5PDdovdxLYbaEEgsUvSaWuHypUDBEpXRyJBYdL2DUZAtExQBL7u4iy3rEBU5THsBKj2MCQqcsAGJYGtokRq4Yhfo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wf4UAZVH4pWVLsozJmTP6rFBHo6erry2x9PXQxKbgbFWtNDmuqfcBs17QYmuFmHrh7upaq88vxHDeAxkzVLijxT",
  "key1": "4B6VLEgzw6kkWSejMr7Uj4DNwisqqWW8Qta2zjapcft6ytBKGHQi5u5TjXgRoHkAFL9quiM8yzcQoxGRs8LYFYfp",
  "key2": "4qUTAFPJ6NAgren53prFfaRtwK4dbN6JCB79hYDMfaCn1LTx4prFzpK56QLJYkYqAjsU8i6j31LpsippcSrcHF4T",
  "key3": "JoHyszob9m4529gi1cM7T1EMPddwr6Swqp6Uwc3PZ2vgUuaBijDqsxGgZokPG688rjH1AkEKrybiT6zBbBHr9x2",
  "key4": "ukYYPyjX6aWmVwVm69cWMpdRzuqoJyTMjb4St1r9MLRocXTKj6EhLKSYdRxtT5yNGcoqAM3xwEHZAxWzaofEiTc",
  "key5": "3qAzMQyXVSNp2mYRN93HgpXkfr69gAHUPPihd3RuAQvQ4wBy6ptuWxnZbZnzYae3LpNvZdCMYjQ5CQ39B6jTmdG5",
  "key6": "4pu8t5jhu2vN55DUMexm1aJL3ciEmwq6wcC9WRfDvoCq6ieCH2eddwV6afwowNjW4dnpbZPc8u8Z1p3uVBgTET87",
  "key7": "2tyhVhZs6MoVojjXH17aPdMEpJHhegtLgwXPNKoFrYaYqBUBZ6qXxnEd681ogMwon98AAaAdL7LEFHgJDNYY5WFy",
  "key8": "5CRiWFXaLmwFVzT5Wo9SUZKA5aEG9E4FL6WnqPj97aYZEFCjWExjYtCsiAXhJyCXcTgXakdG2Qtdj9x35aCSTNor",
  "key9": "cQwjvancxxhvpM377pP1rc8o58wKhW4af5yHVwtg9DyFEcFR8j55G239a2FdK1nsEPxZeQAFRad2sigeWNFuT8A",
  "key10": "5QGuwKYcHm9utDKx7CE9nfdcz2kp5QW3DZtBWqLHfET5uQNRt6QfBRFCHTjmw6ik32bmm4cqRgxHnnpYeSYFzsfg",
  "key11": "3muermyZjRNX7KJ7maBuQPqsodr3dzbR4Fb9tqoBJLYQLveqwj2LpLGCczf3p39gFdCufQoTg8246eqHWgPt5HPd",
  "key12": "2t7FYb3KCbbAVEDHEwqJpagmL1sb1968ykWUU9qn4j93iHxbTgiCb9pzVZsfP4b7vdRmhYcgnvzXGm7FHELPfV1o",
  "key13": "5Y9p318NsUZz8dztpDszVVfjzvyETuKWu7LmcHPcFV6XduqfAZexke8iZEZE9KKusZQog8p9kNcyHQX6HSEdTB7R",
  "key14": "KLVYiAJorjEaC18rcwoBgC9hNM39EGJt6jZaqAxMWsMe2WkNmB2UGvvmLiGrQniXKpwvn9C5dReFr7mGZWzjnop",
  "key15": "3uSRHp5y2aZdPKT7Ty2uZfS2Vs4iWXWQcfNKEtqjGkeHBBCFM7adSJPdKPJAvdzJ14znbxGf1emHvH5wQ8EX5kgg",
  "key16": "4MafhwjErAgVJWJ6nqAK8TmLHxt2aAZ9URDUEaA3jw1xqADSJW3SsREQ3SF25oAU3rknyKEoPwVvhNx6oJs5NiHG",
  "key17": "63s6VMjdbcdMG3UD8QNVix5Uqa5cghCMvc3cuKebD2iWboS64gf6YP6nQeBgLZDxPvy8qq99gMWyycU5spCYa8kA",
  "key18": "5xAAzG7eQGjBaheoyMh1iMhBNv7AYYCNbGnMFKrtFyrs9vXSxG2E3Q7uPk1tpodbydS4PRaSCGSs7bRJYo3ZLodJ",
  "key19": "2Q2Xm1hAEa9rtzFQewzvZ5pKgs4jU1zPoovncjYZQoe7uuYRBL3oTUTS7QtvGHVCaPb1pqrS7hTGxwoJjhA6Nn29",
  "key20": "3hPJC73HEqiarLLrEMnkibyh2Tjjk5Ktucx8wM2PV5irW4gqMpnRroXtPh6VtP4RTjbdWgE87taTWLaDHoHhqcKW",
  "key21": "3UFc9VNPH9MKkHz5i5fRD9LXfwGCKDTUQRJzwWuDnPryYZcEceZfV4JjX7FzwHYJC6iUvwc3u1RqcjagjJNwwacH",
  "key22": "3jrUUTA9Xszenn6wZnpAnR4GeeFwrZ11vcFxZmsziYpKTTTeFHQ8TeMDYUkwmjrSrSfYGixEgJuetmjNnFDsycgp",
  "key23": "2ubY4m5CKa7XW9bh4Tf9dBBwkwUTN79uEsBDk17gdKCqbVgQX1PoAwbkhoXkh81sPRoMP9zUPtrpiQgGvYzpMup1",
  "key24": "4zJAEFwZJ3FZ4isjxMa7reqTBBkowDXZcR5yHj6y3X7gkFJRbHPqFadHmv6LL5W2YkzMYPr13ERktybtUxGrZVHf",
  "key25": "4P9hi2STy9nrV79foBQedXiGev9bjtfhruq4VM1NEtmHYppJJrHUp7pNUaLN72CPvYJcLTgJCm8wA2a2FcTLksnd",
  "key26": "61qJZJjaaFWz73AebWiaNcDhRyZsxhCvZBbL5KByKFrGDQ6GbZpZ22oct5JMV9web9tMpdJV6NM3zDcPcmoh1zM7",
  "key27": "3iNDx6qeV6vvA6sxTUTfb3e9oApjMS1sbrn71obvJY6ymLzbbNpeCVg4DYqpmgGrZXaVSBUP39PXs2qbPnVxXgVA",
  "key28": "4DNGgDHh24h25WCgsPHKUoCY1dgXqUKFoMw1votNkCGUNDxyzGmUad1qHNohbChFWDnhsNnmwny2RRSqKAyZtays",
  "key29": "5DTYvdawmdwj4UjraVo6iVomuUV4YWfXo1En16WaZA3EH4eBCtCQboTq8Qrk5K2ciQXy4YMzTKS6qENi845xuBCb",
  "key30": "62A7FKiRWG1EHhBnQ2NeuhGUVRLkuA1wFJEXF8ghp95ZRUSrVYEy8miEQAt75hgPzywhq9649g6EzNa1iEWCreqY",
  "key31": "443muBRV1iHU4ahdQBU1kXEq4KzuJ5VcM1oNWEEFjiwNPADN7ycN3hyc4fyZjwsFrcR8wcEHXhSVAumjzL3Kh4Ds",
  "key32": "3ZgE1GdgnpBTY674REB2qLUvpDnB79ZYuPdpx1qsbxFMVaqWkdNTYTj3oWnPGvQ1ijUSZkF9v3rFUkaDHZszB4xf",
  "key33": "4SyYES9cBQcZZdiW2TEKyaCTWvAwjKiyVi97TBdnQbJHv2pCEqwE1X47x2aDrP8Amrcwe92tfUSowwhGSzKu5EdG",
  "key34": "eTZ6ajEd7wxUCmghc3p9nW3KsizQ2eqo1VdVdkfzxhV3t8ZUAtfjKMtdoAkXSypkM7LPAwqDxAogBAeEve2EGSX",
  "key35": "2C2FkA7rxG8DTNJo5r2k8FwRj8syb8hUdj7qDo9c2r1tkiYjoX2opk4nNsidMuZGbMcRKouNxisy3uJ2RxNWiPHN",
  "key36": "2Fq1gzwv7BD7WMuxvL9VxPSaTf37ZpseoAt6c812y6pWVSB3MvYsmtStTunUZXtSvazJod4rda5nxq9aCH2JtaCx",
  "key37": "2e1CUDpPfxjA8gxZd1p16AtnBa8ZiNVd49LVrXush9HZLeUywWNsVMQC7R21nLYM33fzUgRsR8ZsMzx371vtjjPf",
  "key38": "4ke3eH7nt5ow4MgYj8Voa7Wa98Kzhptq62GZ8yE55wuGY1QciGDJhGMrt7x82o53vXJwN2Yb2nbCWs3UMnBajG1N",
  "key39": "5x5RGHcheP2WHYboEvBLj51WKMv7EuBfKRgoi3FbfpSkzpHZREuoHkTLvrEzgehg5xgHjLkUHMN1Y54tMh2SAdJ5",
  "key40": "5d6j1x3YjejLCE6PtdfyMqERAwr6EaFtR1u7UxgR7AxPGYNGNQbokzAd4Erth9C4HgXxPYPqBm31RsPctbtVGd1E",
  "key41": "373BjPEJaJo1YRhuAaA51BFshzYr79PcYJVeBNrHEyiB28H2QzqGEefxAVPwZWWnwfWaqwizGnJEjVdzBQ97NgPR"
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
