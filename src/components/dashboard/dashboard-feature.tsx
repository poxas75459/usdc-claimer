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
    "4Z5EEZ6v1JoomY4QYmTFm5ABc5W4ScKsEPzeGR3F9tSp4KKvr6CnFScELLxqtBUrgxcL76xykCBpPNb6AaNjm4rr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qp6fRbuWpGkyAcTeMwYyESMg4GyRLrUJZJwwCid6R9N8tLUkJ6k2KuDfDu51QpLvR2ZWHUr3DrtGB1ky8hVKJ9d",
  "key1": "5LBiKPJiUyzPJGSoHAmqxtqfqS8R9kmu7uFRRLxmqaWRt5i5BABbxCcc1oStS3vjGCCbJ2tzY9cUgfdgjesEWTSx",
  "key2": "4h8kRyWbrLnjSnsyV5imSENso8kWoquBBEkcWuBnTRm3okDdNPu1tcohVyaQz1DZW1Zk1ZAHk8SvCeMZSGdCYJvw",
  "key3": "5r8Qw4nhAEAadVJ2gDpRUprcW1jUUkACBABs3QixpLDXWzX2xPe67B4Edkdgak3sAXaPAJxrXpw43hc6KgEGEiH6",
  "key4": "3wdFVBmCukJ2bUeWC6aKszCNkchGJ89CniLzrRe8FfrEttJTmRGeFf3ff9Xv452c6rRRkHwcrGsvuiC8MQNS3rZi",
  "key5": "V7Nd7zCpDwMzDbMuv3Vk6shyN7D7vdYt5c7JkEXtViLjXJXy12wcWjLRayWw9yEeGfw4WUDHgoAYSGDCkMiMdNb",
  "key6": "4GnbNRkcttq45gAtSMc6WvniHm5Lm4k8C7QiKL5tMoNAhhnKBgWrGTWQiti1AupCDSJow9AA6UoyGLr2UH9XJnPA",
  "key7": "5Q6Wc5sdqnYi4fhi4ssiTDJBFi7K3DKXFA5GEC4SYiwsk1C5mWMQjHb4t5Y8cJy8S5zQ8pERgbU95qJTVpTSmXU4",
  "key8": "rqqXH2XFBBs46ZeZvYCGHq44UgYskwMHgjAj1MkuNRb5b9yed8apR5UunoDzC6c94tPbqZA8b9YFbnZuyJmSK3d",
  "key9": "3KSbrDuGDQWNMq3DGz1bpabmL1mhJ12GaSUQRYPLRrYGF4HQHX6wnPG3dAqoQK1AJ85tVRddaCqw4gWVRrGCF9Yq",
  "key10": "3rVK1csLCk3vmfzzK9BF6rX6HVrfrk841uGmaXFoqEcMQyRoCAik53uiVFASgo3YGtQJW9PqAnQaEnTkxao2tjzh",
  "key11": "1RySisw1nSCFZruLhF5B5fnXPmNaLHijv7egXTcNrweLpFtAZn6j96R5hC7c44BvHp2FtFKYgaRhokGGW4ahrNq",
  "key12": "2MTwYMixKxt6pHPxopkgFW3gN18kbsZ6NWr7H24VuGPjXemZEq9VptWYaxu8U1teD7DkRPaCXMNfdnsvK4s5k4P4",
  "key13": "3j7iRXHLB1vd7bUT1pNZoEMqmfQbVhMvX4u4hArECakFUyfhfd9ZJ25xbUEEFFXEBDW3zdbt2msbspmF79P4eHFb",
  "key14": "5W7XocQqa2otfugVvU1s3SccC5kn2H3TZLzCd5zZ5kGfvJgpKcCxGCfBh6oMs8mds4dCVNvLiorUxGXsv1zmmk1G",
  "key15": "26XtYtUHsjGKBJp4Xa3FAyj85vf43DWN6X9nmJhdsurZ9GGmedgmSZhMaiBQQpBocj9twiCTA3oHadJ7K8m1VioW",
  "key16": "3LK24yNGy8UfYsNHxHaFqnzThTNxGemQFfeJYi4XHNN4ZEfPXZaeDuua1tHnQAogSDzV1LbHp5iGJdj3PZS1RtLQ",
  "key17": "4FXgSEmauEMqeMmko6GZSaHuRj3u8HA6Evw45pfhgZgVnB8iunLMPgaScJVdXGupBpPSi72XnCzxv1KjQVym7TMU",
  "key18": "5YjUN8ZcxrahgBrUru6W9vww1VD2SSacYLo9PzyXeQAHkgZDJfogQR5qaXPpGMm6zqxtixitDka5RRnmY4mSKEww",
  "key19": "2XePvpALif1AYmteeL6vdNBdxf8jBqt5Wk3uY4ESt9Qu8MeaB6Wjr2kUbGfLRjUGMrWmDgKfhsd8H7QuRKvYApFf",
  "key20": "ngGuWXwEw8obUL88Fw5UZk4d8FyCW4BUkDKn7BgWdx1yyxwSsT7WSkAwvR4PXY4zRbv7DpbgM9NBtg7HAaDXvV7",
  "key21": "5FnsQu6QpmVcnaAHwuW7k3xMsGjmFGfgUxZHVwFMyMT2f2B4R1o3BiKZZUBUn2DjwZn1RrYoHKzMyQKoak3vxXNQ",
  "key22": "4KW94TekLJsaLvs9ieXUEMYeBu3wAhbS9QPF6Wu7y8kFn6Ab1ZEzfvpect2ykxUJ4MbYk7mPPhmNFRwxHpg3Fw58",
  "key23": "3JYbFHe981Co6vKUGLY2YNUZFxU3Gd7HKJRmXSSUYxtnHKgbezvdc5pJCq5zYLT3G2F5HjUzEviisrxeshK7RAx",
  "key24": "mjvaM4APmWRwF9sQghEnWoL1kjZjV5Gmn1EVHN4bmKkxFCJQaf2wkhDPM1WMfNzfFcarCMytp44kz6amzcUrCKt",
  "key25": "3AShfcMEeo5VAk12114qTC7FqHsgE1qkLtod4zL1cBxZvceeta4F8Rtgy4sNCxBkUEjPQ51rxhheF2mbKFjQ3g8m",
  "key26": "5TBVuNXgEajoFHtPxkYvTHYCNRJmn56FDSAtPi727sqC89XQPwptUd3Mi4kbZpUY5K5qcZCySYVu7EkuDco5zzS9",
  "key27": "2m7t8Ewt1g5cQhyHwqBgu7fBLq624Aj6Su1qAGhimQBz1W8RR7uFxRWve6cmAvX5HxnSvf1DT2iJGh792MSXEXkW"
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
