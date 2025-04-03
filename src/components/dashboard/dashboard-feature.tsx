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
    "GYvuUuY6faMhw967JDS7WoCTpL3xFA6df2J18LTG2oFhjrvgCEktBJkt9g1c7AV6UoMfPZBZQPuwYLUdNjFZmDA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fSKFaDvBdRzHr5cHhezNmBaX856fKhndUu7SHp3ZHvDRSiWJXZrW14jdArgjrkmYKdXedZd9mxWcWbyixrnYxQz",
  "key1": "5Brr3k5uQfJZXGPgKWWF6s3W93HcMqQBteUztNLJCeLPSpzcaY5b4TLstaFZN1CbmaRFah35zXX8e5EzUNnqvJNH",
  "key2": "4Tj3nMJdz89qn6uEiUNGRujnDydFTdsT1bJ7H8Rf9LE94hNy1qnhDHKHrLFbdeVNvYD1eTq7thgnXruQ55MN7MEJ",
  "key3": "4qruZjNE3wMuohKFbdve3HyJFTpwA7sJRq55Gia7R1DthGhCByNXbKxVgRWv1j5Hmjg1EdWSy3yjtw5YpyyW53By",
  "key4": "43DcrpWyVjsyR6XtfCDc7xszxDUN7jkTUxCX2BJvG1j61GE2KxhtJXW1JDKpakVFS8r7pWnzQEkJ5rX94SjLsaVC",
  "key5": "2PELaYz8Y7M8H413J8BSRYfeZmw1iEhdGndJwvy29ss1NmMarFRXikZ4gF4jPb7RfFztaiMEkBKFivphdmWwRS1C",
  "key6": "4WAffwfJwjKg18q63mj3hpmm9GvUb1fKwMMnPMGqdyU33wGTrh3hW1DAh1ZZf6URu7hjSsdkC3DUtRpkwXY8117n",
  "key7": "6Uzs6aZLeF8ZyoKzvF64R4VoKUsnbXuBAqLok7CSapnTGTkLMjVLmUASBCfNUrWZA5GfZkerHKqFtV6PN96rL39",
  "key8": "5WvfSdPgDJGRUWGjw3urarYqV2XRSa8hBYRKut4XKDWeFEUxKMkDS1tSMQYcjVESMymur1n3tZVxW5f7KQnpu4w8",
  "key9": "QQSVi5FLyvnDFQkxPRxhK9zPsXBorrzNXSzLDsKxZj7RpUDnHB7RdXdBjxkWRYqabqhjnQXB8Pw6ZeT2v2jimxh",
  "key10": "57E85umxbbk4AqwZsoGfcekuA73U4gFXyVKg5mrzhTxefNL72yn6VkX6P4bgnAkqeQYK7VG7pRPdgL8dcXyfts3",
  "key11": "HBT7wGWZo12ZXDEW2qoNhjvWCtW5HCvf1nrrLNzZsP1Dz229ygzgEqLLwPJ59r6oYK2EqyN9kffJYLgNSTnBCBG",
  "key12": "3zjq1EN5BVKwNWctH1rjg1fjULY8GN8HeZ9LNZYcao1CNt1o6HFXdnkftDmWAsm9sf24F1VVMBNnxH4LjSGa6mua",
  "key13": "2Bax8DgKHuM7qudZ2hiJsRV1R2g8atwLuRgxG7NVDymWEiHbpRNtHwQXm8KTvSLKZr6YzAwo2RefBpEin3fPpaTY",
  "key14": "5Cn9mEauDXUk8QabC7LPQz78qZquExLey4xfKTeHZiKwEuJJKHvxNVK64gFwCugSjZaLTY9RHxbBY2nvf8wrdaHi",
  "key15": "5Z9K3wj89RV32vVXVALtfoS3BLxL7tvkxnM1BtGJ17GknEAGZyx8E4PAJQaCMd3oqRSRN8zmX3Ynjq2v33v5jixZ",
  "key16": "2gZ9UgtVgYQmHrRzXLSBtfzipcrJkMwsRBYcHdrwQxMrF5Ujiiz5WdkUpmbL8xseCBo9dku6PfDvvJ9qyQaZNxAH",
  "key17": "61dseagBiSqxgwKeUu7hj8d16fgoxp6kW5apzTYXKqB1Kjb1roWkw4f2pVNF16VjYUaQbXWWUHE291DvEdvkjvSu",
  "key18": "3dwYpBMZ6yV4koS3QM36EnddS7sC3zUdQBPWts9iRVEBPEKBBzvEPK44noVjMaivxeoWjrAxFM8f2kCQoR6xfWRC",
  "key19": "2T6fU4QXh7dopQ6y3i7T5P978DTumr5bk33LFSAkaqdahyFnuBfBnTyymDmMSuLsmmw4W9McHBXLWFDXNgr4Kg8i",
  "key20": "5zv4TRWrZYhJWDp93BVzzvZ5PeiZSuuvtFdBpfkuc7zxJudZkbga3EUJhyL1Ra1eDgcFxzVN7BcCfMGpXWVV4qmj",
  "key21": "DaedqGjoURadbohkVq4X73GFXptLyWKaoVT7LbeFzuFCJjTNys4yGa4BxMkTedLyTNvG6CRsCpf37K4R2fGTGjj",
  "key22": "dd744w6mfuiChhCyXut64K2QzJTC6ZRQUbPF1uTwpaDSua8yccz2wzztmGoRYYHgFstXRyQV36PJWvCGpJHbv5V",
  "key23": "3tY9FffB1TCUry7LuxUVP35cGSigkiScexsu1CoGMQWrFBB6MJUTstczCYvHCqiCX6GWJVwJNXxwXTvEBYkupfa8",
  "key24": "4LnCiR7Uj2HjAH5jRtq1nq9jXJbhWT1TBhqCHa9Cgrt7ZsQdhjYaUzfQYj7FjkMpbFwvGyg1h4Zf6gbNMhobtBMT",
  "key25": "4Rv4EDbAsNmZtrZnpa6KLPcgZMnYLJYUpX9MShu4f7MoEzoq1A11PjpcNKdCCoyq1pRfSUAyrYdaZRNvwrhFruMd",
  "key26": "51cxPkkYDbBx6D5r3utaFFeeo39W7oHuPRaVxse9oCBm4okaGFdsRz52vorwY31QKmPvUyP8RvhejpP1vAwkrH7P",
  "key27": "2shFR8ecekG6MfmbbqTK3cVknTZ929YniACwHXhLTeLP9G6JQhJNCUYnCE4kCcuiB9UxnEppeyTQDTuJ9dhFoWQs",
  "key28": "2GBAHBJRqtvTWRiRAtjeaEKbCYaZ4SZ5gYg5g9ZYuZSHEJccfSY4emk6TjNqyC88FxzufDT3udihP2B99BrHrrj1",
  "key29": "4f8amMTLtCRRrLbX6X87Xh3SFJfVjoYsrpM5VLX7kczLCxbsQE3g4ghwypcsiD6DYnzUhfxNSwDuy7B63GQDKDQj",
  "key30": "4qm6UTVLPkPFMY4R1vGTjwsuKpfW6NJwcR2KY9Pun4fEotjhzK121RByf1H6cjdyq3yWiq9gXL8hCV53MnFkRwBW",
  "key31": "2Fp3zxPjUwQidTaPpyhkxtC11Y2QW3166N3UPLoTJHCce7RNivhJwWsDaqBaZUnzq2dkJfSqHMTLbJxdwQc5B6dt"
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
