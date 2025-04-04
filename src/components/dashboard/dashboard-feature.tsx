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
    "5Egr8VeHxjsH15gZ79xgV6128w9tFDBywGSpBMbF2oqB4bGZjQVCEghW4uejNvm3gVMgwqr9z5FCbhavgHgz15BT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49jNRRAkAc4YkUZWPGoJMaZKNo6fNuL7ynmUB78ppkXSceLzdbujWTvYnc91dVbchQqHFS7mCkgogAuzSFHivi6G",
  "key1": "5hugMRfcYzb9X9pnmjQhCMAbwdJadkvcxgW7DstSjRnvSgoYu4WBNwaAGVB9KYeJa152GLkGy1ehSSkGoEsHSTYT",
  "key2": "619NxgZZ4oa8GHrywJooiBuk7DhDyJEn4ybnLwREzY2ypnSrZ92YiNKjSm1YoanRDSUVoT2sJgx3Mhra2uxF2Y34",
  "key3": "yA2YpLckwTnbPi2AecXaJXD27P31fUbWFVe8mhEuhgCnrcmbeDhMBnPm2tiTCh2QJyjuU7dga1k2JssavfMbns7",
  "key4": "4FybxpP1iURHEPdBew1A4yU2iyrc4Yyqg1dJ6PhyLj3PoedbbMCqkjcJ8cXVHVqUKsgAMXgbtiQRxvDiBJJ1a5mR",
  "key5": "4EE5BivtNzEJVdSxva6PkSy6e8uu5nPxwL9prgAZrfcEYAx7qZCVxY7PYJMCNbry1KjgtB96jsUeExnsBCsH9zsY",
  "key6": "vqYBRP2B3ktzzdTVi5KLPtYJbrJwAGyNUJvAGZq4g5HjMtB6cjPEq3zwuAVhwgMesh6YNaYVE8g65LjqCMAGX9x",
  "key7": "2xbD8yBSY6cRsZtSPy48NPhW3w6qwJ89rMdEZBmPLGhFUtkLhrvPq5ZPKtdXFEp23emAMkJzGPyXAU5Y8FVYqaEB",
  "key8": "CXKcuWZpJF6HABhGG3xRCT1ruY31nRBhagrgtEBez8CJyKdRTRxvHKh7RSaEgCmnhWLRVEd73DnRLHAp3nRvVLX",
  "key9": "3KyzAMCjewuVVHhjp1DEoHZfuBmQ2GCNwx6YeJhpNskrgWfMdxFAmREvGU3iRqGYSDZpWeSQVwPUiP4fr3YBGNBv",
  "key10": "29PY43QAnFYyCRk5eMrSKV3T19UrMoiHiU1TbHpfeBinZhjMuGBCt1U2YxXV5BvJT2K83DNx4r1dm1z8gb1rqQDe",
  "key11": "3JuVPuXHXFF5P8jpuSLAcDeEkBXtqRZog78ZnfdeWjq1csvb1ct56oGjSdKrbV2x4izQwJmjnzjbgJoEWY61CT1Z",
  "key12": "L7EwJxjLUreKfu6qSAkKHdLGCtjzvstdATcxM9Zidr3MgqpSqPudJUnW4z6uvkuoYeas2Ep18tzkDNe7xKzisw4",
  "key13": "3BUF5asxmb4PonGB6FJ6RbR9VnYkHxbEntnKMPB1N3oRDMECjePPUpNLGXbYRxg9Z5J22eUMMQyWJG3nR6KY31SL",
  "key14": "RUCcsUkYjdV1qsy7b5iw7KcP2UBq98AAE66SJJJNTzKeuHD7sujNCezQhB362jectu1d39kndThXUgf1AJDmmYv",
  "key15": "4sv7zzcUBjdWF5hHnxK7Eqe78BKT5gXiLxm5Uff378QR5K2EArDPDvy37aLPh1gsFFcuXR1Fp5wezVXZyMtkHeXA",
  "key16": "3QwVSvP3cuvBRZ3mdM6meyHQNCgXRoDmgq8Ru51BcyTDx1XkWhjkjr2t3FcDUEujxqd3MvjD8Q2RWkLmRHnxZPNT",
  "key17": "65eM9TG1TBkLcj8SM9n6sgiYmyiPwbqTrspMfFdHf3fef88XwazEbNteL7WMPABMr7TBTjFvsE5G5M8ncwV8Tscg",
  "key18": "4yCNTHJMNLKM8ZdNB37NL8kiGWRRFcCcKD4FcMnDpbxU9eKvFqGqqTX48BGrXrqCF3xg1iEZoKmT1QemJbpbLfRe",
  "key19": "59wafoBjbJzag4Vx6MMN9KFvU5xbbosQQGwHbd1aaY8J2WUwy4f7qLf4vtUsvE9FZvSG2sGsvDZjCCj456zGQVTH",
  "key20": "4KBd9KputYtkSdDPyk2wb3pnD4bPLmYC4kkBf4yAHcQW5dei3pkAUGDnwfCF8W4buZDZfPAA63Env9pHG7HyYXkP",
  "key21": "2UsBpWKGRnrDyLWgpAAiUTQXQLGzXnDFqTYxBf6Fpi49BzHxgdhp8DNdBTRyB4W4s23AKFhaymHrVveLFyvg8k4a",
  "key22": "4av2KppcXUReEXNjSgWGsgKmT7gyLiQqcWqynbUcEGAk8xQ9ahgwckaKC6QMBT359KDBF5Koa1L9RQMwTsAaSJoL",
  "key23": "5YbrqzFndiy6sUoRyRjFrsUcL8RE251cAgTLUrsChoAkoJQDaNutPLU4C5YfNHez8ToduBn3BjyVNVPWxAMtEcQZ",
  "key24": "3GjjybesVovt1UsmRETzoD8rHNQra3wMdWViDRu2WFyaGETZaVkvqgkVr3rGPTyJeXmZJKPBHyBTN4rpuZFi2fTZ",
  "key25": "3bhLaYYWnjPLatt6txu8HgEFEWUQaSXcdBdm3X3SPPSgBEeCkA69J7TWZUYM6wwvGGXaWAMT2irvSefeqQGkXJDj",
  "key26": "4pp3ocXyg5EsSRWFFQpJVFnHvKBVGdFmWZpUymT3CiD3DARDfywhf9FrUXRkDHxzZPKEBLpqDWtGsrvrD7CTvjus",
  "key27": "5Ry2zecTnSmFKvzavQgwzBwhvnJYvod1RjAxT1wKFCeVcQigErjGpRcRBbvnf9MfwmvdQy9air781MYG1BhP3vM9",
  "key28": "4YtqisruHHCt9AQr4Ypf2RGssXQcBfVFCC7QBM8wFLhCkELTmi5K9F9Mw7LUYEfUK9zXPjcjrE559jBvgfvLh6VJ",
  "key29": "5gnCeTCBvZ7BDfntkQmuxYEhqCcTRjpEUQM38A9QcB6bcPeFFxMAhe26SWQ7wHsaGHAf59s7K6wXM9iTKQqbtJXD",
  "key30": "3Jghcimbku1VAhtD1Pbjd2NVdhe7gTFMsXczvKN5JDW1mBbEbpaxKkz1HRxBSsT6HJX7EiY5VZPBJXWwKccZ8FXb"
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
