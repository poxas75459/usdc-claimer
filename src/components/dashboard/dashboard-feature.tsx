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
    "5HmhYRHf5Dud5iK1AjEXGJh2bccwKo6H4EKrMkt141rWXLL5nKwxBx2SK2xPKA7TFktaF1dHswwP5YR3SUyYxL1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48C2foGe6z3KY7t6DsnWSqkchzMmsYs24pmjtWLYUjKBRt6gznJifotp2j1CJWhCPWdcWWYMRw2xfZNK1P2QruP9",
  "key1": "276PN75WxHB4JwFBWztXE2PN4SNnf3U5jKBarcScAiaMwdNaKCxD6UaaRDbXXMqS5uVSsxh4tP6WbZYJKUNktyEv",
  "key2": "2ffgv2jhExj4S4pQw6ABkwtmqoWRRGEEmnq6TzNXAPBhXug5FrHHWyx3LhK7sKpyosG1qjqgGqebocwjBL927Lbb",
  "key3": "2qMYsx4ikHLwSYjhAxT6xUiqztZ7o12Pi7ePGZEJ8tUSDrNCMno3zeB2bfTA9z5rPUne1tBM43THddisB9U6DSqJ",
  "key4": "3rwPmatvih1x7LN6GWhSCQEjdZinHgnQFre6uf6monQ1XoMk889tstDg9LNfNsD7tV94c4mRtRtKmiupPfFCLdNH",
  "key5": "3U35Yejgdd6E33Yo55Lghc9DweMyzgCLY1V9dNpvAAwU9NATNPRQCbXsNLV44HhJxGMKMPbidy2Jq8Nk8Dscv5VT",
  "key6": "3QjES9jVkVQRRRCea7JaXYqbwtXfNzh6rfsxkC7PtdgZDzaWoYbaoXNjCZHU4MEYKiioLcHHrGyJThm792Lxb1T7",
  "key7": "3q1umZk6G1cFpDHGUstBhia3jQWDrsHamXXH1s8fY95cBQJZzzXYn929tfkDN7ruQLpqfP7n8EbxNhDeHepd5KPS",
  "key8": "2bKxnfeEWjffMPZRGvtYV5Nkr3d7uuMquoGJTfNUK7rYtQ2NGzyWDsrd5mZ2mndeVS4r7RFMWfJ93uHqKA3KAoeo",
  "key9": "4WWcv6P8h5TKVgvc2dtw77tZL4h4aiVkyCC4NWWfDu1obtn4BXuMTuZiRH3ZXG1qEqYzCAAYGFgmoawDVysTWNPN",
  "key10": "W6uuRrkU4JnMbBvH7Bugh98E6NYdyxdJo7HmLrNnokFszDM4qJcko4R1bnD93hP6Zs2zUdVt9surokZs1FmaYGj",
  "key11": "5N7JNAEhL3gqRcqZXQAiGfnYQPn9P5obb5Sbt2VCTKX7fS1TmDcf2QcdyubWkMriAmSMV2GeG35DGNKiCsJEypBz",
  "key12": "ZLsQHP4MUdZsPtccueBoAmNTn6T6P2p2RCzRFxLgyi1nFkdYGMdE4FZEQPjv5DZ2oncEMm4VW6Zba4gxNcTKxtw",
  "key13": "xeNPn7ztutcUXiRaCPCNLRz8oCEoKJ2ffBQKyoHSHdpz31kbPERr1GhBYcfo1wwoRZsRGt74zw9UposqUUkyUkh",
  "key14": "3F5pSceMfoXVhg1bhLWBTjAp3fLnoyNb3s2h82ay3rqkCDYJu6YRS2XUkcKD5B8B2pqJVDRLqAte5Mcq1dww3MGh",
  "key15": "4Ti7AJe4LHXYiTvGB44Tj3pwTxge4qqwxmGTPiWgGDGFLD4rnS5sQEtowE2QGrtijjauozTCvsX3zeDaA1cuVQdR",
  "key16": "y5im2xQPYdpmHu6rtF57x9oi25sNj9UWqSi3D6pZ3FaKmMM7akdj66TLjYUEpAY3XVi783qJFntNMtseTz7oLoc",
  "key17": "637EGAxyri5D82kQLo9bu865yN8yHe4FLN5XZBr7KL1KKo7dFciL1puq7kRBoJUsXo45BCuZPvhDBNCqk8sjRKBp",
  "key18": "5B5VgG18i6tHWXh9iGiy6TxrFLGmdb1DwGsexA6tyic8V5ZJ3yCoLLKAKz6u3YpghPwYnyphXWxm53ERB8fGSkvp",
  "key19": "2qY1WwGacPe3aShpnA23xuDrHFDWCDC2tca39LTPc9fiLE9VLY7fQoNtKzNK9RGjqWkhVAYGQTExjsxNKi8LncPn",
  "key20": "57DyJicRoUU5KWyM5KrdfLNcr9bN3Zv6cG3jWNTdYtqvfMdchtfJALGMzN85fk948XZdktoTuUtomCYwJUEgxjoF",
  "key21": "51sKRLKyqmv9tXgwTmkq8wijFYJQc1xBXjKAYP6yKRpwgDE2t4QRULBpfM1Ei3okPJh3QK3KTSJ5D3fe4T2YVWu3",
  "key22": "3iK1ZyTNAhYCiHWZL28iR3aPLrqS5Dkun2svQKSk2i3TxZjc9e2dL1wDCCNbshaApJb4zh51n7w4BDFENCLqoFJj",
  "key23": "4sNVAaJpp8gV3ZXaEUkkxMgEZkbowmdr8AwQHPaHViHdvHNGAbr7iLTyPcKEqMhC8fv41MGrrpppr7NUjpetF2q7",
  "key24": "3jo3tM2piwQQ9pxYPwcPWe21qh5ZFzQm5NL1RuDzkowaTDrBNsmmdgWV3BsJxLeUUM84Eucz6nQBJzxpxXm5YqhP",
  "key25": "jhwaQThmQ8p6F6qEjQZk3XCD8dLK9jEhMHLxUQtK2wyTZXubm1BiFPMUxKDQhqHgBwwPzFnGe2v8Bnkdt5QJShn",
  "key26": "2FbLXVE6foXZgNxjC9E7ZNtqzL2QBwEEGk5QjtQJBSQT862kCvbKk72j4Nvy7ZyFEiq6HL288GtYT2FXmgRx96xD",
  "key27": "4qoVomPMYMmjVShU9DVHWNTYoL8256X5pEbBz8QKzxvdioyz8NLTQMaGjsGQGaDa3nh6PVBbYfDq8iFPh9fswJk1",
  "key28": "4HQjD3T4yR3rzxJuhHDeZuuYqCCvfCuAR4xq3FCLWb7txEEJYx16sCYhE51zD9mDNiyFDuJVbLbLWexJHVkio1Gt",
  "key29": "4GfJuyskSWv7K22PULcbLQLyYjBAp6sctC4wsJECAT3HTtSEm5CBXzWeKeCwHAfhN926hMZXUBD25RFhSH7jQwLg",
  "key30": "4HWhu1aEvAUKpraTY5uaw2FaYUrqGvTgAvQn4CRhdFVQpVbz8aLX47pt98zgEmj8LsMYqYZQRT1hMqVKZhHrozV1",
  "key31": "3mNugDq8CqseG75dHM6TpvomE4c2qC3EZjpZ7xSiQeCyNHEbA62dWjGysJ15gNGxLVQKQRf7MBfZEsRENYHRfcwW",
  "key32": "4PY8TjrCKQ11Pb2ika3w6uqYUnLggSkST79e9n7p4Mk5tssfspsiaR32RPt5TE5WimHHJzMDccQjEYfF1DkQQYwL",
  "key33": "Jc1yb2quY773FNwbfQquNpqqqJYY6moXHQyVPSEe5itLxGbYEH9ymqD6VhadpATcK8zT4CT94hr5nx4gyCyz164",
  "key34": "4sJtrnXKoD99VtaRtpRejNVQx4EznZXjnygQ45tcbB6KsP2dq7ndYjiX3Zuogoao7K9AtAZJsDeAFG9JqyZZg3NG"
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
