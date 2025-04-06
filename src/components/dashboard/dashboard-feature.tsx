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
    "4rnztZhxET4J635JoUiEmenNAuD5M3t2EhL7nLqzxqnKy2yWLrAa6q7P6DE55UanxAxK5CoefHvCRkzvqrfdL1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42rHGLiH3TxAksL5mm4SYbDEPKmXSugPasvypCQpqUJZEkT5tq1455qkDmdqPEPycUcehaA2voMUsHx25fuUWd1a",
  "key1": "4QSjivGQ9aSxCwPMpi5KRcuhUpExdUPzBMrYnbiK8yJQ3viSavDGwcAxdPyj3YocuaJiX6mRyKkZWsG9kwgQTgRv",
  "key2": "5TSZzpY6mch3wtFe8fnhKtpCWzQL4FpMCh6hBfrTwT2EKFyTGNMeofRjNdVwbEFLiCxP8kZEeoECVk8G1Q6EDrYJ",
  "key3": "46T71juQzReLgxUB8dtAW3whdYA3bpMFc9mzZqeGWF8wXFyKrQeYFToYF2vDCHeJ7SnmVR72fDstfywx3TsMUuZv",
  "key4": "39zsr2pTMEC2NKKg9piBZhz2pEAkmqmCATWHFtT2KbGLvY4k6LRSHirDfEBcNzENnwZfr3SgCXu7qbhpWoVZkZqw",
  "key5": "3BKdQtZUDM6e5a1Ku5SbrzXuNYYVBVDKdfvMd66csPUyKyQruKGGaGFE7oqGMChEUp2BMDgpfo2MxoYHJ6bhnPy",
  "key6": "2mUfW8p9W8RU22pKwmAk21d4J3T3jki8Rzt2XiPoaDL5q8xd8wKXY5LtVAekm2JY6GtD5rHHcdyPjmfVQsMSsscA",
  "key7": "5g1eALF9DQiFfdc2GUSP5HEwxurof6ySdpgUGB7vLnCnAiafiNEF1hVWwvG6Pe164HsrZdgBfLeFvY92w5akdRTK",
  "key8": "4dMpNB21WqQmveRquY9HhtQyavBSvt1MnCmckwDKRGDqWArg8BncaDKxtPcxtrLft96q8nEZhCqJ5WbC23rJcSzP",
  "key9": "2GWX42okBmVuirZWrnH2a1NqHWDQUp5tSvtArmM9HGiV7jwmAMzLRRPgarqmSex7sR7qQEnkr5bMkLNXVNuumdR1",
  "key10": "Fcphay4d1MHDfs8M4n7L4msSBC5xsFUpyzu5XKkFph5nzUekuUSYfnbsk2f9RzFDFHcN8MieJhaM2jc5yZ5nq4y",
  "key11": "2yxqTeiFi1zJkQbLGCUjnAae3vCzZNAtZGvwfMatom21DQ3j9GpPwBsE3QX3JFS6mNd19SUd6pmFcmCUvVLrjDQm",
  "key12": "4sts4uBaoLJYqa5Q8XGY3yUFuAZQoXSKyeodGwRqfTgS8LFASebVBhTDV4FxMhmpWdXAFhM13FRVchWYcr1erwQm",
  "key13": "5oDnGfkpWFaTXxW8w44DJjBGZwkVGNxfbMPCt735QjcSHfMyduzhrM5jrGRWmhQ6phzFwVGEcYF1bsEj1dTx2RoZ",
  "key14": "JzM6ac2oMMe8tjmAYz2MBPgs713roekDdBkDRrJkgZbYDGac3fUQbWxtT5SQQKMH4yW5ZLheyqafNvMRjCXGXT5",
  "key15": "58xoNqy7KjcCjyBBSUygET1aN7hxBCkBkso9w38KABXH7CdgbAbHtPbAwfGDHSteTvTdZ8QX36kZ2n2ccpLZvwEC",
  "key16": "4L1Aocpv7FH6v4rQjtdg2fzEup6Po4ZjCNuQMU7AFD5aNBm211hh2zeEeBQyirW9GsB2YLBW2r5zK5Qjh9Ef4etR",
  "key17": "4JPEkyhB1VGtzrL1f78QvQvvPSR68baYqafgV8TxTKicMw1jvoop3n4p587jzaRKCX2Aes3xQFekD2s9snSifgxS",
  "key18": "5zWDGpm8cw7aecGDVDT9RU7owo7tKLqxth7vxmP4AckZCeCmyyaEWsm6AqCZPmLbMcifH2twHvMEnpaP5Y576VVK",
  "key19": "4HZ6Ya5xkeuDtXJ3sfScaAUhxYC5mWMn7GnanxkzjkLu48Dx5tDgxzQn44uF6YVbN3uXxsRoXFbjxuU57UtR4Rzw",
  "key20": "2Wi5DNwFCG6ayDg8gJhR92iUKV139ajU3vCUMXnmSwW8MuWNVLuXreCtbNQh8X3zTTa15v1p6YWTsfwP1WAmV2Gh",
  "key21": "3q1DxPiMKAExsuLfCugiHh97kFKLvP1kj4SzeJapeuZhjqppXn7uWRgWAJJhaHbhhZtp8pdFMd3Zp56ALhjMTUNJ",
  "key22": "5oVVKtz3aapQVkGtzvjEg6wRXRDp3XvHxkEwiBFtLQgYXpJwF224QKVQhETmdHLf1RoG62Wb3CSxRAv1Whg9ypcC",
  "key23": "9d5AKnNQC9dzkRjZTpcT9Su4JGcZk3EqNmEAJAJqNotZrk1Md3LcESs4GRb2Gih2mAzEQsiuqU7Yb4vfX8AMGo3",
  "key24": "53kWRMcJXjwutfCG9Ssvco2HfC5rtCUK7YNCD38RkY4XNeNshbQ8KVtjxEEPL4aLzqbEBbXm9Ng3wDu9zhyy1oP3",
  "key25": "2CdrXFjDUFMoLgUKVsREEFLCkLAGWparfJHYBvoQPgDYHHkkGXo3k3QdNemieBmkKv9vZAknLapc5besTi54Jsif",
  "key26": "53HC2kaoH8pS2WSgUTsb2qiFTuwpQiEbdQmLir6RV2WQnSERX1GbmFcbGAocmEHHpe4Vs7dQvwchBzjHbdySenNj",
  "key27": "5C9jhg7dfpxFVyJKTxxfB7dc23BGd3a3o74RLW8ovn8ZKCM28pJjJ8bNbronb3aCeiLF5oCYLfqjFgv88U82tT3X",
  "key28": "4UZL7vZZiVG1uGcNpZTfEtWHSqTFJcCYqsurD5vvPnJ9LWY5ABgsqGqD1VTBGQC8dwy6aRv3NhipmdApFRcm7ibV",
  "key29": "97WCiR31douNBUZjMwUZb2inDyTeDfGCosZSeAnZc6FHDFeaKJcfsYR5oh4wHPjutNL7suxC2httsNTG7JHp9ee",
  "key30": "2sRFkoe3rTUzhs4HXtbRSi8MuuCB7L2ovXNvneaPytfUyaXdLj4AP26wb96sciPxD5BVm3bu7j6k1t5Pm3Vy1XSs",
  "key31": "3xXfU66Xpj2CbbdoHCvjfPWBA1AtsfHKJpVaCjNM3BNpjL5UUC9T2pbjLFf5SuY9gmUpAERpmeVqKZZKVvxpM4mw",
  "key32": "5DJrLvwuKphtkqDQtHcAfrYtqhddATefz1k6RfpqTQwHBWarkbcF1QWEodU7sWqUfecTUF87PPP4T86zYUhyhtGb",
  "key33": "5wUfgmzUhXSW3TWrKsbjvrPemaj6eUr8Cw7TQY2xzmcwmbJEAdxz3WQcdEXDPPkmyPWhSZPC4KH6a9fAe1EmVXqc",
  "key34": "5t3vuwnB4ByYEzvWMD15bYSAXDsnqLXNnvAxkn2pujYtdssQP5V2z6u2aSGnsZ7qiGmUBKgmigM9MN2iXpHjuhBL",
  "key35": "5juvdwEg4HMuob93BcpyPeBGdmBdUiHZxdpcQR6KenygsnMsutx55FcU5uEoAvoaCw6RZEaVphinytQeHuCDwwCb",
  "key36": "3QEVGB7it3HDKpg24A6CNRyyXjgT6emLoh5tHPSsPxmZLWGGT4BjSdzsFFfwnAk1xg1hWfvdN2mDcDVcvHTw4p1t",
  "key37": "3r2Ksv2hrReZ2fRVs9nxURjfFqUcEnHZuyu6E7X7tXvneiydjT73DBfuS8q2GvT3VzPe8ZBciwv8HCYctAmY8SED",
  "key38": "5Jm8rMUScCZGp7NZsMR6DCQaAGdE33fnhq4S8sD9DfNoNGVuadV2uxvgDie2BbtdDXpoUaKTdhdepYqkGDGWM28p",
  "key39": "GRF2vdpiMnBXmELDru7xhDBjsHYmuAmrkHgGCqfW3c2L2RTuZH46fTpMydN4ddZso9dEwf92hGLhBEiYguUA3Fv",
  "key40": "47zrvvPz7woqkUcAJq1va2qJGnqQKJx8z84dtkq5tXiyJQAXVnPn4upspwuLgtBDciThks8UoRwbwXb2FQita9wv",
  "key41": "4BDtG2CEeNDXXbAftiAALgapPxy3snJ3LwzotauibDoft48sc1iM4NR9LrrucT2KYZjdj8osNvgG42Vgdf5XoRAc",
  "key42": "3Ls8Mzo4gzf5szYHdjKuUteas7fH7XHso8Pm3uMCDu5pohdDM3PPrZGeooXtZAR3Qgo8EpqP3vZwiHcZzZ5aWz7W",
  "key43": "4qc4fnNAfjkjHvYTgVRM5PyF2T3ffaGPbGUWM4ZMDVa9Wuz9y6bLch86d9wgctQbq8kU2CybpnbHbSZMwsJwve46"
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
