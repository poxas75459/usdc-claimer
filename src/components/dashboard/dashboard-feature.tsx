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
    "2Pp6iou9CytgR1WoQtACLPATutmn5PAiHdDfgrBaGabXLSFzx1qZj1HfRGTsB9pLRVagJ71Vy2pdZU5FvK2Udsd7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T5YpEsQvZaeDb2qQ5Rm5nNDUoXGkwX5oRt4vNaMLDGa8x7GwZKH4yJKpzjvHyoLFvKzjFnZA2aSMS4akbMZ1sV9",
  "key1": "4ZK96mMRd4AFePLwrPjnzKWop772hs7vYr5BMFC2DsUUBqt1VdoVDT6viFqPbdUjRTjSF9Fe3TLo6SW7bK6EEN1U",
  "key2": "2YtJhQMgFs1pRUkXDxDRCX4S8MxKKShn8SzYinGA1tSvQxSbHUAwXniEsRZZEh1jiDn6mghMFfD5B7hHTNhXLnFw",
  "key3": "4xEJqLXbWRew1SEdXiRrSxyH1uyYG7St2a3BicW2JpjB3WSVeFYpHCi7FhEcxysAeaF5XREH7cz6CwD314wpMvxR",
  "key4": "5v3cdwPP1aDLsUS5WerwKpvS9xKe4PCJBC1MVK41u1s62eXdW5SWE8gUsDeBkCAT7NAqiTYE62NQ1bxnZeyMSqhn",
  "key5": "3GTh2RLV9o1B85kjZ7CUyRwryf4czsoDLu2ayBsRCbWEuPwG5S4LUEM3aaNtNNZScNEZx432QUBXsP88tpL8qfZ1",
  "key6": "5ocByjQEJ7MaJZg5ThwLZxTRu9AC6jPTG9Nxq4sZBzbWnXmcQGZ7VixSAehYBxfsXJxj1x57y5UxcZR2TkbSwNPz",
  "key7": "3VHYdGTD5je6YNHR9gvoKcJbzAyGpJRQZuhPu53N2E9xQpbVdLVQtsfCdrWQiTbqYJbifvvJqizdzBwWrmrU94GV",
  "key8": "4tZR81Gd3fg3fei6fo44vuqwqnoz2nvJNCURXXsXJ2p1TE9XAWp7b6YAofZYn1rXUYMpRzr7DHnFx1LV2VSC3te9",
  "key9": "3ZSELrQBC6SfwBuBmKFv1SKEGwd13VtjC1f2MzGPmmJ5y9MFcfdUm3E859PanrTwUWzP55NWzDtqVBJXzKB85Bkm",
  "key10": "5q7rK8kuw3NLo3SeZvhWZ8EJXpaX3G2ZSqQFQuX18AxEd23JpsXWF4dJXunSkUvy5QMbeqMVivKG5BmNYay8CxUE",
  "key11": "42wXUWNmPAxwbnfVXuomU3P5xGs1SZqbUrUrfo5irtYhXj8Qr9ExndDYrFcfUg5bjEVNDSxGCeckr5BjKg3J84cg",
  "key12": "Er2Uuq6xrnMuyhxSx5vpoNz9ctjcRDRNo1jCQre21wFJUHst74ZQf3wuEFnXS1ZR4P14MeWD2LBLdqU2iD58E9D",
  "key13": "5iRxet2fG4kUdhgp5K6RPpVUVqW5TJhBwL3UNoJ9nK51phtXLgcFL4RUuwD7MY5wWi26DgxCDaR3SNugcpgZMBGp",
  "key14": "2HtjKdwciHoA83bYvaZEhy7vFuinczg95HTd5vTqkyKELi2MBcZ1HgV5q4MrYXjwQvtSGyjbzGVffmutPEyinbdL",
  "key15": "3ULpRuUeFVPyqVzZMHxS39PwEJpEdyM66bWnkwNMdWPM91FFtiCstBPZXkAfFDyxU7dWyHcckbNXDH3etGd6f8fa",
  "key16": "2ty47By1ETGk9djmWVde9MhqQMbRTqktf7KY3xrkp2gmz1kBEnZCvxAqBNKpRQRCkChLywEp1EPEfiD76Hrun9F3",
  "key17": "43TCAMgoZzw18Hx31YGSu4MV7afxQyVcjnt8gE672xtPJsa5Zwv7y8iRMnT5m6Ygs4Q3LYdx7oBMzupuZoRFse7k",
  "key18": "4DHZJ5C8gXfXYZBdTjbJ4JTw2WDJ7YDHpnaYBQku4MBtAcnXDQSRwnuEMn37wmBM4ik6NCvnrSMQZWxfvrHvrUNm",
  "key19": "2GMsJRcotHoqwzUWGjVbN3XdxEjgffKr3EJ1pMfwCpfrQ229dvRFbpqW3ajkzTp8vWp1pVHH1miEkxWtr7s5tDHW",
  "key20": "4EjJhQWAj2t6yPpRgyuTPGhPSHikZrgNx6pgEd7h54crdfW5iJut7FAgHgYu8dYzqejNyn1VHhBxWLnQxxs4qgfL",
  "key21": "2z1WWkW4y1hQyKR6RGTNvDNiszuBzivwiNsbHnJ6y2eh355dwkd93ckurRiN2c1ethaacWUHqwtMWCTEQFppk5it",
  "key22": "2FMo1dhhJtfaQpmiFavtGrDhFNqBmJ6zQMTQtvnGz2rTAdzsSFAH9FmR9LuQPWin1NJyspPnhev5h9yVWERcrtL6",
  "key23": "2RdXTX7kvXV78ZeMfWqTTvJJbvHTV7DXf1b7ZfgETT9LY6ECsEi7HNBWdhBQopRk5URNZpWfDbHiPBKvcCD65yZX",
  "key24": "48v6GHYsA4UBK2K9WeZQddrn3NVtW7ndLKvc3R4U1w19nk3iDh9GxVpxhmYDTYnKsuDJD8ABmRGrvWw4fuWvWXSZ",
  "key25": "5c6XFJEAhsfB8RZKRHmfsK5H7Ywu4AQe4MMuZvpxwt3koGfy9sWxiFccyfyaoB8LSkakkymsUsB7mFWK5oNDUPfZ",
  "key26": "LpDGAfaBfpJYUakHw1n7ocipKtB91144KMW8Kv8yMPQWV5GjauuieJaN96y7wFuTa1QyckbMLygidjuWLfrYejN",
  "key27": "5yQZd8ZFd2Pz6d6ovqn67bGJy92NVGcFwLHeLLrMWN5aQM1udCvQZASXfUpeoW8nDTPnQNRosBDWHQPGQA3Wfphy",
  "key28": "3zQqJcw532LQAAGVxHRwMNoxSNWatc1PJWs2RS5bXWy7QKc2pbmtTTxhNq96VgkHdZe7ZsX5oLjtYwaPu8T8eT8h",
  "key29": "2BMtM1xhxR3WXyRRVhbDLjpeKtnrkQptVpPfB7z6ZN1NCohvHHBWfu5BvfD2bN68sdxtxYZzrfQHkR41HCk2MGNL",
  "key30": "29kpJB68M3oohQRFsm9XXHeD9BfMRzJ7J9YZp4Feprf324wX1k5jhHiE2TJAxhtCKzjwKsJ7kqf6JG9QV4z4Ab4i",
  "key31": "2AUSCzbRmCcYQ5FzBpz5J2NwpgAF1PyToh5m2w3ju6NopJutsETKxHLHJ94HV17gbLcLNgQj32upQwC6HXDor2Je",
  "key32": "XiX3uHPekXXtfy1bm3ZBURWReJtbqpMzMP7682grSdS7c5N32sYfss2C4a8CPqL7NoGCucwEUz4hSxhH9GzHy5n",
  "key33": "2hrdyMUYTmuZc439bZ6A6xMvPgw9fHQaTh5DCRKStK63y37kR9f5f3mDsMVn9BtvdAdexF1P53ckeJY3KG64bsTu",
  "key34": "45P4KkgMH8hVPqSTU7rm1dGY7pCTyqbRNXskyWrRC2HmnBsjpkvi2BTEb6TjApYLn5ZJiotYP9NrWqTDzTe5fsLE",
  "key35": "4PCbENPa5hscGy1MqedQwnk3t84DbLR1Vk2K2oezw5qREQ2FAF7CYQb6VSy17cgxY8V8UoVqVnmmZEbtYSANbjz2",
  "key36": "3cAG6RUM1SVe11ZTGiYHq9bNTHq1HYPiaFGdNeJehznbigb6PyF6Ttas9oczvBwSwLmJCfw2HLTe2n7PZZYn8arK",
  "key37": "4aDov7vdsc2NEjyGHCS3VGoW5EC7R3WbffYj1hGDGmZFbQaym2oDJZ6mt8hrZtURwhFrz6tMggeFVJiMfXX2UYGc",
  "key38": "NsCm2Bs2a2nJRQpSWpMQjk5pCDyXJpYq7rbmmRv9UvuN56gCgUis6pva6PKazAzA2Uk5eWKYQWmXe8dtRoLmSEi",
  "key39": "51DhCABZXjEMQAHA56sNjpWURRqwmzYPtJkWWTyzGJyhLL9EKtQc9VRC6HzQrFE9v234HehT7qaVTxLE5hFrYLVw",
  "key40": "534ScKHHtvBtinPjPAvreDyiyCYpjRHmkza6KnvHDeCAxRrm63gVosTzV1Dsp6vfWWvaHVRxz4ChNE4DyxhBrxEy",
  "key41": "4KsBg5f6cjrMxLimCT63vMT8wtchCxGcSEud81qKHYxiucLHoNA5JfYNJnfPAtVVTpZAoFxW4CbH8jp1trugPcSu",
  "key42": "DH89wnn9YscvtTzkevaRwiSnnU8SBa3WxeWGyC4AW1QnFS1p5CYE8yWJxHhywJkeQ5opMKDNPGCceog4ZBRjEBq",
  "key43": "5AtE6zNtXbVNpVUGcPHqCihTsAujYLjZFZxdDXWUePWX5ixsN3aHqwrEuDCXTfejTZDCikZETX8GCZj7WHgkgQ3t",
  "key44": "2khToVnqQ2VEhyR2isGP2VfFMehMkAyMdxhRwgswwtbFoJTy34v7YoMNKhuJ3HcK4fkYq73ceVqsqkN8Lb6HAGTz",
  "key45": "4r5S6PgM6UaHkVWvBmnUHtceiTsxDvAXLJrrvfXn8o9731p4pUStNhisetWUmEJzEnoq1TRq2ePWB7zguYrdTu7Q",
  "key46": "5Q3J7PnP3UzJu8c6VR85ePz4JX3go3VApWXKV6BLz3cY5AD2az1dMfkk9h8ZuhkHh4Seo68bzi25CyupMb44K9Vm",
  "key47": "5kzmVPpxL3CPepu28ZRuNM3M7x2GAHDtctuHYMHpNRpuZpACxbhZBsLSDPRQtZ2mn6mg3eZh24urW24iZtG9pzm",
  "key48": "3cYCjuTAhP83twnR6GkRsVyz85DwU9tGkhtLGMA12o6oFPGLUZuDPBt62rdyoeqpBNmBVszj3DsxD4nEXKrN4M3K"
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
