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
    "3nEG5TwKvXm24DVzcYCKCMvPWC6WxiZ7iYy7e2voViHc8JEKM3Xzz9VBhS3Zo8g7hV8sywVS7nt35zK644zMxUtF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RbhDELjLjNybbYCr9vwz9Bx3Fu2DDwyqRNMKmTR67TkqZaTdpEY4W6pw7UFZ3bekWxXNYErVtpPtm8Lh4SNUEK6",
  "key1": "Z1CGoq6ivtyTPKFUVPvysNNXQRxzu27YVGp4Fc8FDofWtMWLgKVVgpa1ADoMc5R4iDALx6knprMf1HM3517mGtw",
  "key2": "4u6mCYmAtYr7WsAYoYv6poVA5Q9W7jsuBrAitxfNnYRPuyVYRFBAnVtc4DFa61WBWyfH8jHMVjJrjjiPe1WrUwEK",
  "key3": "3dFh631HfhVVZMG3ixRaFTvoTPv15NWENaW8pKGcFrt4TDUo5SiX5eWVw8MUnqyLPxYzcjKn5h5CtMqrAqmCDuTk",
  "key4": "3LeUs3RF3XswJftCCUZ6J2sH4d9uLEj97AznPYdvk5qhSq3BDPiGaGnD96inDTuEWzgDaJsmeQCsvhCH17eqKdBp",
  "key5": "5kwrQ1FzfQdcahjkfaDvjcLdZgW7PcBpCxkEwt6KR48yyB9ttNh39ag28C3HByEJ3DXcjnhZW88QmvkMw7NCT4Ro",
  "key6": "3E68gGQtTQr3ZhuN3bzxqiFFN4neBm5npvETM3pvmr3tpD7jdW4D475zXtxFhMobcD1Svgciv2Mrf8fYJ3nHoxNu",
  "key7": "5cENLeDE7skAfNds9SjeAXd4cj5c69mSCpviVABMPveXPjAiMPeNAfNSeQgA3KvLd6EgKQBPmd3PZE2okXaAbzNy",
  "key8": "4DrdVA9zspU9LMcnbLj6R6XDcgCDmn4QM1HVnCtWRTKLU5ut6Gu4XX5UFd6oDfM6X2ENYdStrLiTMPS12UZdG42v",
  "key9": "2asi6vn3BhHzDxdfgypwpbUavnGrjUPsbecEHUWkPbVLwCBL5oHhCjJXT7Bs1qqvnJCrcqbmdYkrTDnEpzDVXQzs",
  "key10": "2JAU65EjDo7bGe2zC6cG5vU9m4Bf1SGSFmv1xzzDbAGJSGYNmu6dKAT6gPf576nkqowkJaFqsqJDjKYYj9cZechF",
  "key11": "4oesH8MfLRi7DhbzN7LYLDdpuCUrKz1Vt7oJrqH1ekC4yhejfW9DpVWgSfhe4mUPMk9kJRAbfYKCsmnRpYrEKCJU",
  "key12": "5hNXt9ACvRiGsQMVEQiGTCWG9UwoPFuvJR1rsRCFooUJUiMHoZ7Q4y3JrrujWsZJCgBHkQmsohcZUi8spatcUs55",
  "key13": "3u3wuUYZCANfTLqX3YCgdDdt1siX49KEaP1LTqt8j8stSSkQ9sBfrZ2mYte2GvyzF8fdcbWfm5mHTESC2pmvwdnB",
  "key14": "2mEAJovUhqRDjjkVzLjaHKQekmsr7H6P2PTU7SfNnQxqJg9sQmzfQhD9cno4hzdFjPJfFtBkkKNnuuVpGwLzRstf",
  "key15": "4qG2cwfcGoMMAr1WzkgwYjM9upnh5G6dkTUYzbyt8bpZkt3YTy8a2bCA23E4zmb57FRYezVPAcFJbVAPHN3m1fDr",
  "key16": "3U1ZyfDXVjMwBt1cWPKDu5c1tuSt9htPrjfGotaW1jxrWGcjmaK3F376YArrzSnzDsLspwa9wGTAkg6K8ey7kY1G",
  "key17": "26X3zoV62eSycFeUui7o9xYpU91A1s5zEcKPW3PBVij5M14pdap469umA9DKPGV1ZGXCEQDfnCZkL1PvdkF9bgKD",
  "key18": "DoTQMnvs6zu4fRZ6yNTgcQHAPAtwt49jd41MHmCmSVpZDVA9M9AKe9sBfkCWWaz79cMyVbjaC3uVfFqBcEBVxjS",
  "key19": "3QnLeczJzAHxYKWbXPciskvk7ZLkNDP8Fya1Wd6AmvU5t1f66pePqvYfGNadb89jjfjxiRmgVRQA8xvXeTEtvkNm",
  "key20": "s4rHFEVatJoZvr4HX5866kfndCrtPZ1jTfwAwmnEF5ncPPeWcAV8SaCNCKAm3FnxcTZQ7fKKhobdHqF4huY8NuK",
  "key21": "4fBa5oncqjVWgoQEdti5dE7uwCzyFLZi94h9braAruhdYvBWjzoBqBUMQun2MDVjRsg6q2jzwvzHjPLTVqyk2bc6",
  "key22": "2t75GbG4ETuymGARkzWAQsJpigbVJUH7p7xoyEpahVzp8VytFBmvrQMPpN2LYH7vxhUkSjnKHu6P2diDqcHjcZUZ",
  "key23": "2LZBVgwiWzfV6ko6SFhyGA5dsjW3ahisAySo1RmuFNKdQ7Qtqo4QHdGEvWSqsiW9Z6xD44B344iTU1rWWcojMp1k",
  "key24": "rj7XjmhLvTQurZHkdaW4zP5WckZtR9kYoZjbvTurKCpzw36nhRBVoRZKGsvYrm4LfwiRjCwNupxyMALR3N5RjdQ",
  "key25": "2JTvVmyeCMGonBwtzR4uFiwXTt3NvVtv7uF6eCv47u6xNwBMquH1gS1KL9D3ij9k3EfeVRJTSX23APMFQkSMNVP5",
  "key26": "2gwUdmVBT2syWhuWQXW43pyv9KSSuyFP6Atq1NZG4GxdCFZrbAzAt2ZSShzHcP3otEmpadQN6B91MFqr9TpaoYaB",
  "key27": "5nf4UfehqMeVDgnZn1uGHPi87htVgNQevwXgy2YA26Z8gY96wq76sBM6PnVVHb4mDCM2g9mkcuwxWZEqX2q1mwGz",
  "key28": "3Z1quryiKyUmdmXnSDkZmj8MzMzXz62LrfWbBJMDXq9dNfNZTC73Hj94zdcmLzhgWPSNHcuoSyRa28WcKv31jP5o",
  "key29": "fn9bg4peQk7ZkCYHFjnXBVTmgkX6SUUqCK4maZ8HCUFGj8zD4uab2HjdnWvEiNQ8mFRCtdcn89JPugf7wfSiZwB",
  "key30": "22ZrtaPfFeaB5GKN7oLBgoxXudSZSwTCP9h1hqsHyn5SCanNHLN3hBLSXK1nsHTHbHoWrUwVwqAZ4MzB6Jfyq8vX",
  "key31": "3N4m5PYcJZheucw3hfUeSc5Mgc5QJamyjKq4UL7NTydfiVbZcQc7MpfEESci5qQfaqe4UtPfSWUVPZYaSTb1znNn",
  "key32": "49UC6xXwvtCFKe3VuxXvs8UgrFoNsr7TVbCPhXF93FHxEAMNPWLwURiwGDAccjcG5xNit1utkX27DBb4fPCNNbY6",
  "key33": "L725vbtoEL6hHjZvFHqW6wKR6fJicx2oaAHxiQwhVWvg8dRz4SY4ht5GEm3J7TPkTvRSVmLELoPmeF3mg9L4jKj",
  "key34": "2ooHPF1jQ2DNE61tMUL8Ag7MhHYXseTmfmEUMytYTcTbEj6jtK4mVfwndRuntysbvaKfJhZjo42HdzRcFfF4EyRk",
  "key35": "5VLmpnMhpekYVuwKf8ADKV4skSdnzLZmatWiXmSHJWvbzkmEsfRnbZMYjWNGzEUqqt4iMf3rLpoNCA1Ytte4kaT2",
  "key36": "2a3XF52ezwunF8X2AWrSQSX1t8rytApR53PvtGaKtmzqCiThhxk99Xi11bTUqKsx5YYCQShoTWcn81Sc8UC7GyGk",
  "key37": "5SmgbSE3xtJRs3TDHi3hr23A8aPQSVX6to2JUU7ymmVA2nx96BGKgVkRKdFotpSiy676JWtsmMMnnfaQiKP4P2H7",
  "key38": "2ZoPjc97g4hRzhcV1GDwnxxb5u5a7vnPLBkaSWsT4kfNeu4CUv5JdiazcfJ5TmwCVqTs3qwFi8iUGxXWw4B85Xgx",
  "key39": "5PRXmhzwKd6teLydZgGJnX8XPunBTKNXmEB9qxYsxFh2kFnS8EQySLnAwJZBP6eTmRww4NVbCFKwkxZduNEBYzXg",
  "key40": "47fKBi8iJybC8fSNfZLsjrpKqyQt5CiQQEY5r3geaoAdyuHLBwZwPBkgoZjGGrU7YWan1q3nWvE1NUskYaSC5uVs",
  "key41": "61AaTeZnYGNsxGFsDFmiumramKZwu9XvFcywmVy4St75mbzN5aZUjhDqfSS5nrHKRuDwq1STmphnQAd2VD2NDBMK",
  "key42": "3PLhMoPLWGZYCgBVoM4GSSvkYM2nvAwNgPzJhsBXHhHDDBtk9REggRsqC2PTAcLjtLe5PCvSWr8HN9TQt1ukeDTt",
  "key43": "4XEAxWG65Qkg2suPx27KPRijvCib9ZGimUW7P5DHrTuAeZQFJpuYLk2EWteEmt8zHXRajLKuokjCRVqLmM5K9jK9",
  "key44": "WN9u1xYzfEfD2DATPgR2SkUBKFrLKZok9BSWMyxqtztZrNMcHd2DNDg6NRmwTHJkVFu4HFmkXMt1dHAxi6sEqSy",
  "key45": "5QkVtzxssm1JH3CpZZEii6w6kReEMjpHGG7hEQhLTTU8vtZ3G1XGdbtJ1sDKoyWKDTPtPEReXYkv9QPJoXE211Ys"
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
