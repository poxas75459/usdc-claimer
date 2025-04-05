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
    "4C53Pdm1xbhuM2nceTeXben6DY4JEagGhVqzgPC9sXkjJby2XQaGfAR1UN4c66rTm2Y6NFa27JEd3UcFruTUSKCQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eAJoxscLyqKWVrJMKAdLK2mAohYkYeydfDDMd2cSZiKLs3yeJxhowrCgRDx9JtokzRr34LaXgkgLVvyH5fGVeLW",
  "key1": "63imAwPnqgKu2isvgr4BLS1bbUZ7bRL8yq4BFbnRxASXNHtfsZYAUh6hCxUAjsHGcPqWfo7BviwjBabghKCsP6S",
  "key2": "2ZVok2FZthRUUYZbfK26s2Qy8Uw9uUezS8aPhfLJcGEY6tyqgFmcBsjAkNjPnr2SiYtusN3ESfpLZpxJrpTKr3Ux",
  "key3": "twysQqUN1xboGSne6HEJUuSz75R1x2Cd1MdVYFaX3Vyp1s9My1zm7uRDpa5GHMA8Nw69QjuxxdhTE7Pq7PdYfAJ",
  "key4": "3tMEf6MgRsiGN8fmQA9GGjDYV1nMeeEuCZD4tQXcokgiR3K75g22HAfmppRnYNtnwmp3NTQcKjGasDJiYfpgfpJ3",
  "key5": "5S2g2jRdWCnXUNf18mcYPNkun9xDb2Wm8mAKTHX1HvttK7US7QwE9bVmaSzi6kCMh3BDAyj6PQ8PFu2kgNTvzqKe",
  "key6": "2gNvVFmXYxvEkQdMfEZWSNeD7JScjSSPhRUuFHEiJUMnFaiB2gfb8a619mRkwo62HrMeYo5PVPh2yV6Gt3v2jL3h",
  "key7": "5TphnqSG8LLKJ71zsqPY1MkfGRdkezdq7mpKsVXC66HW82GyNx6EnuycBbD6kobPuML21EvPb983W1JhyCDCAjEo",
  "key8": "5Bi5X4x5AFrRVaeMUwJ32QroXBhW65atjL3sAKA6wnkFUH7gRfCkXp7ZDodb5F6QijVST1a1xeWSS8WZhBef4v7Z",
  "key9": "5jBsw82VE8DxtvTwDUPT4mHnM12WeLy1Ez1NBPA7bmyvSeBRdaWmjBzVz6XXvsFQYTsHYqVxSRsK1fwQPTGXyJs6",
  "key10": "4aViPs1zf4ZvNceJHtv1Xx3VBCHk9TNGQz5t11cbSW36rKDf5H8uxo2Upnz67gsn31ZvVXxG3wyzYYPhbN3yxdXw",
  "key11": "2jdDZ9fzDQsQeh6m2CbpHWB4E3b5ridqapPfFHMbXm2SSyVd4jDDTggiGfeN8BN47TsdmavBbTEbwQ5M4LdwdrU8",
  "key12": "3M8NZvBZcVa2kKZ4vrTyDf9KLVg2oNt2srWsq57RtXvuvB1Bsm3o2yGh9cJf4NvFMDXhxzS8tqM1V7qdhQ7jxCV8",
  "key13": "5NFCAcXDCZ8J6CU6PdKiDAeNySQPDGZvRRU6dJxjmLr7zvt78LiC98USrnuq3opKyFu3CPnwzzXDKGBXtym2ZVzF",
  "key14": "aYKgP9PgvQvr16SHHTZ2tmnBLreBSZCm9aWQreiXG6njLSk1JU8yTgYj1EBfW77HLmXTBXLMhZwmSgDFiZL4ovH",
  "key15": "383AANXAA4m7rgBkhAe3k2BYFP9BdW9bNndhYgMExgs9Pcvh85py3yrq6QkRw6SNmSudrjz4MzMCrGwEXorVFDL6",
  "key16": "611YXDwdEEWT6DxVSgtVacbU36mKZmcG6x3bt8wqBHTNt4CeVBTRGCzw6e2K6M1tj5oGbGF2FWyjkwgesE7Zo3MK",
  "key17": "3jxxvYcZsmfn6M5n36PLcMiMVURtZ6XNBhw5TsvbKaabbsmcUCSHwFYMKWAFxt6zPZDWkWTUa8MtFTvTrxidQ1JY",
  "key18": "3MuxvDqKjt448UfZ8MyVZnYBzpR86eCQDqAcvbEKNswb76QjL4B6a11rt9WoiMSucq4RQTinPyfaQxpuGcXG6LjN",
  "key19": "5tXcuAWCxFE9B1T8rudbW1n58oqstwPsxTTJZFVjtMBnGacfhXAxj7skqWXSEumdxgX2Pr1fvYDSD7LpzENr8myG",
  "key20": "2RQuPuwhjkAjEKVLyokapVWDsi7YCaWQra1uHD9s2Xn6Sy2A9rixiPieeBf4iY8DcudrAPy3Z7QNvYzg2Z1YvQ5t",
  "key21": "5WWYsMAPHEvTSGvV8PdhDdpUTj9uuRZwj5egZjNWdErP4Sm7DsyfKUDPraJaYHBPpn2eaW9ixvQ6KzXVWCosAHCA",
  "key22": "2rgYZxbhoruTn9eiRbT6vv5VJKnVnMeCjC8CRYXkjEeUTHanRdPFZxk4VXyZay9PJdVW38xgSgonJBgnUVsjZYBa",
  "key23": "5aM2oQzQzv92L51LGm9V7rtsFuBakM8R7VAAzRFv4W837PSgy4F8YU2ztf8zG2soniUY79kJRoirPzwieF7CCWN6",
  "key24": "3mXd6SE1hmb4dzRR8bNG92ebsyEEK2Wc1AXoV22d5z4STqv2XKXgxsAn3oMWvicy8TWTTAW9Ezn1h2eM3jvYqtSt",
  "key25": "2perXDJt3Upy6aZkWrSZMgazAvHsDyiBPHXyYaXUX5Md8xZu7eP4N7C6A6q9rYRZsjUUNA35MQKnwA41hn3Uj6q9",
  "key26": "5LMdHDz8zW44SCMG7PovLz99CJcoJ3NC12P41DxQZKKMLP95H7bmLQuhqJ5s3sRSH2Y3egc25xzBJs6SoxwVdqLs",
  "key27": "3BHfrXdQK6zpZLpgV7RFjgLuFgRt5a1wh22Nt42z2u1nAkLgRCpFHwBdNRR4Tc4MEyggNoBN7DhfXSiGP9GWebAj",
  "key28": "63MthA6NwTSqHKycoJfw4t4nj6GjqCVRHowoStZoKQfEPF4wWdDFE4WWCG4qTAXK6eJ5qMpaai8xPohzkE8TUBjH",
  "key29": "FnQ55SdbHAsysgdrtyk1cfosxt4SiaysTh37X7C7XywCk7gEfvWr2YpZYAZUKtx9ZU8VwWjeWyx33G5RxRYNSVN",
  "key30": "4d6w1fvvH54C954n7UNx1LRStKRJZSh6HjBnVZMWeoJgLaccPWuUxNTpDLBYDCax7Kz7unv7grL9hCi3jb2Fv2JE",
  "key31": "59i8iZtpuuvx6ukN7X2aZ7xFsxRXinRpbAPayanmGWiCXYu4oZxaLyrPUe8RrguMxXDaXzpQ7UHweYwQ9ERR5cpK",
  "key32": "3LUZVZWKBSHFQJimhnfhwLBAknLCnN4niVYNL7xEjRUctdfTdiYpbCYNXFxzVWjK121Fwxfgp1Vbut53nHJKuZoF",
  "key33": "4mrmFagaF7npkVJRVitxZ52GJQhUdB5JZ7M4tvcj3ZNiUf3gwYJGBJFrXJr3uiJwawLmGAw5qivHsfEQHZVa5fud",
  "key34": "2nhzWPXefo31m1vJUQnrLeEA3bPUfdaEZQzYUKWnTX1ZbVfAc8daJ7X1GrbGvo183VBC24ynr5FNtdP1WPYCx4yG",
  "key35": "3e3RiDKEv4YB53mkhjukS4k7quUVTbRXjPPRuuM3Rnn6prdMK2unPifzid9bNkocQR6tCzKiiGz7KnKvURtXdDVV",
  "key36": "4dt38xGMFrANUd9vwXRqxmQyJHi78L3g6CWN7omkrnr44BvRHQQXdHS2fBbApZs3viJggcsdZSja6uPHhhHDLhaZ",
  "key37": "2PXtwUvKpGBsz9eJ1aoZSTE6ywfdtBRmVkJC2AdkmmubxR3pqXGeaqKzuX3XWTEzENHgty14LDkfqn9mnB6nb4qv",
  "key38": "3nvUSmMdxnUcxWZxxBCFXN5n3CJz8iWqox8dawTV1WF8sA6HqJ7bEUdx6DNUD6QEafbVWt2jyz9CUE1dfANJ7MW7",
  "key39": "3ex1aUACYVfmcW9Zvv8aCzmbjkkQzGM96p89FYuooHuSDYYDP1VrApMkVb8zR5diXLozVQym1bJ4gJM8PVXXzzGf",
  "key40": "5DXyJjKJymieko5pnsMMmkVkt3qM5hNfZWut2jR2BiALMdLmLRdpbKZ5yD5C93uRCNmWoSyL4MzZqRUPRJePcEnG",
  "key41": "4F5bQisjvPk11sY6dkpsyY2ZArJAFks5uGBm2FCsRvpCuF5nrZapd5K3ygeuQPnyaMLVusDUJhgBNWAjU3WULv1t",
  "key42": "2b5C9DCNN3VfkbXw9rtAfbq2V8xZ64RwMwvUcT4KxWBicDFJBDqHwgWK5Bvj7WwvEFFdAoR3kAVw2uBvWbNhu5iW"
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
