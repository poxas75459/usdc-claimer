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
    "P4Ah8BkdHo7eB8dgjofdgJTAwX1rNqdrPnLgH6gWcbiRSitib81zTq7QnLECAgrmsrUj1d7LEeZ44uc4AKwAzam"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b9JibLv9UbJJHPcQccqqiupm4B7sUNvvfbCXyqnT9E9CrfxRGzfyBSKbbXYD4VZSR777LPADYWSqSD5RPg32zgJ",
  "key1": "2zM9aiCmURM39HgM2tQMLtCUhyi3Xs5F28X4fNgNrGARpJdGT7VpbcMJEaqhH3ePjAMzMmLoFiMXiPzN8zVAdgqC",
  "key2": "4WdoPiGJyTVYPVvi47nSPFMBJUe54XxozLcWddWpija5t3Jzd9kitBSxATnxgTShntzjZWbavSTZMR2p3FoTB8qw",
  "key3": "JeDKXPJMYZbtxHgceWyoY5zByhvGh19nMHZWRJ1CHSpn5v2NBWKySERW8AiCGDkkqMdktYztpwztBLPy5XDmzAi",
  "key4": "4WBpWBi16xxZTjTtpZqVd43Hhw9bHHikY4vhArFJ39tFJCNCkpBmADwMUECoVd3E1LvZrznt3HAftqJ47bqvf2Si",
  "key5": "4viohg1TeriezFZtWZ8ib6DMTYjWj6jAv7fjAf1xnx1Gm7UXdHr3pZ6yYfTqaoX3abS9L442nWNzGhZyvRH5AmRj",
  "key6": "5MZ67LScq8hnEz43dGauCx72sEVH1awJNrKGY3HLyDkVS5F4gXkrhL5uW2RrDq38TGrv1cpJ4AGbrRXbTedrPrx9",
  "key7": "5HsHSH7ZLaAd8tfMY3qoyC7dQhNgM7avaQSiY95CYyTvfcE7MZrCyVzPJEzzcBgpA1BN2kVhNSqWUtmZ1mcg2oUR",
  "key8": "3MStgXsvjSnWUgQiDLYQ4AdXHkq2dZQaLTKcNCrSXfqrj3T9mKE6yuoBP7cLKnMe8VLktRPNo2nVrRzC2V8zQ1v5",
  "key9": "3cgEXCmyrLEBLzaKo9tEs8SAsG5koMXBVvBrFZNrboWTipxQug4uK2BZLrMRnMPLjkEwM6iwAcdJo2BmKkxvH6Zt",
  "key10": "4QWQpb1eTqYXPQiCJa7vLDf8J8xkGvX8mZTPfA9pet8ZDvJYpt7R7jLuJmXtjXQWRnwL9R5ZvPc9VTa8eUQCwmWJ",
  "key11": "2qqKh9nmDCbyZ3zGjUVBQCNUiUgHoP9jymYFBNtyZ27FLVXFc3C1HhPSKCUmL8DMQkjzGDebmueUwAgytZx7tMmd",
  "key12": "64MRZwzEQ9KfF6QrgVWjTc3vU3iWcTRod9KLg8M9yQe2JbQDrUQaL3CqrVybiPza2HfbZo3n7UrV2s2qGA6xRFN8",
  "key13": "3DgMW9onpb9uxCXjrhTwPv2nyzjWKWqUH66fRgP1Sze6Cj5V27WEPintUqF8bcTAAxYp9GYn7TvFcxxmFWLzcLoz",
  "key14": "2N8yLsdKXsn1p5RFCUotMY7yTAQeE2f3btEQFpKc39EYM9thGXBBhwgtW3cMFnxu34mbDgsafz28z19UxdrDaTfC",
  "key15": "4KxB8512S6nuDDkvtqrB4eoe5jXkMJ9WZcLX1fxjFYjwYEtoLGA6xbr3TdaP8PiZJQuxs6ZYkmgDCfSeLRciJJVo",
  "key16": "49QvtJJxrA2dBVT1vwCjqHrNyHpni11AuYFNB89FM8P1q3azBoNxXFRZXi7kWYZiYgTPhfaJySbhPYN5L2HbULuy",
  "key17": "4bGav1tGbqBYBfGXUuqtVGqeMGcRrV6grpG45CycFFsVXredfQYsrDwx4L8y6JehKaERAyGdATJZBM7z8Qp4ousv",
  "key18": "4CfWYebLCzFzaEadpoQR6nbaj44XbBk5XEMd3fKrJ2oH1qJARRcXZEGhf3W8ZfL2mZNhD2Mkb2KLqdUy1XjL3hLN",
  "key19": "4GJFEQMVgWTDSxureP92q6vJiaK4TmzYAGEjSUyLfu2sbcmLMvbyQoioBvvyn5Kr836Wg9W3YnuPpFCEh5SgTcn2",
  "key20": "2YizpuP6GHqBrbkPZ9SD6UMfLZeMbCMCXuEZz19rDBzUtjpquP8Ba4u9djiBzsdSdYCJb2XBBEMtXwx5rt2eoyTu",
  "key21": "2Xi82RMSc55vppMBSHNWEa3Pu5HQ137y9p43kgwpX4PVV5QeXjM7nUZ4LKjEt4VRXKftCAGJ4LanmnfstimZdVpR",
  "key22": "3dvCr3idkkJA59W8wvT1K81iq2mzczyXsZkoFy7FCxKJyY4hi7MCmh69xpBEwemeVhkeN3CnyuxuqEHTTaCJ4rWZ",
  "key23": "5nF2CBtrsSXMffKWDjsaZNmEDsYAQrAX1a4CERNJPEjt77oEULNZJZsF763uw1y3K7zREc5bgtxm47NoxvLZP7Xy",
  "key24": "5vbkLMy3aCR2i5M3nHEqonCuwnDGCRQp4NB1X6uPWHBy5oR9RxNS7h7ALLxDFLfryf3RpW3xGR8cmikYGcowaZFQ",
  "key25": "45wE4K9LAV9o6Ff18wJF4kgtMud3keiCbujykBb6Frff4W7spWxxQfDTJheQmndPHjahb64WjihQcLARAmK1yEoR",
  "key26": "5pjMb5Xxkpmqc8yuVz3gbM1NQKroqCsoQZjPKiMGqcbTp2SRqBJzEKdCw84F56AtpncVAQyVaDAik51Lv7Zr9cbS",
  "key27": "4wqP4RNyexL7EEWKP1T1JKCRCCgbuqjTde74q9GeQwKJwhpf7bbWgdfXRjiRhcvxPEFmM12ByCmyVjwR7zWf1Uvd",
  "key28": "66jdAXETV4sebLoUk1rS7CScuYpPwVyf6hvdZRxNvtWT9vA35BM2UyC6tBBy8BGxyUdMkxTJNgPCzg46cUHKdp6R",
  "key29": "M7muxtywWCW8oWsBL1wJwxoE2eqndQSR6mLnnd4S21yAcEJoJznn45zFzU7EeJsFgyQ8B4DkCNbQHpeRr7B3VbZ",
  "key30": "35DU72im3FoZWDAY9Xr1R6GPkRemuAMEuKtGN1k7hNZGBDAD2E6tsGgo8kVSw1WCGyc5yYZY4e6uBZ8J6kskqoCE",
  "key31": "2kZ42yJKXsGukoJzaJKmX84UN9rHNwsvr2XQNq9qEVR3pd1ZBeXvwTdt9Pb4d7AtEgEy5Y18HxsR6DmfwxbEoxbg",
  "key32": "3xN9MDgaj15iXRuNEMBMSsTy43fAAk7jrrS3gvQ7cWJB5u6xucwaeBwRwshekYVAVB6xUMYMoaWnMroBv2GH9rvA",
  "key33": "5iw2UTtw8eY1jP5r36aPLwFXd9fSNavMxwKPbD7bf9M7tFiUsMzhxi4uC5CPtJyysPAEa66YuQ2Ney5uYEAdtd2s",
  "key34": "5JgKm32HFNLFcWcec2zhPTooWC9RdqyWJmk4LY3vhDpj6eseehJAZarh4XWufQtXaN7Dgdg5Eq3UPY223j7Ww1ek",
  "key35": "nP6nsYQ31TtLjLrbvLWtRCrNLBqW5hsegkFysjDrEr2rQvCVShUjZyPwYBfBQbSo3DLQ2z4unt9oAZ344CL9xdS",
  "key36": "28ZM55FfQLkV9K9mYhmNHHgHrpY9oDozhAbV1W13NtZKAATpvdvr8i3NuhvwQ9HkYW1C1oxwKTAKo14c8L55HB2Q",
  "key37": "4ohQy1pNioQtw5u6eUKcyqAYHDmUXSRy7nLdhE9ohDxSAHdFvPLcbsy1Kvb6AM8h4qDPgGh93aqDJwQ2cLNxjbyc",
  "key38": "PjxMUu2eRVwe5goAGDJMaZMZYWPD2oGWnjZCoopWbvRzrBRMy19tgbYoizgGeVYDymdLbvZyZ6YTt7MQf9W4Swu",
  "key39": "63KSswAn1RxP2diVtQtcyU18SM9yna7mDoCi1Giv51eBL6JAYo9wDbFVhUV87AoXg5tGQcFAu33DKKHZC8TRHc1b",
  "key40": "7gFvYs5ji55tstyY1kfGRKjvfbgZiAN6J4dNUPUVtDq5kEUGA7RvJnsh4QorKa6SemMBp6biDxt314n5hBQaR2a",
  "key41": "3UibQQ6gzLQvFjP7KJ2idFdgk5Ygc2TEkCUwwYiuA2zQqCkgFGv3GHrowMVEmBHgEc1Enni6JyCxJNkRDbySwUru",
  "key42": "4fGfyjRWAqP6vYVxScEGbm9Vu8ZSJqkc8B1i4odyybPEUMWkQH8vAV637zY8QkCL2fs5RCaiaX6YA43cH6Hmpy4U",
  "key43": "YF8D7atJ1mHv8ECuZXPHASW9KqofXGpfX2zu9EZW6nUQG1jiKVsU3b1iPDJwS9dXswdbS51K5YkHAkKVKNzxw2W",
  "key44": "ckPGSc5htQoYNit7yBnYZzesxHmBcnFTfWon2VTN9rfAaBFzCJTxTKiUnWMp7xkRYFbNQx4UbbSBn1Hw5gbkQ1q",
  "key45": "3fsCrpZJuxV1EDzfhVqvnYNp3JFQR5w8FBn96LmxY1bpVfnjuUJ9bxjs78nbD414JQYMRNQZQHgQexMyTmoQEYD",
  "key46": "Vukz2oM5G7JQMemuSoxNZneFXFYKuxuVYAVAdPbCRjkbH1UhbsPAnGt23x4NaKL2x34zDY62hSNJoNFGp6F8ZBC",
  "key47": "3PNkq72Mqcd1Ei1r1UvgjPYn9mSLWi6Ni7RXUwqaPH4zqgZqYWarBXbcBH1wSbpqSdrQE7mqe3xwnkMa1MyEp5Sg"
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
