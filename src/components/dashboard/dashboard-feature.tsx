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
    "4Q2RH6Y5Ek9Frd14ftj32QeSx6jw9fc2jZTFTtVGH5HicJ41uA4AVAApxrGQSPBNSa5se3VfxToHTu1A7ztUXzk8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KiRmDdERjopDvidMCvdgtcVCoNi33W2cSt7HcHUdDe9u81sR7EM69SA3gvoFkP8ArrWUY7eeTMoBJ5CJiYkkLLs",
  "key1": "hN8kXeyYPwt1WVSvftN58xRSNBBFGoBQPe6shTB6HgeL1tqkqC8MfJthdyhftGBmwG6wtGdH7jyfVxCYN28b5Uy",
  "key2": "o2zSc9qY8zp9MQXjkBGx4SM1NXsSCc62tzwedXA8Ns4bNzpbKhtkp7kVmyB255P5hToM7r7etAZ3EF47aY4Akjc",
  "key3": "2YhhQrGgBgoJQUZrKpKRcBhjcbKwSaVvbfji6ccYCjRxQpsVCdTf4p9cP2WGNKECN5WUSgcjT6vFb1LVKDHAf24P",
  "key4": "r3CWvFjqAvrogzYt4dYcKdAoDEX6RMcVqqEWscFVUsVQ4MQor5K2TZZ9jHMh48EExQynX3qNoJU2CzFdfCJNbgY",
  "key5": "61o9JNPeou233pUgsRi2h6TfroEKLoBmxM58qNG5S3YmHGBAucSdzuRzLSwHzuJc62yFqvH2FPBwXWHe2MDkmbZs",
  "key6": "5Qathvh6E2f8jWbcUvnPqZPkCpGEh3kj112Nr3tV15H9bSzPC2YRgBQ3ko8NgNtz8DMziVabMUBZmdYeAE9zfR4g",
  "key7": "63kF8Xnbu7kdYZdonqwFvujLtUAKaK9quegZ6Xtv1yQJYRPVTYgY6BbbzX25HSKbyusyDs6UDVvDy25fhY4t4ZdX",
  "key8": "3PWgUkeRpK8HuW46UjsnEEo1sghzQmea31MomcWERyrs41eJmKeeJqmmN1epHXTJPauKUJMxpZ5KZ7H5LuGSxfXR",
  "key9": "3U4en6WoV3Y763yGYBsocGzZeFiwGjZgESVRG6nSBaiRQeBwsXM6rdbjaPHgNcc3MyQK8zom16n6ACDQrdXvCbYv",
  "key10": "fvSLeteYLUg2L3ndUBDJyZbs9qum5hi8x3jTruWkkbChQjuzjhkepc2wTGCSmNMbPgC8vDbX5UDHsBrzheLuorX",
  "key11": "58hnFnsCSehCRR7FaCrieiM3oZTvhtYE2SYijSQQgWvRkeW22YGEHwxoPW1pWu4kL8oB3AF5NxNqXdi1yn3L2nFj",
  "key12": "Z4M9sKr2nX7844a3BsiZobAmkrbui1Es6jVB2V3MwFwqrMLGNeviEymFUZ1kZfFvbSGf7rDUVTWWdoFPSidLvbs",
  "key13": "3NQsGhSguLtLtgX61M6nf6ZtTwnMN7XQYMbk4KKTZps49nC7ajXRUdnFmSfJCa5FWiiLxrUSTVCKKPtHSjeirpHB",
  "key14": "427kdxmnbYywv1fdwAudsShS2JVbiF4W2Aij5FHbRgAZuuXRoLBP5z7EhmVQMEiBjPvqhdHoES7gJRkcGVq5KULK",
  "key15": "PK1DggXH8dRvq74Qrc88N2KEAEtVMxa8cBfV2Zs72AdM4Q7mb58Efm7HgApyaN8o61aCDsoB7Q4xj97jACYZJaJ",
  "key16": "2VBghF78UQ6RUDgLQd4uXc9qvoePNoAH4fLpXLqH9iXge2tKDniZc2e8DpCN5TAbbxShqow9ez85yPZovU47qWJN",
  "key17": "5NKZWWNz1zsqTbQ66HPTb3JFvbDEpspM6ZX1YVG2AeLHBuyVuJANXtxFJjUkDGqvmn7kE76Bne1WyCjAfNK7jgNo",
  "key18": "LypqWo5xh2ZQMj6SrRxwN8aA5nutXcDK74yEdn3A6CW2mXvWNsCVmvfAfSJWucV5Q8tWXPV3eZuRKExTA9gb7oV",
  "key19": "4KGKhn1WeoxqqFW3VyDJjeQTv4F73NGztyPX8s3EW2AGkfcGxs3J1rkVv5utna4eXH6CNtVZ4jiQBtsWn3dbsPTt",
  "key20": "61iZi61x3qxLt95vzqCCwRFLut54Enj4JFQkt8Fecycommsnm67zLgMbG6dZoXPeENhS8pXaBxG8CidPn6wYVaLh",
  "key21": "4X2xETe9pfqWtntn4cgC2tP1CaVXCYQHuoCw7MCrVofSakWdcRqGhyAZniYxtCw1PXd4LWF8xDaKNBHaLUE54t6y",
  "key22": "63hDtNXut4w1RYgnT5TDB798x8sptDehb15pBECHwN7EbYFcWxP8jY6ALe91PGcEzfirE9igBnhfFBhkz1ssbQgL",
  "key23": "4mTJqgpbTo9y2SqZFvv7djErNLVrWFA1QPczfR2yVdPYABfTYDwpSxfGrfQt1uiQnJ2JsrFRmch7z453dErQp3g4",
  "key24": "57Vo4Y22TaVVfx8yhe7xuktZU71L5azn6ukgwZuWkE8iMT6YoJwX3wWXiNmMYLyt8QY2Ywk9G97VYiSFMVLJsx3E",
  "key25": "2UeZgskyHf8dSCKMP7v4zyp77EDjgwa97CUXZMoctTk2ERCx1ssUoU6oGk4pqi72BY9gAu4LdmzNxm7UJGVhsW9b",
  "key26": "2WreAW8ZZr49TdJWpRMxmxCnehAKpBeuG9jULYqCdfBwBXbcW7uWiL3EYNeGJrjyU1KJn9KaFjY65MvzKiEBWSDr",
  "key27": "2KcRYEhA31V4dBvJyfPncqgkVFGuS4Nh7parkjAyCyF8dcrYqQpMhB64Tq2fXDB1Jpg9T7rLWMBPZMJYYmhSwv5k",
  "key28": "33fb6erYu7Qs4khra6WhNVtgqdhraxwNDgdKeiZVwN5XfQmZ57N4pXgRaKEk1mE5hAE1MsCRa6X8QNrJeBCmxixs",
  "key29": "4vi2BBJtf8dxNxuUUZLBGftLxRHStJvWSe5cXoGJoR1vW2t91LhTkeU6t13GUCst3jLi8y1siP7Cs3bPaju622Cv",
  "key30": "Y3SVKtT2gALT8qE7pGzpDSjyZMkzUSqE8RfojTAHeCMMpPrcQNBZisr57CPPnyc2KRnozu8jBey1cBrAtPQYULs",
  "key31": "4eEcwt75htB7J5BpYMxXnKxazmZf5QXeX7to6aZavPr9S4tbSUwXCtpHPrf6dzauW5eHVjGUp9BAmkBxrUTgc49s",
  "key32": "2Xb6F6acw5QUpJUcGqkEy9cv2pbgHoctwwq5f73Ruw4yUyNZqmQyr8865YgbST4F32hFUmXUpZUX4shb9sJLt6hc",
  "key33": "4EdqPfz4PCViBLhNnfwUAXkGSVA3frYNL4ERf6n6dSPUUbkkp6V67gsk9vVfZMWSHMYdMFsmuLa9du3HN4a1RdEM",
  "key34": "5yyGk9gY1UmTcBKCXAmda3ECGQqVH33HCmw7w5qoW2dJvprce4BoZv9EhMStuxutzPhZ8gzoKnUPNWFMHuZNxwFY",
  "key35": "CSt4yTQjjYW3EHptsLX2mBDsUp2BGiP74TjtBEsD2q8pGhraV6pHGTWmDv2Awm5wEr2s3zen33YdaVS1YrQY5Mc",
  "key36": "5eAS2sJ3q4wdBqfuPmHxpKFWZECxFwb4XUZQ5qGhFDnbsb8wq35nBHCA3B3bQmoLRZ3uRgVphwPraVzqJy5j4DHi",
  "key37": "2bJgfQzr2s8bBBrRLNH7KFRP1xuGwekJbFSMJQSD31TTSUAEbWnS3Qw2hfaKes8Z64DhByZepMhaxXpivwCyAhuw",
  "key38": "4JrG5jCmJCiMzhK6YcNVRKuodnsEtoodSgKWWDX2x6A5rzP1Fp6yG9PrzC4bWFVcTouck83F586eSj9FYYGMyuNk",
  "key39": "1nfDw9kkkEw9SpGssGzQKvSFszYbw9x7AppLc78HmpYSrLqKs5QGR599A8J7fR1Lgfp9G9S9BEay2QN4VCe2mk3",
  "key40": "2E72N1kGgeYiF5yFJCLTmC2EKBSm1qYcwkqNeSKSr1Qixrnn3WwbDEs5MRcMExayhmhDKYddMpweqfAU5z82yjNH",
  "key41": "4JSLDzJFT3yVaGQ9B4vC5c7nHjPSGTUyA9Sr1RuB3ArU18mXSR7MyKKvnMCmiTk58whMjp3Jd4XMdv1b6ueZngMY",
  "key42": "aTZ9HsQvDnjRwdLoG2eue2YYAasFtLsAgJiSxfXLgYXayvsWEbmAyFRav6F28DDMmFjavDR8GWjJYPCDKquzyT7",
  "key43": "4nrPRHthPG14LELsS2qS7ZgBG79iQFgAA6JfZuGH1dk5TJwmq8j4iwTChBqXqfbvnzsMkF15pCezZcishiEPrhCq",
  "key44": "4mp3MpYFWgigxt152oau6cY7qj7NutYE3CTGPH3NgR9f3wKA9WbKSjSAmKzLHDMKJr1xowKgF5xgrHLyF9oWoej",
  "key45": "33Wh3qfNdWZorS1QpGbCCKZsVHpf4yhaiQZoaioNCFvFDourvb4PztuXgwZBX9MpwnSf7w5pGjWkR3mogkk1qKkA",
  "key46": "3AieJ7eDeJqpm6ZNzEQx6BBMV7owzJZBEyjBjB1Es7ZSWgSf8wRSuffTd54e8K8UCVbMVv3sQkDmW5LzruwrPizF",
  "key47": "dWhaJmSWwGhEBnpHW69Jzyo1DfAN31ecPsYQycWSXiF2SdmExXrbV1FYKxxU8trfMPeWedkdGg4yzkvr7pQ7B99"
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
