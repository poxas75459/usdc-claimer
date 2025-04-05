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
    "4tMmeJyr6E4c7ipG5YXR9B7cxbLrDeGVL5W5UvnJTpuVPeVLKeYp7Mmnvhe6tunEyecNq35RumZLA2wV3QiMMQRE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4niciczLrun9nvV2N9crHcAuXUeMFtgDbaV9wa6AGhQTnM9gtSVmwC1ZaWZEY5xC2pJvD9VyZhkRB7GPfwWZKYvG",
  "key1": "4JiHmgHhmzzKSogf8hp2KGjq694NR4iadStQ8tV1uiC4KpLNFbW4z5eM2YT2cxp86ctnipJxQ8ypFfozoYMnq8ir",
  "key2": "5FVEjpF68sqvnANNLKfonwSHmwSRs3GYsim1kg9XnWfzMayj6S2mdQk1fQ5qY7Xwd1t3uaKLGn6MpYQsvKbHXCT4",
  "key3": "A5P9wB1gaNCkgSvYQxsevCgzxvWy6wzaU1p6BP4hQp85WJdKFaKkrc8NKL4FgEhSVzhXW3nd2YZfbDumP2x9ZNx",
  "key4": "H3TspNKVVY5NJXxE4ZQrmox4sXt5qvHpXC1hxR3g6HDV7jXDdBKMZjLrwG5eF9nu6shVveBLhRZC6s9PUJEwo4T",
  "key5": "2CBq8Fh4FQbgKL18eWcXmMdDVhd6H314xJiTuMk9SsDTGTn6N4NQDPQTTHj6Hh1JXJkdocLij2TNuep9fxHq7YVc",
  "key6": "49W98SvfAShWYAPCDvSzd6M6fZbdMDPUDmRFqVc64TadjD7wWoJmvBUHXtdhfEo4A1Xxm9atYPhpECQDi674tsh4",
  "key7": "33VADHTaK2CMDtvqr6qSjJFLNYJo4uvsA2PLeaAu1LHXMQDao77WqFdEiumK35P5fMfLkQ4j6XvMpFiwPsHSgvoJ",
  "key8": "3xbGy1wnhiwPpy7btdh7P7iM8Bij4urmov4NsXpCR8UidKBnHgUv3qCPUmmfE1jDpexw4a2j7JapD9hLKB6kazc5",
  "key9": "SQTbG5sfGY1kyzdDFE3rsw6jd89UsaJLNPT1XodzL4Q3nbNY5MHjuPHakmmpE6DETRoGVmaaQYV6jSnJ1gduznY",
  "key10": "5yJV8tTvnAToDrU3xHaRBvKKwBz9su58GHydhexTeFfASXgShPNaNWbm6KRQ8N8XJZk2YLvk4Bdu4PWhNJX68sS3",
  "key11": "2fo7HyqwPBQPdJNMn8VqQCa2ki6s3jcY8BS7mvgUK54cKhzwX3eoU1uHxn1wvDJMsVGGDwSpoC2s6WaCEHbKYeSA",
  "key12": "K5YTyKxXTG4rTB9PRMaEFGzW3AkE2YuTyn6YS4mwUnauKup6JeT8GCh3XUSqQap1bTRLMoKk3uVDSgsP3W6qvw6",
  "key13": "36gXoE3oGCCHzTod85fQ2cA5LeBvkBDrhFQ3Xrh4zPzTyPHtDUQYDzhdK6o36zqeZLbxDTiyawDHDbDwH6C7sV1w",
  "key14": "boYYUbBnMdTbUaicpePARa5td2WHgR6ceRzs8DZ8eW1MJ6WexRAmShmS3y9YNz6HWnyWkBaKq8VPFbVvfeSFCe6",
  "key15": "4PH44VteiQUtvrXLmJsG4xsHjHr1E7F5Ft3tJr8aqLvM3W716iYzVD9sRQZiTnHWA2pyZyRJPRmEnb59T6ADrKWp",
  "key16": "2yoRDCh4ScE1yYistm8auJUVR3NLuFhQ4SQR4G7FgWCJWcqEdu4f7h4yew4pE73YoT3MYauUQhXfP1Z7GgcHw1L",
  "key17": "4Ffxic4CWaZwsgM2Qe2FA65Atsjk5E4GPNftt8o9bpxumWhbHWUgGofM2eHB62vxEr5G2ncfvzNaQnfjnLPXhYLw",
  "key18": "38L78qddJ8WreiBtPFTxFP4tq7dAfuhXQfdEKg8qLufLoeNB2ZeeNzyQcvGnoFBuKKut6Y3qiWSkKPNYs8erYtEa",
  "key19": "3dWivrSEKotTaRXU1cUHdXKvVMJs8vKyMpjrMp3dSknnTmEBbV3KnXvaYTYzQBaBPhxmjCuCF8NLW8PxBZdZbeeW",
  "key20": "3vUZ4ELy8iPSug2peponq32BNaJ6M2Sd3sffVgJzbrbLBbK3cG8eEptsYvParTWkhBGREHpQ1zh2jtRHQUPyVupR",
  "key21": "4YJHVFqgrRfLJd8oQv2gJCEEzFwjrhAkpYRRMjJyh6cm2xXo8vKCsMPXUoazgRxUdzs1JbhHKiUe7EXnovavuJfQ",
  "key22": "4od9BJBeMEYaVKayVj5gJkMdbWn3Rse3arZzZjmoua1rEGKTUUL6MGSUF2Q6Fqpjxvrt66KzCHSf61HiFs2ViJKm",
  "key23": "2noj95st5G2A2iaLyE5MmkpUXqFAWkGFHWB4BXEKnnY5Ymu22Q6XrdXQWkpmo9z4SML6CFrohrFzV1aSkMgpEsVr",
  "key24": "3k7fhMJKTPuPJH9BeDPhcFnEdX9T9GNfVrt89s1JNgDEcZS3o9BQhNM4eaDyAQNJsXcP7imz63YttCNgY5uWqiso",
  "key25": "4L1ss4dEaeCML6DotarponYV2fcWRY4poY1ar9nvCiS1qJ12us5gLSWcyqCDGpKBx1zxMMmseKoErbkVFDCXYKEd",
  "key26": "4aK2UqKTA5BzZ8TNMrTYyVgv8dVxHEwSaAqzg6Y55g53YfLbTvk5CGcyyocf3vRGYjvqEoSTxSetgkewxB3BoAJ9",
  "key27": "WpV3B4fxjbtMCN6NoDxvAUfdKGujfJu58dJyWHcjUhq6wXvBGcTs83nY5p6JLSoAYVg8XmkccUQ8ZJgs6JfiwUg",
  "key28": "3WvdxfCbHKgLfZ7Tgm33WdERQQM66vMZ5MojYzZsRd9VZX6VYKvRss3NchvWT1zZxHp7uxa4adGEDHAFDfFdRqv6",
  "key29": "3L97ePG65t8z2piBdXyXfmnu5FE7nn6jCWsbYHGuprbKcN59E9kdLqnQQbP382FpQokYjvQ9FevYRVHFus8axJR7",
  "key30": "3MKSZSPfC9BmS6C6r1nReq5CLL3nSeHZrkzUuBHo78G3QjAem9GQ3QhyHA7u4AnXMV7G2QguUoUnKLcP1yd3RY2H",
  "key31": "S6dQgMH7qdyDiMWS22PurXsGCTAoN3RwSrfYX7SmykcqoKgTSaqWjtRXTgVXWyyjpTqY2Q1TA5sKrvpnYTX94Do",
  "key32": "3nqd5VZhCzUWS376K5N4Ey9Mv87cqFrCA5nhqzZf7kYmDxaRsn8UUjisbrcLizizKnCMzC78R9YwPwTkh3BYwdEM",
  "key33": "3TYrqJUcmtBCFzR4ogqjNjjbit3gqBGS2vjfY7JXY49d62cu3UdDKH9hwSV8ZG77JRCaADLDPJeAqALnA4X4Mwdt",
  "key34": "4DhFBzRpiYDjmrDi9yjZCZfVdMeQdaHknLGKWyJKNDriVDPAWPjamdh3t3r7kEytYHewGWvjoVvfVqZRvYEnC9fe",
  "key35": "2PyRbTRhz834FMRoYz9hWpP7XtdFvJaFCsSkpECpmSLQtLfgLVQFozcCtjxJc7qvEy87m4qemfrGdDkdC6BAYJ7e",
  "key36": "MrU51pSR2YcfBnG8gANmymjJEaaojCFeBkCByA2XFnyw2vpXSisKe5YYD38kASogmxKmoPPADzUHaUbBctev6XW",
  "key37": "5aTYXnhfvQ2C2uScyU2YWLefyLWHvdbG1TkwYdT3E8uXGY53VS2twXMfB1fhy4pvZGoHKouCFEzwwxPPpGg7M81R"
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
