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
    "39iLphHesUhSNAay7Vr9eUv2HVmM3TGFzgg7VqjbVmaKsw5fKrVtPqExp6brB6Nm443cdA22wm6muHThRqT9TD7a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AoK2LnX5GLdWJLNtanJr2m2oPjoLHsMoQWzhCpFvQqzGUpEGKTbg9uMB5BNkfxgoojYPFvpqseHkMDgLYkSF1Qo",
  "key1": "4i8TeZ8CLQAUsdDWSrJoM5ac7TpruPNQMMmMhobmLE2tR4XmFTmc7Y1J5231Xwoz3RRe8yx4FtjiVjyVkdGAAMAB",
  "key2": "bKCrpTC8gew9YtZc3Kt4eFHjEvREWrvrRd1EvyoDERNEeijfs7ozXNGvUEChiie4Z6QQFLzZqRnrgHWNtEbpuUz",
  "key3": "5RjmFFJmqYNv7fc7GgW7yTm6t66B6Qix2nsyiPYEZVQT8ee3jph697fjd76VLGzFw8KPD4dh8sSqRuSwnTq3b5j7",
  "key4": "4gozN2VLfc5S7XbkC2uBfHVwV8ESLugM8RgdBW3p4bopHFhho5C992hx2tX1BA6feYZZSa5e7Nm1Hb1sVspmM3Vq",
  "key5": "cpM5L71Na4dx1FA2JJzEigv9KqguVJVQKfemRDoZmrHWVYdnwByX8xxFLf9AqHiB9GzugezS9j8R2crcgj8dUzm",
  "key6": "5ua4z4fmAprUk9o1nfdLuHRimt2cUQerqMuAhbN8MZbehbWddTNbcpN4AVVJz74t7XJ7E7sD23KQa16yBVVqEi5r",
  "key7": "5ZJggit3fSxyk2DMmtAHB2fNYH2D5NcSLCzrKE19ApfjNnRuvtwrhFyj4voySCUpZsRtmNfYjx6ckz4SstcJwPYf",
  "key8": "3ViWVz9UYBvgSLZQRqAWgJARQ7pB8sBwmywivASErjiZ1Goye5ic91KRxzmom98zdMmQ7ivH5ouKQSN326aPD4XX",
  "key9": "5F2fwAKGg3K3mFhNYEVPooNFb9BZeCWCvss6typcSHucpJaqtHwYjYMo2vwMDZQnZAfkepcdGAxENW2W7dvHcDUt",
  "key10": "5wSWn1GdaMiCehWeRRSoPWkgQUe2fxW6eHY15Zko1PaUbxRqiHiRMhUnB4cQ1VHCNZA2rDjDFxqtar7KSfSepfnn",
  "key11": "5xYwpHyo9rXNrr7hJkuPQTiaji4No8cmCKVunUrL9sj1VdpZcnJgEdKTnPmHdjFWBwYKFYG2BKxTgtuNhJdmkpqd",
  "key12": "5Bs3iage7bhFyVcjDZ1k5zu4Y5gq3eWjZcdvJw5LFJNkotUJsQiU1PFok9ViGDxGzk2oGkHUjmRiJDHhYEU1HemP",
  "key13": "4Mwto1KUZ5UvqhamJYJjoozGDnhjjMv4kd7Ljmow9tQh5VzXmeZyDiCZUbBg7BLuqqAcJt4uQ42FCegQKYhtVzD6",
  "key14": "KJSFLqsPrTocej5DYohA12VERMZzBNKExc9kAmt5oBiU6tLbyq9SYvjsL4AJHQNcrUowA1YCYaqoBFNp5b3dnak",
  "key15": "32mBu4pxneYkibwa69hXxUp79egnFEW3oF6zHExnWebahqsAHzMUREBdwihG9hinzsD2FPKj91QYG3ChDj31yExh",
  "key16": "4dLp9e8ZKH6WGTTTCepjexKvZCbRy6bmNCsyrMqC6S2zaUU4XaTYJxEm9iNZ67nQpwDJhFjwwG24busD4AFqqzdW",
  "key17": "32GGHMzmdLcmsxKMmFapPF5pUJHKtv9Kp849KKANrjgvWJaN1QLp37sLoTH27YJm2uA2d8Sr6ttqz5y1BcxMwedX",
  "key18": "3iRre1Xbw7Bwi9NCEG5kv3rwN5y796fwM9uzsSdQo4d5eWaReMBtP7vAP8qXpEYXUVduTaRXYRH6Wf7kseaoQ5uF",
  "key19": "DGiR4qxPj1KViprrpXrfZFACVYGLLQauxVZbGod9zbzPiU5b2d57FkQ7rH7sqH9uJ28Ysu9pGJFdzehjQSVJkPt",
  "key20": "XhLX1dtx7vcbGmYkt2Rc9WLsaH6rzc2o3xbjgu6iYgb16whPa7gvvDLaEfGPjmqEWS8FUwfpnW5hGEo3n5vV6iJ",
  "key21": "5dm5YXUa42y4BLMa6fLiEpNsQi8hUMGg72AwyxYherHkNLVFneBYDSPGh5pvNpDfmhtBJ4vLqYGSB1Sk4GqcNoa7",
  "key22": "31zC8qwi8uAY56j5gpRchYjtwXR65JxzCASfhjYnNe7RuTD275bMKDv8zpVCMgXaczzpUJdwiGCS4FofJG6YNjLh",
  "key23": "42q5q4mTmCz3fm8TJu79CjnQgbT2xLon8KNmPE4jkyYEskjxTjxYP6KaNjzgYzjN1LNVaJ2eJZzxCBjdXsSHktB5",
  "key24": "3Q6XpKLeUwHRsroUar252kPxvb6qJ9ws1sRtCSRbzbL9meuT6J6Cz5wYzKd46dsHB2T6zwTntMD3XQNGYgBrYYiY",
  "key25": "2xCsW3V6eru3ShMkzZc2SWvrWSgFJPG9gx2r55XrCfy67eppUjfabattHbBqwJ7uzVpPrYQaif4e9WEwrRGUFrNc",
  "key26": "YbaFAho5R6wwvkQsqeNRRpCcosWx3aNQ5oNjphBSmfY3iur85N3bvet5kPVzE148R8ZfnEJ4YxaK5HhAfheq8bQ",
  "key27": "3rczC1bBhYRnbas6VxxJcT96gGez243HANUXG2Td17waHNFTFyiLT4Zj77KhoifD1LPQrh2Ymi7UEUJnTBETx9SY",
  "key28": "4M4iJNVcFvLo7uKAkxxQA7a5Ys8y9darbu4hijwM7Jy5EDGfi5mKyxmjkzWStkS4DMVg5aFGauXLupTUH1wkE4cX",
  "key29": "62MKETCzpod4uQzq3ghvxniXPSwWyQFxbM4L7b9rnLwYB1LsoYY1kTrEFCxk5bGhSagRkHW6zX7tBQx7UmHN1zKm",
  "key30": "5xvFrKeSveC6wZSqaBoRputkZqo5MqLfsrWfMtq13JgLDwLKfLz6LY74rNagFMDW1RsPFgjnSwDEf73pSm3xH1sv",
  "key31": "4GFpicgaBcXJ3DkrrTuSnuys9ZujMRc2QfwGWmWnudp9EUvbhuGMSeVNSjLkgtZiydVXsreJoCaJZnNTAgyfZs29",
  "key32": "2cihQUXg974q6aJ2aeL2c35xobjmKDo4qp53QNjdDN4b2WLbk4PQRP2nbL415xVuCz21yngUdUPYRaE6ij7xA2ZE",
  "key33": "48tACX8ZW3TdMxLFfKg5qQzEV7UtzPL7d8VbDj9SqyLR1x81jWT6s8h42rueTcAK1pKRBLDMrcHdBKqayFxyxJmm",
  "key34": "UTw4qUnNRuC8MwxhpcUESbYm7CacY472zNNvKSEfKoMZMK3GcgFdpWL3q6UxNkBWRkDYHLqthg9WKgHV1PcWfU3",
  "key35": "58ANeL9QAMBbdno7bQPqCBweCU19qqoDhhiUeChNsZmK5AhzQMfmEtmcPEgmpHhiKzC8w3x1mbRTPLTtvsnAfAME",
  "key36": "45XWxW2RCiLEzQrSwXJhr4o1qysCKv6RMEoWh1ZV7CbzUuFba7NhcSvhKc6xBEn3DosEhSVTboyAWH647ci9f6Am",
  "key37": "3DGV6gPfZHXCBC4EYzDGiwQ17xCtkkL3QDer4r1oSV2ktEULV5fefatZqESaoBTzKfAjBttMPsmbvSQooyLtXtqY",
  "key38": "43TU2C9bWhcYaG5v5FoEn3YmKrvejU8U39ZKbA5Jh1L4xyRf4n6ckLz2kkX1TiPRGCbL9pHHwyZ2kVBpM61SJF5N",
  "key39": "3mEJpPpMpwCiqYD7YEqqCUZZ4trSVdkCrNhbTY5CmuFgjYiCsmNZk5wJDZuBqZTo1aotTVtujWvv966UPvrnn4F3",
  "key40": "2J29SXy8BZQkXb2q1LL2b7DYFKrJMwov6di4jZQheZYQYBubJuVWgXaSqyEm2L6MwHHDUUpJyi8Qq2XSNS7ZyP2Y",
  "key41": "3ooJcNnppuXgN2QFEAwv4JzM9QdmDWhiXDQpnPq538tWsCTMLe3eKwx82wDFReHVtiPHeEBNmAc8xCGhHcQbqVTf",
  "key42": "3g9Mi23ZtRva28fHTY7k55rtYSYb2AAhLTytzX5a1uvGitGDaq7aPqDini9oLqKQpGXsmGKbAwneuXnhVrBq8djc",
  "key43": "3VQnYTX69tG83MV5b6Qp4KBN2jg1W1HB6gbdTez4P3LFphboiGVt4qvrpFFSdnpHejb1CjMChvTT5xtW5XHEyoBa",
  "key44": "5AG4sVWxQtAENtEDShm9GhFsvXbqgBF5koyNYWgSkXpY62faBCQLx4kLX3aXMoxnBjRijssVccbkNkr39y9VrfvV",
  "key45": "4AFE3UXUSMxYEoNScLswxJrrLkfLnjrLiVTfbJLAKrCxtebhhwyjynrF4sdBtxfZpW3Gk2u79DUJyARh7ooovgwC",
  "key46": "2Vk5DPpVypvPama4spvgGw61pxaPdLx6BmjN5zaqsMCYwXPgVFci4JrTNeJJKUH29PEj6xzaiExr7UQt7YE6dmXg",
  "key47": "3959wxJ5kotuBwZxw9fe2kGzawYDpuH4r7jbridSmrXdo2smNbFxzUiWQnBXRvYdG849rWjQp9Hrf2XsGup2CbDa",
  "key48": "4zV8dSk7KBWt96oiEX5hXUw4pRekSkBg8Bi6XkQDZKyWDPCCksRSHVeMPcbrNpkaJcS9n6AVWcCpwjKA2hmzQRtG"
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
