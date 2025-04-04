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
    "2suxTeXzp9SMCnKFfjzXtyKiqAzXrtJHWj7JVi4r6BYECFf73KpzSULMuQbiLjRERc5j1N8R3VydXiEdfhZkxviE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wCfMvJeLYz2xAutCotd7CZpj44m9qnWqcCyyLPpyBaFqwUWcZKw7yqBkVJanYaBbAFvucQJPvbfiNhvcWhGhSbw",
  "key1": "3QjSagi37fzBqLMmJ287E18xrFtsvKxknmdftZcnA11t7eE1P7pxhUKUPzTCx1GqrSRx4deNxcaufd6yEj1GtcJq",
  "key2": "2HFUN521xdqweUmH9z6MZ3Dk4uLNtRknRfKHGu1QjrwHyrvDkmah9oWrC311DttueptTkhJPytRrh7q5nLCU4e2N",
  "key3": "3icBEhbpiz1MRr5wFJrzWsX5FxyZL5kNGaHCn2vBPphx4JaeKjdn1HU5tgrAPEuswyp8qxgVRZkqnoCf6fa4gQz3",
  "key4": "3pq2AupF3ZcPHPifENKKDG1XSeUBzeaHunvrBkCUSbqu66Zj4Vp8i1TcH65w8wMLZfmCkAjuztU8VBZrMa5pTYp3",
  "key5": "3hbPRxRNUuVumtBK33jQ1Nt62TJsPzYMKRmyu9DY22sVscknq5SbpH59jQZ66cke3XriJo9JPNEeemHx6rwrzgdG",
  "key6": "2UhNxHouBX5wG6QS5YHg7HcVeta7v17CLKm6MfLKHAq5qfQ7fMxboSKTWRScnrXQcWpsv9nn94ZWyTgD36L5eUEZ",
  "key7": "2gdHqs5DyD8qxR2VoTjdvv3Cmdwj9b27i3XNE6mGfsZPJvwksw9fFrapaN29nTFNU5u2rJH6wDCje3RDTPuMKebT",
  "key8": "4gwi9otFnWgBAnnEKVsEE3JBsFgLFdMqEDgxmR88iMS6qphhWiPC4KvsVnWfT3D5pQ799W1ESQK7rSNzmYRYQoUt",
  "key9": "5kzE5zVM9eeKbsqEwTWiYmCNEmrJPiJDyEw1SLUqfCuRnQsLrtcJcyqJWi5QJDxyPNLe9TxtbiAepbpTdzzKACyv",
  "key10": "3Vi7a3ZWjhd4FfCzo3jZWTDk2x7XcfycAwfnVHyX5fjK2V2ATd5ExNUnPY8dVi3kAYSrYrcZUqnq2jTYMJ791Ga1",
  "key11": "2LQ9Qt9dhNekv3MPrmygX3Gr1JAWpLRgYKGtcjYhPNg78v6KoG61gjud15WsoyXG3NrBtFJfybXXfGfTcbTmpoWS",
  "key12": "ikdxnw7N38oREFmunkgr4Es5VUnS9o186DfKgT6swz1ZdMhVzhuJDopSjiFBeRNdqbK85fWA4KEg19j1zG2bZ2k",
  "key13": "4SYDGgvbZdVTiaLreP2XJ6XdjDyegXVK24KxpnqT2ML4juWtnz68LG3ZUxB6XwhG78kvnwf6Tf38UpTbSoe9WzUj",
  "key14": "5hKcAsG8EkLjzbT2z7bi3Vacew2ujjVnvzHXkmwQXUcdQhQotTQe4rirJeq8LVgkPb52Uf6jvpb78TX4EqCghHnd",
  "key15": "4rM1Lw3QZpjXLKmTEixRjg9BkfiQ4A59ErXzXSykcPz5CLdEcVs2BiMdnhyJtexMqK6EM9LgycEtjnBj5t4tcTh8",
  "key16": "22WZ43fDx7vU1EsijGCDbJXte7YVYPPs4aKKpKq1mDVpBqJjoeVrY5sEzeb12w2ZPr2j4pij7TPN8sQWK7fCEPgb",
  "key17": "2ue5esjAi34e9n5FiCrBpy1tSYEAs4WCHCvBuNiArRRBXRn6u3sDFNwGsJcPnwHJWTeceS3efStJJg7dWZxmxGXx",
  "key18": "5pcMgr1USEbHJBvVCVLSJvgqG5ZQvcngCDPRkY8yQXjEuKfMPYCRBiF1aX2PfMmFKAhPsGtJeVGyMMd5gMP7aGfb",
  "key19": "4hNseT2kCjr88qu6pyJhnE3zM5vjAU3z7atHzjEi5s2pAMeLNapByWQtg9ksggz2M5t2ZHLyNf29DPjuSus7BS77",
  "key20": "3FPhvoDCsVGsgnRnjcdzSGJN7wpPLP2woPCfJ3jUwZa68LyPpMo4b9t2zeYxj6y9GEcNnVNjVezRnYoJd3WVA8J9",
  "key21": "1uXohcmadtyBuBwhEjKL3eb3Cst4fw5RMfdgveKn8YSRF2o5ZCweKdHGRTdvcqZJoRNd3LiW95qfSzqsRCwCFgY",
  "key22": "2kSxp5nJrNou9d2Vp8dKEZSPt4Ay8fYwMwWHjAuL6zKRtv4De7FoLmKB3dio7ga4uhX5XAPdXidMTURyMhSL3uVH",
  "key23": "orGwBPRsT4xNHe5wC2TCpoFvhv3BGF4wALM2ke8uRftDEqwwcqhhdd5mdbn3Vvs99sCYtUtdNRMH45QTYcShACZ",
  "key24": "34EKbbTrzayeE1uSAZhwb7Tjx53WQzNJRZD7M26dKD9MwnFDMQwGpE32a36JQPn8HTMb8wvZEupJ1CLDM2Xm3KUv",
  "key25": "3ZjLQb9Ug932GR1tNoQgdcnmfRG7VZ4GVANHUqS4FsTpKUCdjsrjbdGx1ciGZFy7d3Fzsgo5xfRXrnaQRTLtuTwd",
  "key26": "39NEWDyrtUHU2vtNSsaruehcMtntTB8u945HVzhSJgAjxLxj3n3CKLUKP9hvLE5X3sBVroaQkKYjNciF98EK5eM8",
  "key27": "JLYppw2AAPWMomu7zhokdyeyQntmkTz9pNVCJ6HCz67hSNDPCbDWjAkv6WifgXMjCWQKdqkzxDxL1z6VdNsoML7",
  "key28": "5TCBb9aeK5Q9Diws87JeZvSTUfM8bzB1GAg7N81dM1xFwDoeeBVaopGKh6cAEEQu1mFfHFUXbRk2NBVQMnjiX3Ed",
  "key29": "44vurVYFyQ6tuvZC5X2NhWAMNGGi4T31mteRw3tRNYfp4ShHsch3UMArFP2Ac2Xb1qFhgy6KzFLiL1LYmpr25hKw",
  "key30": "5tYzcQTXEaMnrNCJsYDqsGY1NpKyz5w9B2xiHncz5zPmv4Jkh9UHcx5bEDgL3YmdMDjVLhTrbfatGq1aR5r3RMJA",
  "key31": "kZAMtaKuc4CTwbvhYkL1y68GKWCT9QLopGUY8vP8gKB1bDCjSWRtEHUJQhrBbEbKk4zmNMtPQjamFa7CnN1Pgxa",
  "key32": "3hhvUu7foJkQHyyLjav9UqXcjoik662GUczWGBVCvYkRwWUqpDBM1V1pnsdaMCPcFvyRMTs8PXwr5FPavmN4trrh",
  "key33": "48vfuBUJxAiT8Hx47X2vzPw8cSczU4a5PVdvWYaykVjUNtYwKRwBjiuNZ5rVUEztxvsEALJ1kaW66Fw1dr3STsui",
  "key34": "3EHSfzCgTEQ4bTWy8Ew8nc3upXZXY8Efcf64kyYTdmkF5pEjUuDdywwZRTYAHXBs3oHcqXvZUN9pUevkZCH4Aa3Q",
  "key35": "4phtMwFTzf7KNcBfWQ7STak9betzmLexhDjsZc2ydWhbcBWiqb3SocCfuFfFhBYx4vFG8rYD4ofRkTxNajTxiDMo",
  "key36": "5JjcDxkvV9BvsPGYJ5P18kXHCB6PDCSN2963b6FdsYPkAU1b2BUVYiy36ojgS93SnpKzFoUiaB1isWE6rPra3MCG",
  "key37": "4cXNH8yHrjZAY83EdeTbx59Z8SK2EctJnvhysavYL3pmaQuqEqeNhPFCF8k3mB1v5Jzrk21fBxVZbKeqJxvwkBTF",
  "key38": "3XZFWYRtwmQaUNeLcgxw2UkwLxTng4SA4hmeavw5QD2PptMzFYA7xGf5hrXR7rAPQTXxxnsA4aBumn3moBM5CP8M",
  "key39": "26bPKzPib2jfBFeobaH4d9jHrDMPbYk67rRAqwx9KSxrKHh6uxSFAohAhF1Vkn93XvY6cox5nohoCtbvJRQJci44",
  "key40": "2GaSw6oqtvjgh3bW8eWKs6EuAzazkrUJGxQYtWJayYVptzfTiBVRfyKkNMmxqnDea4MoXQ2HfBiDMZeYRdeR5GRn",
  "key41": "26TYSmVs3TocKADD5dqexmwgk3zw18Agdp2sKHDPc1faVKo6eMZYfmhpAfv4UzrMvLYmXudWTc997qxvNyAFnT3c",
  "key42": "5jy4v6EX98CTuC3kAzuVweDbs79gKZcZaQ86HN16q1sjk2aAkzs6MMqt4g9qPSSUAdiPbdxT8vkAqRPhXQQa6Fta",
  "key43": "5CLKBra2XesZw4GiTgL6kr8yw4X3VLi5T2JjigSyoXQNLV4h5qw9UVGdTx3ZGaX7VdRGbcT3vrqNFoSG55xgvKiP",
  "key44": "E1Afh2PrjNc8khYSg7ndCTCcWeAYnToa2YWYYjPoS8QqKEJy3cyRUuJFWV6u4hF2MoSnkGsMLPeDUqcxjYjcz1p",
  "key45": "5ATRpx7mL7FDzoH5XmnuVAp64j3mjN2Ttpjx3nVAWgyaoe5G2LBzHgWSQSu9dr2RzzdHdRcuPeLR9PvbwC5fEZM7",
  "key46": "4u98aFcdPT3jhmMLN8pMGfqMBxcqNJBPGSoc1rKgeT4whTZzRokAYjXDrxVC5Cam5cAz67nopmn8vs34CXoQBwec",
  "key47": "4JitVB7vwfXh8CtuaSeSNJAPnq9nfXo5XFAUh2rkHCgxVaLRp6LrC64r8EiuG6aruarGDpjmecyjTi6sSt25xzoh"
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
