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
    "3im1LVCMzGZHaTBTMc3bqPbGPagHGdoJEg6mjoTZE4bEGUPKPkcMoTfg1xJvBSiMSKAnozL6xBmd9R9gAjg3ExYt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HkLmcCAKVVr4oesrJ2GmQKBzXKtFcaWgXACpdyn1RyzT66XTbAibqvgHJJy36f33dkCfBYkFAUa8T5VrC3bpAsQ",
  "key1": "4QuqvF2Lnqbu5bPmE8DWgm2fzxGY2FBwk6iGfbAmETYFbGjTcx3675kmBNAobH9eVzGHQhW4F7P4KS1Bmwm621s3",
  "key2": "4TFi1LWvDokBKYy1sRbozoorDFhWKm5y6zL4yWrB9YMRc2DXb3CftmVccK9eTzv5ru8kRjsfoSHg8a8HodQ2HjKr",
  "key3": "47w6CEGm2cP3xe79EBZB12eUfx5dqMMtcNWW5CEnZQFjAx9P6HTkGTsPhmvgnj2SZma1wLrzUDR3bZZEkfdZdbvy",
  "key4": "2WfGPaEGExTZf5DJuQLhDWdxGYot6rCH4NAKB87YJjL7tRYhBBf6khZPezpmDMYTNgigi4uHBoLLoQpHXc9Lhtjj",
  "key5": "2R6JgtZNi89hAxvSrWDe74eAi7gjDjTG3ygwYLB8wxt2idfk7tpzWaaA68LphaUhxXYXZ52bYWjrty37WZoyQaqf",
  "key6": "3xNt9YWTpE3U1zvSCwDS3HxDfCfpZrrfgoz5CCa4J1hHnCTQySWjrNdP6TmBkZfCVERCHiYzyCH3HhZbwPTFFirp",
  "key7": "3fZ3ykyvMB2dsxLbqqfQfT7ZK3TajrwGhU48etswtyEwySQpyL1M3rjyt6Rh8kAAyri2TpiAXcQEo7magaKU78T7",
  "key8": "2gerpDAATedPevGkrCMfKZePahPViDRcCRnLaMSr84Pr6y1BJxJ5hwMVVkubsRgKeSpZZ87WgGn8KnYEMewebfLD",
  "key9": "27CGiKG2hwCjZJHJJPRqD12i5nAgxXgUVSSuYxK1pHNGVSnLgMELtaj5gRA6dfVg5ACHjp6pdJXCgNZYDpsC2Qx7",
  "key10": "5qTq4z9iHoXTYCaBtXi9PkLMk9esk2DJJ9du7ai4DRUd5qHVzdd7Jz9kqxWLQPfYx5BwtvZbCqx9Ua4aU2tE39Xk",
  "key11": "4dUpdPPG5UiMLwrvC47veUxiancjc3RAFAFuYV5X2HaPBP13PGpGAWDLwdF7vdZVDebzUsesqDSVU5SegsCLuCbM",
  "key12": "N8aUZNwEeLkHnocz3dngcMBYRCMS1Lr9NZZxchJ3QBojQNHwnPhezJbwfgtcDKE6aVa8ENoWH4vqjNUVUP2oTbD",
  "key13": "3iruDLV7qjtXFJHSm2ietJgSxibexTUfLFdxmHpJArFL8yDrSVyFkZc8gRqnkzYQgqZuxHRBE4UKvhPiskiTT1CB",
  "key14": "2mBrKQR4Fx6BY3qSDrtud567KHFRDZt44Gt9BXz4sd8ZYoysTxw1T47m7k2jGgHESYpes7qZYn88gbJmiusExbN3",
  "key15": "5U24jQzq8apPTcd3Qq6ciTtJKJ4MU3x6zE26zV4ySrJ1AGooaTUQ8nZjDpBVzgWX4oyFiuhcQHwhAJH335NLbtvR",
  "key16": "htgXyxTjEachid8tvMJugtsXrrj34hKrinK5NKWqgEyXzgtHzEgWPtVtUW3u31pQbpmyD5qVN767khFEn3VLahH",
  "key17": "2dyn3bJTPKZsbppDU3FNyTfwquokogauF3xLp4jnWiFtmzwSpuWNzXEVMDWmqVX3RxmpSJajp3F37FrrMpP2v5Ns",
  "key18": "SUUbsF3wnyGSVoupVe2phQyzfK1qF2wzgdehCcbtPf7cpex28BS4pSdWdB5JzCTpMcSLZVRR7W6NeAY53DiCXJf",
  "key19": "ZsxmWdiPMVShZ9h7AJM1eTcxJLqfe85gaasDeqYzr4jsNsQmXuBVtrWAxAA9CX4bEepruudHXum1EA9trNee2aF",
  "key20": "WjNaTp4NxTNhNFXtypinBqyvVGapf4cXy6bnmPD1mYFGap6QZAN3AteytKtVKeHZW1SFhhLaYE9fd3vqywKVPTe",
  "key21": "Uj3gMYDoj2R7zCGQMYUsaBMKYpikLxQ872wBDBSRz1FbTmwqkvZYFENSwjmUgKZx2vk7GYLCvtLY2m7ijJvahLD",
  "key22": "2NBEJzX4Mn1XBkP1WU5nxd8mdcTMxDaxtPaZjdbgZak7xgk71cpCFJ4VtecVRW5JDZLjVEnrJhhzSMuQD14CSdqX",
  "key23": "4q87c2WVvDMxG86RMLkS1yjnoTEz7nG3vFLWT2WKa4eadnuEkxQ8nyoo27CrENhvvyyC7YrttQL5Z63c2HXbxoQk",
  "key24": "3etrivrdQe3ytPNkJWEBkTzesw1nXXsfCCbiyCLRiDCpaY4MCH89Q533qZ2hZSxpKtuDUJb7gX9SX315poJ3jVFC",
  "key25": "3k3SfKvrvbHQT8pNpz5R1aGWZnoV67YGLFnxVf4xGrDS7oGVFBcU5iGdPyKBsmVCnwuAdGV2x7R7rFSgEraxHb5m",
  "key26": "rgq7oJCkAA7pY5XDRmyxkY1K9f5AWmLRNK2LLkfZCoKsvdMB4F6gQBJxhrqcutfPGLfCy8Khx8AhDHL9K3HhKYC"
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
