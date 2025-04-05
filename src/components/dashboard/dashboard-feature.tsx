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
    "48uqC578DLTsQ6bTVsfJTTfiVXznGmZ7eLkZyGNUnysuUVUDXGUbxdnL4AZW9XJkXnfk5UFkDKP4RAy4cF4YSZ2h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZiwqyDEnCDkTReTgeGjXgFtkKKxgcnBSUJjCNgjS7XGbrQGVBcoumtZtUmcDNvZuP77tY7PLpRhhFbHQqPMMp6E",
  "key1": "bQzk1hsSH3Z3WQR8Q9ubLBcN4K5u1rnGfnqFAGwb5DRemvpk53VjMcinp29eP6aeb6V8eDDjafegvivJo45LUch",
  "key2": "3dvGy5uppd1D3JEJf3DJzgz75X93VsxwVpxPRwLFhi1TJVsThiuhfotVrVDaC58VVs6pos9iWoSWmBrexM8f8hmq",
  "key3": "AAEoDfvjVKVy2KKzrfadKGZLrySXSK7ybo1wBeBpUbDwsFWY8LcmT36AopTNVUBiSL7XpRESZAEi2KmjKFJCCX1",
  "key4": "GRpXnBpKNVa8MtXRJ5mk3oK8zZ5dUpSBQ8VpMRRKA7uPpV9c7Xg3RhZvDMoQwyb4fQ3r1C3s1Eqju3PFcZCvZhf",
  "key5": "2A9K8BC7cJDZPxjLFkFqD6ip44mE7HeRkBM2DZug9s7f3FPuMZcqiTnQxTcJnoYkpKbDbL3y6t9d8L6XwsLR5mEP",
  "key6": "4AdUv13EVS7jJvXHeYR1pUGY5nTYkjkABUbL6gUfQAa3ViFhXaoxacfAa1hN4w6gGwTHJZ9hGouizEXZFgeon42w",
  "key7": "2HiZ6fS63H3JUpcQgCfNGzT86jboWjHBDHSTLAreSWH8kk95nMeh9SFFniGToBtoD6W2UufkFgLUsj4GAhJCbVYg",
  "key8": "sQ5oCPcoF6zjyQurixK9XZRVN9pXaTYpSauH5h3nH5yX2yks1Ygg2zuPLZ1VSCAhK7hCfRG9dow993fSaPuQ2UX",
  "key9": "4UshbomoaUZa7CZG7owycC5AkXfFwzemtRypW3cJjirxEKA5EpBGuWx1WW45nixsbEshbteaZDBbEn4FJakAgMkA",
  "key10": "47t96xaFaZE9JLxK4L8dyyTRuQSWqSsixUTULU6aPqKwhBPyi4sthCsX4WPfuLVEM93NUqtbjifddSVwM7AeGcE6",
  "key11": "5oxnwUgYfVeqq4WHR4ZMVCnEEvL9QMDQGajimtEv2ES9Gcy9UhyP3hgnUrwKaeEQ1dgVQmqc4h2Ny1kCDyzJDzDr",
  "key12": "NEW7RPyv4LVJzitCNrAnMvHQMZrk5umgh4KZgT5H4aD2EPh7pn3NwSk6FuVRb2h5NgBLXLez4fEjsAwuG51YeVT",
  "key13": "2gfrZXpdwQD1jvdnaayJ86MrQUwAnFE7dmSNPSyF8eaJKTyrnqCpbe3uvX9t2ZNLedAcgCYZ3eaNaYv2LKzgHeRT",
  "key14": "efJpwzA6tqUR8Z7JcP5hFfona3tpNgYbSUznvqp6LB44xgLiGbErZ9xowL1e32YrfUpQaKZ6Wb4FZN6ckvcNHjL",
  "key15": "61kwDQr623tKKVXAVkioYxsnZU9fFPjhWAXWdQaps3gyUsjnrG7EK26xYDPTr9YvbxWnfEJvub1qiJ2gj7aRCocF",
  "key16": "3qgEp7e2zqAxfi3YXRLwJxMHQQN3jTgBUNSwLf1q4HVam36Ghug1oEnr8ym8xdq7riLyp4egsVJ64Gnxax82nLQG",
  "key17": "4UoEFXbPkQSZN8AV8AZbvuMxTJrkpUsudFcjBf6pbnVxUpVAj4dSVqXbnQ981z5KJpevBNXzgzs8jkYK8zfF79FX",
  "key18": "2RGZpxHTkuA68a4jjoFjPpUpiGJnVBjCgaLkyoRzUdFwoqEqivKTxg9cyLSpWbtWdY3hX5BN4YiPjMLkW6VxZkR3",
  "key19": "3bxSFppizpCs55dfracH6USKRHRsQvrmCiCWhmJehivAZiqp8awJSaxaqBADD7Ez7JRtDQQT5qFCTEnuKxBjA2h7",
  "key20": "3emqYwCpQW35mKefGkNY8LFS8LnuYS5iXGPi4gPACLhgJSMyEZpVNS7VTtBbsRnpvsV5WXrBMd4FE7XwEKrRrD1Y",
  "key21": "2AoUzMaMYBSFTMbXgrZTkoYpn8H6v7nP2RcXEAYi8Vo5v2JCiDrfs2ZApiLtm9bj6WWfrTgcgrnN6pLct68fmwEM",
  "key22": "3VnTNdVX3ijjvYssbMwntjNTQjH4HgDxQMWSrppHUS2PETm37DwoqBQLoTmbEz4k3NMSqgUC1SfadVBbPQdC9gX5",
  "key23": "53yWxpmqBNgiTXEe5uGbXR6AACCTR7VGtpBCY43s6ezwjAciZCieF9KV6KCFkru6hyC5VbPYDwQs2A4Phi75jEvz",
  "key24": "tbLWLZa6vtSJ38Nt8agSzCerSZ7KfBVL9Ngon5i8dggkWqR8c2qwoJCXpaGwSaMxkJWZN473fvdyMRBUeKeNHJv",
  "key25": "ei1PoW7yCt6UkVMe7spAsPk5CyAiHWPsjuAiDs6x3bj89r9iosQyocRAS97zgMyGYHYYsYCtXuTpTRTZLp9Hm5r",
  "key26": "eudPnKX2pYZCXQor1wN1hNvRyJXUdztr4n73XgXS5XV9QF71992zMA8LCpiM4eJGZz8j9ZEokxehxaeNDn4RCdd",
  "key27": "4WuV62Bx1Z7ti1wPsbb4hEcdWu1M4fpYdBzjAeefTFVw68aXyRmT8X1crrrKi25bBSM3yJsMC5zwYKKdaRETecsH",
  "key28": "cQb8pnadVTUkTk92ePPwTaYMYooZMTFDb4FABfJ5aY8Kz8LRp1zjU8iPBuej6kXZ1KvqVZPui7cgMVSNVHfDU8s",
  "key29": "2DhNu9CWQmQpT71CKMyMLsDyfjwT5d6jv2KvhLZBhTBWcWAkYaUS7UY2oFR5yGfnyaCtRFmmwNBGGNw2tqSaVyY3"
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
