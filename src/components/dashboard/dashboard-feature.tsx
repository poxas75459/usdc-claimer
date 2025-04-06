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
    "4AziZVwpCgLsxVc1di2JHxywbdas99mbZSChuya8WSxa7XW9cb5EweHLxrHYdVx93tMbLnW86d1wRtcZaMzJzvaL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JrDFmtujECELMLR6xTCcademBTHWXCbytSKvrGSCX9rhNCwGYeTkGMqemasbNRnXhWb6kvygYgSkf2MmN5tgZTG",
  "key1": "3jeQ34KpTWiAM28q4gFHs2q8V1haZzc5SDrcEr17NqPKCaaxHpTUbxZ3gmaBKG143d8FyAxYguoAV6TMKL9hM5zo",
  "key2": "27FGX2XknUdZGHG5rMoaZjoidX4MKhPFJ7pEw2CKFtKcYwHNUm5tQCEz5rVe5m8Ce57XnV6yhTEYk3AQGBPHFUk5",
  "key3": "cG2Xvmw3FgwVReYLSmiNfbCLHTaEGZSvGCvHdpqtDt1TuaZiPH2NY2TbjsPGWyQr1JHNEfTwkPEK32D7otc3z1S",
  "key4": "4MgorpYYr2FtMxfXWWusZmkVt3wuqoZYgtvKyNxyrcoYrBFpiLYyZQFsdN9gVU8CbYuiuabg4aeoRawrFgQt1Pbn",
  "key5": "2E6crJbb6wc7mbLEy9PCzrFT9M5b8HwegMENEBY8zCiePgsYXvDtG5vHfQ43Ka4aptu3GHonhKs4UojSKKWrdwgn",
  "key6": "2wLrNCqJ9xVCYTCT4pTcKPB2M1t3gZBWP3ndbxhp63kjdGif5gJjL3cNvYcg5ZhGZTsQ33Q685tjBQQ9R2Sc9ddY",
  "key7": "21Za4DnNK8owysAc5XoBN73YuEezdkSvYcx2TiwxviR9EuwDLu4yeev39A4LMNsjzwfZdneKUgpP3sDwXXxaqRT7",
  "key8": "AFRs1kzezGCTV9Lu5jWjB63RogDN4yGJzyhY8jvmpuE88tQNuwG9EUFRJ5SVPLb9WcA4asxZzcLMndxMd4P9c3u",
  "key9": "pbeUpUKjTBRTc4L5oYfvbBbyPVRwNhVVHkdioou4DWfEScRpFUxTdKzbL5UWCUR96xaGCUS1nSEctWVVFrZwJNS",
  "key10": "2gHFqeJLYzP8TSqDjgP3P256CV4WYD76XWtYMCn38tfirvGUot9jYqvRjQSeyQ5gv2Rm46zaxGXyRbt1wh8qpHFU",
  "key11": "4JgAL2uMK8wnwY3Af2Z24bNP442cGcuH6PMosg2fH9pcjvfLDJATRFjiWCgXQsZeQMyPemotXVoyzU5bg5MDqfHr",
  "key12": "JQYK3epzeHmiYZcxecVBHBu4nHkEY6WF6biovU382HRnjoLsoPGgkHzpSSqH1KUyLqT8Uv6xaUJsrepbUfGxesT",
  "key13": "ow9nMHFUZRtD4dhtmwbNJNyzvHRagpyN5hygk5QjN9DZQcQ7KPEGxAadSdv7ej9LqTNpKV56LKijW9twp2aYFgX",
  "key14": "5T9By3EsuoW4eKPXdfdb6mhZ9s4fHADXGuTKGsQKVYgZuMCsShBKGW3pd9PtYW67q2xnqZmz7aB8zNymqzn2zGGy",
  "key15": "tWNw2uar5chr3W7RPbrCG94NTis6eWrg2zcZAJWYUpCVFR5xKnhjQbrFoEgsMkzB9Synudh1RXkwKrfo84DrNLm",
  "key16": "iCpNYCbH7hCzMvCT8Gj5rixqUatjzKyh1ds3QbrSJg19TUkHDLakpMnQyTTQFSpbs2KjANUHXWC2KyzmMxawj7U",
  "key17": "3v2zLVECXZx8YJH8GCJNocRDa3ahDbiT5TiD2e8DTbfVPM6scqDbiC3qHkpsqzALFJbNS4KkzvGJzngpTUZyZAaA",
  "key18": "5PU7eRkZkbWNaKz3wJGm9LKmjz9vtss4HHJLHJ7Ms5nwD9vsM4RPdzE71N5eC7NHCQNb3VQEdVD8oDK7mqkovSJu",
  "key19": "5ycdxz2mdTanRUp64JQAcmsc6g5725fj59xsimbgANR5NPh6JTQ5A7VrksGwkV5xZTBNeUmLBHPQKJDbRcERZHR9",
  "key20": "4uW42EMkYH5Ze3LgkqhJS7J5N9tVPtnCNktZ3LHUrhGktWq7ZTQY3c9XGsqKtbhRiGzejcXjgBMwByYrXhJLdHoo",
  "key21": "2HRmEzhpGMjzwz9aAk9MxXbEsNZo2wD1q8H6UaLfiHsgKQPwyMNCuj55uwq1BXkjRsw6v7U8mZsBSduVTSvCgZKq",
  "key22": "eokbhx3eRe6bkfoaD5HGjAmYiJ9xSUwXxhworzN875gq1vvaJFoGZRmYiFpGSmRgZafhGBGsXNkNSN42uRqQvCi",
  "key23": "4jQm6tGfG7W9DPEMiufpYTv4pXRotwCQUs8YexnooShhkYskjrVBCodn7wJzVFjXE4xQXr7AwbpJpfcKB1WReH4b",
  "key24": "wUJqqScpZqhGWHk5TJyzNuGZdczG3yw3vZwtvxX64qZZNhBrmjdAWfTdSHPqPatcB3ESixtY8NgPx6vjoJopCeU",
  "key25": "qZZE1YvPnEtBQE6pQSVPAQ21p4AR71EswNVYEMxe21XR8tYSYK75L8samg8kdDtzeYWbkY6GYyyF7gntZyNTnZF",
  "key26": "4idjyWmxJJ1PCBeA9n3jCoLNDfxjespu1BrTGkdbdxi1VBMbyLny3De4MTkzBryFXKDcToY2GuDj1SwTMSzwcG61",
  "key27": "32jUERExYb2yTaYBDiBv5QKGux6hn28GydvYktZJg1QLUN5cfepsqYQJyDDtLoCP7EMvhwWfEHbZTGCJaaWfDHcu",
  "key28": "64fmw1yyKACtmQhK4Jr1ebirZoH4YzpBvFiSiaeYXRTQogsWrj3M9hma9Fnk3NqG9TzmxZEMwqExyY5xMzPUyj2R",
  "key29": "5LRaV3tYA8n8sZCT1baaFAqBUBjXq4idy7jzX4b13zhLNhFbzwFygJRkNAorpCegeK8HS1RDXqdpp9xmpscvYaYQ",
  "key30": "2t5WEiLNJdxBeB9cS2Xbhp9N9Ybb8FwQmxuA1iDfm3QiSr11NCK5xw1hqmuLVkYPjR4ufsW4WGDGe6ysVjQfr51u",
  "key31": "22VyeAAxWT9eE2qEinzstB1bKUNKNHcqLWTM7sQtYMige4D7GHqKLCgNv2TjUGmcGEGj8eYYoSkAdhJioSsWR78P",
  "key32": "5RjATyJSU5eqf9XEg6TnTXyhoW4HLVsojzMqHvrMMfWgnFAd4B7c1Hm7fDPJaD8qqBQ3aFz7uaBq2yHatD4vju2h",
  "key33": "5enXFDcrY1VkxYXrNtmGKELt4khEVepcrRXVKWyG61H8n2v9119t7jNYS1qzHJ3E8ZBwdPbmcV4ZCA7AitZ2AS3U",
  "key34": "2WTTBB2jtT21mumXuyRhiipn6EFLPcj8A9FitGzU3KLq3zCDgwJaz8buLdie1XQssnN6TGdUUXvXMWP5oNGfmP2a",
  "key35": "49AD5TthbJ94RSETr5k5RG3LhRXewszAH5jBSFYkowWKEWbhL23VuYsmyNR3NwFn3CNesJe415G5Qh1TgjN3PzDH",
  "key36": "3S4J9yXyfXupyG6cFFk66iZbEZqLo47YubrVnmBsGxwyK217ieKUsgNrJw63DMKxtou8fZhaCSf1RfRi8yhj4GcA",
  "key37": "N9NKH1UE8e3E85dGs148f9iyZxbTjtWGDWAjshfQXoA59PP4CKgHgihShKrymftsmTdfjNgGojYfiwCfrGmS3zw",
  "key38": "48fPB4GMDWe88F3PxuNoFapFhvRi9CJBXKbs7Z9nPjGg7z4ELp9Bn43eX5cqgMYv4sR1YRsh4jCPUGrEuiX1W9Ax",
  "key39": "4ifv8X3FGfkWjaELjE9UFmqRkLKTYKuBn9sc4wieM3RJezz9FrjDAefRnpbW581cbj9tPbzuo2UAv1tLcdALqvVP",
  "key40": "2VXd5viJ1QR164SqmstC5qq9uAFrBJixJYruvo9BiwSS2QtMKvRWmFXDc1XoFejFSfQezwudWAKo1bBvZJyfKUeR",
  "key41": "Ac8uLYShw1mn3wS6S7pbJ4tzLMQSqppQSHagwxx5sSSSdBFtHPrrALDCz1tEm4U3YLMF35ze7qNyRqXFHzNLRwk",
  "key42": "2kXLcTC7Cpj1iSD6mQC9P6ok62LoFsEd56oirNEBqeRh6EpVvtuzytfnxWbBhKJa6tDQyQxhXGUyFFhFpphzvKMP",
  "key43": "43uaq5PZtG3p4a2XB2cvuuL4xRDDzxALaShvuADqU3rGHTQqsyU2yRr1wjzvgK2UsQAkt1DGRmmsTMyLE2wa7Tim",
  "key44": "FfjEWF3Cgsxiz6ZgtR7UTgdARAGR6XwhYHyZyvKPxkfk2VSseq4g4VtKW4rccNTANaVZL3RqzACmBeR7QKifTK8",
  "key45": "4n4g2gzaF35fUMX35caxzu2kGZr7pMM1yerMd33f5rgB24SvzGBSbSjySuaPYLTZuzVwg8o1bAP6GNBYfjrsSV7f",
  "key46": "24EZCPDSvZw7ubbFi1FzDohKKDNNmoCMQnuvcQvqSYoFyMmBKPRbTVzdbZqFGbT5CVqGKu1Ug1CTVeBMreUC2fe4",
  "key47": "2cHjc83VXm4WWkMkCMCfrV1Fjmg4WdRkFKNB4UZA9DmuUoGigu4gN43z6ekbLJDbJ3sprDPuxeu357i9gWVCVXv1",
  "key48": "rbMgyWqSjz54xe2EaKq81VWthg2tPy8wm8C9t17u9riDCSR8wbVqwq6p2bzvkUD5ztmfvXqdapH6pHwYGXAJkc1"
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
