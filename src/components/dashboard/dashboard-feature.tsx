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
    "4WtvL1Hvk286PxjVhmmgog85ziiwYQoFcArM7jBv8manvoxTDKCSPp61MPFoSPPPVMdu2sZ5VR81GFpb18fg1YYW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F9PJRd6be1nss3bsaRskYYh3LWreYQzQworUAwpQEsrzJnVu19TAfxARQiAy5J8JSDcBv2ybJctfAxGkdebzVzb",
  "key1": "cAiNt6QU9CrzFDjGavJENdTxfNynVYfeGUH2X1L8cHK2pC92ggUpPqCoEXuabux9AAYkv5KqrUqwr4GZ3u4KEe7",
  "key2": "62KmgZ7NantYsuMsVwYd7cviCs1wimVKNyaRYbZtjNGZAyn8hFaa9i33SmV4Px3iPL8HQZWfNzU6oPhyt31qyFWn",
  "key3": "2Me9BtkmeP7YLjynkd3PK1xgkzThsAutEXPZPVPgeUjrK8BTSi9pqKM9ryhTvdwFvR5GLq283U5m2oBhqov355Yu",
  "key4": "46ji2JEX5ZXSNnM16BL1SmMVxqk9D63dQn8Pk4rYJXyoA8F7g5JuhZDV3DB6qt26hM7ABLPA2gWtBoXC6Hb865r",
  "key5": "yuWthwkPM25FqtSt4k7kjaGycRrZEVPtGxgiuGzEcXeXD6kc1qgtEWJirjXqwMCcCUeitv7QtxKudGD3jKFoZU6",
  "key6": "yTNUZcaFSTt6QEVJwSQTca1LeNHLSCLqVCYtBHwzSa955xeZTQio33p9Zm4zs6wpFhhPnBZeQasFb4kDGhTX3D1",
  "key7": "y3LFiXRY84SPTGXRrLFqQvQcEHWzkij4dwULKUUaB27H2YDNDoRxzQXfC2zhTAsgxdkUA5K4qVg4SqkSgsFzPdx",
  "key8": "3FfH7uSHzaEPBdBDa2VURuNd6FfrMn3kmJDb88r51iVEemFZWAPqEBPF9XrdKnVV3umiufvb8LaDNmTbQdwcQqti",
  "key9": "2WrEsE3hipURBiAvrfKgvjyQsok4rhBYbVFxsSb2zNXJzMXo8asrKkuQwCc8BdepEBnAWv1CXD5ofkGtBPL6AFB9",
  "key10": "3VN95k8zDa7wJXZf6Xdo7hUSyqpYENpZmrsjMkkujH7TLZExBiyBqn3fAidEta3hefSJckccdgMBPkPXpduZGBbu",
  "key11": "5dTH1MUdseeP6LoufrtwqpPXTCJyK673io3nZTAWEHXdSzRqe7GVTpmCf11pZmjB3tgqEbxMGJi62atChE5fv6mP",
  "key12": "5jkQktsrtZf7bHyDkUhMgokv692bkjpcwVY5y7a34KyHzE53L9bsURMPyndrzPz74Vu5kYM5kEYkfb7n6NYC19Rh",
  "key13": "5fDULc3KdkUXsrpuB4xFTQsZ4kasEQfyUe2PEaJZAWtuKBEJR1DMyqLBSByk98vG5wAMBZ4qESJQ3JWmdZHxjfm7",
  "key14": "erjCCb95m7KbBtfTYYaVPLaxvGcTqYSEUEhyQyqWQxUAYnFvBhE5cV1dPK7rw7terrUYKitrJQskxcE5JcHRb5Q",
  "key15": "2TKSmKmCHkF7dwiD9FQXkFCAknHgUZGYFoUuFthomEN6UPM8bhT7zXxTKrrgdTTmSznmwDPJLWFDvYfdTBA73SiN",
  "key16": "4Jzno5FwydDfRHmDmTdfF1besAxAsZtPDveMXivj9f2qUFEJ4peSDAwnXtCz84uMnWS1zt5f1JSnWytj2Lx1hch9",
  "key17": "5kMQifRSYCnBs8AkCHoha2Kz7eGmANoPcttfGaXSb1LGkLqTjdHjzfFVM3hPJfndGB7UfSuETEE8UpV9K4M4EsNG",
  "key18": "8Ui3nTt5NtXS64QGAa3JB9S2U5vFoKzR6sT14UZMqDmonswmVPxc8ZgdqfpaJjMDjnMiXX1e3meskzyDBBy5yoE",
  "key19": "5piyWuVDP1HHUVxPrXmt2smo3p8yQridF5ffFdCYqTnM3oe1P5rto3MJq3oBMxvdTeN7vCFYJumzqqLnnNxHduko",
  "key20": "xSM3YnnVUbktbKVQBKBtvkJ2iF2oJnqhBW1TuNgo4G8x66itLhv8c7Me8wmj3bx1sGayigiNKTcphMBVQ538Wvp",
  "key21": "52wL5NoMjbecS4DVnne9VUejMX2kky3FjWQyt1TDVXejB7StPEH5cesUyUsGn8xAMgjMhZm4H5ug54zPpVX1YGej",
  "key22": "3uCVpMMLCBy37QdCc5ihJ2DXvvsAv7acib6n9fzMWZi3KbXAWZy4fsyYUE2e6fHwxig5VDjZFkLxBJ2cERmuyE5V",
  "key23": "3EwNiYY53uixX1uxdJugzFUd3kdgWrZ8xKkc5qEdLDm7bLEnbKxxBmp4nDyJUgxiFMd7g7CJDcjL5DhQ2zizL2y8",
  "key24": "2vz6F8eLgYepeYB7hzfAv5gUwSSvASeymeFAj63mAkxpp9Rr62oUFqvoYq4YiYPE3YMsTXw9n2JDvzTze6rjY7cs",
  "key25": "2C22TGTnmNL3CEhZtjwNHBfWiQGC1nmABMP5eoxorH3qazKGU3fxYT5YJbYLqAtntRgxGxnVTu5oyZFyHZtkxyMK",
  "key26": "4xSbZw2AjRArPEGdsbV9Ab8hfLKwHXsYw8fuFejiPrX8DuHbZvtcobpT4WPMR9b62nwuj8HNDTV5e5uDHPSqwQqa",
  "key27": "2ckSSGWC4CPBkSU1YGZwai5LJUdnoMwWqgcdqGLG26Yn2Mk5gSESW9fqdSyi4gKHNEKYDcHnvcGbcE2e9zgiD7YL",
  "key28": "33VyqyiaWd4fz3cnseiVzFfsZ9wNME2e6VnMRBdAKciBjjAk6GyFCTQigSX4bTX7c57ZigEe5wYafW3TKF9Tsf5m",
  "key29": "3T7KCwvwedkiqwxupbC27KkvYtrmmJpFYrzferFJ2WF1ZpXFxWBvvnpmdDcywqVGD4dU4aa4uLFkEPWaRFUKujaR",
  "key30": "2YiLTBbdvSsmZ2Fip4vCWDmFyjpkCJ79AmhuEXNvcNXoZSfHYojCZtJGqCwnygZiGVsohWzkX73Ehj42U3xy2S4K",
  "key31": "2ZMTUAgqEa978aXQ8UHSnKmNMWbbBVZ8SCKh7Y48HGb8Z9rHNFXkcLmWKCSLr9xbDbdEGCPUKYUES5nGVTqXCb1i",
  "key32": "3DbY987LfCKaT4nC5hecBUMa2Gwq2vx5REA7CKkKHDcPcdfUMQRgPQzApkMfF1gpH3zkPaPX3nsB8PDcxXqQBMTF",
  "key33": "ANcW2qijTF8k2LJJJTeescLf32dbJ5FaUnDX4Dob7FqpUcFxSjJqQgBH2NWBW55nLQMeAonbM5AwDuvkB2NXt7w",
  "key34": "2Wyrpy3jnCb5jqbTZdkByNBEN3ro7WkmtphQidLgEZ4T1nEAGvg2YJubRmMKUznXqFvVnkWNuLYimQZtJdBEsLmj",
  "key35": "27bPbcSacQfW9b4zPhaiJjfY8yS2Q2M3LB7zdgNbuSfbQCcbRQ9Dp4KDjP3LpbqXsEdBx6iSYCfwcmrSeQTRPvva",
  "key36": "265MgSnuYYiYsgGYDF5rXxBWVq2Yp3DtFJFbPuGknXLyNVfKzCXa1Nws4HpZj1hfxPR2zyKuZSyTBhaSJFCwNet8",
  "key37": "5qLXuKdppncNoP3Ph9ii7JtMs7cQKcUNdc1kcqbA2vGkA63qupdrtYS9zmbaN1y9AZnvkkNufVmy4d5wpMjcqM8M",
  "key38": "3Qd7C3dUvBhb7mMSHAErhnnkeqhAAfG6kCbYGBzKkG3yciRLeKhangwPzjFWNzzueXCa7QSQxSgWv9fwvaidyQ23",
  "key39": "5FCmkm6bsi45FsJqYr5uBbWwRdupSE5betMcQZh977MBppPSzzztRtYiETFvwztrLTfDdHWrhrFKCpEQMKpWX3F3",
  "key40": "5dc2HgSDrQp3L4pzwGgtii4tyyHqUJWs5cJfuFhSSANU9STod3yrP7FFk97nDZkx2UX8FQR2AXkMvLrNMPrd6xbi",
  "key41": "5KbGnGDgKYcor7gPYpNxBNmDGqdqaAKv1CbEry319zuXrmtAnnJsca5ZAwBTdPyMZjxoFHGm6mu5bYEi8PRmoLQy",
  "key42": "5w1YBSVfbJTE8CFSCjd55ndPtzb2hh34WTSepFNHsCqDQDLedLcBBHZgAkfosgfKTkdusUaG8YCyQyAdJwzJvvAB",
  "key43": "5B3YH7Q554gvZxyYFD2TGTUtQb3WtMFZ9ehi6eqPaHNxw5zdkLYDT37kDMsMJe82g9SSEMDsaHkDE7LR451p4sbf",
  "key44": "4cC4TGprbQ3aNP9xYqoF5n8wpTVpTJaX3v6brqyWArRfFEczoJdoymnxEdTxdrhjbUc3F7aFVAL31LfPoQPdiekx",
  "key45": "2Dp8WDUNBxbKsmbx5KZ41nTtt5o7UiMYKsmuexSBXkLbF6v47pDV7SutNm8GmNAvxLaFSmgDsKJG1hY5fyaA2LxD",
  "key46": "3EwihyquCE4kmHhmBttCuo1o6BAZBgp5X42w2ESRJxMsVKMhCKdoFKazKK6jCydPGX2RgZ3RSijzJCKvvsg76VoR",
  "key47": "2kzQ4oiD7WTYFxKCsXjAeC75sghziBdtoKqgqJBxLU8YEymV6cWdcp3NnGyqKAWRjuQYW5C6wyLw8FFwTJKXycH6",
  "key48": "3PhrAzPd1imBJwpxmkbLmudiz7krZBJ8T2911VkpXaP9Q1SRbnHAGMXg1MMua8kq9wwF5WCVXR1Spm5h7hMkpApW"
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
