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
    "3ZjTkHFTpGtyt7q5RAVzouMGAos9hdGV9tCvPpebpnqvohu46rEbVsSfnvtV7XgqLSUDujhwKLA2TuxyxAtBr6hX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NTKvbFsYKCYQ1Pej5V8MNDcWQXY3FZB3VNy4W3bCtm7RsigPLHSqMjwZW6EczyLCR5AK1EwkPKpfQWLJcG6PKMo",
  "key1": "65NZvggnqgb55tBCF5AWzysk13jDKqQGDdYhawJDUVGZqoARRtPzsDtNtuW1FsD898Eo1AWBpN5PQVasfNCxSuT9",
  "key2": "4nhZR9RSVxY2DiLqb3W5mB1fLfnX7eWPJBTQEC7LcXVoWpu5mRcLw4mTPDsKHMvhZvghGSCjnEmtcdmUZH4DCb6q",
  "key3": "3qRs9PkvYC1rytb5zst1tTBxrCjMfay1xnGLGJ7tGm4YnJpQUH6JwviY7YxK7fZNkTqNHMJwBtihinyPvsc9aFLn",
  "key4": "58JFvD3Dr1PZwrDnL9Jz8UyPe7haUFfJ6cYzjQr83UiZtLeqW9HijHpsNVjzgmVrjBMB31LgECHCQdkhFZ9MoA5w",
  "key5": "2whE8hAVRfji8q2LqShJjraCQwqfsAD56SP5uSdjaUBXW1JDJ4WcdnpM5SpttY8QodXgNRqsR41TZSFTyo2vZc54",
  "key6": "5JZ5S91GDUDCxu6S1RAvDYEh1R7ouYHPhXLxgZnXdpYJuGX9aQSE4hzkQ3SdgfRLXSWywULHQ3ofKhB5NroNYSFB",
  "key7": "3LwvG2c3b9ZFnTRWmnh4jX9347wrBZbDucvWvc3AQdqemCwFVoE4z8GRG3E1avk22hLfsMbFAJ7uewkctYc7nsJN",
  "key8": "4zf82VggFmj8VBRzGvyLXHcKC3u57pmtRfzk6CjY5Faa3nGPthtUinhWjDX3kTghph1beMuAaY1HrQrbYMiqfJem",
  "key9": "5b8SHawt9FY5gy5ZdtG2rahvoxf4ZxF1rMTan9d2NXmwnWassHDCJpWYwfynUZkAcX9GzB8qEXiQ7nihXhdFhMLg",
  "key10": "3sysLhU1BoFRbCezstVyRL9c4AjuAQFVeAdCiEcHtQ5yUzk3WgT6U7d8x318AxG6p7aEWFNhnc6bbfskJzxsnHjh",
  "key11": "2QEw8WfykzQyPFRYTaxdr4boe8LSf9vyVHv2CWPuejGUuGHV6f6wZDFgXHhfj5LUwPEFiUPrhLfX7Qtvjv6R7Hmn",
  "key12": "PsMbZNP32eX4ho3xfgujCSbnierSD5SArRTjPP4uG6zL6zugWYvDqYyXG2A5HDAUZg46dkNFaKbRZQDTvzPLJZd",
  "key13": "59mTzWTKgxVSG4MMq2o5pRgePF71i9PyXmiPzLrwMq7irBFdW29RqGgcdcLWtL447bmRHDqAB6mr5iY9NciXMh86",
  "key14": "2t5eqkE8rbH2YL4ufSAgsz4LYei1Y5i5jXg72Fu6omB3t7v5dtfW5TdtiEuLFgWXrRmxvaBwXpH4obq1L6ce9ySN",
  "key15": "2T3KzWJbyVNRSkHiQUZxVtYeNHQb6YDgath82tEbQ5UL8ihYf5PBjmBG3Yabmb125q8BHA2aNaTPvsPoWsBNabve",
  "key16": "3TjgLmArAvVmdVCZXQYWYtvnVeyVARmx3mvaar6y3K784w2SDm9dsdJ1X3JQHFYhBavnusaVHXTwES2hmNxqt6x9",
  "key17": "56YH2iJJwLajyxhQJuxctDzZbmVnbc5hti2UcxEp3iFdj7nA21HS1YeLmHDa6Z5ttPcdQ3qkjPjzmP3NYsDrP1gp",
  "key18": "3saZto2CtBBkQYYXw87bchFZcdE2CHvGfoyWpPDiePDt5CXi2pb3yejHFa3rPQ1XqjtcRsmdL1FYerrXDCLqK237",
  "key19": "A7YdEUxqURYA22zGEe4KbqEDAe4DnH4yXS8fiLSisfF46c1432yiic3rUyAKKCCmco2BvpAbe8Kj7v8EwSP8wQo",
  "key20": "qMvf4nhLHrvfDURCeEYEikX9PLuRnTsy4bEedvQjGycUqSKPMCDyf39ZgR452qYB42p4aUUCj44PpxRgT6tpfHf",
  "key21": "C6Z46kYgTY52WjaXs9XkBWHouPXVZyrbf7SJxf5upkf8PTED2hHqMkaZKy8a67iT84g3dsKtaZFS3Jw5g5F7dG6",
  "key22": "2JPhSV4YZsF79qf2AYSyvXBWCAyeJGn2eBoDXX4gnWtL1yygwugj4w8fvEb7vxt1qH6JpeqrvhG4jiCxHfzTmEPK",
  "key23": "3DsAB1ZSkSLHhPKuNdfLoRAuA42QqpQtbWpyF76LBZgeSMCmWT4yVVFXaSTf95zrmXmi1VkoHWN7LRkXXerksaGs",
  "key24": "ZitsBXPWTQzwzLnMXfsNG1zXzUm2Gf7VNTbnnubiwAnLWqr1zqZaAXqvDWW3NhaHq47fr7XjinoUGmF4dxNwZoG",
  "key25": "4JcLEGNKMvfaay148gAhMZ95UQF2KGZoy8z1ggk8HeRaDbo2g8syeb2rvvbZvW5u4c1LMQNR7TbR2e3j5MMBNowm",
  "key26": "2ryBWfLaYejgLVRKP5ZGagVTSeQy3gSUKmbsFi7HMNLnq8RofjYHpfLjGXgwo5oL1r1ozrHoVPFTz3GokHtkZh89",
  "key27": "4a9Cgk422RVJPPScfEQWveTKVJU68vAdD7A1fXqMXfDHQ8oFdS5G2opvw11M75hxLvnXtUG4f5h9CXAkpdHVWr7T",
  "key28": "2mRzQwH6YAwh84SCCmERNxJhwVcMduCj5hHrRe4wtWZ6wSuPnUp1FiusFj29TQufGbvKt3F6i32jJbHCFSswDhQj",
  "key29": "62tGycEK1FWmb1UgsE9xNv7hg2PzqMEvHjkEWNANPnXaYuewEeicCWEhE8LyckG3Q91BjEb5PQXbu2mAAzALkMd3",
  "key30": "Z7JLkvTNmqMwpTJmF7wZUJM1669u9be3wQGLhH79JpFm3z3sPjgBRZKQ5AF4oH5t8VH6AAmPmYoxDbrRE121gku",
  "key31": "45y98sDkw8to9YYAejLdBoMEnUPaGoBUEJsR7U7XnyKokhLq45jMWFLnNaq51vqPaEWCdGkm3mnyMTnTHaoKAeDd",
  "key32": "3qk4XLzoKnJKw2Xxy5NHbarnJ2yPcqxchNXDbfsnhTnpxX5bEP9Tjo4XTpYztvrcjPNZEiuqmHz4nk1QnscgmYFJ",
  "key33": "3KNk34CtT9R2dLifLuGgVXJFSsPgosP81kvPCLe288sgcuM8YFkfNNBYRAFmRpjSk7yB7u1y6ztpaYUZ23UhLpiX",
  "key34": "4QGyNRvd2RiijsUC7SnirqEZyjiCHVTd7Tq6oMHGts7yaQwGgqQnw8M4PLy7zXnESzNjmN6uCDLve3nKXAMHcvzR",
  "key35": "f7DCgjg3gXyvT2YRg2C9L6m8nffKT49Q2DDi3bQsteTBWCJmDPN6WnRGyzbuPKNDQdv1K3QxPXLt13rHYB27Uoz",
  "key36": "2qFCzX9dkAHCV3VwRbEe2Wwd3mcXLiqiu681rHFKYbETDVQ7kgciJ3YA8B5KmXnN5gM8MqNyPW5G6x2g8kkqtwsc",
  "key37": "5QsxNw69FfqxYT3GzPatYxyqxZDd48BigASQvYZcQKrRwNptYwYZjt89qzDjqABL3y3EkwzZdbamCq6Nr4qM4A7A",
  "key38": "etx2hXmREeYdeE2VvLPFL6p7cqHasK39DD1Bwd95jzq3SMe1QTL6PbFJY4j1iBq4Z25CBmF8sqmEmTDDhapZPnm",
  "key39": "4BhujmrPVDxk4C5c6GsYN2krVP4RRYrewVfXtRoaLD5YBdJFxTmx5zuaxCfye9kTFevYSsVtDiUPjjnFPcJ7PCsP",
  "key40": "4JLf8PTPVAxbkeVGoeFGMKXiTfqGBFMeASLAwEEFmz8ERof7BqXU9jYEFETxuLLDrXxYurSqnG3w9QEyRxcbnmaG",
  "key41": "4mffPK1JyP3CQVAgYFi6Bd6VjoyAEMXGNcxvfuJqdcHzW1yVhA5DCfMddGZmvcsJZ91jWFDTRBpPxLqchk9C17Np",
  "key42": "54gL6wGsh7rUKyGsWohtCs93xh1M6m37y43CStJeposWm2vx9d6DDP9YsNHm5brqNfPEu17WBAXdKAw38v2Nryga",
  "key43": "2cstejFf3BZHznau7NXJebzpsHd9pej3yt66ncttWP9NL7cgPpUEcUN2pc9cXCgR56oCf5KpjFQKtUeiny3ZBw2T",
  "key44": "3sRivC5YtrUHZA5TnQ9xzoLJQKkPX3TUrQBeCRJeWP8NWD52f6LeUHgog7NbWthqka5tE9AjBF6DWraMK4A7G8Bu",
  "key45": "4KdyFVVvc8TdkAhc76hqMeFtKzwZNNR87gFGg4eG1G6rK3Ctu9ZQL8ZCkLa8aT751YX4SDjCF1reYKW3PRRuGuvm",
  "key46": "62kZVbQXrpEih3dgVtfsTGBXzA8sQDcxZG6YMJgGKppvwygw33Wj6EFB1b1Bu1i7MFgCCYUuwE9gniJiibEd1ot7",
  "key47": "2cd8auuBLicvBMLMoApuHzBcLgeESaVAX3W2b9jmKKzvvYrtat4aZqzEy7BrveYh6nQJJmoEz9EsdR5id42No8D4",
  "key48": "1P9QxDbKNETyu4FK23KzprAKriwfv4DJBq9f3H5Hcc2afRKk8RHEKZdkLfcQdpst8ew7wEGFwABfSYfMnAEbRQY"
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
