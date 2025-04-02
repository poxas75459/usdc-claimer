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
    "H7GPMRn5afQtASJ5dqQLzXUaqThcW5dbg4tYSBggyESJNjopJyriD3KgV5FydgQ14St2vztmLgQ7xwvB2GjjVZq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LyzUSs1RHcAs3Xk8HhxxpZVrL6Ep9fyMQAd4ajBMpHuug2XG9or2mLoh7v2nveXiVA71PrgAutFN7TCTNtqZPn2",
  "key1": "4Lj3GEbqsfn111eS6J6SJouvCb4jQNJiq87qbgbUEnksp5BC4Q82HGZjQySegJNttFd1MPnJrJ3gama1FjwsteKG",
  "key2": "4KxfNvLB2gt5YaiStav3K3GSHnNqQQZrgeFfF6ZWCQjMnRyywWg5DKwognKKKbx3tHVFyJeiNcFBGuZqr41EcyS1",
  "key3": "4gGcCymoFTWvZP5h7VxV5gR9ewfcWVmaAB2MQyayZGnTYWfrTLCtS9Qt1mYNnZ3uHDfB9EMAmxUtFbeknLbKVY3Y",
  "key4": "3EbiC3N2bfG1eGczjWVAbdoS3a5PL4fsytDR39qwUco3mfY1qmqjtAxHCcHdnnce1vXjeuMxj1o6c6XpjiLo6ops",
  "key5": "56ffKRV7gikybVqyNQYdQrfM5zD1dWXwGHFevA2FKZsLswPes1ijsr89ifoA7RFZEzas8TvyLqUwyYCut2gRgq1f",
  "key6": "4AaQb5xmxQeEuQNJLK5wjfacF8VWWMZ87QQp6LTswZ4ezR54pbLUsao2cmDVk2V94azraSRLcHWw6yHFLYMDSgJs",
  "key7": "5NfjJvBbJq2vefmNBSQwaRVMha8L5ZvFkwbw79kW1QPjSaeRi4q4UegNXeNNFtLqTnx8FCr2EtxqLhMuYUqdV2BH",
  "key8": "ewHhAK5QLgDkbKv9SCwXTTtuzT1kymCxWXhbjiVuFJ7yNotNogYVV6JUteGN4UWHuqBvkPncj1WbzXa8ncUhhXT",
  "key9": "49rnQnkMAuy4txkRGtXApkjRZFQoSox8JC7ex9SoWwmW98wCNfqxmqbKtBbHEPANiZjotDrENiFpqAUnWedaq99c",
  "key10": "jjnEWuCSHv9YHN9vjj1vYJ4MMC2bpL1AHhV27LvHNBcCs3jW7ngZodDo5EHcMgkxvNRuXByfmKGVFYp6eQfQCEF",
  "key11": "B8AXt1oryFZyvXnK8VqEPqW2D7HQYQ4DWYbB5Dp3VtYGEUaUfhdotkXR4u1mick5wSN8BKUjtEetuCFmsjxLWbu",
  "key12": "42nEjb9FZnyNbLJ7nmTNMgW2HeCN8XokYnbHnrL1QD2JRWg7XF5LpQVTacxsieaXqXF3T5bADH5hi2MbaChaab9r",
  "key13": "qbGK3W9mFXW8LodccyRGD8iCLBP5bvmcvEzMmNzZWutAziUBRHwws5xUSkcqd8TQYQsNuTjJiDbWK3DvbrLPwJr",
  "key14": "5aQupJ9ujZ9TXRqTZsCkLmcJz31me1fAEyvwoy4S1LPu6ANs36VAS2G6SZZa7DPS7kFFVdYNhek8xNGMA2UYHdbL",
  "key15": "51CuuBmzsKH6bqwPCZBh5vyLphneYEsb7hhTzWZwxY9Y3YSyVRZ1sD5mNbQ8Em5gtnVC2N34dkFh7CnWNkp6F4eM",
  "key16": "3sGd2x2X1efk1zyX7aJFAJJ9JHokgea4eEso9Xb2VYyZ3WfrF2YCA2ZEc1DTQR6Mu9rSRNawoGaz9kr5YztzDpMS",
  "key17": "mKQMFryrKqFwWLC1tAVnaKcXSSiNso7HwQ1XMrBS5ve9iayFpiFauWNNZD7gDeoU59R9Qvv4mdgrCVw9q5FkE7p",
  "key18": "ypvHghmHkYidkPXNoMVZJ7wXu7No42RTfReB7AQaQDx1eMn3dhfvcAo2LBR9JnuybnZ2YuyPLWnLMfY3sjhJuRq",
  "key19": "kipLSCphJu8XjZjuUPRdvGYNGvv9VLHUQUPMNWxVZf1XeVr6Vd4SRjc6phWkNYQn5ABjYbvxk2goH4hMHXD69Db",
  "key20": "3K4SvjFbvytUHuNdhiDADQisp26j3188GZ6ihLBvGxrdMeveW4orLiKFTxZDNJ5negqKUtEYo6hrG8tqKeihTusW",
  "key21": "4DuxS5LVegrx4jfibqLSrVLbeVT9K9TtwMaWVsCKk3jAPN8XR4JELAVDsQediReJ8ZRMEnbW5enZgWNFhfPkwPsq",
  "key22": "RUgGeX2JUrt2QK1DzeUC2GxwBk7chSYP7xKTC9ByzPoCEPX7Nb8ZaQ5cQcQWcxrSSdwSKj8aXM1gk9JL5nzVb9y",
  "key23": "3LR3QtE56MaTe3vLCL6bS8NKvZzU2PSB6QcKLbXXHf3ux8xdMongbnA1mqGsmrAASpCp1ziY5fGeNsevujrssEUk",
  "key24": "3pVQma4Y6uEASxeu86B8dd4JHYxzDq3A4ETCkUdzBg9s7MwDAnKSXHCcem7SN8jSJBaopTtU6jhXysWvxvSkbZVx",
  "key25": "3dwvBrp3Coc2LtgWfGyQLz3CnVonVwv1RTAdWVu7D19M9vhe2Frm5hV6ax31a8xLw2e3neFoyiM3yAZ5dYnDW5eH",
  "key26": "5kdpAEU3dEMRP1ge3XMs2fpg12PpbP7zJuAgifvn6H7sKa8VKMkE8wYMV96kyEaLTWbAKNCyFHhjspQqpFGb5g7b",
  "key27": "fHxQM59WWgtqd28gAAUtRqq4igXiXp9nMCSvdnJExCj5vCTdjEG39NYGkQuWqMQCvXjRgNjQVg7d9Nchc1xuYJ9",
  "key28": "hcS2sJDMpb7CXtGoMhDFajwPwJaxZrY4Lg5DqGMz8qgJ8mGsHJwqxomYBUSzZQrYqJ9kAR8YnXKLoDjY2aoGJ3u",
  "key29": "2wd9DXyWEnVjVPPH63XXvHBGUofKaurzSE55rp9wED3qKySCSg15RuYt1EK5PwmeE3guBkgtiTQ1rddSZ1nRNQSB",
  "key30": "5jK6YHgaWeCGQi6mq6spHFzuh9P9WXeZTyHc7YE7MofALFVKMBhCHnZZbWdYDtMcsd925KF8xchav6h7QMA7bRKG",
  "key31": "2QDyLrTYiHwh4V9r67WJAVsZgVD2WD7HhJGDthnxLPModLmjwTmSGTQ9BvcBnSn2hvcn3hHtAsGruKZuftwP6TKy",
  "key32": "2w5NnU5rJoEh72Wt3eyoewcZjjCJtWMV4shJA33v2tZ7jE2Z26TRwtL94b2cUcPWoG7HmzpHdXEggJDnSeYxrnKP",
  "key33": "4CCZaAJccE1ZgYqzX9Sc8jGYoMrMEUuk1hf8kdfAdPtzRMePiaWKoq6imHE5QfX328FoA3zmDeRvQKou4wCa3Kn3",
  "key34": "2BZczRS1kpdTCs6SgsqrRSeHirsTeS7f2F1KUcWBpEuTRnCnKGif4mxsG2ED7wV9gBojYbK7gPLzPkKtxC77vg1t",
  "key35": "5mWmqcwzV8AN7UZa9VCrFaEGjRZyq7jXphdFoEW4kBJ4E9GfA6jpwrcRWTzWbt57cZfQTfDC3SUSRHWK2yZMW9Ve",
  "key36": "4xAfwDJHqRUSiYaAZ7oytg8feXDD8bSjBDFK2yuWVRk1tDDR2VTbDkwZnTmPoUiBuk5FhcLnErEqEKhaJ73vn3LV",
  "key37": "586v4fuBBgXcTxcYZESuLQf734jhCV49zmf2zPZUjJ5pAxqdC9a8ZYoi3EjnY8BXccYq2fN5F6h4ZKipsdbELt2N",
  "key38": "29y9jWUaR42ugBJcVQjryRJxkmgcSxbH6nnmTvnhPADWLMF9sKFyG9DN6Si1dPJTFvmBDCUqydQzqWSMjxjyjxk3",
  "key39": "5VSRYENJqeJoKr8AxdMHjWVVA4DDrhMfh2jBhxiFKQ1SJr4qk2MrxM5vtFBPq9gB1j8ZfntAptmbmTEZzTEX3BuH",
  "key40": "3EaxBw3cWh9heDPxAvzezscEhBPRT7NaQ47qKn15hfrKw8go3pKaQd2P4VWvzgjFoDsZmduqCL192qqYA4B6iCiJ",
  "key41": "5Reg9TAEeSRoc3ZEBUxCV28Qn3dDewcFykrzuDz94z1c5dxmUbd1rxJtpMxFm4u6qucTn6rNny5eurKwYMqABAE6",
  "key42": "xYANZb9M63T6VvJobDw2ZbzE9wLqD368TgCvo8T9uPoKEu5Ficp1e2rbZCDzP3mr4XfXVddutuQnEvdG7gCKcBx",
  "key43": "u3ZwyccjFWTE4JHCJqJY8T4qGdRhQoFfmzX9NL4HNgvTPQXdJsLF3s3pRmBJ3v7bGwdc4s96APjXQQNcvMwopDn",
  "key44": "4EC3XxSQWxPgjPr7cP8k1A9Z6pPJxQ374NgBKDpyRmBuhiMe98LXgKNANxxuCLsg8AZ9hf8KdWnAEZMYM7Cy5Cni",
  "key45": "5Aza7Ye5kgq5fHYpZs7zRn1hBXwhtts23psiwwJpk5RtDMKTt2YBiwJq5NWX1uw3DeMGvp8L9DFDV8WzcfuycxB",
  "key46": "3RjqgcVcStzqZDdXni5ughqREWQM1QKBwAcHNevELLMH26wzqJRFNGib5tbJ4xTiCtvM4oFccDPaSPf5D8aPze4v",
  "key47": "XXWQW1qYnCAnrt5tG7wvxQ25QxGbFmB5sfjh9MYL6d7bXhXN6MXumPxTY1n4YJQwaqwTftDCR6Uo7faxuPHMkrE",
  "key48": "5wwAbakBvv8NH3bdiCpPZjwJmabLAfnduSitrjaBE7EHtfgPRMNVfEwKj71nCt1ZE4xQVbE3bkLy3uZJBg8G7Vh2",
  "key49": "4SJGb9Ks8c7ZT86BpUvZr7aEBHVAKGJwDznyH49Q5f6eoJMnwfLR1RKvWYDukJZRgCK4bR9TSn8vuVNBq45wp7ip"
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
