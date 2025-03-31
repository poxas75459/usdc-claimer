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
    "2tSScktCFQcoK7C31jvFyv1AbCmimUJjGezQspMoxbMUFduRDumgZVdbQpmkXYj9E4HEGkfY87sxMQyxUByD77XK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DyBgkPNuFz6KEf4inMkCRWYaCr2pArdCHxSEymZxXE1bZhYZMkqkBbB5nkvXpq8SRSSf2Gg3yGs9M66hsmSwowW",
  "key1": "5T1mUZkxuKmHedZD2bbgLQp4daNvHzbmP5NUDqWdJZnAuBvWBJ7VpcFkVZC1AAibPiRmbwZBLq5vi5zTaj22DCEg",
  "key2": "3UrMZbSxtq19ZqTryU7GW6bneTBJtvRG9P7JttDWaKCUWoV2dx9ky2gxxjF3n4Whb29o7Nz5e8miMdYPufFByoyS",
  "key3": "2iXXjTN21Whz47Wxj39BFauCNS6xwPV9RZRVyXe7AFT4hXvd9hx3t1gXNXB3APtaXHD5M3ehcT3vezpGRNbKuu9f",
  "key4": "5XyDw3AA15WidUC3E6KANLHVNTaA9WNK4tu63DDHAtSu2eRQdFPnL7L3XUXYQTwBkyXQcJjuVPZg8JxYHCASw8vt",
  "key5": "4BZdD8YZuJXVSrtyg4oTm5ZU5iSUnG6xKE3LNULj4MLnhsiBnaScXgf4UVMipzYU91cv499nZAH9jVdftonro2B8",
  "key6": "zWvp9hHG1K7GDhuDyKTqm5avNUCfEAV8Vi8sXVNZLC8fcg4SGPaYgMdNmFcWZg17FsA2aRrPcjW2y3YKCiU33MU",
  "key7": "8gtFRfoRy9kCrV4iUVkDBAKQiqXXhxtDUyE3YdvTJGWV1k4QDEFD9sUz1Yc2yQhpyYtSUbHCaigMsnra78QssLW",
  "key8": "2chrMQdhxxsevbVQnqHY3r4CLTwhYa62NuSPU4BRYfn7YEAAVK6L5zbg13ZcZaPt5yYysj2oJPNkAWL1seTjKg82",
  "key9": "5uRpTMg75YF1rtkpVNv4WnYHehT5Qa1DaNJbq6p6AktgB686DLUUtuyT4ATYsj6DM7XsAD7EWspZ4H1kSNPW467e",
  "key10": "2PuJzQ2CX9TvcCYghupFcokTvEHfN7sGnrfhegon9j3cFymCPLYAkxbFtKkBCADy6kjw7CycBwgTv1QWcRWkkJgF",
  "key11": "3fxn7NL2fyVpfAzqk1ujmhDUFZoAwDEQ6TmcCBT4GTokBrUDDZncyKQZHNidV1dbGnFiK97iWFmSh2d6sdFJWTSz",
  "key12": "21d2BRogiuzb2YSAZDipW6WZ7VjyKbuBXYrpa14ocSy9HtnhgQGPX5E3FdhKRj9UUfNZKdvg14Pp3qJ3b6rMebbd",
  "key13": "F1SCzqdZsHH6oi6Q9PA1wwppsHaHAXWrtFhCZ5k3eTGMf35A373YDH57NpSh3gb9yRnEp4KmFGsQcB7sqjkLcRP",
  "key14": "2gfd3cXr3U1BUnvzPqh1aSCvTjKhrJAeCSMG6Ho9x9ACxUJyLzKuGt1Ywr8idxbTfyR23Yn65a2menR2u2J1Avmb",
  "key15": "2H5hss8goFBGLwCtVJ5hmpgZ2YsCCLwDuZhdgsTRnppy4SC2zs11PC5cam8ZjMrAd2dcMakSA5w3228mKcNGpYQo",
  "key16": "Lq3ZABtWg9A51mPrUXpSEnLtVwDKYB3AaCt41iNRjEiJgaTqggKN6mVVCMZmtevuyDarDMmfYgzf45FTvQfoP9V",
  "key17": "2vSpr3QYv92NVJbBs2i9Hb3xpPgk3x3hyaS5cV1CDJeoBaANCa45DFAoWQ49CGud1UPw5v5DGuzzHeVEAhJ7s3Hw",
  "key18": "55VQQyNZ45XhY8kGibxkrbNNrsGbGarn8UepXSXsKXeFcRys1KkCj4KzcEo6kzVRvEg9PZPkW2QwFQ52mVdahHB1",
  "key19": "29vR4QYyJSF1KnihqmXGpq58GNxTodPqi7DXxD8TsvWc6oarVZvHUHeTsQYLYEJZWo2scXfusUjcQMPicZWe8r5b",
  "key20": "4GMCmNgmeqEN7e5STJE19MsKxe4RNXgwGYYdiDuMvc2FCvKPNQLeNzAxj8q92W2xGHtEa89hufhFAPTWN4GStanX",
  "key21": "4vBhRDY2VuKqfcEj6dFauExSYovVBKkULEmBveVQmyKyA19hSc7R6dxc11nqzsjjLGnSJ17bJTzmu4UpJaPAnxF1",
  "key22": "2svKyW84NWVeYFhtQwz4bEcE7o59WkNQkUge4omFrZKp4tzQi7mFiFwNMLVDFwLVKZPi6GMjDhCzLZnQz188ZCgk",
  "key23": "3kaBFiTwkptm3beW2xjTPWtSJx4RXFuEk84KUvQNcqNokZ6Ed7iaLGAF7hLtQdgPBkzs4iyaUbNFkBB1tzvxn15j",
  "key24": "4MQRx9VtNjigJP6Yq4gzkgrVjYTGBwo3wByQ9BJGFEdEKZp2wHZ8fnbyGHfCWZfutUqXBVcsE9MJzn9kb3ckMxwZ",
  "key25": "3ETvv5pFHrCrFKBZVWZWCGP3QeKTk9BRvVcm7BGkjDQm25ho4yh2VSEfHFkzQXjHaeQ8LYSGErBasQzMNyYxF9pq",
  "key26": "2XrnGpCB8JY4BTFzLGc7uycmX98VdzPTQpYB1Sd7P3mgQ15SXQm1enVU21Lz7r2EZtpuswYciTxWPiLCcfRw6jtQ",
  "key27": "5WheVHGMdcAqwjXc4txo9ppuzogcdZgiGwMsZJPT3MCZSzNxPzNp4dTSDCxXiShjCQc2nDoHseZrBq619oBL8RJF",
  "key28": "5bp5UXPQGiUSS7AoUt6xNw24CxGeimNZYuu9TxArPHxdkcr1AiXGWbcLz5zG9yXUewVW6sYUoZBf5kh3fYKCpAUE",
  "key29": "4dUrAGJsq1BHszCjzzNd8KwZBoWxKFycsBNVR1N1NK5pEvUfjmZ3KXHeiFXXG2r7p8QcSmd1aNWZWSNfj1q7aGn8",
  "key30": "7rRHtcAK7qQVovfBqarjc6YvjWtiwUEPB6uNWGcyWzMb4XAfSssNZKEita9737RGbx13qv4maM9tw19Lr4G1X26",
  "key31": "2H7eY2vimyKqoLqnLc2EyNgy3WU5cHqZouFQaa3R1db8onmKwidPfEJ3f4tH7wrZuNa5hnRixzAenZKxXpBEBgzb",
  "key32": "875LCeYSTarGgk9LoX4zBdSX6wM5VXwjHcbLST7t8aDKCnJpr425aQ7c7R1y2YQuaP5vSMH4YMrZFS6StnF7B9V",
  "key33": "5wVAXKJsY18yMHYusGssS45MrM7cJnjrPjjPC1gJX6jTtCUyb92gvLJStR83NFQDwxmBbZQ2Gaf9MntCro5T39nn",
  "key34": "5NeSyPvmrRTcxpihrj87auNBZLvg2zNuqAKfbDpxnBsmTkWVg3XYkkVuhvYFL4uvgA2iM6vFud3riERMCS42kUH5",
  "key35": "4VpYoY5xtFEWFZrKnxmUfpccvizeXpJ2yohJgBco5H1eMdD8vxyVSqSCWS8q5Bew35YHtdfKUndbjf2m1NUtoCdj",
  "key36": "QrwCDUeANYHhLV3S2pzbpWH9jZ5Jzt4N6osSToU4iUgWDw33vdzvLJHThxomvS1f6Dc3ccTmsYtqijdFCha2H6X",
  "key37": "59g2TwKMnrPokxaKRqTNkkb89weFSkvfGWVyod14pqNwtaDtNufb76Jmt38ev2UPYwSUTWQQr5WPePzmHfcqRT4S",
  "key38": "5VcXDigvD6694KRN7ef1QbRRiGaHvA8noHjKv6E9MkAorW3AbmKUuVGpuuVbubRLaJkSE44rTBjcWBFm6M3tUi8V",
  "key39": "4hkF3ykovwT6tEtUNoGdhjvZBPesUNXCWac15HJnvwfPtDS3bZthyPnBjnv4dfQCTuGWGyc82gK6hjLzoX63HKu2",
  "key40": "3iZNxjQ2WYxtL4ZKpqbEUMqoTZFc1ACPgPfkcXaZbrFwsprqQja4vpaiSZ1aBT2ihjgxFanAGxgyVyQ1rkfLvb2F",
  "key41": "5ak9SPHRy2hEfotDS3xoUofkcGWPcZgoD393jtSzx7TtkfAbMjuF8VU6NiLuHh3YJMMaRQ8ErheT5qcQCXJP2D6N",
  "key42": "2zn7Rbr51nbkfWwvp85KSaxHgCwHrLMseGiTNRDB3GQo1EgxotbDo2PrrDKGQWAYaKLGgoWnVwmmnYynW1fvRZ4D",
  "key43": "RhaNnVGGEnvq4Rxg3mE9CukvpTFrRKT1c9HVanNjMFQsUaaGkHj16Njdw3cF2aS6beTa8uQ6yuJzPgsSfXfJuN3",
  "key44": "5wQ5A6VK3ztqjbkM42HUr1iiLZAQiWGkam1cUfRjqs5DQoHdPbKNYAoSUU2vLefrru22fLgGTxSy5My4hpuqXs9u"
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
