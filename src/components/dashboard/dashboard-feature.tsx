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
    "4PU6Ljd6QsEggzUZwomnteKFpqWegbX6sk4VC4Thqepp7dvmxvu84KpamMBJPNdHYF4rTQYLuge81GsT6nvofjNP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r4v4CidgECkDgfRFr3B2TqKh5Wqe8dTd9pQ761jJMBB1xwU2hd7gpcaGrTWq74Lq2Rmf7jw8dF5gmXp2y4CDP6A",
  "key1": "4WjZrbWrMkUcgRrNeEWFBcGkM2rZMo45BY63RpethEVcJ98c12hZCsUutzQLwQM9XcKKGrc46ksmrRseScBznD4i",
  "key2": "3njACaajnZpeUaE5KZhQSV1m19A1TuhmdGyg2PQJ379D6fCVDm3f94Do7NzCYeNfzBRUTCMYcJ1vZYj7vhwmUhpg",
  "key3": "kkETg1SWWbpgi8FMq6DSaWmJ8KX3ycEoaELtDLGPZ2KQfaDvYsWbSv6cKRpvniKiCp9KMt2Nf5zR8o9PF3oRXPm",
  "key4": "4YAP9zA4uPRbo4AESvmdKshZQoV6gRTzuhvhFRvpKWeVf7WPSewbBSc1hb2Y4rdCmU1qCd9hQCM3s7pjrbRmNBGU",
  "key5": "5iHjS9uGkVc6CLES3QTmXUoGDBGFCAKABkDx7TEMNANmGv1TaBKxARa1229FG1L95c9FicRkPm9VAGG9Zx8F7bdJ",
  "key6": "51nmbxjzwTriwsSdnBaiJtCpajvAJiAiFjZRwsTFhxDnLcLr9j4zU5CxZRpiLi8NLC1qHJMgQH88dS4EVN35Hkca",
  "key7": "23VAeo2QrA1gqfGRBYX4TSHPGLK66wRCbcTZQnVkK1VzpfurceTERjDG5rvSbyj5eRvrGLcZ3cyZrXygwsGWjCgC",
  "key8": "nHBwdebgpcWiWyPvvjPzEoisCBLiRa6B5oFQ5fL9mcBvmR9bbXFamZ82oxcYtqo2njmYcq8gCp2aceYCcT5bmU8",
  "key9": "5AGS7JXNkJ764ayDc94WFNeQmXL8FeLBu482P4mgemuyyuXZvVsnxNPZ6poVteWP1uFWgeezG2YmDRLjmC1VeMrd",
  "key10": "2bPRL9ettG98w4ZCvuey3PfEGXP77PcG3UqeXUbEGHstqf3smhVx2tJYW1T4HntfBhTTiieBuzjFsqtLC8mrkzyy",
  "key11": "5cqw186zDjaVZCuAizKLTbdLNBowJ8VodLx82ncmta1kVwCpZ9CxxMsd78QUMure2qyVhJUHRuY63d6dLC5wL3is",
  "key12": "5SBoHHN9vpTqQdPNheo4jtRmaXukTGmLsjgYi4sWXATi5T4dD4GLWxNawbwYuHCCed41NMVhyKXeUKwVWA6D1HQw",
  "key13": "HDwPGMzrWZysHZd34C81jSeBewCXaD86Bf4yYuY3iYXgyrDZeswjCprQm6Vhbjz6oyu6iTh8hmkr4DGDrdw1ERs",
  "key14": "2BDUCZL4f8FGJ31pVjQaZKbVzTmFwkLfUzGuFo5KpF9uVNn1DtDDvQ3cBtXrcH1dt3i8FM3fZfi8zvDSuo1iJVE8",
  "key15": "5h4EQ44tjsHGRQzb2c5FFigaD75U4FmhFrG96FV8XDgA8RxJrZGWz2k3bEgcB9byozFPdWJ6edwCUE8c5DwanrM7",
  "key16": "wVtffBRrHMDGD7J8Sc1EAz41oxbtLUidBFQZytPMaAQmmL9W1LYcSBrYwdmEqhNdKKBsQ85Q9uiPT9ACLyKxpPY",
  "key17": "2fTc7ZHXQzJdWJKaEFqbCt39DghjzX42rWyRbyQhBS5hnSC2U3afgKuwf6apXK8v7rmcqTc1RKL9i5dPJhGTHYzP",
  "key18": "33NXHfVNi2hiVJiebwsNJmfViv29ipRwrBo1N7uRfi2syn3XSxvLbyRJommPv1TtnfbjmThQH2cnKruT4yvsP1Ct",
  "key19": "2r4HtLp3vRy3XcfxERLqiXmiUefd375Wh9w7xLYTPNZGZpTC8NtV6nkR1cNUxyVZAFMB9mWYXRLxu5DWXosmyndw",
  "key20": "WeBzZ1ZrGXdNTcojepnuQNbnyFwP1wfDXjnM7bUs592ubwzvYVV7cvySjaQCkTZeqVJSRyswzVgZ8TCi3StwFkR",
  "key21": "4bg1vdzixT8aCNWyi51QWnG3ttp1Dbv957EiSGNmbkrfho2FPckaz5fZ4q4Z7vkGEy9rPBKc4kVvCnuSfKYVmLB8",
  "key22": "2KtYDYoK1iN9oD22P8jJFd1AirhBzRcadUpkZms2HEK22Pk1f9s9Jk7vJhfw2erXsBbN1ErUjX9HE6Hse15dUSRD",
  "key23": "5bv74XfNnBcCKePXgnaNVUxcqdA1zhyjdKRg5spmCjqxDGW6tHWmDXZFun4TA17J64Y1LbrhkBZ2dhVQnkgYMcAd",
  "key24": "52Q3p8G1M9YPWZFWSXJXVcEam2kUuGtqzx4NJybP8hYnMTA6DgZLtcwrHp6U9VZrnEEmBHebKqjHSsvP7eD7QUyb",
  "key25": "giwYkovYqooKQti9As39NNoEms5p37WXosqFkivSZC5ut8ZjBtSPuMddtytzKw6G7vqx95KxthCdQkLkoqaRLWL",
  "key26": "37iLCtvatHQc4VUzTEmabyiBEcVHbyyaYmPqGoUmUvKcc3TDLNH3zSETQga2UNxaBcDarYeenJDGWBAu42mBGvyp",
  "key27": "5WfQyj8C92jDtA7ck7JYmq7ZVAk7fWyUz4tN4vvUfyz8yN2y9pDmReGAw8g3kGhk7ppvo7ywgCoEnPigcvqgfsPp",
  "key28": "3vvMGZpFZcAbDJB5CWrd8oCyKnTSy9sQcKyF4e5oiAnSz4omcxYgYoDXPne9p6tsRDQM8dwgdizThzCpHfQ7MJ3e",
  "key29": "4WsaPLwQSZNx78mcZEbiJoSp85i6ddo49AYDwcmnmefbzv2wnWu3tVfU9JPUBmBVVGTRs8BDdhjvEXGZZfwi6qvQ",
  "key30": "t2PXv18cDFvmKUo3jd6R6WDhq966PUraiwzeZYBpsS2HAB1DotDpHaz4yD2b1GQtsLZ7L3a35umMRTm4q5efrhK",
  "key31": "4FG6ZpjHfN7bE3jUuhD4AkSo1vk18yke5KuhrjcqXHtsnpyhQ8FgYFk17zhD9tZzbkmLLWHFEWZ3Cxte3N7zLvRU",
  "key32": "5z9wZmXuEW7F8TVACyEG2TwDNr22MdWo1vHfsamRaXtZzmrTkBj6mbU3rkXkEpjhHDwigYxXyuGEdwyg8Ky6PwmT",
  "key33": "3r1RWLsE87ZjsFwF28TLNZo2aJ3feo79pNLJbogLUWBBamCLpdNMDhACZKjjuy3gYm4UYCc9ejC4EXtKPnpfhcTo",
  "key34": "2X7Xbito8WKvL57fFpopqXd2gH7bvHJTArs8UKKiw5DbGwT8uyxnB2u93aA3Me38oZmkETgi4ZgwRRYytojGHs2f",
  "key35": "2aVuWNtBEoorop39CgT4dEwivw8ZRJbW1reUykn596AvEwBgrWQgWZd4Cb9jroSvK8Zua1V8b1SSNc9W9CxB4C4P",
  "key36": "uEHwfhv6zAGPr6jqUZ6yhXNi3R5G3sRxTCKWk2pdLEXBC9KyV1fL2NAmo8EQHVgBKKs3fWPBPMhnGououw44ebG",
  "key37": "3A83aeYDv5UnoY9zu9BFeDoY5Xc9muZVAPGrL2EkjjBbVSv6aaWBJw2SvDBevVymTCFLvd1eLjX3NYTanF9UPseW",
  "key38": "xBFJZzhAKYiqHxT7fRkiQyLc2TUWaCyH6Ti1h7rkECFZB3qkxkCv9hsXQEn1x2MKNph8DR8KFNs9epeCXdFxAaQ",
  "key39": "2yZVzzHZgHR6PmUN4qhmE8edZas1zLFKzvWRFkzBBPNAMrLxUnqBMLyRj2jyaXNPs1pGD5xjNNrCy4wEYHHt4drq",
  "key40": "qcKADmZxdMy2i7Py8kVqJBMC2DhbuqqLkgiTLjECgNmAtBM8NLmkzQfn7pWgRnD45maNro812A9iXweBRrjHJmw",
  "key41": "wNZYAi5kn2kPrKC61eScsY7uiAqyvJ7idaYHxruqJjx5oR1cpWhZKcmHv4fQBASouEe457Jq1fpTWA5nyA6vrze",
  "key42": "qKz2BbWxBJyphAkWb6btEUtZKJNosksCySiY2dnEXSCHPt9VqQAp5V8XpGwouTbckGy8abQwHrh1Nh8bEWHEUEB",
  "key43": "GLqsYhj5Vdm8PTBVX8tUR1HeZYU5MWFvAEeHrNsNEX3dpatr9wv9hDhTuF1o8i6nYeazqaWLHAZZG9x6cobH1Lc",
  "key44": "BZwn18N9Qo3uLVGWAvY5vC68Suhk1MKeGzWQyhtWJPPhe7QDceshE1wnz2b487Qp5TXKszXL7fW4esat7RF4wqK",
  "key45": "57jp3zjLc7KSeZ4s4p13B2JdyVM6RPBh3TCj1esD2ZNHMwnGdsoAakVKHMy4S7DPk2UwUkdeDjpP3CNRDrfpFbC8",
  "key46": "666qutWwANXbYc135TNq36kHp275omq3TEANQpLPEa7W6fx5JYhgLrc3TvsD6Ei2yQgzKPrwnyPcNaQ5NUtUfebP",
  "key47": "61P5o4hP22TAKNnf5f4igcwNXpx9n6GozBXGnST4u1dgXN9b1frJ5y7TuUay16XNvjetWSjg3DYhoDKxq4BV23kn"
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
