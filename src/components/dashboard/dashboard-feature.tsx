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
    "2ZBHbFahUWU7q8ozTfZZBUgC66vGocv1hg9kaZ3X1fZE83JmLKmH3HwgJJijmYsMTec4JRxfXTJrDk9fF5T6qgGg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WU9Pzu7aXXUkRL49dEvSejjbi7uJo1uUh5L6AhshFncKEj2fMt4kDnwWRMWJwvKN27fvG5MSnFRvycKYtVDHT6W",
  "key1": "5wFKmgwE6uJWXLasNWgd5hyLBWKAotU1p8TtbyJghaw4sXakKezU2qQZp8rHrnkS4ydwRsr2YCVjTz8TeLDHKeze",
  "key2": "2UQf59VRzqaTW9i2m3CgbRp6uLJ5muzTmpJpWa9yeCr4v5pm91b6oYZWGBzWmmLjQApHiEsvSYZfun9tkxjpexSS",
  "key3": "467gWbxGz33DCNQuR5DaQLVEiKhtri5Yord9u4cPzvfiyF9kj4x7uFFZDGXoE46RyhqWDevKBjyu67XJk6eZZtgE",
  "key4": "29Wh7rjFxbz36Q4vhj2Z5G7gQDe6T6ZjjJADZzMEu39tdxcDzMgMsVtD6eDGnxeubJ9i8YKr3zvkYSJGJ6xVDo7r",
  "key5": "b47WpGRg5aR96TNzAmhZbugyhxrGPrck2VbvL8WeMvmASWLijyLiJSpTa3V6Frs3qKUjKC5QKsjkFTCpxdv6zmU",
  "key6": "2wWvG3gqAgtf9AL5p1ugT75SBpcr2cypQdBr44gdFtdEgPbnJNFeg9mn9wrKeJC6PS2LhKuXh82x1ZaJzEjimRLW",
  "key7": "33eE17rdjfFbDdppXQhJohysdPgrjVZpHqKpwUPFjuCoA7qHpphdSMEo6YvmdTs3CLVMYS8wZHySBL84aKazgK9Y",
  "key8": "x6KYZubVBgLc4egdrD1ZWu3ez42N24WxsGb8vN7yo5eatTHghVRZV8mCyUuDZPLXugTnzQxP6mdEtuyvhMXjHqK",
  "key9": "5rghUwfwvt8xvYCd1NEw3DTrKkrgTnQNbm5Cfcb2ZvbaydFtDt9tJAQFFwB6isjM28g7UD2sqPR66EWTkwoN5KVd",
  "key10": "5usDxg1n956gonRbUEb3vjt4JkkcWtMBxHC7kYUUSf7yoBYVHZtYfyKtRKh4z57KS62pXw3N2C8jQ63FCkpWaKJL",
  "key11": "iS184ztaMvJvH5uqaiPY8c2XLPvpfu8LduMe5XjEGLenFtHU6GBH8FP6dGRAKWjbqN2UUTHzrPrCQCiaFkT1VcV",
  "key12": "3FsVAGAfaQCpirarqwHDY5dbZKoT9XkyUpwzTsqE8ztHE7ni1nAjkKt4TPd3E4P9F2jy9PtF4DCJGs1f2uqt3efx",
  "key13": "ZJLHArAHu9TH3B6o1f6NwHngsKTfhFvGYEyzis8qLyrL2eauAxLaFbLdkdgyb4kQvGV6ZzgqWARvha7enxa8pnW",
  "key14": "2muAcTamJF75zRz2xzeZAE6FKhD2hUVZUgrSwnTpTnsjFUS52PS1Y9JC3rsRJBmDNcBoPsQZaZKXt48oCUpSH2VW",
  "key15": "35DCfBJReebdqVxoS8PcnehRKvawrjfY4Yx9wNA1P2uGxsyzWWunZqRRdXRtKeZc7uaSyDoF4L4oydWEc4KUbEnU",
  "key16": "2HaAmapAhafVoj7jK2nyBscYfZGGdMRTH7vB4y41PotMZuFyCCCAqHZvz6tMRbNN2gJoAGe4CLCt1TdzkZ5tTpou",
  "key17": "kcHZ2RThF9eUnK98bqoqcf4irncagHcF4zSF4LtEg62w3ZLCYkVYBgY4ofM8r329Y16gj1kem8pY7nEGRopXMAT",
  "key18": "ywL958BMVdT7orvuCnmuwr2aGFbTaHChMxLhCy8ZE8ucaEWoQrBKYKapSRhd7tqcqemN1dKDFB7coZndUBXSE1j",
  "key19": "2V37U2HyfFkpHsw8VEh9QG3KepwugN9Uwi3H9SVCrodBXStdkPy6rGpqJGXhnUTxJgUDMEMLuX31jcSapSGDYCjE",
  "key20": "3fpLX5bSDbYevm8Son1ganB5sm6BMucjJmXmqEiCwoLjBg2sn7e7kYs84DK6bnVVjGAfm5e5QNC3NPiEwqXBJxBt",
  "key21": "2kxjomdYUrzUeiKeFurSrsR2LJfZvsyFMS62cUmMyDFGR6oeFMSCdmezetuX4YcuUVjUyTtnbFv26exUSqKmgneg",
  "key22": "4pPU3g8hMAEjJXf6LFZoWwDWRQVbyUv8ZPmZ3gQuujsFBqDJv7X5ZeyzDX7kQ4tLW1rg7dKpNbqHX75em1BSUYZw",
  "key23": "2MqPWrgZQ5HoyA72n6U4341WQG4qUofqGKtwbw78TyDoVqFPEJe94jks1q7VjmhRrbcC1fTYWnic5CfAFNBDTbPy",
  "key24": "39p3wF3e2MAGWydmduzpFp6pHC9VDS7VscUxNgykw3KDp8EcWZW3chV6Zv2RHc7RC9qcs5g4yPTe9hEsAhK9ZB1x",
  "key25": "336RKZuQSEW9j3JMcv3bG1VJys3K2ExidoKZA7YrwjjTNDVUX2GTT1eTxF9xducuF2z5hwM2XXW5SmqEopTANs8e",
  "key26": "42peXJryPuXEMoJ337svJUTKuS8Ziw8Edm2B5zaenypKBgbm3Bc7nzhk2DHTSLBDKR2adh7qG1t5p5thBuo8Qq6M",
  "key27": "bTTDuuAshST5d8tgYBfvoPZc6pH48biGbNMfDUQaNZ9336H7vHcFdEufvPGweMK1mUzGdrvqC866WaYQcCno6hb",
  "key28": "2ixyqnHL5DnAPKUgzsuZm6Zgodeq98iiR1ZUxeSWFSEFPaiKjSFWqjwo9tYtKMAcq5rzEL8Kp8F8L7yfBphniMo9",
  "key29": "weHcBPm362YqGVpAftMjhNKcZ5Eo5bYJuZeaNSycn8Dk6Zm1s9Q1Uq8fWfY4D787jxmMJ5RCPDGY5MEmDSgmCGt",
  "key30": "3QJFdFfN4hv8esqibV7F47AyGKtHKBhrBDXfaoWVBRNnDZJDW7dSwQCBdo81jhXMFbBTz2sxuQBiWqaB9sqkqrbr",
  "key31": "2XmxkUnAVfSnrK4nBZJzL5CifoRorN62WJUy59GszCR1NuEWdvbZaJEHVSzRYqG2pR2UJzu2HKL1pgr56fx6mnKU",
  "key32": "3LwyFPoZMj4c9729udoTussDh8n77NojcRzXGK7s4WPd5J88V49JtHsZvqkPtgcXy1KPc7QaC5XXVwefMyhuYMap",
  "key33": "4zZj3TAYqui9YQ6pvVwQ4a8nffiXn1W11bhYPRmzYwVGr91egS451cPbjnYGCUMDE8hQHajgd12HYCkzAZWxPPYD",
  "key34": "5qityuHHRxgD5ZfRYPmh7AVjRPeUXRhbe5supXovXVZUAe3dUyf2Qxncv8RnPxvVpkoy1N1Bpxc9dZWHwHsRNWbv",
  "key35": "5veEeYj259Dm7CL625uRArPoSGedB447UrP1ZiyQsycoDiBfuov9SoYSxmBFjGYABu1quvEmeg5gnAmtZCCTfEFb",
  "key36": "5MTfZeYMEk7d9UcC8oby7VTwxH2FCwHmS8UmGiSWPNAmMZPE2T4QvpuoXVCKPXvaTXpKKMjE51gBeZmozWHvLZcM",
  "key37": "5LB9BgJ2XUpGcTaqDcqZWuHa4QiiApNYToxFLdgdmQ1obUKqzxK2pSmaozcAfCT3MAeuoNKy3D1mkwWRFi42peiB",
  "key38": "2ybo4uBAPzBaTnkdaQWQMvdnVRttq8p4LBEZ9o6W2Vbjj9wKrTKBUq3WbYCTJbaNg1Mmb5m8PEHzcZwFb2L6JjzZ",
  "key39": "2RB9zKwqPKKxmo548hkqdmUKVRo1KRKAGmVMGugcodNgov5WxtDN6ADfQ6EMkxj5oe634RisZ8EdrNB1z9y2L1DH",
  "key40": "2514pnRj67pdZMD5JM9a8K5r1uR9pByoRQf4m8x7J6gqoxRTerDjpSdCcrtwgvU68ZRs1jM98936srE3opxBsWrx",
  "key41": "2YMrLBTqvsNfTDS3czREKCHdyhWCJTnSs3JKXWDj5V8jzmnActFXqGzjF9X3qW8rS3CJbqpURfERBvtDLYywxokr",
  "key42": "5GkBDf8bqejU6TSfL9jGbzZmkWXviPzgvNPQMuQHt1G4s2h2g2kvnx1oDhBzxWY8tMm5YA4a37qLUiJLhLsGcPe5",
  "key43": "3dnkJXv3LbkyxFeszyeiSuyD7bapT8mWZuEtG5B2t7hfC7iKCXqAH2CcnUjj5jdQ5wc9TV8LjQw9bK3eUPMS6Xfi"
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
