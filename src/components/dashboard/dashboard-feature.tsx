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
    "ea5KTjGgjR1yK2gzp96rSxccDoxmPpCJZFYprYFfY3ub5vK3xBURAuz1i3Z7FJSj78iEfNGnDDsiivsPLk5GooF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QPHLXk8jnfs6f6UoXp8AhrDsgFydrkpewHRbStQFcZCSsWWFGox49SqXW5SyjKKVh5k77k5jeDu45u1fcpntSsv",
  "key1": "2UJgGBKcF9SBqv2iLrRhLSMrYfGoywX31gVLtTPa27Wv1u2CEe4DL2TX2QTaFfgkFQycAH9pUX6ABTbiiim3cQui",
  "key2": "3TSmaoquBrf4dWgomgMaXW4sthLddnfupQfix2TKDNqnmGZEGWqNocUBNXa85i4Zqbj2BVa9Fxpmoii6rErnh1ad",
  "key3": "2D7Zjt6Yg2dyMREa8Kv2snPQ2yUggH7Pc4pgo9uotmdnYqE8PMBcAcNS6R83W3RddXgGPZ5MzF684P5iHtxJd17R",
  "key4": "8BkpEsokVtFqjkZAqq1figzdSBT3hamLtacNu8fK3AWUQEWMFy1b7sA3BzzcMpD38PSDQb8uHBGA899VBFodENF",
  "key5": "29GEy3tfbimAaddCDrL4324R9JyMpaegnnmuoe448La55V7PwCRfuhgrbKoXQ3BZced42tLRQc47irPMXqyTRcpe",
  "key6": "5RLGNiZiQHgeJCFkqEWZAw1e2yqPzspo8r8UWVdMwYedyEsDYaTJa54ELf48krroFfLguvxpqyQWFfLUbfJGX2ze",
  "key7": "2wQHzSa6CRYUQU8aGzSFLUGwjXEtWaKjH8V4WJMw6wGrUkvtVZ7h8M6RMKoWxUWP5GRR71ozXG1vMKwZoL4gHoio",
  "key8": "4WobgiCnr9YTnSqcraE2W8kNM4cxYDcuinCit2TqP8Sxjd8TrPmk3PtTEqPM6NebpxNaUqpJpuxCMczkm7ytrH7s",
  "key9": "4CE5qK7VqoU8gkaVqgVkdY358hWxdWEC6DZWqVTK2qXAKQ24R2GH6vTP4sKaH3jzgXxTfJDimqLjvQbKyUpsHeL5",
  "key10": "65ZHpkByio2MpN5x7Np7iyaj6q8d7vzdWGub5ziWhBm1ZGpjbb1sH1oMuM6RNGUuchiSsNuTeqLFj5bUiemMpQi2",
  "key11": "3d8keMQRG9D2vXEWptJat6P5dCkajfNZRMrCCNZErQYDDidxi3pZuvvmuegJj8vvgXhBmsfnKEYNKMG1XWzknuSs",
  "key12": "swczBspLePUsqcvMfijMnvXDtzmcNNXBV5T3RwEKfKu6Nnxwcv3DV1Y88o23oxfz6YaVpoZBgekJRSqrDP48ga1",
  "key13": "4a5vFjUuXHB4Vs1p8SCzCFgq9AbXbmdu4RJisBVVaDckQK5V1m1GyhnL2qGoG3ZNzSDdN6TExjwmCXUNmQzLXd2D",
  "key14": "2K2N57yQ6LSBeiSUGfZUcYAfJaiBKYW3voYV5Lspi9UCha9uRGTEnJhGoimFA64Gic4TysYnTmYRpUzg8DgMNRpp",
  "key15": "3SLerAQsu7XLfSU7TfBdrYFsAdSTiscsHHgX31qGFXFuxBZ9ds2SXPRASZFcBMSW5xeR8CsDp36AosD6xo5XvYza",
  "key16": "55At1FKNd1gifiPXUUUHomeUnvZhjEfXTF3izyJ1Vn7ZbPdind2Fia4rMQMGmmtbFEFgPzGj3mHV5KQoUF8ifHe3",
  "key17": "5Xj6W9CcRXdK28zZW6P1rQRFtYomhgdy9F6Sb39x6yUGrUPjbdxf6HdCaZJb8icm9njENWuo7B6V16m7a5PTkGsD",
  "key18": "3jkW7m33dtsj31QxuEaJjL6SKL3aujbjbdriDBRgnqAyByp4p3xRoSgosUQBqVWjY4DvkeEkTuuoePnCw4MKbPMz",
  "key19": "4XPMWZGDT5TuyQLzTt8vBaJSjDz6pVNDxuZAr8PCJF7deSx5Bn27UV9sbR3YQtxwY2xRQ9LT6DgVL232W1mVXpYB",
  "key20": "kPgsiEFraEU75cApXVAft5Nyt4cNcRoj2rXLNHK6dqiNwJcBemNRgkoHJD5c63DzfS4Jmun4w3nKmRcFWo7QepG",
  "key21": "2LjMDAszeQAqwboLaMd1u1m1cvxM1e7AGTjT6N6oA3L6YKx6Q3qsg2B6Wn3yrJqUvwTztWfLsBo3yYMSeTeM2fa1",
  "key22": "3RqiyBpxMxJ5LAkUBEXDsKYEYoRc5iQyEggGBB8RWegsgkZoshbQVSxWTBmjbYipqLj8r87vpt1hZj3jeXfRcfPW",
  "key23": "5aPRfz4koPKX5HYNSwue2iV4ZbpVpDLwNy9CH1a4RxDQ9XiywR59pPDWGTbcNVCMAvKeZmrRF56J8PATVeuAp4cm",
  "key24": "3fqKm6wT7iqszZqKSAQt3xMegkwkkGNtPDCdfwU2rZC9j9WW9dviKqGS1cjg7jFwnE1GirwLk3sVRggF1FBJVBtg",
  "key25": "2jHrjxpwqHBWxrQK4CujR8D5RtGPcYqU4Dr8J34gJSi4rtLWVjvTjo6rWGA6goNu2gTSq5bxcUMDA3PSkqLUUXTU",
  "key26": "32PMDsgSwtkiu7rVQNmVrZQ1qBPL5f5Jekw82eCsTp67YzGmzuehfe8v6zBz3oSgSriqyUKUNF911ukMcMgXgxgG",
  "key27": "u4hGMTkEmfM58jE6aNCWSTwWxzmvh1onVxmNKKNGbgR1s3DntYdZJUgU4hDxT5Qo6nNpgLTNrEDsuNHnWkekV7i",
  "key28": "2XoNmee9J4ps2p4EVZLmNXea9hKNqY5GYsTmQkcCYqTqQLnSW4Um2jGL8qudMkAfDouLgk8JeEtqBoJLea2dyhyF",
  "key29": "aUSqhC2Dw43nd9UrjdsUg9LSf84CDZPq7Awi3jN6bL5wn7EdHHMsxVTmgmuUD1rrjntXB5t5kS15q616ugqBJPQ",
  "key30": "2YYhd4kAXRXgFtRh1THrJE5zF1seeqsH8TqeTK4i2ssMg8PJ5bwKDsKzGTwkSsJYJgBJk2UpsdScwz7CycJZcVER",
  "key31": "3ZuhcDgKqwTb3r1GqRBfXaRebDGSYmJDhPPuqkrXYTc7rTiYZXRx3p4MfpidaLEc4nwHjKBSVLVbfwGAB33bcVQM",
  "key32": "2hXKAkmmTRKXVkVQgCnCFyaMEPnjZxMMcuzzWTcTaCq7PR4YwaR7KCZ9CgEw7UjUAbrqCpVKHz6KQiYuByV8Zsi5",
  "key33": "2WT6wqMi9aPyfJ7kkd7VPCjYSNgi8Dy4g1tabW9aLH7q1d721EmyKtjehUdQXs7VUSSFutLm9qHpaxY6LGzivTcR",
  "key34": "31dKxNapXKVRhs9oQCksutf8mnL3p9bBRsjr2RuRhqZGrFgRCNLWp9zYy2Z42VwHxy7fWSAiKy9tWLJDxxtE1s2a",
  "key35": "58ec9o7t7MWV6bjopwUknZ1e9vhCLkC9PrA1Lk2k92iEYFDZFLMxAdSnsggUGu99YDWeqRGUA56uDLm1H2vPMmLi",
  "key36": "4yT3yG81WTUaaYAtytsCChTywCsk7QC49iUWz8q84qNbfvm879MXrRazyrjuk22QrHFRC1gfrN2QZqsmgHSYJ65S",
  "key37": "4BFCjcd5qovVhvf7d4PFAgadUXqqQmUyAvLxpQMwy99V62RmrXzTVH8TB5Buf1WPbCMgPVYoNp5iHbUWeenrWTnM",
  "key38": "pQtZi9ZHsCGSkCZyrSYMatywa6W4yVdYVxTbvff4Xc5bZjSrf37YsJtNVaCF1K1YzHUqd3dYRGZh3nHvRZ7pTk3",
  "key39": "vZo11XdMJT7w2BzrGbGwocM3YJCUQUM14t9TfzYbN1XJFSkzB2igkE5HcPLDgAfthnWNCWpWYed5aEceN5fGDCj",
  "key40": "6797qYXTGRLmsu3wmFfnaekeiwfDxhuwjeAf7RZ55sWXgr8XoyF9Mmpf4TLb37S5d1wrpRmp9veGHLz7HVUYmrcc",
  "key41": "5Wu6r7wK8Jxu6WggcrkznVqosWRgHW1Bxuq67pjosaevaN6kWk8KSLnoYq3AMUAAM4ratDC5rKXDvYpvhopAHfhD",
  "key42": "5QuoGahVu7Gw5qhNzZSUMm3MVggtM9GNJ8AVWc6YRkvB8LNHTbD9dycvrbVfUL5pEiCeytPeeKgLYCrFfCfFgSGS",
  "key43": "4gdyVHkY5gKWFt5ZMPdAyfmmkdYegLhpfqryNrw7WNeKaHLfhdRQTmMdPxNH5DBQpPzzfMhTnSxaBDuxe5QHiuFj",
  "key44": "5sSGrv5bn28MZUZaR62r7V7mxjKUyvkHBzp7KVYbB3Rc1Ly1fgQSB7YjKW93k9Jm5DeEbLVWuBc1Ht3T5xALRjya",
  "key45": "56DETCvkEQ8smCkfx6Z8V728F8WuHfkgbKDWbdqj8vH2CqV1p5aBzt95WiLurgkKHBJe6w4iTbXriRPgSjJvs1Q4",
  "key46": "4LMctn7RcJgrci74xd7eDTEZxuBcpzft911aS8XZSXoCihrzToqjuZ4g9jbdUYx2WxbhJaHscvtREdY8xVHjCKQ9",
  "key47": "5a9cGmVfonj56fRP7YBM4ror9iTWS3qa8rcs21KwmEcZnYFfLBZuMVJWkwifWwyHvNxDZbGXpf8wpuP8prmwBXMQ",
  "key48": "124NBW9wN49Faq86cKxJrueDvdQpg6DiubR5iw2C9UzQTzubcBDTVggksKHwE8pPVkCTKQ1xV8jL5jWBdrPEjuXJ",
  "key49": "som8mppXQyweffikrxmBy3JxviZyHM1RsnaahXhfhBn62y3xQuxj3LWqKZRnkjmRtuJdoQEGLA9f5zUZvrxxQ2a"
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
