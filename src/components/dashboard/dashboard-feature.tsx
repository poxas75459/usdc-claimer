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
    "4KFX58pFUfsJDVFaFQ4B2btpc1P9s73N5ZyJ7yzjHJwG2YdiYaRT2xJs5G1MEZgYhk1TKjgx1TusG61gPoi2mzrp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g65nYs2p6p452HihXic1wz3gA7GRsxmTKyhXR7wq9qHRMjdft7n9D4JggCwD2ECiE3B123v5YvQqbTqPvCZyED5",
  "key1": "Y5KYKAd9Sg4NvUM84RV3koz5XF2cisaUjtDRuieXATme7fc6wybfuatxqAazz4csoa8RWjDrx63S7jMfo6hrfHf",
  "key2": "5A4zsGMb9ke9sRYvYkvM8SVMoHaisXf8yLFytxX9xwHVUdp4SZmzn3URwTvgfgdMbgsyt44SBWm1J1hTX4DqWRgJ",
  "key3": "4Fji9Sk7xnVnEXZRqYCsBDRHx7cQWgvkYGbmwkcQwdDbVsZB57S7HbwrwnVj7RPnPi4LspBEoqPTPhR1yvonsUus",
  "key4": "BK7k4Zr1qwekoJ8D5A8hxFYLDALovLMskTQZV3jD9waeX97zuYjwiCTpATzyJADZFbtmjK6nwED8saReKQBnfBn",
  "key5": "YBptzbrcGtfqQ2579oet8hCoJVjHk3K1YP8KqhZTAb8YtZKrvGgU4cjDoX8HaPR6mc2ubTnh6bRDvJw2geHzfxa",
  "key6": "ZbRqLWkfxpMjD7uAiHzQhg5q2MA4zfqDjrWnr9Uc8JDoSxdTJA25gCBBuedKuQmRPa6zDyw57j33mL3kC8t8kfn",
  "key7": "3ck68K7ErNVxCz9hMY6RmwVhAQ5y91wDu9Ey6A2D4K7PLTiCroi516scQ1pNsz5vRaZgEiumZ6GUDY6zD47ue4F8",
  "key8": "5Gzq1NoC3F5FCfBZVSMD5ibwM1XdviG6n25ikxSviWLAJpEaJqdxG7qJkUhrYYcpHx3k8tLpQ5249Kh7XrnEjr5",
  "key9": "4hDP1DEwwxaHLTEoWYWNvET34t5ndVPu98g11h775yUguBvFM8oGcgFgbjV4NDUDzCA3K3kkvZtsrWrPCrr5V45j",
  "key10": "4dbozdNLK7HjKkhADQPXrtzAyYPDZfwL1vRqJ6zXCxbJ5uPxy8eBHWwX4HDvupMWrwSiZppvtXUpW1kuWuaseRoG",
  "key11": "3SiubZnRy5uLgYa3xH4BTkZ7Z3KbwtEfb4VoH8GNjs2tef4eU8LAMChP9tYSBi2L7Zg18W6yfmhPS8QbdA4TC2qj",
  "key12": "4yLqyDV5rFZrK45iqGHeUtVjo2U5iTxwFb9Kar5FeF51WJQaiSig7fwBKJT4AyHQCEBcGD2hYdoAxWtGVEbPP7Jr",
  "key13": "1B2WyKS33ENjuPSteDiU6raYpPBmZDQwM6iCPAfBUJhE8zeowD5EgDKorNfRXSavsVBTwcosLoe8we84teyUn2h",
  "key14": "2mx9NX8ws3xVEJHXg4e83G2qnt8X6UjPQoq9rA4JAN7En9F8HnjUveJW5ireVx9arbijd5DZKJM4jZakWDC4QNd",
  "key15": "zFQjSeBxkcCLjHjEwZCvzAqqpzGe1D9DuXi5w75tWTCrS12mBPgvzJrwweY5NHAvSkRzcg3JLQ7B3q6wUNM565S",
  "key16": "3K5FtFkTnCheYGioJrhdYD1DXD4kA61phZSK65vKT8rVhP876wHjJ5cVacdoBmPsDATZS2BjDvgxTyAa2AY8j7ED",
  "key17": "3X671SkgT6PsiRowBEcqJxDCbRcFDimKfk44kwMZ7SCE7JiGSkzaq3B2pmtcYq3CNFmfBE36rA8H9NZPT3a9EjpE",
  "key18": "3prAw6uw8AbkpXTnFt56pzzD3RVcWy5pGyQxczDi6dhct6eVk7MTMhwZ5uUWNHUXx4Cj1fRX69fKfiDWAV2dub84",
  "key19": "aLNpxPnrNVChggFH5DHh3GPzrusX4HJdyJ4q6S54zgzyFuCNXKRnDmmRcz5LhKuUqPdKYrJtGeTBxw7sPTQGjyb",
  "key20": "5CAE3Rfx41ofsk5rWhAEjNTxi56VUSBgUgo58s1DLSGkbCGyM5H5UqjD1sFYaaPLeYgi4DpPqT7iB8nYWLo7TbvX",
  "key21": "3MyjB9GuK4KWRr2zDy8FugAdwVeH88bstmrdiW9NwdVXHwrTT8RYxNxiaD29cVXCb7GHaLsgQvFteFDi4nw33YkC",
  "key22": "4uLpzbYdFUMxMGBvmKVAihpSM1WouctD34LmebJX7jNXv6h4rstPXRA7LMR6cA5hPPc7PqYxAkcBN8Z7FketEpTP",
  "key23": "63oHBKF2pAvZ7cbeFXxW6vjNqmT125cYqVq74d6LVDohy5qGUsk2QXaKhi4x5mfSNnxFgxsG5idkxaELYoUcYaD",
  "key24": "2TipKnLgXrn1JKunrjRrumHHmrum52SgRsh78q32SsycY1k7ZQD9Rixe8ZuZ2iXqJJHz8dLAWe9hRf7ZnadpurkV",
  "key25": "zQzeKUkPVHKhApX1yQC8VUu8XdFZi36FxC4Dn2pScarDUBncLkJUXpUjT5h8k7MpdwH4RjesfRfuuVeMN7LPBgX",
  "key26": "4ApZbiTK1PYTxxZh2LUKAzdEyN5CfrH6rDvRjVJ3iYQ2bvR7xUF4YHjwskYoGzaDQGaSu4PpYbgPR6aneyzdaj9n",
  "key27": "66giV5jhBze1obcpC9ZxYT4Vard8fQXZHdV5PHS2wnGCo1ss66L5w23GJanxsvPpzciBwPQQ5GhJqbUdMAnAygw5",
  "key28": "4hcEgP1sU543ckMRRvass4tF4ag9HZNGoTDWAHu7cZ6nUnQVjYTz9Sce1ewvqGZP6sn87gsb2MahUEYaG875Cprr",
  "key29": "5bNsHmjLdkL58wpfSeNEf3Me8HY7tWXdLTvZSgjskPJoKrp1cD4Z9uZxsLogTvimTyYTRvsvSBoEr2ASBjwnMQdS",
  "key30": "4nCdsjnmjqzE8oyBoWDmQQyvkqL6w9McYzJKKar6jm8YY7YYBdYEtz72umJccmJaQvDtoJHK1fuagMv6PrTg237f",
  "key31": "1N9sECuZ6tiKM9zN826BdfHqvyp68YMK2fVZnpNPiAi6pdV31kJU6KTFT8SyetwQ86KufUaG2PrR8sh1HGH6sao",
  "key32": "3oUvX2XbppTS5nY8Vv5PPFwmZAJdhwNWMDwrdVMoWibuXionriDpfxn4QKu7ow9oYu6NZQqsh1bm6bq3YGNo2nSW",
  "key33": "5uDFaUaGshvcu1pjxbMKBXz1abgYww19CrL9aH1RS6uAhfJkNzq6GJ5EtdRzcvmA6Sh8nHTYVf9pCvn5tcQNKGBX",
  "key34": "5dmZTUKNBNbi5CL96X2iyk3n9rhP4Dmf36g9pqiEbnKQrGdcAwGgtSsgSS97EJVzfP3dEkpCGqEpgPjFWNVcmqfv",
  "key35": "TitPVC6YP765zSSiTaaqf7yuvPLdFxrzs7iWKjzfzDBAZ7ufRSg8CRYJufHYpc1yMeSahUvLFLojPCj6bpk8s7N",
  "key36": "9RVz9DCJ5mgQDSFKYMGqzfBp5NhCNLoEZvFPSrfiL42cBgHg4gbAqSJZvRC69t1UN26Y2tN4qbrwHGFr5EAFVcq",
  "key37": "3sbUF5txs2Bmz1kDfC98LxWPZkx1XJHeY2d4rZ63xMDT1ot5SjQWZj6YEVLw89PF5Qf4mh9AJNEehwYMSXSjxtyE",
  "key38": "2bhESCUKyvMb9stKLrYMsXQ3aV1NaSgeR3uLfRwJdUThSoFi3n1oPUtQCUma6wvsKNeyaKVjtMvfWZgoPWLhHHkE",
  "key39": "4qve38QzWwouNSEwrceVbBwwiToeDXaE9wQJBiZgb2xMWXET65ZwzLXEjhVnTpBMVtNsLSY2FrXJwKZd5367e7Vb",
  "key40": "2eqzuZKk1H9PB6JveqZBhZzM8YFFYeNsCdpufMaBDTnPHnHaYE1TwFs21RyM9ZwxCqty9TqMFM1udR3cbyG1hMiT",
  "key41": "sXb6in4m1nnQhTcj6XKjseRSRNrfC8z22gKrv6K1qdibEBW2TPc15jDgyi5xtaZFg3sL4isjYKu286FWpWFtUM8",
  "key42": "5qZxWiook5m59eZAPAd3ZfCgvti8pb3Ud7DNEdvTTEG7HyYbAVPb3HMmNhA55e8vFYj3ubrrv8vwBnXKUh4W4e85",
  "key43": "b2XjjPiH2eyZK1AK3qSytHXJ3HMNWgLLzwT4kB9XbPsRT8EWyxMaXRbAsfHtbvswg5BvzAJCFZDsKcaUzyrEzCL"
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
