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
    "4oso7e8KuCNszCjN9fR4YCA5AMJCABayXMFpuTCDmAoQQn64qPhDKsfpqbVvMYAMdakdDvLrhLGAYrC7R5xThjFa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yFYDEkXM7QkgbJbFw1TdBSpE6zcdnxFTabq9xQnBS3YvUpVJaqsUSowejBdNdLnQ3GV24nHsKLZjvk8a8wPyVxJ",
  "key1": "3UQhmx2ca4DP36XyBSsy4gYMtMH75P9QtVHzMcr4womQLfViwkxHEpk4Fb2bro7XC4yez7gX8XoRLLr8KQEufCbD",
  "key2": "61qSTTermXQc2tvks6ZKJWGiDJSDVZowLq4y3DR1uXLw3xg3jdXBDRKgCv7xdfLKx6bxhv3W4ZYTwzWkofz4fWvF",
  "key3": "2dtxzmeQ2xd8wRqktVNNyXKpmTRmp8qqLUFCeAQN5HVyugnPt8E5d9goLeARC4YQ9GXVDvfVD3KWscitvFJ7iQwt",
  "key4": "UNraLDjnwZp5zdd8C6mzvwhAidWN1mGBpsjqKoJm59rJxRXZws6Cu7SciGhrRFnCASjtWLZRwhqBUyDUz9Dz6ra",
  "key5": "3DF8Phwjq6q8VF3YJC72DxvdophrSqX13BU4aJrTJ5fsvRZwH3qYtgrquCZDsypEfheYZE2qS6J9RAAUGt5F56zw",
  "key6": "5wiM744XrFWFARm5PegrXF3FYg3zyWJUJ982bLLkpDBMk3wsEn5ywjuoQLhqZeNbq4GUB3BCr6D1avgUCqyDdx6W",
  "key7": "n6sSe35ykxJ95SDKFusbTvFCEGE3A5jAxz1RV6yAdUYqSHEJG9XBdN5siGrjRxHo79vEGfhhvhZzKwhwRaYzsaV",
  "key8": "3LniNbYTrA7ka5sKjsB33Q6Hjb1U7g1q2RWEdDKYTLFA2DUhNZDBY9ikDXDrevV3fCn1qGWxdfXj1L7EG2jH2D91",
  "key9": "3SEyacSBBojNj1p8ADuh4Mu5Mduo4DVvauY6rdcHFCSskQo5Mxpkg2pY5y8aBbrYLrKvKC6jd5Ta6XvTJ8XEMb5G",
  "key10": "3WSV7tVCNzv69qxBqrJaZMVGTaw766bPmA21Qr5ZkY3uVeW9VjF1xscCC9VCsrWjvMwfMZrBK6sqhgW77qkbx5W1",
  "key11": "2YAzsiNARioXfBmYeunnrWuncTMik7xmTxu1JQVExBXeej2fFaGi4qqt5ZwvX7hidWkP26wMDM5GT16WaawRqxsh",
  "key12": "5GdEYdwubzp82FQBY6zYPSSESySMx3gwKyCxs2Nai8XtC7mWvSSmZiXtcYJesdoiYtd78aYNdV4ZfGt8ReHbTifF",
  "key13": "2niV7GvUhdHBksv9gs9mbVAJtrbcwtc5L5vgKs77ANCmnznpa5CRUMbmot32zZu7RJNBbEpy5QL76Y3Xwccssd6L",
  "key14": "5w25BZU5UX8GCkzDKPw8aecqmLsZadmYcQGxDwDm8h5TJ6LDz7J7bRp8BH1hUzWKyck4NrVtg7PeJbJt5iN2jyt6",
  "key15": "59b2xEQcjzQ3MHVAa5CGhULg8bAeVtu4ewQBohj3tAJb52Fx7GNZsTT81PywFgoQhw4WpECjToNsXPK2TJCJqSFY",
  "key16": "54W5ZExkacFrHJxEdp4zw49qhvqM7D5TAuHJfGNPXdyzWMW15DbVKD6WQHnxtGJuMkoto2dSn4d7W9tu9e4YYGbR",
  "key17": "3mmqfWxAaTVc7SNFms727GoyU3zj8mjMm7jzPNrGLKiTqYAacoB2tWnmigwgPeuJJwDEnuivyDZ18rApvmHrPzhZ",
  "key18": "2C3ESUoxfSKqCjqy8u3GjAA1Fyqau8X2sVb86ZW6xnyMkZUZo4c6C1PfSEuGbNhSswoZkNi6bUND2aVP2iUDc87k",
  "key19": "F3zopgjq6uxzxaxPJa5UxQQT1jNytt4bnbFZTpRmqcWZYqypQLpJm6sFrfZC8C2nMr2ybvVqFvvhupqYzjRChvy",
  "key20": "66NGKJrGahqoWc2KNzkBetMz5oyu6FiUTL4gRq46aTFSwqXzeSixg1K43NAdUL1J2375ZgmiToTYDKx5pCDt5rSz",
  "key21": "5f3YGF59AmnVFosKJKR6aLfHyGE8aCPLe6KNcNFaXJBgVWEVt2r4jwphisn6C9HfJiY1VCYU2pBYFwghDvY3rFhC",
  "key22": "MGybFfezbmmLuhP8vB8Dh5V3oXHfkmgLLSRCY1CoxYXEzduCNXr9uh4frVPd51XrUUpRZx5bTBMzH6XvmwN54hb",
  "key23": "SACiAGDXXajpWFjAAR64BqoFJ9m38GVAxcjdzqGFu6P5pvPFdauRQZqmU3wsTu4Jsqv6Cats3bHcb6iKTzqYYnE",
  "key24": "49CKTTpQrbL9pRhE7jCNGY4h2gjpfBhHNb7QnVVqspxDPhU1FkvWqVNwf5EfWWnpEcPFnF7CxJ5bidRD2D1TLUmr",
  "key25": "4SHV44QBWRwwb5yVh4fvwkDrGfhzz9MKZ8LCjrzdRhXFKiahmtywZaXvBC9jEkcPdBE7uWbvs5usrkwYRA6JNtya",
  "key26": "4DiGpjhBHAtE3xto7HhPWukEqmjT7nkq71Jap1o5m9hMg6XxbJcmTxzQ88vxDjJZ6GzdxDrciK64yJpaqz4gM3uA",
  "key27": "416X59JNk6yVq6jcni6Comn8LGvnRdyhx2QcggUvNBPhw29c1FUfeo3b6tomYKcFyv5Yg69wEGbpq1WSRhptvNMY",
  "key28": "4sN72tAKrDMVUGpVvJZRvXpD5nTgKTKhmRNkLNqj2zAs3vU8EHffPuh8H5q4v2k4auecipWQv3pmzubksg1fYFFN",
  "key29": "4Qzgw6B6jypPyNypiarTuTCmSFX1gF71h6fPiRpjGW4U6WfHPfp62kVpjLtsCQFTvDB5NzhpGXc3JxUg73xTVQg4",
  "key30": "5xmJchdKnhNsie1NFWWVPc8agxACGDWGY4z5BmS6L1x82h3B8JTFHGuAuBW3FDCeJBnAeTK92SmFprnqQK46t6SB",
  "key31": "4FRv15BUKBPXy8P8e3BH8PBPhfmzBW4M9RDrb6GNshK7zPkgJovak82fZsZjm6a4GFiUransRhMp1yYJV3YMq5n1",
  "key32": "2wZSX6xsuLBjZYFskkX69tdDNGha1kCc7Q41DXSCNCq1UWcS7oaX5Tc5KRPiHx1sLyoprBhvDA5g3iqgL4tnLvaP",
  "key33": "4KwYTZFNqMuXJFjTkeK1rTSCkiCVdQdh9DEQE9TcCt49T14KADWKj5qBpJynh6umHkHVPhPExkzNxzB7C3joZ4u5",
  "key34": "2M9LCN3cwHyD3ktdFSx15u4ur64rfevK8doTJpRPRLwTJsHektYdg6J9oR18fnxzTfVyGMuPdorgzpwKTSqm2Yzy",
  "key35": "2fMouf3vpFrqDPLKR8JxFpAhhxQmEMdGHGoHKmkciCqk8vw6F7kUXR9BFAecBAM44Z81TcavKNmBEZFTqBAreg1Z",
  "key36": "2xgtE7MD7KVbhW1mBbhhgJntoeXpTrDTKQq4utKRP1MMTBnWy7uvFQirtyndrgDZ3AzcLQPVrWSu2b8SoXWuSbmv",
  "key37": "5L9eC2E7cpGSpch3yS2kkf3n6LgGPNkrBt3TFiit4KsoD1EdgNvwC2RqahDHqoeQ3josu42mzYdKzNXDM5HFdCL3",
  "key38": "Z8rbhBPwgTNd1d4T2Z9URXSV53nfYmK8cEkRZgipXQUoDKdfq4bGz6H9q7x9fEJUH28un5K434fevis2T2CRaGr",
  "key39": "FFnHKcLMDXyMkLc9Vg5sqN4pGGLQJiExsoTv1d5FoZA3ujkL7EG2yTATvVqaw3ueD46Fp7xBEyenQZsMd6pdVQn",
  "key40": "54MShm7ehSVkeb7ftDjmPUqT9eFVyYgrtvE56afEVs2Nj2ptdREYXRpQsVAr5GYywm81RMLSNRNzF4xcuAPNF3GS",
  "key41": "4y48rnejSozrYcHCU5otA2iwMMviQfoVi3e8FWJz22WZphKYNGCEnNVu2d6iDbVBGLUx8xyR18UH7zH5zUUwvFYd",
  "key42": "4Q54gki7W6zBMGDFNzVQ6kndKst8v2pC4NejqfJeDT8d5qTQPEfGUb56DNjRqvSChTLYTw5XCVNrG8nBBZYzar9q",
  "key43": "WfwfDoTGz6F2B68nTt9X8WXVKRmxv32kd2gs3i57f4GgBfWi2Ge18gvtW2J2Xn1XR8Kt4TzMx2YxjW167naEXx2",
  "key44": "2kL1Nq4zD2JHEWByiDptU3zj6ERZZHKck6WknVeZaKdFS7MmsB8Ug4MJrUX97Lkp1uBJrLPr5FpadzX1HhPH947b",
  "key45": "5UNeZ5F28GHFJCgZYeVJemXVpShZqyKJwtfnacA6YSPKBpojvqrpV7tSrcYrD3hqjqVV2GybRMjFrEJD2y5nr2Vb",
  "key46": "eGvc1qMHNQ6Dgw6NAoChfmtC4XPR2vgMxTHNS7qaaXiW9Hpm1TVAqMJYFpS2fRSPvhLDd1Wxvtdr3nwtVo7uGZM",
  "key47": "5Awjpd8rXZEQuazfAwE5VfBKEaMHw2gfimujh1VC6b7sd6o4cNatfgzsWEZ1KyppwSCbkKWFN2egY986ZsqVyHDQ"
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
