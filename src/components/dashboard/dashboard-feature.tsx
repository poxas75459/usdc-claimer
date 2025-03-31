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
    "3tjoZ8RUnbiW6vVF5hK72o6oC1ZQzHD8Dxykk6DGgnHiDS4uR1yFdqKBRWQ4stsXEZEGa15CSRYzQw5L36n3zcA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45TUntFAqPnzE85sRkV3yMvWepWbfQaMbw7nHCs44WfKAJ9ELjcHJd4CjtM1APbAQcJ83fAGkKftPzqTi81jW9hD",
  "key1": "5VLhZgigBpwxDoqJAM1aKRYqHTx6CwRrKZ6FnxdCL1nQr6x8cdNRT77spQtY6HYZcyfncPzcDXaCYcxTE7rBciLM",
  "key2": "3M5S2E7rxVY9v2pLLqTMW4Q3N2WJNc7djnMjVsUW45c1dusGnGBwegtFJPy2DJ3BkQGmTFPK7soUGqer3qW2QUGR",
  "key3": "2mBgEJV2GkRqUdJy7hDxy5Ju38XJ67XAZtmQnbCYYbEaHVdPji6jjHeEyfg9MpiK6ZqNc2nejR5iysWk9bN7TKQ4",
  "key4": "4ojmW8R37oThisNM3fzZZwEyVeEiazhWf88eGMS8nLkzmWYD72SCS5mssarsRyQpHTDMWQSacPPS3JA8mxDXc4j4",
  "key5": "38QJomVeQ587NBpdRBJHatWENZz5SYMKFUJ4obdWazXTF1aNf8pX8YfFTZiJDGswPbAdBsfDtwSbNz3ud7XrtZNC",
  "key6": "4uMCnpEP9gAUGWFWkiWpGdwdzY2dVyYDkQnmJsoY1nKxHK13WFccrNteSmq6EmsKdEXKnpwXMYiAxQfkUb5iVrks",
  "key7": "457XnsBmYzjcFxv2ouek4hrHb57T81Q6S6eneeiuqMdfPoVhVV7ynW2oSgwTAjNTJLqeLDXhPQmtMgUfGAuqGvHk",
  "key8": "3egpMHcJ2mqE6T81ZkFrmQgmj4X98JLrnGHPpiVMRFc6t7sTL32fFQeEpbV9AHSdccviLBEhJPPUCRohfpAna7n6",
  "key9": "3gscgJnqwpLgfSqSCU6Kpu6UYj2iQg31x8doUvYYXukGmz6VpiqihURAMgkGvdkPuPVLcHt2NqEtZG4dCQ4vVVZV",
  "key10": "5xHYGGomu8p1YBvW6ezwDwnneD1o3vVgVm1pJ1sjy3i8gbEsdRYvLcGnsmFtuEDT8L5hyipYxD67aFQsW4MrEpUB",
  "key11": "5fESg4nEaxBVeWcH3MpNYMDTh2mVAvMcDNHcYNpt7caJM41zhN46osCFoAjPq3MksUHS7mC1fVTZKDS3uaefjZTs",
  "key12": "3BXWWctRBTPSAmD2xSBapqcLC3cZrF4R3L8xPUL3A7bAwM5ugnFEr1tHafXWWAb8b5X5Am5QKexFVPsh3VfjwFBW",
  "key13": "3nNdPMLPr9EzgrHXjwiZUQqAHeptr1XBHcCz1YxbgAkzbCxLYqge4RF1sZRbGvv1prSKVWMyhyqVJSiiunNDPv6j",
  "key14": "s9t4HjTQabk5z1RjNYdJtXehmgPgdCRxuBmcmkw1NQjfPUguqjHt9SUWp6TTky5kAacFgGR2F1ruiPq9y6bKrS2",
  "key15": "2W3gu9ZXn1kB1HdJXwSQNNHf6Kyw75Pw5oFESQzCsPJZAs9PK1gPSTrb5hFUpffAHM9jRXnS8bHo5eURbiCitEer",
  "key16": "4q4xRisGwdc6hjfBm7grk5y3Fk6poF8DWSqq4WMCDKa4buPaYMUNnEaa7uVm4EqaFGiH6YPaDbCxPX5UWnzbXcn3",
  "key17": "29rsDJ9W7hEA2Hfz9fCVTxkfWKmLdkTVNQsUVHWPr3npWznitAm8pT64LVCrEodQzwcFRyj6ssVLbeqdyRk7Wqux",
  "key18": "4EkeLLz61Cem7xPSuLVD9sVNKnLHZNFEWp3rwFGuGFvGSv1SvqAEhX6mNZxD3vV2v3BsxdQYWBFY3tmm7Lv8AqrV",
  "key19": "YEXXxpCxo54QckwMhs7wqH5APHEq49cFbE1iASTpdcpCSEMFmTHM5Ac1WvwaDxmhFzXGWDRHiDCuyDDipaesifp",
  "key20": "61DbYNVvAUkYPURL9xsL3UAUGRj7wT1s38YiJHLdgBnQJJXug8QB493p51wH5RPseQX1uhnbH4H8G6Srt2bTCAFQ",
  "key21": "5y1EdFWJwdzsrydvqD3cnPBAGSFXshNvJ17wr28PEHnEoMbT8r62E1rcY4gqrqH2Q5ELvsSgg7tGS7Cwauv4ekhk",
  "key22": "3nsp3xziSa24XBuvLDA9nZMXfdWef2xkAWxQscEvU5FPz8G1kHurMAAji7gYXnukSRDHnZE8uDYpVd8eBaRf68Bc",
  "key23": "3vMHbFPgEinxePsQoRGVPch66TRebAerHkNgnwUgzRL9nvXw4qgygsL6iKcgBaioLQd76dYVGAbAE3EdrrEbsxrB",
  "key24": "5c7hPUhEZfPt9KPxsckE6pvkQ9VnqWsSTCwYRcAGqe4f8mpiaciZ2ZjziPXwdaPRveQZyCb9sEZvMDoNuSzsRXvg"
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
