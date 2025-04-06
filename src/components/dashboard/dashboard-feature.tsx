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
    "UNpMMWPiFGE33hPXttx2BTNEZCPd3jzJFp55cUhFptB2PveVDXzDGUpUdHWvZewVrCDDaDd6nbkFtmuffdjqVxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58fL22XhLWFfZN2SYN5c6p7tDLPw2AUbXJ97nezqpAd7oANHcfckYwpSMBJb75BEgh6DmrTUidzRHznZJcVGbTyV",
  "key1": "4n2E88YfLSz2CSRKKbGrmLAwTcheFYqxnAzvSeMAnamVr3TLoPamzjJaeejrtjdse3wtTXCyQPVRoPzzzhx2Ux6R",
  "key2": "3o94zP3gUvzinBRKEgvKpUo7Qmdr5btNGChuEgQCBQPSkasTYdQxr15MCP1zJQapTDvRAdmmG3wbdnpbvjQNzPmX",
  "key3": "2hG6EhHASTwihSgMBJqSKCTYPMPJCtua6N17kTJBTViTrPZTcNoJgXVK6uWY12QVe44dBPWQ9bUaP5xLM1wsVzjE",
  "key4": "yo2w34zPQre3aMsXEPEBuJb2gS2XzH8M1uDiWHq2yKvXAAV3C75UmJKgejewFtoN5fMweamjyxE5R8N78NbP8vU",
  "key5": "3h2xbkEsFWpbZf7ZSSEmkQkHveREryve7ZQqQwWinx5EtbdfRGja8GoCYQhsgehcsq9gzgV2WcgsZdDwtRHXMi4E",
  "key6": "46g3ZfyNoGU5dmJ1v3G2w1CxWDc4Mr1uaKn6Xyaympg2QzzZidy3LXyzxmr6BV3dc3PR6Diwm9WeaPgjrK8KxaEw",
  "key7": "2AvnPCTGXzkkDENpUFewpvEkSbcZNSJyCbuJkj6iHsZSEDkTPGLpmYpQiHAoBGkMVxyqhyUwvcMmECnapjSzEEZz",
  "key8": "4Sr9JsutVLWJM61E27mwsRgiE44h6ip3hdToVnWR7F2AgU3a4xbr7uPzzQG3LDKAGPeqkdFLrCHB7G3HHLM6qtMt",
  "key9": "4pjAAsmPYcS2FWhf69qdr68g8yNQaNhrfXtLnUZqQB1ZBXqEaBQzJn5H6VsMvf44i4KdCHgKx5uA1TLj4ZSXrD6b",
  "key10": "4KNs1fwrDKBaxK3uZrehFcrXzXxH9vvGKKqRG2jXNwSAfeFpyShq6SZtcpgwzazsoqS6c1a6hP7UMRtJpQaC98Rr",
  "key11": "c3JZhM58qWohE5gxXBKapDofDPDiZtdSb4denfseTWnERUDXoLVPUCNtpXtba1zg7M4nEGM7FLQdwX7XCX8A2qG",
  "key12": "53ChmQev3wNzGB1RiSXeru1Tz45mStmpx22XNVqcVKgeuvKkE2pWEHmQj2hUHR4rsCt5bLSXRCJaNsCQVeeJp9vA",
  "key13": "54ybd8rd8ts22iMHUJYFEwjDNqgqJTsmCz15CsXXw3Fn9APUHUHAwfDNi4aWqmVgPZmW3YykGNHUMvF5zFPjeqkZ",
  "key14": "2DsDvm4UYr3WuP2AH86xPH18PqfRPryEhWVsqx8xcaiQtVnynz38TcKMHNWag7ueQMMeLsGTnPC7v2JWwjhoB9De",
  "key15": "YRQYiush2mfzufrXgp9y7r8vs7bKeboFfamMf65MRUqzvHyacCA1MSwWPkiodj38U3F4yt8WPTEiZz74dnTjNa8",
  "key16": "3HFotdr4jST4ETDbrgxyM2QMTDenSRRmS449sAoEMSS3gmkLhpbujwXvbrN7Zba6rFj4QW8kqvQEW1qxAqMUPVa6",
  "key17": "2pA4eYhjv7Eh8VEKgbUihacvcdCHim6DLRMPvdRuhd6iZ68vmnY6FaAcTENDn6v7Tjz2UtXL3H5iphTgeqgymg6V",
  "key18": "2ADTJAGM88UJR9VRiroRKmyqs3sxi1a72cZw9U2DyBkoC3f3V6e4J3etEQrhQBPnDAqz8JPYKLoKiUDKqw7a1Piw",
  "key19": "uJNghHy4oizU3tA4cZ4aNESexvSbyyZDtmEeTteAXRWBF8uYBcT1tSt4ToRa3PvwvfxfQLpCREgn3CLUGsUNJFP",
  "key20": "3vAv925hPNVWKdaiJ5E7Eg9Pv3VQYKTKJm32rYs9nwLBnaznqmunYUMxMM2XAg3VnydoqynER4JYiaTXm5idFan6",
  "key21": "2V17kNcMf3FEJzxDUjcxkHrkA2coKuv4VysV1e6P4HBwPwAQ9TFVZTGea1uL2NGVURv8vbvq7SikZanJJn8Srxw5",
  "key22": "5xZw4TjCJs5NGd8FFjmvdzYJNTdYxxgQBr7mZSes7D7THW8VDvVnk7ks25jpATjTQgU5ehHTcLzUGmhXkHfekbEs",
  "key23": "2fqh1PAY5FCPdDyZMEnqk8ioahrXsoFbpP7aY7iYR1iSf3GpGmo6NRsewM92nHZqwKqNNSeoDunF52SXAe7z19H9",
  "key24": "2NPreVsgRkfVqjsMwpXSydR6RXzsndWaLmJYbSTbLoUEE5gY7W2TTom6fB7gegk1eBpda43F1vNiBEkE4mqRQL6D",
  "key25": "2do295sBCnEiwja3tp89Vhd67dwE2Gdkg5zSr5mvtgzbhv7edXh5o8tnKLkY1wEKjtxsCsqwvvDSvUKH15Jezvn5",
  "key26": "2hwb22eXDdCbM1Wjrb9omLyNzFtTkHcn14HDnJ9YeA8Brt4k29a5k3Qb4kzpkKABPnoCeasNTJCBrToFi5K13gQz",
  "key27": "2di3aa4zb8KBFApq2MqJUsiBgMjKXsicTbw6boj1YnRrCA6CvGV13oxGBwzWuypn3cEdEh5htsXMMYcj7nT71tUg",
  "key28": "2vpKA639PWZx7XapLf8mNpd58oBS5pTCifSyEgspLkgpGHwYLqj6SN4BM1bTyKixh8quwfbSs3Dch3ARZZBzFMXy",
  "key29": "3otEcFXojyjkiRzY4esc8R4ApDhRWp7CVJdjqezQD2bhAdWt1MS1MnWxpnvYX3xsJeKKVtEHRUSHWf1w2NX2zKsk",
  "key30": "482rzwvCgxyJosS7J1mgMx6QA3J2SY5Npd9rZhyYiTrC8edwdXFhYjJDt8ygrf6zVPohSNm8ZuGaCuy2atTef2FQ",
  "key31": "43z9kzF6LCSh7saZjCEdiJqeBzytsPAyPMcZ96XobFdxgjJXwnBh8YbxPGprKRvGA2WhBeRxdCJEDMsLyi3W5nRq",
  "key32": "3oE7NQMDmGoWPKbS5bqSjvpFaWZxQkJh4YB3moszvrgMjR8JQnbkHbaCUBxRaVfgJPZpRgKGWbCc8m5hMPgwb1e4",
  "key33": "42uuVPZZWKGH3uMVAkpqHRuDUjHcGpp6rhujMB4rxtTCMKcqhdRYwGNy1DKJnMdybWpcf74EHeDgKU5EM2Us6S5V",
  "key34": "3LSHu9sU252YzH5FVxSVK8dWA3rKBVXKB6P5Ymnsteo4DdvrvJPzAVKX6guhiGn1ZZ8G5BctN9JqFeNTCH9UpCi1",
  "key35": "QHxvVtYJnTae2M8xc8bTbxsN5JiR8iiZfpgPN9PHah4JcM38rnDouwB5rZ1N6hAZZupnw7qutEJqUaqXEPxUhS4",
  "key36": "5YUEhXTLUHgm7itbiAWn91evjLtBnYGDd8b7gDLycs7C5T6UurNh7SsSkCqZgoPnX2CBfxFmMTZstJY1trnzuqnz",
  "key37": "97auZ6kYYBqNdmRAW1ARghmxooxfKwjVCaQsaJ3smCKvRpbbgbpk3a89d1uGHzq6NsRYfiWrvXH6Y3PMbc1WqY8",
  "key38": "47k5nQT14tTuMbT2kUjVujH4UVVAdDpjUiTDFSYbHr71wDv5umTv4vfghobRaidrpp8TqB77gahRugWfVjkKQAFQ",
  "key39": "3QkN2VeC48xDMXxkxG7BRd3sgREdE8Awz2guGc97drhDBgHgXjreB5425d3H8JkmXQz5wiRr8X9Z7CPZPPWAr3Ja",
  "key40": "5hogqjyP9iS8g6y5Br5z8sYJj3QGwQSpvJZU73kEpMGDTRJwhNQauB6sAGK1xWNKmE58sY9e8ZRsUPmngtGmjWrn",
  "key41": "k59fvtXvtPYtwBezDf9MPAExkZtcbWR1ceE5i9k4ukDMdHCFnw3SLsF2YLDbWjy2W7EWJB3HTep7XZidDDPayqc",
  "key42": "WTBk5XAx4XBnFhVTEiAf79QFqedELbDnusQDjSDCyTbCY8N3GxHQyeCvssGE2aHofz8Lkm4uXJjgw1qhbzNYi61",
  "key43": "4tqpwnokSJfiKjLddAnnMVtvYbpRY5Nx7XKYHbKLLLahJUigstV3Kca2jad81FxZpYRHRGhfyWXEExHZ6TTLy2mq",
  "key44": "5ryBcLZMr3PvAWLck89xoUyKHtQp6myEkWHYhim7pW7txmrf9yFHP8NkC698sZ3a4oKpKZdtmeqvWepHKDL7KRVq"
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
