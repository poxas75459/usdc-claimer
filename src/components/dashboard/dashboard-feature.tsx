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
    "2ffexUFBa2CMj9mt3qyANybf7Kv9W17qieWbYUrTAs23rv579sT6qLdzbXHPcYNjgTYowBFBQKN2pR9hrpWUHd3p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K1mntWnXWrKCPpCkojnwwK9zCGsRUTkkpUFmbE59EWGhyjVrsgoC33JogwWQDSXrVy4FHGQHpBq1368tJQK19eA",
  "key1": "22rg3hg3avFv5BqZbUWX4z8u4kBR9DiT3uKVEzNvnJJGAFSCRWbrEPnTGXQuecQUkbLsqfK5bEeFx18DzjFEJxbA",
  "key2": "Hho26pfAWcTQnRwKZdLs8CRbriZNekKR1HufWzvaYNkpL2UCmWfDt8S3beicRkRyBDKzvaYyEsBu6og5HY3sBCM",
  "key3": "44gHMC4homZkZidrnrgmhJR3UoeqcFBAT3Mnh4rWkoH5ouNAKqC4vG4wF3FHRSHt4nRjdD7uBxCKzBfvQMbVsZDM",
  "key4": "62r4US1ADE7RuyCBX7v62hHyXvzKaccbP6ux3JwqdKfhFi26EwPhdTeQYd3ywPYCVze38XZhXBEydukJBZR2k9T",
  "key5": "2LFHUm3irXxBALykxPpsyYLem6gv2JvZ46jRKuCHDs6iPnMM56MN3ckeQTandtTbQXV8br1mTg4LpwT48cBGjyxK",
  "key6": "2GwfSvBsQyyhRHrfXYTJ2cvQZgv94iYttyazcVW44XAtF9wbazmsE3yQAyzvZNCXo6ez67feXZ4ZRTukpcmzacp",
  "key7": "7a3YbSVKtKapD5ySkicXrZbqjNQ2d18fwBqgQfW6JsL8jbXBWtAFs28Cuvwr53YxcJxyAib4Nh5ZSRr8rwDjnMg",
  "key8": "4DiRCuSDf4EbbNp6zg87xDjzMgK8DS2yBhC9AoHD7cABK4PY1FKAkWQoTyVYy6LHLEeVZaQsg1taB1C6xFZhitKX",
  "key9": "2vRj897TU73c5C5ELSvzD99AouXhL3TP36TK7JVyd6N9SA7SG6f7E3C27EgPVxdgPaB3eFCjocvs8s5AeqT1q3QG",
  "key10": "3zCipPbnhnER3CeWhgzTztT5GHyDkRaJAFsV3QJSPEAhavbgqEXg4GYjBonS3bPC79bpaJU2x5LqyKRSaYZfyU89",
  "key11": "4NLPxBpLK6mhHKhgkedyHSLgynLFx9AwGnaLkf3G1Bvjrn8A93ii9fEnaTs6YyZB3Fhg3uWrsVFMDdstyGt9cpPr",
  "key12": "2WFX9kp7jMqZtT96DnVv9VXGULpJn1c8eKujmDsu2YTN69SxzpUARYPaebsSvMp5CbfbEhkEAhNDtpAH8fJX3hhx",
  "key13": "5d1corKRqhrSBV9iFZqdj2HL5KxyLgDspHFTPUhvqWS6Cg3Co5Wnnbp9LTHj7tdkjhE1wbowSgngKSi28y1L9ovv",
  "key14": "3UexiQ86yefWaxGh85sbuphfLCoytbPibf2xSdHpFaX2nGiQvfp36GHS7TCadVtpRsMwSgAxibyBmVU3pZhe18ub",
  "key15": "5mAYKK1pwEaRHY3FojkCSkNCqUixTRNoqKLi9TdEzx5BNVksggeR6WYXPV8WrPSdsZYFE5yhfDU7XgMD1tD2CjjC",
  "key16": "geLef8J3d3CSiptUWiN61xmfBjkWTB3cR3AXZmNbsZCyDnEM7aXz3dMvqccQiajCieCVR3s7EkLc9iTF51LuvSM",
  "key17": "Sp4QJVBHChPzfNfcqUvoPbxYxocCy9ybyZcjBqzRufLsiZh3VEmFZDuFzhMc373AaSin9gJBi3g19TPfjN1oc2R",
  "key18": "5rnDZyNeyzmASkDFt3hbWkCZ29xKtSot6yUfPhLVfYSY89k3MXXCPhk673KzQ6Pv1KPuaDqzjmAZS22kUHEjUa9V",
  "key19": "4FJRrpnZME6CYmiQZfAsZks9uYarh91HbiJvoZ7sXNLLP5qpQzs4ypc2vvotNFZDKirSmFjuFVbdnGx1eGFvqptU",
  "key20": "2Gsfi1i1MZJTJ5oYXTUPe3yiieSrDp5V9LsD2g6nFihLkeAYkmJAZohNEkUbCHxwDzwajX4KrPHoicv2zt6XFNjW",
  "key21": "52DTDrwcmLBzgLaM5gkWqvwBET12hoZkcxcUs2bSbeg8EQs5rV72CAdZ2cX5YzsHmcmJ4imtnXQccg1ZKDVyMcvw",
  "key22": "3LQLChy9oZKtqyFNUqrDdMmPRoYP7Q61UAQGYxQvQTQ3Ui7wTqkrhWdMVJbst8at6M2p1q5vEWtrQDERP2eXFEjr",
  "key23": "2HBmagvqxrrWkp3Aj69Ab8CLauz7qqCjDxsUSexxFjkko5RA9vws8Z2tCDrVDLPFm1uzz5V3pDThjPi87mPtxAMB",
  "key24": "4eg4tLx1Rdh4mXWdXHJMaHiaKpYNoVQSB5LimN42uFoDktKPavNiV8VtG3YxHtqfnfbrCBeSszR5nuJzxTbfRNm6",
  "key25": "3UV45eBygVtqmchmvsJREYvDLjm3fXsA1TJhAeUaRztzu2FJvHyew3DjMsz8pfoF3UzhfHSx22bxizcUAxV7gEgs",
  "key26": "3zoDZCzuWjJaM3EoEtV9Pi7wJ9dFNmWPVE3AMVNUFsUALURFgBsGq2tkJmQDGFgT9oucLcxAS64MfPuLGfwvPgZF",
  "key27": "5VH6XLwWivEQ2k6uwXs2A8y4yWSypqQkST2Fe5Ch4aSucMKJQP7hQWyYCYUL8b9xHRAJMTuADF9hUjQudokQ2iAZ",
  "key28": "3HJ8N7FyPfFNjwSp5MUTgJZ3yFG4w2x8CGxvS8vkrwzNvq3HJVTdHFV8ZBdpfyrdN73HT7kL7qEgkcukMFnGGKP1",
  "key29": "2avD2Em8u7UBxQdZQSEJnQBr183Kbseb5iU38CSQ9tGcQRfvaBmY8gqSKa7rVz9HAZZKgPF5uuE4CCq5E2w4sLeB",
  "key30": "579naZCPtDvRNd32GctWYRQhr6qMdTiAnCkjYqfCKeJCZbC7Ud9VJ6XFCN6CXeR5SVgQWPv4sTWXs3vtT2BHg9Mf",
  "key31": "UusYdfzp46fh33T1kyRNsDTPEvHnCgXGirm4vVCBSxjfJetN6SDMmWQjRrUWKqQGaUxnSdWGkP9gYJLEN5NJd4q",
  "key32": "34U56uzL4FGy221uRzhLH5BfxnEmSvnzvmXG2r7vF66oWoGexnJfEPXuDz7Tw6RJy6rXxjAuCbW1p3xjTxNtXDac",
  "key33": "Gpo11d9DYzvLKEWXcxMHHaiwfoe2BW6FPWGrvpEoSAZPoeJXde6LP7zbo292NmLrWv28z6gmstF5r5ZReFHk9ML"
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
