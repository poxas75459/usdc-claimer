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
    "3rw441yZL1wNqGdF42ezmZWVDr79Er5GVwjweF8cB7aBStMjzWxrFo3PDuF3ZSJgeZnmW6JN5CgkWL3ALbXh5DfP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y35evVXYFg9MgzpYztRJz5Lsvi5SR75nJUfzVKGQCUvELdHPmWvmi26N9SNbybN8gXQJk6Reb3PagdZp1wwdSUn",
  "key1": "3igdYEtrgaQTjJkmfQwQ1RxbeHPgDcEuBEiE93MXGvA9inR7pK4uJWZvcdQMiCsmSgXPa1kQDVJc9sroAZk1fX3G",
  "key2": "mUorrBzwa1xEmtxJtAd3mot2qz9DQMYe5HZf375YysJkqG5cZhvwYokuBdmuJPqjziCWomRKBaNJUHCqbdf3V9p",
  "key3": "43uMjGqqG1dm7dKZceeP4jsPD8zsQiGzx3Wa8WQLWRerfiGkuxZSa6pgzoYPRzDiZNcZj7LLrZn9wBiFwBTfr5oX",
  "key4": "kcKQaKt6gTAUFmbvSRPT2qCMYmnwtnKKPtRkcvbDxTqrvdvBRVHXrAvBYNPqutgwXeXD9hL8RtxYW8UEH842c74",
  "key5": "2TUddYLq73L3hKth6Hqgu2kk37BziHpwaLFFc1BJqkXG7FohT4QXizyJeLoVN4fS2tx4DweyzSmggSx8kkEnd2th",
  "key6": "5DWAhW2dKcFK6idZX7qgR338xBVaqaNuLA9rZ3jAPichJ19avLLcadbs2MVWUrtS6gkcawB9uxb9yRSk3FCfqKAn",
  "key7": "rH2ppmndyi1n5ZSXpzn1adxpe8sxPvxcDYtGbfXfbXQtNQrjzvP3mLSheVi2mvmvrep4vAvhszBTifyw58s9jkT",
  "key8": "YDE3CMrBW8azK8CpepasDayeM1BxDZ4TRDHxX9ctuB9ChnhfCfvL9mA4wM7hMqQMDdApbe1sZZipU7EmBRnpShU",
  "key9": "55GiLnbcAEs2cWbbioC3Yd369cGes93aHFvdpcPYPjVdbUY8ri5MWu7s7bA6rDte2X4oQL1yGxJjyjbMo846Su94",
  "key10": "huFFvyE4NGNaBo7fMz3WMhQhdjiKEvoqEY8q3TPSoYSjr65CHk9BWRTWqNaHSfvkN7W5isYJUmW2Sa1122kCeGV",
  "key11": "5zeVPdpTeyVAfJRXeeVCbEzMinmRZH9prSq4oTqSeCNCBU4ums9SbBZx5m9ma1qFYWnFTrn2FdkyJcvEn9N52WMy",
  "key12": "3Zt85b2zh8LfnbcEDqt5piB1ggw8NqweqVEKTk7eJMdGrJJDERFJWZ9xqaUV2bqFzF8ZdTJQtsWA6DsYtsXHAdmb",
  "key13": "3tqXgjKgi6H9THGWzgCobQ5yDpY9Rd6kxwyFsxMeQjEQB2TLkj3ou3ZjnwwdBv1wEg38dHmcSGMJEDZ1jFEootTv",
  "key14": "3qpRbMdb3sxqMWHxePGvdxNK9gayqLcYMPuU7EyDSN1XatEHvnYZ2C2p7hAMCqxVh9pV5BzE43rzwNCcDnX3e6qS",
  "key15": "DJwe22p2NXoizNM4EgXmRp9gP4U8ihCEKWDGUNvXhiXaKMsX8hhP19Yymv2GiRPsmY6uCttPKtaigmrw5b4xBZK",
  "key16": "da53yENTduaWWAGsznScFQDKKTHB6Wit7BEMksAg2cZ1MeRQ37qAwLVL2hKxWPrqAM6pxgFAQJh7sQMu17AH5s8",
  "key17": "4rym4tF9nxukjdgYxSkW4G5BMkgrw8dvN5xFJXui2fR4aitg9nT7yvCbd3qxfcgT7G84wZQNdTCauznFdorJyFrv",
  "key18": "4BYwbC59qTDjwYU8vPJQ1exp6wmpSYnTb5g1VQV42p6vaBiQcancZgnmnbSozYAyRMN634kDXcisRfdbupvZQJKd",
  "key19": "5eeqf361tCNi1iTBDSznME6Yw8GqywaFs7z9iEq5mmJm9nycD65prx9nt2XeiJUnky6yJT9KRUmDq7pBANqjyJy3",
  "key20": "3csJUtzog2RnXLHdZtHCdyhfZY4u2sjXoWzePrG4v5NH3C2VADubJr9GeY4cooHz49sd1PE2mSCRPTzUZKBwNNrU",
  "key21": "P3BVQhkajSSr4qVzxfHufgtcTP8HK9DcAC6mV7uxHf5Bj6YyhxCppyqCvNp5VgLZuSED4f7WomACCxwTffiCYSZ",
  "key22": "5DGMRgqBjRsJD3gzL9H5DGGAnknZKscwbDKbgbmY6dTHgQ93C2juanT9kykymY4AptDdk32aHhW9LXYnpK47gieE",
  "key23": "4n35zhNiPCXxvfjyk7b1qzVvsqCxBf3w7MQMiz9jseeEWYQd9B83EYBmoEmGvoKefgh5MLECycLBY9vTTA4SAyC1",
  "key24": "TVzQ6cCgwQYVxGQ4RiZ7GCeTBG4N3SjKnHKjhXDxRn9EEaN8tHpU6apdRbKEEiLY7qTMUuWWbCrkqWLVchv1aDp",
  "key25": "2YwjvWpgezMVgtadj2xfa33E2tmYkXzLax1zVAuKTXXhfBLdHQ7c7sZyG9nGKKJBRqiYVBQrbGsfVX2QjCbfeTXt",
  "key26": "4pbnGVdXyaxX34fUTnzEogf8CmhrEDj3mfCcLu4WffmwbJ1Myw3QrMnoEux8KQzGgTQuZvcx7GhkCzthCVjcBiCi",
  "key27": "3Y7AvZVLwrds77Z4rYWz7qk8vtjs7ox4KdD2cN764RupNivvKLcds75d1roz63WUnsboTTFWg9j4NVMCF6bhQQ6n",
  "key28": "JrVfC4KNhbZcvjNNGWPW1UuPvRDsgtsAYA8YSYBZJTB8qJ8b4AwMKnBVksph71oFbmJMS5YFGszKKRs9szkWp5r",
  "key29": "2ZZEKZEJ5AdPDjY8Z881iJDDtu2kS7TBRQEvyeMzNnQcnqu8idytQbJqA1nPpuguw8587oRLWinGQWevqni49BAj",
  "key30": "5ASn56UMw4nUuqMzK2kvqmLHYZj5YBS6z5k3VEwMq4kY4h2aUdiqDt1a2d45BE8kFuQmBnAUYx6hxLLBbvQWMbaQ",
  "key31": "5RfRzWAM7fSjb82Wzxh4rcbve2yT2Tz4JbM1eoLEPj2CbiUcTmiUtYrGv5ndwQCk7mnWmAxthVbA5mdCh5aFTw9Y",
  "key32": "5KwWexRxVnb7AxZs1WyasjjMEfs9p1WDa4maRvo4Ne5XHdRGCGkt74ySmdwVajLQgpqDLrEFY5jJhGZFkQ9joD3h",
  "key33": "4QzTkzUNqAHz8DZzR2ekBqpFU9owpYsyt4SjEoTiysokN13wh6kPkhDpx9C4N22J2x8TRyaqPpUkCNw5cKcLMG2r",
  "key34": "tu5aKA5irQ1nb15dULjs3GcxxNPaxqDnrTXRdypYX7cZ7cof85gXx8G8N5YKrrfwyx5Mb1Lf2P4Kwcm6HNuedcw",
  "key35": "4xCQVqAPdGwN42ESbVZuBoGo14m48cJM3S2KwjTDozPz8GUa1w7mo7uPYuBCHsDpWg5Cuwoee5DYQuapsFFyk9R4",
  "key36": "2RsedWwZLs2LoCBYV8rYikT63yTCRVSwt1cKYpVcBS5vh6suGiNRH85QaxohBTrL8kdEpzPdNqdC2EKpEiWmw1J3",
  "key37": "3BDVR18vxAAjbmGhBYXCXnHMWmjH2bMzK1M2BwcdvzFC4F7V5zvg6KWDyzHc1Lt5nsveoWpck8bAg3xiU8GLRq7x",
  "key38": "3eFtCbLvkWxvp2GhZ2TtRnF1edQndChKF6t7wuVr1xJmtg7ciTh1ieUMwBvufWXrLDn4qUU6fpNpVFjX95LLQzmd",
  "key39": "3E7Y2psnCRekpaJySRyc96vVTpvcVuu3kY5A9jV6o9naDR9nh8b5EF6hBBJfnfLDUdfQHEWFT7Kr3npMYBqM5Ym3",
  "key40": "2arnJ1EicHoj5Veky7q68wHZVZwKmGt2JxGCJCnMSrwWzpobTTfzV7hKS1z56ZV4mxaG8oKpnpf8EUmUBnZWwWyS",
  "key41": "2yetTG9rhxfAJZeRyruTeHD5QtLd4WrJQHeERYewUVoKx6ZAMzK3D2zRddYoU1FDEa3CmV566cUhhGByyYDY16Fw",
  "key42": "3NA9yzgqZtGWE7DkQ2khXoDxFZYvoqVzsWQ6xrBB4AUrohKKkbCkkBVdK4LXpYhMnU6Zfg72cyW4J2gU1MnKJaGS",
  "key43": "7FeZJVwF5JmTMmADFdZcsDx693PdjKpXMkwDQ3PwqdzQkKuGXmNquvDvqt4fCSLD8RNKDUykrzYrkd2ao6CYdAx",
  "key44": "5Le77B1oXbAAY7Fxx2DibyFEdiovxDY55dHgo7Bq7hCk7Xj5UL8mNbrjwUzueiDQrBdhNF21WaeuKnYJHLvkEW1M",
  "key45": "TUvKkv3qNCiAzGXV9bRkpGykb2gxb14nrBQEzVDwAS4cJAEPTbauLAW4Mhx6Xe2CZHWbcNxnbHcbaN94onAqAVF",
  "key46": "BMSi41tSrfaBkxAfTqqRSGqWfr3e4jiMoBx8djCiL3cFVWY5Wxg68CWV2DEqvDBB92xKtcUqwQSgaJ4Jj3pS6Yw",
  "key47": "3MzFGmmyA3b5EeXXYRLg7XXE2NQN7PAdt7fB4ixv1sHhnoQbtw2BCp36g9zP4DG2xEeyf6LxBk3uJ9iDcUez6XDu",
  "key48": "2scukjxcTEnsfQ5cRDjFcF2R7zeP6JsjhgodqfYtG4iLbqrgpJhcjNGyy6ZWStkUTpLvTQpfkX4RrCK5tGau9AxY",
  "key49": "5YmLpLcAi2y1LmUiUKws9SzXce7qxYrTmwrNdHYdKk6NxmGDVkuUx8odXMZZjc5EiWA88UwHii1hfdVY9ZmbD4DG"
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
