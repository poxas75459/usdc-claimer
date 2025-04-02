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
    "4PsiZ3PPNZGWmWVYWBGWmEKEZ6TqkrEPG32BVfNumQj3PA81n4zAYQVR8cBv72sAA2w2SB8eXGSywK9sERRjJydT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kbt83JAY8VteZT4jTFDeg7PHfMhEeSrsK8muYXeaA8fehM4AfMjyY3wuLAnNc1785EdhqgxB4FBTM8C3Nf3mtHG",
  "key1": "2aaVXF7pGcyebLuPUr1SbQfb5vo5YKjud4G79HPuudSJGYs1qDu9kFz2haE9uBz6ftQ2ETetxvedNfN66XXVXBTP",
  "key2": "5SuUJ4G3zxoHNQoRH6JgQpZeJq42FBPtLgGGvHDNmaNRFQTr3popVGr9yv8mJyomeJ1jSwKWevZQwefEjW2vwHLJ",
  "key3": "ABw9UVFCUCz5M1JFqwBZyHoftp9E5qAuL91HUNCSiKTPCes5Mhi6jEmWHnJo4WGeqeKoqkQ5fCcXzd1mjyFm13E",
  "key4": "JMx2gmZCeJz86BDquEwXGwVGe4m4bfk1iRTanaWShtkwEpaQm8Xr3Sc6EcmzkVo4LkiBfYCYRMYMucxzVSe1Hpr",
  "key5": "2ZhA7FyPCgMsQ8utorbCB16fxVBvjbSBy71rNvCXy2Q1zCGBWoyq2NjZsDCjucXSD42k6d9Qqukfd1WUwRrxYoMY",
  "key6": "2QFG5LygoMVyi6pA1KyKMtJtcn51oZeUd2pHd1fXgxEWqt1AzsG3mtesokHaBqnjvoHHrT9eBjQreWWFgnZDRfoN",
  "key7": "4kDkEvDzaUaekDkLtrBtgdpZ5F1fRzwuFsT6EKWqGbUcgGPb6Rk5rjybuDFzonqrPiEKiuavpnhSphAtFuzpTCXE",
  "key8": "4Gy7VaZCxTKWJGAWr1QT9afYnmGFZc63e7BSd3s94Tg5rT1jCjnzm5njfzotfDBKPJ57qtLruGtnnsjrw2r7ZxAD",
  "key9": "3LEooKSHdzRm67G8XUMxLNERmCwoSYvH4obkZ1yhJ7cbTjxtd4jwmDQaKr9PnhEvMmhhGJnK9PC6qL3vwRsfs9SA",
  "key10": "36ataZKdKnXKDVGfxjMzNpw7LRiJkLVYqX5ic9a11JLGEKjy6GUqcq6qKAZUk4Lkf8dcA9nyv4r1jNH6uSCjcZj9",
  "key11": "3EijwFV3RT4iJs8kj1xbio9YwkQ4jMz2QowfCunTKwJg2JdmafLTgfA92MLhyJuL6wk48iQ1esrk1naqXeNzQr2J",
  "key12": "29Q54psJ4AqAi7fvXq3QYq7EZg71vW4kEDDaudCwxJ7Vgu9LkhKwnStPyRDwbLFz2U5kjYG7KA3RKkzc6BKJZTUm",
  "key13": "21f26uDjtt1irYPZMdR2pg2aX1e9WVfyJqc74LbDZp4Q6zcmSXSKD9yfA6YttyXoswkhsMSZNaepNugcw1TfuY5Q",
  "key14": "4aNzV1xYsuxQnRdTgg4fmUnEx7FJSjyGUoS123htYNyW761EKGpSSiyfTdmqqC1X46QnCAmyEVmSassuzd6FnQd6",
  "key15": "5nkW3pqA2kMtNiAySzxUyKEiF5hZmS6Zg5Yt8VovkN99va4Zzh3PF9EXeNqboW3sgeYZxh3Z6d4qdLyowq9JPUvr",
  "key16": "4fzcis3CyrjZ8NahzmPtX3WgwQ3bS4h3G4qPEjfWA7eNPx8mikwTDGBUPoTjpjSDPY9q5PzAdAvwC2SAw1ZJcQBC",
  "key17": "5arehsamDZvqjSEWadGVP8GLsW16pCAjt8LzNse53EGFcVejmfyhXN4VibouC7dCiCCvCvuervByHd75Gq8R6DbB",
  "key18": "5stXQAgiAuM5Q8FwVLqdjYVU1LUmGhFWGgaxzc9pGxh3dL2psv4M5GBCyAU5cEmTHidc2zgQnuQCwPZB4aoQDhBx",
  "key19": "3kq8vaovDbFfFTrjiTtbHo768r6sDPWpUCi84E9JkyUJoXCSbJz2qhCwMpvCDA1HVq4kNYHFLJCggUEsrn63TZ1V",
  "key20": "547qYYaALw5zLd3kA2JbGsLiw2zBeZoSNUHbaqSNL8muwJc8Rod6B7GaioCPgLBpizRoYDJTQGFn7jA9ypJYSnJY",
  "key21": "2KcmUz7ewn1gz6e82RiC9ZamgX4KQve6TNFhd1JZouqGoiUbq4waUpmiyrr2v89dRkHL3p1BoDhDytqqMMjfdcm3",
  "key22": "4XgG6EqB5YNhtfkfzmiSYu6AWJdwdU49XnCoB2yDhnXrBM1TtboXNkvGrx694irraZ7gxEJ8v58ja44ChQfddXnP",
  "key23": "GuwTVUZNZ5btokPk3Kk1hE1tgwTEWh26MXhg7bP2VGVdwq8Dv2XJH4WAKFrfEofCB9UeQ4sR6sq5L6kaA9HpHy1",
  "key24": "2QH7AKSfcBqVFchmXp81zhTTxwzkQaeiAYZ6zjHkwru54nErbZfSdE4UhWQ2KC5tQ4954bxje48NvsGHFjviotSW",
  "key25": "3VW2dCPbxPNYvoPzX6pNkmKJKFtYhYLFmxAmjPTUcMt9prUyYH3awrr6ZrwDiJiycT784oUeYsFtkniRjKTkeTWo",
  "key26": "3ogVc1QjXjUGgSV4TdAAkQprQ4qwKa2JK8qmChxtsjg6RCU7CQzqnjsBCFswAY1XKEiPM6n1soBMBNtHUd1cLVyr",
  "key27": "2MNZE2agwqEvkvdZgdv4VrxUPk7PrbUsNcJ25btNEvaBHBQfj2YyeroSGwpLx5zhKp1NmCqX7bKQxZCZCqwvPVjf",
  "key28": "4eEVwHhuFWgiGosdNk5fKcmicRvRRSuMjMiGX4ajECwxP2UU4mnosyBJypzrxtfJAfY2cQDkU2Hi7VPAasMd2TRM",
  "key29": "G7XoABhVcNqSbwFe2cgGXazqUV2eJ1MqMwXUH25Go8RaucuTVPdDiNW8F7DzUGfj6SHFRtA1sk5ZTpHQRYApQf1",
  "key30": "3CvSrrmPtHWvx5TqnvfEVkEazBogBjyxakoDiTLGtToKNCmE3jxbY3aeVLLER6jUAFCcRJkaHTh6NqYzkx6JrbV1",
  "key31": "4tuMNHrwRhbEc32kyoTEPXJdR5csqcm6r4uo3xrYZTkLQQ2sZcuGxXzQL3FCvS6cn81SNLxS4yQQQzABxtzxDsUX",
  "key32": "5p4EWpLpskorYoVTkoi4jFCXfoaErn48F4hM3hDVN5hWge4U9u1mFhTUYWxtLQkByGYiiVALErk1yFJmsYsiEuoG",
  "key33": "5KnfPKsAaurkAVDbamjHbhEWWRU7uFbvhi25JCndUpdCK69yBPgxqfMq6d1dkf3EL7Zh9xHeTNYGtCWs193WMM8",
  "key34": "3Eqpjasi7s7FEgKuRe13EW31PiTMTjj5LNNsrTBLa8khdbKZWg1Per59McXhPQNTTKKXC18FvG9nShLgiqnMRrGw",
  "key35": "2AJica477TdXjQwCwrMvUyqMu9fUJPp85BzCb4GrNd1pg2GWwCdHqpZyB9nRS8HQtkEok38bCBF5nwnWAJmTzf39",
  "key36": "NVkhej6Mz87R8JUqhMu3s1mn43GrhX6JzXfpJUroHZsEQPdgXAgb3ox9ZwpS2R8tLGM8FH16zzLZCqhm985nQiD",
  "key37": "GeeR5wHxMDe4so8HcdnY8rZEweewAWvXkADw6X9d6K2iJrNPy4wUZjVP2suvUuBieoct2W3hdKRvBcsD5ctkeRF",
  "key38": "5kFjXNDvb2v3JUQoqvBDsaKytTULxDryWLae8cLLQoCRBHbW52iKh6i9feGE157uMA4LF8HnQFyAkVkHWp5yRfRH",
  "key39": "4w6yLDPswUqz17Z9qnJBdX8RCKMTPDkMnNbZgztqvVpevo8EeZov8wGo2EuhVV7qiS41MSf4KQdr2cQPVJYbDdKR",
  "key40": "iUmfgJeHzZqVxvTizN6ou4JbEXrUwWVpY6PCxSHHQTemrRME97csCZU8UTHAUByE1YukWDeiVkjGTMASygqeCUS",
  "key41": "2VysfoPbCwYDTZXNA2Kju324tCS2PvPbUVbixqp2WUkX7wxxEs3wEjxs9iwebBq1Yaz6iQFioqWMjZjGMSw5bR5f",
  "key42": "4RK4Vs1s3vXiqu9SDv7NYyqGS2GCpsMmSkNkFRnifoKwrnbRBypm1fe6PB1Q1H2jrdjyxyjQ5RjiBjtatGUALnTN",
  "key43": "3uZ6xhwDJ5Zk2GoCtizveDKGYHcrrRoYUppZg55JXUw7gvqzjWoQZUZp7EtvxJSkuwaEjtms24a4BmQy2vTMgXU1",
  "key44": "4eDB5PbCZCNHmpwpMzFDzE5tLQmp8jntQ9JszhuUi1DsckfMF387snuwT9ni83tmDGiZrBvXRTMTZ36cGUXxbWbm",
  "key45": "4wF43YjTaxhDUyN9Hh4LybwY42WtuJvbnqpd2Yqnu9BT5bdiKMi77vvE2RawFQ6WucJR3jU6cKUonwiVP5Ck745z",
  "key46": "egZC7gw2xYR5uCj15yANZyyWjgJwZCWqKz7id5URF78yafs4B3eE5GCH7PF7VY1fjwJw25gRnN32L86Q7BrriET"
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
