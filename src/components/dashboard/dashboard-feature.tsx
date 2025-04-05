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
    "3aEiD2KxVH2tVjTmj8enmp3qtHXnvgwfthFci5mU7FekYidfjdkzgzAw7aGGSszAZEawaTPfdxXWndy3EXgKvUai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VDf1vuhBC8jpokkRVVhf8AfwChsXz1oDmbAsnPahnEG89mBi5AzPPvUA4E4sXyo9ZwPTwUedZWn6Q58ijh5Eh6J",
  "key1": "Z1ntE2cYwu91qrmt94AoLu4bikm1Nkjn13pSUd3UYbQLqaTNEjevU7DxSgJo9CY9wq4yisL1NSQmhqG8wGSdNQQ",
  "key2": "4McKYmU4dNxeQ4FmjdwUnrX3cwjbr1E6u8nWhQVioafPQdqGTDk3vZq7vbgEMb1rB6JaF4wt8AjNRnxpuPUkru2T",
  "key3": "5xPSWeipUn4WVQXdoaHmXFTcXtesk7wMkkzxkcHR3tRixSKpASqVhWfgh2RN9zDvDn7oGLei3J3C9EmURDk6xZMM",
  "key4": "5ewW65jcdivsVSZyn7TvWj2rF1XAYF3F9TaiA7r5JpJtYq6zLdjGV5wPrFR29eU62vcy36uMMAWHVxyBjmNTgXm2",
  "key5": "9EUy577nnAfed8pQTws1QWajAJsMnUvEVhqwyGzuMEv9855HWLdyD3fjSUerR75BtCGRezsq1xz7GjkhBsPGHdt",
  "key6": "2kfWiWY3Q7MoQo9hogGyVCdfE6Pvrhtq7GUA9mZx1xnqMJTSK85mLW9MGV4JCjstVmWQNLVqyDxc41MUCUfMzX75",
  "key7": "271R5FtH7L85saUgn94qrKeuDiCBQ13iC7eyuQxdnoFz6LGZEAsAyx1zaeeWY47UVuUSEeZgWC29hHZcNqevQH9W",
  "key8": "XpLnFH2nriEzzVJ2fs7WEZ2J6n7MuejqXB8PSdEtMEYk619TgVkVawW7hfoD6GdPttET3gcCHLhvdKC9122VnZ5",
  "key9": "3yAV2Lo4YW6sK315TKaYyTjp9ACKx1VW19rnjMqTmm6ksdg6DuadpkKg42HszCL8qKXmmbZDBasQXppMBgQkjP5z",
  "key10": "3i5WdXg9xayM5bBRnQpreTkGK4YtsWaXeSiGm5ysytjat1xkQMTPduJeBPAc8Kuc4NmCBMUpRySRymyqCbiMvWpf",
  "key11": "5uX4UiRgpCJvZZrJFahngDGP3noFDgkFoEpsCTnq3M8XF4KdPhX9RQFfsg6CA2d8QEEigQdCLX5VgMbr98SDUxrN",
  "key12": "3VrNTu7DNyNVQmdJKHX7TYcwYWP7vhVLCQY3fCJBkhBhC25x2ufWL1A987ZssTcxwPpnb2PCzP4Stfzn3QGJjE5B",
  "key13": "2Xp5hrwovDARLqqJaz2LZ5s4cicgEfxDya1mqQwsZyoEoPq9NAoEgsKP3q2SqXxdv8y9LNhz7FyHpr8LoegirAGn",
  "key14": "4zCmebSDWg3bG4kTeDDDgYfdKjmjz7oyYKtRJWFoUvLTNKPCGUgCEDykwZwaNrjrCVdJtySPvDqEk6ktaNY6QBMF",
  "key15": "5ddK7hBeejzosSiYfDjLTncQUnq23gaAkJA8H7L1amiFMGNLBWeWNyZyBCC5CQKT4CyjbJgCBwwgLD2vJiS31Cfb",
  "key16": "5rRnmwYsNzF18Yfnks1msJyu8jhXUgKEWXsF9cbsPCyinJ7bqhTvQ8e4uxi5c6GB3iPfm3pAFonsq7HpXzXrudem",
  "key17": "3AT612GtbSXbqtonNeZ8fbpdGxa68sh2acaVpx4KmuVULLbvQHjSitUfY3Yv1PUCLhbrSS2qHocBF3xePH19paDo",
  "key18": "4wggn4bcR9iGc39xicauSDrgN9dWvw9xvERe8AGYWmb1CKt7UfR2a8HchcP4Ccy9Th9gxVM3UYwAGRjvDsaGaoiH",
  "key19": "Bj6nSWXAxLFA88BY53xUEeRFBiWbrRbtmgBpgYzB8iQUw6VHE5UVLufNr5Eswkf83YkRvQfHsoiZVPSBn521PnG",
  "key20": "4baq4gAgP2j966wJ83FGyTJ4JvpW9PkZEVh7MBZb97oZB4VWQ3f16sfJd3tDz8y3gfv1kXNYiSGafqEirv2uZMF4",
  "key21": "4oxmwBgBKxEy39vc9GnVpD9UntqBSpxKMPuo33Ca8G95YDc4hWiz1wHt1wrhjS1Jm7TNme7aLRiEr2KKDVQpi9RB",
  "key22": "5V7569M2VNki7GyY3MAHtpuw5TdDxZjMyyfvqP6ZzmjyX6sEcmEcGtmJLHzHzzx5Y5syszT15ZvaeYhM6JG7gXC2",
  "key23": "2uSQgLfLHDK3iEYNXbjYFrG81YoVsirkanySxc7xgp5EEiNP2FUfKVdmugL7cbYdDnUTV7B87wvYApqesL8bVdUA",
  "key24": "3bvJ1jDhABYoRa6MMSPUFgENT95P3TSJFAFWz3pPSAV9AygMT4rTmKqXKinXtu2yn77p2RFabmd6gciA34VoWR2h",
  "key25": "3o667gXsBypywrJGSzsbJcdi3wUrvEzcKg9T8vsRho23Aj8Ut35NyDdoqTBeK3P976eRqoB7nK6Jvt1z5FSSgf83",
  "key26": "MXKsmkYtvX4hh4ebG4f8uKGf6vZHLdmTD335eR3mL3TfUDGzeRpqzABdEJ3HJroXp6V1srxtXy6cGNPCCEwHLnN",
  "key27": "2YJtogebgbWbUwgs2Mq4DK31zhuTWo4CJM5JcYEujHVHuKH9bqQ9CjnRNZvxr15cQ4Ww7sHpMB999gEE9JC3A1x6",
  "key28": "SBeJ6bNrgTauxeNmrpVhc3BQ3WU7ASUgvrsBXCGVsJEED5tsb4ACKtC526n2ee66CsXPmXAAUhu6dKB6avZAAG8",
  "key29": "fQiAK3tPGHxmCicvTV5KjyFm5M9ZHmpCscD5yZHQB6n9hGXTWJ99B3KVXVb8aW6FkbaGpDzphMeBYEJrj1YV5th",
  "key30": "2JDKceT4aMoTVH7GYJ3m1QwVUmEsxAfnQEauayA71dNCwWTniypPrd2Rg5j5Z9j7Aj7yXybstRiSz4grFdHMueTG",
  "key31": "3fHHtrUFBp5tvPk6BzDLSK4APtz9kZnYhCUan9c8gqUQbLZpkin8yH2GP4n2VydQN4JPVYWLdbjSKJgXPySsgxAP",
  "key32": "29x8bqHQVk7Xcz8FSynfJiEU6UEvMeGMbHpze2cWk38nUhwUZJ9gzJiBnxSYq4RtGkJx8sh8uKECKF74745YLURe",
  "key33": "4tsQbQBSLLKFSwY5KceYVo7JyRLkwH1pxBPtF3gsjpXey7jfCDfwPe8L3r9bUTf125iEdT8GVRFXWHnPVPFKpDo6",
  "key34": "Zbu1U6QaveeDUoUaBpnWK6DBuQXVhKjHwS6zkcGEVVJiKN4uTCpDNz7skCXHSa8QPjMN1vC7vn8WzAqY2hrvcSA",
  "key35": "4QLMoEmoV8jtTLWAwHMXstDnHJDkHPDuvfbKY4DUFJUenTNawcYS67RgrGntpANUDqZYwE3qeTQ7vA3SCcenKsnp",
  "key36": "hv9NdMu49NNyi41zgyq3sm5mrRtaroStKhtTNh7uSbgudcms4gDGszPVN9k8t89K5chffBM3ooBF5Mk2eiB9LhT",
  "key37": "AvqE9Q8Far9aBYepmJUkwexbehXDPnUMik9C9QET8UA73dUpykydNninUAYNKPU947BT66cX3H11BGGXBbyqBPz",
  "key38": "4VHKz8cEt8nZfzh3DyPb2KmUFKHWEKm68GSUyR5vyEqsWBePosDqCEfT2cGB8e5g2DZ9yGriJznnorW6PtATQHJ",
  "key39": "62K29LLmAc5ogMwzkkTrhCE9xyuztiXUfwuxdcvhHqwHRVuLbzcABRwtJpSurwtw3uiGoVoDPsnNsE8Y9Hc7SHe1",
  "key40": "65U5FUDaVW4V6WB7NwNmRSjb9QomnNTJc7LfPsBywuvkkPsoiYam8UYsqCeMash6u3Lyqbfo1c4MiBARXwEfkRYe",
  "key41": "5DrfVBaFwC8j1My5Z7Bje2ZmXjzUTv2j6THFyHcLLzbtBtk6YG4nC2ci9hZhN5hGjq6DY7EQHda7YoFH3HdnHyaH",
  "key42": "3SaukfLvtCTTte7ZPpUzqXXjb5Q56aB8R28DEbq3o8j6nbcxCgecAqA7RDjgoX8Z2rpKzoEGT7fZXEmBY3GR5UxN",
  "key43": "5n5aQYDzwEFqQZxnXsfRnshqWrYNocccY4fuYjvVH5kVodzWk53bH4nDPHuJw438SxFwNTzCPG758pM7HFJa13ju",
  "key44": "4aSvEjsokDy1576iCumANxRuSACs6U5bcw9v3tVC1ZLtLxzTU5BL5fZ1hkbEquvYi6RqJ3GQboqgvFEcSFvvKcZH",
  "key45": "4WYu64WefMX7gqpPjjpNBqm8uEUtvdWKvnJXe1z7CZTPxETfGPZMLARw9YQh2W1xsmwRuNCfoDqcnAL1hpgsDdKT",
  "key46": "5UcZi7jihf57FiFK9EfvkAi3Tk2fu8Fxrx3D2oFVrr2zKXhgfxk7NqgoY65d5XumMX8tww9u68MWnzMtxSZuy6D9",
  "key47": "5Xeyequi74J6cr5C1ADj2UJcPNqhEPansoGN7nWGpB3TgGbthTLeKfByrFaYy4YsnNGG4bj7DqgKb6UGfRrJYqMg",
  "key48": "4wfUY1Yn9dKcY67mqkUyZ3jiS26pG3m7UXuU21PDLqHWufy1mJBywhPy3eib3GF7Mend8QuZNCpHPHRe4roeXyew",
  "key49": "5G7nD24VTpW4DNSzK1yTsKiTUQrp17EbqJeNwHi3V5upsNvHpszmzXWTmjqwVcKjHpaxStFmZemLLUTrnKL3kt5W"
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
