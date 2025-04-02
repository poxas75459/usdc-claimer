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
    "2iNmUD8Xy5DGTJVT3G3S7SRjCwphGJcRFgVUPk24PCxcrZ28a5wX6e3SXVdH8JavhqB32cfrn6ES1E3mjx44cgYt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qHQTkYuaufWicRLfYCUF5HDUmMvNsqbXV9wr1MpS2L4V2HvDWtgB59iyfXvthjZceddnA8yoTSXi644kMYyhJCw",
  "key1": "3wYK7ZnAjzVwoqyJZyZYLZLYDYMmjBxeAjZXhRv9Wi83y99FMUM74CTV6K1r8cPPUCSQvAn5k6npmrDBEjqsLzrx",
  "key2": "3thaueug2VvFUoApmnoo4vjcui3b42DEkpVED2CAGotoeGUpD1fo6poTRKmM3DdNVfy4Tkymmn2F2CZnXLEFrF4v",
  "key3": "2dS6EmpTzGD9jsw7oRNVKYQUzv9BgrnSsxgQaN2KXnK8fJepzWgL1qg19MeWLYrA3yrrfDCZnJo9ruB1ACSvt7ZP",
  "key4": "2CRWZLhDhyc4sqBkYwy4fFXJEt49ZkdkNyqZvDMDqjKoVGGPQYt3X2N3V13XuKWFYvoJ6z2F6T6GXGkEQ4rhmQie",
  "key5": "zpzg92YeXU2XzT9hpxGSjf5FXxL6sJCfLhVjiDBK3Q8JPemSbw2WVTKrdiTr1B6nNat3mZVJtAm9HnzABQJNvWU",
  "key6": "2yLAgEmn1YoyYJym9nvLVttJKPN9tzCTQpub2kAP63GnStpyK3a9S3EvXV31wFkrBQWRacx5Ms8oFMG8BRZawqyd",
  "key7": "3kFC6WShh2Hufg8e9USThJ9YN6TGTNhs89TT94ttoqoyhvxPQq7zEjJxQrnqw5vnrPbVoiY6qwcu8S14ANVCx91V",
  "key8": "4Q9LM3Xd2F1eXc8JpnLASRyh2dGg9aViqaxHEYwzEyJsA8kSA2R3of1ARnR8rY1LSN5DemLkqfQrsWhZ99ECDx9w",
  "key9": "4CQUMhu3QYigrVP4hJ7mCFNAJt8DiGBZFTdiyC6aVaZEse2rc29Gx4QF4dCdiFyUddUKmQKGedAukrLCeDiMBohp",
  "key10": "67eu3E4xXng3U5JDVv1kMR3174DRGb8p2heeiNsZApRqLAheyBaNrpNord36ziKtrHZJ7mPxr4sedGxyvBPZScH8",
  "key11": "3d3w2QP8EGgM6iLcTbiaCMrRHoA547Fd9JAaBHgLTMi6nzZNKgiEhYtoGEAe4KbA2nhwo8xqRRby2KmuCjEmoD84",
  "key12": "3jeopY129xjAXefCc5vnQrSiP78H2bqkrbaF7RJGUQjHKJR1sjRWkToq2HgSLDgvWKYgi93m71zZx2VNpqkq4zmA",
  "key13": "2AyEqynAXzD6RH56K5wSxCcwGGuSgvGUeoxHJszNThYczEvUVDsdEF5g6MMuwoVSAZ73y27XdqzvUkJj9C4SXcY",
  "key14": "5y9hFgdKcnvrZY7qZmFZZbjnUpSjtV5ctXfbm27Bp6BapNQUiFxMntxjhVXDqejGBj8Bc3PdYyiWfsGrkbJXt2Ve",
  "key15": "3FB52Apii5PXTCHyE7Y9uT6xyc82VBbruz5JzrahimupbPBa4w9eUrsVVkudNyLVRPZUNM9CNGmb9d3Ssx6U4pLD",
  "key16": "53ZVNhU9Q3LqM4ieUTDiZDFVapq4mzc4DZW6jCYKrXhChx2g7cSa9ifcaJAYGzdGvUHCXxZCJdpe6aNrAFAw2jue",
  "key17": "2CgVSdfSZck6d3Z6vLhMXZac2iBkS2kFUEowFfjVGuFFNNNjoB1sT5XykGKBuJ4PT8qCLSYwU7uCw12fJfHMFqE5",
  "key18": "9xJHHhC7PrSwbCRxEpG1F9Gi2jJL17pYaSoArTcwqojvfqPM4KFPKKKhnut8nRtZdT25VVN1SdEhFeDqL9aGekg",
  "key19": "51CWqCgSxV3GFkFFjoGtXg5kaqvMHAWVSBgGqQnqDQpXJ3jZRZknkbnfKzPk3p4b7hJyX3xPdcn6RBogHCgqseg9",
  "key20": "49UbyZQkCXCBms79QwA6vMKH4oPhFxi1BYhXRyVJchmP9GXUgWJspbJZRSbt5m855cCHQLqZQVubdB3ZnuWQYLho",
  "key21": "2Y8xVf625h6ud5PL5jNBBzubtREwBJSR5eNmbeixWLPP2Sn2mMJpxxFTS9A3ntYpBq8azJC1zGk8mkAUoQK9ULiG",
  "key22": "4bavddk3gypEtxWLmQajkb9JRwTQMQsVSUYRniuiamkLtacKRaeDTfmzvam2JTLcSxptnNfSj8B9nGg8smb4abYp",
  "key23": "4e412kQ4mDTrUN22Ls8CCfL7qCpaRBMnRqP6cKXVzuHa1zoNhRMcsR3BSfBqcnBSEFPoYcxduP2qXLWPUhvCDMjt",
  "key24": "4SakbxZZyArDj5fs2ouCYbHELVDiBpBx8a2vAvfNkAWNFrRqQEoetJ2vtxtb232oRpud1CkRSqLY4Q1WXyfSSX3p",
  "key25": "4h5CJSBZQKRUEzuMiCwicXCXUrdbRFQvWHnzk9ZmhMopp7SETovvShBRtwVarKCXcgrh7ZQvkdQfgudczPJR5oKa",
  "key26": "4yMitpNc8DfRt6SwbF1mBLpu3iqG951iK8QgaWVFcy6c8sheyK3RGnRqJ6aMi9eJDz91dtkAc81k5czSuMUmkQ8F",
  "key27": "62LTD6dAad3LXzkUqcXHw9MEf3VonPCZWP1GpimbYqASWJKw4ebXSNX1EJEMrRbyquwjSbr4QM91Ni5X19xsq5gf",
  "key28": "ngS78jekjHZYUKJgr7EKYWbNAPy4wWcEPkAp11jqWNFJpW96QVEr4Wv3ciR6CNQNnvqNQ13hLZbtrFPVuwZPwoD",
  "key29": "42qGCCVa5dWFxKGAWZ6v5yDGq1LSoURKhZsfSiiQQSNDd2cqoAWz7i3MtsAhQLvRBPW7wxbqWeqK5vJigy5c9rf1",
  "key30": "3wrqvvXfvsNQv7K9St5NcxFnpyu35XWgdTZZmgLLPpTuQjU3h14jGiQG8ADUYB24tedJwC4kKedKDKQysBSLhJZJ",
  "key31": "3UsHwZB3AnaZWHPBkdhxsQP9c7Wrq5t5ZwvdLhwa7dyo8QC2hEjqFxBxwRioogWE6YKnAGj578FyQqvSsJi7YvwU",
  "key32": "ikqYcffFyedUj9iZX1djR7GohJa35rKgcCQwnH5A2so3rKMcvt1Cut5KgKbtKr5vy53zdswo6o3Yo7Su4T39wAc",
  "key33": "4SLyzXPqwkvXhiUX9Jsawybh8FnTozcBYdq9SfQrb4dMRv1kDt1dEfq78qvbFjRA3SQk9bLJRHWgChQd4T4zMGuC",
  "key34": "2zFYw8Gy7UPBQT9axP5j3sRt3WWA8VCY7z2AsEhG3Ha7VrX3VxgE2NVivsN58q5bb7yPt5wF5wcqnULWj4Gn6gaZ",
  "key35": "Km87ZfC9Pjbqecwn8swZpnE1N5THbgoACkE4LcLwJRv5H5jEsi9XSXg2nDVh2W7GduYo9GdW3gnSBziP1fA4NpC",
  "key36": "3NLnPnt5iHoipL7HA6hziMWqmLXPkSvReZ94VkyvdzMpmBBSDxrWg1GiDTeXWCLR7efmk7epzxqSHZwcEhMfSGKQ",
  "key37": "5Avpn6hXtdKKvoJZtLCyAmCeXc6u4fuKp3pkx4a6ztqNm4bF7odqyVvHSGSejm23iqySna56srWijjgUBHxqqp44",
  "key38": "2ZoAX8HDXf1VFu6j1jxhBrWkdoNYzhzDJJx8QQeohBMRpRrE77s8caw4auMExEVNUA1pGdd5pqzWD27BLST4ENHd",
  "key39": "2y6wU3ZAsSaQeSHUitQfyxiHETPXKerSKyaTHWrNA6KDHxH3BZgRr7CzHGQn1qrLFhbQ2cwCvCMaLas6BYXURAq4",
  "key40": "4ssfeaxyCCny5Ycu7ukMoFucRnbffAAP5Xqe6SN6gn9iZY1fxS2zQqSoHFRGQx5t5VowU48JnFR5FNGbJC5aZdWa"
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
