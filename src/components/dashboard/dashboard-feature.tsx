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
    "63pDQhZ12ji7QSkT99ETKNVqd9h383zxwJag95zXthDH5cvQinQyD7pPeD89FtQgHKMcDBwp1CoMRsuowJBxcDvx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DyTFaDZgwoLB2Ja7v6ZZ7R5BJShYmCbzqzb66nW4fvRMJWHhFf5R7EfazN9SuToekJaVsBD9SvLFnwdhyMX2B8R",
  "key1": "4z7Ls7n6g59ViB9W7eWMEwG7oMNdkadkJCArxsyomp8Bpt4WsubQUA8akT7JbJTKWPCiG4ucB5fPqx3tdd4YFCVN",
  "key2": "4S7DSTnzvDPe1P2DBPCtHqtguw3MShyxPeD5y15QTL6ypEWTgD24SHguEh92hj8Je6KEspnhSxdBU8Ui2A9uorz4",
  "key3": "4FwkbM1wmp9Ev3uksTaoMvCX7goZkH6tX5JKWnRGTgEvgMCaBMkN5YQXCPUMtQAgvMWLyj4nmWippXMmPDdDFj7V",
  "key4": "2WQdh1UpMXLg7UcRrKPNwNtV5wg7WBM8B2z9eKfXd35dyBg5R7ki8mekobd7cu6UWNP97W6qYRa9uZeSnx3JCFEs",
  "key5": "s7BQ9psxZcuKJfL983PAZfBmudVWJwP3SmXSuaYNe413Fc1ZKAcyLTBoF6sH2977jMBvh5KyTrMq3kKpvzTKGiG",
  "key6": "GE64ACxhbSzqTKS9fvBqRoSLzBWK1h8zbSVXfUvKaZqf8eQzfm52kLWYBfyYjsZ1syrvwpK6PAgHuaitg6UeMtA",
  "key7": "yoVcri66SSBFmgZUpEvxAZ9AyHaaJKvwq2wRB68zHonaJBvC4XYUhmCRg6iVdy981bGRLrso8N8FTGRZq9busV8",
  "key8": "ktS4FBVc2tgCEQ6KfVSVPtsQ14fHM8ABWanBGRDh6RMpuDh46PgSLP35hheoEdVDBD7Vp7RAFDiM4kK5yGcTYH6",
  "key9": "2oGSJo9BJBDT5815VsghsR2oEKofxtUDjtypZ3cThCcYDxx8VYrEpxg1bTNWk3Pc18sZEFWpfkMsBgzp87h8kfFt",
  "key10": "4wqpeb2f7kzF7xp8X2GZLWvte9kGSycpWD3f31FtXiRXhNnpUjSM1TgLjNhX4T9TvTZQJsdgepB3SnBS3HZck2tp",
  "key11": "4xj18eD76VohThFcoDhAaJs1h1EfRcn4JoW9XYLgATCVGgEonHKi3vgHj8sUukJbqgKq5HGsKwR17L71srmw8zfP",
  "key12": "5x3BYsrvL8ht1bR68iB4BVGpPennSs4R4z7xa3fftP3t11hhyMjDW17coRDnkcw8CeqR2NYM8JT3q84p623cUwwK",
  "key13": "7BkKBKCfHopxxLKgexH8YK1RzoTY5v58fQPPvjzttsnMkBKPFtba5V57GUzAHJEFrepqiL4Yjha6VJFwmeFThFf",
  "key14": "4pnfuuY5ZLXRZYqFThFTC48Sjs1UW3uZYBqAQQAV87USppZG2N2sPtvse9ih45rp5PL6WzsJ13sf9RqLsj1x2hJX",
  "key15": "KWzeuAcjFS7pG6mosV2UtLacmSHREscN9z5vgqyVzwioYqGNkZgsU8tHFENVbdM9vHT1hPCkKXi1fzAZyyRbgZF",
  "key16": "BjLKsf69aRfgGDokTJsJihTfajcR2SurfaY27J3sKjpxw1hUEHJscn4HAiLT9pK4TrdjtDoEp7i8FJiBYqZWTbQ",
  "key17": "uKZmhfR8e7xbweDd4WVX6LxE9s8T5sYDBfYd2xEcFgt69xDQHjhPquFLJTnVURiGpY9PTV52n267cWX2EMKBFvQ",
  "key18": "jCdnaqS3dLy3MwXhCE1hm8C9xE2ydUdbB1cXoGsQu4qnXsWM3sxMgkEJQSUptUwG4dy4yV8zrrU5mVJiU6by1d6",
  "key19": "2KYnqGRUttZeBQMRZfmyTd1qSpFLTtioLiUPndWR1yfWuhDPWfD2FPhfcKzWZcMq2GXymZXQaFT8vvPg99rAVXmd",
  "key20": "5DTnLpxGBsTBrySBM1eHXW3UF2Awzz5GPYrDxndiwyV9oaYDrhuab7WWR14oMRK81S4Y1zmS3599kuEkyadxSy1T",
  "key21": "4ZhiNAvYZEFNTg7cAbNbsfggKcqXdMPZYMsRYwQohgfpuLJnBxcf8F9AUVkkaQho22ELVEW4RxLFAq3y8fvctAeE",
  "key22": "4uGm5y83ZLRLvCUx1PnJQwtrBBwwKWm3MKw1dPFMkGHhQiyX8TX5gh389fb3yjYX3RkdGP5hBkL9erRRFaMAUdxh",
  "key23": "3NkZ437GbfjgJih5BAMEBaMGrDYFgEqVjWzSUaKAkiSYZLgtv1ZWZSkv8anLa9Tqbz9XGMxYNrqUkYGK8YPXtpgF",
  "key24": "39JUAjK2QXc1sVu1KR5rR8WMvxPa42wPHXJ3ZTmsQvcfm8jx8KDnWPcGWF1wtEpSyJC777YzfyyU38tZRUeRNpfB",
  "key25": "4NdjxDrcr6kRVNXyE9DWCHh4CW9gqd8F7DsDpgqzWN3vTasMNLpWMKRwsH25SzqnzysfQi1jFSiDwriPujiknjVz",
  "key26": "3camgE8uQEUeZ4WJbhNLQH24vzjDMNkoPeiCUpg9M7LEKvibzVjfkoEXUssxTHX4HkkuihYiTm7FwkCFtAmFof2E",
  "key27": "2riudvswWj2kthD6sJz3f7by3g7zq7sTHKXpG8TLxW3jREUY14P2Psha14yrRjnSTyvYc1MWWS5aVjyXjUqtAaGk",
  "key28": "3eQQEXPJkBfTd1XJFP8ETzzx2qu3ayBG8tjto4H6wBPHBJCqHDpz2MTwjxc267wgoFXty2xn7uukhL3iB3WRQ2a6",
  "key29": "3BgF1aHVR6f2pnRWnfUSmoKeRCUg341xHKezRBJTXqCAXsznrSt37t7r9NoST3BRVRbd2EKUZuXEaCUr8WxKkrLb",
  "key30": "3rVe4zjJKr4v4x9wUFh3Z5BpsivawzbLCLj8P3RHqZowd6mEZmKHjXRqAM5XMFe3L24JqzXfF76U4pZpmJSq9Dfn",
  "key31": "2ZBGZLG14sXZgdXf9XCmQuUGTPpNuj7LYA7LRN25699VtGu2LBa9Beb5Xi9UsK1NnQL92YsjP2KaxsTFrveCqw3k",
  "key32": "619doT6UkR5PzPYMh5YrCePihzFZfJXW4L1guZKgcVUWdQBm8ukpU77urnk64UndqjEsdKEc6Krj21eEER3N24Wz",
  "key33": "5uBqTHEyUK3EddsHaBXFjTncU8A2qN55Ct7mJyeJ9frgwTu9EySKnb2RwfuLnxeQEEp1dNJv8DRyX6s8C1m8jZ4A"
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
