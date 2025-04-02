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
    "z2TnLrPxJdPb4UWrCFy8nxxwKS7ejvPpLY5E5K4xS7eQuj2D1UmyF488yi7c3vpTPTK5QG5heoQxQonfeNUfjg6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DV5K6GHz2gyrGEYDRLubPBnBQDERqygeSGgJRFfgAyrw2mQsa65pPReRvqMgQm5NEJRgWDHDmJjgDMeKaCRSswt",
  "key1": "JQWBUiMZd2UH2bgSReCQUB9UiFyANvn6ycQtB86MmS5Ri5L2z69YX4uTtXRFyMDMoo6u7qrDUydkTcskcxew3Ww",
  "key2": "4187ADHbNKe4PgUmwpKqL8HGxLfb29KHUFFbvBJCrMPLRHkWv5Z4ZXZaX42ahhT5qzFzh1vP2rL6vBycku2VurCR",
  "key3": "27DM3AADivr69G3AqBTtzH41iFcXsRvh6irqmECk3eXBrSDZ5LqBJeyFbaDaLgPUWoV8uytqFePSXE6BTXLZEafs",
  "key4": "P2mBvEj528yZGLZ4PFH7xZM2F8juAkEfGo99jRWqL9prQhQGfEXPoUhqNyPw7QmPUr2ZJoPbw8PWu638rxCUbNZ",
  "key5": "35iPeZwX9ra26Go8nzqNmxx33fPnpejzBZTWic1C6QurwcF2feEDAhFTnunwKM4zodKMmJgYLv52TrbGrubcdqYx",
  "key6": "2g5CGKBVsWrncQAnYPiZH8wHsSdvb1qaCVB1Bs1tjShHgcKGNWRP2LveXRGKaM2hdNZDeoaRNPUxN5ap2WpGf6ar",
  "key7": "cFafrRnjRaaSAd3VqSp2iAuuyGncUDFCVXmvXprBczVs6aDP5LJcGAkQVgAuEUrucWF5BFrE7dqgrMkdtp4YuUV",
  "key8": "3ztRyPETB1pYJE4sn7NoVvqhCt1jtPcwdrbqqyWHsiSmsd9C8y5wAPLhSUmv5Jy4eSPR92hxpAQyEfPeKcXRLwag",
  "key9": "JRArXeDsJrtv8LkmSPTxX6J6QTTr9B86tbw51gsooF75B5A6gkxAseXsrLS9zbbpLLLdrmDTHnrzFBJFRdKGWkk",
  "key10": "65vtA2REB42m7c9fw8Fb7JgUVgqKTrxxxVvY2USLX7fSEsH3L2sQxuzzgPqLcBs9EHM3VFVvGe4zvcMje5u8y3bZ",
  "key11": "4AxNADrHu9rpfuGq9g1Uw6AxNwoxQuDWwYDdXZhdHzykTfGRNp4MrUHvyk3DveciUUeM8iiGhdXydZ5toZ59wxZQ",
  "key12": "251dd1Y5LFdaU5P9tg7QgDovv9oN13bmgFHpyv5ucvTtH6Jtrh2oQBAKBXjkztpqzwh2iyYfXuqPqwUogWXGecsy",
  "key13": "4S1VjYPiAYnjEVYMrY9AJVhkbFDGggt9AUFqFb4Ygra4wjNbdbKSxA38j1jdzaeVeD9iQ32MzNXVPe4aBHXnfwUC",
  "key14": "ngQ5FTWRfAa7ihL6Nt2GmKEF3jHTejsEXCwjcN9qcJucMKShoZW2RR88rQRvFsWw96Jb3BiixF9KW8BvV4FPCnb",
  "key15": "4yJAL21AbBAvPLU22ApMQoxkAmkNCMQrvhR271u89JyKAKmU3VJqhhmeAhw5HUvvh98yJLvNiN6CyXRHLXeEYZFj",
  "key16": "2moVvjMyFUoBSb7NpSes1izPf3TJ4kDF6pAvTxJ9y9gXL1XoZTAZHmprv6zHWDrhK2CXAWUZyFVSddbqY6Yvv2dp",
  "key17": "NYPFuoAHtQW5hHoQceyeW3M8udduVBKKTjJN7uAoSM1kGLge1tdGbkanE2h2MMoPy48UxVYNe5KXHowk7rByFBK",
  "key18": "3Aq8s2frcGwwjxPYGLQ2Qx1chBYw9aoheUNDgABSdbbCr9P68MPceLvwjSUYhgzWiq2ziDWDKqp8VBsd4WYenyrm",
  "key19": "2rv82yFFRJZZHb3WmAfNgemgAUNRuf85RFUTrHBkNa5U287A4LXf5B1y7jZ6a4MTnYrWqqPF4rQXJew2yF3Js668",
  "key20": "aRrFnSeW6WoHxtf6bnaheYgQRQ8hKcSvZkErYcCZsbnaGj9zPMHGT5F6FxLE8dNZ4xi74uTqw6qUXo9ZbSM4oxC",
  "key21": "Teot2BjKrFHW3T23key5Ai3vAauFut233aTPFQ6vs7fvKZeYaeK6ug4EDUUyaDdJ8YGESjrk98Qdqoewjq3vLYb",
  "key22": "5sggcWaG6KbswFdUwR6YUSVjQCdVGxF269a3iZ1Yhm4otmXCaeqc6bJWf79xuAwbdvepgwjjtobaQYVxJcEvUmBp",
  "key23": "45iUwAovc7CEUB2vQ24y3PXs9GYc5HHXi9kVBwjBh6u43eEotXi93tGMXNez7Pb774LP2VrXpoMRVsNvxgHC8opq",
  "key24": "3F2bphrbBTCkSQGzn1cGYdxE1CYZVfZSqACzUJ32KeReTP2afQZZe86quNxqNn6xqM2pfVhZ3H83wFejGY2a4Joc",
  "key25": "4QYYKk8GLxdxpKLLrnXLdzL7chexCncP43C1exJyPkMkg7HyaV5XawEchQmKhV2EMUKPYXkB5Kd2eeZdoTUnYVxp",
  "key26": "5FquKuSj7TFmVLStzQa3JQeJGZsuSnKePb7hmjMKvkFidXb23HafHQxPsou7jeGU9NfJX1xrs3t67MjJ6WYPRfhS",
  "key27": "44RasxQts87wsXBQ1e2YYsZbWcmnx6nJBwfjrGMp7aYxv79BVbqHxLiorG54sjaV2sZUmgzBN79461fmhGg3RCK5",
  "key28": "5ZZyaPHggYbGz8BMfZe5MUFY7M2nys4rnCaPE3nznjUa3bgpgRj5DK3gmFcz6nqNuyS3B3LrHWR7hwPWeL7tQzzM",
  "key29": "5CwR9BYsL1AGi6jJbWXvyq8ajuGQq59auMoKyUBBpwed6Wqfa58LFxHEvtj2avB4CVPYWJptmDQ7uYBKFBTWVp6P",
  "key30": "3pSyjJZFm4TmUg6tffAEUTtBAHWMqVzy4ifnuRjEGhHnheC9w5dKUdhB2njDLc4Pnwy8J2LXyWHEw7rSPPoJZy2s",
  "key31": "wM5N87zbnLMhYP8nZ1bQ9VavYoRghB1bkxore2bYYKNA5vQQkM7CCJ1ReGhaCDA4jbmmin3M9K2uCC7gFqPr6KZ",
  "key32": "3QBH54wvaEUgjxttkt8cSnoJB5U4gcYn8LjoK26eJ3zKUExcaSkvcN47V9sZUUhVyH48X7FpK13BQi2xqZG4D1n6",
  "key33": "5S5VnUaLfSduzXQxF1PTUUbp1YvDpxrWvviRMyrw4stCw8jQT1fHxKG7M8zzMDV4wWVrZ4mYyA5b4tgF7v3WfrLa",
  "key34": "45DNKcni9wfGq2jbCCNyTdnWeHxm7d56qx1P5EFcZxyPkU4nSdcDw9EqW9XgBrBEjbZcPKKXeeqHj1dr2ghk6QJj",
  "key35": "2jPFqqcNRdSCDGFefVaJDez36RCUJ7ABf3guZ98Pd82JeoDCcdnzT4v5SoN3WeXVek6TGmhYncnJoPT3EKVcWgaL",
  "key36": "2VpkEVnVethox53wGG4Rn35CEyYGgd41mqurCgBzbf4iWvfUDic5f6Fvn3A7PjyWqVB4Lr81FGZePQx1d4Hrn1fL",
  "key37": "4m9zyiJAerRZUuLhCrKNedfvERYkfADCN5TsH9pLY4q5f3MX5GJXpxdzBGRVYmL6Rtnz3xwmpzVLqsFCoYvsiNrY",
  "key38": "TbTRBeCvEkjcCsnqJefWKm6i8u3H3RM2gH3xeenApp4DbP3PARiBkrwqyvHNhXsRAd7kiQTHP4jzey8qZsSBMJC",
  "key39": "3496dmPjT7a8w5gfnTvczt5fexLdSQFpVqeY3EVzEx8EGpoQkJbU6UCKaKFaVAmBws8CRtsPjQ7FUCGCmBPwZMZ8",
  "key40": "3ghm3nKAPknzruJjeM8gh72g7Fexj8X92tXEnpBg2mQfUtneNHdMn8MkNihPaqkWzRi7fDy3WXvX71P9epNPb1DG",
  "key41": "Mwt34YH2v3bW3ZjycmGPGk8R13JpEosuPrNwtBdUHDaTDVAJfg8sB1Wd2SFCzJ988YnQnp7N78xMXdcTrgsCAy5",
  "key42": "2PHJnUuReiXxnXzN1NMYTrQ5YF5jWi73tDVRpv5DFDG4HoGzUuNX5KYAj8iyrGGpkNevvs6Ds3xZHHncHhwhC42x",
  "key43": "53NSFR8suBbsNQdihY5Z43ACrSjHPfPFTkvkHKxLP93wVHMcY23XgcHRkytMbZSex36sHWDfZWoGZDEhSP2uFeXt",
  "key44": "3StMPiyW2rVZ3eMpqowjvN1nJ9cJ4AmTjyZS5WAuWpuxQ5Hwgz67LBRZppQMT2r8s8Rz4EvwjTBtxAZTMWk1dhPh",
  "key45": "4aXCU1A1qcm1xqrse6wACag9bj6jhyQn7Xgw83rUfj1Goz2GuN4m9vTrUSoVzE3QiXd8T5g3V3pZL2AKfy1vSCoP",
  "key46": "5gz15BAkHRunZdAhn7V3HXrkn8tUPiY28R2BqYaoptz7CuFD2EcEKB7z8M22iTDSxY9UWy8DLGPpFSbBwT9i5Dxq",
  "key47": "3tP2KLxgiQAVj7asQy3kEjVuYwZgcDSWaTucg2B4UQVU6oGS8oSvYpTzsbwbVD4EA8U5Zo6GQgz29QovqXsiUUy6",
  "key48": "MY2Jqek2uaUpcw1xUhFyG8MrpSwwwpBY7DwuGTUzkZxy7KParv81Qi3emPoJVGwzyvfMarQP3QfP5goc5WDqbJU"
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
