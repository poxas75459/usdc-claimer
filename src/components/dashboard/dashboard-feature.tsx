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
    "4WN1h4hGZ69WsZLy1KtETiQzi67Thr5mqBNL2PNWDvCCTY3Pvuk9nUMjjMkTCuhZMwQjyRpRUVWutveNydMBDCgN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eL214imjFjT4yzzigxTM9PFvaDgUxyuVkMcEcJCcRj3KRWVPJsqG5s5eUBTFqa2STSgfoshqRtgvouvzD9c64gP",
  "key1": "3B2159xUJ3Xwkvv4Q1kpkHqNNPM1TznW4p9MdufEeTdBvVNw15VpnbCLmfn6FbwEanyJpsvaaa4f33gjsT9Peuf1",
  "key2": "4sxMKbFmd8uEYoxiFYrGSEG1PgFntsxc7GH6mJ8V8FGXFVc8PetngbgW7W3BGaY96CTkZhePitN3VNwk8TXZcvrE",
  "key3": "2VQQQjMhex3dYTSvqpUYfVwddW5akMqW9iLYBZsiRaDVse5Q8uvMkpJfDK4aHNYiRRfbwjqm1vvikjAphMvrqKd2",
  "key4": "5jHCtyr1RKikUerooZbD1nBueLijmWR5gFEjbnN67yryQVFoE36zTjZsTwPQqzZHkh8tuPnFfCzdAv6C5uupArBA",
  "key5": "Biw2rpEowvzKMfkvtB9bRYzb9reBRL1YhJMmHVUdrTc9eiQzgSSCoBP3DRDhyewCwtVP5XMkdDaigJofc11bK5d",
  "key6": "5v7y2fVE4Lns47CWaY1MuLpxy1rH9VkVD5zBmEB3Q1gGFgf9V4U9qLUmE96MCGZJbRS35EzQxKSyzUwvVn7dVoaA",
  "key7": "NkQGUBuWx1LJarRpfmWXdVdcxh12Mi2PYXdxfPF8nmc2zv9WXWFCHCaweBqLzSQys6G18M6NTW9vtRhwz3SkL3N",
  "key8": "2JGJUqpiahZXJNmc3oCNtoF6CLRdcwEqPLf8mY4DtsmsNiu1AXc7FGvzTT5c3RcG8bNUCHC4UsZL7SAJbdEPAqBD",
  "key9": "3VNM4Z1ftTQVHUJHs4b48tJUUUaESc1Ki7qCGQPy1Wun22qXJqE5WavLAfcJbRxA7ioTfNvrz2Ns15CUcLCevTiQ",
  "key10": "2QkKyC7dSBTP6izWXk8tZhcdybATMfcJidx2ZxQBSVgEewjnoXeApEXvmu3tefe7Ss3c4MD4jncW2zvVYt9kFyqp",
  "key11": "4ZprHFru3oMNBjMdvTFTzugMPChUvVRptcGAAMgopC4eCfR41FAVbWTQSNiQBsNd5YegKsttvD8Y92wzebsiwYn",
  "key12": "3ovrshfARf9WrfRLRdxVdyagheXNGktuxgeiQ582FVyv7cHuea8b6siLwFbzNzgzf15mLX2VKBfaVx3Qz2zHoiYa",
  "key13": "2D83GV4i8MeFikPAi8e8ntc6QSKKse7scdKPsVHHDSvv5riL1BZPd7ABwNMAaXcoHj2iDkrz9GYJPwyv5jTRMqYe",
  "key14": "3ZG7tvXbbvmsLnuaVNNzVEFQedcxoqaJL6DTetkAhy1qtgx3kn1Y3Yr3JkAxA65YPGJtv4kPD416vTZHD5tzBbnF",
  "key15": "54Z2yMQTPy9rxC1marXXhc19vNc1KActUjp9JrWksD6P9nWJqycwJ8Sw7bXNPENBYq8bVu2FgSgrkzg1QmfoCjHT",
  "key16": "3ahoVXxaPLhjxFPCJaqr9ygwUpj3Vfq5Fq4kCUwqBehHmtpSAHkmBCfzbGE8FLHkGTyKyyGhiZSPUhhMQyboqPLb",
  "key17": "3cnDZ9s7ZUxTkApgG93ZE39Bzwh2vbcudnyLYU5ct7MbVmXsgcQATytYbNric6kSkit9uddqRxv7VqyRhbp5e4sn",
  "key18": "4SeV1CHKEaVduUUNNa5z48vh8Htv4mWBUqrzAbK2DCad1WB5HXpEm5LWsdzvkUnmBzJJgggw3116CiRV31gBYQLG",
  "key19": "54AjobA69uXkzSmFrFdSk56BfsZis4GkcVd931CTS77siKAKLrpDjZwUMq71tVhYexMYDC5tDADcymahkTRgzxoK",
  "key20": "2RUPF42fZFBfpFTacyJ7tUisq71U7Nm2iPciyLxHuMCm2SmLr1i5yk6C4tf7xCkgmkWgQXcDpixbo1hSaZj5WuSF",
  "key21": "2WC2dhVbmcZrm2bWAH5eoPx7mnZcZDfEv3YviTyzJ9SsenZWVJZcHUK45FRnSRYziv2aYyViFRKUbGKcn61z4pFN",
  "key22": "VKG2qjsTa24M9XbHveNPDNnZq4gbKo9kLy7WatdWGi2qzBam1HMgLLcm8PTExqduZVuk4NTCGVvKXYCq8kDYiD4",
  "key23": "1291QogErZPtgzyFByk5hMi7HT7YurSoi1f5dzDg8dDf3ws7gWXfZ54dKm7bLSReBCqLmMaTisYB7aa5xQJUWgsw",
  "key24": "2XXD9kXx6bw51BF7gWPGmCNXZPxXasezg464qXrP15fiBRrCkfjFss4wk8rW495Dux1c8CyGd8qjDy1xkYS4C45J",
  "key25": "5hFrfWrckkC4BR6W2sLm5Apy4bRxiW1NampNtM8GQnhsCu3qeyy9T9HqqpTSRW7K8zp97W7uB5n4W6JVTcS6KXr6",
  "key26": "4zeQphqm3QEM612vXH7UAphzVr1UsRULdhbDX9nSQnC7Wg9vJrtTFKtszEzs5cZtVA11zET4TVS4BqqMAsncKJhY",
  "key27": "2kUXMzaDvufz8poZSMxgfhhEc8eFs8pwzmxfTHUH94qZKPpFHxekAh3E7G5Z9oUmsAeBXozCizct3hfKxrLSFZbk",
  "key28": "3R5kxLmLM4qKRA6jWsz48yC2ivoBKs1iurv6YpTEudoZRXKbKi3TrQUEp75Ge4kSJVALmuubWKdxzzoNfFSqqiqp",
  "key29": "4t2pix6VMVqwmbbJ9xKuM7NzUrFCATz7NqkSpMyfqNBJhabHXt1Nj4TSdsE7VwZwj1Ghw6UegAdG4eJCwUWEfPPn",
  "key30": "4MPzALQsGhf42LWnPNqhs4NZAjxLTvMSiAMdUXmos8WpuEiLJjUwVV8Y8JFxNPaUJf4mV1zoZt9xUGPaCkZwZchU",
  "key31": "58hzVDyBJ77vkanDVvbKnNhtJgvowi39QWnvDFo4cncdvJipFzUd34xTFv7smYwZhQYdzJXWMPdds8wcxZWY6mZt",
  "key32": "5EbqJ643nVzqApzcG4moZqGAYdLfwsbw3un8zaGsdXQ5xT2YfWgrXDKGg8d1pNjnZzPVqNknEHNVD2VBF3dwo6NG",
  "key33": "5R3TGFL2QsqegPpF1Qjc6EVJHLub1W7C76DRr6iVtaGSi7DpjEnUfQsw4qSM3JAcaGwpMBSyVtCzG1q1KpB8pNAj",
  "key34": "2uswxPB1UJqC17tM2vf9rryf116hAM2Wa7okqHAbiRB3ntRA2u9AzHnPUCmFJQKmWocBiTuCNk1oBXiHoAjE1bom",
  "key35": "NmTSQ1cS1UUXV929rp2fMrw1D2M7UjJsTkAE1X5iZkvJPZApkTq8ZtrhwtjeaVpyd4CBRu23x4tPkEcCqrPDQ7f",
  "key36": "5u3DKfMh2HZNfLAFWp2vWnJNYKuaRekVoZYjnJJNYdJtdkCFk9BeDrfkYdAY6PbzjAg8qoRR5Y7sd4FX1EHWCaEv",
  "key37": "3QggR9g8TPYRWoKJDLZLPZuara1uaayziomHJiBYVVtcy6GnFpyD1AfuouTvsiBVRvKXGNSiXSu5RrCEgoQUp37L",
  "key38": "55MEghjPs4fV5X4wSkbvUULnkTiGe2gwa95bfcy6nRRHX7HwRQTDBsZGnXoKHZYZdbwJYXtyK43gdhPCX8UsKuH4",
  "key39": "3QT4pJRyjZdCybyVHWMrcCfU4xny3w9LdxmUbYg5jDqSHpshjoqN1uWe1YJG4iHD6ZCqkciHQouGanFAtCsjLxLL",
  "key40": "2E6yu9pnJ9Cb8cCRC5rMooBnyqEgyJB8y1Dp9dA7fz9Tu1n6reeNWD2zaVP65PADTFgovcHFTQ5skjjBBpAMf36Q",
  "key41": "Dkd2nNsajRMJmGVfJygqvQVA8Lu9LcaLtwZLDT5t8zNoAE9dKcx6BgrEUqocgteVBMThzTXZ6bEPoiNHGQoScMU",
  "key42": "rqHWQHikB6u65i2ce13kFDESB8ZtRqS85v6qUp4kQitaGc7gu8TLAJ1eShM7fm2XUJNbVx2QrHzBJ5xZQ5xngEk",
  "key43": "58jBn6VHkRmuJresrDcTQ1g176BakfUZURcUh2vveuy4JBrqAuvuf8dji26oCr6RvWUdKDCQZqHnnXpnz8GwbwpV",
  "key44": "2WHkZ1KtCRcvSjT94V6RmLAdaQJPf2zutSYNF1fDrYAVrqqA7g5yXHSFbEkxrCDM6q3o6r2ifGTt9HZD9a2NLQ3J",
  "key45": "zTZGq74hXKdWfn6TegVvjoR7o2UanNa4aMztmRh8dtVYVzZEGeLfpfHLBkbztQynAuNF6wQMKDiXyDrTnvLiG8K",
  "key46": "Fqg2gX7BhyCjoUQnTLeahUCBwf4aHcb8Nfe5mNAEU97CWxqcPJNWhUD5bnpDd4SgYNGmWcqcuzrcgBWMZRvqFK3"
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
