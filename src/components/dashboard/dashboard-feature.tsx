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
    "3g7Zvw41GppfW4zvWh7gn5mFMyno6PiK8321sdeLuo6UnpYArQi5nsLXgCdKquifgrYRXTT8h2qHpu88fbBMVXp5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y8BC7io5hReVsuXcbkFuHkXF3NY5jMojjdmcH8PKZvDMP3s6T1keEb2vCzpuMb75yGxuToHU2MFGnQGeiwgTH4T",
  "key1": "EU8AWVLR6PCkeuvYi941Fw6TMadDL2C5dJtXy3nuHddQ947xFTfFrAyD7EqRN4pwdDWtBFH9MmqmDKxZea9dDgQ",
  "key2": "2q1gZqizKQ9H92ZxMAVCaNArTdd9hWTz1WmjYjSoKPZaXMMJxPwc5hWerFgucD8bqHCU4TAGh6zzeGryPjVgYNJD",
  "key3": "4iVcBetYe399FXfzWZTSbowaQFAD1opLSdzQCrePg6HRJEDjRUu9uj6x7zCHSRUA8jzNerxnqit6FwaqHifpNuoc",
  "key4": "4hLJ1S7XeDMJz6tC5fQazMvdKyRxXsCy5VvjEB8aNwMubuAbbsYhYpYXXfGUkGWH5f9TB89iYTgTWoqY97HQKQYz",
  "key5": "3CFuM5Yox2maBxXuLho3P1Tbd6AJLvxhJzmEaczbK6sBs2hBMVj7Dy1R3mAuMCt6yGNGdwLcHfyPPzXf3d598K4H",
  "key6": "37QZFHnKcjatFmygLe2H5TbyBprMQxYDw7aGjECnDQHUuKQPZhCG9SvkTiWFkcyaNfX8vHD97rAWRAvdxWBWKNf6",
  "key7": "xszNC5tzdAnLKkVetsv4cfUvhbRZxQB9mLzrhagwgi3Q4uBqut4mPi6s5p7KRnssv147GbXpPLUhe1VK8PvtKcK",
  "key8": "5HBeTjVm6RN8MXXsBKRAQwZ8CWPEooL1tsDAuheLfrwWonX9zYN2RJBf6eQ7hcdWbdQJH6YP4Lah8wH2D2xzdTHa",
  "key9": "2WPwxqSEs4yMkd9vDrjd5tZtGWCGSTqZZB6oixrfsKYkQxjeg7gieb4hCjN6sgPkQNNauTardvrYuQB5k9muvHTz",
  "key10": "jhvfQMggSbgv5VvFQmJMK1mCPzYUDdtHaX1997qgWkkiF2E2Qo73PZZVCUX1kmUVTFrJVRrJUz4BVPYNmAahjT7",
  "key11": "vZFWE6dAotQjG7xCMjZZfhvo4gUsbgwMcC5hAWEEMpiDuKvarFaaAYxNbB8dr1fYwdxuQW7pTf6UafM7sm9NfgK",
  "key12": "PFu91Tswa1gG5Dw158o3ZDs67tpp62P9QQKZitWdx2fWFmWVNSDkX8danHKtNvT8Hiuf7XShkic992SuS1yvSnM",
  "key13": "4a18QDJiww9Ejw3UpvZg7pEe79mijf4bC7FD6nP6uM5RyVnonY2FjGwUNHTmLsW2SP5girf6BWk7P6WyKV2m9XcK",
  "key14": "M4HbxZyn9UspLTEte5JgqGqxeLLsJSWyUzwVHatAL8EAfD8X3ViAiEahQ5PwDtD4vjgwRyvCMtqqWqu8eRf7zsC",
  "key15": "2u9ktMD9M9ko5tWmFcaZrQmYX2UnR8eRX8Bi8HNufntNiXH6ofieT4R3J87GNgkXGnBwrw4xwzU5RghZ23cfgUSc",
  "key16": "4pARFjcqpeDcwcrdj1siHe6KGw7vSpA5DHH2S9LtE3TTCej6ocn56A5L6AjYE2mgc4he9Raf2fhZqKWPELcLpj4z",
  "key17": "24ocJiNGqVLiYed1yD1cN37oERnKZovujQEpdFCTsgW4oN7VRKBimqVVKCwTSshpAagcXwhhN9nWXA7rrJ6cSwaM",
  "key18": "2mL8Qx4HzEmX94MQFL2y1pg9AskgrZhH5EoHHRxM7PLTfmDjb4WTo6ZkjVX9SCLcFrjiX1WZeHKuXqZLWaJFiL9A",
  "key19": "5aG55cNGMp3KBDVt1B3Wy88XkY5QVTbLuz28ZycqEbZftNjjJ4gEWVpNfFum8CSnnT9HDuAu9s4f8KXYWckmv8JY",
  "key20": "7rZrW77hE3C2U8Y6Q2N958cv2Q9vtgYELNpT6vL6teALYPariQTffWxBar9wypXCpFY96VrMfAR76vcDtVGF86F",
  "key21": "4r38c46FCEA6UrMHztPfcbkJMt1o9KXiBpfMtPw55agknG7vtfHM3t4GC5cMZk7eZmqA8hi5JMLJZoocYbJGnqcD",
  "key22": "4hyWarSgSvrdRK9qAXZ7zq1FR2PUbouYvehHHTs5aXE2ezNr8d3nxThyQAmq2LSnW7MmMptzWxbw3b8twBLG6DSY",
  "key23": "4TengvaY34mb7CTmXy3HkDm4twJhS3vVkKmZJCDMa7FCARjx9tkpXrgzJgbKXtJzmv6Bh8qF62PmfgnetpJYJGKC",
  "key24": "22mB5sD4kBSyQ1Ey61Q1TXfTQWGrEauW2gNuc8qASGBNNT7JUDipBv1jQkWjGsrV34bk9C3QjjFaJYsCCycdRn3i",
  "key25": "2izuKPh8Chn1nGq2SRTLyjs5DZUFVf4j2rtrxn6XZsY61tww7Uz9X539fHm4Q7D3vX9YNQsYRXaTJuViqfwpcdwS",
  "key26": "2R3cpmYGLXAN8NUsAcmF8ZWVmWiwuH815VydkhSsAhLfVRWLtkHsKpD2QR6AzHKzGRrFs9hRXZr1ddo2QnjhGsk1",
  "key27": "2ZrJ2EFW6oMotrSszLMbSr4cr1maeNH22WRX3uxpBDnE4BZ3zgZRbYoSVwddzPgvChpR3HPCiaexkE46iGSZkvUt",
  "key28": "4EHr2uCVtUkNH7F7rg4UoD6oMPVxmXFNDojD6vTwPfor4kf5wpTvqCS8QG8cWvmmxhqqy81WgcCAXnFPqxg2sSdc",
  "key29": "35c4FGapGPHNp7tUcB9qcJif9vu2t9iwMKf2XRi8Fqhh2NZhxF63Ge8q6dTR1VS5Fe2wngZFsaTuiAXKGBduCig8",
  "key30": "2SDfonxi9qf3kVBXpTdMriWE96fEXWAd9swcdMgfHUZRdFRN21SAawndkRXnJYN2ntVTdF7wJTsWwcphdChmbiEb",
  "key31": "2Hv9aPS14Tug81hMJbosi7GiKzd6ULWC86sg2D8frJwWbWgEjEenb2qeWHuRUWSw39DsD2BSQA4omVYQCGnPuDnV",
  "key32": "4uNWp8x9MPNJYcJBtK5h5awR8bAkRj2ifSQtZn9HeH9AfBYNyo6xkLdipTaau5jF9MK11FfW1BMN2xgBdMNBupvZ",
  "key33": "3hbwjhMjGC43rqhT6HYgXuemDLke4zxaUvpx1kBGpaswdaB3dEYMNnHhgmbY88E1V5y4kihXzuT2TDhyHid9jiuW",
  "key34": "5Jpnv2hFVLbEwz6DDfoeHwy2RtXB36XViJaqSL9HLSX4fi5FeJtC7zhjqq2BTXnNNwiX27GknFh4Vozx14dxnDib",
  "key35": "dyEuybxD3h8LU2V4eAFuq5s9BaRjvaeuzek9qMrfxy5JtAgqqT7KK3pirRSUzpAdaA5bike2SGtzxqC1YnQbhPs",
  "key36": "2QYnHG6NGoWgySPFJFK7p5gDzAsoZ2CFN2Axx3zcQA9hSnrmreCPB4Muny2qecbgNEgLTsZmFhPHkEvMu33NQTfp",
  "key37": "2jQ35g73avfHVLv1LZQE7AZvtv66uuex3weyvxddJzfVWnYeKmrWHAJsSEyWhGHdFVybm9r525E6M4Jag18zRVNC",
  "key38": "3zcLRozRSyaDEKyBsfgS9Uedib2bjh5QbnB5NsXoLhzxvJd6vgVEyPtkVqpWeKXrdqtMLqQPAFJaEpMA2o33FaTa",
  "key39": "cW9MitySwT33fReZNAw119ewiNKCQKfmkBuQB77ezxBaQ1CwCD7kyqEjzFGG27EfaB7bdgzqX5eaC6xqAzUEoWi",
  "key40": "2BW49b9ijG8aCyPerWQHN2ghj8HQqoCE1SYyoVB51zytiuubgSjuvqKEZTpitv925fdFqypC981qpw7wmcFFzYB9",
  "key41": "4kNoQhsFmthTkc4vgvtdEUTTSiBbGWE4RGeKkf4aQBpT3nrc7YC93jDZV2MqTKhMdLbqDRkxUVxGCR9Z3w6uYcjs",
  "key42": "5VzxedGywuXU3Aw4ogKMN8j149XgZfjEPDdjkRF4r1sbLMnxi87sVsZ2CYNx2Q3wdhP3AMraqy4g2eoBaPXihRb8",
  "key43": "2ntPPeitfpZ2PtoQHdYd5jTdW7MJXD18dxrSURwgsN7oH83ZkqS6qR8JCDv2rtjnYHXyHN6e1NjYQsaQZDWnZqJ6",
  "key44": "5UfCAQiNqBSvQtqGV2ouuc3yrVvAomEdR1YDMmNUXv9mxRLP5qUUNvAvLAgMxvGa7hRkd7L3mug3HcAKtkvMRn99",
  "key45": "64KptRPUSPjEyudpqeRg1b3G3RvZiu4gbxZHEMJhjrjA1og2yas7H23oAcAPYGh9qvAcLo555dd4BFHcJh8pMqxz",
  "key46": "4siCqLEWHq1T13fftasBDDva7S35JMWLuoia1sHvPk42jgYofSAyApWpp73RLzZZkxrNdDA6qt7zMEtQ3CNejyRu",
  "key47": "4pbrujP1x1hARtpXKsADAV5QQJBDP1s3VQnS1zz1JZPfYp1MVxt8XziEvRZkWXHqUmEzwbdpGm6DNtogHKNZgmmU",
  "key48": "aZNkN9ZeijAVEQ6KSXwJu8fTkMHuUn1bXQsDmH67yuqv15S95PxHJaBvfHaMDZWmaHaau2oRGViEoFV9RGKgQs7"
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
