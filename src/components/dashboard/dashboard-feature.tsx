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
    "5KYRLvQ3mRHMFbuvqJ5e7bmg82ocy46WS6spc1dmLP6qW5CwfyUYZRso9cwRYsZ6q8JNAp2LTgP5B5uTYdqRyow1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iNQU7YKrgURLku2ZkX7BJgog1J5CCAM7oHY6463LBc4CAwQZr7cTUkc1MfUtkmc7oMharXGBQHNc7jGUoQuaJcJ",
  "key1": "3Kju1jYvcHGPEtsPomZ5cJtGjWmdEk3e32vmpHbV8ND1VUynPdguvNHvbrtGAxmQQbbXeHt3GXZeNE8xq3p98697",
  "key2": "FsHi8fUW2716hMr5NaKXFirzuzWKYCnZt16hSTvi5xLbKrbz7PCA5caYY9dXXQSaTtGeBb316rP5c4vrrpJNTzs",
  "key3": "4sN8n7XDtfJYTjgcyfuiDw47LuxVms71P84WEXbSyGepz15TkiuRMpEP8bj3zrxLLQYHU9SpVG73kcHm9dcYChGQ",
  "key4": "3A8XNsCh9hvywZdkapseDPKWk436cbiCgRSvyH1Jk1KwHgeBcJYtjnJMWiKoD1tsefrNpngqKUL1QrKgnB1aUDRy",
  "key5": "4SqUD33ZA2A5E76JgFWtWQY3LWmUoegXHEx8XeQnYEm2U6LYpv6zYNyAph7KmxU8Tp6hdhQku3GWhhSA5UyY4ZXz",
  "key6": "zv2jb4CccsuT75jNWQChgEqyhZNDLtqSjK87CkPdHrtEd8ucsGbwq6Gg74p1JtxnaEewNSKfSxY8hxCNS1wreoy",
  "key7": "3fQjS3FuP85MrsgsMBnDrxzcy5vL1o74ukCkGTtFSuKiMMR4Dpj2UGqQZfWPNRyffN1pg8RhrY5ae7eYh7srzVsZ",
  "key8": "4DiGyFaVfRH3nsBTdaPMu27kNVwmifiLNWGaxJPVm2MYXey14pyAym7vTQDRrF7gsmKYjzuTTvjFoAYZ9AtPKHeW",
  "key9": "48TMZjTF6xo8csqhTxaFCNSDJCPuyFDD5rTdSqiRyJsaEeHC5MjKWdZeE71jUvSdMMgUKxb3dQU5AyLfB78y6KrW",
  "key10": "5JXbDUirco4y983voQjjLifsm7ywn6wRFkgEENHNqacc4Z61t4sZQWJWk9hNZACUzU6rHjQb4UAGseLgQrLSrDc",
  "key11": "4JMc6AE6mEm4Dnb41NJPKcdnKqJYh684Fd4HVz9D8Xza11uvTrnGtG34Se1prG4ZniftqSUXtWRLu8uG7e53Hyd9",
  "key12": "2NvJKex2BEoeL9UcfUeA2ZZJURsn9kEvYphPFQzs2tVhrHhCJYqRo9yNSrcbFvn1Bp4xHvGMSeDJwuPZh7ZpEz2S",
  "key13": "2Qa4fJhibpPt3H3MTNzWfqY3s5QPvtum1DuW6tEnCmz1tW7hAqSZyiof6eu5EyWFpPnijAKyucpWMJKpiuGQrA82",
  "key14": "u3oZc1o5vtm3VkpwkaJanpWWMpd7GdF7Rfcs8xwH3aoteurjQTMXP832hdiEgZSCZDmbRRhrcLkAkCQdnX35pST",
  "key15": "41nt4DbSY4mkkuKbGQXHDQuwLQqczpYU4HgWZUi2Y6ACqgvy9xRv95G6k7KyhDSbyJfYXuznFchnotz2fTSor6Bo",
  "key16": "26dKz2GTHYcHtiejQoaNQvHZkwFhMERvqSc6jRQC7xv2g9A5KsP6RzQMF3PXD2Mj8e2nH4DmE4NCLUY5mdgyrwoq",
  "key17": "QWXFcXzp7TA9bqF67wgcU4EJCskwF7o9oA9NEoAb3qfo6EXBaUJP7kKUEMkd1eBiBQaX98J5eSLwPR64L6WiMHB",
  "key18": "3aHWcASwJi2SFhD7EUJAjk2zWDiQS7pEA2eqzHxUqDBTAJccJcRVfXTDzqzUywz8KD9bUsKT3SfQCEJcdQGRpV5T",
  "key19": "5YP1aBKW91yV2gwd1XrXzqZEBBtEBqYZJHRqh8e6mSSeKJPSXDuQDkB4d8TGonTgDm99ce8nQu5dSK6ThWHeuwS2",
  "key20": "4oHEVuAcRe34E8Mwuinf8xc5vsUqGSgbGA3GPmuwEm5optJvDT82KDLeG8Q6gDbSfnvbZSLZapS3BxYHjFSSEj2y",
  "key21": "5CQNgySvq6hputvhPhd5nXhNMHT4kAnh1h4iAEKcJXSBy8gKEUBPTi33dR77fSeHtHkjGDNjXtUnG5FYXdLibLLv",
  "key22": "2SyENrPohy2UzvZJfcmFCMiXnykXLZ5i2HkoiBnEL5FUefDDDzpyAnvttmBwuCReH1Ay6NCds5eByHfoVd8wVpnR",
  "key23": "251FGem3ZP53F7r8ceVhBzAx8FRVXvHfW6dsfiCNGTXYMhVemowZz1wvSviHCKyartTHJJ16EUtkkR1cKKqhfGY2",
  "key24": "nYJCW8DaaBQg4MiuVJrbTq3cXDe3cDaztYLVXdLsCbcMHmCrnMoggVFkyeDhYwS7PMbhcLjAmbb4ytELkGt7fx9",
  "key25": "5Zbz5Ut8hGHmh7VnDD2LiSkrVtqZt7mYB9Lk7XHoeNWF5CwsQFW2zyQqUrLNJHet2dqowqbgLCQJYrpbCZuvHGTr",
  "key26": "2LG1jzXt4zM6vfHGaqRaz9TmSvGX9ta3zYFrSYqPeyh7JVUsUvXyZU6sspUnaDqtfjFBgPs3dsX3UeMzXoZVxfJ8",
  "key27": "5W9NYr14k9XYmuuEpHkp4XX7kuLcC9LHqgWAoNEGnKH4dHZEWcHhvpBxMjCqQttwZ8rz39Vs1wsMvBavhMxeYhdK",
  "key28": "3vnZaH4doVvMJiq7AQ34VU53b8ywcCnmKehUCix1HiufPxh2w7QgQVEgYWi2f5aFUXgpBK3yfdW4HsqAr7Usb8tw",
  "key29": "2K588cNsHADjTA3DSDxoANg5mkY68dkt9dxbwEuxdAggq6zNd9KixF3jL6bYa87TcxoVmNwjQT6xRoY5Jb3gJJhb",
  "key30": "XviHzUxZxcvqqBtDqL1evKrRTSG8dyvnpGJs8M4k1Hp8wh5XcuimGiAKCWnHrvCJsw2nML29gakZh6f2N88h26R",
  "key31": "4sVLTMsCn1Zi2trpe5b8P51HYiFtxiBWtaKZyCQxkwnRd7mm2z7KEJzhWGHB75tKaoewEq7MfxPpvy4MeELVuKX1",
  "key32": "4dgNz3PEQPax2cFCXe7KJvnSxHCQpMQitNAcM3XQT2CRpUS4JUHfabmUKxH2ARjFhRWyfQUTUfrkJwqvAP6QwX4",
  "key33": "4HK5fZK8hbTF3y1sDzuuFZnc1SxZNoduydpAQ8U1roHPCNiJDQJbS48ZPY79UmpVtxecKHL1VoGBgErkdz75iXTR",
  "key34": "kQDXsP1kpp2mZNATi82Ax6ggCfRoHXycc3Y4jHXxpTgDrmFU9PdnHQCuSCycRCPVbA2zfnzYBqQUo7ymnoxYLE1",
  "key35": "3huYWov4vbPkvJW8rPnVE5D6Beh6cniwGpahbvf6DKsxNT3op8Hry1qgzuMfTKzxi1SBVgGUY2PhgwuxVaaL946K",
  "key36": "XXhi9xb5QrGPchGzjaqfMMULcGCUEXWMb4hUHgg8M3PhoJiznnfQeCRMuwdkYnkDt8o1niHKPZrhkw6JiW9S9cn",
  "key37": "5QaogUkEuRttPbkAAjsDJJrTfBnRdNMeGKquK2sLpH2E43GnDEp3AeuTy2bPtuP3TS3X9wU1uJhQXRrtRfGXtMbZ",
  "key38": "5u6je3kwqsmZdz2yGdZfcmqgSjmounSYf5XB7du6p3Jswa3jGtMudwQsuooL3jKLovGb6HgeXE4xoYz6PPqf6dmV"
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
