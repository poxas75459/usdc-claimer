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
    "3Kb4hVkAK6m2tu7KF1YiJjy2CXmXpQksg6WqXcQ7NE7FhzpzHW12dWADXDCEKjjP5gUyyDCHshKCtZ14xx4YpFRu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3acUAwkZVxwwoA8Z8KGrmg45wyGyHQkFkKzEotEwHFVpUHVq68LYjBWfpiTwaXE83sb6DAkMAm6a7JmZF6gWTxW9",
  "key1": "2KNJ9SZ1h8ZGx1zB47q4C3tj5LcFh2VHZVosvp13jxCBENKPAZ7xiN6V8aa4EYxHM5rFdbdLq3rAsQjuUATqJFrn",
  "key2": "fjsnvopDaKKmsoKZU5i5xCaP2pRq8LgqVoWrTUbsu5K8oXXCQ8ZGgMSarMtbSa7SkN3Zro7hD71oBbyntZCtuP7",
  "key3": "2fkLV3kUvwabGZAdLszs72vBLPJ8eyjL73BZkDKDzXucR162VJs43jweo74yZPbvsjzq6UuvzXrthJob3nHyYRy9",
  "key4": "35Sod3ndURmnxu91Gcstt1s5TrvUoGxo7nHhJ4w9CpHVst8EcSAAqg9rMbL43eDZpJAZ5cncvYFsyFjkGhbbeo3q",
  "key5": "5Pf9TPmZapAWdeLeKvYKpNxeqQdWfdLqNkgofHsFtAydxANPb28pordbFFzDijpoiCxKHtYSTDWahmsdhGRAyAp3",
  "key6": "2hRuADTg2e99HTdNYLoepbxJrb6MEzi3VSFYBUNno6iBdjkUb4rAt3Fspm5jRHRzE7EwpUHidWiTmVRCrkw3Fimv",
  "key7": "4qNxDEmgWq3ezNitaBt3mXtRojUcFaeKfm7EHvEwdJUrFN69J43JMGFcWqFaupMy5NiUvzUB45aAdTBU8NrCCXNC",
  "key8": "62hCWKpLbn4cAkvY7UPLMzrpGy8PpEwLoKS4c2zd2HEihfaf81UH1pDrbrCLE9ZHEKYfjWmSynZpCzq3zjvUQrrU",
  "key9": "3i9ecdXNdWmWEDt3GU3wVLjZBvzU8kikxrjW8uECnRpY48zWCFGPg8YzP2h31Y79yCgLDf9wiX7quAa66KtFdnEy",
  "key10": "cJsq3yuxMvvWpeFa1CUth5r8G2HLy71BSjXmBaz1xgpKRp7JTtxF3tFhfBypV45BK3d5GhJzn4sVD9Mpv3gBb77",
  "key11": "2gRQU3PX4MKa72HHcqMPeFZT69tQwpP9SWe5UpqXTyzEAvLAHpTRu3tQz1am4gqYzTinBbbSjXeqYTYWPounZmtQ",
  "key12": "5K9TYH8Ncmq3UybRB3wn8DQkoWqdBwgCmZU1oSh5vfVKVK9BRUp6XPV13XGH5f26KGaHNBZMw8L1i4ibn1kvefqV",
  "key13": "2GKXkiKyL6TKRHX2BMaMthSHeErjdZoazjBsd37dXXd5kX8EuBQGc4reBDBmkzr6GAubqf4ViaborKQYTFV5C3VR",
  "key14": "28uRjmkjWufexHgmZqmphCiPvTadH5DfuCH9FHGbg69zsqyTj47nQ3AFSrJBAv24dhpFvv1ucL9DKz4oXWvGQsSt",
  "key15": "gnsxArXNUqMd8AEoawyqH34tnP5eb7roj86CnCZk2CD9AhmNJg675Uw242rQgVxRSygN6F1UEYjwTmg8FfnCxfM",
  "key16": "8QwFZfK8tMb6cRTRVuxbn476GLkC1DQpPEywiZVCoieCazQZaSs3sWX2VzR8kWNZJpMKfbucUYQP9hqHJZzCLqs",
  "key17": "PPCSvsqjcGZh3jZCWpfwmG61GYmnYTaCyuSk9NsXSwQzy546QuXbkyKTQamULQZmuk7pyhhSR2JyAso7HtQoAih",
  "key18": "5p6QR9kQyMQfUGufbHV9XEChBEmGS9BhN9cS5v4zcRFZ4knnLnziv3QyC5Xebwt7nHe1EMJbUFS3jerLj3kDZVZz",
  "key19": "3bT9oBwCGLVTGmNjwmMpJJJBD3Jcm2hPi2A3bHe3QFoFL8Nx5KaPwR5gdWdFpTXPLYhgdconweCDBgK7Ddva6CT3",
  "key20": "3bgC4p4i3jmFryCQd4438Fvw4B3e5zTuUg67DqJMYKYaxzAkSte5Hibn5TSXD1r3hdxn1wZg322W8SMT6ax6Z7TZ",
  "key21": "59CxcvoDc7ox8ZHRvtVY39eby4MtZgwSiSTdqQCPruK4N9LY9io8fjUed4LepTxL2TQ3RCzcMtHTV6NCDvmSq1fb",
  "key22": "3k1LhwBrNQnoA243K3JJ9faqCRBFTpQAeq7GKwfiQTsHC543h38Mdw2HGX7ty8cD9hwMBh4cJiAAtLs9qGDpdf6S",
  "key23": "2cy3P2JaWteaUtdnWewQSeJ5wzPYUDd1xDjiwmc47b3Z7VQ8tRFHyGMgi9PwEnVtcnZevf8GERtJGWrPopq5fs39",
  "key24": "5xc3N6B4sqwhZ5dDxogKrnEfjmFZnfFcZRVed3Jv1DLRGT3Unx3zorJCgDLTxNSRKGc8vv9HhuTpvj5GeT9CrHzA",
  "key25": "3u48jQ9USYh3hiAi6V3a2XF8tGAziqQfGhL4JK5ubnajzrvCYX8QggzrKQswiY7RRqo56VVG4dz1SdaFW7CL4YTZ",
  "key26": "4RamHisW67k5iY5cJmm3dckUfdTxjvQFk7jGPox8vUcDAeCDAjPkBcXVuqTgfT25bmDiiph18VW34eo9XpFSbSkP",
  "key27": "4TZ3GKNEcaYBkyLqewFXjJcwCwpwNxniizLwxHB5HAs4c1cTvyZopm31WKsTm4ghxwFhG7LCVgxnjAL9sVutN54r"
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
