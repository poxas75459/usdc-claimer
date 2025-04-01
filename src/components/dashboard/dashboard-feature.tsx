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
    "3oCrXr9naVZ7SoVdGtjc3sWt38u2fmVyoSLhQUyYLdHt2AfmYM1V4T87hdrzABdZ2jsxBxz8ETYJzSG9QuPZgBm5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JLgiU7SrBJGECXyWCP5NvwTAYBS3B8zmXixkUruC9ApDfTmDNbNfDN6UjiJ11rMyHdJdpJdxgtWisNAYosBTWpq",
  "key1": "o6Z9Yw11bdyJzuBCMY8gukyjvgVTyWavn9FzvmSGerXC3uQYpfzU2MuqEWRCwqNK4prXuxTBiPCNq7Q3CB3FXXe",
  "key2": "5VZMn12AdK2E3ixSpmTgjds17kfpQUyXa3KFNpKPLwBKZ8rdUtnMFL3uD3syU1nwyvWF1LbchxgSJznf8cpc1GJk",
  "key3": "3QdcaF6Yij9kruneVgLMsqvqhxCaotSuDLyy1TNAU7c4pRY2SULxDUFeii1H6FcWyxbo8pJDsPbzNXTJb5L9CesS",
  "key4": "2t4GsKjsxJskuwkf2GMq5vW6rJg9CVMaymwddnesqhRKiU2Dn7EqvTXB9nDAAoYe5fnBwtwTUXjpyQBxbniNd41H",
  "key5": "3AvxEKo1JBUaUcrXSMRJEqSukTjrocbhoj7wSJPrWNaUEZS6rf6umHEdPRyXhFtdxP9AGSsZKbg2ajKw6LEbtNfX",
  "key6": "3EFLcJbUN8pUnWDJPo5eCjHvVCX4eJR4xFdCsujGBkWJpANxiAPvPK8VPQFLCQjzRsYeNdz2uAD9Y5nEytaEhJoA",
  "key7": "2JK9cMmmgQg7rfH8dmkkycN4ZGMqG9YB59xFw26TmakoA2d768nQAxybavb7taRfvrhKZg21DHZyq2bqriXMWUA7",
  "key8": "WjHfVjuwnuzv3qnKhK2kWosKSo5fUTh4QzT83HKVCxg7BAFC4PrTaB6UujD5ybjuZBEstrYK9KkwYbu4XJ9ucF5",
  "key9": "3anEd9fsC42MxkLtgSZ3WP7rDzZxxUDbrSuSRtZkMJ5ddm7Rcgdt7UxQvrSMpqjofd1ebZEeRYsTAsk3GCTcesMf",
  "key10": "3uPNLx6rBbnc8jx4qiwLAsgRgncSALmeL31HErDTkQhmFEm5NLUwvBHqfdGpnzob6PsbW4QXpZK13R37LVUSsnbG",
  "key11": "53zWqgZrEq1cT8AcCQCNqZL3A7de5PGyiR5zqmWua6gYL1CRPPewxjtjUrBgukUeMfKZZr39zJaeoRA66MDANyWe",
  "key12": "2CDdZMGiipX4zaXWucQn5PtNor2BcVM5nhetf4DxJCJGb4tQueoJheEbiJQQw4gHknzVQtBCxapb1x93rxn2uhrr",
  "key13": "65tvjQLMnXD2E9zs66pW9ATRCZUSEA7H82tMkQzPDoKeAwFkvfUB927heyQAH1LzbEepWwfzH8NwjeZkzsk4wDCF",
  "key14": "5s7qKRCsLsZNH7vik3gP39wkRBZU6df36zrVPq4Q4dMa7Zf9jzHMWbEtZsDqATnhFBLSh6v14PYDtjVGeMRagV6f",
  "key15": "2mDKKC9wrxfB3W5quNRPUco5EVezJ59ydNrafZRV3eSnV5QtzeMTRaGiHGKNYTe67CQmSRCZYgsWsm4AmF9XzZhF",
  "key16": "4kReAuYiYotCbt9dHvai6b6r6Xf5j1zAKC7Zp1pVkM1jUFoAFT32WJs4VxYiD628EBGQDgfkjCQpsN9cQcr9kRVu",
  "key17": "4dLwPigGofsSsW3ryeRb6Qk8xPfb19hSpaCgXa5MhyM5B6AyxNKCd9jLA9Cr6AcBFGC8NiM8Fm9ErD8oKJRGHVCU",
  "key18": "3DrW4X5U1koNStyinYN9Bfq4pLGoNXE2S11fSp7ToVYofcmZJVeyK6ZuX5xSyJZocaWrX8VJUTsu9zAPW2CfzjqY",
  "key19": "4AQDNDZJM7uScmq25mUrCtBQyrFLojFZoF21HoGXqXVGLnSKaCpM6yfZX1uRiQAvjLzqZYE1su7QGG75hyY7qv6r",
  "key20": "5PqLoAAhPpiSTnruqZECR9bTgSuex6weRXncYzWqo6RgtVuANEYCLicZcNGMUBGh9QbBqff3HRFPbkqXP1HoV4Ch",
  "key21": "2agEFrvkVjbx4zTgC5h52JZPDwbwdupquTFk7964c9ZBvxJXyWfQUNtjJBuRao7Zyi6yM8B7xze47JpvgpVKNLUh",
  "key22": "3xyBmh9nx64kL2MAVLDCuyC4faCaDTAyBH7zCre9yYdiPKQwKXbyfKaSzhYYPcFaqnLshDx77x24vsxNUHFmPbxA",
  "key23": "7dbFV9nuLcLtMpvk4nNgzpNt5scDRsjcW2f6JWrBigKqMNdpLqASxGFBLfmtJhtZYYmy1E3QdUTy3LdqwYvD1QH",
  "key24": "3iy57VUbbhvDjreo39wnMuYLGbkQs9BKUq4REVTJkVZj57MgcaWPfuwN62w1n5rdtmy5G4YqvMXj9RWPhTWtqYbd",
  "key25": "4KU6UwEcuzLUKR4A8kdmVUHjpTXARUcpQv1GBeChS99vsRrACtxjZtrzSfCzBg6Sf5bbGX92AuseNYD7tTALG8gF",
  "key26": "2XnZUFCHDfZbWU6kYvSRumSmFeRVbxNFGxmWQz2Wf3PGzQmctzZW9D4yhMsNvkrA3B1usWTTPtSBZjW8QiXKoSku",
  "key27": "37kxQW6h6kGCx4DCBV6KgeAkDfHG9pdmr41m4c4FMbJPjEq2qE2oPaKfQUHg15k9Bc6ksrTXiCGeiiPNDkvYRS2V",
  "key28": "2mmjtfmXo5WXE4BFQd1M9ciC3x1VTro22Z9bPsdguzoQfRh9hCa8cjXY2y4GDhfjfHyoKj277pNbRNXnXReQj82x",
  "key29": "2Cfr6dqUgBGiqdo6mx2AACMsUu9u9zdiqXDsoGZC8cRPhYQGh1D3HyapLbBxWzgL8vMW7x6ovpVYm3RgTUF4kVsy",
  "key30": "4njZYLfaD21gtt8pY6CPHW9kit6BCj37WRpamEVbcFvLe38xfBdDTwT9rVNABeygUtMRDZGNe9fkEjX9DkvU5eJX",
  "key31": "5Ft2i2zsoP6Bnt45PgYn1HxXdF7v6ojQkmgJ8L989f2Zc1x3HpKD3bTMe7oBbMrjY9btJb9ZjbMNXjyFRivp1T8q",
  "key32": "4Nrtqz9hqdDVbyqejCb4WNMMuMocTWHuuLNmVdRS2chCn6Eq8327tqGofQ44ANEn5PirCAxMZ9AimeQeHX1znhYv",
  "key33": "8rCbDYSukWe7qfPt8cDe8u5FRkkRDk4wSr2KyEgCUZU5WnpNyjDbkAMvuNsuiNE3Dt4BvbuSWKHMtawwG6SCcTw",
  "key34": "Z2YTiJ5QsXAWygEosJk9mni79m3pNKZ2skA4oNJjyHMj16AEvLX9Fm1mMBCwyUJWnKvFPWYdiJSmhmhNBBb9DzU",
  "key35": "4MwbfpNpwyELj78EmDvAp6vYU3AjJDTtdvxjcjB37BEF6xBBJrohSJBiSDRDeMNVCc35qUTi2TXazxFWVjQZwThe",
  "key36": "4fr3AiW2jjYL2osCKa3CcMSByRh33EWzxEuUnQt691mgoAztEfrVJiRzwWGmgh9rfGkXPDP9ogZziStiFSoEd7AG",
  "key37": "54US59cscADojhvGNE7e2Tt2owMqQw9FU48mPeBe2HcMprHausL6ZvnkFJTgYUdXfHc9JbsDvStjJmZc9n6eBAmy",
  "key38": "5rvodDTVrSQtiuvQgQekycStkSUdzwHw4tRUR7i2R3ZYzoGqjrFLBawmh8b3Kxoym1zy3z1xvEvCUcofjN3ogavg",
  "key39": "3XNZ92fcmr9TEawRtu7VetfMysNDEDJT322n214T8ioyMEpdUY7EqZhRbYvg4CK3jLzatgjz81dhwbnWCHf1CC4q",
  "key40": "42PjUzDCiima2nxdhkw7kDFdPBpCygb4dx3MzCMTRj6R7sa6MPg7GwTsUnrFbgcutoSCxyzLVVWbjcRtJaVMeA4m",
  "key41": "39P3J9uqfBu2CHyNaaXSaep7G7RyDRrF9fToM1nVzGtGRv1B67KNL5rXWYxqnoCaNEfmnU2HMc6QNU7sYCdpTZgA",
  "key42": "3tu6xEBKu4bYn7WNo38Yg6dqFF3kpXwLCZ1c5azumbxogHbzLHvHhrpw4TDbxoJFeeRZ39fYak9iASLkPyor7TQC",
  "key43": "3PPejnkZRJzLRvDyRVBgDCZXP6XKmuxFg3xUZvkR8egcKWCBEk7jMSoHh3Ca5WmtUiRWDc1pzL2LqrK6simF8KPD",
  "key44": "5HWj2e44H5SWeniT4bXaVbKZBugF4nQ97T9TLfHsygzBXeE9gUzqDLM6vSBYyEFmhWtG3GMyhhz3QHEg533A6qjM"
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
