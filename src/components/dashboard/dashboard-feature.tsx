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
    "2qW1PM1tyQU3FNVEbBCmeepzp9KvpFdFQLUCWEZtoFiWqx7aGgH7gEcXe6qroXsECyUmNwvBxhyttmkD84TcCFt6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mG523x1fjkcNbabrPqfoQn1CjjvXNu4zKrYTxk7EQmRWiVeSPqj7Mrf3buRS7roaMTasWNFqWYgcDDVEsHZT3Mt",
  "key1": "3dTpeuFeteGk1wyp4rnExaX6sofwAKCZUTYV1MmQdXrXDebLqDsBkKLmGcyRpozs3R8Yg1sqZ2d1uryoa1QcQzfL",
  "key2": "3FAp1w4N1SA35jQZEcuKL5B9QMSL2NyXWu3jxVgBLjvs4VnE2AmWHWvbsR71xh8ugXvYVc6PVtNx13i8nsLR4nnx",
  "key3": "4vUJL1ZyaygrjNe8HkrYNPbFK8yAxHRJBEAd4M7ABZvvJsqeEPoQQTRaiKZTbTUNkxW3Gi1tdSNeuxkJCJ7o9jA3",
  "key4": "5Nr6t8H1Hjgp1nwCKoahaYG8mdJAFpxpkEZeRpDcxGsx7j8nZqDuk4xtd2LaRPjhzZayLEMQaYFn2TYy2uLx2S4B",
  "key5": "538HXoU19NMAXQnCD6uZbdnUXrd5DR61Xj1ausepAoqLyCZ96sL2hqjSTLxcqhwM87HyHH7Ub8s4hP2fjs8moK6P",
  "key6": "4MkCY847AhdmHpgChjDCxqUKXTj2hPBxvho7iNm9cKySZw9VV4FuAEeSqELUD9AjpHoKef6cVA6TRcTj2uEDmcBx",
  "key7": "4PJ8xSmphTzLuCVYHe8toqeQScoVgTumBYdAd1ww99Fz6Xo3feDuorApAn8jgHLMdx5oVAyztaBY4mzursduvMLD",
  "key8": "4qqwmGM3Q6C99mmkLhNqkAb64SVqEdXLZycAsoADbkzwoBrWnAxubSyjoKdr46F1fb6HoqdPeeUGJmMzTTtN285n",
  "key9": "44v7Kx29HBhydjZD2E6D74HcB5inuXhQyyi1bNTiyBHnk7GcUxz8m3pX9Gk1pft41HMxRnLCdGvXCRdwWhBPxrJS",
  "key10": "3UEF4w6ugehmGNhH7uQFcqhncE6ftTxmSGZQRCkuRr4TnmBgPAEr8jSW4QhC56Bs3oFpAYARCKndHyPnQZ2PcbdW",
  "key11": "EVuRdQShv3QiVjFmsrQvKurTtotuAEab4dYLnLLxDhLab2BHgx1xMSqwyv1Cd5bzJhG7vADnZhMBYWhkgo9YEKA",
  "key12": "srX5yPq4QUHxK1BGjpiKcRVya8owZLZy2zideua51tFn2qST7gTtxmt6LXbN9n7X6v13Ci5eBUPZGD3iUfCxoBm",
  "key13": "3SMhfwi1vSePffBoE7QPEbGFEk8QJU4eFyvWFsYHxefdnDQ3182G5NBoD7wV7CBFDVpS9GTXGy54wghUi3eCooGi",
  "key14": "L5N8CvrcxKU6f9Fv1RbFQG1h1JvmfWEtg8WQK22k6EpLqvfonSui3niABQu7WZGk1e58cx5F2Ws1i75TwrBzkzg",
  "key15": "5cZjka4UufK693GL9JJseTGsmjoU1BLXPHdTMRcGc4oYjemU7BDQ13jUyHduJGgZHsdRFwGauHXuKLxBM4XWrT9x",
  "key16": "5fWoUZxrr1MQ7oC9L3UKPUJr2uimCFBiW3WCkcZtWjZvrWRGUcaFkkTz3K2YcFahGZMCSgf5dtgstFuhTXbu2Tz8",
  "key17": "2ApJDVYdHmDLvLeaHDk2NPVd59dS9AbgEWN5uKUTNTdQh2tg11pm65q22KhCt84cxQBeFaANPFxhynHroHWMMEPv",
  "key18": "4BTgdqyU6akJMnNrFCidnTQgkmwfAEdoX5nHhC4R8RTjQbG1mswwwN83R641efUUPEmFKuhm4SCfYKMxDEEFPyxs",
  "key19": "4WYfoyjjtt7ZCRXf1srf3fcoUf1UvbNiGsopKXgzWDE1jBXWpQxyG97qKy9B4Vx4Uc8pxV8fr5fXjddAHVujFytq",
  "key20": "3s2UyKpSCTyFtWfXo8Xvmfupp8Ch9LXED3UobAogCrU5CsB1xudqPxed51p7vcGwfrmPDUr5vXkZGtsbZNzYmcCx",
  "key21": "61WW5C9VyEfvEnuAZnBRkUKVPjq1pE9Y1vpm3SUrRwFReGtZ2NHCqzAVcwsCdCN8axupYv8gW5SLTubzRgDSzEdg",
  "key22": "4c9EbmHJwHBg8AnU7PvtSupf41B2A8upSzafsTjab6z5vDLsU4XEbHvZmRCHF23L4Kgf1qG5328jvb4m8hdTfjsJ",
  "key23": "4BmiMcpykavNdokTj4oR6fWUT3CTXQTMLU71D83LRcMTKnfQhMi5xnxpKb3akHpSTSmxRCVEeGfgzwrpP8TLZcRQ",
  "key24": "3T1VTZS3Z87xbLKC4d5pFx7381is8Rzej1tFSVrhS8xqsPwNxunkrTsY3DjJbKCj2ehyhaX1fSzS1ZwJdVxiv5et",
  "key25": "P3ftRNstdMJNAJep3XTFnDCQgkT4bdq88B7Bt1NMLCLVnhJHaVguMZQsaPuN1ZMQb6gqsW1FYazFEB9r75qtLHM",
  "key26": "47KMQpmzXz6ZAdHTY7AnKqAvJuc6atJZW8FyVwuxHK4JuoDFTQqrYHCKo7DckVXNTpPor3xrNqQmj1CjnA6A7PzX",
  "key27": "4raqNkvGuzK9X2CAUDxwk4eZ8o8M9DjmUtWfM2JUNRQZ2Ly1giKAEAcif93CkMYndushXkPiE6ECpxYucCxyYa2Z",
  "key28": "4DCbh2UceF5422BNkXPXkMP6ofLsukw5167YPUgqMnXbLzoLiM2V268zAy3xjcF5hPGqTY9Gt3fALsugjpxcgdFd",
  "key29": "65XYgg4QzSULts1keFL1ahQNfPtCs5gExA9YC8JBgysw9F7NiAbrPDUN1Au1QP11nxAKwrRga1rKJeoLwGeEkadZ",
  "key30": "GD8hbFNqwrdpbMH8nA5X9q2XDzgajbqrF43Qmpb9FjcSaa8PCpkxMk53Vm3uVtprAK7ARmvpn6Z5kPCDdHvLvmk",
  "key31": "3MhL5Xqs6UfC4gHTqLzK3R7RPBmHvjAw3nyMtMTb472cT245wgxKNscvLTN6WyHu2JSWP1HZLT51LhZFGMYSGBCm",
  "key32": "3S7e24GFJ53HzyrkUK2Azf2FmVXeycuALQyHSkKZKTrd1fH2mtecKStgQTdMcdwmZmfGxiBZs65TEMJonFGMsJEA",
  "key33": "zipWzzWjW8jLHuGPxhYTGaQ6rkLwHZo9vNkuGwXjYkiYgZttHwAkjkkr4JY3DMFqEtToHSnbBvXJF4k1k8JZ5bA",
  "key34": "3JP9QPJxTFpJAELeG4ay57apLC8jitBMsPiqXWyw4oPYeWRZu7FkTzunicvyi9LPD3LgjqLA9bVq1YAD83AsrJwt",
  "key35": "5ejTCTmC9fujoWzB6wJSheeWDt2C58Dt5ndX1HVpkvY9psAaUBYyujMgcN4mwZP7g22uusoBfhKL7xpo9yEZdKMn",
  "key36": "561qnnAJo9vsNrR7mSEEMR2xXxmPtobd5pVCQGZfZK4VoWeWRKAwtuntiSddrrWM5sHAT39TJGj6SV8ft5t9HWKT",
  "key37": "5a2Q2CRcQdY1UQrsy7sPQVdBssx2iddVvwP6UdxPrZGB56D7g6NzmNGMqcBrj1HfPyZgAZyJGZfdGKwZVUWdc8Wx",
  "key38": "4ryoAeimyW3VFksVB7nLppLLfiJMcjLAvreu1mypu3ngWTCqJ1pzGptPsxxeMf3TfYPhUw7gryRGiP9JX5N23TtL",
  "key39": "3YELPjx3kDA5wgEAVVJirshLQBeLwjB3jNK1M5KCXf3YEkpJnBjQtyemNNK3ksqAwHg69HnCvenaXDzFY8gcAYwx",
  "key40": "4zGVz6diLYKFKJSbyKkfmY8SSRuEVd3PEx2LNFz1tV73RHe3XUMU3FXdsTFeDsoNh5QokD1PfucxyaUZb9hbfKzb",
  "key41": "5MXGuvycEYk7DuQLZ9HeNBwmHwSQJntmPfHRqmLRcD94CZCtudwy4vU6PnLkBx6sQwh12VLvuNdsjo5tgNBSfzXD",
  "key42": "4PTGPrtAZDMvLjopuKnbGjE5tTAYQPBZ5HqvQhzzgS5M2VwXZ3s3dh14T16sFbvJVYzd6XRR23bNUHAgioMLPqh6"
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
