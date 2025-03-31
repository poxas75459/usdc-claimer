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
    "3usjV6TP7LmaoQg7MVncfYwFkVVFf2CoXJRSQ3noGKr63izWfrDLmi7kpND3Xk8xNAuf6pqeMCMDwCC8fHsdxetv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YAduHoiUy3fwr49WGg2k981VGnpPMcnNpiLuvtpNnMBYnnur4vgFpvjxhHto99ZkKDSqroix6irKzLZjYEt99WN",
  "key1": "3ESkcEu6mix5vZurTtCAgDKf4yaT6Q5nN7LZ6Z9fLNjR6pGTsKS3n45nPbMhoJtpNSQ8ao27c7KJzNMhpG2h8ffA",
  "key2": "3bmia6YrWF3yPbhfxTr2VwPp1biVYyZcRHK12tUWLGP6RCy5GegLUdTSdfXnR3uwD77utkBMZVYHb7TdjXkTBb7C",
  "key3": "4grjGXkmXBZrji7oikniLRHvjEMtYFg9SNnfz8QDdTEA7mZ9XEdVJcncNgMFKEw2QoafKUJ3Q33QUJBzyU2DJNit",
  "key4": "41nB9v5gEzd6H1HUHCUqsD4t7dnaAUq7JscqJVavokA45BzDLgctcNq2nmucXaf7LH94fJQw4b1HfgyWmnZ9AG3Q",
  "key5": "4qhNWWa81Ev2RayjUkqjG6bqi5wpjE1LE6JETZgCAEVoHrerRzKs2X6SpVxfTC9tGL5fUiZVo6rm4D8MDYAoNntn",
  "key6": "5k7DjGGLpyhxVPdECZwh1cyFKEJu2jByiaCtVDifeJ8zVhuLCPPtU7ig5KKwPnLP13uPdBfV89KmQUvSTA9ek2vw",
  "key7": "3NUK7WiME87Jjcqm5qejdRXd9W9VZMBvmsEpbySKRCtruyMd2zk141phupA7dWi88c1yEKGzuLvfmgS1fWxZbJWs",
  "key8": "5vLY8LHC2tDJ1aFJSuRQjYz6aaPtFz1f5cbUYA1ZbfhkLACs8SvRjZaNziMuyHNXt4bvgvxk3X3B4zgR9egL2rkG",
  "key9": "4mN858s6D8Zwr9SZcBymVQCh8AB3aBiZWi9USUgpGLWipScerH1gvhF1cJcqqYUkxqTHwUszRgrjg6LSchbSQB4q",
  "key10": "2uas9HUoTBsZA4STc4i6iegqLMHvoQ3rkrMuCtkCaXT4kM6hUWXKbagTJ4Qoej41WFvJUTm2GLTpwzGTVXgZ1EpN",
  "key11": "5yLWddAAYZiiSh5wBLeLscyCp1RrqMSCzkqijLqXXmeoNejLWekFfRKCd6GJ9NkR3FzDmi7ZdgvJcbpdiPtgee5R",
  "key12": "4Fo5EwYmszcADPbyXtsBkjxWXJVFBa3XM1kUDS5wZ6kZvTsfm9HQo7aK63ryWRDZ9e7NAWRZfGoQRbz1vs4nKLng",
  "key13": "4AQ9gsCuw2Fte1jqMazekdRoDpNZnhUVRitGrJJVsfEunEwfccfkNKzZmEjzMYwjk1DBpibY4Rf9XBFax1ESv9D9",
  "key14": "4LGTDZCtydZn8aCoN1ZezRt2zzAwqCkks6PEV4Stw2i4LE8DiVXnWubuRitdEyQEbmxA3zzVriSjS6nAWpGXrqe8",
  "key15": "7qpjeMmQnXmFGnUZWJeijx8gBzhHrJQcX5M8dWnCLSGeg84qzE7VQXJ8kiSF6DQFbxha9geQY2WL4rCDwaofvFq",
  "key16": "ogehD3iBhTV5PG1WgYv7R97FT7HMuDHWuYhrZu3fMUwrF1fEwMRSB4k2yPtNHyazRtmPFan3Nra5XEFryvpG6Ty",
  "key17": "n1RLnUmkYsZ78sDGPEprTB6rKoBjf9diGncFWiQVfftqGF9s6xFWDxFKXJF75a9fsjfUe8diNC3WrWnvm7R2df7",
  "key18": "3cydzNxST3DAPf272t4uPuCcv1b1x9P62zKCf8KUUjGAf1E8sxSwEvXwiWTPHQovHhkaWwnTzQfpiVxABaL4NYeJ",
  "key19": "42oBBH69SvyJ1mxAgAAMM7dJc5iH8hwcCJJ2UyLzdCHNtHWvzj1wtWNqpiPBGZAz8LzoW2wmVnJgoQPeJ45ysGf",
  "key20": "2zTXZa5dXuxxEhoVG6NM85HcN1LZ3CrfXE9Fp8E6wrVa6uDFg7LmoZaPAcSGzTzX1tNnUFrHEiTqXPjKq2u67Rjk",
  "key21": "4gXpw4RXwT15zfa4FjQqw773m5wsqp1Jg28dbzVuBPYA98NBdHBcZAXgp97gPYmNnhSLnimCqH7FC654VfNfV5T5",
  "key22": "Yuyv3mMz9cxYFwmN3iYg27mHt2wTfP4UtUxoFPoKupEBZ6HkMr32pB64Z9ooQnFyPjY6FGqm7X5nZGo6XQPACTj",
  "key23": "21aUqahU1CqbgUWHaMFmJWu8AFVXxYyKkmrbMx7qANPeNdLwrxpSk4Mf5a6ZWQMmrVa8iEzJ2ogi9s81YUuKXQLW",
  "key24": "2Rs6ek6mNakYeVk3M81nW5NzN3qHiTzKaNGs3dZJxEPKn1AgfxX6T8QiSJk58ar9UKiWpS7JFcHqsoWJbvHLs4Ed",
  "key25": "2BBPfCZcHdistDfWMJ6t9T71qtrCecrWYjQjzsVXHYVCm43Q4cfhjoxP622UU1U71B6bshdkruBpQZBseRb13JpR",
  "key26": "3HisoCZzNje2JJQacYho1UCukJGut7uNKRDCXWs96Kx7wMqycQaQcex4j3jKCrTN3Xfcrc5Y8SpQDubYGdVVaBoh",
  "key27": "2yBEu1ypZEjfcgANTATRvemqs7FnNLWctF6x3gHjbr8rd64meixrLyVyzShR6ZAkjAkYXgF6GhgypDFgMLB66xHV",
  "key28": "4yXNDAbMYmnUGgZK2cutA8AxtthoEWcnDNHP41EKcn1Tg6U6u5F4zWiN3yzpsSXEGjGeXrDYSogkBUhfhoC6d6rx",
  "key29": "5XEyrM1YazoMVF8Vk31g1q2nSqR5LSJSW8UEcKMEeTJ7JtdMUwa8yVrD87Ecn5uLtg7Fz2ufiXUWUxaa1XJoyQoP",
  "key30": "hyU8LqggsQR6NpBNPmA93Eu9gnGdAZdMjHH3GNrnJVLgisTXHRiqzumta7yuvRrNdzeHtagzu8fpvYzoyguAdZ7",
  "key31": "3RNH68F2CkHAovTZbrrxHPe8EJCegxjCzRx1NeWAG79BN3tV3staqyV4B3ZZGYRt35SFn3cF9ydjX8V4zBp84T5A",
  "key32": "3cY2VbTy4ogQfrsvJtWpyGp11oTberFxYiZkP91EdwiWihRWWLZfGBSQKGHB6sVaQkRzq5yetoS7668h2sNHdnXe",
  "key33": "55saT6Ji16FZ6rP8GDsLAkZptmSuk92RJRWNNGu5LkNmcB3ao7WpxUryJvb5oJDM7ikvtYn8qiXxzgFQ2CYVVSCp",
  "key34": "YAqR7ATf9auWcEmvzTUVSDRQxcj37sDLPsh6N4mSVLbQizGdzya8KvNtxUxDterJtMgLgg9j7marcjcbCGhudCc",
  "key35": "5F3gN8zBV11ToJSYm6hKvxgKTrHCNwL4UECtS1MNNTsLY2sBGe9Bje3pujsXdSCeBHuiABk45TfSaJDsCds5qrmf",
  "key36": "cmwjExPE5fybxx5ecjKFd3KpHFTxgAsLvsVfL48yF7VnFFey46GrpCspUo2D943NLfh6FS2KHMwRQq1DgsGYxDB",
  "key37": "5rqV1TknN3n8TcYqeeoWtgyfHKq8kJJPGKT2Co11p1QnJi9Ecg7p2Sbix8dgyv1QTRd2fpn8237kX6jcNz9AKiKR",
  "key38": "HP2njFB9LpeWYePi1xqkpNz2eFfcKJyGcLuzNTJ3y6X5ArWUGXqLJyFwt6G4UXgfQt4413NJwgXU3bA3nJQhf21",
  "key39": "23aCewh4bpmVYiGrXshnbzji98jk9a4VG1hFyx6HBtNJiK7GKBxyfy3AefanZ1zRafX4NEv3WQQMkvGX2s9LLz3C",
  "key40": "4fQWvEqRzroQtrZHGCpvErgm7FyBAbbSbVCqFWcCoPjx5PkDs1khbpmNpKH9odpgZwS5SqRo45TBmE4CD3YThLQK",
  "key41": "2YkfRFULFUQ8DXnSbNkzrUevUydwo3FHA4EZNdeEo7mRmxHd8GPHWCYfbqnaPACcbCvn8XtkGQWuWPAU9qv7jS4N",
  "key42": "5kyxVcEMcAvVZWcBzsGkauQoL742uULpDtWcp45NGWEu2AbFt8U2wcSVoyJQm9bkhtDfVVDw1CkMuiMEm1f1dEW6",
  "key43": "2uKopDHugh8u5J8FRhY5h4dXMDCPiqvZ17PNtRpJ95FrhwQ4dpFnL4PveA26CwjRH9mcwakMRNUD3c6eXzwRizrv",
  "key44": "iVZJqgcgrzcx2YCxwsben8XLf7wYbeoXszZAQAr8DZQregCrtrVbiMdNEg9nN49mbvXGTcBXRHsAqQAsqdic1HN",
  "key45": "5Mr6cNFMGGaHgrRjvtxfFE1nnzPKso3UWdaBbRcZvAE2ghM46jAvkQTGpqbX27iZqsdy4LyntobCK3Ng9y1FHuyD",
  "key46": "39fEVoE22NQXPn3QR85HZq6b8B24pszoQRqt6XBoK5sgf3aNgUhRHQZfTv4hEN6VC799c3V8G9eG2ubZNP8Ec5jW",
  "key47": "3VC1cDprfWEFwhMZSbRxbjFnFDbF33oxWTDUtkLNHLjvbMMhJ6bLkwstTDfRqxW4ARjP4E4ZzH3eq52im57JJHMd",
  "key48": "GMjsZiV1QjZB26EuoxXnSQ933oNjSVsipZBknqSzGrrsdxuMMMcLqgqUNVE3uJfFq9V3EeRZf33NWxARjs4bYSo"
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
