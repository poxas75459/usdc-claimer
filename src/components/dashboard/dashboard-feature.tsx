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
    "2daMNy2LPYztredJboF9abJ3g6wmmT9EhAcoFmGEZNJTJqk9m1xN9kC3haxLkQdjfidzTteAS7MrJf5SVEWoNx9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TRCTP6kdbon8qvrpDVXErPAPUoLKz5Xg6hHhmxY42jaGZ9qYNMvvAjDY1bPSHSXnVxnQCBQDqHwQSnP3BaAzk9Y",
  "key1": "9vCiSTRjoQZW1zBizEXoHy9fhcFuu5pAFAwT7mWHEBAZwJpor3NPrcHUZGSHchkBwMCD44D3P6NxWDJYfcmAj8q",
  "key2": "3Fq6FGpArZcZng4YHFHtj2eZo3JuBNwvbKicU9Ac1hxWcqzwEvrZuqVcb2pdLWbq5Emjq8KiAQ3Kv5PKt9qmcTmn",
  "key3": "B4RuVGC7RuBYGywnpjr7hfKQNqUrJ1cpKZk9fg6qgRqdzpHDSAAWXL7Nqg9zVcettS7LM2moj6tEZx9mmEosAkX",
  "key4": "2DxRfuJkqgnuJkyted9K82e8bf8SEoPJomAPAKnzJYT25wbPyETMaCH3FwinZxx7GCU7VUYkeidAeJrKBUFcm5jh",
  "key5": "2Hi8zE4nCi1XvwFNZVGD99XfttyJjbS8sDxD4gQvLdryXyASqGQ2Lp8QyiEsPFxVtyzbBfdi214jib6bKKZriuET",
  "key6": "3Zpjs6KfzGHB9NDcAMZrkY3aR8EjaGxWDYRJMSzfDE6Zuny3G2dPsjD6hnk8GXod72cYfYKgftULf5vaXwhKHS17",
  "key7": "3DD8BoZXdgAEiZaCnVQnAd4VzNMYT4NFaU8SCsHFdfcRqVYL1Hm39dbQS2BoVw43BnM2VjssFvjjKQVyDA2nQXBp",
  "key8": "5ufMUDdS8oTAWo8m91Hkhxb35gxwFoSMwKk1V7Ms6ZkL9xjTZPcr9vtxTnrF84zaXgqsNVfJeeEv3s5RxQQmn8jf",
  "key9": "acbJc28JXNGHxDUzuo5W84SFR9zQU2cY4jNVrWGXxsAQvNyKYmVQSaGw6EqRioyQcHqAYkyVzWMag1f9R7AgK5p",
  "key10": "28robYD6VmrGzMkgsuBB3fM7SaRbMfx8wfZ3yZT6kSqahPKBe3smqmexQUCezeLgy12GRwwegBCyM8bTqL5P1zg9",
  "key11": "3oWE4mXkyDPiXJtnhC6oTsBRsg2dPo8prkBt7qY9eKqZQKaadDnZ1GDTBwtbJgzEiGamq9Qr3DQYpskH1JPkaqgZ",
  "key12": "2nEcAXHkEiBpTiorQkEdgZeXK5RLXXKE9mWTnRPpAfMvFEVpBiYn2aFstkwAhttX1h4XsVrCof7tuH4zohrQuRSW",
  "key13": "3P655zafYxurmWPqEp3XZDxt84BYaqfzrXdTBdXwqhw1zBJemXFtNx4Q769mSR65eWMcfGwPkpgL3xeJjcHxCz94",
  "key14": "5F2Kg5SViPvbYdhWTnqYDTe3s7mchj6CMnuwRu2xwLMkRMxvetK8F7VU62qvkyffdzvvbJ78d8xybn2QdgP3217L",
  "key15": "5MQpPo4DqB6faamaY79Pa2nWuCQaxnnxWiQjTJn9p8S9AoRrFeSxtSY9uV3EatWVsPUJJHn16Fevz3dDTx7MKFrX",
  "key16": "3shq5zHBpZRqR1VKRDNPF3jAR8KDu6pEkXAF84Xq13Yh5sgheuXhg3ysqP5W6eznJFi7LHdVLJLmxepbTCvpw7iA",
  "key17": "4KJ4bc154uUJAKkC54LYqwi97QTeUn1CBWXRN64GaeHY8Y27u75uiu9pUJDsgC89LJdGxbDwL9inZVLK9W5CTURL",
  "key18": "5aGBJoC6FstXBBUtzLzKdPcg27DKep4NvgKwneH6b6q7RWYCwU7dCes4fY28DBRbMqtgPLuU1v8673KfZedSYBcN",
  "key19": "5W7ViUL13pR8bPC9P1pvsLqgPDPQPWqvsLVMtEneiuYN41gMmLZeNrpr8QQPT4LZuficb75yuGmdWPduxP8BnyR1",
  "key20": "4kMDvFunoZXarHtah8EqRC7guXsAaXJFXBMXB88xqrrxKRDAcu45uEV9uyq8UVKcJCT8mg9JVU7GWjfLdm4KAJeF",
  "key21": "5nh5Wgwn4CkcqyidiBtbQPhQ3gkyGzNFSbYSmdUpeYaWoy7XQ9KWwguW8h1H264epaB3qBKsKhBeuDKyDhNnwDGT",
  "key22": "4v8RfFJ3JAAkiedetgLtF3iiWy9wogucsGN1y6Sp9fMtQQH7Hz3U2cPnWEPBx8H5m2rBQbeiowecyLXxMjza4irv",
  "key23": "3TUbLiyeAQiLtmk137AB1z5n1WARMDdSQPsgwVRPrhrrg47RgKs1s5L8sqmnS4w4gNdDsqJgQqnwhH6WFckbSqDt",
  "key24": "YEiRJNTo6Y8GWCv63rkjkLqX9ta5ajhKxKrvz6JogobgSKiCGuWfX73cZNhR8i9sGxULpWPSUkpvdQM72ZyyXWg",
  "key25": "2ujg64LmfwajrFj4Z1tHDxD78458yYQwB4i6KYr9a22zhqHQXa9zcCVF5mbQFRjuxfyZP1oZALWotpMHZkprTx5e",
  "key26": "2y1PkCHkn4xiTXQK5H3AzsTiENgk2YjcG2fohRFqQYLtwGH9KYnNBbwaDuZZwWpNg9SGX9fVpaeaa78wmZuV9bHK",
  "key27": "397aeD6zittbszzFshUNvCo2EYfQ8dgpSVVMmiCQqtQAy9jUP8hFSDJgwfbSLEpo4JSU42Tr4pNfsspB2cr7a9Ad",
  "key28": "29cwkksLnrhDTFcyN1PYXZir7ScYZ1hd3wgpLC8TU2VJj6WscDYX1nctxdr367q71gp9uncdKRFNUXXkPinYaT7p",
  "key29": "SeFsz1FawadUfCAuzwzXYjJp3yX2gAgbxkyM9dQGoeerf99rRoiCZ9AFYzdKV4VWoAR6rMMNm6dzR8ALdii9V9e",
  "key30": "5VVE4djKRramAUUuyGcJB7xs2GRHFDQX2RCb6xWQfsqTLpRPysGUxSyQac8FsLNYKhXbDzP8GEJPDxFLpR2EFkWX",
  "key31": "496xk5CXmptB39mhkeJK6nYEN4BD4XasFxUfwvLhtiwu2AdG787NyDWd547wzNyLpysFiUbsaFU1asiagikS8jdH",
  "key32": "37swAwCpytRPZmgKHS4wdeMgyXyMEt4qv8tyF1FGnBgWET7QhSSinqu1g7hVJZYSXptYQ4hHN4YUwQ2Ncpt86w1a",
  "key33": "2zNsPv6fcPckXAhndJRPd2TJSm4Xwdgocuc8eZoX1kxwSi52XNVhFvYwePYZSSp8nMpnn8q6edqt6eadm17u62Tf",
  "key34": "SzyTwhZqfjSu5dQQDddp6MR32A2cfsBfnJpabKmrroqhbckmGoWBCJpZhQi87rk3B2dHDcLsaQ4UWeTKe1TntYT",
  "key35": "3YKxTu1t2eHSxNnHvTYsPc1pLCMHPuEbvQ5GZUqKMZnkTCsuTukkrfWEaypKQi66neDKK7yoA5a6fcVurEpBAbXH",
  "key36": "3L5J8XQdbeXwoevqhCA3Jm6TJ7ZnhxQKPg1os3MhHLQzZ2cC4nzm1uNc1hchBYrgrThWypWbKLU4o5m23bZeko1U",
  "key37": "cAjMiHRhWpqXkaXD4mLrFCBXuqEGN8ZutUavLDVJGUgizd9o99xzf3D1vNNvXST74pzSbqZ5FbNvWRBnvXfjzfG",
  "key38": "5VXW7NNwRZw6pRgSNTynRfMPzpjR3QX7iqPT5DrLpQfdRy8QHDMBgW7dCQX63BFr2FufWoe3hGzYFTuvwvjv3YX6",
  "key39": "2F8jBBBQpc6zZMu4F2FjoGkKy7JEkcR8CVNuEvYs8EDvpqeUTC8MAWPGiQgksiLnR3k7GBgJPg3BM3N7Ttyk3DaM",
  "key40": "U75YyTuZEdAhFZE8tqB6eMGUTKrUt5BEH2QcNu6YzEHtkqvwqTpm3hprTizzTggi6m9QSAMiBHbZFirpDaUHEkv",
  "key41": "2ZENqiEePKQYQUTBHENW8PPXSxTPYenGPemyRPGQm4cYDAZFzK9ChrVu5y8ECoDdGa3Zdp6oHRTfwVDTKwWXQ1DK",
  "key42": "i1bxAuzcghU4r3coheCib8vxrVmND2hZRUkL46qeMwG6oScEBdFKWuvPKTgMkJNokBGjwgzeDp5TfnZaVbzaw3q",
  "key43": "5E84uCe4ezEaE4FSGHnXZozmx7d6V3znpkqByDiWmE5umES63i32zbXxnytrSqB11PowPFSFrc1AqTTwasRwyaRe",
  "key44": "5RrvFhbuSSb6Cm6wfdW1Z1bQHfYkvGu7sVYytcewGkcXLmqtr3YCBMAb3Q15DrWmuC9cy6bT1FqDQpVzL8pdQTZc",
  "key45": "4PygjfELhDrT9ddzRpEQji9ijPBPMPWzoLk2Y7ZukWX7Zi7pTHx8iwJy64hYNv2VRALJozBidRiRrLCRcCjwXCgP",
  "key46": "drkP6ZKUqu4mpMBkL1p17G6wrHkMdBPBYZPoF4ptHNc3unoTC6QJXrcmj3XqXA9JJFK1DUPjVTqpAEtuP5skZWW",
  "key47": "47duSbUFivh4KKWXQgpk4ThQiUCz2Fk7jJKexoCYAiNhJiQB3ZF3Actem5EdD99M5Ffp7FoCgZzxYisLX3Vo7jKF"
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
