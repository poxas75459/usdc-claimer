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
    "3pvC2FyrKHaRcDJWN69Sf2WkuV3sb9TVcQDWdcFDLUbBcb4MG7rKpe5Ywnf5sF4Ktg9yfnZrndwWVjHpLSD9EXV7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53vmEmTa9ehsDbQbCVFu3XEVf9o9EGBtZCZXzSRVVy1ojC9aRw6LPcNniNMvFXQhrJoSx9oq4VMvNq392A4BQfU1",
  "key1": "3BeXB1qnH83BMTnurgdLFAKY9aopsCePYpDxyCnbQP6BcCxjY3atijbhE3CWurCFVdYaHSvkFsQmdib246LmXmsh",
  "key2": "2ETjRqaNzWKebCRHNYg1ZTfz4fN3NTUhioaiaJHXNQQemJiRKJ3WpRWFQFRrutv3KYtCXKPkoXjjcbtdFSjwg5c3",
  "key3": "myPwHcGKRzUpWCvDAUaoVYfdN1a884PmVk2pyz72PLiCcHyVvcBDHFa2gar1EdaXtpXgDWoEtTJQb3mqg2uUs1J",
  "key4": "4eZkEijzfWdMCLZEewbTDktGUcZc5fZopv1Fg8bdoiWcC33Z1WSgSu6KtieTU5pPbqXKgoWMZt1bNogPXu8YGA4W",
  "key5": "58nwYVr5nE1vsXd5hHrGExurkS4qAXe3UG5HPbwcEQuNcmo4WLyfRYu5K95BmAh25GRWDtMQEL7qLFki8owKs8SN",
  "key6": "28ptP4pYWqnFrvJfvwFvg3N6noaoXAkhRmq1nXufVgSJ36MhZn26nmeEAghw8neyxYrbJTNCeuL3Wmn8zhbvzJYC",
  "key7": "2PBviwJe6TnKJYBTxYVnSg5MifB8JLgweKkErfsDHcQDa4rsbyGtJVuKsDkvcBir5Q5VN55Dig6ev3NWJShiGDuL",
  "key8": "5BkCJgad5jZVNCASse5HA1TZFcz2fBnQaWcU1hfw7KfV69WHbYbe9DCKBt8S6eQsNgCHM5FGR97j2ikJDzWU3EAL",
  "key9": "2c59NBaJYpuoYNSh6zNZvPRvw4oYQbiQNj8a3EhSVpi2ZQbwZRwVrbhLq9jMuhwL6HtHUwUjWfG1aKi13J2qBhHW",
  "key10": "2QCqYgxQk3zutnLRSjB7duqEAs5fyhudUe4YDipeoyJvHUdg3MTthmVPkf5BoBDf9iTupRNFjwD3CPrP54VzjRSd",
  "key11": "4d9baUbDF37PhFZ6vXK59RDwHL7SMTxWCjtVaim6ZcjChar9UH7pFLjAnVvrgeTDVfPZ8uUqZmk8gabRpLEUYtF2",
  "key12": "3AteLtZ7LwgDSd1T4fpD55oHzpo1jL7AgudQ91CM5Pdx7CdJHGuYJsbBUZeSBKvQsivtfeo9PUgiVGvne4oPkhhe",
  "key13": "2wZyydaTFtgbxhDNUmrGJ4cmu82CRAaJcjMeGFgSaiQ8U3GXpNVEuNmfGjho7NBZrd5XFMTunkNV1hZzv3S6oRri",
  "key14": "2MAFgbFHaCiyYCaMz96NH3eCMawbZhmRNowS22HZgM4kcpAnc7UB1uxU3SFbW94aa7QPXuAXUZBmUfW5VcLCUfbd",
  "key15": "5fipABvZWWJXbv8KdLoGFyYR1cxfSLLBJVNmaATvLtDmZApUM6qkLwSjCrjnEwjuRshfgMxrmNmtyquFYNBb5mkF",
  "key16": "2HvF4ebpAMayowNyK9PNyYtj3JUFocKR18Q1xDmLg2dTbcAPfxHkrKrdohug2BmwmMwq3LETWY1a4gAFCd1nofdk",
  "key17": "CzZYTKXFC1qFdMkSdN6kB87T8Nqw8VSZTs6tsQJ84cAGCXAfKJ8ZwKLjZhPTEyQXuKHwgAYpFwHag3c6eVJhUJv",
  "key18": "28N12BLpueW1ZYAGdy6EJ8YtjhxZ5bmJPpiMz91AF2zEPB59D6xJZY44UQHjswsTzjrkS3jB35K6JWQzpQNZpGV1",
  "key19": "5Nm7itLjirsUwqfidWTR4MwYRDiAVPA51VTq7BctkPdEjtHUSWGSTTWZN76AubHANbvLqSCE4GtCvDfKmWDudyFf",
  "key20": "5i2UhvYigyEfdPyZAMbVKDANuwMRVJgFHcyKJhRQa7Syz7z1beuRCXQ12mUjnvbXUFbfSpqyP5KkXnitcFsW2axh",
  "key21": "4pQh4aTxte9ERz7f9g7DCdGLhW8NswaU8uS8uek83wbdzbBAeu2L1z61R895sdQ2nhr8GS9RrpqeWPMz5jGbkrL7",
  "key22": "4N9FechyJpcWD4mzdbTW6Xozdcf41gNco6j3ju6WuNh7V49tawf5m9ocNaApwN9PN74rW4nP8qF6cWt9J8tHvcNx",
  "key23": "2hkf8hi7knguVPrt9azfqy94ZGVKFomyXk5rxaBQKBEHnVuwPp6RfEz7BewPuFyZGaJHf77qURbRYVjgDZPZAKdT",
  "key24": "5ufqUW8kuJDjxgPNgyjPjrtD2HuNQMBaV4rbLA3V6BUEnsq9oZi9U5WcJ2cfP3rbHcjLzCWFKUZcoUPWmKM1Nhwk",
  "key25": "5qywP26UdGRKQ6tKXb93nyHhFaon88z64Sjp3Bc6eovqq1MpDTRUC2e7fN2yMoqibH181G7GcpRghPnoFyCYRj38",
  "key26": "2ZbdjSCNufji6ruu1uVjbjsB3m3R3mbkwXhNKTkrpWgdq4zuF7eVJ3CA9LN1rRSh6P66eL92rsGVyWMnb7jiYjy8",
  "key27": "2vEpTQwPsiQtn5GoF5mBqbAqM6NKtvyNZ8ELo28ucVrjEChcmSE8Wm2kkXW9jEM4n8p3dcCwgkQD5SRfCi9SYMZ1",
  "key28": "Rjovaze9KuNR57fVjDqs4NVXxoWjYvb9zzS5yt3DszoR7stpxgTxDyTADi7ft9Zjpkc8HWkBZh8yiTVWN4q7jSU",
  "key29": "2YqeXoDgkAmNpMqwrnAspZfLHncM6fx9UaeP4jAM7HpcqCs4iduqBqJRyhkYbrqq6pCarpCkNf1LFqDLFjuxg5it",
  "key30": "2URmPmxJk6N4tnt5Tf8SDLQqGcdx8ybc57Ay6dF7pbMKAf9ht2Dpk1xea7vpykxo6sD5F7WQHB8tk85bJsVsTexp",
  "key31": "5P1erJXQHHi3qAGj2jDch1RrHS2nrnUiKfyWwcD7HbAj4uu41bkHcfC3mUfa1orkLyYzjGDgUrRGHvxEK9E2Lx7E",
  "key32": "46L1WFmzpCm4ahn5abnuc6nxDZsRpaoWANRpyDnpaw75rdEr8UTrLXWSAvwdQVtN7KQ5C39fHdJYPTn1XJryf6V4",
  "key33": "qEtoAn83C4xHcZpnWxKzN7UjVRjJ1HKnxggicjTR4XaPwmmC2YJXLQSHNACTwtruXTwh9itEnEDXdtjy1vd1jwt",
  "key34": "4TVSkDY79Ae1pafGz9ZqbhyNfuHFw6AKXvWrnkGrcsFkgvf2XWG8X6aVX8sanHjDWtCC4VLPLc6xFtLx5M5JU4Go",
  "key35": "3TVreD5rYuw5PN6s6BefBayxaVv25Zwj58k4TvvwrppzEBgQoCYB542Nj5vmM4Z5hyuchm36upthxgMH4QhQfXux",
  "key36": "5Y9qW844BtZoU7amgf56ggb1LM1vdTuxw7vg4skTmiQta67dBfESKfPe3byKA4sxMA4aUdqax33Fj1UW2vvqKvnR",
  "key37": "5tx4HL3P8wwgUffT9iYfNB8z3WsdT3cYAzURPStrK5CVaQfDbTACcfbzDeXjKLwNPb9bpfX2Ww6RjLXX4a8BR9J6",
  "key38": "Av1ZZYsfgoBBcjZYG3kC819ckr65VbSVDFWbLJom3eE3bAxYBVV8pe96zdFBSjXuuTu74dS36fvFyX9gWAhwVrU",
  "key39": "FDzThLd59nctbwWeFA51e9KnGKswLAFWuQzMzUr61sCcvZLuGghXtoAvH2BfTi126XCT2WGx7qXp9Wj1y1LPemi",
  "key40": "45YSm8wWfVfrjmbV6wg2ioge9DsAAJF2XoG835R9pqokUYCkzAWMwuBFv8GYAHEFvVpQgBRKbDw94X7R8u95xxCo",
  "key41": "4AE9uCJ2JdPUAHuopqogDPoukRRLgiCK3mGCV2R5DWeHXgUzhoo2ZhnKWFaw2kfrtLGR4cgC2kdrYBhwov4Q42ot"
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
