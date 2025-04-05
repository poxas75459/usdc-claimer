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
    "csWDLMKVnoJT8EkwW8nzoskYupGt8NFP8CAngf2g7yF244hp45r8RYnhShcbr1Kfwsb4mnAT1oB6skQ62DyuHfG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pSX3EDa1eH8oRPjyjxXqos45AApsSDGQDWTGDFEWaiqb9BBSr9V8WQfgarivDgQTYp5WBH7Y9u9CVE967f6WWQF",
  "key1": "4CVV7p3bYYy13dX986qTkdvqYY93mYVeQoYn6oUemgWPGiDkfWzKgf91LYjbipf5dESRRQuUMssmnKndQbQ2ziKs",
  "key2": "5N3hzpnxdwxEsjXuY6yJPzLc4CY82hHfEszwLxE4ZCCNkRitVWwNm4WfuRCeUn7WCH65mXDxxKhhGnEKj3bGfrmH",
  "key3": "5bGWcf3K2hQstsUCmzhFdMvCNgnRNHdEp9CoaKk7zucemBhmn4QeoZKbLvPxB8xS69bC6EYC93V4oUznoDFUbm3z",
  "key4": "5ZmiXCkJNxys9j1mKBpe6KdQDKnUxEBLxAgydvt98KsQ4SNn3kaU2hBQX1V4HeQeCaatBGKjC8NdRaA3mnfiGpaT",
  "key5": "qiJhtcxeUraHskZdsWRGSkNRfUpj84TXpeYevg7w4AHPs2KTz92CRGAX5ezc5u6uBKMb8bUNfVJYkqVpKqaMFkF",
  "key6": "5yELyHPr6C6htKDkrsgWmXScmjq9ui3Tq6QWB7fBKmLQtCJo9h9bCmZ1iVVwf41LFwb2VSQh3bzfr7ec3giWu3MN",
  "key7": "5bLJuKVadD7UNXQntNt3d63hQvVsWnatgtMLfdv8JZYhE3fBW1BSz8S43uURzDx8HnDg5koG6eEe97iR4RwcLNUA",
  "key8": "4b1ee1zhwz7U6uLicgyiTe1d3pCV7oiCPSWSXtsLUJe5rXJko6ys9UaqRwfmPgh7QgtRw7mzYyybNRE63XCH2uHY",
  "key9": "5qvwrpN1BFxSxneywienhbMGFTyYDBRsETX7f9KzGss4fyF5GmWQ7XbJC3Vma21Kj1jCznzHkoaCRv1avC6UdX9D",
  "key10": "5mb4QsWZAtjc3Mmu4xUa4qJ2FoAXYuE3Zxvi9PsMrng5uLp85428ZQsHJ5sG1KP5d2LpwK6htskW9PmKavnd76gY",
  "key11": "5mAP7UF9TYwkYQRGCQR5Se7tyXACuwh7k22XJ51kPxAyHYcH7BNzfrayNzxKH7FupHgoVyN3fk6u2z6NjBqsFdrJ",
  "key12": "4dJLVkwne7EXpzso8MPdXJL4scVQYrM8Cx7uXVZ6VCu8E7iVaJpRszFdMocZ5N5ewfijM2UFsdA1SUZCq7xg2QVK",
  "key13": "3mpraV4YiQhfL2SYEFe2mUHAhJoAi2vejDKvGuEbhZUoAEeddxCtd5kSrBjWwPdvhbgc99UEwJjQVr5gfvyzbgbp",
  "key14": "5cPw5NV22GXnjPmjqoazTjMR4uoW1bCbrCJ4d17rR4eWbcEuaPMQBv1rD9Qm4GfLdd2h7yJa6UiMzck1hyhCDACP",
  "key15": "43gJbng1W6SrUPiWanv5CvZNsRZnhgXXY1vJ374mxPgXC6JfUktvghEsAkoNmw3uKQXh7CNYP7jviui7ZKL2nNQm",
  "key16": "2mtLtsrGA93X7j66yemp6H7vdcSjY1UbKtmsfjv1vcb9tfRLWeMXMjqkz2qwgeouH6RtUyax4NncQAdHVrdDPkBN",
  "key17": "agYRjrTgswqhpKSMsKadjktwmv9oByZMSRJ9KxrmyR9CVforhVpSEbrsUFtf9ArFK3Nt1VpiufKjEVn7HxwRdKL",
  "key18": "zJyxnN5TTqnTSCP8ASphL3eGB3AE1U7U55qRhPo1tEK2kc9aH3zvVEeaxtSafEh9Lad1g4Huk9Ccxbhrtaw4cQK",
  "key19": "4BKzzugB4gpJRccbSrV5KpErCVXEeysLNYok1pVSUGvsiJTWqpdGDiFPENiVz5W4gpwtFvsHGTm3kYmRMunKQaJ6",
  "key20": "4XZJpMUZTvc7ZezAjvFMJFkeyUcPFUkLNEziXj85cUF9tUZkpmfugYxhnwHkKsQSxSsk2nDTv8S7E75ZKrJKcb9W",
  "key21": "5Pv1jSn9HDSUXuciEN6eGfpskTZpcaBNXTDFdWv1gVLQSk5Kp75EiYiefCBirawM9iFaPUf9nqa7317NVhm7ZvnR",
  "key22": "3gMvzfbRPHn9VNyDBko8jkt51vrgKztss4g3ZhHa79jKFxkfwBJCqhSCLNUcXcPp2McWtBUsJKzwLHenoTtkJMjF",
  "key23": "64frRCX43YmP3Yuw8xdaLP93PrtxjsqcStz7e9nb66o2DpnCvffrWJLvGz6TgiMjrKX1tgWqqkCjhKZRrQQVQzQY",
  "key24": "3RPsPkpCrg4jAofRVEGvLh2CT4BMTZz32UgK37WSP2Gus2Pstv2afqebfe9FGAjRsxEyWidRpTK3hgEE5tFHEBL9",
  "key25": "25bJiho3sj67LTdxWyFqdq4kxkYRzW4gTLskrXwuWgbMvXFCjM7LVFai6d2bUanE5B8yV1jE7mHYs98UXSc7jBD3",
  "key26": "3NGS1KbiB1ajSs3TQroS7ESrr4dTGJKfWAs4JHRPhNEQEgcfYq7cjkh9M45aMjB3ivAPWFNKAE2PTXQNEc6vacah",
  "key27": "23qS4aprEzmnkq44iatHisLKTGhA92kTNYKnDob6NEbforbXFAQYEj8EyZ7o3qWUvqzXEbiWdnLPf9xYSFL3UFQm",
  "key28": "42ytVLW9X5doZswaVfPaYikB4EvR3BRFgVZpyGNz7pne2WKH5VQ4TzfQ9ukENmvqeKUdWDtHg3uwCzC3KQUcNyWQ",
  "key29": "XUe9F4dquW1e38zxvUbpwVKbPQNAujaY79BBkpCoSML7kmeBV6zaLPqo1VxvZxTpFWyWBGLyv3q98YRkxgr8q8W",
  "key30": "2JT6p3fSAxktApr2Qg2axoSwDVYdE5Jgh76JLjFjiVsd6pttcoJyamkmPZSWeAgCVMr53BjJqeysVxmqzNerVThp",
  "key31": "5cVSGMGpoEvLFxDCP3cMK9S68DRmv28aYwgiD681AnpeSehVV9HggiYSTeKqk31Ahy1s7zg8Tv2n9uPwziKk3j4g",
  "key32": "5a2RXSAQY3ovMF5ty5CrZkiEwFJgyfaStmqNrjJJXWtpN7YpmiwNHZkXXzZeXTv8JB9XkMJ6BWmbU3RV6E76oejg",
  "key33": "4aNHXKEJztZ36EnUw6Kefeppp4qZ8BZThR6L8Pe2QoRKM3AZoJUZETC3dP7NtP3QZM8Ste5y2dgZDgq1mxBQyggJ",
  "key34": "3pBkhJ8Wzx9x5gfxGymXukUiXQ567aBQHgj244VuxiQr2po9gvUqa6PiKFtd2p7ZqRicEJtw9VxSTQ2E1LX6Efts",
  "key35": "5ZXWAqAWbZDzka1oPym4oKA2HNztvbc31o8fRk39mBKx7C5HDwBxWZwuT6weToeMGKvdWzX2XhfiPCuxrxr25JAf",
  "key36": "4FgvuxnFwKogptbHDCW49WgL5q6WQ1Pg9Q77i6v4GPKDCFeKyYeaCPLn2W9JGD9A3mhHVvn1uBD5QryJrM2rkG8T",
  "key37": "yZMMzJQpXuhJq1psjxCTAGDP5CBkvrQYzK6gbbnrKw7MfNFubUWQizNF97Hf7sysQnfDBYenEXasGY6k43zvd1x",
  "key38": "25xWD9pP7H3egs51b9L8EmcSqw1qG1A3eFEZYTcr429sS9M8fwRLFxaYbcXDqR6xUmvwRQg9oaAMbZSSgmQXaPaY",
  "key39": "3PNdyAqTH8LUc6QvJnaMk42wGfQGkabdgy7mQJ8XrAJ5M3aBuFjuRNjLVQ17VKs9tRGDWTLHbdiorfXJT9e1MmSm",
  "key40": "46Gb3ehUvWm3KSH9ihFbCCoFEv5fnwfacigCq8WdCYV5rprVDHz9KsPFJp1aTVpDCwfgq2BVht9unrxHFdCr8PUA",
  "key41": "5uSxR2w5y6RWqjPtTKQNKaBMoDGeCi1RBxiBe8Mc5ZHmufsiSEXrN6jrQasCugaCMYf5Zu6KLZaQPRVp2YGy17XC",
  "key42": "KFy3ddPiZ395JnDzSjrZDFdwCPZEqj2fbmRga36wHpyfcLbJcYzUk1grpAC1TJ5Sk6QWKJGzTL6fJaja24sL3gL",
  "key43": "2DGLxzuWTRRmQAop7cF4H94BEtxKdZHd71cM4pGmM8vx9mtmGZnQ4jMf832WNJgduWhtqqQ5PcWSzyhybWS4pY7k",
  "key44": "4pocWEapRyxSkFe7qHc6jWusM11fKnJyaRsdBSGywbkgY9kjQvvcStfdLFD7zbh9A8mRKLR7jVyXfL18pdE3QxPe",
  "key45": "63ZUudwBQL6wobCtiTTpayTZpRDjZy7GTziD8WowryzMgyjLZfeRPCsVJNqPHdTXP85SWPWwHtjULciQ5hafbBKr",
  "key46": "2NxdcarLT3mMXR8riobchm214GyZJQsSXFSd1Mz71BpYoLtCCTPDTR6xm6JC4Q6YZPtNZCtbcAkyoTgfKyTkn1Jq",
  "key47": "3qP6ZYipYuksCu7eMnSZf2yiBijAS6k5XGJKUhpiaQmpZcP4xF9yfUa34TNTbgKXvw43N5kB4wXm6ahnWxweNZnk",
  "key48": "4wiWRR97qAF5JgxNFZwSVGDY3BNnPjnQDR4R3jvZtxvcM5Bn2yKps9CxH45HxqsWrhKTU2HE2v9sFMEhSbkm1pAm",
  "key49": "3bKcNWp2XMiFigas9RgN8qHQktNc8VQeVUrYTPb6ziaTBdpokzZePCntdHDjQGBw4UFSExcsWrcbqNvoaA5D3TZQ"
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
