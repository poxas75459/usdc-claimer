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
    "3QbiL11b5LzWTpqKSKtnyYxyuunMHjHztPBppeweSS4VSFD3hzTqeKAAw5Jf6eGEyBc4WCNDeaxmHk7S6hBzEAdN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y5daqormWWd1vooi9MDaqAgsMC7inzov4iyYtw3zSfA3G1ZABT6pCPooSZwNnyNAXzPzm3ZBKeiHeJUAUmQ5sHh",
  "key1": "phQDdyccvda2WboxLPihaBdf6APMf9UXwWGxxa63UviBoWsnNrC6QidhWHj2DPpQmctbU6DShr8qzau4jS8TFdT",
  "key2": "4cw3s4CE2sjT3mMaMEt4dXzU7wgye96wkPTuBGpaAkuvrtWcYRQHPjga4rSwVeeUwhev16pbKNzf1CwGMQfwZ4PA",
  "key3": "33p92U9RoH1FBwGmDb5p91wog4msjQHR5BXHmPJiYM2eeardSgZwywNu1NkuXtutyhkMGTKU5NmenJkB3JHZxo1N",
  "key4": "5RuAcCNWqeuAnGX9t4yWnKpsWbyk1rgBQ26djyFPgpRCndFm5bNwsZ7qmRYjZJkyPpY29ydLgah4QY7deKQh9JsL",
  "key5": "2PvniNNbxQoqtNRCGQXH3gv9dgiRhXAkEkfkxHwqufEsMqYCgMvD4UsDsEH2SjUxu4A8qQbSAayoHbqnYEynsZ2f",
  "key6": "2oXT8e39evSbL3qeTa2X4Zn5rgh1w98j1JQCEvzvdd5GRwLLkQfKDwaYxH219HeMkANavhzgWZkeAs3UXTkBrWv6",
  "key7": "fQDZXyyxFwavwN8gnp9PPAGsmZ6ado1v1ySf5X2kMCgj99zBoehkZQJXDKnPKymhzMRZpge9gu8udcsph95rRjk",
  "key8": "59VTs22xerhtCQCxGCqZkjzoc1rZVdiNSF8NJ24Bq4N1XGgngaxfyXKUFYfqXtjHQTjsKD6REViC1oy6oLkCU2wP",
  "key9": "2Q76qLoHT4gumQFyMaQ9LCASUcxdCr2DWmuneyo3K6p73VvymRrzACdR8wogSTaCZJyEDBE13jYQW85jR5tDqUB1",
  "key10": "5FjwRPboaa22bk5A5PJeFXMVjo4m6mi7LRgiw6FboEF3DjRznrbSXwpKoyp1B7yQhhP3wwg3SVQedYoiRHAbPA8R",
  "key11": "J11RNVPyG98ntBTsQpywbVQ9nqpCnVyfDCexGEHWAXc7BXTd32AQPT92kfRj9rfBBzoFUvTZYZtQ8kXzR96Xpvy",
  "key12": "3SoBMeyNFGWkNBAXW6q5bgR2QAe61QQtx7CPK7vLN5dxZHBKzQUMkE6sQzvbUuj4bgniuHZYU2xenegPuzevGVgK",
  "key13": "mjR6cBJgx5uU44R5NJCaAZUiT5WbLqe8TA8eHL6BZgy46yKcQeQH29wCw8wQaJRj6zchQL2mSh9dpSFBdRfL12P",
  "key14": "5akUerq4qRifZKwWDMZWhmtQDuXysWtYYXGYpHcPfTfFwwE41y5S9dDjdUfSU1eBPgSs8SPLoBvqYXuD67mppsBh",
  "key15": "4jkDRLK8bA8gH7mozova421ed2GnZd93eqsugEBy8wUQ5bKpUPFFfai5pjtuaCoozuCHqYDbLMFXEa17TYLAjzaF",
  "key16": "38j2yR7E6QvdDBmSnjPdGwrat595Zrw4rnL4P6zd6kvyxpcKV4mRFMZhRauTSX6BFacEGV2VQWd4C3weYVzLQwQd",
  "key17": "27nyqTiKnExNarUkdpGrp7m6nYE7vNcUkWStGftarySJyQLvMsFiG4rXS9idurGP8kVHt9WosLesrtQHUztkTPTd",
  "key18": "4t1ZDvhq598gHJQWfwhC2HtVFcm64fQM3MYR5sfnzgeRwHf8yArM7jGkt81rcomRdxBqpDvs3sqJJ8EyHZFVQn5R",
  "key19": "42STSrL6EtkL5uGMX59mTAnMEKYZCvWfQ4Q5kcmxGgtSor3fvBbAhhruujJLCfzhrStqhdgD33RLQdMbPhgHwjHa",
  "key20": "5hFZzed6ipmsmivbT59rTjDBrTiaUT11G2Qk1hHMAXZPutiUUS6qWTfmjJWuhuK1kdBmQUBpwgiSa4BezFmgFn1d",
  "key21": "2MTH2S7CejRrAAQioU7PYrg8mycGc2p8KTJtfqqt6rSFBnsKFMwKBtvRdwMxvyAKLKsY4AdTyBBeyAAzXEYdRede",
  "key22": "4bMYxmn8rWw1k5tot2DA7FeNnm4i7uiiqoKsn9PDRmJ36jhgibGjXJHQFzJpuoAdpN5AyKZLDYeSmyRPSHDFidkJ",
  "key23": "5fY8ZYKXBgLXsPb4sV3eU94vSvXRSYdTxCoaN8d5zWHoKBBFYS34fPUpj8tDWNH2gU4cENJMhu97uZjN3HLx2PFH",
  "key24": "5piUqMYAktMnLiWfsdzmECuSSjFzApf1gQ7puZxSEupGd4UJF7GrbttpJAeGsfn4C71KncaK8BqZv8eJ8mm1pJiA",
  "key25": "5QYHyxZ86QHUZosvUWrkR2bFxKBNE8H3CoAduBngkmtiW9r8ZGUo9PxsxyuaYeVVSQezFrDMRabf9da4v7FCYYuX",
  "key26": "5v624kkgyhqABXjvfosT8wYZUvPyRdgwcxJhbY9L2vupgS2XX9AC9MgtT8Hcj8yRdzwQdPR5qP8rCDd1YF4ktBRc",
  "key27": "2Zj7MBMBXM2aPSqNsatY4DotHjvrQ2Sxz4e48N1XtjdZGA7YJhcr9GMKTM36VrcpewKcadtAsPVjcZxS33SvBiVp",
  "key28": "4ZKdggqGBCbzzB1zbhf7B8cndDTiYzSGhvW1ibseYe37SP6haaUG5URFQ2oT2qkDY4sHwcA2wo8R4t6sVZL9o51c",
  "key29": "5Juk5HCQY2pXK4CANGd3b14dcrtEDjfRo1tnWjCArYbNj24voou8iWHjJHwNZdhVvcvPE4Cn2Dz3k3wnNumBsYQM",
  "key30": "2CfrLKQcG5Wmai4mkTRN5ryScPznUF2qyki7n6Trui3FZfH6492uAW916RxCpz7YGTCsk6x7sKD7gSJrnypFTWvR"
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
