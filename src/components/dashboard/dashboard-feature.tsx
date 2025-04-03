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
    "46oeLa1mBhSxDzWdJDzN94DGR98Hn2vmBXLZ7QbbuMyGS3kMqs9tapE2AnTvg3apcr574ebuBQwWKGBN2HACNM5q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uT4JnjfBbsk92MJHMU7YdWnMisd2Czzm3EpbZB69aLVq1egep2GvSamAx729Gi5tP8EHnbvTRdBARa7AdBTnbrr",
  "key1": "3AKcnY3TqPukTrPrPZHzaLNgYT5Sj4nWfJAschhLEYWMo6oY8KesXZbf2Jn45wL4SThN43YPkonN1avy9rhbYRTc",
  "key2": "51dyXsAWqohByvj9NaaFKoWpB3t9vgJBwoi15BmRDu9HMwCFRzRrooh7fhMmVEr7uCmkKSrPjPEzQp33n2raSQh5",
  "key3": "3ZfKQEtMWToPSWmbxDFXXgvVTDzBouGc4Kx9FEETTbvmmECHGvn7QNGwjsKDZ5cyzayn5YoSgg9XipysH1MENTyr",
  "key4": "3RemMxPQ4Rtb2riHyj4VLyb8gHFjPP55hQx1j5arDG35ZwnQq8scN4QVmr3zWeL7J5F6FALQLywCnDK9Wa8Q9GDR",
  "key5": "47E3E62eNK3D9VW6xc5KAL1zVYZP3yzNBCUKn3xoPt4KF5LaDf1AcMWsrQp6NhtQ9FtSzPA4JwUSajw6KuN3SFic",
  "key6": "4VkbMsf5Bnw3mBinMcSYfN131ShjaLRpswiW8Jr7heujFNYjjtm4s6JzMah68qscX6UpxcnpNxqiaTZ6o7EvGqDq",
  "key7": "3iuRJX51bCiuXwWceRSw1ZsizEx5tiMH36HtUfv2HBpdTCeaLYKQtFNYgTEvBwyXv4WLG5d1ZSsUR8auChUxnfQ4",
  "key8": "sk62sveer2uxd5HKPrgg9f7M9eXsSDz7dK7ppmgrKa1uMmqxYJEUrFyijWQnmam86ZS9995vtzeULcFw59DVjQt",
  "key9": "w5RSFvAbkmGiDPxJCYYbXU4jzxah6P8yJAruK6qwKYBWBW2tSDxvabaQEvbJVqXgY13EZ4zUcE1zUoQyLqCiYAm",
  "key10": "5FnAFnhYN5nM31dfkAzXejcPNTWDTCH7pTENYN1pC7MKafcEE67x8diRYTNhzyMg8W5C5mejNjd3oaXjtvuenDLd",
  "key11": "2WehmnkNsjL3fYNetXc5LRiQe8KqDTdgLkCQaJF8yiHTHrRaXGq5SG5ba6cwuADK9CXVPDKX4k7hML5iEDkaZFcL",
  "key12": "2NJyM9hmsY7TGeyjRyqNFo3rkRbPHRyGfPPNpRsmMd4WtDtaigrxDHb8x8LmjqnfCmZXSn177SQdXEs8Qdi8cm1q",
  "key13": "2yc4Ayw7y94KZY7MWciyP1Hx6EYc5tVnEFNv9RD3cLeLhsgbF2qvUkKxzmwBLc3Q6Z397YzsYTw3XMvQkR7V5yJj",
  "key14": "2ZDmZKkwdS482EsGPUH3oudMQJnj5ojwVfKgy4AiJmrrVxZWuWNKGVkTyCHQ8JFVqaRf1DoP5RSWDjPo77SUcjBi",
  "key15": "3cRfW8hVJz8ogdtJYMFQyTNaCxhAaySpARWdJ4xS8EhtLNXYL7en5Vpeuxk8YZyfDVcsU5AnKdnuhNwt1FhGHKhY",
  "key16": "3aV5WWJtdhQvuuaMzYUy2QC5cMLH2GjMGtebZUDfRV9sSXco4u7cp7UAdCSYUnZ6FtfnBLFiur9NJ5KYy5EQn7mV",
  "key17": "2PLtYLWPeX7XQt9CyBTHhn1b2NFnmwPR3akZwUpBLmstUfsvBcHATbfm3RkADY1xg45TUiN2f6dTZkoQahBTGvjv",
  "key18": "3HaDinTuLnALZSKLuhHQ352tjEQayQdZrSjQq7HGpNZFsS7aJRb4bcCFagTKhBwEZAaZVBr1nVmj2iVZ7Q8ESe81",
  "key19": "5EtFTdBH8nKvpLkUbJnukNxuuCKGmJ4YXEhPwoTSqW7v83rqCc23oveave34FjUiqpe8QpeZwkErYFRYApejRsY1",
  "key20": "4dH3ctuPpXDRvJynYMJpS6dmoJNLZ1G7arV4ZMMpTiB2T99HRFNiRVYRVr9NqqXG27NzQqeNePbcnG4SE7aXmYmZ",
  "key21": "gaMQMxCqT9QixnaNd9fXAXDYU5YrGArPdVjESNvjnkpgdwr8niUBLMyeUAoQ7Rk41XoChcA6qusGM8KmAadPtV8",
  "key22": "FBpef7qMsVMm6JK74o3VCUDZF3RwstWkfG4123UUxa2NRQ57o9WSRv64DGq1VPYvgXNsBJnDYjxCpxiV1qcExRi",
  "key23": "3Sn5uQARoD8AS8Sx2CAhzRvyUVEtDRCyYWEF9PmqEFjkafYsjBzYNmPiaRE8pttx2m7urhfYz8WMwA3UTLPscMaB",
  "key24": "5aEZ42jBGFqM9jpCXu7RMhZym6VXQed967iyqVNKJGqFarRjsaHDQJpRzFGuptugSxaC4UNRWojtPwPxLtVwqmVF",
  "key25": "2w5nozkmq6jmaFv3o3ET1jLGigPtGrF3P9zDqo5qUrSEgsN2sBFpEvTPVcZeWE2thn7Xc8qkzMRXdxDDjvtjEiX9",
  "key26": "49bzFFZRAvoyohJ9NybzMCkg1dG25EDKhXQyzWXxLny8ei3qLmFdAFeEV1u5rxvL34zbe21BU5tu2yXG6vcQQLCw",
  "key27": "2n4rbrM5n7x6edjHBzy1uMZfSxXUvCwQ2K7QSvs1HwrJNzqyuJEhs5ZQEx1y9LQmTRZdmS9S3gxni9UU3e5yg69z",
  "key28": "h8E6WBDfF7QVWfKdqEmFPS7Uy9x8A87KYzZGQG7ME3bmr1maBB5Whv9uyBVt5hDp1qYfXg1qVEV7WihtPehvshb",
  "key29": "5hhSkq5mzgqByNiUwK235LB2Dp7RiiYA9GZZKq3BSCcPPygT1qytBzdtoesG9j7M22tyA1e8N89PC1Me8mRAqKKY",
  "key30": "3LWLhbv4SfNRT6Cw3SZTBcvqUrJJifuRrwmerU9oG6bh2fFyfo6VfoFMbo3iCz1gonwQ2LHc9JM8HxV6SVMYEMGw",
  "key31": "2eDb6dwubKaJeRV7BBiHQc8XMRJ9v5tVbK95FvZ87tq9pZxp8rgzzQZygX5cs6JYq9Uh43dTewnXyMYzVz72SuKa",
  "key32": "ZLsvGYUi3xN2awmaLJqdw8ggwTCPTW2qu5FA8mAaYXukSDXQqkgCURx2gCGDst2GCnLCBAz5KMkFBUoHecCdirk",
  "key33": "5MK7tDZS7YrAamPpVipAnYwNTa9xAP19GZZVcVLr6QCa6nskbaSFsxfk3cKpTaxRX6XsvLd8widi2Pc3WUBjVhKv",
  "key34": "4BSsQeyD7paQhyDf9cTyLZSUqeHxAerMrpv28qG4kfbrFGudQKYccgDPtLnqs5EwAGT3U3uqcFgiT9fuVgGeVcTy",
  "key35": "9CJ3gF2fBXJpzXj2vueew74E7XNJRgzdESYxbhvVD4owKYmgVnbnv4rFuP9vYZMWTxvCzmHpvfKLp88bMrYz9Fj",
  "key36": "j19npUxstJkfyBobetTt5AhDCJD9hSna4ZYwB2DF7BxbEgYqYqFgrKNvgneWDxdFsBfdzNMnDhuyLmNLAzGKyeq",
  "key37": "5mE4EHpn9nYRcjNgev1ePgBS2UcMPgKnHU9qynRrkiBpPK7CADbSWAvRpGx6WuWiSX9ZtTgC5SpNddauewi2ZcbF",
  "key38": "2eJovEEcvQSoRorbsP3CqzQtxs5wTvXtGeaCHhQEmdBPx4LJAgVZzQNKWPSYYiXjfaLgEoW8BsVsztHfReof27Td",
  "key39": "63DS95jT23sGJxDAeLn1Ry984tPFfWJkfDPnZ6ATog4hNy8PHfDVviUao11t4U5NMjbdBgYu58qfeeq3hj8B8Tzt",
  "key40": "5asb8vS9WKKu6he7AydMjb6UTicxiEtucJ7h7zkMAK9c8YV7vXkLF5gLBTHgVCA4EGCX9YHeLxosLpQUnpt39yNg",
  "key41": "2WCx5UsDhrLCoLwqSSybCTPT66PYCUwWC4waQZ5M5Gxa63sYFqAV6RCDtXofS7Lm9BA6L2gYXm19pxP82VfCC3FK",
  "key42": "UR5yYXBWDis9oqesKiRcqdgdZ2tanW6kfyUNRqRW6NFKcuK6ZQEFDTgcwJepxV4miEnHdputjyUFhbjZKVmpSa6",
  "key43": "zPAzGqjEMajzFsFaiF4fBVinaNnLPeADtks4nbtJp9P73Fng3BfWAE57Xn6qrsdkgoYHGMLqJAXHA59ko31ME2b",
  "key44": "55s37tTbRPA941S4boACLEkYnqZ9s99qHG9JD38aPdRXjyoCoEAWwookFQ3p6hZePs2NvwJ277MUhiJ6fG9yvASY",
  "key45": "3sdf6NAFTJ58wUS5DV6FRnyrKn51n3L1PthfaoajinSjWRTCVajoBNtdnaJnmF3UD65LNkyU18Vr3eVHrkuopxh3",
  "key46": "41UMP211bi3Rrm4HxvMwJRYnrCaShrMGEvP1V9RRkupxf1ev6rGM6cAww9gXSwGKVZybpMisGN5KhXkCCdtjwcGs",
  "key47": "2RgsZYAhdnEkyo8tC7U96hymuc6jBFkCWUCJ3wyKKEodddXQWk8N9h2LL9JN5quGzYXqwu1tCs9Q7jGrfokQHCsR",
  "key48": "4bdkcwH4HfDG7n3j3smqQh3x8EQAqSPJV2ezyAxq7bt2CdWjMhRtep7PXCAYiCNNNV88c34eZhFaurFiW5JpxxyC"
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
