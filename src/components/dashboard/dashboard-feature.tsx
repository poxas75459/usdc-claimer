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
    "mHhHWNikq1ADaeQw7U8P1AmoKyz4aZgtwLypmvWJJy9qdEFHihruCqrZpprvYgWBvSAEagzE8ZboBaVNp2G5NQB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YMDC4VAi4xgdN9hn7kLvTJFc9Xb84pYbq6oAAag7opzScA13iJyjVUKpSrE2gasCAWbH71skT6NcnXTcMwQTEZr",
  "key1": "5aTveDipnydBvjSy3vkdg9kWx4bqGmtHEprVJDgpcHVSXpjgE32ws1nAc6PDVhswUMdfRFR9BL5kaTwZS232Mate",
  "key2": "5qJErpchogy2T2PFepsCDzzF7Ccr3t7KFPL88i2pyLPcmSdKSTFTy7tLHSEGTPnX7YjxAMZcNoLyPUPnzACKygHJ",
  "key3": "55GJAjtD5kNCSXUhh9qjvrQyUWFb7uT1mTaLeG1yZaLSaWNoaDnbHHYz1LNSgztfF7xRQCdjrzT4Zyb4jQBz3U98",
  "key4": "5L5apATgosHXenDufy9AZUdr4EQGgtQNq8wbEW3bKvFqWtXHqQq8BFiDC6T7VsLBhxyGRivFRUcK5ipDMwTieQsz",
  "key5": "kbSrXLYZJbh87MydeskBceBZwhFYiz1LPoUfVa2DXstmLfyywLTeg2325GKY9Y9HajGrXSnEVdD3oSPStPsqHVe",
  "key6": "Hq1PRHRogX95hw8if28QQ9BCvVFxHGgU16h7vMbLFepBY7AceaC74SP3P4cq3F33HekKAo3WXAma5hLuLt1NL5Z",
  "key7": "T4uwo2snzbRiFALZtzHVQv3zBr357TfJZP5ywWssM1SH4dXupenavx4qdXCYJqoptSXkTBdzVPEBf99RuPbiNdC",
  "key8": "zpGkXQbDqZmhc4FPVsUKKjCZkBeS1uJ7XgQT2aqxLZ2mitpZ1C1fEM9tgESRJG9GaPaXeF1wSx7j2gJaTzgykyc",
  "key9": "54aE58oGRmzUjHVtZhN1rVSbvjhESX1ccBucotXCwY9kthBybQqbSBWrTeUgdrU61NX4RCyJRbWbr7JpvB5kedLa",
  "key10": "3n6wBLoaJGNaShaE2BKMkf8kcLFjzthuCnwDTZ9Yv9jFKeB7KyfcE6E5ZgwRPHiNS4opeYMEr7inJmp2n9XhYind",
  "key11": "4zMfheBeE2YmVtUw8SsPC8B8WP2jk2duRptYkZEHCLdsuYsBy5kVd2PitmyP165cHngimnGGbx4KqoCh46Cs4ZAo",
  "key12": "5yEZJzPAqqXZmy2UWB1MpYrj5iMcpYSnNdPfuwhmYvFf3d6tWbmc5xe3hVcYwMhUSg7nUX43Bm359CaddUKycwBP",
  "key13": "2fTHsDJJ4WoM7iEf9sbRhsQycDHVHs4bg7rVcBbsrm3hRLfkkckpyQgd1ccZYDQTkdRBjr5CDAwW41mzKkPRfYmi",
  "key14": "34YFmt5gRruhsodX1u2EaWkhn7F7qaHw7b4JCx5cqCRJ38swhLmzjmA9CgtwNjTSZB29898jri3tqd9wfAGPXhdg",
  "key15": "4UQuKC7tRShHxXmqDjXu2hgfNvDKF1ABy1rpZB9xP1JMHpNaW8d9G7borEUw6rEGAwPgbQDhyE5uGACSMM9uqDop",
  "key16": "4aBAa7wKfNoJJgRrxjzzGYSCK13MKa9vbkqcC2emw6i9dFtyhhCrcD6ZTEaVkkvCA2S21EKurTsmXe32T571pR1n",
  "key17": "5yPcZe1FnnqPAbRpy6UQ9UFsmE9fCCCGbSasTAQxjeS2AF9cNM3Zeo4UhTTzAFqeQQXjn74rKyZgGR3A3MX1kjxz",
  "key18": "64YUcLivXePDeVYqjFQs5LTXMWUzWBhWP9woAatC32rc3rQfZFwNbScFnXLeQHY16pXDJEDc7LzrRnnExdGYMFdr",
  "key19": "5SpxYohUaZSPvjMAf4iN7NiJ7DwFmQ3BUfD2zWyEyQVujcTKfwAxrWyfDtnXy1iYb7PSsE2DqiESmhD5Q782axTH",
  "key20": "TBukx5zaH2tbysF573PK9cnAxjhski4uQKs7iwffZYjpFXQ1nmvkNEy9vpSC1JFxkfp5HL5Us1ZANKF8crVHV8Y",
  "key21": "a8ZD1jMy319ED4xzMMETiwFb9foipKZNPFQkPfKgWAh2BfKFkxFS8F8erguixSNWQ2VtWtNmQZygEVruLqEokxr",
  "key22": "S9osooRH3zwQop8g9Lks33w9A5FcJkyW8Su4F4MuyUmLQCRQxKhfZCW8TWyrPZqHLZgwEB766LLqno63coLqAkv",
  "key23": "5BkBFzRTGK9J7TuUnvhtaoUeCfjTEmmoTrhEXb9JLSkQgvSGg3uRNnhNJDYyk54vfDtyhbmX65PonbJNLfjPXbhc",
  "key24": "2gb3g147tucrnGxbnKAynL6AMaA1QgprH6FSedB3geRSRjHJPEx7yGX8Qy6nVUBgrMXvJEeZ6needc28m5cVsWYd",
  "key25": "3Gyed9EgJgPLBBWimFDZxWVnsDfCBnZJv86Sv2gDbfLZoV8ReVZLLdAjqQxSvp9w86aLYVEs36ffk6K17qtmNrjg",
  "key26": "44kzzWi1NvwLnxX158S475oaw9V54X3c8iqhWuQoMbfLcH7fsf6ab5MpDdMpGuPTKX2cm5geTWvkTUzAWtjunihL",
  "key27": "2Q11XjpypD5ryJBtVjmi5CBCL5DaCB6ZrVqDmvzDLVAn88GfTsWT96SapHC16punSmxdbCWb3GNajfC9vKHNffGG",
  "key28": "5KnpGDR1pc9fhSq4eWNjM8AiDCpCjV1GgwuP6eMMnpY3V9MmqwbMDEgXkZcfH2JjRRpcj6z7wt4oEazHqhbx4tTv",
  "key29": "45PDMsixL5yY2i1YaUHYNXh58xeR16odYpwMb4dkrFR8FV4YSSUtG7aBcrJqD62swjsAwq5yiakuimkGdCRwSe73",
  "key30": "67QffwMwxa61mVioKMNXDUe231w9goV6M8Rq7uVK8eFiiBnFtDB94jDxGmEr1myu4EsvW9hiEzFxJNGDJXv1Uos9",
  "key31": "Bn7vWbuSpUKgJZxpGvt63TfJHV85NcN2V5YJEbj3cJrU4hnGpzKDjrvumAxdNutz4h8YpS23RyM2gRjdT9oqoCP",
  "key32": "4UEArBAsSeL57nBQF4qRrxjwPEM1jKcLexbDXdHL75GC5ifyxPrTP645kkhAEeYRBrrM2mD5sg3Jdnz7ywmqvSDw",
  "key33": "16H8ym29m3PsjMeKk4URZySCUWAAjghcjBcjWiPuWv6797gRrYnQQiQDJPjmJnzZh1wxcG7ApkadQhN4ykAZom6",
  "key34": "4AjNrUspEPzGHvX7upXScMCukcKM7PWYjbS34i8GeZkWACBZgjNmXjdLoyExkPzZR9UERf6FSkqtZismVCPyGyTv",
  "key35": "3AC7DYWDLicgsUXsEkT8s2U9tcSp5dELNVwuodyJP1Pzqyc8mSXb2dPmX3H8xPuTXAkrouHaKSVDF7wZwTxYWNMR",
  "key36": "2XnGtYvonVyBi487ppksqf2Hf5gCAfda462eyqfXgyCGWxE9ajm2AbvKjzmK5iuWPHpcRuqfrAjxYxx53ZM2QaLJ",
  "key37": "2iUXLaKFaeVKUttb3ad1PVk7RWKCj219eaUYYDQiuNCWGtztHq7nwiEpEu5xogAzUwxnWZQQ6wDHkuctFm7qryyL",
  "key38": "54FpqXUVpduZ28tvmvNqACSyYAwGK8HtAExmT9yshNkHvSkdsGF7yzQ3wCnu269AVqnxvHj1ZjUqQ2q4vsmGWc29",
  "key39": "2vxJMLHw1qmni3PTt8wrks1KCGkSvxRPTeEZA8xtV8ZBcTLAMN6kE1aB6dmhSuik3eXjMGpvUk5tcVtauKfK7SFz",
  "key40": "5SBRF14Q3FpPUca4atJf4evjMGwQTmpYV3Gwpqxi78LbFStuiA4Kdey5AeU5wy3Fkup73h2zcuzWZ8jK9ZRUFcp5",
  "key41": "4CW6JqbJpdpHDAkFHDuYasz4pXTHi7RGkthZY2nNV8D2yKEkNo2SRrnkTYJvDdHcSGUkDyvri7PvtXagu9bYb4Uh",
  "key42": "4rmCGfnX75ET9gebJkm7txFDzxWfiCFhiubcrrhbZYhnrXgU9XZ1pxv3wMZoEPn89qGDAMtYQzctUXcYjJ1QzRjN",
  "key43": "3eJpRpRYfMGxkh22JD6H4nYnhD4CeMctsUAjha91tUKr4ANei2z3JKaX6WY2NPBKnA6JnTH1bxEyDodCJet93ojH",
  "key44": "57fSVdze2arokoidujCKYbzQhjYnHuQT9JQukTiawofk11Uxouw92oUFPUT24GtY3Ru1YkmWhfH98N2TdbpeKf4q"
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
