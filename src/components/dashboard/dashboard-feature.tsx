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
    "3icfmyDCNMRDhL1Qk8Z212g4aHZniYmB4wgduR3qAzSaJqydwKPrjn3Bo5G3XkSKbA6onpXWFXURDnwTBMLmb87b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43wNCqYCzENPao6Nfm663ohuVgrtrmZbe5h8t9n6daFK3qA5bW2j2PaonUExE3Ebp7mvDvDUqa19aMkV5ahNY4Tz",
  "key1": "4y4fjqKpR41a2p5yMJz3jpSptxb2C5J5ByGcc4fGwdLx2BnTKqPawdKZYNrG4C3qD4UkqZ8guAxHY3YhKNVWV3Ji",
  "key2": "5MpXuaY78QT7UE27mMHtUw6auteBVeLQQC3rYK8fmPZJ3JPWAfpVjYGyLZBRU5ALJpeCsP7STrft2LBVGaRQmRC7",
  "key3": "2KJV6zjXd8Ef8MsmWzcmACBmmDPWZEQUKtfMfNtUtVXGBxdgGxwZKv1bpRCKuiaUL296qZQKgPtGdWwDo1S8dMAA",
  "key4": "2aUBN9D46731GfS6c4TxFwfp8ed82DD8XAEtVoSkUw5v23ySYKx7QJARCgofHMsvXEsc6sFuXxM5VGzgAxjkAC23",
  "key5": "5yMyZmALcX4vLKSHQomiAqCeEv8EMibkLhd2kmGkj4czoFLT31ztp7RUJHMdfUusKrA2Mp8fhdtNdbdn9KJT2oT3",
  "key6": "kZxMHGKQLd4mec7eauFTnmbFheeMRR7g3eJucK8fKQUnEWz1jL3AQk6KGNDt7u9FwrNx3cFQFMqrXeTVrFqVLrJ",
  "key7": "5zvix4vTd34HgVMXtS9BSgJU57g2VFZShJtsYaGQ8k2XiUf4YbFndZeB1woG8vv9LVNdeZ1HM72GVZ5eHwTm6vt",
  "key8": "29saX4ES8Z7wp2csR8SaC7t3t8gJiYrkAfoyCi1HroMEpEHcr2mTUrXSo6ys96n3jmPp6HcBYHkpUSErthga8WWj",
  "key9": "5qs4k1CvuLU4ndGAyzkxnuSsTUmEzyiK9iJrTReBGsE5QqqVKw3Yt8xRRo5mM5V9qzEvc4rLC8EXtgKqNbG327WA",
  "key10": "kvqp2DqDKtHf6unDbo75v2eckuk9iJGfKks4rPfD3hs6RFcEya1BixGSpWqejg7DgdatwdYJkpmpFYTubn9gRuh",
  "key11": "5fiSu8Yb3bAmVkhA9YthN4zRsKgfBjjb5xXFTQSSjN9FkgEw8k3ecf4mfYDrAaaVBCp5kGhYKe8PuxbVnAj1m5UJ",
  "key12": "598ao6CUVeon1fBiJpFjafpRufUs7UCpFSoui1iMHxnn6UH282RoJF6z5tCV2eGisaPSAraqYc42Xepd1EqMZ3vm",
  "key13": "t4mNncZXSHpXJSHe2Q7tCCfRxaSPJ2jisVgn7jAQUM4xJwGC8riqSy25XZNEXfVRsR3W2Qt2oa1gEsNc2C2i7J4",
  "key14": "MYRcQjhZEK4KBu1mbPBx43B3cmGo7NpUnqAovLJSHnNwSK28nJaJuRaDXrvUtFUvVWGR3LitRCiUsi6CFyii5n8",
  "key15": "G3z66WCLtui7wyemyLZWqywNVbgZZtU7FnGER5zQn8qdyUe6zTKWEg5iEr9bPbBKZj5eqpoNfquPRXELeFwcYLV",
  "key16": "4yCwJmkpcWfwvMyJYYStGshmsZXRxh2aqNj3cmTeqhV9iPBB1sRSWGvstyr4HYWKk6PdFxWZSyhoLGpeWJMN8dnS",
  "key17": "4WLsdTp8BHoGDpod1ut1CnuW6u74XPDg8KoycnTjH3FuzjMtLQsQj8rCHZcpy4Y7QVwHQDSAGpoCA4BEVA64d44r",
  "key18": "4FcNpyJ4GQUmNDTQxY7UoWmtfq83YuUXihRyKFcagvciXzdnDoTfJWcg67fCaESBc3CDchFKrgoCd58bsW7L2Qjh",
  "key19": "54VTn24yjxABMZSf4RrmNytzNgoEeF2U85Bhx4RUyJyXwmTK1bKeXrirtuFdwpe7fDf8UuknGsmmTUL6ysc6wTr8",
  "key20": "4mDJx3zLfgiKedrunYKKu8ngNGNx76SXog1MdzHvFDDa6UqvSe937Eji99aWR48i932QaBC6t55W3KR64tWQ6o9V",
  "key21": "55SdWTfRhwGsBm7BMzTMJLXdRnN2eGXczXFdw2JMWyWTAcqaeKyhHitpb5n7f8TKu5F4J6WtJ27w8SKHyqRS5Ykr",
  "key22": "46dvUGNQbotVtdqJAWTFQU3kCy2BQpHLDWtEywNWLKBNAXyYFFwsYw1edLmYegGuVJvhxp6hNxqcfP2gs5P7eE5v",
  "key23": "5t1dJ8g9SSs4xc8u4NT1AnpZLrTShj2N7YeAGsymwAG5G44Z9R6iHkKKTXtcidKW9dA5thsnpBb2sEY1SzzmhCqJ",
  "key24": "y5SeCqTb6YmeXDxKBHDReSmK3EN9iqLDM9gYpVLUcSNcYwgbUQDZCBLXPL2p9T3Bp8gVR9K4fApZEotxfwmX1uP",
  "key25": "5R9V6SJpg7ioJy2bnXCj6T9WC6d5ux7HJFfw8g1HPoCAeRMDFjmwuoKSuXGLoszkNdeMmgNojFvDAxcdM2Scoyth",
  "key26": "AzGzH457VNQjMErE1Fk3TQAmt9oSjW3BnEVB7MoG5MFgsU1B5NJFwn8aZx1fRBEU6BrWcUmS7bnxgFCMWLoZARG",
  "key27": "64zK3EJhNHs7oKmS47y7nZkqAcBB2bi5QnSi5RersKBkCjp21x3cgRibDTyHL94pmJnWDJJ1kcGR1WzFxVLmAfLh",
  "key28": "3b7SFPsrKwF2vky4QNkCKTKECTqWt93n49jBmqVWc5RWxDax1NxAHzrNq7RpcEYrpCuFez5jqfbohKNxicP3MRHA",
  "key29": "52c4fatU2Lms8DdVUdX1u53xZX5PV68NHgJhUKC4BPQgRKSnMpLK6wXJsvxoNG9hWrHTXvQqKQniMY8EtkFBaS7Z",
  "key30": "4jKTxPRD2EdBtsLpEUvB8zZn3JZJkvgCh1BKEFAiq41NxKbFdrho3LN8zwd5uaHJTttihDSiLG5wpiaeZkk5DqNA",
  "key31": "4LLyD7tRT2R24pafz2sqZeziyZ6SgdPybi3mwbNdFXMdW1NApERwpspgLxKBet8q3kpFxMRMSvwc1T2QLquLyPn2",
  "key32": "2dzHVrVdozjm8cYfWLChjMj2dgnMoMEAeHRJR9PEJoG5ikVoNrDg6LWrf2K4S4DMJXKpEJbGueBLuGyq5H15cxSE",
  "key33": "2LEdjun2UAbSrdVcHRsZ5ZtxDRm3XhAKzSnAoi4GwCq8B6krqtb2hQ6YcdJryPwDnhsQS9jE7MZiEC9uwgwdGfRq",
  "key34": "48WB2DzDYGbKBf8KgAuykbQ6ijCBpqKa3bpbtH2ZvwwVRSegBDyN8DdAR46nbBAZH8LwoS54Fg7pPcUc9VmFnMYe",
  "key35": "3Xjb6sBhWQMXoCTcKBekNQ6vdwBbAVhSTomcmZBy1ob39i2Dua5maPYgZkJ2zQKhoXmJVJGWDaMfXosz7zfcHC4S",
  "key36": "ZzmBeKapzzQJJMtuUSzVtVc1WPch2x9q9Lt2tRbpydJMbHeYq9nGdUuqfcjnvBqzaimC7TEzprQdBYCketFbSM3",
  "key37": "3eq6S6ok49Fpr1dnB6rhd1g3mYDdYzn6gqJpGDbK4CgcKYU1c2qM83MJacmdWUhSHNrjH1YE5XPhWtxV7ovMP67K",
  "key38": "4Zo81qnKKCMyA83kmZsR7Vd6aZ58PHTsFf6EdZXuKRkfuUjHMXNup246KM2e6D7q6A4houmgt9L3QbXVFhv2Lo9J",
  "key39": "5WC9o3YgAncWEYYyb3V7cn577s69H9HLHVUpWBDiFFQYwyhv5uQYoTxv68jVNJFn8nrnpwjzPXsd6xzF7qgH1r7e",
  "key40": "59vYGshPmLWQoY6yZjfPXAa3NhJJBDTvFYooTcpuWDH7ur8J7Yp1zof6yDj7CzFJcVDXdkQGaTozab9wUT8SArzx",
  "key41": "2QnMte5YKQvWfrKR93mNdRGsqWkhHRzNooJi8HgS9vXB3Ka5ok6MWWc2f2xroQNBNm3upWWj1mEQKtoGHLM1AGLc",
  "key42": "3cnq1F19M3aouCeJ1NCAXy1se4iV2GpPhLpoJwxD42tcXZoU6jfm27nefAnWdLBTQQusqP5NTdpo86cHoFQjtpbz",
  "key43": "pGV8n6W4MG28pkKH5w8isoD4QZeHzFLZBB4XzwnhF9gTHR1beQJ5B6g9kjmvhGtjvxujvdL6nHPwtErZ1aHUWhq",
  "key44": "2TYuUCVBknf7gJ13Bv1mWDEzwFusYjsifnYbruqmP854fV5Moq2bBZdNoDNpbquvMJZomLrW9wF47ahHM6pLXzkA",
  "key45": "5YsR7EGUvDUu8Qr7uoVCCssX9UX7Cdxt7GohwAkki8ZPUcz86ZBuEE8uk1v2pwut75zoJM8z5xH6pm1Tiwx7y5nY",
  "key46": "4ziJ5B23Fs8D2sjM9shaA7kHPCk5hEWrM8CrRxjqNusnyWt1mtTwYCeFixUbS4svtjtAiFwq5s2fazGjX2HSaPY6",
  "key47": "3RDmBGXpgtT1jJCFanitPu4uWTxXLWjrQ3TrZASXKyRYdpaKhrgF4jM1Zwd39zf81EeYNQLNDDyjt67hmYnU4zbt",
  "key48": "51ySzCgWosJD5zd4cr3QQg7NB6tpZZvsB215J71Yha6D7t2XnrC81MwGt332iZkn7w1JqdHdHrYSqMvip3Eo55P6"
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
