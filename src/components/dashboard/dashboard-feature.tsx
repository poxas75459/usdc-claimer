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
    "2kDGp3TwvwMwJt7FX3GQjxWXhxSqN1Rz5BTMv37xo2Buoz7hfRYX3LuSZ4i9PcS3c3S9vF4AhgBU2T4v9Q1gKpL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zrMxEKjmFtYqygXHwF1GBGfZmZiryAeiSzeGL93NTMsUAY5T8KNDw8oUZiHh4EKPijEXMShkJ3Wn2zoXPerPvWP",
  "key1": "5K73ZdMSotknXQxgmEpS3QewkenwWB88caxzgFieykHiEgPe9p3Rcp1ry9663SdndaAWmHs86H5VgszrLPKnDxCX",
  "key2": "4WfbGqGp2sny7wjQ5z9NBfSuaEU554dRLSZK7TyjYeUh8V72GveqTJ8TNtBdLV7crZLStr1b1Jd32WipSYeoV2Nq",
  "key3": "1AunzUoZ6Jc8KDYQZYFPyfjMNhwpXeeqjpbEBxwWJ3GteUFDtWQEzALnmSwxRTwiCNU644sFv6KuqbCCtBBwV5U",
  "key4": "4ZN885G2oKxmFJzMGaPLucxksmJQsZeyK5Z9Q9xcvZc9rUto4CFQuzuqi9TT3e2ubU7TBD4jhuncEKsFR4rx6KY7",
  "key5": "2QehAyh1h8qZpotNoeLT2TCbHd3rLb4ux9FsbUKcegUK43d8R9qFpbyTZM4Q1gE2H5Y6ARnGNZry31RxiFocj4Gb",
  "key6": "2tyrW39KBdF6SmY9e6cjtEm5LVUhfREMvq1uUerfQBPmGE3jbyrgFP3uXw1zSa9kKq7nVQEWVPoQgh93GXyCCu8g",
  "key7": "5mvH1srTkCjL6nxa7W9wzQbrHeZRtGhwWL9uLhCW6t7suNsA5gydh57MiiwF91XBHS8zGLGe4nijWdhrbmtZGW7",
  "key8": "4f5yaWcgiQ1eSgdqenNLxmUyW6PpeGy37zDvzwATcDsBe6vByuWCBSLhxLtF2d9MqdEtwykcnpCqaoF9gZT7j6z7",
  "key9": "iPfzzCY5pudVPJgtbdpda49x4QCF6zkRi59YhiJXmn2A7BchS2WRoRaWuMtcTo1LbCbgYU8NVnPc6FsZ1BGFwYF",
  "key10": "4JoJEE23FHC8cfuNKSEAYicnn7SH8bHmLtUu94wLKG2R7Bf1v7kVffC1dDRArs974Hpfb3a33P9mjqS9wxmNSWwZ",
  "key11": "56zvxpXNRYfjv8Si27PyRFhJAdg89hgkhx4JrkrdY1kses7Wqm36jNjS3e1HzSXGvGyhmxykP71DyQmSzmc4zyFr",
  "key12": "4aW23CrmDW9KZDH7QHcnvHZ5qWp8HvzGrputRFGgnsGxwWG3cmZk5AJrmRZ53TTpEe2H1iAGgymN3UeS2NAkUxcG",
  "key13": "2WvMYpiCsdEGRbDqkotnmDj8JSxFiPnjB4jjJcVvfAMajUU9tmNdimmU5KScx1yW4SNqF23aiywpLmoHvruXzHVN",
  "key14": "5c3UNyyj58Eq95v1uzmyZXpTsgNvPx756p6yM2hjAkEKmTm75xFUVqGrubE7jQLb1V7rpKgtnBg231X6z4rkUYsQ",
  "key15": "PbmeQJqrzLuPYJx1p4Ljw8koXKvpih1jQwtHxJ9V6FvwrmQbFA7JGSeBSAaFF1UW4HoekGFR6EPvZ5TFb59m8se",
  "key16": "XhieR9XCrP7u867PKkoBJ6EBk3fb5cWtrzmooUawST3vu5iKkq5No6f9rCVfH3F8HDbBFwgAbXewcjsVFy6cBsC",
  "key17": "632MCUk3L3os9smrNEs2LZLVRovnBtNYwirvRF1bhWpNLvuKN66Y4rbXpRwKNJKagD6tj23SBsow6ubQYqRMdy6T",
  "key18": "4x5NSsZbaDABXR6edhikt4BT5k132ucq8qniNbRaXD5fHVXT6zSRnrbTHpnXnB2JcGbKw8QzZb7vCEppNzdtLubG",
  "key19": "2tTpkRJcZFfPYfnskVL42gYLTog2uHaWUzSiJrPRwc6XMdKiJTdJ9i59B9qBMaMRZajiPyAjx8L1q12SzbWJakqL",
  "key20": "4jkCKNinpGfKy4S7TijNaESfXw23XNPZ5zgiVoTfKTYuiQX9G8he1G6VADfK8XKvKcYgCdPQGxom5qREhZwXaa2K",
  "key21": "8FE2HkamQsv1czRL2MSHGW7hfLRPeGn64YhL73eWcyfh2YvuTBunCxQ2XSt8ZwDrLMZRE1XEZ21wgeQzc6Cnmhe",
  "key22": "4ZUhhzxctUFgJEAeYdarPA6jrSfQzzMBA1SifD9eMNmKHW8qYdxaNLSKFMApqZanQkzNRA4QUNrupyA1CtFbFcXg",
  "key23": "2dx7u3grw2crvTNAUNp6ugoAg5BumytZZQc3M7pX85yfrs55Ngo5q9GwAR6NxuZNeNTojavaRhH2rMhvpotNcA4d",
  "key24": "3GuaoZ8nHG8Eav9TnjEUy81PPzpCbr1mBN2CD4yVte3LGyuFVkGsZy2J3qKhCxJfvvzA426d3NpXdEnpqvnybrrF",
  "key25": "2gCRFSPCwzhenr6cxTgN8hzR5L6X57XnX993UAgoTUwc5Z8Z2rvPBipnC45dUCffQjwD9VhcE6Ea37zeCswf8DGP",
  "key26": "3hruBq7YhEj3sMhoVQA4LqXxVM1RQGM8eAX28vCQCye6vNG63MKCWaUjReL1gGEtUMbTgHUHJFWsdre1YNgRyfWf",
  "key27": "4GH8UCGc5CGMfz69VFkhLjEX9pzRxRhsic6zJnp6cwruEgZ2BSMRWvLjv7sjBED9ftNXcnZZipsbyaXu83qkxcEX",
  "key28": "2Ah3HBuBo6aVnDBdoPyDbsSQnd9qoqWxWDrajiWpgNyCgk2DFecZ9kngx7PNdTgHZre1GV2FRJGrRFZCftXrUTyZ",
  "key29": "PGZx2ncDqNr1zozSdCBcypkeBfS9vmT7ueMH7nBioYdw3WQXcZFgmtjJMNpioU48f3gpNzWmJ6t21Bwm7uyPuyT",
  "key30": "644GKBNhxFCnjqRM7G4LWRZNMToqbqyjovsrKRfejNDhiAUaQ348wJJa4V9hEvy3RdaJDCRoTKyxM6zcEE2sLvEQ",
  "key31": "3nXXhuAzxCDjDWVM8Q5PsN1vVM5MaBX2dpdyoJqU5MAD2qnwCgmeMSErqBRNp9Xq3hrC2TVtNQL6HAEExp5kiGRU",
  "key32": "3cUEKDSz2cCT5UtFEdsnBwdxoThnu4BXGqQJxKveEvLWXDW3H2wpYaCzm4qFs5fWSBoNwzWUHc2c18c4YJJ5NeXG",
  "key33": "5gJkKVPSgYDH7RJRscUw2g71QsFZ45PRV4nMzjz7yU9TdAN3Z572dKqzcazxW8NCHjRVUsQe7HyLppbENwmLmTAy",
  "key34": "zJjqRgb8CtLj3BQFEfRWTaNPhDW2wJsR6kcDLhJXRRpiUSHdotb5Qj5G2B7vtnTWi32cXceq33bNHQsybyybkpE",
  "key35": "5y9KD6vYmVcFaf5A8CNwi9YWbQ6ZbF7Xk9GSnMeCBPX8KwCyGMFq9cfWWDafQEC9gZA4gN78J6542KGMjggVhKtJ",
  "key36": "2Aaq2tQVkr3hTPkMvgv4tuTXGHavkNXz3oJXxTKm9WCjNASE2CVWeHMzp63hZTYkRoRLMWtNatZkj2GM2QvxY5ee",
  "key37": "5Zz4vvxSfyNXNQQviwJwK4D5n8FtnoEY2WiXYiRntH5V8dfzh9aGhh4HgiGRjsd4gE8mhuvxuUSWRvf4JV3Fdhq4",
  "key38": "5FfuEzfSUo9w18oM9pJqqfNPooD1U4MS13mLNYgRi8w7FDorSt5Y5PfnE4kKfkXuAfrtCFyR12Cj4o8zqWKwAgDW",
  "key39": "4G5QcmNhz93KntNur1cCkvnj93UENT5nt4bCmA6fq3xoKGtjY9RHrjPg4MzduYnUfNnMadZiox4vL3FhehKFZyBo",
  "key40": "5SH5PT8AdtBBKCz9yCa3gZX24bacJozX3asnAXYqXbmDfzgAR3KabpBu4niLDVX38MpTjHiz52RycChJEGKxxBek",
  "key41": "4JZoKxW69AbWhFhnobwEy4es5LnfRBCEZkA9eGPGjuQFwFSweUD3P37j5awoNTMxPQJ3F2vxdixRfeyq3QhpqEfW",
  "key42": "4dwYQf4FVxdCQ8vXgYwRFDrpumz4eS9fA5DTCKkfWBjoAzUvLApdfcZDn2swYZ3w8LmFkC92aPQHzTyvTHs3ZX5j",
  "key43": "3aS1zNCg81Yon2enripQHLkhSG6JcAtNEgrxhoJhpWPn9mfqxsvGnc85GqHogXwFw2HPhmybM7QCShePsZLhQbYp",
  "key44": "2gcH7PfeQdmD44dvnR5xR4a2q39bhYCXL2t751Z7HQiDUQxL1TZmTQsbrU4iByhu7fRsPvqKFcT3Sr1DHtAz52eY"
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
