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
    "42yYd27aMixHTGDwcAz9iVZZXYoSF7JdS1qG1tfqAGmvKKakq6WesfpGKf7ZeskuRj5NDQbAnABuyG3cdhng2XgZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mrx5aXgHx1AEoyFfnWGZXe2RPyrKrXhgrXdc6kA5AT8V7RvsiSwDyD44mfDmSESBzm9oy3tB2az3ApRo9QUw2Dw",
  "key1": "3CY2aqVLdZyvMXnetirsqyvEzyXWjCkEc4n7oHuZxiFui7Xk6opXnccderpDP13WYMJ76GVM2kQSW6LoSyo3A7Bb",
  "key2": "b7GgktgNbhC3FwQfJLfLNULyf5tvybvdLM3Mf7Wf4cdV88W48bgHBvEh6fiAKeRt37R1QVYJ6wMMQvwdEGRCjfh",
  "key3": "5XfbU5QxxiBrNxQUWAqrD3QEcFwMXuK2BqEgWHwG65gQnXUPgxnmAoXHppCoxHDcNmm8FzrywHWe6N2yThW88rHh",
  "key4": "4LeQr1bFJfkNmfi7sTdkBhsP8b9HbBnNTnXmwTPowCJXoMKc8QGj5YyqFfe77XUctrMbZAPLWU6yQptSWViJi1tn",
  "key5": "3UZDoSxfJpFcVwDZPk893pjLTcdyT1zd5JjGZhd5fiHEjy66kT43VTKNJwZXnaXuPqEtp65qDXNpThjc9X5Zm2ML",
  "key6": "5WDa7p5BHFEM3pZkZEqDENnxJydSkAmvmrmL4woQqyyF3hrqB1huXSTmsPQiY9j2zPeoHGn6tFyBshJFUa7gNz2L",
  "key7": "64UxpM4gWMMrbzd8sqGJo7mAGHRHZrV5yScnDrqLicxLM33mCzGWX6tRASEc1sxqizJSgHz5ZzxesvpkwH8XCZ17",
  "key8": "39eBgSxSQj2XQA3PsKKJggs2ciu4rcErhWhizLQuPu2AYtMYrjRmoKFmkCTAfb91HUBrpy7VoyjPXgUpL1jAStBB",
  "key9": "427x3RdLguKFD1A3XZArDaXcQuqM5AKkYwtNL8UYdNSoCYDq8F9tq8ZZ8WwxjzMDiA21D3sLvAeGjiypgqRhYrrV",
  "key10": "37Rwwd2gMyn4i8mz5KU6xWYUri9YE257bAPg1RgmZxGbfWFmKMPW6VEhUXybh9nfRoGBmFmRABz57Se3uqGZRYFR",
  "key11": "45MmFkG8UdY6v81npB7xHsyhDbTAtfrLL3GLktYYhGJ5WZLMDpNFR8j82ano8GTR8BVfkL3m1pCVKbR1fegyvBnd",
  "key12": "5Sri9yH1MapNwPJqD8Nekqwy2aV8B8WMwMnqSzJyMbNc5Y3i8q5eGAzWFBjUkSTh4B9FEjQPzFiueXPGS59QrTkw",
  "key13": "3rmrAoRY98Ey3hwcGx7T4dGEbrSUxoMYRtLKG6B6SUaorgQhX7iEA2vZmQFPuwhAnFNCpeHQ3oQK8X5MFqAN63SZ",
  "key14": "56qXuptCKCGgciyJyKBLuYPZr9fhZ2nMDhHDoRiVE86hixx64BYHqqH81uazKZRNm3UuVr4qXajRu2USSZZgB9uN",
  "key15": "5GMCxviipxGNttfZVwVQBjYWhbZmNrC4X2XedNyCCosmFrRgW8CiZSWZ1QSQwcEDwJmpQSL3aLxh78rVdfPPDMxp",
  "key16": "39U732b3cXJWZNtBwZz2X6zUep2HtbUgFfHnff8xwNgbYCXSmHGuq3pvZ5bZ27eafRJLiSrGR6eSJC36JQTRMLm7",
  "key17": "3sg3k7xM42E9mJAEHGHhVaBUHgimqHFPiHjhL2tS4eag3kN5YPkfPoQvuRWcz1nnUKUetq8xNcbSVonPVv6i8Jiz",
  "key18": "tKZTSLd6zE2NaaWLyzJZkjo4sNTwepzwo88vXnkgFun99EHu2Ws6em7RAfcNGKxRiNsPZuXTtJVhQqVkVAyAgYT",
  "key19": "2qUyrFkAE7SP9wLBwYMfHsFuWePgz4LdmMkfq3e6Te3mWBsxPyGUbQ3dWP57UGpwN4rcwrTkPs1K5zeNnrCmeozj",
  "key20": "5eduAQHZbshdHYVBRuAdxpnYryPeFQ5TUoQaopobxRnGTKpqFWPBVQshVFzzGcgCHVPHFMDzMQZhrnBa88ZxkLJ2",
  "key21": "oCjxUGr1QLFfuTDbdjzAVYzj123mCdMTWBmFGfMumwitqaWw5mSDorG5Gya5LSsKXAp1p8TRkTFDzZq8xUWLFVZ",
  "key22": "5EdLkiHTKj4UaC4ALf49jc3x2Szcpgkeox89KEv47H3J8djpC4Hjt879b53ZMGkihSnXF5YCCa6XjGoABWRzpvPz",
  "key23": "5x4nWT4cc9VVYXFkBvuuq9JHFrUPbFAKBc3FfTrKRYJqGyTduxmZHSC6gkchvMRK7HHWtxEgmCkjXpyCw1Hh1pvu",
  "key24": "5udkNyKCS2vt8GVAHKYC16un2MzAZ4SZ38qf3wHPMshTrmrCYm1cbeGohbDCSaNLy78hVEfbbA16HawxTwLv2Eh4",
  "key25": "5uBBjnk9Ext9hc6AmnMmB3rV6njMChyRr4R8r4wDisY1HebeCqPztn1GgZiVcrSgcCWexZNWJLR8P62QDFBzM5pY",
  "key26": "2jTHFJibWffyyej51MSerAAnjQ7Sf6QJn9KN8PXXXNLNfiSSew97e162YSxS2KDP7RWB9fKnWVL2KmKS9yRGqTsv",
  "key27": "4ECfKbndCC3ZrMcB8Bu2sYiQr7JqvTnVLWGcTdfcept7hZ47fx6PTNN9eqh62GcoyJ2a9zJxDg3zfL4jrZvbu3T",
  "key28": "rHuyhrtgHhjv1cLg6SsAuDZ3NdhSFLFa8ZNGarytgt2MuxY1if11pVnWB7cz3DPcivCtm8kAQvCebHdzsxtskUG",
  "key29": "65KzS1yjqVuTudtykBr2bybvc4WD67Eey52XtCxLcj3cgHAUoUqkjDjgmDFMqXjCQfAWdBhEG5bcqsyeBkayhxLk",
  "key30": "kx1cPaoaaP81YGE2JMigBoZXkenKYj6bSt3sa5hJQDg2XaBZnSZZ9LW9apqNfVod7PY9Pkg4mmi9t5YnPRFT53R",
  "key31": "4ahDHidaYsYhq725hXwQ5VFsbMH3vsjtZsqfUiT5a12qDtiRx7V2DPiZrJGAQNk3etcLUyKxTZMhDaf5xPwWacwA"
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
