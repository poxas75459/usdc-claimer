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
    "ECkvEzhwAjfabbcajjvdFC3uGM78hh3t7tt1vEggBu5jY7MfVwanW35bsbxnJXJAoDre9zXSQK8YKoqzWwUg2UM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xbYeCw1HephxosxPZXD4Wzr8PfPEU3DQzW4hA6aorzQUDpkfHBJEjoBfPqEH7qAfdjPmBBSiKNF5D5EwLZyxkJX",
  "key1": "5HroZhE1qUdgjKgdiTgqnmkxyCKkWcmDd7c7MbME6MEWm3eg22Dv5sVDhikPR5uBK6MBzajV9Pxr8XbJhYNc5oJw",
  "key2": "4WjE1Zj58zkYnyp8RQoxr5yR3N4eLTQ3xamrpmX9zNY7RYyfAMrKskiXUAbre3noJVL3ATnNs395WgGKRyVfkGZq",
  "key3": "4BSwwpbbGyshnBw4EBSBtCjCxRPxkN4jAuJSzNoC8fUAv5k8VfmXTGGqakqhsZ4fEgcHABqgPKKDvUU1a5stqtMz",
  "key4": "25cMRhPfLg2ZNBtRRjkMJrXwsN6pWFeVpd47WhakMUEBWX7b9qs2K4cZdgcMzHE6Hwb5diVitoxf7mXiUqvEKN9C",
  "key5": "4aySESUWmDYdn41TX1c3dUsyDvv3sPCz54Jw34SoRRrnVddQ9QMTewGxk6aYh7BATmJkoRPBMDZxmxPKPRu63SdA",
  "key6": "2CaRwEitvimCeGmQLfjXU6dpfhhhoh7ywwk2jAQ2zVdqsyQQGF6ukVb6N5Pnz8quB7t9nHtGTCUiUXCm7FZGG8Nm",
  "key7": "M5vtTKegQzpCwjF5SXzrgV44TeQWpJeptjAsGPRBXMg8MLHdCYV8KQkXCtfgwyZRMj663QR36qWVmn8h49oiSFz",
  "key8": "iH9PagsSkbNbXQ5d1i4EGuiEL9iv5rufY7ix2se6fJJnY6uXkXtAcrgACRMcLgzR9Kkp5pMoeSnfZQLr1NKmcSs",
  "key9": "5Vs1hbqnNM1Z6RvkZa84Y13HdUoJgFJ6siS2tUJ6nLGCBNSLSZZnKLMD3538B6Zieq1obcYJ9VFqUgfHCqe1JnVw",
  "key10": "2ysySGJtJYHq5Dw5Dqck9aFmifzCnUu4ttBxc7WwS21YjhJSui5z7tSVLwv7diW3DXKXsoFminufTCA8DLk9Cj6A",
  "key11": "67cTmMEzNaT1QiNVxGZYrjkWkKnNaXSBdsVsj9SxdHuE3zvqrNMBYdGA9iF8zkU3tCcNJtJJ99Pb4QKpfmR353U4",
  "key12": "4QDC9faJwm6YfnkYjV1T1ojvSyagbRHPxhJpbzM9kbRn1bR8FPWeTQmhmucQBGJGEB3Lg4qQbmAr7fvDQBK9W5ZP",
  "key13": "vxxNx7oSgmD58vuyQ1sWWDYiCEXgFjKtGeGoQTf35sRzYkcNbpT9BvDutjm5HozydULjCTZTDxJrcMnmZpw116o",
  "key14": "33TgS25kCqfmHMM4B2QQJKFbG7gMFgV1SVez89peLpQjQBhhnDi2VdMyDTSY6dovCp23zKzqfQ9RBoheTh8NohPx",
  "key15": "3KQ5noo98MGwvgeJzio3Wjuq3ZuP8zj5oRNxuBYizFpmzeNRDTXvT25VLMCvqbG2QQriEeWTrnbppD65Ls7U5dsf",
  "key16": "2DM5GANCXbhAB7nSEqP2mRd6tw4VLdsCmg4Yr3Lttwt2v5UBwAAM3ce97mDTqLujDP7A8padFeHwfJZ4UspSa9H5",
  "key17": "249ZT8F8W35u1jut8duiR3tBWWWnu16mMTJuCqfbgmStRdx7c6Znx6vJ1CVnzuVFYo7U155uG6x6qp7cYEEiv1ce",
  "key18": "MPDQmwasMdMFsaUfBBAGQmknjr4tBMVXRdCT6eF5cWspEgPaYpikt8k9LRAjp1LpFKFSBbx3QvzrUJYA1rvN5FA",
  "key19": "2m3B1GyUg5cnceiQnsNM6kdHEqcUHuRXWgxxPoSk1MhPN8Ds79p12TD71dmvqcvFrNZHiAhy6BtLC2YyJDcrirFP",
  "key20": "3LHqhLg6Gt9ZVy7YnvC5eqK89f66vVcZhj11pRPHwz4sMyGW2kbzb2eeiBDysdXNbhTCFBVf1jcPg2sBHYC3F7GS",
  "key21": "3PxgfA8t1CnbMk7GxHdX2ezRXtnLbxX1jcmxYpmgpnP1DsEjYQRBcxR6493WSDbfZDaGkA7xB1MFunyYe1hxVe8M",
  "key22": "5btBBkkSHCnQauF8jjZMKhDvRCnTuX9D2PDxigfmCroeMGwbfLzvW8QA9tcxxoYmAErPMGAfWUQftYrqJZN6tqek",
  "key23": "4PM8t3X385Zmhzp4tGquUwamSBn7VHoauV253rMH2rUNMZYGxhHPuat1PeA9vBhWPENytDUBZpy7czsdwqd7UWZD",
  "key24": "5KckDh9PvpzsFpHHJ7D7tUSrgq3qWyYDkaeVQK76KrjhSFZU3PDwYGYY7uLmxEn1FhWYkZodX7BvpsZccRkAhXMV",
  "key25": "3Qo93RtbtQKV5LfQqjTpbdnbgDtU86QVQQ9PE4sDFf7ZDyb6ki1GDshNmRZFK2BnJL7ANvHWJwNt66M37YYaYABL",
  "key26": "3mLHT93w3ocvnFq8WxxQxbjNwFPUZiwbxD4pznrKCcfSMzRCETqPp89bE5pdRLPs53zmb6aU4QvEjd9Ydwf3v1qg",
  "key27": "5nWXvhSyx4VMWbsp96LEmaQ475zxQ5chq491p2vwXZdJaWAfL1aXwEAPyHCXbEK5XnJJ9jNBqxqDKNZc7pBjMRBJ",
  "key28": "2snxLoQ2sncge9SJZorMzaytVfLhvBTwK6tHbvcKKkErk7VqEoAwiWz6NZuHmDNtKmPhDvD7dJaAYA4Zc78RJdbQ",
  "key29": "5nXy4UQt4KAsTidbHn4fNmQV71tLhctgoQZBL8PdDmWa3N4f79URQvrDBmZ8s8YuHdg5Najg2j24gCX5k8NgbssT",
  "key30": "3kD18i2Bcxi98zPL4hQiQFMXqdx4cmDFDULk7NjXgNxRbxUVjrcQLo17BpzUyaUvj2P9FPBRAas2BQw3R12phT3n",
  "key31": "4Qo3JWURmrhmeCX468VTL2e8hpp6QTGuJ84vL2AeAfxzN8MKEKEPo5wCK3SjLdRUZduFFcyNVPCDysFJJrGnsi4",
  "key32": "28kAcEz1TfuDpkRgEja1sYXGUUiEUsowRVRro19uWtiSxDibXnrrfPJd2czneB5BW3heXUNn84WXqDTi1Zcineat",
  "key33": "3pCmiq5RX9e1mpaJ9Y5TpLXqs16S3ZPAi8heCchSNoEU42oW274tpfps42XmPv5RuoeCKBPgDmCuWgrZXuHMZoXE",
  "key34": "3T9gaucjbJdpWZ2d34bLoJPQNKuJ9f7Y7LAXsFTwk7AkoEFj72WcHZkFcs5mrd8ZZ1a73XTtodNikJHBXCmgTQHX"
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
