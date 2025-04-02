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
    "3Cr9dipVHbJ4gmy9QXZnSvcPSsJaxyAFGyg2tc5mi6PiGdz6gtcFv98o8bsiRaZ65AkgG93kmuZd2df6pjDHKmi2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QVvzyqRa6JDi9R7eizgp71K9THwaRLegWNccYNXwuvsZtYUk33LjshHmwuauuPkrCgsKXEBxsZWibqBY6heJMwf",
  "key1": "2pi7qvuaxHioEE6PKsQ7SFHNsypagF115WhPMu3kR3EYTQDF28cxC4t57fjnZquyjtnd6fDbFMxBcNbSrNSU7YGt",
  "key2": "3WRMk1P99GFA8RBRcXk3cX9ViY4QW4Gqy3REJLTgLnA2zV7JwkChhfMd7rWaMtQj33HjqSzgGxdEzsqstFV9iHdj",
  "key3": "38TqAUMBJkFmYuEbrDK5fb15PRfNXEL2LXFzw3sbzuFumyEN2X1Ww5fuGeg7aE4cXeiTYvbZCTBjv5WgPoG984G9",
  "key4": "2fEJUFco9Ricgj4Hr4NQXcHNWa1Djdd2GwGpD3GWaRjHJ95xeKLXgyKCxFXsSc83bycWWpDMDk4v63F3jmVHQBV6",
  "key5": "5UDHTn5XRND1ht8DBfw9uK2LXnCUGdGK8GhRwz7rWP9dtZg6BLrk6zYRAu5BVw5MuFJnVRiVfydWoccgqH4iQfvD",
  "key6": "44qFsdiN52csyTtJhhUkzopGtXAWSmmS1XNj11Qgk5cot9tuypjgvamjf138hJ8F6uGz4CibuLaZSCwLPiAVvios",
  "key7": "srXawQDcy934dMeSj5zWC7jEjp4TSBMiFUVRRT48gBiPGxE9DpB3VbfGjuQUprGk4RSTTGqTE8Z4ZC9uwYBfNx6",
  "key8": "61QQDjLwD64zvvmQzm7T9W8ZBdFVVrkw4HbjCzWdk6ue4Rx8u2YBHUPvd8j6qFPccuRgjU89MYTsLxCvxAobAUiz",
  "key9": "4M2JntcLMhxTDBAXUsNi3jcr1P7V5JZ4Xrx7cZnL9iFFQtx6j9CGEN1SCYcrWXnf4Yhtgfvu7aqGwwmfaZBrCCkP",
  "key10": "4cdVjbQrayP48XMtAp5mYFm9PFe2Nkf4Z2CSLRbW8qPFasnepXfvepiXD4sFhxNMUxd7zLPc2SLzEdXNxGQY4Qfp",
  "key11": "38T8P8UCEnDnbAhL5nfc2SJgZVwd7iZzWUtAi8XVukB7HCRbMWt9M7az4pPUYuEwBBQiiuoxAQHXJjYDZhP6fxtp",
  "key12": "5aS3H3JBubni5Z5CkvjdW6sByX6SykB6Yy9zwgJKNHrYLGcgtNvAEFVVN1JuvGLyu8C9yPDGTzFy4V6BkCR2pHsi",
  "key13": "3XS9HgkDr273TrimAkLjLDuhZ25ev2Ey1knbDGN41KHy1UnpyX5gMjKn7pR3sw7PzTuchmsfYBvDuYbNqDyMz6qF",
  "key14": "67ZnAdtL1PwNqDhYEWwc3cmntJz5QN86Zm1gaKKYtfpAroXLG1e2cdJ5giGFb6EdszT1qQDwQmQXt4B2d7XtFj6V",
  "key15": "4ooJAm9VRhwoQjjnPU2hdgj7zAVugzyYgoYsWTyZktGXUf1nqwBmx8MVxGaBrJrP9Sf2SXjGWC1p5xyHUCRUamWt",
  "key16": "3VVApgLKABfjFMz2mM1aNbQDs2iF2e4kTVyuWPQZ7HszFaRPPxyx7CFu6RFFNezjnWZrCWsmxqnq3G8Rzk4Zvf7m",
  "key17": "3riXKdA9DhiMtPKACkH3fkjyXV8EfQ712mwezfvvpmmeg7qjB2Z1chFUGT1oR8udq1ebz2fr99PoHbBfjTSQmt4E",
  "key18": "228pQu2UPaLRLN27vUTTFjgpv7QXuXhrpnYUBbUMJpHCpoMTf8BWytnuHhUWnrhGsNyCLSv3LP6JUwURLX4S4cDF",
  "key19": "4Sj4uy5sqAYeFXbTEmMWwJG6Fh5YB1e5UR5fFH3YapiYQHpjuEtu8jnyNYnkj5oqfaJw5x9EqC5PJ6hFVMam8Vgq",
  "key20": "WuETJacCNjtofyukmxcx9g5qTK3wfDTB2HXRQuRaYdXkXkVDnHhSsDUNA6nJCpZ53srenWMHpwkaYt4VPNLgVCL",
  "key21": "2RU6p9WW3MpL1ZikvyMJgqa8CcEHKkSRk9awaaLJ1nPAkiSPSJExCUp2B717xJVkHwwuFTY1bx1VSmHykLT9J2yf",
  "key22": "64XAaLPBJJotkcJU8LrJ7UhvC1PciNnX4YcDKADWEvbZyu4aRUz7UuC2dr39uKKomT2x9SKgnbNkGbSxP18atAKV",
  "key23": "2i4ELFhkazcWQHEDi3kSqvj8gGhZmNyNA54ZRLaqsQNnhE4SDYB3eR9VRKGcJ2Keapt5UZTkKwsWCjbYYV8qX9MB",
  "key24": "3koBKfchfDUkBhJXmnovjMrjD8RTfpBi79GBiWXWEczi6maQcNbRDKbVtbruLhvaUFrzmcgJmpwWR4usbz5kNLJ1",
  "key25": "ETzj5wniShCzhG51uwk6wNxtCwPiCwZdz5X4A7ZWTDLcdaA6kfNUFHtXJTgiy2781pJhotnNRku4ZppurcacXxk",
  "key26": "43VdC9SEdAd1q1ieXzF3AvJiV7Zgwn4m7nx8uACRshb4Ayv2U8it6cChjEfB7ZjrBtWQGfaHoXAZGWCVAqNz2FeD",
  "key27": "1SXgBVZjg6YUDsUbGmRQbeBWCQugzTfk5NA8JYNfrswjhjzxj5bJhP2chNA6SNLJxq7rKPqyiiQ2H77GVPEvRhF",
  "key28": "2bnhYTxNXy4UigSuArcjB79WXmn7FgPsuHndaHBx6vkAPayMcDZSMChp2SaPaRGKUdVrwHZhBs3iSkoTaC6Hr9PH",
  "key29": "36mgvszbpAM97EJBKbnS9PLQPLxqZprJYzqRcGyfGy9zY83JqwMwPW7S2ejjsrU8Zw5aJ27ENYiTCy4tXHWTWDHW",
  "key30": "5itQA6UTkpWzRFBMpHnTE5rfyDAVsHVp32UCADa691bDfL2ZdsgrvnTLx28CCdTz9NKiZsb2rjvLZYSueMVnpk4r",
  "key31": "4FF57ZMu2uSpu46Ejf71r7maTn6vMattzdtPkJ4rjzb9wVwvFfyx2BXXik6pYh3xd3bkMtkRZKL5NfJxrLeTYPzj",
  "key32": "3wshTxdG959g8rwPYxQUQSEos48dSyp6mQqWtHVZjhxcetkYqy8WZ4DPbHxt2fEaD8V9Y8uzPbHqz6bnDYYfBKSn",
  "key33": "5PrxGtQhCTuiMzYTHQ72kHAwruk14VXBJyBJ2DnKuMFtcipr7LXjXDPU1ZsRQSHs6YcLrCZ95YfcEjDP9THvZRpn",
  "key34": "5NV3f6eMcDuPhhrqoMCwTkGMMW9YQrB4Dqa2mg6R2esmKJW8R6PjGxqmE7y2vjpHG8Z4g4Wr6TVGyLPPqVUoBQtr",
  "key35": "4fpdPqUKNfhVECxJGnUqGCA3PxKbHQsd1yDfvWC2DGv9SA4qt1pqCV3SS6LWvYnFcV3ovchnhoQ3P6khvCj4bv8u",
  "key36": "3CcEe21KqBzx2xsxfhHgCnfbKQwPDJgwVBkzTJPQHVyvWvWbrGLY4oa95YRx1c69DB12DwGpG4dJNeRFrDJMHpye",
  "key37": "3o7vhR8Fe45sre1fxGEu7ppRgBAxute5EEDHonsXSaRfjBxisdcLdSZcqBf4944Y2sQ9z5KgXJ82RMSJAZiDGT7D",
  "key38": "3uYoFf2hdCTmCt2BQjDZpNFeTUa7YbZb5wnAHCXJPVxwj6c7yeuFHQHZMG3RPYRaNnfQ619DL3RTMJV1THEfbcx2",
  "key39": "62uhUqu7qRAay7kgTsghcstmejPFU8S8WJMCfBoJhY3h1Tj1FoxnNmR5hEVwKHruPRXAEn5ELRDWJUWZMta3zL7m"
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
