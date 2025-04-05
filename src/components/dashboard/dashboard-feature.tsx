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
    "4kfUNsi3jMPDb44T8LrGy2ZRy7iy26hdsSHypJHNrB4MhNXW8d749zWY4PzwUcLL5KFCoH3Gi4izHukF3JTBPL1A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gS2DqCFuZKbtfY6YkWmFPVDRE78ztCjRTNvQyCESAa6MLpFFrCiM8QzN1KDkLdrmmxTfba9f5UC3vtEGf5c5ZRU",
  "key1": "2ySwqyeBoQHJM43MquwcCCgZKT1v4R1KdHt236mTypMmzbVPSsmzf7GCps5mrbtHVPvHjSPoPiuuLweXZFxwSGcV",
  "key2": "5eLpiM5pzdFdpbrf79uYoUSU2yjDqKQq4yLDXqiSWFwRKHbnKP6WxpHyB4QKPwUsCaLBm5timRYc2tqsYHp2WjbR",
  "key3": "BKFhPsdPhCqaCrj14m8EKVuwFhcG1833jHXjenUWjiT8aKiHpyif9aytQ6MFMsDEZGrcbo7hQoj5vLVK3REt92Z",
  "key4": "4aDG4eU6KrjFfTbsjBHfboxi7gyCW3N2Z5sLyfVkWWg9mb25oesr9W6EkX8beTpRLJB8L9YVJHU4Ta3UmVV5wUnh",
  "key5": "2tD1dx6zv2Ez8R9dkSGesDKPMuM18Gb7Yv6yeJf8c4EPCTmKgfF6fuiHhdH4Vto9YyuwPtMXTWn1vFXzPd7coFxK",
  "key6": "5VixFGNcXqTEN5tjVtqAwKF8sTSyTAgC2mr1bSG7mdtmkRQSzXnFisAbSrNykZfhcY1eZz7TFwDnZJgsFUexHgQA",
  "key7": "4aM7zNpiY6qWua8PDuhJVZch8uehDL1arryrya8oNHeehQCEiTCLVXzShrXxkQZUNResxR2nv1E9rAnLMmt6iykF",
  "key8": "5cdMJGd7M9oaddVGMRTWpbkwp4Y8BvnBuFLKAvd3yKRomdK7vG4omyhLF3ydxKAo9r8kDM1hS55i4W348xTQvjpS",
  "key9": "24WpskSx8rk2vQAMFSFjJrE2WUKqJARrjHKcJLaizQuB46XwE8M2XGd2XLZTv761rnqEYSLvgMLoBoM4c7EkpAGc",
  "key10": "39iMmzR4ayRoJGFsNSTHgY5jJHyxdAPgGuNnxUWtHCHJe6dttRinF1WxjDUpz66GFY4nWBSS4Vt1z5iwYozDXTAC",
  "key11": "41CHKrAXFWD4jMkxQLbDsy1KB13iwc4YoHS9em66KU8Y7Kkh3LXcjeLkv9htsYPMYzGcxd5UDsWbrqBrgbYAWYdB",
  "key12": "TPvKD39G8NcwX47BDLmkMCKUxk1nivqDGGAzmY9nsSP59vRjgmVuBuWcvJUPsvNt2AUj5gNcSTjBdAikbi9traU",
  "key13": "2m4QpDLWyUY9QS61J3kdpGyvhHRhPtx74w1aM5hjLKFk2SDNZxY5EWvfaKhmXzN6UykFLCuUQd2VqDGYUJt3abom",
  "key14": "WndUfT2sXfm6rJPMHdFBciTCQHoLuEbepizE5Sc9kTs225R1o6BbudZp8Tvip8dz8WyvUSaAGx9jHHKdJxDMivx",
  "key15": "2kw1bRecQFNTBbf8Qwndbs3rA5idrgStv4GJForuQ8kyt3oLwxF2wrPZgucjEHFqP44HxiuVAq2o7sRJ2Q7tfR9j",
  "key16": "5rwjwei3ZE8Y7CaCN87N4n6tJs4KuCVUDUPwVQ68HgssM6mqUUdMEA6YkJbUnadr89HNa6ZyTtbmC1h3PMFedNaU",
  "key17": "3N2q1jiN9oP6nZ3SnERY6vNVes8kAKHMv6gbEpkPsEpZH4F4L3Hr5FJscjyunngS4t1pi9tEyTz6j3zrXXfWoCTg",
  "key18": "4TPJomun5x3dK2B5sza1UamJo8x33kamJ7G9pbZ869g7fwmzTpuiS4KP21YY2h3EEptQRDMViCjoRJeQ1ArLDvyi",
  "key19": "2XMgDfcjrz5wK1xGxdZUGwbW2M3ihXC5hTVVnj4nNABXfRYhTeySvk1iPGxHzoCgjJd9GZWzLAZADkdm2Wrpei9K",
  "key20": "5ysKfKXpjjCs6mGenR5YXXA3EVEzGW6Gy1BxRzZFqVkMr8ixYo2xYe1otttojLT8S7v245GLSKTpcRJtAfefUg4b",
  "key21": "3AFpXhsJNjabdUG1Y2PEg3mujbPPq4NjWUBW5jfXWiSg1uPTPQihCTAmscZRNj2WroN9ig6QmU1XWghVW9qEMBz6",
  "key22": "4xnf7iJm24zFmdRr3aEC1Mt1V5PKNLdDTeS1c3PqSr6DgsMhB4HpqRKnAXMkZnpkESSrg1MP4rfy4jj2ctJeLjnC",
  "key23": "5fg2Y3PFb6kLGuaM9VuFWozmFyAeJseLVvZvDiCLENZvFCqZsRgHnPVdNAWQ2yGB199vrU5ATwMxehViPRWk7oeS",
  "key24": "2myVWetJRDTX9XfPgijaVGGx1Zsqy36dW7FZVisRipiT4fw8vWEWXSkXuBKbdPMG9fJ15scJ5bPXb2oXqxXBj1bC",
  "key25": "4ngVRssZsfJ3E2kJzhcwxW1K4fP5nh7c5wZtqQ1NMS7uLMcrtW1H6HLsVuJTwogj7FHoN1iaQUWD6V73n7JhzuRN",
  "key26": "64mU2JWYVLfvKSfRSy9aTCa1TM2k6W5LxV2sb26R2yq3yujWaz8E7dYiDZ1rCHVwvP7sdn8pSRQG4se8R57JKyQX"
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
