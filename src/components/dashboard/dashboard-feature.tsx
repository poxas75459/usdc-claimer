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
    "3EhcX81f1XqvSBStBxiZa6nMYLbuwVPD8rMuMR5Quh4dYkgKUrUNBQsxaMMYPfREXGgiFW2sG1N18f126rV7HuX7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r7VBtVTXifiqJVm4KJLxrqB1ujfuHV4dUry1E9Nq8SNWUhdV2XayHTueKWRJHqeKimbuZsAmVYBcbqpwAA998gb",
  "key1": "24y9UPzYL8jNYXrWYMXsaAAkQLb9zrrXSMYCqQNsv2azNAWCBfNvfKEhnko8E7FBj6shxFdEDeqNV73v2CTv9DV3",
  "key2": "5B3MgZNRuJrTe11U8yCZgFQRKTPw238aYxSvC3hc3PNJsZSKzbZ6rV2Y9ZHVtLhg5db5zw4oP54gZhwFU8kpU6o8",
  "key3": "5xri7jwPVNy5TTcGZvXjovXp2rEvHsw7QxSD8WyCEjBAMCg2tZVa4ZdrDyd8gciJUBXFYH6SXEA85JQN2ffXu6ZQ",
  "key4": "24EhTVx452ADm4VtXGCBRck3C9byujZuTMxBnNdo8rnghXRyS2ydaEmvnNcARAh955DZgJAfiaWuqzakdTVUPCfe",
  "key5": "5tLc4CccFnKjLX2EPGrJWp1NDPhDkEWMVMreQLt9xH8T5GAz2RHHEdsd2ZpovKGkvErdkcH7phjBPv1M6aaEXPkY",
  "key6": "54N82U91hvJV88xWLsbxUnMJRA6p6ciPmTtVE97WTUXKhD86TUhwV9cM3C46nYMh4wk3SJgt7K7Txvy9scSXCJ1m",
  "key7": "5eo6uz6v6PVRDr9thZZozfpGRHNgosdoh4TUsWdxv7UBehZpujSBUVZYryFSowPsbjs4jYosSjRM2ZDdYW6TXMkW",
  "key8": "2H6TUbTN8wh8c2RCXRbuwnDSeBAeSGmSXXEEHbdUTifJNbpbaig9Jjwbg5NKqRhbpyZk3aHW95RJr5rBMEbLh1sZ",
  "key9": "51F2xMvDCviwoL7HCsKH6oPkfYMiHVZkTF9fhaSJdCHpcLgtDgWYyrbMNYUoDSxfa6vwh4ZKAFjRWucgggjqp9wg",
  "key10": "3ggReKRFQDGhA8NBtQb6QigrsJPLYjWeXCwBgEwFZqinvtHoXU7ZyRSsYNV3DM8tNMeKXuazpPtnagrow3qaVs6b",
  "key11": "3ZLoRvtaFFrSZJGEJKYS3zwAESViUWGgPaRMMjM1yp9ZpMXEyhmp8cH4k95UgdEH3bf8PsKgH5aiCMGmPZrwS95d",
  "key12": "5xabBPkMGmudNvKoFb2iWUdWuPruDPUfAuGKG4fBsB33KJVayDxBHKeKzncBrWVWzNekpZoYJpjD5VntJs48kr5c",
  "key13": "5xmU7nozeZHJCddHRuNDi7DVng6cu9WPgwSe9kYPCdYZxuuJ3iDpPZUao4yHPXkVRLyfnDweJwL6DxQFmFzZ4gjE",
  "key14": "3mSeX3PDJh5FT1RRLB8LSseeU2SPaFGsj91YGTsLQKV1MHUh3hBkQqm345xEzfPbJEc67UTojKreBcYjXUuX9Szw",
  "key15": "3ocHqPA1ARV1PRvgx4uGBndY5zygnX4h5AUsaAXsaF55Ux6L4Xaz5i9AjC4fxv4rfizf3wzcsfRpo2BK3K5VbhMr",
  "key16": "2uzxbk6AndfrDjwKbgHhPyaxBGDKH1A51RazmRge5jiccQZ31YSRCALivVA6NrTh7tQCgNq8MX9V4gD5rTWkTg1F",
  "key17": "3En1KfaEFpSnhmP3UtQe1VfjUxZJvoVLSNW5uCC5sSJSRkzgHgsJrPaKhv26gChUaAaKMXYiztMXsZeaYWBE4b8Y",
  "key18": "56DHd7aXm8UBs1Ame36jpEZjBz165yuTZtcw54okQ8PAoN88Q2tjcS3yjwA1GPbbejzuKfNMd96WNdBXsuveXyxY",
  "key19": "2Y5j9oYEht9q8AwAzJirqA9gfhDbR86NuvdQ8jGrqo2AkMHbduFDUkjDrFDuoBQBFTiP7k2SmoFCxG3v1caCC1Xn",
  "key20": "5aQzHLh7C1MscaAvn9HYK9VNzzowugUK4QkLvRhGQFmZrTvK4FEd8KEMUP1gi3ZL8BVY1ZEL5RxH6ZHbM8rCY3sZ",
  "key21": "4uxf2QT8yqkS1vzniqZV4ghBaxmz7tJBbSizr8EBXhgP4bth88WFABpp47YTKETJrktWcrymbmSfXHRt1oWMC81q",
  "key22": "5qH1mrfeYxZRQmh5me3gYc9v6vob5zGXPdbhs31NW1AFTjyqQDKBXEAem8VowmnjSCQB5KhY125dULUyzT9a1dk3",
  "key23": "iak7oTbBxG8uynzKk5WiFBebEbhD5e3xhpeRMstppeP1uBPxp7nFnTTMWv4anZNiPeTadF6k2zGVhzDxYbPR1sS",
  "key24": "3nvodfR3BFbskS1kKUFt51kD5xveYMjinBz6PZqq14jD5GDX8VvC1KF5ZcX2DrkJZS2NVraRqhko2TJUikSuBC2L",
  "key25": "3HwssdDU7xDjCiEHLG9C2zidx2GZ9YkZkR8cwTknbhTTi6LBNFMpqyC4BCS2a2ooYq9qBjog4vgEsMH61VLfAE9g",
  "key26": "4imLcBwytJMkxSmk4qBKNffMSCQDjZfB1Pg9pkpNgamnMjgsHSXgZykpdEFP9yYS5XLBbiDxEfCuXnj1XMr9UiAE",
  "key27": "3YACQ2CLaHkLmDTCMaBYpXQmNsveAi1WfT9xjAGi8gPv32gi1AtWh9nrGRvo6sVzWiJgembFdhDoQdx5x1PGXNCf",
  "key28": "5KasWzujnnBsXKMFD2AqDGQRDsruXV58PWQumJG5amdQi1zUoP1njDPPv1j88oQTHDKGemXSCUcHCjupceKirH2G",
  "key29": "5REqgqWzPD9gdyTNxweqXM1qabaStkwPpGzZVUbsAbgMCYkAYqsG7vZAySUfPQXFVTazQeM4KMeFJ2FTvmU7BXnV",
  "key30": "4FhedT8E844wS3tk5bMpF9u9YGg2pN4WT9a1zRakoYd2Dnasw1MyHhx7KuZse5DJn57j1nbWaBsLAD19L7xCpnuY",
  "key31": "4JT6q4mDJca1iUjDaygouZsH9g4KfDKouPy5p4RWQpmbKBquFFHtMeqkixQagoSEJ83cQS73JVafoGxV5Rze4KXY",
  "key32": "4kuMdJVgdEis3uzwgJEnVk3QzX9fjqgqEbSo2SmJHgWr9dRGDpfe5Yf6rX4KGqtZngUNeiA4H6ibLemBEA8M65hf",
  "key33": "3wGtc5TEJDk6dUua3LQt4gx2gcT9t39BEzrUYXTwHf56FnWZPEyJzNoK7E7wQwPQxoGHuFACncPZbbmn5KCFGC1x",
  "key34": "uToFBrQcpVfwiu4CFuDFekmDiJJUgib8qHLGeocmQ4LA1dqpDoJWcbgLgkjRFYeZXWCfcdsNP9HUoVGTpKRaBgZ",
  "key35": "26Mmw9ykTLpkmyENfgi3Kr8bqJ4jVDcQyZroPg5WkNbUuVi3TxvKhukbd4m4NkKaRiYvNWnwsEVuMCBM4H4LeJv1",
  "key36": "67Wu8davEJ6SLcbJxtgMejd2eGr3BnUcZfzAJJySAsMKLxz9Us1n2BSPEJxiSPaoJ3zaixQq3rv28rn5ACy3nyCV",
  "key37": "2rAzH35mqba2Z1UU1G1WKap8KiJRvnGUXRKya5goGfJ3tdSu6ogdFSQ1DpCkhrNqhwygmntHgz1YXhLkj52C6e3V",
  "key38": "dJ7VCN7SyUyJGJvyWPupa4BrMqrKMAu9mJ3DxvgVodwBWFGhNqduf5N3iv9tX81sxDjD2PAXLVt3ECKj2J7fq8d",
  "key39": "4FEYtYDGUj2UeX6ahd44d4TEwGrpPBCnkF2C3T9jXDJ2UV8qwytj3kNMnRKt5KNPNi7FGM65zt7CqYCQZTn3TmVV",
  "key40": "Kz9DVBTyTjycDm6RVyqZjrZ9JsuLzZsgxTbzNzsg1frWP6LKNgPPWvP2Bj1tS6PDXSDBvQXfdyePnSNmC6zTdXT",
  "key41": "4nKfoikfTjfJNErWGeHP5MwwLXZUNpHv8Tn66XXXvrft2by4nQ4mhWWKSBnNUzbDKYJDBfANgb71MUYaKk2TL89r",
  "key42": "2PNDPcPrNVz7Cmb3C4EhXDuaSJC3NM4SDfFkMz9B639eLGiU1847uyB63UtwxDjSAzYnGyt1nX533NUevYL92LQX",
  "key43": "4A2Kk51VyoD5KmNSWKEwPugT2B9bZ6DGGH1hMqapRPBWkK2A84XE9K5Sm7B7ZW7MX3LLXWry9m5ohR7XEtUoQi7q",
  "key44": "4VLkC1TXoSQTpuYag33TU6uWAxQw67qQ11dSgTSbEpGtrbesfRs3sYG4BHfrGquRBebrDCBWDvR3FS76KeKQW9R7",
  "key45": "56VkLsCGxwmSndfwPSyRWNYqJBySMq1GCkw94Kyc4RiKvLM39MjMdJg93Fep8zJr6hVneeNPHS8NQ7VsVVx6m7Ke",
  "key46": "34cgxEsC9CagNBeX342LcDctJQr4g5cPjLGxSVx8xXdMrpsuyMvXW5mKxRrP6BY9D6tYQ7QqNNu7YLhonVB14qRu",
  "key47": "5u2MCKaea55itjchF29ZrbcUrk3ysm36sNcLQT4dioYrfvy9grPBYaDfxhDkyeSzUs17ZhZTG7wpnB49W8mER9GY",
  "key48": "5fbDKTE1vRFVB1KAWMWs7h8dr8XdhW5emmZDcZeC6gpbG6Hu6tC8QspevrLNABWDY2B7GcTumEDh3dEGFcGHHRNc",
  "key49": "38Ka4C8HV6R6RtCfDrS7sXJL7P4FdkWHWmH4ADRPKjL6bM4DYtkKhaZ3P5QtVj9hgLM2tNDQtqWvdmSjoLE4bz5t"
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
