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
    "5VoUe1A767B4LFoFSt6iJAxgbGyFLWpaLX9B2UyFt4QzNqP2HyCm44AKVvrfe9FS81VS5nd7rASaW2k1usgtZgD9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rt7sQMsbkpeQyyHn3qJqx4GGQCvkFN2CvyMRDhccYS7aWjXx3gKLFNdNkzMXmwqZwLyMrHsTF7mZ6vR4ZiKhERf",
  "key1": "2Pkaor4JoLaYN7X8quEBfLNLkGXnDFuSS2wBPR6ee64FfZwfYZ6QX3vu8wcwyr4uKDzeLXhzoJBGTG1GB7D79rhM",
  "key2": "5j1KGohsunT88yQtAcSF6KdMbYpXGsXxgWYNPE18QvaNybKMubXDHx4fwGDAgHVit9rTZkFCSiqZJrKKE8V6jt51",
  "key3": "213oYDYSgT8qrvn5GZqVThiB1CrqL898yeKzDEJcB67fPHqJsaZZNY8fTtd92xENaN8ikXHWu5XUN4tRNk1tDL73",
  "key4": "KHJTrLCdwWws7uuuW1U6RTAN4T3jMEs9H4ahhVHM436kmL7cdi7Jct3EUJPGnQf5ZfmZBPt7mofhykMLnYoPCi1",
  "key5": "PJQBus8jVQJQzVAuqjmsoUXkoS6S2ZFVjdi4f1mELFHaT7jwz21PzvUNwXJ1BPqS5NhRuryAXbt5QxsdnAzoDqf",
  "key6": "5gEhQKtwHjEdWP957aeBfYExQsePGQVq14VAaueevzYZmUXNkZUr468AELhCwh1wp1kDUupa1RKkyd17HdxdmtVX",
  "key7": "5NXNEhC29hPADVwX1D4RjEZZnEir3yXCzro2o5LjUcwMRV2bMzSPdbgvqX6iEV7q8KMiLdXDgkpSA7tp21buWqnA",
  "key8": "2grpQ49SeZF6CYrnECeagkMwXyh3Hc3E5NYgW3JYtifNna8c8xjQBqf3aQA8WWsf5LXAt6zSpN1DsCKs2b58qN2Q",
  "key9": "48azy8Kd2KtFiEbyEuAUWTeiiLYAVgXH57quayuek8PvrJMSHN8uNJgFuqLhxSZKBSJGDFGQ1LZ59YfxX8SJfVLK",
  "key10": "4MjYaHjUz83TNzxedaWqZ4xFWc4ULEYcuuT6CENKC2SzkmpjbxzRtE83NMjpsNRpRMa67BKNjVz2omgUjoXHGUo6",
  "key11": "2v4388MwvAduMGVBU1rrueg5AvpVrfrWCAUuHNDYhq2Yp1SfXqt6Ko9P8R5JzvyxPPJYa6uBP1ULQPrJ4ewTTjHU",
  "key12": "4zGsXsbUhVay6b2kFrW8ndmT7hKzaenuBeSAjmbAxAHqZtAminvHbbhUA72k8hgkFwD9ZFnsZLm1FGRT1eWcEADw",
  "key13": "4iu4Usn1BZjTwu197ykC1yr8EADGaMr6vWtKCdEWqp3ZadELx44NgSsG4w8669iusZ45E9ESMPTyRNmtTEYFRok4",
  "key14": "5F8XeXZMRaGdxwBuncZimvKvyaKaxWbDDowCxFH17o8UM81iMJv6Dxhjmd2aFaMzBnp938QntiZsndBbkWxkJBV1",
  "key15": "5yQ6xU84EBUvZD1hXzGQzGHDNAHxSutgvt5p6VUCd3rWM6MScr3ipCEpeu1uuypypr6oVCBQ9Wqg5Ny5UNxAYJ2W",
  "key16": "4bdf5ZBDRTZTc8U4jb8dMqYzphZ4umCAPonAt1PJt6sixAHLtkBL1gRwjiaSrbQN3ygqALZmGMag929XmDiwoADf",
  "key17": "4BCw964gAu3AmgP3i2NPMDhzKiGMggexsKS6sYtfrwGTRfMaFpzp62junUziKKZditiDQbh3gzjVK1BnRPe5xtnP",
  "key18": "2zwwPiC441htKJSytBoZXF4FiNMyUZTXxKTX34gUrisSKJQHSBZSH1UU8twZA87tCiwfRoamTvhSFj8JNdMrL8CR",
  "key19": "5VT91snNw8xm1dy3m44XEXnZJDX5ka6dYu4WNKm6gKmDSE49eyKgc22iZu5qaZ4gyn1kK7Xcia1MYTFnJi6xywMT",
  "key20": "27fcTwEmyjkoNDnMSywF5WaBvCFepkuYrNy5sx1RpWAU5p3S4Eo6wfSpnKLXXBNNvjeddBv8wWBLUhjsqvgGxtXV",
  "key21": "1PzjUjVrd2R1FQLWuWRmCS67GQRrCWkJ4TJHpsTbizx5uZanHadRpPAAknv8Tayr5gVmsXxLstn21qP5fLMqyuf",
  "key22": "5kiGhZXw9JpuSKX2VD4sA2sSQ21dpotnE3sTnEX3Wmhh53QNAGTbRyAkWVADBg7ygh2agB6t2U56kC9QdjKrT6De",
  "key23": "52iS4D5tYYnirmgXq2XQcapJLTanQ7xTwgjpMedV3ydubpgXNVwbYuxqRRahwKWzZ2zteijJ8ZqWjHY9bkpkrkwF",
  "key24": "4se3D4ivyxtivKRMUqBXBB562V9zF2LfNoCQgMwQ7wfjFDtXNXfBsBtnFwSuXUkob1TE6SGsagTQRTko859jXHZk",
  "key25": "4cTdqJL49aXEnDcwJYAEW8jvREXdyrePREJUKPYkLYzirR7tgazUZUddUiiNKbnPQa3ouZtdgARLsTNNB77ACTnW",
  "key26": "2oShxFaTX5t5HavAgRAUvi2uot9z2DbohjC3oHoja4PFhdoPCJ77NHApVJRV1caJ741L3KfaLt5LkctPdZ5n5xgs",
  "key27": "5MjwXqjuaYE25kZ6wY64p7kytNF4hwuU1aYDiUEJUSzBwEBR856XDp13aCHP4YS37vRCX7aFGYQSQNxWd1qL1Xvr",
  "key28": "jX8NURfrfkkHKunCmkZvAvnvMryt6rZuv6nEQ9WBeq6PFAbStreHJ4t2utD19Yj16nr5DmPn2VGJteVYmSN6Rxs",
  "key29": "4YtnHLwNuUGq9E76ysuNhB65J24urrCiWUkPDLbh7CrAuVCRcDkVEvT8iEyk4m5pWBKRBFxLUcWhDdPbDZQZArL2",
  "key30": "2oMALuWpCJ65xuSxVKZXV1HmhVFgjwQTW8AVVdDpAAqpbumeW2u7WqtFtQdRkeoPbchf4ktaTcREXQLwTDxed5gK",
  "key31": "4ajqwB7EjRbJMU53SrQnKUexkGSBKP3wjsYp3hdKD1gRpudM38JF4YpmqAsZEtU3ABVSXgULey3hjc2PTjEsKSqj",
  "key32": "4WvcCDMKpFVVE7sFVmiB3khQyALXXbSZFUbr7h5SR2A1ViJp5bFM1NhUs6JuBx4aL2juXCGDq549cPWaHjqGXwkG",
  "key33": "3mgGSGkA3Tg1PTuCmqf2QuBLdj8Yq7z9dGQP3ThPv1yBbpsQmnDjHqh9V3pGDWuWBsAvLmjVHPf8i5iB37FBKwBV",
  "key34": "3GAgZxcwkR7ZuZYHEEm4fnJzQ1g42cMNsT69qELGaEXDMjTgmeQNn4yUBvedViQnN9w9bfNpe359mJMRduCaYpUQ",
  "key35": "LAuDGd1ywJipjF4RqUApYrBj8y5GqaxL6DWxc3FrymTUgJdWmB7QonzsMvCG6U4WWDKPphA6K11y5h4e9WTSzqK",
  "key36": "AqXrrqjaJs9BADJqzdZtoeMVQYFE8VwY959f1RdtJMDF3Ej87KWqzyqsFaEZBJ2rEDxNAgX7iVffPi9TGja11Py",
  "key37": "2iRspDYhEmCzASAoN4ULo5nf7q9bgnfgq5H9jXVGZ67smjkcGi9Wq21XSe2jDWENchy4MZa5GdGTPyTJL79uxVsn",
  "key38": "4Aa2YAsSEXwSoCPpJRQZ2Ek1Yw4YMSZfgWPn2BBuDvbZpZcF4w2FRtqCXFoNNyaxRdLqruCBQEGnEp8JSh59Xaai",
  "key39": "4jcKnqRgumNr3uheGe5gjyBioCpLJ8YabWm5xXnPdGqa2P3MEpkKVKNBsCwrMvRkxGChaVzri2MNnjViuKyePyXx",
  "key40": "4F6Hn4X5Rzn1xUr37tkJCevsaNbLzQVGcdZYoZj5zeJcMHjX5xjyXwiAFYVavgmmcG9DD3kJMizDZjTnxzZ91SpT",
  "key41": "4igTpgwPXAAbPwqdQ73bxBYUE58jvpRvoAf3Q2Umaha96o8nsJiQw5A59XeZjCeugqXwoheTHgdYc1EkCpvNvFk8"
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
