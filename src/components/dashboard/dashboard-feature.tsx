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
    "5f4CiqVHpZM1pd7izqy6CRWHN9sNmNoRhK9sTuMVGGD6ZkEKrri2STNDGLRo2KYmNGcJdq12gKeapB7ABdfWuNUR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z3w22Cpb32z3JkJ46bx1nfCgVvKAtSaajYpn2vF5TcJhENKKVZNmF5CY1SvS87eadg5fbFJHRHY9yNo81YeN4g5",
  "key1": "5BZWsh9CdXQEoTRc9PYwRfLNc77e49hea7xEXf8eTVU1WBi6FPQ9Qz37m9QpdhYthnyXB6Fk8kMANe7TFV5H2h4K",
  "key2": "5k3wncA3f9AYMRJWFmSVCYYqrJuyPdH3zcT7Xe3E2RzjoE9foam4ggfNdXHAAjpFEnZzpKQyvvqpj8SkbZi25W2K",
  "key3": "3Siw8UQqfLfwdz9kyXZkQVLD6xSYw88b2yxJx8wiTApodSoaEaJVw8YfyjawSvtUaVyP9a6qKQcxRht8fXEFGzX4",
  "key4": "4ALst7xq5ASQ1z8AZovxAZL47intpfdm2GqeF2iQMr8TJeEK7SQrHLUD99wdafwmirwZ82zXnRRNbehuzr7NX3yr",
  "key5": "SvdAXumua7FBNbtwhxQRcUnEB59D746G7inTuVMzDxYJLJJcBNfXqKTNeTVhnukq66PbYevDLXGozbZUnsMcp71",
  "key6": "fMFWuw8m2hF7rA5NQGYXkQBRxqyYwBs7qRhVhT6p5uzLiLHTDbx7zScENTCxuZKhK1CeNBakT5eCQ44eAbA7d7a",
  "key7": "jyLHYqAADsDD3qfPkGMCBNkkX5Fmdoki1zDn9QRuSCkhErvkCkbBXz9TEzKXMtgjfpDEeHXbBXBtv2MQ8fzJCPf",
  "key8": "5BrwjYs8ixHPNP2NP5qRCCjW1sFyW2DJyVqtHVMysSiUzFPVHLta6Ayv34rCmviLUHoyC6uf5JceKTQPjKkAQkGr",
  "key9": "3tR8DjQCeCxdFzrdZz12gPyRYSF8Yx258267D2SwwgFRbX6JwSitHFzruBmSkyST4u3m1n5SN2zwdWSifDoRtXXx",
  "key10": "3wAVmNCRc7WqEdkeB5x35GsGe2kjUntWDZbfgzrKiLaCmTunpVYPPoLQz9Bb4bBaosB6sjzmSWNdWSM3xREFcY2x",
  "key11": "xu1jaF1ouhLVRMVF5MQXQnvVfV9yR435mXp9p8A5N6MdUhWrnPkn63W8E8kMsYvfRzCUfxkeu9sp2KFJSNN66yx",
  "key12": "2Vuoc6MnC31p8hwThoz7EkV32Xb2tfvGNDbCg4WimqeujugcFu7rZfM26qR2yW6rjR7EUBDzEa9nGVrBTMMV8nB",
  "key13": "3tW7D2RF5Ut4zZ3PcgKi1cYdAB2vij5LwMsvPZHSQE3cBA6jBBvBTqJfzvSiVgAe2jKvkr6d2GfCgZAhn97ij8cG",
  "key14": "3aJ8mKKj5CxdTRD5JrpE7SuvVmBKTWRpkw5Bjpbsvzs4UjpVsrwK7X4nG8nr68a6hX8YykiZ6rn4BMjdwZRzLSNX",
  "key15": "xtv7Bd74VkE2my3LrfGtrNMPcRS5u8eVge35qhaqbC8cH9HmnprL9sFSWjab7dVpUQAaCVFXwGJWQx2r6nC77xd",
  "key16": "2B3vPqYZ6LFkHPYBSHqePoLWbTQEXttp52bvUdhoQVD1bCDN8FFDUhGEELr9FJGDLsxJeR6Ygr39QV2wdvJ8YNVE",
  "key17": "3BBwrxcHrzz6B17NynzrNDsTeLyF4ZayMvXYAvCrUfKwzKH32zHDm6AcF7J4qUbSmWRUmh6SYXX5M17hiw7bVhUV",
  "key18": "2vDYXW2k5TPpjdVZavBZ8YVq86svuZFPHKuFzMwNv87PKzT6k5TSgKxUw66nKLfui2RSxC6E2H6qJ9GtiDFcP4ex",
  "key19": "4VF86cgEN8ECyKS6r3qXgf4pHWRwiYgw9zZxRzWscqxJqnZotAFmRHJKSBouWPwJfmQvedgWvGcv5iSZvJWSHcA8",
  "key20": "473uppKj8vsh6hdcqBMBf7Rckh66pUVyuuybcWdnDJFPCexTbGgXd4aGuLkFuzRuermdg5vsxycLV4GmpLVsUVRh",
  "key21": "35z4rA9aUX3QWrsRtNF9zWbDTL2axH28mv9doKCtK1waXPnGcC4CbjhDRPQjDawcSryt5qJPGtXspfPce3PkYNeV",
  "key22": "i3NgGmFhnXEwFhTxwKhD3ERSsV95gmb4QojZRsj9U9wLi5zgfFijr7kwoBn2sTEMzBGFm8P8qN6b2hrZLDFczZe",
  "key23": "5xKQ5LwV2CTcffjAHXDCF576xiVVGkmJ45phjpc3xcsGa3KU5FWzB78AwRufuR6PVhLgfNSNz653n9DgCPqXHXTC",
  "key24": "2zZaHehPV3tyVadFjeomHpARk8SCcTbAuppK3o1u5FPXbp6zHE8twpYxUauP5wVRH3WfNCdj1LaE2QGuAXm1zko9",
  "key25": "2mbbuiNipu21xbDbCBZrmjHQZ4et45FDNcvpRQVtN9EdTYKPp5DDWVh47uRYdMLf5bm1MLzhpY22TkgcGArJwKKZ",
  "key26": "6RZyGA5vSjEQs2pwAviijQA27Qp9EScuSd5nkh2DoToMKUGLekLqrTMYAEpdkmrrKnmzcEtRassPEvWZMLojZuM",
  "key27": "uJRcELyxxLFouhii311LN8tkfXwcdT7Sok2ChEUqRJ1BxquJ6fFJk8E9HmaWHJUSCEX7jFePTjud1tmuUj9daHr",
  "key28": "pZXAPCUc2mqYtEowRjqxNqBmhNxstco7wzFK3GaeZ8ByfhtmyZ7WwXc6GMZYHHbVfDJ3CKBZTiYeuZAnFZqVMtQ",
  "key29": "25BJ4KvCKSfeKs7H3cVijBu5SX3fovNLVVCtbx895ygJb6km7iA9WmUA3WhVDNGmycBJDatV1VJke9GvFewzKNsq",
  "key30": "3fs6CFDgZfC61VJzFAkYGnyswV6iYbSTRMtrS5MyYzvsEtR9VEKa7BYo2x7eZZeufrzDJ5rw8eGun1txBjozqP2c",
  "key31": "32ZU1e4dnD7TudjS3iLpSMo57k94kegjZywaZiTqoT64puwrgdEAsPfLHSjBtG9fdTLdE9jswfvtC2s9PuA5aCAc",
  "key32": "4tfrvY1G1XLGUSNwVbcifLXrLoenax47ToipxMVjgkC7YccxjoGB1ux1iDmjXY2CacDMbvuwHDJaiCziNS9RHHqu",
  "key33": "5ZfYBEjvZXcVNjhR6dqZ8mVMdtYXnKymmtfQwkhvEFKz4wrk2UJiVBhsy3Y21Uw41gwRGRBqGH2yRiEzx5b74s3L",
  "key34": "5RRXQh1WEBNQX3a2vJEQvi59BriHbzpfCQhJLzQkTFCz3YYKa2qFUX3jKFEHu9FzbEo75ebDqtiqFhxjSH8yXRNe",
  "key35": "4i7sBMrYvjhqU1mTNSLxw2zxqZwEXG6V7mSDu8B7AHkhKVVGvH4tAiPGATKFjw5gTFzo5P5MMndBD8aj5gbyyhpM",
  "key36": "2EFgDg4YrXXFVoAMaYNxMddznkSQz6JDC9UeVVpWAmvd2oEwxVw42NSH2snsMQtSMfgo2DUVZrjKuqJa1cAfUvTt"
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
