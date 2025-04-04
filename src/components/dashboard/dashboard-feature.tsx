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
    "54YYbBDdzaBDV3VwaFxXz8FgUctJhgfmMJj9bfqvMpFqqGxTKeVQYZd9x5Q83ymFycb1bDp5uLYKGDdnZMQD4B4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NJNnHBYivbiCgWFtxa2fxtvotxUCKtsxdi6VBuccAgiojnuUfKXmRFkf4JVspLF8KTTjLDLWZuUU7FSwFnjbv2o",
  "key1": "65ZG8jP36NQK359YENHzMZGbgPb3JkCQfBDH3sShiHr3R7xgqeHQf4K1sETkyroLNn8DFREj6hg78k4JrUewDFpt",
  "key2": "4wn3VSxek7FkmrHf6nDYddxt9ieKh3LTbPQWYVHJXdPhWjTk3rro4Gq8TCfCY2QQbs79ue6u8Scmt1gsrPbcriFt",
  "key3": "5WREcg6BZhA3udTMbwcD2rARTZMtdnRsqLR7HuMYHGqF54MUnLjxHoza297Mza65n9A4fwAA1zmErpfCtJvFfZKo",
  "key4": "vRpD8ghg9fap13DTnHq5ciaQG6DR9JXSA82ptLKp5Uk3cZ9zDfFMYhuV5J5ybKX8sjsx1DT3Q3zSDLwA4Dz4uLN",
  "key5": "3pnEtNVX427w9aHGgPj3M6HkoJLmP3ZLh5gv19y5JdbPD1KEYQfZsCvsGinQpRdAkyXeVA9jN2sJSJEe5hKhANwL",
  "key6": "2sQ2AXQUi3w9A85mqVmYmAqgB61sV7YKCe3YWuxJXjXepKqK91z9KHTa4sf16gUZZy1pNygqitV61CLTLjwyNYdU",
  "key7": "4mqxd8zbD19h7qd9bZ8PUTAfiAXQfaJCVDwTUJHRNPqiYLjDPTrbswtjqFHCxYVZH4bQZDuL72KRfRHPBWuU2xqM",
  "key8": "4unGzkpjXznB9aXsNy131JspGWBBTHwZKFphMxqmjHgvGj4USvZaevMoHmEtm1fToqXYmgwK1Suf9T1YuHKzAmiq",
  "key9": "iW6gjd2Lnku68aqPybpETrHwb4MCAsgswSDbAoD39b6Tc629gLPygrsBh4Y8kGSvF8ZYwRjfHD36ZAPqfmTmXU2",
  "key10": "H8TjzPn72TM1q5Dqta5xLQiBCqx6FX3foXmYZe6UWqxAacX5phnok19e1tYHSokmruVC8WrWPtsK7w4W1x5eZuZ",
  "key11": "c1qovLKZ4K9uwsWvqiFnoPQRV6HsadpYyjWJbquCFUbtaVp6DEu9e3szpFnD3vvwmLWfsgDDKA22rPk4mGQaNiF",
  "key12": "4g2HA2njCeJ7UV3TARBUo5zi1dWh7ZcMd1rUgcj2b3QRke1jDgCce4XGgMcBmXbDHfo6PqCbgMvGQZEfSxkAL2kf",
  "key13": "32ipN7kGpNNE8Aczczs4WvkYrwPwmotdcEK6ouUuzbhjUyAm6boLUQtT7ibec6yVhN5vBv2FWNr3cKEXu5GHVeGw",
  "key14": "2W7bGDTrztKvz1Z6t6e1zjsEyox6PhAiTheD9mjn6EbGHkxtyZMgyJ7LBD9kxDS2VBHhhdAhzwg46esFxaqZzzSS",
  "key15": "3rswjbLLQJGCBV9wWDgd5MHT17kPeEYJ1uwHinhccv224FWJU1TDUMHyzhnjhqWtsjMJXYA3SLGvjYvW3mrD8NQB",
  "key16": "3sP2ciP5aGR7FmgmC1XT7tUp5kzDr7QpAwRzu3N9zRnZRoZSbmHPy9NQxGdCdFpXjevMCStvGL1i37LujNhw7Djj",
  "key17": "5rY5DE3xgE4uy9ssTLbYmY9MPUVg5pYBDiJ5V5Kbs1LZh9EbYktA3jMuZnMXcgsRxEFks6YoH39ETXjU5qipHMeH",
  "key18": "BxqfX8TCdut7ScJELrfBqBvcBQwW7CuMtbNoECw1qJUiemZqzNux3VsnkapjRv31suSyfgCRLWoRquVpLoMuxzo",
  "key19": "3enhP5kyX8wM4MBBBKujBZDWn8BCEZ5NtMieJoxeXSFm1C7R5gXr6Uawa61EGoQPqtP5BQbbkDjDjMvwVRA6styR",
  "key20": "3MYTSgiUHUKoVWAmgZSUbcHAAbMeMG8TZuA8t7ezQZ89TzUyrn58Eo2XHmGbUnPCSywaW4TkYLkJ1Nu5Tmcx5fkw",
  "key21": "aeaTbn8oP5j2RZntWRfJuCGykpk3VMDMfQBB8wtoVQZ8abiyXfrfLkGHKf7EFbbnSXo4atXmFrDq7ye19VCG4JF",
  "key22": "5a3eGHRMB5yvdgeSZayUw2D9c3d1PgUNPhXAJyZ7Es3LjbUy8ERxDJMyzp8qUPDsiVDSGHBzXfTp61wuyAnag5eE",
  "key23": "38K7iXGn6ruPXWgQb11zT66L63jDhMoHw4Rf7UuQmZcKAKQzk1fUtfBEoYAqpHcYQAAFq6qgdJjZV812b2gwEvxi",
  "key24": "2rKsdzF1Dxv5MPN6jooMXYG6wNHQ6mREJRfFn1Lax6P1G5MHQBnWU9sbYcduvAyqJjzwgaHFddPC7kUBVqYuGLVh",
  "key25": "3bwbG7oqZBMayNrka7tLzuuHWvpXRNkrQ4VwTKF62jr1KFgGjqdogFAMp8nmpbiGXRdT2zdNWM4gqMUE38Qs69kd",
  "key26": "2YEY9PEs18dmAW4xNgQVuDRm5Ud32fBCsTVPwATnkBKk44iBEWq5Pvha48ohFVsRpdLQhJriBMfRsWGzHUn5Hcai",
  "key27": "JSqrsK5ZtbGhBKQkNhauoPWUFZDRiHV11Vp28abeHzkoskKoyzeLoFi519XqooyFQFhrRz2ZCPXkzMEpEoXAq28",
  "key28": "5aY165ByvJXUT46DPEdsEMsqmBSSqV4iuKUMkoWDT1QYNBPFRDn8QwnsK6DHZnGSroqWjFGkAQWeH8ZDuU8yLE8v",
  "key29": "59aAKe24KSF2aVtH8jgmqy4zfYFxhkZ925rL865TVPcmGegBysYFteSKNichGLbTZJtPGFtS3Q3P95PT435VQJMo",
  "key30": "5QCnHND8dBuDQ4qWLkZwmSdf3pm6omiTuz8xSWfg1GrJrwv5gpimomTV69HdvNjDt14PMrL8oXt1YAWG3Yy3GMEW",
  "key31": "3pu5i5J8bZQQBKdALmKd2GptMFw5kqS9f7f94HrSAysUjFxztRhgWYxBvs8pbzdXFb4ee13AZy8eVGBK6BVX26y5",
  "key32": "241bSF6tv2u2PbKPTPsifzpi7JnhUwnvGMwUPoheufb3kPspzccU8kgunhVYiM58aBgJZQo7qVa5VC7uB82EEXUf",
  "key33": "3fYTRLurJfwFF2tmdhDhynCe79sZ1VthHXWyC8mq4AVnbaYbAoAB4Dp13B1YSwVnFZgFAUtXxPFKQZpw3q3gYTwz",
  "key34": "5nazSJkNk757VHmUrKK8jeFpRut4n5MZajXvqdooLvdGvMiWTVTPYNx82y2G6A5qaEPHJP3CbJVi1RaXUXXUxGLh",
  "key35": "5XFH35hmsPfNpAPCBgFiqS4FqeoYo6MpnmTEfykdcKgpB8qEpHLTUMd3WAjBy7EADAEdzbpi2PKGmTL7qwmU9TL3",
  "key36": "63saMFk79HwmtGW8dMUkjMQQNp2EexxD7bTviAPyAhdf6CJhwcyrZmtkrr7MutNTDNkYEUh8YBazc4vbGzDwkTqb",
  "key37": "3yENYi1mGeWFUtzChh7x8Nmw5p7PHC7eddKmFTwgr5VsomnuT5iQea7oBBpppNGWXjka8u319MQd1eLCVq6G7puP",
  "key38": "WNrcXBTU2bk9eMwD45xuhMVbsBrdh8fVdiiDyv8Ah1mAAjZ5mcPixwTGNUjmCvafXgAYUZLNhX22eEP2aCYX5Af",
  "key39": "5nHDJmhxdkBxeZ43sYvFEUxmTqMLvQwNuHEMxVWrpRopNrYLhGcDhF8NppWuDWLs6QbHdKXTRy9VypPBrw9MA55i",
  "key40": "2XcpmqGt54TUbxfnH8njn6DpqpzUqAvZZ1eDHT8boEtSRJ17QDpn2WgzxjugSGPRsrCUPJXttZzi79Bu16PpxFdx",
  "key41": "5noP2BKYHSanKh3MmKWhi89w2AFunwsBgK1NUb7xsEMjYKkhF461eGKaUHghZzG9H5J3sQ8fzgXAxmc5EM944mrV",
  "key42": "cshvaYJCxTCQKiQzP6Bww97ALR7kaRFThVppZBQM65bbaoyS6sHd4yV4d364mYPZ9XMbG5qFPv6HbLeAtVW5CKb",
  "key43": "2Umpy9yvuAeZyf6N3zqQc4HGz4R8iy2HaU5B61Hps2WP3NnRmm9hguAm8KZtgp3U7bBUd1rGTfo81sSxNzkTQCTp",
  "key44": "765L2Y4gEwve8UJdDirQNEBaaSLphG51WvMzUXGePzx1QNKJ3LaKRtWX6kiRPqt3tQbVZSotohQFir6N6uL3SJc",
  "key45": "2rhznJbfH5TVRnoxTgHT3MV8HiBoSS9vRfjBbLe74JsDotu2jeRpM756c8vPWWLZRUvajAUpNh2sLq73MUHMimC3",
  "key46": "3Ko5SuKWrv67UnHXEeGutKaPaSnMhCJaYL5w5txY6L9Sa4MbHkTJmPuPkfB7j5qrt2GVfNErQhG1v2tyRtT4gwZm",
  "key47": "2DarMdFdyjrHaxpa1tZQtDWbgRZ1eyAVnq2fvPF6tTo5vbszmBGhn3H3KrHGunidKcM1CiJfZzQz76dzcNCZAWzd",
  "key48": "5JbNz9yompCiRiKjMq8dDztDY3BqtKSYRg7zWL8ZRszJiM9TwFZrQE5AzC14VizzpnePBtGvdPvqXjosL6jhVtng",
  "key49": "64yzXNhUJKMXHaJixaDXD81YmvaG5tFDrZahtzWS6Hc5jKL58tq1qzmfyoAJVLyPGNNh6xhK3fxGA5o8WJB7tBfD"
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
