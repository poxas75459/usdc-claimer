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
    "21HLj8tjj7ELwdeTYyfKsC511uN7UidDsu2ED7q7orLYPQkS3HYSU9wkhEEM4UqDWU1CcLJjmZuJESxBcS5miaNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fgUyRew9b7LdMinMDpSiew4BiFtDn7j5vZ2QSSurxSQNFVEe1JyZt2MvqKYkWWot63EYcMoYzZYHHaRSD5J1kzx",
  "key1": "5RmNPU2uyFxZg4EeADZeNJc6LptCJnsdHM5Nq26oR8ZU4mRjCJ6VnDWRnKDJQ2guGaCaR4jFXYnuYJrMY9ASk9Ro",
  "key2": "4U8MP1hsxHWGPPGy9P3gkfaunSN1iDTZThMY6tfNYGQRVMcM3qhJ376QKeZAAKTx2wVMVWQx6pzww3sQRu5qmuYC",
  "key3": "2uFLpjE9p2VddMRxyjFBhk6QiVvUVKCPsELVk4fgGQUpw8EaNF3TEskwsPUf9LpCCvTJDjt8rKJX6ZBgHoWvPe9m",
  "key4": "2RJsuLDjM9tP8WeBHGCVxLnH2xFXqQRxdDksge33aqHEDbmRUhG1V7AipALvkesy1qD15wsWEoyUHaUHZ7GzM4MW",
  "key5": "3riQWNn9Wgch5u44giV1YwgtRBjVz8s3oyZCTCk2wyNL1Q7zmeZ75JyrhvPGiZFPhf79QQ6c99zQ4ySRtPSntLUg",
  "key6": "5KzAe8nvKTmRMkame2A38MEeqPwGYny8wPNqF58o7oSUbSxBobic38mUnm8a7MFcHu45NRvHWBuwrhJKwgTbFrXY",
  "key7": "vMi8adMWjQcFJBa8DJaAGgK6acpu88VQYvKtjKzS4TFYNMmCU5gjpxT75kmKXHZWUpsFsmuCh8R9YLjQdQJfmaU",
  "key8": "5aELYmqHCXPufkkYEKXFat71YWyrsZGHzPTPSJ9L4PmMYVRsJKbj7bfzime26JBkL8Cn7DTp16g2Ya1hHjqPmtWZ",
  "key9": "2rc3Nd5WYYXCJWjsqQHeexDj3sXL1gjP4FBpELhgRJJtg86mBDQFAQdSde29pYSXSMADdaUBXMbM5fSVNcAunMmv",
  "key10": "5R5qBVhKhQmPwUmg1F5fkPhPp6PnhyoJJwEtbAnRPCyn9ev76zziJsiRLPdnkLHMUn2mHLFFeTwZ3t7u7FNMzJ7t",
  "key11": "5bzXXGCUL4v5TQ6yFDtNaHtkJqYohK87zrcZJzzMbNcBwGWpJEVMoyiqtZw226sDgZNYnhpeU3EasBArz4JBLbMV",
  "key12": "Jsbi37YHeAZ3fwKbxkosA68M8AxQgGd31E5uHx1ebVACLV5ctRFp28BEbPmVSEJrGhAuxx8nGoLKRug1pfLkXyC",
  "key13": "4nFBkQNPEKBqR63mpf7squoV96uibTv3KdhqbeaAzXvHNgdYPQg6oXht68V9m6B9s4ZhsNCC1fe6rWXubknBRiAD",
  "key14": "29QJo9MrtcSTezkTk5BmggUMTm4mVFcyeymfuD7627ftC3fm2itAJwz7yUSfsSYRXgomXG1ia3ecinNR4kUFaw4x",
  "key15": "4r57azHSWXhysqoSdWVuQnF3XwS4mGCtaKYTLL6ZKJfg2672D1nuKnUmaZ5i7fLTB2yqHw9iPfvPydriCxLvky73",
  "key16": "2bR2eFtxYjNs5mZfyRSTBPVR1Vgfd4Dc1k1ppqmsL3t4QpNey9CWyhSob8bX52k721m697gV9VCebVFPwBQSCjnV",
  "key17": "BSw2XmYXj6AXwvzgJ4WtmGvvFqXQfn3LzUQfAyvNXwtzq5wp1VVUE4f9Ug281hGuQfnSpautYxZXgHsAfU3bczs",
  "key18": "n6JNP1xhQiLmZbkcJirywPahu8cewuDReaVQMoGkTmh5GaGpumVV1f1gX4JS36zqV1LoLCSqtMpbqFHQgaeijCn",
  "key19": "4ao3mZvrqUzxXFUz4cHi5Cfzh7YdCRFzSaAZGrh1boSJh186b4VHYr6ZAQiXE6KUME2EtXrfnkUGnMHzMzjinE3R",
  "key20": "37KybU2uifn3eggmCE21kLEyg1A84aBiFG2WKX2HGuns68bmkpttrhEnbYPf7f4iWa6sJqm8SiTU1VGmGCcodns1",
  "key21": "2vMuXHSExrJX9HSQUaxQmPkaL3McZr1aNamVXFJRzZci48d24sS3bD7ALREWtLFxrCHa54CT1o1zE2kcKn1GBsKu",
  "key22": "5oxGFBjhBEiWVB2qaG7j9QsnPMra5Vf6z87iiwkNN7s3X6RWuTryoKfTxXLmLPbSyX1aE7TDFmSeurABH3a26wWJ",
  "key23": "4sMWuKGo5AuVtq7LipLPuecbQMNkdtyUcEVpt8o51xYmY8upDFKHnzya4Qe8JfaEfyUzp3ALxoPCYCcJDHrGMD2f",
  "key24": "XJp8vHsbyfMMp4MFUTEZxjC5ZqHKyCgsGxFdBtvXbcqmDY1HLVAfsFjkRQFkBWgGoKTrcjNP3DjPayAThjsarp2",
  "key25": "618EYM6keLFkfX1CALRHThbzJuV3eVejTGRELvgnti9QMAofX4rgpXmqPMHEJqLKw4XHUCkWZvjSjBkCpf61JLUM",
  "key26": "4e2U4Mu2jVXeab71iVZKJjtwrXrkaMbbvCVPpXGp1NifbycgxGtjjDpnh6mpYtUUHgUL1Ykt22pcG28PjiSgtNyz",
  "key27": "3dfvCif7nU1MqHy84giXc4tuA6YZzTpJfijXjGygUyZdbBhCYs7zgDDCQ1csmj2SYLcbmGtr1BkDZ9ZpSRVHQ72z",
  "key28": "2bCwJooXM1KdBiREtC2cX8CkDGeeDsVUgDSpfxJ8jYDxD5urnfiPXwHoinM3pB8MVs6ea3xxEK54FAJqKCUCVCit",
  "key29": "4kiSwPYdibeue1CUUGgvim7SkwYfjQuveiaiimVoS1rdMiPymvSNejXGYwNvq6GGWfoakWzanUD1wVgbkXiEYP6K",
  "key30": "3yNjmMDSNQu2qTnuSKrx2sumXz7SBvjcRZeqFpbjNPWzRmxkU7LPmHRr8WtwevnmZQMjHEeJ3yasHAV1nW8CF7Z5",
  "key31": "4ptLL2eE2NJkgr1HD8dDCBZbqyBwznkA1MH9pyoYXrsSrMNxKdMZAaD1hivD85jrnfwk7zfksaMRnqYhKidA6cj8",
  "key32": "57wkwLGaUqqftVhkpU768R3H9jTdmTB5Ei5TLLo3PWTd7t19SfrnemVJpqTtfgXKbLzo3ibZHUFGkCd4YLKBtsgd",
  "key33": "gSVkji2QekaXMCGYpCAuFVLRDZFH6MvAvVcACMjdfA4RwBPzjARUJNhgZk1myaYTpgx5gCdScXQGT4TDRG9pSLh",
  "key34": "MPpx2pqzNJmLJxSPnfdjzwHcc9Fz3hWsFPw4c76Uf8BEy1duvibUDkXi4E8spmWY38vySeMmCDdqAikT54RQ2wA",
  "key35": "2baYwL3dSi4Y1kzFqtHTVPpqjX1NXypKFMf3MCrq11caigFuccPiayHJ5W5z3W6U49tbvrFRRnqd5jFpoL1MDSZe",
  "key36": "rtmTutErUSBPAThuGfY5mu3P1cQ85doQvEouJYFHameXc4MYo5RrXg1TDbCq4asG1NUrouQirzN3oKayL11f8zu",
  "key37": "2vdhFha98YavV8HQLLBLhNfmQshFmtDwhSNgQEhWikT8UmpZzqt8q8zGMiFGyWKnEETQoX6TbgeP3GBvSVr8s866",
  "key38": "LNnagPaEpaaRnMiYtz1TSgN3NUmSXa469W3DigmHxRDk1dF4kkErhq5YeE9GBvDrvPRqe74v6xNg5Fd3fWLsR8t",
  "key39": "4TVFV53meo4UQYt4nCEStrN8X65N1w2HmpTvm1raStnu7LF2zcwsJoRcL2FsWm8NAhEYoqUzLcXt4uRc6pS7DLD9",
  "key40": "xETEvxYhh3Mc23Wb2AGNUfWnHzDs8ymv4WgoQPnByMMfVspawkp9kzF8B3hWeshgYAxh2vgK9z4Q8k4E8oUoxta",
  "key41": "1wSYxCbsDZuksAujR5aWqjuvn5HPrAktWPRSnHfQ9WvVdaSxqgezZShNgyGuWQ6HUH3L5dFqVEc9jLNobGWLXtc",
  "key42": "5XH9tWKyzcTcTuywcnc71nMTFGb1fpAAr4XVsWn5t4TjnT9XBVSKEhNwrUdpGKAHhUNDPSDuSLrpMaFwVrPE3Xgw",
  "key43": "uaZVfrH8EywXCAX1vMTx5j6aL4c2SuHDqK5R9zPhK3LzAXavGaMEN3H91if8TBYXTywi6X5rXrcBhgbzc3GGdBA",
  "key44": "2f4Davm7ajnmtJBV8WfkNXtJEDpiJZArwmj78ZFcifNakoA7dkF7WvSqT2myP4y8Z5PaSkDRgZdQ5REZKyH5C3JU"
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
