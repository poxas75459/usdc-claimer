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
    "4uS8X8JHqoDh2y5UnvFLimRWq3ccNBb1YFj1E77VCacfrRAcH8cBA62oZiiBSiXvWeSirxqC5FVjWS6HVuxLDDGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kTdiimuoBudqMpPNgifDkKV14635b9GZfqBdJ6Jw2ExoYZ2BhuW1U5umDhsGXFZFFp2diKiRer4kTrpZyc1WdZK",
  "key1": "ww85rHL6m7RjwURDwTdGTAVFNgfe8NT213a1KdJijTHrqMbdEiFtK4FYwtNgzLMAnfQAHzZEmpm5FYhkCLfceDk",
  "key2": "3FVR4CrZR3RvjGzeXQ5HYkcXSPLaWs5Mna24tWTwEP9MUibzK18sCLfH3MBvD4NqhutDQaqB5j5PVW5yXT7iFHFD",
  "key3": "5UXtRsnsHW1Z4fnUz4hfBnydxDPgS1hgT2BiG7h4VKw8SJxN3jh3GfBx3nr7RRBV7stS4XJMW4GpsRu1pi7GRXtF",
  "key4": "5XF5Bv74T7KN6p47gtaaEDaoUU66MRiY1m5WNkviemQDya4MCiR28aGQRaC9fkS9Fd2Lr83gZX2yAkWN8F23UAEb",
  "key5": "huxRQg3QMNVztcC3ksfGjh9w3iUrAv19Z8zbvkJokKzRAiwBxm3zAHtJpe5wPxmAVx9nwn8Cu1ZLoUfrvLos1yb",
  "key6": "61ZdNfg8rmhU689cnhhRP1bM93z16kCcDbKQ9E7p8shQmg6eN5cX14FoPW5ytuTZiygkxYrCCEsayfL6DSpvRGwj",
  "key7": "3W2rQkYfRmNufAgSKEj6hfZvMTcTd7bknjeDn6ZfSZV8Qhna8SXdCbvsCeieAKqXem8EcgjXP6Nui1iUHVqUKpen",
  "key8": "344vGbs9Z98he43NorzcVaZePQ7ENnMTvRVbUsZLw3HkUxqJYnyk2xFNMuQNMkayGyfDXZBmPHfcnRTqyhy3VLXc",
  "key9": "2SW3GBid8jNayWJkiE9sAH1Pr8NW1YU9V9kjoCu39PB1isX98jRLeK5tz6KaYPHec3Axn955fGnUrciY45yYgrNG",
  "key10": "CeyFFrF3z1YxfPjJJeQQhPEYz4cWfU2pB1KxKhmxgAffg6MydyGHbEWPvZjKbRPkRSxgPyKs4Z9ZahwETBvK8to",
  "key11": "ysBGV16TcoihwSLyBeVVnYVfieLxtcnaLh2RjonRgaSyvzHpCyA4ppxz11YxzzAobJBk7KJ2H16E5boecYwR5dg",
  "key12": "5oyqN6KCMGUQmZqg1RMKdgqD1R2yhPUjy6y9Yvj4te9yMoj8FbCybECY1dq5oBMZPnoQFhkmgtiYdq8YgsQAwekZ",
  "key13": "4Ar4U11ZpjcWh7a1UQysJiS2UWAgL2zzmEnwXDzT9vtwBk6L1WkMYFqiuQBTra73gYab49cdMEJgTikvUZbyYzDJ",
  "key14": "ZNeji1QVnfG9qx77zvoXU2Mr7LaYK6iKA3vDsDaSbPUKf5ZUKABPfyZ1uP1hK8bJQuRS6dLeuZ4SGRNLdkKS74h",
  "key15": "5JbFJKvTgMEvk12azvKdU6BTj1Np4ooSBzwTB1PRgXsdBtyFLcJa9hv1fRfq4CiZDTgD4oNMX4Qh65xjMXAbKX5n",
  "key16": "eA1x7GE5LxD4tzDKFoKtQUZ48CFFQ5KadfUjykAj7baXEQivnDWnz1bVKiRCgEZgp31UE5TBkQKLc55WkjrdHyN",
  "key17": "4sPo9QEBRnnWyBgFUaaooKyPpPiFJu58n3E9wfegNdZ12s4h2EY2KzY6HnegY43kcKStJy7xdwcX1p1n6uioFjrE",
  "key18": "5A9S4hfqsDVPNAACLvpnHPvJc4FMP7qL9QE7NvB44bcZPdtdu3xmf93sH4iJBeruovMc7CpydGVG1vkVxfnd4s3J",
  "key19": "2ytKVJLtBQwhbWMtyDGd8JVkkQBmFkWFdrjfaEpgX4sWtTkN36sqCGoQWT6gaXq6SXFFJSZvaaB5jeYBgLLwQS8V",
  "key20": "4zq6Q8sx5iKCiz2YQF9TshRoPESDfEHbY66cFprPJLuuKyKigYtMiysMyz1psJeRpgKqN8Qth2djiScy2EWgeFit",
  "key21": "4sS3KSqUtjbVnniXHLJsAR626BZ6WqvW1bF1RkWXYiA7KoHPFSE7d8vr5tnF6dXMpPHcnAKRt6y8Hnk4p2pSws74",
  "key22": "4HANs1u4Ps39ZJ4UwpmTRXisSPdehsYn1HBqAUHPEaDHkg2EhLFLYf7GtS9QT9oYtxvPTGoDp1GwSpwB7XnxuiDn",
  "key23": "4SiW8yeczNrvpkhzRWEkQCXBTmQiUFuVsv6z3D9Pg7LLhEJiL5DYbHjfxkhiB8oeTDSneoiWEkuq88PvgKgUXDgY",
  "key24": "2bfnSr6i7sut1KFYLHoffgUXxpA9K93rZNztb8aU5uLCPjc4xjCoQiT5vKsJQNqXMGiRbFYMxuF5n44kDqPSFnWG",
  "key25": "5L3TuspVzj5QZFq4y2Bzf24BmZYP5d4tp1utCfLmEeGAEpAxgbvwWUU2vCW1mWAZ5Z4RfWY7Ky6tvWvNBHRciwg5",
  "key26": "2LyNQ3pg56E92UmVhXc1iNa4cichygYVz3twELZSbLKEc6XhhCuN4gcaYJbJeQHv4R4huWC88qUesxRPsz3RBfAC",
  "key27": "3eRFyykcX94LPn4xT4jMFrZyFBShYkBAwkM7Z48KaP52rkqVjYXhR3QDQxvoqyHR3jRFgaoYCV3jK9P7sAgdzMNm",
  "key28": "3iRa2pqo9dkR62hYAznTmveycc2XhpFQMUPUNXAd3c1xXBKSLf41mxjMcQ7t7xV3ZnCxW4MRv1DjRLbYLqMTros8",
  "key29": "3pZdqidhs2DZX5ssHB5xctRMQKxL46oBvryFCmcU3anUxnWMkUSaYm7z78wGvVyg38teaHZUZupvz1wmeWsVNWeY",
  "key30": "22TA3rXp4KXZjNGf9MAHY6k96xdVRUpdpGcQDhZKJ2bQYqAsEDiSsAWRG2YN21uEzAhx3VcrzWzPtppfmMnEGPeu",
  "key31": "3FkvqwAkTL8StKDZvUceXbyukyUmHZq4Pgw6pmUBNbrxWr4Npk89bxapx58t245L1DL4M3sAvPBobYq4YfSJX8ke",
  "key32": "2b2zBWSWihZn2i9xeVbb1h8SYPLxF91ze8ku6DRLmJc4zH67Y1Ap6FzRBgvFo8ytqdrLZo8qkukTYq7Chn6Rkevv",
  "key33": "3MW5QEe5dfozLBX3Rwko1H9e2xjbcQgFY6vkrB5SwD1gSyDBgapX7U8Jhw1rARTWqidkTnyt4yksPKr9ojxfGyP7",
  "key34": "2zJUNLYrgEVNND8u71VpQkpx2FwNV6FVNuh25nkoNr2TxTKx1T1yQN1AonqzaBybCb26XYJQLMe37hjZwckxcZRC",
  "key35": "4kpEwSVZ6sGuPPRfJQBiC9YBEtZwFUrJ2jgtQNcRxFzSAETA2qtAoaaVueGUK2n7zs9sgbw1ig76x7TDbXsLVy7m",
  "key36": "5pT9shtME9oxErGRxjk222iwuiFxWFYuywigvZTGBeSVBhiz6ZQCVhix6ACJKQhhY95QZkr3Gp1jP3vYp4AREnfh",
  "key37": "b41NKN4vkhuCCo4qvgcUxR8y7m24bXD9AiPr93RQAVp4auBG6CFGxsX12JzqWtZnqD3mTKbq9oVnq5FVQLPh3c4"
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
